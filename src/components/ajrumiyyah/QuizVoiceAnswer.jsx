import { useEffect, useRef, useState } from "react";
import {
  deleteQuizAnswerAudio,
  downloadBlob,
  extForMime,
  loadQuizAnswerAudio,
  saveQuizAnswerAudio,
} from "../../utils/quizAnswerAudio.js";

function formatElapsed(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}

/**
 * Record a spoken quiz answer and keep it on this device (IndexedDB).
 * Also offers a Download so the file can be saved to the laptop.
 */
export default function QuizVoiceAnswer({
  drillId,
  questionId,
  label = "Answer",
  variant = "default",
}) {
  const [isRecording, setIsRecording] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [error, setError] = useState("");
  const [audioUrl, setAudioUrl] = useState(null);
  const [blob, setBlob] = useState(null);
  const [mimeType, setMimeType] = useState("audio/webm");
  const [savedAt, setSavedAt] = useState(null);
  const [loading, setLoading] = useState(true);

  const recorderRef = useRef(null);
  const streamRef = useRef(null);
  const chunksRef = useRef([]);
  const timerRef = useRef(null);
  const startedAtRef = useRef(null);
  const audioUrlRef = useRef(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    loadQuizAnswerAudio(drillId, questionId)
      .then((record) => {
        if (cancelled || !record?.blob) return;
        if (audioUrlRef.current) URL.revokeObjectURL(audioUrlRef.current);
        const url = URL.createObjectURL(record.blob);
        audioUrlRef.current = url;
        setAudioUrl(url);
        setBlob(record.blob);
        setMimeType(record.mimeType || record.blob.type || "audio/webm");
        setSavedAt(record.savedAt || null);
      })
      .catch(() => {
        /* ignore — empty answer */
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [drillId, questionId]);

  useEffect(
    () => () => {
      clearInterval(timerRef.current);
      streamRef.current?.getTracks().forEach((t) => t.stop());
      if (audioUrlRef.current) URL.revokeObjectURL(audioUrlRef.current);
    },
    [],
  );

  async function persist(nextBlob, nextMime) {
    await saveQuizAnswerAudio({
      drillId,
      questionId,
      blob: nextBlob,
      mimeType: nextMime,
    });
    setSavedAt(new Date().toISOString());
  }

  async function startRecording() {
    setError("");
    if (!navigator.mediaDevices?.getUserMedia || typeof MediaRecorder === "undefined") {
      setError("Recording is not supported in this browser.");
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const preferred = ["audio/webm;codecs=opus", "audio/webm", "audio/mp4"].find((type) =>
        MediaRecorder.isTypeSupported(type),
      );
      const recorder = new MediaRecorder(stream, preferred ? { mimeType: preferred } : undefined);
      streamRef.current = stream;
      recorderRef.current = recorder;
      chunksRef.current = [];

      recorder.ondataavailable = (event) => {
        if (event.data?.size) chunksRef.current.push(event.data);
      };

      recorder.onstop = async () => {
        clearInterval(timerRef.current);
        const type = recorder.mimeType || preferred || "audio/webm";
        const nextBlob = new Blob(chunksRef.current, { type });
        chunksRef.current = [];
        stream.getTracks().forEach((t) => t.stop());
        streamRef.current = null;
        setIsRecording(false);

        if (!nextBlob.size) {
          setError("No audio captured. Try again.");
          return;
        }

        if (audioUrlRef.current) URL.revokeObjectURL(audioUrlRef.current);
        const url = URL.createObjectURL(nextBlob);
        audioUrlRef.current = url;
        setAudioUrl(url);
        setBlob(nextBlob);
        setMimeType(type);
        try {
          await persist(nextBlob, type);
        } catch {
          setError("Recorded, but could not save locally. You can still download it.");
        }
      };

      recorder.start();
      startedAtRef.current = Date.now();
      setElapsed(0);
      setIsRecording(true);
      timerRef.current = setInterval(() => {
        if (startedAtRef.current) {
          setElapsed(Math.floor((Date.now() - startedAtRef.current) / 1000));
        }
      }, 250);
    } catch {
      setError("Could not access microphone. Allow permission and try again.");
      setIsRecording(false);
    }
  }

  function stopRecording() {
    const recorder = recorderRef.current;
    if (recorder?.state === "recording") recorder.stop();
  }

  async function clearAnswer() {
    if (audioUrlRef.current) URL.revokeObjectURL(audioUrlRef.current);
    audioUrlRef.current = null;
    setAudioUrl(null);
    setBlob(null);
    setSavedAt(null);
    setElapsed(0);
    try {
      await deleteQuizAnswerAudio(drillId, questionId);
    } catch {
      /* ignore */
    }
  }

  function handleDownload() {
    if (!blob) return;
    const stamp = new Date().toISOString().slice(0, 10);
    downloadBlob(blob, `${drillId}-${questionId}-${stamp}.${extForMime(mimeType)}`);
  }

  const compact = variant === "compact";

  return (
    <div className={`ajr-quiz-voice${compact ? " ajr-quiz-voice--compact" : ""}`}>
      <div className="ajr-quiz-voice__bar">
        {!isRecording ? (
          <button type="button" className="course-btn secondary" onClick={startRecording}>
            {blob ? (compact ? "Re-record" : "Re-record answer") : compact ? "Record" : `Record ${label.toLowerCase()}`}
          </button>
        ) : (
          <button type="button" className="course-btn primary" onClick={stopRecording}>
            Stop · {formatElapsed(elapsed)}
          </button>
        )}
        {blob && !isRecording && (
          <>
            {!compact ? (
              <button type="button" className="course-btn ghost" onClick={handleDownload}>
                Download to laptop
              </button>
            ) : null}
            <button type="button" className="course-btn ghost" onClick={clearAnswer}>
              {compact ? "Clear" : "Delete"}
            </button>
          </>
        )}
      </div>

      {loading && <p className="ajr-quiz-voice__meta">Loading saved answer…</p>}
      {error && <p className="ajr-quiz-voice__error">{error}</p>}
      {isRecording && (
        <p className="ajr-quiz-voice__meta ajr-quiz-voice__meta--live">Recording… speak your answer</p>
      )}
      {audioUrl && !isRecording && (
        <div className="ajr-quiz-voice__playback">
          <audio controls src={audioUrl} preload="metadata" />
          {savedAt && !compact ? (
            <p className="ajr-quiz-voice__meta">
              Saved on this device · {new Date(savedAt).toLocaleString()}
            </p>
          ) : null}
        </div>
      )}
    </div>
  );
}

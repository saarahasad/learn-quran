import { useCallback, useEffect, useRef, useState } from "react";
import { appendRecordingHistory } from "../utils/recordingHistory.js";
import { startLiveSpeechRecognition } from "../utils/browserSpeechRecognition.js";

function formatDuration(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}

export { formatDuration };

export function useHifdhRecorder({
  resetKey,
  onRecordingComplete,
  useLiveSpeech = false,
  getHistoryMeta,
} = {}) {
  const [isRecording, setIsRecording] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [error, setError] = useState("");
  const [recordingUrl, setRecordingUrl] = useState(null);
  const [recordingBlob, setRecordingBlob] = useState(null);
  const [liveTranscript, setLiveTranscript] = useState("");

  const recorderRef = useRef(null);
  const streamRef = useRef(null);
  const chunksRef = useRef([]);
  const timerRef = useRef(null);
  const startedAtRef = useRef(null);
  const recordingUrlRef = useRef(null);
  const onCompleteRef = useRef(onRecordingComplete);
  const speechRef = useRef(null);
  const getHistoryMetaRef = useRef(getHistoryMeta);

  recordingUrlRef.current = recordingUrl;
  onCompleteRef.current = onRecordingComplete;
  getHistoryMetaRef.current = getHistoryMeta;

  const stopStream = useCallback(() => {
    streamRef.current?.getTracks().forEach((track) => track.stop());
    streamRef.current = null;
  }, []);

  const clearRecording = useCallback(() => {
    speechRef.current?.stop();
    speechRef.current = null;
    if (recordingUrlRef.current) URL.revokeObjectURL(recordingUrlRef.current);
    setRecordingUrl(null);
    setRecordingBlob(null);
    setLiveTranscript("");
    setElapsed(0);
    setError("");
  }, []);

  useEffect(() => {
    clearRecording();
    setIsRecording(false);
    clearInterval(timerRef.current);
    stopStream();
  }, [resetKey, clearRecording, stopStream]);

  useEffect(
    () => () => {
      clearInterval(timerRef.current);
      speechRef.current?.stop();
      stopStream();
      if (recordingUrlRef.current) URL.revokeObjectURL(recordingUrlRef.current);
    },
    [stopStream],
  );

  const startRecording = useCallback(async () => {
    setError("");
    speechRef.current?.stop();
    speechRef.current = null;
    setLiveTranscript("");
    if (recordingUrlRef.current) {
      URL.revokeObjectURL(recordingUrlRef.current);
      setRecordingUrl(null);
      setRecordingBlob(null);
    }

    if (!navigator.mediaDevices?.getUserMedia || typeof MediaRecorder === "undefined") {
      setError("Recording is not supported in this browser.");
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mimeType = ["audio/webm;codecs=opus", "audio/webm", "audio/mp4"].find((type) =>
        MediaRecorder.isTypeSupported(type),
      );
      const recorder = new MediaRecorder(stream, mimeType ? { mimeType } : undefined);
      streamRef.current = stream;
      recorderRef.current = recorder;
      chunksRef.current = [];

      recorder.ondataavailable = (event) => {
        if (event.data?.size) chunksRef.current.push(event.data);
      };

      recorder.onstop = () => {
        clearInterval(timerRef.current);
        speechRef.current?.stop();
        const finalSpeech = speechRef.current?.getFinalText?.() ?? "";
        speechRef.current = null;
        const blob = new Blob(chunksRef.current, { type: recorder.mimeType || "audio/webm" });
        if (blob.size) {
          const durationSec = startedAtRef.current
            ? Math.max(1, Math.floor((Date.now() - startedAtRef.current) / 1000))
            : 0;
          const url = URL.createObjectURL(blob);
          setRecordingUrl(url);
          setRecordingBlob(blob);
          if (finalSpeech) setLiveTranscript(finalSpeech);
          const historyMeta = getHistoryMetaRef.current?.();
          if (historyMeta) {
            appendRecordingHistory({ ...historyMeta, durationSec });
          }
          onCompleteRef.current?.(blob);
        }
        chunksRef.current = [];
        setIsRecording(false);
        stopStream();
      };

      recorder.start();
      if (useLiveSpeech) {
        speechRef.current = startLiveSpeechRecognition({
          onResult: setLiveTranscript,
          onError: (message) => setError((prev) => prev || message),
        });
      }
      startedAtRef.current = Date.now();
      setElapsed(0);
      setIsRecording(true);
      timerRef.current = setInterval(() => {
        if (startedAtRef.current) {
          setElapsed(Math.floor((Date.now() - startedAtRef.current) / 1000));
        }
      }, 250);
    } catch {
      setError("Could not access microphone. Please allow permission and try again.");
      speechRef.current?.stop();
      speechRef.current = null;
      stopStream();
      setIsRecording(false);
    }
  }, [stopStream, useLiveSpeech]);

  const stopRecording = useCallback(() => {
    const recorder = recorderRef.current;
    if (recorder?.state === "recording") recorder.stop();
    else speechRef.current?.stop();
  }, []);

  return {
    isRecording,
    elapsed,
    error,
    recordingUrl,
    recordingBlob,
    liveTranscript,
    startRecording,
    stopRecording,
    clearRecording,
    formatDuration,
  };
}

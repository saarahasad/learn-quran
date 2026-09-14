import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { getMushafPageForAyah } from "../../data/mushafPageMap.js";
import { useAyahWords } from "../../hooks/useAyahWords.js";
import { formatDuration, useHifdhRecorder } from "../../hooks/useHifdhRecorder.js";
import { useRecitationCheck } from "../../hooks/useRecitationCheck.js";
import { useTranscriptionStatus } from "../../hooks/useTranscriptionStatus.js";
import {
  AUDIO_TEST_PROMPT_WORD_COUNT,
  AUDIO_TEST_QUESTION_MAX,
  AUDIO_TEST_QUESTION_MIN,
  buildAudioTestQuestions,
  closingSnippet,
  describeReciteTarget,
} from "../../utils/hifdhAudioTest.js";
import { buildWordTimings, TEST_ASSESSMENT } from "../../utils/hifdhSession.js";
import { getLocalAyah } from "../../utils/hifdhAyahContent.js";
import { getMinshawiAyahUrl } from "../../utils/quranAudio.js";
import { toArabicNum } from "../../utils/mushafText.js";
import HifdhRecitationFeedback from "./HifdhRecitationFeedback.jsx";
import HifdhSelfAssess from "./HifdhSelfAssess.jsx";
import "../../styles/hifdh-session.css";

const PLAYBACK_LABELS = {
  idle: "Ready",
  loading: "Loading…",
  playing: "Playing opening…",
  paused: "Paused",
  done: "Opening played",
};

function ProgressBar({ current, total }) {
  const percent = total > 0 ? Math.round((current / total) * 100) : 0;

  return (
    <div className="hifdh-audio-test__progress" aria-hidden="true">
      <div className="hifdh-audio-test__progress-track">
        <div className="hifdh-audio-test__progress-fill" style={{ width: `${percent}%` }} />
      </div>
      <span className="hifdh-audio-test__progress-label">
        {current} / {total}
      </span>
    </div>
  );
}

function ReciteTargetCard({ question, surahNumber, localAyahs }) {
  const { headline, subline } = describeReciteTarget(question);
  const endAyah = getLocalAyah(surahNumber, question.endAyahNumber, localAyahs);
  const ending = closingSnippet(endAyah?.ar ?? "");

  return (
    <section className="hifdh-audio-test__target" aria-label="Recitation target">
      <p className="hifdh-audio-test__target-label">Your task</p>
      <p className="hifdh-audio-test__target-headline">{headline}</p>
      <p className="hifdh-audio-test__target-subline">{subline}</p>
      <div className="hifdh-audio-test__target-chunk">{question.chunkLabel}</div>
      {ending && (
        <div className="hifdh-audio-test__target-ending">
          <span className="hifdh-audio-test__target-ending-label">Stop at</span>
          <span className="hifdh-audio-test__target-ending-text" dir="rtl">
            {ending}
          </span>
        </div>
      )}
    </section>
  );
}

function AudioPromptPlayer({ ayahNumber, surahNumber, words }) {
  const audioRef = useRef(null);
  const [playbackState, setPlaybackState] = useState("idle");

  const audioSrc = getMinshawiAyahUrl(surahNumber, ayahNumber);

  const stopAtTime = useCallback(
    (audio) => {
      if (!audio || !words.length) return;

      const timings = buildWordTimings(words, audio.duration || 0);
      const cutoffIndex = Math.min(AUDIO_TEST_PROMPT_WORD_COUNT - 1, timings.length - 1);
      const cutoff = timings[cutoffIndex]?.end ?? Math.min(4, audio.duration || 4);

      if (audio.currentTime >= cutoff) {
        audio.pause();
        setPlaybackState("done");
      }
    },
    [words],
  );

  useEffect(() => {
    setPlaybackState("idle");
  }, [ayahNumber, audioSrc]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return undefined;

    const onTimeUpdate = () => stopAtTime(audio);
    const onEnded = () => setPlaybackState("done");
    const onPlay = () => setPlaybackState("playing");
    const onPause = () => {
      if (!audio.ended) setPlaybackState((state) => (state === "playing" ? "paused" : state));
    };

    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("ended", onEnded);
    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);

    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("ended", onEnded);
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
    };
  }, [stopAtTime]);

  const playPrompt = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    setPlaybackState("loading");
    audio.currentTime = 0;
    audio.load();
    audio.play().catch(() => setPlaybackState("paused"));
  }, []);

  useEffect(() => {
    playPrompt();
  }, [playPrompt, ayahNumber]);

  return (
    <section className="hifdh-audio-test__card hifdh-audio-test__card--listen">
      <p className="hifdh-audio-test__step-label">1 · Listen</p>
      <p className="hifdh-audio-test__card-copy">
        Hear the opening of āyah {toArabicNum(ayahNumber)}.
      </p>
      <div className="hifdh-audio-test__listen-row">
        <button
          type="button"
          className={[
            "hifdh-audio-test__play-btn",
            playbackState === "playing" && "is-playing",
            playbackState === "done" && "is-done",
          ]
            .filter(Boolean)
            .join(" ")}
          onClick={playPrompt}
          disabled={playbackState === "loading"}
          aria-label="Replay opening audio"
        >
          <span className="hifdh-audio-test__play-icon" aria-hidden="true">
            {playbackState === "playing" ? "◉" : "▶"}
          </span>
        </button>
        <div className="hifdh-audio-test__listen-meta">
          <span className="hifdh-audio-test__listen-status">
            {PLAYBACK_LABELS[playbackState] ?? PLAYBACK_LABELS.idle}
          </span>
          <button
            type="button"
            className="hifdh-audio-test__text-btn"
            onClick={playPrompt}
            disabled={playbackState === "loading"}
          >
            Replay opening
          </button>
        </div>
      </div>
      <audio ref={audioRef} src={audioSrc} preload="auto">
        <track kind="captions" />
      </audio>
    </section>
  );
}

function AudioTestRecordSection({ question, recorder, recitationCheck }) {
  const { isRecording, elapsed, error, recordingUrl, startRecording, stopRecording, clearRecording } =
    recorder;
  const endLabel = toArabicNum(question.endAyahNumber);

  return (
    <section className="hifdh-audio-test__card hifdh-audio-test__card--record">
      <p className="hifdh-audio-test__step-label">2 · Recite</p>
      <p className="hifdh-audio-test__card-copy">
        {question.ayahNumber === question.endAyahNumber
          ? `Continue from the opening through the end of āyah ${endLabel}.`
          : `Continue from the opening of āyah ${toArabicNum(question.ayahNumber)} through the end of āyah ${endLabel}.`}
      </p>

      <div className="hifdh-audio-test__record-row">
        <div
          className={[
            "hifdh-audio-test__timer",
            isRecording && "is-recording",
          ]
            .filter(Boolean)
            .join(" ")}
          aria-live="polite"
        >
          {formatDuration(elapsed)}
        </div>
        {isRecording ? (
          <button
            type="button"
            className="hifdh-audio-test__btn hifdh-audio-test__btn--stop"
            onClick={stopRecording}
          >
            Stop
          </button>
        ) : (
          <button type="button" className="hifdh-audio-test__btn" onClick={startRecording}>
            {recordingUrl ? "Record again" : "Start recording"}
          </button>
        )}
      </div>

      {recordingUrl && (
        <div className="hifdh-audio-test__playback">
          <audio controls src={recordingUrl} className="hifdh-audio-test__recording" />
          <button type="button" className="hifdh-audio-test__text-btn" onClick={clearRecording}>
            Clear recording
          </button>
        </div>
      )}

      {error && <p className="hifdh-audio-test__error">{error}</p>}

      {recorder.recordingBlob && (
        <div className="hifdh-audio-test__check">
          <HifdhRecitationFeedback
            status={recitationCheck.status}
            result={recitationCheck.result}
            transcript={recitationCheck.transcript}
            error={recitationCheck.error}
            isChecking={recitationCheck.isChecking}
            onCheck={recitationCheck.checkRecitation}
          />
        </div>
      )}
    </section>
  );
}

function AudioTestQuestion({
  question,
  questionIndex,
  questionTotal,
  surahNumber,
  ayahCount,
  localAyahs,
  mushafPage,
  onComplete,
  onNext,
  isLast,
}) {
  const page =
    mushafPage ?? getMushafPageForAyah(surahNumber, question.ayahNumber, ayahCount);
  const { words } = useAyahWords(question.ayahNumber, surahNumber, page, localAyahs);

  const transcriptionStatus = useTranscriptionStatus(true);
  const useBrowserSpeech = transcriptionStatus.provider === "browser";

  const getHistoryMeta = useCallback(
    () => ({
      source: "hifdh-audio-test",
      surahNumber,
      ayahNumbers: question.ayahNumbers,
      mushafPage: page,
      label: `Audio test · āyāt ${question.ayahNumbers.join("–")}`,
    }),
    [surahNumber, question.ayahNumbers, page],
  );

  const recorder = useHifdhRecorder({
    resetKey: `audio-test-${question.id}`,
    useLiveSpeech: useBrowserSpeech,
    getHistoryMeta,
  });

  const recitationCheck = useRecitationCheck({
    mushafPage: page,
    surahNumber,
    ayahNumbers: question.ayahNumbers,
    localAyahs,
    promptWordCount: AUDIO_TEST_PROMPT_WORD_COUNT,
    recordingBlob: recorder.recordingBlob,
    liveTranscript: useBrowserSpeech ? recorder.liveTranscript : "",
  });

  const [assessed, setAssessed] = useState(false);

  useEffect(() => {
    setAssessed(false);
  }, [question.id]);

  function handleAssess(value) {
    if (assessed) return;
    setAssessed(true);
    onComplete({
      ayahNumber: question.ayahNumber,
      endAyahNumber: question.endAyahNumber,
      assessment: value,
      recitationPassed: recitationCheck.result?.passed ?? null,
    });
  }

  return (
    <div className="hifdh-audio-test__question">
      <ProgressBar current={questionIndex + 1} total={questionTotal} />

      <ReciteTargetCard
        question={question}
        surahNumber={surahNumber}
        localAyahs={localAyahs}
      />

      <AudioPromptPlayer
        ayahNumber={question.ayahNumber}
        surahNumber={surahNumber}
        words={words}
      />

      <AudioTestRecordSection
        question={question}
        recorder={recorder}
        recitationCheck={recitationCheck}
      />

      <section className="hifdh-audio-test__card hifdh-audio-test__card--assess">
        <p className="hifdh-audio-test__step-label">3 · Check yourself</p>
        {!assessed ? (
          <HifdhSelfAssess
            variant="test"
            assessPrompt="How did that feel?"
            onSelect={handleAssess}
          />
        ) : (
          <button type="button" className="hifdh-audio-test__btn" onClick={onNext}>
            {isLast ? "See results" : "Next question →"}
          </button>
        )}
      </section>
    </div>
  );
}

function RangeSetup({ ayahCount, initialFrom, initialTo, scopeLabel, onStart, onClose }) {
  const [fromAyah, setFromAyah] = useState(initialFrom);
  const [toAyah, setToAyah] = useState(initialTo);
  const [error, setError] = useState("");

  function handleStart() {
    const from = Number(fromAyah);
    const to = Number(toAyah);

    if (!Number.isFinite(from) || !Number.isFinite(to)) {
      setError("Enter valid āyah numbers.");
      return;
    }
    if (from < 1 || to < 1 || from > ayahCount || to > ayahCount) {
      setError(`Āyah numbers must be between 1 and ${ayahCount}.`);
      return;
    }
    setError("");
    onStart(from, to);
  }

  return (
    <div className="hifdh-audio-test__setup">
      <p className="hifdh-audio-test__setup-title">Which āyāt do you want to test?</p>
      <p className="hifdh-audio-test__intro">
        {scopeLabel
          ? `Suggested from ${scopeLabel} — adjust the range below.`
          : "Choose a from and to āyah. You will hear random openings and recite from memory."}
      </p>

      <div className="hifdh-audio-test__range">
        <label className="hifdh-audio-test__range-field">
          <span>From āyah</span>
          <input
            type="number"
            min={1}
            max={ayahCount}
            value={fromAyah}
            onChange={(event) => setFromAyah(event.target.value)}
          />
        </label>
        <label className="hifdh-audio-test__range-field">
          <span>To āyah</span>
          <input
            type="number"
            min={1}
            max={ayahCount}
            value={toAyah}
            onChange={(event) => setToAyah(event.target.value)}
          />
        </label>
      </div>

      <ul className="hifdh-audio-test__bullets">
        <li>
          {AUDIO_TEST_QUESTION_MIN}–{AUDIO_TEST_QUESTION_MAX} random mixed questions
        </li>
        <li>Each chunk stays within about one mushaf page</li>
        <li>Ending words shown so you know where to stop</li>
      </ul>

      {error && <p className="hifdh-audio-test__error">{error}</p>}

      <div className="hifdh-audio-test__actions">
        <button type="button" className="hifdh-audio-test__btn" onClick={handleStart}>
          Start test
        </button>
        <button type="button" className="hifdh-audio-test__btn hifdh-audio-test__btn--ghost" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
}

function TestSummary({ results, onClose, onRetry }) {
  const firm = results.filter((entry) => entry.assessment === TEST_ASSESSMENT.FIRM).length;
  const shaky = results.filter((entry) => entry.assessment === TEST_ASSESSMENT.SHAKY).length;
  const needMore = results.filter((entry) => entry.assessment === TEST_ASSESSMENT.NEED_MORE).length;

  return (
    <div className="hifdh-audio-test__summary">
      <p className="hifdh-audio-test__summary-title">Test complete</p>
      <div className="hifdh-audio-test__stats">
        <div className="hifdh-audio-test__stat hifdh-audio-test__stat--firm">
          <span className="hifdh-audio-test__stat-num">{firm}</span>
          <span className="hifdh-audio-test__stat-label">Firm</span>
        </div>
        <div className="hifdh-audio-test__stat hifdh-audio-test__stat--shaky">
          <span className="hifdh-audio-test__stat-num">{shaky}</span>
          <span className="hifdh-audio-test__stat-label">Shaky</span>
        </div>
        <div className="hifdh-audio-test__stat hifdh-audio-test__stat--need">
          <span className="hifdh-audio-test__stat-num">{needMore}</span>
          <span className="hifdh-audio-test__stat-label">Need more</span>
        </div>
      </div>
      <p className="hifdh-audio-test__card-copy">{results.length} questions answered</p>
      <div className="hifdh-audio-test__actions">
        <button type="button" className="hifdh-audio-test__btn" onClick={onRetry}>
          Test again
        </button>
        <button type="button" className="hifdh-audio-test__btn hifdh-audio-test__btn--ghost" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default function HifdhAudioTestPopup({
  surahNumber,
  ayahCount,
  localAyahs = null,
  mushafPage = null,
  initialFromAyah = 1,
  initialToAyah = null,
  scopeLabel = null,
  onClose,
}) {
  const defaultTo = initialToAyah ?? ayahCount;
  const [step, setStep] = useState("setup");
  const [range, setRange] = useState({ from: initialFromAyah, to: defaultTo });
  const [questions, setQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [results, setResults] = useState([]);
  const [minimized, setMinimized] = useState(false);

  const currentQuestion = questions[questionIndex] ?? null;

  const rangeLabel = useMemo(
    () => `${toArabicNum(range.from)}–${toArabicNum(range.to)}`,
    [range],
  );

  function startTest(fromAyah, toAyah) {
    const from = Math.min(fromAyah, toAyah);
    const to = Math.max(fromAyah, toAyah);
    const built = buildAudioTestQuestions(from, to, surahNumber, ayahCount);
    if (!built.length) return;
    setRange({ from, to });
    setQuestions(built);
    setQuestionIndex(0);
    setResults([]);
    setStep("question");
    setMinimized(false);
  }

  function handleRetry() {
    setStep("setup");
    setQuestions([]);
    setQuestionIndex(0);
    setResults([]);
  }

  function handleQuestionComplete(payload) {
    setResults((current) => [...current, payload]);
  }

  function handleQuestionNext() {
    if (questionIndex >= questions.length - 1) {
      setStep("complete");
    } else {
      setQuestionIndex((index) => index + 1);
    }
  }

  return createPortal(
    <div
      className={[
        "hifdh-audio-test",
        minimized && "hifdh-audio-test--minimized",
      ]
        .filter(Boolean)
        .join(" ")}
      role="dialog"
      aria-modal="false"
      aria-label="Āyah audio test"
    >
      <header className="hifdh-audio-test__header">
        <div>
          <p className="hifdh-audio-test__title">Audio test</p>
          {step === "setup" ? (
            <p className="hifdh-audio-test__subtitle">Choose your āyah range</p>
          ) : (
            <p className="hifdh-audio-test__subtitle">
              {scopeLabel ? `${scopeLabel} · ` : ""}
              Āyāt {rangeLabel}
              {step === "question" && currentQuestion
                ? ` · Q ${questionIndex + 1}/${questions.length}`
                : ""}
            </p>
          )}
        </div>
        <div className="hifdh-audio-test__header-actions">
          <button
            type="button"
            className="hifdh-audio-test__icon-btn"
            onClick={() => setMinimized((value) => !value)}
            aria-label={minimized ? "Expand test panel" : "Minimize test panel"}
          >
            {minimized ? "▢" : "—"}
          </button>
          <button
            type="button"
            className="hifdh-audio-test__icon-btn"
            onClick={onClose}
            aria-label="Close test"
          >
            ×
          </button>
        </div>
      </header>

      {!minimized && (
        <div className="hifdh-audio-test__body">
          {step === "setup" && (
            <RangeSetup
              ayahCount={ayahCount}
              initialFrom={range.from}
              initialTo={range.to}
              scopeLabel={scopeLabel}
              onStart={startTest}
              onClose={onClose}
            />
          )}

          {step === "question" && currentQuestion && (
            <AudioTestQuestion
              key={currentQuestion.id}
              question={currentQuestion}
              questionIndex={questionIndex}
              questionTotal={questions.length}
              surahNumber={surahNumber}
              ayahCount={ayahCount}
              localAyahs={localAyahs}
              mushafPage={mushafPage}
              onComplete={handleQuestionComplete}
              onNext={handleQuestionNext}
              isLast={questionIndex >= questions.length - 1}
            />
          )}

          {step === "complete" && (
            <TestSummary results={results} onClose={onClose} onRetry={handleRetry} />
          )}
        </div>
      )}
    </div>,
    document.body,
  );
}

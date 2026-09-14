import { useMemo, useCallback } from "react";
import { useHifdhRecorder } from "../hooks/useHifdhRecorder.js";
import { useRecitationCheck } from "../hooks/useRecitationCheck.js";
import { useTranscriptionStatus } from "../hooks/useTranscriptionStatus.js";
import { buildExpectedWordsFromAyahs } from "../utils/recitationExpected.js";
import "../styles/hifdh-session.css";
import "../styles/surah-recite.css";

export default function SurahRecitePanel({ surah, open, onClose }) {
  const ayahNumbers = useMemo(
    () => surah.ayahs.map((ayah) => ayah.n),
    [surah.ayahs],
  );

  const expectedWords = useMemo(
    () => buildExpectedWordsFromAyahs(surah.ayahs, ayahNumbers),
    [surah.ayahs, ayahNumbers],
  );

  const transcriptionStatus = useTranscriptionStatus(open && SHOW_SPEECH_CHECK);
  const useBrowserSpeech = transcriptionStatus.provider === "browser";

  const getHistoryMeta = useCallback(
    () => ({
      source: "surah-recite",
      surahNumber: surah.revelationOrder,
      surahName: surah.name,
      ayahNumbers,
    }),
    [surah.revelationOrder, surah.name, ayahNumbers],
  );

  const recorder = useHifdhRecorder({
    resetKey: open ? `surah-recite-${surah.id}` : "closed",
    useLiveSpeech: useBrowserSpeech,
    getHistoryMeta: open ? getHistoryMeta : undefined,
  });

  const recitationCheck = useRecitationCheck({
    surahNumber: surah.revelationOrder,
    ayahNumbers,
    localAyahs: surah.ayahs,
    expectedWords,
    recordingBlob: SHOW_SPEECH_CHECK ? recorder.recordingBlob : null,
    liveTranscript: useBrowserSpeech ? recorder.liveTranscript : "",
  });

  if (!open) return null;

  const checkBlocked = !transcriptionStatus.loading && !transcriptionStatus.available;

  return (
    <div className="surah-recite-panel" role="region" aria-label={`Recite ${surah.name}`}>
      <div className="surah-recite-panel__header">
        <div>
          <p className="surah-recite-panel__kicker">Recite</p>
          <p className="surah-recite-panel__title" dir="rtl">
            {surah.nameAr}
          </p>
          <p className="surah-recite-panel__subtitle">
            Recite with the mushaf in view, then listen back to yourself.
          </p>
        </div>
        <button
          type="button"
          className="surah-recite-panel__close"
          onClick={onClose}
          aria-label="Close recite panel"
        >
          ×
        </button>
      </div>

      {SHOW_SPEECH_CHECK && !transcriptionStatus.loading && !transcriptionStatus.available && (
        <div className="surah-recite-panel__setup" role="status">
          <p className="surah-recite-panel__setup-title">Speech check needs setup</p>
          <p className="surah-recite-panel__setup-copy">
            {transcriptionStatus.message ||
              "Add a free GROQ_API_KEY to .env.local, or use Chrome for browser speech recognition."}
          </p>
          {transcriptionStatus.needsRestart ? (
            <ol className="surah-recite-panel__setup-steps">
              <li>Go to the Terminal where the app is running</li>
              <li>Press <strong>Ctrl+C</strong> to stop it</li>
              <li>Run <code>npm run dev</code> again</li>
              <li>Reload this page, then try <strong>Check my recitation</strong></li>
            </ol>
          ) : (
            <ol className="surah-recite-panel__setup-steps">
              <li>
                Get a <strong>free</strong> key from{" "}
                <a href="https://console.groq.com/keys" target="_blank" rel="noreferrer">
                  console.groq.com/keys
                </a>
              </li>
              <li>
                Add <code>GROQ_API_KEY=gsk_…</code> to <code>.env.local</code>
              </li>
              <li>
                Restart the dev server: <strong>Ctrl+C</strong>, then <code>npm run dev</code>
              </li>
              <li>
                Or use <strong>Chrome</strong> — free browser speech recognition works with no key
              </li>
            </ol>
          )}
        </div>
      )}

      {SHOW_SPEECH_CHECK && transcriptionStatus.provider === "browser" && (
        <p className="surah-recite-panel__setup-copy" role="status">
          {transcriptionStatus.message}
        </p>
      )}

      <HifdhRecordBar
        {...recorder}
        onStart={recorder.startRecording}
        onStop={recorder.stopRecording}
        onClear={recorder.clearRecording}
        compact
        hint={
          recorder.isRecording
            ? "Recite the surah — stop when you are done."
            : "Tap start when you are ready to recite."
        }
      />

      {SHOW_SPEECH_CHECK && recorder.recordingBlob && (
        <HifdhRecitationFeedback
          status={recitationCheck.status}
          result={recitationCheck.result}
          transcript={recitationCheck.transcript}
          error={recitationCheck.error}
          isChecking={recitationCheck.isChecking}
          onCheck={checkBlocked ? null : recitationCheck.checkRecitation}
          checkDisabled={checkBlocked}
          checkDisabledReason={
            checkBlocked
              ? transcriptionStatus.message ||
                "Speech check is not available until a free GROQ_API_KEY is configured or you use Chrome."
              : transcriptionStatus.provider === "browser"
                ? "Browser speech recognition — word matching only (no tajwīd timing)."
                : ""
          }
        />
      )}
    </div>
  );
}

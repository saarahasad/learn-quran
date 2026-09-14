import { SHOW_SPEECH_CHECK } from "../../data/platform.js";
import { useAyahWords } from "../../hooks/useAyahWords.js";
import { useHifdhRecorder } from "../../hooks/useHifdhRecorder.js";
import { useRecitationCheck } from "../../hooks/useRecitationCheck.js";
import { useTranscriptionStatus } from "../../hooks/useTranscriptionStatus.js";
import { useCallback } from "react";
import { toArabicNum } from "../../utils/mushafText.js";
import HifdhRecitationFeedback from "./HifdhRecitationFeedback.jsx";
import HifdhRecordBar from "./HifdhRecordBar.jsx";

const PROMPT_WORD_COUNT = 2;

export default function HifdhTestPhase({
  ayahNumbers,
  surahNumber,
  mushafPage,
  localAyahs = null,
  currentRound = 0,
  onContinue,
}) {
  const firstAyah = ayahNumbers[0];
  const { words } = useAyahWords(firstAyah, surahNumber, mushafPage, localAyahs);
  const promptWords = words.slice(0, PROMPT_WORD_COUNT);

  const transcriptionStatus = useTranscriptionStatus(SHOW_SPEECH_CHECK);
  const useBrowserSpeech = transcriptionStatus.provider === "browser";

  const getHistoryMeta = useCallback(
    () => ({
      source: "hifdh-test",
      surahNumber,
      ayahNumbers,
      mushafPage,
    }),
    [surahNumber, ayahNumbers, mushafPage],
  );

  const recorder = useHifdhRecorder({
    resetKey: `test-${ayahNumbers.join("-")}-${currentRound}`,
    useLiveSpeech: useBrowserSpeech,
    getHistoryMeta,
  });

  const recitationCheck = useRecitationCheck({
    mushafPage,
    surahNumber,
    ayahNumbers,
    localAyahs,
    promptWordCount: PROMPT_WORD_COUNT,
    recordingBlob: SHOW_SPEECH_CHECK ? recorder.recordingBlob : null,
    liveTranscript: useBrowserSpeech ? recorder.liveTranscript : "",
  });

  return (
    <div className="hifdh-session__panel hifdh-session__panel--with-mushaf">
      <p className="hifdh-session__ayah-label">
        Test · āyāt {ayahNumbers.map(toArabicNum).join("–")}
      </p>

      <div className="hifdh-session__test-prompt" dir="rtl">
        <p className="hifdh-session__test-prompt-label">Your prompt</p>
        <p className="hifdh-session__arabic">
          {promptWords.map((word) => word.ar).join(" ")}
          <span className="hifdh-session__test-ellipsis"> …</span>
        </p>
      </div>

      <p className="hifdh-session__copy">
        Recite from these words through both āyāt, then continue.
      </p>

      <HifdhRecordBar
        {...recorder}
        onStart={recorder.startRecording}
        onStop={recorder.stopRecording}
        onClear={recorder.clearRecording}
        compact
      />

      {SHOW_SPEECH_CHECK && recorder.recordingBlob && (
        <HifdhRecitationFeedback
          status={recitationCheck.status}
          result={recitationCheck.result}
          transcript={recitationCheck.transcript}
          error={recitationCheck.error}
          isChecking={recitationCheck.isChecking}
          onCheck={recitationCheck.checkRecitation}
        />
      )}

      <button type="button" className="hifdh-session__cta" onClick={onContinue}>
        Next
      </button>
    </div>
  );
}

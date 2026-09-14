import { useMemo, useCallback } from "react";
import { useAyahWords } from "../../hooks/useAyahWords.js";
import { useHifdhRecorder } from "../../hooks/useHifdhRecorder.js";
import {
  SCAFFOLD_ROUND_COUNT,
  getScaffoldVisibility,
  roundProgressFraction,
} from "../../utils/hifdhSession.js";
import { toArabicNum } from "../../utils/mushafText.js";
import HifdhBreathingRing from "./HifdhBreathingRing.jsx";
import HifdhRecordBar from "./HifdhRecordBar.jsx";
import HifdhScaffoldText from "./HifdhScaffoldText.jsx";

export default function HifdhScaffoldPhase({
  ayahNumber,
  surahNumber,
  mushafPage,
  localAyahs = null,
  currentRound,
  bonusIndices,
  scaffoldFade,
  scaffoldReciteHint,
  onRecited,
}) {
  const { words } = useAyahWords(ayahNumber, surahNumber, mushafPage, localAyahs);
  const visibility = useMemo(
    () =>
      getScaffoldVisibility(
        currentRound,
        words.length,
        bonusIndices?.length ? bonusIndices : null,
      ),
    [currentRound, words.length, bonusIndices],
  );

  const fadeHint = scaffoldFade?.[currentRound + 1] ?? null;
  const isBonus = Boolean(bonusIndices?.length);
  const showScaffoldText = isBonus || currentRound >= 3;
  const roundLabel = isBonus
    ? "Bonus focus"
    : `Round ${currentRound + 1} of ${SCAFFOLD_ROUND_COUNT}`;

  const getHistoryMeta = useCallback(
    () => ({
      source: "hifdh-scaffold",
      surahNumber,
      ayahNumbers: [ayahNumber],
      mushafPage,
      label: `${isBonus ? "Bonus" : `Round ${currentRound + 1}`} · āyah ${ayahNumber}`,
    }),
    [surahNumber, ayahNumber, mushafPage, isBonus, currentRound],
  );

  const recorder = useHifdhRecorder({
    resetKey: `${ayahNumber}-${currentRound}-${isBonus ? "bonus" : "scaffold"}`,
    getHistoryMeta,
  });

  return (
    <div className="hifdh-session__panel">
      <HifdhBreathingRing
        progress={
          isBonus
            ? 1
            : roundProgressFraction(currentRound, SCAFFOLD_ROUND_COUNT)
        }
        label={isBonus ? "★" : `${currentRound + 1}/${SCAFFOLD_ROUND_COUNT}`}
      />

      <p className="hifdh-session__ayah-label">
        Āyah {toArabicNum(ayahNumber)} · {isBonus ? "Targeted practice" : "From memory"}
      </p>

      {fadeHint && <p className="hifdh-session__hint">{fadeHint}</p>}

      {showScaffoldText && (
        <HifdhScaffoldText
          words={words}
          ayahNumber={ayahNumber}
          visibility={visibility}
        />
      )}

      <p className="hifdh-session__round">{roundLabel}</p>
      <p className="hifdh-session__copy">
        {scaffoldReciteHint ?? "Recite from memory, then continue."}
      </p>
      <HifdhRecordBar
        {...recorder}
        onStart={recorder.startRecording}
        onStop={recorder.stopRecording}
        onClear={recorder.clearRecording}
        compact
      />
      <button
        type="button"
        className="hifdh-session__cta"
        onClick={() => onRecited(words.length)}
      >
        Next
      </button>
    </div>
  );
}

import { useMemo } from "react";
import { useAyahWords } from "../../hooks/useAyahWords.js";
import {
  CHAIN_ROUND_COUNT,
  JOIN_ONCE_ROUND_COUNT,
  roundProgressFraction,
} from "../../utils/hifdhSession.js";
import { toArabicNum } from "../../utils/mushafText.js";
import HifdhBreathingRing from "./HifdhBreathingRing.jsx";
import HifdhChainText from "./HifdhChainText.jsx";

export default function HifdhChainPhase({
  prevAyah,
  currentAyah,
  surahNumber,
  mushafPage,
  localAyahs = null,
  currentRound,
  singleJoin = false,
  onRecited,
}) {
  const totalRounds = singleJoin ? JOIN_ONCE_ROUND_COUNT : CHAIN_ROUND_COUNT;
  const { words: prevWords } = useAyahWords(prevAyah, surahNumber, mushafPage, localAyahs);
  const { words: currentWords } = useAyahWords(
    currentAyah,
    surahNumber,
    mushafPage,
    localAyahs,
  );

  const joinHint = useMemo(
    () =>
      singleJoin
        ? `Once: recite from the end of āyah ${toArabicNum(prevAyah)} into āyah ${toArabicNum(currentAyah)}`
        : `Recite from the end of āyah ${toArabicNum(prevAyah)} into the start of āyah ${toArabicNum(currentAyah)}`,
    [prevAyah, currentAyah, singleJoin],
  );

  return (
    <div className="hifdh-session__panel hifdh-session__panel--with-mushaf">
      <HifdhBreathingRing
        progress={roundProgressFraction(currentRound, totalRounds)}
        label={singleJoin ? "1" : `${currentRound + 1}/${totalRounds}`}
      />

      <p className="hifdh-session__ayah-label hifdh-session__ayah-label--chain" dir="ltr">
        {singleJoin ? "Join" : "Chain"} · āyah {toArabicNum(prevAyah)} → {toArabicNum(currentAyah)}
      </p>
      <p className="hifdh-session__chain-task" dir="ltr">
        {joinHint}
      </p>

      <HifdhChainText
        prevWords={prevWords}
        currentWords={currentWords}
        prevAyah={prevAyah}
        currentAyah={currentAyah}
        currentRound={singleJoin ? 0 : currentRound}
      />

      {!singleJoin && (
        <p className="hifdh-session__round">
          Chain round {currentRound + 1} of {totalRounds}
        </p>
      )}

      <button type="button" className="hifdh-session__cta" onClick={onRecited}>
        Next
      </button>
    </div>
  );
}

import {
  blankToken,
  getChainJoinVisibility,
  isChainCurrWordVisible,
  isChainPrevWordVisible,
} from "../../utils/hifdhSession.js";
import { toArabicNum } from "../../utils/mushafText.js";

function ChainWord({ word, visible, className = "" }) {
  const display = visible ? word.ar : blankToken(word.ar);
  return (
    <span className={`hifdh-session__word${visible ? "" : " is-blanked"}${className}`}>
      {display}
    </span>
  );
}

export default function HifdhChainText({
  prevWords,
  currentWords,
  prevAyah,
  currentAyah,
  currentRound,
}) {
  if (!prevWords?.length || !currentWords?.length) return null;

  const visibility = getChainJoinVisibility(
    currentRound,
    prevWords.length,
    currentWords.length,
  );

  return (
    <div className="hifdh-chain-text">
      <p className="hifdh-chain-text__label" dir="ltr">
        End of āyah {toArabicNum(prevAyah)}
      </p>
      <p className="hifdh-session__arabic hifdh-chain-text__segment" dir="rtl">
        {prevWords.map((word, index) => (
          <ChainWord
            key={`prev-${index}`}
            word={word}
            visible={isChainPrevWordVisible(index, prevWords.length, visibility)}
          />
        ))}
        <span className="hifdh-session__marker" aria-hidden="true">
          {toArabicNum(prevAyah)}
        </span>
      </p>

      <p className="hifdh-chain-text__join-hint" dir="ltr">
        ↓ join into ↓
      </p>

      <p className="hifdh-chain-text__label" dir="ltr">
        Start of āyah {toArabicNum(currentAyah)}
      </p>
      <p className="hifdh-session__arabic hifdh-chain-text__segment" dir="rtl">
        {currentWords.map((word, index) => (
          <ChainWord
            key={`curr-${index}`}
            word={word}
            visible={isChainCurrWordVisible(index, visibility)}
          />
        ))}
        <span className="hifdh-session__marker" aria-hidden="true">
          {toArabicNum(currentAyah)}
        </span>
      </p>
    </div>
  );
}

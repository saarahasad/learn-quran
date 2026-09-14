import { formatAyahRangeLabel } from "../../utils/hifdhSession.js";
import { toArabicNum } from "../../utils/mushafText.js";

export default function HifdhRangeQuizOffer({
  ayat,
  emphasis,
  speech = [],
  takeLabel,
  skipLabel,
  onTake,
  onSkip,
}) {
  const rangeLabel = formatAyahRangeLabel(ayat);
  const rangeArabic = ayat.map(toArabicNum).join("–");

  return (
    <div className="hifdh-session__panel hifdh-session__panel--range-offer">
      <p className="hifdh-session__ayah-label">Optional quiz</p>
      {emphasis && <p className="hifdh-session__title">{emphasis}</p>}
      <p className="hifdh-session__round">
        Āyāt {rangeLabel} ({rangeArabic})
      </p>
      {speech.map((line) => (
        <p key={line} className="hifdh-session__copy">
          {line}
        </p>
      ))}
      <div className="hifdh-session__range-quiz-actions">
        <button type="button" className="hifdh-session__cta" onClick={onTake}>
          {takeLabel}
        </button>
        <button
          type="button"
          className="hifdh-session__cta hifdh-session__cta--ghost"
          onClick={onSkip}
        >
          {skipLabel}
        </button>
      </div>
    </div>
  );
}

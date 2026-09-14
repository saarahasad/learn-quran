import { toArabicNum } from "../../utils/mushafText.js";

export default function HifdhAyahWords({ words, ayahNumber, activeIndex = -1 }) {
  if (!words?.length) return null;

  return (
    <p className="hifdh-session__arabic" dir="rtl" aria-label={`Āyah ${ayahNumber}`}>
      {words.map((word, index) => (
        <span
          key={`${ayahNumber}-${index}`}
          className={`hifdh-session__word${index === activeIndex ? " is-active" : ""}`}
        >
          {word.ar}
        </span>
      ))}
      <span className="hifdh-session__marker" aria-hidden="true">
        {toArabicNum(ayahNumber)}
      </span>
    </p>
  );
}

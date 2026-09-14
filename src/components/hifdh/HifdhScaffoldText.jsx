import { blankToken, isWordVisible } from "../../utils/hifdhSession.js";
import { toArabicNum } from "../../utils/mushafText.js";

export default function HifdhScaffoldText({
  words,
  ayahNumber,
  visibility,
  activeIndex = -1,
  showMarker = true,
}) {
  if (!words?.length) return null;

  return (
    <p className="hifdh-session__arabic hifdh-session__scaffold" dir="rtl">
      {words.map((word, index) => {
        const visible = isWordVisible(index, words.length, visibility);
        const display = visible ? word.ar : blankToken(word.ar);
        return (
          <span
            key={`${ayahNumber}-${index}`}
            className={`hifdh-session__word${
              index === activeIndex ? " is-active" : ""
            }${!visible ? " is-blanked" : ""}`}
          >
            {display}
          </span>
        );
      })}
      {showMarker && ayahNumber != null && (
        <span className="hifdh-session__marker" aria-hidden="true">
          {toArabicNum(ayahNumber)}
        </span>
      )}
    </p>
  );
}

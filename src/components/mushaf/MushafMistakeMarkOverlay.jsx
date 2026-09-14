import { memo } from "react";
import { useMushafPageWords } from "../../hooks/useMushafPageWords.js";
import { bboxToPercent } from "../../utils/mushafPageData.js";

function MushafMistakeMarkOverlay({
  page,
  surahNumber,
  active = false,
  markedKeys = null,
  onWordClick,
}) {
  const words = useMushafPageWords(page, surahNumber, active);

  if (!active || !words.length) return null;

  return (
    <div
      className="mushaf-mem-mark-layer"
      aria-label={`Mark memorization mistakes on page ${page}`}
    >
      {words.map((word) => {
        const marked = markedKeys?.has(`${word.ayah}:${word.wordNum}`);
        return (
          <button
            key={word.location}
            type="button"
            className={[
              "mushaf-mem-mark-hit",
              marked && "is-marked",
            ]
              .filter(Boolean)
              .join(" ")}
            style={bboxToPercent(word.bbox)}
            title={word.wordAr}
            aria-label={`${marked ? "Edit mistake on" : "Mark mistake on"} ${word.wordAr}`}
            onClick={() => onWordClick?.(word)}
          />
        );
      })}
    </div>
  );
}

export default memo(MushafMistakeMarkOverlay);

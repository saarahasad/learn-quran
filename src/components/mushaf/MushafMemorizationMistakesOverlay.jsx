import { memo, useEffect, useMemo, useState } from "react";
import { bboxToPercent } from "../../utils/mushafPageData.js";
import { getMushafWordBoxes, prefetchMushafWordBoxes } from "../../utils/mushafWordBoxes.js";

function MushafMemorizationMistakesOverlay({
  page,
  surahNumber,
  mistakes = [],
  interactive = false,
  onWordClick,
}) {
  const [words, setWords] = useState([]);

  useEffect(() => {
    prefetchMushafWordBoxes(page, surahNumber);
    let cancelled = false;

    getMushafWordBoxes(page, surahNumber).then(({ words: pageWords }) => {
      if (!cancelled) setWords(pageWords);
    });

    return () => {
      cancelled = true;
    };
  }, [page, surahNumber]);

  const mistakeByKey = useMemo(
    () => new Map(mistakes.map((entry) => [`${entry.ayah}:${entry.wordNum}`, entry])),
    [mistakes],
  );

  const highlights = useMemo(
    () =>
      words
        .map((word) => {
          const mistake = mistakeByKey.get(`${word.ayah}:${word.wordNum}`);
          if (!mistake) return null;

          return {
            key: mistake.key,
            word,
            mistake,
            style: bboxToPercent(word.bbox),
          };
        })
        .filter(Boolean),
    [words, mistakeByKey],
  );

  if (!highlights.length) return null;

  return (
    <div
      className={[
        "mushaf-mem-mistakes-layer",
        interactive && "mushaf-mem-mistakes-layer--interactive",
      ]
        .filter(Boolean)
        .join(" ")}
      aria-label={`Memorization mistakes on page ${page}`}
    >
      {highlights.map(({ key, word, mistake, style }) => {
        const title = mistake.note
          ? `${mistake.wordAr} · ${mistake.note}`
          : mistake.wordAr;

        if (interactive) {
          return (
            <button
              key={key}
              type="button"
              className="mushaf-mem-mistake-hit"
              style={style}
              title={title}
              aria-label={`Marked mistake: ${title}`}
              onClick={() => onWordClick?.(word, mistake)}
            />
          );
        }

        return (
          <div key={key} className="mushaf-mem-mistake-highlight" style={style} title={title}>
            {mistake.note && (
              <span className="mushaf-mem-mistake-highlight__note">{mistake.note}</span>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default memo(MushafMemorizationMistakesOverlay);

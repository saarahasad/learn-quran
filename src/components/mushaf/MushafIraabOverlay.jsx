import { memo, useEffect, useMemo, useState } from "react";
import { normalizeAr } from "../../utils/arabicMatch.js";
import { bboxToPercent } from "../../utils/mushafPageData.js";
import {
  buildIraabLookupForPage,
  lookupIraabForWord,
} from "../../utils/baqarahIraabLookup.js";
import {
  getMushafWordBoxes,
  prefetchMushafWordBoxes,
} from "../../utils/mushafWordBoxes.js";

const CLAUSE_COLORS = ["blue", "green", "orange", "purple", "teal", "rose"];

function IraabDetailPopup({ entry, onClose }) {
  const { row, glance } = entry;

  return (
    <div className="mushaf-iraab-popup-backdrop" role="presentation" onClick={onClose}>
      <article
        className="mushaf-iraab-popup"
        onClick={(event) => event.stopPropagation()}
        aria-live="polite"
      >
        <button type="button" className="mushaf-iraab-popup__close" onClick={onClose} aria-label="Close">
          ×
        </button>
        <p className="mushaf-iraab-popup__word" dir="rtl">
          {row.word}
        </p>
        <p className="mushaf-iraab-popup__chipline" dir="rtl">
          {glance.chipLabel}
        </p>
        <div
          className="mushaf-iraab-popup__ar"
          dir="rtl"
          dangerouslySetInnerHTML={{ __html: row.arHtml }}
        />
      </article>
    </div>
  );
}

function sortReadingOrder(items) {
  return [...items].sort((a, b) => {
    const lineA = a.word.lineNumber ?? Math.round(a.word.bbox.y / 20);
    const lineB = b.word.lineNumber ?? Math.round(b.word.bbox.y / 20);
    if (lineA !== lineB) return lineA - lineB;
    return b.word.bbox.x - a.word.bbox.x;
  });
}

function startsNewClause(wordText, isFirstInAyah) {
  if (isFirstInAyah) return false;
  const bare = wordText.replace(/[\u064B-\u065F\u0670\u06D6-\u06ED]/g, "");
  if (/^ف(?!ي|َإ)/.test(bare)) return true;
  if (/^وَس/.test(bare)) return true;
  return false;
}

function assignClauseGroups(items) {
  const sorted = sortReadingOrder(items);
  let groupIndex = 0;
  let currentAyah = null;
  let firstInAyah = true;

  for (const item of sorted) {
    if (item.word.ayah !== currentAyah) {
      currentAyah = item.word.ayah;
      groupIndex = 0;
      firstInAyah = true;
    } else if (startsNewClause(item.row.word, firstInAyah)) {
      groupIndex += 1;
    }

    item.clauseColor = CLAUSE_COLORS[groupIndex % CLAUSE_COLORS.length];
    item.lineKey = item.word.lineNumber ?? Math.round(item.word.bbox.y / 20);
    firstInAyah = false;
  }

  return sorted;
}

function unionBBox(boxes) {
  if (!boxes.length) return null;
  let x1 = Infinity;
  let y1 = Infinity;
  let x2 = -Infinity;
  let y2 = -Infinity;

  for (const { x, y, w, h } of boxes) {
    x1 = Math.min(x1, x);
    y1 = Math.min(y1, y);
    x2 = Math.max(x2, x + w);
    y2 = Math.max(y2, y + h);
  }

  return { x: x1, y: y1, w: x2 - x1, h: y2 - y1 };
}

function buildClauseBands(items) {
  const groups = new Map();

  for (const item of items) {
    const key = `${item.word.ayah}-${item.lineKey}-${item.clauseColor}`;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(item);
  }

  const bands = [];

  for (const [, groupItems] of groups) {
    const bbox = unionBBox(groupItems.map((entry) => entry.word.bbox));
    if (!bbox) continue;

    const pct = bboxToPercent({
      x: bbox.x,
      y: bbox.y + bbox.h - 3,
      w: bbox.w,
      h: 4,
    });

    bands.push({
      key: `${groupItems[0].word.ayah}-${groupItems[0].lineKey}-${groupItems[0].clauseColor}`,
      color: groupItems[0].clauseColor,
      style: pct,
    });
  }

  return bands;
}

function MushafIraabOverlay({ page, surahNumber }) {
  const [words, setWords] = useState([]);
  const [selected, setSelected] = useState(null);

  const lookup = useMemo(() => buildIraabLookupForPage(page), [page]);

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

  useEffect(() => {
    setSelected(null);
  }, [page]);

  const taggedWords = useMemo(() => {
    const seen = new Set();
    const raw = [];

    for (const word of words) {
      const row = lookupIraabForWord(lookup, word.ayah, word.textUthmani);
      if (!row) continue;

      const dedupeKey = `${word.ayah}-${normalizeKey(row.word)}`;
      if (seen.has(dedupeKey)) continue;
      seen.add(dedupeKey);

      raw.push({
        key: word.location,
        word,
        row,
        glance: row.glance,
        style: bboxToPercent(word.bbox),
      });
    }

    return assignClauseGroups(raw);
  }, [words, lookup]);

  const clauseBands = useMemo(() => buildClauseBands(taggedWords), [taggedWords]);

  if (!taggedWords.length) return null;

  return (
    <>
      <div className="mushaf-iraab-layer" aria-label={`Iʿrāb labels on page ${page}`}>
        {clauseBands.map((band) => (
          <div
            key={band.key}
            className={`mushaf-iraab-clause mushaf-iraab-clause--${band.color}`}
            style={{
              left: band.style.left,
              top: band.style.top,
              width: band.style.width,
              height: band.style.height,
            }}
            aria-hidden="true"
          />
        ))}

        {taggedWords.map(({ key, row, glance, style }) => (
          <div
            key={key}
            className="mushaf-iraab-unit"
            style={{
              left: style.left,
              top: style.top,
              width: style.width,
              height: style.height,
            }}
          >
            <button
              type="button"
              className={[
                "mushaf-iraab-tag",
                glance.caseId && `mushaf-iraab-tag--${glance.caseId}`,
              ]
                .filter(Boolean)
                .join(" ")}
              onClick={() => setSelected({ row, glance })}
              title={glance.chipLabel}
            >
              <span className="mushaf-iraab-tag__role" dir="rtl">
                {glance.roleAr}
              </span>
              {glance.caseLabel && (
                <span className="mushaf-iraab-tag__case" dir="rtl">
                  {glance.caseLabel}
                </span>
              )}
            </button>
          </div>
        ))}
      </div>

      {selected && (
        <IraabDetailPopup entry={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}

function normalizeKey(text) {
  return normalizeAr(text);
}

export default memo(MushafIraabOverlay);

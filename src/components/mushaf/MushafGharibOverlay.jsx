import { memo, useEffect, useMemo, useState } from "react";
import { ruleMatchesVerse, wordMatchesRule } from "../../utils/arabicMatch.js";
import {
  getMushafWordBoxes,
  MUSHAF_REF_HEIGHT,
  MUSHAF_REF_WIDTH,
  prefetchMushafWordBoxes,
} from "../../utils/mushafWordBoxes.js";
import { gharibWordsToHighlightRules } from "../../data/mushafOverlayLayers.js";

const LABEL_LANE = { rightPct: 0.4, widthPct: 17 };
const LABEL_HEIGHT_PCT = 2.4;
const MIN_GAP_PCT = 0.18;

function pct(n, total) {
  return (n / total) * 100;
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

function matchWordsForItem(words, item) {
  return words.filter(
    (word) =>
      ruleMatchesVerse(item, word.ayah) &&
      wordMatchesRule(word.textUthmani, item),
  );
}

function buildEntries(items, words) {
  return items
    .map((item) => {
      const matched = matchWordsForItem(words, item);
      if (!matched.length) return null;

      const bbox = unionBBox(matched.map((word) => word.bbox));
      const anchorTop = pct(bbox.y + bbox.h / 2, MUSHAF_REF_HEIGHT);
      const wordRight = pct(bbox.x + bbox.w, MUSHAF_REF_WIDTH);
      const wordMidY = anchorTop;

      return {
        item,
        matched,
        bbox,
        anchorTop,
        wordRight,
        wordMidY,
        labelTop: anchorTop,
      };
    })
    .filter(Boolean);
}

function resolveLabelOverlaps(entries) {
  const sorted = [...entries].sort((a, b) => a.anchorTop - b.anchorTop);
  let lastBottom = 0;

  for (const entry of sorted) {
    const half = LABEL_HEIGHT_PCT / 2;
    let top = entry.anchorTop;
    if (top - half < lastBottom + MIN_GAP_PCT) {
      top = lastBottom + MIN_GAP_PCT + half;
    }
    entry.labelTop = top;
    lastBottom = top + half;
  }

  return sorted;
}

function MushafGharibOverlay({ page, surahNumber, items = [], layerId = "gharib" }) {
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

  const highlightRules = useMemo(
    () => gharibWordsToHighlightRules(items),
    [items],
  );

  const { entries, lines } = useMemo(() => {
    const resolved = resolveLabelOverlaps(buildEntries(items, words));
    const labelLeft = 100 - LABEL_LANE.rightPct - LABEL_LANE.widthPct;

    const connectors = resolved.map((entry) => ({
      key: `${entry.item.verse}-${entry.item.label}`,
      x1: entry.wordRight,
      y1: entry.wordMidY,
      x2: labelLeft,
      y2: entry.labelTop,
    }));

    return { entries: resolved, lines: connectors };
  }, [items, words]);

  const wordHighlights = useMemo(() => {
    const matched = [];

    for (const word of words) {
      for (const rule of highlightRules) {
        if (!ruleMatchesVerse(rule, word.ayah)) continue;
        if (!wordMatchesRule(word.textUthmani, rule)) continue;

        matched.push({
          key: `${word.location}-${rule.label}`,
          bbox: word.bbox,
          rule,
        });
        break;
      }
    }

    return matched;
  }, [words, highlightRules]);

  if (!entries.length && !wordHighlights.length) return null;

  return (
    <div
      className="mushaf-gharib-layer"
      aria-label={`Gharib vocabulary overlay on page ${page}`}
    >
      {wordHighlights.map(({ key, bbox, rule }) => (
        <div
          key={key}
          className="mushaf-word-highlight mushaf-word-highlight--rose mushaf-word-highlight--circle"
          style={{
            left: `${pct(bbox.x, MUSHAF_REF_WIDTH)}%`,
            top: `${pct(bbox.y, MUSHAF_REF_HEIGHT)}%`,
            width: `${pct(bbox.w, MUSHAF_REF_WIDTH)}%`,
            height: `${pct(bbox.h, MUSHAF_REF_HEIGHT)}%`,
          }}
          title={rule.label}
        />
      ))}

      <svg
        className="mushaf-gharib-lines"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {lines.map((line) => (
          <line
            key={line.key}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
          />
        ))}
      </svg>

      {entries.map((entry) => (
        <div
          key={`${layerId}-${entry.item.verse}-${entry.item.label}`}
          className="mushaf-gharib-callout"
          style={{
            right: `${LABEL_LANE.rightPct}%`,
            top: `${entry.labelTop}%`,
            width: `${LABEL_LANE.widthPct}%`,
            transform: "translateY(-50%)",
          }}
        >
          {entry.item.label}
        </div>
      ))}
    </div>
  );
}

export default memo(MushafGharibOverlay);

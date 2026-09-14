import { memo, useMemo } from "react";
import { useMushafPageWords } from "../../hooks/useMushafPageWords.js";
import { bboxToPercent } from "../../utils/mushafPageData.js";
import { computePageMemoryBlanks, getPageMemoryMode } from "../../utils/pageVisualMemory.js";
import { MUSHAF_REF_HEIGHT } from "../../utils/mushafWordBoxes.js";

const BLANK_PAD_Y = 6;

function isValidBBox(bbox) {
  if (!bbox) return false;
  const { x, y, w, h } = bbox;
  if (w <= 0 || h <= 0) return false;
  if (y < 50 || y > 970) return false;
  if (x + w < 4 || x > 676) return false;
  return true;
}

function unionBBox(boxes) {
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

function expandBlankBBox(bbox) {
  const y = Math.max(0, bbox.y - BLANK_PAD_Y);
  const h = Math.min(MUSHAF_REF_HEIGHT - y, bbox.h + BLANK_PAD_Y * 2);
  return { ...bbox, y, h };
}

function lineKey(word) {
  return word.lineNumber ?? Math.round(word.bbox.y / 20);
}

function buildLineBlanks(words, hiddenWordKeys, revealedKeys) {
  const byLine = new Map();

  for (const word of words) {
    if (!hiddenWordKeys.has(word.location)) continue;
    if (revealedKeys?.has(word.location)) continue;
    if (!isValidBBox(word.bbox)) continue;

    const key = lineKey(word);
    if (!byLine.has(key)) byLine.set(key, []);
    byLine.get(key).push(word);
  }

  return [...byLine.entries()].map(([line, lineWords]) => {
    const merged = expandBlankBBox(unionBBox(lineWords.map((word) => word.bbox)));
    const ayah = lineWords[0]?.ayah;
    return {
      key: `line-${line}-${lineWords.map((word) => word.location).join("-")}`,
      locations: lineWords.map((word) => word.location),
      style: bboxToPercent(merged),
      ayah,
    };
  });
}

function MushafPageBlankOverlay({
  page,
  surahNumber,
  modeId = "full",
  seed = 1,
  revealedKeys = null,
  showAllRevealed = false,
  onRevealKey,
}) {
  const mode = getPageMemoryMode(modeId);
  const active = mode.id !== "full";
  const words = useMushafPageWords(page, surahNumber, active);

  const { hiddenWordKeys } = useMemo(
    () => computePageMemoryBlanks(words, page, modeId, seed),
    [words, page, modeId, seed],
  );

  const blanks = useMemo(() => {
    if (!active || showAllRevealed) return [];
    return buildLineBlanks(words, hiddenWordKeys, revealedKeys);
  }, [active, words, hiddenWordKeys, revealedKeys, showAllRevealed]);

  if (!active || !blanks.length) return null;

  return (
    <div
      className="mushaf-page-blank-layer"
      aria-label={`Page memory blanks — ${mode.label} mode`}
    >
      {blanks.map(({ key, style, ayah, locations }) => (
        <button
          key={key}
          type="button"
          className="mushaf-page-blank"
          style={style}
          title={`Āyah ${ayah} — tap to peek`}
          aria-label={`Hidden line in āyah ${ayah}. Tap to reveal.`}
          onClick={() => locations.forEach((location) => onRevealKey?.(location))}
        />
      ))}
    </div>
  );
}

export default memo(MushafPageBlankOverlay);

function lineKey(word) {
  return word.lineNumber ?? Math.round(word.bbox.y / 20);
}

function sortRtl(words) {
  return [...words].sort((a, b) => b.bbox.x - a.bbox.x);
}

function averageTemplates(templates) {
  if (!templates.length) return null;
  const n = templates[0].length;
  const sums = Array(n).fill(0);
  for (const ratios of templates) {
    for (let index = 0; index < n; index += 1) {
      sums[index] += ratios[index];
    }
  }
  return sums.map((value) => value / templates.length);
}

function charRatios(words) {
  const totalChars = words.reduce(
    (sum, word) => sum + Math.max(word.textUthmani.length, 1),
    0,
  );
  return words.map((word) => Math.max(word.textUthmani.length, 1) / totalChars);
}

function pickRatios(wordCount, templatesByCount) {
  if (templatesByCount.has(wordCount)) {
    return templatesByCount.get(wordCount);
  }

  const counts = [...templatesByCount.keys()].sort(
    (a, b) => Math.abs(a - wordCount) - Math.abs(b - wordCount),
  );
  if (!counts.length) return null;

  const nearest = counts[0];
  if (nearest === wordCount) return templatesByCount.get(nearest);

  const base = templatesByCount.get(nearest);
  if (!base || base.length === wordCount) return base;

  return null;
}

/**
 * Learn width ratios from calibrated ayahs and apply to uncalibrated ayahs on the same page.
 */
export function extrapolateWordBoxes(
  autoWords,
  referenceBoxes,
  {
    sourceAyahMin = 6,
    sourceAyahMax = 12,
    targetAyahMin = 13,
    targetAyahMax = 16,
  } = {},
) {
  const sourceWords = autoWords.filter(
    (word) => word.ayah >= sourceAyahMin && word.ayah <= sourceAyahMax,
  );
  const targetWords = autoWords.filter(
    (word) => word.ayah >= targetAyahMin && word.ayah <= targetAyahMax,
  );

  if (!sourceWords.length || !targetWords.length) return {};

  const templatesByCount = new Map();
  const sourceByLine = new Map();

  for (const word of sourceWords) {
    const line = lineKey(word);
    if (!sourceByLine.has(line)) sourceByLine.set(line, []);
    sourceByLine.get(line).push(word);
  }

  for (const lineWords of sourceByLine.values()) {
    const calibrated = lineWords.filter((word) => referenceBoxes[word.location]);
    if (calibrated.length < Math.max(2, Math.ceil(lineWords.length * 0.4))) continue;

    const sorted = sortRtl(lineWords);
    const widths = sorted.map(
      (word) => referenceBoxes[word.location]?.w ?? word.bbox.w,
    );
    const total = widths.reduce((sum, width) => sum + width, 0) || 1;
    const ratios = widths.map((width) => width / total);
    const count = sorted.length;

    if (!templatesByCount.has(count)) templatesByCount.set(count, []);
    templatesByCount.get(count).push(ratios);
  }

  const averagedTemplates = new Map();
  for (const [count, templates] of templatesByCount) {
    const averaged = averageTemplates(templates);
    if (averaged) averagedTemplates.set(count, averaged);
  }

  let shiftX = 0;
  let shiftCount = 0;
  for (const word of sourceWords) {
    const ref = referenceBoxes[word.location];
    if (!ref) continue;
    shiftX += ref.x - word.bbox.x;
    shiftCount += 1;
  }
  if (shiftCount) shiftX /= shiftCount;

  const targetByLine = new Map();
  for (const word of targetWords) {
    const line = lineKey(word);
    if (!targetByLine.has(line)) targetByLine.set(line, []);
    targetByLine.get(line).push(word);
  }

  const result = {};

  for (const lineWords of targetByLine.values()) {
    const sorted = sortRtl(lineWords);
    const count = sorted.length;

    let x1 = Infinity;
    let x2 = -Infinity;
    for (const word of sorted) {
      x1 = Math.min(x1, word.bbox.x);
      x2 = Math.max(x2, word.bbox.x + word.bbox.w);
    }

    const bandW = Math.max(8, x2 - x1);
    const ratios =
      pickRatios(count, averagedTemplates) ?? charRatios(sorted);

    let right = x2 + shiftX;
    for (let index = 0; index < count; index += 1) {
      const word = sorted[index];
      const wordW = Math.max(8, ratios[index] * bandW);
      const x = right - wordW;
      right = x;
      result[word.location] = { x, w: wordW };
    }
  }

  return result;
}

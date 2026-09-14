import { normalizeAr } from "./arabicMatch.js";

function isConsecutive(slice) {
  for (let index = 1; index < slice.length; index += 1) {
    if (slice[index].wordNum !== slice[index - 1].wordNum + 1) return false;
  }
  return true;
}

function ngramKey(slice) {
  return slice.map((word) => normalizeAr(word.textUthmani)).join("|");
}

function groupWordsByAyah(words) {
  const byAyah = new Map();

  for (const word of words) {
    if (!byAyah.has(word.ayah)) byAyah.set(word.ayah, []);
    byAyah.get(word.ayah).push(word);
  }

  for (const [ayah, ayahWords] of byAyah) {
    byAyah.set(
      ayah,
      ayahWords.sort((a, b) => a.wordNum - b.wordNum),
    );
  }

  return byAyah;
}

function findRepeatedPhraseCandidates(words, size) {
  const byAyah = groupWordsByAyah(words);
  const occurrences = new Map();

  for (const ayahWords of byAyah.values()) {
    for (let index = 0; index <= ayahWords.length - size; index += 1) {
      const slice = ayahWords.slice(index, index + size);
      if (!isConsecutive(slice)) continue;

      const norms = slice.map((word) => normalizeAr(word.textUthmani));
      if (norms.some((part) => part.length < 2)) continue;
      if (normalizeAr(slice.map((word) => word.textUthmani).join("")).length < 4) continue;

      const key = ngramKey(slice);
      if (!occurrences.has(key)) {
        occurrences.set(key, { key, size, occurrences: [] });
      }
      occurrences.get(key).occurrences.push(slice);
    }
  }

  return [...occurrences.values()].filter((entry) => entry.occurrences.length >= 2);
}

function pruneNestedPhrases(candidates) {
  const sorted = [...candidates].sort(
    (a, b) => b.size - a.size || b.occurrences.length - a.occurrences.length,
  );
  const kept = [];

  for (const candidate of sorted) {
    const dominated = kept.some(
      (longer) =>
        longer.size > candidate.size &&
        longer.key.includes(candidate.key) &&
        candidate.key.length < longer.key.length,
    );
    if (!dominated) kept.push(candidate);
  }

  return kept;
}

function locationsKey(slice) {
  return slice.map((word) => word.location).join("|");
}

/**
 * Build non-overlapping phrase + word highlights for repeated text on one page.
 * Returns render-ready groups: { id, words, summary, phraseTogether }.
 */
export function buildRepeatedHighlights(
  words,
  {
    minWordLength = 3,
    minWordCount = 2,
    phraseSizes = [3, 2],
  } = {},
) {
  if (!words.length) return [];

  const highlights = [];
  const usedLocations = new Set();
  const wordCounts = new Map();

  for (const word of words) {
    const norm = normalizeAr(word.textUthmani);
    if (norm.length < minWordLength) continue;
    wordCounts.set(norm, (wordCounts.get(norm) ?? 0) + 1);
  }

  const phraseCandidates = phraseSizes.flatMap((size) =>
    findRepeatedPhraseCandidates(words, size),
  );
  const phrases = pruneNestedPhrases(phraseCandidates);

  for (const phrase of phrases) {
    for (const occurrence of phrase.occurrences) {
      if (occurrence.some((word) => usedLocations.has(word.location))) continue;

      for (const word of occurrence) usedLocations.add(word.location);

      highlights.push({
        id: `phrase-${locationsKey(occurrence)}`,
        words: occurrence,
        phraseTogether: true,
        summary: `Repeated phrase (${phrase.occurrences.length}×)`,
      });
    }
  }

  for (const word of words) {
    if (usedLocations.has(word.location)) continue;

    const norm = normalizeAr(word.textUthmani);
    if (norm.length < minWordLength) continue;
    if ((wordCounts.get(norm) ?? 0) < minWordCount) continue;

    highlights.push({
      id: `word-${word.location}`,
      words: [word],
      phraseTogether: false,
      summary: `Repeated word (${wordCounts.get(norm)}×)`,
    });
  }

  return highlights;
}

/** @deprecated Use buildRepeatedHighlights in the overlay renderer. */
export function buildRepeatedWordRules(words, options) {
  return buildRepeatedHighlights(words, options).map((entry) => {
    if (entry.phraseTogether) {
      return {
        matchSequence: entry.words.map((word) => word.textUthmani),
        tone: "blue",
        highlightStyle: "outline",
        phraseBand: true,
        phraseTogether: true,
        summary: entry.summary,
      };
    }

    return {
      matchForms: [entry.words[0].textUthmani],
      tone: "blue",
      highlightStyle: "outline",
      summary: entry.summary,
    };
  });
}

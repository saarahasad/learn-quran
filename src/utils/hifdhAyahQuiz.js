import {
  extractKeyWords,
  getLocalAyah,
  getVerseStudy,
} from "./hifdhAyahContent.js";

export const AYAH_QUIZ_REARRANGE_COUNT = 3;
export const AYAH_QUIZ_BLANK_COUNT = 5;
export const AYAH_QUIZ_MEANING_COUNT = 5;
const MAX_REARRANGE_TOKENS = 7;
const MIN_REARRANGE_TOKENS = 3;

function seededShuffle(items, seed) {
  const arr = [...items];
  let s = Math.abs(seed) || 1;
  for (let i = arr.length - 1; i > 0; i -= 1) {
    s = (s * 16807) % 2147483647;
    const j = s % (i + 1);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function shuffleArray(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function uniqueOptions(correct, pool, count = 4, seed = 0) {
  const options = [correct];
  const orderedPool = seed ? seededShuffle(pool, seed) : shuffleArray(pool);
  for (const item of orderedPool) {
    if (item && item !== correct && !options.includes(item)) options.push(item);
    if (options.length >= count) break;
  }
  while (options.length < count) {
    options.push(`${correct} (${options.length})`);
  }
  return (seed ? seededShuffle(options, seed + 17) : shuffleArray(options)).slice(0, count);
}

function buildRearrangeQuestions(
  ayahNumber,
  words,
  seed,
  count = AYAH_QUIZ_REARRANGE_COUNT,
) {
  const total = words.length;
  if (total < MIN_REARRANGE_TOKENS) return [];

  const chunkSize = Math.min(
    MAX_REARRANGE_TOKENS,
    Math.max(MIN_REARRANGE_TOKENS, Math.ceil(total / count)),
  );
  const partLabels = ["beginning", "middle", "end"];
  const starts = [
    0,
    Math.max(0, Math.floor((total - chunkSize) / 2)),
    Math.max(0, total - chunkSize),
  ];

  const questions = [];
  const usedSlices = new Set();

  for (let i = 0; i < count; i += 1) {
    const start = starts[i] ?? Math.min(i * Math.floor(total / count), total - MIN_REARRANGE_TOKENS);
    const slice = words.slice(start, Math.min(total, start + chunkSize));
    if (slice.length < MIN_REARRANGE_TOKENS) continue;

    const sliceKey = slice.map((word) => word.ar).join("|");
    if (usedSlices.has(sliceKey)) continue;
    usedSlices.add(sliceKey);

    const tokens = slice.map((word, index) => ({
      id: index,
      ar: word.ar,
    }));

    questions.push({
      id: `rearrange-${ayahNumber}-${partLabels[i] ?? i}-${i}`,
      type: "rearrange",
      prompt: `Put the ${partLabels[i] ?? "words"} in order (${questions.length + 1} of ${count})`,
      partLabel: partLabels[i],
      tokens: seededShuffle(tokens, seed + 11 + i * 7),
      correctOrder: tokens.map((token) => token.id),
    });
  }

  return questions;
}

function buildBlankQuestions(ayahNumber, words, seed, count = AYAH_QUIZ_BLANK_COUNT) {
  if (words.length < 2) return [];

  const indices = seededShuffle(
    words.map((_, index) => index),
    seed + 3,
  );
  const questions = [];

  for (let attempt = 0; attempt < count * 2 && questions.length < count; attempt += 1) {
    const blankIndex = indices[attempt % indices.length];
    const correct = words[blankIndex].ar;
    const distractorPool = words
      .filter((_, index) => index !== blankIndex)
      .map((word) => word.ar);

    if (!distractorPool.length) continue;

    const id = `blank-${ayahNumber}-${blankIndex}-${questions.length}`;
    if (questions.some((question) => question.id === id)) continue;

    questions.push({
      id,
      type: "blanks",
      prompt: `Fill in the blank (${questions.length + 1} of ${count})`,
      segments: words.map((word, index) => (index === blankIndex ? null : word.ar)),
      blankIndex,
      correct,
      options: uniqueOptions(correct, distractorPool, 4, seed + blankIndex + questions.length * 13),
    });
  }

  return questions;
}

function buildMeaningQuestions(
  ayahNumber,
  surahNumber,
  words,
  localAyah,
  mushafPage,
  memorizedAyat,
  seed,
  count = AYAH_QUIZ_MEANING_COUNT,
) {
  const questions = [];
  const usedPhrases = new Set();

  const verseStudy = mushafPage ? getVerseStudy(mushafPage, ayahNumber) : null;
  const keyWords = extractKeyWords(verseStudy);
  const glossPool = keyWords.map((word) => word.gloss).filter(Boolean);

  for (const target of seededShuffle(keyWords, seed + 31)) {
    if (questions.length >= count) break;
    if (!target.ar || !target.gloss || usedPhrases.has(target.ar)) continue;

    usedPhrases.add(target.ar);
    questions.push({
      id: `match-${ayahNumber}-${target.ar}-${questions.length}`,
      type: "match",
      prompt: `Match the phrase to its meaning (${questions.length + 1} of ${count})`,
      phrase: target.ar,
      correct: target.gloss,
      options: uniqueOptions(target.gloss, glossPool, 4, seed + questions.length * 19),
    });
  }

  const wordsWithEn = words.filter((word) => word.ar && word.en);
  for (const word of seededShuffle(wordsWithEn, seed + 53)) {
    if (questions.length >= count) break;
    if (usedPhrases.has(word.ar)) continue;

    const meaningPool = wordsWithEn.map((entry) => entry.en).filter(Boolean);
    usedPhrases.add(word.ar);
    questions.push({
      id: `match-word-${ayahNumber}-${word.ar}-${questions.length}`,
      type: "match",
      prompt: `Match the word to its meaning (${questions.length + 1} of ${count})`,
      phrase: word.ar,
      correct: word.en,
      options: uniqueOptions(word.en, meaningPool, 4, seed + questions.length * 23),
    });
  }

  if (questions.length < count && localAyah?.en) {
    const translationPool = (memorizedAyat ?? [])
      .map((ayah) => getLocalAyah(surahNumber, ayah)?.en)
      .filter((text) => text && text !== localAyah.en);

    if (!usedPhrases.has(localAyah.ar ?? "__ayah__")) {
      questions.push({
        id: `meaning-${ayahNumber}-full`,
        type: "meaning",
        prompt: `What is the meaning of this āyah? (${questions.length + 1} of ${count})`,
        ayahText: localAyah.ar ?? words.map((word) => word.ar).join(" "),
        correct: localAyah.en,
        options: uniqueOptions(localAyah.en, translationPool, 4, seed + 97),
      });
      usedPhrases.add(localAyah.ar ?? "__ayah__");
    }
  }

  while (questions.length < count && wordsWithEn.length > 0) {
    const word = wordsWithEn[questions.length % wordsWithEn.length];
    const phraseKey = `${word.ar}-${questions.length}`;
    if (usedPhrases.has(phraseKey)) break;

    const meaningPool = wordsWithEn.map((entry) => entry.en).filter(Boolean);
    usedPhrases.add(phraseKey);
    questions.push({
      id: `match-word-${ayahNumber}-${phraseKey}`,
      type: "match",
      prompt: `Match the word to its meaning (${questions.length + 1} of ${count})`,
      phrase: word.ar,
      correct: word.en,
      options: uniqueOptions(
        word.en,
        meaningPool,
        4,
        seed + questions.length * 29,
      ),
    });
  }

  return questions.slice(0, count);
}

/** Per āyah: 3 rearrange parts, 5 blanks, 5 meaning / match questions. */
export function buildAyahQuizQuestions({
  ayahNumber,
  surahNumber,
  mushafPage,
  words,
  localAyah = null,
  memorizedAyat = [],
}) {
  if (!words?.length) return [];

  const seed = ayahNumber * 1000 + surahNumber;
  const questions = [];

  questions.push(...buildRearrangeQuestions(ayahNumber, words, seed));
  questions.push(...buildBlankQuestions(ayahNumber, words, seed));
  questions.push(
    ...buildMeaningQuestions(
      ayahNumber,
      surahNumber,
      words,
      localAyah,
      mushafPage,
      memorizedAyat,
      seed,
    ),
  );

  return questions;
}

export const AYAH_QUIZ_TYPE_LABELS = {
  rearrange: "Word order",
  blanks: "Fill the blank",
  meaning: "Āyah meaning",
  match: "Match the phrase",
};

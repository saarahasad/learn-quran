import { getBaqarahPageGuides } from "../data/baqarahPageGuides.js";
import { getSurahMushafPages } from "../data/mushafPageMap.js";
import { toArabicNum } from "./mushafText.js";
import { parseVerseRange } from "./mushafSpreadQuiz.js";

export const AUDIO_TEST_QUESTION_MIN = 15;
export const AUDIO_TEST_QUESTION_MAX = 20;
export const AUDIO_TEST_PROMPT_WORD_COUNT = 2;
export const AUDIO_TEST_ENDING_WORD_COUNT = 3;

/** Fallback when we have no page map — roughly one Madani page. */
export const DEFAULT_MAX_CHUNK_AYAT = 7;
/** Hard ceiling so a question never spans multiple pages in long surahs. */
export const HARD_MAX_CHUNK_AYAT = 8;

function shuffleArray(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function randomInt(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

function buildBaqarahAyahPageEnds() {
  const ayahToPageEnd = new Map();

  for (const guide of getBaqarahPageGuides()) {
    const ayat = parseVerseRange(guide.verseRange);
    if (!ayat.length) continue;
    const pageEnd = Math.max(...ayat);
    for (const ayah of ayat) {
      ayahToPageEnd.set(ayah, pageEnd);
    }
  }

  return ayahToPageEnd;
}

const BAQARAH_AYAH_PAGE_ENDS = buildBaqarahAyahPageEnds();

export function estimateAyahPerPage(surahNumber, ayahCount) {
  const pages = getSurahMushafPages(surahNumber);
  if (!pages.length || !ayahCount) return DEFAULT_MAX_CHUNK_AYAT;
  return Math.ceil(ayahCount / pages.length);
}

/** Furthest end āyah allowed for a prompt — stay within ~one mushaf page. */
export function maxEndAyahForPrompt(promptAyah, rangeEnd, surahNumber, ayahCount) {
  let pageEnd = null;

  if (surahNumber === 2 && BAQARAH_AYAH_PAGE_ENDS.has(promptAyah)) {
    pageEnd = BAQARAH_AYAH_PAGE_ENDS.get(promptAyah);
  } else {
    const perPage = estimateAyahPerPage(surahNumber, ayahCount);
    const chunkLimit = Math.min(HARD_MAX_CHUNK_AYAT, Math.max(3, perPage));
    pageEnd = promptAyah + chunkLimit - 1;
  }

  return Math.min(rangeEnd, pageEnd);
}

export function ayahRange(fromAyah, toAyah) {
  const start = Math.min(fromAyah, toAyah);
  const end = Math.max(fromAyah, toAyah);
  const ayat = [];
  for (let n = start; n <= end; n += 1) ayat.push(n);
  return ayat;
}

function ayahNumbersInRange(from, to) {
  const ayat = [];
  for (let n = from; n <= to; n += 1) ayat.push(n);
  return ayat;
}

function makeQuestion(promptAyah, endAyah, index) {
  return {
    id: `audio-test-${promptAyah}-${endAyah}-${index}-${randomInt(0, 99999)}`,
    ayahNumber: promptAyah,
    endAyahNumber: endAyah,
    ayahNumbers: ayahNumbersInRange(promptAyah, endAyah),
    chunkLabel:
      promptAyah === endAyah
        ? `Āyah ${toArabicNum(promptAyah)}`
        : `Āyāt ${toArabicNum(promptAyah)}–${toArabicNum(endAyah)}`,
  };
}

export function resolveAudioTestQuestionCount(span) {
  if (span <= 1) return AUDIO_TEST_QUESTION_MIN;
  const maxPossible = (span * (span + 1)) / 2;
  const desired = randomInt(AUDIO_TEST_QUESTION_MIN, AUDIO_TEST_QUESTION_MAX);
  return Math.min(desired, maxPossible);
}

function allChunksInRange(start, end, surahNumber, ayahCount) {
  const chunks = [];
  for (let prompt = start; prompt <= end; prompt += 1) {
    const maxEnd = maxEndAyahForPrompt(prompt, end, surahNumber, ayahCount);
    for (let endAyah = prompt; endAyah <= maxEnd; endAyah += 1) {
      chunks.push({ promptAyah: prompt, endAyah });
    }
  }
  return chunks;
}

function pickRandomChunk(start, end, surahNumber, ayahCount) {
  if (start === end) {
    return { promptAyah: start, endAyah: end };
  }

  const promptAyah = randomInt(start, end);
  const maxEnd = maxEndAyahForPrompt(promptAyah, end, surahNumber, ayahCount);
  const endAyah = randomInt(promptAyah, maxEnd);
  return { promptAyah, endAyah };
}

/**
 * Random mixed questions from anywhere in the selected range.
 * Each chunk stays within ~one mushaf page.
 */
export function buildAudioTestQuestions(
  fromAyah,
  toAyah,
  surahNumber,
  ayahCount,
  count = null,
) {
  const start = Math.min(fromAyah, toAyah);
  const end = Math.max(fromAyah, toAyah);
  const span = end - start + 1;
  if (span < 1) return [];

  const targetCount = count ?? resolveAudioTestQuestionCount(span);
  const pool = shuffleArray(allChunksInRange(start, end, surahNumber, ayahCount));
  const used = new Set();
  const questions = [];

  for (const chunk of pool) {
    if (questions.length >= targetCount) break;
    const key = `${chunk.promptAyah}-${chunk.endAyah}`;
    if (used.has(key)) continue;
    used.add(key);
    questions.push(makeQuestion(chunk.promptAyah, chunk.endAyah, questions.length));
  }

  let attempts = 0;
  while (questions.length < targetCount && attempts < targetCount * 40) {
    attempts += 1;
    const chunk = pickRandomChunk(start, end, surahNumber, ayahCount);
    const key = `${chunk.promptAyah}-${chunk.endAyah}`;
    if (used.has(key) && used.size < pool.length) continue;
    used.add(key);
    questions.push(makeQuestion(chunk.promptAyah, chunk.endAyah, questions.length));
  }

  return shuffleArray(questions);
}

export function openingSnippet(ar, wordCount = AUDIO_TEST_PROMPT_WORD_COUNT) {
  if (!ar) return "";
  const words = ar.trim().split(/\s+/).filter(Boolean);
  if (words.length <= wordCount) return ar;
  return `${words.slice(0, wordCount).join(" ")} …`;
}

export function closingSnippet(ar, wordCount = AUDIO_TEST_ENDING_WORD_COUNT) {
  if (!ar) return "";
  const words = ar.trim().split(/\s+/).filter(Boolean);
  if (words.length <= wordCount) return ar;
  return `… ${words.slice(-wordCount).join(" ")}`;
}

export function describeReciteTarget(question) {
  const start = toArabicNum(question.ayahNumber);
  const end = toArabicNum(question.endAyahNumber);

  if (question.ayahNumber === question.endAyahNumber) {
    return {
      headline: `Recite through the end of āyah ${start}`,
      subline: `Opening of āyah ${start} → finish this āyah`,
    };
  }

  return {
    headline: `Recite through the end of āyah ${end}`,
    subline: `Opening of āyah ${start} → through āyah ${end}`,
  };
}

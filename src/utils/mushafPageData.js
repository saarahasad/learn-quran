/**
 * Mushaf page data: QuranDC word metadata + pixel bounding boxes (location key).
 * Coordinates: https://github.com/bodoorzahera/Quran-coordinate (900×1437 Madani ref)
 */
const QDC_BASE = "https://api.qurancdn.com/api/qdc/verses/by_page";
const QDC_CHAPTER = "https://api.qurancdn.com/api/qdc/verses/by_chapter";
const COORD_BASE =
  "https://raw.githubusercontent.com/bodoorzahera/Quran-coordinate/master/data/coords";

import { MUSHAF_REF_HEIGHT, MUSHAF_REF_WIDTH } from "./mushafPageHotspots.js";
import { fetchWithTimeout } from "./fetchWithTimeout.js";

const COORD_REF_WIDTH = 900;
const COORD_REF_HEIGHT = 1437;

/** Inset when mapping Quran-coordinate (900×1437) boxes onto the 680×976 mushaf image. */
const MUSHAF_CONTAINER_LEFT = 0;
const MUSHAF_CONTAINER_TOP = 0;

const pageCache = new Map();

function padPage(n) {
  return String(n).padStart(3, "0");
}

async function fetchPageCoords(pageNumber) {
  const padded = `page-${padPage(pageNumber)}.json`;
  const res = await fetchWithTimeout(`${COORD_BASE}/${padded}`);
  if (!res.ok) return {};
  const data = await res.json();
  return data.coords ?? {};
}

async function fetchPageVerses(pageNumber) {
  const url = `${QDC_BASE}/${pageNumber}?words=true&word_fields=text_uthmani,location,code_v1&word_translation_language=en&word_transliteration_language=en`;
  const res = await fetchWithTimeout(url);
  if (!res.ok) throw new Error(`QuranDC page ${pageNumber}`);
  const data = await res.json();
  return data.verses ?? [];
}

function extractWords(verses) {
  const words = [];

  for (const verse of verses) {
    for (const word of verse.words ?? []) {
      if (word.char_type_name !== "word") continue;

      const [sura, ayah, wordNum] = word.location.split(":").map(Number);

      words.push({
        id: word.id,
        location: word.location,
        sura,
        ayah,
        wordNum,
        verseKey: verse.verse_key,
        textUthmani: word.text_uthmani,
        translation: word.translation?.text ?? "",
        transliteration: word.transliteration?.text ?? "",
        lineNumber: word.line_number,
        position: word.position,
      });
    }
  }

  return words;
}

const LINE_TOP = 91 * (MUSHAF_REF_HEIGHT / COORD_REF_HEIGHT);
const LINE_HEIGHT = 41 * (MUSHAF_REF_HEIGHT / COORD_REF_HEIGHT);
const MARGIN_X = MUSHAF_CONTAINER_LEFT;
const WORD_HEIGHT = 38 * (MUSHAF_REF_HEIGHT / COORD_REF_HEIGHT);

/** Estimate RTL word boxes from line_number when coordinate JSON is incomplete. */
function estimateLineBoxes(words) {
  const byLine = new Map();

  for (const word of words) {
    const line = word.lineNumber ?? 1;
    if (!byLine.has(line)) byLine.set(line, []);
    byLine.get(line).push(word);
  }

  const estimated = new Map();
  const usableW = MUSHAF_REF_WIDTH - MARGIN_X * 2;

  for (const [line, lineWords] of byLine) {
    const sorted = [...lineWords].sort((a, b) => {
      if (a.sura !== b.sura) return a.sura - b.sura;
      if (a.ayah !== b.ayah) return a.ayah - b.ayah;
      return a.position - b.position;
    });

    const totalChars = sorted.reduce((sum, w) => sum + w.textUthmani.length, 0) || 1;
    let right = MUSHAF_REF_WIDTH - MARGIN_X;
    const y = MUSHAF_CONTAINER_TOP + LINE_TOP + Math.max(0, line - 3) * LINE_HEIGHT;

    for (const word of sorted) {
      const share = word.textUthmani.length / totalChars;
      const w = Math.max(16, share * usableW);
      const x = right - w;
      right = x;
      estimated.set(word.location, { x, y, w, h: WORD_HEIGHT });
    }
  }

  return estimated;
}

function scaleCoordBox(box) {
  const sx = MUSHAF_REF_WIDTH / COORD_REF_WIDTH;
  const sy = MUSHAF_REF_HEIGHT / COORD_REF_HEIGHT;
  return {
    x: MUSHAF_CONTAINER_LEFT + box.x * sx,
    y: MUSHAF_CONTAINER_TOP + box.y * sy,
    w: box.w * sx,
    h: box.h * sy,
  };
}

function mergeWordsWithCoords(words, coords) {
  const estimated = estimateLineBoxes(words);

  return words.map((word) => {
    const raw = coords[word.location]?.h ?? estimated.get(word.location);
    if (!raw) return null;
    const bbox = coords[word.location]?.h ? scaleCoordBox(raw) : raw;
    return {
      ...word,
      bbox,
      coordSource: coords[word.location]?.h ? "precise" : "estimated",
    };
  }).filter(Boolean);
}

/** Fetch merged word list for one printed page (cached). */
export async function loadPageWords(pageNumber, surahNumber = null) {
  const cacheKey = `${pageNumber}:${surahNumber ?? "all"}`;
  if (pageCache.has(cacheKey)) return pageCache.get(cacheKey);

  const promise = Promise.all([
    fetchPageVerses(pageNumber),
    fetchPageCoords(pageNumber),
  ])
    .then(([verses, coords]) => {
      let words = mergeWordsWithCoords(extractWords(verses), coords);
      if (surahNumber != null) {
        words = words.filter((w) => w.sura === surahNumber);
      }
      return { pageNumber, words, error: null };
    })
    .catch((err) => {
      // Allow a retry next time instead of caching the failure for the session.
      pageCache.delete(cacheKey);
      return {
        pageNumber,
        words: [],
        error: err?.message ?? "Failed to load page",
      };
    });

  pageCache.set(cacheKey, promise);
  return promise;
}

export function bboxToPercent({ x, y, w, h }) {
  return {
    left: `${(x / MUSHAF_REF_WIDTH) * 100}%`,
    top: `${(y / MUSHAF_REF_HEIGHT) * 100}%`,
    width: `${(w / MUSHAF_REF_WIDTH) * 100}%`,
    height: `${(h / MUSHAF_REF_HEIGHT) * 100}%`,
  };
}

export function prefetchPage(pageNumber, surahNumber = null) {
  loadPageWords(pageNumber, surahNumber);
}

/** Fetch one āyah's words from the chapter endpoint (when missing from page data). */
export async function fetchAyahWordsFromChapter(surahNumber, ayahNumber) {
  const url = `${QDC_CHAPTER}/${surahNumber}?words=true&word_fields=text_uthmani,location,line_number&per_page=1&page=${ayahNumber}`;
  const res = await fetchWithTimeout(url);
  if (!res.ok) return [];

  const data = await res.json();
  const verse = data.verses?.[0];
  if (!verse) return [];

  return extractWords([verse]);
}

/** Word metadata for one āyah, searched across the given printed pages. */
export async function loadAyahWords(pageNumbers, surahNumber, ayahNumber) {
  for (const pageNumber of pageNumbers) {
    const { words } = await loadPageWords(pageNumber, surahNumber);
    const ayahWords = words
      .filter((w) => w.ayah === ayahNumber)
      .sort((a, b) => a.wordNum - b.wordNum);
    if (ayahWords.length) return ayahWords;
  }
  return [];
}

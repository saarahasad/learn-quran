import { getBaqarahGuideByMushafPage } from "../data/baqarahPageGuides.js";
import { loadPageWords } from "./mushafPageData.js";

export function parseVerseRange(range) {
  const normalized = String(range).replace(/\s/g, "");
  const [startStr, endStr] = normalized.split(/[–-]/);
  const start = Number(startStr);
  const end = Number(endStr ?? startStr);
  if (!Number.isFinite(start)) return [];
  const verses = [];
  for (let verse = start; verse <= end; verse += 1) verses.push(verse);
  return verses;
}

/** Odd–even pair for a printed mushaf spread (e.g. 3–4, with 3 on the right). */
export function getMushafSpreadPages(page) {
  return page % 2 === 1 ? [page, page + 1] : [page - 1, page];
}

/** Build spreads aligned to printed mushaf pairs, filtered to `pages`. */
export function buildSpreads(pages) {
  if (!pages.length) return [];

  const pageSet = new Set(pages);
  const spreadStarts = new Set();

  for (const page of pages) {
    spreadStarts.add(getMushafSpreadPages(page)[0]);
  }

  return [...spreadStarts]
    .sort((a, b) => a - b)
    .map((oddPage) => [oddPage, oddPage + 1].filter((p) => pageSet.has(p)));
}

export function getSpreadForMushafPage(pages, mushafPage) {
  if (mushafPage == null) return pages.length ? buildSpreads(pages)[0] ?? [] : [];
  const spreads = buildSpreads(pages);
  return spreads.find((spread) => spread.includes(mushafPage)) ?? [mushafPage];
}

export function resolveAyahNumbersFromGuides(mushafPages) {
  const ayahs = new Set();
  for (const page of mushafPages) {
    const guide = getBaqarahGuideByMushafPage(page);
    if (guide?.verseRange) {
      parseVerseRange(guide.verseRange).forEach((n) => ayahs.add(n));
    }
  }
  return [...ayahs].sort((a, b) => a - b);
}

export async function resolveAyahNumbersForPages(mushafPages, surahNumber) {
  const fromGuides = resolveAyahNumbersFromGuides(mushafPages);
  if (fromGuides.length) return fromGuides;

  const ayahs = new Set();
  for (const page of mushafPages) {
    const { words } = await loadPageWords(page, surahNumber);
    for (const word of words) {
      if (word.ayah != null) ayahs.add(word.ayah);
    }
  }
  return [...ayahs].sort((a, b) => a - b);
}

export function formatSpreadPagesLabel(pages = []) {
  if (!pages.length) return "";
  if (pages.length === 1) return `page ${pages[0]}`;
  return `pages ${pages[0]}–${pages[pages.length - 1]}`;
}

export function formatAyahScopeLabel(ayahNumbers = []) {
  if (!ayahNumbers.length) return "";
  const start = ayahNumbers[0];
  const end = ayahNumbers[ayahNumbers.length - 1];
  return start === end ? `āyah ${start}` : `āyāt ${start}–${end}`;
}

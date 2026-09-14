import { TEXTBOOKS } from "../data/textbooks.js";
import { classifyTerm } from "./classifyTerms.js";

const entryCache = new Map();

/** Parse textbook HTML into { wordText → { role, detail } } entries. */
function parseTextbookEntries(surahId) {
  if (entryCache.has(surahId)) return entryCache.get(surahId);

  const html = TEXTBOOKS[surahId];
  if (!html) {
    entryCache.set(surahId, new Map());
    return entryCache.get(surahId);
  }

  const entries = new Map();
  const re =
    /<span class="gkey(?:\s+verse-word)?">([^<]+)<\/span><span class="grammar-explain">([^<]+)<\/span>/g;

  let match;
  while ((match = re.exec(html)) !== null) {
    const word = match[1].trim();
    const detail = match[2]
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    if (word) entries.set(word, { word, detail });
  }

  entryCache.set(surahId, entries);
  return entries;
}

/**
 * Look up iʿrāb notes for a word (from textbook HTML).
 * Returns { word, detail, terms[] } or null.
 */
export function getIraabForWord(surahId, textUthmani) {
  const entries = parseTextbookEntries(surahId);
  const normalized = textUthmani?.trim();
  if (!normalized) return null;

  const hit =
    entries.get(normalized) ??
    [...entries.entries()].find(([key]) => key.includes(normalized) || normalized.includes(key))?.[1];

  if (!hit) return null;

  const terms = hit.detail
    .split(/[.،:—+]+/)
    .map((s) => s.trim())
    .filter((s) => /[\u0600-\u06FF]/.test(s))
    .map((text) => ({ text, category: classifyTerm(text) }));

  return { ...hit, terms };
}

import { getBaqarahIraabForPage } from "../data/baqarahIraab.js";
import { normalizeAr } from "./arabicMatch.js";
import { buildGlanceMeta } from "./iraabGlance.js";

export function buildIraabLookupForPage(mushafPage) {
  const ayahs = getBaqarahIraabForPage(mushafPage) ?? [];
  const byVerse = new Map();

  for (const ayah of ayahs) {
    const rows = ayah.rows.map((row) => ({
      ...row,
      verse: ayah.verse,
      glance: buildGlanceMeta(row),
    }));
    byVerse.set(ayah.verse, rows);
  }

  return byVerse;
}

export function lookupIraabForWord(byVerse, ayah, textUthmani) {
  const rows = byVerse.get(ayah);
  if (!rows?.length) return null;

  const norm = normalizeAr(textUthmani);
  if (!norm) return null;

  const exact = rows.find((row) => normalizeAr(row.word) === norm);
  if (exact) return exact;

  const contained = rows.find((row) => {
    const rowNorm = normalizeAr(row.word);
    return rowNorm && (norm.includes(rowNorm) || rowNorm.includes(norm));
  });
  if (contained) return contained;

  return rows.find((row) => {
    const rowNorm = normalizeAr(row.word);
    if (!rowNorm || rowNorm.length < 3) return false;
    return norm.startsWith(rowNorm) || rowNorm.startsWith(norm);
  }) ?? null;
}

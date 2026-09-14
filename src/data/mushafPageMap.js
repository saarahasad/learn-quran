/**
 * Medina mushaf printed page numbers per surah (Quran.com chapter id).
 * `pages: [start, end]` is expanded to every page in the range, inclusive.
 */
const PAGE_RANGES = {
  1: [1, 1],
  2: [2, 49],
  78: [582, 583],
  79: [583, 584],
  80: [585, 585],
  81: [586, 586],
  82: [587, 587],
  83: [587, 589],
  84: [589, 589],
  85: [590, 590],
  86: [591, 591],
  87: [591, 592],
  88: [592, 592],
  89: [593, 594],
  90: [594, 594],
  91: [595, 595],
  92: [595, 596],
  93: [596, 596],
  94: [596, 596],
  95: [597, 597],
  96: [597, 597],
  97: [598, 598],
  98: [598, 599],
  99: [599, 599],
  100: [599, 600],
  101: [600, 600],
  102: [600, 600],
  103: [601, 601],
  104: [601, 601],
  105: [601, 601],
  106: [602, 602],
  107: [602, 602],
  108: [602, 602],
  109: [603, 603],
  110: [603, 603],
  111: [603, 603],
  112: [604, 604],
  113: [604, 604],
  114: [604, 604],
};

function expandRange([start, end]) {
  const pages = [];
  for (let page = start; page <= end; page += 1) pages.push(page);
  return pages;
}

export const MUSHAF_PAGES = Object.fromEntries(
  Object.entries(PAGE_RANGES).map(([id, range]) => [Number(id), expandRange(range)]),
);

export function getSurahMushafPages(revelationOrder) {
  const pages = MUSHAF_PAGES[revelationOrder];
  if (!pages) return [];
  return [...new Set(pages)].sort((a, b) => a - b);
}

/** Best-effort mushaf page for an āyah when only surah-level page ranges exist. */
export function getMushafPageForAyah(revelationOrder, ayahNumber = 1, ayahCount = 1) {
  const pages = getSurahMushafPages(revelationOrder);
  if (!pages.length) return null;
  if (pages.length === 1) return pages[0];

  const ratio = (ayahNumber - 1) / Math.max(ayahCount - 1, 1);
  const index = Math.min(pages.length - 1, Math.floor(ratio * pages.length));
  return pages[index];
}

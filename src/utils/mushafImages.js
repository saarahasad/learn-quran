/**
 * Blue Medina mushaf scans from QuranFlash Medina3.
 * Image filenames are offset +3 vs the printed page number
 * (e.g. printed page 585 → 0588.png).
 */
const QURANFLASH_BASE =
  "https://app.quranflash.com/book/Medina3/epub/EPUB/imgs";

const QURANFLASH_PAGE_OFFSET = 3;

const FALLBACK_IMAGE_BASE =
  "https://raw.githubusercontent.com/GovarJabbar/Quran-PNG/master";

export function getMushafPageImageUrl(printedPageNumber) {
  const imageIndex = printedPageNumber + QURANFLASH_PAGE_OFFSET;
  const padded = String(imageIndex).padStart(4, "0");
  return `${QURANFLASH_BASE}/${padded}.png`;
}

export function getMushafPageFallbackUrl(printedPageNumber) {
  return `${FALLBACK_IMAGE_BASE}/${printedPageNumber}.png`;
}

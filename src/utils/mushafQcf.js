const FONT_BASE =
  "https://raw.githubusercontent.com/mustafa0x/qpc-fonts/f93bf5f3/mushaf-woff2";

const LAYOUT_BASE =
  "https://raw.githubusercontent.com/zonetecde/mushaf-layout/refs/heads/main/mushaf";

const loadedFonts = new Set();
const pageDataCache = new Map();

export function pageFontFamily(pageNum) {
  return `QCF_P${String(pageNum).padStart(3, "0")}`;
}

export async function loadPageFont(pageNum) {
  const page = String(pageNum).padStart(3, "0");
  const family = `QCF_P${page}`;

  if (loadedFonts.has(family)) return family;

  const fontFace = new FontFace(
    family,
    `url(${FONT_BASE}/QCF_P${page}.woff2)`,
  );

  const loaded = await fontFace.load();
  document.fonts.add(loaded);
  loadedFonts.add(family);
  return family;
}

export async function fetchPageLayout(pageNum) {
  if (pageDataCache.has(pageNum)) return pageDataCache.get(pageNum);

  const page = String(pageNum).padStart(3, "0");
  const promise = fetch(`${LAYOUT_BASE}/page-${page}.json`)
    .then((res) => {
      if (!res.ok) throw new Error(`Layout page ${pageNum}`);
      return res.json();
    })
    .catch((err) => {
      pageDataCache.delete(pageNum);
      throw err;
    });

  pageDataCache.set(pageNum, promise);
  return promise;
}

export function parseLocation(location) {
  const [sura, ayah, word] = location.split(":").map(Number);
  return { sura, ayah, word };
}

/** QPC V1 glyph string for font rendering. */
export function glyphText(word) {
  return (word.qpcV1 ?? word.qpcV2 ?? word.word ?? "").replace(/\s+/g, "");
}

export function preloadPage(pageNum) {
  loadPageFont(pageNum).catch(() => {});
  fetchPageLayout(pageNum).catch(() => {});
}

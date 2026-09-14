/**
 * QuranFlash Medina3 verse hit-zones (vBtn overlays).
 * Coordinates live inside btnScaler (≈1.453×) then map to the 680×976 PNG.
 */
const QURANFLASH_EPUB = "https://app.quranflash.com/book/Medina3/epub/EPUB";

export const MUSHAF_REF_WIDTH = 680;
export const MUSHAF_REF_HEIGHT = 976;

const XHTML_PAGE_OFFSET = 2;

const cache = new Map();

const VB_RE =
  /class="vBtn"\s+id="(v[^"]+)"\s+style="top:(\d+)px;left:(\d+)px;width:(\d+)px;height:(\d+)px;"/g;

const SCALER_RE = /btnScaler[^>]*scale\(([\d.]+)\)/;
const CONTAINER_RE = /btnContainer[^>]*left:(-?\d+)px;top:(-?\d+)px/;

export function parseVBtnId(id) {
  const match = id.match(/^v(\d+)_(\d+)(?:_\d+)?$/);
  if (!match) return null;
  return { surah: Number(match[1]), ayah: Number(match[2]) };
}

function xhtmlUrlForPrintedPage(printedPage) {
  return `${QURANFLASH_EPUB}/xhtml/raw/page${printedPage + XHTML_PAGE_OFFSET}.xhtml`;
}

function parseLayoutMeta(html, printedPage) {
  const scaleMatch = html.match(SCALER_RE);
  const containerMatch = html.match(CONTAINER_RE);

  // Odd pages sit on the left of a spread (containerLeft −20); even on the right (+12).
  const defaultLeft = printedPage % 2 === 1 ? -20 : 12;

  return {
    scale: scaleMatch ? Number(scaleMatch[1]) : 1,
    containerLeft: containerMatch ? Number(containerMatch[1]) : defaultLeft,
    containerTop: containerMatch ? Number(containerMatch[2]) : 10,
  };
}

function parseHotspotsFromXhtml(html) {
  const hotspots = [];

  for (const match of html.matchAll(VB_RE)) {
    const [, id, top, left, width, height] = match;
    const parsed = parseVBtnId(id);
    if (!parsed) continue;

    hotspots.push({
      id,
      surah: parsed.surah,
      ayah: parsed.ayah,
      top: Number(top),
      left: Number(left),
      width: Number(width),
      height: Number(height),
    });
  }

  return hotspots;
}

/** All vBtn zones on a printed mushaf page. */
export async function getPageHotspots(printedPage) {
  if (cache.has(printedPage)) return cache.get(printedPage);

  const promise = fetch(xhtmlUrlForPrintedPage(printedPage))
    .then((res) => {
      if (!res.ok) throw new Error(`hotspots page ${printedPage}`);
      return res.text();
    })
    .then((html) => ({
      hotspots: parseHotspotsFromXhtml(html),
      layout: parseLayoutMeta(html, printedPage),
    }))
    .catch(() => ({
      hotspots: [],
      layout: {
        scale: 1,
        containerLeft: printedPage % 2 === 1 ? -20 : 12,
        containerTop: 10,
      },
    }));

  cache.set(printedPage, promise);
  return promise;
}

export function hotspotToPercent(
  { top, left, width, height },
  layout = { scale: 1, containerLeft: 12, containerTop: 10 },
) {
  const x = (layout.containerLeft + left) * layout.scale;
  const y = (layout.containerTop + top) * layout.scale;
  const w = width * layout.scale;
  const h = height * layout.scale;

  return {
    left: `${(x / MUSHAF_REF_WIDTH) * 100}%`,
    top: `${(y / MUSHAF_REF_HEIGHT) * 100}%`,
    width: `${(w / MUSHAF_REF_WIDTH) * 100}%`,
    height: `${(h / MUSHAF_REF_HEIGHT) * 100}%`,
  };
}

export function prefetchHotspots(printedPage) {
  getPageHotspots(printedPage);
}

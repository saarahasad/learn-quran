/**
 * Word bounding boxes aligned to the QuranFlash scanned mushaf (vBtn line zones).
 * Words on the same mushaf line share one merged zone band (fixes split ayah lines).
 */
import { fetchAyahWordsFromChapter, loadPageWords } from "./mushafPageData.js";
import { getMergedCalibrations } from "./mushafWordBoxCalibration.js";
import {
  getPageHotspots,
  MUSHAF_REF_HEIGHT,
  MUSHAF_REF_WIDTH,
} from "./mushafPageHotspots.js";

const cache = new Map();

function zoneToPixels(zone, layout) {
  return {
    ayah: zone.ayah,
    x: (layout.containerLeft + zone.left) * layout.scale,
    y: (layout.containerTop + zone.top) * layout.scale,
    w: zone.width * layout.scale,
    h: zone.height * layout.scale,
  };
}

function clusterZonesByY(zones) {
  const clusters = [];

  for (const zone of [...zones].sort((a, b) => a.y - b.y)) {
    const cluster = clusters.find((entry) => Math.abs(entry.y - zone.y) < 28);
    if (cluster) {
      cluster.zones.push(zone);
      cluster.y = (cluster.y + zone.y) / 2;
    } else {
      clusters.push({ y: zone.y, zones: [zone] });
    }
  }

  return clusters;
}

function mergeZoneBounds(zones) {
  let x1 = Infinity;
  let y1 = Infinity;
  let x2 = -Infinity;
  let y2 = -Infinity;

  for (const { x, y, w, h } of zones) {
    x1 = Math.min(x1, x);
    y1 = Math.min(y1, y);
    x2 = Math.max(x2, x + w);
    y2 = Math.max(y2, y + h);
  }

  return { x: x1, y: y1, w: x2 - x1, h: y2 - y1 };
}

function distributeWordsInBand(band, words) {
  if (!words.length) return [];

  const padX = 2;
  const padY = 2;
  const innerW = Math.max(1, band.w - padX * 2);
  const innerY = band.y + padY;
  const innerH = Math.max(1, band.h - padY * 2);

  const totalChars = words.reduce(
    (sum, word) => sum + Math.max(word.textUthmani.length, 1),
    0,
  );

  let right = band.x + band.w - padX;
  const result = [];

  for (const word of words) {
    const share = Math.max(word.textUthmani.length, 1) / totalChars;
    const wordW = Math.max(10, share * innerW);
    const wordX = right - wordW;
    right = wordX;

    result.push({
      ...word,
      bbox: {
        x: Math.max(band.x + padX, wordX),
        y: innerY,
        w: wordW,
        h: innerH,
      },
      coordSource: "mushaf-line",
    });
  }

  return result;
}

function groupWordsByLine(words) {
  const byLine = new Map();

  for (const word of words) {
    const line = word.lineNumber ?? 0;
    if (!byLine.has(line)) byLine.set(line, []);
    byLine.get(line).push(word);
  }

  return [...byLine.entries()]
    .sort(([a], [b]) => a - b)
    .map(([lineNumber, lineWords]) => [
      lineNumber,
      lineWords.sort((a, b) => a.ayah - b.ayah || a.wordNum - b.wordNum),
    ]);
}

function pickCluster(clusters, ayahsOnLine, usedClusters) {
  let best = null;
  let bestScore = -1;

  for (const cluster of clusters) {
    if (usedClusters.has(cluster)) continue;

    const clusterAyahs = new Set(cluster.zones.map((zone) => zone.ayah));
    const overlap = [...ayahsOnLine].filter((ayah) => clusterAyahs.has(ayah)).length;
    if (overlap > bestScore) {
      bestScore = overlap;
      best = cluster;
    }
  }

  return bestScore > 0 ? best : null;
}

function matchLinesToZones(lineGroups, zones) {
  if (!lineGroups.length || !zones.length) return [];

  if (lineGroups.length === zones.length) {
    return lineGroups.map((words, index) => ({
      zone: zones[index],
      words,
    }));
  }

  const allWords = lineGroups.flat();
  const chunkSize = Math.ceil(allWords.length / zones.length);
  return zones.map((zone, index) => ({
    zone,
    words: allWords.slice(index * chunkSize, (index + 1) * chunkSize),
  }));
}

function distributeWordsInZone(zone, layout, words) {
  const band = zoneToPixels(zone, layout);
  return distributeWordsInBand(band, words);
}

async function loadSupplementalWords(hotspots, words, surahNumber) {
  if (surahNumber == null) return [];

  const ayahsOnPage = [...new Set(hotspots.filter((z) => z.surah === surahNumber).map((z) => z.ayah))];
  const ayahsInWords = new Set(words.map((word) => word.ayah));
  const missingAyahs = ayahsOnPage.filter((ayah) => !ayahsInWords.has(ayah));
  if (!missingAyahs.length) return [];

  const supplemental = [];
  for (const ayah of missingAyahs) {
    supplemental.push(...(await fetchAyahWordsFromChapter(surahNumber, ayah)));
  }

  return supplemental;
}

function assignAyahZoneWords(hotspots, words, layout, surahNumber) {
  const zonesByAyah = new Map();
  for (const zone of hotspots) {
    if (surahNumber != null && zone.surah !== surahNumber) continue;
    if (!zonesByAyah.has(zone.ayah)) zonesByAyah.set(zone.ayah, []);
    zonesByAyah.get(zone.ayah).push(zone);
  }

  const wordsByAyah = new Map();
  for (const word of words) {
    if (!wordsByAyah.has(word.ayah)) wordsByAyah.set(word.ayah, []);
    wordsByAyah.get(word.ayah).push(word);
  }

  const placed = [];

  for (const [ayah, ayahWords] of wordsByAyah) {
    const zones = zonesByAyah.get(ayah);
    if (!zones?.length) continue;

    const sortedZones = [...zones].sort((a, b) => a.top - b.top);
    const lineGroups = groupWordsByLine(ayahWords).map(([, lineWords]) => lineWords);
    const pairs = matchLinesToZones(lineGroups, sortedZones);

    for (const { zone, words: lineWords } of pairs) {
      placed.push(...distributeWordsInZone(zone, layout, lineWords));
    }
  }

  return placed;
}

function assignWordBoxes(hotspots, words, layout, surahNumber = null) {
  const zones = hotspots.map((zone) => zoneToPixels(zone, layout));
  const clusters = clusterZonesByY(zones);
  const usedClusters = new Set();
  const placed = [];
  const placedKeys = new Set();
  const supplementalAyahs = new Set(
    words.filter((word) => word.coordSource === "supplemental").map((word) => word.ayah),
  );
  const deferredByAyah = new Map();

  for (const [lineNumber, lineWords] of groupWordsByLine(words)) {
    const ayahsOnLine = new Set(lineWords.map((word) => word.ayah));
    const hasSupplementalOnLine = [...ayahsOnLine].some((ayah) =>
      supplementalAyahs.has(ayah),
    );

    if (hasSupplementalOnLine) {
      for (const word of lineWords) {
        if (supplementalAyahs.has(word.ayah)) continue;
        if (!deferredByAyah.has(word.ayah)) deferredByAyah.set(word.ayah, []);
        deferredByAyah.get(word.ayah).push(word);
      }
      continue;
    }

    const cluster = pickCluster(clusters, ayahsOnLine, usedClusters);
    if (!cluster) continue;

    usedClusters.add(cluster);
    const band = mergeZoneBounds(cluster.zones);
    for (const word of distributeWordsInBand(band, lineWords)) {
      placed.push(word);
      placedKeys.add(word.location);
    }
  }

  for (const [ayah, deferredWords] of deferredByAyah) {
    const ayahWords = words.filter((word) => word.ayah === ayah);
    const ayahPlaced = assignAyahZoneWords(hotspots, ayahWords, layout, surahNumber);
    const deferredKeys = new Set(deferredWords.map((word) => word.location));

    for (const word of ayahPlaced) {
      if (!deferredKeys.has(word.location) || placedKeys.has(word.location)) continue;
      placed.push(word);
      placedKeys.add(word.location);
    }
  }

  const supplementalWords = words.filter((word) => supplementalAyahs.has(word.ayah));
  if (supplementalWords.length) {
    placed.push(...assignAyahZoneWords(hotspots, supplementalWords, layout, surahNumber));
  }

  return placed.sort((a, b) => {
    if (a.lineNumber !== b.lineNumber) return a.lineNumber - b.lineNumber;
    if (a.ayah !== b.ayah) return a.ayah - b.ayah;
    return a.wordNum - b.wordNum;
  });
}

function applyCalibrations(page, surahNumber, words) {
  const calibrations = getMergedCalibrations(page, surahNumber);
  if (!Object.keys(calibrations).length) return words;

  return words.map((word) => {
    const saved = calibrations[word.location];
    if (!saved) return word;
    return {
      ...word,
      bbox: {
        ...word.bbox,
        ...(saved.x != null ? { x: saved.x } : {}),
        ...(saved.w != null ? { w: saved.w } : {}),
      },
      coordSource: "calibrated",
    };
  });
}

export async function getMushafWordBoxes(page, surahNumber = null, options = {}) {
  const { skipCalibration = false } = options;
  const cacheKey = `${page}:${surahNumber ?? "all"}:${skipCalibration ? "auto" : "cal"}`;
  if (cache.has(cacheKey)) return cache.get(cacheKey);

  const promise = Promise.all([
    getPageHotspots(page),
    loadPageWords(page, surahNumber),
  ]).then(async ([{ hotspots, layout }, { words }]) => {
    const supplemental = await loadSupplementalWords(hotspots, words, surahNumber);
    const allWords = supplemental.length
      ? [
          ...words,
          ...supplemental.map((word) => ({ ...word, coordSource: "supplemental" })),
        ]
      : words;

    const placed = assignWordBoxes(hotspots, allWords, layout, surahNumber);

    return {
      page,
      words: skipCalibration
        ? placed
        : applyCalibrations(page, surahNumber, placed),
      layout,
    };
  });

  cache.set(cacheKey, promise);
  return promise;
}

export async function getAutoMushafWordBoxes(page, surahNumber = null) {
  return getMushafWordBoxes(page, surahNumber, { skipCalibration: true });
}

export function prefetchMushafWordBoxes(page, surahNumber = null) {
  getMushafWordBoxes(page, surahNumber);
}

export function clearMushafWordBoxesCache(page = null, surahNumber = null) {
  if (page == null) {
    cache.clear();
    return;
  }
  cache.delete(`${page}:${surahNumber ?? "all"}:cal`);
  cache.delete(`${page}:${surahNumber ?? "all"}:auto`);
}

export { MUSHAF_REF_WIDTH, MUSHAF_REF_HEIGHT };

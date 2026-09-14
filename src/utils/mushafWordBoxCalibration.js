import { MUSHAF_WORD_BOX_CALIBRATIONS } from "../data/mushafWordBoxCalibrations.js";

const STORAGE_KEY = "learn-quran:mushaf-word-box-calibrations";

function pageKey(page, surahNumber) {
  return `${page}:${surahNumber ?? "all"}`;
}

function readStore() {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}

function writeStore(store) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
}

export function getMergedCalibrations(page, surahNumber) {
  const key = pageKey(page, surahNumber);
  const shipped = MUSHAF_WORD_BOX_CALIBRATIONS[key] ?? {};
  const saved = readStore()[key] ?? {};
  return { ...shipped, ...saved };
}

export function getPageCalibration(page, surahNumber) {
  return getMergedCalibrations(page, surahNumber);
}

export function savePageCalibration(page, surahNumber, boxesByLocation) {
  const key = pageKey(page, surahNumber);
  const store = readStore();
  store[key] = boxesByLocation;
  writeStore(store);
}

export function clearPageCalibration(page, surahNumber) {
  const key = pageKey(page, surahNumber);
  const store = readStore();
  delete store[key];
  writeStore(store);
}

export function getAllSavedCalibrations() {
  return readStore();
}

export function exportCalibrationsJson() {
  const store = readStore();
  const merged = { ...MUSHAF_WORD_BOX_CALIBRATIONS };

  for (const [key, boxes] of Object.entries(store)) {
    merged[key] = { ...(merged[key] ?? {}), ...boxes };
  }

  return JSON.stringify(merged, null, 2);
}

export function countCalibratedWords(page, surahNumber) {
  return Object.keys(getMergedCalibrations(page, surahNumber)).length;
}

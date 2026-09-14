const STORAGE_KEY = "learn_quran_memorization_mistakes_v1";
const UPDATE_EVENT = "memorization-mistakes-updated";

export function mistakeKey(surahNumber, ayah, wordNum) {
  return `${surahNumber}:${ayah}:${wordNum}`;
}

export function normalizeMistakeNote(note = "") {
  return String(note).trim().split(/\s+/).filter(Boolean)[0] ?? "";
}

function notifyUpdated() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(UPDATE_EVENT));
}

export function loadMemorizationMistakes() {
  if (typeof window === "undefined") return [];

  try {
    const parsed = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveMemorizationMistakes(entries) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  notifyUpdated();
}

export function getMistakesForSurah(surahNumber) {
  return loadMemorizationMistakes().filter(
    (entry) => entry.surahNumber === surahNumber,
  );
}

export function getMistakesForPage(surahNumber, mushafPage) {
  return loadMemorizationMistakes().filter(
    (entry) =>
      entry.surahNumber === surahNumber && entry.mushafPage === mushafPage,
  );
}

export function buildMistakeMap(entries = loadMemorizationMistakes()) {
  return new Map(entries.map((entry) => [entry.key, entry]));
}

export function upsertMemorizationMistake({
  surahNumber,
  mushafPage,
  ayah,
  wordNum,
  wordAr,
  note = "",
}) {
  const key = mistakeKey(surahNumber, ayah, wordNum);
  const entries = loadMemorizationMistakes();
  const existingIndex = entries.findIndex((entry) => entry.key === key);
  const nextEntry = {
    key,
    surahNumber,
    mushafPage,
    ayah,
    wordNum,
    wordAr,
    note: normalizeMistakeNote(note),
    markedAt: new Date().toISOString(),
  };

  if (existingIndex >= 0) {
    entries[existingIndex] = { ...entries[existingIndex], ...nextEntry };
  } else {
    entries.push(nextEntry);
  }

  saveMemorizationMistakes(entries);
  return nextEntry;
}

export function removeMemorizationMistake(key) {
  const entries = loadMemorizationMistakes().filter((entry) => entry.key !== key);
  saveMemorizationMistakes(entries);
}

export function subscribeMemorizationMistakes(listener) {
  if (typeof window === "undefined") return () => {};

  const onStorage = (event) => {
    if (event.key === STORAGE_KEY) listener();
  };

  window.addEventListener(UPDATE_EVENT, listener);
  window.addEventListener("storage", onStorage);

  return () => {
    window.removeEventListener(UPDATE_EVENT, listener);
    window.removeEventListener("storage", onStorage);
  };
}

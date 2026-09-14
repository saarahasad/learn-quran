const STORAGE_KEY = "learn_quran_recording_history_v1";
const MAX_ENTRIES = 250;
export const RECORDING_MILESTONES = [5, 10, 25, 50, 100, 250, 500];

export const RECORDING_SOURCE_LABELS = {
  "surah-recite": "Recite practice",
  "hifdh-test": "Hifdh test",
  "hifdh-audio-test": "Audio test",
  "hifdh-scaffold": "Scaffold round",
};

function todayString() {
  return new Date().toISOString().slice(0, 10);
}

function parseDate(dateStr) {
  const [y, m, d] = String(dateStr).split("-").map(Number);
  return new Date(y, m - 1, d);
}

function daysBetween(earlier, later) {
  const ms = parseDate(later).getTime() - parseDate(earlier).getTime();
  return Math.round(ms / (1000 * 60 * 60 * 24));
}

function startOfWeek(dateStr) {
  const date = parseDate(dateStr);
  const day = date.getDay();
  const mondayOffset = day === 0 ? -6 : 1 - day;
  date.setDate(date.getDate() + mondayOffset);
  return date.toISOString().slice(0, 10);
}

function notifyUpdated() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent("recording-history-updated"));
}

export function loadRecordingHistory() {
  if (typeof window === "undefined") return [];
  try {
    const parsed = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveRecordingHistory(entries) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  notifyUpdated();
}

export function formatRecordingLabel(entry) {
  if (entry.label) return entry.label;

  const source = RECORDING_SOURCE_LABELS[entry.source] || "Recording";
  const surah = entry.surahName ? ` · ${entry.surahName}` : "";
  const ayahs =
    entry.ayahNumbers?.length > 1
      ? ` · āyāt ${entry.ayahNumbers[0]}–${entry.ayahNumbers.at(-1)}`
      : entry.ayahNumbers?.length === 1
        ? ` · āyah ${entry.ayahNumbers[0]}`
        : "";

  return `${source}${surah}${ayahs}`;
}

export function appendRecordingHistory(meta) {
  const entry = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    recordedAt: new Date().toISOString(),
    date: todayString(),
    durationSec: Math.max(0, Number(meta.durationSec) || 0),
    source: meta.source || "surah-recite",
    surahNumber: meta.surahNumber ?? null,
    surahName: meta.surahName ?? null,
    ayahNumbers: Array.isArray(meta.ayahNumbers) ? meta.ayahNumbers : null,
    mushafPage: meta.mushafPage ?? null,
    label: meta.label ?? null,
    checked: false,
    passed: null,
    matchPercent: null,
  };

  const entries = [entry, ...loadRecordingHistory()].slice(0, MAX_ENTRIES);
  saveRecordingHistory(entries);
  return entry;
}

export function updateRecentRecordingCheck({
  surahNumber,
  ayahNumbers,
  passed,
  matchPercent,
}) {
  const entries = loadRecordingHistory();
  const now = Date.now();
  const ayahKey = Array.isArray(ayahNumbers) ? ayahNumbers.join("-") : "";

  const index = entries.findIndex((entry) => {
    if (entry.checked) return false;
    if (surahNumber != null && entry.surahNumber !== surahNumber) return false;
    if (ayahKey && entry.ayahNumbers?.join("-") !== ayahKey) return false;
    return now - new Date(entry.recordedAt).getTime() < 3 * 60 * 1000;
  });

  if (index < 0) return null;

  entries[index] = {
    ...entries[index],
    checked: true,
    passed: Boolean(passed),
    matchPercent: matchPercent ?? null,
  };
  saveRecordingHistory(entries);
  return entries[index];
}

export function computeRecordingStats(entries = []) {
  const today = todayString();
  const weekStart = startOfWeek(today);
  const monthPrefix = today.slice(0, 7);

  const total = entries.length;
  const todayCount = entries.filter((entry) => entry.date === today).length;
  const weekCount = entries.filter((entry) => entry.date >= weekStart).length;
  const monthCount = entries.filter((entry) => entry.date.startsWith(monthPrefix)).length;
  const totalMinutes = Math.round(
    entries.reduce((sum, entry) => sum + (entry.durationSec || 0), 0) / 60,
  );
  const checkedCount = entries.filter((entry) => entry.checked).length;
  const passedCount = entries.filter((entry) => entry.passed).length;

  const uniqueDays = [...new Set(entries.map((entry) => entry.date))].sort().reverse();
  let streakDays = 0;
  if (uniqueDays.length) {
    const gapFromToday = daysBetween(uniqueDays[0], today);
    if (gapFromToday <= 1) {
      streakDays = 1;
      for (let i = 0; i < uniqueDays.length - 1; i += 1) {
        if (daysBetween(uniqueDays[i + 1], uniqueDays[i]) === 1) {
          streakDays += 1;
        } else {
          break;
        }
      }
    }
  }

  const nextMilestone =
    RECORDING_MILESTONES.find((milestone) => total < milestone) ?? null;
  const lastMilestone =
    [...RECORDING_MILESTONES].reverse().find((milestone) => total >= milestone) ?? 0;

  return {
    total,
    todayCount,
    weekCount,
    monthCount,
    streakDays,
    totalMinutes,
    checkedCount,
    passedCount,
    nextMilestone,
    lastMilestone,
    remainingToNext: nextMilestone ? nextMilestone - total : 0,
    progressToNext: nextMilestone
      ? Math.min(100, Math.round((total / nextMilestone) * 100))
      : 100,
  };
}

import { useCallback, useEffect, useState } from "react";

export const DIARY_STORAGE_KEY = "quraan_diary_v1";

const emptyEntry = {
  memorised: "",
  lastRevised: "",
  scores: [],
};

function todayString(date = new Date()) {
  const localDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return localDate.toISOString().slice(0, 10);
}

function normaliseEntry(entry) {
  return {
    ...emptyEntry,
    ...(entry && typeof entry === "object" ? entry : {}),
    scores: Array.isArray(entry?.scores) ? entry.scores : [],
  };
}

function readDiary() {
  if (typeof window === "undefined") return {};

  try {
    const parsed = JSON.parse(window.localStorage.getItem(DIARY_STORAGE_KEY) || "{}");
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return {};

    return Object.fromEntries(
      Object.entries(parsed).map(([num, entry]) => [num, normaliseEntry(entry)]),
    );
  } catch {
    return {};
  }
}

function daysSince(dateString) {
  if (!dateString) return Number.POSITIVE_INFINITY;

  const date = new Date(`${dateString}T00:00:00`);
  if (Number.isNaN(date.getTime())) return Number.POSITIVE_INFINITY;

  const today = new Date(`${todayString()}T00:00:00`);
  return Math.floor((today - date) / 86400000);
}

function isEntryDue(entry) {
  if (!entry?.memorised) return false;

  const anchorDate = entry.lastRevised || entry.memorised;
  return daysSince(anchorDate) > 7;
}

function latestScore(entry) {
  const scores = Array.isArray(entry?.scores) ? entry.scores : [];
  return scores.length ? scores[scores.length - 1] : null;
}

export function useDiaryStore() {
  const [diary, setDiary] = useState(readDiary);

  useEffect(() => {
    window.localStorage.setItem(DIARY_STORAGE_KEY, JSON.stringify(diary));
  }, [diary]);

  const updateEntry = useCallback((num, updater) => {
    setDiary((current) => {
      const key = String(num);
      const entry = normaliseEntry(current[key]);

      return {
        ...current,
        [key]: normaliseEntry(updater(entry)),
      };
    });
  }, []);

  const setMemorised = useCallback(
    (num, date) => {
      updateEntry(num, (entry) => ({ ...entry, memorised: date }));
    },
    [updateEntry],
  );

  const setLastRevised = useCallback(
    (num, date) => {
      updateEntry(num, (entry) => ({ ...entry, lastRevised: date }));
    },
    [updateEntry],
  );

  const stampToday = useCallback(
    (num, field) => {
      if (field !== "memorised" && field !== "lastRevised") return;
      updateEntry(num, (entry) => ({ ...entry, [field]: todayString() }));
    },
    [updateEntry],
  );

  const addScore = useCallback(
    (num, scoreObj) => {
      updateEntry(num, (entry) => ({
        ...entry,
        scores: [...entry.scores, scoreObj],
      }));
    },
    [updateEntry],
  );

  const isDue = useCallback(
    (num) => isEntryDue(normaliseEntry(diary[String(num)])),
    [diary],
  );

  const getLatestScore = useCallback(
    (num) => latestScore(normaliseEntry(diary[String(num)])),
    [diary],
  );

  const getRecommended = useCallback(() => {
    return Object.entries(diary)
      .map(([num, entry]) => {
        const normalised = normaliseEntry(entry);
        const score = latestScore(normalised);

        return {
          num: Number(num),
          due: isEntryDue(normalised),
          recentOverall: Number.isFinite(score?.overall) ? score.overall : Number.POSITIVE_INFINITY,
          daysUnrevised: daysSince(normalised.lastRevised || normalised.memorised),
          memorised: Boolean(normalised.memorised),
        };
      })
      .filter((item) => item.memorised)
      .sort((a, b) => (
        Number(b.due) - Number(a.due)
        || a.recentOverall - b.recentOverall
        || b.daysUnrevised - a.daysUnrevised
        || a.num - b.num
      ))
      .slice(0, 3)
      .map((item) => item.num);
  }, [diary]);

  return {
    diary,
    setMemorised,
    setLastRevised,
    stampToday,
    isDue,
    addScore,
    getLatestScore,
    getRecommended,
  };
}

export { daysSince, todayString };

import { DIARY_SURAHS, getDiaryItemsForJuz } from "../data/diarySurahs.js";
import { getCourseDoneSet } from "../hooks/useCourseProgress.js";

export function isQuranCourseId(courseId) {
  return typeof courseId === "string" && courseId.startsWith("juz-");
}

export function getJuzNumberFromCourseId(courseId) {
  if (!isQuranCourseId(courseId)) return null;
  const juz = Number(courseId.slice(4));
  return Number.isFinite(juz) ? juz : null;
}

export function percentComplete(completed, total) {
  if (!total) return 0;
  return Math.round((completed / total) * 100);
}

export function summarizeLessonIds(lessonIds, isDone) {
  const total = lessonIds.length;
  const completed = lessonIds.filter((id) => isDone(id)).length;

  return {
    completed,
    total,
    pct: percentComplete(completed, total),
  };
}

function isTrackableItem(item) {
  return item?.trackable !== false;
}

export function summarizeUnitsProgress(units = []) {
  const trackableUnits = units
    .map((unit) => {
      const items = (unit.items ?? []).filter(isTrackableItem);
      const completed = items.filter((item) => item.done).length;
      return {
        id: unit.id,
        title: unit.title,
        completed,
        total: items.length,
        pct: percentComplete(completed, items.length),
      };
    })
    .filter((unit) => unit.total > 0);

  const completed = trackableUnits.reduce((sum, unit) => sum + unit.completed, 0);
  const total = trackableUnits.reduce((sum, unit) => sum + unit.total, 0);

  return {
    completed,
    total,
    pct: percentComplete(completed, total),
    units: trackableUnits,
  };
}

export function getGenericCourseProgress(courseId, lessonIds) {
  const done = getCourseDoneSet(courseId);
  return summarizeLessonIds(lessonIds, (id) => done.has(id));
}

export function getQuranJuzProgress(juz, diary, surahs = DIARY_SURAHS) {
  if (Number(juz) === 1) {
    const items = getDiaryItemsForJuz(1);
    const completed = items.filter((item) => diary[item.id]?.memorised).length;
    return {
      completed,
      total: items.length,
      pct: percentComplete(completed, items.length),
      label: "memorised",
    };
  }

  const juzSurahs = surahs.filter((surah) => surah.juz === Number(juz));
  const completed = juzSurahs.filter((surah) => diary[String(surah.revelationOrder)]?.memorised).length;

  return {
    completed,
    total: juzSurahs.length,
    pct: percentComplete(completed, juzSurahs.length),
    label: "memorised",
  };
}

export const LESSON_XP = 10;
export const UNIT_COMPLETE_BONUS = 25;

export function buildGamifiedUnits(units = [], { sequentialUnlock = true } = {}) {
  const flatTrackable = [];

  units.forEach((unit, unitIndex) => {
    (unit.items ?? []).forEach((item, itemIndex) => {
      if (item.trackable === false) return;
      flatTrackable.push({ unitIndex, itemIndex, item, unitId: unit.id });
    });
  });

  let foundCurrent = false;
  const stateMap = new Map();

  for (const entry of flatTrackable) {
    if (entry.item.done) {
      stateMap.set(entry.item.id, "done");
    } else if (!foundCurrent) {
      stateMap.set(entry.item.id, "current");
      foundCurrent = true;
    } else if (sequentialUnlock) {
      stateMap.set(entry.item.id, "locked");
    } else {
      stateMap.set(entry.item.id, "available");
    }
  }

  const enrichedUnits = units.map((unit) => {
    const trackable = (unit.items ?? []).filter(isTrackableItem);
    const completed = trackable.filter((item) => item.done).length;
    const total = trackable.length;
    const unitComplete = total > 0 && completed === total;

    return {
      ...unit,
      completed,
      total,
      pct: percentComplete(completed, total),
      unitComplete,
      xpEarned: completed * LESSON_XP + (unitComplete ? UNIT_COMPLETE_BONUS : 0),
      xpAvailable: total * LESSON_XP + (total > 0 ? UNIT_COMPLETE_BONUS : 0),
      items: (unit.items ?? []).map((item) => ({
        ...item,
        state:
          item.trackable === false ? "tool" : (stateMap.get(item.id) ?? "available"),
        xp: LESSON_XP,
      })),
    };
  });

  const totalXpEarned = enrichedUnits.reduce((sum, unit) => sum + unit.xpEarned, 0);
  const totalXpAvailable = enrichedUnits.reduce((sum, unit) => sum + unit.xpAvailable, 0);

  return { units: enrichedUnits, totalXpEarned, totalXpAvailable };
}

export function getCourseProgressSummary(courseId, options = {}) {
  const { lessonIds = [], diary = {}, surahs = DIARY_SURAHS } = options;

  if (isQuranCourseId(courseId)) {
    const juz = getJuzNumberFromCourseId(courseId);
    if (juz == null) {
      return { completed: 0, total: 0, pct: 0, label: "memorised" };
    }
    return getQuranJuzProgress(juz, diary, surahs);
  }

  return {
    ...getGenericCourseProgress(courseId, lessonIds),
    label: "complete",
  };
}

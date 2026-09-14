import { useCallback, useEffect, useState } from "react";

export const PROGRESS_STORAGE_KEY = "course_progress_v1";

const LEGACY_DONE_KEYS = {
  ajrumiyyah: "ajr_done_v2",
};

function readStore() {
  if (typeof window === "undefined") return {};

  try {
    const parsed = JSON.parse(window.localStorage.getItem(PROGRESS_STORAGE_KEY) || "{}");
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return {};
    return parsed;
  } catch {
    return {};
  }
}

function readLegacyDone(courseId) {
  const legacyKey = LEGACY_DONE_KEYS[courseId];
  if (!legacyKey || typeof window === "undefined") return null;

  try {
    const parsed = JSON.parse(window.localStorage.getItem(legacyKey) || "[]");
    return Array.isArray(parsed) ? parsed.filter((id) => typeof id === "string") : null;
  } catch {
    return null;
  }
}

function writeStore(store) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(store));
}

function notifyUpdated(courseId) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent("course-progress-updated", { detail: { courseId } }));
}

function normalizeCourseIds(ids) {
  if (!Array.isArray(ids)) return [];
  return [...new Set(ids.filter((id) => typeof id === "string" && id.length > 0))];
}

function readCourseDone(courseId) {
  const store = readStore();
  const saved = normalizeCourseIds(store[courseId]);
  if (saved.length > 0) return saved;

  const legacy = readLegacyDone(courseId);
  if (legacy?.length) {
    writeStore({ ...store, [courseId]: legacy });
    return legacy;
  }

  return [];
}

export function getCourseDoneSet(courseId) {
  return new Set(readCourseDone(courseId));
}

export function isCourseLessonDone(courseId, lessonId) {
  return getCourseDoneSet(courseId).has(lessonId);
}

export function useCourseProgress(courseId) {
  const [doneIds, setDoneIds] = useState(() => readCourseDone(courseId));

  useEffect(() => {
    setDoneIds(readCourseDone(courseId));
  }, [courseId]);

  useEffect(() => {
    const store = readStore();
    writeStore({ ...store, [courseId]: doneIds });
    notifyUpdated(courseId);
  }, [courseId, doneIds]);

  useEffect(() => {
    const onUpdate = (event) => {
      if (event?.detail?.courseId && event.detail.courseId !== courseId) return;
      setDoneIds(readCourseDone(courseId));
    };
    window.addEventListener("course-progress-updated", onUpdate);
    window.addEventListener("storage", onUpdate);
    return () => {
      window.removeEventListener("course-progress-updated", onUpdate);
      window.removeEventListener("storage", onUpdate);
    };
  }, [courseId]);

  const done = useCallback(() => new Set(doneIds), [doneIds]);

  const isDone = useCallback((lessonId) => doneIds.includes(lessonId), [doneIds]);

  const toggle = useCallback((lessonId) => {
    setDoneIds((current) => {
      if (current.includes(lessonId)) {
        return current.filter((id) => id !== lessonId);
      }
      return [...current, lessonId];
    });
  }, []);

  const markDone = useCallback((lessonId) => {
    setDoneIds((current) => (current.includes(lessonId) ? current : [...current, lessonId]));
  }, []);

  const markUndone = useCallback((lessonId) => {
    setDoneIds((current) => current.filter((id) => id !== lessonId));
  }, []);

  return {
    doneIds,
    done,
    isDone,
    toggle,
    markDone,
    markUndone,
  };
}

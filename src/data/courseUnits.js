/** Learn Qur'an course metadata (one programme within Learn Islam). */
export const LEARN_QURAN = {
  name: "Learn Qur'an",
  nameAr: "تعلّم القرآن",
  tagline:
    "Memorise and revise the Qur'an one juz at a time — with scene-based study, active recall, and progress tracking.",
  studyModes: 4,
};

/**
 * Juz catalogue — set `available: true` and add surah data when a juz is ready.
 * Surahs are matched by their `juz` field.
 */
export const JUZ_COURSES = [
  {
    juz: 1,
    title: "Juz 1",
    shortTitle: "Juz 1",
    range: "Al-Fātiḥah — Al-Baqarah 141",
    description: "The opening of the Qur'an through the first part of Al-Baqarah.",
    available: true,
  },
  {
    juz: 2,
    title: "Juz 2",
    shortTitle: "Juz 2",
    range: "Al-Baqarah 142 — Al-Baqarah 252",
    description: "Continuing Al-Baqarah — laws, faith, and the story of Banū Isrāʾīl.",
    available: false,
  },
  {
    juz: 3,
    title: "Juz 3",
    shortTitle: "Juz 3",
    range: "Al-Baqarah 253 — Āl ʿImrān 92",
    description: "The close of Al-Baqarah and the opening of Āl ʿImrān.",
    available: false,
  },
  {
    juz: 30,
    title: "Juz 30 — Short Surahs",
    shortTitle: "Juz 30 Short Surahs",
    range: "An-Naba — An-Nās",
    description:
      "Each lesson covers one surah with scene-based revision, active recall quizzes, recitation practice, and optional iʿrāb grammar study.",
    available: true,
  },
];

/** @deprecated Use LEARN_QURAN — kept for gradual migration */
export const COURSE = {
  code: "QURAN 301",
  name: LEARN_QURAN.name,
  fullName: "Qur'an Memorisation & Revision",
  tagline: LEARN_QURAN.tagline,
  institution: "Islamic Studies · Open Course",
  studyModes: LEARN_QURAN.studyModes,
};

export function juzCoursePath(juz) {
  return `/juz/${juz}`;
}

export function juzStudyPath(juz, params = {}) {
  const search = new URLSearchParams();
  if (params.surah) search.set("surah", params.surah);
  if (params.view && params.view !== "revise") search.set("view", params.view);
  if (params.scene) search.set("scene", String(params.scene));
  const query = search.toString();
  return `/juz/${juz}/study${query ? `?${query}` : ""}`;
}

export function getJuzCourse(juz) {
  return JUZ_COURSES.find((course) => course.juz === Number(juz));
}

export function getAvailableJuzCourses() {
  return JUZ_COURSES.filter((course) => course.available);
}

export function juzCourseToUnit(course, number) {
  return {
    id: `juz-${course.juz}`,
    number,
    juz: course.juz,
    title: course.title,
    shortTitle: course.shortTitle,
    sidebarTitle: `Juz ${course.juz} — ${course.shortTitle}`,
    description: course.description,
    available: course.available,
  };
}

/** Content units derived from available juz courses (in juz order). */
export function getAvailableUnits() {
  return getAvailableJuzCourses().map((course, index) => juzCourseToUnit(course, index + 1));
}

/** @deprecated Use getAvailableUnits */
export const CONTENT_UNITS = getAvailableUnits();

export function groupSurahsByUnit(surahs, units = getAvailableUnits()) {
  return units.map((unit) => ({
    unit,
    surahs: surahs.filter((s) => s.juz === unit.juz),
  }));
}

export function countLessons(surahs, units = getAvailableUnits()) {
  return groupSurahsByUnit(surahs, units).reduce((n, group) => n + group.surahs.length, 0);
}

export function learnQuranBanner() {
  const available = getAvailableJuzCourses();

  return {
    code: "Open course · Self-paced",
    title: LEARN_QURAN.name,
    subtitle: LEARN_QURAN.tagline,
    meta: [
      { label: "Juz available", value: available.length },
      { label: "Study modes", value: String(LEARN_QURAN.studyModes) },
      { label: "Pace", value: "Self-paced" },
    ],
  };
}

export function juzBanner(juzCourse, surahs) {
  return {
    code: `QURAN 301 · Juz ${juzCourse.juz}`,
    title: juzCourse.title,
    subtitle: juzCourse.description,
    meta: [
      { label: "Lessons", value: surahs.length },
      { label: "Study modes", value: String(LEARN_QURAN.studyModes) },
      { label: "Range", value: juzCourse.range },
    ],
  };
}

export function courseBanner(surahs) {
  const units = getAvailableUnits();
  const lessonCount = countLessons(surahs, units);

  return {
    code: `${COURSE.code} · ${units.length} ${units.length === 1 ? "juz" : "juz sections"}`,
    title: COURSE.name,
    subtitle: "Select a lesson from the course outline, or browse the full surah library below.",
    meta: [
      { label: "Lessons", value: lessonCount },
      { label: "Study modes", value: String(COURSE.studyModes) },
      { label: "Juz", value: String(units.length) },
    ],
  };
}

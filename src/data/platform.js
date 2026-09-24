import { DIARY_SURAHS, getDiaryItemsForJuz } from "./diarySurahs.js";
import { JUZ_COURSES, juzCoursePath } from "./courseUnits.js";
import { AQEEDAH2_META } from "./aqeedah2Course.js";
import { FIQH_META } from "./fiqhCourse.js";
import { TARBIYAH2_META } from "./tarbiyah2Course.js";
import { TAFSIR2_META } from "./tafsir2Course.js";
import { HADITH2_META } from "./hadith2Course.js";

/** Top-level Learn Islam platform metadata. */
export const LEARN_ISLAM = {
  name: "Learn Islam",
  nameAr: "تعلّم الإسلام",
  tagline:
    "Structured, self-paced courses on the Qur'an, prayer, du'a, and more — open access for every learner.",
  institution: "Islamic Studies · Open Courses",
};

/** Word-level recitation check via Whisper (requires OPENAI_API_KEY in dev). */
export const SHOW_SPEECH_CHECK = true;

/** Non-Qur'an courses (each juz is its own course on the landing page). */
export const COURSE_CATALOG = [
  {
    id: "tarbiyah",
    name: "Tarbiyah Islamiyah — Rights",
    nameAr: "التربية الإسلامية — الحقوق",
    tagline: "Islamic education on the rights of Allah, the Prophet, family, and society.",
    description:
      "Complete study guide covering 24 lectures — from the rights of Allah to the rights of rulers, with notes, flashcards, and quizzes.",
    available: true,
    path: "/tarbiyah",
    category: "Islamic Education",
    meta: "9 chapters · Notes, flashcards & quiz",
    accent: "green",
    topics: ["Rights of Allah", "Rights of the Prophet", "Family & society", "Active recall"],
  },
  {
    id: TARBIYAH2_META.id,
    name: TARBIYAH2_META.name,
    nameAr: TARBIYAH2_META.nameAr,
    tagline: TARBIYAH2_META.tagline,
    description: TARBIYAH2_META.description,
    available: true,
    path: TARBIYAH2_META.path,
    category: TARBIYAH2_META.category,
    meta: TARBIYAH2_META.meta,
    accent: TARBIYAH2_META.accent,
    topics: TARBIYAH2_META.topics,
  },
  {
    id: FIQH_META.id,
    name: FIQH_META.name,
    nameAr: FIQH_META.nameAr,
    tagline: FIQH_META.tagline,
    description: FIQH_META.description,
    available: true,
    path: FIQH_META.path,
    category: FIQH_META.category,
    meta: FIQH_META.meta,
    accent: FIQH_META.accent,
    topics: FIQH_META.topics,
  },
  {
    id: TAFSIR2_META.id,
    name: TAFSIR2_META.name,
    nameAr: TAFSIR2_META.nameAr,
    tagline: TAFSIR2_META.tagline,
    description: TAFSIR2_META.description,
    available: true,
    path: TAFSIR2_META.path,
    category: TAFSIR2_META.category,
    meta: TAFSIR2_META.meta,
    accent: TAFSIR2_META.accent,
    topics: TAFSIR2_META.topics,
  },
  {
    id: HADITH2_META.id,
    name: HADITH2_META.name,
    nameAr: HADITH2_META.nameAr,
    tagline: HADITH2_META.tagline,
    description: HADITH2_META.description,
    available: true,
    path: HADITH2_META.path,
    category: HADITH2_META.category,
    meta: HADITH2_META.meta,
    accent: HADITH2_META.accent,
    topics: HADITH2_META.topics,
  },
  {
    id: AQEEDAH2_META.id,
    name: AQEEDAH2_META.name,
    nameAr: AQEEDAH2_META.nameAr,
    tagline: AQEEDAH2_META.tagline,
    description: AQEEDAH2_META.description,
    available: true,
    path: AQEEDAH2_META.path,
    category: AQEEDAH2_META.category,
    meta: AQEEDAH2_META.meta,
    accent: AQEEDAH2_META.accent,
    topics: AQEEDAH2_META.topics,
  },
  {
    id: "ajrumiyyah",
    name: "Al-Ājurrūmiyyah",
    nameAr: "الْمُقَدِّمَةُ الْآجُرُّومِيَّةُ",
    tagline: "Classical Arabic grammar — line by line with audio and commentary.",
    description:
      "Study Ibn Ājurrūm's foundational grammar text with the original matn, English translation, line-by-line audio recitation, and detailed commentary with Qurʾanic examples.",
    available: true,
    path: "/ajrumiyyah",
    category: "Arabic Grammar",
    meta: "26 chapters · Line-by-line audio",
    topics: ["Types of speech", "Iʿrāb & signs", "Nominals & accusatives", "Qurʾanic examples"],
  },
];

/** Stable theme per live course — colour and catalogue number. */
export const COURSE_THEME_BY_ID = {
  "juz-1": { number: 1, color: "#FF6B4A" },
  "juz-30": { number: 2, color: "#3ECFBC" },
  tarbiyah: { number: 3, color: "#6BCB77" },
  fiqh: { number: 4, color: "#9B72F2" },
  ajrumiyyah: { number: 5, color: "#6366F1" },
  "aqeedah-2": { number: 6, color: "#B45309" },
  "tarbiyah-2": { number: 7, color: "#0F766E" },
  "tafsir-2": { number: 8, color: "#0891B2" },
  "hadith-2": { number: 9, color: "#0369A1" },
};

/** @deprecated Use COURSE_THEME_BY_ID[courseId].color */
export const COURSE_MARK_COLORS = Object.values(COURSE_THEME_BY_ID).map((theme) => theme.color);

export function getCourseTheme(courseId) {
  return (
    COURSE_THEME_BY_ID[courseId] ?? {
      number: 0,
      color: COURSE_MARK_COLORS[0] ?? "#FF6B4A",
    }
  );
}

export function getCourse(id) {
  return COURSE_CATALOG.find((course) => course.id === id);
}

/** All courses shown on the landing page — juz courses plus topic courses. */
export function getLandingCourses() {
  const juzCourses = JUZ_COURSES.map((juz) => {
    const itemCount = juz.juz === 1
      ? getDiaryItemsForJuz(1).length
      : DIARY_SURAHS.filter((s) => s.juz === juz.juz).length;
    const available = juz.available && itemCount > 0;
    const metaLabel = juz.juz === 1 ? `${itemCount} pages` : `${itemCount} surahs`;

    return {
      id: `juz-${juz.juz}`,
      kind: "juz",
      category: "Qur'an",
      name: juz.title,
      nameAr: null,
      description: juz.description,
      range: juz.range,
      available,
      path: juzCoursePath(juz.juz),
      meta: available ? `${metaLabel} · 4 study modes` : null,
    };
  });

  const topicCourses = COURSE_CATALOG.map((course) => ({
    id: course.id,
    kind: "topic",
    category: course.category,
    name: course.name,
    nameAr: course.nameAr,
    tagline: course.tagline,
    description: course.description,
    available: course.available,
    path: course.path,
    meta: course.meta,
    accent: course.accent,
    topics: course.topics,
  }));

  return [...juzCourses, ...topicCourses];
}

export function getAvailableLandingCourses() {
  return getLandingCourses()
    .filter((course) => course.available)
    .map((course) => {
      const theme = getCourseTheme(course.id);
      return {
        ...course,
        number: theme.number,
        markColor: theme.color,
        color: theme.color,
      };
    });
}

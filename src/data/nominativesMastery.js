import { AJRUMIYYAH_CHAPTERS, ajrumiyyahCoursePath } from "./ajrumiyyahCourse.js";

/** Chapters 5–9: Nominatives trial (matn + commentary/explanation mastery). */
export const NOMINATIVES_CHAPTER_IDS = [
  "marfuat",
  "fail",
  "naib-fail",
  "mubtada-khabar",
  "awamil-mubtada",
];

export const NOMINATIVES_GROUP_TITLE = "Nominatives";
export const MASTERY_NEEDED = 3;
export const NOMINATIVES_MASTERY_STORAGE_KEY = "ajr-nominatives-mastery-v1";

/** After a miss, resurface after this many other questions. */
export const MISS_INTERVAL = 1;
/** After the 1st / 2nd correct attempt, delay (in questions) before showing again. */
export const CORRECT_INTERVALS = [3, 8];

export const NOMINATIVES_TOPICS = {
  marfuat: [
    {
      id: "adad-marfuat",
      lineIdx: 0,
      ar: "عَدَدُ الْمَرْفُوعَاتِ",
      en: "The seven nominatives",
    },
  ],
  fail: [
    { id: "bab-fail", lineIdx: 0, ar: "بَابُ الْفَاعِلِ", en: "The subject" },
    {
      id: "aqsam-fail",
      lineIdx: 1,
      ar: "أَقْسَامُ الْفَاعِلِ",
      en: "Categories of the subject",
    },
    {
      id: "fail-mudmar",
      lineIdx: 3,
      ar: "أَنْوَاعُ الْفَاعِلِ الْمُضْمَر",
      en: "Types of the implicit subject",
    },
  ],
  "naib-fail": [
    {
      id: "naib-fail",
      lineIdx: 0,
      ar: "النَّائِبُ عَنِ الْفَاعِلِ",
      en: "The deputy of the subject",
    },
    {
      id: "taghyir-fil",
      lineIdx: 1,
      ar: "تَغْيِيرُ الْفِعْلِ",
      en: "Altering the verb (passive)",
    },
    {
      id: "aqsam-naib",
      lineIdx: 3,
      ar: "أَقْسَامُ نَائِبِ الْفَاعِلِ",
      en: "Categories of the deputy",
    },
  ],
  "mubtada-khabar": [
    {
      id: "mubtada-khabar",
      lineIdx: 0,
      ar: "الْمُبْتَدَأُ وَالْخَبَرُ",
      en: "Topic and predicate",
    },
    {
      id: "mubtada-aqsam",
      lineIdx: 3,
      ar: "أَقْسَامُ الْمُبْتَدَإِ",
      en: "Apparent and implicit topic",
    },
    {
      id: "aqsam-khabar",
      lineIdx: 7,
      ar: "أَقْسَامُ الْخَبَرِ",
      en: "Categories of the predicate",
    },
  ],
  "awamil-mubtada": [
    {
      id: "nawasikh",
      lineIdx: 0,
      ar: "نَوَاسِخُ الْمُبْتَدَإِ",
      en: "The three abrogators",
    },
    {
      id: "kana",
      lineIdx: 1,
      ar: "كَانَ وَأَخَوَاتُهَا",
      en: "Kāna and its sisters",
    },
    {
      id: "inna",
      lineIdx: 5,
      ar: "إِنَّ وَأَخَوَاتُهَا",
      en: "Inna and its sisters",
    },
    {
      id: "zanna",
      lineIdx: 9,
      ar: "ظَنَّ وَأَخَوَاتُهَا",
      en: "Ẓanna and its sisters",
    },
  ],
};

export function isNominativesChapter(chapterId) {
  return NOMINATIVES_CHAPTER_IDS.includes(chapterId);
}

export function nominativesChapters() {
  return NOMINATIVES_CHAPTER_IDS.map((id) =>
    AJRUMIYYAH_CHAPTERS.find((chapter) => chapter.id === id),
  ).filter(Boolean);
}

export function ajrumiyyahNominativesQuizPath(chapterId, track) {
  const base = `${ajrumiyyahCoursePath()}/nominatives-quiz`;
  const params = new URLSearchParams();
  if (chapterId && chapterId !== "all") params.set("chapter", chapterId);
  if (chapterId === "all") params.set("chapter", "all");
  if (track === "matn" || track === "rule") params.set("track", track);
  const qs = params.toString();
  return qs ? `${base}?${qs}` : base;
}

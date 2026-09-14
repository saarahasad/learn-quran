/** Fiqh Level 1 course metadata and lesson outline. */
export const FIQH_META = {
  id: "fiqh",
  name: "Fiqh Level 1",
  nameAr: "الفقه",
  tagline: "Islamic jurisprudence — purification, prayer, and interactive practice.",
  description:
    "Semester 1 study guide covering the Book of Purification (Ṭahārah): taharah, wudu, ghusl, tayammum, prayer times and conditions, with flashcards, quizzes, and matching exercises.",
  path: "/fiqh",
  category: "Fiqh",
  meta: "6 units · 22 lessons · Practice tools",
  accent: "purple",
  topics: ["Ṭahārah & najasah", "Wudu & ghusl", "Prayer & adhan", "Flashcards & quizzes"],
  units: 6,
  lessons: 22,
};

export const FIQH_UNITS = [
  {
    id: "overview",
    title: "Overview",
    lessons: [{ id: "home", title: "Course home", icon: "🏠", kind: "intro" }],
  },
  {
    id: "unit-1",
    title: "Unit 1 — Taharah",
    lessons: [
      { id: "purification", title: "Purification (Taharah)", icon: "💧" },
      { id: "water", title: "Water Categories", icon: "🌊" },
      { id: "vessels", title: "Vessels (Awāni)", icon: "🪣" },
      { id: "istinja", title: "Istinjāʾ & Sunan al-Fitrah", icon: "🌿" },
    ],
  },
  {
    id: "unit-2",
    title: "Unit 2 — Wudu & Purification",
    lessons: [
      { id: "istinja2", title: "Relieving Oneself (Istinjāʾ)", icon: "🚽" },
      { id: "sunan", title: "Sunan al-Fiṭrah", icon: "✨" },
      { id: "wudu", title: "Wudu — Conditions & Obligatory Acts", icon: "🤲" },
      { id: "wudusunnah", title: "Sunnahs & Nullifiers of Wudu", icon: "⭐" },
      { id: "khuffs", title: "Wiping over Khuffs & Socks", icon: "🧦" },
      { id: "ghusl", title: "Ghusl — Ritual Bath", icon: "🚿" },
      { id: "tayammum", title: "Tayammum — Dry Purification", icon: "🤚" },
    ],
  },
  {
    id: "unit-3",
    title: "Unit 3 — Impurities, Menses & Nifas",
    lessons: [
      { id: "najasah", title: "Removing Physical Impurities (Najasah)", icon: "⚠️" },
      { id: "mensesnifas", title: "Menses (Hayd) & Nifas", icon: "🩸" },
    ],
  },
  {
    id: "unit-4",
    title: "Unit 4 — Prayer, Adhan & Iqamah",
    lessons: [
      { id: "prayer", title: "Prayer — Importance & Rulings", icon: "🕌" },
      { id: "adhaniqamah", title: "Adhan & Iqamah", icon: "📢" },
    ],
  },
  {
    id: "unit-5",
    title: "Unit 5 — Prayer: Times, Conditions & Parts",
    lessons: [
      { id: "prayertimes", title: "Times of Prayer", icon: "🕐" },
      { id: "prayerconditions", title: "Conditions of Prayer (9)", icon: "✅" },
      { id: "essentialparts", title: "Essential Parts (12)", icon: "🔑" },
      { id: "obligatoryparts", title: "Obligatory Parts (5)", icon: "📋" },
      { id: "sunnahsprayer", title: "Sunnahs of Prayer (18)", icon: "⭐" },
    ],
  },
  {
    id: "unit-6",
    title: "Unit 6 — Description, Makruh & Invalidators",
    lessons: [
      { id: "descriptionprayer", title: "Description of Prayer", icon: "📝" },
      { id: "makruhprayer", title: "Actions Disliked (Makruh) in Prayer", icon: "⚠️" },
      { id: "invalidatorsprayer", title: "Things That Invalidate Prayer (11)", icon: "❌" },
    ],
  },
  {
    id: "practice",
    title: "Practice",
    lessons: [
      { id: "flashcards", title: "Flashcards", icon: "🃏", kind: "tool", badge: "42" },
      { id: "quiz", title: "MCQ Quiz", icon: "✅", kind: "tool", badge: "20" },
      { id: "rearrange", title: "Rearrange Steps", icon: "🔀", kind: "tool" },
      { id: "match", title: "Match the Following", icon: "🔗", kind: "tool" },
    ],
  },
];

export const FIQH_LESSONS = FIQH_UNITS.flatMap((unit) =>
  unit.lessons.map((lesson) => ({ ...lesson, unitId: unit.id, unitTitle: unit.title })),
);

export function getFiqhLesson(id) {
  return FIQH_LESSONS.find((lesson) => lesson.id === id);
}

export function fiqhStudyPath(lessonId) {
  const base = `${FIQH_META.path}/study`;
  return lessonId ? `${base}?lesson=${encodeURIComponent(lessonId)}` : base;
}

export function fiqhBanner() {
  return {
    code: "Open course · Self-paced",
    title: FIQH_META.name,
    subtitle: FIQH_META.tagline,
    meta: [
      { label: "Units", value: String(FIQH_META.units) },
      { label: "Lessons", value: String(FIQH_META.lessons) },
      { label: "Practice", value: "Flashcards · Quiz" },
    ],
  };
}

export function fiqhEmbedSrc(pageId, baseUrl = import.meta.env.BASE_URL) {
  const params = new URLSearchParams({ embed: "1", page: pageId });
  return `${baseUrl}fiqh/index.html?${params}`;
}

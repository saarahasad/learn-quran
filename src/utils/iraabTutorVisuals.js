/**
 * Compact visual charts for the iʿrāb tutor — one idea per diagram.
 */

import { stripArabicMarks } from "./iraabDaas.js";

function bare(text) {
  return stripArabicMarks(text).replace(/\s+/g, " ").trim();
}

export const FOUR_STATES = [
  {
    id: "raf",
    ar: "رَفْعٌ",
    en: "nominative",
    ling: "highness",
    sign: "ضَمَّة",
    who: "noun + verb",
    tone: "raf",
  },
  {
    id: "nasb",
    ar: "نَصْبٌ",
    en: "accusative",
    ling: "uprightness",
    sign: "فَتْحَة",
    who: "noun + verb",
    tone: "nasb",
  },
  {
    id: "khafd",
    ar: "خَفْضٌ",
    en: "genitive",
    ling: "lowering",
    sign: "كَسْرَة",
    who: "noun only",
    tone: "khafd",
  },
  {
    id: "jazm",
    ar: "جَزْمٌ",
    en: "jussive",
    ling: "cutting",
    sign: "سُكُون",
    who: "muḍāriʿ only",
    tone: "jazm",
  },
];

export const THREE_KINDS = [
  { id: "ism", ar: "اسْمٌ", en: "noun", tone: "role" },
  { id: "fiil", ar: "فِعْلٌ", en: "verb", tone: "fiil" },
  { id: "harf", ar: "حَرْفٌ", en: "particle", tone: "harf" },
];

export const THREE_TENSES = [
  { id: "maadi", ar: "مَاضٍ", en: "past · built", tone: "fiil" },
  { id: "mudari", ar: "مُضَارِعٌ", en: "present · declined", tone: "raf" },
  { id: "amr", ar: "أَمْرٌ", en: "imperative · built", tone: "jazm" },
];

export function detectCaseId(steps, analysis) {
  const hay = `${bare(analysis)} ${bare(steps?.steps?.find((s) => s.titleEn === "Case / local")?.valueAr || "")}`;
  if (/لا محل/.test(hay)) return "none";
  if (/محل جزم|مجزوم/.test(hay)) return "jazm";
  if (/محل جر|مجرور|مخفوض/.test(hay)) return "khafd";
  if (/محل نصب|منصوب/.test(hay)) return "nasb";
  if (/محل رفع|مرفوع/.test(hay)) return "raf";
  if (/جزم/.test(hay)) return "jazm";
  if (/خفض|جر/.test(hay)) return "khafd";
  if (/نصب/.test(hay)) return "nasb";
  if (/رفع/.test(hay)) return "raf";
  return null;
}

export function detectRoleKey(steps) {
  const role = bare(steps?.steps?.find((s) => s.titleEn === "Role")?.valueAr || "");
  if (!role) return null;
  if (/نائب فاعل/.test(role)) return "naib";
  if (/فاعل/.test(role)) return "fail";
  if (/مبتدأ/.test(role)) return "mubtada";
  if (/خبر/.test(role)) return "khabar";
  if (/مضاف/.test(role)) return "mudaf";
  if (/جار|حرف جر/.test(role)) return "jarr";
  if (/مفعول به/.test(role)) return "mafool";
  if (/بدل/.test(role)) return "badal";
  if (/نعت/.test(role)) return "naat";
  return null;
}

export function detectTenseId(steps, analysis) {
  const hay = `${bare(analysis)} ${bare(steps?.steps?.find((s) => s.titleEn === "Tense")?.valueAr || "")}`;
  if (/ماض/.test(hay)) return "maadi";
  if (/مضارع/.test(hay)) return "mudari";
  if (/امر|أمر/.test(hay)) return "amr";
  return null;
}

/**
 * At most two diagrams besides the word-path, chosen from this word's iʿrāb.
 */
export function pickTutorVisuals(steps, analysis) {
  const caseId = detectCaseId(steps, analysis);
  const role = detectRoleKey(steps);
  const tense = detectTenseId(steps, analysis);
  const charts = [];

  if (role === "mubtada" || role === "khabar") charts.push("nominal-pair");
  else if (role === "fail" || role === "naib") charts.push("fail-gate");
  else if (role === "jarr" || role === "mudaf") charts.push("jarr-split");
  else if (steps?.kind === "harf" || caseId === "none") charts.push("three-kinds");
  else if (steps?.kind === "fiil" && tense) charts.push("tenses");

  if (caseId && caseId !== "none") charts.push("four-states");
  else if (!charts.includes("three-kinds") && steps?.kind) charts.push("three-kinds");

  const unique = [];
  for (const id of charts) {
    if (!unique.includes(id)) unique.push(id);
  }
  return {
    caseId,
    role,
    tense,
    kind: steps?.kind || null,
    charts: unique.slice(0, 2),
  };
}

export function firstSentence(text) {
  const t = String(text || "").replace(/\s+/g, " ").trim();
  if (!t) return "";
  const m = t.match(/^.+?(?:[.؟!]|$)(?:\s|$)/);
  return (m ? m[0] : t).trim();
}

export function twoSentences(text) {
  const t = String(text || "").replace(/\s+/g, " ").trim();
  if (!t) return "";
  const parts = t.split(/(?<=[.؟!])\s+/).filter(Boolean);
  return parts.slice(0, 2).join(" ");
}

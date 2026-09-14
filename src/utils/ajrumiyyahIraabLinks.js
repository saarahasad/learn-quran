/**
 * Map a Daas / student iʿrāb line onto Ājurrūmiyyah matn (the "poem").
 * Matching is deterministic so links stay accurate even without an LLM.
 */

import {
  AJRUMIYYAH_CHAPTERS,
  ajrumiyyahStudyPath,
} from "../data/ajrumiyyahCourse.js";
import { stripArabicMarks } from "./iraabDaas.js";

function bare(text) {
  return stripArabicMarks(text).replace(/\s+/g, " ").trim();
}

function chapterById(id) {
  return AJRUMIYYAH_CHAPTERS.find((c) => c.id === id) || null;
}

function findLineIndex(chapter, needles) {
  if (!chapter?.lines?.length) return 0;
  const list = Array.isArray(needles) ? needles : [needles];
  for (const needle of list) {
    const n = bare(needle);
    if (!n) continue;
    const idx = chapter.lines.findIndex(([ar, en]) => {
      const hay = `${bare(ar)} ${bare(en || "")}`;
      return hay.includes(n);
    });
    if (idx >= 0) return idx;
  }
  return 0;
}

function hit(chapterId, needles, reason) {
  const chapter = chapterById(chapterId);
  if (!chapter) return null;
  const lineIndex = findLineIndex(chapter, needles);
  const line = chapter.lines[lineIndex] || chapter.lines[0];
  if (!line) return null;
  return {
    chapterId: chapter.id,
    chapterNum: chapter.num,
    chapterAr: chapter.ar,
    chapterEn: chapter.translit || chapter.en,
    lineIndex,
    ar: line[0],
    en: line[1],
    reason,
    href: ajrumiyyahStudyPath(chapter.id, lineIndex),
  };
}

/**
 * Longer / more specific terms first. Each rule: { terms, chapterId, needles, reason }.
 */
const ROLE_RULES = [
  {
    terms: ["نائب فاعل", "المفعول الذي لم يسم"],
    chapterId: "naib-fail",
    needles: ["نائب الفاعل", "المفعول الذي لم يسم"],
    reason: "nāʾib al-fāʿil",
  },
  {
    terms: ["مفعول مطلق"],
    chapterId: "masdar",
    needles: ["المصدر"],
    reason: "mafʿūl muṭlaq / maṣdar",
  },
  {
    terms: ["مفعول لأجله", "مفعول لاجله", "مفعول من أجله"],
    chapterId: "mafool-ajli",
    needles: ["المفعول من أجله", "من أجله"],
    reason: "mafʿūl li-ajlihi",
  },
  {
    terms: ["مفعول معه"],
    chapterId: "mafool-maah",
    needles: ["المفعول معه"],
    reason: "mafʿūl maʿahu",
  },
  {
    terms: ["مفعول به"],
    chapterId: "mafool-bih",
    needles: ["المفعول به"],
    reason: "direct object",
  },
  {
    terms: ["مضاف إليه"],
    chapterId: "majrurat",
    needles: ["بالإضافة", "يضاف إليه"],
    reason: "muḍāf ilayhi",
  },
  {
    terms: ["جار ومجرور", "حرف جر"],
    chapterId: "majrurat",
    needles: ["المجرور بالحرف", "حروف الجر"],
    reason: "jarr particle + genitive noun",
  },
  {
    terms: ["اسم كان", "خبر كان"],
    chapterId: "awamil-mubtada",
    needles: ["كان وأخواتها", "كان وَأَخَوَاتُهَا"],
    reason: "kāna and its sisters",
  },
  {
    terms: ["اسم إن", "اسم ان", "خبر إن", "خبر ان"],
    chapterId: "awamil-mubtada",
    needles: ["إن وأخواتها", "إنَّ وَأَخَوَاتُهَا"],
    reason: "inna and its sisters",
  },
  {
    terms: ["ظننت", "خبر ظن"],
    chapterId: "awamil-mubtada",
    needles: ["ظننت", "ظَنَنْتُ"],
    reason: "ẓanna and its sisters",
  },
  {
    terms: ["نافية للجنس", "لا النافية", "اسم لا"],
    chapterId: "la-nafiya",
    needles: ["اعلم أن لا", "لا تنصيب"],
    reason: "lā of categorical negation",
  },
  {
    terms: ["فاعل"],
    chapterId: "fail",
    needles: ["الفاعل هو"],
    reason: "fāʿil (doer)",
  },
  {
    terms: ["مبتدأ"],
    chapterId: "mubtada-khabar",
    needles: ["المبتدأ هو"],
    reason: "mubtadaʾ (topic)",
  },
  {
    terms: ["خبر"],
    chapterId: "mubtada-khabar",
    needles: ["الخبر هو"],
    reason: "khabar (predicate)",
  },
  {
    terms: ["حال"],
    chapterId: "hal",
    needles: ["الحال"],
    reason: "ḥāl",
  },
  {
    terms: ["تمييز"],
    chapterId: "tamyiz",
    needles: ["التمييز"],
    reason: "tamyīz",
  },
  {
    terms: ["مستثنى"],
    chapterId: "istithna",
    needles: ["المستثنى"],
    reason: "exception",
  },
  {
    terms: ["منادى"],
    chapterId: "munada",
    needles: ["المنادى"],
    reason: "vocative",
  },
  {
    terms: ["نعت"],
    chapterId: "naat",
    needles: ["النعت"],
    reason: "naʿt (adjective)",
  },
  {
    terms: ["بدل"],
    chapterId: "badal",
    needles: ["البدل"],
    reason: "badal (substitute)",
  },
  {
    terms: ["توكيد", "تأكيد"],
    chapterId: "tawkid",
    needles: ["التوكيد"],
    reason: "tawkīd (emphasis)",
  },
  {
    terms: ["معطوف", "عطف", "عاطفة"],
    chapterId: "atf",
    needles: ["العطف"],
    reason: "ʿaṭf (conjunction)",
  },
  {
    terms: ["ظرف"],
    chapterId: "zarf",
    needles: ["ظرف"],
    reason: "ẓarf (adverb of time/place)",
  },
];

const VERB_RULES = [
  {
    terms: ["ناصبة", "ناصب", "حرف نصب", "حرف ناصب"],
    chapterId: "afal",
    needles: ["فالنواصب", "النواصب"],
    reason: "naṣb-particles of the muḍāriʿ",
  },
  {
    terms: ["جازمة", "جازم", "حرف جزم", "جزم ونفي"],
    chapterId: "afal",
    needles: ["والجوازم", "الجوازم"],
    reason: "jazm-particles of the muḍāriʿ",
  },
  {
    terms: ["شرطية"],
    chapterId: "afal",
    needles: ["وإن وما ومن"],
    reason: "conditional particles",
  },
  {
    terms: ["فعل ماض", "ماض"],
    chapterId: "afal",
    needles: ["فالماضي مفتوح"],
    reason: "past-tense verb",
  },
  {
    terms: ["فعل أمر", "فعل امر", "أمر"],
    chapterId: "afal",
    needles: ["والأمر مجزوم"],
    reason: "imperative verb",
  },
  {
    terms: ["مجزوم"],
    chapterId: "afal",
    needles: ["والمضارع مرفوع أبدا"],
    reason: "muḍāriʿ stays in rafʿ until a jāzim enters",
  },
  {
    terms: ["فعل مضارع", "مضارع"],
    chapterId: "afal",
    needles: ["والمضارع ما كان", "المضارع مرفوع"],
    reason: "present-tense verb",
  },
];

const SIGN_RULES = [
  {
    terms: ["لا محل"],
    chapterId: "kalam",
    needles: ["والحرف ما لا"],
    reason: "particles have no iʿrāb slot",
  },
  {
    terms: ["مبني"],
    chapterId: "irab",
    needles: ["الإعراب هو"],
    reason: "built words vs declined words",
  },
  {
    terms: ["حذف النون"],
    chapterId: "alamat-irab",
    needles: ["وأما حذف النون"],
    reason: "deletion of nūn",
  },
  {
    terms: ["ضمة"],
    chapterId: "alamat-irab",
    needles: ["فأما الضمة فتكون علامة للرفع"],
    reason: "ḍamma as a sign of rafʿ",
  },
  {
    terms: ["فتحة"],
    chapterId: "alamat-irab",
    needles: ["فأما الفتحة فتكون علامة للنصب"],
    reason: "fatḥa as a sign of naṣb",
  },
  {
    terms: ["كسرة"],
    chapterId: "alamat-irab",
    needles: ["فأما الكسرة فتكون علامة للخفض", "وللخفض ثلاث"],
    reason: "kasra as a sign of khafḍ",
  },
  {
    terms: ["سكون"],
    chapterId: "alamat-irab",
    needles: ["فأما السكون"],
    reason: "sukūn as a sign of jazm",
  },
  {
    terms: ["مرفوع", "رفع"],
    chapterId: "irab",
    needles: ["وأقسامه أربعة"],
    reason: "rafʿ is one of the four states",
  },
  {
    terms: ["منصوب", "نصب"],
    chapterId: "irab",
    needles: ["وأقسامه أربعة"],
    reason: "naṣb is one of the four states",
  },
  {
    terms: ["مجرور", "مخفوض", "خفض", "جر"],
    chapterId: "irab",
    needles: ["فللأسماء من ذلك"],
    reason: "khafḍ / jarr belongs to nouns",
  },
  {
    terms: ["مجزوم", "جزم"],
    chapterId: "irab",
    needles: ["وللأفعال من ذلك"],
    reason: "jazm belongs to verbs",
  },
];

const KIND_RULES = [
  {
    terms: ["حروف مقطعة", "لا محل له"],
    chapterId: "kalam",
    needles: ["وأقسامه ثلاثة"],
    reason: "disconnected letters / no grammatical slot",
  },
  {
    terms: ["حرف"],
    chapterId: "kalam",
    needles: ["والحرف ما لا"],
    reason: "particles are the third part of speech",
  },
  {
    terms: ["فعل"],
    chapterId: "kalam",
    needles: ["والفعل يعرف"],
    reason: "verbs are the second part of speech",
  },
  {
    terms: ["اسم"],
    chapterId: "kalam",
    needles: ["فالاسم يعرف"],
    reason: "nouns are the first part of speech",
  },
];

function containsTerm(hay, term) {
  const n = bare(term);
  if (!n) return false;
  // Short particles like لم / لن otherwise match inside لمبتدإ / جعلنا.
  if (n.length <= 3) {
    const re = new RegExp(`(?:^|[^\\u0600-\\u06FF])${n}(?:$|[^\\u0600-\\u06FF])`);
    return re.test(hay);
  }
  return hay.includes(n);
}

function firstMatchingRule(hay, rules) {
  for (const rule of rules) {
    if (rule.terms.some((t) => containsTerm(hay, t))) return rule;
  }
  return null;
}

function collectHits(hay, rules, usedChapters, limit) {
  const out = [];
  for (const rule of rules) {
    if (out.length >= limit) break;
    if (!rule.terms.some((t) => containsTerm(hay, t))) continue;
    if (usedChapters.has(rule.chapterId) && rule.chapterId !== "afal") continue;
    const item = hit(rule.chapterId, rule.needles, rule.reason);
    if (!item) continue;
    usedChapters.add(item.chapterId);
    out.push(item);
  }
  return out;
}

/**
 * @param {string} analysis Arabic iʿrāb line (Daas or student)
 * @returns {Array<{ chapterId: string, chapterNum: number, chapterAr: string, chapterEn: string, lineIndex: number, ar: string, en: string, reason: string, href: string }>}
 */
export function matchIraabToPoem(analysis) {
  const hay = bare(analysis);
  if (!hay) return [];

  const used = new Set();
  const hits = [];

  const role = firstMatchingRule(hay, ROLE_RULES);
  if (role) {
    const item = hit(role.chapterId, role.needles, role.reason);
    if (item) {
      used.add(item.chapterId);
      hits.push(item);
    }
  }

  hits.push(...collectHits(hay, VERB_RULES, used, 1));
  hits.push(...collectHits(hay, SIGN_RULES, used, 1));

  if (hits.length < 2) {
    hits.push(...collectHits(hay, KIND_RULES, used, 1));
  }

  // Always offer the three parts of speech when the line is just a ḥarf with no mahall
  if (
    (/لا محل/.test(hay) || containsTerm(hay, "حرف")) &&
    !hits.some((h) => h.chapterId === "kalam")
  ) {
    const kalam = hit("kalam", ["والحرف ما لا"], "particles have no iʿrāb slot");
    if (kalam) hits.push(kalam);
  }

  const seen = new Set();
  return hits.filter((h) => {
    const key = `${h.chapterId}:${h.lineIndex}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  }).slice(0, 3);
}

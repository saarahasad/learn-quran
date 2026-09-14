/**
 * Iʿrāb tutor: local plain-English explanation + optional Claude / Groq rewrite.
 */

import { buildIraabStudySteps, stripArabicMarks } from "./iraabDaas.js";
import { matchIraabToPoem } from "./ajrumiyyahIraabLinks.js";
import { gatherTutorKnowledge } from "./iraabTutorKnowledge.js";

const GLOSS = [
  ["متعلقان بمحذوف", "both attached to an omitted word"],
  ["متعلق بمحذوف", "attached to an omitted word"],
  ["لفظ الجلالة", "the Divine Name (Allāh)"],
  ["شبه الجملة", "a phrase (prepositional / adverbial)"],
  ["متعلقان", "both attached (the preposition + its noun hang off a verb or omitted word)"],
  ["متعلق", "attached (hangs off a verb or an omitted word)"],
  ["المحذوف", "the omitted / elided word"],
  ["محذوف", "omitted / elided"],
  ["ابتدائية", "inceptive — it starts a new sentence"],
  ["باللام", "by the lām (the preposition لِـ)"],
  ["بالباء", "by the bāʾ (the preposition بِـ)"],
  ["بالكاف", "by the kāf (the particle كَـ)"],
  ["مقدرة", "implied (not written on the letter)"],
  ["مقدر", "implied (not written on the letter)"],
  ["ظاهرة", "apparent (shown on the letter)"],
  ["ظاهر", "apparent (shown on the letter)"],
  ["نائب فاعل", "the deputy-doer (nāʾib al-fāʿil) — the subject of a passive verb"],
  ["مفعول مطلق", "the absolute object (mafʿūl muṭlaq) — a verbal noun confirming or describing the action"],
  ["مفعول لأجله", "the object of purpose (mafʿūl li-ajlihi)"],
  ["مفعول معه", "the object of accompaniment (mafʿūl maʿahu)"],
  ["مفعول به", "the direct object (mafʿūl bihi) — what the verb is done to"],
  ["مضاف إليه", "the second noun in an iḍāfa (muḍāf ilayhi), always genitive"],
  ["جار ومجرور", "a preposition plus its genitive noun"],
  ["حرف جر", "a genitive particle (preposition)"],
  ["اسم كان", "the subject-noun of kāna (stays nominative)"],
  ["خبر كان", "the predicate of kāna (goes accusative)"],
  ["اسم إن", "the subject-noun of inna (goes accusative)"],
  ["خبر إن", "the predicate of inna (stays nominative)"],
  ["فعل مضارع", "a present/future verb (muḍāriʿ)"],
  ["فعل ماض", "a past-tense verb (māḍī)"],
  ["فعل أمر", "an imperative verb (amr)"],
  ["في محل رفع", "in the local nominative — the word itself is built, but it sits in a rafʿ slot"],
  ["في محل نصب", "in the local accusative"],
  ["في محل جر", "in the local genitive"],
  ["في محل جزم", "in the local jussive"],
  ["لا محل له", "no grammatical slot of its own (lā maḥalla lahu min al-iʿrāb)"],
  ["استئنافية", "resumptive — it starts a new sentence, and has no case"],
  ["عاطفة", "a coordinating particle"],
  ["ناصبة", "a particle that puts the muḍāriʿ into naṣb"],
  ["جازمة", "a particle that puts the muḍāriʿ into jazm"],
  ["شرطية", "a conditional particle"],
  ["نافية للجنس", "categorical negation of the genus — works like inna"],
  ["اسم لا", "the noun of lā"],
  ["مبني على الفتح", "built on fatḥa"],
  ["نافية", "a particle of negation"],
  ["فاعل", "the doer of the verb (fāʿil)"],
  ["مبتدأ", "the topic of a nominal sentence (mubtadaʾ)"],
  ["خبر", "the comment / predicate (khabar)"],
  ["حال", "a circumstantial accusative (ḥāl) — the state of the doer or object"],
  ["تمييز", "a specifying accusative (tamyīz)"],
  ["مستثنى", "the excepted noun"],
  ["منادى", "the vocative (the one being called)"],
  ["نعت", "an adjective that follows its noun in case"],
  ["بدل", "a substitute (badal) that follows the first noun in case"],
  ["توكيد", "an emphasiser that follows its noun in case"],
  ["معطوف", "a noun joined by a coordinating particle"],
  ["مرفوع", "nominative (rafʿ)"],
  ["منصوب", "accusative (naṣb)"],
  ["مجرور", "genitive (jarr / khafḍ)"],
  ["مخفوض", "genitive (khafḍ)"],
  ["مجزوم", "jussive (jazm)"],
  ["مبني", "built / indeclinable — its ending does not change"],
  ["معرب", "declined — its ending changes with the operator"],
  ["ضمير", "a pronoun"],
  ["حرف", "a particle (ḥarf)"],
  ["اسم", "a noun (ism)"],
  ["فعل", "a verb (fiʿl)"],
  ["ضمة", "the ḍamma (ـُ), original sign of rafʿ"],
  ["فتحة", "the fatḥa (ـَ), original sign of naṣb"],
  ["كسرة", "the kasra (ـِ), original sign of khafḍ"],
  ["سكون", "the sukūn (ـْ), original sign of jazm"],
];

function bare(text) {
  return stripArabicMarks(text).replace(/\s+/g, " ").trim();
}

export function glossIraabTerm(term) {
  const hay = bare(term);
  for (const [ar, en] of GLOSS) {
    if (hay.includes(bare(ar))) return en;
  }
  return "";
}

function kindPhrase(kind) {
  if (kind === "fiil") return "a verb (fiʿl / فِعْل)";
  if (kind === "harf") return "a particle (ḥarf / حَرْف)";
  if (kind === "ism") return "a noun (ism / اسْم)";
  return "a word";
}

function oneSentence(text) {
  const t = String(text || "").replace(/\s+/g, " ").trim();
  if (!t) return "";
  const m = t.match(/^.+?[.؟!]/);
  return (m ? m[0] : t).trim();
}

/**
 * Instant one-sentence explanation that does not need an API key.
 */
export function buildLocalIraabExplanation({ word, analysis }) {
  const steps = buildIraabStudySteps(analysis);
  const poem = matchIraabToPoem(analysis);
  const knowledge = gatherTutorKnowledge({ analysis, poemHits: poem });

  const role = steps.steps.find((s) => s.titleEn === "Role");
  const caseStep = steps.steps.find((s) => s.titleEn === "Case / local");
  const roleGloss = role ? glossIraabTerm(role.valueAr) : "";
  const caseGloss = caseStep ? glossIraabTerm(caseStep.valueAr) : "";

  const hiddenFail = /فاعله مستتر|فاعل مستتر/.test(bare(analysis));
  let explanation = `﴿${word}﴾ is ${kindPhrase(steps.kind)}`;
  if (hiddenFail) {
    explanation += " with a hidden doer (فَاعِلُهُ مُسْتَتِرٌ)";
  } else if (role) {
    explanation += ` acting as ${roleGloss || role.valueAr}`;
  }
  if (caseStep) {
    if (/لا محل/.test(bare(caseStep.valueAr))) {
      explanation += ", with no grammatical slot of its own (لَا مَحَلَّ لَهُ مِنَ الْإِعْرَابِ)";
    } else {
      explanation += `, ${caseGloss || caseStep.valueAr}`;
    }
  }
  explanation += ".";

  return {
    explanation: oneSentence(explanation),
    steps,
    poem,
    commentary: knowledge.commentary,
    memory: knowledge.memory,
    provider: "local",
    model: "Ājurrūmiyyah map",
  };
}

const explainCache = new Map();

export function clearIraabTutorCache() {
  explainCache.clear();
}

function cacheKey({ word, analysis, sentence, question }) {
  return `${bare(word)}|${bare(analysis)}|${bare(sentence).slice(0, 80)}|${String(question || "").trim()}`;
}

export async function fetchIraabTutorStatus() {
  try {
    const res = await fetch("/api/iraab-explain");
    const json = await res.json().catch(() => ({}));
    return {
      available: Boolean(json.available),
      provider: json.provider || null,
      model: json.model || null,
      message: json.message || "",
    };
  } catch {
    return {
      available: false,
      provider: null,
      model: null,
      message: "Tutor API is only available while `npm run dev` is running.",
    };
  }
}

/**
 * Local explanation immediately; Claude/Groq rewrite when the server has a key.
 */
export async function explainIraabWithTutor({
  word,
  analysis,
  sentence = "",
  fullIraab = "",
  question = "",
  history = [],
  studentAnalysis = "",
  signal,
}) {
  const local = buildLocalIraabExplanation({ word, analysis, sentence });
  const key = cacheKey({ word, analysis, sentence, question });
  if (!question && explainCache.has(key)) {
    return explainCache.get(key);
  }

  try {
    const res = await fetch("/api/iraab-explain", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        word,
        analysis,
        sentence,
        fullIraab,
        question,
        studentAnalysis,
        history: history.slice(-8),
        poem: local.poem.map((p) => ({
          chapterAr: p.chapterAr,
          chapterEn: p.chapterEn,
          ar: p.ar,
          en: p.en,
          reason: p.reason,
        })),
        commentary: local.commentary.map((c) => ({
          chapterEn: c.chapterEn,
          chapterAr: c.chapterAr,
          title: c.title,
          text: c.text,
        })),
        memory: local.memory.map((m) => ({
          word: m.word,
          note: m.note,
          terms: m.terms,
        })),
      }),
      signal,
    });
    const json = await res.json().catch(() => ({}));
    if (!res.ok) {
      const fallback = {
        ...local,
        error: json.error || `Tutor request failed (${res.status})`,
      };
      return fallback;
    }
    const packed = {
      ...local,
      explanation:
        oneSentence(json.explanation || local.explanation) || local.explanation,
      provider: json.provider || local.provider,
      model: json.model || local.model,
    };
    if (!question) explainCache.set(key, packed);
    return packed;
  } catch (err) {
    if (err?.name === "AbortError") throw err;
    return { ...local, error: err?.message || "Could not reach the tutor." };
  }
}

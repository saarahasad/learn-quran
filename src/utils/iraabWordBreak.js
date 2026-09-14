/**
 * Word-by-word English + harakat for a Daas segment.
 */

import { tokenizeArabicPassage } from "./tokenizeArabicPassage.js";
import {
  SCORE_TERMS,
  stripArabicMarks,
  vocalizeIraabText,
} from "./iraabDaas.js";
import { glossIraabTerm } from "./iraabTutor.js";

const QDC_VERSE = "https://api.qurancdn.com/api/qdc/verses/by_key";
const glossCache = new Map();

const LETTERS = {
  ا: "ā",
  أ: "a",
  إ: "i",
  آ: "ā",
  ٱ: "a",
  ء: "ʾ",
  ب: "b",
  ت: "t",
  ث: "th",
  ج: "j",
  ح: "ḥ",
  خ: "kh",
  د: "d",
  ذ: "dh",
  ر: "r",
  ز: "z",
  س: "s",
  ش: "sh",
  ص: "ṣ",
  ض: "ḍ",
  ط: "ṭ",
  ظ: "ẓ",
  ع: "ʿ",
  غ: "gh",
  ف: "f",
  ق: "q",
  ك: "k",
  ل: "l",
  م: "m",
  ن: "n",
  ه: "h",
  و: "w",
  ي: "y",
  ى: "ā",
  ة: "h",
};

const MARKS = {
  "\u064E": "a",
  "\u064F": "u",
  "\u0650": "i",
  "\u064B": "an",
  "\u064C": "un",
  "\u064D": "in",
  "\u0652": "",
  "\u0670": "ā",
};

const EXTRA_GLOSS = [
  ["متعلقان بمحذوف", "both attached to an omitted word"],
  ["متعلق بمحذوف", "attached to an omitted word"],
  ["لفظ الجلالة", "the Divine Name (Allāh)"],
  ["شبه الجملة", "a phrase (prepositional / adverbial)"],
  ["متعلقان", "both attached (to…)"],
  ["متعلق", "attached (to…)"],
  ["المحذوف", "the omitted / elided word"],
  ["محذوف", "omitted / elided"],
  ["ابتدائية", "inceptive (starts a new sentence)"],
  ["باللام", "by the lām (لِـ)"],
  ["بالباء", "by the bāʾ (بِـ)"],
  ["بالكاف", "by the kāf (كَـ)"],
  ["مقدرة", "implied (not shown)"],
  ["مقدر", "implied (not shown)"],
  ["ظاهرة", "apparent (shown)"],
  ["ظاهر", "apparent (shown)"],
  ["نافية للجنس", "categorical negation (of the genus)"],
  ["تعمل عمل إن", "works like inna"],
  ["اسم لا", "the noun of lā"],
  ["اسمها", "its noun (ism of lā)"],
  ["خبرها", "its predicate"],
  ["مبني على الفتح", "built on fatḥa"],
  ["مبني على الضم", "built on ḍamma"],
  ["مبني على الكسر", "built on kasra"],
  ["مبني على السكون", "built on sukūn"],
  ["على الفتح", "on fatḥa"],
  ["للجنس", "of the genus"],
  ["نافية", "negating"],
  ["تعمل", "it operates"],
  ["عمل", "the government of"],
  ["على", "on"],
  ["الفتح", "the fatḥa"],
  ["إن", "inna"],
  ["ان", "inna"],
  ["لا", "no / lā"],
];

const MARK_RE = /[\u064B-\u065F\u0670\u06D6-\u06ED\u0640]/;
const LETTER_RE = /[ءا-ي]/;

function bare(text) {
  return stripArabicMarks(text).replace(/\s+/g, " ").trim();
}

function phraseTone(ar) {
  const t = bare(ar);
  if (/فعل|ماض|مضارع|امر|أمر/.test(t)) return "fiil";
  if (/مرفوع|رفع|فاعل|مبتدأ|خبر/.test(t) && !/نصب|جر|جزم|مفعول|حال/.test(t)) return "raf";
  if (/منصوب|نصب|مفعول|حال|تمييز|مستثنى|منادى/.test(t)) return "nasb";
  if (/مجرور|مخفوض|جر|مضاف|متعلق/.test(t)) return "khafd";
  if (/مجزوم|جزم/.test(t)) return "jazm";
  if (/مبني|مستتر|ضمير/.test(t)) return "mabni";
  if (/حرف|استئناف|عطف|ناصب|جازم|شرط|ناف/.test(t)) return "harf";
  return "role";
}

function glossSpan(text) {
  const hay = bare(text);
  if (!hay) return "";
  for (const [ar, en] of EXTRA_GLOSS) {
    const key = bare(ar);
    if (hay === key || (key.length > 2 && hay.includes(key))) return en;
  }
  return glossIraabTerm(text);
}

function stripIndexMap(raw) {
  const chars = [];
  const map = [];
  for (let i = 0; i < raw.length; i++) {
    const ch = raw[i];
    if (MARK_RE.test(ch)) continue;
    let n = ch;
    if (/[آأإٱ]/.test(n)) n = "ا";
    if (n === "ة") n = "ه";
    if (n === "ى") n = "ي";
    chars.push(n);
    map.push(i);
  }
  return { stripped: chars.join(""), map };
}

function isLetterChar(ch) {
  return LETTER_RE.test(ch);
}

function rawSlice(raw, map, start, end) {
  if (start >= map.length) return "";
  const from = map[start];
  let to = map[end - 1] + 1;
  while (to < raw.length && MARK_RE.test(raw[to])) to += 1;
  return raw.slice(from, to).replace(/\s+/g, " ").trim();
}

function lookupAyahGloss(ar, ayahWords) {
  const needle = bare(ar);
  if (!needle || !ayahWords?.length) return null;
  return ayahWords.find((w) => {
    const cand = bare(w.ar);
    return cand === needle || cand.includes(needle) || needle.includes(cand);
  }) || null;
}

const PHRASE_NEEDLES = (() => {
  const seen = new Set();
  const out = [];
  for (const [ar] of EXTRA_GLOSS) {
    const key = bare(ar);
    if (!key || seen.has(key)) continue;
    seen.add(key);
    out.push(key);
  }
  for (const ar of SCORE_TERMS) {
    const key = bare(ar);
    if (!key || key.length < 2 || seen.has(key)) continue;
    seen.add(key);
    out.push(key);
  }
  out.sort((a, b) => b.length - a.length);
  return out;
})();

export function transliterateArabic(text) {
  const raw = String(text || "");
  let out = "";
  let lastCons = "";
  for (let i = 0; i < raw.length; i++) {
    const ch = raw[i];
    if (ch === "\u0651") {
      if (lastCons) out += lastCons;
      continue;
    }
    if (MARKS[ch] != null) {
      out += MARKS[ch];
      continue;
    }
    if (ch === "ا" || ch === "ى" || ch === "آ") {
      const next = raw[i + 1];
      if (ch === "ا" && next === "ل") {
        out += "a";
      } else if (/[aui]$/.test(out)) {
        out = out.replace(/[aui]$/, "ā");
      } else {
        out += "ā";
      }
      lastCons = "";
      continue;
    }
    if (LETTERS[ch]) {
      const next = raw[i + 1];
      if (ch === "و" && next === "\u0652") {
        if (/u$/.test(out)) {
          out = out.replace(/u$/, "ū");
          i += 1;
        } else {
          out += "w";
          lastCons = "w";
        }
      } else if (ch === "ي" && next === "\u0652") {
        if (/i$/.test(out)) {
          out = out.replace(/i$/, "ī");
          i += 1;
        } else {
          out += "y";
          lastCons = "y";
        }
      } else if (ch === "و" && (next === "\u064E" || next === "\u064F" || next === "\u0650")) {
        out += "w";
        lastCons = "w";
      } else if (ch === "ي" && (next === "\u064E" || next === "\u064F" || next === "\u0650")) {
        out += "y";
        lastCons = "y";
      } else {
        lastCons = LETTERS[ch];
        out += LETTERS[ch];
      }
      continue;
    }
    if (ch === " " || ch === "\u00A0") out += " ";
  }
  return out.replace(/\s+/g, " ").trim();
}

export function buildAnalysisWordBreak(analysis, ayahWords = []) {
  const raw = vocalizeIraabText(analysis);
  if (!raw.trim()) return [];
  const { stripped, map } = stripIndexMap(raw);
  const used = new Array(stripped.length).fill(false);
  const hits = [];

  for (const needle of PHRASE_NEEDLES) {
    let from = 0;
    while (from <= stripped.length - needle.length) {
      const idx = stripped.indexOf(needle, from);
      if (idx < 0) break;
      const end = idx + needle.length;
      const overlap = used.slice(idx, end).some(Boolean);
      const before = stripped[idx - 1];
      const after = stripped[end];
      if (
        overlap ||
        (before && isLetterChar(before)) ||
        (after && isLetterChar(after))
      ) {
        from = idx + 1;
        continue;
      }
      for (let k = idx; k < end; k++) used[k] = true;
      hits.push({ start: idx, end, needle });
      from = end;
    }
  }

  let i = 0;
  while (i < stripped.length) {
    if (used[i] || !isLetterChar(stripped[i])) {
      i += 1;
      continue;
    }
    let j = i + 1;
    while (j < stripped.length && !used[j] && isLetterChar(stripped[j])) j += 1;
    hits.push({ start: i, end: j, leftover: true });
    i = j;
  }

  hits.sort((a, b) => a.start - b.start);

  return hits
    .map((hit) => {
      const ar = rawSlice(raw, map, hit.start, hit.end);
      if (!ar) return null;
      const termEn = glossSpan(ar);
      const ayah = lookupAyahGloss(ar, ayahWords);
      const en = termEn || ayah?.en || "";
      const tr = ayah?.tr || transliterateArabic(ar);
      return {
        ar: ayah?.ar || ar,
        en: en || tr,
        tr,
        tone: termEn ? phraseTone(ar) : null,
        isTerm: Boolean(termEn),
      };
    })
    .filter(Boolean);
}

export async function fetchAyahWordGlosses(surah, ayah) {
  const key = `${Number(surah)}:${Number(ayah)}`;
  if (glossCache.has(key)) return glossCache.get(key);
  const url = `${QDC_VERSE}/${encodeURIComponent(key)}?words=true&word_fields=text_uthmani&word_translation_language=en&word_transliteration_language=en`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Could not load words for ${key}`);
  const json = await res.json();
  const words = (json?.verse?.words || [])
    .filter((w) => w.char_type_name !== "end")
    .map((w) => ({
      ar: w.text_uthmani || w.text || "",
      en: w.translation?.text || "",
      tr: w.transliteration?.text || "",
    }))
    .filter((w) => w.ar);
  glossCache.set(key, words);
  return words;
}

export async function fetchAyahRangeWordGlosses(surah, start, end) {
  const from = Number(start);
  const to = Number(end || start);
  if (!Number.isFinite(from) || from < 1) return [];
  const last = Number.isFinite(to) && to >= from ? to : from;
  const packs = await Promise.all(
    Array.from({ length: last - from + 1 }, (_, i) => fetchAyahWordGlosses(surah, from + i)),
  );
  return packs.flat();
}

export function alignSegmentGlosses(segmentText, ayahWords) {
  const tokens = tokenizeArabicPassage(segmentText);
  if (!tokens.length) return [];
  const pool = Array.isArray(ayahWords) ? [...ayahWords] : [];
  let wi = 0;
  return tokens.map((tok) => {
    const needle = bare(tok.bare);
    let hit = null;
    for (let i = wi; i < pool.length && i < wi + 6; i++) {
      const cand = bare(pool[i].ar);
      if (!cand) continue;
      if (cand === needle || cand.includes(needle) || needle.includes(cand)) {
        hit = pool[i];
        wi = i + 1;
        break;
      }
    }
    if (!hit && wi < pool.length) {
      hit = pool[wi];
      wi += 1;
    }
    return {
      ar: tok.display,
      tr: hit?.tr || transliterateArabic(tok.display),
      en: hit?.en || "",
    };
  });
}

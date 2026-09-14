/**
 * Load Qurʾan ayahs and إعراب الدعاس (via local proxy → tafsir.app),
 * then score a student's keyboard analysis against the reference.
 */

import { getSurahMeta } from "../data/quranSurahMeta.js";
import {
  IRAAB_GLUE_KEYS,
  IRAAB_KEYBOARD_SECTIONS,
} from "../data/iraabKeyboard.js";

const QDC_VERSE = "https://api.qurancdn.com/api/qdc/verses/by_key";
const SAHIH_INTERNATIONAL_RESOURCE_ID = 20;

/** Strip footnote markers / HTML tags from a QDC translation string. */
function cleanTranslationText(text) {
  return String(text || "")
    .replace(/<sup[^>]*>.*?<\/sup>/gi, "")
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

/** Strip tashkīl / tatweel for fuzzy Arabic matching. */
export function stripArabicMarks(text) {
  return String(text || "")
    .replace(/\u0640\u0670/g, "ا")
    .replace(/([وىي])\u0670/g, "$1")
    .replace(/\u0670/g, "ا")
    .replace(/[\u064B-\u065F\u06D6-\u06ED]/g, "")
    .replace(/\u0640/g, "")
    .replace(/[آأإٱ]/g, "ا")
    .replace(/ة/g, "ه")
    .replace(/ى/g, "ي")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Bare Daas terms → vocalized classical forms (keyboard + common Daas glosses).
 * Longer bare keys win when replacing inside analysis text.
 */
const EXTRA_VOCALIZED = [
  ["نائب فاعل", "نَائِبُ فَاعِلٍ"],
  ["مفعول مطلق", "مَفْعُولٌ مُطْلَقٌ"],
  ["مفعول لأجله", "مَفْعُولٌ لِأَجْلِهِ"],
  ["مفعول لاجله", "مَفْعُولٌ لِأَجْلِهِ"],
  ["مفعول معه", "مَفْعُولٌ مَعَهُ"],
  ["مفعول به", "مَفْعُولٌ بِهِ"],
  ["مفعول اول", "مَفْعُولٌ أَوَّلُ"],
  ["مفعول أول", "مَفْعُولٌ أَوَّلُ"],
  ["مفعول ثاني", "مَفْعُولٌ ثَانٍ"],
  ["مفعول ثان", "مَفْعُولٌ ثَانٍ"],
  ["مضاف إليه", "مُضَافٌ إِلَيْهِ"],
  ["جار ومجرور", "جَارٌّ وَمَجْرُورٌ"],
  ["فعل مضارع", "فِعْلٌ مُضَارِعٌ"],
  ["فعل ماض", "فِعْلٌ مَاضٍ"],
  ["فعل أمر", "فِعْلُ أَمْرٍ"],
  ["فعل امر", "فِعْلُ أَمْرٍ"],
  ["اسم كان", "اسْمُ كَانَ"],
  ["خبر كان", "خَبَرُ كَانَ"],
  ["اسم إن", "اسْمُ إِنَّ"],
  ["اسم ان", "اسْمُ إِنَّ"],
  ["خبر إن", "خَبَرُ إِنَّ"],
  ["خبر ان", "خَبَرُ إِنَّ"],
  ["في محل رفع", "فِي مَحَلِّ رَفْعٍ"],
  ["في محل نصب", "فِي مَحَلِّ نَصْبٍ"],
  ["في محل جر", "فِي مَحَلِّ جَرٍّ"],
  ["في محل جزم", "فِي مَحَلِّ جَزْمٍ"],
  ["لا محل له من الاعراب", "لَا مَحَلَّ لَهُ مِنَ الْإِعْرَابِ"],
  ["لا محل له من الإعراب", "لَا مَحَلَّ لَهُ مِنَ الْإِعْرَابِ"],
  ["لا محل له", "لَا مَحَلَّ لَهُ"],
  ["نافية للجنس", "نَافِيَةٌ لِلْجِنْسِ"],
  ["تعمل عمل إن", "تَعْمَلُ عَمَلَ إِنَّ"],
  ["تعمل عمل ان", "تَعْمَلُ عَمَلَ إِنَّ"],
  ["مبني على الفتح", "مَبْنِيٌّ عَلَى الْفَتْحِ"],
  ["مبني على الضم", "مَبْنِيٌّ عَلَى الضَّمِّ"],
  ["مبني على الكسر", "مَبْنِيٌّ عَلَى الْكَسْرِ"],
  ["مبني على السكون", "مَبْنِيٌّ عَلَى السُّكُونِ"],
  ["اسمها", "اسْمُهَا"],
  ["خبرها", "خَبَرُهَا"],
  ["للجنس", "لِلْجِنْسِ"],
  ["اسم إشارة", "اسْمُ إِشَارَةٍ"],
  ["اسم موصول", "اسْمٌ مَوْصُولٌ"],
  ["حرف جر", "حَرْفُ جَرٍّ"],
  ["حرف عطف", "حَرْفُ عَطْفٍ"],
  ["الضمة الظاهرة", "الضَّمَّةُ الظَّاهِرَةُ"],
  ["الفتحة الظاهرة", "الْفَتْحَةُ الظَّاهِرَةُ"],
  ["الكسرة الظاهرة", "الْكَسْرَةُ الظَّاهِرَةُ"],
  ["الضمة", "الضَّمَّةُ"],
  ["الفتحة", "الْفَتْحَةُ"],
  ["الكسرة", "الْكَسْرَةُ"],
  ["السكون", "السُّكُونُ"],
  ["ضمة", "ضَمَّةٌ"],
  ["فتحة", "فَتْحَةٌ"],
  ["كسرة", "كَسْرَةٌ"],
  ["سكون", "سُكُونٌ"],
  ["فاعله", "فَاعِلُهُ"],
  ["فاعل", "فَاعِلٌ"],
  ["مبتدأ", "مُبْتَدَأٌ"],
  ["خبر", "خَبَرٌ"],
  ["حال", "حَالٌ"],
  ["تمييز", "تَمْيِيزٌ"],
  ["مستثنى", "مُسْتَثْنًى"],
  ["منادى", "مُنَادًى"],
  ["نعت", "نَعْتٌ"],
  ["بدل", "بَدَلٌ"],
  ["توكيد", "تَوْكِيدٌ"],
  ["معطوف", "مَعْطُوفٌ"],
  ["متعلقان بمحذوف", "مُتَعَلِّقَانِ بِمَحْذُوفٍ"],
  ["متعلق بمحذوف", "مُتَعَلِّقٌ بِمَحْذُوفٍ"],
  ["لفظ الجلالة", "لَفْظُ الْجَلَالَةِ"],
  ["شبه الجملة", "شِبْهُ الْجُمْلَةِ"],
  ["متعلقان", "مُتَعَلِّقَانِ"],
  ["متعلق", "مُتَعَلِّقٌ"],
  ["المحذوف", "الْمَحْذُوفُ"],
  ["محذوف", "مَحْذُوفٌ"],
  ["ابتدائية", "ابْتِدَائِيَّةٌ"],
  ["باللام", "بِاللَّامِ"],
  ["مرفوع", "مَرْفُوعٌ"],
  ["منصوب", "مَنْصُوبٌ"],
  ["مجرور", "مَجْرُورٌ"],
  ["مخفوض", "مَخْفُوضٌ"],
  ["مجزوم", "مَجْزُومٌ"],
  ["مبني", "مَبْنِيٌّ"],
  ["معرب", "مُعْرَبٌ"],
  ["مضارع", "مُضَارِعٌ"],
  ["ماض", "مَاضٍ"],
  ["مستتر", "مُسْتَتِرٌ"],
  ["استئنافية", "اسْتِئْنَافِيَّةٌ"],
  ["عاطفة", "عَاطِفَةٌ"],
  ["ناصبة", "نَاصِبَةٌ"],
  ["جازمة", "جَازِمَةٌ"],
  ["شرطية", "شَرْطِيَّةٌ"],
  ["نافية", "نَافِيَةٌ"],
  ["الواو", "الْوَاوُ"],
  ["الفاء", "الْفَاءُ"],
  ["حرف", "حَرْفٌ"],
  ["اسم", "اسْمٌ"],
  ["ضمير", "ضَمِيرٌ"],
  ["فعل", "فِعْلٌ"],
  ["أمر", "أَمْرٌ"],
];

function buildVocalizePairs() {
  const byBare = new Map();
  function add(bare, vocalized) {
    const b = stripArabicMarks(bare);
    const v = String(vocalized || "").trim();
    if (!b || b.length < 2 || !v) return;
    if (!/[\u064B-\u065F\u0670]/.test(v)) return; // only keep forms that actually have harakat
    const prev = byBare.get(b);
    if (!prev || v.length >= prev.length) byBare.set(b, v);
  }
  for (const [bare, voc] of EXTRA_VOCALIZED) add(bare, voc);
  for (const section of IRAAB_KEYBOARD_SECTIONS) {
    for (const key of section.keys || []) {
      const voc = key.insert || key.ar;
      add(key.ar, voc);
      add(voc, voc);
    }
  }
  for (const key of IRAAB_GLUE_KEYS) {
    const voc = key.insert || key.ar;
    add(key.ar, voc);
    add(voc, voc);
  }
  return [...byBare.entries()]
    .map(([bare, vocalized]) => ({ bare, vocalized }))
    .sort((a, b) => b.bare.length - a.bare.length);
}

const VOCALIZE_PAIRS = buildVocalizePairs();

/**
 * Replace bare Daas grammar words with vocalized classical forms.
 * Leaves already-vocalized spans alone when the bare match equals the vocalized bare.
 */
export function vocalizeIraabText(text) {
  const raw = String(text || "");
  if (!raw) return "";

  const marks = [];
  for (const { bare, vocalized } of VOCALIZE_PAIRS) {
    let i = 0;
    while (i < raw.length) {
      let j = i;
      let built = "";
      const start = i;
      while (j < raw.length && built.length < bare.length) {
        const ch = raw[j];
        j += 1;
        if (/[\u064B-\u065F\u0670\u06D6-\u06ED\u0640]/.test(ch)) continue;
        let n = ch;
        if (/[آأإٱ]/.test(n)) n = "ا";
        if (n === "ة") n = "ه";
        if (n === "ى") n = "ي";
        built += n;
      }
      if (built === bare) {
        const slice = raw.slice(start, j);
        // Prefer keeping text that already has richer harakat on this span
        const sliceBare = stripArabicMarks(slice);
        const hasMarks = /[\u064B-\u065F\u0670]/.test(slice);
        if (!hasMarks || sliceBare === bare) {
          marks.push({ start, end: j, vocalized });
        }
        i = j;
      } else {
        i += 1;
      }
    }
  }

  marks.sort((a, b) => a.start - b.start || b.end - a.end);
  const chosen = [];
  let cursor = 0;
  for (const m of marks) {
    if (m.start < cursor) continue;
    chosen.push(m);
    cursor = m.end;
  }

  let out = "";
  let at = 0;
  for (const m of chosen) {
    out += raw.slice(at, m.start);
    out += m.vocalized;
    at = m.end;
  }
  out += raw.slice(at);
  return out;
}

/**
 * Map Daas ﴿…﴾ spans onto Uthmani ayah words so chips show full harakat.
 * Takes the smallest exact window first so a later word is never swallowed
 * into the previous chip (e.g. ﴿عَلَى عَبْدِهِ﴾ must not eat ﴿الْكِتَابَ﴾).
 */
export function alignSegmentsToUthmani(segments, uthmani) {
  const words = uthmaniWords(uthmani);
  if (!segments?.length || !words.length) return segments || [];

  let wi = 0;
  return segments.map((seg) => {
    const bareSeg = stripArabicMarks(seg.text).replace(/\s+/g, " ").trim();
    if (!bareSeg || wi >= words.length) return seg;
    const want = Math.max(1, bareSeg.split(/\s+/).filter(Boolean).length);
    const maxN = Math.min(8, words.length - wi);

    let best = null;
    for (let n = 1; n <= maxN; n++) {
      const slice = words.slice(wi, wi + n);
      const bareSlice = stripArabicMarks(slice.map((w) => w.text).join(" "))
        .replace(/\s+/g, " ")
        .trim();
      if (!bareSlice) continue;
      if (bareSlice === bareSeg) {
        best = { n, slice, exact: true };
        break;
      }
    }

    if (!best) {
      const n = Math.min(want, maxN);
      const slice = words.slice(wi, wi + n);
      const bareSlice = stripArabicMarks(slice.map((w) => w.text).join(" "))
        .replace(/\s+/g, " ")
        .trim();
      if (bareSeg.startsWith(bareSlice) || bareSlice.startsWith(bareSeg)) {
        best = { n, slice, exact: false };
      }
    }

    if (best) {
      wi += best.n;
      return {
        ...seg,
        text: best.slice.map((w) => w.text).join(" "),
        textDaas: seg.text,
        ayah: best.slice[best.slice.length - 1]?.ayah ?? best.slice[0]?.ayah ?? null,
      };
    }
    return seg;
  });
}

export function splitUthmaniWords(text) {
  return String(text || "")
    .replace(/[ۣۖۗۘۙۚۛۜ۟۠ۡۢۤۥۦ۪ۭۧۨ۫۬]/g, "")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
}

function uthmaniWords(source) {
  if (Array.isArray(source)) {
    return source.flatMap((ayah) =>
      splitUthmaniWords(ayah.text).map((text) => ({
        text,
        ayah: ayah.n,
      })),
    );
  }
  return splitUthmaniWords(source).map((text) => ({ text, ayah: null }));
}

export function formatAyahRangeLabel(start, end) {
  const a = Number(start);
  const b = Number(end);
  if (!Number.isFinite(a) || a < 1) return "";
  if (!Number.isFinite(b) || b <= a) return String(a);
  return `${a}–${b}`;
}

export function tagUnitsWithAyahs(units, ayahs) {
  if (!units?.length || !ayahs?.length) return units || [];
  const words = ayahs.flatMap((ayah) =>
    splitUthmaniWords(ayah.text).map((text) => ({ text, ayah: ayah.n })),
  );
  let wi = 0;
  return units.map((unit) => {
    const n = Math.max(1, splitUthmaniWords(unit.text).length);
    const slice = words.slice(wi, wi + n);
    wi += n;
    return {
      ...unit,
      ayah: slice[slice.length - 1]?.ayah ?? slice[0]?.ayah ?? unit.ayah ?? null,
    };
  });
}

/**
 * Parse Daas `data` field: ﴿كلمة﴾ إعرابها ﴿كلمة﴾ …
 * @returns {Array<{ text: string, analysis: string }>}
 */
export function parseDaasSegments(data) {
  const raw = String(data || "");
  const out = [];
  const re = /﴿([^﴾]+)﴾([^﴿]*)/g;
  let m;
  while ((m = re.exec(raw))) {
    const text = m[1].replace(/\s+/g, " ").trim();
    const analysis = m[2].replace(/\s+/g, " ").trim().replace(/[،.]+$/, (s) => s);
    if (!text) continue;
    out.push({ text, analysis });
  }
  return out;
}

/** Grammar tokens we care about when scoring (roles, cases, signs, glue). */
export const SCORE_TERMS = [
  "نائب فاعل",
  "مفعول مطلق",
  "مفعول لأجله",
  "مفعول لاجله",
  "مفعول معه",
  "مفعول به",
  "مضاف إليه",
  "جار ومجرور",
  "فعل مضارع",
  "فعل ماض",
  "فعل أمر",
  "فعل امر",
  "اسم كان",
  "خبر كان",
  "اسم إن",
  "اسم ان",
  "خبر إن",
  "خبر ان",
  "في محل رفع",
  "في محل نصب",
  "في محل جر",
  "في محل جزم",
  "لا محل له",
  "فاعل",
  "مبتدأ",
  "خبر",
  "حال",
  "تمييز",
  "مستثنى",
  "منادى",
  "نعت",
  "بدل",
  "توكيد",
  "معطوف",
  "متعلقان بمحذوف",
  "متعلق بمحذوف",
  "لفظ الجلالة",
  "شبه الجملة",
  "متعلقان",
  "متعلق",
  "المحذوف",
  "محذوف",
  "ابتدائية",
  "باللام",
  "حرف",
  "اسم",
  "ضمير",
  "مرفوع",
  "منصوب",
  "مجرور",
  "مخفوض",
  "مجزوم",
  "مبني",
  "معرب",
  "ضمة",
  "فتحة",
  "كسرة",
  "سكون",
  "استئنافية",
  "عاطفة",
  "ناصبة",
  "جازمة",
  "شرطية",
  "نافية",
  "مضارع",
  "ماض",
  "مستتر",
];

/** Longer terms first so "مفعول به" wins over "مفعول". */
const COLOR_TERMS = [...SCORE_TERMS].sort((a, b) => b.length - a.length);

function termTone(term) {
  const t = stripArabicMarks(term);
  if (/فعل|ماض|مضارع|امر|أمر/.test(t)) return "fiil";
  if (/مرفوع|رفع|فاعل|مبتدأ|خبر/.test(t) && !/نصب|جر|جزم|مفعول|حال/.test(t)) return "raf";
  if (/منصوب|نصب|مفعول|حال|تمييز|مستثنى|منادى/.test(t)) return "nasb";
  if (/مجرور|مخفوض|جر|مضاف|متعلق/.test(t)) return "khafd";
  if (/مجزوم|جزم/.test(t)) return "jazm";
  if (/مبني|مستتر|ضمير/.test(t)) return "mabni";
  if (/حرف|استئناف|عطف|ناصب|جازم|شرط|ناف/.test(t)) return "harf";
  return "role";
}

/**
 * Split iʿrāb text into spans with tone classes for pattern reading.
 * @returns {Array<{ text: string, tone: string|null }>}
 */
export function colorizeIraabSegments(text) {
  const raw = String(text || "");
  if (!raw) return [];

  const marks = [];
  for (const term of COLOR_TERMS) {
    const needle = stripArabicMarks(term);
    if (needle.length < 2) continue;
    let i = 0;
    while (i < raw.length) {
      let j = i;
      let built = "";
      const start = i;
      while (j < raw.length && built.length < needle.length) {
        const ch = raw[j];
        j += 1;
        if (/[\u064B-\u065F\u0670\u06D6-\u06ED\u0640]/.test(ch)) continue;
        let n = ch;
        if (/[آأإٱ]/.test(n)) n = "ا";
        if (n === "ة") n = "ه";
        if (n === "ى") n = "ي";
        built += n;
      }
      if (built === needle) {
        marks.push({ start, end: j, tone: termTone(term) });
        i = j;
      } else {
        i += 1;
      }
    }
  }

  marks.sort((a, b) => a.start - b.start || b.end - a.end);
  const chosen = [];
  let cursor = 0;
  for (const m of marks) {
    if (m.start < cursor) continue;
    chosen.push(m);
    cursor = m.end;
  }

  const parts = [];
  let at = 0;
  for (const m of chosen) {
    if (m.start > at) parts.push({ text: raw.slice(at, m.start), tone: null });
    parts.push({ text: raw.slice(m.start, m.end), tone: m.tone });
    at = m.end;
  }
  if (at < raw.length) parts.push({ text: raw.slice(at), tone: null });
  return parts.length ? parts : [{ text: raw, tone: null }];
}

function normalizeForScore(text) {
  return stripArabicMarks(text).replace(/[^\u0600-\u06FF\s]/g, " ").replace(/\s+/g, " ");
}

function hayHas(hay, term) {
  return hay.includes(normalizeForScore(term));
}

function firstMatch(hay, terms) {
  for (const t of terms) {
    if (hayHas(hay, t)) return t;
  }
  return null;
}

/**
 * Turn a Daas line into Ājurrūmiyyah-style practice steps.
 * Step 1 is always word type: اسم / فعل / حرف.
 * @returns {{ kind: 'ism'|'fiil'|'harf'|null, steps: Array<{ n: number, titleAr: string, titleEn: string, valueAr: string, tone: string }> }}
 */
export function buildIraabStudySteps(referenceText) {
  const hay = normalizeForScore(referenceText);
  const steps = [];
  if (!hay) return { kind: null, steps };

  const fiilLabel = firstMatch(hay, [
    "فعل مضارع",
    "فعل ماض",
    "فعل أمر",
    "فعل امر",
    "مضارع",
    "ماض",
  ]);
  const harfHint = firstMatch(hay, [
    "استئنافية",
    "عاطفة",
    "ناصبة",
    "جازمة",
    "شرطية",
    "نافية",
    "حرف جر",
    "جار ومجرور",
    "حرف",
  ]);
  const ismHint = firstMatch(hay, [
    "ضمير",
    "اسم إشارة",
    "اسم موصول",
    "مضاف إليه",
    "فاعل",
    "مبتدأ",
    "خبر",
    "مفعول",
    "حال",
    "نعت",
    "بدل",
    "اسم",
  ]);

  let kind = null;
  let kindAr = "";
  let kindTone = "role";
  if (fiilLabel || (/فعل/.test(hay) && !/حرف/.test(hay.slice(0, 12)))) {
    kind = "fiil";
    kindAr = fiilLabel?.includes("مضارع")
      ? "فعل مضارع"
      : fiilLabel?.includes("ماض")
        ? "فعل ماض"
        : fiilLabel?.includes("امر") || fiilLabel?.includes("أمر")
          ? "فعل أمر"
          : "فعل";
    kindTone = "fiil";
  } else if (
    harfHint &&
    (/استئناف|عطف|ناصب|جازم|شرط|ناف|حرف/.test(hay) ||
      (!ismHint && !fiilLabel))
  ) {
    // Particle-first: many Daas lines open with الواو استئنافية / حرف جر
    if (
      /^الواو|الفاء|اللام|الباء|من|عن|في|على|الى|إلى|حتى/.test(hay) ||
      /استئنافية|عاطفة|ناصبة|جازمة|شرطية|نافية|حرف جر|لا محل/.test(hay) ||
      (hayHas(hay, "حرف") && !hayHas(hay, "فعل"))
    ) {
      kind = "harf";
      kindAr = "حرف";
      kindTone = "harf";
    }
  }
  if (!kind) {
    if (fiilLabel) {
      kind = "fiil";
      kindAr = "فعل";
      kindTone = "fiil";
    } else if (hayHas(hay, "حرف") || /استئنافية|عاطفة|ناصبة|جازمة/.test(hay)) {
      kind = "harf";
      kindAr = "حرف";
      kindTone = "harf";
    } else {
      kind = "ism";
      kindAr = "اسم";
      kindTone = "role";
    }
  }

  steps.push({
    n: 1,
    titleAr: "النوع",
    titleEn: "Word type",
    valueAr: vocalizeIraabText(kindAr),
    tone: kindTone,
  });

  if (kind === "fiil") {
    const tense =
      firstMatch(hay, ["مضارع", "ماض", "أمر", "امر"]) ||
      (kindAr.includes("مضارع")
        ? "مضارع"
        : kindAr.includes("ماض")
          ? "ماض"
          : kindAr.includes("أمر")
            ? "أمر"
            : null);
    if (tense && tense !== kindAr) {
      steps.push({
        n: steps.length + 1,
        titleAr: "الزمن",
        titleEn: "Tense",
        valueAr: vocalizeIraabText(tense === "امر" ? "أمر" : tense),
        tone: "fiil",
      });
    }
  }

  if (kind === "harf") {
    const particle =
      firstMatch(hay, [
        "استئنافية",
        "عاطفة",
        "ناصبة",
        "جازمة",
        "شرطية",
        "نافية",
        "حرف جر",
      ]) || "حرف";
    steps.push({
      n: steps.length + 1,
      titleAr: "صنف الحرف",
      titleEn: "Particle kind",
      valueAr: vocalizeIraabText(particle),
      tone: "harf",
    });
  }

  if (kind === "ism") {
    const ismKind = firstMatch(hay, ["ضمير", "اسم إشارة", "اسم موصول", "اسم"]);
    if (ismKind && ismKind !== "اسم") {
      steps.push({
        n: steps.length + 1,
        titleAr: "صنف الاسم",
        titleEn: "Noun kind",
        valueAr: vocalizeIraabText(ismKind),
        tone: "mabni",
      });
    }
  }

  const built = firstMatch(hay, ["مبني", "معرب"]);
  if (built) {
    steps.push({
      n: steps.length + 1,
      titleAr: "البناء / الإعراب",
      titleEn: "Fixed or declined",
      valueAr: vocalizeIraabText(built),
      tone: built === "مبني" ? "mabni" : "role",
    });
  }

  const role = firstMatch(hay, [
    "نائب فاعل",
    "مفعول مطلق",
    "مفعول لأجله",
    "مفعول لاجله",
    "مفعول معه",
    "مفعول به",
    "مضاف إليه",
    "جار ومجرور",
    "اسم كان",
    "خبر كان",
    "اسم إن",
    "اسم ان",
    "خبر إن",
    "خبر ان",
    "فاعل",
    "مبتدأ",
    "خبر",
    "حال",
    "تمييز",
    "مستثنى",
    "منادى",
    "نعت",
    "بدل",
    "توكيد",
    "معطوف",
    "متعلقان بمحذوف",
    "متعلق بمحذوف",
    "متعلقان",
    "متعلق",
  ]);
  if (role) {
    steps.push({
      n: steps.length + 1,
      titleAr: "المحليّة / الوظيفة",
      titleEn: "Role",
      valueAr: vocalizeIraabText(role),
      tone: termTone(role),
    });
  }

  const caseOrLocal = firstMatch(hay, [
    "في محل رفع",
    "في محل نصب",
    "في محل جر",
    "في محل جزم",
    "لا محل له",
    "مرفوع",
    "منصوب",
    "مجرور",
    "مخفوض",
    "مجزوم",
  ]);
  if (caseOrLocal) {
    steps.push({
      n: steps.length + 1,
      titleAr: "الحالة",
      titleEn: "Case / local",
      valueAr: vocalizeIraabText(caseOrLocal),
      tone: termTone(caseOrLocal),
    });
  }

  const sign = firstMatch(hay, ["ضمة", "فتحة", "كسرة", "سكون", "واو", "ألف", "ياء", "نون"]);
  if (sign && /ضمة|فتحة|كسرة|سكون/.test(sign)) {
    steps.push({
      n: steps.length + 1,
      titleAr: "العلامة",
      titleEn: "Sign",
      valueAr: vocalizeIraabText(sign),
      tone: "role",
    });
  }

  return { kind, steps };
}

/**
 * One colour = one iʿrāb state. Nothing else is painted.
 * Verbs that are mabni (māḍī / amr) and particles sit in "none".
 */
export const IRAAB_CASE_KEY = [
  { id: "raf", ar: "رفع", en: "nominative" },
  { id: "nasb", ar: "نصب", en: "accusative" },
  { id: "khafd", ar: "جر", en: "genitive" },
  { id: "jazm", ar: "جزم", en: "jussive" },
  { id: "none", ar: "لا محل", en: "no slot" },
];

const CASE_BY_ID = Object.fromEntries(IRAAB_CASE_KEY.map((c) => [c.id, c]));

export function iraabCaseMeta(id) {
  return CASE_BY_ID[id] || CASE_BY_ID.none;
}

/** Case colour for a Daas segment — used to paint the word, not every grammar term. */
export function iraabSegmentTone(analysis, prevAnalysis = "", prevTone = "") {
  const hay = normalizeForScore(analysis);
  if (!hay) return "none";

  if (hayHas(hay, "في محل جزم")) return "jazm";
  if (hayHas(hay, "في محل نصب")) return "nasb";
  if (hayHas(hay, "في محل جر") || hayHas(hay, "في محل خفض")) return "khafd";
  if (hayHas(hay, "في محل رفع")) return "raf";

  if (hayHas(hay, "مجزوم")) return "jazm";
  if (hayHas(hay, "منصوب")) return "nasb";
  if (hayHas(hay, "مجرور") || hayHas(hay, "مخفوض")) return "khafd";
  if (hayHas(hay, "مرفوع")) return "raf";

  const prev = normalizeForScore(prevAnalysis);
  if (hayHas(hay, "مضارع")) {
    if (hayHas(prev, "جازمة")) return "jazm";
    if (hayHas(prev, "ناصبة")) return "nasb";
  }

  const hiddenFail = /فاعله مستتر|فاعل مستتر/.test(hay);
  if (firstMatch(hay, ["مفعول", "حال", "تمييز", "مستثنى", "منادى"])) return "nasb";
  if (firstMatch(hay, ["مضاف إليه", "جار ومجرور", "متعلقان", "متعلق"])) return "khafd";
  if (!hiddenFail && firstMatch(hay, ["نائب فاعل", "فاعل", "مبتدأ", "خبر"])) return "raf";

  if (
    (hayHas(hay, "صفة") ||
      hayHas(hay, "نعت") ||
      hayHas(hay, "بدل") ||
      hayHas(hay, "توكيد") ||
      (hayHas(hay, "معطوف") && !hayHas(hay, "معطوفة"))) &&
    prevTone &&
    prevTone !== "none"
  ) {
    return prevTone;
  }

  if (
    hayHas(hay, "لا محل") ||
    hayHas(hay, "استئنافية") ||
    hayHas(hay, "عاطفة") ||
    hayHas(hay, "جازمة") ||
    hayHas(hay, "ناصبة") ||
    hayHas(hay, "شرطية") ||
    hayHas(hay, "نافية")
  ) {
    if (!hayHas(hay, "مضارع") && !hayHas(hay, "منصوب") && !hayHas(hay, "مجزوم")) {
      return "none";
    }
  }

  if (hayHas(hay, "مضارع")) return "raf";
  return "none";
}

export function iraabTonesForUnits(units) {
  const tones = [];
  for (let i = 0; i < (units || []).length; i++) {
    tones.push(
      iraabSegmentTone(
        units[i]?.reference || "",
        units[i - 1]?.reference || "",
        tones[i - 1] || "",
      ),
    );
  }
  return tones;
}

/** Reconstruct the tafsir.app paragraph: ﴿word﴾ analysis ﴿word﴾ analysis … */
export function formatDaasFullIraab(units) {
  return (units || [])
    .filter((u) => String(u?.text || "").trim() && String(u?.reference || "").trim())
    .map((u) => `﴿${u.text}﴾ ${u.reference}`)
    .join(" ");
}

export function extractScoreTerms(text) {
  const hay = normalizeForScore(text);
  const hits = [];
  for (const term of SCORE_TERMS) {
    const needle = normalizeForScore(term);
    if (needle && hay.includes(needle)) hits.push(term);
  }
  return hits;
}

/**
 * Compare student analysis to Daas reference.
 * @returns {{ score: number, matched: string[], missing: string[], ok: boolean }}
 */
export function scoreIraabAgainstReference(userText, referenceText) {
  const refTerms = extractScoreTerms(referenceText);
  if (!refTerms.length) {
    const hasAny = Boolean(String(userText || "").trim());
    return { score: hasAny ? 1 : 0, matched: [], missing: [], ok: hasAny };
  }
  const userHay = normalizeForScore(userText);
  const matched = [];
  const missing = [];
  for (const term of refTerms) {
    if (userHay.includes(normalizeForScore(term))) matched.push(term);
    else missing.push(term);
  }
  const score = matched.length / refTerms.length;
  return {
    score,
    matched,
    missing,
    ok: score >= 0.45 || (matched.length >= 1 && missing.length <= 1),
  };
}

export async function fetchQuranAyahText(surah, ayah) {
  const key = `${surah}:${ayah}`;
  const url = `${QDC_VERSE}/${encodeURIComponent(key)}?fields=text_uthmani`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Could not load ayah ${key} (${res.status})`);
  const json = await res.json();
  const text = json?.verse?.text_uthmani || "";
  if (!text) throw new Error(`Empty text for ${key}`);
  return text;
}

/** Uthmani text + Sahih International translation for one āyah. */
export async function fetchQuranAyahWithTranslation(surah, ayah) {
  const key = `${surah}:${ayah}`;
  const url = `${QDC_VERSE}/${encodeURIComponent(key)}?fields=text_uthmani&translations=${SAHIH_INTERNATIONAL_RESOURCE_ID}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Could not load ayah ${key} (${res.status})`);
  const json = await res.json();
  const text = json?.verse?.text_uthmani || "";
  if (!text) throw new Error(`Empty text for ${key}`);
  const en = cleanTranslationText(json?.verse?.translations?.[0]?.text || "");
  return { text, en };
}

/** Inclusive Uthmani text for a Daas grouping (tafsir.app ayahs_start + count). */
export function daasAyahRange({ ayahsStart, count, ayah, maxAyah }) {
  const requested = Number(ayah);
  const start = Number(ayahsStart);
  const n = Number(count);
  if (Number.isFinite(start) && start >= 1 && Number.isFinite(n) && n >= 1) {
    const end = start + n;
    const cap = Number(maxAyah);
    return {
      start,
      end: Number.isFinite(cap) ? Math.min(cap, end) : end,
    };
  }
  return { start: requested, end: requested };
}

export async function fetchQuranAyahs(surah, start, end) {
  const from = Number(start);
  const to = Number(end);
  if (!Number.isFinite(from) || from < 1) return [];
  const last = Number.isFinite(to) && to >= from ? to : from;
  const parts = await Promise.all(
    Array.from({ length: last - from + 1 }, (_, i) =>
      fetchQuranAyahWithTranslation(surah, from + i).then(({ text, en }) => ({
        n: from + i,
        text,
        en,
      })),
    ),
  );
  return parts.filter((p) => p.text);
}

export async function fetchQuranAyahRange(surah, start, end) {
  const ayahs = await fetchQuranAyahs(surah, start, end);
  return ayahs.map((a) => a.text).join(" ");
}

export async function fetchDaasIraab(surah, ayah) {
  const meta = getSurahMeta(surah);
  if (!meta) throw new Error("Unknown surah number");
  if (ayah < 1 || ayah > meta.ayahs) {
    throw new Error(`${meta.ar} has ${meta.ayahs} āyāt`);
  }

  const url = `/api/iraab-daas?s=${surah}&a=${ayah}`;
  const res = await fetch(url);
  const json = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(json.error || `Daas fetch failed (${res.status})`);
  }
  const data = json.data || "";
  const segments = parseDaasSegments(data).map((seg) => ({
    ...seg,
    analysis: vocalizeIraabText(seg.analysis),
  }));
  if (!segments.length) {
    throw new Error("No iʿrāb segments found for this āyah in Daas.");
  }
  const range = daasAyahRange({
    ayahsStart: json.ayahsStart ?? json.ayahs_start,
    count: json.count,
    ayah,
    maxAyah: meta.ayahs,
  });
  return {
    surah,
    ayah: range.start,
    ayahEnd: range.end,
    surahMeta: meta,
    sourceLabel: json.sourceLabel || "إعراب القرآن للدعاس",
    sourceUrl: json.sourceUrl || `https://tafsir.app/iraab-daas/${surah}/${range.start}`,
    raw: data,
    segments,
    ayahTextFromApi: json.ayahText || "",
  };
}

/** Load ayah text + Daas reference for the keyboard practice flow. */
export async function loadAyahForIraabPractice(surah, ayah) {
  const daas = await fetchDaasIraab(surah, ayah);
  const ayahs = await fetchQuranAyahs(surah, daas.ayah, daas.ayahEnd);
  const uthmani = ayahs.map((a) => a.text).join(" ");
  const aligned = alignSegmentsToUthmani(daas.segments, ayahs);
  const units = aligned.map((seg, i) => ({
    id: `daas-${surah}-${daas.ayah}-${i}`,
    text: seg.text,
    analysis: "",
    reference: seg.analysis,
    ayah: seg.ayah ?? null,
  }));
  return {
    sentence: uthmani,
    units,
    ayahs,
    reference: { ...daas, segments: aligned, ayahs },
  };
}

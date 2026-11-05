import { useEffect, useState } from "react";
import { getAyahIraabProse } from "../../data/juz30Iraab/index.js";
import "../../styles/iraab-prose.css";

/**
 * Classical āyah-by-āyah iʿrāb (prose style) for Juz ʿAmma.
 * Each entry: [word, analysis]. A null word renders a sentence-level note (جملة …).
 *
 * Text is shown in plain modern naskh (not Uthmani). Key terms are colour-coded:
 * case (رفع / نصب / جر / جزم), بناء, the word's role (الموقع), its type, and the case sign.
 */

/* ── Plain-script normalisation (strip Uthmani-only marks) ── */
function toPlainArabic(text) {
  return String(text ?? "")
    .replace(/ٱ/g, "ا") // ٱ → ا
    .replace(/ىٰ/g, "ى") // ىٰ → ى
    .replace(/[ۖ-ۭ]/g, "") // small high/low Qur'anic signs
    .replace(/ـ/g, ""); // tatweel
}

/* ── Term matching that tolerates full tashkeel ── */
const H = "[\\u064B-\\u0652\\u0670]*"; // optional harakat
const LETTER = "\\u0621-\\u064A";
const vowelled = (word) =>
  [...word].map((ch) => (ch === " " ? "\\s+" : ch === "ا" ? `[اأإآ]${H}` : `${ch}${H}`)).join("");
const PREFIX = `(?:[وف]${H})?(?:[بل]${H})?(?:ا${H}ل${H})?`;
const SUFFIX = `(?:(?:ه|ها|هم|ة|ات|ان|ين|ون|ا)${H})?`;
const term = (words) =>
  `(?<![${LETTER}\\u064B-\\u0652])${PREFIX}(?:${words.map(vowelled).join("|")})${SUFFIX}(?![${LETTER}])`;

const RULES = [
  { cls: "is-quote", re: /«[^»]*»/ },
  {
    cls: "is-type",
    re: new RegExp(
      term([
        "فعل ماض", "فعل مضارع", "فعل أمر",
        "اسم موصول", "اسم إشارة", "اسم استفهام", "اسم شرط",
        "ضمير متصل", "ضمير منفصل", "ضمير مستتر",
        "حرف جر", "حرف عطف", "حرف نفي", "حرف جزم", "حرف نصب", "حرف استفهام",
        "حرف استقبال", "حرف ردع", "حرف توكيد", "حرف شرط", "حرف تحقيق", "حرف نداء",
        "حرف قسم", "حرف مصدري", "حرف استئناف", "حرف ابتداء", "حرف",
        "ظرف زمان", "ظرف مكان",
      ]),
    ),
  },
  {
    cls: "is-role",
    re: new RegExp(
      term([
        "نائب فاعل", "فاعل",
        "مفعول به", "مفعول مطلق", "مفعول لأجله", "مفعول له", "مفعول فيه", "مفعول معه", "مفعول",
        "مبتدأ", "مبتدإ", "خبر",
        "اسم كان", "خبر كان", "اسم إن", "خبر إن",
        "نعت", "صفة", "مضاف إليه", "حال", "تمييز", "بدل", "توكيد", "معطوف",
        "مستثنى", "منادى", "صلة الموصول",
      ]),
    ),
  },
  { cls: "is-sign", re: new RegExp(term(["ثبوت النون", "حذف النون", "حذف حرف العلة", "الضمة", "الفتحة", "الكسرة", "السكون"]) + `(?:\\s+(?:${vowelled("الظاهرة")}|${vowelled("المقدرة")})${H})?`) },
  { cls: "is-rafa", re: new RegExp(term(["مرفوع", "رفع"])) },
  { cls: "is-nasb", re: new RegExp(term(["منصوب", "نصب"])) },
  { cls: "is-jarr", re: new RegExp(term(["مجرور", "جر"])) },
  { cls: "is-jazm", re: new RegExp(term(["مجزوم", "جزم"])) },
  { cls: "is-mabni", re: new RegExp(term(["مبني", "مبنية", "لا محل له من الإعراب", "لا محل لها من الإعراب"])) },
];

/** Split text into plain strings and highlighted spans (earliest, then longest match wins). */
function highlight(text) {
  const out = [];
  let rest = text;
  let key = 0;
  while (rest) {
    let best = null;
    for (const rule of RULES) {
      const m = rule.re.exec(rest);
      if (!m || !m[0]) continue;
      if (!best || m.index < best.index || (m.index === best.index && m[0].length > best.text.length)) {
        best = { index: m.index, text: m[0], cls: rule.cls };
      }
    }
    if (!best) {
      out.push(rest);
      break;
    }
    if (best.index > 0) out.push(rest.slice(0, best.index));
    out.push(
      <span key={key++} className={`ip-t ${best.cls}`}>
        {best.text}
      </span>,
    );
    rest = rest.slice(best.index + best.text.length);
  }
  return out;
}

const LEGEND = [
  ["is-rafa", "رفع"],
  ["is-nasb", "نصب"],
  ["is-jarr", "جر"],
  ["is-jazm", "جزم"],
  ["is-mabni", "مبني"],
  ["is-role", "الموقع"],
  ["is-type", "نوع الكلمة"],
  ["is-sign", "العلامة"],
];

/* Āyāt not in the hand-made files: built from surahquran.com (scripts/juz30-iraab-diagrams/build_prose.py) */
const SURAHQURAN_FILES = import.meta.glob("../../data/juz30Iraab/surahquran/*.json");
const fileCache = new Map();
function loadSurahquran(n) {
  const loader = SURAHQURAN_FILES[`../../data/juz30Iraab/surahquran/${n}.json`];
  if (!loader) return Promise.resolve(null);
  if (!fileCache.has(n)) {
    fileCache.set(
      n,
      loader()
        .then((m) => m.default ?? m)
        .catch((err) => {
          fileCache.delete(n);
          throw err;
        }),
    );
  }
  return fileCache.get(n);
}

function useProseEntries(surahNumber, ayahNumber) {
  const local = getAyahIraabProse(surahNumber, ayahNumber);
  const key = `${surahNumber}:${ayahNumber}`;
  const [loaded, setLoaded] = useState({ key: null, rows: null });
  useEffect(() => {
    if (local || surahNumber == null || ayahNumber == null) return undefined;
    let alive = true;
    loadSurahquran(surahNumber)
      .then((data) => alive && setLoaded({ key, rows: data?.[String(ayahNumber)] ?? null }))
      .catch(() => {});
    return () => {
      alive = false;
    };
  }, [local, surahNumber, ayahNumber, key]);
  return local ?? (loaded.key === key ? loaded.rows : null);
}

export default function AyahIraabProse({ surahNumber, ayahNumber }) {
  const [open, setOpen] = useState(true);
  const entries = useProseEntries(surahNumber, ayahNumber);
  if (!entries?.length) return null;

  return (
    <section className="iraab-prose" dir="rtl" lang="ar">
      <button
        type="button"
        className="iraab-prose__head"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="iraab-prose__title">إعراب الآية</span>
        <span className="iraab-prose__chev" aria-hidden="true">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="iraab-prose__body">
          <ul className="iraab-prose__legend" aria-label="مفتاح الألوان">
            {LEGEND.map(([cls, label]) => (
              <li key={cls}>
                <span className={`ip-t ${cls}`}>{label}</span>
              </li>
            ))}
          </ul>
          <ol className="iraab-prose__list">
            {entries.map(([word, text], i) =>
              word ? (
                <li key={i} className="iraab-prose__entry">
                  <span className="iraab-prose__word">{toPlainArabic(word)}</span>
                  <p className="iraab-prose__text">{highlight(toPlainArabic(text))}</p>
                </li>
              ) : (
                <li key={i} className="iraab-prose__entry iraab-prose__entry--note">
                  <span className="iraab-prose__note-tag">الجملة</span>
                  <p className="iraab-prose__text">{highlight(toPlainArabic(text))}</p>
                </li>
              ),
            )}
          </ol>
        </div>
      )}
    </section>
  );
}

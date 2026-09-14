/**
 * Beginner iʿrāb guide: storage, client API, and the Kahf-1 format seed.
 */

import { buildIraabStudySteps, formatAyahRangeLabel } from "./iraabDaas.js";
import { buildLocalIraabExplanation } from "./iraabTutor.js";
import { alignSegmentGlosses } from "./iraabWordBreak.js";

const STORAGE_KEY = "ajr-iraab-beginner-guide-v1";

export function guideKey(surah, ayah) {
  return `${Number(surah) || 0}:${String(ayah || "").trim() || 0}`;
}

export function loadGuideStore() {
  try {
    const raw = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    if (!raw || typeof raw !== "object" || !raw.guides) return { guides: {} };
    return raw;
  } catch {
    return { guides: {} };
  }
}

export function listSavedGuides() {
  const { guides } = loadGuideStore();
  return Object.entries(guides)
    .map(([key, entry]) => ({
      key,
      surah: entry.surah,
      ayah: entry.ayah,
      surahNameEn: entry.pack?.surahNameEn || "",
      savedAt: entry.savedAt,
    }))
    .sort((a, b) => (b.savedAt || 0) - (a.savedAt || 0));
}

export function getSavedGuide(key) {
  return loadGuideStore().guides[key] || null;
}

export function saveGuide({ surah, ayah, iraab, pack }) {
  const key = guideKey(surah, ayah);
  const store = loadGuideStore();
  store.guides[key] = {
    surah: Number(surah),
    ayah: String(ayah),
    iraab: String(iraab || ""),
    pack,
    savedAt: Date.now(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
  return key;
}

export function formatGuideRichText(text) {
  const escaped = escapeHtml(text)
    .replace(/&lt;i&gt;/g, "<i>")
    .replace(/&lt;\/i&gt;/g, "</i>")
    .replace(/&lt;b&gt;/g, "<b>")
    .replace(/&lt;\/b&gt;/g, "</b>");
  return wrapArabicTerms(escaped);
}

export function bracketAyah(text) {
  const t = String(text || "").trim();
  if (!t) return "";
  if (t.startsWith("﴿")) return t;
  return `﴿${t}﴾`;
}

const GUIDE_DOCUMENT_CSS = `body {
    font-family: -apple-system, 'Segoe UI', sans-serif;
    background: #FAF7F0;
    color: #2C2C2A;
    max-width: 780px;
    margin: 0 auto;
    padding: 2rem 1.5rem 4rem;
    line-height: 1.7;
  }
  h1 {
    text-align: center;
    font-size: 24px;
    color: #3C3489;
    margin-bottom: 0.2rem;
  }
  .subtitle {
    text-align: center;
    color: #5F5E5A;
    margin-bottom: 1.5rem;
    font-size: 15px;
  }
  .ayah-box {
    background: #EEEDFE;
    border: 1px solid #AFA9EC;
    border-radius: 12px;
    padding: 1.2rem 1.5rem;
    font-size: 22px;
    text-align: center;
    direction: rtl;
    margin: 1.5rem 0 1rem;
    color: #26215C;
  }
  .key-box {
    background: #F1EFE8;
    border-radius: 10px;
    padding: 1rem 1.3rem;
    margin-bottom: 2rem;
    font-size: 14px;
  }
  .key-box b { color: #3C3489; }
  .word-card {
    background: #FFFFFF;
    border: 1px solid #E3E0D5;
    border-right: 5px solid #7F77DD;
    border-radius: 10px;
    padding: 1rem 1.3rem;
    margin-bottom: 14px;
  }
  .word-arabic {
    font-size: 22px;
    direction: rtl;
    color: #26215C;
    margin-bottom: 2px;
  }
  .word-meaning {
    font-size: 14px;
    color: #5F5E5A;
    font-style: italic;
    margin-bottom: 8px;
  }
  .tag {
    display: inline-block;
    font-size: 12px;
    font-weight: bold;
    padding: 3px 10px;
    border-radius: 20px;
    margin-bottom: 8px;
  }
  .tag-u { background: #EAF3DE; color: #173404; }
  .tag-a { background: #FAECE7; color: #4A1B0C; }
  .tag-i { background: #E6F1FB; color: #042C53; }
  .tag-none { background: #F1EFE8; color: #2C2C2A; }
  .term {
    color: #3C3489;
    font-weight: bold;
    direction: rtl;
    display: inline-block;
  }
  .word-explain {
    font-size: 15px;
    margin-top: 6px;
  }
  .word-note {
    font-size: 13px;
    color: #5F5E5A;
    margin-top: 6px;
  }
  .section-title {
    font-size: 19px;
    color: #3C3489;
    border-bottom: 2px solid #AFA9EC;
    padding-bottom: 6px;
    margin: 2.5rem 0 1rem;
  }`;

function badgeHtml(state, term) {
  const tag = stateTagClass(state);
  const label = stateLabel(state);
  const termSpan = `<span class="term">${escapeHtml(term)}</span>`;
  if (label) return `<span class="tag ${tag}">${label} · ${termSpan}</span>`;
  return `<span class="tag ${tag}">${termSpan}</span>`;
}

function cardHtml(card) {
  const note = card.note
    ? `\n  <div class="word-note">${formatGuideRichText(card.note)}</div>`
    : "";
  return `<div class="word-card">
  <div class="word-arabic">${escapeHtml(bracketWord(card.ar))}</div>
  <div class="word-meaning">"${escapeHtml(card.meaning || "")}"</div>
  ${badgeHtml(card.state, card.term)}
  <div class="word-explain">${formatGuideRichText(card.explain)}</div>${note}
</div>`;
}

/** Full HTML document — same CSS and structure as al-kahf-1-beginner-english.html */
export function packToGuideHtml(pack) {
  if (!pack) return "";
  const surah = pack.surahNameEn || "al-Kahf";
  const ayah = pack.ayahLabel || "";
  const subtitle = `Sūrat ${surah}${ayah ? `, Ayah ${ayah}` : ""} — plain English, with grammar terms kept in Arabic`;
  const cards = (pack.cards || []).map(cardHtml).join("\n\n");
  const patterns = (pack.patterns || [])
    .map((rule, i) => `${i + 1}. ${formatGuideRichText(rule)}`)
    .join("<br>\n");
  const patternBlock = patterns
    ? `<div class="section-title">The pattern to remember</div>
<div class="key-box">
${patterns}
</div>`
    : "";

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Beginner's Iʿrāb Guide — Sūrat ${escapeHtml(surah)}${ayah ? `, Ayah ${escapeHtml(ayah)}` : ""}</title>
<style>
  ${GUIDE_DOCUMENT_CSS}
</style>
</head>
<body>

<h1>Beginner's iʿrāb guide</h1>
<p class="subtitle">${escapeHtml(subtitle)}</p>

<div class="ayah-box">
${escapeHtml(bracketAyah(pack.ayahText))}
</div>

<div class="key-box">
Every noun's ending sound tells you its job:
<span class="term">رَفْع</span> = subject &nbsp;·&nbsp;
<span class="term">نَصْب</span> = object &nbsp;·&nbsp;
<span class="term">جَرّ</span> = after a small linking word like "for/in/from"
</div>

${cards}

${patternBlock}

</body>
</html>`;
}

export function wrapArabicTerms(text) {
  const raw = String(text || "");
  if (!raw) return "";
  return raw.replace(
    /[\u0600-\u06FF](?:[\u0600-\u06FF\u064B-\u065F\u0670\u0640]+|\s+[\u0600-\u06FF][\u0600-\u06FF\u064B-\u065F\u0670\u0640]*)*/g,
    (chunk) => `<span class="term">${escapeHtml(chunk)}</span>`,
  );
}

export function escapeHtml(text) {
  return String(text || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function bracketWord(ar) {
  const t = String(ar || "").trim();
  if (!t) return "";
  if (t.startsWith("﴿")) return t;
  return `﴿${t}﴾`;
}

export function stateTagClass(state) {
  if (state === "raf") return "tag-u";
  if (state === "nasb") return "tag-a";
  if (state === "khafd") return "tag-i";
  return "tag-none";
}

export function stateLabel(state) {
  if (state === "raf") return "رَفْع";
  if (state === "nasb") return "نَصْب";
  if (state === "khafd") return "جَرّ";
  return "";
}

function toneToState(tone) {
  if (tone === "raf") return "raf";
  if (tone === "nasb") return "nasb";
  if (tone === "khafd") return "khafd";
  return "none";
}

function cardTerm(analysis) {
  const steps = buildIraabStudySteps(analysis);
  const role = steps.steps.find((s) => s.titleEn === "Role");
  if (role?.valueAr) return role.valueAr;
  const caseStep = steps.steps.find((s) => s.titleEn === "Case / local");
  if (caseStep?.valueAr) return caseStep.valueAr;
  if (steps.kind === "fiil") return "فِعْل";
  if (steps.kind === "harf") return "حَرْف";
  return "اِسْم";
}

const LOCAL_PATTERNS = [
  "Check the ending: <b>-u</b> = subject, <b>-a</b> = object, <b>-i</b> = after a linking word.",
  "Look for a hidden \"he/she/they\" inside verbs (فَاعِلٌ مُسْتَتِر).",
  "Small trigger words (لِ، لَمْ، أَنَّ) explain <i>why</i> an ending changed.",
  "Some words describe a <i>state</i> rather than being an object — that's a حَال.",
  "A whole clause can act as a single object, just like a single word can.",
];

/**
 * Cream beginner page from Daʿʿās + Uthmani ayahs. Works for any grouping, no API key.
 */
export function buildLocalBeginnerPack({
  surahNameEn = "",
  ayahLabel = "",
  ayahs = [],
  units = [],
  tones = [],
  glossWords = [],
}) {
  const numbered = Array.isArray(ayahs) ? ayahs.filter((a) => a?.text) : [];
  const start = numbered[0]?.n;
  const end = numbered[numbered.length - 1]?.n;
  const range = ayahLabel || formatAyahRangeLabel(start, end);
  let glossAt = 0;
  const cards = (units || [])
    .filter((unit) => String(unit?.text || "").trim())
    .map((unit, index) => {
      const analysis = String(unit.reference || unit.analysis || "").trim();
      const pool = glossWords.slice(glossAt);
      const aligned = alignSegmentGlosses(unit.text, pool);
      const used = aligned.length || 1;
      glossAt += used;
      const meaning = aligned
        .map((w) => String(w.en || "").trim())
        .filter(Boolean)
        .join(" ");
      const local = buildLocalIraabExplanation({
        word: unit.text,
        analysis,
      });
      const explain = String(local.explanation || "")
        .replace(/^﴿[^﴾]*﴾\s*is\s*/i, "This is ")
        .trim();
      return {
        ar: unit.text,
        ayah: unit.ayah || null,
        meaning,
        state: toneToState(tones[index]),
        term: cardTerm(analysis),
        explain,
      };
    });

  return {
    surahNameEn,
    ayahLabel: range,
    ayahText: numbered.map((a) => a.text).join(" ") || "",
    ayahs: numbered,
    cards,
    patterns: LOCAL_PATTERNS,
    source: "local",
  };
}

export async function fetchGuideStatus() {
  try {
    const res = await fetch("/api/iraab-guide");
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
      message: "Guide API is only available while `npm run dev` is running.",
    };
  }
}

export async function generateBeginnerGuide({
  iraab,
  surahName,
  ayahLabel,
  ayahText,
  ayahs,
  signal,
}) {
  const res = await fetch("/api/iraab-guide", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      iraab,
      surahName,
      ayahLabel,
      ayahText,
      ayahs,
    }),
    signal,
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(json.error || `Guide request failed (${res.status})`);
  }
  if (!json.pack) {
    throw new Error(json.message || json.error || "No guide returned.");
  }
  return json.pack;
}

/** Compressed Daʿʿās-style paste used with the Kahf 1 example page. */
export const SAMPLE_IRAAB_KAHF_1 = `﴿الْحَمْدُ﴾ مبتدأ ﴿لِلَّهِ﴾ لفظ الجلالة مجرور باللام متعلقان بالخبر المحذوف والجملة ابتدائية ﴿الَّذِي﴾ اسم الموصول صفة لله ﴿أَنْزَلَ﴾ ماض فاعله مستتر ﴿عَلى عَبْدِهِ﴾ متعلقان بأنزل ﴿الْكِتابَ﴾ مفعول به والجملة صلة ﴿وَلَمْ﴾ الواو عاطفة ولم جازمة ﴿يَجْعَلْ﴾ مضارع فاعله مستتر ﴿لَهُ﴾ متعلقان بيجعل ﴿عِوَجاً﴾ مفعول به والجملة معطوفة ﴿قَيِّماً﴾ حال ﴿لِيُنْذِرَ﴾ اللام لام التعليل ومضارع منصوب بأن مضمرة ﴿بَأْساً﴾ مفعول به ﴿شَدِيداً﴾ صفة ﴿مِنْ لَدُنْهُ﴾ متعلقان بينذر ﴿وَيُبَشِّرَ﴾ مضارع معطوف منصوب ﴿الْمُؤْمِنِينَ﴾ مفعول به ﴿الَّذِينَ﴾ اسم موصول صفة ﴿يَعْمَلُونَ﴾ مضارع والواو فاعل ﴿الصَّالِحَاتِ﴾ مفعول به ﴿أَنَّ لَهُمْ أَجْراً حَسَناً﴾ أن واسمها وخبرها في تأويل مصدر مفعول ثان ﴿مَاكِثِينَ﴾ حال ﴿فِيهِ﴾ متعلقان بماكثين ﴿أَبَداً﴾ ظرف زمان ﴿وَيُنْذِرَ﴾ مضارع معطوف ﴿الَّذِينَ﴾ مفعول به ﴿قَالُوا﴾ ماض وفاعله والجملة صلة ﴿اتَّخَذَ اللَّهُ وَلَداً﴾ ماض وفاعل ومفعول به والجملة مقول القول`;

export const SAMPLE_PACK_KAHF_1 = {
  surahNameEn: "al-Kahf",
  ayahLabel: "1–4",
  ayahs: [
    {
      n: 1,
      text: "ٱلْحَمْدُ لِلَّهِ ٱلَّذِىٓ أَنزَلَ عَلَىٰ عَبْدِهِ ٱلْكِتَـٰبَ وَلَمْ يَجْعَل لَّهُۥ عِوَجًا",
    },
    {
      n: 2,
      text: "قَيِّمًا لِّيُنذِرَ بَأْسًا شَدِيدًا مِّن لَّدُنْهُ وَيُبَشِّرَ ٱلْمُؤْمِنِينَ ٱلَّذِينَ يَعْمَلُونَ ٱلصَّـٰلِحَـٰتِ أَنَّ لَهُمْ أَجْرًا حَسَنًا",
    },
    {
      n: 3,
      text: "مَّـٰكِثِينَ فِيهِ أَبَدًا",
    },
    {
      n: 4,
      text: "وَيُنذِرَ ٱلَّذِينَ قَالُوا۟ ٱتَّخَذَ ٱللَّهُ وَلَدًا",
    },
  ],
  ayahText:
    "ٱلْحَمْدُ لِلَّهِ ٱلَّذِىٓ أَنزَلَ عَلَىٰ عَبْدِهِ ٱلْكِتَـٰبَ وَلَمْ يَجْعَل لَّهُۥ عِوَجًا قَيِّمًا لِّيُنذِرَ بَأْسًا شَدِيدًا مِّن لَّدُنْهُ وَيُبَشِّرَ ٱلْمُؤْمِنِينَ ٱلَّذِينَ يَعْمَلُونَ ٱلصَّـٰلِحَـٰتِ أَنَّ لَهُمْ أَجْرًا حَسَنًا مَّـٰكِثِينَ فِيهِ أَبَدًا وَيُنذِرَ ٱلَّذِينَ قَالُوا۟ ٱتَّخَذَ ٱللَّهُ وَلَدًا",
  cards: [
    {
      ar: "ٱلْحَمْدُ",
      ayah: 1,
      meaning: "the praise",
      state: "raf",
      term: "مُبْتَدَأ",
      explain:
        "This is what the sentence is about. In grammar terms it's called the مُبْتَدَأ — the \"starting point\" of the sentence.",
    },
    {
      ar: "لِلَّهِ",
      ayah: 1,
      meaning: "for/to Allah",
      state: "khafd",
      term: "جَرّ بِاللَّام",
      explain:
        "The لِ at the front means \"for,\" which is why the word ends in -i. There's a hidden \"is\" here that Arabic doesn't say out loud — the missing word is called the خَبَر مَحْذُوف (\"the predicate that's been dropped\"). Full meaning: \"praise <i>is</i> for Allah.\"",
    },
    {
      ar: "ٱلَّذِى",
      ayah: 1,
      meaning: "who",
      state: "khafd",
      term: "اسْم مَوْصُول",
      explain:
        "This word links back to describe Allah — it starts a new description. Grammarians call this an اسْم مَوْصُول (\"connecting noun\").",
    },
    {
      ar: "أَنزَلَ",
      ayah: 1,
      meaning: "He sent down",
      state: "none",
      term: "فِعْل",
      explain:
        "Past-tense verb. Notice there's no separate word for \"He\" — it's built into the verb shape itself. This is called فَاعِلٌ مُسْتَتِر (\"a hidden doer\").",
    },
    {
      ar: "عَلَىٰ عَبْدِهِ",
      ayah: 1,
      meaning: "upon His servant",
      state: "khafd",
      term: "جَارّ وَمَجْرُور",
      explain: "Tells us who received the Book — the Prophet ﷺ.",
    },
    {
      ar: "ٱلْكِتَـٰبَ",
      ayah: 1,
      meaning: "the Book",
      state: "nasb",
      term: "مَفْعُول بِه",
      explain:
        "This is the thing that got sent down — the مَفْعُول بِه (\"the thing acted upon\").",
    },
    {
      ar: "وَلَمْ يَجْعَل",
      ayah: 1,
      meaning: "and did not make",
      state: "none",
      term: "فِعْل",
      explain:
        "لَمْ is a small word that flips a present-tense verb into a negative-past meaning — \"did not.\" Again, \"He\" is hidden inside the verb.",
    },
    {
      ar: "عِوَجًا",
      ayah: 1,
      meaning: "crookedness",
      state: "nasb",
      term: "مَفْعُول بِه",
      explain: "The thing that does <i>not</i> exist in the Book — no flaw, no deviation.",
    },
    {
      ar: "قَيِّمًا",
      ayah: 2,
      meaning: "straight/upright",
      state: "nasb",
      term: "حَال",
      explain:
        "This describes the <i>condition</i> the Book was in — grammarians call this a حَال (\"state-word\"). It answers: how was the Book when it came down? Straight, sound.",
    },
    {
      ar: "لِيُنذِرَ",
      ayah: 2,
      meaning: "to warn",
      state: "nasb",
      term: "لَام التَّعْلِيل",
      explain:
        "This لِ means \"in order to\" — it's called لَام التَّعْلِيل (\"the lām of reason\"), and it tells you <i>why</i> the Book was sent down.",
    },
    {
      ar: "بَأْسًا شَدِيدًا",
      ayah: 2,
      meaning: "a severe punishment",
      state: "nasb",
      term: "مَفْعُول بِه + صِفَة",
      explain:
        "\"Punishment\" is what's being warned about; \"severe\" describes it and matches its ending.",
    },
    {
      ar: "مِنْ لَدُنْهُ",
      ayah: 2,
      meaning: "from Him",
      state: "khafd",
      term: "جَارّ وَمَجْرُور",
      explain: "Tells us the source of the punishment.",
    },
    {
      ar: "وَيُبَشِّرَ ٱلْمُؤْمِنِينَ",
      ayah: 2,
      meaning: "and to give good news to the believers",
      state: "nasb",
      term: "مَفْعُول بِه",
      explain:
        "\"Believers\" ends in ي instead of the usual -a, because it's a special plural type called جَمْع مُذَكَّر سَالِم (\"sound masculine plural\") — these always take ي as their object/genitive marker.",
    },
    {
      ar: "ٱلَّذِينَ يَعْمَلُونَ ٱلصَّـٰلِحَـٰتِ",
      ayah: 2,
      meaning: "who do righteous deeds",
      state: "none",
      term: "جُمْلَة صِفَة",
      explain:
        "Here \"they\" (و) is visible on the verb, not hidden. \"Righteous deeds\" is a جَمْع مُؤَنَّث سَالِم (\"sound feminine plural\") — this type takes -i instead of -a as its object marker, a special exception worth remembering.",
    },
    {
      ar: "أَنَّ لَهُمْ أَجْرًا حَسَنًا",
      ayah: 2,
      meaning: "that they will have a good reward",
      state: "none",
      term: "جُمْلَة",
      explain:
        "أَنَّ means \"that\" and introduces the actual content of the good news. This whole clause together acts as a second object of \"give good news\" — even though it's a full sentence on its own.",
    },
    {
      ar: "مَاكِثِينَ فِيهِ أَبَدًا",
      ayah: 3,
      meaning: "remaining in it forever",
      state: "nasb",
      term: "حَال",
      explain:
        "Another حَال — describes the believers' condition (staying in Paradise). \"Forever\" tells us how long.",
    },
    {
      ar: "وَيُنذِرَ ٱلَّذِينَ قَالُوا۟",
      ayah: 4,
      meaning: "and to warn those who said",
      state: "none",
      term: "فِعْل وَصِلَة",
      explain: "Here \"they\" (و) is visible again, attached to \"said.\"",
    },
    {
      ar: "ٱتَّخَذَ ٱللَّهُ وَلَدًا",
      ayah: 4,
      meaning: "Allah has taken a son",
      state: "none",
      term: "مَقُول الْقَوْل",
      explain:
        "This is the exact thing they said — sitting inside the sentence as the object of \"said.\" Grammarians call this مَقُول الْقَوْل (\"the content of what was said\").",
    },
  ],
  patterns: [
    "Check the ending: <b>-u</b> = subject, <b>-a</b> = object, <b>-i</b> = after a linking word.",
    "Look for a hidden \"he/she/they\" inside verbs (فَاعِلٌ مُسْتَتِر).",
    "Small trigger words (لِ، لَمْ، أَنَّ) explain <i>why</i> an ending changed.",
    "Some words describe a <i>state</i> rather than being an object — that's a حَال.",
    "A whole clause can act as a single object, just like a single word can.",
  ],
};

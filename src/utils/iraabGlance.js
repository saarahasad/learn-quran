/** Extract at-a-glance iʿrāb metadata from a parsed row. */

export const IRAAB_CASES = [
  { id: "raf", label: "رفع", labelEn: "Raised", sign: "ضمة" },
  { id: "nasb", label: "نصب", labelEn: "Accusative", sign: "فتحة" },
  { id: "jarr", label: "جر", labelEn: "Genitive", sign: "كسرة" },
  { id: "jazm", label: "جزم", labelEn: "Jussive", sign: "سكون" },
  { id: "mabni", label: "مبني", labelEn: "Fixed", sign: "—" },
];

const ROLE_RULES = [
  { re: /نَائِبُ فَاعِل|نائب فاعل/, ar: "نائب فاعل", en: "Passive subject" },
  { re: /فَاعِل|فاعل/, ar: "فاعل", en: "Subject" },
  { re: /مَفْعُول بِه|مفعول بِه|مَفْعُول/, ar: "مفعول", en: "Object" },
  { re: /خَبَر|خبر/, ar: "خبر", en: "Predicate" },
  { re: /مُبْتَدَأ|مبتدأ/, ar: "مبتدأ", en: "Topic" },
  { re: /بَدَل|بدل/, ar: "بدل", en: "Substitute" },
  { re: /حَال|حال/, ar: "حال", en: "State" },
  { re: /نَعْت|نعت/, ar: "نعت", en: "Description" },
  { re: /مَعْطُوف|معطوف/, ar: "معطوف", en: "Conjoined" },
  { re: /مُضَاف إِلَيْه|مضاف إليه/, ar: "مضاف إليه", en: "Possessed" },
  { re: /تَمْيِيز|تمييز/, ar: "تمييز", en: "Specification" },
  { re: /ظَرْف|ظرف/, ar: "ظرف", en: "Adverb" },
  { re: /اسْمُ كَانَ/, ar: "اسم كان", en: "Kāna subject" },
  { re: /خَبَرُ كَانَ/, ar: "خبر كان", en: "Kāna predicate" },
  { re: /صِلَة/, ar: "صلة", en: "Relative clause" },
  { re: /حَرْف جَر|حرف جر/, ar: "حرف جر", en: "Preposition" },
  { re: /حَرْف عَطْف/, ar: "حرف عطف", en: "Conjunction" },
  { re: /ضَمِير/, ar: "ضمير", en: "Pronoun" },
];

function plainFromRow(row) {
  return `${row.arHtml ?? ""} ${row.typeLabel ?? ""}`.replace(/<[^>]+>/g, " ");
}

export function extractCaseId(text) {
  if (/مَجْزُوم|مجزوم|جَزْم/.test(text)) return "jazm";
  if (/مَبْنِي|مبني/.test(text) && !/مَرْفُوع|مَنْصُوب|مَجْرُور/.test(text)) return "mabni";
  if (/مَرْفُوع|مرفوع|رَفْع|رفع/.test(text)) return "raf";
  if (/مَنْصُوب|منصوب|نَصْب(?! و)/.test(text)) return "nasb";
  if (/مَجْرُور|مجرور|جَرّ|جر/.test(text)) return "jarr";
  if (/مَبْنِي|مبني/.test(text)) return "mabni";
  return null;
}

export function extractRole(text) {
  for (const rule of ROLE_RULES) {
    if (rule.re.test(text)) return { ar: rule.ar, en: rule.en };
  }
  if (/فِعْل|فعل/.test(text)) return { ar: "فعل", en: "Verb" };
  if (/حَرْف|حرف/.test(text)) return { ar: "حرف", en: "Particle" };
  return { ar: "اسم", en: "Noun" };
}

export function extractSign(text) {
  if (/الْفَتْحَة/.test(text)) return "فتحة";
  if (/الضَّمَّة|الضَّمَّةُ/.test(text)) return "ضمة";
  if (/الْكَسْرَة/.test(text)) return "كسرة";
  if (/السُّكُون|السكون/.test(text)) return "سكون";
  if (/الْيَاءُ/.test(text)) return "ياء";
  if (/الْأَلِفُ/.test(text)) return "ألف";
  if (/ثُبُوتُ النُّون/.test(text)) return "نون";
  if (/حَذْفِ النُّون/.test(text)) return "حذف نون";
  return null;
}

/** One-line “why” for glance chip — first clause before comma. */
export function extractSummaryAr(arPlain) {
  const first = arPlain.split(/[،.]/)[0]?.trim() ?? arPlain;
  return first.length > 72 ? `${first.slice(0, 70)}…` : first;
}

export function buildGlanceMeta(row) {
  const plain = plainFromRow(row);
  const caseId = extractCaseId(plain);
  const role = extractRole(plain);
  const sign = extractSign(plain);
  const caseMeta = IRAAB_CASES.find((c) => c.id === caseId) ?? null;
  const arPlain = plain.replace(/\s+/g, " ").trim();

  return {
    caseId,
    caseLabel: caseMeta?.label ?? null,
    caseLabelEn: caseMeta?.labelEn ?? null,
    roleAr: role.ar,
    roleEn: role.en,
    sign,
    typeKind: row.typeKind,
    typeLabel: row.typeLabel,
    summaryAr: extractSummaryAr(arPlain),
    chipLabel: [role.ar, caseMeta?.label].filter(Boolean).join(" · "),
  };
}

/**
 * Knowledge panels for Kingdom of Iʿrāb halls —
 * pulls real matn / Tuḥfat / mind-map content when available.
 */
import {
  AJRUMIYYAH_CHAPTERS,
  ajrumiyyahStudyPath,
} from "./ajrumiyyahCourse.js";
import {
  hasTuhfatCommentary,
  tuhfatChapterSections,
} from "./ajrumiyyahTuhfatCommentary.js";
import { MARFUAT_MINDMAP } from "./marfuatMindMap.js";
import { ALAMAT_IRAB_MINDMAP } from "./alamatIrabMindMap.js";

function chapterById(id) {
  return AJRUMIYYAH_CHAPTERS.find((c) => c.id === id) || null;
}

function matnLines(chapterId, max = 3) {
  const ch = chapterById(chapterId);
  if (!ch?.lines?.length) return [];
  return ch.lines.slice(0, max).map(([ar, en], i) => ({
    ar,
    en,
    lineIndex: i,
  }));
}

function marfuatBranch(branchId) {
  return MARFUAT_MINDMAP.find((b) => b.id === branchId) || null;
}

function alamatSign(castleId, doorId) {
  const caseId =
    castleId === "rafa"
      ? "raf"
      : castleId === "nasb"
        ? "nasb"
        : castleId === "khafd"
          ? "khafd"
          : "jazm";
  const branch = ALAMAT_IRAB_MINDMAP.find((b) => b.id === caseId);
  if (!branch) return null;

  const aliases = {
    dammah: "dammah",
    waw: "waw",
    alif: castleId === "rafa" ? "alif-raf" : "alif-nasb",
    "thubut-nun": "nun-raf",
    fatha: "fatha",
    fathah: castleId === "khafd" ? "fatha-khafd" : "fatha",
    ya: castleId === "nasb" ? "ya-nasb" : "ya-khafd",
    "ya-muthanna": "ya-nasb",
    "ya-jam": "ya-nasb",
    kasrah: castleId === "nasb" ? "kasrah-nasb" : "kasrah",
    "hadhf-nun":
      castleId === "jazm" ? "hadhf-jazm" : "hadhf-nun-nasb",
    sukun: "sukun",
    "hadhf-illah": "hadhf-jazm",
    "hadhf-harf": "hadhf-jazm",
    "hadhf-jazm": "hadhf-jazm",
  };
  const want = aliases[doorId] || doorId;
  return (
    branch.signs.find((s) => s.id === want || s.id === doorId) ||
    branch.signs.find((s) => s.id.includes(doorId)) ||
    null
  );
}

/**
 * Full Tuḥfat commentary for the given chapter lines (as published).
 * `lineIdxs` omitted / null → every section in that chapter.
 * Returns one unit per Tuḥfat “chapter” so the UI can pair each title with
 * its own commentary ‖ explanation split (same layout as the study site).
 * @returns {{
 *   html: string|null,
 *   titleAr: string|null,
 *   titleEn: string|null,
 *   sections: Array<{ lineIdx: number, html: string, titleAr: string|null, titleEn: string|null }>
 * }}
 */
export function buildTuhfatCommentary(chapterId, lineIdxs) {
  const empty = { html: null, titleAr: null, titleEn: null, sections: [] };
  if (!chapterId || !hasTuhfatCommentary(chapterId)) return empty;
  const all = tuhfatChapterSections(chapterId);
  if (!all.length) return empty;

  const wanted =
    lineIdxs == null
      ? all
      : all.filter((s) => lineIdxs.includes(s.lineIdx));
  if (!wanted.length) return empty;

  const sections = wanted
    .map((s) => ({
      lineIdx: s.lineIdx,
      html: s.html || "",
      titleAr: s.titleAr || null,
      titleEn: s.titleEn || null,
    }))
    .filter((s) => s.html);

  return {
    html: sections.map((s) => s.html).join("") || null,
    titleAr: sections[0]?.titleAr || null,
    titleEn: sections[0]?.titleEn || null,
    sections,
  };
}

/** @deprecated use buildTuhfatCommentary */
export function buildTuhfatCommentaryHtml(chapterId, lineIdxs) {
  return buildTuhfatCommentary(chapterId, lineIdxs).html;
}

/** Role id → chapter / mind-map / Tuḥfat line mapping */
const ROLE_META = {
  fail: {
    chapterId: "fail",
    marfuatId: "fail",
    ready: true,
    tuhfatLines: [0, 1, 3],
  },
  naib: {
    chapterId: "naib-fail",
    marfuatId: "naib",
    ready: true,
    tuhfatLines: [0, 1, 3],
  },
  mubtada: {
    chapterId: "mubtada-khabar",
    marfuatId: "mubtada",
    ready: true,
    tuhfatLines: [0, 3],
  },
  khabar: {
    chapterId: "mubtada-khabar",
    marfuatId: "khabar",
    ready: true,
    tuhfatLines: [0, 7],
  },
  "ism-kana": {
    chapterId: "awamil-mubtada",
    marfuatId: "ism-kana",
    ready: true,
    tuhfatLines: [1],
  },
  "khabar-inna": {
    chapterId: "awamil-mubtada",
    marfuatId: "khabar-inna",
    ready: true,
    tuhfatLines: [5],
  },
  "tabi-marfu": {
    chapterId: "marfuat",
    marfuatId: "tabi",
    ready: true,
    tuhfatLines: [0],
  },
  "mudari-raf": {
    chapterId: "afal",
    ready: true,
    verb: true,
    tuhfatLines: [0, 2, 4, 6],
  },

  mafool: { chapterId: "mafool-bih" },
  masdar: { chapterId: "masdar" },
  "zarf-zaman": { chapterId: "zarf" },
  "zarf-makan": { chapterId: "zarf" },
  hal: { chapterId: "hal" },
  tamyiz: { chapterId: "tamyiz" },
  mustathna: { chapterId: "istithna" },
  "ism-la": { chapterId: "la-nafiya" },
  munada: { chapterId: "munada" },
  "mafool-ajl": { chapterId: "mafool-ajli" },
  "mafool-maah": { chapterId: "mafool-maah" },
  "khabar-kana": {
    chapterId: "awamil-mubtada",
    ready: true,
    tuhfatLines: [1],
  },
  "ism-inna": {
    chapterId: "awamil-mubtada",
    ready: true,
    tuhfatLines: [5],
  },
  "tabi-mansub": { chapterId: "tawabi" },
  "mudari-an": { chapterId: "afal", verb: true, tuhfatLines: [7] },
  "mudari-lan": { chapterId: "afal", verb: true, tuhfatLines: [7] },
  "mudari-kay": { chapterId: "afal", verb: true, tuhfatLines: [7] },
  "mudari-idhan": { chapterId: "afal", verb: true, tuhfatLines: [7] },

  majroor: { chapterId: "majrurat" },
  mudaf: { chapterId: "majrurat" },
  "tabi-makhfud": { chapterId: "tawabi" },

  "after-lam": { chapterId: "afal", verb: true, tuhfatLines: [0, 2, 6] },
  "after-lamma": { chapterId: "afal", verb: true, tuhfatLines: [0, 2, 6] },
  "after-lam-amr": { chapterId: "afal", verb: true, tuhfatLines: [0, 2, 3] },
  "after-la-nahy": { chapterId: "afal", verb: true, tuhfatLines: [0, 2, 6] },
  "jawab-talab": { chapterId: "afal", verb: true, tuhfatLines: [0, 2, 6] },
  "after-in": { chapterId: "afal", verb: true, tuhfatLines: [0, 2, 6] },
};

/**
 * @returns {{
 *   status: "ready"|"matn"|"coming-soon",
 *   titleAr: string,
 *   titleEn: string,
 *   why?: string,
 *   intro?: string,
 *   matnAr?: string,
 *   defAr?: string,
 *   defEn?: string,
 *   commentaryHtml?: string|null,
 *   topics?: Array<{ar:string,en:string,defEn?:string}>,
 *   examples?: Array<{ar:string,en:string}>,
 *   matnPreview?: Array<{ar:string,en:string}>,
 *   studyHref?: string,
 *   note?: string,
 * }}
 */
export function getRoleKnowledge(role, castleId) {
  const meta = ROLE_META[role.id] || {};
  const chapterId = meta.chapterId;
  const ch = chapterId ? chapterById(chapterId) : null;
  const hasTuhfat = chapterId ? hasTuhfatCommentary(chapterId) : false;
  const branch = meta.marfuatId ? marfuatBranch(meta.marfuatId) : null;
  const studyLine =
    Array.isArray(meta.tuhfatLines) && meta.tuhfatLines.length
      ? meta.tuhfatLines[meta.tuhfatLines.length - 1]
      : branch?.lineIndex ?? 0;
  const commentary = buildTuhfatCommentary(
    chapterId,
    meta.tuhfatLines ?? null
  );
  const commentaryHtml = commentary.html;
  const commentarySections = commentary.sections;
  const sectionTitleAr = commentary.titleAr;
  const sectionTitleEn = commentary.titleEn;

  if (branch) {
    // Prefer full Tuḥfat commentary as-is; mind-map is only a fallback.
    const topics = commentaryHtml
      ? []
      : (branch.topics || []).map((t) => ({
          ar: t.ar,
          en: t.en,
          matnAr: t.matnAr,
          defAr: t.defAr,
          defEn: t.defEn || "",
          memorize: t.memorize || "",
          leaves: (t.leaves || []).map((l) => ({
            ar: l.ar,
            en: l.en,
            defAr: l.defAr,
            defEn: l.defEn,
            examples: l.examples || [],
          })),
        }));
    return {
      status: "ready",
      titleAr: branch.ar || role.ar,
      titleEn: branch.en || role.en,
      why: role.why,
      intro: commentaryHtml ? null : branch.intro,
      matnAr: commentaryHtml ? null : branch.matnAr,
      defAr: commentaryHtml ? null : branch.defAr,
      defEn: commentaryHtml ? null : branch.defEn,
      langAr: branch.langAr,
      istilahAr: branch.istilahAr,
      chapterId,
      tuhfatLines: meta.tuhfatLines || null,
      commentaryHtml,
      commentarySections,
      sectionTitleAr,
      sectionTitleEn,
      topics,
      examples: [],
      studyHref: ajrumiyyahStudyPath(
        branch.studyChapter || chapterId,
        studyLine
      ),
      note: null,
    };
  }

  // Matn available — attach Tuḥfat when this role’s lines exist
  if (ch?.lines?.length) {
    const preview = matnLines(chapterId, 4);
    const readyEnough = Boolean(commentaryHtml || (meta.ready && hasTuhfat));
    return {
      status: readyEnough ? "ready" : "matn",
      titleAr: role.ar,
      titleEn: role.en,
      why: role.why,
      intro: commentaryHtml
        ? null
        : ch.translit
          ? `From Ājurrūmiyyah · ${ch.translit}`
          : "From the Ājurrūmiyyah matn",
      matnAr: commentaryHtml ? null : preview[0]?.ar,
      defEn: commentaryHtml
        ? null
        : preview.map((l) => l.en).filter(Boolean).join(" "),
      chapterId,
      tuhfatLines: meta.tuhfatLines || null,
      commentaryHtml,
      commentarySections,
      sectionTitleAr,
      sectionTitleEn,
      matnPreview: commentaryHtml ? [] : preview,
      examples: [],
      topics: [],
      studyHref: ajrumiyyahStudyPath(chapterId, studyLine),
      note: commentaryHtml
        ? null
        : hasTuhfat
          ? null
          : "Full Tuḥfat commentary for this section is coming soon — matn is available to study now.",
    };
  }

  return {
    status: "coming-soon",
    titleAr: role.ar,
    titleEn: role.en,
    why: role.why,
    intro: `This ${castleId || "castle"} board is on the map, but its detailed commentary is not in the app yet.`,
    note: "Coming soon — check back after more Tuḥfat chapters are added.",
    chapterId: chapterId || null,
    tuhfatLines: null,
    commentaryHtml: null,
    commentarySections: [],
    topics: [],
    examples: [],
  };
}

/**
 * Knowledge for a castle door (ʿalāmah / sign).
 */
export function getDoorKnowledge(castle, door) {
  if (door?.kind === "mahall" || door?.id === "mahall") {
    const place =
      castle.id === "rafa"
        ? "رَفْعٍ"
        : castle.id === "nasb"
          ? "نَصْبٍ"
          : castle.id === "khafd"
            ? "جَرٍّ"
            : "…";
    return {
      status: "ready",
      kind: "محلي · maḥallī",
      titleAr: "بَابُ الْمَحَلّ",
      titleEn: "Door of maḥall (assigned case-place)",
      badge: "محل",
      intro:
        "The castle is the case-place. Mabnī travelers do not change their ending — they enter through this door and we say في محل …",
      defAr: `مَبْنِيٌّ · فِي مَحَلِّ ${place}`,
      defEn: `Indeclinable — in the place of ${castle.name}. Ending fixed (بناء); case assigned (محل).`,
      examples: [
        { ar: "جَاءَ هَذَا", en: "هذا فاعل مبني في محل رفع" },
        { ar: "رَأَيْتُ هَذَا", en: "هذا مفعول به مبني في محل نصب" },
        { ar: "مَرَرْتُ بِهَذَا", en: "هذا مجرور مبني في محل جر" },
      ],
      worn: door.worn || [],
      note: "Opposite of لا محل له من الإعراب — that traveler never opens a castle.",
      commentaryHtml: null,
      commentarySections: [],
      chapterId: null,
      tuhfatLines: null,
      topics: [],
      positions: [],
    };
  }

  const sign = alamatSign(castle.id, door.id);
  const caseBranch = ALAMAT_IRAB_MINDMAP.find((b) => {
    if (castle.id === "rafa") return b.id === "raf";
    if (castle.id === "nasb") return b.id === "nasb";
    if (castle.id === "khafd") return b.id === "khafd";
    return b.id === "jazm";
  });

  if (sign) {
    const lineIdx = sign.lineIndex;
    const commentary =
      typeof lineIdx === "number"
        ? buildTuhfatCommentary("alamat-irab", [lineIdx])
        : { html: null, titleAr: null, titleEn: null, sections: [] };
    const commentaryHtml = commentary.html;
    // Positions/mind-map only when Tuḥfat for this sign is missing
    const positions = commentaryHtml
      ? []
      : (sign.positions || []).map((p) => ({
          ar: p.ar,
          en: p.en,
          rule: p.rule || "",
          defAr: p.defAr || "",
          defEn: p.defEn || p.rule || "",
          examples: (p.examples || []).map((ex) =>
            typeof ex === "string" ? { ar: ex, en: "" } : ex
          ),
          cases: p.cases || [],
        }));
    return {
      status: "ready",
      kind: door.kind === "ali" ? "أصلية · original" : "فرعية · subsidiary",
      titleAr: sign.ar || door.name,
      titleEn: sign.en || door.name,
      badge: door.badge,
      intro: commentaryHtml ? null : sign.definition || door.blurb,
      matnAr: commentaryHtml ? null : sign.matnAr,
      defAr: commentaryHtml ? null : sign.defAr,
      defEn: commentaryHtml ? null : sign.defEn,
      memorize: commentaryHtml ? null : sign.memorize,
      chapterId: "alamat-irab",
      tuhfatLines: typeof lineIdx === "number" ? [lineIdx] : null,
      commentaryHtml,
      commentarySections: commentary.sections || [],
      sectionTitleAr: commentary.titleAr,
      sectionTitleEn: commentary.titleEn,
      positions,
      examples: [],
      worn: door.worn || [],
      studyHref: ajrumiyyahStudyPath("alamat-irab", sign.lineIndex ?? 0),
      note: null,
      caseIntro: caseBranch?.intro || null,
    };
  }

  return {
    status: "matn",
    kind: door.kind === "ali" ? "أصلية · original" : "فرعية · subsidiary",
    titleAr: door.name,
    titleEn: door.name,
    badge: door.badge,
    intro: door.blurb,
    worn: door.worn || [],
    studyHref: ajrumiyyahStudyPath("alamat-irab", 0),
    note: "Full sign commentary coming soon — door stamp and wearers are listed below.",
    chapterId: "alamat-irab",
    tuhfatLines: null,
    commentaryHtml: null,
    commentarySections: [],
    positions: [],
    examples: [],
  };
}

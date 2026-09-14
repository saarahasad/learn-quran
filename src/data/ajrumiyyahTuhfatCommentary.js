import { KALAM_AFTER, KALAM_END } from "./tuhfat/kalam.js";
import { KALAM_TYPES_AFTER, KALAM_TYPES_END } from "./tuhfat/kalamTypes.js";
import { ALAMAT_ISM_AFTER, ISM_QUESTIONS, ISM_EXERCISES } from "./tuhfat/alamatIsm.js";
import { ALAMAT_FAIL_AFTER, FAIL_QUESTIONS, FAIL_EXERCISES } from "./tuhfat/alamatFail.js";
import { ALAMAT_HARF_AFTER, HARF_EXERCISES } from "./tuhfat/alamatHarf.js";
import { IRAB_AFTER, IRAB_EXERCISES, IRAB_END, IRAB_TYPES_END } from "./tuhfat/irab.js";
import { ALAMAT_IRAB_AFTER, ALIF_EXERCISES, ALIF_END, NUN_EXERCISES, NUN_END } from "./tuhfat/alamatIrab.js";
import {
  ALAMAT_NASB_AFTER,
  FATHA_EXERCISES,
  FATHA_END,
  ALIF_NASB_END,
  KASRA_EXERCISES,
  YA_EXERCISES,
  HAZF_NUN_EXERCISES,
  NASB_REVIEW_END,
} from "./tuhfat/alamatNasb.js";
import {
  ALAMAT_KHAFD_AFTER,
  KASRA_KHAFD_END,
  YA_KHAFD_EXERCISES,
  YA_KHAFD_END,
  FATHA_KHAFD_EXERCISES,
  FATHA_KHAFD_END,
} from "./tuhfat/alamatKhafd.js";
import {
  ALAMAT_JAZM_AFTER,
  JAZM_HAZF_EXERCISES,
  JAZM_END,
} from "./tuhfat/alamatJazm.js";
import { ALAMAT_MUARABAT_AFTER } from "./tuhfat/alamatMuarabat.js";
import {
  IRAAB_HARUF_AFTER,
  IRAAB_HARUF_EXERCISES,
  IRAAB_HARUF_END,
} from "./tuhfat/iraabHaruf.js";
import { AFAL_AFTER, AFAL_END } from "./tuhfat/afal.js";
import { NAWASIB_AFTER, NAWASIB_EXERCISES, NAWASIB_END } from "./tuhfat/nawasib.js";
import { JAWAZIM_AFTER, JAWAZIM_EXERCISES, JAWAZIM_END } from "./tuhfat/jawazim.js";
import { MARFUAT_AFTER, MARFUAT_END } from "./tuhfat/marfuat.js";
import { MANSUBAT_AFTER, MANSUBAT_END } from "./tuhfat/mansubat.js";
import {
  MAFOOL_BIH_AFTER,
  MAFOOL_BIH_EXERCISES,
  MAFOOL_BIH_END,
} from "./tuhfat/mafoolBih.js";
import {
  MASDAR_AFTER,
  MASDAR_EXERCISES,
  MASDAR_END,
} from "./tuhfat/masdar.js";
import {
  ZARF_AFTER,
  ZARF_EXERCISES,
  ZARF_END,
} from "./tuhfat/zarf.js";
import { HAL_AFTER, HAL_EXERCISES, HAL_END } from "./tuhfat/hal.js";
import { TAMYIZ_AFTER, TAMYIZ_EXERCISES, TAMYIZ_END } from "./tuhfat/tamyiz.js";
import { ISTITHNA_AFTER, ISTITHNA_END } from "./tuhfat/istithna.js";
import { LA_NAFIYA_AFTER, LA_NAFIYA_END } from "./tuhfat/laNafiya.js";
import { MUNADA_AFTER, MUNADA_END } from "./tuhfat/munada.js";
import { MAFOOL_LAHU_AFTER, MAFOOL_LAHU_END } from "./tuhfat/mafoolLahu.js";
import { MAFOOL_MAAH_AFTER, MAFOOL_MAAH_END } from "./tuhfat/mafoolMaah.js";
import { MAJRURAT_AFTER, MAJRURAT_END } from "./tuhfat/majrurat.js";
import { FAIL_AFTER, FAIL_BAB_EXERCISES, FAIL_BAB_END } from "./tuhfat/fail.js";
import {
  NAIB_FAIL_AFTER,
  NAIB_FAIL_EXERCISES,
  NAIB_FAIL_END,
} from "./tuhfat/naibFail.js";
import {
  MUBTADA_KHABAR_AFTER,
  MUBTADA_KHABAR_EXERCISES,
  MUBTADA_KHABAR_END,
} from "./tuhfat/mubtadaKhabar.js";
import {
  AWAMIL_MUBTADA_AFTER,
  AWAMIL_MUBTADA_EXERCISES,
  AWAMIL_MUBTADA_END,
} from "./tuhfat/awamilMubtada.js";
import { blocksToHtml } from "../utils/ajrumiyyahTuhfatRender.js";
import { BAKED_PEN_MARKS } from "./ajrumiyyahPenMarks.js";
import { hashHtml, htmlWithPenMarks } from "../utils/commentaryPen.js";

function applyBakedInk(chapterId, lineIdx, html) {
  if (!html) return html;
  const key = `ajr-pen:study:${chapterId}:${lineIdx}:tuhfat`;
  const baked = BAKED_PEN_MARKS[key];
  if (!baked?.marks?.length) return html;
  if (baked.hash !== hashHtml(html)) return html;
  return htmlWithPenMarks(html, baked.marks);
}

/** Tuḥfat sharḥ blocks keyed by chapter → matn line index */
export const TUHFAT_BLOCKS_AFTER = {
  kalam: { ...KALAM_AFTER, ...KALAM_TYPES_AFTER, ...ALAMAT_ISM_AFTER, ...ALAMAT_FAIL_AFTER, ...ALAMAT_HARF_AFTER },
  irab: IRAB_AFTER,
  "alamat-irab": { ...ALAMAT_IRAB_AFTER, ...ALAMAT_NASB_AFTER, ...ALAMAT_KHAFD_AFTER, ...ALAMAT_JAZM_AFTER, ...ALAMAT_MUARABAT_AFTER, ...IRAAB_HARUF_AFTER },
  afal: { ...AFAL_AFTER, ...NAWASIB_AFTER, ...JAWAZIM_AFTER },
  marfuat: MARFUAT_AFTER,
  mansubat: MANSUBAT_AFTER,
  "mafool-bih": MAFOOL_BIH_AFTER,
  masdar: MASDAR_AFTER,
  zarf: ZARF_AFTER,
  hal: HAL_AFTER,
  tamyiz: TAMYIZ_AFTER,
  istithna: ISTITHNA_AFTER,
  "la-nafiya": LA_NAFIYA_AFTER,
  munada: MUNADA_AFTER,
  "mafool-ajli": MAFOOL_LAHU_AFTER,
  "mafool-maah": MAFOOL_MAAH_AFTER,
  majrurat: MAJRURAT_AFTER,
  fail: FAIL_AFTER,
  "naib-fail": NAIB_FAIL_AFTER,
  "mubtada-khabar": MUBTADA_KHABAR_AFTER,
  "awamil-mubtada": AWAMIL_MUBTADA_AFTER,
};

/** Questions/exercises after each matn-line section (book order) — single section or array */
export const TUHFAT_DRILLS_AFTER = {
  kalam: {
    0: KALAM_END,
    1: KALAM_TYPES_END,
    2: [ISM_QUESTIONS, ISM_EXERCISES],
    5: [FAIL_QUESTIONS, FAIL_EXERCISES],
    6: HARF_EXERCISES,
  },
  irab: {
    0: [IRAB_EXERCISES, IRAB_END],
    1: IRAB_TYPES_END,
  },
  "alamat-irab": {
    // DAMMAH / WAW exercise+questions → interactive drills
    4: [ALIF_EXERCISES, ALIF_END],
    5: [NUN_EXERCISES, NUN_END],
    7: [FATHA_EXERCISES, FATHA_END],
    8: ALIF_NASB_END,
    9: KASRA_EXERCISES,
    10: YA_EXERCISES,
    11: [HAZF_NUN_EXERCISES, NASB_REVIEW_END],
    13: KASRA_KHAFD_END,
    14: [YA_KHAFD_EXERCISES, YA_KHAFD_END],
    15: [FATHA_KHAFD_EXERCISES, FATHA_KHAFD_END],
    18: [JAZM_HAZF_EXERCISES, JAZM_END],
    28: [IRAAB_HARUF_EXERCISES, IRAAB_HARUF_END],
  },
  afal: {
    6: AFAL_END,
    7: [NAWASIB_EXERCISES, NAWASIB_END],
    8: [JAWAZIM_EXERCISES, JAWAZIM_END],
  },
  marfuat: {
    0: MARFUAT_END,
  },
  mansubat: {
    0: MANSUBAT_END,
  },
  "mafool-bih": {
    6: [MAFOOL_BIH_EXERCISES, MAFOOL_BIH_END],
  },
  masdar: {
    4: [MASDAR_EXERCISES, MASDAR_END],
  },
  zarf: {
    3: [ZARF_EXERCISES, ZARF_END],
  },
  hal: {
    3: [HAL_EXERCISES, HAL_END],
  },
  tamyiz: {
    3: [TAMYIZ_EXERCISES, TAMYIZ_END],
  },
  istithna: {
    5: ISTITHNA_END,
  },
  "la-nafiya": {
    5: LA_NAFIYA_END,
  },
  munada: {
    3: MUNADA_END,
  },
  "mafool-ajli": {
    1: MAFOOL_LAHU_END,
  },
  "mafool-maah": {
    2: MAFOOL_MAAH_END,
  },
  majrurat: {
    5: MAJRURAT_END,
  },
  fail: {
    3: [FAIL_BAB_EXERCISES, FAIL_BAB_END],
  },
  "naib-fail": {
    3: [NAIB_FAIL_EXERCISES, NAIB_FAIL_END],
  },
  "mubtada-khabar": {
    7: [MUBTADA_KHABAR_EXERCISES, MUBTADA_KHABAR_END],
  },
  "awamil-mubtada": {
    9: [AWAMIL_MUBTADA_EXERCISES, AWAMIL_MUBTADA_END],
  },
};

function stripTitleBrackets(text) {
  return String(text ?? "")
    .trim()
    .replace(/^\[/, "")
    .replace(/\]$/, "")
    .trim();
}

function sectionTitleFromBlocks(blocks) {
  const first = blocks?.[0];
  if (!first?.ar?.trim().startsWith("[")) return { ar: null, en: null };
  return {
    ar: stripTitleBrackets(first.ar),
    en: stripTitleBrackets(first.en) || null,
  };
}

/**
 * Every bracketed "[...]" title block for a chapter, in book order — not just
 * the first block of each matn-line group. A single matn-line's commentary
 * can introduce several sub-topics (each with its own "[...]" title), and
 * those need their own entries for course-outline navigation.
 */
export function tuhfatChapterCommentaryTitles(chapterId) {
  const blocksMap = TUHFAT_BLOCKS_AFTER[chapterId];
  if (!blocksMap) return [];

  const indices = Object.keys(blocksMap).map(Number).sort((a, b) => a - b);
  const items = [];

  indices.forEach((lineIdx) => {
    let subIdx = 0;
    (blocksMap[lineIdx] || []).forEach((block) => {
      if (!block?.ar?.trim().startsWith("[")) return;
      items.push({
        lineIdx,
        subIdx,
        ar: stripTitleBrackets(block.ar),
        en: stripTitleBrackets(block.en) || null,
      });
      subIdx += 1;
    });
  });

  return items;
}

/**
 * Tuḥfat commentary split by matn-line section.
 * Sharḥ HTML stays in `html`; drills are returned separately so the UI can
 * place them under Commentary ‖ Explanation (equalized heights).
 */
export function tuhfatChapterSections(chapterId) {
  const blocksMap = TUHFAT_BLOCKS_AFTER[chapterId];
  if (!blocksMap) return [];

  const drillsMap = TUHFAT_DRILLS_AFTER[chapterId] ?? {};
  const indices = [...new Set([
    ...Object.keys(blocksMap).map(Number),
    ...Object.keys(drillsMap).map(Number),
  ])].sort((a, b) => a - b);

  const sections = [];

  indices.forEach((lineIdx) => {
    const blocks = blocksMap[lineIdx];
    const hasBlocks = blocks?.length > 0;

    const title = hasBlocks ? sectionTitleFromBlocks(blocks) : { ar: null, en: null };
    const bodyBlocks = hasBlocks ? (title.ar ? blocks.slice(1) : blocks) : [];
    const body = hasBlocks ? blocksToHtml(bodyBlocks.length ? bodyBlocks : blocks) : "";

    const drill = drillsMap[lineIdx];
    const drillList = (Array.isArray(drill) ? drill : drill ? [drill] : []).filter(
      (section) => section?.items?.length,
    );

    if (!body && !drillList.length) return;

    sections.push({
      lineIdx,
      html: applyBakedInk(chapterId, lineIdx, body || ""),
      titleAr: title.ar,
      titleEn: title.en,
      drills: drillList,
    });
  });

  return sections;
}

/** Full Tuḥfat commentary — sharḥ only (drills render as interactive panels) */
export function tuhfatChapterCommentaryHtml(chapterId) {
  const sections = tuhfatChapterSections(chapterId);
  if (!sections.length) return null;
  return sections.map((s) => s.html).filter(Boolean).join("");
}

function drillHasItems(entry) {
  if (!entry) return false;
  if (Array.isArray(entry)) return entry.some((d) => d?.items?.length > 0);
  return entry?.items?.length > 0;
}

export function hasTuhfatCommentary(chapterId) {
  const blocksMap = TUHFAT_BLOCKS_AFTER[chapterId];
  const drillsMap = TUHFAT_DRILLS_AFTER[chapterId];
  const hasBlocks =
    blocksMap &&
    Object.keys(blocksMap).some((k) => blocksMap[k]?.length > 0);
  const hasDrills =
    drillsMap && Object.values(drillsMap).some(drillHasItems);
  return hasBlocks || hasDrills;
}

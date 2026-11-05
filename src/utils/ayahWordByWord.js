import { getJuz30Wbw } from "../data/juz30WordByWord.js";

const ARABIC_LETTER = /[ء-يٱ]/;

/** Split an Uthmani āyah into words, dropping stand-alone waqf signs (ۚ ۖ ۗ …). */
export function arabicTokens(ar) {
  return String(ar ?? "")
    .split(/\s+/)
    .filter((token) => ARABIC_LETTER.test(token));
}

function isPlaceholder(en) {
  return !en || en === "—" || en === "(see translation)";
}

/**
 * One accurate word-by-word list for an āyah: [{ ar, tr, en }].
 *
 * 1. Juz ʿAmma: bundled per-word glosses (works offline), paired with the
 *    API's Arabic words, or the āyah text split into words, when counts match.
 * 2. Otherwise the API's own per-word data.
 * 3. Hand-written local glosses are only used when they are genuinely one per
 *    word — phrase-level glosses are never spread across words by index.
 */
export function buildWordByWord({ surahNumber, ayahNumber, ayahAr, apiWords, localWords }) {
  const api = [...(apiWords ?? [])].sort((a, b) => a.wordNum - b.wordNum);
  const tokens = arabicTokens(ayahAr);
  const wbw = surahNumber && ayahNumber ? getJuz30Wbw(surahNumber, ayahNumber) : null;

  if (wbw) {
    const arabic =
      api.length === wbw.length
        ? api.map((w) => w.textUthmani)
        : tokens.length === wbw.length
          ? tokens
          : null;
    if (arabic) {
      return wbw.map((w, i) => ({ ar: arabic[i], tr: w.tr, en: w.en }));
    }
  }

  const local = (localWords ?? []).filter((w) => w?.ar);
  const localIsPerWord =
    local.length > 0 && local.every((w) => arabicTokens(w.ar).length === 1);

  if (api.length) {
    const useLocal = localIsPerWord && local.length === api.length;
    return api.map((w, i) => ({
      ar: w.textUthmani || local[i]?.ar || "",
      tr: w.transliteration || local[i]?.tr || "",
      en:
        useLocal && !isPlaceholder(local[i].en)
          ? local[i].en
          : w.translation || "",
    }));
  }

  if (localIsPerWord) {
    return local.map((w) => ({ ar: w.ar, tr: w.tr ?? "", en: isPlaceholder(w.en) ? "" : w.en }));
  }

  // Offline with only phrase glosses: show the words without misplaced meanings.
  return tokens.map((ar) => ({ ar, tr: "", en: "" }));
}

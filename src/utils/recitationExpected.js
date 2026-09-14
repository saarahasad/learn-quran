import { fetchAyahWords } from "./hifdhAyahContent.js";
import { normalizeAr } from "./arabicMatch.js";
import { tokenizeArabicTranscript } from "./recitationAlign.js";

/** Build expected word list from bundled āyah data (no mushaf API). */
export function buildExpectedWordsFromAyahs(ayahs, ayahNumbers) {
  const words = [];

  for (const ayahNumber of ayahNumbers) {
    const ayah = ayahs.find((item) => item.n === ayahNumber);
    if (!ayah) continue;

    if (ayah.words?.length) {
      ayah.words.forEach((word, wordIndex) => {
        words.push({
          ar: word.ar,
          en: word.en ?? "",
          ayah: ayahNumber,
          wordIndex,
        });
      });
    } else {
      tokenizeArabicTranscript(ayah.ar).forEach((ar, wordIndex) => {
        words.push({ ar, ayah: ayahNumber, wordIndex });
      });
    }
  }

  return words;
}


/** Load ordered mushaf words for one or more āyāt. */
export async function fetchExpectedWordsForAyahs(
  mushafPage,
  surahNumber,
  ayahNumbers,
  localAyahs = null,
) {
  const words = [];

  for (const ayahNumber of ayahNumbers) {
    const ayahWords = await fetchAyahWords(
      mushafPage,
      surahNumber,
      ayahNumber,
      localAyahs,
    );

    ayahWords.forEach((word, wordIndex) => {
      words.push({
        ar: word.ar,
        en: word.en ?? "",
        ayah: ayahNumber,
        wordIndex,
      });
    });
  }

  return words;
}

/** Expected words after the prompt (first `promptWordCount` words are given). */
export function sliceExpectedAfterPrompt(expectedWords, promptWordCount = 0) {
  if (!promptWordCount) return expectedWords;
  return expectedWords.slice(promptWordCount);
}

export function expectedPlainText(expectedWords) {
  return expectedWords.map((word) => word.ar).join(" ");
}

export function expectedNormalizedTokens(expectedWords) {
  return expectedWords.map((word) => normalizeAr(word.ar)).filter(Boolean);
}

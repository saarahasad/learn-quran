import { getBaqarahGuideByMushafPage } from "../data/baqarahPageGuides.js";
import { GENERATED_SURAHS } from "../data/generatedSurahs.js";
import { JUZ1_GENERATED_SURAHS } from "../data/juz1GeneratedSurahs.js";
import { JUZ30_GENERATED_SURAHS } from "../data/juz30GeneratedSurahs.js";
import { loadAyahWords } from "./mushafPageData.js";

const REVISION_SURAHS_BY_NUMBER = new Map();

for (const surah of [
  ...Object.values(JUZ1_GENERATED_SURAHS),
  ...Object.values(JUZ30_GENERATED_SURAHS),
  ...Object.values(GENERATED_SURAHS),
]) {
  if (surah?.revelationOrder) {
    REVISION_SURAHS_BY_NUMBER.set(surah.revelationOrder, surah);
  }
}

export function getRevisionSurah(surahNumber) {
  return REVISION_SURAHS_BY_NUMBER.get(surahNumber) ?? null;
}

export function getLocalAyah(surahNumber, ayahNumber, localAyahs = null) {
  if (Array.isArray(localAyahs)) {
    const fromSession = localAyahs.find((ayah) => ayah.n === ayahNumber);
    if (fromSession) return fromSession;
  }

  return (
    getRevisionSurah(surahNumber)?.ayahs?.find((ayah) => ayah.n === ayahNumber) ?? null
  );
}

export function mergeAyahWords(localAyah, apiWords) {
  if (!apiWords?.length) {
    return (localAyah?.words ?? []).map((word) => ({
      ar: word.ar,
      en: word.en ?? "",
    }));
  }

  return [...apiWords]
    .sort((a, b) => a.wordNum - b.wordNum)
    .map((word, index) => ({
      ar: word.textUthmani || localAyah?.words?.[index]?.ar || "",
      en: word.translation || localAyah?.words?.[index]?.en || "",
      tr: word.transliteration || "",
    }))
    .filter((word) => word.ar);
}

export async function fetchAyahWords(
  mushafPage,
  surahNumber,
  ayahNumber,
  localAyahs = null,
) {
  const localAyah = getLocalAyah(surahNumber, ayahNumber, localAyahs);
  const apiWords = await loadAyahWords([mushafPage], surahNumber, ayahNumber);
  return mergeAyahWords(localAyah, apiWords);
}

export function getVerseStudy(mushafPage, ayahNumber) {
  const guide = getBaqarahGuideByMushafPage(mushafPage);
  if (!guide?.sections) return null;
  return guide.sections.find(
    (section) => section.type === "verseStudy" && section.verse === ayahNumber,
  ) ?? null;
}

export function extractKeyWords(verseStudy) {
  if (!verseStudy?.phrases) return [];

  const words = [];
  for (const phrase of verseStudy.phrases) {
    for (const word of phrase.words ?? []) {
      if (word.ar && word.gloss) {
        words.push({ ar: word.ar, gloss: word.gloss, points: word.points ?? [] });
      }
    }
  }
  return words;
}

export function getTafsirNote(verseStudy) {
  if (!verseStudy) return null;
  const firstNote = verseStudy.notes?.[0];
  if (firstNote?.points?.length) return firstNote.points.join(" ");
  const firstWordWithPoints = extractKeyWords(verseStudy).find((w) => w.points?.length);
  return firstWordWithPoints?.points?.[0] ?? null;
}

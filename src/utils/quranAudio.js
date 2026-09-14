export const MINSHAWI_RECITER = {
  id: "minshawy",
  label: "Minshawi (Murattal)",
  baseUrl: "https://everyayah.com/data/Minshawy_Murattal_128kbps",
};

function formatAyahAudioKey(surahNumber, ayahNumber) {
  return `${String(surahNumber).padStart(3, "0")}${String(ayahNumber).padStart(3, "0")}`;
}

export function getMinshawiAyahUrl(surahNumber, ayahNumber) {
  return `${MINSHAWI_RECITER.baseUrl}/${formatAyahAudioKey(surahNumber, ayahNumber)}.mp3`;
}

export function hasAyahRecitation(surahNumber, ayahNumber) {
  return (
    Number.isFinite(surahNumber) &&
    Number.isFinite(ayahNumber) &&
    surahNumber >= 1 &&
    surahNumber <= 114 &&
    ayahNumber >= 1
  );
}

import { GENERATED_SURAHS } from "./generatedSurahs.js";
import { JUZ30_GENERATED_SURAHS } from "./juz30GeneratedSurahs.js";

const HAND_AUTHORED_DIARY_SURAHS = [
  { id: "burooj", name: "Al-Burūj", nameAr: "البروج", ayahCount: 22, juz: 30, revelationOrder: 85 },
  { id: "tariq", name: "At-Ṭāriq", nameAr: "الطارق", ayahCount: 17, juz: 30, revelationOrder: 86 },
  { id: "ala", name: "Al-Aʿlā", nameAr: "الأعلى", ayahCount: 19, juz: 30, revelationOrder: 87 },
  { id: "ghashiyah", name: "Al-Ghāshiyah", nameAr: "الغاشية", ayahCount: 26, juz: 30, revelationOrder: 88 },
  { id: "fajr", name: "Al-Fajr", nameAr: "الفجر", ayahCount: 30, juz: 30, revelationOrder: 89 },
  { id: "balad", name: "Al-Balad", nameAr: "البلد", ayahCount: 20, juz: 30, revelationOrder: 90 },
  { id: "adiyat", name: "Al-ʿĀdiyāt", nameAr: "العاديات", ayahCount: 11, juz: 30, revelationOrder: 100 },
];

const GENERATED_DIARY_SURAHS = [
  GENERATED_SURAHS.qariah,
  GENERATED_SURAHS.takathur,
  GENERATED_SURAHS.asr,
  GENERATED_SURAHS.humazah,
  GENERATED_SURAHS.feel,
  GENERATED_SURAHS.quraysh,
  GENERATED_SURAHS.kawthar,
  GENERATED_SURAHS.kafirun,
];

const surahsByNumber = new Map();

[
  ...Object.values(JUZ30_GENERATED_SURAHS),
  ...HAND_AUTHORED_DIARY_SURAHS,
  ...GENERATED_DIARY_SURAHS,
].forEach((surah) => {
  if (surah) surahsByNumber.set(surah.revelationOrder, surah);
});

export const DIARY_SURAHS = [...surahsByNumber.values()].sort(
  (a, b) => a.revelationOrder - b.revelationOrder,
);

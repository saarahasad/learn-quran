/**
 * Juz 1 diary scope: Al-Fātiḥah (page 1) + Al-Baqarah pages 2–21 (āyāt 1–141).
 * Verse ranges per page from Medina mushaf (Quran.com / QDC).
 */

const BAQARAH_PAGE_GUIDE_HEADLINES = {
  2: "The Book & Guidance",
  3: "The second group of people",
  4: "Allah's call to all mankind",
  5: "Reward & evidence",
  6: "Story of Ādam",
  7: "Successive authority on earth",
  8: "Story of Mūsā & Pharaoh",
  9: "Story of Mūsā continues",
  10: "Reward, covenant & cow",
  11: "Covenant & the calf",
};

const JUZ1_PAGE_VERSES = [
  { page: 1, surah: 1, verseStart: 1, verseEnd: 7, label: "Al-Fātiḥah", nameAr: "الفاتحة", isSurah: true },
  { page: 2, surah: 2, verseStart: 1, verseEnd: 5 },
  { page: 3, surah: 2, verseStart: 6, verseEnd: 15 },
  { page: 4, surah: 2, verseStart: 17, verseEnd: 24 },
  { page: 5, surah: 2, verseStart: 25, verseEnd: 29 },
  { page: 6, surah: 2, verseStart: 30, verseEnd: 37 },
  { page: 7, surah: 2, verseStart: 38, verseEnd: 47 },
  { page: 8, surah: 2, verseStart: 49, verseEnd: 57 },
  { page: 9, surah: 2, verseStart: 58, verseEnd: 61 },
  { page: 10, surah: 2, verseStart: 62, verseEnd: 69 },
  { page: 11, surah: 2, verseStart: 70, verseEnd: 76 },
  { page: 12, surah: 2, verseStart: 77, verseEnd: 83 },
  { page: 13, surah: 2, verseStart: 84, verseEnd: 88 },
  { page: 14, surah: 2, verseStart: 89, verseEnd: 93 },
  { page: 15, surah: 2, verseStart: 94, verseEnd: 101 },
  { page: 16, surah: 2, verseStart: 102, verseEnd: 105 },
  { page: 17, surah: 2, verseStart: 106, verseEnd: 112 },
  { page: 18, surah: 2, verseStart: 113, verseEnd: 119 },
  { page: 19, surah: 2, verseStart: 120, verseEnd: 126 },
  { page: 20, surah: 2, verseStart: 127, verseEnd: 134 },
  { page: 21, surah: 2, verseStart: 135, verseEnd: 141 },
];

function verseRangeLabel(start, end) {
  return start === end ? String(start) : `${start}–${end}`;
}

export const JUZ1_DIARY_ITEMS = JUZ1_PAGE_VERSES.map((entry) => {
  const verseRange = verseRangeLabel(entry.verseStart, entry.verseEnd);
  const headline = BAQARAH_PAGE_GUIDE_HEADLINES[entry.page];
  const isFatihah = entry.isSurah;

  return {
    id: `p${entry.page}`,
    juz: 1,
    page: entry.page,
    surahNumber: entry.surah,
    label: isFatihah ? entry.label : "Al-Baqarah",
    nameAr: isFatihah ? entry.nameAr : "البقرة",
    verseRange,
    headline: headline ?? null,
    detail: isFatihah
      ? "Page 1 · complete sūrah"
      : `Page ${entry.page} · āyāt ${verseRange}`,
    kind: isFatihah ? "surah" : "page",
  };
});

export const JUZ1_DIARY_SCOPE = {
  juz: 1,
  title: "Juz 1",
  range: "Al-Fātiḥah — Al-Baqarah 141",
  totalItems: JUZ1_DIARY_ITEMS.length,
};

export function getJuz1DiaryItem(id) {
  return JUZ1_DIARY_ITEMS.find((item) => item.id === id) ?? null;
}

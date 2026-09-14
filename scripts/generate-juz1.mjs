#!/usr/bin/env node
/**
 * Generate src/data/juz1GeneratedSurahs.js from AlQuran.cloud.
 * Juz 1: Al-Fātiḥah (full) + Al-Baqarah āyāt 1–141.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const OUT = path.join(ROOT, "src/data/juz1GeneratedSurahs.js");

const BISM =
  /^بِسْمِ\s+[\u0621-\u06FF\s\u064B-\u065F\u0670-\u06ED]+\s+(?=[\u0621-\u06FF])/u;

const SOURCE_META = [
  {
    id: "fatihah",
    name: "Al-Fātiḥah",
    nameAr: "الفاتحة",
    surahNum: 1,
    ayahEnd: null,
    juz: 1,
    revelationOrder: 1,
  },
  {
    id: "baqarah",
    name: "Al-Baqarah",
    nameAr: "البقرة",
    surahNum: 2,
    ayahEnd: 141,
    juz: 1,
    revelationOrder: 2,
  },
];

function cleanAyahText(ar, en, surahNum, ayahNum) {
  const stripBism = surahNum > 1 && ayahNum === 1;
  return {
    ar: stripBism ? ar.replace(BISM, "").trim() : ar.trim(),
    en: stripBism
      ? en.replace(/^In the name of Allah[^\n.]*[.\s]*/i, "").trim()
      : en.trim(),
  };
}

async function fetchSurahAyahs(surahNum) {
  const r = await fetch(
    `https://api.alquran.cloud/v1/surah/${surahNum}/editions/quran-uthmani,en.sahih`,
  );
  const j = await r.json();
  if (!j.data?.[0]?.ayahs) throw new Error(`Failed to fetch surah ${surahNum}`);
  return j.data[0].ayahs.map((a, i) => {
    const n = a.numberInSurah;
    const { ar, en } = cleanAyahText(a.text, j.data[1].ayahs[i].text, surahNum, n);
    return { n, ar, en };
  });
}

const source = [];
for (const meta of SOURCE_META) {
  const ayahs = await fetchSurahAyahs(meta.surahNum);
  const slice = meta.ayahEnd ? ayahs.filter((a) => a.n <= meta.ayahEnd) : ayahs;
  source.push({
    id: meta.id,
    name: meta.name,
    nameAr: meta.nameAr,
    ayahCount: slice.length,
    juz: meta.juz,
    revelationOrder: meta.revelationOrder,
    ayahs: slice,
  });
  console.log(`✓ ${meta.name} (${slice.length} āyāt)`);
}

const template = `// Generated from AlQuran.cloud Uthmani Arabic and Saheeh International English.
// Juz 1: Al-Fātiḥah and Al-Baqarah āyāt 1–141.

const SOURCE = ${JSON.stringify(source, null, 2)};

function sceneCount(ayahCount) {
  if (ayahCount <= 5) return 1;
  if (ayahCount <= 10) return 2;
  if (ayahCount <= 20) return 3;
  if (ayahCount <= 30) return 4;
  return 5;
}

function chunkRanges(ayahCount) {
  const count = sceneCount(ayahCount);
  const base = Math.floor(ayahCount / count);
  const extra = ayahCount % count;
  const ranges = [];
  let start = 1;

  for (let i = 0; i < count; i += 1) {
    const size = base + (i < extra ? 1 : 0);
    const end = start + size - 1;
    ranges.push({ start, end });
    start = end + 1;
  }

  return ranges;
}

function sceneTitle(index, count) {
  if (count === 1) return "Complete Surah";
  if (index === 0) return "Opening Movement";
  if (index === count - 1) return "Closing Movement";
  return count === 3 ? "Middle Passage" : \`Passage \${index + 1}\`;
}

function quoteStart(text) {
  const clean = text.replace(/\\s+/g, " ").trim();
  return clean.length > 92 ? \`\${clean.slice(0, 89)}...\` : clean;
}

function makeScenes(surah, ranges) {
  return ranges.map((range, index) => {
    const first = surah.ayahs.find((ayah) => ayah.n === range.start);
    const label =
      range.start === range.end ? \`Āyah \${range.start}\` : \`Āyāt \${range.start}–\${range.end}\`;

    return {
      title: sceneTitle(index, ranges.length),
      range: range.start === range.end ? String(range.start) : \`\${range.start}–\${range.end}\`,
      hook: \`\${label}: begin from "\${quoteStart(first?.en || surah.name)}" and trace how this part of \${surah.name} develops.\`,
      memory:
        "Anchor this section by its opening meaning, then recite through the āyāt in order while watching the repeated images, commands, and contrasts.",
      tafsir:
        "Revision note: review these āyāt with the Arabic text and translation, then connect the passage back to the surah's central warning, promise, or act of praise.",
      tafsirAttr: "Revision note",
    };
  });
}

const TOKEN_TRAILING_MARKS = [
  "ۖ",
  "ۗ",
  "ۘ",
  "ۙ",
  "ۚ",
  "ۛ",
  "ۜ",
  "۟",
  "۠",
  "ۢ",
  "ۣ",
  "ۥ",
  "ۦ",
  "",
  "،",
  "؛",
  ".",
  "?",
  "!",
];

function cleanToken(token) {
  return TOKEN_TRAILING_MARKS.reduce((clean, mark) => clean.split(mark).join(""), token);
}

function makeWords(ar) {
  const tokens = ar.split(/\\s+/).map(cleanToken).filter(Boolean);
  return tokens.slice(0, 6).map((token) => ({
    ar: token,
    en: token.length <= 2 ? "—" : "(see translation)",
  }));
}

function sceneIndexFor(n, ranges) {
  return Math.max(0, ranges.findIndex((range) => n >= range.start && n <= range.end));
}

function makeSurah(surah) {
  const ranges = chunkRanges(surah.ayahCount);

  return {
    id: surah.id,
    name: surah.name,
    nameAr: surah.nameAr,
    ayahCount: surah.ayahCount,
    juz: surah.juz,
    revelationOrder: surah.revelationOrder,
    scenes: makeScenes(surah, ranges),
    ayahs: surah.ayahs.map((ayah) => ({
      n: ayah.n,
      scene: sceneIndexFor(ayah.n, ranges),
      ar: ayah.ar,
      en: ayah.en,
      connects: ayah.n === surah.ayahCount ? "Complete." : "Then —",
      words: makeWords(ayah.ar),
    })),
  };
}

export const JUZ1_GENERATED_SURAHS = Object.fromEntries(
  SOURCE.map((surah) => [surah.id, makeSurah(surah)]),
);
`;

fs.writeFileSync(OUT, template);
console.log("Written", OUT);

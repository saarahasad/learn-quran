#!/usr/bin/env node
/**
 * Regenerate src/data/textbooks.js and src/data/generatedSurahs.js
 * from Downloads textbook HTML files.
 *
 * Usage: node scripts/parse-textbooks.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { enrichTextbookHtml } from '../src/utils/classifyTerms.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const DL = path.join(process.env.HOME || '', 'Downloads');

const BISM = /^بِسْمِ\s+[\u0621-\u06FF\s\u064B-\u065F\u0670-\u06ED]+\s+(?=[\u0621-\u06FF])/u;

const files = [
  ['qariah', 101, 'surah_qariah_textbook.html'],
  ['kafirun', 109, 'surah_kafirun_textbook.html'],
  ['kawthar', 108, 'surah_kawthar_textbook.html'],
  ['quraysh', 106, 'surah_quraysh_textbook.html'],
  ['feel', 105, 'surah_feel_textbook.html'],
  ['humazah', 104, 'surah_humazah_textbook.html'],
  ['asr', 103, 'surah_asr_textbook.html'],
  ['takathur', 102, 'surah_takathur_textbook.html'],
];

const meta = {
  qariah: { name: 'Al-Qāriʿah', nameAr: 'القارعة' },
  takathur: { name: 'At-Takāthur', nameAr: 'التكاثر' },
  asr: { name: 'Al-ʿAṣr', nameAr: 'العصر' },
  humazah: { name: 'Al-Humazah', nameAr: 'الهمزة' },
  feel: { name: 'Al-Fīl', nameAr: 'الفيل' },
  quraysh: { name: 'Quraysh', nameAr: 'قريش' },
  kawthar: { name: 'Al-Kawthar', nameAr: 'الكوثر' },
  kafirun: { name: 'Al-Kāfirūn', nameAr: 'الكافرون' },
};

async function fetchSurah(n) {
  const r = await fetch(`https://api.alquran.cloud/v1/surah/${n}/editions/quran-uthmani,en.sahih`);
  const j = await r.json();
  return j.data[0].ayahs.map((a, i) => ({
    n: a.numberInSurah,
    ar: a.text.replace(BISM, '').trim(),
    en: j.data[1].ayahs[i].text.replace(/^In the name of Allah[^\n.]*[.\s]*/i, '').trim(),
  }));
}

function stripHtml(s) {
  return s.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

function parseSections(html) {
  const parts = [];
  const re = /<div class="section-head">([^<]+)<\/div>/g;
  let m;
  while ((m = re.exec(html))) {
    const raw = m[1].trim();
    const rangeM = raw.match(/Verses?\s+(\d+)[–-](\d+)/i) || raw.match(/\((\d+)[–-](\d+)\)/);
    parts.push({
      title: raw.replace(/^Part [IVX]+ — /i, '').replace(/\s*\(Verses?[^)]+\)\s*$/i, '').trim(),
      range: rangeM ? `${rangeM[1]}–${rangeM[2]}` : null,
    });
  }
  return parts;
}

function extractBookInner(html) {
  const start = html.indexOf('<div class="book"');
  if (start < 0) return '';
  let depth = 0;
  let i = start;
  while (i < html.length) {
    if (html.slice(i, i + 4) === '<div') {
      depth++;
      i += 4;
      continue;
    }
    if (html.slice(i, i + 6) === '</div>') {
      depth--;
      i += 6;
      if (depth === 0) return html.slice(start, i);
      continue;
    }
    i++;
  }
  return '';
}

function sceneForAyah(n, sections) {
  for (let i = sections.length - 1; i >= 0; i--) {
    const r = sections[i].range;
    if (!r) continue;
    const [a, b] = r.split('–').map(Number);
    if (n >= a && n <= b) return i;
  }
  return 0;
}

const textbooks = {};
const surahs = {};

for (const [id, num, fname] of files) {
  const fp = path.join(DL, fname);
  if (!fs.existsSync(fp)) {
    console.warn('Skip (missing):', fp);
    continue;
  }
  const html = fs.readFileSync(fp, 'utf8');
  const intro = stripHtml((html.match(/<div class="intro-box">([\s\S]*?)<\/div>/) || ['', ''])[1]);
  const sections = parseSections(html);
  const apiAyahs = await fetchSurah(num);
  const sceneList = sections.length ? sections : [{ title: 'Full Sūrah', range: `1–${apiAyahs.length}` }];
  const scenes = sceneList.map((s) => ({
    title: s.title,
    range: s.range || `1–${apiAyahs.length}`,
    hook: `Āyāt ${s.range}: ${s.title}.`,
    memory: intro.slice(0, 220) || `Study ${meta[id].name} with full iʿrāb notes.`,
    tafsir: 'Use Study with Iʿrāb for verse-by-verse grammatical analysis.',
    tafsirAttr: 'Textbook iʿrāb',
  }));
  surahs[id] = {
    id,
    ...meta[id],
    ayahCount: apiAyahs.length,
    juz: 30,
    revelationOrder: num,
    scenes,
    ayahs: apiAyahs.map((a, idx) => ({
      n: a.n,
      scene: sceneForAyah(a.n, sceneList),
      ar: a.ar,
      en: a.en,
      connects: idx < apiAyahs.length - 1 ? 'Then —' : 'Complete.',
      words: a.ar.split(/\s+/).filter(Boolean).map((w, wi, arr) => ({
        ar: w,
        en: wi === arr.length - 1 ? '(see translation)' : '—',
      })),
    })),
    hasTextbook: true,
  };
  textbooks[id] = enrichTextbookHtml(extractBookInner(html));
  console.log('✓', id);
}

for (const [id, fname] of [
  ['burooj', 'surah_burooj_textbook.html'],
  ['adiyat', 'surah_adiyat_textbook.html'],
]) {
  const fp = path.join(DL, fname);
  if (fs.existsSync(fp)) textbooks[id] = enrichTextbookHtml(extractBookInner(fs.readFileSync(fp, 'utf8')));
}

const dataDir = path.join(ROOT, 'src/data');
fs.mkdirSync(dataDir, { recursive: true });
fs.writeFileSync(path.join(dataDir, 'textbooks.js'), `export const TEXTBOOKS = ${JSON.stringify(textbooks)};\n`);
fs.writeFileSync(
  path.join(dataDir, 'generatedSurahs.js'),
  `export const GENERATED_SURAHS = ${JSON.stringify(surahs, null, 2)};\n`
);
console.log('Written to src/data/');

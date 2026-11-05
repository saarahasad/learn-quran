#!/usr/bin/env node
/**
 * Download the iʿrāb of Juz ʿAmma from surahquran.com, verbatim, one āyah page
 * at a time (https://surahquran.com/e3rab-aya-<a>-sora-<s>.html).
 * surahquran.com's iʿrāb is إعراب القرآن للدعاس.
 *
 * Run from the repo root (Node 18+):
 *   node scripts/fetch-daas-juz30.mjs            # sūrahs 78–114
 *   node scripts/fetch-daas-juz30.mjs 78 80      # just a range
 *   node scripts/fetch-daas-juz30.mjs --repair   # re-download only incomplete pages
 *
 * Writes scripts/juz30-iraab-daas/<surah>.json with, per āyah, the page's iʿrāb
 * section as plain text (all of it: the word-by-word iʿrāb, the vowelled copy and
 * the summary). Already-downloaded sūrahs are skipped, so re-running is safe.
 */
import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const AYAH_COUNTS = {
  78: 40, 79: 46, 80: 42, 81: 29, 82: 19, 83: 36, 84: 25, 85: 22, 86: 17, 87: 19,
  88: 26, 89: 30, 90: 20, 91: 15, 92: 21, 93: 11, 94: 8, 95: 8, 96: 19, 97: 5,
  98: 8, 99: 8, 100: 11, 101: 11, 102: 8, 103: 3, 104: 9, 105: 5, 106: 4, 107: 7,
  108: 3, 109: 6, 110: 3, 111: 5, 112: 4, 113: 5, 114: 6,
};

const OUT_DIR = path.join(process.cwd(), "scripts", "juz30-iraab-daas");
const REPAIR = process.argv.includes("--repair");
const [from = 78, to = 114] = process.argv.slice(2).filter((a) => !a.startsWith("--")).map(Number);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const urlsFor = (s, a) => [
  `https://surahquran.com/e3rab-aya-${a}-sora-${s}.html`,
  `https://surahquran.com/quran-search/e3rab-aya-${a}-sora-${s}.html`,
];

async function fetchPage(s, a) {
  let lastErr;
  for (const url of urlsFor(s, a)) {
    for (let attempt = 1; attempt <= 3; attempt += 1) {
      try {
        const res = await fetch(url, {
          headers: { "User-Agent": "learn-quran-juz30-iraab/1.0 (personal study app)" },
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return { url, html: await res.text() };
      } catch (err) {
        lastErr = err;
        await sleep(1200 * attempt);
      }
    }
  }
  throw new Error(`${s}:${a} — ${lastErr?.message}`);
}

/** HTML → plain text, keeping line breaks at block elements. */
function toText(html) {
  return html
    .replace(/<(script|style|noscript|svg)[\s\S]*?<\/\1>/gi, "")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/(p|div|h[1-6]|li|tr|section|article|blockquote)>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;|&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/[ \t ]+/g, " ")
    .replace(/ *\n */g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

/** Keep the iʿrāb section: from the first "إعراب …" heading to the tafsīr links that follow it. */
function iraabSection(text) {
  const lines = text.split("\n");
  const start = lines.findIndex((l) => /^إعراب\s/.test(l) && !/كاملة/.test(l));
  if (start < 0) return text;
  let end = lines.findIndex((l, i) => i > start && /^تفسير الآية \d+/.test(l));
  if (end < 0) end = lines.length;
  return lines.slice(start, end).join("\n").trim();
}

/** A page is complete when its detailed iʿrāb ("إعراب قوله تعالى") is followed by the āyah navigation. */
function isComplete(text) {
  const i = text.indexOf("إعراب قوله تعالى:");
  return i >= 0 && text.indexOf("الآية السابقة", i) > i;
}

fs.mkdirSync(OUT_DIR, { recursive: true });

for (let s = from; s <= to; s += 1) {
  const count = AYAH_COUNTS[s];
  if (!count) continue;
  const file = path.join(OUT_DIR, `${s}.json`);
  if (fs.existsSync(file)) {
    if (!REPAIR) {
      console.log(`✓ ${s} already downloaded`);
      continue;
    }
    // --repair: re-download only the āyāt whose page text is incomplete
    const saved = JSON.parse(fs.readFileSync(file, "utf8"));
    let fixed = 0;
    for (const ay of saved.ayat) {
      if (isComplete(ay.text)) continue;
      const { url, html } = await fetchPage(s, ay.n);
      ay.url = url;
      ay.text = iraabSection(toText(html));
      fixed += 1;
      process.stdout.write(`${s}:${ay.n} `);
      await sleep(400);
    }
    if (fixed) {
      saved.repairedAt = new Date().toISOString();
      fs.writeFileSync(file, JSON.stringify(saved, null, 1));
    }
    console.log(fixed ? `\n✓ ${s}: ${fixed} āyāt repaired` : `✓ ${s} complete`);
    continue;
  }
  const ayat = [];
  for (let a = 1; a <= count; a += 1) {
    const { url, html } = await fetchPage(s, a);
    ayat.push({ n: a, url, text: iraabSection(toText(html)) });
    process.stdout.write(`${s}:${a} `);
    await sleep(400); // be polite to surahquran.com
  }
  fs.writeFileSync(
    file,
    JSON.stringify(
      {
        surah: s,
        source: "surahquran.com — إعراب القرآن للدعاس",
        fetchedAt: new Date().toISOString(),
        ayat,
      },
      null,
      1,
    ),
  );
  console.log(`\n✓ ${s}: ${ayat.length} āyāt saved`);
}
console.log("\nDone. Now commit and push scripts/juz30-iraab-daas/ so Claude can build the diagrams.");

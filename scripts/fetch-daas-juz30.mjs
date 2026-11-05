#!/usr/bin/env node
/**
 * Download إعراب القرآن للدعاس (the iʿrāb surahquran.com shows) for Juz ʿAmma,
 * verbatim, from tafsir.app — the same source the app's dev proxy uses
 * (server/iraabDaasHandler.mjs).
 *
 * Run from the repo root (Node 18+):
 *   node scripts/fetch-daas-juz30.mjs            # sūrahs 78–114
 *   node scripts/fetch-daas-juz30.mjs 78 80      # just a range
 *
 * Writes scripts/juz30-iraab-daas/<surah>.json. Already-downloaded sūrahs are
 * skipped, so it is safe to re-run if the connection drops.
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
const [from = 78, to = 114] = process.argv.slice(2).map(Number);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function fetchAyah(s, a) {
  const url = `https://tafsir.app/get.php?src=iraab-daas&s=${s}&a=${a}&ver=1`;
  for (let attempt = 1; attempt <= 4; attempt += 1) {
    try {
      const res = await fetch(url, {
        headers: {
          Accept: "application/json",
          Referer: `https://tafsir.app/iraab-daas/${s}/${a}`,
          "User-Agent": "learn-quran-juz30-iraab/1.0",
        },
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.json();
    } catch (err) {
      if (attempt === 4) throw err;
      await sleep(1500 * attempt);
    }
  }
  return null;
}

fs.mkdirSync(OUT_DIR, { recursive: true });

for (let s = from; s <= to; s += 1) {
  const count = AYAH_COUNTS[s];
  if (!count) continue;
  const file = path.join(OUT_DIR, `${s}.json`);
  if (fs.existsSync(file)) {
    console.log(`✓ ${s} already downloaded`);
    continue;
  }
  const ayat = [];
  let a = 1;
  while (a <= count) {
    const p = await fetchAyah(s, a);
    const start = Number(p?.ayahs_start) || a;
    const n = Math.max(1, Number(p?.count) || 1);
    // One tafsir.app entry can cover several āyāt; store it once with its range.
    ayat.push({ from: start, to: start + n - 1, ayahText: p?.ayah ?? "", data: p?.data ?? "" });
    process.stdout.write(`  ${s}:${start}${n > 1 ? `–${start + n - 1}` : ""} `);
    a = Math.max(a + 1, start + n);
    await sleep(350); // be polite to tafsir.app
  }
  fs.writeFileSync(
    file,
    JSON.stringify(
      {
        surah: s,
        source: "إعراب القرآن للدعاس (al-Daʿʿās, Ḥumaydān, Qāsim) — via tafsir.app, as shown on surahquran.com",
        fetchedAt: new Date().toISOString(),
        ayat,
      },
      null,
      1,
    ),
  );
  console.log(`\n✓ ${s}: ${ayat.length} entries saved`);
}
console.log("\nDone. Now commit and push scripts/juz30-iraab-daas/ so Claude can build the diagrams.");

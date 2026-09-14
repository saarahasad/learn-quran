import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const htmlPath = join(__dirname, "../../ajrumiyyah/ajrumiyyah_course.html");
const outPath = join(__dirname, "../src/data/ajrumiyyahCourse.js");

const html = readFileSync(htmlPath, "utf8");

function extractConst(name) {
  const marker = `const ${name} = `;
  const start = html.indexOf(marker);
  if (start === -1) throw new Error(`Could not find ${name}`);
  let i = start + marker.length;
  while (html[i] === " ") i++;
  const open = html[i];
  if (open !== "{" && open !== "[") throw new Error(`Unexpected start for ${name}`);
  const close = open === "{" ? "}" : "]";
  let depth = 0;
  let inStr = false;
  let strChar = "";
  let escape = false;
  for (; i < html.length; i++) {
    const ch = html[i];
    if (inStr) {
      if (escape) {
        escape = false;
        continue;
      }
      if (ch === "\\") {
        escape = true;
        continue;
      }
      if (ch === strChar) inStr = false;
      continue;
    }
    if (ch === "'" || ch === '"' || ch === "`") {
      inStr = true;
      strChar = ch;
      continue;
    }
    if (ch === open) depth++;
    if (ch === close) {
      depth--;
      if (depth === 0) {
        const raw = html.slice(start + marker.length, i + 1);
        // eslint-disable-next-line no-eval
        return eval(`(${raw})`);
      }
    }
  }
  throw new Error(`Unclosed ${name}`);
}

const AUDIO_TS = extractConst("AUDIO_TS");
const CHAPTERS = extractConst("CHAPTERS");
const GROUPS = extractConst("GROUPS");

const output = `/** Al-Ājurrūmiyyah course data — generated from ajrumiyyah_course.html */
export const AJRUMIYYAH_AUDIO = "/audio/ajrumiyyah-line-by-line.mp3";

export const AJRUMIYYAH_AUDIO_TS = ${JSON.stringify(AUDIO_TS, null, 2)};

export const AJRUMIYYAH_GROUPS = ${JSON.stringify(GROUPS, null, 2)};

export const AJRUMIYYAH_CHAPTERS = ${JSON.stringify(CHAPTERS, null, 2)};

export const AJRUMIYYAH_META = {
  name: "Al-Ājurrūmiyyah",
  nameAr: "الْمُقَدِّمَةُ الْآجُرُّومِيَّةُ",
  tagline: "Classical Arabic grammar — line by line with audio and commentary.",
  chapterCount: ${CHAPTERS.length},
};
`;

writeFileSync(outPath, output);
console.log(`Wrote ${CHAPTERS.length} chapters to ${outPath}`);

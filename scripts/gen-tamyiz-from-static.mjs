import { writeFileSync, readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = join(__dirname, "../src/data/tuhfat/tamyiz.js");
const course = readFileSync(join(__dirname, "../src/data/tuhfat/tamyiz_static.json"), "utf8");
const staticData = JSON.parse(course);

function b(ar, en, label = null, footnote = null) {
  return { label, ar, en, footnote };
}

function rb(o) {
  const parts = [
    "    b(",
    `      ${JSON.stringify(o.ar)},`,
    `      ${JSON.stringify(o.en)},`,
  ];
  if (o.label != null) parts.push(`      ${JSON.stringify(o.label)},`);
  if (o.footnote != null) {
    if (o.label == null) parts.push("      null,");
    parts.push(`      ${JSON.stringify(o.footnote)},`);
  }
  parts.push("    ),");
  return parts.join("\n");
}

const lines = [
  "/** Tu\u1e25fat commentary \u2014 \u0628\u0627\u0628 \u0627\u0644\u062a\u0645\u064a\u064a\u0632 (pp. 356\u2013365) */",
  "",
  "function b(ar, en, label = null, footnote = null) {",
  "  return { label, ar, en, footnote };",
  "}",
  "",
  "export const TAMYIZ_AFTER = {",
  "  0: [",
  ...staticData.after0.map((o) => rb(o)),
  "  ],",
  "",
  "  3: [",
  ...staticData.after3.map((o) => rb(o)),
  "  ],",
  "};",
  "",
  `export const TAMYIZ_EXERCISES = ${JSON.stringify(staticData.exercises, null, 2)};`,
  "",
  `export const TAMYIZ_END = ${JSON.stringify(staticData.end, null, 2)};`,
  "",
];

writeFileSync(out, lines.join("\n"), "utf8");
console.log("Wrote", out);

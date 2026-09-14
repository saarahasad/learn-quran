import { analyzeTajweedRecitation, getWordTajweedRules } from "../src/utils/tajweedAnalyze.js";
import { alignRecitation } from "../src/utils/recitationAlign.js";

const rules = getWordTajweedRules("مِنْ", "بَعْدِ");
console.assert(rules.some((r) => r.type === "noon"), "noon rule");

const alignment = alignRecitation(
  [{ ar: "الْحَمْدُ" }, { ar: "لِلَّهِ" }],
  "الحمد لله",
);
const tajweed = analyzeTajweedRecitation({ steps: alignment.steps, whisperWords: [] });
console.assert(tajweed.summary.issueCount >= 0, "analysis runs");
console.log("tajweedAnalyze ok", tajweed.summary);

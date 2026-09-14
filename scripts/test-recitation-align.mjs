import { alignRecitation, tokenizeArabicTranscript } from "../src/utils/recitationAlign.js";

const expected = [
  { ar: "الْحَمْدُ" },
  { ar: "لِلَّهِ" },
  { ar: "رَبِّ" },
  { ar: "الْعَالَمِينَ" },
];

const perfect = alignRecitation(expected, tokenizeArabicTranscript("الحمد لله رب العالمين"));
const missed = alignRecitation(expected, tokenizeArabicTranscript("الحمد لله"));
const wrong = alignRecitation(expected, tokenizeArabicTranscript("الحمد لله رب العالم"));

console.assert(perfect.passed, "perfect recitation should pass");
console.assert(missed.missed === 2, "missing last two words");
console.assert(wrong.wrong === 1, "wrong last word");
console.log("recitationAlign ok", { perfect: perfect.matched, missed: missed.missed, wrong: wrong.wrong });

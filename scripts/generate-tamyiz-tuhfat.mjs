import { writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = join(__dirname, "../src/data/tuhfat/tamyiz.js");

function b(ar, en, label = null, footnote = null) {
  const parts = [`    b(\n      ${JSON.stringify(ar)},\n      ${JSON.stringify(en)}`];
  if (label) parts.push(`      ${JSON.stringify(label)}`);
  if (footnote) {
    if (!label) parts.push("      null");
    parts.push(`      ${JSON.stringify(footnote)}`);
  }
  parts.push("    ),");
  return parts.join(",\n");
}

const after0 = [
  b("[التَّمْيِيزُ]", "[The Disambiguation]"),
  "",
  b(
    "قَالَ: (بَابُ التَّمْيِيزِ) التَّمْyِيزُ هُوَ: الِاسْmُ الْmَnْصُوبُ، الْmُfَsِّrُ lِmā inbaham min al-dhawāt، nَhْw qawlika: (taṣabbaba Zaydun ʿaraqan) wa (tafaqqaʾa Bakrun shahman) wa (ṭāba Muḥammadun nafsan) wa (ishtaraytu ʿishrīna kitāban) wa (malaktu tisʿīna naʿjatan) wa (Zaydun akramu minka aban) wa (ajmalu minka wajhan).",
    "He said: The Chapter of the Disambiguation. The disambiguation is a manṣūb noun which gives description to an ambiguous object, as in the following statements: “Zayd poured out sweat”, “Bakr expanded with fat”, “Muḥammad made pleasant in his self”, “I purchased twenty books”, “I possessed ninety ewes”, “Zayd is nobler than you as a father” and, “More handsome than you facially.”",
    "قَالَ",
    "²⁰² In English grammar, a disambiguation refers to the process of clarifying a word with multiple meanings due to its given context.",
  ),
];

console.log("blocks", after0.length);

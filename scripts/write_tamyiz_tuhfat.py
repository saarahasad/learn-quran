#!/usr/bin/env python3
"""One-off generator for src/data/tuhfat/tamyiz.js"""

from pathlib import Path

path = Path(__file__).resolve().parents[1] / "src/data/tuhfat/tamyiz.js"

path.write_text(
    r'''/** Tuḥfat commentary — باب التمييز (pp. 356–365) */

function b(ar, en, label = null, footnote = null) {
  return { label, ar, en, footnote };
}

export const TAMYIZ_AFTER = {
  0: [
    b("[التَّمْyِيزُ]", "[The Disambiguation]"),

    b(
      "قَالَ: (بَابُ التَّمْyِيزِ) التَّمْyِيزُ هُوَ: الِاسْmُ الْmَnْصُوبُ، الْmُfَsِّrُ lِmā inbaham min al-dhawāt، nَhْw qawlika: (taṣabbaba Zaydun ʿaraqan) wa (tafaqqaʾa Bakrun shahman) wa (ṭāba Muḥammadun nafsan) wa (ishtaraytu ʿishrīna kitāban) wa (malaktu tisʿīna naʿjatan) wa (Zaydun akramu minka aban) wa (ajmalu minka wajhan).",
      "He said: The Chapter of the Disambiguation. The disambiguation is a manṣūb noun which gives description to an ambiguous object, as in the following statements: “Zayd poured out sweat”, “Bakr expanded with fat”, “Muḥammad made pleasant in his self”, “I purchased twenty books”, “I possessed ninety ewes”, “Zayd is nobler than you as a father” and, “More handsome than you facially.”",
      "قَالَ",
      "²⁰² In English grammar, a disambiguation refers to the process of clarifying a word with multiple meanings due to its given context.",
    ),
  ],
};
''',
    encoding="utf-8",
)

print(f"Wrote {path}")

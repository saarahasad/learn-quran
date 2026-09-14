#!/usr/bin/env python3
# -*- coding: utf-8 -*-
from pathlib import Path
import json

path = Path(__file__).resolve().parents[1] / "src/data/tuhfat/tamyiz.js"

def fmt_b(ar, en, label=None, footnote=None):
    parts = [f'    b(\n      {json.dumps(ar, ensure_ascii=False)},\n      {json.dumps(en, ensure_ascii=False)}']
    if label is not None:
        parts.append(f'      {json.dumps(label, ensure_ascii=False)}')
    if footnote is not None:
        if label is None:
            parts.append('      null')
        parts.append(f'      {json.dumps(footnote, ensure_ascii=False)}')
    parts.append('    ),')
    return '\n'.join(parts)

after_0 = [
    ("[التَّمْyِيزُ]", "[The Disambiguation]"),
    (
        "قَالَ: (بَابُ التَّمْyِيزِ) التَّمْyِيزُ هُo: الِاسْmُ الْmَnْصُوبُ، الْmُfَsِّrُ lِmā inbaham min al-dhawāt، nَhْw qawlika: (تَصَبَّbَ zaydun ʿaraqan) wa (tafaqqaʾa bakrun shahman) wa (ṭāba muḥammadun nafsan) wa (ishtaraytu ʿishrīna kitāban) wa (malaktu tisʿīna naʿjatan) wa (zaydun akramu minka aban) wa (ajmalu minka wajhan).",
        "He said: The Chapter of the Disambiguation. The disambiguation is a manṣūb noun which gives description to an ambiguous object, as in the following statements: “Zayd poured out sweat”, “Bakr expanded with fat”, “Muḥammad made pleasant in his self”, “I purchased twenty books”, “I possessed ninety ewes”, “Zayd is nobler than you as a father” and, “More handsome than you facially.”",
        "قَالَ",
        "²⁰² In English grammar, a disambiguation refers to the process of clarifying a word with multiple meanings due to its given context.",
    ),
]

lines = [
    '/** Tuḥfat commentary — باب التمييز (pp. 356–365) */',
    '',
    'function b(ar, en, label = null, footnote = null) {',
    '  return { label, ar, en, footnote };',
    '}',
    '',
    'export const TAMYIZ_AFTER = {',
    '  0: [',
]
for item in after_0:
    if len(item) == 2:
        lines.append(fmt_b(*item))
    elif len(item) == 4:
        lines.append(fmt_b(*item))
lines += [
    '  ],',
    '};',
]

path.write_text('\n'.join(lines) + '\n', encoding='utf-8')
print('wrote', path)

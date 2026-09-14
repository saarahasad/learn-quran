# -*- coding: utf-8 -*-
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "src/data/tuhfat/nawasib.js"

def b(ar, en, label=None, footnote=None):
    parts = ["    b("]
    parts.append(f'      "{ar}",')
    parts.append(f'      "{en}",')
    if label:
        parts.append(f'      "{label}",')
    elif footnote:
        parts.append("      null,")
    if footnote:
        esc = footnote.replace("\\", "\\\\").replace('"', '\\"').replace("\n", "\\n")
        parts.append(f'      "{esc}",')
    parts.append("    ),")
    return "\n".join(parts)

blocks = []

# Keep existing good blocks from partial file - re-specified cleanly
blocks.append(b("[نَوَاصِبُ الْمُضَارِعِ]", "[Nawāṣib of the Muḍāriʿ Verb]"))
blocks.append(b(
    "قَالَ: فَالنَّوَاصِبُ عَشَرَةٌ، وَهِيَ: (أَنْ)، وَ(لَنْ)، وَ(إِذَنْ)، وَ(كَيْ)، وَ(لَامُ كَيْ)، وَ(لَامُ الْجُحُودِ)، وَ(حَتَّى)، وَالْجَوَابُ بِالْفَاءِ وَالْوَاوِ، وَ(أَوْ).",
    'He said: The nawāṣib are ten: "an" (that), "lan" (will not), "idhan" (then), "kay" (so that), "lām kay" (in order to), the letter lām al-juḥūd, ḥattā (until), the letters fā and wāw as the jawāb (answer) [of a sharṭ (condition)] and aw (or).',
    "قَالَ",
))
blocks.append(b(
    "وَأَقُولُ: الْأَدَوَاتُ الَّتِي يُنْصَبُ بَعْدَهَا الْفِعْلُ الْمُضَارِعُ عَشَرَةُ أَحْرُفٍ وَهِيَ عَلَى ثَلَاثَةِ أَقْسَامٍ: قِسْmٌ يَنْصِبُ بِنَفْsِهِ، وَqِsْmٌ يَنْصِbُ بِ(أَnْ) mَضْmَرَةٍ bَعْdَهُ jَwَازًا، وَqِsْmٌ yَنْصِbُ بِ(أَnْ) mَضْmَرَةٍ bَعْdَهُ wَjُobًا.",
    'I say: The apparatus that make the muḍāriʿ verb after it manṣūb are ten particles, and they are categorised into three: (i) the type that produces the state of naṣb in of itself, (ii) the type that produces the state of naṣb with the allowance of an implicit "an" (that) after it and (iii) the type that produces the state of naṣb with an implicit "an" (that) after it that is mandatory to be so (i.e. implicit).',
    "وَأَقُولُ",
    "⁸¹ Nawāṣib is the plural of nāṣib, which refers to governors that cause the grammatical state of naṣb.\\n⁸² Al-Ḥāmidī (p. 59) said, \\"They have preceded the jawāzim due to their effect being discernible i.e. through a diacritic, in contrast to the jawāzim which shows its effect through removal. Another reason for it preceding is due to it being more noble.\\"\\n⁸³ They are ten according to the Kūfī grammarians—and the author was a Kūfī. According to the Basran grammarians the nawāṣib are four: \\"an\\", \\"lan\\", \\"idhan\\" and \\"kay\\", and this was the view preferred by Ibn Hishām in Shudhūr (p. 287).\\n⁸⁴ The letter lām added to a muḍāriʿ verb which adds the reason for the action.\\n⁸⁵ This is to have a negation via lam or mā kāna and the likes followed by a lām and a muḍāriʿ verb. This expresses a complete negation using a muḍāriʿ verb.",
))

print("STOP - script has corruption, use inline file instead")

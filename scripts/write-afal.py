#!/usr/bin/env python3
"""Write clean afal.js Tuḥfat commentary."""

from pathlib import Path

OUT = Path(__file__).resolve().parent.parent / "src/data/tuhfat/afal.js"

HEADER = '''/** Tuḥfat commentary — باب الأفعال (pp. 170–180) */

function b(ar, en, label = null, footnote = null) {
  return { label, ar, en, footnote };
}

export const AFAL_AFTER = {
'''

FOOTER = '''};

export const AFAL_END = {
  titleAr: "أَسْئِلَةٌ",
  titleEn: "Questions",
  items: [
    {
      ar: "إِلَى كَمْ قِسْmٍ yَnْqَsِmُ الْفِعْlُ؟",
'''

# I'll build the whole file as a single string in Python with triple quotes

content = '''/** Tuḥfat commentary — باب الأفعال (pp. 170–180) */

function b(ar, en, label = null, footnote = null) {
  return { label, ar, en, footnote };
}

export const AFAL_AFTER = {
  0: [
    b("[الْأَفْعَالُ وَأَنْوَاعُهَا]", "[The Verbs and Their Types]"),

    b(
      "قَالَ: الْأَفْعَالُ ثَلَاثَةٌ: مَاضٍ، وَمُضَارِعٌ، وَأَمْرٌ، نَحْوُ: (ضَرَبَ) وَ(يَضْرِبُ) وَ(اضْرِبْ).",
      "He said: The verb is of three types: (i) māḍī, (ii) muḍāriʿ and (iii) ʾamr. Examples are \\"he hit\\", \\"he hits\\" and \\"hit\\".",
      "قَالَ",
    ),

    b(
      "وَأَقُولُ: يَنْقَسِمُ الْفِعْلُ إِلَى ثَلَاثَةِ أَقْسَامٍ:",
      "I say: The verb is separated into three types:",
      "وَأَقُولُ",
    ),

    b(
      "الْقِسْmُ الْأَwَّlُ: الْmَاضِي، وَهُoَ mَa yَdُlُّ عَلَى حُصُولِ shَyْءٍ qَbْlَ zَmَnِ altَّkَalُّmِ، nَحْwُ: (ضَrَbَ) وَ(nَصَrَ)، وَ(fَtَحَ)، وَ(عَلِmَ)، وَ(حَsَbَ)، وَ(kَrَmَ).",
'''

print("bad")

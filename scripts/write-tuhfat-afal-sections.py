#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Generate nawwasib.js and jawazim.js for Tuḥfat afal commentary."""
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent / "src/data/tuhfat"


def esc(s):
    return s.replace("\\", "\\\\").replace('"', '\\"').replace("\n", "\\n")


def b(ar, en, label=None, footnote=None):
    parts = [f'      "{esc(ar)}"', f'      "{esc(en)}"']
    if label:
        parts.append(f'      "{esc(label)}"')
    if footnote:
        if not label:
            parts.append("      null")
        parts.append(f'      "{esc(footnote)}"')
    return "    b(\n" + ",\n".join(parts) + ",\n    ),"


def drill(ar, en):
    return f'    {{\n      ar: "{esc(ar)}",\n      en: "{esc(en)}",\n    }},'


NAWWASIB_TAIL = [
    (
        "وَالْحَرْفُ الثَّانِي (حَتَّى) وَهُوَ يَفِيدُ الْغَايَةَ أَوِ التَّعْlِيلَ، وَمَعْnَى الْغَايَةِ أَnَّ mَa qَbْlَhَa yَnْqَضِi بِحُصُولِ mَa بَعْdَhَa نَحْwُ qَwْlِhِ tَaʿala: ﴿حَتَّىٰ yَrْjِعَ إِلَyْnَa mُوسَىٰ﴾، وَمَعْnَى التَّعْlِيلِ أَnَّ mَa qَbْlَhَa عِlَّةٌ لِحُصُولِ mَa بَعْdَhَa، نَحْwُ qَwْlِkَ لِبَعْضِ إِخْwَanِkَ (ذَاكِرْ حَتَّى tَnْjَحَ).",
        "The second particle is ḥattā (until) and it can provide the meaning of al-ghāyah (the end point) or al-ta'līl (causation). The meaning of al-ghāyah here is that the first part of the statement becomes null with the attainment of what comes after it, e.g. in the āyah: {They said, \"We will never cease being devoted to the calf until Mūsā returns to us.\"} And the meaning of al-ta'līl here is that the first part of the statement is the reason for the attainment of what comes after it, e.g. if you say to one of your friends, \"Revise until you succeed.\"",
        None,
        "¹⁰³ Ṭāhā: 91",
    ),
]

# Fix the corrupted hattaa block - use clean Arabic
NAWWASIB_TAIL[0] = (
    "وَالْحَرْfُ الثَّانِي (حَتَّى) وَهُo yَfِيدُ الْغَايَةَ أَwِ التَّعْlِيلَ، وَمَعْnَى الْغَايَةِ أَnَّ mَa qَbْlَhَa yَnْqَضِi بِحُصُولِ mَa بَعْdَhَa نَحْwُ qَwْlِhِ tَaʿala: ﴿حَتَّىٰ yَrْjِعَ إِلَyْnَa mُوسَىٰ﴾، وَمَعْnَى التَّعْlِيلِ أَnَّ mَa qَbْlَhَa عِlَّةٌ لِحُصُولِ mَa بَعْdَhَa، نَحْwُ qَwْlِkَ لِبَعْضِ إِخْwَanِkَ (ذَاكِرْ حَتَّى tَnْjَحَ).",
) + NAWWASIB_TAIL[0][1:]

print("Use manual Write instead")

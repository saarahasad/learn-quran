#!/usr/bin/env python3
# -*- coding: utf-8 -*-
from pathlib import Path
import json
import re

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "src/data/tuhfat/tamyiz.js"


def B(ar, en, label=None, footnote=None):
    return dict(ar=ar, en=en, label=label, footnote=footnote)


def rb(o):
    p = [
        "    b(",
        f'      {json.dumps(o["ar"], ensure_ascii=False)},',
        f'      {json.dumps(o["en"], ensure_ascii=False)},',
    ]
    if o.get("label") is not None:
        p.append(f'      {json.dumps(o["label"], ensure_ascii=False)},')
    if o.get("footnote") is not None:
        if o.get("label") is None:
            p.append("      null,")
        p.append(f'      {json.dumps(o["footnote"], ensure_ascii=False)},')
    p.append("    ),")
    return "\n".join(p)


def course_strings():
    course = (ROOT / "src/data/ajrumiyyahCourse.js").read_text(encoding="utf-8")
    idx = course.find('"id": "tamyiz"')
    chunk = course[idx : idx + 2500]
    bab = re.search(r'"ar": "([^"]+)"', course[idx : idx + 800]).group(1)
    quoted = [m.group(1) for m in re.finditer(r'"((?:\\.|[^"\\])*)"', chunk)]
    matn = next(s for s in quoted if s.startswith("\u0627\u0644\u062a") and "\u0647\u064f\u0648\u064e \u0627\u0644\u0650\u0627\u0633\u0652\u0645" in s)
    ex_zayd = next(s for s in quoted if "\u062a\u064e\u0635\u064e\u0628\u0651" in s).split(": ", 1)[1]
    qala_core = matn.replace(
        "\u0627\u0644\u062a\u064e\u0651\u0645\u0652\u064a\u0650\u064a\u0652\u0632\u064f: \u0647\u064f\u0648\u064e ",
        "\u0627\u0644\u062a\u064e\u0651\u0645\u0652\u064a\u0650\u064a\u0652\u0632\u064f \u0647\u064f\u0648\u064e: ",
        1,
    )
    qala_core = qala_core.replace(
        " \u0627\u0644\u0652\u0645\u064e\u0646\u0652\u0635\u064f\u0648\u0628\u064f \u0627\u0644\u0652",
        " \u0627\u0644\u0652\u0645\u064e\u0646\u0652\u0635\u064f\u0648\u0628\u064f\u060c \u0627\u0644\u0652",
        1,
    )
    qala_ar = (
        f"\u0642\u0627\u0644\u064e: ({bab}) {qala_core}\u060c \u0646\u062d\u0648\u064f \u0642\u064e\u0648\u0652\u0644\u0650\u0643\u064e: ({ex_zayd}) "
        f"\u0648(\u062a\u064e\u0641\u064e\u0642\u0651\u064e\u0623\u064e \u0628\u064e\u0643\u0631\u064c \u0634\u064e\u062d\u0652\u0645\u064b\u0627) \u0648(\u0637\u064e\u0627\u0628\u064e \u0645\u064f\u062d\u064e\u0645\u0651\u064e\u062f\u064c \u0646\u064e\u0641\u0652\u0633\u064b\u0627) \u0648(\u0627\u0634\u0652\u062a\u064e\u0631\u064e\u064a\u0652\u062a\u0645 \u0639\u0650\u0634\u0652\u0631\u0650\u064a\u0646\u064e \u0643\u0650\u062a\u0627\u0628\u064b\u0627) "
        f"\u0648(\u0645\u064e\u0644\u064e\u0643\u0652\u062a\u064f \u062a\u0650\u0633\u0652\u0639\u0650\u064a\u0646\u064e \u0646\u064e\u0639\u0652\u062c\u064e\u0629\u064b) \u0648(\u0632\u064e\u064a\u0652\u062f\u064c \u0623\u064e\u0643\u0652\u0631\u064e\u0645\u064f \u0645\u0650\u0646\u0652\u0643\u064e \u0623\u064e\u0628\u064b\u0627) "
        f"\u0648(\u0623\u064e\u062c\u0652\u0645\u064e\u0644\u064f \u0645\u0650\u0646\u0652\u0643\u064e \u0648\u064e\u062c\u0652\u0647\u064b\u0627)."
    )
    return qala_ar


if __name__ == "__main__":
    print(repr(course_strings()[:70]))

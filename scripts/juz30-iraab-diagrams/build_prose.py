"""Colour-coded iʿrāb panel data (an-Naba style) from the surahquran.com pages.

Output: src/data/juz30Iraab/surahquran/<surah>.json = { "<ayah>": [[word, analysis], …, [null, note]] }
  word/analysis – the page's detailed vowelled iʿrāb ("إعراب قوله تعالى"), verbatim
  [null, note]   – al-Daʿʿās's sentence notes (وجملة … / والمصدر …), verbatim
Only āyāt the hand-made files in src/data/juz30Iraab/*.js do not already cover are written."""
import json, os, re, sys, glob

sys.path.insert(0, os.path.dirname(__file__))
from parse import split_page, entries  # noqa: E402

NOTE = re.compile(r"^(و?الجملة|وجملة|جملة|والمصدر|و?شبه الجملة)")


def ayah_prose(a_block, b_block):
    rows = []
    for word, ls in entries(b_block):
        if word and ls:
            rows.append([word, " ".join(ls).strip()])
    seen = set()
    for _, ls in entries(a_block):
        for l in ls:
            l2 = l.strip().strip("»«").strip()
            if NOTE.match(l2) and l2 not in seen:
                seen.add(l2)
                rows.append([None, l2])
    return rows


if __name__ == "__main__":
    src, dst = sys.argv[1], sys.argv[2]
    covered = json.loads(sys.argv[3]) if len(sys.argv) > 3 else {}
    os.makedirs(dst, exist_ok=True)
    for f in sorted(glob.glob(f"{src}/*.json"), key=lambda p: int(os.path.basename(p)[:-5])):
        d = json.load(open(f, encoding="utf8"))
        s = d["surah"]
        have = set(covered.get(str(s), []))
        out, missing = {}, []
        for ay in d["ayat"]:
            if ay["n"] in have:
                continue
            a, b, _ = split_page(ay["text"])
            rows = ayah_prose(a, b) if b else []
            if rows:
                out[str(ay["n"])] = rows
            else:
                missing.append(ay["n"])
        if out:
            json.dump(out, open(f"{dst}/{s}.json", "w", encoding="utf8"), ensure_ascii=False, separators=(",", ":"))
        if out or missing:
            print(f"{s}: {len(out)} āyāt" + (f", waiting for repair: {missing}" if missing else ""))

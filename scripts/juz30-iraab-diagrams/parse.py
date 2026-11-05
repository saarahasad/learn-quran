"""Split each downloaded surahquran.com page into its three iʿrāb blocks.
A = al-Daʿʿās word lines (+ taʿalluq lines and وجملة notes)
B = detailed vowelled iʿrāb ("إعراب قوله تعالى")
C = summary paragraph ("» إعراب الآية رقم")"""
import json, re, sys, glob, os

def entries(block):
    """﴿word﴾: text …  → [(word, [lines])]; lines without ﴿ attach to the current entry."""
    out = []
    for line in block.split("\n"):
        line = line.strip()
        if not line:
            continue
        m = re.match(r"^﴿([^﴾]+)﴾\s*:?\s*(.*)$", line)
        if m:
            out.append([m.group(1).strip(), [m.group(2).strip()] if m.group(2).strip() else []])
        elif out:
            out[-1][1].append(line)
        else:
            out.append([None, [line]])
    return out

def split_page(text):
    a = b = c = ""
    m = re.search(r"\{\s*\*?\s*(.+?)\s*\(\s*[^():]+:\s*\d+\s*\)\s*\}\n(.*?)\nإعراب سورة [^\n]* كاملة", text, re.S)
    if m:
        a = m.group(2)
    m = re.search(r"\nإعراب قوله تعالى:[^\n]*\n(.*?)\nالآية السابقة", text, re.S)
    if m:
        b = m.group(1)
    m = re.search(r"\n» إعراب الآية رقم[^\n]*\n(.*?)\nإعراب الصفحة", text, re.S)
    if m:
        c = re.sub(r"\s*\n\s*", " ", m.group(1)).strip()
    return a.strip(), b.strip(), c

if __name__ == "__main__":
    src = sys.argv[1]
    bad = []
    tot = 0
    for f in sorted(glob.glob(f"{src}/*.json"), key=lambda p: int(os.path.basename(p)[:-5])):
        d = json.load(open(f, encoding="utf8"))
        for ay in d["ayat"]:
            tot += 1
            a, b, c = split_page(ay["text"])
            if not (a and b and c):
                bad.append((d["surah"], ay["n"], bool(a), bool(b), bool(c)))
    print("āyāt", tot, "missing a block:", len(bad))
    for x in bad[:20]:
        print(x)

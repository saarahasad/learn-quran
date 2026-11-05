import re, json, sys, os
D, REPO = sys.argv[1], sys.argv[2]
E = json.load(open(f"{D}/entries.json", encoding="utf8"))
M = json.load(open(f"{D}/match.json", encoding="utf8"))["match"]
BW = dict(zip("ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىي", "'|>&<}AbptvjHxd*rzs$SDTZEgfqklmnhwYy"))
def rid(root): return "-".join(format(ord(c), "x") for c in root)  # e.g. رصد → 631-635-62f (safe on every filesystem)
def clean(t):
    t = re.sub(r"\s?ms\d+\s?", " ", t)            # OpenITI milestone markers
    t = re.sub(r"\s?\(\d{1,2}\)|\s?«\d{1,2}»", "", t)  # editor footnote numbers
    t = re.sub(r"[ \t]+", " ", t)
    return re.sub(r" *\n *", "\n", t).strip()
os.makedirs(f"{REPO}/public/lexicon/juz30", exist_ok=True)
for f in os.listdir(f"{REPO}/public/lexicon/juz30"): os.remove(f"{REPO}/public/lexicon/juz30/{f}")
total = 0
for root, books in M.items():
    out = {"root": root, "entries": []}
    for book in ("maq", "muf", "lis"):
        key = books.get(book)
        if not key: continue
        e = E[book][key]
        out["entries"].append({"book": book, "head": e["head"], "pages": e["pages"], "text": clean(e["text"])})
    if out["entries"]:
        s = json.dumps(out, ensure_ascii=False, separators=(",", ":"))
        open(f"{REPO}/public/lexicon/juz30/{rid(root)}.json", "w", encoding="utf8").write(s); total += len(s.encode())
print("root files", len(os.listdir(f"{REPO}/public/lexicon/juz30")), "total KB", total // 1024)
# per-word index
words = {}
for line in open(f"{D}/morph.txt", encoding="utf8"):
    p = line.rstrip("\n").split("\t")
    if len(p) < 4: continue
    s, a, w, seg = map(int, p[0].split(":"))
    if s < 78: continue
    words.setdefault(s, {}).setdefault(a, {}).setdefault(w, None)
    m = re.search(r"ROOT:([^|]+)", p[3]); l = re.search(r"LEM:([^|]+)", p[3])
    if m and words[s][a][w] is None:
        words[s][a][w] = [m.group(1), l.group(1) if l else "", rid(m.group(1))]
lines = ["// Root + lemma for every word of Juz ʿAmma (sūrahs 78–114).",
         "// Source: Quranic Arabic Corpus morphology v0.4 (corpus.quran.com), via github.com/mustafa0x/quran-morphology.",
         "// Shape: JUZ30_ROOTS[surah][ayah] = per word in reading order: [root, lemma, fileId] or 0 (no root: particle/pronoun).",
         "// fileId names the dictionary file in public/lexicon/juz30/<fileId>.json.",
         "export const JUZ30_ROOTS = {"]
for s in sorted(words):
    lines.append(f"  {s}: {{")
    for a in sorted(words[s]):
        arr = [words[s][a][w] or 0 for w in sorted(words[s][a])]
        lines.append(f"    {a}: {json.dumps(arr, ensure_ascii=False)},")
    lines.append("  },")
lines.append("};\n\nexport function getWordRoot(surah, ayah, wordIndex) {\n  const w = JUZ30_ROOTS[surah]?.[ayah]?.[wordIndex];\n  return w ? { root: w[0], lemma: w[1], fileId: w[2] } : null;\n}\n")
open(f"{REPO}/src/data/juz30WordRoots.js", "w", encoding="utf8").write("\n".join(lines))
print("roots index KB", os.path.getsize(f"{REPO}/src/data/juz30WordRoots.js") // 1024)

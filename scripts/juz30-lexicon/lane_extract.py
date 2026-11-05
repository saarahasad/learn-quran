"""Lane's Lexicon (laneslexicon/lexicon_xml) → per-root segments with Arabic script.
Transliteration conversion follows laneslexicon/lexicon_parser lane.pl (convertString)."""
import re, json, sys, glob, html
D = sys.argv[1]
PRE = [("A@", "{"), ("A_", "I"), ("A^", "O"), ("y^", "}"), ("w^", "W")]
TABLE = dict(zip("'|OWI}A" "bptvjHx" "d*rzs$S" "DTZEg-f" "qklmnhw" "YyFNKau" "i~o`{" "^=_",
  "ءآأؤإئا" "بةتثجحخ"
  "دذرزسشص" "ضطظعغـف"
  "قكلمنهو" "ىيًٌٍَُ"
  "ِّْٰٱ" "ٔآـ"))
def ar(t):
    t = t.strip()
    if re.fullmatch(r"\d+", t): return t
    for a, b in PRE: t = t.replace(a, b)
    return "".join(TABLE.get(c, c) for c in t)
HAR = re.compile(r"[ً-ْٰـٔ]")
def norm(x):
    x = HAR.sub("", x); x = re.sub("[أإآءؤئٱ]", "ء", x); return x.replace("ى", "ي")

def segments(xml):
    """Flatten an entry to [kind, text] segments: t=English, a=Arabic, i=italic English."""
    out = []
    pos = 0
    tok = re.compile(r'<(foreign|orth)\b[^>]*lang="ar"[^>]*>(.*?)</\1>|<hi\b[^>]*rend="ital"[^>]*>(.*?)</hi>|<[^>]+>', re.S)
    for m in tok.finditer(xml):
        if m.start() > pos: out.append(["t", xml[pos:m.start()]])
        if m.group(1): 
            a = re.sub(r"<[^>]+>", "", m.group(2))
            if a.strip() and a.strip() != "*": out.append(["a", ar(html.unescape(a))])
        elif m.group(3) is not None:
            out.append(["i", re.sub(r"<[^>]+>", "", m.group(3))])
        pos = m.end()
    if pos < len(xml): out.append(["t", xml[pos:]])
    clean = []
    for k, v in out:
        v = html.unescape(v)
        v = re.sub(r"-b\d+-", "", v)
        v = re.sub(r"\s+", " ", v)
        if not v.strip(): 
            if clean and clean[-1][0] != "a": clean[-1][1] += " "
            else: clean.append(["t", " "])
            continue
        if clean and clean[-1][0] == k and k != "a": clean[-1][1] += v
        else: clean.append([k, v])
    return clean

roots = {}
for f in sorted(glob.glob(f"{D}/lane/*.xml")):
    t = open(f, encoding="utf8").read()
    pbs = [(pm.start(), int(pm.group(1))) for pm in re.finditer(r'<pb n="(\d+)"', t)]
    def page_at(pos):
        last = None
        for at, n_ in pbs:
            if at > pos: break
            last = n_
        return last
    for m in re.finditer(r'<div2 n="([^"]+)" type="root"[^>]*>(.*?)</div2>', t, re.S):
        n, body = m.group(1), m.group(2)
        start_page = page_at(m.start())
        inner = [int(x) for x in re.findall(r'<pb n="(\d+)"', body)]
        entries = []
        for e in re.finditer(r'<entryFree\b([^>]*)>(.*?)</entryFree>', body, re.S):
            key = re.search(r'key="([^"]*)"', e.group(1))
            segs = segments(e.group(2))
            if not any(s[1].strip() for s in segs): continue
            entries.append({"key": ar(key.group(1)) if key else "", "segs": segs})
        page = re.search(r'<pb n="(\d+)"', body)
        if entries:
            k = norm(ar(n))
            if k not in roots: roots[k] = {"root": ar(n), "entries": entries, "pages": [start_page] + inner[-1:]}
print("Lane roots", len(roots))
json.dump(roots, open(f"{D}/lane.json", "w", encoding="utf8"), ensure_ascii=False)
r = roots.get(norm("رصد"))
print(r["root"], len(r["entries"]))
for e in r["entries"][:2]:
    print(e["key"], "::", "".join(("[" + v + "]") if k == "a" else v for k, v in e["segs"])[:500])

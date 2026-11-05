import re, json, sys
D = sys.argv[1]
E = json.load(open(f"{D}/entries.json", encoding="utf8"))
HARAKAT = re.compile(r"[ً-ْٰـ]")
def norm(x):
    x = HARAKAT.sub("", x); x = re.sub("[أإآءؤئ]", "ء", x); return x.replace("ى", "ي").strip()
roots = {}
for line in open(f"{D}/morph.txt", encoding="utf8"):
    p = line.rstrip("\n").split("\t")
    if len(p) < 4: continue
    s, a, w, seg = map(int, p[0].split(":"))
    if s < 78: continue
    m = re.search(r"ROOT:([^|]+)", p[3])
    if m: roots.setdefault(m.group(1), 0); roots[m.group(1)] += 1
def candidates(r):
    k = norm(r); c = [k]
    if len(k) == 3 and k[1] == k[2]: c.append(k[:2])           # doubled: ربب → رب
    if len(k) == 3 and k[2] == "و": c += [k[:2] + "ا"]           # و-final written with alif: دعو → دعا (never ي-final: لقي ≠ لقا)
    if len(k) == 3 and k[1] in "وي": c += [k[0] + "ا" + k[2]]     # hollow written with alif: كون → كان
    if k.startswith("ء"): c.append("ا" + k[1:])
    if len(k) == 4 and k[:2] == k[2:]: c += [k[:2] + k[1], k[:2]]   # زلزل → زلل / زل
    if len(k) == 3 and k[2] == "ء": c.append(k[:2] + "ا")
    return list(dict.fromkeys(c))
res = {}; miss = {n: [] for n in E}
def maq_weak_swap(r):
    """Ibn Fāris treats و/ي-final roots together ("والحرف المعتل") unless he names the letter."""
    k = norm(r)
    if len(k) != 3 or k[2] not in "وي": return None
    other = k[:2] + ("ي" if k[2] == "و" else "و")
    e = E["maq"].get(other)
    if not e: return None
    opening = e["text"][:80]
    named_other = "وهو الياء" if k[2] == "و" else "وهو الواو"
    if "الحرف المعتل" in opening and named_other not in opening: return other
    return None
for r in roots:
    res[r] = {}
    for name, ent in E.items():
        cands = candidates(r)
        k = norm(r)
        if name == "lis" and len(k) == 3 and k[2] == "ي": cands.append(k[:2] + "ا")  # Lisān heads و/ي-final together: لقا = لقو + لقي
        for c in cands:
            if c in ent: res[r][name] = c; break
        else:
            sw = maq_weak_swap(r) if name == "maq" else None
            if sw: res[r][name] = sw
            else: miss[name].append(r)
for n in E: print(n, "matched", len(roots) - len(miss[n]), "/", len(roots), "missing sample:", " ".join(miss[n][:25]))
json.dump({"roots": roots, "match": res}, open(f"{D}/match.json", "w", encoding="utf8"), ensure_ascii=False)

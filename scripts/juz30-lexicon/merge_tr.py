import json, sys, glob, os
REPO, TR = sys.argv[1], sys.argv[2]
tr = {}
for f in sorted(glob.glob(f"{TR}/out*.json")):
    tr.update(json.load(open(f, encoding="utf8")))
by = {}
for k, en in tr.items():
    fid, book, i = k.split("|"); by.setdefault(fid, {}).setdefault(book, {})[int(i)] = en.strip()
n = 0
for fid, books in by.items():
    p = f"{REPO}/public/lexicon/juz30/{fid}.json"
    d = json.load(open(p, encoding="utf8"))
    for e in d["entries"]:
        if e["book"] in books:
            paras = [x for x in e["text"].split("\n") if x]
            arr = e.get("tr") or [None] * len(paras)
            arr += [None] * (len(paras) - len(arr))
            for i, en in books[e["book"]].items():
                if i < len(arr): arr[i] = en; n += 1
            e["tr"] = arr
    open(p, "w", encoding="utf8").write(json.dumps(d, ensure_ascii=False, separators=(",", ":")))
print("merged", n, "paragraph translations into", len(by), "root files")

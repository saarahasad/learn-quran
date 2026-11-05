import re, json, sys
D = sys.argv[1]
HARAKAT = re.compile(r"[ً-ْٰـ]")
def norm(x):
    x = HARAKAT.sub("", x)
    x = re.sub("[أإآءؤئ]", "ء", x)
    return x.replace("ى", "ي").strip()

def plausible(head, body):
    """Reject false headings: an entry's opening must contain its own root letters."""
    letters = [c for c in norm(head) if c not in "اويء"] or [c for c in norm(head)]
    if not letters: return False
    pat = ".{0,2}".join(re.escape(c) for c in letters)
    return re.search(pat, norm(body[:160])) is not None

def parse(path, header_re, check=False):
    entries = {}
    cur = None; buf = []; start_line = 0
    lines = open(path, encoding="utf8").read().split("\n")
    def flush(end_idx):
        if cur is None: return
        # page: first PageV marker at/after header
        pages = []
        for j in range(start_line, min(len(lines), end_idx + 400)):
            m = re.search(r"PageV(\d+)P(\d+)", lines[j])
            if m:
                pages.append((int(m.group(1)), int(m.group(2))))
                if j >= end_idx: break
        text = []
        for l in buf:
            l = re.sub(r"PageV\d+P\d+", "", l)
            if l.startswith("~~"): text.append(" " + l[2:].strip())
            elif l.startswith("# "): text.append("\n" + l[2:].strip())
            elif l.startswith("#"): text.append("\n" + l.lstrip("#").strip())
            else: text.append(" " + l.strip())
        body = re.sub(r"</?span[^>]*>", "", "".join(text))
        body = re.sub(r"[ \t]+", " ", body).strip()
        body = re.sub(r" ?\n ?", "\n", body)
        head = re.sub(r"</?span[^>]*>", "", cur)
        rec = {"head": head, "text": body, "pages": pages[:2]}
        k = norm(head)
        keys = [k]
        # Maqāyīs combines weak/hamzated roots in one heading, e.g. (حصوى) = حصو + حصي
        if len(k) == 4 and k[2] in "وي" and k[3] in "ويء":
            keys += [k[:3], k[:2] + k[3]]
        if check and not plausible(head, body):
            return
        for key in keys:
            if key and key not in entries:
                entries[key] = rec
    skip = -1
    for i, l in enumerate(lines):
        if i == skip: continue
        m = header_re.match(l)
        if m:
            flush(i)
            cur = m.group(1); start_line = i; buf = [m.group(2)] if m.lastindex and m.lastindex >= 2 and m.group(2) else []
            # Mufradāt sometimes splits a heading across two lines: "### | أخ" + "# ذ</span>"
            nxt = lines[i + 1] if i + 1 < len(lines) else ""
            j = re.match(r"^# ([\u0621-\u064A]{1,3})</span>\s*$", nxt)
            if j: cur += j.group(1); skip = i + 1
            continue
        if l.startswith("###") or l.startswith("#META"):
            flush(i); cur = None; buf = []
            continue
        if cur is not None: buf.append(l)
    flush(len(lines))
    return entries

maq = parse(f"{D}/maqayis.txt", re.compile(r"^### \| \(([^)]+)\)\s*(.*)$"))
def parse_masaha(path):
    """Masaha edition of al-Mufradāt: each headword is its own line ('# رصد') after a blank line."""
    lines = open(path, encoding="utf8").read().split("\n")
    out = []
    for i, l in enumerate(lines):
        m = re.match(r"^# (?:\(\d+\)\s*|«\d+»\s*|\.\s*|\*\s*)?([\u0621-\u064A]{2,5})\s*(?:\(\d+\)|«\d+»|\*)?\s*$", l)
        if m and (i == 0 or lines[i - 1].strip() == ""):
            out.append("### | " + m.group(1))
        else:
            out.append(l)
    tmp = path + ".marked"
    open(tmp, "w", encoding="utf8").write("\n".join(out))
    return parse(tmp, re.compile(r"^### \| ([^\s]+)\s*(.*)$"), check=True)

muf = parse_masaha(f"{D}/muf_Masaha003644.txt")
lis = parse(f"{D}/lisan.txt", re.compile(r"^###\s+\$\s+([^:\s]+):?\s*(.*)$"))
print("entries maq", len(maq), "muf", len(muf), "lis", len(lis))
json.dump({"maq": maq, "muf": muf, "lis": lis}, open(f"{D}/entries.json", "w", encoding="utf8"), ensure_ascii=False)
k = norm("رصد")
for name, e in [("maq", maq), ("muf", muf), ("lis", lis)]:
    x = e.get(k); print("==", name, x and x["pages"]); print((x or {}).get("text", "")[:400])

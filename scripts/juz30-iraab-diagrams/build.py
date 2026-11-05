"""Build iʿrāb diagrams (the at-Tīn / al-Humazah format) from surahquran.com pages.

Input : scripts/juz30-iraab-daas/<surah>.json   (downloaded by scripts/fetch-daas-juz30.mjs)
Output: src/data/iraabDiagramsJuz30/<surah>.json

Per āyah:
  units  – one per word, in order. `lines` = the detailed vowelled iʿrāb (block B) split at
           each sub-word ("، وَ( … )"), verbatim; plus al-Daʿʿās's taʿalluq clause (block A)
           when B does not state it.
  links  – drawn only from relations the text names (تجرّ، متعلقان بـ، نعت لـ، معطوف على، بدل من،
           مضاف إليه، فاعل/مفعول به/حال … of the governing verb, اسم/خبر إنّ وكان، مبتدأ/خبر، صلة).
  notes  – al-Daʿʿās's sentence notes (وجملة … / والمصدر …), verbatim.
  summary– the page's summary paragraph (block C), verbatim.
Words outside the āyah that a link needs become dashed "ghost" units (earlier āyah / مقدّر)."""
import json, re, sys, os, glob

sys.path.insert(0, os.path.dirname(__file__))
from parse import split_page, entries  # noqa: E402

HAR = re.compile(r"[ً-ْٰـٕٔ]")


def plain(x):
    x = HAR.sub("", x or "")
    x = re.sub("[أإآٱ]", "ا", x)
    return x.replace("ى", "ي").replace("ة", "ه").strip()


def core(x):
    """Word for matching: plain, without a leading و/ف/ال and quotes."""
    x = plain(x).strip('"«»() ')
    x = re.sub(r"^[وف](?=\S{2,})", "", x)
    return x


def first_role(text):
    """The role named at the start of a unit's own iʿrāb (after any leading particle clause)."""
    t = plain(text)
    return t


# ── units ──────────────────────────────────────────────────────────────
SPLIT = re.compile(r"،\s+(?=وَ\s*[\(\"«])")


def unit_lines(btext):
    parts = [p.strip() for p in SPLIT.split(btext) if p.strip()]
    return parts


def build_units(bentries):
    units = []
    for word, ls in bentries:
        if not word:
            continue
        text = " ".join(ls).strip()
        t = re.sub(r"\s+", " ", re.sub(r'[()«»]', "", plain(text))).strip()
        t = re.sub(r"^(لفظ|اسم) الجلاله\s+", "", t)
        units.append({"word": word, "lines": unit_lines(text), "_t": t, "_r": plain(text)})
    return units


# ── matching a named target to a unit ──────────────────────────────────
def find_unit(units, name, before=None):
    """Index of the unit whose word matches `name` (closest before `before` when given)."""
    n = core(name)
    if not n:
        return None
    cands = []
    for j, u in enumerate(units):
        if u.get("ghost"):
            continue
        w = core(u["word"])
        if w == n or w.endswith(n) or n.endswith(w) and len(w) >= 3:
            cands.append(j)
    if not cands:
        return None
    if before is not None:
        prior = [j for j in cands if j < before]
        if prior:
            return prior[-1]
    return cands[0]


QUOTED = r'(?:\(\s*([^)]+?)\s*\)|"([^"]+)"|«([^»]+)»)'


def quoted_after(t, key):
    m = re.search(key + r"\s*" + QUOTED, t)
    if not m:
        return None
    return next(g for g in m.groups() if g)


VERB = re.compile(r"فعل (ماض|مضارع|امر)")
NOUNISH = re.compile(r"(اسم|مجرور|منصوب|مرفوع|ضمير|مبني)")


def is_verb(u):
    return bool(VERB.search(u["_t"]))


def is_nasikh(u, head):
    """The governing particle/verb itself: إنّ (and sisters) or كان / ليس."""
    t, w = u["_t"], core(u["word"])
    if head == "ان":
        return "حرف توكيد ونصب" in t[:60] or "حرف مشبه بالفعل" in t[:60]
    if head == "كان":
        return "ناسخ" in t[:40] and (w.startswith(("كان", "يكون", "تكون", "اكون", "نكون")) or "كان" in w)
    if head == "ليس":
        return w.startswith("ليس") or "ليس" in w
    return False


def is_prep_only(u):
    """A unit that is just a preposition (not a preposition joined to another word)."""
    return len(u["lines"]) == 1 and re.match(r'^("?\w+"? )?حرف جر', u["_t"]) is not None and "في محل جر" not in u["_t"]


def main_role(u):
    """Role text of the unit itself: the last sub-clause usually carries the word's own role."""
    return u["_t"]


def build_ayah(s, n, a_block, b_block, c_block, prev_words):
    units = build_units(entries(b_block))
    if not units:
        return None
    links = []
    ghosts = []

    def add(t, frm, to, label):
        if to is None or any(f is None for f in frm) or to in frm:
            return
        if any(l["from"] == frm and l["to"] == to for l in links):
            return
        links.append({"t": t, "from": frm, "to": to, "label": label})

    def ghost(word, tag):
        for g in ghosts:
            if core(g["word"]) == core(word):
                return g
        g = {"word": word, "ghost": True, "tag": tag, "lines": []}
        ghosts.append(g)
        return g

    def earlier_tag(target):
        for pn, words in reversed(prev_words):
            if any(core(w) == core(target) or core(w).endswith(core(target)) for w in words):
                return f"آية {to_ar(pn)}"
        return "مقدّر"

    a_entries = entries(a_block)
    a_text = "\n".join(" ".join(ls) for _, ls in a_entries)

    for j, u in enumerate(units):
        t = u["_t"]
        # jar: preposition followed by a majrūr unit
        if is_prep_only(u) and j + 1 < len(units):
            nxt = units[j + 1]["_t"]
            if nxt.startswith("اسم مجرور") or "مجرور" in nxt[:40] or "في محل جر" in nxt[:80]:
                add("jar", [j], j + 1, "تجرّ")
        # idafa
        if t.startswith("مضاف اليه") and j > 0:
            add("idafa", [j], j - 1, "مضاف إليه")
        # tawābiʿ
        for key, label in (("نعت ل", "نعت"), ("صفه ل", "نعت"), ("بدل من", "بدل")):
            if t.startswith(key.split()[0]):
                target = quoted_after(u["_r"], key.replace(" ", r"\s*"))
                k = find_unit(units, target, before=j) if target else None
                if k is None and target:
                    links.append({"t": "tabi", "from": [j], "to": ("ghost", ghost(target, earlier_tag(target))), "label": label})
                    continue
                if k is None and j > 0:
                    k = j - 1
                add("tabi", [j], k, label)
        # ʿaṭf with a named target
        m = re.search(r"معطوف (?:علي)\s*" + QUOTED, u["_r"])
        if m:
            target = next(g for g in m.groups() if g)
            k = find_unit(units, target, before=j)
            if k is not None:
                add("atf", [j], k, "معطوف على")
            else:
                links.append({"t": "atf", "from": [j], "to": ("ghost", ghost(target, earlier_tag(target))), "label": "معطوف على"})
        # verb-governed roles
        verbs_before = [k for k in range(j) if is_verb(units[k])]
        for key, label in (
            ("مفعول به اول", "مفعول به أول"),
            ("مفعول به ثان", "مفعول به ثانٍ"),
            ("مفعول به", "مفعول به"),
            ("مفعول مطلق", "مفعول مطلق"),
            ("مفعول لاجله", "مفعول لأجله"),
            ("مفعول فيه", "مفعول فيه"),
            ("نائب فاعل", "نائب فاعل"),
            ("فاعل", "فاعل"),
        ):
            if t.startswith(key) and verbs_before:
                add("amal", [j], verbs_before[-1], label)
                break
        if t.startswith(("نائب عن المفعول المطلق", "نائب مفعول مطلق")) and verbs_before:
            add("amal", [j], verbs_before[-1], "نائب مفعول مطلق")
        if t.startswith("مستثني"):
            illa = [k for k in range(j) if units[k]["_t"].startswith("حرف استثناء")]
            if illa:
                add("amal", [j], illa[-1], "مستثنى بـ إلّا")
        if t.startswith("حال") and verbs_before:
            add("hal", [j], verbs_before[-1], "حال")
        if t.startswith("تمييز") and j > 0:
            add("hal", [j], j - 1, "تمييز")
        # inna / kāna
        for key, label, gov in (
            ("اسم ان", "اسمها", r"(ان|انّ|لكن|كان|ليس|صار|اصبح|امسي|ظل|بات|مازال|لعل|كانما)"),
            ("خبر ان", "خبرها", None),
            ("اسم كان", "اسمها", None),
            ("خبر كان", "خبرها", None),
            ("اسم ليس", "اسمها", None),
            ("خبر ليس", "خبرها", None),
        ):
            if t.startswith(key):
                head = key.split()[1]
                k = None
                for q in range(j - 1, -1, -1):
                    if is_nasikh(units[q], head):
                        k = q
                        break
                add("amal", [j], k, label)
        # mubtadaʾ / khabar
        if t.startswith("خبر") and not t.startswith(("خبر ان", "خبر كان", "خبر ليس")):
            mub = [k for k, x in enumerate(units) if k != j and x["_t"].startswith("مبتدا")]
            if mub:
                add("isnad", [j], mub[-1] if mub[-1] < j else mub[0], "خبر")

    # taʿalluq: from al-Daʿʿās lines (block A) and the summary (block C)
    for word, ls in a_entries:
        for l in ls:
            lp = plain(l)
            m = re.search(r"متعلق(?:ان|ه)? ب(?:ـ)?\s*" + QUOTED, lp)
            if not m:
                continue
            target = next(g for g in m.groups() if g)
            # source units: the A entry's words (jar + majrūr) mapped onto B units
            src = []
            for wpart in (word or "").split():
                k = find_unit(units, wpart)
                if k is not None and k not in src:
                    src.append(k)
            if not src:
                continue
            src.sort()
            # a preposition unit directly before a lone majrūr joins the group
            if len(src) == 1 and src[0] > 0 and is_prep_only(units[src[0] - 1]):
                src = [src[0] - 1, src[0]]
            k = find_unit(units, target, before=src[0])
            if k is None:
                k = find_unit(units, target)
            if k is None:
                g = ghost(target, earlier_tag(target))
                k = ("ghost", g)
            is_zarf = units[src[-1]]["_t"].startswith("ظرف")
            label = "ظرف متعلق بـ" if is_zarf and len(src) == 1 else "متعلقان بـ"
            links.append({"t": "taaluq", "from": src, "to": k, "label": label})
            # keep al-Daʿʿās's taʿalluq clause on the unit when B does not mention it
            last = units[src[-1]]
            if "متعلق" not in last["_t"]:
                clause = re.search(r"[^.،]*متعلّ?ق[^.]*", l)
                last["lines"].append((clause.group(0) if clause else l).strip(" ،."))

    # ṣila: al-Daʿʿās says the sentence is صلة الموصول
    for _, ls in a_entries:
        for l in ls:
            lp = plain(l)
            if "صله الموصول" in lp and "الحرفي" not in lp:
                rel = [k for k, x in enumerate(units) if "اسم موصول" in x["_t"]]
                q = re.search(r"جمله\s*" + QUOTED, lp)
                if rel and q:
                    first = next(g for g in q.groups() if g).split()[0]
                    k = find_unit(units, first, None)
                    if k is not None and k > rel[-1] or (k is not None and rel[0] < k):
                        add("sila", [k], max(r for r in rel if r < k), "صلة")

    # place ghosts first (they come from earlier āyāt / are implied) and re-index
    shift = len(ghosts)
    for l in links:
        l["from"] = [f + shift for f in l["from"]]
        if isinstance(l["to"], tuple):
            l["to"] = ghosts.index(l["to"][1])
        else:
            l["to"] = l["to"] + shift
    all_units = ghosts + units
    for u in all_units:
        u.pop("_t", None)
        u.pop("_r", None)

    notes = []
    for _, ls in a_entries:
        for l in ls:
            l2 = l.strip().strip("»").strip()
            if re.match(r"^(و?الجملة|وجملة|جملة|والمصدر|و?شبه الجملة)", l2) and l2 not in notes:
                notes.append(l2)
    return {
        "n": n,
        "text": a_block.split("\n")[0] if False else None,
        "units": all_units,
        "links": links,
        "notes": notes,
        "summary": c_block or None,
    }


AR_DIGITS = "٠١٢٣٤٥٦٧٨٩"


def to_ar(n):
    return "".join(AR_DIGITS[int(c)] for c in str(n))


def build_surah(path):
    d = json.load(open(path, encoding="utf8"))
    s = d["surah"]
    out = []
    prev_words = []
    skipped = []
    for ay in d["ayat"]:
        text = ay["text"]
        a, b, c = split_page(text)
        m = re.search(r"\{\s*\*?\s*(.+?)\s*\(\s*[^():]+:\s*\d+\s*\)\s*\}", text)
        ayah_text = m.group(1).strip() if m else None
        if not b:
            skipped.append(ay["n"])
            continue
        res = build_ayah(s, ay["n"], a, b, c, prev_words[-3:])
        if not res:
            skipped.append(ay["n"])
            continue
        res["text"] = ayah_text
        out.append(res)
        prev_words.append((ay["n"], [u["word"] for u in res["units"] if not u.get("ghost")]))
    return s, out, skipped


if __name__ == "__main__":
    src, dst = sys.argv[1], sys.argv[2]
    only = set(map(int, sys.argv[3:])) if len(sys.argv) > 3 else None
    os.makedirs(dst, exist_ok=True)
    for f in sorted(glob.glob(f"{src}/*.json"), key=lambda p: int(os.path.basename(p)[:-5])):
        s = int(os.path.basename(f)[:-5])
        if only and s not in only:
            continue
        s, ayat, skipped = build_surah(f)
        nl = sum(len(a["links"]) for a in ayat)
        json.dump({"surah": s, "source": "surahquran.com", "ayat": ayat},
                  open(f"{dst}/{s}.json", "w", encoding="utf8"), ensure_ascii=False, separators=(",", ":"))
        print(f"{s}: {len(ayat)} āyāt, {nl} links" + (f", skipped {skipped}" if skipped else ""))

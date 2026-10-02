#!/usr/bin/env python3
"""Join the four cheat sheets into one printable booklet."""

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1] / "public"
SRC = ROOT / "Foundations-Cheat-Sheet.html"

PARTS = [
    {
        "tone": "tone-foundations",
        "file": "Foundations-Cheat-Sheet.html",
        "kick": "Al-Ājurrūmiyyah · Foundations",
        "en": "Foundations",
        "ar": "الْأُصُولُ",
        "band": "الْجُزْءُ الْأَوَّلُ · الْأُصُولُ",
        "blurb": "Speech, iʿrāb, and the signs that mark it",
    },
    {
        "tone": "tone-marfuat",
        "file": "Marfuat-Cheat-Sheet.html",
        "kick": "Al-Ājurrūmiyyah · Marfūʿāt",
        "en": "Marfūʿāt",
        "ar": "الْمَرْفُوعَاتُ",
        "band": "الْجُزْءُ الثَّانِي · الْمَرْفُوعَاتُ",
        "blurb": "The nominative nouns, and the four followers",
    },
    {
        "tone": "tone-mansubat",
        "file": "Mansubat-Cheat-Sheet.html",
        "kick": "Al-Ājurrūmiyyah · Manṣūbāt",
        "en": "Manṣūbāt",
        "ar": "الْمَنْصُوبَاتُ",
        "band": "الْجُزْءُ الثَّالِثُ · الْمَنْصُوبَاتُ",
        "blurb": "The accusative nouns",
    },
    {
        "tone": "tone-majrurat",
        "file": "Majrurat-Cheat-Sheet.html",
        "kick": "Al-Ājurrūmiyyah · Majrūrāt",
        "en": "Majrūrāt",
        "ar": "الْمَجْرُورَاتُ",
        "band": "الْجُزْءُ الرَّابِعُ · الْمَجْرُورَاتُ",
        "blurb": "The genitive nouns",
    },
]


def strip_tags(html):
    return re.sub(r"<[^>]+>", "", html).strip()


def sections_of(path):
    text = path.read_text()
    start = text.index('<div class="stack">')
    end = text.rindex("</section>") + len("</section>")
    body = text[start:end]
    return re.findall(r"<section class=\"page\"[\s\S]*?</section>", body)


def prepare(sec, part, n, first):
    tone = part["tone"]

    def repl(m):
        old = m.group(1)
        new_id = f"{tone}-{old}" if old else f"{tone}-{n}"
        return f'<section class="page {tone}" id="{new_id}"'

    sec = re.sub(r'<section class="page"(?: id="([^"]+)")?', repl, sec, count=1)
    sec = re.sub(
        r'<p class="kick">.*?</p>',
        f'<p class="kick">{part["kick"]}</p>',
        sec,
        count=1,
    )
    if first:
        sec = re.sub(
            r"(<section[^>]*>)",
            r'\1\n  <p class="partband">' + part["band"] + "</p>",
            sec,
            count=1,
        )
    h1 = re.search(r"<h1>(.*?)</h1>", sec)
    sub = re.search(r'<p class="sub">(.*?)</p>', sec)
    sid = re.search(r'id="([^"]+)"', sec).group(1)
    item = None
    if h1:
        item = {
            "id": sid,
            "ar": strip_tags(h1.group(1)),
            "en": strip_tags(sub.group(1)) if sub else "",
            "tone": tone,
        }
    return sec, item


def main():
    css = SRC.read_text().split("<style>", 1)[1].split("</style>", 1)[0]
    css = css.replace(
        """:root{
  --ink:#241a28;
  --muted:#6a5a70;
  --rule:#e0d5e4;
  --rule-strong:#c9b3cf;
  --paper:#fff;
  --wash:#f8f3f9;
  --accent:#5c2a6e;
  --hit-bg:#eedff3;""",
        """:root{
  --ink:#2a241c;
  --muted:#6a5e52;
  --rule:#e4d9cc;
  --rule-strong:#d2c3b0;
  --paper:#fff;
  --wash:#faf6f0;
  --accent:#3d3428;
  --hit-bg:#f3ead8;""",
    )
    css = css.replace("background:#471f56", "background:#2a241c")
    css = css.replace("rgba(92,42,110,.28)", "rgba(61,52,40,.28)")
    css = css.replace('.foot-n::after{content:" / 10"}', '.foot-n{display:none}')
    css = css.replace(
        "@page{size:A4;margin:12mm}",
        """@page{
  size:A4;
  margin:14mm 12mm 16mm;
  @bottom-center{
    content:counter(page);
    font-family:Newsreader,Georgia,serif;
    font-size:9pt;
    color:#8a7d70;
  }
}
@page:first{
  margin-bottom:14mm;
  @bottom-center{content:none}
}""",
    )
    extra = r"""
.page.tone-foundations{--ink:#241a28;--muted:#6a5a70;--rule:#e0d5e4;--rule-strong:#c9b3cf;--wash:#f8f3f9;--accent:#5c2a6e;--hit-bg:#eedff3}
.page.tone-marfuat{--ink:#1a2433;--muted:#5a6570;--rule:#d5dee8;--rule-strong:#b4c3d4;--wash:#f2f6fb;--accent:#1a4e8a;--hit-bg:#e3eef8}
.page.tone-mansubat{--ink:#1b2420;--muted:#5c675f;--rule:#d9e0da;--rule-strong:#b7c4bc;--wash:#f3f8f5;--accent:#0c5a46;--hit-bg:#dceee6}
.page.tone-majrurat{--ink:#2a2118;--muted:#6a5c50;--rule:#e6d9cc;--rule-strong:#d4c0aa;--wash:#fbf6f0;--accent:#8a4518;--hit-bg:#f6e6d6}
.foot-n{display:none !important}
.partband{margin:0;text-align:center;font-size:14px;line-height:1.7;color:var(--accent);letter-spacing:.12em}
.cover{align-items:center;text-align:center;padding-top:36px;padding-bottom:42px}
.cover-kicker{margin:8px 0 0;font-size:16px;line-height:1.8;color:var(--muted);letter-spacing:.14em}
.cover-title{margin:10px 0 0;font-size:72px;line-height:1.45;color:var(--ink)}
.cover-en{margin:2px 0 0;direction:ltr;font-family:var(--lat);font-style:italic;font-size:20px;color:var(--muted)}
.cover-rule{width:72px;height:1px;margin:18px auto 0;background:var(--accent);border:0}
.cover-ar{margin:14px 0 0;font-size:26px;line-height:1.7;color:var(--accent)}
.cover-parts{list-style:none;margin:28px 0 0;padding:0;width:min(480px,100%);text-align:right}
.cover-parts li{padding:9px 0 10px;border-bottom:1px solid var(--rule)}
.cover-parts b{display:block;font-weight:400;font-size:22px;line-height:1.5}
.cover-parts em{display:block;font-family:var(--lat);font-style:italic;font-weight:400;font-size:13px;line-height:1.35;color:var(--muted);direction:ltr;text-align:right}
.cover-parts .f b{color:#5c2a6e}
.cover-parts .r b{color:#1a4e8a}
.cover-parts .n b{color:#0c5a46}
.cover-parts .j b{color:#8a4518}
.toc-part{display:flex;align-items:baseline;justify-content:space-between;gap:12px;margin:16px 0 0;padding-bottom:2px;border-bottom:1px solid var(--accent)}
.toc-part span{font-size:20px;line-height:1.55;color:var(--accent)}
.toc-part small{font-family:var(--lat);font-style:italic;font-size:13px;color:var(--muted);direction:ltr}
.contents .tone-foundations{--accent:#5c2a6e}
.contents .tone-marfuat{--accent:#1a4e8a}
.contents .tone-mansubat{--accent:#0c5a46}
.contents .tone-majrurat{--accent:#8a4518}
.toc-row{display:block;padding:5px 0 6px;border-bottom:1px solid var(--rule);color:inherit;text-decoration:none;break-inside:avoid}
.toc-row .ar{font-size:18px;line-height:1.45}
.toc-row .en{display:block;direction:ltr;text-align:right;font-family:var(--lat);font-style:italic;font-size:12px;line-height:1.3;color:var(--muted)}
.contents .mast{margin-bottom:4px}
"""
    css = css.replace("@media (max-width:760px){", extra + "\n@media (max-width:760px){")
    css = css.replace(
        "h2,.mast,.run{break-after:avoid}\n}",
        """h2,.mast,.run,.toc-part{break-after:avoid}
  .toc-row,.cover-parts li,.partband{break-inside:avoid}
  .cover{padding-top:18mm}
}""",
    )

    chunks = []
    groups = []
    for part in PARTS:
        items = []
        secs = sections_of(ROOT / part["file"])
        for i, sec in enumerate(secs, 1):
            prepared, item = prepare(sec, part, i, i == 1)
            chunks.append(prepared)
            if item:
                items.append(item)
        groups.append((part, items))

    total = 2 + len(chunks)

    toc = []
    for part, items in groups:
        toc.append(
            f'<h2 class="toc-part {part["tone"]}"><span>{part["ar"]}</span><small>{part["en"]}</small></h2>'
        )
        for item in items:
            toc.append(
                f'<a class="toc-row {item["tone"]}" href="#{item["id"]}">'
                f'<b class="ar">{item["ar"]}</b><span class="en">{item["en"]}</span></a>'
            )

    cover = """
<section class="page cover" id="cover">
  <p class="cover-kicker">مَتْنُ ابْنِ آجُرُّومٍ</p>
  <h1 class="cover-title">الْآجُرُّومِيَّةُ</h1>
  <p class="cover-en">A study booklet</p>
  <hr class="cover-rule">
  <p class="cover-ar">أَوْرَاقُ الْمُرَاجَعَةِ</p>
  <ul class="cover-parts">
    <li class="f"><b>الْأُصُولُ</b><em>Speech, iʿrāb, and the signs that mark it</em></li>
    <li class="r"><b>الْمَرْفُوعَاتُ</b><em>The nominative nouns, and the four followers</em></li>
    <li class="n"><b>الْمَنْصُوبَاتُ</b><em>The accusative nouns</em></li>
    <li class="j"><b>الْمَجْرُورَاتُ</b><em>The genitive nouns</em></li>
  </ul>
</section>
"""
    contents = f"""
<section class="page contents" id="contents">
  <header class="mast">
    <p class="kick">Al-Ājurrūmiyyah</p>
    <h1>الْفِهْرِسْتُ</h1>
    <p class="sub">Contents</p>
  </header>
  {''.join(toc)}
</section>
"""
    html = f"""<!doctype html>
<html lang="ar">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Al-Ājurrūmiyyah · Study booklet</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,600;1,6..72,400&display=swap">
<style>
{css}
</style>
</head>
<body>
<p class="hint">One booklet. To print the whole book: ⌘P · <b>A4</b> · 1 page per sheet · default margins · turn on <b>Background graphics</b> · Save as PDF.</p>
<button type="button" class="print-btn" onclick="window.print()">Print · طباعة</button>
<div class="stack">
{cover}
{contents}
{''.join(chunks)}
</div>
</body>
</html>
"""
    out = ROOT / "Ajrumiyyah-Booklet.html"
    out.write_text(html)
    print(f"wrote {out} pages={total} chapters={sum(len(g[1]) for g in groups)} bytes={out.stat().st_size}")


if __name__ == "__main__":
    main()

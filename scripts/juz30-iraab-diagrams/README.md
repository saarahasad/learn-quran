# Juz ʿAmma iʿrāb diagrams (surahquran.com)

1. `node scripts/fetch-daas-juz30.mjs` (then `--repair` if any page was cut off) downloads each
   āyah's iʿrāb page from surahquran.com into `scripts/juz30-iraab-daas/`.
2. `python3 scripts/juz30-iraab-diagrams/build.py scripts/juz30-iraab-daas src/data/iraabDiagramsJuz30 [surah …]`
   builds the at-Tīn / al-Humazah diagram format per sūrah.

Each word box = the page's detailed vowelled iʿrāb, verbatim (plus al-Daʿʿās's "متعلق بـ" clause
when the detailed text omits it). Arrows are drawn only where the text names the relation and
its target; sentence notes and the summary paragraph are copied verbatim. Sūrahs 95–104 keep
their hand-checked diagrams in `src/data/iraabDiagrams.js` (the builder's output for them is not
used).

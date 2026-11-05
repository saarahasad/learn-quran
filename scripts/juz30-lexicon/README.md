# Juz ʿAmma word study data

Builds `src/data/juz30WordRoots.js` (root + lemma per word) and
`public/lexicon/juz30/<root code points>.json` (verbatim dictionary entries per root).

Nothing is paraphrased: entries are the printed text, with only OpenITI milestone
markers (`ms123`) and the editors' footnote numbers removed.

## Sources (download into one folder, e.g. `lex/`)

| file | source |
|---|---|
| `morph.txt` | Quranic Arabic Corpus morphology v0.4 — https://raw.githubusercontent.com/mustafa0x/quran-morphology/master/quran-morphology.txt |
| `maqayis.txt` | Ibn Fāris, *Maqāyīs al-Lugha*, ed. Hārūn (Dār al-Fikr 1979) — OpenITI `0400AH/.../0395IbnFarisQazwini.MucjamMaqayis.Shamela0021710-ara1` |
| `muf_Masaha003644.txt` | al-Rāghib, *al-Mufradāt*, ed. al-Dāwūdī (Dār al-Qalam 1412) — OpenITI `0525AH/.../0502RaghibIsbahani.Mufradat.Masaha003644-ara1` |
| `lisan.txt` | Ibn Manẓūr, *Lisān al-ʿArab* (Dār Ṣādir, 3rd ed. 1414) — OpenITI `0725AH/.../0711IbnManzurIfriqi.LisanCarab.Shamela0001687-ara1.mARkdown` |

(`extract.py` also reads `mufradat.txt` = `...Mufradat.Shamela0023636-ara1` only if you swap it back; the
Shamela0023636 edition has unreliable headword markup, so the Masaha edition is used.)

## Run

```bash
python3 extract.py lex        # → lex/entries.json (all headwords + text + volume/page)
python3 match.py lex          # → lex/match.json   (corpus root → headword per book)
python3 emit.py lex .         # → src/data/juz30WordRoots.js + public/lexicon/juz30/*.json
```

Matching rules (match.py): exact root; doubled roots under their two-letter heading
(ربب → رب); و-final roots under the alif heading (دعو → دعا); hollow roots under the alif
heading (كون → كان); Ibn Fāris's combined weak headings (رجى = رجو + رجي) only when he does
not name the other letter; Lisān's combined weak headings (لقا = لقو + لقي). Swapping
و/ي inside a root is never done (عون ≠ عين). al-Mufradāt headings are accepted only when
the entry's opening contains its own root letters.

#!/usr/bin/env python3
from pathlib import Path

path = Path(__file__).resolve().parent.parent / "src/data/tuhfat/afal.js"
text = path.read_text(encoding="utf-8")
start = text.find('    b(\n      "وَإِنْ كَانَ مُضَارِعُهُ مِنَ الْأَفْعَالِ')
head = text[:start]

tail = '''    b(
      "وَإِنْ كَانَ مُضَارِعُهُ مِنَ الْأَفْعَالِ الْخَمْسَةِ فَهُوَ يُجْزَمُ بِحَذْفِ النُّونِ، فَالْأَمْرُ مِنْهُ يُبْنَى عَلَى حَذْfِ النُّونِ، nَحْwُ: (akْtُbَa) وَ(akْtُbُowa) وَ(akْtُbِy).",
      "As for the muḍāriʿ from the five verbs, it becomes majzūm through the removal of the letter nūn, and the ʾamr is built upon this removal of the letter nūn. Examples being \\"you two write\\", \\"you (pl.) write\\" and \\"write (fem.)\\".",
    ),
  ],

  4: [
    b(
      "وَالْفِعْlُ الْmُضَarِعُ عَلَamَtُhُ أَnْ yَkُونَ fِy awwalihi harfun zā'idun min arbaʿati ahrufin yajmaʿuhā qawluka: (anaytu) aw qawluka (naʾaytu) aw qawluka (ātayna) aw qawluka (naʾatī).",
'''

print('bad')

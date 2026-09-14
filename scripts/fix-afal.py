#!/usr/bin/env python3
"""Fix corrupted Arabic in afal.js from line ~108 onward."""
from pathlib import Path

path = Path(__file__).resolve().parent.parent / "src/data/tuhfat/afal.js"
text = path.read_text(encoding="utf-8")

start = text.find('    b(\n      "وَإِنْ كَانَ مُضَارِعُهُ مُعْتَلَّ')
if start == -1:
    raise SystemExit("start marker not found")

head = text[:start]

tail = '''    b(
      "وَإِنْ كَانَ مُضَارِعُهُ مُعْتَلَّ الْآخِرِ فَهُoَ yُjْzَmُ bِhَذْfِ hَrْfِ الْعِllَةِ، fَalْأَmرُ mînْhُ yُbْnَى عَلَى hَذْfِ hَrْfِ الْعِllَةِ، nَحْwُ: (adْعُ) وَ(aqْضِ) وَ(asْعَ).",
'''

# Full clean tail - typed in Arabic only
tail = '''    b(
      "وَإِنْ كَانَ مُضَارِعُهُ مُعْتَلَّ الْآخِرِ فَهُoَ yُjْzَmُ bِhَذْfِ hَrْfِ الْعِllَةِ، fَalْأَmرُ mînْhُ yُbْnَى عَلَى hَذْfِ hَrْfِ الْعِllَةِ، nَحْwُ: (adْعُ) وَ(aqْضِ) وَ(asْعَ).",
      "As for the muḍāriʿ verb with a defective ending, it becomes majzūm through the removal of the defective letter, and the ʾamr is built upon this removal of the defective letter e.g. \\"call\\", \\"decree\\" and \\"strive\\".",
    ),

    b(
      "وَإِنْ kَanَ mُضَarِعُhُ mînَ alْأَfْعَalِ alْkhَmْsَةِ fَhُoَ yُjْzَmُ bِhَذْfِ alnnūni, fَalْأَmرُ mînْhُ yُbْnَى عَلَى hَذْfِ alnnūni, nَحْwُ: (akْtُbَa) وَ(akْtُbُowa) وَ(akْtُbِy).",
      "As for the muḍāriʿ from the five verbs, it becomes majzūm through the removal of the letter nūn, and the ʾamr is built upon this removal of the letter nūn. Examples being \\"you two write\\", \\"you (pl.) write\\" and \\"write (fem.)\\".",
    ),
  ],

  4: [
    b(
      "وَalْfِعْlُ alْmُḍāriʿu ʿalāmatuhu an yakūna fī awwalihi harfun zā'idun min arbaʿati ahrufin yajmaʿuhā qawluka: (anaytu) aw qawluka (naʾaytu) aw qawluka (ātayna) aw qawluka (naʾatī).",
      "The sign of the muḍāriʿ verb is that they commence with one of the four additional letters that are combined in the words \\"anaytu\\", \\"n'aytu\\", \\"atayna\\" or \\"n'ati\\".",
    ),

    b(
      "fā-alhamzatu lilmutakallimi mudhakkaran kāna aw muʾannathan, naḥwu (afhamu) wa-alnnūnu lilmutakallimi alladhī yuʿaẓimu nafsahu, aw lilmutakallimi alladhī yakūnu maʿahu ghayruhu, naḥwu (nafhamu).",
      "The letter hamzah denotes the singular first person for both genders e.g. \\"I understand\\". The nūn denotes the singular first person in the sense of glorifying oneself, or it denotes the speaker in addition to others alongside him e.g. \\"we understand.\\"",
    ),

    b(
      "wa-al-yāʾu lilghāʾibi naḥwu (yaqūmu) wa-alttāʾu lil-mukhātabi; aw alghāʾibati; naḥwu: (anta tafhamu yā muḥammadu wājibaka), wa-naḥwu: (tafhamu zaynabu wājibahā).",
      "The letter yā denotes the third person e.g. \\"he stands\\". The letter tā denotes the second person or the third person feminine gender e.g. \\"Do you understand your homework, O Muḥammad?\\", and \\"Zaynab understands her homework.\\"",
    ),

    b(
      "fa-ini lam takun hādhihi al-ahrufu zāʾidatan, bal kānat min aṣli alfiʿli, naḥwu: (akala), wa-(naqala), wa-(tafala), wa-(yanaʿa), aw kāna alharfu zāʾidan, lākinnahu laysa lil-dalālati ʿalá al-maʿná alladhī dhakarnāhu, naḥwu: (akrama), wa-(taqaddama) kāna alfiʿlu māḍiyan lā muḍāriʿan.",
      "If these letters are present but are not the aforementioned additions, rather they are part of the root word structure e.g. \\"to eat\\", \\"to move\\", \\"to spit\\", \\"to harvest\\", or they are additions but convey a meaning different to the ones above e.g. \\"he honoured\\" and \\"he served\\", they are māḍī verbs and not muḍāriʿ.",
    ),
  ],

  6: [
    b(
      "wa-ḥukmu alfiʿli almuḍāriʿi: annahu muʿrabun mā lam tattasil bihī nūnu alttawkīdi thaqīlatun kānat aw khafīfatan aw nūnu alnniswati, fa-ini ittaṣalat bihī nūnu alttawkīdi buniya maʿahā ʿalá alfatḥi, naḥwu qawlihi taʿālá: ﴿layusjannan wa-layakūnan mina alṣṣāghirīna﴾ wa-ini ittaṣalat bihī nūnu alnniswati buniya maʿahā ʿalá alsukūni, naḥwu qawlihi taʿālá ﴿wa-alwālidātu yurḍiʿna﴾.",
      "The ruling of the muḍāriʿ verb is that it is inflectable as long as it is not connected to the heavy or light letter nūn of emphasis or the nūn of feminine plurality. If the letter nūn of emphasis is connected to the muḍāriʿ verb then it becomes built upon a fatḥa alongside it, an example is the āyah: {He will surely be imprisoned and will be of those debased.} If the letter nūn of feminine plurality is attached to the muḍāriʿ verb then it becomes built upon a sukūn alongside it, an example is the āyah: {Mothers may breastfeed their children.}",
      null,
      "⁷⁹ Yūsuf: 32\\n⁸⁰ Al-Baqarah: 233",
    ),

    b(
      "wa-idhā kāna muʿraban fa-huwa marfūʿun mā lam yadkhul ʿalayhi nāṣibun aw jāzimun, naḥwu: (yafhamu muḥammadun), fa-(yafhamu): fiʿlun muḍāriʿun marfūʿun li-tajarrudihi mina alnnāṣibi wa-aljāzimi, wa-ʿalāmatu rafʿihi alḍḍammatu alẓẓāhiratu, wa-(muḥammadun): fāʿilun marfūʿun bi-alḍḍammati alẓẓāhirati.",
      "When it is inflectable, the muḍāriʿ verb is marfūʿ as long as a nāṣib or jāzim does not enter upon it. An example is, \\"Muḥammad understands.\\" In this sentence \\"understands\\" is a marfūʿ muḍāriʿ verb due to the absence of any nāṣib or jāzim before it. The sign of it being marfūʿ is the explicit ḍammah. Muḥammad is the subject and it is marfūʿ with an explicit ḍammah.",
    ),

    b(
      "fa-ini dakhala ʿalayhi nāṣibun naṣabahu, naḥwu: (lan yakhību mujtahidun) fa-(lan): ḥarfu nafyin wa-naṣbin wa-istiqbālin, wa-(yakhību): fiʿlun muḍāriʿun manṣūbun bi-(lan), wa-ʿalāmatu naṣbihi alfatḥatu alẓẓāhiratu, wa-(mujtahidun): fāʿilun marfūʿun wa-ʿalāmatu rafʿihi alḍḍammatu alẓẓāhiratu.",
      "If a nāṣib enters upon it then it becomes manṣūb. An example is, \\"Never will the hardworking be unsuccessful.\\" \\"Lan\\" (never) is a particle of negation and future tense. The word \\"unsuccessful\\" is a muḍāriʿ verb made manṣūb by \\"lan\\" and the sign of it being manṣūb is the visible fatḥa. The word \\"hardworking\\" is the subject, it is marfūʿ and the sign of this is the explicit ḍammah.",
    ),

    b(
      "wa-ini dakhala ʿalayhi jāzimun jazamahu, naḥwu: (lam yajzaʿ ibrāhīmu) fa-(lam): ḥarfu nafyin wa-jazmin wa-qalbin, wa-(yajzaʿ): fiʿlun muḍāriʿun majzūmun bi-(lam), wa-ʿalāmatu jazmihi alssukūnu, wa-(ibrāhīmu): fāʿilun marfūʿun, wa-ʿalāmatu rafʿihi alḍḍammatu alẓẓāhiratu.",
      "If a jāzim enters upon the muḍāriʿ verb then it becomes majzūm. An example is \\"Ibrāhīm did not become worried.\\" \\"Lam\\" (did not) is a particle of negation, jazm and alteration (i.e. from the present/future tense to the past tense). \\"He worries\\" is a muḍāriʿ verb made majzūm by \\"lam\\", the sign of it being so is the sukūn. \\"Ibrāhīm\\" is the subject and it is marfūʿ, the sign of which being the explicit ḍammah.",
    ),
  ],
};

export const AFAL_END = {
  titleAr: "أَسْئِلَةٌ",
  titleEn: "Questions",
  items: [
    {
      ar: "إِلَى كَمْ قِسْmٍ yَnْqَsِmُ alْfِعْlُ؟",
      en: "Into how many categories is the verb split into?",
    },
'''

print("Script incomplete - abort")
raise SystemExit(1)

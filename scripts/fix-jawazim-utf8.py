# -*- coding: utf-8 -*-
from pathlib import Path

path = Path(__file__).resolve().parents[1] / "src/data/tuhfat/jawazim.js"
text = path.read_text(encoding="utf-8")

# Particle names with shadda
text = text.replace("لَمَا", "لَمَّا")
text = text.replace("أَلَمَا", "أَلَمَّا")
text = text.replace('"lamā"', '"lammā"')
text = text.replace('"a-lamā"', '"a-lammā"')

# man (who) not min in particle lists
text = text.replace("وَ(مِنْ)، وَ(مَهْمَا)", "وَ(مَنْ)، وَ(مَهْمَا)")
text = text.replace('"min", "mahmā"', '"man", "mahmā"')
text = text.replace("وَهِيَ: (مِنْ)، وَ(مَا)", "وَهِيَ: (مَنْ)، وَ(مَا)")
text = text.replace('"min", "mā", "ayy"', '"man", "mā", "ayy"')
text = text.replace("أَمَّا (مِنْ):", "أَمَّا (مَنْ):")
text = text.replace('As for "min", examples', 'As for "man", examples')

old_in_ar = (
    "فَأَمَّا الْقِسْمُ الْأَوَّلُ: فَحَرْفٌ وَاحِدٌ وَهُوَ (إِنْ)، وَمِثَالُهُ: (إِنْ تُذَاكِرْ تَنْجَحْ). "
    "فَ(تُذَاكِرْ) فِعْلُ مُضَارِعٍ مَجْزُومٌ بِ(إِنْ)، وَعَلَامَةُ جَزْمِهِ السُّكُونُ، "
    "وَ(تَنْجَحْ) فِعْلُ مُضَارِعٍ مَجْزُومٌ بِ(إِنْ)، وَعَلَامَةُ جَزْمِهِ حَذْفُ النُّونِ لِتَقَدُّمِ (إِنْ) عَلَيْهِ."
)
new_in_ar = (
    "فَأَمَّا النَّوْعُ الْأَوَّلُ: فَهُوَ (إِنْ) وَحْدَهُ، نَحْوُ: (إِنْ تُذَاكِرْ تَنْجَحْ)، "
    "فَـ(إِنْ) حَرْفُ شَرْطٍ جَازِمٌ بِاتِّفَاقِ النُّحَاةِ، يَجْزِمُ فِعْلَيْنِ: "
    "الْأَوَّلُ فِعْلُ الشَّرْطِ وَالثَّانِي جَوَابُهُ وَجَزَاؤُهُ، "
    "وَ(تُذَاكِرْ) فِعْلٌ مُضَارِعٌ — فِعْلُ الشَّرْطِ — مَجْزُومٌ بِـ(إِنْ) وَعَلَامَةُ جَزْمِهِ السُّكُونُ، "
    "وَفَاعِلُهُ ضَمِيرٌ مُسْتَتِرٌ فِيهِ وُجُوبًا تَقْدِيرُهُ: أَنْتَ، "
    "وَ(تَنْجَحْ): فِعْلٌ مُضَارِعٌ جَوَابُ الشَّرْطِ وَجَزَاؤُهُ، مَجْزُومٌ بِـ(إِنْ) "
    "وَعَلَامَةُ جَزْمِهِ السُّكُونُ، وَفَاعِلُهُ ضَمِيرٌ مُسْتَتِرٌ فِيهِ وُجُوبًا تَقْدِيرُهُ أَنْتَ."
)
old_in_en = (
    'As for the first category, it is one particle, namely "in". An example of it is: '
    '"If you revise, you will succeed." "Tudhākir" is a muḍāriʿ verb made majzūm by "in", '
    'and the sign of its jazm is sukūn. "Tanjah" is a muḍāriʿ verb made majzūm by "in", '
    'and the sign of its jazm is the removal of the nūn due to "in" preceding it.'
)
new_in_en = (
    'The first category: It solely consists of "in". An example is: "If you revise you will succeed." '
    '"In" is a conditional particle and a jāzim according to the consensus of the grammarians. '
    "It makes two verbs majzūm: the first is the verb of the condition and the second is its answer and apodosis. "
    '"You revise" is a muḍāriʿ verb — the verb of the condition — majzūm due to "in", and the sign is the sukūn. '
    'Its subject is a hidden pronoun obligatory to be implied, i.e. "anta". '
    '"Succeed" is a muḍāriʿ verb — the answer of the condition and its apodosis — majzūm by "in", '
    'and the sign is the sukūn. Its subject is a hidden pronoun obligatory to be implied, i.e. "anta".'
)

if old_in_ar not in text:
    raise SystemExit("EN/AR in-block Arabic not found")
text = text.replace(old_in_ar, new_in_ar)
text = text.replace(old_in_en, new_in_en)

text = text.replace(
    "أَنَا ابْنُ جَلَا وَطَلَعَ الثَّنَايَا ... مَتَىٰ أَضَعُ الْعِمَامَةَ تَعْرِفُونِي",
    "أَنَا ابْنُ جَلَا وَطَلَّاعُ الثَّنَايَا ... مَتَىٰ أَضَعِ الْعِمَامَةَ تَعْرِفُونِي",
)
text = text.replace(
    "I am the son of Jalā and the teeth appeared ... whenever I put on the turban you will recognise me.",
    "I am the son of distinction and a climber of the heights — when I put on the turban you will know me.",
)
text = text.replace(
    "¹²³ This couplet is attributed to al-ʿAynī in some sources.",
    "¹²³ Al-ʿAynī said in Sharḥ Shawāhid (3/260): this was stated by Suḥaym, and it was said by al-Muthaqqab al-ʿAbdī Abū Zubayd. Its attribution to al-Ḥajjāj is not correct; rather he recited it.",
)

text = text.replace(
    "وَ(إِذَا) فِي الشِّعْرِ خَاصَّةً عَلَى وَجْهِ الضَّرُورَةِ، وَمِثَالُهُ قَوْلُ ابْنِ جِنِّي:\nاسْتَغْنِ مَا أَغْنَاكَ رَبُّكَ بِالْغِنَىٰ ... فَإِذَا تُصِبْكَ خَصَاصَةٌ فَتَجَمَّلْ",
    "وَيُزَادُ عَلَى هَذِهِ الْأَسْمَاءِ التِّسْعَةِ (إِذَا) فِي الشِّعْرِ — كَمَا قَالَ الْمُؤَلِّفُ — وَذَلِكَ لِلضَّرُورَةِ، نَحْوُ قَوْلِ الشَّاعِرِ:\nاسْتَغْنِ مَا أَغْنَاكَ رَبُّكَ بِالْغِنَىٰ ... فَإِذَا تُصِبْكَ خَصَاصَةٌ فَتَجَمَّلْ",
)
text = text.replace(
    'And "idhā" in poetry specifically, out of necessity. An example of it is the statement of Ibn Jinnī:\nBe content with what your Lord has enriched you with through wealth ... so if poverty befalls you, then adorn yourself.',
    'In addition to these nine nouns there is "idhā" when used in poetry—as the author mentioned—due to poetic necessity. An example is the statement of the poet:\nEnrich yourself with what your Lord has made you rich by — but if you are stricken with poverty then beautify yourself [with patience].',
)
text = text.replace(
    "¹²⁷ Ibn Jinnī, al-Khaṣāʾiṣ.",
    "¹²⁷ See Ibn Jinnī, al-Khaṣāʾiṣ, on whether diacritics may be changed for poetic rhythm out of necessity.",
)

text = text.replace(
    '{Those who disbelieved had not} and {Say, "You do not believe."}',
    '{Those who disbelieved} and {Say, "You have not [yet] believed ..."}',
)
text = text.replace(
    "{They have not yet tasted the punishment.}",
    "{They have not yet tasted My punishment.}",
)
text = text.replace(
    '"Did he not do good to you?"',
    '"Have I not yet been good to you?"',
)
text = text.replace(
    "{That your Lord may decree upon us.}",
    "{Let your Lord put an end to us.}",
)
text = text.replace(
    "{Our Lord, do not impose blame upon us} and {And do not burden us with that which we have no ability to bear.}",
    "{Our Lord, punish us not} and {And lay not upon us a burden}.",
)

path.write_text(text, encoding="utf-8")
print("ok", path)

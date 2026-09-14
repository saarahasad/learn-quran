/** Tuḥfat commentary — إعراب المعرب بالحروف (pp. 155–169) */

function b(ar, en, label = null, footnote = null) {
  return { label, ar, en, footnote };
}

export const IRAAB_HARUF_AFTER = {
  25: [
    b("[إِعْرَابُ الْمُثَنَّى]", "[The Inflection of the Dual Form]"),

    b(
      "قَالَ: فَأَمَّا التَّثْنِيَةُ فَتُرْفَعُ بِالْأَلِفِ، وَتُنْصَبُ وَتُخْفَضُ بِالْيَاءِ.",
      "He said: As for the dual form, then the state of rafʿ is indicated by the letter alif, the states of naṣb and khafḍ are indicated by the letter yā.",
      "قَالَ",
    ),

    b(
      "وَأَقُولُ: الْأَوَّلُ مِنَ الْأَشْيَاءِ الَّتِي تُعْرَبُ بِالْحُرُوفِ (التَّثْنِيَةُ)، وَهِيَ: الْمُثَنَّى كَمَا عَلِمْتَ، وَقَدْ عَرَفْتَ فِيمَا سَبَقَ تَعْرِيفَ الْمُثَنَّى.",
      "I say: The first of the four things that inflect with the letters is al-tathniyah i.e. the dual form, as we mentioned above. You should already know the definition of the dual form from what has preceded.",
      "وَأَقُولُ",
    ),

    b(
      "وَحُكْمُهُ: أَنْ يُرْفَعَ بِالْأَلِفِ نِيَابَةً عَنِ الضَّمَّةِ، وَيُنْصَبَ وَيُخْفَضَ بِالْيَاءِ الْمَفْتُوحِ مَا قَبْلَهَا الْمَكْسُورِ مَا بَعْدَهَا نِيَابَةً عَنِ الْفَتْحَةِ أَوِ الْكَسْرَةِ، وَيُوصَلُ بِهِ بَعْدَ الْأَلِفِ أَوِ الْيَاءِ نُونٌ تَكُونُ عِوَضًا عَنِ التَّنْوِينِ الَّذِي يَكُونُ فِي الِاسْمِ الْمُفْرَدِ، وَلَا تُحْذَفُ هَذِهِ النُّونُ إِلَّا عِنْدَ الْإِضَافَةِ.",
      "The rulings related to it: It becomes marfūʿ with the letter alif serving in place of the ḍammah. It becomes manṣūb and makhfūḍ with the letter yā, the letter before it has a fatḥah and that which comes after it has a kasrah, and this serves in place of the fatḥah or the kasrah. A letter nūn is connected to the end of the letter alif or yā and this serves as a compensatory mechanism for the tanwīn that is found in the singular noun. This nūn is not removed except in the possessive compound.",
    ),

    b(
      "فَمِثَالُ الْمُثَنَّى الْمَرْفُوعِ (حَضَرَ الْقَاضِيَانِ)، وَ(قَالَ رَجُلَانِ) فَكُلٌّ مِنْ (الْقَاضِيَانِ) وَ(رَجُلَانِ) مَرْفُوعٌ لِأَنَّهُ فَاعِلٌ، وَعَلَامَةُ رَفْعِهِ الْأَلِفُ نِيَابَةً عَنِ الضَّمَّةِ، لِأَنَّهُ مُثَنًّى، وَالنُّونُ عِوَضٌ عَنِ التَّنْوِينِ فِي الِاسْمِ الْمُفْرَدِ.",
      "Examples of the marfūʿ dual form are, \"the two judges were present\" and \"two men said\". Both of the words \"the two judges\" and \"two men\" are marfūʿ due to them being subjects. The sign of them being marfūʿ is the alif serving as a representative for the ḍammah due to them being in the dual form. And the letter nūn serves as a compensatory mechanism for the tanwīn that is found in the singular noun.",
    ),

    b(
      "وَمِثَالُ الْمُثَنَّى الْمَنْصُوبِ (أَحِبُّ الْمُؤَدَّبَيْنِ) وَ(أَكْرَهُ الْمُتَكَاسِلَيْنِ) فَكُلٌّ مِنْ (الْمُؤَدَّبَيْنِ) وَ(الْمُتَكَاسِلَيْنِ) مَنْصُوبٌ، لِأَنَّهُ مَفْعُولٌ بِهِ، وَعَلَامَةُ نَصْبِهِ الْيَاءُ الْمَفْتُوحُ مَا قَبْلَهَا الْمَكْسُورُ مَا بَعْدَهَا نِيَابَةً عَنِ الْفَتْحَةِ، لِأَنَّهُ مُثَنًّى، وَالنُّونُ عِوَضٌ عَنِ التَّنْوِينِ فِي الِاسْمِ الْمُفْرَدِ.",
      "Examples of the manṣūb dual form are, \"I love the two well mannered ones\" and \"I dislike the two lazy ones.\" Both of the words \"the two well mannered ones\" and \"the two lazy ones\" are manṣūb due to being objects. The sign of them being manṣūb is the letter yā, preceded by a letter with a fatḥah and followed by a letter with a kasrah, serving as a representative for the fatḥah due to them being dual forms. The letter nūn at the end is a compensatory mechanism for the tanwīn found in the singular noun.",
    ),

    b(
      "وَمِثَالُ الْمُثَنَّى الْمَخْفُوضِ (نَظَرْتُ إِلَى الْفَارِسَيْنِ عَلَى الْفَرَسَيْنِ) فَكُلٌّ مِنْ (الْفَارِسَيْنِ) وَ(الْفَرَسَيْنِ) مَخْفُوضٌ، لِدُخُولِ حَرْفِ الْخَفْضِ عَلَيْهِ، وَعَلَامَةُ خَفْضِهِ الْيَاءُ الْمَفْتُوحُ مَا قَبْلَهَا الْمَكْسُورُ مَا بَعْدَهَا نِيَابَةً عَنِ الْكَسْرَةِ، لِأَنَّهُ مُثَنًّى، وَالنُّونُ عِوَضٌ عَنِ التَّنْوِينِ فِي الِاسْمِ الْمُفْرَدِ.",
      "An example of the makhfūḍ dual form is, \"I looked at the two riders upon the two horses.\" Both of the words \"the two riders\" and \"the two horses\" are makhfūḍ due to being preceded by a particle of al-khafḍ. The sign of them being makhfūḍ is the letter yā, preceded by a letter with a fatḥah and followed by a letter with a kasrah, serving as a representative for the kasrah due to them being dual forms. The letter nūn at the end is a compensatory mechanism for the tanwīn found in the singular noun.",
    ),
  ],

  26: [
    b("[إِعْرَابُ جَمْعِ الْمُذَكَّرِ السَّالِمِ]", "[The Inflection of the Sound Masculine Plural]"),

    b(
      "قَالَ: وَأَمَّا جَمْعُ الْمُذَكَّرِ السَّالِمِ فَيُرْفَعُ بِالْوَاوِ، وَيُنْصَبُ وَيُخْفَضُ بِالْيَاءِ.",
      "He said: As for the sound masculine plural, then the state of rafʿ is indicated by the letter wāw, and both the conditions of naṣb and khafḍ are indicated by the letter yā.",
      "قَالَ",
    ),

    b(
      "وَأَقُولُ: الثَّانِي مِنَ الْأَشْيَاءِ الَّتِي تُعْرَبُ بِالْحُرُوفِ جَمْعُ الْمُذَكَّرِ السَّالِمِ وَقَدْ عَرَفْتَ فِيمَا سَبَقَ تَعْرِيفَ جَمْعِ الْمُذَكَّرِ السَّالِمِ.",
      "I say: The second of the four things that inflect with letters is the sound masculine plural. I have previously defined the sound masculine plural.",
      "وَأَقُولُ",
    ),

    b(
      "وَحُكْمُهُ: أَنْ يُرْفَعَ بِالْوَاوِ نِيَابَةً عَنِ الضَّمَّةِ وَيُنْصَبَ وَيُخْفَضَ بِالْيَاءِ، الْمَكْسُورُ مَا قَبْلَهَا الْمَفْتُوحُ مَا بَعْدَهَا نِيَابَةً عَنِ الْفَتْحَةِ أَوِ الْكَسْرَةِ، وَيُوصَلُ بِهِ بَعْدَ الْوَاوِ أَوِ الْيَاءِ نُونٌ تَكُونُ عِوَضًا عَنِ التَّنْوِينِ فِي الِاسْمِ الْمُفْرَدِ، وَتُحْذَفُ هَذِهِ النُّونُ عِنْدَ الْإِضَافَةِ كَنُونِ الْمُثَنَّى.",
      "The rulings related to it: It becomes marfūʿ with the letter wāw serving as a representative for the dammah. It becomes manṣūb and makhfūḍ with the letter yā which is preceded by a letter with a kasrah and followed by a letter with a fatha, serving as a representative for the fatḥa or the kasrah. A letter nūn is connected to the end of the letter wāw or yā and this serves as a compensatory mechanism for the tanwīn that is found in the singular noun. This nūn is not removed except in the possessive compound, as mentioned in the dual form.",
    ),

    b(
      "فَمِثَالُ جَمْعِ الْمُذَكَّرِ السَّالِمِ الْمَرْفُوعِ (حَضَرَ الْمُسْلِمُونَ) وَ(أَفْلَحَ الْآمِرُونَ بِالْمَعْرُوفِ) فَكُلٌّ مِنْ (الْمُسْلِمُونَ) وَ(الْآمِرُونَ) مَرْفُوعٌ لِأَنَّهُ فَاعِلٌ وَعَلَامَةُ رَفْعِهِ الْوَاوُ نِيَابَةً عَنِ الضَّمَّةِ، لِأَنَّهُ جَمْعُ مُذَكَّرٍ سَالِمٍ، وَالنُّونُ عِوَضٌ عَنِ التَّنْوِينِ فِي الِاسْمِ الْمُفْرَدِ.",
      "Examples of the marfūʿ sound masculine plural are, \"The Muslims were present\" and \"The enjoiners of good were successful\". Each of the words \"the Muslims\" and \"the enjoiners\" are marfūʿ due to being the subjects of their verbs. The sign of them being marfūʿ is the letter wāw serving as a representative for the dammah, due to them being sound masculine plurals. A letter nūn is connected to the end of the letter wāw and this serves as a compensatory mechanism for the tanwīn that is found in the singular noun.",
    ),

    b(
      "وَمِثَالُ جَمْعِ الْمُذَكَّرِ السَّالِمِ الْمَنْصُوبِ (رَأَيْتُ الْمُسْلِمِينَ)، وَ(احْتَرَمْتُ الْآمِرِينَ بِالْمَعْرُوفِ)، فَكُلٌّ مِنْ (الْمُسْلِمِينَ) وَ(الْآمِرِينَ) مَنْصُوبٌ، لِأَنَّهُ مَفْعُولٌ بِهِ، وَعَلَامَةُ نَصْبِهِ الْيَاءُ، الْمَكْسُورُ مَا قَبْلَهَا الْمَفْتُوحُ مَا بَعْدَهَا، لِأَنَّهُ جَمْعُ مُذَكَّرٍ سَالِمٍ، وَالنُّونُ عِوَضٌ عَنِ التَّنْوِينِ فِي الِاسْمِ الْمُفْرَدِ.",
      "Examples of the manṣūb sound masculine plural are, \"I saw the Muslims\" and \"I respected the enjoiners of good.\" Each of the words \"the Muslims\" and \"the enjoiners\" are manṣūb due to being the objects of their verbs. The sign of them being manṣūb is the letter yā—preceded by a letter with a kasrah and followed by a letter with a fatḥa—serving as a representative for the dammah, due to them being sound masculine plurals. A letter nūn is connected to the end of the letter yā and this serves as a compensatory mechanism for the tanwīn that is found in the singular noun.",
    ),

    b(
      "وَمِثَالُ جَمْعِ الْمُذَكَّرِ السَّالِمِ الْمَخْفُوضِ: (اتَّصَلْتُ بِالْآمِرِينَ بِالْمَعْرُوفِ) وَ(رَضِيَ اللَّهُ عَنِ الْمُؤْمِنِينَ) فَكُلٌّ مِنْ (الْآمِرِينَ)، وَ(الْمُؤْمِنِينَ) مَخْفُوضٌ، لِدُخُولِ حَرْفِ الْخَفْضِ عَلَيْهِ، وَعَلَامَةُ خَفْضِهِ الْيَاءُ الْمَكْسُورُ مَا قَبْلَهَا الْمَفْتُوحُ مَا بَعْدَهَا، لِأَنَّهُ جَمْعُ مُذَكَّرٍ سَالِمٍ، وَالنُّونُ عِوَضٌ عَنِ التَّنْوِينِ فِي الِاسْمِ الْمُفْرَدِ.",
      "Examples of the makhfūḍ sound masculine plural are, \"I attached myself to the enjoiners of good\" and \"And Allah is pleased with the faithful believers\". Each of the words \"the enjoiners\" and \"the faithful believers\" are makhfūḍ due to being preceded by a particle of al-khafḍ. The sign of them being makhfūḍ is the letter yā—preceded by a letter with a kasrah and followed by a letter with a fatḥa due to them being sound masculine plurals. A letter nūn is connected to the end of the letter yā and this serves as a compensatory mechanism for the tanwīn that is found in the singular noun.",
    ),
  ],

  27: [
    b("[إِعْرَابُ الْأَسْمَاءِ الْخَمْسَةِ]", "[The Inflection of the Five Nouns]"),

    b(
      "قَالَ: وَأَمَّا الْأَسْمَاءُ الْخَمْسَةُ فَتُرْفَعُ بِالْوَاوِ، وَتُنْصَبُ بِالْأَلِفِ، وَتُخْفَضُ بِالْيَاءِ.",
      "He said: As for the five nouns, then the state of rafʿ with them is indicated with the letter wāw and the state of naṣb is indicated with the letter alif, and the state of khafḍ is indicated with the letter yā.",
      "قَالَ",
    ),

    b(
      "وَأَقُولُ: الثَّالِثُ مِنَ الْأَشْيَاءِ الَّتِي تُعْرَبُ بِالْحُرُوفِ الْأَسْمَاءُ الْخَمْسَةُ وَقَدْ سَبَقَ بَيَانُهَا وَبَيَانُ شُرُوطِ إِعْرَابِهَا هَذَا الْإِعْرَابَ.",
      "I say: The third of the four things that inflect with the letters is the five nouns which have been previously explained as well as the conditions for their inflections.",
      "وَأَقُولُ",
    ),

    b(
      "وَحُكْمُهَا: أَنْ تُرْفَعَ بِالْوَاوِ نِيَابَةً عَنِ الضَّمَّةِ، وَتُنْصَبَ بِالْأَلِفِ نِيَابَةً عَنِ الْفَتْحَةِ وَتُخْفَضَ بِالْيَاءِ نِيَابَةً عَنِ الْكَسْرَةِ.",
      "The rulings related to this: They become marfūʿ with the letter wāw serving in place of the ḍammah. They become manṣūb with the letter alif serving in place of the fatḥah. They become makhfūḍ with the letter yā serving in place of the kasrah.",
    ),

    b(
      "فَمِثَالُ الْأَسْمَاءِ الْخَمْسَةِ الْمَرْفُوعَةِ (إِذَا أَمَرَكَ أَبُوكَ فَأَطِعْهُ) وَ(حَضَرَ أَبُوكَ مِنْ سَفَرِهِ)، فَكُلٌّ مِنْ (أَبُوكَ) وَ(أَخُوكَ) مَرْفُوعٌ، لِأَنَّهُ فَاعِلٌ، وَعَلَامَةُ رَفْعِهِ الْوَاوُ نِيَابَةً عَنِ الضَّمَّةِ، لِأَنَّهُ مِنَ الْأَسْمَاءِ الْخَمْسَةِ، وَالْكَافُ مُضَافٌ إِلَيْهِ، مَبْنِيٌّ عَلَى الْفَتْحِ فِي مَحَلِّ خَفْضٍ.",
      "Examples of the five nouns being marfūʿ are, \"If your father commands you [to do something] then obey him\" and \"Your brother arrived from his journey\". Each of the words \"your father\" and \"your brother\" are marfūʿ due to being subjects. The sign of them being marfūʿ is the letter wāw serving as a representative for the ḍammah, and this is due to them being from the five nouns. The letter kāf (i.e. abūka) is the muḍāf ilayhi, non-inflectable upon a fatḥah in the state of khafḍ.",
    ),

    b(
      "وَمِثَالُ الْأَسْمَاءِ الْخَمْسَةِ الْمَنْصُوبَةِ (أَطِعْ أَبَاكَ)، وَ(أَحِبَّ أَخَاكَ) فَكُلٌّ مِنْ (أَبَاكَ) وَ(أَخَاكَ) مَنْصُوبٌ، لِأَنَّهُ مَفْعُولٌ بِهِ، وَعَلَامَةُ نَصْبِهِ الْأَلِفُ نِيَابَةً عَنِ الْفَتْحَةِ، لِأَنَّهُ مِنَ الْأَسْمَاءِ الْخَمْسَةِ، وَالْكَافُ مُضَافٌ إِلَيْهِ، مَبْنِيٌّ عَلَى الْفَتْحِ فِي مَحَلِّ جَرٍّ، كَمَا سَبَقَ.",
      "Examples of the five nouns being manṣūb are, \"Obey your father\" and \"Love your brother\". Each of the words \"your father\" and \"your brother\" are manṣūb due to being the objects. The sign of them being manṣūb is the letter alif serving as a representative for the ḍammah, and this is due to them being from the five nouns. The letter kāf (i.e. abūka) is the muḍāf ilayhi, non-inflectable upon a fatḥah in the state of jarr, as we have explained previously.",
    ),

    b(
      "وَمِثَالُ الْأَسْمَاءِ الْخَمْسَةِ الْمَخْفُوضَةِ (اسْتَمِعْ إِلَى أَبِيكَ)، وَ(أَشْفِقْ عَلَى أَخِيكَ) فَكُلٌّ مِنْ (أَبِيكَ) وَ(أَخِيكَ) مَخْفُوضٌ، لِدُخُولِ حَرْفِ الْخَفْضِ عَلَيْهِ، وَعَلَامَةُ خَفْضِهِ الْيَاءُ نِيَابَةً عَنِ الْكَسْرَةِ، لِأَنَّهُ مِنَ الْأَسْمَاءِ الْخَمْسَةِ، وَالْكَافُ مُضَافٌ إِلَيْهِ كَمَا سَبَقَ.",
      "Examples of the five nouns being makhfūḍ are, \"Listen to your father\" and \"Have compassion for your brother\". Each of the words \"your father\" and \"your brother\" are makhfūḍ due to being preceded by a particle of al-khafḍ. The sign of them being makhfūḍ is the letter yā serving as a representative for the kasrah, and this is due to them being from the five nouns. The letter kāf (i.e. abūka) is the muḍāf ilayhi, non-inflectable upon a fatḥah in the state of jarr, as we have explained previously.",
    ),
  ],

  28: [
    b("[إِعْرَابُ الْأَفْعَالِ الْخَمْسَةِ]", "[The Inflection of the Five Verbs]"),

    b(
      "قَالَ: وَأَمَّا الْأَفْعَالُ الْخَمْسَةُ فَتُرْفَعُ بِالنُّونِ، وَتُنْصَبُ وَتُجْزَمُ بِحَذْفِهَا.",
      "He said: As for the five verbs then the state of rafʿ with them is indicated by [the presence] of the letter nūn. Both the states of naṣb and jazm are indicated by the removal of the letter nūn.",
      "قَالَ",
    ),

    b(
      "وَأَقُولُ: الرَّابِعُ مِنَ الْأَشْيَاءِ الَّتِي تُعْرَبُ بِالْحُرُوفِ الْأَفْعَالُ الْخَمْسَةُ وَقَدْ عَرَفْتَ فِيمَا سَبَقَ حَقِيقَةَ الْأَفْعَالِ الْخَمْسَةِ.",
      "I say: The final one of the four things that inflect with letters is the five verbs—I have previously defined the five verbs mentioned here.",
      "وَأَقُولُ",
    ),

    b(
      "وَحُكْمُهَا: أَنَّهَا تُرْفَعُ بِثُبُوتِ النُّونِ نِيَابَةً عَنِ الضَّمَّةِ، وَتُنْصَبُ وَتُجْزَمُ بِحَذْفِ هَذِهِ النُّونِ نِيَابَةً عَنِ الْفَتْحَةِ أَوِ السُّكُونِ.",
      "The rulings related to this: They become marfūʿ with the presence of the letter nūn serving as a representative for the ḍammah. They become manṣūb and majzūm with the removal of the letter nūn serving as a representative for the fatḥah or the sukūn.",
    ),

    b(
      "فَمِثَالُ الْأَفْعَالِ الْخَمْسَةِ الْمَرْفُوعَةِ (تَكْتُبَانِ) وَ(تَفْهَمَانِ) فَكُلٌّ مِنْهُمَا فِعْلٌ مُضَارِعٌ مَرْفُوعٌ، لِتَجَرُّدِهِ مِنَ النَّاصِبِ وَالْجَازِمِ، وَعَلَامَةُ رَفْعِهِ ثُبُوتُ النُّونِ، وَالْأَلِفُ ضَمِيرُ الْاثْنَيْنِ فَاعِلٌ، مَبْنِيٌّ عَلَى السُّكُونِ فِي مَحَلِّ رَفْعٍ.",
      "Examples of the five verbs being marfūʿ are, \"You two write\" and \"You two understand\". Both of them are marfūʿ muḍāriʿ verbs due to the absence of any nāṣib or jāzim, and the sign of them being so is the presence of the letter nūn. The letter alif is a pronoun of duality and the subject, un-inflectable upon a sukūn in the state of rafʿ.",
    ),

    b(
      "وَمِثَالُ الْأَفْعَالِ الْخَمْسَةِ الْمَنْصُوبَةِ (لَمْ تَحْزَنَا) وَ(لَمْ تَفْشَلَا) فَكُلٌّ مِنْهُمَا فِعْلٌ مُضَارِعٌ مَنْصُوبٌ بِـ(لَمْ)، وَعَلَامَةُ نَصْبِهِ حَذْفُ النُّونِ، وَالْأَلِفُ ضَمِيرُ الْاثْنَيْنِ فَاعِلٌ مَبْنِيٌّ عَلَى السُّكُونِ فِي مَحَلِّ رَفْعٍ.",
      "Examples of the five verbs being manṣūb are, \"You two will not grieve\" and \"You two will not lose heart\". Both of them are manṣūb muḍāriʿ verbs due to the word \"lan\", and the sign of them being so is the removal of the letter nūn. The letter alif is a pronoun of duality and the subject, un-inflectable upon a sukūn in the state of rafʿ.",
    ),

    b(
      "وَمِثَالُ الْأَفْعَالِ الْخَمْسَةِ الْمَجْزُومَةِ (لَمْ تُذَاكِرَا) وَ(لَمْ تَفْهَمَا) فَكُلٌّ مِنْهُمَا فِعْلٌ مُضَارِعٌ مَجْزُومٌ بِـ(لَمْ)، وَعَلَامَةُ جَزْمِهِ حَذْفُ النُّونِ، وَالْأَلِفُ ضَمِيرُ الْاثْنَيْنِ فَاعِلٌ مَبْنِيٌّ عَلَى السُّكُونِ فِي مَحَلِّ رَفْعٍ.",
      "Examples of the five verbs being majzūm are, \"You two don't revise\" and \"You two don't understand\". Both of them are majzūm muḍāriʿ verbs due to the word \"lam\", and the sign of them being so is the removal of the letter nūn. The letter alif is a pronoun of duality and the subject, un-inflectable upon a sukūn in the state of rafʿ.",
    ),
  ],
};

export const IRAAB_HARUF_EXERCISES = {
  titleAr: "تَمْرِينَاتٌ",
  titleEn: "Exercises",
  items: [
    {
      ar: "١- ضَعْ كُلَّ كَلِمَةٍ مِنَ الْكَلِمَاتِ الْآتِيَةِ فِي جُمْلَةٍ مُفِيدَةٍ، بِحَيْثُ تَكُونُ مَنْصُوبَةً وَبَيِّنْ عَلَامَةَ نَصْبِهَا:\nالْجَوُّ، الْغُبَارُ، الطَّرِيقُ، الْحَبْلُ، مُشْتَعِلَةٌ، الْقُطْنُ، الْمَدْرَسَةُ، الثَّوْبَانِ، الْمُخْلِصُونَ، الْمُسْلِمَاتُ، أَبِي، الْعَلَا، الرَّاضِي.",
      en: "One. Place all of the following words into beneficial sentences where they are in the manṣūb state, and identify the sign of them being manṣūb:",
    },
    {
      ar: "٢- ضَعْ كُلَّ كَلِمَةٍ مِنَ الْكَلِمَاتِ الْآتِيَةِ فِي جُمْلَةٍ مُفِيدَةٍ، بِحَيْثُ تَكُونُ مَخْفُوضَةً، وَبَيِّنْ عَلَامَةَ خَفْضِهَا:\nأَبُوكَ، الْمُهَذَّبُونَ، الْقَائِمَاتُ بِوَاجِبَيْهِنَّ، الْمُفْتَرِسُ، أَحْمَدُ، مُسْتَدِيرَةٌ، الْبَابُ، النَّخْلَتَانِ، الْفَأْرَتَانِ، الْقَاضِي، الْوَرَى.",
      en: "Two. Place all of the following words into beneficial sentences where they are in the state of khafḍ, and identify the sign of them being makhfūḍ:",
    },
    {
      ar: "٣- ضَعْ كُلَّ كَلِمَةٍ مِنَ الْكَلِمَاتِ الْآتِيَةِ فِي جُمْلَةٍ مُفِيدَةٍ، بِحَيْثُ تَكُونُ مَرْفُوعَةً، وَبَيِّنْ عَلَامَةَ رَفْعِهَا:\nأَبَوَيْهِ، الْمُصْلِحِينَ، الْمُرْشِدُ، الْغُزَاةُ، الْآبَاءُ، الْأُمَّهَاتُ، الْبَانِي، ابْنِي، أَخِيكَ.",
      en: "Three. Place all of the following words into beneficial sentences where they are in the state of rafʿ, and identify the sign of them being marfūʿ.",
    },
    {
      ar: "٤- بَيِّنْ فِي الْعِبَارَاتِ الْآتِيَةِ الْمَرْفُوعَ وَالْمَنْصُوبَ وَالْمَجْزُومَ مِنَ الْأَفْعَالِ، وَالْمَرْفُوعَ وَالْمَنْصُوبَ وَالْمَخْفُوضَ مِنَ الْأَسْمَاءِ، وَبَيِّنْ مَعَ كُلٍّ وَاحِدٍ عَلَامَةَ إِعْرَابِهِ:\n(أ) اسْتَشَارَ عُمَرُ بْنُ عَبْدِ الْعَزِيزِ فِي قَوْمٍ يَسْتَعْمِلُهُمْ، فَقَالَ لَهُ أَصْحَابُهُ: عَلَيْكَ بِأَهْلِ الْعَذْرِ، قَالَ: وَمَنْ هُمْ؟ قَالَ: الَّذِينَ إِنْ عَدَلُوا فَهُوَ مَا رَجَوْتُ، وَإِنْ قَصَّرُوا قَالَ النَّاسُ: قَدِ اجْتَهَدَ عُمَرُ.\n(ب) أَحْضَرَ الرَّشِيدُ رَجُلًا لِيُوَلِّيَهُ الْقَضَاءَ، فَقَالَ لَهُ: إِنِّي لَا أُحْسِنُ الْقَضَاءَ وَلَا أَنَا فَقِيهٌ، فَقَالَ الرَّشِيدُ: فِيكَ ثَلَاثُ خِلَالٍ: لَكَ شَرَفٌ وَالشَّرَفُ يَمْنَعُ صَاحِبَهُ مِنَ الدَّنَاءَةِ، وَلَكَ حِلْمٌ يَمْنَعُكَ مِنَ الْعَجَلَةِ، وَمَنْ لَمْ يَعْجَلْ قَلَّ خَطَؤُهُ، وَأَنْتَ رَجُلٌ تَشَاوِرُ فِي أَمْرِكَ، وَمَنْ شَاوَرَ كَثُرَ صَوَابُهُ، وَأَمَّا الْفِقْهُ فَسَيَنْضَمُ إِلَيْكَ مَنْ تَتَفَقَّهُ بِهِ، فَوَلَّى فَمَا وَجَدُوا فِيهِ مَطْعَنًا.",
      en: "Four. In the following sentences, detail the marfūʿ, manṣūb and majzūm verbs, and detail the marfūʿ, manṣūb and makhfūḍ nouns. Also provide for each one the sign of its inflection:",
    },
    {
      ar: "٥- ثَنِّ الْكَلِمَاتِ الْآتِيَةِ، ثُمَّ اسْتَعْمِلْ كُلَّ مُثَنًّى فِي جُمْلَتَيْنِ مُفِيدَتَيْنِ بِحَيْثُ يَكُونُ فِي وَاحِدَةٍ مِنَ الْجُمْلَتَيْنِ مَرْفُوعًا، وَفِي الثَّانِيَةِ مَخْفُوضًا.\nالدَّوَاةُ، الْوَالِدُ، الْحَدِيقَةُ، الْقَلَمُ، الْكِتَابُ، الْبَلَدُ، الْمَعْهَدُ.",
      en: "Five. Convert the below words into the dual form, then utilise these dual form words into two beneficial sentences where in the first of them the dual form word is marfūʿ and in the second of them it is makhfūḍ.",
    },
    {
      ar: "٦- اجْمَعِ الْكَلِمَاتِ الْآتِيَةِ جَمْعَ مُذَكَّرٍ سَالِمًا، وَاسْتَعْمِلْ كُلَّ جَمْعٍ فِي جُمْلَتَيْنِ مُفِيدَتَيْنِ بِشَرْطِ أَنْ يَكُونَ مَرْفُوعًا فِي إِحْدَاهُمَا وَمَنْصُوبًا فِي الْأُخْرَى:\nالصَّالِحُ، الْمُذَاكِرُ، الْكَسَلُ، الْمُتَّقِي، الرَّاضِي، مُحَمَّدٌ.",
      en: "Six. Convert the below words into the sound masculine plural, then utilise these plural form words in two beneficial sentences where in the first of them the plural is marfūʿ and in the second of them it is manṣūb.",
    },
    {
      ar: "٧- ضَعْ كُلَّ فِعْلٍ مِنَ الْأَفْعَالِ الْمُضَارِعَةِ الْآتِيَةِ فِي ثَلَاثِ جُمَلٍ مُفِيدَةٍ، بِشَرْطِ أَنْ يَكُونَ مَرْفُوعًا فِي إِحْدَاهَا، وَمَنْصُوبًا فِي الثَّانِيَةِ، وَمَجْزُومًا فِي الثَّالِثَةِ:\nيَلْعَبُ، يُؤَدِّي وَاجِبَهُ، يَسْأَمُونَ، تَحْضُرِينَ، يَرْجُو الثَّوَابَ، يُسَافِرَانِ.",
      en: "Seven. Place all of the following muḍāriʿ verbs into three beneficial sentences. In the first sentence they should be marfūʿ, in the second sentence they should be manṣūb and in the third sentence they should be majzūm.",
    },
  ],
};

export const IRAAB_HARUF_END = {
  titleAr: "أَسْئِلَةٌ",
  titleEn: "Questions",
  items: [
    {
      ar: "إِلَى كَمْ قِسْمٍ تَنْقَسِمُ الْمُعْرَبَاتُ؟",
      en: "Into how many categories is inflection categorised into?",
    },
    {
      ar: "مَا هِيَ الْمُعْرَبَاتُ الَّتِي تُعْرَبُ بِالْحَرَكَاتِ؟",
      en: "What are the inflected words that inflect by diacritics?",
    },
    {
      ar: "مَا هِيَ الْمُعْرَبَاتُ الَّتِي تُعْرَبُ بِالْحُرُوفِ؟",
      en: "What are the inflected words that inflect by letters?",
    },
    {
      ar: "مَثِّلْ لِلِاسْمِ الْمُفْرَدِ الْمُنْصَرِفِ فِي حَالَةِ الرَّفْعِ وَالنَّصْبِ وَالْخَفْضِ، وَمَثِّلْ لِجَمْعِ التَّكْسِيرِ كَذَلِكَ.",
      en: "Provide an example of the inflectable singular noun in the rafʿ, naṣb and khafḍ states. Provide the same for the broken plural.",
    },
    {
      ar: "بِمَاذَا يُنْصَبُ جَمْعُ الْمُؤَنَّثِ السَّالِمِ؟",
      en: "With what does the sound feminine plural become manṣūb with?",
    },
    {
      ar: "مَثِّلْ لِجَمْعِ الْمُؤَنَّثِ السَّالِمِ فِي حَالَةِ النَّصْبِ وَالرَّفْعِ وَالْخَفْضِ.",
      en: "Provide an example of the sound feminine plural in the naṣb, rafʿ and khafḍ states.",
    },
    {
      ar: "بِمَاذَا يُخْفَضُ الِاسْمُ الَّذِي لَا يَنْصَرِفُ؟",
      en: "With what does the non-inflectable noun become makhfūḍ with?",
    },
    {
      ar: "مَثِّلْ لِلِاسْمِ الَّذِي لَا يَنْصَرِفُ فِي حَالَةِ الْخَفْضِ وَالرَّفْعِ وَالنَّصْبِ.",
      en: "Provide an example of the non-inflectable noun in the khafḍ, rafʿ and naṣb states.",
    },
    {
      ar: "بِمَاذَا يُجْزَمُ الْفِعْلُ الْمُضَارِعُ الْمُعْتَلُّ الْآخِرُ؟",
      en: "With what does the muḍāriʿ verb with a defective ending become majzūm?",
    },
    {
      ar: "مَثِّلْ لِلْمُضَارِعِ الْمُعْتَلِّ الْآخِرِ فِي حَالَةِ الْجَزْمِ.",
      en: "Provide an example of the muḍāriʿ verb with a defective ending in the state of jazm.",
    },
    {
      ar: "مَا هِيَ الْمُعْرَبَاتُ الَّتِي تُعْرَبُ بِالْحُرُوفِ؟",
      en: "What are the inflected words that inflect with letters?",
    },
    {
      ar: "وَبِمَاذَا يُرْفَعُ الْمُثَنَّى؟",
      en: "With what does the dual form become marfūʿ with?",
    },
    {
      ar: "وَبِمَاذَا يُنْصَبُ وَيُخْفَضُ؟",
      en: "With what does it become manṣūb and makhfūḍ?",
    },
    {
      ar: "بِمَاذَا يُرْفَعُ جَمْعُ الْمُذَكَّرِ السَّالِمِ؟",
      en: "With what does the sound masculine plural become marfūʿ with?",
    },
    {
      ar: "وَبِمَاذَا يُنْصَبُ وَيُخْفَضُ؟",
      en: "And with what does it become manṣūb and makhfūḍ with?",
    },
    {
      ar: "مَثِّلْ لِلْمُثَنَّى فِي حَالَةِ الرَّفْعِ وَالنَّصْبِ وَالْخَفْضِ.",
      en: "Provide examples of the dual form in the state of rafʿ, naṣb and khafḍ.",
    },
    {
      ar: "وَمَثِّلْ لِجَمْعِ الْمُذَكَّرِ السَّالِمِ كَذَلِكَ.",
      en: "Provide examples of the sound masculine plural in a similar manner.",
    },
    {
      ar: "بِمَاذَا تَعْرِفُ الْأَسْمَاءَ الْخَمْسَةَ فِي حَالَةِ الرَّفْعِ وَالنَّصْبِ؟ وَبِمَاذَا تُخْفَضُ؟",
      en: "How do you identify that the five nouns are in the state of rafʿ and naṣb? And how so for when they are in the state of khafḍ?",
    },
    {
      ar: "مَثِّلْ لِلْأَسْمَاءِ الْخَمْسَةِ فِي حَالَةِ الرَّفْعِ وَالنَّصْبِ، وَمَثِّلْ لِلْأَفْعَالِ الْخَمْسَةِ فِي أَحْوَالِهَا الثَّلَاثَةِ",
      en: "Provide an example of the five nouns in the state of rafʿ and naṣb. Provide an example of the five verbs in each of their three grammatical states.",
    },
  ],
};

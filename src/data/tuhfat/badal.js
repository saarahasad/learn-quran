/** Study commentary — باب البدل, following the teaching of al-Tuḥfah al-Saniyyah. */

function b(ar, en, label = null, footnote = null) {
  return { label, ar, en, footnote };
}

export const BADAL_AFTER = {
  0: [
    b("[الْبَدَلُ]", "[The Substitute]"),

    b(
      "قَالَ: إِذَا أُبْدِلَ اسْمٌ مِنِ اسْمٍ، أَوْ فِعْلٌ مِنْ فِعْلٍ، تَابَعَهُ فِي جَمِيعِ إِعْرَابِهِ.",
      "He said: When a noun is substituted for a noun, or a verb for a verb, it follows it in all of its iʿrāb.",
      "قَالَ",
    ),

    b(
      "وَأَقُولُ: الْبَدَلُ فِي اللُّغَةِ الْعِوَضُ. تَقُولُ: أَبْدَلْتُ كَذَا مِنْ كَذَا، إِذَا جَعَلْتَهُ عِوَضًا عَنْهُ. وَفِي اصْطِلَاحِ النُّحَاةِ: التَّابِعُ الْمَقْصُودُ بِالْحُكْمِ بِلَا وَاسِطَةٍ.",
      "I say: In ordinary speech, badal is a replacement. You say “I put this in place of that” when the second stands instead of the first. For the grammarians it is the follower that the ruling itself is aimed at, with no particle between the two.",
      "وَأَقُولُ",
    ),

    b(
      "فَقَوْلُنَا ( تَابِعٌ ) يَدْخُلُ فِيهِ كُلُّ التَّوَابِعِ. وَ( الْمَقْصُودُ بِالْحُكْمِ ) يُخْرِجُ النَّعْتَ وَالتَّوْكِيدَ وَعَطْفَ الْبَيَانِ، لِأَنَّ الْحُكْمَ فِيهَا لِلْمَتْبُوعِ، وَالتَّابِعُ مُتَمِّمٌ. وَ( بِلَا وَاسِطَةٍ ) يُخْرِجُ عَطْفَ النَّسَقِ، لِأَنَّ الْمَعْطُوفَ مَقْصُودٌ، لَكِنْ بِوَاسِطَةِ حَرْفِ الْعَطْفِ.",
      "“Follower” takes in every follower. “Aimed at by the ruling” leaves out the adjective, the emphasis, and explanatory conjunction: in those, the ruling belongs to the first word, and the follower only completes it. “With no particle between” leaves out sequential conjunction: the conjoined word is aimed at, but only through the conjunction particle.",
    ),

    b(
      "وَحُكْمُهُ أَنْ يَتْبَعَ الْمُبْدَلَ مِنْهُ فِي إِعْرَابِهِ. فَإِنْ كَانَ الْمُبْدَلُ مِنْهُ مَرْفُوعًا فَالْبَدَلُ مَرْفُوعٌ، نَحْوُ ( حَضَرَ إِبْرَاهِيمُ أَبُوكَ ). وَإِنْ كَانَ مَنْصُوبًا فَالْبَدَلُ مَنْصُوبٌ، نَحْوُ ( قَابَلْتُ إِبْرَاهِيمَ أَخَاكَ ). وَإِنْ كَانَ مَخْفُوضًا فَالْبَدَلُ مَخْفُوضٌ، نَحْوُ ( أَعْجَبَتْنِي أَخْلَاقُ مُحَمَّدٍ خَالِكَ ). وَإِنْ كَانَ مَجْزُومًا فَالْبَدَلُ مَجْزُومٌ، نَحْوُ ( مَنْ يَشْكُرْ رَبَّهُ يَسْجُدْ لَهُ يَفُزْ ). فَيَفُزْ بَدَلٌ مِنْ يَسْجُدْ.",
      "It follows the first word in case. If the first is marfūʿ, so is the substitute: “Ibrāhīm, your father, attended.” If manṣūb: “I met Ibrāhīm, your brother.” If makhfūḍ: “the character of Muḥammad, your uncle, pleased me.” If majzūm: “whoever thanks his Lord, prostrates to Him, succeeds” — yafuz is a substitute for yasjud, and both are majzūm.",
    ),
  ],

  1: [
    b("[أَنْوَاعُ الْبَدَلِ]", "[The Kinds of Substitute]"),

    b(
      "قَالَ: وَهُوَ عَلَى أَرْبَعَةِ أَقْسَامٍ: بَدَلُ الشَّيْءِ مِنَ الشَّيْءِ، وَبَدَلُ الْبَعْضِ مِنَ الْكُلِّ، وَبَدَلُ الِاشْتِمَالِ، وَبَدَلُ الْغَلَطِ. نَحْوُ: قَامَ زَيْدٌ أَخُوكَ، وَأَكَلْتُ الرَّغِيفَ ثُلُثَهُ، وَنَفَعَنِي زَيْدٌ عِلْمُهُ، وَرَأَيْتُ زَيْدًا الْفَرَسَ، أَرَدْتَ أَنْ تَقُولَ الْفَرَسَ فَغَلِطْتَ فَأَبْدَلْتَ زَيْدًا مِنْهُ.",
      "He said: It is of four kinds: the thing for the thing, the part for the whole, inclusion, and the slip. As in: Zayd, your brother, stood; I ate the loaf, a third of it; Zayd benefited me, his knowledge; I saw Zayd, the horse — you meant to say the horse, your tongue slipped, and you put Zayd in its place.",
      "قَالَ",
    ),

    b(
      "وَأَقُولُ: الْأَوَّلُ بَدَلُ الْكُلِّ مِنَ الْكُلِّ، وَيُسَمَّى الْبَدَلَ الْمُطَابِقَ. وَضَابِطُهُ أَنْ يَكُونَ الْبَدَلُ عَيْنَ الْمُبْدَلِ مِنْهُ. تَقُولُ: ( زَارَنِي مُحَمَّدٌ عَمُّكَ ). وَمِنْهُ ﴿وَلِلَّهِ عَلَى النَّاسِ حِجُّ الْبَيْتِ﴾ إِذَا جُعِلَ الثَّانِي هُوَ الْأَوَّلَ بِعَيْنِهِ، وَالْمَتْنُ مَثَّلَ لِلْمُطَابِقِ بِـ( قَامَ زَيْدٌ أَخُوكَ ).",
      "I say: The first is the whole for the whole, also called the matching substitute. The second word is the same thing as the first: “Muḥammad, your uncle, visited me.” The matn’s example is “Zayd, your brother, stood.” Your brother is Zayd, the whole of him.",
      "وَأَقُولُ",
    ),

    b(
      "وَالثَّانِي بَدَلُ الْبَعْضِ مِنَ الْكُلِّ. وَضَابِطُهُ أَنْ يَكُونَ الْبَدَلُ جُزْءًا مِنَ الْمُبْدَلِ مِنْهُ، سَوَاءٌ كَانَ أَقَلَّ مِنَ الْبَاقِي أَوْ مُسَاوِيًا لَهُ أَوْ أَكْثَرَ مِنْهُ. تَقُولُ: ( حَفِظْتُ الْقُرْآنَ ثُلُثَهُ ) أَوْ ( نِصْفَهُ ) أَوْ ( ثُلُثَيْهِ ). وَيَجِبُ أَنْ يُضَافَ إِلَى ضَمِيرٍ يَعُودُ إِلَى الْمُبْدَلِ مِنْهُ. وَمِنْهُ ﴿مَنِ اسْتَطَاعَ إِلَيْهِ سَبِيلًا﴾، بَدَلُ بَعْضٍ مِنَ النَّاسِ.",
      "The second is the part for the whole. The substitute is a portion of the first word, whether that portion is smaller than the rest, equal to it, or larger. “I memorised the Qurʾān, a third of it,” or “a half of it,” or “two thirds of it.” It must be annexed to a pronoun that goes back to the first word. “Whoever is able to find a way” is a part of “the people.”",
      null,
      "Āl ʿImrān 97.",
    ),

    b(
      "وَالثَّالِثُ بَدَلُ الِاشْتِمَالِ. وَضَابِطُهُ أَنْ يَكُونَ بَيْنَ الْبَدَلِ وَالْمُبْدَلِ مِنْهُ ارْتِبَاطٌ، لَيْسَ هُوَ الْكُلَّ وَلَا الْجُزْءَ. وَيُضَافُ هُوَ أَيْضًا إِلَى ضَمِيرٍ يَعُودُ إِلَى الْمُبْدَلِ مِنْهُ. تَقُولُ: ( أَعْجَبَتْنِي الْجَارِيَةُ حَدِيثُهَا )، وَ( نَفَعَنِي الْأُسْتَاذُ حُسْنُ أَخْلَاقِهِ ). فَالْحَدِيثُ لَيْسَ قِطْعَةً مِنَ الْجَارِيَةِ، وَهُوَ مِمَّا تَشْتَمِلُ عَلَيْهِ.",
      "The third is inclusion. The two words are tied together, but the second is neither the whole of the first nor a piece of it. It too is annexed to a pronoun that goes back to the first word: “the girl pleased me, her talk,” “the teacher benefited me, the goodness of his character.” Her talk is not a piece of the girl. It is something she has.",
    ),

    b(
      "وَالرَّابِعُ بَدَلُ الْغَلَطِ، وَهُوَ ثَلَاثَةُ أَضْرُبٍ. الْأَوَّلُ بَدَلُ الْبَدَاءِ: تَقْصِدُ شَيْئًا فَتَقُولُهُ، ثُمَّ يَبْدُو لَكَ أَنَّ غَيْرَهُ أَوْلَى، فَتَعْدِلُ إِلَيْهِ. تَقُولُ: ( هَذِهِ الْجَارِيَةُ بَدْرٌ ) ثُمَّ تَقُولُ: ( شَمْسٌ ). وَالثَّانِي بَدَلُ النِّسْيَانِ: تَبْنِي الْكَلَامَ عَلَى ظَنٍّ، ثُمَّ تَعْلَمُ خَطَأَهُ. رَأَيْتَ شَبَحًا فَظَنَنْتَهُ إِنْسَانًا، فَقُلْتَ ( رَأَيْتُ إِنْسَانًا )، ثُمَّ تَبَيَّنَ أَنَّهُ فَرَسٌ، فَقُلْتَ ( فَرَسًا ). وَالثَّالِثُ بَدَلُ الْغَلَطِ: تُرِيدُ كَلَامًا فَيَسْبِقُ لِسَانُكَ إِلَى غَيْرِهِ، ثُمَّ تَعْدِلُ إِلَى مَا أَرَدْتَ. تَقُولُ: ( رَأَيْتُ مُحَمَّدًا الْفَرَسَ ). وَهَذَا الْأَخِيرُ هُوَ مِثَالُ الْمَتْنِ.",
      "The fourth is the slip, and it has three shapes. First, a change of mind: you meant the first word, then a better one occurs to you, and you turn to it. “This girl is a full moon” — then “a sun.” Second, a forgotten mistake: you built the sentence on a belief, then you learn it was wrong. You saw a shape, thought it was a person, and said “I saw a person”; it came closer and was a horse, so you said “a horse.” Third, a slip of the tongue: you meant one word and another came out, then you correct it. “I saw Muḥammad, the horse.” That last one is the matn’s example.",
    ),
  ],
};

export const BADAL_END = {
  titleAr: "أَسْئِلَةٌ",
  titleEn: "Questions",
  items: [
    {
      ar: "مَا هُوَ الْبَدَلُ لُغَةً وَاصْطِلَاحًا؟",
      en: "What is the badal in ordinary speech, and in the grammarians’ usage?",
    },
    {
      ar: "فِيمَ يَتْبَعُ الْبَدَلُ الْمُبْدَلَ مِنْهُ؟",
      en: "In what does the substitute follow the word it replaces?",
    },
    {
      ar: "إِلَى كَمْ قِسْمٍ يَنْقَسِمُ الْبَدَلُ؟ مَثِّلْ لِكُلِّ قِسْمٍ.",
      en: "How many kinds of substitute are there? Give an example of each.",
    },
    {
      ar: "مَا الَّذِي يُشْتَرَطُ فِي بَدَلِ الْبَعْضِ وَبَدَلِ الِاشْتِمَالِ؟",
      en: "What is required in the part-substitute and the inclusion-substitute?",
    },
    {
      ar: "مَا أَقْسَامُ بَدَلِ الْغَلَطِ، وَمَا ضَابِطُ كُلِّ قِسْمٍ؟",
      en: "What are the kinds of the slip-substitute, and what marks each kind?",
    },
    {
      ar: "لِمَ خَرَجَ النَّعْتُ وَالتَّوْكِيدُ وَعَطْفُ النَّسَقِ مِنْ تَعْرِيفِ الْبَدَلِ؟",
      en: "Why do the adjective, the emphasis, and sequential conjunction fall outside the definition of the substitute?",
    },
  ],
};

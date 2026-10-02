/** Study commentary — باب العطف, following the teaching of al-Tuḥfah al-Saniyyah. */

function b(ar, en, label = null, footnote = null) {
  return { label, ar, en, footnote };
}

export const ATF_AFTER = {
  0: [
    b("[الْعَطْفُ]", "[Conjunction]"),

    b(
      "قَالَ: ( بَابُ الْعَطْفِ ) وَحُرُوفُ الْعَطْفِ عَشَرَةٌ، وَهِيَ: الْوَاوُ، وَالْفَاءُ، وَثُمَّ، وَأَوْ، وَأَمْ، وَإِمَّا، وَبَلْ، وَلَا، وَلَكِنْ، وَحَتَّى فِي بَعْضِ الْمَوَاضِعِ.",
      "He said: Chapter of Conjunction. The conjunction particles are ten: wāw, fāʾ, thumma, aw, am, immā, bal, lā, lākin, and ḥattā in some places.",
      "قَالَ",
    ),

    b(
      "وَأَقُولُ: الْعَطْفُ فِي اللُّغَةِ الْمَيْلُ. تَقُولُ: عَطَفَ فُلَانٌ عَلَى فُلَانٍ، إِذَا مَالَ إِلَيْهِ. وَفِي الِاصْطِلَاحِ قِسْمَانِ: عَطْفُ بَيَانٍ، وَعَطْفُ نَسَقٍ.",
      "I say: In ordinary speech, ʿaṭf is to incline toward someone. In grammar it is two things: explanatory conjunction, and sequential conjunction.",
      "وَأَقُولُ",
    ),

    b(
      "فَعَطْفُ الْبَيَانِ: تَابِعٌ جَامِدٌ، يُوَضِّحُ مَتْبُوعَهُ فِي الْمَعَارِفِ، وَيُخَصِّصُهُ فِي النَّكِرَاتِ، وَلَيْسَ بَيْنَهُمَا حَرْفٌ. تَقُولُ: ( جَاءَنِي مُحَمَّدٌ أَبُوكَ )، فَأَبُوكَ عَطْفُ بَيَانٍ عَلَى مُحَمَّدٍ، وَكِلَاهُمَا مَعْرِفَةٌ. وَمِنَ النَّكِرَةِ قَوْلُهُ تَعَالَى: ﴿مِنْ مَاءٍ صَدِيدٍ﴾، فَصَدِيدٌ يُخَصِّصُ الْمَاءَ.",
      "Explanatory conjunction is a non-derived follower. It clarifies a definite noun and narrows an indefinite one, and no particle stands between them. In “Muḥammad, your father, came to me,” أبوك explains Muḥammad, and both are definite. Among indefinites is “of water, pus”: صديد narrows which water is meant.",
      null,
      "Ibrāhīm 16. The second word does the work of an adjective, but it is not a derived description.",
    ),

    b(
      "وَعَطْفُ النَّسَقِ: التَّابِعُ الَّذِي يَتَوَسَّطُ بَيْنَهُ وَبَيْنَ مَتْبُوعِهِ أَحَدُ الْحُرُوفِ الْعَشَرَةِ. وَهَذَا هُوَ الَّذِي سَاقَهُ الْمَتْنُ.",
      "Sequential conjunction is the follower that has one of the ten particles between it and the word it follows. This is the conjunction the matn sets out.",
    ),

    b(
      "١ - الْوَاوُ لِمُطْلَقِ الْجَمْعِ. تَجْمَعُ بَيْنَ الِاثْنَيْنِ وَلَا تُرَتِّبُ. تَقُولُ: ( جَاءَ مُحَمَّدٌ وَعَلِيٌّ )، سَوَاءٌ جَاءَا مَعًا، أَوْ سَبَقَ أَحَدُهُمَا.",
      "One. Wāw joins the two and does not put them in order. “Muḥammad and ʿAlī came” is true if they came together, or if either came first.",
    ),

    b(
      "٢ - الْفَاءُ لِلتَّرْتِيبِ وَالتَّعْقِيبِ. الثَّانِي بَعْدَ الْأَوَّلِ بِلَا مُهْلَةٍ. تَقُولُ: ( قَدِمَ الْفُرْسَانُ فَالْمُشَاةُ ) إِذَا جَاءَ الْمُشَاةُ عَقِبَ الْفُرْسَانِ.",
      "Two. Fāʾ is order and immediacy. The second comes after the first with no delay: “the horsemen arrived, then the footmen,” when the footmen came right after.",
    ),

    b(
      "٣ - ثُمَّ لِلتَّرْتِيبِ مَعَ التَّرَاخِي. بَيْنَ الْأَوَّلِ وَالثَّانِي مُهْلَةٌ. تَقُولُ: ( أَرْسَلَ اللَّهُ مُوسَى ثُمَّ عِيسَى ثُمَّ مُحَمَّدًا ).",
      "Three. Thumma is order with a gap. Time passes between the first and the second: “Allah sent Mūsā, then ʿĪsā, then Muḥammad.”",
    ),

    b(
      "٤ - أَوْ لِلتَّخْيِيرِ أَوِ الْإِبَاحَةِ. وَالْفَرْقُ أَنَّ التَّخْيِيرَ لَا يَجُوزُ مَعَهُ الْجَمْعُ، وَالْإِبَاحَةَ يَجُوزُ مَعَهَا الْجَمْعُ. تَقُولُ فِي التَّخْيِيرِ: ( تَزَوَّجْ هِنْدًا أَوْ أُخْتَهَا )، فَلَا يُجْمَعُ بَيْنَهُمَا. وَتَقُولُ فِي الْإِبَاحَةِ: ( ادْرُسِ الْفِقْهَ أَوِ النَّحْوَ )، وَيَجُوزُ الْجَمْعُ بَيْنَهُمَا.",
      "Four. Aw is a choice, or a permission. With a choice you may not take both: “marry Hind or her sister.” With a permission you may take both: “study fiqh or grammar.”",
    ),

    b(
      "٥ - أَمْ لِطَلَبِ التَّعْيِينِ بَعْدَ هَمْزَةِ الِاسْتِفْهَامِ. تَقُولُ: ( أَدَرَسْتَ الْفِقْهَ أَمِ النَّحْوَ؟ ).",
      "Five. Am asks which of the two is meant, after the interrogative hamzah: “Did you study fiqh, or grammar?”",
    ),

    b(
      "٦ - إِمَّا، بِشَرْطِ أَنْ تُسْبَقَ بِمِثْلِهَا، وَهِيَ كَـ( أَوْ ) فِي التَّخْيِيرِ وَالْإِبَاحَةِ. قَالَ تَعَالَى: ﴿فَإِمَّا مَنًّا بَعْدُ وَإِمَّا فِدَاءً﴾. وَتَقُولُ: ( تَزَوَّجْ إِمَّا هِنْدًا وَإِمَّا أُخْتَهَا ).",
      "Six. Immā must be preceded by another immā, and it carries the same two meanings as aw. “Thereafter either grace or ransom.” And: “marry either Hind or her sister.”",
      null,
      "Muḥammad 4.",
    ),

    b(
      "٧ - بَلْ لِلْإِضْرَابِ، وَهُوَ جَعْلُ مَا قَبْلَهَا كَالْمَسْكُوتِ عَنْهُ. تَقُولُ: ( مَا جَاءَ مُحَمَّدٌ بَلْ بَكْرٌ ). وَيُشْتَرَطُ أَنْ يَكُونَ الْمَعْطُوفُ مُفْرَدًا لَا جُمْلَةً، وَأَلَّا يَسْبِقَهَا اسْتِفْهَامٌ.",
      "Seven. Bal sets aside what came before it, as if it had been left unsaid: “Muḥammad did not come; rather Bakr.” Two conditions: the word after it is a single word, not a sentence, and no question stands before it.",
    ),

    b(
      "٨ - لَا، وَهِيَ تَنْفِي عَنِ الثَّانِي الْحُكْمَ الَّذِي ثَبَتَ لِلْأَوَّلِ. تَقُولُ: ( جَاءَ بَكْرٌ لَا خَالِدٌ ).",
      "Eight. Lā denies of the second the same ruling that was affirmed of the first: “Bakr came, not Khālid.”",
    ),

    b(
      "٩ - لَكِنْ، وَهِيَ تُقَرِّرُ حُكْمَ مَا قَبْلَهَا وَتُثْبِتُ ضِدَّهُ لِمَا بَعْدَهَا. تَقُولُ: ( لَا أُحِبُّ الْكَسَالَى لَكِنِ الْمُجْتَهِدِينَ ). وَيُشْتَرَطُ أَنْ يَسْبِقَهَا نَفْيٌ أَوْ نَهْيٌ، وَأَنْ يَكُونَ الْمَعْطُوفُ مُفْرَدًا، وَأَلَّا تُسْبَقَ بِالْوَاوِ.",
      "Nine. Lākin keeps the ruling of what came before it and affirms the opposite for what comes after: “I do not love the lazy, but the striving.” It needs a negation or a prohibition before it, a single word after it, and no wāw in front of it.",
    ),

    b(
      "١٠ - حَتَّى لِلتَّدْرِيجِ وَالْغَايَةِ. يَنْقَضِي الْحُكْمُ شَيْئًا فَشَيْئًا حَتَّى يَبْلُغَ الْغَايَةَ. تَقُولُ: ( يَمُوتُ النَّاسُ حَتَّى الْأَنْبِيَاءُ ). وَتَأْتِي ابْتِدَائِيَّةً إِذَا كَانَ مَا بَعْدَهَا جُمْلَةً، نَحْوُ ( جَاءَ أَصْحَابُنَا حَتَّى خَالِدٌ حَاضِرٌ ). وَتَأْتِي جَارَّةً، نَحْوُ ﴿حَتَّى مَطْلَعِ الْفَجْرِ﴾. وَلِذَلِكَ قَالَ الْمُصَنِّفُ: ( وَحَتَّى فِي بَعْضِ الْمَوَاضِعِ ).",
      "Ten. Ḥattā marks a gradual arrival at a limit: “people die, even the prophets.” It is also a starter when a sentence follows: “our companions came, to the point that Khālid is present.” And it is a preposition: “until the break of dawn.” That is why the author said “ḥattā in some places.”",
      null,
      "Al-Qadr 5. Only the first of these three uses is conjunction.",
    ),
  ],

  1: [
    b("[حُكْمُ الْعَطْفِ]", "[The Ruling of Conjunction]"),

    b(
      "قَالَ: فَإِذَا عُطِفَ عَلَى مَرْفُوعٍ رُفِعَ، أَوْ عَلَى مَنْصُوبٍ نُصِبَ، أَوْ عَلَى مَخْفُوضٍ خُفِضَ، أَوْ عَلَى مَجْزُومٍ جُزِمَ. تَقُولُ: قَامَ زَيْدٌ وَعَمْرٌو، وَرَأَيْتُ زَيْدًا وَعَمْرًا، وَمَرَرْتُ بِزَيْدٍ وَعَمْرٍو، وَزَيْدٌ لَمْ يَقُمْ وَلَمْ يَقْعُدْ.",
      "He said: If it is conjoined to a marfūʿ word it is marfūʿ; to a manṣūb word, manṣūb; to a makhfūḍ word, makhfūḍ; to a majzūm word, majzūm. You say: Zayd and ʿAmr stood; I saw Zayd and ʿAmr; I passed by Zayd and ʿAmr; Zayd did not stand and did not sit.",
      "قَالَ",
    ),

    b(
      "وَأَقُولُ: هَذِهِ الْأَحْرُفُ تَجْعَلُ مَا بَعْدَهَا تَابِعًا لِمَا قَبْلَهَا فِي الْإِعْرَابِ. فَخَالِدٌ فِي ( قَابَلَنِي مُحَمَّدٌ وَخَالِدٌ ) مَعْطُوفٌ عَلَى مُحَمَّدٍ، مَرْفُوعٌ بِالضَّمَّةِ. وَخَالِدًا فِي ( قَابَلْتُ مُحَمَّدًا وَخَالِدًا ) مَنْصُوبٌ بِالْفَتْحَةِ. وَخَالِدٍ فِي ( مَرَرْتُ بِمُحَمَّدٍ وَخَالِدٍ ) مَخْفُوضٌ بِالْكَسْرَةِ. وَيُرْسِلْ فِي ( لَمْ يَحْضُرْ خَالِدٌ أَوْ يُرْسِلْ رَسُولًا ) مَعْطُوفٌ عَلَى يَحْضُرْ، مَجْزُومٌ بِالسُّكُونِ.",
      "I say: These particles make what follows them share the case of what precedes them. In “Muḥammad and Khālid met me,” Khālid is conjoined to Muḥammad and is marfūʿ with a ḍammah. In “I met Muḥammad and Khālid,” Khālid is manṣūb with a fatḥah. In “I passed by Muḥammad and Khālid,” Khālid is makhfūḍ with a kasrah. In “Khālid did not attend, or send a messenger,” yursil is conjoined to yaḥḍur and is majzūm with a sukūn.",
      "وَأَقُولُ",
    ),

    b(
      "وَمِنْ هَذِهِ الْأَمْثِلَةِ يَتَبَيَّنُ أَنَّ الِاسْمَ يُعْطَفُ عَلَى الِاسْمِ، وَأَنَّ الْفِعْلَ يُعْطَفُ عَلَى الْفِعْلِ.",
      "These examples also show that a noun is conjoined to a noun, and a verb to a verb.",
    ),
  ],
};

export const ATF_END = {
  titleAr: "أَسْئِلَةٌ",
  titleEn: "Questions",
  items: [
    {
      ar: "مَا هُوَ الْعَطْفُ لُغَةً، وَإِلَى كَمْ قِسْمٍ يَنْقَسِمُ؟",
      en: "What is ʿaṭf in ordinary speech, and how many kinds does it have?",
    },
    {
      ar: "مَا هُوَ عَطْفُ الْبَيَانِ؟ مَثِّلْ لَهُ فِي الْمَعْرِفَةِ وَفِي النَّكِرَةِ.",
      en: "What is explanatory conjunction? Give one definite example and one indefinite example.",
    },
    {
      ar: "مَا الْفَرْقُ بَيْنَ الْوَاوِ وَالْفَاءِ وَثُمَّ؟",
      en: "What is the difference between wāw, fāʾ, and thumma?",
    },
    {
      ar: "مَا الْفَرْقُ بَيْنَ التَّخْيِيرِ وَالْإِبَاحَةِ فِي ( أَوْ )؟",
      en: "With aw, what is the difference between a choice and a permission?",
    },
    {
      ar: "مَا الَّذِي يُشْتَرَطُ لِلْعَطْفِ بِـ( بَلْ ) وَبِـ( لَكِنْ )؟",
      en: "What is required for conjunction with bal, and with lākin?",
    },
    {
      ar: "لِمَ قَالَ الْمُصَنِّفُ: ( وَحَتَّى فِي بَعْضِ الْمَوَاضِعِ )؟",
      en: "Why did the author say “and ḥattā in some places”?",
    },
    {
      ar: "فِيمَ يَشْتَرِكُ الْمَعْطُوفُ وَالْمَعْطُوفُ عَلَيْهِ؟",
      en: "What do the conjoined word and the word it is joined to share?",
    },
  ],
};

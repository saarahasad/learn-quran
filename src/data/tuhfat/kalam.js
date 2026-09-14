/** Tuḥfat commentary — الكلام وأنواعه (pp. 25–30) — exact text from the book */

function b(ar, en, label = null, footnote = null) {
  return { label, ar, en, footnote };
}

/** All sharḥ chunks for chapter 1 kalam — shown at chapter end */
export const KALAM_AFTER = {
  0: [
    b("[الكلام وأنواعه]", "[Speech and Its Types]"),

    b(
      "قَالَ الْمُصَنِّفُ: وَهُوَ أَبُو عَبْدِ اللَّهِ مُحَمَّدُ بْنُ دَاوُدَ الصِّنْهَاجِيُّ الْمَعْرُوفُ بِابْنِ آجُرُّومَ، وَالْمَوْلُودُ فِي سَنَةِ ٦٧٢ اثْنَيْنِ وَسَبْعِينَ وَسِتِّمِائَةٍ، وَالْمُتَوَفَّى فِي سَنَةِ ٧٢٣ ثَلَاثٍ وَعِشْرِينَ وَسَبْعِمِائَةٍ مِنَ الْهِجْرَةِ النَّبَوِيَّةِ — رَحِمَهُ اللَّهُ تَعَالَى.",
      "The author said: And he is Abū 'Abdullāh Muḥammad ibn Muḥammad ibn Dāwud al-Ṣinhājī—famously referred to as Ibn Ājurrūm. He was born in the year 672 and passed away in 723, and [both dates] are according to the Hijrah of the Prophet, may Allāh the Most High have mercy upon his soul.",
    ),

    b(
      "الْكَلَامُ هُوَ اللَّفْظُ الْمُرَكَّبُ الْمُفِيدُ بِالْوَضْعِ.",
      "He said: Speech is the compound utterance which brings forth benefit and is established [upon the Arabic language].",
      "قَالَ",
    ),

    b(
      "وَأَقُولُ: لِلَّفْظِ (الْكَلَامِ) مَعْنَيَانِ: أَحَدُهُمَا لُغَوِيٌّ، وَالثَّانِي نَحَوِيٌّ.",
      "I say: Speech has two meanings, the first of them in the linguistic sense and the second in the grammatical sense.",
      "وَأَقُولُ",
    ),

    b(
      "أَمَّا الْكَلَامُ اللُّغَوِيُّ فَهُوَ عِبَارَةٌ عَمَّا تَحْصُلُ بِسَبَبِهِ فَائِدَةٌ، سَوَاءٌ أَكَانَ لَفْظًا أَمْ لَمْ يَكُنْ، كَالْخَطِّ وَالْكِتَابَةِ وَالْإِشَارَةِ.",
      "As for speech in the linguistic sense, it can be defined as: An expression through which a benefit is obtained, irrespective of whether the expression is verbalised or not, such as scripting, writing or gesticulation.",
    ),

    b(
      "وَأَمَّا الْكَلَامُ النَّحَوِيُّ، فَلَا بُدَّ مِنْ أَنْ يَجْتَمِعَ فِيهِ أَرْبَعَةُ أُمُورٍ: الْأَوَّلُ أَنْ يَكُونَ لَفْظًا، وَالثَّانِي أَنْ يَكُونَ مُرَكَّبًا، وَالثَّالِثُ أَنْ يَكُونَ مُفِيدًا، وَالرَّابِعُ أَنْ يَكُونَ مَوْضُوعًا بِالْوَضْعِ الْعَرَبِيِّ.",
      "As for speech in the grammatical sense, it must possess four traits: (i) it must be an oral utterance, (ii) it must be compound, (iii) it must be something which is comprehensible, and (iv) it must be established in the medium of the Arabic language.",
    ),

    b(
      "وَمَعْنَى كَوْنِهِ لَفْظًا: أَنْ يَكُونَ صَوْتًا مُشْتَمِلًا عَلَى بَعْضِ الْحُرُوفِ الْهِجَائِيَّةِ الَّتِي تَبْتَدِئُ بِالْأَلِفِ وَتَنْتَهِي بِالْيَاءِ، وَمِثَالُهُ (أَحْمَدُ) وَ(يَكْتُبُ) وَ(سَعِيدٌ)؛ فَإِنَّ كُلَّ وَاحِدَةٍ مِنْ هَذِهِ الْكَلِمَاتِ الثَّلَاثِ عِنْدَ النُّطْقِ بِهَا تَكُونُ صَوْتًا مُشْتَمِلًا عَلَى أَرْبَعَةِ أَحْرُفٍ هِجَائِيَّةٍ؛ فَالْإِشَارَةُ مَثَلًا لَا تُسَمَّى كَلَامًا عِنْدَ النَّحْوِيِّينَ؛ لِعَدَمِ كَوْنِهَا صَوْتًا مُشْتَمِلًا عَلَى بَعْضِ الْحُرُوفِ، وَإِنْ كَانَتْ تُسَمَّى عِنْدَ اللُّغَوِيِّينَ كَلَامًا؛ لِحُصُولِ الْفَائِدَةِ بِهَا.",
      '"Utterance": The meaning of this is that it must be an oral sound, formulated from the [Arabic] alphabet—that begins with alif and ends with yā. Examples being "Aḥmad", "Yuktab" and "Saʿīd". Each of these three words—when verbally expressed—form a sound consisting of four letters of the alphabet. However gesticulation, for example, is not considered to be speech according to the grammarians. This is due the absence of sound consisting of the Arabic letters. The linguists do consider gesticulation to be speech, as it serves as a medium of communication.',
    ),

    b(
      "وَمَعْنَى كَوْنِهِ مُرَكَّبًا: أَنْ يَكُونَ مُؤَلَّفًا مِنْ كَلِمَتَيْنِ أَوْ أَكْثَرَ، نَحْوُ: (مُحَمَّدٌ مُسَافِرٌ) وَ(الْعِلْمُ نَافِعٌ) وَ(يَبْلُغُ الْمُجْتَهِدُ الْمَجْدَ) وَ(لِكُلِّ مُجْتَهِدٍ نَصِيبٌ) وَ(الْعِلْمُ خَيْرُ مَا تَسْعَى إِلَيْهِ) فَكُلُّ عِبَارَةٍ مِنْ هَذِهِ الْعِبَارَاتِ تُسَمَّى كَلَامًا، وَكُلُّ عِبَارَةٍ مِنْهَا مُؤَلَّفَةٌ مِنْ كَلِمَتَيْنِ أَوْ أَكْثَرَ.",
      '"Compound": The meaning of this is that it must be composed of two words or more. Examples being "Muḥammad is a traveller", "Knowledge is beneficial", "The hard worker attains glory", "For every hard worker is a dividend" and "Knowledge is the best of what you pursue". Each of the aforementioned expressions is termed as speech, and each of them is composed of two words or more.',
    ),

    b(
      "فَالْكَلِمَةُ الْوَاحِدَةُ لَا تُسَمَّى كَلَامًا عِنْدَ النَّحَاةِ إِلَّا إِذَا انْضَمَّ إِلَيْهَا غَيْرُهَا: سَوَاءٌ أَكَانَ انْضِمَامُ غَيْرِهَا إِلَيْهَا حَقِيقَةً كَالْأَمْثِلَةِ السَّابِقَةِ، أَمْ تَقْدِيرًا، كَمَا إِذَا قَالَ لَكَ قَائِلٌ: مَنْ أَخُوكَ؟ فَتَقُولُ: مُحَمَّدٌ، فَهَذِهِ الْكَلِمَةُ تُعْتَبَرُ كَلَامًا، لِأَنَّ التَّقْدِيرَ: مُحَمَّدٌ أَخِي؛ فَهِيَ فِي التَّقْدِيرِ عِبَارَةٌ مُؤَلَّفَةٌ مِنْ ثَلَاثِ كَلِمَاتٍ.",
      'Thus a singular word is not termed as speech according to the grammarians until it is connected to another word, whether it is connected with other words like in the compound sentences that have preceded, or in the case of the meaning being implicitly inferred, as in the case where someone says to you, "Man akhūka (who is your brother)?" and you reply, "Muḥammadun". This statement (i.e. "Muḥammadun") is considered to be speech due to the inferred meaning i.e. "Muḥammadun akhī (Muḥammad is my brother)". So the inferred meaning here comprises of three words (the yā at the end of "akhī" is a first person pronoun).',
    ),

    b(
      "وَمَعْنَى كَوْنِهِ مُفِيدًا: أَنْ يَحْسُنَ سُكُوتُ الْمُتَكَلِّمِ عَلَيْهِ، بِحَيْثُ لَا يَبْقَى السَّامِعُ مُنْتَظِرًا لِشَيْءٍ آخَرَ، فَلَوْ قُلْتَ (إِذَا حَضَرَ الْأُسْتَاذُ) لَا يُسَمَّى ذَلِكَ كَلَامًا، وَلَوْ أَنَّهُ لَفْظٌ مُرَكَّبٌ مِنْ ثَلَاثِ كَلِمَاتٍ؛ لِأَنَّ الْمُخَاطَبَ يَنْتَظِرُ مَا تَقُولُهُ بَعْدَ هَذَا مِمَّا يَتَرَتَّبُ عَلَى حُضُورِ الْأُسْتَاذِ. فَإِذَا قُلْتَ: (إِذَا حَضَرَ الْأُسْتَاذُ أَنْصَتَ التَّلَامِيذُ) صَارَ كَلَامًا لِحُصُولِ الْفَائِدَةِ.",
      '"Something which is comprehendible": This means that the listener is sufficed with what he hears and does not require any further explanation from the speaker. For instance, if it is said, "When the teacher is present," this is not classified as speech—though it is an utterance composed of three words. This is because the listener would be waiting for further clarification as to what will happen once the teacher arrives. If it is said, "When the teacher is present the students listen," this is considered to be speech, due to the comprehendible benefit it exerts.',
    ),

    b(
      "وَمَعْنَى كَوْنِهِ مَوْضُوعًا بِالْوَضْعِ الْعَرَبِيِّ: أَنْ تَكُونَ الْأَلْفَاظُ الْمُسْتَعْمَلَةُ فِي الْكَلَامِ مِنَ الْأَلْفَاظِ الَّتِي وَضَعَتْهَا الْعَرَبُ لِلدَّلَالَةِ عَلَى مَعْنًى مِنَ الْمَعَانِي: مَثَلًا (حَضَرَ) كَلِمَةٌ وَضَعَهَا الْعَرَبُ لِمَعْنًى، وَهُوَ حُصُولُ الْحُضُورِ فِي الزَّمَانِ الْمَاضِي، وَكَلِمَةُ (مُحَمَّدٌ) قَدْ وَضَعَهَا الْعَرَبُ لِمَعْنًى، وَهُوَ ذَاتُ الشَّخْصِ الْمُسَمَّى بِهَذَا الِاسْمِ، فَإِذَا قُلْتَ (حَضَرَ مُحَمَّدٌ) تَكُونُ قَدِ اسْتَعْمَلْتَ كَلِمَتَيْنِ كُلٌّ مِنْهُمَا مِمَّا وَضَعَهُ الْعَرَبُ، بِخِلَافِ مَا إِذَا تَكَلَّمْتَ بِكَلَامٍ مِمَّا وَضَعَهُ الْعَجَمُ: كَالْفَارِسِيَّةِ، وَالتُّرْكِيَّةِ، وَالْبَرْبَرِيَّةِ، وَالْفَرَنْجِيَّةِ، فَإِنَّهُ لَا يُسَمَّى فِي عُرْفِ عُلَمَاءِ الْعَرَبِيَّةِ كَلَامًا، وَإِنْ سَمَّاهُ أَهْلُ اللُّغَةِ الْأُخْرَى كَلَامًا.",
      '"It must be established in the medium of the Arabic language": Meaning that the lexis used must be the same lexis which Arabs use to communicate in order to convey a message. Examples are: "Ḥaḍarah", which is a word utilised by the Arabs to bring forth the meaning of someone being present in the past tense. "Muḥammad", which is a word utilised by the Arabs to bring forth the meaning of the existence of an individual known by this name. Now if it were said, "Ḥaḍarah Muḥammadun", this is formed from two words, both of them composed from the Arabic language. This is converse to words composed from the languages of the non-Arabs, such as: Persian, Turkish, Berber or a European language, [of which the utilisation] is not considered to be speech according to the scholars of Arabic, even though they are considered to be so by the speakers of the other languages.',
      null,
      "Shaykh ibn al-'Uthaymīn—in Sharḥ al-Ājrūmiyyah (p. 13)—added another aspect to the explanation of it being \"established\". The other aspect he mentioned is, \"That it be established intentionally. This removes from its definition the speech of the intoxicated, the insane, the sleeping and the delirious. Their words are not termed as speech.\"",
    ),

    b(
      "أَمْثِلَةٌ لِلْكَلَامِ الْمُسْتَوْفِي الشُّرُوطَ:\nالْجَوُّ صَحْوٌ. الْبُسْتَانُ مُثْمِرٌ. الْهِلَالُ سَاطِعٌ. السَّمَاءُ صَافِيَةٌ. يُضِيءُ الْقَمَرُ لَيْلًا. يَنْجَحُ الْمُجْتَهِدُ. لَا يُفْلِحُ الْكَسُولُ. لَا إِلَٰهَ إِلَّا اللَّهُ. مُحَمَّدٌ صَفْوَةُ الْمُرْسَلِينَ. اللَّهُ رَبُّنَا. مُحَمَّدٌ نَبِيُّنَا.",
      "Examples of speech that fulfil these conditions are:\nThe weather is clear. The orchard is fruitful. The crescent is shining. The sky is clear. The moon illuminates the night. The hard-worker is successful. The lazy will not succeed. There is no deity worthy of being worshipped besides Allah. Muḥammad ﷺ is the elite of those who were sent. Allah is our Lord. Muḥammad ﷺ is our prophet.",
    ),

    b(
      "أَمْثِلَةٌ لِلْفَظِ الْمُفْرَدِ:\nمُحَمَّدٌ. عَلِيٌّ. إِبْرَاهِيمُ. قَامَ. مِنْ.",
      "Examples of singular words:\nMuḥammad, 'Alī, Ibrāhīm, he stood and from.",
    ),

    b(
      "أَمْثِلَةٌ لِلْمُرَكَّبِ الْغَيْرِ مُفِيدٍ:\nمَدِينَةُ الْإِسْكَنْدَرِيَّةِ. عَبْدُ اللَّهِ. حَضْرَمَوْتُ. لَوْ أَنْصَفَ النَّاسُ. إِذَا جَاءَ الشِّتَاءُ. مَهْمَا أَخْفَى الْمُرَائِي. أَنْ طَلَعَتِ الشَّمْسُ.",
      "Examples of compound statements that are not comprehendible:\nThe city of Alexandia. The slave of Allah. Ḥadramawt. If the people were fair. When the winter comes. No matter the two faced conceals. That the sun rises.",
    ),
  ],
};

export const KALAM_END = {
  titleAr: "أَسْئِلَةٌ عَلَى مَا تَقَدَّمَ",
  titleEn: "Questions Regarding What Has Preceded⁴",
  note: "⁴ [T] The reader should attempt to answer all questions and exercises in Arabic.",
  items: [
    { ar: "مَا هُوَ الْكَلَامُ؟", en: "What is speech?" },
    { ar: "مَا مَعْنَى كَوْنِهِ لَفْظًا؟", en: 'What is the meaning of "it is an utterance"?' },
    { ar: "مَا مَعْنَى كَوْنِهِ مُفِيدًا؟", en: 'What is the meaning of "something that is comprehendible"?' },
    { ar: "مَا مَعْنَى كَوْنِهِ مُرَكَّبًا؟", en: 'What is the meaning of "it is compound"?' },
    {
      ar: "مَا مَعْنَى كَوْنِهِ مَوْضُوعًا بِالْوَضْعِ الْعَرَبِيِّ؟",
      en: 'What is the meaning of "it is established in the medium of the Arabic language"?',
    },
    {
      ar: "مَثِّلْ بِخَمْسَةِ أَمْثِلَةٍ لِمَا يُسَمَّى عِنْدَ النَّحَاةِ كَلَامًا.",
      en: "Bring five examples which would be considered as speech by the grammarians.",
    },
  ],
};

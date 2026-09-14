/**
 * Model answers for Tuḥfat أسئلة (active-recall quizzes).
 * Keyed by `${chapterId}:${lineIdx}` → array aligned with question items.
 */

export const TUHFAT_QUIZ_ANSWERS = {
  "kalam:0": [
    {
      ar: "اللَّفْظُ الْمُرَكَّبُ الْمُفِيدُ بِالْوَضْعِ (الْعَرَبِيِّ).",
      en: "A useful compound utterance established upon Arabic convention — all four conditions together.",
    },
    {
      ar: "أَنْ يَكُونَ صَوْتًا مُشْتَمِلًا عَلَى حُرُوفٍ هِجَائِيَّةٍ — لَا إِشَارَةَ وَلَا كِتَابَةَ وَحْدَهَا.",
      en: "It must be a voiced sound made of alphabet letters — not gesture or writing alone.",
    },
    {
      ar: "أَنْ يَحْسُنَ سُكُوتُ الْمُتَكَلِّمِ عَلَيْهِ، فَلَا يَبْقَى السَّامِعُ مُنْتَظِرًا.",
      en: "The speaker may fall silent and the listener is not left waiting for more.",
    },
    {
      ar: "أَنْ يَكُونَ مِنْ كَلِمَتَيْنِ فَأَكْثَرَ — حَقِيقَةً أَوْ تَقْدِيرًا.",
      en: "Two words or more — heard in speech, or estimated from context.",
    },
    {
      ar: "أَنْ تَكُونَ الْأَلْفَاظُ مِمَّا وَضَعَتْهُ الْعَرَبُ، بِقَصْدٍ.",
      en: "The words must be Arabic placements, used intentionally.",
    },
    {
      ar: "نَحْوُ: الْجَوُّ صَحْوٌ · يَنْجَحُ الْمُجْتَهِدُ · لَا إِلَٰهَ إِلَّا اللَّهُ · اللَّهُ رَبُّنَا · مُحَمَّدٌ نَبِيُّنَا.",
      en: "Any five complete Arabic sentences that fulfil all four conditions.",
    },
  ],

  "kalam:1": [
    {
      ar: "كَلِمَةٌ دَلَّتْ عَلَى مَعْنًى فِي نَفْسِهَا وَلَمْ تَقْتَرِنْ بِزَمَانٍ. أَمْثِلَةٌ: مُحَمَّدٌ، رَجُلٌ، كِتَابٌ، نَهْرٌ، تُفَّاحَةٌ…",
      en: "A word with meaning in itself, not tied to a tense. Give ~10 noun examples.",
    },
    {
      ar: "كَلِمَةٌ دَلَّتْ عَلَى مَعْنًى فِي نَفْسِهَا وَاقْتَرَنَتْ بِزَمَانٍ. يَنْقَسِمُ إِلَى ثَلَاثَةٍ: مَاضٍ، مُضَارِعٍ، أَمْرٍ.",
      en: "Meaning in itself + tense. Three types: māḍī, muḍāriʿ, amr.",
    },
    {
      ar: "الْمَاضِي: قَبْلَ التَّكَلُّمِ. الْمُضَارِعُ: حَالًا أَوْ اسْتِقْبَالًا. الْأَمْرُ: طَلَبٌ بَعْدَ التَّكَلُّمِ. أَمْثِلَةٌ: كَتَبَ/يَكْتُبُ/اكْتُبْ…",
      en: "Past before speech; present/future during or after; command as a request after speech — with examples.",
    },
    {
      ar: "كَلِمَةٌ دَلَّتْ عَلَى مَعْنًى فِي غَيْرِهَا — نَحْوُ مِنْ، إِلَى، قَدْ، لَمْ…",
      en: "Meaning completed only with another word — list ~10 particles.",
    },
  ],

  "kalam:2": [
    {
      ar: "الْخَفْضُ، وَالتَّنْوِينُ، وَدُخُولُ أَلْ، وَحُرُوفُ الْخَفْضِ (وَمِنْهَا حُرُوفُ الْقَسَمِ).",
      en: "Khafḍ, tanwīn, entry of al-, and particles of khafḍ (including oath letters).",
    },
    {
      ar: "لُغَةً: ضِدُّ الِارْتِفَاعِ. اصْطِلَاحًا: الْكَسْرَةُ الَّتِي يُحْدِثُهَا الْعَامِلُ أَوْ مَا نَابَ عَنْهَا.",
      en: "Language: opposite of rising. Technical: kasrah (or stand-in) from a governor.",
    },
    {
      ar: "لُغَةً: التَّصْوِيتُ. اصْطِلَاحًا: نُونٌ سَاكِنَةٌ تَتْبَعُ آخِرَ الِاسْمِ لَفْظًا وَتُفَارِقُهُ خَطًّا.",
      en: "Language: phonation. Technical: extra silent nūn after the noun’s end — heard, not written as ن.",
    },
    {
      ar: "مِنْ: ابْتِدَاءٌ. اللَّامُ: مِلْكٌ/اخْتِصَاصٌ/اسْتِحْقَاقٌ. الْكَافُ: تَشْبِيهٌ. رُبَّ: تَقْلِيلٌ. عَنْ: مُجَاوَزَةٌ. فِي: ظَرْفِيَّةٌ.",
      en: "Core meanings: beginning, possession/specification/entitlement, likeness, scarcity, going beyond, containment.",
    },
    {
      ar: "لَا تَدْخُلُ إِلَّا عَلَى الِاسْمِ الظَّاهِرِ.",
      en: "Only on a clear (ẓāhir) noun — not a pronoun.",
    },
    {
      ar: "لَا تَدْخُلُ إِلَّا عَلَى لَفْظِ الْجَلَالَةِ (اللَّهِ).",
      en: "Only with the Majestic Name — Allāh.",
    },
    {
      ar: "عَلَى الظَّاهِرِ: بِاللَّهِ لَأَجْتَهِدَنَّ. وَعَلَى الضَّمِيرِ: بِكَ لَأَضْرِبَنَّ الْكَسُولَ.",
      en: "One on a clear noun, one on a pronoun.",
    },
  ],

  "kalam:5": [
    {
      ar: "قَدْ، وَالسِّينُ، وَسَوْفَ، وَتَاءُ التَّأْنِيثِ السَّاكِنَةُ.",
      en: "qad, sīn, sawfa, and the silent feminine tāʾ.",
    },
    {
      ar: "ثَلَاثَةٌ: مُخْتَصٌّ بِالْمَاضِي (التَّاء)، وَمُخْتَصٌّ بِالْمُضَارِعِ (السِّينُ وَسَوْفَ)، وَمُشْتَرَكٌ (قَدْ).",
      en: "Three buckets: māḍī-only, muḍāriʿ-only, and shared (qad).",
    },
    {
      ar: "تَاءُ التَّأْنِيثِ السَّاكِنَةُ.",
      en: "The silent feminine tāʾ.",
    },
    {
      ar: "عَلَامَتَانِ: السِّينُ وَسَوْفَ.",
      en: "Two: sīn and sawfa.",
    },
    {
      ar: "قَدْ.",
      en: "qad.",
    },
    {
      ar: "مَعَ الْمَاضِي: تَحْقِيقٌ وَتَقْرِيبٌ. مَعَ الْمُضَارِعِ: تَقْلِيلٌ وَتَكْثِيرٌ.",
      en: "On past: confirmation / nearness. On present: rarity / frequency.",
    },
    {
      ar: "أَنَّ الِاسْمَ الْمُسْنَدَ إِلَيْهِ الْفِعْلُ مُؤَنَّثٌ (فَاعِلًا أَوْ نَائِبَ فَاعِلٍ).",
      en: "That the noun the verb is attributed to is feminine.",
    },
    {
      ar: "كِلَاهُمَا لِلتَّنْفِيسِ (الِاسْتِقْبَالِ)؛ السِّينُ أَقْرَبُ، وَسَوْفَ أَبْعَدُ أَوْ لِلْوَعِيدِ.",
      en: "Both mark futurity; sīn nearer, sawfa farther / threat.",
    },
    {
      ar: "دَلَالَتُهُ عَلَى الطَّلَبِ مَعَ قَبُولِ يَاءِ الْمُخَاطَبَةِ أَوْ نُونِ التَّوْكِيدِ.",
      en: "Request + accepting ياء المخاطبة or نون التوكيد.",
    },
  ],

  "irab:0": [
    {
      ar: "الْإِعْرَابُ: تَغْيِيرُ أَحْوَالِ الْأَوَاخِرِ لِاخْتِلَافِ الْعَوَامِلِ. الْبِنَاءُ: لُزُومُ حَالَةٍ وَاحِدَةٍ. الْمُعْرَبُ / الْمَبْنِيُّ بِحَسَبِ ذَلِكَ.",
      en: "Iʿrāb = ending-state changes by governors. Bināʾ = fixed ending. Muʿrab / mabnī follow from that.",
    },
    {
      ar: "تَغْيِيرُ أَحْوَالِ الْأَوَاخِرِ لَا نَفْسِ الْحَرْفِ. يَنْقَسِمُ إِلَى لَفْظِيٍّ وَتَقْدِيرِيٍّ. أَسْبَابُ التَّقْدِيرِ: تَعَذُّرٌ، ثِقَلٌ، مُنَاسَبَةٌ.",
      en: "State-change, not letter-change; explicit vs estimated; barriers: impossibility, heaviness, appropriateness.",
    },
  ],

  "irab:1": [
    {
      ar: "رَفْعٌ، نَصْبٌ، خَفْضٌ، جَزْمٌ.",
      en: "Four: rafʿ, naṣb, khafḍ, jazm.",
    },
    {
      ar: "لُغَةً: الْعُلُوُّ. اصْطِلَاحًا: تَغْيِيرٌ عَلَامَتُهُ الضَّمَّةُ وَمَا نَابَ عَنْهَا.",
      en: "Highness; technical: change marked by ḍammah / stand-ins.",
    },
    {
      ar: "لُغَةً: الِاسْتِقَامَةُ. اصْطِلَاحًا: عَلَامَتُهُ الْفَتْحَةُ وَمَا نَابَ عَنْهَا.",
      en: "Straightness; marked by fatḥah / stand-ins.",
    },
    {
      ar: "لُغَةً: التَّسَفُّلُ. اصْطِلَاحًا: عَلَامَتُهُ الْكَسْرَةُ وَمَا نَابَ عَنْهَا — لِلْأَسْمَاءِ فَقَطْ.",
      en: "Lowering; kasrah / stand-ins — nouns only.",
    },
    {
      ar: "لُغَةً: الْقَطْعُ. اصْطِلَاحًا: عَلَامَتُهُ السُّكُونُ وَمَا نَابَ عَنْهُ — لِلْمُضَارِعِ فَقَطْ.",
      en: "Cutting; sukūn / deletion — muḍāriʿ only.",
    },
    {
      ar: "الرَّفْعُ وَالنَّصْبُ.",
      en: "Rafʿ and naṣb.",
    },
    {
      ar: "الْخَفْضُ.",
      en: "Khafḍ.",
    },
    {
      ar: "الْجَزْمُ.",
      en: "Jazm.",
    },
  ],
};

export function getQuizModelAnswer(chapterId, lineIdx, itemIndex) {
  const list = TUHFAT_QUIZ_ANSWERS[`${chapterId}:${lineIdx}`];
  return list?.[itemIndex] || null;
}

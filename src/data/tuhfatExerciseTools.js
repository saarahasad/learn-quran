/**
 * Specialized interactive tools for Tuḥfat exercises that suit word-tagging.
 * Key: `${chapterId}:${lineIdx}` → tool config (used for exercise sections).
 */

export const ISM_SIGN_LABELS = [
  { id: "ism-khafd", ar: "اسْم · خَفْض", en: "Noun · khafḍ ending" },
  { id: "ism-tanwin", ar: "اسْم · تَنْوِين", en: "Noun · tanwīn" },
  { id: "ism-al", ar: "اسْم · أَلْ", en: "Noun · al-" },
  { id: "ism-harf", ar: "اسْم · حَرْف خَفْض", en: "Noun · after ḥarf khafḍ" },
  { id: "ism-qasam", ar: "اسْم · قَسَم", en: "Noun · oath particle" },
  { id: "other", ar: "غَيْرُ اسْم", en: "Not a noun" },
];

export const WORD_KIND_LABELS = [
  { id: "ism", ar: "اسْم", en: "Noun" },
  { id: "fiil-madi", ar: "فِعْل مَاضٍ", en: "Past verb" },
  { id: "fiil-mudari", ar: "فِعْل مُضَارِع", en: "Present verb" },
  { id: "fiil-amr", ar: "فِعْل أَمْر", en: "Imperative" },
  { id: "harf", ar: "حَرْف", en: "Particle" },
];

/** Simpler 3-way tags for أَنْوَاعُ الْكَلَامِ */
export const BASIC_KIND_LABELS = [
  { id: "ism", ar: "اسْم", en: "Noun" },
  { id: "fiil", ar: "فِعْل", en: "Verb" },
  { id: "harf", ar: "حَرْف", en: "Particle" },
];

export const MUARAB_LABELS = [
  { id: "raf", ar: "مُعْرَب · رَفْع", en: "Inflected · rafʿ" },
  { id: "nasb", ar: "مُعْرَب · نَصْب", en: "Inflected · naṣb" },
  { id: "khafd", ar: "مُعْرَب · خَفْض", en: "Inflected · khafḍ" },
  { id: "jazm", ar: "مُعْرَب · جَزْم", en: "Inflected · jazm" },
  { id: "mabni", ar: "مَبْنِيّ", en: "Fixed (bināʾ)" },
];

/** Fill-blank rows for حرف exercise 2 */
export const HARF_FILL_BLANKS = [
  { id: "a", before: "يَحْفَظُ", after: "الدَّرْسَ", hint: "فاعل / اسم" },
  { id: "b", before: "", after: "الثَّوْرُ الْأَرْضَ", hint: "فعل" },
  { id: "c", before: "يَسْبَحُ", after: "فِي النَّهْرِ", hint: "فاعل" },
  { id: "d", before: "الْوَلَدُ", after: "الْمُؤَدَّبُ", hint: "خبر / صفة" },
  { id: "e", before: "تَسِيرُ", after: "فِي الْبِحَارِ", hint: "فاعل" },
  { id: "f", before: "الْوَالِدُ", after: "عَلَى ابْنِهِ", hint: "فعل" },
  { id: "g", before: "يَرْتَفِعُ", after: "فِي الْجَوِّ", hint: "فاعل" },
  { id: "h", before: "", after: "عَلَى الزَّهْرِ", hint: "فعل + فاعل" },
  { id: "i", before: "يَكْثُرُ", after: "بِلَادِ مِصْرَ", hint: "فاعل" },
  { id: "j", before: "", after: "السَّمَكُ فِي الْمَاءِ", hint: "فعل" },
];

export const HARF_SENTENCE_WORDS = [
  "النَّخْلَةُ",
  "الْفِيلُ",
  "يَنَامُ",
  "فَهِمَ",
  "الْحَدِيقَةُ",
  "الْأَرْضُ",
  "الْمَاءُ",
  "يَأْكُلُ",
  "الثَّمَرَةُ",
  "الْفَاكِهَةُ",
  "يَحْصُدُ",
  "يُذَاكِرُ",
];

/**
 * Map chapter:lineIdx → interactive exercise tool(s).
 * Multiple tools can appear for one section (e.g. حرف has three drills).
 */
export const TUHFAT_EXERCISE_TOOLS = {
  "kalam:1": [
    {
      id: "kinds-basic",
      kind: "classify",
      titleAr: "صَنِّفِ الْكَلِمَاتِ",
      titleEn: "Classify each word",
      instructionAr: "اضْغَطْ كُلَّ كَلِمَةٍ وَصَنِّفْهَا: اسْم، فِعْل، أَوْ حَرْف.",
      instructionEn: "Tap each word and tag it as a noun, verb, or particle.",
      labels: BASIC_KIND_LABELS,
      targetIds: ["ism", "fiil", "harf"],
      passages: [
        {
          id: "kitab",
          ar: "الْكِتَابُ عَلَى الْمَكْتَبِ",
          answers: {
            الْكِتَابُ: "ism",
            عَلَى: "harf",
            الْمَكْتَبِ: "ism",
          },
        },
        {
          id: "safar",
          ar: "سَافَرَ خَلِيلٌ إِلَى مِصْرَ",
          answers: {
            سَافَرَ: "fiil",
            خَلِيلٌ: "ism",
            إِلَى: "harf",
            مِصْرَ: "ism",
          },
        },
        {
          id: "uktub",
          ar: "اكْتُبْ الدَّرْسَ بِالْقَلَمِ",
          answers: {
            اكْتُبْ: "fiil",
            الدَّرْسَ: "ism",
            بِالْقَلَمِ: "ism",
          },
        },
        {
          id: "qad",
          ar: "قَدْ يَجْتَهِدُ الطَّالِبُ",
          answers: {
            قَدْ: "harf",
            يَجْتَهِدُ: "fiil",
            الطَّالِبُ: "ism",
          },
        },
      ],
    },
  ],

  "kalam:2": [
    {
      id: "ism-signs",
      kind: "classify",
      titleAr: "مَيِّزِ الْأَسْمَاءَ",
      titleEn: "Tag the nouns & their sign",
      instructionAr:
        "اضْغَطْ عَلَى كُلِّ اسْمٍ، ثُمَّ اخْتَرِ الْعَلَامَةَ الَّتِي عَرَفْتَ بِهَا اسْمِيَّتَهُ.",
      instructionEn:
        "Tap each noun, then choose the sign that proves it is a noun (خفْض، تنوين، أل، حرف خفض، قسم).",
      labels: ISM_SIGN_LABELS,
      targetIds: ["ism-khafd", "ism-tanwin", "ism-al", "ism-harf", "ism-qasam"],
      passages: [
        {
          id: "basmala",
          ar: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ",
          answers: {
            بِسْمِ: "ism-harf",
            اللَّهِ: "ism-harf",
            الرَّحْمَنِ: "ism-al",
            الرَّحِيمِ: "ism-al",
          },
        },
        {
          id: "fatiha",
          ar: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
          answers: {
            الْحَمْدُ: "ism-al",
            لِلَّهِ: "ism-harf",
            رَبِّ: "ism-khafd",
            الْعَالَمِينَ: "ism-al",
          },
        },
        {
          id: "ankabut",
          ar: "إِنَّ الصَّلَاةَ تَنْهَى عَنِ الْفَحْشَاءِ وَالْمُنْكَرِ",
          answers: {
            الصَّلَاةَ: "ism-al",
            الْفَحْشَاءِ: "ism-harf",
            الْمُنْكَرِ: "ism-al",
          },
        },
        {
          id: "asr",
          ar: "وَالْعَصْرِ إِنَّ الْإِنْسَانَ لَفِي خُسْرٍ",
          answers: {
            وَالْعَصْرِ: "ism-qasam",
            الْإِنْسَانَ: "ism-al",
            خُسْرٍ: "ism-tanwin",
          },
        },
        {
          id: "ilah",
          ar: "وَإِلَهُكُمْ إِلَهٌ وَاحِدٌ",
          answers: {
            إِلَهٌ: "ism-tanwin",
            وَاحِدٌ: "ism-tanwin",
          },
        },
        {
          id: "rahman",
          ar: "الرَّحْمَنُ فَاسْأَلْ بِهِ خَبِيرًا",
          answers: {
            الرَّحْمَنُ: "ism-al",
            خَبِيرًا: "ism-tanwin",
          },
        },
      ],
    },
  ],

  "kalam:5": [
    {
      id: "fail-kinds",
      kind: "classify",
      titleAr: "مَيِّزِ الْأَسْمَاءَ وَالْأَفْعَالَ",
      titleEn: "Tag nouns, verbs (by type), and particles",
      instructionAr:
        "اضْغَطْ الْكَلِمَةَ وَصَنِّفْهَا: اسْم، فِعْل مَاضٍ، مُضَارِع، أَمْر، أَوْ حَرْف.",
      instructionEn:
        "Tap each word and classify it as اسم، فعل ماضٍ، مضارع، أمر، or حرف.",
      labels: WORD_KIND_LABELS,
      targetIds: ["ism", "fiil-madi", "fiil-mudari", "fiil-amr", "harf"],
      passages: [
        {
          id: "nisa149",
          ar: "إِنْ تُبْدُوا خَيْرًا أَوْ تُخْفُوهُ أَوْ تَعْفُوا عَنْ سُوءٍ فَإِنَّ اللَّهَ كَانَ عَفُوًّا قَدِيرًا",
          answers: {
            إِنْ: "harf",
            تُبْدُوا: "fiil-mudari",
            خَيْرًا: "ism",
            أَوْ: "harf",
            تُخْفُوهُ: "fiil-mudari",
            تَعْفُوا: "fiil-mudari",
            عَنْ: "harf",
            سُوءٍ: "ism",
            فَإِنَّ: "harf",
            اللَّهَ: "ism",
            كَانَ: "fiil-madi",
            عَفُوًّا: "ism",
            قَدِيرًا: "ism",
          },
        },
        {
          id: "baqarah158",
          ar: "إِنَّ الصَّفَا وَالْمَرْوَةَ مِنْ شَعَائِرِ اللَّهِ فَمَنْ حَجَّ الْبَيْتَ أَوِ اعْتَمَرَ فَلَا جُنَاحَ عَلَيْهِ أَنْ يَطَّوَّفَ بِهِمَا",
          answers: {
            إِنَّ: "harf",
            الصَّفَا: "ism",
            وَالْمَرْوَةَ: "ism",
            مِنْ: "harf",
            شَعَائِرِ: "ism",
            اللَّهِ: "ism",
            فَمَنْ: "harf",
            حَجَّ: "fiil-madi",
            الْبَيْتَ: "ism",
            أَوِ: "harf",
            اعْتَمَرَ: "fiil-madi",
            فَلَا: "harf",
            جُنَاحَ: "ism",
            عَلَيْهِ: "harf",
            أَنْ: "harf",
            يَطَّوَّفَ: "fiil-mudari",
            بِهِمَا: "harf",
          },
        },
        {
          id: "fitan",
          ar: "سَتَكُونُ فِتَنٌ الْقَاعِدُ فِيهَا خَيْرٌ مِنَ الْقَائِمِ",
          answers: {
            سَتَكُونُ: "fiil-mudari",
            فِتَنٌ: "ism",
            الْقَاعِدُ: "ism",
            فِيهَا: "harf",
            خَيْرٌ: "ism",
            مِنَ: "harf",
            الْقَائِمِ: "ism",
          },
        },
      ],
    },
  ],

  "kalam:6": [
    {
      id: "harf-sentences",
      kind: "sentence-words",
      titleAr: "ضَعْ كُلَّ كَلِمَةٍ فِي كَلَامٍ مُفِيدٍ",
      titleEn: "Build a useful sentence for each word",
      instructionAr: "اكْتُبْ جُمْلَةً مُفِيدَةً لِكُلِّ كَلِمَةٍ.",
      instructionEn: "Write one complete sentence that uses each word.",
      words: HARF_SENTENCE_WORDS,
    },
    {
      id: "harf-blanks",
      kind: "fill-blank",
      titleAr: "أَكْمِلِ الْفَرَاغَ",
      titleEn: "Fill the blanks",
      instructionAr: "ضَعْ كَلِمَةً يَتِمُّ بِهَا الْمَعْنَى، ثُمَّ عَدَّ الْأَجْزَاءَ إِنْ شِئْتَ.",
      instructionEn: "Fill each blank so the sentence makes sense.",
      blanks: HARF_FILL_BLANKS,
    },
    {
      id: "harf-classify",
      kind: "classify",
      titleAr: "بَيِّنِ الْأَنْوَاعَ",
      titleEn: "Identify māḍī, muḍāriʿ, amr, ism, and ḥarf",
      instructionAr: "صَنِّفْ كُلَّ كَلِمَةٍ فِي الْعِبَارَاتِ.",
      instructionEn: "Classify every word in the passages.",
      labels: WORD_KIND_LABELS,
      targetIds: ["ism", "fiil-madi", "fiil-mudari", "fiil-amr", "harf"],
      passages: [
        {
          id: "ahzab",
          ar: "مَا جَعَلَ اللَّهُ لِرَجُلٍ مِنْ قَلْبَيْنِ فِي جَوْفِهِ",
          answers: {
            مَا: "harf",
            جَعَلَ: "fiil-madi",
            اللَّهُ: "ism",
            لِرَجُلٍ: "ism",
            مِنْ: "harf",
            قَلْبَيْنِ: "ism",
            فِي: "harf",
            جَوْفِهِ: "ism",
          },
        },
        {
          id: "ahrith",
          ar: "احْرُثْ لِدُنْيَاكَ كَأَنَّكَ تَعِيشُ أَبَدًا",
          answers: {
            احْرُثْ: "fiil-amr",
            لِدُنْيَاكَ: "ism",
            كَأَنَّكَ: "harf",
            تَعِيشُ: "fiil-mudari",
            أَبَدًا: "ism",
          },
        },
        {
          id: "shams",
          ar: "قَدْ أَفْلَحَ مَنْ زَكَّاهَا وَقَدْ خَابَ مَنْ دَسَّاهَا",
          answers: {
            قَدْ: "harf",
            أَفْلَحَ: "fiil-madi",
            مَنْ: "harf",
            زَكَّاهَا: "fiil-madi",
            وَقَدْ: "harf",
            خَابَ: "fiil-madi",
            دَسَّاهَا: "fiil-madi",
          },
        },
      ],
    },
  ],

  "irab:0": [
    {
      id: "muarab-mabni",
      kind: "classify",
      titleAr: "بَيِّنِ الْمُعْرَبَ وَالْمَبْنِيَّ",
      titleEn: "Tag muʿrab (by state) and mabnī",
      instructionAr: "اضْغَطْ الْكَلِمَةَ وَبَيِّنْ: مُعْرَب (رَفْع/نَصْب/خَفْض/جَزْم) أَوْ مَبْنِيّ.",
      instructionEn: "Tap words and mark معرب (with state) or مبني.",
      labels: MUARAB_LABELS,
      targetIds: ["raf", "nasb", "khafd", "jazm", "mabni"],
      passages: [
        {
          id: "duha",
          ar: "وَالضُّحَى وَاللَّيْلِ إِذَا سَجَى مَا وَدَّعَكَ رَبُّكَ وَمَا قَلَى",
          answers: {
            وَالضُّحَى: "khafd",
            وَاللَّيْلِ: "khafd",
            إِذَا: "mabni",
            سَجَى: "mabni",
            مَا: "mabni",
            وَدَّعَكَ: "mabni",
            رَبُّكَ: "raf",
            وَمَا: "mabni",
            قَلَى: "mabni",
          },
        },
        {
          id: "arabi",
          ar: "اللَّهُ يُخْلِفُ مَا أَتْلَفَ النَّاسُ وَالدَّهْرُ يُتْلِفُ مَا جَمَعُوا",
          answers: {
            اللَّهُ: "raf",
            يُخْلِفُ: "raf",
            مَا: "mabni",
            أَتْلَفَ: "mabni",
            النَّاسُ: "raf",
            وَالدَّهْرُ: "raf",
            يُتْلِفُ: "raf",
            جَمَعُوا: "mabni",
          },
        },
      ],
    },
  ],
};

export function getExerciseTools(chapterId, lineIdx) {
  return TUHFAT_EXERCISE_TOOLS[`${chapterId}:${lineIdx}`] || null;
}

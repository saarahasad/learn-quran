/**
 * Comprehensive mind-map for باب علامات الإعراب —
 * definitions, positions, cases (explicit/implicit), and examples for memorisation.
 */

export const ALAMAT_IRAB_MINDMAP_META = {
  titleAr: "بَابُ عَلَامَاتِ الْإِعْرَابِ",
  titleEn: "Mind Map: Signs of Iʿrāb",
  subtitle:
    "Every original sign, every stand-in, every position — with definitions, rules, implicit cases, and examples.",
  chapterId: "alamat-irab",
  defAr:
    "بَابُ مَعْرِفَةِ عَلَامَاتِ الْإِعْرَابِ — يُعَرِّفُكَ كَيْفَ تَعْرِفُ حَالَةَ الْكَلِمَةِ مِنْ عَلَامَةِ آخِرِهَا: أَصْلِيَّةً أَوْ فَرْعًا نَائِبًا عَنْهَا.",
  defEn:
    "Chapter of recognising the signs of iʿrāb: how to know a word’s grammatical state from the mark on its ending — whether that mark is original (أَصْلِيّ) or a stand-in (فَرْع / نَائِب).",
};

/** ظاهرة / مقدرة — shared commentary definitions */
export const ZAHIRA_MUQADDARA = {
  zahira: {
    ar: "عَلَامَةٌ ظَاهِرَةٌ",
    defAr: "هِيَ الَّتِي يُتَلَفَّظُ بِهَا فِي آخِرِ الْكَلِمَةِ.",
    defEn: "An explicit sign: the vowel or letter is actually pronounced on the word’s ending (e.g. مُحَمَّدٌ, يَضْرِبُ).",
  },
  muqaddara: {
    ar: "عَلَامَةٌ مُقَدَّرَةٌ",
    defAr:
      "مَا يَمْنَعُ مِنَ التَّلَفُّظِ بِهِ مَانِعٌ: تَعَذُّرٌ، أَوِ اسْتِثْقَالٌ، أَوْ مُنَاسَبَةٌ.",
    defEn:
      "An implicit (taqdīrī) sign: a barrier prevents pronouncing it. The three causes are:",
    causes: [
      {
        ar: "التَّعَذُّرُ",
        defEn: "Impossibility — a vowel cannot sit on alif (الْفَتَى، لَيْلَى، يَرْضَى).",
      },
      {
        ar: "الثِّقَلُ / الِاسْتِثْقَالُ",
        defEn: "Heaviness — a vowel on final wāw/yāʾ is heavy (الْقَاضِي، يَدْعُو، يَقْضِي).",
      },
      {
        ar: "حَرَكَةُ الْمُنَاسَبَةِ",
        defEn:
          "Appropriation — the ending slot is occupied by the vowel matching ياء المتكلم (أَخِي، غُلَامِي).",
      },
    ],
  },
};

/** Sticky nav / overview chips */
export const ALAMAT_STATES_OVERVIEW = [
  {
    id: "raf",
    ar: "الرَّفْع",
    en: "Rafʿ",
    signs: "4",
    original: "الضَّمَّة",
    furoo: ["الْوَاو", "الْأَلِف", "النُّون"],
    applies: "Nouns & verbs",
    langAr: "الْعُلُوُّ وَالِارْتِفَاعُ",
    istilahAr: "تَغْيِيرٌ مَخْصُوصٌ عَلَامَتُهُ الضَّمَّةُ وَمَا نَابَ عَنْهَا",
    defEn:
      "Linguistically ‘elevation’; terminologically a specific change whose sign is the ḍammah and what stands in for it. Occurs in nouns and verbs.",
  },
  {
    id: "nasb",
    ar: "النَّصْب",
    en: "Naṣb",
    signs: "5",
    original: "الْفَتْحَة",
    furoo: ["الْأَلِف", "الْكَسْرَة", "الْيَاء", "حَذْفُ النُّون"],
    applies: "Nouns & verbs",
    langAr: "الِاسْتِقَامَةُ وَالِاعْتِدَالُ",
    istilahAr: "تَغْيِيرٌ مَخْصُوصٌ عَلَامَتُهُ الْفَتْحَةُ وَمَا نَابَ عَنْهَا",
    defEn:
      "Linguistically ‘uprightness’; terminologically a specific change whose sign is the fatḥah and what stands in for it. Occurs in nouns and verbs.",
  },
  {
    id: "khafd",
    ar: "الْخَفْض",
    en: "Khafḍ",
    signs: "3",
    original: "الْكَسْرَة",
    furoo: ["الْيَاء", "الْفَتْحَة"],
    applies: "Nouns only",
    langAr: "التَّسَفُّلُ",
    istilahAr: "تَغْيِيرٌ مَخْصُوصٌ عَلَامَتُهُ الْكَسْرَةُ وَمَا نَابَ عَنْهَا",
    defEn:
      "Linguistically ‘lowering’; terminologically a specific change whose sign is the kasrah and what stands in for it. Only in nouns — لَا خَفْضَ فِي الْأَفْعَالِ.",
  },
  {
    id: "jazm",
    ar: "الْجَزْم",
    en: "Jazm",
    signs: "2",
    original: "السُّكُون",
    furoo: ["الْحَذْف"],
    applies: "Verbs only",
    langAr: "الْقَطْعُ",
    istilahAr: "تَغْيِيرٌ مَخْصُوصٌ عَلَامَتُهُ السُّكُونُ وَمَا نَابَ عَنْهُ",
    defEn:
      "Linguistically ‘cutting’; terminologically a specific change whose sign is the sukūn and what stands in for it. Only in the muḍāriʿ — لَا جَزْمَ فِي الْأَسْمَاءِ.",
  },
];

export const ALAMAT_IRAB_MINDMAP = [
  {
    id: "raf",
    tone: "raf",
    ar: "عَلَامَاتُ الرَّفْعِ",
    en: "Signs of al-Rafʿ",
    intro:
      "Four signs mark rafʿ: one original (أَصْلِيَّة) — the ḍammah — and three that stand in for it (فُرُوع).",
    lineIndex: 0,
    matnAr: "لِلرَّفْعِ أَرْبَعُ عَلَامَاتٍ: الضَّمَّةُ، وَالْوَاوُ، وَالْأَلِفُ، وَالنُّونُ",
    defAr:
      "وَاحِدَةٌ مِنْهَا أَصْلِيَّةٌ وَهِيَ الضَّمَّةُ، وَثَلَاثٌ فُرُوعٌ عَنْهَا: الْوَاوُ وَالْأَلِفُ وَالنُّونُ.",
    defEn:
      "Four signs of rafʿ: one original — the ḍammah — and three subsidiaries (فُرُوع) that stand in for it: wāw, alif, and nūn.",
    langAr: "الْعُلُوُّ وَالِارْتِفَاعُ",
    istilahAr: "تَغْيِيرٌ مَخْصُوصٌ عَلَامَتُهُ الضَّمَّةُ وَمَا نَابَ عَنْهَا",

    signs: [
      {
        id: "dammah",
        ar: "الضَّمَّة",
        en: "al-Ḍammah",
        kind: "original",
        standsFor: null,
        lineIndex: 1,
        positionsLabel: "4 positions",
        definition:
          "The original sign of rafʿ. It appears (ظَاهِرَة) or is implied (مُقَدَّرَة) on four categories of words.",
        memorize: "مفرد · تكسير · جمع مؤنث سالم · مضارع بلا اتصال",
        matnAr: "فَأَمَّا الضَّمَّةُ فَتَكُونُ عَلَامَةً لِلرَّفْعِ فِي أَرْبَعَةِ مَوَاضِعَ",
        defAr:
          "الضَّمَّةُ هِيَ الْعَلَامَةُ الْأَصْلِيَّةُ لِلرَّفْعِ، وَتَكُونُ ظَاهِرَةً أَوْ مُقَدَّرَةً فِي أَرْبَعَةِ مَوَاضِعَ.",
        defEn:
          "The ḍammah is the original (أَصْلِيَّة) sign of rafʿ. It appears explicitly (ظَاهِرَة) or is implied (مُقَدَّرَة) in four positions.",

        positions: [
          {
            ar: "الِاسْمُ الْمُفْرَدُ",
            en: "The singular noun",
            rule:
              "Not dual, not sound plural, not treated like them, and not one of the five nouns (الأَسْمَاء الخَمْسَة).",
            defAr:
              "مَا لَيْسَ مُثَنًّى وَلَا مَجْمُوعًا وَلَا مُلْحَقًا بِهِمَا وَلَا مِنَ الْأَسْمَاءِ الْخَمْسَةِ.",
            defEn:
              "Here ‘singular’ is technical: not dual, not plural, not treated like either, and not one of the five nouns. May be masculine or feminine; ḍammah may be ظاهرة or مقدرة (تعذر on alif, ثقل on yāʾ, مناسبة before ياء المتكلم).",

            cases: [
              {
                ar: "ظَاهِرَة",
                en: "Explicit",
                examples: [
                  { ar: "مُحَمَّدٌ", en: "Muḥammad" },
                  { ar: "فَاطِمَةُ", en: "Fāṭimah" },
                ],
              },
              {
                ar: "مُقَدَّرَة — تَعَذُّر",
                en: "Implicit — impossibility (alif-final)",
                note: "Cannot pronounce a vowel on alif.",
                examples: [
                  { ar: "الْفَتَى", en: "the youth" },
                  { ar: "لَيْلَى", en: "Laylā" },
                ],
              },
              {
                ar: "مُقَدَّرَة — ثِقَل",
                en: "Implicit — heaviness (yā-final)",
                note: "Ḍammah on final yā is heavy, so it is implied.",
                examples: [{ ar: "الْقَاضِي", en: "the judge" }],
              },
              {
                ar: "مُقَدَّرَة — مُنَاسَبَة",
                en: "Implicit — suitability (before ياء المتكلم)",
                note: "Kasrah before \"my\" blocks the ḍammah from surfacing.",
                examples: [{ ar: "أَخِي", en: "my brother" }],
              },
            ],
            examples: [
              { ar: "حَضَرَ مُحَمَّدٌ", en: "Muḥammad was present." },
              { ar: "حَضَرَ الْفَتَى وَالْقَاضِي وَأَخِي", en: "The youth, the judge, and my brother were present." },
            ],
          },
          {
            ar: "جَمْعُ التَّكْسِيرِ",
            en: "The broken plural",
            defAr:
              "مَا دَلَّ عَلَى أَكْثَرَ مِنِ اثْنَيْنِ أَوِ اثْنَتَيْنِ مَعَ تَغَيُّرٍ فِي صِيغَةِ مُفْرَدِهِ.",
            defEn:
              "A plural indicating more than two (m/f) with a change in the singular’s pattern. Change types: شكل, نقص, زيادة, and their combinations. Rafʿ by ḍammah ظاهرة or مقدرة.",
            rule:
              "Plural whose pattern changes from the singular (شكل / نقص / زيادة / combinations).",
            cases: [
              {
                ar: "ظَاهِرَة",
                en: "Explicit",
                examples: [
                  { ar: "رِجَالٌ", en: "men" },
                  { ar: "كُتُبٌ", en: "books" },
                ],
              },
              {
                ar: "مُقَدَّرَة",
                en: "Implicit (same three causes)",
                examples: [
                  { ar: "الْعَذَارَى", en: "maidens (تعذر)" },
                  { ar: "الْجَوَارِي", en: "slave-girls (ثقل)" },
                ],
              },
            ],
            examples: [{ ar: "جَاءَ الرِّجَالُ", en: "The men came." }],
          },
          {
            ar: "جَمْعُ الْمُؤَنَّثِ السَّالِمِ",
            en: "Sound feminine plural",
            defAr:
              "مَا دَلَّ عَلَى أَكْثَرَ مِنِ اثْنَتَيْنِ بِزِيَادَةِ أَلِفٍ وَتَاءٍ فِي آخِرِهِ.",
            defEn:
              "Indicates more than two feminine by adding alif + tāʾ at the end (زَيْنَبَاتٌ). If alif or tāʾ was already in the singular (قُضَاة، أَمْوَات), it is جمع تكسير, not this. Implicit ḍammah only when مضاف to ياء المتكلم.",
            rule: "Singular + ا + ت (e.g. مُسْلِمَة → مُسْلِمَات). Implicit only with ياء المتكلم.",
            cases: [
              {
                ar: "ظَاهِرَة",
                en: "Explicit",
                examples: [
                  { ar: "مُسْلِمَاتٌ", en: "Muslim women" },
                  { ar: "فَاطِمَاتٌ", en: "Fāṭimahs" },
                ],
              },
              {
                ar: "مُقَدَّرَة — مُنَاسَبَة",
                en: "Implicit before ياء المتكلم",
                examples: [{ ar: "مُسْلِمَاتِي", en: "my Muslim women" }],
              },
            ],
            examples: [{ ar: "جَاءَتِ الْمُؤْمِنَاتُ", en: "The believing women came." }],
          },
          {
            ar: "الْفِعْلُ الْمُضَارِعُ الَّذِي لَمْ يَتَّصِلْ بِآخِرِهِ شَيْءٌ",
            en: "Muḍāriʿ with nothing attached at the end",
            defAr:
              "لَمْ يَتَّصِلْ بِهِ أَلِفُ اثْنَيْنِ، وَلَا وَاوُ جَمَاعَةٍ، وَلَا يَاءُ مُخَاطَبَةٍ، وَلَا نُونُ تَوْكِيدٍ، وَلَا نُونُ نِسْوَةٍ.",
            defEn:
              "A muḍāriʿ whose end is free of: dual alif, wāw of plurality, yāʾ of feminine address, nūn of emphasis, and nūn of women. Then rafʿ is by ḍammah (ظاهرة or مقدرة). With ألف/واو/ياء → ثبوت النون (أفعال خمسة). With نون توكيد → مبني على الفتح. With نون نسوة → مبني على السكون.",
            rule:
              "Excludes: ألف الاثنين، واو الجماعة، ياء المخاطبة، نون التوكيد، نون النسوة. When none of these attach, rafʿ is by ḍammah.",
            cases: [
              {
                ar: "ظَاهِرَة",
                en: "Explicit",
                examples: [
                  { ar: "يَكْتُبُ", en: "he writes" },
                  { ar: "يَذْهَبُ", en: "he goes" },
                ],
              },
              {
                ar: "مُقَدَّرَة — تَعَذُّر / ثِقَل",
                en: "Implicit on weak ending",
                examples: [
                  { ar: "يَسْعَى", en: "he strives (تعذر)" },
                  { ar: "يَدْعُو", en: "he calls (ثقل)" },
                  { ar: "يَرْمِي", en: "he throws (ثقل)" },
                ],
              },
            ],
            examples: [{ ar: "يَكْتُبُ مُحَمَّدٌ", en: "Muḥammad writes." }],
          },
        ],
      },
      {
        id: "waw",
        ar: "الْوَاو",
        en: "al-Wāw",
        kind: "subsidiary",
        standsFor: "الضَّمَّة",
        lineIndex: 2,
        positionsLabel: "2 positions",
        definition: "Stands in for the ḍammah in two noun categories.",
        memorize: "جمع مذكر سالم · الأسماء الخمسة",
        matnAr: "وَأَمَّا الْوَاوُ فَتَكُونُ عَلَامَةً لِلرَّفْعِ فِي مَوْضِعَيْنِ",
        defAr: "الْوَاوُ فَرْعٌ نَائِبٌ عَنِ الضَّمَّةِ فِي مَوْضِعَيْنِ.",
        defEn:
          "The wāw is a subsidiary sign (فَرْع) that stands in for the ḍammah in exactly two positions.",

        positions: [
          {
            ar: "جَمْعُ الْمُذَكَّرِ السَّالِمِ",
            en: "Sound masculine plural",
            defAr:
              "اسْمٌ دَلَّ عَلَى أَكْثَرَ مِنِ اثْنَيْنِ، بِزِيَادَةٍ فِي آخِرِهِ، صَالِحٌ لِلتَّجْرِيدِ مِنَ الزِّيَادَةِ، وَعَطْفِ مِثْلِهِ عَلَيْهِ.",
            defEn:
              "A noun indicating more than two males, with an ending addition (و+ن) that can be stripped to leave a sound singular, and that allows ‘X and X’ by عطف. Sign of rafʿ: wāw نائبة عن الضمة; the nūn is عوض عن التنوين.",
            rule: "Singular + ون / ين. In rafʿ: ends in وَاؤٌ + نُون.",
            examples: [
              { ar: "الْمُسْلِمُونَ", en: "the Muslim men" },
              { ar: "جَاءَ الْمُؤْمِنُونَ", en: "The believers came." },
            ],
          },
          {
            ar: "الْأَسْمَاءُ الْخَمْسَةُ",
            en: "The five nouns",
            defAr: "أَبُوكَ، أَخُوكَ، حَمُوكَ، فُوكَ، ذُو مَالٍ — تُرْفَعُ بِالْوَاوِ نِيَابَةً عَنِ الضَّمَّةِ.",
            defEn:
              "The five nouns are raised with wāw standing in for ḍammah — only when all conditions hold. Shared: مفردة، مكبرة، مضافة، إضافتها لغير ياء المتكلم. Extra: فُوكَ free of mīm; ذُو بمعنى صاحب mudāf to a non-descriptive جنس ظاهر.",
            rule:
              "أَبُوكَ، أَخُوكَ، حَمُوكَ، فُوكَ، ذُو مَالٍ — all conditions must hold:",
            conditions: [
              "مُفْرَد — singular (not dual/plural)",
              "مُكَبَّر — not diminutive",
              "مُضَاف — annexed to another noun",
              "لِغَيْرِ يَاءِ الْمُتَكَلِّمِ — not annexed to \"my\"",
              "فُوكَ without ميم; ذُو = صاحب + جنس ظاهر غير وصف",
            ],
            examples: [
              { ar: "جَاءَ أَبُوكَ", en: "Your father came." },
              { ar: "هَذَا ذُو مَالٍ", en: "This is a man of wealth." },
            ],
          },
        ],
      },
      {
        id: "alif-raf",
        ar: "الْأَلِف",
        en: "al-Alif",
        kind: "subsidiary",
        standsFor: "الضَّمَّة",
        lineIndex: 4,
        positionsLabel: "1 position",
        definition: "Stands in for the ḍammah in one category only.",
        memorize: "المثنى فقط",
        matnAr: "وَأَمَّا الْأَلِفُ فَتَكُونُ عَلَامَةً لِلرَّفْعِ فِي تَثْنِيَةِ الْأَسْمَاءِ خَاصَّةً",
        defAr: "الْأَلِفُ فَرْعٌ نَائِبٌ عَنِ الضَّمَّةِ فِي الْمُثَنَّى فَقَطْ.",
        defEn:
          "The alif is a subsidiary sign that stands in for the ḍammah in one position only: the dual of nouns.",

        positions: [
          {
            ar: "الْمُثَنَّى",
            en: "The dual",
            defAr:
              "كُلُّ اسْمٍ دَلَّ عَلَى اثْنَيْنِ أَوِ اثْنَتَيْنِ، بِزِيَادَةٍ فِي آخِرِهِ، أَغْنَتْ عَنِ الْعَاطِفِ وَالْمَعْطُوفِ.",
            defEn:
              "Every noun indicating two (m/f) by an ending addition (ا+ن) that replaces saying ‘X and X’. Sign of rafʿ: alif نائبة عن الضمة; the nūn is عوض عن التنوين.",
            rule: "Two of something: singular + انِ / يْنِ. In rafʿ: ends in أَلِف + نُون.",
            examples: [
              { ar: "الرَّجُلَانِ", en: "the two men" },
              { ar: "جَاءَ الرَّجُلَانِ", en: "The two men came." },
            ],
          },
        ],
      },
      {
        id: "nun-raf",
        ar: "النُّون",
        en: "al-Nūn",
        kind: "subsidiary",
        standsFor: "الضَّمَّة",
        lineIndex: 5,
        positionsLabel: "1 position",
        definition: "Stands in for the ḍammah on the five verbs (الأَفْعَال الخَمْسَة).",
        memorize: "يفعلان · تفعلان · يفعلون · تفعلون · تفعلين",
        matnAr: "وَأَمَّا النُّونُ فَتَكُونُ عَلَامَةً لِلرَّفْعِ فِي الْفِعْلِ الْمُضَارِعِ إِذَا اتَّصَلَ بِهِ …",
        defAr: "ثُبُوتُ النُّونِ فَرْعٌ نَائِبٌ عَنِ الضَّمَّةِ فِي الْأَفْعَالِ الْخَمْسَةِ.",
        defEn:
          "The presence (ثُبُوت) of the nūn is a subsidiary sign standing in for the ḍammah on the five verbs.",

        positions: [
          {
            ar: "الْأَفْعَالُ الْخَمْسَةُ",
            en: "The five verbs",
            defAr:
              "الْفِعْلُ الْمُضَارِعُ إِذَا اتَّصَلَ بِهِ ضَمِيرُ تَثْنِيَةٍ، أَوْ ضَمِيرُ جَمْعٍ، أَوْ ضَمِيرُ الْمُؤَنَّثَةِ الْمُخَاطَبَةِ.",
            defEn:
              "The muḍāriʿ attached to a dual pronoun, a plural pronoun, or the feminine-addressee pronoun: يَفْعَلَانِ، تَفْعَلَانِ، يَفْعَلُونَ، تَفْعَلُونَ، تَفْعَلِينَ. Sign of rafʿ: ثبوت النون. The alif/wāw/yāʾ is فاعل مبني على السكون في محل رفع.",
            rule:
              "Muḍāriʿ connected to: ضمير تثنية، أو جمع، أو مؤنثة مخاطبة. Rafʿ = ثُبُوت النُّون (nūn stays).",
            examples: [
              { ar: "يَفْعَلَانِ", en: "they two (m.) do" },
              { ar: "تَفْعَلَانِ", en: "you two do" },
              { ar: "يَفْعَلُونَ", en: "they (m.) do" },
              { ar: "تَفْعَلُونَ", en: "you (m. pl.) do" },
              { ar: "تَفْعَلِينَ", en: "you (f. sg.) do" },
            ],
          },
        ],
      },
    ],
  },

  {
    id: "nasb",
    tone: "nasb",
    ar: "عَلَامَاتُ النَّصْبِ",
    en: "Signs of al-Naṣb",
    intro:
      "Five signs mark naṣb: one original — the fatḥah — and four that stand in for it.",
    lineIndex: 6,
    matnAr: "لِلنَّصْبِ خَمْسُ عَلَامَاتٍ: الْفَتْحَةُ، وَالْأَلِفُ، وَالْكَسْرَةُ، وَالْيَاءُ، وَحَذْفُ النُّونِ",
    defAr:
      "وَاحِدَةٌ أَصْلِيَّةٌ وَهِيَ الْفَتْحَةُ، وَأَرْبَعٌ فُرُوعٌ عَنْهَا: الْأَلِفُ وَالْكَسْرَةُ وَالْيَاءُ وَحَذْفُ النُّونِ.",
    defEn:
      "Five signs of naṣb: one original — the fatḥah — and four subsidiaries: alif, kasrah, yāʾ, and removal of the nūn.",
    langAr: "الِاسْتِقَامَةُ وَالِاعْتِدَالُ",
    istilahAr: "تَغْيِيرٌ مَخْصُوصٌ عَلَامَتُهُ الْفَتْحَةُ وَمَا نَابَ عَنْهَا",

    signs: [
      {
        id: "fatha",
        ar: "الْفَتْحَة",
        en: "al-Fatḥah",
        kind: "original",
        standsFor: null,
        lineIndex: 7,
        positionsLabel: "3 positions",
        definition: "The original sign of naṣb. Explicit or implicit on three categories.",
        memorize: "مفرد · تكسير · مضارع + ناصب بلا اتصال",
        matnAr: "فَأَمَّا الْفَتْحَةُ فَتَكُونُ عَلَامَةً لِلنَّصْبِ فِي ثَلَاثَةِ مَوَاضِعَ",
        defAr:
          "الْفَتْحَةُ هِيَ الْعَلَامَةُ الْأَصْلِيَّةُ لِلنَّصْبِ، ظَاهِرَةً أَوْ مُقَدَّرَةً فِي ثَلَاثَةِ مَوَاضِعَ.",
        defEn:
          "The fatḥah is the original sign of naṣb. It appears explicitly or is implied in three positions.",

        positions: [
          {
            ar: "الِاسْمُ الْمُفْرَدُ",
            en: "The singular noun",
            defAr:
              "مَا لَيْسَ مُثَنًّى وَلَا مَجْمُوعًا وَلَا مُلْحَقًا بِهِمَا وَلَا مِنَ الْأَسْمَاءِ الْخَمْسَةِ.",
            defEn:
              "Same technical singular as under rafʿ. Fatḥah ظاهرة (عَلِيًّا) or مقدرة on alif by تعذر (الْفَتَى، لَيْلَى).",
            cases: [
              {
                ar: "ظَاهِرَة",
                en: "Explicit",
                examples: [{ ar: "مُحَمَّدًا", en: "Muḥammad (acc.)" }],
              },
              {
                ar: "مُقَدَّرَة",
                en: "Implicit (تعذر / ثقل / مناسبة)",
                examples: [
                  { ar: "رَأَيْتُ الْفَتَى", en: "I saw the youth." },
                  { ar: "رَأَيْتُ الْقَاضِيَ", en: "I saw the judge." },
                ],
              },
            ],
            examples: [{ ar: "رَأَيْتُ مُحَمَّدًا", en: "I saw Muḥammad." }],
          },
          {
            ar: "جَمْعُ التَّكْسِيرِ",
            en: "The broken plural",
            defAr:
              "مَا دَلَّ عَلَى أَكْثَرَ مِنِ اثْنَيْنِ أَوِ اثْنَتَيْنِ مَعَ تَغَيُّرٍ فِي صِيغَةِ مُفْرَدِهِ.",
            defEn:
              "Same broken-plural definition as under rafʿ. Fatḥah ظاهرة (الرِّجَالَ) or مقدرة on alif by تعذر (سُكَارَى).",
            examples: [
              { ar: "رَأَيْتُ الرِّجَالَ", en: "I saw the men." },
              { ar: "حَفِظَ التَّلَامِيذُ الدُّرُوسَ", en: "The students memorised the lessons." },
            ],
          },
          {
            ar: "الْفِعْلُ الْمُضَارِعُ الْمَنْصُوبُ",
            en: "Muḍāriʿ made manṣūb (nāṣib, nothing attached)",
            defAr:
              "الْفِعْلُ الْمُضَارِعُ إِذَا دَخَلَ عَلَيْهِ نَاصِبٌ وَلَمْ يَتَّصِلْ بِآخِرِهِ شَيْءٌ.",
            defEn:
              "A muḍāriʿ preceded by a nāṣib (لَنْ، أَنْ…) with no dual-alif / wāw-pl. / yāʾ-fem. / nūn-tawkīd / nūn-niswah. Fatḥah ظاهرة (لَنْ نَبْرَحَ) or مقدرة on alif. With ألف/واو/ياء → نصب بحذف النون. With نون توكيد/نسوة → مبني في محل نصب.",
            rule: "Preceded by a nāṣib (e.g. لَنْ، أَنْ). Attachments → حذف النون or مبني.",
            examples: [
              { ar: "لَنْ يَكْتُبَ", en: "he will never write" },
              { ar: "لَنْ أُخَالِفَ", en: "I will never oppose" },
            ],
          },
        ],
      },
      {
        id: "alif-nasb",
        ar: "الْأَلِف",
        en: "al-Alif",
        kind: "subsidiary",
        standsFor: "الْفَتْحَة",
        lineIndex: 8,
        positionsLabel: "1 position",
        definition: "Stands in for the fatḥah on the five nouns.",
        memorize: "أَبَاكَ · أَخَاكَ · حَمَاكَ · فَاكَ · ذَا مَالٍ",
        positions: [
          {
            ar: "الْأَسْمَاءُ الْخَمْسَةُ",
            en: "The five nouns",
            defAr: "تُنْصَبُ بِالْأَلِفِ نِيَابَةً عَنِ الْفَتْحَةِ بِالشُّرُوطِ الْمُتَقَدِّمَةِ.",
            defEn:
              "Naṣb with alif standing in for fatḥah, under the same conditions as for rafʿ by wāw (رَأَيْتُ أَبَاكَ).",
            rule: "Same conditions as in rafʿ. In naṣb they take alif instead of wāw.",
            examples: [
              { ar: "رَأَيْتُ أَبَاكَ", en: "I saw your father." },
              { ar: "صَاحَبْتُ ذَا عِلْمٍ", en: "I accompanied a man of knowledge." },
            ],
          },
        ],
      },
      {
        id: "kasrah-nasb",
        ar: "الْكَسْرَة",
        en: "al-Kasrah",
        kind: "subsidiary",
        standsFor: "الْفَتْحَة",
        lineIndex: 9,
        positionsLabel: "1 position",
        definition: "Stands in for the fatḥah on the sound feminine plural.",
        memorize: "جمع مؤنث سالم → نصب بالكسرة",
        matnAr: "وَأَمَّا الْكَسْرَةُ فَتَكُونُ عَلَامَةً لِلنَّصْبِ فِي جَمْعِ الْمُؤَنَّثِ السَّالِمِ",
        defAr: "الْكَسْرَةُ فَرْعٌ نَائِبٌ عَنِ الْفَتْحَةِ — وَلَيْسَ لَهَا مَوْضِعٌ سِوَى جَمْعِ الْمُؤَنَّثِ السَّالِمِ.",
        defEn:
          "The kasrah stands in for the fatḥah only in the sound feminine plural — a famous exception to ‘naṣb = fatḥah’.",

        positions: [
          {
            ar: "جَمْعُ الْمُؤَنَّثِ السَّالِمِ",
            en: "Sound feminine plural",
            defAr: "يُعْرَفُ نَصْبُهُ بِالْكَسْرَةِ فِي آخِرِهِ نِيَابَةً عَنِ الْفَتْحَةِ.",
            defEn:
              "Recognised as manṣūb by a kasrah at the end standing in for fatḥah (إِنَّ الْفَتَيَاتِ / رَأَيْتُ الْمُؤْمِنَاتِ).",
            rule: "Exception to the default \"naṣb = fatḥah\". Key memorisation point.",
            examples: [
              { ar: "رَأَيْتُ الْمُؤْمِنَاتِ", en: "I saw the believing women." },
              { ar: "لَنْ أُخَالِفَ الْمُؤْمِنَاتِ", en: "I will never oppose the believing women." },
            ],
          },
        ],
      },
      {
        id: "ya-nasb",
        ar: "الْيَاء",
        en: "al-Yāʾ",
        kind: "subsidiary",
        standsFor: "الْفَتْحَة",
        lineIndex: 10,
        positionsLabel: "2 positions",
        definition: "Stands in for the fatḥah on the dual and the sound masculine plural.",
        memorize: "المثنى · جمع مذكر سالم",
        matnAr: "وَأَمَّا الْيَاءُ فَتَكُونُ عَلَامَةً لِلنَّصْبِ فِي التَّثْنِيَةِ وَالْجَمْعِ",
        defAr: "الْيَاءُ فَرْعٌ نَائِبٌ عَنِ الْفَتْحَةِ فِي الْمُثَنَّى وَجَمْعِ الْمُذَكَّرِ السَّالِمِ.",
        defEn:
          "The yāʾ stands in for the fatḥah in two positions: the dual and the sound masculine plural.",

        positions: [
          {
            ar: "الْمُثَنَّى",
            en: "The dual",
            defAr: "الْيَاءُ … مَا قَبْلَهَا مَفْتُوحًا وَمَا بَعْدَهَا مَكْسُورًا.",
            defEn:
              "Dual in naṣb: yāʾ with fatḥah before it and kasrah after it; the nūn is عوض عن التنوين.",
            rule: "Naṣb (and khafḍ) take يَاء + نُون. Fatḥah before the yāʾ, kasrah after.",
            examples: [
              { ar: "رَأَيْتُ الرَّجُلَيْنِ", en: "I saw the two men." },
            ],
          },
          {
            ar: "جَمْعُ الْمُذَكَّرِ السَّالِمِ",
            en: "Sound masculine plural",
            defAr: "الْيَاءُ … مَا قَبْلَهَا مَكْسُورًا وَمَا بَعْدَهَا مَفْتُوحًا.",
            defEn:
              "Sound masculine plural in naṣb: yāʾ with kasrah before it and fatḥah after it; the nūn is عوض عن التنوين.",
            rule: "Naṣb (and khafḍ) take يَاء + نُون. Kasrah before the yāʾ, fatḥah after.",
            examples: [
              { ar: "رَأَيْتُ الْمُسْلِمِينَ", en: "I saw the Muslim men." },
            ],
          },
        ],
      },
      {
        id: "hadhf-nun-nasb",
        ar: "حَذْفُ النُّونِ",
        en: "Removal of the Nūn",
        kind: "subsidiary",
        standsFor: "الْفَتْحَة",
        lineIndex: 11,
        positionsLabel: "1 position",
        definition: "Stands in for the fatḥah on the five verbs — the nūn that marked rafʿ is dropped.",
        memorize: "الأفعال الخمسة → نصب بحذف النون",
        matnAr: "وَأَمَّا حَذْفُ النُّونِ فَيَكُونُ عَلَامَةً لِلنَّصْبِ فِي الْأَفْعَالِ الْخَمْسَةِ",
        defAr: "حَذْفُ النُّونِ فَرْعٌ نَائِبٌ عَنِ الْفَتْحَةِ فِي الْأَفْعَالِ الَّتِي رَفْعُهَا بِثُبُوتِ النُّونِ.",
        defEn:
          "Removing the rafʿ-nūn stands in for the fatḥah on the five verbs (those raised by ثبوت النون).",

        positions: [
          {
            ar: "الْأَفْعَالُ الْخَمْسَةُ",
            en: "The five verbs",
            defAr: "يُعْرَفُ نَصْبُهَا بِحَذْفِ النُّونِ الَّتِي كَانَتْ عَلَامَةَ الرَّفْعِ.",
            defEn:
              "Know their naṣb when the rafʿ-nūn is deleted (أَنْ تَحْفَظُوا / لَنْ تَفْعَلِي). The alif/wāw/yāʾ remains فاعل مبني على السكون في محل رفع.",
            rule: "With a nāṣib: يَفْعَلَا، تَفْعَلَا، يَفْعَلُوا، تَفْعَلُوا، تَفْعَلِي (nūn gone).",
            examples: [
              { ar: "لَنْ يَفْعَلَا", en: "they two will never do" },
              { ar: "لَنْ تَفْعَلِي", en: "you (f.) will never do" },
            ],
          },
        ],
      },
    ],
  },

  {
    id: "khafd",
    tone: "khafd",
    ar: "عَلَامَاتُ الْخَفْضِ",
    en: "Signs of al-Khafḍ",
    intro:
      "Three signs mark khafḍ (genitive — nouns only): one original — the kasrah — and two that stand in for it.",
    lineIndex: 12,
    matnAr: "لِلْخَفْضِ ثَلَاثُ عَلَامَاتٍ: الْكَسْرَةُ، وَالْيَاءُ، وَالْفَتْحَةُ",
    defAr:
      "الْكَسْرَةُ هِيَ الْأَصْلُ فِي الْخَفْضِ، وَالْيَاءُ وَالْفَتْحَةُ فَرْعَانِ عَنْهَا. وَالْخَفْضُ فِي الْأَسْمَاءِ فَقَطْ.",
    defEn:
      "Three signs of khafḍ: kasrah (original), yāʾ and fatḥah (subsidiaries). Khafḍ occurs only in nouns — لَا خَفْضَ فِي الْأَفْعَالِ.",
    langAr: "التَّسَفُّلُ",
    istilahAr: "تَغْيِيرٌ مَخْصُوصٌ عَلَامَتُهُ الْكَسْرَةُ وَمَا نَابَ عَنْهَا",

    signs: [
      {
        id: "kasrah",
        ar: "الْكَسْرَة",
        en: "al-Kasrah",
        kind: "original",
        standsFor: null,
        lineIndex: 13,
        positionsLabel: "3 positions",
        definition:
          "The original sign of khafḍ. Requires a مُنْصَرِف (triptote) noun for the first two positions.",
        memorize: "مفرد منصرف · تكسير منصرف · جمع مؤنث سالم",
        matnAr: "فَأَمَّا الْكَسْرَةُ فَتَكُونُ عَلَامَةً لِلْخَفْضِ فِي ثَلَاثَةِ مَوَاضِعَ",
        defAr:
          "الْكَسْرَةُ هِيَ الْعَلَامَةُ الْأَصْلِيَّةُ لِلْخَفْضِ فِي ثَلَاثَةِ مَوَاضِعَ.",
        defEn:
          "The kasrah is the original sign of khafḍ in three positions. For the first two, the noun must be مُنْصَرِف (accepting ṣarf = tanwīn).",

        positions: [
          {
            ar: "الِاسْمُ الْمُفْرَدُ الْمُنْصَرِفُ",
            en: "Triptote singular noun",
            defAr: "الصَّرْفُ: هُوَ التَّنْوِينُ — وَالْمُنْصَرِفُ: مَا يَلْحَقُ آخِرَهُ الصَّرْفُ.",
            defEn:
              "A technical singular whose end accepts ṣarf (= tanwīn). Khafḍ by explicit kasrah (مِنْ مُحَمَّدٍ). Diptotes take fatḥah instead.",
            rule: "Accepts tanwīn and kasrah. Diptotes (ممنوع من الصرف) take fatḥah instead — see below.",
            examples: [
              { ar: "مَرَرْتُ بِمُحَمَّدٍ", en: "I passed by Muḥammad." },
              { ar: "فِي الدَّرْسِ", en: "in the lesson" },
            ],
          },
          {
            ar: "جَمْعُ التَّكْسِيرِ الْمُنْصَرِفُ",
            en: "Triptote broken plural",
            defAr: "جَمْعُ تَكْسِيرٍ يَلْحَقُ آخِرَهُ التَّنْوِينُ.",
            defEn:
              "A broken plural that accepts tanwīn. Khafḍ by explicit kasrah (بِرِجَالٍ). Diptote broken plurals (e.g. مَسَاجِدَ) take fatḥah instead.",
            examples: [
              { ar: "مَرَرْتُ بِرِجَالٍ", en: "I passed by men." },
              { ar: "فِي الْمَسَاجِدِ", en: "in the mosques (if منصرف)" },
            ],
          },
          {
            ar: "جَمْعُ الْمُؤَنَّثِ السَّالِمِ",
            en: "Sound feminine plural",
            defAr: "يُخْفَضُ بِالْكَسْرَةِ الظَّاهِرَةِ.",
            defEn:
              "Always takes an explicit kasrah in khafḍ (إِلَى فَتَيَاتٍ) — and also in naṣb (standing in for fatḥah).",
            rule: "Always takes kasrah in khafḍ (and in naṣb!).",
            examples: [
              { ar: "مَرَرْتُ بِالْمُؤْمِنَاتِ", en: "I passed by the believing women." },
              { ar: "فِي الصَّلَوَاتِ", en: "in the prayers" },
            ],
          },
        ],
      },
      {
        id: "ya-khafd",
        ar: "الْيَاء",
        en: "al-Yāʾ",
        kind: "subsidiary",
        standsFor: "الْكَسْرَة",
        lineIndex: 14,
        positionsLabel: "3 positions",
        definition: "Stands in for the kasrah on three categories.",
        memorize: "أسماء خمسة · مثنى · جمع مذكر سالم",
        matnAr: "وَأَمَّا الْيَاءُ فَتَكُونُ عَلَامَةً لِلْخَفْضِ فِي ثَلَاثَةِ مَوَاضِعَ",
        defAr: "الْيَاءُ فَرْعٌ نَائِبٌ عَنِ الْكَسْرَةِ فِي الْأَسْمَاءِ الْخَمْسَةِ وَالتَّثْنِيَةِ وَجَمْعِ الْمُذَكَّرِ السَّالِمِ.",
        defEn:
          "The yāʾ stands in for the kasrah in three positions: the five nouns, the dual, and the sound masculine plural.",
        positions: [
          {
            ar: "الْأَسْمَاءُ الْخَمْسَةُ",
            en: "The five nouns",
            defAr: "تُخْفَضُ بِالْيَاءِ نِيَابَةً عَنِ الْكَسْرَةِ بِالشُّرُوطِ الْمُتَقَدِّمَةِ.",
            defEn: "With the same conditions as in rafʿ/naṣb: khafḍ by yāʾ (عَلَى أَبِيكَ).",
            examples: [
              { ar: "مَرَرْتُ بِأَبِيكَ", en: "I passed by your father." },
              { ar: "نَظَرْتُ إِلَى ذِي عِلْمٍ", en: "I looked at a man of knowledge." },
            ],
          },
          {
            ar: "الْمُثَنَّى",
            en: "The dual",
            defAr: "يَاءٌ مَفْتُوحٌ مَا قَبْلَهَا مَكْسُورٌ مَا بَعْدَهَا.",
            defEn:
              "Dual in khafḍ: same form as naṣb — yāʾ with fatḥah before and kasrah after (إِلَى الْجُنْدِيَّيْنِ).",
            rule: "Same form as naṣb: يَاء + نُون (فتحة قبلها، كسرة بعدها).",
            examples: [
              { ar: "مَرَرْتُ بِالرَّجُلَيْنِ", en: "I passed by the two men." },
            ],
          },
          {
            ar: "جَمْعُ الْمُذَكَّرِ السَّالِمِ",
            en: "Sound masculine plural",
            defAr: "يَاءٌ مَكْسُورٌ مَا قَبْلَهَا مَفْتُوحٌ مَا بَعْدَهَا.",
            defEn:
              "Sound masculine plural in khafḍ: same form as naṣb — yāʾ with kasrah before and fatḥah after (عَنِ الْمُسْلِمِينَ).",
            rule: "Same form as naṣb: يَاء + نُون (كسرة قبلها، فتحة بعدها).",
            examples: [
              { ar: "مَرَرْتُ بِالْمُسْلِمِينَ", en: "I passed by the Muslim men." },
            ],
          },
        ],
      },
      {
        id: "fatha-khafd",
        ar: "الْفَتْحَة",
        en: "al-Fatḥah",
        kind: "subsidiary",
        standsFor: "الْكَسْرَة",
        lineIndex: 15,
        positionsLabel: "1 position",
        definition:
          "Stands in for the kasrah on the diptote noun (الِاسْم الَّذِي لَا يَنْصَرِف / مَمْنُوع مِنَ الصَّرْف).",
        memorize: "ممنوع من الصرف → خفض بالفتحة",
        matnAr: "وَأَمَّا الْفَتْحَةُ فَتَكُونُ عَلَامَةً لِلْخَفْضِ فِي الِاسْمِ الَّذِي لَا يَنْصَرِفُ",
        defAr: "الْفَتْحَةُ فَرْعٌ نَائِبٌ عَنِ الْكَسْرَةِ فِي الْمَمْنُوعِ مِنَ الصَّرْفِ.",
        defEn:
          "The fatḥah stands in for the kasrah in one position: the diptote noun (ممنوع من الصرف).",
        positions: [
          {
            ar: "الِاسْمُ الَّذِي لَا يَنْصَرِفُ",
            en: "The diptote (ممنوع من الصرف)",
            defAr:
              "الَّذِي أَشْبَهَ الْفِعْلَ فِي وُجُودِ عِلَّتَيْنِ فَرْعِيَّتَيْنِ (لَفْظِيَّةٍ وَمَعْنَوِيَّةٍ)، أَوْ عِلَّةٍ وَاحِدَةٍ تَقُومُ مَقَامَ الْعِلَّتَيْنِ.",
            defEn:
              "A noun that does not accept ṣarf (tanwīn) because it resembles a verb — by two subsidiary causes (one لفظ + one معنى) or one cause standing for two. Khafḍ by fatḥah نائبة عن الكسرة — unless it has أل or is مضاف, then kasrah returns.",
            rule:
              "Resembles a verb: no tanwīn, and khafḍ by fatḥah (unless definite with ال or مضاف — then it takes kasrah).",
            conditions: [
              "Path A — عِلَّتَانِ: one meaning-cause + one form-cause",
              "Meaning: عَلَمِيَّة (proper noun) or وَصْفِيَّة (descriptive)",
              "Form with علم: تأنيث بغير ألف · عجمة · تركيب · ألف ونون · وزن الفعل · عدل",
              "Form with وصف: only ألف ونون · وزن الفعل · عدل",
              "Path B — one cause = two: صيغة منتهى الجموع · ألف التأنيث (مقصورة/ممدودة)",
            ],
            examples: [
              { ar: "مَرَرْتُ بِأَحْمَدَ", en: "I passed by Aḥmad." },
              { ar: "صَلَّيْتُ فِي مَسَاجِدَ", en: "I prayed in mosques (indefinite diptote)." },
              { ar: "مَرَرْتُ بِإِبْرَاهِيمَ", en: "I passed by Ibrāhīm." },
            ],
          },
        ],
      },
    ],
  },

  {
    id: "jazm",
    tone: "jazm",
    ar: "عَلَامَتَا الْجَزْمِ",
    en: "The Two Signs of al-Jazm",
    intro:
      "Jazm applies only to muḍāriʿ verbs. Two signs: one original — the sukūn — and one stand-in — removal (ḥadhf).",
    lineIndex: 16,
    matnAr: "لِلْجَزْمِ عَلَامَتَانِ: السُّكُونُ، وَالْحَذْفُ",
    defAr:
      "السُّكُونُ هُوَ الْعَلَامَةُ الْأَصْلِيَّةُ، وَالْحَذْفُ هُوَ الْعَلَامَةُ الْفَرْعِيَّةُ. وَالْجَزْمُ فِي الْمُضَارِعِ فَقَطْ.",
    defEn:
      "Two signs of jazm: sukūn (original) and ḥadhf / removal (subsidiary). Jazm occurs only in the muḍāriʿ — لَا جَزْمَ فِي الْأَسْمَاءِ.",
    langAr: "الْقَطْعُ",
    istilahAr: "تَغْيِيرٌ مَخْصُوصٌ عَلَامَتُهُ السُّكُونُ وَمَا نَابَ عَنْهُ",
    signs: [
      {
        id: "sukun",
        ar: "السُّكُون",
        en: "al-Sukūn",
        kind: "original",
        standsFor: null,
        lineIndex: 17,
        positionsLabel: "1 position",
        definition:
          "The original sign of jazm. Marks a sound-ending muḍāriʿ when a jāzim (e.g. لَمْ) precedes it.",
        memorize: "مضارع صحيح الآخر + جازم → سكون",
        matnAr: "فَأَمَّا السُّكُونُ فَيَكُونُ عَلَامَةً لِلْجَزْمِ فِي الْفِعْلِ الْمُضَارِعِ الصَّحِيحِ الْآخِرِ",
        defAr: "السُّكُونُ هُوَ الْعَلَامَةُ الْأَصْلِيَّةُ لِلْجَزْمِ فِي مَوْضِعٍ وَاحِدٍ.",
        defEn:
          "The sukūn is the original sign of jazm in one position: the sound-ending muḍāriʿ.",
        positions: [
          {
            ar: "الْفِعْلُ الْمُضَارِعُ الصَّحِيحُ الْآخِرِ",
            en: "Sound-ending muḍāriʿ verb",
            defAr:
              "أَنَّ آخِرَهُ لَيْسَ حَرْفًا مِنْ حُرُوفِ الْعِلَّةِ الثَّلَاثَةِ: الْأَلِفُ وَالْوَاوُ وَالْيَاءُ.",
            defEn:
              "A muḍāriʿ whose last letter is not alif, wāw, or yāʾ. Jazm by sukūn — the rafʿ ḍammah simply becomes a sukūn (لَمْ يَلْعَبْ).",
            rule:
              "Final letter is not ا / و / ي. Mechanism: the rafʿ ḍammah simply becomes a sukūn.",
            examples: [
              { ar: "يَلْعَبُ → لَمْ يَلْعَبْ", en: "he plays → he did not play" },
              { ar: "يَنْجَحُ → لَمْ يَنْجَحْ", en: "he succeeds → he did not succeed" },
              { ar: "يُسَافِرُ → لَمْ يُسَافِرْ", en: "he travels → he did not travel" },
            ],
          },
        ],
      },
      {
        id: "hadhf-jazm",
        ar: "الْحَذْف",
        en: "al-Ḥadhf (removal)",
        kind: "subsidiary",
        standsFor: "السُّكُون",
        lineIndex: 18,
        positionsLabel: "2 positions",
        definition:
          "Stands in for the sukūn where a plain sukūn cannot land cleanly, or does not apply.",
        memorize: "معتل الآخر → حذف حرف العلة · الأفعال الخمسة → حذف النون",
        matnAr: "وَأَمَّا الْحَذْفُ فَيَكُونُ عَلَامَةً لِلْجَزْمِ فِي مَوْضِعَيْنِ",
        defAr: "الْحَذْفُ فَرْعٌ نَائِبٌ عَنِ السُّكُونِ فِي الْمُعْتَلِّ الْآخِرِ وَالْأَفْعَالِ الْخَمْسَةِ.",
        defEn:
          "Removal (ḥadhf) is the subsidiary sign of jazm in two positions: the weak-ending muḍāriʿ and the five verbs.",
        positions: [
          {
            ar: "الْفِعْلُ الْمُضَارِعُ الْمُعْتَلُّ الْآخِرِ",
            en: "Weak-ending muḍāriʿ",
            defAr:
              "أَنَّ آخِرَهُ حَرْفٌ مِنْ حُرُوفِ الْعِلَّةِ الثَّلَاثَةِ: الْأَلِفُ وَالْوَاوُ وَالْيَاءُ.",
            defEn:
              "A muḍāriʿ ending in alif, wāw, or yāʾ. Jazm by deleting that letter: حذف الألف (فتحة قبلها دليل), حذف الواو (ضمة قبلها دليل), حذف الياء (كسرة قبلها دليل) — e.g. لَمْ يَسْعَ، لَمْ يَدْعُ، لَمْ يُعْطِ.",
            rule:
              "Ends in ا / و / ي — that letter is dropped. The previous vowel remains as evidence (دَلِيل).",
            cases: [
              {
                ar: "حَذْفُ الْأَلِفِ",
                en: "Drop alif → fatḥah left as evidence",
                examples: [{ ar: "يَسْعَى → لَمْ يَسْعَ", en: "strives → did not strive" }],
              },
              {
                ar: "حَذْفُ الْوَاوِ",
                en: "Drop wāw → ḍammah left as evidence",
                examples: [{ ar: "يَدْعُو → لَمْ يَدْعُ", en: "calls → did not call" }],
              },
              {
                ar: "حَذْفُ الْيَاءِ",
                en: "Drop yāʾ → kasrah left as evidence",
                examples: [{ ar: "يُعْطِي → لَمْ يُعْطِ", en: "gives → did not give" }],
              },
            ],
            examples: [
              { ar: "لَمْ يَسْعَ عَلِيٌّ إِلَى الْمَجْدِ", en: "ʿAlī did not pursue glory." },
            ],
          },
          {
            ar: "الْأَفْعَالُ الْخَمْسَةُ",
            en: "The five verbs",
            defAr: "الْأَفْعَالُ الْخَمْسَةُ الَّتِي رَفْعُهَا بِثُبُوتِ النُّونِ — تُجْزَمُ بِحَذْفِهَا.",
            defEn:
              "The five verbs (raised by ثبوت النون) are majzūm by deleting that nūn (لَمْ يَضْرِبُوا) — same mechanism as naṣb.",
            rule: "With a jāzim: same as naṣb — حذف النون.",
            examples: [
              { ar: "لَمْ يَفْعَلَا", en: "they two did not do" },
              { ar: "لَمْ يَفْعَلُوا", en: "they did not do" },
              { ar: "لَمْ تَفْعَلِي", en: "you (f.) did not do" },
            ],
          },
        ],
      },
    ],
  },
];

/** Final summary — فصل المعربات */
export const ALAMAT_MUARABAT_SUMMARY = {
  id: "muarabat",
  tone: "muarab",
  ar: "فَصْلُ الْمُعْرَبَاتِ",
  en: "Summary: Inflectable Words",
  matnAr: "الْمُعْرَبَاتُ قِسْمَانِ: قِسْمٌ يُعْرَبُ بِالْحَرَكَاتِ، وَقِسْمٌ يُعْرَبُ بِالْحُرُوفِ",
  defAr:
    "وَكُلُّهَا تُرْفَعُ بِالضَّمَّةِ، وَتُنْصَبُ بِالْفَتْحَةِ، وَتُخْفَضُ بِالْكَسْرَةِ، وَتُجْزَمُ بِالسُّكُونِ، وَخَرَجَ عَنْ ذَلِكَ ثَلَاثَةُ أَشْيَاءَ.",
  defEn:
    "From the commentary: the inflectable are two groups — by vowels (حركات) and by letters (حروف). The four vowel-inflected types default to ḍammah / fatḥah / kasrah / sukūn; three things go outside that default.",
  lineIndex: 19,
  columns: [
    { key: "type", ar: "النَّوْع", en: "Type" },
    { key: "raf", ar: "الرَّفْع", en: "Rafʿ" },
    { key: "nasb", ar: "النَّصْب", en: "Naṣb" },
    { key: "khafd", ar: "الْخَفْض", en: "Khafḍ" },
    { key: "jazm", ar: "الْجَزْم", en: "Jazm" },
  ],
  byHarakat: {
    titleAr: "مَا يُعْرَبُ بِالْحَرَكَاتِ",
    titleEn: "Inflected by vowels",
    matnAr:
      "فَالَّذِي يُعْرَبُ بِالْحَرَكَاتِ أَرْبَعَةُ أَشْيَاءَ: الِاسْمُ الْمُفْرَدُ، وَجَمْعُ التَّكْسِيرِ، وَجَمْعُ الْمُؤَنَّثِ السَّالِمِ، وَالْفِعْلُ الْمُضَارِعُ الَّذِي لَمْ يَتَّصِلْ بِآخِرِهِ شَيْءٌ.",
    defaultNoteAr:
      "الْأَصْلُ: تُرْفَعُ بِالضَّمَّةِ، وَتُنْصَبُ بِالْفَتْحَةِ، وَتُخْفَضُ بِالْكَسْرَةِ، وَتُجْزَمُ بِالسُّكُونِ.",
    rows: [
      {
        type: "الِاسْمُ الْمُفْرَدُ",
        raf: "الضَّمَّة",
        nasb: "الْفَتْحَة",
        khafd: "الْكَسْرَة",
        jazm: null,
        jazmNa: "لا جزم في الأسماء",
      },
      {
        type: "جَمْعُ التَّكْسِيرِ",
        raf: "الضَّمَّة",
        nasb: "الْفَتْحَة",
        khafd: "الْكَسْرَة",
        jazm: null,
        jazmNa: "لا جزم في الأسماء",
      },
      {
        type: "جَمْعُ الْمُؤَنَّثِ السَّالِمِ",
        raf: "الضَّمَّة",
        nasb: "الْكَسْرَة",
        khafd: "الْكَسْرَة",
        jazm: null,
        jazmNa: "لا جزم في الأسماء",
        exception: {
          caseAr: "النَّصْب",
          caseEn: "naṣb",
          expected: "الْفَتْحَة",
          actual: "الْكَسْرَة",
          matnAr: "جَمْعُ الْمُؤَنَّثِ السَّالِمِ يُنْصَبُ بِالْكَسْرَةِ",
          kind: "sign-swap",
          scopeAr: "اسْتِثْنَاءٌ فِي عَلَامَةِ النَّصْبِ فَقَطْ",
          scopeEn:
            "Not a different word-class — same type as the row above. Only its naṣb sign breaks the default (فتحة → كسرة). Rafʿ and khafḍ stay normal.",
          defEn:
            "Default for vowel-inflected words: naṣb = fatḥah. Exception: sound feminine plural takes kasrah instead (نِيَابَةً عَنِ الْفَتْحَةِ).",
        },
      },
      {
        type: "الْمُضَارِعُ بِلَا اتِّصَالٍ",
        raf: "الضَّمَّة",
        nasb: "الْفَتْحَة",
        khafd: null,
        khafdNa: "لا خفض في الأفعال",
        jazm: "السُّكُون",
        exception: {
          caseAr: "الْجَزْم",
          caseEn: "jazm",
          expected: "السُّكُون",
          actual: "حَذْفُ الْآخِرِ",
          matnAr: "الْمُضَارِعُ الْمُعْتَلُّ الْآخِرِ يُجْزَمُ بِحَذْفِ آخِرِهِ",
          kind: "subtype",
          appliesWhenAr: "إِذَا كَانَ مُعْتَلَّ الْآخِرِ",
          appliesWhenEn: "only when the ending is weak (معتل الآخر)",
          scopeAr: "اسْتِثْنَاءٌ دَاخِلَ الْمُضَارِعِ — لِلْمُعْتَلِّ فَقَطْ",
          scopeEn:
            "Exception inside this type: sound-ending muḍāriʿ still takes sukūn in jazm. Weak-ending muḍāriʿ drops the final حرف علة instead.",
          defEn:
            "Default jazm for muḍāriʿ = sukūn. The exception is only the weak-ending subtype — not every muḍāriʿ.",
        },
      },
    ],
    /** Third exception in the matn — not its own of the four types */
    extraException: {
      type: "الِاسْمُ الَّذِي لَا يَنْصَرِفُ",
      caseAr: "الْخَفْض",
      caseEn: "khafḍ",
      expected: "الْكَسْرَة",
      actual: "الْفَتْحَة",
      matnAr: "الِاسْمُ الَّذِي لَا يَنْصَرِفُ يُخْفَضُ بِالْفَتْحَةِ",
      kind: "condition",
      appliesWhenAr: "عَلَى الْمُفْرَدِ أَوِ التَّكْسِيرِ إِذَا مُنِعَ مِنَ الصَّرْفِ",
      appliesWhenEn:
        "Diptote (ممنوع من الصرف): on a singular or broken plural — خَفْض uses فَتْحَة instead of كَسْرَة (no tanwīn).",
      scopeAr: "لَيْسَ نَوْعًا خَامِسًا — شَرْطٌ عَلَى الْمُفْرَدِ / التَّكْسِيرِ",
      scopeEn:
        "Not a fifth row in the table. Same types as مفرد / تكسير — when the noun is ممنوع من الصرف, khafḍ uses fatḥah instead of kasrah.",
      defEn:
        "Default khafḍ = kasrah. Exception: a diptote takes fatḥah in khafḍ (نِيَابَةً عَنِ الْكَسْرَةِ).",
    },
  },
  byHuruf: {
    titleAr: "مَا يُعْرَبُ بِالْحُرُوفِ",
    titleEn: "Inflected by letters",
    matnAr:
      "وَالَّذِي يُعْرَبُ بِالْحُرُوفِ أَرْبَعَةُ أَنْوَاعٍ: التَّثْنِيَةُ، وَجَمْعُ الْمُذَكَّرِ السَّالِمُ، وَالْأَسْمَاءُ الْخَمْسَةُ، وَالْأَفْعَالُ الْخَمْسَةُ.",
    lettersNoteAr: "حُرُوفُ الْإِعْرَابِ: الْأَلِفُ وَالْوَاوُ وَالْيَاءُ وَالنُّونُ.",
    rows: [
      {
        type: "الْمُثَنَّى",
        raf: "الْأَلِف",
        nasb: "الْيَاء",
        khafd: "الْيَاء",
        jazm: null,
        jazmNa: "لا جزم في الأسماء",
      },
      {
        type: "جَمْعُ الْمُذَكَّرِ السَّالِمِ",
        raf: "الْوَاو",
        nasb: "الْيَاء",
        khafd: "الْيَاء",
        jazm: null,
        jazmNa: "لا جزم في الأسماء",
      },
      {
        type: "الْأَسْمَاءُ الْخَمْسَةُ",
        raf: "الْوَاو",
        nasb: "الْأَلِف",
        khafd: "الْيَاء",
        jazm: null,
        jazmNa: "لا جزم في الأسماء",
      },
      {
        type: "الْأَفْعَالُ الْخَمْسَةُ",
        raf: "ثُبُوتُ النُّونِ",
        nasb: "حَذْفُ النُّونِ",
        khafd: null,
        khafdNa: "لا خفض في الأفعال",
        jazm: "حَذْفُ النُّونِ",
      },
    ],
  },
};

/** Quick memorisation matrix — word type × state (commentary defaults + 3 exceptions) */
export const ALAMAT_QUICK_MATRIX = {
  titleAr: "جَدْوَلُ الْمُرَاجَعَةِ السَّرِيعَةِ",
  titleEn: "Quick recall matrix",
  blurbEn: "Word type × state — ★ marks the three exceptions from the matn.",
  columns: [
    { key: "type", ar: "النَّوْع", en: "Type" },
    { key: "raf", ar: "الرَّفْع", en: "Rafʿ" },
    { key: "nasb", ar: "النَّصْب", en: "Naṣb" },
    { key: "khafd", ar: "الْخَفْض", en: "Khafḍ" },
    { key: "jazm", ar: "الْجَزْم", en: "Jazm" },
  ],
  groups: [
    {
      id: "harakat",
      labelAr: "مَا يُعْرَبُ بِالْحَرَكَاتِ",
      labelEn: "By vowels",
      rows: [
        {
          type: "مُفْرَد / تَكْسِير (مُنْصَرِف)",
          raf: "ضَمَّة",
          nasb: "فَتْحَة",
          khafd: "كَسْرَة",
          jazm: null,
          jazmNa: "لا جزم في الأسماء",
        },
        {
          type: "جَمْعُ مُؤَنَّثٍ سَالِمٍ",
          raf: "ضَمَّة",
          nasb: "كَسْرَة",
          nasbException: true,
          khafd: "كَسْرَة",
          jazm: null,
          jazmNa: "لا جزم في الأسماء",
        },
        {
          type: "مَمْنُوعٌ مِنَ الصَّرْفِ",
          raf: "ضَمَّة",
          nasb: "فَتْحَة",
          khafd: "فَتْحَة",
          khafdException: true,
          jazm: null,
          jazmNa: "لا جزم في الأسماء",
        },
        {
          type: "مُضَارِعٌ صَحِيحٌ بِلَا اتِّصَالٍ",
          raf: "ضَمَّة",
          nasb: "فَتْحَة",
          khafd: null,
          khafdNa: "لا خفض في الأفعال",
          jazm: "سُكُون",
        },
        {
          type: "مُضَارِعٌ مُعْتَلُّ الْآخِرِ",
          raf: "ضَمَّةٌ مُقَدَّرَةٌ",
          nasb: "فَتْحَةٌ مُقَدَّرَةٌ / ظَاهِرَةٌ",
          khafd: null,
          khafdNa: "لا خفض في الأفعال",
          jazm: "حَذْفُ حَرْفِ الْعِلَّةِ",
          jazmException: true,
        },
      ],
    },
    {
      id: "huruf",
      labelAr: "مَا يُعْرَبُ بِالْحُرُوفِ",
      labelEn: "By letters",
      rows: [
        {
          type: "مُثَنَّى",
          raf: "أَلِف",
          nasb: "يَاء",
          khafd: "يَاء",
          jazm: null,
          jazmNa: "لا جزم في الأسماء",
        },
        {
          type: "جَمْعُ مُذَكَّرٍ سَالِمٍ",
          raf: "وَاو",
          nasb: "يَاء",
          khafd: "يَاء",
          jazm: null,
          jazmNa: "لا جزم في الأسماء",
        },
        {
          type: "الْأَسْمَاءُ الْخَمْسَةُ",
          raf: "وَاو",
          nasb: "أَلِف",
          khafd: "يَاء",
          jazm: null,
          jazmNa: "لا جزم في الأسماء",
        },
        {
          type: "الْأَفْعَالُ الْخَمْسَةُ",
          raf: "ثُبُوتُ النُّونِ",
          nasb: "حَذْفُ النُّونِ",
          khafd: null,
          khafdNa: "لا خفض في الأفعال",
          jazm: "حَذْفُ النُّونِ",
        },
      ],
    },
  ],
};

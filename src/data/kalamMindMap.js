/**
 * Mind map for أَنْوَاعُ الْكَلَامِ — from Tuḥfat commentary
 * (kalam.js, kalamTypes.js, alamatIsm/Fail/Harf).
 */

export const KALAM_MINDMAP_META = {
  titleAr: "أَنْوَاعُ الْكَلَامِ",
  titleEn: "Mind Map: Types of Speech",
  subtitle:
    "Definition of kalām, the three word-types, and the signs that tell them apart — all from the commentary.",
  chapterId: "kalam",
  defAr:
    "الْكَلَامُ هُوَ اللَّفْظُ الْمُرَكَّبُ الْمُفِيدُ بِالْوَضْعِ — ثُمَّ أَقْسَامُ الْكَلِمَةِ ثَلَاثَةٌ: اسْمٌ، وَفِعْلٌ، وَحَرْفٌ جَاءَ لِمَعْنًى.",
  defEn:
    "Speech (nahwī) is the beneficial compound utterance established in Arabic. Its building-blocks — the words — are three: noun, verb, and particle that brings a meaning.",
  noteAr:
    "تَقْسِيمُ (اسْمٍ وَفِعْلٍ وَحَرْفٍ) لِلْكَلِمَةِ لَا لِلْكَلَامِ.",
  noteEn:
    "The three-way split is of the word (كلمة), not of speech (كلام) as a whole.",
};

export const KALAM_BRANCHES_OVERVIEW = [
  {
    id: "taarif",
    ar: "تَعْرِيفُ الْكَلَامِ",
    en: "Definition of speech",
    count: "4 conditions",
    tone: "taarif",
  },
  {
    id: "ism",
    ar: "الِاسْمُ",
    en: "The noun",
    count: "def + 4 signs",
    tone: "ism",
  },
  {
    id: "fiil",
    ar: "الْفِعْلُ",
    en: "The verb",
    count: "3 tenses + 4 signs",
    tone: "fiil",
  },
  {
    id: "harf",
    ar: "الْحَرْفُ",
    en: "The particle",
    count: "def + by elimination",
    tone: "harf",
  },
];

export const KALAM_MINDMAP = [
  {
    id: "taarif",
    tone: "taarif",
    ar: "تَعْرِيفُ الْكَلَامِ",
    en: "Definition of Speech",
    intro:
      "Kalām has a linguistic sense and a grammatical sense. Nahwī speech needs four conditions together.",
    lineIndex: 0,
    matnAr: "الْكَلَامُ هُوَ اللَّفْظُ الْمُرَكَّبُ الْمُفِيدُ بِالْوَضْعِ",
    defAr:
      "لِلْكَلَامِ مَعْنَيَانِ: لُغَوِيٌّ وَنَحَوِيٌّ. وَالنَّحَوِيُّ لَا بُدَّ فِيهِ مِنْ أَرْبَعَةِ أُمُورٍ.",
    defEn:
      "Speech has two meanings: linguistic and grammatical. Grammatical speech must gather four traits.",
    langAr: "عِبَارَةٌ عَمَّا تَحْصُلُ بِسَبَبِهِ فَائِدَةٌ — لَفْظًا أَوْ غَيْرَهُ كَالْخَطِّ وَالْإِشَارَةِ",
    istilahAr: "اللَّفْظُ الْمُرَكَّبُ الْمُفِيدُ بِالْوَضْعِ الْعَرَبِيِّ",
    topics: [
      {
        id: "lughawi",
        ar: "الْكَلَامُ اللُّغَوِيُّ",
        en: "Linguistic sense",
        kind: "def",
        lineIndex: 0,
        matnAr: null,
        defAr:
          "عِبَارَةٌ عَمَّا تَحْصُلُ بِسَبَبِهِ فَائِدَةٌ، سَوَاءٌ أَكَانَ لَفْظًا أَمْ لَمْ يَكُنْ، كَالْخَطِّ وَالْكِتَابَةِ وَالْإِشَارَةِ.",
        defEn:
          "Any expression that yields benefit — spoken or not: writing, script, or gesticulation.",
        memorize: "فائدة بأي وسيلة",
        leaves: [
          {
            ar: "اللَّفْظُ",
            en: "Utterance",
            defAr: "صَوْتٌ مُشْتَمِلٌ عَلَى حُرُوفٍ — وَهُوَ أَيْضًا مِنَ اللُّغَوِيِّ.",
            defEn: "Sound made of letters — one form of linguistic speech.",
            examples: [
              { ar: "أَحْمَدُ", en: "Aḥmad" },
              { ar: "يَكْتُبُ", en: "he writes" },
            ],
          },
          {
            ar: "غَيْرُ اللَّفْظِ",
            en: "Non-verbal",
            defAr: "الْخَطُّ وَالْكِتَابَةُ وَالْإِشَارَةُ — كَلَامٌ لُغَوِيٌّ لَا نَحَوِيٌّ.",
            defEn: "Writing and gesture count as linguistic speech, not nahwī speech.",
            examples: [
              { ar: "إِشَارَةٌ", en: "gesture" },
              { ar: "كِتَابَةٌ", en: "writing" },
            ],
          },
        ],
      },
      {
        id: "nahwi",
        ar: "الْكَلَامُ النَّحَوِيُّ",
        en: "Grammatical sense",
        kind: "def",
        lineIndex: 0,
        matnAr: "اللَّفْظُ الْمُرَكَّبُ الْمُفِيدُ بِالْوَضْعِ",
        defAr: "لَا بُدَّ أَنْ يَجْتَمِعَ فِيهِ أَرْبَعَةُ أُمُورٍ.",
        defEn: "Four conditions must all be present.",
        memorize: "لفظ · مركّب · مفيد · وضع عربي",
        leaves: [
          {
            ar: "١ — لَفْظٌ",
            en: "Utterance",
            defAr:
              "صَوْتٌ مُشْتَمِلٌ عَلَى بَعْضِ الْحُرُوفِ الْهِجَائِيَّةِ. الْإِشَارَةُ لَيْسَتْ كَلَامًا عِنْدَ النُّحَاةِ.",
            defEn:
              "Oral sound from the alphabet. Gesture is not speech for the grammarians.",
            examples: [
              { ar: "أَحْمَدُ", en: "Aḥmad" },
              { ar: "سَعِيدٌ", en: "Saʿīd" },
            ],
          },
          {
            ar: "٢ — مُرَكَّبٌ",
            en: "Compound",
            defAr:
              "مُؤَلَّفٌ مِنْ كَلِمَتَيْنِ فَأَكْثَرَ — حَقِيقَةً أَوْ تَقْدِيرًا (نَحْوُ: مُحَمَّدٌ ← مُحَمَّدٌ أَخِي).",
            defEn:
              "Two or more words — actually joined, or implied (reply «Muḥammad» = «Muḥammad is my brother»).",
            examples: [
              { ar: "مُحَمَّدٌ مُسَافِرٌ", en: "Muḥammad is travelling" },
              { ar: "الْعِلْمُ نَافِعٌ", en: "Knowledge is beneficial" },
            ],
          },
          {
            ar: "٣ — مُفِيدٌ",
            en: "Beneficial / complete",
            defAr:
              "يَحْسُنُ سُكُوتُ الْمُتَكَلِّمِ عَلَيْهِ — لَا يَبْقَى السَّامِعُ مُنْتَظِرًا.",
            defEn:
              "The speaker can stop; the listener is not left waiting for more.",
            examples: [
              {
                ar: "إِذَا حَضَرَ الْأُسْتَاذُ ✗",
                en: "incomplete — listener waits",
              },
              {
                ar: "إِذَا حَضَرَ الْأُسْتَاذُ أَنْصَتَ التَّلَامِيذُ ✓",
                en: "complete speech",
              },
            ],
          },
          {
            ar: "٤ — بِالْوَضْعِ الْعَرَبِيِّ",
            en: "Arabic lexicon",
            defAr:
              "أَلْفَاظٌ وَضَعَتْهَا الْعَرَبُ لِمَعَانِيهَا — لَا فَارِسِيَّةَ وَلَا تُرْكِيَّةَ وَنَحْوَهَا.",
            defEn:
              "Words the Arabs coined for meanings — not Persian, Turkish, etc.",
            examples: [
              { ar: "حَضَرَ مُحَمَّدٌ", en: "Arabic — counts as speech" },
              { ar: "غَيْرُ عَرَبِيٍّ", en: "other languages — not nahwī kalām" },
            ],
          },
        ],
      },
    ],
  },

  {
    id: "ism",
    tone: "ism",
    ar: "الِاسْمُ",
    en: "The Noun",
    intro: "Defined linguistically and grammatically, then recognised by four signs.",
    lineIndex: 1,
    matnAr: "أَقْسَامُهُ ثَلَاثَةٌ: اسْمٌ، وَفِعْلٌ، وَحَرْفٌ…",
    defAr: "كَلِمَةٌ دَلَّتْ عَلَى مَعْنًى فِي نَفْسِهَا، وَلَمْ تَقْتَرِنْ بِزَمَانٍ.",
    defEn:
      "A word that indicates a meaning in itself and is not linked to a tense.",
    langAr: "مَا دَلَّ عَلَى مُسَمًّى",
    istilahAr: "كَلِمَةٌ دَلَّتْ عَلَى مَعْنًى فِي نَفْسِهَا وَلَمْ تَقْتَرِنْ بِزَمَانٍ",
    topics: [
      {
        id: "ism-def",
        ar: "تَعْرِيفُ الِاسْمِ",
        en: "Definition",
        kind: "def",
        lineIndex: 1,
        defAr: "لُغَةً: مَا دَلَّ عَلَى مُسَمًّى. اصْطِلَاحًا: مَعْنًى فِي نَفْسِهَا بِلَا زَمَانٍ.",
        defEn:
          "Linguistically: that which points to a named thing. Terminologically: meaning in itself, no tense.",
        memorize: "معنى في نفسها · لا زمان",
        leaves: [
          {
            ar: "لُغَةً",
            en: "Linguistic",
            defAr: "مَا دَلَّ عَلَى مُسَمًّى.",
            defEn: "That which indicates something named.",
            examples: [],
          },
          {
            ar: "اصْطِلَاحًا",
            en: "Technical",
            defAr: "كَلِمَةٌ دَلَّتْ عَلَى مَعْنًى فِي نَفْسِهَا، وَلَمْ تَقْتَرِنْ بِزَمَانٍ.",
            defEn: "Meaning in itself; not tied to past / present / future.",
            examples: [
              { ar: "مُحَمَّدٌ", en: "Muḥammad" },
              { ar: "رَجُلٌ", en: "a man" },
              { ar: "نَهْرٌ", en: "a river" },
              { ar: "تُفَّاحَةٌ", en: "an apple" },
            ],
          },
        ],
      },
      {
        id: "ism-signs",
        ar: "عَلَامَاتُ الِاسْمِ",
        en: "Recognition signs",
        kind: "sign",
        lineIndex: 2,
        matnAr:
          "فَالِاسْمُ يُعْرَفُ: بِالْخَفْضِ، وَالتَّنْوِينِ، وَدُخُولِ الْأَلِفِ وَاللَّامِ، وَحُرُوفِ الْخَفْضِ…",
        defAr:
          "أَرْبَعُ عَلَامَاتٍ يَتَمَيَّزُ بِهَا عَنِ الْفِعْلِ وَالْحَرْفِ: الْخَفْضُ، وَالتَّنْوِينُ، وَأَلْ، وَحُرُوفُ الْخَفْضِ.",
        defEn:
          "Four signs distinguish the noun: khafḍ, tanwīn, al-, and particles of khafḍ (including oath particles).",
        memorize: "خفض · تنوين · أل · حروف خفض",
        leaves: [
          {
            ar: "الْخَفْضُ",
            en: "Khafḍ (jarr)",
            defAr:
              "الْكَسْرَةُ الَّتِي يُحْدِثُهَا الْعَامِلُ أَوْ مَا نَابَ عَنْهَا.",
            defEn: "The kasrah (or its stand-in) brought by a governor.",
            examples: [
              { ar: "مَرَرْتُ بِبَكْرٍ", en: "I passed by Bakr" },
              { ar: "كِتَابُ عَمْرٍو", en: "ʿAmr’s book" },
            ],
          },
          {
            ar: "التَّنْوِينُ",
            en: "Tanwīn",
            defAr:
              "نُونٌ سَاكِنَةٌ تَتْبَعُ آخِرَ الِاسْمِ لَفْظًا وَتُفَارِقُهُ خَطًّا.",
            defEn: "A silent nūn sound after the noun, written as doubled vowel marks.",
            examples: [
              { ar: "مُحَمَّدٍ", en: "Muḥammadin" },
              { ar: "كِتَابٍ", en: "a book" },
            ],
          },
          {
            ar: "الْأَلِفُ وَاللَّامُ",
            en: "al- (definite article)",
            defAr: "دُخُولُ (أَلْ) فِي أَوَّلِ الْكَلِمَةِ.",
            defEn: "Entry of al- at the start of the word.",
            examples: [
              { ar: "الرَّجُلُ", en: "the man" },
              { ar: "الْكِتَابُ", en: "the book" },
            ],
          },
          {
            ar: "حُرُوفُ الْخَفْضِ",
            en: "Particles of khafḍ",
            defAr:
              "مِنْ، إِلَى، عَنْ، عَلَى، فِي، رُبَّ، الْبَاءُ، الْكَافُ، اللَّامُ — وَحُرُوفُ الْقَسَمِ: الْوَاوُ وَالْبَاءُ وَالتَّاءُ.",
            defEn:
              "min, ilā, ʿan, ʿalā, fī, rubba, bi-, ka-, li-; and oath particles: wa-, bi-, ta-.",
            examples: [
              { ar: "ذَهَبْتُ مِنَ الْبَيْتِ", en: "I went from the house" },
              { ar: "وَاللَّهِ", en: "by Allāh (oath)" },
            ],
          },
        ],
      },
    ],
  },

  {
    id: "fiil",
    tone: "fiil",
    ar: "الْفِعْلُ",
    en: "The Verb",
    intro: "Meaning in itself + tense. Three kinds, four recognition signs.",
    lineIndex: 1,
    matnAr: "وَأَقْسَامُهُ ثَلَاثَةٌ: اسْمٌ، وَفِعْلٌ، وَحَرْفٌ…",
    defAr:
      "كَلِمَةٌ دَلَّتْ عَلَى مَعْنًى فِي نَفْسِهَا، وَاقْتَرَنَتْ بِأَحَدِ الْأَزْمِنَةِ الثَّلَاثَةِ.",
    defEn:
      "A word that indicates a meaning in itself and is linked to one of the three tenses.",
    langAr: "الْحَدَثُ",
    istilahAr: "مَعْنًى فِي نَفْسِهَا مَعَ زَمَانٍ",
    topics: [
      {
        id: "fiil-def",
        ar: "تَعْرِيفُ الْفِعْلِ",
        en: "Definition",
        kind: "def",
        lineIndex: 1,
        defAr: "لُغَةً: الْحَدَثُ. اصْطِلَاحًا: مَعْنًى فِي نَفْسِهَا مَعَ زَمَانٍ.",
        defEn: "Linguistically: an occurrence. Technically: meaning in itself + a tense.",
        memorize: "معنى + زمان",
        leaves: [
          {
            ar: "لُغَةً",
            en: "Linguistic",
            defAr: "الْحَدَثُ.",
            defEn: "An occurrence / event.",
            examples: [],
          },
          {
            ar: "اصْطِلَاحًا",
            en: "Technical",
            defAr:
              "كَلِمَةٌ دَلَّتْ عَلَى مَعْنًى فِي نَفْسِهَا وَاقْتَرَنَتْ بِالْمَاضِي أَوِ الْحَالِ أَوِ الْمُسْتَقْبَلِ.",
            defEn: "Meaning in itself, joined to past, present, or future.",
            examples: [
              { ar: "كَتَبَ", en: "he wrote (past)" },
              { ar: "يَكْتُبُ", en: "he writes (present/future)" },
              { ar: "اكْتُبْ", en: "write! (command)" },
            ],
          },
        ],
      },
      {
        id: "fiil-types",
        ar: "أَنْوَاعُ الْفِعْلِ",
        en: "Three kinds",
        kind: "type",
        lineIndex: 1,
        matnAr: "وَالْفِعْلُ عَلَى ثَلَاثَةِ أَنْوَاعٍ: مَاضٍ وَمُضَارِعٌ وَأَمْرٌ",
        defAr: "مَاضٍ · مُضَارِعٌ · أَمْرٌ.",
        defEn: "Māḍī, muḍāriʿ, and amr.",
        memorize: "ماض · مضارع · أمر",
        leaves: [
          {
            ar: "الْمَاضِي",
            en: "Past (māḍī)",
            defAr: "مَا دَلَّ عَلَى حَدَثٍ وَقَعَ قَبْلَ زَمَانِ التَّكَلُّمِ.",
            defEn: "An event that took place before the moment of speaking.",
            examples: [
              { ar: "كَتَبَ", en: "he wrote" },
              { ar: "فَهِمَ", en: "he understood" },
              { ar: "خَرَجَ", en: "he left" },
            ],
          },
          {
            ar: "الْمُضَارِعُ",
            en: "Present/future (muḍāriʿ)",
            defAr: "مَا دَلَّ عَلَى حَدَثٍ يَقَعُ فِي زَمَانِ التَّكَلُّمِ أَوْ بَعْدَهُ.",
            defEn: "An event during or after the moment of speaking.",
            examples: [
              { ar: "يَكْتُبُ", en: "he writes" },
              { ar: "يَفْهَمُ", en: "he understands" },
              { ar: "يَخْرُجُ", en: "he leaves" },
            ],
          },
          {
            ar: "الْأَمْرُ",
            en: "Command (amr)",
            defAr: "مَا دَلَّ عَلَى حَدَثٍ يُطْلَبُ حُصُولُهُ بَعْدَ زَمَانِ التَّكَلُّمِ.",
            defEn: "A request that the action occur after the moment of speaking.",
            examples: [
              { ar: "اكْتُبْ", en: "write!" },
              { ar: "افْهَمْ", en: "understand!" },
              { ar: "اخْرُجْ", en: "leave!" },
            ],
          },
        ],
      },
      {
        id: "fiil-signs",
        ar: "عَلَامَاتُ الْفِعْلِ",
        en: "Recognition signs",
        kind: "sign",
        lineIndex: 5,
        matnAr: "وَالْفِعْلُ يُعْرَفُ: بِقَدْ، وَالسِّينِ، وَسَوْفَ، وَتَاءِ التَّأْنِيثِ السَّاكِنَةِ",
        defAr: "أَرْبَعُ عَلَامَاتٍ: قَدْ، السِّينُ، سَوْفَ، تَاءُ التَّأْنِيثِ السَّاكِنَةُ.",
        defEn: "Four signs: qad, sīn, sawfa, and the sākin feminine tāʾ.",
        memorize: "قد · س · سوف · تْ",
        leaves: [
          {
            ar: "قَدْ",
            en: "qad",
            defAr:
              "تَدْخُلُ عَلَى الْمَاضِي (تَحْقِيقٌ / تَقْرِيبٌ) وَعَلَى الْمُضَارِعِ (تَقْلِيلٌ / تَكْثِيرٌ).",
            defEn:
              "On māḍī: confirmation or nearness. On muḍāriʿ: rarity or frequency.",
            examples: [
              { ar: "قَدْ أَفْلَحَ", en: "indeed succeeded" },
              { ar: "قَدْ يَصْدُقُ الْكَذُوبُ", en: "the liar may sometimes tell truth" },
            ],
          },
          {
            ar: "السِّينُ",
            en: "sīn (near future)",
            defAr: "تَدْخُلُ عَلَى الْمُضَارِعِ وَحْدَهُ — تَنْفِيسٌ أَقْرَبُ مِنْ سَوْفَ.",
            defEn: "Only on muḍāriʿ — nearer futurity than sawfa.",
            examples: [{ ar: "سَيَكْتُبُ", en: "he will (soon) write" }],
          },
          {
            ar: "سَوْفَ",
            en: "sawfa (farther future)",
            defAr: "تَدْخُلُ عَلَى الْمُضَارِعِ وَحْدَهُ — تَنْفِيسٌ أَبْعَدُ مِنَ السِّينِ.",
            defEn: "Only on muḍāriʿ — farther futurity than sīn.",
            examples: [{ ar: "سَوْفَ يَكْتُبُ", en: "he will (later) write" }],
          },
          {
            ar: "تَاءُ التَّأْنِيثِ السَّاكِنَةُ",
            en: "Sākin feminine tāʾ",
            defAr: "تَلْحَقُ آخِرَ الْمَاضِي — عَلَامَةٌ خَاصَّةٌ بِالْفِعْلِ.",
            defEn: "Attaches to the end of the māḍī — a verb-only sign.",
            examples: [
              { ar: "كَتَبَتْ", en: "she wrote" },
              { ar: "فَهِمَتْ", en: "she understood" },
            ],
          },
        ],
      },
    ],
  },

  {
    id: "harf",
    tone: "harf",
    ar: "الْحَرْفُ",
    en: "The Particle",
    intro: "Meaning in something else — recognised by accepting neither noun nor verb signs.",
    lineIndex: 1,
    matnAr: "وَحَرْفٌ جَاءَ لِمَعْنًى",
    defAr: "كَلِمَةٌ دَلَّتْ عَلَى مَعْنًى فِي غَيْرِهَا.",
    defEn: "A word that indicates a meaning in something else.",
    langAr: "الطَّرَفُ",
    istilahAr: "كَلِمَةٌ دَلَّتْ عَلَى مَعْنًى فِي غَيْرِهَا",
    topics: [
      {
        id: "harf-def",
        ar: "تَعْرِيفُ الْحَرْفِ",
        en: "Definition",
        kind: "def",
        lineIndex: 1,
        defAr: "لُغَةً: الطَّرَفُ. اصْطِلَاحًا: مَعْنًى فِي غَيْرِهَا.",
        defEn: "Linguistically: ‘the side’. Technically: meaning completed in another word.",
        memorize: "معنى في غيرها",
        leaves: [
          {
            ar: "لُغَةً",
            en: "Linguistic",
            defAr: "الطَّرَفُ.",
            defEn: "The side / edge.",
            examples: [],
          },
          {
            ar: "اصْطِلَاحًا",
            en: "Technical",
            defAr:
              "كَلِمَةٌ دَلَّتْ عَلَى مَعْنًى فِي غَيْرِهَا — نَحْوُ (مِنْ) لِلِابْتِدَاءِ فِي (ذَهَبْتُ مِنَ الْبَيْتِ).",
            defEn:
              "Meaning in another word — e.g. min for ‘beginning from’ in «I went from the house».",
            examples: [
              { ar: "مِنْ", en: "from" },
              { ar: "إِلَى", en: "to" },
              { ar: "فِي", en: "in" },
              { ar: "لَمْ", en: "did not" },
            ],
          },
        ],
      },
      {
        id: "harf-sign",
        ar: "عَلَامَةُ الْحَرْفِ",
        en: "How you know it",
        kind: "sign",
        lineIndex: 6,
        matnAr: "وَالْحَرْفُ مَا لَا يَصْلُحُ مَعَهُ دَلِيلُ الِاسْمِ وَلَا دَلِيلُ الْفِعْلِ",
        defAr:
          "لَا يَقْبَلُ عَلَامَاتِ الِاسْمِ وَلَا عَلَامَاتِ الْفِعْلِ — يُعْرَفُ بِالِاسْتِثْنَاءِ.",
        defEn:
          "Accepts neither noun signs nor verb signs — recognised by elimination.",
        memorize: "لا دليل اسم · لا دليل فعل",
        leaves: [
          {
            ar: "لَا عَلَامَاتِ الِاسْمِ",
            en: "No noun signs",
            defAr: "لَا أَلْ، وَلَا تَنْوِينَ، وَلَا حَرْفَ خَفْضٍ عَلَيْهِ.",
            defEn: "No al-, no tanwīn, no particle of khafḍ upon it.",
            examples: [
              { ar: "✗ الْمِنْ", en: "not said" },
              { ar: "✗ مِنٌ", en: "not said" },
            ],
          },
          {
            ar: "لَا عَلَامَاتِ الْفِعْلِ",
            en: "No verb signs",
            defAr: "لَا قَدْ، وَلَا سِينَ، وَلَا سَوْفَ، وَلَا تَاءَ تَأْنِيثٍ.",
            defEn: "No qad, sīn, sawfa, or feminine tāʾ.",
            examples: [{ ar: "مِنْ · هَلْ · لَمْ", en: "particles" }],
          },
          {
            ar: "ثَلَاثَةُ أَنْوَاعٍ",
            en: "Three kinds (footnote)",
            defAr:
              "خَاصٌّ بِالِاسْمِ (مِنْ) · مُشْتَرَكٌ (هَلْ) · خَاصٌّ بِالْفِعْلِ (لَمْ).",
            defEn:
              "Specific to nouns (min); shared (hal); specific to verbs (lam).",
            examples: [
              { ar: "مِنْ", en: "noun-specific" },
              { ar: "هَلْ", en: "shared" },
              { ar: "لَمْ", en: "verb-specific" },
            ],
          },
        ],
      },
    ],
  },
];

/** Compact recall: type × definition × signs */
export const KALAM_QUICK_MATRIX = {
  titleAr: "جَدْوَلُ الْمُرَاجَعَةِ",
  titleEn: "Quick recall",
  blurbEn: "Three word-types — definition and how you recognise each.",
  rows: [
    {
      type: "الِاسْمُ",
      def: "مَعْنًى فِي نَفْسِهَا · بِلَا زَمَانٍ",
      signs: "خَفْض · تَنْوِين · أَلْ · حُرُوفُ خَفْضٍ",
    },
    {
      type: "الْفِعْلُ",
      def: "مَعْنًى فِي نَفْسِهَا · مَعَ زَمَانٍ",
      signs: "قَدْ · س · سَوْفَ · تَاءُ تَأْنِيثٍ",
      extra: "أَنْوَاعُهُ: مَاضٍ · مُضَارِعٌ · أَمْرٌ",
    },
    {
      type: "الْحَرْفُ",
      def: "مَعْنًى فِي غَيْرِهَا",
      signs: "لَا دَلِيلَ اسْمٍ وَلَا دَلِيلَ فِعْلٍ",
    },
  ],
};

/**
 * Detailed mind map for بَابُ مَرْفُوعَاتِ الْأَسْمَاءِ —
 * definitions, rules, kinds, and examples from Tuḥfat
 * (marfuat.js + fail / naibFail / mubtadaKhabar / awamilMubtada).
 */

export const MARFUAT_MINDMAP_META = {
  titleAr: "بَابُ مَرْفُوعَاتِ الْأَسْمَاءِ",
  titleEn: "Mind Map: Nominative Nouns",
  subtitle:
    "Seven marfūʿ positions — every definition, rule, kind, and key example from the commentary, for memorisation.",
  chapterId: "marfuat",
  defAr:
    "الْمَرْفُوعَاتُ سَبْعَةٌ: الْفَاعِلُ، وَالْمَفْعُولُ الَّذِي لَمْ يُسَمَّ فَاعِلُهُ، وَالْمُبْتَدَأُ، وَخَبَرُهُ، وَاسْمُ كَانَ وَأَخَوَاتِهَا، وَخَبَرُ إِنَّ وَأَخَوَاتِهَا، وَالتَّابِعُ لِلْمَرْفُوعِ.",
  defEn:
    "The marfūʿ nouns are seven: fāʿil; nāʾib al-fāʿil; mubtadaʾ; its khabar; ism of kāna & sisters; khabar of inna & sisters; and the follower of a marfūʿ (naʿt, ʿaṭf, tawkīd, badal).",
  noteAr:
    "الِاسْمُ الْمُعْرَبُ فِي ثَلَاثَةِ مَوَاقِعَ: رَفْعٍ وَنَصْبٍ وَخَفْضٍ — وَبُدِئَ بِالْمَرْفُوعَاتِ لِأَنَّهَا الْأَشْرَفُ.",
  noteEn:
    "An inflectable noun has three positions. The author starts with marfūʿāt because they are the most distinguished (الأشرف).",
};

export const MARFUAT_BRANCHES_OVERVIEW = [
  { id: "fail", ar: "١ الْفَاعِلُ", en: "Fāʿil", tone: "fail", count: "root of marfūʿāt" },
  { id: "naib", ar: "٢ نَائِبُ الْفَاعِلِ", en: "Nāʾib", tone: "naib", count: "passive subject" },
  { id: "mubtada", ar: "٣ الْمُبْتَدَأُ", en: "Mubtadaʾ", tone: "mubtada", count: "3 conditions" },
  { id: "khabar", ar: "٤ الْخَبَرُ", en: "Khabar", tone: "khabar", count: "5 kinds" },
  { id: "ism-kana", ar: "٥ اسْمُ كَانَ", en: "Ism kāna", tone: "ismkana", count: "13 verbs" },
  { id: "khabar-inna", ar: "٦ خَبَرُ إِنَّ", en: "Khabar inna", tone: "khabarinna", count: "6 particles" },
  { id: "tabi", ar: "٧ التَّابِعُ", en: "Tābiʿ", tone: "tabi", count: "4 followers" },
];

const EX = (ar, en) => ({ ar, en });

export const MARFUAT_MINDMAP = [
  /* ── 1. الفاعل ─────────────────────────────────────────── */
  {
    id: "fail",
    tone: "fail",
    ar: "الْفَاعِلُ",
    en: "The Subject (Fāʿil)",
    num: "١",
    intro: "Root of the marfūʿāt — a marfūʿ noun preceded by its own verb (or verb-like word).",
    lineIndex: 0,
    studyChapter: "fail",
    matnAr: "الْفَاعِلُ هُوَ: الِاسْمُ الْمَرْفُوعُ الْمَذْكُورُ قَبْلَهُ فِعْلُهُ",
    defAr: "الِاسْمُ الْمَرْفُوعُ الْمَذْكُورُ قَبْلَهُ فِعْلُهُ.",
    defEn: "The marfūʿ noun that is preceded by the verb it applies to.",
    langAr: "مَنْ أَوْجَدَ الْفِعْلَ",
    istilahAr: "الِاسْمُ الْمَرْفُوعُ الْمَذْكُورُ قَبْلَهُ فِعْلُهُ",
    topics: [
      {
        id: "fail-def",
        ar: "التَّعْرِيفُ وَقُيُودُهُ",
        en: "Definition & constraints",
        kind: "def",
        lineIndex: 0,
        studyChapter: "fail",
        matnAr: "الِاسْمُ الْمَرْفُوعُ الْمَذْكُورُ قَبْلَهُ فِعْلُهُ",
        defAr: "ثَلَاثُ قُيُودٍ فِي التَّعْرِيفِ تُخْرِجُ غَيْرَهُ.",
        defEn: "Three constraints in the definition exclude other roles.",
        memorize: "اسم · مرفوع · قبله فعله",
        leaves: [
          {
            ar: "«الِاسْمُ»",
            en: "Must be a noun",
            defAr: "يُخْرِجُ الْفِعْلَ وَالْحَرْفَ — وَيَشْمَلُ الصَّرِيحَ وَالْمُؤَوَّلَ.",
            defEn: "Excludes verb and particle. Includes explicit and paraphrased nouns.",
            examples: [EX("قَالَ نُوحٌ", "explicit"), EX("يَسُرُّنِي أَنْ تَتَمَسَّكَ", "muʾawwal ≈ تمسّكك")],
          },
          {
            ar: "«الْمَرْفُوعُ»",
            en: "Must be marfūʿ",
            defAr: "يُخْرِجُ الْمَنْصُوبَ وَالْمَجْرُورَ.",
            defEn: "Excludes manṣūb and majrūr.",
            examples: [EX("حَضَرَ عَلِيٌّ", "Ali — marfūʿ fāʿil")],
          },
          {
            ar: "«قَبْلَهُ فِعْلُهُ»",
            en: "Preceded by its verb",
            defAr:
              "يُخْرِجُ الْمُبْتَدَأَ وَاسْمَ إِنَّ، وَاسْمَ كَانَ/كَادَ (فِعْلُهُمَا لَيْسَ فِعْلَهُمَا). وَيَشْمَلُ شِبْهَ الْفِعْلِ.",
            defEn:
              "Excludes mubtadaʾ, ism inna, ism kāna/kāda. Includes verb-like words (ism fiʿl, ism fāʿil).",
            examples: [
              EX("هَيْهَاتَ الْعَقِيقُ", "ism fiʿl + fāʿil"),
              EX("أَقَادِمٌ أَبُوكَ", "ism fāʿil + fāʿil"),
            ],
          },
        ],
      },
      {
        id: "fail-types",
        ar: "أَقْسَامُهُ: ظَاهِرٌ وَمُضْمَرٌ",
        en: "Kinds: apparent & pronoun",
        kind: "type",
        lineIndex: 1,
        studyChapter: "fail",
        matnAr: "وَهُوَ عَلَى قِسْمَيْنِ: ظَاهِرٌ، وَمُضْمَرٌ",
        defAr: "الظَّاهِرُ بِلَا قَرِينَةٍ · الْمُضْمَرُ بِقَرِينَةِ تَكَلُّمٍ أَوْ خِطَابٍ أَوْ غَيْبَةٍ.",
        defEn: "Apparent needs no clue; pronoun needs 1st/2nd/3rd-person context.",
        memorize: "ظاهر · مضمر (١٢)",
        leaves: [
          {
            ar: "الظَّاهِرُ — ٨ أَنْوَاعٍ",
            en: "Apparent — 8 shapes",
            defAr:
              "مُفْرَد / مُثَنًّى / جَمْعٌ سَالِمٌ / تَكْسِيرٌ × مُذَكَّر / مُؤَنَّث — مَعَ مَاضٍ أَوْ مُضَارِعٍ.",
            defEn: "Singular/dual/sound/broken × masc/fem — with māḍī or muḍāriʿ.",
            examples: [
              EX("سَافَرَ مُحَمَّدٌ", "sing. masc."),
              EX("حَضَرَ الصَّدِيقَانِ", "dual"),
              EX("حَجَّ الْمُسْلِمُونَ", "sound pl."),
              EX("حَضَرَ الْأَصْدِقَاءُ", "broken pl."),
              EX("قَامَتْ هِنْدٌ", "fem."),
            ],
          },
          {
            ar: "عَلَامَةُ الرَّفْعِ",
            en: "Sign of rafʿ",
            defAr: "ضَمَّةٌ ظَاهِرَةٌ، أَوْ مُقَدَّرَةٌ، أَوْ حَرْفٌ نَائِبٌ عَنِ الضَّمَّةِ.",
            defEn: "Explicit ḍammah, implied ḍammah, or a letter standing in for it.",
            examples: [
              EX("قَامَ زَيْدٌ", "ḍammah ẓāhira"),
              EX("قَامَ أَخُوكَ", "wāw — five nouns"),
              EX("قَامَ غُلَامِي", "implied — yāʾ mutakallim"),
            ],
          },
          {
            ar: "الْمُضْمَرُ — ١٢",
            en: "Pronoun — 12 forms",
            defAr:
              "مُتَكَلِّمَانِ + ٥ مُخَاطَب + ٥ غَائِب — مُتَّصِلٌ أَوْ مُنْفَصِلٌ.",
            defEn: "2 first-person + 5 second + 5 third — attached or detached.",
            examples: [
              EX("قُمْتُ / قُمْنَا", "mutakallim"),
              EX("قُمْتَ · قُمْتِ · قُمْتُمَا · قُمْتُمْ · قُمْتُنَّ", "mukhāṭab"),
              EX("قَامَ · قَامَتْ · قَامَا · قَامُوا · قُمْنَ", "ghāʾib"),
            ],
          },
        ],
      },
      {
        id: "fail-ex",
        ar: "أَمْثِلَةُ الْبَابِ",
        en: "Chapter examples",
        kind: "example",
        lineIndex: 0,
        studyChapter: "marfuat",
        defAr: "مِنْ بَابِ الْمَرْفُوعَاتِ: حَضَرَ عَلِيٌّ، سَافَرَ مُحَمَّدٌ.",
        defEn: "From the marfūʿāt overview: Ḥaḍara ʿAliyyun; sāfara Muḥammadun.",
        memorize: "حضر عليّ · سافر محمد",
        leaves: [
          {
            ar: "حَضَرَ عَلِيٌّ",
            en: "Ali was present",
            defAr: "عَلِيٌّ: فَاعِلٌ مَرْفُوعٌ، عَلَامَةُ رَفْعِهِ الضَّمَّةُ الظَّاهِرَةُ.",
            defEn: "ʿAliyyun: fāʿil marfūʿ — explicit ḍammah.",
            examples: [EX("حَضَرَ عَلِيٌّ", "fāʿil")],
          },
          {
            ar: "سَافَرَ مُحَمَّدٌ",
            en: "Muḥammad travelled",
            defAr: "مُحَمَّدٌ: فَاعِلٌ مَرْفُوعٌ بِالضَّمَّةِ الظَّاهِرَةِ.",
            defEn: "Muḥammadun: fāʿil marfūʿ — explicit ḍammah.",
            examples: [EX("سَافَرَ مُحَمَّدٌ", "fāʿil")],
          },
        ],
      },
    ],
  },

  /* ── 2. نائب الفاعل ─────────────────────────────────────── */
  {
    id: "naib",
    tone: "naib",
    ar: "نَائِبُ الْفَاعِلِ",
    en: "Deputy Subject",
    num: "٢",
    intro: "Matn name: المفعول الذي لم يسم فاعله — object raised after the doer is dropped.",
    lineIndex: 0,
    studyChapter: "naib-fail",
    matnAr: "الِاسْمُ الْمَرْفُوعُ الَّذِي لَمْ يُذْكَرْ مَعَهُ فَاعِلُهُ",
    defAr: "الِاسْمُ الْمَرْفُوعُ الَّذِي لَمْ يُذْكَرْ مَعَهُ فَاعِلُهُ.",
    defEn: "The marfūʿ noun whose doer is not mentioned with it.",
    langAr: null,
    istilahAr: "النَّائِبُ عَنِ الْفَاعِلِ — أَفْضَلُ مِنْ تَسْمِيَةِ الْمَتْنِ",
    topics: [
      {
        id: "naib-def",
        ar: "التَّعْرِيفُ وَالتَّحْوِيلُ",
        en: "Definition & conversion",
        kind: "def",
        lineIndex: 0,
        studyChapter: "naib-fail",
        defAr:
          "يُحْذَفُ الْفَاعِلُ → تُغَيَّرُ صُورَةُ الْفِعْلِ → يُرْفَعُ الْمَفْعُولُ وَيَأْخُذُ أَحْكَامَ الْفَاعِلِ.",
        defEn:
          "Drop the doer → change the verb form → raise the object and give it the fāʿil’s rulings (postponement, verb gender agreement, etc.).",
        memorize: "حذف فاعل · تغيير فعل · رفع مفعول",
        leaves: [
          {
            ar: "قَبْلَ التَّحْوِيلِ",
            en: "Before",
            defAr: "فِعْلٌ + فَاعِلٌ + مَفْعُولٌ مَنْصُوبٌ.",
            defEn: "Verb + doer + manṣūb object.",
            examples: [
              EX("قَطَعَ مَحْمُودٌ الْغُصْنَ", "active"),
              EX("حَفِظَ خَلِيلٌ الدَّرْسَ", "active"),
            ],
          },
          {
            ar: "بَعْدَ التَّحْوِيلِ",
            en: "After",
            defAr: "فِعْلٌ مَبْنِيٌّ لِلْمَجْهُولِ + نَائِبُ فَاعِلٍ مَرْفُوعٌ.",
            defEn: "Passive verb + marfūʿ deputy.",
            examples: [
              EX("قُطِعَ الْغُصْنُ", "the branch was cut"),
              EX("سُرِقَ الْمَتَاعُ", "the property was stolen"),
            ],
          },
        ],
      },
      {
        id: "naib-verb",
        ar: "تَغْيِيرُ الْفِعْلِ",
        en: "Verb form change",
        kind: "rule",
        lineIndex: 1,
        studyChapter: "naib-fail",
        matnAr:
          "إِنْ كَانَ مَاضِيًا ضُمَّ أَوَّلُهُ وَكُسِرَ مَا قَبْلَ آخِرِهِ، وَإِنْ كَانَ مُضَارِعًا ضُمَّ أَوَّلُهُ وَفُتِحَ مَا قَبْلَ آخِرِهِ",
        defAr: "قَاعِدَتَانِ لِلْمَاضِي وَالْمُضَارِعِ.",
        defEn: "Two fixed patterns — māḍī vs muḍāriʿ.",
        memorize: "ماض: ضُمّ+كُسِر · مضارع: ضُمّ+فُتِح",
        leaves: [
          {
            ar: "الْمَاضِي",
            en: "Māḍī passive",
            defAr: "ضُمَّ أَوَّلُهُ وَكُسِرَ مَا قَبْلَ آخِرِهِ.",
            defEn: "Ḍammah on first letter; kasrah before the last.",
            examples: [EX("قُطِعَ", "was cut"), EX("حُفِظَ", "was memorised"), EX("ضُرِبَ", "was hit")],
          },
          {
            ar: "الْمُضَارِعُ",
            en: "Muḍāriʿ passive",
            defAr: "ضُمَّ أَوَّلُهُ وَفُتِحَ مَا قَبْلَ آخِرِهِ.",
            defEn: "Ḍammah on first letter; fatḥah before the last.",
            examples: [EX("يُقْطَعُ", "is cut"), EX("يُحْفَظُ", "is memorised"), EX("يُضْرَبُ", "is hit")],
          },
        ],
      },
      {
        id: "naib-types",
        ar: "أَقْسَامُهُ",
        en: "Kinds",
        kind: "type",
        lineIndex: 3,
        studyChapter: "naib-fail",
        defAr: "كَالْفَاعِلِ: ظَاهِرٌ وَمُضْمَرٌ (١٢) — مُتَّصِلٌ وَمُنْفَصِلٌ.",
        defEn: "Same split as fāʿil: apparent / 12 pronouns (attached or detached).",
        memorize: "ظاهر · مضمر ١٢",
        leaves: [
          {
            ar: "ظَاهِرٌ",
            en: "Apparent",
            defAr: "ضُرِبَ زَيْدٌ · يُضْرَبُ زَيْدٌ · أُكْرِمَ عَمْرٌو.",
            defEn: "Named noun after a passive verb.",
            examples: [
              EX("ضُرِبَ زَيْدٌ", "Zayd was hit"),
              EX("يُحْتَرَمُ الْعَالِمُ", "the scholar is honoured"),
            ],
          },
          {
            ar: "مُضْمَرٌ",
            en: "Pronoun",
            defAr: "ضُرِبْتُ، ضُرِبْنَا، ضُرِبْتَ… ضُرِبْنَ — اثْنَا عَشَرَ.",
            defEn: "Twelve forms parallel to the fāʿil pronouns.",
            examples: [EX("ضُرِبْتُ", "I was hit"), EX("ضُرِبُوا", "they were hit")],
          },
        ],
      },
    ],
  },

  /* ── 3. المبتدأ ─────────────────────────────────────────── */
  {
    id: "mubtada",
    tone: "mubtada",
    ar: "الْمُبْتَدَأُ",
    en: "Nominal Subject",
    num: "٣",
    intro: "Three conditions: noun + marfūʿ + bare of expressed governors. Raised by الابتداء.",
    lineIndex: 0,
    studyChapter: "mubtada-khabar",
    matnAr: "الْمُبْتَدَأُ: الِاسْمُ الْمَرْفُوعُ الْعَارِي عَنِ الْعَوَامِلِ اللَّفْظِيَّةِ",
    defAr: "الِاسْمُ الْمَرْفُوعُ الْعَارِي عَنِ الْعَوَامِلِ اللَّفْظِيَّةِ.",
    defEn: "The marfūʿ noun bare of any expressed governors.",
    langAr: null,
    istilahAr: "ثَلَاثَةُ أُمُورٍ: اسْمٌ · مَرْفُوعٌ · عَارٍ عَنِ الْعَوَامِلِ اللَّفْظِيَّةِ",
    topics: [
      {
        id: "mubtada-def",
        ar: "الشُّرُوطُ الثَّلَاثَةُ",
        en: "Three conditions",
        kind: "def",
        lineIndex: 0,
        studyChapter: "mubtada-khabar",
        defAr: "اسْمٌ + مَرْفُوعٌ + عَارٍ عَنِ الْعَوَامِلِ اللَّفْظِيَّةِ.",
        defEn: "Noun + marfūʿ + empty of verbal governors (verb, kāna…).",
        memorize: "اسم · مرفوع · عارٍ عن العوامل اللفظية",
        leaves: [
          {
            ar: "١ اسْمٌ",
            en: "Noun",
            defAr: "يُخْرِجُ الْفِعْلَ وَالْحَرْفَ.",
            defEn: "Excludes verb and particle.",
            examples: [EX("مُحَمَّدٌ حَاضِرٌ", "Muḥammad — mubtadaʾ")],
          },
          {
            ar: "٢ مَرْفُوعٌ",
            en: "Marfūʿ",
            defAr: "يُخْرِجُ الْمَنْصُوبَ وَالْمَجْرُورَ بِحَرْفِ جَرٍّ أَصْلِيٍّ.",
            defEn: "Excludes manṣūb and majrūr by a true jarr particle.",
            examples: [EX("اللَّهُ رَبُّنَا", "Allāhu — rafʿ")],
          },
          {
            ar: "٣ عَارٍ عَنِ الْعَوَامِلِ",
            en: "No expressed governor",
            defAr:
              "لَا فِعْلَ وَلَا كَانَ وَأَخَوَاتِهَا — فَمَا بَعْدَ كَانَ = اسْمُ كَانَ لَا مُبْتَدَأٌ. عَامِلُهُ الِابْتِدَاءُ (مَعْنَوِيٌّ).",
            defEn:
              "Not after a verb or kāna. Raised by ibtidāʾ (implicit governor).",
            examples: [
              EX("مُحَمَّدٌ حَاضِرٌ", "mubtadaʾ"),
              EX("كَانَ مُحَمَّدٌ حَاضِرًا", "ism kāna — not mubtadaʾ"),
            ],
          },
        ],
      },
      {
        id: "mubtada-types",
        ar: "ظَاهِرٌ وَمُضْمَرٌ",
        en: "Apparent & pronoun",
        kind: "type",
        lineIndex: 3,
        studyChapter: "mubtada-khabar",
        matnAr: "وَالْمُبْتَدَأُ قِسْمَانِ: ظَاهِرٌ وَمُضْمَرٌ",
        defAr: "الْمُضْمَرُ ١٢ ضَمِيرًا بَارِزًا مُنْفَصِلًا فَقَطْ.",
        defEn: "Pronoun mubtadaʾ is only a clear detached pronoun (12 forms).",
        memorize: "أنا نحن أنتِ… هنّ",
        leaves: [
          {
            ar: "الظَّاهِرُ",
            en: "Apparent",
            defAr: "مُحَمَّدٌ رَسُولُ اللَّهِ · عَائِشَةُ أُمُّ الْمُؤْمِنِينَ.",
            defEn: "Named noun as topic.",
            examples: [
              EX("مُحَمَّدٌ رَسُولُ اللَّهِ", "Messenger"),
              EX("عَائِشَةُ أُمُّ الْمُؤْمِنِينَ", "Mother of Believers"),
            ],
          },
          {
            ar: "الْمُضْمَرُ — ١٢",
            en: "12 detached pronouns",
            defAr:
              "أَنَا، نَحْنُ، أَنْتَ، أَنْتِ، أَنْتُمَا، أَنْتُمْ، أَنْتُنَّ، هُوَ، هِيَ، هُمَا، هُمْ، هُنَّ.",
            defEn: "Only detached forms — never a hidden attached pronoun as mubtadaʾ.",
            examples: [
              EX("أَنَا قَائِمٌ", "I am standing"),
              EX("نَحْنُ قَائِمُونَ", "We are standing"),
              EX("هُوَ قَائِمٌ بِوَاجِبِهِ", "He fulfils his duty"),
            ],
          },
        ],
      },
      {
        id: "mubtada-match",
        ar: "التَّطَابُقُ مَعَ الْخَبَرِ",
        en: "Agreement with khabar",
        kind: "rule",
        lineIndex: 0,
        studyChapter: "mubtada-khabar",
        defAr: "فِي الْإِفْرَادِ وَالتَّثْنِيَةِ وَالْجَمْعِ، وَالتَّذْكِيرِ وَالتَّأْنِيثِ.",
        defEn: "Must match in number and gender.",
        memorize: "إفراد/تثنية/جمع · تذكير/تأنيث",
        leaves: [
          {
            ar: "أَمْثِلَةُ التَّطَابُقِ",
            en: "Agreement examples",
            defAr: "مُحَمَّدٌ قَائِمٌ · الْمُحَمَّدَانِ قَائِمَانِ · هِنْدٌ قَائِمَةٌ.",
            defEn: "Singular, dual, plural — masculine and feminine pairs.",
            examples: [
              EX("مُحَمَّدٌ قَائِمٌ", "sing. masc."),
              EX("الْمُحَمَّدَانِ قَائِمَانِ", "dual"),
              EX("الْهِنْدَاتُ قَائِمَاتٌ", "fem. pl."),
            ],
          },
        ],
      },
    ],
  },

  /* ── 4. الخبر ───────────────────────────────────────────── */
  {
    id: "khabar",
    tone: "khabar",
    ar: "الْخَبَرُ",
    en: "The Predicate",
    num: "٤",
    intro: "What is predicated of the mubtadaʾ and completes the speech. May be a sentence or shibh jumlah.",
    lineIndex: 0,
    studyChapter: "mubtada-khabar",
    matnAr: "الْخَبَرُ: الِاسْمُ الْمَرْفُوعُ الْمُسْنَدُ إِلَيْهِ",
    defAr: "الِاسْمُ الْمَرْفُوعُ الْمُسْنَدُ إِلَى الْمُبْتَدَأِ، يَتِمُّ بِهِ الْكَلَامُ.",
    defEn: "The marfūʿ word predicated of the mubtadaʾ, completing the benefit of speech.",
    topics: [
      {
        id: "khabar-def",
        ar: "التَّعْرِيفُ",
        en: "Definition",
        kind: "def",
        lineIndex: 0,
        studyChapter: "mubtada-khabar",
        defAr: "مُسْنَدٌ إِلَى الْمُبْتَدَأِ — وَقَدْ يَكُونُ جُمْلَةً أَوْ شِبْهَ جُمْلَةٍ.",
        defEn: "Predicated of the topic; may be a sentence or quasi-sentence (footnote).",
        memorize: "مسند إلى المبتدأ · يتم به الكلام",
        leaves: [
          {
            ar: "مِثَالُ الْأَصْلِ",
            en: "Basic example",
            defAr: "«حَاضِرٌ» فِي: مُحَمَّدٌ حَاضِرٌ.",
            defEn: "Ḥāḍirun in «Muḥammad is present».",
            examples: [
              EX("مُحَمَّدٌ مُسَافِرٌ", "traveller"),
              EX("عَلِيٌّ مُجْتَهِدٌ", "hard-working"),
            ],
          },
          {
            ar: "عَلَامَةُ الرَّفْعِ",
            en: "Sign of rafʿ",
            defAr: "ظَاهِرَةٌ · مُقَدَّرَةٌ (تَعَذُّرٌ / ثِقَلٌ) · أَوْ حَرْفٌ نَائِبٌ.",
            defEn: "Explicit, implied (impossibility/heaviness), or letter stand-in.",
            examples: [
              EX("اللَّهُ رَبُّنَا", "ẓāhira"),
              EX("مُوسَى مُصْطَفًى", "taʿadhdhur"),
              EX("الْمُجْتَهِدَانِ فَائِزَانِ", "alif"),
            ],
          },
        ],
      },
      {
        id: "khabar-kinds",
        ar: "أَقْسَامُ الْخَبَرِ",
        en: "Kinds of khabar",
        kind: "type",
        lineIndex: 7,
        studyChapter: "mubtada-khabar",
        matnAr:
          "الْخَبَرُ قِسْمَانِ: مُفْرَدٌ وَغَيْرُ مُفْرَدٍ… الْجَارُّ وَالْمَجْرُورُ، وَالظَّرْفُ، وَالْفِعْلُ مَعَ فَاعِلِهِ، وَالْمُبْتَدَأُ مَعَ خَبَرِهِ",
        defAr: "مُفْرَدٌ · أَوْ غَيْرُ مُفْرَدٍ (جُمْلَةٌ / شِبْهُ جُمْلَةٍ) → خَمْسَةُ أَنْوَاعٍ.",
        defEn: "Singular, or non-singular (sentence / quasi-sentence) → five detailed kinds.",
        memorize: "مفرد · جار ومجرور · ظرف · جملة فعلية · جملة اسمية",
        leaves: [
          {
            ar: "١ خَبَرٌ مُفْرَدٌ",
            en: "Singular predicate",
            defAr: "لَيْسَ جُمْلَةً وَلَا شَبِيهًا بِهَا — زَيْدٌ قَائِمٌ.",
            defEn: "Not a sentence or quasi-sentence.",
            examples: [EX("زَيْدٌ قَائِمٌ", "standing"), EX("مُحَمَّدٌ قَائِمٌ", "standing")],
          },
          {
            ar: "٢ جَارٌّ وَمَجْرُورٌ",
            en: "Jarr + majrūr",
            defAr: "شِبْهُ جُمْلَةٍ — زَيْدٌ فِي الدَّارِ.",
            defEn: "Quasi-sentence of place/relation.",
            examples: [EX("زَيْدٌ فِي الدَّارِ", "in the house")],
          },
          {
            ar: "٣ ظَرْفٌ",
            en: "Adverbial",
            defAr: "شِبْهُ جُمْلَةٍ — زَيْدٌ عِنْدَكَ.",
            defEn: "Adverb of place/time as predicate.",
            examples: [EX("زَيْدٌ عِنْدَكَ", "with you")],
          },
          {
            ar: "٤ جُمْلَةٌ فِعْلِيَّةٌ",
            en: "Verbal sentence",
            defAr: "فِعْلٌ + فَاعِلٌ — وَلَا بُدَّ مِنْ رَابِطٍ (غَالِبًا ضَمِيرٌ).",
            defEn: "Verb + subject; needs a link back to the mubtadaʾ (usually a pronoun).",
            examples: [EX("زَيْدٌ قَامَ أَبُوهُ", "his father stood")],
          },
          {
            ar: "٥ جُمْلَةٌ اسْمِيَّةٌ",
            en: "Nominal sentence",
            defAr: "مُبْتَدَأٌ + خَبَرٌ دَاخِلَانِ — مَعَ رَابِطٍ.",
            defEn: "Inner mubtadaʾ + khabar, with a link.",
            examples: [EX("زَيْدٌ جَارِيَتُهُ ذَاهِبَةٌ", "his girl is going")],
          },
        ],
      },
    ],
  },

  /* ── 5. اسم كان ─────────────────────────────────────────── */
  {
    id: "ism-kana",
    tone: "ismkana",
    ar: "اسْمُ كَانَ",
    en: "Noun of kāna",
    num: "٥",
    intro: "Kāna & sisters raise the ism and install the khabar. 13 verbs — the marfūʿ piece is اسم كان.",
    lineIndex: 0,
    studyChapter: "awamil-mubtada",
    matnAr: "كَانَ وَأَخَوَاتُهَا … تَرْفَعُ الِاسْمَ وَتَنْصِبُ الْخَبَرَ",
    defAr: "الِاسْمُ الْمَرْفُوعُ بَعْدَ كَانَ أَوْ إِحْدَى أَخَوَاتِهَا.",
    defEn: "The noun made marfūʿ by kāna or one of its sisters (khabar is manṣūb).",
    topics: [
      {
        id: "kana-work",
        ar: "الْعَمَلُ",
        en: "Grammatical effect",
        kind: "rule",
        lineIndex: 1,
        studyChapter: "awamil-mubtada",
        defAr: "تَرْفَعُ الِاسْمَ وَتَنْصِبُ الْخَبَرَ — نَاسِخَةٌ لِلْمُبْتَدَأِ وَالْخَبَرِ.",
        defEn: "Raises ism, installs khabar — abrogates the default mubtadaʾ/khabar rafʿ.",
        memorize: "رفع اسم · نصب خبر",
        leaves: [
          {
            ar: "النَّمَطُ",
            en: "Pattern",
            defAr: "كَانَ + اسْمٌ مَرْفُوعٌ + خَبَرٌ مَنْصُوبٌ.",
            defEn: "kāna + marfūʿ ism + manṣūb khabar.",
            examples: [
              EX("كَانَ إِبْرَاهِيمُ مُجْتَهِدًا", "Ibrāhīm was hard-working"),
              EX("أَصْبَحَ الْبَرْدُ شَدِيدًا", "the cold became severe"),
              EX("﴿وَكَانَ رَبُّكَ قَدِيرًا﴾", "Furqān 54"),
            ],
          },
          {
            ar: "مُقَارَنَةٌ",
            en: "Contrast",
            defAr: "مُبْتَدَأٌ+خَبَرٌ: رَفْعٌ+رَفْعٌ · كَانَ: رَفْعٌ+نَصْبٌ · إِنَّ: نَصْبٌ+رَفْعٌ.",
            defEn: "Mubtadaʾ+khabar both rafʿ; kāna rafʿ+naṣb; inna naṣb+rafʿ.",
            examples: [
              EX("إِبْرَاهِيمُ مُخْلِصٌ", "both rafʿ"),
              EX("كَانَ رَبُّكَ قَدِيرًا", "ism rafʿ · khabar naṣb"),
            ],
          },
        ],
      },
      {
        id: "kana-list",
        ar: "ثَلَاثَةَ عَشَرَ فِعْلًا",
        en: "The 13 verbs",
        kind: "type",
        lineIndex: 1,
        studyChapter: "awamil-mubtada",
        matnAr:
          "كَانَ، وَأَمْسَى، وَأَصْبَحَ، وَأَضْحَى، وَظَلَّ، وَبَاتَ، وَصَارَ، وَلَيْسَ، وَمَا زَالَ، وَمَا انْفَكَّ، وَمَا فَتِئَ، وَمَا بَرِحَ، وَمَا دَامَ",
        defAr: "احْفَظِ الْقَائِمَةَ وَمَعَانِيَهَا الْمُخْتَصَرَةَ.",
        defEn: "Memorise the list and each verb’s brief meaning.",
        memorize: "كان أمسى أصبح أضحى ظل بات صار ليس · ما زال/انفك/فتئ/برح/دام",
        leaves: [
          {
            ar: "كَانَ … صَارَ",
            en: "Time / becoming",
            defAr: "كَانَ (مَاضٍ) · أَمْسَى · أَصْبَحَ · أَضْحَى · ظَلَّ · بَاتَ · صَارَ (تَحَوُّلٌ).",
            defEn: "Past/time-of-day verbs + ṣāra (becoming).",
            examples: [
              EX("كَانَ مُحَمَّدٌ مُجْتَهِدًا", "was"),
              EX("أَمْسَى الْجَوُّ بَارِدًا", "became cold at evening"),
              EX("صَارَ الطِّينُ خَزَفًا", "became pottery"),
            ],
          },
          {
            ar: "لَيْسَ وَأَخَوَاتُ الِاسْتِمْرَارِ",
            en: "laysa & continuity",
            defAr: "لَيْسَ (نَفْيٌ) · مَا زَالَ · مَا انْفَكَّ · مَا فَتِئَ · مَا بَرِحَ · مَا دَامَ.",
            defEn: "Negation / continuance verbs (with their conditions).",
            examples: [
              EX("لَيْسَ عَمْرٌو شَاخِصًا", "is not present"),
              EX("مَا زَالَ زَيْدٌ عَالِمًا", "continues to be"),
            ],
          },
        ],
      },
    ],
  },

  /* ── 6. خبر إنّ ─────────────────────────────────────────── */
  {
    id: "khabar-inna",
    tone: "khabarinna",
    ar: "خَبَرُ إِنَّ",
    en: "Predicate of inna",
    num: "٦",
    intro: "Inna & sisters install the ism and raise the khabar. The marfūʿ piece among the seven is خبر إنّ.",
    lineIndex: 0,
    studyChapter: "awamil-mubtada",
    matnAr: "إِنَّ وَأَخَوَاتُهَا … تَنْصِبُ الِاسْمَ وَتَرْفَعُ الْخَبَرَ",
    defAr: "الْخَبَرُ الْمَرْفُوعُ بَعْدَ إِنَّ أَوْ إِحْدَى أَخَوَاتِهَا.",
    defEn: "The predicate made marfūʿ by inna or one of its sisters (ism is manṣūb).",
    topics: [
      {
        id: "inna-work",
        ar: "الْعَمَلُ",
        en: "Grammatical effect",
        kind: "rule",
        lineIndex: 5,
        studyChapter: "awamil-mubtada",
        defAr: "تَنْصِبُ الِاسْمَ وَتَرْفَعُ الْخَبَرَ — عَكْسُ كَانَ.",
        defEn: "Installs ism, raises khabar — opposite of kāna.",
        memorize: "نصب اسم · رفع خبر",
        leaves: [
          {
            ar: "النَّمَطُ",
            en: "Pattern",
            defAr: "إِنَّ + اسْمٌ مَنْصُوبٌ + خَبَرٌ مَرْفُوعٌ.",
            defEn: "inna + manṣūb ism + marfūʿ khabar.",
            examples: [
              EX("إِنَّ مُحَمَّدًا فَاضِلٌ", "virtuous"),
              EX("إِنَّ اللَّهَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ", "All-Powerful"),
              EX("إِنَّ اللَّهَ سَمِيعُ الدُّعَاءِ", "Hearing of duʿāʾ"),
            ],
          },
        ],
      },
      {
        id: "inna-list",
        ar: "سِتَّةُ أَحْرُفٍ",
        en: "Six particles",
        kind: "type",
        lineIndex: 5,
        studyChapter: "awamil-mubtada",
        defAr: "إِنَّ / أَنَّ (تَوْكِيدٌ) · لَكِنَّ (اسْتِدْرَاكٌ) · كَأَنَّ (تَشْبِيهٌ) · لَيْتَ (تَمَنٍّ) · لَعَلَّ (تَرَجٍّ).",
        defEn: "inna/anna emphasis; lākinna contrast; kaʾanna likeness; layta wish; laʿalla hope.",
        memorize: "إنّ أنّ لكنّ كأنّ ليت لعلّ",
        leaves: [
          {
            ar: "إِنَّ / أَنَّ",
            en: "Emphasis",
            defAr: "تَوْكِيدُ نِسْبَةِ الْخَبَرِ لِلِاسْمِ.",
            defEn: "Emphasise that the khabar belongs to the ism.",
            examples: [EX("إِنَّ زَيْدًا قَائِمٌ", "indeed Zayd is standing")],
          },
          {
            ar: "لَكِنَّ · كَأَنَّ · لَيْتَ · لَعَلَّ",
            en: "Other meanings",
            defAr: "اسْتِدْرَاكٌ · تَشْبِيهٌ · تَمَنٍّ · تَرَجٍّ / تَوَقُّعٌ.",
            defEn: "Contrast · likeness · wish · hope/expectation.",
            examples: [
              EX("لَكِنَّ عَمْرًا جَالِسٌ", "but"),
              EX("كَأَنَّ زَيْدًا أَسَدٌ", "as if"),
              EX("لَيْتَ الشَّبَابَ عَائِدٌ", "would that"),
              EX("لَعَلَّ الْحَبِيبَ قَادِمٌ", "perhaps"),
            ],
          },
        ],
      },
    ],
  },

  /* ── 7. التابع ──────────────────────────────────────────── */
  {
    id: "tabi",
    tone: "tabi",
    ar: "التَّابِعُ لِلْمَرْفُوعِ",
    en: "Follower of a marfūʿ",
    num: "٧",
    intro: "Four kinds that follow a marfūʿ in its iʿrāb. Memorise the stack order when they combine.",
    lineIndex: 0,
    studyChapter: "marfuat",
    matnAr: "التَّابِعُ لِلْمَرْفُوعِ وَهُوَ أَرْبَعَةُ أَشْيَاءَ: النَّعْتُ، وَالْعَطْفُ، وَالتَّوْكِيدُ، وَالْبَدَلُ",
    defAr: "مَا يَتْبَعُ مَرْفُوعًا فِي إِعْرَابِهِ — أَرْبَعَةُ أَنْوَاعٍ.",
    defEn: "Whatever follows a marfūʿ in case — four types.",
    topics: [
      {
        id: "tabi-kinds",
        ar: "الْأَنْوَاعُ الْأَرْبَعَةُ",
        en: "Four kinds",
        kind: "type",
        lineIndex: 0,
        studyChapter: "marfuat",
        defAr: "نَعْتٌ · عَطْفٌ (بَيَانٌ / نَسَقٌ) · تَوْكِيدٌ · بَدَلٌ.",
        defEn: "Adjective; conjunction (explanatory / sequential); emphasis; substitute.",
        memorize: "نعت · عطف · توكيد · بدل",
        leaves: [
          {
            ar: "النَّعْتُ",
            en: "Adjective (naʿt)",
            defAr: "وَصْفٌ لِلْمَتْبُوعِ.",
            defEn: "Describes the followed word.",
            examples: [
              EX("زَارَنِي مُحَمَّدٌ الْفَاضِلُ", "the virtuous Muḥammad"),
              EX("قَابَلَنِي رَجُلٌ كَرِيمٌ", "a noble man"),
            ],
          },
          {
            ar: "الْعَطْفُ",
            en: "Conjunction (ʿaṭf)",
            defAr: "عَطْفُ بَيَانٍ (تَوْضِيحٌ) · عَطْفُ نَسَقٍ (بِحَرْفِ عَطْفٍ).",
            defEn: "Explanatory apposition vs sequential with a conjunction particle.",
            examples: [
              EX("سَافَرَ أَبُو حَفْصٍ عُمَرُ", "bayān"),
              EX("تَشَارَكَ مُحَمَّدٌ وَخَالِدٌ", "nasaq"),
            ],
          },
          {
            ar: "التَّوْكِيدُ",
            en: "Emphasis (tawkīd)",
            defAr: "تَقْوِيَةُ الْمَتْبُوعِ — نَحْوُ نَفْسُهُ.",
            defEn: "Strengthens the followed word.",
            examples: [EX("زَارَنِي الْأَمِيرُ نَفْسُهُ", "the leader himself")],
          },
          {
            ar: "الْبَدَلُ",
            en: "Substitute (badal)",
            defAr: "الْمَقْصُودُ بِالْحُكْمِ بَعْدَ ذِكْرِ مَتْبُوعٍ.",
            defEn: "The intended referent after mentioning another word first.",
            examples: [EX("حَضَرَ أَخُوكَ عَلِيٌّ", "your brother Ali")],
          },
        ],
      },
      {
        id: "tabi-order",
        ar: "تَرْتِيبُ التَّوَابِعِ",
        en: "Stack order",
        kind: "rule",
        lineIndex: 0,
        studyChapter: "marfuat",
        matnAr:
          "قَدَّمْتَ النَّعْتَ، ثُمَّ عَطْفَ الْبَيَانِ، ثُمَّ التَّوْكِيدَ، ثُمَّ الْبَدَلَ، ثُمَّ عَطْفَ النَّسَقِ",
        defAr: "نَعْت → عَطْفُ بَيَان → تَوْكِيد → بَدَل → عَطْفُ نَسَق.",
        defEn: "Fixed order when several followers gather.",
        memorize: "نعت → بيان → توكيد → بدل → نسق",
        leaves: [
          {
            ar: "الْمِثَالُ الْجَامِعُ",
            en: "Full stack example",
            defAr:
              "جَاءَ الرَّجُلُ الْكَرِيمُ عَلِيٌّ نَفْسُهُ صَدِيقُكَ وَأَخُوهُ.",
            defEn:
              "naʿt الكريم · bayān عليّ · tawkīd نفسه · badal صديقك · nasaq وأخوه.",
            examples: [
              EX("الرَّجُلُ الْكَرِيمُ", "naʿt"),
              EX("عَلِيٌّ", "ʿaṭf bayān"),
              EX("نَفْسُهُ", "tawkīd"),
              EX("صَدِيقُكَ", "badal"),
              EX("وَأَخُوهُ", "ʿaṭf nasaq"),
            ],
          },
        ],
      },
    ],
  },
];

/** Quick recall — seven positions at a glance */
export const MARFUAT_QUICK_MATRIX = {
  titleAr: "جَدْوَلُ الْحِفْظِ السَّرِيعِ",
  titleEn: "Quick recall — 7 positions",
  blurbEn: "One line per marfūʿ: definition cue + signature example.",
  rows: [
    {
      n: "١",
      type: "الْفَاعِلُ",
      cue: "اسْمٌ مَرْفُوعٌ قَبْلَهُ فِعْلُهُ",
      example: "حَضَرَ عَلِيٌّ",
    },
    {
      n: "٢",
      type: "نَائِبُ الْفَاعِلِ",
      cue: "مَرْفُوعٌ لَمْ يُذْكَرْ فَاعِلُهُ",
      example: "قُطِعَ الْغُصْنُ",
    },
    {
      n: "٣",
      type: "الْمُبْتَدَأُ",
      cue: "اسْمٌ مَرْفُوعٌ عَارٍ عَنِ الْعَوَامِلِ",
      example: "مُحَمَّدٌ مُسَافِرٌ",
    },
    {
      n: "٤",
      type: "الْخَبَرُ",
      cue: "مُسْنَدٌ إِلَى الْمُبْتَدَأِ",
      example: "مُحَمَّدٌ مُسَافِرٌ",
    },
    {
      n: "٥",
      type: "اسْمُ كَانَ",
      cue: "مَرْفُوعٌ بَعْدَ كَانَ (وَالْخَبَرُ مَنْصُوبٌ)",
      example: "كَانَ إِبْرَاهِيمُ مُجْتَهِدًا",
    },
    {
      n: "٦",
      type: "خَبَرُ إِنَّ",
      cue: "مَرْفُوعٌ بَعْدَ إِنَّ (وَالِاسْمُ مَنْصُوبٌ)",
      example: "إِنَّ مُحَمَّدًا فَاضِلٌ",
    },
    {
      n: "٧",
      type: "التَّابِعُ",
      cue: "نَعْت · عَطْف · تَوْكِيد · بَدَل",
      example: "مُحَمَّدٌ الْفَاضِلُ",
    },
  ],
};

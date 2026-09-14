/** Kingdom of Iʿrāb — shared map + quest knowledge (from baab-iraab). */

import {
  IRAAB_MABNI_TRAVELERS,
  IRAAB_MABNI_TRAVELER_IDS,
  MAHALL_DOOR,
  getMabniRoleCheck,
  mabniRoleAudit,
} from "./iraabKingdomMabni.js";

export {
  IRAAB_MABNI_TRAVELERS,
  IRAAB_MABNI_TRAVELER_IDS,
  MAHALL_DOOR,
  getMabniRoleCheck,
  mabniRoleAudit,
};

export const IRAAB_CASTLES = {
  rafa: {
    id: "rafa",
    name: "Rafʿ",
    ar: "رفع",
    color: "#2f6a4f",
    bgKey: "rafa",
    aliName: "Ḍammah",
    aliAr: "ضمة",
    aliBadge: "ُ",
    note: "",
    errand: "Doing the action / starting the sentence",
causes: [
        { ar: "الفاعل", en: "Fāʿil", why: "subject / doer" },
        { ar: "نائب الفاعل", en: "Nāʾib al-fāʿil", why: "deputised subject" },
        { ar: "المبتدأ", en: "Mubtadaʾ", why: "topic" },
        { ar: "الخبر", en: "Khabar", why: "predicate" },
        { ar: "اسم كان", en: "Ism kāna", why: "noun of kāna" },
        { ar: "خبر إنّ", en: "Khabar inna", why: "predicate of inna" },
        { ar: "تابع المرفوع", en: "Tābiʿ", why: "نعت · عطف · توكيد · بدل" },
      ],
    doors: [
      {
        id: "dammah",
        kind: "ali",
        name: "Ḍammah",
        badge: "ُ",
        plaque: "أصلية",
        blurb: "الأصلية — the original (aṣliyyah) mark of Rafʿ. Worn as-is when the word can hold it.",
        worn: [
          { ar: "اسم مفرد", en: "Ism Mufrad" },
          { ar: "جمع تكسير", en: "Jamʿ Taksīr" },
          { ar: "جمع المؤنث السالم", en: "Jamʿ al-Muʾannath al-Sālim" },
          {
            ar: "فعل مضارع صحيح الآخر",
            en: "Fiʿl Muḍāriʿ (ṣaḥīḥ al-ākhir)",
            note: "Nothing attached",
          },
        ],
      },
      {
        id: "waw",
        kind: "far",
        name: "Wāw",
        badge: "و",
        plaque: "فرعية",
        blurb: "الفرعية — steps in when one ḍammah cannot sit on the word.",
        worn: [
          {
            ar: "الأسماء الخمسة",
            en: "Al-Asmāʾ al-Khamsah",
            note: "أبوك، أخوك، حموك، فوك، ذو — always in iḍāfah",
          },
          {
            ar: "جمع المذكر السالم",
            en: "Jamʿ al-Mudhakkar al-Sālim",
            note: "Sound masculine plural",
          },
        ],
      },
      {
        id: "alif",
        kind: "far",
        name: "Alif",
        badge: "ا",
        plaque: "فرعية",
        blurb: "الفرعية — two bodies cannot hold one ḍammah.",
        worn: [{ ar: "المثنى", en: "Al-Muthannā", note: "The dual" }],
      },
      {
        id: "thubut-nun",
        kind: "far",
        name: "Thubūt al-Nūn",
        badge: "ن",
        plaque: "فرعية",
        blurb: "الفرعية — keeps the ن as the mark of Rafʿ.",
        worn: [
          {
            ar: "الأفعال الخمسة",
            en: "Al-Afʿāl al-Khamsah",
            note: "Five verbs attached to و / ي / يّ",
          },
        ],
      },
      { ...MAHALL_DOOR },
    ],
  },
  nasb: {
    id: "nasb",
    name: "Naṣb",
    ar: "نصب",
    color: "#3a6ea5",
    bgKey: "nasb",
    aliName: "Fatḥah",
    aliAr: "فتحة",
    aliBadge: "َ",
    note: "",
    errand: "Receiving the action",
causes: [
        { ar: "المفعول به", en: "Mafʿūl bihi", why: "direct object" },
        { ar: "المصدر", en: "Maṣdar", why: "absolute object" },
        { ar: "الظرف", en: "Ẓarf", why: "time / place" },
        { ar: "الحال", en: "Ḥāl", why: "circumstantial" },
        { ar: "التمييز", en: "Tamyīz", why: "specification" },
        { ar: "خبر كان · اسم إنّ", en: "Nawāsikh", why: "kāna / inna roles" },
        { ar: "تابع المنصوب", en: "Tābiʿ", why: "نعت · عطف · توكيد · بدل" },
      ],
    doors: [
      {
        id: "fathah",
        kind: "ali",
        name: "Fatḥah",
        badge: "َ",
        plaque: "أصلية",
        blurb: "الأصلية — the original (aṣliyyah) mark of Naṣb.",
        worn: [
          { ar: "اسم مفرد", en: "Ism Mufrad" },
          { ar: "جمع تكسير", en: "Jamʿ Taksīr" },
          {
            ar: "فعل مضارع صحيح الآخر",
            en: "Fiʿl Muḍāriʿ (manṣūb)",
            note: "When manṣūb by a naṣb particle",
          },
        ],
      },
      {
        id: "alif",
        kind: "far",
        name: "Alif",
        badge: "ا",
        plaque: "فرعية",
        blurb: "الفرعية — Alif under Naṣb belongs to the five nouns.",
        worn: [{ ar: "الأسماء الخمسة", en: "Al-Asmāʾ al-Khamsah" }],
      },
      {
        id: "ya",
        kind: "far",
        name: "Yāʾ",
        badge: "ي",
        plaque: "فرعية",
        blurb: "الفرعية — one badge, two guests: dual and sound masculine plural.",
        worn: [
          { ar: "المثنى", en: "Al-Muthannā" },
          { ar: "جمع المذكر السالم", en: "Jamʿ al-Mudhakkar al-Sālim" },
        ],
      },
      {
        id: "kasrah",
        kind: "far",
        name: "Kasrah",
        badge: "ِ",
        plaque: "فرعية",
        blurb: "الفرعية — the shape-shifter refuses Fatḥah and insists on Kasrah.",
        worn: [
          {
            ar: "جمع المؤنث السالم",
            en: "Jamʿ al-Muʾannath al-Sālim",
            note: "Wears aṣliyyah under Rafʿ, Kasrah under Naṣb",
          },
        ],
      },
      {
        id: "hadhf-nun",
        kind: "far",
        name: "Ḥadhf al-Nūn",
        badge: "ن̸",
        plaque: "فرعية",
        blurb: "الفرعية — drops the ن. Opposite fate to Rafʿ’s Thubūt al-Nūn.",
        worn: [
          {
            ar: "الأفعال الخمسة",
            en: "Al-Afʿāl al-Khamsah",
            note: "Same five verbs",
          },
        ],
      },
      { ...MAHALL_DOOR },
    ],
  },
  khafd: {
    id: "khafd",
    name: "Khafḍ",
    ar: "خفض",
    color: "#c45c28",
    bgKey: "khafd",
    aliName: "Kasrah",
    aliAr: "كسرة",
    aliBadge: "ِ",
    note: "Noun-only — never touches verbs",
    errand: "Pointed at by a preposition or possession",
causes: [
        { ar: "اسم مجرور", en: "Majrūr", why: "after ḥarf jarr" },
        { ar: "مضاف إليه", en: "Muḍāf ilayh", why: "possession / of-ness" },
        { ar: "تابع المخفوض", en: "Tābiʿ", why: "نعت · عطف · توكيد · بدل" },
      ],
    doors: [
      {
        id: "kasrah",
        kind: "ali",
        name: "Kasrah",
        badge: "ِ",
        plaque: "أصلية",
        blurb: "الأصلية — the original (aṣliyyah) mark of Khafḍ.",
        worn: [
          { ar: "اسم مفرد", en: "Ism Mufrad" },
          { ar: "جمع تكسير", en: "Jamʿ Taksīr" },
          { ar: "جمع المؤنث السالم", en: "Jamʿ al-Muʾannath al-Sālim" },
        ],
      },
      {
        id: "ya",
        kind: "far",
        name: "Yāʾ",
        badge: "ي",
        plaque: "فرعية",
        blurb: "الفرعية — one hall, one badge, three guests.",
        worn: [
          { ar: "الأسماء الخمسة", en: "Al-Asmāʾ al-Khamsah" },
          { ar: "المثنى", en: "Al-Muthannā" },
          { ar: "جمع المذكر السالم", en: "Jamʿ al-Mudhakkar al-Sālim" },
        ],
      },
      {
        id: "fathah",
        kind: "far",
        name: "Fatḥah",
        badge: "َ",
        plaque: "فرعية",
        blurb: "الفرعية — cannot take tanwīn, so a bare kasrah would look wrong.",
        worn: [
          {
            ar: "الممنوع من الصرف",
            en: "Al-Mamnūʿ min al-Ṣarf (Ghayr Munṣarif)",
          },
        ],
      },
      { ...MAHALL_DOOR },
    ],
  },
  jazm: {
    id: "jazm",
    name: "Jazm",
    ar: "جزم",
    color: "#5a4a86",
    bgKey: "jazm",
    aliName: "Sukūn",
    aliAr: "سكون",
    aliBadge: "ْ",
    note: "Verb-only — never touches nouns",
    errand: "Shifted by a jazm particle (verbs only)",
causes: [
        { ar: "لم", en: "Lam", why: "did not…" },
        { ar: "لما", en: "Lammā", why: "not yet…" },
        { ar: "لام الأمر", en: "Lām of command", why: "let him…" },
        { ar: "لا الناهية", en: "Lā of prohibition", why: "don’t…!" },
        { ar: "إنْ الشرطية", en: "In of condition", why: "if… (jussive)" },
      ],
    doors: [
      {
        id: "sukun",
        kind: "ali",
        name: "Sukūn",
        badge: "ْ",
        plaque: "أصلية",
        blurb: "الأصلية — the original (aṣliyyah) mark of Jazm.",
        worn: [
          {
            ar: "فعل مضارع صحيح الآخر",
            en: "Fiʿl Muḍāriʿ ṣaḥīḥ al-ākhir",
            note: "Preceded by a jazm particle",
          },
        ],
      },
      {
        id: "hadhf-illah",
        kind: "far",
        name: "Ḥadhf Ḥarf al-ʿIllah",
        badge: "و̸",
        plaque: "فرعية",
        blurb: "الفرعية — weak letter drops; و / ي / ا cannot sit under a sukūn.",
        worn: [
          { ar: "الأفعال المعتلة الآخر", en: "Al-Afʿāl al-Muʿtallah al-Ākhir" },
        ],
      },
      {
        id: "hadhf-nun",
        kind: "far",
        name: "Ḥadhf al-Nūn",
        badge: "ن̸",
        plaque: "فرعية",
        blurb: "الفرعية — drops the ن. Same fate as under Naṣb.",
        worn: [{ ar: "الأفعال الخمسة", en: "Al-Afʿāl al-Khamsah" }],
      },
    ],
  },
};

/** Role-road ids shared by noun travelers (ism shapes). */
export const IRAAB_NOUN_ROLES = {
  rafa: [
    "fail",
    "naib",
    "mubtada",
    "khabar",
    "ism-kana",
    "khabar-inna",
    "tabi-marfu",
  ],
  nasb: [
    "mafool",
    "masdar",
    "zarf-zaman",
    "zarf-makan",
    "hal",
    "tamyiz",
    "mustathna",
    "ism-la",
    "munada",
    "mafool-ajl",
    "mafool-maah",
    "khabar-kana",
    "ism-inna",
    "tabi-mansub",
  ],
  khafd: ["majroor", "mudaf", "tabi-makhfud"],
};

/** Verb-road ids (muḍāriʿ only — not noun marfūʿāt / manṣūbāt). */
export const IRAAB_VERB_ROLES = {
  rafa: ["mudari-raf"],
  nasb: ["mudari-an", "mudari-lan", "mudari-kay", "mudari-idhan"],
  jazm: [
    "after-lam",
    "after-lamma",
    "after-lam-amr",
    "after-la-nahy",
    "jawab-talab",
    "after-in",
  ],
};

/** Word shapes = travelers from باب علامات الإعراب + mabnī extension. */
export const IRAAB_TRAVELERS = [
  {
    id: "ism-mufrad",
    ar: "الِاسْمُ الْمُفْرَدُ الْمُنْصَرِفُ",
    en: "Triptote singular noun",
    kind: "noun",
    road: "harakat",
    tip: "Matn: الاسم المفرد — wears aṣliyyah (ḍammah / fatḥah / kasrah) in every noun castle.",
    routes: [
      {
        castle: "rafa",
        cause: "فاعل / مبتدأ",
        sign: "Ḍammah",
        badge: "ُ",
        seal: "ali",
        roles: IRAAB_NOUN_ROLES.rafa,
      },
      {
        castle: "nasb",
        cause: "مفعول به",
        sign: "Fatḥah",
        badge: "َ",
        seal: "ali",
        roles: IRAAB_NOUN_ROLES.nasb,
      },
      {
        castle: "khafd",
        cause: "حرف جر / إضافة",
        sign: "Kasrah",
        badge: "ِ",
        seal: "ali",
        roles: IRAAB_NOUN_ROLES.khafd,
      },
    ],
  },
  {
    id: "jam-taksir",
    ar: "جَمْعُ التَّكْسِيرِ الْمُنْصَرِفُ",
    en: "Triptote broken plural",
    kind: "noun",
    road: "harakat",
    tip: "Matn: جمع التكسير — same vowel signs as the singular munṣarif.",
    routes: [
      {
        castle: "rafa",
        cause: "فاعل / مبتدأ",
        sign: "Ḍammah",
        badge: "ُ",
        seal: "ali",
        roles: IRAAB_NOUN_ROLES.rafa,
      },
      {
        castle: "nasb",
        cause: "مفعول به",
        sign: "Fatḥah",
        badge: "َ",
        seal: "ali",
        roles: IRAAB_NOUN_ROLES.nasb,
      },
      {
        castle: "khafd",
        cause: "حرف جر / إضافة",
        sign: "Kasrah",
        badge: "ِ",
        seal: "ali",
        roles: IRAAB_NOUN_ROLES.khafd,
      },
    ],
  },
  {
    id: "jam-muannath",
    ar: "جَمْعُ الْمُؤَنَّثِ السَّالِمِ",
    en: "Sound feminine plural",
    kind: "noun",
    road: "harakat",
    tip: "Matn: ḍammah in rafʿ, kasrah in naṣb (فرعية), kasrah in khafḍ.",
    routes: [
      {
        castle: "rafa",
        cause: "فاعل / مبتدأ",
        sign: "Ḍammah",
        badge: "ُ",
        seal: "ali",
        roles: IRAAB_NOUN_ROLES.rafa,
      },
      {
        castle: "nasb",
        cause: "مفعول به",
        sign: "Kasrah",
        badge: "ِ",
        seal: "far",
        roles: IRAAB_NOUN_ROLES.nasb,
      },
      {
        castle: "khafd",
        cause: "حرف جر / إضافة",
        sign: "Kasrah",
        badge: "ِ",
        seal: "ali",
        roles: IRAAB_NOUN_ROLES.khafd,
      },
    ],
  },
  {
    id: "mamnu",
    ar: "الِاسْمُ الَّذِي لَا يَنْصَرِفُ",
    en: "Diptote (ممنوع من الصرف)",
    kind: "noun",
    road: "harakat",
    tip: "Matn: under khafḍ wears fatḥah instead of kasrah.",
    routes: [
      {
        castle: "rafa",
        cause: "فاعل / مبتدأ",
        sign: "Ḍammah",
        badge: "ُ",
        seal: "ali",
        roles: IRAAB_NOUN_ROLES.rafa,
      },
      {
        castle: "nasb",
        cause: "مفعول به",
        sign: "Fatḥah",
        badge: "َ",
        seal: "ali",
        roles: IRAAB_NOUN_ROLES.nasb,
      },
      {
        castle: "khafd",
        cause: "حرف جر / إضافة",
        sign: "Fatḥah",
        badge: "َ",
        seal: "far",
        roles: IRAAB_NOUN_ROLES.khafd,
      },
    ],
  },
  {
    id: "mudari-sahih",
    ar: "الْفِعْلُ الْمُضَارِعُ الصَّحِيحُ الْآخِرِ",
    en: "Sound-ending muḍāriʿ (nothing attached)",
    kind: "verb",
    road: "harakat",
    tip: "Matn: المضارع الذي لم يتصل بآخره شيء — ḍammah / fatḥah / sukūn.",
    routes: [
      {
        castle: "rafa",
        cause: "default / no particle",
        sign: "Ḍammah",
        badge: "ُ",
        seal: "ali",
        roles: IRAAB_VERB_ROLES.rafa,
      },
      {
        castle: "nasb",
        cause: "أن · لن · كي…",
        sign: "Fatḥah",
        badge: "َ",
        seal: "ali",
        roles: IRAAB_VERB_ROLES.nasb,
      },
      {
        castle: "jazm",
        cause: "لم · لما · لا…",
        sign: "Sukūn",
        badge: "ْ",
        seal: "ali",
        roles: IRAAB_VERB_ROLES.jazm,
      },
    ],
  },
  {
    id: "mutall",
    ar: "الْفِعْلُ الْمُضَارِعُ الْمُعْتَلُّ الْآخِرِ",
    en: "Weak-ending muḍāriʿ",
    kind: "verb",
    road: "harakat",
    tip: "Matn: under jazm the weak letter is dropped (حذف حرف العلة).",
    routes: [
      {
        castle: "rafa",
        cause: "default",
        sign: "Ḍammah*",
        badge: "ُ",
        seal: "ali",
        note: "with adjustments by ending",
        roles: IRAAB_VERB_ROLES.rafa,
      },
      {
        castle: "nasb",
        cause: "أن · لن…",
        sign: "Fatḥah*",
        badge: "َ",
        seal: "ali",
        note: "alif-ending often drops alif",
        roles: IRAAB_VERB_ROLES.nasb,
      },
      {
        castle: "jazm",
        cause: "لم · لما…",
        sign: "Ḥadhf Ḥarf al-ʿIllah",
        badge: "و̸",
        seal: "far",
        roles: IRAAB_VERB_ROLES.jazm,
      },
    ],
  },
  {
    id: "muthanna",
    ar: "الْمُثَنَّى",
    en: "The dual",
    kind: "noun",
    road: "huruf",
    tip: "Matn: alif in rafʿ, yāʾ in naṣb and khafḍ.",
    routes: [
      {
        castle: "rafa",
        cause: "فاعل / مبتدأ",
        sign: "Alif",
        badge: "ا",
        seal: "far",
        roles: IRAAB_NOUN_ROLES.rafa,
      },
      {
        castle: "nasb",
        cause: "مفعول به",
        sign: "Yāʾ",
        badge: "ي",
        seal: "far",
        roles: IRAAB_NOUN_ROLES.nasb,
      },
      {
        castle: "khafd",
        cause: "حرف جر / إضافة",
        sign: "Yāʾ",
        badge: "ي",
        seal: "far",
        roles: IRAAB_NOUN_ROLES.khafd,
      },
    ],
  },
  {
    id: "mulhaq-muthanna",
    ar: "الْمُلْحَقُ بِالْمُثَنَّى",
    en: "Annexed to the dual (كلا · كلتا…)",
    kind: "noun",
    road: "huruf",
    tip: "Takes the dual’s letter signs — alif in rafʿ, yāʾ in naṣb/khafḍ.",
    routes: [
      {
        castle: "rafa",
        cause: "فاعل / مبتدأ",
        sign: "Alif",
        badge: "ا",
        seal: "far",
        roles: IRAAB_NOUN_ROLES.rafa,
      },
      {
        castle: "nasb",
        cause: "مفعول به",
        sign: "Yāʾ",
        badge: "ي",
        seal: "far",
        roles: IRAAB_NOUN_ROLES.nasb,
      },
      {
        castle: "khafd",
        cause: "حرف جر / إضافة",
        sign: "Yāʾ",
        badge: "ي",
        seal: "far",
        roles: IRAAB_NOUN_ROLES.khafd,
      },
    ],
  },
  {
    id: "jam-mudhakkar",
    ar: "جَمْعُ الْمُذَكَّرِ السَّالِمِ",
    en: "Sound masculine plural",
    kind: "noun",
    road: "huruf",
    tip: "Matn: wāw in rafʿ, yāʾ in naṣb and khafḍ.",
    routes: [
      {
        castle: "rafa",
        cause: "فاعل / مبتدأ",
        sign: "Wāw",
        badge: "و",
        seal: "far",
        roles: IRAAB_NOUN_ROLES.rafa,
      },
      {
        castle: "nasb",
        cause: "مفعول به",
        sign: "Yāʾ",
        badge: "ي",
        seal: "far",
        roles: IRAAB_NOUN_ROLES.nasb,
      },
      {
        castle: "khafd",
        cause: "حرف جر / إضافة",
        sign: "Yāʾ",
        badge: "ي",
        seal: "far",
        roles: IRAAB_NOUN_ROLES.khafd,
      },
    ],
  },
  {
    id: "mulhaq-jam-mudhakkar",
    ar: "الْمُلْحَقُ بِجَمْعِ الْمُذَكَّرِ السَّالِمِ",
    en: "Annexed to sound masc. plural (أولو · عشرون…)",
    kind: "noun",
    road: "huruf",
    tip: "Same letter signs as جمع المذكر السالم.",
    routes: [
      {
        castle: "rafa",
        cause: "فاعل / مبتدأ",
        sign: "Wāw",
        badge: "و",
        seal: "far",
        roles: IRAAB_NOUN_ROLES.rafa,
      },
      {
        castle: "nasb",
        cause: "مفعول به",
        sign: "Yāʾ",
        badge: "ي",
        seal: "far",
        roles: IRAAB_NOUN_ROLES.nasb,
      },
      {
        castle: "khafd",
        cause: "حرف جر / إضافة",
        sign: "Yāʾ",
        badge: "ي",
        seal: "far",
        roles: IRAAB_NOUN_ROLES.khafd,
      },
    ],
  },
  {
    id: "asma-khamsah",
    ar: "الْأَسْمَاءُ الْخَمْسَةُ",
    en: "The five nouns",
    kind: "noun",
    road: "huruf",
    tip: "Matn: أبوك أخوك حموك فوك ذو مال — wāw / alif / yāʾ by castle (in iḍāfah).",
    routes: [
      {
        castle: "rafa",
        cause: "فاعل / مبتدأ",
        sign: "Wāw",
        badge: "و",
        seal: "far",
        roles: IRAAB_NOUN_ROLES.rafa,
      },
      {
        castle: "nasb",
        cause: "مفعول به",
        sign: "Alif",
        badge: "ا",
        seal: "far",
        roles: IRAAB_NOUN_ROLES.nasb,
      },
      {
        castle: "khafd",
        cause: "حرف جر / إضافة",
        sign: "Yāʾ",
        badge: "ي",
        seal: "far",
        roles: IRAAB_NOUN_ROLES.khafd,
      },
    ],
  },
  {
    id: "afal-khamsah",
    ar: "الْأَفْعَالُ الْخَمْسَةُ",
    en: "The five verbs",
    kind: "verb",
    road: "huruf",
    tip: "Matn: يفعلان · تفعلان · يفعلون · تفعلون · تفعلين — ثبوت النون / حذف النون.",
    routes: [
      {
        castle: "rafa",
        cause: "default / no particle",
        sign: "Thubūt al-Nūn",
        badge: "ن",
        seal: "far",
        roles: IRAAB_VERB_ROLES.rafa,
      },
      {
        castle: "nasb",
        cause: "أن · لن · كي…",
        sign: "Ḥadhf al-Nūn",
        badge: "ن̸",
        seal: "far",
        roles: IRAAB_VERB_ROLES.nasb,
      },
      {
        castle: "jazm",
        cause: "لم · لما · لا…",
        sign: "Ḥadhf al-Nūn",
        badge: "ن̸",
        seal: "far",
        roles: IRAAB_VERB_ROLES.jazm,
      },
    ],
  },
  ...IRAAB_MABNI_TRAVELERS,
];

/** Matn order for the traveler picker. */
export const IRAAB_TRAVELER_GROUPS = [
  {
    id: "harakat",
    labelAr: "الْمُعْرَبُ بِالْحَرَكَاتِ",
    labelEn: "Inflected by vowels",
    travelerIds: [
      "ism-mufrad",
      "jam-taksir",
      "jam-muannath",
      "mamnu",
      "mudari-sahih",
      "mutall",
    ],
  },
  {
    id: "huruf",
    labelAr: "الْمُعْرَبُ بِالْحُرُوفِ",
    labelEn: "Inflected by letters",
    travelerIds: [
      "muthanna",
      "mulhaq-muthanna",
      "jam-mudhakkar",
      "mulhaq-jam-mudhakkar",
      "asma-khamsah",
      "afal-khamsah",
    ],
  },
  {
    id: "mabni",
    labelAr: "الْمَبْنِيَّاتُ",
    labelEn: "Indeclinables",
    travelerIds: IRAAB_MABNI_TRAVELER_IDS,
  },
];

export const IRAAB_PATTERNS = [
  {
    title: "Yāʾ three times",
    text: "Under Khafḍ, Yāʾ stamps Asmāʾ Khamsah, Muthannā, and Jamʿ Mudhakkar — one hall, one badge, three guests.",
  },
  {
    title: "Ḥadhf al-Nūn twice",
    text: "Naṣb and Jazm both drop the ن for Al-Afʿāl al-Khamsah.",
  },
  {
    title: "Alif twice",
    text: "Rafʿ gives Alif to Asmāʾ Khamsah; Naṣb gives Alif to Muthannā.",
  },
  {
    title: "The shape-shifter",
    text: "Jamʿ Muʾannath wears Ḍammah under Rafʿ, then refuses Fatḥah under Naṣb and takes Kasrah.",
  },
];

export const IRAAB_QUESTS = [
  {
    prompt: "كِتَابٌ is the subject (فاعل). Family: Ism Mufrad. Which castle?",
    pick: "castle",
    answer: "rafa",
    explain: "Doing the action → Rafʿ. Ism Mufrad wears aṣliyyah: Ḍammah.",
  },
  {
    prompt: "After فِي — the noun is Ism Mufrad. Which castle?",
    pick: "castle",
    answer: "khafd",
    explain: "A preposition (حرف جر) points the traveler to Khafḍ.",
  },
  {
    prompt: "المعلمان — dual as subject. Which stamp at Rafʿ?",
    pick: "sign",
    castle: "rafa",
    answer: "Alif",
    explain: "Muthannā cannot wear Ḍammah — farʿiyyah Alif.",
  },
  {
    prompt: "أبوك as object (مفعول به). Which stamp?",
    pick: "sign",
    castle: "nasb",
    answer: "Alif",
    explain: "Asmāʾ Khamsah under Naṣb wear Alif.",
  },
  {
    prompt: "لم يكتبْ — which castle did the verb enter?",
    pick: "castle",
    answer: "jazm",
    explain: "لم is a jazm particle → Jazm castle, aṣliyyah Sukūn.",
  },
  {
    prompt: "المسلمون as object. Stamp?",
    pick: "sign",
    castle: "nasb",
    answer: "Yāʾ",
    explain: "Jamʿ Mudhakkar Sālim under Naṣb → Yāʾ.",
  },
  {
    prompt: "المعلمات as object. Stamp?",
    pick: "sign",
    castle: "nasb",
    answer: "Kasrah",
    explain: "Shape-shifter: refuses Fatḥah, wears Kasrah (farʿiyyah).",
  },
  {
    prompt: "يكتبون with لن. What happens to the ن?",
    pick: "sign",
    castle: "nasb",
    answer: "Ḥadhf al-Nūn",
    explain: "Afʿāl Khamsah under Naṣb drop the ن.",
  },
  {
    prompt: "إلى المدرسة — المدرسة is…",
    pick: "castle",
    answer: "khafd",
    explain: "إلى is ḥarf jarr → Khafḍ.",
  },
  {
    prompt:
      "Same traveler كِتَاب — once فاعل, once مفعول, once after في. How many seals this week?",
    pick: "count",
    answer: "3",
    explain:
      "Three errands, three gates, three stamps — one unchanging family: Ism Mufrad.",
  },
  {
    prompt: "يخشى after لم. Stamp?",
    pick: "sign",
    castle: "jazm",
    answer: "Ḥadhf Ḥarf al-ʿIllah",
    explain: "Weak ending cannot sit under sukūn — the weak letter drops.",
  },
  {
    prompt: "أحمدُ after من (ghayr munṣarif). Stamp at Khafḍ?",
    pick: "sign",
    castle: "khafd",
    answer: "Fatḥah",
    explain: "Mamnūʿ min al-ṣarf wears Fatḥah (farʿiyyah) under Khafḍ.",
  },
];

export function displayIraabBadge(badge) {
  if (/^[\u064B-\u0652]$/.test(badge)) return `ـ${badge}`;
  return badge;
}

/** Arabic name for a stamp / door sign (map + hall). */
export function iraabSignAr(sign) {
  const key = String(sign || "").replace(/\*$/, "").trim();
  const map = {
    Ḍammah: "ضَمَّة",
    Fatḥah: "فَتْحَة",
    Kasrah: "كَسْرَة",
    Sukūn: "سُكُون",
    Alif: "أَلِف",
    Wāw: "وَاو",
    "Yāʾ": "يَاء",
    "Thubūt al-Nūn": "ثُبُوتُ النُّون",
    "Ḥadhf al-Nūn": "حَذْفُ النُّون",
    "Ḥadhf Ḥarf al-ʿIllah": "حَذْفُ حَرْفِ الْعِلَّةِ",
    Maḥallī: "مَحَلّ",
    Mahalli: "مَحَلّ",
  };
  return map[key] || key;
}

/** Great roads at the bridge — muʿrab (matn) + mabnī (extension). */
export const IRAAB_MUARAB_ROADS = {
  titleAr: "طُرُقُ الْمَمْلَكَةِ",
  titleEn: "Kingdom roads",
  blurb:
    "Muʿrab travelers take حركات or حروف. Mabnī travelers take باب المحل into the same castles — or stay with لا محل له.",
  roads: [
    {
      id: "harakat",
      ar: "الْمُعْرَبُ بِالْحَرَكَاتِ",
      en: "Inflected by vowels",
      tip: "Aṣliyyah’s road — ḍammah, fatḥah, kasrah, sukūn when the word can hold them.",
      detailAr: "الْأَصْلُ فِي إِعْرَابِ مَا يُعْرَبُ بِالْحَرَكَاتِ، وَمَا خَرَجَ عَنْهُ",
      detailEn: "The original vowel rule — and the exceptions that leave it",
      travelers: IRAAB_TRAVELER_GROUPS[0].travelerIds,
      board: "Vowels · حركات",
    },
    {
      id: "huruf",
      ar: "الْمُعْرَبُ بِالْحُرُوفِ",
      en: "Inflected by letters",
      tip: "Farʿiyyah’s road — Alif, Wāw, Yāʾ, Thubūt/Ḥadhf al-Nūn.",
      detailAr: null,
      detailEn: null,
      travelers: IRAAB_TRAVELER_GROUPS[1].travelerIds,
      board: "Letters · حروف",
      branches: [
        { ar: "إِعْرَابُ الْمُثَنَّى", en: "Dual", traveler: "muthanna" },
        {
          ar: "الْمُلْحَقُ بِالْمُثَنَّى",
          en: "Annexed to dual",
          traveler: "mulhaq-muthanna",
        },
        {
          ar: "إِعْرَابُ جَمْعِ الْمُذَكَّرِ السَّالِمِ",
          en: "Sound masc. plural",
          traveler: "jam-mudhakkar",
        },
        {
          ar: "الْمُلْحَقُ بِجَمْعِ الْمُذَكَّرِ",
          en: "Annexed to sound masc. pl.",
          traveler: "mulhaq-jam-mudhakkar",
        },
        {
          ar: "إِعْرَابُ الْأَسْمَاءِ الْخَمْسَةِ",
          en: "The five nouns",
          traveler: "asma-khamsah",
        },
        {
          ar: "إِعْرَابُ الْأَفْعَالِ الْخَمْسَةِ",
          en: "The five verbs",
          traveler: "afal-khamsah",
        },
      ],
    },
    {
      id: "mabni",
      ar: "الْمَبْنِيَّاتُ",
      en: "Indeclinables",
      tip: "Ending locked (بناء). Case-place via باب المحل — or لا محل له من الإعراب.",
      detailAr: "مَبْنِيٌّ · فِي مَحَلِّ رَفْعٍ / نَصْبٍ / جَرٍّ · أَوْ لَا مَحَلَّ لَهُ",
      detailEn: "Fixed ending; assigned case-place — or no iʿrāb place",
      travelers: IRAAB_MABNI_TRAVELER_IDS,
      board: "Mabnī · مبني",
    },
  ],
};

/**
 * Map geometry (percent of stage). Hub sits near the stone bridge.
 * Castles placed to match map-four-castles.png.
 */
export const IRAAB_MAP_LAYOUT = {
  hub: { x: 48, y: 58 },
  castles: {
    rafa: { x: 22, y: 22, zoomX: "22%", zoomY: "22%" },
    nasb: { x: 14, y: 68, zoomX: "14%", zoomY: "72%" },
    khafd: { x: 48, y: 36, zoomX: "48%", zoomY: "36%" },
    jazm: { x: 78, y: 62, zoomX: "78%", zoomY: "62%" },
  },
};

/**
 * Wooden board signs = the roles that take each castle’s iʿrāb.
 * `kind: "noun" | "verb"` — travelers only light roads matching their shape.
 */
export const IRAAB_CASTLE_ROAD_SIGNS = {
  rafa: {
    titleAr: "الْمَرْفُوعَاتُ",
    titleEn: "Marfūʿāt",
    blurb: "Roles that take rafʿ — boards on the road into Rafʿ.",
    signs: [
      { id: "fail", kind: "noun", ar: "الْفَاعِلُ", en: "Subject", why: "doer of the verb" },
      {
        id: "naib",
        kind: "noun",
        ar: "نَائِبُ الْفَاعِلِ",
        en: "Deputised subject",
        why: "passive subject",
      },
      {
        id: "mubtada",
        kind: "noun",
        ar: "الْمُبْتَدَأُ",
        en: "Topic",
        why: "starts the nominal sentence",
      },
      {
        id: "khabar",
        kind: "noun",
        ar: "الْخَبَرُ",
        en: "Predicate",
        why: "completes the topic",
      },
      {
        id: "ism-kana",
        kind: "noun",
        ar: "اسْمُ كَانَ",
        en: "Noun of kāna",
        why: "ism of kāna & sisters",
      },
      {
        id: "khabar-inna",
        kind: "noun",
        ar: "خَبَرُ إِنَّ",
        en: "Predicate of inna",
        why: "khabar of inna & sisters",
      },
      {
        id: "tabi-marfu",
        kind: "noun",
        ar: "تَابِعُ الْمَرْفُوعِ",
        en: "Follower of marfūʿ",
        why: "نعت · عطف · توكيد · بدل",
      },
      {
        id: "mudari-raf",
        kind: "verb",
        ar: "مُضَارِعٌ مَرْفُوعٌ",
        en: "Marfūʿ present verb",
        why: "default — no nāṣib or jāzim",
      },
    ],
  },
  nasb: {
    titleAr: "الْمَنْصُوبَاتُ",
    titleEn: "Manṣūbāt",
    blurb: "Accusative roles — boards on the road into Naṣb.",
    signs: [
      {
        id: "mafool",
        kind: "noun",
        ar: "الْمَفْعُولُ بِهِ",
        en: "Direct object",
        why: "receives the action",
      },
      {
        id: "masdar",
        kind: "noun",
        ar: "الْمَصْدَرُ",
        en: "Verbal noun",
        why: "mafʿūl muṭlaq",
      },
      {
        id: "zarf-zaman",
        kind: "noun",
        ar: "ظَرْفُ الزَّمَانِ",
        en: "Time adverb",
        why: "when",
      },
      {
        id: "zarf-makan",
        kind: "noun",
        ar: "ظَرْفُ الْمَكَانِ",
        en: "Place adverb",
        why: "where",
      },
      {
        id: "hal",
        kind: "noun",
        ar: "الْحَالُ",
        en: "Circumstantial",
        why: "state of the doer/object",
      },
      {
        id: "tamyiz",
        kind: "noun",
        ar: "التَّمْيِيزُ",
        en: "Specification",
        why: "clarifies ambiguity",
      },
      {
        id: "mustathna",
        kind: "noun",
        ar: "الْمُسْتَثْنَى",
        en: "Excepted",
        why: "exception",
      },
      {
        id: "ism-la",
        kind: "noun",
        ar: "اسْمُ لَا",
        en: "Noun of lā",
        why: "lā of negation of genus",
      },
      {
        id: "munada",
        kind: "noun",
        ar: "الْمُنَادَى",
        en: "Vocative",
        why: "called-upon",
      },
      {
        id: "mafool-ajl",
        kind: "noun",
        ar: "الْمَفْعُولُ مِنْ أَجْلِهِ",
        en: "Object of purpose",
        why: "why",
      },
      {
        id: "mafool-maah",
        kind: "noun",
        ar: "الْمَفْعُولُ مَعَهُ",
        en: "Object of accompaniment",
        why: "with…",
      },
      {
        id: "khabar-kana",
        kind: "noun",
        ar: "خَبَرُ كَانَ",
        en: "Predicate of kāna",
        why: "khabar of kāna & sisters",
      },
      {
        id: "ism-inna",
        kind: "noun",
        ar: "اسْمُ إِنَّ",
        en: "Noun of inna",
        why: "ism of inna & sisters",
      },
      {
        id: "tabi-mansub",
        kind: "noun",
        ar: "تَابِعُ الْمَنْصُوبِ",
        en: "Follower of manṣūb",
        why: "نعت · عطف · توكيد · بدل",
      },
      {
        id: "mudari-an",
        kind: "verb",
        ar: "مُضَارِعٌ بَعْدَ أَنْ",
        en: "After an",
        why: "nāṣib particle",
      },
      {
        id: "mudari-lan",
        kind: "verb",
        ar: "مُضَارِعٌ بَعْدَ لَنْ",
        en: "After lan",
        why: "will not…",
      },
      {
        id: "mudari-kay",
        kind: "verb",
        ar: "مُضَارِعٌ بَعْدَ كَيْ",
        en: "After kay",
        why: "in order that…",
      },
      {
        id: "mudari-idhan",
        kind: "verb",
        ar: "مُضَارِعٌ بَعْدَ إِذَنْ",
        en: "After idhan",
        why: "then / in that case…",
      },
    ],
  },
  khafd: {
    titleAr: "الْمَخْفُوضَاتُ",
    titleEn: "Makhfūḍāt / Majrūrāt",
    blurb: "Genitive roles — boards on the road into Khafḍ.",
    signs: [
      {
        id: "majroor",
        kind: "noun",
        ar: "اسْمٌ مَجْرُورٌ",
        en: "Noun after preposition",
        why: "governed by ḥarf jarr",
      },
      {
        id: "mudaf",
        kind: "noun",
        ar: "مُضَافٌ إِلَيْهِ",
        en: "Possessed (genitive)",
        why: "second noun of iḍāfah",
      },
      {
        id: "tabi-makhfud",
        kind: "noun",
        ar: "تَابِعُ الْمَخْفُوضِ",
        en: "Follower of makhfūḍ",
        why: "نعت · عطف · توكيد · بدل",
      },
    ],
  },
  jazm: {
    titleAr: "الْمَجْزُومَاتُ",
    titleEn: "Majzūmāt",
    blurb: "Jussive roles — verbs only. Boards on the road into Jazm.",
    signs: [
      {
        id: "after-lam",
        kind: "verb",
        ar: "مُضَارِعٌ بَعْدَ لَمْ",
        en: "After lam",
        why: "did not…",
      },
      {
        id: "after-lamma",
        kind: "verb",
        ar: "مُضَارِعٌ بَعْدَ لَمَّا",
        en: "After lammā",
        why: "not yet…",
      },
      {
        id: "after-lam-amr",
        kind: "verb",
        ar: "مُضَارِعٌ بَعْدَ لَامِ الْأَمْرِ",
        en: "After lām of command",
        why: "let him…",
      },
      {
        id: "after-la-nahy",
        kind: "verb",
        ar: "مُضَارِعٌ بَعْدَ لَا النَّاهِيَةِ",
        en: "After lā of prohibition",
        why: "don’t…!",
      },
      {
        id: "jawab-talab",
        kind: "verb",
        ar: "مُضَارِعٌ فِي جَوَابِ الطَّلَبِ",
        en: "In answer to a request",
        why: "jussive reply",
      },
      {
        id: "after-in",
        kind: "verb",
        ar: "مُضَارِعٌ بَعْدَ إِنْ الشَّرْطِيَّةِ",
        en: "After in of condition",
        why: "if… (jussive)",
      },
    ],
  },
};

/** Roles this traveler may take at a castle (empty = shut / none). */
export function travelerRolesForCastle(traveler, castleId) {
  if (!traveler) return [];
  const route = traveler.routes.find((r) => r.castle === castleId);
  if (!route) return [];
  if (Array.isArray(route.roles)) return route.roles;
  return [];
}

/** Board signs lit for this traveler at a castle. */
export function travelerRoadSigns(traveler, castleId) {
  const pack = IRAAB_CASTLE_ROAD_SIGNS[castleId];
  if (!pack) return [];
  const allowed = new Set(travelerRolesForCastle(traveler, castleId));
  if (!allowed.size) return [];
  return pack.signs.filter((s) => allowed.has(s.id));
}

export const IRAAB_KINGDOM_PATH = "/iraab-kingdom";
export const IRAAB_QUEST_PATH = "/iraab-kingdom/quest";

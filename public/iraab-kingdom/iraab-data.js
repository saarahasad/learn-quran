/* Shared kingdom knowledge — used by index.html and quest.html */
window.IRAAB = {
  castles: {
    rafa: {
      id: "rafa",
      name: "Rafʿ",
      ar: "رفع",
      color: "#2f6a4f",
      bg: "assets/castle-rafa.png",
      aliName: "Ḍammah",
      aliAr: "ضمة",
      aliBadge: "ُ",
      note: "",
      errand: "Doing the action / starting the sentence",
      causes: [
        { ar: "فاعل", en: "Fāʿil", why: "doing the action" },
        { ar: "مبتدأ", en: "Mubtadaʾ", why: "starting the sentence" },
        { ar: "خبر", en: "Khabar", why: "completing the subject" }
      ],
      doors: [
        {
          id: "dammah", kind: "ali", name: "Ḍammah", badge: "ُ", plaque: "أصلية",
          blurb: "Ali — the original mark of Rafʿ. Worn as-is when the word can hold it.",
          worn: [
            { ar: "اسم مفرد", en: "Ism Mufrad" },
            { ar: "جمع تكسير", en: "Jamʿ Taksīr" },
            { ar: "جمع المؤنث السالم", en: "Jamʿ al-Muʾannath al-Sālim" },
            { ar: "فعل مضارع صحيح الآخر", en: "Fiʿl Muḍāriʿ (ṣaḥīḥ al-ākhir)", note: "Nothing attached" }
          ]
        },
        {
          id: "waw", kind: "far", name: "Wāw", badge: "و", plaque: "فرعية",
          blurb: "Farʿūn — steps in when one ḍammah cannot sit on the word.",
          worn: [
            { ar: "الأسماء الخمسة", en: "Al-Asmāʾ al-Khamsah", note: "أبوك، أخوك، حموك، فوك، ذو — always in iḍāfah" },
            { ar: "جمع المذكر السالم", en: "Jamʿ al-Mudhakkar al-Sālim", note: "Sound masculine plural" }
          ]
        },
        {
          id: "alif", kind: "far", name: "Alif", badge: "ا", plaque: "فرعية",
          blurb: "Farʿūn — two bodies cannot hold one ḍammah.",
          worn: [{ ar: "المثنى", en: "Al-Muthannā", note: "The dual" }]
        },
        {
          id: "thubut-nun", kind: "far", name: "Thubūt al-Nūn", badge: "ن", plaque: "فرعية",
          blurb: "Farʿūn — keeps the ن as the mark of Rafʿ.",
          worn: [{ ar: "الأفعال الخمسة", en: "Al-Afʿāl al-Khamsah", note: "Five verbs attached to و / ي / يّ" }]
        }
      ]
    },
    nasb: {
      id: "nasb",
      name: "Naṣb",
      ar: "نصب",
      color: "#3a6ea5",
      bg: "assets/castle-nasb.png",
      aliName: "Fatḥah",
      aliAr: "فتحة",
      aliBadge: "َ",
      note: "",
      errand: "Receiving the action",
      causes: [
        { ar: "مفعول به", en: "Mafʿūl bihi", why: "receiving the action" },
        { ar: "أنْ · لن · كي", en: "Naṣb particles", why: "verbs pulled into Naṣb" },
        { ar: "ظنّ وأخواتها", en: "Ẓanna & sisters", why: "both objects manṣūb" }
      ],
      doors: [
        {
          id: "fathah", kind: "ali", name: "Fatḥah", badge: "َ", plaque: "أصلية",
          blurb: "Ali — the original mark of Naṣb.",
          worn: [
            { ar: "اسم مفرد", en: "Ism Mufrad" },
            { ar: "جمع تكسير", en: "Jamʿ Taksīr" },
            { ar: "فعل مضارع صحيح الآخر", en: "Fiʿl Muḍāriʿ (manṣūb)", note: "When manṣūb by a naṣb particle" }
          ]
        },
        {
          id: "alif", kind: "far", name: "Alif", badge: "ا", plaque: "فرعية",
          blurb: "Farʿūn — Alif under Naṣb belongs to the five nouns.",
          worn: [{ ar: "الأسماء الخمسة", en: "Al-Asmāʾ al-Khamsah" }]
        },
        {
          id: "ya", kind: "far", name: "Yāʾ", badge: "ي", plaque: "فرعية",
          blurb: "Farʿūn — one badge, two guests: dual and sound masculine plural.",
          worn: [
            { ar: "المثنى", en: "Al-Muthannā" },
            { ar: "جمع المذكر السالم", en: "Jamʿ al-Mudhakkar al-Sālim" }
          ]
        },
        {
          id: "kasrah", kind: "far", name: "Kasrah", badge: "ِ", plaque: "فرعية",
          blurb: "Farʿūn — the shape-shifter refuses Fatḥah and insists on Kasrah.",
          worn: [{ ar: "جمع المؤنث السالم", en: "Jamʿ al-Muʾannath al-Sālim", note: "Wears Ali under Rafʿ, Kasrah under Naṣb" }]
        },
        {
          id: "hadhf-nun", kind: "far", name: "Ḥadhf al-Nūn", badge: "ن̸", plaque: "فرعية",
          blurb: "Farʿūn — drops the ن. Opposite fate to Rafʿ’s Thubūt al-Nūn.",
          worn: [{ ar: "الأفعال الخمسة", en: "Al-Afʿāl al-Khamsah", note: "Same five verbs" }]
        }
      ]
    },
    khafd: {
      id: "khafd",
      name: "Khafḍ",
      ar: "خفض",
      color: "#c45c28",
      bg: "assets/castle-khafd.png",
      aliName: "Kasrah",
      aliAr: "كسرة",
      aliBadge: "ِ",
      note: "Noun-only — never touches verbs",
      errand: "Pointed at by a preposition or possession",
      causes: [
        { ar: "في · من · إلى", en: "Ḥarf jarr", why: "a preposition points here" },
        { ar: "على · بـ · لـ", en: "More jar letters", why: "same road, same stamp" },
        { ar: "إضافة", en: "Iḍāfah", why: "possession / of-ness" }
      ],
      doors: [
        {
          id: "kasrah", kind: "ali", name: "Kasrah", badge: "ِ", plaque: "أصلية",
          blurb: "Ali — the original mark of Khafḍ.",
          worn: [
            { ar: "اسم مفرد", en: "Ism Mufrad" },
            { ar: "جمع تكسير", en: "Jamʿ Taksīr" },
            { ar: "جمع المؤنث السالم", en: "Jamʿ al-Muʾannath al-Sālim" }
          ]
        },
        {
          id: "ya", kind: "far", name: "Yāʾ", badge: "ي", plaque: "فرعية",
          blurb: "Farʿūn — one hall, one badge, three guests.",
          worn: [
            { ar: "الأسماء الخمسة", en: "Al-Asmāʾ al-Khamsah" },
            { ar: "المثنى", en: "Al-Muthannā" },
            { ar: "جمع المذكر السالم", en: "Jamʿ al-Mudhakkar al-Sālim" }
          ]
        },
        {
          id: "fathah", kind: "far", name: "Fatḥah", badge: "َ", plaque: "فرعية",
          blurb: "Farʿūn — cannot take tanwīn, so a bare kasrah would look wrong.",
          worn: [{ ar: "الممنوع من الصرف", en: "Al-Mamnūʿ min al-Ṣarf (Ghayr Munṣarif)" }]
        }
      ]
    },
    jazm: {
      id: "jazm",
      name: "Jazm",
      ar: "جزم",
      color: "#5a4a86",
      bg: "assets/castle-jazm.png",
      aliName: "Sukūn",
      aliAr: "سكون",
      aliBadge: "ْ",
      note: "Verb-only — never touches nouns",
      errand: "Shifted by a jazm particle (verbs only)",
      causes: [
        { ar: "لم", en: "Lam", why: "did not…" },
        { ar: "لما", en: "Lammā", why: "not yet…" },
        { ar: "لا الناهية", en: "Lā al-nāhiyah", why: "don’t…!" },
        { ar: "إنْ", en: "In al-sharṭiyyah", why: "if… (jussive)" }
      ],
      doors: [
        {
          id: "sukun", kind: "ali", name: "Sukūn", badge: "ْ", plaque: "أصلية",
          blurb: "Ali — the original mark of Jazm.",
          worn: [{ ar: "فعل مضارع صحيح الآخر", en: "Fiʿl Muḍāriʿ ṣaḥīḥ al-ākhir", note: "Preceded by a jazm particle" }]
        },
        {
          id: "hadhf-illah", kind: "far", name: "Ḥadhf Ḥarf al-ʿIllah", badge: "و̸", plaque: "فرعية",
          blurb: "Farʿūn — weak letter drops; و / ي / ا cannot sit under a sukūn.",
          worn: [{ ar: "الأفعال المعتلة الآخر", en: "Al-Afʿāl al-Muʿtallah al-Ākhir" }]
        },
        {
          id: "hadhf-nun", kind: "far", name: "Ḥadhf al-Nūn", badge: "ن̸", plaque: "فرعية",
          blurb: "Farʿūn — drops the ن. Same fate as under Naṣb.",
          worn: [{ ar: "الأفعال الخمسة", en: "Al-Afʿāl al-Khamsah" }]
        }
      ]
    }
  },

  /* Word shapes = travelers' family names. Fixed. Castles change by errand. */
  travelers: [
    {
      id: "ism-mufrad",
      ar: "اسم مفرد",
      en: "Ism Mufrad",
      kind: "noun",
      tip: "The ordinary singular noun — wears Ali in every castle it may enter.",
      routes: [
        { castle: "rafa", cause: "فاعل / مبتدأ", sign: "Ḍammah", badge: "ُ", seal: "ali" },
        { castle: "nasb", cause: "مفعول به", sign: "Fatḥah", badge: "َ", seal: "ali" },
        { castle: "khafd", cause: "حرف جر / إضافة", sign: "Kasrah", badge: "ِ", seal: "ali" }
      ]
    },
    {
      id: "jam-taksir",
      ar: "جمع تكسير",
      en: "Jamʿ Taksīr",
      kind: "noun",
      tip: "Broken plural — same passport as Ism Mufrad: Ali everywhere.",
      routes: [
        { castle: "rafa", cause: "فاعل / مبتدأ", sign: "Ḍammah", badge: "ُ", seal: "ali" },
        { castle: "nasb", cause: "مفعول به", sign: "Fatḥah", badge: "َ", seal: "ali" },
        { castle: "khafd", cause: "حرف جر / إضافة", sign: "Kasrah", badge: "ِ", seal: "ali" }
      ]
    },
    {
      id: "muthanna",
      ar: "المثنى",
      en: "Al-Muthannā",
      kind: "noun",
      tip: "The dual — never wears Ali; always a Farʿūn letter.",
      routes: [
        { castle: "rafa", cause: "فاعل / مبتدأ", sign: "Alif", badge: "ا", seal: "far" },
        { castle: "nasb", cause: "مفعول به", sign: "Yāʾ", badge: "ي", seal: "far" },
        { castle: "khafd", cause: "حرف جر / إضافة", sign: "Yāʾ", badge: "ي", seal: "far" }
      ]
    },
    {
      id: "asma-khamsah",
      ar: "الأسماء الخمسة",
      en: "Al-Asmāʾ al-Khamsah",
      kind: "noun",
      tip: "أبوك أخوك حموك فوك ذو — always in iḍāfah. Letters change by castle.",
      routes: [
        { castle: "rafa", cause: "فاعل / مبتدأ", sign: "Wāw", badge: "و", seal: "far" },
        { castle: "nasb", cause: "مفعول به", sign: "Alif", badge: "ا", seal: "far" },
        { castle: "khafd", cause: "حرف جر / إضافة", sign: "Yāʾ", badge: "ي", seal: "far" }
      ]
    },
    {
      id: "jam-mudhakkar",
      ar: "جمع المذكر السالم",
      en: "Jamʿ al-Mudhakkar al-Sālim",
      kind: "noun",
      tip: "Sound masculine plural — Wāw in Rafʿ, Yāʾ elsewhere.",
      routes: [
        { castle: "rafa", cause: "فاعل / مبتدأ", sign: "Wāw", badge: "و", seal: "far" },
        { castle: "nasb", cause: "مفعول به", sign: "Yāʾ", badge: "ي", seal: "far" },
        { castle: "khafd", cause: "حرف جر / إضافة", sign: "Yāʾ", badge: "ي", seal: "far" }
      ]
    },
    {
      id: "jam-muannath",
      ar: "جمع المؤنث السالم",
      en: "Jamʿ al-Muʾannath al-Sālim",
      kind: "noun",
      tip: "The shape-shifter — Ali in Rafʿ & Khafḍ, but Kasrah (Farʿūn) under Naṣb.",
      routes: [
        { castle: "rafa", cause: "فاعل / مبتدأ", sign: "Ḍammah", badge: "ُ", seal: "ali" },
        { castle: "nasb", cause: "مفعول به", sign: "Kasrah", badge: "ِ", seal: "far" },
        { castle: "khafd", cause: "حرف جر / إضافة", sign: "Kasrah", badge: "ِ", seal: "ali" }
      ]
    },
    {
      id: "mamnu",
      ar: "الممنوع من الصرف",
      en: "Al-Mamnūʿ min al-Ṣarf",
      kind: "noun",
      tip: "Ghayr munṣarif — under Khafḍ wears Fatḥah instead of Kasrah.",
      routes: [
        { castle: "rafa", cause: "فاعل / مبتدأ", sign: "Ḍammah", badge: "ُ", seal: "ali" },
        { castle: "nasb", cause: "مفعول به", sign: "Fatḥah", badge: "َ", seal: "ali" },
        { castle: "khafd", cause: "حرف جر / إضافة", sign: "Fatḥah", badge: "َ", seal: "far" }
      ]
    },
    {
      id: "mudari-sahih",
      ar: "فعل مضارع صحيح الآخر",
      en: "Fiʿl Muḍāriʿ ṣaḥīḥ",
      kind: "verb",
      tip: "Sound-ending present verb — wears Ali in every verbal castle.",
      routes: [
        { castle: "rafa", cause: "default / no particle", sign: "Ḍammah", badge: "ُ", seal: "ali" },
        { castle: "nasb", cause: "أن · لن · كي…", sign: "Fatḥah", badge: "َ", seal: "ali" },
        { castle: "jazm", cause: "لم · لما · لا…", sign: "Sukūn", badge: "ْ", seal: "ali" }
      ]
    },
    {
      id: "afal-khamsah",
      ar: "الأفعال الخمسة",
      en: "Al-Afʿāl al-Khamsah",
      kind: "verb",
      tip: "Five verbs — keep ن in Rafʿ, drop ن in Naṣb and Jazm.",
      routes: [
        { castle: "rafa", cause: "default / no particle", sign: "Thubūt al-Nūn", badge: "ن", seal: "far" },
        { castle: "nasb", cause: "أن · لن · كي…", sign: "Ḥadhf al-Nūn", badge: "ن̸", seal: "far" },
        { castle: "jazm", cause: "لم · لما · لا…", sign: "Ḥadhf al-Nūn", badge: "ن̸", seal: "far" }
      ]
    },
    {
      id: "mutall",
      ar: "الأفعال المعتلة الآخر",
      en: "Al-Afʿāl al-Muʿtallah",
      kind: "verb",
      tip: "Weak-ending verbs — under Jazm the weak letter drops.",
      routes: [
        { castle: "rafa", cause: "default", sign: "Ḍammah*", badge: "ُ", seal: "ali", note: "with adjustments by ending" },
        { castle: "nasb", cause: "أن · لن…", sign: "Fatḥah*", badge: "َ", seal: "ali", note: "alif-ending often drops alif" },
        { castle: "jazm", cause: "لم · لما…", sign: "Ḥadhf Ḥarf al-ʿIllah", badge: "و̸", seal: "far" }
      ]
    }
  ],

  patterns: [
    { title: "Yāʾ three times", text: "Under Khafḍ, Yāʾ stamps Asmāʾ Khamsah, Muthannā, and Jamʿ Mudhakkar — one hall, one badge, three guests." },
    { title: "Ḥadhf al-Nūn twice", text: "Naṣb and Jazm both drop the ن for Al-Afʿāl al-Khamsah." },
    { title: "Alif twice", text: "Rafʿ gives Alif to Asmāʾ Khamsah; Naṣb gives Alif to Muthannā." },
    { title: "The shape-shifter", text: "Jamʿ Muʾannath wears Ḍammah under Rafʿ, then refuses Fatḥah under Naṣb and takes Kasrah." }
  ],

  /* Quest bank — castle + door answers */
  quests: [
    { prompt: "كِتَابٌ is the subject (فاعل). Family: Ism Mufrad. Which castle?", pick: "castle", answer: "rafa", explain: "Doing the action → Rafʿ. Ism Mufrad wears Ali: Ḍammah." },
    { prompt: "After فِي — the noun is Ism Mufrad. Which castle?", pick: "castle", answer: "khafd", explain: "A preposition (حرف جر) points the traveler to Khafḍ." },
    { prompt: "المعلمان — dual as subject. Which stamp at Rafʿ?", pick: "sign", castle: "rafa", answer: "Alif", explain: "Muthannā cannot wear Ḍammah — Farʿūn Alif." },
    { prompt: "أبوك as object (مفعول به). Which stamp?", pick: "sign", castle: "nasb", answer: "Alif", explain: "Asmāʾ Khamsah under Naṣb wear Alif." },
    { prompt: "لم يكتبْ — which castle did the verb enter?", pick: "castle", answer: "jazm", explain: "لم is a jazm particle → Jazm castle, Ali Sukūn." },
    { prompt: "المسلمون as object. Stamp?", pick: "sign", castle: "nasb", answer: "Yāʾ", explain: "Jamʿ Mudhakkar Sālim under Naṣb → Yāʾ." },
    { prompt: "المعلمات as object. Stamp?", pick: "sign", castle: "nasb", answer: "Kasrah", explain: "Shape-shifter: refuses Fatḥah, wears Kasrah (Farʿūn)." },
    { prompt: "يكتبون with لن. What happens to the ن?", pick: "sign", castle: "nasb", answer: "Ḥadhf al-Nūn", explain: "Afʿāl Khamsah under Naṣb drop the ن." },
    { prompt: "إلى المدرسة — المدرسة is…", pick: "castle", answer: "khafd", explain: "إلى is ḥarf jarr → Khafḍ." },
    { prompt: "Same traveler كِتَاب — once فاعل, once مفعول, once after في. How many seals this week?", pick: "count", answer: "3", explain: "Three errands, three gates, three stamps — one unchanging family: Ism Mufrad." },
    { prompt: "يخشى after لم. Stamp?", pick: "sign", castle: "jazm", answer: "Ḥadhf Ḥarf al-ʿIllah", explain: "Weak ending cannot sit under sukūn — the weak letter drops." },
    { prompt: "أحمدُ after من (ghayr munṣarif). Stamp at Khafḍ?", pick: "sign", castle: "khafd", answer: "Fatḥah", explain: "Mamnūʿ min al-ṣarf wears Fatḥah (Farʿūn) under Khafḍ." }
  ]
};

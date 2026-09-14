/** Standalone Ajrumiyyah ↔ Madinah practice map.
 * Lesson numbers match Durus al-Lughah (Dr. V. Abdur Rahim) Books 1–3.
 * No textbook text is copied — titles and practice prompts are original.
 */

export const MADINAH_MAP_PATH = "/madinah-map";

export const MADINAH_BOOKS = [
  { id: 1, lessonCount: 23, title: "Book 1", ar: "الْكِتَابُ الْأَوَّلُ" },
  { id: 2, lessonCount: 31, title: "Book 2", ar: "الْكِتَابُ الثَّانِي" },
  { id: 3, lessonCount: 34, title: "Book 3", ar: "الْكِتَابُ الثَّالِثُ" },
];

export const MADINAH_LESSONS = [
  { book: 1, lesson: 1, ar: "هَذَا", en: "Near demonstrative (this, masculine)" },
  { book: 1, lesson: 2, ar: "ذَلِكَ", en: "Far demonstrative (that, masculine)" },
  { book: 1, lesson: 3, ar: "ال", en: "Definite article; sun and moon letters" },
  { book: 1, lesson: 4, ar: "حَرْفُ الْجَرِّ", en: "Prepositions; pronouns; first past verbs" },
  { book: 1, lesson: 5, ar: "الْإِضَافَةُ", en: "Possessive construction; تحت; vocative يا" },
  { book: 1, lesson: 6, ar: "هَذِهِ", en: "Near demonstrative (feminine); لِ" },
  { book: 1, lesson: 7, ar: "تِلْكَ", en: "Far demonstrative (feminine)" },
  { book: 1, lesson: 8, ar: "الْبَدَلُ", en: "Apposition; أمام / خلف; جلس" },
  { book: 1, lesson: 9, ar: "النَّعْتُ", en: "Adjective agreement; الَّذِي; عِنْدَ" },
  { book: 1, lesson: 10, ar: "الْأَسْمَاءُ الْخَمْسَةُ", en: "Dual pronouns; أب / أخ; عِنْدِي vs لِي" },
  { book: 1, lesson: 11, ar: "الْمَفْعُولُ بِهِ", en: "فيه / فيها; أحبّ; direct object" },
  { book: 1, lesson: 12, ar: "أَنْتِ", en: "Feminine you; feminine past; الَّتِي" },
  { book: 1, lesson: 13, ar: "الْجَمْعُ", en: "Sound and broken plurals; هؤلاء / هم / هن" },
  { book: 1, lesson: 14, ar: "أَنْتُمْ", en: "أنتم / أنا / نحن and attached pronouns" },
  { book: 1, lesson: 15, ar: "أَنْتُنَّ", en: "Feminine plural; قَبْلَ / بَعْدَ" },
  { book: 1, lesson: 16, ar: "جَمْعُ غَيْرِ الْعَاقِلِ", en: "Non-rational plurals treated as feminine" },
  { book: 1, lesson: 17, ar: "تَتِمَّةُ الْجَمْعِ", en: "More broken-plural patterns" },
  { book: 1, lesson: 18, ar: "الْمُثَنَّى", en: "Dual; كَمْ + tamyīz" },
  { book: 1, lesson: 19, ar: "الْعَدَدُ", en: "Numbers 1–10 with masculine nouns" },
  { book: 1, lesson: 20, ar: "الْعَدَدُ", en: "Numbers 1–10 with feminine nouns" },
  { book: 1, lesson: 21, ar: "مُرَاجَعَةٌ", en: "Revision / test lesson" },
  { book: 1, lesson: 22, ar: "الْمَمْنُوعُ مِنَ الصَّرْفِ", en: "Diptotes" },
  { book: 1, lesson: 23, ar: "إِعْرَابُ الْمَمْنُوعِ", en: "Case endings of diptotes" },

  { book: 2, lesson: 1, ar: "إِنَّ", en: "Inna and sisters; ذو" },
  { book: 2, lesson: 2, ar: "لَيْسَ", en: "Laysa; comparison with inna and kāna" },
  { book: 2, lesson: 3, ar: "أَفْعَلُ التَّفْضِيلِ", en: "Comparative; lākinna / kaʾanna; numbers 11–20" },
  { book: 2, lesson: 4, ar: "الْفِعْلُ الْمَاضِي", en: "Past-tense conjugation" },
  { book: 2, lesson: 5, ar: "الْفَاعِلُ", en: "Doer and direct object" },
  { book: 2, lesson: 6, ar: "ذَهَبْتِ", en: "Feminine past; numbers 11–20 feminine" },
  { book: 2, lesson: 7, ar: "الْإِسْنَادُ", en: "Verb isnād; introduction to kāna" },
  { book: 2, lesson: 8, ar: "مُرَاجَعَةُ الْمَاضِي", en: "Past-tense revision" },
  { book: 2, lesson: 9, ar: "جَمْعُ الْمُؤَنَّثِ", en: "Sound feminine plural in naṣb; munādā as muḍāf" },
  { book: 2, lesson: 10, ar: "الْمُضَارِعُ", en: "Present-tense isnād" },
  { book: 2, lesson: 11, ar: "السِّينُ وَالْمَصْدَرُ", en: "Particle of futurity; masdar; أَمَّا" },
  { book: 2, lesson: 12, ar: "ظَرْفُ الزَّمَانِ", en: "Time adverb / mafʿūl fīhi" },
  { book: 2, lesson: 13, ar: "مُرَاجَعَةُ الْمُضَارِعِ", en: "Present-tense revision" },
  { book: 2, lesson: 14, ar: "فِعْلُ الْأَمْرِ", en: "Command verb" },
  { book: 2, lesson: 15, ar: "لَا النَّاهِيَةُ", en: "Prohibition" },
  { book: 2, lesson: 16, ar: "أَرَادَ", en: "An + masdar muʾawwal; badal" },
  { book: 2, lesson: 17, ar: "لَامُ التَّعْلِيلِ", en: "Purpose lām; an + manṣūb" },
  { book: 2, lesson: 18, ar: "نَصْبُ الْمُضَارِعِ", en: "Manṣūb muḍāriʿ; kull as tawkīd; يَا أَيُّهَا" },
  { book: 2, lesson: 19, ar: "لَنْ", en: "Negative particles mā / lā / lan" },
  { book: 2, lesson: 20, ar: "الْمُثَنَّى", en: "Dual in all three cases" },
  { book: 2, lesson: 21, ar: "لَمْ", en: "Lam / lammā; ism, fiʿl, ḥarf; jumlah types" },
  { book: 2, lesson: 22, ar: "أَحْوَالُ الْمُضَارِعِ", en: "Three moods of the present verb" },
  { book: 2, lesson: 23, ar: "جَمْعُ الْمُذَكَّرِ", en: "Sound masculine plural iʿrāb; tens" },
  { book: 2, lesson: 24, ar: "خُلَاصَةُ الْعَدَدِ", en: "Numbers summary" },
  { book: 2, lesson: 25, ar: "كَانَ", en: "Kāna and sisters; iʿrāb of أب / أخ" },
  { book: 2, lesson: 26, ar: "الْمِثَالُ", en: "Mithāl weak verbs; masdar patterns" },
  { book: 2, lesson: 27, ar: "الْأَجْوَفُ", en: "Ajwaf verbs; ẓanna takes two objects" },
  { book: 2, lesson: 28, ar: "النَّاقِصُ", en: "Nāqiṣ weak verbs" },
  { book: 2, lesson: 29, ar: "الْمُضَعَّفُ", en: "Doubled verbs" },
  { book: 2, lesson: 30, ar: "إِسْنَادُ الْمُثَنَّى", en: "Verb isnād to dual pronouns" },
  { book: 2, lesson: 31, ar: "النَّعْتُ", en: "The adjective" },

  { book: 3, lesson: 1, ar: "الْإِعْرَابُ وَالْبِنَاءُ", en: "Declension of nouns; moods of verbs; case signs" },
  { book: 3, lesson: 2, ar: "الْوَاوُ", en: "Meanings of wāw, including wāw al-ḥāl" },
  { book: 3, lesson: 3, ar: "الْمَبْنِيُّ لِلْمَجْهُولِ", en: "Passive voice; mafʿūl fīhi; munādā with ال" },
  { book: 3, lesson: 4, ar: "اسْمُ الْفَاعِلِ", en: "Active and passive participles from sound verbs" },
  { book: 3, lesson: 5, ar: "اسْمُ الْمَفْعُولِ", en: "Participles from weak verbs" },
  { book: 3, lesson: 6, ar: "اسْمُ الزَّمَانِ", en: "Nouns of time, place, and instrument" },
  { book: 3, lesson: 7, ar: "الْمَعْرِفَةُ وَالنَّكِرَةُ", en: "Definite and indefinite" },
  { book: 3, lesson: 8, ar: "حَذْفُ النُّونِ", en: "Dropping nūn of dual / sound masc. plural for iḍāfa" },
  { book: 3, lesson: 9, ar: "الْجُمْلَةُ", en: "Nominal vs verbal sentence; masdar muʾawwal" },
  { book: 3, lesson: 10, ar: "الْمُبْتَدَأُ وَالْخَبَرُ", en: "Types of mubtadaʾ and khabar; agreement and order" },
  { book: 3, lesson: 11, ar: "الْمَفْعُولُ فِيهِ", en: "Adverbs of time and place" },
  { book: 3, lesson: 12, ar: "لَامُ الْأَمْرِ", en: "Lām of command; prohibitive lā; one-verb jawāzim" },
  { book: 3, lesson: 13, ar: "إِذَا", en: "Non-jazm conditionals" },
  { book: 3, lesson: 14, ar: "أَدَوَاتُ الشَّرْطِ", en: "Conditionals that make the verb majzūm" },
  { book: 3, lesson: 15, ar: "كَمْ", en: "Interrogative and predicative kam; diminutive" },
  { book: 3, lesson: 16, ar: "الْمُجَرَّدُ وَالْمَزِيدُ", en: "Verb forms; six abwāb; bāb faʿʿala" },
  { book: 3, lesson: 17, ar: "بَابُ أَفْعَلَ", en: "Bāb afʿala; aṣbaḥa" },
  { book: 3, lesson: 18, ar: "اللُّزُومُ وَالتَّعَدِّي", en: "Intransitive vs transitive; taḥdhīr" },
  { book: 3, lesson: 19, ar: "بَابُ فَاعَلَ", en: "Bāb fāʿala" },
  { book: 3, lesson: 20, ar: "مُنْتَهَى الْجُمُوعِ", en: "Ultimate broken plurals" },
  { book: 3, lesson: 21, ar: "بَابُ تَفَعَّلَ", en: "Bāb tafaʿʿala; ikhtiṣāṣ; bāb tafāʿala" },
  { book: 3, lesson: 22, ar: "لَا النَّافِيَةُ لِلْجِنْسِ", en: "Lā that negates the entire genus" },
  { book: 3, lesson: 23, ar: "الْبَدَلُ", en: "Types of badal; inna and sisters recap" },
  { book: 3, lesson: 24, ar: "نُونُ الْوِقَايَةِ", en: "Nūn of protection with inna-sisters" },
  { book: 3, lesson: 25, ar: "لَوْلَا", en: "Lawlā; demonstrative used as naʿt" },
  { book: 3, lesson: 26, ar: "بَابُ افْتَعَلَ", en: "Bāb iftaʿala; ẓanna" },
  { book: 3, lesson: 27, ar: "عَسَى", en: "Incomplete vs complete verbs; ʿasā" },
  { book: 3, lesson: 28, ar: "بَابُ اسْتَفْعَلَ", en: "Bāb istafʿala; nawāṣib of muḍāriʿ; wāw al-ḥāl" },
  { book: 3, lesson: 29, ar: "الْفِعْلُ الرُّبَاعِيُّ", en: "Quadriliteral verb; munādā muḍāf of yāʾ al-mutakallim" },
  { book: 3, lesson: 30, ar: "الضَّمَائِرُ", en: "Pronouns of rafʿ, naṣb, and jarr" },
  { book: 3, lesson: 31, ar: "الْمَفْعُولُ الْمُطْلَقُ", en: "Absolute object; mafʿūl lahu" },
  { book: 3, lesson: 32, ar: "التَّمْيِيزُ وَالْحَالُ", en: "Specification and circumstantial accusative" },
  { book: 3, lesson: 33, ar: "الِاسْتِثْنَاءُ", en: "Exception" },
  { book: 3, lesson: 34, ar: "الْمَمْنُوعُ مِنَ الصَّرْفِ", en: "Diptotes in full" },
];

/** @typedef {"primary" | "extra" | "later"} MadinahRank */

/** @type {Record<string, { note?: string, links: Array<{ book: number, lesson: number, rank: MadinahRank, why: string, do: string }> }>} */
export const AJRUMIYYAH_MADINAH_MAP = {
  kalam: {
    links: [
      {
        book: 1,
        lesson: 1,
        rank: "primary",
        why: "Every sentence is an ism used as speech. You can already sort ism vs the rest.",
        do: "For each line, circle the ism and say: this is kalām because it is a complete useful utterance.",
      },
      {
        book: 1,
        lesson: 4,
        rank: "primary",
        why: "First ḥarf jarr and first fiʿl appear together.",
        do: "Label each word ism, fiʿl, or ḥarf. Point to the sign that told you (tanwīn, قَدْ / تَاء, or a particle that does not accept either).",
      },
      {
        book: 2,
        lesson: 21,
        rank: "later",
        why: "Madinah finally names the three parts of speech and the two jumlah types.",
        do: "Mark every sentence اسمية or فعلية, then list its ism / fiʿl / ḥarf.",
      },
    ],
  },
  irab: {
    links: [
      {
        book: 1,
        lesson: 4,
        rank: "primary",
        why: "First visible case change: the noun after a preposition is majrūr.",
        do: "Write the ending of every noun and say which case it is in (rafʿ or khafḍ).",
      },
      {
        book: 1,
        lesson: 23,
        rank: "extra",
        why: "Diptotes show that iʿrāb endings are not always tanwīn.",
        do: "Compare a triptote and a diptote in jarr: fatḥa vs kasra.",
      },
      {
        book: 2,
        lesson: 22,
        rank: "extra",
        why: "The muḍāriʿ has moods the way the ism has cases.",
        do: "For each present verb, name the mood: marfūʿ, manṣūb, or majzūm — and the particle that caused it.",
      },
      {
        book: 3,
        lesson: 1,
        rank: "later",
        why: "This is Madinah’s dedicated iʿrāb / bināʾ lesson.",
        do: "On one page, list which words are muʿrab and which are mabnī, then name the case or mood of each muʿrab word.",
      },
    ],
  },
  "alamat-irab": {
    links: [
      {
        book: 1,
        lesson: 10,
        rank: "primary",
        why: "أب and أخ use wāw / alif / yāʾ — secondary signs of iʿrāb.",
        do: "Decline أب / أخ in rafʿ, naṣb, and jarr and name the sign (not just the case).",
      },
      {
        book: 1,
        lesson: 18,
        rank: "primary",
        why: "The dual uses alif and yāʾ instead of ḍamma / fatḥa / kasra.",
        do: "Write one dual noun in all three cases and say which sign is original vs secondary.",
      },
      {
        book: 2,
        lesson: 9,
        rank: "extra",
        why: "Sound feminine plural takes kasra in naṣb.",
        do: "Find a sound feminine plural object and explain why its ending is kasra, not fatḥa.",
      },
      {
        book: 2,
        lesson: 20,
        rank: "extra",
        why: "Dual practised in all three cases.",
        do: "Parse every dual: case + sign (alif or yāʾ).",
      },
      {
        book: 2,
        lesson: 23,
        rank: "extra",
        why: "Sound masculine plural: wāw for rafʿ, yāʾ for naṣb and jarr.",
        do: "Decline one sound masculine plural through the three cases.",
      },
      {
        book: 3,
        lesson: 1,
        rank: "later",
        why: "Primary vs secondary endings are laid out as a system.",
        do: "Make a four-row chart (rafʿ, naṣb, khafḍ, jazm) and fill original vs secondary signs from the lesson.",
      },
    ],
  },
  afal: {
    links: [
      {
        book: 1,
        lesson: 4,
        rank: "extra",
        why: "First māḍī verbs (خرج، ذهب).",
        do: "Underline each verb and say: māḍī, mabnī.",
      },
      {
        book: 2,
        lesson: 4,
        rank: "primary",
        why: "Full past-tense isnād.",
        do: "Conjugate one verb through the pronouns, then mark the doer (explicit or hidden).",
      },
      {
        book: 2,
        lesson: 10,
        rank: "primary",
        why: "Muḍāriʿ conjugation begins.",
        do: "Name each verb māḍī or muḍāriʿ. For muḍāriʿ, note that it is muʿrab.",
      },
      {
        book: 2,
        lesson: 14,
        rank: "primary",
        why: "Command verb (amr).",
        do: "Form the amr from a muḍāriʿ you already know and say: amr is mabnī.",
      },
      {
        book: 2,
        lesson: 15,
        rank: "primary",
        why: "Prohibitive lā — a jāzim.",
        do: "Change an amr into a nahy and mark the jazm on the muḍāriʿ.",
      },
      {
        book: 2,
        lesson: 18,
        rank: "primary",
        why: "Nawāṣib: an and lām al-taʿlīl put the muḍāriʿ in naṣb.",
        do: "Circle أن / لِ and write the muḍāriʿ with a fatḥa.",
      },
      {
        book: 2,
        lesson: 22,
        rank: "primary",
        why: "The three moods of the muḍāriʿ in one revision.",
        do: "Sort every present verb into rafʿ / naṣb / jazm and name the particle.",
      },
      {
        book: 3,
        lesson: 12,
        rank: "later",
        why: "Lām of command and the one-verb jawāzim.",
        do: "Find لِ and لَا النَّاهِيَة and parse the majzūm verb.",
      },
      {
        book: 3,
        lesson: 14,
        rank: "later",
        why: "Conditional particles that jazm two verbs.",
        do: "In each conditional, mark the two majzūm verbs (condition and answer).",
      },
    ],
  },
  marfuat: {
    links: [
      {
        book: 3,
        lesson: 1,
        rank: "primary",
        why: "Overview of when a noun is marfūʿ, manṣūb, or majrūr.",
        do: "List every noun on the page under marfūʿāt / manṣūbāt / majrūrāt, then name the role (fāʿil, mubtadaʾ…).",
      },
      {
        book: 1,
        lesson: 1,
        rank: "extra",
        why: "Early marfūʿ practice: mubtadaʾ and khabar.",
        do: "Every هَذَا / noun pair is two marfūʿāt. Name them.",
      },
      {
        book: 2,
        lesson: 5,
        rank: "extra",
        why: "Fāʿil is the main verbal marfūʿ.",
        do: "In each verbal sentence, box the fāʿil and say why it is marfūʿ.",
      },
    ],
  },
  fail: {
    links: [
      {
        book: 2,
        lesson: 5,
        rank: "primary",
        why: "Dedicated fāʿil lesson: a verb has one doer.",
        do: "For every verb, point to its fāʿil (visible noun or hidden pronoun) and give its iʿrāb.",
      },
      {
        book: 1,
        lesson: 4,
        rank: "extra",
        why: "First verbal sentences (خرج، ذهب).",
        do: "Ask: who did the action? That word is the fāʿil.",
      },
      {
        book: 2,
        lesson: 7,
        rank: "extra",
        why: "Isnād shows the hidden fāʿil inside the verb.",
        do: "When there is no noun after the verb, write the hidden pronoun (هو، هي، أنا…).",
      },
    ],
  },
  "naib-fail": {
    note: "Madinah does not treat the deputy-doer until the passive in Book 3.",
    links: [
      {
        book: 3,
        lesson: 3,
        rank: "primary",
        why: "Passive voice: the object stands in for the fāʿil.",
        do: "Rewrite one active sentence as passive. The old mafʿūl becomes nāʾib al-fāʿil, marfūʿ.",
      },
    ],
  },
  "mubtada-khabar": {
    links: [
      {
        book: 1,
        lesson: 1,
        rank: "primary",
        why: "The whole of early Book 1 is nominal sentences.",
        do: "On every line write م for mubtadaʾ and خ for khabar. Both should be marfūʿ.",
      },
      {
        book: 1,
        lesson: 3,
        rank: "extra",
        why: "Definite mubtadaʾ with an indefinite khabar is the default pattern.",
        do: "Check: first noun has ال (mubtadaʾ), second has tanwīn (khabar).",
      },
      {
        book: 2,
        lesson: 14,
        rank: "extra",
        why: "When an indefinite mubtadaʾ is allowed.",
        do: "Find the interrogative (or other justifier) that lets the mubtadaʾ be nakira.",
      },
      {
        book: 3,
        lesson: 10,
        rank: "later",
        why: "Types of mubtadaʾ and khabar, agreement, and word order.",
        do: "Classify each khabar as a single ism, a jumlah, or a shibh-jumlah, then check agreement.",
      },
    ],
  },
  "awamil-mubtada": {
    links: [
      {
        book: 2,
        lesson: 1,
        rank: "primary",
        why: "Inna and sisters: ism manṣūb, khabar marfūʿ.",
        do: "After إنَّ / لَعَلَّ, label اسمها and خبرها and check the endings.",
      },
      {
        book: 2,
        lesson: 2,
        rank: "primary",
        why: "Laysa is a sister of kāna: ism marfūʿ, khabar manṣūb.",
        do: "Parse ليس as you would kāna. Note the optional بِ on the khabar.",
      },
      {
        book: 2,
        lesson: 3,
        rank: "extra",
        why: "More sisters: lākinna and kaʾanna.",
        do: "Same drill as inna: ism in naṣb, khabar in rafʿ.",
      },
      {
        book: 2,
        lesson: 25,
        rank: "primary",
        why: "Kāna and sisters in full.",
        do: "For each كانَ sentence, mark اسم كان (rafʿ) and خبر كان (naṣb).",
      },
      {
        book: 2,
        lesson: 27,
        rank: "extra",
        why: "Ẓanna takes two objects — the ẓanna family of nawāsikh.",
        do: "Find the two objects after ظنّ and give both iʿrāb (manṣūb).",
      },
    ],
  },
  naat: {
    links: [
      {
        book: 1,
        lesson: 9,
        rank: "primary",
        why: "First dedicated adjective lesson.",
        do: "Pair naʿt with manʿūt. They must match in iʿrāb, definiteness, number, and gender.",
      },
      {
        book: 2,
        lesson: 31,
        rank: "primary",
        why: "Full adjective chapter at the end of Book 2.",
        do: "In each description, name the manʿūt first, then the naʿt, then the shared case.",
      },
    ],
  },
  atf: {
    note: "ʿAṭf is not a standalone Madinah chapter. Practise it wherever و / ف / ثُمَّ join two words of the same iʿrāb.",
    links: [
      {
        book: 3,
        lesson: 1,
        rank: "primary",
        why: "Tawābiʿ are introduced with iʿrāb: the follower takes the case of the followed.",
        do: "When two nouns are joined by و, give them the same case and name the first as matbūʿ.",
      },
      {
        book: 3,
        lesson: 31,
        rank: "extra",
        why: "Lā used as a conjunction (ʿaṭf).",
        do: "Parse لا العاطفة: the second noun follows the first in case.",
      },
    ],
  },
  tawkid: {
    note: "Madinah practises tawkīd mainly with كُلّ, not the full Ajrumiyyah list (نفس، عين، كلا…).",
    links: [
      {
        book: 2,
        lesson: 18,
        rank: "primary",
        why: "كُلّ as tawkīd matching the muʾakkad.",
        do: "In قرأتُ الكتابَ كلَّهُ, mark الكتاب as muʾakkad and كلّ as tawkīd — same case, with a matching pronoun.",
      },
    ],
  },
  badal: {
    links: [
      {
        book: 1,
        lesson: 8,
        rank: "primary",
        why: "First dedicated badal lesson.",
        do: "Find the two nouns that name the same thing. The second is badal and copies the iʿrāb of the first.",
      },
      {
        book: 2,
        lesson: 16,
        rank: "extra",
        why: "More badal in running sentences (أين أخوك الحسين).",
        do: "Ask: is the second noun identifying the first? If yes, it is badal, not naʿt.",
      },
      {
        book: 3,
        lesson: 23,
        rank: "later",
        why: "Types of badal are named.",
        do: "Classify each badal (whole, part, inclusion, or wording) after you parse the case.",
      },
    ],
  },
  mansubat: {
    links: [
      {
        book: 3,
        lesson: 1,
        rank: "primary",
        why: "Overview of manṣūbāt next to marfūʿāt and majrūrāt.",
        do: "Collect every manṣūb noun on the page and guess its role before opening the later chapters.",
      },
      {
        book: 2,
        lesson: 5,
        rank: "extra",
        why: "Mafʿūl bihi is the manṣūb you will see most often.",
        do: "After the fāʿil, the next noun in fatḥa is usually the direct object.",
      },
    ],
  },
  "mafool-bih": {
    links: [
      {
        book: 1,
        lesson: 11,
        rank: "primary",
        why: "أحبّ introduces the direct object.",
        do: "Ask: what is loved / seen / taken? That is mafʿūl bihi, manṣūb.",
      },
      {
        book: 2,
        lesson: 5,
        rank: "primary",
        why: "Dedicated object lesson with the fāʿil.",
        do: "For each transitive verb, box fāʿil (rafʿ) and mafʿūl bihi (naṣb).",
      },
    ],
  },
  masdar: {
    links: [
      {
        book: 2,
        lesson: 11,
        rank: "extra",
        why: "Masdar as the verb’s event-noun (خروج، ذهاب).",
        do: "Name the masdar of each verb you conjugate, even if it is not yet mafʿūl muṭlaq.",
      },
      {
        book: 3,
        lesson: 31,
        rank: "primary",
        why: "Dedicated mafʿūl muṭlaq / absolute object.",
        do: "When a masdar is manṣūb after a verb of the same root, parse it as mafʿūl muṭlaq and say whether it emphasises, shows type, or shows number.",
      },
    ],
  },
  zarf: {
    links: [
      {
        book: 1,
        lesson: 5,
        rank: "primary",
        why: "First ẓarf: تحت.",
        do: "The ẓarf is manṣūb; what follows it is muḍāf ilayhi, majrūr.",
      },
      {
        book: 1,
        lesson: 8,
        rank: "extra",
        why: "أمام and خلف.",
        do: "Same drill: ẓarf manṣūb + muḍāf ilayhi majrūr.",
      },
      {
        book: 1,
        lesson: 15,
        rank: "extra",
        why: "قبل and بعد.",
        do: "Parse قَبْلَ / بَعْدَ as ẓarf, then the following noun as majrūr.",
      },
      {
        book: 2,
        lesson: 12,
        rank: "primary",
        why: "Ẓarf zamān called mafʿūl fīhi.",
        do: "In رجع يومَ السبت, mark يوم as mafʿūl fīhi manṣūb.",
      },
      {
        book: 3,
        lesson: 11,
        rank: "later",
        why: "Full adverbs of time and place.",
        do: "Sort each ẓarf into time vs place, then give iʿrāb.",
      },
    ],
  },
  hal: {
    note: "Ḥāl is late in Madinah. Do not expect it in Books 1–2.",
    links: [
      {
        book: 3,
        lesson: 32,
        rank: "primary",
        why: "Dedicated ḥāl lesson.",
        do: "The ḥāl is an indefinite manṣūb answering ‘how?’ about a definite ṣāḥib al-ḥāl.",
      },
      {
        book: 3,
        lesson: 2,
        rank: "extra",
        why: "Wāw al-ḥāl on a following sentence.",
        do: "When و opens a clause describing a state, parse that clause as ḥāl.",
      },
      {
        book: 3,
        lesson: 28,
        rank: "extra",
        why: "Wāw al-ḥāl on a past-tense verbal sentence.",
        do: "Same test: is the و-clause answering ‘in what state?’",
      },
    ],
  },
  tamyiz: {
    links: [
      {
        book: 1,
        lesson: 18,
        rank: "primary",
        why: "كَمْ + tamyīz is the first specification you can parse.",
        do: "After كَمْ, the following nakira manṣūb is tamyīz.",
      },
      {
        book: 1,
        lesson: 19,
        rank: "extra",
        why: "Counted nouns with 11–10 rules are a kind of tamyīz.",
        do: "Name the counted noun and the case Madinah gives it, then say ‘this removes the vagueness of the number.’",
      },
      {
        book: 3,
        lesson: 32,
        rank: "later",
        why: "Dedicated tamyīz chapter (with ḥāl).",
        do: "Ask: does this manṣūb explain a vague measure, number, or noun? If yes, it is tamyīz, not ḥāl.",
      },
    ],
  },
  istithna: {
    note: "Dedicated exception is Book 3 Lesson 33. Book 2 only uses إلَّا in clock-time phrases.",
    links: [
      {
        book: 3,
        lesson: 33,
        rank: "primary",
        why: "Full istithnāʾ lesson.",
        do: "Mark the mustathnā and mustathnā minhu. Note when إلَّا takes naṣb vs when it follows the case of a dropped first noun.",
      },
    ],
  },
  "la-nafiya": {
    note: "Do not confuse this with لا الناهية (prohibition) in Book 2 Lesson 15.",
    links: [
      {
        book: 3,
        lesson: 22,
        rank: "primary",
        why: "Lā nāfiyat al-jins: ism mabnī on fatḥ, khabar marfūʿ.",
        do: "Parse لا طالبَ في الفصل: لا + ism (fatḥ, no tanwīn) + khabar.",
      },
    ],
  },
  munada: {
    links: [
      {
        book: 1,
        lesson: 5,
        rank: "primary",
        why: "First vocative with يا.",
        do: "The word after يا is munādā. If it is a single definite-like name, it is mabnī on ḍamm.",
      },
      {
        book: 2,
        lesson: 9,
        rank: "primary",
        why: "Munādā that is muḍāf is manṣūb (يا ربَّ العالمين).",
        do: "If anything is added after the called noun, switch from ḍamm to naṣb.",
      },
      {
        book: 2,
        lesson: 18,
        rank: "extra",
        why: "يا أيُّهَا.",
        do: "Parse أيّ as munādā and the next definite noun as naʿt.",
      },
    ],
  },
  "mafool-ajli": {
    links: [
      {
        book: 2,
        lesson: 17,
        rank: "extra",
        why: "Lām al-taʿlīl gives purpose with a verb (not yet the masdar-object).",
        do: "Note the meaning ‘in order to…’. The Ajrumiyyah mafʿūl lahu is the masdar version of this idea.",
      },
      {
        book: 3,
        lesson: 31,
        rank: "primary",
        why: "Dedicated mafʿūl lahu / li-ajlihi.",
        do: "A masdar answering ‘why?’ and manṣūb is mafʿūl lahu. Check it shares the same doer and time as the main verb.",
      },
    ],
  },
  "mafool-maah": {
    note: "Madinah barely treats mafʿūl maʿahu. Closest drill is the meanings of wāw in Book 3 Lesson 2.",
    links: [
      {
        book: 3,
        lesson: 2,
        rank: "primary",
        why: "Wāw can mean ‘with’ (maʿiyya), not only ‘and’.",
        do: "If و cannot mean simple ‘and’ and the following noun is manṣūb, try mafʿūl maʿahu. Expect few textbook examples.",
      },
    ],
  },
  majrurat: {
    links: [
      {
        book: 1,
        lesson: 4,
        rank: "primary",
        why: "Jarr by ḥarf (في، على، من، إلى).",
        do: "Circle every preposition and write majrūr on the next ism.",
      },
      {
        book: 1,
        lesson: 5,
        rank: "primary",
        why: "Jarr by iḍāfa: the second noun is always majrūr.",
        do: "Split مضاف / مضاف إليه. Only the second is majrūr; the first takes the case of its job in the sentence.",
      },
      {
        book: 1,
        lesson: 23,
        rank: "extra",
        why: "Diptotes take fatḥa in jarr instead of kasra.",
        do: "When a preposition meets a diptote, the sign is fatḥa — still a majrūr.",
      },
    ],
  },
  tawabi: {
    links: [
      {
        book: 3,
        lesson: 1,
        rank: "primary",
        why: "Tawābiʿ named as a group: they copy the iʿrāb of the matbūʿ.",
        do: "Whenever a second noun copies the first noun’s case, name which follower it is (naʿt, ʿaṭf, tawkīd, or badal).",
      },
      {
        book: 1,
        lesson: 8,
        rank: "extra",
        why: "Badal is your first follower in Book 1.",
        do: "Use it as a tawābiʿ warm-up, then add naʿt from Lesson 9.",
      },
      {
        book: 1,
        lesson: 9,
        rank: "extra",
        why: "Naʿt is the follower you will see most.",
        do: "Manʿūt + naʿt must share iʿrāb — that is the tawābiʿ rule in action.",
      },
    ],
  },
};

export function madinahProgressId(book, lesson) {
  return `${book}:${lesson}`;
}

export function summarizeMadinahProgress(doneIds = []) {
  const done = new Set(doneIds);
  const books = MADINAH_BOOKS.map((book) => {
    const lessons = madinahLessonsForBook(book.id);
    const completed = lessons.filter((row) =>
      done.has(madinahProgressId(row.book, row.lesson)),
    ).length;
    return {
      id: book.id,
      title: book.title,
      ar: book.ar,
      total: lessons.length,
      completed,
      pct: lessons.length ? Math.round((completed / lessons.length) * 100) : 0,
      lessons,
    };
  });
  const total = MADINAH_LESSONS.length;
  const completed = books.reduce((sum, book) => sum + book.completed, 0);
  return {
    total,
    completed,
    remaining: Math.max(0, total - completed),
    pct: total ? Math.round((completed / total) * 100) : 0,
    books,
  };
}

export function madinahMapPath(params = {}) {
  const search = new URLSearchParams();
  if (params.mode) search.set("mode", params.mode);
  if (params.chapter) search.set("chapter", params.chapter);
  if (params.book) search.set("book", String(params.book));
  if (params.lesson) search.set("lesson", String(params.lesson));
  const q = search.toString();
  return q ? `${MADINAH_MAP_PATH}?${q}` : MADINAH_MAP_PATH;
}

export function madinahLessonMeta(book, lesson) {
  return MADINAH_LESSONS.find((item) => item.book === book && item.lesson === lesson) ?? null;
}

export function madinahLessonsForBook(book) {
  return MADINAH_LESSONS.filter((item) => item.book === book);
}

export function madinahLinksForChapter(chapterId) {
  const entry = AJRUMIYYAH_MADINAH_MAP[chapterId];
  if (!entry) return { note: undefined, links: [] };
  return {
    note: entry.note,
    links: entry.links.map((link) => ({
      ...link,
      meta: madinahLessonMeta(link.book, link.lesson),
    })),
  };
}

export function ajrumiyyahChaptersForLesson(book, lesson) {
  const hits = [];
  for (const [chapterId, entry] of Object.entries(AJRUMIYYAH_MADINAH_MAP)) {
    for (const link of entry.links) {
      if (link.book === book && link.lesson === lesson) {
        hits.push({
          chapterId,
          rank: link.rank,
          why: link.why,
          do: link.do,
          note: entry.note,
        });
      }
    }
  }
  const rankOrder = { primary: 0, extra: 1, later: 2 };
  return hits.sort((a, b) => (rankOrder[a.rank] ?? 9) - (rankOrder[b.rank] ?? 9));
}

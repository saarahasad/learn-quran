import {
  applyQ,
  cloze,
  distinguish,
  listQ,
  matchQ,
  option,
  topicMeta,
} from "./helpers.js";

const ROLES = [
  option("fail", "فَاعِل", "subject of an active verb"),
  option("naib", "نَائِب فَاعِل", "deputy of the subject"),
  option("mubtada", "مُبْتَدَأ", "topic of a nominal sentence"),
  option("khabar", "خَبَر", "predicate of a nominal sentence"),
  option("ism-kana", "اسْم كَانَ", "noun of kāna"),
  option("khabar-kana", "خَبَر كَانَ", "predicate of kāna"),
  option("ism-inna", "اسْم إِنَّ", "noun of inna"),
  option("khabar-inna", "خَبَر إِنَّ", "predicate of inna"),
  option("maf1", "مَفْعُول أَوَّل", "first object of ẓanna"),
  option("maf2", "مَفْعُول ثَانٍ", "second object of ẓanna"),
  option("mafool", "مَفْعُول بِهِ", "direct object"),
];

function meta(chapterId, topicId) {
  return { chapterId, ...topicMeta(chapterId, topicId) };
}

function marfuat() {
  const m = (extra) => ({ ...meta("marfuat", "adad-marfuat"), ...extra });
  return [
    cloze(
      m({
        id: "marfuat-r-seven-count",
        prompt: "Complete the commentary rule.",
        stemAr: "الِاسْمُ يَكُونُ مَرْفُوعًا فِي ______ مَوَاضِعَ.",
        stemEn: "The noun is marfūʿ in ______ positions.",
        options: [
          option("7", "سَبْعَةِ", "seven"),
          option("4", "أَرْبَعَةِ", "four"),
          option("3", "ثَلَاثَةِ", "three"),
          option("6", "سِتَّةِ", "six"),
        ],
        answer: "7",
        explanation:
          "Tuḥfat: the inflectable noun is marfūʿ in seven positions. Mubtadaʾ and khabar are counted separately, so the list is seven even though the matn names them in six phrases.",
      }),
    ),
    cloze(
      m({
        id: "marfuat-r-fail-first",
        prompt: "Why does the author begin with the fāʿil?",
        stemEn: "The fāʿil is listed first because it is ______ of the marfūʿ nouns according to most grammarians.",
        options: [
          option("root", "the root / origin", "الأصل"),
          option("easiest", "the easiest to inflect", ""),
          option("quran", "the most frequent in the Qur’an", ""),
          option("longest", "the longest chapter later on", ""),
        ],
        answer: "root",
        explanation:
          "The commentary (via al-Kafrāwī) starts with the subject because it is the root of the marfūʿ category and its governor is an explicit word.",
      }),
    ),
    listQ(
      m({
        id: "marfuat-r-seven-list",
        prompt: "Select all seven nominative roles named in this chapter.",
        choices: [
          option("fail", "الْفَاعِل", "subject"),
          option("naib", "نَائِب الْفَاعِل / الْمَفْعُول الَّذِي لَمْ يُسَمَّ فَاعِلُهُ", "passive subject"),
          option("mubtada", "الْمُبْتَدَأ", "topic"),
          option("khabar", "الْخَبَر", "predicate"),
          option("ism-kana", "اسْم كَانَ", "noun of kāna"),
          option("khabar-inna", "خَبَر إِنَّ", "predicate of inna"),
          option("tabi", "التَّابِع لِلْمَرْفُوع", "follower of a nominative"),
          option("ism-inna", "اسْم إِنَّ", "noun of inna — this is manṣūb"),
          option("khabar-kana", "خَبَر كَانَ", "predicate of kāna — this is manṣūb"),
          option("mafool", "الْمَفْعُول بِهِ", "direct object — manṣūb"),
        ],
        answer: ["fail", "naib", "mubtada", "khabar", "ism-kana", "khabar-inna", "tabi"],
        explanation:
          "اسْم إِنَّ and خَبَر كَانَ are manṣūb, so they are not among the seven. The follower is one slot covering naʿt, ʿaṭf, tawkīd, and badal.",
      }),
    ),
    listQ(
      m({
        id: "marfuat-r-tawabi-four",
        prompt: "Select the four kinds of التابع للمرفوع.",
        choices: [
          option("naat", "النَّعْت", "adjective"),
          option("atf", "الْعَطْف", "conjunction"),
          option("tawkid", "التَّوْكِيد", "emphasis"),
          option("badal", "الْبَدَل", "substitute"),
          option("tamyiz", "التَّمْيِيز", "specification — not a follower here"),
          option("hal", "الْحَال", "circumstantial — manṣūb"),
        ],
        answer: ["naat", "atf", "tawkid", "badal"],
        explanation: "The matn: وَهُوَ أَرْبَعَةُ أَشْيَاءَ: النَّعْتُ، وَالْعَطْفُ، وَالتَّوْكِيدُ، وَالْبَدَلُ.",
      }),
    ),
    matchQ(
      m({
        id: "marfuat-r-match-roles",
        prompt: "Match each nominative role to its meaning.",
        left: [
          option("fail", "فَاعِل", ""),
          option("naib", "نَائِب فَاعِل", ""),
          option("mubtada", "مُبْتَدَأ", ""),
          option("khabar-inna", "خَبَر إِنَّ", ""),
        ],
        right: [
          option("a", "", "doer of an active verb, marfūʿ"),
          option("b", "", "object promoted when the doer is omitted"),
          option("c", "", "topic of a nominal sentence, bare of operators"),
          option("d", "", "predicate after inna — stays marfūʿ"),
        ],
        pairs: { fail: "a", naib: "b", mubtada: "c", "khabar-inna": "d" },
        explanation: "These four are the backbone of the seven; kāna’s ism and the follower complete the set.",
      }),
    ),
    applyQ(
      m({
        id: "marfuat-r-apply-fail",
        prompt: "What is the highlighted word?",
        sentenceAr: "خَرَجَ بِلَالٌ مِنَ الْمَسْجِدِ",
        sentenceEn: "Bilāl left the mosque.",
        highlight: "بِلَالٌ",
        options: ROLES.slice(0, 6),
        answer: "fail",
        explanation: "A verb (خَرَجَ) precedes بِلَالٌ, and بلال is the doer — fāʿil, not mubtadaʾ.",
      }),
    ),
    applyQ(
      m({
        id: "marfuat-r-apply-naib",
        prompt: "What is the highlighted word?",
        sentenceAr: "كُسِرَ الْقَلَمُ",
        sentenceEn: "The pen was broken.",
        highlight: "الْقَلَمُ",
        options: ROLES.slice(0, 6),
        answer: "naib",
        explanation:
          "كُسِرَ is passive (ḍamma + kasra). The original doer is unnamed; الْقَلَمُ is promoted to rafʿ as nāʾib fāʿil.",
      }),
    ),
    applyQ(
      m({
        id: "marfuat-r-apply-mubtada",
        prompt: "What is the highlighted word?",
        sentenceAr: "الْبَيْتُ وَاسِعٌ",
        sentenceEn: "The house is spacious.",
        highlight: "الْبَيْتُ",
        options: ROLES.slice(0, 6),
        answer: "mubtada",
        explanation: "No verb and no nāsikh. الْبَيْتُ is a marfūʿ noun bare of operators — mubtadaʾ; وَاسِعٌ is its khabar.",
      }),
    ),
    applyQ(
      m({
        id: "marfuat-r-apply-ism-kana",
        prompt: "What is the highlighted word?",
        sentenceAr: "بَاتَ الْحَارِسُ يَقِظًا",
        sentenceEn: "The guard remained awake through the night.",
        highlight: "الْحَارِسُ",
        options: ROLES.slice(0, 8),
        answer: "ism-kana",
        explanation: "بَاتَ is a sister of kāna. It raises its ism (الْحَارِسُ) and nabs its khabar (يَقِظًا).",
      }),
    ),
    applyQ(
      m({
        id: "marfuat-r-apply-khabar-inna",
        prompt: "What is the highlighted word?",
        sentenceAr: "لَعَلَّ الْفَرَجَ قَرِيبٌ",
        sentenceEn: "Perhaps relief is near.",
        highlight: "قَرِيبٌ",
        options: ROLES.slice(0, 8),
        answer: "khabar-inna",
        explanation: "لَعَلَّ is a sister of inna: الْفَرَجَ is manṣūb (ism), قَرِيبٌ stays marfūʿ (khabar inna).",
      }),
    ),
    distinguish(
      m({
        id: "marfuat-r-dist-kana-inna",
        prompt: "Which of these is marfūʿ?",
        stemEn: "After كَانَ the ______ is marfūʿ; after إِنَّ the ______ is marfūʿ.",
        options: [
          option("a", "اسم كان — خبر إنّ", "kāna’s noun and inna’s predicate"),
          option("b", "خبر كان — اسم إنّ", "kāna’s predicate and inna’s noun"),
          option("c", "both nouns of kāna and inna", ""),
          option("d", "both predicates of kāna and inna", ""),
        ],
        answer: "a",
        explanation:
          "This is why اسم كان and خبر إنّ appear in the seven nominatives, while خبر كان and اسم إنّ do not.",
      }),
    ),
  ];
}

function fail() {
  const def = (extra) => ({ ...meta("fail", "bab-fail"), ...extra });
  const aqsam = (extra) => ({ ...meta("fail", "aqsam-fail"), ...extra });
  const mudmar = (extra) => ({ ...meta("fail", "fail-mudmar"), ...extra });
  return [
    cloze(
      def({
        id: "fail-r-def-noun",
        prompt: "The grammatical fāʿil must be a ______.",
        stemAr: "الْفَاعِلُ: هُوَ ______ الْمَرْفُوعُ الْمَذْكُورُ قَبْلَهُ فِعْلُهُ.",
        options: [
          option("ism", "الِاسْمُ", "noun"),
          option("fil", "الْفِعْلُ", "verb"),
          option("harf", "الْحَرْفُ", "particle"),
          option("jumlah", "الْجُمْلَةُ", "sentence"),
        ],
        answer: "ism",
        explanation: "A verb or particle cannot be a fāʿil. The slot is filled by an ism (explicit or paraphrased as a maṣdar).",
      }),
    ),
    cloze(
      def({
        id: "fail-r-not-mubtada",
        prompt: "What does «المذكور قبله فعله» exclude?",
        stemEn: "Requiring that the verb come before the noun excludes the ______, which never has a verb in front of it.",
        options: [
          option("mubtada", "مُبْتَدَأ (and اسم إنّ)", "topic of a nominal sentence"),
          option("naib", "نَائِب فَاعِل", "deputy"),
          option("mafool", "مَفْعُول بِهِ", "object"),
          option("tamyiz", "تَمْيِيز", "specification"),
        ],
        answer: "mubtada",
        explanation:
          "Tuḥfat: that clause also excludes اسم كان — a verb precedes it, but it is not that noun’s own action-verb.",
      }),
    ),
    matchQ(
      def({
        id: "fail-r-match-def",
        prompt: "Match the definition piece to what it rules out.",
        left: [
          option("ism", "«الِاسْمُ»", ""),
          option("raf", "«الْمَرْفُوعُ»", ""),
          option("verb", "«الْمَذْكُورُ قَبْلَهُ فِعْلُهُ»", ""),
        ],
        right: [
          option("a", "", "excludes verbs and particles"),
          option("b", "", "excludes manṣūb and majrūr nouns"),
          option("c", "", "excludes mubtadaʾ and ism inna (no verb in front)"),
        ],
        pairs: { ism: "a", raf: "b", verb: "c" },
        explanation: "Each word of the definition is a filter. All three must be true together.",
      }),
    ),
    applyQ(
      def({
        id: "fail-r-apply-vs-mubtada",
        prompt: "Is the highlighted word a fāʿil?",
        sentenceAr: "سَعِيدٌ كَتَبَ الرِّسَالَةَ",
        sentenceEn: "Saʿīd wrote the letter.",
        highlight: "سَعِيدٌ",
        options: [
          option("fail", "Yes — fāʿil", "the doer"),
          option("mubtada", "No — mubtadaʾ", "topic; the verb comes after it"),
          option("naib", "No — nāʾib fāʿil", "passive"),
          option("ism-kana", "No — ism kāna", ""),
        ],
        answer: "mubtada",
        explanation:
          "The verb كَتَبَ comes after سَعِيدٌ. A fāʿil is mentioned after its verb. Here سَعِيدٌ is mubtadaʾ and كَتَبَ الرِّسَالَةَ is a verbal-sentence khabar. Contrast: كَتَبَ سَعِيدٌ الرِّسَالَةَ.",
      }),
    ),
    applyQ(
      def({
        id: "fail-r-apply-true-fail",
        prompt: "What is the highlighted word?",
        sentenceAr: "كَتَبَ سَعِيدٌ الرِّسَالَةَ",
        sentenceEn: "Saʿīd wrote the letter.",
        highlight: "سَعِيدٌ",
        options: ROLES.slice(0, 6),
        answer: "fail",
        explanation: "Verb first, then the doer. الرِّسَالَةَ is the object (manṣūb), not the fāʿil.",
      }),
    ),
    listQ(
      aqsam({
        id: "fail-r-two-kinds",
        prompt: "The fāʿil splits into which two kinds?",
        choices: [
          option("zahir", "ظَاهِر", "apparent noun"),
          option("mudmar", "مُضْمَر", "implicit pronoun"),
          option("mufrad", "مُفْرَد", "a kind of khabar, not of fāʿil"),
          option("majhul", "مَجْهُول", "passive — that is nāʾib fāʿil"),
        ],
        answer: ["zahir", "mudmar"],
        explanation: "Apparent = a visible noun. Implicit = a pronoun (attached or, in emphasis, detached).",
      }),
    ),
    listQ(
      aqsam({
        id: "fail-r-zahir-eight",
        prompt: "Select all eight shape-types of the apparent fāʿil (number × gender).",
        choices: [
          option("ms", "مُفْرَد مُذَكَّر", "singular masculine"),
          option("md", "مُثَنًّى مُذَكَّر", "dual masculine"),
          option("mp-sound", "جَمْع مُذَكَّر سَالِم", "sound masc. plural"),
          option("mp-broken", "جَمْع تَكْسِير مُذَكَّر", "broken masc. plural"),
          option("fs", "مُفْرَد مُؤَنَّث", "singular feminine"),
          option("fd", "مُثَنًّى مُؤَنَّث", "dual feminine"),
          option("fp-sound", "جَمْع مُؤَنَّث سَالِم", "sound fem. plural"),
          option("fp-broken", "جَمْع تَكْسِير مُؤَنَّث", "broken fem. plural"),
          option("ism-fil", "اسْم فِعْل", "a verb-like noun — not one of the eight noun-shapes"),
        ],
        answer: ["ms", "md", "mp-sound", "mp-broken", "fs", "fd", "fp-sound", "fp-broken"],
        explanation:
          "Four number-types × two genders = eight. Each also pairs with māḍī or muḍāriʿ. Duals and the sound masculine plural take a letter (alif / wāw) instead of ḍammah.",
      }),
    ),
    cloze(
      aqsam({
        id: "fail-r-damma-letters",
        prompt: "Which apparent fāʿils take a letter instead of ḍammah?",
        stemEn: "The duals and the sound masculine plural are marfūʿ with ______, not an explicit ḍammah.",
        options: [
          option("letters", "a letter deputising for ḍammah (alif / wāw)", "نيابة بالحروف"),
          option("kasra", "kasrah", ""),
          option("sukun", "sukūn", ""),
          option("fatha", "fatḥah", ""),
        ],
        answer: "letters",
        explanation: "Five of the eight take explicit ḍammah; three take letters. Implicit ḍammah appears on words like الْفَتَى / الْقَاضِي.",
      }),
    ),
    applyQ(
      aqsam({
        id: "fail-r-apply-dual",
        prompt: "What is الطَّالِبَانِ?",
        sentenceAr: "نَجَحَ الطَّالِبَانِ",
        sentenceEn: "The two students succeeded.",
        highlight: "الطَّالِبَانِ",
        options: [
          option("fail", "فَاعِل ظَاهِر (مثنى)", "apparent dual subject"),
          option("mubtada", "مُبْتَدَأ", ""),
          option("naib", "نَائِب فَاعِل", ""),
          option("khabar", "خَبَر", ""),
        ],
        answer: "fail",
        explanation: "نَجَحَ is an active māḍī; الطَّالِبَانِ is the dual apparent doer, marfūʿ with alif.",
      }),
    ),
    applyQ(
      aqsam({
        id: "fail-r-apply-fem",
        prompt: "What is فَاطِمَةُ?",
        sentenceAr: "تَقْرَأُ فَاطِمَةُ الْقُرْآنَ",
        sentenceEn: "Fāṭimah recites the Qur’an.",
        highlight: "فَاطِمَةُ",
        options: ROLES.slice(0, 5),
        answer: "fail",
        explanation: "Muḍāriʿ + feminine apparent doer. The tāʾ on تَقْرَأُ agrees with a feminine fāʿil.",
      }),
    ),
    cloze(
      mudmar({
        id: "fail-r-mudmar-12",
        prompt: "How many implicit-fāʿil forms does the matn list?",
        options: [
          option("12", "اثْنَا عَشَرَ", "twelve"),
          option("10", "عَشَرَةٌ", "ten"),
          option("14", "أَرْبَعَةَ عَشَرَ", "fourteen"),
          option("8", "ثَمَانِيَةٌ", "eight"),
        ],
        answer: "12",
        explanation: "Two for the speaker, five for the addressee, five for the absent — 2+5+5=12.",
      }),
    ),
    listQ(
      mudmar({
        id: "fail-r-mudmar-split",
        prompt: "How is the set of twelve built?",
        choices: [
          option("2", "اثْنَانِ لِلْمُتَكَلِّمِ", "two first-person"),
          option("5a", "خَمْسَةٌ لِلْمُخَاطَبِ", "five second-person"),
          option("5b", "خَمْسَةٌ لِلْغَائِبِ", "five third-person"),
          option("6", "سِتَّةٌ لِلْمُؤَنَّثِ فَقَطْ", "not how the book splits them"),
        ],
        answer: ["2", "5a", "5b"],
        explanation: "First person: أنا / نحن only. Second and third each have singular m/f, dual, plural m/f.",
      }),
    ),
    applyQ(
      mudmar({
        id: "fail-r-apply-tu",
        prompt: "Where is the fāʿil in فَهِمْتُ الْمَسْأَلَةَ?",
        sentenceAr: "فَهِمْتُ الْمَسْأَلَةَ",
        sentenceEn: "I understood the question.",
        highlight: "تُ",
        options: [
          option("fail", "فَاعِل مُضْمَر (تُ = أنا)", "attached ‘I’"),
          option("mubtada", "مُبْتَدَأ", ""),
          option("naib", "نَائِب فَاعِل", ""),
          option("mafool", "الْمَسْأَلَةَ is the fāʿil", ""),
        ],
        answer: "fail",
        explanation: "The تُ of فَهِمْتُ is the implicit fāʿil (I). الْمَسْأَلَةَ is the object.",
      }),
    ),
    applyQ(
      mudmar({
        id: "fail-r-apply-waw",
        prompt: "What is the doer in سَمِعُوا النِّدَاءَ?",
        sentenceAr: "سَمِعُوا النِّدَاءَ",
        sentenceEn: "They heard the call.",
        highlight: "وْا",
        options: [
          option("fail", "فَاعِل مُضْمَر (واو الجماعة = هُمْ)", "they (m.)"),
          option("naib", "نَائِب فَاعِل", ""),
          option("mubtada", "مُبْتَدَأ", ""),
          option("harf", "حَرْف, not a fāʿil", ""),
        ],
        answer: "fail",
        explanation: "The wāw of the masculine plural is the implicit fāʿil. النِّدَاءَ is the object.",
      }),
    ),
    distinguish(
      mudmar({
        id: "fail-r-dist-attached",
        prompt: "How does an implicit fāʿil usually appear?",
        options: [
          option("a", "Attached to the verb (ضَرَبْتُ، ضَرَبُوا)", "muttaṣil"),
          option("b", "Always a detached pronoun (أَنَا، هُمْ) before the verb", "that is mubtadaʾ style"),
          option("c", "As tanwīn on the verb", ""),
          option("d", "It is never written at all, even as a letter", ""),
        ],
        answer: "a",
        explanation:
          "The implicit fāʿil is typically attached. A detached pronoun before the verb is usually a mubtadaʾ (أَنَا ضَرَبْتُ is topic + verbal khabar, with another attached fāʿil on the verb).",
      }),
    ),
  ];
}

function naib() {
  const n = (extra) => ({ ...meta("naib-fail", "naib-fail"), ...extra });
  const t = (extra) => ({ ...meta("naib-fail", "taghyir-fil"), ...extra });
  const a = (extra) => ({ ...meta("naib-fail", "aqsam-naib"), ...extra });
  return [
    cloze(
      n({
        id: "naib-r-other-name",
        prompt: "What other name does the commentary prefer for this chapter’s topic?",
        options: [
          option("naib", "النَّائِبُ عَنِ الْفَاعِلِ", "deputy of the subject"),
          option("mafool", "الْمَفْعُولُ الْمُطْلَقُ", "absolute object"),
          option("naib-mafool", "نَائِبُ الْمَفْعُولِ", ""),
          option("fail-majhul", "الْفَاعِلُ الْمَجْهُولُ", ""),
        ],
        answer: "naib",
        explanation:
          "Ibn Ājurrūm says الْمَفْعُولُ الَّذِي لَمْ يُسَمَّ فَاعِلُهُ. Later grammarians commonly say النَّائِبُ عَنِ الْفَاعِلِ.",
      }),
    ),
    cloze(
      n({
        id: "naib-r-object-raises",
        prompt: "When the doer is dropped, the original object ______.",
        options: [
          option("raf", "becomes marfūʿ and takes the fāʿil’s rulings", "يُصَيَّرُ مَرْفُوعًا"),
          option("stays", "stays manṣūb", ""),
          option("jarr", "becomes majrūr", ""),
          option("deleted", "is also deleted", ""),
        ],
        answer: "raf",
        explanation:
          "It must come after the verb; the verb is feminised if this deputy is feminine; and it is now called nāʾib fāʿil.",
      }),
    ),
    applyQ(
      n({
        id: "naib-r-apply-passive",
        prompt: "What is الْبَابُ?",
        sentenceAr: "فُتِحَ الْبَابُ",
        sentenceEn: "The door was opened.",
        highlight: "الْبَابُ",
        options: ROLES.slice(0, 6),
        answer: "naib",
        explanation: "فُتِحَ is māḍī majhūl. No doer is named; الْبَابُ has been raised from object to deputy.",
      }),
    ),
    applyQ(
      n({
        id: "naib-r-apply-not-fail",
        prompt: "What is الْوَلَدُ?",
        sentenceAr: "أَكَلَ الْوَلَدُ التُّفَّاحَةَ",
        sentenceEn: "The boy ate the apple.",
        highlight: "الْوَلَدُ",
        options: ROLES.slice(0, 6),
        answer: "fail",
        explanation: "Active verb, named doer. التُّفَّاحَةَ is still the object. Passive counterpart: أُكِلَتِ التُّفَّاحَةُ.",
      }),
    ),
    distinguish(
      n({
        id: "naib-r-dist-active-passive",
        prompt: "Compare the pair. Who is marfūʿ in each?",
        stemAr: "أَكَلَ الْوَلَدُ التُّفَّاحَةَ  /  أُكِلَتِ التُّفَّاحَةُ",
        stemEn: "The boy ate the apple. / The apple was eaten.",
        options: [
          option("a", "فاعل: الولد — نائب فاعل: التفاحة", "doer vs promoted object"),
          option("b", "Both الولد and التفاحة are fāʿil", ""),
          option("c", "Both are nāʾib fāʿil", ""),
          option("d", "التفاحة is fāʿil in both sentences", ""),
        ],
        answer: "a",
        explanation: "Same event, two voices. Passive hides the boy and promotes the apple into rafʿ.",
      }),
    ),
    cloze(
      t({
        id: "naib-r-madi-vowels",
        prompt: "Passive māḍī vowel change:",
        stemAr: "إِنْ كَانَ الْفِعْلُ مَاضِيًا: ______.",
        options: [
          option("ok", "ضُمَّ أَوَّلُهُ وَكُسِرَ مَا قَبْلَ آخِرِهِ", "ḍaraba → ḍuriba"),
          option("mud", "ضُمَّ أَوَّلُهُ وَفُتِحَ مَا قَبْلَ آخِرِهِ", "that is muḍāriʿ"),
          option("kas", "كُسِرَ أَوَّلُهُ وَضُمَّ آخِرُهُ", ""),
          option("fat", "فُتِحَ أَوَّلُهُ وَكُسِرَ آخِرُهُ", ""),
        ],
        answer: "ok",
        explanation: "قَطَعَ → قُطِعَ. First letter ḍamma, letter before last kasra.",
      }),
    ),
    cloze(
      t({
        id: "naib-r-mudari-vowels",
        prompt: "Passive muḍāriʿ vowel change:",
        options: [
          option("ok", "ضُمَّ أَوَّلُهُ وَفُتِحَ مَا قَبْلَ آخِرِهِ", "yaqṭaʿu → yuqṭaʿu"),
          option("madi", "ضُمَّ أَوَّلُهُ وَكُسِرَ مَا قَبْلَ آخِرِهِ", "that is māḍī"),
          option("suk", "يُسَكَّنُ آخِرُهُ", ""),
          option("same", "no change — only the object changes", ""),
        ],
        answer: "ok",
        explanation: "يَقْطَعُ → يُقْطَعُ. First letter ḍamma, letter before last fatḥa.",
      }),
    ),
    applyQ(
      t({
        id: "naib-r-apply-mudari",
        prompt: "What is الدَّرْسُ?",
        sentenceAr: "يُكْتَبُ الدَّرْسُ",
        sentenceEn: "The lesson is being written.",
        highlight: "الدَّرْسُ",
        options: ROLES.slice(0, 6),
        answer: "naib",
        explanation: "يُكْتَبُ is muḍāriʿ majhūl (ḍamma + fatḥa before last). الدَّرْسُ is the deputy.",
      }),
    ),
    applyQ(
      t({
        id: "naib-r-apply-fem",
        prompt: "What is الضَّيْفَةُ?",
        sentenceAr: "أُكْرِمَتِ الضَّيْفَةُ",
        sentenceEn: "The (female) guest was honoured.",
        highlight: "الضَّيْفَةُ",
        options: ROLES.slice(0, 6),
        answer: "naib",
        explanation:
          "Passive māḍī أُكْرِمَتْ takes ت because the deputy is feminine — one of the fāʿil-rulings transferred to the deputy.",
      }),
    ),
    listQ(
      a({
        id: "naib-r-two-kinds",
        prompt: "Nāʾib al-fāʿil, like the fāʿil, is of which kinds?",
        choices: [
          option("zahir", "ظَاهِر", "apparent"),
          option("mudmar", "مُضْمَر", "implicit"),
          option("mufrad", "مُفْرَد / غَيْر مُفْرَد", "that split belongs to khabar"),
        ],
        answer: ["zahir", "mudmar"],
        explanation: "The commentary: the implicit further splits into attached and detached, twelve forms as in باب الفاعل.",
      }),
    ),
    applyQ(
      a({
        id: "naib-r-apply-implicit",
        prompt: "Where is the deputy in أُكْرِمْتُ?",
        sentenceAr: "أُكْرِمْتُ",
        sentenceEn: "I was honoured.",
        highlight: "تُ",
        options: [
          option("naib", "نَائِب فَاعِل مُضْمَر (أنا)", "I — on a passive verb"),
          option("fail", "فَاعِل مُضْمَر", "that would need an active verb"),
          option("mubtada", "مُبْتَدَأ", ""),
          option("mafool", "مَفْعُول بِهِ still manṣūb", ""),
        ],
        answer: "naib",
        explanation: "Same تُ as in أَكْرَمْتُ, but the verb is passive, so the pronoun is nāʾib fāʿil, not fāʿil.",
      }),
    ),
  ];
}

function mubtada() {
  const mk = (extra) => ({ ...meta("mubtada-khabar", "mubtada-khabar"), ...extra });
  const aq = (extra) => ({ ...meta("mubtada-khabar", "mubtada-aqsam"), ...extra });
  const kh = (extra) => ({ ...meta("mubtada-khabar", "aqsam-khabar"), ...extra });
  return [
    cloze(
      mk({
        id: "mk-r-three-conditions",
        prompt: "The mubtadaʾ must be all of the following except:",
        options: [
          option("verb-first", "preceded by its own verb", "that is the fāʿil"),
          option("ism", "a noun", ""),
          option("raf", "marfūʿ", ""),
          option("bare", "bare of explicit operators", "عاري عن العوامل اللفظية"),
        ],
        answer: "verb-first",
        explanation:
          "Tuḥfat lists three: ism, marfūʿ, and empty of verbal operators such as kāna. A verb in front makes it a fāʿil (or ism kāna), not a mubtadaʾ.",
      }),
    ),
    cloze(
      mk({
        id: "mk-r-after-kana-not",
        prompt: "The noun after kāna is called ______, not mubtadaʾ.",
        options: [
          option("ism-kana", "اسْم كَانَ", ""),
          option("fail", "فَاعِل", ""),
          option("naib", "نَائِب فَاعِل", ""),
          option("khabar", "خَبَر", ""),
        ],
        answer: "ism-kana",
        explanation: "Kāna is an explicit operator, so the original topic loses the name mubtadaʾ.",
      }),
    ),
    matchQ(
      mk({
        id: "mk-r-match-defs",
        prompt: "Match term to definition.",
        left: [
          option("mubtada", "الْمُبْتَدَأُ", ""),
          option("khabar", "الْخَبَرُ", ""),
        ],
        right: [
          option("a", "", "marfūʿ noun bare of explicit operators"),
          option("b", "", "marfūʿ noun predicated of the topic, completing speech"),
        ],
        pairs: { mubtada: "a", khabar: "b" },
        explanation: "Both are marfūʿ. The khabar is what you say about the mubtadaʾ.",
      }),
    ),
    cloze(
      mk({
        id: "mk-r-agreement",
        prompt: "Mubtadaʾ and khabar must agree in:",
        options: [
          option("ng", "number and gender (if the khabar is mufrad)", "إفراد / تثنية / جمع and تذكير / تأنيث"),
          option("i3rab-only", "iʿrāb only — gender can differ freely", ""),
          option("person", "person (I/you/he) only", ""),
          option("none", "nothing — they never agree", ""),
        ],
        answer: "ng",
        explanation: "مُحَمَّدٌ قَائِمٌ، الْمُحَمَّدَانِ قَائِمَانِ، هِنْدٌ قَائِمَةٌ. A sentence-khabar does not copy the ending, but it still links back.",
      }),
    ),
    applyQ(
      mk({
        id: "mk-r-apply-pair",
        prompt: "What is وَاسِعٌ?",
        sentenceAr: "الْبَيْتُ وَاسِعٌ",
        sentenceEn: "The house is spacious.",
        highlight: "وَاسِعٌ",
        options: ROLES.slice(0, 6),
        answer: "khabar",
        explanation: "Mufrad khabar matching the mubtadaʾ in being singular masculine, both marfūʿ.",
      }),
    ),
    listQ(
      aq({
        id: "mk-r-mubtada-two",
        prompt: "The mubtadaʾ is of two kinds:",
        choices: [
          option("zahir", "ظَاهِر", "a visible noun"),
          option("mudmar", "مُضْمَر", "a detached pronoun"),
          option("mufrad", "مُفْرَد / غَيْر مُفْرَد", "that is the khabar split"),
        ],
        answer: ["zahir", "mudmar"],
        explanation: "If it is a pronoun, it must be detached and prominent: أَنَا، نَحْنُ، أَنْتَ… not a تُ stuck on a verb.",
      }),
    ),
    listQ(
      aq({
        id: "mk-r-pronouns-select",
        prompt: "Which of these can be an implicit mubtadaʾ?",
        choices: [
          option("ana", "أَنَا", "I"),
          option("nahnu", "نَحْنُ", "we"),
          option("huwa", "هُوَ", "he"),
          option("hunna", "هُنَّ", "they f."),
          option("tu", "تُ in كَتَبْتُ", "that is an attached fāʿil, not a mubtadaʾ"),
          option("waw", "وُوا in كَتَبُوا", "attached fāʿil"),
        ],
        answer: ["ana", "nahnu", "huwa", "hunna"],
        explanation: "Twelve detached pronouns. Attached verb-pronouns belong to fāʿil / nāʾib, not this list.",
      }),
    ),
    applyQ(
      aq({
        id: "mk-r-apply-pronoun",
        prompt: "What is نَحْنُ?",
        sentenceAr: "نَحْنُ طُلَّابٌ",
        sentenceEn: "We are students.",
        highlight: "نَحْنُ",
        options: [
          option("mubtada", "مُبْتَدَأ مُضْمَر", "detached pronoun topic"),
          option("fail", "فَاعِل", ""),
          option("naib", "نَائِب فَاعِل", ""),
          option("khabar", "خَبَر", ""),
        ],
        answer: "mubtada",
        explanation: "Detached نَحْنُ is the implicit mubtadaʾ; طُلَّابٌ is a mufrad khabar.",
      }),
    ),
    listQ(
      kh({
        id: "mk-r-khabar-four-compound",
        prompt: "Select the four kinds of غير المفرد (compound khabar) from the matn.",
        choices: [
          option("jarr", "الْجَارّ وَالْمَجْرُور", "prepositional phrase"),
          option("zarf", "الظَّرْف", "adverbial phrase"),
          option("fiil", "الْفِعْل مَعَ فَاعِلِهِ", "verb + its subject"),
          option("jumlah", "الْمُبْتَدَأ مَعَ خَبَرِهِ", "a nested nominal sentence"),
          option("hal", "الْحَال", "not a khabar type here"),
          option("tamyiz", "التَّمْيِيز", "not a khabar type here"),
        ],
        answer: ["jarr", "zarf", "fiil", "jumlah"],
        explanation: "Commentary also groups them as: mufrad, jumlah fiʿliyya, jumlah ismiyya, shibh jumlah (jarr or ẓarf) — five in detail.",
      }),
    ),
    listQ(
      kh({
        id: "mk-r-khabar-five-detail",
        prompt: "In the commentary’s detailed count, the khabar is five types. Select them.",
        choices: [
          option("mufrad", "مُفْرَد", "single word"),
          option("fiiliyya", "جُمْلَة فِعْلِيَّة", "verbal sentence"),
          option("ismiyya", "جُمْلَة اسْمِيَّة", "nominal sentence"),
          option("jarr", "جَارّ وَمَجْرُور", "prep. phrase"),
          option("zarf", "ظَرْف", "adverb"),
          option("tawkid", "تَوْكِيد", "a follower, not a khabar type"),
        ],
        answer: ["mufrad", "fiiliyya", "ismiyya", "jarr", "zarf"],
        explanation: "Ghayr mufrad = sentence (two kinds) + quasi-sentence (two kinds).",
      }),
    ),
    applyQ(
      kh({
        id: "mk-r-apply-jarr",
        prompt: "What kind of khabar is فِي الْحَدِيقَةِ?",
        sentenceAr: "الْكِتَابُ فِي الْحَدِيقَةِ",
        sentenceEn: "The book is in the garden.",
        highlight: "فِي الْحَدِيقَةِ",
        options: [
          option("jarr", "خَبَر شِبْه جُمْلَة (جار ومجرور)", ""),
          option("zarf", "خَبَر شِبْه جُمْلَة (ظرف)", ""),
          option("mufrad", "خَبَر مُفْرَد", ""),
          option("fiiliyya", "جُمْلَة فِعْلِيَّة", ""),
        ],
        answer: "jarr",
        explanation: "فِي is a particle of jarr; الْحَدِيقَةِ is majrūr. This is not a ẓarf (those are words like عِنْدَ / فَوْقَ).",
      }),
    ),
    applyQ(
      kh({
        id: "mk-r-apply-zarf",
        prompt: "What kind of khabar is فَوْقَ الشَّجَرَةِ?",
        sentenceAr: "الْعُصْفُورُ فَوْقَ الشَّجَرَةِ",
        sentenceEn: "The sparrow is above the tree.",
        highlight: "فَوْقَ الشَّجَرَةِ",
        options: [
          option("zarf", "خَبَر شِبْه جُمْلَة (ظرف)", ""),
          option("jarr", "جَارّ وَمَجْرُور", ""),
          option("mufrad", "خَبَر مُفْرَد", ""),
          option("ismiyya", "جُمْلَة اسْمِيَّة", ""),
        ],
        answer: "zarf",
        explanation: "فَوْقَ is an adverb of place. Contrast الْعُصْفُورُ عَلَى الشَّجَرَةِ (jarr-majrūr with عَلَى).",
      }),
    ),
    applyQ(
      kh({
        id: "mk-r-apply-fiiliyya",
        prompt: "What kind of khabar is شَرَحَ الدَّرْسَ?",
        sentenceAr: "الْمُعَلِّمُ شَرَحَ الدَّرْسَ",
        sentenceEn: "The teacher explained the lesson.",
        highlight: "شَرَحَ الدَّرْسَ",
        options: [
          option("fiiliyya", "خَبَر جُمْلَة فِعْلِيَّة", "verb + hidden fāʿil returning to المعلم"),
          option("mufrad", "خَبَر مُفْرَد", ""),
          option("ismiyya", "جُمْلَة اسْمِيَّة", ""),
          option("fail-only", "الْمُعَلِّمُ is fāʿil, not mubtadaʾ", "the verb is after it, so it is mubtadaʾ"),
        ],
        answer: "fiiliyya",
        explanation:
          "الْمُعَلِّمُ is mubtadaʾ. شَرَحَ has a hidden huwa as fāʿil linking back. If it were شَرَحَ الْمُعَلِّمُ الدَّرْسَ, المعلم would be fāʿil.",
      }),
    ),
    applyQ(
      kh({
        id: "mk-r-apply-ismiyya",
        prompt: "What kind of khabar is بَابُهُ مَفْتُوحٌ?",
        sentenceAr: "الْبَيْتُ بَابُهُ مَفْتُوحٌ",
        sentenceEn: "The house — its door is open.",
        highlight: "بَابُهُ مَفْتُوحٌ",
        options: [
          option("ismiyya", "خَبَر جُمْلَة اسْمِيَّة", "inner mubtadaʾ + khabar"),
          option("fiiliyya", "جُمْلَة فِعْلِيَّة", ""),
          option("mufrad", "خَبَر مُفْرَد", ""),
          option("zarf", "ظَرْف", ""),
        ],
        answer: "ismiyya",
        explanation: "بَابُهُ is an inner mubtadaʾ; the هُ returns to الْبَيْتُ (the required rābiṭ). مَفْتُوحٌ is its khabar.",
      }),
    ),
    cloze(
      kh({
        id: "mk-r-rabit",
        prompt: "A sentence-khabar must have a ______ linking it to the mubtadaʾ.",
        options: [
          option("rabit", "رَابِط (usually a returning pronoun, or a demonstrative)", ""),
          option("nasikh", "نَاسِخ such as kāna", ""),
          option("tanwin", "tanwīn on both words", ""),
          option("waw", "wāw of ḥāl only", ""),
        ],
        answer: "rabit",
        explanation: "Tuḥfat: a pronoun returning to the topic, or a demonstrative, e.g. مُحَمَّدٌ هَذَا رَجُلٌ كَرِيمٌ.",
      }),
    ),
  ];
}

function awamil() {
  const nw = (extra) => ({ ...meta("awamil-mubtada", "nawasikh"), ...extra });
  const kana = (extra) => ({ ...meta("awamil-mubtada", "kana"), ...extra });
  const inna = (extra) => ({ ...meta("awamil-mubtada", "inna"), ...extra });
  const zanna = (extra) => ({ ...meta("awamil-mubtada", "zanna"), ...extra });
  return [
    listQ(
      nw({
        id: "aw-r-three-groups",
        prompt: "The nawāsikh that enter upon mubtadaʾ and khabar are which three?",
        choices: [
          option("kana", "كَانَ وَأَخَوَاتُهَا", "verbs: raise ism, nab khabar"),
          option("inna", "إِنَّ وَأَخَوَاتُهَا", "particles: nab ism, raise khabar"),
          option("zanna", "ظَنَنْتُ وَأَخَوَاتُهَا", "verbs: nab both as two objects"),
          option("lam", "لَمْ وَأَخَوَاتُهَا", "those are jawāzim of the muḍāriʿ"),
        ],
        answer: ["kana", "inna", "zanna"],
        explanation: "They are called nawāsikh because they abrogate the original rafʿ–rafʿ ruling of the nominal sentence.",
      }),
    ),
    matchQ(
      nw({
        id: "aw-r-match-work",
        prompt: "Match each group to what it does.",
        left: [
          option("kana", "كَانَ وَأَخَوَاتُهَا", ""),
          option("inna", "إِنَّ وَأَخَوَاتُهَا", ""),
          option("zanna", "ظَنَنْتُ وَأَخَوَاتُهَا", ""),
        ],
        right: [
          option("a", "", "ترفع الاسم وتنصب الخبر"),
          option("b", "", "تنصب الاسم وترفع الخبر"),
          option("c", "", "تنصب المبتدأ والخبر على أنهما مفعولان"),
        ],
        pairs: { kana: "a", inna: "b", zanna: "c" },
        explanation: "Kāna = verbs. Inna = particles. Ẓanna = verbs taking two objects.",
      }),
    ),
    distinguish(
      nw({
        id: "aw-r-dist-wordclass",
        prompt: "Word-class of each group:",
        options: [
          option("a", "kāna: verbs · inna: particles · ẓanna: verbs", ""),
          option("b", "all three are particles", ""),
          option("c", "all three are verbs", ""),
          option("d", "kāna: particles · inna: verbs · ẓanna: particles", ""),
        ],
        answer: "a",
        explanation: "Tuḥfat stresses this: the first and third sets are afʿāl; the middle set is ḥurūf.",
      }),
    ),
    distinguish(
      nw({
        id: "aw-r-dist-endings",
        prompt: "In كَانَ الْوَلَدُ نَائِمًا / إِنَّ الْوَلَدَ نَائِمٌ / ظَنَنْتُ الْوَلَدَ نَائِمًا — what happens to الولد and نائم?",
        options: [
          option(
            "a",
            "kāna: ولدٌ / نائمًا · inna: ولدًا / نائمٌ · ẓanna: ولدًا / نائمًا",
            "rafʿ+naṣb · naṣb+rafʿ · naṣb+naṣb",
          ),
          option("b", "all three leave both in rafʿ", ""),
          option("c", "all three nab both", ""),
          option("d", "kāna nabs الولد; inna raises الولد", ""),
        ],
        answer: "a",
        explanation: "This is the whole point of the chapter: three different iʿrāb outcomes from one underlying nominal sentence الْوَلَدُ نَائِمٌ.",
      }),
    ),
    cloze(
      kana({
        id: "aw-r-kana-count",
        prompt: "How many verbs are in kāna’s family in this book?",
        options: [
          option("13", "ثَلَاثَةَ عَشَرَ فِعْلًا", "thirteen"),
          option("6", "سِتَّةٌ", "inna’s count"),
          option("10", "عَشَرَةٌ", "ẓanna’s count"),
          option("8", "ثَمَانِيَةٌ", ""),
        ],
        answer: "13",
        explanation: "Eight simple (kāna… laysa) plus five with mā (zāla, infakka, fatiʾa, bariḥa, dāma).",
      }),
    ),
    cloze(
      kana({
        id: "aw-r-kana-conjugates",
        prompt: "Do conjugated forms of kāna still do the same work?",
        stemEn: "يَكُونُ / كُنْ / يُصْبِحُ still ______.",
        options: [
          option("yes", "raise the ism and nab the khabar", "وما تصرف منها"),
          option("no", "only the māḍī kāna works", ""),
          option("raf-both", "raise both ism and khabar", ""),
          option("cancel", "cancel iʿrāb entirely", ""),
        ],
        answer: "yes",
        explanation: "The matn: وَمَا تَصَرَّفَ مِنْهَا نَحْوَ: كَانَ، وَيَكُونُ، وَكُنْ.",
      }),
    ),
    applyQ(
      kana({
        id: "aw-r-apply-asbaha-ism",
        prompt: "What is الْجَوُّ?",
        sentenceAr: "أَصْبَحَ الْجَوُّ صَحْوًا",
        sentenceEn: "The weather became clear in the morning.",
        highlight: "الْجَوُّ",
        options: ROLES.slice(0, 8),
        answer: "ism-kana",
        explanation: "أَصْبَحَ is a sister of kāna. الْجَوُّ is its ism (marfūʿ); صَحْوًا is its khabar (manṣūb).",
      }),
    ),
    applyQ(
      kana({
        id: "aw-r-apply-laysa-khabar",
        prompt: "What is صَعْبًا?",
        sentenceAr: "لَيْسَ الْأَمْرُ صَعْبًا",
        sentenceEn: "The matter is not difficult.",
        highlight: "صَعْبًا",
        options: ROLES.slice(0, 8),
        answer: "khabar-kana",
        explanation: "لَيْسَ raises الْأَمْرُ and nabs صَعْبًا. خَبَر كَانَ is manṣūb, so it is not one of the seven nominatives.",
      }),
    ),
    applyQ(
      kana({
        id: "aw-r-apply-mazala",
        prompt: "What is الْحَقُّ?",
        sentenceAr: "مَا زَالَ الْحَقُّ ظَاهِرًا",
        sentenceEn: "The truth has not ceased to be apparent.",
        highlight: "الْحَقُّ",
        options: ROLES.slice(0, 8),
        answer: "ism-kana",
        explanation: "مَا زَالَ is from kāna’s sisters. Same work: ism marfūʿ, khabar manṣūb (ظَاهِرًا).",
      }),
    ),
    cloze(
      inna({
        id: "aw-r-inna-count",
        prompt: "Inna and its sisters are how many, and what word-class?",
        options: [
          option("6h", "سِتَّةُ أَحْرُفٍ", "six particles"),
          option("6v", "سِتَّةُ أَفْعَالٍ", "six verbs"),
          option("13", "ثَلَاثَةَ عَشَرَ فِعْلًا", "kāna"),
          option("10", "عَشَرَةُ أَفْعَالٍ", "ẓanna"),
        ],
        answer: "6h",
        explanation: "إِنَّ، أَنَّ، لَكِنَّ، كَأَنَّ، لَيْتَ، لَعَلَّ.",
      }),
    ),
    matchQ(
      inna({
        id: "aw-r-inna-meanings",
        prompt: "Match each particle to its meaning in the matn.",
        left: [
          option("inna", "إِنَّ / أَنَّ", ""),
          option("lakinna", "لَكِنَّ", ""),
          option("kaanna", "كَأَنَّ", ""),
          option("layta", "لَيْتَ", ""),
          option("laalla", "لَعَلَّ", ""),
        ],
        right: [
          option("a", "تَوْكِيد", "emphasis"),
          option("b", "اسْتِدْرَاك", "rectification / contrast"),
          option("c", "تَشْبِيه", "comparison"),
          option("d", "تَمَنٍّ", "wish"),
          option("e", "تَرَجٍّ وَتَوَقُّع", "hope and expectation"),
        ],
        pairs: { inna: "a", lakinna: "b", kaanna: "c", layta: "d", laalla: "e" },
        explanation: "Memorise meanings with the work: all six still nab the ism and raise the khabar.",
      }),
    ),
    applyQ(
      inna({
        id: "aw-r-apply-inna-ism",
        prompt: "What is الصِّدْقَ?",
        sentenceAr: "إِنَّ الصِّدْقَ نَجَاةٌ",
        sentenceEn: "Indeed honesty is salvation.",
        highlight: "الصِّدْقَ",
        options: ROLES.slice(0, 8),
        answer: "ism-inna",
        explanation: "اسم إنّ is manṣūb (not a nominative). نَجَاةٌ is خبر إنّ, marfūʿ — that is the nominative in this pair.",
      }),
    ),
    applyQ(
      inna({
        id: "aw-r-apply-kaanna-khabar",
        prompt: "What is ثَوْبٌ?",
        sentenceAr: "كَأَنَّ اللَّيْلَ ثَوْبٌ",
        sentenceEn: "It is as if the night is a garment.",
        highlight: "ثَوْبٌ",
        options: ROLES.slice(0, 8),
        answer: "khabar-inna",
        explanation: "كَأَنَّ nabs اللَّيْلَ and raises ثَوْبٌ. Meaning: tashbīh.",
      }),
    ),
    cloze(
      zanna({
        id: "aw-r-zanna-count",
        prompt: "Ẓanantu and its sisters are how many?",
        options: [
          option("10", "عَشَرَةُ أَفْعَالٍ", "ten verbs"),
          option("13", "ثَلَاثَةَ عَشَرَ", "kāna"),
          option("6", "سِتَّةُ أَحْرُفٍ", "inna"),
          option("4", "أَرْبَعَةٌ", ""),
        ],
        answer: "10",
        explanation: "The original mubtadaʾ becomes mafʿūl awwal; the khabar becomes mafʿūl thānī — both manṣūb.",
      }),
    ),
    listQ(
      zanna({
        id: "aw-r-zanna-certainty",
        prompt: "Which three sisters denote certainty (yaqīn), according to the commentary?",
        choices: [
          option("raa", "رَأَيْتُ", "I perceived / saw"),
          option("alim", "عَلِمْتُ", "I knew"),
          option("wajad", "وَجَدْتُ", "I found"),
          option("zanna", "ظَنَنْتُ", "preponderance, not certainty"),
          option("hasib", "حَسِبْتُ", "preponderance"),
          option("sami", "سَمِعْتُ", "hearing"),
        ],
        answer: ["raa", "alim", "wajad"],
        explanation:
          "Four for preponderance (ẓanantu, ḥasibtu, khiltu, zaʿamtu); three for certainty; two for making/changing (ittakhadhtu, jaʿaltu); one for hearing (samiʿtu).",
      }),
    ),
    applyQ(
      zanna({
        id: "aw-r-apply-alimtu-1",
        prompt: "What is الْأَمَانَةَ?",
        sentenceAr: "عَلِمْتُ الْأَمَانَةَ خَيْرًا",
        sentenceEn: "I knew trustworthiness to be a good.",
        highlight: "الْأَمَانَةَ",
        options: ROLES,
        answer: "maf1",
        explanation: "عَلِمْتُ is a sister of ẓanna. Both remaining nouns are manṣūb: first object + second object (خَيْرًا).",
      }),
    ),
    applyQ(
      zanna({
        id: "aw-r-apply-alimtu-2",
        prompt: "What is خَيْرًا?",
        sentenceAr: "عَلِمْتُ الْأَمَانَةَ خَيْرًا",
        sentenceEn: "I knew trustworthiness to be a good.",
        highlight: "خَيْرًا",
        options: ROLES,
        answer: "maf2",
        explanation: "Second object — historically the khabar of أَمَانَةٌ خَيْرٌ, now nabbed together with the topic.",
      }),
    ),
    distinguish(
      zanna({
        id: "aw-r-dist-three-again",
        prompt: "Which pair is still marfūʿ?",
        stemEn: "Pick the nominative leftover after each nāsikh.",
        options: [
          option("a", "اسم كان and خبر إنّ — both marfūʿ; ẓanna leaves none of the original pair in rafʿ", ""),
          option("b", "خبر كان and اسم إنّ", ""),
          option("c", "both objects of ẓanna", ""),
          option("d", "ism of all three groups", ""),
        ],
        answer: "a",
        explanation:
          "That is why باب المرفوعات listed اسم كان and خبر إنّ among the seven, and did not list خبر كان, اسم إنّ, or either object of ẓanna.",
      }),
    ),
  ];
}

export function buildRuleQuestions() {
  return [...marfuat(), ...fail(), ...naib(), ...mubtada(), ...awamil()];
}

/** Seminar — Foundations + Verbs. Arabic terms · English explanations · charts */

import { AJRUMIYYAH_CHAPTERS, groupMatnParagraphs } from "./ajrumiyyahCourse.js";

export const SEMINAR_META = {
  titleAr: "الْأُصُولُ وَالْأَفْعَالُ",
  subtitle: "الْمُقَدِّمَةُ الْآجُرُّومِيَّةُ · Chapters 1–4",
};

/** Matn chapter titles for the deck badge */
export const SEMINAR_CHAPTERS = {
  1: { n: 1, ar: "أَنْوَاعُ الْكَلَامِ", en: "Types of Speech" },
  2: { n: 2, ar: "بَابُ الْإِعْرَابِ", en: "Inflection" },
  3: { n: 3, ar: "بَابُ مَعْرِفَةِ عَلَامَاتِ الْإِعْرَابِ", en: "Signs of Inflection" },
  4: { n: 4, ar: "بَابُ الْأَفْعَالِ", en: "Verbs" },
};

const CHAPTER3_IDS = new Set([
  "alamat-overview",
  "alamat-raf-guide",
  "alamat-nasb-guide",
  "alamat-khafd-guide",
  "alamat-jazm-guide",
  "muarabat",
  "exceptions",
  "five-five",
]);

export function resolveSeminarChapter(slide) {
  if (!slide) return null;
  if (slide.chapter && SEMINAR_CHAPTERS[slide.chapter]) {
    return SEMINAR_CHAPTERS[slide.chapter];
  }
  const id = slide.id || "";
  if (id.startsWith("kalam-")) return SEMINAR_CHAPTERS[1];
  if (id.startsWith("irab-")) return SEMINAR_CHAPTERS[2];
  if (id.startsWith("alamat-") || CHAPTER3_IDS.has(id)) {
    return SEMINAR_CHAPTERS[3];
  }
  if (id.startsWith("afal-")) return SEMINAR_CHAPTERS[4];
  return null;
}

const AGENDA_BAB_META = [
  { id: "kalam", n: "١", tone: "c1", en: "Types of Speech" },
  { id: "irab", n: "٢", tone: "c2", en: "Grammatical Inflection" },
  { id: "alamat-irab", n: "٣", tone: "c3", en: "Signs of Inflection" },
  { id: "afal", n: "٤", tone: "c4", en: "The Verbs" },
];

function agendaChaptersFromMatn() {
  return AGENDA_BAB_META.map((meta) => {
    const ch = AJRUMIYYAH_CHAPTERS.find((c) => c.id === meta.id);
    const paragraphs = groupMatnParagraphs(
      ch.lines.map(([ar, en], lineIndex) => ({ ar, en, lineIndex }))
    );
    return {
      n: meta.n,
      ar: ch.ar,
      en: meta.en,
      tone: meta.tone,
      paragraphs: paragraphs.map((p) => p.ar),
    };
  });
}

export const SEMINAR_SLIDES = [
  {
    id: "title",
    kind: "title",
    matnAr: "الْمُقَدِّمَةُ الْآجُرُّومِيَّةُ",
    matnEn: "Al-Muqaddimah al-Ājurrūmiyyah",
    authorAr: "ابْنُ آجُرُّومٍ",
    authorEn: "Ibn Ājurrūm (d. 723 AH)",
  },
  {
    id: "author-timeline",
    kind: "author-timeline",
    kicker: "The author",
  },

  {
    id: "agenda",
    kind: "chapters",
    title: "Four chapters",
    chapters: agendaChaptersFromMatn(),
  },

  /* ── كلام ── */
  {
    id: "kalam-two-meanings",
    kind: "pair-defs",
    kicker: "Chapter 1",
    title: "Two meanings of كَلَام",
    rootAr: "الْكَلَامُ",
    cards: [
      {
        ar: "لُغَوِيٌّ",
        en: "Linguistic sense",
        defAr:
          "عِبَارَةٌ عَمَّا تَحْصُلُ بِسَبَبِهِ فَائِدَةٌ، سَوَاءٌ أَكَانَ لَفْظًا أَمْ لَمْ يَكُنْ، كَالْخَطِّ وَالْكِتَابَةِ وَالْإِشَارَةِ.",
        defEn:
          "An expression through which a benefit is obtained — whether verbalised or not, such as scripting, writing, or gesture.",
        ex: "الْخَطّ · الْكِتَابَة · الْإِشَارَة",
        exNote: "scripting · writing · gesture",
        tone: "c1",
      },
      {
        ar: "نَحْوِيٌّ",
        en: "Grammatical sense",
        defAr:
          "لَا بُدَّ مِنْ أَنْ يَجْتَمِعَ فِيهِ أَرْبَعَةُ أُمُورٍ: أَنْ يَكُونَ لَفْظًا، وَمُرَكَّبًا، وَمُفِيدًا، وَمَوْضُوعًا بِالْوَضْعِ الْعَرَبِيِّ.",
        defEn:
          "It must possess four traits: an oral utterance, compound, comprehensible, and established in the Arabic language.",
        traits: [
          { ar: "لَفْظًا", en: "oral utterance" },
          { ar: "مُرَكَّبًا", en: "compound" },
          { ar: "مُفِيدًا", en: "comprehensible" },
          { ar: "وَضْعًا عَرَبِيًّا", en: "Arabic convention" },
        ],
        tone: "c2",
      },
    ],
  },
  {
    id: "kalam-def",
    kind: "def-pillars",
    kicker: "Chapter 1",
    title: "Definition of الْكَلَام",
    matnAr: "الْكَلَامُ هُوَ اللَّفْظُ الْمُرَكَّبُ الْمُفِيدُ بِالْوَضْعِ",
    gloss: "Speech is the composed utterance that is beneficial and conforms to Arabic convention.",
    note: "All four conditions required — drop any one and grammarians no longer call it كَلَام.",
    pillars: [
      {
        ar: "لَفْظٌ",
        en: "A voiced sound made of alphabet letters (أ → ي)",
        ex: "أَحْمَدُ · يَكْتُبُ · سَعِيدٌ",
        contra: "إِشَارَة — not لَفْظ for naḥw",
        tone: "c1",
      },
      {
        ar: "مُرَكَّبٌ",
        en: "Two words or more (or estimated)",
        ex: "مُحَمَّدٌ مُسَافِرٌ · الْعِلْمُ نَافِعٌ",
        contra: "مُحَمَّدٌ alone — unless تقدير: مُحَمَّدٌ أَخِي",
        tone: "c2",
      },
      {
        ar: "مُفِيدٌ",
        en: "Listener need not wait for more",
        ex: "إِذَا حَضَرَ الْأُسْتَاذُ أَنْصَتَ التَّلَامِيذُ",
        contra: "إِذَا حَضَرَ الْأُسْتَاذُ — incomplete",
        tone: "c3",
      },
      {
        ar: "بِالْوَضْعِ",
        en: "Arabic words, used intentionally",
        ex: "حَضَرَ مُحَمَّدٌ",
        contra: "Persian / Turkish / etc. — not Arabic وَضْع",
        tone: "c4",
      },
    ],
  },
  {
    id: "kalam-three",
    kind: "trio-defs",
    kicker: "Chapter 1",
    titleAr: "أَنْوَاعُ الْكَلَامِ ثَلَاثَةٌ",
    lead: "Division of الْكَلِمَة — not the finished sentence. Each has a لُغَوِيّ and a نَحْوِيّ sense.",
    cards: [
      {
        ar: "اِسْمٌ",
        lang: "مَا دَلَّ عَلَى مُسَمًّى",
        langEn: "That which points to a named thing.",
        istilah: "كَلِمَةٌ دَلَّتْ عَلَى مَعْنًى فِي نَفْسِهَا وَلَمْ تَقْتَرِنْ بِزَمَانٍ",
        istilahEn: "A word with meaning in itself, not tied to a tense.",
        examples: [
          { ar: "مُحَمَّدٍ", en: "Muḥammad" },
          { ar: "رَجُلٍ", en: "a man" },
          { ar: "نَهْرٍ", en: "a river" },
          { ar: "كِتَابٌ", en: "a book" },
          { ar: "عَصًا", en: "a staff" },
        ],
        tone: "c1",
      },
      {
        ar: "فِعْلٌ",
        lang: "الْحَدَثُ",
        langEn: "The event / the occurrence.",
        istilah: "كَلِمَةٌ دَلَّتْ عَلَى مَعْنًى فِي نَفْسِهَا وَاقْتَرَنَتْ بِزَمَانٍ",
        istilahEn: "A word with meaning in itself, tied to a tense.",
        examples: [
          { ar: "كَتَبَ", en: "he wrote" },
          { ar: "يَكْتُبُ", en: "he writes" },
          { ar: "اكْتُبْ", en: "write!" },
        ],
        tone: "c2",
      },
      {
        ar: "حَرْفٌ",
        lang: "الطَّرَفُ",
        langEn: "The edge / the side.",
        istilah: "كَلِمَةٌ دَلَّتْ عَلَى مَعْنًى فِي غَيْرِهَا",
        istilahEn: "A word whose meaning appears only in something else.",
        examples: [
          { ar: "مِنْ", en: "from" },
          { ar: "إِلَى", en: "to" },
          { ar: "إِنَّ", en: "indeed" },
          { ar: "لَمْ", en: "did not" },
          { ar: "هَلْ", en: "is…?" },
        ],
        tone: "c3",
      },
    ],
  },
  {
    id: "kalam-ism-signs",
    kind: "sign-cards",
    kicker: "Chapter 1",
    titleAr: "عَلَامَاتُ الِاسْمِ",
    title: "Signs of الِاسْم",
    lead: "If any one appears — the word is an اِسْم.",
    cards: [
      { ar: "الْخَفْضُ", en: "Takes genitive", ex: "بِزَيْدٍ", tone: "c1" },
      { ar: "التَّنْوِينُ", en: "Nunation", ex: "زَيْدٌ", tone: "c2" },
      { ar: "الْ", en: "Definite article", ex: "الرَّجُلُ", tone: "c3" },
      {
        ar: "حُرُوفُ الْخَفْضِ",
        en: "Jarr particle before it",
        ex: "مِنْ · إِلَى · عَنْ · عَلَى · فِي · رُبَّ · الْبَاء · الْكَاف · اللَّام",
        note: "Oath: الْوَاو · الْبَاء · التَّاء",
        tone: "c4",
      },
    ],
  },
  {
    id: "kalam-fail-signs",
    kind: "sign-cards",
    kicker: "Chapter 1",
    titleAr: "عَلَامَاتُ الْفِعْلِ",
    title: "Signs of الْفِعْل",
    lead: "Any of these marks a فِعْل.",
    cards: [
      { ar: "قَدْ", en: "Already / indeed", ex: "قَدْ قَامَ", tone: "c1" },
      { ar: "السِّينُ", en: "Near future", ex: "سَيَقُومُ", tone: "c2" },
      { ar: "سَوْفَ", en: "Distant future", ex: "سَوْفَ يَقُومُ", tone: "c3" },
      { ar: "تَاءُ التَّأْنِيثِ", en: "Silent feminine ت", ex: "قَامَتْ", tone: "c4" },
    ],
  },

  /* ── إعراب ── */
  {
    id: "irab-def",
    kind: "def-flow",
    kicker: "Chapter 2",
    title: "Definition of الْإِعْرَاب",
    matnAr:
      "الْإِعْرَابُ هُوَ تَغْيِيرُ أَوَاخِرِ الْكَلِمِ لِاخْتِلَافِ الْعَوَامِلِ الدَّاخِلَةِ عَلَيْهَا لَفْظًا أَوْ تَقْدِيرًا",
    gloss:
      "Change at the ends of words due to differing governors — pronounced or estimated.",
    note: "The final letter itself does not change — only its state does (مَرْفُوع / مَنْصُوب / مَجْرُور).",
    steps: [
      {
        label: "What",
        ar: "تَغْيِيرُ أَوَاخِرِ الْكَلِمِ",
        en: "The state at the end changes — not the first or middle letter.",
        tone: "c1",
      },
      {
        label: "Why",
        ar: "لِاخْتِلَافِ الْعَوَامِلِ الدَّاخِلَةِ عَلَيْهَا",
        en: "Because a different governor enters the word.",
        tone: "c2",
      },
      {
        label: "How",
        en: "That change appears in one of two ways:",
        fork: [
          {
            ar: "لَفْظًا",
            en: "Explicit — you hear the mark",
            tone: "c3",
          },
          {
            ar: "تَقْدِيرًا",
            en: "Implicit — barred from pronunciation",
            tone: "c4",
          },
        ],
      },
    ],
  },
  {
    id: "irab-change-kinds",
    kind: "change-kinds",
    kicker: "Chapter 2",
    titleAr: "لَفْظِيٌّ وَتَقْدِيرِيٌّ",
    title: "Two kinds of change",
    lead: "This alteration divides into two: explicit and implicit.",
    kinds: [
      {
        ar: "لَفْظِيٌّ",
        en: "Explicit",
        defAr: "مَا لَا يَمْنَعُ مِنَ النُّطْقِ بِهِ مَانِعٌ",
        defEn:
          "That which nothing prevents from being articulated — as on the دَال of مُحَمَّد and the رَاء of يُسَافِرُ.",
        examples: [
          { ar: "مُحَمَّدٌ", en: "you hear the ending vowel" },
          { ar: "يُسَافِرُ", en: "you hear the ending vowel" },
        ],
        tone: "c1",
      },
      {
        ar: "تَقْدِيرِيٌّ",
        en: "Implicit",
        defAr:
          "مَا يَمْنَعُ مِنَ التَّلَفُّظِ بِهِ مَانِعٌ مِنْ تَعَذُّرٍ، أَوِ اسْتِثْقَالٍ، أَوْ مُنَاسَبَةٍ",
        defEn:
          "That which a barrier prevents from being articulated — impracticability, heaviness, or appropriateness. The state is still there; the vowel is estimated.",
        examples: [
          { ar: "الْفَتَى", en: "تَعَذُّر" },
          { ar: "الْقَاضِي", en: "ثِقَل" },
          { ar: "غُلَامِي", en: "مُنَاسَبَة" },
        ],
        tone: "c3",
      },
    ],
    barriersTitle: "Three barriers that keep a vowel مُقَدَّر",
    barriers: [
      {
        ar: "تَعَذُّرٌ",
        en: "Impracticability",
        defEn:
          "The tongue cannot place a vowel on a defective letter — sounding it is impossible.",
        ex: "الْفَتَى",
        tone: "c1",
      },
      {
        ar: "ثِقَلٌ / اسْتِثْقَالٌ",
        en: "Heaviness",
        defEn:
          "A vowel can be placed on a defective letter, but it is heavy and uncomfortable for the tongue — so it is left estimated.",
        ex: "يَدْعُو · الْقَاضِي",
        tone: "c2",
      },
      {
        ar: "مُنَاسَبَةٌ",
        en: "Appropriateness",
        defEn:
          "The ending slot is already occupied by the vowel that fits what follows — for يَاءُ الْمُتَكَلِّم that fitting vowel is كَسْرَة.",
        ex: "غُلَامِي",
        tone: "c3",
      },
    ],
    sampleAr: "يَدْعُو الْفَتَى وَالْقَاضِي وَغُلَامِي",
    sampleEn:
      "All three barriers in one sentence — every ending is مَرْفُوع with an estimated ضَمَّة.",
    typesTitle: "Which barrier makes which shape",
    types: [
      {
        ar: "مَقْصُورٌ",
        barrier: "تَعَذُّرٌ",
        highlightAr: ["التَّعَذُّرِ"],
        highlightEn: ["impracticability"],
        defAr:
          "فَمَا كَانَ آخِرُهُ أَلِفًا لَازِمَةً تُقَدَّرُ عَلَيْهِ جَمِيعُ الْحَرَكَاتِ لِلتَّعَذُّرِ، وَيُسَمَّى الِاسْمُ الْمُنْتَهِي بِالْأَلِفِ مَقْصُورًا",
        defEn:
          "That which ends with a fixed أَلِف demands implication of all diacritical points due to impracticability. The noun ending in alif is called مَقْصُور.",
        ex: "الْفَتَى · الْعَصَا · الرِّضَا",
        tone: "c1",
      },
      {
        ar: "مَنْقُوصٌ",
        barrier: "ثِقَلٌ",
        highlightAr: ["الثِّقَلِ"],
        highlightEn: ["heaviness"],
        defAr:
          "وَمَا كَانَ آخِرُهُ يَاءً لَازِمَةً تُقَدَّرُ عَلَيْهِ الضَّمَّةُ وَالْكَسْرَةُ لِلثِّقَلِ، وَيُسَمَّى الِاسْمُ الْمُنْتَهِي بِالْيَاءِ مَنْقُوصًا، وَتَظْهَرُ عَلَيْهِ الْفَتْحَةُ لِخِفَّتِهَا",
        defEn:
          "That which ends with a fixed يَاء demands implication of الضَّمَّة and الْكَسْرَة due to heaviness. The noun ending in yā is called مَنْقُوص — and الْفَتْحَة appears because of its lightness.",
        ex: "الْقَاضِي · الدَّاعِي · الرَّامِي",
        tone: "c2",
      },
      {
        ar: "مُضَافٌ إِلَى يَاءِ الْمُتَكَلِّمِ",
        barrier: "مُنَاسَبَةٌ",
        highlightAr: ["الْمُنَاسَبَةِ"],
        highlightEn: ["appropriateness"],
        defAr:
          "مَا كَانَ مُضَافًا إِلَى يَاءِ الْمُتَكَلِّمِ تُقَدَّرُ عَلَيْهِ الْحَرَكَاتُ كُلُّهَا لِلْمُنَاسَبَةِ",
        defEn:
          "What is annexed to يَاءُ الْمُتَكَلِّم demands implication of every diacritical point due to appropriateness.",
        ex: "غُلَامِي · كِتَابِي · صَدِيقِي",
        tone: "c3",
      },
    ],
    tableTitle: "Examples from the commentary",
    tableHeaders: ["Arabic", "English", "Barrier", "Type"],
    tableRows: [
      { ar: "الْفَتَى", en: "the youth", barrier: "تَعَذُّر", type: "مَقْصُور" },
      { ar: "الْعَصَا", en: "the stick", barrier: "تَعَذُّر", type: "مَقْصُور" },
      { ar: "الرِّضَا", en: "contentment", barrier: "تَعَذُّر", type: "مَقْصُور" },
      { ar: "الْقَاضِي", en: "the judge", barrier: "ثِقَل", type: "مَنْقُوص" },
      { ar: "الدَّاعِي", en: "the caller", barrier: "ثِقَل", type: "مَنْقُوص" },
      { ar: "الرَّامِي", en: "the thrower", barrier: "ثِقَل", type: "مَنْقُوص" },
      {
        ar: "غُلَامِي",
        en: "my servant-boy",
        barrier: "مُنَاسَبَة",
        type: "مُضَاف لِيَاءِ الْمُتَكَلِّم",
      },
      {
        ar: "كِتَابِي",
        en: "my book",
        barrier: "مُنَاسَبَة",
        type: "مُضَاف لِيَاءِ الْمُتَكَلِّم",
      },
      {
        ar: "صَدِيقِي",
        en: "my friend",
        barrier: "مُنَاسَبَة",
        type: "مُضَاف لِيَاءِ الْمُتَكَلِّم",
      },
    ],
  },
  {
    id: "irab-four",
    kind: "states-matrix",
    kicker: "Chapter 2",
    title: "Four states of الْإِعْرَاب",
    lead: "رَفْع and نَصْب visit both · خَفْض nouns only · جَزْم verbs only",
    states: [
      { ar: "رَفْعٌ", en: "highness · marked by ضَمَّة", tone: "c1" },
      { ar: "نَصْبٌ", en: "straightness · marked by فَتْحَة", tone: "c2" },
      { ar: "خَفْضٌ", en: "lowering · marked by كَسْرَة", tone: "c3" },
      { ar: "جَزْمٌ", en: "cutting · marked by سُكُون", tone: "c4" },
    ],
    matrix: {
      headers: ["", "رَفْع", "نَصْب", "خَفْض", "جَزْم"],
      rows: [
        { who: "اِسْم", cells: ["yes", "yes", "yes", "no"] },
        { who: "فِعْل", cells: ["yes", "yes", "no", "yes"] },
      ],
    },
  },

  /* ── علامات ── */
  {
    id: "alamat-overview",
    kind: "count-chart",
    kicker: "Chapter 3",
    title: "عَلَامَاتُ الْإِعْرَاب — overview",
    lead: "Each state has one أَصْل and فُرُوع that stand in for it.",
    rows: [
      {
        ar: "الرَّفْعُ",
        count: "٤",
        original: "الضَّمَّةُ",
        furoo: ["الْوَاوُ", "الْأَلِفُ", "النُّونُ"],
        applies: "اِسْم + فِعْل",
        tone: "c1",
      },
      {
        ar: "النَّصْبُ",
        count: "٥",
        original: "الْفَتْحَةُ",
        furoo: ["الْأَلِفُ", "الْكَسْرَةُ", "الْيَاءُ", "حَذْفُ النُّونِ"],
        applies: "اِسْم + فِعْل",
        tone: "c2",
      },
      {
        ar: "الْخَفْضُ",
        count: "٣",
        original: "الْكَسْرَةُ",
        furoo: ["الْيَاءُ", "الْفَتْحَةُ"],
        applies: "اِسْم only",
        tone: "c3",
      },
      {
        ar: "الْجَزْمُ",
        count: "٢",
        original: "السُّكُونُ",
        furoo: ["الْحَذْفُ"],
        applies: "فِعْل only",
        tone: "c4",
      },
    ],
  },
  {
    id: "alamat-raf-guide",
    kind: "hierarchy",
    chapter: 3,
    kicker: "Chapter 3",
    titleAr: "بَابُ مَعْرِفَةِ عَلَامَاتِ الْإِعْرَابِ",
    title: "عَلَامَاتُ الرَّفْعِ",
    stackFirst: true,
    hideRoot: true,
    matnAr: "لِلرَّفْعِ أَرْبَعُ عَلَامَاتٍ: الضَّمَّةُ، وَالْوَاوُ، وَالْأَلِفُ، وَالنُّونُ",
    gloss: "One أَصْل (الضَّمَّة) and three فُرُوع (الْوَاو · الْأَلِف · النُّون).",
    root: {
      ar: "الرَّفْعُ",
      en: "4 signs",
      tone: "c2",
      children: [
        {
          ar: "الضَّمَّةُ",
          en: "أَصْل · 4 places",
          n: "١",
          tone: "c1",
          equalCards: true,
          children: [
            {
              ar: "الِاسْمُ الْمُفْرَدُ",
              en: "The singular noun",
              n: "١",
              defAr:
                "مَا لَيْسَ مُثَنًّى وَلَا مَجْمُوعًا وَلَا مُلْحَقًا بِهِمَا وَلَا مِنَ الْأَسْمَاءِ الْخَمْسَةِ",
              defEn:
                "What is not dual, not plural, not attached to either, and not from the five nouns — masculine or feminine.",
              tone: "c1",
              leaf: true,
              blocks: [
                { kind: "ظَاهِرَة", en: "you hear the ضَمَّة", ex: "حَضَرَ مُحَمَّدٌ · سَافَرَتْ فَاطِمَةُ" },
                { kind: "مُقَدَّرَة", barrier: "تَعَذُّر", en: "on أَلِف — tongue cannot place it", ex: "الْفَتَى · لَيْلَى · نُعْمَى" },
                { kind: "مُقَدَّرَة", barrier: "ثِقَل", en: "on يَاء — heavy to pronounce", ex: "الْقَاضِي" },
                { kind: "مُقَدَّرَة", barrier: "مُنَاسَبَة", en: "before يَاءُ الْمُتَكَلِّم", ex: "أَخِي" },
              ],
            },
            {
              ar: "جَمْعُ التَّكْسِيرِ",
              en: "The broken plural",
              n: "٢",
              defAr:
                "مَا دَلَّ عَلَى أَكْثَرَ مِنِ اثْنَيْنِ أَوِ اثْنَتَيْنِ مَعَ تَغَيُّرٍ فِي صِيغَةِ مُفْرَدِهِ",
              defEn:
                "That which indicates more than two (masculine or feminine) with a change in the singular’s form — all six patterns take ضَمَّة for رَفْع.",
              tone: "c2",
              leaf: true,
              blocks: [
                { kind: "ظَاهِرَة", en: "you hear the ضَمَّة", ex: "قَامَ الرِّجَالُ وَالزَّيَانِبُ" },
                { kind: "مُقَدَّرَة", barrier: "تَعَذُّر", en: "on final أَلِف", ex: "الْجَرْحَى · الْعَذَارَى · سُكَارَى · حَبَالَى" },
              ],
            },
            {
              ar: "جَمْعُ الْمُؤَنَّثِ السَّالِمِ",
              en: "The sound feminine plural",
              n: "٣",
              defAr:
                "مَا دَلَّ عَلَى أَكْثَرَ مِنِ اثْنَتَيْنِ بِزِيَادَةِ أَلِفٍ وَتَاءٍ فِي آخِرِهِ",
              defEn:
                "That which indicates more than two by adding أَلِف + تَاء at the end. If the أَلِف or تَاء was already in the singular, it is تَكْسِير — not this.",
              tone: "c3",
              leaf: true,
              blocks: [
                { kind: "ظَاهِرَة", en: "almost always explicit", ex: "جَاءَ الزَّيْنَبَاتُ · سَافَرَ الْفَاطِمَاتُ" },
                { kind: "مُقَدَّرَة", barrier: "مُنَاسَبَة", en: "only when mudāf to يَاءُ الْمُتَكَلِّم", ex: "هَذِهِ شَجَرَاتِي وَبَقَرَاتِي" },
              ],
            },
            {
              ar: "الْمُضَارِعُ الْمُجَرَّدُ",
              en: "Muḍāriʿ free of suffixes",
              n: "٤",
              defAr:
                "الْفِعْلُ الْمُضَارِعُ الَّذِي لَمْ يَتَّصِلْ بِهِ أَلِفُ اثْنَيْنِ، وَلَا وَاوُ جَمَاعَةٍ، وَلَا يَاءُ مُخَاطَبَةٍ، وَلَا نُونُ تَوْكِيدٍ، وَلَا نُونُ نِسْوَةٍ",
              defEn:
                "The muḍāriʿ not connected to dual alif, plural wāw, feminine-address yā, nūn of emphasis, or nūn of women — otherwise it is not raised by ضَمَّة.",
              tone: "c4",
              leaf: true,
              blocks: [
                { kind: "ظَاهِرَة", en: "you hear the ضَمَّة", ex: "يَضْرِبُ · يَكْتُبُ" },
                { kind: "مُقَدَّرَة", barrier: "ثِقَل", en: "on وَاو or يَاء", ex: "يَدْعُو · يَرْجُو · يَقْضِي · يُرْضِي" },
                { kind: "مُقَدَّرَة", barrier: "تَعَذُّر", en: "on أَلِف", ex: "يَرْضَى · يَقْوَى" },
              ],
            },
          ],
        },
        {
          ar: "الْوَاوُ",
          en: "فَرْع · always ظَاهِرَة",
          n: "٢",
          tone: "c2",
          equalCards: true,
          children: [
            {
              ar: "جَمْعُ الْمُذَكَّرِ السَّالِمِ",
              en: "Sound masculine plural",
              defAr:
                "اسْمٌ دَلَّ عَلَى أَكْثَرَ مِنِ اثْنَيْنِ، بِزِيَادَةٍ فِي آخِرِهِ، صَالِحٌ لِلتَّجْرِيدِ مِنَ الزِّيَادَةِ",
              defEn:
                "A noun for more than two, with an addition at the end that can be stripped back to a sound singular. The وَاو marks رَفْع; the نُون replaces tanwīn.",
              tone: "c1",
              leaf: true,
              blocks: [
                { kind: "ظَاهِرَة", en: "الْوَاوُ نِيَابَةً عَنِ الضَّمَّةِ", ex: "فَرِحَ الْمُخَلَّفُونَ · الْمُؤْمِنُونَ · الصَّابِرُونَ" },
              ],
            },
            {
              ar: "الْأَسْمَاءُ الْخَمْسَةُ",
              en: "The five nouns",
              defAr:
                "أَبُوكَ، وَأَخُوكَ، وَحَمُوكَ، وَفُوكَ، وَذُو مَالٍ — تُرْفَعُ بِالْوَاوِ نِيَابَةً عَنِ الضَّمَّةِ بِشُرُوطٍ",
              defEn:
                "They become marfūʿ with وَاو as a representative of the ضَمَّة — only when all four conditions hold.",
              conditions: [
                {
                  n: "١",
                  ar: "أَنْ تَكُونَ مُفْرَدَةً",
                  en: "singular — not dual or plural",
                },
                {
                  n: "٢",
                  ar: "أَنْ تَكُونَ مُكَبَّرَةً",
                  en: "augmentative — not diminutive (مُصَغَّرَة)",
                },
                {
                  n: "٣",
                  ar: "أَنْ تَكُونَ مُضَافَةً",
                  en: "mudāf — in a possessive compound",
                },
                {
                  n: "٤",
                  ar: "أَنْ تَكُونَ إِضَافَتُهَا لِغَيْرِ يَاءِ الْمُتَكَلِّمِ",
                  en: "possessed by anything except يَاءُ الْمُتَكَلِّم",
                },
              ],
              tone: "c2",
              leaf: true,
              blocks: [
                { kind: "ظَاهِرَة", en: "الْوَاوُ نِيَابَةً عَنِ الضَّمَّةِ", ex: "حَضَرَ أَبُوكَ وَأَخُوكَ · هَذَا أَبُوكَ · وَأَبُونَا شَيْخٌ كَبِيرٌ" },
              ],
            },
          ],
        },
        {
          ar: "الْأَلِفُ",
          en: "فَرْع · always ظَاهِرَة",
          n: "٣",
          tone: "c3",
          equalCards: true,
          children: [
            {
              ar: "التَّثْنِيَةُ",
              en: "The dual",
              defAr:
                "مَا دَلَّ عَلَى اثْنَيْنِ أَوِ اثْنَتَيْنِ بِزِيَادَةِ أَلِفٍ وَنُونٍ فِي آخِرِهِ فِي حَالَةِ الرَّفْعِ",
              defEn:
                "A noun for exactly two, with أَلِف + نُون in رَفْع (يَاء + نُون in other states). Sign of رَفْع is the أَلِف.",
              tone: "c3",
              leaf: true,
              blocks: [
                { kind: "ظَاهِرَة", en: "الْأَلِفُ for رَفْع", ex: "حَضَرَ الرَّجُلَانِ · الْكِتَابَانِ" },
              ],
            },
          ],
        },
        {
          ar: "النُّونُ",
          en: "فَرْع · always ظَاهِرَة",
          n: "٤",
          tone: "c4",
          equalCards: true,
          children: [
            {
              ar: "الْأَفْعَالُ الْخَمْسَةُ",
              en: "The five verbs",
              defAr:
                "كُلُّ فِعْلٍ مُضَارِعٍ اتَّصَلَ بِهِ أَلِفُ اثْنَيْنِ، أَوْ وَاوُ جَمَاعَةٍ، أَوْ يَاءُ مُخَاطَبَةٍ — يُرْفَعُ بِثُبُوتِ النُّونِ",
              defEn:
                "The نُون is a sign of رَفْع in only one situation: the مُضَارِع when connected to a dual pronoun, a plural pronoun, or the feminine second-person pronoun. The sign of رَفْع is ثُبُوتُ النُّونِ (presence of the نُون); the ا / و / ي before it is the فَاعِل. These five shapes are called الْأَفْعَالُ الْخَمْسَةُ.",
              tone: "c4",
              leaf: true,
              blocks: [
                {
                  kind: "ظَاهِرَة",
                  en: "ثُبُوتُ النُّونِ — the نُون stays = رَفْع",
                  ex: "١ يَكْتُبَانِ · ٢ تَكْتُبَانِ · ٣ يَكْتُبُونَ · ٤ تَكْتُبُونَ · ٥ تَكْتُبِينَ",
                  note: "dual they · dual you · they (m.) · you (m. pl.) · you (f. sg.)",
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: "alamat-nasb-guide",
    kind: "hierarchy",
    chapter: 3,
    kicker: "Chapter 3",
    titleAr: "عَلَامَاتُ النَّصْبِ",
    title: "Five signs — أَصْل + فُرُوع",
    stackFirst: true,
    hideRoot: true,
    matnAr: "وَلِلنَّصْبِ خَمْسُ عَلَامَاتٍ: الْفَتْحَةُ، وَالْأَلِفُ، وَالْكَسْرَةُ، وَالْيَاءُ، وَحَذْفُ النُّونِ",
    gloss: "One أَصْل (الْفَتْحَة) and four فُرُوع (الْأَلِف · الْكَسْرَة · الْيَاء · حَذْفُ النُّونِ).",
    root: {
      ar: "النَّصْبُ",
      en: "5 signs",
      children: [
        {
          ar: "الْفَتْحَةُ",
          en: "أَصْل · 3 places",
          n: "١",
          tone: "c1",
          equalCards: true,
          children: [
            {
              ar: "الِاسْمُ الْمُفْرَدُ",
              en: "The singular noun",
              n: "١",
              defAr: "مَا لَيْسَ مُثَنًّى وَلَا مَجْمُوعًا وَلَا مُلْحَقًا بِهِمَا وَلَا مِنَ الْأَسْمَاءِ الْخَمْسَةِ — كَمَا سَبَقَ",
              defEn: "Same definition as in رَفْع. Often as مَفْعُول بِهِ. Note: on مَنْقُوص the فَتْحَة appears (light) — unlike ضَمَّة/كَسْرَة.",
              tone: "c1",
              leaf: true,
              blocks: [
                { kind: "ظَاهِرَة", en: "you hear the فَتْحَة", ex: "لَقِيتُ عَلِيًّا · قَابَلْتُ هِنْدًا · رَأَيْتُ الْقَاضِيَ" },
                { kind: "مُقَدَّرَة", barrier: "تَعَذُّر", en: "on أَلِف", ex: "لَقِيتُ الْفَتَى · حَدَّثْتُ لَيْلَى" },
              ],
            },
            {
              ar: "جَمْعُ التَّكْسِيرِ",
              en: "The broken plural",
              n: "٢",
              defAr: "مَا دَلَّ عَلَى أَكْثَرَ مِنِ اثْنَيْنِ مَعَ تَغَيُّرٍ فِي صِيغَةِ مُفْرَدِهِ — كَمَا سَبَقَ",
              defEn: "Broken plural as object (or other منصوب). Same six patterns as before.",
              tone: "c2",
              leaf: true,
              blocks: [
                { kind: "ظَاهِرَة", en: "you hear the فَتْحَة", ex: "صَاحَبْتُ الرِّجَالَ · رَعَيْتُ الْهُنُودَ" },
                { kind: "مُقَدَّرَة", barrier: "تَعَذُّر", en: "on أَلِف", ex: "وَتَرَى النَّاسَ سُكَارَى · وَأَنْكِحُوا الْأَيَامَى" },
              ],
            },
            {
              ar: "الْمُضَارِعُ بَعْدَ نَاصِبٍ",
              en: "Muḍāriʿ after a نَاصِب",
              n: "٣",
              defAr: "الْفِعْلُ الْمُضَارِعُ الَّذِي سَبَقَهُ نَاصِبٌ، وَلَمْ يَتَّصِلْ بِآخِرِهِ أَلِفُ اثْنَيْنِ وَلَا وَاوُ جَمَاعَةٍ وَلَا يَاءُ مُخَاطَبَةٍ وَلَا نُونُ تَوْكِيدٍ وَلَا نُونُ نِسْوَةٍ",
              defEn: "Preceded by a نَاصِب (e.g. أَنْ · لَنْ) and free of the five-verb / توكيد / نسوة endings — otherwise نصب is by حَذْفُ النُّونِ or the verb is مَبْنِيّ.",
              tone: "c3",
              leaf: true,
              blocks: [
                { kind: "ظَاهِرَة", en: "you hear the فَتْحَة", ex: "لَنْ نَبْرَحَ عَلَيْهِ عَاكِفِينَ · لَنْ يَدْعُوَ · لَنْ يَقْضِيَ" },
                { kind: "مُقَدَّرَة", barrier: "تَعَذُّر", en: "on أَلِف", ex: "يَسُرُّنِي أَنْ تَسْعَى إِلَى الْمَجْدِ" },
              ],
            },
          ],
        },
        {
          ar: "الْأَلِفُ",
          en: "فَرْع · always ظَاهِرَة",
          n: "٢",
          tone: "c2",
          equalCards: true,
          children: [
            {
              ar: "الْأَسْمَاءُ الْخَمْسَةُ",
              en: "The five nouns",
              defAr: "تَكُونُ الْأَلِفُ عَلَامَةً لِلنَّصْبِ فِي الْأَسْمَاءِ الْخَمْسَةِ — وَلَيْسَ لَهَا مَوْضِعٌ غَيْرُ هَذَا",
              defEn: "Only here does أَلِف stand in for فَتْحَة — with the same four conditions as in رَفْع.",
              conditions: [
                { n: "١", ar: "أَنْ تَكُونَ مُفْرَدَةً", en: "singular" },
                { n: "٢", ar: "أَنْ تَكُونَ مُكَبَّرَةً", en: "augmentative — not diminutive" },
                { n: "٣", ar: "أَنْ تَكُونَ مُضَافَةً", en: "mudāf" },
                {
                  n: "٤",
                  ar: "أَنْ تَكُونَ إِضَافَتُهَا لِغَيْرِ يَاءِ الْمُتَكَلِّمِ",
                  en: "not mudāf to يَاءُ الْمُتَكَلِّم",
                },
              ],
              tone: "c1",
              leaf: true,
              blocks: [
                { kind: "ظَاهِرَة", en: "الْأَلِفُ نِيَابَةً عَنِ الْفَتْحَةِ", ex: "رَأَيْتُ أَبَاكَ وَأَخَاكَ · احْتَرِمْ أَبَاكَ · نَظِّفْ فَاكَ" },
              ],
            },
          ],
        },
        {
          ar: "الْكَسْرَةُ",
          en: "فَرْع · exception!",
          n: "٣",
          tone: "c3",
          equalCards: true,
          children: [
            {
              ar: "جَمْعُ الْمُؤَنَّثِ السَّالِمِ",
              en: "Sound feminine plural",
              defAr: "تَكُونُ الْكَسْرَةُ عَلَامَةً لِلنَّصْبِ فِي جَمْعِ الْمُؤَنَّثِ السَّالِمِ — وَلَيْسَ لَهَا مَوْضِعٌ غَيْرُ هَذَا",
              defEn: "Exception: this plural takes كَسْرَة in نَصْب (not فَتْحَة).",
              tone: "c2",
              leaf: true,
              blocks: [
                { kind: "ظَاهِرَة", en: "الْكَسْرَةُ نِيَابَةً عَنِ الْفَتْحَةِ", ex: "إِنَّ الْفَتَيَاتِ الْمُهَذَّبَاتِ يُدْرِكْنَ الْمَجْدَ · رَأَيْتُ الْمُسْلِمَاتِ" },
              ],
            },
          ],
        },
        {
          ar: "الْيَاءُ",
          en: "فَرْع · always ظَاهِرَة",
          n: "٤",
          tone: "c4",
          equalCards: true,
          children: [
            {
              ar: "التَّثْنِيَةُ",
              en: "The dual",
              n: "١",
              defAr: "عَلَامَةُ نَصْبِ الْمُثَنَّى الْيَاءُ — مَا قَبْلَهَا مَفْتُوحٌ وَمَا بَعْدَهَا مَكْسُورٌ",
              defEn: "Dual in نَصْب: يَاء with fatḥah before it and kasrah after it (…َيْنِ).",
              tone: "c1",
              leaf: true,
              blocks: [
                { kind: "ظَاهِرَة", en: "الْيَاءُ for نَصْب", ex: "نَظَرْتُ عُصْفُورَيْنِ · اشْتَرَى أَبِي كِتَابَيْنِ" },
              ],
            },
            {
              ar: "جَمْعُ الْمُذَكَّرِ السَّالِمِ",
              en: "Sound masculine plural",
              n: "٢",
              defAr: "عَلَامَةُ نَصْبِ جَمْعِ الْمُذَكَّرِ الْيَاءُ — مَا قَبْلَهَا مَكْسُورٌ وَمَا بَعْدَهَا مَفْتُوحٌ",
              defEn: "Sound masc. plural in نَصْب: يَاء with kasrah before it and fatḥah after it (…ِينَ).",
              tone: "c2",
              leaf: true,
              blocks: [
                { kind: "ظَاهِرَة", en: "الْيَاءُ for نَصْب", ex: "رَأَيْتُ الْمُسْلِمِينَ · نَصَرْتُ الصَّابِرِينَ" },
              ],
            },
          ],
        },
        {
          ar: "حَذْفُ النُّونِ",
          en: "فَرْع · always ظَاهِرَة",
          n: "٥",
          tone: "c5",
          equalCards: true,
          children: [
            {
              ar: "الْأَفْعَالُ الْخَمْسَةُ",
              en: "The five verbs",
              defAr: "إِذَا دَخَلَ نَاصِبٌ عَلَى الْأَفْعَالِ الْخَمْسَةِ فَعَلَامَةُ نَصْبِهَا حَذْفُ النُّونِ",
              defEn:
                "When a نَاصِب enters upon the five verbs, the sign of نَصْب is حَذْفُ النُّونِ. The ا / و / ي before the (dropped) نُون remains the فَاعِل.",
              tone: "c4",
              leaf: true,
              blocks: [
                {
                  kind: "ظَاهِرَة",
                  en: "حَذْفُ النُّونِ = نَصْب",
                  ex: "لَنْ يَكْتُبَا · لَنْ تَكْتُبَا · لَنْ يَكْتُبُوا · لَنْ تَكْتُبُوا · لَنْ تَكْتُبِي",
                  note: "compare رَفْع: يَكْتُبَانِ / يَكْتُبُونَ / تَكْتُبِينَ — the نُون is gone",
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: "alamat-khafd-guide",
    kind: "hierarchy",
    chapter: 3,
    kicker: "Chapter 3",
    titleAr: "عَلَامَاتُ الْخَفْضِ",
    title: "Also called الْجَرّ — nouns only · 3 signs",
    stackFirst: true,
    hideRoot: true,
    matnAr: "وَلِلْخَفْضِ ثَلَاثُ عَلَامَاتٍ: الْكَسْرَةُ، وَالْيَاءُ، وَالْفَتْحَةُ",
    gloss: "One أَصْل (الْكَسْرَة) and two فُرُوع (الْيَاء · الْفَتْحَة). No خَفْض on verbs.",
    root: {
      ar: "الْخَفْضُ",
      en: "3 signs · nouns only",
      children: [
        {
          ar: "الْكَسْرَةُ",
          en: "أَصْل · 3 places",
          n: "١",
          tone: "c1",
          equalCards: true,
          children: [
            {
              ar: "الِاسْمُ الْمُفْرَدُ الْمُنْصَرِفُ",
              en: "Singular triptote",
              n: "١",
              defAr: "الِاسْمُ الْمُفْرَدُ الَّذِي يَلْحَقُ آخِرَهُ الصَّرْفُ — وَالصَّرْفُ هُوَ التَّنْوِينُ",
              defEn: "Singular that accepts tanwīn. Makhfūḍ by a حرف خفض or by إضافة.",
              tone: "c1",
              leaf: true,
              blocks: [
                { kind: "ظَاهِرَة", en: "after حرف خفض", ex: "سَعَيْتُ إِلَى مُحَمَّدٍ · رَضِيتُ عَنْ عَلِيٍّ" },
                { kind: "ظَاهِرَة", en: "as مُضَاف إِلَيْهِ", ex: "خُلُقُ بَكْرٍ · مُعَاشَرَةُ خَالِدٍ" },
                { kind: "مُقَدَّرَة", barrier: "تَعَذُّر", en: "on أَلِف", ex: "مَرَرْتُ بِالْفَتَى" },
                { kind: "مُقَدَّرَة", barrier: "ثِقَل", en: "on يَاء (مَنْقُوص)", ex: "مَرَرْتُ بِالْقَاضِي" },
                { kind: "مُقَدَّرَة", barrier: "مُنَاسَبَة", en: "before ياء المتكلم", ex: "مَرَرْتُ بِغُلَامِي" },
              ],
            },
            {
              ar: "جَمْعُ التَّكْسِيرِ الْمُنْصَرِفُ",
              en: "Broken plural triptote",
              n: "٢",
              defAr: "جَمْعُ التَّكْسِيرِ الَّذِي يَلْحَقُ آخِرَهُ التَّنْوِينُ",
              defEn: "Broken plural that accepts tanwīn (not diptote broken plurals like مَسَاجِد).",
              tone: "c2",
              leaf: true,
              blocks: [
                { kind: "ظَاهِرَة", en: "explicit كَسْرَة", ex: "مَرَرْتُ بِرِجَالٍ كِرَامٍ · رَضِيتُ عَنْ أَصْحَابٍ شُجْعَانٍ" },
              ],
            },
            {
              ar: "جَمْعُ الْمُؤَنَّثِ السَّالِمِ",
              en: "Sound feminine plural",
              n: "٣",
              defAr: "جَمْعُ الْمُؤَنَّثِ السَّالِمِ — يُخْفَضُ بِالْكَسْرَةِ الظَّاهِرَةِ",
              defEn: "Always takes كَسْرَة in خَفْض (and also in نَصْب — the famous exception).",
              tone: "c3",
              leaf: true,
              blocks: [
                { kind: "ظَاهِرَة", en: "explicit كَسْرَة", ex: "نَظَرْتُ إِلَى فَتَيَاتٍ مُؤَدَّبَاتٍ · رَضِيتُ عَنْ مُسْلِمَاتٍ قَانِتَاتٍ" },
              ],
            },
          ],
        },
        {
          ar: "الْيَاءُ",
          en: "فَرْع · always ظَاهِرَة",
          n: "٢",
          tone: "c2",
          equalCards: true,
          children: [
            {
              ar: "الْأَسْمَاءُ الْخَمْسَةُ",
              en: "The five nouns",
              n: "١",
              defAr: "تُخْفَضُ الْأَسْمَاءُ الْخَمْسَةُ بِالْيَاءِ نِيَابَةً عَنِ الْكَسْرَةِ — بِشُرُوطِهَا",
              defEn: "Same five nouns — يَاء marks خَفْض, with the same four conditions.",
              conditions: [
                { n: "١", ar: "أَنْ تَكُونَ مُفْرَدَةً", en: "singular" },
                { n: "٢", ar: "أَنْ تَكُونَ مُكَبَّرَةً", en: "augmentative — not diminutive" },
                { n: "٣", ar: "أَنْ تَكُونَ مُضَافَةً", en: "mudāf" },
                {
                  n: "٤",
                  ar: "أَنْ تَكُونَ إِضَافَتُهَا لِغَيْرِ يَاءِ الْمُتَكَلِّمِ",
                  en: "not mudāf to يَاءُ الْمُتَكَلِّم",
                },
              ],
              tone: "c1",
              leaf: true,
              blocks: [
                { kind: "ظَاهِرَة", en: "الْيَاءُ for خَفْض", ex: "سَلِّمْ عَلَى أَبِيكَ · عَلَى صَوْتِ أَخِيكَ · لِذِي الْمَالِ" },
              ],
            },
            {
              ar: "التَّثْنِيَةُ",
              en: "The dual",
              n: "٢",
              defAr: "عَلَامَةُ خَفْضِ الْمُثَنَّى الْيَاءُ — مَا قَبْلَهَا مَفْتُوحٌ وَمَا بَعْدَهَا مَكْسُورٌ",
              defEn: "Dual in خَفْض looks like dual in نَصْب: …َيْنِ.",
              tone: "c2",
              leaf: true,
              blocks: [
                { kind: "ظَاهِرَة", en: "الْيَاءُ for خَفْض", ex: "انْظُرْ إِلَى الْجُنْدِيَّيْنِ · سَلِّمْ عَلَى الصَّدِيقَيْنِ" },
              ],
            },
            {
              ar: "جَمْعُ الْمُذَكَّرِ السَّالِمِ",
              en: "Sound masculine plural",
              n: "٣",
              defAr: "عَلَامَةُ خَفْضِ جَمْعِ الْمُذَكَّرِ الْيَاءُ — مَا قَبْلَهَا مَكْسُورٌ وَمَا بَعْدَهَا مَفْتُوحٌ",
              defEn: "Sound masc. plural in خَفْض looks like in نَصْب: …ِينَ.",
              tone: "c3",
              leaf: true,
              blocks: [
                { kind: "ظَاهِرَة", en: "الْيَاءُ for خَفْض", ex: "رَضِيتُ عَنِ الْبَكْرِينَ · نَظَرْتُ إِلَى الْمُسْلِمِينَ" },
              ],
            },
          ],
        },
        {
          ar: "الْفَتْحَةُ",
          en: "فَرْع · exception!",
          n: "٣",
          tone: "c3",
          equalCards: true,
          children: [
            {
              ar: "مَا لَا يَنْصَرِفُ",
              en: "The diptote (ممنوع من الصرف)",
              defAr: "الِاسْمُ الَّذِي لَا يَقْبَلُ التَّنْوِينَ — يُخْفَضُ بِالْفَتْحَةِ نِيَابَةً عَنِ الْكَسْرَةِ",
              defEn: "Exception: diptotes take فَتْحَة in خَفْض (not كَسْرَة) — unless they have أل or are mudāf, then كَسْرَة returns.",
              tone: "c3",
              leaf: true,
              blocks: [
                { kind: "ظَاهِرَة", en: "الْفَتْحَةُ نِيَابَةً عَنِ الْكَسْرَةِ", ex: "مَرَرْتُ بِأَحْمَدَ · مِنْ مَسَاجِدَ · بِعُمَرَ" },
                { kind: "ظَاهِرَة", en: "كَسْرَة returns with أل / إضافة", ex: "فِي الْمَسَاجِدِ · فِي مَسَاجِدِ الْمَدِينَةِ" },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: "alamat-jazm-guide",
    kind: "hierarchy",
    chapter: 3,
    kicker: "Chapter 3",
    titleAr: "عَلَامَاتُ الْجَزْمِ",
    title: "Verbs only · 2 signs",
    stackFirst: true,
    hideRoot: true,
    matnAr: "وَلِلْجَزْمِ عَلَامَتَانِ: السُّكُونُ، وَالْحَذْفُ",
    gloss: "One أَصْل (السُّكُون) and one فَرْع (الْحَذْف). No جَزْم on nouns.",
    root: {
      ar: "الْجَزْمُ",
      en: "2 signs · verbs only",
      children: [
        {
          ar: "السُّكُونُ",
          en: "أَصْل · always ظَاهِر",
          n: "١",
          tone: "c1",
          equalCards: true,
          children: [
            {
              ar: "الْمُضَارِعُ الصَّحِيحُ الْآخِرِ",
              en: "Muḍāriʿ with a sound ending",
              defAr: "الْفِعْلُ الْمُضَارِعُ الَّذِي لَيْسَ آخِرُهُ أَلِفًا وَلَا وَاوًا وَلَا يَاءً",
              defEn: "Ending is not a defective letter (ا / و / ي). After a جازم (e.g. لَمْ), the sign is سُكُون.",
              tone: "c1",
              leaf: true,
              blocks: [
                { kind: "ظَاهِرَة", en: "السُّكُونُ", ex: "لَمْ يَلْعَبْ · لَمْ يَنْجَحْ · لَمْ يُسَافِرْ · لَمْ يَكْتُبْ · لَمْ يَسْأَلْ" },
              ],
            },
          ],
        },
        {
          ar: "الْحَذْفُ",
          en: "فَرْع · letter dropped (not تقدير)",
          n: "٢",
          tone: "c4",
          equalCards: true,
          children: [
            {
              ar: "الْمُضَارِعُ الْمُعْتَلُّ الْآخِرِ",
              en: "Muḍāriʿ ending in ا / و / ي",
              n: "١",
              defAr: "آخِرُهُ حَرْفُ عِلَّةٍ — عَلَامَةُ جَزْمِهِ حَذْفُ ذَلِكَ الْحَرْفِ",
              defEn: "The defective letter is cut off. The vowel before it remains as a clue (فتحة → was ألف, ضمة → واو, كسرة → ياء).",
              tone: "c2",
              leaf: true,
              blocks: [
                { kind: "ظَاهِرَة", en: "حَذْفُ الْأَلِفِ", ex: "لَمْ يَسْعَ · لَمْ يَرْضَ · لَمْ يَبْقَ" },
                { kind: "ظَاهِرَة", en: "حَذْفُ الْوَاوِ", ex: "لَمْ يَدْعُ · لَمْ يَرْجُ · لَمْ يَسْمُ" },
                { kind: "ظَاهِرَة", en: "حَذْفُ الْيَاءِ", ex: "لَمْ يُعْطِ · لَمْ يَقْضِ · لَمْ يَهْدِ" },
              ],
            },
            {
              ar: "الْأَفْعَالُ الْخَمْسَةُ",
              en: "The five verbs",
              n: "٢",
              defAr: "الْأَفْعَالُ الْخَمْسَةُ الَّتِي رَفْعُهَا بِثُبُوتِ النُّونِ — جَزْمُهَا بِحَذْفِ النُّونِ",
              defEn:
                "The same five verbs whose رَفْع is by ثُبُوتُ النُّونِ — their جَزْم is by حَذْفُ النُّونِ.",
              tone: "c3",
              leaf: true,
              blocks: [
                {
                  kind: "ظَاهِرَة",
                  en: "حَذْفُ النُّونِ = جَزْم",
                  ex: "لَمْ يَكْتُبَا · لَمْ تَكْتُبَا · لَمْ يَكْتُبُوا · لَمْ تَكْتُبُوا · لَمْ تَكْتُبِي",
                  note: "compare رَفْع with نُون: يَكْتُبَانِ · تَكْتُبَانِ · يَكْتُبُونَ · تَكْتُبُونَ · تَكْتُبِينَ",
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: "muarabat",
    kind: "muarabat-table",
    kicker: "The declinables",
    title: "الْمُعْرَبَات — two kinds",
    /** Content from ALAMAT_MUARABAT_SUMMARY — rendered in FoundationsVerbsSeminarPage */
    left: {
      titleAr: "بِالْحَرَكَاتِ",
      titleEn: "Declined by vowels",
      tone: "c1",
      footer: "الضَّمَّة · الْفَتْحَة · الْكَسْرَة · السُّكُون",
      sideKey: "byHarakat",
    },
    right: {
      titleAr: "بِالْحُرُوفِ",
      titleEn: "Declined by letters",
      tone: "c5",
      footer: "الْأَلِف · الْوَاو · الْيَاء · النُّون · الْحَذْف",
      sideKey: "byHuruf",
    },
  },
  /* ── أفعال ── */
  {
    id: "afal-divider",
    kind: "divider",
    titleAr: "بَابُ الْأَفْعَالِ",
    line: "Types · rulings · النَّوَاصِب and الْجَوَازِم",
  },
  {
    id: "afal-three",
    kind: "verb-types",
    kicker: "Chapter 4",
    titleAr: "الْأَفْعَالُ ثَلَاثَةٌ",
    title: "The verb has three types",
    lead: "Sorted only by where the action sits relative to زَمَنُ التَّكَلُّمِ — the moment of speaking.",
    matnAr: "مَاضٍ، وَمُضَارِعٌ، وَأَمْرٌ، نَحْوُ: ضَرَبَ وَيَضْرِبُ وَاضْرِبْ",
    axis: [
      { ar: "قَبْلُ", en: "Before" },
      { ar: "الْآنَ / بَعْدُ", en: "Now / later" },
      { ar: "بَعْدُ", en: "After" },
    ],
    types: [
      {
        ar: "مَاضٍ",
        en: "Past",
        when: "Before speaking",
        tone: "c3",
        defAr: "مَا يَدُلُّ عَلَى حُصُولِ شَيْءٍ قَبْلَ زَمَنِ التَّكَلُّمِ",
        defEn: "Something already happened before the moment of speaking.",
        examples: [
          { ar: "ضَرَبَ", en: "he hit" },
          { ar: "نَصَرَ", en: "he helped" },
          { ar: "فَتَحَ", en: "he opened" },
        ],
      },
      {
        ar: "مُضَارِعٌ",
        en: "Present / future",
        when: "Now or later",
        tone: "c1",
        defAr: "مَا يَدُلُّ عَلَى حُصُولِ شَيْءٍ فِي زَمَنِ التَّكَلُّمِ أَوْ بَعْدَهُ",
        defEn: "Happening at speech-time, or still to come.",
        examples: [
          { ar: "يَضْرِبُ", en: "he hits" },
          { ar: "يَنْصُرُ", en: "he helps" },
          { ar: "يَفْتَحُ", en: "he opens" },
        ],
      },
      {
        ar: "أَمْرٌ",
        en: "Command",
        when: "After speaking",
        tone: "c2",
        defAr: "مَا يُطْلَبُ بِهِ حُصُولُ شَيْءٍ بَعْدَ زَمَنِ التَّكَلُّمِ",
        defEn: "Requests that something occur after speaking — not a report.",
        examples: [
          { ar: "اِضْرِبْ", en: "hit!" },
          { ar: "اُنْصُرْ", en: "help!" },
          { ar: "اِفْتَحْ", en: "open!" },
        ],
      },
    ],
    note: "مَاضٍ reports the past · مُضَارِع covers now or later · أَمْر only requests what is still to come.",
  },
  {
    id: "afal-rulings",
    kind: "ruling-cards",
    kicker: "Chapter 4",
    title: "Rulings — مَبْنِيّ vs مُعْرَب",
    lead: "Each of the three verbs has a default ruling — then clear cases where that ruling looks different on the surface.",
    cards: [
      {
        ar: "الْمَاضِي",
        tag: "مَبْنِيٌّ",
        ruling: "مَفْتُوحُ الْآخِرِ أَبَدًا",
        detail: "Always built on فَتْحَة — either ظَاهِرَة or مُقَدَّرَة.",
        tone: "c3",
        defaultEx: { ar: "كَتَبَ", en: "explicit فَتْحَة" },
        exceptionsTitle: "When the فَتْحَة is hidden",
        exceptions: [
          {
            ar: "تَعَذُّر",
            en: "Ends in alif — فَتْحَة estimated",
            ex: "دَعَا · سَعَى",
          },
          {
            ar: "مُنَاسَبَة",
            en: "واو الجماعة attached — place taken by ḍammah for و",
            ex: "كَتَبُوا · سَعِدُوا",
          },
          {
            ar: "تَوَالِي ٤ مُتَحَرِّكَات",
            en: "Mutaḥarrik subject pronoun — ends on sukūn",
            ex: "كَتَبْتُ · كَتَبْنَ",
          },
        ],
      },
      {
        ar: "الْأَمْرُ",
        tag: "مَبْنِيٌّ",
        ruling: "مَجْزُومٌ أَبَدًا",
        detail: "Built on whatever جَزْم its مُضَارِع would take.",
        tone: "c2",
        defaultEx: { ar: "اِكْتُبْ", en: "sound end → سُكُون" },
        exceptionsTitle: "How the building shows",
        exceptions: [
          {
            ar: "سُكُون",
            en: "Sound end, alone or with نون النسوة",
            ex: "اِضْرِبْ · اِضْرِبْنَ",
          },
          {
            ar: "حَذْفُ حَرْفِ الْعِلَّةِ",
            en: "Weak-ending مضارع → drop the weak letter",
            ex: "اُدْعُ · اِقْضِ · اِسْعَ",
          },
          {
            ar: "حَذْفُ النُّونِ",
            en: "From the five verbs → drop ن",
            ex: "اُكْتُبَا · اُكْتُبُوا · اُكْتُبِي",
          },
        ],
      },
      {
        ar: "الْمُضَارِعُ",
        tag: "مُعْرَبٌ",
        ruling: "مَرْفُوعٌ حَتَّى…",
        detail: "Stays in رَفْع until a نَاصِب or جَازِم enters — unless it becomes مَبْنِيّ.",
        tone: "c1",
        defaultEx: { ar: "يَكْتُبُ", en: "default رَفْع" },
        exceptionsTitle: "Exceptions & shifts",
        exceptions: [
          {
            ar: "نُونُ التَّوْكِيدِ",
            en: "Becomes مَبْنِيّ on فَتْحَة",
            ex: "لَيُسْجَنَنَّ · لَيَكُونًا",
          },
          {
            ar: "نُونُ النِّسْوَةِ",
            en: "Becomes مَبْنِيّ on سُكُون",
            ex: "يُرْضِعْنَ",
          },
          {
            ar: "نَاصِب / جَازِم",
            en: "Still مُعْرَب — shifts to نَصْب or جَزْم",
            ex: "لَنْ يَخِيبَ · لَمْ يَجْزَعْ",
          },
        ],
      },
    ],
  },
  {
    id: "afal-anaytu",
    kind: "anaytu",
    kicker: "Recognising الْمُضَارِع",
    title: "أَنَيْتُ — four augment letters",
    matnAr: "مَا كَانَ فِي أَوَّلِهِ إِحْدَى الزَّوَائِدِ الْأَرْبَعِ",
    letters: [
      { ar: "أ", en: "I (1st singular)", tone: "c1" },
      { ar: "ن", en: "We", tone: "c2" },
      { ar: "ي", en: "He / they (3rd)", tone: "c3" },
      { ar: "ت", en: "You / she", tone: "c4" },
    ],
    banner: "الْمُضَارِعُ is مَرْفُوع by default — until a نَاصِب or جَازِم acts on it.",
  },
  {
    id: "afal-nawasib",
    kind: "particle-chart",
    kicker: "Shifting الْمُضَارِع",
    title: "النَّوَاصِبُ — الْأَرْبَعَةُ",
    titleAr: "أَنْ · لَنْ · إِذَنْ · كَيْ",
    lead: "These four put الْمُضَارِع into نَصْب by themselves. Mark نَصْب with فَتْحَة — or by dropping ن in the five verbs.",
    how: [
      { ar: "يَكْتُبُ → لَنْ يَكْتُبَ", en: "فَتْحَة replaces ضَمَّة" },
      { ar: "يَكْتُبُونَ → لَنْ يَكْتُبُوا", en: "ن of the five verbs drops" },
    ],
    layout: "core4",
    groups: [
      {
        label: "Core four",
        labelAr: "يَنْصِبُ بِنَفْسِهِ",
        blurb: "Each one causes نَصْب directly — no hidden أَنْ.",
        tone: "c2",
        items: [
          {
            ar: "أَنْ",
            en: "that / to",
            meaning: "Source (مَصْدَرِيَّة) + نَصْب + future",
            tip: "Turns the verb into a that-clause / to-do sense.",
            ex: "أَطْمَعُ أَنْ يَغْفِرَ لِي",
            exEn: "I hope that He will forgive me",
          },
          {
            ar: "لَنْ",
            en: "will never",
            meaning: "Negation + نَصْب + future",
            tip: "Strong future denial — never / will not.",
            ex: "لَنْ نُؤْمِنَ لَكَ",
            exEn: "We will never believe you",
          },
          {
            ar: "إِذَنْ",
            en: "then… (in reply)",
            meaning: "جواب + نَصْب — only with 3 conditions",
            tip: "1) opens the reply · 2) verb is future · 3) nothing separates it (except oath / vocative / لا)",
            ex: "إِذَنْ تَنْجَحَ",
            exEn: "Then you will succeed",
          },
          {
            ar: "كَيْ",
            en: "so that / in order that",
            meaning: "Purpose + نَصْب (often with لـ)",
            tip: "Commonly لِكَيْ… — explains why the action is done.",
            ex: "لِكَيْلَا تَأْسَوْا",
            exEn: "so that you not grieve",
          },
        ],
      },
    ],
    note: "When you see one of these four before a مضارع: the verb is مَنْصُوب — look for فَتْحَة, or a missing ن on the five verbs.",
  },
  {
    id: "afal-jawazim",
    kind: "particle-chart",
    kicker: "Shifting الْمُضَارِع",
    title: "الْجَوَازِمُ — الثَّلَاثَةُ",
    titleAr: "لَمْ · لَا النَّاهِيَةُ · لَامُ الْأَمْرِ",
    lead: "These three put الْمُضَارِع into جَزْم. Mark جَزْم with سُكُون — or by deletion (weak letter / ن of the five verbs).",
    how: [
      { ar: "يَكْتُبُ → لَمْ يَكْتُبْ", en: "سُكُون replaces ضَمَّة" },
      { ar: "يَكْتُبُونَ → لَمْ يَكْتُبُوا", en: "ن of the five verbs drops" },
    ],
    layout: "focus3",
    groups: [
      {
        label: "Three جازم particles",
        tone: "c4",
        items: [
          {
            ar: "لَمْ",
            en: "did not",
            meaning: "Negation + جَزْم + turns meaning to the past",
            tip: "نَفْي · جَزْم · قَلْب — denies a past action using a مضارع form.",
            ex: "لَمْ يَجْزَعْ إِبْرَاهِيمُ",
            exEn: "Ibrāhīm did not panic",
          },
          {
            ar: "لَا النَّاهِيَةُ",
            en: "do not (prohibition)",
            meaning: "Forbids an action after the time of speaking",
            tip: "Addressed to the listener — a command not to do something.",
            ex: "لَا تَحْزَنْ",
            exEn: "Do not grieve",
          },
          {
            ar: "لَامُ الْأَمْرِ",
            en: "let him / may he… (command لام)",
            meaning: "Requests that someone do the action",
            tip: "Often with 3rd person: لِيَفْعَلْ — “let him do…”.",
            ex: "لِيُنْفِقْ",
            exEn: "Let him spend",
          },
        ],
      },
    ],
    note: "When you see one of these before a مضارع: the verb is مَجْزُوم — look for سُكُون, or a deleted weak letter / ن.",
  },
];

/** Interactive drill for Tuḥfat — نِيَابَةُ الْوَاوِ عَنِ الضَّمَّةِ */

import { bareArabicToken } from "./dammahDrillInteractive.js";

export const WAW_DRILL_INSTRUCTION = {
  ar: "بَيِّنِ الْمَرْفُوعَ بِالضَّمَّةِ الظَّاهِرَةِ، أَوِ الْمُقَدَّرَةِ، وَالْمَرْفُوعَ بِالْوَاوِ، مَعَ بَيَانِ نَوْعِ كُلِّ وَاحِدٍ مِنْهَا، مِنْ بَيْنِ الْكَلِمَاتِ الْوَارِدَةِ فِي الْجُمَلِ الْآتِيَةِ:",
  en: "Make clear that which is marfūʿ with an explicit ḍammah, an implicit ḍammah, and with the letter wāw—and name the type of each—among the words in the following sentences:",
};

export const WAW_DRILL_PASSAGE =
  "قَالَ اللَّهُ تَعَالَى: {قَدْ أَفْلَحَ الْمُؤْمِنُونَ، الَّذِينَ هُمْ فِي صَلَاتِهِمْ خَاشِعُونَ، وَالَّذِينَ هُمْ عَنِ اللَّغْوِ مُعْرِضُونَ، وَالَّذِينَ هُمْ لِفُرُوجِهِمْ حَافِظُونَ} وَقَالَ اللَّهُ تَعَالَى: {وَرَأَى الْمُجْرِمُونَ النَّارَ فَظَنُّوا أَنَّهُمْ مُوَاقِعُوهَا وَلَمْ يَجِدُوا عَنْهَا مَصْرِفًا}. الْفِتْنَةُ تُلْقِحُهَا النَّجْوَىٰ وَتُنْتِجُهَا الشَّكْوَىٰ .. إِخْوَانُكَ هُمْ أَعْوَانُكَ إِذَا اشْتَدَّ بِكَ الْكَرْبُ .. النَّائِبَاتُ مِحَكُّ الْأَصْدِقَاءِ .. أَبُوكَ يَتَمَنَّىٰ لَكَ الْخَيْرَ وَيَرْجُو لَكَ الْفَلَاحَ .. أَخُوكَ الَّذِي إِذَا تَشْكُو إِلَيْهِ يُشْكِيكَ .. وَإِذَا تَدْعُوهُ عِنْدَ الْكَرْبِ يُجِيبُكَ.";

export const WAW_MARKS = [
  { id: "dammah-zahira", ar: "ضَمَّةٌ ظَاهِرَةٌ", en: "Explicit ḍammah" },
  { id: "dammah-muqaddara", ar: "ضَمَّةٌ مُقَدَّرَةٌ", en: "Implicit ḍammah" },
  { id: "waw", ar: "الْوَاوُ", en: "The letter wāw" },
];

export const WAW_WORD_TYPES = [
  { id: "ism-mufrad", ar: "اسْمٌ مُفْرَدٌ", en: "Singular noun" },
  { id: "jam-takseer", ar: "جَمْعُ تَكْسِيرٍ", en: "Broken plural" },
  { id: "jam-muannath", ar: "جَمْعُ مُؤَنَّثٍ سَالِمٌ", en: "Sound feminine plural" },
  { id: "jam-mudhakkar", ar: "جَمْعُ مُذَكَّرٍ سَالِمٌ", en: "Sound masculine plural" },
  { id: "asma-khamsa", ar: "مِنَ الْأَسْمَاءِ الْخَمْسَةِ", en: "One of the five nouns" },
  { id: "mudari", ar: "فِعْلٌ مُضَارِعٌ", en: "Present-tense verb" },
];

export const WAW_REASONS = [
  { id: "taadhdhur", ar: "تَعَذُّرٌ", en: "Impossibility (alif)" },
  { id: "thiqal", ar: "ثِقَلٌ", en: "Heaviness (wāw / yāʾ)" },
  { id: "none", ar: "—", en: "Not needed" },
];

/**
 * Answer key: bare forms → { mark, type, reason, note }
 * Only words that are marfūʿ by ḍammah or by wāw in this drill.
 */
export const WAW_ANSWER_KEY = {
  الْمُؤْمِنُونَ: {
    mark: "waw",
    type: "jam-mudhakkar",
    reason: "none",
    note: "fāʿil — جَمْعُ مُذَكَّرٍ سَالِم, raised by وَاو",
  },
  خَاشِعُونَ: {
    mark: "waw",
    type: "jam-mudhakkar",
    reason: "none",
    note: "khabar of هُمْ — جَمْعُ مُذَكَّرٍ سَالِم by وَاو",
  },
  مُعْرِضُونَ: {
    mark: "waw",
    type: "jam-mudhakkar",
    reason: "none",
    note: "khabar of هُمْ — جَمْعُ مُذَكَّرٍ سَالِم by وَاو",
  },
  حَافِظُونَ: {
    mark: "waw",
    type: "jam-mudhakkar",
    reason: "none",
    note: "khabar of هُمْ — جَمْعُ مُذَكَّرٍ سَالِم by وَاو",
  },
  الْمُجْرِمُونَ: {
    mark: "waw",
    type: "jam-mudhakkar",
    reason: "none",
    note: "fāʿil — جَمْعُ مُذَكَّرٍ سَالِم by وَاو",
  },
  مُوَاقِعُوهَا: {
    mark: "waw",
    type: "jam-mudhakkar",
    reason: "none",
    note: "khabar of أَنَّ — جَمْع مُذَكَّر; ن dropped for iḍāfa to هَا",
  },
  الْفِتْنَةُ: {
    mark: "dammah-zahira",
    type: "ism-mufrad",
    reason: "none",
    note: "mubtadaʾ — singular noun, ضَمَّة ظَاهِرَة",
  },
  تُلْقِحُهَا: {
    mark: "dammah-zahira",
    type: "mudari",
    reason: "none",
    note: "muḍāriʿ — ضَمَّة ظَاهِرَة (object pronoun attached)",
  },
  وَتُنْتِجُهَا: {
    mark: "dammah-zahira",
    type: "mudari",
    reason: "none",
    note: "muḍāriʿ — ضَمَّة ظَاهِرَة (with coordinating وَ)",
  },
  النَّجْوَىٰ: {
    mark: "dammah-muqaddara",
    type: "ism-mufrad",
    reason: "taadhdhur",
    note: "fāʿil — maqṣūr noun; ضَمَّة مُقَدَّرَة for تَعَذُّر",
  },
  الشَّكْوَىٰ: {
    mark: "dammah-muqaddara",
    type: "ism-mufrad",
    reason: "taadhdhur",
    note: "fāʿil — maqṣūr; ضَمَّة مُقَدَّرَة for تَعَذُّر",
  },
  إِخْوَانُكَ: {
    mark: "dammah-zahira",
    type: "jam-takseer",
    reason: "none",
    note: "mubtadaʾ — جَمْع تَكْسِير of أَخ, ضَمَّة ظَاهِرَة",
  },
  أَعْوَانُكَ: {
    mark: "dammah-zahira",
    type: "jam-takseer",
    reason: "none",
    note: "khabar — جَمْع تَكْسِير, ضَمَّة ظَاهِرَة",
  },
  الْكَرْبُ: {
    mark: "dammah-zahira",
    type: "ism-mufrad",
    reason: "none",
    note: "fāʿil of اشْتَدَّ — singular, ضَمَّة ظَاهِرَة",
  },
  النَّائِبَاتُ: {
    mark: "dammah-zahira",
    type: "jam-muannath",
    reason: "none",
    note: "mubtadaʾ — جَمْع مُؤَنَّث سَالِم, ضَمَّة ظَاهِرَة",
  },
  مِحَكُّ: {
    mark: "dammah-zahira",
    type: "ism-mufrad",
    reason: "none",
    note: "khabar (mudāf) — ضَمَّة ظَاهِرَة",
  },
  أَبُوكَ: {
    mark: "waw",
    type: "asma-khamsa",
    reason: "none",
    note: "mubtadaʾ — from الْأَسْمَاء الْخَمْسَة, raised by وَاو",
  },
  يَتَمَنَّىٰ: {
    mark: "dammah-muqaddara",
    type: "mudari",
    reason: "taadhdhur",
    note: "muḍāriʿ ending in alif — ضَمَّة مُقَدَّرَة for تَعَذُّر",
  },
  وَيَرْجُو: {
    mark: "dammah-muqaddara",
    type: "mudari",
    reason: "thiqal",
    note: "muḍāriʿ ending in wāw — ضَمَّة مُقَدَّرَة for ثِقَل",
  },
  أَخُوكَ: {
    mark: "waw",
    type: "asma-khamsa",
    reason: "none",
    note: "mubtadaʾ — from الْأَسْمَاء الْخَمْسَة, raised by وَاو",
  },
  تَشْكُو: {
    mark: "dammah-muqaddara",
    type: "mudari",
    reason: "thiqal",
    note: "muḍāriʿ ending in wāw — ضَمَّة مُقَدَّرَة for ثِقَل",
  },
  يُشْكِيكَ: {
    mark: "dammah-zahira",
    type: "mudari",
    reason: "none",
    note: "muḍāriʿ — ضَمَّة ظَاهِرَة",
  },
  تَدْعُوهُ: {
    mark: "dammah-muqaddara",
    type: "mudari",
    reason: "thiqal",
    note: "muḍāriʿ تَدْعُو + هُ — ضَمَّة مُقَدَّرَة on the وَاو for ثِقَل",
  },
  يُجِيبُكَ: {
    mark: "dammah-zahira",
    type: "mudari",
    reason: "none",
    note: "muḍāriʿ — ضَمَّة ظَاهِرَة",
  },
};

export const WAW_QUIZ = [
  {
    id: "wq1",
    ar: "فِي كَمْ مَوْضِعٍ تَكُونُ الْوَاوُ عَلَامَةً لِلرَّفْعِ؟",
    en: "In how many situations is the wāw a sign of al-rafʿ?",
    kind: "choice",
    choices: [
      { id: "1", label: "One" },
      { id: "2", label: "Two" },
      { id: "3", label: "Three" },
      { id: "4", label: "Four" },
    ],
    answer: "2",
    explain:
      "Two مَوَاضِع: (1) جَمْعُ الْمُذَكَّرِ السَّالِمِ, (2) الْأَسْمَاءُ الْخَمْسَةُ (أَبُوكَ، أَخُوكَ، حَمُوكَ، فُوكَ، ذُو مَالٍ).",
  },
  {
    id: "wq2",
    ar: "مَا هُوَ جَمْعُ الْمُذَكَّرِ السَّالِمُ؟",
    en: "What is a sound masculine plural?",
    kind: "voice",
    model:
      "جَمْعُ الْمُذَكَّرِ السَّالِمِ is a noun that indicates more than two, with an addition at the end (وَاو+نُون or يَاء+نُون), that can be stripped of that addition and have its like coordinated to it. Examples: الْمُؤْمِنُونَ، الْمُجْرِمُونَ، صَابِرُونَ. In الرَّفْع the sign is الْوَاو نِيَابَةً عَنِ الضَّمَّةِ, and the نُون is عِوَض about تَنْوِين of the singular.",
  },
  {
    id: "wq3",
    ar: "مَثِّلْ لِجَمْعِ الْمُذَكَّرِ السَّالِمِ فِي حَالِ الرَّفْعِ بِثَلَاثَةِ أَمْثِلَةٍ.",
    en: "Give three examples of the sound masculine plural in the marfūʿ state.",
    kind: "voice",
    model:
      "Examples: الْمُؤْمِنُونَ، خَاشِعُونَ، الْمُجْرِمُونَ — each مَرْفُوع, and عَلَامَةُ رَفْعِهِ الْوَاوُ نِيَابَةً عَنِ الضَّمَّةِ.",
  },
  {
    id: "wq4",
    ar: "اذْكُرِ الْأَسْمَاءَ الْخَمْسَةَ.",
    en: "List the five nouns.",
    kind: "voice",
    model: "أَبُوكَ، أَخُوكَ، حَمُوكَ، فُوكَ، ذُو مَالٍ.",
  },
  {
    id: "wq5",
    ar: "مَا الَّذِي يُشْتَرَطُ فِي رَفْعِ الْأَسْمَاءِ الْخَمْسَةِ بِالْوَاوِ نِيَابَةً عَنِ الضَّمَّةِ؟",
    en: "What conditions are required for the five nouns to be raised by wāw?",
    kind: "voice",
    model:
      "Four conditions for all of them: (1) مُفْرَدَة (singular), (2) مُكَبَّرَة (not diminutive), (3) مُضَافَة (possessed), (4) إِضَافَتُهَا لِغَيْرِ يَاءِ الْمُتَكَلِّمِ. Extra for فُوكَ: free of مِيم (not فَم). Extra for ذُو: meaning صَاحِب, and mudāf ilayhi is a clear noun of kind, not an adjective.",
  },
  {
    id: "wq6",
    ar: "لَوْ كَانَتِ الْأَسْمَاءُ الْخَمْسَةُ مَجْمُوعَةً جَمْعَ تَكْسِيرٍ فَبِمَاذَا تُعْرَبُ؟",
    en: "If the five nouns are broken plurals, with what do they inflect?",
    kind: "voice",
    model:
      "With الظَّاهِرَة movements — like ordinary جَمْع تَكْسِير. Example: الْآبَاءُ يُرَبُّونَ أَبْنَاءَهُمْ (مَرْفُوع بِالضَّمَّة).",
  },
  {
    id: "wq7",
    ar: "لَوْ كَانَتِ الْأَسْمَاءُ الْخَمْسَةُ مُثَنَّاةً فَبِمَاذَا تُعْرَبُ؟",
    en: "If the five nouns are dual, with what do they inflect?",
    kind: "voice",
    model:
      "إِعْرَاب الْمُثَنَّى: رَفْع by أَلِف, نَصْب and جَرّ by يَاء. Example: أَبَوَاكَ رَبَّيَاكَ.",
  },
  {
    id: "wq8",
    ar: "مَثِّلْ بِمِثَالَيْنِ لِاسْمَيْنِ مِنَ الْأَسْمَاءِ الْخَمْسَةِ مُثَنَّيَيْنِ، وَبِمِثَالَيْنِ مَجْمُوعَيْنِ.",
    en: "Two dual examples and two plural examples from the five nouns.",
    kind: "voice",
    model:
      "Dual: أَبَوَاكَ، أَخَوَاكَ. Sound masculine plural: أَبُونَ، أَخُونَ (only أَب and أَخ commonly take وَاو/نُون).",
  },
  {
    id: "wq9",
    ar: "لَوْ كَانَتِ الْأَسْمَاءُ الْخَمْسَةُ مُصَغَّرَةً، أَوْ مُضَافَةً إِلَى يَاءِ الْمُتَكَلِّمِ، فَبِمَاذَا تُعْرَبُ؟",
    en: "If diminutive, or mudāf to yāʾ of the speaker — with what do they inflect?",
    kind: "voice",
    model:
      "Diminutive (أُبَيٌّ، أُخَيٌّ): with ظَاهِرَة movements. Mudāf to يَاء الْمُتَكَلِّم (أَبِي، أَخِي): with حَرَكَات مُقَدَّرَة before the yāʾ (maḥall occupied by ḥarakat al-munāsaba).",
  },
  {
    id: "wq10",
    ar: "مَا الَّذِي يُشْتَرَطُ فِي (ذُو) وَفِي (فُوكَ) خَاصَّةً؟",
    en: "What is required specifically for ذُو and for فُوكَ?",
    kind: "voice",
    model:
      "ذُو: (1) meaning صَاحِب, (2) mudāf ilayhi is ism jins ẓāhir, not a waṣf. فُوكَ: must be free of مِيم — if فَم, it takes ordinary movements.",
  },
  {
    id: "wq-fill1",
    ar: "ضَعْ فِي الْأَمَاكِنِ الْخَالِيَةِ اسْمًا مِنَ الْأَسْمَاءِ الْخَمْسَةِ مَرْفُوعًا بِالْوَاوِ:\n(أ) إِذَا دَعَاكَ ... فَأَجِبْهُ.\n(ب) لَقَدْ كَانَ مَعِي ... بِالْأَمْسِ.\n(ج) ... كَانَ صَدِيقًا لِي.\n(د) هَذَا الْكِتَابُ أَرْسَلَهُ لَكَ ...",
    en: "Fill each blank with one of the five nouns, marfūʿ by wāw. Speak your four answers.",
    kind: "voice",
    model:
      "Sample answers: (أ) أَبُوكَ / أَخُوكَ — (ب) أَخُوكَ / حَمُوكَ — (ج) أَبُوكَ / أَخُوكَ — (د) أَبُوكَ / أَخُوكَ / ذُو عِلْمٍ (any of the five that fit sense, raised by وَاو).",
  },
];

export function tokenizeWawPassage(passage = WAW_DRILL_PASSAGE) {
  return passage
    .split(/\s+/)
    .map((t) => t.trim())
    .filter(Boolean)
    .map((display, index) => ({
      index,
      display,
      bare: bareArabicToken(display),
    }));
}

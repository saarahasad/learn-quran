/** Interactive drill for Tuḥfat — Positions of the Ḍammah (تمارين + أسئلة) */

export const DAMMAH_DRILL_INSTRUCTION = {
  ar: "بَيِّنِ الْمَرْفُوعَاتِ بِالضَّمَّةِ وَأَنْوَاعَهَا، مَعَ بَيَانِ مَا تَكُونُ الضَّمَّةُ فِيهِ ظَاهِرَةً وَمَا تَكُونُ الضَّمَّةُ فِيهِ مُقَدَّرَةً، وَسَبَبِ تَقْدِيرِهَا، مِنْ بَيْنِ الْكَلِمَاتِ الْوَارِدَةِ فِي الْجُمَلِ الْآتِيَةِ:",
  en: "Detail that which is marfūʿ with a ḍammah and the types of them, and while doing so, make clear that which has an explicit ḍammah and that which has an implicit ḍammah—with the reason for its being implicit—in the following sentences:",
};

export const DAMMAH_DRILL_PASSAGE =
  "قَالَتْ أَعْرَابِيَّةٌ لِرَجُلٍ: مَا لَكَ تُعْطِي وَلَا تَعِدُ؟ قَالَ: مَا لَكِ وَالْوَعْدَ؟ قَالَتْ: يَنْفَسِحُ بِهِ الْأَمَلُ، وَتُطِيبُ بِهِ النَّفْسُ، وَيَرْتَاحُ إِلَيْهِ الْقَلْبُ. الدَّاعِي إِلَى الْخَيْرِ كَفَاعِلِهِ. الْخَلْقُ عِيَالُ اللَّهِ، فَأَحَبُّهُمْ إِلَى اللَّهِ أَنْفَعُهُمْ لِعِيَالِهِ ... أَوْلَى النَّاسِ بِالْعَفْوِ أَقْدَرُهُمْ عَلَى الْعُقُوبَةِ ... النِّسَاءُ حَبَائِلُ الشَّيْطَانِ ... عِنْدَ الشَّدَائِدِ تُعْرَفُ الْإِخْوَانُ ... تَهُونُ الْبَلَايَا بِالصَّبْرِ ... الْخَطَايَا تُظْلِمُ الْقَلْبَ ... الْقِرَى إِكْرَامُ الضَّيْفِ ... الظُّلْمُ ظُلُمَاتٌ يَوْمَ الْقِيَامَةِ.";

export const DAMMAH_WORD_TYPES = [
  { id: "ism-mufrad", ar: "اسْمٌ مُفْرَدٌ", en: "Singular noun" },
  { id: "jam-takseer", ar: "جَمْعُ تَكْسِيرٍ", en: "Broken plural" },
  { id: "jam-muannath", ar: "جَمْعُ مُؤَنَّثٍ سَالِمٌ", en: "Sound feminine plural" },
  { id: "mudari", ar: "فِعْلٌ مُضَارِعٌ", en: "Present-tense verb" },
];

export const DAMMAH_FORMS = [
  { id: "zahira", ar: "ظَاهِرَةٌ", en: "Explicit" },
  { id: "muqaddara", ar: "مُقَدَّرَةٌ", en: "Implicit" },
];

export const DAMMAH_REASONS = [
  { id: "taadhdhur", ar: "تَعَذُّرٌ", en: "Impossibility (alif / soft ending)" },
  { id: "thiqal", ar: "ثِقَلٌ", en: "Heaviness (wāw / yāʾ)" },
  { id: "none", ar: "—", en: "Not needed (explicit)" },
];

/**
 * Answer key: bare Arabic forms (no trailing punctuation) → classification.
 * Only words that are marfūʿ by ḍammah in the drill passage.
 */
export const DAMMAH_ANSWER_KEY = {
  أَعْرَابِيَّةٌ: {
    type: "ism-mufrad",
    form: "zahira",
    reason: "none",
    note: "fāʿil — singular feminine noun, ḍammah explicit",
  },
  تُعْطِي: {
    type: "mudari",
    form: "muqaddara",
    reason: "thiqal",
    note: "muḍāriʿ ending in yāʾ — ḍammah implicit for heaviness",
  },
  تَعِدُ: {
    type: "mudari",
    form: "zahira",
    reason: "none",
    note: "muḍāriʿ — ḍammah explicit",
  },
  يَنْفَسِحُ: {
    type: "mudari",
    form: "zahira",
    reason: "none",
    note: "muḍāriʿ — ḍammah explicit",
  },
  الْأَمَلُ: {
    type: "ism-mufrad",
    form: "zahira",
    reason: "none",
    note: "fāʿil — singular noun",
  },
  تُطِيبُ: {
    type: "mudari",
    form: "zahira",
    reason: "none",
    note: "muḍāriʿ — ḍammah explicit",
  },
  النَّفْسُ: {
    type: "ism-mufrad",
    form: "zahira",
    reason: "none",
    note: "fāʿil — singular noun",
  },
  يَرْتَاحُ: {
    type: "mudari",
    form: "zahira",
    reason: "none",
    note: "muḍāriʿ — ḍammah explicit",
  },
  الْقَلْبُ: {
    type: "ism-mufrad",
    form: "zahira",
    reason: "none",
    note: "fāʿil — singular noun",
  },
  الدَّاعِي: {
    type: "ism-mufrad",
    form: "muqaddara",
    reason: "thiqal",
    note: "mubtadaʾ — manqūṣ noun; ḍammah implicit on the yāʾ",
  },
  الْخَلْقُ: {
    type: "ism-mufrad",
    form: "zahira",
    reason: "none",
    note: "mubtadaʾ — singular noun",
  },
  عِيَالُ: {
    type: "ism-mufrad",
    form: "zahira",
    reason: "none",
    note: "khabar — singular (mudāf), ḍammah explicit",
  },
  أَحَبُّهُمْ: {
    type: "ism-mufrad",
    form: "zahira",
    reason: "none",
    note: "ism tafḍīl as mubtadaʾ — ḍammah explicit before the pronoun",
  },
  أَنْفَعُهُمْ: {
    type: "ism-mufrad",
    form: "zahira",
    reason: "none",
    note: "khabar — ism tafḍīl, ḍammah explicit",
  },
  أَوْلَى: {
    type: "ism-mufrad",
    form: "muqaddara",
    reason: "taadhdhur",
    note: "mubtadaʾ — ends with alif maqṣūra; ḍammah impossible to show",
  },
  أَقْدَرُهُمْ: {
    type: "ism-mufrad",
    form: "zahira",
    reason: "none",
    note: "khabar — ism tafḍīl, ḍammah explicit",
  },
  النِّسَاءُ: {
    type: "jam-takseer",
    form: "zahira",
    reason: "none",
    note: "mubtadaʾ — broken plural",
  },
  حَبَائِلُ: {
    type: "jam-takseer",
    form: "zahira",
    reason: "none",
    note: "khabar — broken plural (mudāf)",
  },
  تُعْرَفُ: {
    type: "mudari",
    form: "zahira",
    reason: "none",
    note: "muḍāriʿ (passive) — ḍammah explicit",
  },
  الْإِخْوَانُ: {
    type: "jam-takseer",
    form: "zahira",
    reason: "none",
    note: "nāʾib fāʿil — broken plural",
  },
  تَهُونُ: {
    type: "mudari",
    form: "zahira",
    reason: "none",
    note: "muḍāriʿ — ḍammah explicit",
  },
  الْبَلَايَا: {
    type: "jam-takseer",
    form: "muqaddara",
    reason: "taadhdhur",
    note: "fāʿil — broken plural ending in alif; ḍammah implicit",
  },
  الْخَطَايَا: {
    type: "jam-takseer",
    form: "muqaddara",
    reason: "taadhdhur",
    note: "mubtadaʾ — broken plural ending in alif; ḍammah implicit",
  },
  تُظْلِمُ: {
    type: "mudari",
    form: "zahira",
    reason: "none",
    note: "muḍāriʿ — ḍammah explicit",
  },
  الْقِرَى: {
    type: "ism-mufrad",
    form: "muqaddara",
    reason: "taadhdhur",
    note: "mubtadaʾ — maqṣūr noun; ḍammah implicit",
  },
  إِكْرَامُ: {
    type: "ism-mufrad",
    form: "zahira",
    reason: "none",
    note: "khabar — singular (mudāf)",
  },
  الظُّلْمُ: {
    type: "ism-mufrad",
    form: "zahira",
    reason: "none",
    note: "mubtadaʾ — singular noun",
  },
  ظُلُمَاتٌ: {
    type: "jam-muannath",
    form: "zahira",
    reason: "none",
    note: "khabar — sound feminine plural; ḍammah always explicit here",
  },
};

export const DAMMAH_QUIZ = [
  {
    id: "q1",
    ar: "فِي كَمْ مَوْضِعٍ تَكُونُ الضَّمَّةُ عَلَامَةً لِلرَّفْعِ؟",
    en: "In how many situations is the ḍammah a sign of al-rafʿ?",
    kind: "choice",
    choices: [
      { id: "2", label: "Two" },
      { id: "3", label: "Three" },
      { id: "4", label: "Four" },
      { id: "5", label: "Five" },
    ],
    answer: "4",
    explain:
      "Four مَوَاضِع: (1) الِاسْمُ الْمُفْرَدُ, (2) جَمْعُ التَّكْسِيرِ, (3) جَمْعُ الْمُؤَنَّثِ السَّالِمِ, (4) الْفِعْلُ الْمُضَارِعُ that has no نَاصِب or جَازِم, and is not connected to أَلِفُ الِاثْنَيْنِ, وَاوُ الْجَمَاعَةِ, يَاءُ الْمُخَاطَبَةِ, or نُونُ التَّوْكِيدِ.",
  },
  {
    id: "q2",
    ar: "مَا الْمُرَادُ بِالِاسْمِ الْمُفْرَدِ هُنَا؟ مَثِّلْ لِلِاسْمِ الْمُفْرَدِ بِأَرْبَعَةِ أَمْثِلَةٍ…",
    en: "What is meant here by a singular noun? Give four examples (m./f. × explicit/implicit ḍammah).",
    kind: "voice",
    model:
      "Here الِاسْمُ الْمُفْرَدُ means whatever is not a مُثَنًّى, not a جَمْعُ مُذَكَّرٍ سَالِم, and not a جَمْعُ مُؤَنَّثٍ سَالِم. Examples: مُحَمَّدٌ (مُذَكَّر, الضَّمَّةُ ظَاهِرَة), الْفَتَى (مُذَكَّر, الضَّمَّةُ مُقَدَّرَة for تَعَذُّر), فَاطِمَةُ / هِنْدٌ (مُؤَنَّث, الضَّمَّةُ ظَاهِرَة), لَيْلَى (مُؤَنَّث, الضَّمَّةُ مُقَدَّرَة for تَعَذُّر on the أَلِف).",
  },
  {
    id: "q3",
    ar: "مَا هُوَ جَمْعُ التَّكْسِيرِ؟ عَلَى كَمْ نَوْعٍ يَكُونُ التَّغَيُّرُ…",
    en: "What is the broken plural? How many kinds of change are there? Give examples…",
    kind: "voice",
    model:
      "جَمْعُ التَّكْسِيرِ is a plural where the بِنَاء of the مُفْرَد changes. The change may be by زِيَادَة (رِجَالٌ), by نَقْص (كُتُبٌ), by تَغْيِيرُ الشَّكْل (أُسُدٌ), or by both together. Example for مُذَكَّر with ضَمَّة مُقَدَّرَة: عَذَارَى. Example for مُؤَنَّث with ضَمَّة ظَاهِرَة: هُنُودٌ / زَيَانِبُ.",
  },
  {
    id: "q4",
    ar: "مَا هُوَ جَمْعُ الْمُؤَنَّثِ السَّالِمِ؟ هَلْ تَكُونُ الضَّمَّةُ مُقَدَّرَةً فِيهِ؟…",
    en: "What is the sound feminine plural? Can the ḍammah be implicit in it?…",
    kind: "voice",
    model:
      "جَمْعُ الْمُؤَنَّثِ السَّالِمِ is formed by adding أَلِف and تَاء at the end while the بِنَاء of the مُفْرَد stays sound. The ضَمَّة on it is never مُقَدَّرَة — it is always ظَاهِرَة. If the أَلِف is not an addition — e.g. قُضَاةٌ — then it is جَمْعُ تَكْسِير, and it is مَرْفُوع with a ضَمَّة ظَاهِرَة.",
  },
  {
    id: "q5",
    ar: "مَتَى يُرْفَعُ الْفِعْلُ الْمُضَارِعُ بِالضَّمَّةِ؟ مَثِّلْ بِثَلَاثَةِ أَمْثِلَةٍ…",
    en: "When is the muḍāriʿ raised by ḍammah? Give three examples with implicit ḍammah.",
    kind: "voice",
    model:
      "الْفِعْلُ الْمُضَارِعُ is مَرْفُوع by ضَمَّة when it is free of نَاصِب and جَازِم, and not connected to أَلِفُ الِاثْنَيْنِ, وَاوُ الْجَمَاعَةِ, يَاءُ الْمُخَاطَبَةِ, or نُونُ التَّوْكِيدِ. Examples of ضَمَّة مُقَدَّرَة: يَدْعُو (ثِقَل on the وَاو), يَخْشَى (تَعَذُّر on the أَلِف), يَرْمِي (ثِقَل on the يَاء).",
  },
];

/** Strip trailing Arabic punctuation for dictionary lookup */
export function bareArabicToken(token) {
  return String(token ?? "")
    .replace(/^[«"'ʻ\(\[\{]+/u, "")
    .replace(/[»"'ʼ\.,،؛:!\?؟\)\]\}…]+$/u, "")
    .trim();
}

export function tokenizeDammahPassage(passage = DAMMAH_DRILL_PASSAGE) {
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

/**
 * Tafsir 2 — Juz ‘Amma: an-Naba through al-Mutaffifeen
 *
 * Section types (shared with Aqeedah 2, plus tafsir visuals):
 *   heading, intro, definition, ayah, note, list, roadmap, comingSoon
 *   surahBanner  { type, title, lines: [string] }
 *   passage      { type, lead?, verses: [{ n, ar }], translation, ref }
 *   ribbon       { type, tone: "teal"|"green"|"rose"|"amber"|"sky", title?, body }
 *   verse        { type, ayah?, paras: [string], quote?: { text, ref } }
 *   terms        { type, items: [{ word, gloss, body }] }
 *   views        { type, title?, items: [string], note? }
 *   bars         { type, items: [{ tone, title, body }] }
 *   reflect      { type, n?, title?, prompt, parts: [{ letter, text }] }
 */

export const TAFSIR2_META = {
  id: "tafsir-2",
  name: "Tafsir of An-Naba to Al-Mutaffifin",
  nameAr: "التفسير",
  tagline: "Tafsir of six surahs from Juz ‘Amma — benefits and rulings, verse by verse.",
  description:
    "In this semester, we will study the Tafsir (exegesis) of a number of Surahs (chapters) from Juz (section) Amma: Surat an-Naba, An-Nazi‘aat, Abasa, At-Takweer, Al-Infitar, and al-Mutaffifeen. We will also learn the most important benefits extracted from the verses as well as the rulings pertaining to these verses. Allah is the Granter of success.",
  path: "/tafsir-2",
  category: "Tafsir",
  meta: "6 surahs · Notes, flashcards & quiz",
  accent: "teal",
  topics: ["Surat an-Naba", "Juz ‘Amma", "Benefits & rulings"],
  units: 7,
};

const comingSoon = (title) => [
  {
    type: "comingSoon",
    title,
    body: "Commentary for this surah will be added in this lesson. The lesson stays in place so your progress is kept.",
  },
];

const NABA_1_5 = [
  { n: "١", ar: "عَمَّ يَتَسَاءَلُونَ" },
  { n: "٢", ar: "عَنِ النَّبَإِ الْعَظِيمِ" },
  { n: "٣", ar: "الَّذِي هُمْ فِيهِ مُخْتَلِفُونَ" },
  { n: "٤", ar: "كَلَّا سَيَعْلَمُونَ" },
  { n: "٥", ar: "ثُمَّ كَلَّا سَيَعْلَمُونَ" },
];

const NABA_6_16 = [
  { n: "٦", ar: "أَلَمْ نَجْعَلِ الْأَرْضَ مِهَادًا" },
  { n: "٧", ar: "وَالْجِبَالَ أَوْتَادًا" },
  { n: "٨", ar: "وَخَلَقْنَاكُمْ أَزْوَاجًا" },
  { n: "٩", ar: "وَجَعَلْنَا نَوْمَكُمْ سُبَاتًا" },
  { n: "١٠", ar: "وَجَعَلْنَا اللَّيْلَ لِبَاسًا" },
  { n: "١١", ar: "وَجَعَلْنَا النَّهَارَ مَعَاشًا" },
  { n: "١٢", ar: "وَبَنَيْنَا فَوْقَكُمْ سَبْعًا شِدَادًا" },
  { n: "١٣", ar: "وَجَعَلْنَا سِرَاجًا وَهَّاجًا" },
  { n: "١٤", ar: "وَأَنزَلْنَا مِنَ الْمُعْصِرَاتِ مَاءً ثَجَّاجًا" },
  { n: "١٥", ar: "لِّنُخْرِجَ بِهِ حَبًّا وَنَبَاتًا" },
  { n: "١٦", ar: "وَجَنَّاتٍ أَلْفَافًا" },
];

const NABA_17_30 = [
  { n: "١٧", ar: "إِنَّ يَوْمَ الْفَصْلِ كَانَ مِيقَاتًا" },
  { n: "١٨", ar: "يَوْمَ يُنفَخُ فِي الصُّورِ فَتَأْتُونَ أَفْوَاجًا" },
  { n: "١٩", ar: "وَفُتِحَتِ السَّمَاءُ فَكَانَتْ أَبْوَابًا" },
  { n: "٢٠", ar: "وَسُيِّرَتِ الْجِبَالُ فَكَانَتْ سَرَابًا" },
  { n: "٢١", ar: "إِنَّ جَهَنَّمَ كَانَتْ مِرْصَادًا" },
  { n: "٢٢", ar: "لِّلطَّاغِينَ مَآبًا" },
  { n: "٢٣", ar: "لَّابِثِينَ فِيهَا أَحْقَابًا" },
  { n: "٢٤", ar: "لَّا يَذُوقُونَ فِيهَا بَرْدًا وَلَا شَرَابًا" },
  { n: "٢٥", ar: "إِلَّا حَمِيمًا وَغَسَّاقًا" },
  { n: "٢٦", ar: "جَزَاءً وِفَاقًا" },
  { n: "٢٧", ar: "إِنَّهُمْ كَانُوا لَا يَرْجُونَ حِسَابًا" },
  { n: "٢٨", ar: "وَكَذَّبُوا بِآيَاتِنَا كِذَّابًا" },
  { n: "٢٩", ar: "وَكُلَّ شَيْءٍ أَحْصَيْنَاهُ كِتَابًا" },
  { n: "٣٠", ar: "فَذُوقُوا فَلَن نَّزِيدَكُمْ إِلَّا عَذَابًا" },
];

const NABA_31_36 = [
  { n: "٣١", ar: "إِنَّ لِلْمُتَّقِينَ مَفَازًا" },
  { n: "٣٢", ar: "حَدَائِقَ وَأَعْنَابًا" },
  { n: "٣٣", ar: "وَكَوَاعِبَ أَتْرَابًا" },
  { n: "٣٤", ar: "وَكَأْسًا دِهَاقًا" },
  { n: "٣٥", ar: "لَّا يَسْمَعُونَ فِيهَا لَغْوًا وَلَا كِذَّابًا" },
  { n: "٣٦", ar: "جَزَاءً مِّن رَّبِّكَ عَطَاءً حِسَابًا" },
];

const NABA_37_40 = [
  { n: "٣٧", ar: "رَّبِّ السَّمَاوَاتِ وَالْأَرْضِ وَمَا بَيْنَهُمَا الرَّحْمَٰنِ لَا يَمْلِكُونَ مِنْهُ خِطَابًا" },
  { n: "٣٨", ar: "يَوْمَ يَقُومُ الرُّوحُ وَالْمَلَائِكَةُ صَفًّا لَّا يَتَكَلَّمُونَ إِلَّا مَنْ أَذِنَ لَهُ الرَّحْمَٰنُ وَقَالَ صَوَابًا" },
  { n: "٣٩", ar: "ذَٰلِكَ الْيَوْمُ الْحَقُّ فَمَن شَاءَ اتَّخَذَ إِلَىٰ رَبِّهِ مَآبًا" },
  { n: "٤٠", ar: "إِنَّا أَنذَرْنَاكُمْ عَذَابًا قَرِيبًا يَوْمَ يَنظُرُ الْمَرْءُ مَا قَدَّمَتْ يَدَاهُ وَيَقُولُ الْكَافِرُ يَا لَيْتَنِي كُنتُ تُرَابًا" },
];

const NAZIAT_1_14 = [
  { n: "١", ar: "وَالنَّازِعَاتِ غَرْقًا" },
  { n: "٢", ar: "وَالنَّاشِطَاتِ نَشْطًا" },
  { n: "٣", ar: "وَالسَّابِحَاتِ سَبْحًا" },
  { n: "٤", ar: "فَالسَّابِقَاتِ سَبْقًا" },
  { n: "٥", ar: "فَالْمُدَبِّرَاتِ أَمْرًا" },
  { n: "٦", ar: "يَوْمَ تَرْجُفُ الرَّاجِفَةُ" },
  { n: "٧", ar: "تَتْبَعُهَا الرَّادِفَةُ" },
  { n: "٨", ar: "قُلُوبٌ يَوْمَئِذٍ وَاجِفَةٌ" },
  { n: "٩", ar: "أَبْصَارُهَا خَاشِعَةٌ" },
  { n: "١٠", ar: "يَقُولُونَ أَإِنَّا لَمَرْدُودُونَ فِي الْحَافِرَةِ" },
  { n: "١١", ar: "أَإِذَا كُنَّا عِظَامًا نَّخِرَةً" },
  { n: "١٢", ar: "قَالُوا تِلْكَ إِذًا كَرَّةٌ خَاسِرَةٌ" },
  { n: "١٣", ar: "فَإِنَّمَا هِيَ زَجْرَةٌ وَاحِدَةٌ" },
  { n: "١٤", ar: "فَإِذَا هُم بِالسَّاهِرَةِ" },
];

const NAZIAT_15_26 = [
  { n: "١٥", ar: "هَلْ أَتَىٰكَ حَدِيثُ مُوسَىٰ" },
  { n: "١٦", ar: "إِذْ نَادَاهُ رَبُّهُ بِالْوَادِ الْمُقَدَّسِ طُوًى" },
  { n: "١٧", ar: "اذْهَبْ إِلَىٰ فِرْعَوْنَ إِنَّهُ طَغَىٰ" },
  { n: "١٨", ar: "فَقُلْ هَل لَّكَ إِلَىٰ أَن تَزَكَّىٰ" },
  { n: "١٩", ar: "وَأَهْدِيَكَ إِلَىٰ رَبِّكَ فَتَخْشَىٰ" },
  { n: "٢٠", ar: "فَأَرَاهُ الْآيَةَ الْكُبْرَىٰ" },
  { n: "٢١", ar: "فَكَذَّبَ وَعَصَىٰ" },
  { n: "٢٢", ar: "ثُمَّ أَدْبَرَ يَسْعَىٰ" },
  { n: "٢٣", ar: "فَحَشَرَ فَنَادَىٰ" },
  { n: "٢٤", ar: "فَقَالَ أَنَا رَبُّكُمُ الْأَعْلَىٰ" },
  { n: "٢٥", ar: "فَأَخَذَهُ اللَّهُ نَكَالَ الْآخِرَةِ وَالْأُولَىٰ" },
  { n: "٢٦", ar: "إِنَّ فِي ذَٰلِكَ لَعِبْرَةً لِّمَن يَخْشَىٰ" },
];

const NAZIAT_27_33 = [
  { n: "٢٧", ar: "أَأَنتُمْ أَشَدُّ خَلْقًا أَمِ السَّمَاءُ بَنَاهَا" },
  { n: "٢٨", ar: "رَفَعَ سَمْكَهَا فَسَوَّاهَا" },
  { n: "٢٩", ar: "وَأَغْطَشَ لَيْلَهَا وَأَخْرَجَ ضُحَاهَا" },
  { n: "٣٠", ar: "وَالْأَرْضَ بَعْدَ ذَٰلِكَ دَحَاهَا" },
  { n: "٣١", ar: "أَخْرَجَ مِنْهَا مَاءَهَا وَمَرْعَاهَا" },
  { n: "٣٢", ar: "وَالْجِبَالَ أَرْسَاهَا" },
  { n: "٣٣", ar: "مَتَاعًا لَّكُمْ وَلِأَنْعَامِكُمْ" },
];

const NAZIAT_34_41 = [
  { n: "٣٤", ar: "فَإِذَا جَاءَتِ الطَّامَّةُ الْكُبْرَىٰ" },
  { n: "٣٥", ar: "يَوْمَ يَتَذَكَّرُ الْإِنسَانُ مَا سَعَىٰ" },
  { n: "٣٦", ar: "وَبُرِّزَتِ الْجَحِيمُ لِمَن يَرَىٰ" },
  { n: "٣٧", ar: "فَأَمَّا مَن طَغَىٰ" },
  { n: "٣٨", ar: "وَآثَرَ الْحَيَاةَ الدُّنْيَا" },
  { n: "٣٩", ar: "فَإِنَّ الْجَحِيمَ هِيَ الْمَأْوَىٰ" },
  { n: "٤٠", ar: "وَأَمَّا مَنْ خَافَ مَقَامَ رَبِّهِ وَنَهَى النَّفْسَ عَنِ الْهَوَىٰ" },
  { n: "٤١", ar: "فَإِنَّ الْجَنَّةَ هِيَ الْمَأْوَىٰ" },
];

const NAZIAT_42_46 = [
  { n: "٤٢", ar: "يَسْأَلُونَكَ عَنِ السَّاعَةِ أَيَّانَ مُرْسَىٰهَا" },
  { n: "٤٣", ar: "فِيمَ أَنتَ مِن ذِكْرَاهَا" },
  { n: "٤٤", ar: "إِلَىٰ رَبِّكَ مُنتَهَاهَا" },
  { n: "٤٥", ar: "إِنَّمَا أَنتَ مُنذِرُ مَن يَخْشَاهَا" },
  { n: "٤٦", ar: "كَأَنَّهُمْ يَوْمَ يَرَوْنَهَا لَمْ يَلْبَثُوا إِلَّا عَشِيَّةً أَوْ ضُحَاهَا" },
];

const ABASA_1_10 = [
  { n: "١", ar: "عَبَسَ وَتَوَلَّىٰ" },
  { n: "٢", ar: "أَن جَاءَهُ الْأَعْمَىٰ" },
  { n: "٣", ar: "وَمَا يُدْرِيكَ لَعَلَّهُ يَزَّكَّىٰ" },
  { n: "٤", ar: "أَوْ يَذَّكَّرُ فَتَنفَعَهُ الذِّكْرَىٰ" },
  { n: "٥", ar: "أَمَّا مَنِ اسْتَغْنَىٰ" },
  { n: "٦", ar: "فَأَنتَ لَهُ تَصَدَّىٰ" },
  { n: "٧", ar: "وَمَا عَلَيْكَ أَلَّا يَزَّكَّىٰ" },
  { n: "٨", ar: "وَأَمَّا مَن جَاءَكَ يَسْعَىٰ" },
  { n: "٩", ar: "وَهُوَ يَخْشَىٰ" },
  { n: "١٠", ar: "فَأَنتَ عَنْهُ تَلَهَّىٰ" },
];

const ABASA_11_23 = [
  { n: "١١", ar: "كَلَّا إِنَّهَا تَذْكِرَةٌ" },
  { n: "١٢", ar: "فَمَن شَاءَ ذَكَرَهُ" },
  { n: "١٣", ar: "فِي صُحُفٍ مُّكَرَّمَةٍ" },
  { n: "١٤", ar: "مَّرْفُوعَةٍ مُّطَهَّرَةٍ" },
  { n: "١٥", ar: "بِأَيْدِي سَفَرَةٍ" },
  { n: "١٦", ar: "كِرَامٍ بَرَرَةٍ" },
  { n: "١٧", ar: "قُتِلَ الْإِنسَانُ مَا أَكْفَرَهُ" },
  { n: "١٨", ar: "مِنْ أَيِّ شَيْءٍ خَلَقَهُ" },
  { n: "١٩", ar: "مِن نُّطْفَةٍ خَلَقَهُ فَقَدَّرَهُ" },
  { n: "٢٠", ar: "ثُمَّ السَّبِيلَ يَسَّرَهُ" },
  { n: "٢١", ar: "ثُمَّ أَمَاتَهُ فَأَقْبَرَهُ" },
  { n: "٢٢", ar: "ثُمَّ إِذَا شَاءَ أَنشَرَهُ" },
  { n: "٢٣", ar: "كَلَّا لَمَّا يَقْضِ مَا أَمَرَهُ" },
];

const ABASA_24_32 = [
  { n: "٢٤", ar: "فَلْيَنظُرِ الْإِنسَانُ إِلَىٰ طَعَامِهِ" },
  { n: "٢٥", ar: "أَنَّا صَبَبْنَا الْمَاءَ صَبًّا" },
  { n: "٢٦", ar: "ثُمَّ شَقَقْنَا الْأَرْضَ شَقًّا" },
  { n: "٢٧", ar: "فَأَنبَتْنَا فِيهَا حَبًّا" },
  { n: "٢٨", ar: "وَعِنَبًا وَقَضْبًا" },
  { n: "٢٩", ar: "وَزَيْتُونًا وَنَخْلًا" },
  { n: "٣٠", ar: "وَحَدَائِقَ غُلْبًا" },
  { n: "٣١", ar: "وَفَاكِهَةً وَأَبًّا" },
  { n: "٣٢", ar: "مَّتَاعًا لَّكُمْ وَلِأَنْعَامِكُمْ" },
];

const ABASA_33_42 = [
  { n: "٣٣", ar: "فَإِذَا جَاءَتِ الصَّاخَّةُ" },
  { n: "٣٤", ar: "يَوْمَ يَفِرُّ الْمَرْءُ مِنْ أَخِيهِ" },
  { n: "٣٥", ar: "وَأُمِّهِ وَأَبِيهِ" },
  { n: "٣٦", ar: "وَصَاحِبَتِهِ وَبَنِيهِ" },
  { n: "٣٧", ar: "لِكُلِّ امْرِئٍ مِّنْهُمْ يَوْمَئِذٍ شَأْنٌ يُغْنِيهِ" },
  { n: "٣٨", ar: "وُجُوهٌ يَوْمَئِذٍ مُّسْفِرَةٌ" },
  { n: "٣٩", ar: "ضَاحِكَةٌ مُّسْتَبْشِرَةٌ" },
  { n: "٤٠", ar: "وَوُجُوهٌ يَوْمَئِذٍ عَلَيْهَا غَبَرَةٌ" },
  { n: "٤١", ar: "تَرْهَقُهَا قَتَرَةٌ" },
  { n: "٤٢", ar: "أُولَٰئِكَ هُمُ الْكَفَرَةُ الْفَجَرَةُ" },
];

const TAKWEER_1_14 = [
  { n: "١", ar: "إِذَا الشَّمْسُ كُوِّرَتْ" },
  { n: "٢", ar: "وَإِذَا النُّجُومُ انكَدَرَتْ" },
  { n: "٣", ar: "وَإِذَا الْجِبَالُ سُيِّرَتْ" },
  { n: "٤", ar: "وَإِذَا الْعِشَارُ عُطِّلَتْ" },
  { n: "٥", ar: "وَإِذَا الْوُحُوشُ حُشِرَتْ" },
  { n: "٦", ar: "وَإِذَا الْبِحَارُ سُجِّرَتْ" },
  { n: "٧", ar: "وَإِذَا النُّفُوسُ زُوِّجَتْ" },
  { n: "٨", ar: "وَإِذَا الْمَوْءُودَةُ سُئِلَتْ" },
  { n: "٩", ar: "بِأَيِّ ذَنبٍ قُتِلَتْ" },
  { n: "١٠", ar: "وَإِذَا الصُّحُفُ نُشِرَتْ" },
  { n: "١١", ar: "وَإِذَا السَّمَاءُ كُشِطَتْ" },
  { n: "١٢", ar: "وَإِذَا الْجَحِيمُ سُعِّرَتْ" },
  { n: "١٣", ar: "وَإِذَا الْجَنَّةُ أُزْلِفَتْ" },
  { n: "١٤", ar: "عَلِمَتْ نَفْسٌ مَّا أَحْضَرَتْ" },
];

const TAKWEER_15_29 = [
  { n: "١٥", ar: "فَلَا أُقْسِمُ بِالْخُنَّسِ" },
  { n: "١٦", ar: "الْجَوَارِ الْكُنَّسِ" },
  { n: "١٧", ar: "وَاللَّيْلِ إِذَا عَسْعَسَ" },
  { n: "١٨", ar: "وَالصُّبْحِ إِذَا تَنَفَّسَ" },
  { n: "١٩", ar: "إِنَّهُ لَقَوْلُ رَسُولٍ كَرِيمٍ" },
  { n: "٢٠", ar: "ذِي قُوَّةٍ عِندَ ذِي الْعَرْشِ مَكِينٍ" },
  { n: "٢١", ar: "مُطَاعٍ ثَمَّ أَمِينٍ" },
  { n: "٢٢", ar: "وَمَا صَاحِبُكُم بِمَجْنُونٍ" },
  { n: "٢٣", ar: "وَلَقَدْ رَآهُ بِالْأُفُقِ الْمُبِينِ" },
  { n: "٢٤", ar: "وَمَا هُوَ عَلَى الْغَيْبِ بِضَنِينٍ" },
  { n: "٢٥", ar: "وَمَا هُوَ بِقَوْلِ شَيْطَانٍ رَّجِيمٍ" },
  { n: "٢٦", ar: "فَأَيْنَ تَذْهَبُونَ" },
  { n: "٢٧", ar: "إِنْ هُوَ إِلَّا ذِكْرٌ لِّلْعَٰلَمِينَ" },
  { n: "٢٨", ar: "لِمَن شَاءَ مِنكُمْ أَن يَسْتَقِيمَ" },
  { n: "٢٩", ar: "وَمَا تَشَاءُونَ إِلَّا أَن يَشَاءَ اللَّهُ رَبُّ الْعَٰلَمِينَ" },
];

const INFITAR_1_8 = [
  { n: "١", ar: "إِذَا السَّمَاءُ انفَطَرَتْ" },
  { n: "٢", ar: "وَإِذَا الْكَوَاكِبُ انتَثَرَتْ" },
  { n: "٣", ar: "وَإِذَا الْبِحَارُ فُجِّرَتْ" },
  { n: "٤", ar: "وَإِذَا الْقُبُورُ بُعْثِرَتْ" },
  { n: "٥", ar: "عَلِمَتْ نَفْسٌ مَّا قَدَّمَتْ وَأَخَّرَتْ" },
  { n: "٦", ar: "يَٰٓأَيُّهَا الْإِنسَانُ مَا غَرَّكَ بِرَبِّكَ الْكَرِيمِ" },
  { n: "٧", ar: "الَّذِي خَلَقَكَ فَسَوَّاكَ فَعَدَلَكَ" },
  { n: "٨", ar: "فِي أَيِّ صُورَةٍ مَّا شَاءَ رَكَّبَكَ" },
];

const INFITAR_9_19 = [
  { n: "٩", ar: "كَلَّا بَلْ تُكَذِّبُونَ بِالدِّينِ" },
  { n: "١٠", ar: "وَإِنَّ عَلَيْكُمْ لَحَافِظِينَ" },
  { n: "١١", ar: "كِرَامًا كَاتِبِينَ" },
  { n: "١٢", ar: "يَعْلَمُونَ مَا تَفْعَلُونَ" },
  { n: "١٣", ar: "إِنَّ الْأَبْرَارَ لَفِي نَعِيمٍ" },
  { n: "١٤", ar: "وَإِنَّ الْفُجَّارَ لَفِي جَحِيمٍ" },
  { n: "١٥", ar: "يَصْلَوْنَهَا يَوْمَ الدِّينِ" },
  { n: "١٦", ar: "وَمَا هُمْ عَنْهَا بِغَائِبِينَ" },
  { n: "١٧", ar: "وَمَا أَدْرَاكَ مَا يَوْمُ الدِّينِ" },
  { n: "١٨", ar: "ثُمَّ مَا أَدْرَاكَ مَا يَوْمُ الدِّينِ" },
  { n: "١٩", ar: "يَوْمَ لَا تَمْلِكُ نَفْسٌ لِّنَفْسٍ شَيْئًا وَالْأَمْرُ يَوْمَئِذٍ لِّلَّهِ" },
];

const MUTAFFIFEEN_1_6 = [
  { n: "١", ar: "وَيْلٌ لِّلْمُطَفِّفِينَ" },
  { n: "٢", ar: "الَّذِينَ إِذَا اكْتَالُوا عَلَى النَّاسِ يَسْتَوْفُونَ" },
  { n: "٣", ar: "وَإِذَا كَالُوهُمْ أَو وَّزَنُوهُمْ يُخْسِرُونَ" },
  { n: "٤", ar: "أَلَا يَظُنُّ أُولَٰئِكَ أَنَّهُم مَّبْعُوثُونَ" },
  { n: "٥", ar: "لِيَوْمٍ عَظِيمٍ" },
  { n: "٦", ar: "يَوْمَ يَقُومُ النَّاسُ لِرَبِّ الْعَٰلَمِينَ" },
];

const MUTAFFIFEEN_7_17 = [
  { n: "٧", ar: "كَلَّا إِنَّ كِتَابَ الْفُجَّارِ لَفِي سِجِّينٍ" },
  { n: "٨", ar: "وَمَا أَدْرَاكَ مَا سِجِّينٌ" },
  { n: "٩", ar: "كِتَابٌ مَّرْقُومٌ" },
  { n: "١٠", ar: "وَيْلٌ يَوْمَئِذٍ لِّلْمُكَذِّبِينَ" },
  { n: "١١", ar: "الَّذِينَ يُكَذِّبُونَ بِيَوْمِ الدِّينِ" },
  { n: "١٢", ar: "وَمَا يُكَذِّبُ بِهِ إِلَّا كُلُّ مُعْتَدٍ أَثِيمٍ" },
  { n: "١٣", ar: "إِذَا تُتْلَىٰ عَلَيْهِ آيَاتُنَا قَالَ أَسَاطِيرُ الْأَوَّلِينَ" },
  { n: "١٤", ar: "كَلَّا بَلْ رَانَ عَلَىٰ قُلُوبِهِم مَّا كَانُوا يَكْسِبُونَ" },
  { n: "١٥", ar: "كَلَّا إِنَّهُمْ عَن رَّبِّهِمْ يَوْمَئِذٍ لَّمَحْجُوبُونَ" },
  { n: "١٦", ar: "ثُمَّ إِنَّهُمْ لَصَالُوا الْجَحِيمِ" },
  { n: "١٧", ar: "ثُمَّ يُقَالُ هَٰذَا الَّذِي كُنتُم بِهِ تُكَذِّبُونَ" },
];

const MUTAFFIFEEN_18_28 = [
  { n: "١٨", ar: "كَلَّا إِنَّ كِتَابَ الْأَبْرَارِ لَفِي عِلِّيِّينَ" },
  { n: "١٩", ar: "وَمَا أَدْرَاكَ مَا عِلِّيُّونَ" },
  { n: "٢٠", ar: "كِتَابٌ مَّرْقُومٌ" },
  { n: "٢١", ar: "يَشْهَدُهُ الْمُقَرَّبُونَ" },
  { n: "٢٢", ar: "إِنَّ الْأَبْرَارَ لَفِي نَعِيمٍ" },
  { n: "٢٣", ar: "عَلَى الْأَرَائِكِ يَنظُرُونَ" },
  { n: "٢٤", ar: "تَعْرِفُ فِي وُجُوهِهِمْ نَضْرَةَ النَّعِيمِ" },
  { n: "٢٥", ar: "يُسْقَوْنَ مِن رَّحِيقٍ مَّخْتُومٍ" },
  { n: "٢٦", ar: "خِتَامُهُ مِسْكٌ وَفِي ذَٰلِكَ فَلْيَتَنَافَسِ الْمُتَنَافِسُونَ" },
  { n: "٢٧", ar: "وَمِزَاجُهُ مِن تَسْنِيمٍ" },
  { n: "٢٨", ar: "عَيْنًا يَشْرَبُ بِهَا الْمُقَرَّبُونَ" },
];

const MUTAFFIFEEN_29_36 = [
  { n: "٢٩", ar: "إِنَّ الَّذِينَ أَجْرَمُوا كَانُوا مِنَ الَّذِينَ آمَنُوا يَضْحَكُونَ" },
  { n: "٣٠", ar: "وَإِذَا مَرُّوا بِهِمْ يَتَغَامَزُونَ" },
  { n: "٣١", ar: "وَإِذَا انقَلَبُوا إِلَىٰ أَهْلِهِمُ انقَلَبُوا فَكِهِينَ" },
  { n: "٣٢", ar: "وَإِذَا رَأَوْهُمْ قَالُوا إِنَّ هَٰؤُلَاءِ لَضَالُّونَ" },
  { n: "٣٣", ar: "وَمَا أُرْسِلُوا عَلَيْهِمْ حَافِظِينَ" },
  { n: "٣٤", ar: "فَالْيَوْمَ الَّذِينَ آمَنُوا مِنَ الْكُفَّارِ يَضْحَكُونَ" },
  { n: "٣٥", ar: "عَلَى الْأَرَائِكِ يَنظُرُونَ" },
  { n: "٣٦", ar: "هَلْ ثُوِّبَ الْكُفَّارُ مَا كَانُوا يَفْعَلُونَ" },
];

export const TAFSIR2_UNITS = [
  {
    id: "semester",
    title: "This semester",
    titleAr: "جزء عم",
    lessons: [
      {
        id: "contents",
        title: "Contents",
        icon: "١",
        sections: [
          {
            type: "intro",
            text: "In this semester, we will study the Tafsir (exegesis) of a number of Surahs (chapters) from Juz (section) Amma: Surat an-Naba, An-Nazi‘aat, Abasa, At-Takweer, Al-Infitar, and al-Mutaffifeen. We will also learn the most important benefits extracted from the verses as well as the rulings pertaining to these verses. Allah is the Granter of success.",
          },
          {
            type: "heading",
            kicker: "Juz ‘Amma",
            title: "In this semester we will study",
          },
          {
            type: "roadmap",
            items: [
              { title: "Commentary on Surat an-Naba", subtitle: "النَّبَأ" },
              { title: "Commentary on Surat an-Nazi‘aat", subtitle: "النَّازِعَات" },
              { title: "Commentary on Surat Abasa", subtitle: "عَبَسَ" },
              { title: "Commentary on Surat at-Takweer", subtitle: "التَّكْوِير" },
              { title: "Commentary on Surat al-Infitar", subtitle: "الِانفِطَار" },
              { title: "Commentary on Surat al-Mutaffifeen", subtitle: "الْمُطَفِّفِينَ" },
            ],
          },
          {
            type: "note",
            tone: "benefit",
            title: "With every passage",
            body: "Alongside the tafsir, we learn the most important benefits extracted from the verses, and the rulings that pertain to them.",
          },
        ],
      },
      {
        id: "benefits-index",
        title: "Index of benefits",
        icon: "٢",
        sections: [
          {
            type: "heading",
            title: "Benefits from the verses",
          },
          {
            type: "index",
            tone: "gold",
            title: "Surat an-Naba",
            items: [
              "The reason why the evidence for the resurrection begins with a reference to the creation of the earth",
              "The verb nukhrij (lit. We bring forth) is used instead of nunbit (lit. We cause to grow)...",
              "In the phrase {That We may bring forth thereby grain and vegetation ...}, grain is mentioned first",
              "The Fire is already created and exists at present",
              "Disbelief in the resurrection ... is the foundation of disbelief, misdemeanours and sins",
              "So our gatherings should be free of idle talk and lies",
              "Admittance to Paradise ... can only be attained by following the Prophet ﷺ",
              "The concept of intercession is one of mercy",
              "Description of the Day of Resurrection as the True Day",
            ],
          },
          {
            type: "index",
            tone: "purple",
            title: "Surat an-Nazi‘aat",
            items: [
              "The reason for the harshness with which the angels extract the souls of the disbelievers, and the gentleness with which they take the souls of the believers",
              "Calling the Angel of Death Azraeel",
              "Why the land of gathering is called as-saahirah (“the earth’s surface”)",
              "The difference between khashyah and khawf",
              "The reason why Allah tells us the story of Pharaoh after mentioning how the polytheists denied the resurrection",
              "When calling people to Allah, it is essential to be gentle and kind",
              "The creation of the earth itself came before the creation of the heaven itself",
              "The bringing forth of Hell and how it will be viewed by believers and the disbelievers",
              "The reason fear of Allah and prohibition of whims and desires are mentioned together",
              "Why the word mursaahaa (its arrival) is used to refer to the onset of the Day of Resurrection",
              "The interest served by withholding knowledge of when the Day of Resurrection will come",
              "Describing the warning as being specifically for those who fear Allah",
            ],
          },
          {
            type: "index",
            tone: "sky",
            title: "Surat Abasa",
            items: [
              "The reason why Allah referred to the Sahabi as “the blind man”",
              "One should not ignore a matter that one is certain about for something that one is not certain about",
              "The caller (to Islam) should not discriminate between people while propagating",
              "The reason why the angels are called safarah (“messenger-angels”)",
              "Muslims must bury their dead",
              "Why the pleasures of this worldly life are called mataa and the pleasures of Paradise are called naeem",
              "The reason for elaboration in mentioning those from whom a man will flee on the Day of Resurrection",
              "The reason why the wife is called sahibah (lit. companion)",
            ],
          },
          {
            type: "index",
            tone: "green",
            title: "Surat at-Takweer",
            items: [
              "The reason why the question will be addressed to the one who was buried alive",
              "Reason why Allah refers to Himself as the Owner of the Throne",
              "Description of the angelic messenger (Jibreel)",
              "Reason why the Prophet ﷺ is referred to as {your companion}",
            ],
          },
          {
            type: "index",
            tone: "teal",
            title: "Surat al-Infitar",
            items: [
              "Description of the destruction of the world and the end of this life",
              "Reason why the overturning of the graves is mentioned in particular",
              "Description of the recording angels and their deeds",
              "Description of the characteristics that are required in anyone who is in a position of looking after any of the ummah’s affairs",
              "Why it is specifically mentioned that all matters are under the control of Allah on the Day of Resurrection",
            ],
          },
          {
            type: "index",
            tone: "rose",
            title: "Surat al-Mutaffifeen",
            items: [
              "Those who take people’s wealth by force or by stealth is more deserving of the warning than those who give short measure",
              "Those who give short measure combine covetousness and stinginess",
              "Zann (thinking) may refer to certainty",
              "Warning against sins and their raan (stain)",
              "Affirmation that the believers will see Allah ﷻ in the Hereafter",
              "Competition between people should be for the Hereafter",
              "The judgement of Allah ﷻ is based on either justice or grace and mercy",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "naba",
    title: "Surat an-Naba",
    titleAr: "النبأ",
    lessons: [
      {
        id: "naba-news",
        title: "The great news (78:1–5)",
        icon: "1",
        sections: [
          {
            type: "heading",
            kicker: "In this unit we will study",
          },
          {
            type: "surahBanner",
            title: "Surat an-Naba",
            lines: ["is a Makkan surah", "(revealed before the Hijrah)"],
          },
          {
            type: "ribbon",
            tone: "green",
            body: "It was narrated that Ibn az-Zubayr رضي الله عنه said: {About what are they asking one another} [an-Naba 78:1] was revealed in Makkah.",
          },
          {
            type: "passage",
            lead: "Allah ﷻ says:",
            verses: NABA_1_5,
            translation:
              "{About what are they asking one another? About the great news – That over which they are in disagreement. No! They are going to know. Then, no! They are going to know}",
            ref: "[an-Naba 78:1–5]",
          },
          { type: "heading", title: "Commentary" },
          {
            type: "verse",
            paras: [
              "Allah ﷻ begins this surah with this question by way of denouncing the polytheists for asking one another about the Day of Resurrection, as He says:",
            ],
          },
          {
            type: "verse",
            ayah: "{About what are they asking one another?}",
            paras: [
              "That is, about what matter are those who disbelieve in the Day of Resurrection, the signs of Allah and His Book asking one another?",
              "Then He explains what they are asking one another about, as He says: {About the great news, That over which they are in disagreement} that is, the Day of Resurrection. This is the great news concerning which they disputed for so long, some of them believing in it and others disbelieving it, denying it and thinking it unlikely to ever happen.",
            ],
          },
          {
            type: "ribbon",
            tone: "rose",
            body: "It was said that the great news is the Quran, because it tells of Tawhid, speaks of the truthfulness of the Messenger and confirms that the Resurrection will come to pass.",
          },
          {
            type: "verse",
            paras: [
              "Ar-Raghib said: The word naba (translated here as “great news”) refers to news of great significance, on the basis of which one learns about that which is or is most likely to be true. News is not called naba unless it is of that nature.",
              "Then Allah warns them and threatens them by saying:",
            ],
          },
          {
            type: "verse",
            ayah: "{No! They are going to know. Then, no! They are going to know}",
            paras: [
              "The word kallaa (translated here as ‘No!’) is a word of rebuke and warning, which usually nullifies the words that came before it. It is intended as a warning to those who ask one another about the great news, stating that the implicit meaning of their questioning is denial, because it is something that will inevitably happen.",
              "In other words, they will come to know, when the punishment that they used to deny befalls them, when they are dragged to the fire of Hell, and it is said to them: {This is the Fire which you used to deny} [at-Tur 52:14].",
              "The rebuke and warning is repeated – {Then, no! They are going to know} – to emphasize the warning and highlight its seriousness. Thus it is a warning followed by another warning.",
            ],
          },
          {
            type: "terms",
            items: [
              {
                word: "naba",
                gloss: "great news",
                body: "News of great significance, on the basis of which one learns about that which is or is most likely to be true. News is not called naba unless it is of that nature. (Ar-Raghib)",
              },
              {
                word: "kallaa",
                gloss: "No!",
                body: "A word of rebuke and warning. It usually nullifies the words that came before it. Here it warns those who ask about the great news: their questioning implies denial of something that will inevitably happen.",
              },
            ],
          },
        ],
      },
      {
        id: "naba-learn",
        title: "What we learn from 78:1–5",
        icon: "2",
        sections: [
          {
            type: "heading",
            kicker: "Surat an-Naba · 78:1–5",
            title: "What we learn from these verses",
          },
          {
            type: "ribbon",
            tone: "rose",
            body: "The definite article in the word an-naba (the news) indicates that this is a generic noun and includes all great news of which the Messenger ﷺ spoke, the first of which was his telling the people that the Quran is the word of Allah, as well as what the Quran contains of declaring shirk to be false and affirming that people will be resurrected on the Day of Resurrection.",
          },
          {
            type: "ribbon",
            tone: "green",
            body: "The greatest news that the Quran brought to the disbelievers was telling them that their idols were false gods and not worthy of worship, and affirming that their bodies would be created anew. These are the two main reasons that led to their rejection, stubbornness and arrogance.",
          },
          {
            type: "cards",
            items: [
              {
                title: "All great news",
                body: "An-naba is generic. It includes every great news the Messenger ﷺ spoke.",
              },
              {
                title: "The Quran is Allah’s word",
                body: "The first of that news: he told the people that the Quran is the word of Allah.",
              },
              {
                title: "Shirk is false",
                body: "The Quran declares shirk false, and tells the disbelievers their idols are not worthy of worship.",
              },
              {
                title: "Bodies created anew",
                body: "It affirms resurrection on the Day of Resurrection. These two — false idols, and a new creation — were the main reasons for their rejection, stubbornness and arrogance.",
              },
            ],
          },
        ],
      },
      {
        id: "naba-activity-1",
        title: "Activity · Hearing the warning",
        icon: "3",
        sections: [
          {
            type: "reflect",
            n: "1",
            title: "Activities",
            prompt: "What is the psychological impact on your mind and heart when you hear:",
            parts: [
              {
                letter: "a",
                text: "The surah beginning with the question {About what are they asking one another?};",
              },
              {
                letter: "b",
                text: "The object not being mentioned in the phrase {No! They are going to know};",
              },
              {
                letter: "c",
                text: "The repetition of the phrase: {Then, no! They are going to know}?",
              },
            ],
          },
        ],
      },
      {
        id: "naba-earth",
        title: "Earth, mountains, and pairs (78:6–8)",
        icon: "4",
        sections: [
          {
            type: "heading",
            kicker: "Surat an-Naba · 78:6–16",
            title: "Have We not made the earth a resting place?",
          },
          {
            type: "passage",
            lead: "Then Allah ﷻ says:",
            verses: NABA_6_16,
            translation:
              "{Have We not made the earth a resting place? And the mountains as pegs? And We created you in pairs. And made your sleep [a means for] rest. And made the night as clothing. And made the day for livelihood. And constructed above you seven strong [heavens]. And made [therein] a burning lamp. And sent down, from the rain clouds, pouring water. That We may bring forth thereby grain and vegetation. And gardens of entwined growth.}",
            ref: "[an-Naba 78:6–16]",
          },
          { type: "heading", title: "Commentary" },
          {
            type: "verse",
            ayah: "{Have We not made the earth a resting place}",
            paras: [
              "The word mihad (translated here as “resting place”) refers to something that is spread out. What is meant is that it is smooth and prepared to be suitable for you and your wellbeing. So it is not too solid or too soft.",
            ],
            quote: {
              text: "{[He] who made for you the earth a bed [spread out]}",
              ref: "[al-Baqarah 2:22]",
            },
          },
          {
            type: "verse",
            ayah: "{And the mountains as pegs}",
            paras: [
              "To hold the earth steady, so that it will be stable and will not shift about.",
              "The geologists say that the mountains have roots that go deep into the earth, like a peg that is driven deep into a wall or the ground.",
            ],
          },
          {
            type: "verse",
            ayah: "{And We created you in pairs}",
            paras: [
              "That is, types, as Allah ﷻ says elsewhere: {And of all things We created two mates} [adh-Dhariyat 51:49], that is, types.",
              "That is, males and females of each type, so that each of them may find comfort in the other. It was said that this includes every pairing of created things: ugly and beautiful, tall and short, white and black.",
            ],
          },
          {
            type: "terms",
            items: [
              {
                word: "mihad",
                gloss: "resting place",
                body: "Something spread out: smooth, and prepared for your wellbeing — not too solid and not too soft.",
              },
              {
                word: "awtad",
                gloss: "pegs",
                body: "The mountains hold the earth steady so it will not shift. They have roots that go deep into the earth, like a peg driven into a wall or the ground.",
              },
              {
                word: "azwaj",
                gloss: "pairs",
                body: "Types: males and females, so that each finds comfort in the other. It was also said to include every pairing — ugly and beautiful, tall and short, white and black.",
              },
            ],
          },
        ],
      },
      {
        id: "naba-rest",
        title: "Sleep, night, and the day (78:9–11)",
        icon: "5",
        sections: [
          {
            type: "heading",
            kicker: "Surat an-Naba · commentary, continued",
            title: "Sleep, night, and the day",
          },
          {
            type: "verse",
            ayah: "{And made your sleep [a means for] rest}",
            paras: [
              "Az-Zajjaj said: Subat (translated here as “rest”) means to stop moving whilst the soul is still in the body.",
              "The root meaning of the word sabt [from which subat is derived] is cessation; in other words, to cease toiling so that one may stop working and rest. Allah has made the night and sleep as a cover for people, so that they may stop their movements and get their rest.",
            ],
          },
          {
            type: "verse",
            ayah: "{And made the night as clothing}",
            paras: [
              "That is, its darkness covers the people, as Allah ﷻ says elsewhere: {And [by] the night when it covers it} [ash-Shams 91:4].",
              "Qatadah and Saeed ibn Jubayr said: That is, and time when you become still and rest.",
            ],
          },
          {
            type: "verse",
            ayah: "{And made the day for livelihood}",
            paras: [
              "That is, We have made it light and bright, so that people may go about their business.",
            ],
            quote: {
              text: "{And of His signs is your sleep by night and day and your seeking of His bounty}",
              ref: "[ar-Rum 30:23]",
            },
          },
          {
            type: "terms",
            items: [
              {
                word: "subat",
                gloss: "rest",
                body: "Az-Zajjaj: to stop moving whilst the soul is still in the body. From sabt, whose root meaning is cessation — to cease toiling so that one may stop working and rest.",
              },
              {
                word: "libas",
                gloss: "clothing",
                body: "The night: its darkness covers the people. It is also the time when you become still and rest. (Qatadah and Saeed ibn Jubayr)",
              },
              {
                word: "ma‘ash",
                gloss: "livelihood",
                body: "The day is made light and bright, so that people may go about their business and seek Allah’s bounty.",
              },
            ],
          },
        ],
      },
      {
        id: "naba-heavens",
        title: "The heavens and the sun (78:12–13)",
        icon: "6",
        sections: [
          {
            type: "heading",
            kicker: "Surat an-Naba · commentary, continued",
            title: "Seven strong heavens, and a burning lamp",
          },
          {
            type: "verse",
            ayah: "{And constructed above you seven strong [heavens]}",
            paras: [
              "That is, seven soundly and precisely constructed heavens.",
              "Allah describes the heavens as strong, because they are firmly and solidly built, as He says elsewhere: {And the heaven We constructed with strength} [adh-Dhariyat 51:47].",
            ],
          },
          {
            type: "verse",
            ayah: "{And made [therein] a burning lamp}",
            paras: [
              "Then Allah ﷻ mentions some of the great benefits of the sun, as He says: {And made [therein] a burning lamp}. The lamp is the sun. In other words: We have made it bright and shining for the entire world; it shines its light for all the people of the earth.",
              "The sun is also burning; it is extremely hot, and in the summer its heat is very intense, even though it is so far away from the earth. So how hot do you think it is for planets that are closer to it?",
            ],
          },
          {
            type: "ribbon",
            tone: "rose",
            title: "The Prophet ﷺ said:",
            body: "«When it is extremely hot, wait to pray until it cools down a little, for extreme heat is an exhalation from Hell.» Narrated by al-Bukhari and Muslim.",
          },
          {
            type: "ribbon",
            tone: "amber",
            body: "In as-Sahihayn, it is narrated that the Prophet ﷺ said: «The Fire complained to its Lord, saying: “O Lord, parts of me are consuming other parts.” So He gave it permission to exhale twice, once in the winter and once in the summer. And that is what you experience of extreme heat and extreme cold.»",
          },
          {
            type: "terms",
            items: [
              {
                word: "sab‘an shidad",
                gloss: "seven strong",
                body: "Seven soundly and precisely constructed heavens, firmly and solidly built.",
              },
              {
                word: "siraj wahhaj",
                gloss: "a burning lamp",
                body: "The sun: bright and shining for the entire world, and burning — extremely hot, even from so far away.",
              },
            ],
          },
        ],
      },
      {
        id: "naba-rain",
        title: "Rain, grain, and gardens (78:14–16)",
        icon: "7",
        sections: [
          {
            type: "heading",
            kicker: "Surat an-Naba · commentary, continued",
            title: "Pouring water, grain, and gardens",
          },
          {
            type: "verse",
            ayah: "{And sent down, from the rain clouds}",
            paras: [
              "There are three views concerning the interpretation of the word al-mu‘sirat (translated here as “rain clouds”):",
            ],
          },
          {
            type: "views",
            title: "Al-mu‘sirat — three views",
            items: [
              "It was said that it refers to the clouds",
              "It was said that it refers to the wind",
              "It was said that it refers to the heavens",
            ],
            note: "The first view is more likely to be correct.",
          },
          {
            type: "verse",
            paras: [
              "Shaykh Ibn Uthaymeen رحمه الله said: Allah described the clouds as wrung out (the literal meaning of al-mu‘sirat), just as a garment may be wrung out (yu‘sar), because there is water within the clouds, and it comes out like water from a garment when it is wrung out.",
            ],
          },
          {
            type: "verse",
            ayah: "{pouring water}",
            paras: [
              "That is, pouring down in torrents. The word thajj (translated here as “pouring”) refers to a torrent or stream of pouring water.",
            ],
          },
          {
            type: "ribbon",
            tone: "rose",
            title: "In the hadith, the Prophet ﷺ said:",
            body: "«The best of Hajj is al-ajj and ath-thajj.» Narrated by at-Tirmidhi; classed as sahih by al-Albani.",
          },
          {
            type: "split",
            items: [
              {
                label: "Ajj",
                body: "Raising the voice with the Talbiyah.",
              },
              {
                label: "Thajj",
                body: "Letting the blood of the sacrificial animal flow copiously. In the verse, thajj is a torrent or stream of pouring water.",
              },
            ],
          },
          {
            type: "verse",
            ayah: "{That We may bring forth thereby grain and vegetation}",
          },
          {
            type: "bars",
            items: [
              {
                tone: "amber",
                title: "Grain",
                body: "Grain refers to wheat, barley, corn, rice and other grains that humans eat.",
              },
              {
                tone: "sky",
                title: "Vegetation",
                body: "Vegetation refers to what animals eat, such as grass and other kinds of plants.",
              },
            ],
          },
          {
            type: "verse",
            ayah: "{And gardens of entwined growth}",
            paras: [
              "That is, gardens and orchards with plants and trees growing intertwined, because of their great abundance, so elegant and beautiful that they conceal whoever is in the garden because they grow so thickly.",
            ],
            quote: {
              text: "{And within the land are neighboring plots and gardens of grapevines and crops and palm trees …}",
              ref: "[ar-Ra‘d 13:4]",
            },
          },
          {
            type: "terms",
            items: [
              {
                word: "al-mu‘sirat",
                gloss: "rain clouds",
                body: "Most likely the clouds. Literally “wrung out”, as a garment is wrung out (yu‘sar): water inside the clouds comes out the same way. (Ibn Uthaymeen) Other views: the wind, or the heavens.",
              },
              {
                word: "thajj",
                gloss: "pouring",
                body: "A torrent or stream of pouring water. In the Hajj hadith, ath-thajj is the blood of the sacrificial animal flowing copiously.",
              },
              {
                word: "alfaf",
                gloss: "entwined growth",
                body: "Gardens and orchards so abundant and intertwined that they conceal whoever is in them.",
              },
            ],
          },
        ],
      },
      {
        id: "naba-signs-learn",
        title: "What we learn from 78:6–16",
        icon: "8",
        sections: [
          {
            type: "heading",
            kicker: "Surat an-Naba · 78:6–16",
            title: "What we learn from these verses",
          },
          {
            type: "benefits",
            items: [
              {
                n: "1",
                tone: "green",
                body: "The connection between this passage and the preceding verses: having told us that the disbelievers denied the resurrection and the gathering, Allah wants to establish proof that the gathering is indeed true. Therefore He introduces the matter by speaking of some natural phenomena in order to prove that He ﷻ has the power to do all things and that He knows all things. That is because, once these two facts are established, the evidence for the truth of the resurrection will be proven.",
              },
              {
                n: "2",
                tone: "sky",
                body: "The reason why the evidence for the resurrection begins with a reference to the creation of the earth is: these verses give proof of the resurrection, and the resurrection means bringing people forth from the earth to be gathered, therefore the earth will be the first thing to come to the listener’s mind when discussing the matter of the resurrection.",
              },
              {
                n: "3",
                tone: "amber",
                body: "Sleep and waking up are among the clearest evidence for the resurrection, hence it is appropriate to mention them among the evidence for the resurrection.",
              },
              {
                n: "4",
                tone: "gold",
                body: "The verb nukhrij (lit. we bring forth) is used instead of nunbit (lit. We cause to grow) in the verse in which Allah ﷻ says {That We may bring forth thereby grain and vegetation} because the context is affirming the resurrection, so the verb nukhrij is more appropriate than the verb nunbit.",
              },
              {
                n: "5",
                tone: "rose",
                body: "In the phrase {That We may bring forth thereby grain and vegetation And gardens} [an-Naba 78:15–16], grain is mentioned first because it is the basic food. Grains form the staple food of people. Then that is followed by mention of vegetation, because it comes second in importance as food for people, and it is the basic food of animals. The third to be mentioned is gardens, from which fruits come, because they are what people use least in their regular diet.",
              },
            ],
          },
        ],
      },
      {
        id: "naba-signs-activity",
        title: "Activity · Signs in creation",
        icon: "9",
        sections: [
          {
            type: "worksheet",
            title: "Activities",
            items: [
              {
                n: "1",
                prompt: "Quote another verse that explains the meaning of each of the verses given below:",
                parts: [
                  { text: "{[He] who made for you the earth a bed [spread out]}:" },
                  { text: "{And We created you in pairs}:" },
                  { text: "{And made the night as clothing, And made the day for livelihood}:" },
                ],
              },
              {
                n: "2",
                prompt:
                  "If you were to debate with an atheist who denies the resurrection, how would you refute him, with real-life, rational evidence that happens repeatedly and people always see it? (Derive that from the verses quoted).",
              },
              {
                n: "3",
                prompt:
                  "Explain why the earth is mentioned first when discussing the evidence for the resurrection, then the mountains are mentioned after mention is made of the earth that is spread out for resting.",
              },
              {
                n: "4",
                prompt:
                  "Explain the connection between these two things: {And made the night as clothing, And made the day for livelihood}.",
              },
            ],
          },
        ],
      },
      {
        id: "naba-judgement",
        title: "The Day of Judgement (78:17–26)",
        icon: "10",
        sections: [
          {
            type: "heading",
            kicker: "Surat an-Naba · 78:17–30",
            title: "The Day of Judgement",
          },
          {
            type: "passage",
            lead: "Then Allah ﷻ says, speaking of the Day of Judgement and what will happen on that Day:",
            verses: NABA_17_30,
            translation:
              "{Indeed, the Day of Judgement is an appointed time – The Day the Horn is blown and you will come forth in multitudes. And the heaven is opened and will become gateways. And the mountains are removed and will be [but] a mirage. Indeed, Hell has been lying in wait. For the transgressors, a place of return, In which they will remain for ages [unending]. They will not taste therein [any] coolness or drink Except scalding water and [foul] purulence – An appropriate recompense. Indeed, they were not expecting an account. And denied Our verses with [emphatic] denial. But all things We have enumerated in writing. “So taste [the penalty], and never will We increase you except in torment”}",
            ref: "[an-Naba 78:17–30]",
          },
          { type: "heading", title: "Commentary" },
          {
            type: "verse",
            ayah: "{Indeed, the Day of Judgement is an appointed time}",
            paras: [
              "That is, the Day of Resurrection is a defined day that will happen at an appointed time, as Allah ﷻ says elsewhere: {And We do not delay it except for a limited term} [Hud 11:104].",
              "It is the defined time when this world will come to an end.",
              "That day is called the Day of Judgement because Allah will judge between all people on that Day.",
            ],
          },
          {
            type: "verse",
            ayah: "{The Day the Horn is blown and you will come forth in multitudes}",
            paras: ["The Horn – or Trumpet – will be blown twice:"],
          },
          {
            type: "pillars",
            items: [
              {
                n: 1,
                title: "The first time",
                body: "The people will be terrified, then they will swoon, then die.",
              },
              {
                n: 2,
                title: "The second time",
                body: "They will be resurrected from their graves and their souls will be returned to them.",
              },
            ],
          },
          {
            type: "ribbon",
            tone: "rose",
            body: "The Horn is the Trumpet which the angel will blow, and the people will come in multitudes from all directions, for the reckoning.",
          },
          {
            type: "verse",
            ayah: "{And the heaven is opened and will become gateways}",
            paras: ["That is, routes and pathways for the angels to descend."],
          },
          {
            type: "verse",
            ayah: "{And the mountains are removed and will be [but] a mirage}",
            paras: [
              "That is, it will seem to the onlooker that they are something, but in fact they will be nothing.",
            ],
          },
          {
            type: "verse",
            ayah: "{Indeed, Hell has been lying in wait}",
            paras: [
              "That is, it is prepared and ready.",
              "Al-Azhari said: The word mirsad (translated here as “lying in wait”) refers to the place where an ambush lies in wait for the enemy.",
            ],
          },
          {
            type: "verse",
            ayah: "{For the transgressors}",
            paras: ["That is, the rebels and sinners who opposed the Messengers."],
          },
          {
            type: "verse",
            ayah: "{a place of return}",
            paras: ["That is, an ultimate destination and final abode."],
          },
          {
            type: "verse",
            ayah: "{In which they will remain for ages [unending]}",
            paras: [
              "The word ahqaab (sing. huqub), translated here as “ages”, refers to a period of time. In other words, they will abide therein for many periods of time.",
            ],
          },
          {
            type: "verse",
            ayah: "{They will not taste therein [any] coolness or drink}",
            paras: [
              "That is, they will not taste any coolness that could bring them any relief from its heat, or any drink that could quench their thirst.",
            ],
          },
          {
            type: "verse",
            ayah: "{Except scalding water and [foul] purulence}",
            paras: [
              "Scalding water is water that is extremely hot.",
              "Purulence refers to the pus of the people of Hell, and what comes out of their innards of rottenness, sweat and so on.",
              "It was also said that the word translated here as “purulence” refers to zamharir, which is extreme cold that burns because it is so cold.",
              "Thus there will be combined for them extreme heat and extreme cold – we seek refuge with Allah – so that they might taste the punishment from two extremes.",
            ],
          },
          {
            type: "verse",
            ayah: "{An appropriate recompense}",
            paras: ["That is, We will give them a recompense that matches their deeds."],
          },
          {
            type: "ribbon",
            tone: "rose",
            body: "Muqatil said: The punishment will match the sin; there is no sin greater than shirk, and no punishment worse than the Fire.",
          },
          {
            type: "terms",
            items: [
              {
                word: "mirsad",
                gloss: "lying in wait",
                body: "Hell is prepared and ready. Al-Azhari: the place where an ambush lies in wait for the enemy.",
              },
              {
                word: "ahqaab",
                gloss: "ages",
                body: "Singular huqub: a period of time. They will abide therein for many periods of time.",
              },
              {
                word: "hameem / ghassaq",
                gloss: "scalding water and purulence",
                body: "Scalding water is extremely hot. Purulence is the pus of the people of Hell, and what comes out of their innards. It was also said to be zamharir: extreme cold that burns because it is so cold.",
              },
            ],
          },
        ],
      },
      {
        id: "naba-account",
        title: "The account and the torment (78:27–30)",
        icon: "11",
        sections: [
          {
            type: "heading",
            kicker: "Surat an-Naba · commentary, continued",
            title: "They were not expecting an account",
          },
          {
            type: "verse",
            ayah: "{Indeed, they were not expecting an account}",
            paras: [
              "That is, they did not believe that this was a realm in which they would be requited or brought to account.",
            ],
          },
          {
            type: "verse",
            ayah: "{And denied Our verses}",
            paras: [
              "That is, they rejected the proofs and evidence that Allah established for His creation, that He sent down to His Messengers.",
            ],
          },
          {
            type: "ribbon",
            tone: "sky",
            body: "{with [emphatic] denial} the word kidhdhaaba (translated here as “denial”) comes from the root kadhdhaba. Al-Farra said: It is a sound Yemeni usage.",
          },
          {
            type: "verse",
            ayah: "{But all things}",
            paras: ["Small or great, good and evil,"],
          },
          {
            type: "verse",
            ayah: "{We have enumerated in writing}",
            paras: ["That is, We have written them in al-Lawh al-Mahfuz."],
            quote: {
              text: "{and all things We have enumerated in a clear register}",
              ref: "[Ya-Seen 36:12]",
            },
          },
          {
            type: "verse",
            ayah: "{So taste}",
            paras: ["O you who disbelieve, this painful punishment."],
          },
          {
            type: "verse",
            ayah: "{and never will We increase you except in torment}",
            paras: ["So they will suffer the eternal, ever-increasing punishment of Allah."],
          },
          {
            type: "ribbon",
            tone: "rose",
            body: "As-Sa‘di said: This verse is the most stringent verse that describes how hard the punishment of the people of the Fire will be – may Allah protect us from it.",
          },
          {
            type: "terms",
            items: [
              {
                word: "kidhdhaaba",
                gloss: "emphatic denial",
                body: "From the root kadhdhaba. Al-Farra: it is a sound Yemeni usage.",
              },
              {
                word: "kitaban",
                gloss: "in writing",
                body: "Everything, small or great, good and evil, is written in al-Lawh al-Mahfuz. Compare Ya-Seen 36:12.",
              },
            ],
          },
        ],
      },
      {
        id: "naba-judgement-learn",
        title: "What we learn from 78:17–30",
        icon: "12",
        sections: [
          {
            type: "heading",
            kicker: "Surat an-Naba · 78:17–30",
            title: "What we learn from the verses",
          },
          {
            type: "benefits",
            items: [
              {
                n: "1",
                tone: "amber",
                body: "The use of the verb kaanat (has been), in the verse in which Allah ﷻ says, {Indeed, Hell has been lying in wait}, indicates that the Fire is already created and exists at present.",
              },
              {
                n: "2",
                tone: "sky",
                body: "{Indeed, Hell has been lying in wait, For the transgressors, a place of return}. These verses are indicative of the vastness of Allah’s mercy, for Hell has only been prepared for the transgressors, that is, those who transgress and overstep the mark in committing sin. As for those who err, Allah has ordained many means of expiation for their sins, such as prayer, fasting Ramadan, praying for forgiveness, doing righteous deeds, and so on. So no one will enter the Fire except those who transgress against themselves [by sinning].",
              },
              {
                n: "3",
                tone: "gold",
                body: "When Allah ﷻ mentions the reason for the punishment of the disbelievers, He says: {Indeed, they were not expecting an account, And denied Our verses with [emphatic] denial}. He mentioned only these two things, and did not mention other types of misdemeanours that they commit, because these two form the basis of their disbelief. Disbelief in the Resurrection is mentioned first because it is the foundation of disbelief, misdemeanours and sins.",
              },
            ],
          },
        ],
      },
      {
        id: "naba-judgement-activity",
        title: "Activity · The Day of Judgement",
        icon: "13",
        sections: [
          {
            type: "worksheet",
            title: "Activities",
            items: [
              {
                n: "1",
                prompt: "Quote a verse which points to a meaning the same as each of the verses quoted below:",
                parts: [
                  { text: "{Indeed, the Day of Judgement is an appointed time}:" },
                  { text: "{And the mountains are removed and will be [but] a mirage}:" },
                  { text: "{But all things We have enumerated in writing}:" },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "naba-righteous",
        title: "For the righteous (78:31–33)",
        icon: "14",
        sections: [
          {
            type: "heading",
            kicker: "Surat an-Naba · 78:31–36",
            title: "For the righteous is attainment",
          },
          {
            type: "intro",
            text: "Then Allah begins to describe the situation of the blessed believers, and what He has prepared for them of goodness, honour and bliss, after having described the situation of the disbelievers and what He has prepared for them of ills. Hence Allah ﷻ says:",
          },
          {
            type: "passage",
            verses: NABA_31_36,
            translation:
              "{Indeed, for the righteous is attainment. Gardens and grapevines. And full-breasted [companions] of equal age. And a full cup. No ill speech will they hear therein or any falsehood. [As] reward from your Lord, [a generous] gift [made due by] account}",
            ref: "[an-Naba 78:31–36]",
          },
          { type: "heading", title: "Commentary" },
          {
            type: "verse",
            ayah: "{Indeed, for the righteous is attainment}",
            paras: [
              "That is, those who feared the wrath of their Lord and constantly obeyed Him, refraining from what He dislikes, will attain salvation and be far removed from the Fire.",
            ],
          },
          {
            type: "verse",
            ayah: "{Gardens and grapevines}",
            paras: [
              "That is, gardens of palm trees and other plants. Grapevines are singled out for mention because of their great value and abundance in those gardens.",
            ],
          },
          {
            type: "verse",
            ayah: "{And full-breasted [companions]}",
            paras: [
              "This is a description of the wives of Paradise. The word translated here as “full-breasted” refers to young women whose breasts have not started to droop because they are still young and healthy. In Arabic the phrase ka‘abat al-fataat refers to a young girl whose breasts have started to develop.",
              "From the same root comes the phrase ka‘b ar-rijl, referring to the ankle, which is the bone that protrudes where the foot and the leg meet; and the word al-Kaaba, which is the House of Allah ﷻ; it is so called because of its prominence.",
            ],
          },
          {
            type: "verse",
            ayah: "{of equal age}",
            paras: ["That is, they are of the same or similar age."],
          },
          {
            type: "ribbon",
            tone: "rose",
            body: "From a linguistic point of view, the root letters of the word atrab (translated here as “of equal age”) form two roots. One of them is turab (dust) and words that are derived from it; the other refers to equality between two things.",
          },
          {
            type: "terms",
            items: [
              {
                word: "mafaz",
                gloss: "attainment",
                body: "The righteous — those who feared their Lord’s wrath, obeyed Him, and refrained from what He dislikes — attain salvation and are far removed from the Fire.",
              },
              {
                word: "kawa‘ib",
                gloss: "full-breasted",
                body: "The wives of Paradise: young and healthy, whose breasts have not started to droop. From the same root: ka‘abat al-fataat, ka‘b ar-rijl (the ankle), and al-Kaaba, named for its prominence.",
              },
              {
                word: "atrab",
                gloss: "of equal age",
                body: "The same or a similar age. The root has two meanings: turab (dust) and what is derived from it, and equality between two things.",
              },
            ],
          },
        ],
      },
      {
        id: "naba-reward",
        title: "The cup and the reward (78:34–36)",
        icon: "15",
        sections: [
          {
            type: "heading",
            kicker: "Surat an-Naba · commentary, continued",
            title: "A full cup, and a gift made due by account",
          },
          {
            type: "verse",
            ayah: "{And a full cup}",
            paras: ["That is, filled to the brim, and clear."],
          },
          {
            type: "verse",
            ayah: "{No ill speech will they hear therein}",
            paras: ["That is, idle talk in which there is no benefit."],
          },
          {
            type: "verse",
            ayah: "{or any falsehood}",
            paras: [
              "That is, sin.",
              "So they will not hear any lies, and they will not belie one another.",
            ],
            quote: {
              text: "{They will not hear therein ill speech or commission of sin}",
              ref: "[al-Waqi‘ah 56:25]",
            },
          },
          {
            type: "verse",
            paras: [
              "That is, there will be no idle talk that is of no benefit, and no lies; rather it will be the abode of peace, and everything in it will be free of shortcomings and defects.",
              "Allah will give them this immense bounty:",
            ],
          },
          {
            type: "verse",
            ayah: "{[As] reward from your Lord}",
            paras: [
              "That is, what has been mentioned, Allah will reward them with it and give it to them by His grace, bounty, kindness and mercy.",
            ],
          },
          {
            type: "verse",
            ayah: "{[a generous] gift [made due by] account}",
            paras: [
              "That is, a sufficient, abundant and comprehensive gift. The Arabs say A‘taani fa ahsabani (he gave me a gift made due by account) meaning, he sufficed me.",
            ],
          },
          {
            type: "terms",
            items: [
              {
                word: "dihaq",
                gloss: "a full cup",
                body: "Filled to the brim, and clear.",
              },
              {
                word: "laghw / kidhdhab",
                gloss: "ill speech and falsehood",
                body: "No idle talk of no benefit, and no sin. They will not hear lies, and they will not belie one another. It is the abode of peace, free of shortcomings and defects.",
              },
              {
                word: "hisab",
                gloss: "made due by account",
                body: "A sufficient, abundant, comprehensive gift. A‘taani fa ahsabani means: he gave me a gift made due by account — he sufficed me. It is given by Allah’s grace, bounty, kindness and mercy.",
              },
            ],
          },
        ],
      },
      {
        id: "naba-righteous-learn",
        title: "What we learn from 78:31–36",
        icon: "16",
        sections: [
          {
            type: "heading",
            kicker: "Surat an-Naba · 78:31–36",
            title: "What we learn from the verses",
          },
          {
            type: "benefits",
            items: [
              {
                n: "1",
                tone: "rose",
                body: "The verse {No ill speech will they hear therein or any falsehood} gives a description of the gatherings of the people of Paradise. So our gatherings should be free of idle talk and lies, so as to make them emulate the gatherings of the people of Paradise.",
              },
              {
                n: "2",
                tone: "teal",
                body: "In the verse {[As] reward from your Lord, [a generous] gift [made due by] account}, the Lord is mentioned with a possessive pronoun that refers to the Prophet ﷺ, so as to point out to people that admittance to Paradise and enjoyment of its blessings can only be attained by following the Prophet ﷺ, believing in him and acting in accordance with what he brought.",
              },
            ],
          },
        ],
      },
      {
        id: "naba-righteous-activity",
        title: "Activity · Joys of the Hereafter",
        icon: "17",
        sections: [
          {
            type: "worksheet",
            title: "Activities",
            items: [
              {
                n: "1",
                prompt:
                  "For every haram pleasure that you refrain from in this world, you will find its counterpart among the joys of the Hereafter, which have been prepared for those who show patience in restraining their desires. Write next to each verse the desires that you will forgo in this world so that you might attain pleasure in the Hereafter.",
                table: {
                  columns: ["Verse", "Pleasures and desires that one will refrain from"],
                  rows: [
                    "{Gardens and grapevines}",
                    "{And full-breasted [companions] of equal age}",
                    "{And a full cup}",
                    "{No ill speech will they hear therein or any falsehood}",
                  ],
                },
              },
              {
                n: "2",
                prompt:
                  "Mention what we learn from the fact that the Lord is mentioned with a possessive pronoun that refers to the Prophet ﷺ, in the verse: {[As] reward from your Lord}.",
              },
            ],
          },
        ],
      },
      {
        id: "naba-spirit",
        title: "The Spirit and the angels (78:37–38)",
        icon: "18",
        sections: [
          {
            type: "heading",
            kicker: "Surat an-Naba · 78:37–40",
            title: "The Lord of the heavens and the earth",
          },
          {
            type: "passage",
            lead: "Allah ﷻ says:",
            verses: NABA_37_40,
            translation:
              "{[From] the Lord of the heavens and the earth and whatever is between them, the Most Merciful. They possess not from Him [authority for] speech. The Day that the Spirit and the angels will stand in rows, they will not speak except for one whom the Most Merciful permits, and he will say what is correct. That is the True Day; so he who wills may take to his Lord a [way of] return. Indeed, We have warned you of a near punishment on the Day when a man will observe what his hands have put forth and the disbeliever will say, “Oh, I wish that I were dust!”}",
            ref: "[an-Naba 78:37–40]",
          },
          { type: "heading", title: "Commentary" },
          {
            type: "verse",
            ayah: "{[From] the Lord of the heavens and the earth and whatever is between them, the Most Merciful}",
            paras: [
              "That is, the one who will give them these gifts is their Lord, Whose mercy encompasses all things, so He shows mercy and kindness to them.",
              "Then Allah mentions His greatness and His immense sovereignty on the Day of Resurrection, and that all creatures on that Day will not speak.",
            ],
          },
          {
            type: "verse",
            ayah: "{They possess not from Him [authority for] speech}",
            paras: ["That is, no one will be able to start speaking to Him except with His permission."],
          },
          {
            type: "verse",
            ayah: "{The Day that the Spirit}",
            paras: ["Namely Jibreel or, it was said, the souls of the sons of Adam, or some of Allah’s creation."],
          },
          {
            type: "verse",
            ayah: "{and the angels will stand in rows}",
            paras: ["That is, row after row, humbling themselves before Allah ﷻ."],
          },
          {
            type: "terms",
            items: [
              {
                word: "ar-Rahman",
                gloss: "the Most Merciful",
                body: "The One who gives these gifts. His mercy encompasses all things, so He shows mercy and kindness.",
              },
              {
                word: "ar-ruh",
                gloss: "the Spirit",
                body: "Namely Jibreel. It was also said: the souls of the sons of Adam, or some of Allah’s creation.",
              },
              {
                word: "saff",
                gloss: "in rows",
                body: "The angels stand row after row, humbling themselves before Allah.",
              },
            ],
          },
        ],
      },
      {
        id: "naba-true-day",
        title: "The True Day (78:38–40)",
        icon: "19",
        sections: [
          {
            type: "heading",
            kicker: "Surat an-Naba · commentary, continued",
            title: "No one speaks except by permission",
          },
          {
            type: "verse",
            ayah: "{they will not speak except for one whom the Most Merciful permits}",
            paras: [
              "This is like the verse in which Allah ﷻ says: {no soul will speak except by His permission} [Hud 11:105]. And in as-Sahihayn it says: «No one will speak on that Day except the Messengers.»",
            ],
          },
          {
            type: "verse",
            ayah: "{and he will say what is correct}",
            paras: [
              "That is, what is true. A number of commentators said that this refers to the phrase: “Laa ilaaha illa Allah (there is no god worthy of worship except Allah).”",
              "So no one will speak unless he meets these two conditions:",
            ],
          },
          {
            type: "pillars",
            items: [
              { n: 1, title: "Permission", body: "That Allah gives him permission to speak." },
              { n: 2, title: "Truth", body: "That what he says is true." },
            ],
          },
          {
            type: "verse",
            ayah: "{That is the True Day}",
            paras: ["That will inevitably come to pass, on which no falsehood can be accepted and no lie will be of benefit."],
          },
          {
            type: "verse",
            ayah: "{so he who wills may take to his Lord a [way of] return}",
            paras: [
              "That is, let whoever of His slaves wishes to return to his Lord in a proper manner on that Day, do so by believing in that Day, preparing for it and striving to do deeds that could save him from the terrors of that Day, by adhering to the Book of Allah and the Sunnah of His Messenger ﷺ.",
            ],
          },
          {
            type: "verse",
            ayah: "{Indeed, We have warned you of a near punishment}",
            paras: [
              "That is, because the Day of Resurrection is certain to happen, that is why it is described as being near him, because anything that is inevitably going to happen is near.",
            ],
          },
          {
            type: "verse",
            ayah: "{on the Day when a man will observe what his hands have put forth}",
            paras: ["Each person will see, on that Day, what he sent ahead of good deeds recorded in his record."],
          },
          {
            type: "verse",
            ayah: "{and the disbeliever will say, “Oh, I wish that I were dust!”}",
            paras: [
              "Abu Hurayrah رضي الله عنه said: “All creatures will be gathered on the Day of Resurrection, wild beasts, animals, birds and everything. The justice of Allah will be so accurate that the hornless sheep will settle its scores with the horned one. Then He will say: ‘Be dust!’ That is when the disbeliever will say: {Oh, I wish that I were dust!}.”",
            ],
          },
        ],
      },
      {
        id: "naba-true-day-learn",
        title: "What we learn from 78:37–40",
        icon: "20",
        sections: [
          {
            type: "heading",
            kicker: "Surat an-Naba · 78:37–40",
            title: "What we learn from the verses",
          },
          {
            type: "benefits",
            items: [
              {
                n: "1",
                tone: "rose",
                body: "{The Day that the Spirit and the angels will stand in rows, they will not speak}. This surah speaks of the Resurrection and how people will stand before Allah on the Day of Resurrection. Therefore it is appropriate to mention how Jibreel and the angels will stand in rows, silently, because this is more eloquent in conveying the awe and fear of the standing on the Day of Resurrection.",
              },
              {
                n: "2",
                tone: "amber",
                body: "The divine name ar-Rahman (the Most Merciful) is mentioned in the phrase {except for one whom the Most Merciful permits} to indicate that the concept of intercession is one of mercy from Allah ﷻ to His creation.",
              },
              {
                n: "3",
                tone: "sky",
                body: "{That is the True Day} because the Day on which everything will be exposed, and that which is correct will be distinguished from that which is wrong, is in direct contrast to the days that we are living through in this worldly life, where we conceal whatever we are able to conceal, and falsehood prevails over the truth.",
              },
            ],
          },
        ],
      },
      {
        id: "naba-true-day-activity",
        title: "Activity · A way of return",
        icon: "21",
        sections: [
          {
            type: "worksheet",
            title: "Activities",
            items: [
              {
                n: "1",
                prompt:
                  "What is the reason for referring to the angels and the Spirit, and how they will stand on the Day of Resurrection?",
              },
              {
                n: "2",
                prompt:
                  "Why does Allah describe the punishment of the Day of Resurrection as being near? What do we learn from the mention of the divine name ar-Rahman (the Most Merciful) in this context?",
              },
              {
                n: "3",
                prompt: "How can we take a way of return to Allah ﷻ?",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "naziat",
    title: "Surat an-Nazi‘aat",
    titleAr: "النازعات",
    lessons: [
      {
        id: "naziat-opening",
        title: "Surat an-Nazi‘aat (79:1–14)",
        icon: "1",
        sections: [
          {
            type: "heading",
            kicker: "In this unit we will study",
          },
          {
            type: "surahBanner",
            title: "Surat an-Nazi‘aat",
            lines: ["is a Makkan surah", "(revealed before the Hijrah)"],
          },
          {
            type: "passage",
            lead: "Allah ﷻ says:",
            verses: NAZIAT_1_14,
            translation:
              "{By those [angels] who extract with violence. And [by] those who remove with ease. And [by] those who glide [as if] swimming. And those who race each other in a race. And those who arrange [each] matter, On the Day the blast [of the Horn] will convulse [creation], There will follow it the subsequent [one]. Hearts, that Day, will tremble, Their eyes humbled. They are [presently] saying, “Will we indeed be returned to [our] former state [of life], Even if we should be decayed bones?” They say, “That, then, would be a losing return.” Indeed, it will be but one shout, And suddenly they will be [alert] upon the earth’s surface}",
            ref: "[an-Nazi‘aat 79:1–14]",
          },
        ],
      },
      {
        id: "naziat-souls",
        title: "Souls taken with violence and with ease (79:1–2)",
        icon: "2",
        sections: [
          {
            type: "heading",
            kicker: "Surat an-Nazi‘aat · 79:1–2",
            title: "Those who extract, and those who remove",
          },
          {
            type: "verse",
            ayah: "{By those [angels] who extract with violence}",
            paras: ["Here Allah ﷻ swears by the angels who extract the souls of the disbelievers forcefully."],
          },
          {
            type: "verse",
            ayah: "{And [by] those who remove with ease}",
            paras: [
              "And He swears by the angels who take the souls of the believers gently and softly; in other words, they pull them out smoothly, like undoing a slipknot. A slipknot is a knot that is tied in such a way that if you pull on one end of the knot, it will come undone quickly and easily.",
            ],
          },
          {
            type: "ribbon",
            tone: "gold",
            body: "The reason for the harshness with which the angels extract the souls of the disbelievers, and the gentleness with which they take the souls of the believers is that when the angels who are appointed to take the souls of the disbelievers call the soul to come forth, they call it with the harshest of words. The angels say to the soul of the disbeliever: Come out, O evil soul that was in an evil body; come out to the wrath of Allah. So the soul is reluctant and does not want to come out, and it disperses throughout the body until the angels grab it harshly and drag it out in such a way that it almost tears the body apart, because of the forceful manner in which it is pulled out.",
          },
          {
            type: "ribbon",
            tone: "rose",
            body: "But in the case of the believers, when the angels come down to take the soul of the believer, they bring glad tidings and say to it: Come out, O good soul that was in a good body; come out to the pleasure of Allah. So it feels at ease about departing from the body that it was used to, and it exits smoothly.",
          },
          {
            type: "ribbon",
            tone: "sky",
            body: "At the beginning of the surah, Allah ﷻ swears by the angels who pull out the souls of the disbelievers in a violent manner, and by the angels who take the souls of the believers in a gentle manner, with ease. This is appropriate to the topic of the surah, because its main topic is a refutation of the argument of the disbelievers who denied the resurrection by saying {“Will we indeed be returned to [our] former state [of life], Even if we should be decayed bones?”}. Thus it is appropriate for Allah to swear by these angels, as a reminder to the polytheists that death will surely come to them, and that they will inevitably die.",
          },
          {
            type: "terms",
            items: [
              {
                word: "nazi‘at gharqan",
                gloss: "extract with violence",
                body: "The angels who pull out the souls of the disbelievers forcefully, until it almost tears the body apart.",
              },
              {
                word: "nashitat nashtan",
                gloss: "remove with ease",
                body: "The angels who take the souls of the believers gently, like undoing a slipknot: pull one end, and it comes undone quickly and easily.",
              },
            ],
          },
        ],
      },
      {
        id: "naziat-angels",
        title: "Those who glide, race, and arrange (79:3–5)",
        icon: "3",
        sections: [
          {
            type: "heading",
            kicker: "Surat an-Nazi‘aat · commentary, continued",
            title: "Gliding, racing, and arranging the affair",
          },
          {
            type: "verse",
            ayah: "{And [by] those who glide [as if] swimming}",
            paras: ["Here Allah ﷻ swears by the angels who glide when they descend from heaven and when they ascend to it."],
          },
          {
            type: "verse",
            ayah: "{And those who race each other in a race}",
            paras: [
              "Here Allah ﷻ swears by the angels who race, rush and hasten to convey the revelation to the messengers, before the devils can eavesdrop on it.",
            ],
          },
          {
            type: "verse",
            ayah: "{And those who arrange [each] matter}",
            paras: [
              "They are the angels who arrange each matter as commanded by Allah. This has to do with the running of the affairs of the universe.",
            ],
          },
          {
            type: "cards",
            items: [
              {
                title: "Jibreel",
                body: "Entrusted with the revelation; he receives it from Allah and brings it down to the Messengers.",
              },
              {
                title: "Israfeel",
                body: "Entrusted with blowing the Horn (or Trumpet) on the Day of Resurrection, whereupon the people will be terrified and will die, then it will be blown a second time and they will be resurrected.",
              },
              {
                title: "Mikaeel",
                body: "Entrusted with rain and vegetation.",
              },
              {
                title: "The Angel of Death",
                body: "Entrusted with taking people’s souls.",
              },
              {
                title: "Malik",
                body: "Entrusted with Hell.",
              },
              {
                title: "The recording angels",
                body: "On each person’s right and left there is an angel who records his deeds.",
              },
              {
                title: "The protecting angels",
                body: "There are angels who are entrusted with protecting the sons of Adam.",
              },
              {
                title: "Each angel",
                body: "Each of them is entrusted with what Allah ﷻ has enjoined upon him.",
              },
            ],
          },
          {
            type: "ribbon",
            tone: "rose",
            body: "It is wrong to call the Angel of Death Azraeel, because there is no evidence for that in either the Quran or the Sunnah.",
          },
          {
            type: "ribbon",
            tone: "gold",
            body: "Allah ﷻ swears by these mighty creations, but it is not permissible for anyone except Allah ﷻ to swear by any created thing. The Prophet ﷺ stated that swearing by anything other than Allah ﷻ constitutes shirk.",
          },
          {
            type: "note",
            tone: "benefit",
            title: "What is attested to is not mentioned",
            body: "The implicit meaning is: you will surely be resurrected and brought to account.",
          },
        ],
      },
      {
        id: "naziat-blast",
        title: "The blast and the one that follows (79:6–7)",
        icon: "4",
        sections: [
          {
            type: "heading",
            kicker: "Surat an-Nazi‘aat · 79:6–7",
            title: "Ar-raajifah and ar-raadifah",
          },
          {
            type: "verse",
            ayah: "{On the Day the blast [of the Horn] will convulse [creation], There will follow it the subsequent [one]}",
            paras: [
              "It was narrated that the blast [ar-raajifah] will convulse the earth. This is similar to the verse in which Allah ﷻ says: {On the Day the earth and the mountains will convulse and the mountains will become a heap of sand pouring down} [al-Muzzammil 73:14].",
              "And it was narrated that the “subsequent one” [ar-raadifah] is the sky, meaning that it will follow the earth in undergoing change, as it will split and the stars and planets will be scattered.",
            ],
          },
          {
            type: "terms",
            items: [
              {
                word: "rajf",
                gloss: "turmoil and shaking",
                body: "The word rajf refers to turmoil and shaking.",
              },
            ],
          },
          {
            type: "bars",
            items: [
              {
                tone: "amber",
                title: "It was also said · ar-raajifah",
                body: "Ar-raajifah (translated here as “the blast”) refers to the first blast of the trumpet, because of which the earth, the mountains and all living beings will be shaken, and all who are in heaven and all who are on earth will swoon because of it, except those whom Allah ﷻ wills.",
              },
              {
                tone: "sky",
                title: "Ar-raadifah",
                body: "Ar-raadifah (translated here as “the subsequent one”) is the second Trumpet blast, whereupon they will come round and be gathered.",
              },
            ],
          },
        ],
      },
      {
        id: "naziat-hearts",
        title: "Hearts that tremble (79:8–13)",
        icon: "5",
        sections: [
          {
            type: "heading",
            kicker: "Surat an-Nazi‘aat · 79:8–13",
            title: "A losing return, then one shout",
          },
          {
            type: "verse",
            ayah: "{Hearts, that Day, will tremble}",
            paras: [
              "What is meant by hearts here is the hearts of the disbelievers. In other words, the hearts of the disbelievers on that Day will tremble with intense fear.",
            ],
          },
          {
            type: "verse",
            ayah: "{Their eyes humbled}",
            paras: [
              "That is, the gaze of the disbelievers will be humbled by the terrors that they will see, so their eyes will not be staring or looking sharply; rather they will lower their gaze out of humiliation.",
            ],
          },
          {
            type: "verse",
            ayah: "{They are [presently] saying, “Will we indeed be returned to [our] former state [of life]”}",
            paras: [
              "That is, these disbelievers who deny the resurrection are presently saying: Will we die? Will we be brought back to life as we were before we died?",
            ],
          },
          {
            type: "ribbon",
            tone: "gold",
            body: "The word translated here as “be returned” refers to when someone is brought back to where he was.",
          },
          {
            type: "verse",
            ayah: "{Even if we should be decayed bones?}",
            paras: ["The disbelievers say: Will we be brought back to this world after we have become crumbling bones?"],
          },
          {
            type: "verse",
            ayah: "{They say, “That, then, would be a losing return”}",
            paras: [
              "The word karrah (translated here as “a return”) refers to coming back after having gone. In other words, the disbelievers say: That return of ours would be a return of loss and doom.",
            ],
          },
          {
            type: "verse",
            ayah: "{Indeed, it will be but one shout}",
            paras: [
              "Then Allah responds to their thinking that the Day of Resurrection is far-fetched by saying: {Indeed, it will be but one shout} that is, one blast of the Trumpet.",
            ],
          },
          {
            type: "terms",
            items: [
              {
                word: "be returned",
                gloss: "brought back to where he was",
                body: "The word translated “be returned” refers to when someone is brought back to where he was.",
              },
              {
                word: "karrah",
                gloss: "a return",
                body: "Coming back after having gone. The disbelievers say that return would be a return of loss and doom.",
              },
            ],
          },
        ],
      },
      {
        id: "naziat-surface",
        title: "Upon the earth’s surface (79:14)",
        icon: "6",
        sections: [
          {
            type: "heading",
            kicker: "Surat an-Nazi‘aat · 79:14",
            title: "Saahirah",
          },
          {
            type: "verse",
            ayah: "{And suddenly they will be [alert] upon the earth’s surface}",
            paras: [
              "The word saahirah (translated here as “the earth’s surface”) refers to flat, white land on which there is no vegetation. What is meant is a land that Allah ﷻ will prepare for the people to be gathered thereon for the reckoning.",
            ],
          },
          {
            type: "ribbon",
            tone: "rose",
            body: "It is called saahirah because the people who will be resurrected and gathered there will not be able to sleep [the root sahr also refers to staying up at night], because of the intensity of the fear and panic that they will feel on that Day.",
          },
          {
            type: "note",
            title: "Alive after having been dead",
            body: "What is meant is that the Trumpet will be blown once, and these disbelievers will find themselves on the face of the earth, alive after having been dead, to face their reckoning and punishment after they had been [buried] in the earth.",
          },
          {
            type: "terms",
            items: [
              {
                word: "saahirah",
                gloss: "the earth’s surface",
                body: "Flat, white land with no vegetation, prepared for the gathering and the reckoning. From sahr: they will not be able to sleep, because of the fear and panic of that Day.",
              },
            ],
          },
        ],
      },
      {
        id: "naziat-activity",
        title: "Activity · The oaths and the gathering",
        icon: "7",
        sections: [
          {
            type: "worksheet",
            title: "Activities",
            lead: "There is a connection between the topic of this surah and the oaths which Allah swears, at the beginning, by the angels who take the souls of the believers and the disbelievers. Explain this connection.",
            items: [
              {
                n: "1",
                prompt: "Fill in the gaps in the following sentence, using other tafsir references:",
                parts: [
                  {
                    text: "As-saabihaat (those who glide [as if] swimming) are: ________; and it was said that they are ________.",
                  },
                  {
                    text: "As-saabiqaat (those who race each other in a race) are ________; and it was said that they are ________, or ________.",
                  },
                ],
              },
              {
                n: "2",
                prompt: "Connect the following two groups:",
                table: {
                  columns: ["(a)", "(b)"],
                  rows: [
                    ["Ar-raajifah (the blast)", "the hearts of the disbelievers"],
                    ["Ar-raadifah (the subsequent one)", "the first blast"],
                    ["the trembling hearts", "the second blast"],
                    ["“[our] former state [of life]”", "Being brought back to life."],
                  ],
                },
              },
              {
                n: "3",
                prompt:
                  "Explain why the land on which the people will be gathered on the Day of Resurrection is called as-saahirah.",
              },
            ],
          },
        ],
      },
      {
        id: "naziat-musa",
        title: "The story of Moses (79:15–17)",
        icon: "8",
        sections: [
          {
            type: "heading",
            kicker: "Surat an-Nazi‘aat · 79:15–26",
            title: "Has there reached you the story of Moses?",
          },
          {
            type: "passage",
            lead: "Allah ﷻ says:",
            verses: NAZIAT_15_26,
            translation:
              "{Has there reached you the story of Moses? When his Lord called to him in the sacred valley of Tuwa: “Go to Pharaoh. Indeed, he has transgressed, And say to him, ‘Would you [be willing to] purify yourself, And let me guide you to your Lord so you would fear [Him]?’” And he showed him the greatest sign, But Pharaoh denied and disobeyed. Then he turned his back, striving, And he gathered [his people] and called out. And said, “I am your most exalted lord.” So Allah seized him in exemplary punishment in the hereafter and in this life. Indeed in that is a warning for whoever would fear [Allah]}",
            ref: "[an-Nazi‘aat 79:15–26]",
          },
          {
            type: "verse",
            ayah: "{Has there reached you the story of Moses?}",
            paras: [
              "That is, has there come to you, O Messenger, the story of Musa عليه السلام? This is a word of consolation for the Prophet ﷺ.",
            ],
          },
          {
            type: "verse",
            ayah: "{When his Lord called to him in the sacred valley of Tuwa}",
            paras: ["That is, when Allah ﷻ called Musa عليه السلام in the blessed, sacred valley."],
          },
          {
            type: "terms",
            items: [
              {
                word: "Tuwa",
                gloss: "a name for the sacred valley",
                body: "The valley was sacred because Allah ﷻ sent revelation to Musa عليه السلام in that place.",
              },
            ],
          },
          {
            type: "verse",
            ayah: "{Go to Pharaoh. Indeed, he has transgressed}",
            paras: [
              "That is, Allah ﷻ said to Musa عليه السلام: Go to Pharaoh and call him to Allah ﷻ, for he has transgressed.",
            ],
          },
        ],
      },
      {
        id: "naziat-pharaoh",
        title: "Pharaoh’s denial and the seizure (79:17–26)",
        icon: "9",
        sections: [
          {
            type: "heading",
            kicker: "Surat an-Nazi‘aat · commentary, continued",
            title: "Transgression, fear, and the greatest sign",
          },
          {
            type: "verse",
            ayah: "Tughyaan",
            paras: [
              "Tughyaan (translated here as “transgression”) means going to extremes in committing sins and overstepping the mark. A word from the same root appears in the verse in which Allah ﷻ says: {Indeed, when the water overflowed [tughyan]} [al-Haqqah 69:11]; the water increased and overflowed its limits. From the same root comes the word taghut (which refers to transgression) because that is overstepping the mark.",
            ],
          },
          {
            type: "verse",
            ayah: "{And say to him, ‘Would you [be willing to] purify yourself’}",
            paras: [
              "That is, do you want to purify yourself from faults, shortcomings and sins, by saying: Laa ilaaha illa Allah (there is no god worthy of worship except Allah)?",
            ],
          },
          {
            type: "verse",
            ayah: "{And let me guide you to your Lord so you would fear [Him]?}",
            paras: [
              "That is, let me guide you to the path of obedience to your Lord ﷻ, so that you might fear Him after you come to know about Him.",
            ],
          },
          {
            type: "ribbon",
            tone: "gold",
            body: "Khashyah (translated here as “fear”) refers to fear based on knowledge. If fear is not based on knowledge, then it is called khawf mujarrad (pure fear). This is the difference between khashyah and khawf.",
          },
          {
            type: "note",
            title: "Guidance before fear",
            body: "The fact that guidance is mentioned before fear indicates that fear of Allah does not occur except after coming to know Him ﷻ. Allah ﷻ says elsewhere: {Only those fear Allah, from among His servants, who have knowledge} [Fatir 35:28].",
          },
          {
            type: "verse",
            ayah: "{And he showed him the greatest sign}",
            paras: [
              "The greatest sign was the hand of Musa عليه السلام, when he brought it out appearing white to the onlookers, and his staff, when it clearly turned into a snake.",
            ],
          },
          {
            type: "verse",
            ayah: "{But Pharaoh denied and disobeyed}",
            paras: ["Thus Pharaoh rejected the message of Musa عليه السلام, and disobeyed the commands of Allah ﷻ."],
          },
          {
            type: "verse",
            ayah: "{Then he turned his back, striving}",
            paras: [
              "That is, he turned away from what Musa عليه السلام called him to, of obedience to Allah, fear of Him and affirmation of His oneness (Tawhid), and he strove hard in opposing Musa عليه السلام.",
            ],
          },
          {
            type: "verse",
            ayah: "{And he gathered [his people]}",
            paras: [
              "That is, he brought together the people of his kingdom, assembling his courtiers to advise him, gathering his troops to fight and wage war, and bringing his people together to attend the day of the festival.",
            ],
          },
          {
            type: "verse",
            ayah: "{and called out And said, “I am your most exalted lord”}",
            paras: ["Above whom there is no other lord."],
          },
          {
            type: "verse",
            ayah: "{So Allah seized him in exemplary punishment in the hereafter and in this life}",
            paras: [
              "Allah wrought vengeance upon him with punishment in this world and the Hereafter. Thus He made him a lesson and an example for other rebellious people like him.",
            ],
          },
          {
            type: "verse",
            ayah: "{Indeed in that is a warning for whoever would fear [Allah]}",
            paras: ["That is, in this story there is a lesson and an exhortation for those who fear Allah ﷻ."],
          },
          {
            type: "terms",
            items: [
              {
                word: "tughyaan",
                gloss: "transgression",
                body: "Going to extremes in committing sins and overstepping the mark. The same root is in {when the water overflowed [tughyan]} [al-Haqqah 69:11], and in taghut, because that too is overstepping the mark.",
              },
              {
                word: "khashyah",
                gloss: "fear based on knowledge",
                body: "If fear is not based on knowledge, it is khawf mujarrad (pure fear). Guidance is mentioned before fear, because fear of Allah does not occur except after coming to know Him.",
              },
            ],
          },
        ],
      },
      {
        id: "naziat-musa-learn",
        title: "What we learn from 79:15–26",
        icon: "10",
        sections: [
          {
            type: "heading",
            kicker: "Surat an-Nazi‘aat · 79:15–26",
            title: "What we learn from the verses",
          },
          {
            type: "benefits",
            items: [
              {
                n: "1",
                tone: "rose",
                body: [
                  "Allah tells us the story of Pharaoh after mentioning how the polytheists denied the Resurrection, because of the similarities that may be seen between Pharaoh and his people, and the disbelievers of Quraysh, namely their stubbornness, arrogance and persecution of the Muslims; and because of the similarities between Musa and Muhammad ﷺ.",
                  "Allah tells the story of Pharaoh as a warning to the polytheists that just as He destroyed Pharaoh because of his stubbornness and arrogance, He would also destroy the disbelievers of Quraysh if they did not believe.",
                  "This story also offers consolation to the Muslims and the believers; just as Allah saved Musa and the people with him from the persecution of Pharaoh, in like manner Allah would save the Prophet ﷺ and the believers from the persecution of the disbelievers of Quraysh.",
                ],
              },
              {
                n: "2",
                tone: "sky",
                body: "When calling people to Allah, it is essential to be gentle and kind, and to avoid harshness, even with transgressors and tyrants, because gentle words attract the hearts of the listeners, and make it more likely that they will respond to this call.",
              },
            ],
          },
          {
            type: "ribbon",
            tone: "rose",
            body: "The usage of the word strive in the phrase {Then he turned his back, striving} indicates that Pharaoh strove hard and did his utmost to convince his people that he was the “most exalted lord”. This is how those who oppose the religion of Allah in every time and place strive their utmost and do all that they can to oppose the religion. So shouldn’t the Muslim also strive his utmost to spread Islam and defend his religion?",
          },
          {
            type: "benefits",
            items: [
              {
                n: "3",
                tone: "teal",
                body: "{So Allah seized him in exemplary punishment in the hereafter and in this life}. The punishment of the Hereafter is mentioned before the punishment in this world, because it is more severe and more lasting. Thus it is the real punishment, a severe and everlasting punishment that will seize the transgressors and sinners.",
              },
            ],
          },
        ],
      },
      {
        id: "naziat-musa-activity",
        title: "Activity · The story of Moses",
        icon: "11",
        sections: [
          {
            type: "worksheet",
            title: "Activities",
            items: [
              {
                n: "1",
                prompt: "Derive the following from this Quranic passage:",
                parts: [
                  {
                    text: "a. Lessons for da‘wah from the way in which Musa عليه السلام addressed Pharaoh.",
                  },
                  {
                    text: "b. The reason why the punishment of the Hereafter is mentioned before the punishment in this world in the verse: {So Allah seized him in exemplary punishment in the hereafter and in this life}.",
                  },
                ],
              },
              {
                n: "2",
                prompt: "Explain the meaning of the following words: sacred; turned his back; gathered [his people].",
              },
            ],
          },
        ],
      },
      {
        id: "naziat-heaven",
        title: "A more difficult creation (79:27–28)",
        icon: "12",
        sections: [
          {
            type: "heading",
            kicker: "Surat an-Nazi‘aat · 79:27–33",
            title: "Are you a more difficult creation, or the heaven?",
          },
          {
            type: "passage",
            lead: "Allah ﷻ says:",
            verses: NAZIAT_27_33,
            translation:
              "{Are you a more difficult creation or is the heaven? Allah constructed it. He raised its ceiling and proportioned it, And He darkened its night and extracted its brightness, And after that He spread the earth. He extracted from it its water and its pasture. And the mountains He set firmly, As provision for you and your grazing livestock}",
            ref: "[an-Nazi‘aat 79:27–33]",
          },
          {
            type: "verse",
            ayah: "{Are you a more difficult creation or is the heaven? Allah constructed it}",
            paras: [
              "That is, is recreating you after death more difficult than creating the heaven?",
              "What is meant is: the One Who is able to create the heaven is also able to re-create you after death.",
            ],
          },
          {
            type: "verse",
            ayah: "{Allah constructed it}",
            paras: ["Means: Allah ﷻ raised it above you like a structure or firmament."],
          },
          {
            type: "verse",
            ayah: "{He raised its ceiling}",
            paras: ["That is, He built it high."],
          },
          {
            type: "ribbon",
            tone: "rose",
            body: "The word samk (translated here as “ceiling”) means raising something in an open space, whether what is raised is connected to the earth or not. Connecting the verb rafa‘a (He raised) to the object (samk), the name of which also refers to raising, is done by way of emphasizing the action of raising. Thus the heaven is vastly raised.",
          },
          {
            type: "verse",
            ayah: "{and proportioned it}",
            paras: ["He created it appropriately, with no imperfections, cracks or gaps."],
          },
          {
            type: "terms",
            items: [
              {
                word: "samk",
                gloss: "ceiling",
                body: "Raising something in an open space, whether or not it is connected to the earth. Joining rafa‘a (He raised) to samk emphasizes the raising: the heaven is vastly raised.",
              },
            ],
          },
        ],
      },
      {
        id: "naziat-earth",
        title: "The earth spread out (79:29–33)",
        icon: "13",
        sections: [
          {
            type: "heading",
            kicker: "Surat an-Nazi‘aat · commentary, continued",
            title: "Night, brightness, and provision",
          },
          {
            type: "verse",
            ayah: "{And He darkened its night}",
            paras: ["That is, He made its night dark by causing the sun to set."],
          },
          {
            type: "verse",
            ayah: "{and extracted its brightness}",
            paras: [
              "That is, He made its day obvious and visible. Day is referred to as duha (lit. forenoon) because it is the best time of the day.",
            ],
          },
          {
            type: "verse",
            ayah: "{And after that He spread the earth}",
            paras: ["That is, after creating the heavens, He spread out the earth."],
          },
          {
            type: "ribbon",
            tone: "rose",
            body: "The word translated here as “spread” refers to smoothing out and levelling something.",
          },
          {
            type: "verse",
            ayah: "{He extracted from it its water and its pasture}",
            paras: [
              "That is, He caused springs of water to burst forth from the earth, and caused grass and vegetation to grow on it.",
            ],
          },
          {
            type: "verse",
            ayah: "{And the mountains He set firmly}",
            paras: ["That is, He fixed them firmly in the earth."],
          },
          {
            type: "verse",
            ayah: "{As provision for you and your grazing livestock}",
            paras: ["That is, to benefit you."],
          },
          {
            type: "ribbon",
            tone: "rose",
            body: "The word mataa (translated here as “provision”) refers to something that one benefits from for a while. It has the meaning of a defined time limit. What is meant in this verse is granting something to benefit from for a while.",
          },
          {
            type: "terms",
            items: [
              {
                word: "duha",
                gloss: "forenoon",
                body: "The day’s brightness. Day is called duha because it is the best time of the day.",
              },
              {
                word: "spread",
                gloss: "smoothing out and levelling",
                body: "After creating the heavens, He spread out the earth.",
              },
              {
                word: "mataa",
                gloss: "provision",
                body: "Something one benefits from for a while, with a defined time limit. Here it means granting something to benefit from for a while.",
              },
            ],
          },
        ],
      },
      {
        id: "naziat-heaven-learn",
        title: "What we learn from 79:27–33",
        icon: "14",
        sections: [
          {
            type: "heading",
            kicker: "Surat an-Nazi‘aat · 79:27–33",
            title: "What we learn from the verses",
          },
          {
            type: "ribbon",
            tone: "rose",
            body: "Surat Fussilat indicates that the heaven was created after the earth. Allah ﷻ says: {Say, “Do you indeed disbelieve in He who created the earth in two days … Then He directed Himself to the heaven while it was smoke …”} [Fussilat 41:9–11], whereas in this surah, He says: {… the heaven? Allah constructed it … And after that He spread the earth}. However, there is no contradiction between the verses, because the creation of the earth itself came before the creation of the heaven itself, then after creating the heaven, Allah ﷻ spread out the earth and levelled it. Thus the earth was created first, then the heaven was created, then the earth was spread out.",
          },
        ],
      },
      {
        id: "naziat-heaven-activity",
        title: "Activity · Defending the religion",
        icon: "15",
        sections: [
          {
            type: "worksheet",
            title: "Activities",
            items: [
              {
                n: "1",
                prompt: "Imagine that you are defending Allah’s religion:",
                parts: [
                  {
                    text: "a. You are debating with someone who denies the Resurrection. What are the things that you will quote as evidence that people will be resurrected on the Day of Resurrection?",
                  },
                  {
                    text: "b. You are debating with someone who casts aspersions on the Quran by saying that there are contradictions in it. So he says that Surat Fussilat says that the heaven was created after the earth, and Surat an-Nazi‘aat says the opposite. How will you explain to him that he is mistaken?",
                  },
                ],
              },
              {
                n: "2",
                prompt: "Draw a line from each word or phrase in List A to that which matches it in List B:",
                table: {
                  columns: ["(A)", "(B)"],
                  rows: [
                    ["its ceiling", "made dark"],
                    ["darkened", "made firm"],
                    ["spread it", "its structure"],
                    ["set firmly", "spread out"],
                  ],
                },
              },
            ],
          },
        ],
      },
      {
        id: "naziat-taammah",
        title: "The greatest Overwhelming Calamity (79:34–38)",
        icon: "16",
        sections: [
          {
            type: "heading",
            kicker: "Surat an-Nazi‘aat · 79:34–41",
            title: "When the greatest calamity comes",
          },
          {
            type: "passage",
            lead: "Allah ﷻ says:",
            verses: NAZIAT_34_41,
            translation:
              "{But when there comes the greatest Overwhelming Calamity, The Day when man will remember that for which he strove, And Hellfire will be exposed for [all] those who see, So as for he who transgressed And preferred the life of the world Then indeed, Hellfire will be [his] refuge. But as for he who feared standing before his Lord and prevented the soul from [unlawful] inclination, Then indeed, Paradise will be [his] refuge}",
            ref: "[an-Nazi‘aat 79:34–41]",
          },
          {
            type: "verse",
            ayah: "{But when there comes the greatest Overwhelming Calamity}",
            paras: [
              "at-Taammah (translated here as “the Overwhelming Calamity”) is one of the names of the Day of Resurrection.",
            ],
          },
          {
            type: "ribbon",
            tone: "rose",
            body: "This word refers to an event or incident that is overwhelming (tatimm). It is taken from the phrase tamma al-maa, which refers to water when it covers things. Thus it is describing the extreme hardship and horror of that Day, for such words are only used to refer to the most terrifying incidents.",
          },
          {
            type: "verse",
            ayah: "{greatest}",
            paras: [
              "This serves to emphasize how terrible it will be, for this is the clearest way to express what will accompany this event of terrifying matters.",
            ],
          },
          {
            type: "verse",
            ayah: "{The Day when man will remember that for which he strove}",
            paras: ["That is, he will remember what he did of good and evil."],
          },
          {
            type: "verse",
            ayah: "{And Hellfire will be exposed for [all] those who see}",
            paras: ["That is, Hell will be brought forth so that people can see it with their own eyes."],
          },
          {
            type: "verse",
            ayah: "{So as for he who transgressed And preferred the life of the world}",
            paras: [
              "That is, the one who over-stepped the mark in misguidance and evildoing, preferred the life of this world and gave it precedence over the matter of his religion and his Hereafter.",
            ],
          },
          {
            type: "terms",
            items: [
              {
                word: "at-Taammah",
                gloss: "the Overwhelming Calamity",
                body: "A name of the Day of Resurrection. From tatimm, and from tamma al-maa: water when it covers things. It describes the extreme hardship and horror of that Day. “Greatest” emphasizes how terrible it will be.",
              },
            ],
          },
        ],
      },
      {
        id: "naziat-refuge",
        title: "Hellfire or Paradise (79:39–41)",
        icon: "17",
        sections: [
          {
            type: "heading",
            kicker: "Surat an-Nazi‘aat · commentary, continued",
            title: "The refuge of each",
          },
          {
            type: "verse",
            ayah: "{Then indeed, Hellfire will be [his] refuge}",
            paras: [
              "That is, his ultimate destination will be the Fire.",
              "The word translated here as “refuge” refers to the place to which one returns and settles.",
            ],
          },
          {
            type: "verse",
            ayah: "{But as for he who feared standing before his Lord and prevented the soul from [unlawful] inclination, Then indeed, Paradise will be [his] refuge}",
            paras: [
              "That is, for the one who dreaded his standing before Allah ﷻ, and as a result of that dread he forbade himself to follow whims and desires and pleasures – his ultimate destination will be Paradise.",
            ],
          },
          {
            type: "ribbon",
            tone: "rose",
            body: "The root meaning of the word hawa (translated above as “[unlawful] inclinations”) is inclination in a general sense. Then the word began to be used to refer to inclination towards desires. It is called thus because it throws down (yahwi) the individual into a great deal of trouble in this world, and in the Hereafter it will lead him to al-hawiyah (the pit of Hell).",
          },
          {
            type: "terms",
            items: [
              {
                word: "refuge",
                gloss: "the place to which one returns and settles",
                body: "For the one who transgressed and preferred this world, that place is the Fire. For the one who feared standing before his Lord and restrained his soul, it is Paradise.",
              },
              {
                word: "hawa",
                gloss: "[unlawful] inclination",
                body: "At root, inclination in a general sense; then, inclination towards desires. It throws a person down (yahwi) into trouble in this world, and in the Hereafter it leads him to al-hawiyah, the pit of Hell.",
              },
            ],
          },
        ],
      },
      {
        id: "naziat-taammah-learn",
        title: "What we learn from 79:34–41",
        icon: "18",
        sections: [
          {
            type: "heading",
            kicker: "Surat an-Nazi‘aat · 79:34–41",
            title: "What we learn from the verses",
          },
          {
            type: "benefits",
            items: [
              {
                n: "1",
                tone: "rose",
                body: "In the verse {And Hellfire will be exposed for [all] those who see}, this indicates that all the believers and disbelievers will see it. As for the believer, he will see it and appreciate the extent of the blessing that has been bestowed upon him; as for the disbeliever, he will see it, so that he will fear it before he is admitted to it.",
              },
              {
                n: "2",
                tone: "sky",
                body: "{But as for he who feared standing before his Lord and prevented the soul from [unlawful] inclination}. Here Allah ﷻ mentions together in one place fear of standing before Him ﷻ and forbidding oneself to follow [unlawful] inclinations. That is because fear of Allah is the strongest protection that resists the powerful pull of desires. It is very rare for anything to be more effective in repelling whims and desires than the fear of standing before Allah. For that reason, the Quran mentions them together in one verse.",
              },
            ],
          },
        ],
      },
      {
        id: "naziat-taammah-activity",
        title: "Activity · Transgression and at-Taammah",
        icon: "19",
        sections: [
          {
            type: "worksheet",
            title: "Activities",
            items: [
              {
                n: "1",
                prompt:
                  "This surah mentions transgression twice. Quote those two places and identify the connection between them.",
              },
              {
                n: "2",
                prompt: "What is the reason:",
                parts: [
                  {
                    text: "Why the Day of Resurrection is called at-Taammah (the Overwhelming Calamity)?",
                  },
                  {
                    text: "Why are fear of the standing before Allah and restraining the self from following [unlawful] inclinations mentioned together in the same place?",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "naziat-hour",
        title: "When is the Hour? (79:42–43)",
        icon: "20",
        sections: [
          {
            type: "heading",
            kicker: "Surat an-Nazi‘aat · 79:42–46",
            title: "They ask you about the Hour",
          },
          {
            type: "passage",
            lead: "Allah ﷻ says:",
            verses: NAZIAT_42_46,
            translation:
              "{They ask you, [O Muhammad], about the Hour: when is its arrival? In what [position] are you that you should mention it? To your Lord is its finality. You are only a warner for those who fear it. It will be, on the Day they see it, as though they had not remained [in the world] except for an afternoon or a morning thereof}",
            ref: "[an-Nazi‘aat 79:42–46]",
          },
          {
            type: "verse",
            ayah: "{They ask you, [O Muhammad], about the Hour: when is its arrival?}",
            paras: ["That is, when will it happen? What is meant is: when will the Hour begin?"],
          },
          {
            type: "terms",
            items: [
              {
                word: "mursaahaa",
                gloss: "its arrival",
                body: "Derived from the verb arsa, which refers to a ship dropping anchor off the coast.",
              },
            ],
          },
          {
            type: "ribbon",
            tone: "gold",
            body: "The onset of the Day of Resurrection is described in such terms by likening something that no one knows when it will happen to a ship on the sea, that no one knows when it will arrive until it actually drops anchor. What is meant is that no one knows when the Resurrection will happen until it actually happens.",
          },
          {
            type: "verse",
            ayah: "{In what [position] are you that you should mention it?}",
            paras: ["That is, you have no knowledge of it at all."],
          },
        ],
      },
      {
        id: "naziat-warner",
        title: "Only a warner (79:44–46)",
        icon: "21",
        sections: [
          {
            type: "heading",
            kicker: "Surat an-Nazi‘aat · commentary, continued",
            title: "Knowledge of the Hour belongs to Allah",
          },
          {
            type: "verse",
            paras: [
              "This was narrated in as-Sahihayn, in the hadith of Jibreel, when he asked the Prophet ﷺ about the Hour, and he ﷺ said: «The one who is asked about it does not know more than the one who is asking.»",
              "If Jibreel, who was the most knowledgeable of the angels, and the Prophet, who was the most knowledgeable of all humans about the revelation of Allah, did not know when the Hour would begin, then what do you think of those who have less knowledge than them?",
            ],
          },
          {
            type: "verse",
            ayah: "{To your Lord is its finality}",
            paras: ["That is, knowledge of it belongs only to Allah ﷻ, and no one else has any knowledge of it."],
          },
          {
            type: "verse",
            ayah: "{You are only a warner for those who fear it}",
            paras: [
              "That is, you have only been sent, O Prophet, to warn of the Hour; you have not been sent to tell people when it will happen.",
            ],
          },
          {
            type: "ribbon",
            tone: "gold",
            body: "Al-Bukhari and Muslim narrated: A man said to the Prophet ﷺ: O Messenger of Allah, when will the Hour be? He said: «What have you prepared for it?» He said: Love of Allah and His Messenger ﷺ. He said: «You will be with those whom you love.»",
          },
          {
            type: "verse",
            ayah: "{as though they had not remained [in the world] except for an afternoon or a morning thereof}",
            paras: [
              "That is, when they rise from their graves for the gathering, they will think that the duration of the life of this world was so short that it was as if, in their view, it was no more than an afternoon or a morning of a single day.",
            ],
          },
          {
            type: "ribbon",
            tone: "rose",
            body: "The word translated here as “afternoon” refers to the time between noon and the setting of the sun. The word translated here as “morning” refers to the time between sunrise and midday.",
          },
          {
            type: "terms",
            items: [
              {
                word: "afternoon",
                gloss: "noon until sunset",
                body: "The time between noon and the setting of the sun.",
              },
              {
                word: "morning",
                gloss: "sunrise until midday",
                body: "The time between sunrise and midday. On the Day they see the Hour, this life will seem no longer than one afternoon or one morning.",
              },
            ],
          },
        ],
      },
      {
        id: "naziat-hour-learn",
        title: "What we learn from 79:42–46",
        icon: "22",
        sections: [
          {
            type: "heading",
            kicker: "Surat an-Nazi‘aat · 79:42–46",
            title: "What we learn from the verses",
          },
          {
            type: "benefits",
            items: [
              {
                n: "1",
                tone: "rose",
                body: "Because of the interests served by withholding knowledge of when the Day of Resurrection will come, Allah ﷻ has withheld knowledge of when it will occur, so that people will strive hard in doing good deeds, fearing and worrying that the Day of Resurrection may come upon them at any moment.",
              },
              {
                n: "2",
                tone: "green",
                body: "The fact that the warning mentioned in the verse {You are only a warner for those who fear it} is addressed specifically to those who fear it, does not mean that the Prophet ﷺ did not warn those who did not fear it. Rather what is meant is that those who will benefit from the warning are only those who fear Allah ﷻ. As for those who do not fear Him, they will not benefit from this warning or from other signs in most cases.",
              },
              {
                n: "3",
                tone: "gold",
                body: "The verses point to the insignificance of this world, for it is no more than an afternoon or the morning thereof; it is short, temporary and transient, and will end in a very short time. Therefore it is not appropriate, for one who has reason, to neglect the life of the Hereafter for the sake of a mere afternoon or morning, or to lose Paradise for the sake of a transient desire.",
              },
            ],
          },
        ],
      },
      {
        id: "naziat-hour-activity",
        title: "Activity · The Hour and the warning",
        icon: "23",
        sections: [
          {
            type: "worksheet",
            title: "Activities",
            items: [
              {
                n: "1",
                prompt: "Fill in the blanks:",
                parts: [{ text: "Afternoon ________" }, { text: "Morning ________" }],
              },
              {
                n: "2",
                prompt:
                  "What do we learn from the fact that the word mursaahaa (its arrival) is used to refer to the onset of the Day of Resurrection.",
              },
              {
                n: "3",
                prompt: "What is the reason for:",
                parts: [
                  {
                    text: "a. Withholding knowledge from people of when the Day of Resurrection will begin?",
                  },
                  {
                    text: "b. Describing the warning as being specifically for those who fear Allah ﷻ, in the words {You are only a warner for those who fear it}?",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "abasa",
    title: "Surat Abasa",
    titleAr: "عبس",
    lessons: [
      {
        id: "abasa-opening",
        title: "Surat Abasa (80:1–10)",
        icon: "1",
        sections: [
          {
            type: "heading",
            kicker: "In this unit we will study",
          },
          {
            type: "surahBanner",
            title: "Surat Abasa",
            lines: ["is a Makkan surah", "(revealed before the Hijrah)"],
          },
          {
            type: "passage",
            lead: "Allah ﷻ says:",
            verses: ABASA_1_10,
            translation:
              "{The Prophet frowned and turned away Because there came to him the blind man, [interrupting]. But what would make you perceive, [O Muhammad], that perhaps he might be purified Or be reminded and the remembrance would benefit him? As for he who thinks himself without need, To him you give attention. And not upon you [is any blame] if he will not be purified. But as for he who came to you striving [for knowledge], While he fears [Allah], From him you are distracted}",
            ref: "[Abasa 80:1–10]",
          },
          {
            type: "note",
            title: "The reason for revelation",
            body: "It was narrated that Aisha رضي الله عنها said: The words {He [i.e., the Prophet] frowned and turned away} were revealed concerning Ibn Umm Maktum, the blind man رضي الله عنه. He came to the Messenger of Allah ﷺ and started saying: O Messenger of Allah, guide me. But with the Messenger of Allah there was one of the prominent figures among the polytheists, so the Messenger of Allah kept turning away from him [Ibn Umm Maktum] and towards the other man, saying: «Do you see anything wrong with what I am telling you?» and [the other man] kept saying: No. It was concerning this that this surah was revealed. Narrated by at-Tirmidhi; classed as sahih by al-Albani.",
          },
        ],
      },
      {
        id: "abasa-frown",
        title: "He frowned and turned away (80:1–4)",
        icon: "2",
        sections: [
          {
            type: "heading",
            kicker: "Surat Abasa · 80:1–4",
            title: "The blind man who came striving",
          },
          {
            type: "verse",
            ayah: "{The Prophet frowned and turned away, Because there came to him the blind man, [interrupting]}",
            paras: [
              "A frown appeared on the face of the Prophet ﷺ and he turned away from the blind man who was asking him questions, because the blind man came to him to ask him about some matters, when the Prophet ﷺ was preoccupied calling the leaders of Quraysh to Islam.",
              "The blind man was the great Sahabi Abdullah ibn Umm Maktum رضي الله عنه.",
            ],
          },
          {
            type: "ribbon",
            tone: "rose",
            body: "Allah ﷻ did not address the Prophet ﷺ directly; rather He spoke of him in the third person {The Prophet frowned and turned away}. This was an indication from Allah ﷻ that He did not want to address the rebuke directly to His Prophet and His Beloved ﷺ, out of compassion and mercy towards him, and by way of honouring him.",
          },
          {
            type: "benefits",
            title: "Allah referred to the Sahabi as “the blind man” and did not mention him by name for two reasons:",
            items: [
              {
                n: "1",
                tone: "green",
                body: "To soften the Prophet’s heart towards this blind man",
              },
              {
                n: "2",
                tone: "rose",
                body: "To point out that the blind man had an excuse for interrupting the Prophet ﷺ when he was speaking to the prominent figures; the fact that he was blind was a reason to excuse him.",
              },
            ],
          },
          {
            type: "verse",
            paras: [
              "Then after speaking of the Prophet ﷺ in the third person, Allah begins to address him directly, in the second person, so as to show the Prophet ﷺ that He is now speaking directly to him, after referring to him implicitly. So He says, addressing him directly:",
            ],
          },
          {
            type: "verse",
            ayah: "{But what would make you perceive, [O Muhammad], that perhaps he might be purified}",
            paras: [
              "That is, how do you know, O Muhammad, perhaps this blind man could be purified and cleansed of his sins by learning from your answers to what he came to ask you about?",
            ],
          },
          {
            type: "verse",
            ayah: "{Or be reminded and the remembrance would benefit him?}",
            paras: ["That is, how do you know, perhaps he would learn and benefit from your reminding him of Allah ﷻ?"],
          },
        ],
      },
      {
        id: "abasa-attention",
        title: "To him you give attention (80:5–10)",
        icon: "3",
        sections: [
          {
            type: "heading",
            kicker: "Surat Abasa · 80:5–10",
            title: "The one without need, and the one who came striving",
          },
          {
            type: "verse",
            ayah: "{As for he who thinks himself without need, To him you give attention}",
            paras: [
              "That is, will you focus your attention on seeking out those who have no interest in your message and turn away from it?",
            ],
          },
          {
            type: "verse",
            ayah: "{And not upon you [is any blame] if he will not be purified}",
            paras: [
              "That is, what harm will it do you if these polytheists whom you are so keen to guide do not purify themselves and cleanse their souls? There is no blame on you, because all that is required of you is to convey the message.",
            ],
          },
          {
            type: "verse",
            ayah: "{But as for he who came to you striving [for knowledge]}",
            paras: ["That is, as for this man who came to you eager and keen to listen to you and learn from you,"],
          },
          {
            type: "verse",
            ayah: "{While he fears [Allah]}",
            paras: ["Lest he fall short in his efforts to learn about his religion,"],
          },
          {
            type: "verse",
            ayah: "{From him you are distracted}",
            paras: ["That is, you are preoccupied with someone else and ignore him."],
          },
        ],
      },
      {
        id: "abasa-learn",
        title: "What we learn from 80:1–10",
        icon: "4",
        sections: [
          {
            type: "heading",
            kicker: "Surat Abasa · 80:1–10",
            title: "What we learn from the verses",
          },
          {
            type: "benefits",
            items: [
              {
                n: "1",
                tone: "rose",
                body: [
                  "The scholars derived a principle from these verses, and said: One should not ignore a matter that one is certain about for something that one is not certain about, and one should not give up pursuing something that will certainly lead to some benefit for something concerning which there is no certainty that it will lead to any results.",
                  "So you should not turn away from one who has already become Muslim for the sake of someone who may or may not become Muslim and enter the faith.",
                ],
              },
              {
                n: "2",
                tone: "rose",
                body: "The point of these verses is not that it is not allowed to seek out those who are not interested in religion and call them to Islam; rather the point is that we should not be distracted and turn away from those who are interested.",
              },
              {
                n: "3",
                tone: "green",
                body: "The fact that Allah left this rebuke to His Prophet in the Quran is one of the greatest proofs of the prophethood of Muhammad ﷺ, because if the Quran came from Muhammad ﷺ he would not have left in it anything that was indicative of a rebuke to him. Hence it was said: if the Messenger of Allah ﷺ were to have concealed anything of the revelation, he would have concealed this.",
              },
              {
                n: "4",
                tone: "sky",
                body: "In these verses, Allah ﷻ is alerting callers and warning them that they should not give precedence, when calling people to Allah, to people of high standing because of their position, prominent figures because of their prominence, or relatives because of their close kinship. Rather people should be all the same to them, rich or poor, old or young, relatives or strangers.",
              },
              {
                n: "5",
                tone: "gold",
                body: "At the beginning of the surah, {The Prophet frowned and turned away, Because there came to him the blind man}, there are three phrases in which Allah does not address the Prophet ﷺ directly, by way of showing kindness to him. Rather He speaks in the third person here, because this is a rebuke.",
              },
            ],
          },
        ],
      },
      {
        id: "abasa-activity",
        title: "Activity · The frown and the rebuke",
        icon: "5",
        sections: [
          {
            type: "worksheet",
            title: "Activities",
            items: [
              {
                n: "1",
                prompt:
                  "The scholars say that Allah ﷻ spoke of the Prophet ﷺ in the third person in the phrase {The Prophet frowned and turned away} so as not to address the rebuke directly to him. Why does the wording shift to the second person in the following verses?",
              },
              {
                n: "2",
                prompt: "How can you quote these verses as evidence to prove that Allah loves the Prophet ﷺ?",
              },
            ],
          },
        ],
      },
      {
        id: "abasa-sheets",
        title: "A reminder in honored sheets (80:11–14)",
        icon: "6",
        sections: [
          {
            type: "heading",
            kicker: "Surat Abasa · 80:11–23",
            title: "These verses are a reminder",
          },
          {
            type: "passage",
            lead: "Allah ﷻ says:",
            verses: ABASA_11_23,
            translation:
              "{No! Indeed, they [i.e., these verses] are a reminder; So whoever wills may remember it. [It is recorded] in honored sheets, Exalted and purified, [Carried] by the hands of messenger-angels, Noble and dutiful. Cursed is man; how disbelieving is he. From what thing [i.e., substance] did He create him? From a sperm-drop He created him and ordained his development. Then He eased the way for him; Then He causes his death and provides a grave for him. Then when He wills, He will resurrect him. No! Man has not yet accomplished what He commanded him}",
            ref: "[Abasa 80:11–23]",
          },
          {
            type: "verse",
            ayah: "{No!}",
            paras: [
              "That is, the matter should not have been as you did, O noble Messenger, when you frowned at the one who came to you, striving in pursuit of knowledge, and you let yourself be distracted from him in your paying attention to one who thought himself without need.",
            ],
          },
          {
            type: "verse",
            ayah: "{Indeed, these verses are a reminder}",
            paras: ["That is, what is mentioned in this surah is an exhortation and a reminder."],
          },
          {
            type: "verse",
            ayah: "{So whoever wills may remember it}",
            paras: ["So whoever among the slaves of Allah wants to remember Allah ﷻ, he will remember Him."],
          },
          {
            type: "verse",
            ayah: "{[It is recorded] in honored sheets}",
            paras: ["That is, this surah and this reminder is recorded in respected, venerated pages."],
          },
          {
            type: "verse",
            ayah: "{Exalted and purified}",
            paras: ["Held in high esteem, purified from any impurity, and free of any addition or subtraction."],
          },
          {
            type: "ribbon",
            tone: "rose",
            body: "What is meant by sheets or pages here is al-Lawh al-Mahfuz.",
          },
        ],
      },
      {
        id: "abasa-safarah",
        title: "Noble, dutiful emissaries (80:15–16)",
        icon: "7",
        sections: [
          {
            type: "heading",
            kicker: "Surat Abasa · 80:15–16",
            title: "Carried by the hands of messenger-angels",
          },
          {
            type: "verse",
            ayah: "{[Carried] by the hands of messenger-angels}",
            paras: ["They are the recording angels, the emissaries between Allah and His creation."],
          },
          {
            type: "benefits",
            title: "The reason why the angels are called safarah (translated above as “messenger-angels”) is one of two things:",
            items: [
              {
                n: "1",
                tone: "gold",
                body: "Either because they write; this name is derived from the word sifr which means book.",
              },
              {
                n: "2",
                tone: "rose",
                body: "Or the word safarah is the plural of safeer, which means an emissary or intermediary. They are so called because they are the intermediaries between Allah ﷻ and His creation.",
              },
            ],
          },
          {
            type: "verse",
            ayah: "{Noble and dutiful}",
            paras: ["That is, their attitude, manners and deeds are righteous, pure and perfect."],
          },
          {
            type: "ribbon",
            tone: "gold",
            body: "Al-Bukhari and Muslim narrated that Aisha رضي الله عنها said: The Messenger of Allah ﷺ said: «The one who recites the Quran skillfully will be with the noble, dutiful emissaries, and the one who recites it and finds it difficult will have a twofold reward.»",
          },
        ],
      },
      {
        id: "abasa-nutfah",
        title: "From a sperm-drop (80:17–19)",
        icon: "8",
        sections: [
          {
            type: "heading",
            kicker: "Surat Abasa · 80:17–19",
            title: "How disbelieving is man",
          },
          {
            type: "verse",
            ayah: "{Cursed is man; how disbelieving is he}",
            paras: [
              "This is expressing astonishment at man’s disbelieving Allah Who created him and perfected his creation. In other words, the disbeliever is cursed, for how great is his disbelief, despite the abundant blessings and kindness that Allah ﷻ bestows upon him.",
            ],
          },
          {
            type: "verse",
            ayah: "{From what substance did He create him?}",
            paras: [
              "This is a question which is intended to alert man to reflect on how his creation began, and from what substance Allah ﷻ created him. It is a rebuke to man for his arrogance and stubbornness in refusing to obey his Lord.",
            ],
          },
          {
            type: "verse",
            ayah: "{From a sperm-drop He created him and ordained his development}",
            paras: [
              "That is, his creation began from a sperm drop, namely semen, then Allah decreed that he should go through stages, in the first of which he starts out as a sperm-drop (nutfah), then a clinging clot (alaqah), then a chewed lump of flesh (mudghah) and so on.",
            ],
          },
          {
            type: "ribbon",
            tone: "rose",
            body: "Al-Bukhari and Muslim narrated that Ibn Mas‘ud رضي الله عنه said: The Messenger of Allah ﷺ, who was the one who spoke the truth and was believed, told us: «The creation of one of you is put together in his mother’s womb as a nutfah for forty days, then he becomes an alaqah for a similar period, then he becomes a mudghah for a similar period …»",
          },
        ],
      },
      {
        id: "abasa-grave",
        title: "Death, the grave, and the Resurrection (80:20–23)",
        icon: "9",
        sections: [
          {
            type: "heading",
            kicker: "Surat Abasa · 80:20–23",
            title: "He eased the way, then He will resurrect him",
          },
          {
            type: "verse",
            ayah: "{Then He eased the way for him}",
            paras: [
              "Then after he emerged from his mother’s womb, Allah ﷻ made clear for him the path of good and evil. This is like the verse in which Allah ﷻ says: {Indeed, We guided him to the way, be he grateful or be he ungrateful} [al-Insan 76:3].",
            ],
          },
          {
            type: "verse",
            ayah: "{Then He causes his death and provides a grave for him}",
            paras: [
              "Then after that, Allah ﷻ causes him to die and provides for him a place to be buried in. In other words, He makes him an occupant of a grave.",
            ],
          },
          {
            type: "ribbon",
            tone: "rose",
            body: "From this verse, the scholars understood that Muslims must bury their dead, so it is not permissible to cremate them, or to leave them for wild animals, or to throw them into the sea, and so on, unless it is not possible to bury them for some reason.",
          },
          {
            type: "verse",
            ayah: "{Then when He wills, He will resurrect him}",
            paras: [
              "Then He will resurrect him on the Day of Resurrection from his grave, for the reckoning and the requital.",
              "The reason why Allah said {Then when He wills} in this verse is that the disbelievers used to say: Why has Allah not yet resurrected the dead from their graves for the reckoning and the requital? So here Allah ﷻ explains that the delay of the Resurrection is connected to His will and decree.",
            ],
          },
          {
            type: "verse",
            ayah: "{No! Man has not yet accomplished what He commanded him}",
            paras: [
              "The word kallaa (translated here as “No!”) is by way of rebuke. In other words, it is not as the disbeliever says, that he has fulfilled his duty towards Allah. Rather man has not accomplished or fulfilled what Allah has enjoined upon him of obligatory duties.",
            ],
          },
        ],
      },
      {
        id: "abasa-passage-activity",
        title: "Activity · The reminder and the grave",
        icon: "10",
        sections: [
          {
            type: "worksheet",
            title: "Activities",
            items: [
              {
                n: "1",
                prompt:
                  "The scholars derived a fiqh ruling from the verse, {Then He causes his death and provides a grave for him}. What is that ruling?",
              },
              {
                n: "2",
                prompt:
                  "Put next to each of the following phrases a verse that matches it, taken from this passage.",
                table: {
                  columns: ["Phrase", "Appropriate verse:"],
                  rows: [
                    "Man has freedom of choice and is not compelled to do what he does",
                    "How can a man who came out from the same place that urine comes out from be arrogant?",
                    "Islam grants man honour that is not granted to other animals.",
                  ],
                },
              },
            ],
          },
        ],
      },
      {
        id: "abasa-food",
        title: "Let man look at his food (80:24–29)",
        icon: "11",
        sections: [
          {
            type: "heading",
            kicker: "Surat Abasa · 80:24–32",
            title: "Rain, grain, and the palm tree",
          },
          {
            type: "passage",
            lead: "Allah ﷻ says:",
            verses: ABASA_24_32,
            translation:
              "{Then let man look at his food – How We poured down water in torrents, Then We broke open the earth, splitting [it with sprouts], And caused to grow within it grain. And grapes and herbage. And olive and palm trees. And gardens of dense shrubbery. And fruit and grass – [As] enjoyment for you and your grazing livestock}",
            ref: "[Abasa 80:24–32]",
          },
          {
            type: "verse",
            ayah: "{Then let man look at his food}",
            paras: [
              "Here Allah ﷻ instructs man to look at his food which sustains him, and to reflect upon its origin, how it reaches him, how he eats it, and so on, so that through this thinking, reflection and pondering he may come to know Allah ﷻ, and worship Him as He should be worshipped.",
            ],
          },
          {
            type: "verse",
            ayah: "{How We poured down water in torrents}",
            paras: [
              "That is, Allah ﷻ begins the process of producing humanity’s food by sending down rain from the sky in abundance.",
            ],
          },
          {
            type: "verse",
            ayah: "{Then We broke open the earth, splitting [it with sprouts]}",
            paras: [
              "That is, We split it with the vegetation that emerges from it because of the sending down of rain.",
            ],
          },
          {
            type: "verse",
            ayah: "{And caused to grow within it grain}",
            paras: [
              "Then after the earth has been split, grain begins to grow. This refers to all types of grain that the earth produces, such as wheat, barley and so on.",
            ],
          },
          {
            type: "verse",
            ayah: "{And grapes and herbage}",
            paras: [
              "The word qadb (translated here as “herbage”) refers to fodder for animals. It is called qadb because it is given to animals when it is still fresh, and they chew it (tuqdab) in order to break it down.",
            ],
          },
          {
            type: "verse",
            ayah: "{And olive and palm trees}",
            paras: [
              "Allah ﷻ mentions the palm tree, and does not just mention its fruit, because palm trees bring many benefits. The Arabs used to eat the dates as food, and use the date stones as food for camels; they used to make use of the wood and leaves in building houses and roofs, and making vessels; and they used the palm fibers to make ropes.",
            ],
          },
        ],
      },
      {
        id: "abasa-mataa",
        title: "Gardens, fruit, and enjoyment (80:30–32)",
        icon: "12",
        sections: [
          {
            type: "heading",
            kicker: "Surat Abasa · 80:30–32",
            title: "Enjoyment for you and your livestock",
          },
          {
            type: "verse",
            ayah: "{And gardens of dense shrubbery}",
            paras: [
              "The word translated here as “garden” refers to a garden that is enclosed by a wall. A “garden of dense shrubbery” is a garden of thickly growing shrubs or tall trees.",
            ],
          },
          {
            type: "verse",
            ayah: "{And fruit and grass}",
            paras: [
              "Fruits (fakihah) are crops that are eaten for pleasure (tafakkuḥ), not for basic sustenance, such as dates, grapes, pomegranates and almonds. The word translated here as “grass” refers to plants that animals eat, such as grasses and so on.",
            ],
          },
          {
            type: "verse",
            ayah: "{[As] enjoyment for you and your grazing livestock}",
            paras: [
              "That is, We cause these things that humans eat to grow as enjoyment for you, O people, so that you may benefit from them and find pleasure in them. And We cause grasses and other plants to grow as enjoyment for your livestock to eat and benefit from.",
            ],
          },
          {
            type: "ribbon",
            tone: "gold",
            body: "The pleasures of this worldly life are called mataa (translated above as “enjoyment”) because they soon fade and disappear. This is in contrast to the pleasures of Paradise which are called naeem, because they will never end.",
          },
        ],
      },
      {
        id: "abasa-food-activity",
        title: "Activity · Man’s food",
        icon: "13",
        sections: [
          {
            type: "worksheet",
            title: "Activities",
            items: [
              {
                n: "1",
                prompt:
                  "Write a brief summary in which you speak of the ways in which foods are described, according to what is said in these verses.",
              },
              {
                n: "2",
                prompt: "Draw a line from each word or phrase in List A to that which matches it in List B:",
                table: {
                  columns: ["(A)", "(B)"],
                  rows: [
                    ["Herbage", "Garden surrounded by a wall"],
                    ["Gardens", "A garden of thickly growing shrubs or tall trees"],
                    ["Gardens of dense shrubbery", "Grasses and plants that animals eat"],
                    ["Grains", "Fodder for animals"],
                  ],
                },
              },
            ],
          },
        ],
      },
      {
        id: "abasa-blast",
        title: "The Deafening Blast (80:33–37)",
        icon: "14",
        sections: [
          {
            type: "heading",
            kicker: "Surat Abasa · 80:33–42",
            title: "A man will flee from his brother",
          },
          {
            type: "passage",
            lead: "Allah ﷻ says:",
            verses: ABASA_33_42,
            translation:
              "{But when there comes the Deafening Blast On the Day a man will flee from his brother. And his mother and his father. And his wife and his children, For every man, that Day, will be a matter adequate for him. [Some] faces, that Day, will be bright – Laughing, rejoicing at good news. And [other] faces, that Day, will have upon them dust. Blackness will cover them. Those are the disbelievers, the wicked ones}",
            ref: "[Abasa 80:33–42]",
          },
          {
            type: "verse",
            ayah: "{But when there comes the Deafening Blast}",
            paras: [
              "Which is the blast of the Trumpet on the Day of Resurrection. The word as-saakhkhah (translated above as “the Deafening Blast”) comes from the word saakha, which means to listen to someone.",
              "And it was said that it is so called because it deafens (tasukhkh); in other words, its sound will overwhelm people’s hearing to the point that it almost deafens them.",
              "And it was said that as-Saakhkhah is one of the names of the Day of Resurrection.",
            ],
          },
          {
            type: "verse",
            ayah: "{On the Day a man will flee from his brother}",
            paras: [
              "This is a description of the Day of Resurrection, on which a man will flee from his relatives.",
            ],
          },
          {
            type: "verse",
            ayah: "{And his mother and his father, And his wife and his children}",
            paras: [
              "The words translated here as “mother” and “father” refer to one’s immediate parents and also grandparents.",
            ],
          },
          {
            type: "ribbon",
            tone: "gold",
            body: "The reason why a man will flee from his relatives is that he will be afraid that they will ask him for what there is between them of unfulfilled rights and acts of injustice. Qatadah said: There will be nothing more difficult for a person on the Day of Resurrection than seeing someone he knows and fearing that that person will ask him to settle some matter of injustice with him.",
          },
          {
            type: "verse",
            ayah: "{For every man, that Day, will be a matter adequate for him}",
            paras: [
              "On the Day of Resurrection, each person will have something that will preoccupy him and prevent him from paying attention to anyone else.",
            ],
          },
        ],
      },
      {
        id: "abasa-faces",
        title: "Bright faces and dark faces (80:38–42)",
        icon: "15",
        sections: [
          {
            type: "heading",
            kicker: "Surat Abasa · 80:38–42",
            title: "The people of Paradise and the people of Hell",
          },
          {
            type: "ribbon",
            tone: "rose",
            body: "Al-Bukhari and Muslim narrated that Aisha رضي الله عنها said: The Messenger of Allah ﷺ said: «You will be gathered barefoot, naked and uncircumcised.» I said: O Messenger of Allah, men and women looking at one another?! He said: «The matter will be too overwhelming for anyone to worry about that.»",
          },
          {
            type: "verse",
            ayah: "{[Some] faces, that Day, will be bright}",
            paras: [
              "That is, the faces of the people of Paradise will be shining and glowing on the Day of Resurrection.",
              "The same verb in Arabic is used to refer to a person’s face when he looks good, and to the dawn when it glows brightly.",
            ],
          },
          {
            type: "verse",
            ayah: "{Laughing, rejoicing at good news}",
            paras: [
              "That is, laughing with joy at what Allah has given them of delights and honour, rejoicing at the increase of these blessings.",
            ],
          },
          {
            type: "verse",
            ayah: "{And [other] faces, that Day, will have upon them dust}",
            paras: ["That is, the faces of the people of Hell will be dark and gloomy."],
          },
          {
            type: "verse",
            ayah: "{Blackness will cover them}",
            paras: ["That is, their faces will be covered with humiliation."],
          },
          {
            type: "verse",
            ayah: "{Those are the disbelievers, the wicked ones}",
            paras: [
              "That is, those who are described in this manner are the ones who disbelieved in the signs of Allah ﷻ in this world, and they did evil and transgressed.",
            ],
          },
        ],
      },
      {
        id: "abasa-blast-learn",
        title: "What we learn from 80:33–42",
        icon: "16",
        sections: [
          {
            type: "heading",
            kicker: "Surat Abasa · 80:33–42",
            title: "What we learn from the verses",
          },
          {
            type: "ribbon",
            tone: "gold",
            body: "Someone may say: Isn’t saying “The Day man will flee from his relatives” more concise than saying {On the Day a man will flee from his brother And his mother and his father And his wife and his children}? So why is there this elaboration? The answer is: elaboration in this context is more alarming to the reader, as it enables him to imagine this terrifying situation.",
          },
          {
            type: "benefits",
            items: [
              {
                n: "1",
                tone: "rose",
                body: [
                  "Why is the wife in this context called sahibah (lit. companion)?",
                  "That is because not all wives are truly companions to their husbands. A wife may live with her husband because she has no choice, although she hates to live with him. In this case she is a wife, not a companion. In the case of a woman such as this, it is not far-fetched to think that the husband would flee from her. As for the wife who is a companion, she is the one who helps her husband to cope with any calamity he faces, and she lives alongside him at times of hardship. In the case of such a wife, her husband hopes that she will help him in this situation. Thus the Quran explains that even with a wife such as this, she will flee from you and you will flee from her in this difficult situation, despite the great love and compassion that existed between you in this world, so how about a wife who is not like that?",
                ],
              },
              {
                n: "2",
                tone: "amber",
                body: "In this passage, {On the Day a man will flee from his brother. And his mother and his father. And his wife and his children}, Allah ﷻ listed a person’s loved ones in order of the level of compassion he feels towards them. So He started with the lowest level, which is the brother, and ended with the one towards whom the greatest compassion is felt, namely the child, because a person usually feels the greatest compassion towards his children.",
              },
            ],
          },
        ],
      },
      {
        id: "abasa-blast-activity",
        title: "Activity · The Deafening Blast",
        icon: "17",
        sections: [
          {
            type: "worksheet",
            title: "Activities",
            items: [
              {
                n: "1",
                prompt:
                  "{On the Day a man will flee from his brother, And his mother and his father, And his wife and his children}. In this verse there are three eloquent and subtle points. Discuss them briefly.",
              },
              {
                n: "2",
                prompt:
                  "At the end of Surat an-Nazi‘aat, the people of Hell are mentioned before the people of Paradise. At the end of Surat Abasa, the people of Paradise are mentioned before the people of Hell. Reflect on the two surahs and work out the reason why the people of Hell are mentioned first in the previous surah and the people of Paradise are mentioned first here.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "takweer",
    title: "Surat at-Takweer",
    titleAr: "التكوير",
    lessons: [
      {
        id: "takweer-opening",
        title: "Surat at-Takweer (81:1–14)",
        icon: "1",
        sections: [
          {
            type: "heading",
            kicker: "In this unit we will study",
          },
          {
            type: "surahBanner",
            title: "Surat at-Takweer",
            lines: ["is a Makkan surah", "(revealed before the Hijrah)"],
          },
          {
            type: "passage",
            lead: "Allah ﷻ says:",
            verses: TAKWEER_1_14,
            translation:
              "{When the sun is wrapped up [in darkness]. And when the stars fall, dispersing. And when the mountains are removed. And when full-term she-camels are neglected. And when the wild beasts are gathered. And when the seas are filled with flames. And when the souls are paired. And when the girl [who was] buried alive is asked. For what sin she was killed. And when the pages are made public. And when the sky is stripped away. And when Hellfire is set ablaze. And when Paradise is brought near, A soul will [then] know what it has brought [with it]}",
            ref: "[at-Takweer 81:1–14]",
          },
          {
            type: "note",
            body: "At-Tirmidhi narrated, in a report that he classed as hasan, that Ibn Umar رضي الله عنه said: The Messenger of Allah ﷺ said: «Whoever would like to see the Day of Resurrection as if seeing it with his own eyes, let him read: {When the sun is wrapped up [in darkness]} [Surat at-Takweer], {When the sky breaks apart} [Surat al-Infitar] and {When the sky has split [open]} [Surat al-Inshiqaq].»",
          },
        ],
      },
      {
        id: "takweer-upheaval",
        title: "The sun, the stars, and the camels (81:1–5)",
        icon: "2",
        sections: [
          {
            type: "heading",
            kicker: "Surat at-Takweer · 81:1–5",
            title: "When the world is overturned",
          },
          {
            type: "verse",
            ayah: "{When the sun is wrapped up [in darkness]}",
            paras: [
              "The word translated here as “wrapped up” (takweer) refers to putting the parts of a thing together, such as wrapping a turban around the head. Thus, parts of the sun will be put together and wrapped up, and once it is wrapped up, its light will disappear.",
              "What is meant is that the sun will undergo a change and its light will vanish.",
            ],
          },
          {
            type: "verse",
            ayah: "{And when the stars fall, dispersing}",
            paras: ["That is, when they are scattered, fall and change."],
          },
          {
            type: "verse",
            ayah: "{And when the mountains are removed}",
            paras: [
              "That is, on that Day, Allah will cause the mountains to be removed from the face of the earth, so they will become like a mirage, and like scattered dust.",
            ],
          },
          {
            type: "verse",
            ayah: "{And when heavily pregnant she-camels are neglected}",
            paras: [
              "The word translated here as “heavily pregnant she-camels” refers to she-camels that have completed ten months of pregnancy.",
              "What is meant by neglecting them is that they will be ignored and no attention will be paid to them.",
              "The majority of the Arabs’ wealth, and that which was most precious, was camels, and the most valuable of that wealth, for which they would compete, was she-camels in the tenth month of pregnancy.",
              "But on that Day, people will neglect this precious wealth because of the immense terror they will face.",
              "The point of this idea which is presented in the Quran is to highlight the fact that people will be distracted from their wealth by the terror of that momentous Day.",
            ],
          },
          {
            type: "verse",
            ayah: "{And when the wild beasts are gathered}",
            paras: [
              "That is, when the wild animals are gathered so that Allah might settle the scores among them.",
            ],
          },
          {
            type: "ribbon",
            tone: "gold",
            body: "Muslim narrated from Abu Hurayrah رضي الله عنه that the Messenger of Allah ﷺ said: «All rights will be restored on the Day of Resurrection, to the extent that the hornless sheep will settle its score with the horned sheep.»",
          },
        ],
      },
      {
        id: "takweer-seas",
        title: "The seas and the paired souls (81:6–7)",
        icon: "3",
        sections: [
          {
            type: "heading",
            kicker: "Surat at-Takweer · 81:6–7",
            title: "Seas set alight, souls brought together",
          },
          {
            type: "verse",
            ayah: "{And when the seas are filled with flames}",
            paras: [
              "That is, when the seas are set alight, and despite their vastness will become burning fire.",
              "It was also said that what is meant by sujjirat (translated above as “are filled with flames”) is that their water will disappear, be absorbed into the earth and will dry up, so not a single drop will remain.",
            ],
          },
          {
            type: "verse",
            ayah: "{And when the souls are paired}",
            paras: [
              "That is, each person who did a good deed will be paired with his counterpart, and those who love one another for the sake of Allah will be paired in Paradise, and those who love one another in doing that which pleases the Shaytan will be paired in Hell, as Allah ﷻ says elsewhere: {And you become [of] three kinds} [al-Waqi‘ah 56:7], that is, of three types.",
            ],
          },
        ],
      },
      {
        id: "takweer-buried",
        title: "The buried girl and the reckoning (81:8–14)",
        icon: "4",
        sections: [
          {
            type: "heading",
            kicker: "Surat at-Takweer · 81:8–14",
            title: "Pages, the sky, Hell, and Paradise",
          },
          {
            type: "verse",
            ayah: "{And when the girl [who was] buried alive is asked}",
            paras: [
              "This refers to the female infant who was buried alive; on that Day she will be asked about the reason why she was killed.",
              "She is described as maw’oodah (translated above as “buried alive”) because of what was thrown onto her of soil, so that it suffocated her (ya’ooduha); in other words, it weighed heavily upon her until she died.",
            ],
          },
          {
            type: "verse",
            ayah: "{For what sin she was killed}",
            paras: ["What was the sin for which the one who buried her alive killed her?"],
          },
          {
            type: "ribbon",
            tone: "rose",
            body: "The question will be addressed to the one who was buried alive, and not to her killer, to indicate that the killer is subject to the utmost divine wrath, to the point that he does not even deserve to be addressed directly and questioned about that.",
          },
          {
            type: "verse",
            ayah: "{And when the pages are made public}",
            paras: [
              "That is, when the pages containing the records of people’s deeds are presented to people, with all that they contain of good and bad deeds.",
            ],
          },
          {
            type: "verse",
            ayah: "{And when the sky is stripped away}",
            paras: [
              "That is, when it is pulled off and removed from its place.",
              "The word translated here as “stripped away” refers to something that is stuck firmly and is pulled off forcefully. So the sky will be stripped away as the skin is stripped away from the ram (after slaughter).",
            ],
          },
          {
            type: "verse",
            ayah: "{And when Hellfire is set ablaze}",
            paras: ["That is, when the fire of Hell is stoked and will heat up."],
          },
          {
            type: "verse",
            ayah: "{And when Paradise is brought near}",
            paras: [
              "It will be brought close to its people, the righteous. This is like the verse in which Allah ﷻ says: {And Paradise will be brought near to the righteous, not far} [Qaf 50:31].",
            ],
          },
          {
            type: "verse",
            ayah: "{A soul will [then] know what it has brought [with it]}",
            paras: [
              "When all of the above comes to pass, each soul will know what it sent forth of deeds in this world, whether it did good that will lead it to Paradise, or it did evil that will lead it to Hell.",
            ],
          },
        ],
      },
      {
        id: "takweer-learn",
        title: "What we learn from 81:1–14",
        icon: "5",
        sections: [
          {
            type: "heading",
            kicker: "Surat at-Takweer · 81:1–14",
            title: "What we learn from the verses",
          },
          {
            type: "benefits",
            items: [
              {
                n: "1",
                tone: "amber",
                body: "The wild beasts will be gathered in one place, and will mix with one another, due to intense fear. So animals that would naturally stay away from one another will come together in one place, and they will not transgress against one another, due to intense fear; they will no longer act according to their nature, which is to attack and prey on one another. If that is the case with regard to wild animals that possess no power of reason, then what will the state of humans be on that Day?",
              },
              {
                n: "2",
                tone: "rose",
                body: "On the Day of Resurrection, each type of human will be brought together with others like him. So good people will be brought together with good people, evil people will be brought together with evil people, and this ummah will be brought together.",
              },
              {
                n: "3",
                tone: "sky",
                body: "Every deed that you did, words or actions, is written down and recorded in documents by the trustworthy hands of the noble scribes who know what you do. Then when the Day of Resurrection comes, as Allah ﷻ says in His Book: {And [for] every person We have fastened his deeds to his neck and We will produce for him on the Day of Resurrection a record which he will encounter spread open. [It will be said], “Read your record. Sufficient is yourself against you this Day as a reckoner”} [al-Isra 17:13–14].",
              },
            ],
          },
        ],
      },
      {
        id: "takweer-activity",
        title: "Activity · The great events",
        icon: "6",
        sections: [
          {
            type: "worksheet",
            title: "Activities",
            items: [
              {
                n: "1",
                prompt:
                  "In the table below, put next to each verse taken from the passage quoted above another verse that is similar to it, from a different surah:",
                table: {
                  columns: ["Verse", "Similar verse"],
                  rows: [
                    "{And when the mountains are removed}",
                    "{And when the souls are paired}",
                    "{And when the pages are made public}",
                    "{And when Paradise is brought near}",
                    "{A soul will [then] know what it has brought [with it]}",
                  ],
                },
              },
              {
                n: "2",
                prompt: "Draw a line from each word or phrase in List A to that which matches it in List B:",
                table: {
                  columns: ["(A)", "(B)"],
                  rows: [
                    ["wrapped up [in darkness]", "are stoked"],
                    ["fall, dispersing", "are neglected"],
                    ["are neglected", "is wound around"],
                    ["are gathered", "are scattered and fall"],
                    ["are filled with flames", "are brought together"],
                  ],
                },
              },
            ],
          },
        ],
      },
      {
        id: "takweer-oath",
        title: "The oath by the stars (81:15–18)",
        icon: "7",
        sections: [
          {
            type: "heading",
            kicker: "Surat at-Takweer · 81:15–29",
            title: "So I swear by the retreating stars",
          },
          {
            type: "passage",
            lead: "Allah ﷻ says:",
            verses: TAKWEER_15_29,
            translation:
              "{So I swear by the retreating stars, Those that run [their courses] and disappear, And by the night as it closes in, And by the dawn when it breathes, [That] indeed, the Qur'an is a word [conveyed by] a noble messenger, [Who is] possessed of power and with the Owner of the Throne, secure [in position], Obeyed there and trustworthy. And your companion is not [at all] mad, And he has already seen Gabriel in the clear horizon. And Muhammad is not a withholder of [knowledge of] the unseen, And the Qur'an is not the word of an accursed devil. So where are you going? It is not except a reminder to the worlds, For whoever wills among you to take a right course. And you do not will except that Allah wills - Lord of the worlds}",
            ref: "[at-Takweer 81:15–29]",
          },
          {
            type: "verse",
            ayah: "{So I swear by the retreating stars}",
            paras: [
              "The word laa (lit. not; it is not translated here) is used for emphasis in this verse.",
              "The word translated as “the retreating stars” refers to the stars whose light is hidden by day.",
            ],
          },
          {
            type: "verse",
            ayah: "{Those that run [their courses] and disappear}",
            paras: [
              "This refers to the stars; those that disappear are the stars that are hidden in their constellations.",
            ],
          },
          {
            type: "verse",
            ayah: "{And by the night as it closes in}",
            paras: [
              "Here Allah ﷻ swears by the night when it comes with its darkness and when it goes.",
            ],
          },
          {
            type: "ribbon",
            tone: "amber",
            body: "The Arabs say as'asa al-layl (the night has closed in) when night comes, and they say sa'sa'a al-layl [inverting the consonants] when there is nothing left of the night but a little.",
          },
          {
            type: "verse",
            ayah: "{And by the dawn when it breathes}",
            paras: ["This is an oath by the dawn, when its light first begins to appear."],
          },
        ],
      },
      {
        id: "takweer-jibreel",
        title: "A noble messenger (81:19–23)",
        icon: "8",
        sections: [
          {
            type: "heading",
            kicker: "Surat at-Takweer · 81:19–23",
            title: "Jibreel, possessed of power",
          },
          {
            type: "verse",
            ayah: "{[That] indeed, the Qur'an is a word [conveyed by] a noble messenger}",
            paras: [
              "This is the matter that is attested to by the oath.",
              "The noble messenger is Jibreel عليه السلام.",
              "In other words, this Quran is something that was conveyed by a noble messenger, namely Jibreel عليه السلام, who conveyed it from the Lord of Glory to our Prophet Muhammad ﷺ.",
            ],
          },
          {
            type: "verse",
            ayah: "{[Who is] possessed of power and with the Owner of the Throne, secure [in position]}",
            paras: [
              "He is possessed of power in carrying out what Allah commands him to do. One example of his power is that he turned the city of the people of Lut upside down and destroyed them.",
              "And he also possesses high status before the Owner of the Throne, namely Allah ﷻ.",
            ],
          },
          {
            type: "verse",
            ayah: "{Obeyed there and trustworthy}",
            paras: [
              "The word “there” refers to the heavens.",
              "In other words, the angels there in heaven obey him, and he is trustworthy and entrusted with the revelation which he brings down.",
            ],
          },
          {
            type: "verse",
            ayah: "{And your companion is not [at all] mad}",
            paras: [
              "Muhammad ﷺ is not a madman, and this Quran that he brought is not the gibberish of one who is insane.",
            ],
          },
          {
            type: "verse",
            ayah: "{And he has already seen Gabriel}",
            paras: [
              "Muhammad ﷺ saw Jibreel in his true form in which Allah created him, with six hundred wings. He filled the entire horizon, as is mentioned in as-Sahihayn and elsewhere.",
            ],
          },
          {
            type: "verse",
            ayah: "{in the clear horizon}",
            paras: [
              "That is, in the direction where the sun rises, towards the east, because when the sun rises from this direction, it is clear and things can be seen clearly in its direction.",
            ],
          },
          {
            type: "ribbon",
            tone: "rose",
            body: "In Sahih Muslim, it is narrated that Aisha رضي الله عنها said: I was the first of this ummah to ask the Messenger of Allah ﷺ about that – meaning this seeing that is mentioned in this verse – and he said: «He is Jibreel. I never saw him in his true form in which he was created except on these two occasions. I saw him coming down from heaven, his immense size filling the space between heaven and earth.»",
          },
        ],
      },
      {
        id: "takweer-reminder",
        title: "A reminder to the worlds (81:24–29)",
        icon: "9",
        sections: [
          {
            type: "heading",
            kicker: "Surat at-Takweer · 81:24–29",
            title: "Not a withholder, and not the word of a devil",
          },
          {
            type: "verse",
            ayah: "{And Muhammad is not a withholder of [knowledge of] the unseen}",
            paras: [
              "What is meant by the unseen here is the revelation and the Quran.",
              "The word daneen, translated here as “withholder” refers to one who is miserly or stingy.",
              "The phrase danantu bi'sh-shay means: I withheld the thing out of stinginess.",
              "In other words, Muhammad ﷺ does not withhold the revelation and fail to convey it to the people.",
            ],
          },
          {
            type: "verse",
            ayah: "{And the Qur'an is not the word of an accursed devil}",
            paras: [
              "The word rajeem (translated here as “accursed”) refers to one who is cursed and cast out from the mercy of Allah.",
              "What is meant is, the Quran is not the word of one of the devils who eavesdrop on the heavens and are struck by meteors; rather it is the word and the revelation of the Lord of the Worlds.",
            ],
          },
          {
            type: "verse",
            ayah: "{So where are you going?}",
            paras: [
              "That is, where are you going and drifting away from the Book of Allah ﷻ and from obedience to Him, when there is definitive proof that it is true?",
            ],
          },
          {
            type: "verse",
            ayah: "{It is not except a reminder to the worlds}",
            paras: [
              "The pronoun “it” refers to the Quran.",
              "In other words, the Quran is but an exhortation from Allah ﷻ to all the people, to whom Muhammad ﷺ was sent.",
            ],
          },
          {
            type: "verse",
            ayah: "{For whoever wills among you to take a right course}",
            paras: [
              "That is, to follow the truth.",
              "After explaining in the previous verse that this Quran is an exhortation and a reminder to all the worlds, in this verse Allah ﷻ explains that the reminder and the revelation cannot in fact benefit any but those who want to take a right course and steadfastly follow the path of truth. As for the one who turns away, this Quran is of no benefit to him so long as he is turning away from it.",
            ],
          },
          {
            type: "verse",
            ayah: "{And you do not will except that Allah wills - Lord of the worlds}",
            paras: [
              "That is, you will not be able to adhere to the truth except after Allah ﷻ wills that for you.",
            ],
          },
        ],
      },
      {
        id: "takweer-oath-learn",
        title: "What we learn from 81:15–29",
        icon: "10",
        sections: [
          {
            type: "heading",
            kicker: "Surat at-Takweer · 81:15–29",
            title: "What we learn from the verses",
          },
          {
            type: "benefits",
            items: [
              {
                n: "1",
                tone: "purple",
                body: "Allah ﷻ did not refer to Himself by name; rather He referred to Himself as the Owner of the Throne, in the context of speaking about Jibreel, so as to give a likeness of Jibreel and his position before Allah as that of a vizier who is always carrying out the commands of the King, and he occupies an honourable position before Him.",
              },
            ],
          },
          {
            type: "note",
            tone: "warning",
            body: "The angelic messenger who brought down the Quran from Allah ﷻ is described with the most beautiful attributes, and the human messenger to whom the Quran was brought is described with the best attributes. This is indicative of how honourable this message – the Quran – is, for usually when kings send messengers with important messages, they only send such messages with the noblest of their envoys.",
          },
          {
            type: "benefits",
            items: [
              {
                n: "2",
                tone: "gold",
                body: "The Prophet ﷺ is referred to as {your companion} by way of rebuke to the polytheists of Quraysh who accused him of being insane and practising witchcraft and so on, because they had known him and lived close to him for a lengthy portion of his life, more than forty years, during which they had not seen anything from him to suggest that he was insane or a practitioner of witchcraft, so how come they were making all these accusations against him now?!",
              },
            ],
          },
        ],
      },
      {
        id: "takweer-oath-activity",
        title: "Activity · The noble messenger",
        icon: "11",
        sections: [
          {
            type: "worksheet",
            title: "Activities",
            items: [
              {
                n: "1",
                prompt: "Mention the attributes of Jibreel عليه السلام that are referred to in these verses.",
              },
              {
                n: "2",
                prompt:
                  "“The bearer of the Quran should be a person of noble character, trustworthy, far removed from immature and foolish behaviour, strong in his adherence to the Book of Allah and the Sunnah of His Prophet ﷺ.” Where do you see this meaning in this passage?",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "infitar",
    title: "Surat al-Infitar",
    titleAr: "الانفطار",
    lessons: [
      {
        id: "infitar-opening",
        title: "Surat al-Infitar (82:1–8)",
        icon: "1",
        sections: [
          {
            type: "heading",
            kicker: "In this unit we will study",
          },
          {
            type: "surahBanner",
            title: "Surat al-Infitar",
            lines: ["is a Makkan surah", "(revealed before the Hijrah)"],
          },
          {
            type: "passage",
            lead: "Allah ﷻ says:",
            verses: INFITAR_1_8,
            translation:
              "{When the sky breaks apart. And when the stars fall, scattering, And when the seas are erupted. And when the graves are overturned, A soul will [then] know what it has put forth and kept back. O mankind, what has deceived you concerning your Lord, the Generous, Who created you, proportioned you, and balanced you? In whatever form He willed has He assembled you}",
            ref: "[al-Infitar 82:1–8]",
          },
          {
            type: "note",
            body: "It was narrated that Ibn Umar رضي الله عنه said: The Messenger of Allah ﷺ said: «Whoever would like to see the Day of Resurrection as if seeing it with his own eyes, let him read: {When the sun is wrapped up [in darkness]} [Surat at-Takweer], {When the sky breaks apart} [Surat al-Infitar] and {When the sky has split [open]} [Surat al-Inshiqaq].» Narrated by at-Tirmidhi; classed as sahih by al-Albani.",
          },
        ],
      },
      {
        id: "infitar-sky",
        title: "When the sky breaks apart (82:1–5)",
        icon: "2",
        sections: [
          {
            type: "heading",
            kicker: "Surat al-Infitar · 82:1–5",
            title: "The sky, the stars, the seas, and the graves",
          },
          {
            type: "verse",
            ayah: "{When the sky breaks apart}",
            paras: [
              "Breaking apart means splitting. This is like the verse in which Allah says: {And [mention] the Day when the heaven will split open with [emerging] clouds, and the angels will be sent down in successive descent} [al-Furqan 25:25].",
            ],
          },
          {
            type: "verse",
            ayah: "{And when the stars fall, scattering}",
            paras: ["They will fall, scattered and dispersed."],
          },
          {
            type: "verse",
            ayah: "{And when the seas are erupted}",
            paras: [
              "Allah will cause them to burst forth onto one another, mixing the freshwater with the saltwater.",
            ],
          },
          {
            type: "verse",
            ayah: "{And when the graves are overturned}",
            paras: ["That is, turned upside down."],
          },
          {
            type: "verse",
            ayah: "{A soul will [then] know what it has put forth and kept back}",
            paras: [
              "That is, at that time, when these momentous events unfold, deeds will be presented, and each soul will know what it put forth and kept back, whereas in this world it had forgotten.",
              "So each person will be informed about all that he did, as Allah ﷻ says elsewhere: {Man will be informed that Day of what he sent ahead and kept back} [al-Qiyamah 75:13].",
            ],
          },
        ],
      },
      {
        id: "infitar-generous",
        title: "Your Lord, the Generous (82:6–8)",
        icon: "3",
        sections: [
          {
            type: "heading",
            kicker: "Surat al-Infitar · 82:6–8",
            title: "What has deceived you?",
          },
          {
            type: "verse",
            ayah: "{O mankind, what has deceived you concerning your Lord, the Generous?}",
            paras: [
              "This is addressed to sinners: what caused you to be deceived about your Lord, so that you committed sins?",
              "Allah describes Himself as generous in this context, so as to draw attention to the fact that no one should respond to the Most Generous by committing evil and immoral deeds.",
            ],
          },
          {
            type: "ribbon",
            tone: "gold",
            body: "It was narrated from Umar ibn al-Khattab رضي الله عنه that he recited this verse, {what has deceived you concerning your Lord, the Generous?}, then he said: By Allah, his ignorance has deceived him.",
          },
          {
            type: "verse",
            ayah: "{Who created you, proportioned you, and balanced you}",
            paras: ["That is, He made you in proportion, standing upright, in the best shape."],
          },
          {
            type: "verse",
            ayah: "{In whatever form He willed has He assembled you}",
            paras: [
              "That is, He has made you in the form that He ﷻ willed. Thus some people resemble their fathers, or their mothers, or their maternal uncles, or their paternal uncles, and so on. Some people are good-looking, some are ugly, some are white, and some are black.",
            ],
          },
        ],
      },
      {
        id: "infitar-learn",
        title: "What we learn from 82:1–8",
        icon: "4",
        sections: [
          {
            type: "heading",
            kicker: "Surat al-Infitar · 82:1–8",
            title: "What we learn from the verses",
          },
          {
            type: "benefits",
            items: [
              {
                n: "1",
                tone: "teal",
                body: "In these verses, Allah discusses the destruction of the world and the end of this life. He starts by mentioning the destruction of the roof of this world, which is the heaven and all that it contains of stars and planets. Then He mentions the destruction of everything on the face of the earth, and causing the seas to erupt. Then He discusses the destruction of the structure of the earth, with the overturning of the graves.",
              },
              {
                n: "2",
                tone: "gold",
                body: "The overturning of the graves is one of the incidents in which the earth will be turned upside down and landslides will occur. It is singled out for mention among the other events that will happen to the earth, because of its terrifying impact when one envisages what will happen to the earth, when it throws onto the surface what was inside the graves of corpses and bones.",
              },
            ],
          },
        ],
      },
      {
        id: "infitar-activity",
        title: "Activity · The sky breaks apart",
        icon: "5",
        sections: [
          {
            type: "worksheet",
            title: "Activities",
            items: [
              {
                n: "1",
                prompt: "Explain the events of the Day of Resurrection in the light of what you have read in these verses.",
              },
              {
                n: "2",
                prompt:
                  "What is the reason why the verse describes Allah ﷻ as generous, in the context of the verses quoted above?",
              },
              {
                n: "3",
                prompt: "For each verse of the passage quoted above, quote a similar verse from the Quran.",
              },
            ],
          },
        ],
      },
      {
        id: "infitar-keepers",
        title: "Noble keepers (82:9–13)",
        icon: "6",
        sections: [
          {
            type: "heading",
            kicker: "Surat al-Infitar · 82:9–19",
            title: "You deny the Recompense",
          },
          {
            type: "passage",
            lead: "Allah ﷻ says:",
            verses: INFITAR_9_19,
            translation:
              "{No! But you deny the Recompense. And indeed, [appointed] over you are keepers, Noble and recording. They know whatever you do. Indeed, the righteous will be in pleasure, And indeed, the wicked will be in Hellfire. They will [enter to] burn therein on the Day of Recompense, And never therefrom will they be absent. And what can make you know what is the Day of Recompense? Then, what can make you know what is the Day of Recompense? It is the Day when a soul will not possess for another soul [power to do] a thing; and the command, that Day, is [entirely] with Allah}",
            ref: "[al-Infitar 82:9–19]",
          },
          {
            type: "verse",
            ayah: "{No! But you deny the Recompense}",
            paras: [
              "No, the matter is not as you say, O disbelievers, that you are following the truth when you worship anyone or anything other than Allah. In fact, you deny the Day of the reckoning and the requital.",
            ],
          },
          {
            type: "verse",
            ayah: "{And indeed, [appointed] over you are keepers}",
            paras: ["They are the angels who record your deeds."],
          },
          {
            type: "verse",
            ayah: "{Noble and recording}",
            paras: [
              "This refers to the angels who are honourable before Allah ﷻ, who write down the deeds that you do, compiling those deeds and listing them in your record.",
            ],
          },
          {
            type: "verse",
            ayah: "{They know whatever you do}",
            paras: ["So nothing of your deeds is hidden from them."],
          },
          {
            type: "verse",
            ayah: "{Indeed, the righteous will be in pleasure}",
            paras: [
              "The righteous are the ones who carry out the obligatory duties enjoined by Allah, and avoid disobeying Him. They will be in pleasure in this world, meaning that they will find pleasure in remembering Allah, and they will enjoy bliss in al-barzakh and enjoy bliss in the Hereafter, in Paradise.",
            ],
          },
        ],
      },
      {
        id: "infitar-hell",
        title: "The Day of Recompense (82:14–19)",
        icon: "7",
        sections: [
          {
            type: "heading",
            kicker: "Surat al-Infitar · 82:14–19",
            title: "The wicked will be in Hellfire",
          },
          {
            type: "verse",
            ayah: "{And indeed, the wicked will be in Hellfire}",
            paras: [
              "That is, those who commit evil will live in a kind of hell in this world, as their hearts will feel pain and anxiety due to being far away from Allah ﷻ. They will suffer torment in al-barzakh and in Hell in the Hereafter.",
            ],
          },
          {
            type: "verse",
            ayah: "{They will [enter to] burn therein on the Day of Recompense}",
            paras: [
              "These evildoers will enter Hell on the Day of Recompense, the Day of Judgement, and will burn therein.",
            ],
          },
          {
            type: "verse",
            ayah: "{And never therefrom will they be absent}",
            paras: [
              "These evildoers will never be absent from the torment of Hell once they enter it. They will never be absent from the Fire in any way whatsoever; they will not die and thus be free from torment, and they will not exit from it, or be given any respite from it.",
            ],
          },
          {
            type: "verse",
            ayah: "{And what can make you know what is the Day of Recompense?}",
            paras: [
              "What can make you understand how momentous the Day of Recompense will be?",
              "Then the question is repeated, in order to emphasize the momentous nature of the Day of Judgement and how serious the matter is, and how terrifying it will be.",
            ],
          },
          {
            type: "verse",
            ayah: "{It is the Day when a soul will not possess for another soul [power to do] a thing; and the command, that Day, is [entirely] with Allah}",
            paras: [
              "On the Day of Reckoning, no one will be able to benefit anyone else; rather the command will belong entirely to Allah Alone.",
            ],
          },
        ],
      },
      {
        id: "infitar-keepers-learn",
        title: "What we learn from 82:9–19",
        icon: "8",
        sections: [
          {
            type: "heading",
            kicker: "Surat al-Infitar · 82:9–19",
            title: "What we learn from the verses",
          },
          {
            type: "benefits",
            items: [
              {
                n: "1",
                tone: "sky",
                body: "Each person has angels who record everything that he says and everything that he does. These scribes are noble, and they are not of a mean or base character; rather they are possessed of integrity that prevents them from wronging anyone by recording something that he did not do, or failing to record something that he did do. That is because they are noble and possess integrity.",
              },
              {
                n: "2",
                tone: "rose",
                body: "Whoever is in a position of looking after any of the ummah’s affairs, whether they be rulers or others, must have these characteristics: a caring attitude, noble character, literacy, and knowledge of what he has been appointed in charge of.",
              },
              {
                n: "3",
                tone: "green",
                body: "All matters are under the control of Allah, on the Day of Resurrection and on all other days. The Day of Resurrection is mentioned specifically in these verses because the fact that all things are under His control will be more obvious on that Day than it is in this world. In this world, a person may go against the commands of Allah ﷻ, and some transgressors and tyrants may try to compete with Him in having control over matters. This is in contrast to the Day of Resurrection, for on that Day all matters will clearly be under the control of Allah Alone.",
              },
            ],
          },
        ],
      },
      {
        id: "infitar-keepers-activity",
        title: "Activity · The keepers and the Recompense",
        icon: "9",
        sections: [
          {
            type: "worksheet",
            title: "Activities",
            items: [
              {
                n: "1",
                prompt:
                  "List the terrifying events of the Day of Resurrection, from what you have read in the four previous soorahs (an-Nazi‘aat, Abasa, at-Takweer and al-Infitar), in the right sequence as much as possible.",
              },
              {
                n: "2",
                prompt:
                  "{A soul will [then] know what it has put forth and kept back}. Write a brief exhortation to a group of people, explaining this verse.",
              },
              {
                n: "3",
                prompt:
                  "{what has deceived you concerning your Lord, the Generous?}; {Noble and recording} – what do you conclude from these two verses?",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "mutaffifeen",
    title: "Surat al-Mutaffifeen",
    titleAr: "المطففين",
    lessons: [
      {
        id: "mutaffifeen-opening",
        title: "Surat al-Mutaffifeen (83:1–6)",
        icon: "1",
        sections: [
          {
            type: "heading",
            kicker: "In this unit we will study",
          },
          {
            type: "surahBanner",
            title: "Surat al-Mutaffifeen",
          },
          {
            type: "ribbon",
            tone: "rose",
            body: "Ibn Abbas رضي الله عنه said: Surat al-Mutaffifeen is Madinan (revealed after the Hijrah), except for eight verses: {The Day when mankind will stand before the Lord of the worlds} until the end of the surah; these verses are Makkan (revealed before the Hijrah).",
          },
          {
            type: "passage",
            lead: "Allah ﷻ says:",
            verses: MUTAFFIFEEN_1_6,
            translation:
              "{Woe to those who give less [than due], Who, when they take a measure from people, take in full. But if they give by measure or by weight to them, they give them less than their due. Do they not think that they will be resurrected For a tremendous Day – The Day when mankind will stand before the Lord of the worlds?}",
            ref: "[al-Mutaffifeen 83:1–6]",
          },
        ],
      },
      {
        id: "mutaffifeen-tatfeef",
        title: "Those who give less than due (83:1–3)",
        icon: "2",
        sections: [
          {
            type: "heading",
            kicker: "Surat al-Mutaffifeen · 83:1–3",
            title: "Short measure",
          },
          {
            type: "note",
            title: "The reason for revelation",
            body: "It was narrated that Ibn Abbas رضي الله عنه said: When the Prophet of Allah ﷺ came to Madinah, they were the worst of people with regard to weights and measures. So Allah revealed the words: {Woe to those who give less [than due]}. So they began to improve with regard to weights and measures after that. Narrated by Ibn Majah; classed as sahih by al-Albani.",
          },
          {
            type: "verse",
            ayah: "{Woe to those who give less [than due]}",
            paras: [
              "Giving less than is due means being unfair with regard to weights and measures, either asking for more than is due when taking from people, or by giving less than is due when giving to them. The word tatfeef (from which the title of this surah, al-Mutaffifeen, is derived) refers to giving less and giving short measure.",
            ],
          },
          {
            type: "ribbon",
            tone: "gold",
            body: "The scholars of the Arabic language said: The one who gives less and gives short measure is called a mutaffif (one who gives short measure) because he only steals a little when weighing and measuring.",
          },
          {
            type: "verse",
            paras: [
              "“Woe to them”: wayl (translated here as “woe”) is a word of warning. What is meant is praying against them, praying that they will suffer loss, be doomed and be severely punished in the Hereafter.",
              "It was also said that wayl is a valley in Hell which flows with the pus of the people of the Fire.",
            ],
          },
          {
            type: "verse",
            ayah: "{Who, when they take a measure from people, take in full}",
            paras: [
              "This is an explanation of what is meant by “those who give less [than due]” (mutaffifeen): when they take from people, they take their rights in full with regard to weighing and measuring.",
            ],
          },
          {
            type: "verse",
            ayah: "{But if they give by measure or by weight to them, they give them less than their due}",
            paras: ["That is, they deduct something when weighing and measuring for other people."],
          },
        ],
      },
      {
        id: "mutaffifeen-day",
        title: "A tremendous Day (83:4–6)",
        icon: "3",
        sections: [
          {
            type: "heading",
            kicker: "Surat al-Mutaffifeen · 83:4–6",
            title: "Will they not be resurrected?",
          },
          {
            type: "verse",
            ayah: "{Do they not think that they will be resurrected}",
            paras: [
              "Do these people not believe with certainty that they will be resurrected and made to stand before Allah on the Day of Resurrection?",
              "In other words, this is what gives them the audacity to give short measure. Otherwise, if they truly believed and knew that they would stand before Allah ﷻ, they would give up that evil practice and repent from it.",
            ],
          },
          {
            type: "verse",
            ayah: "{For a tremendous Day}",
            paras: [
              "That is, the Day of Resurrection, which will be very hard for the disbelievers. Allah ﷻ says: {For the disbelievers – not easy} [al-Muddaththir 74:10] and {The disbelievers will say, “This is a difficult Day”} [al-Qamar 54:8].",
              "But for the believers, by Allah’s grace, it will be as easy for the believer as doing an obligatory prayer.",
            ],
          },
          {
            type: "verse",
            ayah: "{The Day when mankind will stand before the Lord of the worlds}",
            paras: [
              "That is, they will rise from their graves on Allah’s command, for the reckoning and the requital. On that Day, all sovereignty will be diminished, except the sovereignty of the Lord of the Worlds ﷻ. Allah ﷻ says: {To whom belongs [all] sovereignty this Day? To Allah, the One, the Prevailing} [Ghafir 40:16].",
            ],
          },
          {
            type: "ribbon",
            tone: "gold",
            body: "Nafi said: Ibn Umar رضي الله عنه would pass by vendors, saying: Fear Allah, and give in full when weighing and measuring, for those who give short measure will be made to stand on the Day of Resurrection until their sweat will overwhelm them and come to half way up their ears.",
          },
          {
            type: "ribbon",
            tone: "teal",
            body: "Al-Bukhari and Muslim narrated from Ibn Umar رضي الله عنه that the Prophet ﷺ said: «{The Day when mankind will stand before the Lord of the worlds} that is, until one of them will be submerged in his sweat to halfway up his ears.»",
          },
        ],
      },
      {
        id: "mutaffifeen-learn",
        title: "What we learn from 83:1–6",
        icon: "4",
        sections: [
          {
            type: "heading",
            kicker: "Surat al-Mutaffifeen · 83:1–6",
            title: "What we learn from the verses",
          },
          {
            type: "benefits",
            items: [
              {
                n: "1",
                tone: "gold",
                body: "That if the warning is addressed to those who cheat people by giving short measure, then the one who takes people’s wealth by force or by stealth is more deserving of the warning than those who give short measure.",
              },
              {
                n: "2",
                tone: "sky",
                body: "Just as a person may take from people what is due to him, he must also give them everything that is due to them, of wealth, rights and so on.",
              },
            ],
          },
          {
            type: "ribbon",
            tone: "gold",
            body: "Those who give short measure combine two things: covetousness and stinginess. Covetousness means demanding their rights in full whilst accepting no excuse and showing no forbearance. Stinginess means withholding what is due from them and not giving it in full when weighing or measuring. This example that Allah ﷻ mentions with regard to weights and measures also applies to everyone who demands his rights in full with regard to what is owed to him, but withholds the rights of others with regard to what he owes.",
          },
          {
            type: "benefits",
            items: [
              {
                n: "3",
                tone: "rose",
                body: "In principle, thinking (zann) refers to when one is not certain about a thing, but in Arabic it may also refer to certainty. This occurs frequently in the Quran. Allah ﷻ says: {Who are certain [yazunnoona] that they will meet their Lord} [al-Baqarah 2:46]. And Allah ﷻ says: {Indeed, I was certain [zanantu] that I would be meeting my account} [al-Haqqah 69:20].",
              },
              {
                n: "4",
                tone: "purple",
                body: "It says in al-Khashshaf: This is a denunciation and an expression of astonishment (at their audacity). The word think (with certainty) and the description of the Day of Resurrection as tremendous, and of the standing of the people in full submission before Allah on that Day, and the description that Allah gives of Himself as Lord of the Worlds, all serve to highlight how great their sin is, and how great the sin of tatfeef (giving short measure) may be, and how serious is the sin of the one who gives short measure and does not conduct himself in a fair and proper manner.",
              },
            ],
          },
        ],
      },
      {
        id: "mutaffifeen-activity",
        title: "Activity · Short measure",
        icon: "5",
        sections: [
          {
            type: "worksheet",
            title: "Activities",
            items: [
              {
                n: "1",
                prompt:
                  "{Who, when they take a measure from people, take in full, But if they give by measure or by weight to them, they cause loss}. Talk about one of the types of commercial transactions that is equivalent to giving short measure nowadays.",
              },
              {
                n: "2",
                prompt:
                  "No matter how small sins are, they are still serious in the sight of Allah. Where do you find support for this idea in these verses?",
              },
            ],
          },
        ],
      },
      {
        id: "mutaffifeen-sijjeen",
        title: "The record in sijjeen (83:7–9)",
        icon: "6",
        sections: [
          {
            type: "heading",
            kicker: "Surat al-Mutaffifeen · 83:7–17",
            title: "The record of the wicked",
          },
          {
            type: "passage",
            lead: "Allah ﷻ says:",
            verses: MUTAFFIFEEN_7_17,
            translation:
              "{No! Indeed, the record of the wicked is in sijjeen. And what can make you know what is sijjeen? It is [their destination recorded in] a register inscribed. Woe, that Day, to the deniers, Who deny the Day of Recompense. And none deny it except every sinful transgressor. When Our verses are recited to him, he says, “Legends of the former peoples.” No! Rather, the stain has covered their hearts of that which they were earning. No! Indeed, from their Lord, that Day, they will be partitioned, Then indeed, they will [enter and] burn in Hellfire, Then it will be said [to them], “This is what you used to deny”}",
            ref: "[al-Mutaffifeen 83:7–17]",
          },
          {
            type: "verse",
            ayah: "{No! Indeed, the record of the wicked is in sijjeen}",
            paras: [
              "The word kallaa (translated here as “No!”) is by way of rebuke. In other words, the matter is not as these disbelievers think, that they will not be resurrected or punished. Rather, their book in which are recorded their deeds that they used to do is in sijjeen, which is the seventh and lowest earth, the abode of the evildoers, where they will settle when they are resurrected.",
              "{Sijjeen} is derived from the word sijn (prison).",
            ],
          },
          {
            type: "verse",
            ayah: "{And what can make you know what is sijjeen?}",
            paras: [
              "That is, What will tell you about it? This is a rhetorical question which serves to emphasize how serious the matter is, for that is not something that you or your people know; rather it is a very serious matter, an eternal prison and an everlasting punishment.",
            ],
          },
          {
            type: "ribbon",
            tone: "gold",
            body: "{It is [their destination recorded in] a register inscribed}. This is not an explanation of what {sijjeen} is. Rather, it is a description of the register or book mentioned. In other words, what is decreed for them and their ultimate fate in sijjeen is decreed and the matter is finished with; nothing will be added to it or subtracted from it.",
          },
        ],
      },
      {
        id: "mutaffifeen-deniers",
        title: "Woe to the deniers (83:10–13)",
        icon: "7",
        sections: [
          {
            type: "heading",
            kicker: "Surat al-Mutaffifeen · 83:10–13",
            title: "Every sinful transgressor",
          },
          {
            type: "verse",
            ayah: "{Woe, that Day, to the deniers}",
            paras: [
              "That is, doom and loss is theirs. That is when what Allah warned them about of detention and humiliating punishment befalls them on the Day of Resurrection.",
            ],
          },
          {
            type: "verse",
            ayah: "{Who deny the Day of Recompense}",
            paras: [
              "This is a description of the deniers; they are the ones who do not believe that the Day of Resurrection will happen and who think it unlikely.",
            ],
          },
          {
            type: "verse",
            ayah: "{And none deny it except every sinful transgressor}",
            paras: [
              "That is, every evildoer and miscreant who is immersed in sin and commits a great deal thereof.",
              "This is the one who transgresses in his actions because of his unlawful earnings.",
              "He is sinful in his words, so when he speaks he lies, when he makes a promise he breaks it, and when he disputes he resorts to foul speech.",
            ],
          },
          {
            type: "verse",
            ayah: "{When Our verses are recited to him, he says, “Legends of the former peoples”}",
            paras: [
              "That is, when the verses of Our Book are recited to him, he says: This is what was written by the former peoples, by way of mocking it and rejecting it.",
            ],
          },
          {
            type: "ribbon",
            tone: "rose",
            body: "The {legends of the former peoples} are fables and falsehoods that they wrote and presented in an attractive manner.",
          },
        ],
      },
      {
        id: "mutaffifeen-raan",
        title: "The stain on the heart (83:14–17)",
        icon: "8",
        sections: [
          {
            type: "heading",
            kicker: "Surat al-Mutaffifeen · 83:14–17",
            title: "Partitioned from their Lord",
          },
          {
            type: "verse",
            ayah: "{No! Rather, the stain has covered their hearts of that which they were earning}",
            paras: [
              "The word kallaa (translated here as “No!”) is by way of rebuke. In other words, this is not the legends of the former peoples.",
              "Rather, their hearts are overwhelmed with the sins that they were earning, so they became covered until they could no longer see the truth.",
            ],
          },
          {
            type: "ribbon",
            tone: "rose",
            body: "The root meaning of the word raan (translated here as “stain”) is overwhelming or covering. Hence it is said Raanat al-khamru ala aqlihi (the alcohol overwhelmed his reason), so he became drunk.",
          },
          {
            type: "ribbon",
            tone: "gold",
            body: "At-Tirmidhi narrated, and classed the report as sahih, from Abu Hurayrah رضي الله عنه that the Messenger of Allah ﷺ said: «When a person commits a sin, a black spot appears on his heart. If he gives it up, asks Allah for forgiveness and repents, his heart will be cleansed, but if he does it again, the black spot will grow until it covers his heart.» This is the raan (stain) that Allah mentions in His Book: {No! Rather, the stain [raan] has covered their hearts of that which they were earning}.",
          },
          {
            type: "verse",
            ayah: "{No! Indeed, from their Lord, that Day, they will be partitioned}",
            paras: [
              "The word kallaa (translated here as “No!”) is another rebuke for their denial of the Day of Judgement. Then Allah goes on to say: {Indeed, from their Lord, that Day, they will be partitioned}. This refers to the Day of Resurrection. They will be barred from seeing Allah ﷻ just as they were barred from seeing His law and His verses, so they thought that they were legends of the former peoples.",
            ],
          },
          {
            type: "verse",
            ayah: "{Then indeed, they will [enter and] burn in Hellfire}",
            paras: [
              "The word translated here as “burn” means they will be touched by the heat of the fire and be burned by it. In other words, then they will enter it and be burned by its heat, and punished with all kinds of torments in it.",
            ],
          },
          {
            type: "verse",
            ayah: "{Then it will be said [to them]}",
            paras: ["By way of rebuke and scolding."],
          },
          {
            type: "verse",
            ayah: "{“This is what you used to deny”}",
            paras: [
              "Thus this physical torment and pain will be combined for them with the psychological pain of being rebuked and made to regret.",
            ],
          },
        ],
      },
      {
        id: "mutaffifeen-sijjeen-learn",
        title: "What we learn from 83:7–17",
        icon: "9",
        sections: [
          {
            type: "heading",
            kicker: "Surat al-Mutaffifeen · 83:7–17",
            title: "What we learn from the verses",
          },
          {
            type: "benefits",
            items: [
              {
                n: "1",
                tone: "sky",
                body: "These verses warn against sin, for sin stains the heart and covers it little by little, until its light is extinguished and it loses its insight, whereupon it will see things other than they really are. Thus it will see falsehood as truth and truth as falsehood. This is one of the punishments and consequences of sins.",
              },
              {
                n: "2",
                tone: "rose",
                body: "Ahl as-Sunnah wa'l-Jama'ah quote as evidence to prove that the believers will see Allah ﷻ the words {No! Indeed, from their Lord, that Day, they will be partitioned}. The connection is clear: if these people are partitioned and screened when Allah is angry with them, then the righteous will be able to see Him because He is pleased with them. What is meant is: if the partitioning or screening were applicable to everyone, then there would be no point in saying that the evildoers in particular will be partitioned or screened.",
              },
            ],
          },
        ],
      },
      {
        id: "mutaffifeen-sijjeen-activity",
        title: "Activity · Sijjeen and the stain",
        icon: "10",
        sections: [
          {
            type: "worksheet",
            title: "Activities",
            items: [
              {
                n: "1",
                prompt: "Explain the meaning of the following words and phrases:",
                parts: [
                  { text: "a. sijjeen" },
                  { text: "b. inscribed" },
                  { text: "c. legends of the former peoples" },
                  { text: "d. stain (raan)" },
                  { text: "e. they will [enter and] burn in Hellfire" },
                ],
              },
              {
                n: "2",
                prompt:
                  "How does this verse – {No! Indeed, from their Lord, that Day, they will be partitioned} – prove that the people of Paradise will see Allah ﷻ?",
              },
              {
                n: "3",
                prompt:
                  "The partition or screen reflects a subtle connection between these two verses: {No! Rather, the stain has covered their hearts of that which they were earning} and {No! Indeed, from their Lord, that Day, they will be partitioned}. Try to explain this connection.",
              },
            ],
          },
        ],
      },
      {
        id: "mutaffifeen-illiyyeen",
        title: "The record in ‘illiyyeen (83:18–20)",
        icon: "11",
        sections: [
          {
            type: "heading",
            kicker: "Surat al-Mutaffifeen · 83:18–28",
            title: "The record of the righteous",
          },
          {
            type: "passage",
            lead: "Allah ﷻ says:",
            verses: MUTAFFIFEEN_18_28,
            translation:
              "{No! Indeed, the record of the righteous is in ‘illiyyeen. And what can make you know what is ‘illiyyun? It is [their destination recorded in] a register inscribed, Which is witnessed by those brought near [to Allah]. Indeed, the righteous will be in pleasure, On adorned couches, observing. You will recognize in their faces the radiance of pleasure. They will be given to drink [pure] wine [which was] sealed. The last of it is musk. So for this let the competitors compete. And its mixture is of Tasneem, A spring from which those near [to Allah] drink}",
            ref: "[al-Mutaffifeen 83:18–28]",
          },
          {
            type: "verse",
            ayah: "{No! Indeed, the record of the righteous is in ‘illiyyeen}",
            paras: [
              "Having mentioned that the book of the evildoers is in the lowest and narrowest of places, Allah ﷻ now mentions the book of the righteous, and that it is in the highest, broadest and most spacious part of Paradise.",
            ],
          },
          {
            type: "ribbon",
            tone: "rose",
            body: "The righteous (abrar, sing. barr) are those who obey Allah by doing what He enjoins and avoiding what He forbids. Their destination is Paradise, in the seventh heaven, in which the souls of the believers will be.",
          },
          {
            type: "verse",
            ayah: "{And what can make you know what is ‘illiyyun?}",
            paras: [
              "This is a rhetorical question by way of highlighting its importance and great significance. In other words: what can make you know what it is? For it is something of great significance; it is elevation upon elevation, sublimity upon sublimity.",
            ],
          },
          {
            type: "verse",
            ayah: "{It is [their destination recorded in] a register inscribed}",
            paras: [
              "This is a description of the book of the righteous, as the book of the evildoers was described above.",
            ],
          },
        ],
      },
      {
        id: "mutaffifeen-couches",
        title: "Adorned couches (83:21–25)",
        icon: "12",
        sections: [
          {
            type: "heading",
            kicker: "Surat al-Mutaffifeen · 83:21–25",
            title: "Radiance, and a sealed drink",
          },
          {
            type: "verse",
            ayah: "{Which is witnessed by those brought near [to Allah]}",
            paras: [
              "This refers to the angels; it was also said that it is witnessed by those from every heaven who are close to Allah, so they will be present and will see that register when it is taken up to illiyyun.",
            ],
          },
          {
            type: "verse",
            ayah: "{Indeed, the righteous will be in pleasure}",
            paras: [
              "That is, on the Day of Resurrection, they will be in eternal bliss, in the gardens in which are immense blessings. This includes both physical and spiritual pleasures.",
            ],
          },
          {
            type: "verse",
            ayah: "{On adorned couches, observing}",
            paras: [
              "That is, looking at what Allah has blessed them with of bliss that no one in this world could imagine. {And no soul knows what has been hidden for them of comfort for eyes as reward for what they used to do} [as-Sajdah 32:17].",
            ],
          },
          {
            type: "ribbon",
            tone: "rose",
            body: "Some of the scholars said: This looking even includes gazing upon the countenance of Allah ﷻ. They regarded this verse as being among the evidence which proves that the believers will see Allah ﷻ in Paradise.",
          },
          {
            type: "ribbon",
            tone: "gold",
            body: "Couches (araa'ik, sing. areekah) refers to an adorned couch that is surrounded by something like curtains. It is one of the finest types of couches.",
          },
          {
            type: "verse",
            ayah: "{You will recognize in their faces the radiance of pleasure}",
            paras: [
              "That is, if you look at their faces, you will recognize joy, delight, light and happiness, because of the immense blessing in which they will find themselves.",
            ],
          },
          {
            type: "verse",
            ayah: "{They will be given to drink}",
            paras: [
              "That is, Allah ﷻ will give them to drink at the hands of the servants whom He describes elsewhere in the Quran: {There will circulate among them young boys made eternal, With vessels, pitchers and a cup [of wine] from a flowing spring} [al-Waqi‘ah 56:17–18].",
            ],
          },
          {
            type: "verse",
            ayah: "{[pure] wine}",
            paras: [
              "That is, of a pure drink, which will cause no intoxication or harm to one’s reason, and will not cause any headache.",
            ],
          },
          {
            type: "ribbon",
            tone: "rose",
            body: "Raheeq (translated here as “[pure] wine”) is one of the names of wine; it refers to pure wine, the best and most mature thereof.",
          },
        ],
      },
      {
        id: "mutaffifeen-tasneem",
        title: "Tasneem (83:25–28)",
        icon: "13",
        sections: [
          {
            type: "heading",
            kicker: "Surat al-Mutaffifeen · 83:25–28",
            title: "For this let the competitors compete",
          },
          {
            type: "verse",
            ayah: "{[which was] sealed}",
            paras: [
              "That is, it was sealed and prevented from being touched by anyone until the righteous break the seal.",
            ],
          },
          {
            type: "verse",
            ayah: "{The last of it is musk}",
            paras: [
              "That is, the last of it is musk, with a delightful fragrance, unlike the wine of this world, the last of which has a bad smell.",
            ],
          },
          {
            type: "verse",
            ayah: "{So for this let the competitors compete}",
            paras: [
              "That is, for this reward and recompense let the competitors compete in a race that will make them out of breath. This is a metaphor for going at speed in a race.",
              "Competing in doing good is competing in obeying Allah ﷻ, in attaining that which is pleasing to Him, and in keeping away from that which displeases Allah ﷻ.",
            ],
          },
          {
            type: "verse",
            ayah: "{And its mixture is of Tasneem}",
            paras: [
              "That is, this pure wine that is described above is mixed with another drink, which is called tasneem; this is the noblest and best drink of the people of Paradise.",
            ],
          },
          {
            type: "verse",
            ayah: "{A spring from which those near [to Allah] drink}",
            paras: [
              "That is, a spring from which those who are close to Allah drink; it is pure and not mixed with anything.",
            ],
          },
        ],
      },
      {
        id: "mutaffifeen-illiyyeen-learn",
        title: "What we learn from 83:18–28",
        icon: "14",
        sections: [
          {
            type: "heading",
            kicker: "Surat al-Mutaffifeen · 83:18–28",
            title: "What we learn from the verses",
          },
          {
            type: "benefits",
            items: [
              {
                n: "1",
                tone: "rose",
                body: "Those who compete for some kind of worldly gain, no matter how great, splendid, sublime and important it is, are only competing for something insignificant and transient, which will soon end.",
              },
              {
                n: "2",
                tone: "amber",
                body: "Competing for the Hereafter lifts the spirits of all the competitors, whereas competing for worldly gain brings down all the competitors.",
              },
              {
                n: "3",
                tone: "teal",
                body: "Competing for the pleasure and bliss of the Hereafter will not lead to the ruin of one’s worldly affairs, as some may think. Rather Islam regards striving in the life of this world as being like tending a crop that one will reap in the Hereafter; and it regards populating the earth, taking care of worldly affairs and benefitting from the earth’s resources whilst adhering to righteousness and fearing Allah as being the role of the true believer.",
              },
            ],
          },
        ],
      },
      {
        id: "mutaffifeen-illiyyeen-activity",
        title: "Activity · ‘Illiyyeen and Tasneem",
        icon: "15",
        sections: [
          {
            type: "worksheet",
            title: "Activities",
            items: [
              {
                n: "1",
                prompt:
                  "In the verse {They will be given to drink [pure] wine [which was] sealed}, who is the one who will give them to drink? What is the evidence for what you say?",
              },
              {
                n: "2",
                prompt:
                  "Explain the contrast between the bliss of the righteous and the hell of the evildoers, from the verses of this surah.",
              },
              {
                n: "3",
                prompt: "Connect each word or phrase in list A with the word or phrase that matches it in list B:",
                table: {
                  columns: ["(A)", "(B)"],
                  rows: [
                    ["couches", "highest and broadest part of Paradise"],
                    ["illiyyun", "wine"],
                    ["raheeq", "the finest type of couches"],
                  ],
                },
              },
            ],
          },
        ],
      },
      {
        id: "mutaffifeen-laugh",
        title: "They used to laugh (83:29–32)",
        icon: "16",
        sections: [
          {
            type: "heading",
            kicker: "Surat al-Mutaffifeen · 83:29–36",
            title: "The evildoers mocked the believers",
          },
          {
            type: "passage",
            lead: "Allah ﷻ says:",
            verses: MUTAFFIFEEN_29_36,
            translation:
              "{Indeed, the evildoers used to laugh at those who believed. And when they passed by them, they would exchange derisive glances. And when they returned to their people, they would return jesting. And when they saw them, they would say, “Indeed, those are truly lost.” But they had not been sent as guardians over them. So Today those who believed are laughing at the disbelievers, On adorned couches, observing. Have the disbelievers [not] been rewarded [this Day] for what they used to do?}",
            ref: "[al-Mutaffifeen 83:29–36]",
          },
          {
            type: "verse",
            ayah: "{Indeed, the evildoers used to laugh at those who believed}",
            paras: [
              "Those who earned sin and disbelieved in Allah in this world used to laugh at those who affirmed the oneness of Allah ﷻ and believed in Him, mocking them.",
            ],
          },
          {
            type: "verse",
            ayah: "{And when they passed by them, they would exchange derisive glances}",
            paras: [
              "The word ghamz (translated here as “derisive glances”) means signalling with the eyelids and eyebrows. In other words, they would look at them in a mocking and criticizing manner, signalling to one another with their eyes.",
              "The root meaning of the word ghamz is shame.",
            ],
          },
          {
            type: "verse",
            ayah: "{And when they returned to their people, they would return jesting}",
            paras: [
              "That is, when these evildoers returned to their families from their gatherings, they would be filled with self-admiration, and joking about the believers, impugning them and mocking them.",
            ],
          },
          {
            type: "verse",
            ayah: "{And when they saw them, they would say, “Indeed, those are truly lost”}",
            paras: [
              "When the evildoers saw the believers, they would say: These people have gone astray from the path of truth.",
            ],
          },
        ],
      },
      {
        id: "mutaffifeen-today",
        title: "Today the believers are laughing (83:33–36)",
        icon: "17",
        sections: [
          {
            type: "heading",
            kicker: "Surat al-Mutaffifeen · 83:33–36",
            title: "Have they been rewarded?",
          },
          {
            type: "verse",
            ayah: "{But they had not been sent as guardians over them}",
            paras: [
              "That is, these disbelievers were not sent or appointed as guardians and keepers to watch over the actions of the believers. Rather they were enjoined to believe in Allah and to strive to obey Him.",
            ],
          },
          {
            type: "verse",
            ayah: "{So Today those who believed are laughing at the disbelievers}",
            paras: [
              "That is, on the Day of Resurrection. For on that Day, the believers will laugh at the disbelievers when they see them humiliated and defeated, when the punishment comes upon them, as the disbelievers used to laugh at the believers in this world.",
            ],
          },
          {
            type: "verse",
            ayah: "{On adorned couches, observing}",
            paras: [
              "That is, on couches made of pearls and rubies, {observing} the disbelievers as they are being punished in the Fire, as a requital for their having laughed at the believers in this world.",
            ],
          },
          {
            type: "verse",
            ayah: "{Have the disbelievers [not] been rewarded [this Day] for what they used to do?}",
            paras: [
              "This is a question that serves to affirm. In other words, have the disbelievers been requited for how they used to treat the believers by mocking and belittling them, or not?",
              "The answer is: Yes, they have indeed been requited in full, by the justice and wisdom of Allah.",
            ],
          },
          {
            type: "verse",
            ayah: "{been rewarded}",
            paras: [
              "The word thuwwiba (translated here as “been rewarded”) refers to what comes back to a person because of his actions (thawwab); it may refer to both good and bad.",
            ],
          },
        ],
      },
      {
        id: "mutaffifeen-laugh-learn",
        title: "What we learn from 83:29–36",
        icon: "18",
        sections: [
          {
            type: "heading",
            kicker: "Surat al-Mutaffifeen · 83:29–36",
            title: "What we learn from the verses",
          },
          {
            type: "benefits",
            items: [
              {
                n: "1",
                tone: "teal",
                body: "These people who mocked the believers have successors in our own time. There are those who regard good people as backward and righteous people as extreme and overly strict.",
              },
            ],
          },
          {
            type: "ribbon",
            tone: "rose",
            body: "The heirs of the messengers, namely the scholars and the religiously committed, will suffer at the hands of the enemies of the messengers that which the messengers also suffered of name-calling and mockery. One example of this is when the innovators accuse the Salafis of anthropomorphism and likening Allah to His creation, and so on.",
          },
          {
            type: "benefits",
            items: [
              {
                n: "2",
                tone: "gold",
                body: "The judgement of Allah ﷻ is based on either justice or grace and mercy. With regard to those who believe, His judgement and requital are based on grace; with regard to the disbelievers, His judgement and requital are based on justice.",
              },
            ],
          },
        ],
      },
      {
        id: "mutaffifeen-laugh-activity",
        title: "Activity · The mockers",
        icon: "19",
        sections: [
          {
            type: "worksheet",
            title: "Activities",
            items: [
              {
                n: "1",
                prompt: "These verses indicate that the requital matches the deed. Quote other verses which also prove that.",
              },
              {
                n: "2",
                prompt:
                  "Allah describes those who mock the believers as {the evildoers}. Does this type of mocker exist in our own time? Give three examples of that.",
              },
              {
                n: "3",
                prompt:
                  "{Have the disbelievers [not] been rewarded [this Day] for what they used to do?} Answer this question.",
              },
            ],
          },
          {
            type: "note",
            body: "And Allah is the source of strength.",
          },
        ],
      },
    ],
  },
  {
    id: "practice",
    title: "Practice",
    lessons: [
      { id: "flashcards", title: "Flashcards", icon: "🃏", kind: "tool", badge: "101" },
      { id: "quiz", title: "Knowledge Quiz", icon: "✏️", kind: "tool", badge: "91" },
    ],
  },
];

export const TAFSIR2_LESSONS = TAFSIR2_UNITS.flatMap((unit) =>
  unit.lessons.map((lesson) => ({
    ...lesson,
    unitId: unit.id,
    unitTitle: unit.title,
    unitTitleAr: unit.titleAr,
  })),
);

export const TAFSIR2_STUDY_UNITS = TAFSIR2_UNITS.filter((unit) => unit.id !== "practice");
export const TAFSIR2_STUDY_LESSONS = TAFSIR2_LESSONS.filter((lesson) => lesson.kind !== "tool");

export const TAFSIR2_TOPICS = [
  { id: "all", label: "All topics" },
  { id: "news", label: "The great news (78:1–5)" },
  { id: "signs", label: "Signs in creation (78:6–16)" },
  { id: "judgement", label: "The Day of Judgement (78:17–30)" },
  { id: "righteous", label: "The righteous (78:31–36)" },
  { id: "true-day", label: "The True Day (78:37–40)" },
  { id: "naziat", label: "Surat an-Nazi‘aat (79:1–46)" },
  { id: "abasa", label: "Surat Abasa (80:1–42)" },
  { id: "takweer", label: "Surat at-Takweer (81:1–29)" },
  { id: "infitar", label: "Surat al-Infitar (82:1–19)" },
  { id: "mutaffifeen", label: "Surat al-Mutaffifeen (83:1–36)" },
];

export const TAFSIR2_FLASHCARDS = [
  {
    t: "news",
    q: "Where was Surat an-Naba revealed, and who reported that?",
    a: "It is a Makkan surah (revealed before the Hijrah). Ibn az-Zubayr رضي الله عنه said that {About what are they asking one another} [78:1] was revealed in Makkah.",
  },
  {
    t: "news",
    q: "Why does the surah open with {About what are they asking one another?}?",
    a: "Allah begins with this question by way of denouncing the polytheists for asking one another about the Day of Resurrection.",
  },
  {
    t: "news",
    q: "What is “the great news” they are in disagreement about?",
    a: "The Day of Resurrection. They disputed over it for so long: some believing, others disbelieving, denying it and thinking it unlikely to ever happen.",
  },
  {
    t: "news",
    q: "What other view was given for “the great news”?",
    a: "It was said that the great news is the Quran, because it tells of Tawhid, speaks of the truthfulness of the Messenger, and confirms that the Resurrection will come to pass.",
  },
  {
    t: "news",
    q: "What does naba mean, according to Ar-Raghib?",
    a: "News of great significance, on the basis of which one learns about that which is or is most likely to be true. News is not called naba unless it is of that nature.",
  },
  {
    t: "news",
    q: "What does kallaa do in {No! They are going to know}?",
    a: "It is a word of rebuke and warning, which usually nullifies the words before it. Their questioning implies denial — of something that will inevitably happen.",
  },
  {
    t: "news",
    q: "When will they come to know?",
    a: "When the punishment they used to deny befalls them, when they are dragged to the fire of Hell, and it is said to them: {This is the Fire which you used to deny} [at-Tur 52:14].",
  },
  {
    t: "news",
    q: "Why is the warning repeated: {Then, no! They are going to know}?",
    a: "To emphasize the warning and highlight its seriousness. It is a warning followed by another warning.",
  },
  {
    t: "news",
    q: "What does the definite article in an-naba indicate?",
    a: "That it is a generic noun and includes all great news the Messenger ﷺ spoke — first, that the Quran is the word of Allah; also that the Quran declares shirk false and affirms the Resurrection.",
  },
  {
    t: "news",
    q: "What two pieces of news most led the disbelievers to reject, be stubborn, and be arrogant?",
    a: "That their idols were false gods and not worthy of worship, and that their bodies would be created anew.",
  },
  {
    t: "signs",
    q: "What does mihad mean in {the earth a resting place}?",
    a: "Something spread out: smooth and prepared for your wellbeing, not too solid and not too soft. Like {who made for you the earth a bed} [al-Baqarah 2:22].",
  },
  {
    t: "signs",
    q: "How are the mountains “pegs”?",
    a: "They hold the earth steady so it will not shift. Geologists say the mountains have roots that go deep into the earth, like a peg driven into a wall or the ground.",
  },
  {
    t: "signs",
    q: "What is meant by {We created you in pairs}?",
    a: "Types — males and females of each type, so each finds comfort in the other. It was said this includes every pairing: ugly and beautiful, tall and short, white and black. See adh-Dhariyat 51:49.",
  },
  {
    t: "signs",
    q: "What do subat and sabt mean?",
    a: "Az-Zajjaj: subat means to stop moving whilst the soul is still in the body. Sabt, its root, means cessation — to cease toiling so one may stop working and rest.",
  },
  {
    t: "signs",
    q: "How is the night “clothing”, and the day “for livelihood”?",
    a: "The night’s darkness covers the people; it is the time to become still and rest (Qatadah and Saeed ibn Jubayr). The day is light and bright so people may go about their business.",
  },
  {
    t: "signs",
    q: "What are the seven strong heavens and the burning lamp?",
    a: "Seven soundly and precisely constructed heavens, firmly built. The lamp is the sun: bright for the whole world, and burning with intense heat even from far away.",
  },
  {
    t: "signs",
    q: "What did the Prophet ﷺ say about extreme heat, and about the Fire’s two exhalations?",
    a: "When it is extremely hot, wait to pray until it cools a little, for extreme heat is an exhalation from Hell (al-Bukhari and Muslim). The Fire was allowed to exhale twice: once in winter and once in summer — extreme cold and extreme heat (as-Sahihayn).",
  },
  {
    t: "signs",
    q: "What is al-mu‘sirat, thajj, grain, vegetation, and alfaf?",
    a: "Al-mu‘sirat is most likely the clouds, “wrung out” so their water pours (Ibn Uthaymeen); other views: the wind, or the heavens. Thajj is pouring in torrents. Grain is what humans eat (wheat, barley, corn, rice). Vegetation is what animals eat (grass and plants). Alfaf is gardens of entwined growth, so thick they conceal whoever is in them.",
  },
  {
    t: "signs",
    q: "How do verses 6–16 connect to the disbelievers’ denial of the resurrection?",
    a: "Allah proves the gathering is true by natural phenomena, showing He has power to do all things and knows all things. Once those two facts are established, the resurrection is proven.",
  },
  {
    t: "signs",
    q: "Why does the proof of the resurrection begin with the earth?",
    a: "Resurrection means bringing people forth from the earth to be gathered, so the earth is the first thing that comes to mind.",
  },
  {
    t: "signs",
    q: "Why mention sleep among the proofs, and why nukhrij rather than nunbit?",
    a: "Sleep and waking are among the clearest evidence for the resurrection. Nukhrij (“we bring forth”) is used instead of nunbit (“We cause to grow”) because the context is affirming the resurrection.",
  },
  {
    t: "signs",
    q: "Why are grain, vegetation, and gardens mentioned in that order?",
    a: "Grain is the staple food of people. Vegetation comes second: food for people, and the basic food of animals. Gardens, from which fruits come, are what people use least in their regular diet.",
  },
  {
    t: "judgement",
    q: "What is the Day of Judgement, and what happens when the Horn is blown?",
    a: "It is a defined day when this world ends and Allah judges all people. The Horn (Trumpet) is blown twice: first people are terrified, swoon, and die; the second time they are resurrected and their souls are returned. They come in multitudes for the reckoning.",
  },
  {
    t: "judgement",
    q: "What happens to the heaven and the mountains on that Day?",
    a: "The heaven is opened and becomes gateways — routes for the angels to descend. The mountains are removed and become a mirage: they seem to be something, but they will be nothing.",
  },
  {
    t: "judgement",
    q: "What do mirsad, ahqaab, and the drink of Hell mean?",
    a: "Mirsad: Hell is prepared and lying in wait (Al-Azhari: an ambush). It is the final abode of the transgressors for many ages (ahqaab, sing. huqub). They taste no coolness or drink except scalding water and purulence — or, it was said, zamharir, extreme cold that burns.",
  },
  {
    t: "judgement",
    q: "What did Muqatil and as-Sa‘di say about the punishment?",
    a: "Muqatil: the punishment matches the sin; no sin is greater than shirk, and no punishment is worse than the Fire. As-Sa‘di: {never will We increase you except in torment} is the most stringent verse on how hard the punishment of the people of the Fire will be.",
  },
  {
    t: "judgement",
    q: "What does kaanat show, and who is Hell prepared for?",
    a: "Kaanat (“has been”) shows the Fire is already created and exists now. It is only for transgressors. Those who err have means of expiation — prayer, fasting Ramadan, seeking forgiveness, righteous deeds — so no one enters except those who transgress against themselves.",
  },
  {
    t: "judgement",
    q: "What two things are the basis of the disbelievers’ punishment, and where are all deeds written?",
    a: "They were not expecting an account, and they denied Allah’s verses with emphatic denial (kidhdhaaba, a Yemeni usage according to Al-Farra). Disbelief in the Resurrection is mentioned first because it is the foundation. All things, small or great, are written in al-Lawh al-Mahfuz.",
  },
  {
    t: "righteous",
    q: "Who attains salvation in {for the righteous is attainment}?",
    a: "Those who feared the wrath of their Lord, constantly obeyed Him, and refrained from what He dislikes. They attain salvation and are far removed from the Fire.",
  },
  {
    t: "righteous",
    q: "Why are grapevines mentioned with the gardens, and what do kawa‘ib and atrab mean?",
    a: "Gardens of palm trees and other plants; grapevines are singled out for their great value and abundance. Kawa‘ib describes the wives of Paradise: young and healthy. Atrab means of the same or similar age. The root of atrab is either turab (dust) or equality between two things.",
  },
  {
    t: "righteous",
    q: "What will the people of Paradise not hear, and how is the gift described?",
    a: "No idle talk and no sin or lies; they will not belie one another. It is the abode of peace. The cup is full to the brim and clear. The reward is a sufficient, abundant, comprehensive gift, given by Allah’s grace. A‘taani fa ahsabani means he sufficed me.",
  },
  {
    t: "righteous",
    q: "What should our gatherings be like, and why does the verse say “your Lord”?",
    a: "Gatherings should be free of idle talk and lies, like the gatherings of Paradise. “Your Lord” uses a pronoun referring to the Prophet ﷺ: Paradise is attained only by following him, believing in him, and acting on what he brought.",
  },
  {
    t: "true-day",
    q: "Who gives the gifts of Paradise, and who may begin to speak before Him?",
    a: "Their Lord, the Most Merciful, Whose mercy encompasses all things. No one can start speaking to Him except with His permission.",
  },
  {
    t: "true-day",
    q: "Who is the Spirit, and how do the angels stand?",
    a: "The Spirit is Jibreel, or it was said the souls of the sons of Adam, or some of Allah’s creation. The angels stand row after row, humbling themselves before Allah.",
  },
  {
    t: "true-day",
    q: "What two conditions must be met before anyone speaks, and what is “what is correct”?",
    a: "Allah gives permission to speak, and what is said is true. Commentators said “what is correct” refers to Laa ilaaha illa Allah. In as-Sahihayn: no one will speak that Day except the Messengers. Compare Hud 11:105.",
  },
  {
    t: "true-day",
    q: "Why is the punishment called near, and how does a person take a way of return?",
    a: "The Resurrection is certain, and whatever is inevitable is near. A way of return is to believe in that Day, prepare for it, and do deeds that save from its terrors, by adhering to the Book of Allah and the Sunnah of His Messenger ﷺ.",
  },
  {
    t: "true-day",
    q: "Why will the disbeliever wish he were dust?",
    a: "Abu Hurayrah رضي الله عنه said all creatures will be gathered, and justice will be so exact that the hornless sheep settles its score with the horned one. Then Allah will say “Be dust!” That is when the disbeliever says: {Oh, I wish that I were dust!}.",
  },
  {
    t: "naziat",
    q: "Where was Surat an-Nazi‘aat revealed, and by whom does Allah swear in the opening?",
    a: "It is a Makkan surah, revealed before the Hijrah. Allah swears by angels: those who extract souls with violence, those who remove them with ease, those who glide, those who race, and those who arrange each matter.",
  },
  {
    t: "naziat",
    q: "How are the souls of disbelievers and believers taken, and why?",
    a: "Disbelievers are called with the harshest words — “Come out, O evil soul… to the wrath of Allah” — so the soul resists and is dragged out until it almost tears the body. Believers are given glad tidings — “Come out, O good soul… to the pleasure of Allah” — and the soul leaves smoothly, like undoing a slipknot.",
  },
  {
    t: "naziat",
    q: "Why does the surah open by swearing by these angels?",
    a: "Its main topic refutes those who denied being returned even as decayed bones. Swearing by the angels who take souls reminds the polytheists that death will surely come, and that they will inevitably die.",
  },
  {
    t: "naziat",
    q: "Who glides, races, and arranges the affair?",
    a: "Angels who glide when descending from heaven and ascending to it; angels who race to convey revelation to the messengers before the devils eavesdrop; and angels who arrange each matter as Allah commands, in the running of the universe.",
  },
  {
    t: "naziat",
    q: "Name the trusts of Jibreel, Israfeel, Mikaeel, the Angel of Death, and Malik. Why not “Azraeel”?",
    a: "Jibreel: revelation. Israfeel: the Horn, blown twice. Mikaeel: rain and vegetation. The Angel of Death: taking souls. Malik: Hell. There is no evidence in the Quran or the Sunnah for calling the Angel of Death Azraeel. Recording angels sit on the right and left, and others protect the sons of Adam. Each does what Allah has enjoined.",
  },
  {
    t: "naziat",
    q: "May a person swear by these angels, and what is the oath’s unspoken point?",
    a: "No. Only Allah may be sworn by. The Prophet ﷺ said swearing by anything other than Allah is shirk. The thing sworn to is unstated: you will surely be resurrected and brought to account.",
  },
  {
    t: "naziat",
    q: "What are the two reports about ar-raajifah and ar-raadifah?",
    a: "It was narrated that the blast convulses the earth — like {On the Day the earth and the mountains will convulse…} [al-Muzzammil 73:14] — and that the subsequent one is the sky, which splits so the stars and planets are scattered. It was also said that ar-raajifah is the first blast of the trumpet, after which all in heaven and on earth swoon except those whom Allah wills, and ar-raadifah is the second Trumpet blast, when they come round and are gathered. Rajf means turmoil and shaking.",
  },
  {
    t: "naziat",
    q: "Whose hearts tremble, and what do “be returned” and karrah mean?",
    a: "The hearts of the disbelievers tremble with intense fear, and their gaze is lowered out of humiliation. “Be returned” means being brought back to where one was. Karrah is coming back after having gone — they call that return a return of loss and doom. Allah answers that the Resurrection is far-fetched with {Indeed, it will be but one shout}: one blast of the Trumpet.",
  },
  {
    t: "naziat",
    q: "What is saahirah, and why is the gathering land called that?",
    a: "Flat, white land with no vegetation, which Allah will prepare for the people to be gathered for the reckoning. It is called saahirah because they will not be able to sleep — the root sahr also means staying up at night — from the fear and panic of that Day. The Trumpet is blown once, and the disbelievers find themselves alive on the face of the earth, after having been buried, to face the reckoning and the punishment.",
  },
  {
    t: "naziat",
    q: "Why is the story of Musa told here, and what is Tuwa?",
    a: "It consoles the Prophet ﷺ. Tuwa is the name of the blessed, sacred valley where Allah called Musa عليه السلام. It was sacred because Allah sent revelation to him there. Allah said: Go to Pharaoh and call him to Allah, for he has transgressed.",
  },
  {
    t: "naziat",
    q: "What do tughyaan and “purify yourself” mean?",
    a: "Tughyaan is going to extremes in sin and overstepping the mark. The same root is in {when the water overflowed [tughyan]} [al-Haqqah 69:11], and in taghut. “Purify yourself” means to be purified from faults, shortcomings and sins by saying Laa ilaaha illa Allah.",
  },
  {
    t: "naziat",
    q: "What is khashyah, and what was the greatest sign?",
    a: "Khashyah is fear based on knowledge. Fear without knowledge is khawf mujarrad (pure fear). Guidance comes before fear, because fear of Allah follows knowing Him: {Only those fear Allah, from among His servants, who have knowledge} [Fatir 35:28]. The greatest sign was Musa’s hand, white to the onlookers, and his staff, which clearly turned into a snake.",
  },
  {
    t: "naziat",
    q: "What did Pharaoh do after the sign, and why is the Hereafter mentioned first?",
    a: "He denied and disobeyed, turned his back striving against Tawhid, gathered his courtiers, troops and people, and called out, “I am your most exalted lord.” Allah seized him in this world and the Hereafter as a lesson. The Hereafter is mentioned first because it is more severe and more lasting. The story warns Quraysh, consoles the believers, and teaches that da‘wah is gentle even with tyrants.",
  },
  {
    t: "naziat",
    q: "What does “Are you a more difficult creation or is the heaven?” mean, and what is samk?",
    a: "Is recreating you after death more difficult than creating the heaven? The One Who created the heaven can re-create you. Allah constructed it: He raised it like a structure or firmament. Samk, translated “ceiling,” means raising something in an open space, connected to the earth or not. Joining rafa‘a (He raised) to samk emphasizes the raising, so the heaven is vastly raised. He proportioned it with no imperfections, cracks or gaps.",
  },
  {
    t: "naziat",
    q: "What is meant by the night, the brightness, the spreading of the earth, and mataa?",
    a: "He darkened the night by making the sun set, and extracted the day’s brightness. Day is called duha (lit. forenoon) because it is the best time of the day. After creating the heavens He spread the earth: smoothing out and levelling it. He brought forth springs, grass and vegetation, and fixed the mountains firmly. Mataa is provision one benefits from for a while, with a defined time limit.",
  },
  {
    t: "naziat",
    q: "How is there no contradiction between Fussilat and an-Nazi‘aat about the earth and the heaven?",
    a: "Fussilat 41:9–11 says the heaven was created after the earth. An-Nazi‘aat says the heaven was constructed, and after that the earth was spread. The earth itself was created first, then the heaven was created, then the earth was spread out and levelled.",
  },
  {
    t: "naziat",
    q: "What is at-Taammah, and what will man remember on that Day?",
    a: "at-Taammah, the Overwhelming Calamity, is a name of the Day of Resurrection. It is from tatimm, and from tamma al-maa, water when it covers things. It describes the extreme hardship and horror of that Day, and such words are used only for the most terrifying incidents. “Greatest” emphasizes how terrible it will be. On that Day man will remember what he did of good and evil, and Hell will be brought forth so people see it with their own eyes.",
  },
  {
    t: "naziat",
    q: "Who takes the Fire as a refuge, and who takes Paradise? What is hawa?",
    a: "The one who over-stepped the mark in misguidance and evildoing, and preferred this world over his religion and his Hereafter, has the Fire as his ultimate destination. Refuge is the place to which one returns and settles. The one who dreaded standing before Allah, and so forbade himself whims, desires and pleasures, has Paradise. Hawa is inclination towards desires. It throws a person down (yahwi) into trouble here, and in the Hereafter it leads him to al-hawiyah, the pit of Hell.",
  },
  {
    t: "naziat",
    q: "Why is Hell exposed for all who see, and why are fear and restraining the soul mentioned together?",
    a: "Believers and disbelievers will both see it. The believer appreciates the blessing bestowed on him. The disbeliever fears it before he is admitted to it. Fear of standing before Allah is the strongest protection against the pull of desires, so the Quran mentions that fear and forbidding the soul from unlawful inclination together in one verse.",
  },
  {
    t: "naziat",
    q: "What does mursaahaa mean, and who knows when the Hour will begin?",
    a: "Mursaahaa, “its arrival,” comes from arsa: a ship dropping anchor off the coast. No one knows when the Resurrection will happen until it actually happens, just as no one knows when a ship will arrive until it drops anchor. The Prophet ﷺ has no knowledge of it at all. In the hadith of Jibreel in as-Sahihayn he said: «The one who is asked about it does not know more than the one who is asking.» If Jibreel and the Prophet did not know, still less does anyone with less knowledge. {To your Lord is its finality}: knowledge of it belongs only to Allah.",
  },
  {
    t: "naziat",
    q: "What was the Prophet sent to do about the Hour, and what did he tell the man who asked when it would be?",
    a: "He was sent only to warn those who fear it, not to tell people when it will happen. Al-Bukhari and Muslim narrated that a man asked when the Hour would be. The Prophet ﷺ said: «What have you prepared for it?» The man said: Love of Allah and His Messenger ﷺ. He said: «You will be with those whom you love.»",
  },
  {
    t: "naziat",
    q: "How long will this life seem when they see the Hour, and what do afternoon and morning mean?",
    a: "When they rise from their graves for the gathering, this life will seem, in their view, no more than an afternoon or a morning of a single day. Afternoon is the time between noon and the setting of the sun. Morning is the time between sunrise and midday.",
  },
  {
    t: "naziat",
    q: "Why has Allah withheld knowledge of when the Resurrection will come, and who benefits from the warning?",
    a: "So that people will strive hard in good deeds, fearing the Day may come at any moment. {You are only a warner for those who fear it} does not mean the Prophet ﷺ did not warn those who did not fear. Those who benefit from the warning are only those who fear Allah. Those who do not fear Him will not benefit from this warning, or from other signs, in most cases.",
  },
  {
    t: "naziat",
    q: "What do these verses teach about this world?",
    a: "It is no more than an afternoon or the morning thereof: short, temporary and transient, and it will end in a very short time. It is not appropriate, for one who has reason, to neglect the Hereafter for a mere afternoon or morning, or to lose Paradise for a transient desire.",
  },
  {
    t: "abasa",
    q: "Where was Surat Abasa revealed, and concerning whom?",
    a: "It is Makkan, revealed before the Hijrah. Aisha رضي الله عنها said it was revealed concerning Ibn Umm Maktum, the blind man رضي الله عنه, the great Sahabi Abdullah ibn Umm Maktum. He came saying “O Messenger of Allah, guide me,” while a prominent polytheist was with the Prophet ﷺ, who kept turning towards that man and asking «Do you see anything wrong with what I am telling you?» Narrated by at-Tirmidhi; classed as sahih by al-Albani.",
  },
  {
    t: "abasa",
    q: "Why does the surah speak of the Prophet in the third person, and why “the blind man”?",
    a: "Allah did not address the rebuke directly to His Prophet and His Beloved ﷺ, out of compassion, mercy, and honour. “The blind man,” rather than his name, softens the Prophet’s heart towards him, and shows he had an excuse for interrupting: he was blind. Allah then shifts to the second person, to show He is now speaking directly to him.",
  },
  {
    t: "abasa",
    q: "Who receives the Prophet’s attention in these verses, and who is ignored?",
    a: "He gives attention to the one who thinks himself without need and turns away from the message. There is no blame if such polytheists are not purified, because he is only required to convey the message. The one who came striving, eager to learn, and fearing lest he fall short, is the one from whom he is distracted.",
  },
  {
    t: "abasa",
    q: "What principles do the scholars draw from 80:1–10?",
    a: "Do not leave what is certain for what is uncertain, or a sure benefit for an unsure one: do not turn from someone already Muslim for someone who may never enter the faith. Still call those who are not interested; do not turn away from those who are. Leaving this rebuke in the Quran is a proof of prophethood. Callers must not prefer the high-ranking, the prominent, or relatives. The opening uses three third-person phrases, because this is a rebuke.",
  },
  {
    t: "abasa",
    q: "What does {No!} at the start of 80:11 mean, and what are the honored sheets?",
    a: "The matter should not have been as the Prophet ﷺ did when he frowned at the one striving for knowledge and turned to the one who thought himself without need. The surah is an exhortation and a reminder. Whoever among the slaves of Allah wants to remember Him will remember Him. It is recorded in respected, venerated pages: exalted, purified, and free of addition or subtraction. Those sheets are al-Lawh al-Mahfuz.",
  },
  {
    t: "abasa",
    q: "Who are the safarah, and what did the Prophet ﷺ say about reciting the Quran?",
    a: "They are the recording angels, the emissaries between Allah and His creation. Safarah is either from sifr, a book, because they write, or the plural of safeer, an emissary, because they are intermediaries between Allah and His creation. They are noble and dutiful: righteous, pure and perfect. Al-Bukhari and Muslim narrated that Aisha رضي الله عنها said the Prophet ﷺ said: «The one who recites the Quran skillfully will be with the noble, dutiful emissaries, and the one who recites it and finds it difficult will have a twofold reward.»",
  },
  {
    t: "abasa",
    q: "How does the surah rebuke man’s disbelief, and how did his creation begin?",
    a: "Man is cursed for disbelieving the One Who created him and perfected him, despite Allah’s blessings. {From what substance did He create him?} rebukes arrogance. He began as a sperm-drop (nutfah), then a clinging clot (alaqah), then a chewed lump of flesh (mudghah). Al-Bukhari and Muslim narrated that Ibn Mas‘ud رضي الله عنه said each of those stages lasts forty days.",
  },
  {
    t: "abasa",
    q: "What do 80:20–23 teach about guidance, burial, and the Resurrection?",
    a: "After man emerges from the womb, Allah makes the path of good and evil clear, as in {Indeed, We guided him to the way, be he grateful or be he ungrateful} [al-Insan 76:3]. He then causes death and provides a grave: Muslims must bury their dead, and may not cremate them, leave them for wild animals, or throw them into the sea, unless burial is not possible. Resurrection waits upon Allah’s will and decree. Kallaa (“No!”) rebukes the claim that man has fulfilled his duty: he has not yet accomplished the obligatory duties Allah enjoined.",
  },
  {
    t: "abasa",
    q: "Why does Allah tell man to look at his food, and how does that food begin?",
    a: "So that by reflecting on its origin, how it reaches him, and how he eats it, he may come to know Allah and worship Him as He should be worshipped. Allah begins by sending rain down in abundance, then splits the earth with the vegetation that emerges, then causes grain to grow, such as wheat and barley.",
  },
  {
    t: "abasa",
    q: "What do qadb, the palm tree, and a garden of dense shrubbery mean?",
    a: "Qadb, translated “herbage,” is fodder given to animals while it is still fresh, which they chew (tuqdab) to break it down. Allah mentions the palm tree, not only its fruit, because of its many benefits: dates for food, date stones for camels, wood and leaves for houses, roofs and vessels, and fibers for ropes. A garden is enclosed by a wall. A garden of dense shrubbery is thickly growing shrubs or tall trees.",
  },
  {
    t: "abasa",
    q: "What is fakihah, what is the “grass,” and why is this life called mataa?",
    a: "Fakihah are crops eaten for pleasure (tafakkuḥ), not for basic sustenance, such as dates, grapes, pomegranates and almonds. The “grass” is plants that animals eat. These grow as enjoyment for people and for their livestock. Mataa, “enjoyment,” soon fades and disappears. The pleasures of Paradise are called naeem, because they will never end.",
  },
  {
    t: "abasa",
    q: "What is as-saakhkhah, and why will a man flee from his relatives?",
    a: "It is the blast of the Trumpet on the Day of Resurrection. The word comes from saakha, to listen, and it was said that it deafens (tasukhkh), because its sound almost deafens people. It is also a name of that Day. A man will flee from his brother, his parents and grandparents, his wife and his children, fearing they will ask him to settle unfulfilled rights and acts of injustice. Qatadah said nothing will be harder than seeing someone he knows and fearing that claim. Each person will be preoccupied with a matter that keeps him from anyone else.",
  },
  {
    t: "abasa",
    q: "How does the surah describe the faces of that Day?",
    a: "Some faces will be bright, shining like the dawn, laughing and rejoicing at the delights and honour Allah has given them: the people of Paradise. Other faces will have dust upon them, covered with blackness and humiliation: the people of Hell, the disbelievers and the wicked, who disbelieved in Allah’s signs and transgressed. Al-Bukhari and Muslim narrated that the gathering will be barefoot, naked and uncircumcised, and the matter will be too overwhelming for anyone to worry about looking at one another.",
  },
  {
    t: "abasa",
    q: "Why does the surah name each relative, and why is the wife called sahibah?",
    a: "Naming them one by one is more alarming than saying only “his relatives,” because the reader can imagine the scene. Sahibah means companion: not every wife is truly a companion. Even a wife who stands with her husband in hardship will flee, and he will flee from her. Allah lists the loved ones from the least compassion, the brother, to the greatest, the child.",
  },
  {
    t: "takweer",
    q: "Where was Surat at-Takweer revealed, and which hadith tells you to read it?",
    a: "It is a Makkan surah, revealed before the Hijrah. At-Tirmidhi narrated, in a report he classed as hasan, that Ibn Umar رضي الله عنه said the Messenger of Allah ﷺ said: whoever would like to see the Day of Resurrection as if with his own eyes, let him read Surat at-Takweer, Surat al-Infitar, and Surat al-Inshiqaq.",
  },
  {
    t: "takweer",
    q: "What happens to the sun, the stars, the mountains, the she-camels, and the wild beasts?",
    a: "Takweer means putting parts together, like wrapping a turban, until the sun’s light disappears. The stars are scattered, fall, and change. The mountains are removed and become like a mirage and scattered dust. The heavily pregnant she-camels, ten months with young and the most precious Arab wealth, are neglected because of the terror. The wild beasts are gathered so Allah may settle the scores among them. Muslim narrated from Abu Hurayrah that even the hornless sheep will settle its score with the horned sheep.",
  },
  {
    t: "takweer",
    q: "What is said about the seas, the paired souls, and the girl buried alive?",
    a: "The seas are set alight despite their vastness. It was also said that sujjirat means their water is absorbed and dries up until not a drop remains. Souls are paired: good with good in Paradise, and those who loved what pleases the Shaytan together in Hell. The maw’oodah is the female infant buried alive. Soil was thrown on her until it suffocated her (ya’ooduha). She, not her killer, is asked for what sin she was killed, because the killer is under such wrath that he does not deserve to be addressed.",
  },
  {
    t: "takweer",
    q: "What do the pages, the sky, Hell, and Paradise show, and what does each soul then know?",
    a: "The pages of deeds, good and bad, are presented. The sky is pulled off forcefully, as skin is stripped from a ram. Hell is stoked and heats up. Paradise is brought near the righteous, as in {And Paradise will be brought near to the righteous, not far} [Qaf 50:31]. Each soul then knows the deeds it sent forth, whether they lead to Paradise or to Hell.",
  },
  {
    t: "takweer",
    q: "What does Allah swear by at the end of Surat at-Takweer, and what does laa mean here?",
    a: "He swears by the retreating stars, whose light is hidden by day, the ones that run their courses and disappear into their constellations, by the night as it closes in, and by the dawn when its light first appears. Laa (lit. not) is not translated; it is used for emphasis. The Arabs say as'asa al-layl when night comes, and sa'sa'a al-layl, inverting the consonants, when only a little of the night remains.",
  },
  {
    t: "takweer",
    q: "Who is the noble messenger, and what did the Prophet see?",
    a: "Jibreel عليه السلام, who conveyed the Quran from the Lord of Glory to Muhammad ﷺ. He is possessed of power — he turned the city of the people of Lut upside down — and he has high status before the Owner of the Throne. The angels in heaven obey him, and he is trustworthy with the revelation. Muhammad ﷺ saw him in his true form, with six hundred wings, filling the horizon toward the east. Aisha رضي الله عنها said she was the first of this ummah to ask about that seeing, and the Prophet ﷺ said he saw Jibreel in his true form on only two occasions, filling the space between heaven and earth.",
  },
  {
    t: "takweer",
    q: "What do daneen and rajeem mean, and who benefits from the reminder?",
    a: "Daneen, “withholder,” is one who is miserly. Danantu bi'sh-shay means: I withheld the thing out of stinginess. Muhammad ﷺ does not withhold the revelation. Rajeem, “accursed,” is one cursed and cast out from Allah’s mercy. The Quran is not the word of a devil who eavesdrops and is struck by a meteor; it is the revelation of the Lord of the Worlds. It is a reminder to all the worlds, but it benefits only whoever wills to follow the truth, and no one wills that except after Allah, Lord of the worlds, wills it.",
  },
  {
    t: "infitar",
    q: "Where was Surat al-Infitar revealed, and which report tells you to read it?",
    a: "It is a Makkan surah, revealed before the Hijrah. Ibn Umar رضي الله عنه narrated that the Messenger of Allah ﷺ said whoever would like to see the Day of Resurrection as if with his own eyes should read Surat at-Takweer, Surat al-Infitar, and Surat al-Inshiqaq. Narrated by at-Tirmidhi; classed as sahih by al-Albani.",
  },
  {
    t: "infitar",
    q: "What happens when the sky breaks apart, and what will each soul know?",
    a: "Breaking apart means splitting, as in al-Furqan 25:25. The stars fall, scattered and dispersed. The seas burst forth onto one another, mixing freshwater with saltwater. The graves are turned upside down. Deeds are presented, and each soul knows what it put forth and kept back, though it had forgotten that in this world, as in {Man will be informed that Day of what he sent ahead and kept back} [al-Qiyamah 75:13].",
  },
  {
    t: "infitar",
    q: "Why is Allah called the Generous here, and how did He form you?",
    a: "The question is addressed to sinners: what deceived you about your Lord so that you committed sins? Naming Him the Generous shows that no one should answer the Most Generous with evil and immoral deeds. Umar ibn al-Khattab رضي الله عنه recited the verse and said: By Allah, his ignorance has deceived him. Allah made you in proportion, standing upright, in the best shape, and assembled you in whatever form He willed, so people resemble their fathers, mothers, or uncles, and differ in looks and colour.",
  },
  {
    t: "infitar",
    q: "Who are the keepers, and where are the righteous and the wicked?",
    a: "Kalla: the disbelievers are not on the truth when they worship other than Allah; they deny the Day of reckoning and requital. The keepers are the angels who record deeds. They are noble and recording, honourable before Allah, and nothing you do is hidden from them. The righteous carry out what Allah enjoined and avoid disobedience. They find pleasure in remembering Him in this world, and bliss in al-barzakh and in Paradise. The wicked live in a kind of hell already, with pain and anxiety from being far from Allah, then torment in al-barzakh and in Hell.",
  },
  {
    t: "infitar",
    q: "What happens to the evildoers on the Day of Recompense, and who holds the command?",
    a: "They enter Hell and burn there, and they are never absent from it: they do not die and so escape the torment, they do not leave, and they are given no respite. The question “what is the Day of Recompense?” is repeated to stress how momentous, serious, and terrifying that Day is. On it, no soul can benefit another soul at all. The command belongs entirely to Allah Alone.",
  },
  {
    t: "infitar",
    q: "What do we learn about the recording angels and about authority?",
    a: "The scribes are noble and have integrity, so they do not record what a person did not do, or leave out what he did. Whoever looks after any of the ummah’s affairs, ruler or otherwise, needs a caring attitude, noble character, literacy, and knowledge of his charge. All matters are under Allah’s control every day, and on the Day of Resurrection that control is unmistakable, unlike this world, where transgressors try to compete with Him.",
  },
  {
    t: "mutaffifeen",
    q: "Where was Surat al-Mutaffifeen revealed, and why?",
    a: "Ibn Abbas رضي الله عنه said it is Madinan, revealed after the Hijrah, except eight verses from {The Day when mankind will stand before the Lord of the worlds} to the end, which are Makkan. When the Prophet ﷺ came to Madinah, the people were the worst in weights and measures, so Allah revealed {Woe to those who give less [than due]}, and they improved after that. Ibn Majah; classed as sahih by al-Albani.",
  },
  {
    t: "mutaffifeen",
    q: "What is tatfeef, who is a mutaffif, and what is wayl?",
    a: "Tatfeef is giving less and giving short measure: taking more than is due, or giving less than is due. A mutaffif is called that because he only steals a little when weighing and measuring. Wayl, “woe,” is a warning: a prayer that they suffer loss and severe punishment. It was also said that wayl is a valley in Hell which flows with the pus of the people of the Fire.",
  },
  {
    t: "mutaffifeen",
    q: "How do they deal in measure, and what gives them the audacity?",
    a: "When they take a measure they take their rights in full, and when they give by measure or weight they deduct something. They do this because they do not believe with certainty that they will stand before Allah. Zann can mean uncertainty, and in Arabic it can also mean certainty, as in al-Baqarah 2:46 and al-Haqqah 69:20. The Day is tremendous and hard for the disbelievers, and for the believer, by Allah’s grace, as easy as an obligatory prayer.",
  },
  {
    t: "mutaffifeen",
    q: "What is said about standing before the Lord of the worlds?",
    a: "People will rise from their graves by Allah’s command for the reckoning. All sovereignty will be diminished except His, as in Ghafir 40:16. Nafi said Ibn Umar رضي الله عنه warned vendors that those who give short measure will stand until sweat reaches half way up their ears. Al-Bukhari and Muslim narrated that one of them will be submerged in his sweat to halfway up his ears.",
  },
  {
    t: "mutaffifeen",
    q: "What is sijjeen, and what is the inscribed register?",
    a: "Kallaa, “No!”, rebukes the disbelievers who think they will not be resurrected or punished. Their record of deeds is in sijjeen, the seventh and lowest earth, the abode of the evildoers, from sijn, prison. “What can make you know what is sijjeen?” stresses that it is an eternal prison and an everlasting punishment. The inscribed register is not a definition of sijjeen. It describes the book: their fate there is decreed and finished; nothing will be added or subtracted.",
  },
  {
    t: "mutaffifeen",
    q: "Who denies the Day of Recompense, and what is raan?",
    a: "Woe that Day is doom and humiliating punishment. The deniers think the Resurrection unlikely. None deny it except every sinful transgressor: he transgresses because of unlawful earnings, lies, breaks promises, and uses foul speech in dispute. When the verses are recited he calls them legends of the former peoples, meaning fables written and presented attractively. Kallaa: this is not those legends. Raan, the stain, means overwhelming or covering, as in Raanat al-khamru ala aqlihi, the alcohol overwhelmed his reason. At-Tirmidhi, classed sahih, from Abu Hurayrah: a black spot appears with each sin, is cleansed by repentance, and grows until it covers the heart if the sin is repeated.",
  },
  {
    t: "mutaffifeen",
    q: "What does it mean that they will be partitioned, then burn?",
    a: "Kallaa rebukes their denial again. They will be barred from seeing Allah ﷻ, just as they were barred from His law and His verses, which they called legends. Then they will be touched by the fire’s heat and punished with all kinds of torments. It will be said to them, by way of rebuke, “This is what you used to deny,” so physical pain is joined to the pain of regret. Ahl as-Sunnah wa'l-Jama'ah take the singling out of the evildoers as proof that the righteous, with whom Allah is pleased, will see Him.",
  },
  {
    t: "mutaffifeen",
    q: "What is ‘illiyyeen, and who are the abrar?",
    a: "After placing the evildoers’ book in the lowest and narrowest place, Allah places the book of the righteous in the highest, broadest and most spacious part of Paradise. ‘Illiyyun is elevation upon elevation, sublimity upon sublimity. The inscribed register describes that book, as it described the book of the evildoers. The abrar, singular barr, obey Allah by doing what He enjoins and avoiding what He forbids. Their destination is Paradise, in the seventh heaven, where the souls of the believers will be. The register is witnessed by the angels, and it was also said by those from every heaven who are close to Allah, when it is taken up to illiyyun.",
  },
  {
    t: "mutaffifeen",
    q: "What are the couches, the radiance, and raheeq?",
    a: "The righteous are in eternal bliss, physical and spiritual. On adorned couches they look at bliss no one in this world could imagine. Araa'ik, singular areekah, is an adorned couch surrounded by something like curtains, one of the finest couches. Some scholars said this looking includes gazing upon the countenance of Allah. Their faces show joy, delight, light and happiness. Allah gives them drink at the hands of the eternal young boys of al-Waqi‘ah 56:17–18. Raheeq is pure, mature wine: no intoxication, no harm to one’s reason, and no headache. It stays sealed until the righteous break the seal, and its last sip is musk, unlike worldly wine.",
  },
  {
    t: "mutaffifeen",
    q: "What is Tasneem, and what is the race for?",
    a: "The competitors race, out of breath, for this reward: obeying Allah, attaining what pleases Him, and keeping away from what displeases Him. The pure wine is mixed with tasneem, the noblest drink of the people of Paradise. Tasneem is also a spring from which those near to Allah drink, pure and unmixed.",
  },
  {
    t: "mutaffifeen",
    q: "How did the evildoers treat the believers in this world?",
    a: "They laughed at those who affirmed Allah’s oneness. When they passed them they exchanged derisive glances: ghamz is signalling with the eyelids and eyebrows, and its root meaning is shame. When they returned to their families they came back full of self-admiration, jesting, impugning the believers and mocking them. When they saw them they said, “Indeed, those are truly lost,” meaning they had gone astray from the truth.",
  },
  {
    t: "mutaffifeen",
    q: "What happens on the Day of Resurrection, and what does thuwwiba mean?",
    a: "The disbelievers were not sent as guardians over the believers. They were enjoined to believe and to strive to obey. Today the believers laugh at them, humiliated and defeated, from couches of pearls and rubies, observing them punished in the Fire, a requital for their mockery. The question {Have the disbelievers [not] been rewarded?} affirms that yes, they have been requited in full, by Allah’s justice and wisdom. Thuwwiba is what comes back to a person because of his actions (thawwab), whether good or bad.",
  },
  {
    t: "mutaffifeen",
    q: "What do we learn about mockery and about Allah’s judgement?",
    a: "Those who mocked the believers have successors who call good people backward and the righteous extreme. The scholars and the religiously committed, heirs of the messengers, meet the same name-calling. Allah’s judgement is justice or grace: grace for the believers, and justice for the disbelievers.",
  },
];

export const TAFSIR2_QUIZ = [
  {
    t: "news",
    q: "Surat an-Naba is described as:",
    opts: [
      "A Madinan surah, revealed after the Hijrah",
      "A Makkan surah, revealed before the Hijrah",
      "Revealed partly in Makkah and partly in Madinah",
      "Revealed during the Farewell Hajj",
    ],
    ans: 1,
    fb: "The surah is Makkan, revealed before the Hijrah. Ibn az-Zubayr said verse 1 was revealed in Makkah.",
  },
  {
    t: "news",
    q: "Allah opens the surah with a question in order to:",
    opts: [
      "Ask the believers for information He does not have",
      "Denounce the polytheists for asking one another about the Day of Resurrection",
      "Teach the names of the days of the week",
      "Describe the battle of Badr",
    ],
    ans: 1,
    fb: "The question denounces the polytheists who asked one another about the Resurrection, the signs of Allah, and His Book.",
  },
  {
    t: "news",
    q: "In the main commentary, “the great news” is:",
    opts: [
      "The conquest of Makkah",
      "The Day of Resurrection",
      "The birth of the Prophet ﷺ",
      "The revelation of Surat al-Baqarah",
    ],
    ans: 1,
    fb: "It is the Day of Resurrection — the news they disputed, some believing and others denying it and thinking it unlikely.",
  },
  {
    t: "news",
    q: "Ar-Raghib said naba is used only for news that is:",
    opts: [
      "Everyday and ordinary",
      "Of great significance, from which one learns what is or is most likely true",
      "Always false",
      "Only about past nations",
    ],
    ans: 1,
    fb: "Naba is news of great significance. News is not called naba unless it is of that nature.",
  },
  {
    t: "news",
    q: "Kallaa in these verses is:",
    opts: [
      "A word of praise",
      "A word of rebuke and warning, which usually nullifies what came before it",
      "The name of an idol",
      "A verb meaning “to create”",
    ],
    ans: 1,
    fb: "It rebukes and warns those whose questioning implies denial of something that will inevitably happen.",
  },
  {
    t: "news",
    q: "The warning is repeated in order to:",
    opts: [
      "Introduce a new subject",
      "Emphasize the warning and highlight its seriousness",
      "Cancel the first warning",
      "Address only the believers",
    ],
    ans: 1,
    fb: "{Then, no! They are going to know} is a warning followed by another warning.",
  },
  {
    t: "news",
    q: "The two main reasons for the disbelievers’ rejection, stubbornness and arrogance were being told that:",
    opts: [
      "Prayer is five times a day, and zakat is due",
      "Their idols were false gods, and their bodies would be created anew",
      "The night is clothing, and the day is for livelihood",
      "Mountains have roots, and rain comes from clouds",
    ],
    ans: 1,
    fb: "The greatest news to them: their idols were not worthy of worship, and their bodies would be created anew.",
  },
  {
    t: "signs",
    q: "Mihad, “resting place”, means the earth is:",
    opts: [
      "Too solid to walk on",
      "Spread out, smooth, and suited to your wellbeing — not too solid or too soft",
      "Covered entirely by the sea",
      "Still being created",
    ],
    ans: 1,
    fb: "Mihad is something spread out and prepared for you. Compare al-Baqarah 2:22.",
  },
  {
    t: "signs",
    q: "Az-Zajjaj said subat means:",
    opts: [
      "To die, so the soul leaves the body",
      "To stop moving whilst the soul is still in the body",
      "To work through the night",
      "To travel in the day",
    ],
    ans: 1,
    fb: "Subat is rest: cessation of toil, from sabt. The soul remains in the body.",
  },
  {
    t: "signs",
    q: "The “burning lamp” is:",
    opts: ["The moon", "The stars of the Milky Way", "The sun", "Lightning"],
    ans: 2,
    fb: "The lamp is the sun: bright for all the people of the earth, and burning with intense heat.",
  },
  {
    t: "signs",
    q: "The view of al-mu‘sirat that is more likely correct is that it refers to:",
    opts: ["The wind", "The heavens", "The clouds", "The mountains"],
    ans: 2,
    fb: "Three views are mentioned — clouds, wind, heavens. The first, the clouds, is more likely. Ibn Uthaymeen: they are “wrung out”, and the water pours.",
  },
  {
    t: "signs",
    q: "In the verse, grain and vegetation are distinguished as:",
    opts: [
      "Grain for animals, vegetation for humans",
      "Grain (wheat, barley, corn, rice, and other grains humans eat) and vegetation (what animals eat, such as grass)",
      "Both words meaning the same fruit",
      "Grain in summer and vegetation in winter only",
    ],
    ans: 1,
    fb: "Grain is what humans eat. Vegetation is what animals eat, such as grass and other plants.",
  },
  {
    t: "signs",
    q: "Nukhrij is used instead of nunbit in {That We may bring forth thereby grain and vegetation} because:",
    opts: [
      "Nunbit is not an Arabic word",
      "The context is affirming the resurrection, so “bring forth” is more appropriate than “cause to grow”",
      "The verse is only about farming",
      "Nukhrij means the sun",
    ],
    ans: 1,
    fb: "The context is the resurrection, so nukhrij (we bring forth) fits better than nunbit (We cause to grow).",
  },
  {
    t: "signs",
    q: "Grain is mentioned before vegetation and gardens because:",
    opts: [
      "Gardens are the staple food",
      "Grain is the basic food and the staple of people; vegetation is next; fruits from gardens are used least",
      "Animals do not eat vegetation",
      "The order is random",
    ],
    ans: 1,
    fb: "Grain is the staple of people. Vegetation is second, and the basic food of animals. Gardens, from which fruits come, are what people use least.",
  },
  {
    t: "judgement",
    q: "The Horn is blown:",
    opts: [
      "Once, and everyone is judged immediately",
      "Twice: the first time people are terrified, swoon, and die; the second time they are resurrected",
      "Three times, once for each heaven",
      "Only for the believers",
    ],
    ans: 1,
    fb: "The first blast: terror, swooning, death. The second: resurrection, and souls returned. People come in multitudes for the reckoning.",
  },
  {
    t: "judgement",
    q: "On that Day the mountains will be:",
    opts: [
      "Pegs holding the earth more firmly",
      "A mirage: they seem to be something, but they will be nothing",
      "Gardens of entwined growth",
      "Gateways for the angels",
    ],
    ans: 1,
    fb: "They are removed and become a mirage. The heaven, by contrast, is opened and becomes gateways for the angels.",
  },
  {
    t: "judgement",
    q: "The verb kaanat in {Indeed, Hell has been lying in wait} indicates that:",
    opts: [
      "Hell will be created on the Day of Judgement",
      "The Fire is already created and exists at present",
      "Hell is only a metaphor",
      "The transgressors have not yet sinned",
    ],
    ans: 1,
    fb: "Kaanat (“has been”) shows the Fire already exists. It is prepared and lying in wait.",
  },
  {
    t: "judgement",
    q: "Hell has been prepared only for:",
    opts: [
      "Everyone who makes a mistake",
      "The transgressors — those who overstep the mark in sin",
      "People who miss a prayer once",
      "The angels",
    ],
    ans: 1,
    fb: "This shows Allah’s mercy. Those who err have means of expiation. No one enters the Fire except those who transgress against themselves.",
  },
  {
    t: "judgement",
    q: "The two things given as the basis of the disbelievers’ punishment are:",
    opts: [
      "Missing Hajj, and eating grain",
      "Not expecting an account, and denying Allah’s verses — disbelief in the Resurrection comes first",
      "Sleeping at night, and working in the day",
      "Building mountains, and opening the heaven",
    ],
    ans: 1,
    fb: "Only these two are mentioned, because they are the basis of disbelief. Disbelief in the Resurrection is the foundation.",
  },
  {
    t: "judgement",
    q: "{We have enumerated in writing} means the deeds are written in:",
    opts: [
      "The people’s own books only, with nothing preserved with Allah",
      "Al-Lawh al-Mahfuz — everything, small or great, good and evil",
      "The clouds",
      "The Horn",
    ],
    ans: 1,
    fb: "All things are written in al-Lawh al-Mahfuz, as in {and all things We have enumerated in a clear register} [Ya-Seen 36:12].",
  },
  {
    t: "righteous",
    q: "The righteous who attain salvation are those who:",
    opts: [
      "Feared their Lord’s wrath, obeyed Him, and refrained from what He dislikes",
      "Only avoided the Fire without obedience",
      "Entered Paradise without following the Prophet ﷺ",
      "Heard idle talk but committed no major sin",
    ],
    ans: 0,
    fb: "They feared the wrath of their Lord, constantly obeyed Him, and refrained from what He dislikes, so they are far removed from the Fire.",
  },
  {
    t: "righteous",
    q: "Grapevines are singled out in the gardens of Paradise because of:",
    opts: [
      "Their scarcity",
      "Their great value and abundance in those gardens",
      "Their being the only plant there",
      "Their connection to the Kaaba",
    ],
    ans: 1,
    fb: "The gardens have palm trees and other plants. Grapevines are mentioned specially for their great value and abundance.",
  },
  {
    t: "righteous",
    q: "{No ill speech will they hear therein or any falsehood} means Paradise has:",
    opts: [
      "Idle talk, but no lies",
      "No idle talk of no benefit, and no sin or lies — the abode of peace",
      "Speech only on Fridays",
      "Falsehood that does not harm",
    ],
    ans: 1,
    fb: "They will not hear lies, and they will not belie one another. Compare al-Waqi‘ah 56:25. Our gatherings should be like that.",
  },
  {
    t: "righteous",
    q: "“Your Lord” in {[As] reward from your Lord} teaches that Paradise is attained by:",
    opts: [
      "Lineage alone",
      "Following the Prophet ﷺ, believing in him, and acting on what he brought",
      "Refraining from gardens and grapevines",
      "Knowing the two roots of atrab only",
    ],
    ans: 1,
    fb: "The possessive pronoun refers to the Prophet ﷺ. Admittance to Paradise and its blessings come by following him.",
  },
  {
    t: "true-day",
    q: "No one may speak on that Day unless:",
    opts: [
      "He is a companion of the Prophet ﷺ",
      "Allah gives him permission, and what he says is true",
      "He stands in the first row only",
      "He has already entered Paradise",
    ],
    ans: 1,
    fb: "The two conditions are permission from Allah, and speech that is true. Commentators said this refers to Laa ilaaha illa Allah.",
  },
  {
    t: "true-day",
    q: "The Spirit who stands with the angels is:",
    opts: [
      "Only the souls of animals",
      "Jibreel, or it was said the souls of the sons of Adam, or some of Allah’s creation",
      "The Horn",
      "The disbelievers",
    ],
    ans: 1,
    fb: "They stand row after row, in silence, which conveys the awe of standing before Allah.",
  },
  {
    t: "true-day",
    q: "The punishment is called near because:",
    opts: [
      "It will happen within a few days of this verse",
      "The Resurrection is certain, and whatever is inevitable is near",
      "It has already passed",
      "Only the angels will see it",
    ],
    ans: 1,
    fb: "Anything that is inevitably going to happen is near. On that Day each person sees what his hands sent ahead.",
  },
  {
    t: "true-day",
    q: "Ar-Rahman is mentioned with permission to speak in order to show that:",
    opts: [
      "Intercession is a mercy from Allah to His creation",
      "Mercy cancels the need for permission",
      "Only the Most Merciful will speak",
      "The name has no connection to intercession",
    ],
    ans: 0,
    fb: "Intercession is one of mercy from Allah to His creation. No one speaks except one whom the Most Merciful permits.",
  },
  {
    t: "naziat",
    q: "The angels who “extract with violence” take the souls of:",
    opts: [
      "The believers, gently",
      "The disbelievers, forcefully",
      "Only the prophets",
      "The animals",
    ],
    ans: 1,
    fb: "They call the soul with the harshest words and drag it out until it almost tears the body. The believers’ souls are taken gently, like undoing a slipknot.",
  },
  {
    t: "naziat",
    q: "Those who race each other are the angels who:",
    opts: [
      "Delay the revelation so the devils can hear it",
      "Rush to convey the revelation to the messengers before the devils eavesdrop",
      "Record deeds on the left only",
      "Guard Hell with Malik",
    ],
    ans: 1,
    fb: "They race, rush and hasten with the revelation. Those who glide descend from heaven and ascend to it. Those who arrange each matter run the affairs of the universe by Allah’s command.",
  },
  {
    t: "naziat",
    q: "Calling the Angel of Death Azraeel is:",
    opts: [
      "Established in the Quran and the Sunnah",
      "Wrong, because there is no evidence for that name in the Quran or the Sunnah",
      "The name Allah uses in this surah",
      "Another name for Israfeel",
    ],
    ans: 1,
    fb: "He is entrusted with taking souls. Jibreel brings revelation, Israfeel blows the Horn, Mikaeel is entrusted with rain and vegetation, and Malik with Hell.",
  },
  {
    t: "naziat",
    q: "Swearing by the angels is:",
    opts: [
      "Allowed, because Allah swears by them",
      "Shirk. Only Allah may be sworn by. The unspoken point of the oath is that you will be resurrected and brought to account",
      "Required in every prayer",
      "The same as swearing by the Quran",
    ],
    ans: 1,
    fb: "Allah swears by these creations, but it is not permissible for anyone except Allah to swear by a created thing.",
  },
  {
    t: "naziat",
    q: "In the second report, ar-raajifah and ar-raadifah are:",
    opts: [
      "The first blast of the trumpet, then the second, when they are gathered",
      "The sun and the moon",
      "Two names for the same angel",
      "The recording angels on the right and the left",
    ],
    ans: 0,
    fb: "It was also said that ar-raajifah is the first blast, after which all swoon except those whom Allah wills, and ar-raadifah is the second Trumpet blast. Another narration says the blast convulses the earth and the subsequent one is the sky. Rajf means turmoil and shaking.",
  },
  {
    t: "naziat",
    q: "The hearts that tremble on that Day are:",
    opts: [
      "The hearts of the disbelievers, trembling with intense fear",
      "The hearts of the believers, trembling with joy",
      "Only the hearts of the angels",
      "The mountains, shaking like hearts",
    ],
    ans: 0,
    fb: "Their eyes are humbled too: they lower their gaze out of humiliation, and do not stare. “Be returned” means brought back to where one was, and karrah is coming back after having gone.",
  },
  {
    t: "naziat",
    q: "{Indeed, it will be but one shout} answers those who think the Resurrection is far-fetched. The shout is:",
    opts: [
      "One blast of the Trumpet",
      "A second oath by the angels",
      "The cry of the disbelievers in the grave",
      "Thunder on the day the sky splits",
    ],
    ans: 0,
    fb: "They said a return after decayed bones would be a losing return. Allah answers that it will be but one shout — one blast of the Trumpet.",
  },
  {
    t: "naziat",
    q: "Saahirah is called that because:",
    opts: [
      "Those gathered there will not be able to sleep, from the fear and panic of that Day",
      "The land is covered with gardens",
      "The people will sleep until the second blast",
      "It is the name of the first trumpet",
    ],
    ans: 0,
    fb: "Saahirah is flat, white land with no vegetation, prepared for the reckoning. The root sahr also means staying up at night. One blast, and the disbelievers are alive on the face of the earth after having been buried.",
  },
  {
    t: "naziat",
    q: "Tuwa is:",
    opts: [
      "The name of Pharaoh’s palace",
      "The name of the sacred valley where Allah called Musa عليه السلام",
      "Another name for the Horn",
      "The festival day on which Pharaoh gathered his people",
    ],
    ans: 1,
    fb: "Allah called Musa in the blessed, sacred valley of Tuwa. It was sacred because revelation was sent to him there. The story consoles the Prophet ﷺ.",
  },
  {
    t: "naziat",
    q: "Khashyah differs from khawf mujarrad because khashyah is:",
    opts: [
      "Fear based on knowledge",
      "Fear with no knowledge at all",
      "Fear of Pharaoh only",
      "A name for the staff of Musa",
    ],
    ans: 0,
    fb: "Fear without knowledge is khawf mujarrad (pure fear). Guidance is mentioned before fear, because fear of Allah follows knowing Him, as in Fatir 35:28.",
  },
  {
    t: "naziat",
    q: "The greatest sign shown to Pharaoh was:",
    opts: [
      "The splitting of the sea only",
      "The hand of Musa, white to the onlookers, and his staff turning into a snake",
      "The first blast of the trumpet",
      "Rain sent by Mikaeel",
    ],
    ans: 1,
    fb: "Pharaoh still denied and disobeyed, turned his back, and strove hard against what Musa called him to: obedience, fear of Allah, and Tawhid.",
  },
  {
    t: "naziat",
    q: "The punishment of the Hereafter is mentioned before the punishment in this world because:",
    opts: [
      "This world has no punishment",
      "It is more severe and more lasting",
      "Pharaoh was not punished in this life",
      "The verse is speaking only about Quraysh",
    ],
    ans: 1,
    fb: "It is the real punishment: severe and everlasting, seizing transgressors and sinners. Allah seized Pharaoh in both, and made him a lesson. Tughyaan means going to extremes and overstepping the mark.",
  },
  {
    t: "naziat",
    q: "{Are you a more difficult creation or is the heaven?} means:",
    opts: [
      "The heaven was harder for the angels to build than for Allah",
      "People are a greater creation than the mountains",
      "Recreating you after death is not more difficult than creating the heaven",
      "Pharaoh’s creation was more difficult than Musa’s",
    ],
    ans: 2,
    fb: "The One Who is able to create the heaven is able to re-create you after death. He raised it like a structure or firmament, and proportioned it with no imperfections, cracks or gaps.",
  },
  {
    t: "naziat",
    q: "Samk, translated “ceiling,” means:",
    opts: [
      "Raising something in an open space, so that joining it to rafa‘a shows the heaven is vastly raised",
      "The darkness of the night",
      "Provision that lasts only for a while",
      "Smoothing out and levelling the earth",
    ],
    ans: 0,
    fb: "Whether what is raised is connected to the earth or not. The verb rafa‘a (He raised) is joined to samk, whose name also refers to raising, to emphasize the action.",
  },
  {
    t: "naziat",
    q: "The order of creation in these verses, read with Fussilat, is:",
    opts: [
      "The heaven was spread out, then the earth was created, then the heaven was built",
      "The earth and the heaven were created at the same moment",
      "The earth was created first, then the heaven, then the earth was spread out",
      "Fussilat and an-Nazi‘aat contradict one another",
    ],
    ans: 2,
    fb: "The earth itself came before the heaven itself. After creating the heaven, Allah spread out the earth and levelled it. There is no contradiction.",
  },
  {
    t: "naziat",
    q: "at-Taammah is:",
    opts: [
      "A name of Pharaoh’s festival",
      "The staff of Musa when it became a snake",
      "One of the names of the Day of Resurrection, the Overwhelming Calamity",
      "The flat land where people are gathered",
    ],
    ans: 2,
    fb: "It is from tatimm, and from tamma al-maa, water when it covers things. It describes the extreme hardship and horror of that Day. “Greatest” emphasizes how terrible it will be.",
  },
  {
    t: "naziat",
    q: "Hellfire is the refuge of the one who:",
    opts: [
      "Feared standing before his Lord and restrained his soul",
      "Transgressed and preferred the life of this world over his religion and his Hereafter",
      "Saw the greatest sign and believed",
      "Spread the earth and set the mountains firmly",
    ],
    ans: 1,
    fb: "Refuge is the place to which one returns and settles. The one who dreaded the standing, and so forbade himself whims and pleasures, has Paradise as his refuge.",
  },
  {
    t: "naziat",
    q: "Hawa leads, in the Hereafter, to:",
    opts: [
      "al-hawiyah, the pit of Hell, because it throws a person down",
      "The sacred valley of Tuwa",
      "A full cup in Paradise",
      "The second blast, when people are gathered",
    ],
    ans: 0,
    fb: "Hawa is inclination towards desires. It throws a person down (yahwi) into trouble in this world. Fear of standing before Allah and restraining the soul are mentioned together, because that fear is the strongest protection against desire.",
  },
  {
    t: "naziat",
    q: "Mursaahaa, “its arrival,” likens the Hour to:",
    opts: [
      "A ship that no one knows will arrive until it drops anchor",
      "The white hand of Musa",
      "The first blast of the trumpet",
      "Rain sent down by Mikaeel",
    ],
    ans: 0,
    fb: "It is from arsa, a ship dropping anchor off the coast. No one knows when the Resurrection will happen until it actually happens. The Prophet has no knowledge of its time at all.",
  },
  {
    t: "naziat",
    q: "In the hadith of Jibreel, the Prophet ﷺ said about the Hour:",
    opts: [
      "It will come on a Friday",
      "Jibreel knows the time, but people do not",
      "The one who is asked about it does not know more than the one who is asking",
      "It will be after a thousand years",
    ],
    ans: 2,
    fb: "It is in as-Sahihayn. If Jibreel, the most knowledgeable of the angels, and the Prophet, the most knowledgeable of humans about the revelation, did not know, then those with less knowledge do not know either. Knowledge of it belongs only to Allah.",
  },
  {
    t: "naziat",
    q: "When a man asked when the Hour would be, the Prophet ﷺ asked what he had prepared, and then said:",
    opts: [
      "You will be with those whom you love",
      "The Hour is tomorrow at sunrise",
      "Only the angels will be saved",
      "Love of Allah does not benefit on that Day",
    ],
    ans: 0,
    fb: "The man said: Love of Allah and His Messenger ﷺ. The Prophet was sent to warn those who fear the Hour, not to tell people when it will happen. When they see it, this life will seem like one afternoon or one morning.",
  },
  {
    t: "naziat",
    q: "Allah withheld the time of the Resurrection so that people would:",
    opts: [
      "Stop doing good deeds until the time is known",
      "Strive hard in good deeds, fearing it may come at any moment",
      "Ask Jibreel to announce the day",
      "Treat this world as longer than the Hereafter",
    ],
    ans: 1,
    fb: "The interests served by withholding that knowledge are that people fear and worry the Day may come upon them at any moment, and so they strive in good deeds.",
  },
  {
    t: "naziat",
    q: "{You are only a warner for those who fear it} means:",
    opts: [
      "The Prophet ﷺ did not warn anyone who did not fear Allah",
      "Only those who fear Allah benefit from the warning; those who do not fear Him usually do not",
      "The warning is withheld from the believers",
      "Fear of Allah cancels the need to prepare for the Hour",
    ],
    ans: 1,
    fb: "He did warn those who did not fear. What is meant is that the ones who benefit are those who fear Allah. This world is short, temporary and transient: an afternoon or the morning thereof.",
  },
  {
    t: "abasa",
    q: "Surat Abasa was revealed concerning:",
    opts: [
      "A prominent leader of Quraysh who accepted Islam",
      "Abdullah ibn Umm Maktum, the blind man, while the Prophet was calling a polytheist leader",
      "The Companions at Badr",
      "Aisha, when she asked about the Hour",
    ],
    ans: 1,
    fb: "Aisha said he came asking to be guided, and the Prophet kept turning towards a prominent polytheist. Narrated by at-Tirmidhi; classed as sahih by al-Albani. The surah is Makkan.",
  },
  {
    t: "abasa",
    q: "Allah speaks of the frown in the third person in order to:",
    opts: [
      "Avoid addressing the rebuke directly to His Prophet, out of mercy and honour",
      "Hide the incident from the Prophet",
      "Name Ibn Umm Maktum in the verse",
      "Praise the leaders of Quraysh",
    ],
    ans: 0,
    fb: "He is His Prophet and His Beloved. “The blind man” softens the Prophet’s heart and excuses the interruption. The address then shifts to the second person.",
  },
  {
    t: "abasa",
    q: "There is no blame on the Prophet if the one who thinks himself without need is not purified, because:",
    opts: [
      "That man was already Muslim",
      "Guidance is not required of anyone",
      "All that is required is to convey the message",
      "The blind man did not fear Allah",
    ],
    ans: 2,
    fb: "The one who came striving and fearing, eager to learn, is the one who was ignored. Do not turn from the interested person toward the one who turns away.",
  },
  {
    t: "abasa",
    q: "Leaving this rebuke in the Quran is a proof of prophethood because:",
    opts: [
      "Only a human author would include a rebuke of himself",
      "If the Quran were from Muhammad, he would have concealed a rebuke of himself",
      "The verse names the Prophet in the second person from the first word",
      "Ibn Umm Maktum wrote the surah",
    ],
    ans: 1,
    fb: "If he were to have concealed anything of the revelation, he would have concealed this. Callers must not prefer rank, prominence, or kinship. The opening has three third-person phrases, because it is a rebuke.",
  },
  {
    t: "abasa",
    q: "The honored sheets in 80:13–14 are:",
    opts: [
      "The pages Ibn Umm Maktum was writing",
      "The books of the recording angels only",
      "al-Lawh al-Mahfuz: respected pages, exalted and free of addition or subtraction",
      "The scripture of the leaders of Quraysh",
    ],
    ans: 2,
    fb: "{No!} rebukes the frown. The surah is a reminder for whoever wills to remember Allah. The sheets are al-Lawh al-Mahfuz.",
  },
  {
    t: "abasa",
    q: "The angels are called safarah because:",
    opts: [
      "They write, from sifr (book), or they are emissaries, from safeer",
      "They travel only at night",
      "They were created from a sperm-drop",
      "They withhold the Quran from people who find it difficult",
    ],
    ans: 0,
    fb: "They are the recording angels, noble and dutiful. Al-Bukhari and Muslim: the skillful reciter will be with them, and the one who finds recitation difficult has a twofold reward.",
  },
  {
    t: "abasa",
    q: "Ibn Mas‘ud reported that each early stage in the womb lasts:",
    opts: [
      "Seven days",
      "Forty days: nutfah, then alaqah, then mudghah",
      "One year",
      "Until the person chooses good or evil",
    ],
    ans: 1,
    fb: "Narrated by al-Bukhari and Muslim. The verse rebukes man for disbelief and arrogance, though he began as a sperm-drop.",
  },
  {
    t: "abasa",
    q: "The scholars derived from {Then He causes his death and provides a grave for him} that:",
    opts: [
      "Cremation is the Sunnah when a journey is long",
      "The dead may be left for wild animals if the family prefers it",
      "Resurrection is delayed because Allah is unable",
      "Muslims must bury their dead, unless burial is not possible",
    ],
    ans: 3,
    fb: "Allah also made the way of good and evil clear. Resurrection is when He wills. Kallaa rebukes the claim that man has already fulfilled what Allah commanded.",
  },
  {
    t: "abasa",
    q: "Allah tells man to look at his food so that:",
    opts: [
      "He will stop eating grain and eat only fruit",
      "Reflection on its origin may lead him to know Allah and worship Him",
      "He will learn to store dates for camels only",
      "Rain is withheld until he asks for it",
    ],
    ans: 1,
    fb: "Food begins with rain poured down in abundance. The earth is then split by the vegetation, and grain such as wheat and barley grows.",
  },
  {
    t: "abasa",
    q: "Qadb, translated “herbage,” is:",
    opts: [
      "A garden enclosed by a wall",
      "Fruit eaten for pleasure, such as almonds",
      "Fresh fodder that animals chew in order to break it down",
      "The wood of the olive tree",
    ],
    ans: 2,
    fb: "The palm is mentioned, not only its fruit, because dates, date stones, wood, leaves and fibers all have uses. A garden of dense shrubbery is thickly growing shrubs or tall trees.",
  },
  {
    t: "abasa",
    q: "This worldly enjoyment is called mataa because:",
    opts: [
      "It soon fades, unlike the naeem of Paradise, which never ends",
      "It is stored in al-Lawh al-Mahfuz",
      "It is only for livestock, not for people",
      "It is the name of the basic grains, wheat and barley",
    ],
    ans: 0,
    fb: "Fakihah is eaten for pleasure, not basic sustenance. The “grass” is what animals eat. Both people and their livestock are given these plants as enjoyment.",
  },
  {
    t: "abasa",
    q: "As-saakhkhah is:",
    opts: [
      "The rain poured down in torrents",
      "The blast of the Trumpet, so named because it almost deafens",
      "The name of the pages in al-Lawh al-Mahfuz",
      "The garden enclosed by a wall",
    ],
    ans: 1,
    fb: "A man will flee from brother, parents, wife and children, fearing claims of injustice. Qatadah said nothing that Day is harder than that fear. Each person will be too preoccupied to notice anyone else.",
  },
  {
    t: "abasa",
    q: "The bright, laughing faces on that Day are:",
    opts: [
      "The people of Hell, covered with dust",
      "Everyone who is gathered naked",
      "The people of Paradise, rejoicing at what Allah has given them",
      "Only the recording angels",
    ],
    ans: 2,
    fb: "Other faces will be dark, covered with humiliation: the disbelievers, the wicked ones. The gathering itself will be too overwhelming for anyone to worry about looking at one another.",
  },
  {
    t: "abasa",
    q: "The wife is called sahibah in this passage because:",
    opts: [
      "The verse means a wife who is a true companion, and even she will flee",
      "Every wife is a companion, so the word adds nothing",
      "Sahibah means the child, towards whom compassion is greatest",
      "The husband flees only from a wife he hates",
    ],
    ans: 0,
    fb: "Listing each relative is more alarming than saying “his relatives.” Allah begins with the brother and ends with the child, the one towards whom compassion is usually greatest.",
  },
  {
    t: "takweer",
    q: "Takweer, the wrapping up of the sun, means:",
    opts: [
      "The sun’s light is increased",
      "Parts of the sun are put together, as a turban is wrapped, until its light disappears",
      "The stars are paired with one another",
      "The pages of deeds are spread open",
    ],
    ans: 1,
    fb: "The stars fall and scatter, the mountains become like a mirage and dust, and the ten-month she-camels are neglected because terror distracts people from their most precious wealth.",
  },
  {
    t: "takweer",
    q: "The report in Muslim about the hornless sheep is cited to show that:",
    opts: [
      "Only humans will be judged",
      "The seas will dry up before any animal is questioned",
      "Wild beasts are gathered so scores can be settled, and every right will be restored",
      "The she-camels will be the first to speak",
    ],
    ans: 2,
    fb: "Abu Hurayrah رضي الله عنه narrated that all rights will be restored, to the extent that the hornless sheep settles its score with the horned sheep.",
  },
  {
    t: "takweer",
    q: "The question {For what sin she was killed} is addressed to:",
    opts: [
      "The girl who was buried alive, not to her killer",
      "The killer, so that he can defend himself",
      "The noble scribes who wrote the record",
      "The people of Paradise when it is brought near",
    ],
    ans: 0,
    fb: "Maw’oodah means the infant on whom soil was thrown until it suffocated her. Asking her, and not the killer, shows that he is under such wrath that he does not deserve to be addressed.",
  },
  {
    t: "takweer",
    q: "When the sky is stripped away, the wording means:",
    opts: [
      "It is folded gently, like a turban",
      "Its water is absorbed until nothing remains",
      "It is stoked until it heats up",
      "Something stuck firmly is pulled off by force, as skin is stripped from a ram",
    ],
    ans: 3,
    fb: "Hell is set ablaze, Paradise is brought near the righteous, and each soul then knows what it sent forth of deeds.",
  },
  {
    t: "takweer",
    q: "Laa in {So I swear by the retreating stars} is:",
    opts: [
      "A denial that Allah swears at all",
      "The name of the dawn when it breathes",
      "Used for emphasis, and it is not translated in this verse",
      "The word for the constellations in which the stars hide",
    ],
    ans: 2,
    fb: "The retreating stars are those whose light is hidden by day. As'asa al-layl means the night has closed in; sa'sa'a al-layl, with the consonants inverted, means little of the night is left.",
  },
  {
    t: "takweer",
    q: "The noble messenger in this oath is:",
    opts: [
      "Jibreel عليه السلام, obeyed in heaven and trustworthy with the revelation",
      "A devil who eavesdrops on the heavens",
      "One of the polytheists of Quraysh",
      "The human companion only, with no angel mentioned",
    ],
    ans: 0,
    fb: "He is possessed of power, as when he overturned the city of the people of Lut, and he is secure in position before the Owner of the Throne. The Prophet ﷺ saw him in his true form on two occasions.",
  },
  {
    t: "takweer",
    q: "Daneen and rajeem in these verses mean:",
    opts: [
      "A retreating star, and the dawn",
      "A madman, and a companion",
      "A king, and his vizier",
      "A miser who withholds, and one cursed and cast out from Allah’s mercy",
    ],
    ans: 3,
    fb: "Muhammad ﷺ does not withhold the revelation. The Quran is not the word of an accursed devil. It benefits whoever wills to take a right course, and that will itself is only by the will of Allah.",
  },
  {
    t: "infitar",
    q: "When the seas are erupted, the commentary says:",
    opts: [
      "Their water dries up until not a drop remains",
      "They burst forth onto one another, mixing freshwater with saltwater",
      "They are set alight and become burning fire",
      "They are stripped away like the skin of a ram",
    ],
    ans: 1,
    fb: "The sky splits, the stars fall and scatter, and the graves are turned upside down. Each soul then knows what it put forth and kept back.",
  },
  {
    t: "infitar",
    q: "Umar ibn al-Khattab, after reciting {what has deceived you concerning your Lord, the Generous?}, said:",
    opts: [
      "By Allah, his ignorance has deceived him",
      "By Allah, his wealth has deceived him",
      "The Generous means only the noble messenger",
      "The question is addressed to the angels, not to sinners",
    ],
    ans: 0,
    fb: "Allah calls Himself generous here so that no one answers the Most Generous with evil and immoral deeds.",
  },
  {
    t: "infitar",
    q: "{In whatever form He willed has He assembled you} means:",
    opts: [
      "Every person is given the same form",
      "The form is chosen by the parents",
      "Allah made each person in the form He willed, so people resemble fathers, mothers, or uncles",
      "The graves assemble the bodies on their own",
    ],
    ans: 2,
    fb: "He also proportioned you and balanced you: upright, in the best shape. The overturning of the graves is singled out because the earth will throw out what was buried in them.",
  },
  {
    t: "infitar",
    q: "The keepers appointed over you are:",
    opts: [
      "The righteous people of this ummah",
      "Angels who are noble and who record the deeds, missing nothing",
      "Only the angel of death",
      "Human scribes in the market",
    ],
    ans: 1,
    fb: "They are honourable before Allah. The righteous find pleasure in remembering Him here, then bliss in al-barzakh and in Paradise. The wicked feel a kind of hell already, then torment in al-barzakh and in Hell.",
  },
  {
    t: "infitar",
    q: "{And never therefrom will they be absent} means the evildoers:",
    opts: [
      "Will not die, leave the Fire, or be given any respite from it",
      "Will be absent from Hell during the night",
      "May leave if another soul intercedes",
      "Will be in pleasure in al-barzakh",
    ],
    ans: 0,
    fb: "They enter Hell on the Day of Recompense and burn there. The repeated question stresses how momentous that Day is. The command that Day belongs entirely to Allah Alone.",
  },
  {
    t: "infitar",
    q: "The recording angels are described as noble so that we learn they:",
    opts: [
      "Record only the sins, not the good deeds",
      "May leave out a deed if the person is a ruler",
      "Write in a language only the angels know, so people cannot be judged",
      "Have integrity and will not record what a person did not do, or omit what he did",
    ],
    ans: 3,
    fb: "Whoever looks after the ummah’s affairs needs a caring attitude, noble character, literacy, and knowledge of his charge. On the Day of Resurrection, control over all matters belongs clearly to Allah Alone.",
  },
  {
    t: "mutaffifeen",
    q: "A mutaffif is so called because he:",
    opts: [
      "Steals a great deal in one weighing",
      "Refuses to trade at all",
      "Only steals a little when weighing and measuring",
      "Records deeds like the noble scribes",
    ],
    ans: 2,
    fb: "Tatfeef is giving less than is due. Wayl is a warning, and it was also said to be a valley in Hell flowing with pus.",
  },
  {
    t: "mutaffifeen",
    q: "When these people measure, they:",
    opts: [
      "Take in full for themselves and give others less than their due",
      "Give others more than they take",
      "Refuse both weighing and measuring",
      "Measure only for the poor",
    ],
    ans: 0,
    fb: "They dare to do this because they do not believe they will stand before Allah. For the believer that Day is as easy as an obligatory prayer.",
  },
  {
    t: "mutaffifeen",
    q: "The report in al-Bukhari and Muslim about this standing says:",
    opts: [
      "The graves will be left closed",
      "One of them will be submerged in his sweat to halfway up his ears",
      "The believer’s sweat will reach his knees only",
      "Wayl is the name of the market in Madinah",
    ],
    ans: 1,
    fb: "Nafi said Ibn Umar warned vendors of the same standing, until sweat comes half way up their ears. Sovereignty that Day belongs to Allah alone, the One, the Prevailing.",
  },
  {
    t: "mutaffifeen",
    q: "Zann in {Do they not think that they will be resurrected} is explained as:",
    opts: [
      "Only a doubtful guess, never certainty",
      "The name of short measure",
      "A valley in Hell",
      "Certainty, as the word is also used elsewhere in the Quran",
    ],
    ans: 3,
    fb: "Al-Khashshaf says the verse denounces their audacity. Short measure is serious, and taking wealth by force or stealth is even more deserving of the warning.",
  },
  {
    t: "mutaffifeen",
    q: "Sijjeen in these verses is:",
    opts: [
      "A valley of pus called wayl",
      "The seventh and lowest earth, from sijn, prison, where the evildoers’ record is kept",
      "The inscribed line added to a correct measure",
      "The name of the Madinan market",
    ],
    ans: 1,
    fb: "Kallaa rebukes those who think they will not be punished. The inscribed register describes that book: their fate is finished, with nothing added or taken away.",
  },
  {
    t: "mutaffifeen",
    q: "The root meaning of raan, the stain, is:",
    opts: [
      "Overwhelming or covering, as when alcohol overwhelms a person’s reason",
      "Giving short measure",
      "A fable of the former peoples",
      "Seeing Allah on the Day of Resurrection",
    ],
    ans: 0,
    fb: "At-Tirmidhi narrated that a black spot appears with each sin, is cleansed if the person repents, and grows until it covers the heart if he repeats it.",
  },
  {
    t: "mutaffifeen",
    q: "Ahl as-Sunnah wa'l-Jama'ah quote the partition verse to show that:",
    opts: [
      "No one will see Allah, righteous or wicked",
      "Only the evildoers are screened, so the righteous will see Him",
      "The partition is the stain of sin in this world only",
      "The deniers will enter Paradise after being rebuked",
    ],
    ans: 1,
    fb: "They are barred from seeing Allah just as they were barred from His verses. Then they burn in Hellfire, and it is said to them: This is what you used to deny.",
  },
  {
    t: "mutaffifeen",
    q: "‘Illiyyeen, compared with sijjeen, is:",
    opts: [
      "The same lowest earth, under another name",
      "A valley in Hell",
      "The highest, broadest part of Paradise, elevation upon elevation",
      "The name of the sealed wine",
    ],
    ans: 2,
    fb: "The abrar obey what Allah enjoins and avoid what He forbids. Their book is an inscribed register, witnessed when it is taken up.",
  },
  {
    t: "mutaffifeen",
    q: "Raheeq is:",
    opts: [
      "Pure, mature wine, with no intoxication and no headache",
      "The couch surrounded by curtains",
      "The spring that is drunk unmixed",
      "The stain that covers the heart",
    ],
    ans: 0,
    fb: "Allah gives it at the hands of the eternal servants. It is sealed until the righteous break the seal, and the last of it is musk.",
  },
  {
    t: "mutaffifeen",
    q: "Tasneem in these verses is:",
    opts: [
      "Only a curtain around the couches",
      "The noblest drink of Paradise, and a pure spring for those near to Allah",
      "The record kept in sijjeen",
      "Worldly wine, whose last sip smells bad",
    ],
    ans: 1,
    fb: "The race is for obeying Allah and for what pleases Him. Worldly competition is for something that soon ends.",
  },
  {
    t: "mutaffifeen",
    q: "Ghamz in {they would exchange derisive glances} means:",
    opts: [
      "A sealed drink of musk",
      "Signalling with the eyelids and eyebrows, and its root meaning is shame",
      "A couch of pearls and rubies",
      "Being sent as a guardian over the believers",
    ],
    ans: 1,
    fb: "They laughed at the believers, returned to their families jesting, and said of them, “Indeed, those are truly lost.”",
  },
  {
    t: "mutaffifeen",
    q: "{Have the disbelievers [not] been rewarded [this Day]?} is:",
    opts: [
      "A question that affirms they have been requited in full",
      "A denial that any requital will occur",
      "A prayer that wayl be removed from them",
      "A description of Tasneem",
    ],
    ans: 0,
    fb: "Thuwwiba is what comes back because of one’s actions, good or bad. The believers laugh from couches of pearls and rubies, observing the punishment.",
  },
  {
    t: "mutaffifeen",
    q: "Allah’s judgement, as these lessons state it, is:",
    opts: [
      "Justice for the believers and grace for the disbelievers",
      "The same for everyone, with no distinction",
      "Grace for those who believe, and justice for the disbelievers",
      "Left to the guardians the disbelievers appointed",
    ],
    ans: 2,
    fb: "The disbelievers were not sent as keepers over the believers. They were told to believe and to obey.",
  },
];

export function getTafsir2Lesson(id) {
  return TAFSIR2_LESSONS.find((lesson) => lesson.id === id);
}

export function tafsir2CoursePath() {
  return TAFSIR2_META.path;
}

export function tafsir2StudyPath(lessonId) {
  const base = `${TAFSIR2_META.path}/study`;
  return lessonId ? `${base}?lesson=${encodeURIComponent(lessonId)}` : base;
}

export function tafsir2Banner() {
  return {
    code: "Tafsir · Juz ‘Amma",
    title: TAFSIR2_META.name,
    subtitle: TAFSIR2_META.tagline,
    meta: [
      { label: "Surahs", value: "6" },
      { label: "Lessons", value: String(TAFSIR2_STUDY_LESSONS.length) },
      { label: "Practice", value: "Flashcards · Quiz" },
    ],
  };
}

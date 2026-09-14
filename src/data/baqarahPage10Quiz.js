/** Rigorous hifdh drill for Al-Baqarah 2:62–69 (mushaf page 10). */

export const PAGE_10_AYAHS = {
  62: "إِنَّ ٱلَّذِينَ ءَامَنُوا۟ وَٱلَّذِينَ هَادُوا۟ وَٱلنَّصَٰرَىٰ وَٱلصَّٰبِـِٔينَ مَنْ ءَامَنَ بِٱللَّهِ وَٱلْيَوْمِ ٱلْءَاخِرِ وَعَمِلَ صَٰلِحًۭا فَلَهُمْ أَجْرُهُمْ عِندَ رَبِّهِمْ وَلَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ",
  63: "وَإِذْ أَخَذْنَا مِيثَٰقَكُمْ وَرَفَعْنَا فَوْقَكُمُ ٱلطُّورَ خُذُوا۟ مَآ ءَاتَيْنَٰكُم بِقُوَّةٍۢ وَٱذْكُرُوا۟ مَا فِيهِ لَعَلَّكُمْ تَتَّقُونَ",
  64: "ثُمَّ تَوَلَّيْتُم مِّنۢ بَعْدِ ذَٰلِكَ ۖ فَلَوْلَا فَضْلُ ٱللَّهِ عَلَيْكُمْ وَرَحْمَتُهُۥ لَكُنتُم مِّنَ ٱلْخَٰسِرِينَ",
  65: "وَلَقَدْ عَلِمْتُمُ ٱلَّذِينَ ٱعْتَدَوْا۟ مِنكُمْ فِى ٱلسَّبْتِ فَقُلْنَا لَهُمْ كُونُوا۟ قِرَدَةً خَٰسِـِٔينَ",
  66: "فَجَعَلْنَٰهَا نَكَٰلًا لِّمَا بَيْنَ يَدَيْهَا وَمَا خَلْفَهَا وَمَوْعِظَةًۭ لِّلْمُتَّقِينَ",
  67: "وَإِذْ قَالَ مُوسَىٰ لِقَوْمِهِۦٓ إِنَّ ٱللَّهَ يَأْمُرُكُمْ أَن تَذْبَحُوا۟ بَقَرَةًۭ ۖ قَالُوٓا۟ أَتَتَّخِذُنَا هُزُوًۭا ۖ قَالَ أَعُوذُ بِٱللَّهِ أَنْ أَكُونَ مِنَ ٱلْجَٰهِلِينَ",
  68: "قَالُوا۟ ٱدْعُ لَنَا رَبَّكَ يُبَيِّن لَّنَا مَا هِىَ ۚ قَالَ إِنَّهُۥ يَقُولُ إِنَّهَا بَقَرَةٌۭ لَّا فَارِضٌۭ وَلَا بِكْرٌ عَوَانٌۢ بَيْنَ ذَٰلِكَ ۖ فَٱفْعَلُوا۟ مَا تُؤْمَرُونَ",
  69: "قَالُوا۟ ٱدْعُ لَنَا رَبَّكَ يُبَيِّن لَّنَا مَا لَوْنُهَا ۚ قَالَ إِنَّهُۥ يَقُولُ إِنَّهَا بَقَرَةٌۭ صَفْرَآءُ فَاقِعٌۭ لَّوْنُهَا تَسُرُّ ٱلنَّٰظِرِينَ",
};

export const PAGE_10_LESSONS = [
  {
    id: "map",
    title: "What is on this page?",
    story:
      "62 · reward for true belief → 63–64 · covenant & mount, then turned away → 65–66 · Sabbath apes, lesson for muttaqīn → 67–69 · slaughter a cow — mockery, then questions about age and colour.",
    tip: "Skip to Practice if you already know the flow — Drill mode is built for last-minute recall.",
  },
  {
    id: "full-text",
    title: "Read the page once",
    arabic: Object.values(PAGE_10_AYAHS).join("\n\n"),
    english: "Āyāt 62–69. Read slowly on the mushaf, then run Drill.",
    tip: "Watch transitions: 61→62 (يَعْتَدُونَ → إِنَّ), 66→67 (muttaqīn → Mūsā & cow), 68 vs 69 (مَا هِىَ vs مَا لَوْنُهَا).",
  },
  {
    id: "start-drill",
    title: "Ready to drill",
    story:
      "Drill mode fires the hardest questions in order: what comes next, fill the Arabic gap, spot the wrong line, build each āyah from phrases. Run it twice before reciting from memory.",
    tip: "Use Next phrase and Āyah build modes if one section keeps slipping.",
  },
];

export const PAGE_10_QUIZ_MODES = [
  {
    id: "drill",
    label: "Drill",
    description: "Rigorous mix — what comes next, gaps, traps, āyah order (recommended)",
  },
  {
    id: "next-phrase",
    label: "What comes next",
    description: "Given a phrase — pick the next Arabic line",
  },
  {
    id: "ayah-build",
    label: "Āyah build",
    description: "Reorder phrases within each āyah",
  },
  {
    id: "fill-blank",
    label: "Fill the gap",
    description: "Missing word in context",
  },
  {
    id: "traps",
    label: "Spot the mistake",
    description: "Which line matches the mushaf?",
  },
  {
    id: "all",
    label: "Full shuffle",
    description: "Everything mixed — exam mode",
  },
];

const AYAH_BUILD_SETS = [
  {
    ayah: 62,
    tokens: [
      { id: "62a", ar: "إِنَّ ٱلَّذِينَ ءَامَنُوا۟ وَٱلَّذِينَ هَادُوا۟ وَٱلنَّصَٰرَىٰ وَٱلصَّٰبِـِٔينَ" },
      { id: "62b", ar: "مَنْ ءَامَنَ بِٱللَّهِ وَٱلْيَوْمِ ٱلْءَاخِرِ وَعَمِلَ صَٰلِحًا" },
      { id: "62c", ar: "فَلَهُمْ أَجْرُهُمْ عِندَ رَبِّهِمْ وَلَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ" },
    ],
  },
  {
    ayah: 63,
    tokens: [
      { id: "63a", ar: "وَإِذْ أَخَذْنَا مِيثَٰقَكُمْ وَرَفَعْنَا فَوْقَكُمُ ٱلطُّورَ" },
      { id: "63b", ar: "خُذُوا۟ مَآ ءَاتَيْنَٰكُم بِقُوَّةٍۢ وَٱذْكُرُوا۟ مَا فِيهِ لَعَلَّكُمْ تَتَّقُونَ" },
    ],
  },
  {
    ayah: 64,
    tokens: [
      { id: "64a", ar: "ثُمَّ تَوَلَّيْتُم مِّنۢ بَعْدِ ذَٰلِكَ" },
      { id: "64b", ar: "فَلَوْلَا فَضْلُ ٱللَّهِ عَلَيْكُمْ وَرَحْمَتُهُۥ لَكُنتُم مِّنَ ٱلْخَٰسِرِينَ" },
    ],
  },
  {
    ayah: 65,
    tokens: [
      { id: "65a", ar: "وَلَقَدْ عَلِمْتُمُ ٱلَّذِينَ ٱعْتَدَوْا۟ مِنكُمْ فِى ٱلسَّبْتِ" },
      { id: "65b", ar: "فَقُلْنَا لَهُمْ كُونُوا۟ قِرَدَةً خَٰسِـِٔينَ" },
    ],
  },
  {
    ayah: 66,
    tokens: [
      { id: "66a", ar: "فَجَعَلْنَٰهَا نَكَٰلًا لِّمَا بَيْنَ يَدَيْهَا وَمَا خَلْفَهَا" },
      { id: "66b", ar: "وَمَوْعِظَةً لِّلْمُتَّقِينَ" },
    ],
  },
  {
    ayah: 67,
    tokens: [
      { id: "67a", ar: "وَإِذْ قَالَ مُوسَىٰ لِقَوْمِهِۦٓ إِنَّ ٱللَّهَ يَأْمُرُكُمْ أَن تَذْبَحُوا۟ بَقَرَةً" },
      { id: "67b", ar: "قَالُوٓا۟ أَتَتَّخِذُنَا هُزُوًا" },
      { id: "67c", ar: "قَالَ أَعُوذُ بِٱللَّهِ أَنْ أَكُونَ مِنَ ٱلْجَٰهِلِينَ" },
    ],
  },
  {
    ayah: 68,
    tokens: [
      { id: "68a", ar: "قَالُوا۟ ٱدْعُ لَنَا رَبَّكَ يُبَيِّن لَّنَا مَا هِىَ" },
      { id: "68b", ar: "قَالَ إِنَّهُۥ يَقُولُ إِنَّهَا بَقَرَةٌ لَّا فَارِضٌ وَلَا بِكْرٌ عَوَانٌ بَيْنَ ذَٰلِكَ" },
      { id: "68c", ar: "فَٱفْعَلُوا۟ مَا تُؤْمَرُونَ" },
    ],
  },
  {
    ayah: 69,
    tokens: [
      { id: "69a", ar: "قَالُوا۟ ٱدْعُ لَنَا رَبَّكَ يُبَيِّن لَّنَا مَا لَوْنُهَا" },
      { id: "69b", ar: "قَالَ إِنَّهُۥ يَقُولُ إِنَّهَا بَقَرَةٌ صَفْرَاءُ فَاقِعٌ لَّوْنُهَا تَسُرُّ ٱلنَّاظِرِينَ" },
    ],
  },
];

const AYAH_BUILD_QUESTIONS = AYAH_BUILD_SETS.map(({ ayah, tokens }) => ({
  id: `build-${ayah}`,
  mode: "ayah-build",
  type: "rearrange",
  prompt: `Āyah ${ayah} — order the phrases`,
  hint: `Opens: ${tokens[0].ar.slice(0, 28)}…`,
  tokens,
  correctOrder: tokens.map((token) => token.id),
  explain: `Full āyah ${ayah} on mushaf page 10.`,
}));

const NEXT_PHRASE_QUESTIONS = [
  {
    id: "next-61-62",
    mode: "next-phrase",
    type: "mcq",
    prompt: "Page 9 ended on يَعْتَدُونَ. What opens page 10?",
    phrase: "…وَّكَانُوا۟ يَعْتَدُونَ",
    options: [
      "إِنَّ ٱلَّذِينَ ءَامَنُوا۟",
      "وَإِذْ أَخَذْنَا مِيثَٰقَكُمْ",
      "وَلَقَدْ عَلِمْتُمُ",
    ],
    correct: "إِنَّ ٱلَّذِينَ ءَامَنُوا۟",
    explain: "Āyah 62 — not another وَإِذْ flashback.",
  },
  {
    id: "next-62b",
    mode: "next-phrase",
    type: "mcq",
    prompt: "What comes after the four groups in āyah 62?",
    phrase: "…وَٱلصَّٰبِـِٔينَ",
    options: [
      "مَنْ ءَامَنَ بِٱللَّهِ وَٱلْيَوْمِ ٱلْءَاخِرِ وَعَمِلَ صَٰلِحًا",
      "فَلَهُمْ أَجْرُهُمْ عِندَ رَبِّهِمْ",
      "وَإِذْ أَخَذْنَا مِيثَٰقَكُمْ",
    ],
    correct: "مَنْ ءَامَنَ بِٱللَّهِ وَٱلْيَوْمِ ٱلْءَاخِرِ وَعَمِلَ صَٰلِحًا",
    explain: "Three conditions before the reward.",
  },
  {
    id: "next-62c",
    mode: "next-phrase",
    type: "mcq",
    prompt: "After the conditions in 62 — reward clause:",
    phrase: "…وَعَمِلَ صَٰلِحًا",
    options: [
      "فَلَهُمْ أَجْرُهُمْ عِندَ رَبِّهِمْ",
      "وَلَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ",
      "ثُمَّ تَوَلَّيْتُم",
    ],
    correct: "فَلَهُمْ أَجْرُهُمْ عِندَ رَبِّهِمْ",
    explain: "Then: no fear, no grief.",
  },
  {
    id: "next-62-63",
    mode: "next-phrase",
    type: "mcq",
    prompt: "Āyah 62 ends. What is the next āyah?",
    phrase: "…وَلَا هُمْ يَحْزَنُونَ",
    options: [
      "وَإِذْ أَخَذْنَا مِيثَٰقَكُمْ وَرَفَعْنَا فَوْقَكُمُ ٱلطُّورَ",
      "وَلَقَدْ عَلِمْتُمُ ٱلَّذِينَ ٱعْتَدَوْا۟",
      "وَإِذْ قَالَ مُوسَىٰ لِقَوْمِهِۦٓ",
    ],
    correct: "وَإِذْ أَخَذْنَا مِيثَٰقَكُمْ وَرَفَعْنَا فَوْقَكُمُ ٱلطُّورَ",
    explain: "Āyah 63 — covenant flashback.",
  },
  {
    id: "next-63b",
    mode: "next-phrase",
    type: "mcq",
    prompt: "After the mount is raised — Allah commands:",
    phrase: "…وَرَفَعْنَا فَوْقَكُمُ ٱلطُّورَ",
    options: [
      "خُذُوا۟ مَآ ءَاتَيْنَٰكُم بِقُوَّةٍۢ وَٱذْكُرُوا۟ مَا فِيهِ",
      "ثُمَّ تَوَلَّيْتُم مِّنۢ بَعْدِ ذَٰلِكَ",
      "كُونُوا۟ قِرَدَةً خَٰسِـِٔينَ",
    ],
    correct: "خُذُوا۟ مَآ ءَاتَيْنَٰكُم بِقُوَّةٍۢ وَٱذْكُرُوا۟ مَا فِيهِ",
    explain: "Take with strength · remember · لَعَلَّكُمْ تَتَّقُونَ",
  },
  {
    id: "next-63-64",
    mode: "next-phrase",
    type: "mcq",
    prompt: "After āyah 63 (covenant):",
    phrase: "…لَعَلَّكُمْ تَتَّقُونَ",
    options: [
      "ثُمَّ تَوَلَّيْتُم مِّنۢ بَعْدِ ذَٰلِكَ",
      "فَجَعَلْنَٰهَا نَكَٰلًا",
      "إِنَّ ٱلَّذِينَ ءَامَنُوا۟",
    ],
    correct: "ثُمَّ تَوَلَّيْتُم مِّنۢ بَعْدِ ذَٰلِكَ",
    explain: "Āyah 64 — you turned away.",
  },
  {
    id: "next-64-65",
    mode: "next-phrase",
    type: "mcq",
    prompt: "After āyah 64:",
    phrase: "…لَكُنتُم مِّنَ ٱلْخَٰسِرِينَ",
    options: [
      "وَلَقَدْ عَلِمْتُمُ ٱلَّذِينَ ٱعْتَدَوْا۟ مِنكُمْ فِى ٱلسَّبْتِ",
      "وَإِذْ قَالَ مُوسَىٰ",
      "فَلَهُمْ أَجْرُهُمْ",
    ],
    correct: "وَلَقَدْ عَلِمْتُمُ ٱلَّذِينَ ٱعْتَدَوْا۟ مِنكُمْ فِى ٱلسَّبْتِ",
    explain: "Āyah 65 — Sabbath.",
  },
  {
    id: "next-65b",
    mode: "next-phrase",
    type: "mcq",
    prompt: "Sabbath transgression — punishment:",
    phrase: "…فِى ٱلسَّبْتِ",
    options: [
      "فَقُلْنَا لَهُمْ كُونُوا۟ قِرَدَةً خَٰسِـِٔينَ",
      "فَجَعَلْنَٰهَا نَكَٰلًا لِّمَا بَيْنَ يَدَيْهَا",
      "أَتَتَّخِذُنَا هُزُوًا",
    ],
    correct: "فَقُلْنَا لَهُمْ كُونُوا۟ قِرَدَةً خَٰسِـِٔينَ",
    explain: "Be apes, despised.",
  },
  {
    id: "next-65-66",
    mode: "next-phrase",
    type: "mcq",
    prompt: "After āyah 65:",
    phrase: "…قِرَدَةً خَٰسِـِٔينَ",
    options: [
      "فَجَعَلْنَٰهَا نَكَٰلًا لِّمَا بَيْنَ يَدَيْهَا وَمَا خَلْفَهَا",
      "وَإِذْ قَالَ مُوسَىٰ لِقَوْمِهِۦٓ",
      "ثُمَّ تَوَلَّيْتُم",
    ],
    correct: "فَجَعَلْنَٰهَا نَكَٰلًا لِّمَا بَيْنَ يَدَيْهَا وَمَا خَلْفَهَا",
    explain: "Āyah 66 — deterrent for others.",
  },
  {
    id: "next-66-67",
    mode: "next-phrase",
    type: "mcq",
    prompt: "Page moves from Sabbath to the cow. After 66:",
    phrase: "…لِّلْمُتَّقِينَ",
    options: [
      "وَإِذْ قَالَ مُوسَىٰ لِقَوْمِهِۦٓ إِنَّ ٱللَّهَ يَأْمُرُكُمْ أَن تَذْبَحُوا۟ بَقَرَةً",
      "قَالُوا۟ ٱدْعُ لَنَا رَبَّكَ",
      "وَلَقَدْ عَلِمْتُمُ",
    ],
    correct: "وَإِذْ قَالَ مُوسَىٰ لِقَوْمِهِۦٓ إِنَّ ٱللَّهَ يَأْمُرُكُمْ أَن تَذْبَحُوا۟ بَقَرَةً",
    explain: "Āyah 67 opens the cow story.",
  },
  {
    id: "next-67b",
    mode: "next-phrase",
    type: "mcq",
    prompt: "After the cow command — their reply:",
    phrase: "…أَن تَذْبَحُوا۟ بَقَرَةً ۖ",
    options: [
      "قَالُوٓا۟ أَتَتَّخِذُنَا هُزُوًا",
      "قَالَ أَعُوذُ بِٱللَّهِ",
      "فَٱفْعَلُوا۟ مَا تُؤْمَرُونَ",
    ],
    correct: "قَالُوٓا۟ أَتَتَّخِذُنَا هُزُوًا",
    explain: "They mock him first.",
  },
  {
    id: "next-67c",
    mode: "next-phrase",
    type: "mcq",
    prompt: "After their mockery — Mūsā:",
    phrase: "…أَتَتَّخِذُنَا هُزُوًا ۖ",
    options: [
      "قَالَ أَعُوذُ بِٱللَّهِ أَنْ أَكُونَ مِنَ ٱلْجَٰهِلِينَ",
      "قَالُوا۟ ٱدْعُ لَنَا رَبَّكَ يُبَيِّن لَّنَا مَا هِىَ",
      "إِنَّهَا بَقَرَةٌ صَفْرَاءُ",
    ],
    correct: "قَالَ أَعُوذُ بِٱللَّهِ أَنْ أَكُونَ مِنَ ٱلْجَٰهِلِينَ",
    explain: "Seeks refuge from being among the ignorant.",
  },
  {
    id: "next-67-68",
    mode: "next-phrase",
    type: "mcq",
    prompt: "New āyah after 67:",
    phrase: "…ٱلْجَٰهِلِينَ",
    options: [
      "قَالُوا۟ ٱدْعُ لَنَا رَبَّكَ يُبَيِّن لَّنَا مَا هِىَ",
      "قَالُوا۟ ٱدْعُ لَنَا رَبَّكَ يُبَيِّن لَّنَا مَا لَوْنُهَا",
      "فَجَعَلْنَٰهَا نَكَٰلًا",
    ],
    correct: "قَالُوا۟ ٱدْعُ لَنَا رَبَّكَ يُبَيِّن لَّنَا مَا هِىَ",
    explain: "68 asks what it is — not colour yet.",
  },
  {
    id: "next-68b",
    mode: "next-phrase",
    type: "mcq",
    prompt: "Allah's answer on age (68):",
    phrase: "…يُبَيِّن لَّنَا مَا هِىَ ۚ",
    options: [
      "قَالَ إِنَّهُۥ يَقُولُ إِنَّهَا بَقَرَةٌ لَّا فَارِضٌ وَلَا بِكْرٌ عَوَانٌ بَيْنَ ذَٰلِكَ",
      "قَالَ إِنَّهُۥ يَقُولُ إِنَّهَا بَقَرَةٌ صَفْرَاءُ",
      "فَقُلْنَا لَهُمْ كُونُوا۟ قِرَدَةً",
    ],
    correct: "قَالَ إِنَّهُۥ يَقُولُ إِنَّهَا بَقَرَةٌ لَّا فَارِضٌ وَلَا بِكْرٌ عَوَانٌ بَيْنَ ذَٰلِكَ",
    explain: "Not old · not young · middle-aged.",
  },
  {
    id: "next-68c",
    mode: "next-phrase",
    type: "mcq",
    prompt: "Āyah 68 closes:",
    phrase: "…عَوَانٌ بَيْنَ ذَٰلِكَ ۖ",
    options: [
      "فَٱفْعَلُوا۟ مَا تُؤْمَرُونَ",
      "تَسُرُّ ٱلنَّٰظِرِينَ",
      "لَعَلَّكُمْ تَتَّقُونَ",
    ],
    correct: "فَٱفْعَلُوا۟ مَا تُؤْمَرُونَ",
    explain: "Just obey — end of 68.",
  },
  {
    id: "next-68-69",
    mode: "next-phrase",
    type: "mcq",
    prompt: "They ask again (69) — same opening, different question:",
    phrase: "قَالُوا۟ ٱدْعُ لَنَا رَبَّكَ يُبَيِّن لَّنَا",
    options: [
      "مَا لَوْنُهَا",
      "مَا هِىَ",
      "مَا شَأْنُهَا",
    ],
    correct: "مَا لَوْنُهَا",
    explain: "69 = colour. 68 = what it is.",
  },
  {
    id: "next-69-end",
    mode: "next-phrase",
    type: "mcq",
    prompt: "Page 10 ends on:",
    phrase: "…صَفْرَاءُ فَاقِعٌ لَّوْنُهَا",
    options: [
      "تَسُرُّ ٱلنَّٰظِرِينَ",
      "فَٱفْعَلُوا۟ مَا تُؤْمَرُونَ",
      "لَكُنتُم مِّنَ ٱلْخَٰسِرِينَ",
    ],
    correct: "تَسُرُّ ٱلنَّٰظِرِينَ",
    explain: "Last words on page 10.",
  },
];

const FILL_BLANK_QUESTIONS = [
  {
    id: "fill-hadoo",
    mode: "fill-blank",
    type: "mcq",
    prompt: "Āyah 62 — after believers:",
    segments: ["وَٱلَّذِينَ ", null, " وَٱلنَّصَٰرَىٰ"],
    options: ["هَادُوا۟", "نَصَارَىٰ", "صَابِـُٔوا۟"],
    correct: "هَادُوا۟",
    explain: "Jews — هَادُوا۟.",
  },
  {
    id: "fill-sabiin",
    mode: "fill-blank",
    type: "mcq",
    prompt: "Fourth group in 62:",
    segments: ["وَٱلنَّصَٰرَىٰ وَ", null],
    options: ["ٱلصَّٰبِـِٔينَ", "ٱلْمُنَٰفِقِينَ", "ٱلْمُشْرِكِينَ"],
    correct: "ٱلصَّٰبِـِٔينَ",
    explain: "Sabaeans.",
  },
  {
    id: "fill-mithaq",
    mode: "fill-blank",
    type: "mcq",
    prompt: "Āyah 63:",
    segments: ["وَإِذْ أَخَذْنَا ", null, " وَرَفَعْنَا فَوْقَكُمُ ٱلطُّورَ"],
    options: ["مِيثَٰقَكُمْ", "عَهْدَكُمْ", "كِتَٰبَكُمْ"],
    correct: "مِيثَٰقَكُمْ",
    explain: "Covenant.",
  },
  {
    id: "fill-tur",
    mode: "fill-blank",
    type: "mcq",
    prompt: "Raised above them:",
    segments: ["وَرَفَعْنَا فَوْقَكُمُ ", null],
    options: ["ٱلطُّورَ", "ٱلْعَرْشَ", "ٱلْجَبَلَ"],
    correct: "ٱلطُّورَ",
    explain: "Mount Ṭūr.",
  },
  {
    id: "fill-quwwah",
    mode: "fill-blank",
    type: "mcq",
    prompt: "Take the revelation:",
    segments: ["خُذُوا۟ مَآ ءَاتَيْنَٰكُم بِ", null],
    options: ["قُوَّةٍ", "رَحْمَةٍ", "حِكْمَةٍ"],
    correct: "قُوَّةٍ",
    explain: "With firm resolve.",
  },
  {
    id: "fill-taqwa",
    mode: "fill-blank",
    type: "mcq",
    prompt: "End of 63:",
    segments: ["لَعَلَّكُمْ ", null],
    options: ["تَتَّقُونَ", "تَشْكُرُونَ", "تَهْتَدُونَ"],
    correct: "تَتَّقُونَ",
    explain: "Perhaps you will have taqwā.",
  },
  {
    id: "fill-tawalla",
    mode: "fill-blank",
    type: "mcq",
    prompt: "Āyah 64 opens:",
    segments: [null, " مِّنۢ بَعْدِ ذَٰلِكَ"],
    options: ["ثُمَّ تَوَلَّيْتُم", "ثُمَّ عَصَيْتُم", "ثُمَّ نَسِيتُم"],
    correct: "ثُمَّ تَوَلَّيْتُم",
    explain: "Turned away.",
  },
  {
    id: "fill-khasirin",
    mode: "fill-blank",
    type: "mcq",
    prompt: "Without Allah's favour:",
    segments: ["لَكُنتُم مِّنَ ", null],
    options: ["ٱلْخَٰسِرِينَ", "ٱلْمُفْلِحِينَ", "ٱلْمُحْسِنِينَ"],
    correct: "ٱلْخَٰسِرِينَ",
    explain: "The losers.",
  },
  {
    id: "fill-sabbath",
    mode: "fill-blank",
    type: "mcq",
    prompt: "They transgressed on:",
    segments: ["ٱعْتَدَوْا۟ مِنكُمْ فِى ", null],
    options: ["ٱلسَّبْتِ", "ٱلْقُرْآنِ", "ٱلْبَيْتِ"],
    correct: "ٱلسَّبْتِ",
    explain: "The Sabbath.",
  },
  {
    id: "fill-qirda",
    mode: "fill-blank",
    type: "mcq",
    prompt: "Sabbath punishment:",
    segments: ["كُونُوا۟ ", null, " خَٰسِـِٔينَ"],
    options: ["قِرَدَةً", "خَنَازِيرَ", "هِرَةً"],
    correct: "قِرَدَةً",
    explain: "Apes — قِرَدَةً.",
  },
  {
    id: "fill-muttaqin",
    mode: "fill-blank",
    type: "mcq",
    prompt: "Lesson in 66 for:",
    segments: ["مَوْعِظَةً لِّلْ", null],
    options: ["مُتَّقِينَ", "ظَٰلِمِينَ", "كَٰفِرِينَ"],
    correct: "مُتَّقِينَ",
    explain: "The God-conscious.",
  },
  {
    id: "fill-baqara",
    mode: "fill-blank",
    type: "mcq",
    prompt: "Allah commands:",
    segments: ["يَأْمُرُكُمْ أَن تَذْبَحُوا۟ ", null],
    options: ["بَقَرَةً", "شَاةً", "جَزُورًا"],
    correct: "بَقَرَةً",
    explain: "A cow.",
  },
  {
    id: "fill-huzuw",
    mode: "fill-blank",
    type: "mcq",
    prompt: "Their mockery:",
    segments: ["أَتَتَّخِذُنَا ", null],
    options: ["هُزُوًا", "عِبَادًا", "سُخْرِيًا"],
    correct: "هُزُوًا",
    explain: "In ridicule.",
  },
  {
    id: "fill-jahilin",
    mode: "fill-blank",
    type: "mcq",
    prompt: "Mūsā seeks refuge from:",
    segments: ["أَنْ أَكُونَ مِنَ ", null],
    options: ["ٱلْجَٰهِلِينَ", "ٱلظَّٰلِمِينَ", "ٱلْكَٰفِرِينَ"],
    correct: "ٱلْجَٰهِلِينَ",
    explain: "The ignorant.",
  },
  {
    id: "fill-farid",
    mode: "fill-blank",
    type: "mcq",
    prompt: "Cow — not too old:",
    segments: ["بَقَرَةٌ لَّا ", null, " وَلَا بِكْرٌ"],
    options: ["فَارِضٌ", "عَوَانٌ", "ذَلُولٌ"],
    correct: "فَارِضٌ",
    explain: "فَارِض — past prime.",
  },
  {
    id: "fill-bikr",
    mode: "fill-blank",
    type: "mcq",
    prompt: "Nor too young:",
    segments: ["لَّا فَارِضٌ وَلَا ", null, " عَوَانٌ"],
    options: ["بِكْرٌ", "فَصِيلٌ", "سَنَةٌ"],
    correct: "بِكْرٌ",
    explain: "بِكْر — young cow.",
  },
  {
    id: "fill-safra",
    mode: "fill-blank",
    type: "mcq",
    prompt: "Colour (69):",
    segments: ["بَقَرَةٌ ", null, " فَاقِعٌ لَّوْنُهَا"],
    options: ["صَفْرَاءُ", "بَيْضَاءُ", "سَوْدَاءُ"],
    correct: "صَفْرَاءُ",
    explain: "Yellow.",
  },
  {
    id: "fill-nazirin",
    mode: "fill-blank",
    type: "mcq",
    prompt: "Last words on page 10:",
    segments: ["تَسُرُّ ", null],
    options: ["ٱلنَّٰظِرِينَ", "ٱلْمُؤْمِنِينَ", "ٱلْحَاضِرِينَ"],
    correct: "ٱلنَّٰظِرِينَ",
    explain: "Pleasing to onlookers.",
  },
];

const TRAP_QUESTIONS = [
  {
    id: "trap-62-ending",
    mode: "traps",
    type: "whichCorrect",
    prompt: "Āyah 62 ending — which matches the mushaf?",
    options: [
      { id: "a", ar: "وَلَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ" },
      { id: "b", ar: "وَلَا هُمْ يَحْزَنُونَ وَلَا خَوْفٌ عَلَيْهِمْ" },
      { id: "c", ar: "وَلَا خَوْفٌ عَلَيْهِمْ وَلَا يَحْزَنُونَ" },
    ],
    correct: "a",
    explain: "خَوْف first; هُمْ before يَحْزَنُونَ.",
  },
  {
    id: "trap-63-vs-7171",
    mode: "traps",
    type: "whichCorrect",
    prompt: "Āyah 63 (not 7:171):",
    options: [
      { id: "a", ar: "وَٱذْكُرُوا۟ مَا فِيهِ لَعَلَّكُمْ تَتَّقُونَ" },
      { id: "b", ar: "قَالُوا۟ سَمِعْنَا وَعَصَيْنَا" },
      { id: "c", ar: "وَقُولُوا۟ حِطَّةٌ نَّغْفِرْ لَكُمْ" },
    ],
    correct: "a",
    explain: "Remember for taqwā — not سَمِعْنَا وَعَصَيْنَا.",
  },
  {
    id: "trap-68-vs-69",
    mode: "traps",
    type: "whichCorrect",
    prompt: "Which is āyah 69 (colour)?",
    options: [
      { id: "a", ar: "يُبَيِّن لَّنَا مَا لَوْنُهَا … صَفْرَاءُ … تَسُرُّ ٱلنَّٰظِرِينَ" },
      { id: "b", ar: "يُبَيِّن لَّنَا مَا هِىَ … لَّا فَارِضٌ … فَٱفْعَلُوا۟ مَا تُؤْمَرُونَ" },
      { id: "c", ar: "لَّا ذَلُولٌ تُثِيرُ ٱلْأَرْضَ وَلَا تَسْقِى ٱلْحَرْثَ" },
    ],
    correct: "a",
    explain: "b = 68. c = 71 (page 11).",
  },
  {
    id: "trap-cow-age-order",
    mode: "traps",
    type: "whichCorrect",
    prompt: "Cow age description (68):",
    options: [
      { id: "a", ar: "لَّا فَارِضٌ وَلَا بِكْرٌ عَوَانٌ بَيْنَ ذَٰلِكَ" },
      { id: "b", ar: "لَّا بِكْرٌ وَلَا فَارِضٌ عَوَانٌ بَيْنَ ذَٰلِكَ" },
      { id: "c", ar: "عَوَانٌ بَيْنَ ذَٰلِكَ لَّا فَارِضٌ وَلَا بِكْرٌ" },
    ],
    correct: "a",
    explain: "Old first · young second · middle last.",
  },
  {
    id: "trap-68-69-opening",
    mode: "traps",
    type: "whichCorrect",
    prompt: "Both 68 & 69 open the same — which is 68's question?",
    options: [
      { id: "a", ar: "قَالُوا۟ ٱدْعُ لَنَا رَبَّكَ يُبَيِّن لَّنَا مَا هِىَ" },
      { id: "b", ar: "قَالُوا۟ ٱدْعُ لَنَا رَبَّكَ يُبَيِّن لَّنَا مَا لَوْنُهَا" },
      { id: "c", ar: "قَالُوا۟ ٱدْعُ لَنَا رَبَّكَ يُبَيِّن لَّنَا مَا شَأْنُهَا" },
    ],
    correct: "a",
    explain: "مَا هِىَ = type. مَا لَوْنُهَا = colour.",
  },
  {
    id: "trap-groups-order",
    mode: "traps",
    type: "whichCorrect",
    prompt: "Four groups in āyah 62:",
    options: [
      { id: "a", ar: "ءَامَنُوا۟ … هَادُوا۟ … ٱلنَّصَٰرَىٰ … ٱلصَّٰبِـِٔينَ" },
      { id: "b", ar: "هَادُوا۟ … ءَامَنُوا۟ … ٱلصَّٰبِـِٔينَ … ٱلنَّصَٰرَىٰ" },
      { id: "c", ar: "ءَامَنُوا۟ … ٱلنَّصَٰرَىٰ … هَادُوا۟ … ٱلصَّٰبِـِٔينَ" },
    ],
    correct: "a",
    explain: "Believers · Jews · Christians · Sabaeans.",
  },
];

export const PAGE_10_QUESTIONS = [
  ...NEXT_PHRASE_QUESTIONS,
  ...FILL_BLANK_QUESTIONS,
  ...TRAP_QUESTIONS,
  ...AYAH_BUILD_QUESTIONS,
];

/** Rigorous fixed order for last-minute drill. */
const DRILL_ORDER = [
  "next-61-62",
  "build-62",
  "next-62-63",
  "fill-mithaq",
  "fill-tur",
  "build-63",
  "next-63-64",
  "fill-tawalla",
  "build-64",
  "next-64-65",
  "fill-qirda",
  "build-65",
  "next-65-66",
  "build-66",
  "next-66-67",
  "fill-huzuw",
  "build-67",
  "next-67-68",
  "trap-68-69-opening",
  "build-68",
  "next-68-69",
  "fill-safra",
  "build-69",
  "trap-68-vs-69",
  "next-69-end",
];

function shuffleArray(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

function prepareRearrange(question) {
  return {
    ...question,
    tokens: shuffleArray(question.tokens),
  };
}

export function buildPage10QuizDeck(modeId = "drill") {
  if (modeId === "drill") {
    const byId = new Map(PAGE_10_QUESTIONS.map((q) => [q.id, q]));
    return DRILL_ORDER.map((id) => byId.get(id))
      .filter(Boolean)
      .map((question) =>
        question.type === "rearrange" ? prepareRearrange(question) : question,
      );
  }

  const pool =
    modeId === "all"
      ? PAGE_10_QUESTIONS
      : PAGE_10_QUESTIONS.filter((question) => question.mode === modeId);

  return shuffleArray(pool).map((question) =>
    question.type === "rearrange" ? prepareRearrange(question) : question,
  );
}

export function getPage10QuizMode(modeId) {
  return PAGE_10_QUIZ_MODES.find((mode) => mode.id === modeId) ?? PAGE_10_QUIZ_MODES[0];
}

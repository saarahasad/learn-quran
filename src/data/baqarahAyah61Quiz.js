/** Memorization & learning content for Al-Baqarah 2:61 (mushaf page 9). */

export const AYAH_61_FULL_ARABIC =
  "وَإِذْ قُلْتُمْ يَٰمُوسَىٰ لَن نَّصْبِرَ عَلَىٰ طَعَامٍ وَٰحِدٍ فَٱدْعُ لَنَا رَبَّكَ يُخْرِجْ لَنَا مِمَّا تُنبِتُ ٱلْأَرْضُ مِن بَقْلِهَا وَقِثَّآئِهَا وَفُومِهَا وَعَدَسِهَا وَبَصَلِهَا ۖ قَالَ أَتَسْتَبْدِلُونَ ٱلَّذِى هُوَ أَدْنَىٰ بِٱلَّذِى هُوَ خَيْرٌ ۚ ٱهْبِطُوا۟ مِصْرًا فَإِنَّ لَكُم مَّا سَأَلْتُمْ ۗ وَضُرِبَتْ عَلَيْهِمُ ٱلذِّلَّةُ وَٱلْمَسْكَنَةُ وَبَآءُو بِغَضَبٍ مِّنَ ٱللَّهِ ۗ ذَٰلِكَ بِأَنَّهُمْ كَانُوا۟ يَكْفُرُونَ بِـَٔايَٰتِ ٱللَّهِ وَيَقْتُلُونَ ٱلنَّبِيِّۦنَ بِغَيْرِ ٱلْحَقِّ ۗ ذَٰلِكَ بِمَا عَصَوا۟ وَّكَانُوا۟ يَعْتَدُونَ";

export const AYAH_61_FOODS = [
  { id: "bql", ar: "بَقْلِهَا", en: "herbs / vegetables", hint: "بَقْل — leafy greens" },
  { id: "qth", ar: "قِثَّآئِهَا", en: "cucumbers", hint: "قِثَّاء — long green vegetable" },
  { id: "fwm", ar: "فُومِهَا", en: "garlic", hint: "فُوم — strong-smelling bulb" },
  { id: "ads", ar: "عَدَسِهَا", en: "lentils", hint: "عَدَس — small round legume" },
  { id: "bsl", ar: "بَصَلِهَا", en: "onions", hint: "بَصَل — last in the list" },
];

/** Step-by-step lesson — start here if the āyah is new. */
export const AYAH_61_LESSONS = [
  {
    id: "overview",
    title: "The story in one minute",
    story:
      "Allah had already sent mann (sweet provision from the sky) and quails to the Children of Israel. Instead of being grateful, they complained to Mūsā (عليه السلام): we cannot eat only one kind of food. They demanded vegetables from the earth. Mūsā rebuked them for wanting less instead of better. They were told to go down to Egypt — and humiliation, poverty, and Allah's anger followed. The āyah ends by naming their sins: disbelief, killing prophets, disobedience, and transgression.",
    tip: "Read each step below slowly. You do not need to memorise yet — just understand the flow.",
  },
  {
    id: "opening",
    title: "Part 1 · The complaint",
    arabic: "وَإِذْ قُلْتُمْ يَٰمُوسَىٰ لَن نَّصْبِرَ عَلَىٰ طَعَامٍ وَٰحِدٍ",
    english:
      "And [recall] when you said, O Moses, we can never endure one [kind of] food.",
    words: [
      { ar: "وَإِذْ", en: "And [recall] when" },
      { ar: "قُلْتُمْ", en: "you (all) said" },
      { ar: "يَٰمُوسَىٰ", en: "O Moses" },
      { ar: "لَن نَّصْبِرَ", en: "we can never be patient / endure" },
      { ar: "طَعَامٍ وَٰحِدٍ", en: "one food (mann & quails — they called it 'one')" },
    ],
    tip: "وَإِذْ opens a flashback — Allah is reminding them of what they said.",
  },
  {
    id: "request",
    title: "Part 2 · The rude request",
    arabic: "فَٱدْعُ لَنَا رَبَّكَ يُخْرِجْ لَنَا مِمَّا تُنبِتُ ٱلْأَرْضُ",
    english:
      "So call upon your Lord for us to bring forth for us from what the earth grows.",
    words: [
      { ar: "فَٱدْعُ", en: "so call / supplicate" },
      { ar: "لَنَا رَبَّكَ", en: "for us — your Lord (impolite)" },
      { ar: "يُخْرِجْ لَنَا", en: "to bring out for us" },
      { ar: "مِمَّا تُنبِتُ ٱلْأَرْضُ", en: "from what the earth grows" },
    ],
    tip: "They would not ask Allah themselves — they order Mūsā to call 'your Lord' for them.",
  },
  {
    id: "foods",
    title: "Part 3 · The five foods (memorise this list!)",
    arabic: "مِن بَقْلِهَا وَقِثَّآئِهَا وَفُومِهَا وَعَدَسِهَا وَبَصَلِهَا",
    english: "Its herbs, cucumbers, garlic, lentils, and onions.",
    foods: AYAH_61_FOODS,
    tip: "Order: Herbs → Cucumbers → Garlic → Lentils → Onions. Say the English names in order five times before moving on.",
  },
  {
    id: "moses-reply",
    title: "Part 4 · Mūsā's rebuke",
    arabic: "قَالَ أَتَسْتَبْدِلُونَ ٱلَّذِى هُوَ أَدْنَىٰ بِٱلَّذِى هُوَ خَيْرٌ",
    english:
      "[Moses] said: Would you exchange that which is lower for that which is better?",
    words: [
      { ar: "قَالَ", en: "he said" },
      { ar: "أَتَسْتَبْدِلُونَ", en: "would you exchange / replace?" },
      { ar: "ٱلَّذِى هُوَ أَدْنَىٰ", en: "that which is lower / lesser" },
      { ar: "بِٱلَّذِى هُوَ خَيْرٌ", en: "for that which is better" },
    ],
    tip: "Mann & quails from Allah = خَيْرٌ (better). Vegetables from the earth = أَدْنَىٰ (lower).",
  },
  {
    id: "egypt",
    title: "Part 5 · Go down to Egypt",
    arabic: "ٱهْبِطُوا۟ مِصْرًا فَإِنَّ لَكُم مَّا سَأَلْتُمْ",
    english: "Go down to Egypt — indeed you will have what you asked for.",
    words: [
      { ar: "ٱهْبِطُوا۟", en: "go down / descend" },
      { ar: "مِصْرًا", en: "Egypt (or: a city)" },
      { ar: "فَإِنَّ لَكُم مَّا سَأَلْتُمْ", en: "so indeed you will have what you asked" },
    ],
    tip: "They get what they wanted — but not as a blessing. It comes with consequences.",
  },
  {
    id: "punishment",
    title: "Part 6 · Humiliation, poverty, anger",
    arabic: "وَضُرِبَتْ عَلَيْهِمُ ٱلذِّلَّةُ وَٱلْمَسْكَنَةُ وَبَآءُو بِغَضَبٍ مِّنَ ٱللَّهِ",
    english:
      "And humiliation and poverty were struck upon them, and they returned with anger from Allah.",
    words: [
      { ar: "وَضُرِبَتْ", en: "were struck / cast upon them" },
      { ar: "ٱلذِّلَّةُ", en: "humiliation" },
      { ar: "ٱلْمَسْكَنَةُ", en: "poverty / misery" },
      { ar: "وَبَآءُوا", en: "they returned (bearing…)" },
      { ar: "بِغَضَبٍ مِّنَ ٱللَّهِ", en: "with anger from Allah" },
    ],
    tip: "Order matters: ذِلَّة first, then مَسْكَنَة, then Allah's غَضَب. Linked to al-Fātiḥah 1:7 — al-maghḍūb ʿalayhim.",
  },
  {
    id: "first-dhalika",
    title: "Part 7 · First ذَٰلِكَ — why?",
    arabic:
      "ذَٰلِكَ بِأَنَّهُمْ كَانُوا۟ يَكْفُرُونَ بِـَٔايَٰتِ ٱللَّهِ وَيَقْتُلُونَ ٱلنَّبِيِّۦنَ بِغَيْرِ ٱلْحَقِّ",
    english:
      "That was because they disbelieved in the signs of Allah and killed the prophets without right.",
    words: [
      { ar: "ذَٰلِكَ بِأَنَّهُمْ", en: "that was because they" },
      { ar: "يَكْفُرُونَ بِـَٔايَٰتِ ٱللَّهِ", en: "disbelieved in Allah's signs" },
      { ar: "وَيَقْتُلُونَ ٱلنَّبِيِّۦنَ", en: "and killed the prophets" },
      { ar: "بِغَيْرِ ٱلْحَقِّ", en: "without right / without truth" },
    ],
    tip: "Two sins here: (1) kufr in āyāt, (2) killing anbiyāʾ. Kufr comes before killing.",
  },
  {
    id: "second-dhalika",
    title: "Part 8 · Second ذَٰلِكَ — the close",
    arabic: "ذَٰلِكَ بِمَا عَصَوا۟ وَّكَانُوا۟ يَعْتَدُونَ",
    english: "That was because they disobeyed and were habitually transgressing.",
    words: [
      { ar: "ذَٰلِكَ بِمَا", en: "that was because of what" },
      { ar: "عَصَوا۟", en: "they disobeyed" },
      { ar: "وَّكَانُوا۟ يَعْتَدُونَ", en: "and they were transgressing" },
    ],
    tip: "Do not confuse the two endings: first ذَٰلِكَ → يَكْفُرُونَ; second ذَٰلِكَ → يَعْتَدُونَ.",
  },
  {
    id: "full-recap",
    title: "Full āyah — read it through",
    arabic: AYAH_61_FULL_ARABIC,
    english:
      "Read the complete āyah on the mushaf (page 9) while following along here. Go slowly — one phrase at a time.",
    tip: "When you can read it without stumbling, switch to Practice and start with Beginner mode.",
  },
];

export const AYAH_61_QUIZ_MODES = [
  {
    id: "beginner",
    label: "Beginner",
    description: "English prompts, word meanings, story order — start here",
  },
  {
    id: "food-order",
    label: "Food list",
    description: "Order the five foods",
  },
  {
    id: "story-flow",
    label: "Story flow",
    description: "Put the narrative chunks in order",
  },
  {
    id: "fill-blank",
    label: "Fill the gap",
    description: "Pick the missing Arabic word",
  },
  {
    id: "next-phrase",
    label: "What comes next",
    description: "Continue from the phrase shown",
  },
  {
    id: "word-traps",
    label: "Spot the mistake",
    description: "Which line matches the mushaf?",
  },
  {
    id: "meaning",
    label: "Meaning match",
    description: "English → Arabic phrase",
  },
  {
    id: "consequences",
    label: "Consequences",
    description: "Punishments and the two ذَٰلِكَ clauses",
  },
  {
    id: "all",
    label: "Full drill",
    description: "Everything shuffled — when you are confident",
  },
];

const FOOD_TOKENS = AYAH_61_FOODS.map(({ id, ar, en, hint }) => ({ id, ar, en, hint }));

const STORY_TOKENS = [
  { id: "complaint", ar: "وَإِذْ قُلْتُمْ… طَعَامٍ وَٰحِدٍ", en: "They complain: one food" },
  { id: "request", ar: "فَٱدْعُ… بَصَلِهَا", en: "Request + five foods" },
  { id: "exchange", ar: "أَتَسْتَبْدِلُونَ… خَيْرٌ", en: "Mūsā: exchange less for better?" },
  { id: "descend", ar: "ٱهْبِطُوا۟ مِصْرًا… سَأَلْتُمْ", en: "Go to Egypt — you'll get it" },
  { id: "humiliation", ar: "وَضُرِبَتْ… ٱلْمَسْكَنَةُ", en: "Humiliation & poverty" },
  { id: "anger", ar: "وَبَآءُو بِغَضَبٍ مِّنَ ٱللَّهِ", en: "Allah's anger" },
  { id: "sins", ar: "ذَٰلِكَ… يَقْتُلُونَ ٱلنَّبِيِّۦنَ", en: "1st ذَٰلِكَ: kufr & killing" },
  { id: "disobey", ar: "ذَٰلِكَ… يَعْتَدُونَ", en: "2nd ذَٰلِكَ: disobey & transgress" },
];

const CONSEQUENCE_TOKENS = [
  { id: "dhillah", ar: "ٱلذِّلَّةُ", en: "humiliation" },
  { id: "maskanah", ar: "ٱلْمَسْكَنَةُ", en: "poverty" },
  { id: "ghadab", ar: "بِغَضَبٍ مِّنَ ٱللَّهِ", en: "Allah's anger" },
];

export const AYAH_61_QUESTIONS = [
  // —— Beginner: story & vocabulary ——
  {
    id: "beg-what-happened",
    mode: "beginner",
    type: "englishMcq",
    prompt: "What are the Children of Israel complaining about?",
    hint: "Allah had already given them mann and quails from the sky.",
    options: [
      "They cannot endure only one kind of food (mann & quails)",
      "They want to leave Egypt immediately",
      "They forgot how to enter the city",
    ],
    correct: "They cannot endure only one kind of food (mann & quails)",
    explain: "لَن نَّصْبِرَ عَلَىٰ طَعَامٍ وَٰحِدٍ — they were ungrateful after Allah's provision.",
  },
  {
    id: "beg-what-ask",
    mode: "beginner",
    type: "englishMcq",
    prompt: "What do they ask Mūsā to bring from the earth?",
    hint: "Five types of produce — vegetables and legumes.",
    options: [
      "Herbs, cucumbers, garlic, lentils, and onions",
      "Dates, grapes, figs, and pomegranates",
      "Mann, quails, honey, and milk",
    ],
    correct: "Herbs, cucumbers, garlic, lentils, and onions",
    explain: "بَقْل → قِثَّاء → فُوم → عَدَس → بَصَل",
  },
  {
    id: "beg-food-herbs",
    mode: "beginner",
    type: "mcq",
    prompt: "Which Arabic word means herbs / leafy vegetables?",
    hint: "First food in the list.",
    options: ["بَقْلِهَا", "بَصَلِهَا", "عَدَسِهَا"],
    correct: "بَقْلِهَا",
    explain: "بَقْلِهَا — her herbs / vegetables. بَصَلِهَا is onions (last).",
  },
  {
    id: "beg-food-cucumber",
    mode: "beginner",
    type: "mcq",
    prompt: "Which word means cucumbers?",
    hint: "Second food — after بَقْل.",
    options: ["قِثَّآئِهَا", "فُومِهَا", "بَصَلِهَا"],
    correct: "قِثَّآئِهَا",
    explain: "قِثَّاء — cucumber. Comes right after بَقْل.",
  },
  {
    id: "beg-food-garlic",
    mode: "beginner",
    type: "englishMcq",
    prompt: "فُومِهَا means:",
    hint: "Third in the food list — strong kitchen ingredient.",
    options: ["garlic", "lentils", "onions"],
    correct: "garlic",
    explain: "فُوم — garlic. Then عَدَس (lentils), then بَصَل (onions).",
  },
  {
    id: "beg-food-lentils",
    mode: "beginner",
    type: "mcq",
    prompt: "Lentils in this āyah:",
    hint: "Fourth food — small round legume.",
    options: ["عَدَسِهَا", "بَقْلِهَا", "فُومِهَا"],
    correct: "عَدَسِهَا",
    explain: "عَدَس — lentils. Right before بَصَلِهَا (onions).",
  },
  {
    id: "beg-food-onions",
    mode: "beginner",
    type: "mcq",
    prompt: "Onions — the last food in the list:",
    hint: "Ends the five-food sequence.",
    options: ["بَصَلِهَا", "بَقْلِهَا", "عَدَسِهَا"],
    correct: "بَصَلِهَا",
    explain: "بَصَل — onions. Always last: …وَعَدَسِهَا وَبَصَلِهَا",
  },
  {
    id: "beg-moses-question",
    mode: "beginner",
    type: "englishMcq",
    prompt: "What is Mūsā asking them in أَتَسْتَبْدِلُونَ…?",
    hint: "أَدْنَىٰ = lower. خَيْرٌ = better.",
    options: [
      "Would you exchange what is lower for what is better?",
      "Would you like to go back to mann and quails?",
      "Will you enter the city with humility?",
    ],
    correct: "Would you exchange what is lower for what is better?",
    explain: "They wanted earthly vegetables (أَدْنَىٰ) instead of Allah's provision (خَيْرٌ).",
  },
  {
    id: "beg-adna-meaning",
    mode: "beginner",
    type: "mcq",
    prompt: "ٱلَّذِى هُوَ أَدْنَىٰ means:",
    hint: "Opposite of خَيْرٌ (better).",
    options: ["that which is lower / lesser", "that which is higher", "that which is forbidden"],
    correct: "that which is lower / lesser",
    explain: "أَدْنَىٰ — lower, lesser, inferior. The vegetables they asked for.",
  },
  {
    id: "beg-khayr-meaning",
    mode: "beginner",
    type: "englishMcq",
    prompt: "What did they give up when they chose vegetables?",
    hint: "Mann and quails from Allah.",
    options: [
      "What is better (mann & quails from Allah)",
      "What is lower (vegetables from earth)",
      "The sacred city of Jerusalem",
    ],
    correct: "What is better (mann & quails from Allah)",
    explain: "بِٱلَّذِى هُوَ خَيْرٌ — they exchanged Allah's better provision.",
  },
  {
    id: "beg-punishments",
    mode: "beginner",
    type: "englishMcq",
    prompt: "What three consequences are named (in order)?",
    hint: "وَضُرِبَتْ عَلَيْهِمُ…",
    options: [
      "Humiliation, poverty, then Allah's anger",
      "Allah's anger, then humiliation, then poverty",
      "Poverty, killing prophets, then exile",
    ],
    correct: "Humiliation, poverty, then Allah's anger",
    explain: "ٱلذِّلَّةُ → ٱلْمَسْكَنَةُ → وَبَآءُو بِغَضَبٍ مِّنَ ٱللَّهِ",
  },
  {
    id: "beg-first-dhalika-en",
    mode: "beginner",
    type: "englishMcq",
    prompt: "The FIRST ذَٰلِكَ (ذَٰلِكَ بِأَنَّهُمْ) explains:",
    hint: "Two major sins are named.",
    options: [
      "Disbelief in Allah's signs + killing prophets",
      "Disobedience and transgression only",
      "Complaining about food",
    ],
    correct: "Disbelief in Allah's signs + killing prophets",
    explain: "يَكْفُرُونَ بِـَٔايَٰتِ ٱللَّهِ وَيَقْتُلُونَ ٱلنَّبِيِّۦنَ بِغَيْرِ ٱلْحَقِّ",
  },
  {
    id: "beg-second-dhalika-en",
    mode: "beginner",
    type: "englishMcq",
    prompt: "The SECOND ذَٰلِكَ (ذَٰلِكَ بِمَا) closes with:",
    hint: "Different verbs from the first ذَٰلِكَ.",
    options: [
      "They disobeyed and were transgressing (عَصَوا / يَعْتَدُونَ)",
      "They disbelieved again (يَكْفُرُونَ)",
      "They went down to Egypt",
    ],
    correct: "They disobeyed and were transgressing (عَصَوا / يَعْتَدُونَ)",
    explain: "ذَٰلِكَ بِمَا عَصَوا۟ وَّكَانُوا۟ يَعْتَدُونَ — ends the āyah.",
  },
  {
    id: "beg-food-order-en",
    mode: "beginner",
    type: "englishMcq",
    prompt: "Correct order of the five foods (English):",
    hint: "H-C-G-L-O: Herbs, Cucumbers, Garlic, Lentils, Onions.",
    options: [
      "Herbs → cucumbers → garlic → lentils → onions",
      "Herbs → garlic → cucumbers → onions → lentils",
      "Onions → lentils → garlic → cucumbers → herbs",
    ],
    correct: "Herbs → cucumbers → garlic → lentils → onions",
    explain: "بَقْل → قِثَّاء → فُوم → عَدَس → بَصَل",
  },
  {
    id: "beg-story-order-en",
    mode: "beginner",
    type: "englishMcq",
    prompt: "What happens right after the food list (before punishments)?",
    hint: "Mūsā speaks, then a command to go somewhere.",
    options: [
      "Mūsā rebukes them, then they are told to go to Egypt",
      "Punishments fall immediately",
      "They enter the city with سُجَّدًا",
    ],
    correct: "Mūsā rebukes them, then they are told to go to Egypt",
    explain: "قَالَ أَتَسْتَبْدِلُونَ… then ٱهْبِطُوا۟ مِصْرًا",
  },
  // —— Food order ——
  {
    id: "food-order-1",
    mode: "food-order",
    type: "rearrange",
    prompt: "Put the five foods in mushaf order.",
    hint: "Herbs → cucumbers → garlic → lentils → onions.",
    tokens: FOOD_TOKENS,
    correctOrder: ["bql", "qth", "fwm", "ads", "bsl"],
    explain: "بَقْل → قِثَّاء → فُوم → عَدَس → بَصَل",
  },
  // —— Story flow ——
  {
    id: "story-flow-1",
    mode: "story-flow",
    type: "rearrange",
    prompt: "Order the story from complaint to final consequence.",
    hint: "Complaint → foods → Mūsā → Egypt → punishments → 2× ذَٰلِكَ.",
    tokens: STORY_TOKENS,
    correctOrder: [
      "complaint",
      "request",
      "exchange",
      "descend",
      "humiliation",
      "anger",
      "sins",
      "disobey",
    ],
    explain:
      "Complaint → request → Mūsā's rebuke → Egypt → humiliation & poverty → anger → kufr & killing → disobedience.",
  },
  // —— Fill blanks ——
  {
    id: "fill-lentils",
    mode: "fill-blank",
    type: "mcq",
    prompt: "Which word completes the food list?",
    hint: "Comes after garlic (فُوم), before onions (بَصَل).",
    segments: ["مِن بَقْلِهَا وَقِثَّآئِهَا وَفُومِهَا وَ", null, " وَبَصَلِهَا"],
    options: ["عَدَسِهَا", "بَصَلِهَا", "قِثَّآئِهَا"],
    correct: "عَدَسِهَا",
    explain: "Lentils (عَدَس) before onions (بَصَل).",
  },
  {
    id: "fill-adna",
    mode: "fill-blank",
    type: "mcq",
    prompt: "Mūsā's comparison — fill the blank:",
    hint: "Opposite of خَيْرٌ (better).",
    segments: ["ٱلَّذِى هُوَ ", null, " بِٱلَّذِى هُوَ خَيْرٌ"],
    options: ["أَدْنَىٰ", "أَعْلَىٰ", "أَكْبَرَ"],
    correct: "أَدْنَىٰ",
    explain: "أَدْنَىٰ = lower/lesser. خَيْرٌ = better.",
  },
  {
    id: "fill-dhillah",
    mode: "fill-blank",
    type: "mcq",
    prompt: "Which punishment is named first?",
    hint: "Before ٱلْمَسْكَنَةُ (poverty).",
    segments: ["وَضُرِبَتْ عَلَيْهِمُ ", null, " وَٱلْمَسْكَنَةُ"],
    options: ["ٱلذِّلَّةُ", "ٱلْمَسْكَنَةُ", "ٱلْغَضَبُ"],
    correct: "ٱلذِّلَّةُ",
    explain: "ذِلَّة (humiliation) then مَسْكَنَة (poverty).",
  },
  {
    id: "fill-yakfurun",
    mode: "fill-blank",
    type: "mcq",
    prompt: "After ذَٰلِكَ بِأَنَّهُمْ كَانُوا۟ — which verb?",
    hint: "First sin — before killing prophets.",
    segments: ["ذَٰلِكَ بِأَنَّهُمْ كَانُوا۟ ", null, " بِـَٔايَٰتِ ٱللَّهِ"],
    options: ["يَكْفُرُونَ", "يَعْتَدُونَ", "يَقْتُلُونَ"],
    correct: "يَكْفُرُونَ",
    explain: "يَكْفُرُونَ first, then وَيَقْتُلُونَ ٱلنَّبِيِّۦنَ.",
  },
  {
    id: "fill-opening",
    mode: "fill-blank",
    type: "mcq",
    prompt: "How does the āyah open?",
    hint: "Flashback marker — 'and recall when…'",
    segments: [null, " قُلْتُمْ يَٰمُوسَىٰ"],
    options: ["وَإِذْ", "قَالَ", "ذَٰلِكَ"],
    correct: "وَإِذْ",
    explain: "وَإِذْ — and [recall] when — opens the flashback.",
  },
  // —— Next phrase ——
  {
    id: "next-fad-u",
    mode: "next-phrase",
    type: "mcq",
    prompt: "What comes immediately after this complaint?",
    hint: "They order Mūsā to call his Lord.",
    phrase: "لَن نَّصْبِرَ عَلَىٰ طَعَامٍ وَٰحِدٍ",
    options: ["فَٱدْعُ لَنَا رَبَّكَ", "قَالَ أَتَسْتَبْدِلُونَ", "ٱهْبِطُوا۟ مِصْرًا"],
    correct: "فَٱدْعُ لَنَا رَبَّكَ",
    explain: "فَٱدْعُ لَنَا رَبَّكَ — so call your Lord for us.",
  },
  {
    id: "next-qala",
    mode: "next-phrase",
    type: "mcq",
    prompt: "After the food list ۖ — what does Mūsā say?",
    hint: "أَتَسْتَبْدِلُونَ — would you exchange?",
    phrase: "…وَبَصَلِهَا ۖ",
    options: ["قَالَ أَتَسْتَبْدِلُونَ", "وَضُرِبَتْ عَلَيْهِمُ ٱلذِّلَّةُ", "ذَٰلِكَ بِمَا عَصَوا۟"],
    correct: "قَالَ أَتَسْتَبْدِلُونَ",
    explain: "قَالَ introduces Mūsā's rebuke.",
  },
  {
    id: "next-dhalika",
    mode: "next-phrase",
    type: "mcq",
    prompt: "After وَبَآءُو بِغَضَبٍ مِّنَ ٱللَّهِ ۗ — what follows?",
    hint: "First of two ذَٰلِكَ clauses.",
    phrase: "وَبَآءُو بِغَضَبٍ مِّنَ ٱللَّهِ ۗ",
    options: ["ذَٰلِكَ بِأَنَّهُمْ", "ذَٰلِكَ بِمَا عَصَوا۟", "فَإِنَّ لَكُم مَّا سَأَلْتُمْ"],
    correct: "ذَٰلِكَ بِأَنَّهُمْ",
    explain: "1st ذَٰلِكَ = kufr & killing. 2nd = عَصَوا & يَعْتَدُونَ.",
  },
  {
    id: "next-after-exchange",
    mode: "next-phrase",
    type: "mcq",
    prompt: "After Mūsā's comparison (خَيْرٌ ۚ) — what command?",
    hint: "ٱهْبِطُوا۟ — go down.",
    phrase: "أَتَسْتَبْدِلُونَ ٱلَّذِى هُوَ أَدْنَىٰ بِٱلَّذِى هُوَ خَيْرٌ ۚ",
    options: ["ٱهْبِطُوا۟ مِصْرًا", "وَضُرِبَتْ عَلَيْهِمُ ٱلذِّلَّةُ", "يَكْفُرُونَ بِـَٔايَٰتِ ٱللَّهِ"],
    correct: "ٱهْبِطُوا۟ مِصْرًا",
    explain: "ٱهْبِطُوا۟ مِصْرًا فَإِنَّ لَكُم مَّا سَأَلْتُمْ",
  },
  // —— Word traps ——
  {
    id: "trap-food-order",
    mode: "word-traps",
    type: "whichCorrect",
    prompt: "Which food list matches the mushaf?",
    hint: "Garlic comes after cucumbers.",
    options: [
      { id: "a", ar: "مِن بَقْلِهَا وَفُومِهَا وَقِثَّآئِهَا وَعَدَسِهَا وَبَصَلِهَا" },
      { id: "b", ar: "مِن بَقْلِهَا وَقِثَّآئِهَا وَفُومِهَا وَعَدَسِهَا وَبَصَلِهَا" },
    ],
    correct: "b",
    explain: "فُوم after قِثَّاء, not before.",
  },
  {
    id: "trap-adna-khayr",
    mode: "word-traps",
    type: "whichCorrect",
    prompt: "Which comparison is correct?",
    hint: "أَدْنَىٰ comes before بِٱلَّذِى هُوَ خَيْرٌ.",
    options: [
      { id: "a", ar: "أَتَسْتَبْدِلُونَ ٱلَّذِى هُوَ خَيْرٌ بِٱلَّذِى هُوَ أَدْنَىٰ" },
      { id: "b", ar: "أَتَسْتَبْدِلُونَ ٱلَّذِى هُوَ أَدْنَىٰ بِٱلَّذِى هُوَ خَيْرٌ" },
    ],
    correct: "b",
    explain: "Lower (أَدْنَىٰ) exchanged for better (خَيْرٌ).",
  },
  {
    id: "trap-sin-order",
    mode: "word-traps",
    type: "whichCorrect",
    prompt: "Which sin order is correct?",
    hint: "Kufr before killing.",
    options: [
      { id: "a", ar: "يَقْتُلُونَ ٱلنَّبِيِّۦنَ بِغَيْرِ ٱلْحَقِّ وَيَكْفُرُونَ بِـَٔايَٰتِ ٱللَّهِ" },
      { id: "b", ar: "يَكْفُرُونَ بِـَٔايَٰتِ ٱللَّهِ وَيَقْتُلُونَ ٱلنَّبِيِّۦنَ بِغَيْرِ ٱلْحَقِّ" },
    ],
    correct: "b",
    explain: "يَكْفُرُونَ then يَقْتُلُونَ.",
  },
  {
    id: "trap-ending",
    mode: "word-traps",
    type: "whichCorrect",
    prompt: "Which ending matches the āyah?",
    hint: "Last verb is يَعْتَدُونَ.",
    options: [
      { id: "a", ar: "ذَٰلِكَ بِمَا عَصَوا۟ وَّكَانُوا۟ يَكْفُرُونَ" },
      { id: "b", ar: "ذَٰلِكَ بِمَا عَصَوا۟ وَّكَانُوا۟ يَعْتَدُونَ" },
    ],
    correct: "b",
    explain: "يَعْتَدُونَ closes the āyah — not يَكْفُرُونَ again.",
  },
  // —— Meaning ——
  {
    id: "meaning-humiliation",
    mode: "meaning",
    type: "mcq",
    prompt: "Humiliation and poverty were struck upon them",
    hint: "وَضُرِبَتْ عَلَيْهِمُ…",
    options: [
      "وَضُرِبَتْ عَلَيْهِمُ ٱلذِّلَّةُ وَٱلْمَسْكَنَةُ",
      "وَبَآءُو بِغَضَبٍ مِّنَ ٱللَّهِ",
      "ٱهْبِطُوا۟ مِصْرًا فَإِنَّ لَكُم مَّا سَأَلْتُمْ",
    ],
    correct: "وَضُرِبَتْ عَلَيْهِمُ ٱلذِّلَّةُ وَٱلْمَسْكَنَةُ",
    explain: "ضُرِبَتْ — struck upon them.",
  },
  {
    id: "meaning-exchange",
    mode: "meaning",
    type: "mcq",
    prompt: "Would you exchange what is lower for what is better?",
    hint: "Mūsā's rhetorical question.",
    options: [
      "أَتَسْتَبْدِلُونَ ٱلَّذِى هُوَ أَدْنَىٰ بِٱلَّذِى هُوَ خَيْرٌ",
      "لَن نَّصْبِرَ عَلَىٰ طَعَامٍ وَٰحِدٍ",
      "فَٱدْعُ لَنَا رَبَّكَ يُخْرِجْ لَنَا",
    ],
    correct: "أَتَسْتَبْدِلُونَ ٱلَّذِى هُوَ أَدْنَىٰ بِٱلَّذِى هُوَ خَيْرٌ",
    explain: "أَتَسْتَبْدِلُونَ — would you exchange?",
  },
  {
    id: "meaning-anger",
    mode: "meaning",
    type: "mcq",
    prompt: "They returned with anger from Allah",
    hint: "وَبَآءُوا…",
    options: [
      "وَبَآءُو بِغَضَبٍ مِّنَ ٱللَّهِ",
      "وَضُرِبَتْ عَلَيْهِمُ ٱلذِّلَّةُ وَٱلْمَسْكَنَةُ",
      "يَقْتُلُونَ ٱلنَّبِيِّۦنَ بِغَيْرِ ٱلْحَقِّ",
    ],
    correct: "وَبَآءُو بِغَضَبٍ مِّنَ ٱللَّهِ",
    explain: "وَبَآءُوا بِغَضَبٍ — al-maghḍūb ʿalayhim.",
  },
  {
    id: "meaning-complaint",
    mode: "meaning",
    type: "mcq",
    prompt: "We cannot endure one food, O Moses",
    hint: "Opening complaint.",
    options: [
      "لَن نَّصْبِرَ عَلَىٰ طَعَامٍ وَٰحِدٍ",
      "ٱهْبِطُوا۟ مِصْرًا",
      "يَعْتَدُونَ",
    ],
    correct: "لَن نَّصْبِرَ عَلَىٰ طَعَامٍ وَٰحِدٍ",
    explain: "لَن نَّصْبِرَ — we can never endure/be patient.",
  },
  // —— Consequences ——
  {
    id: "consequence-order",
    mode: "consequences",
    type: "rearrange",
    prompt: "Order the three consequences.",
    hint: "ذِلَّة → مَسْكَنَة → غَضَب.",
    tokens: CONSEQUENCE_TOKENS,
    correctOrder: ["dhillah", "maskanah", "ghadab"],
    explain: "ٱلذِّلَّةُ → ٱلْمَسْكَنَةُ → بِغَضَبٍ مِّنَ ٱللَّهِ",
  },
  {
    id: "consequence-first-dhalika",
    mode: "consequences",
    type: "mcq",
    prompt: "First ذَٰلِكَ بِأَنَّهُمْ — which sins?",
    hint: "Kufr and killing anbiyāʾ.",
    options: [
      "يَكْفُرُونَ بِـَٔايَٰتِ ٱللَّهِ وَيَقْتُلُونَ ٱلنَّبِيِّۦنَ",
      "عَصَوا۟ وَّكَانُوا۟ يَعْتَدُونَ",
      "لَن نَّصْبِرَ عَلَىٰ طَعَامٍ وَٰحِدٍ",
    ],
    correct: "يَكْفُرُونَ بِـَٔايَٰتِ ٱللَّهِ وَيَقْتُلُونَ ٱلنَّبِيِّۦنَ",
    explain: "4th & 5th sins in the story.",
  },
  {
    id: "consequence-second-dhalika",
    mode: "consequences",
    type: "mcq",
    prompt: "Second ذَٰلِكَ بِمَا — how does it close?",
    hint: "عَصَوا and يَعْتَدُونَ.",
    options: [
      "عَصَوا۟ وَّكَانُوا۟ يَعْتَدُونَ",
      "كَانُوا۟ يَكْفُرُونَ بِـَٔايَٰتِ ٱللَّهِ",
      "وَبَآءُو بِغَضَبٍ مِّنَ ٱللَّهِ",
    ],
    correct: "عَصَوا۟ وَّكَانُوا۟ يَعْتَدُونَ",
    explain: "Disobedience + transgression — āyah ends here.",
  },
  {
    id: "consequence-kill-prophets",
    mode: "consequences",
    type: "mcq",
    prompt: "How is killing the prophets qualified?",
    hint: "Without right / truth.",
    segments: ["يَقْتُلُونَ ٱلنَّبِيِّۦنَ ", null],
    options: ["بِغَيْرِ ٱلْحَقِّ", "بِغَيْرِ رَحْمَةٍ", "بِغَيْرِ عِلْمٍ"],
    correct: "بِغَيْرِ ٱلْحَقِّ",
    explain: "بِغَيْرِ ٱلْحَقِّ — without right.",
  },
];

const BEGINNER_ORDER = [
  "beg-what-happened",
  "beg-what-ask",
  "beg-food-herbs",
  "beg-food-cucumber",
  "beg-food-garlic",
  "beg-food-lentils",
  "beg-food-onions",
  "beg-food-order-en",
  "beg-moses-question",
  "beg-adna-meaning",
  "beg-khayr-meaning",
  "beg-story-order-en",
  "beg-punishments",
  "beg-first-dhalika-en",
  "beg-second-dhalika-en",
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

export function buildAyah61QuizDeck(modeId = "beginner") {
  if (modeId === "beginner") {
    const byId = new Map(AYAH_61_QUESTIONS.map((q) => [q.id, q]));
    return BEGINNER_ORDER.map((id) => byId.get(id)).filter(Boolean);
  }

  const pool =
    modeId === "all"
      ? AYAH_61_QUESTIONS.filter((q) => q.mode !== "beginner")
      : AYAH_61_QUESTIONS.filter((question) => question.mode === modeId);

  return shuffleArray(pool).map((question) =>
    question.type === "rearrange" ? prepareRearrange(question) : question,
  );
}

export function getAyah61QuizMode(modeId) {
  return AYAH_61_QUIZ_MODES.find((mode) => mode.id === modeId) ?? AYAH_61_QUIZ_MODES[0];
}

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
  name: "Tafsir 2",
  nameAr: "التفسير ٢",
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
    ],
  },
  {
    id: "abasa",
    title: "Surat Abasa",
    titleAr: "عبس",
    lessons: [
      {
        id: "abasa",
        title: "Commentary on Surat Abasa",
        icon: "3",
        draft: true,
        sections: comingSoon("Commentary on Surat Abasa"),
      },
    ],
  },
  {
    id: "takweer",
    title: "Surat at-Takweer",
    titleAr: "التكوير",
    lessons: [
      {
        id: "takweer",
        title: "Commentary on Surat at-Takweer",
        icon: "4",
        draft: true,
        sections: comingSoon("Commentary on Surat at-Takweer"),
      },
    ],
  },
  {
    id: "infitar",
    title: "Surat al-Infitar",
    titleAr: "الانفطار",
    lessons: [
      {
        id: "infitar",
        title: "Commentary on Surat al-Infitar",
        icon: "5",
        draft: true,
        sections: comingSoon("Commentary on Surat al-Infitar"),
      },
    ],
  },
  {
    id: "mutaffifeen",
    title: "Surat al-Mutaffifeen",
    titleAr: "المطففين",
    lessons: [
      {
        id: "mutaffifeen",
        title: "Commentary on Surat al-Mutaffifeen",
        icon: "6",
        draft: true,
        sections: comingSoon("Commentary on Surat al-Mutaffifeen"),
      },
    ],
  },
  {
    id: "practice",
    title: "Practice",
    lessons: [
      { id: "flashcards", title: "Flashcards", icon: "🃏", kind: "tool", badge: "46" },
      { id: "quiz", title: "Knowledge Quiz", icon: "✏️", kind: "tool", badge: "36" },
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
  { id: "naziat", label: "Surat an-Nazi‘aat (79:1–14)" },
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

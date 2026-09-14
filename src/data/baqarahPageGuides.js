/**
 * Study guides for the first 10 mushaf pages of Al-Baqarah (printed pages 2–11).
 */
const IMG = "/images/baqarah-guide";
const PHOTOS = "/images/baqarah-guide/photos";
const V60 = "/images/baqarah-guide/photos/verse60";
const V61 = "/images/baqarah-guide/photos/verse61";

export const BAQARAH_PAGE_GUIDES = [
  {
    mushafPage: 2,
    verseRange: "1–5",
    title: "Opening of the Surah",
    mainTopic:
      "The mysterious letters, then the declaration that this Book is guidance for those conscious of Allah — the muttaqīn.",
    topics: [
      {
        id: "opening",
        label: "Opening",
        color: "teal",
        verseRange: "1–5",
        summary:
          "Alif Lām Mīm, then the Book without doubt — guidance for the God-conscious who believe, pray, spend, and trust the unseen and the Hereafter.",
      },
    ],
    sections: [
      {
        type: "mushafTopicsMap",
        showBanner: true,
      },
      {
        type: "summary",
        title: "Key themes",
        body:
          "Allah opens with abbreviated letters, then describes the Qur'an as certain guidance. The successful are those with taqwā: belief in the unseen, prayer, charity, and certainty in revelation and the Last Day.",
      },
    ],
  },
  {
    mushafPage: 3,
    verseRange: "6–16",
    title: "The Disbelievers & the Hypocrites",
    mainTopic:
      "Those who reject the truth are sealed, and the hypocrites deceive themselves — illustrated through the parable of the fire and the thunderbolt.",
    topics: [
      {
        id: "rejecters",
        label: "Disbelievers",
        color: "rose",
        verseRange: "6–7",
        summary: "Those who disbelieve — warning makes no difference; Allah has sealed their hearts.",
      },
      {
        id: "hypocrites",
        label: "Hypocrites",
        color: "amber",
        verseRange: "8–16",
        summary:
          "Those who claim faith while deceiving Allah and believers — disease in their hearts, and the parable of kindling fire then losing its light.",
      },
    ],
    gharibWords: [
      { verse: 6, label: "Warn", matchForms: ["ءَأَنذَرْتَهُمْ", "أَنذَرْتَهُمْ"] },
      { verse: 6, label: "Whether", matchIncludes: "سَوَاء" },
      { verse: 7, label: "Sealed", matchForms: ["خَتَمَ"] },
      { verse: 7, label: "Veil", matchIncludes: "غِشَ" },
      { verse: 7, label: "Great torment", matchForms: ["عَذَابٌ", "عَظِيمٌ"] },
      { verse: 9, label: "Deceive", matchForms: ["يُخَـٰدِعُونَ"] },
      { verse: 9, label: "Perceive it", matchForms: ["يَشْعُرُونَ"] },
      { verse: 10, label: "Increased", matchForms: ["فَزَادَهُمُ"] },
      { verse: 10, label: "Disease", matchIncludes: "مَرَض" },
      { verse: 10, label: "Painful torment", matchForms: ["عَذَابٌ", "أَلِيمٌ"] },
      { verse: 11, label: "Corrupt", matchForms: ["تُفْسِدُوا۟", "تُفْسِدُوا"] },
      { verse: 11, label: "Reformers", matchForms: ["مُصْلِحُونَ"] },
      { verse: 12, label: "Corrupters", matchIncludes: "ٱلْمُفْسِدُونَ" },
      { verse: 12, label: "Perceive it", matchForms: ["يَشْعُرُونَ"] },
      { verse: 13, label: "Fools", matchIncludes: "ٱلسُّفَهَ" },
      { verse: 13, label: "Don't know", matchForms: ["لَّا", "يَعْلَمُونَ"] },
      { verse: 14, label: "Meet", matchForms: ["لَقُوا۟", "لَقُوا"] },
      { verse: 14, label: "Alone", matchForms: ["خَلَوْا۟", "خَلَوْا"] },
      { verse: 14, label: "Evil leaders", matchIncludes: "شَيَـٰطِين" },
      { verse: 14, label: "Mocking", matchForms: ["مُسْتَهْزِءُونَ"] },
      { verse: 15, label: "Prolong", matchForms: ["وَيَمُدُّهُمْ"] },
      { verse: 15, label: "Transgression", matchIncludes: "طُغْيَ" },
      { verse: 15, label: "Wander blindly", matchForms: ["يَعْمَهُونَ"] },
    ],
    sections: [
      {
        type: "pageTopicsMap",
      },
      {
        type: "verseStudy",
        verse: 6,
        title: "Verse 6",
        topic: "rejecters",
        topicRange: "6–7",
        translation:
          "Indeed, those who disbelieve — it is all the same for them whether you warn them or do not warn them; they will not believe.",
        blocks: [
          {
            type: "verseTags",
            tags: [
              { label: "Page beg.", color: "amber", words: ["إِنَّ"] },
              { label: "Warn", color: "rose", words: ["ءَأَنذَرْتَهُمْ"] },
              { label: "Whether", color: "blue", words: ["سَوَاءٌ"] },
            ],
          },
          {
            type: "segmentMap",
            verseRef: 6,
            rows: [
              [
                {
                  ar: "إِنَّ ٱلَّذِينَ كَفَرُوا۟",
                  notes: [{ text: "Indeed — those who disbelieve.", emphasis: true }],
                },
                {
                  ar: "سَوَاءٌ عَلَيْهِمْ",
                  note: "Equalisation — the outcome is the same either way.",
                },
                {
                  ar: "ءَأَنذَرْتَهُمْ",
                  tone: "accent",
                  notes: [{ text: "Whether you warn them", emphasis: true }],
                },
                { ar: "أَمْ لَمْ تُنذِرْهُمْ" },
                {
                  ar: "لَا يُؤْمِنُونَ",
                  tone: "accent",
                  notes: [{ text: "They will not believe — sealed in rejection.", emphasis: true }],
                },
              ],
            ],
          },
          {
            type: "conceptExplain",
            title: "Cause of revelation",
            body:
              "Scholars differ on who is addressed: al-Dahhāk said it was revealed about Abū Jahl and five from his household; al-Kalbī said it refers to the Jews.",
          },
          {
            type: "qa",
            title: "Reflection — is a disbeliever forever a disbeliever?",
            question:
              "From verse 6, does it mean a disbeliever will never become a believer?",
            answers: [
              "Not as a general rule for all people.",
              "But as a specific description of those whose hearts are sealed — for them, warning makes no difference.",
            ],
          },
        ],
        phrases: [
          {
            hint: "Indeed · those who disbelieve",
            phrase: "إِنَّ ٱلَّذِينَ كَفَرُوا۟",
            words: [
              { ar: "إِنَّ", gloss: "Indeed — to confirm" },
              {
                ar: "ٱلَّذِينَ كَفَرُوا۟",
                gloss: "Those who disbelieve",
                points: ["Past tense — rooted in kufr.", "They persist in rejection."],
              },
            ],
          },
          {
            hint: "Whether you warn them · it is the same",
            phrase: "سَوَاءٌ عَلَيْهِمْ ءَأَنذَرْتَهُمْ",
            words: [
              {
                ar: "سَوَاءٌ",
                gloss: "The same / equal",
                points: ["Equalisation particle — whether… or not, the outcome is the same."],
              },
              { ar: "ءَأَنذَرْتَهُمْ", gloss: "You warn them", points: ["Addressed to the Prophet ﷺ."] },
            ],
          },
        ],
      },
      {
        type: "verseStudy",
        verse: 7,
        title: "Verse 7",
        topic: "rejecters",
        topicRange: "6–7",
        translation:
          "Allah has set a seal upon their hearts and upon their hearing, and over their vision is a veil — and for them is a great punishment.",
        blocks: [
          {
            type: "verseTags",
            tags: [
              { label: "Sealed", color: "rose", words: ["خَتَمَ"] },
              { label: "Veil", color: "rose", words: ["غِشَـٰوَةٌ"] },
              { label: "Great torment", color: "rose", words: ["عَذَابٌ عَظِيمٌ"] },
            ],
          },
          {
            type: "segmentMap",
            verseRef: 7,
            rows: [
              [
                {
                  ar: "خَتَمَ ٱللَّهُ",
                  tone: "accent",
                  notes: [{ text: "Sealed", emphasis: true }],
                },
                { ar: "عَلَىٰ قُلُوبِهِمْ", note: "1st faculty — the heart (plural)." },
                { ar: "وَعَلَىٰ سَمْعِهِمْ", note: "2nd — hearing (singular)." },
                { ar: "وَعَلَىٰٓ أَبْصَـٰرِهِمْ", note: "3rd — sight (plural)." },
                {
                  ar: "غِشَـٰوَةٌ",
                  tone: "accent",
                  notes: [{ text: "A veil over their perception.", emphasis: true }],
                },
              ],
              [
                {
                  ar: "وَلَهُمْ عَذَابٌ عَظِيمٌ",
                  tone: "accent",
                  notes: [{ text: "Consequence — a great punishment.", emphasis: true }],
                },
              ],
            ],
          },
          {
            type: "conceptExplain",
            title: "The three faculties",
            points: [
              "1st — the heart (plural: قُلُوبِهِمْ).",
              "2nd — hearing (singular: سَمْعِهِمْ).",
              "3rd — sight (plural: أَبْصَارِهِمْ) with a veil (غِشَاوَة).",
              "Consequence — a great punishment (عَذَابٌ عَظِيمٌ).",
            ],
          },
        ],
        phrases: [
          {
            hint: "Allah sealed · their hearts",
            phrase: "خَتَمَ ٱللَّهُ عَلَىٰ قُلُوبِهِمْ",
            words: [
              { ar: "خَتَمَ", gloss: "He sealed", points: ["Allah has sealed — no benefit reaches them."] },
              { ar: "قُلُوبِهِمْ", gloss: "Their hearts", points: ["Plural — the seat of understanding."] },
            ],
          },
          {
            hint: "And upon their hearing · veil over sight",
            phrase: "وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰٓ أَبْصَـٰرِهِمْ غِشَـٰوَةٌ",
            words: [
              { ar: "سَمْعِهِمْ", gloss: "Their hearing", points: ["Singular form in the āyah."] },
              { ar: "أَبْصَـٰرِهِمْ", gloss: "Their sight", points: ["Plural."] },
              { ar: "غِشَـٰوَةٌ", gloss: "A covering / veil", points: ["They cannot perceive the truth clearly."] },
            ],
          },
        ],
      },
      {
        type: "rejectersConsequence",
        title: "Consequence of rejecting guidance",
        topic: "rejecters",
        topicRange: "6–7",
      },
      {
        type: "verseStudy",
        verse: 8,
        title: "Verse 8",
        topic: "hypocrites",
        topicRange: "8–16",
        translation:
          "And of the people are some who say, 'We believe in Allah and the Last Day,' but they are not believers.",
        blocks: [
          {
            type: "verseTags",
            tags: [
              { label: "Beginning", color: "green", words: ["وَمِنَ"] },
              { label: "Repeated", color: "blue", words: ["بِٱللَّهِ", "بِٱلْيَوْمِ", "بِمُؤْمِنِينَ"] },
            ],
          },
          {
            type: "segmentMap",
            verseRef: 8,
            rows: [
              [
                { ar: "وَمِنَ ٱلنَّاسِ", note: "Beginning — of the people." },
                { ar: "مَن يَقُولُ", tone: "accent" },
                {
                  ar: "ءَامَنَّا بِٱللَّهِ",
                  tone: "accent",
                  notes: [
                    { text: "They claim faith." },
                    { text: "ب + ب — mentioned once in the Qur'an in this form.", emphasis: true },
                  ],
                },
                { ar: "وَبِٱلْيَوْمِ ٱلْـَٔاخِرِ" },
                {
                  ar: "وَمَا هُم بِمُؤْمِنِينَ",
                  notes: [{ text: "The strongest form of negating something in Arabic.", emphasis: true }],
                },
              ],
            ],
          },
        ],
        phrases: [
          {
            hint: "Some of the people · say",
            phrase: "وَمِنَ ٱلنَّاسِ مَن يَقُولُ",
            words: [
              { ar: "مَن يَقُولُ", gloss: "Who says", points: ["Singular — one speaking on behalf of others."] },
            ],
          },
          {
            hint: "We believe · in Allah and the Last Day",
            phrase: "ءَامَنَّا بِٱللَّهِ وَبِٱلْيَوْمِ ٱلْـَٔاخِرِ",
            words: [
              { ar: "ءَامَنَّا", gloss: "We believe", points: ["Plural — they claim faith together."] },
              {
                ar: "بِٱللَّهِ وَبِٱلْيَوْمِ ٱلْـَٔاخِرِ",
                gloss: "In Allah and the Last Day",
                points: ["Confirmation · ب + ب · mentioned once in the Qur'an in this form."],
              },
            ],
          },
          {
            hint: "But they are not believers",
            phrase: "وَمَا هُم بِمُؤْمِنِينَ",
            words: [
              {
                ar: "بِمُؤْمِنِينَ",
                gloss: "Believers",
                points: ["The strongest form of negating something in Arabic."],
              },
            ],
          },
        ],
      },
      {
        type: "verseStudy",
        verse: 9,
        title: "Verse 9",
        topic: "hypocrites",
        topicRange: "8–16",
        translation:
          "They [think to] deceive Allah and those who believe, but they deceive not except themselves, and they perceive [it] not.",
        blocks: [
          {
            type: "verseTags",
            tags: [
              { label: "Beginning", color: "green", words: ["يُخَـٰدِعُونَ"] },
              { label: "Deceive", color: "rose", words: ["يُخَـٰدِعُونَ"] },
              { label: "Perceive it", color: "rose", words: ["يَشْعُرُونَ"] },
            ],
          },
          {
            type: "segmentMap",
            verseRef: 9,
            rows: [
              [
                {
                  ar: "يُخَـٰدِعُونَ",
                  tone: "accent",
                  notes: [{ text: "They try to deceive.", emphasis: true }],
                },
                {
                  ar: "ٱللَّهَ وَٱلَّذِينَ ءَامَنُوا۟",
                  note: "Allah and the believers — both are deceived (they think).",
                },
                {
                  ar: "وَمَا يَخْدَعُونَ إِلَّآ أَنفُسَهُمْ",
                  tone: "accent",
                  notes: [{ text: "They only deceive themselves.", emphasis: true }],
                },
                {
                  ar: "وَمَا يَشْعُرُونَ",
                  tone: "accent",
                  notes: [{ text: "They don't sense it.", emphasis: true }],
                },
              ],
            ],
            footnotes: [
              {
                type: "question",
                text: "Q: Why do the hypocrites try to deceive the believers too?",
              },
              {
                type: "answer",
                text: "For some worldly benefit — reputation, safety, or gain among the Muslims.",
              },
            ],
          },
        ],
        phrases: [
          {
            hint: "They try to deceive · Allah and the believers",
            phrase: "يُخَـٰدِعُونَ ٱللَّهَ وَٱلَّذِينَ ءَامَنُوا۟",
            words: [
              { ar: "يُخَـٰدِعُونَ", gloss: "They try to deceive", points: ["Present tense — ongoing deception."] },
            ],
          },
          {
            hint: "They only deceive themselves · unaware",
            phrase: "وَمَا يَخْدَعُونَ إِلَّآ أَنفُسَهُمْ وَمَا يَشْعُرُونَ",
            words: [
              { ar: "إِلَّآ أَنفُسَهُمْ", gloss: "Except themselves", points: ["The ones truly deceived are only themselves."] },
              { ar: "يَشْعُرُونَ", gloss: "They perceive / feel", points: ["They are not aware of their own ruin."] },
            ],
          },
        ],
      },
      {
        type: "verseStudy",
        verse: 10,
        title: "Verse 10",
        topic: "hypocrites",
        topicRange: "8–16",
        translation:
          "In their hearts is disease, so Allah has increased their disease; and for them is a painful punishment because they used to lie.",
        blocks: [
          {
            type: "verseTags",
            tags: [
              { label: "Disease", color: "rose", words: ["مَرَضٌ"] },
              { label: "Increased", color: "rose", words: ["فَزَادَهُمُ"] },
              { label: "Painful torment", color: "rose", words: ["أَلِيمٌ"] },
            ],
          },
          {
            type: "segmentMap",
            verseRef: 10,
            rows: [
              [
                { ar: "فِى قُلُوبِهِم", note: "In their hearts" },
                {
                  ar: "مَّرَضٌ",
                  tone: "accent",
                  notes: [{ text: "Disease — doubt, fear, greed.", emphasis: true }],
                },
                {
                  ar: "فَزَادَهُمُ ٱللَّهُ مَرَضًا",
                  tone: "accent",
                  notes: [{ text: "Allah increased their disease.", emphasis: true }],
                },
                {
                  ar: "وَلَهُمْ عَذَابٌ أَلِيمٌ",
                  tone: "accent",
                  notes: [{ text: "Painful torment.", emphasis: true }],
                },
                { ar: "بِمَا كَانُوا۟ يَكْذِبُونَ", note: "Because they used to lie." },
              ],
            ],
          },
          {
            type: "conceptExplain",
            title: "Their disease",
            points: ["Doubts.", "Fear.", "Greed."],
            body: "As a consequence, Allah increased their disease — they were already ill in faith.",
          },
        ],
        phrases: [
          {
            hint: "In their hearts · disease",
            phrase: "فِى قُلُوبِهِم مَّرَضٌ",
            words: [
              { ar: "مَّرَضٌ", gloss: "Disease", points: ["Spiritual sickness — doubt, fear, hypocrisy."] },
            ],
          },
          {
            hint: "So Allah increased · painful punishment",
            phrase: "فَزَادَهُمُ ٱللَّهُ مَرَضًا ۖ وَلَهُمْ عَذَابٌ أَلِيمٌ",
            words: [
              { ar: "فَزَادَهُمُ", gloss: "He increased for them", points: ["Allah increased their disease as punishment."] },
              { ar: "أَلِيمٌ", gloss: "Painful", points: ["A torment that hurts."] },
            ],
          },
        ],
      },
      {
        type: "verseStudy",
        verse: 11,
        title: "Verse 11",
        topic: "hypocrites",
        topicRange: "8–16",
        translation:
          "And when it is said to them, 'Do not cause corruption on earth,' they say, 'We are but reformers.'",
        blocks: [
          {
            type: "verseTags",
            tags: [
              { label: "Beginning", color: "green", words: ["وَإِذَا"] },
              { label: "Repeated", color: "blue", words: ["قَالُوا"] },
              { label: "Corrupt", color: "rose", words: ["تُفْسِدُوا"] },
              { label: "Reformers", color: "rose", words: ["مُصْلِحُونَ"] },
            ],
          },
          {
            type: "segmentMap",
            verseRef: 11,
            rows: [
              [
                {
                  ar: "وَإِذَا قِيلَ لَهُمْ",
                  note: "Unidentified advisor from the group of the believers.",
                },
                {
                  ar: "لَا تُفْسِدُوا",
                  tone: "accent",
                  notes: [{ text: "Don'ts 1st", emphasis: true }],
                },
                { ar: "فِى ٱلْأَرْضِ" },
                { ar: "قَالُوا", tone: "accent" },
                {
                  ar: "إِنَّمَا نَحْنُ مُصْلِحُونَ",
                  note: "Reverting facts by claiming that they are actually reformers.",
                },
              ],
            ],
            footnotes: [
              { text: "1 — لَا تُفْسِدُوا / مُصْلِحُونَ" },
              {
                type: "crossRef",
                ar: "وَلَا تُفْسِدُوا۟ فِى ٱلْأَرْضِ بَعْدَ إِصْلَـٰحِهَا",
                en: "And cause not corruption upon the earth after its reformation.",
                cite: "Al-Aʿrāf 7:56",
              },
              { type: "question", text: "3 — How did they cause corruption?" },
            ],
          },
        ],
        phrases: [
          {
            hint: "When it is said · do not corrupt",
            phrase: "وَإِذَا قِيلَ لَهُمْ لَا تُفْسِدُوا۟ فِى ٱلْأَرْضِ",
            words: [
              { ar: "قِيلَ لَهُمْ", gloss: "It is said to them", points: ["Passive — advice from the believers."] },
              { ar: "لَا تُفْسِدُوا۟", gloss: "Do not cause corruption", points: ["A clear prohibition."] },
            ],
          },
          {
            hint: "They say · we are only reformers",
            phrase: "قَالُوا۟ إِنَّمَا نَحْنُ مُصْلِحُونَ",
            words: [
              { ar: "قَالُوا۟", gloss: "They said", points: ["Repeated speech pattern in this passage."] },
              { ar: "مُصْلِحُونَ", gloss: "Reformers", points: ["They invert the truth — claiming reform while corrupting."] },
            ],
          },
        ],
      },
      {
        type: "verseStudy",
        verse: 12,
        title: "Verse 12",
        topic: "hypocrites",
        topicRange: "8–16",
        translation:
          "Verily, it is they who are the corrupters, but they perceive [it] not.",
        blocks: [
          {
            type: "verseTags",
            tags: [
              { label: "Beginning", color: "green", words: ["أَلَا"] },
              { label: "Repeated", color: "blue", words: ["إِنَّهُمْ"] },
              { label: "Corrupters", color: "rose", words: ["ٱلْمُفْسِدُونَ"] },
              { label: "Perceive it", color: "rose", words: ["يَشْعُرُونَ"] },
            ],
          },
          {
            type: "segmentMap",
            verseRef: 12,
            rows: [
              [
                { ar: "أَلَا" },
                {
                  ar: "إِنَّهُمْ هُمُ",
                  tone: "accent",
                  notes: [{ text: "Confirmation", emphasis: true }],
                },
                {
                  ar: "ٱلْمُفْسِدُونَ",
                  notes: [
                    { prefix: "ال" },
                    { text: "The only ones who are causing corruption." },
                  ],
                },
                { ar: "وَلَٰكِن" },
                {
                  ar: "لَا يَشْعُرُونَ",
                  tone: "accent",
                  notes: [{ text: "They don't sense it.", emphasis: true }],
                },
              ],
            ],
          },
        ],
        phrases: [
          {
            hint: "Indeed they · are the corrupters",
            phrase: "أَلَآ إِنَّهُمْ هُمُ ٱلْمُفْسِدُونَ",
            words: [
              { ar: "أَلَآ", gloss: "Look / indeed", points: ["Alarm and confirmation."] },
              { ar: "ٱلْمُفْسِدُونَ", gloss: "The corrupters", points: ["ال — the only corrupters in truth."] },
            ],
          },
          {
            hint: "But they do not perceive",
            phrase: "وَلَٰكِن لَّا يَشْعُرُونَ",
            words: [
              { ar: "لَّا يَشْعُرُونَ", gloss: "They do not perceive", points: ["They are blind to their own hypocrisy."] },
            ],
          },
        ],
      },
      {
        type: "verseStudy",
        verse: 13,
        title: "Verse 13",
        topic: "hypocrites",
        topicRange: "8–16",
        translation:
          "And when it is said to them, 'Believe as the people have believed,' they say, 'Shall we believe as the fools have believed?' Verily, they are the fools, but they know not.",
        blocks: [
          {
            type: "verseTags",
            tags: [
              { label: "Beginning", color: "green", words: ["وَإِذَا"] },
              { label: "Repeated", color: "blue", words: ["قَالُوا", "ءَامَنَ"] },
              { label: "Fools", color: "rose", words: ["ٱلسُّفَهَآءُ"] },
              { label: "Don't know", color: "rose", words: ["لَا يَعْلَمُونَ"] },
            ],
          },
          {
            type: "segmentMap",
            verseRef: 13,
            rows: [
              [
                {
                  ar: "وَإِذَا قِيلَ لَهُمْ",
                  note: "The advice was directed to them — they have clearly received their warning.",
                },
                {
                  ar: "ءَامِنُوا۟ كَمَآ ءَامَنَ ٱلنَّاسُ",
                  tone: "accent",
                  notes: [
                    { text: "Do's 2nd", emphasis: true },
                    { text: "The truly guided people." },
                  ],
                },
                { ar: "قَالُوا۟", notes: [{ text: "In secret." }] },
                { ar: "أَنُؤْمِنُ كَمَآ ءَامَنَ" },
                {
                  ar: "ٱلسُّفَهَآءُ",
                  note: "The weak in their mental capabilities.",
                },
              ],
              [
                { ar: "أَلَآ", notes: [{ text: "Confirming", emphasis: true }] },
                {
                  ar: "إِنَّهُمْ هُمُ ٱلسُّفَهَآءُ",
                  tone: "accent",
                  notes: [{ prefix: "ال" }, { text: "There are no fools but them." }],
                },
                {
                  ar: "وَلَٰكِن لَّا يَعْلَمُونَ",
                  notes: [{ text: "As a result they are weak in knowledge." }],
                },
              ],
            ],
            footnotes: [{ type: "footer", text: "Allah (SWT) defends His believers." }],
          },
        ],
        phrases: [
          {
            hint: "Believe as the people believed",
            phrase: "ءَامِنُوا۟ كَمَآ ءَامَنَ ٱلنَّاسُ",
            words: [
              { ar: "ٱلنَّاسُ", gloss: "The people", points: ["The companions — al-Anṣār and al-Muhājirūn."] },
            ],
          },
          {
            hint: "Shall we believe as the fools believed?",
            phrase: "أَنُؤْمِنُ كَمَآ ءَامَنَ ٱلسُّفَهَآءُ",
            words: [
              { ar: "ٱلسُّفَهَآءُ", gloss: "The fools", points: ["They insult the believers — yet they are the true fools."] },
            ],
          },
        ],
      },
      {
        type: "verseStudy",
        verse: 14,
        title: "Verse 14",
        topic: "hypocrites",
        topicRange: "8–16",
        translation:
          "And when they meet those who believe, they say, 'We believe'; but when they are alone with their evil allies, they say, 'Indeed, we are with you; we were only mockers.'",
        blocks: [
          {
            type: "verseTags",
            tags: [
              { label: "Meet", color: "rose", words: ["لَقُوا۟"] },
              { label: "Alone", color: "rose", words: ["خَلَوْا۟"] },
              { label: "Beginning", color: "green", words: ["قَالُوا۟"] },
              { label: "Repeated", color: "blue", words: ["قَالُوا۟"] },
              { label: "Evil leaders", color: "rose", words: ["شَيَـٰطِينِهِمْ"] },
              { label: "Mocking", color: "rose", words: ["مُسْتَهْزِءُونَ"] },
            ],
          },
          {
            type: "conceptExplain",
            title: "Cause of revelation",
            body:
              "Revealed about ʿAbdullāh ibn Ubayy and his followers. One day they met a group of the Prophet's companions ﷺ. Ibn Ubayy took Abū Bakr's hand and praised him, then ʿUmar's, then ʿAlī's — flattering each in turn. When his companions asked how he did, he told them to do the same when they meet the Muslims. When the believers informed the Prophet ﷺ, Allah revealed this verse.",
          },
          {
            type: "segmentMap",
            verseRef: 14,
            rows: [
              [
                {
                  ar: "وَإِذَا لَقُوا۟",
                  notes: [
                    { text: "Unplanned meeting." },
                    { text: "Mostly in public.", emphasis: true },
                  ],
                },
                { ar: "ٱلَّذِينَ ءَامَنُوا۟", tone: "accent" },
                { ar: "قَالُوا۟" },
                { ar: "ءَامَنَّا", notes: [{ text: "1 word", emphasis: true }] },
                {
                  ar: "وَإِذَا خَلَوْا۟",
                  tone: "accent",
                  notes: [
                    { text: "Planned.", emphasis: true },
                    { text: "In secret.", emphasis: true },
                  ],
                },
                {
                  ar: "إِلَىٰ شَيَـٰطِينِهِمْ",
                  notes: [
                    { text: "Intended destination." },
                    { text: "Their masters in evil.", emphasis: true },
                  ],
                },
              ],
              [
                { ar: "قَالُوا۟", tone: "accent" },
                { ar: "إِنَّا مَعَكُمْ" },
                { ar: "إِنَّمَا نَحْنُ", tone: "accent" },
                {
                  ar: "مُسْتَهْزِءُونَ",
                  notes: [{ text: "By being able to deceive the believers.", emphasis: true }],
                },
              ],
            ],
            footnotes: [
              {
                type: "footer",
                text: "5 words were used to confirm their loyalty — yet their mockery exposes them.",
              },
            ],
          },
        ],
        phrases: [
          {
            hint: "When they meet the believers · they say we believe",
            phrase: "وَإِذَا لَقُوا۟ ٱلَّذِينَ ءَامَنُوا۟ قَالُوٓا۟ ءَامَنَّا",
            words: [
              { ar: "لَقُوا۟", gloss: "They meet", points: ["Often in public — unplanned encounters."] },
              { ar: "ءَامَنَّا", gloss: "We believe", points: ["One word — superficial claim of faith."] },
            ],
          },
          {
            hint: "When alone with their devils · we were only mocking",
            phrase: "وَإِذَا خَلَوْا۟ إِلَىٰ شَيَـٰطِينِهِمْ قَالُوٓا۟ إِنَّا مَعَكُمْ إِنَّمَا نَحْنُ مُسْتَهْزِءُونَ",
            words: [
              { ar: "خَلَوْا۟", gloss: "They were alone", points: ["In secret with their evil leaders."] },
              { ar: "مُسْتَهْزِءُونَ", gloss: "Mocking", points: ["They admit their deception in private."] },
            ],
          },
        ],
      },
      {
        type: "verseStudy",
        verse: 15,
        title: "Verse 15",
        topic: "hypocrites",
        topicRange: "8–16",
        translation:
          "Allah mocks them and prolongs them in their transgression while they wander blindly.",
        blocks: [
          {
            type: "verseTags",
            tags: [
              { label: "Beginning", color: "green", words: ["ٱللَّهُ"] },
              { label: "Prolong", color: "rose", words: ["وَيَمُدُّهُمْ"] },
              { label: "Transgression", color: "rose", words: ["طُغْيَـٰنِهِمْ"] },
              { label: "Wander blindly", color: "rose", words: ["يَعْمَهُونَ"] },
            ],
          },
          {
            type: "segmentMap",
            verseRef: 15,
            rows: [
              [
                { ar: "ٱللَّهُ" },
                {
                  ar: "يَسْتَهْزِئُ",
                  tone: "accent",
                  notes: [{ text: "Mocks them", emphasis: true }],
                },
                { ar: "بِهِمْ" },
                {
                  ar: "وَيَمُدُّهُمْ",
                  tone: "accent",
                  notes: [{ text: "Prolongs", emphasis: true }],
                },
                {
                  ar: "فِى طُغْيَـٰنِهِمْ",
                  notes: [
                    { text: "Transgression" },
                    { text: "For exceeding the limit" },
                  ],
                },
                {
                  ar: "يَعْمَهُونَ",
                  tone: "accent",
                  notes: [{ text: "Blind hearted", emphasis: true }],
                },
              ],
            ],
            footnotes: [
              {
                type: "question",
                text: "Q: What does it mean that Allah mocks them?",
              },
              {
                type: "answer",
                text: "To punish them in the same manner.",
              },
            ],
          },
        ],
        phrases: [
          {
            hint: "Allah mocks them · prolongs them in transgression",
            phrase: "ٱللَّهُ يَسْتَهْزِئُ بِهِمْ وَيَمُدُّهُمْ فِى طُغْيَـٰنِهِمْ",
            words: [
              { ar: "يَسْتَهْزِئُ", gloss: "Mocks", points: ["Divine requital — they mocked, so they are mocked in punishment."] },
              { ar: "وَيَمُدُّهُمْ", gloss: "He prolongs them", points: ["Given more time — yet only in deeper error."] },
            ],
          },
          {
            hint: "Wandering blindly",
            phrase: "يَعْمَهُونَ",
            words: [
              { ar: "يَعْمَهُونَ", gloss: "They wander blindly", points: ["No clear sight or direction in faith."] },
            ],
          },
        ],
      },
      {
        type: "verseStudy",
        verse: 16,
        title: "Verse 16",
        topic: "hypocrites",
        topicRange: "8–16",
        translation:
          "Those are the ones who have purchased error in exchange for guidance, so their transaction has brought no profit, nor were they guided.",
        blocks: [
          {
            type: "verseTags",
            tags: [
              { label: "Beginning", color: "green", words: ["أُو۟لَـٰٓئِكَ"] },
              { label: "Traded", color: "rose", words: ["ٱشْتَرَوُا۟"] },
              { label: "Error", color: "rose", words: ["ٱلضَّلَـٰلَةَ"] },
              { label: "Guided", color: "rose", words: ["ٱلْهُدَىٰ"] },
              { label: "Bargain", color: "rose", words: ["تِجَـٰرَتُهُمْ"] },
              { label: "Profit", color: "rose", words: ["رَبِحَتْ"] },
              { label: "Page end", color: "amber", words: ["مُهْتَدُونَ"] },
            ],
          },
          {
            type: "segmentMap",
            verseRef: 16,
            rows: [
              [
                {
                  ar: "أُو۟لَـٰٓئِكَ ٱلَّذِينَ",
                  note: "Far from (الهدى).",
                },
                {
                  ar: "ٱشْتَرَوُا۟",
                  tone: "accent",
                  notes: [{ text: "Traded / preferred", emphasis: true }],
                },
                {
                  ar: "ٱلضَّلَـٰلَةَ",
                  note: "Misguidance — opposite of (الهدى) guidance.",
                },
                {
                  ar: "بِٱلْهُدَىٰ",
                  tone: "accent",
                  notes: [{ text: "Price + ب", emphasis: true }],
                },
                {
                  ar: "فَمَا رَبِحَتْ تِجَـٰرَتُهُمْ",
                  notes: [
                    { text: "Their trade / transactions.", emphasis: true },
                    { bullets: ["Profit (ربح)", "Gained no benefit"] },
                  ],
                },
              ],
              [
                {
                  ar: "وَمَا كَانُوا۟ مُهْتَدِينَ",
                  notes: [
                    { text: "Lost guidance (الهدى)." },
                    { text: "The main benefit of the Book (الكتاب)." },
                  ],
                },
              ],
            ],
          },
        ],
        phrases: [
          {
            hint: "They purchased misguidance · with guidance",
            phrase: "ٱشْتَرَوُا۟ ٱلضَّلَـٰلَةَ بِٱلْهُدَىٰ",
            words: [
              { ar: "ٱشْتَرَوُا۟", gloss: "They purchased / traded", points: ["They preferred error over guidance."] },
              { ar: "بِٱلْهُدَىٰ", gloss: "With guidance", points: ["ب — the price they gave up was guidance itself."] },
            ],
          },
          {
            hint: "Their trade brought no profit",
            phrase: "فَمَا رَبِحَتْ تِجَـٰرَتُهُمْ",
            words: [
              { ar: "رَبِحَتْ", gloss: "It profited", points: ["Negated — no gain in this exchange."] },
              { ar: "تِجَـٰرَتُهُمْ", gloss: "Their transaction", points: ["A bargain that ruined them."] },
            ],
          },
        ],
      },
    ],
  },
  {
    mushafPage: 4,
    verseRange: "17–24",
    title: "Light, Rain & Covenant",
    mainTopic:
      "Two parables expose the hypocrites' spiritual blindness — then Allah calls all mankind to worship Him alone, proves His lordship, and challenges those in doubt.",
    topics: [
      {
        id: "hypocrites",
        label: "Hypocrites",
        color: "amber",
        verseRange: "17–20",
        summary:
          "Two parables — kindled fire then darkness, and a rainstorm with thunder and lightning — illustrate their lost faculties and wavering faith.",
        subTopics: [
          { label: "Parable 1", verses: "17–18", detail: "Kindled fire — then darkness" },
          { label: "Parable 2", verses: "19–20", detail: "Rainstorm — thunder and lightning" },
        ],
      },
      {
        id: "covenant",
        label: "Allah",
        color: "teal",
        verseRange: "21–24",
        summary:
          "Allah calls all mankind to worship their Creator, cites four proofs of His power, challenges doubters to produce a sūrah like it, and warns of the Fire.",
        subTopics: [
          { label: "1st call & 1st order", verses: "21", detail: "Worship your Lord" },
          { label: "Proves / evidence", verses: "22", detail: "Earth, sky, rain, fruits" },
          { label: "A challenge", verses: "23", detail: "Produce a sūrah like it" },
          { label: "The threat", verses: "24", detail: "Fear the Fire" },
        ],
      },
    ],
    gharibWords: [
      { verse: 17, label: "Example", matchForms: ["مَثَلُهُمْ"] },
      { verse: 17, label: "Kindled", matchForms: ["ٱسْتَوْقَدَ"] },
      { verse: 17, label: "Illuminated", matchIncludes: "أَضَا" },
      { verse: 17, label: "Took away light", matchIncludes: "بِنُور" },
      { verse: 17, label: "Darkness", matchIncludes: "ظُلُم" },
      { verse: 18, label: "Deaf", matchForms: ["صُمٌّۢ", "صُمٌّ"] },
      { verse: 18, label: "Dumb", matchForms: ["بُكْمٌ"] },
      { verse: 18, label: "Blind", matchForms: ["عُمْىٌۭ", "عُمْىٌ"] },
      { verse: 18, label: "Return", matchForms: ["يَرْجِعُونَ"] },
      { verse: 19, label: "Rainstorm", matchIncludes: "صَيّ" },
      { verse: 19, label: "Thunder", matchForms: ["وَرَعْدٌۭ", "وَرَعْدٌ"] },
      { verse: 19, label: "Lightning", matchForms: ["وَبَرْقٌۭ", "وَبَرْقٌ"] },
      { verse: 19, label: "Fingers", matchIncludes: "أَصَـٰبِع" },
      { verse: 19, label: "Thunderclaps", matchIncludes: "صَّوَٰعِق" },
      { verse: 19, label: "Encompassing", matchForms: ["مُحِيطٌۢ", "مُحِيطٌ"] },
      { verse: 20, label: "Snatches", matchForms: ["يَخْطَفُ"] },
      { verse: 20, label: "Walk", matchForms: ["مَّشَوْا۟", "مَّشَوْا"] },
      { verse: 20, label: "Stand still", matchForms: ["قَامُوا۟", "قَامُوا"] },
      { verse: 20, label: "Competent", matchForms: ["قَدِيرٌۭ", "قَدِيرٌ"] },
      { verse: 21, label: "O mankind", matchIncludes: "يَـٰٓأَيُّهَا" },
      { verse: 21, label: "Worship", matchForms: ["ٱعْبُدُوا۟", "ٱعْبُدُوا"] },
      { verse: 21, label: "Taqwā", matchForms: ["تَتَّقُونَ"] },
      { verse: 22, label: "Resting place", matchIncludes: "فِرَٰش" },
      { verse: 22, label: "Canopy", matchIncludes: "بِنَآء" },
      { verse: 22, label: "Rivals", matchForms: ["أَندَادًۭا", "أَندَادًا"] },
      { verse: 23, label: "Doubt", matchIncludes: "رَيْب" },
      { verse: 23, label: "Witnesses", matchIncludes: "شُهَدَا" },
      { verse: 24, label: "Fuel", matchIncludes: "وَقُود" },
      { verse: 24, label: "Prepared", matchForms: ["أُعِدَّتْ"] },
    ],
    sections: [
      {
        type: "pageTopicsMap",
        mapId: "page-4",
      },
      {
        type: "studyBlocks",
        title: "The parables in (Page 4)",
        blocks: [
          {
            type: "conceptExplain",
            title: "The parables",
            body:
              "Allah sets forth these examples so people may reflect — yet only those of knowledge truly grasp them.",
            points: [
              "Al-Ankabūt 29:43 — وَتِلْكَ ٱلْأَمْثَٰلُ نَضْرِبُهَا لِلنَّاسِ ۖ وَمَا يَعْقِلُهَآ إِلَّا ٱلْعَٰلِمُونَ",
              "The knowledgeable is one who uses his intellect to know Allah, acts in obedience to Him, and avoids His wrath.",
              "Al-Dahhāk said the first parable (fire) is those who entered Islam, saw its light, then left — and the second (rain) is those who waver between belief and doubt while remaining outwardly among the Muslims.",
            ],
          },
        ],
      },
      {
        type: "pageBridge",
        title: "Linking verse 16 with verse 17",
        note: "The fate of the hypocrites on page 3 flows into their first parable on page 4.",
        from: {
          page: 3,
          verse: 16,
          highlight: "وَمَا كَانُوا۟ مُهْتَدِينَ",
          note: "The fate of the hypocrites — they traded guidance and were not guided.",
        },
        to: {
          page: 4,
          verse: 17,
          highlight: "مَثَلُهُمْ كَمَثَلِ ٱلَّذِى ٱسْتَوْقَدَ نَارًۭا",
          note: "The 1st example of the hypocrites — the parable of kindled fire.",
        },
      },
      {
        type: "summary",
        title: "The 1st example — hypocrites",
        topic: "hypocrites",
        topicRange: "17–20",
        body:
          "Their example is like one who kindled a fire: when it lit what was around him, Allah took away their light and left them in darkness — deaf, dumb, and blind, unable to return.",
      },
      {
        type: "verseStudy",
        verse: 17,
        title: "Verse 17",
        topic: "hypocrites",
        topicRange: "17–20",
        translation:
          "Their example is that of one who kindled a fire, but when it illuminated what was around him, Allah took away their light and left them in darkness [so] they could not see.",
        blocks: [
          {
            type: "verseTags",
            tags: [
              { label: "Beginning", color: "green", words: ["مَثَلُهُمْ"] },
              { label: "Kindled", color: "amber", words: ["ٱسْتَوْقَدَ"] },
              { label: "Illuminated", color: "amber", words: ["أَضَآءَتْ"] },
              { label: "Darkness", color: "amber", words: ["ظُلُمَـٰتٍۢ"] },
              { label: "Repeated", color: "blue", words: ["ظُلُمَـٰتٍۢ"] },
            ],
          },
          {
            type: "segmentMap",
            verseRef: 17,
            rows: [
              [
                {
                  ar: "مَثَلُهُمْ كَمَثَلِ",
                  note: "Plural to refer to their group — then shifts to singular.",
                },
                {
                  ar: "ٱلَّذِى ٱسْتَوْقَدَ نَارًۭا",
                  tone: "accent",
                  notes: [
                    { text: "Singular — one who kindled a fire.", emphasis: true },
                    { text: "ٱسْتَوْقَدَ — sought / kindled (ista- = to ask for).", emphasis: true },
                  ],
                },
                {
                  ar: "فَلَمَّآ أَضَآءَتْ مَا حَوْلَهُۥ",
                  tone: "accent",
                  notes: [{ text: "When it illuminated what surrounded him.", emphasis: true }],
                },
              ],
              [
                {
                  ar: "ذَهَبَ ٱللَّهُ بِنُورِهِمْ",
                  tone: "accent",
                  notes: [
                    { text: "Allah took away their light — not by their choice.", emphasis: true },
                    { text: "Light with no lasting benefit." },
                  ],
                },
                {
                  ar: "وَتَرَكَهُمْ فِى ظُلُمَـٰتٍۢ",
                  note: "Left them in darknesses — opposite to Allah being with the believers.",
                },
                {
                  ar: "لَّا يُبْصِرُونَ",
                  tone: "accent",
                  notes: [{ text: "They cannot see — as if they lost their sight.", emphasis: true }],
                },
              ],
            ],
            footnotes: [
              {
                type: "crossRef",
                ar: "وَإِذْ رَءَا نَارًۭا فَقَالَ لِأَهْلِهِ ٱمْكُثُوا۟ إِنِّىٓ ءَانَسْتُ نَارًۭا لَّعَلِّىٓ ءَاتِيكُم مِّنْهَا بِقَبَسٍ أَوْ أَجِدُ عَلَى ٱلنَّارِ هُدًۭى",
                en: "When he saw a fire and said to his family, 'Stay here; I have perceived a fire — perhaps I can bring you a torch or find at the fire some guidance.'",
                cite: "Ṭā-Hā 20:10",
              },
              {
                type: "crossRef",
                ar: "وَلَمَّا جَآءَهُمْ كِتَـٰبٌۭ مِّنْ عِندِ ٱللَّهِ مُصَدِّقًۭا لِّمَا مَعَهُمْ وَكَانُوا۟ مِن قَبْلُ يَسْتَفْتِحُونَ عَلَى ٱلَّذِينَ كَفَرُوا۟ فَلَمَّا جَآءَهُم مَّا عَرَفُوا۟ كَفَرُوا۟ بِهِۦ ۚ فَلَعْنَةُ ٱللَّهِ عَلَى ٱلْكَـٰفِرِينَ",
                en: "When there came to them a Book from Allah confirming what was with them — though before they used to pray for victory over the disbelievers — yet when there came to them what they recognised, they disbelieved in it; so the curse of Allah is upon the disbelievers.",
                cite: "Al-Baqarah 2:89",
              },
            ],
          },
        ],
        phrases: [
          {
            hint: "Their example · like one who kindled fire",
            phrase: "مَثَلُهُمْ كَمَثَلِ ٱلَّذِى ٱسْتَوْقَدَ نَارًۭا",
            words: [
              { ar: "مَثَلُهُمْ", gloss: "Their example", points: ["Plural — the hypocrite group."] },
              {
                ar: "ٱسْتَوْقَدَ",
                gloss: "Kindled / sought fire",
                points: ["ista- — to ask for; compare ٱسْتَسْقَىٰ in 2:60."],
              },
            ],
          },
          {
            hint: "When it lit around him · Allah took their light",
            phrase: "فَلَمَّآ أَضَآءَتْ مَا حَوْلَهُۥ ذَهَبَ ٱللَّهُ بِنُورِهِمْ",
            words: [
              { ar: "أَضَآءَتْ", gloss: "It illuminated", points: ["The light grew — then was removed."] },
              { ar: "مَا حَوْلَهُۥ", gloss: "What surrounded him", points: ["His surroundings — briefly lit."] },
              { ar: "بِنُورِهِمْ", gloss: "Their light", points: ["Allah took it — not by their choice."] },
            ],
          },
          {
            hint: "Left in darkness · unable to see",
            phrase: "وَتَرَكَهُمْ فِى ظُلُمَـٰتٍۢ لَّا يُبْصِرُونَ",
            words: [
              { ar: "وَتَرَكَهُمْ", gloss: "Left them", points: ["Opposite to إِنَّ ٱللَّهَ مَعَنَا in 9:40."] },
              { ar: "ظُلُمَـٰتٍۢ", gloss: "Darknesses", points: ["Repeated word — layers of darkness."] },
            ],
          },
        ],
      },
      {
        type: "verseStudy",
        verse: 18,
        title: "Verse 18",
        topic: "hypocrites",
        topicRange: "17–20",
        translation:
          "Deaf, dumb and blind — so they will not return [to the right path].",
        blocks: [
          {
            type: "verseTags",
            tags: [
              { label: "Beginning", color: "green", words: ["صُمٌّۢ"] },
              { label: "Deaf", color: "amber", words: ["صُمٌّۢ"] },
              { label: "Dumb", color: "amber", words: ["بُكْمٌ"] },
              { label: "Blind", color: "amber", words: ["عُمْىٌۭ"] },
              { label: "Return", color: "amber", words: ["يَرْجِعُونَ"] },
            ],
          },
          {
            type: "segmentMap",
            verseRef: 18,
            rows: [
              [
                {
                  ar: "صُمٌّۢ بُكْمٌ عُمْىٌۭ",
                  tone: "accent",
                  notes: [
                    { text: "Deaf — sealed / blocked from the truth.", emphasis: true },
                    { text: "Dumb — initially mute regarding guidance.", emphasis: true },
                    { text: "Blind — unable to see the way.", emphasis: true },
                  ],
                },
                {
                  ar: "فَهُمْ لَا يَرْجِعُونَ",
                  tone: "accent",
                  notes: [
                    { text: "They cannot regain their senses.", emphasis: true },
                    { text: "Thus they have lost their way.", emphasis: true },
                  ],
                },
              ],
            ],
          },
          {
            type: "conceptExplain",
            title: "The hypocrites' faculties",
            points: [
              "Deaf — they do not hear the truth (صُمٌّ — sealed / blocked).",
              "Dumb — they do not speak it (بُكْمٌ — mute regarding guidance).",
              "Blind — they do not see it (عُمْىٌ — no spiritual sight).",
              "Consequence — they cannot return (لَا يَرْجِعُونَ).",
            ],
            body: "The fire parable ends with all three faculties lost — a brief, total darkness.",
          },
        ],
        phrases: [
          {
            hint: "Deaf · dumb · blind",
            phrase: "صُمٌّۢ بُكْمٌ عُمْىٌۭ",
            words: [
              { ar: "صُمٌّۢ", gloss: "Deaf", points: ["To seal / block / insist — no benefit reaches them."] },
              { ar: "بُكْمٌ", gloss: "Dumb", points: ["Initially mute — they do not speak the truth."] },
              { ar: "عُمْىٌۭ", gloss: "Blind", points: ["No sight of guidance."] },
            ],
          },
          {
            hint: "So they will not return",
            phrase: "فَهُمْ لَا يَرْجِعُونَ",
            words: [
              {
                ar: "لَا يَرْجِعُونَ",
                gloss: "They will not return",
                points: ["Cannot regain their senses — lost their way."],
              },
            ],
          },
        ],
      },
      {
        type: "verseStudy",
        verse: 19,
        title: "Verse 19",
        topic: "hypocrites",
        topicRange: "17–20",
        translation:
          "Or [it is] like a rainstorm from the sky within which is darkness, thunder and lightning. They put their fingers in their ears against the thunderclaps, fearful of death. But Allah is encompassing of the disbelievers.",
        blocks: [
          {
            type: "verseTags",
            tags: [
              { label: "Beginning", color: "green", words: ["أَوْ"] },
              { label: "Rainstorm", color: "amber", words: ["كَصَيِّبٍۢ"] },
              { label: "Thunder", color: "amber", words: ["وَرَعْدٌۭ"] },
              { label: "Lightning", color: "amber", words: ["وَبَرْقٌۭ"] },
              { label: "Thunderclaps", color: "amber", words: ["ٱلصَّوَٰعِقِ"] },
              { label: "Repeated", color: "blue", words: ["ظُلُمَـٰتٌۭ"] },
            ],
          },
          {
            type: "segmentMap",
            verseRef: 19,
            rows: [
              [
                {
                  ar: "أَوْ كَصَيِّبٍۢ مِّنَ ٱلسَّمَآءِ",
                  tone: "accent",
                  notes: [{ text: "2nd parable — like a heavy rainstorm.", emphasis: true }],
                },
                {
                  ar: "فِيهِ ظُلُمَـٰتٌۭ وَرَعْدٌۭ وَبَرْقٌۭ",
                  tone: "accent",
                  notes: [
                    { text: "Darknesses, thunder, and lightning.", emphasis: true },
                    { text: "Kinds of ظُلْمَة — layers of darkness.", emphasis: true },
                  ],
                },
              ],
              [
                {
                  ar: "يَجْعَلُونَ أَصَـٰبِعَهُمْ فِىٓ ءَاذَانِهِم",
                  tone: "accent",
                  notes: [
                    { text: "They put their fingers in their ears.", emphasis: true },
                    { text: "Exaggerating — blocking out the thunder.", emphasis: true },
                  ],
                },
                {
                  ar: "مِّنَ ٱلصَّوَٰعِقِ حَذَرَ ٱلْمَوْتِ",
                  note: "From the thunderclaps — in dread of death; no escape.",
                },
              ],
              [
                {
                  ar: "وَٱللَّهُ مُحِيطٌۢ بِٱلْكَـٰفِرِينَ",
                  tone: "accent",
                  notes: [{ text: "Allah encompasses the disbelievers — no way out.", emphasis: true }],
                },
              ],
            ],
          },
          { type: "stormParable" },
          { type: "encompassing" },
        ],
        phrases: [
          {
            hint: "Or like a rainstorm · darkness thunder lightning",
            phrase: "أَوْ كَصَيِّبٍۢ مِّنَ ٱلسَّمَآءِ فِيهِ ظُلُمَـٰتٌۭ وَرَعْدٌۭ وَبَرْقٌۭ",
            words: [
              { ar: "كَصَيِّبٍۢ", gloss: "Like a rainstorm", points: ["Abundant rain — a downpour from the sky."] },
              { ar: "وَرَعْدٌۭ", gloss: "Thunder", points: ["Part of the storm's terror."] },
              { ar: "وَبَرْقٌۭ", gloss: "Lightning", points: ["Flashes amid the darkness."] },
            ],
          },
          {
            hint: "Fingers in ears · dread of death",
            phrase: "يَجْعَلُونَ أَصَـٰبِعَهُمْ فِىٓ ءَاذَانِهِم مِّنَ ٱلصَّوَٰعِقِ حَذَرَ ٱلْمَوْتِ",
            words: [
              { ar: "أَصَـٰبِعَهُمْ", gloss: "Their fingers", points: ["Blocking their ears from the thunderclaps."] },
              { ar: "حَذَرَ ٱلْمَوْتِ", gloss: "In dread of death", points: ["Fear — yet no escape from Allah."] },
            ],
          },
          {
            hint: "Allah encompasses · the disbelievers",
            phrase: "وَٱللَّهُ مُحِيطٌۢ بِٱلْكَـٰفِرِينَ",
            words: [
              { ar: "مُحِيطٌۢ", gloss: "Encompassing", points: ["Surrounded from every side — no refuge."] },
            ],
          },
        ],
      },
      {
        type: "verseStudy",
        verse: 20,
        title: "Verse 20",
        topic: "hypocrites",
        topicRange: "17–20",
        translation:
          "The lightning almost snatches away their sight. Every time it lights [the way] for them, they walk therein; but when darkness comes over them, they stand [still]. And if Allah had willed, He could have taken away their hearing and their sight. Indeed, Allah is over all things competent.",
        blocks: [
          {
            type: "verseTags",
            tags: [
              { label: "Beginning", color: "green", words: ["يَكَادُ"] },
              { label: "Repeated", color: "blue", words: ["ٱلْبَرْقُ", "أَضَآءَ"] },
              { label: "Snatches", color: "amber", words: ["يَخْطَفُ"] },
              { label: "Walk", color: "amber", words: ["مَّشَوْا۟"] },
              { label: "Stand still", color: "amber", words: ["قَامُوا۟"] },
            ],
          },
          {
            type: "segmentMap",
            verseRef: 20,
            rows: [
              [
                {
                  ar: "يَكَادُ ٱلْبَرْقُ يَخْطَفُ أَبْصَـٰرَهُمْ",
                  tone: "accent",
                  notes: [{ text: "The lightning almost snatches their sight.", emphasis: true }],
                },
                {
                  ar: "كُلَّمَآ أَضَآءَ لَهُم مَّشَوْا۟ فِيهِ",
                  tone: "accent",
                  notes: [
                    { text: "Every time it lights for them — they walk.", emphasis: true },
                    { text: "Only when it benefits them.", emphasis: true },
                  ],
                },
              ],
              [
                {
                  ar: "وَإِذَآ أَظْلَمَ عَلَيْهِمْ قَامُوا۟",
                  tone: "accent",
                  notes: [
                    { text: "When darkness falls — they stand still.", emphasis: true },
                    { text: "They hesitate when there is no immediate gain.", emphasis: true },
                  ],
                },
                {
                  ar: "وَلَوْ شَآءَ ٱللَّهُ لَذَهَبَ بِسَمْعِهِمْ وَأَبْصَـٰرِهِمْ",
                  note: "Shows how weak they are against Allah's competence.",
                },
              ],
              [
                {
                  ar: "إِنَّ ٱللَّهَ عَلَىٰ كُلِّ شَىْءٍۢ قَدِيرٌۭ",
                  tone: "accent",
                  notes: [{ text: "Indeed, Allah is over all things competent.", emphasis: true }],
                },
              ],
            ],
          },
        ],
        phrases: [
          {
            hint: "Lightning · almost snatches their sight",
            phrase: "يَكَادُ ٱلْبَرْقُ يَخْطَفُ أَبْصَـٰرَهُمْ",
            words: [
              { ar: "يَخْطَفُ", gloss: "Snatches away", points: ["Almost takes their sight with each flash."] },
            ],
          },
          {
            hint: "When it lights · they walk",
            phrase: "كُلَّمَآ أَضَآءَ لَهُم مَّشَوْا۟ فِيهِ",
            words: [
              { ar: "كُلَّمَآ أَضَآءَ", gloss: "Whenever it lights", points: ["Only for them — when worldly benefit appears."] },
              { ar: "مَّشَوْا۟", gloss: "They walk", points: ["They move forward in the light."] },
            ],
          },
          {
            hint: "When darkness falls · they stand still",
            phrase: "وَإِذَآ أَظْلَمَ عَلَيْهِمْ قَامُوا۟",
            words: [
              { ar: "أَظْلَمَ", gloss: "It darkened", points: ["Darkness over them — they freeze."] },
              { ar: "قَامُوا۟", gloss: "They stood still", points: ["No movement without immediate benefit."] },
            ],
          },
          {
            hint: "Allah could take · hearing and sight",
            phrase: "وَلَوْ شَآءَ ٱللَّهُ لَذَهَبَ بِسَمْعِهِمْ وَأَبْصَـٰرِهِمْ",
            words: [
              {
                ar: "لَذَهَبَ بِسَمْعِهِمْ وَأَبْصَـٰرِهِمْ",
                gloss: "He could take their hearing and sight",
                points: ["Faculties still present — yet under Allah's power to remove."],
              },
            ],
          },
        ],
      },
      {
        type: "parableLinking",
        title: "Linking — parable responses",
        topic: "hypocrites",
        topicRange: "17–20",
      },
      {
        type: "covenantTopicsMap",
        title: "Topics Map B (Page 4)",
      },
      {
        type: "verseStudy",
        verse: 21,
        title: "Verse 21",
        topic: "covenant",
        topicRange: "21–24",
        translation:
          "O people, worship your Lord, who created you and those before you, that you may become righteous.",
        blocks: [
          {
            type: "verseTags",
            tags: [
              { label: "Beginning", color: "green", words: ["يَـٰٓأَيُّهَا"] },
              { label: "O mankind", color: "teal", words: ["ٱلنَّاسُ"] },
              { label: "Worship", color: "teal", words: ["ٱعْبُدُوا۟"] },
              { label: "Taqwā", color: "teal", words: ["تَتَّقُونَ"] },
            ],
          },
          {
            type: "conceptExplain",
            title: "Cause of revelation",
            body:
              "ʿAlqamah said: every address with يَـٰٓأَيُّهَا ٱلنَّاسُ is Meccan — directed to the people of Mecca; every address with يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ is Medinan. Hence this verse is an address to the Meccan idolaters. The address continues until verse 24; then verse 25 turns to the believers — mentioning their reward after the disbelievers' punishment.",
          },
          {
            type: "segmentMap",
            verseRef: 21,
            rows: [
              [
                {
                  ar: "يَـٰٓأَيُّهَا ٱلنَّاسُ",
                  tone: "accent",
                  notes: [
                    { text: "O mankind — the first universal call in the Qur'an.", emphasis: true },
                    { text: "Vocative address to all people.", emphasis: true },
                  ],
                },
                {
                  ar: "ٱعْبُدُوا۟ رَبَّكُمُ",
                  tone: "accent",
                  notes: [
                    { text: "Worship your Lord.", emphasis: true },
                    { text: "ٱللَّهُ is Rabb for believer and disbeliever alike.", emphasis: true },
                  ],
                },
              ],
              [
                {
                  ar: "ٱلَّذِى خَلَقَكُمْ وَٱلَّذِينَ مِن قَبْلِكُمْ",
                  note: "Who created you and those before you.",
                },
                {
                  ar: "لَعَلَّكُمْ تَتَّقُونَ",
                  tone: "accent",
                  notes: [{ text: "So that you may attain taqwā — to hope for righteousness.", emphasis: true }],
                },
              ],
            ],
          },
        ],
        phrases: [
          {
            hint: "O mankind · worship your Lord",
            phrase: "يَـٰٓأَيُّهَا ٱلنَّاسُ ٱعْبُدُوا۟ رَبَّكُمُ",
            words: [
              { ar: "يَـٰٓأَيُّهَا ٱلنَّاسُ", gloss: "O mankind", points: ["Universal address — all of humanity."] },
              { ar: "ٱعْبُدُوا۟", gloss: "Worship", points: ["The first command — single-minded devotion to Allah."] },
              {
                ar: "رَبَّكُمُ",
                gloss: "Your Lord",
                points: ["Allah is Rabb for the believer and the disbeliever."],
              },
            ],
          },
          {
            hint: "Who created you · and those before",
            phrase: "ٱلَّذِى خَلَقَكُمْ وَٱلَّذِينَ مِن قَبْلِكُمْ",
            words: [
              { ar: "خَلَقَكُمْ", gloss: "Created you", points: ["Creation is the basis of worship."] },
              { ar: "مِن قَبْلِكُمْ", gloss: "Before you", points: ["All previous generations — same Lord."] },
            ],
          },
          {
            hint: "That you may · become righteous",
            phrase: "لَعَلَّكُمْ تَتَّقُونَ",
            words: [
              { ar: "لَعَلَّكُمْ", gloss: "So that you may", points: ["To hope for — the purpose of worship."] },
              { ar: "تَتَّقُونَ", gloss: "Become righteous", points: ["Attain taqwā — God-consciousness."] },
            ],
          },
        ],
      },
      {
        type: "verseStudy",
        verse: 22,
        title: "Verse 22",
        topic: "covenant",
        topicRange: "21–24",
        translation:
          "[He] who made for you the earth a bed [spread out] and the sky a canopy, and sent down from the sky rain and brought forth thereby fruits as provision for you. So do not set up rivals to Allah [in worship] while you know [that He Alone has the right to be worshipped].",
        blocks: [
          {
            type: "verseTags",
            tags: [
              { label: "Beginning", color: "green", words: ["ٱلَّذِى"] },
              { label: "Resting place", color: "teal", words: ["فِرَٰشًۭا"] },
              { label: "Canopy", color: "teal", words: ["بِنَآءًۭ"] },
              { label: "Rivals", color: "teal", words: ["أَندَادًۭا"] },
              { label: "Repeated", color: "blue", words: ["ٱلسَّمَآءَ", "ٱلسَّمَآءِ"] },
            ],
          },
          {
            type: "segmentMap",
            verseRef: 22,
            rows: [
              [
                {
                  ar: "ٱلَّذِى جَعَلَ لَكُمُ ٱلْأَرْضَ فِرَٰشًۭا",
                  tone: "accent",
                  notes: [
                    { text: "1st proof — earth as a resting place.", emphasis: true },
                    { text: "Specially for you — honour to mankind.", emphasis: true },
                  ],
                },
                {
                  ar: "وَٱلسَّمَآءَ بِنَآءًۭ",
                  tone: "accent",
                  notes: [
                    { text: "2nd proof — sky as a canopy.", emphasis: true },
                    { text: "With no pillars — a protected ceiling.", emphasis: true },
                  ],
                },
              ],
              [
                {
                  ar: "وَأَنزَلَ مِنَ ٱلسَّمَآءِ مَآءًۭ",
                  tone: "accent",
                  notes: [{ text: "3rd proof — rain sent from the sky.", emphasis: true }],
                },
                {
                  ar: "فَأَخْرَجَ بِهِۦ مِنَ ٱلثَّمَرَٰتِ رِزْقًۭا لَّكُمْ",
                  tone: "accent",
                  notes: [{ text: "4th proof — fruits as provision for you.", emphasis: true }],
                },
              ],
              [
                {
                  ar: "فَلَا تَجْعَلُوا۟ لِلَّهِ أَندَادًۭا",
                  tone: "accent",
                  notes: [{ text: "Do not set up rivals to Allah.", emphasis: true }],
                },
                { ar: "وَأَنتُمْ تَعْلَمُونَ", note: "While you know — shirk with full awareness." },
              ],
            ],
          },
        ],
        phrases: [
          {
            hint: "Made earth a bed · sky a canopy",
            phrase: "ٱلَّذِى جَعَلَ لَكُمُ ٱلْأَرْضَ فِرَٰشًۭا وَٱلسَّمَآءَ بِنَآءًۭ",
            words: [
              { ar: "فِرَٰشًۭا", gloss: "A resting place / bed", points: ["Earth spread out for settlement."] },
              { ar: "بِنَآءًۭ", gloss: "A canopy / ceiling", points: ["Sky as a protective structure — with no pillars."] },
            ],
          },
          {
            hint: "Sent rain · brought forth fruits",
            phrase: "وَأَنزَلَ مِنَ ٱلسَّمَآءِ مَآءًۭ فَأَخْرَجَ بِهِۦ مِنَ ٱلثَّمَرَٰتِ رِزْقًۭا لَّكُمْ",
            words: [
              { ar: "مَآءًۭ", gloss: "Rain / water", points: ["Sent from the sky — life-giving."] },
              { ar: "رِزْقًۭا", gloss: "Provision", points: ["Fruits brought forth as sustenance."] },
            ],
          },
          {
            hint: "Do not set up rivals · while you know",
            phrase: "فَلَا تَجْعَلُوا۟ لِلَّهِ أَندَادًۭا وَأَنتُمْ تَعْلَمُونَ",
            words: [
              { ar: "أَندَادًۭا", gloss: "Rivals / equals", points: ["Partners in worship — forbidden."] },
              { ar: "تَعْلَمُونَ", gloss: "You know", points: ["With full awareness — no excuse."] },
            ],
          },
        ],
      },
      {
        type: "verseStudy",
        verse: 23,
        title: "Verse 23",
        topic: "covenant",
        topicRange: "21–24",
        translation:
          "And if you are in doubt about what We have sent down upon Our Servant, then produce a sūrah the like thereof and call upon your witnesses other than Allah, if you should be truthful.",
        blocks: [
          {
            type: "verseTags",
            tags: [
              { label: "Beginning", color: "green", words: ["وَإِن"] },
              { label: "Doubt", color: "teal", words: ["رَيْبٍۢ"] },
              { label: "Call", color: "teal", words: ["وَٱدْعُوا۟"] },
              { label: "Witnesses", color: "teal", words: ["شُهَدَآءَكُم"] },
            ],
          },
          {
            type: "segmentMap",
            verseRef: 23,
            rows: [
              [
                {
                  ar: "وَإِن كُنتُمْ فِى رَيْبٍۢ",
                  tone: "accent",
                  notes: [{ text: "If you are in doubt.", emphasis: true }],
                },
                {
                  ar: "مِّمَّا نَزَّلْنَا عَلَىٰ عَبْدِنَا",
                  tone: "accent",
                  notes: [
                    { text: "About what We sent down to Our Servant.", emphasis: true },
                    { text: "عَبْدِنَا — honouring the Prophet ﷺ; the best title.", emphasis: true },
                  ],
                },
              ],
              [
                {
                  ar: "فَأْتُوا۟ بِسُورَةٍۢ مِّن مِّثْلِهِۦ",
                  tone: "accent",
                  notes: [{ text: "Produce a sūrah like it — even one.", emphasis: true }],
                },
                {
                  ar: "وَٱدْعُوا۟ شُهَدَآءَكُم مِّن دُونِ ٱللَّهِ",
                  note: "Call your supporters and experts — without any help from Allah.",
                },
                {
                  ar: "إِن كُنتُمْ صَـٰدِقِينَ",
                  tone: "accent",
                  notes: [{ text: "If you are truthful — practically proving their lies.", emphasis: true }],
                },
              ],
            ],
          },
        ],
        phrases: [
          {
            hint: "If you are in doubt · about what We sent down",
            phrase: "وَإِن كُنتُمْ فِى رَيْبٍۢ مِّمَّا نَزَّلْنَا عَلَىٰ عَبْدِنَا",
            words: [
              { ar: "رَيْبٍۢ", gloss: "Doubt", points: ["Uncertainty about the Qur'an's divine origin."] },
              { ar: "عَبْدِنَا", gloss: "Our Servant", points: ["The Prophet ﷺ — honoured as Allah's servant."] },
            ],
          },
          {
            hint: "Produce a sūrah · call your witnesses",
            phrase: "فَأْتُوا۟ بِسُورَةٍۢ مِّن مِّثْلِهِۦ وَٱدْعُوا۟ شُهَدَآءَكُم مِّن دُونِ ٱللَّهِ",
            words: [
              { ar: "بِسُورَةٍۢ", gloss: "A sūrah", points: ["The challenge — even one chapter like it."] },
              {
                ar: "شُهَدَآءَكُم",
                gloss: "Your witnesses / supporters",
                points: ["Experts and helpers — besides Allah."],
              },
            ],
          },
        ],
      },
      {
        type: "verseStudy",
        verse: 24,
        title: "Verse 24",
        topic: "covenant",
        topicRange: "21–24",
        translation:
          "But if you do not — and you will never be able to — then fear the Fire, whose fuel is men and stones, prepared for the disbelievers.",
        blocks: [
          {
            type: "verseTags",
            tags: [
              { label: "Beginning", color: "green", words: ["فَإِن"] },
              { label: "Repeated", color: "blue", words: ["تَفْعَلُوا۟"] },
              { label: "Fear", color: "teal", words: ["فَٱتَّقُوا۟"] },
              { label: "Fuel", color: "teal", words: ["وَقُودُهَا"] },
              { label: "Page end", color: "amber", words: ["لِلْكَـٰفِرِينَ"] },
            ],
          },
          {
            type: "segmentMap",
            verseRef: 24,
            rows: [
              [
                {
                  ar: "فَإِن لَّمْ تَفْعَلُوا۟",
                  tone: "accent",
                  notes: [{ text: "If you do not — past failure.", emphasis: true }],
                },
                {
                  ar: "وَلَن تَفْعَلُوا۟",
                  tone: "accent",
                  notes: [{ text: "And you will never be able to — future impossibility.", emphasis: true }],
                },
                {
                  ar: "فَٱتَّقُوا۟ ٱلنَّارَ",
                  tone: "accent",
                  notes: [
                    { text: "Then fear the Fire — do not postpone.", emphasis: true },
                    { text: "فَ — hurry up and take guard.", emphasis: true },
                  ],
                },
              ],
              [
                {
                  ar: "ٱلَّتِى وَقُودُهَا ٱلنَّاسُ وَٱلْحِجَارَةُ",
                  tone: "accent",
                  notes: [
                    { text: "Whose fuel is men and stones.", emphasis: true },
                    { text: "Stones — idols; a special type of stone.", emphasis: true },
                  ],
                },
                {
                  ar: "أُعِدَّتْ لِلْكَـٰفِرِينَ",
                  tone: "accent",
                  notes: [
                    { text: "Prepared for the disbelievers.", emphasis: true },
                    { text: "Specially prepared — to frighten them.", emphasis: true },
                  ],
                },
              ],
            ],
          },
        ],
        phrases: [
          {
            hint: "If you do not · and never will",
            phrase: "فَإِن لَّمْ تَفْعَلُوا۟ وَلَن تَفْعَلُوا۟",
            words: [
              { ar: "لَّمْ تَفْعَلُوا۟", gloss: "You did not", points: ["Past — the challenge was not met."] },
              { ar: "وَلَن تَفْعَلُوا۟", gloss: "You will never", points: ["Future — perpetual inability to match the Qur'an."] },
            ],
          },
          {
            hint: "Fear the Fire · fuel of men and stones",
            phrase: "فَٱتَّقُوا۟ ٱلنَّارَ ٱلَّتِى وَقُودُهَا ٱلنَّاسُ وَٱلْحِجَارَةُ",
            words: [
              { ar: "فَٱتَّقُوا۟", gloss: "Fear / guard yourselves", points: ["Do not postpone — act immediately."] },
              { ar: "وَقُودُهَا", gloss: "Its fuel", points: ["Men and stones — idols among the stones."] },
            ],
          },
          {
            hint: "Prepared · for the disbelievers",
            phrase: "أُعِدَّتْ لِلْكَـٰفِرِينَ",
            words: [
              { ar: "أُعِدَّتْ", gloss: "Prepared", points: ["Specially made ready — to frighten them."] },
              { ar: "لِلْكَـٰفِرِينَ", gloss: "For the disbelievers", points: ["Page ending — consequence of rejecting the challenge."] },
            ],
          },
        ],
      },
      {
        type: "summary",
        title: "Linking beginnings & endings",
        topic: "hypocrites",
        topicRange: "17–20",
        body:
          "Each parable opens with a vivid image and closes with a definitive statement: the fire parable begins with مَثَلُهُمْ كَمَثَلِ and ends with لَّا يُبْصِرُونَ, then صُمٌّۢ بُكْمٌ عُمْىٌۭ closes with لَا يَرْجِعُونَ. The rain parable begins with أَوْ كَصَيِّبٍۢ مِّنَ ٱلسَّمَآءِ and ends with وَٱللَّهُ مُحِيطٌۢ بِٱلْكَـٰفِرِينَ, then يَكَادُ ٱلْبَرْقُ opens the detailed response and closes with إِنَّ ٱللَّهَ عَلَىٰ كُلِّ شَىْءٍۢ قَدِيرٌۭ.",
      },
    ],
  },
  {
    mushafPage: 5,
    verseRange: "25–29",
    title: "Reward, Parables & Evidence",
    mainTopic:
      "After warning the disbelievers, Allah gives glad tidings to the believers, sets forth parables, describes the fāsiqūn, and presents evidence for His oneness through creation.",
    topics: [
      {
        id: "jannah",
        label: "Al-Jannah",
        color: "rose",
        verseRange: "25",
        summary: "Glad tidings to those who believe and do good — gardens, rivers, fruit, purified spouses, and eternity.",
      },
      {
        id: "parable",
        label: "Parables",
        color: "amber",
        verseRange: "26",
        summary: "Allah is not ashamed to strike a parable — even of a mosquito or what is above it.",
      },
      {
        id: "fasiq",
        label: "Al-Fāsiqūn",
        color: "teal",
        verseRange: "27",
        summary: "Those who break Allah's covenant after pledging it, and sever what He ordered joined.",
      },
      {
        id: "tawhid",
        label: "Tawḥīd",
        color: "green",
        verseRange: "28–29",
        summary: "How can you disbelieve when He gave you life? He created all on earth, then turned to the heaven.",
      },
    ],
    gharibWords: [
      { verse: 25, label: "Page beg.", matchForms: ["وَبَشِّرِ"] },
      { verse: 25, label: "Good deeds", matchIncludes: "صَّالِح" },
      { verse: 25, label: "Gardens", matchForms: ["جَنَّاتٍ"] },
      { verse: 25, label: "Rivers", matchIncludes: "أَنْهَار" },
      { verse: 25, label: "Resemblance", matchIncludes: "مُتَشَابِه" },
      { verse: 25, label: "Purified spouses", matchIncludes: "مُطَهَّر" },
      { verse: 25, label: "Immortal", matchForms: ["خَالِدُونَ"] },
      { verse: 26, label: "Parable", matchIncludes: "مَثَل" },
      { verse: 26, label: "Ashamed", matchIncludes: "يَسْتَحْ" },
      { verse: 26, label: "Set forth", matchIncludes: "يَضْرِبَ" },
      { verse: 26, label: "Mosquito", matchIncludes: "بَعُوض" },
      { verse: 26, label: "Truth", matchIncludes: "ٱلْحَق" },
      { verse: 26, label: "Misleads", matchIncludes: "يُضِلُّ" },
      { verse: 26, label: "Disobedient", matchIncludes: "فَاسِق" },
      { verse: 27, label: "Break covenant", matchIncludes: "يَنقُضُونَ" },
      { verse: 27, label: "Covenant", matchIncludes: "عَهْد" },
      { verse: 27, label: "Ratifying", matchIncludes: "مِيثَ" },
      { verse: 27, label: "Sever", matchIncludes: "يَقْطَعُونَ" },
      { verse: 27, label: "Joined", matchIncludes: "يُوصَل" },
      { verse: 27, label: "Corruption", matchIncludes: "يُفْسِد" },
      { verse: 27, label: "Losers", matchIncludes: "خَاسِر" },
      { verse: 28, label: "Dead", matchForms: ["أَمْوَاتًا"] },
      { verse: 28, label: "Gave life", matchIncludes: "أَحْيَا" },
      { verse: 29, label: "Created earth", matchIncludes: "الْأَرْض" },
      { verse: 29, label: "Seven heavens", matchIncludes: "سَبْع" },
    ],
    sections: [
      {
        type: "pageTopicsMap",
        mapId: "page-5",
      },
      {
        type: "pageBridge",
        title: "Linking page 4 to page 5",
        note: "Verse 24 closes with fear of the Fire; verse 25 opens with glad tidings of Paradise.",
        from: {
          page: 4,
          verse: 24,
          highlight: "فَٱتَّقُوا۟ ٱلنَّارَ",
          note: "End of page 4 — fear / punishment for the disbelievers.",
        },
        to: {
          page: 5,
          verse: 25,
          highlight: "وَبَشِّرِ ٱلَّذِينَ ءَامَنُوا۟",
          note: "Beginning of page 5 — hope / reward for the believers.",
        },
      },
      {
        type: "fearHopeBalance",
      },
      {
        type: "summary",
        title: "The balance",
        neutral: true,
        body:
          "Page 4 ends with fear of the Fire — a warning that should move one to act. Page 5 opens with glad tidings of Paradise — hope that should inspire obedience. The believer holds both: fear of Allah's punishment and hope in His reward, without falling into despair or empty wishes.",
      },
      {
        type: "verseStudy",
        verse: 25,
        title: "Verse 25",
        topic: "jannah",
        topicRange: "25",
        translation:
          "And give good tidings to those who believe and do righteous deeds, that for them will be gardens beneath which rivers flow. Whenever they are provided with a provision of fruit therefrom, they will say, 'This is what we were provided with before.' And they will be given things in resemblance; and they will have therein purified spouses, and they will abide therein eternally.",
        blocks: [
          {
            type: "verseTags",
            tags: [
              { label: "Page beg.", color: "amber", words: ["وَبَشِّرِ"] },
              { label: "Good deeds", color: "rose", words: ["ٱلصَّـٰلِحَـٰتِ"] },
              { label: "Resemblance", color: "rose", words: ["مُتَشَـٰبِهًا"] },
              { label: "Immortal", color: "teal", words: ["خَـٰلِدُونَ"] },
            ],
          },
          {
            type: "segmentMap",
            verseRef: 25,
            rows: [
              [
                {
                  ar: "وَبَشِّرِ ٱلَّذِينَ ءَامَنُوا۟",
                  tone: "accent",
                  notes: [
                    { text: "Give glad tidings — addressed to the Prophet ﷺ.", emphasis: true },
                    { text: "Those who believe.", emphasis: true },
                  ],
                },
                {
                  ar: "وَعَمِلُوا۟ ٱلصَّـٰلِحَـٰتِ",
                  tone: "accent",
                  notes: [{ text: "And do righteous deeds — honouring them.", emphasis: true }],
                },
                {
                  ar: "أَنَّ لَهُمْ جَنَّـٰتٍ",
                  notes: [
                    { text: "Gardens — without ال, plural.", emphasis: true },
                    { text: "Hope / reward after the threat of page 4.", emphasis: true },
                  ],
                },
              ],
              [
                {
                  ar: "تَجْرِى مِن تَحْتِهَا ٱلْأَنْهَـٰرُ",
                  tone: "accent",
                  notes: [
                    { text: "Rivers flow beneath — purity and vitality.", emphasis: true },
                    { text: "Continuous provision.", emphasis: true },
                  ],
                },
                {
                  ar: "كُلَّمَا رُزِقُوا۟ مِنْهَا مِن ثَمَرَةٍ رِّزْقًا",
                  notes: [{ text: "Whenever they are given fruit as provision.", emphasis: true }],
                },
                {
                  ar: "قَالُوا۟ هَـٰذَا ٱلَّذِى رُزِقْنَا مِن قَبْلُ",
                  note: "They will say: this is what we were given before.",
                },
              ],
              [
                {
                  ar: "وَأُتُوا۟ بِهِۦ مُتَشَـٰبِهًا",
                  tone: "accent",
                  notes: [{ text: "Given in resemblance — same form, different taste; to maximise joy.", emphasis: true }],
                },
                {
                  ar: "وَلَهُمْ فِيهَآ أَزْوَٰجٌ مُّطَهَّرَةٌ",
                  notes: [
                    { text: "Purified spouses.", emphasis: true },
                    { text: "Physically and psychologically pure.", emphasis: true },
                  ],
                },
                {
                  ar: "وَهُمْ فِيهَا خَـٰلِدُونَ",
                  tone: "accent",
                  notes: [
                    { text: "They abide forever — security.", emphasis: true },
                    { text: "Eternity in Paradise.", emphasis: true },
                  ],
                },
              ],
            ],
          },
          { type: "jannahEquation" },
          { type: "jannahFeatures" },
          { type: "jannahWordBreakdown" },
        ],
        phrases: [
          {
            hint: "Give glad tidings · believe and do good",
            phrase: "وَبَشِّرِ ٱلَّذِينَ ءَامَنُوا۟ وَعَمِلُوا۟ ٱلصَّـٰلِحَـٰتِ",
            words: [
              { ar: "وَبَشِّرِ", gloss: "Give glad tidings", points: ["Command to the Prophet ﷺ — gift of good news."] },
              { ar: "ٱلصَّـٰلِحَـٰتِ", gloss: "Righteous deeds", points: ["Faith must be paired with action."] },
            ],
          },
          {
            hint: "Gardens · rivers beneath",
            phrase: "أَنَّ لَهُمْ جَنَّـٰتٍ تَجْرِى مِن تَحْتِهَا ٱلْأَنْهَـٰرُ",
            words: [
              { ar: "جَنَّـٰتٍ", gloss: "Gardens", points: ["Plural, without ال — many gardens of Paradise."] },
              { ar: "ٱلْأَنْهَـٰرُ", gloss: "The rivers", points: ["Flowing beneath — purity and continuous blessing."] },
            ],
          },
          {
            hint: "Fruit in resemblance · purified spouses · forever",
            phrase: "وَأُتُوا۟ بِهِۦ مُتَشَـٰبِهًا ۖ وَلَهُمْ فِيهَآ أَزْوَٰجٌ مُّطَهَّرَةٌ ۖ وَهُمْ فِيهَا خَـٰلِدُونَ",
            words: [
              { ar: "مُتَشَـٰبِهًا", gloss: "In resemblance", points: ["Same form, different taste — joy renewed."] },
              { ar: "مُّطَهَّرَةٌ", gloss: "Purified", points: ["Physically and psychologically pure."] },
              { ar: "خَـٰلِدُونَ", gloss: "Abiding forever", points: ["No death — complete security."] },
            ],
          },
        ],
      },
      {
        type: "mosquitoParable",
      },
      {
        type: "verseStudy",
        verse: 26,
        title: "Verse 26",
        topic: "parable",
        topicRange: "26",
        translation:
          "Indeed, Allah is not timid to present an example — that of a mosquito or what is above it. As for those who have believed, they know it is the truth from their Lord. But as for those who disbelieve, they say, 'What did Allah intend by this as an example?' He misleads many thereby and guides many thereby. And He misleads not except the defiantly disobedient.",
        blocks: [
          {
            type: "verseTags",
            tags: [
              { label: "Beginning", color: "green", words: ["إِنَّ"] },
              { label: "Ashamed", color: "rose", words: ["يَسْتَحْىِۦٓ"] },
              { label: "Set forth", color: "amber", words: ["مَثَلًا"] },
              { label: "Mosquito", color: "amber", words: ["بَعُوضَةً"] },
              { label: "Truth", color: "teal", words: ["ٱلْحَقُّ"] },
              { label: "Misleads", color: "rose", words: ["يُضِلُّ"] },
              { label: "Disobedient", color: "rose", words: ["ٱلْفَـٰسِقِينَ"] },
            ],
          },
          {
            type: "conceptExplain",
            title: "Cause of revelation",
            body:
              "Ibn ʿAbbās said, according to the report of Abū Sāliḥ: when Allah coined the two similitudes for the hypocrites — the fire parable (2:17) and the rainstorm (2:19) — they said Allah is too Exalted to coin similitudes. Hence Allah revealed this verse.",
          },
          {
            type: "conceptExplain",
            title: "Cause of revelation (2)",
            body:
              "Al-Ḥasan and Qatādah said: when Allah mentioned gnats and spiders in His Book and used them to coin similitudes for the disbelievers, the Jews laughed and said this does not resemble Allah's speech — and so Allah revealed this verse.",
          },
          {
            type: "conceptExplain",
            title: "Cause of revelation (3)",
            body:
              "From Ibn ʿAbbās: when Allah mentioned the deities of the idolaters — the fly (22:73) and the spider's web (29:41) — they said, 'See how Allah mentions gnats and spiders in the Qur'an revealed to Muḥammad; what is the use of this?' So Allah revealed: Indeed, Allah is not ashamed to strike a parable.",
          },
          { type: "revelationContext" },
          {
            type: "segmentMap",
            verseRef: 26,
            title: "Part 1 — the parable & the believers",
            rows: [
              [
                {
                  ar: "إِنَّ ٱللَّهَ لَا يَسْتَحْىِۦٓ",
                  tone: "accent",
                  notes: [
                    { text: "Shy / abstain — Allah is not ashamed.", emphasis: true },
                  ],
                },
                {
                  ar: "أَن يَضْرِبَ مَثَلًا",
                  tone: "accent",
                  notes: [{ text: "To strike / represent any example.", emphasis: true }],
                },
                {
                  ar: "مَّا بَعُوضَةً فَمَا فَوْقَهَا",
                  tone: "accent",
                  notes: [
                    { text: "A mosquito — to cut / bite.", emphasis: true },
                    { text: "Or what is even smaller above it.", emphasis: true },
                  ],
                },
              ],
              [
                {
                  ar: "فَأَمَّا ٱلَّذِينَ ءَامَنُوا۟",
                  notes: [{ text: "فَأَمَّا — their instant response.", emphasis: true }],
                },
                {
                  ar: "فَيَعْلَمُونَ أَنَّهُ ٱلْحَقُّ مِن رَّبِّهِمْ",
                  tone: "accent",
                  notes: [{ text: "They know it is the truth from their Lord.", emphasis: true }],
                },
              ],
            ],
          },
          {
            type: "segmentMap",
            verseRef: 26,
            title: "Part 2 — the disbelievers & al-fāsiqūn",
            rows: [
              [
                {
                  ar: "وَأَمَّا ٱلَّذِينَ كَفَرُوا۟",
                  notes: [{ text: "The Jews, polytheists, and hypocrites.", emphasis: true }],
                },
                {
                  ar: "فَيَقُولُونَ مَاذَآ أَرَادَ ٱللَّهُ بِهَـٰذَا مَثَلًا",
                  tone: "accent",
                  notes: [{ text: "What did Allah intend by this parable?", emphasis: true }],
                },
              ],
              [
                {
                  ar: "يُضِلُّ بِهِۦ كَثِيرًا",
                  tone: "accent",
                  notes: [{ text: "He misleads many thereby.", emphasis: true }],
                },
                {
                  ar: "وَيَهْدِى بِهِۦ كَثِيرًا",
                  tone: "accent",
                  notes: [{ text: "And guides many thereby.", emphasis: true }],
                },
              ],
              [
                {
                  ar: "وَمَا يُضِلُّ بِهِۦٓ إِلَّا ٱلْفَـٰسِقِينَ",
                  tone: "accent",
                  notes: [
                    { text: "None are misled except the fāsiqūn.", emphasis: true },
                    { text: "Those who chose not to be obedient.", emphasis: true },
                  ],
                },
              ],
            ],
          },
          { type: "fasiqConcept" },
          {
            type: "conceptExplain",
            title: "General meaning",
            body:
              "Allah is not ashamed to use any parable — small or great — to clarify the truth. Believers accept it as revelation; mockers reveal themselves. The same parable guides some and misleads others — only the fāsiqūn are truly misled.",
          },
        ],
        phrases: [
          {
            hint: "Not ashamed · strike a parable · mosquito",
            phrase: "إِنَّ ٱللَّهَ لَا يَسْتَحْىِۦٓ أَن يَضْرِبَ مَثَلًا مَّا بَعُوضَةً فَمَا فَوْقَهَا",
            words: [
              { ar: "لَا يَسْتَحْىِۦٓ", gloss: "He is not ashamed", points: ["Abstain from — Allah uses any example that serves truth."] },
              { ar: "يَضْرِبَ مَثَلًا", gloss: "Strike a parable", points: ["Represent any example — topic B of this page."] },
              { ar: "بَعُوضَةً", gloss: "A mosquito", points: ["To cut / bite — even the smallest creature."] },
              { ar: "فَمَا فَوْقَهَا", gloss: "What is above it", points: ["What is even smaller — Allah is not limited."] },
            ],
          },
          {
            hint: "Believers know · disbelievers mock",
            phrase: "فَأَمَّا ٱلَّذِينَ ءَامَنُوا۟ فَيَعْلَمُونَ أَنَّهُ ٱلْحَقُّ مِن رَّبِّهِمْ ۖ وَأَمَّا ٱلَّذِينَ كَفَرُوا۟ فَيَقُولُونَ مَاذَآ أَرَادَ ٱللَّهُ بِهَـٰذَا مَثَلًا",
            words: [
              { ar: "فَأَمَّا", gloss: "As for", points: ["Their instant response — two groups contrasted."] },
              { ar: "ٱلْحَقُّ", gloss: "The truth", points: ["Believers recognise revelation from their Lord."] },
              { ar: "مَاذَآ أَرَادَ", gloss: "What did He intend", points: ["Mockery from Jews, polytheists, and hypocrites."] },
            ],
          },
          {
            hint: "Guides and misleads · only the fāsiqūn",
            phrase: "يُضِلُّ بِهِۦ كَثِيرًا وَيَهْدِى بِهِۦ كَثِيرًا ۚ وَمَا يُضِلُّ بِهِۦٓ إِلَّا ٱلْفَـٰسِقِينَ",
            words: [
              { ar: "يُضِلُّ بِهِۦ", gloss: "He misleads thereby", points: ["Repeated — the same parable tests hearts."] },
              { ar: "وَيَهْدِى بِهِۦ", gloss: "He guides thereby", points: ["Many are guided by what others reject."] },
              { ar: "ٱلْفَـٰسِقِينَ", gloss: "The fāsiqūn", points: ["Who chose disobedience — فسقت التمرة."] },
            ],
          },
        ],
      },
      {
        type: "verseStudy",
        verse: 27,
        title: "Verse 27",
        topic: "fasiq",
        topicRange: "27",
        translation:
          "Who break the covenant of Allah after contracting it and sever that which Allah has ordered to be joined and cause corruption on earth. It is those who are the losers.",
        blocks: [
          {
            type: "verseTags",
            tags: [
              { label: "Beginning", color: "green", words: ["ٱلَّذِينَ"] },
              { label: "Break", color: "rose", words: ["يَنقُضُونَ"] },
              { label: "Covenant", color: "rose", words: ["عَهْدَ"] },
              { label: "Ratifying", color: "amber", words: ["مِيثَـٰقِهِۦ"] },
              { label: "Sever", color: "rose", words: ["يَقْطَعُونَ"] },
              { label: "Joined", color: "teal", words: ["يُوصَلَ"] },
              { label: "Corruption", color: "rose", words: ["يُفْسِدُونَ"] },
              { label: "Losers", color: "teal", words: ["ٱلْخَـٰسِرُونَ"] },
            ],
          },
          {
            type: "segmentMap",
            verseRef: 27,
            rows: [
              [
                {
                  ar: "ٱلَّذِينَ يَنقُضُونَ عَهْدَ ٱللَّهِ",
                  tone: "accent",
                  notes: [
                    { text: "They break / untie Allah's covenant.", emphasis: true },
                  ],
                },
                {
                  ar: "مِنۢ بَعْدِ مِيثَـٰقِهِۦ",
                  tone: "accent",
                  notes: [{ text: "After ratifying it — firm pledge.", emphasis: true }],
                },
                {
                  ar: "وَيَقْطَعُونَ مَآ أَمَرَ ٱللَّهُ بِهِۦٓ أَن يُوصَلَ",
                  tone: "accent",
                  notes: [
                    { text: "They sever what Allah ordered joined.", emphasis: true },
                    { text: "Kinship ties and unity of the believers.", emphasis: true },
                  ],
                },
              ],
              [
                {
                  ar: "وَيُفْسِدُونَ فِى ٱلْأَرْضِ",
                  tone: "accent",
                  notes: [
                    { text: "They spread corruption on earth.", emphasis: true },
                    { text: "Opposite of their purpose — worshipping Allah alone.", emphasis: true },
                  ],
                },
                {
                  ar: "أُو۟لَـٰٓئِكَ هُمُ ٱلْخَـٰسِرُونَ",
                  tone: "accent",
                  notes: [{ text: "They are the true losers.", emphasis: true }],
                },
              ],
            ],
          },
          { type: "covenantBreak" },
          {
            type: "conceptExplain",
            title: "What Allah ordered to be joined",
            points: [
              "الإيمان — faith in Allah.",
              "المؤمنون — the believers united together.",
              "عبادة الله — worshipping Allah (Islamic monotheism and its laws on earth).",
              "Also: keeping good relations with kith and kin.",
            ],
          },
          {
            type: "conceptExplain",
            title: "General meaning",
            body:
              "Al-Fāsiqūn break their pledge to Allah, cut the ties He commanded maintained, and spread corruption — the opposite of why they were created. They are the losers in this life and the next.",
          },
        ],
        phrases: [
          {
            hint: "Break the covenant · after pledging",
            phrase: "ٱلَّذِينَ يَنقُضُونَ عَهْدَ ٱللَّهِ مِنۢ بَعْدِ مِيثَـٰقِهِۦ",
            words: [
              { ar: "يَنقُضُونَ", gloss: "They break / untie", points: ["Violate the covenant after affirming it."] },
              { ar: "عَهْدَ ٱللَّهِ", gloss: "Allah's covenant", points: ["The pledge to obey and worship Him."] },
              { ar: "مِيثَـٰاقِهِۦ", gloss: "Its ratification", points: ["Firm — solemn binding pledge."] },
            ],
          },
          {
            hint: "Sever what Allah joined",
            phrase: "وَيَقْطَعُونَ مَآ أَمَرَ ٱللَّهُ بِهِۦٓ أَن يُوصَلَ",
            words: [
              { ar: "يَقْطَعُونَ", gloss: "They sever", points: ["Cut ties Allah commanded maintained."] },
              { ar: "يُوصَلَ", gloss: "Be joined", points: ["Faith, believers, worship — and kinship."] },
            ],
          },
          {
            hint: "Corruption · the losers",
            phrase: "وَيُفْسِدُونَ فِى ٱلْأَرْضِ ۚ أُو۟لَـٰٓئِكَ هُمُ ٱلْخَـٰسِرُونَ",
            words: [
              { ar: "يُفْسِدُونَ", gloss: "They corrupt", points: ["Spread mischief — worshipping others than Allah."] },
              { ar: "ٱلْخَـٰسِرُونَ", gloss: "The losers", points: ["True loss — in dunyā and ākhirah."] },
            ],
          },
        ],
      },
      {
        type: "verseStudy",
        verse: 28,
        title: "Verse 28",
        topic: "tawhid",
        topicRange: "28–29",
        translation:
          "How can you disbelieve in Allah when you were lifeless and He gave you life; then He will cause you to die, then He will bring you to life, and then to Him you will be returned.",
        blocks: [
          {
            type: "verseTags",
            tags: [
              { label: "Beginning", color: "green", words: ["كَيْفَ"] },
              { label: "Dead", color: "teal", words: ["أَمْوَٰتًا"] },
              { label: "Gave life", color: "teal", words: ["أَحْيَاكُمْ"] },
            ],
          },
          {
            type: "segmentMap",
            verseRef: 28,
            rows: [
              [
                {
                  ar: "كَيْفَ تَكْفُرُونَ بِٱللَّهِ",
                  tone: "accent",
                  notes: [{ text: "How can you disbelieve in Allah?", emphasis: true }],
                },
                {
                  ar: "وَكُنتُمْ أَمْوَٰتًا فَأَحْيَـٰكُمْ",
                  tone: "accent",
                  notes: [
                    { text: "You were dead — He gave you life.", emphasis: true },
                    { text: "Creation of mankind — first evidence.", emphasis: true },
                  ],
                },
              ],
              [
                { ar: "ثُمَّ يُمِيتُكُمْ", note: "Then He will cause you to die." },
                {
                  ar: "ثُمَّ يُحْيِيكُمْ",
                  notes: [{ text: "Then He will bring you back to life — resurrection.", emphasis: true }],
                },
                {
                  ar: "ثُمَّ إِلَيْهِ تُرْجَعُونَ",
                  tone: "accent",
                  notes: [{ text: "Then to Him you will return.", emphasis: true }],
                },
              ],
            ],
          },
        ],
        phrases: [
          {
            hint: "How disbelieve · when you were dead",
            phrase: "كَيْفَ تَكْفُرُونَ بِٱللَّهِ وَكُنتُمْ أَمْوَٰتًا فَأَحْيَـٰكُمْ",
            words: [
              { ar: "كَيْفَ", gloss: "How?", points: ["A rebuke — how can you deny after this?"] },
              { ar: "أَمْوَٰتًا", gloss: "Lifeless / dead", points: ["You existed in non-existence before creation."] },
              { ar: "أَحْيَـٰكُمْ", gloss: "He gave you life", points: ["Allah brought you into being."] },
            ],
          },
        ],
      },
      {
        type: "verseStudy",
        verse: 29,
        title: "Verse 29",
        topic: "tawhid",
        topicRange: "28–29",
        translation:
          "It is He who created for you all that is on the earth; then He directed Himself to the heaven and made them seven heavens, and He is Knowing of all things.",
        blocks: [
          {
            type: "verseTags",
            tags: [
              { label: "Beginning", color: "green", words: ["هُوَ"] },
              { label: "Earth", color: "teal", words: ["ٱلْأَرْضِ"] },
              { label: "Seven heavens", color: "teal", words: ["سَبْعَ"] },
              { label: "Page end", color: "amber", words: ["بِكُلِّ شَىْءٍ"] },
            ],
          },
          {
            type: "segmentMap",
            verseRef: 29,
            rows: [
              [
                {
                  ar: "هُوَ ٱلَّذِى خَلَقَ لَكُم مَّا فِى ٱلْأَرْضِ جَمِيعًا",
                  tone: "accent",
                  notes: [
                    { text: "He created all on earth for you.", emphasis: true },
                    { text: "Creation of earth — evidence for tawḥīd.", emphasis: true },
                  ],
                },
                {
                  ar: "ثُمَّ ٱسْتَوَىٰٓ إِلَى ٱلسَّمَآءِ",
                  notes: [{ text: "Then He turned to the heaven.", emphasis: true }],
                },
              ],
              [
                {
                  ar: "فَسَوَّىٰهُنَّ سَبْعَ سَمَـٰوَٰتٍ",
                  tone: "accent",
                  notes: [{ text: "He fashioned them into seven heavens.", emphasis: true }],
                },
                {
                  ar: "وَهُوَ بِكُلِّ شَىْءٍ عَلِيمٌ",
                  notes: [{ text: "He is Knowing of all things — page end.", emphasis: true }],
                },
              ],
            ],
          },
        ],
        phrases: [
          {
            hint: "Created earth · then the heavens",
            phrase: "هُوَ ٱلَّذِى خَلَقَ لَكُم مَّا فِى ٱلْأَرْضِ جَمِيعًا ثُمَّ ٱسْتَوَىٰٓ إِلَى ٱلسَّمَآءِ فَسَوَّىٰهُنَّ سَبْعَ سَمَـٰوَٰتٍ",
            words: [
              { ar: "خَلَقَ", gloss: "He created", points: ["Everything on earth made for mankind's benefit."] },
              { ar: "سَبْعَ سَمَـٰوَٰتٍ", gloss: "Seven heavens", points: ["Then the sky fashioned into seven layers."] },
            ],
          },
        ],
      },
    ],
  },
  {
    mushafPage: 6,
    verseRange: "30–37",
    title: "Ādam, Hawwāʾ & Iblīs",
    mainTopic:
      "The story of Ādam's creation, the angels' objection, prostration of Iblīs, life in Paradise, descent to earth, and Allah's acceptance of repentance.",
    topics: [
      {
        id: "A",
        label: "Ādam's creation",
        color: "rose",
        verseRange: "30–35",
        summary:
          "The story of Ādam's creation & the successive authority of mankind on earth.",
      },
      {
        id: "B",
        label: "Descent",
        color: "green",
        verseRange: "36–37",
        summary:
          "The descending of Ādam, Hawwāʾ & Shayṭān on earth.",
      },
    ],
    gharibWords: [
      { verse: 30, label: "Page beg.", matchForms: ["وَإِذْ"] },
      { verse: 30, label: "Successor", matchIncludes: "خَلِيف" },
      { verse: 30, label: "Corruption", matchIncludes: "يُفْسِد" },
      { verse: 30, label: "Shed blood", matchIncludes: "يَسْفِك" },
      { verse: 30, label: "Glorify", matchIncludes: "نُسَبِّح" },
      { verse: 30, label: "Sanctify", matchIncludes: "نُقَدِّس" },
      { verse: 31, label: "The names", matchIncludes: "الْأَسْمَاء" },
      { verse: 31, label: "Displayed", matchForms: ["عَرَضَ"] },
      { verse: 31, label: "Inform", matchIncludes: "أَنبِئ" },
      { verse: 32, label: "Exalted", matchForms: ["سُبْحَانَكَ"] },
      { verse: 32, label: "No knowledge", matchIncludes: "لَا عِلْمَ" },
      { verse: 32, label: "The Knowing", matchIncludes: "الْعَلِيم" },
      { verse: 32, label: "The Wise", matchIncludes: "الْحَكِيم" },
      { verse: 33, label: "Reveal", matchIncludes: "تُبْدُونَ" },
      { verse: 33, label: "Unseen", matchIncludes: "غَيْب" },
      { verse: 33, label: "Conceal", matchIncludes: "تَكْتُمُونَ" },
      { verse: 34, label: "Prostrate", matchIncludes: "اسْجُد" },
      { verse: 34, label: "Satan", matchIncludes: "إِبْلِيس" },
      { verse: 34, label: "Arrogance", matchIncludes: "اسْتَكْبَر" },
      { verse: 35, label: "Dwell", matchForms: ["اسْكُنْ"] },
      { verse: 35, label: "Eat in ease", matchIncludes: "رَغَد" },
      { verse: 35, label: "Wherever", matchIncludes: "حَيْثُ" },
      { verse: 35, label: "Don't approach", matchIncludes: "تَقْرَب" },
      { verse: 36, label: "Deflect", matchIncludes: "أَزَلَّ" },
      { verse: 36, label: "Descend", matchIncludes: "اهْبِط" },
      { verse: 36, label: "Enemies", matchIncludes: "عَدُو" },
      { verse: 36, label: "Habitation", matchIncludes: "مُسْتَقَر" },
      { verse: 36, label: "For a time", matchIncludes: "حِين" },
      { verse: 37, label: "Received", matchIncludes: "تَلَقَّى" },
      { verse: 37, label: "Accepted repentance", matchForms: ["تَابَ"] },
      { verse: 37, label: "Most forgiving", matchIncludes: "التَّوَّاب" },
      { verse: 37, label: "Most Merciful", matchIncludes: "الرَّحِيم" },
      { verse: 37, label: "Page end.", matchIncludes: "الرَّحِيم" },
    ],
    sections: [
      {
        type: "pageTopicsMap",
        mapId: "page-6",
      },
      {
        type: "pageBridge",
        title: "Linking page 5 to page 6",
        topic: "A",
        topicRange: "30–35",
        note: "Verse 29 ends with Allah's all-encompassing knowledge; verse 30 opens the story of Ādam's creation.",
        from: {
          page: 5,
          verse: 29,
          highlight: "وَهُوَ بِكُلِّ شَىْءٍ عَلِيمٌ",
          note: "Page end — All-Knowing of His creation.",
        },
        to: {
          page: 6,
          verse: 30,
          highlight: "إِنِّي جَاعِلٌ فِي الْأَرْضِ خَلِيفَةً",
          note: "Page beginning — the story of Ādam's creation; Allah says: I know what you do not know (أَعْلَمُ).",
        },
      },
      {
        type: "summary",
        title: "The link — knowledge",
        topic: "A",
        topicRange: "30–35",
        body:
          "At the end of page 5, Allah is described as عَلِيمٌ — All-Knowing of everything He created. Page 6 opens with verse 30, where Allah tells the angels أَعْلَمُ — 'I know what you do not know.' The attribute of divine knowledge at the close of page 5 sets the stage for the dialogue about knowledge in the creation of Ādam.",
      },
      {
        type: "verseStudy",
        verse: 30,
        title: "Verse 30",
        topic: "A",
        topicRange: "30–35",
        translation:
          "And [mention] when your Lord said to the angels, 'Indeed, I will place upon the earth a successive authority.' They said, 'Will You place upon it one who causes corruption therein and sheds blood, while we glorify You with praise and sanctify You?' He said, 'Indeed, I know that which you do not know.'",
        blocks: [
          {
            type: "verseTags",
            tags: [
              { label: "Page beg.", color: "amber", words: ["وَإِذْ"] },
              { label: "Successor", color: "rose", words: ["خَلِيفَةً"] },
              { label: "Corruption", color: "rose", words: ["يُفْسِدُ"] },
              { label: "Shed blood", color: "rose", words: ["يَسْفِكُ"] },
              { label: "Glorify", color: "rose", words: ["نُسَبِّحُ"] },
              { label: "All-Knowing", color: "rose", words: ["أَعْلَمُ"] },
            ],
          },
          {
            type: "segmentMap",
            verseRef: 30,
            title: "Verse 30 — opening phrase",
            rows: [
              [
                { ar: "وَ", note: "And" },
                { ar: "إِذْ", note: "Time adverb = when" },
                {
                  ar: "اذْكُرْ",
                  tone: "muted",
                  notes: [
                    { text: "Omitted", emphasis: true },
                    {
                      bullets: [
                        "1 — omitted",
                        "2 — mention / tell when Allah told the angels",
                        "3 — Arabic is informative with few words (مَا قَلَّ وَدَلَّ)",
                      ],
                    },
                  ],
                },
                {
                  ar: "رَبُّكَ",
                  notes: [
                    { text: "O Muḥammad", prefix: "يَا مُحَمَّد", emphasis: true },
                  ],
                },
                {
                  ar: "خَلِيفَةً",
                  tone: "accent",
                  notes: [
                    { text: "Successor / khalīfah", emphasis: true },
                    { text: "1 — Refers to: human being (creation)", emphasis: true },
                    {
                      text: "2 — Means",
                      bullets: [
                        "Someone who proceeded",
                        "Someone who comes after another",
                      ],
                    },
                  ],
                },
              ],
            ],
          },
          { type: "khalifahChart" },
          {
            type: "segmentMap",
            verseRef: 30,
            title: "The angels' objection",
            rows: [
              [
                {
                  ar: "قَالُوا",
                  notes: [{ text: "The Angels", emphasis: true }],
                },
                {
                  ar: "مَن يُفْسِدُ فِيهَا",
                  notes: [
                    { text: "By disbelief (كُفْر) & disobedience to Allah", emphasis: true },
                    { text: "Cause of corruption → injustice, animosity & violence", emphasis: true },
                  ],
                },
                {
                  ar: "وَيَسْفِكُ الدِّمَاءَ",
                  notes: [
                    { text: "Sheds blood", emphasis: true },
                    { text: "The act of killing — from corruption on earth", emphasis: true },
                  ],
                },
              ],
            ],
          },
          {
            type: "qa",
            title: "How did the angels know?",
            question:
              "How did the angels know that Ādam (ʿalayhis-salām) will cause corruption and shed blood?",
            answers: [
              "Allah informed them.",
              "All they know is that they are the only creation of Allah who are infallible.",
              "They know about the other creation of Allah — the jinn — who lived on earth before mankind, caused corruption and shed blood. So they made an analogy between the jinn and mankind and thus deduced they will do the same as the jinn.",
            ],
          },
          {
            type: "segmentMap",
            verseRef: 30,
            title: "Glorifying Allah",
            rows: [
              [
                {
                  ar: "نُسَبِّحُ",
                  notes: [
                    { text: "1 — Glorify: deny anything that decreases Allah's perfection", emphasis: true },
                  ],
                },
                {
                  ar: "بِحَمْدِكَ",
                  notes: [
                    { text: "2 — Praise: prove & confirm perfection to Allah", emphasis: true },
                  ],
                },
                {
                  ar: "وَنُقَدِّسُ",
                  notes: [
                    { text: "3 — Sanctify: purify belief beyond تَسْبِيح", emphasis: true },
                  ],
                },
                {
                  ar: "لَكَ",
                  notes: [
                    { text: "They believe only Allah deserves praise", emphasis: true },
                    { text: "Sincerity & loyalty only to Allah", emphasis: true },
                  ],
                },
              ],
            ],
          },
          {
            type: "conceptExplain",
            title: "Allah's reply — أَعْلَمُ",
            points: [
              "Allah has perfect, complete, unlimited knowledge (عِلْم).",
              "Only Allah knows the wisdom behind creating Ādam & mankind.",
              "Allah honoured mankind before the angels — although He knows what they will do, He defended them from the very beginning.",
              "Among mankind there will be prophets & pious men.",
            ],
          },
          { type: "verse30Speakers" },
        ],
        phrases: [
          {
            hint: "When your Lord said · successor on earth",
            phrase: "وَإِذْ قَالَ رَبُّكَ لِلْمَلَائِكَةِ إِنِّي جَاعِلٌ فِي الْأَرْضِ خَلِيفَةً",
            words: [
              { ar: "وَإِذْ", gloss: "And [mention] when", points: ["Time adverb — recall when Allah told the angels."] },
              { ar: "رَبُّكَ", gloss: "Your Lord", points: ["O Muḥammad — addressed to the Prophet ﷺ."] },
              {
                ar: "خَلِيفَةً",
                gloss: "A successor / khalīfah",
                points: [
                  "Refers to the human being (creation).",
                  "Someone who proceeded; someone who comes after another.",
                  "Generations after generations — in authority, prophets, and children.",
                ],
              },
            ],
          },
          {
            hint: "Angels' objection · glorifying Allah",
            phrase: "قَالُوا أَتَجْعَلُ فِيهَا مَن يُفْسِدُ فِيهَا وَيَسْفِكُ الدِّمَاءَ وَنَحْنُ نُسَبِّحُ بِحَمْدِكَ وَنُقَدِّسُ لَكَ",
            words: [
              { ar: "يُفْسِدُ", gloss: "Causes corruption", points: ["By disbelief & disobedience to Allah — leading to injustice and violence."] },
              { ar: "يَسْفِكُ الدِّمَاءَ", gloss: "Sheds blood", points: ["The act of killing — resulting from corruption on earth."] },
              { ar: "نُسَبِّحُ", gloss: "We glorify", points: ["Denying anything that might decrease Allah's perfection."] },
              { ar: "بِحَمْدِكَ", gloss: "With Your praise", points: ["Proving & confirming perfection to Allah."] },
              { ar: "نُقَدِّسُ", gloss: "We sanctify", points: ["Purifying belief from anything that would decrease Allah's perfection."] },
            ],
          },
          {
            hint: "Allah's reply — I know what you do not",
            phrase: "قَالَ إِنِّي أَعْلَمُ مَا لَا تَعْلَمُونَ",
            words: [
              {
                ar: "أَعْلَمُ",
                gloss: "I know",
                points: [
                  "Allah has perfect, complete, unlimited knowledge.",
                  "Only Allah knows the wisdom behind creating Ādam & mankind.",
                  "Allah honoured mankind before the angels — and among them will be prophets & pious men.",
                ],
              },
            ],
          },
        ],
      },
      {
        type: "verseStudy",
        verse: 31,
        title: "Verse 31",
        topic: "A",
        topicRange: "30–35",
        translation:
          "And He taught Adam the names — all of them. Then He displayed them to the angels and said, 'Inform Me of the names of these, if you are truthful.'",
        blocks: [
          {
            type: "verseTags",
            tags: [
              { label: "Beginning", color: "green", words: ["وَعَلَّمَ"] },
              { label: "All the names", color: "rose", words: ["كُلَّهَا"] },
              { label: "Displayed", color: "rose", words: ["عَرَضَهُمْ"] },
              { label: "Inform", color: "rose", words: ["أَنبِئُونِي"] },
              { label: "Repeated", color: "blue", words: ["الْأَسْمَاءَ", "بِأَسْمَاءِ"] },
            ],
          },
          {
            type: "segmentMap",
            verseRef: 31,
            rows: [
              [
                {
                  ar: "وَعَلَّمَ آدَمَ",
                  tone: "accent",
                  notes: [{ text: "The source of our knowledge is Allah.", emphasis: true }],
                },
                {
                  ar: "الْأَسْمَاءَ كُلَّهَا",
                  tone: "accent",
                  notes: [
                    { text: "The names.", emphasis: true },
                    { text: "All of the names.", emphasis: true },
                  ],
                },
              ],
              [
                {
                  ar: "ثُمَّ عَرَضَهُمْ عَلَى الْمَلَائِكَةِ",
                  tone: "accent",
                  notes: [{ text: "To display / show / expose them to the angels.", emphasis: true }],
                },
                {
                  ar: "فَقَالَ أَنبِئُونِي",
                  notes: [
                    {
                      text: "Inform — important news; stronger than أَخْبِر.",
                      prefix: "النَّبَأُ",
                      emphasis: true,
                    },
                  ],
                },
              ],
              [
                {
                  ar: "بِأَسْمَاءِ هَؤُلَاءِ",
                  notes: [
                    {
                      text: "Reasonable only / reasonable + unreasonable.",
                      bullets: ["All things & beings / only the displayed ones."],
                    },
                  ],
                },
                {
                  ar: "إِن كُنتُمْ صَادِقِينَ",
                  tone: "accent",
                  notes: [
                    { text: "To prove their point — that they have knowledge and wisdom.", emphasis: true },
                  ],
                },
              ],
            ],
            footnotes: [
              {
                type: "footer",
                text: "Certain beings & things were displayed at that time — also could be reasonable or unreasonable.",
              },
              {
                type: "footer",
                text: "Note: Allah did not mention which names, so there is no need to know them — instead we should look for the wisdom behind that.",
              },
            ],
          },
          {
            type: "qa",
            title: "What were the names?",
            question:
              "What were the names that Allah (SWT) taught Ādam (ʿalayhis-salām)?",
            answers: [
              "The names and attributes of all of Allah's creation.",
              "Examples: animals, rivers, mountains, iron — their attributes, and so on.",
            ],
          },
        ],
        phrases: [
          {
            hint: "Taught Adam · all the names",
            phrase: "وَعَلَّمَ آدَمَ الْأَسْمَاءَ كُلَّهَا",
            words: [
              { ar: "وَعَلَّمَ", gloss: "And He taught", points: ["The source of our knowledge is Allah."] },
              { ar: "الْأَسْمَاءَ", gloss: "The names", points: ["Names of all of Allah's creation and their attributes."] },
              { ar: "كُلَّهَا", gloss: "All of them", points: ["Complete — every name Allah chose to teach."] },
            ],
          },
          {
            hint: "Displayed to angels · inform Me",
            phrase: "ثُمَّ عَرَضَهُمْ عَلَى الْمَلَائِكَةِ فَقَالَ أَنبِئُونِي بِأَسْمَاءِ هَؤُلَاءِ إِن كُنتُمْ صَادِقِينَ",
            words: [
              { ar: "عَرَضَهُمْ", gloss: "He displayed them", points: ["Showed / exposed them to the angels."] },
              { ar: "أَنبِئُونِي", gloss: "Inform Me", points: ["Stronger than أَخْبِر — important news."] },
              { ar: "صَادِقِينَ", gloss: "Truthful", points: ["To prove they have knowledge and wisdom."] },
            ],
          },
        ],
      },
      {
        type: "verseStudy",
        verse: 32,
        title: "Verse 32",
        topic: "A",
        topicRange: "30–35",
        translation:
          "They said, 'Exalted are You; we have no knowledge except what You have taught us. Indeed, it is You who is the Knowing, the Wise.'",
        blocks: [
          {
            type: "verseTags",
            tags: [
              { label: "Beginning", color: "green", words: ["قَالُوا"] },
              { label: "Exalted", color: "rose", words: ["سُبْحَانَكَ"] },
              { label: "No knowledge", color: "rose", words: ["لَا عِلْمَ"] },
              { label: "Taught us", color: "rose", words: ["عَلَّمْتَنَا"] },
              { label: "The Knowing", color: "teal", words: ["الْعَلِيمُ"] },
              { label: "The Wise", color: "teal", words: ["الْحَكِيمُ"] },
            ],
          },
          {
            type: "conceptExplain",
            title: "General meaning",
            body:
              "The angels admit that they were wrong and limited in their understanding, and that Allah knows everything. But then they say that Allah is al-Ḥakīm — the All-Wise. They say this because only Allah knows the wisdom for which He created Ādam.",
          },
          {
            type: "segmentMap",
            verseRef: 32,
            rows: [
              [
                {
                  ar: "سُبْحَانَكَ",
                  tone: "accent",
                  notes: [
                    { text: "Subḥān — constantly in its place; Sabaha = floating without drowning.", emphasis: true },
                    { text: "The angels said: 'You are constantly (always) perfect.'", emphasis: true },
                  ],
                },
                {
                  ar: "لَا عِلْمَ لَنَا إِلَّا مَا عَلَّمْتَنَا",
                  notes: [
                    { text: "Exceptive particle", emphasis: true },
                    { text: "We have absolutely no knowledge except what You have taught us.", emphasis: true },
                  ],
                },
              ],
              [
                {
                  ar: "إِنَّكَ أَنْتَ",
                  notes: [
                    { text: "Confirming — indeed You, Allah, who…", emphasis: true },
                  ],
                },
                {
                  ar: "الْعَلِيمُ",
                  tone: "accent",
                  notes: [
                    { text: "The All-Knowing — angels have عِلْم; Allah is الْعَلِيمُ.", emphasis: true },
                  ],
                },
                {
                  ar: "الْحَكِيمُ",
                  tone: "accent",
                  notes: [
                    { text: "The All-Wise — wisdom: correct, precise judgement.", emphasis: true },
                  ],
                },
              ],
            ],
          },
        ],
        phrases: [
          {
            hint: "Exalted are You · no knowledge except what You taught",
            phrase: "قَالُوا سُبْحَانَكَ لَا عِلْمَ لَنَا إِلَّا مَا عَلَّمْتَنَا",
            words: [
              {
                ar: "سُبْحَانَكَ",
                gloss: "Exalted are You",
                points: [
                  "Subḥān — constantly in its place; Sabaha = floating without drowning.",
                  "The angels said: 'You are constantly (always) perfect.'",
                ],
              },
              {
                ar: "لَا عِلْمَ لَنَا إِلَّا مَا عَلَّمْتَنَا",
                gloss: "No knowledge except what You taught us",
                points: ["Exceptive particle — we have absolutely no knowledge except what You taught us."],
              },
            ],
          },
          {
            hint: "Indeed You · the Knowing · the Wise",
            phrase: "إِنَّكَ أَنْتَ الْعَلِيمُ الْحَكِيمُ",
            words: [
              { ar: "إِنَّكَ أَنْتَ", gloss: "Indeed You", points: ["Confirming — indeed You, Allah, who…"] },
              { ar: "الْعَلِيمُ", gloss: "The All-Knowing", points: ["Angels have عِلْم; Allah is الْعَلِيمُ."] },
              { ar: "الْحَكِيمُ", gloss: "The All-Wise", points: ["Wisdom: correct, precise judgement."] },
            ],
          },
        ],
      },
      {
        type: "verseStudy",
        verse: 33,
        title: "Verse 33",
        topic: "A",
        topicRange: "30–35",
        translation:
          "He said, 'O Adam, inform them of their names.' And when he had informed them of their names, He said, 'Did I not tell you that I know the unseen [aspects] of the heavens and the earth? And I know what you reveal and what you have concealed.'",
        blocks: [
          {
            type: "verseTags",
            tags: [
              { label: "Beginning", color: "green", words: ["قَالَ"] },
              { label: "Inform them", color: "rose", words: ["أَنبِئْهُم"] },
              { label: "Repeated", color: "blue", words: ["بِأَسْمَائِهِمْ"] },
              { label: "Unseen", color: "rose", words: ["غَيْبَ"] },
              { label: "Reveal", color: "rose", words: ["تُبْدُونَ"] },
              { label: "Conceal", color: "rose", words: ["تَكْتُمُونَ"] },
            ],
          },
          {
            type: "segmentMap",
            verseRef: 33,
            title: "Part 1 — O Adam, inform them",
            rows: [
              [
                { ar: "قَالَ يَا آدَمُ", note: "Allah addresses Ādam" },
                {
                  ar: "أَنبِئْهُم",
                  notes: [{ text: "To inform them — the angels", emphasis: true }],
                },
                {
                  ar: "بِأَسْمَائِهِمْ",
                  notes: [
                    { text: "Prefixed preposition بِ — of / inform them of", emphasis: true },
                  ],
                },
              ],
              [
                {
                  ar: "فَلَمَّا أَنبَأَهُم",
                  notes: [
                    { text: "Named them straightaway, immediately", emphasis: true },
                    { text: "Informed them", emphasis: true },
                  ],
                },
                {
                  ar: "أَلَمْ",
                  tone: "accent",
                  notes: [
                    { text: "أَ — to question; لَمْ — negative particle", emphasis: true },
                    { text: "Did I not tell you…?", emphasis: true },
                  ],
                },
              ],
            ],
          },
          {
            type: "segmentMap",
            verseRef: 33,
            title: "Part 2 — unseen, reveal & conceal",
            rows: [
              [
                {
                  ar: "غَيْبَ",
                  notes: [{ text: "Unseen — of the heavens and the earth", emphasis: true }],
                },
                {
                  ar: "تُبْدُونَ",
                  notes: [{ text: "Reveal — what you make known", emphasis: true }],
                },
                {
                  ar: "تَكْتُمُونَ",
                  notes: [{ text: "Conceal — what you hide; Allah knows both", emphasis: true }],
                },
              ],
            ],
          },
          { type: "angelsMannerQuiz" },
          { type: "angelsHiding" },
        ],
        phrases: [
          {
            hint: "O Adam · inform them of their names",
            phrase: "قَالَ يَا آدَمُ أَنبِئْهُم بِأَسْمَائِهِمْ",
            words: [
              { ar: "أَنبِئْهُم", gloss: "Inform them", points: ["The angels — Ādam named them straightaway."] },
              { ar: "بِأَسْمَائِهِمْ", gloss: "Of their names", points: ["Prefixed preposition بِ — of / inform them of."] },
            ],
          },
          {
            hint: "Did I not tell you · unseen · reveal · conceal",
            phrase: "أَلَمْ أَقُل لَّكُمْ إِنِّي أَعْلَمُ غَيْبَ السَّمَاوَاتِ وَالْأَرْضِ وَأَعْلَمُ مَا تُبْدُونَ وَمَا كُنتُمْ تَكْتُمُونَ",
            words: [
              { ar: "أَلَمْ", gloss: "Did I not", points: ["أَ — to question; لَمْ — negative particle."] },
              { ar: "غَيْبَ", gloss: "The unseen", points: ["Of the heavens and the earth."] },
              { ar: "تُبْدُونَ", gloss: "You reveal", points: ["What you make known."] },
              { ar: "تَكْتُمُونَ", gloss: "You conceal", points: ["What you hide — Allah knows both."] },
            ],
          },
        ],
      },
      {
        type: "verseStudy",
        verse: 34,
        title: "Verse 34",
        topic: "A",
        topicRange: "30–35",
        translation:
          "And [mention] when We said to the angels, 'Prostrate before Adam'; so they prostrated, except for Iblīs. He refused and was arrogant and became of the disbelievers.",
        blocks: [
          {
            type: "verseTags",
            tags: [
              { label: "Beginning", color: "green", words: ["وَإِذْ"] },
              { label: "Prostrate", color: "rose", words: ["اسْجُدُوا"] },
              { label: "Satan", color: "rose", words: ["إِبْلِيسَ"] },
              { label: "Arrogance", color: "rose", words: ["وَاسْتَكْبَرَ"] },
            ],
          },
          {
            type: "conceptExplain",
            title: "General meaning",
            body:
              "When Allah commanded the angels to prostrate to Ādam, they all obeyed except Iblīs — who refused out of arrogance and thereby became one of the disbelievers.",
          },
          {
            type: "segmentMap",
            verseRef: 34,
            rows: [
              [
                {
                  ar: "وَإِذْ",
                  notes: [
                    { text: "وَ — And; إِذْ — when (time adverb)", emphasis: true },
                    { text: "To join with the first وَإِذْ", emphasis: true },
                  ],
                },
                {
                  ar: "قُلْنَا",
                  notes: [{ text: "Allah — plural to show greatness", emphasis: true }],
                },
                {
                  ar: "اسْجُدُوا لِآدَمَ فَسَجَدُوا",
                  tone: "accent",
                  notes: [
                    { text: "To prostrate — not worshipping Ādam, but obedience to Allah", emphasis: true },
                    {
                      text: "How?",
                      bullets: ["Like praying", "Or greeting someone", "We don't know!"],
                    },
                  ],
                },
              ],
              [
                {
                  ar: "أَبَىٰ",
                  notes: [
                    { text: "He refused — as if in command between equals; shows disobedience to Allah's authority", emphasis: true },
                  ],
                },
                {
                  ar: "وَاسْتَكْبَرَ",
                  tone: "accent",
                  notes: [
                    { text: "وَ — And; اسْتَكْبَرَ — he sought / was arrogant", emphasis: true },
                  ],
                },
                {
                  ar: "وَكَانَ مِنَ الْكَافِرِينَ",
                  notes: [
                    { text: "Was — past tense; Iblīs was always a kāfir deep inside, and Allah exposed the disease of arrogance in his heart", emphasis: true },
                  ],
                },
              ],
            ],
          },
          {
            type: "qa",
            title: "Why prostrate to Ādam?",
            question:
              "Why did Allah (SWT) order the angels to prostrate before Ādam (ʿalayhis-salām)?",
            answers: [
              "To prove that Ādam is at a higher rank than all other creatures.",
              "As mentioned in the verse: 'So when I have proportioned him and breathed into him of My [created] soul, then fall down to him in prostration.' (Ṣād 38:72)",
            ],
            examples: [
              {
                ar: "فَإِذَا سَوَّيْتُهُ وَنَفَخْتُ فِيهِ مِن رُّوحِي فَقَعُوا لَهُ سَاجِدِينَ",
                note: "So when I have proportioned him and breathed into him of My [created] soul, then fall down to him in prostration.",
                cite: "Ṣād 38:72",
              },
            ],
          },
          { type: "keyMeanings" },
        ],
        phrases: [
          {
            hint: "When We said · prostrate before Adam",
            phrase: "وَإِذْ قُلْنَا لِلْمَلَائِكَةِ اسْجُدُوا لِآدَمَ فَسَجَدُوا",
            words: [
              { ar: "قُلْنَا", gloss: "We said", points: ["Allah — plural to show greatness."] },
              {
                ar: "اسْجُدُوا لِآدَمَ",
                gloss: "Prostrate before Adam",
                points: [
                  "Not worshipping Ādam — obedience to Allah.",
                  "How? Like praying, or greeting — we don't know.",
                ],
              },
            ],
          },
          {
            hint: "Iblīs refused · was arrogant · disbeliever",
            phrase: "إِلَّا إِبْلِيسَ أَبَىٰ وَاسْتَكْبَرَ وَكَانَ مِنَ الْكَافِرِينَ",
            words: [
              {
                ar: "أَبَىٰ",
                gloss: "He refused",
                points: ["As if in command — refusal between equals; shows disobedience to Allah's authority."],
              },
              { ar: "وَاسْتَكْبَرَ", gloss: "And was arrogant", points: ["Sought greatness — past tense; Iblīs was always a kāfir deep inside."] },
              { ar: "الْكَافِرِينَ", gloss: "The disbelievers", points: ["Allah exposed the disease of arrogance in his heart."] },
            ],
          },
        ],
      },
      {
        type: "verseStudy",
        verse: 35,
        title: "Verse 35",
        topic: "A",
        topicRange: "30–35",
        translation:
          "And We said, 'O Adam, dwell, you and your wife, in Paradise and eat therefrom in [ease and] abundance wherever you will. But do not approach this tree, lest you be among the wrongdoers.'",
        blocks: [
          {
            type: "verseTags",
            tags: [
              { label: "Beginning", color: "green", words: ["يَا آدَمُ"] },
              { label: "Dwell", color: "rose", words: ["اسْكُنْ"] },
              { label: "Eat in ease", color: "rose", words: ["رَغَدًا"] },
              { label: "Wherever", color: "rose", words: ["حَيْثُ"] },
              { label: "Repeated", color: "blue", words: ["وَقُلْنَا"] },
              { label: "Don't approach", color: "rose", words: ["تَقْرَبَا"] },
              { label: "Ending", color: "cyan", words: ["الظَّالِمِينَ"] },
            ],
          },
          {
            type: "segmentMap",
            verseRef: 35,
            title: "Dwell in Paradise",
            rows: [
              [
                {
                  ar: "يَا آدَمُ",
                  notes: [{ text: "Calling them to grab attention", emphasis: true }],
                },
                {
                  ar: "اسْكُنْ",
                  note: "Does not necessarily imply permanent residence",
                },
                {
                  ar: "أَنْتَ وَزَوْجُكَ",
                  tone: "accent",
                  notes: [
                    { text: "Your wife — Allah honoured male & female", emphasis: true },
                  ],
                },
              ],
              [
                {
                  ar: "وَكُلَا",
                  note: "Both of you",
                },
                {
                  ar: "رَغَدًا",
                  notes: [
                    { text: "Freely without fear — carefree, with joy & delight", emphasis: true },
                  ],
                },
                {
                  ar: "حَيْثُ",
                  tone: "accent",
                  notes: [{ text: "Location adverb — wherever", emphasis: true }],
                },
              ],
            ],
          },
          {
            type: "segmentMap",
            verseRef: 35,
            title: "Do not approach the tree",
            rows: [
              [
                {
                  ar: "وَلَا تَقْرَبَا",
                  notes: [{ text: "You both don't approach", emphasis: true }],
                },
                {
                  ar: "هَٰذِهِ الشَّجَرَةَ",
                  tone: "accent",
                  notes: [{ text: "Only this particular tree", emphasis: true }],
                },
                {
                  ar: "فَ",
                  tone: "accent",
                  notes: [{ text: "فَ — particle of cause", emphasis: true }],
                },
                {
                  ar: "فَتَكُونَا مِنَ الظَّالِمِينَ",
                  notes: [
                    { text: "Both of you will be of the wrongdoers / injustice", emphasis: true },
                  ],
                },
              ],
            ],
          },
        ],
        phrases: [
          {
            hint: "O Adam · dwell · you and your wife · eat freely",
            phrase: "وَقُلْنَا يَا آدَمُ اسْكُنْ أَنْتَ وَزَوْجُكَ الْجَنَّةَ وَكُلَا مِنْهَا رَغَدًا حَيْثُ شِئْتُمَا",
            words: [
              { ar: "يَا آدَمُ", gloss: "O Adam", points: ["Calling to grab attention."] },
              { ar: "اسْكُنْ", gloss: "Dwell", points: ["Does not necessarily imply permanent residence."] },
              { ar: "وَزَوْجُكَ", gloss: "Your wife", points: ["Allah honoured male & female."] },
              { ar: "رَغَدًا", gloss: "In abundance / ease", points: ["Freely without fear — carefree, with joy & delight."] },
              { ar: "حَيْثُ", gloss: "Wherever", points: ["Location adverb."] },
            ],
          },
          {
            hint: "Do not approach · this tree · wrongdoers",
            phrase: "وَلَا تَقْرَبَا هَٰذِهِ الشَّجَرَةَ فَتَكُونَا مِنَ الظَّالِمِينَ",
            words: [
              { ar: "تَقْرَبَا", gloss: "You both approach", points: ["Negative — you both don't approach."] },
              { ar: "هَٰذِهِ الشَّجَرَةَ", gloss: "This tree", points: ["Only this particular tree."] },
              { ar: "فَ", gloss: "Then / so", points: ["Particle of cause."] },
              { ar: "الظَّالِمِينَ", gloss: "The wrongdoers", points: ["Both of you will be among those who commit injustice."] },
            ],
          },
        ],
      },
      {
        type: "verseStudy",
        verse: 36,
        title: "Verse 36",
        topic: "B",
        topicRange: "36–37",
        translation:
          "But Satan caused them to slip out of it and removed them from that [condition] in which they had been. And We said, 'Go down, [all of you], as enemies to one another, and you will have upon the earth a place of settlement and provision for a time.'",
        blocks: [
          {
            type: "verseTags",
            tags: [
              { label: "Beginning", color: "green", words: ["فَأَزَلَّ"] },
              { label: "Deflect", color: "green", words: ["أَزَلَّهُمَا"] },
              { label: "Expelled", color: "green", words: ["أَخْرَجَهُمَا"] },
              { label: "Descend", color: "green", words: ["اهْبِطُوا"] },
              { label: "Enemies", color: "green", words: ["عَدُوٌّ"] },
              { label: "Habitation", color: "green", words: ["مُسْتَقَرٌّ"] },
              { label: "For a time", color: "green", words: ["حِينٍ"] },
            ],
          },
          {
            type: "conceptExplain",
            title: "General meaning",
            body:
              "Shayṭān caused Ādam and his wife to slip from Allah's command. They were expelled from Paradise and descended to earth — mankind and Shayṭān as enemies — with a temporary dwelling and provision until the appointed time.",
          },
          {
            type: "segmentMap",
            verseRef: 36,
            rows: [
              [
                { ar: "فَ", note: "And / immediately" },
                {
                  ar: "فَأَزَلَّهُمَا الشَّيْطَانُ",
                  notes: [{ text: "Al-Shayṭān caused them to slip", emphasis: true }],
                },
                {
                  ar: "عَنْهَا",
                  notes: [
                    { text: "The tree — referring to Allah's instructions / guidance", emphasis: true },
                  ],
                },
              ],
              [
                {
                  ar: "مِمَّا كَانُوا فِيهِ",
                  notes: [
                    { text: "مِمَّا — from what; فِيهِ — majority: refers to Allah; few: al-Shayṭān", emphasis: true },
                  ],
                },
                {
                  ar: "اهْبِطُوا",
                  tone: "accent",
                  notes: [
                    { text: "Descend — Ādam, Hawwāʾ & al-Shayṭān; from higher to lower", emphasis: true },
                  ],
                },
                {
                  ar: "بَعْضُكُمْ لِبَعْضٍ عَدُوٌّ",
                  notes: [{ text: "Al-Shayṭān with Ādam & Eve (mankind)", emphasis: true }],
                },
              ],
              [
                {
                  ar: "مُسْتَقَرٌّ",
                  note: "Place to settle in — on earth",
                },
                {
                  ar: "وَمَتَاعٌ",
                  note: "Provision",
                },
                {
                  ar: "إِلَىٰ حِينٍ",
                  tone: "accent",
                  notes: [{ text: "Until death / the Last Day", emphasis: true }],
                },
              ],
            ],
          },
        ],
        phrases: [
          {
            hint: "Shayṭān caused them to slip · expelled them",
            phrase: "فَأَزَلَّهُمَا الشَّيْطَانُ عَنْهَا فَأَخْرَجَهُمَا مِمَّا كَانُوا فِيهِ",
            words: [
              { ar: "أَزَلَّهُمَا", gloss: "Caused them to slip", points: ["From Allah's instructions / guidance."] },
              { ar: "مِمَّا كَانُوا فِيهِ", gloss: "From what they were in", points: ["Majority: refers to Allah; few: al-Shayṭān."] },
            ],
          },
          {
            hint: "Descend · enemies · habitation · provision · for a time",
            phrase: "اهْبِطُوا بَعْضُكُمْ لِبَعْضٍ عَدُوٌّ ۖ وَلَكُمْ فِي الْأَرْضِ مُسْتَقَرٌّ وَمَتَاعٌ إِلَىٰ حِينٍ",
            words: [
              { ar: "اهْبِطُوا", gloss: "Descend", points: ["Ādam, Hawwāʾ & Shayṭān — from higher to lower."] },
              { ar: "عَدُوٌّ", gloss: "Enemies", points: ["Shayṭān with mankind."] },
              { ar: "مُسْتَقَرٌّ", gloss: "Place to settle", points: ["On earth."] },
              { ar: "مَتَاعٌ", gloss: "Provision", points: ["Until death / the Last Day."] },
            ],
          },
        ],
      },
      {
        type: "verseStudy",
        verse: 37,
        title: "Verse 37",
        topic: "B",
        topicRange: "36–37",
        translation:
          "Then Adam received from his Lord [certain] words, and He accepted his repentance. Indeed, it is He who is the Accepting of Repentance, the Merciful.",
        blocks: [
          {
            type: "verseTags",
            tags: [
              { label: "Received", color: "green", words: ["تَلَقَّىٰ"] },
              { label: "Words", color: "green", words: ["كَلِمَاتٍ"] },
              { label: "Accepted repentance", color: "green", words: ["تَابَ"] },
              { label: "Most forgiving", color: "green", words: ["التَّوَّابُ"] },
              { label: "Most Merciful", color: "green", words: ["الرَّحِيمُ"] },
              { label: "Page end.", color: "amber", words: ["الرَّحِيمُ"] },
            ],
          },
          {
            type: "conceptExplain",
            title: "General meaning",
            body:
              "After descending, Ādam received words of repentance from his Lord. Allah accepted his tawbah — showing that He is at-Tawwāb ar-Raḥīm, the One who accepts repentance again and again.",
          },
          {
            type: "segmentMap",
            verseRef: 37,
            rows: [
              [
                {
                  ar: "فَتَلَقَّىٰ",
                  notes: [
                    { text: "After Ādam's descending he received", emphasis: true },
                  ],
                },
                {
                  ar: "آدَمُ مِن رَّبِّهِ",
                  notes: [
                    { text: "Refers to Ādam — although he sinned, yet he belongs to his Lord", emphasis: true },
                  ],
                },
                {
                  ar: "كَلِمَاتٍ",
                  notes: [
                    { text: "Words revealed by Allah — in chapter 7:23", emphasis: true },
                  ],
                },
              ],
              [
                {
                  ar: "فَتَابَ عَلَيْهِ",
                  tone: "accent",
                  notes: [
                    { text: "Accepted his repentance — pronoun refers to Ādam", emphasis: true },
                  ],
                },
                {
                  ar: "إِنَّهُ هُوَ",
                  note: "Indeed He is",
                },
                {
                  ar: "التَّوَّابُ",
                  tone: "accent",
                  notes: [
                    { text: "Who accepts repentance repetitively", emphasis: true },
                  ],
                },
                {
                  ar: "الرَّحِيمُ",
                  tone: "accent",
                  notes: [{ text: "The Most Merciful", emphasis: true }],
                },
              ],
            ],
          },
          {
            type: "qa",
            title: "What were the words?",
            question:
              "What were the words (كَلِمَاتٍ) that were revealed to Ādam (ʿalayhis-salām) by Allah (SWT) for repentance?",
            answers: [
              "They said, 'Our Lord, we have wronged ourselves, and if You do not forgive us and have mercy upon us, we will surely be among the losers.' (Al-Aʿrāf 7:23)",
            ],
            examples: [
              {
                ar: "قَالَا رَبَّنَا ظَلَمْنَا أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ",
                note: "They said, 'Our Lord, we have wronged ourselves, and if You do not forgive us and have mercy upon us, we will surely be among the losers.'",
                cite: "Al-Aʿrāf 7:23",
              },
            ],
          },
        ],
        phrases: [
          {
            hint: "Ādam received words · repentance accepted",
            phrase: "فَتَلَقَّىٰ آدَمُ مِن رَّبِّهِ كَلِمَاتٍ فَتَابَ عَلَيْهِ",
            words: [
              { ar: "تَلَقَّىٰ", gloss: "He received", points: ["After descending from Paradise."] },
              { ar: "مِن رَّبِّهِ", gloss: "From his Lord", points: ["Although he sinned, he belongs to his Lord."] },
              { ar: "كَلِمَاتٍ", gloss: "Words", points: ["Revealed by Allah — see Al-Aʿrāf 7:23."] },
              { ar: "تَابَ", gloss: "He accepted repentance", points: ["Upon Ādam — Allah forgave him."] },
            ],
          },
          {
            hint: "Indeed He · the Accepting of repentance · the Merciful",
            phrase: "إِنَّهُ هُوَ التَّوَّابُ الرَّحِيمُ",
            words: [
              { ar: "إِنَّهُ هُوَ", gloss: "Indeed He is", points: ["Emphatic confirmation of Allah's attributes."] },
              { ar: "التَّوَّابُ", gloss: "The Accepting of repentance", points: ["Who accepts repentance repetitively."] },
              { ar: "الرَّحِيمُ", gloss: "The Merciful", points: ["Page end — Allah's mercy upon repentant servants."] },
            ],
          },
        ],
      },
      {
        type: "summary",
        title: "Lessons from page 6",
        topic: "B",
        topicRange: "36–37",
        body:
          "From Ādam's creation through his descent and repentance, page 6 teaches: Allah honours mankind, knows the unseen, and accepts tawbah. The angels admit their limits; Iblīs exposes arrogance; Shayṭān is an open enemy. Whoever follows Allah's guidance will not fear nor grieve.",
      },
      {
        type: "page6Linking",
        title: "Linking",
        neutral: true,
      },
      {
        type: "page6AngelsEvents",
        title: "Events map — Allah addressing the angels",
        topic: "A",
        topicRange: "30–35",
      },
      {
        type: "page6AdamEvents",
        title: "Events map — Allah addressing Ādam",
        topic: "B",
        topicRange: "35–37",
      },
      {
        type: "baqarahUniquePhrases",
        title: "Phrases unique to al-Baqarah",
        neutral: true,
      },
      {
        type: "page6SpeechPatterns",
        title: "Repeated speech words",
        topic: "A",
        topicRange: "30–36",
      },
      {
        type: "page6KnowledgePatterns",
        title: "Knowledge word patterns",
        topic: "A",
        topicRange: "30–33",
      },
    ],
  },
  {
    mushafPage: 7,
    verseRange: "38–48",
    title: "Banū Isrāʾīl — Opening Address",
    mainTopic:
      "Allah addresses the Children of Israel: remember My favour, believe in what confirms your scripture, and do not sell My signs cheaply.",
    topics: [
      {
        id: "address",
        label: "Address",
        color: "teal",
        verseRange: "40–44",
        summary:
          "O Children of Israel — remember My favour upon you, fulfil the covenant, and fear none but Me.",
      },
      {
        id: "prophecy",
        label: "Prophecy",
        color: "green",
        verseRange: "45–48",
        summary:
          "Believe in what I have sent down confirming what you have, and fear the Last Day.",
      },
    ],
    sections: [
      {
        type: "mushafTopicsMap",
        showBanner: true,
      },
      {
        type: "summary",
        title: "End of page — linking to page 8",
        body:
          "Verse 47: Allah favoured the Children of Israel in the world with blessings. Verse 48: fear the Last Day. Page 8 continues with verse 49 — the first detailed blessing: deliverance from Pharaoh.",
      },
    ],
  },
  {
    mushafPage: 8,
    verseRange: "49–57",
    title: "Banū Isrāʾīl's Blessings — Pharaoh & the Sea",
    mainTopic:
      "Allah reminds the Children of Israel of His blessings on their ancestors and urges them to be grateful — and to believe in the Prophethood of Muḥammad ﷺ and accept Islam.",
    topics: [
      {
        id: "A",
        label: "Pharaoh & the sea",
        color: "rose",
        verseRange: "49–50",
        summary:
          "The story of saving the Children of Israel from Pharaoh — the first of Allah's blessings upon them.",
        subTopics: [
          { label: "1st blessing — deliverance from Firʿawn", verses: "49" },
          { label: "Parted the sea / drowned Firʿawn", verses: "50" },
        ],
      },
      {
        id: "B",
        label: "Blessings & sins",
        color: "green",
        verseRange: "51–57",
        summary:
          "Seven blessings upon the Children of Israel and two sins they committed.",
        subTopics: [
          { label: "1st sin — worshipping the calf", verses: "51" },
          { label: "2nd blessing — forgiveness", verses: "52" },
          { label: "3rd blessing — Torah / Furqān", verses: "53" },
          { label: "4th blessing — repentance accepted", verses: "54" },
          { label: "2nd sin — arrogance", verses: "55" },
          { label: "5th blessing — revived after death", verses: "56" },
          { label: "6th & 7th blessings — clouds, mann & quails", verses: "57" },
        ],
      },
    ],
    gharibWords: [
      { verse: 49, label: "Page beg.", matchForms: ["وَإِذْ"] },
      { verse: 49, label: "Saved you", matchForms: ["نَجَّيْنَاكُم", "نَجَّيْنَٰكُم"] },
      { verse: 49, label: "Afflict", matchIncludes: "يَسُوم" },
      { verse: 49, label: "Worst", matchForms: ["سُوءَ"] },
      { verse: 49, label: "Slaughtering", matchIncludes: "يُذَبِّح" },
      { verse: 49, label: "Spare", matchIncludes: "يَسْتَحْي" },
      { verse: 49, label: "Trial", matchForms: ["بَلَاءٌ"] },
      { verse: 50, label: "Parted", matchForms: ["فَرَقْنَا"] },
      { verse: 50, label: "Drowned", matchForms: ["أَغْرَقْنَا"] },
      { verse: 51, label: "Appointed", matchForms: ["وَاعَدْنَا"] },
      { verse: 51, label: "The calf", matchIncludes: "الْعِجْل" },
      { verse: 51, label: "Wrongdoers", matchIncludes: "ظَالِم" },
      { verse: 52, label: "Forgave", matchForms: ["عَفَوْنَا"] },
      { verse: 53, label: "The Criterion", matchIncludes: "الْفُرْقَان" },
      { verse: 54, label: "Creator", matchIncludes: "بَارِئ" },
      { verse: 54, label: "Repentance", matchIncludes: "التَّوَّاب" },
      { verse: 55, label: "Manifestly", matchForms: ["جَهْرَةً"] },
      { verse: 55, label: "Thunderbolt", matchIncludes: "الصَّاعِق" },
      { verse: 56, label: "Revived", matchForms: ["بَعَثْنَاكُم"] },
      { verse: 57, label: "Mann", matchIncludes: "الْمَنَّ" },
      { verse: 57, label: "Quails", matchForms: ["السَّلْوَىٰ", "ٱلسَّلْوَىٰ"] },
      { verse: 57, label: "Good things", matchIncludes: "طَيِّب" },
      { verse: 57, label: "Page end.", matchIncludes: "يَظْلِمُونَ" },
    ],
    detailedTopics: [
      {
        verse: 49,
        tone: "rose",
        summary: "1st blessing — saving them from the people of Pharaoh.",
        anchor: { left: 16.7, top: 10, width: 74 },
      },
      {
        verse: 50,
        tone: "rose",
        summary: "Parted the sea / drowned Firʿawn.",
        anchor: { left: 16.7, top: 21.1, width: 46 },
      },
      {
        verse: 51,
        tone: "rose",
        summary: "1st sin (worshipping the calf) · Mūsā appointed 40 nights.",
        anchor: { left: 16.7, top: 26.8, width: 23 },
      },
      {
        verse: 52,
        tone: "green",
        summary: "2nd blessing — forgiveness (worshipping the calf).",
        anchor: { left: 16.7, top: 38, width: 69 },
      },
      {
        verse: 53,
        tone: "green",
        summary: "3rd blessing — given the Torah / Furqān.",
        anchor: { left: 16.7, top: 43.5, width: 74 },
      },
      {
        verse: 54,
        tone: "green",
        summary: "4th blessing — accepting their repentance and cancelling the law.",
        anchor: { left: 16.7, top: 49.1, width: 74 },
      },
      {
        verse: 55,
        tone: "rose",
        summary: "2nd sin — arrogance and impoliteness.",
        anchor: { left: 16.7, top: 65.8, width: 59 },
      },
      {
        verse: 56,
        tone: "green",
        summary: "5th blessing — revived them from death.",
        anchor: { left: 16.7, top: 71.5, width: 15 },
      },
      {
        verse: 57,
        tone: "green",
        summary:
          "6th blessing — shaded with clouds · 7th — luxury food (al-mann & quails).",
        anchor: { left: 16.7, top: 77, width: 24 },
      },
    ],
    sections: [
      {
        type: "pageTopicsMap",
        mapId: "page-8",
      },
      {
        type: "pageEightDetailedTopicsMap",
      },
      {
        type: "pageEightMainTopic",
      },
      {
        type: "timeline",
        title: "The Children of Israel — historical background",
        neutral: true,
        items: [
          "Moved to Egypt in the time of Yūsuf عليه السلام, and were honoured with good positions.",
          "Egypt was under occupation until the Pharaohs returned to ruling Egypt.",
          "They felt Banū Isrāʾīl were more loyal to their own interests or to the occupation, so they began to oppress and humiliate them.",
          "Humiliation and slavery reached its peak at the time of Firʿawn.",
          "Mūsā عليه السلام was born.",
          "Mūsā عليه السلام returned to Egypt and went to Firʿawn.",
          "Allah ordered them to move out of Egypt.",
          "Banū Isrāʾīl were saved.",
          "They asked for idol worship.",
          "Mūsā عليه السلام went to the appointment (on Mount Ṭūr).",
          "Worshipping the calf.",
          "Mūsā عليه السلام went with 70 righteous men.",
          "The law / way to repent.",
          "They asked to see Allah clearly.",
          "The thunderbolt.",
          "Back to life.",
          "Living in the desert.",
        ],
      },
      {
        type: "studyGallery",
        title: "Timeline — the Children of Israel",
        neutral: true,
        illustrations: [
          {
            src: `${IMG}/israel-timeline-1.png`,
            alt: "Timeline part 1 — Egypt, Firʿawn's oppression, and deliverance",
            caption: "From Egypt to deliverance from Firʿawn.",
            variant: "spread",
          },
          {
            src: `${IMG}/israel-timeline-2.png`,
            alt: "Timeline part 2 — calf worship, Torah, thunderbolt, and desert life",
            caption: "From calf worship through the desert blessings.",
            variant: "spread",
          },
        ],
      },
      {
        type: "pageBridge",
        title: "Linking page 7 with page 8",
        neutral: true,
        note: "How the address on page 7 flows into the blessings narrative on page 8.",
        from: {
          page: 7,
          verse: 47,
          highlight: "وَفَضَّلْنَـٰكُمْ عَلَى ٱلْعَـٰلَمِينَ",
          note: "Allah favoured the Children of Israel in the world with blessings.",
        },
        to: {
          page: 8,
          verse: 49,
          highlight: "وَإِذْ نَجَّيْنَـٰكُم مِّنْ ءَالِ فِرْعَوْنَ",
          note: "The first detailed blessing — deliverance from Pharaoh.",
        },
      },
      {
        type: "summary",
        title: "The link — blessings narrative",
        neutral: true,
        body:
          "Verse 47 on page 7 names Allah's worldly favour upon Banū Isrāʾīl. Page 8 opens with verse 49 — the first detailed blessing in the وَإِذْ series: deliverance from Firʿawn, then the sea, Torah, repentance, and desert provision.",
      },
      {
        type: "pageLink",
        title: "Topic A — verse 49",
        topic: "A",
        topicRange: "49–50",
        illustrations: [
          {
            src: `${IMG}/topic-a-verse49-header.png`,
            alt: "Topic A header — saving the Children of Israel from Firʿawn (verse 49)",
            variant: "spread",
          },
        ],
      },
      {
        type: "verseStudy",
        verse: 49,
        title: "Verse 49",
        topic: "A",
        topicRange: "49–50",
        translation:
          "And [recall] when We saved your forefathers from the people of Pharaoh, who afflicted you with the worst torment, slaughtering your [newborn] sons and sparing your women. And in that was a great trial from your Lord.",
        arabic:
          "وَإِذْ نَجَّيْنَاكُم مِّنْ ءَالِ فِرْعَوْنَ يَسُومُونَكُمْ سُوءَ الْعَذَابِ يُذَبِّحُونَ أَبْنَاءَكُمْ وَيَسْتَحْيُونَ نِسَاءَكُمْ ۚ وَفِى ذَٰلِكُم بَلَاءٌ مِّن رَّبِّكُمْ عَظِيمٌ",
        phrases: [
          {
            hint: "Deliverance · Firʿawn's people · patience",
            phrase: "وَ إِذْ نَجَّيْنَٰكُم مِّنْ ءَالِ فِرْعَوْنَ",
            words: [
                {
                  ar: "وَ",
                  gloss: "Remember when",
                  points: [
                    "Joins with verse 47 — يَا بَنِي إِسْرَائِيلَ وَاتَّقُوا / وَاذْكُرُوا.",
                  ],
                },
                { ar: "إِذْ", gloss: "When" },
                {
                  ar: "نَجَّيْنَٰكُم",
                  gloss: "Allah saved you",
                  points: [
                    "The Children of Israel.",
                    "Verb in the past tense — it took time; they should be patient.",
                    "Unlike Ibrāhīm in the fire (which was instant).",
                  ],
                },
                {
                  ar: "ءَالِ فِرْعَوْنَ",
                  gloss: "The people of Pharaoh",
                  points: ["Noun — Firʿawn's people."],
                },
              ],
          },
          {
            hint: "Affliction · worst torment · slaughtering your sons",
            phrase: "يَسُومُونَكُمْ سُوءَ الْعَذَابِ يُذَبِّحُونَ أَبْنَاءَكُمْ",
            words: [
                {
                  ar: "يَسُومُونَكُمْ",
                  gloss: "To afflict",
                  points: [
                    "The Children of Israel.",
                    "Plural verb, present tense — to visualise and feel it, not only hear about it.",
                    "To cause pain intentionally, not accidentally.",
                  ],
                },
                {
                  ar: "سُوءَ",
                  gloss: "The worst",
                  points: ["Without ال — intensifies the torment beyond ordinary عذاب."],
                },
                {
                  ar: "الْعَذَابِ",
                  gloss: "The worst torment",
                  points: [
                    "With ال — the torment is always bad; adding سُوء makes it the worst.",
                  ],
                },
                {
                  ar: "يُذَبِّحُونَ",
                  gloss: "Slaughtering",
                  points: [
                    "Present tense — they continued slaughtering.",
                    "Shaddah on ذَبَّحَ shows exaggerated killing — the way animals are slaughtered.",
                  ],
                },
                {
                  ar: "أَبْنَاءَكُمْ",
                  gloss: "Your sons",
                  points: [
                    "As soon as they were born.",
                    "Firʿawn ordered soldiers and midwives to pass by their houses looking for newborns.",
                  ],
                },
              ],
          },
          {
            hint: "Spared women · trial from your Lord · a great test",
            phrase: "وَيَسْتَحْيُونَ نِسَاءَكُمْ … بَلَاءٌ مِّن رَّبِّكُمْ عَظِيمٌ",
            words: [
                {
                  ar: "وَيَسْتَحْيُونَ",
                  gloss: "Spare / let live",
                  points: ["Another opinion: to rape them, or both meanings."],
                },
                {
                  ar: "نِسَاءَكُمْ",
                  gloss: "Your women",
                  points: [
                    "The Children of Israel.",
                    "Your own women — not any women — to show how hard it was.",
                  ],
                },
                {
                  ar: "ذَٰلِكُمْ",
                  gloss: "That (trial)",
                  points: ["كم — plural address. ذا — singular, referring to the torment."],
                },
                { ar: "بَلَاءٌ", gloss: "Trial / test" },
                {
                  ar: "مِّن رَّبِّكُمْ",
                  gloss: "From your Lord",
                  points: [
                    "All from your Lord who created you — He is the Most Wise.",
                    "We endure such a test when we believe in that.",
                  ],
                },
                {
                  ar: "عَظِيمٌ",
                  gloss: "Great",
                  points: [
                    "Long duration and great hardship.",
                    "As the test was great, so was the blessing.",
                  ],
                },
              ],
            summary: ["Nation ↑", "Hardship ↑", "Blessings ↑"],
          },
        ],
        illustrations: [
          {
            src: `${IMG}/verse49-annotated.png`,
            alt: "Verse 49 annotated mushaf chart with vocabulary highlights",
            caption: "Annotated verse 49 — saved you, Firʿawn, affliction, slaughter, sparing, and trial.",
            variant: "spread",
          },
          {
            src: `${IMG}/verse49-words-1.png`,
            alt: "Verse 49 word study chart — part 1",
            variant: "spread",
          },
          {
            src: `${IMG}/verse49-words-2.png`,
            alt: "Verse 49 word study chart — part 2",
            variant: "spread",
          },
          {
            src: `${IMG}/verse49-words-3.png`,
            alt: "Verse 49 word study chart — part 3",
            variant: "spread",
          },
          {
            src: `${IMG}/firaun-illustration.png`,
            alt: "Illustration of Firʿawn and the oppression of Banū Isrāʾīl",
            caption: "Firʿawn's people afflicted Banū Isrāʾīl with the worst torment.",
            variant: "art",
          },
        ],
      },
      {
        type: "concept",
        title: "The word بَلَاءٌ — a test / trial",
        topic: "A",
        topicRange: "49–50",
        verseHighlight: {
          word: "بَلَاءٌ",
          ar: "كُلُّ نَفْسٍ ذَائِقَةُ الْمَوْتِ ۗ وَنَبْلُوكُم بِالشَّرِّ وَالْخَيْرِ فِتْنَةً ۖ وَإِلَيْنَا تُرْجَعُونَ",
          en: "Every soul will taste death. And We test you with evil and with good as trial; and to Us you will be returned.",
          cite: "Al-Anbiyāʾ 21:35",
        },
        flow: {
          word: "بَلَاءٌ",
          meaning: "A test / trial",
          branches: [
            { path: "Good", detail: "Blessings", response: "Thankful" },
            { path: "Bad", detail: "Hardships", response: "Patient" },
          ],
          references: [
            {
              en: "And We tested them with good [times] and bad that perhaps they would return.",
              ar: "وَبَلَوْنَاهُم بِالْحَسَنَاتِ وَالسَّيِّئَاتِ لَعَلَّهُمْ يَرْجِعُونَ",
              cite: "Al-Aʿrāf 7:168",
            },
            {
              en: "And We test you with evil and with good as trial; and to Us you will be returned.",
              ar: "وَنَبْلُوكُم بِالشَّرِّ وَالْخَيْرِ فِتْنَةً ۖ وَإِلَيْنَا تُرْجَعُونَ",
              cite: "Al-Anbiyāʾ 21:35",
            },
          ],
        },
      },
      {
        type: "balaunConcept",
        topic: "A",
        topicRange: "49–50",
      },
      {
        type: "balaunVerseRefs",
        topic: "A",
        topicRange: "49–50",
      },
      {
        type: "verseStudy",
        verse: 50,
        title: "Verse 50",
        topic: "A",
        topicRange: "49–50",
        translation:
          "And [recall] when We parted the sea for you and saved you and drowned the people of Pharaoh while you were looking on.",
        arabic:
          "وَإِذْ فَرَقْنَا بِكُمُ الْبَحْرَ فَأَنجَيْنَاكُمْ وَأَغْرَقْنَا ءَالَ فِرْعَوْنَ وَأَنتُمْ تَنظُرُونَ",
        phrases: [
          {
            hint: "Parted the sea · with you · saved you",
            phrase: "وَإِذْ فَرَقْنَا بِكُمُ الْبَحْرَ فَأَنجَيْنَاكُمْ",
            words: [
              {
                ar: "فَرَقْنَا",
                gloss: "Parted",
                points: [
                  "Some scholars said: into 2 parts; others said: into 12 parts.",
                  "They crossed through the parted sea on dry ground.",
                  "The water stood high like a mountain — yet it did not fall and drown them.",
                ],
              },
              {
                ar: "بِكُمُ",
                gloss: "For you / with you",
                points: [
                  "More accurately: with you (بِ) — as if they were the means by which the sea was parted.",
                ],
              },
              {
                ar: "الْبَحْرَ",
                gloss: "The Red Sea",
              },
              {
                ar: "فَ",
                gloss: "So / then",
                points: [
                  "فَ — fast speed; also a particle of cause.",
                ],
              },
              {
                ar: "أَنجَيْنَاكُمْ",
                gloss: "We saved you",
                points: [
                  "Saved you in a short time.",
                  "كُمْ — you, the Children of Israel.",
                ],
              },
            ],
          },
          {
            hint: "Drowned · Pharaoh's people · while you watched",
            phrase: "وَأَغْرَقْنَا ءَالَ فِرْعَوْنَ وَأَنتُمْ تَنظُرُونَ",
            words: [
              {
                ar: "وَأَغْرَقْنَا",
                gloss: "And We drowned",
                points: [
                  "Allah's miraculous intervention and help.",
                ],
              },
              {
                ar: "ءَالَ فِرْعَوْنَ",
                gloss: "The people of Pharaoh",
                points: [
                  "To relieve the hearts of the believers.",
                  "To confirm their death — so they would not say Mūsā drowned only their army.",
                  "To reward the patient — the oppressed are honoured and victorious, while the oppressor is humiliated and loses.",
                ],
              },
              {
                ar: "وَأَنتُمْ",
                gloss: "While you",
              },
              {
                ar: "تَنظُرُونَ",
                gloss: "Were looking on",
                points: [
                  "Present tense — continuous watching.",
                ],
              },
            ],
          },
        ],
        illustrations: [
          {
            src: `${IMG}/verse50-annotated.png`,
            alt: "Verse 50 annotated mushaf chart — parting the sea and drowning Firʿawn",
            variant: "spread",
          },
          {
            src: `${IMG}/verse50-words.png`,
            alt: "Verse 50 word-by-word study chart",
            variant: "spread",
          },
          {
            src: `${IMG}/parted-sea.png`,
            alt: "Illustration of the parted sea and deliverance of Banū Isrāʾīl",
            variant: "art",
          },
          {
            src: `${IMG}/firaun-mummy.png`,
            alt: "Firʿawn drowned — confirmation of Allah's punishment",
            caption: "Drowned while Banū Isrāʾīl watched — a lesson in divine justice.",
            variant: "art",
          },
        ],
      },
      {
        type: "verseStudy",
        verse: 51,
        title: "Verse 51",
        topic: "B",
        topicRange: "51–57",
        translation:
          "And [recall] when We made an appointment with Moses for forty nights. Then you took [for worship] the calf after him, while you were wrongdoers.",
        arabic:
          "وَإِذْ وَاعَدْنَا مُوسَىٰ أَرْبَعِينَ لَيْلَةً ثُمَّ اتَّخَذْتُمُ الْعِجْلَ مِن بَعْدِهِ وَأَنتُمْ ظَالِمُونَ",
        phrases: [
          {
            hint: "Appointment with Mūsā · forty nights · the calf",
            phrase: "وَإِذْ وَاعَدْنَا مُوسَىٰ أَرْبَعِينَ لَيْلَةً ثُمَّ اتَّخَذْتُمُ الْعِجْلَ",
            words: [
              { ar: "وَإِذْ", gloss: "Remember when", points: ["The 3rd blessing."] },
              {
                ar: "وَاعَدْنَا",
                gloss: "We appointed",
                points: [
                  "Allah appointed between two persons.",
                  "Refers to closeness to Allah.",
                  "To be given the divine laws (the sharīʿah). Root: وعد.",
                ],
              },
              {
                ar: "مُوسَىٰ",
                gloss: "Mūsā",
                points: ["Approximately 1500 years before ʿĪsā (عليه السلام)."],
              },
              { ar: "أَرْبَعِينَ", gloss: "Forty" },
              { ar: "لَيْلَةً", gloss: "Nights", points: ["To worship Allah sincerely."] },
              {
                ar: "الْعِجْلَ",
                gloss: "The calf",
                points: [
                  "A young animal (cow or bull) in its first year.",
                  "Made from the jewellery they took from the people of Firʿawn.",
                ],
              },
            ],
          },
          {
            hint: "After Mūsā · wrongdoers",
            phrase: "مِن بَعْدِهِ وَأَنتُمْ ظَالِمُونَ",
            words: [
              {
                ar: "مِن بَعْدِهِ",
                gloss: "After him (Mūsā)",
                points: [
                  "Blaming them.",
                  "No excuse after the miracle.",
                  "Not sincere to Mūsā (عليه السلام).",
                  "Lack of certainty.",
                ],
              },
              {
                ar: "ظَالِمُونَ",
                gloss: "Wrongdoers",
                points: ["Polytheism — no excuse for what they did."],
              },
            ],
          },
        ],
      },
      {
        type: "verseStudy",
        verse: 52,
        title: "Verse 52",
        topic: "B",
        topicRange: "51–57",
        translation:
          "Then We forgave you after that so that you might be grateful.",
        arabic: "ثُمَّ عَفَوْنَا عَنكُم مِّن بَعْدِ ذَٰلِكَ لَعَلَّكُمْ تَشْكُرُونَ",
        phrases: [
          {
            hint: "Forgiveness · after the calf · gratitude",
            phrase: "ثُمَّ عَفَوْنَا عَنكُم مِّن بَعْدِ ذَٰلِكَ لَعَلَّكُمْ تَشْكُرُونَ",
            words: [
              {
                ar: "ثُمَّ",
                gloss: "Then",
                points: [
                  "Afterwards — not immediately.",
                  "Because of the delayed repentance.",
                ],
              },
              { ar: "عَفَوْنَا", gloss: "We forgave", points: ["Allah — forgiveness."] },
              { ar: "ذَٰلِكَ", gloss: "That", points: ["Worshipping the calf."] },
              {
                ar: "لَعَلَّكُمْ",
                gloss: "So that you may",
                points: [
                  "لعل — hoping for.",
                  "Allah knows what they will do — but to remind them also.",
                  "It sounds disappointing to them, as they might delay or not do it.",
                ],
              },
              { ar: "تَشْكُرُونَ", gloss: "Be grateful" },
            ],
          },
        ],
      },
      {
        type: "verseStudy",
        verse: 53,
        title: "Verse 53",
        topic: "B",
        topicRange: "51–57",
        translation:
          "And [recall] when We gave Moses the Scripture and criterion that perhaps you would be guided.",
        arabic: "وَإِذْ آتَيْنَا مُوسَى الْكِتَابَ وَالْفُرْقَانَ لَعَلَّكُمْ تَهْتَدُونَ",
        phrases: [
          {
            hint: "The Book · al-Furqān · guidance",
            phrase: "وَإِذْ آتَيْنَا مُوسَى الْكِتَابَ وَالْفُرْقَانَ لَعَلَّكُمْ تَهْتَدُونَ",
            words: [
              { ar: "آتَيْنَا", gloss: "We gave" },
              { ar: "الْكِتَابَ", gloss: "The Book / Torah" },
              {
                ar: "الْفُرْقَانَ",
                gloss: "The Criterion",
                points: [
                  "To separate two things so they become clearer.",
                  "A book of divine laws that distinguish right from wrong, good from evil.",
                  "A miracle.",
                  "The events of victory of good over evil.",
                ],
              },
              {
                ar: "لَعَلَّكُمْ",
                gloss: "Perhaps you",
                points: ["Doubts about them.", "You might be rightly guided."],
              },
              {
                ar: "تَهْتَدُونَ",
                gloss: "Would be guided",
                points: [
                  "Their blessing = al-hudā.",
                  "To them — not to Mūsā (عليه السلام) only.",
                ],
              },
            ],
          },
        ],
      },
      {
        type: "verseStudy",
        verse: 54,
        title: "Verse 54",
        topic: "B",
        topicRange: "51–57",
        translation:
          "And [recall] when Moses said to his people, 'O my people, indeed you have wronged yourselves by your taking of the calf [for worship]. So repent to your Creator and kill yourselves. That is best for [all of] you in the sight of your Creator.' Then He accepted your repentance; indeed, He is the Accepting of repentance, the Merciful.",
        arabic:
          "وَإِذْ قَالَ مُوسَىٰ لِقَوْمِهِ يَا قَوْمِ إِنَّكُمْ ظَلَمْتُمْ أَنفُسَكُم بِاتِّخَاذِكُمُ الْعِجْلَ فَتُوبُوا إِلَىٰ بَارِئِكُمْ فَاقْتُلُوا أَنفُسَكُمْ ذَٰلِكُمْ خَيْرٌ لَّكُمْ عِندَ بَارِئِكُمْ فَتَابَ عَلَيْكُمْ إِنَّهُ هُوَ التَّوَّابُ الرَّحِيمُ",
        phrases: [
          {
            hint: "Mūsā addresses his people · the calf · wrongdoing",
            phrase: "وَإِذْ قَالَ مُوسَىٰ لِقَوْمِهِ يَا قَوْمِ إِنَّكُمْ ظَلَمْتُمْ أَنفُسَكُم بِاتِّخَاذِكُمُ الْعِجْلَ",
            words: [
              {
                ar: "لِقَوْمِهِ",
                gloss: "His people",
                points: ["To make them feel Mūsā (عليه السلام) belongs to them and is keen on them."],
              },
              {
                ar: "يَا قَوْمِ",
                gloss: "O my people",
                points: [
                  "To prepare them to accept what he will ask from them.",
                  "It is hard to accept — so he softens them first.",
                ],
              },
              { ar: "إِنَّكُمْ", gloss: "Indeed you" },
              {
                ar: "ظَلَمْتُمْ",
                gloss: "Have wronged",
                points: [
                  "Worshipping / associating with Allah — the calf (الْعِجْل).",
                ],
              },
              { ar: "أَنفُسَكُم", gloss: "Yourselves" },
              {
                ar: "بِ",
                gloss: "Because",
                points: ["Particle of cause — because of your taking the calf."],
              },
              { ar: "اتِّخَاذِكُمُ", gloss: "Your taking" },
              { ar: "الْعِجْلَ", gloss: "The calf" },
            ],
          },
          {
            hint: "Repent · kill yourselves · Allah accepts repentance",
            phrase: "فَتُوبُوا إِلَىٰ بَارِئِكُمْ فَاقْتُلُوا أَنفُسَكُمْ ذَٰلِكُمْ خَيْرٌ لَّكُمْ عِندَ بَارِئِكُمْ فَتَابَ عَلَيْكُمْ",
            words: [
              {
                ar: "فَتُوبُوا",
                gloss: "So repent",
                points: ["Immediately, with no delay. ف = particle of sequence."],
              },
              {
                ar: "بَارِئِكُمْ",
                gloss: "Your Creator",
                points: [
                  "Disapproving taking other than the Creator to worship.",
                  "Events in chronological order: torture of Banū Isrāʾīl, parting of the sea, Mūsā called for 40 nights.",
                ],
              },
              {
                ar: "فَاقْتُلُوا",
                gloss: "And kill",
                points: ["The cause of killing. ف = and so."],
              },
              { ar: "أَنفُسَكُمْ", gloss: "Yourselves" },
              {
                ar: "خَيْرٌ",
                gloss: "Better / good",
                points: [
                  "Better than not repenting.",
                  "Better than meeting Allah with their sins.",
                  "Killing yourselves is better than worshipping the calf.",
                ],
              },
              { ar: "فَتَابَ", gloss: "Then He accepted repentance", points: ["Right afterwards."] },
              {
                ar: "التَّوَّابُ",
                gloss: "Accepting of repentance",
                points: ["Repeated repentance — He guides you to it."],
              },
              {
                ar: "الرَّحِيمُ",
                gloss: "The Merciful",
                points: ["Cancelled the law (of killing themselves)."],
              },
            ],
          },
        ],
        flow: {
          title: "The command — kill yourselves",
          root: {
            ar: "فَاقْتُلُوا أَنفُسَكُمْ",
            points: [
              "Punishment.",
              "Killing one another.",
              "Or each one kills himself.",
            ],
          },
          branches: [
            {
              label: "Did it",
              outcome: "Until they were about to become extinct.",
            },
            {
              label: "Didn't do it",
              outcome: "Regretted it.",
            },
          ],
          merge:
            "Asked Mūsā (عليه السلام) to ask Allah to elevate the punishment.",
          resolution:
            "Allah accepted their repentance and cancelled the law from the Torah for all generations afterwards.",
        },
      },
      {
        type: "verseStudy",
        verse: 55,
        title: "Verse 55",
        topic: "B",
        topicRange: "51–57",
        translation:
          "And [recall] when you said, 'O Moses, we will never believe you until we see Allah outright,' so the thunderbolt seized you while you were looking.",
        arabic:
          "وَإِذْ قُلْتُمْ يَا مُوسَىٰ لَن نُّؤْمِنَ لَكَ حَتَّىٰ نَرَى اللَّهَ جَهْرَةً فَأَخَذَتْكُمُ الصَّاعِقَةُ وَأَنتُمْ تَنْظُرُونَ",
        phrases: [
          {
            hint: "You said to Mūsā · never believe · until you see Allah",
            phrase: "وَإِذْ قُلْتُمْ يَا مُوسَىٰ لَن نُّؤْمِنَ لَكَ",
            words: [
              {
                ar: "وَإِذْ قُلْتُمْ",
                gloss: "You said",
                points: [
                  "Past tense — about Banū Isrāʾīl.",
                  "After being asked to take the Torah seriously and apply its laws.",
                ],
              },
              { ar: "يَا مُوسَىٰ", gloss: "O Mūsā", points: ["عليه السلام."] },
              {
                ar: "لَنْ",
                gloss: "Never (in the future)",
                points: ["In arrogance."],
              },
              { ar: "نُّؤْمِنَ", gloss: "We will believe" },
              {
                ar: "لَكَ",
                gloss: "In you",
                points: [
                  "In your Book.",
                  "In your message from Allah.",
                ],
              },
            ],
          },
          {
            hint: "Until manifestly · thunderbolt · while you watched",
            phrase:
              "حَتَّىٰ نَرَى اللَّهَ جَهْرَةً فَأَخَذَتْكُمُ الصَّاعِقَةُ وَأَنتُمْ تَنْظُرُونَ",
            words: [
              { ar: "حَتَّىٰ", gloss: "Until" },
              { ar: "نَرَى", gloss: "We see" },
              { ar: "اللَّهَ", gloss: "Allah" },
              {
                ar: "جَهْرَةً",
                gloss: "Manifestly / openly",
                points: ["To clearly see or hear."],
              },
              {
                ar: "فَأَخَذَتْكُمُ",
                gloss: "So it seized you",
                points: ["ف — particle of cause / so."],
              },
              {
                ar: "الصَّاعِقَةُ",
                gloss: "The thunderbolt",
                points: [
                  "Thunderclap.",
                  "Punishment for their arrogance and stubbornness.",
                ],
              },
              {
                ar: "وَأَنتُمْ تَنْظُرُونَ",
                gloss: "While you were looking",
                points: ["Waiting to see Allah as a group."],
              },
            ],
          },
        ],
        hadiths: {
          title: "Hadith explanation",
          intro:
            "They demanded to see Allah with their eyes — yet true life is through knowing and remembering Him. The one who remembers his Lord is alive; the one who does not is like the dead.",
          items: [
            {
              source: "Sahih al-Bukhari",
              number: "6407",
              narrator: "Abu Musa (رضي الله عنه)",
              text:
                "The Prophet (ﷺ) said: \"The example of the one who celebrates the praises of his Lord in comparison to the one who does not celebrate the praises of his Lord is that of a living creature compared to a dead one.\"",
              arabic:
                "مَثَلُ الَّذِي يَذْكُرُ رَبَّهُ وَالَّذِي لَا يَذْكُرُ مَثَلُ الْحَيِّ وَالْمَيِّتِ",
            },
            {
              source: "Riyad as-Salihin",
              number: "1434",
              narrator: "Abu Musa al-Ashʿarī (رضي الله عنه)",
              text:
                "The Prophet (ﷺ) said: \"The similitude of one who remembers his Lord and one who does not remember Him is like that of the living and the dead.\" [Al-Bukhari and Muslim]. Muslim also narrated: \"The similitude of the house in which Allah is remembered and the house in which Allah is not remembered is like that of the living and the dead.\"",
            },
            {
              source: "Sahih Muslim",
              number: "779",
              narrator: "Abu Musa (رضي الله عنه)",
              text:
                "The Messenger of Allah (ﷺ) said: \"The house in which remembrance of Allah is made and the house in which Allah is not remembered are like the living and the dead.\"",
              arabic:
                "مَثَلُ الْبَيْتِ الَّذِي يُذْكَرُ اللَّهُ فِيهِ وَالْبَيْتِ الَّذِي لَا يُذْكَرُ اللَّهُ فِيهِ مَثَلُ الْحَيِّ وَالْمَيِّتِ",
            },
          ],
        },
      },
      {
        type: "verseStudy",
        verse: 56,
        title: "Verse 56",
        topic: "B",
        topicRange: "51–57",
        translation:
          "Then We revived you after your death that perhaps you would be grateful.",
        arabic:
          "ثُمَّ بَعَثْنَاكُم مِّن بَعْدِ مَوْتِكُمْ لَعَلَّكُمْ تَشْكُرُونَ",
        phrases: [
          {
            hint: "Revived after death · gratitude",
            phrase:
              "ثُمَّ بَعَثْنَاكُم مِّن بَعْدِ مَوْتِكُمْ لَعَلَّكُمْ تَشْكُرُونَ",
            words: [
              {
                ar: "ثُمَّ",
                gloss: "Then",
                points: [
                  "Not immediately.",
                  "After a while — may be a day or more.",
                ],
              },
              {
                ar: "بَعَثْنَاكُم",
                gloss: "We revived you",
                points: [
                  "To have more time in life is a blessing.",
                  "To get another chance.",
                ],
              },
              {
                ar: "مِّن بَعْدِ مَوْتِكُمْ",
                gloss: "After your death",
                points: ["Real death.", "By the fire or its fumes."],
              },
              {
                ar: "لَعَلَّكُمْ تَشْكُرُونَ",
                gloss: "Perhaps you would be grateful",
                points: [
                  "May be that you would be grateful by being obedient to Allah and His Messenger.",
                ],
              },
            ],
          },
        ],
        qa: {
          title: "Why remember the ancestors' blessings?",
          question:
            "Why did Allah remind the people of the Book during the era of the Prophet Muhammad (ﷺ) of the blessings of their ancestors?",
          answers: [
            "They became the reason for their existence — their ancestors were saved from Firʿawn.",
            "They are honoured to be the descendants of the prophets.",
            "They are blessed to have the Torah until that time.",
            "From the Torah they were able to know the last Prophet, Muhammad (ﷺ).",
            "So the blessings of their ancestors became a blessing on them too.",
          ],
        },
      },
      {
        type: "verseStudy",
        verse: 57,
        title: "Verse 57",
        topic: "B",
        topicRange: "51–57",
        translation:
          "And We shaded you with clouds and sent down to you mann and quails, [saying], 'Eat from the good things which We have provided for you.' And they wronged Us not, but they were [only] wronging themselves.",
        arabic:
          "وَظَلَّلْنَا عَلَيْكُمُ الْغَمَامَ وَأَنزَلْنَا عَلَيْكُمُ الْمَنَّ وَالسَّلْوَىٰ ۖ كُلُوا مِن طَيِّبَاتِ مَا رَزَقْنَاكُمْ ۖ وَمَا ظَلَمُونَا وَلَٰكِن كَانُوا أَنفُسَهُمْ يَظْلِمُونَ",
        phrases: [
          {
            hint: "Shade · clouds · mann · quails",
            phrase:
              "وَظَلَّلْنَا عَلَيْكُمُ الْغَمَامَ وَأَنزَلْنَا عَلَيْكُمُ الْمَنَّ وَالسَّلْوَىٰ",
            words: [
              { ar: "وَظَلَّلْنَا", gloss: "We shaded" },
              { ar: "عَلَيْكُمُ", gloss: "Over you" },
              {
                ar: "الْغَمَامَ",
                gloss: "The clouds",
                points: [
                  "Cool clouds — joyful and light, as shade for them.",
                  "Not scary dark clouds.",
                ],
              },
              { ar: "وَأَنزَلْنَا", gloss: "And We sent down" },
              {
                ar: "الْمَنَّ",
                gloss: "Al-Mann",
                points: [
                  "Moist, sweet food — could be used as bread.",
                  "Grows on trees with no effort.",
                  "They received it every morning.",
                ],
              },
              {
                ar: "وَالسَّلْوَىٰ",
                gloss: "The quails",
                points: [
                  "A type of bird easily captured — it could not fly away.",
                  "Easy to cook.",
                  "They received it every afternoon.",
                ],
              },
            ],
          },
          {
            hint: "Eat the good provision · they wronged only themselves",
            phrase:
              "كُلُوا مِن طَيِّبَاتِ مَا رَزَقْنَاكُمْ وَمَا ظَلَمُونَا وَلَٰكِن كَانُوا أَنفُسَهُمْ يَظْلِمُونَ",
            words: [
              { ar: "كُلُوا", gloss: "Eat" },
              {
                ar: "طَيِّبَاتِ",
                gloss: "Good / pure things",
                points: [
                  "Plural — singular: طَيِّب.",
                  "Good and pure things Allah has provided you with.",
                  "Allah has given us many good things to eat — we should not seek what He has forbidden.",
                  "Here the food was not forbidden; it is mentioned to show they were honoured.",
                ],
              },
              { ar: "مَا رَزَقْنَاكُمْ", gloss: "What We have provided you" },
              {
                ar: "وَمَا ظَلَمُونَا",
                gloss: "They did not wrong Us",
                points: ["They did not wrong Allah at all."],
              },
              { ar: "وَلَٰكِن", gloss: "But" },
              { ar: "كَانُوا أَنفُسَهُمْ", gloss: "They themselves" },
              {
                ar: "يَظْلِمُونَ",
                gloss: "Were wronging",
                points: [
                  "They were continuously wronging only themselves.",
                  "الله الغني — Allah does not benefit from our worship or obedience, nor is He harmed by our disobedience or wrongdoing.",
                ],
              },
            ],
          },
        ],
        context: {
          title: "Setting",
          text:
            "The Children of Isrāʾīl included men, old men, women, and children who had just left Egypt and were travelling in the hot desert without shelter. They could not survive on their own in that desert — yet Allah gave them cool clouds for shade and healthy, luxurious food, so that they would be grateful.",
        },
      },
      {
        type: "page8RepeatedWords",
        title: "Memorisation aids — repeated words",
        neutral: true,
      },
      {
        type: "page8LinkingPattern",
        title: "Memorisation aids — linking pattern",
        neutral: true,
      },
      {
        type: "pageBridge",
        title: "Linking page 8 with page 9",
        neutral: true,
        note: "From eating the good provision (v. 57) to entering the sacred city (v. 58).",
        from: {
          page: 8,
          verse: 57,
          highlight: "كُلُوا مِن طَيِّبَاتِ مَا رَزَقْنَاكُمْ",
          note: "Allah's blessing to eat luxury food — end of page 8.",
        },
        to: {
          page: 9,
          verse: 58,
          highlight: "فَكُلُوا مِنْهَا حَيْثُ شِئْتُمْ رَغَدًا",
          note: "Allah's blessing to eat bountifully in this town — beginning of page 9.",
        },
      },
      {
        type: "summary",
        title: "End of page — linking to page 9",
        body:
          "Verse 57: Allah shaded them with clouds and sent mann and quails. Page 9 continues with verse 58 — entering the sacred city, water from the rock, and their complaint about food.",
      },
    ],
  },
  {
    mushafPage: 9,
    verseRange: "58–61",
    title: "Blessings Continued — Jerusalem, Water & Ingratitude",
    mainTopic:
      "Allah reminds the Children of Israel of His blessings on their ancestors and urges them to be grateful — entering Jerusalem, water from the rock, and their ingratitude over food.",
    topics: [
      {
        id: "A",
        label: "Jerusalem",
        color: "rose",
        verseRange: "58–59",
        summary:
          "The story of the Children of Israel entering Jerusalem, Allah's blessing on them, and their 3rd sin.",
        subTopics: [
          { label: "Blessing — enter Jerusalem, eat freely, say ḥiṭṭah", verses: "58" },
          { label: "3rd sin — changed Allah's words · torment from the sky", verses: "59" },
        ],
      },
      {
        id: "B",
        label: "Food & water",
        color: "green",
        verseRange: "60–61",
        summary:
          "Allah's blessings of food and drink on the Children of Israel — and their sins.",
        subTopics: [
          { label: "Blessing — twelve springs for the twelve tribes", verses: "60" },
          { label: "4th & 5th sins — disbelief · killing the prophets", verses: "61" },
        ],
      },
    ],
    gharibWords: [
      { verse: 58, label: "Page beg.", matchForms: ["وَإِذْ"] },
      { verse: 58, label: "Town", matchIncludes: "ٱلْقَرْيَة" },
      { verse: 58, label: "Abundance", matchForms: ["رَغَدًا"] },
      { verse: 58, label: "Prostration", matchIncludes: "سُجَّد" },
      { verse: 58, label: "Relieve us", matchForms: ["حِطَّةٌ"] },
      { verse: 58, label: "Sins", matchIncludes: "خَطَٰيَٰ" },
      { verse: 59, label: "Changed", matchForms: ["فَبَدَّلَ"] },
      { verse: 59, label: "Wrongdoers", matchIncludes: "ظَلَم" },
      { verse: 59, label: "Torment", matchForms: ["رِجْزًا"] },
      { verse: 59, label: "Disobeying", matchIncludes: "يَفْسُق" },
      { verse: 60, label: "Prayed for water", matchForms: ["ٱسْتَسْقَىٰ"] },
      { verse: 60, label: "Strike", matchForms: ["ٱضْرِب"] },
      { verse: 60, label: "Gushed", matchIncludes: "ٱنفَجَر" },
      { verse: 60, label: "Springs", matchIncludes: "عَيْن" },
      { verse: 60, label: "Watering place", matchIncludes: "مَشْرَب" },
      { verse: 60, label: "Abuse", matchIncludes: "تَعْث" },
      { verse: 61, label: "Herbs", matchIncludes: "بَقْل" },
      { verse: 61, label: "Cucumbers", matchIncludes: "قِثَّ" },
      { verse: 61, label: "Garlic", matchIncludes: "فُوم" },
      { verse: 61, label: "Lentils", matchIncludes: "عَدَس" },
      { verse: 61, label: "Onions", matchIncludes: "بَصَل" },
      { verse: 61, label: "Exchange", matchIncludes: "أَتَسْتَبْدِل" },
      { verse: 61, label: "Humiliation", matchIncludes: "ٱلذِّلَّة" },
      { verse: 61, label: "Poverty", matchIncludes: "ٱلْمَسْكَنَة" },
      { verse: 61, label: "Killed prophets", matchIncludes: "ٱلنَّبِيِّ" },
      { verse: 61, label: "Page end.", matchIncludes: "يَعْتَدُونَ" },
    ],
    detailedTopics: [
      {
        verse: 58,
        tone: "rose",
        summary:
          "Blessing of entering Jerusalem after exile — eat freely anywhere in this town.",
        anchor: { left: 9.8, top: 10, width: 74 },
      },
      {
        verse: 59,
        tone: "rose",
        summary:
          "3rd sin (changing Allah's words) · punishment — torment from the heavens.",
        anchor: { left: 9.8, top: 21.1, width: 18 },
      },
      {
        verse: 60,
        tone: "green",
        summary:
          "Blessing of water from 12 springs and food for the 12 tribes · prohibition of abuse on earth.",
        anchor: { left: 9.8, top: 32.3, width: 19 },
      },
      {
        verse: 61,
        tone: "rose",
        summary:
          "4th sin (bad disbelief in Allah's words) · 5th sin (killing the prophets).",
        anchor: { left: 9.8, top: 54.6, width: 74 },
      },
    ],
    sections: [
      {
        type: "pageTopicsMap",
        mapId: "page-9",
      },
      {
        type: "pageNineDetailedTopicsMap",
      },
      {
        type: "pageBridge",
        title: "Linking page 8 with page 9",
        note: "The whole page is about the Children of Israel's blessings.",
        from: {
          page: 8,
          verse: 57,
          highlight: "كُلُوا مِن طَيِّبَاتِ مَا رَزَقْنَاكُمْ",
          note: "Allah's blessing to eat luxury food — end of page 8.",
        },
        to: {
          page: 9,
          verse: 58,
          highlight: "فَكُلُوا مِنْهَا حَيْثُ شِئْتُمْ رَغَدًا",
          note: "Allah's blessing to eat bountifully in this town — beginning of page 9.",
        },
      },
      {
        type: "verseStudy",
        verse: 58,
        title: "Verse 58",
        topic: "A",
        topicRange: "58–59",
        translation:
          "And [recall] when We said, \"Enter this city and eat from it wherever you will in [ease and] abundance, and enter the gate bowing humbly and say, 'Relieve us of our burdens.' We will [then] forgive your sins for you, and We will increase the doers of good [in goodness and reward].\"",
        arabic:
          "وَإِذْ قُلْنَا ٱدْخُلُوا۟ هَٰذِهِ ٱلْقَرْيَةَ فَكُلُوا۟ مِنْهَا حَيْثُ شِئْتُمْ رَغَدًا وَٱدْخُلُوا۟ ٱلْبَابَ سُجَّدًا وَقُولُوا۟ حِطَّةٌ نَّغْفِرْ لَكُمْ خَطَٰيَٰكُمْ ۚ وَسَنَزِيدُ ٱلْمُحْسِنِينَ",
        blocks: [
          {
            type: "verseTags",
            tags: [
              { label: "Page Beg.", color: "amber", words: ["وَإِذْ"] },
              { label: "Town", color: "rose", words: ["ٱلْقَرْيَةَ"] },
              { label: "Prostration / Bow", color: "rose", words: ["سُجَّدًا"] },
              { label: "Forgive us", color: "rose", words: ["حِطَّةٌ"] },
              { label: "Sins", color: "rose", words: ["خَطَٰيَٰكُمْ"] },
              { label: "Ending", color: "cyan", words: ["وَسَنَزِيدُ ٱلْمُحْسِنِينَ"] },
            ],
          },
          {
            type: "segmentMap",
            verseRef: 58,
            rows: [
              [
                {
                  ar: "وَإِذْ قُلْنَا",
                  notes: [
                    { text: "Remember when — We, Allah, said", emphasis: true },
                    { text: "The blessing of entering the town.", emphasis: true },
                  ],
                },
                {
                  ar: "ٱدْخُلُوا۟ هَٰذِهِ ٱلْقَرْيَةَ",
                  tone: "accent",
                  notes: [
                    { text: "Enter this city — majority of scholars: Jerusalem.", emphasis: true },
                    { text: "قَرْيَةَ — town/city; root: to gather people and houses.", emphasis: true },
                  ],
                },
              ],
              [
                {
                  ar: "فَكُلُوا۟ مِنْهَا حَيْثُ شِئْتُمْ رَغَدًا",
                  tone: "accent",
                  notes: [
                    { text: "Eat freely wherever you wish — in abundance (رَغَدًا).", emphasis: true },
                    { text: "Permissible, not an order — فَ indicates sequence.", emphasis: true },
                  ],
                },
              ],
              [
                {
                  ar: "وَٱدْخُلُوا۟ ٱلْبَابَ سُجَّدًا",
                  tone: "accent",
                  notes: [
                    { text: "Enter Bab Ḥiṭṭah bowing / prostrating in humility.", emphasis: true },
                  ],
                },
                {
                  ar: "وَقُولُوا۟ حِطَّةٌ",
                  tone: "accent",
                  notes: [
                    { text: "Say ḥiṭṭah — bring down / remove the burden of sins.", emphasis: true },
                  ],
                },
              ],
              [
                {
                  ar: "نَّغْفِرْ لَكُمْ خَطَٰيَٰكُمْ",
                  notes: [{ text: "We will forgive your intentional sins (khaṭāyā).", emphasis: true }],
                },
                {
                  ar: "وَسَنَزِيدُ ٱلْمُحْسِنِينَ",
                  tone: "accent",
                  notes: [{ text: "Increase in reward for the doers of good.", emphasis: true }],
                },
              ],
            ],
          },
          {
            type: "spotlight",
            verseRef: 58,
            ar: "ٱدْخُلُوا۟ هَٰذِهِ ٱلْقَرْيَةَ",
            en: "Enter this city — the majority of scholars said Jerusalem.",
            icon: "city",
            image: `${PHOTOS}/jerusalem-damascus-gate.jpg`,
            imageAlt: "Damascus Gate in the northern wall of Jerusalem's Old City",
            credit: "Damascus Gate, Jerusalem · Nevborg · Wikimedia Commons (CC BY-SA 4.0)",
          },
          {
            type: "spotlight",
            verseRef: 58,
            ar: "فَكُلُوا۟ مِنْهَا حَيْثُ شِئْتُمْ رَغَدًا",
            en: "Eat from it wherever you wish, in abundance and ease.",
            icon: "harvest",
            images: [
              { src: `${PHOTOS}/fruits/dates.jpg`, alt: "Dates" },
              { src: `${PHOTOS}/fruits/grapes.jpg`, alt: "Grapes" },
              { src: `${PHOTOS}/fruits/pomegranate.jpg`, alt: "Pomegranate" },
              { src: `${PHOTOS}/fruits/figs.jpg`, alt: "Figs" },
              { src: `${PHOTOS}/fruits/apples.jpg`, alt: "Apples" },
              { src: `${PHOTOS}/fruits/oranges.jpg`, alt: "Oranges" },
              { src: `${PHOTOS}/fruits/bananas.jpg`, alt: "Bananas" },
            ],
            credit: "Fruit photos · Wikimedia Commons (CC BY / CC BY-SA)",
          },
          {
            type: "spotlight",
            verseRef: 58,
            ar: "وَٱدْخُلُوا۟ ٱلْبَابَ سُجَّدًا",
            en: "Enter the gate (Bab Ḥiṭṭah) bowing / prostrating in humility.",
            icon: "gate",
            image: `${PHOTOS}/bab-hitta-gate.jpg`,
            imageAlt: "Bab Ḥiṭṭah — the Gate of Remission at the Al-Aqsa compound",
            credit: "Remission Gate (Bab Ḥiṭṭah), Jerusalem · Ludvig14 · Wikimedia Commons (CC BY-SA 4.0)",
          },
          {
            type: "wordBubble",
            word: "حِطَّةٌ",
            note: "The word of humility they were commanded to say — asking Allah to remove the burden of their sins.",
          },
        ],
        phrases: [
          {
            hint: "Remember when · Allah said · enter this city",
            phrase: "وَإِذْ قُلْنَا ٱدْخُلُوا۟ هَٰذِهِ ٱلْقَرْيَةَ",
            words: [
              {
                ar: "وَإِذْ",
                gloss: "Remember when",
                points: ["The blessing of entering the town / city."],
              },
              {
                ar: "قُلْنَا",
                gloss: "(We) Allah said",
                points: ["نَا — We, Allah."],
              },
              { ar: "ٱدْخُلُوا۟", gloss: "Enter" },
              {
                ar: "هَٰذِهِ",
                gloss: "This",
                points: ["A specific town / city."],
              },
              {
                ar: "ٱلْقَرْيَةَ",
                gloss: "The city / town",
                points: [
                  "The majority of scholars said it is Jerusalem.",
                  "Commonly it means (town).",
                  "In the language of the Qur'an it is both (town / city).",
                  "Literally: to gather something — gathered people and houses.",
                  "Root: قَرَى — Ex: قَرَيْتَ الماء في الحوض — to gather water in a tank.",
                ],
              },
            ],
          },
          {
            hint: "Eat freely · wherever you wish · in abundance",
            phrase: "فَكُلُوا۟ مِنْهَا حَيْثُ شِئْتُمْ رَغَدًا",
            words: [
              {
                ar: "فَكُلُوا۟",
                gloss: "And eat",
                points: ["It is permissible, not an order — فَ indicates sequence."],
              },
              {
                ar: "مِنْهَا",
                gloss: "From it",
                points: ["From the city — al-Qaryah / Jerusalem."],
              },
              { ar: "حَيْثُ", gloss: "Wherever" },
              {
                ar: "شِئْتُمْ",
                gloss: "You wish",
                points: ["The Children of Israel — تُمْ pronoun."],
              },
              {
                ar: "رَغَدًا",
                gloss: "Abundantly and calmly",
                points: [
                  "As it is a blessed land — provision is abundant.",
                  "Allah's blessing to eat bountifully in this town.",
                ],
              },
            ],
          },
          {
            hint: "Enter the gate · bowing · say ḥiṭṭah",
            phrase: "وَٱدْخُلُوا۟ ٱلْبَابَ سُجَّدًا وَقُولُوا۟ حِطَّةٌ",
            words: [
              {
                ar: "وَٱدْخُلُوا۟ ٱلْبَابَ",
                gloss: "And enter the gate",
                points: [
                  "باب حِطَّة — the Gate of Ḥiṭṭah, now at Masjid al-Aqsa.",
                  "In old days towns and cities had gates for protection — like ports today.",
                ],
              },
              {
                ar: "سُجَّدًا",
                gloss: "Bowing / prostrating",
                points: [
                  "In a state of submission to Allah.",
                  "Most scholars said: it means bowing.",
                  "Other scholars said: it means prostration.",
                  "Putting your forehead down on the neck of the animal you are riding, whilst saying (ḥiṭṭah).",
                ],
              },
              {
                ar: "حِطَّةٌ",
                gloss: "Relieve us / remove [our burden]",
                points: [
                  "(n) حِطَّةٌ ← حَطَّ (v).",
                  "Literally: to bring down.",
                  "Ex: to bring down / take off the burden / weight which the animal is carrying.",
                  "So: to bring down / take off the heavy burden which is their sins.",
                  "To say: حِطَّةٌ نَسْتَغْفِرُ اللَّه.",
                  "Meaning is either to say it by word or to ask for Allah's forgiveness.",
                ],
              },
            ],
          },
          {
            hint: "Forgiveness · your sins · reward for the doers of good",
            phrase: "نَّغْفِرْ لَكُمْ خَطَٰيَٰكُمْ ۚ وَسَنَزِيدُ ٱلْمُحْسِنِينَ",
            words: [
              {
                ar: "نَّغْفِرْ لَكُمْ",
                gloss: "We will forgive you",
                points: ["Forgive = to clear your sins = al-maghfirah."],
              },
              {
                ar: "خَطَٰيَٰكُمْ",
                gloss: "Your sins",
                points: ["Khaṭīyah — an intentional sin."],
              },
              {
                ar: "وَسَنَزِيدُ",
                gloss: "And We will increase",
                points: ["Increase in rank / reward in life and afterlife."],
              },
              {
                ar: "ٱلْمُحْسِنِينَ",
                gloss: "The doers of good",
                points: ["Those who go beyond the minimum in obedience."],
              },
            ],
          },
        ],
        context: {
          title: "Cross-reference",
          text:
            "يَا قَوْمِ ادْخُلُوا الْأَرْضَ الْمُقَدَّسَةَ — O my people, enter the sacred land [Al-Māʾidah 5:21].",
        },
        qa: {
          title: "Why remember the ancestors' blessings?",
          question:
            "Why did Allah remind the people of the Book during the era of the Prophet Muhammad (ﷺ) of the blessings of their ancestors?",
          answers: [
            "They became the reason for their existence — their ancestors were saved from Firʿawn.",
            "They are honoured to be the descendants of the prophets.",
            "They are blessed to have the Torah until that time.",
            "From the Torah they were able to know the last Prophet, Muhammad (ﷺ).",
            "So the blessings of their ancestors became a blessing on them too.",
          ],
        },
      },
      {
        type: "qa",
        title: "Reflection — word order in the Qur'an",
        neutral: true,
        question:
          "In which topic from the previous pages did Allah mention (فَكُلُوا مِنْهَا حَيْثُ شِئْتُمْ رَغَدًا) but in a different order?",
        examples: [
          {
            cite: "Verse 35 · page 6",
            ar: "وَكُلَا مِنْهَا رَغَدًا حَيْثُ شِئْتُمَا وَلَا تَقْرَبَا هَذِهِ الشَّجَرَةَ",
            highlight: "رَغَدًا حَيْثُ شِئْتُمَا",
            note: "Referring to the ease and abundance first (Ādam in the Garden).",
          },
          {
            cite: "Verse 58 · page 9",
            ar: "فَكُلُوا مِنْهَا حَيْثُ شِئْتُمْ رَغَدًا وَادْخُلُوا الْبَابَ سُجَّدًا",
            highlight: "حَيْثُ شِئْتُمْ رَغَدًا",
            note: "Referring to the place first (Banū Isrāʾīl entering Jerusalem).",
          },
        ],
      },
      {
        type: "verseStudy",
        verse: 59,
        title: "Verse 59",
        topic: "A",
        topicRange: "58–59",
        translation:
          "But the transgressors changed the word from that which had been given to them; so We sent on the transgressors a torment from heaven, for that they were definitely disobeying.",
        arabic:
          "فَبَدَّلَ ٱلَّذِينَ ظَلَمُوا۟ قَوْلًا غَيْرَ ٱلَّذِى قِيلَ لَهُمْ فَأَنزَلْنَا عَلَى ٱلَّذِينَ ظَلَمُوا۟ رِجْزًا مِّنَ ٱلسَّمَآءِ بِمَا كَانُوا۟ يَفْسُقُونَ",
        blocks: [
          {
            type: "verseTags",
            tags: [
              { label: "Changed", color: "rose", words: ["فَبَدَّلَ"] },
              { label: "Beginning", color: "green", words: ["ٱلَّذِينَ ظَلَمُوا۟"] },
              { label: "Torment", color: "rose", words: ["رِجْزًا"] },
              { label: "Repeated ending", color: "cyan", words: ["يَفْسُقُونَ"] },
            ],
          },
          {
            type: "segmentMap",
            verseRef: 59,
            rows: [
              [
                {
                  ar: "فَبَدَّلَ ٱلَّذِينَ ظَلَمُوا۟ قَوْلًا",
                  tone: "accent",
                  notes: [
                    { text: "Changed / substituted — on purpose, repeatedly.", emphasis: true },
                    { text: "The transgressors changed both word and act.", emphasis: true },
                  ],
                },
                {
                  ar: "غَيْرَ ٱلَّذِى قِيلَ لَهُمْ",
                  notes: [
                    { text: "Other than what was said to them — passive: they did not care who ordered them.", emphasis: true },
                  ],
                },
              ],
              [
                {
                  ar: "فَأَنزَلْنَا عَلَى ٱلَّذِينَ ظَلَمُوا۟",
                  tone: "accent",
                  notes: [{ text: "So We sent down — فَ right after; from above, unavoidable.", emphasis: true }],
                },
                {
                  ar: "رِجْزًا مِّنَ ٱلسَّمَآءِ",
                  tone: "accent",
                  notes: [
                    { text: "Torment from the sky — thunder, plague, or any fitting punishment.", emphasis: true },
                  ],
                },
              ],
              [
                {
                  ar: "بِمَا كَانُوا۟ يَفْسُقُونَ",
                  notes: [
                    { text: "Because they were continually disobeying — persistent rebellion.", emphasis: true },
                  ],
                },
              ],
            ],
          },
          {
            type: "comparison",
            title: "How did Banū Isrāʾīl change the order they had from Allah?",
            image: `${PHOTOS}/bab-hitta-gate.jpg`,
            imageAlt: "Bab Ḥiṭṭah — where they were told to enter prostrating and say ḥiṭṭah",
            credit: "Remission Gate (Bab Ḥiṭṭah), Jerusalem · Ludvig14 · Wikimedia Commons (CC BY-SA 4.0)",
            pairs: [
              {
                commanded: { ar: "حِطَّةٌ", en: "Asking for forgiveness" },
                changed: { ar: "حَبَّةٌ فِي شَعْرَةٍ", en: "Asking for food (sarcastically)" },
              },
              {
                commanded: { ar: "سُجَّدًا", en: "Show submission and gratitude" },
                changed: { ar: "يَزْحَفُونَ عَلَىٰ أَسْتَاهِهِمْ", en: "Crawling on their buttocks (carelessness)" },
              },
            ],
            footer:
              "Allah punished them because they had a great opportunity to repent and have their sins forgiven — yet they ruined their chance and continued in disobedience.",
          },
          {
            type: "visualFlow",
            disobedience: {
              ar: "فَبَدَّلَ ٱلَّذِينَ ظَلَمُوا۟ قَوْلًا غَيْرَ ٱلَّذِى قِيلَ لَهُمْ",
              bubbles: [
                { ar: "قِيلَ لَهُمْ" },
                { ar: "قَوْلًا" },
              ],
            },
            consequence: {
              ar: "فَأَنْزَلْنَا عَلَى ٱلَّذِينَ ظَلَمُوا۟ رِجْزًا مِّنَ ٱلسَّمَآءِ",
              label: "From the sky",
            },
          },
          {
            type: "contrast",
            title: "Comparison with Prophet Ādam عليه السلام",
            columns: [
              {
                heading: "Ādam عليه السلام",
                lines: [
                  "Were given words to repent.",
                  "He said them obediently and submissively.",
                ],
                outcome: "So Allah accepted his repentance.",
                positive: true,
              },
              {
                heading: "Banū Isrāʾīl",
                lines: [
                  "Were given words to repent.",
                  "They did not say them — carelessly and sarcastically.",
                  "They changed the words instead.",
                ],
                outcome: "So Allah punished them.",
                positive: false,
              },
            ],
          },
        ],
        phrases: [
          {
            hint: "Changed · the wrongdoers · with a word",
            phrase: "فَبَدَّلَ ٱلَّذِينَ ظَلَمُوا۟ قَوْلًا",
            words: [
              {
                ar: "فَبَدَّلَ",
                gloss: "Changed / substituted repeatedly",
                points: [
                  "Form فَعَّلَ — repeated or intensive change.",
                  "What they were asked for ≠ what they wanted to do.",
                  "Both the word and the act were changed.",
                  "On purpose — it is not (فَقَالَ).",
                  "Disobedience.",
                ],
              },
              {
                ar: "ٱلَّذِينَ ظَلَمُوا۟",
                gloss: "The transgressors / wrongdoers",
                points: [
                  "Literally: the transgressors.",
                  "Meaning: the wrongdoers.",
                ],
              },
              {
                ar: "قَوْلًا",
                gloss: "With a word / statement / saying",
                points: [
                  "They changed both the word and the act.",
                  "Why is only the change of their qawl mentioned?",
                  "Because it is part of what they did — enough to convey disobedience.",
                  "Who finds it hard to say a word granting forgiveness will find submission even harder.",
                  "Qawl here could refer to changing the whole order — one qawl exchanged for another.",
                ],
              },
            ],
          },
          {
            hint: "Other than · what was said · to them",
            phrase: "غَيْرَ ٱلَّذِى قِيلَ لَهُمْ",
            words: [
              { ar: "غَيْرَ", gloss: "Other than" },
              {
                ar: "قِيلَ",
                gloss: "What was said to them",
                points: [
                  "Verb in the passive form.",
                  "Because they did not care who ordered them — Allah through His Messenger.",
                ],
              },
              {
                ar: "لَهُمْ",
                gloss: "To them",
                points: [
                  "They surely received the message — no doubt.",
                  "Confirming that they deliberately disobeyed.",
                ],
              },
            ],
          },
          {
            hint: "So We sent down · upon the wrongdoers · torment from the sky",
            phrase:
              "فَأَنزَلْنَا عَلَى ٱلَّذِينَ ظَلَمُوا۟ رِجْزًا مِّنَ ٱلسَّمَآءِ",
            words: [
              {
                ar: "فَأَنزَلْنَا",
                gloss: "So We sent down",
                points: [
                  "فَ — right after / because.",
                  "نَا — Allah.",
                  "From above — they cannot expect it nor avoid it.",
                ],
              },
              {
                ar: "عَلَى ٱلَّذِينَ ظَلَمُوا۟",
                gloss: "Upon those who wronged",
                points: [
                  "Repeated — to remind them and confirm how bad their deeds were.",
                  "In advance of (عَذَابًا).",
                  "The torment is only upon them.",
                  "Mentioning why they deserved the torment.",
                ],
              },
              {
                ar: "رِجْزًا",
                gloss: "Torment / punishment",
                points: [
                  "Any torment Allah found suitable to what they had done.",
                  "Could be thunderclaps, abundant snow, or any torment literally descending from the sky.",
                  "Some scholars said: the plague — a disease that made their internal organs show, as if their skin were peeled off.",
                ],
              },
              {
                ar: "مِّنَ ٱلسَّمَآءِ",
                gloss: "From the sky / heaven",
                points: ["From above — unexpected and unavoidable."],
              },
            ],
          },
          {
            hint: "Because they were · continually disobeying",
            phrase: "بِمَا كَانُوا۟ يَفْسُقُونَ",
            words: [
              {
                ar: "بِ",
                gloss: "Because",
                points: ["Particle of cause."],
              },
              {
                ar: "كَانُوا۟",
                gloss: "They were",
                points: ["Past continuous — an established pattern."],
              },
              {
                ar: "يَفْسُقُونَ",
                gloss: "Continually disobeying",
                points: [
                  "Present tense — were and still continuing to be so.",
                  "Persistent rebellion, not a one-time slip.",
                ],
              },
            ],
          },
        ],
        context: {
          title: "Why they were punished",
          text:
            "Allah punished them because they had a great opportunity to repent and have their past sins forgiven — yet they ruined their chance and acted disobediently, continuing their rebellion even at the moment of entering the gate without wanting to repent. So the punishment suited them after all this.",
        },
        hadiths: {
          title: "Hadith",
          intro:
            "It was said to the Children of Israel: enter the gate in prostration and say ḥiṭṭah — We shall forgive you your faults. But they changed Allah's order.",
          items: [
            {
              source: "Sahih al-Bukhari",
              number: "4641",
              narrator: "Abu Hurayrah (رضي الله عنه)",
              text:
                "Allah's Messenger (ﷺ) said: It was said to the children of Israel, 'Enter the gate in prostration and say Hitatun. We shall forgive you your faults.' But they changed (Allah's Order) and entered, dragging themselves on their buttocks and said, 'Habatun (a grain) in a Sha'ratin (hair).'",
              arabic:
                "قِيلَ لِبَنِي إِسْرَائِيلَ {ادْخُلُوا الْبَابَ سُجَّدًا وَقُولُوا حِطَّةٌ نَغْفِرْ لَكُمْ خَطَايَاكُمْ} فَبَدَّلُوا وَدَخَلُوا يَزْحَفُونَ عَلَىٰ أَسْتَاهِهِمْ وَقَالُوا حِبَّةٌ فِي شَعَرَةٍ",
            },
          ],
        },
      },
      {
        type: "verseStudy",
        verse: 60,
        title: "Verse 60",
        topic: "B",
        topicRange: "60–61",
        translation:
          "And [recall] when Moses prayed for water for his people, so We said, \"Strike with your staff the stone.\" And there gushed forth from it twelve springs, and every people knew its watering place. \"Eat and drink from the provision of Allah, and do not commit abuse on the earth, spreading corruption.\"",
        arabic:
          "۞ وَإِذِ ٱسْتَسْقَىٰ مُوسَىٰ لِقَوْمِهِۦ فَقُلْنَا ٱضْرِب بِّعَصَاكَ ٱلْحَجَرَ ۖ فَٱنفَجَرَتْ مِنْهُ ٱثْنَتَا عَشْرَةَ عَيْنًا ۖ قَدْ عَلِمَ كُلُّ أُنَاسٍ مَّشْرَبَهُمْ ۖ كُلُوا۟ وَٱشْرَبُوا۟ مِن رِّزْقِ ٱللَّهِ وَلَا تَعْثَوْا۟ فِى ٱلْأَرْضِ مُفْسِدِينَ",
        blocks: [
          {
            type: "verseTags",
            tags: [
              { label: "Beginning", color: "green", words: ["وَإِذِ"] },
              { label: "Prayed for water", color: "rose", words: ["ٱسْتَسْقَىٰ"] },
              { label: "Strike", color: "rose", words: ["ٱضْرِب"] },
              { label: "Gushed", color: "rose", words: ["فَٱنفَجَرَتْ"] },
              { label: "Springs", color: "rose", words: ["عَيْنًا"] },
              { label: "Watering place", color: "rose", words: ["مَّشْرَبَهُمْ"] },
              { label: "Repeated", color: "blue", words: ["كُلُوا۟", "وَٱشْرَبُوا۟"] },
              { label: "Abuse", color: "rose", words: ["تَعْثَوْا۟"] },
              { label: "Ending", color: "cyan", words: ["مُفْسِدِينَ"] },
            ],
          },
          {
            type: "segmentMap",
            verseRef: 60,
            rows: [
              [
                {
                  ar: "وَإِذِ ٱسْتَسْقَىٰ مُوسَىٰ لِقَوْمِهِۦ",
                  notes: [
                    { text: "Mūsā prayed for water for his people — showing care.", emphasis: true },
                  ],
                },
                {
                  ar: "فَقُلْنَا ٱضْرِب بِّعَصَاكَ ٱلْحَجَرَ",
                  tone: "accent",
                  notes: [{ text: "Allah answered: strike the stone with your staff.", emphasis: true }],
                },
              ],
              [
                {
                  ar: "فَٱنفَجَرَتْ مِنْهُ ٱثْنَتَا عَشْرَةَ عَيْنًا",
                  tone: "accent",
                  notes: [
                    { text: "Twelve springs gushed forth — one for each tribe.", emphasis: true },
                    { text: "Ibn ʿAṭiyyah: a cube-shaped stone, three springs from each side.", emphasis: true },
                  ],
                },
                {
                  ar: "قَدْ عَلِمَ كُلُّ أُنَاسٍ مَّشْرَبَهُمْ",
                  notes: [{ text: "Each tribe knew its watering place — no dispute.", emphasis: true }],
                },
              ],
              [
                {
                  ar: "كُلُوا۟ وَٱشْرَبُوا۟ مِن رِّزْقِ ٱللَّهِ",
                  tone: "accent",
                  notes: [{ text: "Eat and drink from Allah's provision — mann, quails, and water.", emphasis: true }],
                },
                {
                  ar: "وَلَا تَعْثَوْا۟ فِى ٱلْأَرْضِ مُفْسِدِينَ",
                  tone: "accent",
                  notes: [
                    { text: "Do not strive to corrupt the earth — like the moth (ٱلْعُثَّةُ) ruining wool.", emphasis: true },
                  ],
                },
              ],
            ],
          },
          {
            type: "branching",
            root: { ar: "ٱلْحَجَرَ", en: "the stone" },
            branches: [
              {
                label: "A specific stone",
                points: [
                  "May be inherited.",
                  "Found anywhere as they crossed the desert.",
                  "A specific one Allah told Mūsā عليه السلام to strike.",
                  "The one that fled with Mūsā's clothes before (in narration).",
                ],
              },
              {
                label: "Any stone",
                points: [
                  "Miraculous — not merely sacred or expected.",
                ],
              },
            ],
            note: {
              cite: "Ibn ʿAṭiyyah said:",
              text: "No doubt it was a cube-shaped stone that had four sides; from each side gushed three springs.",
            },
          },
          {
            type: "twelveSprings",
            ar: "فَٱنفَجَرَتْ مِنْهُ ٱثْنَتَا عَشْرَةَ عَيْنًا",
            scholar: "Ibn ʿAṭiyyah: a cube with four sides — three springs from each side.",
          },
          {
            type: "studyImage",
            verseRef: 60,
            src: `${V60}/oasis-spread.png`,
            alt: "Oasis gathering and desert well — twelve springs gushing forth",
            caption: "فَٱنفَجَرَتْ مِنْهُ ٱثْنَتَا عَشْرَةَ عَيْنًا — And there gushed forth from it twelve springs.",
          },
          {
            type: "conceptExplain",
            title: "The moth",
            ar: "ٱلْعُثَّةُ",
            body: "Means: the striver in corruption — an insect that corrupts wool.",
            points: [
              "تَعْثَوْا۟ — do not strive to corrupt the earth.",
              "مُفْسِدِينَ — spreading corruption by disobeying Allah.",
              "Linked to ٱلْمُنَافِقِينَ and ٱلْفَاسِقِينَ — those who corrupt after receiving blessings.",
            ],
          },
          {
            type: "studyImage",
            verseRef: 60,
            src: `${V60}/moth-concept.png`,
            alt: "Moth and wool damage — metaphor for تعثوا corruption",
          },
          {
            type: "qa",
            title: "Allah's blessings in this verse",
            question: "What are Allah's blessings on Banū Isrāʾīl in verse 60?",
            answers: [
              "Accepting Mūsā's عليه السلام supplication for water.",
              "Proving the prophethood of Mūsā عليه السلام by giving him the staff as a miracle.",
              "Allah's division of the springs into twelve — one for each tribe — shows He is all-knowing and knows what best suits His servants.",
              "The division of springs prevented disputes between the tribes and brought them comfort.",
            ],
          },
        ],
        phrases: [
          {
            hint: "Mūsā asks for water · Allah commands · strike the stone",
            phrase:
              "وَإِذِ ٱسْتَسْقَىٰ مُوسَىٰ لِقَوْمِهِۦ فَقُلْنَا ٱضْرِب بِّعَصَاكَ ٱلْحَجَرَ",
            words: [
              {
                ar: "ٱسْتَسْقَىٰ",
                gloss: "Prayed for water / rain",
                points: [
                  "To ask for rain or water — how? By supplicating, showing submission and urgent need for Allah's help.",
                ],
              },
              {
                ar: "مُوسَىٰ",
                gloss: "Mūsā عليه السلام",
                points: ["Refers to going back to the desert with his people."],
              },
              {
                ar: "لِقَوْمِهِۦ",
                gloss: "For his people",
                points: [
                  "Mūsā عليه السلام cares about his people.",
                  "He tries to find good in them — perhaps they may return to Allah.",
                ],
              },
              {
                ar: "فَقُلْنَا",
                gloss: "So We said",
                points: [
                  "فَ — cause / shortly after his supplication.",
                  "نَا — Allah سبحانه وتعالى answered.",
                ],
              },
              {
                ar: "ٱضْرِب",
                gloss: "Strike",
                points: ["A direct command from Allah."],
              },
              {
                ar: "بِّعَصَاكَ",
                gloss: "With your staff",
                points: [
                  "بِ — with.",
                  "كَ — your specific staff of the Prophet Mūsā عليه السلام.",
                ],
              },
              {
                ar: "ٱلْحَجَرَ",
                gloss: "The stone",
                points: [
                  "See branching above — a specific stone or any stone; both views are miraculous.",
                ],
              },
            ],
          },
          {
            hint: "Gushed · from it · twelve springs",
            phrase: "فَٱنفَجَرَتْ مِنْهُ ٱثْنَتَا عَشْرَةَ عَيْنًا",
            words: [
              {
                ar: "فَٱنفَجَرَتْ",
                gloss: "And there gushed forth",
                points: [
                  "فَ — right after striking.",
                  "Burst powerfully — plenty of water.",
                  "Feminine verb form.",
                ],
              },
              {
                ar: "مِنْهُ",
                gloss: "From it",
                points: ["هُ — the stone."],
              },
              {
                ar: "ٱثْنَتَا عَشْرَةَ",
                gloss: "Twelve (ten + two)",
                points: [
                  "Dual (ٱثْنَتَا) + plural (عَشْرَةَ).",
                  "Feminine noun with feminine number — one spring for each tribe.",
                ],
              },
              {
                ar: "عَيْنًا",
                gloss: "Springs",
                points: ["Twelve springs — see Ibn ʿAṭiyyah's cube illustration above."],
              },
            ],
          },
          {
            hint: "Indeed knew · each tribe · its watering place",
            phrase: "قَدْ عَلِمَ كُلُّ أُنَاسٍ مَّشْرَبَهُمْ",
            words: [
              { ar: "قَدْ", gloss: "Indeed / already", points: ["Emphasis — Allah had already arranged this."] },
              { ar: "عَلِمَ", gloss: "Knew", points: ["Allah knew each tribe's place before any dispute arose."] },
              {
                ar: "كُلُّ أُنَاسٍ",
                gloss: "Every people / tribe",
                points: ["Each and every one of the twelve tribes of Banū Isrāʾīl."],
              },
              {
                ar: "مَّشْرَبَهُمْ",
                gloss: "Its watering place",
                points: [
                  "Their drinking place — each tribe's own spring.",
                  "No fighting over water.",
                ],
              },
            ],
          },
          {
            hint: "Eat and drink · Allah's provision · do not corrupt",
            phrase: "كُلُوا۟ وَٱشْرَبُوا۟ مِن رِّزْقِ ٱللَّهِ وَلَا تَعْثَوْا۟ فِى ٱلْأَرْضِ مُفْسِدِينَ",
            words: [
              {
                ar: "كُلُوا۟",
                gloss: "Eat",
                points: [
                  "The mann and quails — repeated command (with drink).",
                  "The spring is the source of food and water: water irrigates plants, plants feed animals.",
                ],
              },
              {
                ar: "وَٱشْرَبُوا۟",
                gloss: "And drink",
                points: ["The water from the twelve springs."],
              },
              {
                ar: "رِّزْقِ ٱللَّهِ",
                gloss: "Allah's provision",
                points: ["Reminder of Allah's provisions — mann, quails, and now water."],
              },
              {
                ar: "تَعْثَوْا۟",
                gloss: "Commit abuse / strive to corrupt",
                points: [
                  "Do not cause corruption.",
                  "Do not strive to corrupt — like the moth (ٱلْعُثَّةُ) that ruins wool.",
                ],
              },
              {
                ar: "فِى ٱلْأَرْضِ",
                gloss: "On the earth",
                points: ["Corruption on earth follows disobedience to Allah."],
              },
              {
                ar: "مُفْسِدِينَ",
                gloss: "Spreading corruption",
                points: [
                  "How? By disobeying Allah.",
                  "Linked to ٱلْمُنَافِقِينَ and ٱلْفَاسِقِينَ.",
                ],
              },
            ],
          },
        ],
      },
      {
        type: "verseStudy",
        verse: 61,
        title: "Verse 61",
        topic: "B",
        topicRange: "60–61",
        translation:
          "And [recall] when you said, \"O Moses, we can never endure one [kind of] food. So call upon your Lord to bring forth for us from the earth its green herbs and its cucumbers and its garlic and its lentils and its onions.\" [Moses] said, \"Would you exchange what is better for what is less? Go down to a city and indeed, you will have what you have asked.\" And they were covered with humiliation and poverty and returned with anger from Allah [upon them]. That was because they [repeatedly] disbelieved in the signs of Allah and killed the prophets without right. That was because they disobeyed and were [habitually] transgressing.",
        arabic:
          "وَإِذْ قُلْتُمْ يَٰمُوسَىٰ لَن نَّصْبِرَ عَلَىٰ طَعَامٍ وَٰحِدٍ فَٱدْعُ لَنَا رَبَّكَ يُخْرِجْ لَنَا مِمَّا تُنبِتُ ٱلْأَرْضُ مِن بَقْلِهَا وَقِثَّآئِهَا وَفُومِهَا وَعَدَسِهَا وَبَصَلِهَا ۖ قَالَ أَتَسْتَبْدِلُونَ ٱلَّذِى هُوَ أَدْنَىٰ بِٱلَّذِى هُوَ خَيْرٌ ۚ ٱهْبِطُوا۟ مِصْرًا فَإِنَّ لَكُم مَّا سَأَلْتُمْ ۗ وَضُرِبَتْ عَلَيْهِمُ ٱلذِّلَّةُ وَٱلْمَسْكَنَةُ وَبَآءُو بِغَضَبٍ مِّنَ ٱللَّهِ ۗ ذَٰلِكَ بِأَنَّهُمْ كَانُوا۟ يَكْفُرُونَ بِـَٔايَٰتِ ٱللَّهِ وَيَقْتُلُونَ ٱلنَّبِيِّۦنَ بِغَيْرِ ٱلْحَقِّ ۗ ذَٰلِكَ بِمَا عَصَوا۟ وَّكَانُوا۟ يَعْتَدُونَ",
        blocks: [
          {
            type: "verseTags",
            tags: [
              { label: "Beginning", color: "green", words: ["وَإِذْ"] },
              { label: "Herbs", color: "rose", words: ["بَقْلِهَا"] },
              { label: "Cucumbers", color: "rose", words: ["قِثَّآئِهَا"] },
              { label: "Garlic", color: "rose", words: ["فُومِهَا"] },
              { label: "Lentils", color: "rose", words: ["عَدَسِهَا"] },
              { label: "Onions", color: "rose", words: ["بَصَلِهَا"] },
              { label: "Bring forth", color: "rose", words: ["يُخْرِجْ"] },
              { label: "Exchange", color: "rose", words: ["أَتَسْتَبْدِلُونَ"] },
              { label: "Less", color: "rose", words: ["أَدْنَىٰ"] },
              { label: "Repeated", color: "blue", words: ["ٱلَّذِى هُوَ", "ذَٰلِكَ"] },
              { label: "Covered", color: "rose", words: ["ضُرِبَتْ"] },
              { label: "Humiliation", color: "rose", words: ["ٱلذِّلَّةُ"] },
              { label: "Poverty", color: "rose", words: ["ٱلْمَسْكَنَةُ"] },
              { label: "Returned", color: "rose", words: ["وَبَآءُوا"] },
              { label: "Transgressing", color: "amber", words: ["يَعْتَدُونَ"] },
              { label: "Page end", color: "cyan", note: "End of mushaf page 9" },
            ],
          },
          {
            type: "segmentMap",
            verseRef: 61,
            rows: [
              [
                {
                  ar: "وَإِذْ قُلْتُمْ يَٰمُوسَىٰ",
                  notes: [{ text: "When you said, O Mūsā — direct address to the listener.", emphasis: true }],
                },
                {
                  ar: "لَن نَّصْبِرَ عَلَىٰ طَعَامٍ وَٰحِدٍ",
                  tone: "accent",
                  notes: [
                    { text: "We cannot endure one food — ungrateful after mann and quails.", emphasis: true },
                  ],
                },
              ],
              [
                {
                  ar: "فَٱدْعُ لَنَا رَبَّكَ يُخْرِجْ لَنَا",
                  notes: [
                    { text: "So call your Lord for us — impolite; they would not ask Allah themselves.", emphasis: true },
                  ],
                },
                {
                  ar: "مِن بَقْلِهَا وَقِثَّآئِهَا وَفُومِهَا وَعَدَسِهَا وَبَصَلِهَا",
                  tone: "accent",
                  notes: [{ text: "Herbs, cucumbers, garlic, lentils, onions — earthly produce.", emphasis: true }],
                },
              ],
              [
                {
                  ar: "أَتَسْتَبْدِلُونَ ٱلَّذِى هُوَ أَدْنَىٰ بِٱلَّذِى هُوَ خَيْرٌ",
                  tone: "accent",
                  notes: [
                    { text: "Would you exchange what is less for what is better?", emphasis: true },
                    { text: "Mann & quails (طَيِّبَات) vs vegetables requiring effort.", emphasis: true },
                  ],
                },
              ],
              [
                {
                  ar: "ٱهْبِطُوا۟ مِصْرًا فَإِنَّ لَكُم مَّا سَأَلْتُمْ",
                  notes: [{ text: "Go down to Egypt / a city — you will have what you asked.", emphasis: true }],
                },
              ],
              [
                {
                  ar: "وَضُرِبَتْ عَلَيْهِمُ ٱلذِّلَّةُ وَٱلْمَسْكَنَةُ",
                  tone: "accent",
                  notes: [{ text: "Humiliation and poverty struck them — consequence of arrogance.", emphasis: true }],
                },
                {
                  ar: "وَبَآءُو بِغَضَبٍ مِّنَ ٱللَّهِ",
                  notes: [{ text: "They returned with Allah's anger — al-maghḍūb ʿalayhim.", emphasis: true }],
                },
              ],
              [
                {
                  ar: "يَكْفُرُونَ بِـَٔايَٰتِ ٱللَّهِ وَيَقْتُلُونَ ٱلنَّبِيِّۦنَ",
                  tone: "accent",
                  notes: [
                    { text: "4th sin — disbelief in signs. 5th sin — killing the prophets.", emphasis: true },
                  ],
                },
                {
                  ar: "عَصَوا۟ وَّكَانُوا۟ يَعْتَدُونَ",
                  notes: [{ text: "Continuous disobedience and transgression — end of page.", emphasis: true }],
                },
              ],
            ],
          },
          {
            type: "qa",
            title: "Why not ask Allah directly?",
            question:
              "Why didn't they themselves ask Allah — the One who provides them with everything they have seen and had till now?",
            answers: [
              "They had weak faith in Allah.",
              "They did not want to exert any effort in worship.",
              "Perhaps because they knew how corrupt and disobedient they were to Allah.",
              "So they hoped Mūsā عليه السلام would ask Allah — since he is close to Allah.",
            ],
          },
          {
            type: "conceptExplain",
            title: "Why did Allah describe their choice as lower?",
            ar: "أَدْنَىٰ",
            points: [
              "They had easy food from the sky — now they would have to exert effort to get food.",
              "What they asked for was their choice — less (أَدْنَىٰ). What they had was Allah's choice — good and better in every way.",
              "Allah said about what they had that it was طَيِّبَات — pure and lawful. Nothing could compare to food sent from Allah in its purity.",
            ],
          },
          {
            type: "studyImage",
            verseRef: 61,
            src: `${V61}/foods-spread.png`,
            alt: "Herbs, cucumbers, garlic, lentils, and onions they asked for",
            caption: "مِن بَقْلِهَا وَقِثَّآئِهَا وَفُومِهَا وَعَدَسِهَا وَبَصَلِهَا — From the earth its herbs, cucumbers, garlic, lentils, and onions.",
          },
          {
            type: "comparison",
            title: "Would you exchange what is better for what is less?",
            pairs: [
              {
                commanded: { ar: "ٱلَّذِى هُوَ خَيْرٌ", en: "Mann and quails — Allah's pure provision from the sky" },
                changed: { ar: "ٱلَّذِى هُوَ أَدْنَىٰ", en: "Vegetables from the earth — their own choice" },
              },
            ],
            footer: "They used to hang them out of the windows. بِ — the price: what they gave up for what was better.",
          },
          {
            type: "branching",
            root: { ar: "ٱهْبِطُوا۟ مِصْرًا", en: "Go down / enter" },
            branches: [
              {
                label: "To Egypt (مِصْرًا)",
                points: [
                  "They inherited the land of Firʿawn.",
                  "Describing descent: higher → lower (altitude).",
                  "Or insulting them: better → worse (place).",
                  "Both cases it is lower — Egypt (Firʿawn) → humiliated.",
                ],
              },
              {
                label: "To any city",
                points: [
                  "As they went to the sacred land after the exile.",
                  "A city (easy position) → hard.",
                  "They will remain ungrateful.",
                  "فَإِنَّ — so indeed — you will have what you asked for: the food and life they wanted.",
                ],
              },
            ],
          },
          {
            type: "studyImage",
            verseRef: 61,
            src: `${V61}/poverty-humiliation.png`,
            alt: "Humiliation and poverty — consequence of ingratitude",
            caption: "وَضُرِبَتْ عَلَيْهِمُ ٱلذِّلَّةُ وَٱلْمَسْكَنَةُ — Humiliation and poverty were struck upon them.",
          },
          {
            type: "studyImage",
            verseRef: 61,
            src: `${V61}/sins-panel.png`,
            alt: "Disbelieving in Allah's signs and killing the prophets",
            caption: "يَكْفُرُونَ بِـَٔايَٰتِ ٱللَّهِ وَيَقْتُلُونَ ٱلنَّبِيِّۦنَ بِغَيْرِ ٱلْحَقِّ",
          },
          {
            type: "conceptExplain",
            title: "4th sin — disbelief in Allah's signs",
            ar: "يَكْفُرُونَ بِـَٔايَٰتِ ٱللَّهِ",
            points: [
              "They continuously denied the revelations and miracles of Allah.",
              "Revelation — they would not follow them. Miracles — they would not appreciate them.",
              "Āyāt: evidences, verses, lessons, signs, revelations.",
            ],
          },
          {
            type: "conceptExplain",
            title: "5th sin — killing the prophets",
            ar: "يَقْتُلُونَ ٱلنَّبِيِّۦنَ بِغَيْرِ ٱلْحَقِّ",
            body:
              "Arrogance and blindly following desires led them to deny Allah's signs — and to mute the voice of guidance by killing the messengers who forbade them from wrongdoing.",
          },
          {
            type: "conceptExplain",
            title: "Continuous disobedience and transgression",
            ar: "يَعْتَدُونَ",
            points: [
              "They were continuously and arrogantly disobedient, crossing the limits set for them.",
              "They did not want to be guided to the right way — they wanted to follow their own desires.",
              "وَبَآءُوا بِغَضَبٍ مِّنَ ٱللَّهِ — they returned with Allah's anger upon them. Not guided anymore — to punish them.",
              "Cross-reference: Al-Fātiḥah 1:7 — غَيْرِ ٱلْمَغْضُوبِ عَلَيْهِمْ (not of those upon whom is anger).",
            ],
          },
          {
            type: "ayah61MemorizeQuiz",
          },
        ],
        phrases: [
          {
            hint: "When you said · O Mūsā · we cannot endure one food",
            phrase: "وَإِذْ قُلْتُمْ يَٰمُوسَىٰ لَن نَّصْبِرَ عَلَىٰ طَعَامٍ وَٰحِدٍ",
            words: [
              {
                ar: "وَإِذْ قُلْتُمْ",
                gloss: "When you said",
                points: [
                  "Directly addressing the listener / reader.",
                  "To engage anyone reading or listening at any time — Muslim or otherwise.",
                ],
              },
              {
                ar: "لَن",
                gloss: "Will never (until)",
                points: ["Strong negation — they refuse to be patient."],
              },
              {
                ar: "نَّصْبِرَ",
                gloss: "Endure / be patient",
                points: ["Complaining after mann and quails from Allah."],
              },
              {
                ar: "طَعَامٍ وَٰحِدٍ",
                gloss: "One fixed kind of food",
                points: [
                  "Although it was two types (mann and quails), they called it one.",
                  "Ungrateful / greedy manner.",
                ],
              },
            ],
          },
          {
            hint: "Call your Lord · bring forth · what the earth grows",
            phrase: "فَٱدْعُ لَنَا رَبَّكَ يُخْرِجْ لَنَا مِمَّا تُنبِتُ ٱلْأَرْضُ",
            words: [
              {
                ar: "فَٱدْعُ",
                gloss: "So call / supplicate",
                points: [
                  "فَ — so, shortly after complaining.",
                  "Impolite way to ask for a favour and to address a prophet.",
                ],
              },
              {
                ar: "لَنَا رَبَّكَ",
                gloss: "For us — your Lord",
                points: [
                  "Impolite — admitting disobedience.",
                  "As if they do not belong to Allah.",
                  "Not exerting effort in worship themselves.",
                ],
              },
              {
                ar: "يُخْرِجْ",
                gloss: "To produce / bring forth",
                points: ["Allah alone brings produce from the earth."],
              },
              {
                ar: "مِمَّا تُنبِتُ ٱلْأَرْضُ",
                gloss: "What the earth grows",
                points: ["It was a desert — no plants could grow in it without Allah."],
              },
            ],
          },
          {
            hint: "Herbs · cucumbers · garlic · lentils · onions",
            phrase: "مِن بَقْلِهَا وَقِثَّآئِهَا وَفُومِهَا وَعَدَسِهَا وَبَصَلِهَا",
            words: [
              { ar: "بَقْلِهَا", gloss: "Its herbs / greenery", points: ["Earthly vegetables — inferior to heavenly provision."] },
              { ar: "قِثَّآئِهَا", gloss: "Its cucumbers", points: ["They used to hang them out of the windows."] },
              { ar: "فُومِهَا", gloss: "Its garlic", points: ["Common produce of settled lands."] },
              { ar: "عَدَسِهَا", gloss: "Its lentils", points: ["Part of the list of earthly foods they preferred."] },
              { ar: "بَصَلِهَا", gloss: "Its onions", points: ["The last item in their request."] },
            ],
          },
          {
            hint: "Would you exchange · what is less · for what is better",
            phrase: "قَالَ أَتَسْتَبْدِلُونَ ٱلَّذِى هُوَ أَدْنَىٰ بِٱلَّذِى هُوَ خَيْرٌ",
            words: [
              {
                ar: "أَتَسْتَبْدِلُونَ",
                gloss: "Would you exchange",
                points: ["Mūsā عليه السلام rebukes their ingratitude."],
              },
              {
                ar: "أَدْنَىٰ",
                gloss: "What is less / lower",
                points: [
                  "Their choice — requires effort, less pure.",
                  "See concept block above for why Allah called it lower.",
                ],
              },
              {
                ar: "بِٱلَّذِى",
                gloss: "For that which (ب + the price)",
                points: ["بِ — indicates the price: what they gave up."],
              },
              {
                ar: "خَيْرٌ",
                gloss: "What is better",
                points: ["Mann and quails — Allah's choice, pure and lawful (طَيِّبَات)."],
              },
            ],
          },
          {
            hint: "Go down · Egypt or any city · you will have what you asked",
            phrase: "ٱهْبِطُوا۟ مِصْرًا فَإِنَّ لَكُم مَّا سَأَلْتُمْ",
            words: [
              {
                ar: "ٱهْبِطُوا۟",
                gloss: "Go down / descend",
                points: [
                  "Higher → lower (altitude) or better → worse (place).",
                  "They will remain ungrateful.",
                ],
              },
              {
                ar: "مِصْرًا",
                gloss: "Egypt / any city",
                points: [
                  "To Egypt — they inherited the land of Firʿawn.",
                  "To any city — after exile toward the sacred land.",
                ],
              },
              {
                ar: "فَإِنَّ",
                gloss: "So indeed",
                points: ["Allah grants what they asked — as a test and consequence."],
              },
              {
                ar: "مَّا سَأَلْتُمْ",
                gloss: "What you asked for",
                points: ["The food and life they wanted."],
              },
            ],
          },
          {
            hint: "Humiliation · poverty · Allah's anger",
            phrase: "وَضُرِبَتْ عَلَيْهِمُ ٱلذِّلَّةُ وَٱلْمَسْكَنَةُ وَبَآءُو بِغَضَبٍ مِّنَ ٱللَّهِ",
            words: [
              {
                ar: "ضُرِبَتْ",
                gloss: "Were struck / covered",
                points: ["Passive — humiliation was placed upon them."],
              },
              {
                ar: "ٱلذِّلَّةُ",
                gloss: "Humiliation",
                points: [
                  "They were arrogant — so they were punished with its opposite: living in humiliation.",
                ],
              },
              {
                ar: "ٱلْمَسْكَنَةُ",
                gloss: "Poverty / misery",
                points: [
                  "Powerless — incapable of helping themselves.",
                  "Cut off from Allah's support and blessings — always in need of help.",
                ],
              },
              {
                ar: "وَبَآءُوا",
                gloss: "They returned / drew upon themselves",
                points: ["They only brought anger upon themselves."],
              },
              {
                ar: "بِغَضَبٍ مِّنَ ٱللَّهِ",
                gloss: "With anger from Allah",
                points: [
                  "Allah's anger — no longer guiding them.",
                  "Al-Fātiḥah 1:7 — not of al-maghḍūb ʿalayhim.",
                ],
              },
            ],
          },
          {
            hint: "Disbelieved · killed prophets · disobeyed · transgressed",
            phrase:
              "ذَٰلِكَ بِأَنَّهُمْ كَانُوا۟ يَكْفُرُونَ بِـَٔايَٰتِ ٱللَّهِ وَيَقْتُلُونَ ٱلنَّبِيِّۦنَ بِغَيْرِ ٱلْحَقِّ ۗ ذَٰلِكَ بِمَا عَصَوا۟ وَّكَانُوا۟ يَعْتَدُونَ",
            words: [
              {
                ar: "ذَٰلِكَ",
                gloss: "That is because (repeated)",
                points: ["Repeated twice — two separate reasons for their state."],
              },
              {
                ar: "يَكْفُرُونَ بِـَٔايَٰتِ ٱللَّهِ",
                gloss: "Disbelieved in Allah's signs",
                points: [
                  "4th sin — continuously denied revelations and miracles.",
                  "Āyāt: evidences, verses, lessons, signs.",
                ],
              },
              {
                ar: "يَقْتُلُونَ ٱلنَّبِيِّۦنَ",
                gloss: "Killed the prophets",
                points: [
                  "5th sin — muted the voice of guidance.",
                  "Because messengers forbade them from wrongdoing.",
                ],
              },
              {
                ar: "بِغَيْرِ ٱلْحَقِّ",
                gloss: "Without right",
                points: ["Unjust killing of those sent to guide them."],
              },
              {
                ar: "عَصَوا۟",
                gloss: "They disobeyed",
                points: ["Continuous arrogant disobedience."],
              },
              {
                ar: "يَعْتَدُونَ",
                gloss: "Transgressing / crossing limits",
                points: [
                  "They did not want guidance — they wanted to follow their desires.",
                  "End of page 9.",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    mushafPage: 10,
    verseRange: "62–69",
    title: "Reward, Covenant & the Cow",
    mainTopic:
      "True reward for belief (62), then covenant at Mount Ṭūr (63–64), Sabbath transgression (65–66), and the cow command (67–69).",
    topics: [
      {
        id: "reward",
        label: "True reward",
        color: "teal",
        verseRange: "62",
        summary: "Believers, Jews, Christians, Sabaeans — whoever believed and did good has no fear or grief.",
      },
      {
        id: "covenant",
        label: "Covenant",
        color: "rose",
        verseRange: "63–64",
        summary: "Mount raised, revelation taken — yet they turned away.",
      },
      {
        id: "sabbath",
        label: "Sabbath",
        color: "amber",
        verseRange: "65–66",
        summary: "Transgressors on the Sabbath became apes — a deterrent for the God-conscious.",
      },
      {
        id: "cow",
        label: "The cow",
        color: "green",
        verseRange: "67–69",
        summary: "Slaughter a cow — mockery, then endless questions about age and colour.",
      },
    ],
    sections: [
      {
        type: "page10MemorizeQuiz",
      },
      {
        type: "mushafTopicsMap",
        showBanner: true,
      },
      {
        type: "summary",
        title: "Page overview",
        body:
          "Āyāt 62–69: true reward (62) → covenant at Mount Ṭūr and turning away (63–64) → Sabbath transgression (65–66) → the cow command and their evasions (67–69). Use the quiz above for last-minute memorisation.",
      },
    ],
  },
  {
    mushafPage: 11,
    verseRange: "70–76",
    title: "Covenant & the Calf",
    mainTopic:
      "Allah took their covenant and raised the mountain over them — yet they worshipped the calf after clear signs came.",
    topics: [
      {
        id: "covenant",
        label: "Covenant",
        color: "teal",
        verseRange: "70–74",
        summary:
          "We took your covenant and raised the mount above you — hold firmly to what We gave you and remember.",
      },
      {
        id: "calf",
        label: "The calf",
        color: "rose",
        verseRange: "75–76",
        summary:
          "After that you still transgressed — worshipping the calf despite clear signs.",
      },
    ],
    sections: [
      {
        type: "mushafTopicsMap",
        showBanner: true,
      },
      {
        type: "summary",
        title: "Key themes",
        body:
          "Allah's covenant was reinforced with the mountain raised above them, yet they turned to calf worship — a grave sin after witnessing so many miracles.",
      },
    ],
  },
];

/**
 * Horizontal study roadmap for Al-Baqarah pages 2–11 (mushaf divisions + themes).
 */
export const BAQARAH_STUDY_TIMELINE = [
  {
    id: "juz-1",
    marker: "juz",
    label: "Juz 1",
    labelAr: "الجزء",
  },
  {
    id: "page-2",
    mushafPage: 2,
    marker: "page",
    headline: "The Book & Guidance",
    detail: "The first group — the believers",
  },
  {
    id: "page-3",
    mushafPage: 3,
    marker: "page",
    headline: "The second group of people",
    detail: "Disbelievers & hypocrites",
  },
  {
    id: "page-4",
    mushafPage: 4,
    marker: "page",
    headline: "Allah's call to all mankind",
    detail: "Worship Him alone",
  },
  {
    id: "page-5",
    mushafPage: 5,
    marker: "rub",
    headline: "Reward & evidence",
    detail: "Glad tidings of Paradise · parables · evidences for tawḥīd",
  },
  {
    id: "page-6",
    mushafPage: 6,
    marker: "page",
    headline: "Story of Ādam",
    detail: "First mention of Ādam عليه السلام",
  },
  {
    id: "page-7",
    mushafPage: 7,
    marker: "rub",
    headline: "Successive authority on earth",
    detail: "The story of the Children of Israel",
  },
  {
    id: "page-8",
    mushafPage: 8,
    marker: "page",
    headline: "Story of Mūsā & Pharaoh",
    detail: "First mention — the Children of Israel & Allah's blessings on them",
  },
  {
    id: "page-9",
    mushafPage: 9,
    marker: "rub",
    headline: "Story of Mūsā continues",
    detail: "The Children of Israel & Allah's blessings on them",
  },
  {
    id: "hizb-1",
    marker: "hizb",
    label: "Hizb 1",
    labelAr: "الحزب",
  },
  {
    id: "page-10",
    mushafPage: 10,
    marker: "page",
    headline: "Reward, covenant & cow",
    detail: "Āyāt 62–69 · Sabbath · cow command",
  },
  {
    id: "page-11",
    mushafPage: 11,
    marker: "page",
    headline: "Covenant & the calf",
    detail: "Mountain raised · calf worship",
  },
];

/** Timeline segment for the mushaf header (Juz 1 thematic map through page 9). */
export function getBaqarahStudyTimelineThrough(maxMushafPage = 9) {
  return BAQARAH_STUDY_TIMELINE.filter(
    (item) =>
      item.marker === "juz" ||
      (item.mushafPage != null && item.mushafPage <= maxMushafPage),
  );
}

const byMushafPage = new Map(
  BAQARAH_PAGE_GUIDES.map((guide) => [guide.mushafPage, guide]),
);

export function getBaqarahPageGuides() {
  return BAQARAH_PAGE_GUIDES;
}

export function getBaqarahGuideByMushafPage(mushafPage) {
  return byMushafPage.get(mushafPage) ?? null;
}

export function getDetailedTopicsForMushafPage(mushafPage) {
  return getBaqarahGuideByMushafPage(mushafPage)?.detailedTopics ?? [];
}

export function hasDetailedTopicsForMushafPage(mushafPage) {
  return getDetailedTopicsForMushafPage(mushafPage).length > 0;
}

export function hasBaqarahPageGuides(surahId) {
  return surahId === "baqarah";
}

export const BAQARAH_GUIDE_MUSHAF_PAGES = BAQARAH_PAGE_GUIDES.map((g) => g.mushafPage);

/**
 * Seerah (2) — The Prophet’s Biography · Ash-Shama’il an-Nabawiyah
 * Zad Academy · Semester 2
 *
 * Clever study method: Portrait Path
 *   Build a living mental portrait layer by layer (why → face → hair → beard → manners).
 *   Each lesson: Witness (narrations) → Hold (flashcards) → Apply (rulings & activities).
 *
 * Section types (shared with Aqeedah/Tarbiyah notes):
 *   heading, intro, definition, split, ayah, note, cards, pillars, evidence,
 *   list, roadmap, activities, pair, conditions, qa, comingSoon, spine, quotes, glossary
 */

export const SEERAH2_META = {
  id: "seerah-2",
  name: "The Prophet’s Characteristics",
  nameAr: "الشمائل النبوية",
  tagline: "Seerah (2) · Ash-Shama’il an-Nabawiyah — appearance, manners, and character.",
  description:
    "This semester, we will explore the descriptions and traditions of the Prophet ﷺ. This will cover his physical appearance, including his hair, face, and body, as well as his clothing, how he ﷺ walked, sat, and perspired, his use of perfume, his eating and drinking habits, his humility and tolerance, and the way he spoke, among other aspects. Allah is the Granter of success.",
  path: "/seerah-2",
  category: "Seerah",
  meta: "Zad Academy · Semester 2 · Portrait Path",
  accent: "rose",
  topics: [
    "Importance of the shama’il",
    "Face, hair & beard",
    "Manners & worship",
  ],
  units: 7,
};

const comingSoon = (title) => [
  {
    type: "comingSoon",
    title,
    body: "Notes for this lesson will be added here. Keep the same lesson id so progress is preserved.",
  },
];

export const SEERAH2_UNITS = [
  {
    id: "contents-unit",
    title: "This semester",
    titleAr: "هذا الفصل",
    lessons: [
      {
        id: "contents",
        title: "Contents",
        icon: "✦",
        sections: [
          {
            type: "heading",
            kicker: "Zad Academy · Seerah (2)",
            title: "The Prophet’s Biography — The Prophet’s Characteristics (Ash-Shama’il an-Nabawiyah)",
          },
          {
            type: "intro",
            text: "This semester, we will explore the descriptions and traditions of the Prophet ﷺ. This will cover his physical appearance, including his hair, face, and body, as well as his clothing, how he ﷺ walked, sat, and perspired, his use of perfume, his eating and drinking habits, his humility and tolerance, and the way he spoke, among other aspects. Allah is the Granter of success.",
          },
          {
            type: "heading",
            kicker: "Book of Seerah (2)",
            title: "Contents",
          },
          {
            type: "spine",
            items: [
              {
                left: "Importance of studying the shama’il",
                right: "The physical appearance of the Prophet ﷺ",
                leftId: "importance",
                rightId: "physical-features",
                tone: 1,
              },
              {
                left: "His face, hair and body, and the Seal of Prophethood",
                right: "The clothing of the Prophet ﷺ",
                leftId: "face",
                rightId: "clothing",
                tone: 2,
              },
              {
                left: "His manner of walking and sitting",
                right: "His sweat and perfume",
                leftId: "walking-sitting",
                rightId: "sweat-perfume",
                tone: 3,
              },
              {
                left: "Names of the Prophet ﷺ",
                right: "His manner of eating and drinking",
                leftId: "names",
                rightId: "eating-drinking",
                tone: 4,
              },
              {
                left: "His manner of speaking, laughing, smiling and joking",
                right: "His manner of sleeping and waking up",
                leftId: "speaking",
                rightId: "sleeping",
                tone: 5,
              },
              {
                left: "His worship, recitation of Quran and weeping",
                right: "His humility, attitude, age, death and legacy",
                leftId: "worship",
                rightId: "humility-legacy",
                tone: 6,
              },
            ],
          },
        ],
      },
      {
        id: "portrait-path",
        title: "How to study (Portrait Path)",
        icon: "◎",
        sections: [
          {
            type: "heading",
            kicker: "Study method",
            title: "Portrait Path — build a living image of him ﷺ",
          },
          {
            type: "intro",
            text: "Do not study this course as a pile of facts. Study it as assembling a portrait. Each lesson adds one layer. By the end of the semester, you should be able to close your eyes and “see” his appearance, manners, and character — then love him more, and follow him more.",
          },
          {
            type: "pillars",
            title: "Three passes for every lesson",
            items: [
              {
                n: 1,
                title: "Witness",
                body: "Read the narrations slowly. Notice who narrated, what they compared him to, and any word the scholars explain (plump, qaza, katam…). Mark one image you will keep.",
              },
              {
                n: 2,
                title: "Hold",
                body: "Use the flashcards the same day. Say the fact out loud in one sentence: “His face shone like the moon,” “He dyed with safflower and saffron,” “Grey hairs came from Hud, al-Waqi‘ah…”",
              },
              {
                n: 3,
                title: "Apply",
                body: "Answer the activity questions in your own words. Where there is a ruling (beard, black dye, qaza, parting), write what you would say if asked — then check against the notes.",
              },
            ],
          },
          {
            type: "heading",
            title: "The layers of the portrait",
          },
          {
            type: "roadmap",
            items: [
              {
                title: "Why we look",
                subtitle: "Importance of the shama’il + voices of admiration → faith, love, following, steadfastness",
              },
              {
                title: "Face",
                subtitle: "Brightness like the moon; somewhat round — not plump, not completely round",
              },
              {
                title: "Hair",
                subtitle: "Thick; wavy; few greys; fringe then parting; dyeing; qaza forbidden",
              },
              {
                title: "Beard",
                subtitle: "Thick and full — and the command: trim the moustache and let the beard grow",
              },
              {
                title: "Body, clothing, gait, perfume…",
                subtitle: "Later chapters complete the portrait — manners, worship, humility, legacy",
              },
            ],
          },
          {
            type: "note",
            tone: "benefit",
            title: "Mnemonic — the surahs that gave him grey hairs",
            body: "Hud · al-Waqi‘ah · al-Mursalat · an-Naba · at-Takweer. Remember: “Hud Waits; Mursalat; Naba Turns.” These surahs describe the horrors of the Day of Resurrection and the calamities of earlier nations.",
          },
          {
            type: "note",
            tone: "info",
            title: "Mnemonic — grey-hair places",
            body: "Temple · Parting · Soul patch. Remember: “TPS — Temples, Parting, Soul patch.” Oil could hide the few greys on the head.",
          },
          {
            type: "cards",
            items: [
              {
                title: "Portrait Map",
                body: "Open Practice → Portrait Map. Tap hair, face, beard, or a topic chip to see the key facts — then jump into the full chapter when you want depth.",
              },
              {
                title: "Daily micro-goal",
                body: "One lesson + 5 flashcards + one activity sentence. Fifteen focused minutes beat an hour of skimming.",
              },
              {
                title: "Weekly portrait check",
                body: "Without notes: describe face, hair, beard, and one ruling. If you stall, reopen that lesson only.",
              },
              {
                title: "Love goal",
                body: "After each unit, write one sentence of salawat and one concrete sunnah you will practise that week.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "unit-importance",
    num: 1,
    title: "Importance of studying the shama’il",
    titleAr: "أهمية دراسة الشمائل",
    lessons: [
      {
        id: "importance",
        title: "Importance of studying the Shama’il",
        icon: "1",
        sections: [
          {
            type: "heading",
            kicker: "Unit 1",
            title: "Importance of studying the Shama’il",
          },
          {
            type: "intro",
            text: "Knowing the shama’il of the Prophet ﷺ of both types, meaning his character traits, and his physical features, brings many benefits, including the following:",
          },
          {
            type: "evidence",
            items: [
              {
                n: 1,
                lead: "Learning about the Messenger of Allah ﷺ",
                body: "This is required of every Muslim, because the level of faith is commensurate with knowledge. Those who have the greatest knowledge of the Prophet ﷺ have the strongest faith. For that reason, Allah ﷻ chose Prophets for every nation from among themselves, so that they would be familiar with their lineage and character.",
                blocks: [
                  {
                    kind: "ayah",
                    text: "{And to the ‘Aad [We sent] their brother Hud}",
                    ref: "al-A‘raf 7:65",
                  },
                  {
                    kind: "ayah",
                    text: "{And to the Thamud [We sent] their brother Salih}",
                    ref: "al-A‘raf 7:73",
                  },
                ],
              },
              {
                n: 2,
                lead: "Increasing love for the Prophet ﷺ",
                body: "Studying the Seerah and Shama’il increases the Muslim’s love for him ﷺ, longing to be with him in Paradise, and giving him precedence over all things — which are among the main principles of faith. The more one learns of his biography and characteristics, the greater one’s share of love for him.",
              },
              {
                n: 3,
                lead: "Following and emulating him ﷺ",
                body: "Knowing his shama’il helps one follow and emulate him, as the early generations did. By following him they gained Allah’s testimony and pleasure.",
                blocks: [
                  {
                    kind: "ayah",
                    text: "{And the first forerunners [in the faith] among the Muhajireen and the Ansar and those who followed them with good conduct – Allah is pleased with them and they are pleased with Him, and He has prepared for them gardens beneath which rivers flow, wherein they will abide forever. That is the great attainment}",
                    ref: "at-Tawbah 9:100",
                  },
                ],
              },
              {
                n: 4,
                lead: "Remaining steadfast and refuting deniers",
                body: "Knowing these attributes helps believers remain steadfast on the path of the righteous — like rays of the sun that illuminate the way — and helps refute the arguments of deniers. These characteristics caused prominent Christian figures and fair-minded people to acknowledge his virtue.",
              },
            ],
          },
          {
            type: "note",
            tone: "benefit",
            title: "Goethe (German literary figure)",
            body: "“We Europeans, with all the ideas that we have, have not yet attained what Muhammad attained, and no one will ever surpass him. I searched in the books of history for a sublime example for humanity to follow, and I found that example in the Prophet Muhammad ﷺ.”",
          },
        ],
      },
      {
        id: "western-voices",
        title: "What Westerners and fair-minded writers said",
        icon: "2",
        sections: [
          {
            type: "heading",
            kicker: "Importance of studying the Shama’il",
            title: "Voices of admiration",
          },
          {
            type: "intro",
            text: "Fair-minded writers — even those who were not Muslim — were moved by the life and character of the Messenger of Allah ﷺ. Their words indicate the power of his example when it is studied honestly.",
          },
          {
            type: "quotes",
            items: [
              {
                author: "Bernard Shaw",
                source: "Muhammad (burned by the British authorities)",
                text: "The world is in the greatest need of a man whose thought is at the level of Muhammad’s thinking. The clergy of the Middle Ages, because of ignorance or fanaticism, depicted the religion of Muhammad in the darkest terms, as they regarded him as an enemy of Christianity. But I have read about this man, and I have found him to be an amazing and extraordinary character. I soon realized that he was not an enemy of Christianity; rather he should be called the saviour of humanity. In my view, if he were to gain authority over the world today, he would succeed in solving all our problems in a manner that would secure the peace and well-being that humanity is seeking.",
              },
              {
                author: "Michael Hart",
                source: "The 100: A Ranking of the Most Influential Persons in History",
                text: "My choice of Muhammad to lead the list of the world’s most influential persons may surprise some readers and may be questioned by others, but he was the only man in history who was supremely successful on both the religious and secular levels. Of humble origins, Muhammad founded and promulgated one of the world’s great religions, and became an immensely effective political leader. Today, thirteen centuries after his death, his influence is still powerful and pervasive.",
              },
              {
                author: "Annie Besant",
                text: "It is impossible for anyone who studies the life and character of the great Prophet of Arabia, who knows how he taught and how he lived, to feel anything but reverence for that mighty Prophet, one of the great messengers of the Supreme.",
              },
              {
                author: "Dr. Nazmi Luqa",
                source: "Muhammad ar-Risalah wa’r-Rasool (Coptic Egyptian scholar; also wrote Muhammad fi Hayatihi al-Khassah)",
                text: "Muhammad ﷺ was not like anyone else in his character and attributes. He is the one who combined the virtues of the messengers and the ambition of the hero. Thus it is incumbent upon any fair-minded person to honour his example and to appreciate his integrity.",
              },
              {
                author: "Dr. Nazmi Luqa",
                source: "On the death of the Prophet’s children",
                text: "Death snatched away the beloved children of the Messenger ﷺ so that this would be a declaration that the human Messenger has no advantage over other humans [with regard to loss and bereavement]. Therefore people have no excuse for failing to follow his example and guidance.",
              },
            ],
          },
          {
            type: "note",
            tone: "info",
            title: "What this indicates",
            body: "When even non-Muslim observers who studied his life felt reverence, it strengthens the believer’s certainty — and answers deniers — that his ﷺ character and mission stand out in human history.",
          },
        ],
      },
    ],
  },
  {
    id: "unit-physical",
    num: 2,
    title: "Physical appearance",
    titleAr: "صفاته الخَلْقية",
    lessons: [
      {
        id: "physical-features",
        title: "Physical features — khilqah & khuluq",
        icon: "3",
        sections: [
          {
            type: "heading",
            kicker: "Unit 2",
            title: "The physical features of the Messenger of Allah ﷺ",
          },
          {
            type: "split",
            items: [
              {
                label: "Khilqah",
                title: "Physical features",
                body: "Outward appearance — for example tall or short, dark or fair, corpulent or otherwise.",
              },
              {
                label: "Khuluq",
                title: "Character",
                body: "Inward characteristics — for example forbearance, kindness, humility, and knowledge.",
              },
            ],
          },
          {
            type: "note",
            tone: "warning",
            title: "Why begin with outward appearance?",
            body: "Inward characteristics have greater merit for salvation. Yet we begin with a description of the Prophet’s physical appearance because outward appearance is the first thing noticed of a person, and because it is like an indication of his hidden characteristics — what appears outwardly is indicative of what is hidden inwardly.",
          },
        ],
      },
      {
        id: "face",
        title: "The face of the Prophet ﷺ",
        icon: "4",
        sections: [
          {
            type: "heading",
            kicker: "Physical appearance",
            title: "The face of the Prophet ﷺ",
          },
          {
            type: "intro",
            text: "The description begins with the face because it is the first thing noticed, and it can indicate inward character.",
          },
          {
            type: "heading",
            title: "Brightness of his face",
          },
          {
            type: "list",
            items: [
              {
                title: "Jabir ibn Samurah رضي الله عنه (at-Tirmidhi)",
                body: "On a moonlit night he compared the Messenger of Allah ﷺ to the moon and found him more beautiful than the moon.",
              },
              {
                title: "Al-Bara رضي الله عنه (al-Bukhari)",
                body: "When asked if the Prophet’s face shone like a sword, he replied: “No, [it shone] like the moon.”",
              },
              {
                title: "Ka‘b ibn Malik رضي الله عنه (al-Bukhari and Muslim)",
                body: "“When the Messenger of Allah ﷺ was happy, his face shone like a piece of the moon.”",
              },
            ],
          },
          {
            type: "note",
            tone: "benefit",
            title: "Key takeaway",
            body: "This has to do with the brightness of his face.",
          },
          {
            type: "heading",
            title: "Shape and roundness",
          },
          {
            type: "list",
            items: [
              {
                title: "Jabir ibn Samurah رضي الله عنه (Muslim)",
                body: "His face was like the sun and moon, and it was round.",
              },
              {
                title: "Ali رضي الله عنه (at-Tirmidhi)",
                body: "His face was not plump or completely round; rather it was somewhat round.",
              },
            ],
          },
          {
            type: "glossary",
            title: "Terms in Ali’s narration",
            items: [
              {
                term: "Plump",
                body: "A face of which the cheeks stand out.",
              },
              {
                term: "Completely round",
                body: "A face that is very round.",
              },
              {
                term: "Somewhat round",
                body: "Between the two — not plump, not completely round.",
              },
            ],
          },
        ],
      },
      {
        id: "hair",
        title: "The hair of the Prophet ﷺ",
        icon: "5",
        sections: [
          {
            type: "heading",
            kicker: "Physical appearance",
            title: "The hair of the Prophet ﷺ",
          },
          {
            type: "definition",
            label: "General description",
            body: "The Prophet ﷺ had thick hair that reached halfway down his ears, and at the back it came down to his shoulders. There was no grey in his hair except for a few hairs.",
          },
          {
            type: "list",
            items: [
              {
                title: "Anas رضي الله عنه (al-Bukhari and Muslim)",
                body: "The Messenger of Allah ﷺ had hair that was not very curly and not very straight. By the time of his death, he had no more than twenty white hairs on his head and in his beard.",
              },
              {
                title: "Aisha رضي الله عنها (Abu Dawud; sahih isnad)",
                body: "The hair of the Messenger of Allah ﷺ reached his earlobes but did not reach his shoulders.",
              },
            ],
          },
          {
            type: "glossary",
            title: "Texture clarified",
            items: [
              {
                term: "Very curly",
                body: "Hair twisted like spirals.",
              },
              {
                term: "Very straight",
                body: "Hair that is completely straight.",
              },
              {
                term: "His hair ﷺ",
                body: "Between the two — wavy, neither extreme.",
              },
            ],
          },
          {
            type: "note",
            tone: "warning",
            title: "He had few grey hairs on his head",
            body: "The grey hairs were so few that they would not be visible when he applied oil to his hair. If he did not apply oil, they were visible.",
          },
          {
            type: "list",
            items: [
              {
                title: "Jabir ibn Samurah رضي الله عنه (Muslim)",
                body: "When the Prophet ﷺ applied oil to his hair, no grey hairs could be seen; if he did not apply oil, they were visible.",
              },
              {
                title: "Anas رضي الله عنه (al-Bukhari and Muslim)",
                body: "He did not dye his hair because there were only a few grey hairs at his temple.",
              },
            ],
          },
          {
            type: "heading",
            title: "Where the grey hairs were",
          },
          {
            type: "list",
            items: [
              {
                title: "Jabir ibn Samurah رضي الله عنه (Ahmad)",
                body: "There were no grey hairs on the head of the Messenger of Allah ﷺ except a few hairs in his parting; if he applied oil to his hair, it would cover them.",
              },
              {
                title: "Wahb ibn Abi Juhayfah as-Suwa’i رضي الله عنه (al-Bukhari and Muslim)",
                body: "I saw the Prophet ﷺ, and I saw whitish hairs below his lower lip, in his soul patch.",
              },
            ],
          },
          {
            type: "glossary",
            title: "Temple · Parting · Soul patch",
            items: [
              {
                term: "Temple",
                body: "The area between the eye and ear.",
              },
              {
                term: "Parting",
                body: "Where the hair is parted in the middle of the head.",
              },
              {
                term: "Soul patch",
                body: "The hair that grows beneath the lower lip.",
              },
            ],
          },
          {
            type: "note",
            tone: "info",
            title: "What gave him grey hairs",
            body: "Ibn Abbas رضي الله عنهما narrated that Abu Bakr رضي الله عنه said: “O Messenger of Allah, you have got grey hairs!” He ﷺ said: «What has given me grey hairs is [Surat] Hud, al-Waqi‘ah, al-Mursalat, Amma yatasa’alun [an-Naba] and Idha ash-shamsu kuwwirat [at-Takweer].» Narrated by at-Tirmidhi; classed as sahih by al-Albani. The scholars said: these surahs contain descriptions of the horrors of the Day of Resurrection and the calamities that befell earlier nations — that had an immense impact on him ﷺ, so he developed grey hairs earlier than expected.",
          },
        ],
      },
      {
        id: "hairstyle",
        title: "Hairstyle, shaving & qaza",
        icon: "6",
        sections: [
          {
            type: "heading",
            kicker: "Physical appearance",
            title: "The hairstyle of the Prophet ﷺ",
          },
          {
            type: "intro",
            text: "In the beginning, the Prophet ﷺ preferred to go along with the People of the Book and differ from the polytheists. So he used to have a fringe. Then when the people began to enter the religion of Allah in crowds, and the enmity of the People of the Book became clear, he went back to the custom of the Arabs, which was to have a parting in the hair.",
          },
          {
            type: "list",
            items: [
              {
                title: "Ibn Abbas رضي الله عنهما (al-Bukhari and Muslim)",
                body: "The Messenger of Allah ﷺ used to let his hair hang down (fringe) and the polytheists used to part their hair. The People of the Book used to let their hair hang down, and the Messenger of Allah ﷺ liked to go along with the People of the Book in matters concerning which he had received no instructions. Then [later] the Messenger of Allah ﷺ parted his hair.",
              },
            ],
          },
          {
            type: "note",
            tone: "benefit",
            title: "Both permissible — parting is better",
            body: "Both styles are permissible, but parting is considered better. Shaykh al-Islam Ibn Taymiyyah mentioned that parting the hair became a defining characteristic of Muslims, and ahl adh-dhimmah under Muslim rule were stipulated not to part theirs.",
          },
          {
            type: "heading",
            title: "Shaving his head",
          },
          {
            type: "note",
            tone: "info",
            title: "An-Nawawi",
            body: "After migrating to Madinah, the Prophet ﷺ did not shave his head except on three occasions: the year of al-Hudaybiyyah; the year of the made-up umrah (Umrat al-Qada); and the year of the Farewell Pilgrimage.",
          },
          {
            type: "heading",
            title: "Ruling on shaving part of the head (qaza)",
          },
          {
            type: "definition",
            label: "Qaza",
            body: "Shaving part of the head while leaving hair on other parts. Narrated from Abdullah ibn Umar رضي الله عنهما in as-Sahihayn: the Messenger of Allah ﷺ forbade qaza. This prohibition is in the sense of it being haram.",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "Shaving parts of the sides of the head.",
              "Shaving the middle and leaving the sides (ascribed to many Christians).",
              "Shaving the sides and leaving the middle (ascribed to “the foolish”).",
              "Shaving the front and leaving the back.",
            ],
          },
          {
            type: "note",
            tone: "warning",
            title: "Modern styles that fall under qaza",
            body: "Styles that shave or crop part of the head severely while leaving other parts long — such as many undercuts and partial fades — come under the meaning of qaza and are not permitted.",
          },
        ],
      },
      {
        id: "dyeing",
        title: "Dyeing his hair",
        icon: "7",
        sections: [
          {
            type: "heading",
            kicker: "Physical appearance",
            title: "Dyeing his hair",
          },
          {
            type: "intro",
            text: "Scholars differed on whether the Prophet ﷺ dyed his hair. Some said he did not, and some said he did. The correct view is that he ﷺ did do that.",
          },
          {
            type: "list",
            items: [
              {
                title: "Abu Hurayrah رضي الله عنه (at-Tirmidhi in ash-Shama’il; sahih — al-Albani)",
                body: "When asked if the Prophet ﷺ dyed his hair, he said: “Yes.”",
              },
              {
                title: "Abdullah ibn Mawhab via Umm Salamah رضي الله عنها (al-Bukhari)",
                body: "He visited Umm Salamah, and she showed him one of the hairs of the Prophet ﷺ that had been dyed.",
              },
              {
                title: "Ibn Umar رضي الله عنهما (Abu Dawud and an-Nasai; sahih — al-Albani)",
                body: "The Prophet ﷺ used to wear sandals made of tanned leather, and he would dye his beard with safflower and saffron. Ibn Umar also did this.",
              },
            ],
          },
          {
            type: "heading",
            title: "Discussion — rulings for us",
          },
          {
            type: "cards",
            items: [
              {
                title: "Henna and katam — recommended",
                body: "There is nothing wrong with men dyeing hair with henna. The Prophet ﷺ said: «The best way to change grey hair is to use henna and katam.» (Authors of as-Sunan from Abu Dharr; sahih — al-Albani).",
              },
              {
                title: "Pure black dye — not permissible",
                body: "Changing grey hair with pure black dye is not permissible for men or women. He ﷺ said: «Change this grey hair, but avoid black.» (Muslim). And: «There will be people at the end of time who will dye their hair as black as the crops of pigeons. They will not even smell the fragrance of Paradise.» (Abu Dawud from Ibn Abbas; sahih — al-Albani).",
              },
              {
                title: "Immoral dyes / imitating women",
                body: "Hair dye should be avoided if it is regarded as immoral or an imitation of women. The Prophet ﷺ forbade such imitation and cursed those who do it.",
              },
            ],
          },
        ],
      },
      {
        id: "beard",
        title: "The beard of the Prophet ﷺ",
        icon: "8",
        sections: [
          {
            type: "heading",
            kicker: "Physical appearance",
            title: "Letting the beard grow",
          },
          {
            type: "intro",
            text: "The Prophet ﷺ enjoined letting the beard grow.",
          },
          {
            type: "list",
            items: [
              {
                title: "Abdullah ibn Umar رضي الله عنهما (al-Bukhari and Muslim)",
                body: "The Messenger of Allah ﷺ said: «Trim the moustache and let the beard grow.»",
              },
              {
                title: "Report in as-Sahihayn",
                body: "«Be different from the polytheists; trim the moustache and let the beard grow.»",
              },
            ],
          },
          {
            type: "note",
            tone: "warning",
            title: "What is not permissible",
            body: "What some people do — shaving the beard, or cutting it short at the bottom and trimming it on both sides — is not permissible, because it is contrary to the guidance of the Prophet ﷺ and his command to let the beard grow.",
          },
          {
            type: "note",
            tone: "info",
            title: "Shaykh Ibn Baz on Ibn Umar’s handful",
            body: "Whoever quotes as evidence the report that Ibn Umar رضي الله عنه used to cut his beard during Hajj so that it was no longer than a handful — this cannot be taken as evidence, because it was based on Ibn Umar’s own reasoning (ijtihad). What counts as evidence is what he narrated, not his own reasoning.",
          },
          {
            type: "heading",
            title: "The beard of the Prophet ﷺ",
          },
          {
            type: "definition",
            label: "Description",
            body: "The beard of the Prophet ﷺ was thick and full.",
          },
          {
            type: "list",
            items: [
              {
                title: "Al-Bara رضي الله عنه (an-Nasai)",
                body: "The Messenger of Allah ﷺ was a man with a thick beard.",
              },
              {
                title: "Ali ibn Abi Talib رضي الله عنه (Ahmad; sahih — al-Albani)",
                body: "The Prophet ﷺ had a large beard.",
              },
            ],
          },
        ],
      },
      {
        id: "body-seal",
        title: "His body & the Seal of Prophethood",
        icon: "9",
        draft: true,
        sections: comingSoon("His body and the Seal of Prophethood"),
      },
    ],
  },
  {
    id: "unit-later",
    num: 3,
    title: "Manners & later chapters",
    titleAr: "أخلاقه وصفاته",
    lessons: [
      {
        id: "clothing",
        title: "The clothing of the Prophet ﷺ",
        icon: "10",
        draft: true,
        sections: comingSoon("The clothing of the Prophet ﷺ"),
      },
      {
        id: "walking-sitting",
        title: "His manner of walking and sitting",
        icon: "11",
        draft: true,
        sections: comingSoon("His manner of walking and sitting"),
      },
      {
        id: "sweat-perfume",
        title: "His sweat and perfume",
        icon: "12",
        draft: true,
        sections: comingSoon("His sweat and perfume"),
      },
      {
        id: "names",
        title: "Names of the Prophet ﷺ",
        icon: "13",
        draft: true,
        sections: comingSoon("Names of the Prophet ﷺ"),
      },
      {
        id: "eating-drinking",
        title: "His manner of eating and drinking",
        icon: "14",
        draft: true,
        sections: comingSoon("His manner of eating and drinking"),
      },
      {
        id: "speaking",
        title: "Speaking, laughing, smiling and joking",
        icon: "15",
        draft: true,
        sections: comingSoon("His manner of speaking, laughing, smiling and joking"),
      },
      {
        id: "sleeping",
        title: "Sleeping and waking up",
        icon: "16",
        draft: true,
        sections: comingSoon("His manner of sleeping and waking up"),
      },
      {
        id: "worship",
        title: "Worship, Quran and weeping",
        icon: "17",
        draft: true,
        sections: comingSoon("His worship, recitation of Quran and weeping"),
      },
      {
        id: "humility-legacy",
        title: "Humility, age, death and legacy",
        icon: "18",
        draft: true,
        sections: comingSoon("His humility, attitude, age, death and legacy"),
      },
    ],
  },
  {
    id: "unit-activities",
    num: 4,
    title: "Activities",
    titleAr: "التدريبات",
    lessons: [
      {
        id: "activities",
        title: "Activities — Chapter check",
        icon: "✎",
        sections: [
          {
            type: "heading",
            kicker: "Check your understanding",
            title: "Activities",
          },
          {
            type: "intro",
            text: "Answer in your own words first. Then open flashcards or the quiz to tighten what you missed. This is Pass 3 of the Portrait Path: Apply.",
          },
          {
            type: "activities",
            title: "Write your answers",
            items: [
              "Write briefly about the importance of studying the Prophetic shama’il (characteristics of the Prophet ﷺ).",
              "How did the Westerners write about their views of the Messenger of Allah ﷺ? What does that indicate?",
              "Write a precise description of the face, hair and beard of the Messenger of Allah ﷺ.",
              "Did the Messenger of Allah ﷺ dye his hair? Quote evidence for that. What is the ruling on dyeing the hair black?",
              "Based on your study of this chapter, discuss the prohibition on imitating the disbelievers.",
              "How would you respond to one who says that letting the beard grow is not obligatory?",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "practice",
    title: "Practice",
    titleAr: "التدريب",
    lessons: [
      {
        id: "portrait",
        title: "Portrait Map",
        icon: "◎",
        kind: "tool",
        badge: "Explore",
      },
      {
        id: "flashcards",
        title: "Flashcards",
        icon: "◈",
        kind: "tool",
        badge: "Practice",
      },
      {
        id: "quiz",
        title: "Knowledge Quiz",
        icon: "?",
        kind: "tool",
        badge: "Practice",
      },
    ],
  },
];

export const SEERAH2_LESSONS = SEERAH2_UNITS.flatMap((unit) =>
  unit.lessons.map((lesson) => ({
    ...lesson,
    unitId: unit.id,
    unitNum: unit.num,
    unitTitle: unit.title,
    unitTitleAr: unit.titleAr,
  })),
);

export const SEERAH2_STUDY_UNITS = SEERAH2_UNITS.filter((unit) => unit.id !== "practice");
export const SEERAH2_STUDY_LESSONS = SEERAH2_LESSONS.filter((lesson) => lesson.kind !== "tool");

export const SEERAH2_TOPICS = [
  { id: "all", label: "All topics" },
  { id: "method", label: "Portrait Path" },
  { id: "importance", label: "Importance of the shama’il" },
  { id: "face", label: "Face" },
  { id: "hair", label: "Hair & hairstyle" },
  { id: "dye", label: "Dyeing hair" },
  { id: "beard", label: "Beard" },
  { id: "rulings", label: "Rulings & imitation" },
];

export const SEERAH2_FLASHCARDS = [
  {
    t: "method",
    q: "What are the three passes of the Portrait Path?",
    a: "Witness (read narrations) → Hold (flashcards / one-sentence recall) → Apply (activities and rulings).",
  },
  {
    t: "method",
    q: "Mnemonic for the surahs that gave the Prophet ﷺ grey hairs?",
    a: "Hud · al-Waqi‘ah · al-Mursalat · an-Naba · at-Takweer. (“Hud Waits; Mursalat; Naba Turns.”)",
  },
  {
    t: "method",
    q: "Mnemonic for where his few grey hairs were?",
    a: "TPS — Temple, Parting, Soul patch.",
  },
  {
    t: "importance",
    q: "What two types of shama’il are studied?",
    a: "Character traits (khuluq) and physical features (khilqah).",
  },
  {
    t: "importance",
    q: "Name the four benefits of studying the shama’il.",
    a: "1) Learning about the Messenger ﷺ (faith grows with knowledge). 2) Increasing love for him. 3) Following and emulating him. 4) Remaining steadfast and refuting deniers.",
  },
  {
    t: "importance",
    q: "Why did Allah send Prophets from among their own people?",
    a: "So that their people would be familiar with their lineage and character — e.g. Hud as brother of ‘Aad, Salih as brother of Thamud (al-A‘raf 7:65, 7:73).",
  },
  {
    t: "importance",
    q: "What did Michael Hart say made Muhammad ﷺ unique among the most influential?",
    a: "He was the only man in history supremely successful on both the religious and secular levels.",
  },
  {
    t: "importance",
    q: "What did Dr. Nazmi Luqa conclude from the death of the Prophet’s children?",
    a: "That the human Messenger has no advantage over other humans in loss and bereavement — so people have no excuse for failing to follow his example.",
  },
  {
    t: "face",
    q: "What is khilqah vs khuluq?",
    a: "Khilqah = outward physical features. Khuluq = inward character (forbearance, kindness, humility, knowledge…).",
  },
  {
    t: "face",
    q: "Why begin with physical appearance if character has greater merit?",
    a: "Outward appearance is noticed first, and what appears outwardly indicates what is hidden inwardly.",
  },
  {
    t: "face",
    q: "How did Companions describe the brightness of his face?",
    a: "More beautiful than the moon (Jabir); shone like the moon, not a sword (al-Bara); when happy, shone like a piece of the moon (Ka‘b).",
  },
  {
    t: "face",
    q: "How did Ali رضي الله عنه describe the shape of his face?",
    a: "Not plump or completely round; rather somewhat round.",
  },
  {
    t: "hair",
    q: "Describe the hair of the Prophet ﷺ (texture and length).",
    a: "Thick; not very curly and not very straight. Reached halfway down the ears / earlobes; at the back toward the shoulders (with a narration that it did not reach the shoulders).",
  },
  {
    t: "hair",
    q: "How many white hairs by the time of his death?",
    a: "No more than twenty white hairs on his head and in his beard (Anas).",
  },
  {
    t: "hair",
    q: "What happened to grey hairs when he applied oil?",
    a: "They could not be seen; without oil they were visible.",
  },
  {
    t: "hair",
    q: "What gave the Prophet ﷺ grey hairs, according to the hadith?",
    a: "Surat Hud, al-Waqi‘ah, al-Mursalat, an-Naba, and at-Takweer — because of the horrors of the Last Day and calamities of earlier nations.",
  },
  {
    t: "hair",
    q: "Fringe then parting — what changed?",
    a: "At first he followed the People of the Book (fringe) against polytheists; later, when enmity of the People of the Book became clear, he parted his hair like the Arabs. Both permissible; parting better.",
  },
  {
    t: "hair",
    q: "When did he ﷺ shave his head after the Hijrah (per an-Nawawi)?",
    a: "Only three times: al-Hudaybiyyah, Umrat al-Qada, and the Farewell Pilgrimage.",
  },
  {
    t: "rulings",
    q: "What is qaza, and what is its ruling?",
    a: "Shaving part of the head and leaving hair on other parts. Forbidden (haram).",
  },
  {
    t: "dye",
    q: "Did the Messenger of Allah ﷺ dye his hair? Evidence?",
    a: "Yes — the correct view. Abu Hurayrah said yes; Umm Salamah showed a dyed hair; Ibn Umar: he dyed his beard with safflower and saffron.",
  },
  {
    t: "dye",
    q: "Best way to change grey hair? Ruling on pure black?",
    a: "Henna and katam are best. Pure black dye is not permissible for men or women — “Change this grey hair, but avoid black.”",
  },
  {
    t: "beard",
    q: "What did the Prophet ﷺ command regarding moustache and beard?",
    a: "«Trim the moustache and let the beard grow» — and «Be different from the polytheists…»",
  },
  {
    t: "beard",
    q: "Describe the beard of the Prophet ﷺ.",
    a: "Thick and full (al-Bara); large (Ali).",
  },
  {
    t: "beard",
    q: "How to answer someone who cites Ibn Umar’s “handful” to shorten the beard?",
    a: "That was Ibn Umar’s ijtihad. Evidence is what he narrated from the Prophet ﷺ, not his own reasoning (Ibn Baz).",
  },
  {
    t: "rulings",
    q: "Name ways this chapter shows prohibition of imitating disbelievers.",
    a: "Differing from polytheists in beard/moustache; later parting hair as Muslims’ marker; forbidding qaza styles linked to non-Muslim practice; avoiding dyes that imitate women or immoral styles.",
  },
];

export const SEERAH2_QUIZ = [
  {
    t: "importance",
    q: "Studying the shama’il includes which two types?",
    opts: [
      "Only his battles and treaties",
      "Character traits and physical features",
      "Only his clothing and perfume",
      "Only the names of his Companions",
    ],
    ans: 1,
    fb: "Both khuluq (character) and khilqah (physical features) are part of the shama’il.",
  },
  {
    t: "importance",
    q: "Why is learning about the Messenger ﷺ required of every Muslim?",
    opts: [
      "Because faith is unrelated to knowledge",
      "Because the level of faith is commensurate with knowledge",
      "Because only scholars need seerah",
      "Because it replaces the prayer",
    ],
    ans: 1,
    fb: "Those with the greatest knowledge of him ﷺ have the strongest faith.",
  },
  {
    t: "importance",
    q: "Which ayah pair is cited to show Prophets were sent from among their own people?",
    opts: [
      "al-Fatihah 1:1–2",
      "al-A‘raf 7:65 and 7:73 (Hud and Salih as “their brother”)",
      "at-Tawbah 9:1–2",
      "Yasin 36:1–2",
    ],
    ans: 1,
    fb: "Hud to ‘Aad and Salih to Thamud — “their brother” — so people knew their lineage and character.",
  },
  {
    t: "importance",
    q: "Michael Hart ranked Muhammad ﷺ first among influential persons because…",
    opts: [
      "He only succeeded religiously",
      "He only succeeded politically",
      "He was supremely successful on both religious and secular levels",
      "He wrote the most books",
    ],
    ans: 2,
    fb: "Hart stressed unique success in both spheres, with lasting influence centuries later.",
  },
  {
    t: "face",
    q: "Al-Bara was asked if his face shone like a sword. He said:",
    opts: [
      "Yes, like a sword",
      "No, like the moon",
      "Like the sun only",
      "Like lightning",
    ],
    ans: 1,
    fb: "Brightness of the face — like the moon (al-Bukhari).",
  },
  {
    t: "face",
    q: "Ali’s description of the face was:",
    opts: [
      "Completely round and plump",
      "Square and flat",
      "Not plump or completely round; somewhat round",
      "Long and narrow only",
    ],
    ans: 2,
    fb: "Somewhat round — cheeks not protruding; not very round.",
  },
  {
    t: "hair",
    q: "His hair was:",
    opts: [
      "Very curly",
      "Very straight",
      "Not very curly and not very straight",
      "Always shaved",
    ],
    ans: 2,
    fb: "Wavy — between spiral-curly and completely straight (Anas).",
  },
  {
    t: "hair",
    q: "By his death, white hairs on head and beard were:",
    opts: [
      "More than a hundred",
      "No more than twenty",
      "None at all",
      "Only in the beard, hundreds",
    ],
    ans: 1,
    fb: "Anas: no more than twenty white hairs on head and beard.",
  },
  {
    t: "hair",
    q: "Which surahs gave him grey hairs?",
    opts: [
      "al-Kawthar and al-Ikhlas only",
      "Hud, al-Waqi‘ah, al-Mursalat, an-Naba, at-Takweer",
      "Only al-Baqarah",
      "Only Juz ‘Amma in full",
    ],
    ans: 1,
    fb: "Because of Resurrection horrors and nations’ calamities in those surahs.",
  },
  {
    t: "hair",
    q: "Grey hairs were found at:",
    opts: [
      "Only the crown",
      "Temple, parting, and soul patch",
      "Only the moustache",
      "Nowhere — he had none",
    ],
    ans: 1,
    fb: "TPS: temple, parting, soul patch (under the lower lip).",
  },
  {
    t: "hair",
    q: "After Hijrah, he shaved his head (an-Nawawi) at:",
    opts: [
      "Every Friday",
      "Hudaybiyyah, Umrat al-Qada, Farewell Pilgrimage",
      "Only in Makkah before Hijrah",
      "Never",
    ],
    ans: 1,
    fb: "Only those three occasions after migrating to Madinah.",
  },
  {
    t: "rulings",
    q: "Qaza is:",
    opts: [
      "Dyeing with henna",
      "Parting the hair",
      "Shaving part of the head and leaving hair elsewhere — haram",
      "Letting the beard grow",
    ],
    ans: 2,
    fb: "Forbidden in as-Sahihayn from Ibn Umar.",
  },
  {
    t: "dye",
    q: "The correct view on whether he ﷺ dyed his hair:",
    opts: [
      "He never dyed",
      "He did dye — e.g. Abu Hurayrah, Umm Salamah’s dyed hair, safflower and saffron",
      "Only Companions dyed",
      "Dyeing was invented later",
    ],
    ans: 1,
    fb: "Scholars differed; the correct view is that he did.",
  },
  {
    t: "dye",
    q: "Ruling on pure black dye for grey hair:",
    opts: [
      "Recommended for everyone",
      "Not permissible for men or women",
      "Only haram for women",
      "Obligatory in Ramadan",
    ],
    ans: 1,
    fb: "«Change this grey hair, but avoid black» (Muslim).",
  },
  {
    t: "dye",
    q: "Best way to change grey hair?",
    opts: [
      "Pure black",
      "Henna and katam",
      "Shaving the head always",
      "Leaving it with no option mentioned",
    ],
    ans: 1,
    fb: "Hadith of Abu Dharr — henna and katam.",
  },
  {
    t: "beard",
    q: "The Prophetic command is:",
    opts: [
      "Shave the beard and grow the moustache",
      "Trim the moustache and let the beard grow",
      "Trim both equally short",
      "No command about facial hair",
    ],
    ans: 1,
    fb: "Bukhari and Muslim — and differ from the polytheists.",
  },
  {
    t: "beard",
    q: "Ibn Umar cutting to a handful in Hajj is:",
    opts: [
      "A Prophetic command binding on all",
      "His ijtihad — evidence is what he narrated, not his reasoning",
      "Proof that shaving is allowed",
      "Unrelated to the beard",
    ],
    ans: 1,
    fb: "Ibn Baz: what he narrated is evidence; his own cutting is not.",
  },
  {
    t: "beard",
    q: "His beard was described as:",
    opts: [
      "Sparse and patchy",
      "Thick and full / large",
      "Always shaved",
      "Only a soul patch",
    ],
    ans: 1,
    fb: "Al-Bara: thick beard; Ali: large beard.",
  },
  {
    t: "rulings",
    q: "Parting the hair became:",
    opts: [
      "Forbidden always",
      "A defining characteristic of Muslims (Ibn Taymiyyah)",
      "Only for women",
      "Only for pilgrimage",
    ],
    ans: 1,
    fb: "Both fringe and parting permissible; parting better and became a Muslim marker.",
  },
  {
    t: "method",
    q: "Best weekly check for this course?",
    opts: [
      "Reread every page silently once a year",
      "Without notes: describe face, hair, beard, and one ruling",
      "Only watch videos",
      "Skip activities",
    ],
    ans: 1,
    fb: "Portrait Path weekly check — then reopen only the weak layer.",
  },
];

export function seerah2CoursePath() {
  return SEERAH2_META.path;
}

export function seerah2StudyPath(lessonId) {
  const base = `${SEERAH2_META.path}/study`;
  return lessonId ? `${base}?lesson=${encodeURIComponent(lessonId)}` : base;
}

export function seerah2Banner() {
  return {
    code: "Zad Academy · Seerah (2) · Semester 2",
    title: SEERAH2_META.name,
    subtitle: SEERAH2_META.tagline,
    meta: [
      { label: "Units", value: String(SEERAH2_META.units) },
      { label: "Lessons", value: String(SEERAH2_STUDY_LESSONS.length) },
      { label: "Practice", value: "Map · Cards · Quiz" },
    ],
  };
}

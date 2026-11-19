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
                leftId: "physique",
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
                title: "Physique, skin & seal",
                subtitle: "Average height, broad shoulders, skin colour, and the seal of prophethood",
              },
              {
                title: "Clothing, gait, perfume…",
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
            type: "figure",
            src: "seerah-book.jpg",
            alt: "Illustration of an open book",
            title: "Study to know him ﷺ",
            caption: "Knowledge of his characteristics strengthens faith and love.",
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
            type: "figure",
            src: "seerah-book.jpg",
            alt: "Illustration of an open book",
            title: "What fair-minded writers recorded",
            caption: "Their words show how his character stands out when studied honestly.",
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
            type: "figure",
            src: "seerah-physique.jpg",
            alt: "Illustration representing physique study",
            title: "Khilqah — what is noticed first",
            caption: "Outward appearance points toward what is hidden inwardly.",
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
            type: "figure",
            src: "seerah-moon.jpg",
            alt: "Illustration of a glowing moon",
            title: "Brightness like the moon",
            caption: "Companions compared the light of his face to the moon — never a drawn likeness.",
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
            type: "figureRow",
            items: [
              {
                src: "seerah-comb.jpg",
                alt: "Illustration of a wooden comb",
                title: "Hair",
                caption: "Thick, wavy — not very curly, not very straight.",
              },
              {
                src: "seerah-oil.jpg",
                alt: "Illustration of a hair-oil vial",
                title: "Oil",
                caption: "When he applied oil, the few greys could not be seen.",
              },
            ],
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
            type: "figure",
            src: "seerah-comb.jpg",
            alt: "Illustration of a wooden comb",
            title: "Fringe, then parting",
            caption: "Both permissible — parting is better and became a marker of the Muslims.",
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
            type: "figureRow",
            items: [
              {
                src: "seerah-henna.jpg",
                alt: "Illustration of a bowl of green henna powder",
                title: "Henna & katam",
                caption: "The best way to change grey hair.",
              },
              {
                src: "seerah-saffron.jpg",
                alt: "Illustration of saffron threads",
                title: "Safflower & saffron",
                caption: "He ﷺ dyed his beard with these.",
              },
              {
                src: "seerah-black-dye.jpg",
                alt: "Illustration of black dye marked as prohibited",
                title: "Avoid pure black",
                caption: "«Change this grey hair, but avoid black.»",
              },
            ],
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
            type: "figure",
            src: "seerah-beard.jpg",
            alt: "Illustration of grooming scissors and a comb",
            title: "Trim the moustache, let the beard grow",
            caption: "His beard was thick and full — and this is his command.",
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
        id: "physique",
        title: "The physique of the Prophet ﷺ",
        icon: "9",
        sections: [
          {
            type: "heading",
            kicker: "Physical appearance",
            title: "The physique of the Prophet ﷺ",
          },
          {
            type: "figureRow",
            items: [
              {
                src: "seerah-physique.jpg",
                alt: "Illustration of a measuring stick and shoulder outline",
                title: "Average height",
                caption: "Neither tall nor short — well-built, of average build.",
              },
              {
                src: "seerah-shoulders.jpg",
                alt: "Illustration of broad shoulders silhouette",
                title: "Broad-shouldered",
                caption: "The top of his back was broad.",
              },
            ],
          },
          {
            type: "intro",
            text: "The Companions described his physique with clear, careful words — height, build, shoulders, hands and feet, and the line of hair on his chest.",
          },
          {
            type: "list",
            items: [
              {
                title: "Anas ibn Malik رضي الله عنه (at-Tirmidhi; sahih — al-Albani)",
                body: "Spoke concisely about the physique of the Prophet ﷺ. He said: The Messenger of Allah ﷺ was well-built.",
              },
              {
                title: "Al-Bara ibn Azib رضي الله عنه (al-Bukhari and Muslim)",
                body: "“I have never seen anything more handsome than him.”",
              },
              {
                title: "Ali ibn Abi Talib رضي الله عنه (at-Tirmidhi in ash-Shama’il)",
                body: "The Prophet ﷺ was neither tall nor short; his fingers and toes were thick; he had a large head and his joints were large; he had a line of hair that extended from his chest to his navel.",
              },
              {
                title: "Anas ibn Malik رضي الله عنه (Agreed upon; version by al-Bukhari)",
                body: "“He was of average height, neither tall nor short.”",
              },
              {
                title: "Al-Bara رضي الله عنه (Agreed upon)",
                body: "The Messenger of Allah ﷺ was a man of average height, and broad-shouldered. The phrase translated here as broad-shouldered means that the top of his back was broad.",
              },
              {
                title: "Abu’t-Tufayl رضي الله عنه (Muslim)",
                body: "Narrated from al-Jareeri: Abu’t-Tufayl — the last person to have seen the Prophet ﷺ — said: “There is no one left on the face of the earth who saw him except me.” He was asked to describe him, and he said: “He was fair-skinned, good-looking, of average build.”",
              },
            ],
          },
          {
            type: "glossary",
            title: "Key terms",
            items: [
              {
                term: "Of average build",
                body: "Neither fat nor thin, and neither tall nor short.",
              },
              {
                term: "Broad-shouldered",
                body: "The top of his back was broad.",
              },
              {
                term: "Abu’t-Tufayl",
                body: "Aamir ibn Wathilah al-Laythi — the last of the Sahabah to die. Born in the year of Hijrah; died in 110 AH.",
              },
            ],
          },
          {
            type: "note",
            tone: "benefit",
            title: "Hold this portrait of the physique",
            body: "Well-built · average height (neither tall nor short) · broad-shouldered · large head · large joints · thick fingers and toes · line of hair from chest to navel · fair-skinned and good-looking.",
          },
        ],
      },
      {
        id: "skin-colour",
        title: "The colour of the Prophet’s skin",
        icon: "10",
        sections: [
          {
            type: "heading",
            kicker: "Physical appearance",
            title: "Outward and inward beauty — then his skin colour",
          },
          {
            type: "figureRow",
            items: [
              {
                src: "seerah-scriptures.jpg",
                alt: "Illustration of scripture scrolls",
                title: "Torah & Gospel",
                caption: "A monk recognised his description and embraced Islam.",
              },
              {
                src: "seerah-skin.jpg",
                alt: "Illustration of fair reddish skin tone swatches",
                title: "Skin colour",
                caption: "Fair with a reddish tint — neither extremely fair nor very dark.",
              },
            ],
          },
          {
            type: "note",
            tone: "benefit",
            title: "Ibn al-Qayyim رحمه الله",
            body: "Allah عز وجل perfected the Prophet’s beautiful qualities, both outward and inward. He ﷺ was the best of Allah’s creation in both physical appearance and attitude, the most beautiful in outward appearance and character.",
          },
          {
            type: "list",
            items: [
              {
                title: "A Sahabi and a monk",
                body: "It was narrated that one of the Sahabah met a monk, who said: “Describe Muhammad to me as if I can see him, for I have seen his description in the Torah and the Gospel.” The Sahabi began to describe him: he was neither excessively tall nor short… and he mentioned some of his other characteristics. When the monk heard that, he became Muslim.",
              },
            ],
          },
          {
            type: "heading",
            title: "The colour of the Prophet’s skin",
          },
          {
            type: "definition",
            label: "Summary",
            body: "The Prophet ﷺ was fair, with a reddish tint that had a darkish tone.",
          },
          {
            type: "list",
            items: [
              {
                title: "Anas ibn Malik رضي الله عنه (al-Bukhari and Muslim)",
                body: "The Messenger of Allah ﷺ was neither extremely fair nor dark-skinned.",
              },
              {
                title: "Another report (al-Bukhari and Muslim)",
                body: "The Prophet ﷺ was white with a reddish tint; he was neither extremely fair nor very dark.",
              },
            ],
          },
        ],
      },
      {
        id: "seal-prophethood",
        title: "The seal of prophethood",
        icon: "11",
        sections: [
          {
            type: "heading",
            kicker: "Physical appearance",
            title: "The seal of prophethood",
          },
          {
            type: "figureRow",
            items: [
              {
                src: "seerah-seal-chest.jpg",
                alt: "Illustration of a golden treasure chest",
                title: "A sign of prophethood",
                caption: "One of the clear signs on his blessed body ﷺ.",
              },
              {
                src: "seerah-pigeon-egg.jpg",
                alt: "Illustration of a pigeon egg",
                title: "Size",
                caption: "Like a pigeon’s egg — same colour as his body.",
              },
              {
                src: "seerah-date-palms.jpg",
                alt: "Illustration of date palms",
                title: "Between two lava fields",
                caption: "The land of date palms where he would migrate.",
              },
              {
                src: "seerah-gift.jpg",
                alt: "Illustration of a gift accepted and charity refused",
                title: "Gifts, not charity",
                caption: "He would accept gifts but not charity.",
              },
            ],
          },
          {
            type: "intro",
            text: "The seal of prophethood was one of the signs of prophethood — a physical mark that those who sought the final Prophet were told to look for.",
          },
          {
            type: "list",
            items: [
              {
                title: "Salman al-Farisi رضي الله عنه and a monk (Ahmad; hasan — al-Albani)",
                body: "A monk told Salman al-Farisi of signs: a prophet appearing in the land of the Arabs; migrating to a land with date palms between two lava fields; accepting gifts but not charity; and having the seal of prophethood between his shoulders.",
              },
              {
                title: "Baheera the monk (at-Tirmidhi)",
                body: "Baheera recognised the Prophet ﷺ because trees and rocks prostrated to him. He described the seal as being lower than his shoulder blades, like an apple.",
              },
              {
                title: "Jabir ibn Samurah رضي الله عنه (at-Tirmidhi)",
                body: "Described the seal as a red lump of flesh like a pigeon’s egg, between the shoulders.",
              },
              {
                title: "Report in Muslim",
                body: "At his shoulder, like a pigeon’s egg, the same colour as his body.",
              },
            ],
          },
          {
            type: "note",
            tone: "info",
            title: "Al-Qurtubi",
            body: "The proven hadiths agree that the seal of prophethood was a prominent feature next to his left shoulder. It was the size of a pigeon’s egg. There is no proof that written on the seal was the name of Allah, or “Muhammad”, or any other words.",
          },
          {
            type: "note",
            tone: "benefit",
            title: "What to remember",
            body: "Location: between / next to the shoulders (left shoulder — al-Qurtubi). Appearance: red lump of flesh / same colour as his body; size of a pigeon’s egg (or like an apple in Baheera’s description). It was a definitive sign of his prophethood — not an inscription.",
          },
        ],
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
        icon: "12",
        sections: [
          {
            type: "heading",
            kicker: "Manners & appearance",
            title: "The clothing of the Prophet ﷺ",
          },
          {
            type: "figureRow",
            items: [
              {
                src: "seerah-clothing.jpg",
                alt: "Illustration of folded garments",
                title: "Chemise (qamees)",
                caption: "The garment that the Prophet ﷺ liked best.",
              },
              {
                src: "seerah-white-garment.jpg",
                alt: "Illustration of white garments",
                title: "White garments",
                caption: "The clothes he wore most often.",
              },
              {
                src: "seerah-hullah.jpg",
                alt: "Illustration of a hullah",
                title: "Hullah",
                caption: "A two-piece garment: izar and rida.",
              },
              {
                src: "seerah-hibarah.jpg",
                alt: "Illustration of a hibarah cloak",
                title: "Hibarah / qitri",
                caption: "Yemeni cotton garments he ﷺ wore.",
              },
              {
                src: "seerah-new-garment.jpg",
                alt: "Illustration of a new garment",
                title: "New garment",
                caption: "What is the Sunnah when putting on a new garment?",
              },
            ],
          },
          {
            type: "list",
            items: [
              {
                title: "Umm Salamah رضي الله عنها (Abu Dawud, at-Tirmidhi and an-Nasai; sahih — al-Albani)",
                body: "It was narrated that Umm Salamah (may Allah be pleased with her) said: The garment that the Prophet ﷺ liked best was the chemise (qamees).",
              },
              {
                title: "Shaykh Ibn Uthaymeen رحمه الله",
                body: "At the time of the Messenger of Allah ﷺ, they used to wear the rida (upper garment) and izar (lower garment) sometimes, and sometimes they would wear the chemise. The Prophet ﷺ liked the chemise, because it was more covering, and because it was a single piece of clothing that a person could put on in one go. Therefore it was easier than putting on the izar first, and then the rida.",
              },
              {
                title: "Muawiyah ibn Qurrah from his father (Ahmad and Abu Dawud; sahih — al-Albani)",
                body: "It was narrated from Muawiyah ibn Qurrah that his father said: I came to the Messenger of Allah ﷺ with a group from Muzaynah, to swear allegiance to him. His chemise was not buttoned up – meaning that the buttons were undone.",
              },
              {
                title: "Anas ibn Malik رضي الله عنه (Ahmad; sahih — al-Arna’ut)",
                body: "It was narrated from Anas ibn Malik (may Allah be pleased with him) that the Prophet ﷺ came out, leaning on Usamah ibn Zayd (may Allah be pleased with him), wearing a qitri garment that he had wrapped around himself, and he led them in prayer.",
              },
              {
                title: "Qitri garment",
                body: "A qitiri garment is a type of Yemeni garment made of cotton, of a reddish colour and striped; its fabric is a little rough.",
              },
              {
                title: "Anas ibn Malik رضي الله عنه (Agreed upon)",
                body: "It was narrated that Anas ibn Malik (may Allah be pleased with him) said: The garment that the Messenger of Allah ﷺ liked best was the hibarah – a Yemeni cloak.",
              },
              {
                title: "Ibn Battal",
                body: "It is a type of Yemeni cloak, made of cotton. It was regarded by them as the noblest and best of garments.",
              },
            ],
          },
          {
            type: "heading",
            title: "What is the Sunnah when putting on a new garment?",
          },
          {
            type: "note",
            tone: "benefit",
            title: "Abu Saeed al-Khudri رضي الله عنه (at-Tirmidhi and Abu Dawud; sahih — al-Albani)",
            body: "It was narrated that Abu Saeed al-Khudri (may Allah be pleased with him) said: When the Messenger of Allah ﷺ put on a new garment, he would mention it by name – whether it was a turban, a chemise or an upper garment – then he would say: «Allahumma laka’l-hamdu kama kasawtanihi, as’aluka khayrahu wa khayra ma suni’a lahu wa a’oodhu bika min sharrihi wa sharri ma suni’a lah (O Allah, to You be all praise for You have clothed me with it. I ask You for the good of it and the good for which it was made, and I seek refuge with You from the evil of it and the evil for which it was made).»",
          },
          {
            type: "heading",
            title: "White garments",
          },
          {
            type: "list",
            items: [
              {
                title: "Ibn Abbas رضي الله عنهما (at-Tirmidhi and Abu Dawud; sahih — al-Albani)",
                body: "The clothes that the Messenger of Allah ﷺ wore most often were white, as mentioned in a hadith of Ibn Abbas (may Allah be pleased with him), who said: The Messenger of Allah ﷺ said: «You should wear white garments; let your living wear them, and shroud your dead in them, for they are among the best of your garments.»",
              },
            ],
          },
          {
            type: "heading",
            title: "How the Prophet ﷺ dressed",
          },
          {
            type: "intro",
            text: "His garments came to mid-calf, and his sleeves came to his wrists.",
          },
          {
            type: "list",
            items: [
              {
                title: "Sahih Muslim — Abu Juhayfah",
                body: "In Sahih Muslim, it is narrated that the Prophet ﷺ came out wearing a red hullah (suit). Abu Juhayfah said: It is as if I can see the whiteness of his shins.",
              },
              {
                title: "Asma bint Yazid ibn as-Sakan رضي الله عنها (at-Tirmidhi; hasan)",
                body: "It was narrated by at-Tirmidhi, who classed the report as hasan, that Asma bint Yazid ibn as-Sakan said: The sleeves of the Messenger of Allah ﷺ came to the wrist.",
              },
            ],
          },
          {
            type: "note",
            tone: "info",
            title: "What these hadiths indicate",
            body: "These hadiths indicate that the Prophet ﷺ was very modest in his dress. He liked the chemise, but he would wear other garments too, such as the izar (lower garment). He would wrap a garment over his shoulders sometimes, or wrap a garment around his waist. He did not refrain from wearing good quality clothes, and he liked white garments with stripes of red or another colour.",
          },
          {
            type: "heading",
            title: "Wearing red, and the ruling thereon",
          },
          {
            type: "list",
            items: [
              {
                title: "Awn ibn Abi Juhayfah from his father رضي الله عنه (Agreed upon)",
                body: "It was narrated from Awn ibn Abi Juhayfah that his father (may Allah be pleased with him) said: I saw the Prophet ﷺ wearing a red hullah (suit), and it is as if I can see the whiteness of his shins. Sufyan said: I think it was striped.",
              },
              {
                title: "What is a hullah?",
                body: "The scholars of Arabic language said: The hullah is a two-piece garment; it cannot be one piece. It consists of an izar (lower garment) and a rida (upper garment), and the like.",
              },
              {
                title: "Sufyan — striped, not solid red",
                body: "Sufyan said: I think it was striped – in other words, it was not solid red; rather it was striped, meaning that it had red stripes. This is most likely to be correct.",
              },
            ],
          },
          {
            type: "note",
            tone: "warning",
            title: "Shaykh Ibn Uthaymeen رحمه الله",
            body: "The Prophet ﷺ forbade wearing red if it is solid red. But if it is red with some whiteness, then there is nothing wrong with it. End quote.",
          },
        ],
      },
      {
        id: "footwear",
        title: "Khuffs, sandals & the Sunnah of shoes",
        icon: "13",
        sections: [
          {
            type: "heading",
            kicker: "Clothing · Footwear",
            title: "The Prophet’s khuffs (footwear that covers the ankles)",
          },
          {
            type: "figureRow",
            items: [
              {
                src: "seerah-khuffs.jpg",
                alt: "Illustration of leather khuffs",
                title: "Khuffs",
                caption: "Footwear that covers the ankles.",
              },
              {
                src: "seerah-sandals-pair.jpg",
                alt: "Illustration of sandals with two straps",
                title: "Sandals",
                caption: "They had two straps.",
              },
              {
                src: "seerah-seal-chest.jpg",
                alt: "Illustration of a treasure chest",
                title: "Abdullah ibn Mas‘ud",
                caption: "He looked after the Prophet’s sandals.",
              },
            ],
          },
          {
            type: "list",
            items: [
              {
                title: "Al-Mugheerah ibn Shu‘bah رضي الله عنه (at-Tirmidhi; sahih — al-Albani)",
                body: "Al-Mugheerah ibn Shu‘bah (may Allah be pleased with him) said: Dihyah al-Kalbi gave the Messenger of Allah ﷺ a pair of khuffs as a gift, and he put them on.",
              },
            ],
          },
          {
            type: "heading",
            title: "The Prophet’s sandals",
          },
          {
            type: "list",
            items: [
              {
                title: "Qatadah from Anas رضي الله عنه (al-Bukhari)",
                body: "It was narrated that Qatadah said: I said to Anas ibn Malik (may Allah be pleased with him): What were the sandals of the Messenger of Allah ﷺ like? He said: They had two straps. The word translated here as strap refers to a strap that goes between the two toes.",
              },
              {
                title: "Ubayd ibn Jurayj and Ibn Umar رضي الله عنهما (as-Sahihayn)",
                body: "In as-Sahihayn it is narrated from Ubayd ibn Jurayj that he said to Ibn Umar (may Allah be pleased with him): I saw you wearing sibti sandals! He said: I saw the Messenger of Allah ﷺ wearing sandals on which there was no hair, and doing wudu in them, and I like to wear them.",
              },
              {
                title: "Sibti",
                body: "Sibti refers to that on which there is no hair. It comes from the word sibt, which refers to the tanned hide of cattle.",
              },
              {
                title: "Amr ibn Hurayth رضي الله عنه (an-Nasai and Ahmad; sahih — al-Albani)",
                body: "It was narrated that Amr ibn Hurayth (may Allah be pleased with him) said: I saw the Messenger of Allah ﷺ praying in stitched sandals.",
              },
            ],
          },
          {
            type: "note",
            tone: "benefit",
            title: "His humility ﷺ",
            body: "This is indicative of the humility of the Prophet ﷺ. His humility was as Aisha (may Allah be pleased with her) described it: he would mend his sandals and his clothes, and do tasks around the house as one of you does. Narrated by Ahmad and al-Bukhari in al-Adab al-Mufrad; classed as sahih by al-Albani.",
          },
          {
            type: "heading",
            title: "Walking in one sandal",
          },
          {
            type: "list",
            items: [
              {
                title: "Abu Hurayrah رضي الله عنه (al-Bukhari and Muslim)",
                body: "It was narrated from Abu Hurayrah (may Allah be pleased with him) that the Messenger of Allah ﷺ said: «No one of you should walk in one sandal; let him put them both on or take them both off.»",
              },
              {
                title: "Jabir رضي الله عنه (Muslim)",
                body: "It was narrated from Jabir that the Prophet ﷺ forbade a man to eat with his left hand or to walk wearing one sandal.",
              },
            ],
          },
          {
            type: "heading",
            title: "The Sunnah when putting on sandals is to start on the right",
          },
          {
            type: "list",
            items: [
              {
                title: "Abu Hurayrah رضي الله عنه (al-Bukhari and Muslim; this version by al-Bukhari)",
                body: "It was narrated from Abu Hurayrah (may Allah be pleased with him) that the Prophet ﷺ said: «When one of you puts on his sandals, let him start on the right, and when he takes them off, let him start on the left, so that the right foot will be the first to be shod and the last to be unshod.»",
              },
            ],
          },
          {
            type: "heading",
            title: "It is Sunnah to pray wearing sandals in an uncarpeted space",
          },
          {
            type: "list",
            items: [
              {
                title: "Anas ibn Malik رضي الله عنه (as-Sahihayn)",
                body: "In as-Sahihayn, it is narrated that Anas ibn Malik (may Allah be pleased with him) was asked: Did the Prophet ﷺ pray in his sandals? He said: Yes.",
              },
              {
                title: "Shaddad ibn Aws رضي الله عنه (Abu Dawud; sahih — al-Albani)",
                body: "In Sunan Abi Dawud it is narrated from Shaddad ibn Aws (may Allah be pleased with him) that the Prophet ﷺ said: «Be different from the Jews, for they do not pray wearing their shoes or their khuffs.»",
              },
            ],
          },
          {
            type: "note",
            tone: "info",
            title: "Abdullah ibn Mas‘ud رضي الله عنه",
            body: "The biographers narrated that Abdullah ibn Mas‘ud (may Allah be pleased with him) was the one who took care of the Prophet’s sandals. When the Prophet ﷺ stood up, he would put them on him, and when he sat down, he would hold them in his arms. Abu’l-Abbas al-Maqqari said: It is proven that Abdullah ibn Mas‘ud (may Allah be pleased with him) was the one who looked after the Prophet’s sandals, siwak, pillow and wudu water, as is mentioned in as-Sahih.",
          },
        ],
      },
      {
        id: "ring",
        title: "The Prophet’s ring",
        icon: "14",
        sections: [
          {
            type: "heading",
            kicker: "Clothing · Accessories",
            title: "The Prophet’s ring",
          },
          {
            type: "figureRow",
            items: [
              {
                src: "seerah-ring.jpg",
                alt: "Illustration of a silver ring",
                title: "Silver ring",
                caption: "Its stone was Ethiopian.",
              },
              {
                src: "seerah-seal-ring.jpg",
                alt: "Illustration of a seal",
                title: "Engraving",
                caption: "Muhammad · Rasool · Allah",
              },
            ],
          },
          {
            type: "list",
            items: [
              {
                title: "Anas ibn Malik رضي الله عنه (Muslim)",
                body: "It was narrated that Anas ibn Malik (may Allah be pleased with him) said: The ring of the Prophet ﷺ was silver, and its stone was Ethiopian.",
              },
              {
                title: "An-Nawawi",
                body: "An-Nawawi said: The Muslims are unanimously agreed that it is permissible for men to wear silver. Some of the earlier scholars of Syria regarded it as disliked (makruh) for anyone who is not in a position of authority, and they narrated a report concerning that, but this is an odd view and is to be rejected.",
              },
              {
                title: "Al-Baji رحمه الله",
                body: "Al-Baji (may Allah have mercy on him) said: With regard to wearing a ring of silver, this is what Saeed ibn al-Musayab said concerning that to Sadaqah ibn Yasar: Wear it, and tell the people that I gave you a fatwa allowing you to do that.",
              },
              {
                title: "Anas ibn Malik رضي الله عنه (Agreed upon)",
                body: "It was narrated that Anas ibn Malik (may Allah be pleased with him) said: When the Messenger of Allah ﷺ wanted to write to the non-Arabs, he was told that the non-Arabs do not accept any letter except one that had a seal. So he had a ring made, and it is as if I can see it shining on his hand.",
              },
            ],
          },
          {
            type: "heading",
            title: "The engraving on the Prophet’s ring",
          },
          {
            type: "list",
            items: [
              {
                title: "Anas ibn Malik رضي الله عنه (al-Bukhari)",
                body: "It was narrated that Anas ibn Malik (may Allah be pleased with him) said: The engraving on the ring of the Messenger of Allah ﷺ said: Muhammad on one line, Rasool on one line, and Allah on one line.",
              },
              {
                title: "Ibn Umar رضي الله عنهما (Agreed upon)",
                body: "It was narrated that Ibn Umar (may Allah be pleased with him) said: The Messenger of Allah ﷺ acquired a ring made of silver and wore it on his hand. Then it was worn by Abu Bakr, then by Umar, then by Uthman, until it fell into the well of Aris later on. Its engraving said: Muhammad Rasoolallah (Muhammad the Messenger of Allah).",
              },
              {
                title: "Ali ibn Abi Talib رضي الله عنه (an-Nasai and Ibn Majah; sahih — al-Albani)",
                body: "It was narrated from Ali ibn Abi Talib (may Allah be pleased with him) that the Prophet ﷺ used to wear his ring on his right hand.",
              },
            ],
          },
          {
            type: "qa",
            question: "What is the ruling on wearing a silver ring, for men?",
            answer:
              "The correct view is that it is permissible, but it is not Sunnah. The evidence for that is the fact that the Prophet ﷺ did not wear a ring until he was told that kings would not accept any letter unless it was sealed, so he acquired the ring, as it was narrated in as-Sahihayn from Anas (may Allah be pleased with him) that the Prophet ﷺ wanted to write to Chosroes (Kisra), Caesar and the Negus. It was said to him: They do not accept any letter unless it has a seal. So the Messenger of Allah ﷺ acquired a ring of which the flat part was made of silver, on which were engraved the words: “Muhammad Rasoolallah.” The Prophet ﷺ did not intend the wearing of it as an act of worship to draw closer to Allah, such that it might be said that it is an act which is encouraged (mustahabb). Therefore the correct view is that it is permissible.",
          },
        ],
      },
      {
        id: "turban",
        title: "The Prophet’s turban",
        icon: "15",
        sections: [
          {
            type: "heading",
            kicker: "Clothing",
            title: "The Prophet’s turban",
          },
          {
            type: "figure",
            src: "seerah-turban.jpg",
            alt: "Illustration of a black turban",
            title: "Black turban",
            caption: "He entered Makkah on the day of the conquest wearing a black turban.",
          },
          {
            type: "list",
            items: [
              {
                title: "Jabir رضي الله عنه (Muslim)",
                body: "It was narrated that Jabir (may Allah be pleased with him) said: The Prophet ﷺ entered Makkah on the day of the conquest wearing a black turban.",
              },
              {
                title: "Ja‘far ibn Amr ibn Hurayth from his father (Muslim)",
                body: "It was narrated from Ja’far ibn Amr ibn Hurayth, from his father, that the Prophet ﷺ addressed the people, wearing a black turban.",
              },
              {
                title: "An-Nawawi رحمه الله",
                body: "An-Nawawi (may Allah have mercy on him) said: This indicates that it is permissible to wear black clothes, and to wear them when delivering the khutbah, even though white garments are better, as is proven in the sahih hadith: «The best of your garments are those which are white.» Narrated by Abu Dawud and at-Tirmidhi; classed as sahih by al-Albani. End quote.",
              },
              {
                title: "Ibn Umar رضي الله عنهما (hasan — al-Albani)",
                body: "It was narrated that Ibn Umar (may Allah be pleased with him) said: When the Prophet ﷺ wore a turban, he let the end of it hang down between his shoulders.",
              },
            ],
          },
          {
            type: "glossary",
            title: "Term",
            items: [
              {
                term: "Dhu’abah / ‘adhbah",
                body: "The end of the turban which is left hanging down is known as dhu’abah or ‘adhbah.",
              },
            ],
          },
          {
            type: "note",
            tone: "warning",
            title: "Not Sunnah as an act of worship",
            body: "It is not Sunnah to wear a turban; rather that was the habit and practice of the Prophet ﷺ, and it was not Sunnah in the sense of being an act of worship. The Prophet ﷺ did not wear a turban as an act of worship, and he did not enjoin his ummah to do that.",
          },
        ],
      },
      {
        id: "izar-isbal",
        title: "Izar and the ruling on isbal",
        icon: "16",
        sections: [
          {
            type: "heading",
            kicker: "Clothing",
            title: "The Prophet’s izar (lower garment)",
          },
          {
            type: "figure",
            src: "seerah-izar.jpg",
            alt: "Illustration of a striped izar",
            title: "Izar",
            caption: "His izar came to mid-calf.",
          },
          {
            type: "list",
            items: [
              {
                title: "Ubayd ibn Khalid al-Muharibi رضي الله عنه (an-Nasai; sahih — al-Albani)",
                body: "It was narrated that Ubayd ibn Khalid al-Muharibi (may Allah be pleased with him) said: Whilst I was walking in Madinah, I heard someone behind me saying: «Pull up your izar, for that is more pious and makes it last longer.» Then I saw that it was the Messenger of Allah ﷺ. I said: O Messenger of Allah, it is no more than a striped malha cloak. He said: «Do you not have an example in me?» I looked, and I saw that his izar came to mid-calf.",
              },
              {
                title: "«for that is more pious»",
                body: "«for that is more pious» means: pulling up the izar so that it will not touch the ground, and will not be regarded as isbal, which is prohibited. This is more pious and more fearing of Allah (Glorified and Exalted be He).",
              },
              {
                title: "“a striped malha cloak”",
                body: "“a striped malha cloak” means: it had black-and-white stripes. This was the clothing of the Bedouin, and was not a high-quality garment.",
              },
              {
                title: "Hudhayfah ibn al-Yaman رضي الله عنه (at-Tirmidhi; sahih)",
                body: "It was narrated that Hudhayfah ibn al-Yaman (may Allah be pleased with him) said: The Messenger of Allah ﷺ took hold of the muscle of my calf, or his calf, and said: «This is how far the izar should reach, and if you insist, it may go lower, but if you insist, you should realize that it is not right for the izar to reach the ankles.»",
              },
            ],
          },
          {
            type: "heading",
            title: "Ruling on isbal (letting a garment come lower than the ankles)",
          },
          {
            type: "definition",
            label: "Isbal",
            body: "Isbal (letting a garment come lower than the ankles) is haram.",
          },
          {
            type: "list",
            items: [
              {
                title: "Abu Dharr رضي الله عنه (Muslim)",
                body: "Muslim narrated from Abu Dharr that the Messenger of Allah ﷺ said: «There are three to whom Allah will not speak, or look at them or praise them, on the Day of Resurrection and theirs will be a painful punishment.» When asked who they are, he replied: «The one who lets his garment come lower than his ankles, the one who reminds others of his favours, and the one who sells his product by means of making false oaths.»",
              },
              {
                title: "Abu Hurayrah رضي الله عنه (al-Bukhari)",
                body: "Al-Bukhari narrated from Abu Hurayrah that the Messenger of Allah ﷺ said: «Whatever of the izar is below the ankles will be in the Fire.»",
              },
              {
                title: "Abu Saeed al-Khudri رضي الله عنه (Abu Dawud; sahih — al-Albani)",
                body: "Abu Saeed al-Khudri narrated that the Messenger of Allah ﷺ said: «The Muslim’s izar should come to mid-calf, and there is nothing wrong with the area between that and the ankles, but anything lower than the ankles will be in the Fire.»",
              },
            ],
          },
          {
            type: "glossary",
            title: "The ankles",
            items: [
              {
                term: "The ankles",
                body: "The ankles are the bones that protrude on both sides of the leg.",
              },
            ],
          },
          {
            type: "note",
            tone: "warning",
            title: "Showing off or not",
            body: "All kinds of isbal are prohibited, but it is more emphatic if that is done for the purpose of showing off, in which case punishment is increased. Even without showing off, it still incurs punishment. Ibn al-Arabi stated it is not permissible for a man to let a garment go past the ankle, regardless of whether he intends to show off or not, because the wording of the prohibition is explicit.",
          },
        ],
      },
      {
        id: "walking-sitting",
        title: "His manner of walking and sitting",
        icon: "17",
        sections: [
          {
            type: "heading",
            kicker: "Manners",
            title: "The Prophet’s manner of walking",
          },
          {
            type: "figure",
            src: "seerah-walking.jpg",
            alt: "Illustration of footprints on a path",
            title: "Manner of walking",
            caption: "As if walking downhill — with energy and speed.",
          },
          {
            type: "list",
            items: [
              {
                title: "Anas رضي الله عنه (at-Tirmidhi; sahih — al-Albani)",
                body: "It was narrated that Anas (may Allah be pleased with him) said: The Messenger of Allah ﷺ was of average height, neither tall nor short… When he walked, he would lean forward.",
              },
              {
                title: "Ibn Abbas رضي الله عنهما (Ahmad; sahih — al-Arna’ut)",
                body: "It was narrated from Ibn Abbas (may Allah be pleased with him) that when the Messenger of Allah ﷺ walked, he walked with energy and speed, with no sign of laziness.",
              },
              {
                title: "Ali رضي الله عنه (Ahmad; sahih — al-Arna’ut)",
                body: "It was narrated by Ahmad that Ali (may Allah be pleased with him) said: When the Messenger of Allah ﷺ walked, it was as if he were walking downhill.",
              },
              {
                title: "What is meant",
                body: "What is meant is that it was as if he was walking down a slope, which is indicative of how fast he walked.",
              },
              {
                title: "Ibn al-Qayyim رحمه الله",
                body: "Ibn al-Qayyim (may Allah have mercy on him) said: There are ten types of gait (manner of walking), the best and most dignified of which is the manner in which the Messenger of Allah ﷺ walked. And he (may Allah have mercy on him) said: When he walked with his Companions, they would walk in front of him, and he would walk behind them. He used to say: «Leave my back for the angels...» And he used to walk both barefoot and in shoes. End quote.",
              },
            ],
          },
          {
            type: "heading",
            title: "The Prophet’s manner of sitting",
          },
          {
            type: "list",
            items: [
              {
                title: "Qaylah bint Makhramah رضي الله عنها (Abu Dawud; hasan — al-Albani)",
                body: "It was narrated from Qaylah bint Makhramah (may Allah be pleased with her) that she saw the Messenger of Allah ﷺ in the mosque, sitting in the manner called qurfasa.",
              },
              {
                title: "Qurfasa",
                body: "Qurfasa is the same as ihtiba; it means sitting on the buttocks, with the thighs drawn up to the stomach, and the arms wrapped around the shins.",
              },
              {
                title: "Abbad ibn Tamim from his paternal uncle (Agreed upon)",
                body: "It was narrated from Abbad ibn Tamim, from his paternal uncle, that he saw the Messenger of Allah ﷺ lying on his back in the mosque, placing one of his legs on top of the other.",
              },
              {
                title: "Jabir ibn Abdullah رضي الله عنه (Muslim)",
                body: "With regard to the report narrated by Muslim from Jabir ibn Abdullah, according to which the Prophet ﷺ said: «No one of you should lie on his back then put one leg on top of the other.»",
              },
            ],
          },
          {
            type: "note",
            tone: "info",
            title: "An-Nawawi رحمه الله",
            body: "An-Nawawi (may Allah have mercy on him) said: The scholars said: The hadiths which forbid lying on one’s back with one leg raised over the other may be interpreted as referring to cases in which the awrah, or any part of it, would become visible as a result of that. As for what the Prophet ﷺ did, it was done in such a manner that no part of the awrah appeared. There is nothing wrong with that, and it is not disliked (makruh) if it is done in this manner.",
          },
          {
            type: "heading",
            title: "How the Prophet ﷺ sat whilst eating",
          },
          {
            type: "list",
            items: [
              {
                title: "Anas ibn Malik رضي الله عنه (Muslim)",
                body: "With regard to how one should sit when wanting to eat, Muslim narrated in his Sahih that Anas ibn Malik (may Allah be pleased with him) said: I saw the Prophet ﷺ sitting in the manner called iqaa, eating dates.",
              },
              {
                title: "Shaykh Ibn Uthaymeen رحمه الله",
                body: "Iqaa refers to kneeling with the feet held upright, sitting on the heels. The Prophet ﷺ sat in this manner so that he would not settle into the seated posture and eat too much as a result, because usually when a person sits in this manner, he will not become comfortable, so he will not eat a great deal; if a person becomes too comfortable, he will eat too much; this is what usually happens.",
              },
              {
                title: "Al-Hafiz رحمه الله",
                body: "Al-Hafiz (may Allah have mercy on him) said: What is recommended when sitting to eat is to kneel on the ground, with the tops of the feet resting flat on the ground, or to kneel resting on the left leg, with the right leg held upright.",
              },
              {
                title: "Abu Juhayfah رضي الله عنه (al-Bukhari)",
                body: "It was narrated that Abu Juhayfah (may Allah be pleased with him) said: The Prophet ﷺ said: «I do not eat reclining.»",
              },
              {
                title: "Reclining",
                body: "The word translated here as reclining refers to when a person sits with a cushion underneath him, and is comfortable and firm in his sitting. It was also said that it refers to leaning on one’s side.",
              },
              {
                title: "An-Nawawi",
                body: "An-Nawawi said: What is meant is: I do not eat in the manner of one who wishes to eat a great deal of food, and sits down comfortably for his meal; rather I sit like one who wants to get up soon, and I eat only a little.",
              },
            ],
          },
          {
            type: "heading",
            title: "The Prophet’s sitting in the manner that is called ittika",
          },
          {
            type: "intro",
            text: "In Arabic, the word ittika has two meanings:",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "Sitting whilst leaning and resting on one side. This is the well-known view. Ibn al-Atheer said: The common folk only know this word as referring to one who leans whilst sitting, resting on one of his two sides.",
              "Sitting comfortably. Examples of this meaning are seen in the verses: {and couches to rest upon (yattaki’oona)} [az-Zukhruf 43:34]; and {and prepared for them a cushioned couch (muttaka’an)} [Yusuf 12:31] – the related words in these verses refer to places in which to sit.",
            ],
          },
          {
            type: "list",
            items: [
              {
                title: "Jabir ibn Samurah رضي الله عنه (Abu Dawud and at-Tirmidhi; sahih — al-Albani)",
                body: "It was narrated that Jabir ibn Samurah (may Allah be pleased with him) said: I saw the Prophet ﷺ leaning on a pillow on his left side.",
              },
              {
                title: "Abd ar-Rahman ibn Abi Bakrah from his father (Agreed upon)",
                body: "It was narrated from Abd ar-Rahman ibn Abi Bakrah, that his father said: The Messenger of Allah ﷺ said: «Shall I not tell you of the gravest of major sins?» They said: Yes, O Messenger of Allah. He said: «Associating others with Allah, and defiant disobedience of parents.» Then the Messenger of Allah ﷺ sat up, as he had been reclining, and said: «And bearing false witness – or false speech.» And the Messenger of Allah ﷺ kept repeating it until we thought: Would that he would stop (out of compassion towards him).",
              },
              {
                title: "Reminder",
                body: "We have quoted above the hadith of Abu Juhayfah (may Allah be pleased with him), according to which the Prophet ﷺ said: «I do not eat reclining.»",
              },
              {
                title: "Abdullah ibn Bisr رضي الله عنه (Abu Dawud and Ibn Majah; sahih — al-Albani)",
                body: "It was narrated that Abdullah ibn Bisr said: I gave the Prophet ﷺ a [roast] sheep, and the Messenger of Allah ﷺ knelt on his knees and ate. A Bedouin said: What is this manner of sitting? He said: «Allah has made me a noble slave; He has not made me a stubborn tyrant.»",
              },
            ],
          },
        ],
      },
      {
        id: "sweat-perfume",
        title: "His sweat and perfume",
        icon: "18",
        sections: [
          {
            type: "heading",
            kicker: "Manners",
            title: "The sweat of the Prophet ﷺ",
          },
          {
            type: "figureRow",
            items: [
              {
                src: "seerah-perfume.jpg",
                alt: "Illustration of a perfume bottle",
                title: "Fragrance",
                caption: "His sweat was more fragrant than musk.",
              },
              {
                src: "seerah-musk.jpg",
                alt: "Illustration of musk perfume",
                title: "Perfume",
                caption: "Of worldly pleasures, women and perfume have been made dear to me.",
              },
            ],
          },
          {
            type: "list",
            items: [
              {
                title: "Anas رضي الله عنه (al-Bukhari and Muslim)",
                body: "Al-Bukhari and Muslim narrated that Anas (may Allah be pleased with him) said: I have never touched any silk or brocade that was softer than the hand of the Prophet ﷺ, and I have never smelled any fragrance or sweat that was better than the fragrance or sweat of the Prophet ﷺ.",
              },
              {
                title: "Abu Juhayfah رضي الله عنه (al-Bukhari)",
                body: "Al-Bukhari narrated that Abu Juhayfah (may Allah be pleased with him) said: The Messenger of Allah ﷺ went out to al-Bat-ha at midday and did wudu, then he prayed Zuhr with two rakahs and Asr with two rakahs, with a stick in front of him and people passing beyond it. The people began to take hold of his hands and wipe their faces with them. I took hold of his hand and laid it against my face, and found it to be cooler than snow, and more fragrant than musk.",
              },
              {
                title: "Jabir ibn Samurah رضي الله عنه (Muslim)",
                body: "Muslim narrated that Jabir ibn Samurah (may Allah be pleased with him) said: I prayed with the Messenger of Allah ﷺ, then he went out to his family, and I went out with him. He was met by some boys, and he began to pat their cheeks, one by one. As for me, he patted my cheek, and I found his hand to be cool or fragrant, as if he had brought it out from the vessel of a perfume seller.",
              },
              {
                title: "The vessel of a perfume seller",
                body: "The phrase translated here as the vessel of a perfume seller refers to the container in which the perfume seller prepares his perfume.",
              },
              {
                title: "Anas رضي الله عنه (Muslim)",
                body: "Muslim narrated that Anas said: The Messenger of Allah ﷺ was white with a reddish tint, as if his sweat was pearls… I have never smelled any musk or amber that was better than the fragrance of the Messenger of Allah ﷺ.",
              },
              {
                title: "Jabir ibn Abdullah رضي الله عنه (ad-Darimi)",
                body: "In fact, people could tell that the Prophet ﷺ was approaching by his fragrance which could be smelled from afar. Ad-Darimi narrated from Jabir ibn Abdillah (may Allah be pleased with him) that the Prophet ﷺ would not walk on any path and be followed by someone, but that person would know that he had passed that way because of the fragrance of his sweat.",
              },
              {
                title: "Anas ibn Malik رضي الله عنه — Umm Sulaym (Muslim)",
                body: "They used to collect his sweat and use it as a perfume. Muslim narrated that Anas ibn Malik (may Allah be pleased with him) said: The Prophet ﷺ came to visit us and took a siesta in our house. My mother came with a bottle, and started to collect his sweat in it. The Prophet ﷺ woke up and said: «O Umm Sulaym, what are you doing?» She said: [Collecting] your sweat; we put it in our perfume, for it is the most fragrant of perfumes.",
              },
            ],
          },
          {
            type: "heading",
            title: "The perfume of the Prophet ﷺ",
          },
          {
            type: "list",
            items: [
              {
                title: "Ahmad and Abu Dawud; sahih — al-Albani",
                body: "The Prophet ﷺ loved perfume so much that he said: «Of worldly pleasures, women and perfume have been made dear to me, and my delight is in prayer.»",
              },
              {
                title: "Anas ibn Malik رضي الله عنه",
                body: "Having a pleasant fragrance was one of his characteristics, even if he had not put on perfume. It was narrated that Anas ibn Malik (may Allah be pleased with him) said: I have never touched any silk or brocade that was softer than the hand of the Prophet ﷺ, and I have never smelled any fragrance or sweat that was better than the fragrance or sweat of the Prophet ﷺ.",
              },
              {
                title: "Anas — streets of Madinah (Abu Ya‘la and al-Bazzar; sahih isnad — Ibn Hajar)",
                body: "He could be recognized by his fragrant smell as he came and went. Abu Ya‘la and al-Bazzar narrated – and the isnad was classed as sahih by Ibn Hajar – that Anas said: If the Messenger of Allah ﷺ passed through one of the streets of Madinah, the fragrance of musk could be detected from him, and people would say: The Messenger of Allah ﷺ has passed by. Hence he disliked any unpleasant smell to be noticed from him, to the extent that he would refrain from eating many permissible things, such as garlic, onions, leeks and similar foods that have unpleasant smells.",
              },
            ],
          },
          {
            type: "note",
            tone: "benefit",
            title: "Not pride",
            body: "The fact that he wore perfume and loved it indicates that wearing perfume does not come under the heading of pride; rather it may be recommended, such as when beautifying oneself for prayer, praying in congregation, and so on. It is good for a woman to wear perfume for her husband, and for a husband to wear perfume for his wife. It is also good for scholars to wear perfume, so that people will develop respect for knowledge, and for other people.",
          },
          {
            type: "note",
            tone: "info",
            title: "Situations in which it is more important to wear perfume",
            body: "It is more important for men to wear perfume on occasions such as Friday, Eid, when entering ihram, when attending prayers in congregation, reading Quran, seeking knowledge and remembering Allah (dhikr). It is more important for both men and women when engaging in marital relations, because it comes under the heading of showing kindness to one another.",
          },
          {
            type: "note",
            tone: "warning",
            title: "Women going out with perfume",
            body: "It is not permissible for a woman to go out wearing perfume in the streets or among men. A stern warning has been narrated concerning that, as the Prophet ﷺ said: «Any woman who puts on perfume and passes by people so that they may smell her fragrance, is a zaniyah (adultress).» Narrated by an-Nasai; classed as hasan by al-Albani.",
          },
        ],
      },
      {
        id: "names",
        title: "Names of the Prophet ﷺ",
        icon: "19",
        sections: [
          {
            type: "heading",
            kicker: "Manners",
            title: "The names of the Prophet ﷺ",
          },
          {
            type: "figure",
            src: "seerah-book.jpg",
            alt: "Illustration of an open book",
            title: "Names",
            caption: "Muhammad, Ahmad, al-Mahi, al-Hashir, al-Aqib.",
          },
          {
            type: "list",
            items: [
              {
                title: "Jubayr ibn Mut’im رضي الله عنه (Agreed upon)",
                body: "It was narrated that Jubayr ibn Mut’im (may Allah be pleased with him) said: The Messenger of Allah ﷺ said: «I have several names. I am Muhammad, and I am Ahmad, and I am al-Mahi (the eraser) by means of whom Allah erases disbelief, and I am al-Hashir (the gatherer) at whose feet the people will be gathered, and I am al-Aqib (the last) after whom there will be no other.»",
              },
              {
                title: "Muhammad",
                body: "With regard to the name Muhammad (meaning praiseworthy), it is because he has many qualities for which he is praised, and this form is more emphatic than the form Mahmoud (also meaning praiseworthy), by way of emphasizing the meaning.",
              },
              {
                title: "Ahmad",
                body: "The name Ahmad is also derived from the root al-hamd (praise). Thus the first of these two names, Muhammad, indicates that he is praiseworthy, and the second name, Ahmad, indicates that he is the one who praises his Lord (Glorified and Exalted be He) more than anyone else.",
              },
              {
                title: "Al-Mahi (the eraser)",
                body: "With regard to the name al-Mahi (the eraser), he is the one by means of whom Allah erases disbelief (kufr), for disbelief was never erased by anyone as it was erased by the Prophet ﷺ. He was sent at a time when all the people on earth were disbelievers, except for the remnants of the People of the Book, and they were either idol worshippers, Jews who were subject to divine wrath, Christians who had gone astray, Sabians who acknowledged no Lord and no resurrection, star worshippers, fire worshippers, and others. At that time, Allah (Glorified and Exalted be He) looked at the people of earth and despised them all, Arabs and non-Arabs alike, except for a few remnants who followed what was left of the true religion. By means of him, Allah helped the earth and mankind; by means of him, He dispelled the darkness and revived mankind after they had been (spiritually) dead. By means of him, He guided people and brought them forth from misguidance, taught them knowledge and dispelled their ignorance, and opened blind eyes, deaf ears and sealed hearts, until the religion of Allah prevailed over all other religions, and His religion reached the ends of the earth, travelling to every land on which the sun rises.",
              },
              {
                title: "Al-Hashir (the gatherer)",
                body: "Al-Hashir (the gatherer) means the one who will be gathered before the people, as it is mentioned in another hadith: «I will be the first one for whom the earth [the grave] will be split open.» Narrated by al-Bukhari. What is meant is that they will be gathered after him, or they will follow him.",
              },
              {
                title: "Al-Aqib (the last)",
                body: "Al-Aqib (the last) means the Prophet who came after all the other prophets. So he is the last, the final Prophet, and there will be no prophet after him.",
              },
              {
                title: "Hudhayfah رضي الله عنه (at-Tirmidhi in ash-Shama’il; hasan — al-Albani)",
                body: "It was narrated that Hudhayfah said: I met the Prophet ﷺ in one of the streets of Madinah, and he said: «I am Muhammad, and I am Ahmad, and I am the Prophet of Mercy and the Prophet of Repentance, and I am al-Muqaffi (the last in succession), and I am al-Hashir (the gatherer), the Prophet of Battles.»",
              },
              {
                title: "The Prophet of Mercy",
                body: "«The Prophet of Mercy»: that is, the one whom Allah sent with mercy. Allah ﷻ says: {And We have not sent you, [O Muhammad], except as a mercy to the worlds} [al-Anbiya 21:107]. Through him, Allah showed mercy to all of creation, thus he was sent as a mercy to his ummah and as a mercy to the worlds.",
              },
              {
                title: "The Prophet of Repentance",
                body: "«The Prophet of Repentance»: that is, the one through whose guidance a person comes to repent and turns to his Lord.",
              },
              {
                title: "Al-Muqaffi (the last in succession)",
                body: "«Al-Muqaffi (the last in succession)», who followed in the footsteps of the prophets who came before him, so he was the last of them and the final Prophet.",
              },
              {
                title: "The Prophet of Battles",
                body: "«The Prophet of Battles», who was sent to strive against the enemies of Allah in jihad and in the unprecedented battles that took place and will take place between his ummah and the disbelievers.",
              },
            ],
          },
          {
            type: "note",
            tone: "warning",
            title: "Ta-Ha and Ya-Seen",
            body: "Ta-Ha and Ya-Seen are not among the names of the Prophet ﷺ, and they are not mentioned in any sound report or from any of the early generations (the salaf). The evidence that is given to support this idea is an invalid hadith, “I have ten names before my Lord, among which are Ta-Ha and Ya-Seen.” Ibn al-Qayyim said: With regard to what the common folk say, that Ya-Seen and Ta-Ha are among the names of the Prophet ﷺ, that is not correct. This is not mentioned in any sahih, hasan or mursal hadith, or in any report from a Sahabi. Rather these are letters [that appear at the beginning of some surahs], like Alif-Lam-Meem, or Ha-Meem, or Alif-Lam-Ra, and so on.",
          },
        ],
      },
      {
        id: "eating-drinking",
        title: "His manner of eating and drinking",
        icon: "20",
        draft: true,
        sections: [
          {
            type: "figure",
            src: "seerah-food.jpg",
            alt: "Illustration of dates and a cup of water",
            title: "Eating & drinking",
            caption: "Illustration placeholder — notes coming soon.",
          },
          ...comingSoon("His manner of eating and drinking"),
        ],
      },
      {
        id: "speaking",
        title: "Speaking, laughing, smiling and joking",
        icon: "21",
        draft: true,
        sections: comingSoon("His manner of speaking, laughing, smiling and joking"),
      },
      {
        id: "sleeping",
        title: "Sleeping and waking up",
        icon: "22",
        draft: true,
        sections: [
          {
            type: "figure",
            src: "seerah-sleep.jpg",
            alt: "Illustration of a pillow and blanket",
            title: "Sleeping & waking",
            caption: "Illustration placeholder — notes coming soon.",
          },
          ...comingSoon("His manner of sleeping and waking up"),
        ],
      },
      {
        id: "worship",
        title: "Worship, Quran and weeping",
        icon: "23",
        draft: true,
        sections: [
          {
            type: "figure",
            src: "seerah-worship.jpg",
            alt: "Illustration of a prayer rug and beads",
            title: "Worship",
            caption: "Illustration placeholder — notes coming soon.",
          },
          ...comingSoon("His worship, recitation of Quran and weeping"),
        ],
      },
      {
        id: "humility-legacy",
        title: "Humility, age, death and legacy",
        icon: "24",
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
        title: "Activities — Face, hair & beard",
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
      {
        id: "activities-physique-clothing",
        title: "Activities — Physique & clothing",
        icon: "✎",
        sections: [
          {
            type: "heading",
            kicker: "Check your understanding",
            title: "Activities",
          },
          {
            type: "intro",
            text: "Cover physique, the seal, clothing, footwear, ring, turban, and isbal. Write first, then check against the notes.",
          },
          {
            type: "activities",
            title: "Write your answers",
            items: [
              "Write a detailed description of the physique of the Messenger of Allah ﷺ.",
              "What is meant by the seal of prophethood? How was it described, where was it located, and what is the evidence for that?",
              "What is the Sunnah when putting on new clothes and what is the evidence for that?",
              "What is the ruling on wearing solid red clothes? What are the colours of clothes recommended in the religious texts?",
              "What is the ruling on walking in one sandal? Based on your own reading, write the reason for this prohibition.",
              "Write an essay about the ruling on wearing a ring of silver or gold, for men, and what is the guideline on wearing a turban?",
              "Write the evidence for the prohibition on isbal (letting one’s garment come lower than the ankles), and discuss the view of those who say that it is permissible.",
            ],
          },
        ],
      },
      {
        id: "activities-manners-names",
        title: "Activities — Walking, sitting & names",
        icon: "✎",
        sections: [
          {
            type: "heading",
            kicker: "Check your understanding",
            title: "Activities",
          },
          {
            type: "intro",
            text: "Cover walking, sitting, and the names of the Prophet ﷺ. Write first, then check against the notes.",
          },
          {
            type: "activities",
            title: "Write your answers",
            items: [
              "Write a detailed description of the manner in which the Messenger of Allah ﷺ walked and sat, with a discussion on manners of sitting that are prohibited.",
              "What is meant by ittika? Give a description of this manner of sitting, with evidence.",
              "Write an essay about seeking blessing (barakah) from the grave of the Prophet ﷺ that is prohibited, and the ruling on seeking blessing (barakah) from the righteous, with evidence.",
              "Mention five of the names of the Prophet ﷺ with an explanation of their meanings. What is the mistake that many ordinary Muslims fall into in this regard?",
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
  { id: "physique", label: "Physique & skin" },
  { id: "seal", label: "Seal of prophethood" },
  { id: "clothing", label: "Clothing & footwear" },
  { id: "ring", label: "Ring" },
  { id: "turban", label: "Turban & izar" },
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
    t: "physique",
    q: "Describe the physique of the Prophet ﷺ in one sentence.",
    a: "Well-built, of average height (neither tall nor short), broad-shouldered, with a large head and joints, thick fingers and toes, and a line of hair from chest to navel.",
  },
  {
    t: "physique",
    q: "What does “broad-shouldered” mean in al-Bara’s narration?",
    a: "The top of his back was broad.",
  },
  {
    t: "physique",
    q: "Who was Abu’t-Tufayl, and how did he describe him ﷺ?",
    a: "The last Sahabi to see him (and last to die — 110 AH). He said he was fair-skinned, good-looking, of average build.",
  },
  {
    t: "physique",
    q: "What did Ibn al-Qayyim say Allah perfected in the Prophet ﷺ?",
    a: "His beautiful qualities both outward and inward — best of creation in appearance and attitude.",
  },
  {
    t: "physique",
    q: "Describe the colour of his skin ﷺ.",
    a: "Fair with a reddish tint (darkish tone); neither extremely fair nor very dark / dark-skinned. Also: white with a reddish tint.",
  },
  {
    t: "seal",
    q: "Where was the seal of prophethood, and how big was it?",
    a: "Between / next to the shoulders — proven next to the left shoulder (al-Qurtubi). Size of a pigeon’s egg (also described like an apple).",
  },
  {
    t: "seal",
    q: "Was anything written on the seal of prophethood?",
    a: "No. Al-Qurtubi: there is no proof that Allah’s name, “Muhammad”, or any other words were written on it.",
  },
  {
    t: "seal",
    q: "What signs did the monk give Salman al-Farisi?",
    a: "Prophet in the land of the Arabs; migrate to date palms between two lava fields; accept gifts not charity; seal of prophethood between his shoulders.",
  },
  {
    t: "clothing",
    q: "Which garment did he ﷺ like best, and why?",
    a: "The qamees (chemise) — a single piece and more covering (Umm Salamah).",
  },
  {
    t: "clothing",
    q: "What did he say about white garments?",
    a: "Wear white; let the living wear them and shroud the dead in them — they are among the best of your garments.",
  },
  {
    t: "clothing",
    q: "What is a hullah, and what is the ruling on red?",
    a: "Hullah = izar + rida. Solid red forbidden; red with white stripes permissible (as he wore).",
  },
  {
    t: "clothing",
    q: "Sunnah when putting on / taking off sandals?",
    a: "Put on starting with the right; take off starting with the left — right first to be shod, last to be unshod.",
  },
  {
    t: "clothing",
    q: "May one walk in a single sandal?",
    a: "No — put both on or take both off (Abu Hurayrah / Jabir).",
  },
  {
    t: "ring",
    q: "Describe the Prophet’s ring ﷺ.",
    a: "Silver, Ethiopian stone; worn on the right hand; engraved Muhammad / Rasool / Allah on three lines; made to seal letters.",
  },
  {
    t: "ring",
    q: "Ruling on a silver ring for men?",
    a: "Permissible (consensus). Not a religious Sunnah of worship — he wore it to seal letters to kings.",
  },
  {
    t: "turban",
    q: "What is dhu’abah, and is the turban an act of worship?",
    a: "The hanging end of the turban (between the shoulders). Wearing a turban was his habit — not Sunnah as an enjoined act of worship.",
  },
  {
    t: "turban",
    q: "How long should the izar be, and what is isbal?",
    a: "To the mid-calf / calf muscle — not the ankles. Isbal is letting the garment hang below the ankles; it is prohibited.",
  },
  {
    t: "rulings",
    q: "Name ways this chapter shows prohibition of imitating disbelievers.",
    a: "Differing from polytheists in beard/moustache; later parting hair as Muslims’ marker; forbidding qaza; avoiding black dye / imitating women; praying in sandals/khuffs unlike those who remove them.",
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
  {
    t: "physique",
    q: "Ali’s description of the physique included:",
    opts: [
      "Extremely tall and thin",
      "Neither tall nor short; thick fingers and toes; large head and joints; hair from chest to navel",
      "Only that he was short",
      "No description of hands or feet",
    ],
    ans: 1,
    fb: "at-Tirmidhi in ash-Shama’il — full physique details from Ali رضي الله عنه.",
  },
  {
    t: "physique",
    q: "“Broad-shouldered” means:",
    opts: [
      "He was fat",
      "The top of his back was broad",
      "He had no shoulders",
      "Only his arms were long",
    ],
    ans: 1,
    fb: "Clarified with al-Bara’s narration (Agreed upon).",
  },
  {
    t: "physique",
    q: "His skin colour was:",
    opts: [
      "Extremely fair with no tint",
      "Very dark",
      "Fair / white with a reddish tint — neither extreme",
      "Greenish",
    ],
    ans: 2,
    fb: "Anas in the Sahihayn — neither extremely fair nor dark; white with a reddish tint.",
  },
  {
    t: "seal",
    q: "Al-Qurtubi said the seal was:",
    opts: [
      "Written with “Muhammad” in gold",
      "A prominent feature next to his left shoulder, size of a pigeon’s egg, with no proven writing",
      "On his forehead",
      "Invisible",
    ],
    ans: 1,
    fb: "Proven hadiths agree on location and size; no proof of any inscription.",
  },
  {
    t: "seal",
    q: "Salman’s monk mentioned all except:",
    opts: [
      "Land of the Arabs",
      "Date palms between two lava fields",
      "Accepting charity but refusing gifts",
      "Seal between the shoulders",
    ],
    ans: 2,
    fb: "He would accept gifts but not charity — the opposite of that option.",
  },
  {
    t: "ring",
    q: "Why did he ﷺ have a ring made?",
    opts: [
      "Only as decoration",
      "Non-Arabs would not accept letters without a seal",
      "Gold was required",
      "Abu Bakr ordered it",
    ],
    ans: 1,
    fb: "Anas — for sealing letters to non-Arabs.",
  },
  {
    t: "clothing",
    q: "Isbal means:",
    opts: [
      "Wearing white only",
      "Letting a garment hang lower than the ankles",
      "Wearing a turban",
      "Walking in two sandals",
    ],
    ans: 1,
    fb: "Prohibited in clear narrations — mid-calf is the guideline for the izar.",
  },
  {
    t: "turban",
    q: "Wearing a turban is:",
    opts: [
      "An obligatory act of worship for every man",
      "His ﷺ habit/practice — not enjoined as worship on the Ummah",
      "Forbidden in black",
      "Only for Hajj",
    ],
    ans: 1,
    fb: "Habit and practice — not Sunnah as a prescribed act of worship.",
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

/**
 * Tarbiyah Islamiyah 2 — Deeds of the Heart
 *
 * How to add notes:
 * 1. Find the lesson in TARBIYAH2_UNITS and replace `draft: true` + comingSoon section
 *    with real `sections` (same types as Aqeedah 2).
 * 2. Optional: add flashcards / quiz items with the same topic id.
 */

export const TARBIYAH2_META = {
  id: "tarbiyah-2",
  name: "Tarbiyah Islamiyah 2",
  nameAr: "التربية الإسلامية ٢",
  tagline: "Deeds of the heart — sincerity, piety, fear, hope, reliance, and more.",
  description:
    "This semester, we will study the deeds of the heart starting with sincerity, which is the core of deeds and the key (to their acceptance), piety, fear, hope, reliance, gratitude, reflection, love, perseverance and other great deeds which strengthen the bond between the slaves and their Lord. Allah is the Granter of success.",
  path: "/tarbiyah-2",
  category: "Islamic Education",
  meta: "6 units · Notes, flashcards & quiz",
  accent: "teal",
  topics: [
    "Deeds of the heart",
    "Sincerity (ikhlas)",
    "Taqwa, hope & tawakkul",
  ],
  units: 6,
};

const comingSoon = (title) => [
  {
    type: "comingSoon",
    title,
    body: "Notes for this lesson will be added here. Keep the same lesson id so progress is preserved.",
  },
];

export const TARBIYAH2_UNITS = [
  {
    id: "unit-1",
    num: 1,
    title: "Deeds of the Heart",
    titleAr: "أعمال القلوب",
    lessons: [
      {
        id: "unit-map",
        title: "In this unit we will study",
        icon: "1",
        sections: [
          {
            type: "intro",
            text: "The deeds of the heart form the basis of everything else. They are the criteria for the acceptance or rejection of deeds, and they strengthen the bond between the slaves and their Lord. This unit introduces why they matter, then maps the twelve great deeds we will study this semester.",
          },
          {
            type: "roadmap",
            items: [
              {
                title: "Why we study the deeds of the heart",
                subtitle: "Sincerity, intention, and the secret of success in both realms",
              },
              {
                title: "The twelve deeds of the heart",
                subtitle: "From sincerity (ikhlas) to trust in Allah (tawakkul)",
              },
              {
                title: "Sincerity (ikhlas)",
                subtitle: "The core of deeds and the key to their acceptance",
              },
              {
                title: "Piety, fear, hope, and love",
                subtitle: "Taqwa, khawf, raja, and mahabbah",
              },
              {
                title: "Reliance, gratitude, reflection, and perseverance",
                subtitle: "Tawakkul, shukr, tafakkur, and sabr — and other great deeds",
              },
            ],
          },
        ],
      },
      {
        id: "why-heart",
        title: "Why the deeds of the heart",
        icon: "2",
        sections: [
          {
            type: "heading",
            kicker: "Book of Islamic Education (2)",
            title: "Deeds of the Heart",
          },
          {
            type: "ayah",
            text: "O you who have believed, fear Allah and seek the means [of nearness] to Him and strive in His cause that you may succeed.",
            ref: "al-Ma’idah 5:35",
          },
          {
            type: "ayah",
            text: "By Allah, I am the most mindful of Allah among you and the one who fears Him the most among you.",
            ref: "Narrated by al-Bukhari and Muslim",
          },
          {
            type: "intro",
            text: "We are living through a crisis. In the current situation of the Muslim ummah, we need to be sincere to Allah and check our hearts and our intentions when we are trying to rectify the situation and find a way out of this crisis.",
          },
          {
            type: "note",
            tone: "warning",
            title: "Why major Islamic projects failed",
            body: "There have been major Islamic projects which were established and grew strong, but then they failed because of a lack of sincerity, because of showing off, and because of a lack of good intentions.",
          },
          {
            type: "definition",
            label: "Why this book",
            body: "The deeds of the heart form the basis of everything else, as they represent the criteria for the acceptance or rejection of deeds. This will motivate us to do good deeds without any hidden obstacles that could undermine our efforts.",
          },
          {
            type: "note",
            tone: "benefit",
            title: "Immense fruit in this world and the Hereafter",
            body: "They form the secret to success in our efforts to pursue goals in both realms. Those who attain them will be blessed, productive and faithful, and will be people who are described as good.",
          },
          {
            type: "ayah",
            text: "I wish that there were some scholars who could focus solely on teaching people how to check the intention behind their deeds, and who would give classes on how to develop the correct intention and nothing else.",
            ref: "Ibn Abi Jamrah رحمه الله",
          },
          {
            type: "heading",
            title: "What helps one to strive",
          },
          {
            type: "cards",
            items: [
              {
                title: "Trust in Allah (tawakkul)",
                body: "After sincerity towards Allah, putting one’s trust in Him helps one engage in da‘wah. Whoever puts his trust in Allah will attain serenity and peace of mind, persist in his efforts, take measures that lead to success, and shun laziness, speculation and mythical notions.",
              },
              {
                title: "Contemplation and taking stock",
                body: "Tafakkur and muhasabah help one to plan, avoid undue haste, correct one’s course, and strive to improve one’s efforts.",
              },
              {
                title: "Hope, fear and love",
                body: "There is nothing better to help one attain success and guidance than putting one’s hope in Allah, fearing Him, loving Him, and feeling an attachment to His beautiful names and sublime attributes.",
              },
            ],
          },
          {
            type: "ayah",
            text: "Putting one’s hope in Allah is what motivates the believer in his journey towards Allah, makes that journey enjoyable, urges him to keep going and makes him committed to the course on which he has embarked. Were it not for hope, no one would be motivated to start his journey towards Allah, for fear alone does not motivate a person; rather what makes him start his journey is love, what alarms him is fear, and what motivates him is hope.",
            ref: "Ibn al-Qayyim رحمه الله",
          },
          {
            type: "note",
            tone: "warning",
            title: "Hope in people is not equal to hope in Allah",
            body: "A person may develop in his heart some element of hope for help from people, which is problematic — but hardly anyone can be saved from falling into this error. Once you regard hope in Allah and hope in people as being equal, then you have fallen into shirk and drifted away from the path of salvation. But if you give precedence to seeking to please Allah rather than people, you will succeed and prosper, you will achieve great things in your life and your deeds will yield results.",
          },
          {
            type: "heading",
            title: "Contentment, the nafs, and patience",
          },
          {
            type: "definition",
            label: "Contentment (rida)",
            body: "One thing that will help you to be productive and do good is being content with Allah, being content with Islam, and being content with His Prophet Muhammad ﷺ. The one who strives with contentment in his heart will surpass greatly those who feel reluctant, and will be far more successful than others, for his efforts will be blessed.",
          },
          {
            type: "note",
            tone: "warning",
            title: "The soul that prompts evil",
            body: "The soul (nafs) that constantly prompts one to do evil is one of the greatest obstacles that stand in the way of one’s efforts, productivity, persistence and excellence. Allah ﷻ has instructed us to purify the soul, restrain it from following its whims and desires, and to take stock of it. Taking stock of oneself is one of the most important deeds that one must focus on at a time when there are many distractions.",
          },
          {
            type: "note",
            tone: "info",
            title: "Days of patience",
            body: "The time we are living in is akin to the days of patience of which the Prophet ﷺ spoke. Life is filled with troubles and many distractions that keep one from striving. We are faced with trials in our religious commitment, flaming desires and powerful doubts.",
          },
          {
            type: "definition",
            label: "Patience (sabr)",
            body: "There is no gift greater and more effective than patience. By means of patience we may overcome obstacles and free ourselves from distractions, so that they will not distract us and we will not feel weak in the face of these obstacles and succumb to them; rather we will persist in our efforts with clear vision, showing patience and putting our trust in Allah ﷻ.",
          },
          {
            type: "note",
            tone: "benefit",
            title: "The aim of this course",
            body: "We have a great need to learn about the deeds of the heart on the basis of which we may strive to attain our religious or worldly goals, until we are able to attain that which pleases Allah ﷻ in the way He wants from His slaves. And Allah ﷻ is the Source of strength.",
          },
        ],
      },
      {
        id: "twelve-deeds",
        title: "The twelve deeds of the heart",
        icon: "3",
        sections: [
          {
            type: "heading",
            kicker: "This semester",
            title: "The deeds of the heart we will study",
          },
          {
            type: "intro",
            text: "Sincerity is the core of deeds and the key to their acceptance. After it come piety, fear, hope, reliance, gratitude, reflection, love, perseverance and other great deeds which strengthen the bond between the slaves and their Lord.",
          },
          {
            type: "pillars",
            title: "The twelve deeds",
            items: [
              { n: 1, title: "Sincerity", body: "Ikhlas — الإخلاص" },
              { n: 2, title: "Mindfulness of Allah", body: "Taqwa — التقوى" },
              { n: 3, title: "Fear", body: "Khawf — الخوف" },
              { n: 4, title: "Hope", body: "Raja — الرجاء" },
              { n: 5, title: "Love", body: "Mahabbah — المحبة" },
              { n: 6, title: "Patience", body: "Sabr — الصبر" },
              { n: 7, title: "Gratitude", body: "Shukr — الشكر" },
              { n: 8, title: "Piety", body: "Wara‘ — الورع" },
              { n: 9, title: "Contentment", body: "Rida — الرضا" },
              { n: 10, title: "Contemplation", body: "Tafakkur — التفكر" },
              { n: 11, title: "Taking stock of oneself", body: "Muhasabah — المحاسبة" },
              { n: 12, title: "Trust in Allah", body: "Tawakkul — التوكل" },
            ],
          },
          {
            type: "note",
            tone: "info",
            title: "We begin with sincerity",
            body: "Sincerity is the essence and spirit of worship, the criterion on the basis of which deeds are either accepted or rejected. It is the most important and most sublime of the deeds of the heart — so it is most appropriate to begin with it.",
          },
        ],
      },
    ],
  },
  {
    id: "unit-2",
    num: 2,
    title: "Sincerity (ikhlas)",
    titleAr: "الإخلاص",
    lessons: [
      {
        id: "ikhlas-meaning",
        title: "The meaning of sincerity",
        icon: "4",
        sections: [
          {
            type: "heading",
            kicker: "Sincerity (ikhlas)",
            title: "The essence and spirit of worship",
          },
          {
            type: "intro",
            text: "Sincerity is the criterion on the basis of which deeds are either accepted or rejected. It is the most important and most sublime of the deeds of the heart, and it is the main message of the messengers عليهم السلام.",
          },
          {
            type: "ayah",
            text: "And they were not commanded except to worship Allah, [being] sincere to Him in religion.",
            ref: "al-Bayyinah 98:5",
          },
          {
            type: "ayah",
            text: "Verily, sincere devotion is due to Allah Alone.",
            ref: "az-Zumar 39:3",
          },
          {
            type: "note",
            tone: "benefit",
            title: "Sincerity is a condition of acceptance",
            body: "Sincerity is essential, and it is a condition of good deeds being accepted. Allah ﷻ has enjoined His slaves to be sincere in many places in His Book, which indicates that it is definitely obligatory, and that it is a condition of good deeds being accepted, as Allah ﷻ says: they were enjoined only to worship Allah with sincere devotion to Him. [al-Bayyinah 98:5]",
          },
          {
            type: "heading",
            title: "The meaning of the word ikhlas",
          },
          {
            type: "split",
            items: [
              {
                label: "In linguistic terms",
                body: "In Arabic one may use words derived from the same root to refer to something as pure, if it has not been mixed with anything.",
              },
              {
                label: "The image of purity",
                body: "Allah ﷻ says of milk: “pure milk [labanan khalisan], palatable to drinkers” — milk that has not been mixed with blood or excretion.",
              },
            ],
          },
          {
            type: "ayah",
            text: "And indeed, for you in grazing livestock is a lesson. We give you drink from what is in their bellies — between excretion and blood — pure milk [labanan khalisan], palatable to drinkers.",
            ref: "an-Nahl 16:66",
          },
          {
            type: "definition",
            label: "In Islamic terminology",
            title: "Ibn al-Qayyim رحمه الله",
            body: "It means making one’s intentions, when doing an act of worship, purely for Allah ﷻ Alone.",
          },
          {
            type: "definition",
            label: "One of the scholars said",
            body: "It means that you do not want anyone to witness your deed except Allah, and you do not want anyone to reward you for it except Him.",
          },
          {
            type: "note",
            tone: "info",
            title: "The poet said",
            body: "If your deed is not purely for Allah Alone, then no matter what effort you put into it, it will end in ruin. Sincerity is a condition for deeds to be accepted, so long as they are in accordance with the Quran and Sunnah.",
          },
        ],
      },
      {
        id: "niyyah",
        title: "The importance of the intention",
        icon: "5",
        sections: [
          {
            type: "heading",
            kicker: "Niyyah",
            title: "The importance of the intention",
          },
          {
            type: "definition",
            label: "The basis and foundation of deeds",
            body: "The individual will be rewarded or punished according to his intention, and he will be resurrected according to his intention.",
          },
          {
            type: "ayah",
            text: "Deeds are but by intentions, and each person will have but that which he intended.",
            ref: "Umar ibn al-Khattab رضي الله عنه — Agreed upon",
          },
          {
            type: "note",
            tone: "benefit",
            title: "Yahya ibn Abi Katheer رحمه الله",
            body: "Learn how to form the right intention, for it is more important than the good deed.",
          },
        ],
      },
      {
        id: "ikhlas-outcomes",
        title: "The outcomes of sincerity",
        icon: "6",
        sections: [
          {
            type: "heading",
            kicker: "Fruits of ikhlas",
            title: "The outcomes of sincerity include the following",
          },
          {
            type: "heading",
            title: "1. Acceptance of good deeds",
          },
          {
            type: "ayah",
            text: "Allah does not accept any deed except that which is done sincerely for Him Alone, seeking His pleasure.",
            ref: "Narrated by an-Nasa’i; classed as sahih by al-Albani",
          },
          {
            type: "heading",
            title: "2. Attaining reward and multiplication thereof",
          },
          {
            type: "ayah",
            text: "You will never spend anything, seeking thereby the pleasure of Allah, but you will be rewarded for it.",
            ref: "Agreed upon",
          },
          {
            type: "ayah",
            text: "There may be a small righteous deed that becomes like a major deed (in reward) because of the intention, and there may be a major deed that becomes like a small deed (in reward) because of the intention.",
            ref: "Ibn al-Mubarak رحمه الله",
          },
          {
            type: "note",
            tone: "benefit",
            title: "Az-Zubayd al-Yami رحمه الله",
            body: "I like to have a sound intention in everything I do, even eating and drinking.",
          },
          {
            type: "heading",
            title: "3. A good intention is counted even when you are unable to act",
          },
          {
            type: "intro",
            text: "If you have a good intention, you may be regarded as having done good deeds even when you are unable to do them.",
          },
          {
            type: "ayah",
            text: "There are people whom we left behind in Madinah, but we never traversed any mountain path or valley but they were with us; they were kept behind by valid excuses.",
            ref: "Anas ibn Malik رضي الله عنه — Agreed upon",
          },
          {
            type: "ayah",
            text: "…but they will share the reward with you.",
            ref: "Muslim",
          },
          {
            type: "note",
            tone: "info",
            title: "The poor man and the rich man",
            body: "A poor man may attain the same reward as a rich man who gives in charity, if he has a good intention.",
          },
          {
            type: "ayah",
            text: "The likeness of this ummah is that of four men: a man to whom Allah gave both wealth and knowledge, so he disposes of his wealth by spending it in appropriate ways; a man to whom Allah gave knowledge but did not give him wealth, so he says: If I had what this man has, I would do what he has done… They will both be equal in reward.",
            ref: "Abu Kabshah al-Anmari رضي الله عنه — Ahmad and Ibn Majah; classed as sahih by al-Albani",
          },
          {
            type: "heading",
            title: "4. Salvation from the Fire",
          },
          {
            type: "ayah",
            text: "But the righteous one will avoid it, [He] who gives [from] his wealth to purify himself, And not [giving] for anyone who has [done him] a favor to be rewarded, But only seeking the countenance of his Lord, Most High, And he is going to be satisfied.",
            ref: "al-Layl 92:17–21",
          },
        ],
      },
      {
        id: "ikhlas-consequences",
        title: "Failing to attain sincerity",
        icon: "7",
        sections: [
          {
            type: "heading",
            kicker: "A warning",
            title: "Negative consequences of failing to attain sincerity",
          },
          {
            type: "heading",
            title: "Entering the Fire on the Day of Resurrection",
          },
          {
            type: "ayah",
            text: "O Abu Hurayrah, there are three who will be the first of Allah’s creation with whom the Fire will be stoked on the Day of Resurrection.",
            ref: "Abu Hurayrah رضي الله عنه — at-Tirmidhi, classed as hasan",
          },
          {
            type: "note",
            tone: "warning",
            title: "Who are they?",
            body: "One who strove in jihad, or learned and taught, or spent his wealth — for the purpose of showing off and acquiring a reputation. Great deeds, if mixed with riya’, become a cause of ruin.",
          },
          {
            type: "heading",
            title: "Non-acceptance of good deeds",
          },
          {
            type: "ayah",
            text: "I am the least in need of having a partner. Whoever does a deed in which he associates someone else with Me, I will leave him to that which he associated with Me.",
            ref: "Hadith qudsi — Muslim, from Abu Hurayrah رضي الله عنه",
          },
        ],
      },
      {
        id: "ikhlas-signs",
        title: "The signs of sincerity",
        icon: "8",
        sections: [
          {
            type: "heading",
            kicker: "How to recognise it",
            title: "The signs of sincerity include the following",
          },
          {
            type: "list",
            ordered: true,
            items: [
              { title: "Having no desire for fame", body: "not loving praise" },
              { title: "Being motivated to strive for Islam", body: "hastening to do good deeds in the hope of reward" },
              { title: "Patience and forbearance", body: "not complaining" },
              { title: "Being keen to conceal one’s good deeds", body: "doing righteous deeds far away from people’s gaze" },
              { title: "Doing a lot of righteous deeds in secret", body: "what one does in secret is greater than what one does openly" },
            ],
          },
          {
            type: "note",
            tone: "benefit",
            title: "A measure of the heart",
            body: "What one does in secret is greater than what one does openly — because the secret deed is less mixed with the desire to be seen.",
          },
          {
            type: "ayah",
            text: "All that Allah ﷻ wants from you is your intention and your purpose.",
            ref: "Al-Fudayl رحمه الله",
          },
          {
            type: "note",
            tone: "warning",
            title: "Examine your sincerity",
            body: "All of these are signs of sincerity. The Muslim should be cautious; whoever thinks that he is sincere, then he needs to examine his sincerity.",
          },
          {
            type: "heading",
            title: "A living example: Zayn al-Abideen",
          },
          {
            type: "ayah",
            text: "Zayn al-Abideen Ali ibn al-Husayn رضي الله عنه used to carry bread on his back at night, to take it to the needy in the dead of night. He would say: Charity given in the dead of night extinguishes the wrath of the Lord. Some of the people of Madinah were living, not knowing where their sustenance came from, but when Ali ibn al-Husayn died, they stopped receiving that which would be brought to them at night, and they saw on his back the marks left by the sacks of flour that he used to carry to them at night. He used to sponsor one hundred families.",
            ref: "An example of concealing charity",
          },
        ],
      },
      {
        id: "worldly-benefit",
        title: "Worldly benefit with the Hereafter",
        icon: "9",
        sections: [
          {
            type: "heading",
            kicker: "A common question",
            title: "Ruling on intending to gain some worldly benefit when doing some deeds for the Hereafter",
          },
          {
            type: "definition",
            label: "What this refers to",
            body: "Doing a deed that is prescribed in Islam whilst also intending something permissible alongside seeking the pleasure of Allah — such as fasting for the sake of Allah, and also intending to maintain one’s good health by fasting.",
          },
          {
            type: "list",
            ordered: false,
            items: [
              {
                title: "Hajj",
                body: "Travelling for Hajj for the sake of Allah, whilst also intending to do some trade alongside pilgrimage.",
              },
              {
                title: "Jihad",
                body: "Striving in jihad for the sake of Allah, and also intending to acquire some of the booty for the purpose of feeding one’s wife and children.",
              },
              {
                title: "Walking to the mosque",
                body: "Intending to draw closer to Allah thereby, whilst also exercising by walking.",
              },
            ],
          },
          {
            type: "note",
            tone: "info",
            title: "Do these intentions invalidate the deed?",
            body: "Such intentions do not invalidate good deeds, but they may detract from their reward, to a level commensurate with the extent to which a person is focused on the worldly matter in his heart.",
          },
          {
            type: "note",
            tone: "benefit",
            title: "The best course",
            body: "The best is not to intend anything when doing such deeds except drawing closer to Allah ﷻ, and the worldly benefit should be regarded as secondary to that.",
          },
        ],
      },
      {
        id: "riya",
        title: "Showing off (riya)",
        icon: "10",
        sections: [
          {
            type: "heading",
            kicker: "The opposite of sincerity",
            title: "What is riya (showing off)?",
          },
          {
            type: "split",
            items: [
              {
                label: "Linguistic root",
                body: "The Arabic word riya comes from the root ra’a (he saw).",
              },
              {
                label: "Meaning",
                body: "It refers to doing something in order to be seen by people.",
              },
            ],
          },
          {
            type: "note",
            tone: "warning",
            title: "A characteristic of the hypocrites",
            body: "This is a blameworthy characteristic and is one of the characteristics of the hypocrites.",
          },
          {
            type: "ayah",
            text: "Indeed, the hypocrites [think to] deceive Allah, but He is deceiving them. And when they stand for prayer, they stand lazily, showing [themselves to] the people and not remembering Allah except a little.",
            ref: "an-Nisa 4:142",
          },
          {
            type: "heading",
            title: "Hidden shirk — more feared than the Dajjal",
          },
          {
            type: "ayah",
            text: "Shall I not tell you about what I fear more for you than the Dajjal? Hidden shirk, when a man stands and prays, and makes his prayer look beautiful, because he realizes that another man is watching him.",
            ref: "Abu Saeed رضي الله عنه — Ibn Majah; classed as hasan by al-Albani",
          },
          {
            type: "heading",
            title: "Minor shirk is showing off",
          },
          {
            type: "ayah",
            text: "What I fear most for you is minor shirk. Showing off. Allah ﷻ will say to them on the Day of Resurrection, when the people are requited for their deeds: “Go to those to whom you used to show off in the [first] world, and see whether you find any reward with them.”",
            ref: "Ahmad; classed as hasan by al-Arna’ut",
          },
        ],
      },
      {
        id: "not-riya",
        title: "What is not showing off",
        icon: "11",
        sections: [
          {
            type: "heading",
            kicker: "A needed distinction",
            title: "Things that people think constitute showing off but they do not",
          },
          {
            type: "conditions",
            items: [
              {
                n: 1,
                title: "People praise you for a deed you did for yourself",
                body: "When a person does something for himself and people praise him for that, that is not showing off.",
                blocks: [
                  {
                    kind: "hadith",
                    text: "O Messenger of Allah, what if a man does something for himself and people love him for it? He said: “That is a harbinger of glad tidings for the believer.”",
                    ref: "Ibn Hibban; the original report is in Sahih Muslim",
                  },
                ],
              },
              {
                n: 2,
                title: "Becoming famous without seeking fame",
                body: "For example, a scholar or seeker of knowledge who strives to teach people and educate them about their religion, and to answer their questions about matters that they do not understand, and thus attains some level of fame. He should not give up what he is doing on the grounds that he wants to avoid showing off; rather he must strive to make his intention sound and continue what he is doing.",
              },
              {
                n: 3,
                title: "Others are motivated by seeing you worship",
                body: "Some people may see a man worshipping Allah with enthusiasm and they are motivated to worship Allah as he does. This does not constitute showing off, and if his intention in his worship is to seek the pleasure of Allah, he will be rewarded for it.",
              },
              {
                n: 4,
                title: "Looking after one’s appearance",
                body: "Making sure one’s clothes and shoes look good, and that one has a pleasant smell. None of that is regarded as showing off.",
              },
              {
                n: 5,
                title: "Concealing one’s sins",
                body: "Concealing one’s sins and not speaking of them does not come under the heading of showing off; rather we are required, according to Islamic teachings, to conceal our own faults and those of others. Some people think that it is necessary to disclose their sins in order to be sincere, but this is inappropriate and the one who thinks that has been deceived by Iblees, because telling other people about one’s sins is more akin to encouraging sin and indecency among the believers.",
              },
            ],
          },
        ],
      },
      {
        id: "open-secret",
        title: "Open deeds and secret deeds",
        icon: "12",
        sections: [
          {
            type: "heading",
            kicker: "A practical question",
            title: "When is doing a good deed openly prescribed, and when is it not prescribed?",
          },
          {
            type: "intro",
            text: "With regard to doing good deeds openly and concealing them, there are three scenarios:",
          },
          {
            type: "conditions",
            items: [
              {
                n: 1,
                title: "The Sunnah is to conceal it",
                body: "When the Sunnah in doing that deed is to conceal it, then he should conceal it — such as prayers at night (qiyam al-layl) and focusing with proper humility in prayer (khushu‘).",
              },
              {
                n: 2,
                title: "The Sunnah is to do it openly",
                body: "When the Sunnah in doing that deed is to do it openly, then he should do it openly — such as regularly attending Jumu‘ah prayer and prayers in congregation, and speaking the truth openly.",
              },
              {
                n: 3,
                title: "It may be done either in secret or openly",
                body: "In that case it is Sunnah to conceal it for one who fears that he may be showing off by doing it, and it is Sunnah to do it openly for one who wants to set an example for people, such as giving voluntary charity. If a person thinks that some element of showing off may enter his heart if people see him doing that, then he must conceal his charity. But if he thinks that people will follow his example in giving charity, and that he will be able to ward off any inclination to show off, then it is Sunnah for him to give his charity openly.",
              },
            ],
          },
        ],
      },
      {
        id: "ikhlas-activities",
        title: "Activities — sincerity",
        icon: "13",
        sections: [
          {
            type: "activities",
            title: "Activities",
            items: [
              "Quote some texts from the Quran and Sunnah — other than those mentioned above — about the importance of sincerity.",
              "There are serious consequences for failing to be sincere. Mention them, supporting what you say with evidence.",
              "Give a definition of showing off, explaining things that do not come under this heading.",
              "When is doing a good deed openly prescribed, and when is it not prescribed? Give examples other than those mentioned above.",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "unit-3",
    num: 3,
    title: "Taqwa (mindfulness)",
    titleAr: "التقوى",
    lessons: [
      {
        id: "taqwa",
        title: "The meaning of taqwa",
        icon: "14",
        sections: [
          {
            type: "heading",
            kicker: "Being mindful of Allah (taqwa)",
            title: "The best provision for the Hereafter",
          },
          {
            type: "ayah",
            text: "And take provision [with you] for the journey, but the best of provisions is mindfulness of Allah [taqwa]. So be mindful of Me, O people of understanding.",
            ref: "al-Baqarah 2:197",
          },
          {
            type: "intro",
            text: "It is the criterion for differentiating between people. It is the source of comfort at times of loneliness, a protector against punishment, and the means of reaching Paradise.",
          },
          {
            type: "ayah",
            text: "Verily, the noblest of you before Allah is the most mindful of Him among you [atqaakum]. Verily, Allah is All-Knowing, All-Aware.",
            ref: "al-Hujurat 49:13",
          },
          {
            type: "ayah",
            text: "And cooperate in righteousness and piety [taqwa].",
            ref: "al-Ma’idah 5:2",
          },
          {
            type: "note",
            tone: "benefit",
            title: "Why Allah commanded us to cooperate in it",
            body: "Because of its great importance and virtue, Allah ﷻ has commanded us to cooperate for the sake of attaining it. Moreover, it is a means of attaining the pleasure of Allah ﷻ.",
          },
          {
            type: "split",
            items: [
              {
                label: "In linguistic terms",
                body: "The root meaning of taqwa is protection.",
              },
              {
                label: "In Islamic terminology",
                body: "Talq ibn Habib said, when they asked him about taqwa: It means that you do an act of obedience to Allah, in accordance with the guidance of Allah, hoping for the reward of Allah, and you refrain from disobeying Allah, in accordance with the guidance of Allah, fearing the punishment of Allah.",
              },
            ],
          },
          {
            type: "definition",
            label: "In practice",
            body: "Allah ﷻ will not see you where He has forbidden you to be, and will not miss seeing you where He has instructed you to be. If He has forbidden you to sit in gatherings where His verses are rejected and mocked, He should not see you there. If He has enjoined you to be in the mosque to offer the five daily prayers and Jumu‘ah prayer, He should not miss seeing you there.",
          },
          {
            type: "note",
            tone: "info",
            title: "The poet said",
            body: "Abandon sins, major and minor, for that is taqwa. Act like one who is walking over thorny ground, and proceed with caution. Never think of a minor sin as little, for mountains are made of tiny pebbles.",
          },
          {
            type: "ayah",
            text: "Umar ibn al-Khattab رضي الله عنه asked Ubay ibn Ka‘b رضي الله عنه about taqwa. He said: Have you ever had to walk on a path with thorns? He said: Yes. He said: What did you do? He said: I lifted up my garment and walked very carefully. He said: That is taqwa.",
            ref: "Umar and Ubay ibn Ka‘b رضي الله عنهما",
          },
          {
            type: "ayah",
            text: "O believers! Be mindful of Allah in the way He deserves [ittaqu Allaha haqqa tuqaatihi].",
            ref: "Aal ‘Imran 3:102",
          },
          {
            type: "definition",
            label: "Ibn Mas‘ud رضي الله عنه said",
            body: "He should be obeyed and not disobeyed, He should be remembered and not forgotten, and He should be shown gratitude, not shown ingratitude.",
          },
        ],
      },
      {
        id: "taqwa-command",
        title: "The command to have taqwa",
        icon: "15",
        sections: [
          {
            type: "heading",
            kicker: "A universal command",
            title: "Instruction to fear Allah and be mindful of Him (taqwa)",
          },
          {
            type: "intro",
            text: "Allah has enjoined and instructed us to fear Him and be mindful of Him (taqwa) in more than one place in His Noble Book.",
          },
          {
            type: "ayah",
            text: "And We have instructed those who were given the Scripture before you and yourselves to be mindful of Allah [an ittaqu Allaha].",
            ref: "an-Nisa 4:131",
          },
          {
            type: "ayah",
            text: "The command to fear Allah and be mindful of Him is something that is universal and addressed to all nations.",
            ref: "Al-Qurtubi رحمه الله",
          },
          {
            type: "note",
            tone: "benefit",
            title: "The core of the Quran",
            body: "One of the scholars said: This verse is the core of the entire Quran, because everything else revolves around it.",
          },
          {
            type: "ayah",
            text: "Fear Allah and be mindful of Him wherever you are. Follow a bad deed with a good deed; it will erase it. And have a good attitude when dealing with people.",
            ref: "To Abu Dharr رضي الله عنه — at-Tirmidhi; classed as hasan by al-Albani",
          },
          {
            type: "ayah",
            text: "I advise you to fear Allah and be mindful of Him…",
            ref: "His farewell advice to the Companions — Abu Dawud and at-Tirmidhi; classed as hasan by al-Albani",
          },
          {
            type: "heading",
            title: "The way to become a close friend (wali) of Allah",
          },
          {
            type: "ayah",
            text: "Unquestionably, [for] the allies [awliya’] of Allah there will be no fear concerning them, nor will they grieve, Those who believed and were mindful of Allah.",
            ref: "Yunus 10:62–63",
          },
          {
            type: "ayah",
            text: "His [true] allies are not but those who are mindful of Him [al-muttaqoon], but most of them do not know.",
            ref: "al-Anfal 8:34",
          },
          {
            type: "note",
            tone: "warning",
            title: "Not by drums, flying, or walking on water",
            body: "Becoming a close friend or ally (wali) of Allah is attained by doing righteous deeds, not by beating drums or doing any other innovated actions that have been introduced into the religion. Being able to fly or walk on water is not proof of being a close friend of Allah.",
          },
          {
            type: "ayah",
            text: "Indeed Allah says: “Whoever shows enmity to a close friend of Mine, I declare war on him. My slave does not draw closer to Me by means of anything more beloved to Me than that which I have enjoined upon him, and My slave continues to draw closer to Me by doing supererogatory deeds until I love him…”",
            ref: "Abu Hurayrah رضي الله عنه — al-Bukhari",
          },
          {
            type: "note",
            tone: "benefit",
            title: "What this hadith indicates",
            body: "Being a close friend of Allah ﷻ can only be attained by doing righteous deeds in accordance with Islamic teachings.",
          },
        ],
      },
      {
        id: "taqwa-levels",
        title: "Knowledge and levels of taqwa",
        icon: "16",
        sections: [
          {
            type: "heading",
            kicker: "A needed warning",
            title: "Taqwa is not abandoning the permissible",
          },
          {
            type: "note",
            tone: "warning",
            title: "Note",
            body: "Many people refrain from doing some perfectly permissible actions, in which there is no element of haram at all, on the grounds that they are fearing Allah and being mindful of Him (taqwa). This is completely inappropriate, and the one who does that is wronging himself, because he is depriving himself of permissible things on the grounds that this is a kind of worship, but that is not a kind of worship at all.",
          },
          {
            type: "definition",
            label: "There is no taqwa without knowledge",
            body: "If a person wants to fear Allah and be mindful of Him, then he must seek the knowledge that Allah has sent down to His slaves and not turn away from it. There is no piety (taqwa) without knowledge and following the teachings of Islam.",
          },
          {
            type: "heading",
            title: "Levels of mindfulness of Allah (taqwa)",
          },
          {
            type: "ayah",
            text: "Then We caused to inherit the Book those We have chosen of Our servants; and among them is he who wrongs himself, and among them is he who is moderate, and among them is he who is foremost in good deeds by permission of Allah. That [inheritance] is what is the great bounty.",
            ref: "Fatir 35:32",
          },
          {
            type: "intro",
            text: "According to this verse, there are three levels:",
          },
          {
            type: "conditions",
            items: [
              {
                n: 1,
                title: "The one who wrongs himself",
                body: "This is the one who affirms the oneness of Allah (Tawhid) and believes in the Messenger ﷺ, and he adheres to the pillars of Islam and faith, but he does not strive to protect himself from entering Hell at all, so he is careless about some obligatory duties and commits some prohibited actions. He is one of the sinners among those who affirm the oneness of Allah, who are subject to the will of Allah: if Allah wills He will pardon them, and if He wills He will punish them commensurate with their actions, until they are brought forth from the Fire at some future time.",
                blocks: [
                  {
                    kind: "hadith",
                    text: "Beware of sins of which people think little, for they may accumulate until they destroy a man.",
                    ref: "Abdullah ibn Mas‘ud رضي الله عنه — Ahmad; classed as sahih by al-Albani",
                  },
                ],
              },
              {
                n: 2,
                title: "The one who is moderate",
                body: "This is the one who avoids everything that may be a cause of punishment in the Fire, even for a brief moment, but he does not compete to be foremost in doing good deeds.",
                blocks: [
                  {
                    kind: "ayah",
                    text: "If you avoid the major sins which you are forbidden, We will remove from you your lesser sins.",
                    ref: "an-Nisa 4:31",
                  },
                ],
              },
              {
                n: 3,
                title: "The foremost in doing good deeds",
                body: "This is the best of these three levels. It refers to the one who does what is obligatory and avoids what is prohibited, and hastens to do good deeds. It does not mean that he never errs.",
                blocks: [
                  {
                    kind: "hadith",
                    text: "Every son of Adam is prone to error.",
                    ref: "at-Tirmidhi and Ibn Majah; classed as hasan by al-Albani",
                  },
                  {
                    kind: "ayah",
                    text: "Those who avoid the major sins and immoralities, only [committing] slight ones. Indeed, your Lord is vast in forgiveness.",
                    ref: "an-Najm 53:32",
                  },
                ],
              },
            ],
          },
          {
            type: "note",
            tone: "warning",
            title: "Do not think little of sins",
            body: "That the one who wrongs himself may still be among the people of Tawhid does not mean that one should think little of sins. Small sins may accumulate until they destroy a man.",
          },
        ],
      },
      {
        id: "taqwa-traits",
        title: "Characteristics of the muttaqun",
        icon: "17",
        sections: [
          {
            type: "heading",
            kicker: "How they may be recognised",
            title: "Characteristics of those who are mindful of Allah (al-muttaqun)",
          },
          {
            type: "intro",
            text: "Those who are mindful of Allah have characteristics by which people may recognize them, some of which Allah ﷻ has mentioned. These characteristics include the following:",
          },
          {
            type: "conditions",
            items: [
              {
                n: 1,
                title: "Striving to be truthful in word and deed",
                body: "They bring the truth and believe in it.",
                blocks: [
                  {
                    kind: "ayah",
                    text: "And the one who has brought the truth and [they who] believed in it — those are the ones who are mindful of Allah [al-muttaqoon].",
                    ref: "az-Zumar 39:33",
                  },
                ],
              },
              {
                n: 2,
                title: "Honouring the symbols of Allah and the rituals He has prescribed",
                body: "What is meant by honouring the symbols of Allah is respecting the sacred limits set by his Lord, so he does not transgress them, and respecting the commands of Allah, so he follows them in the proper manner.",
                blocks: [
                  {
                    kind: "ayah",
                    text: "That [is so]. And whoever honors the symbols of Allah — indeed, it is from the piety [taqwa] of hearts.",
                    ref: "al-Hajj 22:32",
                  },
                ],
              },
              {
                n: 3,
                title: "Striving to be fair and just, and to rule on the basis of justice",
                body: "Hatred of a people must not prevent justice. Justice is nearer to taqwa.",
                blocks: [
                  {
                    kind: "ayah",
                    text: "And do not let the hatred of a people prevent you from being just. Be just; that is nearer to righteousness [taqwa]. And fear Allah; indeed, Allah is Acquainted with what you do.",
                    ref: "al-Ma’idah 5:8",
                  },
                ],
              },
              {
                n: 4,
                title: "Following the path of the prophets",
                body: "Those who are true and the doers of good — walking in their footsteps.",
                blocks: [
                  {
                    kind: "ayah",
                    text: "O you who have believed, fear Allah and be with those who are true.",
                    ref: "at-Tawbah 9:119",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "taqwa-attain",
        title: "How to attain taqwa",
        icon: "18",
        sections: [
          {
            type: "heading",
            kicker: "Practical means",
            title: "The way to attain mindfulness of Allah (taqwa)",
          },
          {
            type: "list",
            ordered: true,
            items: [
              {
                title: "Asking Allah to make one mindful of Him",
                body: "Frequently reciting the supplication: “Allahumma aati nafsi taqwaha wa zakkiha anta khayru man zakkaha” — O Allah, grant my soul mindfulness of You and purify it, for You are the best to purify it — and other supplications.",
              },
              {
                title: "Striving to rectify one’s heart",
                body: "Awn ibn Abdillah said: “The key to mindfulness of Allah is having good intentions.”",
              },
              {
                title: "Striving to rectify one’s outward actions",
                body: "By making them in accordance with the Sunnah and teachings of the Prophet ﷺ.",
              },
              {
                title: "Other ways",
                body: "Patience, taking stock of oneself, modesty (haya’), generosity, fasting, and only eating food from halal sources.",
              },
            ],
          },
        ],
      },
      {
        id: "taqwa-outcomes",
        title: "The outcomes of taqwa",
        icon: "19",
        sections: [
          {
            type: "heading",
            kicker: "All good is in it",
            title: "The outcome of being mindful of Allah (taqwa)",
          },
          {
            type: "ayah",
            text: "You should be mindful of Allah, for it combines all that is good.",
            ref: "at-Tabarani in al-Kabeer; classed as sahih by al-Albani",
          },
          {
            type: "ayah",
            text: "I advise you to be mindful of Allah, for that should come before everything you do.",
            ref: "Abu Saeed al-Khudri رضي الله عنه — Ahmad; classed as hasan by al-Albani",
          },
          {
            type: "heading",
            title: "The greatest consequences of being mindful of Allah",
          },
          {
            type: "evidence",
            items: [
              {
                n: 1,
                lead: "Admittance to Paradise and salvation from the Fire",
                text: "That is Paradise, which We give as inheritance to those of Our servants who were devout and mindful of Allah [man kaana taqiyyan].",
                ref: "Maryam 19:63",
                blocks: [
                  {
                    kind: "hadith",
                    text: "On the day Allah created the heavens and the earth, He created one hundred mercies, each of which could fill the space between heaven and earth. He allocated one mercy to be shared among all of creation, by virtue of which a mother shows compassion to her child, by virtue of which wild animals and birds drink water, and by virtue of which all creatures show compassion to one another. Then on the Day of Resurrection, He will limit it to those who were mindful of Him (al-muttaqun) and will bless them with ninety-nine more.",
                    ref: "Classed as sahih by al-Hakim",
                  },
                ],
              },
              {
                n: 2,
                lead: "Being regarded as noble in the sight of Allah",
                text: "Indeed, the most noble of you in the sight of Allah is the most mindful of Allah among you.",
                ref: "al-Hujurat 49:13",
              },
              {
                n: 3,
                lead: "Happiness and well-being in this world and the Hereafter",
                text: "Unquestionably, [for] the allies of Allah there will be no fear concerning them, nor will they grieve, Those who believed and were mindful of Allah. For them are good tidings in the worldly life and in the Hereafter. No change is there in the words of Allah. That is what is the great attainment.",
                ref: "Yunus 10:62–64",
              },
              {
                n: 4,
                lead: "Guidance, expiation of bad deeds, and the bounty of Allah",
                text: "O you who have believed, if you are mindful of Allah, He will grant you a criterion and will remove from you your misdeeds and forgive you. And Allah is the possessor of great bounty.",
                ref: "al-Anfal 8:29",
              },
              {
                n: 5,
                lead: "Abundant provision",
                text: "And whoever is mindful of Allah — He will make for him a way out, And will provide for him from where he does not expect.",
                ref: "at-Talaq 65:2–3",
              },
              {
                n: 6,
                lead: "Having one’s affairs made easy",
                text: "And whoever is mindful of Allah — He will make for him of his matter ease.",
                ref: "at-Talaq 65:4",
              },
              {
                n: 7,
                lead: "Blessing (barakah)",
                text: "And if only the people of the cities had believed and been mindful of Allah, We would have opened upon them blessings from the heaven and the earth.",
                ref: "al-A‘raf 7:96",
                blocks: [
                  {
                    kind: "hadith",
                    text: "A woman of the desert people advised a son of hers who wanted to travel: I advise you to be mindful of Allah, for a little mindfulness of Him is more beneficial to you than a great deal of smartness.",
                  },
                ],
              },
              {
                n: 8,
                lead: "Protection, well-being, support and a good end",
                text: "Indeed, the earth belongs to Allah. He causes to inherit it whom He wills of His servants. And the [best] outcome is for those who are mindful of Allah.",
                ref: "al-A‘raf 7:128",
                blocks: [
                  {
                    kind: "hadith",
                    text: "When Abu Bakr رضي الله عنه wanted to appoint Umar رضي الله عنه as his successor, he said: I am asking you to take on something that is very difficult for the one who takes it on, so fear Allah, O Umar, by obeying Him, and obey Him by being mindful of Him, for the one who is mindful of Allah (al-muttaqi) is safe and protected.",
                    ref: "al-Agharr Abu Malik",
                  },
                ],
              },
              {
                n: 9,
                lead: "Compensation with something better",
                body: "Whatever one gives up out of fear and mindfulness of Allah, Allah replaces with something better.",
                text: "You will never give up anything out of fear and mindfulness of Allah but Allah will give you something better than it.",
                ref: "Abu Qatadah and Abu’d-Dahma — Ahmad; classed as sahih by al-Arna’ut",
              },
            ],
          },
          {
            type: "note",
            tone: "warning",
            title: "Has he truly attained taqwa?",
            body: "The one who wishes to hasten the promise of Allah and thinks it is slow in coming should check himself first. Undoubtedly the one who does some obligatory actions and not others, and refrains from some forbidden things and not others, has not yet attained true mindfulness and fear of Allah. So he must take stock of himself, then he must adhere to mindfulness of Allah in order to attain those outcomes.",
          },
        ],
      },
      {
        id: "taqwa-activities",
        title: "Activities — taqwa",
        icon: "20",
        sections: [
          {
            type: "activities",
            title: "Activities",
            items: [
              "Based on your studies, speak about the outcomes of being mindful of Allah (taqwa).",
              "Quote some verses from the Quran that attest to the high status and importance of being mindful of Allah.",
              "Describe briefly the characteristics of those who are mindful of Allah (al-muttaqun).",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "unit-4",
    num: 4,
    title: "Khawf (fear)",
    titleAr: "الخوف",
    lessons: [
      {
        id: "khawf",
        title: "The meaning of fear (khawf)",
        icon: "21",
        sections: [
          {
            type: "heading",
            kicker: "A deed of the heart",
            title: "Fear (khawf)",
          },
          {
            type: "intro",
            text: "How often is fear the cause of releasing a person from being a prisoner of his desires. How often has fear made one who defiantly disobeyed his parents give up his sin. How often have the slaves of Allah wept out of fear of Him. How often is one who is journeying towards Allah accompanied by fear on his journey. How many lovers of Allah have irrigated the earth with their tears. By Allah, how great is fear to the one who understands the importance of this deed of the heart.",
          },
          {
            type: "ayah",
            text: "Only those fear Allah, from among His servants, who have knowledge. Indeed, Allah is Exalted in Might and Forgiving.",
            ref: "Fatir 35:28",
          },
          {
            type: "split",
            items: [
              {
                label: "In Arabic",
                title: "Khawf",
                body: "The word khawf (fear) means alarm and panic; it is the opposite of amn (safety, security).",
              },
              {
                label: "In Islamic terminology",
                title: "Khawf",
                body: "Khawf (translated here as fear) refers to expecting something bad to happen, or expecting to miss out on something that one loves, on the basis of either conjecture or certainty.",
              },
            ],
          },
          {
            type: "note",
            tone: "info",
            title: "This world or the Hereafter",
            body: "The word khawf may be used with regard to matters of this world or of the Hereafter.",
          },
          {
            type: "definition",
            label: "Khashyah is stronger than khawf",
            body: "The word khashyah (also translated as fear) has a stronger meaning than the word khawf. Ibn Uthaymeen رحمه الله said: Khashyah is khawf (fear) that is based on knowledge of the greatness of the One Whom you fear and of His perfect power and authority.",
          },
          {
            type: "heading",
            title: "Fearing Allah is obligatory",
          },
          {
            type: "intro",
            text: "Fearing Allah ﷻ is one of the most important and greatest obligations of Islam, because of the significant outcomes to which it leads.",
          },
          {
            type: "definition",
            label: "A condition of faith",
            body: "Fearing Allah, to the exclusion of all others, is one of the conditions of faith. Allah ﷻ has commanded us to fear Him Alone and to venerate Him.",
          },
          {
            type: "ayah",
            text: "That is only Satan who frightens [you] of his supporters. So fear them not, but fear Me, if you are [indeed] believers.",
            ref: "Aal ‘Imran 3:175",
          },
          {
            type: "ayah",
            text: "And fear [only] Me.",
            ref: "al-Baqarah 2:40",
          },
          {
            type: "ayah",
            text: "And remember your Lord within yourself in humility and in fear.",
            ref: "al-A‘raf 7:205",
          },
          {
            type: "ayah",
            text: "But as for the one who feared standing before his Lord and restrained himself from base desires…",
            ref: "an-Nazi‘at 79:40",
          },
          {
            type: "ayah",
            text: "For him who fears standing before his Lord there will be two gardens.",
            ref: "ar-Rahman 55:46",
          },
        ],
      },
      {
        id: "khawf-status",
        title: "The status of fear of Allah",
        icon: "22",
        sections: [
          {
            type: "heading",
            kicker: "Without it, faith is not valid",
            title: "The status of fear of Allah (khawf)",
          },
          {
            type: "intro",
            text: "Thus fear of Allah ﷻ is one of the most important principles of Islam, without which faith is not valid. It is the foundation of mindfulness of Allah (taqwa) and of wisdom.",
          },
          {
            type: "note",
            tone: "benefit",
            title: "Al-Hasan رحمه الله said",
            body: "The believer combines good deeds and fear, whereas the hypocrite combines bad deeds with a feeling of being secure.",
          },
          {
            type: "note",
            tone: "info",
            title: "Ibn al-Qayyim رحمه الله said",
            body: "The status of fear is one of the greatest stages on the road, and one of the most beneficial for spiritual well-being. It is obligatory for everyone.",
          },
          {
            type: "definition",
            label: "A sign of sublime status",
            body: "Fear of Allah (khawf) is a sign of sublime status.",
          },
          {
            type: "ayah",
            text: "Only those fear Allah, from among His servants, who have knowledge. Indeed, Allah is Exalted in Might and Forgiving.",
            ref: "Fatir 35:28",
          },
          {
            type: "ayah",
            text: "I am the one among you who is most mindful of Allah and fears Him the most.",
            ref: "al-Bukhari and Muslim",
          },
          {
            type: "intro",
            text: "Hence the Prophet ﷺ attained the highest level thereof. Fear of Allah ﷻ unseen is one of the most sublime of statuses.",
          },
          {
            type: "ayah",
            text: "O you who have believed, Allah will surely test you through something of the game that your hands and spears [can] reach, that Allah may make evident those who fear Him unseen. And whoever transgresses after that — for him is a painful punishment.",
            ref: "al-Ma’idah 5:94",
          },
          {
            type: "ayah",
            text: "You can only warn one who follows the message and fears the Most Merciful unseen. So give him good tidings of forgiveness and noble reward.",
            ref: "Ya-Seen 36:11",
          },
          {
            type: "heading",
            title: "People fall into different categories in terms of fearing Allah",
          },
          {
            type: "conditions",
            items: [
              {
                n: 1,
                title: "The foremost and closest to Allah",
                body: "They are the ones whom fear of Allah ﷻ motivates to hasten to do good and to draw closer to Allah ﷻ by doing obligatory and supererogatory deeds, being aware of Him, and avoiding prohibited and dubious things. Allah ﷻ praises them.",
                blocks: [
                  {
                    kind: "ayah",
                    text: "Indeed, they who are apprehensive from fear of their Lord, And they who believe in the signs of their Lord, And they who do not associate anything with their Lord, And they who give what they give while their hearts are fearful because they will be returning to their Lord, It is those who hasten to good deeds, and they outstrip [others] therein.",
                    ref: "al-Mu’minun 23:57–61",
                  },
                ],
              },
              {
                n: 2,
                title: "Those who follow a middle course",
                body: "These are the ones whom fear of Allah ﷻ motivates to avoid prohibited things and to do what is obligatory. They are the righteous who are following a middle course.",
              },
              {
                n: 3,
                title: "Those who are negligent and wrong themselves",
                body: "Basically they fear Allah ﷻ in such a way that prevents them from committing major shirk or sins that nullify Islam, and makes them refrain from some major sins, but because of the low level of their fear of Allah ﷻ they commit some major sins and omit some obligatory duties — Allah forbid. They are sinners who deserve punishment commensurate with what they have fallen into of infractions, but they are still regarded as being within the bounds of Islam.",
              },
              {
                n: 4,
                title: "Those who go to extremes in fear of Allah",
                body: "They are the ones whose intense fear of Him prompts them to fall into a type of despair of Allah’s mercy. They are sinning and going to extremes, because it is not permissible for the believer to despair of the mercy of Allah.",
              },
            ],
          },
        ],
      },
      {
        id: "khawf-types",
        title: "Types of fear (khawf)",
        icon: "23",
        sections: [
          {
            type: "heading",
            kicker: "What the heart fears",
            title: "Types of fear (khawf)",
          },
          {
            type: "conditions",
            items: [
              {
                n: 1,
                title: "Fear of Allah’s wrath and of being deprived of His pleasure",
                body: "This is the fear of those who love Him. There is only one cause for the wrath of Allah ﷻ, namely disobedience of Allah, because if a person avoids acts of disobedience and sin, he will not be punished.",
                blocks: [
                  {
                    kind: "hadith",
                    text: "There are five things that you must learn, and if you rode camels in pursuit of them you would exhaust the camels before you found any words as useful as what I am going to tell you: a person should not fear anything but his sin, and should not put his hope in anything except his Lord…",
                    ref: "Ali ibn Abi Talib رضي الله عنه",
                  },
                ],
              },
              {
                n: 2,
                title: "Fear of punishment in this world and the Hereafter",
                body: "This fear is always present in the believer’s heart. Every sin for which there is a warning of divine curses and wrath is a cause of great fear. How many people have suffered torment and agony for years because of being cursed once for a major sin they committed and thought little of it, and they forgot and were heedless, and failed to repent from their sin, and thus never had any reprieve from their torment.",
                blocks: [
                  {
                    kind: "ayah",
                    text: "And those who are fearful of the punishment of their Lord; Indeed, the punishment of their Lord is not that from which one is safe.",
                    ref: "al-Ma‘arij 70:27–28",
                  },
                ],
              },
              {
                n: 3,
                title: "Fear of missing out on reward",
                body: "The one who strives hard hopes for the reward of his actions, and fears that his efforts may be rendered worthless by something he does, thus causing him to lose what he hoped for of immense reward.",
              },
            ],
          },
          {
            type: "note",
            tone: "warning",
            title: "There is nothing the righteous fear more than shirk",
            body: "It renders all good deeds worthless, and the one who commits this sin is not forgiven, no matter how great his knowledge and worship.",
          },
          {
            type: "ayah",
            text: "And it was already revealed to you and to those before you that if you should associate [anything] with Allah, your work would surely become worthless, and you would surely be among the losers.",
            ref: "az-Zumar 39:65",
          },
          {
            type: "ayah",
            text: "But if they had associated others with Allah, then worthless for them would be whatever they were doing.",
            ref: "al-An‘am 6:88",
          },
        ],
      },
      {
        id: "khawf-outcomes",
        title: "Outcomes of fearing Allah",
        icon: "24",
        sections: [
          {
            type: "heading",
            kicker: "What fear of Allah leads to",
            title: "Outcomes of fearing Allah",
          },
          {
            type: "evidence",
            items: [
              {
                n: 1,
                lead: "Knowledge and insight",
                text: "Is one who is devoutly obedient during periods of the night, prostrating and standing [in prayer], fearing the Hereafter and hoping for the mercy of his Lord, [like one who does not]? Say, “Are those who know equal to those who do not know?” Only they will remember [who are] people of understanding.",
                ref: "az-Zumar 39:9",
              },
              {
                n: 2,
                lead: "Being foremost in doing good",
                text: "Indeed, they who are apprehensive from fear of their Lord, And they who believe in the signs of their Lord, And they who do not associate anything with their Lord, And they who give what they give while their hearts are fearful because they will be returning to their Lord, It is those who hasten to good deeds, and they outstrip [others] therein.",
                ref: "al-Mu’minun 23:57–61",
              },
              {
                n: 3,
                lead: "Being enabled to have power on earth",
                text: "And those who disbelieved said to their messengers, “We will surely drive you out of our land, or you must return to our religion.” So their Lord inspired to them, “We will surely destroy the wrongdoers And We will surely cause you to dwell in the land after them. That is for he who fears My position and fears My threat.”",
                ref: "Ibrahim 14:13–14",
              },
              {
                n: 4,
                lead: "Being safe on the Day of Resurrection",
                text: "By My Glory, I shall not let My slave feel fear in two realms or feel secure in two realms. If he fears Me in the first world, I shall grant him security on the Day of Resurrection, and if he feels safe from Me in the first world, I shall cause him to feel fear on the Day of Resurrection.",
                ref: "Abu Hurayrah رضي الله عنه — Ibn Hibban; classed as sahih by al-Albani",
              },
              {
                n: 5,
                lead: "Being saved from the Fire",
                text: "No man will enter the Fire who weeps out of fear of Allah, until the milk goes back into the udder.",
                ref: "Abu Hurayrah رضي الله عنه — at-Tirmidhi; classed as sahih by al-Albani",
              },
              {
                n: 6,
                lead: "Attaining the pleasure of Allah",
                text: "…Allah being pleased with them and they with Him. That is for whoever has feared his Lord.",
                ref: "al-Bayyinah 98:8",
              },
              {
                n: 7,
                lead: "Being shaded with the shade of the Throne",
                body: "In the hadith about the seven whom Allah will shade with His shade on the Day when there will be no shade but His, it mentions among them:",
                text: "…a man who was pursued by a woman of status and beauty, but he said: “I fear Allah.”",
                ref: "Agreed upon",
              },
              {
                n: 8,
                lead: "Enjoying bliss and delight in Paradise",
                text: "For him who fears standing before his Lord there will be two gardens.",
                ref: "ar-Rahman 55:46",
                blocks: [
                  {
                    kind: "ayah",
                    text: "Who forsake their beds, calling upon their Lord with fear and hope, and spend out of what We have provided for them. No soul knows what is kept hidden in store for them of delight as a reward for what they used to do.",
                    ref: "as-Sajdah 32:16–17",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "khawf-means",
        title: "Means of developing fear of Allah",
        icon: "25",
        sections: [
          {
            type: "heading",
            kicker: "How the heart learns to fear",
            title: "Means of developing fear (khawf) of Allah",
          },
          {
            type: "conditions",
            items: [
              {
                n: 1,
                title: "Remembering the majesty and might of Allah",
                body: "It was narrated from Ibn Umar رضي الله عنهما that the Messenger of Allah ﷺ recited az-Zumar 39:67 one day on the minbar, then he said the words below, and the minbar shook with him until they thought that it would collapse with him on it.",
                blocks: [
                  {
                    kind: "ayah",
                    text: "They have not given due recognition to Allah. On the Day of Resurrection, the entire earth will be in His grip, and the heavens will be rolled up in His Right Hand. Glorified and exalted be Allah far above the partners they ascribe to Him!",
                    ref: "az-Zumar 39:67",
                  },
                  {
                    kind: "hadith",
                    text: "Allah glorifies Himself: “I am the Compeller (al-Jabbar), I am the Supreme (al-Mutakabbir), I am the Sovereign (al-Malik), I am the Almighty (al-Aziz), I am the Most Noble and Generous (al-Kareem).”",
                    ref: "Ahmad; classed as sahih by al-Arna’ut",
                  },
                ],
              },
              {
                n: 2,
                title: "Bringing to mind the standing before Allah",
                body: "The standing before Allah ﷻ will inevitably come to pass. Whoever reflects upon this standing and fears it in this world will increase in fear of Allah ﷻ.",
                blocks: [
                  {
                    kind: "ayah",
                    text: "But as for the one who feared standing before his Lord and restrained himself from base desires, verily paradise will be his abode.",
                    ref: "an-Nazi‘at 79:40–41",
                  },
                ],
              },
              {
                n: 3,
                title: "Listening to the Quran, hadiths, exhortation and khutbahs",
                body: "The skins of those who fear their Lord shiver at His Book, then their skins and hearts relax at His remembrance.",
                blocks: [
                  {
                    kind: "ayah",
                    text: "Allah has sent down the best statement: a consistent Book wherein is reiteration. The skins shiver therefrom of those who fear their Lord; then their skins and their hearts relax at the remembrance of Allah. That is the guidance of Allah by which He guides whom He wills. And one whom Allah leaves astray — for him there is no guide.",
                    ref: "az-Zumar 39:23",
                  },
                ],
              },
              {
                n: 4,
                title: "Calling upon Allah in supplication (dua)",
                body: "Ask Allah to grant a share of fear of Him that keeps one from sin, and to enable one to fear Him in private and in public.",
                blocks: [
                  {
                    kind: "hadith",
                    text: "Allahumma iqsim lana min khashyatika ma yahulu baynana wa bayna ma‘aseeka — O Allah, grant us a share of fear of You that will prevent us from committing sin.",
                    ref: "at-Tirmidhi; classed as hasan by al-Albani",
                  },
                  {
                    kind: "hadith",
                    text: "Allahumma wa as’aluka khashyataka fi’l-ghaybi wa’sh-shahadah — O Allah, I ask You to enable me to fear You in private and in public.",
                    ref: "an-Nasa’i; classed as sahih by al-Albani",
                  },
                ],
              },
              {
                n: 5,
                title: "Remembering Allah a great deal (dhikr)",
                body: "Heedlessness hardens the heart, and the heart of the heedless person will continue to harden little by little, because of the stain that covers it, until his heart becomes sealed and no rebuke or exhortation will affect it.",
                blocks: [
                  {
                    kind: "ayah",
                    text: "And do not obey one whose heart We have made heedless of Our remembrance and who follows his desire and whose affair is ever [in] neglect.",
                    ref: "al-Kahf 18:28",
                  },
                ],
              },
              {
                n: 6,
                title: "Keeping away from things that make one feel safe from the plan of Allah",
                body: "There are impediments that prevent one from developing fear of Him, such as sins, love of this world and its adornments, bad company, heedlessness, becoming desensitized to sin, procrastination, and so on.",
              },
            ],
          },
        ],
      },
      {
        id: "khawf-activities",
        title: "Activities — fear of Allah",
        icon: "26",
        sections: [
          {
            type: "activities",
            title: "Activities",
            items: [
              "What are the means of developing fear of Allah ﷻ?",
              "Why are the scholars and those who have knowledge the people who fear Allah ﷻ the most?",
              "Write an essay listing examples of ways in which the early generations (the salaf) feared Allah ﷻ.",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "unit-5",
    num: 5,
    title: "Raja (hope)",
    titleAr: "الرجاء",
    lessons: [
      {
        id: "raja",
        title: "The meaning of hope (raja)",
        icon: "27",
        sections: [
          {
            type: "heading",
            kicker: "A deed of the heart",
            title: "Hope (raja)",
          },
          {
            type: "intro",
            text: "Hope is inspiration that energizes a person in his journey towards Allah. It makes the journey to Him enjoyable, urges the person to continue and helps him to stay the course. Were it not for hope, no one would start this journey, for fear alone does not motivate a person; rather what motivates him is love, what alarms him is fear and what inspires him is hope.",
          },
          {
            type: "split",
            items: [
              {
                label: "In linguistic terms",
                body: "The word raja means hope and expectation.",
              },
              {
                label: "In Islamic terminology",
                body: "It refers to the connection with Allah that raises a person’s hope of attaining Allah’s bounty and pleasure in this world and the Hereafter.",
              },
            ],
          },
          {
            type: "ayah",
            text: "You see them bowing and prostrating [in prayer], seeking [and hoping for] bounty from Allah and [His] pleasure.",
            ref: "al-Fath 48:29",
          },
          {
            type: "definition",
            label: "The opposite of hope is despair",
            body: "No one despairs of relief from Allah except the disbelieving people.",
          },
          {
            type: "ayah",
            text: "And despair not of relief from Allah. Indeed, no one despairs of relief from Allah except the disbelieving people.",
            ref: "Yusuf 12:87",
          },
          {
            type: "heading",
            title: "The one who is striving in his journey towards his Lord should bear in mind two things",
          },
          {
            type: "conditions",
            items: [
              {
                n: 1,
                title: "His faults and bad deeds",
                body: "He should think of himself and his faults and bad deeds, and that will create fear in him.",
              },
              {
                n: 2,
                title: "The vastness of Allah’s mercy",
                body: "He should think of the vastness of Allah’s mercy and grace, and that will create hope in him.",
              },
            ],
          },
        ],
      },
      {
        id: "raja-true",
        title: "Hope and wishful thinking",
        icon: "28",
        sections: [
          {
            type: "heading",
            kicker: "Not the same thing",
            title: "The difference between hope and wishful thinking",
          },
          {
            type: "pair",
            items: [
              {
                title: "Wishful thinking",
                body: "With wishful thinking comes laziness, and it does not prompt a person to strive hard. The one who hopes for mercy and forgiveness without obedience or repentance is engaging in wishful thinking, and his hope is false.",
                tone: "a",
              },
              {
                title: "True hope",
                body: "With hope comes striving and putting one’s trust in Allah in the best manner. The one who strives to obey Allah and hopes for His reward, or repents from sin and hopes for His forgiveness, is the one who truly has hope.",
                tone: "affirmation",
              },
            ],
          },
          {
            type: "note",
            tone: "warning",
            title: "Al-Hasan رحمه الله said",
            body: "There are people who were distracted by their wishful thinking until they departed from this world without having done any good deeds. One of them says: I think positively of my Lord, but he is lying. If he truly thought positively of his Lord, he would do righteous deeds.",
          },
        ],
      },
      {
        id: "raja-outcomes",
        title: "Outcomes and means of hope",
        icon: "29",
        sections: [
          {
            type: "heading",
            kicker: "What hope produces",
            title: "Outcomes of hope",
          },
          {
            type: "cards",
            items: [
              {
                title: "Remembrance, dua, and worship",
                body: "Hope causes the Muslim to frequently remember Allah ﷻ, call upon Him, and to acknowledge his desperate need for Him and for His immense bounty and generosity. The more hope he has, the more he will do acts of worship and persist in them.",
              },
              {
                title: "Contentment with the decree",
                body: "Hope makes the Muslim content with the decree of Allah and expect that Allah will have mercy on him, pardon him and help him to recover from any slips.",
              },
              {
                title: "Persistence in worship",
                body: "Hope makes the Muslim persist in doing acts of worship, regardless of how circumstances change.",
              },
              {
                title: "Saved from the wrath of Allah",
                body: "Hope saves a person from the wrath of Allah, for the one who has hope persists in asking of Allah ﷻ.",
              },
            ],
          },
          {
            type: "ayah",
            text: "Indeed the one who does not ask of Allah, He will be angry with him.",
            ref: "at-Tirmidhi; classed as sahih by al-Albani",
          },
          {
            type: "heading",
            title: "Means of developing hope",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "Remembering the blessings of Allah ﷻ.",
              "Remembering how Allah has previously bestowed blessings upon a person.",
              "Remembering Allah’s promise of great reward and His immense generosity.",
              "Remembering the vastness of Allah’s mercy, for His mercy precedes His wrath.",
              "Learning and understanding the beautiful names and sublime attributes of Allah that are connected to hope.",
            ],
          },
        ],
      },
      {
        id: "raja-balance",
        title: "Between fear and hope",
        icon: "30",
        sections: [
          {
            type: "heading",
            kicker: "Neither one without the other",
            title: "The believer should always be between fear and hope",
          },
          {
            type: "intro",
            text: "Al-Ayni said: In this regard, two groups went astray. One group gave precedence to hope and exaggerated about it, and another group gave precedence to fear and exaggerated about it. The way of the followers of truth, Ahl as-Sunnah wa’l-Jama‘ah, is to combine both fear and hope in equal measure.",
          },
          {
            type: "note",
            tone: "benefit",
            title: "Ibn Taymiyyah رحمه الله said",
            body: "Fear of Allah should always be accompanied by hope. Were it not for that, one would despair of His mercy. By the same token, hope should always be accompanied by fear, otherwise one would become complacent. In order to achieve a high level of worship, one should combine both fear and hope. Whoever does that, Allah’s mercy will be close to him.",
          },
          {
            type: "intro",
            text: "One of the practices that help one to attain that is bringing to mind both the reward and punishment.",
          },
          {
            type: "ayah",
            text: "If the believer knew what there is with Allah of punishment, no one would ever hope for His Paradise, and if the disbeliever knew what there is with Allah of mercy, no one would ever despair of His Paradise.",
            ref: "Abu Hurayrah رضي الله عنه — al-Bukhari and Muslim",
          },
          {
            type: "ayah",
            text: "Paradise is closer to one of you than the strap of his sandal, and the Fire is equally close.",
            ref: "Ibn Mas‘ud رضي الله عنه — al-Bukhari",
          },
          {
            type: "definition",
            label: "Both at the same time",
            body: "This dictates that one should have both fear and hope at the same time, and one should not make one of them supersede the other.",
          },
          {
            type: "note",
            tone: "warning",
            title: "The scholars said",
            body: "Whoever worships Allah on the basis of love alone is a heretic; whoever worships Allah on the basis of fear alone is a Haroori (i.e., a Khariji); whoever worships Allah on the basis of hope alone is a Murji; whoever worships Allah on the basis of love and fear and hope is a believer who affirms the oneness of Allah.",
          },
          {
            type: "note",
            tone: "info",
            title: "What motivates good deeds",
            body: "Based on that, what motivates one to do good deeds is three things: love, fear and hope. Whoever loves Allah will obey Him; whoever fears Allah will obey Him; whoever hopes for the reward of Allah will obey Him. Perfection means combining these three, so a person obeys Allah out of love for Him, out of fear of Him, and out of hope for His reward and grace.",
          },
          {
            type: "intro",
            text: "But there are some cases in which it is appropriate to give precedence to hope and other cases in which it is appropriate to give precedence to fear.",
          },
        ],
      },
      {
        id: "raja-precedence",
        title: "When hope or fear takes precedence",
        icon: "31",
        sections: [
          {
            type: "heading",
            kicker: "Not always in equal measure",
            title: "When it is appropriate to give precedence to hope over fear",
          },
          {
            type: "list",
            ordered: true,
            items: [
              {
                title: "When one is dying",
                body: "This is mentioned in the hadith of Jabir رضي الله عنه, who said: I heard the Prophet ﷺ say, three days before he died: “No one of you should die except when he is thinking positively of Allah.” (Muslim.) Hence one of the early generations instructed his sons, when he was dying, to recite to him the verses that speak of mercy, so that his soul would depart when he was thinking positively of Allah ﷻ, hoping that Allah would forgive him, have mercy on him and accept him.",
              },
              {
                title: "When someone despairs of the mercy of Allah because of his sins",
                body: "Hope is given precedence so that he does not fall into despair, which is the way of the disbelieving people.",
              },
            ],
          },
          {
            type: "heading",
            title: "When it is appropriate to give precedence to fear over hope",
          },
          {
            type: "conditions",
            items: [
              { n: 1, title: "Living a life of extreme ease and luxury", body: "Ease can make a person complacent, so fear is given precedence." },
              { n: 2, title: "Committing sin", body: "Fear of Allah motivates a person to keep away from sin and forbidden things." },
              { n: 3, title: "Feeling safe from the plan and punishment of Allah", body: "Feeling safe from Allah’s plan is a reason to restore fear." },
            ],
          },
          {
            type: "heading",
            title: "Fear, desire for Paradise, and hope are acts of worship",
          },
          {
            type: "intro",
            text: "Fear of Allah motivates a person to keep away from sin and forbidden things. Desire and hoping for Allah’s Paradise motivate a person to do righteous deeds and everything that pleases Allah ﷻ. Hence Allah ﷻ enjoins these acts of worship in one’s journey towards Him.",
          },
          {
            type: "ayah",
            text: "And invoke Him in fear and aspiration. Indeed, the mercy of Allah is near to the doers of good.",
            ref: "al-A‘raf 7:56",
          },
          {
            type: "ayah",
            text: "Indeed, they used to hasten to good deeds and supplicate Us in hope and fear, and they were to Us humbly submissive.",
            ref: "al-Anbiya 21:90",
          },
          {
            type: "note",
            tone: "info",
            title: "In other words",
            body: "They were hoping for His Paradise and fearing His punishment.",
          },
        ],
      },
      {
        id: "raja-texts",
        title: "Texts on fear and hope",
        icon: "32",
        sections: [
          {
            type: "heading",
            kicker: "Warning and glad tidings together",
            title: "Allah mentioned the warning and the glad tidings, fear and hope",
          },
          {
            type: "ayah",
            text: "[O Muhammad], inform My servants that it is I who am the Forgiving, the Merciful And that it is My punishment which is the painful punishment.",
            ref: "al-Hijr 15:49–50",
          },
          {
            type: "ayah",
            text: "Say, “Indeed I fear, if I should disobey my Lord, the punishment of a tremendous Day.”",
            ref: "al-An‘am 6:15",
          },
          {
            type: "intro",
            text: "The Prophet ﷺ constantly sought refuge with Allah from the Fire, and instructed every Muslim to do likewise in every prayer.",
          },
          {
            type: "ayah",
            text: "When one of you has finished reciting the final tashahhud, let him seek refuge with Allah from four things: from the punishment of Hell, from the punishment of the grave, from the trials of life and death, and from the evil of the Dajjal.",
            ref: "Abu Hurayrah رضي الله عنه — Muslim",
          },
          {
            type: "intro",
            text: "In fact, the Prophet ﷺ instructed all the Muslims, after every adhan, to ask Allah for al-waseelah for him, which is a high station in Paradise.",
          },
          {
            type: "ayah",
            text: "When you hear the muadhdhin, then say something like he says, then send blessings on me, for whoever sends blessings on me, Allah will send blessings tenfold on him. Then ask Allah to grant me al-waseelah, for it is a status in Paradise that only one of the slaves of Allah will attain, and I hope that I will be the one. Whoever asks for al-waseelah for me will be granted intercession.",
            ref: "Abdullah ibn Amr ibn al-As رضي الله عنهما — Muslim",
          },
          {
            type: "note",
            tone: "benefit",
            title: "Paradise and the Fire in his dua",
            body: "The Prophet ﷺ always asked Allah, in his supplication, for Paradise and that which brings one closer to it of words and deeds, and he sought refuge with Allah from the Fire and that which brings one closer to it of words and deeds. Many texts of the Quran encourage the Muslim to seek Paradise and warn him about the Fire.",
          },
          {
            type: "heading",
            title: "The Sufi stance on fear and hope",
          },
          {
            type: "note",
            tone: "warning",
            title: "This statement is incorrect",
            body: "As for what some of them say — “We do not worship Allah out of fear of His Fire or out of hope for His Paradise; rather we worship Him out of love for Him” — this statement is incorrect and is contrary to the religious texts of the Quran and the sahih Sunnah. There is no contradiction between love of Allah and fear of His punishment and hope of His reward, because according to Ahl as-Sunnah, worship as prescribed in Islam is based on love and veneration; love leads to hope of His reward and veneration leads to fear of His punishment.",
          },
          {
            type: "note",
            tone: "info",
            title: "The Prophet ﷺ and his Companions",
            body: "The Prophet ﷺ used to ask Allah for Paradise and seek refuge with Him from Hell, and he taught his Companions رضي الله عنهم to do likewise. Thus the scholars and devoted worshippers learned that, generation after generation, and they never thought that this undermined their love for their Lord, may He be exalted, or their worship of Him.",
          },
        ],
      },
      {
        id: "raja-activities",
        title: "Activities — hope and fear",
        icon: "33",
        sections: [
          {
            type: "activities",
            title: "Activities",
            items: [
              "Hope and fear are two important aspects of servitude to Allah (ubudiyah). Speak about them. What is the attitude of the believer concerning them?",
              "From what you have studied, write an essay speaking about the Sufi way of worshipping Allah ﷻ, and refute them.",
              "Other than what is quoted above, quote some texts from the Quran and Sunnah that mention fear and hope together.",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "unit-6",
    num: 6,
    title: "Love and other deeds",
    titleAr: "سائر أعمال القلوب",
    lessons: [
      {
        id: "mahabbah",
        title: "Love (mahabbah)",
        icon: "34",
        draft: true,
        sections: comingSoon("Love of Allah"),
      },
      {
        id: "sabr",
        title: "Patience (sabr)",
        icon: "35",
        draft: true,
        sections: comingSoon("Patience and perseverance"),
      },
      {
        id: "shukr",
        title: "Gratitude (shukr)",
        icon: "36",
        draft: true,
        sections: comingSoon("Gratitude to Allah"),
      },
      {
        id: "wara",
        title: "Piety (wara‘)",
        icon: "37",
        draft: true,
        sections: comingSoon("Wara‘ — piety and scrupulousness"),
      },
      {
        id: "rida",
        title: "Contentment (rida)",
        icon: "38",
        draft: true,
        sections: comingSoon("Contentment with Allah, Islam, and His Prophet ﷺ"),
      },
      {
        id: "tafakkur",
        title: "Contemplation (tafakkur)",
        icon: "39",
        draft: true,
        sections: comingSoon("Contemplation and reflection"),
      },
      {
        id: "muhasabah",
        title: "Taking stock of oneself (muhasabah)",
        icon: "40",
        draft: true,
        sections: comingSoon("Muhasabah — taking stock of oneself"),
      },
      {
        id: "tawakkul",
        title: "Trust in Allah (tawakkul)",
        icon: "41",
        draft: true,
        sections: comingSoon("Tawakkul — reliance upon Allah"),
      },
    ],
  },
  {
    id: "practice",
    title: "Practice",
    lessons: [
      { id: "flashcards", title: "Flashcards", icon: "🃏", kind: "tool", badge: "108" },
      { id: "quiz", title: "Knowledge Quiz", icon: "✏️", kind: "tool", badge: "74" },
    ],
  },
];

export const TARBIYAH2_LESSONS = TARBIYAH2_UNITS.flatMap((unit) =>
  unit.lessons.map((lesson) => ({
    ...lesson,
    unitId: unit.id,
    unitNum: unit.num,
    unitTitle: unit.title,
    unitTitleAr: unit.titleAr,
  })),
);

export const TARBIYAH2_STUDY_UNITS = TARBIYAH2_UNITS.filter((unit) => unit.id !== "practice");
export const TARBIYAH2_STUDY_LESSONS = TARBIYAH2_LESSONS.filter((lesson) => lesson.kind !== "tool");

export const TARBIYAH2_TOPICS = [
  { id: "all", label: "All topics" },
  { id: "heart", label: "Deeds of the heart" },
  { id: "ikhlas", label: "Sincerity (ikhlas)" },
  { id: "niyyah", label: "Intention (niyyah)" },
  { id: "riya", label: "Showing off (riya)" },
  { id: "taqwa", label: "Mindfulness of Allah (taqwa)" },
  { id: "khawf", label: "Fear (khawf)" },
  { id: "raja", label: "Hope (raja)" },
];

export const TARBIYAH2_FLASHCARDS = [
  {
    t: "heart",
    q: "Why do the deeds of the heart matter?",
    a: "They form the basis of everything else, and they are the criteria for the acceptance or rejection of deeds.",
  },
  {
    t: "heart",
    q: "Why did some major Islamic projects fail after they grew strong?",
    a: "Because of a lack of sincerity, showing off, and a lack of good intentions.",
  },
  {
    t: "heart",
    q: "What did Ibn Abi Jamrah رحمه الله wish scholars would teach?",
    a: "How to check the intention behind deeds, and classes on how to develop the correct intention and nothing else.",
  },
  {
    t: "heart",
    q: "After sincerity, what helps one engage in da‘wah?",
    a: "Putting one’s trust in Allah (tawakkul). It brings serenity, persistence, and taking the means of success.",
  },
  {
    t: "heart",
    q: "What did Ibn al-Qayyim رحمه الله say starts, alarms, and motivates the journey to Allah?",
    a: "Love makes a person start; fear alarms him; hope motivates him.",
  },
  {
    t: "heart",
    q: "When does hope in people become shirk?",
    a: "When one regards hope in Allah and hope in people as equal. Hope in people is then treated as equal to hope in Allah.",
  },
  {
    t: "heart",
    q: "Contentment that helps productivity is contentment with what three things?",
    a: "Allah, Islam, and His Prophet Muhammad ﷺ.",
  },
  {
    t: "heart",
    q: "What is one of the greatest obstacles to effort, productivity, persistence and excellence?",
    a: "The soul (nafs) that constantly prompts one to do evil.",
  },
  {
    t: "heart",
    q: "In times like the “days of patience,” what gift is described as greatest and most effective?",
    a: "Patience (sabr) — it overcomes obstacles and frees one from distractions.",
  },
  {
    t: "heart",
    q: "Name the twelve deeds of the heart studied in this course.",
    a: "Sincerity, mindfulness of Allah (taqwa), fear, hope, love, patience, gratitude, piety (wara‘), contentment, contemplation, taking stock of oneself, and trust in Allah.",
  },
  {
    t: "ikhlas",
    q: "What is sincerity in relation to worship?",
    a: "The essence and spirit of worship, and the criterion on the basis of which deeds are accepted or rejected.",
  },
  {
    t: "ikhlas",
    q: "Quote al-Bayyinah 98:5 on sincerity.",
    a: "“And they were not commanded except to worship Allah, [being] sincere to Him in religion.”",
  },
  {
    t: "ikhlas",
    q: "What is the linguistic meaning of ikhlas?",
    a: "Purity — something that has not been mixed with anything, as in “pure milk” (labanan khalisan) in an-Nahl 16:66.",
  },
  {
    t: "ikhlas",
    q: "How did Ibn al-Qayyim رحمه الله define ikhlas?",
    a: "Making one’s intentions, when doing an act of worship, purely for Allah Alone.",
  },
  {
    t: "ikhlas",
    q: "How did one of the scholars define sincerity?",
    a: "You do not want anyone to witness your deed except Allah, and you do not want anyone to reward you for it except Him.",
  },
  {
    t: "ikhlas",
    q: "Besides sincerity, what else is required for a deed to be accepted?",
    a: "It must be in accordance with the Quran and Sunnah.",
  },
  {
    t: "niyyah",
    q: "Why is the intention the basis and foundation of deeds?",
    a: "The individual will be rewarded or punished according to his intention, and he will be resurrected according to his intention.",
  },
  {
    t: "niyyah",
    q: "State the hadith of Umar رضي الله عنه on intentions.",
    a: "“Deeds are but by intentions, and each person will have but that which he intended.” Agreed upon.",
  },
  {
    t: "niyyah",
    q: "What did Yahya ibn Abi Katheer رحمه الله say about forming the right intention?",
    a: "“Learn how to form the right intention, for it is more important than the good deed.”",
  },
  {
    t: "ikhlas",
    q: "What did the Prophet ﷺ say about which deeds Allah accepts?",
    a: "“Allah does not accept any deed except that which is done sincerely for Him Alone, seeking His pleasure.” (an-Nasa’i; sahih)",
  },
  {
    t: "niyyah",
    q: "What did Ibn al-Mubarak رحمه الله say a small or major deed can become because of the intention?",
    a: "A small righteous deed may become like a major deed in reward because of the intention, and a major deed may become like a small deed because of the intention.",
  },
  {
    t: "niyyah",
    q: "What did Az-Zubayd al-Yami رحمه الله like to have even when eating and drinking?",
    a: "A sound intention in everything he did, even eating and drinking.",
  },
  {
    t: "niyyah",
    q: "What did the Prophet ﷺ say about those left behind in Madinah with valid excuses?",
    a: "“We never traversed any mountain path or valley but they were with us.” They share the reward.",
  },
  {
    t: "niyyah",
    q: "In the hadith of the four men, when are the man of wealth and the man without wealth equal in reward?",
    a: "When the one without wealth has knowledge and a sincere intention: “If I had what this man has, I would do what he has done.”",
  },
  {
    t: "ikhlas",
    q: "Which verses show that giving only for the countenance of Allah saves a person from the Fire?",
    a: "al-Layl 92:17–21 — the righteous one who gives to purify himself, not to be rewarded by people, seeking only the countenance of his Lord.",
  },
  {
    t: "ikhlas",
    q: "Who are the first three with whom the Fire will be stoked, according to the hadith of Abu Hurayrah?",
    a: "One who strove in jihad, one who learned and taught, and one who spent his wealth — each for showing off and acquiring a reputation.",
  },
  {
    t: "ikhlas",
    q: "What did Allah say in the hadith qudsi about associating a partner in a deed?",
    a: "“I am the least in need of having a partner. Whoever does a deed in which he associates someone else with Me, I will leave him to that which he associated with Me.” (Muslim)",
  },
  {
    t: "ikhlas",
    q: "Name three signs of sincerity.",
    a: "No desire for fame; concealing good deeds; what one does in secret is greater than what one does openly. Also: striving for Islam, patience without complaining.",
  },
  {
    t: "ikhlas",
    q: "What did Al-Fudayl رحمه الله say Allah wants from you?",
    a: "All that Allah wants from you is your intention and your purpose.",
  },
  {
    t: "ikhlas",
    q: "What should a person do if he thinks that he is sincere?",
    a: "He should be cautious and examine his sincerity — thinking one is sincere is itself a reason to check the heart.",
  },
  {
    t: "ikhlas",
    q: "What did Zayn al-Abideen Ali ibn al-Husayn رضي الله عنه do at night, and what was seen after he died?",
    a: "He carried bread and flour to the needy in the dead of night, sponsoring about one hundred families. After he died, they stopped receiving that food, and marks from the sacks were seen on his back.",
  },
  {
    t: "niyyah",
    q: "Does intending a permissible worldly benefit alongside seeking Allah’s pleasure invalidate a deed?",
    a: "No. It does not invalidate the deed, but it may detract from the reward according to how much the heart is focused on the worldly matter. The best is to intend only drawing closer to Allah, and regard the worldly benefit as secondary.",
  },
  {
    t: "niyyah",
    q: "Give three examples of a worldly intention alongside a deed for the Hereafter.",
    a: "Fasting for Allah and also for health; Hajj for Allah and also some trade; walking to the mosque for Allah and also for exercise. Jihad for Allah and also some booty to feed one’s family is another example.",
  },
  {
    t: "riya",
    q: "What is the linguistic root of riya, and what does it mean?",
    a: "It comes from ra’a (he saw). It means doing something in order to be seen by people.",
  },
  {
    t: "riya",
    q: "Riya is a characteristic of which group, and which verse describes their prayer?",
    a: "The hypocrites. an-Nisa 4:142: they stand for prayer lazily, showing themselves to the people, and remember Allah only a little.",
  },
  {
    t: "riya",
    q: "What did the Prophet ﷺ say he feared for the ummah more than the Dajjal?",
    a: "Hidden shirk: when a man prays and makes his prayer look beautiful because he realizes another man is watching him.",
  },
  {
    t: "riya",
    q: "What is minor shirk, and what will Allah say to those who showed off?",
    a: "Showing off. On the Day of Resurrection Allah will say: “Go to those to whom you used to show off in the first world, and see whether you find any reward with them.”",
  },
  {
    t: "riya",
    q: "If a person does a deed for himself and people then praise him, is that showing off?",
    a: "No. The Prophet ﷺ said that is a harbinger of glad tidings for the believer.",
  },
  {
    t: "riya",
    q: "Should a teacher stop teaching because he became famous?",
    a: "No. Fame without seeking fame is not riya. He should make his intention sound and continue teaching.",
  },
  {
    t: "riya",
    q: "Is concealing one’s sins a form of showing off?",
    a: "No. We are required to conceal our own faults and those of others. Thinking one must disclose sins in order to be sincere is a deception of Iblees.",
  },
  {
    t: "riya",
    q: "When the Sunnah of a deed is to conceal it, what should one do? Give an example.",
    a: "Conceal it — such as qiyam al-layl and khushu‘ in prayer.",
  },
  {
    t: "riya",
    q: "When the Sunnah of a deed is to do it openly, what should one do? Give an example.",
    a: "Do it openly — such as Jumu‘ah, congregational prayer, and speaking the truth openly.",
  },
  {
    t: "riya",
    q: "For voluntary charity, when should one conceal it and when should one give it openly?",
    a: "Conceal it if one fears riya entering the heart. Give it openly if one wants to set an example and can ward off the inclination to show off.",
  },
  {
    t: "taqwa",
    q: "What is the best of provisions for the Hereafter?",
    a: "Taqwa — mindfulness of Allah. al-Baqarah 2:197.",
  },
  {
    t: "taqwa",
    q: "Who is the noblest before Allah, according to al-Hujurat 49:13?",
    a: "The most mindful of Him among you (atqaakum).",
  },
  {
    t: "taqwa",
    q: "What is the linguistic meaning of taqwa, and how did Talq ibn Habib define it?",
    a: "Linguistically: protection. Islamically: obey Allah according to His guidance, hoping for His reward; refrain from disobedience according to His guidance, fearing His punishment.",
  },
  {
    t: "taqwa",
    q: "How did Ubay ibn Ka‘b explain taqwa to Umar?",
    a: "Like walking a path of thorns: he lifted his garment and walked very carefully. That is taqwa.",
  },
  {
    t: "taqwa",
    q: "How did Ibn Mas‘ud explain ittaqu Allaha haqqa tuqaatihi (Aal ‘Imran 3:102)?",
    a: "He should be obeyed and not disobeyed, remembered and not forgotten, and shown gratitude, not ingratitude.",
  },
  {
    t: "taqwa",
    q: "What did the Prophet ﷺ say to Abu Dharr about taqwa?",
    a: "Fear Allah and be mindful of Him wherever you are. Follow a bad deed with a good deed; it will erase it. And have a good attitude when dealing with people.",
  },
  {
    t: "taqwa",
    q: "How does one become a wali of Allah — and what is not proof of it?",
    a: "By righteous deeds according to Islamic teachings. Not by drums, innovations, flying, or walking on water.",
  },
  {
    t: "taqwa",
    q: "Is abandoning perfectly permissible things a form of taqwa?",
    a: "No. That is inappropriate and not worship. The person is wronging himself. There is no taqwa without knowledge.",
  },
  {
    t: "taqwa",
    q: "Name the three levels of taqwa in Fatir 35:32.",
    a: "The one who wrongs himself; the one who is moderate; the one who is foremost in good deeds by permission of Allah.",
  },
  {
    t: "taqwa",
    q: "Who is “the one who wrongs himself” among those who inherit the Book?",
    a: "He affirms Tawhid and the Messenger, and keeps the pillars, but is careless about some obligations and commits some prohibitions. He is under Allah’s will: pardon or punishment, then brought forth from the Fire.",
  },
  {
    t: "taqwa",
    q: "What did Ibn Mas‘ud narrate about sins people think little of?",
    a: "“Beware of sins of which people think little, for they may accumulate until they destroy a man.” (Ahmad; sahih)",
  },
  {
    t: "taqwa",
    q: "Who is “the one who is moderate”?",
    a: "He avoids everything that may be a cause of punishment in the Fire, even for a brief moment, but he does not compete to be foremost in doing good deeds.",
  },
  {
    t: "taqwa",
    q: "What does an-Nisa 4:31 promise those who avoid major sins?",
    a: "If you avoid the major sins which you are forbidden, We will remove from you your lesser sins.",
  },
  {
    t: "taqwa",
    q: "Who is “the foremost in doing good deeds,” and is he sinless?",
    a: "The best of the three levels: he does what is obligatory, avoids what is prohibited, and hastens to good deeds. It does not mean he never errs — “Every son of Adam is prone to error.”",
  },
  {
    t: "taqwa",
    q: "Quote an-Najm 53:32 on those who avoid major sins.",
    a: "“Those who avoid the major sins and immoralities, only [committing] slight ones. Indeed, your Lord is vast in forgiveness.”",
  },
  {
    t: "taqwa",
    q: "Name four characteristics of those who are mindful of Allah (al-muttaqun).",
    a: "Truthful in word and deed; honouring the symbols and rituals of Allah; fair and just even toward those they hate; following the path of the prophets and being with those who are true.",
  },
  {
    t: "taqwa",
    q: "Which verse links bringing the truth and believing in it to being muttaqun?",
    a: "az-Zumar 39:33 — those who brought the truth and believed in it are the ones who are mindful of Allah.",
  },
  {
    t: "taqwa",
    q: "What is meant by honouring the symbols of Allah (al-Hajj 22:32)?",
    a: "Respecting the sacred limits set by one’s Lord so as not to transgress them, and respecting His commands so as to follow them in the proper manner. Honouring them is from the taqwa of hearts.",
  },
  {
    t: "taqwa",
    q: "What does al-Ma’idah 5:8 say about justice and taqwa?",
    a: "Do not let hatred of a people prevent you from being just. Be just; that is nearer to taqwa.",
  },
  {
    t: "taqwa",
    q: "How does one ask Allah for taqwa of the soul?",
    a: "By frequently reciting: “Allahumma aati nafsi taqwaha wa zakkiha anta khayru man zakkaha” — O Allah, grant my soul mindfulness of You and purify it, for You are the best to purify it.",
  },
  {
    t: "taqwa",
    q: "What did Awn ibn Abdillah say is the key to mindfulness of Allah?",
    a: "Having good intentions.",
  },
  {
    t: "taqwa",
    q: "How does one rectify outward actions in order to attain taqwa?",
    a: "By making them in accordance with the Sunnah and teachings of the Prophet ﷺ.",
  },
  {
    t: "taqwa",
    q: "Besides dua, intention, and Sunnah, what other ways help one attain taqwa?",
    a: "Patience, taking stock of oneself, modesty (haya’), generosity, fasting, and only eating food from halal sources.",
  },
  {
    t: "taqwa",
    q: "Why did the Prophet ﷺ advise being mindful of Allah before everything one does?",
    a: "Taqwa combines all that is good (at-Tabarani). Abu Saeed: “I advise you to be mindful of Allah, for that should come before everything you do.”",
  },
  {
    t: "taqwa",
    q: "Name the nine greatest consequences of taqwa in this lesson.",
    a: "Paradise and salvation from the Fire; nobility before Allah; happiness in this world and the Hereafter; guidance, expiation and bounty; abundant provision; ease of affairs; barakah; protection, well-being, support and a good end; compensation with something better.",
  },
  {
    t: "taqwa",
    q: "On the Day of Resurrection, to whom will Allah limit His one hundred mercies?",
    a: "To those who were mindful of Him (al-muttaqun). He allocated one mercy to all creation in this world, then will bless the muttaqun with ninety-nine more.",
  },
  {
    t: "taqwa",
    q: "What does at-Talaq 65:2–3 promise the one who is mindful of Allah?",
    a: "He will make for him a way out, and will provide for him from where he does not expect.",
  },
  {
    t: "taqwa",
    q: "What did the Prophet ﷺ say about giving something up out of taqwa?",
    a: "“You will never give up anything out of fear and mindfulness of Allah but Allah will give you something better than it.” (Ahmad; sahih)",
  },
  {
    t: "taqwa",
    q: "Has the one who does some obligations and leaves some haram truly attained taqwa?",
    a: "No. Doing some obligatory actions and not others, and refraining from some forbidden things and not others, is not yet true taqwa. He must take stock of himself and adhere to mindfulness of Allah.",
  },
  {
    t: "khawf",
    q: "What does khawf mean in Arabic, and what is its opposite?",
    a: "Alarm and panic. It is the opposite of amn (safety, security).",
  },
  {
    t: "khawf",
    q: "How is khawf defined in Islamic terminology?",
    a: "Expecting something bad to happen, or expecting to miss out on something that one loves, on the basis of either conjecture or certainty. It may concern this world or the Hereafter.",
  },
  {
    t: "khawf",
    q: "How did Ibn Uthaymeen رحمه الله distinguish khashyah from khawf?",
    a: "Khashyah is stronger. It is khawf based on knowledge of the greatness of the One Whom you fear and of His perfect power and authority.",
  },
  {
    t: "khawf",
    q: "Who fears Allah, according to Fatir 35:28?",
    a: "Only those among His servants who have knowledge. Indeed, Allah is Exalted in Might and Forgiving.",
  },
  {
    t: "khawf",
    q: "Why is fearing Allah, to the exclusion of all others, a condition of faith?",
    a: "Allah commanded us to fear Him Alone. Aal ‘Imran 3:175: Satan frightens you of his supporters — so fear them not, but fear Me, if you are believers. al-Baqarah 2:40: fear only Me.",
  },
  {
    t: "khawf",
    q: "What did Al-Hasan رحمه الله say about the believer and the hypocrite?",
    a: "The believer combines good deeds and fear; the hypocrite combines bad deeds with a feeling of being secure.",
  },
  {
    t: "khawf",
    q: "What did the Prophet ﷺ say about his own fear of Allah?",
    a: "“I am the one among you who is most mindful of Allah and fears Him the most.” Al-Bukhari and Muslim.",
  },
  {
    t: "khawf",
    q: "Name the four categories of people with regard to fearing Allah.",
    a: "The foremost and closest to Allah; those who follow a middle course; the negligent who wrong themselves (still within Islam); those who go to extremes and fall into despair of Allah’s mercy.",
  },
  {
    t: "khawf",
    q: "Why is the fourth category — extreme fear leading to despair — a sin?",
    a: "It is not permissible for the believer to despair of the mercy of Allah. Intense fear that prompts despair is going to extremes.",
  },
  {
    t: "khawf",
    q: "Name the three types of fear (khawf) in this lesson.",
    a: "Fear of Allah’s wrath and of being deprived of His pleasure; fear of punishment in this world and the Hereafter; fear of missing out on reward.",
  },
  {
    t: "khawf",
    q: "What did Ali ibn Abi Talib رضي الله عنه say one should fear and hope in?",
    a: "A person should not fear anything but his sin, and should not put his hope in anything except his Lord.",
  },
  {
    t: "khawf",
    q: "What do the righteous fear more than anything, and why?",
    a: "Shirk. It renders all good deeds worthless, and the one who commits it is not forgiven, no matter how great his knowledge and worship. az-Zumar 39:65; al-An‘am 6:88.",
  },
  {
    t: "khawf",
    q: "Quote the hadith about fearing Allah in this world and security on the Day of Resurrection.",
    a: "“By My Glory, I shall not let My slave feel fear in two realms or feel secure in two realms. If he fears Me in the first world, I shall grant him security on the Day of Resurrection…” (Ibn Hibban; sahih).",
  },
  {
    t: "khawf",
    q: "Name the eight outcomes of fearing Allah in this lesson.",
    a: "Knowledge and insight; being foremost in good; power on earth; safety on the Day of Resurrection; being saved from the Fire; the pleasure of Allah; shade of the Throne; bliss in Paradise.",
  },
  {
    t: "khawf",
    q: "Name the six means of developing fear of Allah.",
    a: "Remembering His majesty and might; bringing to mind the standing before Him; listening to the Quran, hadiths, exhortation and khutbahs; dua; much dhikr; keeping away from things that make one feel safe from the plan of Allah.",
  },
  {
    t: "khawf",
    q: "Quote two duas of the Prophet ﷺ for fear of Allah.",
    a: "“Allahumma iqsim lana min khashyatika ma yahulu baynana wa bayna ma‘aseeka” (a share of fear that prevents sin). “Allahumma wa as’aluka khashyataka fi’l-ghaybi wa’sh-shahadah” (fear You in private and in public).",
  },
  {
    t: "khawf",
    q: "What impediments prevent developing fear of Allah?",
    a: "Sins, love of this world and its adornments, bad company, heedlessness, becoming desensitized to sin, procrastination, and the like — things that make one feel safe from the plan of Allah.",
  },
  {
    t: "khawf",
    q: "What did Ibn al-Qayyim رحمه الله say about the status of fear?",
    a: "It is one of the greatest stages on the road, and one of the most beneficial for spiritual well-being. It is obligatory for everyone.",
  },
  {
    t: "raja",
    q: "What does raja mean linguistically, and in Islamic terminology?",
    a: "Linguistically: hope and expectation. Islamically: the connection with Allah that raises a person’s hope of attaining Allah’s bounty and pleasure in this world and the Hereafter.",
  },
  {
    t: "raja",
    q: "If fear alarms the traveller and love makes him start, what does hope do?",
    a: "Hope inspires him. It energizes the journey, makes it enjoyable, urges him to continue, and helps him stay the course. Were it not for hope, no one would start, for fear alone does not motivate a person.",
  },
  {
    t: "raja",
    q: "What is the opposite of hope, according to Yusuf 12:87?",
    a: "Despair of relief from Allah. No one despairs of relief from Allah except the disbelieving people.",
  },
  {
    t: "raja",
    q: "What two things should the one striving towards his Lord bear in mind?",
    a: "His faults and bad deeds — that creates fear; and the vastness of Allah’s mercy and grace — that creates hope.",
  },
  {
    t: "raja",
    q: "What is the difference between true hope and wishful thinking?",
    a: "True hope comes with striving, tawakkul, obedience, and repentance. Wishful thinking comes with laziness and hoping for mercy without obedience or repentance — that hope is false.",
  },
  {
    t: "raja",
    q: "What did Al-Hasan رحمه الله say about those who claim they think positively of their Lord?",
    a: "If he truly thought positively of his Lord, he would do righteous deeds. Some were distracted by wishful thinking until they died without any good deeds. Saying “I think positively of my Lord” while not acting is lying.",
  },
  {
    t: "raja",
    q: "Name four outcomes of hope.",
    a: "Frequent dhikr, dua, and worship; contentment with the decree and expecting mercy; persistence in worship despite changing circumstances; being saved from Allah’s wrath by persisting in asking Him.",
  },
  {
    t: "raja",
    q: "What did the Prophet ﷺ say about the one who does not ask of Allah?",
    a: "“Indeed the one who does not ask of Allah, He will be angry with him.” (at-Tirmidhi; sahih)",
  },
  {
    t: "raja",
    q: "Name the five means of developing hope.",
    a: "Remembering Allah’s blessings; remembering past blessings He bestowed; remembering His promise of reward and generosity; remembering that His mercy precedes His wrath; learning His names and attributes connected to hope.",
  },
  {
    t: "raja",
    q: "What is the way of Ahl as-Sunnah regarding fear and hope?",
    a: "To combine both in equal measure. Those who exaggerate hope or exaggerate fear have gone astray (Al-Ayni).",
  },
  {
    t: "raja",
    q: "What did Ibn Taymiyyah رحمه الله say happens if fear is without hope, or hope without fear?",
    a: "Fear without hope leads to despair of mercy. Hope without fear leads to complacency. Combining both brings Allah’s mercy close and a high level of worship.",
  },
  {
    t: "raja",
    q: "Quote Ibn Mas‘ud’s hadith about how close Paradise and the Fire are.",
    a: "“Paradise is closer to one of you than the strap of his sandal, and the Fire is equally close.” (al-Bukhari)",
  },
  {
    t: "raja",
    q: "According to the scholars, who is the believer who affirms Tawhid in his worship?",
    a: "Whoever worships Allah on the basis of love, fear, and hope together. Love alone is heresy; fear alone is the way of the Harooris (Khawarij); hope alone is the way of the Murji’ah.",
  },
  {
    t: "raja",
    q: "When is it appropriate to give precedence to hope over fear?",
    a: "When one is dying — “No one of you should die except when he is thinking positively of Allah” (Jabir, Muslim) — and when someone despairs of Allah’s mercy because of his sins.",
  },
  {
    t: "raja",
    q: "When is it appropriate to give precedence to fear over hope?",
    a: "When living in extreme ease and luxury; when committing sin; and when feeling safe from the plan and punishment of Allah.",
  },
  {
    t: "raja",
    q: "What is wrong with the Sufi saying that they worship Allah out of love alone, not fear of the Fire or hope of Paradise?",
    a: "It is incorrect and contrary to the Quran and sahih Sunnah. Love leads to hope of reward; veneration leads to fear of punishment. The Prophet ﷺ asked for Paradise and sought refuge from Hell, and taught his Companions to do the same.",
  },
  {
    t: "raja",
    q: "From what four things did the Prophet ﷺ teach seeking refuge after the final tashahhud?",
    a: "The punishment of Hell, the punishment of the grave, the trials of life and death, and the evil of the Dajjal. (Muslim)",
  },
  {
    t: "raja",
    q: "What is al-waseelah, and what did the Prophet ﷺ hope regarding it?",
    a: "A high status in Paradise that only one of the slaves of Allah will attain. He hoped to be that one, and whoever asks it for him after the adhan will be granted intercession. (Muslim)",
  },
];

export const TARBIYAH2_QUIZ = [
  {
    t: "heart",
    q: "The deeds of the heart are described as:",
    opts: [
      "Optional extras after the limbs have acted",
      "The basis of everything else, and the criteria for acceptance or rejection of deeds",
      "Only useful for scholars",
      "A replacement for outward worship",
    ],
    ans: 1,
    fb: "They form the basis of everything else and are the criteria for whether deeds are accepted or rejected.",
  },
  {
    t: "heart",
    q: "Major Islamic projects that grew strong then failed did so because of:",
    opts: [
      "A lack of funding",
      "A lack of sincerity, showing off, and a lack of good intentions",
      "Too much knowledge",
      "Patience without action",
    ],
    ans: 1,
    fb: "The introduction traces the failure to a lack of sincerity, riya’, and a lack of good intentions.",
  },
  {
    t: "heart",
    q: "According to Ibn al-Qayyim, what motivates the believer on his journey towards Allah?",
    opts: ["Fear alone", "Hope", "Wealth", "People’s praise"],
    ans: 1,
    fb: "Love makes him start, fear alarms him, and hope motivates him. Fear alone does not motivate a person.",
  },
  {
    t: "heart",
    q: "Regarding hope in Allah and hope in people as equal is:",
    opts: [
      "A small mistake that does not harm tawhid",
      "Shirk, and a departure from the path of salvation",
      "Recommended for da‘wah",
      "The meaning of tawakkul",
    ],
    ans: 1,
    fb: "Once hope in Allah and hope in people are regarded as equal, one has fallen into shirk.",
  },
  {
    t: "heart",
    q: "Which three things should a person be content with?",
    opts: [
      "Wealth, health, and status",
      "Allah, Islam, and His Prophet Muhammad ﷺ",
      "Scholars, rulers, and family",
      "Hope, fear, and people",
    ],
    ans: 1,
    fb: "Contentment with Allah, Islam, and His Prophet ﷺ blesses one’s efforts and makes one more productive.",
  },
  {
    t: "ikhlas",
    q: "Sincerity is:",
    opts: [
      "A recommended extra after a deed is done",
      "The essence of worship and a condition of deeds being accepted",
      "Only required for prayer",
      "The same as following the Sunnah, with no need for intention",
    ],
    ans: 1,
    fb: "It is the essence and spirit of worship, and the criterion of acceptance or rejection. Allah enjoined it in many places, which shows it is obligatory.",
  },
  {
    t: "ikhlas",
    q: "al-Bayyinah 98:5 commands worship of Allah:",
    opts: [
      "In any way people invent",
      "Being sincere to Him in religion",
      "Only in Ramadan",
      "Together with seeking people’s praise",
    ],
    ans: 1,
    fb: "“They were not commanded except to worship Allah, [being] sincere to Him in religion.”",
  },
  {
    t: "ikhlas",
    q: "The linguistic image of ikhlas in an-Nahl 16:66 is:",
    opts: [
      "Mixed water",
      "Pure milk (labanan khalisan) that has not been mixed with blood or excretion",
      "Gold ore still in the rock",
      "A paved road",
    ],
    ans: 1,
    fb: "Words from the same root refer to something as pure if it has not been mixed with anything — like pure milk.",
  },
  {
    t: "ikhlas",
    q: "Ibn al-Qayyim defined ikhlas as:",
    opts: [
      "Doing many deeds in public",
      "Making one’s intentions, when doing an act of worship, purely for Allah Alone",
      "Avoiding all people",
      "Memorising the names of Allah without acting",
    ],
    ans: 1,
    fb: "Ikhlas is purifying the intention in worship for Allah Alone.",
  },
  {
    t: "niyyah",
    q: "The Prophet ﷺ said: “Deeds are but by intentions…” This was narrated from:",
    opts: ["Abu Hurayrah", "Umar ibn al-Khattab", "Anas ibn Malik", "Aisha"],
    ans: 1,
    fb: "Umar ibn al-Khattab رضي الله عنه — agreed upon by al-Bukhari and Muslim.",
  },
  {
    t: "niyyah",
    q: "Yahya ibn Abi Katheer said forming the right intention is:",
    opts: [
      "Less important than the deed itself",
      "More important than the good deed",
      "Only for the prophets",
      "Optional if the deed is large",
    ],
    ans: 1,
    fb: "“Learn how to form the right intention, for it is more important than the good deed.”",
  },
  {
    t: "ikhlas",
    q: "Allah does not accept any deed except that which is:",
    opts: [
      "Done in a large gathering",
      "Done sincerely for Him Alone, seeking His pleasure",
      "Done quickly",
      "Accompanied by a vow",
    ],
    ans: 1,
    fb: "Narrated by an-Nasa’i and classed as sahih by al-Albani.",
  },
  {
    t: "niyyah",
    q: "Ibn al-Mubarak said the intention can make:",
    opts: [
      "Only major deeds grow larger",
      "A small deed like a major deed, or a major deed like a small deed, in reward",
      "Every deed equal",
      "Intention irrelevant once the limbs move",
    ],
    ans: 1,
    fb: "Reward rises or falls with the intention, not only with the size of the outward deed.",
  },
  {
    t: "niyyah",
    q: "Those left behind in Madinah with valid excuses:",
    opts: [
      "Receive no reward",
      "Share the reward of those who went out",
      "Must make up the journey later",
      "Are blamed for staying behind",
    ],
    ans: 1,
    fb: "“We never traversed any mountain path or valley but they were with us.” Muslim: they will share the reward.",
  },
  {
    t: "niyyah",
    q: "In the hadith of the four men, the one with knowledge but no wealth is equal in reward to the one who spends if:",
    opts: [
      "He criticises the rich man",
      "He sincerely intends that he would do the same if he had that wealth",
      "He asks people for money",
      "He abandons knowledge",
    ],
    ans: 1,
    fb: "Abu Kabshah al-Anmari: “They will both be equal in reward.”",
  },
  {
    t: "ikhlas",
    q: "The first three with whom the Fire will be stoked include the mujahid, the scholar/teacher, and the one who spent — when they acted:",
    opts: [
      "Sincerely but made a small mistake",
      "For showing off and acquiring a reputation",
      "Without knowledge of fiqh",
      "Only in secret",
    ],
    ans: 1,
    fb: "Great deeds mixed with riya’ become a cause of ruin. The hadith is in at-Tirmidhi, classed as hasan.",
  },
  {
    t: "ikhlas",
    q: "In the hadith qudsi, Allah says He is the least in need of a partner. The result of associating someone in a deed is:",
    opts: [
      "The deed is still accepted at half reward",
      "Allah leaves the person to that which he associated with Him — the deed is not accepted",
      "Only the intention is blamed, not the deed",
      "It is disliked but rewarded",
    ],
    ans: 1,
    fb: "Muslim, from Abu Hurayrah رضي الله عنه. Shirk in intention voids the deed.",
  },
  {
    t: "ikhlas",
    q: "A sign of sincerity is that:",
    opts: [
      "What one does openly is greater than what one does in secret",
      "What one does in secret is greater than what one does openly",
      "One loves to be praised for every deed",
      "One delays good deeds until people are watching",
    ],
    ans: 1,
    fb: "The signs include concealing good deeds and doing much in secret, away from people’s gaze.",
  },
  {
    t: "heart",
    q: "Sincerity is described in this course as:",
    opts: [
      "One optional deed among many",
      "The core of deeds and the key to their acceptance",
      "The same as taqwa",
      "Only for those who teach",
    ],
    ans: 1,
    fb: "This semester begins with sincerity because it is the core of deeds and the key to their acceptance.",
  },
  {
    t: "heart",
    q: "Which of the following is not one of the twelve deeds of the heart in this book?",
    opts: ["Ikhlas", "Tawakkul", "Muhasabah", "I‘rab"],
    ans: 3,
    fb: "The twelve are ikhlas, taqwa, khawf, raja, mahabbah, sabr, shukr, wara‘, rida, tafakkur, muhasabah, and tawakkul.",
  },
  {
    t: "ikhlas",
    q: "Al-Fudayl رحمه الله said that all Allah wants from you is:",
    opts: [
      "A large number of public deeds",
      "Your intention and your purpose",
      "People’s praise",
      "Leaving all worldly means",
    ],
    ans: 1,
    fb: "“All that Allah wants from you is your intention and your purpose.”",
  },
  {
    t: "niyyah",
    q: "Intending a permissible worldly benefit alongside seeking Allah’s pleasure:",
    opts: [
      "Always invalidates the deed",
      "Does not invalidate the deed, but may reduce the reward; the worldly benefit should be secondary",
      "Makes the deed better than a purely Hereafter intention",
      "Is major shirk",
    ],
    ans: 1,
    fb: "Fasting for Allah and also for health, Hajj with some trade, and similar cases do not void the deed. Reward may fall according to how much the heart is attached to the worldly matter.",
  },
  {
    t: "riya",
    q: "Riya comes from the root ra’a and means:",
    opts: [
      "Hoping in Allah",
      "Doing something in order to be seen by people",
      "Concealing charity",
      "Looking after one’s appearance",
    ],
    ans: 1,
    fb: "Riya is showing off: acting so that people will see you.",
  },
  {
    t: "riya",
    q: "The Prophet ﷺ said he feared for his ummah, more than the Dajjal:",
    opts: [
      "Poverty",
      "Hidden shirk — beautifying the prayer because someone is watching",
      "Leaving Jumu‘ah",
      "Wearing nice clothes",
    ],
    ans: 1,
    fb: "Abu Saeed رضي الله عنه in Ibn Majah, classed as hasan by al-Albani.",
  },
  {
    t: "riya",
    q: "Minor shirk, in the hadith, is:",
    opts: [
      "Swearing by other than Allah only",
      "Showing off — and those who did it will be sent to those they showed off for, to see if they find any reward with them",
      "Concealing qiyam al-layl",
      "Teaching until one becomes known",
    ],
    ans: 1,
    fb: "Ahmad; classed as hasan by al-Arna’ut. Allah will say: go to those you used to show off for in the first world.",
  },
  {
    t: "riya",
    q: "A man does a deed for himself and people then love him for it. The Prophet ﷺ said this is:",
    opts: [
      "Showing off that ruins the deed",
      "A harbinger of glad tidings for the believer",
      "Minor shirk",
      "A reason to stop the deed",
    ],
    ans: 1,
    fb: "Ibn Hibban; the original report is in Sahih Muslim. Praise that comes after a sincere deed is not riya.",
  },
  {
    t: "riya",
    q: "Which of the following is not showing off?",
    opts: [
      "Beautifying the prayer because you know someone is watching",
      "Making sure clothes, shoes, and smell are pleasant",
      "Praying lazily to be seen by people, as the hypocrites do",
      "Spending in charity to acquire a reputation",
    ],
    ans: 1,
    fb: "Looking after one’s appearance is not regarded as showing off. Riya is acting in order to be seen.",
  },
  {
    t: "riya",
    q: "Some people think they must disclose their sins in order to be sincere. The book says:",
    opts: [
      "This is required for ikhlas",
      "This is inappropriate; concealing sins is required, and disclosing them is more akin to encouraging sin — a deception of Iblees",
      "Sins must be announced in Jumu‘ah",
      "Only major sins should be hidden",
    ],
    ans: 1,
    fb: "Concealing one’s own faults and those of others is from Islamic teaching, not from riya.",
  },
  {
    t: "riya",
    q: "Qiyam al-layl and khushu‘ are examples of deeds whose Sunnah is:",
    opts: [
      "To do them as publicly as possible",
      "To conceal them",
      "To livestream them so others copy",
      "To abandon them if anyone might see",
    ],
    ans: 1,
    fb: "When the Sunnah is to conceal a deed, it should be concealed.",
  },
  {
    t: "riya",
    q: "Voluntary charity that can be secret or open: if you fear riya, you should:",
    opts: [
      "Always give it in front of people to prove you are not afraid",
      "Conceal it",
      "Stop giving charity",
      "Tell people about your sins first",
    ],
    ans: 1,
    fb: "If you can set an example and ward off riya, it is Sunnah to give it openly. If you fear showing off, conceal it.",
  },
  {
    t: "taqwa",
    q: "What is the best of provisions, according to al-Baqarah 2:197?",
    opts: [
      "Wealth and food for the journey",
      "Mindfulness of Allah (taqwa)",
      "A large following",
      "Abandoning all permissible things",
    ],
    ans: 1,
    fb: "“Take provision for the journey, but the best of provisions is mindfulness of Allah.”",
  },
  {
    t: "taqwa",
    q: "The linguistic root meaning of taqwa is:",
    opts: ["Love", "Protection", "Hope", "Fame"],
    ans: 1,
    fb: "In linguistic terms, the root meaning of taqwa is protection.",
  },
  {
    t: "taqwa",
    q: "Talq ibn Habib defined taqwa as obedience and refraining from disobedience:",
    opts: [
      "In any way one feels, hoping people will praise him",
      "In accordance with the guidance of Allah, hoping for reward and fearing punishment",
      "By abandoning all permissible things",
      "By karamat such as walking on water",
    ],
    ans: 1,
    fb: "Obedience according to Allah’s guidance, hoping for His reward; avoiding disobedience according to His guidance, fearing His punishment.",
  },
  {
    t: "taqwa",
    q: "Ubay ibn Ka‘b compared taqwa to:",
    opts: [
      "Flying through the air",
      "Walking a path of thorns: lifting one’s garment and walking carefully",
      "Beating drums in dhikr",
      "Disclosing one’s sins",
    ],
    ans: 1,
    fb: "Umar asked him about taqwa. Walking carefully among thorns is the image of taqwa.",
  },
  {
    t: "taqwa",
    q: "Ibn Mas‘ud explained Aal ‘Imran 3:102 as: Allah should be:",
    opts: [
      "Obeyed not disobeyed, remembered not forgotten, thanked not met with ingratitude",
      "Feared only, never hoped in",
      "Worshipped by abandoning all halal",
      "Known through reason alone, without the Book",
    ],
    ans: 0,
    fb: "That is taqwa as Allah deserves it.",
  },
  {
    t: "taqwa",
    q: "Al-Qurtubi said the command to have taqwa in an-Nisa 4:131 is:",
    opts: [
      "Only for the Arabs",
      "Universal and addressed to all nations",
      "Only for scholars",
      "Abrogated",
    ],
    ans: 1,
    fb: "Allah instructed those given the Scripture before, and this ummah, to be mindful of Him.",
  },
  {
    t: "taqwa",
    q: "A wali of Allah is attained by:",
    opts: [
      "Karamat such as flying or walking on water",
      "Innovated drums and invented acts",
      "Righteous deeds in accordance with Islamic teachings",
      "Abandoning obligatory knowledge",
    ],
    ans: 2,
    fb: "Yunus 10:62–63 and the hadith qudsi in Bukhari: drawing closer by what Allah enjoined, then by supererogatory deeds.",
  },
  {
    t: "taqwa",
    q: "Refraining from perfectly permissible things, with no haram in them, on the grounds of taqwa is:",
    opts: [
      "The highest taqwa",
      "Inappropriate — it is not worship, and the person is wronging himself",
      "Required for every Muslim",
      "The meaning of Talq ibn Habib’s definition",
    ],
    ans: 1,
    fb: "There is no taqwa without knowledge. Depriving oneself of the merely permissible is not a kind of worship.",
  },
  {
    t: "taqwa",
    q: "The moderate person is the one who:",
    opts: [
      "Competes to be foremost in every extra good deed",
      "Avoids everything that may cause punishment in the Fire, even briefly, but does not compete to be foremost in good deeds",
      "Is careless about some obligations",
      "Never errs at all",
    ],
    ans: 1,
    fb: "an-Nisa 4:31: if you avoid the major sins, Allah will remove the lesser ones.",
  },
  {
    t: "taqwa",
    q: "The foremost in good deeds:",
    opts: [
      "Never commits even a slight error",
      "Does the obligatory, avoids the prohibited, and hastens to good deeds — yet every son of Adam is prone to error",
      "Is the same as the one who wrongs himself",
      "Abandons all permissible things",
    ],
    ans: 1,
    fb: "This is the best of the three levels in Fatir 35:32. an-Najm 53:32: they avoid major sins and immoralities, only committing slight ones; the Lord is vast in forgiveness.",
  },
  {
    t: "taqwa",
    q: "Honouring the symbols of Allah means:",
    opts: [
      "Inventing extra rituals",
      "Respecting the sacred limits so as not to transgress them, and following His commands in the proper manner",
      "Abandoning all permissible things",
      "Only decorating the mosque",
    ],
    ans: 1,
    fb: "al-Hajj 22:32: whoever honours the symbols of Allah — indeed it is from the taqwa of hearts.",
  },
  {
    t: "taqwa",
    q: "al-Ma’idah 5:8 teaches that justice is nearer to taqwa even when:",
    opts: [
      "You love the people you judge",
      "You hate a people — hatred must not prevent you from being just",
      "There is no disagreement",
      "The matter is only worldly",
    ],
    ans: 1,
    fb: "“Do not let the hatred of a people prevent you from being just. Be just; that is nearer to taqwa.”",
  },
  {
    t: "taqwa",
    q: "Awn ibn Abdillah said the key to mindfulness of Allah is:",
    opts: [
      "Many public deeds",
      "Having good intentions",
      "Abandoning the Sunnah",
      "People’s praise",
    ],
    ans: 1,
    fb: "Rectify the heart with good intention, and the outward with the Sunnah.",
  },
  {
    t: "taqwa",
    q: "The dua “Allahumma aati nafsi taqwaha wa zakkiha…” asks Allah to:",
    opts: [
      "Grant the soul mindfulness of Him and purify it",
      "Give wealth only",
      "Make one famous",
      "Remove all permissible things",
    ],
    ans: 0,
    fb: "O Allah, grant my soul mindfulness of You and purify it, for You are the best to purify it.",
  },
  {
    t: "taqwa",
    q: "at-Talaq 65:2–3 promises the one with taqwa:",
    opts: [
      "A way out, and provision from where he does not expect",
      "That he will never face hardship",
      "Immediate Paradise with no accountability",
      "That people will always praise him",
    ],
    ans: 0,
    fb: "Whoever is mindful of Allah — He will make for him a way out, and will provide for him from where he does not expect. 65:4: He will make his matter easy.",
  },
  {
    t: "taqwa",
    q: "On the Day of Resurrection, Allah will limit His one hundred mercies to:",
    opts: [
      "All of creation equally",
      "Those who were mindful of Him (al-muttaqun), blessing them with ninety-nine more after one mercy was shared in this world",
      "Only the prophets",
      "Those who abandoned all permissible things",
    ],
    ans: 1,
    fb: "One mercy was shared among all creation in this world; ninety-nine more will be for the muttaqun.",
  },
  {
    t: "taqwa",
    q: "“You will never give up anything out of fear and mindfulness of Allah but Allah will give you something better than it.” This was narrated from:",
    opts: [
      "Abu Qatadah and Abu’d-Dahma — Ahmad; classed as sahih",
      "Only al-Bukhari",
      "Umar ibn al-Khattab alone",
      "It is not a hadith",
    ],
    ans: 0,
    fb: "Whatever one gives up out of taqwa, Allah replaces with something better.",
  },
  {
    t: "taqwa",
    q: "The one who does some obligatory actions and not others, and leaves some haram but not all:",
    opts: [
      "Has fully attained taqwa and should wait for its fruits without checking himself",
      "Has not yet attained true taqwa; he must take stock of himself and adhere to mindfulness of Allah",
      "Is the foremost in good deeds",
      "Is a wali by karamat",
    ],
    ans: 1,
    fb: "One who wants to hasten Allah’s promise should first check whether he has truly attained taqwa.",
  },
  {
    t: "taqwa",
    q: "az-Zumar 39:33 describes the muttaqun as:",
    opts: [
      "Those who brought the truth and believed in it",
      "Those who show off their deeds",
      "Those who abandon all permissible things",
      "Those who never need forgiveness",
    ],
    ans: 0,
    fb: "Striving to be truthful in word and deed is a mark of those who are mindful of Allah.",
  },
  {
    t: "taqwa",
    q: "Abu Bakr رضي الله عنه told Umar, when appointing him, that the one who is mindful of Allah is:",
    opts: [
      "Safe and protected",
      "Free from all difficulty in ruling",
      "Not in need of obedience",
      "Above taking advice",
    ],
    ans: 0,
    fb: "Fear Allah by obeying Him, and obey Him by being mindful of Him — the muttaqi is safe and protected (al-A‘raf 7:128: the best outcome is for those mindful of Allah).",
  },
  {
    t: "khawf",
    q: "In Islamic terminology, khawf is:",
    opts: [
      "Only panic about worldly danger",
      "Expecting something bad, or missing out on something one loves, based on conjecture or certainty",
      "The same as despair of Allah’s mercy",
      "The opposite of hope in the Lord",
    ],
    ans: 1,
    fb: "In Arabic it means alarm and panic, the opposite of amn. It may concern this world or the Hereafter.",
  },
  {
    t: "khawf",
    q: "Ibn Uthaymeen رحمه الله said khashyah is:",
    opts: [
      "Weaker than khawf",
      "Khawf based on knowledge of the greatness of the One you fear and of His perfect power and authority",
      "Fear of people",
      "Despair of mercy",
    ],
    ans: 1,
    fb: "Khashyah has a stronger meaning than khawf.",
  },
  {
    t: "khawf",
    q: "Fatir 35:28 teaches that those who fear Allah, among His servants, are:",
    opts: [
      "Only the angels",
      "Those who have knowledge",
      "Those who feel secure in their sins",
      "Those who abandon all permissible things",
    ],
    ans: 1,
    fb: "This is why scholars and people of knowledge fear Allah the most. “Indeed, Allah is Exalted in Might and Forgiving.”",
  },
  {
    t: "khawf",
    q: "Fearing Allah, to the exclusion of all others, is:",
    opts: [
      "A recommended extra",
      "One of the conditions of faith",
      "Only for the prophets",
      "The same as fearing Satan’s supporters",
    ],
    ans: 1,
    fb: "Aal ‘Imran 3:175: fear them not, but fear Me, if you are believers. Without fear of Allah, faith is not valid.",
  },
  {
    t: "khawf",
    q: "Al-Hasan رحمه الله said the hypocrite combines:",
    opts: [
      "Good deeds and fear",
      "Bad deeds with a feeling of being secure",
      "Hope and patience only",
      "Knowledge without action",
    ],
    ans: 1,
    fb: "The believer combines good deeds and fear; the hypocrite feels secure while doing bad deeds.",
  },
  {
    t: "khawf",
    q: "The fourth category of people regarding fear of Allah is those who:",
    opts: [
      "Hasten to obligatory and supererogatory deeds",
      "Follow a middle course",
      "Go to extremes until they despair of Allah’s mercy — which is not permissible",
      "Never feel any fear",
    ],
    ans: 2,
    fb: "Intense fear that leads to despair is a sin. The believer must not despair of the mercy of Allah.",
  },
  {
    t: "khawf",
    q: "There is nothing the righteous fear more than:",
    opts: [
      "Poverty",
      "Shirk — because it renders all good deeds worthless and is not forgiven",
      "People’s criticism",
      "Abandoning the merely permissible",
    ],
    ans: 1,
    fb: "az-Zumar 39:65: if you associate anything with Allah, your work would surely become worthless. al-An‘am 6:88 is similar regarding the prophets.",
  },
  {
    t: "khawf",
    q: "If a slave fears Allah in the first world, Allah will:",
    opts: [
      "Cause him to feel fear on the Day of Resurrection as well",
      "Grant him security on the Day of Resurrection",
      "Remove all tests in this world",
      "Make him never need repentance",
    ],
    ans: 1,
    fb: "Hadith qudsi via Abu Hurayrah, Ibn Hibban: Allah will not let His slave feel fear in two realms or feel secure in two realms.",
  },
  {
    t: "khawf",
    q: "“No man will enter the Fire who weeps out of fear of Allah, until…”",
    opts: [
      "He has prayed Tahajjud for a year",
      "The milk goes back into the udder",
      "People praise him",
      "He abandons all worldly means",
    ],
    ans: 1,
    fb: "Abu Hurayrah رضي الله عنه — at-Tirmidhi; classed as sahih by al-Albani.",
  },
  {
    t: "khawf",
    q: "Among the seven whom Allah will shade is a man pursued by a woman of status and beauty who said:",
    opts: [
      "“I fear people”",
      "“I fear Allah”",
      "“I have no desire”",
      "“Leave me until later”",
    ],
    ans: 1,
    fb: "Agreed upon. That is one of the outcomes of fearing Allah: shade of the Throne.",
  },
  {
    t: "khawf",
    q: "Which of the following is a means of developing fear of Allah?",
    opts: [
      "Feeling safe from the plan of Allah",
      "Remembering His majesty, bringing to mind the standing before Him, listening to the Quran, dua, dhikr, and avoiding impediments",
      "Despairing of His mercy",
      "Keeping only bad company",
    ],
    ans: 1,
    fb: "Impediments include sins, love of this world, bad company, heedlessness, becoming desensitized to sin, and procrastination.",
  },
  {
    t: "khawf",
    q: "The dua “Allahumma iqsim lana min khashyatika ma yahulu baynana wa bayna ma‘aseeka” asks for:",
    opts: [
      "Fame among people",
      "A share of fear of Allah that will prevent one from committing sin",
      "Safety from all worldly hardship",
      "Knowledge without action",
    ],
    ans: 1,
    fb: "at-Tirmidhi; hasan. Another dua asks for fear of Allah in private and in public (an-Nasa’i).",
  },
  {
    t: "raja",
    q: "In Islamic terminology, raja is:",
    opts: [
      "Laziness while waiting for mercy without action",
      "The connection with Allah that raises hope of His bounty and pleasure in this world and the Hereafter",
      "Despair of relief from Allah",
      "Fear of people",
    ],
    ans: 1,
    fb: "Linguistically raja means hope and expectation. Its opposite is despair (Yusuf 12:87).",
  },
  {
    t: "raja",
    q: "True hope, as opposed to wishful thinking, is found in the one who:",
    opts: [
      "Says “I think positively of my Lord” while doing no good deeds",
      "Strives to obey Allah and hopes for His reward, or repents and hopes for forgiveness",
      "Hopes for mercy without obedience or repentance",
      "Abandons worship because he feels secure",
    ],
    ans: 1,
    fb: "Al-Hasan: if he truly thought positively of his Lord, he would do righteous deeds. Wishful thinking produces laziness; hope produces striving and tawakkul.",
  },
  {
    t: "raja",
    q: "The one striving towards his Lord should think of his faults, which creates ____, and of Allah’s vast mercy, which creates ____.",
    opts: ["hope; fear", "fear; hope", "despair; complacency", "love; wishful thinking"],
    ans: 1,
    fb: "Both must be present: faults produce fear; mercy produces hope.",
  },
  {
    t: "raja",
    q: "“Indeed the one who does not ask of Allah, He will be angry with him.” This shows that hope:",
    opts: [
      "Makes dua unnecessary",
      "Saves a person from the wrath of Allah, because the one who has hope persists in asking",
      "Is the same as despair",
      "Is only for the dying",
    ],
    ans: 1,
    fb: "at-Tirmidhi; classed as sahih by al-Albani. Hope also leads to dhikr, worship, contentment with the decree, and persistence.",
  },
  {
    t: "raja",
    q: "Ahl as-Sunnah wa’l-Jama‘ah regarding fear and hope:",
    opts: [
      "Exaggerate hope and ignore fear",
      "Exaggerate fear and ignore hope",
      "Combine both fear and hope in equal measure",
      "Worship by love alone, with neither fear nor hope",
    ],
    ans: 2,
    fb: "Al-Ayni: the two groups that gave precedence to one and exaggerated it went astray.",
  },
  {
    t: "raja",
    q: "Whoever worships Allah on the basis of hope alone is described as:",
    opts: [
      "A believer who affirms Tawhid",
      "A Murji",
      "A Haroori (Khariji)",
      "A heretic who worships by love alone",
    ],
    ans: 1,
    fb: "Love alone: heretic. Fear alone: Haroori. Hope alone: Murji. Love, fear, and hope together: a believer who affirms the oneness of Allah.",
  },
  {
    t: "raja",
    q: "Three days before he died, the Prophet ﷺ said:",
    opts: [
      "Die while fearing only the Fire, with no hope",
      "No one of you should die except when he is thinking positively of Allah",
      "Abandon asking for Paradise",
      "Worship Allah by love alone",
    ],
    ans: 1,
    fb: "Jabir رضي الله عنه — Muslim. When dying, hope is given precedence. The early generations recited verses of mercy at that time.",
  },
  {
    t: "raja",
    q: "Fear is given precedence over hope when a person is:",
    opts: [
      "Dying",
      "In despair of Allah’s mercy because of his sins",
      "Living in extreme ease, committing sin, or feeling safe from Allah’s plan",
      "Asking for al-waseelah after the adhan",
    ],
    ans: 2,
    fb: "Hope is given precedence when dying or when someone is falling into despair.",
  },
  {
    t: "raja",
    q: "The Sufi claim that they worship Allah out of love only, not fear of the Fire or hope of Paradise, is:",
    opts: [
      "The peak of Tawhid",
      "Incorrect and contrary to the Quran and sahih Sunnah",
      "What the Prophet ﷺ taught his Companions",
      "Required so that love is not undermined",
    ],
    ans: 1,
    fb: "Worship is based on love and veneration. Love leads to hope of reward; veneration leads to fear of punishment. The Prophet ﷺ asked for Paradise and sought refuge from Hell.",
  },
  {
    t: "raja",
    q: "After the final tashahhud, one seeks refuge from:",
    opts: [
      "Poverty only",
      "The punishment of Hell, the grave, the trials of life and death, and the evil of the Dajjal",
      "People’s criticism",
      "All worldly means",
    ],
    ans: 1,
    fb: "Abu Hurayrah رضي الله عنه — Muslim. The Prophet ﷺ constantly sought refuge from the Fire and taught every Muslim to do so in every prayer.",
  },
  {
    t: "raja",
    q: "al-Hijr 15:49–50 mentions together:",
    opts: [
      "Only punishment",
      "That Allah is the Forgiving, the Merciful, and that His punishment is the painful punishment",
      "Only hope with no warning",
      "That despair is recommended",
    ],
    ans: 1,
    fb: "Allah mentioned the warning and the glad tidings, fear and hope, together. al-A‘raf 7:56 and al-Anbiya 21:90 likewise join fear and hope in dua.",
  },
  {
    t: "raja",
    q: "Al-waseelah is:",
    opts: [
      "A worldly rank",
      "A status in Paradise that only one slave of Allah will attain — the Prophet ﷺ hoped to be that one, and whoever asks it for him is granted intercession",
      "The same as despair",
      "A Sufi station of love without hope",
    ],
    ans: 1,
    fb: "Asked for after the adhan. Abdullah ibn Amr ibn al-As رضي الله عنهما — Muslim.",
  },
];

export function getTarbiyah2Lesson(id) {
  return TARBIYAH2_LESSONS.find((lesson) => lesson.id === id);
}

export function tarbiyah2CoursePath() {
  return TARBIYAH2_META.path;
}

export function tarbiyah2StudyPath(lessonId) {
  const base = `${TARBIYAH2_META.path}/study`;
  return lessonId ? `${base}?lesson=${encodeURIComponent(lessonId)}` : base;
}

export function tarbiyah2Banner() {
  return {
    code: "Islamic Education · Self-paced",
    title: TARBIYAH2_META.name,
    subtitle: TARBIYAH2_META.tagline,
    meta: [
      { label: "Units", value: String(TARBIYAH2_META.units) },
      { label: "Lessons", value: String(TARBIYAH2_STUDY_LESSONS.length) },
      { label: "Practice", value: "Flashcards · Quiz" },
    ],
  };
}

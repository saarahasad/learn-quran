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
  name: "Deeds of the Heart",
  nameAr: "أعمال القلوب",
  tagline: "Sincerity, piety, fear, hope, reliance, and the deeds that bind a person to their Lord.",
  description:
    "This semester, we will study the deeds of the heart starting with sincerity, which is the core of deeds and the key (to their acceptance), piety, fear, hope, reliance, gratitude, reflection, love, perseverance and other great deeds which strengthen the bond between the slaves and their Lord. Allah is the Granter of success.",
  path: "/tarbiyah-2",
  category: "Islamic Education",
  meta: "14 units · Notes, flashcards & quiz",
  accent: "teal",
  topics: [
    "Deeds of the heart",
    "Sincerity (ikhlas)",
    "Taqwa, hope & tawakkul",
  ],
  units: 14,
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
    title: "Mahabbah (love)",
    titleAr: "المحبة",
    lessons: [
      {
        id: "mahabbah",
        title: "The meaning of love (mahabbah)",
        icon: "34",
        sections: [
          {
            type: "heading",
            kicker: "A deed of the heart",
            title: "Love (mahabbah)",
          },
          {
            type: "intro",
            text: "The joy and delight of the lover is in obeying his beloved, unlike the one who obeys because he has no other choice, who offers his service reluctantly, and thinks that if it were not for the fact that he is under the subjugation of his master and vulnerable to his punishment, he would not have obeyed him, and thus he puts up with obeying Allah like one who is compelled by his subjugator and subduer. As for the lover who regards obedience to his beloved as nourishment, pleasure, delight and joy, he is the one who strives relentlessly and does not get tired, and he is the one who will be blessed in this world and the Hereafter.",
          },
          {
            type: "split",
            items: [
              {
                label: "In Arabic",
                title: "Mahabbah",
                body: "The word mahabbah (translated here as love) refers to the inclination of the heart towards something and feeling a constant attachment to it and longing for it.",
              },
              {
                label: "In Islamic terminology",
                title: "Mahabbah",
                body: "Mahabbah refers to the inclination from the depths of one’s heart towards Allah, and giving Him precedence over others.",
              },
            ],
          },
        ],
      },
      {
        id: "mahabbah-ruling",
        title: "The ruling on love of Allah",
        icon: "35",
        sections: [
          {
            type: "heading",
            kicker: "Obligatory for everyone",
            title: "Ruling on love of Allah ﷻ",
          },
          {
            type: "definition",
            label: "According to the teachings of Islam",
            body: "Loving one’s Lord is obligatory for everyone, and no one fails to do that except one who wronged himself, is ignorant or is doomed.",
          },
          {
            type: "ayah",
            text: "Say, [O Muhammad], “If your fathers, your sons, your brothers, your wives, your relatives, wealth which you have obtained, commerce wherein you fear decline, and dwellings with which you are pleased are more beloved to you than Allah and His Messenger and jihad in His cause, then wait until Allah executes His command. And Allah does not guide the defiantly disobedient people.”",
            ref: "at-Tawbah 9:24",
          },
          {
            type: "note",
            tone: "warning",
            title: "Why this warning proves it is obligatory",
            body: "Thus Allah ﷻ warns them against giving precedence to love of others over love of Him and His Messenger ﷺ, and such a warning can only be issued with regard to something that is obligatory.",
          },
          {
            type: "ayah",
            text: "By the One in Whose hand is my soul, no one of you truly believes until I am more beloved to him than his father, his child, and all the people.",
            ref: "Anas ibn Malik رضي الله عنه — agreed upon",
          },
          {
            type: "note",
            tone: "benefit",
            title: "Ibn Rajab رحمه الله said",
            body: "It is well-known that love of the Messenger ﷺ is connected to, and subordinate to, love of Allah ﷻ. Thus the Messenger ﷺ is only loved as a result of Allah’s love for him, and because of Allah’s command to love him, obey him and follow him. If faith cannot be attained except by giving precedence to love of the Messenger ﷺ over love for oneself, one’s parents and all the people, then what do you think about love of Allah ﷻ?",
          },
        ],
      },
      {
        id: "mahabbah-ways",
        title: "Ten ways of attaining love",
        icon: "36",
        sections: [
          {
            type: "heading",
            kicker: "Ibn al-Qayyim رحمه الله",
            title: "Ways of attaining Allah’s love for you and of attaining love for Allah ﷻ",
          },
          {
            type: "intro",
            text: "Ibn al-Qayyim رحمه الله stated that the ways of attaining Allah’s love for you and of attaining love for your Lord are ten:",
          },
          {
            type: "conditions",
            items: [
              {
                n: 1,
                title: "Reading the Quran",
                body: "Reading Quran and reflecting upon its meanings and what is intended by it.",
              },
              {
                n: 2,
                title: "Supererogatory deeds after the obligatory",
                body: "Seeking to draw close to Allah ﷻ by doing supererogatory acts of worship after doing the obligatory acts of worship, as is mentioned in the hadith qudsi.",
                blocks: [
                  {
                    kind: "hadith",
                    text: "…and My slave continues to draw closer to Me by means of supererogatory deeds until I love him.",
                    ref: "al-Bukhari",
                  },
                ],
              },
              {
                n: 3,
                title: "Constant remembrance",
                body: "Constantly remembering Allah in all situations, in one’s words, in one’s heart, in one’s actions and in all circumstances, for one’s share of love will be commensurate with that.",
              },
              {
                n: 4,
                title: "Giving precedence to what Allah loves",
                body: "Giving precedence to what Allah loves over what you love when you feel overwhelmed by whims and desires.",
              },
              {
                n: 5,
                title: "Reflecting upon the names and attributes",
                body: "Reflecting upon the divine names and attributes and trying to see their impact on people, and enjoying reflecting on their various meanings and aspects.",
              },
              {
                n: 6,
                title: "Thinking of His kindness and blessings",
                body: "Thinking of Allah’s kindness, generosity and blessings, both visible and hidden.",
              },
              {
                n: 7,
                title: "Humility and helplessness before Allah",
                body: "The most amazing of these means is feeling humble and helpless before Allah.",
              },
              {
                n: 8,
                title: "Being alone with Him at the end of the night",
                body: "Being alone with Him at the time when He descends at the end of the night and reciting His Book, then concluding that with prayers for forgiveness and repentance.",
              },
              {
                n: 9,
                title: "Sitting with those who sincerely love Allah",
                body: "Sitting with those who sincerely love Allah, and benefitting from their beneficial words. Not speaking except when you think there is a purpose to be served and you know that it will have a good impact on you and others.",
              },
              {
                n: 10,
                title: "Keeping away from barriers",
                body: "Keeping away from anything that could form a barrier between you and Allah ﷻ.",
              },
            ],
          },
          {
            type: "note",
            tone: "benefit",
            title: "Ibn al-Qayyim رحمه الله said",
            body: "By means of these ten things, the lovers of Allah went through the stages of love and were admitted to the court of the Beloved.",
          },
        ],
      },
      {
        id: "mahabbah-signs",
        title: "Signs of love for Allah",
        icon: "37",
        sections: [
          {
            type: "heading",
            kicker: "How it may be recognised",
            title: "The signs of a person’s love for Allah ﷻ",
          },
          {
            type: "intro",
            text: "The signs of a person’s love for Allah ﷻ include the following:",
          },
          {
            type: "heading",
            title: "His love for the word of Allah ﷻ",
          },
          {
            type: "ayah",
            text: "Whoever would like to know whether he loves Allah ﷻ, let him think to himself about how he feels about the Quran. If he loves the Quran, then he loves Allah ﷻ, for the Quran is the word of Allah ﷻ.",
            ref: "Abdullah ibn Mas‘ud رضي الله عنه",
          },
          {
            type: "note",
            tone: "info",
            title: "Sufyan ibn Uyaynah رحمه الله said",
            body: "By Allah, you will not attain the pinnacle of this matter until nothing is more beloved to you than Allah ﷻ. Whoever loves the Quran loves Allah ﷻ.",
          },
        ],
      },
      {
        id: "mahabbah-outcomes",
        title: "Outcomes of loving Allah",
        icon: "38",
        sections: [
          {
            type: "heading",
            kicker: "What love of Allah leads to",
            title: "Outcomes of loving Allah ﷻ",
          },
          {
            type: "evidence",
            items: [
              {
                n: 1,
                lead: "Allah ﷻ will love you",
                body: "It was narrated from Aisha رضي الله عنها that the Prophet ﷺ sent a man on an expedition; that man used to recite for his companions in the prayer and would always conclude with Surat al-Ikhlas (Qul Huwa Allahu Ahad). When they returned, they mentioned that to the Prophet ﷺ, and he said: “Ask him what makes him do that?” So they asked him, and he said: Because it is a description of the Most Gracious, and I love to recite it.",
                text: "Tell him that Allah loves him.",
                ref: "Agreed upon",
              },
              {
                n: 2,
                lead: "The angels and the inhabitants of heaven and earth will love him",
                text: "When Allah ﷻ loves someone, He calls out to Jibreel: “Allah loves So-and-so, so love him.” So He loves him, and Jibreel loves him, and he calls out to the inhabitants of heaven: “Allah loves So-and-so, so love him.” So the inhabitants of heaven love him, then he will be accepted on earth.",
                ref: "Abu Hurayrah رضي الله عنه — agreed upon",
              },
              {
                n: 3,
                lead: "He will taste the sweetness of faith",
                text: "There are three characteristics, whoever attains them has found the sweetness of faith: when Allah and His Messenger are dearer to him than all else, when he loves a man and does not love him except for the sake of Allah, and when he would hate to return to disbelief as he would hate to be thrown into the fire.",
                ref: "al-Bukhari and Muslim",
              },
              {
                n: 4,
                lead: "Salvation from the Fire",
                body: "The punishment is for those who do not love Allah ﷻ; as for the believers, they give precedence to love of Allah over love of all else, so they will attain salvation from punishment.",
                text: "But those who believe are stronger in love for Allah. And if only they who have wronged would consider [that] when they see the punishment, [they will be certain] that all power belongs to Allah and that Allah is severe in punishment.",
                ref: "al-Baqarah 2:165",
              },
            ],
          },
        ],
      },
      {
        id: "mahabbah-activities",
        title: "Activities — love of Allah",
        icon: "39",
        sections: [
          {
            type: "activities",
            title: "Activities",
            items: [
              "Explain the ruling on love, quoting evidence from the Quran and Sunnah.",
              "You have seen above means of attaining Allah’s love. Think of some more means of attaining His love.",
              "From what you have studied about love, mention the most important thing that may be understood from this hadith: “There are three characteristics, whoever attains them has found the sweetness of faith.”",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "unit-7",
    num: 7,
    title: "Sabr (patience)",
    titleAr: "الصبر",
    lessons: [
      {
        id: "sabr",
        title: "The meaning of patience (sabr)",
        icon: "40",
        sections: [
          {
            type: "heading",
            kicker: "A deed of the heart",
            title: "Patience (sabr)",
          },
          {
            type: "intro",
            text: "The believer needs patience when complying with Allah’s commands, he needs patience when refraining from what is prohibited, and he needs patience in order to accept the divine decree.",
          },
          {
            type: "list",
            ordered: true,
            items: [
              {
                title: "Complying with Allah’s commands",
                body: "The believer needs patience when complying with Allah’s commands.",
              },
              {
                title: "Refraining from what is prohibited",
                body: "He needs patience when refraining from what is prohibited.",
              },
              {
                title: "Accepting the divine decree",
                body: "And he needs patience in order to accept the divine decree.",
              },
            ],
          },
          {
            type: "note",
            tone: "benefit",
            title: "Patience until death",
            body: "As he will be dealing with one or more of these three at all times, he needs patience constantly until death; this is one of the most essential matters, for life cannot be sound without it. This is the efficacious remedy for every problem.",
          },
          {
            type: "split",
            items: [
              {
                label: "In linguistic terms",
                title: "Sabr",
                body: "Sabr (translated here as patience) means restraint.",
              },
              {
                label: "In Islamic terminology",
                title: "Sabr",
                body: "Sabr means restraining the nafs (self) from pursuing what it loves and desires, and restraining it from panicking, and forcing it to maintain its focus on sublime matters.",
              },
            ],
          },
          {
            type: "ayah",
            text: "And keep yourself patient [by being] with those who call upon their Lord in the morning and the evening, seeking His countenance.",
            ref: "al-Kahf 18:28",
          },
          {
            type: "note",
            tone: "info",
            title: "What is meant",
            body: "Keep yourself with them.",
          },
        ],
      },
      {
        id: "sabr-ruling",
        title: "The ruling on patience",
        icon: "41",
        sections: [
          {
            type: "heading",
            kicker: "Obligatory by consensus",
            title: "Ruling on patience (sabr)",
          },
          {
            type: "definition",
            label: "According to the consensus of the Muslim ummah",
            body: "Patience (sabr) is obligatory according to the consensus of the Muslim ummah. Allah ﷻ enjoins it in more than one place in His Noble Book.",
          },
          {
            type: "ayah",
            text: "And seek help through patience [sabr] and prayer.",
            ref: "al-Baqarah 2:45",
          },
          {
            type: "ayah",
            text: "Persevere and endure [isbiru wa saabiru].",
            ref: "Aal Imran 3:200",
          },
          {
            type: "ayah",
            text: "And be patient [wa isbir], [O Muhammad], and your patience is not but through Allah.",
            ref: "an-Nahl 16:127",
          },
        ],
      },
      {
        id: "sabr-quran",
        title: "Patience in the Quran",
        icon: "42",
        sections: [
          {
            type: "heading",
            kicker: "Mentioned a great deal",
            title: "Patience is mentioned a great deal in the Quran, in different ways",
          },
          {
            type: "conditions",
            items: [
              {
                n: 1,
                title: "Praise for those who are patient",
                body: "As in the verse in which Allah ﷻ says:",
                blocks: [
                  {
                    kind: "ayah",
                    text: "And [those who] are patient [wa’s-saabireen] in poverty and hardship and during battle. Those are the ones who have been true, and it is those who are the righteous.",
                    ref: "al-Baqarah 2:177",
                  },
                ],
              },
              {
                n: 2,
                title: "Allah loves those who are patient",
                body: "Allah ﷻ has made it incumbent upon Himself to love those who are patient and steadfast, as we see in the verse in which He ﷻ says:",
                blocks: [
                  {
                    kind: "ayah",
                    text: "And Allah loves the steadfast [as-saabireen].",
                    ref: "Aal Imran 3:146",
                  },
                ],
              },
              {
                n: 3,
                title: "Allah is with those who are patient",
                body: "Allah ﷻ has made it incumbent upon Himself to be with those who are patient; this “being with” is of a special kind, and includes protecting them, helping them and supporting them, as mentioned in the verses:",
                blocks: [
                  {
                    kind: "ayah",
                    text: "And be patient. Indeed, Allah is with the patient.",
                    ref: "al-Anfal 8:46",
                  },
                  {
                    kind: "ayah",
                    text: "And Allah is with the patient.",
                    ref: "al-Baqarah 2:249",
                  },
                ],
              },
              {
                n: 4,
                title: "Reward according to the best of their deeds",
                body: "Allah ﷻ has made it incumbent upon Himself to reward them according to the best of their deeds, as He says:",
                blocks: [
                  {
                    kind: "ayah",
                    text: "And We will surely give them their reward [in the Hereafter] according to the best of what they used to do.",
                    ref: "an-Nahl 16:96",
                  },
                ],
              },
              {
                n: 5,
                title: "Victory and reinforcement",
                body: "Allah ﷻ guarantees victory and reinforcement for them, as He ﷻ says:",
                blocks: [
                  {
                    kind: "ayah",
                    text: "Yes, if you remain patient [in tasbiru] and conscious of Allah and the enemy come upon you [attacking] in rage, your Lord will reinforce you with five thousand angels having marks [of distinction].",
                    ref: "Aal Imran 3:125",
                  },
                  {
                    kind: "hadith",
                    text: "You should understand that victory comes with patience.",
                    ref: "The Prophet ﷺ — narrated by Ahmad; classed as sahih by al-Albani",
                  },
                ],
              },
              {
                n: 6,
                title: "What is sought is attained only through patience",
                body: "Allah ﷻ tells us that attaining what you seek and love, being saved from what you dislike and dread, and being admitted to Paradise can only be achieved by means of patience, as He ﷻ says:",
                blocks: [
                  {
                    kind: "ayah",
                    text: "And the angels will enter upon them from every gate, [saying] “Peace be upon you for what you patiently endured. And excellent is the final home.”",
                    ref: "ar-Ra‘d 13:23–24",
                  },
                ],
              },
              {
                n: 7,
                title: "Only the patient benefit from signs and lessons",
                body: "Allah ﷻ tells us that only those who are patient will benefit from signs and lessons, as He ﷻ said to Musa عليه السلام:",
                blocks: [
                  {
                    kind: "ayah",
                    text: "And We certainly sent Moses with Our signs, [saying], “Bring out your people from darknesses into the light and remind them of the days of Allah.” Indeed in that are signs for everyone patient and grateful.",
                    ref: "Ibrahim 14:5",
                  },
                ],
              },
              {
                n: 8,
                title: "Patience enables leadership",
                body: "Patience enables the patient person to attain leadership. Shaykh al-Islam Ibn Taymiyyah رحمه الله said: “By means of patience and certain faith, leadership in religion may be attained.” Then he recited the verse:",
                blocks: [
                  {
                    kind: "ayah",
                    text: "And We made from among them leaders guiding by Our command when they were patient and [when] they were certain of Our signs.",
                    ref: "as-Sajdah 32:24",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "sabr-status",
        title: "The status of patience",
        icon: "43",
        sections: [
          {
            type: "heading",
            kicker: "Like the head to the body",
            title: "The status of patience",
          },
          {
            type: "definition",
            label: "In relation to faith",
            body: "The status of patience in relation to faith is like that of the head in relation to the body. The one who has no patience has no faith, just as the one who has no head has no body.",
          },
          {
            type: "ayah",
            text: "How wonderful is the affair of the believer, for his affairs are all good, and this applies to no one but the believer. If something good happens to him, he is thankful for it and that is good for him. If something bad happens to him, he bears it with patience and that is good for him. And that is only for the believer.",
            ref: "The Prophet ﷺ — Sahih Muslim",
          },
          {
            type: "note",
            tone: "info",
            title: "The black woman who suffered from epilepsy",
            body: "And he ﷺ said to the black woman who suffered from epilepsy and asked him to pray for her: “If you wish, you may be patient, and Paradise will be yours, or if you wish, I will pray to Allah to heal you.” She said: I will be patient. She said: But I become uncovered; pray to Allah that I will not become uncovered. So he prayed for her. Narrated by al-Bukhari and Muslim.",
          },
          {
            type: "note",
            tone: "benefit",
            title: "Umar ibn al-Khattab رضي الله عنه said",
            body: "The best life we lived we attained through patience.",
          },
        ],
      },
      {
        id: "sabr-types",
        title: "Types of patience",
        icon: "44",
        sections: [
          {
            type: "heading",
            kicker: "Three kinds",
            title: "Types of patience",
          },
          {
            type: "conditions",
            items: [
              {
                n: 1,
                title: "Patience in remembering, obeying and calling upon Allah",
                body: "Patience in remembering Allah, obeying Allah, calling upon Allah, being steadfast in adhering to His religion and striving in His cause, and patience in seeking guidance and knowledge.",
                blocks: [
                  {
                    kind: "ayah",
                    text: "O you who have believed, let not your wealth and your children divert you from remembrance of Allah.",
                    ref: "al-Munafiqun 63:9",
                  },
                  {
                    kind: "ayah",
                    text: "So worship Him, and remain constant and patient in worshipping Him.",
                    ref: "Maryam 19:65",
                  },
                  {
                    kind: "ayah",
                    text: "And enjoin prayer upon your family [and people] and be patient therein.",
                    ref: "Ta-Ha 20:132",
                  },
                ],
              },
              {
                n: 2,
                title: "Patience in refraining from sin",
                body: "Meaning that you restrain yourself from committing haram actions even when the means of doing so are readily available, as happened to Yusuf عليه السلام with the wife of al-Aziz. The wife of al-Aziz sought to seduce him in a situation when it would have been very easy for him to comply with her wishes, because she closed the doors and said, “Come, you,” calling him to her. But he said, “Indeed, he is my master, who has made good my residence. Indeed, wrongdoers will not succeed.” In other words: if I betray my master by committing sin with his wife, I will be a wrongdoer. So he did not do that, even though there was a strong motive and no impediments. This is patience in refraining from disobeying Allah ﷻ.",
                blocks: [
                  {
                    kind: "ayah",
                    text: "And she certainly determined [to seduce] him, and he would have inclined to her had he not seen the proof of his Lord.",
                    ref: "Yusuf 12:24",
                  },
                  {
                    kind: "hadith",
                    text: "In as-Sahihayn, in the hadith about the seven whom Allah will shade with His shade on the Day when there will be no shade but His, it mentions among them: “… a man who was pursued by a woman of status and beauty, but he said: I fear Allah.”",
                    ref: "al-Bukhari and Muslim",
                  },
                ],
              },
              {
                n: 3,
                title: "Patience in the face of calamity and in accepting the divine decree",
                body: "Allah ﷻ will reward a person for that by compensating him, praising him, having mercy on him and guiding him.",
                blocks: [
                  {
                    kind: "ayah",
                    text: "But give good tidings to the patient. Who, when disaster strikes them, say, “Indeed we belong to Allah, and indeed to Him we will return.”",
                    ref: "al-Baqarah 2:155–156",
                  },
                  {
                    kind: "ayah",
                    text: "O my son, establish prayer, enjoin what is right, forbid what is wrong, and be patient over what befalls you. Indeed, [all] that is of the matters [requiring] determination.",
                    ref: "Luqman 31:17 — among the advice that Luqman gave to his son",
                  },
                  {
                    kind: "hadith",
                    text: "There is no Muslim who is stricken with calamity and says what Allah has commanded him to say, “Indeed we belong to Allah, and indeed to Him we will return; O Allah, reward me for my affliction and compensate me with something better” — but Allah will compensate him with something better.",
                    ref: "Umm Salamah رضي الله عنها — narrated by Muslim",
                  },
                  {
                    kind: "hadith",
                    text: "Patience is only when the calamity first strikes.",
                    ref: "The Prophet ﷺ — agreed upon",
                  },
                ],
              },
            ],
          },
          {
            type: "note",
            tone: "benefit",
            title: "Umm Salamah رضي الله عنها said",
            body: "When Abu Salamah died, I said: Who among the Muslims is better than Abu Salamah…? Then I said it, and Allah compensated me with the Messenger of Allah ﷺ. Narrated by Muslim.",
          },
        ],
      },
      {
        id: "sabr-outcomes",
        title: "Outcomes of patience",
        icon: "45",
        sections: [
          {
            type: "heading",
            kicker: "What patience leads to",
            title: "Outcomes of patience",
          },
          {
            type: "conditions",
            items: [
              {
                n: 1,
                title: "Gifts and abundant goodness",
                body: "Gifts and abundant goodness, than which there is nothing better.",
                blocks: [
                  {
                    kind: "hadith",
                    text: "No one is ever given a better and more expansive gift than patience.",
                    ref: "The Messenger of Allah ﷺ — agreed upon",
                  },
                ],
              },
              {
                n: 2,
                title: "Patience brings illumination",
                body: "It was narrated that Abu Malik al-Ash‘ari رضي الله عنه said: The Messenger of Allah ﷺ said:",
                blocks: [
                  {
                    kind: "hadith",
                    text: "Prayer is light, charity is proof, patience is illumination and the Quran is evidence, for you or against you.",
                    ref: "Narrated by Muslim",
                  },
                ],
              },
              {
                n: 3,
                title: "Success, victory and attaining what one seeks",
                body: "It was narrated that Ibn Abbas رضي الله عنهما said: The Prophet ﷺ said: “…victory comes with patience.” Noted above.",
                blocks: [
                  {
                    kind: "ayah",
                    text: "O you who have believed, endure and be more patient (than your enemy), and remain stationed and fear Allah that you may be successful.",
                    ref: "Aal Imran 3:200",
                  },
                  {
                    kind: "ayah",
                    text: "And seek help through patience [sabr] and prayer.",
                    ref: "al-Baqarah 2:45",
                  },
                ],
              },
              {
                n: 4,
                title: "Attaining the love of Allah",
                body: "Allah ﷻ has connected His love to patience and has granted it to those who are patient.",
                blocks: [
                  {
                    kind: "ayah",
                    text: "And how many a prophet [fought and] with him fought many religious scholars. But they never lost assurance due to what afflicted them in the cause of Allah, nor did they weaken or submit. And Allah loves the steadfast.",
                    ref: "Aal Imran 3:146",
                  },
                ],
              },
              {
                n: 5,
                title: "Forgiveness and multiplied reward",
                body: "Allah ﷻ says:",
                blocks: [
                  {
                    kind: "ayah",
                    text: "Except for those who are patient and do righteous deeds; those will have forgiveness and great reward.",
                    ref: "Hud 11:11",
                  },
                  {
                    kind: "ayah",
                    text: "Indeed, the patient will be given their reward without account.",
                    ref: "az-Zumar 39:10",
                  },
                ],
              },
              {
                n: 6,
                title: "Paradise and the house of praise",
                body: "Allah ﷻ will reward the believers with Paradise for their patience. The Prophet ﷺ would pass by Yasir and Sumayyah رضي الله عنهما when they were being tortured by the disbelievers of Quraysh, and he would say to them: “Patience, O family of Yasir, for you are promised Paradise.” Narrated by al-Hakim; classed as sahih by al-Albani.",
                blocks: [
                  {
                    kind: "ayah",
                    text: "Peace be upon you for what you patiently endured. And excellent is the final home.",
                    ref: "ar-Ra‘d 13:24",
                  },
                  {
                    kind: "hadith",
                    text: "Allah ﷻ says: “My believing slave has no reward with Me, if I take away his beloved among the people of the world, then he seeks reward with Me for this loss, except Paradise.”",
                    ref: "Concerning patience in the face of calamity — narrated by al-Bukhari",
                  },
                  {
                    kind: "hadith",
                    text: "So Allah ﷻ says: “Give My slave news of a house in Paradise, and call it the house of praise.”",
                    ref: "Abu Musa al-Ash‘ari رضي الله عنه, about the one who lost his son and bore his loss with patience — narrated and classed as hasan by at-Tirmidhi",
                  },
                ],
              },
            ],
          },
          {
            type: "note",
            tone: "info",
            title: "Signs for everyone patient and grateful",
            body: "Hence when Allah spoke of the most important signs in the universe, in the surahs Ibrahim, Luqman, Saba and ash-Shura, He ended that by saying: “Indeed in that are signs for everyone patient and grateful”; in other words, no one sees the signs or is illuminated by their light, except those who are patient and grateful.",
          },
        ],
      },
      {
        id: "sabr-activities",
        title: "Activities — patience",
        icon: "46",
        sections: [
          {
            type: "activities",
            title: "Activities",
            items: [
              "On the basis of what you understand about patience, why is it the most expansive gift that a person may be given?",
              "How do you understand the status of patience in the light of this verse: {O you who have believed, endure and be more patient (than your enemy), and remain stationed and fear Allah that you may be successful} [Aal Imran 3:200]?",
              "Explain this hadith: “Patience is only when the calamity first strikes.” What impact does that have on a person’s faith?",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "unit-8",
    num: 8,
    title: "Shukr (gratitude)",
    titleAr: "الشكر",
    lessons: [
      {
        id: "shukr",
        title: "The meaning of gratitude (shukr)",
        icon: "47",
        sections: [
          {
            type: "heading",
            kicker: "A deed of the heart",
            title: "Gratitude (shukr)",
          },
          {
            type: "intro",
            text: "Because faith consists of two halves, gratitude and patience, it is incumbent upon the one who cares about himself and seeks salvation and gives precedence to his well-being not to ignore these two principles and not to choose any path other than these two direct paths. He should base his journey towards Allah on these two paths, so that on the Day he meets Him, Allah will make him among the people of Paradise.",
          },
          {
            type: "split",
            items: [
              {
                label: "In linguistic terms",
                title: "Shukr",
                body: "The Arabic word shukr (gratitude) is the opposite of kufran (ingratitude); it refers to acknowledging favours and kindness, and speaking of them.",
              },
              {
                label: "In Islamic terminology",
                title: "Shukr",
                body: "Shukr means acknowledging kindness and speaking of it.",
              },
            ],
          },
          {
            type: "definition",
            label: "Thus gratitude (shukr) means",
            body: "Having love in the heart for the Bestower of blessings, striving hard to obey Him, and speaking words of remembrance and praise of Him.",
          },
          {
            type: "note",
            tone: "benefit",
            title: "Ibn al-Qayyim رحمه الله said",
            body: "Whoever acknowledges blessings, acknowledges the Bestower of blessings, affirms blessings and shows humility to the Bestower, loves Him and is pleased with Him as his Lord and is pleased with His blessings, and uses the blessings in ways that He loves and in obedience to Him — this is the one who is truly grateful for the blessings.",
          },
          {
            type: "heading",
            title: "Prayer combines three types of gratitude",
          },
          {
            type: "intro",
            text: "An example of that is prayer, for it combines three types of gratitude (shukr), as follows:",
          },
          {
            type: "conditions",
            items: [
              {
                n: 1,
                title: "Gratitude in the heart",
                body: "With what it involves of sincerity and humility.",
              },
              {
                n: 2,
                title: "Gratitude on the lips",
                body: "With what it involves of reciting Quran and remembering the Most Gracious.",
              },
              {
                n: 3,
                title: "Gratitude manifested in physical actions",
                body: "With what that involves of prostration, bowing and saying the tasleem at the end of the prayer.",
              },
            ],
          },
        ],
      },
      {
        id: "shukr-hamd",
        title: "Praise and gratitude",
        icon: "48",
        sections: [
          {
            type: "heading",
            kicker: "A needed distinction",
            title: "The difference between praise (hamd) and gratitude (shukr)",
          },
          {
            type: "pair",
            items: [
              {
                title: "Praise (hamd) is only verbal",
                body: "In contrast to gratitude (shukr), which may be spoken on the lips, felt in the heart and manifested in physical actions.",
                tone: "a",
              },
              {
                title: "Praise may or may not follow a blessing",
                body: "Praise may be in response to a blessing or not, in contrast to gratitude, which can only be in response to a blessing.",
                tone: "b",
              },
            ],
          },
          {
            type: "ayah",
            text: "Work, O family of David, in gratitude. And few of My servants are grateful.",
            ref: "Saba 34:13",
          },
        ],
      },
      {
        id: "shukr-involves",
        title: "What gratitude involves",
        icon: "49",
        sections: [
          {
            type: "heading",
            kicker: "Three things",
            title: "What gratitude involves: gratitude involves three things",
          },
          {
            type: "conditions",
            items: [
              {
                n: 1,
                title: "Acknowledging the blessing bestowed by Allah",
                body: "Acknowledging the blessing bestowed by Allah.",
              },
              {
                n: 2,
                title: "Being pleased with it",
                body: "As the Prophet ﷺ said:",
                blocks: [
                  {
                    kind: "hadith",
                    text: "He has succeeded who becomes Muslim, is granted sufficient provision, and Allah makes him content with what He has given him.",
                    ref: "Narrated by Muslim",
                  },
                ],
              },
              {
                n: 3,
                title: "Praising Allah",
                body: "That is done by mentioning the blessings that Allah has bestowed upon you, and letting their impact be seen on you.",
                blocks: [
                  {
                    kind: "ayah",
                    text: "But as for the favor of your Lord, report [it].",
                    ref: "ad-Duha 93:11",
                  },
                  {
                    kind: "hadith",
                    text: "It was narrated from Abu’l-Ahwas, that his father said: I came to the Messenger of Allah ﷺ, looking scruffy and unkempt, and he said: “Do you have wealth?” I said: Yes. He said: “What kind of wealth?” I said: All kinds: camels, slaves, horses and sheep. He said: “If Allah has given you wealth, then let it be seen on you.”",
                    ref: "Ahmad, an-Nasai and at-Tirmidhi; classed as sahih by al-Albani",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "shukr-ruling",
        title: "The ruling on gratitude",
        icon: "50",
        sections: [
          {
            type: "heading",
            kicker: "Obligatory",
            title: "Ruling on gratitude (shukr)",
          },
          {
            type: "note",
            tone: "benefit",
            title: "Ibn al-Qayyim رحمه الله said",
            body: "It is obligatory to be grateful to Allah ﷻ on the basis of reason, Islamic teachings and common sense. The obligation to be grateful to Allah is the most obvious of all obligatory deeds. How can it not be obligatory for people to praise Him, affirm His oneness, love Him, remember His favours and kindness, venerate Him, magnify Him, show humility to Him, speak of His blessings, and affirm them by all possible means? Gratitude is the most beloved thing to Him and the greatest in reward; it is for that purpose that He created creation, sent down the Books and prescribed laws; that required the creation of means and causes through which gratitude could be more perfect.",
          },
          {
            type: "definition",
            label: "Among the most important obligations",
            body: "Gratitude is one of the most important obligations required of the Muslim. So he should learn about it, reflect upon it, and make sure that he shows gratitude to Allah in all possible ways.",
          },
          {
            type: "ayah",
            text: "So remember Me; I will remember you. And be grateful to Me and do not be ungrateful.",
            ref: "al-Baqarah 2:152",
          },
          {
            type: "ayah",
            text: "Be grateful to Me and to your parents; to Me is the [final] destination.",
            ref: "Luqman 31:14 — showing gratitude to Him and to one’s parents",
          },
          {
            type: "ayah",
            text: "That they may eat of His fruit. And their hands have not produced it, so will they not be grateful?",
            ref: "Ya-Seen 36:35 — showing gratitude to Him for blessings",
          },
          {
            type: "ayah",
            text: "[Allah] said, “O Moses, I have chosen you over the people with My messages and My words [to you]. So take what I have given you and be among the grateful.”",
            ref: "al-A‘raf 7:144 — giving thanks to Him for guidance",
          },
          {
            type: "note",
            tone: "info",
            title: "Worship is connected to gratitude",
            body: "Allah explained that worship is connected to gratitude; whoever is grateful is a worshipper of Allah, and whoever is not grateful is not a worshipper.",
          },
          {
            type: "ayah",
            text: "O you who have believed, eat from the good things which We have provided for you and be grateful to Allah if it is [indeed] Him that you worship.",
            ref: "al-Baqarah 2:172",
          },
        ],
      },
      {
        id: "shukr-ingratitude",
        title: "Being ungrateful for blessings",
        icon: "51",
        sections: [
          {
            type: "heading",
            kicker: "Condemned",
            title: "Ruling on being ungrateful for the blessings of Allah",
          },
          {
            type: "intro",
            text: "Allah ﷻ condemns ingratitude for His blessings, and states that it is one of the causes of His punishment. He says, criticizing one who expresses ingratitude for blessings at the time of hardship and trials:",
          },
          {
            type: "ayah",
            text: "And if We give man a taste of mercy from Us and then We withdraw it from him, indeed, he is despairing and ungrateful.",
            ref: "Hud 11:9",
          },
          {
            type: "note",
            tone: "warning",
            title: "Focusing on calamities and forgetting blessings",
            body: "He condemns the one who is ungrateful — that is, the one who focuses on calamities and forgets blessings — as He says:",
          },
          {
            type: "ayah",
            text: "Indeed mankind, to his Lord, is ungrateful.",
            ref: "al-Adiyat 100:6",
          },
          {
            type: "ayah",
            text: "I was shown Hell, and I saw that most of its inhabitants are women, for they are ungrateful. It was said, Are they ungrateful to Allah? He said, They are ungrateful to their husbands and ungrateful for good treatment. If you are kind to one of them for a lifetime, then she sees one (undesirable) thing from you, she will say, “I have never seen anything good from you.”",
            ref: "The Messenger of Allah ﷺ — narrated by al-Bukhari and Muslim",
          },
        ],
      },
      {
        id: "shukr-people",
        title: "Gratitude to people",
        icon: "52",
        sections: [
          {
            type: "heading",
            kicker: "Enjoined upon us",
            title: "Ruling on showing gratitude to people",
          },
          {
            type: "intro",
            text: "Islamic teachings enjoin us to show gratitude to people for their kindness and favours to us. One of the most important things that are enjoined upon us is gratitude towards parents.",
          },
          {
            type: "ayah",
            text: "Be grateful to Me and to your parents.",
            ref: "Luqman 31:14",
          },
          {
            type: "note",
            tone: "info",
            title: "To everyone who does you a favour",
            body: "The Prophet ﷺ enjoined expressing gratitude to everyone who does you a favour. According to the hadith of Jabir رضي الله عنه, the Prophet ﷺ said:",
          },
          {
            type: "ayah",
            text: "Whoever is given something and has the means to reciprocate, let him do so. If he does not have the means, let him praise him for it, for whoever praises him has thanked him, and whoever conceals [the gift] has shown ingratitude towards him.",
            ref: "Abu Dawud; classed as hasan by al-Albani",
          },
          {
            type: "note",
            tone: "benefit",
            title: "Alongside gratitude to Allah",
            body: "Gratitude to people is mentioned alongside gratitude to Allah. It was narrated from Abu Hurayrah رضي الله عنه that the Prophet ﷺ said: “He does not thank Allah who does not thank people.” Narrated by Abu Dawud; classed as sahih by al-Albani. What this hadith means is that if someone is ungrateful by nature, and denies the favours that people do for him, then by nature he will also be ungrateful towards the Creator of people.",
          },
        ],
      },
      {
        id: "shukr-means",
        title: "Means of showing gratitude",
        icon: "53",
        sections: [
          {
            type: "heading",
            kicker: "What helps one to be grateful",
            title: "Means that help one to show gratitude",
          },
          {
            type: "conditions",
            items: [
              {
                n: 1,
                title: "Bearing in mind the blessings of Allah",
                body: "Ash-Shawkani said: Bearing in mind the blessing is a means that prompts one to be grateful for it. Al-Ghazali said: If someone does not think that the reward for a calamity is more significant than the calamity itself, it is unlikely that he will be grateful for the calamity.",
                blocks: [
                  {
                    kind: "ayah",
                    text: "And if you should count the favors of Allah, you could not enumerate them.",
                    ref: "an-Nahl 16:18",
                  },
                  {
                    kind: "ayah",
                    text: "And whatever you have of favor — it is from Allah.",
                    ref: "an-Nahl 16:53",
                  },
                ],
              },
              {
                n: 2,
                title: "Looking at those who are less well off than you",
                body: "Allah ﷻ says:",
                blocks: [
                  {
                    kind: "ayah",
                    text: "And it is He who has made you successors upon the earth and has raised some of you above others in degrees [of rank] that He may try you through what He has given you.",
                    ref: "al-An‘am 6:165",
                  },
                  {
                    kind: "hadith",
                    text: "Look at the one who is below you, and do not look at the one who is above you, then it is more likely that you will not scorn the blessings that Allah bestows upon you.",
                    ref: "Abu Hurayrah رضي الله عنه — narrated by Muslim",
                  },
                ],
              },
              {
                n: 3,
                title: "Realizing that you will be questioned about blessings",
                body: "People misunderstand this issue, so they deprive themselves of the enjoyment of worldly bounties lest they be questioned about them on the Day of Resurrection, when Allah ﷻ has allowed us to enjoy worldly bounties, but He has commanded us to give thanks for them.",
                blocks: [
                  {
                    kind: "ayah",
                    text: "Then you will surely be asked that Day about worldly bounties.",
                    ref: "at-Takathur 102:8",
                  },
                  {
                    kind: "ayah",
                    text: "O you who have believed, eat from the good things which We have provided for you and be grateful to Allah if it is [indeed] Him that you worship.",
                    ref: "al-Baqarah 2:172",
                  },
                ],
              },
              {
                n: 4,
                title: "Knowing that Allah loves those who are grateful",
                body: "Qatadah said: Your Lord bestows blessings and loves gratitude.",
              },
              {
                n: 5,
                title: "Calling upon Allah asking Him to help us to give thanks",
                body: "The Prophet ﷺ instructed Muadh ibn Jabal رضي الله عنه to say in supplication (dua) following every prayer:",
                blocks: [
                  {
                    kind: "hadith",
                    text: "Allahumma a‘inni ‘ala dhikrika wa shukrika wa husni ‘ibadatika (O Allah, help me to remember You, give thanks to You and worship You properly).",
                    ref: "Abu Dawud; classed as sahih by al-Albani",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "shukr-outcomes",
        title: "Outcomes of gratitude",
        icon: "54",
        sections: [
          {
            type: "heading",
            kicker: "What gratitude leads to",
            title: "Outcomes of gratitude (shukr)",
          },
          {
            type: "conditions",
            items: [
              {
                n: 1,
                title: "Attaining the pleasure of Allah",
                body: "It was narrated that Anas ibn Malik رضي الله عنه said: The Messenger of Allah ﷺ said:",
                blocks: [
                  {
                    kind: "hadith",
                    text: "Allah is pleased with a person when he eats something and praises Him for it, or he drinks something and praises Him for it.",
                    ref: "Narrated by Muslim",
                  },
                ],
              },
              {
                n: 2,
                title: "Salvation from His punishment",
                body: "In His Book, Allah has explained that He has no reason to punish people if they give thanks and believe in Him. He says:",
                blocks: [
                  {
                    kind: "ayah",
                    text: "Why would Allah punish you if you are grateful and believe? And ever is Allah Appreciative and Knowing.",
                    ref: "an-Nisa 4:147",
                  },
                ],
              },
              {
                n: 3,
                title: "The blessing will continue and increase",
                body: "Thus blessings increase with gratitude, and are protected against loss. Umar ibn Abd al-Aziz رحمه الله said: Retain the blessings of Allah by giving thanks to Allah. Hence one of the scholars called gratitude the retainer of blessings.",
                blocks: [
                  {
                    kind: "ayah",
                    text: "And [remember] when your Lord proclaimed, “If you are grateful, I will surely increase you [in favor]; but if you deny, indeed, My punishment is severe.”",
                    ref: "Ibrahim 14:7",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "shukr-sabr",
        title: "Patience and gratitude",
        icon: "55",
        sections: [
          {
            type: "heading",
            kicker: "Two halves of faith",
            title: "Patience (sabr) and gratitude (shukr)",
          },
          {
            type: "ayah",
            text: "Indeed, We have created humankind in constant struggle.",
            ref: "al-Balad 90:4",
          },
          {
            type: "note",
            tone: "info",
            title: "Al-Hasan رحمه الله said",
            body: "Man struggles constantly to show gratitude for times of ease and he struggles constantly to show patience at times of hardship.",
          },
          {
            type: "note",
            tone: "benefit",
            title: "One of the early generations (the salaf) said",
            body: "Faith consists of two halves: half gratitude and half patience.",
          },
          {
            type: "note",
            tone: "benefit",
            title: "Ibn al-Qayyim رحمه الله said",
            body: "Because faith consists of two halves, half gratitude and half patience, it is important for the one who cares for himself, and would like to attain salvation and to attain happiness and well-being, not to ignore these two straightforward principles or drift away from them. He should undertake his journey towards Allah guided by these two principles, so that on the Day he meets Allah, He will cause him to join the people of Paradise.",
          },
          {
            type: "note",
            tone: "info",
            title: "Mutarrif ibn Abdillah رحمه الله said",
            body: "To be granted well-being and give thanks is dearer to me than being tested with hardship and showing patience.",
          },
          {
            type: "note",
            tone: "warning",
            title: "The Prophet ﷺ advised us",
            body: "The Prophet ﷺ advised us to ask Allah for pardon and well-being; he did not advise us to ask for calamity. But if calamity strikes, the one who is tested may attain a reward greater than the reward of those who are grateful.",
          },
        ],
      },
      {
        id: "shukr-activities",
        title: "Activities — gratitude",
        icon: "56",
        sections: [
          {
            type: "activities",
            title: "Activities",
            items: [
              "How can we show gratitude through the following acts of worship: fasting – zakat – Hajj?",
              "A person journeys towards Allah between gratitude and patience. Explain how the believer balances these two qualities.",
              "What is the lesson you learn from the following hadith: “Look at the one who is below you”? Narrated by Muslim.",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "unit-9",
    num: 9,
    title: "Wara (piety)",
    titleAr: "الورع",
    lessons: [
      {
        id: "wara",
        title: "The meaning of piety (wara)",
        icon: "57",
        sections: [
          {
            type: "heading",
            kicker: "A deed of the heart",
            title: "Piety (wara)",
          },
          {
            type: "intro",
            text: "Piety (wara) is the foundation of our religion and the foundation of obedience; it is indicative of a person’s righteousness. The righteous early generations (the salaf) put a great deal of effort into learning about piety, and it is very important in the modern age in which bribery, the consumption of haram earnings and falling into haram things are all widespread, so that our children may be brought up with honesty and mindfulness of Allah (taqwa).",
          },
          {
            type: "split",
            items: [
              {
                label: "In linguistic terms",
                title: "Wara",
                body: "The Arabic word wara (translated above as piety) refers to feeling uncomfortable with something and therefore refraining from it.",
              },
              {
                label: "In principle",
                title: "Wara",
                body: "Wara refers to refraining from that which is prohibited, but the word is also used to refer to refraining from that which is permissible and halal.",
              },
            ],
          },
          {
            type: "heading",
            title: "In Islamic terminology",
          },
          {
            type: "note",
            tone: "benefit",
            title: "Ibn al-Qayyim رحمه الله said",
            body: "It means refraining from something that one fears may lead to harm in the Hereafter.",
          },
          {
            type: "definition",
            label: "It was also said",
            body: "It refers to refraining from something innocuous for fear of falling into something that is problematic.",
          },
          {
            type: "note",
            tone: "info",
            title: "Al-Jurjani رحمه الله said",
            body: "It means avoiding ambiguous matters for fear of falling into that which is definitely haram.",
          },
          {
            type: "note",
            tone: "info",
            title: "Al-Qirafi رحمه الله said",
            body: "Wara means refraining from something innocuous as a precaution against that which is problematic.",
          },
        ],
      },
      {
        id: "wara-hadiths",
        title: "Hadiths on piety",
        icon: "58",
        sections: [
          {
            type: "heading",
            kicker: "The basis for this concept",
            title: "The basis for this concept is found in several hadiths",
          },
          {
            type: "conditions",
            items: [
              {
                n: 1,
                title: "Giving up the innocuous as a precaution",
                body: "It was narrated that the Sahabi Atiyah ibn Urwah as-Sa‘di رضي الله عنه said: The Messenger of Allah ﷺ said:",
                blocks: [
                  {
                    kind: "hadith",
                    text: "A person will not be regarded as one of those who are mindful of Allah until he gives up that which is innocuous as a precaution against that which is problematic.",
                    ref: "Narrated and classed as hasan by at-Tirmidhi",
                  },
                ],
              },
              {
                n: 2,
                title: "Leave that which makes you doubt",
                body: "The hadith narrated by Ahmad and an-Nasai — and classed as sahih by al-Albani — from al-Hasan ibn Ali رضي الله عنهما, who said: I learned from the Messenger of Allah ﷺ:",
                blocks: [
                  {
                    kind: "hadith",
                    text: "Leave that which makes you doubt for that which does not make you doubt.",
                    ref: "Ahmad and an-Nasai; sahih by al-Albani",
                  },
                ],
              },
              {
                n: 3,
                title: "Unclear matters",
                body: "It was narrated that an-Numan ibn Basheer رضي الله عنه said: I heard the Messenger of Allah ﷺ say:",
                blocks: [
                  {
                    kind: "hadith",
                    text: "That which is permissible is clear, and that which is prohibited is clear, and between them are matters that are unclear about which many people do not know. So whoever refrains from unclear matters will protect his faith and his honour, but whoever falls into unclear matters is like a shepherd who grazes his flock around a sanctuary; he will soon encroach upon it…",
                    ref: "Agreed upon",
                  },
                ],
              },
              {
                n: 4,
                title: "Leaving alone that which does not concern him",
                body: "The Prophet ﷺ summed up piety (wara) in its entirety in a single phrase when he said: “Part of a person’s being a good Muslim is his leaving alone that which does not concern him.” Narrated by at-Tirmidhi and Ibn Majah; classed as sahih by al-Albani. Leaving alone that which does not concern you includes refraining from that which is of no benefit in terms of speaking, looking, listening, striking, walking, thinking and all other actions, both outward and inward.",
              },
            ],
          },
        ],
      },
      {
        id: "wara-importance",
        title: "The importance of piety",
        icon: "59",
        sections: [
          {
            type: "heading",
            kicker: "A condition of faith",
            title: "The importance of piety (wara)",
          },
          {
            type: "definition",
            label: "In relation to faith",
            body: "Piety (wara) is a condition of faith and its ultimate outcome, and it is indicative of a person’s righteousness.",
          },
          {
            type: "note",
            tone: "benefit",
            title: "Tawus رحمه الله said",
            body: "The likeness of faith is that of a tree: its root is the testimony of faith (shahadah), and its fruit is piety (wara). There is nothing good in a tree that bears no fruit, and there is nothing good in a person who has no piety.",
          },
          {
            type: "ayah",
            text: "Do not look at a person’s prayer or fasting; rather look at the truthfulness of his words when he speaks, his honesty when he is entrusted with something, and his piety (wara) when he thinks of committing a sin.",
            ref: "Ibn Umar رضي الله عنهما — narrated by al-Bayhaqi in Shu‘ab al-Eeman",
          },
          {
            type: "note",
            tone: "info",
            title: "Umar ibn al-Khattab رضي الله عنه said",
            body: "Religious commitment is not reflected in reciting [with a beautiful voice] at the end of the night; rather religious commitment is reflected in piety (wara).",
          },
          {
            type: "note",
            tone: "info",
            title: "Mutarrif ibn Abdillah ibn ash-Shikhkheer رحمه الله said",
            body: "You may meet two men, one of whom fasts, prays and gives in charity more, but the other is far better than him. It was said to him: How is that? He said: He is more pious (wara) and more cautious in avoiding what Allah has forbidden.",
          },
          {
            type: "note",
            tone: "benefit",
            title: "Abu Abd ar-Rahman al-Umari رحمه الله",
            body: "A man said to Abu Abd ar-Rahman al-Umari: Advise me. He picked up a pebble from the ground and said: If piety (wara) the size of this pebble enters your heart, that is better for you than the prayers of all the people on earth.",
          },
          {
            type: "note",
            tone: "warning",
            title: "Essential in a judge",
            body: "Hence the scholars described piety (wara) as being essential in a judge who judges between people, because the position of a judge is one of the most important positions and roles in this world. It is a position in which the judge must decide between disputants concerning matters of wealth, marriage and divorce, and so on. Therefore they stipulated, with regard to this high position, that the judge should be pious.",
          },
          {
            type: "note",
            tone: "benefit",
            title: "Sufyan ath-Thawri رحمه الله said",
            body: "You should strive to be pious, for then Allah will make your reckoning easy. Leave that which makes you doubt for that which does not make you doubt. Ward off doubt with that which is certain, and your faith will remain intact.",
          },
          {
            type: "note",
            tone: "info",
            title: "Qutaybah ibn Saeed رحمه الله said",
            body: "Were it not for Sufyan ath-Thawri, the concept of piety (wara) would have disappeared.",
          },
          {
            type: "note",
            tone: "benefit",
            title: "Musa ibn Hammad رحمه الله said",
            body: "I saw Sufyan ath-Thawri in Paradise in my dream, flying from palm tree to palm tree, and from tree to tree. I said: O Abu Abdillah, how did you attain this? He said: By means of piety (wara), by means of piety (wara).",
          },
        ],
      },
      {
        id: "wara-abubakr",
        title: "The piety of Abu Bakr",
        icon: "60",
        sections: [
          {
            type: "heading",
            kicker: "The best example",
            title: "The piety (wara) of Abu Bakr as-Siddeeq رضي الله عنه",
          },
          {
            type: "intro",
            text: "Abu Bakr as-Siddeeq رضي الله عنه set the best example of piety (wara). Al-Bukhari narrated in his Sahih that Aisha رضي الله عنها said:",
          },
          {
            type: "note",
            tone: "warning",
            title: "He made himself vomit",
            body: "Abu Bakr had a slave who used to bring him some income, and Abu Bakr used to eat from that income. One day he brought something, and Abu Bakr ate from it. The slave said to him: Do you know what this is? Abu Bakr said: What is it? He said: I told a fortune for a man during the Jahiliyyah. I did not know anything about fortune telling, but I cheated him, and he gave me this. This is what you have eaten from. Abu Bakr put his hand in his mouth and made himself vomit, expelling everything that was in his stomach.",
          },
        ],
      },
      {
        id: "wara-zuhd",
        title: "Piety, worship and zuhd",
        icon: "61",
        sections: [
          {
            type: "heading",
            kicker: "The best help",
            title: "Piety (wara) is the best help in worshipping Allah",
          },
          {
            type: "ayah",
            text: "O Abu Hurayrah, be pious; you will be the best worshipper.",
            ref: "Abu Hurayrah رضي الله عنه — Ibn Majah; classed as sahih by al-Albani",
          },
          {
            type: "note",
            tone: "info",
            title: "Saeed ibn al-Musayyab رحمه الله said",
            body: "Worship is piety (wara), being cautious to avoid that which Allah has forbidden, and bearing in mind what Allah has enjoined.",
          },
          {
            type: "heading",
            title: "The difference between asceticism (zuhd) and piety (wara)",
          },
          {
            type: "note",
            tone: "benefit",
            title: "Shaykh Ibn Uthaymeen رحمه الله said",
            body: "In his commentary on Riyadh as-Saliheen: Asceticism (zuhd — showing little interest in worldly gain) is of a higher status than piety (wara). Piety means refraining from that which is harmful, whereas asceticism means refraining from that which is beneficial. Things fall into three categories: that which is harmful in the Hereafter, that which is beneficial, and that which is neither harmful nor beneficial.",
          },
          {
            type: "pair",
            items: [
              {
                title: "Piety (wara)",
                body: "Refers to a person’s refraining from that which will harm him in the Hereafter, meaning that he gives up what is prohibited.",
                tone: "a",
              },
              {
                title: "Asceticism (zuhd)",
                body: "Means giving up that which will not benefit him in the Hereafter. Hence with regard to that which causes no harm, but will be of no benefit in the Hereafter, asceticism (zuhd) means refraining from it.",
                tone: "b",
              },
            ],
          },
        ],
      },
      {
        id: "wara-danger",
        title: "The danger of lacking piety",
        icon: "62",
        sections: [
          {
            type: "heading",
            kicker: "When deeds become dust",
            title: "The danger of lacking piety (wara)",
          },
          {
            type: "ayah",
            text: "I surely know some people of my ummah who will come on the Day of Resurrection with good deeds like the mountains of Tihamah, but Allah will make them like scattered dust.",
            ref: "Ibn Majah; classed as sahih by al-Albani",
          },
          {
            type: "note",
            tone: "warning",
            title: "Thawban رضي الله عنه said",
            body: "O Messenger of Allah, describe them to us and explain who they are, so that we will not become of them unknowingly. He said: “They are your brothers and from your own people, worshipping at night as you do, but they are the kind of people who, when they are alone, transgress the sacred limits of Allah.”",
          },
          {
            type: "ayah",
            text: "The Prophet ﷺ mentioned a man who travels a great deal and becomes disheveled and covered with dust, who raises his hands to the heavens (and says), “O Lord, O Lord,” when his food is haram, his drink is haram, his clothes are haram and he has been nourished with haram, so how can he receive a response?",
            ref: "Sahih Muslim",
          },
        ],
      },
      {
        id: "wara-stories",
        title: "Knowledge and stories of piety",
        icon: "63",
        sections: [
          {
            type: "heading",
            kicker: "With knowledge",
            title: "Piety (wara) is mentioned alongside knowledge",
          },
          {
            type: "note",
            tone: "info",
            title: "Abu’s-Su‘ud رحمه الله said",
            body: "Piety and refraining from what Allah ﷻ has forbidden depends on knowing what is halal and haram, on the basis of the Quran and Sunnah.",
          },
          {
            type: "note",
            tone: "warning",
            title: "Ibn Taymiyyah رحمه الله said, concerning the person who is ignorant",
            body: "He may fail to do deeds that are obligatory and he may do deeds that are forbidden, thinking that this is piety (wara).",
          },
          {
            type: "heading",
            title: "Stories of piety (wara)",
          },
          {
            type: "conditions",
            items: [
              {
                n: 1,
                title: "A date that may have been zakat",
                body: "It was narrated from Abu Hurayrah رضي الله عنه that the Prophet ﷺ said:",
                blocks: [
                  {
                    kind: "hadith",
                    text: "I go back to my family, and find a date that has fallen on my mat, and I pick it up to eat it, then I am worried that it may be something that was given as zakat, so I put it down.",
                    ref: "Agreed upon",
                  },
                ],
              },
              {
                n: 2,
                title: "Al-Hasan ibn Ali and the zakat date",
                body: "It was narrated that Abu Hurayrah رضي الله عنه said: al-Hasan ibn Ali رضي الله عنهما picked up one of the zakat dates and put it in his mouth, and the Prophet ﷺ said: “No, no!” So that he would throw it away. Then he said:",
                blocks: [
                  {
                    kind: "hadith",
                    text: "Do you not know that we do not eat what is given in charity?",
                    ref: "Agreed upon",
                  },
                ],
              },
              {
                n: 3,
                title: "Zaynab bint Jahsh during the slander (ifk)",
                body: "Aisha رضي الله عنها said: The Messenger of Allah ﷺ asked Zaynab bint Jahsh رضي الله عنها about my issue; he said: “O Zaynab, what do you know? What have you seen?” She said: O Messenger of Allah, I want to protect my hearing and my sight. By Allah, I do not know anything about her but good. [Aisha] said: She was the one who used to compete with me, but Allah protected her by means of piety (wara). Agreed upon.",
              },
            ],
          },
        ],
      },
      {
        id: "wara-means",
        title: "Means of attaining piety",
        icon: "64",
        sections: [
          {
            type: "heading",
            kicker: "How wara is attained",
            title: "Means of attaining piety (wara)",
          },
          {
            type: "conditions",
            items: [
              {
                n: 1,
                title: "Adhering to the Sunnah and refraining from innovation (bidah)",
                body: "Al-Awzai رحمه الله said: We used to say: No man introduces an innovation (bidah) but piety (wara) is taken away from him.",
              },
              {
                n: 2,
                title: "Acting upon knowledge",
                body: "Sahl ibn Abdillah رحمه الله said: If the believer acts upon what he knows, it will lead him to piety (wara), and if he develops piety, his heart will be with Allah.",
              },
              {
                n: 3,
                title: "Keeping away from prohibited things",
                body: "Abdullah ibn Mas‘ud رضي الله عنه said: Avoid that which is forbidden to you, and you will be among the most pious of people.",
              },
              {
                n: 4,
                title: "Having a lack of interest in worldly gain (zuhd)",
                body: "Sufyan ath-Thawri رحمه الله said: I have never seen anyone who was pious but he was in need. The one who does not show indifference to worldly gain will not have the patience to adhere to piety (wara).",
              },
              {
                n: 5,
                title: "Keeping away from that which forms an impediment to piety",
                body: "Such as eating a great deal, indulging in physical desires, greed, talking and arguing a great deal, being concerned with the faults of others, wasting time, and shamelessness. This was summed up in the hadith:",
                blocks: [
                  {
                    kind: "hadith",
                    text: "Part of a person’s being a good Muslim is leaving alone that which does not concern him.",
                    ref: "at-Tirmidhi and Ibn Majah; classed as sahih by al-Albani",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "wara-activities",
        title: "Activities — piety",
        icon: "65",
        sections: [
          {
            type: "activities",
            title: "Activities",
            items: [
              "From what you have studied, discuss the danger of not being pious, with evidence.",
              "How great is this phrase: “rather religious commitment is reflected in piety (wara)”! Based on your own understanding, write about the ways in which piety (wara) is indicative of a person’s religious commitment.",
              "Explain, with examples, the difference between piety (wara) and asceticism (zuhd).",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "unit-10",
    num: 10,
    title: "Rida (contentment)",
    titleAr: "الرضا",
    lessons: [
      {
        id: "rida",
        title: "The meaning of contentment (rida)",
        icon: "66",
        sections: [
          {
            type: "heading",
            kicker: "A deed of the heart",
            title: "Contentment (rida)",
          },
          {
            type: "intro",
            text: "Contentment (rida) is one of the most sublime and most important deeds of the heart, by means of which one may attain a status far higher than the one who tries hard and exhausts himself but fails to attain complete contentment.",
          },
          {
            type: "split",
            items: [
              {
                label: "In linguistic terms",
                title: "Rida",
                body: "The Arabic word rida (translated above as contentment) is the opposite of sukht (discontentment). It refers to accepting something and feeling comfortable and at ease with it.",
              },
              {
                label: "In Islamic terminology",
                title: "Rida",
                body: "Rida (contentment) refers to not panicking at any decree from Allah ﷻ.",
              },
            ],
          },
          {
            type: "note",
            tone: "info",
            title: "The related word ridwan",
            body: "Ridwan refers to a great deal of rida. Allah ﷻ says:",
          },
          {
            type: "ayah",
            text: "Their Lord gives them glad tidings of mercy from Him and His good pleasure.",
            ref: "at-Tawbah 9:21",
          },
          {
            type: "heading",
            kicker: "According to faith",
            title: "Levels of contentment",
          },
          {
            type: "intro",
            text: "The level of contentment in a person’s heart may vary according to the strength of his faith, and according to the categories with which he is content. The Messenger of Allah ﷺ said:",
          },
          {
            type: "ayah",
            text: "He has found the taste of faith who is content with Allah as his Lord, with Islam as his religion, and with Muhammad as his Messenger.",
            ref: "Narrated by Muslim",
          },
        ],
      },
      {
        id: "rida-obligation",
        title: "The obligation of contentment",
        icon: "67",
        sections: [
          {
            type: "heading",
            kicker: "With Allah, His will and His decree",
            title: "The obligation to be content with Allah and be content with His will and decree",
          },
          {
            type: "note",
            tone: "benefit",
            title: "Imam Ahmad رحمه الله said",
            body: "Ninety of the Tabieen, leading scholars of the Muslims, leading scholars of the early generations and fuqaha of various regions were unanimously agreed that foremost among the teachings of the Messenger of Allah ﷺ, to which he adhered until he died, are: contentment with the will of Allah ﷻ, submission to His command and showing patience in accepting His decree.",
          },
          {
            type: "note",
            tone: "info",
            title: "Ishaq رحمه الله said",
            body: "I was present when a man came to Abu Abdillah Ahmad ibn Hanbal and asked him questions. The man said: O Abu Abdillah, is the most important thing, that the Muslim should fully understand, belief in the divine decree, both good and bad, sweet and bitter, and submission to the command of Allah, and contentment with the decree of Allah? Abu Abdillah said: Yes indeed.",
          },
        ],
      },
      {
        id: "rida-lord",
        title: "Content with Allah as Lord",
        icon: "68",
        sections: [
          {
            type: "heading",
            kicker: "The first category",
            title: "Part of being content with Allah as one’s Lord",
          },
          {
            type: "note",
            tone: "warning",
            title: "Resenting the worship of anyone other than Allah ﷻ",
            body: "This is the core of Islam. Allah ﷻ says:",
          },
          {
            type: "ayah",
            text: "Say, “Is it other than Allah I should desire as a lord while He is the Lord of all things?”",
            ref: "al-An‘am 6:164",
          },
          {
            type: "ayah",
            text: "Say, “Is it other than Allah I should take as a protector, Creator of the heavens and the earth…?”",
            ref: "al-An‘am 6:14",
          },
          {
            type: "note",
            tone: "benefit",
            title: "Loving for the sake of Allah and hating for the sake of Allah",
            body: "Loving the scholars is part of being content with Allah as one’s Lord; loving the righteous and the ascetics is part of being content with Allah as one’s Lord; loving those who enjoin what is right and forbid what is wrong is part of being content with Allah as one’s Lord. Hating the mischief-makers and evildoers is part of being content with Allah as one’s Lord.",
          },
        ],
      },
      {
        id: "rida-islam",
        title: "Content with Islam as religion",
        icon: "69",
        sections: [
          {
            type: "heading",
            kicker: "The second category",
            title: "Part of being content with Islam as one’s religion",
          },
          {
            type: "heading",
            title: "Being content with what Allah has prescribed of rulings",
          },
          {
            type: "ayah",
            text: "[Say], “Then is it other than Allah I should seek as judge while it is He who has revealed to you the Book explained in detail?”",
            ref: "al-An‘am 6:114",
          },
          {
            type: "ayah",
            text: "That is because they followed what angered Allah and disliked [what earns] His pleasure, so He rendered worthless their deeds.",
            ref: "Muhammad 47:28",
          },
          {
            type: "note",
            tone: "warning",
            title: "How great is the lie",
            body: "How great is the lie of those who say: “We are content with Islam as a religion,” then they refuse to submit to its rulings and decrees and do not accept them. – where then is their contentment with this religion?",
          },
          {
            type: "definition",
            label: "Also part of it",
            body: "Taking the Muslims as allies and friends and regarding the disbelievers as enemies.",
          },
          {
            type: "heading",
            title: "One of the forms of not being content with Islam is",
          },
          {
            type: "list",
            ordered: false,
            items: [
              "Being content with the ways, beliefs and customs of the disbelievers, and loving to bring them to Muslim lands, such as nakedness, free mixing and all forms of mischief and evil.",
              "Promoting secularism and the separation of religion and politics.",
            ],
          },
        ],
      },
      {
        id: "rida-prophet",
        title: "Content with the Prophet ﷺ",
        icon: "70",
        sections: [
          {
            type: "heading",
            kicker: "The third category",
            title: "Part of being content with Muhammad ﷺ as one’s Prophet is",
          },
          {
            type: "conditions",
            items: [
              {
                n: 1,
                title: "Loving him more than yourself and your family",
                body: "That he is more beloved to you than yourself, your spouse, your father, your mother, your children, your friends, and your relatives, and that you would sacrifice yourself, body and soul, for his sake.",
              },
              {
                n: 2,
                title: "Loving his Seerah, etiquette and characteristics",
                body: "That you love to learn about his biography (Seerah), follow his etiquette, and adopt and emulate his characteristics and you wish to be with him in Paradise on the Day of Resurrection.",
              },
              {
                n: 3,
                title: "Accepting his rulings",
                body: "That you accept his rulings, as Allah ﷻ says:",
                blocks: [
                  {
                    kind: "ayah",
                    text: "But no, by your Lord, they will not [truly] believe until they make you, [O Muhammad], judge concerning that over which they dispute among themselves and then find within themselves no discomfort from what you have judged and submit in [full, willing] submission.",
                    ref: "an-Nisa 4:65",
                  },
                ],
              },
              {
                n: 4,
                title: "Being satisfied with what Allah and His Messenger gave",
                body: "Allah ﷻ says:",
                blocks: [
                  {
                    kind: "ayah",
                    text: "If only they had been satisfied with what Allah and His Messenger gave them and said, “Sufficient for us is Allah; Allah will give us of His bounty, and [so will] His Messenger; indeed, we are desirous toward Allah,” [it would have been better for them].",
                    ref: "at-Tawbah 9:59",
                  },
                ],
              },
              {
                n: 5,
                title: "Adhering to his Sunnah",
                body: "Adhering to his Sunnah and not drifting away from it by introducing innovations for which Allah has not sent down any authority.",
              },
            ],
          },
          {
            type: "note",
            tone: "warning",
            title: "Not part of being content with him as one’s Prophet ﷺ",
            body: "The innovation of the Mawlid and various kinds of adhkar and awraad [words of remembrance of Allah and litanies] and ways of reciting them, and other kinds of innovated acts of worship are not part of being content with him as one’s Prophet ﷺ.",
          },
        ],
      },
      {
        id: "rida-decree",
        title: "Contentment with the divine decree",
        icon: "71",
        sections: [
          {
            type: "heading",
            kicker: "His qada",
            title: "Contentment with the divine decree",
          },
          {
            type: "definition",
            label: "What is meant",
            body: "What is meant is submitting to, and feeling at ease and comfortable with, the decree of Allah ﷻ because all of it is just, good and wise.",
          },
          {
            type: "heading",
            title: "The following matters do not contradict contentment with the divine decree",
          },
          {
            type: "conditions",
            items: [
              {
                n: 1,
                title: "Feeling pain and sorrow",
                body: "In terms of being content with the decree of Allah ﷻ, the Messenger of Allah ﷺ attained the highest status, yet despite that he ﷺ wept when his son Ibrahim died. Ibn Hajar رحمه الله said: The appearance of grief in a person when he is stricken with calamity does not mean that he is not showing patience and accepting [the divine decree], if his heart is at peace. He ﷺ said:",
                blocks: [
                  {
                    kind: "hadith",
                    text: "The eye weeps and the heart grieves, but we do not say anything but that which pleases our Lord. Indeed, O Ibrahim, we grieve for you.",
                    ref: "Agreed upon",
                  },
                ],
              },
              {
                n: 2,
                title: "Speaking of what one is experiencing of calamity",
                body: "Without showing displeasure or anger or complaining. Al-Qurtubi said: It is permissible for a person to speak of what he experiences of pain and sickness, and that does not undermine contentment with or acceptance of the divine decree, so long as that is expressed without displeasure or anger.",
              },
              {
                n: 3,
                title: "Calling upon Allah ﷻ in supplication (dua)",
                body: "Asking Him to grant relief from the calamity. Allah ﷻ tells us about Ayub عليه السلام:",
                blocks: [
                  {
                    kind: "ayah",
                    text: "And [mention] Job, when he called to his Lord, “Indeed, adversity has touched me, and you are the Most Merciful of the merciful.”",
                    ref: "al-Anbiya 21:83",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "rida-means",
        title: "How to attain contentment",
        icon: "72",
        sections: [
          {
            type: "heading",
            kicker: "What is essential",
            title: "To attain the level of contentment (rida), it is essential to do the following",
          },
          {
            type: "conditions",
            items: [
              {
                n: 1,
                title: "Knowing Allah ﷻ and having certain faith in Him",
                body: "Knowing that He is Most Wise in all that He commands and decrees. Al-Fudayl رحمه الله said: The people who attain the most perfect contentment with Allah are those who know Allah ﷻ. Al-Junayd رحمه الله said: Contentment (rida) is commensurate with the strength and depth of one’s knowledge. One of the scholars of the early generations was asked: What is the way to attain contentment (rida)? He said: Knowing in one’s heart that the Lord is just in what He decrees, and not entertaining any negative thoughts about Him.",
              },
              {
                n: 2,
                title: "Striving to make yourself be patient",
                body: "And training yourself to accept whatever Allah ﷻ causes you to go through. Something that will help you to attain that is realizing that there is no option except to be content. The one who is not content will gain nothing in this world or in the Hereafter, in contrast to the one who is content, who will gain the benefits of this world and the Hereafter. The poet said: We train ourselves to have goodly patience / Being content with Allah’s decree is more appropriate for our nafs.",
                blocks: [
                  {
                    kind: "ayah",
                    text: "So bear patiently what they say, and glorify and praise your Lord before the rising of the sun and before its setting, and glorify and praise Him during the night and during the day, so that you may be pleased [with the reward that Allah will give you].",
                    ref: "Ta-Ha 20:130",
                  },
                ],
              },
              {
                n: 3,
                title: "Calling upon Allah ﷻ in supplication (dua)",
                body: "It was narrated from Zayd ibn Thabit رضي الله عنه that the Messenger of Allah ﷺ taught him a dua and instructed him to recite it regularly, and to advise his family to recite it every day. In it are the words:",
                blocks: [
                  {
                    kind: "hadith",
                    text: "As’aluka Allahumma ar-rida ba‘d al-qada (I ask you, O Allah, for contentment after the decree).",
                    ref: "Ahmad and al-Hakim, who said: Its isnad is sahih",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "rida-outcomes",
        title: "Outcomes of contentment",
        icon: "73",
        sections: [
          {
            type: "heading",
            kicker: "What rida leads to",
            title: "Outcomes of contentment (rida)",
          },
          {
            type: "conditions",
            items: [
              {
                n: 1,
                title: "Attaining servitude to Allah (ubudiyah) and gratitude (shukr)",
                body: "Yahya ibn Muadh was asked: When does a person attain contentment? He said: When he commits himself to adhering to four principles in his relationship with his Lord. So he says: “If You give me, I accept; if You withhold from me, I am content; if You let me be, I worship You; if You call me, I respond.” Ibn Awn رحمه الله said: Be content with the decree of Allah at times of both hardship and of ease, for that is more effective in reducing your distress and grief, and more effective in attaining what you aspire to in the Hereafter.",
              },
              {
                n: 2,
                title: "Attaining a sense of pride and honour",
                body: "And of having no need of others. Ar-Ramahormuzi رحمه الله said: Whoever takes his share of this world in moderation, being content with his lot, will live an honourable life that is based on contentment and a sense that he has no need of people, and he will have a good life. But whoever looks longingly at whatever he sees of luxury in this world, he will be like an animal that eats its fill, and after it is done it begins eating again, and it does not know anything other than that.",
              },
              {
                n: 3,
                title: "Blessing (barakah) in one’s provision, contentment, a way out of hardship, a good life",
                body: "And the ability to cope with calamities. One of the early generations said: Allah ﷻ tests His slave with what He gives him. Whoever is content with what Allah ﷻ allocates to him, Allah will bless it for him and make it more beneficial. Whoever is not content, what he is given will not be blessed for him. Aktham ibn Sayfi رحمه الله said: Whoever is pleased with his lot will enjoy his life, and whoever is content with his situation will have peace of mind. By means of contentment, a person will be able to rid himself of worry, anxiety, grief, confusion, misery, doubt and feelings of being unsettled.",
              },
              {
                n: 4,
                title: "Admittance to Paradise",
                body: "It was narrated from Abu Saeed al-Khudri رضي الله عنه that the Messenger of Allah ﷺ said:",
                blocks: [
                  {
                    kind: "hadith",
                    text: "O Abu Saeed, whoever is content with Allah as his Lord, with Islam as his religion and with Muhammad as his Prophet, Paradise will be due for him.",
                    ref: "Abu Saeed was amazed by that and said: Say it to me again, O Messenger of Allah. So he did that. Narrated by Muslim",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "rida-outcomes-more",
        title: "More outcomes of contentment",
        icon: "74",
        sections: [
          {
            type: "heading",
            kicker: "What rida leads to",
            title: "Outcomes of contentment (rida) — continued",
          },
          {
            type: "conditions",
            items: [
              {
                n: 5,
                title: "Attaining the pleasure of Allah and being spared the wrath of Allah",
                body: "The Prophet ﷺ said:",
                blocks: [
                  {
                    kind: "hadith",
                    text: "There is no Muslim who says three times, in the morning and in the evening: Radeetu Billahi rabban wa bi’l-Islami deenan wa bi Muhammadin ﷺ nabiyyan (I am content with Allah as my Lord, with Islam as my religion and with Muhammad ﷺ as my Prophet) but it will be incumbent upon Allah to make him pleased on the Day of Resurrection.",
                    ref: "Ahmad. Al-Arna’ut said: It is sahih because of corroborating evidence",
                  },
                  {
                    kind: "hadith",
                    text: "When Allah loves a people, He tests them, then whoever is content will earn the pleasure of Allah, and whoever is discontent will earn His wrath.",
                    ref: "Anas ibn Malik رضي الله عنه — at-Tirmidhi; classed as sahih by al-Albani",
                  },
                ],
              },
              {
                n: 6,
                title: "Forgiveness of sins",
                body: "It was narrated from Sa‘d ibn Abi Waqqas رضي الله عنه, from the Messenger of Allah ﷺ, that he said:",
                blocks: [
                  {
                    kind: "hadith",
                    text: "Whoever says, when he hears the muadhdhin, Ashhadu an laa ilaaha illa Allah wahdahu laa shareeka lah, wa anna Muhammadan abduhu wa rasooluhu. Radeetu Billahi rabban wa bi Muhammadin rasoolan wa bi’l-Islami deenan (I bear witness that there is no god worthy of worship except Allah Alone, with no partner or associate, and that Muhammad is His slave and His Messenger. I am content with Allah as my Lord, with Muhammad as my Messenger, and with Islam as my religion), his sins will be forgiven.",
                    ref: "Narrated by Muslim",
                  },
                ],
              },
              {
                n: 7,
                title: "Contentment is a means of attaining all that is good",
                body: "Umar ibn al-Khattab رضي الله عنه wrote to Abu Musa رضي الله عنه, saying: To proceed: all goodness is found in contentment, so if you are able to be content, all well and good; otherwise be patient. Ibn al-Qayyim رحمه الله said: Following the path of contentment and love will cause a person to travel with speed whilst lying in his bed, and he will go far ahead of his travelling companions [in the journey towards Allah].",
              },
            ],
          },
        ],
      },
      {
        id: "rida-activities",
        title: "Activities — contentment",
        icon: "75",
        sections: [
          {
            type: "activities",
            title: "Activities",
            items: [
              "By means of contentment, the believer may attain many great benefits in this world. Speak about that.",
              "Is grieving for one who has died contrary to contentment? Quote evidence for what you say.",
              "Being content with the Prophet ﷺ is one of the greatest types of contentment. Explain how introducing innovations is contrary to that.",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "unit-11",
    num: 11,
    title: "Tafakkur (reflection)",
    titleAr: "التفكر",
    lessons: [
      {
        id: "tafakkur",
        title: "The meaning of reflection (tafakkur)",
        icon: "76",
        sections: [
          {
            type: "heading",
            kicker: "A deed of the heart",
            title: "Reflection (tafakkur)",
          },
          {
            type: "intro",
            text: "The best time spent sitting is time spent in reflection and contemplation. Hence there is a variety of evidence in the Quran and Sunnah which indicates that reflection is obligatory. How delightful, how sweet and how good are such moments for the one who is blessed with that. That includes reflecting on the meanings of the names and attributes of Allah, contemplating the meaning of the words of wisdom spoken by the Prophet ﷺ, reflecting on the Hereafter, and reflecting on that which benefits people in both their religious and worldly affairs.",
          },
          {
            type: "split",
            items: [
              {
                label: "In linguistic terms",
                title: "Tafakkur",
                body: "The Arabic word tafakkur (translated above as reflection) refers to pondering and contemplating, thinking over something and re-examining it. This word may be used to describe the process of thinking over a matter and trying to learn from it.",
              },
              {
                label: "In Islamic terminology",
                title: "Tafakkur",
                body: "It refers to thinking over evidence and signs, and reflecting on the significance of things, in order to learn.",
              },
            ],
          },
        ],
      },
      {
        id: "tafakkur-beneficial",
        title: "The most beneficial type of reflection",
        icon: "77",
        sections: [
          {
            type: "heading",
            kicker: "What the wise think about",
            title: "The most beneficial type of thinking and reflection",
          },
          {
            type: "definition",
            label: "The most beneficial type",
            body: "The most beneficial type of reflection is that which leads one to goodness or to some benefit in this world or the Hereafter.",
          },
          {
            type: "note",
            tone: "benefit",
            title: "Ibn al-Qayyim رحمه الله said",
            body: "The best type of contemplation is reflecting on that which will benefit one in the Hereafter and how to attain that, and thinking of how to ward off harm in the Hereafter and how to avoid that. These four things are the best that one may think about, and are followed by another four: thinking about that which will benefit one in this world and how to attain that, and thinking of evil things in this world and how to protect oneself from them. The thoughts of the wise focus on these eight things.",
          },
        ],
      },
      {
        id: "tafakkur-quran",
        title: "Reflecting on revelation and this world",
        icon: "78",
        sections: [
          {
            type: "heading",
            kicker: "Other matters",
            title: "Other matters for reflection and contemplation",
          },
          {
            type: "heading",
            title: "1. Reflecting on the texts of revelation, verses and comparisons mentioned in the Quran",
          },
          {
            type: "ayah",
            text: "And We revealed to you the message that you may make clear to the people what was sent down to them and that they might give thought.",
            ref: "an-Nahl 16:44",
          },
          {
            type: "ayah",
            text: "If We had sent down this Quran upon a mountain, you would have seen it humbled and coming apart from fear of Allah. And these comparisons We present to the people that perhaps they will give thought.",
            ref: "al-Hashr 59:21",
          },
          {
            type: "heading",
            title: "2. Reflecting on this world and how soon it will pass away",
          },
          {
            type: "ayah",
            text: "The example of [this] worldly life is but like rain which We have sent down from the sky that the plants of the earth absorb — [those] from which men and livestock eat — until, when the earth has taken on its adornment and is beautified and its people suppose that they have capability over it, there comes to it Our command by night or by day, and We make it as a harvest, as if it had not flourished yesterday. Thus do We explain in detail the signs for a people who give thought.",
            ref: "Yunus 10:24",
          },
        ],
      },
      {
        id: "tafakkur-creation",
        title: "Reflecting on creation",
        icon: "79",
        sections: [
          {
            type: "heading",
            kicker: "Other matters",
            title: "3. Reflecting on creation",
          },
          {
            type: "ayah",
            text: "And how many a sign within the heavens and earth do they pass over while they, therefrom, are turning away. And most of them believe not in Allah except while they associate others with Him.",
            ref: "Yusuf 12:105–106",
          },
          {
            type: "intro",
            text: "In Sahih Muslim, it is narrated that the Prophet ﷺ got up at the end of the night, and he went out and looked at the sky, then he recited these verses:",
          },
          {
            type: "ayah",
            text: "Indeed, in the creation of the heavens and the earth and the alternation of the night and the day are signs for those of understanding. Who remember Allah while standing or sitting or [lying] on their sides and give thought to the creation of the heavens and the earth, [saying], “Our Lord, You did not create this aimlessly; exalted are You [above such a thing]; then protect us from the punishment of the Fire.”",
            ref: "Aal Imran 3:190–191",
          },
          {
            type: "intro",
            text: "Then he went back to the house, cleaned his teeth with the siwak and did wudu, then he prayed, then he lay down, then he recited these verses again, then he cleaned his teeth with the siwak and did wudu again, then he prayed.",
          },
          {
            type: "note",
            tone: "info",
            title: "An-Nawawi رحمه الله said",
            body: "This indicates that it is recommended (mustahabb) to recite these verses when waking up at night and looking at the sky, because doing so will prompt one to reflect deeply.",
          },
          {
            type: "note",
            tone: "info",
            title: "It was said to al-Awzai رحمه الله",
            body: "How can one reflect on these verses? He said: By reciting them whilst understanding their meaning.",
          },
          {
            type: "note",
            tone: "benefit",
            title: "Shaykh al-Islam Ibn Taymiyyah رحمه الله said",
            body: "Looking at creation in the upper realm and lower realm by way of contemplating and reflecting is enjoined and encouraged.",
          },
          {
            type: "note",
            tone: "info",
            title: "Shurayh al-Qadi رحمه الله used to say to his companions",
            body: "Let us go out to the marketplace and look at the camels, how they are created.",
          },
          {
            type: "note",
            tone: "benefit",
            title: "Learning from modern science",
            body: "Similarly, the individual should learn from modern science with regard to contemplation. How many created things there are that our predecessors did not know, but have now become apparent. Allah ﷻ says:",
          },
          {
            type: "ayah",
            text: "And He creates that which you do not know.",
            ref: "an-Nahl 16:8",
          },
        ],
      },
      {
        id: "tafakkur-blessings",
        title: "Reflecting upon the blessings of Allah",
        icon: "80",
        sections: [
          {
            type: "heading",
            kicker: "Other matters",
            title: "4. Reflecting upon the blessings of Allah ﷻ",
          },
          {
            type: "intro",
            text: "For example, Allah ﷻ says:",
          },
          {
            type: "ayah",
            text: "It is He who sends down rain from the sky; from it is drink and from it is foliage in which you pasture [animals]. He causes to grow for you thereby the crops, olives, palm trees, grapevines, and from all the fruits. Indeed in that is a sign for a people who give thought. And He has subjected for you the night and day and the sun and moon, and the stars are subjected by His command. Indeed in that are signs for a people who reason. And [He has subjected] whatever He multiplied for you on the earth of varying colors. Indeed in that is a sign for a people who remember. And it is He who subjected the sea for you to eat from it tender meat and to extract from it ornaments which you wear. And you see the ships plowing through it, and [He subjected it] that you may seek of His bounty; and perhaps you will be grateful.",
            ref: "an-Nahl 16:10–14",
          },
        ],
      },
      {
        id: "tafakkur-hereafter",
        title: "Reflecting on consequences and the Hereafter",
        icon: "81",
        sections: [
          {
            type: "heading",
            kicker: "Other matters",
            title: "5. Reflecting on consequences and the Hereafter",
          },
          {
            type: "ayah",
            text: "Have they not travelled through the earth and observed how was the end of those before them? They were greater than them in power, and they plowed the earth and built it up more than they have built it up, and their messengers came to them with clear evidences. And Allah would not ever have wronged them, but they were wronging themselves.",
            ref: "ar-Rum 30:9",
          },
          {
            type: "ayah",
            text: "I used to forbid you to visit graves, but now visit them, for they will remind you of the Hereafter.",
            ref: "Ali ibn Abi Talib رضي الله عنه — Ahmad; classed as sahih by al-Albani",
          },
          {
            type: "note",
            tone: "benefit",
            title: "Mutarrif ibn Abdillah ibn ash-Shikhkheer رحمه الله said",
            body: "I lie down on my bed at night and contemplate the Quran, and I compare my deeds to those of the people of Paradise, for their deeds are difficult to emulate {They used to sleep but little of the night} [adh-Dhariyat 51:17]; {And those who spend [part of] the night to their Lord prostrating and standing [in prayer]} [al-Furqan 25:64]; {Is one who is devoutly obedient during periods of the night, prostrating and standing [in prayer]… [like one who does not]?} [az-Zumar 39:9]. Then I realize that I am not one of them, so I compare myself to this verse: {What brought you to hell?} [al-Muddaththir 74:42], and I see that the people of Hell were deniers and rejecters of truth. Then I come to this verse: {And [there are] others who have acknowledged their sins. They had mixed a righteous deed with another that was bad} [at-Tawbah 9:102], and I hope that I and you, O my brothers, will be among them.",
          },
        ],
      },
      {
        id: "tafakkur-limits",
        title: "Limits to reflection",
        icon: "82",
        sections: [
          {
            type: "heading",
            kicker: "Where to stop",
            title: "Limits to reflection and reservations concerning it",
          },
          {
            type: "intro",
            text: "Reflection has limits at which the Muslim should stop, and he should not overstep the mark when reflecting and go beyond the limits. That includes the following:",
          },
          {
            type: "note",
            tone: "warning",
            title: "The Essence of Allah ﷻ and how His attributes are",
            body: "It is not permissible for the Muslim to think about how the Essence of Allah ﷻ is, or how His attributes are. It was narrated that Ibn Umar رضي الله عنهما said: The Messenger of Allah ﷺ said:",
          },
          {
            type: "ayah",
            text: "Reflect upon the signs of Allah, and do not reflect on Allah Himself ﷻ.",
            ref: "al-Lalakai; classed as hasan by al-Albani",
          },
          {
            type: "note",
            tone: "info",
            title: "What is required",
            body: "With regard to contemplating the meanings of the names and attributes of Allah, and acting in accordance with their meanings, without inquiring into how they are, this is something that is required and it is what the texts indicate.",
          },
          {
            type: "note",
            tone: "warning",
            title: "The world of the unseen (al-ghayb)",
            body: "It is not appropriate for the Muslim to think about the world of the unseen and try to imagine it, for the matter is too great to be comprehended by human reason. This is one of the differences between the Islamic perspective and the Western perspective on creation. The atheist Western perspective arrogantly thought that it is possible to subject everything to investigation and experiment, and to find out everything. The Islamic perspective, on the other hand, puts a limit on that, stating that there are things that it is not possible to find out and there are limits that cannot be surpassed, such as: the soul, the world of the jinn, the world of the angels, the grave (i.e., al-barzakh the interval between death and the Day of Resurrection), Hell, Paradise, and the events of the Day of Resurrection. All of these come under the heading of knowledge of the unseen (al-ghayb) which cannot be known under any circumstances.",
          },
          {
            type: "ayah",
            text: "And they ask you, [O Muhammad], about the soul. Say, “The soul is of the affair of my Lord. And mankind have not been given of knowledge except a little.”",
            ref: "al-Isra 17:85",
          },
          {
            type: "note",
            tone: "warning",
            title: "One of the things that are prohibited with regard to reflection",
            body: "It is what the Sufis do of giving up religious duties and spending their time on reflection and contemplation. Ibn al-Arabi said: As for the way of the Sufis, whereby one of their shaykhs spends an entire day and night, or even a month, reflecting without ceasing, this is far from the right way; it is not something that is appropriate for human beings and it is not in accordance with the Sunnah.",
          },
        ],
      },
      {
        id: "tafakkur-salaf",
        title: "Examples among the salaf",
        icon: "83",
        sections: [
          {
            type: "heading",
            kicker: "How they worshipped",
            title: "Examples of reflection among the early generations (the salaf)",
          },
          {
            type: "note",
            tone: "info",
            title: "Abu Dharr رضي الله عنه",
            body: "When they asked Umm Dharr about how Abu Dharr رضي الله عنه used to worship, she said: He would spend the entire day doing nothing but reflecting and contemplating.",
          },
          {
            type: "note",
            tone: "info",
            title: "Abu’d-Darda رضي الله عنه",
            body: "They asked Umm ad-Darda about the best acts of worship done by Abu’d-Darda, and she said: Reflection and contemplation.",
          },
          {
            type: "note",
            tone: "benefit",
            title: "Sufyan ath-Thawri رحمه الله",
            body: "Sufyan ath-Thawri رحمه الله was sitting in a gathering when the lamp went out and the room was enveloped in darkness. When they lit the lamp again, they found Sufyan with tears flowing from his eyes, and they said: What is the matter with you? He said: I thought about the grave.",
          },
          {
            type: "note",
            tone: "info",
            title: "Ibrahim an-Nakhai رحمه الله",
            body: "It was said to Ibrahim an-Nakhai: You think a great deal. He said: Thinking is the essence of reason.",
          },
        ],
      },
      {
        id: "tafakkur-outcomes",
        title: "Outcomes of reflection",
        icon: "84",
        sections: [
          {
            type: "heading",
            kicker: "What tafakkur leads to",
            title: "Outcomes of reflection",
          },
          {
            type: "conditions",
            items: [
              {
                n: 1,
                title: "Increased faith",
                body: "Khalifa al-Abdi رحمه الله said: By Allah, the believers continue to reflect on the creation of their Lord ﷻ until they attain certain faith in their Lord.",
              },
              {
                n: 2,
                title: "Striving hard for the Hereafter and having little interest in worldly gain",
                body: "Ibn Abbas رضي الله عنهما said: Reflecting on what is good prompts one to act upon that, and regretting what is bad prompts one to give it up. Ibn al-Qayyim رحمه الله said: This type of reflection will bear fruit in terms of love and knowledge, for if one thinks about the Hereafter and how sublime it is and how it will last forever, and thinks about this world and how insignificant and transient it is, that will bear fruit in the form of a desire for the Hereafter and little interest in this world. The more he thinks about how hope in this life is limited and how short this life is, this will encourage him to strive hard and do his best to make the most of his time.",
              },
              {
                n: 3,
                title: "Fear of Allah and calling to mind His Might and Greatness",
                body: "Bishr ibn Harith رحمه الله said: If the people thought and reflected on the might and greatness of Allah, they would never disobey Allah. And it was said: Reflection takes away heedlessness and creates fear of Allah in the heart.",
              },
              {
                n: 4,
                title: "Evaluating your spiritual condition and striving to correct any shortcomings",
                body: "Al-Fudayl رحمه الله said: Reflection and contemplation is a mirror that shows you your good deeds and your bad deeds.",
              },
            ],
          },
        ],
      },
      {
        id: "tafakkur-outcomes-more",
        title: "More outcomes of reflection",
        icon: "85",
        sections: [
          {
            type: "heading",
            kicker: "What tafakkur leads to",
            title: "Outcomes of reflection — continued",
          },
          {
            type: "conditions",
            items: [
              {
                n: 5,
                title: "Finding ways to help uplift the ummah",
                body: "With regard to those throughout Islamic history who called people to Allah and sought to rectify their condition and renew their commitment to Islam, it is certain that the first thing they did was to examine the condition of the Muslims to see what they were lacking, where the problems lay and where they were falling short. Then they rolled up their sleeves and strove hard to uplift the Muslim ummah and bring it back to the path of Allah and what pleases Him.",
              },
              {
                n: 6,
                title: "Academic achievement",
                body: "Ash-Shafi‘i رحمه الله said: Seek help to ensure the quality of what you say by pausing and thinking before you speak. In other words, make sure that what you say is important, of value and helps you to reach the right conclusion by means of reflecting and contemplating before you speak. How did the scholars produce so much good work? How did they write and compile these books? How were these branches of knowledge developed and perfected? Undoubtedly a large part of that was the result of contemplation and reflection.",
              },
              {
                n: 7,
                title: "Turning to Allah, and asking for forgiveness and mercy",
                body: "Sufyan ibn Uyaynah رحمه الله always recited this line of poetry: If a man has the habit of reflection / Then he will learn something from everything. And he said: Reflection is the key to mercy. Do you not see that a person may reflect and it leads him to repent?",
              },
            ],
          },
        ],
      },
      {
        id: "tafakkur-virtue",
        title: "The virtue of reflection",
        icon: "86",
        sections: [
          {
            type: "heading",
            kicker: "Among the best worship",
            title: "The virtue of reflection",
          },
          {
            type: "definition",
            label: "The virtue of reflection",
            body: "Reflection is one of the best types of worship.",
          },
          {
            type: "note",
            tone: "benefit",
            title: "Abu’d-Darda رضي الله عنه said",
            body: "To reflect for an hour is better than standing in prayer all night.",
          },
          {
            type: "note",
            tone: "info",
            title: "Ibn Abbas رضي الله عنهما said",
            body: "Two rakahs of moderate length with reflection is better than standing in prayer all night with the mind wandering.",
          },
          {
            type: "note",
            tone: "info",
            title: "Muhammad ibn Ka‘b al-Qurazi رحمه الله said",
            body: "To recite at night until dawn breaks {Idha zulzilat (When the earth is shaken)…} [az-Zalzalah 99] and Surat al-Qari‘ah, and no more than that, repeating them and reflecting, is dearer to me than to recite the entire Quran quickly in one night, with no deliberation.",
          },
        ],
      },
      {
        id: "tafakkur-means",
        title: "Means of sound reflection",
        icon: "87",
        sections: [
          {
            type: "heading",
            kicker: "So that it remains sound",
            title: "Means of ensuring that one’s reflection is sound",
          },
          {
            type: "conditions",
            items: [
              {
                n: 1,
                title: "Seeking refuge with Allah from the devils",
                body: "Allah ﷻ has instructed us to seek refuge with Him from Iblees before starting to read the Quran, because reflecting and pondering upon the verses of the Quran is one of the most important types of reflection, and seeking refuge with Allah before starting to read the Quran is a means of driving away the Shaytan who whispers and insinuates wrong notions into a person’s mind. Ibn Katheer رحمه الله said: The reason for seeking refuge with Allah when starting to read or recite is so that the Shaytan will not make the reciter stumble in his recitation and make him confused, and prevent him from pondering and reflecting.",
              },
              {
                n: 2,
                title: "Keeping away from sin",
                body: "Allah ﷻ says:",
                blocks: [
                  {
                    kind: "ayah",
                    text: "I will turn away from My signs those who are arrogant upon the earth without right; and if they should see every sign, they will not believe in it. And if they see the way of consciousness, they will not adopt it as a way; but if they see the way of error, they will adopt it as a way. That is because they have denied Our signs and they were heedless of them.",
                    ref: "al-A‘raf 7:146",
                  },
                ],
              },
            ],
          },
          {
            type: "note",
            tone: "warning",
            title: "Al-Hasan رحمه الله said, commenting on this verse",
            body: "That is, I shall prevent their hearts from reflecting upon My commands.",
          },
        ],
      },
      {
        id: "tafakkur-activities",
        title: "Activities — reflection",
        icon: "88",
        sections: [
          {
            type: "activities",
            title: "Activities",
            items: [
              "Why is reflecting on the Essence of Allah forbidden, and what is prescribed in that regard?",
              "Write briefly about the outcomes of reflection, adding to them from sources other than what you have studied.",
              "Mention verses that urge us to reflect.",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "unit-12",
    num: 12,
    title: "Muhasabah (taking stock of oneself)",
    titleAr: "المحاسبة",
    lessons: [
      {
        id: "muhasabah",
        title: "The meaning of taking stock of oneself",
        icon: "89",
        sections: [
          {
            type: "heading",
            kicker: "A deed of the heart",
            title: "Taking stock of oneself (muhasabah)",
          },
          {
            type: "intro",
            text: "The nafs (self), by nature, is inconstant and fickle; it is vulnerable to outside influences and is easily swayed by whims and desires and diseases of the heart (spiritual ailments). Hence it is prone to drifting away and following its inclinations. In principle, the nafs is inclined to evil, as Allah ﷻ says:",
          },
          {
            type: "ayah",
            text: "Indeed, the soul [nafs] is a persistent enjoiner of evil, except those upon which my Lord has mercy.",
            ref: "Yusuf 12:53",
          },
          {
            type: "note",
            tone: "warning",
            title: "A serious danger",
            body: "Hence the nafs poses a serious danger to the individual, unless he manages to restrain it with the reins of mindfulness and fear of Allah ﷻ, and leaves it no other choice but to follow the truth.",
          },
          {
            type: "split",
            items: [
              {
                label: "In linguistic terms",
                title: "Muhasabah",
                body: "The Arabic word muhasabah (translated here as taking stock of oneself) refers to counting and reckoning.",
              },
              {
                label: "In Islamic terminology",
                title: "Muhasabah",
                body: "It refers to thinking about one’s deeds, and striving to correct mistakes and to persist in doing righteous deeds.",
              },
            ],
          },
          {
            type: "note",
            tone: "benefit",
            title: "Al-Mawardi رحمه الله said of muhasabah",
            body: "It refers to a person reviewing at night deeds that he did during the day; if they were good, he approves of them and follows them with more deeds of that nature and type, but if they were blameworthy, he corrects them if possible, and refrains from doing similar deeds in the future.",
          },
        ],
      },
      {
        id: "muhasabah-texts",
        title: "In the Quran, Sunnah and scholars’ words",
        icon: "90",
        sections: [
          {
            type: "heading",
            kicker: "From revelation",
            title: "Muhasabah (taking stock of oneself) in the Quran, the Sunnah, and the words of the scholars",
          },
          {
            type: "intro",
            text: "Allah ﷻ has instructed His slaves to take stock of themselves, as He says:",
          },
          {
            type: "ayah",
            text: "O you who have believed, fear Allah. And let every soul look to what it has put forth for tomorrow — and fear Allah. Indeed, Allah is Acquainted with what you do. And be not like those who forgot Allah, so He made them forget themselves. Those are the defiantly disobedient.",
            ref: "al-Hashr 59:18–19",
          },
          {
            type: "note",
            tone: "benefit",
            title: "As-Sa‘di رحمه الله said",
            body: "This verse clearly refers to taking stock of oneself (muhasabah) and indicates that the individual should check himself, and if he sees any slip or error, he should correct it by giving it up, repenting sincerely, and avoiding the things that led to that error. If he sees himself falling short with regard to any of the commands of Allah, he should strive hard and seek the help of his Lord in improving and perfecting his deeds.",
          },
          {
            type: "ayah",
            text: "And I swear by the reproaching soul.",
            ref: "al-Qiyamah 75:2",
          },
          {
            type: "note",
            tone: "info",
            title: "Al-Hasan رحمه الله said, commenting on this verse",
            body: "You will not find the believer in any state except questioning his actions and rebuking himself: What was my intention when I said that? What was my intention when I ate that? What was my intention when I drank that? The evildoer keeps going and does not question his actions or rebuke himself.",
          },
          {
            type: "intro",
            text: "In the Sunnah, we see the hadith of Shaddad ibn Aws رضي الله عنه, according to which the Prophet ﷺ said:",
          },
          {
            type: "ayah",
            text: "The smart one is the one who takes stock of himself — in this world before the Hereafter — and strives for that which comes after death. The helpless one is the one who follows his whims and desires and indulges in wishful thinking about Allah.",
            ref: "Narrated by Ahmad and by at-Tirmidhi, who classed it as sahih",
          },
        ],
      },
      {
        id: "muhasabah-obligation",
        title: "Scholarly consensus and muhasabah before action",
        icon: "91",
        sections: [
          {
            type: "heading",
            kicker: "Agreed upon",
            title: "Taking stock of oneself is one of the deeds concerning which there is scholarly consensus",
          },
          {
            type: "note",
            tone: "benefit",
            title: "Al-Izz ibn Abd as-Salam رحمه الله said",
            body: "The scholars are unanimously agreed that it is obligatory to take stock of oneself with regard to one’s past deeds, in addition to his future deeds.",
          },
          {
            type: "heading",
            kicker: "Two types",
            title: "Types of taking stock of oneself — muhasabah is of two types",
          },
          {
            type: "definition",
            label: "The first type",
            title: "Before doing an action",
            body: "This means that the individual should look at the deed and ask whether he is able to do it, in which case he should go ahead and do it, such as fasting and praying qiyam (voluntary prayers at night), or he is not able to do it, in which case he should refrain from doing it. Then he should ask whether there is any benefit to be attained in this world or the Hereafter by doing that deed, in which case he should do it, or his deed will lead to harm in this world or the Hereafter, in which case he should refrain from doing it. Then he should ask whether this deed is for the sake of Allah ﷻ or for the sake of people. If he is going to do it for the sake of Allah, he should go ahead and do it, but if his intention is other than that, he should refrain from doing it.",
          },
          {
            type: "note",
            tone: "info",
            title: "Al-Hasan رحمه الله said",
            body: "When one of them wanted to do an act of charity, he would pause and think, then if it was for the sake of Allah, he would go ahead, but if it was otherwise, he would refrain.",
          },
        ],
      },
      {
        id: "muhasabah-after",
        title: "Muhasabah after doing an action",
        icon: "92",
        sections: [
          {
            type: "heading",
            kicker: "The second type",
            title: "The second type is after doing an action. It is of three kinds",
          },
          {
            type: "conditions",
            items: [
              {
                n: 1,
                title: "Taking stock of oneself for acts of worship",
                body: "And constantly asking oneself: Did I do this obligatory action in the most perfect manner, sincerely for the sake of Allah ﷻ and in accordance with the teachings of the Messenger of Allah ﷺ? Similarly, in the case of supererogatory actions, he should ask himself: Did you omit some supererogatory actions, or did you fail to read Quran, or did you omit your daily dhikr, or did you fall short in it? The good outcome of this type of taking stock of oneself is that it helps you to make up for shortcomings and correct mistakes, to hasten to do good and refrain from doing prohibited and evil actions, and to repent from them and offer a lot of prayers for forgiveness.",
              },
              {
                n: 2,
                title: "Taking stock of oneself with regard to sins and bad deeds that you have committed",
                body: "What made you do that? And what would be the case if you had changed your mind before doing that action? After taking stock of yourself in this manner, you can look at what decision could result from this taking stock of yourself, which is to strive to expiate for that sin. So you can hasten to rectify your situation by repenting sincerely, praying for forgiveness, and doing good deeds that erase sins and remove bad deeds, in accordance with the verse in which Allah ﷻ says:",
                blocks: [
                  {
                    kind: "ayah",
                    text: "Indeed, good deeds do away with misdeeds.",
                    ref: "Hud 11:114",
                  },
                ],
              },
              {
                n: 3,
                title: "Taking stock of oneself with regard to something you did when refraining from it would have been better than doing it, or with regard to something permissible",
                body: "Asking oneself: Why did I do that? Would it not have been better not to do it? What benefit did I gain from it? Will it increase my good deeds (hasanat)?",
              },
            ],
          },
        ],
      },
      {
        id: "muhasabah-priorities",
        title: "Order of priorities in muhasabah",
        icon: "93",
        sections: [
          {
            type: "heading",
            kicker: "Where to begin",
            title: "Order of priorities in taking stock of oneself (muhasabah)",
          },
          {
            type: "intro",
            text: "Ibn al-Qayyim رحمه الله said: The individual should take stock of himself, first of all, with regard to obligatory duties.",
          },
          {
            type: "conditions",
            items: [
              {
                n: 1,
                title: "Obligatory duties",
                body: "If he notices some shortcoming, he should try to deal with it, either by making it up or rectifying what he did not do properly.",
              },
              {
                n: 2,
                title: "Forbidden things",
                body: "Then he should take stock of himself with regard to forbidden things. If he knows that he committed such an act, he should deal with it by repenting, seeking forgiveness and doing good deeds that erase sins.",
              },
              {
                n: 3,
                title: "Heedlessness",
                body: "Then he should take stock of himself with regard to heedlessness. If he was heedless of the purpose for which he was created, he should deal with it by remembering Allah (dhikr) and turning to Him ﷻ.",
              },
              {
                n: 4,
                title: "Words, walking, striking and hearing",
                body: "Then he should take stock of himself with regard to the words he spoke, the places he walked to, those whom he struck with his hands, and what his ears heard, asking himself: What did I intend by these actions? For whom did I do it? How and in what manner? He should know that every movement or word should be judged on two counts: for whose sake it was done and how it was done? The former is a question about sincerity, and the latter is a question about whether it was in accordance with the Sunnah.",
              },
            ],
          },
        ],
      },
      {
        id: "muhasabah-outcomes",
        title: "Outcomes of taking stock of oneself",
        icon: "94",
        sections: [
          {
            type: "heading",
            kicker: "What muhasabah leads to",
            title: "Outcomes of taking stock of oneself (muhasabah)",
          },
          {
            type: "conditions",
            items: [
              {
                n: 1,
                title: "Salvation and success",
                body: "Al-Hasan رحمه الله said: A person will continue to be fine so long as he has a conscience to exhort him and he constantly pays attention to taking stock of himself.",
              },
              {
                n: 2,
                title: "It will make his reckoning easier on the Day of Resurrection",
                body: "Umar ibn al-Khattab رضي الله عنه said: Take stock of yourselves before you are brought to account, for it will make your reckoning easier. Weigh yourselves before you are weighed, for it will be easier for you. Prepare yourselves for the great examination. Al-Hasan al-Basri رحمه الله said: The believer is in charge of himself, taking stock of himself for the sake of Allah. The reckoning will only be easier for people who took stock of themselves in this world, and the only reason why the reckoning on the Day of Resurrection will be harder for some people is that they acted without taking stock of themselves.",
              },
              {
                n: 3,
                title: "Preservation of faith and protection against hypocrisy and evildoing",
                body: "Al-Fudayl ibn Iyad رحمه الله said: The believer takes stock of himself and knows that he will have to stand before Allah ﷻ. The hypocrite is heedless about his actions. May Allah have mercy on a person who examines himself before the angel of death comes down to him.",
              },
            ],
          },
        ],
      },
      {
        id: "muhasabah-outcomes-more",
        title: "More outcomes of muhasabah",
        icon: "95",
        sections: [
          {
            type: "heading",
            kicker: "What muhasabah leads to",
            title: "Outcomes of taking stock of oneself — continued",
          },
          {
            type: "conditions",
            items: [
              {
                n: 4,
                title: "Finding out about one’s shortcomings and faults, and not being deceived by one’s good deeds",
                body: "Abd al-Aziz ibn Abi Rawwad رحمه الله said: I never did any righteous deeds after which I took stock of myself, but I found that the share of the Shaytan was greater than the share of Allah ﷻ.",
              },
              {
                n: 5,
                title: "Humility before Allah, and knowing the true estimate of oneself",
                body: "Muhammad ibn Wasi رحمه الله used to say: If sins had a bad smell, no one would be able to sit with me! This was despite the fact that he was one of the greatest worshippers among this ummah.",
              },
              {
                n: 6,
                title: "Making good use of one’s time",
                body: "Taking stock of oneself leads a person to make the best use of his time. Ibn Asakir رحمه الله used to say: Abu’l-Fath Nasr ibn Ibrahim al-Maqdisi used to take stock of himself at every moment, and he did not let any time pass without making sure that he did something useful, either writing, studying or reading.",
              },
            ],
          },
        ],
      },
      {
        id: "muhasabah-means",
        title: "What helps you to take stock of yourself",
        icon: "96",
        sections: [
          {
            type: "heading",
            kicker: "How to practise it",
            title: "What helps you to take stock of yourself",
          },
          {
            type: "conditions",
            items: [
              {
                n: 1,
                title: "Having certain faith that Allah ﷻ sees what is in your heart",
                body: "Allah ﷻ says: {And know that Allah knows what is within yourselves, so fear Him} [al-Baqarah 2:235]; that is, take stock of yourselves.",
              },
              {
                n: 2,
                title: "Knowing that by taking stock of yourself now, you will be spared troubles in the Hereafter",
                body: "Ibn al-Qayyim رحمه الله said: What helps one to remember that Allah is always watching and to take stock of oneself is realizing that the harder a person strives today, the easier it will be for him tomorrow, when someone else will bring him to account.",
              },
              {
                n: 3,
                title: "Thinking about the questions one will be asked on the Day of Resurrection",
                body: "This guarantees that a person will take stock of himself, turn to Allah, stop being heedless and following whims and desires, follow the truth, commit himself to doing obligatory deeds, give up haram actions, do a lot of recommended (mustahabb) deeds, and stay away from that which is disliked (makruh) or ambiguous. It is not only the disbelievers and hypocrites who will be questioned; rather the righteous and the Messengers will also be questioned. Allah ﷻ says:",
                blocks: [
                  {
                    kind: "ayah",
                    text: "Indeed, the hearing, the sight and the heart — about all those [one] will be questioned.",
                    ref: "al-Isra 17:36",
                  },
                  {
                    kind: "ayah",
                    text: "Then you will surely be asked that Day about pleasure.",
                    ref: "at-Takathur 102:8",
                  },
                  {
                    kind: "ayah",
                    text: "That He may question the truthful about their truth.",
                    ref: "al-Ahzab 33:8",
                  },
                  {
                    kind: "ayah",
                    text: "Then We will surely question those to whom [a message] was sent, and We will surely question the messengers.",
                    ref: "al-A‘raf 7:6",
                  },
                ],
              },
              {
                n: 4,
                title: "Remembering the horrors of the Day of Resurrection",
                body: "Umar ibn Abd al-Aziz رحمه الله wrote to Adiy ibn Arta’ah, saying: Fear Allah, O Adiy, and take stock of yourself before the Day of Resurrection.",
              },
              {
                n: 5,
                title: "Remembering death",
                body: "A man gossiped in the presence of Ma‘ruf al-Karkhi رحمه الله and he said to him: Remember the cotton [of the shroud] when they place it over your eyes.",
              },
            ],
          },
        ],
      },
      {
        id: "muhasabah-salaf",
        title: "The salaf and taking stock of oneself",
        icon: "97",
        sections: [
          {
            type: "heading",
            kicker: "How they held themselves to account",
            title: "The righteous early generations (as-salaf as-salih) and taking stock of oneself (muhasabah)",
          },
          {
            type: "note",
            tone: "benefit",
            title: "Anas ibn Malik رضي الله عنه said",
            body: "I went out with Umar ibn al-Khattab رضي الله عنه and he entered a garden, and I heard him saying, with a wall between me and him, when he was inside the garden: “Umar ibn al-Khattab, the leader of the believers (amir al-mu’mineen)! Bah! Bah! By Allah, you should surely fear Allah or He will surely punish you!”",
          },
          {
            type: "note",
            tone: "info",
            title: "He missed praying Asr in congregation",
            body: "So he gave in charity a piece of land the value of which was two hundred thousand dirhams.",
          },
          {
            type: "note",
            tone: "info",
            title: "Ibn Umar رضي الله عنهما",
            body: "If Ibn Umar رضي الله عنهما missed a prayer in congregation, he would spend that entire night in prayer.",
          },
          {
            type: "note",
            tone: "info",
            title: "Umar ibn Abd al-Aziz رحمه الله",
            body: "One night, Umar ibn Abd al-Aziz رحمه الله delayed Maghrib prayer until two stars appeared, so he manumitted two slaves, even though the time for the prayer had not ended.",
          },
          {
            type: "note",
            tone: "info",
            title: "Ibn Abi Rabeeah رحمه الله",
            body: "Ibn Abi Rabeeah رحمه الله missed the two rakahs of the Sunnah prayer before Fajr, and he manumitted a slave.",
          },
          {
            type: "note",
            tone: "info",
            title: "The mother of Ibn Awn رحمه الله",
            body: "The mother of Ibn Awn رحمه الله called him, and he responded, but he spoke more loudly than she had done, so he manumitted a slave.",
          },
        ],
      },
      {
        id: "muhasabah-activities",
        title: "Activities — taking stock of oneself",
        icon: "98",
        sections: [
          {
            type: "activities",
            title: "Activities",
            items: [
              "How does the following verse form one of the guidelines on taking stock of oneself: {O you who have believed, fear Allah. And let every soul look to what it has put forth for tomorrow} [al-Hashr 59:18]?",
              "Taking stock of oneself leads to immense benefits and outcomes. List them, bearing in mind some of the reports mentioned above.",
              "How can a person take stock of himself after doing a deed? Explain in detail what you say.",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "unit-13",
    num: 13,
    title: "Tawakkul (relying on Allah)",
    titleAr: "التوكل",
    lessons: [
      {
        id: "tawakkul",
        title: "The meaning of relying on Allah",
        icon: "99",
        sections: [
          {
            type: "heading",
            kicker: "A deed of the heart",
            title: "Relying on Allah (tawakkul)",
          },
          {
            type: "intro",
            text: "Relying on Allah is one of the greatest means of attaining success, and it is something that Allah loves and is pleased with. It reflects a high level of affirming Allah’s oneness (Tawhid) and it is one of the most important things that a person can do in his journey towards Allah ﷻ, as He says:",
          },
          {
            type: "ayah",
            text: "It is You we worship and You we ask for help.",
            ref: "al-Fatihah 1:5",
          },
          {
            type: "split",
            items: [
              {
                label: "In linguistic terms",
                title: "Tawakkul",
                body: "The Arabic word tawakkul means delegating something to someone else, and relying upon them to do it.",
              },
              {
                label: "In Islamic terminology",
                title: "Az-Zubaydi رحمه الله",
                body: "Tawakkul means relying on that which is with Allah, and despairing of that which is in the hands of people.",
              },
            ],
          },
          {
            type: "note",
            tone: "benefit",
            title: "Ibn Uthaymeen رحمه الله said",
            body: "Tawakkul means sincerely relying on Allah ﷻ to bring benefits and ward off harm, whilst taking appropriate measures as Allah has enjoined.",
          },
        ],
      },
      {
        id: "tawakkul-quran",
        title: "Allah urges reliance upon Him",
        icon: "100",
        sections: [
          {
            type: "heading",
            kicker: "In His Noble Book",
            title: "Allah urges His believing slaves to rely on Him in numerous places in His Noble Book",
          },
          {
            type: "intro",
            text: "For example, He ﷻ says:",
          },
          {
            type: "ayah",
            text: "And upon Allah rely, if you should be believers.",
            ref: "al-Ma’idah 5:23",
          },
          {
            type: "ayah",
            text: "And upon Allah let the believers rely.",
            ref: "at-Tawbah 9:51",
          },
          {
            type: "ayah",
            text: "And whoever relies upon Allah — then He is sufficient for him.",
            ref: "at-Talaq 65:3",
          },
          {
            type: "ayah",
            text: "And when you have decided, then rely upon Allah. Indeed, Allah loves those who rely [upon Him].",
            ref: "Aal Imran 3:159",
          },
          {
            type: "intro",
            text: "Allah ﷻ says, describing His believing slaves by way of praising and commending them:",
          },
          {
            type: "ayah",
            text: "The believers are only those who, when Allah is mentioned, their hearts become fearful, and when His verses are recited to them, it increases them in faith; and upon their Lord they rely.",
            ref: "al-Anfal 8:2",
          },
        ],
      },
      {
        id: "tawakkul-status",
        title: "The status of tawakkul in Islam",
        icon: "101",
        sections: [
          {
            type: "heading",
            kicker: "Half of religion",
            title: "The status of relying on Allah (tawakkul) in Islam",
          },
          {
            type: "note",
            tone: "benefit",
            title: "Ibn al-Qayyim رحمه الله said",
            body: "Relying on Allah (tawakkul) is half of religion, and the other half is turning to Him (inabah). Religion is seeking the help of Allah and worshipping Him, so relying on Allah is seeking His help and turning to Him is worshipping Him.",
          },
          {
            type: "note",
            tone: "info",
            title: "Tawhid al-uluhiyah",
            body: "It is one of the essential components of worshipping Allah Alone (Tawhid al-uluhiyah), as is indicated by the verse in which Allah ﷻ says:",
          },
          {
            type: "ayah",
            text: "It is You we worship and You we ask for help.",
            ref: "al-Fatihah 1:5",
          },
        ],
      },
      {
        id: "tawakkul-faith",
        title: "Tawakkul is a condition of faith",
        icon: "102",
        sections: [
          {
            type: "heading",
            kicker: "A condition of faith",
            title: "Relying on Allah (tawakkul) is a condition of faith",
          },
          {
            type: "ayah",
            text: "And upon Allah rely, if you should be believers.",
            ref: "al-Ma’idah 5:23",
          },
          {
            type: "note",
            tone: "benefit",
            title: "The true sense of the word",
            body: "You should understand that whoever delegates his affairs to Allah, and is content with what He decrees and chooses for him, has relied on Him in the true sense of the word. As for the one who delegates his affairs to someone other than Allah, and puts his hope in someone other than Him, he is bound to fail because he is heedless of his Lord ﷻ.",
          },
          {
            type: "ayah",
            text: "He who suffers poverty and seeks relief from people, he will not be granted relief; but he who seeks relief from Allah Alone, Allah will soon make him independent of means.",
            ref: "Ibn Mas‘ud رضي الله عنه — Ahmad and Abu Dawud; at-Tirmidhi classed it as sahih",
          },
          {
            type: "definition",
            label: "A phrase of tawakkul",
            title: "Hasbuna Allahu wa ni‘am al-wakeel",
            body: "Allah is sufficient for us and the best one on whom to depend.",
          },
          {
            type: "note",
            tone: "benefit",
            title: "Ibn Abbas رضي الله عنهما said",
            body: "Hasbuna Allahu wa ni‘am al-wakeel (Allah is sufficient for us and the best one on whom to depend). Ibrahim عليه السلام said it when he was thrown into the fire, and Muhammad ﷺ said it when they said: The people have gathered against you, so fear them. But it only increased them in faith and they said: Hasbuna Allahu wa ni‘am al-wakeel (Allah is sufficient for us and the best one on whom to depend). Narrated by al-Bukhari.",
          },
        ],
      },
      {
        id: "tawakkul-means",
        title: "Taking appropriate measures",
        icon: "103",
        sections: [
          {
            type: "heading",
            kicker: "Not laziness",
            title: "The importance of taking appropriate measures",
          },
          {
            type: "intro",
            text: "Allah ﷻ taught His slaves to take appropriate measures, as He says:",
          },
          {
            type: "ayah",
            text: "It is He who made the earth tame for you — so walk among its slopes and eat of His provision — and to Him is the resurrection.",
            ref: "al-Mulk 67:15",
          },
          {
            type: "intro",
            text: "His Messenger ﷺ also taught us that. It was narrated that Anas ibn Malik رضي الله عنه said: A man said: O Messenger of Allah, Should I tie it [a she-camel] up and rely on Allah, or should I leave it free and rely on Allah? He said:",
          },
          {
            type: "ayah",
            text: "Tie it up and rely on Allah.",
            ref: "Narrated by at-Tirmidhi; classed as hasan by al-Albani",
          },
          {
            type: "note",
            tone: "warning",
            title: "Failing to take appropriate measures",
            body: "As for the one who fails to take appropriate measures, on the grounds that he is relying on Allah, he is helpless, for failing to take appropriate measures is a corrupt notion and is contrary to reason; it is the way of lazy people.",
          },
          {
            type: "note",
            tone: "warning",
            title: "When Al-Imam Ahmad رحمه الله was asked",
            body: "About these people who claimed to rely on Allah and said: We will sit here and our provision is incumbent upon Allah ﷻ, he said: This is a corrupt notion! Doesn’t Allah say:",
          },
          {
            type: "ayah",
            text: "O you who have believed, when [the adhan] is called for the prayer on the day of Jumu‘ah [Friday], then proceed to the remembrance of Allah and leave trade. That is better for you, if you only knew. And when the prayer has been concluded, disperse within the land and seek from the bounty of Allah, and remember Allah often, that you may succeed.",
            ref: "al-Jumu‘ah 62:9–11",
          },
          {
            type: "note",
            tone: "info",
            title: "Without exhausting yourself",
            body: "That does not mean that a person should exhaust himself in taking measures to seek from the bounty of Allah and take on that which he is not able to do. Rather it is sufficient to do what he is able to do, without exhausting himself, whilst having firm resolve and relying on Allah; then he will be able to achieve a great deal.",
          },
          {
            type: "note",
            tone: "benefit",
            title: "If no possible means are available",
            body: "If a person has no possible means available to him, then he should not forget the greatest and strongest of means, which is calling upon Allah ﷻ in supplication and seeking His help.",
          },
        ],
      },
      {
        id: "tawakkul-other",
        title: "Relying on someone other than Allah",
        icon: "104",
        sections: [
          {
            type: "heading",
            kicker: "Three categories",
            title: "Relying on someone other than Allah ﷻ. This falls into three categories",
          },
          {
            type: "conditions",
            items: [
              {
                n: 1,
                title: "The first category",
                body: "Relying on someone else with regard to matters in which no one is able to help except Allah, such as those who rely on the dead and false gods, hoping that they will help them to achieve their aims such as victory, provision or intercession. This constitutes major shirk.",
              },
              {
                n: 2,
                title: "The second category",
                body: "Relying on visible means, such as someone who relies on a governor or ruler with regard to that which Allah ﷻ has given him power over, such as provision, warding off harm and the like. This is a type of minor shirk.",
              },
              {
                n: 3,
                title: "The third category",
                body: "Relying on someone else whom you delegate to do something that he is able to do on your behalf. This is permissible, but you should not rely on him to attain the expected result; rather you should rely on Allah to make easy for him the matter that you yourself or your proxy are seeking to do. This comes under the heading of measures and means that it is permissible to do, but one should not rely on them; rather one should rely on the Creator of the measures and causes, Who ordained cause and effect.",
              },
            ],
          },
        ],
      },
      {
        id: "tawakkul-outcomes",
        title: "Outcomes of relying on Allah",
        icon: "105",
        sections: [
          {
            type: "heading",
            kicker: "What tawakkul leads to",
            title: "Outcomes of relying on Allah",
          },
          {
            type: "conditions",
            items: [
              {
                n: 1,
                title: "Being sufficed in all things, being supported against one’s enemies, and protection of oneself, one’s wife and one’s children",
                body: "Allah ﷻ says:",
                blocks: [
                  {
                    kind: "ayah",
                    text: "O Prophet, sufficient for you is Allah and for whoever follows you of the believers.",
                    ref: "al-Anfal 8:64",
                  },
                ],
              },
            ],
          },
          {
            type: "note",
            tone: "info",
            title: "When Yaqub عليه السلام gave his sons the advice that would protect them",
            body: "After that he delegated his affairs to Allah, relying on Him, as he said:",
          },
          {
            type: "ayah",
            text: "The decision is only for Allah; upon Him I have relied, and upon Him let those who would rely [indeed] rely.",
            ref: "Yusuf 12:67",
          },
          {
            type: "ayah",
            text: "And whoever relies upon Allah — then He is sufficient for him.",
            ref: "at-Talaq 65:3",
          },
          {
            type: "ayah",
            text: "If you truly relied upon Allah as you should, you would be granted provision as the birds are granted provision; they go out in the morning with empty stomachs and come back in the evening with full stomachs.",
            ref: "Umar ibn al-Khattab رضي الله عنه — at-Tirmidhi; classed as sahih by al-Albani",
          },
          {
            type: "note",
            tone: "benefit",
            title: "Al-Hafiz Ibn Rajab رحمه الله said",
            body: "This hadith is the guideline with regard to relying on Allah, which is one of the greatest means of attaining provision. Allah ﷻ says:",
          },
          {
            type: "ayah",
            text: "And whoever fears Allah — He will make for him a way out, And will provide for him from where he does not expect. And whoever relies upon Allah — then He is sufficient for him.",
            ref: "at-Talaq 65:2–3",
          },
          {
            type: "note",
            tone: "info",
            title: "The poet said",
            body: "I guarantee to save from harm / The one who does not spend the night calling upon anyone other than Allah for help.",
          },
        ],
      },
      {
        id: "tawakkul-outcomes-more",
        title: "More outcomes of tawakkul",
        icon: "106",
        sections: [
          {
            type: "heading",
            kicker: "What tawakkul leads to",
            title: "Outcomes of relying on Allah — continued",
          },
          {
            type: "conditions",
            items: [
              {
                n: 2,
                title: "The love of Allah ﷻ",
                body: "As He says:",
                blocks: [
                  {
                    kind: "ayah",
                    text: "Indeed, Allah loves those who rely [upon Him].",
                    ref: "Aal Imran 3:159",
                  },
                ],
              },
              {
                n: 3,
                title: "Admittance to Paradise without being brought to account",
                body: "According to the hadith of Ibn Abbas رضي الله عنهما, it was said to the Prophet ﷺ:",
                blocks: [
                  {
                    kind: "hadith",
                    text: "Look at the horizon. And I saw a huge multitude of people filling the horizon. Then it was said to me: Look here and there on the horizon, and I saw a huge multitude of people filling the horizon. It was said: This is your ummah, and of these people, seventy thousand will enter Paradise without being brought to account. They are the ones who did not ask others to do ruqyah for them, or believe in omens, or use cautery, and on their Lord they relied.",
                    ref: "Agreed upon",
                  },
                ],
              },
              {
                n: 4,
                title: "Protection against the Shaytan",
                body: "Allah ﷻ says:",
                blocks: [
                  {
                    kind: "ayah",
                    text: "Private conversation is only from Satan that he may grieve those who have believed, but he will not harm them at all except by permission of Allah. And upon Allah let the believers rely.",
                    ref: "al-Mujadilah 58:10",
                  },
                  {
                    kind: "hadith",
                    text: "If he says ‘Bismillah, tawakkaltu ala Allah, laa hawla wa laa quwwata illa Billah (In the name of Allah, I rely on Allah, there is no power and no strength except with Allah),’ it will be said to him: ‘You have been sufficed and protected,’ and the Shaytan will go far away from him.",
                    ref: "Anas ibn Malik رضي الله عنه, concerning one who goes out of his house — at-Tirmidhi; classed as sahih by al-Albani",
                  },
                ],
              },
              {
                n: 5,
                title: "Peace of mind, resolve, motivation, and a sense of pride and independence of means",
                body: "Allah ﷻ says:",
                blocks: [
                  {
                    kind: "ayah",
                    text: "But whoever relies upon Allah — then indeed, Allah is Exalted in Might and Wise.",
                    ref: "al-Anfal 8:49",
                  },
                ],
              },
            ],
          },
          {
            type: "note",
            tone: "benefit",
            title: "Ibn al-Qayyim رحمه الله said",
            body: "If the individual relied on Allah in the true sense of the word to remove a mountain from its place, and it was obligatory for him to move it, he would be able to move it.",
          },
        ],
      },
      {
        id: "tawakkul-contrary",
        title: "Things contrary to tawakkul",
        icon: "107",
        sections: [
          {
            type: "heading",
            kicker: "What opposes it",
            title: "Things that are contrary to relying on Allah (tawakkul)",
          },
          {
            type: "conditions",
            items: [
              {
                n: 1,
                title: "Belief in bad omens and pessimism",
                body: "The Prophet ﷺ warned against belief in evil omens, as he said:",
                blocks: [
                  {
                    kind: "hadith",
                    text: "Belief in bad omens is shirk.",
                    ref: "Narrated by Ahmad and Abu Dawud with a sahih isnad",
                  },
                ],
              },
              {
                n: 2,
                title: "Going to sorcerers, fortune-tellers, and astrologers to find out about the unseen and the future",
                body: "Shaykh al-Islam Ibn Taymiyyah and Ibn Qayyim al-Jawziyah stated that when Ali ibn Abi Talib رضي الله عنه wanted to travel to fight the Khawarij, an astrologer said to him: O Amir al-Mu’mineen, do not travel, for the moon is in Scorpio, and if you travel when the moon is in Scorpio, your army will be defeated. Ali رضي الله عنه said: Rather I shall travel, putting my trust in Allah and relying on Him, and disbelieving in what you say. So he travelled and was blessed on that journey, and defeated the Khawarij utterly.",
              },
              {
                n: 3,
                title: "Wearing and using amulets",
                body: "Such as wearing (or hanging up) blue beads or blue eyes (“evil eye” symbol) or amulets that people obtain from liars and charlatans, or hanging some dead animals, on the door of the house, in the car and so on, for the purpose of protecting themselves! The Prophet ﷺ said, condemning such actions: “Whoever wears [or hangs up] anything [for protection] will be entrusted to it.” Narrated by at-Tirmidhi and Ahmad. Al-Albani said: It is hasan because of corroborating evidence. If people wear or hang up amulets and do not rely on Allah, He will leave them to that to which they attached their hopes, and that is sufficient doom.",
              },
            ],
          },
        ],
      },
      {
        id: "tawakkul-contrary-more",
        title: "Not taking appropriate measures",
        icon: "108",
        sections: [
          {
            type: "heading",
            kicker: "What opposes it",
            title: "4. Not taking appropriate measures, such as striving to seek provision",
          },
          {
            type: "ayah",
            text: "For one of you to take a bundle of firewood on his back [and sell it] is better for him than asking of someone who may or may not give him something.",
            ref: "Agreed upon",
          },
          {
            type: "ayah",
            text: "No one ever eats any food better than that which he earns by working with his own hands, and Allah’s Prophet Dawud عليه السلام used to eat from what he earned by working with his own hands.",
            ref: "Narrated by al-Bukhari",
          },
          {
            type: "note",
            tone: "warning",
            title: "Not seeking medical treatment",
            body: "The Prophet ﷺ enjoined seeking medical treatment, as he said:",
          },
          {
            type: "ayah",
            text: "Seek medical treatment, O slaves of Allah.",
            ref: "Narrated by at-Tirmidhi; classed as sahih by al-Albani",
          },
          {
            type: "ayah",
            text: "Allah ﷻ has not sent down any disease but He has also sent down a remedy for it.",
            ref: "Narrated by al-Bukhari",
          },
        ],
      },
      {
        id: "tawakkul-stories",
        title: "Stories of those who relied on Allah",
        icon: "109",
        sections: [
          {
            type: "heading",
            kicker: "Examples",
            title: "Stories of those who relied on Allah",
          },
          {
            type: "note",
            tone: "benefit",
            title: "The Prophet ﷺ in the cave",
            body: "It was narrated that Abu Bakr رضي الله عنه said: I said to the Prophet ﷺ when I was in the cave: If one of them looks down at his feet, he will see us. He said:",
          },
          {
            type: "ayah",
            text: "What do you think, O Abu Bakr, of two, of whom Allah is the third?",
            ref: "Agreed upon",
          },
          {
            type: "note",
            tone: "info",
            title: "The woman and her goats",
            body: "It was narrated that the Prophet ﷺ said: A woman went out with some of the Muslims on a campaign, leaving behind twelve goats of hers and her spindle with which she used to make thread. She lost one of her goats and her spindle, so she said: “O Lord, You guaranteed the one who goes out in Your cause that You would protect him, and I have lost one of my goats and my spindle. I beseech You to restore my goat and my spindle.” And the Messenger of Allah ﷺ described how intensely she beseeched her Lord ﷻ. “The following morning, she found her goat and another like it, and her spindle and another like it.” Narrated by Ahmad; classed as sahih by al-Albani.",
          },
        ],
      },
      {
        id: "tawakkul-activities",
        title: "Activities — relying on Allah",
        icon: "110",
        sections: [
          {
            type: "activities",
            title: "Activities",
            items: [
              "How can one reconcile between trusting Allah and relying upon Him, and taking appropriate measures?",
              "Write a response to those who say that there is no need to take measures, highlighting how foolish and contradictory their thinking is.",
              "Write briefly about things that are contrary to relying on Allah (tawakkul).",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "unit-14",
    num: 14,
    title: "Contents",
    titleAr: "المحتويات",
    lessons: [
      {
        id: "contents",
        title: "Contents",
        icon: "111",
        sections: [
          {
            type: "heading",
            kicker: "Book of Islamic Education (2)",
            title: "Contents",
          },
          {
            type: "heading",
            kicker: "11",
            title: "Sincerity (ikhlas)",
          },
          {
            type: "list",
            items: [
              { title: "The importance of the intention (niyyah)", body: "11" },
              {
                title: "Ruling on intending to gain some worldly benefit when doing some deeds for the Hereafter",
                body: "14",
              },
              { title: "Riya (showing off)", body: "15" },
              { title: "When is doing a good deed openly prescribed?", body: "16" },
            ],
          },
          {
            type: "heading",
            kicker: "18",
            title: "Mindfulness of Allah (taqwa)",
          },
          {
            type: "list",
            items: [
              {
                title: "Does refraining from perfectly permissible things come under the heading of being mindful of Allah (tawqa)?",
                body: "20",
              },
            ],
          },
          {
            type: "heading",
            kicker: "26",
            title: "Fear (khawf)",
          },
          {
            type: "list",
            items: [
              { title: "The status of fear of Allah (khawf)", body: "27" },
              { title: "People fall into different categories in terms of fearing Allah", body: "27" },
            ],
          },
          {
            type: "heading",
            kicker: "33",
            title: "Hope (raja)",
          },
          {
            type: "list",
            items: [
              { title: "The difference between hope and wishful thinking", body: "33" },
              { title: "The attitude of the Sufis regarding fear and hope", body: "37" },
            ],
          },
          {
            type: "heading",
            kicker: "39",
            title: "Love (mahabbah)",
          },
          {
            type: "list",
            items: [
              { title: "Ruling on love of Allah ﷻ", body: "39" },
              { title: "Ways of attaining Allah’s love for you and of attaining love for Allah ﷻ", body: "40" },
            ],
          },
          {
            type: "heading",
            kicker: "43",
            title: "Patience (sabr)",
          },
          {
            type: "list",
            items: [
              { title: "Outcomes of gratitude (shukr’)", body: "47" },
            ],
          },
          {
            type: "heading",
            kicker: "49",
            title: "Gratitude (shukr)",
          },
          {
            type: "list",
            items: [
              { title: "The difference between praise (hamd) and gratitude (shukr)", body: "49" },
              { title: "Ruling on being ungrateful for the blessings of Allah", body: "51" },
              { title: "Patience (sabr) and gratitude (shukr)", body: "54" },
            ],
          },
          {
            type: "heading",
            kicker: "56",
            title: "Piety (wara)",
          },
          {
            type: "list",
            items: [
              { title: "The difference between asceticism (zuhd) and piety (wara)", body: "59" },
              { title: "Piety (wara) is mentioned alongside knowledge", body: "60" },
            ],
          },
          {
            type: "heading",
            kicker: "12 · 63",
            title: "Contentment (rida)",
          },
          {
            type: "list",
            items: [
              { title: "The obligation to be content with Allah and be content with His will and decree", body: "63" },
              { title: "Matters that do not contradict contentment with the divine decree", body: "66" },
            ],
          },
          {
            type: "heading",
            kicker: "70",
            title: "Reflection (tafakkur)",
          },
          {
            type: "list",
            items: [
              { title: "Examples of reflection among the early generations (the salaf)", body: "74" },
            ],
          },
          {
            type: "heading",
            kicker: "78",
            title: "Taking stock of oneself (muhasabah)",
          },
          {
            type: "list",
            items: [
              { title: "Types of taking stock of oneself: muhasabah is of two types", body: "79" },
              { title: "The righteous early generations (as-salaf as-salih) and taking stock of oneself (muhasabah)", body: "84" },
            ],
          },
          {
            type: "heading",
            kicker: "85",
            title: "Relying on Allah (tawakkul)",
          },
          {
            type: "list",
            items: [
              {
                title: "Saying Hasbuna Allahu wa ni‘am al-wakeel (Allah is sufficient for us and the best one on whom to depend)",
                body: "86",
              },
              { title: "The importance of taking appropriate measures", body: "87" },
              { title: "Relying on someone other than Allah ﷻ and categories thereof", body: "88" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "practice",
    title: "Practice",
    lessons: [
      { id: "flashcards", title: "Flashcards", icon: "🃏", kind: "tool", badge: "341" },
      { id: "quiz", title: "Knowledge Quiz", icon: "✏️", kind: "tool", badge: "201" },
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
  { id: "mahabbah", label: "Love (mahabbah)" },
  { id: "sabr", label: "Patience (sabr)" },
  { id: "shukr", label: "Gratitude (shukr)" },
  { id: "wara", label: "Piety (wara)" },
  { id: "rida", label: "Contentment (rida)" },
  { id: "tafakkur", label: "Reflection (tafakkur)" },
  { id: "muhasabah", label: "Taking stock of oneself (muhasabah)" },
  { id: "tawakkul", label: "Relying on Allah (tawakkul)" },
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
  {
    t: "mahabbah",
    q: "What does mahabbah mean in Arabic?",
    a: "The inclination of the heart towards something and feeling a constant attachment to it and longing for it.",
  },
  {
    t: "mahabbah",
    q: "How is mahabbah defined in Islamic terminology?",
    a: "The inclination from the depths of one’s heart towards Allah, and giving Him precedence over others.",
  },
  {
    t: "mahabbah",
    q: "How does the lover obey Allah, unlike the one who obeys because he has no other choice?",
    a: "The lover regards obedience as nourishment, pleasure, delight and joy. He strives relentlessly and does not get tired, and he will be blessed in this world and the Hereafter. The other obeys reluctantly, like one compelled by a subjugator.",
  },
  {
    t: "mahabbah",
    q: "What is the ruling on love of Allah?",
    a: "It is obligatory for everyone. No one fails to do that except one who wronged himself, is ignorant or is doomed.",
  },
  {
    t: "mahabbah",
    q: "How does at-Tawbah 9:24 prove that love of Allah is obligatory?",
    a: "Allah warns against giving precedence to fathers, sons, spouses, wealth, trade and dwellings over love of Allah, His Messenger and jihad. Such a warning can only be issued with regard to something that is obligatory.",
  },
  {
    t: "mahabbah",
    q: "Quote the hadith of Anas رضي الله عنه on loving the Prophet ﷺ.",
    a: "“By the One in Whose hand is my soul, no one of you truly believes until I am more beloved to him than his father, his child, and all the people.” Agreed upon.",
  },
  {
    t: "mahabbah",
    q: "What did Ibn Rajab رحمه الله say about love of the Messenger ﷺ in relation to love of Allah?",
    a: "Love of the Messenger is connected to, and subordinate to, love of Allah. He is loved because of Allah’s love for him and Allah’s command to love, obey and follow him. If faith requires preferring his love over oneself, parents and all people, then what of love of Allah?",
  },
  {
    t: "mahabbah",
    q: "How many ways did Ibn al-Qayyim رحمه الله give for attaining Allah’s love and love for Allah?",
    a: "Ten. By means of them the lovers of Allah went through the stages of love and were admitted to the court of the Beloved.",
  },
  {
    t: "mahabbah",
    q: "Quote the hadith qudsi on supererogatory deeds and Allah’s love.",
    a: "“…and My slave continues to draw closer to Me by means of supererogatory deeds until I love him.” (al-Bukhari)",
  },
  {
    t: "mahabbah",
    q: "What did Ibn al-Qayyim رحمه الله call the most amazing of the ten means?",
    a: "Feeling humble and helpless before Allah.",
  },
  {
    t: "mahabbah",
    q: "What should one do when alone with Allah at the end of the night?",
    a: "Be alone with Him at the time when He descends, recite His Book, then conclude with prayers for forgiveness and repentance.",
  },
  {
    t: "mahabbah",
    q: "According to Ibn Mas‘ud رضي الله عنه, how does one know whether he loves Allah?",
    a: "Let him think how he feels about the Quran. If he loves the Quran, he loves Allah, for the Quran is the word of Allah.",
  },
  {
    t: "mahabbah",
    q: "What did Sufyan ibn Uyaynah رحمه الله say about love of the Quran?",
    a: "By Allah, you will not attain the pinnacle of this matter until nothing is more beloved to you than Allah. Whoever loves the Quran loves Allah.",
  },
  {
    t: "mahabbah",
    q: "Why did the man always conclude the prayer with Surat al-Ikhlas, and what did the Prophet ﷺ say?",
    a: "Because it is a description of the Most Gracious, and he loved to recite it. The Prophet ﷺ said: “Tell him that Allah loves him.” Agreed upon, from Aisha رضي الله عنها.",
  },
  {
    t: "mahabbah",
    q: "What happens when Allah loves someone, according to the hadith of Abu Hurayrah رضي الله عنه?",
    a: "Allah calls Jibreel to love him; Jibreel loves him and calls the inhabitants of heaven; they love him; then he is accepted on earth. Agreed upon.",
  },
  {
    t: "mahabbah",
    q: "Name the three characteristics by which one finds the sweetness of faith.",
    a: "Allah and His Messenger are dearer to him than all else; he loves a man only for the sake of Allah; he would hate to return to disbelief as he would hate to be thrown into the Fire. (al-Bukhari and Muslim)",
  },
  {
    t: "mahabbah",
    q: "How does al-Baqarah 2:165 connect love of Allah with salvation from the Fire?",
    a: "Those who believe are stronger in love for Allah. The punishment is for those who do not love Him; believers give His love precedence over all else, so they attain salvation from punishment.",
  },
  {
    t: "mahabbah",
    q: "Name the ten ways Ibn al-Qayyim رحمه الله listed for attaining love.",
    a: "Reading and reflecting on the Quran; nawafil after the obligatory; constant dhikr; giving precedence to what Allah loves; reflecting on the names and attributes; thinking of His blessings; humility before Him; being alone with Him at the end of the night; sitting with those who love Him; keeping away from barriers between you and Him.",
  },
  {
    t: "sabr",
    q: "When does the believer need patience?",
    a: "When complying with Allah’s commands, when refraining from what is prohibited, and in order to accept the divine decree.",
  },
  {
    t: "sabr",
    q: "Why does the believer need patience constantly until death?",
    a: "He will be dealing with one or more of these three at all times. This is one of the most essential matters, for life cannot be sound without it. This is the efficacious remedy for every problem.",
  },
  {
    t: "sabr",
    q: "What does sabr mean in linguistic terms, and what is meant by al-Kahf 18:28?",
    a: "Restraint. {And keep yourself patient [by being] with those who call upon their Lord in the morning and the evening, seeking His countenance}. What is meant is: Keep yourself with them.",
  },
  {
    t: "sabr",
    q: "What does sabr mean in Islamic terminology?",
    a: "Restraining the nafs (self) from pursuing what it loves and desires, and restraining it from panicking, and forcing it to maintain its focus on sublime matters.",
  },
  {
    t: "sabr",
    q: "What is the ruling on patience (sabr)?",
    a: "It is obligatory according to the consensus of the Muslim ummah. Allah ﷻ enjoins it in more than one place in His Noble Book.",
  },
  {
    t: "sabr",
    q: "Quote three verses in which Allah ﷻ enjoins patience.",
    a: "{And seek help through patience [sabr] and prayer} [al-Baqarah 2:45]. {Persevere and endure [isbiru wa saabiru]} [Aal Imran 3:200]. {And be patient [wa isbir], [O Muhammad], and your patience is not but through Allah} [an-Nahl 16:127].",
  },
  {
    t: "sabr",
    q: "Name the eight ways patience is mentioned in the Quran.",
    a: "Praise for the patient; Allah loves them; Allah is with them (protecting, helping and supporting); reward according to the best of their deeds; victory and reinforcement; attaining what is sought and Paradise; benefiting from signs and lessons; attaining leadership.",
  },
  {
    t: "sabr",
    q: "What kind of “being with” has Allah made incumbent upon Himself for the patient?",
    a: "A special kind, which includes protecting them, helping them and supporting them. {And be patient. Indeed, Allah is with the patient} [al-Anfal 8:46]. {And Allah is with the patient} [al-Baqarah 2:249].",
  },
  {
    t: "sabr",
    q: "What did the Prophet ﷺ say about victory and patience?",
    a: "“You should understand that victory comes with patience.” Narrated by Ahmad; classed as sahih by al-Albani. Also from Ibn Abbas رضي الله عنهما: “…victory comes with patience.”",
  },
  {
    t: "sabr",
    q: "What did Ibn Taymiyyah رحمه الله say about patience and leadership?",
    a: "“By means of patience and certain faith, leadership in religion may be attained.” Then he recited: {And We made from among them leaders guiding by Our command when they were patient and [when] they were certain of Our signs} [as-Sajdah 32:24].",
  },
  {
    t: "sabr",
    q: "What is the status of patience in relation to faith?",
    a: "Like that of the head in relation to the body. The one who has no patience has no faith, just as the one who has no head has no body.",
  },
  {
    t: "sabr",
    q: "Quote the hadith: “How wonderful is the affair of the believer…”",
    a: "His affairs are all good, and this applies to no one but the believer. If something good happens to him, he is thankful for it and that is good for him. If something bad happens to him, he bears it with patience and that is good for him. And that is only for the believer. (Sahih Muslim)",
  },
  {
    t: "sabr",
    q: "What did the Prophet ﷺ say to the woman who suffered from epilepsy?",
    a: "“If you wish, you may be patient, and Paradise will be yours, or if you wish, I will pray to Allah to heal you.” She said: I will be patient. She said: But I become uncovered; pray to Allah that I will not become uncovered. So he prayed for her. (al-Bukhari and Muslim)",
  },
  {
    t: "sabr",
    q: "What did Umar ibn al-Khattab رضي الله عنه say about patience?",
    a: "The best life we lived we attained through patience.",
  },
  {
    t: "sabr",
    q: "What are the three types of patience?",
    a: "1. Patience in remembering Allah, obeying Him, calling upon Him, being steadfast in His religion and striving in His cause, and in seeking guidance and knowledge. 2. Patience in refraining from sin. 3. Patience in the face of calamity and in accepting the divine decree.",
  },
  {
    t: "sabr",
    q: "How did Yusuf عليه السلام show patience in refraining from sin?",
    a: "The wife of al-Aziz sought to seduce him, closed the doors and said, “Come, you.” He said, “Indeed, he is my master, who has made good my residence. Indeed, wrongdoers will not succeed.” He did not do that, even though there was a strong motive and no impediments. {And she certainly determined [to seduce] him, and he would have inclined to her had he not seen the proof of his Lord} [Yusuf 12:24].",
  },
  {
    t: "sabr",
    q: "Which of the seven whom Allah will shade showed patience in refraining from sin?",
    a: "“… a man who was pursued by a woman of status and beauty, but he said: I fear Allah.” (as-Sahihayn)",
  },
  {
    t: "sabr",
    q: "What should the patient say when disaster strikes, and what dua did Umm Salamah رضي الله عنها hear?",
    a: "{Indeed we belong to Allah, and indeed to Him we will return} [al-Baqarah 2:155–156]. And: “O Allah, reward me for my affliction and compensate me with something better” — Allah will compensate him with something better. When Abu Salamah died she said it, and Allah compensated her with the Messenger of Allah ﷺ. (Muslim)",
  },
  {
    t: "sabr",
    q: "When is patience, according to the agreed-upon hadith?",
    a: "“Patience is only when the calamity first strikes.”",
  },
  {
    t: "sabr",
    q: "Why is patience the most expansive gift?",
    a: "The Messenger of Allah ﷺ said: “No one is ever given a better and more expansive gift than patience.” Agreed upon.",
  },
  {
    t: "sabr",
    q: "Quote the hadith: “Prayer is light…”",
    a: "“Prayer is light, charity is proof, patience is illumination and the Quran is evidence, for you or against you.” Abu Malik al-Ash‘ari رضي الله عنه — Muslim.",
  },
  {
    t: "sabr",
    q: "In which surahs did Allah end mention of the greatest signs by saying they are signs for everyone patient and grateful?",
    a: "Ibrahim, Luqman, Saba and ash-Shura. No one sees the signs or is illuminated by their light except those who are patient and grateful.",
  },
  {
    t: "sabr",
    q: "How has Allah connected His love to patience?",
    a: "He has granted His love to those who are patient. {And Allah loves the steadfast} [Aal Imran 3:146]. They never lost assurance due to what afflicted them in the cause of Allah, nor did they weaken or submit.",
  },
  {
    t: "sabr",
    q: "What reward does Allah promise the patient in Hud 11:11 and az-Zumar 39:10?",
    a: "{Except for those who are patient and do righteous deeds; those will have forgiveness and great reward} [Hud 11:11]. {Indeed, the patient will be given their reward without account} [az-Zumar 39:10].",
  },
  {
    t: "sabr",
    q: "What did the Prophet ﷺ say to the family of Yasir, and what is the house of praise?",
    a: "“Patience, O family of Yasir, for you are promised Paradise.” (al-Hakim; sahih by al-Albani). About the one who lost his son and bore it with patience: “Give My slave news of a house in Paradise, and call it the house of praise.” (hasan, at-Tirmidhi)",
  },
  {
    t: "shukr",
    q: "Why should a person not ignore gratitude and patience?",
    a: "Faith consists of two halves, gratitude and patience. One who cares about himself and seeks salvation should base his journey towards Allah on these two paths, so that on the Day he meets Him, Allah will make him among the people of Paradise.",
  },
  {
    t: "shukr",
    q: "What does shukr mean in linguistic terms and in Islamic terminology?",
    a: "Linguistically it is the opposite of kufran (ingratitude); it refers to acknowledging favours and kindness, and speaking of them. In Islamic terminology it means acknowledging kindness and speaking of it.",
  },
  {
    t: "shukr",
    q: "Thus, what does gratitude (shukr) mean?",
    a: "Having love in the heart for the Bestower of blessings, striving hard to obey Him, and speaking words of remembrance and praise of Him.",
  },
  {
    t: "shukr",
    q: "According to Ibn al-Qayyim رحمه الله, who is truly grateful for the blessings?",
    a: "Whoever acknowledges blessings, acknowledges the Bestower, affirms blessings and shows humility to Him, loves Him and is pleased with Him as his Lord and with His blessings, and uses the blessings in ways that He loves and in obedience to Him.",
  },
  {
    t: "shukr",
    q: "How does prayer combine three types of gratitude?",
    a: "In the heart: sincerity and humility. On the lips: reciting Quran and remembering the Most Gracious. In physical actions: prostration, bowing and the tasleem.",
  },
  {
    t: "shukr",
    q: "What is the difference between praise (hamd) and gratitude (shukr)?",
    a: "Hamd is only verbal; shukr may be on the lips, in the heart and in physical actions. Hamd may be in response to a blessing or not; shukr can only be in response to a blessing. {Work, O family of David, in gratitude. And few of My servants are grateful} [Saba 34:13].",
  },
  {
    t: "shukr",
    q: "What three things does gratitude involve?",
    a: "1. Acknowledging the blessing bestowed by Allah. 2. Being pleased with it. 3. Praising Allah.",
  },
  {
    t: "shukr",
    q: "Quote the hadith: “He has succeeded who becomes Muslim…”",
    a: "He has succeeded who becomes Muslim, is granted sufficient provision, and Allah makes him content with what He has given him. (Muslim)",
  },
  {
    t: "shukr",
    q: "How is praising Allah done, according to ad-Duha 93:11 and the hadith of Abu’l-Ahwas?",
    a: "{But as for the favor of your Lord, report [it]}. By mentioning the blessings Allah has bestowed and letting their impact be seen on you. “If Allah has given you wealth, then let it be seen on you.” (sahih)",
  },
  {
    t: "shukr",
    q: "What is the ruling on gratitude to Allah, according to Ibn al-Qayyim رحمه الله?",
    a: "It is obligatory on the basis of reason, Islamic teachings and common sense. It is the most obvious of all obligatory deeds. Gratitude is the most beloved thing to Him and the greatest in reward; for that purpose He created creation, sent down the Books and prescribed laws.",
  },
  {
    t: "shukr",
    q: "How did Allah connect worship to gratitude?",
    a: "Whoever is grateful is a worshipper of Allah, and whoever is not grateful is not a worshipper. {O you who have believed, eat from the good things which We have provided for you and be grateful to Allah if it is [indeed] Him that you worship} [al-Baqarah 2:172].",
  },
  {
    t: "shukr",
    q: "Quote al-Baqarah 2:152 on gratitude.",
    a: "{So remember Me; I will remember you. And be grateful to Me and do not be ungrateful.}",
  },
  {
    t: "shukr",
    q: "What is the ruling on being ungrateful for the blessings of Allah?",
    a: "Allah condemns it and states that it is one of the causes of His punishment. He criticizes the one who is ungrateful at the time of hardship {Hud 11:9}, and the one who focuses on calamities and forgets blessings {al-Adiyat 100:6}.",
  },
  {
    t: "shukr",
    q: "What did the Prophet ﷺ say when asked if the women he saw in Hell were ungrateful to Allah?",
    a: "“They are ungrateful to their husbands and ungrateful for good treatment. If you are kind to one of them for a lifetime, then she sees one (undesirable) thing from you, she will say, ‘I have never seen anything good from you.’” (al-Bukhari and Muslim)",
  },
  {
    t: "shukr",
    q: "What is the ruling on showing gratitude to people?",
    a: "Islamic teachings enjoin it for their kindness and favours. One of the most important is gratitude towards parents: {Be grateful to Me and to your parents} [Luqman 31:14]. The Prophet ﷺ enjoined gratitude to everyone who does you a favour.",
  },
  {
    t: "shukr",
    q: "Quote the hadith of Jabir رضي الله عنه on reciprocating a gift.",
    a: "“Whoever is given something and has the means to reciprocate, let him do so. If he does not have the means, let him praise him for it, for whoever praises him has thanked him, and whoever conceals [the gift] has shown ingratitude towards him.” (hasan, Abu Dawud)",
  },
  {
    t: "shukr",
    q: "What does “He does not thank Allah who does not thank people” mean?",
    a: "If someone is ungrateful by nature, and denies the favours that people do for him, then by nature he will also be ungrateful towards the Creator of people. (Abu Hurayrah رضي الله عنه — sahih, Abu Dawud)",
  },
  {
    t: "shukr",
    q: "Name the five means that help one to show gratitude.",
    a: "Bearing in mind the blessings of Allah; looking at those who are less well off; realizing you will be questioned about blessings; knowing that Allah loves those who are grateful; calling upon Allah to help us give thanks.",
  },
  {
    t: "shukr",
    q: "What did the Prophet ﷺ say about looking at the one who is below you?",
    a: "“Look at the one who is below you, and do not look at the one who is above you, then it is more likely that you will not scorn the blessings that Allah bestows upon you.” (Muslim)",
  },
  {
    t: "shukr",
    q: "What dua did the Prophet ﷺ instruct Muadh ibn Jabal رضي الله عنه to say after every prayer?",
    a: "Allahumma a‘inni ‘ala dhikrika wa shukrika wa husni ‘ibadatika — O Allah, help me to remember You, give thanks to You and worship You properly. (sahih, Abu Dawud)",
  },
  {
    t: "shukr",
    q: "When is Allah pleased with a person, according to the hadith of Anas ibn Malik رضي الله عنه?",
    a: "When he eats something and praises Him for it, or he drinks something and praises Him for it. (Muslim)",
  },
  {
    t: "shukr",
    q: "How does gratitude save a person from punishment, according to an-Nisa 4:147?",
    a: "Allah has no reason to punish people if they give thanks and believe in Him. {Why would Allah punish you if you are grateful and believe? And ever is Allah Appreciative and Knowing.}",
  },
  {
    t: "shukr",
    q: "What happens to blessings with gratitude, according to Ibrahim 14:7?",
    a: "{If you are grateful, I will surely increase you [in favor]; but if you deny, indeed, My punishment is severe.} Blessings increase with gratitude and are protected against loss.",
  },
  {
    t: "shukr",
    q: "What did Umar ibn Abd al-Aziz رحمه الله say about retaining blessings?",
    a: "Retain the blessings of Allah by giving thanks to Allah. Hence one of the scholars called gratitude the retainer of blessings.",
  },
  {
    t: "shukr",
    q: "How did al-Hasan رحمه الله explain al-Balad 90:4, “We have created humankind in constant struggle”?",
    a: "Man struggles constantly to show gratitude for times of ease and he struggles constantly to show patience at times of hardship.",
  },
  {
    t: "shukr",
    q: "What did the salaf say faith consists of?",
    a: "Two halves: half gratitude and half patience.",
  },
  {
    t: "shukr",
    q: "What did Mutarrif ibn Abdillah رحمه الله prefer?",
    a: "To be granted well-being and give thanks is dearer to him than being tested with hardship and showing patience.",
  },
  {
    t: "shukr",
    q: "What did the Prophet ﷺ advise us to ask Allah for, rather than calamity?",
    a: "Pardon and well-being; he did not advise us to ask for calamity. But if calamity strikes, the one who is tested may attain a reward greater than the reward of those who are grateful.",
  },
  {
    t: "wara",
    q: "What is piety (wara), and why is it important in this age?",
    a: "It is the foundation of our religion and of obedience, and it indicates righteousness. The salaf put great effort into learning it. It is important today because bribery, haram earnings and falling into haram are widespread, so that children may be brought up with honesty and taqwa.",
  },
  {
    t: "wara",
    q: "What does wara mean linguistically, and in principle?",
    a: "Linguistically: feeling uncomfortable with something and therefore refraining from it. In principle: refraining from the prohibited, but it is also used for refraining from that which is permissible and halal.",
  },
  {
    t: "wara",
    q: "How did Ibn al-Qayyim, al-Jurjani and al-Qirafi define wara?",
    a: "Ibn al-Qayyim: refraining from something one fears may lead to harm in the Hereafter. Al-Jurjani: avoiding ambiguous matters for fear of falling into that which is definitely haram. Al-Qirafi: refraining from something innocuous as a precaution against that which is problematic.",
  },
  {
    t: "wara",
    q: "Quote the hadith of Atiyah ibn Urwah as-Sa‘di رضي الله عنه on wara.",
    a: "“A person will not be regarded as one of those who are mindful of Allah until he gives up that which is innocuous as a precaution against that which is problematic.” (hasan, at-Tirmidhi)",
  },
  {
    t: "wara",
    q: "What did al-Hasan ibn Ali رضي الله عنهما learn from the Prophet ﷺ?",
    a: "“Leave that which makes you doubt for that which does not make you doubt.” (sahih)",
  },
  {
    t: "wara",
    q: "How did the Prophet ﷺ sum up wara in a single phrase, and what does it include?",
    a: "“Part of a person’s being a good Muslim is his leaving alone that which does not concern him.” It includes speaking, looking, listening, striking, walking, thinking and all other actions, outward and inward.",
  },
  {
    t: "wara",
    q: "What did Tawus رحمه الله say about faith and wara?",
    a: "Faith is like a tree: its root is the shahadah, and its fruit is piety (wara). There is nothing good in a tree that bears no fruit, and nothing good in a person who has no piety.",
  },
  {
    t: "wara",
    q: "According to Ibn Umar رضي الله عنهما, what should you look at instead of a person’s prayer or fasting?",
    a: "The truthfulness of his words when he speaks, his honesty when he is entrusted with something, and his piety (wara) when he thinks of committing a sin.",
  },
  {
    t: "wara",
    q: "What did Abu Abd ar-Rahman al-Umari رحمه الله say about wara the size of a pebble?",
    a: "If piety (wara) the size of this pebble enters your heart, that is better for you than the prayers of all the people on earth.",
  },
  {
    t: "wara",
    q: "How did Sufyan ath-Thawri رحمه الله attain what Musa ibn Hammad saw in a dream?",
    a: "He was seen in Paradise flying from palm tree to palm tree. He said: “By means of piety (wara), by means of piety (wara).” Qutaybah ibn Saeed said that were it not for him, the concept of wara would have disappeared.",
  },
  {
    t: "wara",
    q: "How did Abu Bakr as-Siddeeq رضي الله عنه show wara when he ate from his slave’s income?",
    a: "The slave told him the food came from cheating a man in fortune-telling in the Jahiliyyah. Abu Bakr put his hand in his mouth and made himself vomit, expelling everything in his stomach. (al-Bukhari, from Aisha رضي الله عنها)",
  },
  {
    t: "wara",
    q: "What did the Prophet ﷺ say to Abu Hurayrah رضي الله عنه about being pious?",
    a: "“O Abu Hurayrah, be pious; you will be the best worshipper.” (sahih, Ibn Majah)",
  },
  {
    t: "wara",
    q: "According to Ibn Uthaymeen رحمه الله, what is the difference between wara and zuhd?",
    a: "Zuhd is of a higher status. Wara is refraining from that which is harmful (giving up the prohibited). Zuhd is refraining from that which is beneficial — giving up what will not benefit in the Hereafter. Three categories: harmful, beneficial, and neither.",
  },
  {
    t: "wara",
    q: "Who are those whose good deeds like mountains of Tihamah become scattered dust?",
    a: "“They are your brothers and from your own people, worshipping at night as you do, but they are the kind of people who, when they are alone, transgress the sacred limits of Allah.” (sahih, Ibn Majah)",
  },
  {
    t: "wara",
    q: "Why may a dusty traveller who raises his hands saying “O Lord, O Lord” receive no response?",
    a: "His food is haram, his drink is haram, his clothes are haram and he has been nourished with haram. (Sahih Muslim)",
  },
  {
    t: "wara",
    q: "Why is wara mentioned alongside knowledge?",
    a: "Abu’s-Su‘ud: piety depends on knowing what is halal and haram from the Quran and Sunnah. Ibn Taymiyyah: the ignorant may omit obligations and do forbidden deeds, thinking that this is piety.",
  },
  {
    t: "wara",
    q: "What did the Prophet ﷺ do with a date that had fallen on his mat?",
    a: "He picked it up to eat it, then worried it might be zakat, so he put it down. (Agreed upon)",
  },
  {
    t: "wara",
    q: "How was Zaynab bint Jahsh رضي الله عنها protected during the ifk incident?",
    a: "When asked about Aisha رضي الله عنها she said she wanted to protect her hearing and sight, and knew nothing but good of her. She used to compete with Aisha, but Allah protected her by means of piety (wara). Agreed upon.",
  },
  {
    t: "wara",
    q: "Name the five means of attaining piety (wara).",
    a: "Adhering to the Sunnah and refraining from innovation (bidah); acting upon knowledge; keeping away from prohibited things; having a lack of interest in worldly gain (zuhd); keeping away from that which forms an impediment to piety.",
  },
  {
    t: "wara",
    q: "What did Al-Awzai رحمه الله say about innovation (bidah) and piety?",
    a: "We used to say: No man introduces an innovation (bidah) but piety (wara) is taken away from him.",
  },
  {
    t: "wara",
    q: "What did Sahl ibn Abdillah رحمه الله say about acting upon knowledge?",
    a: "If the believer acts upon what he knows, it will lead him to piety (wara), and if he develops piety, his heart will be with Allah.",
  },
  {
    t: "wara",
    q: "What did Abdullah ibn Mas‘ud رضي الله عنه say about avoiding the forbidden?",
    a: "Avoid that which is forbidden to you, and you will be among the most pious of people.",
  },
  {
    t: "wara",
    q: "What did Sufyan ath-Thawri رحمه الله say about piety and worldly gain?",
    a: "I have never seen anyone who was pious but he was in need. The one who does not show indifference to worldly gain will not have the patience to adhere to piety (wara).",
  },
  {
    t: "wara",
    q: "What forms an impediment to piety, and which hadith sums this up?",
    a: "Eating a great deal, indulging in physical desires, greed, talking and arguing a great deal, being concerned with the faults of others, wasting time, and shamelessness. Summed up in: “Part of a person’s being a good Muslim is leaving alone that which does not concern him.” (at-Tirmidhi and Ibn Majah; sahih)",
  },
  {
    t: "rida",
    q: "Why is contentment (rida) one of the most sublime deeds of the heart?",
    a: "By means of it one may attain a status far higher than the one who tries hard and exhausts himself but fails to attain complete contentment.",
  },
  {
    t: "rida",
    q: "What does rida mean linguistically, and what is its opposite?",
    a: "It is the opposite of sukht (discontentment). It refers to accepting something and feeling comfortable and at ease with it.",
  },
  {
    t: "rida",
    q: "What does ridwan mean, and which ayah mentions it?",
    a: "Ridwan refers to a great deal of rida. {Their Lord gives them glad tidings of mercy from Him and His good pleasure} [at-Tawbah 9:21].",
  },
  {
    t: "rida",
    q: "What does rida mean in Islamic terminology?",
    a: "Not panicking at any decree from Allah ﷻ.",
  },
  {
    t: "rida",
    q: "What did the Prophet ﷺ say about the one who has found the taste of faith?",
    a: "“He has found the taste of faith who is content with Allah as his Lord, with Islam as his religion, and with Muhammad as his Messenger.” (Muslim)",
  },
  {
    t: "rida",
    q: "According to Imam Ahmad رحمه الله, what did ninety of the Tabieen agree was foremost among the Prophet’s teachings?",
    a: "Contentment with the will of Allah ﷻ, submission to His command and showing patience in accepting His decree — teachings to which the Messenger of Allah ﷺ adhered until he died.",
  },
  {
    t: "rida",
    q: "What did Ahmad ibn Hanbal رحمه الله confirm as the most important thing the Muslim should fully understand?",
    a: "Belief in the divine decree, both good and bad, sweet and bitter, submission to the command of Allah, and contentment with the decree of Allah. (Ishaq رحمه الله was present.)",
  },
  {
    t: "rida",
    q: "What is part of being content with Allah as one’s Lord?",
    a: "Resenting the worship of anyone other than Allah ﷻ — this is the core of Islam — and loving for the sake of Allah and hating for the sake of Allah.",
  },
  {
    t: "rida",
    q: "Whom does one love, and whom does one hate, as part of being content with Allah as Lord?",
    a: "Love the scholars, the righteous and the ascetics, and those who enjoin what is right and forbid what is wrong. Hate the mischief-makers and evildoers.",
  },
  {
    t: "rida",
    q: "What is part of being content with Islam as one’s religion?",
    a: "Being content with what Allah has prescribed of rulings, taking the Muslims as allies and friends, and regarding the disbelievers as enemies.",
  },
  {
    t: "rida",
    q: "What did the book say about those who claim contentment with Islam but refuse its rulings?",
    a: "How great is the lie of those who say “We are content with Islam as a religion,” then refuse to submit to its rulings and decrees and do not accept them. Where then is their contentment with this religion?",
  },
  {
    t: "rida",
    q: "Name two forms of not being content with Islam.",
    a: "Being content with the ways, beliefs and customs of the disbelievers, and loving to bring them to Muslim lands (such as nakedness, free mixing and all forms of mischief and evil); and promoting secularism and the separation of religion and politics.",
  },
  {
    t: "rida",
    q: "What is part of being content with Muhammad ﷺ as one’s Prophet?",
    a: "That he is more beloved than yourself, spouse, parents, children, friends and relatives, and you would sacrifice yourself, body and soul, for his sake; love of his Seerah, etiquette and characteristics, wishing to be with him in Paradise; accepting his rulings; being satisfied with what Allah and His Messenger gave; adhering to his Sunnah and not introducing innovations.",
  },
  {
    t: "rida",
    q: "Quote an-Nisa 4:65 on accepting the Prophet’s judgment.",
    a: "{But no, by your Lord, they will not [truly] believe until they make you, [O Muhammad], judge concerning that over which they dispute among themselves and then find within themselves no discomfort from what you have judged and submit in [full, willing] submission.}",
  },
  {
    t: "rida",
    q: "What did the book say is not part of being content with the Prophet ﷺ?",
    a: "The innovation of the Mawlid and various kinds of adhkar and awraad and ways of reciting them, and other kinds of innovated acts of worship.",
  },
  {
    t: "rida",
    q: "What is meant by contentment with the divine decree?",
    a: "Submitting to, and feeling at ease and comfortable with, the decree of Allah ﷻ because all of it is just, good and wise.",
  },
  {
    t: "rida",
    q: "Which three matters do not contradict contentment with the divine decree?",
    a: "Feeling pain and sorrow; speaking of what one is experiencing of calamity without displeasure, anger or complaining; calling upon Allah in dua asking Him to grant relief from the calamity.",
  },
  {
    t: "rida",
    q: "What did the Prophet ﷺ say when his son Ibrahim died?",
    a: "“The eye weeps and the heart grieves, but we do not say anything but that which pleases our Lord. Indeed, O Ibrahim, we grieve for you.” (Agreed upon) He ﷺ attained the highest status of contentment, yet he wept.",
  },
  {
    t: "rida",
    q: "What did Ibn Hajar رحمه الله say about grief and the divine decree?",
    a: "The appearance of grief in a person when he is stricken with calamity does not mean that he is not showing patience and accepting [the divine decree], if his heart is at peace.",
  },
  {
    t: "rida",
    q: "What did al-Qurtubi رحمه الله say about speaking of pain and sickness?",
    a: "It is permissible for a person to speak of what he experiences of pain and sickness, and that does not undermine contentment with or acceptance of the divine decree, so long as that is expressed without displeasure or anger.",
  },
  {
    t: "rida",
    q: "Quote al-Anbiya 21:83 on Ayub عليه السلام calling upon his Lord.",
    a: "{And [mention] Job, when he called to his Lord, “Indeed, adversity has touched me, and you are the Most Merciful of the merciful.”}",
  },
  {
    t: "rida",
    q: "How does one attain the level of contentment (rida)?",
    a: "Knowing Allah ﷻ and having certain faith in Him, knowing He is Most Wise; striving to be patient and training yourself to accept whatever He causes you to go through; calling upon Allah in dua for contentment after the decree.",
  },
  {
    t: "rida",
    q: "What did Al-Fudayl and Al-Junayd رحمهما الله say about attaining rida?",
    a: "Al-Fudayl: The people who attain the most perfect contentment with Allah are those who know Allah. Al-Junayd: Contentment (rida) is commensurate with the strength and depth of one’s knowledge.",
  },
  {
    t: "rida",
    q: "What dua did the Prophet ﷺ teach Zayd ibn Thabit رضي الله عنه to recite every day?",
    a: "As’aluka Allahumma ar-rida ba‘d al-qada — I ask you, O Allah, for contentment after the decree. (Ahmad and al-Hakim; isnad sahih)",
  },
  {
    t: "rida",
    q: "What are the seven outcomes of contentment (rida)?",
    a: "Ubudiyah and shukr; a sense of pride and honour and no need of others; barakah in provision, a way out of hardship, a good life and ability to cope with calamities; admittance to Paradise; the pleasure of Allah and being spared His wrath; forgiveness of sins; attaining all that is good.",
  },
  {
    t: "rida",
    q: "What four principles did Yahya ibn Muadh give for attaining contentment?",
    a: "“If You give me, I accept; if You withhold from me, I am content; if You let me be, I worship You; if You call me, I respond.”",
  },
  {
    t: "rida",
    q: "What did the Prophet ﷺ tell Abu Saeed al-Khudri رضي الله عنه about Paradise?",
    a: "“O Abu Saeed, whoever is content with Allah as his Lord, with Islam as his religion and with Muhammad as his Prophet, Paradise will be due for him.” Abu Saeed asked him to say it again. (Muslim)",
  },
  {
    t: "rida",
    q: "Quote the morning and evening words of contentment, and their outcome.",
    a: "Radeetu Billahi rabban wa bi’l-Islami deenan wa bi Muhammadin ﷺ nabiyyan, three times morning and evening. It will be incumbent upon Allah to make him pleased on the Day of Resurrection. (Ahmad; Al-Arna’ut: sahih by corroborating evidence)",
  },
  {
    t: "rida",
    q: "What did the Prophet ﷺ say happens when Allah loves a people and tests them?",
    a: "“When Allah loves a people, He tests them, then whoever is content will earn the pleasure of Allah, and whoever is discontent will earn His wrath.” (Anas رضي الله عنه — at-Tirmidhi; sahih)",
  },
  {
    t: "rida",
    q: "What words after the adhan bring forgiveness of sins, according to Sa‘d ibn Abi Waqqas رضي الله عنه?",
    a: "Ashhadu an laa ilaaha illa Allah wahdahu laa shareeka lah, wa anna Muhammadan abduhu wa rasooluhu. Radeetu Billahi rabban wa bi Muhammadin rasoolan wa bi’l-Islami deenan. (Muslim)",
  },
  {
    t: "rida",
    q: "What did Umar ibn al-Khattab رضي الله عنه write to Abu Musa رضي الله عنه, and what did Ibn al-Qayyim رحمه الله add?",
    a: "Umar: all goodness is found in contentment, so if you are able to be content, all well and good; otherwise be patient. Ibn al-Qayyim: following the path of contentment and love will cause a person to travel with speed whilst lying in his bed, and he will go far ahead of his travelling companions [in the journey towards Allah].",
  },
  {
    t: "rida",
    q: "What did the poet say about patience and contentment with the decree?",
    a: "We train ourselves to have goodly patience / Being content with Allah’s decree is more appropriate for our nafs. The one who is not content will gain nothing in this world or the Hereafter; the one who is content will gain the benefits of both.",
  },
  {
    t: "rida",
    q: "What did one of the early generations say about Allah testing His slave with what He gives him?",
    a: "Whoever is content with what Allah ﷻ allocates to him, Allah will bless it for him and make it more beneficial. Whoever is not content, what he is given will not be blessed for him. Aktham ibn Sayfi: whoever is pleased with his lot will enjoy his life, and whoever is content with his situation will have peace of mind.",
  },
  {
    t: "rida",
    q: "What did Ibn Awn رحمه الله say about being content in hardship and ease?",
    a: "Be content with the decree of Allah at times of both hardship and of ease, for that is more effective in reducing your distress and grief, and more effective in attaining what you aspire to in the Hereafter.",
  },
  {
    t: "tafakkur",
    q: "Why is reflection (tafakkur) described as the best time spent sitting?",
    a: "There is a variety of evidence in the Quran and Sunnah which indicates that reflection is obligatory. How delightful, how sweet and how good are such moments for the one who is blessed with that.",
  },
  {
    t: "tafakkur",
    q: "What kinds of reflection did the book mention as included in that?",
    a: "Reflecting on the meanings of the names and attributes of Allah, contemplating the meaning of the words of wisdom spoken by the Prophet ﷺ, reflecting on the Hereafter, and reflecting on that which benefits people in both their religious and worldly affairs.",
  },
  {
    t: "tafakkur",
    q: "What does tafakkur mean linguistically?",
    a: "Pondering and contemplating, thinking over something and re-examining it. It may be used to describe the process of thinking over a matter and trying to learn from it.",
  },
  {
    t: "tafakkur",
    q: "What does tafakkur mean in Islamic terminology?",
    a: "Thinking over evidence and signs, and reflecting on the significance of things, in order to learn.",
  },
  {
    t: "tafakkur",
    q: "What is the most beneficial type of reflection, according to Ibn al-Qayyim رحمه الله?",
    a: "That which leads to goodness or benefit in this world or the Hereafter. The best four: benefit in the Hereafter and how to attain it, and warding off harm in the Hereafter and how to avoid it. Then four more: benefit in this world and how to attain it, and evil in this world and how to protect oneself from it. The thoughts of the wise focus on these eight things.",
  },
  {
    t: "tafakkur",
    q: "Quote an-Nahl 16:44 and al-Hashr 59:21 on giving thought to revelation.",
    a: "{And We revealed to you the message that you may make clear to the people what was sent down to them and that they might give thought} [16:44]. {If We had sent down this Quran upon a mountain, you would have seen it humbled and coming apart from fear of Allah. And these comparisons We present to the people that perhaps they will give thought} [59:21].",
  },
  {
    t: "tafakkur",
    q: "How does Yunus 10:24 describe this worldly life?",
    a: "Like rain which plants absorb until the earth is adorned and people suppose they have capability over it, then Allah’s command comes and He makes it as a harvest, as if it had not flourished yesterday. Signs for a people who give thought.",
  },
  {
    t: "tafakkur",
    q: "What did the Prophet ﷺ do at the end of the night, according to Sahih Muslim?",
    a: "He went out, looked at the sky, and recited Aal Imran 3:190–191. Then he went back, used the siwak, did wudu, prayed, lay down, recited the verses again, used the siwak, did wudu again, then prayed.",
  },
  {
    t: "tafakkur",
    q: "What did an-Nawawi and al-Awzai رحمهما الله say about Aal Imran 3:190–191?",
    a: "An-Nawawi: it is mustahabb to recite these verses when waking up at night and looking at the sky, because that prompts deep reflection. Al-Awzai: reflect on them by reciting them whilst understanding their meaning.",
  },
  {
    t: "tafakkur",
    q: "What did Ibn Taymiyyah رحمه الله and Shurayh al-Qadi رحمه الله say about looking at creation?",
    a: "Ibn Taymiyyah: looking at creation in the upper realm and lower realm by contemplating and reflecting is enjoined and encouraged. Shurayh: Let us go out to the marketplace and look at the camels, how they are created.",
  },
  {
    t: "tafakkur",
    q: "How should one learn from modern science with regard to contemplation?",
    a: "How many created things there are that our predecessors did not know, but have now become apparent. {And He creates that which you do not know} [an-Nahl 16:8].",
  },
  {
    t: "tafakkur",
    q: "What example did the book give of reflecting upon the blessings of Allah?",
    a: "an-Nahl 16:10–14: rain, drink, foliage, crops, olives, palm trees, grapevines and fruits; night and day, sun, moon and stars; varying colors on the earth; the sea, tender meat, ornaments, and ships — that perhaps you will be grateful.",
  },
  {
    t: "tafakkur",
    q: "What did the Prophet ﷺ say about visiting graves?",
    a: "“I used to forbid you to visit graves, but now visit them, for they will remind you of the Hereafter.” (Ali ibn Abi Talib رضي الله عنه — Ahmad; sahih)",
  },
  {
    t: "tafakkur",
    q: "How did Mutarrif ibn Abdillah ibn ash-Shikhkheer رحمه الله contemplate at night?",
    a: "He compared his deeds to the people of Paradise (adh-Dhariyat 51:17, al-Furqan 25:64, az-Zumar 39:9) and realized he was not one of them; then to the people of Hell (al-Muddaththir 74:42), who were deniers; then to those who mixed a righteous deed with a bad one (at-Tawbah 9:102), and hoped to be among them.",
  },
  {
    t: "tafakkur",
    q: "What is not permissible when reflecting on Allah ﷻ?",
    a: "It is not permissible to think about how the Essence of Allah is, or how His attributes are. “Reflect upon the signs of Allah, and do not reflect on Allah Himself.” (Ibn Umar رضي الله عنهما — al-Lalakai; hasan). Contemplating the meanings of the names and attributes and acting on them, without inquiring into how they are, is required.",
  },
  {
    t: "tafakkur",
    q: "What did the book list as part of al-ghayb that cannot be known?",
    a: "The soul, the world of the jinn, the world of the angels, the grave (al-barzakh), Hell, Paradise, and the events of the Day of Resurrection. {The soul is of the affair of my Lord. And mankind have not been given of knowledge except a little} [al-Isra 17:85].",
  },
  {
    t: "tafakkur",
    q: "What did Ibn al-Arabi say is prohibited with regard to the Sufis’ way of reflection?",
    a: "Giving up religious duties and spending time on reflection. A shaykh spending an entire day and night, or even a month, reflecting without ceasing is far from the right way; it is not appropriate for human beings and is not in accordance with the Sunnah.",
  },
  {
    t: "tafakkur",
    q: "What did Umm Dharr and Umm ad-Darda say about their husbands’ worship?",
    a: "Umm Dharr: Abu Dharr رضي الله عنه would spend the entire day doing nothing but reflecting and contemplating. Umm ad-Darda: the best acts of worship of Abu’d-Darda were reflection and contemplation.",
  },
  {
    t: "tafakkur",
    q: "What did Sufyan ath-Thawri رحمه الله say when the lamp was lit again, and what did Ibrahim an-Nakhai رحمه الله say about thinking?",
    a: "Sufyan, in tears: I thought about the grave. Ibrahim an-Nakhai: Thinking is the essence of reason.",
  },
  {
    t: "tafakkur",
    q: "Name the seven outcomes of reflection.",
    a: "Increased faith; striving for the Hereafter and little interest in worldly gain; fear of Allah and His Might; evaluating your spiritual condition; finding ways to uplift the ummah; academic achievement; turning to Allah and asking for forgiveness and mercy.",
  },
  {
    t: "tafakkur",
    q: "What did Ibn Abbas رضي الله عنهما and Ibn al-Qayyim رحمه الله say reflection bears of fruit?",
    a: "Ibn Abbas: reflecting on what is good prompts one to act upon it, and regretting what is bad prompts one to give it up. Ibn al-Qayyim: thinking of the Hereafter’s sublimity and this world’s transience bears fruit as desire for the Hereafter and little interest in this world.",
  },
  {
    t: "tafakkur",
    q: "What did Bishr ibn Harith and Al-Fudayl رحمهما الله say about reflection?",
    a: "Bishr: if people reflected on the might and greatness of Allah, they would never disobey Him. It was said: reflection takes away heedlessness and creates fear of Allah. Al-Fudayl: reflection is a mirror that shows you your good deeds and your bad deeds.",
  },
  {
    t: "tafakkur",
    q: "What did Ash-Shafi‘i رحمه الله say about pausing before you speak?",
    a: "Seek help to ensure the quality of what you say by pausing and thinking before you speak — so that what you say is important, of value, and helps you reach the right conclusion.",
  },
  {
    t: "tafakkur",
    q: "What line of poetry did Sufyan ibn Uyaynah رحمه الله recite, and what did he say reflection is?",
    a: "If a man has the habit of reflection / Then he will learn something from everything. He said: Reflection is the key to mercy. A person may reflect and it leads him to repent.",
  },
  {
    t: "tafakkur",
    q: "What is the virtue of reflection?",
    a: "Reflection is one of the best types of worship.",
  },
  {
    t: "tafakkur",
    q: "What did Abu’d-Darda رضي الله عنه say about reflecting for an hour?",
    a: "To reflect for an hour is better than standing in prayer all night.",
  },
  {
    t: "tafakkur",
    q: "What did Ibn Abbas رضي الله عنهما say about two rakahs with reflection?",
    a: "Two rakahs of moderate length with reflection is better than standing in prayer all night with the mind wandering.",
  },
  {
    t: "tafakkur",
    q: "What was dearer to Muhammad ibn Ka‘b al-Qurazi رحمه الله than reciting the entire Quran quickly in one night?",
    a: "To recite at night until dawn breaks az-Zalzalah (Idha zulzilat) and Surat al-Qari‘ah, and no more than that, repeating them and reflecting, with deliberation.",
  },
  {
    t: "tafakkur",
    q: "Why did Allah instruct us to seek refuge with Him from Iblees before reading the Quran?",
    a: "Reflecting upon the verses is one of the most important types of reflection, and seeking refuge drives away the Shaytan who whispers and insinuates wrong notions. Ibn Katheer: so that the Shaytan will not make the reciter stumble, confuse him, and prevent him from pondering and reflecting.",
  },
  {
    t: "tafakkur",
    q: "How did Al-Hasan رحمه الله explain al-A‘raf 7:146, “I will turn away from My signs those who are arrogant”?",
    a: "That is, I shall prevent their hearts from reflecting upon My commands. Keeping away from sin is a means of ensuring that one’s reflection is sound.",
  },
  {
    t: "muhasabah",
    q: "Why does the nafs pose a serious danger to the individual?",
    a: "By nature it is inconstant and fickle, vulnerable to outside influences, easily swayed by whims, desires and diseases of the heart, and in principle inclined to evil, unless it is restrained with mindfulness and fear of Allah.",
  },
  {
    t: "muhasabah",
    q: "What does Allah ﷻ say about the nafs in Yusuf 12:53?",
    a: "Indeed, the soul [nafs] is a persistent enjoiner of evil, except those upon which my Lord has mercy.",
  },
  {
    t: "muhasabah",
    q: "What does muhasabah mean in linguistic terms?",
    a: "The Arabic word muhasabah (taking stock of oneself) refers to counting and reckoning.",
  },
  {
    t: "muhasabah",
    q: "What does muhasabah mean in Islamic terminology?",
    a: "Thinking about one’s deeds, and striving to correct mistakes and to persist in doing righteous deeds.",
  },
  {
    t: "muhasabah",
    q: "How did Al-Mawardi رحمه الله define muhasabah?",
    a: "A person reviewing at night deeds that he did during the day; if they were good, he approves of them and follows them with more of that type; if they were blameworthy, he corrects them if possible and refrains from similar deeds in the future.",
  },
  {
    t: "muhasabah",
    q: "What did Allah ﷻ instruct in al-Hashr 59:18–19?",
    a: "O you who have believed, fear Allah. And let every soul look to what it has put forth for tomorrow — and fear Allah. Indeed, Allah is Acquainted with what you do. And be not like those who forgot Allah, so He made them forget themselves.",
  },
  {
    t: "muhasabah",
    q: "How did As-Sa‘di رحمه الله explain al-Hashr 59:18–19?",
    a: "The verse clearly refers to muhasabah: check yourself; if you see a slip, give it up, repent sincerely, and avoid what led to it; if you are falling short in a command of Allah, strive hard and seek His help in improving and perfecting your deeds.",
  },
  {
    t: "muhasabah",
    q: "How did Al-Hasan رحمه الله comment on {And I swear by the reproaching soul} [al-Qiyamah 75:2]?",
    a: "You will not find the believer in any state except questioning his actions and rebuking himself: What was my intention when I said that / ate that / drank that? The evildoer keeps going and does not question his actions or rebuke himself.",
  },
  {
    t: "muhasabah",
    q: "According to the hadith of Shaddad ibn Aws رضي الله عنه, who is the smart one and who is the helpless one?",
    a: "The smart one takes stock of himself in this world before the Hereafter and strives for that which comes after death. The helpless one follows his whims and desires and indulges in wishful thinking about Allah. (Ahmad; at-Tirmidhi, classed as sahih)",
  },
  {
    t: "muhasabah",
    q: "What did Al-Izz ibn Abd as-Salam رحمه الله say the scholars agreed upon?",
    a: "They are unanimously agreed that it is obligatory to take stock of oneself with regard to one’s past deeds, in addition to his future deeds.",
  },
  {
    t: "muhasabah",
    q: "What is the first type of muhasabah, before doing an action?",
    a: "Look at the deed: are you able to do it (e.g. fasting, qiyam) or not? Is there benefit in this world or the Hereafter, or will it lead to harm? Is it for the sake of Allah or for the sake of people? Go ahead only if you are able, it is beneficial, and it is for Allah; otherwise refrain.",
  },
  {
    t: "muhasabah",
    q: "What did Al-Hasan رحمه الله say they used to do before an act of charity?",
    a: "When one of them wanted to do an act of charity, he would pause and think; if it was for the sake of Allah he would go ahead, but if it was otherwise he would refrain.",
  },
  {
    t: "muhasabah",
    q: "What are the three kinds of muhasabah after doing an action?",
    a: "1. For acts of worship. 2. With regard to sins and bad deeds committed. 3. With regard to something done when refraining would have been better, or something permissible.",
  },
  {
    t: "muhasabah",
    q: "After an obligatory or supererogatory act of worship, what should a person ask himself?",
    a: "Did I do this obligatory action in the most perfect manner, sincerely for Allah and in accordance with the teachings of the Messenger ﷺ? Did I omit some supererogatory actions, fail to read Quran, omit daily dhikr, or fall short in it?",
  },
  {
    t: "muhasabah",
    q: "What is the good outcome of taking stock of oneself for acts of worship?",
    a: "It helps you to make up for shortcomings and correct mistakes, to hasten to do good and refrain from prohibited and evil actions, and to repent from them and offer a lot of prayers for forgiveness.",
  },
  {
    t: "muhasabah",
    q: "After a sin, what decision should result from muhasabah, and which verse supports it?",
    a: "Strive to expiate for that sin by repenting sincerely, praying for forgiveness, and doing good deeds that erase sins: {Indeed, good deeds do away with misdeeds} [Hud 11:114].",
  },
  {
    t: "muhasabah",
    q: "What should a person ask after doing something permissible, or something it would have been better to refrain from?",
    a: "Why did I do that? Would it not have been better not to do it? What benefit did I gain from it? Will it increase my good deeds (hasanat)?",
  },
  {
    t: "muhasabah",
    q: "According to Ibn al-Qayyim رحمه الله, in what order should a person take stock of himself?",
    a: "First obligatory duties (make them up or rectify them); then forbidden things (repent, seek forgiveness, do good deeds that erase sins); then heedlessness (dhikr and turning to Allah); then words, places walked to, what the hands struck, and what the ears heard.",
  },
  {
    t: "muhasabah",
    q: "On what two counts should every movement or word be judged?",
    a: "For whose sake it was done (sincerity), and how it was done (whether it was in accordance with the Sunnah).",
  },
  {
    t: "muhasabah",
    q: "What did Al-Hasan رحمه الله say about salvation and success through muhasabah?",
    a: "A person will continue to be fine so long as he has a conscience to exhort him and he constantly pays attention to taking stock of himself.",
  },
  {
    t: "muhasabah",
    q: "What did Umar ibn al-Khattab رضي الله عنه say about taking stock of yourselves?",
    a: "Take stock of yourselves before you are brought to account, for it will make your reckoning easier. Weigh yourselves before you are weighed, for it will be easier for you. Prepare yourselves for the great examination.",
  },
  {
    t: "muhasabah",
    q: "According to Al-Hasan al-Basri رحمه الله, why will the reckoning be harder for some people?",
    a: "The reckoning will only be easier for people who took stock of themselves in this world; it will be harder for those who acted without taking stock of themselves.",
  },
  {
    t: "muhasabah",
    q: "What did Al-Fudayl ibn Iyad رحمه الله say about the believer and the hypocrite?",
    a: "The believer takes stock of himself and knows that he will have to stand before Allah. The hypocrite is heedless about his actions. May Allah have mercy on a person who examines himself before the angel of death comes down to him.",
  },
  {
    t: "muhasabah",
    q: "What did Abd al-Aziz ibn Abi Rawwad رحمه الله find when he took stock after righteous deeds?",
    a: "I never did any righteous deeds after which I took stock of myself, but I found that the share of the Shaytan was greater than the share of Allah.",
  },
  {
    t: "muhasabah",
    q: "What did Muhammad ibn Wasi رحمه الله used to say about sins?",
    a: "If sins had a bad smell, no one would be able to sit with me! This was despite the fact that he was one of the greatest worshippers among this ummah.",
  },
  {
    t: "muhasabah",
    q: "How did Abu’l-Fath Nasr ibn Ibrahim al-Maqdisi take stock of himself?",
    a: "He used to take stock of himself at every moment, and he did not let any time pass without making sure that he did something useful, either writing, studying or reading. (Ibn Asakir)",
  },
  {
    t: "muhasabah",
    q: "What helps you take stock of yourself, according to al-Baqarah 2:235?",
    a: "Having certain faith that Allah sees what is in your heart: {And know that Allah knows what is within yourselves, so fear Him}; that is, take stock of yourselves.",
  },
  {
    t: "muhasabah",
    q: "What did Ibn al-Qayyim رحمه الله say helps one remember that Allah is always watching?",
    a: "Realizing that the harder a person strives today, the easier it will be for him tomorrow, when someone else will bring him to account.",
  },
  {
    t: "muhasabah",
    q: "Who will be questioned on the Day of Resurrection besides the disbelievers and hypocrites?",
    a: "The righteous and the Messengers will also be questioned. {That He may question the truthful about their truth} [al-Ahzab 33:8]; {Then We will surely question those to whom a message was sent, and We will surely question the messengers} [al-A‘raf 7:6].",
  },
  {
    t: "muhasabah",
    q: "What did Umar ibn Abd al-Aziz رحمه الله write to Adiy ibn Arta’ah?",
    a: "Fear Allah, O Adiy, and take stock of yourself before the Day of Resurrection.",
  },
  {
    t: "muhasabah",
    q: "What did Ma‘ruf al-Karkhi رحمه الله say to a man who gossiped in his presence?",
    a: "Remember the cotton [of the shroud] when they place it over your eyes.",
  },
  {
    t: "muhasabah",
    q: "What did Anas رضي الله عنه hear Umar رضي الله عنه say to himself in the garden?",
    a: "“Umar ibn al-Khattab, the leader of the believers (amir al-mu’mineen)! Bah! Bah! By Allah, you should surely fear Allah or He will surely punish you!”",
  },
  {
    t: "muhasabah",
    q: "What did Umar رضي الله عنه do when he missed praying Asr in congregation?",
    a: "He gave in charity a piece of land the value of which was two hundred thousand dirhams.",
  },
  {
    t: "muhasabah",
    q: "What did Ibn Umar رضي الله عنهما do if he missed a prayer in congregation?",
    a: "He would spend that entire night in prayer.",
  },
  {
    t: "muhasabah",
    q: "What did Umar ibn Abd al-Aziz رحمه الله do when he delayed Maghrib until two stars appeared?",
    a: "He manumitted two slaves, even though the time for the prayer had not ended.",
  },
  {
    t: "muhasabah",
    q: "What did Ibn Abi Rabeeah رحمه الله do when he missed the two Sunnah rakahs before Fajr?",
    a: "He manumitted a slave.",
  },
  {
    t: "muhasabah",
    q: "Why did Ibn Awn رحمه الله manumit a slave after his mother called him?",
    a: "He responded, but he spoke more loudly than she had done, so he manumitted a slave.",
  },
  {
    t: "tawakkul",
    q: "Why is relying on Allah (tawakkul) one of the greatest means of attaining success?",
    a: "It is something that Allah loves and is pleased with. It reflects a high level of affirming Allah’s oneness (Tawhid) and is one of the most important things a person can do in his journey towards Allah.",
  },
  {
    t: "tawakkul",
    q: "Which verse shows that tawakkul is part of worshipping Allah Alone?",
    a: "{It is You we worship and You we ask for help} [al-Fatihah 1:5].",
  },
  {
    t: "tawakkul",
    q: "What does tawakkul mean in linguistic terms?",
    a: "Delegating something to someone else, and relying upon them to do it.",
  },
  {
    t: "tawakkul",
    q: "How did az-Zubaydi رحمه الله define tawakkul in Islamic terminology?",
    a: "Relying on that which is with Allah, and despairing of that which is in the hands of people.",
  },
  {
    t: "tawakkul",
    q: "How did Ibn Uthaymeen رحمه الله define tawakkul?",
    a: "Sincerely relying on Allah ﷻ to bring benefits and ward off harm, whilst taking appropriate measures as Allah has enjoined.",
  },
  {
    t: "tawakkul",
    q: "Quote four verses in which Allah urges the believers to rely on Him.",
    a: "{And upon Allah rely, if you should be believers} [al-Ma’idah 5:23]; {And upon Allah let the believers rely} [at-Tawbah 9:51]; {And whoever relies upon Allah — then He is sufficient for him} [at-Talaq 65:3]; {And when you have decided, then rely upon Allah. Indeed, Allah loves those who rely [upon Him]} [Aal Imran 3:159].",
  },
  {
    t: "tawakkul",
    q: "How does al-Anfal 8:2 describe the believers with regard to tawakkul?",
    a: "The believers are only those who, when Allah is mentioned, their hearts become fearful, and when His verses are recited to them, it increases them in faith; and upon their Lord they rely.",
  },
  {
    t: "tawakkul",
    q: "What did Ibn al-Qayyim رحمه الله say about tawakkul and inabah?",
    a: "Relying on Allah (tawakkul) is half of religion, and the other half is turning to Him (inabah). Religion is seeking the help of Allah and worshipping Him, so tawakkul is seeking His help and inabah is worshipping Him.",
  },
  {
    t: "tawakkul",
    q: "What is the true sense of relying on Allah, and what happens if one relies on other than Him?",
    a: "Whoever delegates his affairs to Allah, and is content with what He decrees and chooses for him, has relied on Him in the true sense. Whoever delegates his affairs to someone other than Allah, and puts his hope in someone other than Him, is bound to fail because he is heedless of his Lord.",
  },
  {
    t: "tawakkul",
    q: "What did the Prophet ﷺ say, in the hadith of Ibn Mas‘ud رضي الله عنه, about seeking relief from people versus from Allah?",
    a: "He who suffers poverty and seeks relief from people will not be granted relief; but he who seeks relief from Allah Alone, Allah will soon make him independent of means. (Ahmad, Abu Dawud; at-Tirmidhi classed it as sahih)",
  },
  {
    t: "tawakkul",
    q: "What does Hasbuna Allahu wa ni‘am al-wakeel mean, and who said it?",
    a: "Allah is sufficient for us and the best one on whom to depend. Ibn Abbas رضي الله عنهما: Ibrahim عليه السلام said it when he was thrown into the fire, and Muhammad ﷺ said it when they said the people had gathered against them. (al-Bukhari)",
  },
  {
    t: "tawakkul",
    q: "What did the Prophet ﷺ tell the man who asked about tying his she-camel?",
    a: "Tie it up and rely on Allah. (Anas رضي الله عنه — at-Tirmidhi; classed as hasan by al-Albani)",
  },
  {
    t: "tawakkul",
    q: "Why is failing to take appropriate measures, on the grounds of tawakkul, wrong?",
    a: "The person is helpless; failing to take appropriate measures is a corrupt notion and is contrary to reason; it is the way of lazy people.",
  },
  {
    t: "tawakkul",
    q: "What did Imam Ahmad رحمه الله say to those who sat still claiming provision was incumbent upon Allah?",
    a: "This is a corrupt notion! He cited al-Jumu‘ah 62:9–11: after Jumu‘ah, disperse within the land and seek from the bounty of Allah.",
  },
  {
    t: "tawakkul",
    q: "Should a person exhaust himself in taking measures? What if he has no means?",
    a: "It is sufficient to do what he is able to do, without exhausting himself, with firm resolve and relying on Allah. If no possible means are available, the greatest and strongest of means is calling upon Allah in supplication and seeking His help.",
  },
  {
    t: "tawakkul",
    q: "What is the first category of relying on someone other than Allah?",
    a: "Relying on someone else in matters in which no one is able to help except Allah — such as relying on the dead and false gods for victory, provision or intercession. This constitutes major shirk.",
  },
  {
    t: "tawakkul",
    q: "What is the second category of relying on someone other than Allah?",
    a: "Relying on visible means, such as a governor or ruler with regard to that which Allah has given him power over (provision, warding off harm). This is a type of minor shirk.",
  },
  {
    t: "tawakkul",
    q: "What is the third category of relying on someone other than Allah?",
    a: "Delegating to someone able to do something on your behalf. This is permissible as a measure, but you should not rely on him for the result; rely on the Creator of the measures and causes, Who ordained cause and effect.",
  },
  {
    t: "tawakkul",
    q: "What is the first outcome of relying on Allah, and which verses support it?",
    a: "Being sufficed in all things, supported against one’s enemies, and protection of oneself, one’s wife and one’s children. {O Prophet, sufficient for you is Allah and for whoever follows you of the believers} [al-Anfal 8:64]; Yaqub عليه السلام: {The decision is only for Allah; upon Him I have relied…} [Yusuf 12:67]; {And whoever relies upon Allah — then He is sufficient for him} [at-Talaq 65:3].",
  },
  {
    t: "tawakkul",
    q: "What did the Prophet ﷺ say about provision and the birds?",
    a: "If you truly relied upon Allah as you should, you would be granted provision as the birds are granted provision; they go out in the morning with empty stomachs and come back in the evening with full stomachs. (Umar رضي الله عنه — at-Tirmidhi; al-Albani: sahih)",
  },
  {
    t: "tawakkul",
    q: "How did Ibn Rajab رحمه الله describe the birds hadith, and which verse did he cite?",
    a: "This hadith is the guideline with regard to relying on Allah, which is one of the greatest means of attaining provision. {And whoever fears Allah — He will make for him a way out, And will provide for him from where he does not expect. And whoever relies upon Allah — then He is sufficient for him} [at-Talaq 65:2–3].",
  },
  {
    t: "tawakkul",
    q: "What did the poet say about calling upon Allah at night?",
    a: "I guarantee to save from harm / The one who does not spend the night calling upon anyone other than Allah for help.",
  },
  {
    t: "tawakkul",
    q: "What is the second outcome of relying on Allah?",
    a: "The love of Allah ﷻ: {Indeed, Allah loves those who rely [upon Him]} [Aal Imran 3:159].",
  },
  {
    t: "tawakkul",
    q: "Who will enter Paradise without being brought to account, according to the hadith of Ibn Abbas رضي الله عنهما?",
    a: "Seventy thousand of the ummah: those who did not ask others to do ruqyah for them, or believe in omens, or use cautery, and on their Lord they relied. (Agreed upon)",
  },
  {
    t: "tawakkul",
    q: "Which verse shows that tawakkul is protection against the Shaytan?",
    a: "{Private conversation is only from Satan that he may grieve those who have believed, but he will not harm them at all except by permission of Allah. And upon Allah let the believers rely} [al-Mujadilah 58:10].",
  },
  {
    t: "tawakkul",
    q: "What should a person say when leaving his house, according to the hadith of Anas رضي الله عنه?",
    a: "Bismillah, tawakkaltu ‘ala Allah, laa hawla wa laa quwwata illa Billah. It will be said: You have been sufficed and protected, and the Shaytan will go far away from him. (at-Tirmidhi; al-Albani: sahih)",
  },
  {
    t: "tawakkul",
    q: "What is the fifth outcome of relying on Allah, and what did Ibn al-Qayyim رحمه الله say about moving a mountain?",
    a: "Peace of mind, resolve, motivation, and a sense of pride and independence of means. {But whoever relies upon Allah — then indeed, Allah is Exalted in Might and Wise} [al-Anfal 8:49]. If he relied on Allah in the true sense to remove a mountain from its place, and it was obligatory for him to move it, he would be able to move it.",
  },
  {
    t: "tawakkul",
    q: "What did the Prophet ﷺ say about belief in bad omens?",
    a: "Belief in bad omens is shirk. (Ahmad and Abu Dawud with a sahih isnad)",
  },
  {
    t: "tawakkul",
    q: "What did Ali رضي الله عنه say to the astrologer who warned him not to travel because the moon was in Scorpio?",
    a: "Rather I shall travel, putting my trust in Allah and relying on Him, and disbelieving in what you say. He travelled, was blessed on that journey, and defeated the Khawarij utterly. (Ibn Taymiyyah and Ibn Qayyim al-Jawziyah)",
  },
  {
    t: "tawakkul",
    q: "What did the Prophet ﷺ say about wearing or hanging up amulets for protection?",
    a: "Whoever wears [or hangs up] anything [for protection] will be entrusted to it. (at-Tirmidhi and Ahmad; al-Albani: hasan because of corroborating evidence). If people do not rely on Allah, He will leave them to that to which they attached their hopes, and that is sufficient doom.",
  },
  {
    t: "tawakkul",
    q: "Give examples of amulets that are contrary to tawakkul.",
    a: "Wearing or hanging up blue beads or blue eyes (“evil eye” symbol), amulets from liars and charlatans, or hanging some dead animals on the door of the house, in the car and so on, for protection.",
  },
  {
    t: "tawakkul",
    q: "What did the Prophet ﷺ say about taking a bundle of firewood rather than asking people?",
    a: "For one of you to take a bundle of firewood on his back [and sell it] is better for him than asking of someone who may or may not give him something. (Agreed upon)",
  },
  {
    t: "tawakkul",
    q: "What did the Prophet ﷺ say about earning with one’s own hands, and about Dawud عليه السلام?",
    a: "No one ever eats any food better than that which he earns by working with his own hands, and Allah’s Prophet Dawud عليه السلام used to eat from what he earned by working with his own hands. (al-Bukhari)",
  },
  {
    t: "tawakkul",
    q: "What did the Prophet ﷺ enjoin regarding medical treatment?",
    a: "Seek medical treatment, O slaves of Allah. (at-Tirmidhi; al-Albani: sahih). Allah ﷻ has not sent down any disease but He has also sent down a remedy for it. (al-Bukhari)",
  },
  {
    t: "tawakkul",
    q: "What did the Prophet ﷺ say to Abu Bakr رضي الله عنه in the cave?",
    a: "What do you think, O Abu Bakr, of two, of whom Allah is the third? (Agreed upon). Abu Bakr had said: If one of them looks down at his feet, he will see us.",
  },
  {
    t: "tawakkul",
    q: "What happened when the woman who lost a goat and her spindle beseeched her Lord?",
    a: "She had left twelve goats and her spindle when she went out on a campaign. She said: O Lord, You guaranteed the one who goes out in Your cause that You would protect him… The following morning she found her goat and another like it, and her spindle and another like it. (Ahmad; al-Albani: sahih)",
  },
  {
    t: "tawakkul",
    q: "Name the four things the book lists as contrary to tawakkul.",
    a: "1. Belief in bad omens and pessimism. 2. Going to sorcerers, fortune-tellers, and astrologers. 3. Wearing and using amulets. 4. Not taking appropriate measures, such as striving to seek provision (including not seeking medical treatment).",
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
  {
    t: "mahabbah",
    q: "In Islamic terminology, mahabbah is:",
    opts: [
      "Obeying Allah reluctantly because of fear of punishment only",
      "The inclination from the depths of one’s heart towards Allah, and giving Him precedence over others",
      "Loving people more than Allah if they benefit you",
      "A recommended extra after the pillars",
    ],
    ans: 1,
    fb: "In Arabic it is the heart’s inclination, attachment and longing. Islamically it is directed to Allah, giving Him precedence over others.",
  },
  {
    t: "mahabbah",
    q: "Love of Allah is:",
    opts: [
      "Recommended for scholars only",
      "Obligatory for everyone — no one fails in it except one who wronged himself, is ignorant or is doomed",
      "The same as fearing people",
      "Optional if one already has hope",
    ],
    ans: 1,
    fb: "at-Tawbah 9:24 warns against preferring family, wealth and dwellings to Allah, His Messenger and jihad. Such a warning is only issued for something obligatory.",
  },
  {
    t: "mahabbah",
    q: "The Prophet ﷺ said no one truly believes until he is more beloved to him than:",
    opts: [
      "His wealth only",
      "His father, his child, and all the people",
      "The angels",
      "Supererogatory deeds",
    ],
    ans: 1,
    fb: "Anas ibn Malik رضي الله عنه — agreed upon. Ibn Rajab: love of the Messenger is subordinate to love of Allah.",
  },
  {
    t: "mahabbah",
    q: "The hadith qudsi says the slave continues to draw closer to Allah by supererogatory deeds until:",
    opts: [
      "People praise him",
      "Allah loves him",
      "He no longer needs the obligatory deeds",
      "He is excused from dhikr",
    ],
    ans: 1,
    fb: "al-Bukhari. This is the second of Ibn al-Qayyim’s ten ways, after reading and reflecting on the Quran.",
  },
  {
    t: "mahabbah",
    q: "Ibn al-Qayyim رحمه الله said the most amazing of the ten means is:",
    opts: [
      "Collecting wealth for charity only",
      "Feeling humble and helpless before Allah",
      "Abandoning the Quran",
      "Preferring one’s own desires",
    ],
    ans: 1,
    fb: "The ten ways also include dhikr in all situations, giving precedence to what Allah loves, reflecting on the names and attributes, thinking of His blessings, the end of the night, sitting with those who love Him, and keeping away from barriers.",
  },
  {
    t: "mahabbah",
    q: "Ibn Mas‘ud رضي الله عنه said: if you want to know whether you love Allah, look at how you feel about:",
    opts: [
      "People’s praise",
      "The Quran — if you love it, you love Allah, for it is His word",
      "Ease and luxury",
      "Abandoning all permissible things",
    ],
    ans: 1,
    fb: "Sufyan ibn Uyaynah: you will not attain the pinnacle until nothing is more beloved to you than Allah. Whoever loves the Quran loves Allah.",
  },
  {
    t: "mahabbah",
    q: "The man who always concluded the prayer with Surat al-Ikhlas did so because:",
    opts: [
      "It is the shortest surah, so the prayer ended quickly",
      "It is a description of the Most Gracious, and he loved to recite it — and the Prophet ﷺ said Allah loves him",
      "He did not know other surahs",
      "He wanted to be seen by his companions",
    ],
    ans: 1,
    fb: "Aisha رضي الله عنها — agreed upon. First outcome of loving Allah: Allah will love you.",
  },
  {
    t: "mahabbah",
    q: "When Allah loves someone, according to the hadith of Abu Hurayrah رضي الله عنه:",
    opts: [
      "Only the person himself is told in secret",
      "He calls Jibreel to love him, then the inhabitants of heaven, then he is accepted on earth",
      "He is immediately taken from this world",
      "He is freed from all obligatory deeds",
    ],
    ans: 1,
    fb: "Agreed upon. Second outcome: the angels and the inhabitants of heaven and earth will love him.",
  },
  {
    t: "mahabbah",
    q: "The sweetness of faith is found in three characteristics. Which is not one of them?",
    opts: [
      "Allah and His Messenger are dearer to him than all else",
      "He loves a man only for the sake of Allah",
      "He would hate to return to disbelief as he would hate to be thrown into the Fire",
      "He conceals all obligatory deeds from people",
    ],
    ans: 3,
    fb: "al-Bukhari and Muslim. Third outcome of loving Allah: he will taste the sweetness of faith.",
  },
  {
    t: "mahabbah",
    q: "al-Baqarah 2:165 teaches that those who believe are:",
    opts: [
      "Equal in love for Allah and for the world",
      "Stronger in love for Allah — and by giving His love precedence they attain salvation from punishment",
      "Not in need of fearing the Fire",
      "Excused from loving the Messenger ﷺ",
    ],
    ans: 1,
    fb: "The punishment is for those who do not love Allah. Believers give His love precedence over love of all else.",
  },
  {
    t: "mahabbah",
    q: "Being alone with Allah at the end of the night, in Ibn al-Qayyim’s list, includes:",
    opts: [
      "Sleeping through that time so as not to show off",
      "Reciting His Book, then concluding with prayers for forgiveness and repentance, at the time when He descends",
      "Only making dua without reciting Quran",
      "Gathering a large crowd",
    ],
    ans: 1,
    fb: "This is the eighth of the ten ways. The ninth is sitting with those who sincerely love Allah; the tenth is keeping away from anything that could form a barrier between you and Him.",
  },
  {
    t: "mahabbah",
    q: "Ibn al-Qayyim رحمه الله said that by means of these ten things, the lovers of Allah:",
    opts: [
      "Became famous among people",
      "Went through the stages of love and were admitted to the court of the Beloved",
      "No longer needed the Quran",
      "Were excused from obligatory deeds",
    ],
    ans: 1,
    fb: "The ten include Quran, nawafil, dhikr, preferring what Allah loves, His names and attributes, His blessings, humility, the end of the night, sitting with those who love Him, and removing barriers.",
  },
  {
    t: "sabr",
    q: "In linguistic terms, sabr means:",
    opts: [
      "Happiness",
      "Restraint",
      "Forgetfulness",
      "Speed",
    ],
    ans: 1,
    fb: "Sabr (translated here as patience) means restraint. In Islamic terminology it is restraining the nafs from what it loves and desires, restraining it from panicking, and forcing it to keep its focus on sublime matters.",
  },
  {
    t: "sabr",
    q: "The ruling on patience (sabr) is that it is:",
    opts: [
      "Recommended only in calamity",
      "Obligatory according to the consensus of the Muslim ummah",
      "Permissible but not required",
      "Only for the Prophets",
    ],
    ans: 1,
    fb: "Allah ﷻ enjoins it in more than one place, including al-Baqarah 2:45, Aal Imran 3:200, and an-Nahl 16:127.",
  },
  {
    t: "sabr",
    q: "The believer needs patience in which of the following?",
    opts: [
      "Only when a calamity strikes",
      "Complying with Allah’s commands, refraining from what is prohibited, and accepting the divine decree — and thus constantly until death",
      "Only in worship in Ramadan",
      "Only when dealing with other people",
    ],
    ans: 1,
    fb: "He will be dealing with one or more of these three at all times, so he needs patience constantly until death. Life cannot be sound without it.",
  },
  {
    t: "sabr",
    q: "Allah’s “being with” the patient is of a special kind, and includes:",
    opts: [
      "Only recording their deeds",
      "Protecting them, helping them and supporting them",
      "Excusing them from commands",
      "Removing all tests from them",
    ],
    ans: 1,
    fb: "{And be patient. Indeed, Allah is with the patient} [al-Anfal 8:46]. {And Allah is with the patient} [al-Baqarah 2:249].",
  },
  {
    t: "sabr",
    q: "The status of patience in relation to faith is like:",
    opts: [
      "The hand in relation to the arm",
      "The head in relation to the body — the one who has no patience has no faith",
      "Clothing in relation to the body",
      "A branch in relation to the tree, optional to keep",
    ],
    ans: 1,
    fb: "The one who has no patience has no faith, just as the one who has no head has no body.",
  },
  {
    t: "sabr",
    q: "Ibn Taymiyyah رحمه الله said that leadership in religion may be attained by means of:",
    opts: [
      "Wealth and status",
      "Patience and certain faith",
      "Large numbers of followers",
      "Abandoning knowledge",
    ],
    ans: 1,
    fb: "Then he recited: {And We made from among them leaders guiding by Our command when they were patient and [when] they were certain of Our signs} [as-Sajdah 32:24].",
  },
  {
    t: "sabr",
    q: "Patience in refraining from sin, as in the story of Yusuf عليه السلام, means:",
    opts: [
      "Avoiding sin only when it is difficult",
      "Restraining yourself from haram even when the means of doing so are readily available",
      "Waiting until after the sin to repent",
      "Leaving the land whenever fitnah appears",
    ],
    ans: 1,
    fb: "The wife of al-Aziz closed the doors and called him, yet he refused, even though there was a strong motive and no impediments.",
  },
  {
    t: "sabr",
    q: "“Patience is only when the calamity first strikes” means that patience:",
    opts: [
      "Can be delayed until after one has panicked",
      "Is required at the first moment of calamity, not after the shock has passed",
      "Is only for the first calamity in a lifetime",
      "Does not apply to later hardship",
    ],
    ans: 1,
    fb: "Agreed upon. This is patience in the face of calamity and in accepting the divine decree. Allah rewards it by compensating, praising, having mercy and guiding.",
  },
  {
    t: "sabr",
    q: "The Messenger of Allah ﷺ said that no one is ever given a better and more expansive gift than:",
    opts: [
      "Wealth",
      "Patience",
      "Long life",
      "Praise from people",
    ],
    ans: 1,
    fb: "Agreed upon. Gifts and abundant goodness, than which there is nothing better, are among the outcomes of patience.",
  },
  {
    t: "sabr",
    q: "In the hadith of Abu Malik al-Ash‘ari رضي الله عنه, patience is described as:",
    opts: [
      "Light, like prayer",
      "Proof, like charity",
      "Illumination, and the Quran is evidence for you or against you",
      "Optional for the strong only",
    ],
    ans: 2,
    fb: "“Prayer is light, charity is proof, patience is illumination and the Quran is evidence, for you or against you.” (Muslim)",
  },
  {
    t: "sabr",
    q: "According to az-Zumar 39:10, the patient will be given their reward:",
    opts: [
      "According to the least of their deeds",
      "Without account",
      "Only after a long wait in the grave",
      "Equal to those who were not patient",
    ],
    ans: 1,
    fb: "{Indeed, the patient will be given their reward without account}. Hud 11:11 also promises forgiveness and great reward for those who are patient and do righteous deeds.",
  },
  {
    t: "sabr",
    q: "When Yasir and Sumayyah رضي الله عنهما were being tortured, the Prophet ﷺ said:",
    opts: [
      "Hide your faith until the torture stops",
      "Patience, O family of Yasir, for you are promised Paradise",
      "Emigrate at once and leave Makkah",
      "Ask Quraysh for a delay",
    ],
    ans: 1,
    fb: "Narrated by al-Hakim; classed as sahih by al-Albani. Allah will reward the believers with Paradise for their patience: {Peace be upon you for what you patiently endured. And excellent is the final home} [ar-Ra‘d 13:24].",
  },
  {
    t: "sabr",
    q: "Umm Salamah رضي الله عنها was compensated after Abu Salamah died because she said:",
    opts: [
      "Only “to Allah we belong,” without asking for a replacement",
      "What Allah commanded, including “O Allah, reward me for my affliction and compensate me with something better”",
      "That no one among the Muslims was better, and stopped there",
      "Nothing, because patience is silent",
    ],
    ans: 1,
    fb: "She thought: Who among the Muslims is better than Abu Salamah…? Then she said it, and Allah compensated her with the Messenger of Allah ﷺ. (Muslim)",
  },
  {
    t: "sabr",
    q: "Attaining what you seek and love, being saved from what you dislike, and being admitted to Paradise can only be achieved:",
    opts: [
      "By means of patience",
      "By means of wealth",
      "Without any trial",
      "By abandoning worship when it is hard",
    ],
    ans: 0,
    fb: "The angels will enter upon them from every gate, saying: “Peace be upon you for what you patiently endured. And excellent is the final home.” [ar-Ra‘d 13:23–24]",
  },
  {
    t: "shukr",
    q: "Faith consists of two halves:",
    opts: [
      "Hope and fear only",
      "Gratitude and patience",
      "Knowledge and wealth",
      "Fasting and prayer only",
    ],
    ans: 1,
    fb: "One who seeks salvation should not ignore these two principles, and should base his journey towards Allah on them.",
  },
  {
    t: "shukr",
    q: "In linguistic terms, shukr is the opposite of:",
    opts: [
      "Sabr (patience)",
      "Kufran (ingratitude)",
      "Hamd (praise)",
      "Taqwa",
    ],
    ans: 1,
    fb: "It refers to acknowledging favours and kindness, and speaking of them.",
  },
  {
    t: "shukr",
    q: "Gratitude (shukr), unlike praise (hamd):",
    opts: [
      "Is only verbal",
      "May be spoken on the lips, felt in the heart and manifested in physical actions, and can only be in response to a blessing",
      "Is never connected to a blessing",
      "Is optional and never obligatory",
    ],
    ans: 1,
    fb: "Hamd is only verbal and may or may not follow a blessing. {Work, O family of David, in gratitude. And few of My servants are grateful} [Saba 34:13].",
  },
  {
    t: "shukr",
    q: "Gratitude involves which three things?",
    opts: [
      "Wealth, status, and health",
      "Acknowledging the blessing, being pleased with it, and praising Allah",
      "Silence, concealment, and delay",
      "Hope, fear, and love only",
    ],
    ans: 1,
    fb: "Praising Allah is done by mentioning the blessings and letting their impact be seen on you: “If Allah has given you wealth, then let it be seen on you.”",
  },
  {
    t: "shukr",
    q: "According to Ibn al-Qayyim رحمه الله, gratitude to Allah is:",
    opts: [
      "Recommended only in Ramadan",
      "Obligatory on the basis of reason, Islamic teachings and common sense — the most obvious of all obligatory deeds",
      "Only for the Prophets",
      "A replacement for prayer",
    ],
    ans: 1,
    fb: "It is the most beloved thing to Him and the greatest in reward; for that purpose He created creation, sent down the Books and prescribed laws.",
  },
  {
    t: "shukr",
    q: "Allah explained that worship is connected to gratitude. This means:",
    opts: [
      "Whoever is grateful is a worshipper of Allah, and whoever is not grateful is not a worshipper",
      "Gratitude replaces all other worship",
      "Only scholars need to be grateful",
      "Ungrateful people are still complete worshippers",
    ],
    ans: 0,
    fb: "{O you who have believed, eat from the good things which We have provided for you and be grateful to Allah if it is [indeed] Him that you worship} [al-Baqarah 2:172].",
  },
  {
    t: "shukr",
    q: "Allah condemns ingratitude for His blessings and states that it is:",
    opts: [
      "A minor matter with no consequence",
      "One of the causes of His punishment",
      "Only a problem if it is spoken aloud",
      "The same as patience",
    ],
    ans: 1,
    fb: "He criticizes the one who is ungrateful at the time of hardship {Hud 11:9} and the one who focuses on calamities and forgets blessings {al-Adiyat 100:6}.",
  },
  {
    t: "shukr",
    q: "“He does not thank Allah who does not thank people” means:",
    opts: [
      "Thanking people is shirk",
      "If someone is ungrateful by nature and denies people’s favours, he will also be ungrateful towards the Creator of people",
      "Thanking people replaces thanking Allah",
      "Only parents may be thanked",
    ],
    ans: 1,
    fb: "Islamic teachings enjoin gratitude to people, especially parents. Whoever praises the giver has thanked him; whoever conceals the gift has shown ingratitude.",
  },
  {
    t: "shukr",
    q: "The Prophet ﷺ said: “Look at the one who is below you, and do not look at the one who is above you,” so that you will:",
    opts: [
      "Become famous",
      "Be more likely not to scorn the blessings that Allah bestows upon you",
      "Avoid all worldly blessings",
      "Stop working",
    ],
    ans: 1,
    fb: "Narrated by Muslim. This is among the means that help one to show gratitude.",
  },
  {
    t: "shukr",
    q: "People who deprive themselves of worldly bounties lest they be questioned about them have:",
    opts: [
      "Understood at-Takathur 102:8 correctly",
      "Misunderstood the issue — Allah has allowed enjoyment of worldly bounties and commanded thanks for them",
      "Been told to abandon all food",
      "Been excused from gratitude",
    ],
    ans: 1,
    fb: "{Then you will surely be asked that Day about worldly bounties} [at-Takathur 102:8]. He has commanded: eat of the good things and be grateful [al-Baqarah 2:172].",
  },
  {
    t: "shukr",
    q: "Qatadah said:",
    opts: [
      "Blessings come only by chance",
      "Your Lord bestows blessings and loves gratitude",
      "Gratitude is not loved by Allah",
      "Only calamities matter",
    ],
    ans: 1,
    fb: "Knowing that Allah loves those who are grateful is one of the means that help one to show gratitude.",
  },
  {
    t: "shukr",
    q: "The dua the Prophet ﷺ taught Muadh ibn Jabal رضي الله عنه after every prayer asks Allah for help to:",
    opts: [
      "Gain wealth only",
      "Remember Him, give thanks to Him, and worship Him properly",
      "Avoid all people",
      "Conceal every blessing",
    ],
    ans: 1,
    fb: "Allahumma a‘inni ‘ala dhikrika wa shukrika wa husni ‘ibadatika. Abu Dawud; classed as sahih by al-Albani.",
  },
  {
    t: "shukr",
    q: "Allah is pleased with a person, according to Anas ibn Malik رضي الله عنه, when he:",
    opts: [
      "Eats in secret so as not to show off",
      "Eats something and praises Him for it, or drinks something and praises Him for it",
      "Refuses all food and drink",
      "Praises people instead of Allah",
    ],
    ans: 1,
    fb: "Narrated by Muslim. This is among the outcomes of gratitude: attaining the pleasure of Allah.",
  },
  {
    t: "shukr",
    q: "an-Nisa 4:147 shows that Allah has no reason to punish people if they:",
    opts: [
      "Are wealthy",
      "Give thanks and believe in Him",
      "Never face hardship",
      "Conceal every blessing",
    ],
    ans: 1,
    fb: "{Why would Allah punish you if you are grateful and believe? And ever is Allah Appreciative and Knowing.}",
  },
  {
    t: "shukr",
    q: "Ibrahim 14:7 states that if you are grateful, Allah will:",
    opts: [
      "Remove all tests forever",
      "Surely increase you in favor; but if you deny, His punishment is severe",
      "No longer require worship",
      "Make gratitude optional",
    ],
    ans: 1,
    fb: "Thus blessings increase with gratitude and are protected against loss. Gratitude is the retainer of blessings.",
  },
  {
    t: "shukr",
    q: "Al-Hasan رحمه الله said that humankind’s constant struggle (al-Balad 90:4) is:",
    opts: [
      "Only for wealth",
      "To show gratitude in times of ease and patience at times of hardship",
      "To avoid both gratitude and patience",
      "Only for scholars",
    ],
    ans: 1,
    fb: "The salaf said faith consists of two halves: half gratitude and half patience.",
  },
  {
    t: "shukr",
    q: "The Prophet ﷺ advised us to ask Allah for pardon and well-being. He did not advise us to:",
    opts: [
      "Give thanks",
      "Ask for calamity — though if calamity strikes, the one tested may attain a reward greater than that of the grateful",
      "Remember Allah",
      "Worship properly",
    ],
    ans: 1,
    fb: "Mutarrif ibn Abdillah رحمه الله said well-being with thanks was dearer to him than being tested with hardship and showing patience.",
  },
  {
    t: "wara",
    q: "Linguistically, wara refers to:",
    opts: [
      "Seeking fame",
      "Feeling uncomfortable with something and therefore refraining from it",
      "Doing more nawafil only",
      "Abandoning all halal food",
    ],
    ans: 1,
    fb: "In principle it is refraining from the prohibited, but it is also used for refraining from what is permissible. Ibn al-Qayyim: refraining from what one fears may lead to harm in the Hereafter.",
  },
  {
    t: "wara",
    q: "A person will not be regarded as one of those who are mindful of Allah until he:",
    opts: [
      "Gives up that which is innocuous as a precaution against that which is problematic",
      "Prays only in public",
      "Avoids all people",
      "Gives up obligatory deeds",
    ],
    ans: 0,
    fb: "Atiyah ibn Urwah as-Sa‘di رضي الله عنه — hasan, at-Tirmidhi. Al-Hasan ibn Ali رضي الله عنهما also learned: “Leave that which makes you doubt for that which does not make you doubt.”",
  },
  {
    t: "wara",
    q: "Whoever falls into unclear matters is like:",
    opts: [
      "A traveller who is always safe",
      "A shepherd who grazes his flock around a sanctuary; he will soon encroach upon it",
      "One who has completed his faith",
      "One who no longer needs knowledge",
    ],
    ans: 1,
    fb: "an-Numan ibn Basheer رضي الله عنه — agreed upon. Whoever refrains from unclear matters protects his faith and his honour.",
  },
  {
    t: "wara",
    q: "Tawus رحمه الله likened piety (wara) to:",
    opts: [
      "The root of the tree of faith",
      "The fruit of the tree whose root is the shahadah",
      "The leaves only",
      "Something optional after prayer",
    ],
    ans: 1,
    fb: "There is nothing good in a tree that bears no fruit, and nothing good in a person who has no piety. Wara is a condition of faith and its ultimate outcome.",
  },
  {
    t: "wara",
    q: "When Abu Bakr as-Siddeeq رضي الله عنه learned the food came from cheating in fortune-telling, he:",
    opts: [
      "Kept eating and gave charity later",
      "Put his hand in his mouth and made himself vomit",
      "Blamed the slave only",
      "Said the Jahiliyyah no longer mattered",
    ],
    ans: 1,
    fb: "Al-Bukhari from Aisha رضي الله عنها. He set the best example of piety (wara).",
  },
  {
    t: "wara",
    q: "According to Ibn Uthaymeen رحمه الله, piety (wara) means:",
    opts: [
      "Giving up everything beneficial in this world",
      "Refraining from that which will harm him in the Hereafter — giving up what is prohibited",
      "The same as zuhd in every case",
      "Only leaving unclear speech",
    ],
    ans: 1,
    fb: "Zuhd is of a higher status: giving up that which will not benefit in the Hereafter. Things are harmful, beneficial, or neither.",
  },
  {
    t: "wara",
    q: "Those whose deeds like mountains of Tihamah become scattered dust are people who:",
    opts: [
      "Never prayed at night",
      "Worship at night as you do, but when they are alone they transgress the sacred limits of Allah",
      "Have no brothers in the ummah",
      "Only eat halal",
    ],
    ans: 1,
    fb: "This is the danger of lacking piety (wara). Likewise the traveller whose food, drink and clothes are haram will not have his dua answered. (Muslim)",
  },
  {
    t: "wara",
    q: "Ibn Taymiyyah رحمه الله warned that the ignorant person may:",
    opts: [
      "Always have more wara than the scholar",
      "Fail to do obligatory deeds and do forbidden deeds, thinking that this is piety (wara)",
      "Be excused from knowing halal and haram",
      "Need no Quran or Sunnah",
    ],
    ans: 1,
    fb: "Piety depends on knowing what is halal and haram from the Quran and Sunnah (Abu’s-Su‘ud).",
  },
  {
    t: "wara",
    q: "The Prophet ﷺ put down a date that had fallen on his mat because:",
    opts: [
      "He was not hungry",
      "He was worried it may have been given as zakat",
      "Dates were disliked",
      "Someone else had claimed it",
    ],
    ans: 1,
    fb: "Agreed upon. He also stopped al-Hasan ibn Ali رضي الله عنهما from eating a zakat date: “We do not eat what is given in charity.”",
  },
  {
    t: "wara",
    q: "During the ifk incident, Zaynab bint Jahsh رضي الله عنها was protected by:",
    opts: [
      "Silence from jealousy only",
      "Piety (wara) — she said she knew nothing of Aisha but good, wanting to protect her hearing and sight",
      "Leaving Madinah",
      "Reciting with a beautiful voice at night",
    ],
    ans: 1,
    fb: "She used to compete with Aisha رضي الله عنها, but Allah protected her by means of piety (wara). Agreed upon.",
  },
  {
    t: "wara",
    q: "Al-Awzai رحمه الله said that if a man introduces an innovation (bidah):",
    opts: [
      "His knowledge increases",
      "Piety (wara) is taken away from him",
      "He becomes more cautious",
      "He is excused if his intention is good",
    ],
    ans: 1,
    fb: "Adhering to the Sunnah and refraining from bidah is the first means of attaining piety.",
  },
  {
    t: "wara",
    q: "Sahl ibn Abdillah رحمه الله said that if the believer acts upon what he knows:",
    opts: [
      "He has no further need of knowledge",
      "It will lead him to piety (wara), and if he develops piety, his heart will be with Allah",
      "He will be given wealth",
      "He should then leave unclear speech only",
    ],
    ans: 1,
    fb: "Acting upon knowledge is the second means of attaining piety (wara).",
  },
  {
    t: "wara",
    q: "Abdullah ibn Mas‘ud رضي الله عنه said: Avoid that which is forbidden to you, and you will be:",
    opts: [
      "Among the richest of people",
      "Among the most pious of people",
      "Free from needing knowledge",
      "Exempt from zuhd",
    ],
    ans: 1,
    fb: "Keeping away from prohibited things is the third means of attaining piety.",
  },
  {
    t: "wara",
    q: "Which of these did the book list as impediments to piety (wara)?",
    opts: [
      "Night prayer and fasting",
      "Eating a great deal, physical desires, greed, talking and arguing a great deal, being concerned with others’ faults, wasting time, and shamelessness",
      "Seeking knowledge of the Sunnah",
      "Showing indifference to worldly gain",
    ],
    ans: 1,
    fb: "This was summed up in the hadith: “Part of a person’s being a good Muslim is leaving alone that which does not concern him.” (at-Tirmidhi and Ibn Majah; sahih)",
  },
  {
    t: "rida",
    q: "Linguistically, rida (contentment) is the opposite of:",
    opts: [
      "Sabr (patience)",
      "Sukht (discontentment)",
      "Khawf (fear)",
      "Zuhd (asceticism)",
    ],
    ans: 1,
    fb: "It refers to accepting something and feeling comfortable and at ease with it.",
  },
  {
    t: "rida",
    q: "In Islamic terminology, rida refers to:",
    opts: [
      "Never feeling pain",
      "Not panicking at any decree from Allah ﷻ",
      "Giving up all worldly share",
      "Remaining silent in every calamity",
    ],
    ans: 1,
    fb: "Ridwan refers to a great deal of rida. {Their Lord gives them glad tidings of mercy from Him and His good pleasure} [at-Tawbah 9:21].",
  },
  {
    t: "rida",
    q: "The Prophet ﷺ said that the one who has found the taste of faith is the one who is content with:",
    opts: [
      "Wealth, health and children",
      "Allah as his Lord, Islam as his religion, and Muhammad as his Messenger",
      "Scholars only",
      "Ease and never hardship",
    ],
    ans: 1,
    fb: "Narrated by Muslim. The level of contentment varies according to the strength of faith and the categories with which one is content.",
  },
  {
    t: "rida",
    q: "According to Imam Ahmad رحمه الله, ninety of the Tabieen agreed that foremost among the Prophet’s teachings are:",
    opts: [
      "Seeking leadership",
      "Contentment with the will of Allah, submission to His command, and patience in accepting His decree",
      "Abandoning work",
      "Never weeping",
    ],
    ans: 1,
    fb: "These are the teachings to which the Messenger of Allah ﷺ adhered until he died.",
  },
  {
    t: "rida",
    q: "Part of being content with Allah as one’s Lord is:",
    opts: [
      "Resenting the worship of anyone other than Allah, and loving and hating for His sake",
      "Loving everyone equally without distinction",
      "Leaving the scholars",
      "Worshipping through intermediaries",
    ],
    ans: 0,
    fb: "This is the core of Islam. {Say, “Is it other than Allah I should desire as a lord while He is the Lord of all things?”} [al-An‘am 6:164].",
  },
  {
    t: "rida",
    q: "One of the forms of not being content with Islam is:",
    opts: [
      "Taking Muslims as allies",
      "Being content with the ways, beliefs and customs of the disbelievers, and promoting secularism and the separation of religion and politics",
      "Submitting to Allah’s rulings",
      "Learning the Seerah",
    ],
    ans: 1,
    fb: "Also: loving to bring those ways to Muslim lands, such as nakedness, free mixing and all forms of mischief and evil.",
  },
  {
    t: "rida",
    q: "Part of being content with Muhammad ﷺ as Prophet is:",
    opts: [
      "Introducing the Mawlid and new awraad",
      "Adhering to his Sunnah and not introducing innovations for which Allah has not sent down any authority",
      "Preferring family over him",
      "Leaving his rulings when they are difficult",
    ],
    ans: 1,
    fb: "The Mawlid and innovated adhkar, awraad and acts of worship are not part of being content with him as Prophet ﷺ.",
  },
  {
    t: "rida",
    q: "Which of these does NOT contradict contentment with the divine decree?",
    opts: [
      "Anger at Allah’s decree",
      "Feeling pain and sorrow, as the Prophet ﷺ wept when Ibrahim died",
      "Complaining with displeasure",
      "Panicking at every decree",
    ],
    ans: 1,
    fb: "“The eye weeps and the heart grieves, but we do not say anything but that which pleases our Lord.” (Agreed upon) Ibn Hajar: grief does not mean lack of patience if the heart is at peace.",
  },
  {
    t: "rida",
    q: "Al-Qurtubi رحمه الله said it is permissible, without undermining rida, to:",
    opts: [
      "Show anger at the decree",
      "Speak of pain and sickness without displeasure or anger",
      "Reject medical treatment",
      "Stop making dua",
    ],
    ans: 1,
    fb: "Calling upon Allah for relief is also not contrary to rida, as Ayub عليه السلام did [al-Anbiya 21:83].",
  },
  {
    t: "rida",
    q: "The dua the Prophet ﷺ taught Zayd ibn Thabit رضي الله عنه includes:",
    opts: [
      "Asking for calamity",
      "As’aluka Allahumma ar-rida ba‘d al-qada — I ask you, O Allah, for contentment after the decree",
      "Asking never to be tested",
      "Asking to be spared all patience",
    ],
    ans: 1,
    fb: "He instructed him to recite it regularly and to advise his family to recite it every day. (Ahmad and al-Hakim; isnad sahih)",
  },
  {
    t: "rida",
    q: "Al-Fudayl رحمه الله said the people who attain the most perfect contentment with Allah are:",
    opts: [
      "Those with the most wealth",
      "Those who know Allah ﷻ",
      "Those who never feel sorrow",
      "Those who abandon dua",
    ],
    ans: 1,
    fb: "Al-Junayd: rida is commensurate with the strength and depth of one’s knowledge. An early scholar: know in your heart that the Lord is just in what He decrees.",
  },
  {
    t: "rida",
    q: "The Prophet ﷺ told Abu Saeed al-Khudri رضي الله عنه that Paradise is due for the one who is content with:",
    opts: [
      "His wealth only",
      "Allah as his Lord, Islam as his religion and Muhammad as his Prophet",
      "People’s praise",
      "Ease without tests",
    ],
    ans: 1,
    fb: "Abu Saeed was amazed and asked him to say it again. (Muslim)",
  },
  {
    t: "rida",
    q: "When Allah loves a people, He tests them. Then:",
    opts: [
      "Tests are always a sign of wrath",
      "Whoever is content will earn the pleasure of Allah, and whoever is discontent will earn His wrath",
      "Contentment is optional",
      "Only scholars are tested",
    ],
    ans: 1,
    fb: "Anas ibn Malik رضي الله عنه — at-Tirmidhi; classed as sahih by al-Albani.",
  },
  {
    t: "rida",
    q: "Umar ibn al-Khattab رضي الله عنه wrote to Abu Musa رضي الله عنه that all goodness is found in:",
    opts: [
      "Wealth",
      "Contentment — so if you are able to be content, all well and good; otherwise be patient",
      "Argument",
      "Looking at luxury",
    ],
    ans: 1,
    fb: "Ibn al-Qayyim: following the path of contentment and love, a person travels with speed whilst lying in his bed.",
  },
  {
    t: "rida",
    q: "Yahya ibn Muadh said a person attains contentment when he says to his Lord:",
    opts: [
      "Give me only ease",
      "If You give me, I accept; if You withhold from me, I am content; if You let me be, I worship You; if You call me, I respond",
      "I will be content only after the reward appears",
      "I have no need of worship",
    ],
    ans: 1,
    fb: "This is among the outcomes of rida: attaining servitude (ubudiyah) and gratitude (shukr).",
  },
  {
    t: "rida",
    q: "Whoever says Radeetu Billahi rabban… three times morning and evening:",
    opts: [
      "Has no further need of prayer",
      "It will be incumbent upon Allah to make him pleased on the Day of Resurrection",
      "Will never be tested",
      "Is excused from the Sunnah",
    ],
    ans: 1,
    fb: "Ahmad. Al-Arna’ut: sahih because of corroborating evidence. After the adhan, similar words bring forgiveness of sins (Muslim, from Sa‘d).",
  },
  {
    t: "tafakkur",
    q: "In Islamic terminology, tafakkur refers to:",
    opts: [
      "Imagining the unseen in detail",
      "Thinking over evidence and signs, and reflecting on the significance of things, in order to learn",
      "Giving up all religious duties to sit and think",
      "Reflecting on how the Essence of Allah is",
    ],
    ans: 1,
    fb: "Linguistically it is pondering, contemplating, thinking over something and re-examining it.",
  },
  {
    t: "tafakkur",
    q: "According to Ibn al-Qayyim رحمه الله, the thoughts of the wise focus on:",
    opts: [
      "Only worldly luxury",
      "Eight things: benefit and harm in the Hereafter, and benefit and harm in this world, and how to attain or avoid each",
      "The Essence of Allah",
      "Imagining Paradise’s details",
    ],
    ans: 1,
    fb: "The most beneficial type of reflection is that which leads to goodness or some benefit in this world or the Hereafter.",
  },
  {
    t: "tafakkur",
    q: "In Sahih Muslim, when the Prophet ﷺ got up at the end of the night he looked at the sky and recited:",
    opts: [
      "Yunus 10:24 only",
      "Aal Imran 3:190–191, then used the siwak, did wudu and prayed — then repeated that",
      "Only the last two surahs",
      "Nothing; he went back to sleep",
    ],
    ans: 1,
    fb: "An-Nawawi: it is mustahabb to recite these verses when waking at night and looking at the sky. Al-Awzai: recite them whilst understanding their meaning.",
  },
  {
    t: "tafakkur",
    q: "The Prophet ﷺ said: “Reflect upon the signs of Allah, and do not reflect on:”",
    opts: [
      "Creation",
      "Allah Himself ﷻ",
      "The Quran",
      "One’s own deeds",
    ],
    ans: 1,
    fb: "Ibn Umar رضي الله عنهما — al-Lalakai; hasan. Contemplating the meanings of the names and attributes, without inquiring into how they are, is required.",
  },
  {
    t: "tafakkur",
    q: "Which of these did the book list as al-ghayb that cannot be known by investigation?",
    opts: [
      "Rain, crops and ships",
      "The soul, jinn, angels, the grave (al-barzakh), Hell, Paradise, and the events of the Day of Resurrection",
      "Camels in the marketplace",
      "Modern created things unknown to earlier generations",
    ],
    ans: 1,
    fb: "{The soul is of the affair of my Lord. And mankind have not been given of knowledge except a little} [al-Isra 17:85].",
  },
  {
    t: "tafakkur",
    q: "Ibn al-Arabi said that a Sufi shaykh spending a day and night, or a month, reflecting without ceasing is:",
    opts: [
      "The Sunnah of the Prophet ﷺ",
      "Far from the right way; not appropriate for human beings and not in accordance with the Sunnah",
      "Better than all other worship",
      "Required of every Muslim",
    ],
    ans: 1,
    fb: "What is prohibited is giving up religious duties and spending one’s time on reflection in that way.",
  },
  {
    t: "tafakkur",
    q: "The Prophet ﷺ allowed visiting graves because they:",
    opts: [
      "Replace the five prayers",
      "Will remind you of the Hereafter",
      "Are a place to imagine the unseen in detail",
      "Make reflection on Allah’s Essence permissible",
    ],
    ans: 1,
    fb: "Ali ibn Abi Talib رضي الله عنه — Ahmad; classed as sahih by al-Albani.",
  },
  {
    t: "tafakkur",
    q: "When the lamp was lit again, Sufyan ath-Thawri رحمه الله was in tears because:",
    opts: [
      "He had lost wealth",
      "He thought about the grave",
      "The gathering had ended",
      "He had missed a meal",
    ],
    ans: 1,
    fb: "Ibrahim an-Nakhai رحمه الله said: Thinking is the essence of reason. Abu Dharr and Abu’d-Darda رضي الله عنهما spent much of their worship in reflection.",
  },
  {
    t: "tafakkur",
    q: "Al-Fudayl رحمه الله said reflection and contemplation is:",
    opts: [
      "A replacement for prayer",
      "A mirror that shows you your good deeds and your bad deeds",
      "Only for scholars",
      "Imagining the world of the jinn",
    ],
    ans: 1,
    fb: "Among the outcomes: evaluating your spiritual condition and striving to correct any shortcomings.",
  },
  {
    t: "tafakkur",
    q: "Sufyan ibn Uyaynah رحمه الله said: Reflection is the key to:",
    opts: [
      "Wealth",
      "Mercy — a person may reflect and it leads him to repent",
      "Leadership",
      "Knowing the unseen",
    ],
    ans: 1,
    fb: "He recited: If a man has the habit of reflection / Then he will learn something from everything.",
  },
  {
    t: "tafakkur",
    q: "Khalifa al-Abdi رحمه الله said believers continue to reflect on the creation of their Lord until they:",
    opts: [
      "Leave all work",
      "Attain certain faith in their Lord",
      "Need no Quran",
      "Know how His Essence is",
    ],
    ans: 1,
    fb: "Increased faith is the first outcome of reflection.",
  },
  {
    t: "tafakkur",
    q: "Ash-Shafi‘i رحمه الله said: Seek help to ensure the quality of what you say by:",
    opts: [
      "Speaking as quickly as possible",
      "Pausing and thinking before you speak",
      "Never speaking",
      "Repeating other people’s words only",
    ],
    ans: 1,
    fb: "A large part of the scholars’ writing and compiling of books was the result of contemplation and reflection.",
  },
  {
    t: "tafakkur",
    q: "Abu’d-Darda رضي الله عنه said that to reflect for an hour is better than:",
    opts: [
      "Giving charity",
      "Standing in prayer all night",
      "Fasting a year",
      "Reciting the entire Quran quickly",
    ],
    ans: 1,
    fb: "Reflection is one of the best types of worship. Ibn Abbas: two rakahs of moderate length with reflection is better than standing all night with the mind wandering.",
  },
  {
    t: "tafakkur",
    q: "Muhammad ibn Ka‘b al-Qurazi رحمه الله preferred repeating az-Zalzalah and al-Qari‘ah with reflection over:",
    opts: [
      "Two rakahs only",
      "Reciting the entire Quran quickly in one night, with no deliberation",
      "Seeking refuge before reciting",
      "Visiting graves",
    ],
    ans: 1,
    fb: "He would recite them at night until dawn breaks, and no more than that, repeating them and reflecting.",
  },
  {
    t: "tafakkur",
    q: "Ibn Katheer رحمه الله said we seek refuge with Allah before reciting so that the Shaytan will not:",
    opts: [
      "Record the recitation",
      "Make the reciter stumble, confuse him, and prevent him from pondering and reflecting",
      "Increase his reward",
      "Make him recite too slowly",
    ],
    ans: 1,
    fb: "Seeking refuge from Iblees before reading the Quran is a means of driving away the Shaytan who whispers and insinuates wrong notions into a person’s mind.",
  },
  {
    t: "tafakkur",
    q: "Al-Hasan رحمه الله explained “I will turn away from My signs those who are arrogant” as:",
    opts: [
      "They will be given more signs",
      "I shall prevent their hearts from reflecting upon My commands",
      "They will never see the world",
      "Reflection on Allah’s Essence becomes obligatory",
    ],
    ans: 1,
    fb: "Keeping away from sin is a means of ensuring that one’s reflection is sound. [al-A‘raf 7:146]",
  },
  {
    t: "muhasabah",
    q: "In linguistic terms, muhasabah refers to:",
    opts: [
      "Wishful thinking about Allah",
      "Counting and reckoning",
      "Leaving unclear matters",
      "Love of praise",
    ],
    ans: 1,
    fb: "In Islamic terminology it refers to thinking about one’s deeds, and striving to correct mistakes and to persist in doing righteous deeds.",
  },
  {
    t: "muhasabah",
    q: "Allah ﷻ says in Yusuf 12:53 that the nafs is:",
    opts: [
      "Always at rest",
      "A persistent enjoiner of evil, except those upon which my Lord has mercy",
      "Incapable of being restrained",
      "The same as the intellect",
    ],
    ans: 1,
    fb: "Hence the nafs poses a serious danger unless it is restrained with mindfulness and fear of Allah, and left no choice but to follow the truth.",
  },
  {
    t: "muhasabah",
    q: "As-Sa‘di رحمه الله said al-Hashr 59:18–19 clearly refers to:",
    opts: [
      "Reflection on creation only",
      "Taking stock of oneself (muhasabah)",
      "Showing off",
      "Contentment with the decree",
    ],
    ans: 1,
    fb: "If one sees a slip, he should give it up, repent sincerely, and avoid what led to it; if he is falling short in a command, he should strive and seek Allah’s help.",
  },
  {
    t: "muhasabah",
    q: "In the hadith of Shaddad ibn Aws رضي الله عنه, the smart one is the one who:",
    opts: [
      "Follows his whims and indulges in wishful thinking about Allah",
      "Takes stock of himself in this world before the Hereafter and strives for that which comes after death",
      "Never reviews his deeds",
      "Recites quickly with no deliberation",
    ],
    ans: 1,
    fb: "Narrated by Ahmad and by at-Tirmidhi, who classed it as sahih.",
  },
  {
    t: "muhasabah",
    q: "Al-Izz ibn Abd as-Salam رحمه الله said the scholars are unanimously agreed that muhasabah is:",
    opts: [
      "Recommended only for scholars",
      "Obligatory with regard to one’s past deeds, in addition to his future deeds",
      "Only after death",
      "Optional once a year",
    ],
    ans: 1,
    fb: "Taking stock of oneself is one of the deeds concerning which there is scholarly consensus.",
  },
  {
    t: "muhasabah",
    q: "The first type of muhasabah is:",
    opts: [
      "After death",
      "Before doing an action",
      "Only on the Day of Resurrection",
      "Only for sins already committed",
    ],
    ans: 1,
    fb: "Ask whether you are able, whether there is benefit or harm, and whether it is for Allah or for people; Al-Hasan: they would pause before charity and refrain if it was not for Allah.",
  },
  {
    t: "muhasabah",
    q: "Muhasabah after doing an action is of how many kinds?",
    opts: ["One", "Two", "Three", "Seven"],
    ans: 2,
    fb: "1. Acts of worship. 2. Sins and bad deeds committed. 3. Something it would have been better to refrain from, or something permissible.",
  },
  {
    t: "muhasabah",
    q: "After a sin, Allah ﷻ says that good deeds:",
    opts: [
      "Have no effect",
      "Do away with misdeeds [Hud 11:114]",
      "Increase the punishment",
      "Are only for the Messengers",
    ],
    ans: 1,
    fb: "Hasten to rectify the situation by repenting sincerely, praying for forgiveness, and doing good deeds that erase sins.",
  },
  {
    t: "muhasabah",
    q: "Ibn al-Qayyim رحمه الله said a person should take stock of himself first of all with regard to:",
    opts: [
      "Permissible extras",
      "Obligatory duties",
      "Other people’s faults",
      "Worldly profit only",
    ],
    ans: 1,
    fb: "Then forbidden things, then heedlessness, then words, walking, striking and hearing. Every movement is judged for whose sake it was done (sincerity) and how it was done (the Sunnah).",
  },
  {
    t: "muhasabah",
    q: "Umar ibn al-Khattab رضي الله عنه said: Take stock of yourselves before you are brought to account, for it will:",
    opts: [
      "Delay the Day of Resurrection",
      "Make your reckoning easier",
      "Replace prayer",
      "Remove the need for repentance",
    ],
    ans: 1,
    fb: "Weigh yourselves before you are weighed, and prepare yourselves for the great examination. Al-Hasan al-Basri: the reckoning is harder for those who acted without taking stock of themselves.",
  },
  {
    t: "muhasabah",
    q: "Al-Fudayl ibn Iyad رحمه الله said the hypocrite is:",
    opts: [
      "Always taking stock of himself",
      "Heedless about his actions",
      "The one who stands before Allah with certainty",
      "The one who examines himself before death",
    ],
    ans: 1,
    fb: "The believer takes stock of himself and knows that he will have to stand before Allah. May Allah have mercy on a person who examines himself before the angel of death comes down to him.",
  },
  {
    t: "muhasabah",
    q: "Abd al-Aziz ibn Abi Rawwad رحمه الله found after taking stock of his righteous deeds that:",
    opts: [
      "They were free of any share for the Shaytan",
      "The share of the Shaytan was greater than the share of Allah",
      "He had no shortcomings",
      "He should stop doing good",
    ],
    ans: 1,
    fb: "This is an outcome of muhasabah: finding out about one’s shortcomings and faults, and not being deceived by one’s good deeds.",
  },
  {
    t: "muhasabah",
    q: "Thinking about the questions of the Day of Resurrection guarantees that a person will, among other things:",
    opts: [
      "Give up all recommended deeds",
      "Take stock of himself, turn to Allah, do obligatory deeds, give up haram, do a lot of mustahabb deeds, and stay away from makruh or ambiguous matters",
      "Question only the disbelievers",
      "Stop remembering death",
    ],
    ans: 1,
    fb: "It is not only the disbelievers and hypocrites who will be questioned; the righteous and the Messengers will also be questioned. [al-Isra 17:36; at-Takathur 102:8; al-Ahzab 33:8; al-A‘raf 7:6]",
  },
  {
    t: "muhasabah",
    q: "Ma‘ruf al-Karkhi رحمه الله told a man who gossiped in his presence to remember:",
    opts: [
      "The two rakahs before Fajr",
      "The cotton [of the shroud] when they place it over your eyes",
      "Two hundred thousand dirhams",
      "The garden of Umar",
    ],
    ans: 1,
    fb: "Remembering death is one of the things that help you to take stock of yourself.",
  },
  {
    t: "muhasabah",
    q: "When Umar رضي الله عنه missed praying Asr in congregation, he gave in charity:",
    opts: [
      "A slave",
      "A piece of land the value of which was two hundred thousand dirhams",
      "Two slaves",
      "His entire night in prayer",
    ],
    ans: 1,
    fb: "Ibn Umar would spend the entire night in prayer if he missed a prayer in congregation. Umar ibn Abd al-Aziz manumitted two slaves after delaying Maghrib until two stars appeared.",
  },
  {
    t: "muhasabah",
    q: "Anas رضي الله عنه heard Umar رضي الله عنه, inside a garden, address himself as amir al-mu’mineen and say:",
    opts: [
      "You have no need to fear Allah",
      "Bah! Bah! By Allah, you should surely fear Allah or He will surely punish you!",
      "This garden is enough for you",
      "Leave muhasabah to the scholars",
    ],
    ans: 1,
    fb: "The righteous early generations took stock of themselves even in private, with a wall between them and others.",
  },
  {
    t: "tawakkul",
    q: "In linguistic terms, tawakkul means:",
    opts: [
      "Abandoning all measures",
      "Delegating something to someone else, and relying upon them to do it",
      "Relying on rulers for provision",
      "Wishful thinking about Allah",
    ],
    ans: 1,
    fb: "Az-Zubaydi: relying on that which is with Allah, and despairing of that which is in the hands of people. Ibn Uthaymeen: sincerely relying on Allah to bring benefits and ward off harm, whilst taking appropriate measures.",
  },
  {
    t: "tawakkul",
    q: "Ibn al-Qayyim رحمه الله said tawakkul is half of religion; the other half is:",
    opts: [
      "Patience (sabr)",
      "Turning to Him (inabah)",
      "Taking stock of oneself (muhasabah)",
      "Showing off (riya)",
    ],
    ans: 1,
    fb: "Religion is seeking the help of Allah and worshipping Him, so tawakkul is seeking His help and inabah is worshipping Him. It is an essential component of Tawhid al-uluhiyah: {It is You we worship and You we ask for help}.",
  },
  {
    t: "tawakkul",
    q: "Allah ﷻ says {And upon Allah rely, if you should be believers} [al-Ma’idah 5:23]. This shows that tawakkul is:",
    opts: [
      "Optional for the strong only",
      "A condition of faith",
      "The same as abandoning work",
      "Only for the Messengers",
    ],
    ans: 1,
    fb: "Whoever delegates his affairs to Allah and is content with what He decrees has relied on Him in the true sense. Whoever puts his hope in other than Him is bound to fail.",
  },
  {
    t: "tawakkul",
    q: "In the hadith of Ibn Mas‘ud رضي الله عنه, the one who suffers poverty and seeks relief from people:",
    opts: [
      "Will soon be made independent of means",
      "Will not be granted relief",
      "Has relied on Allah in the true sense",
      "Has taken a permissible measure only",
    ],
    ans: 1,
    fb: "But he who seeks relief from Allah Alone, Allah will soon make him independent of means. (Ahmad, Abu Dawud; at-Tirmidhi classed it as sahih)",
  },
  {
    t: "tawakkul",
    q: "Hasbuna Allahu wa ni‘am al-wakeel was said by Ibrahim عليه السلام when he was thrown into the fire, and by Muhammad ﷺ when:",
    opts: [
      "He tied his she-camel",
      "They said: The people have gathered against you, so fear them",
      "He left his house",
      "He sat waiting for provision",
    ],
    ans: 1,
    fb: "It only increased them in faith and they said: Hasbuna Allahu wa ni‘am al-wakeel. (Ibn Abbas رضي الله عنهما — al-Bukhari)",
  },
  {
    t: "tawakkul",
    q: "When a man asked whether to tie his she-camel or leave it free and rely on Allah, the Prophet ﷺ said:",
    opts: [
      "Leave it free and rely on Allah",
      "Tie it up and rely on Allah",
      "Do not take any measures",
      "Sit and wait for provision",
    ],
    ans: 1,
    fb: "Failing to take appropriate measures, on the grounds of tawakkul, is a corrupt notion, contrary to reason, and the way of lazy people. (Anas — at-Tirmidhi; al-Albani: hasan)",
  },
  {
    t: "tawakkul",
    q: "Imam Ahmad رحمه الله said of people who sat still claiming provision was incumbent upon Allah:",
    opts: [
      "This is complete tawakkul",
      "This is a corrupt notion",
      "This is major shirk",
      "This is inabah",
    ],
    ans: 1,
    fb: "He cited al-Jumu‘ah 62:9–11: when the prayer has been concluded, disperse within the land and seek from the bounty of Allah. Do what you are able, without exhausting yourself, with firm resolve and relying on Allah.",
  },
  {
    t: "tawakkul",
    q: "If a person has no possible means available, the greatest and strongest of means is:",
    opts: [
      "Relying on a governor",
      "Calling upon Allah in supplication and seeking His help",
      "Asking others to do ruqyah",
      "Sitting without doing anything further",
    ],
    ans: 1,
    fb: "Allah taught His slaves to take measures: {so walk among its slopes and eat of His provision} [al-Mulk 67:15].",
  },
  {
    t: "tawakkul",
    q: "Relying on the dead and false gods for victory, provision or intercession constitutes:",
    opts: [
      "A permissible measure",
      "Major shirk",
      "Minor shirk only",
      "Inabah",
    ],
    ans: 1,
    fb: "The first category: matters in which no one is able to help except Allah. The second category (relying on a governor or ruler for what Allah has given him power over) is minor shirk. The third (delegating to someone able to act) is a permissible measure, but the result is from Allah.",
  },
  {
    t: "tawakkul",
    q: "Relying on a governor or ruler for provision and warding off harm is:",
    opts: [
      "Major shirk",
      "A type of minor shirk",
      "Tawhid al-uluhiyah",
      "The same as tying the camel",
    ],
    ans: 1,
    fb: "This is relying on visible means with regard to that which Allah has given him power over.",
  },
  {
    t: "tawakkul",
    q: "The Prophet ﷺ said that if you truly relied upon Allah as you should, you would be granted provision as:",
    opts: [
      "The rulers are granted provision",
      "The birds are granted provision; they go out in the morning with empty stomachs and come back in the evening with full stomachs",
      "Those who sit and wait",
      "Those who use cautery",
    ],
    ans: 1,
    fb: "Ibn Rajab: this hadith is the guideline with regard to relying on Allah, one of the greatest means of attaining provision. [at-Talaq 65:2–3]",
  },
  {
    t: "tawakkul",
    q: "The seventy thousand who enter Paradise without being brought to account are those who:",
    opts: [
      "Asked others to do ruqyah, believed in omens, and used cautery",
      "Did not ask others to do ruqyah for them, or believe in omens, or use cautery, and on their Lord they relied",
      "Abandoned all work",
      "Relied on governors for provision",
    ],
    ans: 1,
    fb: "Hadith of Ibn Abbas رضي الله عنهما; Agreed upon. This is an outcome of tawakkul: admittance to Paradise without being brought to account.",
  },
  {
    t: "tawakkul",
    q: "When leaving the house, if a person says Bismillah, tawakkaltu ‘ala Allah, laa hawla wa laa quwwata illa Billah:",
    opts: [
      "Nothing special is said to him",
      "It will be said: You have been sufficed and protected, and the Shaytan will go far away from him",
      "He has committed minor shirk",
      "He no longer needs to take measures",
    ],
    ans: 1,
    fb: "Anas ibn Malik رضي الله عنه — at-Tirmidhi; classed as sahih by al-Albani. Protection against the Shaytan is an outcome of tawakkul. [al-Mujadilah 58:10]",
  },
  {
    t: "tawakkul",
    q: "Ibn al-Qayyim رحمه الله said that if a person relied on Allah in the true sense to remove a mountain from its place, and it was obligatory for him to move it:",
    opts: [
      "He should sit and wait",
      "He would be able to move it",
      "This would be a corrupt notion",
      "He should ask a ruler to move it",
    ],
    ans: 1,
    fb: "Outcomes of tawakkul include peace of mind, resolve, motivation, and independence of means. {But whoever relies upon Allah — then indeed, Allah is Exalted in Might and Wise} [al-Anfal 8:49].",
  },
  {
    t: "tawakkul",
    q: "One of the outcomes of tawakkul is the love of Allah, as He says:",
    opts: [
      "Indeed, Allah loves those who rely [upon Him] [Aal Imran 3:159]",
      "Walk among its slopes [al-Mulk 67:15]",
      "Leave trade [al-Jumu‘ah 62:9]",
      "Private conversation is only from Satan [al-Mujadilah 58:10]",
    ],
    ans: 0,
    fb: "Allah also says: {And when you have decided, then rely upon Allah. Indeed, Allah loves those who rely [upon Him]} [Aal Imran 3:159].",
  },
  {
    t: "tawakkul",
    q: "Yaqub عليه السلام, after advising his sons, delegated his affairs to Allah saying:",
    opts: [
      "Tie it up and rely on Allah",
      "The decision is only for Allah; upon Him I have relied, and upon Him let those who would rely [indeed] rely [Yusuf 12:67]",
      "We will sit here and our provision is incumbent upon Allah",
      "Look at the horizon",
    ],
    ans: 1,
    fb: "This is among the outcomes of tawakkul: being sufficed, supported against enemies, and protection of oneself, one’s wife and one’s children. [al-Anfal 8:64]",
  },
  {
    t: "tawakkul",
    q: "The Prophet ﷺ said that belief in bad omens is:",
    opts: [
      "A light sin only",
      "Shirk",
      "A recommended caution",
      "The same as taking measures",
    ],
    ans: 1,
    fb: "Narrated by Ahmad and Abu Dawud with a sahih isnad. Belief in bad omens and pessimism is contrary to tawakkul.",
  },
  {
    t: "tawakkul",
    q: "When an astrologer told Ali رضي الله عنه not to travel because the moon was in Scorpio, Ali:",
    opts: [
      "Stayed behind until the moon changed",
      "Travelled, putting his trust in Allah and relying on Him, and disbelieving in what the astrologer said; he defeated the Khawarij utterly",
      "Asked the astrologer to do ruqyah",
      "Hung an amulet on the army",
    ],
    ans: 1,
    fb: "Going to sorcerers, fortune-tellers, and astrologers to find out about the unseen and the future is contrary to tawakkul. (Ibn Taymiyyah and Ibn Qayyim al-Jawziyah)",
  },
  {
    t: "tawakkul",
    q: "The Prophet ﷺ said: Whoever wears [or hangs up] anything [for protection]:",
    opts: [
      "Will be protected by it",
      "Will be entrusted to it",
      "Has taken a recommended measure",
      "Has completed tawakkul",
    ],
    ans: 1,
    fb: "at-Tirmidhi and Ahmad; al-Albani: hasan because of corroborating evidence. If people do not rely on Allah, He will leave them to that to which they attached their hopes, and that is sufficient doom.",
  },
  {
    t: "tawakkul",
    q: "The Prophet ﷺ said that taking a bundle of firewood on one’s back is better than:",
    opts: [
      "Working with one’s own hands",
      "Asking of someone who may or may not give him something",
      "Seeking medical treatment",
      "Tying a she-camel",
    ],
    ans: 1,
    fb: "Agreed upon. Not taking appropriate measures, such as striving to seek provision, is contrary to tawakkul. The best food is that which one earns with one’s own hands; Dawud عليه السلام used to do so. (al-Bukhari)",
  },
  {
    t: "tawakkul",
    q: "The Prophet ﷺ enjoined: Seek medical treatment, O slaves of Allah. He also said that Allah has not sent down any disease but:",
    opts: [
      "It must be endured without any remedy",
      "He has also sent down a remedy for it",
      "Amulets are sufficient for it",
      "Astrologers can predict it",
    ],
    ans: 1,
    fb: "at-Tirmidhi (al-Albani: sahih) and al-Bukhari. Not seeking medical treatment is a form of not taking appropriate measures, which is contrary to tawakkul.",
  },
  {
    t: "tawakkul",
    q: "In the cave, the Prophet ﷺ said to Abu Bakr رضي الله عنه:",
    opts: [
      "Tie it up and rely on Allah",
      "What do you think, O Abu Bakr, of two, of whom Allah is the third?",
      "Belief in bad omens is shirk",
      "Seek medical treatment",
    ],
    ans: 1,
    fb: "Agreed upon. Abu Bakr had feared that if one of them looked down at his feet, he would see them. The woman who beseeched her Lord for her lost goat and spindle found them the next morning, and another like each. (Ahmad; al-Albani: sahih)",
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

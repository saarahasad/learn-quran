/**
 * Hadith 2 — selected Prophetic narrations.
 * Hadiths 1 to 8 are written in full. Later narrations keep their opening words
 * until their notes are added.
 */

export const HADITH2_META = {
  id: "hadith-2",
  name: "Hadith 2",
  nameAr: "الحديث ٢",
  tagline: "Short narrations, rich in meaning.",
  description:
    "In this semester, we will study selected Prophetic narrations (Hadiths), starting with the Hadith: “He who becomes an enemy of one of My allies; the five daily prayers; this worldly life is green and sweet; be in this life like a stranger; he whom Allah wills goodness for; shun that which you have doubts about” etc., as well as other narrations which are short in wording but rich in meaning and which comprise of great Islamic meanings. Allah is the Granter of success.",
  path: "/hadith-2",
  category: "Hadith",
  meta: "47 lessons · Notes, flashcards & quiz",
  accent: "teal",
  topics: ["Awliya of Allah", "Moderation & the Sunnah", "Holding the ember", "Obligations and Paradise", "Expiation of sins", "Marriage and chastity", "This world and fitnah"],
  units: 10,
};

const comingSoon = (title, opening) => [
  {
    type: "comingSoon",
    title,
    body: `Notes for this narration will be added here. Opening words: ${opening}`,
  },
];

const UPCOMING = [
  { n: 9, id: "h9", title: "Be in this world as a stranger", opening: "«Be in this world as if you are a stranger…»" },
  { n: 10, id: "h10", title: "Paradise is surrounded with hardships", opening: "«Paradise is surrounded with hardships»" },
  { n: 11, id: "h11", title: "He has succeeded who becomes Muslim", opening: "«He has succeeded who becomes Muslim …»" },
  { n: 12, id: "h12", title: "When Allah wills good for someone", opening: "«When Allah wills good for someone …»" },
  { n: 13, id: "h13", title: "Allah will speak to him", opening: "«There is no one among you but Allah will speak to him…»" },
  { n: 14, id: "h14", title: "In every tasbeehah there is", opening: "«…In every tasbeehah (saying SubhanAllah) there is…»" },
  { n: 15, id: "h15", title: "Purification is half of faith", opening: "«Purification is half of faith»" },
  { n: 16, id: "h16", title: "Charity for every joint", opening: "«For every joint of a person, charity must be given …»" },
  { n: 17, id: "h17", title: "Leave that which makes you doubt", opening: "«Leave that which makes you doubt…»" },
  { n: 18, id: "h18", title: "Whoever would like his provision expanded", opening: "«Whoever would like his provision to be expanded…»" },
  { n: 19, id: "h19", title: "Whoever removes a hardship from a believer", opening: "«Whoever removes a worldly hardship [kurbah] from a believer…»" },
  { n: 20, id: "h20", title: "Show little interest in worldly gain", opening: "«Show little interest in worldly gain and Allah will love you…»" },
  { n: 21, id: "h21", title: "When a person dies, except three", opening: "«When a person dies, his deeds come to an end except three…»" },
];

export const HADITH2_UNITS = [
  {
    id: "opening",
    title: "This semester",
    titleAr: "هذا الفصل",
    lessons: [
      {
        id: "semester",
        title: "Opening & contents",
        icon: "✦",
        sections: [
          {
            type: "heading",
            kicker: "Hadith 2",
            title: "Selected Prophetic narrations",
          },
          {
            type: "intro",
            text: "In this semester, we will study selected Prophetic narrations (Hadiths), starting with the Hadith: “He who becomes an enemy of one of My allies; the five daily prayers; this worldly life is green and sweet; be in this life like a stranger; he whom Allah wills goodness for; shun that which you have doubts about” etc., as well as other narrations which are short in wording but rich in meaning and which comprise of great Islamic meanings. Allah is the Granter of success.",
          },
          {
            type: "heading",
            title: "Named in the opening",
          },
          {
            type: "cards",
            items: [
              { title: "Hadith 1", body: "He who becomes an enemy of one of My allies." },
              { title: "Hadith 6", body: "The five daily prayers." },
              { title: "Hadith 8", body: "This worldly life is green and sweet." },
              { title: "Hadith 9", body: "Be in this life like a stranger." },
              { title: "Hadith 12", body: "He whom Allah wills goodness for." },
              { title: "Hadith 17", body: "Shun that which you have doubts about." },
            ],
          },
          {
            type: "heading",
            title: "Contents",
          },
          {
            type: "contents",
            items: [
              { n: 1, text: "Whoever shows enmity to a close friend of Mine…" },
              { n: 2, text: "Indeed, by Allah, I am the one among you…" },
              { n: 3, text: "The likeness of me and you…" },
              { n: 4, text: "There will come a time when …" },
              { n: 5, text: "By Allah, I shall not do anything more than that." },
              { n: 6, text: "The five daily prayers…" },
              { n: 7, text: "O young men, whoever among you is able to, let him get married…" },
              { n: 8, text: "This world is sweet and green …" },
              ...UPCOMING.map((item) => ({ n: item.n, text: item.opening.replace(/^«|»$/g, "") })),
            ],
          },
        ],
      },
    ],
  },
  {
    id: "hadith-1",
    title: "Hadith 1 — A close friend of Mine",
    titleAr: "الحديث ١",
    lessons: [
      {
        id: "h1-text",
        title: "The narration",
        icon: "1",
        sections: [
          {
            type: "heading",
            kicker: "Hadith qudsi · al-Bukhari",
            title: "Whoever shows enmity to a close friend of Mine",
          },
          {
            type: "flow",
            title: "Read it as one path",
            items: [
              { title: "Enmity", body: "Whoever takes a wali as an enemy, Allah declares war on him." },
              { title: "Obligations", body: "Nothing is more beloved than the duties Allah has enjoined." },
              { title: "Nawafil", body: "He keeps drawing near until Allah loves him." },
              { title: "Faculties", body: "Hearing, sight, hand and foot are guided for Allah." },
              { title: "Du‘a", body: "If he asks, Allah gives. If he seeks refuge, Allah grants it." },
              { title: "The soul", body: "Allah hesitates to take the believer’s soul, out of mercy." },
            ],
          },
          {
            type: "matn",
            kicker: "The wording",
            source: "Narrated by al-Bukhari",
            text: "It was narrated that Abu Hurayrah رضي الله عنه said: The Messenger of Allah ﷺ said: «Allah ﷻ said: ‘Whoever shows enmity to a close friend of Mine, I shall declare war on him. My slave does not draw close to Me by doing anything more beloved to Me than the religious duties I have enjoined upon him, and My slave continues to draw close to Me by doing supererogatory deeds until I love him. When I love him, I will be his hearing with which he hears, his sight with which he sees, his hand with which he strikes and his foot with which he walks. If he were to ask Me for something, I would surely give it to him, and if he were to ask Me for refuge, I would surely grant him it. I do not hesitate about anything that I do as much as I hesitate about taking the soul of the believer; he hates death and I hate to hurt him.’»",
          },
          {
            type: "narrator",
            title: "The narrator of the hadith",
            name: "Abu Hurayrah, Abd ar-Rahman ibn Sakhr ad-Dawsi",
            body: "The narrator of Islam. He stayed close to the Prophet ﷺ and narrated more than five thousand hadiths from him. Umar appointed him as governor of al-Bahrain, then dismissed him, and he was governor of Madinah for a few years during the Umayyad caliphate. He died in 59 AH.",
          },
        ],
      },
      {
        id: "h1-phrases",
        title: "Explanation of phrases",
        icon: "2",
        sections: [
          {
            type: "heading",
            kicker: "Word by word",
            title: "Explanation of phrases",
          },
          {
            type: "phrases",
            items: [
              {
                quote: "Whoever shows enmity to a close friend of Mine",
                body: "That is, takes him as an enemy.",
              },
              {
                quote: "I shall declare war on him",
                body: "That is, I will notify him of imminent doom and punishment.",
              },
              {
                quote: "…than the religious duties I have enjoined upon him",
                body: "That is, individual obligations and communal obligations. That which is obligatory is dearer to Allah than that which is supererogatory (nafilah).",
              },
              {
                quote: "and My slave continues to draw close to Me by doing supererogatory deeds until I love him.",
                body: "This refers to actions that are done continuously; in other words, the person persists in drawing closer to Allah ﷻ by doing supererogatory deeds, until Allah ﷻ loves him.",
              },
            ],
          },
          {
            type: "heading",
            title: "«I will be his hearing with which he hears»",
          },
          {
            type: "intro",
            text: "This may be interpreted in two ways:",
          },
          {
            type: "views",
            items: [
              {
                n: 1,
                tone: "rose",
                body: "If the person is a close friend (wali) of Allah ﷻ, Allah will protect his hearing, so that he listens only to that which is pleasing to Allah ﷻ. Something similar may be said with regard to his sight, his hand and his foot.",
              },
              {
                n: 2,
                tone: "plum",
                body: "Allah will guide him in the way in which he uses his hearing, his sight, his hand and his foot. This is more likely to be correct.",
              },
            ],
          },
          {
            type: "phrases",
            items: [
              {
                quote: "if he were to ask Me for refuge",
                body: "That is, if he were to seek protection with Me from what he fears.",
              },
              {
                quote: "I do not hesitate…",
                body: "Shaykh Ibn Uthaymeen رحمه الله said: Ascribing hesitation to Allah ﷻ without qualification is not permissible, because Allah ﷻ mentioned hesitation in this context specifically in connection with this issue: “I do not hesitate about anything that I do…” This hesitation is not because there is any doubt with regard to what is in the person’s best interests, or because there is any doubt about His ability to do that thing; rather it is out of mercy towards this believing slave.",
              },
              {
                quote: "to hurt him",
                body: "By doing to him that which he dislikes.",
              },
            ],
          },
          {
            type: "brief",
            title: "Brief explanation of the hadith",
            body: "In this hadith there is a stern warning to the one who takes as an enemy one of the close friends (awliya) of Allah ﷻ. It also tells us that the most beloved of worship to Allah is fulfilment of obligatory duties, and that if someone draws close to Allah by doing supererogatory deeds, He will love him, support him, protect him, answer his supplications, and raise him from the level of eeman (faith) to the level of ihsan. Therefore he will not say anything that displeases Allah, and he will not use his physical faculties in acts of disobedience to Allah.",
          },
        ],
      },
      {
        id: "h1-wali",
        title: "Who is a wali of Allah",
        icon: "3",
        sections: [
          {
            type: "heading",
            kicker: "What we learn",
            title: "Who is the close friend of Allah?",
          },
          {
            type: "note",
            tone: "benefit",
            title: "Awliya are affirmed",
            body: "This hadith affirms that Allah ﷻ has close friends (awliya), and that cannot be denied, because it is affirmed in the Quran and Sunnah. But what really matters here is knowing to whom this title applies. In other words: who is the wali or close friend of Allah?",
          },
          {
            type: "ayah",
            text: "{Unquestionably, [for] the allies [awliya’] of Allah there will be no fear concerning them, nor will they grieve, Those who believed and were fearing Allah}",
            ref: "Yunus 10:62–63",
          },
          {
            type: "definition",
            label: "Shaykh al-Islam Ibn Taymiyyah رحمه الله",
            body: "Whoever is a believer who is mindful of Allah, is a close friend (wali) of Allah.",
          },
          {
            type: "note",
            tone: "warning",
            title: "Wilayah is obedience, not extraordinary feats",
            body: "It is not a condition of being a wali that one should walk on water or fly in the air; rather one should adhere to the laws of Allah. Whoever obeys Allah and adheres to the Sunnah of His Prophet is a close friend of Allah. These are the true awliya of Allah. Whoever is believed to be a wali, his deeds should be measured against the Quran and Sunnah. If they are in accordance with them, then this claim may be accepted, otherwise it is to be rejected.",
          },
          {
            type: "points",
            items: [
              {
                n: 1,
                title: "The wilayah of Allah ﷻ is of two types: general and specific.",
                parts: [
                  {
                    label: "In general terms",
                    body: "His wilayah means that He is the wali of all people, as He controls their affairs and takes care of them. This is general and applies to everyone, both believers and disbelievers, righteous and evildoers.",
                    quote: "{until, when death comes to one of you, Our messengers take him, and they do not fail [in their duties]. Then they [His servants] are returned to Allah, their true Lord [Mawlahum al-haqq]}",
                    ref: "al-An‘am 6:61–62",
                  },
                  {
                    label: "In specific terms",
                    body: "It is His wilayah for the pious.",
                    quotes: [
                      {
                        text: "{Allah is the ally [wali] of those who believe. He brings them out from darknesses into the light}",
                        ref: "al-Baqarah 2:257",
                      },
                      {
                        text: "{Unquestionably, [for] the allies [awliya’] of Allah there will be no fear concerning them, nor will they grieve, Those who believed and were fearing Allah}",
                        ref: "Yunus 10:62–63",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: "ask",
            question:
              "If it is proven that a specific person is a close friend [wali] of Allah, does that mean that he can be an intermediary between you and Allah in praying for you and meeting your needs?",
            answer:
              "No, because there is no intermediary between Allah ﷻ and His slaves. Those who are ignorant and deluded say: These are the close friends [awliya] of Allah, and they are intermediaries between us and Allah ﷻ. Thus they beseech Allah by virtue of them at first, then after that they call upon them instead of Allah.",
          },
        ],
      },
      {
        id: "h1-lessons",
        title: "What we learn",
        icon: "4",
        sections: [
          {
            type: "heading",
            kicker: "Hadith 1",
            title: "What we learn from the hadith",
          },
          {
            type: "points",
            items: [
              {
                n: 2,
                title: "The high status of the awliya before Allah ﷻ",
                body: "Taking the close friends of Allah as enemies is a major sin, because the one who takes them as enemies is subject to a declaration of war from Allah ﷻ. This is a specific punishment for a specific action, so this action is a major sin.",
              },
              {
                n: 3,
                title: "Affirmation that Allah ﷻ may declare war",
                body: "Because He says [in the hadith qudsi]: «I shall declare war on him.» Allah ﷻ also says that with regard to riba (usury):",
                quotes: [
                  {
                    text: "{And if you do not, then be informed of a war [against you] from Allah and His Messenger}",
                    ref: "al-Baqarah 2:279",
                  },
                ],
              },
              {
                n: 4,
                title: "Affirmation of the love of Allah ﷻ, and that His love may vary",
                body: "Because He says: «My slave does not draw close to Me by doing anything more beloved to Me than the religious duties I have enjoined upon him.»",
              },
              {
                n: 5,
                title: "Righteous deeds bring one closer to Allah ﷻ",
                body: "A person may feel that himself. When he worships Allah in a perfect manner, with sincerity, following the Sunnah and with presence of mind, he feels that he has drawn closer to Allah ﷻ.",
                follow:
                  "No one attains that except those who are helped and guided. Otherwise, how many people are there who pray, give charity and fast? But many of them do not feel close to Allah. The sense of being close to Allah will undoubtedly have an impact on a person’s conduct and attitude.",
              },
              {
                n: 6,
                title: "Deeds vary in category and in type",
                body: "With regard to category, obligatory deeds are dearer to Allah than supererogatory deeds. With regard to type, prayer is dearer to Allah than other obligatory actions.",
                follow:
                  "Hence Ibn Mas‘ud رضي الله عنه asked the Messenger of Allah ﷺ: Which deeds is dearest to Allah? He said: «Prayer offered on time.» Narrated by al-Bukhari and Muslim. In fact, within one category, deeds may vary from one individual to another. How often do two men offer the same prayer, yet the difference in their status before Allah is like the distance between the east and the west!",
              },
              {
                n: 7,
                title: "A great deal of supererogatory deeds",
                body: "The hadith encourages us to do a great deal of supererogatory deeds, because Allah ﷻ says in the hadith qudsi: «and My slave continues to draw close to Me by doing supererogatory deeds until I love him.»",
              },
              {
                n: 8,
                title: "Nawafil are a means of attaining Allah’s love",
                body: "Doing a great deal of supererogatory deeds is a means of attaining Allah’s love, because the word «until» refers to the goal. So if you have done a great deal of supererogatory deeds, then be of good cheer, for you have attained the love of Allah.",
              },
              {
                n: 9,
                title: "Only deeds done as Islam teaches",
                body: "This reward is only for deeds that are done in accordance with Islamic teachings. Not every prayer deters a person from shameful and evil deeds, and not every supererogatory deed brings one closer to Allah ﷻ. It is essential to do acts of worship properly and perfectly, so that one may attain the reward that results from those deeds in this world and the Hereafter.",
              },
              {
                n: 10,
                title: "When Allah loves a person, He guides his faculties",
                body: "When Allah ﷻ loves a person, He guides him in how he uses his hearing, his sight, his hand and his foot – that is, in all his faculties – so that he does not listen to anything except that which pleases Allah ﷻ, and when he listens to something he benefits from it. Similarly, he does not let his eyes gaze upon anything except that which pleases Allah, and when he looks at something he benefits from it. Similarly, with regard to his hand, he only strikes with his hand in ways that are pleasing to Allah, and when he strikes in ways that are pleasing to Allah he benefits. And something similar may be said with regard to his foot.",
              },
              {
                n: 11,
                title: "When Allah loves someone, He answers him and protects him",
                body: "When Allah ﷻ loves someone, He answers his prayers and grants him what he asked for, and he protects him from what he fears. Thus he will attain what he seeks and he will be protected from what he fears.",
                follow:
                  "Attaining what he seeks is mentioned in the phrase «If he were to ask Me for something, I would surely give it to him»; and protection from what he fears is mentioned in the phrase: «and if he were to ask me for refuge, I would surely grant him it.» That is, unless he asks for something that involves sin or severing ties of kinship, or wronging someone else. In that case, Allah does not answer his prayers, even if he does a great deal of supererogatory deeds, because Allah ﷻ is so just that He will not answer such a supplication. The texts explain one another.",
              },
            ],
          },
        ],
      },
      {
        id: "h1-activities",
        title: "Activities",
        icon: "5",
        sections: [
          {
            type: "heading",
            kicker: "Write it in your own words",
            title: "Activities",
          },
          {
            type: "activities",
            items: [
              "Why does Allah ﷻ declare war specifically on those who show enmity towards the close friends [awliya] of Allah and those who consume riba?",
              "In the light of the proper understanding of the divine names and attributes, explain what the following sentence means: «When I love him, I will be his hearing with which he hears, his sight with which he sees, his hand with which he strikes and his foot with which he walks.»",
              "Based on your understanding of the hadith, answer the following question: A man spent the night praying qiyaam, then he fell asleep and missed Fajr prayer. What is the ruling on that?",
              "Explain this issue: the hesitation of Allah ﷻ in taking the soul of His righteous slave.",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "hadith-2",
    title: "Hadith 2 — Whoever turns away from my Sunnah",
    titleAr: "الحديث ٢",
    lessons: [
      {
        id: "h2-text",
        title: "The narration",
        icon: "1",
        sections: [
          {
            type: "heading",
            kicker: "Agreed upon",
            title: "Indeed, by Allah, I am the one among you who fears Allah the most",
          },
          {
            type: "flow",
            title: "Read it as one path",
            items: [
              { title: "Three vows", body: "Night prayer forever, fasting every day, and never marrying." },
              { title: "Why they said it", body: "They thought his worship was little, because his past and future sins are forgiven." },
              { title: "His balance", body: "I fast and I do not fast. I pray and I sleep. I marry women." },
              { title: "The warning", body: "Whoever turns away from my Sunnah is not of me." },
            ],
          },
          {
            type: "matn",
            kicker: "The wording",
            source: "Agreed upon",
            text: "It was narrated that Anas ibn Malik رضي الله عنه said: Three men (raht) came to the apartments of the wives of the Prophet ﷺ to ask about the worship of the Prophet ﷺ. When they were told about it, it was as if they thought it was little. Hence they said: How can we compare ourselves to the Prophet ﷺ, for he has been forgiven his past and future sins? One of them said: As for me, I shall pray qiyam al-layl forever. Another one said: I shall fast every day of my life and never not fast. The third one said: I shall keep away from women and never get married. The Messenger of Allah ﷺ came to them and said: «Are you the ones who said such and such? Indeed, by Allah, I am the one among you who fears Allah the most and is most mindful of Him, but I fast and I do not fast; I pray and I sleep; and I marry women. Whoever turns away from my Sunnah is not of me.»",
          },
          {
            type: "narrator",
            title: "The narrator of the hadith",
            name: "Anas ibn Malik ibn an-Nadr al-Ansari",
            body: "The servant of the Messenger of Allah ﷺ. He served him until he passed away, then he travelled to Damascus, and thence to Basrah, and he died in that city. He was the last of the Sahabah رضي الله عنهم to die in Basrah, in 93 AH.",
          },
        ],
      },
      {
        id: "h2-phrases",
        title: "Explanation of phrases",
        icon: "2",
        sections: [
          {
            type: "heading",
            kicker: "Word by word",
            title: "Explanation of phrases",
          },
          {
            type: "phrases",
            items: [
              {
                quote: "His… sins",
                body: "This refers to the sins of the Prophet ﷺ. The majority of scholars affirm that the prophets عليهم السلام may commit minor sins, but Allah does not allow them to persist in that, and they never delayed repentance from them, as was affirmed by Shaykh al-Islam Ibn Taymiyyah رحمه الله.",
              },
              {
                quote: "forever",
                body: "Means always, without ceasing.",
              },
              {
                quote: "every day of my life",
                body: "Means fasting continuously, day after day.",
              },
              {
                quote: "turns away from my Sunnah",
                body: "Means: drifts away from my path.",
              },
              {
                quote: "Is not of me",
                body: "Means: he is not a Muslim if he drifts away from it because he dislikes it, or because he does not believe in it. If it is otherwise, then he is going against my easy, straightforward path in which there is no strictness or hardship.",
              },
            ],
          },
          {
            type: "brief",
            title: "Brief explanation of the hadith",
            body: "In this hadith, the Prophet ﷺ explains that the Muslim should be moderate in doing acts of worship, by adopting a middle path between either going to extremes or being heedless. That is what is required of him in all his affairs. Similarly, acts of worship should be done in moderation, and moderation in worship is part of the Sunnah of the Prophet ﷺ.",
          },
          {
            type: "ayah",
            text: "{And [they are] those who, when they spend, do so not excessively or sparingly but are ever, between that, [justly] moderate}",
            ref: "al-Furqan 25:67",
          },
          {
            type: "phrases",
            items: [
              {
                quote: "The most beloved of deeds to Allah is that which is done consistently, even if it is little.",
                body: "Agreed upon. The Prophet ﷺ cited this as the Sunnah of moderation in worship.",
              },
            ],
          },
          {
            type: "note",
            tone: "warning",
            title: "He criticised their vows",
            body: "The Prophet ﷺ criticized these people for going against Islamic teachings in the actions that they mentioned, and he explained to them that the best of guidance was his, for he was the most knowledgeable among the people of what Allah ﷻ wants in worship, and whoever turns away from his guidance and his Sunnah is not of him ﷺ.",
          },
        ],
      },
      {
        id: "h2-lessons",
        title: "What we learn",
        icon: "3",
        sections: [
          {
            type: "heading",
            kicker: "Hadith 2",
            title: "What we learn from the hadith",
          },
          {
            type: "points",
            items: [
              {
                n: 1,
                title: "Be moderate in worship, and in all affairs",
                body: "The individual should be moderate in worship, and indeed in all his affairs, because if he falls short he will miss out on much good, but if he is too strict he will get tired and not be able to continue, and will give up striving.",
              },
              {
                n: 2,
                title: "A refutation of refusing what is permissible",
                body: "This is a refutation of those who refrain from availing themselves of that which is permissible and allowed of good food and comfortable clothing, and prefer instead coarse food and rough clothing of wool and the like.",
                quotes: [
                  {
                    text: "{Say, “Who has forbidden the adornment of Allah which He has produced for His servants and the good [lawful] things of provision?”}",
                    ref: "al-A‘raf 7:32",
                  },
                ],
                follow:
                  "The best is to adopt a moderate approach, and not go to extremes in pursuing fine things, for that leads to living a life of luxury and becoming conceited, just as refusing to have fine things sometimes may lead to extremism, which is overburdening oneself in a way that makes one drift away from the Sunnah.",
              },
              {
                n: 3,
                title: "Falling short is blameworthy, and so is doing more than is required",
                body: "Falling short in matters of religious commitment and worship, and not doing them in accordance with the Sunnah of the Prophet ﷺ is blameworthy, as is doing more than is required.",
                follow:
                  "When this group wanted to go further in matters of worship and do things that the Prophet ﷺ did not do, he forbade them to do that. If the one who wanted to do more in acts of worship that are prescribed in Islamic teachings was told not to do that, then how about people who introduce innovations into the religion of Allah for which there is no basis in the Quran or in the Sunnah? That includes matters such as inventing awraad (sing. wird, meaning litany) and phrases sending blessings upon the Prophet ﷺ, and observing celebrations that are not part of the Prophet’s teachings. The Prophet ﷺ said: «Whoever introduces into this matter of ours that which is not part of it, it will be rejected.» Agreed upon. From that stems another point, which is that what matters is not doing a great amount of worship and going to extremes in that; rather what matters is following the Sunnah of the Prophet ﷺ without being heedless or going to extremes, or doing more or less than is prescribed in the Sunnah. For the Prophet’s Sunnah is based on balance and moderation, and not adhering to the Sunnah and not committing oneself to the way it is done may lead to misguidance and innovation.",
              },
            ],
          },
          {
            type: "note",
            tone: "warning",
            title: "Going to extremes in religion",
            body: "The Prophet ﷺ said: «Beware of going to extremes in religion, for those who came before you were only doomed because of going to extremes in religion.» Narrated by Ahmad; classed as sahih by al-Albani.",
          },
          {
            type: "pair",
            items: [
              {
                tone: "paper",
                title: "Those who go to extremes are doomed",
                body: "It was narrated that Abdullah ibn Mas‘ud رضي الله عنه said: The Messenger of Allah ﷺ said: «Those who go to extremes are doomed.» He said it three times. Narrated by Muslim. An-Nawawi said: This refers to those who are too strict when it is not appropriate to be strict.",
              },
              {
                tone: "red",
                title: "Adhering to the Sunnah",
                body: "The Prophet’s Sunnah is the ship of salvation and the land of safety. Az-Zuhri said: The earlier scholars used to say: Holding fast to the Sunnah is the means of salvation. Malik said: The Sunnah is the ship of Nuh; whoever boards it will be saved and whoever stays behind will be drowned.",
              },
            ],
          },
        ],
      },
      {
        id: "h2-activities",
        title: "Activities",
        icon: "4",
        sections: [
          {
            type: "heading",
            kicker: "Write it in your own words",
            title: "Activities",
          },
          {
            type: "activities",
            items: [
              "Moderation: does it mean not taking religion seriously and following odd and weak views? Write about that.",
              "The scholars have discussed the phrase «he is not of me.» Write a brief essay about that.",
              "What is meant by going to extremes in religion? When may someone be described as such?",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "hadith-3",
    title: "Hadith 3 — The likeness of me and you",
    titleAr: "الحديث ٣",
    lessons: [
      {
        id: "h3-text",
        title: "The narration",
        icon: "1",
        sections: [
          {
            type: "heading",
            kicker: "Narrated by Muslim",
            title: "The likeness of me and you is that of a man who lit a fire",
          },
          {
            type: "flow",
            title: "Read it as one path",
            items: [
              { title: "The fire", body: "A man lights a fire, and grasshoppers and moths fall into it." },
              { title: "He pushes them away", body: "He tries to keep them from the flames." },
              { title: "The Prophet ﷺ", body: "He seizes their waistbands to pull them back from the Fire." },
              { title: "They pull away", body: "They try to get away from him and fall in." },
            ],
          },
          {
            type: "matn",
            kicker: "The wording",
            source: "Narrated by Muslim",
            text: "It was narrated that Jabir رضي الله عنه said: The Messenger of Allah ﷺ said: «The likeness of me and you is that of a man who lit a fire and grasshoppers and moths started falling into it, and he tries to push them away. I am seizing your waistbands and trying to pull you away from the Fire but you are trying to get away from me.»",
          },
          {
            type: "narrator",
            title: "The narrator of the hadith",
            name: "Jabir ibn Abdillah ibn Amr ibn Haram",
            body: "He went on nineteen campaigns with the Prophet ﷺ, and he is one of those who narrated many reports from him. Towards the end of his life, he had a halaqah (study circle) in the Prophet’s Mosque. He lost his sight before he passed away in Madinah, رضي الله عنه.",
          },
        ],
      },
      {
        id: "h3-phrases",
        title: "Explanation of phrases",
        icon: "2",
        sections: [
          {
            type: "heading",
            kicker: "Word by word",
            title: "Explanation of phrases",
          },
          {
            type: "phrases",
            items: [
              {
                quote: "grasshoppers",
                body: "The word translated here as grasshoppers refers to a type of locust.",
              },
              {
                quote: "seizing",
                body: "Means holding firmly on to.",
              },
              {
                quote: "waistbands",
                body: "The word translated here as waistbands refers to the place where a waist-wrapper (izar) or trousers are secured. It is a metaphor for the Prophet’s keenness to prevent his ummah from committing sins that could lead to them entering the Fire.",
              },
              {
                quote: "you are trying to get away",
                body: "The word translated as trying to get away refers to when someone tries to escape and flee.",
              },
            ],
          },
          {
            type: "brief",
            title: "Brief explanation of the hadith",
            body: "In this hadith, the Prophet ﷺ wanted to explain, by giving this likeness, his situation with his ummah, and that he was like a man in the wilderness who lit a fire, then grasshoppers and moths started to fall into it, because that is what moths, grasshoppers and small insects usually do. If someone lights a fire in the wilderness, these insects are attracted towards that light, and the man tries to prevent them from falling into it, but they insist on falling into it. This is how the Prophet ﷺ is with his ummah: he is keen to prevent his ummah from following whims and desires and falling into sin and forbidden matters, but they try to free themselves from him and fall into that.",
          },
        ],
      },
      {
        id: "h3-lessons",
        title: "What we learn",
        icon: "3",
        sections: [
          {
            type: "heading",
            kicker: "Hadith 3",
            title: "What we learn from the hadith",
          },
          {
            type: "points",
            items: [
              {
                n: 1,
                title: "A likeness to make the warning easy to grasp",
                body: "The Prophet ﷺ gave a likeness to his ummah in order to alert them to be extra cautious, lest they fall into what Allah has forbidden and commit sin. He compared himself and the Muslims to something that they saw and experienced in real life, so as to make it easy for them to grasp and so that it would be a more effective reminder. He likened following whims and desires that lead to Hell to the way in which moths fall into the fire, because moths always come closer to the light of the fire until they fall into it. Similarly, the one who follows whims and desires will end up in punishment. And he likened the ignorance of the one who follows whims and desires to the ignorance of the moth, because the moth does not think that the fire will burn it until it falls into it.",
              },
              {
                n: 2,
                title: "How much he cared for his ummah",
                body: "This hadith highlights how much the Prophet ﷺ cared about his ummah, and that he did not spare any effort to try to stop them and push them back from anything that could harm them in both their religious and worldly affairs.",
              },
              {
                n: 3,
                title: "Man is more in need of warnings than glad tidings",
                body: "The hadith indicates that man is more in need of warnings than glad tidings. Hence Allah ﷻ mentions only warnings in the verse in which He says:",
                quotes: [
                  {
                    text: "{Blessed is He who sent down the Criterion upon His Servant that he may be to the worlds a warner}",
                    ref: "al-Furqan 25:1",
                  },
                  {
                    text: "{No! But you love the immediate, And leave the Hereafter}",
                    ref: "al-Qiyamah 75:20–21",
                  },
                ],
                follow:
                  "That is because human nature has a greater inclination towards immediate gratification than to that which comes later. That is why it is essential to remove that inclination from your heart, so that you will be able to seek that which will bring you closer to Allah ﷻ. Hence it is said: Adornment comes after cleansing oneself.",
              },
              {
                n: 4,
                title: "His kindness and compassion",
                body: "This hadith highlights the Prophet’s kindness and compassion towards the ummah, and his keenness that they should be saved, as Allah ﷻ says:",
                quotes: [
                  {
                    text: "{There has certainly come to you a Messenger from among yourselves. Grievous to him is what you suffer; [he is] concerned over you and to the believers is kind and merciful}",
                    ref: "at-Tawbah 9:128",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "h3-activities",
        title: "Activities",
        icon: "4",
        sections: [
          {
            type: "heading",
            kicker: "Write it in your own words",
            title: "Activities",
          },
          {
            type: "activities",
            items: [
              "Write an essay explaining how the Prophet ﷺ showed kindness to his ummah.",
              "Speak about following the Prophet ﷺ in all religious obligations.",
              "Allah sent the Prophet ﷺ as a bringer of glad tidings and a warner. Write something about that.",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "hadith-4",
    title: "Hadith 4 — Holding a smouldering ember",
    titleAr: "الحديث ٤",
    lessons: [
      {
        id: "h4-text",
        title: "The narration",
        icon: "1",
        sections: [
          {
            type: "heading",
            kicker: "At-Tirmidhi · at-Tabarani",
            title: "There will come a time when the one who is patient",
          },
          {
            type: "flow",
            title: "Read it as one path",
            items: [
              { title: "The time", body: "A time will come when holding to one’s religion is like gripping a live coal." },
              { title: "The test", body: "Patience will be hard, because right is denounced and evil is accepted." },
              { title: "The reward", body: "The one who stays as steadfast as the Companions will have the reward of fifty of them." },
              { title: "Of you", body: "Not fifty of the later people — fifty of you, the Sahabah." },
            ],
          },
          {
            type: "matn",
            kicker: "The first wording",
            source: "Narrated by at-Tirmidhi; classed as sahih by al-Albani",
            text: "It was narrated that Anas ibn Malik رضي الله عنه said: The Messenger of Allah ﷺ said: «There will come a time when the one who is patient and steadfast in adhering to his religion will be like the one who is holding onto a smouldering ember.»",
          },
          {
            type: "matn",
            kicker: "The second wording",
            source: "Narrated by at-Tabarani; classed as sahih by al-Albani",
            text: "And he ﷺ said: «Ahead of you are days that will require patience and steadfastness, during which the one who is as steadfast as you are will have a reward like that of fifty of you.» They said: O Prophet of Allah, or [like fifty] of them? He said: «No; [like fifty] of you.»",
          },
        ],
      },
      {
        id: "h4-phrases",
        title: "Explanation of phrases",
        icon: "2",
        sections: [
          {
            type: "heading",
            kicker: "Word by word",
            title: "Explanation of phrases",
          },
          {
            type: "phrases",
            items: [
              {
                quote: "There will come a time when the one who is patient and steadfast",
                body: "That is, among the people of that time. Al-Ja‘bari said: That is, this time is a time of patience and steadfastness, because what is right is denounced and what is evil is accepted. Intentions have grown corrupt, treachery and dishonesty have prevailed, the one who is on the right path is subject to harm and the one who is following the path of falsehood is honoured.",
              },
              {
                quote: "the one who is holding on",
                body: "That is, his patience will be like that of one who holds on, in terms of how hard it is and how difficult the test is.",
              },
              {
                quote: "to a smouldering ember",
                body: "That is, to a live coal.",
              },
              {
                quote: "a reward like that of fifty of you",
                body: "Shaykh al-Islam رحمه الله said: They — meaning the later generations — may have reward like that of fifty of those who strove hard among them — meaning the Sahabah. That is because the Sahabah had people who helped them in that, but these later generations will not find many people to help them in that.",
              },
            ],
          },
          {
            type: "note",
            tone: "warning",
            title: "Al-Hafiz Ibn Hajar",
            body: "The hadith, «The one who does righteous deeds among them will have the reward of fifty of you», does not indicate that people other than the Sahabah are superior to the Sahabah رضي الله عنهم; merely having more reward does not necessarily mean that they are superior. Rather the variation in reward has to do with particular deeds. As for what those who saw the Prophet ﷺ gained of immense reward as a result of seeing him, no one can match that.",
          },
          {
            type: "brief",
            title: "Brief explanation of the hadith",
            body: "In this hadith, the Prophet ﷺ wanted to highlight the severity of the tribulation and confusion that will occur at the end of time. Just as the one who holds on to a smouldering ember cannot bear it burning his hand, by the same token the one who strives to adhere to his religion at that time will not be able to remain steadfast in that, because of the prevalence of sin and sinners, and because confusion (fitnah) will be widespread and faith will be weak. It cannot be imagined that he will be able to remain steadfast in his religious commitment except with immense patience.",
          },
          {
            type: "ayah",
            text: "This is the time of patience; who can hold on to that which is like a burning ember, so that he will be saved from tribulation?",
            ref: "Ash-Shatibi رحمه الله",
          },
          {
            type: "note",
            tone: "benefit",
            title: "Ibn Rajab al-Hanbali رحمه الله",
            body: "There are many hadiths which praise the one who is steadfast in adhering to his religion at the end of time. They say that he is like the one who holds onto a smouldering ember, and that the one who does righteous deeds will attain the reward of fifty of those who came before him, because those who came before him had people around them who helped them to do good.",
          },
        ],
      },
      {
        id: "h4-lessons",
        title: "What we learn",
        icon: "3",
        sections: [
          {
            type: "heading",
            kicker: "Hadith 4",
            title: "What we learn from the hadith",
          },
          {
            type: "points",
            items: [
              {
                n: 1,
                title: "Prepare for a time that will come",
                body: "This hadith advises people to think of what will happen and prepare themselves for such a situation, for it will inevitably come to pass. The one who will be able to withstand these difficulties is the one who shows patience in adhering to his religion and his faith. He will attain the highest degrees before Allah ﷻ, and his Lord will help him to do that which He loves and is pleased with, for divine help is commensurate with the amount of challenges that one faces.",
              },
              {
                n: 2,
                title: "An abstract idea made tangible",
                body: "The hadith compares an abstract idea with something tangible. In Fayd al-Qadeer it says: The hadith likens an abstract concept to something tangible. In other words, the one who is steadfast in adhering to the rulings of the Quran and Sunnah will suffer hardships and difficulties at the hands of the innovators and followers of misguidance which may be likened to the suffering endured by the one who picks up a burning object and holds onto it. In fact, it may be even more painful than that. This is one of the Prophet’s miracles, for he foretold a matter of the unseen that came to pass.",
              },
            ],
          },
          {
            type: "heading",
            title: "Those the Prophet ﷺ admired",
          },
          {
            type: "intro",
            text: "Ibn al-Qayyim رحمه الله said in verse, describing the qualities of those at the end of time concerning whom the Prophet ﷺ expressed admiration and positive envy:",
          },
          {
            type: "cards",
            items: [
              {
                title: "They hold fast to the Sunnah",
                body: "When people turn away from it.",
              },
              {
                title: "They stay away from innovations",
                body: "Even if people think what has been introduced is right and proper.",
              },
              {
                title: "They affirm Allah’s oneness",
                body: "Full devotion to Allah, even if most people denounce that.",
              },
              {
                title: "They belong only to Allah and His Messenger",
                body: "Not to a shaykh, a tareeqah, a madhab, or a group.",
              },
            ],
          },
          {
            type: "note",
            tone: "info",
            title: "They are holding the ember",
            body: "These are people who belong to Allah, worshipping Him Alone, and they belong to His Messenger ﷺ, following only what he brought. They are the ones who are truly holding onto the smouldering ember. Most — if not all — people criticize them, because they are like strangers among them, and people regard them as odd and as innovators, and accuse them of drifting away from the path of the majority.",
          },
        ],
      },
      {
        id: "h4-activities",
        title: "Activities",
        icon: "4",
        sections: [
          {
            type: "heading",
            kicker: "Write it in your own words",
            title: "Activities",
          },
          {
            type: "activities",
            items: [
              "What do you understand from the words of the Prophet ﷺ: «No; [like fifty] of you»?",
              "Discuss the role of the one who calls people to Allah at the time of tribulation.",
              "Mention briefly the characteristics of those of this ummah at the end of time who are to be admired and envied [in a positive sense].",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "hadith-5",
    title: "Hadith 5 — I shall not do anything more than that",
    titleAr: "الحديث ٥",
    lessons: [
      {
        id: "h5-text",
        title: "The narration",
        icon: "1",
        sections: [
          {
            type: "heading",
            kicker: "Muslim",
            title: "By Allah, I shall not do anything more than that",
          },
          {
            type: "flow",
            title: "Read it as one path",
            items: [
              { title: "The question", body: "A man asks whether the obligations alone are enough for Paradise." },
              { title: "The answer", body: "The Prophet ﷺ says yes." },
              { title: "The oath", body: "The man swears he will not add anything beyond that." },
              { title: "What is left", body: "Voluntary deeds may be omitted, and a great deal of reward is missed." },
            ],
          },
          {
            type: "matn",
            kicker: "Jabir رضي الله عنه",
            source: "Narrated by Muslim",
            text: "It was narrated from Jabir رضي الله عنه that a man asked the Messenger of Allah ﷺ: Do you think, if I pray the obligatory prayers, fast Ramadan, regard as permissible what is permitted and regard as prohibited what is prohibited, and I do not do anything more than that, will I be admitted to Paradise? He said: «Yes.» He said: By Allah, I shall not do anything more than that.",
          },
        ],
      },
      {
        id: "h5-phrases",
        title: "Explanation of phrases",
        icon: "2",
        sections: [
          {
            type: "heading",
            kicker: "Word by word",
            title: "Explanation of phrases",
          },
          {
            type: "phrases",
            items: [
              {
                quote: "Do you think",
                body: "That is, tell me. Every time a question begins with the phrase “do you think”, it is most likely that what is meant is: Tell me.",
              },
              {
                quote: "if I pray the obligatory prayers",
                body: "This refers to the five daily prayers that are offered every day and night, as Allah ﷻ says: {Indeed, prayer has been decreed upon the believers a decree of specified times} [an-Nisa 4:103].",
              },
              {
                quote: "regard as permissible what is permitted and regard as prohibited what is prohibited",
                body: "What is meant by regarding things as permissible or prohibited is doing what is permitted (halal) and avoiding what is prohibited (haram). This will be discussed further below.",
              },
            ],
          },
          {
            type: "ayah",
            text: "{Indeed, prayer has been decreed upon the believers a decree of specified times}",
            ref: "an-Nisa 4:103",
          },
          {
            type: "brief",
            title: "Brief explanation of the hadith",
            body: "In this hadith, the Prophet ﷺ wanted to explain that it is permissible to do only what is obligatory, and omit voluntary actions completely, but undoubtedly the one who omits them and does not do any of them is missing out on a great deal of reward and much goodness.",
          },
          {
            type: "note",
            tone: "warning",
            title: "Al-Qurtubi said",
            body: "If the people of a city unanimously decide to abandon a Sunnah, they should be fought until they go back to it.",
          },
          {
            type: "intro",
            text: "The Sahabah رضي الله عنهم and those who came after them persisted in doing Sunnah actions and virtuous deeds as they persisted in doing obligatory actions, and they did not differentiate between them as they were eager to attain the reward. Rather the Prophet ﷺ did not tell this questioner about the Sunnahs and virtuous deeds in order to make things easier for him and not overburden him, because he was new in Islam, lest imposing too much on him put him off.",
          },
        ],
      },
      {
        id: "h5-lessons",
        title: "What we learn",
        icon: "3",
        sections: [
          {
            type: "heading",
            kicker: "Hadith 5",
            title: "What we learn from the hadith",
          },
          {
            type: "points",
            items: [
              {
                n: 1,
                title: "Their goal was Paradise",
                body: "The Sahabah were keen to ask questions, and their ultimate goal was to enter Paradise, not to accumulate wealth, to have many sons or to live a life of luxury.",
              },
              {
                n: 2,
                title: "The obligations are enough",
                body: "If a person limits himself to offering the obligatory prayers, there is no blame on him, and he will not be deprived of admittance to Paradise, because that man said: Do you think, if I pray the obligatory prayers …?",
              },
              {
                n: 3,
                title: "Prayer and fasting open Paradise",
                body: "The prayers, and fasting too, are means of gaining admittance to Paradise. It is proven from the Prophet ﷺ that whoever fasts Ramadan, out of faith and in the hope of reward, his previous sins will be forgiven. Agreed upon.",
              },
              {
                n: 4,
                title: "Do not refuse what is halal",
                body: "A person should not refrain from availing himself of that which is permissible (halal), because that man said: “…[and I] regard as permissible what is permitted…” So if a person refuses to avail himself of that which is permissible for no shar‘i reason, that is blameworthy and is not praiseworthy.",
              },
              {
                n: 5,
                title: "An-Nawawi on halal and haram",
                body: "An-Nawawi رحمه الله said: What is meant by “and regard as prohibited what is prohibited” is avoiding it, and what is meant by “regard as permissible what is permitted” is doing it, believing it to be permissible (halal). End quote.",
                parts: [
                  {
                    label: "Another reading",
                    body: "It may be interpreted in another way, which is: that you believe that what is prohibited is indeed prohibited, and what is permissible is indeed permitted, because if you do not believe that, then you do not believe in the Islamic ruling. So if you refrain from that which is prohibited because it is prohibited, and out of fear of Allah ﷻ, then refraining from it becomes an act of worship, even though simply keeping away from what is prohibited is good; but what is better is to believe that it is prohibited, and you refrain from it because of that, and out of fear of Allah ﷻ.",
                  },
                  {
                    label: "An example",
                    body: "An example of that is a man who avoids drinking alcohol or smoking or eating pork, not because it is haram, but because he does not like it or want it. There is no sin on him in that case, but if he refrains because he believes that it is haram, and he is refraining from it for the sake of Allah, then he will be rewarded for that.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "h5-activities",
        title: "Activities",
        icon: "4",
        sections: [
          {
            type: "heading",
            kicker: "Write it in your own words",
            title: "Activities",
          },
          {
            type: "activities",
            items: [
              "Why did the Prophet ﷺ not mention zakat and Hajj in this hadith?",
              "What is the difference between an individual not doing Sunnah actions and the inhabitants of a town unanimously agreeing to abandon Sunnah actions?",
              "In this hadith, the Prophet ﷺ explained an important Islamic principle. State what it is and why it is important.",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "hadith-6",
    title: "Hadith 6 — The five daily prayers",
    titleAr: "الحديث ٦",
    lessons: [
      {
        id: "h6-text",
        title: "The narration",
        icon: "1",
        sections: [
          {
            type: "heading",
            kicker: "Muslim",
            title: "The five daily prayers",
          },
          {
            type: "flow",
            title: "Read it as one path",
            items: [
              { title: "The five prayers", body: "Each prayer erases the minor sins between it and the next." },
              { title: "Jumuah and Ramadan", body: "One Jumuah to the next, and one Ramadan to the next, do the same." },
              { title: "The condition", body: "This expiation is for the one who avoids major sins." },
              { title: "What remains", body: "Major sins are lifted by repentance, or by the mercy of Allah ﷻ." },
            ],
          },
          {
            type: "matn",
            kicker: "Abu Hurayrah رضي الله عنه",
            source: "Narrated by Muslim",
            text: "It was narrated from Abu Hurayrah رضي الله عنه that the Messenger of Allah ﷺ used to say: «The five daily prayers, one Jumuah to the next, and one Ramadan to the next, are expiation for whatever comes in between them, if one avoids major sins.»",
          },
        ],
      },
      {
        id: "h6-phrases",
        title: "Explanation of phrases",
        icon: "2",
        sections: [
          {
            type: "heading",
            kicker: "Word by word",
            title: "Explanation of phrases",
          },
          {
            type: "phrases",
            items: [
              {
                quote: "one Jumuah to the next, and one Ramadan to the next",
                body: "Means: from one Jumuah prayer to the next, and from one fast of Ramadan to the next.",
              },
              {
                quote: "are expiation for whatever comes in between them",
                body: "That is, of sins. The word takfeer (translated here as expiation) literally means covering, but what is meant here is erasing.",
              },
              {
                quote: "major sins",
                body: "Al-Munawi said: This refers to every serious and grave sin. There was a difference of scholarly opinion concerning that, and there are several views, the most likely of which to be correct is that it refers to any sin for which the Lawgiver imposes a hadd punishment and issues a clear warning.",
              },
            ],
          },
          {
            type: "intro",
            text: "It also applies to every sin for which the Prophet ﷺ cursed the doer.",
          },
          {
            type: "intro",
            text: "It also applies to every action for which there is a hadd punishment in this world, such as zina; or there is a warning for the Hereafter, such as consuming riba; or it is stated that it nullifies faith, such as the words of the Prophet ﷺ: «No one of you truly believes, until he loves for his brother what he loves for himself.» Agreed upon.",
          },
          {
            type: "intro",
            text: "Or there is a disavowal of it, such as the words of the Prophet ﷺ: «Whoever cheats us is not one of us.» Narrated by Muslim.",
          },
          {
            type: "intro",
            text: "And anything else that is like that is a major sin.",
          },
          {
            type: "note",
            tone: "warning",
            title: "The view of Ahl as-Sunnah",
            body: "The view of Ahl as-Sunnah is that major sins do not put a person beyond the bounds of faith, and that those who commit major sins do not become disbelievers, so long as they do not regard those actions as permissible. If one of them dies – even if he dies whilst he is persisting in major sins – he will not abide forever in Hell.",
          },
          {
            type: "brief",
            title: "Brief explanation of the hadith",
            body: "In this hadith, the Prophet ﷺ explains that the five daily prayers expiate sins committed between Fajr and Zuhr, between Zuhr and Asr, between Asr and Maghrib, between Maghrib and Isha, and between Isha and Fajr. If a person does a bad deed, but he establishes those five daily prayers and does them properly, then the prayers will erase the sins, if he avoids major sins.",
          },
          {
            type: "note",
            tone: "benefit",
            title: "An-Nawawi, Sharh Muslim",
            body: "«There is no Muslim who, when the time for an obligatory prayer comes, does wudu for it properly, focuses properly with humility, and bows properly, but it will be an expiation for whatever sins came before it, so long as he did not commit any major sin. And this applies every time he prays.» And he said: What this means is that all sins will be forgiven except major sins, which will not be forgiven. End quote.",
          },
          {
            type: "note",
            tone: "info",
            title: "Al-Qadi Iyad",
            body: "What is mentioned in the hadith about forgiveness of sins applies so long as no major sin is committed. This is the view of Ahl as-Sunnah. Major sins can only be expiated by repentance or by the mercy and grace of Allah ﷻ. End quote.",
          },
          {
            type: "note",
            tone: "warning",
            title: "The scholars said",
            body: "It is essential, when matters have to do with people’s rights, to restore those rights, settle the matter and give them what they are owed, even if it is minor; and in the case of major sins, it is essential to repent.",
          },
        ],
      },
      {
        id: "h6-lessons",
        title: "What we learn",
        icon: "3",
        sections: [
          {
            type: "heading",
            kicker: "Hadith 6",
            title: "What we learn from the hadith",
          },
          {
            type: "points",
            items: [
              {
                n: 1,
                title: "Good deeds erase bad deeds",
                body: "Good deeds (hasanat) erase bad deeds (sayyiat). Expiation may be achieved by doing righteous deeds, such as prayer, giving charity, fasting, honouring one’s parents, upholding ties of kinship, visiting the sick, attending funerals, constantly remembering Allah, asking Him for forgiveness, tahleel (saying Laa ilaaha illa Allah [there is no god worthy of worship except Allah]), tahmeed (saying Alhamdu Lillah [Praise be to Allah]), takbeer (saying Allahu akbar [Allah is Most Great]), reading Quran, and so on.",
                quotes: [
                  {
                    text: "{And establish prayer at the two ends of the day and at the approach of the night. Indeed, good deeds do away with misdeeds}",
                    ref: "Hud 11:114",
                  },
                ],
              },
              {
                n: 2,
                title: "Minor sins and major sins",
                body: "Minor sins may be expiated by doing righteous deeds, but in the case of major sins, it is essential to repent specifically from them.",
              },
            ],
          },
          {
            type: "ask",
            question:
              "If prayer expiates sins, what is left for Jumuah prayers and Ramadan to expiate? If wudu expiates sins, what is left for prayer to expiate? The same may be asked about fasting on the Day of Arafah expiating the sins of two years, and fasting on the Day of Ashura expiating the sins of one year. And the same may be asked about the worshipper’s saying Ameen coinciding with that of the angels leading to forgiveness of his previous sins.",
            answer:
              "Each of the things mentioned may bring about expiation. Therefore if there are any minor sins to be expiated, it will expiate them, and if there are no minor sins to be expiated, it will be recorded as good deeds (hasanat) and will raise the doer in status.",
          },
          {
            type: "points",
            items: [
              {
                n: 3,
                title: "Be keen to keep them",
                body: "The Prophet ﷺ urged the Muslim to always be keen to establish the five daily prayers, regularly attend Jumuah prayer, and fast Ramadan, because of what he may attain thereby of expiation for bad deeds or minor sins, and how many they are!",
              },
              {
                n: 4,
                title: "Learn the rulings",
                body: "It is appropriate for the Muslim to learn about the rulings on prayer, Jumuah and fasting, so that he may do these actions in the correct, prescribed manner, and thus attain expiation of minor sins thereby.",
              },
              {
                n: 5,
                title: "Pray them properly",
                body: "The Muslim should regularly offer the five daily prayers on time, with their essential parts, fulfilling their conditions and doing the actions that are recommended (mustahabb), for prayer is one of the greatest means by which Allah may expiate sins. The more properly a person does his prayer, the more hope there is of expiation for bad deeds. Salman al-Farisi رضي الله عنه said: Offer the five daily prayers regularly, for they are expiations for the deeds of these physical faculties, so long as they do not commit major sins.",
              },
            ],
          },
          {
            type: "heading",
            title: "Major sins include",
          },
          {
            type: "intro",
            text: "Shirk, witchcraft, murder, consuming riba (usury) and consuming the property of orphans.",
          },
          {
            type: "cards",
            items: [
              {
                title: "The seven that doom a person to Hell",
                body: "The Prophet ﷺ said: «Avoid the seven [sins] that doom a person to Hell.» They said: What are they, O Messenger of Allah? He said: «Associating others with Allah (shirk), witchcraft, killing a soul whom Allah has forbidden to be killed except in cases dictated by Islamic law, consuming riba, consuming the property of orphans, fleeing the battlefield, and making accusations against chaste women who are innocent at heart and believers.» Narrated by al-Bukhari and Muslim.",
              },
              {
                title: "Tabarruj (wanton display)",
                body: "The Messenger of Allah ﷺ said: «There are two types of the people of Hell that I have not seen yet: … and women who are clothed yet naked, walking with an enticing gait, with something on their heads that looks like the humps of camels, leaning to one side. They will never enter Paradise or even smell its fragrance, although its fragrance can be detected from such and such a distance.» Narrated by Muslim.",
              },
              {
                title: "Plucking the eyebrows, tattoos, and changing the creation of Allah",
                body: "The Prophet ﷺ said: «May Allah curse the women who do tattoos and the women who ask for that to be done, the women who pluck eyebrows and the women who ask for that to be done, the women who file teeth for the purpose of beautification, changing the creation of Allah.» Narrated by al-Bukhari and Muslim.",
              },
            ],
          },
        ],
      },
      {
        id: "h6-activities",
        title: "Activities",
        icon: "4",
        sections: [
          {
            type: "heading",
            kicker: "Write it in your own words",
            title: "Activities",
          },
          {
            type: "activities",
            items: [
              "The Prophet ﷺ said, in the hadith under discussion: «…if one avoids major sins.» Explain what is meant by this phrase, and explain the view of Ahl as-Sunnah wa’l-Jama‘ah towards the one who commits major sins.",
              "In the light of the words of Allah ﷻ, {Indeed, good deeds do away with misdeeds} [Hud 11:114], write an essay about the many ways of doing righteous deeds and attaining forgiveness.",
              "The scholars differed greatly concerning the definition of major sin. Write a brief essay about that.",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "hadith-7",
    title: "Hadith 7 — O young men, let him get married",
    titleAr: "الحديث ٧",
    lessons: [
      {
        id: "h7-text",
        title: "The narration",
        icon: "1",
        sections: [
          {
            type: "heading",
            kicker: "Agreed upon",
            title: "O young men, whoever among you is able to",
          },
          {
            type: "flow",
            title: "Read it as one path",
            items: [
              { title: "The call", body: "The young man who is able should get married." },
              { title: "The benefit", body: "Marriage is more effective in lowering the gaze and guarding chastity." },
              { title: "The one who cannot", body: "Whoever cannot afford marriage should fast." },
              { title: "The remedy", body: "Fasting weakens desire, like a temporary restraint." },
            ],
          },
          {
            type: "matn",
            kicker: "Abdullah ibn Mas‘ud رضي الله عنه",
            source: "Agreed upon",
            text: "It was narrated that Abdullah ibn Mas‘ud رضي الله عنه said: The Messenger of Allah ﷺ said to us: «O young men, whoever among you is able to, let him get married, for it is more effective in lowering the gaze and guarding one’s chastity. And whoever cannot afford it should fast, for it will be like [temporary] castration for him.»",
          },
          {
            type: "narrator",
            title: "The narrator of the hadith",
            name: "Abdullah ibn Mas‘ud al-Hudhali",
            body: "One of the senior Sahabah in terms of virtue and wisdom. He migrated to Ethiopia twice. He was present at Badr, Uhud, al-Khandaq and all other campaigns with the Messenger of Allah ﷺ. He was the closest of people to him in following his guidance and in his bearing and attitude. He learned seventy surahs directly from him, with no one else present. Umar رضي الله عنه sent him to the people of Kufah to teach them about their religion. He died in 32 AH.",
          },
        ],
      },
      {
        id: "h7-phrases",
        title: "Explanation of phrases",
        icon: "2",
        sections: [
          {
            type: "heading",
            kicker: "Word by word",
            title: "Explanation of phrases",
          },
          {
            type: "phrases",
            items: [
              {
                quote: "young men (shabab)",
                body: "Shabab is the plural of shabb, which refers to one who has reached puberty but has not yet passed the age of thirty. It was also said that it refers to one who is aged between nineteen and thirty-four, or between thirty and forty.",
              },
              {
                quote: "whoever among you is able to",
                body: "What is meant by being able in this hadith is being able to afford the expenses of marriage, such as the mahr (dowry), maintenance and accommodation. It also includes physical desire and the inclination to get married.",
              },
              {
                quote: "more effective in lowering the gaze",
                body: "Means that it makes a person able to restrain his gaze and not look at women.",
              },
              {
                quote: "and [more effective in] guarding one’s chastity",
                body: "What is meant is that marriage prevents one from falling into immoral deeds.",
              },
              {
                quote: "fasting",
                body: "What is meant by “fasting” is fasting as prescribed in Islam.",
              },
              {
                quote: "it",
                body: "“It” refers to fasting.",
              },
              {
                quote: "castration",
                body: "The word translated here as “castration” originally refers to castration of male animals, so as to eliminate its desire.",
              },
            ],
          },
          {
            type: "note",
            tone: "warning",
            title: "A well-established guideline",
            body: "One of the well-established guidelines is that whatever someone says should be interpreted in accordance with his customs and traditions. So if the words come from the Prophet ﷺ, they should be interpreted in accordance with the shar‘i tradition, because this is the meaning that he ﷺ intended.",
          },
          {
            type: "brief",
            title: "Brief explanation of the hadith",
            body: "The Prophet ﷺ – who is the teacher and guide who cared deeply for his ummah – addressed young men, instructing the one who is able to get married to do so. What is meant by being able includes both physical and financial ability. If a young man does not have the physical ability, then he has no need of marriage. If he does have the physical ability but has no money, then he is not able to get married.",
          },
          {
            type: "intro",
            text: "Then the Prophet ﷺ explained the benefits that the young man may attain from marriage, so as to encourage him to get married: “for it is more effective in lowering the gaze and guarding one’s chastity.” Marriage is one of the most important means of lowering the gaze and refraining from looking at that which is haram, and of preventing zina (fornication). Allah ﷻ has enjoined men and women to lower their gaze and guard their chastity, as He ﷻ says: {Tell the believing men to lower their gaze and guard their chastity. That is purer for them. Indeed, Allah is Acquainted with what they do. And tell the believing women to lower their gaze and guard their chastity…} [an-Nur 24:30-31].",
          },
          {
            type: "ayah",
            text: "{Tell the believing men to lower their gaze and guard their chastity. That is purer for them. Indeed, Allah is Acquainted with what they do. And tell the believing women to lower their gaze and guard their chastity…}",
            ref: "an-Nur 24:30-31",
          },
          {
            type: "intro",
            text: "Then the Prophet ﷺ offered a practical solution for the one who cannot afford to get married, as he ﷺ said: “And whoever cannot afford it should fast.” He gave as the reason for choosing fasting as a solution and remedy the fact that it is a protection and prevents desire from being provoked and growing strong. In addition to being a prescribed act of worship for which the one who does it will be rewarded, it also weakens desire as a result of abstaining from food and drink, and it constricts the path of the blood through which the Shaytan may move.",
          },
          {
            type: "ask",
            question: "Having children is one of the most important aims of marriage, so why did the Prophet ﷺ not mention it in this hadith?",
            answer:
              "Shaykh Ibn Uthaymeen رحمه الله said: The Prophet ﷺ did not say that marriage will bring more children, even though marriage does bring children, because usually the main concern of the young man is that which will help him to lower his gaze and guard his chastity. Hence you will find that those who congratulate a young man do not think of congratulating him on now having the opportunity to have children; rather they may say to him: Take your time and do not rush to have children, and they congratulate him because he will now be able to lower his gaze and guard his chastity. Hence the Prophet ﷺ did not mention the great benefit of having many children in this instance, because he was addressing young men, and what is most important for them is these two matters.",
          },
        ],
      },
      {
        id: "h7-lessons",
        title: "What we learn",
        icon: "3",
        sections: [
          {
            type: "heading",
            kicker: "Hadith 7",
            title: "What we learn from the hadith",
          },
          {
            type: "points",
            items: [
              {
                n: 1,
                title: "Islam prescribes marriage",
                body: "Islam prescribes marriage, because there is much wisdom behind it and many, varied benefits in it, including the following:",
                parts: [
                  {
                    label: "The human race",
                    body: "Perpetuating the human race and preventing it from diminishing or vanishing, by having children.",
                  },
                  {
                    label: "Chastity",
                    body: "Keeping both spouses chaste and enabling them to avoid what is haram.",
                  },
                  {
                    label: "Tranquillity",
                    body: "Creating comfort and tranquillity between the spouses.",
                    quote:
                      "{And of His signs is that He created for you from yourselves mates that you may find tranquillity in them; and He placed between you affection and mercy}",
                    ref: "ar-Rum 30:21",
                  },
                  {
                    label: "Numbers",
                    body: "Increasing the number of Muslims.",
                  },
                  {
                    label: "Lineage",
                    body: "Preserving lineages and strengthening family ties.",
                  },
                  {
                    label: "Caring for women",
                    body: "Protecting women and taking care of them by spending on their maintenance and meeting their needs.",
                  },
                  {
                    label: "Parental instinct",
                    body: "Fulfilling the paternal and maternal instincts, which will be fulfilled if there are children.",
                  },
                  {
                    label: "Morals",
                    body: "Protecting morals from declining and protecting people from falling into the pit of zina and illicit relationships.",
                  },
                ],
              },
              {
                n: 2,
                title: "Marriage protects from the haram",
                body: "It is encouraged to get married because it keeps one chaste and protects one from what is haram.",
              },
              {
                n: 3,
                title: "He addressed them fittingly",
                body: "The Prophet ﷺ was a good speaker who addressed young men in an appropriate manner.",
              },
              {
                n: 4,
                title: "He gave the ruling and the reason",
                body: "The Messenger ﷺ had a good approach in teaching his ummah and explaining things to them. This is clearly seen in the way in which he would tell them of a ruling and explain the reason for it. Explaining the reason for the ruling is beneficial in several ways:",
                parts: [
                  {
                    label: "It shows the beauty of Islam",
                    body: "It highlights the sublime nature of Islam, for all its rulings are based on taking care of people’s interests.",
                  },
                  {
                    label: "It reassures the listener",
                    body: "If the listener learns of the wisdom behind the ruling, he will be more at ease with it, and that will give him a stronger motive to adhere to it.",
                  },
                ],
              },
              {
                n: 5,
                title: "Avoid what leads the other way",
                body: "The individual should avoid anything that would lead to him letting his gaze wander or falling into immoral deeds. As the Prophet ﷺ instructed people to get married for the purpose of lowering the gaze and guarding chastity, that which leads to the opposite thereof must be forbidden.",
              },
            ],
          },
        ],
      },
      {
        id: "h7-activities",
        title: "Activities",
        icon: "4",
        sections: [
          {
            type: "heading",
            kicker: "Write it in your own words",
            title: "Activities",
          },
          {
            type: "activities",
            items: [
              "Al-Babarti رحمه الله said: There is no Islamic ruling that is supported by so many various reasons like marriage, for which there are shar‘i reasons, rational reasons and natural reasons. Explain that, using other sources.",
              "Quote evidence from the religious texts for the prohibition on masturbation, using other sources.",
              "There is a story behind Abdullah ibn Mas‘ud’s narration of this hadith. Tell the story, noting the most important things that we learn from it.",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "hadith-8",
    title: "Hadith 8 — This world is sweet and green",
    titleAr: "الحديث ٨",
    lessons: [
      {
        id: "h8-text",
        title: "The narration",
        icon: "1",
        sections: [
          {
            type: "heading",
            kicker: "Muslim",
            title: "This world is sweet and green",
          },
          {
            type: "flow",
            title: "Read it as one path",
            items: [
              { title: "The world", body: "It is sweet in taste and pleasant in appearance." },
              { title: "The trust", body: "Allah makes people successive generations, then He sees what they do." },
              { title: "The warning", body: "Beware of this world, and beware of women." },
              { title: "The first trial", body: "The first fitnah among the Children of Israel had to do with women." },
            ],
          },
          {
            type: "matn",
            kicker: "Abu Saeed al-Khudri رضي الله عنه",
            source: "Narrated by Muslim",
            text: "It was narrated from Abu Saeed al-Khudri رضي الله عنه that the Prophet ﷺ said: «This world is sweet and green, and Allah will make you successive generations therein, and He will see what you do. Beware of this world and beware of women, for the first fitnah (trial) among the Children of Israel had to do with women.»",
          },
          {
            type: "narrator",
            title: "The narrator of the hadith",
            name: "Abu Saeed al-Khudri",
            body: "Sa‘d ibn Malik ibn Sinan al-Ansari, one of the youngest and best of the Sahabah. He narrated a great deal from the Prophet ﷺ. He was a faqeeh, mujtahid and mufti. He was present with the Prophet ﷺ at al-Khandaq and subsequent campaigns.",
          },
        ],
      },
      {
        id: "h8-phrases",
        title: "Explanation of phrases",
        icon: "2",
        sections: [
          {
            type: "heading",
            kicker: "Word by word",
            title: "Explanation of phrases",
          },
          {
            type: "phrases",
            items: [
              {
                quote: "This world is sweet and green",
                body: "These are two descriptions of this world. This world is sweet in its taste and pleasant in its appearance.",
              },
              {
                quote: "and Allah will make you successive generations therein",
                body: "That is, He will make you successors to the generations who came before you (and thus you will inherit the earth), then He will see: will you obey Him, or will you disobey Him and follow your whims and desires?",
              },
            ],
          },
          {
            type: "brief",
            title: "Brief explanation of the hadith",
            body: "In this hadith, the Prophet ﷺ instructs us to fear Allah, after describing how this world is. Then he ﷺ explains that Allah ﷻ has made us successive generations in this world. Then He will see: will we obey Him and restrain ourselves from following whims and desires, doing what Allah has enjoined upon us and not being deceived by this world, or will it be the opposite of that? Hence he says: «Beware of this world» – that is, do what you are enjoined to do and refrain from what you are forbidden to do, and do not be deceived by the sweetness and beauty of this world. As Allah ﷻ says: {so let not the worldly life delude you and be not deceived about Allah by the Deceiver} [Luqman 31:33].",
          },
          {
            type: "ayah",
            text: "{so let not the worldly life delude you and be not deceived about Allah by the Deceiver}",
            ref: "Luqman 31:33",
          },
          {
            type: "intro",
            text: "Then the Prophet ﷺ issued a warning about women, which includes a warning about a woman’s scheming against her husband, as well as a warning about the temptation of women. Hence he said: «for the first fitnah (trial) among the Children of Israel had to do with women,» and they succumbed to temptation caused by women, and thus they went astray and lead others astray.",
          },
          {
            type: "intro",
            text: "Hence we find our enemies and the enemies of our religion nowadays focusing on women, wanting them to adorn themselves and mix with men, so that women will become like playthings and people will not care about anything except their shapes and their bodies.",
          },
          {
            type: "intro",
            text: "They have clearly stated that. One of the Masonic leaders said: “A cup of wine and a beautiful woman can do more damage to the nation of Muhammad than a thousand cannons.” Another one said: “We will distract the profane [non-Masons, outsiders] with two desires: the belly and the genitals, so that they will become like a flock of sheep and we can drive them wherever we wish.”",
          },
          {
            type: "intro",
            text: "Do those who promote music, dancing, the drinking of alcohol, the spread of fornication and wanton adornment in the Muslim lands realize that they are carrying out the Zionist plan to erase the teachings of Islam, and that they are achieving for them that which they are unable to achieve themselves?",
          },
        ],
      },
      {
        id: "h8-lessons",
        title: "What we learn",
        icon: "3",
        sections: [
          {
            type: "heading",
            kicker: "Hadith 8",
            title: "What we learn from the hadith",
          },
          {
            type: "points",
            items: [
              {
                n: 1,
                title: "A passageway",
                body: "This world is nothing in comparison with the Hereafter; it is a passageway and a place to sow now and reap in the Hereafter.",
              },
              {
                n: 2,
                title: "A warning against both",
                body: "The hadith is a warning against being deceived by this world and inclining towards women, for both of them are a test and trial for everyone who is prone to temptation. The warning is about this world, as the Prophet ﷺ said elsewhere:",
                quotes: [
                  {
                    text: "«Among the things that I fear for you after I am gone is what you will acquire of transient worldly gains and glamour.»",
                    ref: "Agreed upon",
                  },
                ],
                follow:
                  "And there are many warnings about women, as the Prophet ﷺ said: «I am not leaving behind any trial more harmful for men than women.» Agreed upon.",
              },
              {
                n: 3,
                title: "His care for the ummah",
                body: "The Prophet’s care for his ummah and how he warned them against that which could be a cause of their doom.",
              },
              {
                n: 4,
                title: "The fitnah of women",
                body: "The greatest and strongest of fitnahs (trials) is the fitnah of women, for their fitnah is immense and falling into it is a serious matter. They are the traps and nets of the Shaytan. How often has the Shaytan been able to ensnare by means of them one who was in good shape, so he became a prisoner of his desires and sins, and he could find no way to escape. Had he taken precautions against that, and not let himself wander into places of danger and expose himself to troubles, and had he sought the help of Allah ﷻ, he would have been safe from that fitnah and would have been spared this test. Hence the Prophet ﷺ warned against that in particular in this hadith.",
              },
            ],
          },
        ],
      },
      {
        id: "h8-activities",
        title: "Activities",
        icon: "4",
        sections: [
          {
            type: "heading",
            kicker: "Write it in your own words",
            title: "Activities",
          },
          {
            type: "activities",
            items: [
              "Explain how Islamic teachings warn against the temptations of this world.",
              "Write an essay about the efforts aimed at westernization of the Muslim woman and the ways of protection and remedy.",
              "Based on this hadith and others, describe how the Prophet ﷺ took care of his ummah.",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "remaining",
    title: "Hadiths 9–21",
    titleAr: "بقية الأحاديث",
    lessons: UPCOMING.map((item) => ({
      id: item.id,
      title: `Hadith ${item.n}: ${item.title}`,
      icon: String(item.n),
      draft: true,
      sections: comingSoon(`Hadith ${item.n}`, item.opening),
    })),
  },
  {
    id: "practice",
    title: "Practice",
    lessons: [
      { id: "flashcards", title: "Flashcards", icon: "🃏", kind: "tool", badge: "76" },
      { id: "quiz", title: "Knowledge Quiz", icon: "✏️", kind: "tool", badge: "56" },
    ],
  },
];

export const HADITH2_LESSONS = HADITH2_UNITS.flatMap((unit) =>
  unit.lessons.map((lesson) => ({
    ...lesson,
    unitId: unit.id,
    unitTitle: unit.title,
    unitTitleAr: unit.titleAr,
  })),
);

export const HADITH2_STUDY_LESSONS = HADITH2_LESSONS.filter((lesson) => lesson.kind !== "tool");

export const HADITH2_TOPICS = [
  { id: "all", label: "All topics" },
  { id: "h1", label: "Hadith 1 — the wali" },
  { id: "h2", label: "Hadith 2 — the Sunnah" },
  { id: "h3", label: "Hadith 3 — the Fire" },
  { id: "h4", label: "Hadith 4 — the ember" },
  { id: "h5", label: "Hadith 5 — nothing more than that" },
  { id: "h6", label: "Hadith 6 — the five prayers" },
  { id: "h7", label: "Hadith 7 — young men" },
  { id: "h8", label: "Hadith 8 — this world" },
];

export const HADITH2_FLASHCARDS = [
  {
    t: "h1",
    q: "Who narrated this hadith, and where is it recorded?",
    a: "Abu Hurayrah رضي الله عنه. Narrated by al-Bukhari. It is a hadith qudsi: the Prophet ﷺ narrates what Allah ﷻ said.",
  },
  {
    t: "h1",
    q: "Who was Abu Hurayrah, and when did he die?",
    a: "Abd ar-Rahman ibn Sakhr ad-Dawsi, the narrator of Islam. He stayed close to the Prophet ﷺ and narrated more than five thousand hadiths. Umar appointed him governor of al-Bahrain, then dismissed him. He was governor of Madinah for a few years in the Umayyad caliphate. He died in 59 AH.",
  },
  {
    t: "h1",
    q: "What does «Whoever shows enmity to a close friend of Mine» mean?",
    a: "Takes him as an enemy.",
  },
  {
    t: "h1",
    q: "What does «I shall declare war on him» mean?",
    a: "I will notify him of imminent doom and punishment.",
  },
  {
    t: "h1",
    q: "What is dearer to Allah: obligatory deeds or supererogatory deeds?",
    a: "That which is obligatory. The religious duties Allah has enjoined — individual and communal obligations — are more beloved than the nafilah.",
  },
  {
    t: "h1",
    q: "What does «continues to draw close… until I love him» refer to?",
    a: "Actions done continuously. The person persists in drawing closer to Allah ﷻ by supererogatory deeds until Allah loves him.",
  },
  {
    t: "h1",
    q: "What are the two ways to understand «I will be his hearing with which he hears»?",
    a: "1. Allah protects the wali’s hearing, sight, hand and foot so he only uses them in what pleases Allah.\n2. Allah guides him in how he uses those faculties. This second meaning is more likely to be correct.",
  },
  {
    t: "h1",
    q: "How did Shaykh Ibn Uthaymeen explain Allah’s hesitation in this hadith?",
    a: "Hesitation is not ascribed to Allah without qualification. Here it is mentioned for this specific issue. It is not doubt about the person’s best interests or about Allah’s ability. It is mercy towards this believing slave. «To hurt him» means to do to him that which he dislikes.",
  },
  {
    t: "h1",
    q: "Summarise the brief explanation of the hadith.",
    a: "A stern warning against taking a wali of Allah as an enemy. The most beloved worship is fulfilling obligations. Nawafil bring Allah’s love, support, protection and answered supplication, and raise the person from eeman to ihsan, so he does not displease Allah with his tongue or his faculties.",
  },
  {
    t: "h1",
    q: "Who is a wali, according to Ibn Taymiyyah?",
    a: "Whoever is a believer who is mindful of Allah. Yunus 10:62–63: the allies of Allah are those who believed and were fearing Allah.",
  },
  {
    t: "h1",
    q: "Is walking on water or flying a condition of being a wali?",
    a: "No. The condition is adhering to the laws of Allah and the Sunnah of His Prophet. A claim of wilayah is accepted only if the person’s deeds match the Quran and Sunnah; otherwise it is rejected.",
  },
  {
    t: "h1",
    q: "What are the two types of Allah’s wilayah?",
    a: "General: He is the wali of all people, controlling their affairs — believers and disbelievers (al-An‘am 6:61–62).\nSpecific: His wilayah for the pious (al-Baqarah 2:257 and Yunus 10:62–63).",
  },
  {
    t: "h1",
    q: "Can a proven wali be an intermediary between you and Allah?",
    a: "No. There is no intermediary between Allah and His slaves. The ignorant call the awliya intermediaries, then end up calling upon them instead of Allah.",
  },
  {
    t: "h1",
    q: "Why is taking the awliya as enemies a major sin?",
    a: "The one who does so is subject to a declaration of war from Allah. A specific punishment for a specific action means the action is a major sin. Allah also declares war over riba in al-Baqarah 2:279.",
  },
  {
    t: "h1",
    q: "Which deed did the Prophet ﷺ name as dearest to Allah when Ibn Mas‘ud asked?",
    a: "«Prayer offered on time.» Narrated by al-Bukhari and Muslim. By category, obligations are dearer than nawafil. By type, prayer is dearer than other obligations. Within one category, two people’s prayers can still differ as east from west.",
  },
  {
    t: "h1",
    q: "What does the word «until» tell us about nawafil and Allah’s love?",
    a: "«Until» refers to the goal. A great deal of supererogatory deeds is a means of attaining Allah’s love. Be of good cheer if you have done that: you have attained the love of Allah.",
  },
  {
    t: "h1",
    q: "Does every prayer and every nafilah bring this reward?",
    a: "No. The reward is only for deeds done in accordance with Islamic teachings, properly and perfectly. Not every prayer deters from evil, and not every nafilah draws a person closer to Allah.",
  },
  {
    t: "h1",
    q: "When does Allah not answer, even if the person does many nawafil?",
    a: "If he asks for something that involves sin, severing ties of kinship, or wronging someone else. Allah’s justice withholds that supplication. The texts explain one another.",
  },
  {
    t: "h2",
    q: "Who narrated this hadith, and what is its grade?",
    a: "Anas ibn Malik رضي الله عنه. Agreed upon.",
  },
  {
    t: "h2",
    q: "Who was Anas ibn Malik, and when did he die?",
    a: "Anas ibn Malik ibn an-Nadr al-Ansari, the servant of the Messenger of Allah ﷺ. He served him until he passed away, then travelled to Damascus and thence to Basrah, where he died. He was the last of the Sahabah to die in Basrah, in 93 AH.",
  },
  {
    t: "h2",
    q: "What three vows did the men make?",
    a: "One would pray qiyam al-layl forever. One would fast every day and never not fast. One would keep away from women and never marry.",
  },
  {
    t: "h2",
    q: "Why did they think the Prophet’s worship was little?",
    a: "They said: How can we compare ourselves to him, for he has been forgiven his past and future sins?",
  },
  {
    t: "h2",
    q: "How did the Prophet ﷺ describe his own worship?",
    a: "«I am the one among you who fears Allah the most and is most mindful of Him, but I fast and I do not fast; I pray and I sleep; and I marry women.»",
  },
  {
    t: "h2",
    q: "What are the two meanings of «he is not of me»?",
    a: "If he turns away because he dislikes the Sunnah or does not believe in it, he is not a Muslim. Otherwise, he is going against the Prophet’s easy path, in which there is no strictness or hardship.",
  },
  {
    t: "h2",
    q: "What does this hadith teach about moderation?",
    a: "Take a middle path between extremes and heedlessness. If he falls short he misses much good. If he is too strict he tires, cannot continue, and gives up.",
  },
  {
    t: "h2",
    q: "What did an-Nawawi say about «Those who go to extremes are doomed»?",
    a: "It refers to those who are too strict when it is not appropriate to be strict. Ibn Mas‘ud narrated that the Prophet ﷺ said it three times. Muslim.",
  },
  {
    t: "h2",
    q: "What did Malik say about the Sunnah?",
    a: "The Sunnah is the ship of Nuh; whoever boards it will be saved and whoever stays behind will be drowned. Az-Zuhri reported that the earlier scholars said holding fast to the Sunnah is the means of salvation.",
  },
  {
    t: "h2",
    q: "What matters more than a great amount of worship?",
    a: "Following the Sunnah without being heedless or going to extremes, and without doing more or less than it prescribes. The Sunnah is based on balance and moderation. Leaving it can lead to misguidance and innovation.",
  },
  {
    t: "h3",
    q: "Who narrated this hadith, and where is it recorded?",
    a: "Jabir ibn Abdillah رضي الله عنه. Narrated by Muslim.",
  },
  {
    t: "h3",
    q: "Who was Jabir ibn Abdillah?",
    a: "Jabir ibn Abdillah ibn Amr ibn Haram. He went on nineteen campaigns with the Prophet ﷺ and narrated many reports from him. Near the end of his life he had a halaqah in the Prophet’s Mosque. He lost his sight before he died in Madinah.",
  },
  {
    t: "h3",
    q: "What is the likeness in this hadith?",
    a: "A man lights a fire and grasshoppers and moths fall into it while he tries to push them away. The Prophet ﷺ seizes the people’s waistbands to pull them from the Fire, and they try to get away from him.",
  },
  {
    t: "h3",
    q: "What do «grasshoppers», «seizing», and «waistbands» mean here?",
    a: "Grasshoppers: a type of locust. Seizing: holding firmly. Waistbands: where the izar or trousers are secured — a metaphor for his keenness to keep the ummah from sins that lead to the Fire.",
  },
  {
    t: "h3",
    q: "What does the brief explanation say the Prophet ﷺ is doing?",
    a: "He is keen to stop his ummah following whims and desires and falling into sin, while they try to free themselves from him and fall into that.",
  },
  {
    t: "h3",
    q: "How is the person who follows whims like the moth?",
    a: "The moth comes closer to the light until it falls in, and does not think the fire will burn it until then. Likewise, following whims ends in punishment.",
  },
  {
    t: "h3",
    q: "Why is man more in need of warnings than glad tidings?",
    a: "Human nature inclines to immediate gratification and leaves the Hereafter (al-Qiyamah 75:20–21). Al-Furqan 25:1 calls the Prophet a warner. The inclination must be removed from the heart. Adornment comes after cleansing oneself.",
  },
  {
    t: "h3",
    q: "Which verse describes the Prophet’s kindness to the ummah?",
    a: "At-Tawbah 9:128: a Messenger from among yourselves; grievous to him is what you suffer; he is concerned over you; to the believers he is kind and merciful.",
  },
  {
    t: "h4",
    q: "Who narrated the ember hadith, and how was it graded?",
    a: "Anas ibn Malik رضي الله عنه. Narrated by at-Tirmidhi and classed as sahih by al-Albani. The wording about the reward of fifty is narrated by at-Tabarani and also classed as sahih by al-Albani.",
  },
  {
    t: "h4",
    q: "What is the likeness of the one who holds to his religion at that time?",
    a: "He is like the one who is holding onto a smouldering ember — a live coal. His patience is as hard as that grip, and as difficult as the test.",
  },
  {
    t: "h4",
    q: "How did al-Ja‘bari describe that time?",
    a: "Right is denounced and evil is accepted. Intentions are corrupt, treachery and dishonesty prevail, the one on the right path is harmed, and the one on the path of falsehood is honoured.",
  },
  {
    t: "h4",
    q: "What did the Prophet ﷺ say when they asked «or of them»?",
    a: "«No; [like fifty] of you.» The reward is like that of fifty of the Sahabah, not fifty of the later people.",
  },
  {
    t: "h4",
    q: "Does a greater reward mean the later people are better than the Sahabah?",
    a: "No. Ibn Hajar: more reward for a particular deed does not mean superiority. What the Companions gained by seeing the Prophet ﷺ, no one can match.",
  },
  {
    t: "h4",
    q: "Why is the later person’s reward like fifty?",
    a: "Shaykh al-Islam and Ibn Rajab: the Sahabah had people around them who helped them do good. Later generations will not find many helpers, so steadfastness is harder.",
  },
  {
    t: "h4",
    q: "What four qualities did Ibn al-Qayyim describe?",
    a: "They hold to the Sunnah when people leave it. They avoid innovations even if people approve of them. They affirm Allah’s oneness even if most denounce that. They belong only to Allah and His Messenger, not to a shaykh, tareeqah, madhab, or group.",
  },
  {
    t: "h4",
    q: "Why did the Prophet’s foretelling count as a miracle here?",
    a: "Fayd al-Qadeer: he likened an abstract hardship to holding a burning object, and he foretold a matter of the unseen that came to pass.",
  },
  {
    t: "h5",
    q: "Who narrated this hadith, and where is it recorded?",
    a: "Jabir رضي الله عنه. Narrated by Muslim.",
  },
  {
    t: "h5",
    q: "What did the man ask the Prophet ﷺ?",
    a: "If he prays the obligatory prayers, fasts Ramadan, regards as permissible what is permitted and as prohibited what is prohibited, and does nothing more than that, will he be admitted to Paradise?",
  },
  {
    t: "h5",
    q: "What did the Prophet ﷺ reply, and what did the man then swear?",
    a: "He said «Yes.» The man said: By Allah, I shall not do anything more than that.",
  },
  {
    t: "h5",
    q: "What does “Do you think” mean in this hadith?",
    a: "Tell me. When a question begins with “do you think”, it most likely means: Tell me.",
  },
  {
    t: "h5",
    q: "What are “the obligatory prayers” here?",
    a: "The five daily prayers offered every day and night. Allah ﷻ says: {Indeed, prayer has been decreed upon the believers a decree of specified times} [an-Nisa 4:103].",
  },
  {
    t: "h5",
    q: "May a person stop at the obligations and omit every voluntary deed?",
    a: "Yes, that is permissible, and there is no blame on him. He will not be deprived of Paradise. The one who omits them completely, though, misses a great deal of reward and much goodness.",
  },
  {
    t: "h5",
    q: "What did al-Qurtubi say about a city that abandons a Sunnah?",
    a: "If the people of a city unanimously decide to abandon a Sunnah, they should be fought until they go back to it.",
  },
  {
    t: "h5",
    q: "What did an-Nawawi say “regard as prohibited” and “regard as permissible” mean?",
    a: "Regarding as prohibited means avoiding it. Regarding as permissible means doing it, believing it to be permissible (halal). End quote. Refusing what is halal for no shar‘i reason is blameworthy.",
  },
  {
    t: "h6",
    q: "Who narrated this hadith, and where is it recorded?",
    a: "Abu Hurayrah رضي الله عنه. Narrated by Muslim.",
  },
  {
    t: "h6",
    q: "What do the five prayers, Jumuah, and Ramadan expiate?",
    a: "Whatever sins come in between them, if one avoids major sins. From one Jumuah prayer to the next, and from one Ramadan to the next.",
  },
  {
    t: "h6",
    q: "What does takfeer mean here?",
    a: "It is translated as expiation. Literally it means covering, but what is meant here is erasing.",
  },
  {
    t: "h6",
    q: "What is the most likely meaning of a major sin, according to al-Munawi?",
    a: "Any sin for which the Lawgiver imposes a hadd punishment and issues a clear warning. It also includes sins the Prophet ﷺ cursed, sins with a hadd or a warning, and sins that nullify faith or that he disavowed.",
  },
  {
    t: "h6",
    q: "What is the view of Ahl as-Sunnah about the one who commits a major sin?",
    a: "Major sins do not put a person beyond the bounds of faith, and he does not become a disbeliever, so long as he does not regard the action as permissible. If he dies persisting in them, he will not abide forever in Hell.",
  },
  {
    t: "h6",
    q: "How are minor sins and major sins lifted?",
    a: "Minor sins may be expiated by righteous deeds. Major sins require specific repentance, or the mercy and grace of Allah ﷻ. Rights owed to people must still be restored.",
  },
  {
    t: "h6",
    q: "If prayer, Jumuah, or Ramadan finds no minor sins left, what happens?",
    a: "It is recorded as good deeds (hasanat) and raises the doer in status.",
  },
  {
    t: "h6",
    q: "What did Salman al-Farisi say about the five prayers?",
    a: "Offer the five daily prayers regularly, for they are expiations for the deeds of these physical faculties, so long as they do not commit major sins.",
  },
  {
    t: "h7",
    q: "Who narrated this hadith, and where is it recorded?",
    a: "Abdullah ibn Mas‘ud رضي الله عنه. Agreed upon.",
  },
  {
    t: "h7",
    q: "What did the Prophet ﷺ tell the young men?",
    a: "Whoever is able should get married, because it is more effective in lowering the gaze and guarding chastity. Whoever cannot afford it should fast.",
  },
  {
    t: "h7",
    q: "Who was Abdullah ibn Mas‘ud?",
    a: "One of the senior Sahabah. He migrated to Ethiopia twice, was present at Badr, Uhud, al-Khandaq and the other campaigns, and learned seventy surahs directly from the Prophet ﷺ. Umar sent him to Kufah. He died in 32 AH.",
  },
  {
    t: "h7",
    q: "What does shabab mean, and what does “able” include?",
    a: "Shabab is the plural of shabb: one who has reached puberty and has not passed thirty. Other views say nineteen to thirty-four, or thirty to forty. Being able means affording the mahr, maintenance and accommodation, and it includes physical desire and the inclination to marry.",
  },
  {
    t: "h7",
    q: "Why did the Prophet ﷺ prescribe fasting for the one who cannot marry?",
    a: "Fasting is a protection. It is worship, it weakens desire by abstaining from food and drink, and it constricts the path of the blood through which the Shaytan may move. The word translated “castration” originally refers to removing desire in male animals.",
  },
  {
    t: "h7",
    q: "Why did this hadith not mention children?",
    a: "Ibn Uthaymeen: he was addressing young men, whose main concern is lowering the gaze and guarding chastity. He did not mention the benefit of many children in this instance, because those two matters are what matter most for them.",
  },
  {
    t: "h7",
    q: "What two benefits come from explaining the reason for a ruling?",
    a: "It highlights that Islam’s rulings take care of people’s interests, and it reassures the listener so that he has a stronger motive to adhere to the ruling.",
  },
  {
    t: "h7",
    q: "How should the Prophet’s words be interpreted?",
    a: "In accordance with the shar‘i tradition, because that is the meaning he ﷺ intended. A person’s words are otherwise interpreted according to his own customs.",
  },
  {
    t: "h8",
    q: "Who narrated this hadith, and where is it recorded?",
    a: "Abu Saeed al-Khudri رضي الله عنه. Narrated by Muslim.",
  },
  {
    t: "h8",
    q: "What did the Prophet ﷺ say about this world and women?",
    a: "This world is sweet and green, and Allah will make you successive generations therein, and He will see what you do. Beware of this world and beware of women, for the first fitnah among the Children of Israel had to do with women.",
  },
  {
    t: "h8",
    q: "Who was Abu Saeed al-Khudri?",
    a: "Sa‘d ibn Malik ibn Sinan al-Ansari, one of the youngest and best of the Sahabah. He narrated a great deal, and he was a faqeeh, mujtahid and mufti. He was present at al-Khandaq and the campaigns after it.",
  },
  {
    t: "h8",
    q: "What do “sweet and green” and “successive generations” mean?",
    a: "Sweet in taste and pleasant in appearance. Successive generations means successors who inherit the earth, after which Allah sees whether they obey Him or follow their whims.",
  },
  {
    t: "h8",
    q: "What does «Beware of this world» mean?",
    a: "Do what you are enjoined to do, refrain from what you are forbidden to do, and do not be deceived by the sweetness and beauty of this world. Allah says: {so let not the worldly life delude you} [Luqman 31:33].",
  },
  {
    t: "h8",
    q: "What two other warnings does the lesson quote?",
    a: "«Among the things that I fear for you after I am gone is what you will acquire of transient worldly gains and glamour.» And: «I am not leaving behind any trial more harmful for men than women.» Both are agreed upon.",
  },
  {
    t: "h8",
    q: "What is this world in comparison with the Hereafter?",
    a: "Nothing in comparison with it. It is a passageway, and a place to sow now and reap in the Hereafter.",
  },
  {
    t: "h8",
    q: "Why did the Prophet ﷺ warn against the fitnah of women in particular?",
    a: "It is the greatest and strongest of trials. They are the traps and nets of the Shaytan. The one who takes precautions and seeks Allah’s help can be spared it.",
  },
];

export const HADITH2_QUIZ = [
  {
    t: "h1",
    q: "This hadith qudsi is narrated by:",
    opts: [
      "Ibn Mas‘ud, in Muslim only",
      "Abu Hurayrah, in al-Bukhari",
      "Umar, in at-Tirmidhi",
      "Aisha, in Abu Dawud",
    ],
    ans: 1,
    fb: "Abu Hurayrah رضي الله عنه narrated it, and al-Bukhari recorded it.",
  },
  {
    t: "h1",
    q: "«Whoever shows enmity to a close friend of Mine» means:",
    opts: [
      "Whoever disagrees with him in a fiqh matter",
      "Whoever takes him as an enemy",
      "Whoever fails to visit him",
      "Whoever does not narrate his hadiths",
    ],
    ans: 1,
    fb: "Enmity here means taking the wali as an enemy.",
  },
  {
    t: "h1",
    q: "Which deeds are dearer to Allah?",
    opts: [
      "Supererogatory deeds, because they are extra",
      "The religious duties Allah has enjoined",
      "Deeds done only in the last third of the night",
      "Deeds that people can see",
    ],
    ans: 1,
    fb: "Obligations — individual and communal — are more beloved than the nafilah.",
  },
  {
    t: "h1",
    q: "The more likely meaning of «I will be his hearing…» is:",
    opts: [
      "Allah becomes the person’s limbs in a literal sense",
      "Allah guides him in how he uses his hearing, sight, hand and foot",
      "The wali no longer needs to use his faculties",
      "The phrase has no meaning we can affirm",
    ],
    ans: 1,
    fb: "The second interpretation — guidance in how the faculties are used — is more likely to be correct.",
  },
  {
    t: "h1",
    q: "Allah’s hesitation about taking the believer’s soul is:",
    opts: [
      "Doubt about what is best, or about His ability",
      "A quality to be ascribed to Allah in every action",
      "Mercy towards this believing slave, in this specific context",
      "A dislike of the believer himself",
    ],
    ans: 2,
    fb: "Ibn Uthaymeen: it is mentioned for this issue only, and it is out of mercy. «To hurt him» means to do what he dislikes.",
  },
  {
    t: "h1",
    q: "Ibn Taymiyyah said a wali of Allah is:",
    opts: [
      "Whoever walks on water or flies in the air",
      "Whoever people gather around and seek needs from",
      "A believer who is mindful of Allah",
      "Only the Companions",
    ],
    ans: 2,
    fb: "Whoever is a believer who is mindful of Allah. The true awliya obey Allah and adhere to the Sunnah.",
  },
  {
    t: "h1",
    q: "If someone is a proven wali, may he be taken as an intermediary with Allah?",
    opts: [
      "Yes, one may call upon him after calling upon Allah",
      "Yes, but only to ask him to pray, never to worship him",
      "No. There is no intermediary between Allah and His slaves",
      "Only after his death",
    ],
    ans: 2,
    fb: "There is no intermediary between Allah and His slaves. Calling on the awliya instead of Allah is the path of the ignorant.",
  },
  {
    t: "h1",
    q: "Taking the awliya of Allah as enemies is a major sin because:",
    opts: [
      "The scholars listed it in a book of major sins only",
      "It carries a specific punishment: Allah declares war on that person",
      "It is disliked, though the hadith does not warn against it",
      "It is equal to missing a supererogatory prayer",
    ],
    ans: 1,
    fb: "A specific punishment for a specific action shows that the action is a major sin.",
  },
  {
    t: "h1",
    q: "Allah also speaks of a war from Him and His Messenger regarding:",
    opts: ["Backbiting", "Riba (usury)", "Missing qiyaam", "Wearing silk"],
    ans: 1,
    fb: "Al-Baqarah 2:279: be informed of a war from Allah and His Messenger if riba is not given up.",
  },
  {
    t: "h1",
    q: "When Ibn Mas‘ud asked which deeds are dearest to Allah, the answer was:",
    opts: [
      "Jihad in Allah’s path",
      "Prayer offered on time",
      "Hajj",
      "Night prayer",
    ],
    ans: 1,
    fb: "«Prayer offered on time.» Narrated by al-Bukhari and Muslim. By type, prayer is dearer than other obligatory actions.",
  },
  {
    t: "h1",
    q: "The word «until» in «until I love him» indicates:",
    opts: [
      "That love is impossible to reach",
      "The goal: abundant nawafil are a means to Allah’s love",
      "That obligations no longer matter after love",
      "A fixed number of prayers",
    ],
    ans: 1,
    fb: "«Until» refers to the goal. Abundant supererogatory deeds are a means of attaining Allah’s love.",
  },
  {
    t: "h1",
    q: "Allah does not answer a request, even from someone of many nawafil, when it involves:",
    opts: [
      "Asking for guidance",
      "Sin, severing kinship, or wronging someone",
      "Asking more than once",
      "A worldly need of any kind",
    ],
    ans: 1,
    fb: "Allah’s justice withholds a supplication that involves sin, cutting kinship, or wronging another. The texts explain one another.",
  },
  {
    t: "h2",
    q: "This hadith is narrated by Anas and is:",
    opts: ["In at-Tirmidhi only", "Agreed upon", "Da‘if", "A hadith qudsi in al-Bukhari only"],
    ans: 1,
    fb: "Anas ibn Malik رضي الله عنه narrated it, and it is agreed upon.",
  },
  {
    t: "h2",
    q: "The three men vowed to:",
    opts: [
      "Pray only Jumu‘ah, fast Mondays, and marry four wives",
      "Pray all night forever, fast every day, and never marry",
      "Leave Madinah, give away all their wealth, and live in seclusion",
      "Stop praying, stop fasting, and stop marrying",
    ],
    ans: 1,
    fb: "Qiyam forever, fasting every day without a break, and keeping away from women.",
  },
  {
    t: "h2",
    q: "The Prophet ﷺ answered them by saying that he:",
    opts: [
      "Fears Allah the most, yet he fasts and does not fast, prays and sleeps, and marries",
      "Has been forbidden to fast, pray at night, or marry",
      "Does more worship than they vowed, because his sins are forgiven",
      "Told them their vows were the best form of worship",
    ],
    ans: 0,
    fb: "He is the most mindful of Allah, and his way is balance: fasting and not fasting, praying and sleeping, and marrying.",
  },
  {
    t: "h2",
    q: "«He is not of me», when someone turns away because he dislikes the Sunnah, means:",
    opts: [
      "He has committed a minor mistake only",
      "He is not a Muslim",
      "He is still following an easy path",
      "He may invent a new wird to replace the Sunnah",
    ],
    ans: 1,
    fb: "Disliking the Sunnah, or not believing in it, takes a person out of Islam. Otherwise, the phrase means he has left the easy path.",
  },
  {
    t: "h2",
    q: "Moderation in this hadith means:",
    opts: [
      "Not taking religion seriously, and following odd weak views",
      "A middle path between going to extremes and being heedless",
      "Doing as much worship as the body can bear, without rest",
      "Preferring coarse food and rough wool in every case",
    ],
    ans: 1,
    fb: "The middle path. Falling short misses good. Being too strict leads to exhaustion and giving up.",
  },
  {
    t: "h2",
    q: "Refusing good food and comfortable clothing, and choosing coarse food and rough wool, is:",
    opts: [
      "The Sunnah the Prophet ﷺ commanded these men to follow",
      "Refuted by this hadith and by al-A‘raf 7:32",
      "Required of anyone who wants to be a wali",
      "The meaning of consistency in deeds",
    ],
    ans: 1,
    fb: "The hadith refutes refusing what Allah has permitted. Extremes in luxury and extremes in hardship both pull a person from the Sunnah.",
  },
  {
    t: "h2",
    q: "«Those who go to extremes are doomed» refers, according to an-Nawawi, to:",
    opts: [
      "Those who are too strict when it is not appropriate to be strict",
      "Those who follow the Sunnah of marrying",
      "Those who sleep part of the night",
      "Those who eat lawful food",
    ],
    ans: 0,
    fb: "Ibn Mas‘ud narrated that the Prophet ﷺ said it three times. Muslim. An-Nawawi explained it as undue strictness.",
  },
  {
    t: "h2",
    q: "Malik compared the Sunnah to:",
    opts: [
      "A wird one may invent",
      "The ship of Nuh: whoever boards it is saved, and whoever stays behind drowns",
      "A burden only the prophets can carry",
      "Coarse clothing and constant fasting",
    ],
    ans: 1,
    fb: "The Sunnah is the ship of salvation. Az-Zuhri reported that the earlier scholars called holding fast to it the means of salvation.",
  },
  {
    t: "h3",
    q: "This hadith is narrated by Jabir and recorded by:",
    opts: ["al-Bukhari only", "Muslim", "Ahmad only", "at-Tirmidhi, classed da‘if"],
    ans: 1,
    fb: "Jabir ibn Abdillah رضي الله عنه narrated it, and Muslim recorded it.",
  },
  {
    t: "h3",
    q: "In the likeness, the Prophet ﷺ is like:",
    opts: [
      "A moth drawn to the fire",
      "A man who lights a fire and tries to push the moths away",
      "A man who leaves the insects to fall in",
      "Someone trying to escape the one who warns him",
    ],
    ans: 1,
    fb: "He seizes their waistbands to pull them from the Fire, while they try to get away from him.",
  },
  {
    t: "h3",
    q: "«Waistbands» in this hadith is a metaphor for:",
    opts: [
      "The clothing of the people of Hell",
      "His keenness to keep the ummah from sins that lead to the Fire",
      "A type of locust",
      "Fleeing from the Sunnah",
    ],
    ans: 1,
    fb: "It is where the izar or trousers are secured. Seizing them means holding firmly, out of concern.",
  },
  {
    t: "h3",
    q: "The one who follows whims is like the moth because:",
    opts: [
      "He comes closer until he falls into punishment, without seeing the harm in time",
      "He is pushed into the fire against his will",
      "He lights the fire for other people",
      "He prefers the Hereafter over what is immediate",
    ],
    ans: 0,
    fb: "Moths draw near the light until they fall in, and do not think the fire will burn them until then.",
  },
  {
    t: "h3",
    q: "Man needs warnings more than glad tidings because:",
    opts: [
      "Allah never mentions mercy",
      "Human nature loves the immediate and leaves the Hereafter",
      "The Prophet ﷺ was sent only as a warner, never with glad tidings",
      "Glad tidings have no place in the Quran",
    ],
    ans: 1,
    fb: "Al-Qiyamah 75:20–21. Al-Furqan 25:1 calls him a warner to the worlds. The inclination to the immediate has to be removed from the heart.",
  },
  {
    t: "h3",
    q: "At-Tawbah 9:128 shows that the Prophet ﷺ:",
    ans: 2,
    opts: [
      "Is grieved only by the suffering of the believers, and not concerned for others",
      "Was sent from outside the ummah",
      "Is concerned over his people, and to the believers he is kind and merciful",
      "Leaves people to fall into the Fire if they pull away",
    ],
    fb: "A Messenger from among yourselves. Grievous to him is what you suffer. He is concerned over you, and to the believers he is kind and merciful.",
  },
  {
    t: "h4",
    q: "The hadith of the smouldering ember is narrated by Anas and:",
    opts: [
      "Recorded by Muslim only",
      "Recorded by at-Tirmidhi and classed sahih by al-Albani",
      "Classed da‘if by al-Albani",
      "A hadith qudsi in al-Bukhari",
    ],
    ans: 1,
    fb: "At-Tirmidhi, classed sahih by al-Albani. The reward of fifty is in at-Tabarani, also classed sahih by al-Albani.",
  },
  {
    t: "h4",
    q: "«A smouldering ember» means:",
    opts: ["A dying sun", "A live coal", "A lamp in the mosque", "The reward of fifty"],
    ans: 1,
    fb: "A live coal. Holding on to it is a picture of how hard the patience is.",
  },
  {
    t: "h4",
    q: "When they asked whether the reward was like fifty of the later people, he said:",
    opts: [
      "«Yes, of them»",
      "«No; [like fifty] of you»",
      "«Like one of you»",
      "«Greater than all of the Sahabah in rank»",
    ],
    ans: 1,
    fb: "Fifty of you — the Companions — not fifty of the later generations.",
  },
  {
    t: "h4",
    q: "Ibn Hajar said a greater reward for a deed:",
    opts: [
      "Means the later person is better than every Companion",
      "Does not mean superiority over the Sahabah",
      "Cancels the reward of seeing the Prophet ﷺ",
      "Applies only to night prayer",
    ],
    ans: 1,
    fb: "Variation in reward concerns particular deeds. What the Companions gained by seeing him, no one can match.",
  },
  {
    t: "h4",
    q: "Divine help in this lesson is:",
    opts: [
      "The same for every person, whatever the test",
      "Commensurate with the challenges one faces",
      "Withheld from the one who is patient",
      "Only for the Sahabah",
    ],
    ans: 1,
    fb: "The patient one reaches high degrees, and his Lord helps him in what He loves. Help matches the size of the trial.",
  },
  {
    t: "h4",
    q: "Ibn al-Qayyim said those who hold the ember:",
    opts: [
      "Follow a shaykh, tareeqah, or madhab as their allegiance",
      "Belong only to Allah and His Messenger, and hold the Sunnah when people leave it",
      "Are praised by the majority and never criticised",
      "Introduce new celebrations when the Sunnah is hard",
    ],
    ans: 1,
    fb: "They hold the Sunnah, avoid innovations, affirm tawhid even if denounced, and belong only to Allah and His Messenger. People often call them odd or innovators.",
  },
  {
    t: "h5",
    q: "This narration of Jabir is recorded by:",
    opts: ["Al-Bukhari only", "Muslim", "At-Tirmidhi, classed as sahih by al-Albani", "At-Tabarani"],
    ans: 1,
    fb: "It was narrated from Jabir رضي الله عنه and recorded by Muslim.",
  },
  {
    t: "h5",
    q: "When the man asked if the obligations alone would admit him to Paradise, the Prophet ﷺ said:",
    opts: ["No, unless he adds the Sunnahs", "«Yes.»", "Only if he also pays zakat and performs Hajj", "Ask me again after a year"],
    ans: 1,
    fb: "He said «Yes.» The man then swore: By Allah, I shall not do anything more than that.",
  },
  {
    t: "h5",
    q: "“Do you think” in this question most likely means:",
    opts: ["Give me your personal opinion", "Tell me", "I already know the answer", "Do you doubt this ruling?"],
    ans: 1,
    fb: "Every time a question begins with “do you think”, it is most likely that what is meant is: Tell me.",
  },
  {
    t: "h5",
    q: "“The obligatory prayers” in this hadith are:",
    opts: [
      "Tahajjud and the two rak‘ahs of Fajr",
      "The five daily prayers, decreed at specified times",
      "Friday prayer only",
      "Whatever extra prayers a person chooses",
    ],
    ans: 1,
    fb: "They are the five daily prayers offered every day and night, as in an-Nisa 4:103.",
  },
  {
    t: "h5",
    q: "Al-Qurtubi said that if the people of a city unanimously abandon a Sunnah:",
    opts: [
      "Each person is left to his own choice, as in this hadith",
      "They should be fought until they go back to it",
      "The Sunnah becomes obligatory on every individual",
      "They lose the reward of the five prayers",
    ],
    ans: 1,
    fb: "An individual may omit voluntary actions. A city that agrees together to abandon a Sunnah is a different case: they should be fought until they return to it.",
  },
  {
    t: "h5",
    q: "A person who refuses what is permissible for no shar‘i reason:",
    opts: [
      "Is praiseworthy, because he is stricter",
      "Is blameworthy, and that is not praiseworthy",
      "Has left Islam",
      "Must be fought until he uses what is halal",
    ],
    ans: 1,
    fb: "The man said he would regard as permissible what is permitted. Refusing the halal for no shar‘i reason is blameworthy. An-Nawawi: regarding as permissible means doing it, believing it to be halal.",
  },
  {
    t: "h6",
    q: "This narration of Abu Hurayrah is recorded by:",
    opts: ["Al-Bukhari only", "Muslim", "At-Tirmidhi", "At-Tabarani"],
    ans: 1,
    fb: "It was narrated from Abu Hurayrah رضي الله عنه and recorded by Muslim.",
  },
  {
    t: "h6",
    q: "The five prayers, Jumuah, and Ramadan are an expiation:",
    opts: [
      "For major sins, with no further condition",
      "For whatever comes between them, if one avoids major sins",
      "Only for the sins of the previous year",
      "Only if a person also fasts Arafah and Ashura",
    ],
    ans: 1,
    fb: "They expiate whatever comes in between them, if one avoids major sins.",
  },
  {
    t: "h6",
    q: "Takfeer, translated here as expiation, means:",
    opts: [
      "Covering, and what is meant is erasing the sins",
      "Adding extra reward without removing the sin",
      "Declaring the sinner a disbeliever",
      "Delaying the sin until the Hereafter",
    ],
    ans: 0,
    fb: "Literally takfeer means covering, but what is meant here is erasing.",
  },
  {
    t: "h6",
    q: "Ahl as-Sunnah say that a person who commits a major sin:",
    opts: [
      "Leaves the faith as soon as he commits it",
      "Does not become a disbeliever, so long as he does not regard it as permissible, and will not abide forever in Hell",
      "Is forgiven automatically, with no need to repent",
      "Must be fought until he repents",
    ],
    ans: 1,
    fb: "Major sins do not put a person beyond the bounds of faith unless he regards them as permissible. If he dies persisting in them, he will not abide forever in Hell.",
  },
  {
    t: "h6",
    q: "Al-Qadi Iyad said major sins are expiated by:",
    opts: [
      "The five daily prayers alone",
      "Repentance, or the mercy and grace of Allah",
      "Jumuah, even if the person persists in them",
      "Avoiding only minor sins",
    ],
    ans: 1,
    fb: "Forgiveness in this hadith applies so long as no major sin is committed. Major sins are lifted by repentance or by the mercy and grace of Allah ﷻ.",
  },
  {
    t: "h6",
    q: "If these acts of worship find no minor sins left to expiate:",
    opts: [
      "They are wasted",
      "They are recorded as good deeds and raise the person in status",
      "They are stored for a future major sin",
      "They replace the obligation to repent",
    ],
    ans: 1,
    fb: "Each of these acts may expiate minor sins. If none remain, it is recorded as hasanat and raises the doer in status.",
  },
  {
    t: "h7",
    q: "This narration of Abdullah ibn Mas‘ud is:",
    opts: ["Recorded by Muslim only", "Agreed upon", "Recorded by at-Tirmidhi only", "A hadith qudsi"],
    ans: 1,
    fb: "It was narrated that Abdullah ibn Mas‘ud رضي الله عنه said it, and it is agreed upon.",
  },
  {
    t: "h7",
    q: "The young man who is able is told to:",
    opts: [
      "Fast and delay marriage until he is forty",
      "Get married, because it lowers the gaze and guards chastity",
      "Avoid marriage so that he can focus on worship",
      "Marry only after he already has children",
    ],
    ans: 1,
    fb: "Whoever among you is able to, let him get married, for it is more effective in lowering the gaze and guarding one’s chastity.",
  },
  {
    t: "h7",
    q: "Whoever cannot afford marriage should:",
    opts: [
      "Give up the idea of chastity",
      "Fast, for it will restrain desire",
      "Wait until the Prophet ﷺ mentions children",
      "Treat marriage as disliked",
    ],
    ans: 1,
    fb: "Whoever cannot afford it should fast. Fasting weakens desire and is a protection, as well as an act of worship.",
  },
  {
    t: "h7",
    q: "“Able” in this hadith includes:",
    opts: [
      "Only a wish to get married, with no means",
      "The mahr, maintenance and accommodation, and also physical desire",
      "Only being older than forty",
      "Already having children",
    ],
    ans: 1,
    fb: "Being able means affording the expenses of marriage, and it also includes physical desire and the inclination to get married. Both physical and financial ability are meant.",
  },
  {
    t: "h7",
    q: "Ibn Uthaymeen said children are not mentioned here because:",
    opts: [
      "Having children is not a benefit of marriage",
      "The Prophet ﷺ was addressing young men, for whom lowering the gaze and guarding chastity matter most",
      "Marriage in Islam is only for worship, not family",
      "The Sahabah were forbidden to have children",
    ],
    ans: 1,
    fb: "Marriage does bring children, but he was addressing young men, and what is most important for them is lowering the gaze and guarding chastity.",
  },
  {
    t: "h7",
    q: "Because marriage is prescribed to lower the gaze and guard chastity:",
    opts: [
      "Anything that leads the other way must be forbidden",
      "Looking freely is allowed once a person intends to marry",
      "The reason for a ruling should be hidden from people",
      "Fasting replaces marriage for the one who can afford it",
    ],
    ans: 0,
    fb: "That which leads to letting the gaze wander or falling into immoral deeds must be forbidden, since marriage was prescribed for the opposite.",
  },
  {
    t: "h8",
    q: "This narration of Abu Saeed al-Khudri is recorded by:",
    opts: ["Al-Bukhari only", "Muslim", "At-Tirmidhi", "Agreed upon"],
    ans: 1,
    fb: "It was narrated from Abu Saeed al-Khudri رضي الله عنه and recorded by Muslim.",
  },
  {
    t: "h8",
    q: "“Sweet and green” describes this world as:",
    opts: [
      "Bitter in taste and ugly in appearance",
      "Sweet in its taste and pleasant in its appearance",
      "Equal to the Hereafter in worth",
      "A place with no trial in it",
    ],
    ans: 1,
    fb: "These are two descriptions: sweet in taste, and pleasant in appearance.",
  },
  {
    t: "h8",
    q: "«Beware of this world» means:",
    opts: [
      "Leave all work and own nothing",
      "Do what is enjoined, leave what is forbidden, and do not be deceived by its sweetness",
      "Enjoy it freely, since Allah made you successors",
      "Fear only women, not the world itself",
    ],
    ans: 1,
    fb: "Do what you are enjoined to do and refrain from what you are forbidden to do, and do not be deceived by the sweetness and beauty of this world. See Luqman 31:33.",
  },
  {
    t: "h8",
    q: "The first fitnah among the Children of Israel:",
    opts: [
      "Had to do with women",
      "Had to do with gold and silver only",
      "Came after this ummah",
      "Was a trial the Prophet ﷺ said would never return",
    ],
    ans: 0,
    fb: "The first fitnah (trial) among the Children of Israel had to do with women.",
  },
  {
    t: "h8",
    q: "The Prophet ﷺ said he was not leaving behind any trial more harmful for men than:",
    opts: ["Poverty", "Women", "Sickness", "Disagreement about fiqh"],
    ans: 1,
    fb: "«I am not leaving behind any trial more harmful for men than women.» Agreed upon.",
  },
  {
    t: "h8",
    q: "Compared with the Hereafter, this world is:",
    opts: [
      "The place of lasting reward",
      "A passageway, where a person sows now and reaps in the Hereafter",
      "Greater than the Hereafter in worth",
      "Free of any test",
    ],
    ans: 1,
    fb: "This world is nothing in comparison with the Hereafter. It is a passageway and a place to sow now and reap in the Hereafter.",
  },
];

export function hadith2CoursePath() {
  return HADITH2_META.path;
}

export function hadith2StudyPath(lessonId) {
  const base = `${HADITH2_META.path}/study`;
  return lessonId ? `${base}?lesson=${encodeURIComponent(lessonId)}` : base;
}

export function hadith2Banner() {
  return {
    code: "Hadith · Self-paced",
    title: HADITH2_META.name,
    subtitle: HADITH2_META.tagline,
    meta: [
      { label: "Narrations", value: "21" },
      { label: "Lessons", value: String(HADITH2_STUDY_LESSONS.length) },
      { label: "Practice", value: "Flashcards · Quiz" },
    ],
  };
}

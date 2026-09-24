/**
 * Aqeedah 2 — Tawhid al-Uluhiyah & Asma wa’s-Sifat
 *
 * How to add notes:
 * 1. Find the lesson in AQEEDAH2_UNITS and replace `draft: true` + comingSoon section
 *    with real `sections` (see types below).
 * 2. Optional: add flashcards / quiz items with the same topic id.
 *
 * Section types:
 *   heading      { type, title, kicker? }
 *   intro        { type, text }
 *   definition   { type, label, title?, body }
 *   split        { type, items: [{ label, title?, body }] }
 *   ayah         { type, text, ref }
 *   note         { type, tone: "info"|"benefit"|"warning", title?, body }
 *   cards        { type, items: [{ title, body }] }
 *   pillars      { type, title?, items: [{ n, title, body }] }
 *   evidence     { type, items: [{ n, lead?, body?, text, ref, blocks? }] }
 *   list         { type, ordered?, items: [string | { title, body }] }
 *   roadmap      { type, items: [{ title, subtitle? }] }
 *   activities   { type, title?, items: [string] }
 *   pair         { type, items: [{ title, body, tone? }] }
 *   conditions   { type, items: [{ n, title, body, blocks? }] }
 *   conditionMap { type, title?, items: [string] }
 *   qa           { type, question, answer }
 *   trueFalse    { type, n?, prompt, items: [{ letter, text }] }
 *   comingSoon   { type, title?, body? }
 */

export const AQEEDAH2_META = {
  id: "aqeedah-2",
  name: "Aqeedah 2",
  nameAr: "العقيدة ٢",
  tagline: "Tawhid al-Uluhiyah, the word of Tawhid, and the names and attributes of Allah.",
  description:
    "This semester we will study Tawhid al-Uluhiyah (Oneness in Divinity) and its evidences, the meaning of “Laa ilaaha illa Allah”, worship and its pillars, Tawhid al-Asma wa’s-Sifat, the categories of people regarding it, transgression regarding the names and attributes, fundamentals and principles of dealing with them, and the fruits of believing in the names and attributes of Allah. Allah is the Granter of success.",
  path: "/aqeedah-2",
  category: "Aqeedah",
  meta: "3 units · Notes, flashcards & quiz",
  accent: "gold",
  topics: [
    "Tawhid al-Uluhiyah",
    "Laa ilaaha illa Allah",
    "Names & attributes",
  ],
  units: 3,
};

const comingSoon = (title) => [
  {
    type: "comingSoon",
    title,
    body: "Notes for this lesson will be added here. Keep the same lesson id so progress is preserved.",
  },
];

export const AQEEDAH2_UNITS = [
  {
    id: "unit-1",
    title: "Unit 1 — Tawhid al-Uluhiyah",
    titleAr: "توحيد الألوهية",
    lessons: [
      {
        id: "unit-map",
        title: "In this unit we will study",
        icon: "1",
        sections: [
          {
            type: "intro",
            text: "Tawhid al-uluhiyah is oneness of divinity — worshipping Allah Alone. This unit walks through its meaning, evidences, importance, the word of Tawhid, and a common mistake about Tawhid ar-rububiyah.",
          },
          {
            type: "roadmap",
            items: [
              {
                title: "Tawhid al-uluhiyah",
                subtitle: "Oneness of divinity, or worshipping Allah Alone",
              },
              {
                title: "The meaning of Tawhid al-uluhiyah",
                subtitle: "Oneness of divinity, or worshipping Allah Alone",
              },
              {
                title: "The evidences for Tawhid al-uluhiyah",
                subtitle: "Oneness of divinity, or worshipping Allah Alone",
              },
              {
                title: "The importance of Tawhid al-uluhiyah",
                subtitle: "Oneness of divinity, or worshipping Allah Alone",
              },
              {
                title: "The meaning of the word of Tawhid",
                subtitle: "“Laa ilaaha illa Allah”",
              },
              {
                title: "The conditions of the word of Tawhid",
                subtitle: "“Laa ilaaha illa Allah”",
              },
              {
                title: "A common mistake about Tawhid ar-rububiyah",
                subtitle: "Rububiyah is not the ultimate aim of the messengers",
              },
            ],
          },
        ],
      },
      {
        id: "meaning",
        title: "The meaning of Tawhid al-uluhiyah",
        icon: "2",
        sections: [
          {
            type: "heading",
            kicker: "Tawhid al-uluhiyah",
            title: "The meaning of Tawhid al-uluhiyah (oneness of divinity, or worshipping Allah Alone)",
          },
          {
            type: "split",
            items: [
              {
                label: "In linguistic terms",
                body: "Uluhiyah comes from the root aliha, meaning worship. From that stems the [variant] recitation of Ibn Abbas رضي الله عنهما of the verse {and abandon you and your gods [wa yadharaka wa ilaahataka]} [al-A‘raf 7:127]. Ibn Abbas recited the word aalihataka (“your gods”) as ilaahataka, meaning “your worship”.",
              },
              {
                label: "From the same root",
                body: "From the same root comes the divine name Allah, and its root ilaah, which refers to one who is worshipped, as well as the word uluhiyah, which refers to worship.",
              },
            ],
          },
          {
            type: "definition",
            label: "In Islamic terminology",
            body: "Uluhiyah means directing to Allah Alone all the acts of worship that His slaves perform. In other words: directing and devoting worship only to Allah ﷻ.",
          },
          {
            type: "heading",
            title: "Acts of worship that belong to Allah Alone",
          },
          {
            type: "cards",
            items: [
              { title: "Supplication", body: "Du‘a — calling upon Allah." },
              { title: "Vows", body: "Nadhr — making a vow to Allah." },
              { title: "Sacrifices", body: "Offering sacrifice for Allah Alone." },
              { title: "Hope", body: "Hoping in Allah, not in creation." },
              { title: "Love", body: "Loving Allah with the love of worship." },
              { title: "Fear", body: "Fearing Allah as an act of worship." },
              { title: "Trust & reliance", body: "Tawakkul — relying on Allah." },
              { title: "Seeking refuge", body: "Turning to Allah for protection." },
              { title: "Seeking help", body: "In desperate need and in daily life." },
            ],
          },
          {
            type: "note",
            tone: "warning",
            title: "Worship is not directed to creation",
            body: "The individual should not direct his worship to anyone other than Allah ﷻ — whether an angel, a prophet, a wali (“saint”), a shaykh, an idol, a statue, or any creature created by Allah ﷻ.",
          },
          {
            type: "heading",
            title: "Other names for this type of Tawhid",
          },
          {
            type: "cards",
            items: [
              {
                title: "Tawhid al-amal",
                body: "Oneness of action — devoting one’s actions solely to Allah.",
              },
              {
                title: "Tawhid al-qasd",
                body: "Oneness of aims and goals.",
              },
              {
                title: "Tawhid al-iradah wa’t-talab",
                body: "Oneness of will and purpose.",
              },
            ],
          },
          {
            type: "note",
            tone: "benefit",
            title: "The sincere aim",
            body: "It is based on having a sincere aim in all that one does: to seek the pleasure of Allah ﷻ Alone, with no partner or associate.",
          },
          {
            type: "definition",
            label: "Therefore, what is meant by Tawhid al-uluhiyah is",
            body: "To direct to Allah ﷻ Alone all types of worship — both inward acts of worship such as supplication, seeking help, fear, love, hope, trust, vows, obedience and so on, and seeking Him and worshipping Him Alone when doing visible acts of worship, such as prayer, giving zakat, fasting, Hajj, upholding ties of kinship, enjoining what is right and forbidding what is wrong, and so on.",
          },
          {
            type: "heading",
            title: "Therefore, Tawhid al-uluhiyah is based on",
          },
          {
            type: "pillars",
            items: [
              {
                n: 1,
                title: "Sincerity (ikhlaas)",
                body: "Directing one’s intention, aim and goal solely to Allah. This is called ikhlaas or sincerity.",
              },
              {
                n: 2,
                title: "Calling upon Allah Alone",
                body: "Calling upon Allah Alone and asking of Him Alone.",
              },
              {
                n: 3,
                title: "Loving Allah Alone",
                body: "Loving Allah Alone and taking Him Alone as an ally and close friend.",
              },
            ],
          },
        ],
      },
      {
        id: "evidences",
        title: "The evidences for Tawhid al-uluhiyah",
        icon: "3",
        sections: [
          {
            type: "heading",
            title: "Evidence for Tawhid al-uluhiyah (worshipping Allah Alone)",
          },
          {
            type: "intro",
            text: "There is a great deal of evidence for Tawhid al-uluhiyah (worshipping Allah Alone), including the following:",
          },
          {
            type: "evidence",
            items: [
              {
                n: 1,
                lead: "The verse in which Allah ﷻ says:",
                text: "And We sent not before you any messenger except that We revealed to him that, “There is no god worthy of worship except Me, so worship Me.”",
                ref: "al-Anbiya 21:25",
              },
              {
                n: 2,
                lead: "The verse in which Allah ﷻ says:",
                text: "And We certainly sent into every nation a messenger, [saying], “Worship Allah and avoid Taghut.”",
                ref: "an-Nahl 16:36",
              },
              {
                n: 3,
                lead: "The verse in which Allah ﷻ says:",
                text: "And We had certainly sent Noah to his people, and he said, “O my people, worship Allah; you have no god other than Him; then will you not fear Him?”",
                ref: "al-Mu’minun 23:23",
              },
              {
                n: 4,
                lead: "The verse in which Allah ﷻ says concerning Hud عليه السلام:",
                text: "And We sent among them a messenger from themselves, [saying], “Worship Allah; you have no god other than Him; then will you not fear Him?”",
                ref: "al-Mu’minun 23:32",
              },
              {
                n: 5,
                lead: "The verse in which Allah ﷻ says:",
                text: "Allah witnesses that there is no god worthy of worship except Him, and [so do] the angels and those of knowledge — [that He is] maintaining [creation] in justice. There is no god worthy of worship except Him, the Exalted in Might, the Wise.",
                ref: "Aal ‘Imran 3:18",
              },
              {
                n: 6,
                lead: "The verse in which Allah ﷻ says:",
                text: "And, [O mankind], do not make [as equal] with Allah another god, lest you be thrown into Hell, blamed and banished.",
                ref: "al-Isra 17:39",
              },
              {
                n: 7,
                lead: "The verse in which Allah ﷻ says:",
                text: "And do not invoke with Allah another god. There is no god worthy of worship except Him. Everything will be destroyed except His Face. His is the judgement, and to Him you will be returned.",
                ref: "al-Qasas 28:88",
              },
              {
                n: 8,
                lead: "The verse in which Allah ﷻ says:",
                text: "And they were not commanded except to worship one God; there is no god worthy of worship except Him. Exalted is He above whatever they associate with Him.",
                ref: "at-Tawbah 9:31",
              },
              {
                n: 9,
                lead: "The verses in which Allah ﷻ says:",
                text: "Say, “Indeed, my prayer, my rites of sacrifice, my living and my dying are for Allah, Lord of the worlds. No partner has He. And this I have been commanded, and I am the first [among you] of the Muslims.”",
                ref: "al-An‘am 6:162–163",
              },
            ],
          },
          {
            type: "note",
            tone: "info",
            title: "This is the purpose of revelation",
            body: "The texts which speak of that are very numerous; in fact, most of the texts of the Quran affirm this important principle. This is the true purpose for which the Quran and all the Books were revealed, and for which Prophet Muhammad ﷺ and all the prophets of Allah ﷻ were sent.",
          },
          {
            type: "heading",
            title: "The type of Tawhid the disbelievers failed to achieve",
          },
          {
            type: "intro",
            text: "This is the type of Tawhid that the disbelievers failed to achieve, as they associated others with Allah and refused to believe in this type. Allah ﷻ says, speaking of their objection to Tawhid al-uluhiyah and the command to worship Him Alone:",
          },
          {
            type: "ayah",
            text: "[The disbelievers said:] “Has he made the gods [only] one God? Indeed, this is a curious thing.”",
            ref: "Saad 38:5",
          },
          {
            type: "ayah",
            text: "Indeed they, when it was said to them, “There is no god worthy of worship but Allah” were arrogant, And were saying, “Are we to leave our gods for a mad poet?”",
            ref: "as-Saffat 37:35–36",
          },
        ],
      },
      {
        id: "importance",
        title: "The importance of Tawhid al-uluhiyah",
        icon: "4",
        sections: [
          {
            type: "heading",
            title: "The importance of Tawhid al-uluhiyah or worshipping Allah Alone",
          },
          {
            type: "intro",
            text: "The importance of worshipping Allah Alone is clear for the following reasons:",
          },
          {
            type: "evidence",
            items: [
              {
                n: 1,
                body: "It is the purpose for which the jinn and humans were created, as Allah ﷻ says:",
                blocks: [
                  {
                    kind: "ayah",
                    text: "And I did not create the jinn and mankind except to worship Me.",
                    ref: "adh-Dhariyat 51:56",
                  },
                ],
              },
              {
                n: 2,
                body: "It is the purpose for which the messengers were sent, as Allah ﷻ says:",
                blocks: [
                  {
                    kind: "ayah",
                    text: "And We sent not before you any messenger except that We revealed to him that, “There is no god worthy of worship except Me, so worship Me.”",
                    ref: "al-Anbiya 21:25",
                  },
                  {
                    kind: "ayah",
                    text: "And We certainly sent into every nation a messenger, [saying], “Worship Allah and avoid Taghut.”",
                    ref: "an-Nahl 16:36",
                  },
                ],
              },
              {
                n: 3,
                body: "It is the purpose for which the Books were revealed. Allah ﷻ says:",
                blocks: [
                  {
                    kind: "ayah",
                    text: "Alif, Lam, Ra. [This is] a Book whose verses are perfected and then presented in detail from [one who is] Wise and Acquainted [Through a messenger, saying], “Do not worship except Allah. Indeed, I am to you from Him a warner and a bringer of good tidings.”",
                    ref: "Hud 11:1–2",
                  },
                ],
              },
              {
                n: 4,
                body: "No one can enter the religion of Islam except by affirming it, as the Messenger of Allah ﷺ said:",
                blocks: [
                  {
                    kind: "hadith",
                    text: "I have been commanded to fight the people until they say Laa ilaaha illa Allah. Whoever says Laa ilaaha illa Allah has protected himself and his wealth from me, except in cases dictated by Islamic law, and his reckoning will be with Allah.",
                    ref: "al-Bukhari and Muslim",
                  },
                  {
                    kind: "hadith",
                    text: "Maymun ibn Siyah asked Anas ibn Malik رضي الله عنه: O Abu Hamza, what makes a person’s blood and wealth sacred? He said: Whoever bears witness that there is no god worthy of worship except Allah, faces our qiblah in prayer, prays as we pray, and eats the meat slaughtered by us is a Muslim, with the same rights and duties as any other Muslim.",
                    ref: "al-Bukhari",
                  },
                ],
              },
              {
                n: 5,
                body: "It is the foremost message to be conveyed when calling people to Allah. Allah ﷻ says, telling us how His Prophet Yusuf عليه السلام began calling people:",
                blocks: [
                  {
                    kind: "ayah",
                    text: "O [my] two companions of prison, are separate lords better or Allah, the One, the Prevailing. You worship not besides Him except [mere] names you have named them, you and your fathers, for which Allah has sent down no authority. Legislation is not but for Allah. He has commanded that you worship not except Him. That is the correct religion, but most of the people do not know.",
                    ref: "Yusuf 12:39–40",
                  },
                  {
                    kind: "hadith",
                    text: "The Messenger of Allah ﷺ said to Muadh ibn Jabal رضي الله عنه: You are going to some of the People of the Book, so let the first thing you call them to be the affirmation of Allah’s oneness (Tawhid).",
                    ref: "Agreed upon",
                  },
                ],
              },
              {
                n: 6,
                body: "It is the first duty that the accountable person must learn, as Allah ﷻ says:",
                blocks: [
                  {
                    kind: "ayah",
                    text: "So know, [O Muhammad], that there is no god worthy of worship except Allah and ask forgiveness for your sin.",
                    ref: "Muhammad 47:19",
                  },
                ],
              },
              {
                n: 7,
                body: "It is what Allah ﷻ enjoined upon His messengers عليهم السلام. Allah ﷻ says:",
                blocks: [
                  {
                    kind: "ayah",
                    text: "He has ordained for you of religion what He enjoined upon Noah and that which We have revealed to you, [O Muhammad], and what We enjoined upon Abraham and Moses and Jesus — to establish the religion and not be divided therein. Difficult for those who associate others with Allah is that to which you invite them. Allah chooses for Himself whom He wills and guides to Himself whoever turns back [to Him].",
                    ref: "ash-Shura 42:13",
                  },
                ],
              },
              {
                n: 8,
                body: "A person’s salvation in the Hereafter — meaning his admittance to Paradise and being forbidden to the Fire — can only be attained by means of this, as the Messenger of Allah ﷺ said:",
                blocks: [
                  {
                    kind: "hadith",
                    text: "Whoever bears witness that there is no god worthy of worship except Allah Alone, with no partner or associate, and that Muhammad is His slave and His Messenger, and that Isa is the slave of Allah and His messenger, and His word that He bestowed upon Maryam, and a soul created by Him, and that Paradise is true and Hell is true, Allah will admit him to Paradise on the basis of his deeds.",
                    ref: "al-Bukhari and Muslim",
                  },
                  {
                    kind: "hadith",
                    text: "Allah has prohibited to the Fire whoever says Laa ilaaha illa Allah, seeking thereby the pleasure of Allah.",
                    ref: "al-Bukhari and Muslim",
                  },
                ],
              },
              {
                n: 9,
                body: "The Prophet’s intercession in the Hereafter can only be attained by means of worshipping Allah Alone (Tawhid al-uluhiyah), as the Messenger of Allah ﷺ said:",
                blocks: [
                  {
                    kind: "hadith",
                    text: "The most blessed of the people who will attain my intercession on the Day of Resurrection will be those who say Laa ilaaha illa Allah sincerely from the heart.",
                    ref: "al-Bukhari",
                  },
                ],
              },
            ],
          },
          {
            type: "note",
            tone: "highlight",
            title: "Worshipping Allah Alone (Tawhid al-uluhiyah) is the first and last call of the messengers.",
            body: "It is the reason why there were disputes between the prophets and their nations, and between the followers of the prophets — those who affirmed the oneness of Allah — and the polytheists and those who followed innovations and myths. It was in this cause that swords were unsheathed for the sake of Allah in jihad. It is the be-all and end-all of religion; in fact it is the essence of the religion of Islam.",
          },
          {
            type: "activities",
            title: "Activities",
            items: [
              "Give a definition of Tawhid in linguistic terms and in Islamic terminology, quoting evidence from the Book of Allah ﷻ.",
              "Mention some other names of the branch of knowledge that is called ilm at-Tawhid. Why is it called by these names?",
              "What is Tawhid based on? Quote evidence for Tawhid.",
              "Based on Quranic texts, explain the importance of Tawhid.",
            ],
          },
        ],
      },
      {
        id: "kalimah-meaning",
        title: "The meaning of “Laa ilaaha illa Allah”",
        icon: "5",
        sections: [
          {
            type: "heading",
            title: "The meaning of the word of Tawhid “Laa ilaaha illa Allah”",
          },
          {
            type: "intro",
            text: "Laa ilaaha illa Allah is the word of pure Tawhid. It is the greatest obligation that Allah has enjoined upon His slaves, and its relation to faith is like that of the head to the body.",
          },
          {
            type: "heading",
            title: "Texts which speak of its virtue",
          },
          {
            type: "note",
            tone: "benefit",
            title: "Islam is built upon five pillars",
            body: "The Messenger of Allah ﷺ said: “Islam is built upon five [pillars]: the testimony that there is no god worthy of worship except Allah and that Muhammad is the Messenger of Allah; establishing regular prayer (salat); paying zakat; Hajj (pilgrimage) and fasting Ramadan.” — Abdullah ibn Umar رضي الله عنهما, al-Bukhari and Muslim.",
          },
          {
            type: "note",
            tone: "benefit",
            title: "The best word of the prophets",
            body: "The Prophet ﷺ said: “The best word that I and the Prophets before me said is: ‘Laa ilaaha illa Allah wahdahu laa shareeka lah, lahu’l-mulk wa lahu’l-hamd wa huwa ala kulli shay’in qadeer (there is no god worthy of worship except Allah Alone, with no partner or associate. His is the Dominion and to Him be praise, and He is able to do all things).’” — at-Tirmidhi; classed as hasan by al-Albani.",
          },
          {
            type: "definition",
            label: "What is meant by Laa ilaaha illa Allah",
            body: "It means that none is rightfully worshipped except Allah. This phrase is composed of two main principles — the pillars of Tawhid — namely negation and affirmation.",
          },
          {
            type: "pair",
            items: [
              {
                tone: "negation",
                title: "What is meant by negation",
                body: "Shunning every type of object of worship except Allah ﷻ.",
              },
              {
                tone: "affirmation",
                title: "What is meant by affirmation",
                body: "Devoting all types of worship solely to Allah ﷻ Alone, in the manner that He has prescribed on the lips of His messengers عليهم السلام.",
              },
            ],
          },
          {
            type: "note",
            tone: "highlight",
            title: "Both elements are essential",
            body: "The one who merely affirms that Allah is deserving of worship, without believing firmly that worship of any other objects of worship is false, has not complied fully with the word of Tawhid which brings salvation on the Day of Resurrection. Likewise, if someone denies that anything is to be worshipped, and goes no further than that, this is negation only — he has not affirmed the oneness of Allah.",
          },
          {
            type: "intro",
            text: "The one who has any knowledge of the Arabic language will realize that the way in which the word of Tawhid — Laa ilaaha illa Allah — is expressed includes both negation and affirmation, and both of them are required. This is affirmed in several other places.",
          },
          {
            type: "ayah",
            text: "And We certainly sent into every nation a messenger, [saying], “Worship Allah and avoid Taghut.”",
            ref: "an-Nahl 16:36",
          },
          {
            type: "pair",
            items: [
              {
                tone: "affirmation",
                title: "The affirmation",
                body: "Seen in the phrase {Worship Allah}.",
              },
              {
                tone: "negation",
                title: "The negation",
                body: "Seen in the phrase {and avoid Taghut}.",
              },
            ],
          },
          {
            type: "ayah",
            text: "Worship Allah and associate nothing with Him.",
            ref: "an-Nisa 4:36",
          },
          {
            type: "intro",
            text: "This is a command to worship Allah and a prohibition on directing worship to anyone or anything other than Him. Thus it combines the negation and the affirmation.",
          },
          {
            type: "ayah",
            text: "That you not worship except Allah.",
            ref: "Hud 11:26",
          },
          {
            type: "intro",
            text: "Here we see the prohibition on worshipping anything or anyone other than Allah, and the command to worship Him Alone, associating nothing with Him.",
          },
          {
            type: "ayah",
            text: "Indeed, I am disassociated from that which you worship, except for He who created me.",
            ref: "az-Zukhruf 43:26–27",
          },
          {
            type: "split",
            items: [
              {
                label: "Negation",
                title: "I am disassociated from that which you worship",
                body: "This is the negation of worship in general terms.",
              },
              {
                label: "Affirmation",
                title: "Except for He who created me",
                body: "This is an affirmation of worship for Allah ﷻ Alone.",
              },
            ],
          },
          {
            type: "definition",
            label: "Therefore",
            body: "It is essential for the one who wants to truly believe in the oneness of Allah (Tawhid) to combine both pillars: negation of all false objects of worship, and affirmation of worship of the One Who is deserving of worship — Allah ﷻ — to the exclusion of all others.",
          },
        ],
      },
      {
        id: "kalimah-conditions",
        title: "The conditions of “Laa ilaaha illa Allah”",
        icon: "6",
        sections: [
          {
            type: "heading",
            title: "Conditions of the word of Tawhid, Laa ilaaha illa Allah",
          },
          {
            type: "intro",
            text: "It is not sufficient merely to utter the phrase Laa ilaaha illa Allah, paying lip service to it; rather it has conditions that must be fulfilled.",
          },
          {
            type: "conditionMap",
            title: "The seven conditions",
            items: [
              "Sincerity",
              "Understanding its meaning",
              "Certainty",
              "Accepting what it implies and requires",
              "Submission",
              "Being truthful",
              "Love",
            ],
          },
          {
            type: "conditions",
            items: [
              {
                n: 1,
                title: "Sincerity",
                body: "Seeking the pleasure of Allah ﷻ by means of this word (kalimah).",
                blocks: [
                  {
                    kind: "ayah",
                    text: "And they were not commanded except to worship Allah, [being] sincere to Him in religion, inclining to truth, and to establish prayer and to give zakah. And that is the correct religion.",
                    ref: "al-Bayyinah 98:5",
                  },
                ],
              },
              {
                n: 2,
                title: "Knowing what it means",
                body: "Understanding the meaning of this word and what it implies of negation and affirmation.",
                blocks: [
                  {
                    kind: "ayah",
                    text: "So know, [O Muhammad], that there is no god worthy of worship except Allah and ask forgiveness for your sin.",
                    ref: "Muhammad 47:19",
                  },
                ],
              },
              {
                n: 3,
                title: "Certainty",
                body: "No doubt concerning this word or what it implies should occur to the one who says it.",
                blocks: [
                  {
                    kind: "ayah",
                    text: "The believers are only the ones who have believed in Allah and His Messenger and then doubt not.",
                    ref: "al-Hujurat 49:15",
                  },
                  {
                    kind: "hadith",
                    text: "I bear witness that there is no god worthy of worship except Allah and that I am the Messenger of Allah. No one meets Allah believing in that, not doubting it, but he will enter Paradise.",
                    ref: "Muslim",
                  },
                ],
              },
              {
                n: 4,
                title: "Accepting what it implies",
                body: "Accepting what this word implies wholeheartedly and affirming it verbally.",
                blocks: [
                  {
                    kind: "ayah",
                    text: "Indeed they, when it was said to them, “There is no god worthy of worship but Allah” were arrogant.",
                    ref: "as-Saffat 37:35",
                  },
                ],
              },
              {
                n: 5,
                title: "Submission (complying)",
                body: "Doing what Allah commands and refraining from what Allah forbids — complying with what this word indicates.",
                blocks: [
                  {
                    kind: "ayah",
                    text: "And whoever submits his face to Allah while he is a doer of good — then he has grasped the most trustworthy handhold. And to Allah will be the outcome of [all] matters.",
                    ref: "Luqman 31:22",
                  },
                ],
              },
              {
                n: 6,
                title: "Being truthful (sidq)",
                body: "Saying this word sincerely, from the heart.",
                blocks: [
                  {
                    kind: "ayah",
                    text: "And of the people are some who say, “We believe in Allah and the Last Day,” but they are not believers. They [think to] deceive Allah and those who believe, but they deceive not except themselves and perceive [it] not.",
                    ref: "al-Baqarah 2:8–9",
                  },
                ],
              },
              {
                n: 7,
                title: "Love",
                body: "Loving the word of Tawhid and what it means, loving those who believe in it, and hating its opposite, namely shirk.",
                blocks: [
                  {
                    kind: "ayah",
                    text: "And [yet], among the people are those who take other than Allah as equals [to Him]. They love them as they [should] love Allah.",
                    ref: "al-Baqarah 2:165",
                  },
                ],
              },
            ],
          },
          {
            type: "note",
            tone: "info",
            title: "Al-Hasan on entering Paradise",
            body: "It was said to al-Hasan: Some people say that whoever says Laa ilaaha illa Allah will enter Paradise. He said: Whoever says Laa ilaaha illa Allah and complies with its requirements and fulfils the obligations that result from saying it will enter Paradise.",
          },
          {
            type: "note",
            tone: "highlight",
            title: "Uttering it is not enough on its own",
            body: "Saying Laa ilaaha illa Allah will not benefit the one who says it unless he acts in accordance with it and fulfils its conditions.",
          },
        ],
      },
      {
        id: "rububiyah-mistake",
        title: "A common mistake about Tawhid ar-rububiyah",
        icon: "7",
        sections: [
          {
            type: "heading",
            title: "The one who thinks that Tawhid ar-rububiyah is the ultimate aim of the messengers is mistaken",
          },
          {
            type: "note",
            tone: "warning",
            title: "Tawhid ar-rububiyah is not the ultimate aim of the message of the messengers.",
            body: "The one who thinks that Tawhid ar-rububiyah (affirming the oneness of divine Lordship) is the ultimate aim of the message of the messengers is mistaken.",
          },
          {
            type: "intro",
            text: "One of the mistaken notions that are widespread among large numbers of Muslims is the belief that Tawhid ar-rububiyah (affirming the oneness of divine Lordship) — which means affirming that Allah Alone is the Creator, Controller, Provider and so on — is the purpose for which the messengers were sent, and that it is what Allah asks of His slaves. But that is not the case. We have noted above that this type of Tawhid was affirmed by the polytheists, but it is not the purpose for which Allah sent the messengers or revealed the Books.",
          },
          {
            type: "intro",
            text: "Allah ﷻ said, commanding His Prophet to ask them who grants them provision, controls their affairs and created them:",
          },
          {
            type: "ayah",
            text: "Say, “Who provides for you from the heaven and the earth? Or who controls hearing and sight and who brings the living out of the dead and brings the dead out of the living and who arranges [every] matter?” They will say, “Allah,” so say, “Then will you not fear Him?”",
            ref: "Yunus 10:31",
          },
          {
            type: "intro",
            text: "And Allah ﷻ says:",
          },
          {
            type: "ayah",
            text: "And if you asked them, “Who created the heavens and earth?” they would surely say, “Allah.”",
            ref: "Luqman 31:25",
          },
          {
            type: "ayah",
            text: "Say, “In whose hand is the realm of all things — and He protects while none can protect against Him — if you should know?” They will say, “[All belongs] to Allah.” Say, “Then how are you deluded?”",
            ref: "al-Mu’minun 23:88–89",
          },
          {
            type: "intro",
            text: "And there are many texts which affirm that.",
          },
          {
            type: "note",
            tone: "highlight",
            title: "They affirmed Lordship, and had no problem with it.",
            body: "Thus they affirmed this concept, and had no objection to it. Rather what they objected to was worshipping Allah ﷻ Alone and devoting all acts of worship to Him Alone. Therefore this is the true Tawhid concerning which the Books were revealed and the prophets عليهم السلام were sent.",
          },
          {
            type: "note",
            tone: "info",
            title: "Ibn al-Qayyim said",
            body: "Hence Laa ilaaha illa Allah is the best of good deeds, and Tawhid al-uluhiyah, which is the word Laa ilaaha illa Allah, is the heart of the matter. As for Tawhid ar-rububiyah (oneness of divine Lordship), which all creatures affirm, it is not sufficient on its own, even though it is essential and it is a proof against the one who denies Tawhid al-uluhiyah (worshipping Allah Alone).",
          },
          {
            type: "note",
            tone: "info",
            title: "Ibn al-Qayyim رحمه الله also said",
            body: "The highest level that one should attain with regard to Tawhid ar-rububiyah is that he should not believe in anyone as Lord, Creator and controller except Allah, and that is the truth. But Tawhid ar-rububiyah on its own is not sufficient to attain salvation, and believing in it and attaining a state where you see nothing but Allah is not the ultimate aim and goal of those who believe in the oneness of Allah. Rather the supreme goal, after which there is no other goal, is to be completely focused on worshipping Allah Alone (Tawhid al-uluhiyah).",
          },
          {
            type: "intro",
            text: "Thus we may understand that the shirk of the disbelievers was not because of any belief that there was someone else with Allah in control of the universe in terms of creation, command, giving life, causing death, granting provision or any other aspect of Lordship. Rather their shirk was because they devoted worship to entities other than Allah ﷻ.",
          },
          {
            type: "note",
            tone: "warning",
            title: "The main goal is to worship Allah Alone",
            body: "To help us understand this matter more, and to realize that the main goal is to worship Allah Alone, we may note the following:",
          },
          {
            type: "evidence",
            items: [
              {
                n: 1,
                body: "We find that the Quranic message focuses on calling people to worship Allah Alone, and this is the main idea behind most of the Quranic texts. This is in contrast to the issue of the oneness of divine Lordship, which is mentioned in the Quran as if it is a given concerning which there is no dispute or argument.",
              },
              {
                n: 2,
                body: "The fighting that took place between the Prophet ﷺ and the polytheists had nothing to do with the oneness of divine Lordship (Tawhid ar-rububiyah), because they believed in it. Rather it had to do with worshipping Allah Alone (Tawhid al-uluhiyah). Hence the Messenger of Allah ﷺ said:",
                blocks: [
                  {
                    kind: "hadith",
                    text: "I have been commanded to fight the people until they say Laa ilaaha illa Allah. Whoever says Laa ilaaha illa Allah has protected his life and his wealth from me, except in cases dictated by Islamic law, and his reckoning will be with Allah.",
                    ref: "al-Bukhari and Muslim",
                  },
                ],
              },
            ],
          },
          {
            type: "qa",
            question: "But don’t we worship Allah ﷻ Alone and worship none besides Allah? So what is the problem?",
            answer:
              "This is true, and many Muslims devote their worship to Allah ﷻ Alone, and their aim and goal is to please Him Alone, in addition to their affirmation that He Alone is the Creator, the Provider, the One Who gives life and causes death, and so on. But they fall into some practices of shirk, such as offering sacrifices to someone other than Allah, making vows to someone other than Allah, swearing oaths by someone or something other than Allah, travelling for the purpose of visiting mosques where the awliya (saints) are buried, addressing supplications (dua) and requests for help to them, and building mosques over the graves of the righteous. These, unfortunately, are manifestations of shirk that are found in many Muslim lands, which we will discuss in detail below.",
          },
          {
            type: "activities",
            title: "Activities",
            items: [
              "What is meant by the word of Tawhid (kalimat at-Tawhid), and what is its virtue? Is it sufficient for one to enter Islam?",
              "What are the pillars or essential parts of the word of Tawhid? Explain what you say, quoting from texts of the Quran.",
              "What is the mistake that people make with regard to the concept of rububiyah (divine Lordship) and the concept of uluhiyah (worshipping Allah Alone)? How would you respond to that?",
              "What is the type of Tawhid concerning which the disbelievers agreed with the believers? What is the type of Tawhid that they objected to and emphatically rejected?",
              "How can you prove that worshipping Allah Alone is the ultimate purpose of creation?",
              "What are the manifestations and practices of shirk that are found nowadays in Muslim lands?",
            ],
          },
          {
            type: "trueFalse",
            n: 7,
            prompt:
              "Put a checkmark (✓) next to the correct sentences and a cross mark (X) next to the incorrect sentences in the following list:",
            items: [
              {
                letter: "a",
                text: "Tawhid al-uluhiyah means devoting to Allah Alone that which is His exclusive right, such as supplication, vows and sacrifices.",
              },
              {
                letter: "b",
                text: "The evidence for devoting worship to Allah Alone includes the verse in which Allah ﷻ says: {And We certainly sent into every nation a messenger, [saying], “Worship Allah and avoid Taghut.”} [an-Nahl 16:36].",
              },
              {
                letter: "c",
                text: "The purpose behind the creation of the jinn and humankind is that they should affirm the oneness of divine Lordship (Tawhid ar-rububiyah).",
              },
              {
                letter: "d",
                text: "The first obligation of the accountable person is to learn that worship should be devoted to Allah Alone (Tawhid al-uluhiyah).",
              },
              {
                letter: "e",
                text: "The dispute between the Prophet ﷺ and the polytheist Arabs of the Jahiliyyah had to do with affirming the oneness of divine Lordship (Tawhid ar-rububiyah).",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "unit-2",
    title: "Unit 2 — Worship and its pillars",
    titleAr: "العبادة وأركانها",
    lessons: [
      {
        id: "worship-map",
        title: "In this unit we will study",
        icon: "8",
        sections: [
          {
            type: "intro",
            text: "This unit studies worship (ibadah): its meaning, types, pillars, and conditions.",
          },
          {
            type: "roadmap",
            items: [
              { title: "Worship (ibadah)", subtitle: "Its meaning and why Allah enjoined it" },
              { title: "Types of worship", subtitle: "Universal (kawniyyah) and religious (shar‘iyyah)" },
              { title: "Pillars of worship", subtitle: "Utmost humility and utmost love" },
              { title: "Conditions of worship", subtitle: "What makes worship valid and accepted" },
            ],
          },
        ],
      },
      {
        id: "worship-pillars",
        title: "Worship (ibadah)",
        icon: "9",
        sections: [
          {
            type: "heading",
            kicker: "Worship (ibadah)",
            title: "Definition of ibadah (worship)",
          },
          {
            type: "split",
            items: [
              {
                label: "In linguistic terms",
                body: "The Arabic word ibadah refers to obeying with complete submission and humility.",
              },
              {
                label: "In Islamic terminology",
                body: "Ibadah refers to submission and humbling oneself before Allah ﷻ for the purpose of drawing closer to Him in the ways that He has prescribed, accompanied with love and veneration.",
              },
            ],
          },
          {
            type: "definition",
            label: "Ibn Taymiyyah رحمه الله defined ibadah as",
            body: "A concise and comprehensive term that includes everything that Allah loves and is pleased with of words and deeds, both hidden and visible.",
          },
          {
            type: "intro",
            text: "It is the ultimate purpose of creation, and it is the noble and high rank that is attained by the elite of creation, hence Allah ﷻ has enjoined it (ibadah) in more than one place in His holy Book.",
          },
          {
            type: "ayah",
            text: "And I did not create the jinn and mankind except to worship Me.",
            ref: "adh-Dhariyat 51:56",
          },
          {
            type: "ayah",
            text: "And We certainly sent into every nation a messenger, [saying], “Worship Allah and avoid Taghut.”",
            ref: "an-Nahl 16:36",
          },
          {
            type: "ayah",
            text: "And We sent not before you any messenger except that We revealed to him that, “There is no god worthy of worship except Me, so worship Me.”",
            ref: "al-Anbiya 21:25",
          },
          {
            type: "note",
            tone: "warning",
            title: "A false interpretation of al-Hijr 15:99",
            body: "It is important to understand that the way in which the verse {And worship your Lord until there comes to you the certainty (yaqeen)} [al-Hijr 15:99] is interpreted by some heretics who claim to be Sufis — that what is meant by “certainty (yaqeen)” is attaining a high level of knowledge about Allah ﷻ, and that this verse means that when someone attains such knowledge of Allah, a state that is known as certainty (yaqeen), acts of worship and obligatory duties are waived in his case, because attaining that level of certainty (yaqeen) is the ultimate purpose of worship (ibadah) — is wrong.",
          },
          {
            type: "note",
            tone: "highlight",
            title: "Ash-Shinqeeti said",
            body: "Interpreting the verse in this manner is tantamount to disbelief in Allah and is heresy that puts one beyond the bounds of Islam, according to scholarly consensus. This type of interpretation of the verse is false; rather it is toying with the text.",
          },
          {
            type: "note",
            tone: "info",
            title: "The Prophet ﷺ worshipped until the last moment of his life",
            body: "The Prophet ﷺ, who is the leader of mankind and the leader of the devoted worshippers, persisted in worship until the last moment of his life. If religious duties are waived when one attains a certain rank, then the Prophet ﷺ would be the most entitled of all people to that!",
          },
          {
            type: "ayah",
            text: "Indeed this, your religion, is one religion, and I am your Lord, so worship Me.",
            ref: "al-Anbiya 21:92",
          },
          {
            type: "intro",
            text: "Allah ﷻ commanded His Prophet ﷺ to continue worshipping Him until he died, as He said:",
          },
          {
            type: "ayah",
            text: "And worship your Lord until there comes to you the certainty (death).",
            ref: "al-Hijr 15:99",
          },
          {
            type: "intro",
            text: "Allah warns against being too arrogant to worship Him, as He says:",
          },
          {
            type: "ayah",
            text: "And your Lord says, “Call upon Me; I will respond to you.” Indeed, those who disdain My worship will enter Hell [rendered] contemptible.",
            ref: "Ghafir 40:60",
          },
          {
            type: "intro",
            text: "Worship is the characteristic practice of the noble angels. Allah ﷻ says:",
          },
          {
            type: "ayah",
            text: "Indeed, those who are near your Lord are not prevented by arrogance from His worship, and they exalt Him, and to Him they prostrate.",
            ref: "al-A‘raf 7:206",
          },
          {
            type: "intro",
            text: "Allah ﷻ describes the elite of His creation as His servants or slaves (ibad — which comes from the same root as ibadah), as He ﷻ says:",
          },
          {
            type: "ayah",
            text: "A spring of which the [righteous] servants of Allah will drink; they will make it gush forth in force [and abundance].",
            ref: "al-Insan 76:6",
          },
          {
            type: "ayah",
            text: "And the servants of the Most Merciful are those who walk upon the earth easily.",
            ref: "al-Furqan 25:63",
          },
          {
            type: "intro",
            text: "And Allah ﷻ says concerning the Messiah, whom the Christians regard as divine:",
          },
          {
            type: "ayah",
            text: "Jesus was not but a servant upon whom We bestowed favor.",
            ref: "az-Zukhruf 43:59",
          },
          {
            type: "intro",
            text: "This is how our Prophet Muhammad ﷺ was described in the most sublime of situations. Allah ﷻ says:",
          },
          {
            type: "ayah",
            text: "Exalted is He who took His Servant by night from al-Masjid al-Haram to al-Masjid al-Aqsa.",
            ref: "al-Isra 17:1",
          },
          {
            type: "ayah",
            text: "[All] praise is [due] to Allah, who has sent down upon His Servant the Book and has not made therein any deviance.",
            ref: "al-Kahf 18:1",
          },
        ],
      },
      {
        id: "worship-types",
        title: "Types of worship",
        icon: "10",
        sections: [
          {
            type: "heading",
            title: "Types of worship (ibadah)",
          },
          {
            type: "intro",
            text: "Worship of Allah ﷻ may be divided into two types:",
          },
          {
            type: "note",
            tone: "warning",
            title: "1. Universal submission and servitude (ibadah kawniyyah)",
            body: "This is submission to the universal decree of Allah ﷻ, and this includes all of creation; no one is exempt from it. This includes both believers and disbelievers.",
          },
          {
            type: "ayah",
            text: "There is no one in the heavens and earth but that he comes to the Most Merciful as a servant.",
            ref: "Maryam 19:93",
          },
          {
            type: "note",
            tone: "info",
            title: "2. Submission and servitude in a religious sense (ibadah shar‘iyyah)",
            body: "This is submission to the command of Allah ﷻ as mentioned in the religious texts. This applies only to those who obey Allah and follow what the messengers brought.",
          },
          {
            type: "ayah",
            text: "And the servants of the Most Merciful are those who walk upon the earth easily.",
            ref: "al-Furqan 25:63",
          },
          {
            type: "pair",
            items: [
              {
                tone: "a",
                title: "The first category is not praiseworthy",
                body: "Universal servitude is not something praiseworthy, because it is not done by a person’s action or choice.",
              },
              {
                tone: "affirmation",
                title: "The second category is praiseworthy",
                body: "Religious servitude is something praiseworthy, because it is done by a person’s choice and action.",
              },
            ],
          },
        ],
      },
      {
        id: "worship-essentials",
        title: "Pillars of worship",
        icon: "11",
        sections: [
          {
            type: "heading",
            title: "The pillars or essential parts of worship",
          },
          {
            type: "intro",
            text: "Worship has two pillars or essential parts.",
          },
          {
            type: "definition",
            label: "The first pillar is",
            title: "Perfect submission and humility before Allah ﷻ",
            body: "What is meant is that the individual humbles himself before Allah ﷻ, submits to Him and shows humility before Him.",
          },
          {
            type: "heading",
            title: "Four categories of humility before Allah, as stated by Ibn al-Qayyim",
          },
          {
            type: "conditions",
            items: [
              {
                n: 1,
                title: "Humility based on need",
                body: "This is common to all people. All the inhabitants of the heavens and the earth need Him, and He is the only One Who has no need of them. All the inhabitants of the heavens and the earth ask of Him, and He does not ask of anyone.",
              },
              {
                n: 2,
                title: "Humility of obedience and servitude",
                body: "This is humility by choice. It is only for those who obey Allah, and it is the essence of servitude (ubudiyah).",
              },
              {
                n: 3,
                title: "Humility based on love",
                body: "The more a person loves Him, the more he shows humility towards Him.",
              },
              {
                n: 4,
                title: "Humility that results from sin and transgression",
                body: "This is the humility that comes after falling into sin.",
              },
            ],
          },
          {
            type: "note",
            tone: "benefit",
            title: "When all four are combined",
            body: "If someone attains all of these four categories, then his humility and submission to Allah will be more perfect and complete. That is when he submits to Him out of fear, awe, love, longing, obedience and need.",
          },
          {
            type: "definition",
            label: "The second pillar is",
            title: "Perfect love",
            body: "Ibn al-Qayyim said: Worship (ibadah) is the highest level of love. In Arabic, it is said abbadahu al-hubb (lit. “love has enslaved him”) when love has full control over a person.",
          },
          {
            type: "note",
            tone: "info",
            title: "Ibn Taymiyyah said",
            body: "Worship (ibadah) combines the utmost love and the utmost humility. So the devoted worshipper is loving and obedient.",
          },
          {
            type: "intro",
            text: "The evidence for that is the verse in which Allah ﷻ says:",
          },
          {
            type: "ayah",
            text: "Say, [O Muhammad], “If you should love Allah, then follow me, [so] Allah will love you and forgive you your sins. And Allah is Forgiving and Merciful.”",
            ref: "Aal ‘Imran 3:31",
          },
          {
            type: "note",
            tone: "highlight",
            title: "Love requires following the beloved",
            body: "Thus Allah ﷻ has made following His Messenger ﷺ a sign of the sincerity of a person’s love for Him. If there is no following of the beloved and no obedience, then the one who claims to love is lying.",
          },
          {
            type: "note",
            tone: "warning",
            title: "Servitude to Allah rests on these two pillars: utmost love and utmost humility.",
            body: "And their foundation is:",
          },
          {
            type: "evidence",
            items: [
              {
                n: 1,
                body: "Realizing the blessings and favours that Allah ﷻ bestows on His slave, for this will generate love for Allah ﷻ.",
              },
              {
                n: 2,
                body: "Realizing one’s own faults and many sins and shortcomings. This will generate a sense of utmost humility before Allah ﷻ.",
              },
            ],
          },
          {
            type: "intro",
            text: "If a person bears these two things in mind in his journey to Allah ﷻ, his enemy will never gain the upper hand over him, except when he slips and is unaware, and even then, Allah ﷻ will quickly save him and bestow His mercy upon him. The evidence for that is the verse in which Allah ﷻ says:",
          },
          {
            type: "ayah",
            text: "So We responded to him, and We gave to him John, and amended for him his wife. Indeed, they used to hasten to good deeds and supplicate Us in hope and fear.",
            ref: "al-Anbiya 21:90",
          },
          {
            type: "note",
            tone: "benefit",
            title: "Love creates motive",
            body: "Thus love creates motive, and veneration of Allah creates submission, humility and fear of Him.",
          },
        ],
      },
      {
        id: "worship-conditions",
        title: "Conditions of worship",
        icon: "12",
        sections: [
          {
            type: "heading",
            title: "Conditions of worship",
          },
          {
            type: "intro",
            text: "There are two conditions of worship, without which it is not valid:",
          },
          {
            type: "note",
            tone: "warning",
            title: "The first is knowing the One Whom you worship, namely Allah ﷻ",
            body: "You cannot develop proper humility and submission to the One Whom you worship except by knowing Him ﷻ, and learning what He possesses of names and attributes, and what is meant by His divinity (and worshipping Him Alone) and His Lordship.",
          },
          {
            type: "note",
            tone: "warning",
            title: "The second is knowing His religion",
            body: "It is not possible to worship Allah except by complying with the commands of the One Whom you are worshipping and heeding His prohibitions, and His commands and prohibitions are His religion. So it is essential to learn about His religion first, so that you can worship Allah in the correct manner, otherwise you may fall into error and innovation.",
          },
          {
            type: "heading",
            title: "Worship (ibadah) at a glance",
          },
          {
            type: "cards",
            items: [
              {
                title: "Types of worship",
                body: "Kawniyyah and shar‘iyyah",
              },
              {
                title: "Pillars of worship",
                body: "Utmost love and utmost submission",
              },
              {
                title: "Conditions of worship",
                body: "Knowing Allah and knowing His religion",
              },
            ],
          },
          {
            type: "heading",
            title: "There are two conditions for worship to be accepted",
          },
          {
            type: "pair",
            items: [
              {
                tone: "a",
                title: "The first: sincerity",
                body: "Sincerely devoting worship to Allah ﷻ Alone.",
              },
              {
                tone: "affirmation",
                title: "The second: following the Prophet ﷺ",
                body: "Doing the deed in accordance with his Sunnah.",
              },
            ],
          },
          {
            type: "intro",
            text: "The evidence for that is the verse in which Allah ﷻ says:",
          },
          {
            type: "ayah",
            text: "So whoever would hope for the meeting with his Lord — let him do righteous work and not associate in the worship of his Lord anyone.",
            ref: "al-Kahf 18:110",
          },
          {
            type: "intro",
            text: "Sincere devotion means doing an action for the sake of Allah Alone, and the righteous deed is that which is done in accordance with the teachings of the Prophet ﷺ.",
          },
          {
            type: "note",
            tone: "info",
            title: "Al-Fudayl ibn Iyad رحمه الله on Hud 11:7",
            body: "Concerning the verse {that He might test you as to which of you is best in deed}: [That is,] the most sincere and the most correct. They said: O Abu Ali, what is the most sincere and the most correct? He said: If the deed is sincere but not correct, it will not be accepted, and if it is correct but not sincere, it will not be accepted, unless it is both sincere and correct. That which is sincere is that which is for Allah Alone, and that which is correct is that which is in accordance with the Sunnah of the Messenger of Allah ﷺ.",
          },
          {
            type: "activities",
            title: "Activities",
            items: [
              "Define worship (ibadah) and quote some verses from the Quran in which Allah ﷻ enjoins it.",
              "What is the attitude of the Sufis regarding the verse {And worship your Lord until there comes to you the certainty} [al-Hijr 15:99]? How would you respond to them?",
              "What are the categories of worship (ibadah)? In which of the two categories does the servitude (ubudiyah) of the prophets, that of Abu Jahl, and that of the Shaytan come?",
              "Mention the pillars or essential parts of servitude (ubudiyah) and explain them. How can worship (ibadah) be acceptable and valid? Quote evidence for what you say.",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "unit-3",
    title: "Unit 3 — Tawhid al-Asma wa’s-Sifat",
    titleAr: "توحيد الأسماء والصفات",
    lessons: [
      {
        id: "asma-map",
        title: "In this unit we will study",
        icon: "13",
        sections: [
          {
            type: "intro",
            text: "This unit studies Tawhid al-asma wa’s-sifat: believing in Allah’s names and attributes as they came in the Book and Sunnah, without distortion, denial, asking how, or likening Him to the creation.",
          },
          {
            type: "roadmap",
            items: [
              {
                title: "Oneness of the divine names and attributes",
                subtitle: "Tawhid al-asma wa’s-sifat — its meaning according to Ahl as-Sunnah",
              },
              {
                title: "Ways the divine attributes are misinterpreted and distorted",
                subtitle: "Denying the attributes, likening Allah to His creation, and discussing how His attributes are",
              },
              {
                title: "Evidence for Tawhid al-asma wa’s-sifat",
                subtitle: "Affirming the attributes and denying any likeness to the creation",
              },
            ],
          },
        ],
      },
      {
        id: "asma-overview",
        title: "Oneness of the names and attributes",
        icon: "14",
        sections: [
          {
            type: "heading",
            kicker: "Tawhid al-asma wa’s-sifat",
            title: "Meaning of the Oneness of the divine names and attributes",
          },
          {
            type: "definition",
            label: "What is meant",
            body: "To believe in the names and attributes of Allah ﷻ that are mentioned in His Book and in the Sunnah of His Messenger ﷺ, believing in their meanings and rulings in a manner that is appropriate to the majesty of Allah ﷻ, without misinterpreting or distorting them, denying them, discussing how they are, or likening them to the attributes of His creation.",
          },
          {
            type: "intro",
            text: "This is the definition given by Ahl as-Sunnah wa’l-Jama‘ah. The way in which they discuss this matter is as follows:",
          },
          {
            type: "conditions",
            items: [
              {
                n: 1,
                title: "With regard to affirmation",
                body: "They affirm that which Allah affirmed for Himself in His Book or on the lips of His Messenger ﷺ, without misinterpreting or distorting, denying, discussing how, or likening Him to His creation.",
              },
              {
                n: 2,
                title: "With regard to negation",
                body: "They negate that which Allah negated for Himself in His Book or on the lips of His Messenger ﷺ, whilst believing and affirming the perfect quality that is opposite to that which Allah negated for Himself.",
              },
              {
                n: 3,
                title: "That concerning which there is neither negation nor affirmation",
                body: "This refers to matters concerning which the scholars differed, such as whether Allah has a physical body, whether He occupies space, whether He has a direction, and so on. Their way of addressing such matters is as follows:",
              },
            ],
          },
          {
            type: "pair",
            items: [
              {
                tone: "a",
                title: "They refrain from using these terms",
                body: "There is nothing in the Quran or Sunnah to indicate whether such terms are to be negated or affirmed.",
              },
              {
                tone: "affirmation",
                title: "They examine what such terms mean",
                body: "If what is meant is false and incorrect, and Allah is far above that, they reject it. If what is meant is true, and is not unbefitting with regard to Allah, they accept it.",
              },
            ],
          },
          {
            type: "note",
            tone: "info",
            title: "Why this is required",
            body: "Discussing in detail what must be, what is possible, and what is not possible with regard to Allah ﷻ cannot be known except by referring to the Quran and Sunnah. Whatever is in accordance with them is to be accepted, and whatever is contrary to them is to be rejected.",
          },
          {
            type: "heading",
            title: "The basic principle of Ahl as-Sunnah wa’l-Jama‘ah",
          },
          {
            type: "ayah",
            text: "There is nothing like unto Him, and He is the Hearing, the Seeing.",
            ref: "ash-Shura 42:11",
          },
          {
            type: "intro",
            text: "In this verse, there is negation of any resemblance between the Creator and the created being in every aspect, yet it also affirms the divine attributes of hearing and seeing. This indicates that what is affirmed of Allah’s hearing and seeing is not like what is affirmed for created beings of these two attributes.",
          },
          {
            type: "note",
            tone: "highlight",
            title: "The principle in this verse",
            body: "Ahl as-Sunnah wa’l-Jama‘ah deny that the attributes of Allah ﷻ could be likened to those of created beings, whilst affirming the divine attributes in a manner that is befitting to Allah’s majesty.",
          },
          {
            type: "intro",
            text: "Allah ﷻ says:",
          },
          {
            type: "ayah",
            text: "Certainly has Allah heard the speech of the one who argues with you, [O Muhammad], concerning her husband and directs her complaint to Allah. And Allah hears your dialogue; indeed, Allah is Hearing and Seeing.",
            ref: "al-Mujadilah 58:1",
          },
          {
            type: "note",
            tone: "benefit",
            title: "Aisha رضي الله عنها in Sahih al-Bukhari (mu‘allaq)",
            body: "Praise be to Allah Whose hearing encompasses all sounds. The woman who argued came to the Prophet ﷺ to speak to him, whilst I was in some corner of the house and could not hear. Then Allah ﷻ revealed: “Certainly has Allah heard the speech of the one who argues with you, [O Muhammad], concerning her husband…”",
          },
          {
            type: "intro",
            text: "Other evidence that the attributes of Allah ﷻ cannot be likened or compared to those of His creation:",
          },
          {
            type: "ayah",
            text: "So do not assert similarities to Allah.",
            ref: "an-Nahl 16:74",
          },
          {
            type: "note",
            tone: "info",
            title: "At-Tabari said",
            body: "So do not compare Allah to anything, and do not liken Him to what you think is similar, for there is nothing like Him or similar to Him. What is said about His hearing and seeing may also be said about other divine attributes.",
          },
          {
            type: "note",
            tone: "warning",
            title: "It is important to understand",
            body: "Every attribute that is affirmed for Allah ﷻ is a perfect attribute for which He is to be praised; there is no shortcoming whatsoever in those attributes. All the attributes of Allah ﷻ are to be affirmed in the most perfect way. Everything that Allah negates for Himself is an imperfect attribute and is contrary to His inevitable perfection. All attributes of imperfection are impossible in the case of Allah ﷻ, because He must inevitably be perfect.",
          },
          {
            type: "note",
            tone: "benefit",
            title: "A principle of negation",
            body: "Whenever Allah negates something for Himself, that attribute should be negated and the opposite attribute must be affirmed in a perfect sense.",
          },
          {
            type: "evidence",
            items: [
              {
                n: 1,
                lead: "Injustice",
                body: "Allah negates injustice for Himself. That means Allah cannot be unjust, and that the opposite — justice — must be affirmed in a perfect sense.",
              },
              {
                n: 2,
                lead: "Weariness",
                body: "Allah ﷻ negates weariness (fatigue) for Himself. That means Allah cannot be affected by weariness, and that the opposite — strength — must be affirmed in a perfect sense.",
              },
              {
                n: 3,
                lead: "Sleep",
                body: "Sleep is also negated, because the perfect nature of His being the Sustainer of all existence is affirmed. The same applies to everything that Allah has negated for Himself. And Allah knows best.",
              },
            ],
          },
        ],
      },
      {
        id: "asma-categories",
        title: "Categories of people regarding it",
        icon: "15",
        draft: true,
        sections: comingSoon("Categories of people regarding the names and attributes"),
      },
      {
        id: "asma-transgression",
        title: "Transgression regarding the names and attributes",
        icon: "16",
        draft: true,
        sections: comingSoon("Transgression and its meaning"),
      },
      {
        id: "asma-principles",
        title: "Fundamentals and principles of dealing with them",
        icon: "17",
        draft: true,
        sections: comingSoon("Fundamentals of the names and attributes, and principles of dealing with them"),
      },
      {
        id: "asma-fruits",
        title: "Fruits of believing in the names and attributes",
        icon: "18",
        draft: true,
        sections: comingSoon("The fruits of believing in the names and attributes of Allah"),
      },
    ],
  },
  {
    id: "practice",
    title: "Practice",
    lessons: [
      { id: "flashcards", title: "Flashcards", icon: "🃏", kind: "tool", badge: "58" },
      { id: "quiz", title: "Knowledge Quiz", icon: "✏️", kind: "tool", badge: "44" },
    ],
  },
];

export const AQEEDAH2_LESSONS = AQEEDAH2_UNITS.flatMap((unit) =>
  unit.lessons.map((lesson) => ({
    ...lesson,
    unitId: unit.id,
    unitTitle: unit.title,
    unitTitleAr: unit.titleAr,
  })),
);

export const AQEEDAH2_STUDY_UNITS = AQEEDAH2_UNITS.filter((unit) => unit.id !== "practice");
export const AQEEDAH2_STUDY_LESSONS = AQEEDAH2_LESSONS.filter((lesson) => lesson.kind !== "tool");

export const AQEEDAH2_TOPICS = [
  { id: "all", label: "All topics" },
  { id: "meaning", label: "Meaning of Tawhid al-uluhiyah" },
  { id: "evidences", label: "Evidences" },
  { id: "importance", label: "Importance" },
  { id: "kalimah", label: "Laa ilaaha illa Allah" },
  { id: "rububiyah", label: "Rububiyah vs uluhiyah" },
  { id: "ibadah", label: "Worship (ibadah)" },
  { id: "asma", label: "Names and attributes" },
];

export const AQEEDAH2_FLASHCARDS = [
  {
    t: "meaning",
    q: "What is the linguistic root of uluhiyah, and what does it mean?",
    a: "It comes from the root aliha, meaning worship.",
  },
  {
    t: "meaning",
    q: "How did Ibn Abbas recite aalihataka in al-A‘raf 7:127, and what did it mean?",
    a: "He recited it as ilaahataka, meaning “your worship” — showing that ilaah / uluhiyah is tied to worship.",
  },
  {
    t: "meaning",
    q: "What does ilaah refer to?",
    a: "One who is worshipped. From the same root come the name Allah and the word uluhiyah (worship).",
  },
  {
    t: "meaning",
    q: "What is Tawhid al-uluhiyah in Islamic terminology?",
    a: "Directing to Allah Alone all the acts of worship that His slaves perform — directing and devoting worship only to Allah ﷻ.",
  },
  {
    t: "meaning",
    q: "Name acts of worship that must be directed to Allah Alone.",
    a: "Supplication (du‘a), vows (nadhr), sacrifices, hope, love, fear, trust, reliance, seeking refuge, and seeking help — both in desperate need and in daily life.",
  },
  {
    t: "meaning",
    q: "What other names is Tawhid al-uluhiyah also called?",
    a: "Tawhid al-amal (oneness of action), Tawhid al-qasd (oneness of aims and goals), and Tawhid al-iradah wa’t-talab (oneness of will and purpose).",
  },
  {
    t: "meaning",
    q: "What three things is Tawhid al-uluhiyah based on?",
    a: "1. Directing one’s intention, aim and goal solely to Allah (ikhlaas).\n2. Calling upon Allah Alone and asking of Him Alone.\n3. Loving Allah Alone and taking Him Alone as an ally and close friend.",
  },
  {
    t: "evidences",
    q: "What does al-Anbiya 21:25 show about every messenger?",
    a: "Allah sent no messenger before except that He revealed to him: “There is no god worthy of worship except Me, so worship Me.”",
  },
  {
    t: "evidences",
    q: "What was the message sent to every nation, according to an-Nahl 16:36?",
    a: "“Worship Allah and avoid Taghut.”",
  },
  {
    t: "evidences",
    q: "What did Nuh عليه السلام say to his people in al-Mu’minun 23:23?",
    a: "“O my people, worship Allah; you have no god other than Him; then will you not fear Him?”",
  },
  {
    t: "evidences",
    q: "According to al-An‘am 6:162–163, what belongs to Allah, Lord of the worlds?",
    a: "Prayer, rites of sacrifice, living and dying — with no partner. This is what the Prophet ﷺ was commanded, and he is the first of the Muslims.",
  },
  {
    t: "evidences",
    q: "What objection did the disbelievers raise in Saad 38:5?",
    a: "“Has he made the gods [only] one God? Indeed, this is a curious thing.” They failed in Tawhid al-uluhiyah by associating others with Allah.",
  },
  {
    t: "importance",
    q: "What is the purpose for which the jinn and humans were created?",
    a: "To worship Allah Alone. “And I did not create the jinn and mankind except to worship Me.” [adh-Dhariyat 51:56]",
  },
  {
    t: "evidences",
    q: "What is the true purpose for which the Quran and all the Books were revealed?",
    a: "Tawhid al-uluhiyah — worshipping Allah Alone. This is also why Prophet Muhammad ﷺ and all the prophets of Allah were sent.",
  },
  {
    t: "importance",
    q: "Why were the messengers sent, according to al-Anbiya 21:25 and an-Nahl 16:36?",
    a: "So that people would worship Allah Alone and avoid Taghut. No messenger was sent except with: “There is no god worthy of worship except Me, so worship Me.”",
  },
  {
    t: "importance",
    q: "What do Hud 11:1–2 show about the purpose of the revealed Books?",
    a: "The Book’s verses are perfected and detailed with the call: “Do not worship except Allah.” The Books were revealed for Tawhid al-uluhiyah.",
  },
  {
    t: "importance",
    q: "What did the Prophet ﷺ say about entering Islam by saying Laa ilaaha illa Allah?",
    a: "“I have been commanded to fight the people until they say Laa ilaaha illa Allah. Whoever says it has protected himself and his wealth from me, except in cases dictated by Islamic law, and his reckoning will be with Allah.” (Bukhari and Muslim)",
  },
  {
    t: "importance",
    q: "What was the first thing Muadh ibn Jabal was told to call the People of the Book to?",
    a: "The affirmation of Allah’s oneness (Tawhid). “Let the first thing you call them to be the affirmation of Allah’s oneness.” (Agreed upon)",
  },
  {
    t: "importance",
    q: "What is the first duty the accountable person must learn, according to Muhammad 47:19?",
    a: "To know that there is no god worthy of worship except Allah, then to ask forgiveness for his sin.",
  },
  {
    t: "importance",
    q: "Who will be most blessed with the Prophet’s intercession?",
    a: "Those who say Laa ilaaha illa Allah sincerely from the heart. (Bukhari)",
  },
  {
    t: "importance",
    q: "What does the textbook call Tawhid al-uluhiyah in relation to the religion of Islam?",
    a: "The first and last call of the messengers; the be-all and end-all of religion; the essence of the religion of Islam.",
  },
  {
    t: "kalimah",
    q: "What is Laa ilaaha illa Allah, and how is it related to faith?",
    a: "It is the word of pure Tawhid, the greatest obligation Allah has enjoined upon His slaves. Its relation to faith is like that of the head to the body.",
  },
  {
    t: "kalimah",
    q: "What does Laa ilaaha illa Allah mean?",
    a: "None is rightfully worshipped except Allah. It is composed of two principles: negation and affirmation.",
  },
  {
    t: "kalimah",
    q: "What is meant by negation and affirmation in the kalimah?",
    a: "Negation: shunning every type of object of worship except Allah.\nAffirmation: devoting all types of worship solely to Allah Alone, as prescribed by His messengers.",
  },
  {
    t: "kalimah",
    q: "In an-Nahl 16:36, where are affirmation and negation seen?",
    a: "Affirmation: “Worship Allah.” Negation: “and avoid Taghut.” Both are required.",
  },
  {
    t: "kalimah",
    q: "In Ibrahim’s words (az-Zukhruf 43:26–27), what is negation and what is affirmation?",
    a: "Negation: “I am disassociated from that which you worship.” Affirmation: “except for He who created me.”",
  },
  {
    t: "kalimah",
    q: "Name the seven conditions of Laa ilaaha illa Allah.",
    a: "1. Sincerity\n2. Knowing what it means\n3. Certainty\n4. Accepting what it implies\n5. Submission (complying)\n6. Being truthful (sidq)\n7. Love",
  },
  {
    t: "kalimah",
    q: "Why is uttering Laa ilaaha illa Allah not enough on its own?",
    a: "It will not benefit the one who says it unless he acts in accordance with it and fulfils its conditions. Lip service is not sufficient.",
  },
  {
    t: "kalimah",
    q: "What did al-Hasan say about entering Paradise by saying Laa ilaaha illa Allah?",
    a: "Whoever says it and complies with its requirements and fulfils the obligations that result from saying it will enter Paradise.",
  },
  {
    t: "kalimah",
    q: "What is the best word said by the Prophet ﷺ and the prophets before him?",
    a: "“Laa ilaaha illa Allah wahdahu laa shareeka lah, lahu’l-mulk wa lahu’l-hamd wa huwa ala kulli shay’in qadeer.” (at-Tirmidhi; hasan)",
  },
  {
    t: "rububiyah",
    q: "What mistaken notion do many Muslims have about Tawhid ar-rububiyah?",
    a: "They think affirming that Allah Alone is the Creator, Controller and Provider is the purpose for which the messengers were sent, and what Allah asks of His slaves. That is not the case.",
  },
  {
    t: "rububiyah",
    q: "Did the polytheists affirm Tawhid ar-rububiyah?",
    a: "Yes. When asked who provides, creates and controls, they would say “Allah.” They had no objection to Lordship. Yunus 10:31, Luqman 31:25, al-Mu’minun 23:88–89.",
  },
  {
    t: "rububiyah",
    q: "What type of Tawhid did the polytheists object to?",
    a: "Tawhid al-uluhiyah — worshipping Allah Alone and devoting all acts of worship to Him Alone. That is the true Tawhid for which the Books were revealed and the prophets were sent.",
  },
  {
    t: "rububiyah",
    q: "According to Ibn al-Qayyim, is Tawhid ar-rububiyah enough for salvation?",
    a: "No. All creatures affirm it, and it is essential, but it is not sufficient on its own. The heart of the matter is Tawhid al-uluhiyah — the word Laa ilaaha illa Allah. The supreme goal is to be completely focused on worshipping Allah Alone.",
  },
  {
    t: "rububiyah",
    q: "What was the shirk of the disbelievers actually about?",
    a: "Not a belief that someone else shared control of the universe (creation, command, life, death, provision). Their shirk was that they devoted worship to entities other than Allah.",
  },
  {
    t: "rububiyah",
    q: "Name practices of shirk found in many Muslim lands today.",
    a: "Offering sacrifices to other than Allah, making vows to other than Allah, swearing by other than Allah, travelling to mosques at graves of awliya, making dua and seeking help from them, and building mosques over the graves of the righteous.",
  },
  {
    t: "ibadah",
    q: "What does ibadah mean in linguistic terms?",
    a: "Obeying with complete submission and humility.",
  },
  {
    t: "ibadah",
    q: "What is ibadah in Islamic terminology?",
    a: "Submission and humbling oneself before Allah ﷻ in order to draw closer to Him in the ways He has prescribed, accompanied with love and veneration.",
  },
  {
    t: "ibadah",
    q: "How did Ibn Taymiyyah define ibadah?",
    a: "A concise and comprehensive term that includes everything that Allah loves and is pleased with of words and deeds, both hidden and visible.",
  },
  {
    t: "ibadah",
    q: "What does yaqeen mean in al-Hijr 15:99: “Worship your Lord until there comes to you the certainty”?",
    a: "Death. The Prophet ﷺ was commanded to keep worshipping until he died. It does not mean a rank of knowledge after which duties are waived.",
  },
  {
    t: "ibadah",
    q: "Why is the Sufi claim that worship is waived after attaining yaqeen false?",
    a: "Ash-Shinqeeti said it is disbelief and heresy. The Prophet ﷺ, the leader of the devoted worshippers, persisted in worship until the last moment of his life — if anyone’s duties could be waived, it would have been his.",
  },
  {
    t: "ibadah",
    q: "How does Allah describe the elite of creation in connection with ibadah?",
    a: "As His servants or slaves (ibad), from the same root as ibadah. Jesus was a servant; the Prophet ﷺ is called His Servant in the Night Journey and in the sending down of the Book.",
  },
  {
    t: "ibadah",
    q: "What are the two types of worship (ibadah)?",
    a: "1. Ibadah kawniyyah — universal submission to Allah’s decree, covering all creation, believers and disbelievers.\n2. Ibadah shar‘iyyah — religious submission to His command, only for those who obey Allah and follow the messengers.",
  },
  {
    t: "ibadah",
    q: "Which type of worship is praiseworthy, and why?",
    a: "Religious servitude (shar‘iyyah) is praiseworthy because it is by a person’s choice and action. Universal servitude (kawniyyah) is not praiseworthy, because no one chooses it.",
  },
  {
    t: "ibadah",
    q: "What are the two pillars of worship?",
    a: "Perfect submission and humility before Allah, and perfect love. Ibn Taymiyyah: worship combines the utmost love and the utmost humility.",
  },
  {
    t: "ibadah",
    q: "Name Ibn al-Qayyim’s four categories of humility.",
    a: "1. Humility based on need (common to all).\n2. Humility of obedience (by choice — the essence of ubudiyah).\n3. Humility based on love.\n4. Humility that results from sin and transgression.",
  },
  {
    t: "ibadah",
    q: "What is the sign of sincere love for Allah, according to Aal ‘Imran 3:31?",
    a: "Following the Messenger ﷺ. If there is no following and no obedience, the one who claims to love is lying.",
  },
  {
    t: "ibadah",
    q: "What two foundations generate love and humility?",
    a: "1. Realizing Allah’s blessings and favours — this generates love.\n2. Realizing one’s own faults and sins — this generates utmost humility.",
  },
  {
    t: "ibadah",
    q: "What two conditions make worship valid?",
    a: "Knowing the One Whom you worship (Allah — His names, attributes, divinity and Lordship), and knowing His religion (His commands and prohibitions).",
  },
  {
    t: "ibadah",
    q: "What two conditions make worship accepted, according to Al-Fudayl ibn Iyad?",
    a: "It must be sincere (for Allah Alone) and correct (in accordance with the Sunnah). If either is missing, it is not accepted.",
  },
  {
    t: "asma",
    q: "What is Tawhid al-asma wa’s-sifat?",
    a: "To believe in the names and attributes of Allah mentioned in the Book and Sunnah, in their meanings and rulings, in a manner appropriate to His majesty — without distortion, denial, asking how, or likening them to the creation.",
  },
  {
    t: "asma",
    q: "How do Ahl as-Sunnah discuss the names and attributes?",
    a: "1. Affirmation: they affirm what Allah affirmed for Himself, without distortion, denial, asking how, or likening.\n2. Negation: they negate what He negated, and affirm the opposite perfect quality.\n3. Neither: they refrain from terms with no textual ruling, then accept or reject according to the meaning.",
  },
  {
    t: "asma",
    q: "What do Ahl as-Sunnah do with terms that are neither affirmed nor negated in the texts?",
    a: "They refrain from using the terms themselves. Then they examine the meaning: if it is false and unbefitting, they reject it; if it is true and not unbefitting, they accept it. What must, can, and cannot be said of Allah is known only from the Quran and Sunnah.",
  },
  {
    t: "asma",
    q: "What is the basic principle verse for the names and attributes?",
    a: "ash-Shura 42:11: “There is nothing like unto Him, and He is the Hearing, the Seeing.” It negates any resemblance to the creation, and affirms the attributes of hearing and seeing in a manner befitting Allah.",
  },
  {
    t: "asma",
    q: "What does Aisha’s report about the arguing woman show?",
    a: "Allah’s hearing encompasses all sounds. Aisha was in a corner of the house and could not hear the woman speaking to the Prophet ﷺ, yet Allah heard and revealed al-Mujadilah 58:1. His hearing is not like ours.",
  },
  {
    t: "asma",
    q: "How should every attribute of Allah be understood?",
    a: "Every attribute He affirms is perfect, with no shortcoming, and is to be affirmed in the most perfect way. Everything He negates is an imperfect attribute, impossible for Him, because He must inevitably be perfect.",
  },
  {
    t: "asma",
    q: "When Allah negates something for Himself, what else is required?",
    a: "Negate that attribute, and affirm the opposite in a perfect sense. Injustice is negated, so justice is affirmed. Weariness is negated, so strength is affirmed. Sleep is negated because He is the perfect Sustainer of all existence.",
  },
  {
    t: "asma",
    q: "What did at-Tabari say about an-Nahl 16:74, “Do not assert similarities to Allah”?",
    a: "Do not compare Allah to anything, and do not liken Him to what you think is similar, for there is nothing like Him. What is said of His hearing and seeing may be said of His other attributes.",
  },
];

export const AQEEDAH2_QUIZ = [
  {
    t: "meaning",
    q: "Uluhiyah comes from the root aliha. What does that root mean?",
    opts: ["Creation", "Worship", "Knowledge", "Kingship"],
    ans: 1,
    fb: "In linguistic terms, uluhiyah comes from the root aliha, meaning worship.",
  },
  {
    t: "meaning",
    q: "In Islamic terminology, Tawhid al-uluhiyah means:",
    opts: [
      "Affirming that Allah exists",
      "Affirming Allah’s names without worship",
      "Directing all acts of worship to Allah Alone",
      "Believing Allah created the heavens",
    ],
    ans: 2,
    fb: "It means directing to Allah Alone all the acts of worship that His slaves perform.",
  },
  {
    t: "meaning",
    q: "Which of these is also a name for Tawhid al-uluhiyah?",
    opts: ["Tawhid ar-rububiyyah", "Tawhid al-amal", "Tawhid al-hakimiyyah only", "Tawhid al-fitrah"],
    ans: 1,
    fb: "It is also called Tawhid al-amal (oneness of action), Tawhid al-qasd, and Tawhid al-iradah wa’t-talab.",
  },
  {
    t: "meaning",
    q: "Tawhid al-uluhiyah is based on which three foundations?",
    opts: [
      "Wudu, prayer, and fasting",
      "Sincerity, calling upon Allah Alone, and loving Allah Alone",
      "Hope, fear, and recitation only",
      "Names, attributes, and creation",
    ],
    ans: 1,
    fb: "It is based on ikhlaas (directing intention solely to Allah), calling upon Him Alone, and loving Him Alone as ally and close friend.",
  },
  {
    t: "evidences",
    q: "al-Anbiya 21:25 teaches that every messenger was told:",
    opts: [
      "There is no god worthy of worship except Me, so worship Me",
      "Establish the prayer only",
      "Follow the customs of your people",
      "Worship the angels with Allah",
    ],
    ans: 0,
    fb: "Allah sent no messenger except that He revealed: “There is no god worthy of worship except Me, so worship Me.”",
  },
  {
    t: "evidences",
    q: "an-Nahl 16:36 says every nation was sent a messenger saying:",
    opts: [
      "Believe and then do as you wish",
      "Worship Allah and avoid Taghut",
      "Worship the righteous among you",
      "Take partners if they bring you closer",
    ],
    ans: 1,
    fb: "“Worship Allah and avoid Taghut” is the message sent to every nation.",
  },
  {
    t: "evidences",
    q: "In al-An‘am 6:162–163, what is for Allah, Lord of the worlds?",
    opts: [
      "Prayer only",
      "Prayer, sacrifice, living and dying — with no partner",
      "Fasting in Ramadan only",
      "Charity given in secret only",
    ],
    ans: 1,
    fb: "“My prayer, my rites of sacrifice, my living and my dying are for Allah, Lord of the worlds. No partner has He.”",
  },
  {
    t: "evidences",
    q: "Saad 38:5 records the disbelievers saying:",
    opts: [
      "We already worship Allah Alone",
      "Has he made the gods [only] one God? Indeed, this is a curious thing",
      "We will never associate partners",
      "The messengers were not sent to us",
    ],
    ans: 1,
    fb: "They objected to Tawhid al-uluhiyah: “Has he made the gods [only] one God? Indeed, this is a curious thing.”",
  },
  {
    t: "importance",
    q: "According to adh-Dhariyat 51:56, jinn and mankind were created:",
    opts: [
      "To populate the earth only",
      "Except to worship Allah",
      "To compete in wealth",
      "To follow their forefathers",
    ],
    ans: 1,
    fb: "“And I did not create the jinn and mankind except to worship Me.” This is a core reason Tawhid al-uluhiyah matters.",
  },
  {
    t: "meaning",
    q: "Worship may be directed to a prophet or a wali if they are righteous. True or false?",
    opts: [
      "True — the righteous can be asked",
      "False — worship is not directed to any creature",
      "True — only if they are deceased",
      "True — only angels",
    ],
    ans: 1,
    fb: "Worship is not directed to an angel, prophet, wali, shaykh, idol, statue, or any creature created by Allah.",
  },
  {
    t: "importance",
    q: "The messengers were sent so that people would:",
    opts: [
      "Inherit kingdoms",
      "Worship Allah Alone and avoid Taghut",
      "Follow the customs of their fathers",
      "Count the stars",
    ],
    ans: 1,
    fb: "al-Anbiya 21:25 and an-Nahl 16:36 show that every messenger was sent with: worship Allah and avoid Taghut.",
  },
  {
    t: "importance",
    q: "What did the Prophet ﷺ tell Muadh to call the People of the Book to first?",
    opts: [
      "Zakat",
      "The affirmation of Allah’s oneness (Tawhid)",
      "Hajj",
      "Leaving their land",
    ],
    ans: 1,
    fb: "“Let the first thing you call them to be the affirmation of Allah’s oneness (Tawhid).” This is the foremost message when calling people to Allah.",
  },
  {
    t: "importance",
    q: "Muhammad 47:19 shows that the first duty to learn is:",
    opts: [
      "Arabic grammar",
      "That there is no god worthy of worship except Allah",
      "The names of the tribes",
      "Trade and inheritance only",
    ],
    ans: 1,
    fb: "“So know that there is no god worthy of worship except Allah and ask forgiveness for your sin.”",
  },
  {
    t: "importance",
    q: "The most blessed of those who attain the Prophet’s intercession are those who:",
    opts: [
      "Memorise the most poetry",
      "Say Laa ilaaha illa Allah sincerely from the heart",
      "Are the wealthiest",
      "Never travel",
    ],
    ans: 1,
    fb: "“The most blessed of the people who will attain my intercession on the Day of Resurrection will be those who say Laa ilaaha illa Allah sincerely from the heart.” (Bukhari)",
  },
  {
    t: "importance",
    q: "Tawhid al-uluhiyah is described as:",
    opts: [
      "A later addition to the religion",
      "The first and last call of the messengers, and the essence of Islam",
      "Optional for the common folk",
      "Only for the prophets themselves",
    ],
    ans: 1,
    fb: "Worshipping Allah Alone is the first and last call of the messengers, the be-all and end-all of religion, and the essence of Islam.",
  },
  {
    t: "importance",
    q: "Allah has prohibited the Fire for the one who says Laa ilaaha illa Allah:",
    opts: [
      "While joking",
      "Seeking thereby the pleasure of Allah",
      "Only in Ramadan",
      "Without believing it",
    ],
    ans: 1,
    fb: "“Allah has prohibited to the Fire whoever says Laa ilaaha illa Allah, seeking thereby the pleasure of Allah.” (Bukhari and Muslim)",
  },
  {
    t: "kalimah",
    q: "Laa ilaaha illa Allah means:",
    opts: [
      "There is no creator except Allah only in the unseen",
      "None is rightfully worshipped except Allah",
      "Allah exists among many gods",
      "Worship is optional if one believes",
    ],
    ans: 1,
    fb: "It means that none is rightfully worshipped except Allah, with both negation and affirmation.",
  },
  {
    t: "kalimah",
    q: "The two pillars of the word of Tawhid are:",
    opts: [
      "Hope and fear only",
      "Negation and affirmation",
      "Prayer and fasting",
      "Speech and silence",
    ],
    ans: 1,
    fb: "The kalimah is composed of negation (laa ilaaha) and affirmation (illa Allah). Both are essential.",
  },
  {
    t: "kalimah",
    q: "If someone only denies that anything is worshipped, and goes no further, he has:",
    opts: [
      "Completed Tawhid",
      "Affirmation only",
      "Negation only, without affirming the oneness of Allah",
      "The conditions of the kalimah",
    ],
    ans: 2,
    fb: "Negation alone is not enough. Both negation of false objects of worship and affirmation of worship for Allah are required.",
  },
  {
    t: "kalimah",
    q: "In an-Nahl 16:36, “Worship Allah and avoid Taghut” shows:",
    opts: [
      "Affirmation only",
      "Negation only",
      "Affirmation in “Worship Allah” and negation in “avoid Taghut”",
      "Neither pillar",
    ],
    ans: 2,
    fb: "The verse combines both pillars of the kalimah: worship Allah (affirmation) and avoid Taghut (negation).",
  },
  {
    t: "kalimah",
    q: "Which of these is not one of the seven conditions of Laa ilaaha illa Allah?",
    opts: [
      "Sincerity",
      "Certainty",
      "Memorising every hadith",
      "Love",
    ],
    ans: 2,
    fb: "The seven are sincerity, knowing its meaning, certainty, acceptance, submission, truthfulness, and love.",
  },
  {
    t: "kalimah",
    q: "Saying Laa ilaaha illa Allah benefits a person:",
    opts: [
      "By lip service alone",
      "Only if he acts in accordance with it and fulfils its conditions",
      "Even if he rejects what it implies",
      "Without knowing what it means",
    ],
    ans: 1,
    fb: "It is not sufficient to utter it. Al-Hasan said one must comply with its requirements and fulfil the obligations that result from saying it.",
  },
  {
    t: "rububiyah",
    q: "Tawhid ar-rububiyah (Allah is the Creator, Controller and Provider) is the ultimate aim of the messengers. True or false?",
    opts: [
      "True — this is what Allah asks of His slaves",
      "False — the polytheists already affirmed it; the aim is Tawhid al-uluhiyah",
      "True — but only for later nations",
      "False — because rububiyah is not part of Tawhid at all",
    ],
    ans: 1,
    fb: "The polytheists already affirmed Lordship. The purpose of the messengers and the Books is Tawhid al-uluhiyah — worshipping Allah Alone.",
  },
  {
    t: "rububiyah",
    q: "When the polytheists were asked who created the heavens and earth, they would say:",
    opts: [
      "Our idols",
      "Allah",
      "The angels",
      "We do not know",
    ],
    ans: 1,
    fb: "Luqman 31:25: if you asked them who created the heavens and earth, they would surely say, “Allah.” They affirmed rububiyah.",
  },
  {
    t: "rububiyah",
    q: "The fighting between the Prophet ﷺ and the polytheists was about:",
    opts: [
      "Tawhid ar-rububiyah, because they denied that Allah creates",
      "Tawhid al-uluhiyah — they believed in Lordship but refused to worship Allah Alone",
      "Who should collect zakat",
      "The language of the Quran only",
    ],
    ans: 1,
    fb: "They believed in divine Lordship. The fight was until they said Laa ilaaha illa Allah — worshipping Allah Alone. (Bukhari and Muslim)",
  },
  {
    t: "rububiyah",
    q: "The purpose behind the creation of the jinn and humankind is:",
    opts: [
      "That they should affirm Tawhid ar-rububiyah only",
      "That they should worship Allah Alone (Tawhid al-uluhiyah)",
      "That they should inherit the earth",
      "That they should compete in wealth",
    ],
    ans: 1,
    fb: "adh-Dhariyat 51:56: they were created to worship Allah. Affirming Lordship alone is not the purpose of creation.",
  },
  {
    t: "rububiyah",
    q: "The dispute with the polytheist Arabs of the Jahiliyyah was about affirming Tawhid ar-rububiyah. True or false?",
    opts: [
      "True — they denied that Allah is Lord",
      "False — they affirmed Lordship; they rejected worshipping Allah Alone",
      "True — they denied provision from Allah",
      "False — there was no dispute about Tawhid at all",
    ],
    ans: 1,
    fb: "They had no problem with Lordship. They objected to Tawhid al-uluhiyah — dedicating worship to Allah Alone.",
  },
  {
    t: "ibadah",
    q: "In Islamic terminology, ibadah is:",
    opts: [
      "Affirming that Allah exists, without deeds",
      "Submission and humbling oneself before Allah, as He prescribed, with love and veneration",
      "Any custom that a people inherit",
      "Knowledge after which worship is no longer required",
    ],
    ans: 1,
    fb: "Ibadah is submission and humbling oneself before Allah in the ways He prescribed, with love and veneration.",
  },
  {
    t: "ibadah",
    q: "Ibn Taymiyyah defined ibadah as everything Allah loves and is pleased with of:",
    opts: [
      "Belief in the heart only",
      "Words and deeds, both hidden and visible",
      "Public rituals only",
      "Knowledge of Allah without action",
    ],
    ans: 1,
    fb: "It is a comprehensive term covering words and deeds, hidden and visible, that Allah loves and is pleased with.",
  },
  {
    t: "ibadah",
    q: "In al-Hijr 15:99, “until there comes to you the certainty (yaqeen)” means:",
    opts: [
      "A rank of knowledge after which duties are waived",
      "Death — keep worshipping until you die",
      "The Day of Judgement only for prophets",
      "Certainty that one no longer needs prayer",
    ],
    ans: 1,
    fb: "Allah commanded the Prophet ﷺ to worship until death. The heretical reading that duties fall away after a spiritual rank is false.",
  },
  {
    t: "ibadah",
    q: "Ash-Shinqeeti said that interpreting yaqeen so that worship is waived is:",
    opts: [
      "A valid scholarly difference",
      "Disbelief and heresy beyond the bounds of Islam, by scholarly consensus",
      "Recommended for the elite",
      "Only wrong if one stops fasting",
    ],
    ans: 1,
    fb: "He said it is tantamount to disbelief and heresy, and that this interpretation is toying with the text.",
  },
  {
    t: "ibadah",
    q: "If worship were waived after attaining a high rank, who would be most entitled to that?",
    opts: [
      "The most knowledgeable Sufi shaykh",
      "The Prophet ﷺ — yet he worshipped until the last moment of his life",
      "The angels only",
      "Anyone who memorises the Quran",
    ],
    ans: 1,
    fb: "The Prophet ﷺ is the leader of the devoted worshippers and persisted in worship until he died. Duties are not waived by rank.",
  },
  {
    t: "ibadah",
    q: "Ibadah kawniyyah is:",
    opts: [
      "Praiseworthy worship done by choice",
      "Universal submission to Allah’s decree, covering all creation",
      "Only for the prophets",
      "The same as following the Sunnah",
    ],
    ans: 1,
    fb: "Universal servitude includes believers and disbelievers. No one is exempt. It is not praiseworthy because it is not by choice.",
  },
  {
    t: "ibadah",
    q: "Which type of worship is praiseworthy?",
    opts: [
      "Ibadah kawniyyah, because everyone does it",
      "Ibadah shar‘iyyah, because it is by a person’s choice and action",
      "Neither type",
      "Only the worship of the angels",
    ],
    ans: 1,
    fb: "Religious servitude is by choice and action, so it is praiseworthy. Universal servitude is not.",
  },
  {
    t: "ibadah",
    q: "The two pillars of worship are:",
    opts: [
      "Hope and fear only",
      "Utmost humility and utmost love",
      "Prayer and fasting",
      "Knowledge and wealth",
    ],
    ans: 1,
    fb: "Ibn Taymiyyah: worship combines the utmost love and the utmost humility. The devoted worshipper is loving and obedient.",
  },
  {
    t: "ibadah",
    q: "Aal ‘Imran 3:31 shows that sincere love of Allah requires:",
    opts: [
      "Claiming love on the tongue only",
      "Following the Messenger ﷺ",
      "Abandoning all deeds after knowledge",
      "Loving the creation as one loves Allah",
    ],
    ans: 1,
    fb: "“If you should love Allah, then follow me.” Without following and obedience, the claim of love is a lie.",
  },
  {
    t: "ibadah",
    q: "Worship is not valid without:",
    opts: [
      "Knowing the One Whom you worship, and knowing His religion",
      "A large following",
      "Leaving the prayer when one feels certain",
      "Wealth and status",
    ],
    ans: 0,
    fb: "Without knowing Allah and His religion, a person cannot worship Him correctly and may fall into error and innovation.",
  },
  {
    t: "ibadah",
    q: "Al-Fudayl ibn Iyad said a deed is accepted when it is:",
    opts: [
      "Sincere only, even if it opposes the Sunnah",
      "Correct only, even if done for showing off",
      "Both sincere (for Allah Alone) and correct (according to the Sunnah)",
      "Done in a large gathering",
    ],
    ans: 2,
    fb: "If it is sincere but not correct, or correct but not sincere, it is not accepted. Al-Kahf 18:110 joins righteous work with not associating anyone in worship.",
  },
  {
    t: "asma",
    q: "Tawhid al-asma wa’s-sifat means believing in Allah’s names and attributes:",
    opts: [
      "By likening them to the creation so people can imagine them",
      "As they came in the Book and Sunnah, without distortion, denial, asking how, or likening",
      "By explaining how they are in detail from reason alone",
      "By denying all attributes to avoid resemblance",
    ],
    ans: 1,
    fb: "Ahl as-Sunnah believe in the names and attributes mentioned in the texts, in a manner befitting Allah’s majesty, without tahrif, ta‘til, takyif, or tamthil.",
  },
  {
    t: "asma",
    q: "With regard to affirmation, Ahl as-Sunnah:",
    opts: [
      "Affirm only the names and deny the attributes",
      "Affirm what Allah affirmed for Himself, without distortion, denial, asking how, or likening",
      "Affirm whatever the mind can picture",
      "Wait until scholars agree on how the attributes are",
    ],
    ans: 1,
    fb: "They affirm what Allah affirmed in His Book or on the lips of His Messenger ﷺ, without misinterpreting, denying, discussing how, or likening Him to the creation.",
  },
  {
    t: "asma",
    q: "If a term is neither affirmed nor negated in the Quran and Sunnah, Ahl as-Sunnah:",
    opts: [
      "Use it freely because silence means permission",
      "Always reject the term and its meaning",
      "Refrain from the term, then accept or reject the meaning according to whether it befits Allah",
      "Decide by majority vote",
    ],
    ans: 2,
    fb: "They do not use terms with no textual ruling. They examine the meaning: false and unbefitting is rejected; true and not unbefitting is accepted.",
  },
  {
    t: "asma",
    q: "ash-Shura 42:11, “There is nothing like unto Him, and He is the Hearing, the Seeing,” teaches:",
    opts: [
      "Negation of all attributes",
      "That Allah’s hearing and seeing are like ours",
      "Negation of any resemblance, together with affirmation of hearing and seeing in a manner befitting Allah",
      "That only two attributes may be affirmed",
    ],
    ans: 2,
    fb: "The verse is the basic principle: deny likeness to the creation, and affirm the attributes as they came, befitting His majesty.",
  },
  {
    t: "asma",
    q: "Aisha رضي الله عنها could not hear the woman arguing with the Prophet ﷺ, yet Allah revealed that He heard her. This shows:",
    opts: [
      "Allah hears only what people nearby can hear",
      "Allah’s hearing encompasses all sounds and is not like created hearing",
      "The verse is only about the Prophet’s hearing",
      "Attributes should not be taken as real",
    ],
    ans: 1,
    fb: "She praised Allah Whose hearing encompasses all sounds. al-Mujadilah 58:1 affirms real hearing that is not like ours.",
  },
  {
    t: "asma",
    q: "When Allah negates injustice for Himself, Ahl as-Sunnah understand that:",
    opts: [
      "Only the word “injustice” is avoided, with no further meaning",
      "Injustice is negated, and the opposite — perfect justice — is affirmed",
      "Allah may be unjust in some cases",
      "Justice cannot be affirmed because that would be likening",
    ],
    ans: 1,
    fb: "Whatever Allah negates is an imperfect attribute. The opposite perfect attribute must be affirmed: injustice → justice, weariness → strength, sleep → being the Sustainer.",
  },
];

export function getAqeedah2Lesson(id) {
  return AQEEDAH2_LESSONS.find((lesson) => lesson.id === id);
}

export function aqeedah2CoursePath() {
  return AQEEDAH2_META.path;
}

export function aqeedah2StudyPath(lessonId) {
  const base = `${AQEEDAH2_META.path}/study`;
  return lessonId ? `${base}?lesson=${encodeURIComponent(lessonId)}` : base;
}

export function aqeedah2Banner() {
  return {
    code: "Aqeedah · Self-paced",
    title: AQEEDAH2_META.name,
    subtitle: AQEEDAH2_META.tagline,
    meta: [
      { label: "Units", value: String(AQEEDAH2_META.units) },
      { label: "Lessons", value: String(AQEEDAH2_STUDY_LESSONS.length) },
      { label: "Practice", value: "Flashcards · Quiz" },
    ],
  };
}

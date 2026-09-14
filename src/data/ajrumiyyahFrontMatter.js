/** Front matter from al-Tuḥfat al-Saniyyah (pp. 13–23) — bilingual, word-for-word */

function section(id, titleAr, titleEn, blocks) {
  return { id, titleAr, titleEn, blocks };
}

function b(ar, en, label = null) {
  return { label, ar, en };
}

/** Life timeline for Ibn Ājurrūm — Franklin-style horizontal timeline with maps & covers */
const IMG = "/images/ajrumiyyah-author";

export const AJRUMIYYAH_AUTHOR_TIMELINE = [
  {
    id: "birth",
    year: "672 AH",
    yearCe: "1273 CE",
    place: "Fas · Morocco",
    titleAr: "الولادة",
    titleEn: "Born in Fas",
    side: "above",
    ar: "أَبُو عَبْدِ اللَّهِ مُحَمَّدُ بْنُ مُحَمَّدِ بْنِ دَاوُدَ الصِّنْهَاجِيُّ الْآجُرُّومِيُّ، مِنْ عَائِلَةٍ مِنْ صَفْرَوَةَ بِالرِّيفِ، وَوُلِدَ بِفَاسَ.",
    en: "Abū ʿAbdullāh Muḥammad ibn Muḥammad ibn Dāwūd al-Sinhājī al-Ajurrūmī — from a tribal family of Safrawa in the Rif — was born in Fas (Fez).",
    image: `${IMG}/fez-terrain.jpg`,
    imageAlt: "Terrain map of Fez (Fas), Morocco",
    imageCaption: "Fas on the Rif foothills · Morocco",
  },
  {
    id: "youth",
    year: "Youth",
    yearCe: "Fas",
    place: "Fas",
    titleAr: "طَلَبُ الْعِلْمِ",
    titleEn: "Early studies",
    side: "above",
    ar: "قَضَى سِنِيَّ شَبَابِهِ يَدْرُسُ بِفَاسَ مَجْمُوعَةً مِنَ الْعُلُومِ.",
    en: "He spent his early years in Fas studying a range of Islamic disciplines.",
  },
  {
    id: "travel",
    year: "Journey",
    yearCe: "Eastward",
    place: "Cairo · Makkah",
    titleAr: "الرِّحْلَةُ وَالْإِجَازَةُ",
    titleEn: "Cairo, Ḥajj & ijāzah",
    side: "above",
    ar: "سَافَرَ إِلَى مَكَّةَ لِلْحَجِّ، وَمَرَّ بِالْقَاهِرَةِ فَدَرَسَ النَّحْوَ عَلَى أَبِي حَيَّانَ، وَحَصَلَ عَلَى إِجَازَةٍ بِالتَّدْرِيسِ.",
    en: "He travelled to Makkah for Ḥajj, studied Arabic grammar in Cairo under Abū Ḥayyān al-Gharnāṭī, and gained a certificate to teach.",
    image: `${IMG}/cairo-map.jpg`,
    imageAlt: "Map of Cairo",
    imageCaption: "Cairo — studied naḥw with Abū Ḥayyān",
    route: {
      from: "Fas",
      to: "Cairo",
      distanceKm: 3500,
      distanceLabel: "~3,500 km",
      note: "Fas → Cairo across North Africa",
      image: `${IMG}/fez-cairo-route.jpg`,
      imageAlt: "Route map from Fez to Cairo with distance",
    },
  },
  {
    id: "scholarship",
    year: "Mastery",
    yearCe: "Scholarship",
    place: "Naḥw · Qirāʾāt · Fiqh",
    titleAr: "عُلُومُهُ",
    titleEn: "Fields of mastery",
    side: "above",
    ar: "كَانَ فَقِيهًا وَنَحَّاتًا وَرِيَاضِيًّا، وَبَحْرًا فِي الْقِرَاءَاتِ وَالتَّجْوِيدِ، مَعْرُوفًا بِبَرَكَةِ مُصَنَّفَاتِهِ.",
    en: "A profound faqīh, accomplished grammarian, and masterful mathematician — an ocean in the qirāʾāt and tajwīd, known for blessing in his works.",
  },
  {
    id: "works",
    year: "Works",
    yearCe: "Makkah",
    place: "Authored facing the Kaʿbah",
    titleAr: "مُصَنَّفَاتُهُ",
    titleEn: "His writings",
    side: "above",
    ar: "الْمُقَدِّمَةُ الْآجُرُّومِيَّةُ · فَرَائِدُ الْمَعَانِي · مَجْمُوعَةُ أَرَاجِيزَ فِي الْقِرَاءَاتِ وَالتَّجْوِيدِ وَالْأَدَبِ.",
    en: "Al-Muqaddimah al-Ajrumiyyah; Farāʾid al-Maʿānī (on al-Shāṭibī’s poem); and collections of didactic poems on qirāʾāt, tajwīd, and adab.",
    works: [
      {
        id: "ajrumiyyah",
        titleAr: "الْمُقَدِّمَةُ الْآجُرُّومِيَّةُ",
        titleEn: "Al-Muqaddimah al-Ajrumiyyah",
        image: `${IMG}/book-ajrumiyyah.jpg`,
      },
      {
        id: "faraid",
        titleAr: "فَرَائِدُ الْمَعَانِي",
        titleEn: "Farāʾid al-Maʿānī",
        image: `${IMG}/book-faraid.jpg`,
      },
      {
        id: "arajiz",
        titleAr: "مَجْمُوعَةُ أَرَاجِيزَ",
        titleEn: "Arājīz collection",
        image: `${IMG}/book-arajiz.jpg`,
      },
    ],
  },
  {
    id: "death",
    year: "723 AH",
    yearCe: "1323 CE",
    place: "Fas · Ḥayy al-Andalūs",
    titleAr: "الْوَفَاةُ وَالدَّفْنُ",
    titleEn: "Death & burial",
    side: "above",
    ar: "دَرَّسَ أَهْلَ فَاسَ، ثُمَّ تُوُفِّيَ فِي مَوْطِنِهِ وَدُفِنَ فِي حَيِّ الْأَنْدَلُسِ. رَحِمَهُ اللَّهُ.",
    en: "He taught the people of Fas, then died in his hometown and was buried in the Andalūs quarter. May Allah have mercy upon him.",
    image: `${IMG}/fez-andalus-burial.jpg`,
    imageAlt: "Map of Fez Andalus quarter burial place",
    imageCaption: "Buried in Ḥayy al-Andalūs",
    burial: {
      quarter: "Ḥayy al-Andalūs",
      quarterAr: "حَيُّ الْأَنْدَلُسِ",
      city: "Fas (Fez)",
      distanceFromCenter: "~1–2 km",
      note: "Inside the Fez medina — the Andalusian quarter, across from the Qarawiyyīn side of the old city.",
    },
  },
];

export const AJRUMIYYAH_FRONT_MATTER = [
  section(
    "translators-note",
    "مُقَدِّمَةُ المُتَرْجِم",
    "Translator's Note",
    [
      b(
        null,
        "The main purpose of this translation is twofold:\n\nFirstly, to aid teachers in delivering classes on al-Tuḥfat al-Saniyyah. Having access to a translation will allow the teacher to spend more time in explaining the book rather than preparing a translation. Furthermore it can help to bridge the gap between the stronger and weaker students in a class (in terms of their Arabic comprehension), which sometimes gives difficulty to the teacher in assessing the level of teaching which should be delivered.\n\nSecondly, to serve as a bridge for students who may have learned the basics of Arabic but are not at a level yet to read an Arabic grammar book cover to cover purely in Arabic without difficulty. Depending on the level of the student they can read the Arabic and review their understanding with the English or use the English as an aid whilst reading the Arabic.\n\nIn order to fulfil this, the complete Arabic text has been provided and the translation has been kept as literal as possible, exceptions being in rare places where the translation would be strange if it was done in this manner.\n\nSome grammatical terms have been transliterated to aid the flow of the translation and due to the importance of them being known to the student. This has most commonly been done for the following terms:\n\n• Al-rafʿ, al-naṣb, al-khafḍ/al-jarr and al-jazm. These refer to the nominative, accusative, genitive and jussive states respectively. Words in these states are referred to as: marfūʿ, manṣūb, makhfūḍ/majrūr and majzūm.\n\n• The parts of the iḍāfa (possessive) construction: al-muḍāf (the possessed) and the muḍāf ilayh (the possessor).\n\nSupplementary notes have been extracted from the works of Shaykh ibn al-ʿUthaymīn and from classical works quoted in al-Ḥulal al-Dhahabiyyah ʿalā al-Tuḥfat al-Saniyyah.\n\nI ask Allah to accept this and cause it to aid the teaching of the language of His book, and that it become widespread in benefit like the illustrious works of our shaykh, Dr. V. Abdur Rahim (may Allah preserve him).",
      ),
    ],
  ),
  section(
    "foreword",
    "تَقْدِيم",
    "Foreword",
    [
      b(
        "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ، وَالصَّلَاةُ وَالسَّلَامُ عَلَى سَيِّدِ الْأَنْبِيَاءِ وَالْمُرْسَلِينَ، سَيِّدِنَا مُحَمَّدٍ، وَعَلَى آلِهِ وَصَحْبِهِ.",
        "All Praises belong to Allah, the Lord of all of creation and may the best of Blessings and most complete of salutations be upon the leader of the Prophets and Messengers, our leader Muhammad, and upon his family and his companions.",
      ),
      b(
        "تَقَدَّمَ: [أَمَامَكَ] كِتَابُ التُّحْفَةِ السَّنِيَّةِ بِشَرْحِ الْمُقَدِّمَةِ الْآجُرُّومِيَّةِ الَّذِي أَلَّفَهُ الشَّيْخُ مُحَمَّدُ مُحْيِي الدِّينِ عَبْدُ الْحَمِيدِ الْمِصْرِيُّ شَرْحًا لِلْمُقَدِّمَةِ الْآجُرُّومِيَّةِ. وَالْمُقَدِّمَةُ كِتَابٌ كَانَ الطُّلَّابُ يَحْفَظُونَهُ عَنْ ظَهْرِ قَلْبٍ مِنْ مَرْحَلَةٍ ابْتِدَائِيَّةٍ فِي دِرَاسَاتِهِمْ فِي النَّحْوِ. وَتَتَضَمَّنُ الْمُقَدِّمَةُ قَوَاعِدَ مُوجَزَةً جِدًّا، وَلِهَذَا وَجَدَ بَعْضُ الطُّلَّابِ صُعُوبَةً فِي فَهْمِهَا. فَقَامَ بَعْدَ تَأْلِيفِ الْكِتَابِ كَثِيرٌ مِنَ الْعُلَمَاءِ بِشَرْحِ مَا فِيهِ، وَلَعَلَّ مِنْ آخِرِهِمْ الشَّيْخُ صَاحِبُ هَذَا الشَّرْحِ. وَقَدَّمَ الشَّيْخُ مُحَمَّدٌ اهْتِمَامًا كَبِيرًا بِتَحْرِيرِ كُتُبِ النَّحْوِ، وَفِي غَيْرِهِ مِنَ الْعُلُومِ؛ خَاصَّةً التَّرْكِيزَ عَلَى كُتُبِ الْعَلَّامَةِ ابْنِ هِشَامٍ مِنْهَا الشُّذُورُ، وَالْقَطْرُ، وَالْمُغْنِي، وَغَيْرُهَا.",
        "To begin: [Before you is] the book al-Tuḥfat al-Saniyyah bi Sharḥ al-Muqadimmat al-Ajrumiyyah which was authored by the noble Shaykh Muhammad Muḥyī al-Dīn ʿAbd al-Ḥamīd al-Miṣrī in explanation of al-Muqadimmat al-Ajrumiyyah. The Muqadimmah is a book which students used to memorise by heart from an elementary level in their studies in Arabic grammar. The Muqadimmah features rules which are very concise and because of this, some of the students found it difficult to understand. As a result, many scholars after the book was authored stood to explain its contents, and perhaps from the very last of them was the shaykh who authored this explanation. Shaykh Muḥammad gave heavy importance to editing the books of Arabic grammar, and in other disciplines; especially concentrating on the books of al-ʿAllāmah ibn Hishām including al-Shudhur, al-Qaṭr, al-Mughnī, as well as others.",
      ),
      b(
        "وَأَمَّا هَذَا الْكِتَابُ خَاصَّةً، فَإِنَّ الشَّيْخَ يَشْمَلُ جَمِيعَ الْقَوَاعِدِ الْمَذْكُورَةِ فِي كِتَابِ الْآجُرُّومِيَّةِ، وَيُضِيفُ إِلَيْهَا أَمْثِلَةً وَعِبَارَاتٍ صَحِيحَةً تُزِيدُهُ وُضُوحًا، وَهِيَ رَائِعَةٌ وَسَهْلَةُ الْهَضْمِ جِدًّا.",
        "As for this book in particular, the shaykh includes all the rules mentioned in the book of al-Ajrumiyyah and also adds to it correct examples and wordings which add clarity, which are fantastic and very easy to digest.",
      ),
      b(
        "وَبِهَذِهِ الْمُبَادَرَةِ إِلَى كُتُبِ النَّحْوِ — لِجَعْلِهَا أَقْرَبَ لِلْمُبْتَدِئِينَ لِيَنْتَفِعُوا بِهَا — تُنْشِئُ زَخْمًا لِإِكْمَالِ كُتُبِ النَّحْوِ الْأَكْبَرِ وَالْأَعْمَقِ عَلَى نَحْوٍ مُشَابِهٍ. فَإِذَا أَكْمَلَ الْمُتَعَلِّمُ الْمُبْتَدِئُ دِرَاسَتَهُ مِنْ كُتُبٍ مِثْلِ هَذَا، فَتُفْتَحُ لَهُ طَرِيقٌ لِقِرَاءَةِ كُتُبٍ أَوْسَعَ مِنْهُ. وَبِالِانْتِفَاعِ مِنْ جَمِيعِ هَذَا، يَكُونُ طَالِبُ الْعِلْمِ — بِحَمْدِ اللَّهِ — قَوِيًّا فِي اللُّغَةِ الْعَرَبِيَّةِ.",
        "With this initiative given to the books of Arabic grammar—in order to make such books easier for beginner learners to benefit from—it creates a momentum to complete bigger and more complex books of grammar in a similar fashion. So when the beginner learner completes his studies from books like this, it opens the path for him to read books which are more extensive than this. Benefiting from all of this, the student of knowledge then—with the praise of Allah—will have a strong grasp of the Arabic language.",
      ),
      b(
        "فَأَسْأَلُ اللَّهَ أَنْ يُجِيزَ عَلَى مَنْ عَمِلَ فِي هَذَا الْكِتَابِ أَفْضَلَ الْجَزَاءِ عَلَى جُهُودِهِمْ، وَأَنْ يَرْحَمَ الْمُؤَلِّفَ، وَأَنْ نَنْتَفِعَ بِأَعْمَالِنَا الصَّالِحَةِ. وَالْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ.",
        "So I ask Allah to reward those who worked on this book with the best of rewards for their efforts, that he has mercy upon the author, and that we all benefit from our righteous deeds. In the end, all Praises are for Allah, the Lord of all creation.",
        "Summarised from a foreword written by Shaykh ʿAbd al-Ghanī al-Daqr.",
      ),
    ],
  ),
  section(
    "about-this-book",
    "عَنْ هَذَا الْكِتَاب",
    "About This Book",
    [
      b(
        "هَذِهِ الرِّسَالَةُ الصَّغِيرَةُ الْمُفِيدَةُ تُنَافِسُ فِي شُهْرَتِهَا كُتُبَ النَّحْوِ مَعَ تُحْفَةِ ابْنِ مَالِكٍ الْمُسَمَّاةِ بِالْأَلْفِيَّةِ. وَهِيَ مَصْنَفٌ نَافِعٌ جِدًّا هَدَفُهُ الْإِيجَازُ. وَقَدْ أَدْخَلَ الْمُؤَلِّفُ فِيهَا مِنْ جُمَلِ الْكِتَابِ الْمَسْمُوعِ بِالْجُمَلِ لِلْعَلَّامَةِ أَبِي الْقَاسِمِ عَبْدِ الرَّحْمَنِ بْنِ إِسْحَاقَ الزَّجَّاجِيِّ.",
        "This small but beneficial treatise competes itself in popularity amongst Arabic grammar books with the masterpiece of Ibn Mālik entitled Alfiyyah. It is a highly beneficial work with an objective of brevity. The author incorporated aspects of the book al-Jumal which was written by al-ʿAllāmah Abū Qāsim ʿAbd al-Raḥmān ibn Isḥāq al-Zujājī.",
      ),
      b(
        "وَقَدْ أُلِّفَ الْكِتَابُ بِمَكَّةَ — حَفِظَهَا اللَّهُ — وَالْمُؤَلِّفُ جَالِسٌ أَمَامَ الْكَعْبَةِ الْمُشَرَّفَةِ. فَقَبِلَ اللَّهُ تَعَالَى هَذَا الْعَمَلَ وَكَثُرَ انتِشَارُهُ فِي الْبِلَادِ مِنْ مَشْرِقِهَا إِلَى مَغْرِبِهَا. وَتَفَانَى طَلَبَةُ الْعِلْمِ فِي حِفْظِهِ، فَصَارَ هَذَا الْكِتَابُ أَوَّلَ لُبِّنَةٍ لِكُلِّ طَالِبِ عِلْمٍ أَرَادَ أَنْ يُعْطِيَ النَّحْوَ حَقَّهُ وَيَتَمَكَّنَ مِنْهُ.",
        "The book was authored in Makkah, may Allah preserve its honour, whilst the author was sitting in front of the Noble Kaʿbah. As a result, Allah, the Most High, has accepted this work and increased its presence in lands from the east to the west. Beginner students of knowledge dedicated themselves to memorising this book by heart, thus it transpired that this book became the first building block for every student of knowledge who wanted to give Arabic grammar its utmost importance and in gaining a firm grounding of it.",
      ),
      b(
        "وَكَمَا تَفَانَى طَلَبَةُ الْعِلْمِ فِي هَذَا الْكِتَابِ، تَفَانَى الْعُلَمَاءُ وَالشُّرَّاحُ فِيهِ سَعْيًا لِبَيَانِ قَوَاعِدِهِ — وَهُوَ مَمْلُوءٌ بِالنَّفْعِ مَعَ الْإِيجَازِ. وَلَمْ يَفُتِ الْعُلَمَاءُ فُرْصَةَ تَنْظِيمِهِ شِعْرًا، وَتَنَافَسُوا فِي ذَلِكَ كَمَا تَنَافَسُوا فِي نَشْرِهِ لِيَكْثُرَ انتِشَارُهُ.",
        "Just as the students of knowledge dedicated themselves to this book, the scholars and annotators also dedicated themselves to it in seeking to clarify the rules in the book—it being full of benefit whilst maintaining brevity. The scholars have not left the opportunity to poeticise the book slip away, and they competed in this just as they competed with one another in publishing the book in order for it to have mass distribution.",
      ),
      b(
        "وَكَانَ هَذَا الْكِتَابُ مِنْ أَوَّلِ كُتُبِ النَّحْوِ الْعَرَبِيِّ الَّتِي طُبِعَتْ لِلْمَرَّةِ الْأُولَى فِي رُومَا، قَبْلَ نَحْوِ خَمْسِ قُرُونٍ فِي 1592. فَلِهَذَا قَضَى اللَّهُ تَعَالَى أَنْ يَصِلَ هَذَا الْكِتَابُ إِلَى مِصْرَ، فَشَرَحَهُ النَّحَّاتُ الْعَظِيمُ الشَّيْخُ خَلِيلُ الْأَزْهَرِيُّ وَطُبِعَ فِي أَمْسْتِرْدَامَ فِي 1756.",
        "This book was one of the preceding Arabic grammar books which were printed for the first time in Rome, around five centuries ago in 1592. For this reason, Allah, the Most High, decreed that this book reach Egypt and the great grammarian Shaykh Khalīl al-Azharī explained the book and had it printed in Amsterdam in 1756.",
      ),
      b(
        "وَهَذَا الشَّرْحُ الْمُوجَزُ الَّذِي بَيْنَ أَيْدِينَا مِنَ الشُّرُوحِ الْمُعَاصِرَةِ عَلَى الْمُقَدِّمَةِ الْآجُرُّومِيَّةِ، نَافِعٌ بِذَاتِهِ. وَقَدْ أَحْسَنَ الشَّيْخُ مُحَمَّدُ مُحْيِي الدِّينِ عَبْدُ الْحَمِيدِ — رَحِمَهُ اللَّهُ — شَرْحَهُ، فَجَعَلَهُ سَهْلَ الْفَهْمِ، وَتَرْتِيبُهُ الْبَسِيطُ يُسَهِّلُ مُتَابَعَتَهُ وَفَهْمَهُ. وَيَرْبِطُ الْكِتَابُ بَيْنَ الْمَوَاضِيعِ وَقَوَاعِدِ النَّحْوِ بِكَفَاءَةٍ، وَيَتَضَمَّنُ تَمَارِينَ نَافِعَةً لِلطَّالِبِ لِيَتَدَرَّبَ عَلَيْهَا. وَيُسْأَلُ الطُّلَّابُ لِيُرَاقِبُوا تَقَدُّمَهُمْ أَوْ لِيُوَسِّعُوا تَفْكِيرَهُمْ فِي تَقْيِيمِ أَنْفُسِهِمْ فِي إِجَابَاتِهِمْ.",
        "This concise explanation that we have in front of us is from the contemporary explanations given to al-Muqadimmah al-Ajrumiyyah, which is beneficial in its own right. Shaykh Muḥammad Muḥyī al-Dīn ʿAbd al-Ḥamīd (may Allah have Mercy on him) has excelled in its explanation, keeping it easy to understand and its simple layout leaves it very easy to follow and comprehend. More so, the book connects the topics and grammar rules in the book efficiently, featuring beneficial exercises for the student to practice. The students are quizzed in order for them to monitor their progress or to broaden their thought processes in constantly self-evaluating in the answers they give.",
      ),
      b(
        "فَأَسْأَلُ اللَّهَ تَعَالَى أَنْ يُوَفِّقَنَا لِمَا يُحِبُّ وَيَرْضَى، وَأَنْ يَتَقَبَّلَ مِنَّا — بِفَضْلِهِ وَكَرَمِهِ — فِي مِيزَانِ حَسَنَاتِنَا وَحَسَنَاتِ آبَائِنَا وَعُلَمَائِنَا. إِنَّهُ عَلَى ذَلِكَ قَدِيرٌ، وَالْحَمْدُ لِلَّهِ الَّذِي بِنِعْمَتِهِ تَتِمُّ الصَّالِحَاتُ.",
        "So I ask Allah, the Most High, that He gives us the ability to do whatever He loves and is pleased with, and that He accepts from us—through His favour and generosity—into our record of good deeds and the good deeds of our fathers and our scholars. Truly, He is able to do this and all praises are for Allah, the One by Whose favour that good deeds are completed.",
        "Summarised from an introduction written by ʿAbd al-Jalīl al-ʿAṭā al-Bakrī.",
      ),
    ],
  ),
  section(
    "author-biography",
    "سِيرَةُ الْمُؤَلِّفِ",
    "Biography of the Author (Ibn Ājurrūm)",
    [
      b(
        "أَبُو عَبْدِ اللَّهِ مُحَمَّدُ بْنُ مُحَمَّدِ بْنِ دَاوُدَ الصِّنْهَاجِيُّ الْآجُرُّومِيُّ مِنْ عَائِلَةٍ قَبِيلِيَّةٍ تَنْتَمِي إِلَى بَلْدَةٍ تُسَمَّى صَفْرَوَةَ فِي مِنْطَقَةِ الرِّيفِ بِالْمَغْرِبِ. وَوُلِدَ فِي مَدِينَةٍ تُسَمَّى فَاسَ فِي 672/1273.",
        "Abū ʿAbdullāh Muḥammad ibn Muḥammad ibn Dāwūd al-Sinhājī al-Ajurrūmī comes from a tribal family which stems from a suburb town called Safrawa in the Rif area in Morocco. He himself was born in a city called Fas in 672/1273.",
      ),
      b(
        "قَضَى سِنِيَّ شَبَابِهِ يَدْرُسُ بِفَاسَ، وَدَرَسَ فِيهَا مَجْمُوعَةً مِنَ الْعُلُومِ. ثُمَّ سَافَرَ شَرْقًا إِلَى مَكَّةَ لِلْحَجِّ وَمَرَّ بِالْقَاهِرَةِ وَدَرَسَ النَّحْوَ فِيهَا عَلَى الشَّيْخِ أَبِي حَيَّانَ مُحَمَّدِ بْنِ يُوسُفَ الْغَرْنَاطِيِّ الْأَنْدَلُسِيِّ. وَحَصَلَ هُنَاكَ عَلَى إِجَازَةٍ بِالتَّدْرِيسِ.",
        "He spent his early years studying in Fas during which he studied a range of Islamic disciplines. Thereafter he travelled east to Makkah for Ḥajj and passed through Cairo and studied Arabic grammar there under the scholarly figure of Abū Ḥayyān Muḥammad ibn Yūsuf al-Gharnāṭī al-Andulusī. Here, he gained a certificate to teach.",
      ),
      b(
        "وَكَانَ الشَّيْخُ مُحَمَّدُ بْنُ آجُرُّومَ — رَحِمَهُ اللَّهُ — فَقِيهًا عَمِيقًا وَفَرِيدًا، وَنَحَّاتًا بَارِعًا، وَرِيَاضِيًّا مُتْقِنًا. وَكَانَ بَحْرًا فِي الْقِرَاءَاتِ وَعُلُومِ التَّجْوِيدِ. وَكَانَ كَاتِبًا وَمَعْرُوفًا بِكَثْرَةِ الْبَرَكَةِ وَالْخَيْرِ فِي مُصَنَّفَاتِهِ.",
        "Shaykh Muḥammad ibn Ājurrūm (may Allah have Mercy upon him) was a profound and unique faqīh, a well accomplished grammarian and a masterful mathematician. He was an ocean of knowledge in the different recitations of the Qurʾān and in the sciences of tajwīd. He was a writer and was known to have a lot of blessing and goodness in his works.",
      ),
      b(
        "مِنْ مُصَنَّفَاتِهِ:\n• الْمُقَدِّمَةُ الْآجُرُّومِيَّةُ فِي مَبَادِئِ عِلْمِ الْعَرَبِيَّةِ.\n• فَرَائِدُ الْمَعَانِي فِي شَرْحِ حِرْزِ الْأَمَانِي — شَرْحٌ لِنَظْمِ الشَّاطِبِيِّ فِي الْقِرَاءَاتِ السَّبْعِ.\n• مَجْمُوعَةُ أَرَاجِيزٍ فِي الْقِرَاءَاتِ وَالتَّجْوِيدِ وَالْأَدَبِ وَغَيْرِهَا.",
        "From his works:\n• Al-Muqaddimah al-Ajrumiyyah fī Mabādiʾ ʿIlm al-ʿArabiyyah.\n• Farāʾid al-Maʿānī fī Sharḥ Ḥirz al-Amānī — a commentary on the poem of al-Shāṭibī regarding the seven qirāʾāt (methods of recitation).\n• Majmūʿat Arājīz fī al-Qirāʾāt wa al-Tajwīd wa al-Adab wa Ghayrihā.",
      ),
      b(
        "وَكَانَ يُدَرِّسُ أَهْلَ مَدِينَتِهِ فَاسَ، ثُمَّ تُوُفِّيَ فِي مَوْطِنِهِ فِي 723/1323، وَدُفِنَ فِي حَيِّ الْأَنْدَلُسِ. رَحِمَهُ اللَّهُ وَأَثَابَهُ عَلَى جُهُودِهِ.",
        "He used to teach the people of his city Fas and later died in his hometown in 723/1323. He was buried in the Andalūs area. May Allah have mercy upon him and reward him immensely for his efforts.",
      ),
    ],
  ),
  section(
    "commentator-biography",
    "سِيرَةُ الشَّارِحِ",
    "Biography of the Commentator (Muḥammad Muḥyī al-Dīn ʿAbd al-Ḥamīd)",
    [
      b(
        "أَبُو رَجَاءٍ مُحَمَّدُ مُحْيِي الدِّينِ بْنُ عَبْدِ الْحَمِيدِ بْنِ إِبْرَاهِيمَ الْمِصْرِيُّ وُلِدَ فِي 1318/1900 فِي قَرْيَةٍ بِالْمُحَافَظَةِ الشَّرْقِيَّةِ بِمِصْرَ.",
        "Abū Rajāʾ Muḥammad Muḥyī al-Dīn ibn ʿAbd al-Ḥamīd ibn Ibrāhīm al-Miṣrī was born in 1318/1900, in a village in the eastern province of Egypt.",
      ),
      b(
        "بَدَأَ دِرَاسَتَهُ بِمَدِينَةِ دُمْيَاطَ، ثُمَّ قُبِلَ بِالْجَامِعَةِ الْأَزْهَرِيَّةِ بِالْقَاهِرَةِ. تَخَرَّجَ فِي 1925 وَتَوَلَّى التَّدْرِيسَ فِي مِصْرَ وَالسُّودَانِ. وَاصِلَ بِنَاءَ سُمْعَتِهِ حَتَّى اخْتِيرَ عَمِيدًا لِكُلِّيَّةِ الدِّرَاسَاتِ الْعَرَبِيَّةِ بِالْأَزْهَرِ وَعُضْوًا بِهَيْئَةِ اللُّغَةِ الْعَرَبِيَّةِ بِالْقَاهِرَةِ.",
        "He began his studies in the city of Damietta and then later was accepted into the famous university of al-Azhar in Cairo. He graduated in 1925 and held teaching jobs in Egypt and neighbouring Sudan. He continued to build his reputation until he was chosen to be the dean of the Faculty of Arabic Studies at al-Azhar and a member of the Panel of Arabic Linguistics in Cairo.",
      ),
      b(
        "وَاشْتَهَرَ الشَّيْخُ بِالتَّأْلِيفِ وَالتَّحْرِيرِ حَتَّى بَلَغَتْ مُصَنَّفَاتُهُ الْعَشَرَاتِ فِي مَجَالَاتٍ مُتَنَوِّعَةٍ. وَكَانَ تَرْكِيزُهُ الْأَسَاسِيُّ عَلَى اللُّغَةِ الْعَرَبِيَّةِ. وَقَدَّمَ طُبَعَاتٍ مُعَلَّقَةً لِكُتُبِ ابْنِ هِشَامٍ مِنْهَا شَرْحُ الْقَطْرِ وَمُغْنِي اللَّبِيبِ.",
        "The shaykh became famous for authoring and editing books until the number of books published by the shaykh numbered in their tens in a range of different disciplines. His major focus was in Arabic linguistics. He gave special attention to the books of Ibn Hishām, presenting his annotated editions of many of his works such as Sharḥ al-Qaṭr and Mughnī al-Labīb.",
      ),
      b(
        "وَهَكَذَا أَصْبَحَ الشَّيْخُ مُحَمَّدُ مُحْيِي الدِّينِ عَالِمًا مَشْهُورًا فِي هَذِهِ الْأُمَّةِ، حَتَّى لَقَّبَهُ بَعْضُهُمْ بِـ «السُّيُوطِيِّ الْعَصْرِ». وَتُوُفِّيَ بِالْقَاهِرَةِ عَامَ 1393/1973، رَحِمَهُ اللَّهُ رَحْمَةً وَاسِعَةً.",
        "This is how Shaykh Muḥammad Muḥyī al-Dīn became a renowned scholar of this Ummah and a well-established researcher, to the extent that some even coined the nickname of “Suyūṭī al-ʿAṣr” (the Suyūṭī of this era). He passed away in Cairo during the year 1393/1973. May Allah have mercy upon the shaykh with an abundance of His mercy.",
      ),
    ],
  ),
  section(
    "commentators-introduction",
    "مُقَدِّمَةُ الشَّارِحِ",
    "Author's / Commentator's Introduction",
    [
      b(
        "الْحَمْدُ لِلَّهِ وَحْدَهُ، وَالصَّلَاةُ عَلَى مَنْ لَا نَبِيَّ بَعْدَهُ مِنْ عِبَادِهِ الَّذِينَ اصْطَفَى.",
        "All praises are for Allah alone and His Peace be upon His Slaves that He has Chosen.",
      ),
      b(
        "هَذَا الشَّرْحُ وَاضِحُ الْمَعَانِي، بَادِي الْإِشَارَاتِ، مَلِيءٌ بِالثِّمَارِ، سَهْلُ الْقِطَافِ، كَثِيرُ الْأَسْئِلَةِ وَالتَّمَارِينِ. وَأَسْعَى بِهَذَا الْكِتَابِ إِلَى التَّقَرُّبِ إِلَى اللَّهِ تَعَالَى، لِيَتَسَهَّلَ فَهْمُ كِتَابِ الْمُقَدِّمَةِ الْآجُرُّومِيَّةِ عَلَى طُلَّابِ الْعِلْمِ الْمُبْتَدِئِينَ.",
        "This explanation is clear in its meanings, apparent in its illustrations, full of fruits, easy to pick from, plentiful in its questions and exercises. I seek by this book to gain closer to Allah, the Most High, so that the understanding of the book al-Muqadimmat al-Ajrumiyyah can be made easy for novice students of knowledge.",
      ),
      b(
        "وَدِرَاسَةُ مِثْلِ هَذَا الْكِتَابِ تَفْتَحُ لِلْإِنْسَانِ أَبْوَابَ تَعَلُّمِ اللُّغَةِ الْعَرَبِيَّةِ — وَهِيَ لُغَةُ سَيِّدِنَا وَمَوْلَانَا رَسُولِ اللَّهِ ﷺ — وَلُغَةُ الْكِتَابِ الْعَزِيزِ.",
        "Studying the likes of this book opens the doors for a person to learn Arabic—which is the language spoken by our leader and master, the Messenger of Allah (peace and blessings of Allah be upon him, his family and companions), and it is the language of the Kitāb al-ʿAzīz (the Qurʾān).",
      ),
      b(
        "رَبَّنَا عَلَيْكَ تَوَكَّلْنَا وَإِلَيْكَ أَنَبْنَا وَإِلَيْكَ الْمَصِيرُ. رَبَّنَا اغْفِرْ لِي وَلِوَالِدَيَّ وَلِلْمُؤْمِنِينَ يَوْمَ يَقُومُ الْحِسَابُ.",
        "Our Lord, upon you we have relied upon and to You we turn and to You is our final end. Our Lord, forgive me and my parents and the believers on the Day of Accountability.",
      ),
      b(
        "كَتَبَهُ مَنْ يَرْجُو تَكْرِيمَ اللَّهِ لَهُ: مُحَمَّدُ مُحْيِي الدِّينِ عَبْدُ الْحَمِيدِ.",
        "Written by the one who seeks to be honoured by Allah: Muḥammad Muḥyī al-Dīn ʿAbd al-Ḥamīd.",
      ),
    ],
  ),
  section(
    "intro-to-grammar",
    "تَمْهِيدٌ فِي النَّحْوِ",
    "An Introduction [to Grammar]",
    [
      b(
        "[يُغَطَّى فِي هَذَا الْقِسْمِ:] تَعْرِيفُ النَّحْوِ، وَمَوْضُوعُهُ، وَفَوَائِدُهُ، وَمَنْزِلَتُهُ، وَوَاضِعُهُ، وَحُكْمُ تَعَلُّمِهِ.",
        "[In this section we will cover:] the definition of grammar, its subject matter, its benefits, where it belongs to, its formulator, and the Islamic ruling related to it.",
      ),
      b(
        "لِلْكَلِمَةِ «نَحْوٌ» فِي اللُّغَةِ مَعَانٍ مُتَنَوِّعَةٌ، مِنْهَا «نَحْوَ فُلَانٍ» أَيْ فِي جِهَتِهِ. وَمِنْهَا التَّشَابُهُ وَالتَّقْلِيدُ، نَحْوُ قَوْلِكَ: مُحَمَّدٌ نَحْوُ عَلِيٍّ.",
        "The definition of the word nahw in the Arabic language has many different meanings. From them it includes “in the direction” such as a person saying, “I left to go in the direction of such and such person”. It also includes a resemblance and an imitation of, such as a person saying Muḥammad is like ʿAlī.",
      ),
      b(
        "وَأَمَّا «نَحْوٌ» فِي اصْطِلَاحِ النَّحَاةِ فَهُوَ: عِلْمٌ بِقَوَاعِدَ يُعْرَفُ بِهَا أَحْكَامُ آخِرِ الْكَلِمِ الْعَرَبِيِّ فِي وُجُوهِهَا، مِنَ الْإِعْرَابِ وَالتَّبْنِي وَغَيْرِهِمَا.",
        "The word nahw in its technical definition is defined as, “The knowledge of principles which are used to define the rulings connected to word endings in the Arabic language within their structural contexts. This includes [words that take] inflection, and [words that have] fixed word-endings etc.”",
      ),
      b(
        "وَمَوْضُوعُ النَّحْوِ: الْأَلْفَاظُ الْعَرَبِيَّةُ، أَيْ دِرَاسَةُ أَحْوَالِهَا الْإِعْرَابِيَّةِ كَمَا سَيَأْتِي.",
        "The subject matter of Arabic grammar is the Arabic vocabulary, i.e. studying their [grammatical] cases, as mentioned above.",
      ),
      b(
        "وَفَائِدَةُ تَعَلُّمِ النَّحْوِ: أَنَّهُ يُعَوِّدُ اللِّسَانَ عَلَى تَجَنُّبِ الْأَخْطَاءِ فِي الْكَلَامِ الْعَرَبِيِّ، وَيُمَكِّنُ الطَّالِبَ مِنْ فَهْمِ الْقُرْآنِ الْكَرِيمِ وَالْأَحَادِيثِ النَّبَوِيَّةِ فَهْمًا صَحِيحًا؛ وَهُمَا مَصْدَرَا الشَّرِيعَةِ الْإِسْلَامِيَّةِ الَّذِي يَدُورُ عَلَيْهِمَا الدِّينُ كُلُّهُ.",
        "The benefit of studying Arabic grammar is that it trains the tongue against making mistakes in Arabic speech. It enables the learner to understand the Noble Qurʾān and the Prophetic narrations with the correct understanding; both of which are the primary sources of the Islamic Sharīʿah which the whole religion revolves around.",
      ),
      b(
        "وَالنَّحْوُ مِنْ جُمْلَةِ الْعُلُومِ الْعَرَبِيَّةِ.",
        "Arabic grammar belongs to the broader discipline of Arabic sciences.",
      ),
      b(
        "وَوَاضِعُهُ أَوَّلًا: النَّحَّاتُ أَبُو الْأَسْوَدِ الدُّؤَلِيُّ بَعْدَ أَنْ أَمَرَهُ أَمِيرُ الْمُؤْمِنِينَ عَلِيُّ بْنُ أَبِي طَالِبٍ رَضِيَ اللَّهُ عَنْهُ.",
        "It was initially formulated by the grammarian Abū al-Aswad al-Duʾalī after being commanded by the Leader of the Faithful, ʿAlī ibn Abī Ṭālib (may Allah be pleased with him).",
      ),
      b(
        "وَحُكْمُ تَعَلُّمِ النَّحْوِ: أَنَّهُ فَرْضُ كِفَايَةٍ، فَإِنِ انْتَدَبَ لَهُ أَحَدٌ صَارَ فَرْضَ عَيْنٍ عَلَيْهِ.",
        "The ruling on studying Arabic grammar is that it is a communal obligation, however someone may be specified to study it thus it becomes an individual obligation upon him.",
      ),
    ],
  ),
];

export function frontMatterSection(id) {
  return AJRUMIYYAH_FRONT_MATTER.find((s) => s.id === id) ?? null;
}

// "About this book" notes for the word-study panel.
// `ar` passages are quoted verbatim from the printed editions (digital text: OpenITI);
// editors' footnote numbers are omitted and "…" marks skipped text.
// `en` is a translation by Claude (AI) and is labelled as such in the UI.

const SIYAR = "al-Dhahabī, Siyar Aʿlām al-Nubalāʾ, ed. Shuʿayb al-Arnaʾūṭ et al., Muʾassasat al-Risāla, 3rd ed. 1405 AH / 1985";
const BUGHYA = "al-Suyūṭī, Bughyat al-Wuʿāt fī Ṭabaqāt al-Lughawiyyīn wa-l-Nuḥāt, ed. Muḥammad Abū al-Faḍl Ibrāhīm, al-Maktaba al-ʿAṣriyya, Ṣaydā";

export const LEXICON_AUTHORS = {
  maq: {
    summary:
      "Ibn Fāris was a language scholar and ḥadīth narrator of Qazwīn, Hamadhān and Rayy (d. 395 AH). Maqāyīs al-Lugha traces every root back to its one or two core meanings. In his introduction he names the five books he built it on and his chain of transmission to each.",
    quotes: [
      {
        title: "In his own words — his sources and his chains to them",
        cite: "Ibn Fāris, Maqāyīs al-Lugha, introduction, vol. 1, pp. 3–4 (ed. Hārūn, Dār al-Fikr 1979)",
        ar: [
          "قال أحمد: أقول وبالله التوفيق: إن للغة العرب مقاييس صحيحة، وأصولا تتفرع منها فروع. وقد ألف الناس في جوامع اللغة ما ألفوا، ولم يعربوا في شيء من ذلك عن مقياس من تلك المقاييس، ولا أصل من الأصول. والذي أومأنا إليه باب من العلم جليل، وله خطر عظيم. وقد صدرنا كل فصل بأصله الذي يتفرع منه مسائله.",
          "وبناء الأمر في سائر ما ذكرناه على كتب مشتهرة عالية، تحوي أكثر اللغة. فأعلاها وأشرفها كتاب أبي عبد الرحمن الخليل بن أحمد، المسمى (كتاب العين) أخبرنا به علي بن إبراهيم القطان، فيما قرأت عليه، أخبرنا أبو العباس أحمد بن إبراهيم المعداني، عن أبيه إبراهيم بن إسحاق عن بندار بن لزة الأصفهاني، ومعروف بن حسان عن الليث، عن الخليل.",
          "ومنها كتابا أبي عبيد في (غريب الحديث)، و(مصنف الغريب) حدثنا بهما علي بن عبد العزيز عن أبي عبيد.",
          "ومنها (كتاب المنطق) وأخبرني به فارس بن زكريا عن أبي نصر ابن أخت الليث بن إدريس، عن الليث، عن ابن السكيت.",
          "ومنها كتاب أبي بكر بن دريد المسمى (الجمهرة)؛ وأخبرنا به أبو بكر محمد بن أحمد الأصفهاني، وعلي بن أحمد الساوي عن أبي بكر.",
          "فهذه الكتب الخمسة معتمدنا فيما استنبطناه من مقاييس اللغة، وما بعد هذه الكتب فمحمول عليها، وراجع إليها؛ حتى إذا وقع الشيء النادر نصصناه إلى قائله إن شاء الله.",
        ],
        en: [
          "Aḥmad said: I say, and success is from Allah: the language of the Arabs has sound measures and roots from which branches grow. People have compiled comprehensive works on the language, but none of them set out any of these measures or roots. What we point to is a noble field of knowledge of great importance. We have opened every section with the root from which its questions branch.",
          "Everything we mention rests on well-known, high-ranking books that contain most of the language. The highest and noblest of them is the book of Abū ʿAbd al-Raḥmān al-Khalīl ibn Aḥmad called Kitāb al-ʿAyn. ʿAlī ibn Ibrāhīm al-Qaṭṭān transmitted it to us — I read it to him — from Abū al-ʿAbbās Aḥmad ibn Ibrāhīm al-Maʿdānī, from his father Ibrāhīm ibn Isḥāq, from Bundār ibn Lizza al-Aṣfahānī and Maʿrūf ibn Ḥassān, from al-Layth, from al-Khalīl.",
          "Among them are Abū ʿUbayd’s two books, Gharīb al-Ḥadīth and Muṣannaf al-Gharīb; ʿAlī ibn ʿAbd al-ʿAzīz narrated both to us from Abū ʿUbayd.",
          "Among them is Kitāb al-Manṭiq [Ibn al-Sikkīt’s Iṣlāḥ al-Manṭiq]; Fāris ibn Zakariyyā [his father] transmitted it to me from Abū Naṣr, the nephew of al-Layth ibn Idrīs, from al-Layth, from Ibn al-Sikkīt.",
          "Among them is the book of Abū Bakr ibn Durayd called al-Jamhara; Abū Bakr Muḥammad ibn Aḥmad al-Aṣfahānī and ʿAlī ibn Aḥmad al-Sāwī transmitted it to us from Abū Bakr.",
          "These five books are what we rely on in deriving the measures of the language. Whatever comes after them is based on them and goes back to them; and when something rare occurs, we attribute it to the one who said it, in shāʾ Allāh.",
        ],
      },
      {
        title: "al-Dhahabī on Ibn Fāris — teachers, students, standing",
        cite: `${SIYAR}, vol. 17, pp. 103–105 (no. 65)`,
        ar: [
          "الإمام، العلامة، اللغوي، المحدث، أبو الحسين أحمد بن فارس بن زكريا بن محمد بن حبيب القزويني، المعروف بالرازي، المالكي، اللغوي، نزيل همذان، وصاحب كتاب (المجمل).",
          "حدث عن: أبي الحسن علي بن إبراهيم بن سلمة القطان، وسليمان ابن يزيد الفامي، وعلي بن محمد بن مهرويه القزوينيين، وسعيد بن محمد القطان، ومحمد بن هارون الثقفي، وعبد الرحمن بن حمدان الجلاب، وأحمد بن عبيد الهمذانيين، وأبي بكر بن السني الدينوري، وأبي القاسم الطبراني، وطائفة.",
          "حدث عنه: أبو سهل بن زيرك، وأبو منصور محمد بن عيسى، وعلي بن القاسم الخياط المقرئ، وأبو منصور بن المحتسب، وآخرون.",
          "مولده بقزوين، ومرباه بهمذان، وأكثر الإقامة بالري. وكان رأسا في الأدب، بصيرا بفقه مالك، مناظرا متكلما على طريقة أهل الحق، ومذهبه في النحو على طريقة الكوفيين، جمع إتقان العلم إلى ظرف أهل الكتابة والشعر. وله مصنفات ورسائل، وتخرج به أئمة. …",
          "قال سعد بن علي الزنجاني: كان أبو الحسين من أئمة اللغة، محتجا به في جميع الجهات غير منازع، رحل إلى الأوحد في العلوم أبي الحسن القطان، ورحل إلى زنجان، إلى صاحب ثعلب أحمد بن الحسن الخطيب، ورحل إلى ميانج إلى أحمد بن طاهر بن النجم، وكان يقول: ما رأيت مثله. … وكان من رؤوس أهل السنة المجردين على مذهب أهل الحديث. قال: ومات بالري في صفر سنة خمس وتسعين وثلاث مائة.",
          "أخبرنا إسماعيل بن عبد الرحمن، أخبرنا البهاء عبد الرحمن، أخبرنا عبد الحق اليوسفي، أخبرنا هادي بن إسماعيل، أخبرنا علي بن القاسم، أخبرنا أحمد بن فارس اللغوي، حدثنا علي بن أبي خالد بقزوين، حدثنا الدبري، عن عبد الرزاق، عن الثوري، عن عبد الله بن السائب، عن زاذان، عن عبد الله بن مسعود، قال: قال رسول الله - صلى الله عليه وسلم -: (إن لله ملائكة في الأرض سياحين يبلغوني عن أمتي السلام).",
        ],
        en: [
          "The imām, the great scholar, the linguist, the ḥadīth narrator, Abū al-Ḥusayn Aḥmad ibn Fāris ibn Zakariyyā ibn Muḥammad ibn Ḥabīb al-Qazwīnī, known as al-Rāzī, the Mālikī, the linguist, resident of Hamadhān, author of al-Mujmal.",
          "He narrated from: Abū al-Ḥasan ʿAlī ibn Ibrāhīm ibn Salama al-Qaṭṭān, Sulaymān ibn Yazīd al-Fāmī and ʿAlī ibn Muḥammad ibn Mihrawayh — both of Qazwīn — Saʿīd ibn Muḥammad al-Qaṭṭān, Muḥammad ibn Hārūn al-Thaqafī, ʿAbd al-Raḥmān ibn Ḥamdān al-Jallāb and Aḥmad ibn ʿUbayd — both of Hamadhān — Abū Bakr ibn al-Sunnī al-Dīnawarī, Abū al-Qāsim al-Ṭabarānī, and a group of others.",
          "Those who narrated from him include Abū Sahl ibn Zīrak, Abū Manṣūr Muḥammad ibn ʿĪsā, ʿAlī ibn al-Qāsim al-Khayyāṭ the Qurʾān reciter, Abū Manṣūr ibn al-Muḥtasib, and others.",
          "He was born in Qazwīn, raised in Hamadhān, and lived mostly in Rayy. He was a leading authority in literature, insightful in Mālikī fiqh, a debater who argued in the way of the people of truth; in grammar he followed the Kūfan school. He combined mastery of knowledge with the refinement of writers and poets. He wrote books and epistles, and imāms graduated under him. …",
          "Saʿd ibn ʿAlī al-Zanjānī said: Abū al-Ḥusayn was one of the imāms of language, cited as an authority everywhere without dispute. He travelled to the unique scholar Abū al-Ḥasan al-Qaṭṭān; to Zanjān, to Aḥmad ibn al-Ḥasan al-Khaṭīb, the student of Thaʿlab; and to Miyānij, to Aḥmad ibn Ṭāhir ibn al-Najm, of whom he used to say, “I never saw anyone like him.” … He was one of the leading Ahl al-Sunna, purely upon the way of Ahl al-Ḥadīth. He died in Rayy in Ṣafar 395 AH.",
          "[A ḥadīth al-Dhahabī narrates through Ibn Fāris, with the full chain:] … Aḥmad ibn Fāris the linguist told us: ʿAlī ibn Abī Khālid narrated to us in Qazwīn, from al-Dabarī, from ʿAbd al-Razzāq, from al-Thawrī, from ʿAbd Allāh ibn al-Sāʾib, from Zādhān, from ʿAbd Allāh ibn Masʿūd, who said: the Messenger of Allah ﷺ said: “Allah has angels who travel the earth and convey to me the salām of my Ummah.”",
        ],
      },
      {
        title: "al-Suyūṭī on Ibn Fāris",
        cite: `${BUGHYA}, entry no. 680`,
        ar: [
          "كان نحويا على طريقة الكوفيين. سمع أباه وعلي بن إبراهيم بن سلمة القطان، وقرأ عليه البديع الهمذاني. وكان مقيما بهمذان فحمل منها إلى الري ليقرأ عليه أبو طالب ابن فخر الدولة، فسكنها. وكان شافعيا، فتحول مالكيا، وقال: أخذتني الحمية لهذا الإمام أن يخلو مثل هذا البلد عن مذهبه.",
          "وكان الصاحب بن عباد يتتلمذ له، ويقول: شيخنا ممن رزق حسن التصنيف. وكان كريما جوادا، ربما سئل فيهب ثيابه وفرش بيته.",
        ],
        en: [
          "He was a grammarian of the Kūfan school. He heard [narrations] from his father and from ʿAlī ibn Ibrāhīm ibn Salama al-Qaṭṭān, and Badīʿ al-Zamān al-Hamadhānī studied under him. He lived in Hamadhān and was brought from there to Rayy to teach Abū Ṭālib, son of Fakhr al-Dawla, and settled there. He had been a Shāfiʿī and became a Mālikī, saying: “I was moved by zeal for this imām, that a city like this should be without his madhhab.”",
          "al-Ṣāḥib ibn ʿAbbād studied under him and used to say: “Our shaykh is one of those blessed with excellence in writing.” He was generous and openhanded; when asked, he might give away his clothes and the furnishings of his house.",
        ],
      },
    ],
  },

  muf: {
    summary:
      "al-Rāghib al-Iṣfahānī (d. around 502 AH; the date is uncertain) wrote al-Mufradāt specifically on the words of the Qurʾān: what each root means and how the Qurʾān uses it. Very little is recorded about his life — even al-Dhahabī says he found no biography of him — so his standing rests on his books and on later scholars’ judgement of them.",
    quotes: [
      {
        title: "al-Dhahabī on al-Rāghib",
        cite: `${SIYAR}, vol. 18, pp. 120–121 (no. 60)`,
        ar: [
          "العلامة الماهر، المحقق الباهر، أبو القاسم الحسين بن محمد بن المفضل الأصبهاني، الملقب بالراغب، صاحب التصانيف.",
          "كان من أذكياء المتكلمين، لم أظفر له بوفاة ولا بترجمة. وكان - إن شاء الله - في هذا الوقت حيا، يسأل عنه، لعله في (الألقاب) لابن الفوطي.",
        ],
        en: [
          "The skilled great scholar, the brilliant verifier, Abū al-Qāsim al-Ḥusayn ibn Muḥammad ibn al-Mufaḍḍal al-Aṣbahānī, known as al-Rāghib, author of many works.",
          "He was one of the most intelligent of the theologians (mutakallimūn). I did not find his date of death or a biography of him. He was — in shāʾ Allāh — alive around this time. He should be looked up; perhaps he is in Ibn al-Fuwaṭī’s al-Alqāb.",
        ],
      },
      {
        title: "al-Suyūṭī on al-Rāghib — was he Muʿtazilī?",
        cite: `${BUGHYA}, entry no. 2015`,
        ar: [
          "المفضل بن محمد الأصبهاني الراغب صاحب المصنفات. كان في أوائل المائة الخامسة. له: مفردات القرآن، وأفانين البلاغة، والمحاضرات؛ وقفت على الثلاثة؛ وقد كان في ظني أن الراغب معتزلي؛ حتى رأيت بخط الشيخ بدر الدين الزركشي على ظهر نسخة من القواعد الصغرى لابن عبد السلام ما نصه: \" ذكر الإمام فخر الدين الرازي في تأسيس التقديس في الأصول أن أبا القاسم الراغب من أئمة السنة \"، وقرنه بالغزالي، قال: وهي فائدة حسنة، فإن كثيرا من الناس يظنون أنه معتزلي.",
        ],
        en: [
          "al-Mufaḍḍal ibn Muḥammad al-Aṣbahānī, al-Rāghib, author of many works. He lived in the early fifth century. His works include Mufradāt al-Qurʾān, Afānīn al-Balāgha and al-Muḥāḍarāt; I have seen all three. I used to think al-Rāghib was a Muʿtazilī, until I saw, in the handwriting of Shaykh Badr al-Dīn al-Zarkashī on the back of a copy of Ibn ʿAbd al-Salām’s al-Qawāʿid al-Ṣughrā: “Imām Fakhr al-Dīn al-Rāzī mentioned in Taʾsīs al-Taqdīs that Abū al-Qāsim al-Rāghib is one of the imāms of the Sunna,” and he paired him with al-Ghazālī. [al-Zarkashī] said: this is a good point to know, for many people think he was a Muʿtazilī.",
        ],
      },
    ],
  },

  lis: {
    summary:
      "Ibn Manẓūr (630–711 AH), an Egyptian scholar, judge and ḥadīth narrator, compiled Lisān al-ʿArab by combining earlier dictionaries into one. In his introduction he names them: al-Azharī’s Tahdhīb al-Lugha, Ibn Sīdah’s al-Muḥkam, al-Jawharī’s al-Ṣiḥāḥ with Ibn Barrī’s corrections to it, and Ibn al-Athīr’s al-Nihāya on the words of ḥadīth.",
    quotes: [
      {
        title: "In his own words — what Lisān al-ʿArab is built from",
        cite: "Ibn Manẓūr, Lisān al-ʿArab, introduction, vol. 1, pp. 7–8 (Dār Ṣādir, 3rd ed. 1414 AH)",
        ar: [
          "ولم أجد في كتب اللغة أجمل من تهذيب اللغة لأبي منصور محمد بن أحمد الأزهري، ولا أكمل من المحكم لأبي الحسن علي بن إسماعيل بن سيده الأندلسي، رحمهما الله، وهما من أمهات كتب اللغة على التحقيق … ورأيت أبا نصر إسماعيل بن حماد الجوهري قد أحسن ترتيب مختصره … وهو مع ذلك قد صحف وحرف، وجزف فيما صرف، فأتيح له الشيخ أبو محمد بن بري فتتبع ما فيه، وأملى عليه أماليه، مخرجا لسقطاته، مؤرخا لغلطاته؛ فاستخرت الله سبحانه وتعالى في جمع هذا الكتاب المبارك … ولم أخرج فيه عما في هذه الأصول، ورتبته ترتيب الصحاح في الأبواب والفصول؛",
          "وقصدت توشيحه بجليل الأخبار، وجميل الآثار، مضافا إلى ما فيه من آيات القرآن الكريم … فرأيت أبا السعادات المبارك بن محمد بن الأثير الجزري قد جاء في ذلك بالنهاية، وجاوز في الجودة حد الغاية، غير أنه لم يضع الكلمات في محلها، ولا راعى زائد حروفها من أصلها، فوضعت كلا منها في مكانه، وأظهرته مع برهانه.",
        ],
        en: [
          "I did not find among the books of language anything finer than Tahdhīb al-Lugha of Abū Manṣūr Muḥammad ibn Aḥmad al-Azharī, nor more complete than al-Muḥkam of Abū al-Ḥasan ʿAlī ibn Ismāʿīl ibn Sīdah al-Andalusī — may Allah have mercy on them both — and they are truly among the mother-books of the language … I saw that Abū Naṣr Ismāʿīl ibn Ḥammād al-Jawharī had arranged his abridgement [al-Ṣiḥāḥ] excellently … yet he made misspellings and distortions, and was careless in his derivations, so Shaykh Abū Muḥammad ibn Barrī went through it, dictated his notes on it, bringing out its slips and recording its mistakes. So I sought Allah’s guidance in compiling this blessed book … I did not go beyond what is in these sources, and I arranged it in the order of al-Ṣiḥāḥ in its chapters and sections.",
          "I wished to adorn it with weighty reports (akhbār) and fine narrations (āthār), in addition to the verses of the Noble Qurʾān it contains … and I found that Abū al-Saʿādāt al-Mubārak ibn Muḥammad ibn al-Athīr al-Jazarī had produced al-Nihāya on this, surpassing every limit in quality — except that he did not put the words in their proper places, nor separate their added letters from their root. So I put each in its place and set it out with its proof.",
        ],
      },
      {
        title: "al-Suyūṭī on Ibn Manẓūr",
        cite: `${BUGHYA}, entry no. 457`,
        ar: [
          "محمد بن مكرم بن علي - وقيل رضوان - بن أحمد ابن أبي القاسم بن حقة بن منظور الأنصاري الإفريقي المصري جمال الدين أبو الفضل، صاحب لسان العرب في اللغة، الذي جمع فيه بين التهذيب والمحكم والصحاح وحواشيه والجمهرة والنهاية.",
          "ولد في المحرم سنة ثلاثين وستمائة، وسمع من ابن المقير وغيره، وجمع، وعمر، وحدث. واختصر كثيرا من كتب الأدب المطولة كالأغاني والعقد والذخيرة ومفردات ابن البيطار. ونقل أن مختصراته خمسمائة مجلد، وخدم في ديوان الإنشاء مدة عمره، وولي قضاء طرابلس، وكان صدرا رئيسا، فاضلا في الأدب، مليح الإنشاء، روى عنه السبكي والذهبي. وقال: تفرد في العوالي؛ وكان عارفا بالنحو واللغة والتاريخ والكتابة، واختصر تاريخ دمشق في نحو ربعه، وعنده تشيع بلا رفض. مات في شعبان سنة إحدى عشرة وسبعمائة.",
        ],
        en: [
          "Muḥammad ibn Mukarram ibn ʿAlī — some say Riḍwān — ibn Aḥmad ibn Abī al-Qāsim ibn Ḥaqqa ibn Manẓūr al-Anṣārī al-Ifrīqī al-Miṣrī, Jamāl al-Dīn Abū al-Faḍl, author of Lisān al-ʿArab on language, in which he combined al-Tahdhīb, al-Muḥkam, al-Ṣiḥāḥ and its notes [by Ibn Barrī], al-Jamhara and al-Nihāya.",
          "He was born in Muḥarram 630 AH. He heard [ḥadīth] from Ibn al-Muqayyar and others; he compiled, lived long, and narrated ḥadīth. He abridged many long works of literature such as al-Aghānī, al-ʿIqd, al-Dhakhīra and Ibn al-Bayṭār’s al-Mufradāt; it is reported that his abridgements came to five hundred volumes. He served in the chancery all his life and was appointed judge of Tripoli. He was a leading figure, excellent in literature and elegant in writing; al-Subkī and al-Dhahabī narrated from him. [al-Dhahabī] said: he was unique in [narrating] high chains. He knew grammar, language, history and writing, and abridged Tārīkh Dimashq to about a quarter. He had Shīʿī leanings without rafḍ (rejection of the Companions). He died in Shaʿbān 711 AH.",
        ],
      },
    ],
  },

  lane: {
    summary:
      "Edward William Lane (1801–1876) was an English scholar who lived for years in Cairo. His Arabic-English Lexicon (London, 1863–1893) is a translation of the classical Arabic dictionaries — chiefly Tāj al-ʿArūs of al-Murtaḍā al-Zabīdī (d. 1205 AH), which gathers Lisān al-ʿArab, al-Ṣiḥāḥ, al-Qāmūs and others. He worked on it with Shaykh Ibrāhīm al-Dasūqī of al-Azhar. Lane was not Muslim; his work reports what the Muslim lexicographers said, and he names his source after each meaning. He died before finishing: the entries from the letter qāf onward were completed by Stanley Lane-Poole from his notes and are much shorter.",
    note: "This summary is written by Claude (AI), not quoted.",
    abbreviations: [
      ["S", "al-Jawharī, al-Ṣiḥāḥ"],
      ["K", "al-Fīrūzābādī, al-Qāmūs al-Muḥīṭ"],
      ["TA", "al-Zabīdī, Tāj al-ʿArūs"],
      ["L", "Ibn Manẓūr, Lisān al-ʿArab"],
      ["M", "Ibn Sīdah, al-Muḥkam"],
      ["A", "al-Zamakhsharī, Asās al-Balāgha"],
      ["Msb", "al-Fayyūmī, al-Miṣbāḥ al-Munīr"],
      ["T", "al-Azharī, al-Tahdhīb"],
      ["Mgh", "al-Muṭarrizī, al-Mughrib"],
      ["IAar", "Ibn al-Aʿrābī"],
      ["As", "al-Aṣmaʿī"],
      ["Bd", "al-Bayḍāwī (tafsīr)"],
      ["Jel", "Tafsīr al-Jalālayn"],
      ["Ksh", "al-Zamakhsharī, al-Kashshāf"],
    ],
  },
};

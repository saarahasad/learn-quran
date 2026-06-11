import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  MadaniMushafPage,
  MushafViewToggle,
  highlightMushafText,
} from "./src/components/MadaniMushaf.jsx";
import TextbookStudy from "./src/components/TextbookStudy.jsx";
import { GENERATED_SURAHS } from "./src/data/generatedSurahs.js";
import { JUZ30_GENERATED_SURAHS } from "./src/data/juz30GeneratedSurahs.js";
import "./src/styles/mushaf.css";

const FONTS = `@import url('https://fonts.googleapis.com/css2?family=Scheherazade+New:wght@400;700&family=Lora:ital,wght@0,400;0,500;1,400&family=Inter:wght@300;400;500;600&display=swap');`;

const C = {
  s:[
    {bg:"#e8f4f0",mid:"#2d7a6a",deep:"#1a4a3f",border:"#b8ddd6"},
    {bg:"#f0eafa",mid:"#6b4fa8",deep:"#3d2878",border:"#cfc0e8"},
    {bg:"#fef3e8",mid:"#c4781a",deep:"#7a4a0a",border:"#f0c98a"},
    {bg:"#eaf0fa",mid:"#2a5fa8",deep:"#163878",border:"#a8c4e8"},
    {bg:"#faeaea",mid:"#a83030",deep:"#6a1818",border:"#e8a8a8"},
    {bg:"#eafaea",mid:"#2a8a3a",deep:"#165020",border:"#a8d8b0"},
  ],
  cream:"#fefcf8",warm:"#fff9f2",border:"#ede8e0",
  ink:"#1a1814",ink2:"#4a4540",ink3:"#8a8278",
  teal:"#2d7a6a",tealBg:"#e8f4f0",tealDark:"#1a4a3f",
  amber:"#c4781a",amberBg:"#fef3e8",amberDark:"#7a4a0a",
  red:"#a83030",redBg:"#faeaea",redDark:"#6a1818",
};

// ── Shared components
const Ar = ({children,size=28,style={}}) => (
  <span style={{fontFamily:"'Scheherazade New',serif",fontSize:size,direction:"rtl",lineHeight:1.9,...style}}>{children}</span>
);
const Btn = ({children,onClick,variant="outline",style={},disabled=false}) => {
  const v = {
    dark:{background:C.ink,color:"#fff",border:"none"},
    outline:{background:"#fff",color:C.ink,border:`1px solid ${C.border}`},
    teal:{background:C.tealBg,color:C.tealDark,border:"1px solid #b8ddd6"},
    ghost:{background:"transparent",color:C.ink3,border:`1px solid ${C.border}`},
  };
  return <button onClick={onClick} disabled={disabled} style={{fontFamily:"'Inter',sans-serif",fontSize:18,fontWeight:500,borderRadius:10,padding:"10px 18px",cursor:disabled?"default":"pointer",opacity:disabled?.5:1,transition:"all .15s",...v[variant],...style}}>{children}</button>;
};
const TopBar = ({left,right}) => (
  <div style={{background:"#fff",borderBottom:`1px solid ${C.border}`,padding:"10px 1.5rem",display:"flex",alignItems:"center",justifyContent:"space-between",gap:12}}>
    <div style={{display:"flex",alignItems:"center",gap:8}}>{left}</div>
    <div style={{display:"flex",gap:8}}>{right}</div>
  </div>
);
const BackBtn = ({onClick}) => (
  <button onClick={onClick} style={{background:"none",border:"none",cursor:"pointer",fontSize:28,color:C.ink2,padding:"0 4px"}}>←</button>
);
const AyahPair = ({ar,en,arHtml}) => (
  <div className="quiz-ayah-pair">
    {(arHtml||ar)&&(
      arHtml
        ? <div className="quiz-ayah-ar" dangerouslySetInnerHTML={{__html:arHtml}}/>
        : <div className="quiz-ayah-ar">{ar}</div>
    )}
    {en&&<div className="quiz-ayah-en">{en}</div>}
  </div>
);

// ── DATA
const BUROOJ = {
  id:"burooj",name:"Al-Burūj",nameAr:"البروج",ayahCount:22,juz:30,revelationOrder:85,hasTextbook:true,
  scenes:[
    {title:"The Oath & The Trench",range:"1–9",hook:"Allah swears by the starry sky, the Promised Day, the Witness — then we arrive at a fire-pit, believers burning, persecutors watching.",memory:"Night sky full of stars above. Trench full of fire below. The same God who arranged the stars is watching every flame.",tafsir:"Allah swears by the sky with its constellations — their orderly motion a proof of His perfect power and wisdom. The oath lands on the cursed People of the Trench: disbelievers who threw believers into a fire-pit, sitting and watching — their only crime was faith in Allah Al-ʿAzīz Al-Ḥamīd.",tafsirAttr:"Al-Saʿdī, Taysīr al-Karīm al-Raḥmān"},
    {title:"Two Destinies",range:"10–11",hook:"Just two āyāt — the pivot of the entire surah. Two groups, two fates, one choice separating them.",memory:"The fire they lit becomes their Jahannam. The believers they burned? Gardens with rivers. One āyah each — the balance is exact.",tafsir:"Al-Ḥasan al-Baṣrī: 'Look at this generosity — they killed His friends, yet He still calls them to repentance.' The door of tawbah was open even for them.",tafsirAttr:"Al-Ḥasan al-Baṣrī, cited by Al-Saʿdī"},
    {title:"Who Is Your Lord",range:"12–17",hook:"Six āyāt painting a portrait of Allah — severe in seizure, yet Forgiving and Loving. Then history is invoked as evidence.",memory:"Two opposites side by side: الغَفُورُ الوَدُودُ right after بَطْشَ رَبِّكَ لَشَدِيدٌ. Both true simultaneously.",tafsir:"Al-Wadūd is deliberately paired with Al-Ghafūr: when a person repents, Allah not only forgives — He loves them again. Forgiveness and love return together.",tafsirAttr:"Al-Saʿdī, Taysīr al-Karīm al-Raḥmān"},
    {title:"The Preserved Qur'an",range:"18–22",hook:"Two destroyed nations named in two words. Today's deniers enclosed by Allah. Then the final answer: this Qur'an is Glorious, on a Preserved Tablet.",memory:"The surah opened with the starry sky. It closes with what sits above that sky: the Lawḥ al-Maḥfūẓ. No fire, no denial can touch it.",tafsir:"Fī lawḥin maḥfūẓ: preserved from addition, subtraction, distortion, and every shayṭān. This is the highest testimony to the Qur'an's status with Allah.",tafsirAttr:"Al-Saʿdī, Taysīr al-Karīm al-Raḥmān"},
  ],
  ayahs:[
    {n:1,scene:0,ar:"وَٱلسَّمَآءِ ذَاتِ ٱلْبُرُوجِ",en:"By the sky containing great stars",connects:"A second oath layers on —",words:[{ar:"وَٱلسَّمَآءِ",en:"By the sky"},{ar:"ذَاتِ",en:"containing"},{ar:"ٱلْبُرُوجِ",en:"great stars"}]},
    {n:2,scene:0,ar:"وَٱلْيَوْمِ ٱلْمَوْعُودِ",en:"And by the Promised Day",connects:"And a third oath —",words:[{ar:"وَٱلْيَوْمِ",en:"And by the Day"},{ar:"ٱلْمَوْعُودِ",en:"the Promised"}]},
    {n:3,scene:0,ar:"وَشَاهِدٍ وَمَشْهُودٍ",en:"And by the Witness and the Witnessed",connects:"Now the verdict —",words:[{ar:"وَشَاهِدٍ",en:"And a witness"},{ar:"وَمَشْهُودٍ",en:"and the witnessed"}]},
    {n:4,scene:0,ar:"قُتِلَ أَصْحَـٰبُ ٱلْأُخْدُودِ",en:"Cursed were the People of the Trench",connects:"What was in that trench —",words:[{ar:"قُتِلَ",en:"Cursed were"},{ar:"أَصْحَـٰبُ",en:"the people of"},{ar:"ٱلْأُخْدُودِ",en:"the Trench"}]},
    {n:5,scene:0,ar:"ٱلنَّارِ ذَاتِ ٱلْوَقُودِ",en:"The fire, full of fuel",connects:"And they sat there —",words:[{ar:"ٱلنَّارِ",en:"The fire"},{ar:"ذَاتِ",en:"full of"},{ar:"ٱلْوَقُودِ",en:"fuel"}]},
    {n:6,scene:0,ar:"إِذْ هُمْ عَلَيْهَا قُعُودٌ",en:"When they were sitting over it",connects:"And they witnessed —",words:[{ar:"إِذْ",en:"When"},{ar:"هُمْ",en:"they"},{ar:"عَلَيْهَا",en:"over it"},{ar:"قُعُودٌ",en:"sitting"}]},
    {n:7,scene:0,ar:"وَهُمْ عَلَىٰ مَا يَفْعَلُونَ بِٱلْمُؤْمِنِينَ شُهُودٌ",en:"Witnesses to what they did to the believers",connects:"And their only crime was —",words:[{ar:"وَهُمْ",en:"And they"},{ar:"عَلَىٰ مَا يَفْعَلُونَ",en:"over what they did"},{ar:"بِٱلْمُؤْمِنِينَ",en:"to the believers"},{ar:"شُهُودٌ",en:"witnesses"}]},
    {n:8,scene:0,ar:"وَمَا نَقَمُوا۟ مِنْهُمْ إِلَّآ أَن يُؤْمِنُوا۟ بِٱللَّهِ ٱلْعَزِيزِ ٱلْحَمِيدِ",en:"They resented them only for believing in Allah, the Almighty, the Praiseworthy",connects:"To Whom belongs everything —",words:[{ar:"وَمَا نَقَمُوا۟",en:"They did not resent"},{ar:"مِنْهُمْ إِلَّآ",en:"them except"},{ar:"أَن يُؤْمِنُوا۟",en:"that they believed"},{ar:"ٱلْعَزِيزِ",en:"the Almighty"},{ar:"ٱلْحَمِيدِ",en:"the Praiseworthy"}]},
    {n:9,scene:0,ar:"ٱلَّذِى لَهُۥ مُلْكُ ٱلسَّمَـٰوَٰتِ وَٱلْأَرْضِ ۚ وَٱللَّهُ عَلَىٰ كُلِّ شَىْءٍ شَهِيدٌ",en:"To Whom belongs dominion of the heavens and earth — Allah is Witness over all things",connects:"→ Scene 2 answers",words:[{ar:"ٱلَّذِى لَهُۥ",en:"To Whom belongs"},{ar:"مُلْكُ",en:"dominion of"},{ar:"ٱلسَّمَـٰوَٰتِ وَٱلْأَرْضِ",en:"the heavens and earth"},{ar:"شَهِيدٌ",en:"Witness"}]},
    {n:10,scene:1,ar:"إِنَّ ٱلَّذِينَ فَتَنُوا۟ ٱلْمُؤْمِنِينَ وَٱلْمُؤْمِنَـٰتِ ثُمَّ لَمْ يَتُوبُوا۟ فَلَهُمْ عَذَابُ جَهَنَّمَ وَلَهُمْ عَذَابُ ٱلْحَرِيقِ",en:"Those who persecuted the believers and did not repent — Hellfire and the Burning",connects:"Immediately balanced —",words:[{ar:"فَتَنُوا۟",en:"persecuted"},{ar:"ثُمَّ لَمْ يَتُوبُوا۟",en:"then did not repent"},{ar:"عَذَابُ جَهَنَّمَ",en:"punishment of Hellfire"},{ar:"عَذَابُ ٱلْحَرِيقِ",en:"punishment of the Burning"}]},
    {n:11,scene:1,ar:"إِنَّ ٱلَّذِينَ ءَامَنُوا۟ وَعَمِلُوا۟ ٱلصَّـٰلِحَـٰتِ لَهُمْ جَنَّـٰتٌ تَجْرِى مِن تَحْتِهَا ٱلْأَنْهَـٰرُ ۚ ذَٰلِكَ ٱلْفَوْزُ ٱلْكَبِيرُ",en:"Those who believed and did good — Gardens beneath which rivers flow. That is the great attainment.",connects:"→ Scene 3: Who is this Lord?",words:[{ar:"ءَامَنُوا۟",en:"believed"},{ar:"وَعَمِلُوا۟ ٱلصَّـٰلِحَـٰتِ",en:"and did righteous deeds"},{ar:"جَنَّـٰتٌ",en:"Gardens"},{ar:"ٱلْفَوْزُ ٱلْكَبِيرُ",en:"the great attainment"}]},
    {n:12,scene:2,ar:"إِنَّ بَطْشَ رَبِّكَ لَشَدِيدٌ",en:"Indeed, the seizure of your Lord is severe",connects:"He has this power because —",words:[{ar:"بَطْشَ",en:"seizure / grip"},{ar:"رَبِّكَ",en:"your Lord"},{ar:"لَشَدِيدٌ",en:"is truly severe"}]},
    {n:13,scene:2,ar:"إِنَّهُۥ هُوَ يُبْدِئُ وَيُعِيدُ",en:"Indeed, it is He who originates and repeats",connects:"Yet with all that power —",words:[{ar:"يُبْدِئُ",en:"originates / begins"},{ar:"وَيُعِيدُ",en:"and repeats / returns"}]},
    {n:14,scene:2,ar:"وَهُوَ ٱلْغَفُورُ ٱلْوَدُودُ",en:"And He is the Forgiving, the Loving",connects:"Sitting on —",words:[{ar:"ٱلْغَفُورُ",en:"the Forgiving"},{ar:"ٱلْوَدُودُ",en:"the Loving"}]},
    {n:15,scene:2,ar:"ذُو ٱلْعَرْشِ ٱلْمَجِيدُ",en:"Owner of the Throne, the Glorious",connects:"And He does —",words:[{ar:"ذُو ٱلْعَرْشِ",en:"Owner of the Throne"},{ar:"ٱلْمَجِيدُ",en:"the Glorious"}]},
    {n:16,scene:2,ar:"فَعَّالٌ لِّمَا يُرِيدُ",en:"Doer of whatever He wills",connects:"History confirms this —",words:[{ar:"فَعَّالٌ",en:"Doer (intensive)"},{ar:"لِّمَا يُرِيدُ",en:"of whatever He wills"}]},
    {n:17,scene:2,ar:"هَلْ أَتَىٰكَ حَدِيثُ ٱلْجُنُودِ",en:"Has there reached you the story of the armies?",connects:"Which armies? —",words:[{ar:"هَلْ أَتَىٰكَ",en:"Has there reached you"},{ar:"حَدِيثُ",en:"the story of"},{ar:"ٱلْجُنُودِ",en:"the armies"}]},
    {n:18,scene:3,ar:"فِرْعَوْنَ وَثَمُودَ",en:"Pharaoh and Thamūd",connects:"Yet today's disbelievers —",words:[{ar:"فِرْعَوْنَ",en:"Pharaoh"},{ar:"وَثَمُودَ",en:"and Thamūd"}]},
    {n:19,scene:3,ar:"بَلِ ٱلَّذِينَ كَفَرُوا۟ فِى تَكْذِيبٍ",en:"But those who disbelieve are in persistent denial",connects:"But they have not escaped —",words:[{ar:"بَلِ",en:"Rather / But"},{ar:"فِى تَكْذِيبٍ",en:"in persistent denial"}]},
    {n:20,scene:3,ar:"وَٱللَّهُ مِن وَرَآئِهِم مُّحِيطٌ",en:"But Allah encompasses them from behind",connects:"And what are they denying? —",words:[{ar:"مِن وَرَآئِهِم",en:"from behind them"},{ar:"مُّحِيطٌ",en:"encompassing"}]},
    {n:21,scene:3,ar:"بَلْ هُوَ قُرْءَانٌ مَّجِيدٌ",en:"But it is a Glorious Qur'an",connects:"And where does it sit? —",words:[{ar:"قُرْءَانٌ",en:"a Qur'an"},{ar:"مَّجِيدٌ",en:"Glorious"}]},
    {n:22,scene:3,ar:"فِى لَوْحٍ مَّحْفُوظٍ",en:"In a Preserved Tablet",connects:"Complete.",words:[{ar:"لَوْحٍ",en:"a Tablet"},{ar:"مَّحْفُوظٍ",en:"Preserved"}]},
  ]
};

const TARIQ = {
  id:"tariq",name:"At-Ṭāriq",nameAr:"الطارق",ayahCount:17,juz:30,revelationOrder:86,
  scenes:[
    {title:"The Night Visitor",range:"1–4",hook:"The surah opens with the sky and the mysterious night visitor — a piercing star — then lands on the hidden reality: every soul is guarded and recorded.",memory:"Night sky → piercing star → protected soul. The One who watches the star also watches every person.",tafsir:"Al-Ṭāriq is what comes by night, explained here as the piercing star. The oath points to Allah's perfect watchfulness: every soul has a guardian preserving its deeds and appointed matter.",tafsirAttr:"Al-Saʿdī, Taysīr al-Karīm al-Raḥmān"},
    {title:"Created, Then Returned",range:"5–10",hook:"Man is told to look at his own beginning: a drop of fluid. The One who created him from that can return him when secrets are exposed.",memory:"Origin below → return above. From a drop no one boasts about, to a Day when no secret can hide.",tafsir:"The human being should reflect on the weakness of his origin. Whoever began creation from emitted water is fully able to resurrect the person after death, on the Day inner realities are tested and displayed.",tafsirAttr:"Ibn Kathīr and Al-Saʿdī"},
    {title:"The Decisive Word",range:"11–14",hook:"Another pair of oaths: the sky that returns rain and the earth that splits with growth. Then the verdict: this Qur'an is decisive speech, not amusement.",memory:"Rain returns. Earth opens. Revelation separates truth from falsehood. Nothing here is casual.",tafsir:"The returning sky and splitting earth show recurring signs of life after barrenness. Likewise, the Qur'an is qawl faṣl — a decisive word that distinguishes truth from falsehood.",tafsirAttr:"Al-Saʿdī, Taysīr al-Karīm al-Raḥmān"},
    {title:"The Plot and the Delay",range:"15–17",hook:"The disbelievers scheme, but Allah's plan encompasses theirs. The Prophet is told to give them a little time — their delay is not escape.",memory:"Their plan is small and urgent. Allah's plan is vast and certain. Ruwaydā: just a little while.",tafsir:"Their plotting against the truth only returns against them, while Allah's planning is just and irresistible. The command to grant respite is a warning that their punishment is certain, though delayed.",tafsirAttr:"Al-Saʿdī, Taysīr al-Karīm al-Raḥmān"},
  ],
  ayahs:[
    {n:1,scene:0,ar:"وَٱلسَّمَآءِ وَٱلطَّارِقِ",en:"By the sky and the night visitor",connects:"And what is that night visitor? —",words:[{ar:"وَٱلسَّمَآءِ",en:"By the sky"},{ar:"وَٱلطَّارِقِ",en:"and the night visitor"}]},
    {n:2,scene:0,ar:"وَمَآ أَدْرَىٰكَ مَا ٱلطَّارِقُ",en:"And what can make you know what the night visitor is?",connects:"The answer —",words:[{ar:"وَمَآ أَدْرَىٰكَ",en:"And what can make you know"},{ar:"مَا",en:"what is"},{ar:"ٱلطَّارِقُ",en:"the night visitor"}]},
    {n:3,scene:0,ar:"ٱلنَّجْمُ ٱلثَّاقِبُ",en:"The piercing star",connects:"The oath lands on every soul —",words:[{ar:"ٱلنَّجْمُ",en:"The star"},{ar:"ٱلثَّاقِبُ",en:"piercing / shining through"}]},
    {n:4,scene:0,ar:"إِن كُلُّ نَفْسٍ لَّمَّا عَلَيْهَا حَافِظٌ",en:"There is no soul except that over it is a guardian",connects:"→ Scene 2: so look at your origin",words:[{ar:"إِن",en:"There is not"},{ar:"كُلُّ نَفْسٍ",en:"every soul"},{ar:"لَّمَّا",en:"except that"},{ar:"عَلَيْهَا",en:"over it"},{ar:"حَافِظٌ",en:"a guardian"}]},
    {n:5,scene:1,ar:"فَلْيَنظُرِ ٱلْإِنسَـٰنُ مِمَّ خُلِقَ",en:"So let man look at what he was created from",connects:"He was created —",words:[{ar:"فَلْيَنظُرِ",en:"So let him look"},{ar:"ٱلْإِنسَـٰنُ",en:"man"},{ar:"مِمَّ",en:"from what"},{ar:"خُلِقَ",en:"he was created"}]},
    {n:6,scene:1,ar:"خُلِقَ مِن مَّآءٍ دَافِقٍ",en:"He was created from a fluid, ejected",connects:"That emerges —",words:[{ar:"خُلِقَ",en:"He was created"},{ar:"مِن",en:"from"},{ar:"مَّآءٍ",en:"fluid / water"},{ar:"دَافِقٍ",en:"ejected / gushing"}]},
    {n:7,scene:1,ar:"يَخْرُجُ مِنۢ بَيْنِ ٱلصُّلْبِ وَٱلتَّرَآئِبِ",en:"Emerging from between the backbone and the ribs",connects:"The One who created can return —",words:[{ar:"يَخْرُجُ",en:"It emerges"},{ar:"مِنۢ بَيْنِ",en:"from between"},{ar:"ٱلصُّلْبِ",en:"the backbone"},{ar:"وَٱلتَّرَآئِبِ",en:"and the ribs"}]},
    {n:8,scene:1,ar:"إِنَّهُۥ عَلَىٰ رَجْعِهِۦ لَقَادِرٌ",en:"Indeed, He is Able to return him",connects:"When will that be? —",words:[{ar:"إِنَّهُۥ",en:"Indeed He"},{ar:"عَلَىٰ رَجْعِهِۦ",en:"to return him"},{ar:"لَقَادِرٌ",en:"is surely Able"}]},
    {n:9,scene:1,ar:"يَوْمَ تُبْلَى ٱلسَّرَآئِرُ",en:"The Day when secrets will be tested and exposed",connects:"Then he will have —",words:[{ar:"يَوْمَ",en:"The Day"},{ar:"تُبْلَى",en:"will be tested / exposed"},{ar:"ٱلسَّرَآئِرُ",en:"the secrets"}]},
    {n:10,scene:1,ar:"فَمَا لَهُۥ مِن قُوَّةٍ وَلَا نَاصِرٍ",en:"Then he will have no power and no helper",connects:"→ Scene 3: another oath",words:[{ar:"فَمَا لَهُۥ",en:"Then he will not have"},{ar:"مِن قُوَّةٍ",en:"any power"},{ar:"وَلَا نَاصِرٍ",en:"nor any helper"}]},
    {n:11,scene:2,ar:"وَٱلسَّمَآءِ ذَاتِ ٱلرَّجْعِ",en:"By the sky which returns",connects:"And by the earth —",words:[{ar:"وَٱلسَّمَآءِ",en:"By the sky"},{ar:"ذَاتِ",en:"possessing"},{ar:"ٱلرَّجْعِ",en:"return / recurring rain"}]},
    {n:12,scene:2,ar:"وَٱلْأَرْضِ ذَاتِ ٱلصَّدْعِ",en:"And by the earth which splits open",connects:"The oath lands on the Qur'an —",words:[{ar:"وَٱلْأَرْضِ",en:"And by the earth"},{ar:"ذَاتِ",en:"possessing"},{ar:"ٱلصَّدْعِ",en:"splitting open"}]},
    {n:13,scene:2,ar:"إِنَّهُۥ لَقَوْلٌ فَصْلٌ",en:"Indeed, it is a decisive statement",connects:"And not —",words:[{ar:"إِنَّهُۥ",en:"Indeed it"},{ar:"لَقَوْلٌ",en:"is surely a word / statement"},{ar:"فَصْلٌ",en:"decisive / separating"}]},
    {n:14,scene:2,ar:"وَمَا هُوَ بِٱلْهَزْلِ",en:"And it is not amusement",connects:"→ Scene 4: the deniers respond",words:[{ar:"وَمَا هُوَ",en:"And it is not"},{ar:"بِٱلْهَزْلِ",en:"amusement / jest"}]},
    {n:15,scene:3,ar:"إِنَّهُمْ يَكِيدُونَ كَيْدًا",en:"Indeed, they are plotting a plot",connects:"But Allah says —",words:[{ar:"إِنَّهُمْ",en:"Indeed they"},{ar:"يَكِيدُونَ",en:"plot / scheme"},{ar:"كَيْدًا",en:"a plot"}]},
    {n:16,scene:3,ar:"وَأَكِيدُ كَيْدًا",en:"And I am planning a plan",connects:"So the Prophet is told —",words:[{ar:"وَأَكِيدُ",en:"And I plan"},{ar:"كَيْدًا",en:"a plan"}]},
    {n:17,scene:3,ar:"فَمَهِّلِ ٱلْكَـٰفِرِينَ أَمْهِلْهُمْ رُوَيْدًۢا",en:"So give respite to the disbelievers; leave them awhile",connects:"Complete.",words:[{ar:"فَمَهِّلِ",en:"So give respite"},{ar:"ٱلْكَـٰفِرِينَ",en:"the disbelievers"},{ar:"أَمْهِلْهُمْ",en:"leave them / allow them time"},{ar:"رُوَيْدًۢا",en:"a little while"}]},
  ]
};

const ALA = {
  id:"ala",name:"Al-Aʿlā",nameAr:"الأعلى",ayahCount:19,juz:30,revelationOrder:87,
  scenes:[
    {title:"Praise the Most High",range:"1–5",hook:"The surah begins with tasbīḥ, then shows why Allah is Al-Aʿlā: He creates, proportions, decrees, guides, and turns fresh pasture into dark stubble.",memory:"Raise Allah's name high → creation is measured → guidance is given → green pasture fades. The Highest controls every beginning and ending.",tafsir:"Allah commands His Messenger and the believers to declare Him free of all imperfection. The signs that follow show complete lordship: creation, proportion, decree, guidance, growth, and decay.",tafsirAttr:"Al-Saʿdī, Taysīr al-Karīm al-Raḥmān"},
    {title:"Recitation and Reminder",range:"6–13",hook:"Allah promises to make the Prophet recite and not forget, then defines who benefits from reminder and who turns away.",memory:"Recitation protected → ease promised → reminder offered. A heart with khashyah remembers; the most wretched avoids and faces the greatest Fire.",tafsir:"The Prophet's preservation of revelation is from Allah, who knows the open and hidden. Reminder benefits the one who has fear of Allah, while the hardened rejecter avoids it.",tafsirAttr:"Ibn Kathīr and Al-Saʿdī"},
    {title:"Purification and the Lasting Life",range:"14–19",hook:"Success is purification, remembrance, and prayer. The surah closes by weighing this world against the Hereafter and linking the message to the scrolls of Ibrāhīm and Mūsā.",memory:"Purify → remember → pray. Do not choose the short life over the better, lasting one. This is not new advice; it is ancient revelation.",tafsir:"True success is tazkiyah: cleansing oneself from shirk and sin, remembering Allah, and praying. The Hereafter is better in quality and longer in duration than worldly life.",tafsirAttr:"Al-Saʿdī, Taysīr al-Karīm al-Raḥmān"},
  ],
  ayahs:[
    {n:1,scene:0,ar:"سَبِّحِ ٱسْمَ رَبِّكَ ٱلْأَعْلَى",en:"Exalt the name of your Lord, the Most High,",connects:"Who is this Lord? —",words:[{ar:"سَبِّحِ",en:"Exalt / glorify"},{ar:"رَبِّكَ",en:"your Lord"},{ar:"ٱلْأَعْلَى",en:"the Most High"}]},
    {n:2,scene:0,ar:"ٱلَّذِى خَلَقَ فَسَوَّىٰ",en:"Who created and proportioned",connects:"And He did more —",words:[{ar:"خَلَقَ",en:"created"},{ar:"فَسَوَّىٰ",en:"then proportioned"}]},
    {n:3,scene:0,ar:"وَٱلَّذِى قَدَّرَ فَهَدَىٰ",en:"And who destined and [then] guided",connects:"Even pasture follows His command —",words:[{ar:"قَدَّرَ",en:"decreed / measured"},{ar:"فَهَدَىٰ",en:"then guided"}]},
    {n:4,scene:0,ar:"وَٱلَّذِىٓ أَخْرَجَ ٱلْمَرْعَىٰ",en:"And who brings out the pasture",connects:"Then He changes it —",words:[{ar:"أَخْرَجَ",en:"brought out"},{ar:"ٱلْمَرْعَىٰ",en:"the pasture"}]},
    {n:5,scene:0,ar:"فَجَعَلَهُۥ غُثَآءً أَحْوَىٰ",en:"And [then] makes it black stubble.",connects:"→ Scene 2: revelation is protected",words:[{ar:"غُثَآءً",en:"stubble / dry remains"},{ar:"أَحْوَىٰ",en:"darkened"}]},
    {n:6,scene:1,ar:"سَنُقْرِئُكَ فَلَا تَنسَىٰٓ",en:"We will make you recite, [O Muhammad], and you will not forget,",connects:"Except by Allah's will —",words:[{ar:"سَنُقْرِئُكَ",en:"We will make you recite"},{ar:"فَلَا تَنسَىٰٓ",en:"so you will not forget"}]},
    {n:7,scene:1,ar:"إِلَّا مَا شَآءَ ٱللَّهُ ۚ إِنَّهُۥ يَعْلَمُ ٱلْجَهْرَ وَمَا يَخْفَىٰ",en:"Except what Allah should will. Indeed, He knows what is declared and what is hidden.",connects:"And He will make the path easy —",words:[{ar:"مَا شَآءَ ٱللَّهُ",en:"what Allah wills"},{ar:"ٱلْجَهْرَ",en:"the open"},{ar:"يَخْفَىٰ",en:"is hidden"}]},
    {n:8,scene:1,ar:"وَنُيَسِّرُكَ لِلْيُسْرَىٰ",en:"And We will ease you toward ease.",connects:"So your task is —",words:[{ar:"نُيَسِّرُكَ",en:"We will ease you"},{ar:"لِلْيُسْرَىٰ",en:"toward ease"}]},
    {n:9,scene:1,ar:"فَذَكِّرْ إِن نَّفَعَتِ ٱلذِّكْرَىٰ",en:"So remind, if the reminder should benefit;",connects:"Who benefits? —",words:[{ar:"فَذَكِّرْ",en:"So remind"},{ar:"ٱلذِّكْرَىٰ",en:"the reminder"}]},
    {n:10,scene:1,ar:"سَيَذَّكَّرُ مَن يَخْشَىٰ",en:"He who fears [Allah] will be reminded.",connects:"But one person avoids it —",words:[{ar:"سَيَذَّكَّرُ",en:"will take reminder"},{ar:"يَخْشَىٰ",en:"fears"}]},
    {n:11,scene:1,ar:"وَيَتَجَنَّبُهَا ٱلْأَشْقَى",en:"But the wretched one will avoid it -",connects:"His end is —",words:[{ar:"يَتَجَنَّبُهَا",en:"will avoid it"},{ar:"ٱلْأَشْقَى",en:"the most wretched"}]},
    {n:12,scene:1,ar:"ٱلَّذِى يَصْلَى ٱلنَّارَ ٱلْكُبْرَىٰ",en:"[He] who will [enter and] burn in the greatest Fire,",connects:"A life that is neither life nor death —",words:[{ar:"يَصْلَى",en:"will burn / enter"},{ar:"ٱلنَّارَ ٱلْكُبْرَىٰ",en:"the greatest Fire"}]},
    {n:13,scene:1,ar:"ثُمَّ لَا يَمُوتُ فِيهَا وَلَا يَحْيَىٰ",en:"Neither dying therein nor living.",connects:"→ Scene 3: the successful opposite",words:[{ar:"لَا يَمُوتُ",en:"does not die"},{ar:"وَلَا يَحْيَىٰ",en:"nor live"}]},
    {n:14,scene:2,ar:"قَدْ أَفْلَحَ مَن تَزَكَّىٰ",en:"He has certainly succeeded who purifies himself",connects:"And he does this —",words:[{ar:"أَفْلَحَ",en:"has succeeded"},{ar:"تَزَكَّىٰ",en:"purifies himself"}]},
    {n:15,scene:2,ar:"وَذَكَرَ ٱسْمَ رَبِّهِۦ فَصَلَّىٰ",en:"And mentions the name of his Lord and prays.",connects:"But most people choose —",words:[{ar:"ذَكَرَ",en:"remembered / mentioned"},{ar:"فَصَلَّىٰ",en:"then prayed"}]},
    {n:16,scene:2,ar:"بَلْ تُؤْثِرُونَ ٱلْحَيَوٰةَ ٱلدُّنْيَا",en:"But you prefer the worldly life,",connects:"Yet the true comparison is —",words:[{ar:"تُؤْثِرُونَ",en:"you prefer"},{ar:"ٱلْحَيَوٰةَ ٱلدُّنْيَا",en:"the worldly life"}]},
    {n:17,scene:2,ar:"وَٱلْءَاخِرَةُ خَيْرٌ وَأَبْقَىٰٓ",en:"While the Hereafter is better and more enduring.",connects:"This truth is old —",words:[{ar:"ٱلْءَاخِرَةُ",en:"the Hereafter"},{ar:"خَيْرٌ",en:"better"},{ar:"أَبْقَىٰٓ",en:"more lasting"}]},
    {n:18,scene:2,ar:"إِنَّ هَٰذَا لَفِى ٱلصُّحُفِ ٱلْأُولَىٰ",en:"Indeed, this is in the former scriptures,",connects:"Which scriptures? —",words:[{ar:"هَٰذَا",en:"this"},{ar:"ٱلصُّحُفِ ٱلْأُولَىٰ",en:"the former scrolls"}]},
    {n:19,scene:2,ar:"صُحُفِ إِبْرَٰهِيمَ وَمُوسَىٰ",en:"The scriptures of Abraham and Moses.",connects:"Complete.",words:[{ar:"إِبْرَٰهِيمَ",en:"Ibrāhīm"},{ar:"مُوسَىٰ",en:"Mūsā"}]},
  ]
};

const GHASHIYAH = {
  id:"ghashiyah",name:"Al-Ghāshiyah",nameAr:"الغاشية",ayahCount:26,juz:30,revelationOrder:88,
  scenes:[
    {title:"Faces Humbled",range:"1–7",hook:"The Overwhelming arrives, and faces tell the story: humbled, exhausted, entering a blazing Fire with boiling drink and useless food.",memory:"Face → labor → fire → boiling spring → thorny food. Effort without īmān becomes exhaustion without benefit.",tafsir:"Al-Ghāshiyah is one of the names of the Day of Resurrection because it overwhelms people. These faces are humbled by disgrace after their deeds failed them.",tafsirAttr:"Ibn Kathīr and Al-Saʿdī"},
    {title:"Faces Delighted",range:"8–16",hook:"The next faces are bright with pleasure: satisfied with their effort, high in Jannah, surrounded by peace, springs, couches, cups, cushions, and carpets.",memory:"Same Day, different faces. Their effort is finally satisfying. High garden, no empty speech, flowing spring, everything placed and ready.",tafsir:"The people of Paradise are pleased with their past striving because they now see its reward. Their garden is high in place and rank, free from vain or harmful speech.",tafsirAttr:"Al-Saʿdī, Taysīr al-Karīm al-Raḥmān"},
    {title:"Look at Creation",range:"17–20",hook:"The surah turns from the unseen Hereafter to visible signs: camel, sky, mountains, and earth.",memory:"Camel below the sky, mountains fixed between, earth spread underfoot. The signs are ordinary enough to see every day, but large enough to wake the heart.",tafsir:"These signs are placed before people because they are familiar and powerful: the camel's creation, the raised sky, the set mountains, and the spread earth point to Allah's power.",tafsirAttr:"Al-Saʿdī, Taysīr al-Karīm al-Raḥmān"},
    {title:"Only a Reminder",range:"21–26",hook:"The Prophet is told to remind, not control. Turning away still has an end: return to Allah and account with Him.",memory:"Remind, do not control. Whoever turns away returns anyway. Their coming back is to Allah; their accounting is upon Allah.",tafsir:"The Messenger's duty is clear delivery and reminder. Guidance is in Allah's hand, and every person returns to Him for the final reckoning.",tafsirAttr:"Ibn Kathīr and Al-Saʿdī"},
  ],
  ayahs:[
    {n:1,scene:0,ar:"هَلْ أَتَىٰكَ حَدِيثُ ٱلْغَٰشِيَةِ",en:"Has there reached you the report of the Overwhelming [event]?",connects:"On that Day, faces appear —",words:[{ar:"حَدِيثُ",en:"report / story"},{ar:"ٱلْغَٰشِيَةِ",en:"the Overwhelming"}]},
    {n:2,scene:0,ar:"وُجُوهٌ يَوْمَئِذٍ خَٰشِعَةٌ",en:"[Some] faces, that Day, will be humbled,",connects:"Their labor was —",words:[{ar:"وُجُوهٌ",en:"faces"},{ar:"خَٰشِعَةٌ",en:"humbled"}]},
    {n:3,scene:0,ar:"عَامِلَةٌ نَّاصِبَةٌ",en:"Working [hard] and exhausted.",connects:"And their end —",words:[{ar:"عَامِلَةٌ",en:"working"},{ar:"نَّاصِبَةٌ",en:"exhausted"}]},
    {n:4,scene:0,ar:"تَصْلَىٰ نَارًا حَامِيَةً",en:"They will [enter to] burn in an intensely hot Fire.",connects:"Their drink —",words:[{ar:"تَصْلَىٰ",en:"will burn / enter"},{ar:"حَامِيَةً",en:"intensely hot"}]},
    {n:5,scene:0,ar:"تُسْقَىٰ مِنْ عَيْنٍ ءَانِيَةٍۢ",en:"They will be given drink from a boiling spring.",connects:"Their food —",words:[{ar:"تُسْقَىٰ",en:"will be given drink"},{ar:"عَيْنٍ ءَانِيَةٍ",en:"boiling spring"}]},
    {n:6,scene:0,ar:"لَّيْسَ لَهُمْ طَعَامٌ إِلَّا مِن ضَرِيعٍۢ",en:"For them there will be no food except from a poisonous, thorny plant",connects:"Which gives no benefit —",words:[{ar:"طَعَامٌ",en:"food"},{ar:"ضَرِيعٍ",en:"thorny plant"}]},
    {n:7,scene:0,ar:"لَّا يُسْمِنُ وَلَا يُغْنِى مِن جُوعٍۢ",en:"Which neither nourishes nor avails against hunger.",connects:"→ Scene 2: other faces",words:[{ar:"لَّا يُسْمِنُ",en:"does not nourish"},{ar:"جُوعٍ",en:"hunger"}]},
    {n:8,scene:1,ar:"وُجُوهٌ يَوْمَئِذٍۢ نَّاعِمَةٌ",en:"[Other] faces, that Day, will show pleasure.",connects:"Why? —",words:[{ar:"نَّاعِمَةٌ",en:"delighted / pleased"}]},
    {n:9,scene:1,ar:"لِّسَعْيِهَا رَاضِيَةٌ",en:"With their effort [they are] satisfied",connects:"Where are they? —",words:[{ar:"سَعْيِهَا",en:"its effort"},{ar:"رَاضِيَةٌ",en:"satisfied"}]},
    {n:10,scene:1,ar:"فِى جَنَّةٍ عَالِيَةٍۢ",en:"In an elevated garden,",connects:"Its soundscape —",words:[{ar:"جَنَّةٍ",en:"garden"},{ar:"عَالِيَةٍ",en:"elevated"}]},
    {n:11,scene:1,ar:"لَّا تَسْمَعُ فِيهَا لَٰغِيَةً",en:"Wherein they will hear no unsuitable speech.",connects:"Its water —",words:[{ar:"لَا تَسْمَعُ",en:"will not hear"},{ar:"لَٰغِيَةً",en:"vain speech"}]},
    {n:12,scene:1,ar:"فِيهَا عَيْنٌ جَارِيَةٌ",en:"Within it is a flowing spring.",connects:"Its seating —",words:[{ar:"عَيْنٌ",en:"spring"},{ar:"جَارِيَةٌ",en:"flowing"}]},
    {n:13,scene:1,ar:"فِيهَا سُرُرٌ مَّرْفُوعَةٌ",en:"Within it are couches raised high",connects:"Its cups —",words:[{ar:"سُرُرٌ",en:"couches"},{ar:"مَّرْفُوعَةٌ",en:"raised"}]},
    {n:14,scene:1,ar:"وَأَكْوَابٌ مَّوْضُوعَةٌ",en:"And cups put in place",connects:"Its cushions —",words:[{ar:"أَكْوَابٌ",en:"cups"},{ar:"مَّوْضُوعَةٌ",en:"set down"}]},
    {n:15,scene:1,ar:"وَنَمَارِقُ مَصْفُوفَةٌ",en:"And cushions lined up",connects:"Its carpets —",words:[{ar:"نَمَارِقُ",en:"cushions"},{ar:"مَصْفُوفَةٌ",en:"lined up"}]},
    {n:16,scene:1,ar:"وَزَرَابِىُّ مَبْثُوثَةٌ",en:"And carpets spread around.",connects:"→ Scene 3: now look around you",words:[{ar:"زَرَابِىُّ",en:"carpets"},{ar:"مَبْثُوثَةٌ",en:"spread out"}]},
    {n:17,scene:2,ar:"أَفَلَا يَنظُرُونَ إِلَى ٱلْإِبِلِ كَيْفَ خُلِقَتْ",en:"Then do they not look at the camels - how they are created?",connects:"Then upward —",words:[{ar:"يَنظُرُونَ",en:"they look"},{ar:"ٱلْإِبِلِ",en:"the camels"},{ar:"خُلِقَتْ",en:"were created"}]},
    {n:18,scene:2,ar:"وَإِلَى ٱلسَّمَآءِ كَيْفَ رُفِعَتْ",en:"And at the sky - how it is raised?",connects:"Then the mountains —",words:[{ar:"ٱلسَّمَآءِ",en:"the sky"},{ar:"رُفِعَتْ",en:"was raised"}]},
    {n:19,scene:2,ar:"وَإِلَى ٱلْجِبَالِ كَيْفَ نُصِبَتْ",en:"And at the mountains - how they are erected?",connects:"Then the ground —",words:[{ar:"ٱلْجِبَالِ",en:"the mountains"},{ar:"نُصِبَتْ",en:"were set up"}]},
    {n:20,scene:2,ar:"وَإِلَى ٱلْأَرْضِ كَيْفَ سُطِحَتْ",en:"And at the earth - how it is spread out?",connects:"→ Scene 4: the Messenger's task",words:[{ar:"ٱلْأَرْضِ",en:"the earth"},{ar:"سُطِحَتْ",en:"was spread out"}]},
    {n:21,scene:3,ar:"فَذَكِّرْ إِنَّمَآ أَنتَ مُذَكِّرٌ",en:"So remind, [O Muhammad]; you are only a reminder.",connects:"Not this —",words:[{ar:"فَذَكِّرْ",en:"So remind"},{ar:"مُذَكِّرٌ",en:"a reminder"}]},
    {n:22,scene:3,ar:"لَّسْتَ عَلَيْهِم بِمُصَيْطِرٍ",en:"You are not over them a controller.",connects:"Except the one who refuses —",words:[{ar:"لَّسْتَ",en:"you are not"},{ar:"بِمُصَيْطِرٍ",en:"a controller"}]},
    {n:23,scene:3,ar:"إِلَّا مَن تَوَلَّىٰ وَكَفَرَ",en:"However, he who turns away and disbelieves -",connects:"His punishment —",words:[{ar:"تَوَلَّىٰ",en:"turned away"},{ar:"وَكَفَرَ",en:"and disbelieved"}]},
    {n:24,scene:3,ar:"فَيُعَذِّبُهُ ٱللَّهُ ٱلْعَذَابَ ٱلْأَكْبَرَ",en:"Then Allah will punish him with the greatest punishment.",connects:"All return —",words:[{ar:"فَيُعَذِّبُهُ",en:"then He will punish him"},{ar:"ٱلْأَكْبَرَ",en:"the greatest"}]},
    {n:25,scene:3,ar:"إِنَّ إِلَيْنَآ إِيَابَهُمْ",en:"Indeed, to Us is their return.",connects:"And after return —",words:[{ar:"إِلَيْنَآ",en:"to Us"},{ar:"إِيَابَهُمْ",en:"their return"}]},
    {n:26,scene:3,ar:"ثُمَّ إِنَّ عَلَيْنَا حِسَابَهُم",en:"Then indeed, upon Us is their account.",connects:"Complete.",words:[{ar:"عَلَيْنَا",en:"upon Us"},{ar:"حِسَابَهُم",en:"their account"}]},
  ]
};

const FAJR = {
  id:"fajr",name:"Al-Fajr",nameAr:"الفجر",ayahCount:30,juz:30,revelationOrder:89,
  scenes:[
    {title:"The Oaths of Time",range:"1–5",hook:"Dawn, ten nights, even and odd, and the moving night: the surah opens with time itself as witness.",memory:"Fajr opens the day. Ten nights carry worship. Even and odd complete the count. Night travels away. For a thinking heart, that is enough oath.",tafsir:"Allah swears by great signs connected to worship and time. The question in verse 5 calls people of intellect to recognize the weight of these oaths.",tafsirAttr:"Ibn Kathīr and Al-Saʿdī"},
    {title:"Tyrants Watched",range:"6–14",hook:"Three powers are named: ʿĀd, Thamūd, and Pharaoh. Their strength did not save them because your Lord is always watching.",memory:"Pillars, carved rock, stakes. Different empires, same disease: tyranny and corruption. The ending is one: your Lord poured punishment, because He is at the lookout.",tafsir:"The destroyed nations had worldly strength and construction, yet they transgressed and spread corruption. Allah's punishment came because no oppressor escapes His watch.",tafsirAttr:"Al-Saʿdī, Taysīr al-Karīm al-Raḥmān"},
    {title:"False Measures",range:"15–20",hook:"The human being misreads both ease and restriction, then Allah exposes the real test: how orphans, the poor, inheritance, and wealth are treated.",memory:"Ease is not automatic honor. Restriction is not automatic humiliation. The real signs are social: orphan, poor, inheritance, wealth-love.",tafsir:"Provision and restriction are tests, not final judgments of honor or disgrace. The blame falls on neglecting the vulnerable and loving wealth excessively.",tafsirAttr:"Ibn Kathīr and Al-Saʿdī"},
    {title:"The Reassured Soul",range:"21–30",hook:"The earth is crushed, ranks of angels appear, Hell is brought, regret erupts — then the surah closes with the most tender invitation: O reassured soul.",memory:"Crushed earth → ranks of angels → Hell brought near → useless regret. Then a different address: return to your Lord, pleased and pleasing.",tafsir:"On the Day of Resurrection, regret cannot replace deeds sent ahead. The believer's soul is honored with return to Allah's pleasure, His servants, and His Paradise.",tafsirAttr:"Al-Saʿdī, Taysīr al-Karīm al-Raḥmān"},
  ],
  ayahs:[
    {n:1,scene:0,ar:"وَٱلْفَجْرِ",en:"By the dawn",connects:"And by —",words:[{ar:"ٱلْفَجْرِ",en:"the dawn"}]},
    {n:2,scene:0,ar:"وَلَيَالٍ عَشْرٍۢ",en:"And [by] ten nights",connects:"And by —",words:[{ar:"لَيَالٍ",en:"nights"},{ar:"عَشْرٍ",en:"ten"}]},
    {n:3,scene:0,ar:"وَٱلشَّفْعِ وَٱلْوَتْرِ",en:"And [by] the even [number] and the odd",connects:"And by —",words:[{ar:"ٱلشَّفْعِ",en:"the even"},{ar:"ٱلْوَتْرِ",en:"the odd"}]},
    {n:4,scene:0,ar:"وَٱلَّيْلِ إِذَا يَسْرِ",en:"And [by] the night when it passes,",connects:"Now the question —",words:[{ar:"ٱلَّيْلِ",en:"the night"},{ar:"يَسْرِ",en:"passes / travels"}]},
    {n:5,scene:0,ar:"هَلْ فِى ذَٰلِكَ قَسَمٌ لِّذِى حِجْرٍ",en:"Is there [not] in [all] that an oath [sufficient] for one of perception?",connects:"→ Scene 2: history answers",words:[{ar:"قَسَمٌ",en:"an oath"},{ar:"حِجْرٍ",en:"intellect / restraint"}]},
    {n:6,scene:1,ar:"أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِعَادٍ",en:"Have you not considered how your Lord dealt with 'Aad -",connects:"Which ʿĀd? —",words:[{ar:"أَلَمْ تَرَ",en:"Have you not seen"},{ar:"عَادٍ",en:"ʿĀd"}]},
    {n:7,scene:1,ar:"إِرَمَ ذَاتِ ٱلْعِمَادِ",en:"[With] Iram - who had lofty pillars,",connects:"A people unmatched —",words:[{ar:"إِرَمَ",en:"Iram"},{ar:"ٱلْعِمَادِ",en:"pillars"}]},
    {n:8,scene:1,ar:"ٱلَّتِى لَمْ يُخْلَقْ مِثْلُهَا فِى ٱلْبِلَٰدِ",en:"The likes of whom had never been created in the land?",connects:"And Thamūd —",words:[{ar:"لَمْ يُخْلَقْ",en:"had not been created"},{ar:"مِثْلُهَا",en:"like it"}]},
    {n:9,scene:1,ar:"وَثَمُودَ ٱلَّذِينَ جَابُوا۟ ٱلصَّخْرَ بِٱلْوَادِ",en:"And [with] Thamud, who carved out the rocks in the valley?",connects:"And Pharaoh —",words:[{ar:"ثَمُودَ",en:"Thamūd"},{ar:"جَابُوا۟",en:"carved / cut"},{ar:"ٱلصَّخْرَ",en:"the rock"}]},
    {n:10,scene:1,ar:"وَفِرْعَوْنَ ذِى ٱلْأَوْتَادِ",en:"And [with] Pharaoh, owner of the stakes? -",connects:"What united them? —",words:[{ar:"فِرْعَوْنَ",en:"Pharaoh"},{ar:"ٱلْأَوْتَادِ",en:"stakes"}]},
    {n:11,scene:1,ar:"ٱلَّذِينَ طَغَوْا۟ فِى ٱلْبِلَٰدِ",en:"[All of] whom oppressed within the lands",connects:"And spread —",words:[{ar:"طَغَوْا۟",en:"transgressed"},{ar:"ٱلْبِلَٰدِ",en:"the lands"}]},
    {n:12,scene:1,ar:"فَأَكْثَرُوا۟ فِيهَا ٱلْفَسَادَ",en:"And increased therein the corruption.",connects:"So the response —",words:[{ar:"فَأَكْثَرُوا۟",en:"they increased"},{ar:"ٱلْفَسَادَ",en:"corruption"}]},
    {n:13,scene:1,ar:"فَصَبَّ عَلَيْهِمْ رَبُّكَ سَوْطَ عَذَابٍ",en:"So your Lord poured upon them a scourge of punishment.",connects:"Because He is watching —",words:[{ar:"فَصَبَّ",en:"poured"},{ar:"سَوْطَ عَذَابٍ",en:"a scourge of punishment"}]},
    {n:14,scene:1,ar:"إِنَّ رَبَّكَ لَبِٱلْمِرْصَادِ",en:"Indeed, your Lord is in observation.",connects:"→ Scene 3: man misreads tests",words:[{ar:"رَبَّكَ",en:"your Lord"},{ar:"لَبِٱلْمِرْصَادِ",en:"at the lookout"}]},
    {n:15,scene:2,ar:"فَأَمَّا ٱلْإِنسَٰنُ إِذَا مَا ٱبْتَلَىٰهُ رَبُّهُۥ فَأَكْرَمَهُۥ وَنَعَّمَهُۥ فَيَقُولُ رَبِّىٓ أَكْرَمَنِ",en:"And as for man, when his Lord tries him and [thus] is generous to him and favors him, he says, \"My Lord has honored me.\"",connects:"And when restricted —",words:[{ar:"ٱبْتَلَىٰهُ",en:"tested him"},{ar:"أَكْرَمَهُۥ",en:"honored him"},{ar:"أَكْرَمَنِ",en:"has honored me"}]},
    {n:16,scene:2,ar:"وَأَمَّآ إِذَا مَا ٱبْتَلَىٰهُ فَقَدَرَ عَلَيْهِ رِزْقَهُۥ فَيَقُولُ رَبِّىٓ أَهَٰنَنِ",en:"But when He tries him and restricts his provision, he says, \"My Lord has humiliated me.\"",connects:"Allah rejects the reading —",words:[{ar:"فَقَدَرَ",en:"restricted"},{ar:"رِزْقَهُۥ",en:"his provision"},{ar:"أَهَٰنَنِ",en:"has humiliated me"}]},
    {n:17,scene:2,ar:"كَلَّا ۖ بَل لَّا تُكْرِمُونَ ٱلْيَتِيمَ",en:"No! But you do not honor the orphan",connects:"And you do not push each other —",words:[{ar:"كَلَّا",en:"No!"},{ar:"ٱلْيَتِيمَ",en:"the orphan"}]},
    {n:18,scene:2,ar:"وَلَا تَحَٰٓضُّونَ عَلَىٰ طَعَامِ ٱلْمِسْكِينِ",en:"And you do not encourage one another to feed the poor.",connects:"And with inheritance —",words:[{ar:"تَحَٰٓضُّونَ",en:"encourage one another"},{ar:"ٱلْمِسْكِينِ",en:"the poor"}]},
    {n:19,scene:2,ar:"وَتَأْكُلُونَ ٱلتُّرَاثَ أَكْلًا لَّمًّا",en:"And you consume inheritance, devouring [it] altogether,",connects:"And wealth-love —",words:[{ar:"ٱلتُّرَاثَ",en:"inheritance"},{ar:"أَكْلًا لَّمًّا",en:"devouring completely"}]},
    {n:20,scene:2,ar:"وَتُحِبُّونَ ٱلْمَالَ حُبًّا جَمًّا",en:"And you love wealth with immense love.",connects:"→ Scene 4: the final day",words:[{ar:"ٱلْمَالَ",en:"wealth"},{ar:"حُبًّا جَمًّا",en:"immense love"}]},
    {n:21,scene:3,ar:"كَلَّآ إِذَا دُكَّتِ ٱلْأَرْضُ دَكًّا دَكًّا",en:"No! When the earth has been leveled - pounded and crushed -",connects:"And then —",words:[{ar:"دُكَّتِ",en:"is crushed"},{ar:"ٱلْأَرْضُ",en:"the earth"}]},
    {n:22,scene:3,ar:"وَجَآءَ رَبُّكَ وَٱلْمَلَكُ صَفًّا صَفًّا",en:"And your Lord has come and the angels, rank upon rank,",connects:"And Hell is brought —",words:[{ar:"جَآءَ رَبُّكَ",en:"your Lord comes"},{ar:"صَفًّا صَفًّا",en:"rank upon rank"}]},
    {n:23,scene:3,ar:"وَجِا۟ىٓءَ يَوْمَئِذٍۭ بِجَهَنَّمَ ۚ يَوْمَئِذٍۢ يَتَذَكَّرُ ٱلْإِنسَٰنُ وَأَنَّىٰ لَهُ ٱلذِّكْرَىٰ",en:"And brought [within view], that Day, is Hell - that Day, man will remember, but what good to him will be the remembrance?",connects:"His regret —",words:[{ar:"بِجَهَنَّمَ",en:"with Hell"},{ar:"يَتَذَكَّرُ",en:"will remember"},{ar:"أَنَّىٰ",en:"how / what good"}]},
    {n:24,scene:3,ar:"يَقُولُ يَٰلَيْتَنِى قَدَّمْتُ لِحَيَاتِى",en:"He will say, \"Oh, I wish I had sent ahead [some good] for my life.\"",connects:"But punishment then —",words:[{ar:"يَٰلَيْتَنِى",en:"oh, I wish"},{ar:"قَدَّمْتُ",en:"I sent ahead"},{ar:"لِحَيَاتِى",en:"for my life"}]},
    {n:25,scene:3,ar:"فَيَوْمَئِذٍۢ لَّا يُعَذِّبُ عَذَابَهُۥٓ أَحَدٌ",en:"So on that Day, none will punish [as severely] as His punishment,",connects:"And binding —",words:[{ar:"لَّا يُعَذِّبُ",en:"none punishes"},{ar:"عَذَابَهُۥٓ",en:"His punishment"}]},
    {n:26,scene:3,ar:"وَلَا يُوثِقُ وَثَاقَهُۥٓ أَحَدٌ",en:"And none will bind [as severely] as His binding [of the evildoers].",connects:"Then the opposite address —",words:[{ar:"يُوثِقُ",en:"binds"},{ar:"وَثَاقَهُۥٓ",en:"His binding"}]},
    {n:27,scene:3,ar:"يَٰٓأَيَّتُهَا ٱلنَّفْسُ ٱلْمُطْمَئِنَّةُ",en:"[To the righteous it will be said], \"O reassured soul,",connects:"Come back —",words:[{ar:"ٱلنَّفْسُ",en:"the soul"},{ar:"ٱلْمُطْمَئِنَّةُ",en:"reassured"}]},
    {n:28,scene:3,ar:"ٱرْجِعِىٓ إِلَىٰ رَبِّكِ رَاضِيَةً مَّرْضِيَّةً",en:"Return to your Lord, well-pleased and pleasing [to Him],",connects:"Then enter —",words:[{ar:"ٱرْجِعِىٓ",en:"return"},{ar:"رَاضِيَةً",en:"pleased"},{ar:"مَّرْضِيَّةً",en:"pleasing"}]},
    {n:29,scene:3,ar:"فَٱدْخُلِى فِى عِبَٰدِى",en:"And enter among My [righteous] servants",connects:"And finally —",words:[{ar:"فَٱدْخُلِى",en:"so enter"},{ar:"عِبَٰدِى",en:"My servants"}]},
    {n:30,scene:3,ar:"وَٱدْخُلِى جَنَّتِى",en:"And enter My Paradise.\"",connects:"Complete.",words:[{ar:"جَنَّتِى",en:"My Paradise"}]},
  ]
};

const BALAD = {
  id:"balad",name:"Al-Balad",nameAr:"البلد",ayahCount:20,juz:30,revelationOrder:90,
  scenes:[
    {title:"The City and Hardship",range:"1–4",hook:"Allah swears by this city while the Prophet is in it, by parent and child, then states the human condition: man was created in hardship.",memory:"City → Prophet in the city → parent and child → human life in kabad. This surah begins with dignity and difficulty together.",tafsir:"The oath honors Makkah and the Prophet's presence in it. Human beings are created to pass through toil, struggle, and tests in this world.",tafsirAttr:"Ibn Kathīr and Al-Saʿdī"},
    {title:"Seen by Allah",range:"5–10",hook:"The arrogant person thinks no one can overpower him and boasts of spending wealth, but Allah reminds him of eyes, tongue, lips, and the two ways.",memory:"He thinks no one can overcome or see him. Allah answers with gifts on his own face: two eyes, one tongue, two lips, and two paths.",tafsir:"Man's strength and spending do not escape Allah's power or sight. The blessings of perception and speech should lead him to choose the path of guidance.",tafsirAttr:"Al-Saʿdī, Taysīr al-Karīm al-Raḥmān"},
    {title:"The Steep Path",range:"11–18",hook:"The difficult pass is not wealth-boasting; it is freeing necks, feeding in hunger, supporting close orphans and needy people, then faith with patience and mercy.",memory:"The pass is steep: free, feed, believe, advise patience, advise mercy. These become the companions of the right.",tafsir:"Al-ʿaqabah is the hard road of obedience. It joins social mercy with īmān, patience, and mutual compassion.",tafsirAttr:"Ibn Kathīr and Al-Saʿdī"},
    {title:"Right and Left",range:"19–20",hook:"Two endings close the surah: companions of the right versus companions of the left, with a fire closed over them.",memory:"Right side: faith, patience, mercy. Left side: denial of Allah's signs. The final image is a fire shut tight.",tafsir:"Those who reject Allah's signs become companions of the left. The closed fire shows confinement with no escape.",tafsirAttr:"Al-Saʿdī, Taysīr al-Karīm al-Raḥmān"},
  ],
  ayahs:[
    {n:1,scene:0,ar:"لَآ أُقْسِمُ بِهَٰذَا ٱلْبَلَدِ",en:"I swear by this city, Makkah -",connects:"And you are in it —",words:[{ar:"أُقْسِمُ",en:"I swear"},{ar:"ٱلْبَلَدِ",en:"the city"}]},
    {n:2,scene:0,ar:"وَأَنتَ حِلٌّۢ بِهَٰذَا ٱلْبَلَدِ",en:"And you, [O Muhammad], are free of restriction in this city -",connects:"And by generations —",words:[{ar:"أَنتَ",en:"you"},{ar:"حِلٌّۢ",en:"dwelling / made lawful"},{ar:"ٱلْبَلَدِ",en:"the city"}]},
    {n:3,scene:0,ar:"وَوَالِدٍۢ وَمَا وَلَدَ",en:"And [by] the father and that which was born [of him],",connects:"The oath lands —",words:[{ar:"وَالِدٍ",en:"a father"},{ar:"وَمَا وَلَدَ",en:"and what he begot"}]},
    {n:4,scene:0,ar:"لَقَدْ خَلَقْنَا ٱلْإِنسَٰنَ فِى كَبَدٍ",en:"We have certainly created man into hardship.",connects:"→ Scene 2: arrogant man responds",words:[{ar:"خَلَقْنَا",en:"We created"},{ar:"ٱلْإِنسَٰنَ",en:"man"},{ar:"كَبَدٍ",en:"hardship / toil"}]},
    {n:5,scene:1,ar:"أَيَحْسَبُ أَن لَّن يَقْدِرَ عَلَيْهِ أَحَدٌ",en:"Does he think that never will anyone overcome him?",connects:"He boasts —",words:[{ar:"أَيَحْسَبُ",en:"does he think"},{ar:"يَقْدِرَ",en:"can overpower"}]},
    {n:6,scene:1,ar:"يَقُولُ أَهْلَكْتُ مَالًا لُّبَدًا",en:"He says, \"I have spent wealth in abundance.\"",connects:"But is he unseen? —",words:[{ar:"أَهْلَكْتُ",en:"I used up / spent"},{ar:"مَالًا",en:"wealth"},{ar:"لُّبَدًا",en:"in heaps"}]},
    {n:7,scene:1,ar:"أَيَحْسَبُ أَن لَّمْ يَرَهُۥٓ أَحَدٌ",en:"Does he think that no one has seen him?",connects:"Allah reminds him —",words:[{ar:"يَرَهُۥٓ",en:"has seen him"},{ar:"أَحَدٌ",en:"anyone"}]},
    {n:8,scene:1,ar:"أَلَمْ نَجْعَل لَّهُۥ عَيْنَيْنِ",en:"Have We not made for him two eyes?",connects:"And —",words:[{ar:"نَجْعَل",en:"make"},{ar:"عَيْنَيْنِ",en:"two eyes"}]},
    {n:9,scene:1,ar:"وَلِسَانًا وَشَفَتَيْنِ",en:"And a tongue and two lips?",connects:"And showed him —",words:[{ar:"لِسَانًا",en:"a tongue"},{ar:"شَفَتَيْنِ",en:"two lips"}]},
    {n:10,scene:1,ar:"وَهَدَيْنَٰهُ ٱلنَّجْدَيْنِ",en:"And have shown him the two ways?",connects:"→ Scene 3: the hard path",words:[{ar:"هَدَيْنَٰهُ",en:"We guided him"},{ar:"ٱلنَّجْدَيْنِ",en:"the two paths"}]},
    {n:11,scene:2,ar:"فَلَا ٱقْتَحَمَ ٱلْعَقَبَةَ",en:"But he has not broken through the difficult pass.",connects:"What is the pass? —",words:[{ar:"ٱقْتَحَمَ",en:"plunged into / crossed"},{ar:"ٱلْعَقَبَةَ",en:"the steep pass"}]},
    {n:12,scene:2,ar:"وَمَآ أَدْرَىٰكَ مَا ٱلْعَقَبَةُ",en:"And what can make you know what is [breaking through] the difficult pass?",connects:"First —",words:[{ar:"أَدْرَىٰكَ",en:"can make you know"},{ar:"ٱلْعَقَبَةُ",en:"the steep pass"}]},
    {n:13,scene:2,ar:"فَكُّ رَقَبَةٍ",en:"It is the freeing of a slave",connects:"Or feeding —",words:[{ar:"فَكُّ",en:"freeing"},{ar:"رَقَبَةٍ",en:"a neck / slave"}]},
    {n:14,scene:2,ar:"أَوْ إِطْعَٰمٌ فِى يَوْمٍۢ ذِى مَسْغَبَةٍۢ",en:"Or feeding on a day of severe hunger",connects:"Whom? —",words:[{ar:"إِطْعَٰمٌ",en:"feeding"},{ar:"مَسْغَبَةٍ",en:"severe hunger"}]},
    {n:15,scene:2,ar:"يَتِيمًا ذَا مَقْرَبَةٍ",en:"An orphan of near relationship",connects:"Or —",words:[{ar:"يَتِيمًا",en:"an orphan"},{ar:"مَقْرَبَةٍ",en:"near kinship"}]},
    {n:16,scene:2,ar:"أَوْ مِسْكِينًا ذَا مَتْرَبَةٍۢ",en:"Or a needy person in misery",connects:"Then more than charity —",words:[{ar:"مِسْكِينًا",en:"a needy person"},{ar:"مَتْرَبَةٍ",en:"dusty misery"}]},
    {n:17,scene:2,ar:"ثُمَّ كَانَ مِنَ ٱلَّذِينَ ءَامَنُوا۟ وَتَوَاصَوْا۟ بِٱلصَّبْرِ وَتَوَاصَوْا۟ بِٱلْمَرْحَمَةِ",en:"And then being among those who believed and advised one another to patience and advised one another to compassion.",connects:"These people are —",words:[{ar:"ءَامَنُوا۟",en:"believed"},{ar:"تَوَاصَوْا۟",en:"advised one another"},{ar:"ٱلْمَرْحَمَةِ",en:"compassion"}]},
    {n:18,scene:2,ar:"أُو۟لَٰٓئِكَ أَصْحَٰبُ ٱلْمَيْمَنَةِ",en:"Those are the companions of the right.",connects:"→ Scene 4: the opposite",words:[{ar:"أَصْحَٰبُ",en:"companions"},{ar:"ٱلْمَيْمَنَةِ",en:"the right side"}]},
    {n:19,scene:3,ar:"وَٱلَّذِينَ كَفَرُوا۟ بِـَٔايَٰتِنَا هُمْ أَصْحَٰبُ ٱلْمَشْـَٔمَةِ",en:"But they who disbelieved in Our signs - those are the companions of the left.",connects:"Their covering —",words:[{ar:"كَفَرُوا۟",en:"disbelieved"},{ar:"ءَايَٰتِنَا",en:"Our signs"},{ar:"ٱلْمَشْـَٔمَةِ",en:"the left side"}]},
    {n:20,scene:3,ar:"عَلَيْهِمْ نَارٌ مُّؤْصَدَةٌۢ",en:"Over them will be fire closed in.",connects:"Complete.",words:[{ar:"نَارٌ",en:"fire"},{ar:"مُّؤْصَدَةٌ",en:"closed over"}]},
  ]
};

const ADIYAT = {
  id:"adiyat",name:"Al-ʿĀdiyāt",nameAr:"العاديات",ayahCount:11,juz:30,revelationOrder:100,hasTextbook:true,
  scenes:[
    {title:"The Charging Horses",range:"1–5",hook:"Five oaths in five āyāt — war horses racing, sparking hooves, raiding at dawn, raising dust, plunging into the enemy centre.",memory:"Picture the charge: panting breath → sparks from hooves → dawn raid → dust cloud → deep into the ranks. Then the pivot: all that power, and man is still ungrateful.",tafsir:"The ʿādiyāt are horses that run swiftly; ḍabḥ is the sound of their heavy breathing from speed. Each fa- clause stacks: striking sparks, raiding at dawn, stirring dust, penetrating the enemy — vivid proof of power, then the verdict on man.",tafsirAttr:"Al-Saʿdī, Taysīr al-Karīm al-Raḥmān"},
    {title:"Ungrateful Man",range:"6–8",hook:"The oaths land on one accusation: mankind is kanūd to his Lord — ungrateful when tested, yet a witness to his own ingratitude, fiercely attached to wealth.",memory:"Three āyāt, three lenses: ungrateful to Allah · witness against himself · intense love of khayr (wealth). The horse charges outward; man's problem turns inward.",tafsir:"Kanūd: he shows ingratitude when afflicted, forgets blessings when ease returns. He witnesses his own denial, yet is lashadīd in love of wealth — so distracted he forgets resurrection.",tafsirAttr:"Ibn Kathīr, Tafsīr"},
    {title:"The Day Everything Is Known",range:"9–11",hook:"Three rhetorical blows: graves overturned, secrets in chests laid bare, and their Lord — fully Aware of them that Day.",memory:"Does he not know? → graves scattered → hearts revealed → Rabbahum bihim yawma-idhin khabīr. From horses on earth to secrets in the chest to Allah's complete awareness.",tafsir:"Buʿthira mā fī al-qubūr: the dead are raised and brought out. Ḥuṣṣila mā fī al-ṣudūr: hidden intentions and beliefs are made plain. Nothing remains concealed from al-Khabīr.",tafsirAttr:"Al-Saʿdī, Taysīr al-Karīm al-Raḥmān"},
  ],
  ayahs:[
    {n:1,scene:0,ar:"وَٱلْعَـٰدِيَـٰتِ ضَبْحًا",en:"By the racers, panting",connects:"Then horses that strike —",words:[{ar:"وَٱلْعَـٰدِيَـٰتِ",en:"By the racers"},{ar:"ضَبْحًا",en:"panting"}]},
    {n:2,scene:0,ar:"فَٱلْمُورِيَـٰتِ قَدْحًا",en:"And the producers of sparks [when] striking",connects:"Then raiders at dawn —",words:[{ar:"فَٱلْمُورِيَـٰتِ",en:"striking sparks"},{ar:"قَدْحًا",en:"[when] striking"}]},
    {n:3,scene:0,ar:"فَٱلْمُغِيرَٰتِ صُبْحًا",en:"And the chargers at dawn",connects:"Raising dust thereby —",words:[{ar:"فَٱلْمُغِيرَٰتِ",en:"the raiders"},{ar:"صُبْحًا",en:"at dawn"}]},
    {n:4,scene:0,ar:"فَأَثَرْنَ بِهِۦ نَقْعًا",en:"Arising thereby [clouds of] dust",connects:"Then penetrating the centre —",words:[{ar:"فَأَثَرْنَ",en:"they stirred up"},{ar:"بِهِۦ",en:"thereby"},{ar:"نَقْعًا",en:"dust"}]},
    {n:5,scene:0,ar:"فَوَسَطْنَ بِهِۦ جَمْعًا",en:"Arriving thereby in the centre collectively",connects:"→ Scene 2: the verdict on man",words:[{ar:"فَوَسَطْنَ",en:"they penetrated"},{ar:"بِهِۦ",en:"thereby"},{ar:"جَمْعًا",en:"the centre / host"}]},
    {n:6,scene:1,ar:"إِنَّ ٱلْإِنسَـٰنَ لِرَبِّهِۦ لَكَنُودٌ",en:"Indeed mankind, to his Lord, is ungrateful",connects:"And he knows it —",words:[{ar:"إِنَّ",en:"Indeed"},{ar:"ٱلْإِنسَـٰنَ",en:"mankind"},{ar:"لِرَبِّهِۦ",en:"to his Lord"},{ar:"لَكَنُودٌ",en:"is ungrateful"}]},
    {n:7,scene:1,ar:"وَإِنَّهُۥ عَلَىٰ ذَٰلِكَ لَشَهِيدٌ",en:"And indeed he is, of that, a witness",connects:"And he clings to wealth —",words:[{ar:"وَإِنَّهُۥ",en:"And indeed he"},{ar:"عَلَىٰ ذَٰلِكَ",en:"of that"},{ar:"لَشَهِيدٌ",en:"is a witness"}]},
    {n:8,scene:1,ar:"وَإِنَّهُۥ لِحُبِّ ٱلْخَيْرِ لَشَدِيدٌ",en:"And indeed he is, in love of wealth, intense",connects:"→ Scene 3: does he not reflect?",words:[{ar:"وَإِنَّهُۥ",en:"And indeed he"},{ar:"لِحُبِّ ٱلْخَيْرِ",en:"in love of wealth"},{ar:"لَشَدِيدٌ",en:"is intense"}]},
    {n:9,scene:2,ar:"أَفَلَا يَعْلَمُ إِذَا بُعْثِرَ مَا فِى ٱلْقُبُورِ",en:"Does he not know when what is in the graves is scattered",connects:"And secrets in hearts —",words:[{ar:"أَفَلَا يَعْلَمُ",en:"Does he not know"},{ar:"إِذَا",en:"when"},{ar:"بُعْثِرَ",en:"is scattered / overturned"},{ar:"مَا فِى ٱلْقُبُورِ",en:"what is in the graves"}]},
    {n:10,scene:2,ar:"وَحُصِّلَ مَا فِى ٱلصُّدُورِ",en:"And what is in the breasts is made apparent",connects:"Their Lord is Aware —",words:[{ar:"وَحُصِّلَ",en:"is made apparent"},{ar:"مَا فِى ٱلصُّدُورِ",en:"what is in the breasts"}]},
    {n:11,scene:2,ar:"إِنَّ رَبَّهُم بِهِمْ يَوْمَئِذٍ لَّخَبِيرٌ",en:"Indeed, their Lord with them, that Day, is Acquainted",connects:"Complete.",words:[{ar:"إِنَّ رَبَّهُم",en:"Indeed their Lord"},{ar:"بِهِمْ",en:"with them"},{ar:"يَوْمَئِذٍ",en:"that Day"},{ar:"لَّخَبِيرٌ",en:"is Acquainted"}]},
  ]
};

const DEFAULT_SURAHS = [
  ...Object.values(JUZ30_GENERATED_SURAHS),
  BUROOJ,
  TARIQ,
  ALA,
  GHASHIYAH,
  FAJR,
  BALAD,
  ADIYAT,
  GENERATED_SURAHS.qariah,
  GENERATED_SURAHS.takathur,
  GENERATED_SURAHS.asr,
  GENERATED_SURAHS.humazah,
  GENERATED_SURAHS.feel,
  GENERATED_SURAHS.quraysh,
  GENERATED_SURAHS.kawthar,
  GENERATED_SURAHS.kafirun,
];
const sortSurahs = surahs => [...surahs].sort((a, b) => a.revelationOrder - b.revelationOrder);
const ORDERED_DEFAULT_SURAHS = sortSurahs(DEFAULT_SURAHS);

/** Set true to show Virtual Teacher UI (component kept either way). */
const SHOW_TEACHER = false;

const SK = "muraja3a_v4";
function load() {
  try {
    const r = localStorage.getItem(SK);
    if (r) {
      const stored = JSON.parse(r);
      const ids = new Set(stored.map(s => s.id));
      const missing = ORDERED_DEFAULT_SURAHS.filter(s => !ids.has(s.id));
      return sortSurahs(missing.length ? [...stored, ...missing] : stored);
    }
  } catch {
    // Ignore malformed localStorage and fall back to bundled content.
  }
  return ORDERED_DEFAULT_SURAHS;
}
function save(s) {
  try {
    localStorage.setItem(SK,JSON.stringify(s));
  } catch {
    // Ignore storage failures; revision data still works for the session.
  }
}
const shuffle = a => [...a].sort(()=>Math.random()-.5);
const rand = a => a[Math.floor(Math.random()*a.length)];
const moveInArray = (arr, from, to) => {
  if (from === to || from < 0 || to < 0 || from >= arr.length || to >= arr.length) return arr;
  const next = [...arr];
  const [item] = next.splice(from, 1);
  next.splice(to, 0, item);
  return next;
};
const formatDuration = seconds => {
  const safe = Math.max(0, seconds || 0);
  const mins = Math.floor(safe / 60);
  const secs = safe % 60;
  return `${mins}:${String(secs).padStart(2, "0")}`;
};
const ROUTE_VIEWS = new Set(["home","revise","iraab","quiz","recitation","teacher"]);
const defaultSurahId = surahs => surahs[0]?.id ?? "burooj";
const clampScene = (scene,max) => Math.min(Math.max(scene,0),Math.max(max,0));

function normalizeRoute(route,surahs) {
  const fallbackSid = defaultSurahId(surahs);
  const surah = surahs.find(s=>s.id===route.sid)||surahs[0];
  let view = ROUTE_VIEWS.has(route.view) ? route.view : "home";
  if(view==="teacher"&&!SHOW_TEACHER) view = "home";
  const rawScene = Number(route.scene);
  const scene = view==="revise"&&Number.isFinite(rawScene)
    ? clampScene(rawScene,(surah?.scenes?.length??1)-1)
    : 0;

  return {sid:surah?.id??fallbackSid,view,scene};
}

function routeFromUrl(surahs) {
  if(typeof window==="undefined") return normalizeRoute({sid:defaultSurahId(surahs),view:"home",scene:0},surahs);
  const params = new URLSearchParams(window.location.search);
  return normalizeRoute({
    sid:params.get("surah")||defaultSurahId(surahs),
    view:params.get("view")||"home",
    scene:params.get("scene")||0,
  },surahs);
}

function routeUrl(route) {
  const params = new URLSearchParams();
  if(route.view!=="home") {
    params.set("surah",route.sid);
    params.set("view",route.view);
    if(route.view==="revise"&&route.scene>0) params.set("scene",String(route.scene));
  }
  const query = params.toString();
  return `${window.location.pathname}${query?`?${query}`:""}${window.location.hash}`;
}

// ════════════════════════════════════════════════
// ROOT
// ════════════════════════════════════════════════
export default function App() {
  const [surahs] = useState(load);
  const [route,setRoute] = useState(()=>routeFromUrl(surahs));
  const [open,setOpen] = useState({});
  const [displayMode,setDisplayMode] = useState("mushaf");

  useEffect(()=>save(surahs),[surahs]);
  useEffect(()=>{
    const current = routeFromUrl(surahs);
    window.history.replaceState(current,"",routeUrl(current));
    const onPopState = () => {
      setRoute(routeFromUrl(surahs));
      setOpen({});
    };
    window.addEventListener("popstate",onPopState);
    return () => window.removeEventListener("popstate",onPopState);
  },[surahs]);

  const {sid,view,scene} = route;
  const surah = surahs.find(s=>s.id===sid)||surahs[0];

  function navigate(next,{replace=false}={}) {
    const normalized = normalizeRoute(typeof next==="function"?next(route):next,surahs);
    const nextUrl = routeUrl(normalized);
    const currentUrl = `${window.location.pathname}${window.location.search}${window.location.hash}`;
    setRoute(normalized);
    setOpen({});
    window.history[replace||nextUrl===currentUrl?"replaceState":"pushState"](normalized,"",nextUrl);
  }
  function go(id,v){ navigate({sid:id,view:v,scene:0}); }
  function goHome(){ navigate({sid,view:"home",scene:0},{replace:true}); }
  function goView(v){ navigate({sid,view:v,scene:v==="revise"?scene:0}); }
  function goScene(nextScene){ navigate({sid,view:"revise",scene:nextScene},{replace:true}); }

  if(view==="home") return <Home surahs={surahs} go={go} />;
  if(view==="iraab") return (
    <TextbookStudy
      surah={surah}
      onBack={goHome}
      onRevise={()=>goView("revise")}
      onQuiz={()=>goView("quiz")}
    />
  );
  if(view==="teacher") {
    if(!SHOW_TEACHER) return <Home surahs={surahs} go={go} />;
    return <Teacher surah={surah} onBack={goHome} onQuiz={()=>goView("quiz")} onRevise={()=>goView("revise")} onIraab={surah.hasTextbook?()=>goView("iraab"):undefined} />;
  }
  if(view==="quiz") return <Quiz surah={surah} onBack={goHome} onTeacher={()=>goView("teacher")} onIraab={surah.hasTextbook?()=>goView("iraab"):undefined} />;
  if(view==="recitation") return <RecitationQuiz surah={surah} onBack={goHome} />;

  // REVISE
  const sc = surah.scenes[scene];
  const col = C.s[scene%C.s.length];
  const ayahs = surah.ayahs.filter(a=>a.scene===scene);

  return (
    <div style={{minHeight:"100vh",background:C.cream,fontFamily:"'Inter',sans-serif"}}>
      <style>{FONTS}</style>
      <TopBar
        left={<><BackBtn onClick={goHome}/><Ar size={26}>{surah.nameAr}</Ar><span style={{fontFamily:"'Lora',serif",fontSize:14,color:C.ink3,fontStyle:"italic",marginLeft:8}}>{surah.name}</span></>}
        right={<>
          {surah.hasTextbook&&<Btn variant="teal" onClick={()=>goView("iraab")} style={{fontSize:13,padding:"7px 14px"}}>📐 Iʿrāb</Btn>}
          <Btn variant="outline" onClick={()=>goView("quiz")} style={{fontSize:13,padding:"7px 14px"}}>✏️ Quiz</Btn>
          {SHOW_TEACHER&&<Btn variant="dark" onClick={()=>goView("teacher")} style={{fontSize:13,padding:"7px 14px"}}>🎓 Teach</Btn>}
        </>}
      />
      <div style={{background:C.warm,borderBottom:`1px solid ${C.border}`,padding:"5px 1.5rem",textAlign:"center",fontFamily:"'Lora',serif",fontSize:13,color:C.ink3,fontStyle:"italic"}}>
        {surah.scenes.map(s=>s.title).join(" · ")}
      </div>
      {/* Scene tabs */}
      <div style={{display:"flex",background:"#fff",borderBottom:`1px solid ${C.border}`,overflowX:"auto"}}>
        {surah.scenes.map((s,i)=>{
          const c=C.s[i%C.s.length],act=i===scene;
          return <button key={i} onClick={()=>goScene(i)} style={{flex:1,minWidth:68,padding:"10px 4px 8px",background:act?c.bg:"transparent",border:"none",borderBottom:`3px solid ${act?c.mid:"transparent"}`,cursor:"pointer",transition:"all .2s"}}>
            <div style={{width:7,height:7,borderRadius:"50%",background:act?c.mid:"#d8d0c4",margin:"0 auto 4px"}}/>
            <div style={{fontSize:12,fontWeight:600,color:act?c.deep:C.ink3}}>Scene {i+1}</div>
            <div style={{fontSize:11,color:act?c.mid:"#b0a898"}}>{s.range}</div>
          </button>;
        })}
      </div>
      {/* Header */}
      <div style={{padding:"1.25rem 1.5rem 0.75rem"}}>
        <div style={{display:"inline-flex",alignItems:"center",gap:6,background:col.bg,color:col.deep,border:`1px solid ${col.border}`,borderRadius:20,padding:"3px 12px",fontSize:12,fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase",marginBottom:8}}>Scene {scene+1} · āyāt {sc.range}</div>
        <div style={{fontFamily:"'Lora',serif",fontSize:24,fontWeight:500,color:C.ink,marginBottom:5,marginTop:4}}>{sc.title}</div>
        <div style={{fontSize:16,color:C.ink2,lineHeight:1.65}}>{sc.hook}</div>
      </div>
      {/* Memory */}
      <div style={{margin:"0 1.5rem 1rem",background:col.bg,borderRadius:10,padding:"10px 14px",display:"flex",gap:10,border:`1px solid ${col.border}`}}>
        <span style={{color:col.mid,fontSize:19,flexShrink:0}}>◈</span>
        <div>
          <div style={{fontSize:11,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",color:col.mid,marginBottom:3}}>Memory Anchor</div>
          <div style={{fontSize:16,fontFamily:"'Lora',serif",fontStyle:"italic",color:col.deep,lineHeight:1.6}}>{sc.memory}</div>
        </div>
      </div>
      <MushafViewToggle mode={displayMode} onChange={setDisplayMode} />
      {displayMode==="mushaf" && (
        <MadaniMushafPage
          surah={surah}
          ayahs={surah.ayahs}
          showBasmala={surah.ayahs[0]?.n===1}
        />
      )}
      {/* Ayahs — study mode */}
      {displayMode==="study" && <div className="mushaf-study-section">
        {ayahs.map((a,idx)=>{
          const k=`${scene}-${idx}`,isOpen=open[k];
          return <div key={idx} style={{marginBottom:8}}>
            <div style={{background:"#fff",border:`1px solid ${col.border}`,borderRadius:12,overflow:"hidden"}}>
              <div className="study-ayah-card" onClick={()=>setOpen(p=>({...p,[k]:!p[k]}))}>
                <span className="study-ayah-num" style={{background:col.bg,color:col.deep,borderColor:col.border}}>{a.n}</span>
                <div className="study-ayah-text">
                  <div
                    className="study-ayah-ar"
                    dangerouslySetInnerHTML={{__html:highlightMushafText(a.ar)}}
                  />
                  <div className="study-ayah-en">{a.en}</div>
                </div>
              </div>
              <div className="study-ayah-actions">
                <button onClick={()=>setOpen(p=>({...p,[k]:!p[k]}))} style={{fontSize:13,fontWeight:500,padding:"4px 12px",borderRadius:10,border:`1px solid ${isOpen?"transparent":C.border}`,background:isOpen?col.bg:"transparent",color:isOpen?col.deep:C.ink3,cursor:"pointer"}}>
                  {isOpen?"↑ hide":"↓ words · meaning"}
                </button>
              </div>
              {isOpen && <div className="study-ayah-details" style={{borderTopColor:col.border}}>
                <div style={{fontSize:11,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",color:col.mid,marginBottom:8}}>Word by word</div>
                <div style={{display:"flex",flexWrap:"wrap",gap:6,flexDirection:"row-reverse",marginBottom:12}}>
                  {a.words.map((w,wi)=><div key={wi} style={{background:"#fff",border:`1px solid ${col.border}`,borderRadius:8,padding:"6px 14px",textAlign:"center"}}>
                    <div style={{fontFamily:"'Scheherazade New',serif",fontSize:24,color:col.deep,direction:"rtl",lineHeight:1.8}}>{w.ar}</div>
                    <div style={{fontSize:13,color:C.ink3,marginTop:3}}>{w.en}</div>
                  </div>)}
                </div>
                <div style={{display:"flex",alignItems:"center",gap:8,paddingTop:8,borderTop:`1px dashed ${col.border}`}}>
                  <div style={{width:16,height:1,background:col.border}}/>
                  <span style={{fontSize:13,fontStyle:"italic",color:col.mid}}>{a.connects}</span>
                </div>
              </div>}
            </div>
          </div>;
        })}
      </div>}
      {/* Tafsir */}
      <div style={{margin:"0.75rem 1.5rem 1rem",borderLeft:`3px solid ${col.mid}`,padding:"10px 14px",background:"#fff",borderRadius:"0 8px 8px 0"}}>
        <div style={{fontSize:11,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",color:C.ink3,marginBottom:4}}>Tafsir note</div>
        <div style={{fontSize:16,fontFamily:"'Lora',serif",fontStyle:"italic",color:C.ink2,lineHeight:1.65,marginBottom:4}}>{sc.tafsir}</div>
        <div style={{fontSize:12,color:C.ink3}}>— {sc.tafsirAttr}</div>
      </div>
      {/* Nav */}
      <div style={{display:"grid",gridTemplateColumns:SHOW_TEACHER?"1fr 1fr 1fr":"1fr 1fr",gap:10,padding:"1rem 1.5rem 1.5rem",borderTop:`1px solid ${C.border}`,background:C.warm}}>
        <Btn variant="outline" onClick={()=>goScene(Math.max(0,scene-1))} disabled={scene===0}>← prev</Btn>
        {SHOW_TEACHER&&<Btn variant="dark" onClick={()=>goView("teacher")} style={{fontSize:13}}>🎓 Teach me</Btn>}
        <Btn variant="outline" onClick={()=>goScene(Math.min(surah.scenes.length-1,scene+1))} disabled={scene===surah.scenes.length-1}>next →</Btn>
      </div>
    </div>
  );
}

// ════════════════════════════════════════════════
// HOME
// ════════════════════════════════════════════════
function Home({surahs,go}) {
  return (
    <div style={{minHeight:"100vh",background:C.cream,fontFamily:"'Inter',sans-serif"}}>
      <style>{FONTS}</style>
      <div style={{background:"#fff",borderBottom:`1px solid ${C.border}`,padding:"1.25rem 1.5rem",display:"flex",justifyContent:"space-between",alignItems:"center",gap:14,flexWrap:"wrap"}}>
        <div>
          <div style={{fontFamily:"'Scheherazade New',serif",fontSize:38,color:C.ink,lineHeight:1.2}}>مُراجَعة</div>
          <div style={{fontFamily:"'Lora',serif",fontSize:14,color:C.ink3,fontStyle:"italic"}}>Qur'an Revision · Iʿrāb · Quiz{SHOW_TEACHER?" · Virtual Teacher":""}</div>
        </div>
        <div style={{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap",justifyContent:"flex-end"}}>
          <Link to="/" style={{background:"#fff",color:C.ink2,border:`1px solid ${C.border}`,borderRadius:999,padding:"9px 14px",fontSize:14,fontWeight:700,textDecoration:"none",whiteSpace:"nowrap"}}>
            Home
          </Link>
          <Link to="/diary" style={{background:C.tealBg,color:C.tealDark,border:"1px solid #b8ddd6",borderRadius:999,padding:"9px 14px",fontSize:14,fontWeight:700,textDecoration:"none",whiteSpace:"nowrap"}}>
            Memorisation Diary
          </Link>
        </div>
      </div>
      <div style={{padding:"1.5rem"}}>
        <div style={{fontSize:12,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",color:C.ink3,marginBottom:12}}>Juz 30 · {surahs.length} Sūrahs</div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(240px,1fr))",gap:14}}>
          {surahs.map((s,i)=>{
            const c=C.s[i%C.s.length];
            return <div key={s.id} style={{background:"#fff",border:`1px solid ${c.border}`,borderRadius:14,overflow:"hidden",boxShadow:"0 2px 12px -4px rgba(26,24,20,.06)"}}>
              <div style={{background:c.bg,padding:"14px 16px 10px",textAlign:"right",position:"relative"}}>
                <span style={{position:"absolute",left:12,top:12,fontSize:10,fontWeight:700,letterSpacing:"0.06em",background:"#fff",color:c.deep,border:`1px solid ${c.border}`,borderRadius:20,padding:"3px 10px"}}>Sūrah {s.revelationOrder}</span>
                <div style={{fontFamily:"'Scheherazade New',serif",fontSize:31,color:c.deep}}>{s.nameAr}</div>
                <div style={{fontFamily:"'Lora',serif",fontSize:16,color:c.mid,fontStyle:"italic",marginTop:2}}>{s.name}</div>
              </div>
              <div style={{padding:"10px 16px 14px"}}>
                <div style={{fontSize:13,color:C.ink3,marginBottom:12}}>{s.ayahCount} āyāt · {s.scenes.length} scenes</div>
                {s.hasTextbook&&(
                  <button onClick={()=>go(s.id,"iraab")} style={{width:"100%",marginBottom:8,background:c.mid,color:"#fff",border:"none",borderRadius:8,padding:"9px 0",fontSize:13,fontWeight:600,cursor:"pointer",letterSpacing:"0.02em"}}>
                    📐 Study with Iʿrāb
                  </button>
                )}
                <div style={{display:"grid",gridTemplateColumns:SHOW_TEACHER?"1fr 1fr 1fr 1fr":"1fr 1fr 1fr",gap:6}}>
                  <button onClick={()=>go(s.id,"revise")} style={{background:c.bg,color:c.deep,border:"none",borderRadius:8,padding:"8px 4px",fontSize:12,fontWeight:600,cursor:"pointer"}}>📖 Revise</button>
                  <button onClick={()=>go(s.id,"quiz")} style={{background:"#f0f0ec",color:C.ink2,border:"none",borderRadius:8,padding:"8px 4px",fontSize:12,fontWeight:600,cursor:"pointer"}}>✏️ Quiz</button>
                  <button onClick={()=>go(s.id,"recitation")} style={{background:C.tealBg,color:C.tealDark,border:"none",borderRadius:8,padding:"8px 4px",fontSize:12,fontWeight:600,cursor:"pointer"}}>🎙 Recite</button>
                  {SHOW_TEACHER&&<button onClick={()=>go(s.id,"teacher")} style={{background:C.ink,color:"#fff",border:"none",borderRadius:8,padding:"8px 4px",fontSize:12,fontWeight:600,cursor:"pointer"}}>🎓 Teach</button>}
                </div>
              </div>
            </div>;
          })}
        </div>
      </div>
    </div>
  );
}

// ════════════════════════════════════════════════
// VIRTUAL TEACHER
// ════════════════════════════════════════════════
function Teacher({surah,onBack,onQuiz,onRevise,onIraab}) {
  const [msgs,setMsgs] = useState([]);
  const [input,setInput] = useState("");
  const [loading,setLoading] = useState(false);
  const [history,setHistory] = useState([]);
  const [score] = useState({r:0,t:0,streak:0});
  const [weak] = useState([]);
  const [started,setStarted] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(()=>{ bottomRef.current?.scrollIntoView({behavior:"smooth"}); },[msgs,loading]);

  const addMsg = (role,text) => setMsgs(p=>[...p,{role,text,id:Date.now()+Math.random()}]);

  const sysPrompt = `You are Ustādh Murājaʿah — a warm, deeply knowledgeable virtual teacher specialising in Qur'an memorisation. You are helping a student revise ${surah.name} (${surah.nameAr}), Juz ${surah.juz}, ${surah.ayahCount} āyāt.

SURAH SCENES:
${surah.scenes.map((sc,i)=>`Scene ${i+1}: "${sc.title}" (āyāt ${sc.range})`).join('\n')}

ALL ĀYĀT:
${surah.ayahs.map(a=>`${a.n}. ${a.ar} — "${a.en}"`).join('\n')}

WORD DATA:
${surah.ayahs.map(a=>`Āyah ${a.n}: ${a.words.map(w=>`${w.ar}=${w.en}`).join(', ')}`).join('\n')}

STUDENT SESSION: ${score.r}/${score.t} correct, streak ${score.streak}, weak āyāt: [${weak.join(',')||'none'}]

YOUR STYLE:
- Warm, encouraging, knowledgeable Islamic studies teacher
- Keep responses SHORT (2–4 sentences) unless explaining something complex
- Quiz the student naturally in conversation — vary question types:
  * Partial āyah completion: "What comes after وَٱلسَّمَآءِ ذَاتِ...?"
  * Word meaning: "What does ٱلْوَقُودِ mean?"
  * Which scene: "Which scene is āyah 14 in?"
  * Sequence: "What āyah comes right after āyah 9?"
  * Reflection: "Why is الغَفُورُ paired with الوَدُودُ here?"
- Write Arabic in Arabic script (it renders beautifully in the UI)
- After wrong answer: correct warmly, give memory anchor, note to revisit
- After 4–5 questions: brief progress note
- If student says "quiz me" → ask 3 questions in a row
- If student says "explain āyah X" → explain with tafsir insight
- If student says "what should I focus on" → advise based on weak āyāt
- When you ask a question, end your message with the question clearly on its own line
- Format correct answers clearly so student can self-check`;

  async function callAPI(userText, isInit=false) {
    setLoading(true);
    const newHist = isInit
      ? [{role:"user",content:"Greet me warmly, state today's plan for this surah in 1–2 sentences, then ask your first question to test me."}]
      : [...history, {role:"user",content:userText}];
    if(!isInit) setHistory(newHist);
    try {
      const resp = await fetch("https://api.anthropic.com/v1/messages",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
          model:"claude-sonnet-4-20250514",
          max_tokens:450,
          system:sysPrompt,
          messages:newHist.slice(-16)
        })
      });
      const data = await resp.json();
      const reply = data.content?.[0]?.text||"Connection issue — please try again.";
      addMsg("teacher",reply);
      const updatedHist = [...newHist,{role:"assistant",content:reply}];
      setHistory(updatedHist);
    } catch {
      addMsg("teacher","I'm having trouble connecting. Please try again.");
    }
    setLoading(false);
  }

  function start() {
    setStarted(true);
    callAPI("",true);
  }

  function send() {
    const t = input.trim();
    if(!t||loading) return;
    setInput("");
    addMsg("user",t);
    callAPI(t);
    inputRef.current?.focus();
  }

  const pct = score.t>0?Math.round(score.r/score.t*100):null;

  // Render Arabic inline
  const renderText = text => text.replace(
    /([\u0600-\u06FF\u0750-\u077F\uFB50-\uFDFF\uFE70-\uFEFF][\u0600-\u06FF\u0750-\u077F\uFB50-\uFDFF\uFE70-\uFEFF\s\u064B-\u065F]*[\u0600-\u06FF\u0750-\u077F\uFB50-\uFDFF\uFE70-\uFEFF]|[\u0600-\u06FF\u0750-\u077F\uFB50-\uFDFF\uFE70-\uFEFF]+)/g,
    '<span style="font-family:\'Scheherazade New\',serif;font-size:24px;direction:rtl;display:inline-block;line-height:1.9;margin:0 2px;vertical-align:middle;">$1</span>'
  );

  if(!started) return (
    <div style={{minHeight:"100vh",background:C.cream,fontFamily:"'Inter',sans-serif"}}>
      <style>{FONTS}</style>
      <TopBar
        left={<><BackBtn onClick={onBack}/><span style={{fontFamily:"'Lora',serif",fontSize:18,color:C.ink}}>Virtual Teacher</span></>}
        right={<><Btn variant="ghost" onClick={onRevise} style={{fontSize:13,padding:"7px 14px"}}>📖 Revise</Btn>{onIraab&&<Btn variant="teal" onClick={onIraab} style={{fontSize:13,padding:"7px 14px"}}>📐 Iʿrāb</Btn>}<Btn variant="ghost" onClick={onQuiz} style={{fontSize:13,padding:"7px 14px"}}>✏️ Quiz</Btn></>}
      />
      <div style={{padding:"2rem 1.5rem",maxWidth:480,margin:"0 auto"}}>
        <div style={{background:"#fff",border:`1px solid ${C.border}`,borderRadius:16,padding:"1.75rem",marginBottom:16,textAlign:"center"}}>
          <div style={{width:64,height:64,borderRadius:"50%",background:C.tealBg,border:`2px solid #b8ddd6`,display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 12px",fontSize:28}}>🎓</div>
          <div style={{fontFamily:"'Lora',serif",fontSize:22,fontWeight:500,color:C.ink,marginBottom:4}}>Ustādh Murājaʿah</div>
          <div style={{fontSize:14,color:C.ink3,marginBottom:16}}>Your personal Qur'an revision teacher</div>
          <div style={{background:C.tealBg,borderRadius:10,padding:"10px 14px",marginBottom:16,textAlign:"right"}}>
            <div style={{fontFamily:"'Scheherazade New',serif",fontSize:31,color:C.tealDark,direction:"rtl"}}>{surah.nameAr}</div>
            <div style={{fontFamily:"'Lora',serif",fontSize:14,color:C.teal,fontStyle:"italic",textAlign:"left"}}>{surah.name} · Juz {surah.juz} · {surah.ayahCount} āyāt</div>
          </div>
          <Btn variant="dark" onClick={start} style={{width:"100%",fontSize:17,padding:13}}>Begin session →</Btn>
        </div>
        {[
          {icon:"💬",t:"Conversational — ask anything, answer naturally"},
          {icon:"🔁",t:"Revisits what you get wrong"},
          {icon:"📍",t:"Partial āyāt, word meanings, sequence, scene"},
          {icon:"✨",t:"Memory anchors when you're stuck"},
        ].map((f,i)=><div key={i} style={{display:"flex",alignItems:"center",gap:10,padding:"9px 0",borderBottom:i<3?`1px solid ${C.border}`:"none"}}>
          <span style={{fontSize:19}}>{f.icon}</span>
          <span style={{fontSize:14,color:C.ink2}}>{f.t}</span>
        </div>)}
      </div>
    </div>
  );

  return (
    <div style={{minHeight:"100vh",background:C.cream,fontFamily:"'Inter',sans-serif",display:"flex",flexDirection:"column"}}>
      <style>{FONTS}</style>
      {/* Header */}
      <div style={{background:"#fff",borderBottom:`1px solid ${C.border}`,padding:"10px 16px",display:"flex",alignItems:"center",gap:10,flexShrink:0}}>
        <BackBtn onClick={onBack}/>
        <div style={{width:36,height:36,borderRadius:"50%",background:C.tealBg,border:`1.5px solid #b8ddd6`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,fontSize:22}}>🎓</div>
        <div style={{flex:1}}>
          <div style={{fontSize:16,fontWeight:600,color:C.ink}}>Ustādh Murājaʿah</div>
          <div style={{fontSize:12,color:C.teal}}><Ar size={17}>{surah.nameAr}</Ar> · Session active</div>
        </div>
        <div style={{display:"flex",gap:6,alignItems:"center"}}>
          {pct!==null&&<span style={{fontSize:13,fontWeight:600,padding:"3px 9px",borderRadius:20,background:pct>=75?C.tealBg:pct>=50?C.amberBg:C.redBg,color:pct>=75?C.tealDark:pct>=50?C.amberDark:C.redDark}}>{score.r}/{score.t}</span>}
          {score.streak>1&&<span style={{fontSize:13,fontWeight:600,padding:"3px 9px",borderRadius:20,background:C.amberBg,color:C.amberDark}}>🔥{score.streak}</span>}
          <Btn variant="ghost" onClick={onQuiz} style={{fontSize:12,padding:"5px 10px"}}>✏️ Quiz</Btn>
        </div>
      </div>
      {/* Weak bar */}
      {weak.length>0&&<div style={{background:C.amberBg,borderBottom:`1px solid #f0c98a`,padding:"5px 16px",fontSize:13,color:C.amberDark,display:"flex",alignItems:"center",gap:6,flexWrap:"wrap",flexShrink:0}}>
        <span style={{fontWeight:600}}>Revisiting:</span>
        {weak.map(n=><span key={n} style={{background:"#fff",border:`1px solid #f0c98a`,borderRadius:6,padding:"1px 8px",fontFamily:"'Scheherazade New',serif",fontSize:17,color:C.amberDark}}>
          {surah.ayahs.find(a=>a.n===n)?.ar?.split(" ")[0]}... ({n})
        </span>)}
      </div>}
      {/* Messages */}
      <div style={{flex:1,overflowY:"auto",padding:"16px",display:"flex",flexDirection:"column",gap:10}}>
        {msgs.map(m=>(
          <div key={m.id} style={{display:"flex",gap:8,alignItems:"flex-start",flexDirection:m.role==="user"?"row-reverse":"row"}}>
            <div style={{width:32,height:32,borderRadius:"50%",background:m.role==="teacher"?C.tealBg:"#eaf0fa",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,fontSize:18,border:`1px solid ${m.role==="teacher"?"#b8ddd6":C.border}`}}>
              {m.role==="teacher"?"🎓":"🙋"}
            </div>
            <div style={{maxWidth:"83%",background:m.role==="teacher"?"#fff":C.ink,color:m.role==="teacher"?C.ink:"#fff",border:m.role==="teacher"?`1px solid ${C.border}`:"none",borderRadius:m.role==="teacher"?"4px 14px 14px 14px":"14px 4px 14px 14px",padding:"11px 15px",fontSize:16,lineHeight:1.75,fontFamily:"'Lora',serif"}}
              dangerouslySetInnerHTML={{__html:renderText(m.text.replace(/\n/g,"<br/>"))}}
            />
          </div>
        ))}
        {loading&&<div style={{display:"flex",gap:8,alignItems:"flex-start"}}>
          <div style={{width:32,height:32,borderRadius:"50%",background:C.tealBg,border:`1px solid #b8ddd6`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:18}}>🎓</div>
          <div style={{background:"#fff",border:`1px solid ${C.border}`,borderRadius:"4px 14px 14px 14px",padding:"14px 18px",display:"flex",gap:5}}>
            {[0,1,2].map(i=><div key={i} style={{width:7,height:7,borderRadius:"50%",background:"#c8c0b8",animation:"b .9s infinite",animationDelay:`${i*.15}s`}}/>)}
          </div>
        </div>}
        <div ref={bottomRef}/>
      </div>
      {/* Quick prompts */}
      <div style={{padding:"8px 16px 4px",display:"flex",gap:6,overflowX:"auto",flexShrink:0}}>
        {["Quiz me","Explain scene 1","What should I focus on?","Memory tip","Test my word meanings","What's next to memorise?"].map(p=>(
          <button key={p} onClick={()=>{addMsg("user",p);callAPI(p);}}
            style={{flexShrink:0,background:"#fff",border:`1px solid ${C.border}`,borderRadius:20,padding:"5px 12px",fontSize:13,color:C.ink2,cursor:"pointer",whiteSpace:"nowrap",fontFamily:"'Inter',sans-serif"}}>
            {p}
          </button>
        ))}
      </div>
      {/* Input */}
      <div style={{display:"flex",gap:8,padding:"10px 16px 14px",background:"#fff",borderTop:`1px solid ${C.border}`,flexShrink:0}}>
        <textarea ref={inputRef} value={input} onChange={e=>setInput(e.target.value)}
          onKeyDown={e=>{if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();send();}}}
          placeholder="Answer or ask anything..."
          rows={1}
          style={{flex:1,border:`1px solid ${C.border}`,borderRadius:10,padding:"10px 14px",fontSize:16,fontFamily:"'Lora',serif",color:C.ink,background:C.cream,outline:"none",resize:"none"}}
        />
        <Btn variant="dark" onClick={send} disabled={loading||!input.trim()} style={{flexShrink:0}}>Send</Btn>
      </div>
      <style>{`@keyframes b{0%,60%,100%{transform:translateY(0)}30%{transform:translateY(-5px)}}`}</style>
    </div>
  );
}

// ════════════════════════════════════════════════
// QUIZ
// ════════════════════════════════════════════════
const MODES = [
  {id:"flashcard",label:"Flashcard",icon:"◈",desc:"See Arabic → pick the translation"},
  {id:"word",label:"Word Match",icon:"⟷",desc:"Match each Arabic word to its meaning"},
  {id:"arrange",label:"Arrange Āyāt",icon:"⇅",desc:"Drag the āyāt into the correct order"},
  {id:"recitation",label:"Recite & Listen",icon:"🎙",desc:"Record yourself, play it back, and display the full surah"},
  {id:"fill",label:"Fill the Gap",icon:"___",desc:"One word blanked — type its meaning"},
  {id:"prevnext",label:"Before & After",icon:"↔",desc:"What comes before or after this āyah?"},
  {id:"scene",label:"Which Scene?",icon:"◻",desc:"Which scene does this āyah belong to?"},
];

function Quiz({surah,onBack,onTeacher,onIraab}) {
  const [mode,setMode] = useState(null);
  const [qs,setQs] = useState([]);
  const [qi,setQi] = useState(0);
  const [score,setScore] = useState({r:0,t:0,streak:0});
  const [weak,setWeak] = useState([]);
  const [answered,setAnswered] = useState(null);
  const [selected,setSelected] = useState(null);
  const [fillVal,setFillVal] = useState("");
  const [fillDone,setFillDone] = useState(false);
  const [arrange,setArrange] = useState([]);
  const [arrangeDone,setArrangeDone] = useState(false);
  const [dragIdx,setDragIdx] = useState(null);
  const [dropIdx,setDropIdx] = useState(null);
  const [wpairs,setWpairs] = useState(null);
  const [wmatched,setWmatched] = useState([]);
  const [wpicked,setWpicked] = useState(null);
  const [wdone,setWdone] = useState(false);

  const ayahs = surah.ayahs;

  function startMode(m) {
    const q = buildQs(m,ayahs,surah);
    setMode(m);setQs(q);setQi(0);
    setScore({r:0,t:0,streak:0});setWeak([]);
    resetQ(q[0],m);
  }
  function resetQ(q,m) {
    setAnswered(null);setSelected(null);setFillVal("");setFillDone(false);
    setArrangeDone(false);setDragIdx(null);setDropIdx(null);
    setWmatched([]);setWpicked(null);setWdone(false);
    if(m==="arrange"&&q) setArrange(shuffle(q.ayahs));
    if(m==="word"&&q) setWpairs({ar:shuffle(q.words.map(w=>w.ar)),en:shuffle(q.words.map(w=>w.en))});
  }
  function record(ok,n) {
    setScore(s=>({r:s.r+(ok?1:0),t:s.t+1,streak:ok?s.streak+1:0}));
    if(!ok&&n&&!weak.includes(n)) setWeak(w=>[...w,n]);
    if(ok&&n) setWeak(w=>w.filter(x=>x!==n));
  }
  function next() {
    const n=qi+1;
    if(n>=qs.length){setQi(-1);return;}
    setQi(n);resetQ(qs[n],mode);
  }
  function pick(opt) {
    if(answered) return;
    setSelected(opt.label);
    record(opt.correct,opt.n);
    setAnswered(opt.correct?"correct":"wrong");
  }
  function pickAr(ar){if(wdone)return;setWpicked(ar);}
  function pickEn(en){
    if(!wpicked||wdone)return;
    const q=qs[qi];
    const cen=q.words.find(w=>w.ar===wpicked)?.en;
    if(en===cen){const nm=[...wmatched,wpicked];setWmatched(nm);setWpicked(null);if(nm.length===q.words.length){record(true,q.n);setWdone(true);}}
    else setWpicked(null);
  }

  const pct = score.t>0?Math.round(score.r/score.t*100):null;
  const col = qs[qi]?C.s[qi%C.s.length]:C.s[0];

  if(!mode) return (
    <div style={{minHeight:"100vh",background:C.cream,fontFamily:"'Inter',sans-serif"}}>
      <style>{FONTS}</style>
      <TopBar
        left={<><BackBtn onClick={onBack}/><span style={{fontFamily:"'Lora',serif",fontSize:18,color:C.ink}}>Quiz Mode</span><Ar size={22} style={{color:C.ink3,marginLeft:8}}>{surah.nameAr}</Ar></>}
        right={<>{onIraab&&<Btn variant="teal" onClick={onIraab} style={{fontSize:13,padding:"7px 14px"}}>📐 Iʿrāb</Btn>}{SHOW_TEACHER&&<Btn variant="dark" onClick={onTeacher} style={{fontSize:13,padding:"7px 14px"}}>🎓 Teach</Btn>}</>}
      />
      <div style={{padding:"1.5rem"}}>
        <div style={{fontSize:12,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",color:C.ink3,marginBottom:12}}>Choose a mode</div>
        <div style={{display:"flex",flexDirection:"column",gap:8}}>
          {MODES.map((m,i)=>{
            const c=C.s[i%C.s.length];
            return <button key={m.id} onClick={()=>startMode(m.id)}
              style={{background:"#fff",border:`1px solid ${c.border}`,borderRadius:14,padding:"1rem 1.25rem",cursor:"pointer",display:"flex",alignItems:"center",gap:14,textAlign:"left"}}
              onMouseEnter={e=>e.currentTarget.style.background=c.bg}
              onMouseLeave={e=>e.currentTarget.style.background="#fff"}>
              <div style={{width:42,height:42,borderRadius:10,background:c.bg,color:c.deep,display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,flexShrink:0}}>{m.icon}</div>
              <div style={{flex:1}}><div style={{fontSize:17,fontWeight:600,color:C.ink,marginBottom:2}}>{m.label}</div><div style={{fontSize:13,color:C.ink3}}>{m.desc}</div></div>
              <div style={{color:c.mid,fontSize:22}}>→</div>
            </button>;
          })}
        </div>
      </div>
    </div>
  );

  if(mode==="recitation") return <RecitationQuiz surah={surah} onBack={()=>setMode(null)} />;

  if(qi===-1) return (
    <div style={{minHeight:"100vh",background:C.cream,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"2rem",fontFamily:"'Inter',sans-serif",gap:10}}>
      <style>{FONTS}</style>
      <div style={{fontSize:58}}>✓</div>
      <div style={{fontFamily:"'Lora',serif",fontSize:26,fontWeight:500,color:C.ink}}>Session complete</div>
      <div style={{fontSize:17,color:C.ink3}}>{score.r} / {score.t} correct · {pct}%</div>
      {weak.length>0&&<div style={{fontSize:14,color:C.amberDark,background:C.amberBg,borderRadius:8,padding:"6px 14px"}}>Revisit āyāt: {weak.join(', ')}</div>}
      <div style={{display:"flex",gap:10,flexWrap:"wrap",justifyContent:"center",marginTop:8}}>
        <Btn variant="dark" onClick={()=>startMode(mode)}>Try again</Btn>
        <Btn variant="outline" onClick={()=>setMode(null)}>Other modes</Btn>
        {SHOW_TEACHER&&<Btn variant="teal" onClick={onTeacher}>🎓 Ask teacher</Btn>}
        <Btn variant="ghost" onClick={onBack}>Home</Btn>
      </div>
    </div>
  );

  const q=qs[qi];
  if(!q) return null;
  const progress=(qi/qs.length)*100;
  const modeLabel=MODES.find(m=>m.id===mode)?.label;

  return (
    <div style={{minHeight:"100vh",background:C.cream,fontFamily:"'Inter',sans-serif"}}>
      <style>{FONTS}</style>
      <div style={{background:"#fff",borderBottom:`1px solid ${C.border}`,padding:"10px 16px"}}>
        <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:8}}>
          <BackBtn onClick={()=>setMode(null)}/>
          <div style={{flex:1,fontSize:16,fontWeight:600,color:C.ink}}>{modeLabel}</div>
          <span style={{fontSize:14,color:C.ink3}}>{qi+1}/{qs.length}</span>
          {pct!==null&&<span style={{fontSize:13,fontWeight:600,padding:"3px 9px",borderRadius:20,background:pct>=75?C.tealBg:C.amberBg,color:pct>=75?C.tealDark:C.amberDark}}>{score.r} ✓</span>}
        </div>
        <div style={{height:3,background:C.border,borderRadius:2}}>
          <div style={{height:"100%",background:C.teal,width:`${progress}%`,transition:"width .3s",borderRadius:2}}/>
        </div>
      </div>

      <div className="quiz-section">
        {/* Question card */}
        <div className="quiz-question-card" style={{border:`1px solid ${col.border}`}}>
          <div style={{fontSize:12,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",color:col.mid,marginBottom:8}}>{q.label}</div>
          {(q.ar||q.en)&&<AyahPair ar={q.ar&&!q.ar.includes("<")?q.ar:undefined} en={q.en} arHtml={q.ar?.includes("<")?q.ar:undefined}/>}
          {q.ctx&&<div style={{fontSize:14,color:C.ink3,marginTop:8,paddingTop:8,borderTop:`1px dashed ${col.border}`,fontStyle:"italic"}}>{q.ctx}</div>}
        </div>

        {/* MCQ */}
        {(mode==="flashcard"||mode==="prevnext"||mode==="scene")&&(
          <div style={{display:"flex",flexDirection:"column",gap:7}}>
            {q.opts.map((opt,i)=>{
              let bg="#fff",border=`1px solid ${C.border}`,color=C.ink;
              if(answered){
                if(opt.correct){bg=C.tealBg;border="1px solid #b8ddd6";color=C.tealDark;}
                else if(opt.label===selected){bg=C.redBg;border="1px solid #e8a8a8";color=C.redDark;}
              }
              return <button key={i} onClick={()=>pick(opt)} disabled={!!answered}
                className="quiz-option-btn"
                style={{background:bg,border,color,cursor:answered?"default":"pointer"}}>
                {opt.ar?<span className="quiz-option-ar">{opt.label}</span>:opt.label}
              </button>;
            })}
          </div>
        )}

        {/* Fill gap */}
        {mode==="fill"&&<div>
          <input value={fillVal} onChange={e=>setFillVal(e.target.value)} disabled={fillDone}
            placeholder="Type the meaning of the highlighted word..."
            className="quiz-fill-input"
            style={{border:`1px solid ${fillDone?(fillVal.trim().toLowerCase()===q.ans.toLowerCase()?C.teal:C.red):C.border}`,background:fillDone?(fillVal.trim().toLowerCase()===q.ans.toLowerCase()?C.tealBg:C.redBg):"#fff"}}
          />
          {fillDone&&<div style={{padding:"9px 12px",borderRadius:8,background:fillVal.trim().toLowerCase()===q.ans.toLowerCase()?C.tealBg:C.redBg,color:fillVal.trim().toLowerCase()===q.ans.toLowerCase()?C.tealDark:C.redDark,fontSize:14,marginBottom:8}}>
            {fillVal.trim().toLowerCase()===q.ans.toLowerCase()?"✓ Correct!":`Answer: "${q.ans}"`}
          </div>}
          {!fillDone?<Btn variant="dark" onClick={()=>{setFillDone(true);record(fillVal.trim().toLowerCase()===q.ans.toLowerCase(),q.n);}} style={{width:"100%"}}>Check</Btn>
          :<Btn variant="dark" onClick={next} style={{width:"100%"}}>Next →</Btn>}
        </div>}

        {/* Word match */}
        {mode==="word"&&wpairs&&<div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:10}}>
            <div className="quiz-word-col">
              {wpairs.ar.map((ar,i)=>{
                const isM=wmatched.includes(ar),isP=wpicked===ar;
                return <button key={i} onClick={()=>pickAr(ar)} className="quiz-word-btn-ar"
                  style={{background:isM?C.tealBg:isP?C.amberBg:"#fff",border:`1px solid ${isM?"#b8ddd6":isP?"#f0c98a":C.border}`,color:isM?C.tealDark:C.ink,cursor:isM?"default":"pointer",opacity:isM?.55:1}}>
                  {ar}
                </button>;
              })}
            </div>
            <div className="quiz-word-col">
              {wpairs.en.map((en,i)=>{
                const ar=q.words.find(w=>w.en===en)?.ar,isM=wmatched.includes(ar);
                return <button key={i} onClick={()=>pickEn(en)} className="quiz-word-btn-en"
                  style={{background:isM?C.tealBg:"#fff",border:`1px solid ${isM?"#b8ddd6":C.border}`,color:isM?C.tealDark:C.ink2,cursor:isM?"default":"pointer",opacity:isM?.55:1}}>
                  {en}
                </button>;
              })}
            </div>
          </div>
          {wdone&&<div><div style={{background:C.tealBg,borderRadius:8,padding:"9px",textAlign:"center",color:C.tealDark,fontSize:14,fontWeight:600,marginBottom:8}}>All matched! ✓</div><Btn variant="dark" onClick={next} style={{width:"100%"}}>Next →</Btn></div>}
        </div>}

        {/* Arrange */}
        {mode==="arrange"&&<div>
          {!arrangeDone&&<p className="quiz-arrange-hint">Drag each āyah to reorder</p>}
          <div className="quiz-arrange-list" style={{marginBottom:12}}>
            {arrange.map((a,i)=>{
              const ok=arrangeDone&&q.ayahs[i]?.n===a.n,bad=arrangeDone&&q.ayahs[i]?.n!==a.n;
              const dragging=dragIdx===i,over=dropIdx===i&&dragIdx!==i;
              return <div
                key={a.n}
                className={`quiz-arrange-row${dragging?" quiz-arrange-row--dragging":""}${over?" quiz-arrange-row--over":""}`}
                style={{background:ok?C.tealBg:bad?C.redBg:over?C.amberBg:"#fff",border:`1px solid ${ok?"#b8ddd6":bad?"#e8a8a8":over?"#f0c98a":C.border}`}}
                onDragOver={e=>{
                  if(arrangeDone) return;
                  e.preventDefault();
                  e.dataTransfer.dropEffect="move";
                  if(dropIdx!==i) setDropIdx(i);
                }}
                onDragLeave={()=>{
                  if(dropIdx===i) setDropIdx(null);
                }}
                onDrop={e=>{
                  e.preventDefault();
                  if(arrangeDone) return;
                  const from=dragIdx??Number(e.dataTransfer.getData("text/plain"));
                  if(Number.isNaN(from)||from===i) return;
                  setArrange(moveInArray(arrange, from, i));
                  setDragIdx(null);
                  setDropIdx(null);
                }}
              >
                {!arrangeDone&&(
                  <div
                    className="quiz-arrange-handle"
                    draggable
                    aria-label={`Drag āyah ${a.n}`}
                    title="Drag to reorder"
                    onDragStart={e=>{
                      setDragIdx(i);
                      e.dataTransfer.effectAllowed="move";
                      e.dataTransfer.setData("text/plain", String(i));
                      const row=e.currentTarget.closest(".quiz-arrange-row");
                      if(row) e.dataTransfer.setDragImage(row, 24, 20);
                    }}
                    onDragEnd={()=>{ setDragIdx(null); setDropIdx(null); }}
                  >⋮⋮</div>
                )}
                <AyahPair ar={a.ar} en={a.en}/>
                {arrangeDone&&<div style={{fontSize:17,flexShrink:0,paddingTop:4}}>{ok?"✓":"✗"}</div>}
              </div>;
            })}
          </div>
          {!arrangeDone?<Btn variant="dark" onClick={()=>{setArrangeDone(true);record(arrange.every((a,i)=>a.n===q.ayahs[i].n),null);}} style={{width:"100%"}}>Check order</Btn>
          :<><div style={{fontSize:13,color:C.ink3,textAlign:"center",marginBottom:8}}>Correct: {q.ayahs.map(a=>a.n).join(" → ")}</div><Btn variant="dark" onClick={next} style={{width:"100%"}}>Next →</Btn></>}
        </div>}

        {/* Feedback for MCQ */}
        {answered&&(mode==="flashcard"||mode==="prevnext"||mode==="scene")&&<div style={{marginTop:10}}>
          <div style={{background:answered==="correct"?C.tealBg:C.redBg,borderRadius:10,padding:"10px 14px",marginBottom:10,display:"flex",gap:10,alignItems:"flex-start"}}>
            <span style={{fontSize:19,flexShrink:0}}>{answered==="correct"?"✓":"✗"}</span>
            <div>
              <div style={{fontSize:14,fontWeight:600,color:answered==="correct"?C.tealDark:C.redDark,marginBottom:3}}>{answered==="correct"?"Correct!":"Not quite —"}</div>
              <div style={{fontSize:14,color:answered==="correct"?C.tealDark:C.redDark,fontFamily:"'Lora',serif",fontStyle:"italic",lineHeight:1.55}}>{q.exp}</div>
            </div>
          </div>
          <Btn variant="dark" onClick={next} style={{width:"100%"}}>Next →</Btn>
        </div>}
      </div>
    </div>
  );
}

function RecitationQuiz({surah,onBack}) {
  const [isRecording,setIsRecording] = useState(false);
  const [elapsed,setElapsed] = useState(0);
  const [attempts,setAttempts] = useState([]);
  const [activeAttemptId,setActiveAttemptId] = useState(null);
  const [error,setError] = useState("");
  const [showSurah,setShowSurah] = useState(false);
  const recorderRef = useRef(null);
  const streamRef = useRef(null);
  const chunksRef = useRef([]);
  const startedAtRef = useRef(null);
  const timerRef = useRef(null);
  const attemptsRef = useRef([]);

  useEffect(()=>{ attemptsRef.current = attempts; },[attempts]);

  useEffect(()=>()=> {
    clearInterval(timerRef.current);
    const recorder = recorderRef.current;
    if(recorder&&recorder.state==="recording") {
      recorder.ondataavailable = null;
      recorder.onstop = null;
      recorder.stop();
    }
    stopStream();
    attemptsRef.current.forEach(a=>URL.revokeObjectURL(a.url));
  },[]);

  function stopStream() {
    streamRef.current?.getTracks().forEach(track=>track.stop());
    streamRef.current = null;
  }

  async function startRecording() {
    setError("");
    if(!navigator.mediaDevices?.getUserMedia||typeof MediaRecorder==="undefined") {
      setError("Recording is not supported in this browser. Try Chrome, Edge, or Safari 14.1+.");
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({audio:true});
      const mimeType = [
        "audio/webm;codecs=opus",
        "audio/webm",
        "audio/mp4",
      ].find(type=>MediaRecorder.isTypeSupported(type));
      const recorder = new MediaRecorder(stream, mimeType?{mimeType}:undefined);
      streamRef.current = stream;
      recorderRef.current = recorder;
      chunksRef.current = [];

      recorder.ondataavailable = event => {
        if(event.data?.size) chunksRef.current.push(event.data);
      };
      recorder.onstop = () => {
        clearInterval(timerRef.current);
        const seconds = startedAtRef.current ? Math.max(1, Math.round((Date.now()-startedAtRef.current)/1000)) : elapsed;
        const blob = new Blob(chunksRef.current, {type:recorder.mimeType||"audio/webm"});
        if(blob.size) {
          const url = URL.createObjectURL(blob);
          const attempt = {
            id:Date.now(),
            url,
            createdAt:new Date().toLocaleTimeString([], {hour:"2-digit",minute:"2-digit"}),
            duration:formatDuration(seconds),
          };
          setAttempts(prev=>[attempt,...prev]);
          setActiveAttemptId(attempt.id);
        }
        chunksRef.current = [];
        startedAtRef.current = null;
        setElapsed(seconds);
        setIsRecording(false);
        stopStream();
      };

      recorder.start();
      startedAtRef.current = Date.now();
      setElapsed(0);
      setIsRecording(true);
      timerRef.current = setInterval(()=>{
        if(startedAtRef.current) setElapsed(Math.floor((Date.now()-startedAtRef.current)/1000));
      },250);
    } catch {
      setError("I could not access your microphone. Please allow microphone permission and try again.");
      stopStream();
      setIsRecording(false);
    }
  }

  function stopRecording() {
    const recorder = recorderRef.current;
    if(recorder&&recorder.state==="recording") recorder.stop();
  }

  function deleteAttempt(id) {
    const attempt = attempts.find(a=>a.id===id);
    if(attempt) URL.revokeObjectURL(attempt.url);
    const next = attempts.filter(a=>a.id!==id);
    setAttempts(next);
    if(activeAttemptId===id) setActiveAttemptId(next[0]?.id??null);
  }

  const activeAttempt = attempts.find(a=>a.id===activeAttemptId)||attempts[0];

  return (
    <div style={{minHeight:"100vh",background:C.cream,fontFamily:"'Inter',sans-serif"}}>
      <style>{FONTS}</style>
      <TopBar
        left={<><BackBtn onClick={onBack}/><span style={{fontFamily:"'Lora',serif",fontSize:18,color:C.ink}}>Recite & Listen</span><Ar size={22} style={{color:C.ink3,marginLeft:8}}>{surah.nameAr}</Ar></>}
        right={<Btn variant="teal" onClick={()=>setShowSurah(v=>!v)} style={{fontSize:13,padding:"7px 14px"}}>{showSurah?"Hide Surah":"Display Surah"}</Btn>}
      />

      <div style={{padding:"1.25rem 1.5rem",maxWidth:780,margin:"0 auto"}}>
        <div style={{position:"sticky",top:0,zIndex:2,background:C.cream,paddingBottom:12}}>
          <div style={{background:"#fff",border:`1px solid ${C.border}`,borderRadius:16,padding:"1rem",boxShadow:"0 8px 24px -18px rgba(26,24,20,.35)"}}>
            <div style={{display:"flex",alignItems:"flex-start",gap:14,marginBottom:12}}>
              <div style={{width:46,height:46,borderRadius:14,background:isRecording?C.redBg:C.tealBg,color:isRecording?C.redDark:C.tealDark,display:"flex",alignItems:"center",justifyContent:"center",fontSize:24,flexShrink:0}}>🎙</div>
              <div style={{flex:1}}>
                <div style={{fontSize:12,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",color:C.ink3,marginBottom:4}}>Self-recitation quiz</div>
                <div style={{fontFamily:"'Lora',serif",fontSize:20,fontWeight:500,color:C.ink}}>Recite {surah.name}, then listen back</div>
                <div style={{fontSize:14,color:C.ink3,marginTop:4}}>Use Display Surah while the recording plays to check your recitation against the text.</div>
              </div>
              <div style={{fontSize:18,fontWeight:700,color:isRecording?C.redDark:C.ink3,minWidth:54,textAlign:"right"}}>{formatDuration(elapsed)}</div>
            </div>

            <div style={{display:"grid",gridTemplateColumns:isRecording?"1fr":"1fr 1fr",gap:8,marginBottom:attempts.length?12:0}}>
              {isRecording
                ? <Btn variant="dark" onClick={stopRecording} style={{width:"100%",background:C.redDark}}>Stop Recording</Btn>
                : <Btn variant="dark" onClick={startRecording} style={{width:"100%"}}>Start Recording</Btn>}
              {!isRecording&&<Btn variant="outline" onClick={()=>setShowSurah(v=>!v)} style={{width:"100%"}}>{showSurah?"Hide Surah":"Display Surah"}</Btn>}
            </div>

            {error&&<div style={{background:C.redBg,color:C.redDark,border:"1px solid #e8a8a8",borderRadius:10,padding:"9px 12px",fontSize:14,marginTop:12}}>{error}</div>}

            {activeAttempt&&(
              <div style={{borderTop:`1px solid ${C.border}`,paddingTop:12}}>
                <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:10,marginBottom:8}}>
                  <div style={{fontSize:13,color:C.ink3}}>Listening to attempt from {activeAttempt.createdAt} · {activeAttempt.duration}</div>
                  <button onClick={()=>deleteAttempt(activeAttempt.id)} style={{background:"transparent",border:"none",color:C.redDark,fontSize:13,cursor:"pointer",padding:4}}>Delete</button>
                </div>
                <audio controls src={activeAttempt.url} style={{width:"100%"}} />
              </div>
            )}
          </div>
        </div>

        {attempts.length>1&&(
          <div style={{display:"flex",gap:8,overflowX:"auto",paddingBottom:12,marginBottom:4}}>
            {attempts.map((attempt,index)=>(
              <button key={attempt.id} onClick={()=>setActiveAttemptId(attempt.id)}
                style={{flexShrink:0,background:activeAttempt?.id===attempt.id?C.tealBg:"#fff",border:`1px solid ${activeAttempt?.id===attempt.id?"#b8ddd6":C.border}`,color:activeAttempt?.id===attempt.id?C.tealDark:C.ink2,borderRadius:20,padding:"6px 12px",fontSize:13,cursor:"pointer"}}>
                Attempt {attempts.length-index} · {attempt.duration}
              </button>
            ))}
          </div>
        )}

        {showSurah&&(
          <div style={{background:"#fff",border:`1px solid ${C.border}`,borderRadius:16,overflow:"hidden"}}>
            <div style={{background:C.tealBg,borderBottom:"1px solid #b8ddd6",padding:"12px 16px",display:"flex",alignItems:"center",justifyContent:"space-between",gap:12}}>
              <div>
                <div style={{fontFamily:"'Scheherazade New',serif",fontSize:32,color:C.tealDark,direction:"rtl",lineHeight:1.2}}>{surah.nameAr}</div>
                <div style={{fontFamily:"'Lora',serif",fontSize:14,color:C.teal,fontStyle:"italic"}}>{surah.name} · {surah.ayahCount} āyāt</div>
              </div>
              <div style={{fontSize:12,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",color:C.tealDark}}>Display Surah</div>
            </div>
            <div style={{padding:"14px 16px"}}>
              {surah.scenes.map((scene,si)=>{
                const col = C.s[si%C.s.length];
                const ayahs = surah.ayahs.filter(a=>a.scene===si);
                return <section key={scene.title} style={{marginBottom:si===surah.scenes.length-1?0:18}}>
                  <div style={{display:"inline-flex",alignItems:"center",gap:6,background:col.bg,color:col.deep,border:`1px solid ${col.border}`,borderRadius:20,padding:"3px 10px",fontSize:11,fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase",marginBottom:8}}>Scene {si+1} · āyāt {scene.range}</div>
                  <div style={{fontFamily:"'Lora',serif",fontSize:17,fontWeight:500,color:C.ink,marginBottom:8}}>{scene.title}</div>
                  <div style={{display:"flex",flexDirection:"column",gap:8}}>
                    {ayahs.map(a=>(
                      <div key={a.n} style={{border:`1px solid ${col.border}`,borderRadius:12,padding:"9px 12px",background:C.cream}}>
                        <div style={{fontFamily:"'Scheherazade New',serif",fontSize:31,color:col.deep,direction:"rtl",lineHeight:1.9,textAlign:"right"}}>
                          {a.ar} <span style={{fontSize:17,color:col.mid,border:`1px solid ${col.border}`,borderRadius:"50%",padding:"0 8px",marginRight:6}}>{a.n}</span>
                        </div>
                        <div style={{fontSize:14,color:C.ink3,fontFamily:"'Lora',serif",lineHeight:1.55}}>{a.en}</div>
                      </div>
                    ))}
                  </div>
                </section>;
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function buildQs(mode,ayahs,surah) {
  const wrong=(correct,field,n=3)=>shuffle(ayahs.filter(a=>a[field]!==correct)).slice(0,n).map(a=>a[field]);

  if(mode==="flashcard") return shuffle(ayahs).slice(0,12).map(a=>({
    label:`Āyah ${a.n} · what does this mean?`, ar:a.ar, n:a.n,
    opts:shuffle([{label:a.en,correct:true,n:a.n},...wrong(a.en,"en").map(e=>({label:e,correct:false,n:a.n}))]),
    exp:`Āyah ${a.n}: "${a.en}"`
  }));

  if(mode==="word") return shuffle(ayahs.filter(a=>a.words?.length>1)).slice(0,8).map(a=>({
    label:`Match the words in āyah ${a.n}`, ar:a.ar, n:a.n, words:a.words
  }));

  if(mode==="arrange") return surah.scenes.map((sc,si)=>({
    label:`Scene ${si+1}: "${sc.title}" — arrange in order`, n:null,
    ayahs:ayahs.filter(a=>a.scene===si).map(a=>({n:a.n,ar:a.ar,en:a.en}))
  }));

  if(mode==="fill") return shuffle(ayahs.filter(a=>a.words?.length>0)).slice(0,10).map(a=>{
    const w=rand(a.words);
    const blank=`<span style="background:#fef3e8;border:1.5px solid #f0c98a;border-radius:5px;padding:0 14px;color:#e8d8c0;font-size:18px;">＿＿</span>`;
    return {label:`What does the highlighted word mean? (āyah ${a.n})`, ar:a.ar.replace(w.ar,blank), n:a.n, ans:w.en, ctx:`The highlighted Arabic word is: ${w.ar}`};
  });

  if(mode==="prevnext") return shuffle(ayahs.filter(a=>a.n>1&&a.n<ayahs[ayahs.length-1].n)).slice(0,10).map(a=>{
    const askNext=Math.random()>.5;
    const target=askNext?ayahs.find(x=>x.n===a.n+1):ayahs.find(x=>x.n===a.n-1);
    if(!target) return null;
    const wrongs=shuffle(ayahs.filter(x=>x.n!==target.n)).slice(0,3).map(x=>({label:x.en,correct:false,n:a.n}));
    return {label:askNext?`What comes AFTER āyah ${a.n}?`:`What comes BEFORE āyah ${a.n}?`,
      ar:a.ar,en:a.en,n:a.n,
      opts:shuffle([{label:target.en,correct:true,n:a.n},...wrongs]),
      exp:`Āyah ${target.n}: "${target.en}"`};
  }).filter(Boolean);

  if(mode==="scene") return shuffle(ayahs).slice(0,10).map(a=>{
    const cs=surah.scenes[a.scene];
    const ws=shuffle(surah.scenes.filter((_,i)=>i!==a.scene)).slice(0,3).map(s=>({label:s.title,correct:false,n:a.n}));
    return {label:`Which scene does āyah ${a.n} belong to?`,ar:a.ar,en:a.en,n:a.n,
      opts:shuffle([{label:cs.title,correct:true,n:a.n},...ws]),
      exp:`Scene ${a.scene+1}: "${cs.title}" (āyāt ${cs.range})`};
  });

  return [];
}

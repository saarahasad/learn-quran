/**
 * Per-āyah iʿrāb diagrams: a card above each word, relation arrows beneath.
 * Source for at-Tīn: إعراب الدعاس via surahquran.com (first iʿrāb on each āyah page).
 *
 * unit: { id, word, role, det, sign?, wide?, ghost?, tag? }  — ghost = word from an earlier āyah or implied (مقدّر)
 * link: { t: relation type, from: [unit ids], to: unit id, label, d: arc depth in px }
 */
export const IRAAB_RELATION_TYPES = {
  jar:{ar:"الجرّ", en:"jarr"},
  atf:{ar:"العطف", en:"conjunction"},
  taaluq:{ar:"التعلّق", en:"attachment"},
  idafa:{ar:"الإضافة", en:"iḍāfa"},
  tabi:{ar:"التوابع (صفة · بدل)", en:"followers"},
  amal:{ar:"العمل (فاعل · مفعول · اسم وخبر)", en:"governance"},
  isnad:{ar:"الإسناد (مبتدأ ↔ خبر)", en:"predication"},
  sila:{ar:"الصلة", en:"relative clause"}
};

const TIN = [
{ n:1, text:"وَٱلتِّينِ وَٱلزَّيْتُونِ", tr:"By the fig and the olive",
  units:[
    {id:"fil",ghost:true,word:"أُقْسِمُ",tag:"implied",role:"فعل القسم المحذوف",det:"مُقدَّر",sign:"يتعلّق به الجارّ والمجرور"},
    {id:"w1",word:"وَ",role:"الواو",det:"حرف جرّ للقسم"},
    {id:"tin",word:"ٱلتِّينِ",role:"التين",det:"اسم مُقسَم به مجرور",sign:"علامة جرّه: الكسرة"},
    {id:"w2",word:"وَ",role:"الواو",det:"حرف عطف"},
    {id:"zay",word:"ٱلزَّيْتُونِ",role:"الزيتون",det:"معطوفة بالواو على «التين» مجرورة",sign:"الكسرة الظاهرة على آخرها"}],
  links:[
    {t:"jar",from:["w1"],to:"tin",label:"تجُرّ",d:44},
    {t:"atf",from:["zay"],to:"tin",label:"معطوف على",d:80},
    {t:"taaluq",from:["w1","tin"],to:"fil",label:"متعلّقان بـ",d:122}],
  jumla:"<b>جملة القسم</b> ابتدائية لا محلّ لها من الإعراب."},

{ n:2, text:"وَطُورِ سِينِينَ", tr:"And by Mount Sinai",
  units:[
    {id:"tin",ghost:true,word:"ٱلتِّينِ",tag:"āyah 1",role:"المعطوف عليه",det:"من الآية ١"},
    {id:"w",word:"وَ",role:"الواو",det:"حرف عطف"},
    {id:"tur",word:"طُورِ",role:"طور",det:"معطوفة بالواو على «التين» مجرورة",sign:"الكسرة الظاهرة على آخرها"},
    {id:"sin",word:"سِينِينَ",wide:true,role:"سينين",det:"مضاف إليه مجرور بالفتحة بدلًا من الكسرة",sign:"ممنوع من الصرف · اسم مكان"}],
  links:[
    {t:"idafa",from:["sin"],to:"tur",label:"مضاف إليه",d:44},
    {t:"atf",from:["tur"],to:"tin",label:"معطوف على",d:86}],
  jumla:"ويجوز إعراب <b>«سينين»</b> بالحروف كـ«سنين وسنون»، أي مجرور بالياء، لأنه ملحق بجمع المذكر السالم."},

{ n:3, text:"وَهَٰذَا ٱلْبَلَدِ ٱلْأَمِينِ", tr:"And by this secure city",
  units:[
    {id:"tin",ghost:true,word:"ٱلتِّينِ",tag:"āyah 1",role:"المعطوف عليه",det:"من الآية ١"},
    {id:"w",word:"وَ",role:"الواو",det:"حرف عطف"},
    {id:"hadha",word:"هَٰذَا",role:"هذا",det:"اسم إشارة مبني على السكون",sign:"في محلّ جرّ معطوف على «التين»"},
    {id:"balad",word:"ٱلْبَلَدِ",role:"البلد",det:"بدل من «هذا» مجرور",sign:"علامة جرّه: الكسرة"},
    {id:"amin",word:"ٱلْأَمِينِ",role:"الأمين",det:"صفة لـ«البلد» مجرورة",sign:"الكسرة الظاهرة"}],
  links:[
    {t:"tabi",from:["amin"],to:"balad",label:"صفة",d:40},
    {t:"tabi",from:["balad"],to:"hadha",label:"بدل",d:40},
    {t:"atf",from:["hadha"],to:"tin",label:"معطوف على",d:96}],
  jumla:"الآيات ١–٣ كلّها <b>مُقسَم به</b>؛ وجواب القسم في الآية ٤."},

{ n:4, text:"لَقَدْ خَلَقْنَا ٱلْإِنسَٰنَ فِىٓ أَحْسَنِ تَقْوِيمٍۢ", tr:"We have certainly created man in the finest form",
  units:[
    {id:"lam",word:"لَ",role:"اللام",det:"واقعة في جواب القسم"},
    {id:"qad",word:"قَدْ",role:"قد",det:"حرف تحقيق"},
    {id:"khal",word:"خَلَقْنَا",wide:true,role:"خلقنا",det:"فعل ماضٍ مبني على السكون لاتصاله بـ«نا»",sign:"«نا»: ضمير في محلّ رفع فاعل"},
    {id:"ins",word:"ٱلْإِنسَٰنَ",wide:true,role:"الإنسان",det:"مفعول به منصوب",sign:"الفتحة الظاهرة"},
    {id:"fi",word:"فِىٓ",role:"في",det:"حرف جرّ"},
    {id:"ahs",word:"أَحْسَنِ",role:"أحسن",det:"اسم مجرور بـ«في»",sign:"علامة جرّه: الكسرة"},
    {id:"taq",word:"تَقْوِيمٍۢ",role:"تقويم",det:"مضاف إليه مجرور",sign:"الكسرة الظاهرة"}],
  links:[
    {t:"amal",from:["ins"],to:"khal",label:"مفعول به",d:44},
    {t:"jar",from:["fi"],to:"ahs",label:"تجُرّ",d:40},
    {t:"idafa",from:["taq"],to:"ahs",label:"مضاف إليه",d:40},
    {t:"taaluq",from:["fi","ahs"],to:"khal",label:"متعلّقان بـ",d:112}],
  jumla:"<b>جملة «خلقنا»</b> جواب القسم لا محلّ لها من الإعراب."},

{ n:5, text:"ثُمَّ رَدَدْنَٰهُ أَسْفَلَ سَٰفِلِينَ", tr:"Then We reduced him to the lowest of the low",
  units:[
    {id:"khal",ghost:true,word:"خَلَقْنَا",tag:"āyah 4",role:"المعطوف عليه",det:"جملة من الآية ٤"},
    {id:"thum",word:"ثُمَّ",role:"ثمّ",det:"حرف عطف"},
    {id:"rad",word:"رَدَدْنَٰهُ",wide:true,role:"رددناه",det:"فعل ماضٍ مبني على السكون · «نا» فاعل",sign:"الهاء: ضمير في محلّ نصب مفعول به"},
    {id:"asf",word:"أَسْفَلَ",role:"أسفل",det:"ظرف مكان منصوب",sign:"الفتحة الظاهرة"},
    {id:"saf",word:"سَٰفِلِينَ",wide:true,role:"سافلين",det:"مضاف إليه مجرور بالياء",sign:"جمع مذكر سالم"}],
  links:[
    {t:"idafa",from:["saf"],to:"asf",label:"مضاف إليه",d:40},
    {t:"taaluq",from:["asf"],to:"rad",label:"ظرف متعلّق بـ",d:40},
    {t:"atf",from:["rad"],to:"khal",label:"جملة معطوفة على",d:100}],
  jumla:"<b>جملة «رددناه»</b> معطوفة على جملة «خلقنا» لا محلّ لها مثلها."},

{ n:6, text:"إِلَّا ٱلَّذِينَ ءَامَنُوا وَعَمِلُوا ٱلصَّٰلِحَٰتِ فَلَهُمْ أَجْرٌ غَيْرُ مَمْنُونٍۢ", tr:"Except those who believe and do righteous deeds; theirs is a reward never cut off",
  units:[
    {id:"illa",word:"إِلَّا",role:"إلّا",det:"أداة استثناء"},
    {id:"alladh",word:"ٱلَّذِينَ",role:"الذين",det:"اسم موصول مبني",sign:"في محلّ نصب مستثنى"},
    {id:"amanu",word:"ءَامَنُوا",role:"آمنوا",det:"فعل ماضٍ · الواو فاعل",sign:"صلة الموصول لا محلّ لها"},
    {id:"amilu",word:"وَعَمِلُوا",wide:true,role:"وعملوا",det:"الواو عاطفة · عملوا: فعل ماضٍ والواو فاعل",sign:"معطوفة على «آمنوا»"},
    {id:"salih",word:"ٱلصَّٰلِحَٰتِ",wide:true,role:"الصالحات",det:"مفعول به منصوب بالكسرة",sign:"جمع مؤنث سالم"},
    {id:"lahum",word:"فَلَهُمْ",wide:true,role:"فلهم",det:"الفاء استئنافية · لهم: جارّ ومجرور",sign:"في محلّ رفع خبر مقدّم"},
    {id:"ajr",word:"أَجْرٌ",role:"أجر",det:"مبتدأ مؤخّر مرفوع",sign:"الضمّة الظاهرة"},
    {id:"ghayr",word:"غَيْرُ",role:"غير",det:"صفة لـ«أجر» مرفوعة",sign:"الضمّة الظاهرة"},
    {id:"mamn",word:"مَمْنُونٍۢ",wide:true,role:"ممنون",det:"مضاف إليه مجرور",sign:"الكسرة الظاهرة"}],
  links:[
    {t:"sila",from:["amanu"],to:"alladh",label:"صلة",d:40},
    {t:"atf",from:["amilu"],to:"amanu",label:"معطوف على",d:72},
    {t:"amal",from:["salih"],to:"amilu",label:"مفعول به",d:40},
    {t:"isnad",from:["ajr"],to:"lahum",label:"خبره المقدّم",d:72},
    {t:"tabi",from:["ghayr"],to:"ajr",label:"صفة",d:40},
    {t:"idafa",from:["mamn"],to:"ghayr",label:"مضاف إليه",d:40}],
  jumla:"<b>جملة «لهم أجر غير ممنون»</b> استئنافية لا محلّ لها من الإعراب."},

{ n:7, text:"فَمَا يُكَذِّبُكَ بَعْدُ بِٱلدِّينِ", tr:"So what makes you deny the Judgement after this?",
  units:[
    {id:"fa",word:"فَ",role:"الفاء",det:"حرف استئناف"},
    {id:"ma",word:"مَا",role:"ما",det:"اسم استفهام مبني على السكون",sign:"في محلّ رفع مبتدأ"},
    {id:"yuk",word:"يُكَذِّبُكَ",wide:true,role:"يكذّبك",det:"مضارع مرفوع · الفاعل مستتر تقديره «هو»",sign:"الكاف: في محلّ نصب مفعول به"},
    {id:"bad",word:"بَعْدُ",role:"بعدُ",det:"ظرف زمان مبني على الضمّ في محلّ نصب",sign:"لانقطاعه عن الإضافة"},
    {id:"bi",word:"بِٱلدِّينِ",wide:true,role:"بالدين",det:"جارّ ومجرور",sign:"متعلّقان بـ«يكذّبك»"}],
  links:[
    {t:"isnad",from:["yuk"],to:"ma",label:"خبر",d:44},
    {t:"taaluq",from:["bad"],to:"yuk",label:"ظرف متعلّق بـ",d:44},
    {t:"taaluq",from:["bi"],to:"yuk",label:"متعلّقان بـ",d:92}],
  jumla:"<b>الجملة</b> استئنافية لا محلّ لها من الإعراب."},

{ n:8, text:"أَلَيْسَ ٱللَّهُ بِأَحْكَمِ ٱلْحَٰكِمِينَ", tr:"Is not Allah the most just of judges?",
  units:[
    {id:"hamz",word:"أَ",role:"الهمزة",det:"حرف استفهام"},
    {id:"lays",word:"لَيْسَ",role:"ليس",det:"فعل ماضٍ ناقص مبني على الفتح"},
    {id:"allah",word:"ٱللَّهُ",role:"لفظ الجلالة",det:"اسم «ليس» مرفوع",sign:"الضمّة الظاهرة"},
    {id:"bi",word:"بِ",role:"الباء",det:"حرف جرّ زائد للتوكيد"},
    {id:"ahk",word:"أَحْكَمِ",role:"أحكم",det:"خبر «ليس» مجرور لفظًا",sign:"منصوب محلًّا"},
    {id:"hak",word:"ٱلْحَٰكِمِينَ",wide:true,role:"الحاكمين",det:"مضاف إليه مجرور بالياء",sign:"جمع مذكر سالم"}],
  links:[
    {t:"amal",from:["allah"],to:"lays",label:"اسمها",d:44},
    {t:"jar",from:["bi"],to:"ahk",label:"تجُرّ لفظًا",d:40},
    {t:"idafa",from:["hak"],to:"ahk",label:"مضاف إليه",d:40},
    {t:"amal",from:["ahk"],to:"lays",label:"خبرها",d:96}],
  jumla:"<b>الجملة</b> استئنافية لا محلّ لها من الإعراب."}
];

/** Keyed by sūrah number (revelationOrder in this app), then āyah number. */
export const IRAAB_DIAGRAMS = {
  95: { source: "إعراب الدعاس · surahquran.com", ayat: TIN },
};

export function getIraabDiagram(surahNumber, ayahNumber) {
  return IRAAB_DIAGRAMS[surahNumber]?.ayat.find((a) => a.n === ayahNumber) ?? null;
}

export function getIraabDiagramSource(surahNumber) {
  return IRAAB_DIAGRAMS[surahNumber]?.source ?? null;
}

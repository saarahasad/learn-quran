/**
 * Mabnī travelers for Kingdom of Iʿrāb —
 * curated role boards + an example for every noun road-sign (works or not).
 */

const NOUN_RAFA = [
  "fail",
  "naib",
  "mubtada",
  "khabar",
  "ism-kana",
  "khabar-inna",
  "tabi-marfu",
];
const NOUN_NASB = [
  "mafool",
  "masdar",
  "zarf-zaman",
  "zarf-makan",
  "hal",
  "tamyiz",
  "mustathna",
  "ism-la",
  "munada",
  "mafool-ajl",
  "mafool-maah",
  "khabar-kana",
  "ism-inna",
  "tabi-mansub",
];
const NOUN_KHAFD = ["majroor", "mudaf", "tabi-makhfud"];

/** Fill every noun role id with ok/ar/en (missing → not ok). */
function fillRoleChecks(partial) {
  const all = [...NOUN_RAFA, ...NOUN_NASB, ...NOUN_KHAFD];
  const out = {};
  for (const id of all) {
    const hit = partial[id];
    if (hit?.ok) {
      out[id] = {
        ok: true,
        ar: hit.ar || "",
        en: hit.en || "",
        note: hit.note || "",
      };
    } else {
      out[id] = {
        ok: false,
        ar: hit?.ar || "",
        en: hit?.en || "",
        note:
          hit?.note ||
          "This role does not fit this mabnī type in ordinary school nahw.",
      };
    }
  }
  return out;
}

function routesFromChecks(roleChecks, { noMahall = false } = {}) {
  if (noMahall) return [];
  const byCastle = {
    rafa: NOUN_RAFA,
    nasb: NOUN_NASB,
    khafd: NOUN_KHAFD,
  };
  const routes = [];
  for (const [castle, ids] of Object.entries(byCastle)) {
    const roles = ids.filter((id) => roleChecks[id]?.ok);
    if (!roles.length) continue;
    routes.push({
      castle,
      cause: "في محل — role boards",
      sign: "Maḥallī",
      badge: "محل",
      seal: "mahall",
      appearance: "mahalli",
      roles,
    });
  }
  return routes;
}

function mabniTraveler({
  id,
  ar,
  en,
  tip,
  bina,
  noMahall = false,
  noMahallNote = "",
  checks,
}) {
  const roleChecks = fillRoleChecks(checks);
  return {
    id,
    ar,
    en,
    kind: "noun",
    road: "mabni",
    appearance: noMahall ? "la-mahall" : "mahalli",
    bina: bina || "",
    tip,
    noMahall: Boolean(noMahall),
    noMahallNote,
    roleChecks,
    routes: routesFromChecks(roleChecks, { noMahall }),
  };
}

/** أسماء الإشارة سوى المثنى */
const ISHARA_CHECKS = {
  fail: { ok: true, ar: "جَاءَ هَذَا", en: "This one came." },
  naib: { ok: true, ar: "ضُرِبَ هَذَا", en: "This one was struck." },
  mubtada: { ok: true, ar: "هَذَا كِتَابٌ", en: "This is a book." },
  khabar: { ok: true, ar: "الْكِتَابُ هَذَا", en: "The book is this one." },
  "ism-kana": { ok: true, ar: "كَانَ هَذَا مُجْتَهِدًا", en: "This one was diligent." },
  "khabar-inna": {
    ok: true,
    ar: "إِنَّ الْحَقَّ هَذَا",
    en: "Indeed the truth is this.",
  },
  "tabi-marfu": {
    ok: true,
    ar: "جَاءَ زَيْدٌ هَذَا",
    en: "Zayd came — this one (badal).",
  },
  mafool: { ok: true, ar: "رَأَيْتُ هَذَا", en: "I saw this one." },
  masdar: {
    ok: false,
    note: "Mafʿūl muṭlaq wants a maṣdar, not a demonstrative.",
  },
  "zarf-zaman": {
    ok: false,
    note: "Demonstrative alone is not a time ẓarf.",
  },
  "zarf-makan": {
    ok: false,
    note: "Use مجرور (فِي هَذَا) for place, not ẓarf role on هذا itself.",
  },
  hal: {
    ok: false,
    note: "Ḥāl is usually an indefinite derived noun, not اسم إشارة.",
  },
  tamyiz: { ok: false, note: "Tamyīz clarifies measure/number — not إشارة." },
  mustathna: {
    ok: true,
    ar: "حَضَرَ الْقَوْمُ إِلَّا هَذَا",
    en: "The people came except this one.",
  },
  "ism-la": {
    ok: false,
    note: "اسم لا النافية للجنس is typically a nakira noun, not إشارة.",
  },
  munada: {
    ok: true,
    ar: "يَا هَذَا",
    en: "O you (this one)!",
    note: "Vocative of اسم إشارة is used in speech.",
  },
  "mafool-ajl": {
    ok: false,
    note: "Object of purpose is a reason-maṣdar, not إشارة.",
  },
  "mafool-maah": {
    ok: false,
    note: "Mafʿūl maʿahu needs accompaniment sense — rare/odd for هذا alone.",
  },
  "khabar-kana": {
    ok: true,
    ar: "كَانَ الْكِتَابُ هَذَا",
    en: "The book was this one.",
  },
  "ism-inna": { ok: true, ar: "إِنَّ هَذَا حَقٌّ", en: "Indeed this is true." },
  "tabi-mansub": {
    ok: true,
    ar: "رَأَيْتُ زَيْدًا هَذَا",
    en: "I saw Zayd — this one (badal).",
  },
  majroor: { ok: true, ar: "مَرَرْتُ بِهَذَا", en: "I passed by this one." },
  mudaf: {
    ok: false,
    note: "اسم إشارة is not normally مضاف إليه; the following noun is often بدل/نعت.",
  },
  "tabi-makhfud": {
    ok: true,
    ar: "مَرَرْتُ بِزَيْدٍ هَذَا",
    en: "I passed by Zayd — this one.",
  },
};

/** الضمائر */
const DAMAAIR_CHECKS = {
  fail: { ok: true, ar: "قُمْتُ", en: "I stood. (تاء = فاعل في محل رفع)" },
  naib: {
    ok: true,
    ar: "ضُرِبْتُ",
    en: "I was struck. (تاء = نائب فاعل في محل رفع)",
  },
  mubtada: { ok: true, ar: "أَنَا مُجْتَهِدٌ", en: "I am diligent." },
  khabar: {
    ok: true,
    ar: "الْمُجْتَهِدُ أَنْتَ",
    en: "The diligent one is you.",
  },
  "ism-kana": { ok: true, ar: "كُنْتُ مُجْتَهِدًا", en: "I was diligent." },
  "khabar-inna": {
    ok: true,
    ar: "إِنَّ الْحَقَّ هُوَ",
    en: "Indeed the truth is it/he.",
  },
  "tabi-marfu": {
    ok: true,
    ar: "جَاءَ زَيْدٌ هُوَ",
    en: "Zayd came — he (tawkīd).",
  },
  mafool: { ok: true, ar: "ضَرَبَنِي", en: "He struck me. (ي = مفعول في محل نصب)" },
  masdar: { ok: false, note: "Pronoun is not a maṣdar." },
  "zarf-zaman": { ok: false, note: "Pronoun is not a time ẓarf." },
  "zarf-makan": { ok: false, note: "Pronoun is not a place ẓarf." },
  hal: { ok: false, note: "Ḥāl is not a pronoun." },
  tamyiz: { ok: false, note: "Tamyīz is not a pronoun." },
  mustathna: {
    ok: true,
    ar: "حَضَرَ الْقَوْمُ إِلَّا أَنَا",
    en: "The people came except me.",
  },
  "ism-la": { ok: false, note: "اسم لا is not a pronoun." },
  munada: {
    ok: false,
    note: "Vocative targets a noun; pronouns aren’t منادى in the usual sense.",
  },
  "mafool-ajl": { ok: false, note: "Not a purpose maṣdar." },
  "mafool-maah": { ok: false, note: "Not used as mafʿūl maʿahu." },
  "khabar-kana": {
    ok: true,
    ar: "كَانَ الصَّدِيقُ أَنْتَ",
    en: "The friend was you.",
  },
  "ism-inna": { ok: true, ar: "إِنَّهُ مُجْتَهِدٌ", en: "Indeed he is diligent." },
  "tabi-mansub": {
    ok: true,
    ar: "رَأَيْتُ زَيْدًا إِيَّاهُ",
    en: "I saw Zayd — him (tawkīd).",
  },
  majroor: {
    ok: true,
    ar: "مَرَرْتُ بِكَ",
    en: "I passed by you. (ك في محل جر)",
  },
  mudaf: {
    ok: true,
    ar: "كِتَابُكَ",
    en: "Your book. (ك = مضاف إليه في محل جر)",
  },
  "tabi-makhfud": {
    ok: true,
    ar: "مَرَرْتُ بِزَيْدٍ هُوَ",
    en: "I passed by Zayd — he (tawkīd).",
  },
};

/** الأسماء الموصولة سوى المثنى */
const MAWSUL_CHECKS = {
  fail: { ok: true, ar: "جَاءَ الَّذِي نَجَحَ", en: "The one who succeeded came." },
  naib: {
    ok: true,
    ar: "ضُرِبَ الَّذِي ظَلَمَ",
    en: "The one who wronged was struck.",
  },
  mubtada: {
    ok: true,
    ar: "الَّذِي نَجَحَ مَحْمُودٌ",
    en: "The one who succeeded is praised.",
  },
  khabar: {
    ok: true,
    ar: "مَحْمُودٌ الَّذِي نَجَحَ",
    en: "Praised is the one who succeeded.",
  },
  "ism-kana": {
    ok: true,
    ar: "كَانَ الَّذِي نَجَحَ فَرِحًا",
    en: "The one who succeeded was glad.",
  },
  "khabar-inna": {
    ok: true,
    ar: "إِنَّ الْفَائِزَ الَّذِي اجْتَهَدَ",
    en: "Indeed the winner is the one who strove.",
  },
  "tabi-marfu": {
    ok: true,
    ar: "جَاءَ زَيْدٌ الَّذِي نَجَحَ",
    en: "Zayd who succeeded came (naʿt).",
  },
  mafool: {
    ok: true,
    ar: "رَأَيْتُ الَّذِي نَجَحَ",
    en: "I saw the one who succeeded.",
  },
  masdar: { ok: false, note: "Mawṣūl is not a maṣdar." },
  "zarf-zaman": { ok: false, note: "Not a time ẓarf by itself." },
  "zarf-makan": { ok: false, note: "Not a place ẓarf by itself." },
  hal: { ok: false, note: "Ḥāl is not typically a mawṣūl." },
  tamyiz: { ok: false, note: "Not tamyīz." },
  mustathna: {
    ok: true,
    ar: "حَضَرَ الْقَوْمُ إِلَّا الَّذِي غَابَ",
    en: "The people came except the one who was absent.",
  },
  "ism-la": { ok: false, note: "Not اسم لا." },
  munada: {
    ok: true,
    ar: "يَا أَيُّهَا الَّذِي اجْتَهَدَ",
    en: "O you who strove!",
    note: "Often with أيها; mawṣūl can be in the vocative structure.",
  },
  "mafool-ajl": { ok: false, note: "Not purpose maṣdar." },
  "mafool-maah": { ok: false, note: "Not mafʿūl maʿahu." },
  "khabar-kana": {
    ok: true,
    ar: "كَانَ الْفَائِزُ الَّذِي اجْتَهَدَ",
    en: "The winner was the one who strove.",
  },
  "ism-inna": {
    ok: true,
    ar: "إِنَّ الَّذِي نَجَحَ مَحْمُودٌ",
    en: "Indeed the one who succeeded is praised.",
  },
  "tabi-mansub": {
    ok: true,
    ar: "رَأَيْتُ زَيْدًا الَّذِي نَجَحَ",
    en: "I saw Zayd who succeeded.",
  },
  majroor: {
    ok: true,
    ar: "مَرَرْتُ بِالَّذِي نَجَحَ",
    en: "I passed by the one who succeeded.",
  },
  mudaf: {
    ok: false,
    note: "Mawṣūl is not normally مضاف إليه.",
  },
  "tabi-makhfud": {
    ok: true,
    ar: "مَرَرْتُ بِزَيْدٍ الَّذِي نَجَحَ",
    en: "I passed by Zayd who succeeded.",
  },
};

/** أسماء الاستفهام عدا أيّ */
const ISTIFHAM_CHECKS = {
  fail: { ok: true, ar: "مَنْ جَاءَ؟", en: "Who came?" },
  naib: { ok: true, ar: "مَنْ ضُرِبَ؟", en: "Who was struck?" },
  mubtada: { ok: true, ar: "مَنْ هَذَا؟", en: "Who is this?" },
  khabar: {
    ok: true,
    ar: "مَا هَذَا؟",
    en: "What is this?",
    note: "ما often خبر or مبتدأ depending on analysis.",
  },
  "ism-kana": { ok: true, ar: "مَنْ كَانَ حَاضِرًا؟", en: "Who was present?" },
  "khabar-inna": {
    ok: false,
    note: "Interrogative rarely fills خبر إنّ in beginner drills.",
  },
  "tabi-marfu": {
    ok: false,
    note: "Interrogative is usually the head, not a follower.",
  },
  mafool: { ok: true, ar: "مَنْ رَأَيْتَ؟", en: "Whom did you see?" },
  masdar: { ok: false, note: "Not a maṣdar." },
  "zarf-zaman": {
    ok: true,
    ar: "مَتَى قَدِمْتَ؟",
    en: "When did you arrive?",
    note: "متى في محل نصب ظرف زمان.",
  },
  "zarf-makan": {
    ok: true,
    ar: "أَيْنَ جَلَسْتَ؟",
    en: "Where did you sit?",
    note: "أين في محل نصب ظرف مكان.",
  },
  hal: {
    ok: true,
    ar: "كَيْفَ جِئْتَ؟",
    en: "How did you come?",
    note: "كيف often في محل نصب حال.",
  },
  tamyiz: { ok: false, note: "Not tamyīz." },
  mustathna: { ok: false, note: "Not typical as mustathnā." },
  "ism-la": { ok: false, note: "Not اسم لا." },
  munada: { ok: false, note: "Not منادى." },
  "mafool-ajl": {
    ok: true,
    ar: "لِمَ خَرَجْتَ؟",
    en: "Why did you go out?",
    note: "Some analyses: reason interrogative in naṣb place.",
  },
  "mafool-maah": { ok: false, note: "Not mafʿūl maʿahu." },
  "khabar-kana": { ok: false, note: "Uncommon as خبر كان." },
  "ism-inna": { ok: false, note: "Uncommon as اسم إنّ." },
  "tabi-mansub": { ok: false, note: "Not typically a follower." },
  majroor: { ok: true, ar: "عَمَّ تَسْأَلُ؟", en: "About what do you ask?" },
  mudaf: {
    ok: false,
    note: "أيّ (excluded here) can be muʿrab in iḍāfah; مَنْ/مَا usually not مضاف إليه.",
  },
  "tabi-makhfud": { ok: false, note: "Not typically a follower." },
};

/** أسماء الشرط عدا أيّ */
const SHART_CHECKS = {
  fail: {
    ok: true,
    ar: "مَنْ يَجْتَهِدْ يَنْجَحْ",
    en: "Whoever strives succeeds.",
    note: "مَنْ شرطية في محل رفع فاعل.",
  },
  naib: {
    ok: true,
    ar: "مَنْ يُكْرَمْ أُكْرِمْهُ",
    en: "Whoever is honored — I honor him.",
  },
  mubtada: {
    ok: true,
    ar: "مَنْ يَجْتَهِدْ فَهُوَ نَاجِحٌ",
    en: "Whoever strives is successful.",
  },
  khabar: { ok: false, note: "Condition noun is rarely the khabar itself." },
  "ism-kana": { ok: false, note: "Uncommon in beginner drills." },
  "khabar-inna": { ok: false, note: "Uncommon." },
  "tabi-marfu": { ok: false, note: "Not a follower." },
  mafool: {
    ok: true,
    ar: "مَا تَفْعَلْ أَفْعَلْ",
    en: "Whatever you do, I do.",
    note: "مَا في محل نصب مفعول به.",
  },
  masdar: { ok: false, note: "Not a maṣdar." },
  "zarf-zaman": {
    ok: true,
    ar: "مَتَى تَأْتِ أُكْرِمْكَ",
    en: "Whenever you come, I honor you.",
  },
  "zarf-makan": {
    ok: true,
    ar: "أَيْنَ تَجْلِسْ أَجْلِسْ",
    en: "Wherever you sit, I sit.",
  },
  hal: { ok: false, note: "كيف الشرطية is debated; skip for map clarity." },
  tamyiz: { ok: false, note: "Not tamyīz." },
  mustathna: { ok: false, note: "Not mustathnā." },
  "ism-la": { ok: false, note: "Not اسم لا." },
  munada: { ok: false, note: "Not منادى." },
  "mafool-ajl": { ok: false, note: "Not purpose object." },
  "mafool-maah": { ok: false, note: "Not mafʿūl maʿahu." },
  "khabar-kana": { ok: false, note: "Uncommon." },
  "ism-inna": { ok: false, note: "Uncommon." },
  "tabi-mansub": { ok: false, note: "Not a follower." },
  majroor: {
    ok: true,
    ar: "بِمَنْ تَمُرَّ أَمُرَّ",
    en: "By whomever you pass, I pass.",
  },
  mudaf: { ok: false, note: "أيّ excluded; مَنْ/مَا not normally مضاف إليه." },
  "tabi-makhfud": { ok: false, note: "Not a follower." },
};

/** العلم المختوم بـ(ويه) */
const WAYH_CHECKS = {
  fail: { ok: true, ar: "جَاءَ سِيبَوَيْهِ", en: "Sībawayh came." },
  naib: { ok: true, ar: "ذُكِرَ سِيبَوَيْهِ", en: "Sībawayh was mentioned." },
  mubtada: {
    ok: true,
    ar: "سِيبَوَيْهِ إِمَامُ النَّحْوِ",
    en: "Sībawayh is the imām of grammar.",
  },
  khabar: {
    ok: true,
    ar: "إِمَامُ النَّحْوِ سِيبَوَيْهِ",
    en: "The imām of grammar is Sībawayh.",
  },
  "ism-kana": {
    ok: true,
    ar: "كَانَ سِيبَوَيْهِ عَالِمًا",
    en: "Sībawayh was a scholar.",
  },
  "khabar-inna": {
    ok: true,
    ar: "إِنَّ الْإِمَامَ سِيبَوَيْهِ",
    en: "Indeed the imām is Sībawayh.",
  },
  "tabi-marfu": {
    ok: true,
    ar: "جَاءَ الْعَالِمُ سِيبَوَيْهِ",
    en: "The scholar Sībawayh came (badal/ʿaṭf bayān).",
  },
  mafool: { ok: true, ar: "رَأَيْتُ سِيبَوَيْهِ", en: "I saw Sībawayh." },
  masdar: { ok: false, note: "Proper name is not a maṣdar." },
  "zarf-zaman": { ok: false, note: "Not a ẓarf." },
  "zarf-makan": { ok: false, note: "Not a ẓarf." },
  hal: { ok: false, note: "Not ḥāl." },
  tamyiz: { ok: false, note: "Not tamyīz." },
  mustathna: {
    ok: true,
    ar: "حَضَرَ الْعُلَمَاءُ إِلَّا سِيبَوَيْهِ",
    en: "The scholars came except Sībawayh.",
  },
  "ism-la": { ok: false, note: "Not اسم لا." },
  munada: { ok: true, ar: "يَا سِيبَوَيْهِ", en: "O Sībawayh!" },
  "mafool-ajl": { ok: false, note: "Not purpose maṣdar." },
  "mafool-maah": { ok: false, note: "Not mafʿūl maʿahu." },
  "khabar-kana": {
    ok: true,
    ar: "كَانَ الْإِمَامُ سِيبَوَيْهِ",
    en: "The imām was Sībawayh.",
  },
  "ism-inna": {
    ok: true,
    ar: "إِنَّ سِيبَوَيْهِ إِمَامٌ",
    en: "Indeed Sībawayh is an imām.",
  },
  "tabi-mansub": {
    ok: true,
    ar: "رَأَيْتُ الْعَالِمَ سِيبَوَيْهِ",
    en: "I saw the scholar Sībawayh.",
  },
  majroor: {
    ok: true,
    ar: "قَرَأْتُ عَنْ سِيبَوَيْهِ",
    en: "I read about Sībawayh.",
  },
  mudaf: {
    ok: true,
    ar: "كِتَابُ سِيبَوَيْهِ",
    en: "Sībawayh’s book.",
    note: "Proper name as مضاف إليه — still mabnī في محل جر.",
  },
  "tabi-makhfud": {
    ok: true,
    ar: "مَرَرْتُ بِالْعَالِمِ سِيبَوَيْهِ",
    en: "I passed by the scholar Sībawayh.",
  },
};

/** الأعداد المركبة عدا اثني عشر */
const ADAD_CHECKS = {
  fail: { ok: true, ar: "جَاءَ أَحَدَ عَشَرَ رَجُلًا", en: "Eleven men came." },
  naib: {
    ok: true,
    ar: "ضُرِبَ أَحَدَ عَشَرَ رَجُلًا",
    en: "Eleven men were struck.",
  },
  mubtada: {
    ok: true,
    ar: "أَحَدَ عَشَرَ رَجُلًا حَاضِرُونَ",
    en: "Eleven men are present.",
  },
  khabar: {
    ok: true,
    ar: "الْحَاضِرُونَ أَحَدَ عَشَرَ",
    en: "Those present are eleven.",
  },
  "ism-kana": {
    ok: true,
    ar: "كَانُوا أَحَدَ عَشَرَ رَجُلًا",
    en: "They were eleven men.",
    note: "Number phrase in the structure — treat compound as في محل.",
  },
  "khabar-inna": {
    ok: true,
    ar: "إِنَّ الْحَاضِرِينَ أَحَدَ عَشَرَ",
    en: "Indeed those present are eleven.",
  },
  "tabi-marfu": {
    ok: false,
    note: "Compound number rarely used as follower in drills.",
  },
  mafool: {
    ok: true,
    ar: "رَأَيْتُ أَحَدَ عَشَرَ رَجُلًا",
    en: "I saw eleven men.",
  },
  masdar: { ok: false, note: "Not a maṣdar." },
  "zarf-zaman": { ok: false, note: "Not itself a ẓarf." },
  "zarf-makan": { ok: false, note: "Not itself a ẓarf." },
  hal: { ok: false, note: "Not ḥāl." },
  tamyiz: {
    ok: false,
    note: "The tamyīz is رَجُلًا after the number — not the number itself.",
  },
  mustathna: {
    ok: true,
    ar: "حَضَرَ الْقَوْمُ إِلَّا أَحَدَ عَشَرَ",
    en: "The people came except eleven.",
  },
  "ism-la": { ok: false, note: "Not اسم لا." },
  munada: { ok: false, note: "Odd as منادى." },
  "mafool-ajl": { ok: false, note: "Not purpose." },
  "mafool-maah": { ok: false, note: "Not accompaniment." },
  "khabar-kana": {
    ok: true,
    ar: "كَانَ الْعَدَدُ أَحَدَ عَشَرَ",
    en: "The number was eleven.",
  },
  "ism-inna": {
    ok: true,
    ar: "إِنَّ أَحَدَ عَشَرَ رَجُلًا حَاضِرُونَ",
    en: "Indeed eleven men are present.",
  },
  "tabi-mansub": { ok: false, note: "Rare as follower." },
  majroor: {
    ok: true,
    ar: "مَرَرْتُ بِأَحَدَ عَشَرَ رَجُلًا",
    en: "I passed by eleven men.",
  },
  mudaf: {
    ok: false,
    note: "Compound number is usually not مضاف إليه here.",
  },
  "tabi-makhfud": { ok: false, note: "Rare as follower." },
};

/** الظروف المركبة — mostly نصب ظرفًا */
const ZARF_MURAKKAB_CHECKS = {
  fail: { ok: false, note: "Compound ẓarf is not fāʿil." },
  naib: { ok: false, note: "Not nāʾib." },
  mubtada: { ok: false, note: "Not mubtadaʾ." },
  khabar: { ok: false, note: "Not khabar." },
  "ism-kana": { ok: false, note: "Not ism kāna." },
  "khabar-inna": { ok: false, note: "Not khabar inna." },
  "tabi-marfu": { ok: false, note: "Not a rafʿ follower." },
  mafool: { ok: false, note: "Not mafʿūl bihi." },
  masdar: { ok: false, note: "Not maṣdar." },
  "zarf-zaman": {
    ok: true,
    ar: "أَزُورُكَ صَبَاحَ مَسَاءَ",
    en: "I visit you morning and evening.",
    note: "مبني على فتح الجزءين في محل نصب ظرف زمان.",
  },
  "zarf-makan": {
    ok: true,
    ar: "جَلَسَ بَيْنَ بَيْنَ",
    en: "He sat in between.",
    note: "Some compound place ẓarfs — في محل نصب.",
  },
  hal: { ok: false, note: "Not ḥāl." },
  tamyiz: { ok: false, note: "Not tamyīz." },
  mustathna: { ok: false, note: "Not mustathnā." },
  "ism-la": { ok: false, note: "Not اسم لا." },
  munada: { ok: false, note: "Not منادى." },
  "mafool-ajl": { ok: false, note: "Not purpose." },
  "mafool-maah": { ok: false, note: "Not accompaniment." },
  "khabar-kana": { ok: false, note: "Not khabar kāna." },
  "ism-inna": { ok: false, note: "Not ism inna." },
  "tabi-mansub": { ok: false, note: "Not a follower." },
  majroor: { ok: false, note: "These compounds are usually naṣb ẓarf, not majrūr." },
  mudaf: { ok: false, note: "Not مضاف إليه." },
  "tabi-makhfud": { ok: false, note: "Not a follower." },
};

/** أسماء الأفعال — لا محل له */
const ASMA_AFAL_CHECKS = {};

/** إذا — often لا محل له */
const IDHA_CHECKS = {};

export const IRAAB_MABNI_TRAVELERS = [
  mabniTraveler({
    id: "damaair",
    ar: "الضَّمَائِرُ",
    en: "Pronouns",
    bina: "مبني على حسب الضمير (ضم / فتح / كسر / سكون)",
    tip: "Ending fixed by bināʾ; case is في محل … when the pronoun holds a role.",
    checks: DAMAAIR_CHECKS,
  }),
  mabniTraveler({
    id: "ishara",
    ar: "أَسْمَاءُ الْإِشَارَةِ سِوَى الْمُثَنَّى",
    en: "Demonstratives (except dual)",
    bina: "هذا على السكون · هذه/هؤلاء على الكسر · ذلك على الفتح…",
    tip: "Dual هذان/هاتان are muʿrab. The rest: same word-shape in every castle — باب المحل only.",
    checks: ISHARA_CHECKS,
  }),
  mabniTraveler({
    id: "mawsul",
    ar: "الْأَسْمَاءُ الْمَوْصُولَةُ سِوَى الْمُثَنَّى",
    en: "Relative nouns (except dual)",
    bina: "الذي / التي / الذين… مبنية",
    tip: "Needs a ṣilah. Dual اللذان/اللتان are muʿrab.",
    checks: MAWSUL_CHECKS,
  }),
  mabniTraveler({
    id: "istifham",
    ar: "أَسْمَاءُ الِاسْتِفْهَامِ عَدَا «أَيّ»",
    en: "Interrogatives (except ayy)",
    bina: "مَنْ · مَا · مَتَى · أَيْنَ · كَيْفَ…",
    tip: "أيّ is muʿrab. Others are mabnī; role depends on the word (فاعل / ظرف / حال…).",
    checks: ISTIFHAM_CHECKS,
  }),
  mabniTraveler({
    id: "shart",
    ar: "أَسْمَاءُ الشَّرْطِ عَدَا «أَيّ»",
    en: "Condition nouns (except ayy)",
    bina: "مَنْ · مَا · مَتَى · أَيْنَ…",
    tip: "Same shapes as istifhām family, but conditional. أيّ excluded (muʿrab).",
    checks: SHART_CHECKS,
  }),
  mabniTraveler({
    id: "alam-wayh",
    ar: "الْعَلَمُ الْمَخْتُومُ بِـ(وَيْهِ)",
    en: "Proper noun ending in -wayh",
    bina: "سِيبَوَيْهِ مبني على الكسر",
    tip: "Still takes ordinary noun roles — always في محل, ending never shifts.",
    checks: WAYH_CHECKS,
  }),
  mabniTraveler({
    id: "adad-murakkab",
    ar: "الْأَعْدَادُ الْمُرَكَّبَةُ عَدَا «اثْنَيْ عَشَرَ»",
    en: "Compound numbers (except twelve)",
    bina: "أَحَدَ عَشَرَ مبني على فتح الجزءين",
    tip: "اثنا عشر / اثنتا عشرة follow dual iʿrāb. Other 11–19 compounds are mabnī.",
    checks: ADAD_CHECKS,
  }),
  mabniTraveler({
    id: "zarf-murakkab",
    ar: "الظُّرُوفُ الْمُرَكَّبَةُ",
    en: "Compound adverbs",
    bina: "صَبَاحَ مَسَاءَ مبني على فتح الجزءين",
    tip: "Usually only the ẓarf boards — في محل نصب ظرفًا.",
    checks: ZARF_MURAKKAB_CHECKS,
  }),
  mabniTraveler({
    id: "asma-afal",
    ar: "أَسْمَاءُ الْأَفْعَالِ",
    en: "Verbal nouns (ism al-fiʿl)",
    bina: "صَهْ · مَهْ · آمِينَ…",
    tip: "Mabnī and normally لا محل له من الإعراب — no castle road.",
    noMahall: true,
    noMahallNote:
      "نحو: صَهْ — اسم فعل أمر مبني، لا محل له من الإعراب. No رفعة/نصبة/خفضة door.",
    checks: ASMA_AFAL_CHECKS,
  }),
  mabniTraveler({
    id: "zarf-idha",
    ar: "بَعْضُ الظُّرُوفِ الْمُفْرَدَةِ نَحْوُ «إِذَا»",
    en: "Some singular ẓarfs e.g. idhā",
    bina: "إِذَا مبني على السكون",
    tip: "School analysis often: ظرف مبني لا محل له من الإعراب.",
    noMahall: true,
    noMahallNote:
      "إِذَا حَضَرَ الْأُسْتَاذُ صَمَتَ التِّلْمِيذُ — إذا ظرف مبني، لا محل له من الإعراب (common school line).",
    checks: IDHA_CHECKS,
  }),
];

export const IRAAB_MABNI_TRAVELER_IDS = IRAAB_MABNI_TRAVELERS.map((t) => t.id);

export const MAHALL_DOOR = {
  id: "mahall",
  kind: "mahall",
  name: "Maḥallī",
  badge: "محل",
  plaque: "محلي",
  blurb:
    "إعراب محلي — the ending is fixed (بناء). Case-place is assigned: في محل رفع / نصب / جر. Same castle, different door from ʿalāmāt.",
  worn: IRAAB_MABNI_TRAVELERS.filter((t) => !t.noMahall).map((t) => ({
    ar: t.ar,
    en: t.en,
    travelerId: t.id,
    note: "في محل …",
  })),
};

/** Role audit for a mabnī traveler at one castle (every noun board). */
export function mabniRoleAudit(traveler, castleId) {
  if (!traveler?.roleChecks) return [];
  const ids =
    castleId === "rafa"
      ? NOUN_RAFA
      : castleId === "nasb"
        ? NOUN_NASB
        : castleId === "khafd"
          ? NOUN_KHAFD
          : [];
  return ids.map((id) => ({
    roleId: id,
    ...(traveler.roleChecks[id] || { ok: false, note: "" }),
  }));
}

export function getMabniRoleCheck(traveler, roleId) {
  if (!traveler?.roleChecks) return null;
  return traveler.roleChecks[roleId] || null;
}

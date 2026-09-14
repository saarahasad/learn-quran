import { useState } from "react";

const MARFUAT_ANWA_HTML = `
<p class="dcm-lead">
  A change of gear: every chapter so far has asked "what <em>sign</em> marks rafʿ?" This chapter asks a different question — "which <em>grammatical roles</em> get rafʿ in the first place?" The author names seven, and this is effectively the table of contents for everything the book covers about marfūʿ words from here on.
</p>

<!-- ============ OVERVIEW ============ -->
<div class="dcm-chart">
  <div class="dcm-chart-root-row">
    <div class="dcm-chart-root">
      <span class="dcm-ar">اَلْمَرْفُوعَاتُ</span>
      <span class="dcm-en">seven roles that take rafʿ</span>
    </div>
  </div>
  <div class="dcm-chart-stem"></div>
  <div class="dcm-chart-hline-wrap"><div class="dcm-chart-hline"></div></div>
  <div class="dcm-chart-row">
    <div class="dcm-chart-branch">
      <div class="dcm-chart-branch-stem"></div>
      <div class="dcm-chart-node dcm-c1"><span class="dcm-ar">الْفَاعِل</span><span class="dcm-en">subject</span></div>
    </div>
    <div class="dcm-chart-branch">
      <div class="dcm-chart-branch-stem"></div>
      <div class="dcm-chart-node dcm-c1"><span class="dcm-ar">نَائِبُ الْفَاعِل</span><span class="dcm-en">deputised subject</span></div>
    </div>
    <div class="dcm-chart-branch">
      <div class="dcm-chart-branch-stem"></div>
      <div class="dcm-chart-node dcm-c2"><span class="dcm-ar">الْمُبْتَدَأ</span><span class="dcm-en">topic</span></div>
    </div>
    <div class="dcm-chart-branch">
      <div class="dcm-chart-branch-stem"></div>
      <div class="dcm-chart-node dcm-c2"><span class="dcm-ar">الْخَبَر</span><span class="dcm-en">predicate</span></div>
    </div>
    <div class="dcm-chart-branch">
      <div class="dcm-chart-branch-stem"></div>
      <div class="dcm-chart-node dcm-c3"><span class="dcm-ar">اسْمُ كَانَ</span><span class="dcm-en">noun of kāna</span></div>
    </div>
    <div class="dcm-chart-branch">
      <div class="dcm-chart-branch-stem"></div>
      <div class="dcm-chart-node dcm-c3"><span class="dcm-ar">خَبَرُ إِنَّ</span><span class="dcm-en">predicate of inna</span></div>
    </div>
    <div class="dcm-chart-branch dcm-chart-branch--wide">
      <div class="dcm-chart-branch-stem"></div>
      <div class="dcm-chart-node dcm-c4">
        <span class="dcm-ar">تَابِعُ الْمَرْفُوع</span>
        <span class="dcm-en">follower of a marfūʿ word</span>
      </div>
      <div class="dcm-chart-subrow">
        <div class="dcm-chart-subnode dcm-c4"><span class="dcm-ar">نَعْت</span></div>
        <div class="dcm-chart-subnode dcm-c4"><span class="dcm-ar">عَطْف</span></div>
        <div class="dcm-chart-subnode dcm-c4"><span class="dcm-ar">تَوْكِيد</span></div>
        <div class="dcm-chart-subnode dcm-c4"><span class="dcm-ar">بَدَل</span></div>
      </div>
    </div>
  </div>
</div>

<p class="dcm-callout">
  Why this order? The subject comes first because it's the root of the marfūʿ category for most grammarians, and its governor is an explicit word. The deputised subject follows immediately because it steps into the subject's place. The topic-and-predicate pair comes next because together they're both "abrogated" and "abrogating" constructions, which ranks above a role that's only one or the other. كَانَ's noun and إِنَّ's predicate come last among the primary six because their governor itself abrogates the sentence's original structure.
</p>

<!-- ============ 1. FA'IL ============ -->
<h2 class="dcm-h2"><span class="dcm-num">1</span>The subject <span class="dcm-ar">الْفَاعِل</span></h2>
<div class="dcm-sentence dcm-c1">
  <span class="dcm-ar">حَضَرَ <span class="dcm-hl">عَلِيٌّ</span></span>
  <span class="dcm-gloss">"ʿAlī was present."</span>
</div>
<div class="dcm-sentence dcm-c1">
  <span class="dcm-ar">سَافَرَ <span class="dcm-hl">مُحَمَّدٌ</span></span>
  <span class="dcm-gloss">"Muḥammad travelled."</span>
</div>

<!-- ============ 2. NA'IB FA'IL ============ -->
<h2 class="dcm-h2"><span class="dcm-num">2</span>The deputised subject <span class="dcm-ar">نَائِبُ الْفَاعِل</span></h2>
<p>
  Called by the author <span class="dcm-ar">الْمَفْعُولُ الَّذِي لَمْ يُسَمَّ فَاعِلُهُ</span> — "the object whose subject was not named." This is the passive-voice subject: when the original doer of the action is left unstated, the object steps up and takes rafʿ in its place.
</p>
<div class="dcm-sentence dcm-c1">
  <span class="dcm-ar">قُطِعَ <span class="dcm-hl">الْغُصْنُ</span></span>
  <span class="dcm-gloss">"The branch was cut."</span>
</div>
<div class="dcm-sentence dcm-c1">
  <span class="dcm-ar">سُرِقَ <span class="dcm-hl">الْمَتَاعُ</span></span>
  <span class="dcm-gloss">"The property was stolen."</span>
</div>

<!-- ============ 3-4. MUBTADA/KHABAR ============ -->
<h2 class="dcm-h2"><span class="dcm-num">3–4</span>The topic and its predicate <span class="dcm-ar">الْمُبْتَدَأُ وَالْخَبَرُ</span></h2>
<div class="dcm-sentence dcm-c2">
  <span class="dcm-ar"><span class="dcm-hl">مُحَمَّدٌ</span> <span class="dcm-hl">مُسَافِرٌ</span></span>
  <span class="dcm-gloss">"Muḥammad (topic) is a traveller (predicate)."</span>
</div>
<div class="dcm-sentence dcm-c2">
  <span class="dcm-ar"><span class="dcm-hl">عَلِيٌّ</span> <span class="dcm-hl">مُجْتَهِدٌ</span></span>
  <span class="dcm-gloss">"ʿAlī (topic) is hardworking (predicate)."</span>
</div>

<!-- ============ 5. ISM KANA ============ -->
<h2 class="dcm-h2"><span class="dcm-num">5</span>The noun of kāna and its sisters <span class="dcm-ar">اسْمُ كَانَ وَأَخَوَاتِهَا</span></h2>
<div class="dcm-sentence dcm-c3">
  <span class="dcm-ar">كَانَ <span class="dcm-hl">إِبْرَاهِيمُ</span> مُجْتَهِدًا</span>
  <span class="dcm-gloss">"Ibrāhīm was hardworking."</span>
</div>
<div class="dcm-sentence dcm-c3">
  <span class="dcm-ar">أَصْبَحَ <span class="dcm-hl">الْبَرْدُ</span> شَدِيدًا</span>
  <span class="dcm-gloss">"The cold became severe."</span>
</div>

<!-- ============ 6. KHABAR INNA ============ -->
<h2 class="dcm-h2"><span class="dcm-num">6</span>The predicate of inna and its sisters <span class="dcm-ar">خَبَرُ إِنَّ وَأَخَوَاتِهَا</span></h2>
<div class="dcm-sentence dcm-c3">
  <span class="dcm-ar">إِنَّ مُحَمَّدًا <span class="dcm-hl">فَاضِلٌ</span></span>
  <span class="dcm-gloss">"Indeed Muḥammad is virtuous."</span>
</div>
<div class="dcm-sentence dcm-c3">
  <span class="dcm-ar">إِنَّ اللَّهَ عَلَى كُلِّ شَيْءٍ <span class="dcm-hl">قَدِيرٌ</span></span>
  <span class="dcm-gloss">"Indeed Allah is powerful over all things."</span>
</div>

<!-- ============ 7. TABI' ============ -->
<h2 class="dcm-h2"><span class="dcm-num">7</span>The follower of a marfūʿ word <span class="dcm-ar">تَابِعُ الْمَرْفُوعِ</span></h2>
<p>
  Four types — a "follower" doesn't earn rafʿ on its own account; it simply agrees in case with a marfūʿ word it's attached to.
</p>

<h3 class="dcm-h3">i — النَّعْت (adjective)</h3>
<div class="dcm-sentence dcm-c4">
  <span class="dcm-ar">زَارَنِي مُحَمَّدٌ <span class="dcm-hl">الْفَاضِلُ</span></span>
  <span class="dcm-gloss">"I was visited by the virtuous Muḥammad."</span>
</div>
<div class="dcm-sentence dcm-c4">
  <span class="dcm-ar">قَابَلَنِي رَجُلٌ <span class="dcm-hl">كَرِيمٌ</span></span>
  <span class="dcm-gloss">"I was met by a noble man."</span>
</div>

<h3 class="dcm-h3">ii — الْعَطْف (conjunction — two kinds)</h3>
<div class="dcm-sentence dcm-c4">
  <span class="dcm-tag dcm-tag--green">عطف بيان — explanatory</span>
  <span class="dcm-ar">سَافَرَ أَبُو حَفْصٍ <span class="dcm-hl">عُمَرُ</span></span>
  <span class="dcm-gloss">"Abū Ḥafṣ, ʿUmar, travelled." (ʿUmar clarifies who Abū Ḥafṣ is)</span>
</div>
<div class="dcm-sentence dcm-c4">
  <span class="dcm-tag dcm-tag--green">عطف نسق — sequential</span>
  <span class="dcm-ar">تَشَارَكَ مُحَمَّدٌ وَ<span class="dcm-hl">خَالِدٌ</span></span>
  <span class="dcm-gloss">"Muḥammad and Khālid are partners."</span>
</div>

<h3 class="dcm-h3">iii — التَّوْكِيد (emphasis)</h3>
<div class="dcm-sentence dcm-c4">
  <span class="dcm-ar">زَارَنِي الْأَمِيرُ <span class="dcm-hl">نَفْسُهُ</span></span>
  <span class="dcm-gloss">"I was visited by the leader himself."</span>
</div>

<h3 class="dcm-h3">iv — الْبَدَل (substitute)</h3>
<div class="dcm-sentence dcm-c4">
  <span class="dcm-ar">حَضَرَ أَخُوكَ <span class="dcm-hl">عَلِيٌّ</span></span>
  <span class="dcm-gloss">"Your brother, ʿAlī, was present."</span>
</div>

<h2 class="dcm-h2"><span class="dcm-num">8</span>When several followers stack up <span class="dcm-ar">تَرْتِيبُ التَّوَابِعِ</span></h2>
<p>
  If a sentence uses more than one of these four types together, they always appear in one fixed order: <span class="dcm-ar">نَعْت</span>, then <span class="dcm-ar">عَطْفُ بَيَان</span>, then <span class="dcm-ar">تَوْكِيد</span>, then <span class="dcm-ar">بَدَل</span>, then <span class="dcm-ar">عَطْفُ نَسَق</span>. The commentary demonstrates this with a single sentence carrying all five in sequence:
</p>

<p class="dcm-caption dcm-caption--rtl-hint" dir="ltr">
  Read the Arabic right → left (verb first on the right).
</p>
<div class="dcm-labeled-sentence" dir="rtl">
  <div class="dcm-lword">
    <span class="dcm-ar">جَاءَ</span>
    <span class="dcm-ltag dcm-ltag--muted">فعل</span>
  </div>
  <div class="dcm-lword">
    <span class="dcm-ar">الرَّجُلُ</span>
    <span class="dcm-ltag dcm-ltag--blue">فاعل</span>
  </div>
  <div class="dcm-lword">
    <span class="dcm-ar">الْكَرِيمُ</span>
    <span class="dcm-ltag dcm-ltag--green">نعت · ١</span>
  </div>
  <div class="dcm-lword">
    <span class="dcm-ar">عَلِيٌّ</span>
    <span class="dcm-ltag dcm-ltag--green">عطف بيان · ٢</span>
  </div>
  <div class="dcm-lword">
    <span class="dcm-ar">نَفْسُهُ</span>
    <span class="dcm-ltag dcm-ltag--green">توكيد · ٣</span>
  </div>
  <div class="dcm-lword">
    <span class="dcm-ar">صَدِيقُكَ</span>
    <span class="dcm-ltag dcm-ltag--green">بدل · ٤</span>
  </div>
  <div class="dcm-lword">
    <span class="dcm-ar">وَأَخُوهُ</span>
    <span class="dcm-ltag dcm-ltag--green">عطف نسق · ٥</span>
  </div>
</div>
<p class="dcm-caption">
  "The noble man himself, ʿAlī, your friend, and his brother came."
</p>
`;

const EXERCISES = [
  {
    id: "mubtada",
    num: 1,
    ar: "إِبْرَاهِيمُ مُخْلِصٌ",
    en: "Ibrāhīm is sincere.",
    patternKey: "mubtada",
    patternAr: "مُبْتَدَأ + خَبَر",
    patternEn: "topic + predicate",
    patternHint:
      "No verb and no particle at the front — just a noun starting the sentence. That is the default nominal pattern: both words take rafʿ.",
    caseMap: [
      { ar: "إِبْرَاهِيمُ", caseLabel: "رفع", tone: "raf" },
      { ar: "مُخْلِصٌ", caseLabel: "رفع", tone: "raf" },
    ],
    words: [
      {
        ar: "إِبْرَاهِيمُ",
        en: "Ibrāhīm",
        roleAr: "مُبْتَدَأ",
        roleEn: "nominal subject (topic)",
        governorAr: "الِابْتِدَاء",
        governorEn: "commencement — an implicit governor, not a spoken word",
        caseAr: "مَرْفُوع",
        caseEn: "marfūʿ",
        signAr: "الضَّمَّةُ الظَّاهِرَة",
        signEn: "explicit ḍammah",
        why: "This is marfūʿ #3 from the seven. Nothing before it governs it, so the mere fact of starting the sentence (الابتداء) raises it.",
        marfuRole: "الْمُبْتَدَأ",
      },
      {
        ar: "مُخْلِصٌ",
        en: "sincere",
        roleAr: "خَبَرُ الْمُبْتَدَأ",
        roleEn: "predicate of the topic",
        governorAr: "الْمُبْتَدَأ",
        governorEn: "the topic itself governs its predicate",
        caseAr: "مَرْفُوع",
        caseEn: "marfūʿ",
        signAr: "الضَّمَّةُ الظَّاهِرَة",
        signEn: "explicit ḍammah",
        why: "This is marfūʿ #4. In the default pattern, the predicate matches the topic in rafʿ — both raised, nothing abrogating.",
        marfuRole: "الْخَبَر",
      },
    ],
    takeaway:
      "Default nominal sentence: both halves of the pair are marfūʿ. Memorise this baseline — كَانَ and إِنَّ only make sense as changes to it.",
  },
  {
    id: "kana",
    num: 2,
    ar: "وَكَانَ رَبُّكَ قَدِيرًا",
    en: "And your Lord is ever All-Powerful. — al-Furqān 25:54",
    patternKey: "kana",
    patternAr: "كَانَ + اسْمُهَا + خَبَرُهَا",
    patternEn: "kāna + its noun (rafʿ) + its predicate (naṣb)",
    patternHint:
      "Spot كَانَ first. It keeps the old topic marfūʿ (now اسم كان) but pushes the old predicate into naṣb (خبر كان).",
    caseMap: [
      { ar: "كَانَ", caseLabel: "فعل", tone: "verb" },
      { ar: "رَبُّ", caseLabel: "رفع", tone: "raf" },
      { ar: "ـكَ", caseLabel: "خفض", tone: "khafd" },
      { ar: "قَدِيرًا", caseLabel: "نصب", tone: "nasb" },
    ],
    words: [
      {
        ar: "كَانَ",
        en: "was / is ever",
        roleAr: "فِعْلٌ مَاضٍ نَاقِص",
        roleEn: "deficient past verb (abrogator)",
        governorAr: "—",
        governorEn: "it is the governor, not the governed",
        caseAr: "مَبْنِيّ",
        caseEn: "uninflected (mabnī)",
        signAr: "—",
        signEn: "verbs of this kind are not declined for iʿrāb case",
        why: "كَانَ and her sisters raise the noun and install naṣb on the predicate. Naming the pattern first saves you from treating this like a plain mubtadaʾ–khabar pair.",
        marfuRole: null,
      },
      {
        ar: "رَبُّ",
        en: "Lord",
        roleAr: "اسْمُ كَانَ",
        roleEn: "noun of kāna",
        governorAr: "كَانَ",
        governorEn: "made marfūʿ by kāna",
        caseAr: "مَرْفُوع",
        caseEn: "marfūʿ",
        signAr: "الضَّمَّةُ الظَّاهِرَة",
        signEn: "explicit ḍammah",
        why: "This is marfūʿ #5. Same word that would have been mubtadaʾ before كَانَ entered — still raised, but now renamed اسم كان.",
        marfuRole: "اسْمُ كَانَ",
        extra: "رَبُّ is also مُضَاف (the first half of a possessive pair).",
      },
      {
        ar: "ـكَ",
        en: "your",
        roleAr: "مُضَاف إِلَيْه",
        roleEn: "possessor attached to رَبّ",
        governorAr: "الْإِضَافَة",
        governorEn: "possession always puts the second noun in khafḍ",
        caseAr: "مَبْنِيٌّ فِي مَحَلِّ خَفْض",
        caseEn: "mabnī, in the place of khafḍ",
        signAr: "مَبْنِيٌّ عَلَى الْفَتْح",
        signEn: "built on fatḥah (pronouns don’t take iʿrāb signs)",
        why: "Not one of the seven marfūʿāt — attached pronouns are uninflected. Their case is a “place” (محل), not a written vowel.",
        marfuRole: null,
      },
      {
        ar: "قَدِيرًا",
        en: "All-Powerful",
        roleAr: "خَبَرُ كَانَ",
        roleEn: "predicate of kāna",
        governorAr: "كَانَ",
        governorEn: "made manṣūb by kāna",
        caseAr: "مَنْصُوب",
        caseEn: "manṣūb",
        signAr: "الْفَتْحَةُ الظَّاهِرَة",
        signEn: "explicit fatḥah",
        why: "Contrast with exercise 1: here the predicate lost its rafʿ. That single change is the whole point of كَانَ’s family.",
        marfuRole: null,
      },
    ],
    takeaway:
      "كَانَ keeps one marfūʿ (اسمها) and flips the other half to naṣb (خبرها). Only رَبُّ is from the seven here.",
  },
  {
    id: "inna",
    num: 3,
    ar: "إِنَّ اللَّهَ سَمِيعُ الدُّعَاءِ",
    en: "Indeed Allah is Hearing of supplications.",
    patternKey: "inna",
    patternAr: "إِنَّ + اسْمُهَا + خَبَرُهَا",
    patternEn: "inna + its noun (naṣb) + its predicate (rafʿ)",
    patternHint:
      "Spot إِنَّ first. It does the opposite of كَانَ: the noun goes to naṣb, while the predicate stays marfūʿ.",
    caseMap: [
      { ar: "إِنَّ", caseLabel: "حرف", tone: "harf" },
      { ar: "اللَّهَ", caseLabel: "نصب", tone: "nasb" },
      { ar: "سَمِيعُ", caseLabel: "رفع", tone: "raf" },
      { ar: "الدُّعَاءِ", caseLabel: "خفض", tone: "khafd" },
    ],
    words: [
      {
        ar: "إِنَّ",
        en: "indeed",
        roleAr: "حَرْفُ تَوْكِيدٍ وَنَصْب",
        roleEn: "particle of emphasis and naṣb",
        governorAr: "—",
        governorEn: "it is the governor, not the governed",
        caseAr: "مَبْنِيّ",
        caseEn: "uninflected (mabnī)",
        signAr: "—",
        signEn: "particles are not declined for case",
        why: "إِنَّ and her sisters install naṣb on the noun and leave the predicate marfūʿ — the mirror image of كَانَ.",
        marfuRole: null,
      },
      {
        ar: "اللَّهَ",
        en: "Allah",
        roleAr: "اسْمُ إِنَّ",
        roleEn: "noun of inna",
        governorAr: "إِنَّ",
        governorEn: "made manṣūb by inna",
        caseAr: "مَنْصُوب",
        caseEn: "manṣūb",
        signAr: "الْفَتْحَةُ الظَّاهِرَة",
        signEn: "explicit fatḥah",
        why: "Would have been mubtadaʾ (marfūʿ) without إِنَّ. After إِنَّ enters, it is اسم إنّ and takes naṣb — not one of the seven marfūʿāt.",
        marfuRole: null,
      },
      {
        ar: "سَمِيعُ",
        en: "Hearing",
        roleAr: "خَبَرُ إِنَّ",
        roleEn: "predicate of inna",
        governorAr: "إِنَّ",
        governorEn: "made marfūʿ by inna",
        caseAr: "مَرْفُوع",
        caseEn: "marfūʿ",
        signAr: "الضَّمَّةُ الظَّاهِرَة",
        signEn: "explicit ḍammah",
        why: "This is marfūʿ #6. In إِنَّ’s family, the predicate is the half that keeps rafʿ.",
        marfuRole: "خَبَرُ إِنَّ",
        extra: "سَمِيعُ is also مُضَاف (first half of the possessive).",
      },
      {
        ar: "الدُّعَاءِ",
        en: "the supplication(s)",
        roleAr: "مُضَاف إِلَيْه",
        roleEn: "possessor after سَمِيع",
        governorAr: "الْإِضَافَة",
        governorEn: "possession puts it in khafḍ",
        caseAr: "مَخْفُوض",
        caseEn: "makhfūḍ (genitive)",
        signAr: "الْكَسْرَةُ الظَّاهِرَة",
        signEn: "explicit kasrah",
        why: "Not marfūʿ — idāfah always lowers the second noun. Useful reminder: not every word in a “marfūʿ chapter” example is itself marfūʿ.",
        marfuRole: null,
      },
    ],
    takeaway:
      "إِنَّ flips the opposite half from كَانَ: noun → naṣb, predicate → rafʿ. Only سَمِيعُ is from the seven here.",
  },
];

const PATTERN_CHOICES = [
  { key: "mubtada", ar: "مبتدأ + خبر", en: "plain topic + predicate" },
  { key: "kana", ar: "كان وأخواتها", en: "kāna + noun + predicate" },
  { key: "inna", ar: "إنّ وأخواتها", en: "inna + noun + predicate" },
];

function caseToneClass(tone) {
  if (tone === "raf") return "is-raf";
  if (tone === "nasb") return "is-nasb";
  if (tone === "khafd") return "is-khafd";
  if (tone === "verb") return "is-verb";
  if (tone === "harf") return "is-harf";
  return "";
}

function IraabWordCard({ word, index, open, onToggle }) {
  return (
    <div className={`dcm-iraab-card${open ? " is-open" : ""}`}>
      <button type="button" className="dcm-iraab-card__head" onClick={onToggle}>
        <span className="dcm-iraab-card__step">{index + 1}</span>
        <span className="dcm-iraab-card__ar" dir="rtl">
          {word.ar}
        </span>
        <span className="dcm-iraab-card__en">{word.en}</span>
        <span className="dcm-iraab-card__chev" aria-hidden>
          {open ? "▾" : "▸"}
        </span>
      </button>
      {open && (
        <div className="dcm-iraab-card__body">
          <div className="dcm-iraab-grid">
            <div className="dcm-iraab-cell">
              <span className="dcm-iraab-label">Role · الوظيفة</span>
              <span className="dcm-iraab-ar" dir="rtl">
                {word.roleAr}
              </span>
              <span className="dcm-iraab-en">{word.roleEn}</span>
            </div>
            <div className="dcm-iraab-cell">
              <span className="dcm-iraab-label">Governor · العامل</span>
              <span className="dcm-iraab-ar" dir="rtl">
                {word.governorAr}
              </span>
              <span className="dcm-iraab-en">{word.governorEn}</span>
            </div>
            <div className="dcm-iraab-cell">
              <span className="dcm-iraab-label">Case · الحالة</span>
              <span className="dcm-iraab-ar" dir="rtl">
                {word.caseAr}
              </span>
              <span className="dcm-iraab-en">{word.caseEn}</span>
            </div>
            <div className="dcm-iraab-cell">
              <span className="dcm-iraab-label">Sign · العلامة</span>
              <span className="dcm-iraab-ar" dir="rtl">
                {word.signAr}
              </span>
              <span className="dcm-iraab-en">{word.signEn}</span>
            </div>
          </div>
          <p className="dcm-iraab-why">{word.why}</p>
          {word.extra ? <p className="dcm-iraab-extra">{word.extra}</p> : null}
          {word.marfuRole ? (
            <p className="dcm-iraab-badge">
              From the seven · <span dir="rtl">{word.marfuRole}</span>
            </p>
          ) : (
            <p className="dcm-iraab-badge dcm-iraab-badge--muted">Not one of the seven marfūʿāt</p>
          )}
        </div>
      )}
    </div>
  );
}

function MarfuatIraabTrainer() {
  const [exIdx, setExIdx] = useState(0);
  const [patternGuess, setPatternGuess] = useState(null);
  const [patternRevealed, setPatternRevealed] = useState(false);
  const [openWords, setOpenWords] = useState(() => new Set());
  const [showAll, setShowAll] = useState(false);

  const exercise = EXERCISES[exIdx];
  const patternCorrect = patternGuess === exercise.patternKey;
  const marfuWords = exercise.words.filter((w) => w.marfuRole);

  function selectExercise(i) {
    setExIdx(i);
    setPatternGuess(null);
    setPatternRevealed(false);
    setOpenWords(new Set());
    setShowAll(false);
  }

  function toggleWord(i) {
    setOpenWords((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  }

  function revealNext() {
    setPatternRevealed(true);
    const nextClosed = exercise.words.findIndex((_, i) => !openWords.has(i));
    if (nextClosed === -1) {
      setShowAll(true);
      return;
    }
    setOpenWords((prev) => new Set(prev).add(nextClosed));
    if (nextClosed === exercise.words.length - 1) setShowAll(true);
  }

  function revealAllWords() {
    setPatternRevealed(true);
    setOpenWords(new Set(exercise.words.map((_, i) => i)));
    setShowAll(true);
  }

  function resetExercise() {
    setPatternGuess(null);
    setPatternRevealed(false);
    setOpenWords(new Set());
    setShowAll(false);
  }

  return (
    <div className="dcm-iraab-trainer">
      <h2 className="dcm-h2">
        <span className="dcm-num">9</span>
        Worked examples — learn full iʿrāb{" "}
        <span className="dcm-ar">تَدْرِيبٌ عَلَى الْإِعْرَابِ</span>
      </h2>

      <p>
        Don’t dive word-by-word yet. First name the <em>sentence pattern</em>, then walk each word with
        four questions: role, governor, case, and sign. These three examples preview the marfūʿ roles
        you’ll meet next: plain topic–predicate, كَانَ’s noun, and إِنَّ’s predicate.
      </p>

      <div className="dcm-iraab-method">
        <p className="dcm-iraab-method__title">How to analyse any sentence</p>
        <ol>
          <li>
            <strong>Pattern first</strong> — is it plain مبتدأ/خبر, or did كَانَ / إِنَّ abrogate it?
          </li>
          <li>
            <strong>Role</strong> — what job does this word do? (مبتدأ، اسم كان، خبر إنّ…)
          </li>
          <li>
            <strong>Governor</strong> — what caused that case? (الابتداء، كان، إنّ، الإضافة…)
          </li>
          <li>
            <strong>Case + sign</strong> — مرفوع/منصوب/مخفوض, and which علامة marks it?
          </li>
        </ol>
      </div>

      <div className="dcm-iraab-tabs" role="tablist" aria-label="Exercises">
        {EXERCISES.map((ex, i) => (
          <button
            key={ex.id}
            type="button"
            role="tab"
            aria-selected={exIdx === i}
            className={`dcm-iraab-tab${exIdx === i ? " is-active" : ""}`}
            onClick={() => selectExercise(i)}
          >
            <span className="dcm-iraab-tab__num">{ex.num}</span>
            <span className="dcm-iraab-tab__ar" dir="rtl">
              {ex.ar}
            </span>
          </button>
        ))}
      </div>

      <div className="dcm-iraab-stage">
        <div className="dcm-iraab-sentence" dir="rtl">
          {exercise.ar}
        </div>
        <p className="dcm-iraab-gloss">{exercise.en}</p>

        <div className="dcm-iraab-case-map" dir="rtl" aria-label="Case map">
          {exercise.caseMap.map((cell) => (
            <span
              key={cell.ar}
              className={`dcm-iraab-case-chip ${caseToneClass(cell.tone)}${
                patternRevealed || openWords.size > 0 ? " is-shown" : ""
              }`}
            >
              <span className="dcm-iraab-case-chip__ar">{cell.ar}</span>
              <span className="dcm-iraab-case-chip__case">
                {patternRevealed || openWords.size > 0 ? cell.caseLabel : "؟"}
              </span>
            </span>
          ))}
        </div>

        <div className="dcm-iraab-pattern">
          <p className="dcm-iraab-pattern__ask">
            Step 1 — What pattern is this sentence?
          </p>
          <div className="dcm-iraab-pattern__choices">
            {PATTERN_CHOICES.map((choice) => {
              let state = "";
              if (patternGuess === choice.key) {
                state = choice.key === exercise.patternKey ? " is-correct" : " is-wrong";
              } else if (patternRevealed && choice.key === exercise.patternKey) {
                state = " is-correct";
              }
              return (
                <button
                  key={choice.key}
                  type="button"
                  className={`dcm-iraab-choice${state}`}
                  disabled={patternRevealed && patternCorrect}
                  onClick={() => {
                    setPatternGuess(choice.key);
                    if (choice.key === exercise.patternKey) setPatternRevealed(true);
                  }}
                >
                  <span dir="rtl">{choice.ar}</span>
                  <span>{choice.en}</span>
                </button>
              );
            })}
          </div>
          {(patternRevealed || patternCorrect) && (
            <div className="dcm-iraab-pattern__reveal">
              <p>
                <strong dir="rtl">{exercise.patternAr}</strong> — {exercise.patternEn}
              </p>
              <p>{exercise.patternHint}</p>
            </div>
          )}
        </div>

        {(patternRevealed || patternCorrect) && (
          <>
            <p className="dcm-iraab-pattern__ask">Step 2 — Walk each word</p>
            <div className="dcm-iraab-words">
              {exercise.words.map((word, i) => (
                <IraabWordCard
                  key={`${exercise.id}-${word.ar}`}
                  word={word}
                  index={i}
                  open={openWords.has(i)}
                  onToggle={() => toggleWord(i)}
                />
              ))}
            </div>

            <div className="dcm-iraab-actions">
              <button type="button" className="course-btn" onClick={revealNext}>
                Reveal next word
              </button>
              <button type="button" className="course-btn ghost" onClick={revealAllWords}>
                Show full analysis
              </button>
              <button type="button" className="course-btn ghost" onClick={resetExercise}>
                Reset
              </button>
            </div>
          </>
        )}

        {showAll && (
          <div className="dcm-iraab-summary">
            <p className="dcm-iraab-summary__title">Marfūʿ scorecard for this sentence</p>
            {marfuWords.length === 0 ? (
              <p>No word from the seven is marfūʿ here — unusual for this chapter’s set.</p>
            ) : (
              <ul>
                {marfuWords.map((w) => (
                  <li key={w.ar}>
                    <span dir="rtl" className="dcm-iraab-summary__ar">
                      {w.ar}
                    </span>
                    <span dir="rtl">{w.marfuRole}</span>
                    <span>{w.caseEn} by {w.governorEn.split("—")[0].trim()}</span>
                  </li>
                ))}
              </ul>
            )}
            <p className="dcm-iraab-summary__takeaway">{exercise.takeaway}</p>
          </div>
        )}
      </div>

      <div className="dcm-iraab-compare">
        <p className="dcm-iraab-compare__title">Keep the three patterns side by side</p>
        <table className="dcm-grid">
          <tbody>
            <tr>
              <th>Pattern</th>
              <th>First noun</th>
              <th>Predicate</th>
              <th>Marfūʿ from the seven</th>
            </tr>
            <tr>
              <td className="dcm-grid-ar">مبتدأ + خبر</td>
              <td className="dcm-tag-rafu">رفع · مبتدأ</td>
              <td className="dcm-tag-rafu">رفع · خبر</td>
              <td>both (#3 and #4)</td>
            </tr>
            <tr>
              <td className="dcm-grid-ar">كان وأخواتها</td>
              <td className="dcm-tag-rafu">رفع · اسمها</td>
              <td className="dcm-tag-nasb">نصب · خبرها</td>
              <td>اسم كان only (#5)</td>
            </tr>
            <tr>
              <td className="dcm-grid-ar">إنّ وأخواتها</td>
              <td className="dcm-tag-nasb">نصب · اسمها</td>
              <td className="dcm-tag-rafu">رفع · خبرها</td>
              <td>خبر إنّ only (#6)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function MarfuatAnwaGuide() {
  return (
    <div className="damma-commentary">
      <div dangerouslySetInnerHTML={{ __html: MARFUAT_ANWA_HTML }} />
      <hr className="dcm-divider" />
      <MarfuatIraabTrainer />
      <hr className="dcm-divider" />
      <p className="dcm-callout dcm-green dcm-callout--end">
        <strong>In short:</strong> rafʿ isn&apos;t one role — it&apos;s seven, each with its own reason
        for taking it: the subject and its passive stand-in; the topic and predicate pair; kāna&apos;s
        noun and inna&apos;s predicate (both survivors of a sentence-structure that&apos;s been
        grammatically overridden); and anything that simply follows and agrees with an
        already-marfūʿ word. Every chapter on rafʿ&apos;s <em>signs</em> (ḍammah, alif, wāw, nūn)
        that came before this one was really describing how these seven roles get marked — this
        chapter is the map of where those signs actually get used.
      </p>
    </div>
  );
}

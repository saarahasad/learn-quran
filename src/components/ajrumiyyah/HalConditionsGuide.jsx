const HAL_CONDITIONS_HTML = `
<p class="dcm-lead">
  The circumstantial adverb (<span class="dcm-ar">الْحَال</span>) describes the state or condition of someone/something at the moment of the main action — "he came <em>running</em>," "I ate the food <em>hot</em>." This section lays out the two conditions the ḥāl itself must meet, the one condition its "companion" (<span class="dcm-ar">صَاحِب الْحَال</span>) must meet, and the exceptions that let each rule bend.
</p>

<h2 class="dcm-h2"><span class="dcm-num">1</span>The two conditions of the ḥāl <span class="dcm-ar">شُرُوطُ الْحَال</span></h2>
<p>
  Every ḥāl, without exception, must satisfy two things at once:
</p>
<div class="dcm-chart">
  <div class="dcm-chart-row">
    <div class="dcm-chart-branch">
      <div class="dcm-chart-node dcm-c1">
        <span class="dcm-ar">نَكِرَة</span>
        <span class="dcm-en">it must be indefinite — never definite</span>
        <span class="dcm-ex dcm-ar">جَاءَ عَلِيٌّ رَاكِبًا</span>
      </div>
    </div>
    <div class="dcm-chart-branch">
      <div class="dcm-chart-node dcm-c2">
        <span class="dcm-ar">بَعْدَ تَمَامِ الْكَلَامِ</span>
        <span class="dcm-en">it must come after the sentence is already grammatically complete</span>
        <span class="dcm-ex dcm-ar">جَاءَ عَلِيٌّ رَاكِبًا</span>
      </div>
    </div>
  </div>
</div>
<p>
  The author states this plainly: <span class="dcm-example">وَلَا يَكُونُ إِلَّا نَكِرَةً، وَلَا يَكُونُ إِلَّا بَعْدَ تَمَامِ الْكَلَامِ</span> — "it does not occur except in the indefinite state, and it does not occur except after the completion of speech." Ibn Ājurrūm adds the mirror-image rule for the word it describes: <span class="dcm-example">وَلَا يَكُونُ صَاحِبُهَا إِلَّا مَعْرِفَةً</span> — "and its companion cannot be anything but definite." So the pattern is fixed: <strong>definite word + indefinite ḥāl</strong>, never the reverse by default.
</p>

<div class="dcm-fn">
  <span class="dcm-fn-num">199</span> Al-Ḥāmidī: the ḥāl stays indefinite because its whole job is to clarify a circumstance — that purpose is already achieved by the indefinite form, so there is no need (and no benefit) in making it definite; treating it as definite would wrongly suggest it is an additional description rather than a circumstance.
</div>
<div class="dcm-fn">
  <span class="dcm-fn-num">200</span> Al-Kafrāwī: the root reason the ḥāl must be indefinite is to prevent it being mistaken for a <span class="dcm-ar">صِفَة</span> (adjective) — a risk that arises specifically when the word is <span class="dcm-ar">مَنْصُوب</span>, or when its grammatical role is otherwise ambiguous. Al-Ḥāmidī illustrates both cases: in <span class="dcm-ar">رَأَيْتُ زَيْدًا الرَّاكِبَ</span> the manṣūb ending on الراكب could wrongly be read as an adjective describing زيداً; in <span class="dcm-ar">جَاءَ زَيْدٌ الْفَتَى</span> the case ending is silent, so nothing in the form itself rules out reading الفتى as an adjective either — only the "indefinite-only" rule for ḥāl removes the ambiguity.
</div>

<hr class="dcm-divider" />

<h2 class="dcm-h2"><span class="dcm-num">2</span>When a "definite" word is actually the ḥāl <span class="dcm-ar">تَأْوِيلُ الْمَعْرِفَةِ بِنَكِرَةٍ</span></h2>
<p>
  Sometimes a sentence's surface form looks like it breaks the rule — the word functioning as ḥāl <em>appears</em> definite. The commentary is firm that this is only apparent: <span class="dcm-example">يَجِبُ تَأْوِيلُ هَذِهِ الْمَعْرِفَةِ بِنَكِرَةٍ</span> — it must be reinterpreted with an indefinite meaning. Three classic examples:
</p>

<div class="dcm-word-entry dcm-c1">
  <div class="dcm-word-head"><span class="dcm-word-num">1</span><span class="dcm-ar">جَاءَ الْأَمِيرُ وَحْدَهُ</span></div>
  <div class="dcm-word-def">"The leader came by himself." — وَحْدَهُ is <span class="dcm-ar">حَال</span> from الأمير, and on the surface it is definite (compounded/<span class="dcm-ar">مُضَاف</span> to the pronoun هُ). Reinterpreted as the indefinite مُنْفَرِدًا ("alone") — i.e. as if the sentence said جَاءَ الْأَمِيرُ مُنْفَرِدًا.</div>
</div>
<div class="dcm-word-entry dcm-c2">
  <div class="dcm-word-head"><span class="dcm-word-num">2</span><span class="dcm-ar">أَرْسَلْهَا الْعِرَاكَ</span></div>
  <div class="dcm-word-def">"He sent it (the herd) to jostle/compete for water." — الْعِرَاكَ is reinterpreted as the indefinite مُعْتَرِكَةً ("competing/jostling").</div>
</div>
<div class="dcm-word-entry dcm-c3">
  <div class="dcm-word-head"><span class="dcm-word-num">3</span><span class="dcm-ar">جَاؤُوا الْأَوَّلَ فَالْأَوَّلَ</span></div>
  <div class="dcm-word-def">"They came one after another." — الأول فالأول is reinterpreted as the indefinite مُتَرَتِّبِينَ ("in sequential order").</div>
</div>

<p class="dcm-callout dcm-yellow">
  The pattern across all three: the surface word looks definite (a possessive compound, or a phrase with الـ), but semantically it is describing a <em>manner</em> — and manner-words are conceptually indefinite regardless of their surface shape. Grammarians handle the mismatch by mentally substituting the true indefinite synonym rather than relaxing the rule itself.
</p>

<hr class="dcm-divider" />

<h2 class="dcm-h2"><span class="dcm-num">3</span>"Completion of speech" defined <span class="dcm-ar">مَعْنَى اسْتِيفَاءِ الْكَلَامِ</span></h2>
<p>
  The second condition — that the ḥāl comes only <em>after</em> the sentence is complete — needs its own definition, since "complete" doesn't mean "finished," it means every obligatory element is already in place:
</p>
<div class="dcm-chart">
  <div class="dcm-chart-row">
    <div class="dcm-chart-branch">
      <div class="dcm-chart-node dcm-c4">
        <span class="dcm-en">verbal sentence</span>
        <span class="dcm-ar">أَنْ يَأْخُذَ الْفِعْلُ فَاعِلَهُ</span>
        <span class="dcm-ex dcm-en">the verb must already have taken its subject (<span class="dcm-ar">فَاعِل</span>)</span>
      </div>
    </div>
    <div class="dcm-chart-branch">
      <div class="dcm-chart-node dcm-c5">
        <span class="dcm-en">nominal sentence</span>
        <span class="dcm-ar">وَالْمُبْتَدَأُ خَبَرَهُ</span>
        <span class="dcm-ex dcm-en">the subject (<span class="dcm-ar">مُبْتَدَأ</span>) must already have taken its predicate (<span class="dcm-ar">خَبَر</span>)</span>
      </div>
    </div>
  </div>
</div>
<p>
  Only once one of those two structural cores is fully formed can the ḥāl be added on top of it — the ḥāl is always an "extra" describing a state, never a part of the sentence's own skeleton.
</p>

<hr class="dcm-divider" />

<h2 class="dcm-h2"><span class="dcm-num">4</span>Exception: when the ḥāl must come first <span class="dcm-ar">وُجُوبُ تَقْدِيمِ الْحَالِ</span></h2>
<p>
  "After completion of speech" is the default position, not an absolute one. There is one situation where the ḥāl is instead forced to the very front of the sentence — ahead of everything else:
</p>
<div class="dcm-sentence dcm-c3">
  <span class="dcm-ar"><span class="dcm-hl">كَيْفَ</span> جَاءَ عَلِيٌّ؟</span>
  <span class="dcm-gloss">"How did ʿAlī come?" — كَيْفَ ("how") is an interrogative noun (اسْم اسْتِفْهَام), <span class="dcm-ar">مَبْنِيّ</span> on a fatḥah, in the position of <span class="dcm-ar">نَصْب</span> as <span class="dcm-ar">حَال</span> from عَلِيّ.</span>
</div>
<p class="dcm-callout dcm-pink">
  Interrogative nouns belong to a broader family of words in Arabic that must always open the sentence — deferring them to any later position is simply not permitted, regardless of their grammatical function within the sentence. Since كيف here happens to be functioning as a ḥāl, the ḥāl inherits that same front-of-sentence obligation and overrides the general "after completion" rule.
</p>

<hr class="dcm-divider" />

<h2 class="dcm-h2"><span class="dcm-num">5</span>The condition on the companion (ṣāḥib al-ḥāl) <span class="dcm-ar">شَرْطُ صَاحِبِ الْحَال</span></h2>
<p>
  Just as the ḥāl itself must be indefinite, the noun it describes — its "companion" — is required to be definite: <span class="dcm-example">يُشْتَرَطُ فِي صَاحِبِ الْحَالِ أَنْ يَكُونَ مَعْرِفَةً</span>. An indefinite companion is not permitted <em>unless</em> something specific justifies it — <span class="dcm-ar">بِغَيْرِ مُسَوِّغٍ</span> ("without a justifier") is exactly what is forbidden; a justifier removes the prohibition.
</p>

<h2 class="dcm-h2"><span class="dcm-num">6</span>Two ways to justify an indefinite companion <span class="dcm-ar">مُسَوِّغَاتُ مَجِيءِ الْحَالِ مِنَ النَّكِرَةِ</span></h2>
<div class="dcm-chart">
  <div class="dcm-chart-row">
    <div class="dcm-chart-branch">
      <div class="dcm-chart-node dcm-c1">
        <span class="dcm-ar">تَقَدُّمُ الْحَالِ عَلَيْهَا</span>
        <span class="dcm-en">the ḥāl is placed before its (indefinite) companion</span>
      </div>
    </div>
    <div class="dcm-chart-branch">
      <div class="dcm-chart-node dcm-c2">
        <span class="dcm-ar">تَخْصِيصُ النَّكِرَةِ</span>
        <span class="dcm-en">the indefinite companion is narrowed down — by إِضَافَة (possessive compound) or وَصْف (adjective)</span>
      </div>
    </div>
  </div>
</div>

<h3 class="dcm-h3">justifier 1 — the ḥāl precedes its companion</h3>
<div class="dcm-sentence dcm-c1">
  <span class="dcm-ar">لِمَيَّةَ <span class="dcm-hl">مُوحِشًا</span> طَلَلٌ ۝ يَلُوحُ كَأَنَّهُ خَلَلُ</span>
  <span class="dcm-gloss">(verse of poetry) — "For Mayyah [there is], desolate, a ruin, / gleaming as if it were a gap [in the sand]." مُوحِشًا is <span class="dcm-ar">حَال</span> from طَلَلٌ, and طَلَلٌ is indefinite — its companion status is justified purely because the <span class="dcm-ar">حَال</span> مُوحِشًا was placed ahead of it in the sentence.</span>
</div>

<h3 class="dcm-h3">justifier 2 — the companion is specified (idāfah or waṣf)</h3>
<div class="dcm-sentence dcm-c4">
  <span class="dcm-tag">specified by إِضَافَة (compound)</span>
  <span class="dcm-ar">فِي أَرْبَعَةِ أَيَّامٍ <span class="dcm-hl">سَوَاءً</span></span>
  <span class="dcm-gloss">Qurʾān, Fuṣṣilat 41:10 — "in four days, equal [for all who ask]." سَوَاءً is <span class="dcm-ar">حَال</span> from أَرْبَعَةٍ, which is indefinite — but it is justified because أَرْبَعَةٍ is the possessed term (<span class="dcm-ar">مُضَاف</span>) in a possessive compound with أَيَّامٍ.</span>
</div>
<div class="dcm-sentence dcm-c5">
  <span class="dcm-tag">specified by وَصْف (adjective)</span>
  <span class="dcm-ar">نَجَّيْتَ يَا رَبِّ نُوحًا وَاسْتَجَبْتَ لَهُ ۝ فِي فُلْكٍ مَّاخِرٍ فِي الْيَمِّ <span class="dcm-hl">مَشْحُونًا</span></span>
  <span class="dcm-gloss">(verse of poetry) — "You saved, O my Lord, Nūḥ and answered him, / in a ship plowing [through] the sea, laden [with cargo]." مَشْحُونًا is <span class="dcm-ar">حَال</span> from فُلْكٍ, indefinite — justified because فُلْكٍ is already narrowed by the adjective مَاخِرٍ ("plowing/cutting through") describing it.</span>
</div>

<hr class="dcm-divider" />

<h2 class="dcm-h2"><span class="dcm-num">7</span>Exercise: full iʿrāb of two sentences <span class="dcm-ar">تَدْرِيبٌ عَلَى الْإِعْرَابِ</span></h2>
<p>
  Analyse: <span class="dcm-example">لَقِيَتْنِي هِنْدٌ بَاكِيَةً</span> and <span class="dcm-example">لَبِسْتُ الثَّوْبَ جَدِيدًا</span>.
</p>

<h3 class="dcm-h3">1 — لَقِيَتْنِي هِنْدٌ بَاكِيَةً ("Hind met me, crying")</h3>
<div class="dcm-irab-row">
  <span class="dcm-irab-word">لَقِيَتْ</span>
  <span class="dcm-irab-desc"><span class="dcm-ar">فِعْل مَاضٍ</span> (past-tense verb), <span class="dcm-ar">مَبْنِيّ</span> on a fatḥah, no locus of iʿrāb (لَا مَحَلَّ لَهُ). The <span class="dcm-ar">ت</span> is the sign of the feminine (تاء التأنيث), and the <span class="dcm-ar">ن</span> is the nūn of protection (نون الوقاية).</span>
</div>
<div class="dcm-irab-row">
  <span class="dcm-irab-word">ـِي</span>
  <span class="dcm-irab-desc">First-person pronoun (يَاء الْمُتَكَلِّم), the object (<span class="dcm-ar">مَفْعُول بِه</span>), <span class="dcm-ar">مَبْنِيّ</span> on sukūn in the position of <span class="dcm-ar">نَصْب</span>.</span>
</div>
<div class="dcm-irab-row">
  <span class="dcm-irab-word">هِنْدٌ</span>
  <span class="dcm-irab-desc">Subject (<span class="dcm-ar">فَاعِل</span>) of لَقِيَتْ, <span class="dcm-ar">مَرْفُوع</span>, sign of <span class="dcm-ar">رَفْع</span> is the visible ḍammah.</span>
</div>
<div class="dcm-irab-row">
  <span class="dcm-irab-word">بَاكِيَةً</span>
  <span class="dcm-irab-desc"><span class="dcm-ar">حَال</span> clarifying the state of the <span class="dcm-ar">فَاعِل</span> (هند), <span class="dcm-ar">مَنْصُوب</span>, sign of <span class="dcm-ar">نَصْب</span> is the visible fatḥah.</span>
</div>

<h3 class="dcm-h3">2 — لَبِسْتُ الثَّوْبَ جَدِيدًا ("I wore the robe, new")</h3>
<div class="dcm-irab-row">
  <span class="dcm-irab-word">لَبِسَ</span>
  <span class="dcm-irab-desc"><span class="dcm-ar">فِعْل مَاضٍ</span> (past-tense verb), <span class="dcm-ar">مَبْنِيّ</span> on an implied fatḥah — its appearance is blocked because the position is occupied by a sukūn inserted to avoid four consecutive vowelled letters in what functions as a single word-unit.</span>
</div>
<div class="dcm-irab-row">
  <span class="dcm-irab-word">ـتُ</span>
  <span class="dcm-irab-desc">First-person pronoun (تَاء الْمُتَكَلِّم), the subject (فَاعِل), <span class="dcm-ar">مَبْنِيّ</span> on ḍammah in the position of <span class="dcm-ar">رَفْع</span>.</span>
</div>
<div class="dcm-irab-row">
  <span class="dcm-irab-word">الثَّوْبَ</span>
  <span class="dcm-irab-desc">Object (<span class="dcm-ar">مَفْعُول بِه</span>), <span class="dcm-ar">مَنْصُوب</span>, sign of <span class="dcm-ar">نَصْب</span> is the visible fatḥah.</span>
</div>
<div class="dcm-irab-row">
  <span class="dcm-irab-word">جَدِيدًا</span>
  <span class="dcm-irab-desc"><span class="dcm-ar">حَال</span> clarifying the state of the object (الثوب), <span class="dcm-ar">مَنْصُوب</span>, sign of <span class="dcm-ar">نَصْب</span> is the visible fatḥah.</span>
</div>

<table class="dcm-table">
  <tr><th>Sentence</th><th><span class="dcm-ar">حَال</span></th><th>Companion (<span class="dcm-ar">صَاحِب الْحَال</span>)</th><th>Companion's role</th></tr>
  <tr><td>لَقِيَتْنِي هِنْدٌ بَاكِيَةً</td><td class="dcm-td-ar">بَاكِيَةً</td><td class="dcm-td-ar">هِنْدٌ</td><td><span class="dcm-ar">فَاعِل</span> (subject of the verb)</td></tr>
  <tr><td>لَبِسْتُ الثَّوْبَ جَدِيدًا</td><td class="dcm-td-ar">جَدِيدًا</td><td class="dcm-td-ar">الثَّوْبَ</td><td><span class="dcm-ar">مَفْعُول بِه</span> (object of the verb)</td></tr>
</table>
<p class="dcm-callout dcm-green dcm-callout--end">
  Note how both exercises confirm the core rule from Section 1 in miniature: in each sentence the companion (هِنْد, الثَّوْب) is definite by default nature/context, while the ḥāl (بَاكِيَةً, جَدِيدًا) is indefinite and <span class="dcm-ar">مَنْصُوب</span> — and in both cases it arrives only after its sentence is already structurally complete (<span class="dcm-ar">فَاعِل</span> supplied in the first, <span class="dcm-ar">مَفْعُول بِه</span> supplied in the second), exactly as Section 3 defines "completion of speech."
</p>
`;

export default function HalConditionsGuide() {
  return (
    <div
      className="damma-commentary"
      dangerouslySetInnerHTML={{ __html: HAL_CONDITIONS_HTML }}
    />
  );
}

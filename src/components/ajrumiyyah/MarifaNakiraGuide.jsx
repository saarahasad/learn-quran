const MARIFA_NAKIRA_HTML = `
<p class="dcm-lead">
  The adjective copies definite and indefinite. These lines name what counts as definite, then give the test of an indefinite noun.
</p>

<h2 class="dcm-h2"><span class="dcm-num">1</span>Five definite nouns <span class="dcm-ar">الْمَعْرِفَةُ خَمْسَةٌ</span></h2>
<p>
  A definite noun points to one specified thing. The matn lists five.
</p>
<div class="dcm-word-entry dcm-c1">
  <div class="dcm-word-head"><span class="dcm-word-num">1</span><span class="dcm-ar">الْمُضْمَرُ</span><span style="font-size:0.78rem; color:var(--dcm-sub);">a pronoun</span></div>
  <div class="dcm-word-def">Speaker: <span class="dcm-ar">أَنَا</span> · <span class="dcm-ar">نَحْنُ</span>. Addressee: <span class="dcm-ar">أَنْتَ أَنْتِ أَنْتُمَا أَنْتُمْ أَنْتُنَّ</span>. Absent: <span class="dcm-ar">هُوَ هِيَ هُمَا هُمْ هُنَّ</span>.</div>
</div>
<div class="dcm-word-entry dcm-c2">
  <div class="dcm-word-head"><span class="dcm-word-num">2</span><span class="dcm-ar">الْعَلَمُ</span><span style="font-size:0.78rem; color:var(--dcm-sub);">a proper name</span></div>
  <div class="dcm-word-def">No extra clue is needed. <span class="dcm-ar">مُحَمَّدٌ</span> · <span class="dcm-ar">فَاطِمَةُ</span> · <span class="dcm-ar">مَكَّةُ</span>.</div>
</div>
<div class="dcm-word-entry dcm-c3">
  <div class="dcm-word-head"><span class="dcm-word-num">3</span><span class="dcm-ar">الْمُبْهَمُ</span><span style="font-size:0.78rem; color:var(--dcm-sub);">demonstrative, and the relative</span></div>
  <div class="dcm-word-def">The matn gives the demonstrative: <span class="dcm-ar">هَذَا</span> · <span class="dcm-ar">هَذِهِ</span> · <span class="dcm-ar">هَؤُلَاءِ</span>. The commentary also places the relative here, because a sentence after it specifies it: <span class="dcm-ar">الَّذِي</span> · <span class="dcm-ar">الَّتِي</span> · <span class="dcm-ar">الَّذِينَ</span>.</div>
</div>
<div class="dcm-word-entry dcm-c4">
  <div class="dcm-word-head"><span class="dcm-word-num">4</span><span class="dcm-ar">مَا فِيهِ أَلْ</span><span style="font-size:0.78rem; color:var(--dcm-sub);">a noun with al-</span></div>
  <div class="dcm-word-def"><span class="dcm-ar">الرَّجُلُ</span> · <span class="dcm-ar">الْكِتَابُ</span> · <span class="dcm-ar">الْغُلَامُ</span>. Al- is what makes it definite.</div>
</div>
<div class="dcm-word-entry dcm-c5">
  <div class="dcm-word-head"><span class="dcm-word-num">5</span><span class="dcm-ar">الْمُضَافُ إِلَيْهَا</span><span style="font-size:0.78rem; color:var(--dcm-sub);">annexed to any of those</span></div>
  <div class="dcm-word-def"><span class="dcm-ar">غُلَامُكَ</span> · <span class="dcm-ar">غُلَامُ مُحَمَّدٍ</span> · <span class="dcm-ar">غُلَامُ هَذَا</span> · <span class="dcm-ar">غُلَامُ الْأُسْتَاذِ</span>. The annexed noun borrows definiteness from what it is annexed to.</div>
</div>

<p class="dcm-callout dcm-yellow">
  After the Name of Allah, the order of strength is: pronoun, then proper name, then demonstrative, then relative, then the noun with al-. An annexed noun takes the rank of what it is annexed to. Annexed to a pronoun, it ranks with the proper name.
</p>

<hr class="dcm-divider" />
<h2 class="dcm-h2"><span class="dcm-num">2</span>The indefinite noun <span class="dcm-ar">النَّكِرَةُ</span></h2>
<p>
  <span class="dcm-ar">رَجُلٌ</span> can be said of any adult man. <span class="dcm-ar">امْرَأَةٌ</span> can be said of any adult woman. Neither word has picked one person.
</p>
<div class="dcm-sentence dcm-c1">
  <span class="dcm-tag dcm-tag--green">the test</span>
  <span class="dcm-ar">رَجُلٌ → <span class="dcm-hl">الرَّجُلُ</span></span>
  <span class="dcm-gloss">If al- can be placed on it and makes it definite, the word without al- is indefinite. The same holds for غلام، جارية، صبي، معلم.</span>
</div>
<p class="dcm-callout dcm-green dcm-callout--end">
  <strong>The adjective copies this pair.</strong> <span class="dcm-ar">كِتَابٌ مُبَارَكٌ</span> — both indefinite. <span class="dcm-ar">زَيْدٌ الْعَاقِلُ</span> — both definite. A definite adjective does not follow an indefinite noun, and an indefinite adjective does not follow a definite noun.
</p>
`;

export default function MarifaNakiraGuide() {
  return (
    <div
      className="damma-commentary"
      dangerouslySetInnerHTML={{ __html: MARIFA_NAKIRA_HTML }}
    />
  );
}

const LA_NAFIYA_CANCELLED_HTML = `
<p class="dcm-lead">
  The last note was the sentence where all four conditions hold, so the special naṣb is required. This note is what you do when a condition fails. The commentary works out two failures. Both of them give you the same two duties: drop the special ending, and say <span class="dcm-ar">لَا</span> twice.
</p>

<h2 class="dcm-h2"><span class="dcm-num">1</span>A name comes after <span class="dcm-ar">لَا</span> <span class="dcm-ar">مَعْرِفَةٌ</span></h2>
<p>
  This <span class="dcm-ar">لَا</span> denies a whole kind. A name is one person, so the special pattern cannot start.
</p>
<div class="dcm-sentence dcm-c3">
  <span class="dcm-tag dcm-tag--ya">special ending dropped, and لَا is repeated</span>
  <span class="dcm-ar">لَا مُحَمَّدٌ زَارَنِي وَلَا بَكْرٌ</span>
  <span class="dcm-gloss">“Neither Muḥammad visited me, nor Bakr.”</span>
</div>
<div class="dcm-irab-row">
  <span class="dcm-irab-word">مُحَمَّدٌ</span>
  <span class="dcm-irab-desc">A definite name. It stays marfūʿ, as an ordinary subject.</span>
</div>
<div class="dcm-irab-row">
  <span class="dcm-irab-word">وَلَا بَكْرٌ</span>
  <span class="dcm-irab-desc">The second <span class="dcm-ar">لَا</span> is required. <span class="dcm-ar">بَكْرٌ</span> is marfūʿ as well.</span>
</div>

<hr class="dcm-divider" />

<h2 class="dcm-h2"><span class="dcm-num">2</span>A word stands between <span class="dcm-ar">لَا</span> and the noun</h2>
<p>
  The same two duties. In the matn, the word that steps in is the khabar, moved in front of the noun:
</p>
<div class="dcm-sentence dcm-c3">
  <span class="dcm-tag dcm-tag--ya">the khabar has stepped in between</span>
  <span class="dcm-ar">لَا فِي الدَّارِ رَجُلٌ وَلَا امْرَأَةٌ</span>
  <span class="dcm-gloss">“There is not a man in the house, and there is not a woman.”</span>
</div>
<div class="dcm-irab-row">
  <span class="dcm-irab-word">فِي الدَّارِ</span>
  <span class="dcm-irab-desc">This is the separator. It stands between <span class="dcm-ar">لَا</span> and <span class="dcm-ar">رَجُلٌ</span>, so the touch is broken.</span>
</div>
<div class="dcm-irab-row">
  <span class="dcm-irab-word">رَجُلٌ … امْرَأَةٌ</span>
  <span class="dcm-irab-desc">Both come back to rafʿ, with tanwīn. <span class="dcm-ar">لَا</span> is said twice.</span>
</div>
<p>
  Compare the required pattern from the first note, <span class="dcm-ar">لَا رَجُلَ فِي الدَّارِ</span>. There the noun touches <span class="dcm-ar">لَا</span> and the ending is a fatḥah with no tanwīn. Here the khabar has moved forward, so you hear <span class="dcm-ar">رَجُلٌ</span>.
</p>

<h3 class="dcm-h3">The same shape in the Qurʾān</h3>
<p>
  Al-Ṣāffāt 47. <span class="dcm-ar">فِيهَا</span> has moved in front of the noun, just as <span class="dcm-ar">فِي الدَّارِ</span> did.
</p>
<div class="dcm-sentence dcm-c1">
  <span class="dcm-tag">an ordinary nominal sentence</span>
  <span class="dcm-ar">لَا فِيهَا غَوْلٌ وَلَا هُمْ عَنْهَا يُنزَفُونَ</span>
  <span class="dcm-gloss">“There is no bad effect in it, and they are not intoxicated from it.”</span>
</div>
<div class="dcm-irab-row">
  <span class="dcm-irab-word">لَا</span>
  <span class="dcm-irab-desc">It still means “no.” It governs nothing. The commentary's word is <span class="dcm-ar">نَافِيَةٌ مُهْمَلَةٌ</span> — a negation left idle.</span>
</div>
<div class="dcm-irab-row">
  <span class="dcm-irab-word">فِيهَا</span>
  <span class="dcm-irab-desc">The khabar, brought forward. It hangs on a predicate that is not written out. This is the word standing between <span class="dcm-ar">لَا</span> and the noun.</span>
</div>
<div class="dcm-irab-row">
  <span class="dcm-irab-word">غَوْلٌ</span>
  <span class="dcm-irab-desc">The mubtadaʾ, delayed. Marfūʿ, with tanwīn. It is an ordinary subject.</span>
</div>
<div class="dcm-fn">
  <span class="dcm-fn-num">214</span> Al-Ṣāffāt: 47.
</div>

<hr class="dcm-divider" />
<p class="dcm-callout dcm-green dcm-callout--end">
  <strong>Two failures, one result.</strong> A definite noun after <span class="dcm-ar">لَا</span>, or any word placed between <span class="dcm-ar">لَا</span> and the noun, ends the work of <span class="dcm-ar">إِنَّ</span>. The noun is an ordinary marfūʿ subject, and <span class="dcm-ar">لَا</span> is repeated: <span class="dcm-ar">لَا مُحَمَّدٌ … وَلَا بَكْرٌ</span>, <span class="dcm-ar">لَا فِي الدَّارِ رَجُلٌ وَلَا امْرَأَةٌ</span>.
</p>
`;

export default function LaNafiyaCancelledGuide() {
  return (
    <div
      className="damma-commentary"
      dangerouslySetInnerHTML={{ __html: LA_NAFIYA_CANCELLED_HTML }}
    />
  );
}

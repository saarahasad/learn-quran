const LA_NAFIYA_CANCELLED_HTML = `
<p class="dcm-lead">
  The four conditions are what make the operation of <span class="dcm-ar">لَا</span> mandatory. This section is what the sentence does when one of them fails. In the two failures the commentary works out — a definite noun, or anything standing between <span class="dcm-ar">لَا</span> and its noun — the effect is dropped, and <span class="dcm-ar">لَا</span> has to be said twice.
</p>

<h2 class="dcm-h2"><span class="dcm-num">1</span>A definite noun follows <span class="dcm-ar">وَقَعَ بَعْدَهَا مَعْرِفَةٌ</span></h2>
<div class="dcm-sentence dcm-c3">
  <span class="dcm-tag dcm-tag--ya">effect cancelled, and lā is repeated</span>
  <span class="dcm-ar">لَا مُحَمَّدٌ زَارَنِي وَلَا بَكْرٌ</span>
  <span class="dcm-gloss">"Neither Muḥammad visited me, nor Bakr." Both names are definite, so neither can be the ism of lā al-nāfiya lil-jins. They stay marfūʿ, and the second لَا is required.</span>
</div>

<hr class="dcm-divider" />

<h2 class="dcm-h2"><span class="dcm-num">2</span>Something stands between them <span class="dcm-ar">فَصَلَ بَيْنَ لَا وَاسْمِهَا فَاصِلٌ</span></h2>
<p>
  The same pair of duties: cancel the effect, and repeat <span class="dcm-ar">لَا</span>. The separator in the matn's own example is the predicate, moved in front of the noun:
</p>
<div class="dcm-sentence dcm-c3">
  <span class="dcm-tag dcm-tag--ya">the khabar has stepped in between</span>
  <span class="dcm-ar">لَا فِي الدَّارِ رَجُلٌ وَلَا امْرَأَةٌ</span>
  <span class="dcm-gloss">"There is not, in the house, a man, nor a woman." رجل and امرأة are marfūʿ. لَا is said twice.</span>
</div>
<p>
  The commentary's Qurʾānic example is the same shape. Al-Ṣāffāt 47:
</p>
<div class="dcm-sentence dcm-c1">
  <span class="dcm-tag">parsed as an ordinary nominal sentence</span>
  <span class="dcm-ar">لَا فِيهَا غَوْلٌ وَلَا هُمْ عَنْهَا يُنزَفُونَ</span>
  <span class="dcm-gloss">"There is no bad effect in it, nor will they be intoxicated from it."</span>
</div>
<div class="dcm-word-entry dcm-c2">
  <div class="dcm-word-head"><span class="dcm-ar">لَا</span><span style="font-size:0.78rem; color:var(--dcm-sub);">nāfiya muhmala</span></div>
  <div class="dcm-word-def">It still negates, and it governs nothing. The commentary's word is <span class="dcm-ar">مُهْمَلَة</span> — idle, not operating.</div>
</div>
<div class="dcm-word-entry dcm-c1">
  <div class="dcm-word-head"><span class="dcm-ar">فِيهَا</span><span style="font-size:0.78rem; color:var(--dcm-sub);">fronted khabar</span></div>
  <div class="dcm-word-def">Connected to a deleted predicate that has been brought forward. This is the separator: it stands between <span class="dcm-ar">لَا</span> and the noun.</div>
</div>
<div class="dcm-word-entry dcm-c4">
  <div class="dcm-word-head"><span class="dcm-ar">غَوْلٌ</span><span style="font-size:0.78rem; color:var(--dcm-sub);">delayed mubtadaʾ</span></div>
  <div class="dcm-word-def">Marfūʿ. It is not an ism of <span class="dcm-ar">لَا</span>, so it keeps the tanwīn and the ḍammah.</div>
</div>
<div class="dcm-fn">
  <span class="dcm-fn-num">214</span> Al-Ṣāffāt: 47.
</div>

<hr class="dcm-divider" />
<p class="dcm-callout dcm-green dcm-callout--end">
  <strong>In short:</strong> a definite after <span class="dcm-ar">لَا</span>, or any word placed between <span class="dcm-ar">لَا</span> and the noun, ends the inna-like operation. The noun goes back to being an ordinary marfūʿ subject, and <span class="dcm-ar">لَا</span> must be repeated: <span class="dcm-ar">لَا مُحَمَّدٌ … وَلَا بَكْرٌ</span>, <span class="dcm-ar">لَا فِي الدَّارِ رَجُلٌ وَلَا امْرَأَةٌ</span>.
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

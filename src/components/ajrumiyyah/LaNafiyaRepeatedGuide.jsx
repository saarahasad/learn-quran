const LA_NAFIYA_REPEATED_HTML = `
<p class="dcm-lead">
  Repeating <span class="dcm-ar">لَا</span> is a different failure from the last note. There, the special ending had to be dropped. Here the other three conditions can still be true — the noun is indefinite, it touches <span class="dcm-ar">لَا</span>, and the khabar is indefinite. Saying <span class="dcm-ar">لَا</span> twice only removes the requirement. You may keep the special ending, or you may leave <span class="dcm-ar">لَا</span> idle.
</p>

<h2 class="dcm-h2"><span class="dcm-num">1</span>One denial, two endings</h2>
<p>
  Both sentences mean there is no man in the house and no woman. Listen for the vowel on <span class="dcm-ar">رَجُل</span> and <span class="dcm-ar">امْرَأَة</span>.
</p>
<div class="dcm-sentence dcm-c1">
  <span class="dcm-tag dcm-tag--green">إِعْمَال — لَا still works like إِنَّ</span>
  <span class="dcm-ar">لَا رَجُلَ فِي الدَّارِ وَلَا امْرَأَةَ</span>
  <span class="dcm-gloss">Fatḥah, and no tanwīn.</span>
</div>
<div class="dcm-irab-row">
  <span class="dcm-irab-word">رَجُلَ … امْرَأَةَ</span>
  <span class="dcm-irab-desc">Each is an ism of <span class="dcm-ar">لَا</span>, built, in the place of naṣb. Each sits against its own <span class="dcm-ar">لَا</span>.</span>
</div>
<div class="dcm-irab-row">
  <span class="dcm-irab-word">فِي الدَّارِ</span>
  <span class="dcm-irab-desc">The khabar.</span>
</div>

<div class="dcm-sentence dcm-c3">
  <span class="dcm-tag dcm-tag--ya">إِهْمَال — لَا is left idle</span>
  <span class="dcm-ar">لَا رَجُلٌ فِي الدَّارِ وَلَا امْرَأَةٌ</span>
  <span class="dcm-gloss">Ḍammah, and tanwīn.</span>
</div>
<div class="dcm-irab-row">
  <span class="dcm-irab-word">رَجُلٌ … امْرَأَةٌ</span>
  <span class="dcm-irab-desc">Each is an ordinary marfūʿ subject. <span class="dcm-ar">لَا</span> still means “no,” and it changes no ending.</span>
</div>

<p class="dcm-callout dcm-yellow">
  Both readings are open because the rest of the conditions still hold. The nouns are indefinite. Each one touches its own <span class="dcm-ar">لَا</span>. The khabar is indefinite. Only the fourth condition is missing, so the naṣb is allowed and the rafʿ is allowed.
</p>

<hr class="dcm-divider" />
<p class="dcm-callout dcm-green dcm-callout--end">
  <strong>The matn lets you choose.</strong> <span class="dcm-ar">لَا رَجُلَ … وَلَا امْرَأَةَ</span> is <span class="dcm-ar">لَا</span> doing the work of <span class="dcm-ar">إِنَّ</span>. <span class="dcm-ar">لَا رَجُلٌ … وَلَا امْرَأَةٌ</span> is the same words with <span class="dcm-ar">لَا</span> left idle. In the last note you had to drop the ending. Here, once <span class="dcm-ar">لَا</span> has been repeated, either ending is correct.
</p>
`;

export default function LaNafiyaRepeatedGuide() {
  return (
    <div
      className="damma-commentary"
      dangerouslySetInnerHTML={{ __html: LA_NAFIYA_REPEATED_HTML }}
    />
  );
}

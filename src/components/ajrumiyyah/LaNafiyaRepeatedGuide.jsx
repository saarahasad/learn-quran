const LA_NAFIYA_REPEATED_HTML = `
<p class="dcm-lead">
  Repeating <span class="dcm-ar">لَا</span> is a different failure from the last section. There, the effect had to be dropped. Here the other conditions can still be met — indefinite noun, nothing in between, indefinite predicate — and the repetition only removes the obligation. You may operate <span class="dcm-ar">لَا</span>, or you may leave it idle.
</p>

<h2 class="dcm-h2"><span class="dcm-num">1</span>Two readings of one sentence</h2>
<p>
  Both sentences deny a man and a woman in the house. The endings are the whole difference.
</p>
<div class="dcm-sentence dcm-c1">
  <span class="dcm-tag dcm-tag--green">إِعْمَال — lā still works like inna</span>
  <span class="dcm-ar">لَا رَجُلَ فِي الدَّارِ وَلَا امْرَأَةَ</span>
  <span class="dcm-gloss">Fatḥah on رجل and امرأة, and no tanwīn. Each is a mabnī ism of lā, in the place of naṣb. في الدار is the khabar.</span>
</div>
<div class="dcm-sentence dcm-c3">
  <span class="dcm-tag dcm-tag--ya">إِهْمَال — the effect is left off</span>
  <span class="dcm-ar">لَا رَجُلٌ فِي الدَّارِ وَلَا امْرَأَةٌ</span>
  <span class="dcm-gloss">Ḍammah and tanwīn. رجل and امرأة are ordinary marfūʿ subjects. لَا negates, and it governs nothing.</span>
</div>
<p class="dcm-callout dcm-yellow">
  The operating reading is available because the rest of the conditions still hold: both nouns are indefinite, each sits straight against its own <span class="dcm-ar">لَا</span>, and the predicate is indefinite. Repetition by itself is what turns the operation from a requirement into a choice.
</p>

<hr class="dcm-divider" />
<p class="dcm-callout dcm-green dcm-callout--end">
  <strong>In short:</strong> <span class="dcm-ar">لَا رَجُلَ … وَلَا امْرَأَةَ</span> is lā doing its work. <span class="dcm-ar">لَا رَجُلٌ … وَلَا امْرَأَةٌ</span> is the same words with the work declined. The matn allows either once <span class="dcm-ar">لَا</span> has been repeated.
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

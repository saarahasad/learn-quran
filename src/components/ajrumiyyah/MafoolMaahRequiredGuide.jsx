const MAFOOL_MAAH_REQUIRED_HTML = `
<p class="dcm-lead">
  This is the case where what follows the wāw cannot take part in the action. Conjunction would say that it did. That reading is out, so the noun is manṣūb as a mafʿūl maʿahu, and that is the only grammatical option.
</p>

<h2 class="dcm-h2"><span class="dcm-num">1</span>The mountain does not walk <span class="dcm-ar">أَنَا سَائِرٌ وَالْجَبَلَ</span></h2>
<div class="dcm-sentence dcm-c3">
  <span class="dcm-tag dcm-tag--ya">naṣb is required</span>
  <span class="dcm-ar">أَنَا سَائِرٌ وَ<span class="dcm-hl">الْجَبَلَ</span></span>
  <span class="dcm-gloss">"I am walking, the mountain alongside me." The speaker walks. The mountain does not. Raising الجبل would make it a partner in the walking, and that partnership is not possible.</span>
</div>

<h2 class="dcm-h2"><span class="dcm-num">2</span>The lamp does not study <span class="dcm-ar">ذَاكَرْتُ وَالْمِصْبَاحَ</span></h2>
<div class="dcm-sentence dcm-c3">
  <span class="dcm-tag dcm-tag--ya">naṣb is required</span>
  <span class="dcm-ar">ذَاكَرْتُ وَ<span class="dcm-hl">الْمِصْبَاحَ</span></span>
  <span class="dcm-gloss">"I revised with the lamp." The lamp is company for the studying. It is not a second student, so it cannot be joined as a fāʿil.</span>
</div>

<hr class="dcm-divider" />

<h2 class="dcm-h2"><span class="dcm-num">3</span>The author's example is this type <span class="dcm-ar">اسْتَوَى الْمَاءُ وَالْخَشَبَةَ</span></h2>
<div class="dcm-sentence dcm-c2">
  <span class="dcm-tag dcm-tag--green">the plank is not a second doer</span>
  <span class="dcm-ar">اسْتَوَى الْمَاءُ وَ<span class="dcm-hl">الْخَشَبَةَ</span></span>
  <span class="dcm-gloss">"The water became level with the plank." The water is what rose. The plank is the thing it rose level with. Conjunction, الخشبةُ, would claim the plank became level too, as a partner in the verb, and the commentary treats that partnership as unavailable. Naṣb is required.</span>
</div>
<p class="dcm-callout dcm-yellow">
  Set the two author-examples side by side. <span class="dcm-ar">الْجَيْشَ</span> can come, so <span class="dcm-ar">جَاءَ الْأَمِيرُ وَالْجَيْشَ</span> may also be read with <span class="dcm-ar">الْجَيْشُ</span>. <span class="dcm-ar">الْخَشَبَةَ</span> cannot share <span class="dcm-ar">اسْتَوَى</span>, so the fatḥah is not a choice.
</p>

<hr class="dcm-divider" />
<p class="dcm-callout dcm-green dcm-callout--end">
  <strong>In short:</strong> if the word after the wāw cannot do the verb, it is not conjoined. It is manṣūb, and it only names what the action happened with: the mountain beside the walker, the lamp beside the student, the plank the water rose level with.
</p>
`;

export default function MafoolMaahRequiredGuide() {
  return (
    <div
      className="damma-commentary"
      dangerouslySetInnerHTML={{ __html: MAFOOL_MAAH_REQUIRED_HTML }}
    />
  );
}

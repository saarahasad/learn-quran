const MAFOOL_MAAH_CHOICE_HTML = `
<p class="dcm-lead">
  This is the case where what follows the wāw <em>can</em> take part in the same action. Naṣb, as a mafʿūl maʿahu, is allowed. So is conjunction: the noun follows whatever case the word before the wāw is in, and the two share the verb.
</p>

<h2 class="dcm-h2"><span class="dcm-num">1</span>Both readings are real <span class="dcm-ar">حَضَرَ عَلِيٌّ وَمُحَمَّدٌ</span></h2>
<p>
  Muḥammad can be present just as ʿAlī can. Nothing in the world stops the partnership, so the grammar leaves both doors open.
</p>
<div class="dcm-sentence dcm-c1">
  <span class="dcm-tag dcm-tag--green">عَطْف — he shares the verb</span>
  <span class="dcm-ar">حَضَرَ عَلِيٌّ وَ<span class="dcm-hl">مُحَمَّدٌ</span></span>
  <span class="dcm-gloss">"ʿAlī and Muḥammad were present." محمد is marfūʿ, a second fāʿil, joined to علي.</span>
</div>
<div class="dcm-sentence dcm-c2">
  <span class="dcm-tag dcm-tag--green">مَعَ — he comes along</span>
  <span class="dcm-ar">حَضَرَ عَلِيٌّ وَ<span class="dcm-hl">مُحَمَّدًا</span></span>
  <span class="dcm-gloss">"ʿAlī was present, Muḥammad with him." محمد is manṣūb. The wāw is the wāw of accompaniment, and علي alone is the fāʿil.</span>
</div>

<hr class="dcm-divider" />

<h2 class="dcm-h2"><span class="dcm-num">2</span>The author's example is this type <span class="dcm-ar">جَاءَ الْأَمِيرُ وَالْجَيْشَ</span></h2>
<p>
  An army can come. The matn writes the army in naṣb, and that is the accompaniment reading. Raising it is just as sound, and then the sentence is ordinary conjunction.
</p>
<div class="dcm-sentence dcm-c2">
  <span class="dcm-tag">the matn's vowelling — accompaniment</span>
  <span class="dcm-ar">جَاءَ الْأَمِيرُ وَ<span class="dcm-hl">الْجَيْشَ</span></span>
  <span class="dcm-gloss">"The prince came, the army with him." The army is not a second subject.</span>
</div>
<div class="dcm-sentence dcm-c1">
  <span class="dcm-tag">also allowed — conjunction</span>
  <span class="dcm-ar">جَاءَ الْأَمِيرُ وَ<span class="dcm-hl">الْجَيْشُ</span></span>
  <span class="dcm-gloss">"The prince and the army came." Both share جاء.</span>
</div>
<p class="dcm-callout dcm-yellow">
  The test is not whether the wāw can mean "with." It is whether the thing after the wāw could truthfully do the verb. The army can arrive. That is why this sentence is a choice, and why the plank in the next example is not.
</p>

<hr class="dcm-divider" />
<p class="dcm-callout dcm-green dcm-callout--end">
  <strong>In short:</strong> when partnership is possible, <span class="dcm-ar">وَمُحَمَّدٌ</span> joins ʿAlī in the verb, and <span class="dcm-ar">وَمُحَمَّدًا</span> only comes along with him. <span class="dcm-ar">جَاءَ الْأَمِيرُ وَالْجَيْشَ</span> is the author's instance of that choice. The fatḥah picks accompaniment. The ḍammah picks conjunction.
</p>
`;

export default function MafoolMaahChoiceGuide() {
  return (
    <div
      className="damma-commentary"
      dangerouslySetInnerHTML={{ __html: MAFOOL_MAAH_CHOICE_HTML }}
    />
  );
}

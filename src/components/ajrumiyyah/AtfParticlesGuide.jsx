const ATF_PARTICLES_HTML = `
<p class="dcm-lead">
  Conjunction is two followers. One has no particle between the words. The other — the one the matn lists — has one of ten particles in the middle.
</p>

<h2 class="dcm-h2"><span class="dcm-num">1</span>Two kinds</h2>
<div class="dcm-sentence dcm-c1">
  <span class="dcm-tag dcm-tag--green">عَطْفُ بَيَانٍ — no particle</span>
  <span class="dcm-ar">جَاءَنِي مُحَمَّدٌ <span class="dcm-hl">أَبُوكَ</span></span>
  <span class="dcm-gloss">A non-derived word that clarifies a definite noun, or narrows an indefinite one. ﴿مِنْ مَاءٍ صَدِيدٍ﴾ — pus narrows “water.”</span>
</div>
<div class="dcm-sentence dcm-c2">
  <span class="dcm-tag dcm-tag--green">عَطْفُ نَسَقٍ — one of the ten</span>
  <span class="dcm-ar">قَامَ زَيْدٌ <span class="dcm-hl">وَ</span>عَمْرٌو</span>
  <span class="dcm-gloss">The particle stands between the two, and the second copies the case of the first.</span>
</div>

<h2 class="dcm-h2"><span class="dcm-num">2</span>What each particle adds</h2>
<table class="dcm-table">
  <tr><th>Particle</th><th>What it says</th></tr>
  <tr><td class="dcm-td-ar">الْوَاوُ</td><td>Joins the two. Order is not part of the meaning. Together, or either first.</td></tr>
  <tr><td class="dcm-td-ar">الْفَاءُ</td><td>The second comes right after the first. <span class="dcm-ar">قَدِمَ الْفُرْسَانُ فَالْمُشَاةُ</span>.</td></tr>
  <tr><td class="dcm-td-ar">ثُمَّ</td><td>The second comes later, with a gap. <span class="dcm-ar">مُوسَى ثُمَّ عِيسَى ثُمَّ مُحَمَّدًا</span>.</td></tr>
  <tr><td class="dcm-td-ar">أَوْ</td><td>A choice, and you may not take both: marry Hind or her sister. Or a permission, and you may take both: study fiqh or grammar.</td></tr>
  <tr><td class="dcm-td-ar">أَمْ</td><td>Which of the two? After the interrogative hamzah. <span class="dcm-ar">أَدَرَسْتَ الْفِقْهَ أَمِ النَّحْوَ</span>.</td></tr>
  <tr><td class="dcm-td-ar">إِمَّا</td><td>Same two meanings as aw, and another immā must come first. ﴿فَإِمَّا مَنًّا بَعْدُ وَإِمَّا فِدَاءً﴾.</td></tr>
  <tr><td class="dcm-td-ar">بَلْ</td><td>What came before is set aside. <span class="dcm-ar">مَا جَاءَ مُحَمَّدٌ بَلْ بَكْرٌ</span>. The word after it is a single word, and no question stands before it.</td></tr>
  <tr><td class="dcm-td-ar">لَا</td><td>The ruling of the first is denied of the second. <span class="dcm-ar">جَاءَ بَكْرٌ لَا خَالِدٌ</span>.</td></tr>
  <tr><td class="dcm-td-ar">لَكِنْ</td><td>The first ruling stays, and the opposite is affirmed of the second. Needs a negation or a prohibition, a single word after it, and no wāw in front of it.</td></tr>
  <tr><td class="dcm-td-ar">حَتَّى</td><td>A gradual arrival at a limit: <span class="dcm-ar">يَمُوتُ النَّاسُ حَتَّى الْأَنْبِيَاءُ</span>. In other places it starts a sentence, or it is a preposition, as in ﴿حَتَّى مَطْلَعِ الْفَجْرِ﴾. Only the first of those is conjunction.</td></tr>
</table>
<p class="dcm-callout dcm-green dcm-callout--end">
  <strong>The case comes next.</strong> These ten decide the meaning. The vowel on the second word is decided by the word before the particle.
</p>
`;

export default function AtfParticlesGuide() {
  return (
    <div
      className="damma-commentary"
      dangerouslySetInnerHTML={{ __html: ATF_PARTICLES_HTML }}
    />
  );
}

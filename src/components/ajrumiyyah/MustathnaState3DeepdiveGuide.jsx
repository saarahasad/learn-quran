const MUSTATHNA_STATE3_DEEPDIVE_HTML = `
<p class="dcm-lead">
  This is the full working-out of <strong>State 3</strong> — the case that applies when the speech before إِلَّا is <span class="dcm-ar">نَاقِص</span> (incomplete: the <span class="dcm-ar">مُسْتَثْنَى مِنْه</span> is never mentioned), which the commentary already established always co-occurs with negation. Here the choice-based flexibility of State 2 disappears entirely, replaced by a single mechanical rule: let the sentence's own governor decide.
</p>

<h2 class="dcm-h2"><span class="dcm-num">1</span>The governing rule <span class="dcm-ar">الْقَاعِدَةُ الْعَامَّة</span></h2>
<p>
  <span class="dcm-example">كَانَ الْمُسْتَثْنَى عَلَى حَسَبِ مَا قَبْلَ إِلَّا مِنَ الْعَوَامِلِ</span> — "the excepted noun follows whatever governor precedes إلا dictates." Since the مُسْتَثْنَى مِنْه was never stated, there is no "whole" for the excepted noun to be pulled out of or substituted for — so إلا effectively steps aside, and the noun after it is simply assigned whatever case the sentence's own verb (or preposition) would assign it if إلا weren't there at all. Three outcomes follow, one for each type of governor:
</p>
<div class="dcm-chart">
  <div class="dcm-chart-row">
    <div class="dcm-chart-branch">
      <div class="dcm-chart-node dcm-c1">
        <span class="dcm-ar">رَفْعُ الْفَاعِلِيَّةِ</span>
        <span class="dcm-en">governor requires a <span class="dcm-ar">فَاعِل</span> → <span class="dcm-ar">مَرْفُوع</span></span>
      </div>
    </div>
    <div class="dcm-chart-branch">
      <div class="dcm-chart-node dcm-c2">
        <span class="dcm-ar">نَصْبُ الْمَفْعُولِيَّةِ</span>
        <span class="dcm-en">governor requires a <span class="dcm-ar">مَفْعُول بِه</span> → <span class="dcm-ar">مَنْصُوب</span></span>
      </div>
    </div>
    <div class="dcm-chart-branch">
      <div class="dcm-chart-node dcm-c3">
        <span class="dcm-ar">الْجَرُّ بِحَرْفِ جَرٍّ</span>
        <span class="dcm-en">governor is a preposition → <span class="dcm-ar">مَجْرُور</span></span>
      </div>
    </div>
  </div>
</div>

<hr class="dcm-divider" />

<h2 class="dcm-h2"><span class="dcm-num">2</span>Case 1 — the governor requires a <span class="dcm-ar">فَاعِل</span> <span class="dcm-ar">رَفْعُ الْفَاعِلِيَّةِ</span></h2>
<div class="dcm-sentence dcm-c1">
  <span class="dcm-ar">مَا حَضَرَ إِلَّا <span class="dcm-hl">عَلِيٌّ</span></span>
  <span class="dcm-gloss">"None were present except ʿAlī."</span>
</div>
<div class="dcm-irab-row">
  <span class="dcm-irab-word">مَا</span>
  <span class="dcm-irab-desc">Particle of negation, <span class="dcm-ar">مَبْنِيّ</span>, no locus of iʿrāb.</span>
</div>
<div class="dcm-irab-row">
  <span class="dcm-irab-word">حَضَرَ</span>
  <span class="dcm-irab-desc"><span class="dcm-ar">فِعْل مَاضٍ</span> (past-tense verb), <span class="dcm-ar">مَبْنِيّ</span> on a fatḥah — this is the governor (<span class="dcm-ar">عَامِل</span>), and by nature it requires a <span class="dcm-ar">فَاعِل</span>.</span>
</div>
<div class="dcm-irab-row">
  <span class="dcm-irab-word">إِلَّا</span>
  <span class="dcm-irab-desc">Particle of exception, <span class="dcm-ar">مَبْنِيّ</span>, no locus of iʿrāb — extra, not governing.</span>
</div>
<div class="dcm-irab-row">
  <span class="dcm-irab-word">عَلِيٌّ</span>
  <span class="dcm-irab-desc"><span class="dcm-ar">فَاعِل</span> of حَضَرَ, <span class="dcm-ar">مَرْفُوع</span>, sign of <span class="dcm-ar">رَفْع</span> the visible ḍammah — علي fills the subject slot that حضر always needs, exactly as it would if إلا were absent (مَا حَضَرَ عَلِيٌّ, "ʿAlī was not present," negated and then excepted).</span>
</div>

<hr class="dcm-divider" />

<h2 class="dcm-h2"><span class="dcm-num">3</span>Case 2 — the governor requires a <span class="dcm-ar">مَفْعُول بِه</span> <span class="dcm-ar">نَصْبُ الْمَفْعُولِيَّةِ</span></h2>
<div class="dcm-sentence dcm-c2">
  <span class="dcm-ar">مَا رَأَيْتُ إِلَّا <span class="dcm-hl">عَلِيًّا</span></span>
  <span class="dcm-gloss">"I did not see except ʿAlī."</span>
</div>
<div class="dcm-irab-row">
  <span class="dcm-irab-word">مَا</span>
  <span class="dcm-irab-desc">Particle of negation, <span class="dcm-ar">مَبْنِيّ</span>, no locus of iʿrāb.</span>
</div>
<div class="dcm-irab-row">
  <span class="dcm-irab-word">رَأَيْتُ</span>
  <span class="dcm-irab-desc"><span class="dcm-ar">فِعْل مَاضٍ</span> + attached <span class="dcm-ar">فَاعِل</span> pronoun تُ ("I"), <span class="dcm-ar">مَبْنِيّ</span> on sukūn in the position of <span class="dcm-ar">رَفْع</span> — رأيت is transitive, so its governor-nature demands a <span class="dcm-ar">مَفْعُول بِه</span>.</span>
</div>
<div class="dcm-irab-row">
  <span class="dcm-irab-word">إِلَّا</span>
  <span class="dcm-irab-desc">Particle of exception, <span class="dcm-ar">مَبْنِيّ</span>, no locus of iʿrāb.</span>
</div>
<div class="dcm-irab-row">
  <span class="dcm-irab-word">عَلِيًّا</span>
  <span class="dcm-irab-desc"><span class="dcm-ar">مَفْعُول بِه</span> of رَأَيْتُ, <span class="dcm-ar">مَنْصُوب</span>, sign of <span class="dcm-ar">نَصْب</span> the visible fatḥah — علياً fills the object slot رأيت requires, exactly as it would without إلا present.</span>
</div>

<hr class="dcm-divider" />

<h2 class="dcm-h2"><span class="dcm-num">4</span>Case 3 — the governor is a preposition <span class="dcm-ar">الْجَرُّ بِحَرْفِ جَرٍّ</span></h2>
<div class="dcm-sentence dcm-c3">
  <span class="dcm-ar">مَا مَرَرْتُ إِلَّا <span class="dcm-hl">بِزَيْدٍ</span></span>
  <span class="dcm-gloss">"I did not pass except by Zayd."</span>
</div>
<div class="dcm-irab-row">
  <span class="dcm-irab-word">مَا</span>
  <span class="dcm-irab-desc">Particle of negation, <span class="dcm-ar">مَبْنِيّ</span>, no locus of iʿrāb.</span>
</div>
<div class="dcm-irab-row">
  <span class="dcm-irab-word">مَرَرْتُ</span>
  <span class="dcm-irab-desc"><span class="dcm-ar">فِعْل مَاضٍ</span> + attached <span class="dcm-ar">فَاعِل</span> pronoun تُ ("I"), <span class="dcm-ar">مَبْنِيّ</span> on sukūn in the position of <span class="dcm-ar">رَفْع</span>. مَرَّ is intransitive and takes its object via the preposition بِـ, so its governing demand here is for <span class="dcm-ar">جَرّ</span>, not <span class="dcm-ar">نَصْب</span>.</span>
</div>
<div class="dcm-irab-row">
  <span class="dcm-irab-word">إِلَّا</span>
  <span class="dcm-irab-desc">Particle of exception, <span class="dcm-ar">مَبْنِيّ</span>, no locus of iʿrāb.</span>
</div>
<div class="dcm-irab-row">
  <span class="dcm-irab-word">بِزَيْدٍ</span>
  <span class="dcm-irab-desc">بِ: particle of <span class="dcm-ar">جَرّ</span>, <span class="dcm-ar">مَبْنِيّ</span>. زَيْدٍ: <span class="dcm-ar">مَجْرُور</span> by بِ, sign of <span class="dcm-ar">جَرّ</span> the visible kasrah — the preposition بِـ is what governs زيد, entirely independent of إلا.</span>
</div>

<hr class="dcm-divider" />

<h2 class="dcm-h2"><span class="dcm-num">5</span>Summary table</h2>
<table class="dcm-table">
  <tr><th>Example</th><th>Governor (عامل)</th><th>Type of governor</th><th>Word after إلا</th><th>Case</th></tr>
  <tr><td class="dcm-td-ar">مَا حَضَرَ إِلَّا عَلِيٌّ</td><td class="dcm-td-ar">حَضَرَ</td><td>intransitive verb, needs <span class="dcm-ar">فَاعِل</span></td><td class="dcm-td-ar">عَلِيٌّ</td><td><span class="dcm-ar">مَرْفُوع</span> (ḍammah)</td></tr>
  <tr><td class="dcm-td-ar">مَا رَأَيْتُ إِلَّا عَلِيًّا</td><td class="dcm-td-ar">رَأَيْتُ</td><td>transitive verb, needs <span class="dcm-ar">مَفْعُول بِه</span></td><td class="dcm-td-ar">عَلِيًّا</td><td><span class="dcm-ar">مَنْصُوب</span> (fatḥah)</td></tr>
  <tr><td class="dcm-td-ar">مَا مَرَرْتُ إِلَّا بِزَيْدٍ</td><td class="dcm-td-ar">مَرَرْتُ بِـ</td><td>preposition (<span class="dcm-ar">جَرّ</span>)</td><td class="dcm-td-ar">بِزَيْدٍ</td><td><span class="dcm-ar">مَجْرُور</span> (kasrah)</td></tr>
</table>

<p class="dcm-callout dcm-green">
  <strong>How to apply this rule quickly:</strong> mentally strip out إلا (and the negation, if you like) and ask what the bare sentence would need — حَضَرَ عَلِيٌّ needs a <span class="dcm-ar">فَاعِل</span>, رَأَيْتُ عَلِيًّا needs a <span class="dcm-ar">مَفْعُول بِه</span>, مَرَرْتُ بِزَيْدٍ needs a <span class="dcm-ar">مَجْرُور</span> after بِـ. Whatever the plain sentence would require is exactly what the word after إلا becomes once you put the negation and إلا back in. Nothing about إلا itself changes the case here — it is the pre-existing governor (حضر / رأيت / مررت بـ) doing all the work.
</p>

<hr class="dcm-divider" />
<p class="dcm-callout dcm-blue dcm-callout--end">
  <strong>In short — the three states, side by side:</strong> when the sentence before إلا is complete and affirmative, the <span class="dcm-ar">مُسْتَثْنَى</span> is always <span class="dcm-ar">مَنْصُوب</span> (State 1). When it is complete and negative, the <span class="dcm-ar">مُسْتَثْنَى</span> may follow the <span class="dcm-ar">مُسْتَثْنَى مِنْه</span>'s own case as a <span class="dcm-ar">بَدَل</span>, or take <span class="dcm-ar">نَصْب</span>, though <span class="dcm-ar">نَصْب</span> here is rare (State 2). When it is incomplete — and therefore always negative — إلا drops out of the case-assignment picture altogether, and the word after it simply takes whatever case the sentence's real governor (a verb needing a <span class="dcm-ar">فَاعِل</span>, a transitive verb needing a <span class="dcm-ar">مَفْعُول بِه</span>, or a preposition) would assign it regardless (State 3).
</p>
`;

export default function MustathnaState3DeepdiveGuide() {
  return (
    <div
      className="damma-commentary"
      dangerouslySetInnerHTML={{ __html: MUSTATHNA_STATE3_DEEPDIVE_HTML }}
    />
  );
}

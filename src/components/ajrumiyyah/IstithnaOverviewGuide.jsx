const ISTITHNA_OVERVIEW_HTML = `
<p class="dcm-lead">
  The chapter of exception (<span class="dcm-ar">الِاسْتِثْنَاء</span>) deals with sentences where one item is deliberately pulled out of a larger group that a statement would otherwise include — "the students passed <em>except</em> ʿĀmir." Ibn Ājurrūm lists eight exception-particles; the commentary sorts them into three grammatical families before the following sections work through how each family behaves.
</p>

<h2 class="dcm-h2"><span class="dcm-num">1</span>Linguistic vs. technical meaning <span class="dcm-ar">مَعْنَى الِاسْتِثْنَاءِ لُغَةً وَاصْطِلَاحًا</span></h2>
<div class="dcm-chart">
  <div class="dcm-chart-row">
    <div class="dcm-chart-branch">
      <div class="dcm-word-entry dcm-c2">
        <div class="dcm-word-head"><span class="dcm-ar">لُغَةً</span><span style="font-size:0.72rem; color:var(--dcm-sub); text-transform:uppercase;">linguistic sense</span></div>
        <div class="dcm-word-def"><span class="dcm-ar">مُطْلَقُ الْإِخْرَاجِ</span> — "removal" in an absolute, unrestricted sense; simply taking something out of something else.</div>
      </div>
    </div>
    <div class="dcm-chart-branch">
      <div class="dcm-word-entry dcm-c1">
        <div class="dcm-word-head"><span class="dcm-ar">اصْطِلَاحًا</span><span style="font-size:0.72rem; color:var(--dcm-sub); text-transform:uppercase;">technical (grammarians') sense</span></div>
        <div class="dcm-word-def"><span class="dcm-ar">الْإِخْرَاجُ بِـ«إِلَّا» أَوْ إِحْدَى أَخَوَاتِهَا لِشَيْءٍ لَوْلَا ذَلِكَ الْإِخْرَاجُ لَكَانَ دَاخِلًا فِيمَا قَبْلَ الْأَدَاةِ</span> — removing something, using إِلَّا or one of its sister-particles, from an item that — had the removal not happened — would have been included in whatever came before the particle.</div>
      </div>
    </div>
  </div>
</div>

<div class="dcm-sentence dcm-c1">
  <span class="dcm-ar">نَجَحَ التَّلَامِيذُ <span class="dcm-hl">إِلَّا عَامِرًا</span></span>
  <span class="dcm-gloss">"The students passed, except ʿĀmir." — عَامِرًا is pulled out of the group التلاميذ. Without إلا عامرًا, عامر would automatically be understood as one of the students who passed — the exception particle is precisely what removes him from that group.</span>
</div>

<h3 class="dcm-h3">iʿrāb of the example</h3>
<div class="dcm-irab-row">
  <span class="dcm-irab-word">نَجَحَ</span>
  <span class="dcm-irab-desc"><span class="dcm-ar">فِعْل مَاضٍ</span> (past-tense verb), <span class="dcm-ar">مَبْنِيّ</span> on a fatḥah, no locus of iʿrāb.</span>
</div>
<div class="dcm-irab-row">
  <span class="dcm-irab-word">التَّلَامِيذُ</span>
  <span class="dcm-irab-desc"><span class="dcm-ar">فَاعِل</span> of نَجَحَ, <span class="dcm-ar">مَرْفُوع</span>, sign of <span class="dcm-ar">رَفْع</span> is the visible ḍammah.</span>
</div>
<div class="dcm-irab-row">
  <span class="dcm-irab-word">إِلَّا</span>
  <span class="dcm-irab-desc">Particle of exception (حَرْفُ اسْتِثْنَاء), <span class="dcm-ar">مَبْنِيّ</span>, no locus of iʿrāb.</span>
</div>
<div class="dcm-irab-row">
  <span class="dcm-irab-word">عَامِرًا</span>
  <span class="dcm-irab-desc"><span class="dcm-ar">مُسْتَثْنَى</span> (the excepted noun), <span class="dcm-ar">مَنْصُوب</span> by إلا, sign of <span class="dcm-ar">نَصْب</span> is the visible fatḥah.</span>
</div>

<hr class="dcm-divider" />

<h2 class="dcm-h2"><span class="dcm-num">2</span>The eight particles of exception <span class="dcm-ar">حُرُوفُ الِاسْتِثْنَاءِ الثَّمَانِيَة</span></h2>
<p>
  The author names eight tools that can perform this "pulling out" function — though he notes, and the commentary confirms, that these eight are not the full list available in the language; they are simply the most commonly used:
</p>
<table class="dcm-table">
  <tr><th>#</th><th>Particle</th><th>Transliteration</th></tr>
  <tr><td>1</td><td class="dcm-td-ar">إِلَّا</td><td>illā</td></tr>
  <tr><td>2</td><td class="dcm-td-ar">غَيْرُ</td><td>ghayru</td></tr>
  <tr><td>3</td><td class="dcm-td-ar">سِوَى</td><td>siwā</td></tr>
  <tr><td>4</td><td class="dcm-td-ar">سُوَى</td><td>suwā</td></tr>
  <tr><td>5</td><td class="dcm-td-ar">سَوَاءٌ</td><td>sawāʾun</td></tr>
  <tr><td>6</td><td class="dcm-td-ar">خَلَا</td><td>khalā</td></tr>
  <tr><td>7</td><td class="dcm-td-ar">عَدَا</td><td>ʿadā</td></tr>
  <tr><td>8</td><td class="dcm-td-ar">حَاشَا</td><td>ḥāshā</td></tr>
</table>
<p class="dcm-callout dcm-yellow">
  The commentary's point in listing "abundant" (كَثِيرَة) tools of exception, then narrowing to these eight, is to flag that this chapter is not exhaustive of every possible exception-word in Arabic — it is a curated set of the eight most important ones for a beginner to master, chosen because between them they illustrate all three grammatical behaviours an exception-tool can have.
</p>

<hr class="dcm-divider" />

<h2 class="dcm-h2"><span class="dcm-num">3</span>Three grammatical families <span class="dcm-ar">أَنْوَاعُ أَدَوَاتِ الِاسْتِثْنَاءِ</span></h2>
<p>
  What matters for iʿrāb is not the meaning of each particle but its <em>part of speech</em> — and here the eight split cleanly into three families:
</p>
<div class="dcm-chart">
  <div class="dcm-chart-row">
    <div class="dcm-chart-branch">
      <div class="dcm-chart-node dcm-c1">
        <span class="dcm-ar">حَرْفٌ دَائِمًا</span>
        <span class="dcm-en">always a particle</span>
        <span class="dcm-ex dcm-ar">إِلَّا</span>
      </div>
    </div>
    <div class="dcm-chart-branch">
      <div class="dcm-chart-node dcm-c2">
        <span class="dcm-ar">اسْمٌ دَائِمًا</span>
        <span class="dcm-en">always a noun</span>
        <span class="dcm-ex dcm-ar">سِوَى، سُوَى، سَوَاءٌ، غَيْرُ</span>
      </div>
    </div>
    <div class="dcm-chart-branch">
      <div class="dcm-chart-node dcm-c3">
        <span class="dcm-ar">حَرْفٌ تَارَةً وَفِعْلٌ تَارَةً أُخْرَى</span>
        <span class="dcm-en">sometimes a particle, sometimes a verb</span>
        <span class="dcm-ex dcm-ar">خَلَا، عَدَا، حَاشَا</span>
      </div>
    </div>
  </div>
</div>

<h3 class="dcm-h3">family 1 — always a particle</h3>
<div class="dcm-word-entry dcm-c1">
  <div class="dcm-word-head"><span class="dcm-word-num">1</span><span class="dcm-ar">إِلَّا</span></div>
  <div class="dcm-word-def">The default, most common exception particle — mabnī, never inflected, and never treated as a noun in any usage. Every other particle on this list is, in one sense or another, a "sister" (أُخْت) of إلا.</div>
</div>

<h3 class="dcm-h3">family 2 — always a noun (four words)</h3>
<p>
  These four are grammatically full-fledged nouns — they take case endings and can be <span class="dcm-ar">مُضَاف</span> (possessed) in a compound. The commentary is careful to distinguish them by their exact vowelling, since three of the four are built from the same root letters and differ only in the vowel on the sīn and in vowel length:
</p>
<div class="dcm-word-entry dcm-c2">
  <div class="dcm-word-head"><span class="dcm-word-num">1</span><span class="dcm-ar">سِوَى</span></div>
  <div class="dcm-word-def"><span class="dcm-pron">بِالْقَصْرِ</span><span class="dcm-pron">وَكَسْرِ السِّينِ</span> — short (qaṣr) alif, sīn vowelled with a kasrah.</div>
</div>
<div class="dcm-word-entry dcm-c2">
  <div class="dcm-word-head"><span class="dcm-word-num">2</span><span class="dcm-ar">سُوَى</span></div>
  <div class="dcm-word-def"><span class="dcm-pron">بِالْقَصْرِ</span><span class="dcm-pron">وَضَمِّ السِّينِ</span> — short (qaṣr) alif, sīn vowelled with a ḍammah.</div>
</div>
<div class="dcm-word-entry dcm-c2">
  <div class="dcm-word-head"><span class="dcm-word-num">3</span><span class="dcm-ar">سَوَاءٌ</span></div>
  <div class="dcm-word-def"><span class="dcm-pron">بِالْمَدِّ</span><span class="dcm-pron">وَفَتْحِ السِّينِ</span> — long (madd) alif ending in a hamzah, sīn vowelled with a fatḥah.</div>
</div>
<div class="dcm-word-entry dcm-c2">
  <div class="dcm-word-head"><span class="dcm-word-num">4</span><span class="dcm-ar">غَيْرُ</span></div>
  <div class="dcm-word-def">An ordinary triliteral noun (no special vowelling note given) — behaves grammatically the same way as the three سوى-family words: it takes the <span class="dcm-ar">مُسْتَثْنَى</span> as a <span class="dcm-ar">مُضَاف إِلَيْه</span> (possessed-to noun) after it.</div>
</div>
<table class="dcm-table">
  <tr><th>Word</th><th>Alif length</th><th>Sīn vowel</th></tr>
  <tr><td class="dcm-td-ar">سِوَى</td><td>qaṣr (short)</td><td>kasrah</td></tr>
  <tr><td class="dcm-td-ar">سُوَى</td><td>qaṣr (short)</td><td>ḍammah</td></tr>
  <tr><td class="dcm-td-ar">سَوَاءٌ</td><td>madd (long, with hamzah)</td><td>fatḥah</td></tr>
</table>

<h3 class="dcm-h3">family 3 — particle at times, verb at other times</h3>
<div class="dcm-chart">
  <div class="dcm-chart-row" style="max-width:600px; margin:0 auto;">
    <div class="dcm-chart-branch"><div class="dcm-chart-node dcm-c3"><span class="dcm-ar">خَلَا</span><span class="dcm-en">"apart from" / "he was free of"</span></div></div>
    <div class="dcm-chart-branch"><div class="dcm-chart-node dcm-c3"><span class="dcm-ar">عَدَا</span><span class="dcm-en">"apart from" / "he went beyond"</span></div></div>
    <div class="dcm-chart-branch"><div class="dcm-chart-node dcm-c3"><span class="dcm-ar">حَاشَا</span><span class="dcm-en">"apart from" / "he excluded"</span></div></div>
  </div>
</div>
<p>
  These three are the trickiest of the eight: depending on how a sentence is built, each one can function either as an exception particle (with the noun after it <span class="dcm-ar">مَنْصُوب</span> as <span class="dcm-ar">مُسْتَثْنَى</span>) or as a genuine past-tense verb (with the noun after it as its <span class="dcm-ar">مَنْصُوب مَفْعُول بِه</span>) — the iʿrāb outcome looks identical on the surface, but the grammatical analysis behind it differs. Because the author covers this dual behaviour in detail in the sections that follow, this chapter's role is only to flag that خلا، عدا، and حاشا are the three words carrying this dual particle/verb identity.
</p>

<hr class="dcm-divider" />
<p class="dcm-callout dcm-green dcm-callout--end">
  <strong>In short:</strong> istithnāʾ means pulling one item out of a group a statement would otherwise cover, using إلا or one of seven "sister" tools. Of those eight, إلا alone is always a pure particle; غير، سوى، سُوى، and سواء are always full nouns (differing from each other only in the vowelling of the sīn and the length of the alif); and خلا، عدا، and حاشا are the flexible three — sometimes particles, sometimes ordinary past-tense verbs, depending on context.
</p>
`;

export default function IstithnaOverviewGuide() {
  return (
    <div
      className="damma-commentary"
      dangerouslySetInnerHTML={{ __html: ISTITHNA_OVERVIEW_HTML }}
    />
  );
}

const FATHA_KASRAH_HTML = `
<p class="dcm-lead">
    This is the last "stand-in" sign for kasrah, and it finally explains the exception flagged back in the "kasrah and its positions" chapter: <span class="dcm-example">أَحْمَدَ</span> and <span class="dcm-example">مَسَاجِدَ</span> weren't typos — they belong to a whole category of nouns, called <span class="dcm-ar">الِاسْمُ الَّذِي لَا يَنْصَرِفُ</span> ("the noun that does not accept ṣarf"), or <span class="dcm-ar">مَمْنُوع مِنَ الصَّرْف</span>, which take a fatḥah in khafḍ instead of a kasrah.
  </p>

  <!-- ============ OVERVIEW ============ -->
  <div class="dcm-chart">
    <div class="dcm-chart-root-row">
      <div class="dcm-chart-root">
        <span class="dcm-ar">اَلْفَتْحَةُ</span>
        <span class="dcm-en">stands in for kasrah — one position only</span>
      </div>
    </div>
    <div class="dcm-chart-stem"></div>
    <div class="dcm-chart-row">
      <div class="dcm-chart-branch">
        <div class="dcm-chart-branch-stem"></div>
        <div class="dcm-chart-node dcm-c1">
          <span class="dcm-ar">الِاسْمُ الَّذِي لَا يَنْصَرِفُ</span>
          <span class="dcm-en">the <span class="dcm-ar">مَمْنُوع مِنَ الصَّرْف</span> noun</span>
          <span class="dcm-ex dcm-ar">إِبْرَاهِيمَ</span>
        </div>
      </div>
    </div>
  </div>

  <h2 class="dcm-h2"><span class="dcm-num">1</span>What makes a noun a <span class="dcm-ar">مَمْنُوع مِنَ الصَّرْف</span>? <span class="dcm-ar">مَعْنَى لَا يَنْصَرِفُ</span></h2>
  <p>
    A <span class="dcm-ar">مَمْنُوع مِنَ الصَّرْف</span> is a noun that "resembles a verb" grammatically — verbs never take tanwīn or a kasrah either — and that resemblance is triggered in one of two ways:
  </p>

  <div class="dcm-chart">
    <div class="dcm-chart-row">
      <div class="dcm-chart-branch dcm-chart-branch--wide">
        <div class="dcm-chart-node dcm-c1">
          <span class="dcm-ar">عِلَّتَانِ فَرْعِيَّتَانِ</span>
          <span class="dcm-en">two subsidiary causes together</span>
          <span class="dcm-ex dcm-small">one from meaning + one from word-form</span>
        </div>
      </div>
      <div class="dcm-chart-branch dcm-chart-branch--wide">
        <div class="dcm-chart-node dcm-c5">
          <span class="dcm-ar">عِلَّةٌ وَاحِدَةٌ تَقُومُ مَقَامَ عِلَّتَيْنِ</span>
          <span class="dcm-en">one cause that counts as two, alone</span>
          <span class="dcm-ex dcm-small">no meaning-cause required</span>
        </div>
      </div>
    </div>
  </div>

  <h2 class="dcm-h2"><span class="dcm-num">2</span>Path one — two causes together <span class="dcm-ar">عِلَّتَانِ</span></h2>
  <p>
    This path needs exactly one cause from <em>meaning</em>, plus one from <em>word-form</em>. The meaning side only ever has two options:
  </p>

  <div class="dcm-matrix">
    <div class="dcm-matrix-col dcm-c1">
      <span class="dcm-mtitle">meaning-cause 1</span>
      <span class="dcm-ar">اَلْعَلَمِيَّةُ</span>
      <span class="dcm-muted">being a proper noun</span>
    </div>
    <div class="dcm-matrix-col dcm-c1">
      <span class="dcm-mtitle">meaning-cause 2</span>
      <span class="dcm-ar">اَلْوَصْفِيَّةُ</span>
      <span class="dcm-muted">being a descriptive/adjectival noun</span>
    </div>
  </div>

  <p>
    The word-form side has six possible causes — but not every combination is allowed. With <span class="dcm-ar">عَلَمِيَّة</span> (proper noun), any of the six can pair with it. With <span class="dcm-ar">وَصْفِيَّة</span> (descriptive noun), only three of the six are ever found in practice.
  </p>

  <div class="dcm-chart">
    <table class="dcm-table">
      <tr><th>Word-form cause</th><th>Pairs with عَلَمِيَّة?</th><th>Pairs with وَصْفِيَّة?</th></tr>
      <tr><td>1. تَأْنِيث بِغَيْرِ أَلِفٍ — feminine without alif</td><td class="dcm-td-center">✓</td><td class="dcm-td-center">—</td></tr>
      <tr><td>2. عُجْمَة — non-Arabic origin</td><td class="dcm-td-center">✓</td><td class="dcm-td-center">—</td></tr>
      <tr><td>3. تَرْكِيب — compound name</td><td class="dcm-td-center">✓</td><td class="dcm-td-center">—</td></tr>
      <tr><td>4. زِيَادَةُ أَلِفٍ وَنُونٍ — extra alif+nūn</td><td class="dcm-td-center">✓</td><td class="dcm-td-center">✓</td></tr>
      <tr><td>5. وَزْنُ الْفِعْلِ — verb-pattern</td><td class="dcm-td-center">✓</td><td class="dcm-td-center">✓</td></tr>
      <tr><td>6. عَدْل — deviation from another pattern</td><td class="dcm-td-center">✓</td><td class="dcm-td-center">✓</td></tr>
    </table>
  </div>

  <h3 class="dcm-h3">every example — عَلَمِيَّة combinations</h3>
  <table class="dcm-table">
    <tr><th>Combined with</th><th>Examples</th></tr>
    <tr><td>تأنيث بغير ألف</td><td class="dcm-td-ar">فَاطِمَةُ، زَيْنَبُ، حَمْزَةُ</td></tr>
    <tr><td>عُجْمَة</td><td class="dcm-td-ar">إِدْرِيسُ، يَعْقُوبُ، إِبْرَاهِيمُ</td></tr>
    <tr><td>تَرْكِيب</td><td class="dcm-td-ar">مَعْدِيَكَرِبُ، بَعْلَبَكُّ، قَاضِيخَانُ، بُزُرْجَمِهْرُ، رَامَهُرْمُزُ</td></tr>
    <tr><td>زيادة ألف ونون</td><td class="dcm-td-ar">مَرْوَانُ، عُثْمَانُ، غَطَفَانُ، عَفَّانُ، سَحْبَانُ، سُفْيَانُ، عُمْرَانُ، قَحْطَانُ، عَدْنَانُ</td></tr>
    <tr><td>وزن الفعل</td><td class="dcm-td-ar">أَحْمَدُ، يَشْكُرُ، يَزِيدُ، تَغْلِبُ، تَدْمُرُ</td></tr>
    <tr><td>عَدْل</td><td class="dcm-td-ar">عُمَرُ، زُفَرُ، قُتَمُ، هُبَلُ، زُحَلُ، جُمَحُ، قُزَحُ، مُضَرُ، دُلَفُ، بُلَعُ، هُذَلُ، ثُعَلُ، جُشَمُ، عُصَمُ، جُحَا</td></tr>
  </table>

  <h3 class="dcm-h3">every example — وَصْفِيَّة combinations</h3>
  <table class="dcm-table">
    <tr><th>Combined with</th><th>Examples</th></tr>
    <tr><td>زيادة ألف ونون</td><td class="dcm-td-ar">رَيَّانُ، شَبْعَانُ، يَقْظَانُ</td></tr>
    <tr><td>وزن الفعل</td><td class="dcm-td-ar">أَكْرَمُ، أَفْضَلُ، أَجْمَلُ</td></tr>
    <tr><td>عَدْل</td><td class="dcm-td-ar">مَثْنَى، ثُلَاثَ، رُبَاعَ، أُخَرُ</td></tr>
  </table>

  <h2 class="dcm-h2"><span class="dcm-num">3</span>Path two — one cause standing in for two <span class="dcm-ar">عِلَّةٌ تَقُومُ مَقَامَ عِلَّتَيْنِ</span></h2>
  <p>
    Two specific causes are strong enough that either one, by itself — with no need for a meaning-cause at all — is sufficient to make a noun <span class="dcm-ar">مَمْنُوع مِنَ الصَّرْف</span>:
  </p>

  <div class="dcm-chart">
    <div class="dcm-chart-row">
      <div class="dcm-chart-branch dcm-chart-branch--wide">
        <div class="dcm-chart-node dcm-c2">
          <span class="dcm-ar">صِيغَةُ مُنْتَهَى الْجُمُوعِ</span>
          <span class="dcm-en">the "farthest plural" pattern</span>
        </div>
      </div>
      <div class="dcm-chart-branch dcm-chart-branch--wide">
        <div class="dcm-chart-node dcm-c3">
          <span class="dcm-ar">أَلِفُ التَّأْنِيثِ</span>
          <span class="dcm-en">the feminine alif — maqṣūrah or mamdūdah</span>
        </div>
      </div>
    </div>
  </div>

  <p>
    <strong>Ṣīghat muntahā al-jumūʿ</strong> — any broken plural with either two letters after the "breaking" alif, or three letters with a sukūn in the middle:
  </p>
  <table class="dcm-table">
    <tr><th>Pattern</th><th>Examples</th></tr>
    <tr><td>2 letters after the alif</td><td class="dcm-td-ar">مَسَاجِدَ، مَنَابِرَ، أَفَاضِلَ، أَمَاجِدَ، أَمَاثِلَ، حَوَائِضَ، طَوَامِثَ</td></tr>
    <tr><td>3 letters, middle sākin</td><td class="dcm-td-ar">مَفَاتِيحَ، عَصَافِيرَ، قَنَادِيلَ</td></tr>
  </table>

  <p>
    <strong>Alif al-taʾnīth</strong> — the feminine alif, in either of its two forms:
  </p>
  <table class="dcm-table">
    <tr><th>Form</th><th>Examples</th></tr>
    <tr><td>مَقْصُورَة (short, written ى)</td><td class="dcm-td-ar">حُبْلَى، قُصْوَى، دُنْيَا، دَعْوَى</td></tr>
    <tr><td>مَمْدُودَة (extended, written اء)</td><td class="dcm-td-ar">حَمْرَاءَ، دَعْجَاءَ، حَسْنَاءَ، بَيْضَاءَ، كَحْلَاءَ، نَافِقَاءَ، أَصْدِقَاءَ، عُلَمَاءَ</td></tr>
  </table>

  <h2 class="dcm-h2"><span class="dcm-num">4</span>The niyāba rule itself — fatḥah for kasrah <span class="dcm-ar">الْخَفْضُ بِالْفَتْحَةِ</span></h2>
  <p>
    None of these nouns accept tanwīn, and every one of them is makhfūḍ with a fatḥah rather than a kasrah:
  </p>

  <div class="dcm-sentence dcm-c1">
    <span class="dcm-tag dcm-tag--alif"><span class="dcm-ar">مَمْنُوع مِنَ الصَّرْف</span> — عَلَمِيَّة + عُجْمَة</span>
    <span class="dcm-ar">صَلَّى اللَّهُ عَلَى <span class="dcm-hl">إِبْرَاهِيمَ</span> خَلِيلِهِ</span>
    <span class="dcm-gloss">"May Allah send blessings upon Ibrāhīm, His close friend."</span>
    <div class="dcm-note">إِبْرَاهِيمَ — makhfūḍ by عَلَى; sign of khafḍ: فتحة نيابةً عن الكسرة; <span class="dcm-ar">مَمْنُوع مِنَ الصَّرْف</span> because: عَلَمِيَّة (proper noun) + عُجْمَة (non-Arab origin)</div>
  </div>
  <div class="dcm-sentence dcm-c1">
    <span class="dcm-tag dcm-tag--alif"><span class="dcm-ar">مَمْنُوع مِنَ الصَّرْف</span> — عَلَمِيَّة + عَدْل</span>
    <span class="dcm-ar">رَضِيَ اللَّهُ عَنْ <span class="dcm-hl">عُمَرَ</span> أَمِيرِ الْمُؤْمِنِينَ</span>
    <span class="dcm-gloss">"May Allah be pleased with ʿUmar, the leader of the believers."</span>
    <div class="dcm-note">عُمَرَ — makhfūḍ by عَنْ; sign of khafḍ: فتحة نيابةً عن الكسرة; <span class="dcm-ar">مَمْنُوع مِنَ الصَّرْف</span> because: عَلَمِيَّة (proper noun) + عَدْل (deviation — from عَامِر)</div>
  </div>

  <h2 class="dcm-h2"><span class="dcm-num">5</span>The exception to the exception — أَل or إِضَافَة restores the kasrah <span class="dcm-ar">شَرْطُ الْخَفْضِ بِالْفَتْحَةِ</span></h2>
  <p>
    Fatḥah only replaces kasrah on a <span class="dcm-ar">مَمْنُوع مِنَ الصَّرْف</span> noun under two conditions: it must be free of the definite article <span class="dcm-ar">أَل</span>, and it must not be the first term of a possessive compound (<span class="dcm-ar">مُضَاف</span>). Break either condition, and the noun simply reverts to an ordinary kasrah — despite still being <span class="dcm-ar">مَمْنُوع مِنَ الصَّرْف</span>.
  </p>

  <div class="dcm-cond-row">
    <div class="dcm-cond-card dcm-c4">
      <span class="dcm-cond-title">no أل, not مضاف</span>
      <span class="dcm-ar">فَتْحَة</span>
    </div>
    <div class="dcm-cond-card dcm-c3">
      <span class="dcm-cond-title">has أل, or is مضاف</span>
      <span class="dcm-ar">كَسْرَة (normal)</span>
    </div>
  </div>

  <div class="dcm-sentence dcm-c3">
    <span class="dcm-tag dcm-tag--ya">has أَل → back to kasrah</span>
    <span class="dcm-ar">وَأَنْتُمْ عَاكِفُونَ فِي الْ<span class="dcm-hl">مَسَاجِدِ</span></span>
    <span class="dcm-gloss">"While you are staying for worship in the masjids." — al-Baqarah 2:187</span>
    <div class="dcm-note">مَسَاجِدِ is <span class="dcm-ar">مَمْنُوع مِنَ الصَّرْف</span> (ṣīghat muntahā al-jumūʿ) but carries أَل here, so it's khafḍ by an ordinary kasrah, not fatḥah</div>
  </div>
  <div class="dcm-sentence dcm-c3">
    <span class="dcm-tag dcm-tag--ya">is مضاف → back to kasrah</span>
    <span class="dcm-ar">مَرَرْتُ بِ<span class="dcm-hl">حَسْنَاءَ</span> قُرَيْشٍ</span>
    <span class="dcm-gloss">"I passed by the beautiful woman of Quraysh."</span>
    <div class="dcm-note">حَسْنَاءَ is <span class="dcm-ar">مَمْنُوع مِنَ الصَّرْف</span> (alif mamdūdah) but is مُضَاف (to قُرَيْشٍ) here, so it's khafḍ by an ordinary kasrah</div>
  </div>

  <hr class="dcm-divider" />
  <p class="dcm-callout dcm-green dcm-callout--end">
    <strong>In short:</strong> a <span class="dcm-ar">مَمْنُوع مِنَ الصَّرْف</span> noun is one that resembles a verb, either through two subsidiary causes together (one from meaning — عَلَمِيَّة or وَصْفِيَّة — plus one from word-form) or through one especially strong cause alone (ṣīghat muntahā al-jumūʿ, or the feminine alif). Every <span class="dcm-ar">مَمْنُوع مِنَ الصَّرْف</span> drops its tanwīn, and in khafḍ takes a fatḥah in place of a kasrah — <em>unless</em> it picks up أَل or becomes مُضَاف, in which case the ordinary kasrah returns.
  </p>
`;

export default function FathaKasrahGuide() {
  return (
    <div
      className="damma-commentary"
      dangerouslySetInnerHTML={{ __html: FATHA_KASRAH_HTML }}
    />
  );
}

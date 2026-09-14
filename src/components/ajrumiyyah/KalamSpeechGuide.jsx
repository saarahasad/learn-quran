const KALAM_SPEECH_HTML = `
<p class="dcm-lead">
  Before naming اسم، فعل، and حرف, the matn defines <em>speech itself</em>.
  Grammatical <span class="dcm-ar">كَلَام</span> is not every useful signal — it is a spoken Arabic compound that finishes the listener's expectation.
</p>

<div class="dcm-chart">
  <div class="dcm-chart-root-row">
    <div class="dcm-chart-root">
      <span class="dcm-ar">الْكَلَامُ</span>
      <span class="dcm-en">two meanings — then four conditions</span>
    </div>
  </div>
  <div class="dcm-chart-stem"></div>
  <div class="dcm-chart-hline-wrap"><div class="dcm-chart-hline"></div></div>
  <div class="dcm-chart-row">
    <div class="dcm-chart-branch">
      <div class="dcm-chart-branch-stem"></div>
      <div class="dcm-chart-node dcm-c1">
        <span class="dcm-ar">لُغَوِيٌّ</span>
        <span class="dcm-en">any useful expression</span>
        <span class="dcm-ex">speech · writing · gesture</span>
      </div>
    </div>
    <div class="dcm-chart-branch dcm-chart-branch--wide">
      <div class="dcm-chart-branch-stem"></div>
      <div class="dcm-chart-node dcm-c2">
        <span class="dcm-ar">نَحْوِيٌّ</span>
        <span class="dcm-en">must gather four traits</span>
        <span class="dcm-ex dcm-ar">لَفْظ · مُرَكَّب · مُفِيد · وَضْع عَرَبِيّ</span>
      </div>
    </div>
  </div>
</div>

<p>
  Linguistically, كَلَام is whatever brings benefit — even writing or a gesture.
  For the grammarians, only the technical definition counts. The matn packs it into one line:
</p>

<div class="dcm-sentence dcm-c2">
  <span class="dcm-tag dcm-tag--alif">matn definition</span>
  <span class="dcm-ar">الْكَلَامُ هُوَ اللَّفْظُ الْمُرَكَّبُ الْمُفِيدُ بِالْوَضْعِ</span>
  <span class="dcm-gloss">Speech is the composed utterance that is beneficial and conforms to Arabic convention.</span>
</div>

<!-- ============ FOUR CONDITIONS ============ -->
<h2 class="dcm-h2"><span class="dcm-num">1</span>Four conditions — all required <span class="dcm-ar">أَرْبَعَةُ أُمُورٍ</span></h2>

<div class="dcm-cause-row">
  <div class="dcm-cause-card dcm-c1">
    <span class="dcm-cause-ar">١ · لَفْظ</span>
    <span class="dcm-cause-en">spoken sound from Arabic letters</span>
  </div>
  <div class="dcm-cause-card dcm-c2">
    <span class="dcm-cause-ar">٢ · مُرَكَّب</span>
    <span class="dcm-cause-en">two words or more (or estimated)</span>
  </div>
  <div class="dcm-cause-card dcm-c3">
    <span class="dcm-cause-ar">٣ · مُفِيد</span>
    <span class="dcm-cause-en">listener need not wait for more</span>
  </div>
  <div class="dcm-cause-card dcm-c4">
    <span class="dcm-cause-ar">٤ · بِالْوَضْعِ</span>
    <span class="dcm-cause-en">Arabic words, used intentionally</span>
  </div>
</div>

<p class="dcm-callout dcm-yellow">
  <strong>All four together.</strong> Drop any one and the grammarians no longer call it كَلَام.
</p>

<!-- ============ LAFZ ============ -->
<h2 class="dcm-h2"><span class="dcm-num">2</span>It must be uttered <span class="dcm-ar">لَفْظًا</span></h2>
<p>
  لَفْظ means a sound made from letters of the alphabet (ألف → ياء).
  Pointing, writing, or signing may be “speech” for linguists — not for naḥw.
</p>

<div class="dcm-parse-row">
  <div class="dcm-parse-chip dcm-c1">
    <span class="dcm-ar">أَحْمَدُ</span>
    <span class="dcm-role">لَفْظ — four letters voiced</span>
  </div>
  <div class="dcm-parse-chip dcm-c1">
    <span class="dcm-ar">يَكْتُبُ</span>
    <span class="dcm-role">لَفْظ — sound of letters</span>
  </div>
  <div class="dcm-parse-chip dcm-c1">
    <span class="dcm-ar">سَعِيدٌ</span>
    <span class="dcm-role">لَفْظ — sound of letters</span>
  </div>
</div>

<div class="dcm-flip">
  <div class="dcm-flip-box dcm-c1">
    <span class="dcm-ar">إِشَارَة</span>
    <span class="dcm-en">linguists: may call it كلام</span>
  </div>
  <div class="dcm-flip-arrow">≠</div>
  <div class="dcm-flip-box dcm-c4">
    <span class="dcm-ar">لَيْسَ كَلَامًا نَحْوِيًّا</span>
    <span class="dcm-en">no voiced Arabic letters</span>
  </div>
</div>

<!-- ============ MURAKKAB ============ -->
<h2 class="dcm-h2"><span class="dcm-num">3</span>Two words or more <span class="dcm-ar">مُرَكَّبًا</span></h2>
<p>
  A single word alone is not كلام. Composition may be heard in speech, or estimated when context supplies the rest.
</p>

<div class="dcm-sentence dcm-c2">
  <span class="dcm-tag dcm-tag--waw">مُرَكَّب · two words</span>
  <span class="dcm-ar"><span class="dcm-hl">مُحَمَّدٌ مُسَافِرٌ</span></span>
  <span class="dcm-gloss">"Muḥammad is a traveller."</span>
</div>
<div class="dcm-sentence dcm-c2">
  <span class="dcm-tag dcm-tag--waw">مُرَكَّب · two words</span>
  <span class="dcm-ar"><span class="dcm-hl">الْعِلْمُ نَافِعٌ</span></span>
  <span class="dcm-gloss">"Knowledge is beneficial."</span>
</div>
<div class="dcm-sentence dcm-c2">
  <span class="dcm-tag dcm-tag--waw">مُرَكَّب · longer</span>
  <span class="dcm-ar"><span class="dcm-hl">يَبْلُغُ الْمُجْتَهِدُ الْمَجْدَ</span></span>
  <span class="dcm-gloss">"The hard worker attains glory."</span>
</div>
<div class="dcm-sentence dcm-c2">
  <span class="dcm-tag dcm-tag--waw">مُرَكَّب · longer</span>
  <span class="dcm-ar"><span class="dcm-hl">لِكُلِّ مُجْتَهِدٍ نَصِيبٌ</span></span>
  <span class="dcm-gloss">"For every hard worker is a share."</span>
</div>
<div class="dcm-sentence dcm-c2">
  <span class="dcm-tag dcm-tag--waw">مُرَكَّب · longer</span>
  <span class="dcm-ar"><span class="dcm-hl">الْعِلْمُ خَيْرُ مَا تَسْعَى إِلَيْهِ</span></span>
  <span class="dcm-gloss">"Knowledge is the best of what you pursue."</span>
</div>

<h3 class="dcm-h3">Estimated composition <span class="dcm-ar">تَقْدِيرًا</span></h3>
<p>
  One heard word can still be كلام if other words are understood:
</p>

<div class="dcm-flip">
  <div class="dcm-flip-box dcm-c3">
    <span class="dcm-ar">مَنْ أَخُوكَ؟</span>
    <span class="dcm-en">question</span>
  </div>
  <div class="dcm-flip-arrow">→</div>
  <div class="dcm-flip-box dcm-c1">
    <span class="dcm-ar">مُحَمَّدٌ</span>
    <span class="dcm-en">heard as one word</span>
  </div>
  <div class="dcm-flip-arrow">=</div>
  <div class="dcm-flip-box dcm-c2">
    <span class="dcm-ar">مُحَمَّدٌ أَخِي</span>
    <span class="dcm-en">estimated: three words</span>
  </div>
</div>

<!-- ============ MUFID ============ -->
<h2 class="dcm-h2"><span class="dcm-num">4</span>The listener can stop <span class="dcm-ar">مُفِيدًا</span></h2>
<p>
  Benefit means the speaker may fall silent and the hearer is not left waiting.
  A compound that hangs open is not كلام.
</p>

<div class="dcm-flip">
  <div class="dcm-flip-box dcm-c4">
    <span class="dcm-ar">إِذَا حَضَرَ الْأُسْتَاذُ</span>
    <span class="dcm-en">not كلام — hearer waits</span>
  </div>
  <div class="dcm-flip-arrow">→</div>
  <div class="dcm-flip-box dcm-c1">
    <span class="dcm-ar">إِذَا حَضَرَ الْأُسْتَاذُ أَنْصَتَ التَّلَامِيذُ</span>
    <span class="dcm-en">كلام — benefit complete</span>
  </div>
</div>

<p class="dcm-callout dcm-yellow">
  <strong>Three words is not enough</strong> if the sense is unfinished. Composition without benefit fails the test.
</p>

<!-- ============ WAD ============ -->
<h2 class="dcm-h2"><span class="dcm-num">5</span>Arabic convention <span class="dcm-ar">بِالْوَضْعِ الْعَرَبِيِّ</span></h2>
<p>
  The words must be ones the Arabs placed for meanings.
  Persian, Turkish, Berber, or European strings may be “speech” elsewhere — not in ʿilm al-naḥw.
</p>

<div class="dcm-sentence dcm-c3">
  <span class="dcm-tag dcm-tag--ya">Arabic وضع</span>
  <span class="dcm-ar"><span class="dcm-hl">حَضَرَ مُحَمَّدٌ</span></span>
  <span class="dcm-gloss">حَضَرَ = past presence; مُحَمَّدٌ = the named person — both Arabic placements.</span>
</div>

<p class="dcm-callout dcm-green">
  Ibn ʿUthaymīn also stresses <em>intentional</em> use: the words of the sleeping, intoxicated, or delirious are not counted as كلام.
</p>

<!-- ============ EXAMPLES GOOD ============ -->
<h2 class="dcm-h2"><span class="dcm-num">6</span>Examples that fulfil all four <span class="dcm-ar">أَمْثِلَةٌ مُسْتَوْفِيَةٌ</span></h2>

<div class="dcm-parse-row">
  <div class="dcm-parse-chip dcm-c1"><span class="dcm-ar">الْجَوُّ صَحْوٌ</span><span class="dcm-role">The weather is clear</span></div>
  <div class="dcm-parse-chip dcm-c1"><span class="dcm-ar">الْبُسْتَانُ مُثْمِرٌ</span><span class="dcm-role">The orchard is fruitful</span></div>
  <div class="dcm-parse-chip dcm-c1"><span class="dcm-ar">الْهِلَالُ سَاطِعٌ</span><span class="dcm-role">The crescent is shining</span></div>
  <div class="dcm-parse-chip dcm-c1"><span class="dcm-ar">السَّمَاءُ صَافِيَةٌ</span><span class="dcm-role">The sky is clear</span></div>
  <div class="dcm-parse-chip dcm-c2"><span class="dcm-ar">يُضِيءُ الْقَمَرُ لَيْلًا</span><span class="dcm-role">The moon lights the night</span></div>
  <div class="dcm-parse-chip dcm-c2"><span class="dcm-ar">يَنْجَحُ الْمُجْتَهِدُ</span><span class="dcm-role">The hard worker succeeds</span></div>
  <div class="dcm-parse-chip dcm-c2"><span class="dcm-ar">لَا يُفْلِحُ الْكَسُولُ</span><span class="dcm-role">The lazy will not succeed</span></div>
  <div class="dcm-parse-chip dcm-c3"><span class="dcm-ar">لَا إِلَٰهَ إِلَّا اللَّهُ</span><span class="dcm-role">full benefit · Arabic</span></div>
  <div class="dcm-parse-chip dcm-c3"><span class="dcm-ar">مُحَمَّدٌ صَفْوَةُ الْمُرْسَلِينَ</span><span class="dcm-role">Muḥammad ﷺ — elite of the messengers</span></div>
  <div class="dcm-parse-chip dcm-c3"><span class="dcm-ar">اللَّهُ رَبُّنَا</span><span class="dcm-role">Allāh is our Lord</span></div>
  <div class="dcm-parse-chip dcm-c3"><span class="dcm-ar">مُحَمَّدٌ نَبِيُّنَا</span><span class="dcm-role">Muḥammad ﷺ is our Prophet</span></div>
</div>

<!-- ============ COUNTEREXAMPLES ============ -->
<h2 class="dcm-h2"><span class="dcm-num">7</span>What fails — and why</h2>

<div class="dcm-chart">
  <h3 class="dcm-h3">singular words — not مُرَكَّب</h3>
  <div class="dcm-parse-row">
    <div class="dcm-parse-chip dcm-c4"><span class="dcm-ar">مُحَمَّدٌ</span><span class="dcm-role">مفرد</span></div>
    <div class="dcm-parse-chip dcm-c4"><span class="dcm-ar">عَلِيٌّ</span><span class="dcm-role">مفرد</span></div>
    <div class="dcm-parse-chip dcm-c4"><span class="dcm-ar">إِبْرَاهِيمُ</span><span class="dcm-role">مفرد</span></div>
    <div class="dcm-parse-chip dcm-c4"><span class="dcm-ar">قَامَ</span><span class="dcm-role">مفرد</span></div>
    <div class="dcm-parse-chip dcm-c4"><span class="dcm-ar">مِنْ</span><span class="dcm-role">مفرد</span></div>
  </div>
</div>

<div class="dcm-chart">
  <h3 class="dcm-h3">compound but not مُفِيد</h3>
  <div class="dcm-parse-row">
    <div class="dcm-parse-chip dcm-c4"><span class="dcm-ar">مَدِينَةُ الْإِسْكَنْدَرِيَّةِ</span><span class="dcm-role">idāfah — incomplete as speech</span></div>
    <div class="dcm-parse-chip dcm-c4"><span class="dcm-ar">عَبْدُ اللَّهِ</span><span class="dcm-role">name phrase alone</span></div>
    <div class="dcm-parse-chip dcm-c4"><span class="dcm-ar">حَضْرَمَوْتُ</span><span class="dcm-role">compound name</span></div>
    <div class="dcm-parse-chip dcm-c4"><span class="dcm-ar">لَوْ أَنْصَفَ النَّاسُ</span><span class="dcm-role">conditional hanging</span></div>
    <div class="dcm-parse-chip dcm-c4"><span class="dcm-ar">إِذَا جَاءَ الشِّتَاءُ</span><span class="dcm-role">hearer waits</span></div>
    <div class="dcm-parse-chip dcm-c4"><span class="dcm-ar">مَهْمَا أَخْفَى الْمُرَائِي</span><span class="dcm-role">incomplete</span></div>
    <div class="dcm-parse-chip dcm-c4"><span class="dcm-ar">أَنْ طَلَعَتِ الشَّمْسُ</span><span class="dcm-role">incomplete</span></div>
  </div>
</div>

<div class="dcm-chart">
  <h3 class="dcm-h3">checklist</h3>
  <table class="dcm-table">
    <tr><th>Condition</th><th>Means</th><th>Fails if…</th></tr>
    <tr><td class="dcm-td-ar">لَفْظ</td><td>voiced Arabic letters</td><td>gesture / writing alone</td></tr>
    <tr><td class="dcm-td-ar">مُرَكَّب</td><td>≥ 2 words (heard or estimated)</td><td>isolated مُحَمَّدٌ with no context</td></tr>
    <tr><td class="dcm-td-ar">مُفِيد</td><td>silence is acceptable</td><td>إِذَا حَضَرَ الْأُسْتَاذُ</td></tr>
    <tr><td class="dcm-td-ar">وَضْع عَرَبِيّ</td><td>Arabic intentional lexis</td><td>non-Arabic / non-intentional</td></tr>
  </table>
</div>

<hr class="dcm-divider" />
<p class="dcm-callout dcm-green dcm-callout--end">
  <strong>In short:</strong> grammatical كلام = لَفْظ + مُرَكَّب + مُفِيد + Arabic وَضْع.
  Next: how every Arabic word falls into اسم، فعل، or حرف.
</p>
`;

export default function KalamSpeechGuide() {
  return (
    <div
      className="damma-commentary"
      dangerouslySetInnerHTML={{ __html: KALAM_SPEECH_HTML }}
    />
  );
}

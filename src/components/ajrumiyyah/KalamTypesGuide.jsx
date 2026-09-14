const KALAM_TYPES_HTML = `
<p class="dcm-lead">
  Once كلام is defined, the matn names its parts.
  Strictly, this is a division of <em>words</em> (<span class="dcm-ar">كَلِمَة</span>), not of full speech-acts — every Arabic word you speak, read, or write is one of three.
</p>

<div class="dcm-chart">
  <div class="dcm-chart-root-row">
    <div class="dcm-chart-root">
      <span class="dcm-ar">أَنْوَاعُ الْكَلَامِ</span>
      <span class="dcm-en">three kinds of word — no fourth</span>
    </div>
  </div>
  <div class="dcm-chart-stem"></div>
  <div class="dcm-chart-hline-wrap"><div class="dcm-chart-hline"></div></div>
  <div class="dcm-chart-row">
    <div class="dcm-chart-branch">
      <div class="dcm-chart-branch-stem"></div>
      <div class="dcm-chart-node dcm-c1">
        <span class="dcm-ar">اِسْم</span>
        <span class="dcm-en">meaning in itself · no tense</span>
      </div>
    </div>
    <div class="dcm-chart-branch">
      <div class="dcm-chart-branch-stem"></div>
      <div class="dcm-chart-node dcm-c2">
        <span class="dcm-ar">فِعْل</span>
        <span class="dcm-en">meaning in itself · with tense</span>
      </div>
    </div>
    <div class="dcm-chart-branch">
      <div class="dcm-chart-branch-stem"></div>
      <div class="dcm-chart-node dcm-c3">
        <span class="dcm-ar">حَرْف</span>
        <span class="dcm-en">meaning in something else</span>
      </div>
    </div>
  </div>
</div>

<div class="dcm-sentence dcm-c2">
  <span class="dcm-tag dcm-tag--alif">matn</span>
  <span class="dcm-ar">وَأَقْسَامُهُ ثَلَاثَةٌ: اِسْمٌ، وَفِعْلٌ، وَحَرْفٌ جَاءَ لِمَعْنًى</span>
  <span class="dcm-gloss">Its divisions are three: noun, verb, and a particle that comes for a meaning.</span>
</div>

<p class="dcm-callout dcm-yellow">
  <strong>Note from al-Kawākib:</strong> the categorisation is of <span class="dcm-ar">الْكَلِمَة</span> (the word), not of <span class="dcm-ar">الْكَلَام</span> as a finished sentence.
</p>

<!-- ============ ISM ============ -->
<h2 class="dcm-h2"><span class="dcm-num">1</span>The noun <span class="dcm-ar">الِاسْمُ</span></h2>

<div class="dcm-cond-row">
  <div class="dcm-cond-card dcm-c1">
    <span class="dcm-cond-title">لُغَةً</span>
    <span class="dcm-ar">مَا دَلَّ عَلَى مُسَمًّى</span>
    <span class="dcm-muted">that which points to something named</span>
  </div>
  <div class="dcm-cond-card dcm-c1">
    <span class="dcm-cond-title">اصْطِلَاحًا</span>
    <span class="dcm-ar">كَلِمَةٌ دَلَّتْ عَلَى مَعْنًى فِي نَفْسِهَا وَلَمْ تَقْتَرِنْ بِزَمَانٍ</span>
    <span class="dcm-muted">a word with meaning in itself, not tied to a tense</span>
  </div>
</div>

<p>
  Time-words like <span class="dcm-ar">أَمْسِ</span> / <span class="dcm-ar">الْآنَ</span> are still nouns — “not linked to tense” excludes <em>verbs</em>, not adverbs of time.
</p>

<div class="dcm-parse-row">
  <div class="dcm-parse-chip dcm-c1"><span class="dcm-ar">مُحَمَّدٍ</span><span class="dcm-role">proper name</span></div>
  <div class="dcm-parse-chip dcm-c1"><span class="dcm-ar">عَلِيٍّ</span><span class="dcm-role">proper name</span></div>
  <div class="dcm-parse-chip dcm-c1"><span class="dcm-ar">رَجُلٍ</span><span class="dcm-role">person</span></div>
  <div class="dcm-parse-chip dcm-c1"><span class="dcm-ar">جَمَلٍ</span><span class="dcm-role">animal</span></div>
  <div class="dcm-parse-chip dcm-c1"><span class="dcm-ar">نَهْرٍ</span><span class="dcm-role">place</span></div>
  <div class="dcm-parse-chip dcm-c1"><span class="dcm-ar">تُفَّاحَةٍ</span><span class="dcm-role">fruit</span></div>
  <div class="dcm-parse-chip dcm-c1"><span class="dcm-ar">لَيْمُونَةٍ</span><span class="dcm-role">fruit</span></div>
  <div class="dcm-parse-chip dcm-c1"><span class="dcm-ar">عَصًا</span><span class="dcm-role">thing</span></div>
</div>

<h3 class="dcm-h3">More noun examples from the commentary</h3>
<div class="dcm-parse-row">
  <div class="dcm-parse-chip dcm-c1"><span class="dcm-ar">كِتَابٌ</span><span class="dcm-role">book</span></div>
  <div class="dcm-parse-chip dcm-c1"><span class="dcm-ar">قَلَمٌ</span><span class="dcm-role">pen</span></div>
  <div class="dcm-parse-chip dcm-c1"><span class="dcm-ar">دَوَاةٌ</span><span class="dcm-role">inkwell</span></div>
  <div class="dcm-parse-chip dcm-c1"><span class="dcm-ar">كُرَّاسَةٌ</span><span class="dcm-role">notebook</span></div>
  <div class="dcm-parse-chip dcm-c1"><span class="dcm-ar">جَرِيدَةٌ</span><span class="dcm-role">newspaper</span></div>
  <div class="dcm-parse-chip dcm-c1"><span class="dcm-ar">خَلِيلٌ</span><span class="dcm-role">name</span></div>
  <div class="dcm-parse-chip dcm-c1"><span class="dcm-ar">صَالِحٌ</span><span class="dcm-role">name</span></div>
  <div class="dcm-parse-chip dcm-c1"><span class="dcm-ar">عِمْرَانُ</span><span class="dcm-role">name</span></div>
  <div class="dcm-parse-chip dcm-c1"><span class="dcm-ar">وَرَقَةٌ</span><span class="dcm-role">leaf</span></div>
  <div class="dcm-parse-chip dcm-c1"><span class="dcm-ar">سَبُعٌ</span><span class="dcm-role">predator</span></div>
  <div class="dcm-parse-chip dcm-c1"><span class="dcm-ar">حِمَارٌ</span><span class="dcm-role">donkey</span></div>
  <div class="dcm-parse-chip dcm-c1"><span class="dcm-ar">ذِئْبٌ</span><span class="dcm-role">wolf</span></div>
  <div class="dcm-parse-chip dcm-c1"><span class="dcm-ar">فَهْدٌ</span><span class="dcm-role">leopard</span></div>
  <div class="dcm-parse-chip dcm-c1"><span class="dcm-ar">نَمِرٌ</span><span class="dcm-role">tiger</span></div>
  <div class="dcm-parse-chip dcm-c1"><span class="dcm-ar">بُرْتُقَالَةٌ</span><span class="dcm-role">orange</span></div>
  <div class="dcm-parse-chip dcm-c1"><span class="dcm-ar">كُمَّثْرَاةٌ</span><span class="dcm-role">quince</span></div>
  <div class="dcm-parse-chip dcm-c1"><span class="dcm-ar">نَرْجِسَةٌ</span><span class="dcm-role">narcissus</span></div>
  <div class="dcm-parse-chip dcm-c1"><span class="dcm-ar">وَرْدَةٌ</span><span class="dcm-role">rose</span></div>
  <div class="dcm-parse-chip dcm-c1"><span class="dcm-ar">هَؤُلَاءِ</span><span class="dcm-role">demonstrative</span></div>
  <div class="dcm-parse-chip dcm-c1"><span class="dcm-ar">أَنْتُمْ</span><span class="dcm-role">pronoun</span></div>
</div>

<!-- ============ FI'L ============ -->
<h2 class="dcm-h2"><span class="dcm-num">2</span>The verb <span class="dcm-ar">الْفِعْلُ</span></h2>

<div class="dcm-cond-row">
  <div class="dcm-cond-card dcm-c2">
    <span class="dcm-cond-title">لُغَةً</span>
    <span class="dcm-ar">الْحَدَثُ</span>
    <span class="dcm-muted">the occurrence / event</span>
  </div>
  <div class="dcm-cond-card dcm-c2">
    <span class="dcm-cond-title">اصْطِلَاحًا</span>
    <span class="dcm-ar">كَلِمَةٌ دَلَّتْ عَلَى مَعْنًى فِي نَفْسِهَا وَاقْتَرَنَتْ بِزَمَانٍ</span>
    <span class="dcm-muted">meaning in itself · tied to past, present, or future</span>
  </div>
</div>

<div class="dcm-flip">
  <div class="dcm-flip-box dcm-c2">
    <span class="dcm-ar">كَتَبَ</span>
    <span class="dcm-en">writing · past</span>
  </div>
  <div class="dcm-flip-arrow">→</div>
  <div class="dcm-flip-box dcm-c1">
    <span class="dcm-ar">يَكْتُبُ</span>
    <span class="dcm-en">writing · present</span>
  </div>
  <div class="dcm-flip-arrow">→</div>
  <div class="dcm-flip-box dcm-c3">
    <span class="dcm-ar">اكْتُبْ</span>
    <span class="dcm-en">writing · command / future</span>
  </div>
</div>

<p>
  Same root meaning (writing); the tense link is what makes each a فعل.
</p>

<div class="dcm-chart">
  <div class="dcm-chart-root-row">
    <div class="dcm-chart-root">
      <span class="dcm-ar">الْفِعْلُ عَلَى ثَلَاثَةِ أَنْوَاعٍ</span>
      <span class="dcm-en">مَاضٍ · مُضَارِع · أَمْر</span>
    </div>
  </div>
  <div class="dcm-chart-stem"></div>
  <div class="dcm-chart-hline-wrap"><div class="dcm-chart-hline"></div></div>
  <div class="dcm-chart-row">
    <div class="dcm-chart-branch">
      <div class="dcm-chart-branch-stem"></div>
      <div class="dcm-chart-node dcm-c4">
        <span class="dcm-ar">مَاضٍ</span>
        <span class="dcm-en">before the moment of speech</span>
      </div>
    </div>
    <div class="dcm-chart-branch">
      <div class="dcm-chart-branch-stem"></div>
      <div class="dcm-chart-node dcm-c1">
        <span class="dcm-ar">مُضَارِع</span>
        <span class="dcm-en">during speech or after it</span>
      </div>
    </div>
    <div class="dcm-chart-branch">
      <div class="dcm-chart-branch-stem"></div>
      <div class="dcm-chart-node dcm-c2">
        <span class="dcm-ar">أَمْر</span>
        <span class="dcm-en">request after the moment of speech</span>
      </div>
    </div>
  </div>
</div>

<h3 class="dcm-h3"><span class="dcm-ar">الْمَاضِي</span></h3>
<p>Event before the speaker spoke:</p>
<div class="dcm-parse-row">
  <div class="dcm-parse-chip dcm-c4"><span class="dcm-ar">كَتَبَ</span><span class="dcm-role">he wrote</span></div>
  <div class="dcm-parse-chip dcm-c4"><span class="dcm-ar">فَهِمَ</span><span class="dcm-role">he understood</span></div>
  <div class="dcm-parse-chip dcm-c4"><span class="dcm-ar">خَرَجَ</span><span class="dcm-role">he left</span></div>
  <div class="dcm-parse-chip dcm-c4"><span class="dcm-ar">سَمِعَ</span><span class="dcm-role">he heard</span></div>
  <div class="dcm-parse-chip dcm-c4"><span class="dcm-ar">أَبْصَرَ</span><span class="dcm-role">he saw</span></div>
  <div class="dcm-parse-chip dcm-c4"><span class="dcm-ar">تَكَلَّمَ</span><span class="dcm-role">he spoke</span></div>
  <div class="dcm-parse-chip dcm-c4"><span class="dcm-ar">اسْتَغْفَرَ</span><span class="dcm-role">he sought forgiveness</span></div>
  <div class="dcm-parse-chip dcm-c4"><span class="dcm-ar">اشْتَرَكَ</span><span class="dcm-role">he associated / shared</span></div>
</div>

<h3 class="dcm-h3"><span class="dcm-ar">الْمُضَارِعُ</span></h3>
<p>
  During speech or after it. Without a marker, either present or future may be assumed;
  <span class="dcm-ar">سَـ / سَوْفَ</span> lock future; words like <span class="dcm-ar">الْآنَ</span> lock present.
</p>
<div class="dcm-parse-row">
  <div class="dcm-parse-chip dcm-c1"><span class="dcm-ar">يَكْتُبُ</span><span class="dcm-role">he writes</span></div>
  <div class="dcm-parse-chip dcm-c1"><span class="dcm-ar">يَفْهَمُ</span><span class="dcm-role">he understands</span></div>
  <div class="dcm-parse-chip dcm-c1"><span class="dcm-ar">يَخْرُجُ</span><span class="dcm-role">he leaves</span></div>
  <div class="dcm-parse-chip dcm-c1"><span class="dcm-ar">يَسْمَعُ</span><span class="dcm-role">he hears</span></div>
  <div class="dcm-parse-chip dcm-c1"><span class="dcm-ar">يَنْصُرُ</span><span class="dcm-role">he helps</span></div>
  <div class="dcm-parse-chip dcm-c1"><span class="dcm-ar">يَتَكَلَّمُ</span><span class="dcm-role">he speaks</span></div>
  <div class="dcm-parse-chip dcm-c1"><span class="dcm-ar">يَسْتَغْفِرُ</span><span class="dcm-role">he seeks forgiveness</span></div>
  <div class="dcm-parse-chip dcm-c1"><span class="dcm-ar">يَشْتَرِكُ</span><span class="dcm-role">he associates</span></div>
</div>

<h3 class="dcm-h3"><span class="dcm-ar">الْأَمْرُ</span></h3>
<p>Request for an event after the moment of speech:</p>
<div class="dcm-parse-row">
  <div class="dcm-parse-chip dcm-c2"><span class="dcm-ar">اكْتُبْ</span><span class="dcm-role">write!</span></div>
  <div class="dcm-parse-chip dcm-c2"><span class="dcm-ar">افْهَمْ</span><span class="dcm-role">understand!</span></div>
  <div class="dcm-parse-chip dcm-c2"><span class="dcm-ar">اخْرُجْ</span><span class="dcm-role">leave!</span></div>
  <div class="dcm-parse-chip dcm-c2"><span class="dcm-ar">اسْمَعْ</span><span class="dcm-role">listen!</span></div>
  <div class="dcm-parse-chip dcm-c2"><span class="dcm-ar">انْصُرْ</span><span class="dcm-role">help!</span></div>
  <div class="dcm-parse-chip dcm-c2"><span class="dcm-ar">تَكَلَّمْ</span><span class="dcm-role">speak!</span></div>
  <div class="dcm-parse-chip dcm-c2"><span class="dcm-ar">اسْتَغْفِرْ</span><span class="dcm-role">seek forgiveness!</span></div>
  <div class="dcm-parse-chip dcm-c2"><span class="dcm-ar">اشْتَرِكْ</span><span class="dcm-role">associate!</span></div>
</div>

<h3 class="dcm-h3">Full triples from the commentary</h3>
<table class="dcm-table">
  <tr><th>مَاضٍ</th><th>مُضَارِع</th><th>أَمْر</th><th>sense</th></tr>
  <tr><td class="dcm-td-ar">نَصَرَ</td><td class="dcm-td-ar">يَنْصُرُ</td><td class="dcm-td-ar">انْصُرْ</td><td>help</td></tr>
  <tr><td class="dcm-td-ar">فَهِمَ</td><td class="dcm-td-ar">يَفْهَمُ</td><td class="dcm-td-ar">افْهَمْ</td><td>understand</td></tr>
  <tr><td class="dcm-td-ar">عَلِمَ</td><td class="dcm-td-ar">يَعْلَمُ</td><td class="dcm-td-ar">اعْلَمْ</td><td>know</td></tr>
  <tr><td class="dcm-td-ar">جَلَسَ</td><td class="dcm-td-ar">يَجْلِسُ</td><td class="dcm-td-ar">اجْلِسْ</td><td>sit</td></tr>
  <tr><td class="dcm-td-ar">ضَرَبَ</td><td class="dcm-td-ar">يَضْرِبُ</td><td class="dcm-td-ar">اضْرِبْ</td><td>hit</td></tr>
  <tr><td class="dcm-td-ar">سَافَرَ</td><td class="dcm-td-ar">يُسَافِرُ</td><td class="dcm-td-ar">سَافِرْ</td><td>travel</td></tr>
  <tr><td class="dcm-td-ar">قَالَ</td><td class="dcm-td-ar">يَقُولُ</td><td class="dcm-td-ar">قُلْ</td><td>say</td></tr>
  <tr><td class="dcm-td-ar">أَمِنَ</td><td class="dcm-td-ar">يَأْمَنُ</td><td class="dcm-td-ar">آمِنْ</td><td>feel safe</td></tr>
  <tr><td class="dcm-td-ar">رَضِيَ</td><td class="dcm-td-ar">يَرْضَى</td><td class="dcm-td-ar">ارْضَ</td><td>be pleased</td></tr>
  <tr><td class="dcm-td-ar">صَدَقَ</td><td class="dcm-td-ar">يَصْدُقُ</td><td class="dcm-td-ar">اصْدُقْ</td><td>be truthful</td></tr>
  <tr><td class="dcm-td-ar">اجْتَهَدَ</td><td class="dcm-td-ar">يَجْتَهِدُ</td><td class="dcm-td-ar">اجْتَهِدْ</td><td>strive</td></tr>
  <tr><td class="dcm-td-ar">اسْتَغْفَرَ</td><td class="dcm-td-ar">يَسْتَغْفِرُ</td><td class="dcm-td-ar">اسْتَغْفِرْ</td><td>seek forgiveness</td></tr>
</table>

<!-- ============ HARF ============ -->
<h2 class="dcm-h2"><span class="dcm-num">3</span>The particle <span class="dcm-ar">الْحَرْفُ</span></h2>

<div class="dcm-cond-row">
  <div class="dcm-cond-card dcm-c3">
    <span class="dcm-cond-title">لُغَةً</span>
    <span class="dcm-ar">الطَّرَفُ</span>
    <span class="dcm-muted">the side / edge</span>
  </div>
  <div class="dcm-cond-card dcm-c3">
    <span class="dcm-cond-title">اصْطِلَاحًا</span>
    <span class="dcm-ar">كَلِمَةٌ دَلَّتْ عَلَى مَعْنًى فِي غَيْرِهَا</span>
    <span class="dcm-muted">meaning completed only with another word</span>
  </div>
</div>

<div class="dcm-sentence dcm-c3">
  <span class="dcm-tag dcm-tag--ya">حرف needs a partner</span>
  <span class="dcm-ar">ذَهَبْتُ <span class="dcm-hl">مِنَ</span> الْبَيْتِ</span>
  <span class="dcm-gloss">مِنْ alone hints at beginning; the meaning finishes with الْبَيْتِ.</span>
</div>

<div class="dcm-parse-row">
  <div class="dcm-parse-chip dcm-c3"><span class="dcm-ar">مِنْ</span><span class="dcm-role">from</span></div>
  <div class="dcm-parse-chip dcm-c3"><span class="dcm-ar">إِلَى</span><span class="dcm-role">to</span></div>
  <div class="dcm-parse-chip dcm-c3"><span class="dcm-ar">عَنْ</span><span class="dcm-role">about / from</span></div>
  <div class="dcm-parse-chip dcm-c3"><span class="dcm-ar">عَلَى</span><span class="dcm-role">upon</span></div>
  <div class="dcm-parse-chip dcm-c3"><span class="dcm-ar">إِلَّا</span><span class="dcm-role">except</span></div>
  <div class="dcm-parse-chip dcm-c3"><span class="dcm-ar">لَكِنْ</span><span class="dcm-role">but</span></div>
  <div class="dcm-parse-chip dcm-c3"><span class="dcm-ar">إِنَّ</span><span class="dcm-role">indeed</span></div>
  <div class="dcm-parse-chip dcm-c3"><span class="dcm-ar">أَنْ</span><span class="dcm-role">that</span></div>
  <div class="dcm-parse-chip dcm-c3"><span class="dcm-ar">بَلَى</span><span class="dcm-role">yes indeed</span></div>
  <div class="dcm-parse-chip dcm-c3"><span class="dcm-ar">بَلْ</span><span class="dcm-role">rather</span></div>
  <div class="dcm-parse-chip dcm-c3"><span class="dcm-ar">قَدْ</span><span class="dcm-role">indeed / already</span></div>
  <div class="dcm-parse-chip dcm-c3"><span class="dcm-ar">سَوْفَ</span><span class="dcm-role">will (far)</span></div>
  <div class="dcm-parse-chip dcm-c3"><span class="dcm-ar">حَتَّى</span><span class="dcm-role">until</span></div>
  <div class="dcm-parse-chip dcm-c3"><span class="dcm-ar">لَمْ</span><span class="dcm-role">did not</span></div>
  <div class="dcm-parse-chip dcm-c3"><span class="dcm-ar">لَا</span><span class="dcm-role">no / not</span></div>
  <div class="dcm-parse-chip dcm-c3"><span class="dcm-ar">لَنْ</span><span class="dcm-role">will not</span></div>
  <div class="dcm-parse-chip dcm-c3"><span class="dcm-ar">لَوْ</span><span class="dcm-role">if</span></div>
  <div class="dcm-parse-chip dcm-c3"><span class="dcm-ar">لَمَّا</span><span class="dcm-role">when / not yet</span></div>
  <div class="dcm-parse-chip dcm-c3"><span class="dcm-ar">لَعَلَّ</span><span class="dcm-role">perhaps</span></div>
  <div class="dcm-parse-chip dcm-c3"><span class="dcm-ar">مَا</span><span class="dcm-role">what / not</span></div>
  <div class="dcm-parse-chip dcm-c3"><span class="dcm-ar">لَاتَ</span><span class="dcm-role">not (time)</span></div>
  <div class="dcm-parse-chip dcm-c3"><span class="dcm-ar">لَيْتَ</span><span class="dcm-role">would that</span></div>
  <div class="dcm-parse-chip dcm-c3"><span class="dcm-ar">إِنْ</span><span class="dcm-role">if</span></div>
  <div class="dcm-parse-chip dcm-c3"><span class="dcm-ar">ثُمَّ</span><span class="dcm-role">then</span></div>
  <div class="dcm-parse-chip dcm-c3"><span class="dcm-ar">أَوْ</span><span class="dcm-role">or</span></div>
</div>

<!-- ============ CONTRAST ============ -->
<div class="dcm-chart">
  <h3 class="dcm-h3">one glance — how they differ</h3>
  <table class="dcm-table">
    <tr><th></th><th>Meaning where?</th><th>Tense?</th><th>Example</th></tr>
    <tr>
      <td class="dcm-td-ar">اِسْم</td>
      <td>in itself</td>
      <td>no</td>
      <td class="dcm-td-ar">رَجُلٌ</td>
    </tr>
    <tr>
      <td class="dcm-td-ar">فِعْل</td>
      <td>in itself</td>
      <td>yes (past / present / future)</td>
      <td class="dcm-td-ar">كَتَبَ · يَكْتُبُ · اكْتُبْ</td>
    </tr>
    <tr>
      <td class="dcm-td-ar">حَرْف</td>
      <td>in another word</td>
      <td>—</td>
      <td class="dcm-td-ar">مِنْ (+ الْبَيْتِ)</td>
    </tr>
  </table>
</div>

<hr class="dcm-divider" />
<p class="dcm-callout dcm-green dcm-callout--end">
  <strong>In short:</strong> every Arabic word is اسم، فعل، or حرف.
  Next come the <em>signs</em> that prove a word is a noun — خفْض، تنوين، أل، and حروف الخفض.
</p>
`;

export default function KalamTypesGuide() {
  return (
    <div
      className="damma-commentary"
      dangerouslySetInnerHTML={{ __html: KALAM_TYPES_HTML }}
    />
  );
}

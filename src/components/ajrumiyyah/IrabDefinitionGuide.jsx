const IRAB_DEF_HTML = `
<p class="dcm-lead">
  إِعْرَاب is the change at a word's <em>ending</em> — not the letter itself, but the <em>state</em> of that ending — because different governors (<span class="dcm-ar">عَوَامِل</span>) act on it. The change may be heard in speech (<span class="dcm-ar">لَفْظًا</span>) or only estimated in analysis (<span class="dcm-ar">تَقْدِيرًا</span>).
</p>

<div class="dcm-chart">
  <div class="dcm-chart-root-row">
    <div class="dcm-chart-root">
      <span class="dcm-ar">اَلْإِعْرَابُ</span>
      <span class="dcm-en">two meanings — language, then technical</span>
    </div>
  </div>
  <div class="dcm-chart-stem"></div>
  <div class="dcm-chart-hline-wrap"><div class="dcm-chart-hline"></div></div>
  <div class="dcm-chart-row">
    <div class="dcm-chart-branch">
      <div class="dcm-chart-branch-stem"></div>
      <div class="dcm-chart-node dcm-c1">
        <span class="dcm-ar">لُغَوِيٌّ</span>
        <span class="dcm-en">linguistic — to make clear / express</span>
        <span class="dcm-ex dcm-ar">أَعْرَبْتُ عَمَّا فِي نَفْسِي</span>
      </div>
    </div>
    <div class="dcm-chart-branch dcm-chart-branch--wide">
      <div class="dcm-chart-branch-stem"></div>
      <div class="dcm-chart-node dcm-c2">
        <span class="dcm-ar">اصْطِلَاحِيٌّ</span>
        <span class="dcm-en">technical — change of ending-states by عَوَامِل</span>
        <span class="dcm-ex dcm-ar">تَغْيِيرُ أَحْوَالِ الْأَوَاخِرِ</span>
      </div>
    </div>
  </div>
</div>

<p>
  Linguistically, إِعْرَاب means making something clear and apparent — <span class="dcm-example">أَعْرَبْتُ عَمَّا فِي نَفْسِي</span> ("I expressed what was within myself"). Technically, it is exactly what Ibn Ājurrūm defines: the ending's <em>state</em> shifts (رَفْع → نَصْب → جَرّ, and so on) because the governor changes.
</p>

<p class="dcm-callout dcm-yellow">
  <strong>Key precision:</strong> the final letter itself does not change. In <span class="dcm-ar">مُحَمَّد</span>, the <span class="dcm-ar">دَال</span> stays; what changes is whether that ending is مَرْفُوع, مَنْصُوب, or مَجْرُور.
</p>

<h2 class="dcm-h2"><span class="dcm-num">1</span>One noun, three governors <span class="dcm-ar">مُحَمَّد</span></h2>
<p>
  The same word ends differently solely because a different عَامِل demands a different state:
</p>

<div class="dcm-flip">
  <div class="dcm-flip-box dcm-c1">
    <span class="dcm-ar">حَضَرَ مُحَمَّدٌ</span>
    <span class="dcm-en">رَفْع — عَامِل: حَضَرَ (فَاعِل)</span>
  </div>
  <div class="dcm-flip-arrow">→</div>
  <div class="dcm-flip-box dcm-c2">
    <span class="dcm-ar">رَأَيْتُ مُحَمَّدًا</span>
    <span class="dcm-en">نَصْب — عَامِل: رَأَيْتُ (مَفْعُول)</span>
  </div>
  <div class="dcm-flip-arrow">→</div>
  <div class="dcm-flip-box dcm-c3">
    <span class="dcm-ar">حَظِيتُ بِمُحَمَّدٍ</span>
    <span class="dcm-en">جَرّ — عَامِل: the بَاء</span>
  </div>
</div>

<div class="dcm-sentence dcm-c1">
  <span class="dcm-tag dcm-tag--alif">رَفْع · فَاعِل</span>
  <span class="dcm-ar">حَضَرَ <span class="dcm-hl">مُحَمَّدٌ</span></span>
  <span class="dcm-gloss">"Muḥammad was present." — مَرْفُوع because حَضَرَ requires رَفْع on its subject.</span>
</div>
<div class="dcm-sentence dcm-c2">
  <span class="dcm-tag dcm-tag--waw">نَصْب · مَفْعُول بِهِ</span>
  <span class="dcm-ar">رَأَيْتُ <span class="dcm-hl">مُحَمَّدًا</span></span>
  <span class="dcm-gloss">"I saw Muḥammad." — مَنْصُوب because رَأَيْتُ requires نَصْب on its object.</span>
</div>
<div class="dcm-sentence dcm-c3">
  <span class="dcm-tag dcm-tag--ya">جَرّ · حَرْف خَفْض</span>
  <span class="dcm-ar">حَظِيتُ بِ<span class="dcm-hl">مُحَمَّدٍ</span></span>
  <span class="dcm-gloss">"I was blessed with Muḥammad." — مَجْرُور because the بَاء requires جَرّ.</span>
</div>

<p>
  Contemplating these three: the <span class="dcm-ar">دَال</span> never changes — only its state does. That shift of states <em>is</em> إِعْرَاب according to the author; the ضَمَّة, فَتْحَة, and كَسْرَة are the <em>signs</em> of it.
</p>

<h2 class="dcm-h2"><span class="dcm-num">2</span>The same idea on a مُضَارِع <span class="dcm-ar">يُسَافِرُ</span></h2>
<p>
  The present-tense verb behaves like the noun: free of a نَاصِب or جَازِم → رَفْع; enter <span class="dcm-ar">لَنْ</span> → نَصْب; enter <span class="dcm-ar">لَمْ</span> → جَزْم.
</p>

<div class="dcm-sentence dcm-c1">
  <span class="dcm-tag dcm-tag--alif">رَفْع · free of نَاصِب/جَازِم</span>
  <span class="dcm-ar"><span class="dcm-hl">يُسَافِرُ</span> إِبْرَاهِيمُ</span>
  <span class="dcm-gloss">"Ibrāhīm is travelling." — مَرْفُوع by default.</span>
</div>
<div class="dcm-sentence dcm-c2">
  <span class="dcm-tag dcm-tag--waw">نَصْب · عَامِل لَنْ</span>
  <span class="dcm-ar">لَنْ <span class="dcm-hl">يُسَافِرَ</span> إِبْرَاهِيمُ</span>
  <span class="dcm-gloss">"Ibrāhīm will not travel." — مَنْصُوب by لَنْ.</span>
</div>
<div class="dcm-sentence dcm-c4">
  <span class="dcm-tag dcm-tag--green">جَزْم · عَامِل لَمْ</span>
  <span class="dcm-ar">لَمْ <span class="dcm-hl">يُسَافِرْ</span> إِبْرَاهِيمُ</span>
  <span class="dcm-gloss">"Ibrāhīm did not travel." — مَجْزُوم by لَمْ.</span>
</div>

<h2 class="dcm-h2"><span class="dcm-num">3</span>Two kinds of change <span class="dcm-ar">لَفْظِيٌّ وَتَقْدِيرِيٌّ</span></h2>

<div class="dcm-chart">
  <div class="dcm-chart-root-row">
    <div class="dcm-chart-root">
      <span class="dcm-ar">التَّغَيُّرُ</span>
      <span class="dcm-en">how the ending-state shows up</span>
    </div>
  </div>
  <div class="dcm-chart-stem"></div>
  <div class="dcm-chart-hline-wrap"><div class="dcm-chart-hline"></div></div>
  <div class="dcm-chart-row">
    <div class="dcm-chart-branch">
      <div class="dcm-chart-branch-stem"></div>
      <div class="dcm-chart-node dcm-c1">
        <span class="dcm-ar">لَفْظِيٌّ</span>
        <span class="dcm-en">explicit — nothing blocks pronouncing it</span>
        <span class="dcm-ex dcm-ar">مُحَمَّدٌ / يُسَافِرُ</span>
      </div>
    </div>
    <div class="dcm-chart-branch dcm-chart-branch--wide">
      <div class="dcm-chart-branch-stem"></div>
      <div class="dcm-chart-node dcm-c3">
        <span class="dcm-ar">تَقْدِيرِيٌّ</span>
        <span class="dcm-en">implicit — a barrier blocks pronouncing it</span>
        <span class="dcm-ex dcm-ar">الْفَتَى · الْقَاضِي · غُلَامِي</span>
      </div>
    </div>
  </div>
</div>

<p>
  Explicit إِعْرَاب is what you heard on the <span class="dcm-ar">دَال</span> of <span class="dcm-example">مُحَمَّدٌ</span> and the <span class="dcm-ar">رَاء</span> of <span class="dcm-example">يُسَافِرُ</span>. Implicit إِعْرَاب is when something prevents the vowel from being pronounced — yet the state is still there, estimated on the ending.
</p>

<h3 class="dcm-h3">three barriers to an explicit vowel</h3>
<div class="dcm-cause-row">
  <div class="dcm-cause-card dcm-c1">
    <span class="dcm-cause-ar">تَعَذُّر</span>
    <span class="dcm-cause-en">impossibility — tongue cannot place a vowel there</span>
    <span class="dcm-cause-ex dcm-ar">الْفَتَى</span>
  </div>
  <div class="dcm-cause-card dcm-c2">
    <span class="dcm-cause-ar">ثِقَل / اسْتِثْقَال</span>
    <span class="dcm-cause-en">heaviness — vowel is possible but heavy</span>
    <span class="dcm-cause-ex dcm-ar">يَدْعُو · الْقَاضِي</span>
  </div>
  <div class="dcm-cause-card dcm-c3">
    <span class="dcm-cause-ar">مُنَاسَبَة</span>
    <span class="dcm-cause-en">appropriateness — slot already taken by a fitting vowel</span>
    <span class="dcm-cause-ex dcm-ar">غُلَامِي</span>
  </div>
</div>

<div class="dcm-sentence dcm-c1">
  <span class="dcm-tag dcm-tag--alif">all three barriers in one sentence</span>
  <span class="dcm-ar">يَدْعُو الْفَتَى وَالْقَاضِي وَغُلَامِي</span>
  <span class="dcm-gloss">"The youth, the judge, and my servant-boy call." — every highlighted ending is مَرْفُوع with an estimated ضَمَّة.</span>
  <div class="dcm-note">
    <span class="dcm-ar">يَدْعُو</span> — ثِقَل ·
    <span class="dcm-ar">الْفَتَى</span> — تَعَذُّر ·
    <span class="dcm-ar">الْقَاضِي</span> — ثِقَل ·
    <span class="dcm-ar">غُلَامِي</span> — مُنَاسَبَة (yā of the speaker)
  </div>
</div>

<p>
  More sentences where the vowels stay estimated across states:
</p>
<div class="dcm-sentence dcm-c2">
  <span class="dcm-tag dcm-tag--waw">نَصْب · estimated</span>
  <span class="dcm-ar">لَنْ يَرْضَى الْفَتَى وَالْقَاضِي وَغُلَامِي</span>
  <span class="dcm-gloss">"The youth, the judge, and my servant-boy will not be pleased."</span>
</div>
<div class="dcm-sentence dcm-c2">
  <span class="dcm-tag dcm-tag--waw">نَصْب · estimated (اسم of إِنَّ)</span>
  <span class="dcm-ar">إِنَّ الْفَتَى وَغُلَامِي لَفَائِزَانِ</span>
  <span class="dcm-gloss">"Indeed the youth and my servant-boy are both successful."</span>
</div>
<div class="dcm-sentence dcm-c3">
  <span class="dcm-tag dcm-tag--ya">جَرّ · estimated</span>
  <span class="dcm-ar">مَرَرْتُ بِالْفَتَى وَغُلَامِي وَالْقَاضِي</span>
  <span class="dcm-gloss">"I passed by the youth, my servant-boy, and the judge."</span>
</div>

<h2 class="dcm-h2"><span class="dcm-num">4</span>Three noun shapes that force estimation</h2>

<div class="dcm-chart">
  <div class="dcm-chart-root-row">
    <div class="dcm-chart-root">
      <span class="dcm-ar">مَوَاضِعُ التَّقْدِيرِ</span>
      <span class="dcm-en">where endings commonly hide the vowel</span>
    </div>
  </div>
  <div class="dcm-chart-stem"></div>
  <div class="dcm-chart-hline-wrap"><div class="dcm-chart-hline"></div></div>
  <div class="dcm-chart-row">
    <div class="dcm-chart-branch">
      <div class="dcm-chart-branch-stem"></div>
      <div class="dcm-chart-node dcm-c1">
        <span class="dcm-ar">مَقْصُور</span>
        <span class="dcm-en">ends in fixed ألف — all vowels estimated (تعذر)</span>
        <span class="dcm-ex dcm-ar">الْفَتَى · الْعَصَا · الرِّضَا</span>
      </div>
    </div>
    <div class="dcm-chart-branch">
      <div class="dcm-chart-branch-stem"></div>
      <div class="dcm-chart-node dcm-c2">
        <span class="dcm-ar">مَنْقُوص</span>
        <span class="dcm-en">ends in fixed yā — ضَمَّة &amp; كَسْرَة estimated (ثقل); فَتْحَة appears</span>
        <span class="dcm-ex dcm-ar">الْقَاضِي · الدَّاعِي · الرَّامِي</span>
      </div>
    </div>
    <div class="dcm-chart-branch">
      <div class="dcm-chart-branch-stem"></div>
      <div class="dcm-chart-node dcm-c3">
        <span class="dcm-ar">مُضَاف إِلَى يَاءِ الْمُتَكَلِّم</span>
        <span class="dcm-en">annexed to “my” — all vowels estimated (مناسبة)</span>
        <span class="dcm-ex dcm-ar">غُلَامِي · كِتَابِي · صَدِيقِي</span>
      </div>
    </div>
  </div>
</div>

<div class="dcm-chart">
  <h3 class="dcm-h3">مقصور — more examples</h3>
  <table class="dcm-table">
    <tr><th>Arabic</th><th>English</th></tr>
    <tr><td class="dcm-td-ar">الْفَتَى</td><td>the youth</td></tr>
    <tr><td class="dcm-td-ar">الْعَصَا</td><td>the stick</td></tr>
    <tr><td class="dcm-td-ar">الْحَجَى</td><td>intelligence / the Ḥajj-related form in the text</td></tr>
    <tr><td class="dcm-td-ar">الرَّحَى</td><td>the hand-mill</td></tr>
    <tr><td class="dcm-td-ar">الرِّضَا</td><td>contentment</td></tr>
  </table>
</div>

<div class="dcm-chart">
  <h3 class="dcm-h3">منقوص — more examples</h3>
  <table class="dcm-table">
    <tr><th>Arabic</th><th>English</th></tr>
    <tr><td class="dcm-td-ar">الْقَاضِي</td><td>the judge</td></tr>
    <tr><td class="dcm-td-ar">الدَّاعِي</td><td>the caller</td></tr>
    <tr><td class="dcm-td-ar">الْغَازِي</td><td>the raider / soldier</td></tr>
    <tr><td class="dcm-td-ar">السَّاعِي</td><td>the one who strives / courier</td></tr>
    <tr><td class="dcm-td-ar">الْآتِي</td><td>the one coming</td></tr>
    <tr><td class="dcm-td-ar">الرَّامِي</td><td>the thrower / archer</td></tr>
  </table>
</div>

<div class="dcm-chart">
  <h3 class="dcm-h3">مضاف إلى ياء المتكلم — more examples</h3>
  <table class="dcm-table">
    <tr><th>Arabic</th><th>English</th></tr>
    <tr><td class="dcm-td-ar">غُلَامِي</td><td>my servant-boy</td></tr>
    <tr><td class="dcm-td-ar">كِتَابِي</td><td>my book</td></tr>
    <tr><td class="dcm-td-ar">صَدِيقِي</td><td>my friend</td></tr>
    <tr><td class="dcm-td-ar">ابْنِي</td><td>my son</td></tr>
    <tr><td class="dcm-td-ar">أُسْتَاذِي</td><td>my teacher</td></tr>
  </table>
</div>

<h2 class="dcm-h2"><span class="dcm-num">5</span>The opposite of إِعْرَاب — <span class="dcm-ar">الْبِنَاء</span></h2>
<p>
  بِنَاء is the mirror image: the ending stays locked in one shape, no matter which governor arrives — and not because of a weak letter blocking a vowel, but because the word is simply fixed.
</p>

<div class="dcm-chart">
  <div class="dcm-chart-root-row">
    <div class="dcm-chart-root">
      <span class="dcm-ar">اَلْبِنَاءُ</span>
      <span class="dcm-en">ending locked — four fixed shapes</span>
    </div>
  </div>
  <div class="dcm-chart-stem"></div>
  <div class="dcm-chart-hline-wrap"><div class="dcm-chart-hline"></div></div>
  <div class="dcm-chart-row">
    <div class="dcm-chart-branch">
      <div class="dcm-chart-branch-stem"></div>
      <div class="dcm-chart-node dcm-c4">
        <span class="dcm-ar">سُكُون</span>
        <span class="dcm-ex dcm-ar">كَمْ · مَنْ</span>
      </div>
    </div>
    <div class="dcm-chart-branch">
      <div class="dcm-chart-branch-stem"></div>
      <div class="dcm-chart-node dcm-c3">
        <span class="dcm-ar">كَسْر</span>
        <span class="dcm-ex dcm-ar">هَؤُلَاءِ · حَذَامِ · أَمْسِ</span>
      </div>
    </div>
    <div class="dcm-chart-branch">
      <div class="dcm-chart-branch-stem"></div>
      <div class="dcm-chart-node dcm-c1">
        <span class="dcm-ar">ضَمّ</span>
        <span class="dcm-ex dcm-ar">مُنْذُ · حَيْثُ</span>
      </div>
    </div>
    <div class="dcm-chart-branch">
      <div class="dcm-chart-branch-stem"></div>
      <div class="dcm-chart-node dcm-c2">
        <span class="dcm-ar">فَتْح</span>
        <span class="dcm-ex dcm-ar">أَيْنَ · كَيْفَ</span>
      </div>
    </div>
  </div>
</div>

<div class="dcm-cond-row">
  <div class="dcm-cond-card dcm-c1">
    <span class="dcm-cond-title">مُعْرَب</span>
    <span class="dcm-ar">ending-state changes — لَفْظًا or تَقْدِيرًا — because the عَامِل changes</span>
  </div>
  <div class="dcm-cond-card dcm-c3">
    <span class="dcm-cond-title">مَبْنِيّ</span>
    <span class="dcm-ar">ending stays one state — not from a governor, and not from defectiveness</span>
  </div>
</div>

<hr class="dcm-divider" />
<p class="dcm-callout dcm-green dcm-callout--end">
  <strong>In short:</strong> إِعْرَاب is the shift of a word's ending-<em>state</em> under changing governors. Sometimes you hear the vowel (لَفْظِيّ); sometimes you only estimate it (تَقْدِيرِيّ) because of تعذر, ثقل, or مناسبة — especially on مَقْصُور, مَنْقُوص, and words annexed to the speaker's ياء. بِنَاء is the opposite lock: one fixed ending, forever.
</p>
`;

export default function IrabDefinitionGuide() {
  return (
    <div
      className="damma-commentary"
      dangerouslySetInnerHTML={{ __html: IRAB_DEF_HTML }}
    />
  );
}

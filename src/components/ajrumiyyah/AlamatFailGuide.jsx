const ALAMAT_FAIL_HTML = `
<p class="dcm-lead">
  The verb is set apart from اسم and حرف by four signs the matn names.
  Meet any one of them and you know the word is a فعل.
</p>

<div class="dcm-chart">
  <div class="dcm-chart-root-row">
    <div class="dcm-chart-root">
      <span class="dcm-ar">عَلَامَاتُ الْفِعْلِ</span>
      <span class="dcm-en">four signs — then three buckets</span>
    </div>
  </div>
  <div class="dcm-chart-stem"></div>
  <div class="dcm-chart-hline-wrap"><div class="dcm-chart-hline"></div></div>
  <div class="dcm-chart-row">
    <div class="dcm-chart-branch">
      <div class="dcm-chart-branch-stem"></div>
      <div class="dcm-chart-node dcm-c1">
        <span class="dcm-ar">قَدْ</span>
        <span class="dcm-en">shared · ماضٍ + مضارع</span>
      </div>
    </div>
    <div class="dcm-chart-branch">
      <div class="dcm-chart-branch-stem"></div>
      <div class="dcm-chart-node dcm-c2">
        <span class="dcm-ar">السِّينُ</span>
        <span class="dcm-en">مضارع · near future</span>
      </div>
    </div>
    <div class="dcm-chart-branch">
      <div class="dcm-chart-branch-stem"></div>
      <div class="dcm-chart-node dcm-c3">
        <span class="dcm-ar">سَوْفَ</span>
        <span class="dcm-en">مضارع · farther future</span>
      </div>
    </div>
    <div class="dcm-chart-branch">
      <div class="dcm-chart-branch-stem"></div>
      <div class="dcm-chart-node dcm-c4">
        <span class="dcm-ar">تَاءُ التَّأْنِيثِ</span>
        <span class="dcm-en">ماضٍ فقط · تاء ساكنة</span>
      </div>
    </div>
  </div>
</div>

<div class="dcm-sentence dcm-c2">
  <span class="dcm-tag dcm-tag--alif">matn</span>
  <span class="dcm-ar">وَالْفِعْلُ يُعْرَفُ بِقَدْ وَالسِّينِ وَسَوْفَ وَتَاءِ التَّأْنِيثِ السَّاكِنَةِ</span>
  <span class="dcm-gloss">The verb is known by قَدْ, السِّين, سَوْفَ, and تاء التأنيث الساكنة.</span>
</div>

<!-- ============ BUCKETS ============ -->
<h2 class="dcm-h2"><span class="dcm-num">1</span>Three buckets <span class="dcm-ar">ثَلَاثَةُ أَقْسَامٍ</span></h2>

<div class="dcm-cause-row">
  <div class="dcm-cause-card dcm-c4">
    <span class="dcm-cause-ar">مُخْتَصٌّ بِالْمَاضِي</span>
    <span class="dcm-cause-en">تاء التأنيث الساكنة</span>
  </div>
  <div class="dcm-cause-card dcm-c2">
    <span class="dcm-cause-ar">مُخْتَصٌّ بِالْمُضَارِعِ</span>
    <span class="dcm-cause-en">السين · سوف</span>
  </div>
  <div class="dcm-cause-card dcm-c1">
    <span class="dcm-cause-ar">مُشْتَرَك</span>
    <span class="dcm-cause-en">قَدْ — enters both</span>
  </div>
</div>

<!-- ============ QAD ============ -->
<h2 class="dcm-h2"><span class="dcm-num">2</span><span class="dcm-ar">قَدْ</span></h2>
<p>
  Enters ماضٍ and مضارع — with different meaning-pairs on each.
</p>

<div class="dcm-chart">
  <div class="dcm-chart-root-row">
    <div class="dcm-chart-root">
      <span class="dcm-ar">قَدْ</span>
      <span class="dcm-en">two hosts · four senses</span>
    </div>
  </div>
  <div class="dcm-chart-stem"></div>
  <div class="dcm-chart-hline-wrap"><div class="dcm-chart-hline"></div></div>
  <div class="dcm-chart-row">
    <div class="dcm-chart-branch dcm-chart-branch--wide">
      <div class="dcm-chart-branch-stem"></div>
      <div class="dcm-chart-node dcm-c4">
        <span class="dcm-ar">+ مَاضٍ</span>
        <span class="dcm-en">تحقيق · تقريب</span>
        <span class="dcm-ex">confirmation · nearness in time</span>
      </div>
    </div>
    <div class="dcm-chart-branch dcm-chart-branch--wide">
      <div class="dcm-chart-branch-stem"></div>
      <div class="dcm-chart-node dcm-c1">
        <span class="dcm-ar">+ مُضَارِع</span>
        <span class="dcm-en">تقليل · تكثير</span>
        <span class="dcm-ex">rarity · frequency</span>
      </div>
    </div>
  </div>
</div>

<h3 class="dcm-h3">On مَاضٍ — تَحْقِيق</h3>
<div class="dcm-sentence dcm-c4">
  <span class="dcm-tag dcm-tag--green">تحقيق</span>
  <span class="dcm-ar"><span class="dcm-hl">قَدْ</span> أَفْلَحَ الْمُؤْمِنُونَ</span>
  <span class="dcm-gloss">Al-Muʾminūn 1 — "Certainly the believers have succeeded."</span>
</div>
<div class="dcm-sentence dcm-c4">
  <span class="dcm-tag dcm-tag--green">تحقيق</span>
  <span class="dcm-ar">لَ<span class="dcm-hl">قَدْ</span> رَضِيَ اللَّهُ عَنِ الْمُؤْمِنِينَ</span>
  <span class="dcm-gloss">Al-Fatḥ 18 — "Certainly Allāh was pleased with the believers."</span>
</div>

<h3 class="dcm-h3">On مَاضٍ — تَقْرِيب</h3>
<div class="dcm-sentence dcm-c4">
  <span class="dcm-tag dcm-tag--green">تقريب</span>
  <span class="dcm-ar"><span class="dcm-hl">قَدْ</span> قَامَ زَيْدٌ</span>
  <span class="dcm-gloss">"Zayd has [just] stood" — when the standing is close to your report (often English present perfect).</span>
</div>

<h3 class="dcm-h3">On مُضَارِع — تَقْلِيل</h3>
<div class="dcm-sentence dcm-c1">
  <span class="dcm-tag dcm-tag--alif">تقليل</span>
  <span class="dcm-ar"><span class="dcm-hl">قَدْ</span> يَصْدُقُ الْكَذُوبُ</span>
  <span class="dcm-gloss">"The liar may [sometimes] speak the truth."</span>
</div>
<div class="dcm-sentence dcm-c1">
  <span class="dcm-tag dcm-tag--alif">تقليل</span>
  <span class="dcm-ar"><span class="dcm-hl">قَدْ</span> يَجُودُ الْبَخِيلُ</span>
  <span class="dcm-gloss">"The miser may [sometimes] be generous."</span>
</div>
<div class="dcm-sentence dcm-c1">
  <span class="dcm-tag dcm-tag--alif">تقليل</span>
  <span class="dcm-ar"><span class="dcm-hl">قَدْ</span> يَنْجَحُ الْبَلِيدُ</span>
  <span class="dcm-gloss">"The dull-witted may [sometimes] succeed."</span>
</div>

<h3 class="dcm-h3">On مُضَارِع — تَكْثِير</h3>
<div class="dcm-sentence dcm-c1">
  <span class="dcm-tag dcm-tag--alif">تكثير</span>
  <span class="dcm-ar"><span class="dcm-hl">قَدْ</span> يَنَالُ الْمُجْتَهِدُ بُغْيَتَهُ</span>
  <span class="dcm-gloss">"The diligent [often] attains his aim."</span>
</div>
<div class="dcm-sentence dcm-c1">
  <span class="dcm-tag dcm-tag--alif">تكثير</span>
  <span class="dcm-ar"><span class="dcm-hl">قَدْ</span> يَفْعَلُ التَّقِيُّ الْخَيْرَ</span>
  <span class="dcm-gloss">"The pious [often] does good."</span>
</div>
<div class="dcm-sentence dcm-c1">
  <span class="dcm-tag dcm-tag--alif">تكثير · شعر</span>
  <span class="dcm-ar"><span class="dcm-hl">قَدْ</span> يُدْرِكُ الْمُتَأَنِّي بَعْضَ حَاجَتِهِ ۝ وَ<span class="dcm-hl">قَدْ</span> يَكُونُ مَعَ الْمُسْتَعْجِلِ الزَّلَلُ</span>
  <span class="dcm-gloss">"The patient often attains part of his need; error often accompanies the hasty."</span>
</div>

<!-- ============ SIN / SAWFA ============ -->
<h2 class="dcm-h2"><span class="dcm-num">3</span><span class="dcm-ar">السِّينُ وَسَوْفَ</span></h2>
<p>
  Both enter <strong>only</strong> the مُضَارِع. Both mark <span class="dcm-ar">تَنْفِيس</span> — opening the action into the future.
  السين is nearer; سوف is farther (or used in threat / warning).
</p>

<div class="dcm-flip">
  <div class="dcm-flip-box dcm-c2">
    <span class="dcm-ar">سَـ + مضارع</span>
    <span class="dcm-en">nearer future</span>
  </div>
  <div class="dcm-flip-arrow">↔</div>
  <div class="dcm-flip-box dcm-c3">
    <span class="dcm-ar">سَوْفَ + مضارع</span>
    <span class="dcm-en">farther / threat · warning</span>
  </div>
</div>

<div class="dcm-sentence dcm-c2">
  <span class="dcm-tag dcm-tag--waw">سين</span>
  <span class="dcm-ar"><span class="dcm-hl">سَيَقُولُ</span> السُّفَهَاءُ مِنَ النَّاسِ</span>
  <span class="dcm-gloss">Al-Baqarah 142 — "The foolish among the people will say."</span>
</div>
<div class="dcm-sentence dcm-c2">
  <span class="dcm-tag dcm-tag--waw">سين</span>
  <span class="dcm-ar"><span class="dcm-hl">سَيَقُولُ</span> لَكَ الْمُخَلَّفُونَ</span>
  <span class="dcm-gloss">Al-Fatḥ 11 — "Those who remained behind will say to you."</span>
</div>
<div class="dcm-sentence dcm-c3">
  <span class="dcm-tag dcm-tag--ya">سوف</span>
  <span class="dcm-ar">وَ<span class="dcm-hl">سَوْفَ</span> يُؤْتِي اللَّهُ الْمُؤْمِنِينَ أَجْرًا عَظِيمًا</span>
  <span class="dcm-gloss">Al-Nisāʾ 146 — "And Allāh is going to give the believers a great reward."</span>
</div>
<div class="dcm-sentence dcm-c3">
  <span class="dcm-tag dcm-tag--ya">سوف</span>
  <span class="dcm-ar">وَ<span class="dcm-hl">سَوْفَ</span> يُؤْتِيهِمْ أُجُورَهُمْ</span>
  <span class="dcm-gloss">Al-Nisāʾ 152 — "And He is going to give them their rewards."</span>
</div>

<!-- ============ TA ============ -->
<h2 class="dcm-h2"><span class="dcm-num">4</span>Silent feminine <span class="dcm-ar">تَاءُ التَّأْنِيثِ السَّاكِنَةُ</span></h2>
<p>
  Enters <strong>only</strong> the مَاضٍ. It shows the noun attributed to the verb is feminine —
  whether فَاعِل or نَائِب فَاعِل.
</p>

<div class="dcm-sentence dcm-c4">
  <span class="dcm-tag dcm-tag--green">فاعل مؤنث</span>
  <span class="dcm-ar">قَالَ<span class="dcm-hl">تْ</span> عَائِشَةُ أُمُّ الْمُؤْمِنِينَ</span>
  <span class="dcm-gloss">"ʿĀʾishah, Mother of the Believers, said."</span>
</div>
<div class="dcm-sentence dcm-c4">
  <span class="dcm-tag dcm-tag--green">نائب فاعل</span>
  <span class="dcm-ar">فُرِشَ<span class="dcm-hl">تْ</span> دَارُنَا بِالْحَرِيرِ</span>
  <span class="dcm-gloss">"Our house was furnished with silk."</span>
</div>

<p class="dcm-callout dcm-yellow">
  <strong>ساكنة in origin.</strong> A vowel may appear only to avoid التقاء الساكنين — that does not cancel the sign.
</p>

<div class="dcm-sentence dcm-c4">
  <span class="dcm-tag dcm-tag--green">عارض · يوسف</span>
  <span class="dcm-ar">وَقَالَ<span class="dcm-hl">تِ</span> اخْرُجْ عَلَيْهِنَّ</span>
  <span class="dcm-gloss">Yūsuf 31 — تِ moved for التقاء الساكنين.</span>
</div>
<div class="dcm-sentence dcm-c4">
  <span class="dcm-tag dcm-tag--green">عارض · القصص</span>
  <span class="dcm-ar">إِذْ قَالَ<span class="dcm-hl">تِ</span> امْرَأَةُ فِرْعَوْنَ</span>
  <span class="dcm-gloss">Al-Qaṣaṣ 9.</span>
</div>
<div class="dcm-sentence dcm-c4">
  <span class="dcm-tag dcm-tag--green">عارض · فصلت</span>
  <span class="dcm-ar">قَالَتَ<span class="dcm-hl">ا</span> أَتَيْنَا طَائِعِينَ</span>
  <span class="dcm-gloss">Fuṣṣilat 11 — dual feminine form.</span>
</div>

<!-- ============ AMR SIGN ============ -->
<h2 class="dcm-h2"><span class="dcm-num">5</span>What the matn left — <span class="dcm-ar">عَلَامَةُ الْأَمْرِ</span></h2>
<p>
  The commentary adds the sign of الأمر (the author followed a Kūfan frame that folds الْأَمْر into the مُضَارِع family):
  <strong>request</strong> plus acceptance of <span class="dcm-ar">يَاءُ الْمُخَاطَبَةِ</span> or <span class="dcm-ar">نُونُ التَّوْكِيدِ</span>.
</p>

<div class="dcm-parse-row">
  <div class="dcm-parse-chip dcm-c2"><span class="dcm-ar">قُمْ</span><span class="dcm-role">طلب · stand</span></div>
  <div class="dcm-parse-chip dcm-c2"><span class="dcm-ar">اقْعُدْ</span><span class="dcm-role">طلب · sit</span></div>
  <div class="dcm-parse-chip dcm-c2"><span class="dcm-ar">اكْتُبْ</span><span class="dcm-role">طلب · write</span></div>
  <div class="dcm-parse-chip dcm-c2"><span class="dcm-ar">انْظُرْ</span><span class="dcm-role">طلب · look</span></div>
</div>

<div class="dcm-flip">
  <div class="dcm-flip-box dcm-c2">
    <span class="dcm-ar">قُومِي · اقْعُدِي</span>
    <span class="dcm-en">accepts ياء المخاطبة (f.)</span>
  </div>
  <div class="dcm-flip-arrow">·</div>
  <div class="dcm-flip-box dcm-c3">
    <span class="dcm-ar">اكْتُبَنَّ · انْظُرَنَّ</span>
    <span class="dcm-en">accepts نُون of emphasis</span>
  </div>
</div>

<div class="dcm-sentence dcm-c3">
  <span class="dcm-tag dcm-tag--ya">نون التوكيد</span>
  <span class="dcm-ar">انْظُرَ<span class="dcm-hl">نَّ</span> إِلَى مَا يَنْفَعُكَ</span>
  <span class="dcm-gloss">"Look most certainly at what benefits you."</span>
</div>

<!-- ============ RECAP ============ -->
<div class="dcm-chart">
  <h3 class="dcm-h3">recap</h3>
  <table class="dcm-table">
    <tr><th>Sign</th><th>Enters</th><th>Main sense</th><th>Example</th></tr>
    <tr>
      <td class="dcm-td-ar">قَدْ</td>
      <td>ماضٍ + مضارع</td>
      <td>تحقيق/تقريب · تقليل/تكثير</td>
      <td class="dcm-td-ar">قَدْ أَفْلَحَ · قَدْ يَصْدُقُ</td>
    </tr>
    <tr>
      <td class="dcm-td-ar">السِّين</td>
      <td>مضارع</td>
      <td>near future</td>
      <td class="dcm-td-ar">سَيَقُولُ</td>
    </tr>
    <tr>
      <td class="dcm-td-ar">سَوْفَ</td>
      <td>مضارع</td>
      <td>farther future / threat</td>
      <td class="dcm-td-ar">سَوْفَ يُؤْتِي</td>
    </tr>
    <tr>
      <td class="dcm-td-ar">تَاء التَّأْنِيث</td>
      <td>ماضٍ</td>
      <td>feminine subject (or deputy)</td>
      <td class="dcm-td-ar">قَالَتْ عَائِشَةُ</td>
    </tr>
    <tr>
      <td class="dcm-td-ar">عَلَامَة الأَمْر</td>
      <td>أمر</td>
      <td>طلب + ياء مخاطبة / نون توكيد</td>
      <td class="dcm-td-ar">قُومِي · اكْتُبَنَّ</td>
    </tr>
  </table>
</div>

<hr class="dcm-divider" />
<p class="dcm-callout dcm-green dcm-callout--end">
  <strong>In short:</strong> قَدْ is shared; سين and سوف lock the مُضَارِع to the future; silent تَاء marks the مَاضٍ with a feminine subject.
  The particle is known by accepting <em>none</em> of the noun or verb signs.
</p>
`;

export default function AlamatFailGuide() {
  return (
    <div
      className="damma-commentary"
      dangerouslySetInnerHTML={{ __html: ALAMAT_FAIL_HTML }}
    />
  );
}

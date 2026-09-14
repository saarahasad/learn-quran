const AQSAM_NAIB_FAIL_HTML = `
<p class="dcm-lead">
  A short chapter, because the structure here isn't new — it's a direct echo of the fāʿil chapter. نائب الفاعل splits into ظاهر and مضمر exactly as فاعل did, and مضمر splits into متصل and منفصل exactly the same way too. The text itself says so and declines to repeat the details.
</p>

<div class="dcm-chart">
  <div class="dcm-chart-root-row">
    <div class="dcm-chart-root">
      <span class="dcm-ar">نَائِبُ الْفَاعِلِ</span>
      <span class="dcm-en">same split as فاعل</span>
    </div>
  </div>
  <div class="dcm-chart-stem"></div>
  <div class="dcm-chart-hline-wrap"><div class="dcm-chart-hline"></div></div>
  <div class="dcm-chart-row">
    <div class="dcm-chart-branch">
      <div class="dcm-chart-branch-stem"></div>
      <div class="dcm-chart-node dcm-c1">
        <span class="dcm-ar">ظَاهِر</span>
        <span class="dcm-en">an apparent noun</span>
        <span class="dcm-ex dcm-ar">زَيْدٌ</span>
      </div>
    </div>
    <div class="dcm-chart-branch dcm-chart-branch--wide">
      <div class="dcm-chart-branch-stem"></div>
      <div class="dcm-chart-node dcm-c2">
        <span class="dcm-ar">مُضْمَر</span>
        <span class="dcm-en">a pronoun — 12 types</span>
      </div>
      <div class="dcm-chart-subrow">
        <div class="dcm-chart-subnode dcm-c2">
          <span class="dcm-ar">مُتَّصِل</span>
          <span class="dcm-en">attached — built into the verb</span>
        </div>
        <div class="dcm-chart-subnode dcm-c2">
          <span class="dcm-ar">مُنْفَصِل</span>
          <span class="dcm-en">detached — a standalone word</span>
        </div>
      </div>
    </div>
  </div>
</div>

<h2 class="dcm-h2"><span class="dcm-num">1</span>The apparent نائب الفاعل <span class="dcm-ar">الظَّاهِر</span></h2>
<p>
  Both tenses, with two different verbs:
</p>
<div class="dcm-sentence dcm-c1">
  <span class="dcm-ar">ضُرِبَ <span class="dcm-hl">زَيْدٌ</span></span>
  <span class="dcm-gloss">"Zayd was hit."</span>
</div>
<div class="dcm-sentence dcm-c1">
  <span class="dcm-ar">يُضْرَبُ <span class="dcm-hl">زَيْدٌ</span></span>
  <span class="dcm-gloss">"Zayd is [being] hit."</span>
</div>
<div class="dcm-sentence dcm-c1">
  <span class="dcm-ar">أُكْرِمَ <span class="dcm-hl">عَمْرٌو</span></span>
  <span class="dcm-gloss">"ʿAmr was honoured."</span>
</div>
<div class="dcm-sentence dcm-c1">
  <span class="dcm-ar">يُكْرَمُ <span class="dcm-hl">عَمْرٌو</span></span>
  <span class="dcm-gloss">"ʿAmr is [being] honoured."</span>
</div>

<h2 class="dcm-h2"><span class="dcm-num">2</span>The implicit نائب الفاعل — all twelve <span class="dcm-ar">الْمُضْمَرُ اثْنَا عَشَرَ</span></h2>
<p>
  Same 2 + 5 + 5 breakdown as the fāʿil's implicit forms (2 for the speaker, 5 for the addressed, 5 for the absent) — laid out here on <span class="dcm-ar">ضُرِبَ</span> ("to be hit") for completeness:
</p>

<table class="dcm-grid">
  <tr><th>Person</th><th>Gender</th><th>Number</th><th>Form</th></tr>
  <tr class="dcm-row-1st">
    <td rowspan="2">First</td><td>—</td><td>Singular</td><td class="dcm-grid-ar">ضُرِبْتُ</td>
  </tr>
  <tr class="dcm-row-1st">
    <td>—</td><td>Plural</td><td class="dcm-grid-ar">ضُرِبْنَا</td>
  </tr>
  <tr class="dcm-row-2nd">
    <td rowspan="5">Second</td><td>Masc.</td><td>Singular</td><td class="dcm-grid-ar">ضُرِبْتَ</td>
  </tr>
  <tr class="dcm-row-2nd">
    <td>Fem.</td><td>Singular</td><td class="dcm-grid-ar">ضُرِبْتِ</td>
  </tr>
  <tr class="dcm-row-2nd">
    <td>Masc./Fem.</td><td>Dual</td><td class="dcm-grid-ar">ضُرِبْتُمَا</td>
  </tr>
  <tr class="dcm-row-2nd">
    <td>Masc.</td><td>Plural</td><td class="dcm-grid-ar">ضُرِبْتُمْ</td>
  </tr>
  <tr class="dcm-row-2nd">
    <td>Fem.</td><td>Plural</td><td class="dcm-grid-ar">ضُرِبْتُنَّ</td>
  </tr>
  <tr class="dcm-row-3rd">
    <td rowspan="5">Third</td><td>Masc.</td><td>Singular</td><td class="dcm-grid-ar">ضُرِبَ</td>
  </tr>
  <tr class="dcm-row-3rd">
    <td>Fem.</td><td>Singular</td><td class="dcm-grid-ar">ضُرِبَتْ</td>
  </tr>
  <tr class="dcm-row-3rd">
    <td>Masc./Fem.</td><td>Dual</td><td class="dcm-grid-ar">ضُرِبَا</td>
  </tr>
  <tr class="dcm-row-3rd">
    <td>Masc.</td><td>Plural</td><td class="dcm-grid-ar">ضُرِبُوا</td>
  </tr>
  <tr class="dcm-row-3rd">
    <td>Fem.</td><td>Plural</td><td class="dcm-grid-ar">ضُرِبْنَ</td>
  </tr>
</table>

<p class="dcm-callout dcm-yellow">
  Compare this table letter-for-letter with the فاعل's own مضمر table on ضَرَبَ: every ending is identical, only the internal vowelling of the verb has shifted to the passive pattern from the previous chapter (ḍammah first, kasrah before last, for māḍī). The pronoun system itself hasn't changed at all — it's the same twelve slots, wearing a passive verb instead of an active one.
</p>

<hr class="dcm-divider" />

<h2 class="dcm-h2"><span class="dcm-num">3</span>Worked examples <span class="dcm-ar">تَدْرِيبٌ عَلَى الْإِعْرَابِ</span></h2>

<h3 class="dcm-h3">1 — يُحْتَرَمُ الْعَالِمُ</h3>
<div class="dcm-parse-row">
  <div class="dcm-parse-chip dcm-c4">
    <span class="dcm-ar">يُحْتَرَمُ</span>
    <span class="dcm-role">فعل مضارع مبني للمجهول، مرفوع لتجرده من الناصب والجازم، علامة رفعه الضمة الظاهرة</span>
  </div>
  <div class="dcm-parse-chip dcm-c4">
    <span class="dcm-ar">الْعَالِمُ</span>
    <span class="dcm-role">نائب فاعل، مرفوع، علامة رفعه الضمة الظاهرة</span>
  </div>
</div>
<p class="dcm-caption">"The scholar is honoured."</p>

<h3 class="dcm-h3">2 — أُهِينَ الْجَاهِلُ</h3>
<div class="dcm-parse-row">
  <div class="dcm-parse-chip dcm-c4">
    <span class="dcm-ar">أُهِينَ</span>
    <span class="dcm-role">فعل ماضٍ مبني للمجهول، مبني على الفتح، لا محل له من الإعراب</span>
  </div>
  <div class="dcm-parse-chip dcm-c4">
    <span class="dcm-ar">الْجَاهِلُ</span>
    <span class="dcm-role">نائب فاعل، مرفوع، علامة رفعه الضمة الظاهرة</span>
  </div>
</div>
<p class="dcm-caption">"The ignorant one was disdained."</p>

<hr class="dcm-divider" />
<p class="dcm-callout dcm-green dcm-callout--end">
  <strong>In short:</strong> نائب الفاعل behaves exactly like فاعل in every structural respect — ظاهر vs. مضمر, then مضمر splitting into متصل vs. منفصل, with the same twelve pronoun slots split 2/5/5 by person. The only thing that changes between the two chapters is the verb wearing a passive shape instead of an active one; the subject-slot machinery underneath is identical.
</p>
`;

export default function AqsamNaibFailGuide() {
  return (
    <div
      className="damma-commentary"
      dangerouslySetInnerHTML={{ __html: AQSAM_NAIB_FAIL_HTML }}
    />
  );
}

const AQSAM_FAIL_HTML = `
<p class="dcm-lead">
  Having defined the fāʿil, the book now maps out every shape it can take. The subject splits into two: <span class="dcm-ar">ظَاهِر</span> ("apparent" — a plain noun) and <span class="dcm-ar">مُضْمَر</span> ("implicit" — a pronoun, covered in a later chapter). This chapter is entirely about the apparent kind, and it turns out to vary along three independent dimensions at once.
</p>

<!-- ============ OVERVIEW ============ -->
<div class="dcm-chart">
  <div class="dcm-chart-root-row">
    <div class="dcm-chart-root">
      <span class="dcm-ar">الْفَاعِلُ</span>
      <span class="dcm-en">two categories</span>
    </div>
  </div>
  <div class="dcm-chart-stem"></div>
  <div class="dcm-chart-hline-wrap"><div class="dcm-chart-hline"></div></div>
  <div class="dcm-chart-row">
    <div class="dcm-chart-branch">
      <div class="dcm-chart-branch-stem"></div>
      <div class="dcm-chart-node dcm-c1">
        <span class="dcm-ar">ظَاهِر</span>
        <span class="dcm-en">apparent — clear without needing context</span>
        <span class="dcm-ex">this chapter</span>
      </div>
    </div>
    <div class="dcm-chart-branch">
      <div class="dcm-chart-branch-stem"></div>
      <div class="dcm-chart-node dcm-c2">
        <span class="dcm-ar">مُضْمَر</span>
        <span class="dcm-en">implicit — needs a 1st/2nd/3rd-person indicator</span>
        <span class="dcm-ex">later chapter</span>
      </div>
    </div>
  </div>
</div>

<h2 class="dcm-h2"><span class="dcm-num">1</span>Three dimensions of variation <span class="dcm-ar">ثَلَاثَةُ أَبْعَادٍ</span></h2>
<p>
  An apparent fāʿil varies along three independent axes simultaneously — every real example is a combination of all three:
</p>

<div class="dcm-chart">
  <div class="dcm-chart-row">
    <div class="dcm-chart-branch">
      <div class="dcm-chart-node dcm-c1">
        <span class="dcm-ar">الْعَدَد</span>
        <span class="dcm-en">number — 4 types</span>
        <span class="dcm-ex dcm-ar">مفرد، مثنى، جمع تصحيح، جمع تكسير</span>
      </div>
    </div>
    <div class="dcm-chart-branch">
      <div class="dcm-chart-node dcm-c2">
        <span class="dcm-ar">الْجِنْس</span>
        <span class="dcm-en">gender — 2 types</span>
        <span class="dcm-ex dcm-ar">مذكر، مؤنث</span>
      </div>
    </div>
    <div class="dcm-chart-branch">
      <div class="dcm-chart-node dcm-c3">
        <span class="dcm-ar">عَلَامَةُ الرَّفْع</span>
        <span class="dcm-en">sign of rafʿ — 3 types</span>
        <span class="dcm-ex dcm-ar">ظاهرة، مقدرة، حروف</span>
      </div>
    </div>
  </div>
</div>

<p>
  4 number-types × 2 genders gives <strong>eight base types</strong>. Every one of the eight is then shown with both a <span class="dcm-ar">مَاضِي</span> (past-tense) and <span class="dcm-ar">مُضَارِع</span> (present-tense) verb, and every one also falls into one of the three rafʿ-sign categories.
</p>

<h2 class="dcm-h2"><span class="dcm-num">2</span>The eight base types — every example <span class="dcm-ar">الْأَنْوَاعُ الثَّمَانِيَةُ</span></h2>

<table class="dcm-table">
  <tr><th>Type</th><th>مَاضِي examples</th><th>مُضَارِع examples</th></tr>
  <tr>
    <td>1. singular, masc.<br><span class="dcm-ar">مفرد مذكر</span></td>
    <td class="dcm-td-ar">سَافَرَ مُحَمَّدٌ<br>حَضَرَ خَالِدٌ</td>
    <td class="dcm-td-ar">يُسَافِرُ مُحَمَّدٌ<br>يَحْضُرُ خَالِدٌ</td>
  </tr>
  <tr class="dcm-row-letters">
    <td>2. dual, masc.<br><span class="dcm-ar">مثنى مذكر</span></td>
    <td class="dcm-td-ar">حَضَرَ الصَّدِيقَانِ<br>سَافَرَ الْأَخَوَانِ</td>
    <td class="dcm-td-ar">يَحْضُرُ الصَّدِيقَانِ<br>يُسَافِرُ الْأَخَوَانِ</td>
  </tr>
  <tr class="dcm-row-letters">
    <td>3. sound plural, masc.<br><span class="dcm-ar">جمع تصحيح مذكر</span></td>
    <td class="dcm-td-ar">حَضَرَ الْمُحَمَّدُونَ<br>حَجَّ الْمُسْلِمُونَ</td>
    <td class="dcm-td-ar">يَحْضُرُ الْمُحَمَّدُونَ<br>يَحُجُّ الْمُسْلِمُونَ</td>
  </tr>
  <tr>
    <td>4. broken plural, masc.<br><span class="dcm-ar">جمع تكسير مذكر</span></td>
    <td class="dcm-td-ar">حَضَرَ الْأَصْدِقَاءُ<br>سَافَرَ الزُّعَمَاءُ</td>
    <td class="dcm-td-ar">يَحْضُرُ الْأَصْدِقَاءُ<br>يُسَافِرُ الزُّعَمَاءُ</td>
  </tr>
  <tr>
    <td>5. singular, fem.<br><span class="dcm-ar">مفرد مؤنث</span></td>
    <td class="dcm-td-ar">حَضَرَتْ هِنْدٌ<br>سَافَرَتْ سُعَادُ</td>
    <td class="dcm-td-ar">تَحْضُرُ هِنْدٌ<br>تُسَافِرُ سُعَادُ</td>
  </tr>
  <tr class="dcm-row-letters">
    <td>6. dual, fem.<br><span class="dcm-ar">مثنى مؤنث</span></td>
    <td class="dcm-td-ar">حَضَرَتِ الْهِنْدَانِ<br>سَافَرَتِ الزَّيْنَبَانِ</td>
    <td class="dcm-td-ar">تَحْضُرُ الْهِنْدَانِ<br>تُسَافِرُ الزَّيْنَبَانِ</td>
  </tr>
  <tr>
    <td>7. sound plural, fem.<br><span class="dcm-ar">جمع تصحيح مؤنث</span></td>
    <td class="dcm-td-ar">حَضَرَتِ الْهِنْدَاتُ<br>سَافَرَتِ الزَّيْنَبَاتُ</td>
    <td class="dcm-td-ar">تَحْضُرُ الْهِنْدَاتُ<br>تُسَافِرُ الزَّيْنَبَاتُ</td>
  </tr>
  <tr>
    <td>8. broken plural, fem.<br><span class="dcm-ar">جمع تكسير مؤنث</span></td>
    <td class="dcm-td-ar">حَضَرَتِ الْهُنُودُ<br>سَافَرَتِ الزَّيَانِبُ</td>
    <td class="dcm-td-ar">تَحْضُرُ الْهُنُودُ<br>تُسَافِرُ الزَّيَانِبُ</td>
  </tr>
</table>
<p class="dcm-callout">
  Rows shaded pink are the three types whose sign of rafʿ is a <em>letter</em>, not a ḍammah — see below.
</p>

<h2 class="dcm-h2"><span class="dcm-num">3</span>Sorting the eight types by sign of rafʿ <span class="dcm-ar">عَلَامَةُ الرَّفْعِ فِي كُلِّ نَوْعٍ</span></h2>
<p>
  Of the eight types above, <strong>five</strong> take an ordinary explicit ḍammah: singular masc., broken plural masc., singular fem., sound plural fem., and broken plural fem. The remaining <strong>three</strong> — dual masc., dual fem., and sound plural masc. — take a letter instead (alif for the duals, wāw for the sound masculine plural), exactly as covered in the earlier niyāba chapters.
</p>

<div class="dcm-chart">
  <div class="dcm-chart-row">
    <div class="dcm-chart-branch dcm-chart-branch--wide">
      <div class="dcm-chart-node dcm-c1">
        <span class="dcm-ar">ضَمَّة ظَاهِرَة</span>
        <span class="dcm-en">5 of 8 types</span>
        <span class="dcm-ex dcm-ar">مفرد (both genders)، جمع تكسير (both genders)، جمع تصحيح مؤنث</span>
      </div>
    </div>
    <div class="dcm-chart-branch dcm-chart-branch--wide">
      <div class="dcm-chart-node dcm-c3">
        <span class="dcm-ar">حُرُوف نَائِبَة</span>
        <span class="dcm-en">3 of 8 types</span>
        <span class="dcm-ex dcm-ar">مثنى (both genders)، جمع تصحيح مذكر</span>
      </div>
    </div>
  </div>
</div>

<h3 class="dcm-h3">a separate case — implicit ḍammah (مُقَدَّرَة)</h3>
<p>
  None of the eight base examples above happen to end in a vowel-blocking letter, so the commentary adds three fresh ones specifically to illustrate implicit ḍammah — the same <span class="dcm-ar">تَعَذُّر</span> / <span class="dcm-ar">ثِقَل</span> logic from the very first ḍammah chapter:
</p>
<div class="dcm-sentence dcm-c2">
  <span class="dcm-ar">حَضَرَ <span class="dcm-hl">الْفَتَى</span> &nbsp;/&nbsp; يَحْضُرُ <span class="dcm-hl">الْفَتَى</span></span>
  <span class="dcm-gloss">"The young man was present / is present." — implicit on the alif</span>
</div>
<div class="dcm-sentence dcm-c2">
  <span class="dcm-ar">سَافَرَ <span class="dcm-hl">الْقَاضِي</span> &nbsp;/&nbsp; يُسَافِرُ <span class="dcm-hl">الْقَاضِي</span></span>
  <span class="dcm-gloss">"The judge travelled / travels." — implicit on the yā</span>
</div>
<div class="dcm-sentence dcm-c2">
  <span class="dcm-ar">أَقْبَلَ <span class="dcm-hl">صَدِيقِي</span> &nbsp;/&nbsp; يُقْبِلُ <span class="dcm-hl">صَدِيقِي</span></span>
  <span class="dcm-gloss">"My friend approached / approaches." — implicit before the speaker's yā</span>
</div>

<h3 class="dcm-h3">letters standing in for ḍammah — one more pair</h3>
<p>
  Beyond the dual and sound-masculine-plural examples already in the table above, the commentary adds the five nouns as a further instance of this category — <span class="dcm-example">أَبُوكَ</span> and <span class="dcm-example">أَخُوكَ</span> take wāw in rafʿ:
</p>
<div class="dcm-sentence dcm-c3">
  <span class="dcm-ar">حَضَرَ <span class="dcm-hl">أَبُوكَ</span> &nbsp;/&nbsp; يَحْضُرُ <span class="dcm-hl">أَبُوكَ</span></span>
  <span class="dcm-gloss">"Your father was present / is present."</span>
</div>
<div class="dcm-sentence dcm-c3">
  <span class="dcm-ar">سَافَرَ <span class="dcm-hl">أَخُوكَ</span> &nbsp;/&nbsp; يُسَافِرُ <span class="dcm-hl">أَخُوكَ</span></span>
  <span class="dcm-gloss">"Your brother travelled / travels."</span>
</div>

<hr class="dcm-divider" />
<p class="dcm-callout dcm-green dcm-callout--end">
  <strong>In short:</strong> every apparent fāʿil sits at the intersection of three choices — one of four number-types, one of two genders, and one of three ways to mark rafʿ — and every combination works equally with either a māḍī or a muḍāriʿ verb. Nothing here is a new rule; it's the fāʿil definition from the previous chapter, now walked systematically through every shape a plain noun can take.
</p>
`;

export default function AqsamFailGuide() {
  return (
    <div
      className="damma-commentary"
      dangerouslySetInnerHTML={{ __html: AQSAM_FAIL_HTML }}
    />
  );
}

const NAWASIKH_OVERVIEW_HTML = `
<p class="dcm-lead">
  So far, mubtadaʾ and khabar have always followed one rule: both marfūʿ. This chapter introduces the exceptions — three families of words that, once they enter a sentence, override that default and impose a new case pattern of their own. They're called <span class="dcm-ar">النَّوَاسِخ</span>, "the abrogators."
</p>

<h2 class="dcm-h2"><span class="dcm-num">1</span>The baseline, before any abrogator <span class="dcm-ar">الْأَصْل</span></h2>
<div class="dcm-transform">
  <div class="dcm-transform-box dcm-c1"><span class="dcm-ar">مُبْتَدَأ</span><span class="dcm-en">رفع</span></div>
  <div class="dcm-transform-box dcm-c1"><span class="dcm-ar">خَبَر</span><span class="dcm-en">رفع</span></div>
</div>
<p class="dcm-caption">Both marfūʿ — the ordinary rule from the last two chapters.</p>

<!-- ============ OVERVIEW ============ -->
<div class="dcm-chart">
  <div class="dcm-chart-root-row">
    <div class="dcm-chart-root">
      <span class="dcm-ar">النَّوَاسِخُ</span>
      <span class="dcm-en">three families that override the default</span>
    </div>
  </div>
  <div class="dcm-chart-stem"></div>
  <div class="dcm-chart-hline-wrap"><div class="dcm-chart-hline"></div></div>
  <div class="dcm-chart-row">
    <div class="dcm-chart-branch">
      <div class="dcm-chart-branch-stem"></div>
      <div class="dcm-chart-node dcm-c1">
        <span class="dcm-ar">كَانَ وَأَخَوَاتُهَا</span>
        <span class="dcm-en">verbs — رفع الاسم، نصب الخبر</span>
      </div>
    </div>
    <div class="dcm-chart-branch">
      <div class="dcm-chart-branch-stem"></div>
      <div class="dcm-chart-node dcm-c2">
        <span class="dcm-ar">إِنَّ وَأَخَوَاتُهَا</span>
        <span class="dcm-en">particles — نصب الاسم، رفع الخبر</span>
      </div>
    </div>
    <div class="dcm-chart-branch">
      <div class="dcm-chart-branch-stem"></div>
      <div class="dcm-chart-node dcm-c3">
        <span class="dcm-ar">ظَنَنْتُ وَأَخَوَاتُهَا</span>
        <span class="dcm-en">verbs — نصب الاسم والخبر معًا</span>
      </div>
    </div>
  </div>
</div>

<h2 class="dcm-h2"><span class="dcm-num">2</span>Type one — كَانَ وَأَخَوَاتُهَا</h2>
<p>
  All verbs. This family keeps the mubtadaʾ (now renamed <span class="dcm-ar">اسْمُهَا</span>, "its noun") marfūʿ exactly as before — but pushes the khabar (now <span class="dcm-ar">خَبَرُهَا</span>) into naṣb.
</p>
<div class="dcm-transform">
  <div class="dcm-transform-box dcm-c1"><span class="dcm-ar">اسْمُهَا</span><span class="dcm-en">رفع — unchanged</span></div>
  <div class="dcm-transform-arrow">≠</div>
  <div class="dcm-transform-box dcm-c3"><span class="dcm-ar">خَبَرُهَا</span><span class="dcm-en">نصب — changed</span></div>
</div>
<div class="dcm-sentence dcm-c1">
  <span class="dcm-ar">كَانَ <span class="dcm-hl">الْجَوُّ</span> <span class="dcm-hl">صَافِيًا</span></span>
  <span class="dcm-gloss">"The weather was clear."</span>
</div>
<div class="dcm-parse-row">
  <div class="dcm-parse-chip dcm-c1">
    <span class="dcm-ar">الْجَوُّ</span>
    <span class="dcm-role">اسم كان، مرفوع، علامة رفعه الضمة الظاهرة</span>
  </div>
  <div class="dcm-parse-chip dcm-c3">
    <span class="dcm-ar">صَافِيًا</span>
    <span class="dcm-role">خبر كان، منصوب، علامة نصبه الفتحة الظاهرة</span>
  </div>
</div>

<h2 class="dcm-h2"><span class="dcm-num">3</span>Type two — إِنَّ وَأَخَوَاتُهَا</h2>
<p>
  All particles. The exact opposite of the first family: the mubtadaʾ (now <span class="dcm-ar">اسْمُهَا</span>) is pushed into naṣb, while the khabar (<span class="dcm-ar">خَبَرُهَا</span>) stays marfūʿ.
</p>
<div class="dcm-transform">
  <div class="dcm-transform-box dcm-c3"><span class="dcm-ar">اسْمُهَا</span><span class="dcm-en">نصب — changed</span></div>
  <div class="dcm-transform-arrow">≠</div>
  <div class="dcm-transform-box dcm-c1"><span class="dcm-ar">خَبَرُهَا</span><span class="dcm-en">رفع — unchanged</span></div>
</div>
<div class="dcm-sentence dcm-c2">
  <span class="dcm-ar">إِنَّ <span class="dcm-hl">اللَّهَ</span> <span class="dcm-hl">عَزِيزٌ</span> حَكِيمٌ</span>
  <span class="dcm-gloss">"Indeed, Allah is Exalted in Might and Wise." — al-Anfāl 8:10</span>
</div>
<div class="dcm-parse-row">
  <div class="dcm-parse-chip dcm-c3">
    <span class="dcm-ar">اللَّهَ</span>
    <span class="dcm-role">اسم إنّ، منصوب، علامة نصبه الفتحة الظاهرة</span>
  </div>
  <div class="dcm-parse-chip dcm-c1">
    <span class="dcm-ar">عَزِيزٌ</span>
    <span class="dcm-role">خبر إنّ، مرفوع، علامة رفعه الضمة الظاهرة</span>
  </div>
</div>

<h2 class="dcm-h2"><span class="dcm-num">4</span>Type three — ظَنَنْتُ وَأَخَوَاتُهَا</h2>
<p>
  All verbs. This family is the most disruptive of the three: <em>both</em> the mubtadaʾ and the khabar are pushed into naṣb, and both are reclassified as objects of the verb (<span class="dcm-ar">مَفْعُولَانِ</span>) rather than kept as "noun" and "khabar" at all.
</p>
<div class="dcm-transform">
  <div class="dcm-transform-box dcm-c3"><span class="dcm-ar">مَفْعُولٌ أَوَّل</span><span class="dcm-en">نصب — changed</span></div>
  <div class="dcm-transform-arrow">+</div>
  <div class="dcm-transform-box dcm-c3"><span class="dcm-ar">مَفْعُولٌ ثَانٍ</span><span class="dcm-en">نصب — changed</span></div>
</div>
<div class="dcm-sentence dcm-c3">
  <span class="dcm-ar">ظَنَنْتُ <span class="dcm-hl">الصَّدِيقَ</span> <span class="dcm-hl">أَخًا</span></span>
  <span class="dcm-gloss">"I thought the friend was a brother."</span>
</div>
<div class="dcm-parse-row">
  <div class="dcm-parse-chip dcm-c3">
    <span class="dcm-ar">الصَّدِيقَ</span>
    <span class="dcm-role">مفعول أول لـ«ظننت»، منصوب، علامة نصبه الفتحة الظاهرة</span>
  </div>
  <div class="dcm-parse-chip dcm-c3">
    <span class="dcm-ar">أَخًا</span>
    <span class="dcm-role">مفعول ثانٍ لـ«ظننت»، منصوب، علامة نصبه الفتحة الظاهرة</span>
  </div>
</div>

<hr class="dcm-divider" />

<h2 class="dcm-h2"><span class="dcm-num">5</span>All three, side by side <span class="dcm-ar">مُقَارَنَةٌ</span></h2>
<table class="dcm-grid">
  <tr><th>Family</th><th>Word type</th><th>Effect on مبتدأ</th><th>Effect on خبر</th></tr>
  <tr>
    <td class="dcm-grid-ar">كَانَ وَأَخَوَاتُهَا</td>
    <td>أفعال</td>
    <td class="dcm-tag-rafu">رفع (اسمها)</td>
    <td class="dcm-tag-nasb">نصب (خبرها)</td>
  </tr>
  <tr>
    <td class="dcm-grid-ar">إِنَّ وَأَخَوَاتُهَا</td>
    <td>أحرف</td>
    <td class="dcm-tag-nasb">نصب (اسمها)</td>
    <td class="dcm-tag-rafu">رفع (خبرها)</td>
  </tr>
  <tr>
    <td class="dcm-grid-ar">ظَنَنْتُ وَأَخَوَاتُهَا</td>
    <td>أفعال</td>
    <td class="dcm-tag-nasb">نصب (مفعول أول)</td>
    <td class="dcm-tag-nasb">نصب (مفعول ثانٍ)</td>
  </tr>
</table>

<h2 class="dcm-h2"><span class="dcm-num">6</span>Why "abrogators"? <span class="dcm-ar">سَبَبُ التَّسْمِيَةِ</span></h2>
<p>
  <span class="dcm-ar">نَسَخَ</span> means to override or supersede — the same root used for legal or scriptural abrogation, where a later ruling replaces an earlier one. These three families earn the name because they do exactly that to a sentence: the mubtadaʾ-khabar pair already had a ruling (both marfūʿ), and each of these words steps in to <em>replace</em> that ruling with a new one of its own, without changing the words' actual meaning or position in the sentence — only their case, and in the case of ẓanantu's family, their very grammatical identity.
</p>

<hr class="dcm-divider" />
<p class="dcm-callout dcm-green dcm-callout--end">
  <strong>In short:</strong> three families abrogate the default mubtadaʾ/khabar ruling, each differently: كان's family (all verbs) keeps the noun marfūʿ and makes the khabar manṣūb; إنّ's family (all particles) does the reverse; ظننت's family (all verbs) manṣūb-izes both and turns them into a verb's two objects. Each of these three families gets its own dedicated chapter next, working through every one of the "sisters" by name.
</p>
`;

export default function NawasikhOverviewGuide() {
  return (
    <div
      className="damma-commentary"
      dangerouslySetInnerHTML={{ __html: NAWASIKH_OVERVIEW_HTML }}
    />
  );
}

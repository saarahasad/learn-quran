const KASRAH_MAWADI_HTML = `
<p class="dcm-lead">
    The kasrah is the last of the four vowel-signs in this book's core system, and it covers a case we haven't seen yet: <em>khafḍ</em> — roughly, the "genitive" state a noun falls into after a preposition or as the second part of a possessive pair. Al-Ājrūmiyyah names three positions, with one extra condition attached to two of them.
  </p>

  <!-- ============ OVERVIEW ============ -->
  <div class="dcm-chart">
    <div class="dcm-chart-root-row">
      <div class="dcm-chart-root">
        <span class="dcm-ar">اَلْكَسْرَةُ</span>
        <span class="dcm-en">sign of khafḍ — 3 positions</span>
      </div>
    </div>
    <div class="dcm-chart-stem"></div>
    <div class="dcm-chart-hline-wrap"><div class="dcm-chart-hline"></div></div>
    <div class="dcm-chart-row">
      <div class="dcm-chart-branch">
        <div class="dcm-chart-branch-stem"></div>
        <div class="dcm-chart-node dcm-c1">
          <span class="dcm-ar">اَلِاسْمُ الْمُفْرَدُ الْمُنْصَرِفُ</span>
          <span class="dcm-en">singular noun — مُنْصَرِف</span>
          <span class="dcm-ex dcm-ar">مُحَمَّدٍ</span>
        </div>
      </div>
      <div class="dcm-chart-branch">
        <div class="dcm-chart-branch-stem"></div>
        <div class="dcm-chart-node dcm-c2">
          <span class="dcm-ar">جَمْعُ التَّكْسِيرِ الْمُنْصَرِفُ</span>
          <span class="dcm-en">broken plural — مُنْصَرِف</span>
          <span class="dcm-ex dcm-ar">رِجَالٍ</span>
        </div>
      </div>
      <div class="dcm-chart-branch">
        <div class="dcm-chart-branch-stem"></div>
        <div class="dcm-chart-node dcm-c3">
          <span class="dcm-ar">جَمْعُ الْمُؤَنَّثِ السَّالِمِ</span>
          <span class="dcm-en">sound feminine plural</span>
          <span class="dcm-ex dcm-ar">فَتَيَاتٍ</span>
        </div>
      </div>
    </div>
  </div>

  <h2 class="dcm-h2"><span class="dcm-num">1</span>Two new ideas before the examples</h2>
  <p>
    <strong>What triggers khafḍ?</strong> Two situations, and every example in this chapter is one or the other:
  </p>

  <div class="dcm-cause-row">
    <div class="dcm-cause-card dcm-c1">
      <span class="dcm-cause-ar">دُخُولُ حَرْفِ الْخَفْضِ</span>
      <span class="dcm-cause-en">preceded by a preposition</span>
      <span class="dcm-cause-ex dcm-ar">سَعَيْتُ إِلَى مُحَمَّدٍ</span>
    </div>
    <div class="dcm-cause-card dcm-c2">
      <span class="dcm-cause-ar">الْإِضَافَة</span>
      <span class="dcm-cause-en">as the second noun in a possessive pair (مُضَاف إِلَيْهِ)</span>
      <span class="dcm-cause-ex dcm-ar">خُلُقُ بَكْرٍ</span>
    </div>
  </div>

  <p>
    <strong>What is <span class="dcm-ar">مُنْصَرِف</span>?</strong> A noun whose ending can take <span class="dcm-ar">تَنْوِين</span> (tanwīn — the extra "n" sound: -un, -an, -in). The text stipulates <span class="dcm-ar">مُنْصَرِف</span> for the first two positions specifically because a noun that is <em>not</em> <span class="dcm-ar">مُنْصَرِف</span> — i.e. <span class="dcm-ar">مَمْنُوع مِنَ الصَّرْف</span> — behaves differently: it takes a <strong>fatḥah</strong> in khafḍ instead of a kasrah, and no tanwīn at all — e.g. <span class="dcm-example">مَرَرْتُ بِأَحْمَدَ</span> ("I passed by Aḥmad") and <span class="dcm-example">مَرَرْتُ بِمَسَاجِدَ</span> ("I passed by mosques"). This exception isn't stipulated for the sound feminine plural, because that category is <em>always</em> <span class="dcm-ar">مُنْصَرِف</span> — there's no <span class="dcm-ar">مَمْنُوع مِنَ الصَّرْف</span> version of it to worry about.
  </p>

  <p class="dcm-callout dcm-yellow">
    Keep <span class="dcm-example">أَحْمَدَ</span> and <span class="dcm-example">مَسَاجِدَ</span> in mind — they're a preview of a later chapter (fatḥah standing in for kasrah), not a mistake. For now, every example below is <span class="dcm-ar">مُنْصَرِف</span>, so kasrah applies throughout.
  </p>

  <!-- ============ 1. SINGULAR NOUN ============ -->
  <h2 class="dcm-h2"><span class="dcm-num">2</span>The singular <span class="dcm-ar">مُنْصَرِف</span> noun <span class="dcm-ar">اَلِاسْمُ الْمُفْرَدُ الْمُنْصَرِفُ</span></h2>
  <p>
    Four examples, split evenly between the two causes of khafḍ above:
  </p>

  <div class="dcm-sentence dcm-c1">
    <span class="dcm-tag dcm-tag--alif">preposition — إِلَى</span>
    <span class="dcm-ar">سَعَيْتُ إِلَى <span class="dcm-hl">مُحَمَّدٍ</span></span>
    <span class="dcm-gloss">"I paced to Muḥammad."</span>
  </div>
  <div class="dcm-sentence dcm-c1">
    <span class="dcm-tag dcm-tag--alif">preposition — عَنْ</span>
    <span class="dcm-ar">رَضِيتُ عَنْ <span class="dcm-hl">عَلِيٍّ</span></span>
    <span class="dcm-gloss">"I was pleased with ʿAlī."</span>
  </div>
  <div class="dcm-sentence dcm-c2">
    <span class="dcm-tag dcm-tag--waw">iḍāfah — مُضَاف إِلَيْهِ</span>
    <span class="dcm-ar">اسْتَفَدْتُ مِنْ مُعَاشَرَةِ <span class="dcm-hl">خَالِدٍ</span></span>
    <span class="dcm-gloss">"I benefited from accompanying Khālid."</span>
  </div>
  <div class="dcm-sentence dcm-c2">
    <span class="dcm-tag dcm-tag--waw">iḍāfah — مُضَاف إِلَيْهِ</span>
    <span class="dcm-ar">أَعْجَبَنِي خُلُقُ <span class="dcm-hl">بَكْرٍ</span></span>
    <span class="dcm-gloss">"I was amazed by Bakr's character."</span>
  </div>

  <p>
    <span class="dcm-example">مُحَمَّدٍ</span> and <span class="dcm-example">عَلِيٍّ</span> are makhfūḍ because a preposition of khafḍ (<span class="dcm-ar">إِلَى</span>, <span class="dcm-ar">عَنْ</span>) precedes them. <span class="dcm-example">خَالِدٍ</span> and <span class="dcm-example">بَكْرٍ</span> are makhfūḍ because the word before each is in a possessive relationship with it (<span class="dcm-ar">مُعَاشَرَةِ خَالِدٍ</span> = "the accompanying <em>of</em> Khālid"; <span class="dcm-ar">خُلُقُ بَكْرٍ</span> = "the character <em>of</em> Bakr"). All four are singular nouns, all four take tanwīn (hence <span class="dcm-ar">مُنْصَرِف</span>), and all four show an explicit kasrah as the sign of khafḍ.
  </p>

  <!-- ============ 2. BROKEN PLURAL ============ -->
  <h2 class="dcm-h2"><span class="dcm-num">3</span>The broken plural <span class="dcm-ar">مُنْصَرِف</span> <span class="dcm-ar">جَمْعُ التَّكْسِيرِ الْمُنْصَرِفُ</span></h2>

  <div class="dcm-sentence dcm-c1">
    <span class="dcm-tag dcm-tag--alif">preposition — بِ + adjective</span>
    <span class="dcm-ar">مَرَرْتُ بِ<span class="dcm-hl">رِجَالٍ</span> <span class="dcm-hl">كِرَامٍ</span></span>
    <span class="dcm-gloss">"I passed by noble men."</span>
  </div>
  <div class="dcm-sentence dcm-c1">
    <span class="dcm-tag dcm-tag--alif">preposition — عَنْ + adjective</span>
    <span class="dcm-ar">رَضِيتُ عَنْ <span class="dcm-hl">أَصْحَابٍ</span> لَنَا <span class="dcm-hl">شُجْعَانٍ</span></span>
    <span class="dcm-gloss">"I was pleased with our courageous companions."</span>
  </div>

  <p>
    <span class="dcm-example">رِجَالٍ</span> and <span class="dcm-example">أَصْحَابٍ</span> are makhfūḍ because a preposition of khafḍ precedes each. <span class="dcm-example">كِرَامٍ</span> and <span class="dcm-example">شُجْعَانٍ</span> are makhfūḍ for a different reason — each is a <span class="dcm-ar">نَعْت</span> (adjective) describing the makhfūḍ noun before it, so it simply agrees in case. All four — <span class="dcm-example">رِجَالٍ</span>, <span class="dcm-example">أَصْحَابٍ</span>, <span class="dcm-example">كِرَامٍ</span>, <span class="dcm-example">شُجْعَانٍ</span> — are broken plurals, all <span class="dcm-ar">مُنْصَرِف</span>, all showing an explicit kasrah.
  </p>

  <!-- ============ 3. SOUND FEMININE PLURAL ============ -->
  <h2 class="dcm-h2"><span class="dcm-num">4</span>The sound feminine plural <span class="dcm-ar">جَمْعُ الْمُؤَنَّثِ السَّالِمِ</span></h2>

  <div class="dcm-sentence dcm-c1">
    <span class="dcm-tag dcm-tag--alif">preposition — إِلَى + adjective</span>
    <span class="dcm-ar">نَظَرْتُ إِلَى <span class="dcm-hl">فَتَيَاتٍ</span> <span class="dcm-hl">مُؤَدَّبَاتٍ</span></span>
    <span class="dcm-gloss">"I looked at refined girls."</span>
  </div>
  <div class="dcm-sentence dcm-c1">
    <span class="dcm-tag dcm-tag--alif">preposition — عَنْ + adjective</span>
    <span class="dcm-ar">رَضِيتُ عَنْ <span class="dcm-hl">مُسْلِمَاتٍ</span> <span class="dcm-hl">قَانِتَاتٍ</span></span>
    <span class="dcm-gloss">"I was pleased with devout Muslim women."</span>
  </div>

  <p>
    Same pattern once more: <span class="dcm-example">فَتَيَاتٍ</span> and <span class="dcm-example">مُسْلِمَاتٍ</span> are makhfūḍ by a preceding preposition; <span class="dcm-example">مُؤَدَّبَاتٍ</span> and <span class="dcm-example">قَانِتَاتٍ</span> are makhfūḍ as a <span class="dcm-ar">تَابِع</span> (a following, agreeing word) to the makhfūḍ noun. All four are sound feminine plurals, and — unlike the first two positions — this category never needs the <span class="dcm-ar">مُنْصَرِف</span> caveat, since it has no <span class="dcm-ar">مَمْنُوع مِنَ الصَّرْف</span> form at all.
  </p>

  <div class="dcm-chart">
    <h3 class="dcm-h3">every example, at a glance</h3>
    <table class="dcm-table">
      <tr><th>Word</th><th>Category</th><th>Why makhfūḍ</th></tr>
      <tr><td class="dcm-td-ar">مُحَمَّدٍ</td><td>singular</td><td>حرف خفض (إِلَى)</td></tr>
      <tr><td class="dcm-td-ar">عَلِيٍّ</td><td>singular</td><td>حرف خفض (عَنْ)</td></tr>
      <tr><td class="dcm-td-ar">خَالِدٍ</td><td>singular</td><td>إضافة — مضاف إليه</td></tr>
      <tr><td class="dcm-td-ar">بَكْرٍ</td><td>singular</td><td>إضافة — مضاف إليه</td></tr>
      <tr><td class="dcm-td-ar">رِجَالٍ</td><td>broken plural</td><td>حرف خفض (بِ)</td></tr>
      <tr><td class="dcm-td-ar">كِرَامٍ</td><td>broken plural</td><td>نعت (تابع)</td></tr>
      <tr><td class="dcm-td-ar">أَصْحَابٍ</td><td>broken plural</td><td>حرف خفض (عَنْ)</td></tr>
      <tr><td class="dcm-td-ar">شُجْعَانٍ</td><td>broken plural</td><td>نعت (تابع)</td></tr>
      <tr><td class="dcm-td-ar">فَتَيَاتٍ</td><td>sound fem. plural</td><td>حرف خفض (إِلَى)</td></tr>
      <tr><td class="dcm-td-ar">مُؤَدَّبَاتٍ</td><td>sound fem. plural</td><td>تابع</td></tr>
      <tr><td class="dcm-td-ar">مُسْلِمَاتٍ</td><td>sound fem. plural</td><td>حرف خفض (عَنْ)</td></tr>
      <tr><td class="dcm-td-ar">قَانِتَاتٍ</td><td>sound fem. plural</td><td>تابع</td></tr>
    </table>
  </div>

  <hr class="dcm-divider" />
  <p class="dcm-callout dcm-green dcm-callout--end">
    <strong>In short:</strong> kasrah marks khafḍ in the singular noun and the broken plural, but only when they're <span class="dcm-ar">مُنْصَرِف</span> — otherwise a noun that is <span class="dcm-ar">مَمْنُوع مِنَ الصَّرْف</span> takes fatḥah instead, a rule saved for a later chapter. The sound feminine plural needs no such caveat, since it's always <span class="dcm-ar">مُنْصَرِف</span>. Across all twelve examples in this chapter, khafḍ arrives by exactly one of two routes — a preceding preposition, or being the second noun in a possessive pair — and a word can also inherit khafḍ simply by describing (نعت) or following (تابع) another makhfūḍ word.
  </p>
`;

export default function KasrahPositionsGuide() {
  return (
    <div
      className="damma-commentary"
      dangerouslySetInnerHTML={{ __html: KASRAH_MAWADI_HTML }}
    />
  );
}

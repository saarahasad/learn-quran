const HADHF_JAZM_HTML = `
<p class="dcm-lead">
    This chapter picks up exactly where the sukūn chapter left off. Sukūn handled the sound-ending verb; <span class="dcm-ar">الْحَذْف</span> ("removal") covers the two situations where a plain sukūn either can't land cleanly or doesn't apply at all: the muḍāriʿ verb with a <em>weak</em> ending, and the five verbs.
  </p>

  <!-- ============ OVERVIEW ============ -->
  <div class="dcm-chart">
    <div class="dcm-chart-root-row">
      <div class="dcm-chart-root">
        <span class="dcm-ar">اَلْحَذْفُ</span>
        <span class="dcm-en">sign of jazm — two positions</span>
      </div>
    </div>
    <div class="dcm-chart-stem"></div>
    <div class="dcm-chart-hline-wrap"><div class="dcm-chart-hline"></div></div>
    <div class="dcm-chart-row">
      <div class="dcm-chart-branch">
        <div class="dcm-chart-branch-stem"></div>
        <div class="dcm-chart-node dcm-c1">
          <span class="dcm-ar">الْفِعْلُ الْمُضَارِعُ الْمُعْتَلُّ الْآخِرِ</span>
          <span class="dcm-en">weak-ending muḍāriʿ verb</span>
          <span class="dcm-ex dcm-ar">يَسْعَ</span>
        </div>
      </div>
      <div class="dcm-chart-branch">
        <div class="dcm-chart-branch-stem"></div>
        <div class="dcm-chart-node dcm-c2">
          <span class="dcm-ar">الْأَفْعَالُ الْخَمْسَةُ</span>
          <span class="dcm-en">the five verbs</span>
          <span class="dcm-ex dcm-ar">يَضْرِبَا</span>
        </div>
      </div>
    </div>
  </div>

  <!-- ============ 1. WEAK-ENDING VERB ============ -->
  <h2 class="dcm-h2"><span class="dcm-num">1</span>The weak-ending muḍāriʿ verb <span class="dcm-ar">الْمُعْتَلُّ الْآخِرِ</span></h2>
  <p>
    The mirror image of last chapter's "sound-ending" condition: here the verb's final letter <em>is</em> one of the three weak letters — alif, wāw, or yā. The commentary gives six examples of each:
  </p>

  <div class="dcm-chart">
    <table class="dcm-table">
      <tr><th>Ends in alif</th><th>Ends in wāw</th><th>Ends in yā</th></tr>
      <tr><td class="dcm-td-ar">يَسْعَى</td><td class="dcm-td-ar">يَدْعُو</td><td class="dcm-td-ar">يُعْطِي</td></tr>
      <tr><td class="dcm-td-ar">يَرْضَى</td><td class="dcm-td-ar">يَرْجُو</td><td class="dcm-td-ar">يَقْضِي</td></tr>
      <tr><td class="dcm-td-ar">يَهْوَى</td><td class="dcm-td-ar">يَبْلُو</td><td class="dcm-td-ar">يَسْتَغْشِي</td></tr>
      <tr><td class="dcm-td-ar">يَنْأَى</td><td class="dcm-td-ar">يَسْمُو</td><td class="dcm-td-ar">يُحْيِي</td></tr>
      <tr><td class="dcm-td-ar">يَشْقَى</td><td class="dcm-td-ar">يَقْسُو</td><td class="dcm-td-ar">يَلْوِي</td></tr>
      <tr><td class="dcm-td-ar">يَبْقَى</td><td class="dcm-td-ar">يَنْبُو</td><td class="dcm-td-ar">يَهْدِي</td></tr>
    </table>
  </div>

  <p>
    A sukūn can't simply land on alif, wāw, or yā the way it lands on an ordinary consonant — so instead, the sign of jazm becomes the <strong>removal of that letter entirely</strong>, with the vowel that used to precede it left behind as a trace (<span class="dcm-ar">دَلِيل</span>, "evidence") of what was dropped.
  </p>

  <div class="dcm-flip">
    <div class="dcm-flip-box dcm-c1"><span class="dcm-ar">يَسْعَى</span><span class="dcm-en">rafʿ</span></div>
    <div class="dcm-flip-arrow">→</div>
    <div class="dcm-flip-box dcm-c3"><span class="dcm-ar">يَسْعَ<span class="dcm-strike">ى</span></span><span class="dcm-en">jazm — alif dropped, فتحة left as evidence</span></div>
  </div>
  <div class="dcm-flip">
    <div class="dcm-flip-box dcm-c1"><span class="dcm-ar">يَدْعُو</span><span class="dcm-en">rafʿ</span></div>
    <div class="dcm-flip-arrow">→</div>
    <div class="dcm-flip-box dcm-c3"><span class="dcm-ar">يَدْعُ<span class="dcm-strike">و</span></span><span class="dcm-en">jazm — wāw dropped, ضمة left as evidence</span></div>
  </div>
  <div class="dcm-flip">
    <div class="dcm-flip-box dcm-c1"><span class="dcm-ar">يُعْطِي</span><span class="dcm-en">rafʿ</span></div>
    <div class="dcm-flip-arrow">→</div>
    <div class="dcm-flip-box dcm-c3"><span class="dcm-ar">يُعْطِ<span class="dcm-strike">ي</span></span><span class="dcm-en">jazm — yā dropped, كسرة left as evidence</span></div>
  </div>

  <div class="dcm-sentence dcm-c1">
    <span class="dcm-tag dcm-tag--alif">alif-ending · dropped</span>
    <span class="dcm-ar">لَمْ <span class="dcm-hl">يَسْعَ</span> عَلِيٌّ إِلَى الْمَجْدِ</span>
    <span class="dcm-gloss">"ʿAlī did not pursue glory."</span>
    <div class="dcm-note">يَسْعَ — majzūm by لَمْ; sign of jazm: حذف الألف; الفتحة قبلها دليل عليها</div>
  </div>
  <div class="dcm-sentence dcm-c1">
    <span class="dcm-tag dcm-tag--alif">wāw-ending · dropped</span>
    <span class="dcm-ar">لَمْ <span class="dcm-hl">يَدْعُ</span> مُحَمَّدٌ إِلَّا إِلَى الْحَقِّ</span>
    <span class="dcm-gloss">"Muḥammad called to nothing but the truth."</span>
    <div class="dcm-note">يَدْعُ — majzūm by لَمْ; sign of jazm: حذف الواو; الضمة قبلها دليل عليها</div>
  </div>
  <div class="dcm-sentence dcm-c1">
    <span class="dcm-tag dcm-tag--alif">yā-ending · dropped</span>
    <span class="dcm-ar">لَمْ <span class="dcm-hl">يُعْطِ</span> مُحَمَّدٌ إِلَّا خَالِدًا</span>
    <span class="dcm-gloss">"Muḥammad gave to no one but Khālid."</span>
    <div class="dcm-note">يُعْطِ — majzūm by لَمْ; sign of jazm: حذف الياء; الكسرة قبلها دليل عليها</div>
  </div>

  <p>
    The text closes this section with <span class="dcm-ar">وَقِسْ عَلَى ذَلِكَ أَخَوَاتِهَا</span> — "apply this rule to all the others like them" — meaning every verb in the three columns above (and any weak-ending verb generally) follows exactly this same pattern.
  </p>

  <!-- ============ 2. FIVE VERBS ============ -->
  <h2 class="dcm-h2"><span class="dcm-num">2</span>The five verbs <span class="dcm-ar">الْأَفْعَالُ الْخَمْسَةُ</span></h2>
  <p>
    The second position is one you've already met twice — first as the nūn's job in rafʿ, then as حذف النون's job in naṣb. Here, the exact same removal mechanism marks jazm:
  </p>

  <table class="dcm-grid">
    <tr><th>Attachment</th><th>Rafʿ — نون ثابتة</th><th>Jazm (with لَمْ) — نون محذوفة</th></tr>
    <tr><td>masc. dual, 3rd person</td><td class="dcm-grid-ar dcm-rafu">يَضْرِبَانِ</td><td class="dcm-grid-ar dcm-jazm">لَمْ يَضْرِبَا</td></tr>
    <tr><td>dual, 2nd person / fem. dual</td><td class="dcm-grid-ar dcm-rafu">تَضْرِبَانِ</td><td class="dcm-grid-ar dcm-jazm">لَمْ تَضْرِبَا</td></tr>
    <tr><td>masc. plural, 3rd person</td><td class="dcm-grid-ar dcm-rafu">يَضْرِبُونَ</td><td class="dcm-grid-ar dcm-jazm">لَمْ يَضْرِبُوا</td></tr>
    <tr><td>masc. plural, 2nd person</td><td class="dcm-grid-ar dcm-rafu">تَضْرِبُونَ</td><td class="dcm-grid-ar dcm-jazm">لَمْ تَضْرِبُوا</td></tr>
    <tr><td>fem. singular, 2nd person</td><td class="dcm-grid-ar dcm-rafu">تَضْرِبِينَ</td><td class="dcm-grid-ar dcm-jazm">لَمْ تَضْرِبِي</td></tr>
  </table>

  <p>
    Each of these is majzūm because it's preceded by <span class="dcm-ar">لَمْ</span>, and the sign of that jazm is the removal of the nūn — the alif, wāw, or yā remains exactly as before: the subject (فَاعِل), mabnī on sukūn, in the grammatical position of rafʿ.
  </p>

  <p class="dcm-callout dcm-yellow">
    Compare this to the earlier "removal of the nūn for fatḥah" chapter, on the exact same five verbs: <span class="dcm-example">لَنْ يَضْرِبَا</span> (naṣb) and <span class="dcm-example">لَمْ يَضْرِبَا</span> (jazm) are <em>identical words</em>. Naṣb and jazm produce the same visible form for this category — the only thing distinguishing them is which particle triggered it (<span class="dcm-ar">لَنْ</span> for naṣb, <span class="dcm-ar">لَمْ</span> for jazm). The five verbs simply don't have a separate jazm-specific shape.
  </p>

  <hr class="dcm-divider" />

  <h2 class="dcm-h2"><span class="dcm-num">3</span>The complete picture — signs of jazm <span class="dcm-ar">عَلَامَاتُ الْجَزْمِ</span></h2>
  <table class="dcm-table">
    <tr><th>Sign</th><th>Category</th><th>Example</th></tr>
    <tr><td class="dcm-td-ar">سُكُون</td><td>sound-ending muḍāriʿ verb</td><td class="dcm-td-ar">لَمْ يَلْعَبْ</td></tr>
    <tr><td class="dcm-td-ar">حَذْفُ حَرْفِ الْعِلَّة</td><td>weak-ending muḍāriʿ verb</td><td class="dcm-td-ar">لَمْ يَسْعَ</td></tr>
    <tr><td class="dcm-td-ar">حَذْفُ النُّون</td><td>the five verbs</td><td class="dcm-td-ar">لَمْ يَضْرِبُوا</td></tr>
  </table>

  <p class="dcm-callout dcm-green dcm-callout--end">
    <strong>In short:</strong> جزم has exactly three signs, covering every muḍāriʿ verb between them. A sound-ending verb takes sukūn. A weak-ending verb drops its final alif/wāw/yā, leaving the preceding vowel as a trace of which letter is gone. And the five verbs — regardless of state, rafʿ aside — always signal naṣb or jazm the same way: by losing the nūn.
  </p>
`;

export default function HadhfJazmGuide() {
  return (
    <div
      className="damma-commentary"
      dangerouslySetInnerHTML={{ __html: HADHF_JAZM_HTML }}
    />
  );
}

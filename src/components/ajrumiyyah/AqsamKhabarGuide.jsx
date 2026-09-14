const AQSAM_KHABAR_HTML = `
<p class="dcm-lead">
  Now the khabar gets the same treatment the mubtadaʾ just did — a full breakdown of every shape it can take. It turns out a khabar isn't always a single word; it can be an entire sentence, or something that behaves like one.
</p>

<!-- ============ OVERVIEW ============ -->
<div class="dcm-chart">
  <div class="dcm-chart-root-row">
    <div class="dcm-chart-root">
      <span class="dcm-ar">الْخَبَرُ</span>
      <span class="dcm-en">five types in total</span>
    </div>
  </div>
  <div class="dcm-chart-stem"></div>
  <div class="dcm-chart-hline-wrap"><div class="dcm-chart-hline"></div></div>
  <div class="dcm-chart-row">

    <div class="dcm-chart-branch">
      <div class="dcm-chart-branch-stem"></div>
      <div class="dcm-chart-node dcm-c1">
        <span class="dcm-ar">مُفْرَد</span>
        <span class="dcm-en">not a sentence, not sentence-like</span>
        <span class="dcm-ex dcm-ar">قَائِمٌ</span>
      </div>
    </div>

    <div class="dcm-chart-branch dcm-chart-branch--wide">
      <div class="dcm-chart-branch-stem"></div>
      <div class="dcm-chart-node dcm-c2">
        <span class="dcm-ar">جُمْلَة</span>
        <span class="dcm-en">a full sentence</span>
      </div>
      <div class="dcm-chart-subrow">
        <div class="dcm-chart-subnode dcm-c2">
          <span class="dcm-ar">اسْمِيَّة</span>
          <span class="dcm-en">مبتدأ + خبر</span>
        </div>
        <div class="dcm-chart-subnode dcm-c2">
          <span class="dcm-ar">فِعْلِيَّة</span>
          <span class="dcm-en">فعل + فاعل/نائبه</span>
        </div>
      </div>
    </div>

    <div class="dcm-chart-branch dcm-chart-branch--wide">
      <div class="dcm-chart-branch-stem"></div>
      <div class="dcm-chart-node dcm-c3">
        <span class="dcm-ar">شِبْهُ جُمْلَة</span>
        <span class="dcm-en">"sentence-like"</span>
      </div>
      <div class="dcm-chart-subrow">
        <div class="dcm-chart-subnode dcm-c3">
          <span class="dcm-ar">جَارٌّ وَمَجْرُور</span>
          <span class="dcm-en">preposition + object</span>
        </div>
        <div class="dcm-chart-subnode dcm-c3">
          <span class="dcm-ar">ظَرْف</span>
          <span class="dcm-en">adverbial expression</span>
        </div>
      </div>
    </div>

  </div>
</div>

<h2 class="dcm-h2"><span class="dcm-num">1</span>مُفْرَد — the singular khabar</h2>
<p>
  "Singular" here doesn't mean grammatical number — it means the khabar is neither a sentence nor anything resembling one; it's a single descriptive word.
</p>
<div class="dcm-sentence dcm-c1">
  <span class="dcm-ar">مُحَمَّدٌ <span class="dcm-hl">قَائِمٌ</span></span>
  <span class="dcm-gloss">"Muḥammad is standing."</span>
</div>

<h2 class="dcm-h2"><span class="dcm-num">2</span>جُمْلَةٌ اسْمِيَّة — the nominal-sentence khabar</h2>
<p>
  A whole mubtadaʾ-and-khabar pair, nested inside the outer sentence, itself functioning as the outer khabar:
</p>
<div class="dcm-sentence dcm-c2">
  <span class="dcm-ar">مُحَمَّدٌ <span class="dcm-hl">أَبُوهُ كَرِيمٌ</span></span>
  <span class="dcm-gloss">"Muḥammad — his father is noble."</span>
  <div class="dcm-note">أَبُوهُ (2nd mubtadaʾ) + كَرِيمٌ (its khabar) — the whole clause is the khabar of the outer مُحَمَّدٌ</div>
</div>

<h2 class="dcm-h2"><span class="dcm-num">3</span>جُمْلَةٌ فِعْلِيَّة — the verbal-sentence khabar</h2>
<p>
  A verb plus its subject (or its passive stand-in), together functioning as the khabar:
</p>
<div class="dcm-sentence dcm-c2">
  <span class="dcm-ar">مُحَمَّدٌ <span class="dcm-hl">سَافَرَ أَبُوهُ</span></span>
  <span class="dcm-gloss">"Muḥammad — his father travelled."</span>
  <div class="dcm-note">سَافَرَ (verb) + أَبُوهُ (فاعل)</div>
</div>
<div class="dcm-sentence dcm-c2">
  <span class="dcm-ar">خَالِدٌ <span class="dcm-hl">يُضْرَبُ غُلَامُهُ</span></span>
  <span class="dcm-gloss">"Khālid — his servant-boy is hit."</span>
  <div class="dcm-note">يُضْرَبُ (passive verb) + غُلَامُهُ (نائب الفاعل, since the doer is unnamed)</div>
</div>

<h2 class="dcm-h2"><span class="dcm-num">4</span>الْجَارُّ وَالْمَجْرُور — preposition + object</h2>
<div class="dcm-sentence dcm-c3">
  <span class="dcm-ar">عَلِيٌّ <span class="dcm-hl">فِي الْمَسْجِدِ</span></span>
  <span class="dcm-gloss">"ʿAlī is in the masjid."</span>
</div>

<h2 class="dcm-h2"><span class="dcm-num">5</span>الظَّرْف — the adverbial khabar</h2>
<div class="dcm-sentence dcm-c3">
  <span class="dcm-ar">الطَّائِرُ <span class="dcm-hl">فَوْقَ الْغُصْنِ</span></span>
  <span class="dcm-gloss">"The bird is above the branch."</span>
</div>

<hr class="dcm-divider" />

<h2 class="dcm-h2"><span class="dcm-num">6</span>The connector rule — الرَّابِط</h2>
<p>
  Whenever the khabar is a full جملة, it can't just sit next to the mubtadaʾ unconnected — it needs a <span class="dcm-ar">رَابِط</span> tying it back. Normally that's a pronoun referring to the mubtadaʾ, exactly as in every جملة example above (the <span class="dcm-ar">ـهُ</span> in أَبُوهُ, سَافَرَ أَبُوهُ, and يُضْرَبُ غُلَامُهُ all point back to the outer subject). But a demonstrative can do the same job instead:
</p>
<div class="dcm-sentence dcm-c4">
  <span class="dcm-ar">مُحَمَّدٌ <span class="dcm-hl">هَذَا</span> رَجُلٌ كَرِيمٌ</span>
  <span class="dcm-gloss">"This Muḥammad is a generous man."</span>
  <div class="dcm-note">هَذَا (demonstrative) is the رابط here, standing in for a pronoun</div>
</div>

<h2 class="dcm-h2"><span class="dcm-num">7</span>Five types, side by side <span class="dcm-ar">الْخَبَرُ عَلَى التَّفْصِيلِ</span></h2>
<table class="dcm-table">
  <tr><th>Type</th><th>Example khabar</th><th>Rābiṭ (if a sentence)</th></tr>
  <tr><td>مفرد</td><td class="dcm-td-ar">قَائِمٌ</td><td>—</td></tr>
  <tr><td>جملة اسمية</td><td class="dcm-td-ar">أَبُوهُ كَرِيمٌ</td><td>ـه (pronoun)</td></tr>
  <tr><td>جملة فعلية</td><td class="dcm-td-ar">سَافَرَ أَبُوهُ</td><td>ـه (pronoun)</td></tr>
  <tr><td>جار ومجرور</td><td class="dcm-td-ar">فِي الْمَسْجِدِ</td><td>—</td></tr>
  <tr><td>ظرف</td><td class="dcm-td-ar">فَوْقَ الْغُصْنِ</td><td>—</td></tr>
</table>

<hr class="dcm-divider" />

<h2 class="dcm-h2"><span class="dcm-num">8</span>Worked examples — full iʿrāb <span class="dcm-ar">تَدْرِيبٌ عَلَى الْإِعْرَابِ</span></h2>

<h3 class="dcm-h3">1 — مُحَمَّدٌ قَائِمٌ</h3>
<div class="dcm-parse-row">
  <div class="dcm-parse-chip dcm-c1">
    <span class="dcm-ar">مُحَمَّدٌ</span>
    <span class="dcm-role">مبتدأ، مرفوع بالابتداء، علامة رفعه الضمة الظاهرة</span>
  </div>
  <div class="dcm-parse-chip dcm-c1">
    <span class="dcm-ar">قَائِمٌ</span>
    <span class="dcm-role">خبر المبتدأ، مرفوع بالمبتدأ، علامة رفعه الضمة الظاهرة</span>
  </div>
</div>

<h3 class="dcm-h3">2 — مُحَمَّدٌ حَضَرَ أَبُوهُ</h3>
<div class="dcm-parse-row">
  <div class="dcm-parse-chip dcm-c2">
    <span class="dcm-ar">مُحَمَّدٌ</span>
    <span class="dcm-role">مبتدأ</span>
  </div>
  <div class="dcm-parse-chip dcm-c2">
    <span class="dcm-ar">حَضَرَ</span>
    <span class="dcm-role">فعل ماضٍ مبني على الفتح، لا محل له من الإعراب</span>
  </div>
  <div class="dcm-parse-chip dcm-c2">
    <span class="dcm-ar">أَبُو</span>
    <span class="dcm-role">فاعل، مرفوع بالواو نيابةً عن الضمة لأنه من الأسماء الخمسة؛ وهو مضاف</span>
  </div>
  <div class="dcm-parse-chip dcm-c2">
    <span class="dcm-ar">ـهُ</span>
    <span class="dcm-role">مضاف إليه، مبني على الضم في محل خفض</span>
  </div>
  <div class="dcm-parse-chip dcm-c2">
    <span class="dcm-ar">حَضَرَ أَبُوهُ</span>
    <span class="dcm-role">الجملة (فعل+فاعل) في محل رفع خبر المبتدأ؛ الرابط: الضمير المضاف إليه في «أبوه»</span>
  </div>
</div>

<h3 class="dcm-h3">3 — مُحَمَّدٌ أَبُوهُ مُسَافِرٌ</h3>
<div class="dcm-parse-row">
  <div class="dcm-parse-chip dcm-c2">
    <span class="dcm-ar">مُحَمَّدٌ</span>
    <span class="dcm-role">مبتدأ أول، مرفوع بالضمة الظاهرة</span>
  </div>
  <div class="dcm-parse-chip dcm-c2">
    <span class="dcm-ar">أَبُو</span>
    <span class="dcm-role">مبتدأ ثانٍ، مرفوع بالواو نيابةً عن الضمة لأنه من الأسماء الخمسة؛ وهو مضاف</span>
  </div>
  <div class="dcm-parse-chip dcm-c2">
    <span class="dcm-ar">ـهُ</span>
    <span class="dcm-role">مضاف إليه</span>
  </div>
  <div class="dcm-parse-chip dcm-c2">
    <span class="dcm-ar">مُسَافِرٌ</span>
    <span class="dcm-role">خبر المبتدأ الثاني</span>
  </div>
  <div class="dcm-parse-chip dcm-c2">
    <span class="dcm-ar">أَبُوهُ مُسَافِرٌ</span>
    <span class="dcm-role">جملة المبتدأ الثاني وخبره، في محل رفع خبر المبتدأ الأول؛ الرابط: الضمير في «أبوه»</span>
  </div>
</div>

<h3 class="dcm-h3">4 — مُحَمَّدٌ فِي الدَّارِ</h3>
<div class="dcm-parse-row">
  <div class="dcm-parse-chip dcm-c3">
    <span class="dcm-ar">مُحَمَّدٌ</span>
    <span class="dcm-role">مبتدأ</span>
  </div>
  <div class="dcm-parse-chip dcm-c3">
    <span class="dcm-ar">فِي الدَّارِ</span>
    <span class="dcm-role">جار ومجرور، متعلق بمحذوف خبر المبتدأ</span>
  </div>
</div>

<h3 class="dcm-h3">5 — مُحَمَّدٌ عِنْدَكَ</h3>
<div class="dcm-parse-row">
  <div class="dcm-parse-chip dcm-c3">
    <span class="dcm-ar">مُحَمَّدٌ</span>
    <span class="dcm-role">مبتدأ</span>
  </div>
  <div class="dcm-parse-chip dcm-c3">
    <span class="dcm-ar">عِنْدَ</span>
    <span class="dcm-role">ظرف مكان، متعلق بمحذوف خبر المبتدأ؛ وهو مضاف</span>
  </div>
  <div class="dcm-parse-chip dcm-c3">
    <span class="dcm-ar">ـكَ</span>
    <span class="dcm-role">مضاف إليه، مبني على الفتح في محل خفض</span>
  </div>
</div>

<p class="dcm-callout dcm-purple">
  Notice exercises 4 and 5: the جار ومجرور / ظرف isn't itself said to <em>be</em> the khabar — it's described as <span class="dcm-ar">مُتَعَلِّق بِمَحْذُوفٍ خَبَرِ الْمُبْتَدَأِ</span>, "attached to a deleted [word that is] the khabar." The true khabar is an implied word (like "exists" or "is located") that Arabic simply omits, with the prepositional/adverbial phrase hanging off it. This is a subtlety the exercises reveal that the earlier summary glossed over.
</p>

<hr class="dcm-divider" />
<p class="dcm-callout dcm-green dcm-callout--end">
  <strong>In short:</strong> a khabar is either a single word (مفرد), or one of four non-singular forms — a nominal sentence, a verbal sentence, a preposition-and-object, or an adverbial phrase. Whenever it's a genuine sentence, it needs a rābiṭ (usually a pronoun, occasionally a demonstrative) linking it back to the mubtadaʾ — and even the two shibh-jumla types turn out, on close analysis, to be hanging off an unspoken khabar rather than being the khabar outright.
</p>
`;

export default function AqsamKhabarGuide() {
  return (
    <div
      className="damma-commentary"
      dangerouslySetInnerHTML={{ __html: AQSAM_KHABAR_HTML }}
    />
  );
}

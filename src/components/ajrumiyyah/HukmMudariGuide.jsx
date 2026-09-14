const HUKM_MUDARI_HTML = `
<p class="dcm-lead">
  Where māḍī and أمر are always mabnī, the muḍāriʿ is the outlier: it's inflectable (<span class="dcm-ar">مُعْرَب</span>) by default — with exactly two attachments that pull it back into mabnī territory.
</p>

<h2 class="dcm-h2"><span class="dcm-num">1</span>معرب by default — two exceptions</h2>
<div class="dcm-chart">
  <div class="dcm-chart-row">
    <div class="dcm-chart-branch">
      <div class="dcm-chart-node dcm-c2">
        <span class="dcm-ar">نُونُ التَّوْكِيد</span>
        <span class="dcm-en">light or heavy → مبني على الفتح</span>
      </div>
    </div>
    <div class="dcm-chart-branch">
      <div class="dcm-chart-node dcm-c3">
        <span class="dcm-ar">نُونُ النِّسْوَة</span>
        <span class="dcm-en">→ مبني على السكون</span>
      </div>
    </div>
  </div>
</div>
<blockquote class="dcm-quran">
  <span class="dcm-ar">لَيُسْجَنَنَّ وَلَيَكُونًا مِنَ الصَّاغِرِينَ</span>
  "He will surely be imprisoned, and will surely be of those who are humiliated."
  <cite>Yūsuf 12:32 — نون التوكيد, مبني على الفتح</cite>
</blockquote>
<blockquote class="dcm-quran">
  <span class="dcm-ar">وَالْوَالِدَاتُ يُرْضِعْنَ</span>
  "Mothers may breastfeed their children."
  <cite>al-Baqarah 2:233 — نون النسوة, مبني على السكون</cite>
</blockquote>
<p class="dcm-callout">
  These are the same two exceptions from the very first ḍammah chapter and its fatḥah counterpart — they haven't changed; this is simply the formal statement of the rule that those earlier examples were illustrating all along.
</p>

<h2 class="dcm-h2"><span class="dcm-num">2</span>When معرب — default رفع, until something intervenes</h2>
<p>
  Once the muḍāriʿ is confirmed inflectable, its baseline state is rafʿ — and it stays there until a نَاصِب or جَازِم steps in:
</p>

<div class="dcm-flow3">
  <div class="dcm-flow3-box dcm-c1">
    <span class="dcm-tag">nothing intervenes</span>
    <span class="dcm-ar">يَفْهَمُ مُحَمَّدٌ</span>
  </div>
  <div class="dcm-flow3-box dcm-c2">
    <span class="dcm-tag">a نَاصِب enters</span>
    <span class="dcm-ar">لَنْ يَخِيبُ ← يَخِيبَ</span>
  </div>
  <div class="dcm-flow3-box dcm-c3">
    <span class="dcm-tag">a جَازِم enters</span>
    <span class="dcm-ar">لَمْ يَجْزَعُ ← يَجْزَعْ</span>
  </div>
</div>

<h3 class="dcm-h3">1 — رفع, unconditioned</h3>
<div class="dcm-sentence dcm-c1">
  <span class="dcm-ar"><span class="dcm-hl">يَفْهَمُ</span> <span class="dcm-hl">مُحَمَّدٌ</span></span>
  <span class="dcm-gloss">"Muḥammad understands."</span>
</div>
<div class="dcm-parse-row">
  <div class="dcm-parse-chip dcm-c1">
    <span class="dcm-ar">يَفْهَمُ</span>
    <span class="dcm-role">فعل مضارع مرفوع لتجرده من الناصب والجازم، علامة رفعه الضمة الظاهرة</span>
  </div>
  <div class="dcm-parse-chip dcm-c1">
    <span class="dcm-ar">مُحَمَّدٌ</span>
    <span class="dcm-role">فاعل مرفوع بالضمة الظاهرة</span>
  </div>
</div>

<h3 class="dcm-h3">2 — نصب, by لَنْ</h3>
<div class="dcm-sentence dcm-c2">
  <span class="dcm-ar">لَنْ <span class="dcm-hl">يَخِيبَ</span> <span class="dcm-hl">مُجْتَهِدٌ</span></span>
  <span class="dcm-gloss">"Never will the hardworking be unsuccessful."</span>
</div>
<div class="dcm-parse-row">
  <div class="dcm-parse-chip dcm-c2">
    <span class="dcm-ar">لَنْ</span>
    <span class="dcm-role">حرف نفي ونصب واستقبال</span>
  </div>
  <div class="dcm-parse-chip dcm-c2">
    <span class="dcm-ar">يَخِيبَ</span>
    <span class="dcm-role">فعل مضارع منصوب بـ«لن»، علامة نصبه الفتحة الظاهرة</span>
  </div>
  <div class="dcm-parse-chip dcm-c2">
    <span class="dcm-ar">مُجْتَهِدٌ</span>
    <span class="dcm-role">فاعل مرفوع، علامة رفعه الضمة الظاهرة</span>
  </div>
</div>

<h3 class="dcm-h3">3 — جزم, by لَمْ</h3>
<div class="dcm-sentence dcm-c3">
  <span class="dcm-ar">لَمْ <span class="dcm-hl">يَجْزَعْ</span> <span class="dcm-hl">إِبْرَاهِيمُ</span></span>
  <span class="dcm-gloss">"Ibrāhīm did not become worried."</span>
</div>
<div class="dcm-parse-row">
  <div class="dcm-parse-chip dcm-c3">
    <span class="dcm-ar">لَمْ</span>
    <span class="dcm-role">حرف نفي وجزم وقلب (يقلب زمن الفعل من الحال/الاستقبال إلى المضي)</span>
  </div>
  <div class="dcm-parse-chip dcm-c3">
    <span class="dcm-ar">يَجْزَعْ</span>
    <span class="dcm-role">فعل مضارع مجزوم بـ«لم»، علامة جزمه السكون</span>
  </div>
  <div class="dcm-parse-chip dcm-c3">
    <span class="dcm-ar">إِبْرَاهِيمُ</span>
    <span class="dcm-role">فاعل مرفوع، علامة رفعه الضمة الظاهرة</span>
  </div>
</div>

<p class="dcm-callout dcm-yellow">
  لَمْ is described as a particle of <span class="dcm-ar">قَلْب</span> ("flipping") specifically because it reverses the muḍāriʿ's own time-sense — a verb that would otherwise mean "he worries" (present/future) comes to mean "he did not worry" (past), purely through this one particle, without changing the verb's own form beyond the jazm ending.
</p>

<hr class="dcm-divider" />
<p class="dcm-callout dcm-green dcm-callout--end">
  <strong>In short:</strong> the muḍāriʿ is مُعرَب unless نون التوكيد or نون النسوة is attached, in which case it's مبني (on فتح or سكون respectively). Left alone, an inflectable muḍāriʿ defaults to رفع — and these three sentences show all three possible outcomes side by side: unconditioned رفع, نصب once a ناصب like لن enters, and جزم once a جازم like لم enters, with لم additionally reversing the verb's own sense of time.
</p>
`;

export default function HukmMudariGuide() {
  return (
    <div
      className="damma-commentary"
      dangerouslySetInnerHTML={{ __html: HUKM_MUDARI_HTML }}
    />
  );
}

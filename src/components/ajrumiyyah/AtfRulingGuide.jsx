const ATF_RULING_HTML = `
<p class="dcm-lead">
  The particle does not take a case. The word after it takes the case of the word before it. A noun follows a noun, and a verb follows a verb.
</p>

<div class="dcm-sentence dcm-c1">
  <span class="dcm-tag dcm-tag--green">joined to a marfūʿ noun</span>
  <span class="dcm-ar">قَابَلَنِي مُحَمَّدٌ وَ<span class="dcm-hl">خَالِدٌ</span></span>
  <span class="dcm-gloss">Khālid is conjoined to Muḥammad. Marfūʿ with a ḍammah.</span>
</div>
<div class="dcm-sentence dcm-c2">
  <span class="dcm-tag dcm-tag--green">joined to a manṣūb noun</span>
  <span class="dcm-ar">قَابَلْتُ مُحَمَّدًا وَ<span class="dcm-hl">خَالِدًا</span></span>
  <span class="dcm-gloss">Manṣūb with a fatḥah, because Muḥammad is manṣūb.</span>
</div>
<div class="dcm-sentence dcm-c3">
  <span class="dcm-tag dcm-tag--green">joined to a makhfūḍ noun</span>
  <span class="dcm-ar">مَرَرْتُ بِمُحَمَّدٍ وَ<span class="dcm-hl">خَالِدٍ</span></span>
  <span class="dcm-gloss">Makhfūḍ with a kasrah. The bāʾ jars the first noun, and the conjunction passes that khafḍ on.</span>
</div>
<div class="dcm-sentence dcm-c4">
  <span class="dcm-tag dcm-tag--green">joined to a majzūm verb</span>
  <span class="dcm-ar">لَمْ يَحْضُرْ خَالِدٌ أَوْ <span class="dcm-hl">يُرْسِلْ</span> رَسُولًا</span>
  <span class="dcm-gloss">“Khālid did not attend, or send a messenger.” يرسل is conjoined to يحضر and is majzūm with a sukūn.</span>
</div>

<p class="dcm-callout dcm-green dcm-callout--end">
  <strong>The matn’s four sentences are this same rule.</strong> <span class="dcm-ar">قَامَ زَيْدٌ وَعَمْرٌو</span> · <span class="dcm-ar">رَأَيْتُ زَيْدًا وَعَمْرًا</span> · <span class="dcm-ar">مَرَرْتُ بِزَيْدٍ وَعَمْرٍو</span> · <span class="dcm-ar">لَمْ يَقُمْ وَلَمْ يَقْعُدْ</span>. Name the first word’s case, and the second word already has its ending.
</p>
`;

export default function AtfRulingGuide() {
  return (
    <div
      className="damma-commentary"
      dangerouslySetInnerHTML={{ __html: ATF_RULING_HTML }}
    />
  );
}

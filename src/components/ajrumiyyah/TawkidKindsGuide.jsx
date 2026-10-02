const TAWKID_KINDS_HTML = `
<p class="dcm-lead">
  Emphasis strengthens a word that is already there. One kind repeats the sound. The other kind removes a doubt about who, or how much, was meant.
</p>

<h2 class="dcm-h2"><span class="dcm-num">1</span>Verbal — say it again <span class="dcm-ar">التَّوْكِيدُ اللَّفْظِيُّ</span></h2>
<table class="dcm-table">
  <tr><th>What is repeated</th><th>Example</th></tr>
  <tr><td>a noun</td><td class="dcm-td-ar">جَاءَ مُحَمَّدٌ مُحَمَّدٌ</td></tr>
  <tr><td>a verb</td><td class="dcm-td-ar">جَاءَ جَاءَ مُحَمَّدٌ</td></tr>
  <tr><td>a particle</td><td class="dcm-td-ar">نَعَمْ نَعَمْ جَاءَ مُحَمَّدٌ</td></tr>
  <tr><td>a synonym</td><td class="dcm-td-ar">جَاءَ حَضَرَ أَبُو بَكْرٍ</td></tr>
</table>
<p>
  The second word is the same word, or a word with the same meaning. Nothing new is being named.
</p>

<h2 class="dcm-h2"><span class="dcm-num">2</span>Semantic — close the other reading <span class="dcm-ar">التَّوْكِيدُ الْمَعْنَوِيُّ</span></h2>
<div class="dcm-sentence dcm-c1">
  <span class="dcm-tag dcm-tag--green">without it, a loose reading is still open</span>
  <span class="dcm-ar">جَاءَ الْأَمِيرُ</span>
  <span class="dcm-gloss">“The commander came” can be heard as “his messenger came,” if the speaker was speaking loosely.</span>
</div>
<div class="dcm-sentence dcm-c2">
  <span class="dcm-tag dcm-tag--green">with it, only the commander is meant</span>
  <span class="dcm-ar">جَاءَ الْأَمِيرُ <span class="dcm-hl">نَفْسُهُ</span></span>
  <span class="dcm-gloss">نفسه, or عينه, removes that chance. The one who came is the commander.</span>
</div>

<div class="dcm-irab-row">
  <span class="dcm-irab-word">حَضَرَ خَالِدٌ نَفْسُهُ</span>
  <span class="dcm-irab-desc">Both marfūʿ. The emphasiser copies the case.</span>
</div>
<div class="dcm-irab-row">
  <span class="dcm-irab-word">حَفِظْتُ الْقُرْآنَ كُلَّهُ</span>
  <span class="dcm-irab-desc">Both manṣūb.</span>
</div>
<div class="dcm-irab-row">
  <span class="dcm-irab-word">تَدَبَّرْتُ فِي الْكِتَابِ كُلِّهِ</span>
  <span class="dcm-irab-desc">Both makhfūḍ. The word being emphasised is definite, and the emphasiser is definite with it.</span>
</div>

<p class="dcm-callout dcm-green dcm-callout--end">
  <strong>The matn’s line is the semantic kind.</strong> It follows in rafʿ, naṣb, khafḍ, and definiteness. The next note names the words that do this work.
</p>
`;

export default function TawkidKindsGuide() {
  return (
    <div
      className="damma-commentary"
      dangerouslySetInnerHTML={{ __html: TAWKID_KINDS_HTML }}
    />
  );
}

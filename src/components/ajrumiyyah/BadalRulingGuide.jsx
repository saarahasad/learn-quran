const BADAL_RULING_HTML = `
<p class="dcm-lead">
  In <span class="dcm-ar">قَامَ زَيْدٌ أَخُوكَ</span>, the person who stood is the brother. The brother is not decorating Zayd, and not joining a second person to him. The ruling has moved onto the second word.
</p>

<h2 class="dcm-h2"><span class="dcm-num">1</span>The definition, piece by piece</h2>
<div class="dcm-word-entry dcm-c1">
  <div class="dcm-word-head"><span class="dcm-word-num">1</span><span class="dcm-ar">تَابِعٌ</span></div>
  <div class="dcm-word-def">It is one of the followers, so it copies a case.</div>
</div>
<div class="dcm-word-entry dcm-c2">
  <div class="dcm-word-head"><span class="dcm-word-num">2</span><span class="dcm-ar">مَقْصُودٌ بِالْحُكْمِ</span></div>
  <div class="dcm-word-def">The ruling is aimed at this word. That leaves out the adjective, the emphasis, and explanatory conjunction. In those, the first word is what the sentence is about, and the follower only completes it.</div>
</div>
<div class="dcm-word-entry dcm-c3">
  <div class="dcm-word-head"><span class="dcm-word-num">3</span><span class="dcm-ar">بِلَا وَاسِطَةٍ</span></div>
  <div class="dcm-word-def">No particle stands between the two. That leaves out sequential conjunction. <span class="dcm-ar">جَاءَ زَيْدٌ وَعَمْرٌو</span> aims at ʿAmr too, but only through the wāw.</div>
</div>

<h2 class="dcm-h2"><span class="dcm-num">2</span>It copies every case, including jazm</h2>
<table class="dcm-table">
  <tr><th>First word</th><th>Substitute</th></tr>
  <tr><td class="dcm-td-ar">حَضَرَ إِبْرَاهِيمُ</td><td class="dcm-td-ar">أَبُوكَ — marfūʿ</td></tr>
  <tr><td class="dcm-td-ar">قَابَلْتُ إِبْرَاهِيمَ</td><td class="dcm-td-ar">أَخَاكَ — manṣūb</td></tr>
  <tr><td class="dcm-td-ar">أَخْلَاقُ مُحَمَّدٍ</td><td class="dcm-td-ar">خَالِكَ — makhfūḍ, “your uncle”</td></tr>
  <tr><td class="dcm-td-ar">يَسْجُدْ</td><td class="dcm-td-ar">يَفُزْ — majzūm. “Whoever thanks his Lord, prostrates to Him, succeeds.”</td></tr>
</table>
<p class="dcm-callout dcm-green dcm-callout--end">
  <strong>A verb can replace a verb, just as a noun replaces a noun.</strong> The next note sorts the four kinds. The case rule does not change between them.
</p>
`;

export default function BadalRulingGuide() {
  return (
    <div
      className="damma-commentary"
      dangerouslySetInnerHTML={{ __html: BADAL_RULING_HTML }}
    />
  );
}

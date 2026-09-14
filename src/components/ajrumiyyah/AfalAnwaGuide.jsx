const AFAL_ANWA_HTML = `
<p class="dcm-lead">
  A recap chapter, gathering the three verb tenses that have been running through every example so far into one formal classification. The dividing line for all three is simple: where the action sits relative to <span class="dcm-ar">زَمَنُ التَّكَلُّمِ</span> — the moment of speaking.
</p>

<h2 class="dcm-h2"><span class="dcm-num">1</span>Three tenses, one timeline <span class="dcm-ar">ثَلَاثَةُ أَقْسَامٍ</span></h2>

<div class="dcm-timeline">
  <div class="dcm-timeline-track">
    <div class="dcm-tl-point dcm-tl-now"></div>
    <div class="dcm-tl-label-now">زمن التكلم — now</div>
  </div>
  <div class="dcm-tl-segments">
    <div class="dcm-tl-seg dcm-c1">
      <span class="dcm-ar">مَاضٍ</span>
      <span class="dcm-en">before speech time</span>
      <span class="dcm-ex dcm-ar">ضَرَبَ</span>
    </div>
    <div class="dcm-tl-seg dcm-c2">
      <span class="dcm-ar">مُضَارِع</span>
      <span class="dcm-en">at speech time, or after</span>
      <span class="dcm-ex dcm-ar">يَضْرِبُ</span>
    </div>
    <div class="dcm-tl-seg dcm-c3">
      <span class="dcm-ar">أَمْر</span>
      <span class="dcm-en">sought, strictly after speech time</span>
      <span class="dcm-ex dcm-ar">اضْرِبْ</span>
    </div>
  </div>
</div>

<p>
  <span class="dcm-ar">مَاضٍ</span> reports something that already happened before the speaker uttered the sentence.
  <span class="dcm-ar">مُضَارِع</span> covers a wider window — something happening right now, as the words are spoken, or something that will happen afterward.
  <span class="dcm-ar">أَمْر</span> is narrower again: not a report at all, but a request for something to occur, and necessarily after the moment of speaking — you cannot command something that has already happened or is already underway.
</p>

<h2 class="dcm-h2"><span class="dcm-num">2</span>Six roots, across all three forms <span class="dcm-ar">أَمْثِلَة</span></h2>
<table class="dcm-table">
  <tr><th></th><th>مَاضٍ</th><th>مُضَارِع</th><th>أَمْر</th></tr>
  <tr><td>to hit</td><td class="dcm-td-ar">ضَرَبَ</td><td class="dcm-td-ar">يَضْرِبُ</td><td class="dcm-td-ar">اضْرِبْ</td></tr>
  <tr><td>to support</td><td class="dcm-td-ar">نَصَرَ</td><td class="dcm-td-ar">يَنْصُرُ</td><td class="dcm-td-ar">انْصُرْ</td></tr>
  <tr><td>to open</td><td class="dcm-td-ar">فَتَحَ</td><td class="dcm-td-ar">يَفْتَحُ</td><td class="dcm-td-ar">افْتَحْ</td></tr>
  <tr><td>to know</td><td class="dcm-td-ar">عَلِمَ</td><td class="dcm-td-ar">يَعْلَمُ</td><td class="dcm-td-ar">اعْلَمْ</td></tr>
  <tr><td>to calculate</td><td class="dcm-td-ar">حَسَبَ</td><td class="dcm-td-ar">يَحْسِبُ</td><td class="dcm-td-ar">احْسِبْ</td></tr>
  <tr><td>to honour</td><td class="dcm-td-ar">كَرَمَ</td><td class="dcm-td-ar">يُكْرِمُ</td><td class="dcm-td-ar">أَكْرِمْ</td></tr>
</table>

<p class="dcm-callout dcm-yellow">
  A note on the text as given: the last row's مضارع and أمر forms — يُكْرِمُ and أَكْرِمْ — belong to the Form IV pattern (أَفْعَلَ), whose ماضٍ would be <span class="dcm-example">أَكْرَمَ</span> ("he honoured / was generous to"), not <span class="dcm-example">كَرَمَ</span> as printed.
  كَرَمَ on its own is a Form I root meaning "to be noble," and its own مضارع would regularly be يَكْرُمُ, not يُكْرِمُ.
  The three forms shown do not come from the same root pattern; treat أَكْرَمَ as the intended ماضٍ paired with يُكْرِمُ / أَكْرِمْ.
</p>

<hr class="dcm-divider" />

<h2 class="dcm-h2"><span class="dcm-num">3</span>Coming full circle <span class="dcm-ar">إِحَالَةٌ إِلَى بِدَايَةِ الْكِتَابِ</span></h2>
<p>
  The commentary closes by pointing straight back to where this whole book began: these same three categories —
  <span class="dcm-ar">مَاضٍ</span>, <span class="dcm-ar">مُضَارِع</span>, <span class="dcm-ar">أَمْر</span> —
  were already introduced at the very start, together with the signs that mark each one's case.
  That is the entire arc this series has walked through since: the ḍammah / fatḥah / kasrah / sukūn chapters were all, ultimately, about how these three verb types (and their noun counterparts) get their رفع، نصب، خفض، and جزم marked.
</p>

<hr class="dcm-divider" />
<p class="dcm-callout dcm-green dcm-callout--end">
  <strong>In short:</strong> every Arabic verb is one of exactly three types, sorted purely by when the action sits relative to the moment of speaking —
  ماضٍ before, مضارع at or after, أمر strictly after and only ever requested, never simply reported.
  Nothing here is new grammar; it is the classification this entire book has been quietly built on from its first chapter, now named and defined explicitly in one place.
</p>
`;

export default function AfalAnwaGuide() {
  return (
    <div
      className="damma-commentary"
      dangerouslySetInnerHTML={{ __html: AFAL_ANWA_HTML }}
    />
  );
}

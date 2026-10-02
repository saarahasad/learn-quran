const BADAL_TYPES_HTML = `
<p class="dcm-lead">
  Ask what the second word is, relative to the first. The same thing, a part of it, something it contains, or a correction.
</p>

<div class="dcm-word-entry dcm-c1">
  <div class="dcm-word-head"><span class="dcm-word-num">1</span><span class="dcm-ar">بَدَلُ الْكُلِّ مِنَ الْكُلِّ</span><span style="font-size:0.78rem; color:var(--dcm-sub);">also called the matching substitute</span></div>
  <div class="dcm-word-def">The second word is the first thing, said again. <span class="dcm-ar">قَامَ زَيْدٌ أَخُوكَ</span> — your brother is Zayd. <span class="dcm-ar">زَارَنِي مُحَمَّدٌ عَمُّكَ</span>.</div>
</div>
<div class="dcm-word-entry dcm-c2">
  <div class="dcm-word-head"><span class="dcm-word-num">2</span><span class="dcm-ar">بَدَلُ الْبَعْضِ مِنَ الْكُلِّ</span><span style="font-size:0.78rem; color:var(--dcm-sub);">a portion</span></div>
  <div class="dcm-word-def">The portion may be smaller than the rest, equal to it, or larger. <span class="dcm-ar">حَفِظْتُ الْقُرْآنَ ثُلُثَهُ</span> · <span class="dcm-ar">نِصْفَهُ</span> · <span class="dcm-ar">ثُلُثَيْهِ</span>. It is annexed to a pronoun that goes back to the first word. ﴿مَنِ اسْتَطَاعَ إِلَيْهِ سَبِيلًا﴾ is a part of “the people.”</div>
</div>
<div class="dcm-word-entry dcm-c3">
  <div class="dcm-word-head"><span class="dcm-word-num">3</span><span class="dcm-ar">بَدَلُ الِاشْتِمَالِ</span><span style="font-size:0.78rem; color:var(--dcm-sub);">something the first contains</span></div>
  <div class="dcm-word-def">Not the whole, and not a piece. <span class="dcm-ar">نَفَعَنِي زَيْدٌ عِلْمُهُ</span> — his knowledge belongs to him. <span class="dcm-ar">أَعْجَبَتْنِي الْجَارِيَةُ حَدِيثُهَا</span>. This one is annexed to a returning pronoun too.</div>
</div>
<div class="dcm-word-entry dcm-c4">
  <div class="dcm-word-head"><span class="dcm-word-num">4</span><span class="dcm-ar">بَدَلُ الْغَلَطِ</span><span style="font-size:0.78rem; color:var(--dcm-sub);">three shapes of a correction</span></div>
  <div class="dcm-word-def">
    A change of mind: you said <span class="dcm-ar">بَدْرٌ</span>, then a better word occurred to you, <span class="dcm-ar">شَمْسٌ</span>.<br>
    A forgotten mistake: you thought the shape was a person, then you saw it was a horse — <span class="dcm-ar">رَأَيْتُ إِنْسَانًا فَرَسًا</span>.<br>
    A slip of the tongue: you meant the horse and said Zayd — <span class="dcm-ar">رَأَيْتُ زَيْدًا الْفَرَسَ</span>. This is the matn’s example.
  </div>
</div>

<p class="dcm-callout dcm-yellow">
  Part and inclusion both need the pronoun that goes back. The matching substitute and the slip do not.
</p>
<p class="dcm-callout dcm-green dcm-callout--end">
  <strong>The ending is still the first word’s ending.</strong> <span class="dcm-ar">أَخُوكَ</span> is marfūʿ with wāw because Zayd is marfūʿ. <span class="dcm-ar">ثُلُثَهُ</span> is manṣūb because the loaf is manṣūb. <span class="dcm-ar">عِلْمُهُ</span> is marfūʿ because Zayd is marfūʿ. <span class="dcm-ar">الْفَرَسَ</span> is manṣūb because Zayd is manṣūb.
</p>
`;

export default function BadalTypesGuide() {
  return (
    <div
      className="damma-commentary"
      dangerouslySetInnerHTML={{ __html: BADAL_TYPES_HTML }}
    />
  );
}

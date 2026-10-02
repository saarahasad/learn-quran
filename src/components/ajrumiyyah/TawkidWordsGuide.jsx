const TAWKID_WORDS_HTML = `
<p class="dcm-lead">
  Semantic emphasis is not any word you choose. The Arabs used a small set, and each word has a condition.
</p>

<div class="dcm-word-entry dcm-c1">
  <div class="dcm-word-head"><span class="dcm-word-num">1</span><span class="dcm-ar">النَّفْسُ وَالْعَيْنُ</span><span style="font-size:0.78rem; color:var(--dcm-sub);">the very one</span></div>
  <div class="dcm-word-def">Each is annexed to a pronoun that goes back to the emphasised word. Singular: <span class="dcm-ar">جَاءَ عَلِيٌّ نَفْسُهُ</span>. Plural: <span class="dcm-ar">جَاءَ الرِّجَالُ أَنْفُسُهُمْ</span>. Dual, on the more eloquent pattern: the pronoun is dual and the word is plural — <span class="dcm-ar">حَضَرَ الرَّجُلَانِ أَنْفُسُهُمَا</span>.</div>
</div>
<div class="dcm-word-entry dcm-c2">
  <div class="dcm-word-head"><span class="dcm-word-num">2</span><span class="dcm-ar">كُلُّ وَجَمِيعٌ</span><span style="font-size:0.78rem; color:var(--dcm-sub);">the whole</span></div>
  <div class="dcm-word-def">Annexed to a matching pronoun. <span class="dcm-ar">جَاءَ الْجَيْشُ كُلُّهُ</span> · <span class="dcm-ar">حَضَرَ الرِّجَالُ جَمِيعُهُمْ</span>. The matn’s <span class="dcm-ar">رَأَيْتُ الْقَوْمَ كُلَّهُمْ</span> is this word in naṣb.</div>
</div>
<div class="dcm-word-entry dcm-c3">
  <div class="dcm-word-head"><span class="dcm-word-num">3</span><span class="dcm-ar">أَجْمَعُ</span><span style="font-size:0.78rem; color:var(--dcm-sub);">altogether</span></div>
  <div class="dcm-word-def">Usually after kull. ﴿فَسَجَدَ الْمَلَائِكَةُ كُلُّهُمْ أَجْمَعُونَ﴾. It can stand alone, and that is the exception. The matn’s <span class="dcm-ar">أَجْمَعِينَ</span> is majrūr with yāʾ, because it is treated like the sound masculine plural.</div>
</div>
<div class="dcm-word-entry dcm-c4">
  <div class="dcm-word-head"><span class="dcm-word-num">4</span><span class="dcm-ar">أَكْتَعُ · أَبْتَعُ · أَبْصَعُ</span><span style="font-size:0.78rem; color:var(--dcm-sub);">after ajmaʿ only</span></div>
  <div class="dcm-word-def">They do not emphasise by themselves. They follow ajmaʿ when more strength is wanted: <span class="dcm-ar">جَاءَ الْقَوْمُ أَجْمَعُونَ أَكْتَعُونَ أَبْتَعُونَ أَبْصَعُونَ</span>.</div>
</div>

<p class="dcm-callout dcm-green dcm-callout--end">
  <strong>Say the pronoun before you say the vowel.</strong> Nafs, ʿayn, kull, and jamīʿ are annexed. The case ending sits on that annexed word, and it is the case of the word being emphasised.
</p>
`;

export default function TawkidWordsGuide() {
  return (
    <div
      className="damma-commentary"
      dangerouslySetInnerHTML={{ __html: TAWKID_WORDS_HTML }}
    />
  );
}

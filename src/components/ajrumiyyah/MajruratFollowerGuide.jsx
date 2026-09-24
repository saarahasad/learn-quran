const MAJRURAT_FOLLOWER_HTML = `
<p class="dcm-lead">
  The author stops after the particle and the iḍāfa. The third makhfūḍ type — the follower — he leaves unsaid. The commentary's reason is that the followers were already set out, in detail, at the end of the marfūʿ chapters. The rule does not change here. The follower takes the case of the word it follows, and when that word is makhfūḍ, so is the follower.
</p>

<h2 class="dcm-h2"><span class="dcm-num">1</span>The four followers, now in khafḍ <span class="dcm-ar">النَّعْتُ وَالْعَطْفُ وَالتَّوْكِيدُ وَالْبَدَلُ</span></h2>
<div class="dcm-sentence dcm-c1">
  <span class="dcm-tag dcm-tag--green">نَعْت — the adjective matches</span>
  <span class="dcm-ar">أَخَذْتُ الْعِلْمَ عَنْ مُحَمَّدٍ <span class="dcm-hl">الْفَاضِلِ</span></span>
  <span class="dcm-gloss">"I took knowledge from Muḥammad, the virtuous." محمد is majrūr by عن. الفاضل follows it, so the kasrah is the khafḍ of a follower, not a new particle.</span>
</div>
<div class="dcm-sentence dcm-c2">
  <span class="dcm-tag dcm-tag--green">عَطْف — the joined noun matches</span>
  <span class="dcm-ar">مَرَرْتُ بِمُحَمَّدٍ وَ<span class="dcm-hl">خَالِدٍ</span></span>
  <span class="dcm-gloss">"I passed by Muḥammad and Khālid." The bāʾ jars محمد. خالد is conjoined to it and takes the same khafḍ.</span>
</div>
<p>
  Tawkīd and badal are the other two. They were taught with the marfūʿ followers. A makhfūḍ word confirmed, or replaced, passes that khafḍ on: the confirmer and the substitute are majrūr because the word they follow is majrūr.
</p>

<hr class="dcm-divider" />

<h2 class="dcm-h2"><span class="dcm-num">2</span>The commentator closes the book <span class="dcm-ar">خَاتِمَةُ الشَّارِحِ</span></h2>
<p>
  This last paragraph is not a new rule. It is the date and the closing praise. The commentary was finished on Laylat al-Qadr, the night of Thursday 27 Ramaḍān 1353 (2 January 1935). He asks that its blessing return, praises Allah, and sends ṣalāh on the Prophet, his family, his companions, and those who followed them.
</p>

<hr class="dcm-divider" />
<p class="dcm-callout dcm-green dcm-callout--end">
  <strong>In short:</strong> the third makhfūḍ noun is not lowered by its own particle or its own iḍāfa. It is lowered because it follows a noun that is already makhfūḍ — as an adjective, a conjunct, a confirmation, or a substitute. <span class="dcm-ar">الْفَاضِلِ</span> and <span class="dcm-ar">خَالِدٍ</span> are the two the commentary writes out.
</p>
`;

export default function MajruratFollowerGuide() {
  return (
    <div
      className="damma-commentary"
      dangerouslySetInnerHTML={{ __html: MAJRURAT_FOLLOWER_HTML }}
    />
  );
}

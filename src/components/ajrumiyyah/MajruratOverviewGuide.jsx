const MAJRURAT_OVERVIEW_HTML = `
<p class="dcm-lead">
  The manṣūb list is finished. Khabar <span class="dcm-ar">كَانَ</span>, ism <span class="dcm-ar">إِنَّ</span>, and the follower of a manṣūb noun were already taught, so this chapter does not go back over them. What remains is khafḍ. The matn calls it <span class="dcm-ar">جَرّ</span>. The commentary calls it <span class="dcm-ar">خَفْض</span>. Same ending: the kasrah, or whatever stands in for it.
</p>
<div class="dcm-fn">
  <span class="dcm-fn-num">241</span> Al-Suyūṭī: jarr is the Baṣran name, khafḍ is the Kūfan name. He also records that <span class="dcm-ar">مِنْ</span> is the strongest of the jarr particles.
</div>

<h2 class="dcm-h2"><span class="dcm-num">1</span>Three governors <span class="dcm-ar">ثَلَاثَةُ أَنْوَاعٍ</span></h2>
<p>
  A noun is makhfūḍ for one of three reasons. The reason is the governor.
</p>

<div class="dcm-word-entry dcm-c1">
  <div class="dcm-word-head"><span class="dcm-word-num">1</span><span class="dcm-ar">الْحَرْفُ</span><span style="font-size:0.78rem; color:var(--dcm-sub);">a particle of khafḍ</span></div>
  <div class="dcm-word-def"><span class="dcm-ar">أَشْفَقْتُ عَلَى خَالِدٍ</span> — "I was tender toward Khālid." <span class="dcm-ar">خَالِد</span> is majrūr by <span class="dcm-ar">عَلَى</span>. The particles themselves are the next section.</div>
</div>
<div class="dcm-word-entry dcm-c2">
  <div class="dcm-word-head"><span class="dcm-word-num">2</span><span class="dcm-ar">الْإِضَافَةُ</span><span style="font-size:0.78rem; color:var(--dcm-sub);">a noun annexed to the one before it</span></div>
  <div class="dcm-word-def">Iḍāfa is attributing the second noun to the first. <span class="dcm-ar">جَاءَ غُلَامُ مُحَمَّدٍ</span> — "Muḥammad's boy came." <span class="dcm-ar">مُحَمَّد</span> is makhfūḍ because <span class="dcm-ar">غُلَام</span> is annexed to it.</div>
</div>
<div class="dcm-word-entry dcm-c4">
  <div class="dcm-word-head"><span class="dcm-word-num">3</span><span class="dcm-ar">التَّبَعِيَّةُ</span><span style="font-size:0.78rem; color:var(--dcm-sub);">following a noun that is already makhfūḍ</span></div>
  <div class="dcm-word-def">The follower wears the khafḍ of the word it follows. An adjective: <span class="dcm-ar">أَخَذْتُ الْعِلْمَ عَنْ مُحَمَّدٍ الْفَاضِلِ</span> — "I took knowledge from Muḥammad, the virtuous." Conjunction: <span class="dcm-ar">مَرَرْتُ بِمُحَمَّدٍ وَخَالِدٍ</span> — "I passed by Muḥammad and Khālid." The other followers do the same.</div>
</div>

<hr class="dcm-divider" />
<p class="dcm-callout dcm-green dcm-callout--end">
  <strong>In short:</strong> khafḍ comes from a particle (<span class="dcm-ar">عَلَى خَالِدٍ</span>), from iḍāfa (<span class="dcm-ar">غُلَامُ مُحَمَّدٍ</span>), or from following a word that already has it (<span class="dcm-ar">مُحَمَّدٍ الْفَاضِلِ</span>, <span class="dcm-ar">بِمُحَمَّدٍ وَخَالِدٍ</span>). The next sections take the particle and the iḍāfa one at a time.
</p>
`;

export default function MajruratOverviewGuide() {
  return (
    <div
      className="damma-commentary"
      dangerouslySetInnerHTML={{ __html: MAJRURAT_OVERVIEW_HTML }}
    />
  );
}

const MUDARI_LETTERS_HTML = `
<p class="dcm-lead">
  The same four letters from <span class="dcm-example">أَنَيْتُ</span> reappear here, but rearranged into three further mnemonic words — all spelling out the identical letter-set in a different order, purely as a memory aid — followed by exactly what each letter means, and a caution about when these letters <em>don't</em> actually signal a muḍāriʿ verb at all.
</p>

<h2 class="dcm-h2"><span class="dcm-num">1</span>Four mnemonics, same four letters</h2>
<div class="dcm-mnemonic-row">
  <div class="dcm-mnemonic">
    <span class="dcm-ar"><span class="dcm-hi dcm-hi--alif">أَ</span><span class="dcm-hi dcm-hi--waw">ن</span><span class="dcm-hi dcm-hi--ya">يْ</span><span class="dcm-hi dcm-hi--green">تُ</span></span>
  </div>
  <div class="dcm-mnemonic">
    <span class="dcm-ar"><span class="dcm-hi dcm-hi--waw">نَ</span><span class="dcm-hi dcm-hi--alif">أَ</span><span class="dcm-hi dcm-hi--ya">يْ</span><span class="dcm-hi dcm-hi--green">تُ</span></span>
  </div>
  <div class="dcm-mnemonic">
    <span class="dcm-ar"><span class="dcm-hi dcm-hi--alif">آ</span><span class="dcm-hi dcm-hi--green">تَيْ</span><span class="dcm-hi dcm-hi--waw">نَ</span></span>
  </div>
  <div class="dcm-mnemonic">
    <span class="dcm-ar"><span class="dcm-hi dcm-hi--waw">نَ</span><span class="dcm-hi dcm-hi--alif">أْ</span><span class="dcm-hi dcm-hi--green">تِي</span></span>
  </div>
</div>
<p class="dcm-caption">
  أَنَيْتُ · نَأَيْتُ · آتَيْنَ · نَأْتِي — four surface words, one underlying set: أ ن ي ت
</p>

<h2 class="dcm-h2"><span class="dcm-num">2</span>What each letter means</h2>
<div class="dcm-letter-row">
  <div class="dcm-letter-card dcm-c1">
    <div class="dcm-lchar dcm-ar dcm-lchar--blue">أ</div>
    <span class="dcm-lmeaning">1st person singular — either gender</span>
    <span class="dcm-lex dcm-ar">أَفْهَمُ</span>
  </div>
  <div class="dcm-letter-card dcm-c2">
    <div class="dcm-lchar dcm-ar dcm-lchar--yellow">ن</div>
    <span class="dcm-lmeaning">1st person plural — or a self-glorifying singular speaker</span>
    <span class="dcm-lex dcm-ar">نَفْهَمُ</span>
  </div>
  <div class="dcm-letter-card dcm-c3">
    <div class="dcm-lchar dcm-ar dcm-lchar--pink">ي</div>
    <span class="dcm-lmeaning">3rd person — غائب</span>
    <span class="dcm-lex dcm-ar">يَقُومُ</span>
  </div>
  <div class="dcm-letter-card dcm-c4">
    <div class="dcm-lchar dcm-ar dcm-lchar--green">ت</div>
    <span class="dcm-lmeaning">2nd person — or 3rd person feminine</span>
    <span class="dcm-lex dcm-ar">تَفْهَمُ</span>
  </div>
</div>

<div class="dcm-sentence dcm-c4">
  <span class="dcm-ar">أَنْتَ <span class="dcm-hl">تَفْهَمُ</span> يَا مُحَمَّدُ وَاجِبَكَ</span>
  <span class="dcm-gloss">"Do you understand your homework, O Muḥammad?" — تَـ for 2nd person</span>
</div>
<div class="dcm-sentence dcm-c4">
  <span class="dcm-ar"><span class="dcm-hl">تَفْهَمُ</span> زَيْنَبُ وَاجِبَهَا</span>
  <span class="dcm-gloss">"Zaynab understands her homework." — تَـ for 3rd person feminine</span>
</div>

<p class="dcm-callout">
  التاء is the only one of the four that's genuinely ambiguous on its own — يُفْهَمُ's ي always means "he/they," أفهم's أ always means "I," but تَفْهَمُ could mean "you [m.] understand" or "she understands" depending entirely on context. Nothing about the letter itself resolves it.
</p>

<hr class="dcm-divider" />

<h2 class="dcm-h2"><span class="dcm-num">3</span>When these letters do <em>not</em> mean muḍāriʿ <span class="dcm-ar">شَرْطُ الزِّيَادَةِ وَالدَّلَالَة</span></h2>
<p>
  Starting with one of these four letters is necessary but not sufficient — two further conditions have to hold, and the text gives a caution for each way they can fail:
</p>

<table class="dcm-table">
  <tr><th>Condition that fails</th><th>What happens</th><th>Examples (all māḍī, not muḍāriʿ)</th></tr>
  <tr>
    <td>the letter is part of the <strong>root</strong> itself, not an addition</td>
    <td>the verb stays māḍī — the letter was never a person-marker to begin with</td>
    <td class="dcm-td-ar">أَكَلَ، نَقَلَ، تَفَلَ، يَنَعَ</td>
  </tr>
  <tr>
    <td>the letter <em>is</em> an addition, but doesn't carry <strong>this specific meaning</strong></td>
    <td>the verb stays māḍī — the addition signals something else (like a derived verb pattern) instead of person</td>
    <td class="dcm-td-ar">أَكْرَمَ، تَقَدَّمَ</td>
  </tr>
</table>

<p>
  In <span class="dcm-example">أَكَلَ</span> ("he ate"), <span class="dcm-example">نَقَلَ</span> ("he moved/transported"), <span class="dcm-example">تَفَلَ</span> ("he spat"), and <span class="dcm-example">يَنَعَ</span> ("he ripened"), the hamzah/nūn/tā/yā are simply the first root letter of the word — removing them would leave an incomplete root, not a bare verb stem. In <span class="dcm-example">أَكْرَمَ</span> ("he honoured") and <span class="dcm-example">تَقَدَّمَ</span> ("he advanced"), the hamzah and tā really are additions to the root — but they mark a <em>derived verb pattern</em> (what later grammar calls Form IV and Form V), not "I" or "you/she." Both stay firmly māḍī.
</p>

<hr class="dcm-divider" />
<p class="dcm-callout dcm-green dcm-callout--end">
  <strong>In short:</strong> أ ن ي ت each carry a specific person-meaning — أ = "I," ن = "we" (or a self-glorifying "I"), ي = "he/they," ت = "you" or "she" — but only when that letter is genuinely an addition to the root <em>and</em> is doing exactly that job. If the letter is baked into the root itself, or is an addition serving some other morphological purpose, the verb is māḍī regardless of how it starts.
</p>
`;

export default function MudariLettersGuide() {
  return (
    <div
      className="damma-commentary"
      dangerouslySetInnerHTML={{ __html: MUDARI_LETTERS_HTML }}
    />
  );
}

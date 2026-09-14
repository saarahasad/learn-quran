const NAIB_FAIL_HTML = `
<p class="dcm-lead">
  A new mechanism: what happens when a sentence's subject is simply left out. This chapter is titled "the object whose subject is not named" in the original text, but the commentary itself notes — via a footnote — that <span class="dcm-ar">النَّائِبُ عَنِ الْفَاعِلِ</span>, "the deputy of the subject," would have been the clearer name, since that's exactly what's happening: another word steps in and takes over the subject's grammatical job.
</p>

<h2 class="dcm-h2"><span class="dcm-num">1</span>The ordinary sentence — verb, subject, object <span class="dcm-ar">فِعْل، فَاعِل، مَفْعُول بِهِ</span></h2>
<p>
  A complete sentence often has all three pieces present:
</p>

<div class="dcm-anatomy">
  <div class="dcm-aword"><span class="dcm-ar">قَطَعَ</span><span class="dcm-atag dcm-atag-neutral">فعل</span></div>
  <div class="dcm-aword"><span class="dcm-ar">مَحْمُودٌ</span><span class="dcm-atag dcm-atag-blue">فاعل</span></div>
  <div class="dcm-aword"><span class="dcm-ar">الْغُصْنَ</span><span class="dcm-atag dcm-atag-yellow">مفعول به</span></div>
</div>
<p class="dcm-caption dcm-caption--tight">"Maḥmūd cut the branch."</p>

<div class="dcm-sentence dcm-c1">
  <span class="dcm-ar">قَطَعَ <span class="dcm-hl">مَحْمُودٌ</span> <span class="dcm-hl">الْغُصْنَ</span></span>
  <span class="dcm-gloss">"Maḥmūd cut the branch."</span>
</div>
<div class="dcm-sentence dcm-c1">
  <span class="dcm-ar">حَفِظَ <span class="dcm-hl">خَلِيلٌ</span> <span class="dcm-hl">الدَّرْسَ</span></span>
  <span class="dcm-gloss">"Khalīl memorised the lesson."</span>
</div>
<div class="dcm-sentence dcm-c1">
  <span class="dcm-ar">يَقْطَعُ <span class="dcm-hl">إِبْرَاهِيمُ</span> <span class="dcm-hl">الْغُصْنَ</span></span>
  <span class="dcm-gloss">"Ibrāhīm is cutting the branch."</span>
</div>
<div class="dcm-sentence dcm-c1">
  <span class="dcm-ar">يَحْفَظُ <span class="dcm-hl">عَلِيٌّ</span> <span class="dcm-hl">الدَّرْسَ</span></span>
  <span class="dcm-gloss">"ʿAlī memorises the lesson."</span>
</div>

<p>
  Every one of these four follows the same anatomy — verb, then the marfūʿ فاعل, then the manṣūb مفعول به — in both māḍī and muḍāriʿ.
</p>

<h2 class="dcm-h2"><span class="dcm-num">2</span>Dropping the subject — what has to change <span class="dcm-ar">حَذْفُ الْفَاعِلِ</span></h2>
<p>
  A speaker can choose to omit the فاعل entirely, keeping only the verb and the object. But this isn't a free deletion — two things are <em>obligated</em> to change once the فاعل is gone:
</p>

<div class="dcm-chart">
  <div class="dcm-transform">
    <div class="dcm-transform-box dcm-c2">
      <span class="dcm-ar">صُورَةُ الْفِعْل</span>
      <span class="dcm-en">the verb's own form changes — covered in a later chapter</span>
    </div>
    <div class="dcm-transform-box dcm-c3">
      <span class="dcm-ar">صُورَةُ الْمَفْعُول</span>
      <span class="dcm-en">the object's case changes — منصوب → مرفوع</span>
    </div>
  </div>
</div>

<p>
  The object doesn't just change case — it's promoted into the فاعل's entire grammatical role: it must now come immediately after the verb (just as a فاعل must), and if it's feminine, the verb must be feminised to agree with it, exactly as it would for a real فاعل. It picks up a new name to match: <span class="dcm-ar">نَائِبُ الْفَاعِل</span> ("the deputy of the subject") — or, in the author's own phrasing, <span class="dcm-ar">الْمَفْعُولُ الَّذِي لَمْ يُسَمَّ فَاعِلُهُ</span> ("the object whose subject was not named").
</p>

<h2 class="dcm-h2"><span class="dcm-num">3</span>Seeing it happen <span class="dcm-ar">التَّحَوُّلُ عَمَلِيًّا</span></h2>
<p>
  Take the very first example from above and remove its فاعل:
</p>

<div class="dcm-transform">
  <div class="dcm-transform-box dcm-c1">
    <span class="dcm-ar">قَطَعَ مَحْمُودٌ الْغُصْنَ</span>
    <span class="dcm-en">fiʿl + fāʿil + mafʿūl bihi</span>
  </div>
  <div class="dcm-transform-arrow">→</div>
  <div class="dcm-transform-box dcm-c3">
    <span class="dcm-ar">قُطِعَ الْغُصْنُ</span>
    <span class="dcm-en">fiʿl + nāʾib al-fāʿil</span>
  </div>
</div>

<div class="dcm-anatomy">
  <div class="dcm-aword dcm-astrike"><span class="dcm-ar">مَحْمُودٌ</span><span class="dcm-atag">فاعل — removed</span></div>
  <div class="dcm-aword"><span class="dcm-ar">الْغُصْنَ ← الْغُصْنُ</span><span class="dcm-atag dcm-atag-pink">مفعول به → نائب الفاعل</span></div>
</div>
<p class="dcm-caption dcm-caption--tight">
  "Maḥmūd cut the branch" → "The branch was cut" — الْغُصْنَ (manṣūb) becomes الْغُصْنُ (marfūʿ), stepping into the position the فاعل vacated.
</p>

<table class="dcm-table">
  <tr><th>Role</th><th>Before (فاعل present)</th><th>After (فاعل dropped)</th></tr>
  <tr><td>subject slot</td><td class="dcm-td-ar">مَحْمُودٌ — فاعل، مرفوع</td><td class="dcm-td-center">— (removed)</td></tr>
  <tr><td>الغصن's case</td><td class="dcm-td-ar">الْغُصْنَ — مفعول به، منصوب</td><td class="dcm-td-ar">الْغُصْنُ — نائب الفاعل، مرفوع</td></tr>
  <tr><td>word order rule</td><td>object may often shift</td><td>must directly follow the verb, exactly like a real فاعل</td></tr>
  <tr><td>gender agreement</td><td>verb agrees with فاعل</td><td>verb agrees with نائب الفاعل instead</td></tr>
</table>

<p class="dcm-callout dcm-yellow">
  Notice what stayed constant: <span class="dcm-example">الْغُصْنَ/الْغُصْنُ</span> is the same word throughout — only its <em>case</em> and its <em>grammatical job</em> changed. Nothing about its meaning or position in the world shifted; the branch is still the thing being cut either way. What changed is purely how the sentence assigns credit for the action once the doer is no longer named.
</p>

<hr class="dcm-divider" />
<p class="dcm-callout dcm-green dcm-callout--end">
  <strong>In short:</strong> when a speaker omits the فاعل, the مفعول به doesn't just lose its case — it's promoted to take over every rule that governed the فاعل: it must directly follow the verb, and the verb must match its gender. Its case flips from منصوب to مرفوع, and it earns a new name — نائب الفاعل. The verb's own morphological change to signal this (what later becomes known as the passive form) is deferred to the next chapter.
</p>
`;

export default function NaibFailGuide() {
  return (
    <div
      className="damma-commentary"
      dangerouslySetInnerHTML={{ __html: NAIB_FAIL_HTML }}
    />
  );
}

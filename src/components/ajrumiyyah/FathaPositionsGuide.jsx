const FATHA_HTML = `
<p class="dcm-lead">
    The fatḥa is one of the four vowel-signs, and this chapter covers the job it does marking <em>naṣb</em> — roughly, the "accusative/subjunctive" state that objects, and verbs following certain particles, fall into. Al-Ājrūmiyyah names exactly three positions where fatḥa does this job.
  </p>

  <!-- ============ OVERVIEW ============ -->
  <div class="dcm-chart">
    <div class="dcm-chart-root-row">
      <div class="dcm-chart-root">
        <span class="dcm-ar">اَلْفَتْحَةُ</span>
        <span class="dcm-en">sign of naṣb — 3 positions</span>
      </div>
    </div>
    <div class="dcm-chart-stem"></div>
    <div class="dcm-chart-hline-wrap"><div class="dcm-chart-hline"></div></div>
    <div class="dcm-chart-row">
      <div class="dcm-chart-branch">
        <div class="dcm-chart-branch-stem"></div>
        <div class="dcm-chart-node dcm-c1">
          <span class="dcm-ar">اَلِاسْمُ الْمُفْرَدُ</span>
          <span class="dcm-en">the singular noun</span>
          <span class="dcm-ex dcm-ar">عَلِيًّا</span>
        </div>
      </div>
      <div class="dcm-chart-branch">
        <div class="dcm-chart-branch-stem"></div>
        <div class="dcm-chart-node dcm-c2">
          <span class="dcm-ar">جَمْعُ التَّكْسِيرِ</span>
          <span class="dcm-en">the broken plural</span>
          <span class="dcm-ex dcm-ar">الرِّجَالَ</span>
        </div>
      </div>
      <div class="dcm-chart-branch">
        <div class="dcm-chart-branch-stem"></div>
        <div class="dcm-chart-node dcm-c4">
          <span class="dcm-ar">الْفِعْلُ الْمُضَارِعُ</span>
          <span class="dcm-en">with a nāṣib, unattached</span>
          <span class="dcm-ex dcm-ar">لَنْ نَبْرَحَ</span>
        </div>
      </div>
    </div>
  </div>

  <!-- ============ 1. SINGULAR NOUN ============ -->
  <h2 class="dcm-h2"><span class="dcm-num">1</span>The singular noun <span class="dcm-ar">اَلِاسْمُ الْمُفْرَدُ</span></h2>
  <p>
    The definition is the same singular noun from the ḍammah chapter — not dual, not plural, not one of the five special nouns. Here it appears as a direct object (<span class="dcm-ar">مَفْعُول بِهِ</span>), which is one of the situations that puts a word into naṣb.
  </p>

  <div class="dcm-sentence dcm-c1">
    <span class="dcm-tag dcm-tag--alif">explicit fatḥa · masc.</span>
    <span class="dcm-ar">لَقِيتُ عَلِيًّا</span>
    <span class="dcm-gloss">"I met ʿAlī."</span>
  </div>
  <div class="dcm-sentence dcm-c1">
    <span class="dcm-tag dcm-tag--alif">explicit fatḥa · fem.</span>
    <span class="dcm-ar">قَابَلْتُ هِنْدًا</span>
    <span class="dcm-gloss">"I met Hind."</span>
  </div>

  <p>
    <span class="dcm-example">عَلِيًّا</span> and <span class="dcm-example">هِنْدًا</span> are both singular nouns, both manṣūb because they're objects, and the sign of that naṣb is a plainly-pronounced fatḥa. But when the noun ends in alif, the same fatḥa becomes implicit — blocked by <span class="dcm-ar">تَعَذُّر</span> (impossibility), exactly as with ḍammah:
  </p>

  <div class="dcm-sentence dcm-c3">
    <span class="dcm-tag dcm-tag--ya">implicit fatḥa · masc.</span>
    <span class="dcm-ar">لَقِيتُ الْفَتَى</span>
    <span class="dcm-gloss">"I met the young man."</span>
  </div>
  <div class="dcm-sentence dcm-c3">
    <span class="dcm-tag dcm-tag--ya">implicit fatḥa · fem.</span>
    <span class="dcm-ar">حَدَّثْتُ لَيْلَى</span>
    <span class="dcm-gloss">"I told Laylā."</span>
  </div>

  <p>
    <span class="dcm-example">الْفَتَى</span> and <span class="dcm-example">لَيْلَى</span> are still fully manṣūb as objects — the fatḥa is just invisible on the alif rather than absent.
  </p>

  <!-- ============ 2. BROKEN PLURAL ============ -->
  <h2 class="dcm-h2"><span class="dcm-num">2</span>The broken plural <span class="dcm-ar">جَمْعُ التَّكْسِيرِ</span></h2>
  <p>
    Same definition as before — a plural formed by reshaping the singular. Naṣb behaves exactly like the singular noun: explicit fatḥa by default, implicit on a final alif.
  </p>

  <div class="dcm-sentence dcm-c2">
    <span class="dcm-tag dcm-tag--waw">explicit fatḥa · masc.</span>
    <span class="dcm-ar">صَاحَبْتُ الرِّجَالَ</span>
    <span class="dcm-gloss">"I accompanied the men."</span>
  </div>
  <div class="dcm-sentence dcm-c2">
    <span class="dcm-tag dcm-tag--waw">explicit fatḥa · fem.</span>
    <span class="dcm-ar">رَعَيْتُ الْهُنُودَ</span>
    <span class="dcm-gloss">"I looked after the Hinds."</span>
  </div>

  <p>
    Both <span class="dcm-example">الرِّجَالَ</span> and <span class="dcm-example">الْهُنُودَ</span> are broken plurals, manṣūb as objects, with an explicit fatḥa. On a final alif, the fatḥa goes implicit — and the commentary reaches for two Qur'anic examples here rather than constructed sentences:
  </p>

  <blockquote class="dcm-quran">
    <span class="dcm-ar">وَتَرَى النَّاسَ سُكَارَى</span>
    "And you will see the people [appearing] intoxicated."
    <cite>al-Ḥajj 22:2 — implicit fatḥa on the alif of سُكَارَى</cite>
  </blockquote>
  <blockquote class="dcm-quran">
    <span class="dcm-ar">وَأَنْكِحُوا الْأَيَامَى</span>
    "And marry the single [those without spouses]."
    <cite>al-Nūr 24:32 — implicit fatḥa on the alif of الْأَيَامَى</cite>
  </blockquote>

  <p>
    <span class="dcm-example">سُكَارَى</span> and <span class="dcm-example">الْأَيَامَى</span> are both broken plurals functioning as objects — manṣūb with a fatḥa blocked from appearing by the same <span class="dcm-ar">تَعَذُّر</span> rule that governs every alif-final word in this book.
  </p>

  <!-- ============ 3. MUDARI VERB ============ -->
  <h2 class="dcm-h2"><span class="dcm-num">3</span>The muḍāriʿ verb, with a nāṣib and nothing attached <span class="dcm-ar">الْفِعْلُ الْمُضَارِعُ</span></h2>
  <p>
    Unlike the first two positions, a muḍāriʿ verb needs a trigger to enter naṣb: a <span class="dcm-ar">نَاصِب</span> — a particle such as <span class="dcm-ar">لَنْ</span> ("will never") or <span class="dcm-ar">أَنْ</span> ("that") — must precede it. Given that trigger, and given that nothing is attached to its ending, the sign of naṣb is a fatḥa, explicit or implicit exactly as before.
  </p>

  <blockquote class="dcm-quran">
    <span class="dcm-ar">لَنْ نَبْرَحَ عَلَيْهِ عَاكِفِينَ</span>
    "We will never cease being devoted to it."
    <cite>Ṭāhā 20:91 — نَبْرَحَ manṣūb by لَنْ, explicit fatḥa</cite>
  </blockquote>

  <div class="dcm-sentence dcm-c3">
    <span class="dcm-tag dcm-tag--ya">implicit fatḥa · manṣūb by أَنْ</span>
    <span class="dcm-ar">يَسُرُّنِي أَنْ تَسْعَى إِلَى الْمَجْدِ</span>
    <span class="dcm-gloss">"It pleases me that you strive towards glory."</span>
  </div>

  <p>
    <span class="dcm-example">تَسْعَى</span> is manṣūb by <span class="dcm-ar">أَنْ</span>, with the fatḥa implicit on the final alif — same <span class="dcm-ar">تَعَذُّر</span> logic as every other alif-final word in this book.
  </p>

  <h3 class="dcm-h3">what happens when something IS attached?</h3>
  <p>
    Exactly as in the ḍammah chapter, three pronouns can attach to the end of this verb — and when they do, the verb is still manṣūb (the نَاصِب still applies), but the <em>sign</em> of that naṣb changes completely: instead of a fatḥa, it becomes the <strong>dropping of the nūn</strong> (<span class="dcm-ar">حَذْفُ النُّون</span>).
  </p>

  <div class="dcm-chart">
    <div class="dcm-chart-root-row">
      <div class="dcm-chart-root">
        <span class="dcm-ar">لَنْ + الْفِعْلُ الْمُضَارِعُ</span>
        <span class="dcm-en">what's attached to the end?</span>
      </div>
    </div>
    <div class="dcm-chart-stem"></div>
    <div class="dcm-chart-hline-wrap"><div class="dcm-chart-hline"></div></div>
    <div class="dcm-chart-row">

      <div class="dcm-chart-branch">
        <div class="dcm-chart-branch-stem"></div>
        <div class="dcm-chart-node dcm-c1">
          <span class="dcm-ar">لَا شَيْءَ</span>
          <span class="dcm-en">nothing → manṣūb by fatḥa</span>
          <span class="dcm-ex dcm-ar">لَنْ نَبْرَحَ</span>
        </div>
      </div>

      <div class="dcm-chart-branch dcm-chart-branch--wide">
        <div class="dcm-chart-branch-stem"></div>
        <div class="dcm-chart-node dcm-c2">
          <span class="dcm-ar">أَلِفٌ / وَاوٌ / يَاءٌ</span>
          <span class="dcm-en">dual / plural / f. address → manṣūb by dropping the nūn</span>
        </div>
        <div class="dcm-chart-subrow">
          <div class="dcm-chart-subnode dcm-c2"><span class="dcm-ex dcm-ar">لَنْ يَضْرِبَا</span></div>
          <div class="dcm-chart-subnode dcm-c2"><span class="dcm-ex dcm-ar">لَنْ تَضْرِبُوا</span></div>
          <div class="dcm-chart-subnode dcm-c2"><span class="dcm-ex dcm-ar">لَنْ تَضْرِبِي</span></div>
        </div>
      </div>

      <div class="dcm-chart-branch dcm-chart-branch--wide">
        <div class="dcm-chart-branch-stem"></div>
        <div class="dcm-chart-node dcm-c3">
          <span class="dcm-ar">نُونُ تَوْكِيدٍ / نِسْوَةٍ</span>
          <span class="dcm-en">emphatic / feminine-plural nūn → mabnī (fixed)</span>
        </div>
        <div class="dcm-chart-subrow">
          <div class="dcm-chart-subnode dcm-c3"><span class="dcm-en">fatḥ, heavy</span><span class="dcm-ex dcm-ar">لَنْ تَذْهَبَنَّ</span></div>
          <div class="dcm-chart-subnode dcm-c3"><span class="dcm-en">fatḥ, light</span><span class="dcm-ex dcm-ar">لَنْ تَذْهَبَنْ</span></div>
          <div class="dcm-chart-subnode dcm-c3"><span class="dcm-en">sukūn</span><span class="dcm-ex dcm-ar">لَنْ تُدْرِكْنَ</span></div>
        </div>
      </div>

    </div>
  </div>

  <p>
    In the middle branch, every one of <span class="dcm-example">يَضْرِبَا</span>, <span class="dcm-example">تَضْرِبُوا</span>, and <span class="dcm-example">تَضْرِبِي</span> is manṣūb by <span class="dcm-ar">لَنْ</span> — but the sign of that naṣb is the nūn being <em>removed</em>, and the attached alif/wāw/yā is the subject, mabnī on sukūn while sitting in the grammatical position of rafʿ. In the right branch, the two nūn-attachments push the verb out of the inflecting (manṣūb) category entirely, making it mabnī instead — on fatḥ for either form of the emphatic nūn, and on sukūn for the nūn of feminine plurality.
  </p>

  <div class="dcm-sentence dcm-c2">
    <span class="dcm-tag dcm-tag--waw">alif of duality</span>
    <span class="dcm-ar">لَنْ يَضْرِبَا</span>
    <span class="dcm-gloss">"These two will not hit."</span>
  </div>
  <div class="dcm-sentence dcm-c2">
    <span class="dcm-tag dcm-tag--waw">wāw of plurality</span>
    <span class="dcm-ar">لَنْ تَضْرِبُوا</span>
    <span class="dcm-gloss">"You [pl.] will not hit."</span>
  </div>
  <div class="dcm-sentence dcm-c2">
    <span class="dcm-tag dcm-tag--waw">yā of feminine address</span>
    <span class="dcm-ar">لَنْ تَضْرِبِي</span>
    <span class="dcm-gloss">"You [f.] will not hit."</span>
  </div>

  <div class="dcm-sentence dcm-c3">
    <span class="dcm-tag dcm-tag--ya">heavy emphatic nūn · mabnī on fatḥ</span>
    <span class="dcm-ar">وَاللَّهِ لَنْ تَذْهَبَنَّ</span>
    <span class="dcm-gloss">"By Allah, you will certainly not go."</span>
  </div>
  <div class="dcm-sentence dcm-c3">
    <span class="dcm-tag dcm-tag--ya">light emphatic nūn · mabnī on fatḥ</span>
    <span class="dcm-ar">وَاللَّهِ لَنْ تَذْهَبَنْ</span>
    <span class="dcm-gloss">"By Allah, you will not go."</span>
  </div>
  <div class="dcm-sentence dcm-c3">
    <span class="dcm-tag dcm-tag--ya">nūn of feminine plurality · mabnī on sukūn</span>
    <span class="dcm-ar">لَنْ تُدْرِكْنَ الْمَجْدَ إِلَّا بِالْعَفَافِ</span>
    <span class="dcm-gloss">"You [f. pl.] will not attain glory except with chastity."</span>
  </div>

  <p class="dcm-callout dcm-green">
    <strong>Compare this to the ḍammah chapter:</strong> the same three pronouns (dual alif, plural wāw, feminine-address yā) trigger a different mechanism depending on the state. In rafʿ, the nūn's <em>staying in place</em> was the sign (<span class="dcm-ar">ثُبُوتُ النُّون</span>). In naṣb, it's the exact opposite — the nūn's <em>being dropped</em> is the sign (<span class="dcm-ar">حَذْفُ النُّون</span>). And the two nūn-attachments (emphatic, feminine-plural) behave consistently across both states: they always make the verb mabnī rather than inflecting — only the vowel of that mabnī state shifts (sukūn in rafʿ; fatḥ or sukūn here in naṣb, depending on which nūn).
  </p>

  <hr class="dcm-divider" />
  <p class="dcm-callout dcm-green dcm-callout--end">
    <strong>In short:</strong> fatḥa marks naṣb in the singular noun and the broken plural whenever they function as objects, and in the muḍāriʿ verb whenever a nāṣib precedes it and nothing is attached to its ending. The same <span class="dcm-ar">تَعَذُّر</span> rule that hides ḍammah on alif-final words hides fatḥa too. And the same three pronoun-attachments that reroute the sign of rafʿ to the nūn's presence reroute the sign of naṣb to the nūn's absence instead.
  </p>
`;

export default function FathaPositionsGuide() {
  return (
    <div
      className="damma-commentary"
      dangerouslySetInnerHTML={{ __html: FATHA_HTML }}
    />
  );
}

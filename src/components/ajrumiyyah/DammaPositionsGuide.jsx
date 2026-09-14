const DAMMA_HTML = `
  <p class="dcm-lead">
    The ḍammah is one of four vowel-signs used in Arabic, and this section explains the specific job it does: marking a word as <em>marfūʿ</em> — roughly, the "nominative/indicative" state a subject, a topic, or an unmarked present-tense verb sits in. Al-Ājrūmiyyah names exactly four grammatical positions where ḍammah does this job, and the commentary works through each one in turn.
  </p>

  <div class="dcm-chart">
    <div class="dcm-chart-root-row">
      <div class="dcm-chart-root">
        <span class="dcm-ar">اَلضَّمَّةُ</span>
        <span class="dcm-en">sign of rafʿ — 4 positions</span>
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
          <span class="dcm-ex dcm-ar">مُحَمَّدٌ</span>
        </div>
      </div>
      <div class="dcm-chart-branch">
        <div class="dcm-chart-branch-stem"></div>
        <div class="dcm-chart-node dcm-c2">
          <span class="dcm-ar">جَمْعُ التَّكْسِيرِ</span>
          <span class="dcm-en">the broken plural</span>
          <span class="dcm-ex dcm-ar">رِجَالٌ</span>
        </div>
      </div>
      <div class="dcm-chart-branch">
        <div class="dcm-chart-branch-stem"></div>
        <div class="dcm-chart-node dcm-c3">
          <span class="dcm-ar">جَمْعُ الْمُؤَنَّثِ السَّالِمِ</span>
          <span class="dcm-en">sound feminine plural</span>
          <span class="dcm-ex dcm-ar">فَاطِمَاتٌ</span>
        </div>
      </div>
      <div class="dcm-chart-branch">
        <div class="dcm-chart-branch-stem"></div>
        <div class="dcm-chart-node dcm-c4">
          <span class="dcm-ar">الْفِعْلُ الْمُضَارِعُ</span>
          <span class="dcm-en">muḍāriʿ verb, unattached</span>
          <span class="dcm-ex dcm-ar">يَكْتُبُ</span>
        </div>
      </div>
    </div>
  </div>

  <h2 class="dcm-h2"><span class="dcm-num">1</span>The singular noun <span class="dcm-ar">اَلِاسْمُ الْمُفْرَدُ</span></h2>
  <p>
    "Singular" here is a technical, narrower category than it sounds. It means: not dual, not a (sound) plural, not a word that is grammatically treated like the dual or plural, and not one of the five special nouns (<span class="dcm-ar">الأسماء الخمسة</span>). Within that definition it covers ordinary masculine nouns like <span class="dcm-example">مُحَمَّدٌ</span>, <span class="dcm-example">عَلِيٌّ</span>, <span class="dcm-example">حَمْزَةُ</span>, and feminine ones like <span class="dcm-example">فَاطِمَةُ</span>, <span class="dcm-example">عَائِشَةُ</span>, <span class="dcm-example">زَيْنَبُ</span>.
  </p>
  <p>
    With an explicit ḍammah: <span class="dcm-example">حَضَرَ مُحَمَّدٌ</span> ("Muḥammad was present") and <span class="dcm-example">سَافَرَتْ فَاطِمَةُ</span> ("Fāṭimah travelled") — both are marfūʿ with a plainly-pronounced ḍammah. With an implicit ḍammah: <span class="dcm-example">حَضَرَ الْفَتَى وَالْقَاضِي وَأَخِي</span> ("the young man, the judge, and my brother were present") and <span class="dcm-example">تَزَوَّجَتْ لَيْلَى وَنُعْمَى</span> ("Laylā and Nuʿmā both got married") — every one of <span class="dcm-example">الْفَتَى</span>, <span class="dcm-example">لَيْلَى</span>, and <span class="dcm-example">نُعْمَى</span> is marfūʿ with a ḍammah implicit on the alif.
  </p>

  <div class="dcm-chart">
    <div class="dcm-chart-root-row">
      <div class="dcm-chart-root">
        <span class="dcm-ar">ضَمَّةُ الِاسْمِ الْمُفْرَدِ</span>
        <span class="dcm-en">how it surfaces</span>
      </div>
    </div>
    <div class="dcm-chart-stem"></div>
    <div class="dcm-chart-hline-wrap"><div class="dcm-chart-hline"></div></div>
    <div class="dcm-chart-row">
      <div class="dcm-chart-branch">
        <div class="dcm-chart-branch-stem"></div>
        <div class="dcm-chart-node dcm-c1">
          <span class="dcm-ar">ظَاهِرَة</span>
          <span class="dcm-en">explicit</span>
          <span class="dcm-ex dcm-ar">مُحَمَّدٌ</span>
        </div>
      </div>
      <div class="dcm-chart-branch dcm-chart-branch--wide">
        <div class="dcm-chart-branch-stem"></div>
        <div class="dcm-chart-node dcm-c3">
          <span class="dcm-ar">مُقَدَّرَة</span>
          <span class="dcm-en">implicit — blocked from appearing</span>
        </div>
        <div class="dcm-chart-subrow">
          <div class="dcm-chart-subnode dcm-c3">
            <span class="dcm-ar">تَعَذُّر</span>
            <span class="dcm-en">alif-final</span>
            <span class="dcm-ex dcm-ar">الْفَتَى، لَيْلَى، نُعْمَى</span>
          </div>
          <div class="dcm-chart-subnode dcm-c3">
            <span class="dcm-ar">ثِقَل</span>
            <span class="dcm-en">yā-final</span>
            <span class="dcm-ex dcm-ar">الْقَاضِي</span>
          </div>
          <div class="dcm-chart-subnode dcm-c3">
            <span class="dcm-ar">مُنَاسَبَة</span>
            <span class="dcm-en">before "my"</span>
            <span class="dcm-ex dcm-ar">أَخِي</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <p class="dcm-callout">
    In every implicit case the noun is still fully marfūʿ — the case ending is just invisible rather than absent. This distinction (explicit vs. implicit ḍammah) recurs in each of the next three positions too.
  </p>

  <h2 class="dcm-h2"><span class="dcm-num">2</span>The broken plural <span class="dcm-ar">جَمْعُ التَّكْسِيرِ</span></h2>
  <p>
    A broken plural is a plural (more than two of something) formed by changing the internal shape of the singular word, rather than by adding a fixed suffix. The commentary sorts every possible change into six patterns:
  </p>

  <div class="dcm-chart">
    <div class="dcm-chart-root-row">
      <div class="dcm-chart-root">
        <span class="dcm-ar">جَمْعُ التَّكْسِيرِ</span>
        <span class="dcm-en">six patterns of change</span>
      </div>
    </div>
    <div class="dcm-chart-stem"></div>
    <div class="dcm-chart-hline-wrap"><div class="dcm-chart-hline"></div></div>
    <div class="dcm-chart-row">
      <div class="dcm-chart-branch">
        <div class="dcm-chart-branch-stem"></div>
        <div class="dcm-chart-node dcm-c1">
          <span class="dcm-en">1 — vowelling only</span>
          <span class="dcm-ex dcm-ar">أَسَدٌ ← أُسُدٌ</span>
          <span class="dcm-ex dcm-ar">نَمْرٌ ← نُمُرٌ</span>
        </div>
      </div>
      <div class="dcm-chart-branch">
        <div class="dcm-chart-branch-stem"></div>
        <div class="dcm-chart-node dcm-c2">
          <span class="dcm-en">2 — drop only</span>
          <span class="dcm-ex dcm-ar">تُهَمَةٌ ← تُهَمٌ</span>
          <span class="dcm-ex dcm-ar">تُخَمَةٌ ← تُخَمٌ</span>
        </div>
      </div>
      <div class="dcm-chart-branch">
        <div class="dcm-chart-branch-stem"></div>
        <div class="dcm-chart-node dcm-c3">
          <span class="dcm-en">3 — addition only</span>
          <span class="dcm-ex dcm-ar">صِنْوٌ ← صِنْوَانٌ</span>
        </div>
      </div>
      <div class="dcm-chart-branch">
        <div class="dcm-chart-branch-stem"></div>
        <div class="dcm-chart-node dcm-c4">
          <span class="dcm-en">4 — vowelling + drop</span>
          <span class="dcm-ex dcm-ar">سَرِيرٌ ← سُرُرٌ</span>
          <span class="dcm-ex dcm-ar">كِتَابٌ ← كُتُبٌ</span>
          <span class="dcm-ex dcm-ar">أَحْمَرُ ← حُمْرٌ</span>
          <span class="dcm-ex dcm-ar">أَبْيَضُ ← بِيضٌ</span>
        </div>
      </div>
      <div class="dcm-chart-branch">
        <div class="dcm-chart-branch-stem"></div>
        <div class="dcm-chart-node dcm-c1">
          <span class="dcm-en">5 — vowelling + addition</span>
          <span class="dcm-ex dcm-ar">سَبَبٌ ← أَسْبَابٌ</span>
          <span class="dcm-ex dcm-ar">بَطَلٌ ← أَبْطَالٌ</span>
          <span class="dcm-ex dcm-ar">هِنْدٌ ← هُنُودٌ</span>
          <span class="dcm-ex dcm-ar">سَبُعٌ ← سِبَاعٌ</span>
          <span class="dcm-ex dcm-ar">ذِئْبٌ ← ذِئَابٌ</span>
          <span class="dcm-ex dcm-ar">شُجَاعٌ ← شُجْعَانٌ</span>
        </div>
      </div>
      <div class="dcm-chart-branch">
        <div class="dcm-chart-branch-stem"></div>
        <div class="dcm-chart-node dcm-c2">
          <span class="dcm-en">6 — vowelling + both</span>
          <span class="dcm-ex dcm-ar">كَرِيمٌ ← كُرَمَاءُ</span>
          <span class="dcm-ex dcm-ar">رَغِيفٌ ← رُغْفَانٌ</span>
          <span class="dcm-ex dcm-ar">كَاتِبٌ ← كُتَّابٌ</span>
          <span class="dcm-ex dcm-ar">أَمِيرٌ ← أُمَرَاءُ</span>
        </div>
      </div>
    </div>
  </div>

  <blockquote class="dcm-quran">
    <span class="dcm-ar">صِنْوَانٌ وَغَيْرُ صِنْوَانٍ</span>
    "[Date palms] some being twin-trunked, and some not."
    <cite>al-Raʿd 13:4 — the pattern-3 example</cite>
  </blockquote>
  <p>
    All six patterns behave the same way for our purposes: every broken plural is marfūʿ with a ḍammah, whether it is masculine in sense (<span class="dcm-example">رِجَالٌ</span>, <span class="dcm-example">كُتَّابٌ</span>) or feminine in sense (<span class="dcm-example">هُنُودٌ</span>, <span class="dcm-example">زَيَانِبُ</span>). Explicitly: <span class="dcm-example">قَامَ الرِّجَالُ وَالزَّيَانِبُ</span> ("the men and the Zaynabs stood") — both marfūʿ with a plainly-pronounced ḍammah. Implicitly, on a final alif blocked by the same <span class="dcm-ar">تَعَذُّر</span> rule: <span class="dcm-example">حَضَرَ الْجَرْحَى وَالْعَذَارَى</span> ("the wounded and the young women attended") — and likewise <span class="dcm-example">سُكَارَى</span> ("drunkards") and <span class="dcm-example">حَبَالَى</span> ("pregnant women").
  </p>

  <h2 class="dcm-h2"><span class="dcm-num">3</span>The sound feminine plural <span class="dcm-ar">جَمْعُ الْمُؤَنَّثِ السَّالِمِ</span></h2>
  <p>
    This plural is built differently: instead of reshaping the singular, it simply adds <strong>alif + tā'</strong> to the end — <span class="dcm-example">زَيْنَبُ ← زَيْنَبَاتٌ</span>, <span class="dcm-example">فَاطِمَةُ ← فَاطِمَاتٌ</span>, <span class="dcm-example">حَمَّامٌ ← حَمَّامَاتٌ</span>. Its ḍammah for rafʿ is explicit almost without exception — <span class="dcm-example">جَاءَ الزَّيْنَبَاتُ</span> ("the Zaynabs came") and <span class="dcm-example">سَافَرَ الْفَاطِمَاتُ</span> ("the Fāṭimahs travelled") — and only becomes implicit in one narrow case: when the noun is possessed by the speaker's own yā, e.g. <span class="dcm-example">هَذِهِ شَجَرَاتِي وَبَقَرَاتِي</span> ("these are my trees and my cows").
  </p>

  <div class="dcm-chart">
    <div class="dcm-chart-root-row">
      <div class="dcm-chart-root">
        <span class="dcm-ar">زِيَادَةُ أَلِفٍ وَتَاءٍ</span>
        <span class="dcm-en">is it really "added"?</span>
      </div>
    </div>
    <div class="dcm-chart-stem"></div>
    <div class="dcm-chart-hline-wrap"><div class="dcm-chart-hline"></div></div>
    <div class="dcm-chart-row">
      <div class="dcm-chart-branch">
        <div class="dcm-chart-branch-stem"></div>
        <div class="dcm-chart-node dcm-c4">
          <span class="dcm-ar">نَعَمْ ✓</span>
          <span class="dcm-en">genuinely added → sound fem. plural</span>
          <span class="dcm-ex dcm-ar">فَاطِمَةُ ← فَاطِمَاتٌ</span>
        </div>
      </div>
      <div class="dcm-chart-branch">
        <div class="dcm-chart-branch-stem"></div>
        <div class="dcm-chart-node dcm-c3">
          <span class="dcm-ar">لَا — الْأَلِفُ أَصْلِيَّة</span>
          <span class="dcm-en">alif was already there → broken plural</span>
          <span class="dcm-ex dcm-ar">اَلْقَاضِي ← اَلْقُضَاةِ</span>
          <span class="dcm-ex dcm-ar">اَلدَّاعِي ← اَلدُّعَاةِ</span>
        </div>
      </div>
      <div class="dcm-chart-branch">
        <div class="dcm-chart-branch-stem"></div>
        <div class="dcm-chart-node dcm-c3">
          <span class="dcm-ar">لَا — التَّاءُ أَصْلِيَّة</span>
          <span class="dcm-en">tā' was already there → broken plural</span>
          <span class="dcm-ex dcm-ar">مَيِّتٌ ← أَمْوَاتٌ</span>
          <span class="dcm-ex dcm-ar">بَيْتٌ ← أَبْيَاتٌ</span>
          <span class="dcm-ex dcm-ar">صَوْتٌ ← أَصْوَاتٌ</span>
        </div>
      </div>
    </div>
  </div>

  <p class="dcm-callout">
    The test for this category isn't just "does the word end in alif-tā'?" — it's whether that alif-tā' was genuinely <em>added</em> to form the plural. If either letter was already there in the singular, the word belongs to the broken-plural category instead.
  </p>

  <h2 class="dcm-h2"><span class="dcm-num">4</span>The muḍāriʿ verb, with nothing attached <span class="dcm-ar">الْفِعْلُ الْمُضَارِعُ</span></h2>
  <p>
    The baseline case is straightforward: a present/future-tense verb with an explicit ḍammah, as in <span class="dcm-example">يَضْرِبُ</span> ("he hits") and <span class="dcm-example">يَكْتُبُ</span> ("he writes"). Implicit cases follow the same <span class="dcm-ar">ثِقَل</span> / <span class="dcm-ar">تَعَذُّر</span> logic used for nouns: <span class="dcm-example">يَدْعُو</span> and <span class="dcm-example">يَرْجُو</span> are implicit on a final wāw (heaviness); <span class="dcm-example">يَقْضِي</span> and <span class="dcm-example">يُرْضِي</span> are implicit on a final yā (heaviness); <span class="dcm-example">يَرْضَى</span> and <span class="dcm-example">يَقْوَى</span> are implicit on a final alif (impossibility).
  </p>
  <p>
    The definition also carries a deliberate qualifier — <em>"nothing attached to the end"</em> — because five different attachments pull the verb out of this rule, and they don't all lead to the same place:
  </p>

  <div class="dcm-chart">
    <div class="dcm-chart-root-row">
      <div class="dcm-chart-root">
        <span class="dcm-ar">الْفِعْلُ الْمُضَارِعُ</span>
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
          <span class="dcm-en">nothing → marfūʿ by ḍammah</span>
          <span class="dcm-ex dcm-ar">يَضْرِبُ</span>
          <span class="dcm-ex dcm-ar">يَكْتُبُ</span>
        </div>
      </div>
      <div class="dcm-chart-branch dcm-chart-branch--mid">
        <div class="dcm-chart-branch-stem"></div>
        <div class="dcm-chart-node dcm-c2">
          <span class="dcm-ar">أَلِفٌ / وَاوٌ / يَاءٌ</span>
          <span class="dcm-en">dual / plural / f. address → marfūʿ by the nūn staying</span>
        </div>
        <div class="dcm-chart-subrow">
          <div class="dcm-chart-subnode dcm-c2"><span class="dcm-ex dcm-ar">يَكْتُبَانِ</span><span class="dcm-ex dcm-ar">يَنْصُرَانِ</span></div>
          <div class="dcm-chart-subnode dcm-c2"><span class="dcm-ex dcm-ar">يَكْتُبُونَ</span><span class="dcm-ex dcm-ar">يَنْصُرُونَ</span></div>
          <div class="dcm-chart-subnode dcm-c2"><span class="dcm-ex dcm-ar">تَكْتُبِينَ</span><span class="dcm-ex dcm-ar">تَنْصُرِينَ</span></div>
        </div>
      </div>
      <div class="dcm-chart-branch dcm-chart-branch--narrow">
        <div class="dcm-chart-branch-stem"></div>
        <div class="dcm-chart-node dcm-c3">
          <span class="dcm-ar">نُونُ تَوْكِيدٍ / نِسْوَةٍ</span>
          <span class="dcm-en">emphatic / feminine-plural nūn → mabnī (fixed)</span>
        </div>
        <div class="dcm-chart-subrow">
          <div class="dcm-chart-subnode dcm-c3"><span class="dcm-en">fatḥah</span><span class="dcm-ex dcm-ar">لَيَكُونًا</span></div>
          <div class="dcm-chart-subnode dcm-c3"><span class="dcm-en">sukūn</span><span class="dcm-ex dcm-ar">يُرْضِعْنَ</span></div>
        </div>
      </div>
    </div>
  </div>

  <p>
    In the middle branch the verb is still marfūʿ — but by an entirely different mechanism: the <em>presence of the nūn itself</em> is the sign of rafʿ (not a ḍammah), and the attached alif/wāw/yā functions as the subject. The commentary notes this will be explained fully in a later chapter. The right branch is different in kind: those two attachments don't just change the sign of rafʿ, they take the verb out of the marfūʿ (inflecting) category altogether, making it <em>mabnī</em> (fixed/non-inflecting).
  </p>

  <blockquote class="dcm-quran">
    <span class="dcm-ar">لَيُسْجَنَنَّ وَلَيَكُونًا مِنَ الصَّاغِرِينَ</span>
    "He will surely be imprisoned, and will surely be of those who are humiliated."
    <cite>Yūsuf 12:32 — emphatic nūn, mabnī on fatḥah</cite>
  </blockquote>
  <blockquote class="dcm-quran">
    <span class="dcm-ar">وَالْوَالِدَاتُ يُرْضِعْنَ</span>
    "And the mothers shall nurse [their children]."
    <cite>al-Baqarah 2:233 — nūn of feminine plural, mabnī on sukūn</cite>
  </blockquote>

  <hr class="dcm-divider" />
  <p class="dcm-callout dcm-callout--end">
    <strong>In short:</strong> ḍammah marks rafʿ in the singular noun, the broken plural, and the sound feminine plural whenever the word isn't dual/plural-marked in the sound way, and in the muḍāriʿ verb whenever nothing is attached to its ending. In every category, watch for the same three phonetic blockers — <span class="dcm-ar">تَعَذُّر</span> (alif), <span class="dcm-ar">ثِقَل</span> (wāw/yā), and <span class="dcm-ar">حَرَكَةُ الْمُنَاسَبَةِ</span> (before the possessive yā) — that push the ḍammah from explicit to implicit without changing the underlying case.
  </p>
`;

export default function DammaPositionsGuide() {
  return (
    <div
      className="damma-commentary"
      dangerouslySetInnerHTML={{ __html: DAMMA_HTML }}
    />
  );
}

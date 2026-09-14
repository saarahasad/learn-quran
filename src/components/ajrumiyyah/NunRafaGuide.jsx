const NUN_HTML = `
<p class="dcm-lead">
    This is the second "stand-in" sign for ḍammah. Like the alif, the nūn has exactly one job — but it activates it in three different situations. Al-Ājrūmiyyah's rule: the nūn marks rafʿ in the muḍāriʿ verb whenever it carries an attached subject-pronoun of duality, of plurality, or of feminine second-person address. Put together, the resulting five verb-shapes are known as <span class="dcm-ar">الْأَفْعَالُ الْخَمْسَة</span> — "the five verbs."
  </p>

  <!-- ============ OVERVIEW ============ -->
  <div class="dcm-chart">
    <div class="dcm-chart-root-row">
      <div class="dcm-chart-root">
        <span class="dcm-ar">اَلنُّونُ</span>
        <span class="dcm-en">stands in for ḍammah — one position, three pronouns</span>
      </div>
    </div>
    <div class="dcm-chart-stem"></div>
    <div class="dcm-chart-hline-wrap"><div class="dcm-chart-hline"></div></div>
    <div class="dcm-chart-row">
      <div class="dcm-chart-branch">
        <div class="dcm-chart-branch-stem"></div>
        <div class="dcm-chart-node dcm-c1">
          <span class="dcm-ar">أَلِفُ الِاثْنَيْنِ</span>
          <span class="dcm-en">dual pronoun</span>
          <span class="dcm-ex dcm-ar">يُسَافِرَانِ</span>
        </div>
      </div>
      <div class="dcm-chart-branch">
        <div class="dcm-chart-branch-stem"></div>
        <div class="dcm-chart-node dcm-c2">
          <span class="dcm-ar">وَاوُ الْجَمَاعَةِ</span>
          <span class="dcm-en">masc. plural pronoun</span>
          <span class="dcm-ex dcm-ar">يَقُومُونَ</span>
        </div>
      </div>
      <div class="dcm-chart-branch">
        <div class="dcm-chart-branch-stem"></div>
        <div class="dcm-chart-node dcm-c3">
          <span class="dcm-ar">يَاءُ الْمُخَاطَبَةِ</span>
          <span class="dcm-en">fem. 2nd-person pronoun</span>
          <span class="dcm-ex dcm-ar">تَعْرِفِينَ</span>
        </div>
      </div>
    </div>
  </div>

  <p>
    In every one of the three cases, the underlying logic is identical: the verb is marfūʿ because nothing (no particle of <span class="dcm-ar">نَصْب</span> or <span class="dcm-ar">جَزْم</span>) has pushed it out of rafʿ, and the <em>sign</em> of that rafʿ is simply the nūn staying attached — <span class="dcm-ar">ثُبُوتُ النُّون</span>, "the nūn's remaining in place." The attached alif, wāw, or yā is never part of the verb's ending; it is the subject (<span class="dcm-ar">فَاعِل</span>) of the sentence.
  </p>

  <!-- ============ 1. ALIF OF DUALITY ============ -->
  <h2 class="dcm-h2"><span class="dcm-num">1</span>Connected to the alif of duality <span class="dcm-ar">أَلِفُ الِاثْنَيْنِ</span></h2>
  <p>
    Two masculine examples open this section:
  </p>

  <div class="dcm-sentence dcm-c1">
    <span class="dcm-tag dcm-tag--alif">3rd person · ghāʾib · starts with يَـ</span>
    <span class="dcm-ar">الصَّدِيقَانِ يُسَافِرَانِ غَدًا</span>
    <span class="dcm-gloss">"The two friends travel tomorrow."</span>
  </div>
  <div class="dcm-sentence dcm-c1">
    <span class="dcm-tag dcm-tag--alif">2nd person · khiṭāb · starts with تَـ</span>
    <span class="dcm-ar">أَنْتُمَا تُسَافِرَانِ غَدًا</span>
    <span class="dcm-gloss">"You two travel tomorrow."</span>
  </div>

  <p>
    Both <span class="dcm-example">يُسَافِرَانِ</span> and <span class="dcm-example">تُسَافِرَانِ</span> are muḍāriʿ verbs in rafʿ — free of any particle that would push them into naṣb or jazm — and the sign of that rafʿ is the nūn staying in place, with the alif itself functioning as the subject. From this the text draws a general rule: a verb connected to this alif may begin with <strong>yā</strong> (for the third person / <span class="dcm-ar">غِيبَة</span>) or with <strong>tā</strong> (for the second person / <span class="dcm-ar">خِطَاب</span>).
  </p>

  <p>
    But that freedom narrows when the dual subject is <em>feminine</em>:
  </p>

  <div class="dcm-sentence dcm-c3">
    <span class="dcm-tag dcm-tag--ya">3rd person · ghāʾib · starts with تَـ only</span>
    <span class="dcm-ar">الْهِنْدَانِ تُسَافِرَانِ غَدًا</span>
    <span class="dcm-gloss">"The two Hinds travel tomorrow."</span>
  </div>
  <div class="dcm-sentence dcm-c3">
    <span class="dcm-tag dcm-tag--ya">2nd person · khiṭāb · starts with تَـ only</span>
    <span class="dcm-ar">أَنْتُمَا يَا هِنْدَانِ تُسَافِرَانِ غَدًا</span>
    <span class="dcm-gloss">"You two — O Hinds — travel tomorrow."</span>
  </div>

  <p>
    In <span class="dcm-example">تُسَافِرَانِ</span> the sign of rafʿ is again the nūn remaining, and the alif is again the subject — but a verb attached to the alif of a <em>feminine</em> dual can never begin with yā, whether the subject is being spoken about (ghāʾib) or spoken to (khiṭāb). It is always tā.
  </p>

  <div class="dcm-chart">
    <h3 class="dcm-h3">التثنية — masc. vs. fem. dual, side by side</h3>
    <table class="dcm-table">
      <tr><th>Subject</th><th>Full example</th><th>Verb starts with</th></tr>
      <tr>
        <td>masc. dual, 3rd person</td>
        <td class="dcm-td-ar">الصَّدِيقَانِ يُسَافِرَانِ غَدًا<span class="dcm-td-en">the two friends travel tomorrow</span></td>
        <td class="dcm-td-center">يَـ (ghāʾib)</td>
      </tr>
      <tr>
        <td>masc. dual, 2nd person</td>
        <td class="dcm-td-ar">أَنْتُمَا تُسَافِرَانِ غَدًا<span class="dcm-td-en">you two travel tomorrow</span></td>
        <td class="dcm-td-center">تَـ (khiṭāb)</td>
      </tr>
      <tr>
        <td>fem. dual, 3rd person</td>
        <td class="dcm-td-ar">الْهِنْدَانِ تُسَافِرَانِ غَدًا<span class="dcm-td-en">the two Hinds travel tomorrow</span></td>
        <td class="dcm-td-center">تَـ only</td>
      </tr>
      <tr>
        <td>fem. dual, 2nd person</td>
        <td class="dcm-td-ar">أَنْتُمَا يَا هِنْدَانِ تُسَافِرَانِ غَدًا<span class="dcm-td-en">you two, O Hinds, travel tomorrow</span></td>
        <td class="dcm-td-center">تَـ only</td>
      </tr>
    </table>
  </div>

  <!-- ============ 2. WAW OF PLURALITY ============ -->
  <h2 class="dcm-h2"><span class="dcm-num">2</span>Connected to the wāw of plurality <span class="dcm-ar">وَاوُ الْجَمَاعَةِ</span></h2>

  <div class="dcm-sentence dcm-c2">
    <span class="dcm-tag dcm-tag--waw">3rd person · ghāʾib · first example</span>
    <span class="dcm-ar">الرِّجَالُ الْمُخْلِصُونَ هُمُ الَّذِينَ يَقُومُونَ بِوَاجِبِهِمْ</span>
    <span class="dcm-gloss">"The sincere men are those who perform their duty."</span>
  </div>
  <div class="dcm-sentence dcm-c2">
    <span class="dcm-tag dcm-tag--waw">2nd person · khiṭāb · second example</span>
    <span class="dcm-ar">أَنْتُمْ يَا قَوْمُ تَقُومُونَ بِوَاجِبِكُمْ</span>
    <span class="dcm-gloss">"You — O people — perform your duty."</span>
  </div>

  <p>
    <span class="dcm-example">يَقُومُونَ</span> and <span class="dcm-example">تَقُومُونَ</span> are both muḍāriʿ verbs in rafʿ. Exactly as before, the nūn remaining is the sign of that rafʿ — but here the subject is the wāw of plurality, and it is described as <span class="dcm-ar">مَبْنِيّ عَلَى السُّكُون</span> (non-inflecting, fixed on sukūn) while still sitting in the grammatical position of rafʿ. And just like the alif, a verb attached to this wāw may open with either yā (third person, as in the first example) or tā (second person, as in the second example).
  </p>

  <!-- ============ 3. YA OF FEMININE ADDRESS ============ -->
  <h2 class="dcm-h2"><span class="dcm-num">3</span>Connected to the yā of feminine address <span class="dcm-ar">يَاءُ الْمُخَاطَبَةِ</span></h2>
  <p>
    The name itself is doing grammatical work: <span class="dcm-ar">مُخَاطَب</span> (mukhāṭab) is the general term for "one being addressed" — 2nd person, spoken <em>to</em> rather than about. <span class="dcm-ar">مُخَاطَبَة</span> (mukhāṭabah) is simply its feminine form. So <span class="dcm-example">يَاءُ الْمُخَاطَبَةِ</span> tells you two things in one label: this is the 2nd person (<span class="dcm-ar">مُخَاطَب</span>), and specifically the feminine one (<span class="dcm-ar">مُخَاطَبَة</span>) — exactly what this yā means and nothing else. There is no corresponding <span class="dcm-ar">يَاءُ الْمُخَاطَبِ</span> (masculine) — "you [m.]" is carried by the تَـ prefix alone, with no attached letter at the end (<span class="dcm-example">تَقُومُ</span>), so only the feminine version of this pronoun exists as a suffix.
  </p>

  <div class="dcm-sentence dcm-c3">
    <span class="dcm-tag dcm-tag--ya">2nd person, feminine · starts with تَـ only</span>
    <span class="dcm-ar">أَنْتِ يَا هِنْدُ تَعْرِفِينَ وَاجِبَكِ</span>
    <span class="dcm-gloss">"You, O Hind, are aware of what is incumbent upon you."</span>
  </div>

  <p>
    <span class="dcm-example">تَعْرِفِينَ</span> is marfūʿ by the nūn remaining, with the yā functioning as the subject — again mabnī on sukūn, in the position of rafʿ. This is the most restricted of the three attachments: a verb connected to this yā can <em>only</em> begin with tā, because by its very nature it always signals a feminine subject being addressed directly.
  </p>

  <div class="dcm-chart">
    <div class="dcm-chart-root-row">
      <div class="dcm-chart-root">
        <span class="dcm-ar">مَنِ الَّذِي يَبْدَأُ بِالتَّاءِ أَوِ الْيَاءِ؟</span>
        <span class="dcm-en">which opening letter is possible?</span>
      </div>
    </div>
    <div class="dcm-chart-stem"></div>
    <div class="dcm-chart-hline-wrap"><div class="dcm-chart-hline"></div></div>
    <div class="dcm-chart-row">
      <div class="dcm-chart-branch">
        <div class="dcm-chart-branch-stem"></div>
        <div class="dcm-chart-node dcm-c1">
          <span class="dcm-ar">مُسْنَدٌ لِلْأَلِفِ</span>
          <span class="dcm-en">alif-attached (masc. dual)</span>
          <span class="dcm-ex">تَـ or يَـ</span>
        </div>
      </div>
      <div class="dcm-chart-branch">
        <div class="dcm-chart-branch-stem"></div>
        <div class="dcm-chart-node dcm-c2">
          <span class="dcm-ar">مُسْنَدٌ لِلْوَاوِ</span>
          <span class="dcm-en">wāw-attached</span>
          <span class="dcm-ex">تَـ or يَـ</span>
        </div>
      </div>
      <div class="dcm-chart-branch">
        <div class="dcm-chart-branch-stem"></div>
        <div class="dcm-chart-node dcm-c3">
          <span class="dcm-ar">مُسْنَدٌ لِلْيَاءِ أَوِ الْأَلِفِ الْمُؤَنَّث</span>
          <span class="dcm-en">yā-attached, or fem. dual alif</span>
          <span class="dcm-ex">تَـ only</span>
        </div>
      </div>
    </div>
  </div>

  <p class="dcm-callout dcm-pink">
    Notice the asymmetry: the feminine dual (section 1) and the yā of feminine address (section 3) both collapse to tā-only — but for different reasons. The feminine dual is restricted because the <em>subject noun itself</em> is feminine; the yā-attachment is restricted because that pronoun, by definition, only ever addresses a female listener.
  </p>

  <!-- ============ 4. SUMMARY: THE FIVE VERBS ============ -->
  <h2 class="dcm-h2"><span class="dcm-num">4</span>The five verbs, together <span class="dcm-ar">اَلْأَفْعَالُ الْخَمْسَةُ</span></h2>
  <p>
    The commentary closes by collecting every shape produced across the three attachments and both persons. A verb connected to the alif can begin with tā or yā; a verb connected to the wāw can likewise begin with either; a verb connected to the yā can only begin with tā. Laid out together, this yields exactly five distinct forms — hence the name "the five verbs." All five share the same sign of rafʿ: the nūn remaining, never a ḍammah.
  </p>

  <div class="dcm-chart">
    <div class="dcm-chart-row dcm-chart-row--five">
      <div class="dcm-chart-branch">
        <div class="dcm-chart-node dcm-c1">
          <span class="dcm-ex dcm-ar">يَقُومَانِ</span>
          <span class="dcm-en">masc. dual, 3rd person</span>
        </div>
      </div>
      <div class="dcm-chart-branch">
        <div class="dcm-chart-node dcm-c1">
          <span class="dcm-ex dcm-ar">تَقُومَانِ</span>
          <span class="dcm-en">masc. dual 2nd person / fem. dual (either person)</span>
        </div>
      </div>
      <div class="dcm-chart-branch">
        <div class="dcm-chart-node dcm-c2">
          <span class="dcm-ex dcm-ar">يَقُومُونَ</span>
          <span class="dcm-en">masc. plural, 3rd person</span>
        </div>
      </div>
      <div class="dcm-chart-branch">
        <div class="dcm-chart-node dcm-c2">
          <span class="dcm-ex dcm-ar">تَقُومُونَ</span>
          <span class="dcm-en">masc. plural, 2nd person</span>
        </div>
      </div>
      <div class="dcm-chart-branch">
        <div class="dcm-chart-node dcm-c3">
          <span class="dcm-ex dcm-ar">تَقُومِينَ</span>
          <span class="dcm-en">fem. singular, 2nd person</span>
        </div>
      </div>
    </div>
  </div>

  <div class="dcm-five-legend">
    <span><span class="dcm-dot dcm-dot--alif"></span>alif of duality</span>
    <span><span class="dcm-dot dcm-dot--waw"></span>wāw of plurality</span>
    <span><span class="dcm-dot dcm-dot--ya"></span>yā of address</span>
  </div>
  <p>
    The five verbs aren't a separate paradigm — they're just <em>five slots</em> inside the ordinary muḍāriʿ conjugation table. Laying out every person, gender, and number for a sample verb makes the pattern obvious: every highlighted row ends in a nūn that is the sign of rafʿ; every plain row is marfūʿ by an ordinary (explicit) ḍammah instead.
  </p>

  <div class="dcm-grid-caption">
    <span class="dcm-grid-label">Table</span>
    <span class="dcm-grid-title">Verb Forms of <span class="dcm-ar">فِعْل مُضَارِعٌ</span> in Active Voice — <span class="dcm-ar">قَامَ / يَقُومُ</span> ("to stand")</span>
  </div>

  <table class="dcm-grid">
    <tr>
      <th>Person</th><th>Gender</th><th>Plurality</th><th>English</th><th>Arabic</th>
    </tr>

    <tr>
      <td rowspan="6" class="dcm-grid-person">Third Person<br><span class="dcm-ar">غَائِب</span></td>
      <td rowspan="3">Masculine<br><span class="dcm-ar">مُذَكَّر</span></td>
      <td>Singular</td><td>He/It is doing or will do</td><td class="dcm-grid-ar">يَقُومُ</td>
    </tr>
    <tr class="dcm-row-five dcm-row-alif">
      <td>Dual</td><td>They two are doing or will do</td><td class="dcm-grid-ar">يَقُومَانِ</td>
    </tr>
    <tr class="dcm-row-five dcm-row-waw">
      <td>Plural</td><td>They are doing or will do</td><td class="dcm-grid-ar">يَقُومُونَ</td>
    </tr>
    <tr>
      <td rowspan="3">Feminine<br><span class="dcm-ar">مُؤَنَّث</span></td>
      <td>Singular</td><td>She/It is doing or will do</td><td class="dcm-grid-ar">تَقُومُ</td>
    </tr>
    <tr class="dcm-row-five dcm-row-alif">
      <td>Dual</td><td>They two are doing or will do</td><td class="dcm-grid-ar">تَقُومَانِ</td>
    </tr>
    <tr>
      <td>Plural</td><td>They are doing or will do</td><td class="dcm-grid-ar">يَقُمْنَ</td>
    </tr>

    <tr>
      <td rowspan="6" class="dcm-grid-person">Second Person<br><span class="dcm-ar">حَاضِر</span></td>
      <td rowspan="3">Masculine<br><span class="dcm-ar">مُذَكَّر</span></td>
      <td>Singular</td><td>You are doing or will do</td><td class="dcm-grid-ar">تَقُومُ</td>
    </tr>
    <tr class="dcm-row-five dcm-row-alif">
      <td>Dual</td><td>You two are doing or will do</td><td class="dcm-grid-ar">تَقُومَانِ</td>
    </tr>
    <tr class="dcm-row-five dcm-row-waw">
      <td>Plural</td><td>You are doing or will do</td><td class="dcm-grid-ar">تَقُومُونَ</td>
    </tr>
    <tr class="dcm-row-five dcm-row-ya">
      <td rowspan="3">Feminine<br><span class="dcm-ar">مُؤَنَّث</span></td>
      <td>Singular</td><td>You are doing or will do</td><td class="dcm-grid-ar">تَقُومِينَ</td>
    </tr>
    <tr class="dcm-row-five dcm-row-alif">
      <td>Dual</td><td>You two are doing or will do</td><td class="dcm-grid-ar">تَقُومَانِ</td>
    </tr>
    <tr>
      <td>Plural</td><td>You are doing or will do</td><td class="dcm-grid-ar">تَقُمْنَ</td>
    </tr>

    <tr>
      <td rowspan="2" class="dcm-grid-person">First Person<br><span class="dcm-ar">مُتَكَلِّم</span></td>
      <td>Masculine/<br>Feminine</td><td>Singular</td><td>I am doing or will do</td><td class="dcm-grid-ar">أَقُومُ</td>
    </tr>
    <tr>
      <td>Masculine/<br>Feminine</td><td>Dual/<br>Plural</td><td>We are doing or will do</td><td class="dcm-grid-ar">نَقُومُ</td>
    </tr>
  </table>

  <div class="dcm-grid-legend">
    <span><span class="dcm-dot dcm-dot--alif"></span>five verbs — alif of duality</span>
    <span><span class="dcm-dot dcm-dot--waw"></span>five verbs — wāw of plurality</span>
    <span><span class="dcm-dot dcm-dot--ya"></span>five verbs — yā of address</span>
    <span>plain rows — ordinary ḍammah, or mabnī on نُونُ النِّسْوَةِ (fem. plural)</span>
  </div>


  <p class="dcm-callout dcm-yellow">
    <strong>Watch the two feminine-plural rows</strong> (أَنْتُنَّ تَقُمْنَ / هُنَّ يَقُمْنَ) — they end in a nūn too, and it's tempting to lump them in. But that nūn is <span class="dcm-ar">نُونُ النِّسْوَةِ</span>, the nūn of feminine plurality from the <em>previous</em> chapter, and it does the opposite job: it makes the verb mabnī (fixed) rather than marking rafʿ. Only a nūn that stays in place <em>because the verb is inflecting</em> — i.e. one that would be dropped under naṣb or jazm — counts as one of "the five verbs." <span class="dcm-ar">يَقُمْنَ</span> and <span class="dcm-ar">تَقُمْنَ</span> never change their nūn no matter what precedes them, which is exactly why they're excluded.
  </p>

  <h3 class="dcm-h3">recap — which opening letter each attachment allows</h3>
  <table class="dcm-table">
    <tr><th>Attached to</th><th>May begin with تَـ</th><th>May begin with يَـ</th></tr>
    <tr><td class="dcm-td-ar">أَلِفُ الِاثْنَيْنِ (مذكر)</td><td class="dcm-td-center">✓</td><td class="dcm-td-center">✓</td></tr>
    <tr><td class="dcm-td-ar">أَلِفُ الِاثْنَيْنِ (مؤنث)</td><td class="dcm-td-center">✓</td><td class="dcm-td-center">—</td></tr>
    <tr><td class="dcm-td-ar">وَاوُ الْجَمَاعَةِ</td><td class="dcm-td-center">✓</td><td class="dcm-td-center">✓</td></tr>
    <tr><td class="dcm-td-ar">يَاءُ الْمُخَاطَبَةِ</td><td class="dcm-td-center">✓</td><td class="dcm-td-center">—</td></tr>
  </table>

  <hr class="dcm-divider" />
  <p class="dcm-callout dcm-callout--end">
    <strong>In short:</strong> the nūn marks rafʿ in exactly one place — a muḍāriʿ verb carrying the dual alif, the plural wāw, or the feminine-address yā as its subject. In every case the attached letter is the fāʿil, never part of the verb's own ending, and it is <span class="dcm-ar">ثُبُوتُ النُّون</span> — the nūn's remaining — that does the work a ḍammah would otherwise do. Whether the verb opens with tā or yā depends on person and gender, not on which of the three pronouns is attached — except that a feminine subject (fem. dual, or the yā of address) always forces tā.
  </p>
`;

export default function NunRafaGuide() {
  return (
    <div
      className="damma-commentary"
      dangerouslySetInnerHTML={{ __html: NUN_HTML }}
    />
  );
}

export default function NasbSignsGuide() {
  return (
    <div className="ajr-rafa-guide">
      <p className="ajr-rafa-intro">
        One original sign and four that stand in for it. As with rafʿ, the fatḥah is the
        root (<span className="ar">أَصْلِيَّة</span>) — the others are furūʿ, each substituting
        for the fatḥah in a specific category of word.
      </p>

      <header className="rafa-head">
        <span className="rafa-eyebrow">علامات النصب</span>
        <h3>Signs of al-Naṣb</h3>
        <p>One original sign, four signs that stand in for it.</p>
      </header>

      <div className="rafa-tree rafa-tree--four">
        <div className="rafa-root">
          <span className="rafa-ar">الْفَتْحَة</span>
          <span className="rafa-en">al-Fatḥah</span>
          <span className="rafa-tag">أَصْلِيَّة — original</span>
        </div>

        <div className="rafa-branches">
          <div className="rafa-leaf">
            <span className="rafa-ar">الْأَلِف</span>
            <span className="rafa-en">al-Alif</span>
          </div>
          <div className="rafa-leaf">
            <span className="rafa-ar">الْكَسْرَة</span>
            <span className="rafa-en">al-Kasrah</span>
          </div>
          <div className="rafa-leaf">
            <span className="rafa-ar">الْيَاء</span>
            <span className="rafa-en">al-Yāʾ</span>
          </div>
          <div className="rafa-leaf">
            <span className="rafa-ar">حَذْفُ النُّون</span>
            <span className="rafa-en">removal of nūn</span>
          </div>
        </div>
        <span className="rafa-furoo-label">فُرُوع — subsidiary signs</span>
      </div>

      <p className="ajr-rafa-note">
        <strong>Remember:</strong> when you see fatḥah, alif, kasrah, yāʾ, or deletion of
        nūn marking naṣb, the word is <span className="ar">مَنْصُوب</span>. The next
        sections place each sign — where the fatḥah appears, then where the others take
        its place.
      </p>
    </div>
  );
}

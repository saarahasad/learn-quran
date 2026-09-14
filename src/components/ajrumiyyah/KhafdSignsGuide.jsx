export default function KhafdSignsGuide() {
  return (
    <div className="ajr-rafa-guide">
      <p className="ajr-rafa-intro">
        One original sign and two that stand in for it — the smallest of the three iʿrāb-sign
        sets. As with rafʿ and naṣb, the kasrah is the root (<span className="ar">أَصْلٌ</span>);
        the yāʾ and the fatḥah are furūʿ, each taking over in specific categories of word.
        Each of the three has its own set of positions, covered one at a time below.
      </p>

      <header className="rafa-head">
        <span className="rafa-eyebrow">علامات الخفض</span>
        <h3>Signs of al-Khafḍ</h3>
        <p>One original sign, two signs that stand in for it.</p>
      </header>

      <div className="rafa-tree">
        <div className="rafa-root">
          <span className="rafa-ar">الْكَسْرَة</span>
          <span className="rafa-en">al-Kasrah</span>
          <span className="rafa-tag">أَصْلٌ — original</span>
        </div>

        <div className="rafa-branches">
          <div className="rafa-leaf">
            <span className="rafa-ar">الْيَاء</span>
            <span className="rafa-en">al-Yāʾ</span>
          </div>
          <div className="rafa-leaf">
            <span className="rafa-ar">الْفَتْحَة</span>
            <span className="rafa-en">al-Fatḥah</span>
          </div>
        </div>
        <span className="rafa-furoo-label">فُرُوع — subsidiary signs</span>
      </div>

      <p className="ajr-rafa-note">
        <strong>Remember:</strong> when you see kasrah, yāʾ, or fatḥah marking khafḍ, the
        word is <span className="ar">مَخْفُوض</span>. The next sections place each sign —
        where the kasrah appears, then where yāʾ and fatḥah take its place.
      </p>
    </div>
  );
}

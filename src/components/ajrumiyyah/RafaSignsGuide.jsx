export default function RafaSignsGuide() {
  return (
    <div className="ajr-rafa-guide">
      <p className="ajr-rafa-intro">
        This chapter teaches how to <strong>recognise</strong> each state of iʿrāb by the
        mark on a word&rsquo;s ending. Ibn Ājurrūm begins with <span className="ar">الرَّفْع</span>{" "}
        — four signs in total: one <em>original</em>, and three that stand in for it.
      </p>

      <header className="rafa-head">
        <span className="rafa-eyebrow">علامات الرفع</span>
        <h3>Signs of al-Rafʿ</h3>
        <p>One original sign, three signs that stand in for it.</p>
      </header>

      <div className="rafa-tree">
        <div className="rafa-root">
          <span className="rafa-ar">الضَّمَّة</span>
          <span className="rafa-en">al-Ḍammah</span>
          <span className="rafa-tag">أَصْلِيَّة — original</span>
        </div>

        <div className="rafa-branches">
          <div className="rafa-leaf">
            <span className="rafa-ar">الْوَاو</span>
            <span className="rafa-en">al-Wāw</span>
          </div>
          <div className="rafa-leaf">
            <span className="rafa-ar">الْأَلِف</span>
            <span className="rafa-en">al-Alif</span>
          </div>
          <div className="rafa-leaf">
            <span className="rafa-ar">النُّون</span>
            <span className="rafa-en">al-Nūn</span>
          </div>
        </div>
        <span className="rafa-furoo-label">فُرُوع — subsidiary signs</span>
      </div>

      <p className="ajr-rafa-note">
        <strong>Remember:</strong> when you see ḍammah, wāw, alif, or nūn marking rafʿ, the
        word is <span className="ar">مَرْفُوع</span>. The next sections place each sign —
        where the ḍammah appears, then where wāw, alif, and nūn take its place.
      </p>
    </div>
  );
}

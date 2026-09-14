export default function JazmSignsGuide() {
  return (
    <div className="ajr-rafa-guide">
      <p className="ajr-rafa-intro">
        The smallest of the four iʿrāb-sign sets — just one root and one farʿ. As with rafʿ,
        naṣb, and khafḍ, the sukūn is the root (<span className="ar">أَصْلِيَّة</span>); ḥadhf
        takes over in a specific category of word. Jazm is also unique among the four states
        in that it applies only to verbs, never to nouns. Each sign&rsquo;s positions are covered
        one at a time below.
      </p>

      <header className="rafa-head">
        <span className="rafa-eyebrow">علامتا الجزم</span>
        <h3>Signs of al-Jazm</h3>
        <p>One original sign, one sign that stands in for it.</p>
      </header>

      <div className="rafa-tree rafa-tree--one">
        <div className="rafa-root">
          <span className="rafa-ar">السُّكُون</span>
          <span className="rafa-en">al-Sukūn</span>
          <span className="rafa-tag">أَصْلِيَّة — original</span>
        </div>

        <div className="rafa-branches">
          <div className="rafa-leaf">
            <span className="rafa-ar">الْحَذْف</span>
            <span className="rafa-en">al-Ḥadhf — removal</span>
          </div>
        </div>
        <span className="rafa-furoo-label">فَرْع — subsidiary sign</span>
      </div>

      <p className="ajr-rafa-note">
        <strong>Remember:</strong> when you see sukūn or deletion marking jazm, the word is{" "}
        <span className="ar">مَجْزُوم</span>. The next sections place each sign — where the
        sukūn appears, then where ḥadhf takes its place.
      </p>
    </div>
  );
}

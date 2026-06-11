import { Link } from "react-router-dom";
import { DIARY_SURAHS } from "../data/diarySurahs.js";
import "./LandingPage.css";

const featureCards = [
  {
    icon: "01",
    title: "Scene-based revision",
    body: "Move through each surah in clear memory scenes with anchors, meanings, and tafsir notes.",
  },
  {
    icon: "02",
    title: "Active recall tools",
    body: "Switch from study to quiz or recitation practice so revision becomes measurable.",
  },
  {
    icon: "03",
    title: "Private progress tracking",
    body: "Keep memorisation dates, revision sessions, and self-assessment scores on this device.",
  },
];

const revisionFlow = [
  "Pick a surah",
  "Study the scene",
  "Test recall",
  "Log the result",
];

export default function LandingPage() {
  const totalAyahs = DIARY_SURAHS.reduce((sum, surah) => sum + surah.ayahCount, 0);

  return (
    <main className="landing-page">
      <section className="landing-hero" aria-labelledby="landing-title">
        <nav className="landing-nav" aria-label="Primary">
          <Link to="/" className="landing-brand" aria-label="Muraja'ah home">
            <span className="landing-brand-ar" dir="rtl">مُراجَعة</span>
            <span>Qur'an Revision</span>
          </Link>

          <div className="landing-nav-links">
            <Link to="/surahs">Surahs</Link>
            <Link to="/diary">Diary</Link>
          </div>
        </nav>

        <div className="landing-hero-grid">
          <div className="landing-copy">
            <p className="landing-kicker">Juz 30 revision workspace</p>
            <h1 id="landing-title">A calmer way to revise, test, and track memorisation.</h1>
            <p className="landing-intro">
              Study surahs through structured scenes, practise recall with quizzes and recitation,
              then keep a lightweight diary of what is memorised and due for review.
            </p>

            <div className="landing-actions">
              <Link to="/surahs" className="landing-button primary">
                Open Surah Library
              </Link>
              <Link to="/diary" className="landing-button secondary">
                Open Memorisation Diary
              </Link>
            </div>
          </div>

          <aside className="landing-panel" aria-label="Revision summary">
            <div className="landing-ar-card" dir="rtl">
              <span>وَرَتِّلِ ٱلْقُرْءَانَ تَرْتِيلًا</span>
            </div>
            <div className="landing-stats">
              <div>
                <strong>{DIARY_SURAHS.length}</strong>
                <span>Surahs</span>
              </div>
              <div>
                <strong>{totalAyahs}</strong>
                <span>Ayahs</span>
              </div>
              <div>
                <strong>3</strong>
                <span>Study modes</span>
              </div>
            </div>
            <div className="landing-flow-card">
              <p>Revision flow</p>
              <ol>
                {revisionFlow.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </div>
          </aside>
        </div>
      </section>

      <section className="landing-destinations" aria-label="Choose where to start">
        <Link to="/surahs" className="landing-destination-card surahs">
          <p>Surah Library</p>
          <h2>Start revising</h2>
          <span>Browse all Juz 30 surahs, revise by scene, quiz yourself, or practise recitation.</span>
        </Link>

        <Link to="/diary" className="landing-destination-card diary">
          <p>Memorisation Diary</p>
          <h2>Track progress</h2>
          <span>Record memorised dates, last revision, due items, and confidence scores.</span>
        </Link>
      </section>

      <section className="landing-features" aria-label="Learning features">
        {featureCards.map((feature) => (
          <article key={feature.title}>
            <span>{feature.icon}</span>
            <h3>{feature.title}</h3>
            <p>{feature.body}</p>
          </article>
        ))}
      </section>
    </main>
  );
}

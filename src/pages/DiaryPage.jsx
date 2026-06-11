import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { DIARY_SURAHS } from "../data/diarySurahs.js";
import { daysSince, todayString, useDiaryStore } from "../hooks/useDiaryStore.js";
import "./DiaryPage.css";

const SURAHS = DIARY_SURAHS;

const METRICS = [
  {
    key: "fluency",
    label: "Fluency",
    prompt: "Could I recite without stopping or hesitating?",
  },
  {
    key: "ayahOrder",
    label: "Āyah order",
    prompt: "Did I know which verse comes next without thinking?",
  },
  {
    key: "tajweed",
    label: "Tajwīd",
    prompt: "Was my pronunciation and tajwīd rules correct?",
  },
  {
    key: "meaning",
    label: "Meaning recall",
    prompt: "Did I remember the general meaning of what I was reciting?",
  },
];

const EMPTY_RATINGS = {
  fluency: 0,
  ayahOrder: 0,
  tajweed: 0,
  meaning: 0,
};

function getEntry(diary, num) {
  return diary[String(num)] || { memorised: "", lastRevised: "", scores: [] };
}

function getOverallClass(score) {
  if (!score) return "neutral";
  if (score <= 2) return "low";
  if (score < 4) return "medium";
  return "high";
}

function getSurah(num) {
  return SURAHS.find((surah) => surah.revelationOrder === Number(num));
}

function formatOverall(score) {
  const value = Number(score);
  if (!Number.isFinite(value)) return "—";

  return Number.isInteger(value) ? String(value) : value.toFixed(1);
}

function latestTrend(scores) {
  if (!scores || scores.length < 2) return "→";

  const latest = scores[scores.length - 1]?.overall || 0;
  const previous = scores[scores.length - 2]?.overall || 0;

  if (latest > previous) return "↑";
  if (latest < previous) return "↓";
  return "→";
}

function StarRating({ value, onChange, label }) {
  return (
    <div className="diary-stars" aria-label={label}>
      {[1, 2, 3, 4, 5].map((rating) => (
        <button
          type="button"
          key={rating}
          className={rating <= value ? "active" : ""}
          onClick={() => onChange(rating)}
          aria-label={`${label}: ${rating} out of 5`}
        >
          {rating <= value ? "★" : "☆"}
        </button>
      ))}
      <span>{value ? `${value}/5` : "Tap to rate"}</span>
    </div>
  );
}

function SurahName({ surah }) {
  return (
    <div className="diary-surah-name">
      <span className="diary-surah-ar" dir="rtl">{surah.nameAr}</span>
      <span>{surah.name}</span>
    </div>
  );
}

function StatCard({ label, value }) {
  return (
    <div className="diary-stat-card">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

export default function DiaryPage() {
  const {
    diary,
    setMemorised,
    setLastRevised,
    stampToday,
    isDue,
    addScore,
    getLatestScore,
    getRecommended,
  } = useDiaryStore();
  const [activeTab, setActiveTab] = useState("diary");
  const [selectedSurah, setSelectedSurah] = useState("");
  const [ratings, setRatings] = useState(EMPTY_RATINGS);
  const [confirmation, setConfirmation] = useState("");

  const memorisedSurahs = useMemo(
    () => SURAHS.filter((surah) => getEntry(diary, surah.revelationOrder).memorised),
    [diary],
  );

  const recommended = getRecommended()
    .map(getSurah)
    .filter(Boolean);

  const stats = useMemo(() => {
    const month = todayString().slice(0, 7);

    return {
      memorised: memorisedSurahs.length,
      revisedThisMonth: SURAHS.filter((surah) => (
        getEntry(diary, surah.revelationOrder).lastRevised?.startsWith(month)
      )).length,
      due: SURAHS.filter((surah) => isDue(surah.revelationOrder)).length,
    };
  }, [diary, isDue, memorisedSurahs.length]);

  const selectedEntry = selectedSurah ? getEntry(diary, selectedSurah) : null;
  const selectedSurahDetails = selectedSurah ? getSurah(selectedSurah) : null;
  const scoreHistory = selectedEntry?.scores || [];
  const allRatingsSet = METRICS.every((metric) => ratings[metric.key] > 0);
  const overall = allRatingsSet
    ? METRICS.reduce((sum, metric) => sum + ratings[metric.key], 0) / METRICS.length
    : 0;

  const dueSurahs = SURAHS.filter((surah) => isDue(surah.revelationOrder));
  const scoredSessions = memorisedSurahs.flatMap((surah) => (
    getEntry(diary, surah.revelationOrder).scores || []
  ));
  const completionPercent = Math.round((stats.memorised / SURAHS.length) * 100);

  const averages = METRICS.map((metric) => {
    const sessions = scoredSessions.filter((score) => Number.isFinite(score[metric.key]));
    const average = sessions.length
      ? sessions.reduce((sum, score) => sum + score[metric.key], 0) / sessions.length
      : 0;

    return { ...metric, value: sessions.length ? average.toFixed(1) : "—" };
  });

  function selectForTest(num) {
    setSelectedSurah(String(num));
    setActiveTab("test");
    setConfirmation("");
  }

  function saveSession() {
    if (!selectedSurah || !allRatingsSet) return;

    const roundedOverall = Number(overall.toFixed(1));
    addScore(selectedSurah, {
      date: todayString(),
      ...ratings,
      overall: roundedOverall,
    });
    setLastRevised(selectedSurah, todayString());
    setRatings(EMPTY_RATINGS);
    setConfirmation(`Saved ${selectedSurahDetails?.name || "session"} for today.`);
  }

  return (
    <main className="diary-page">
      <header className="diary-header">
        <div className="diary-header-copy">
          <p>Memorisation Diary</p>
          <h1>Track, test, and revise Juz 30</h1>
          <div className="diary-header-progress" aria-label={`${completionPercent}% memorised`}>
            <span style={{ width: `${completionPercent}%` }} />
          </div>
          <strong>{completionPercent}% memorised</strong>
        </div>
        <div className="diary-header-actions">
          <Link to="/" className="diary-back-link">Home</Link>
          <Link to="/surahs" className="diary-back-link primary">Surah library</Link>
        </div>
      </header>

      <nav className="diary-tabs" aria-label="Diary sections">
        {["diary", "test", "overview"].map((tab) => (
          <button
            type="button"
            key={tab}
            className={activeTab === tab ? "active" : ""}
            onClick={() => {
              setActiveTab(tab);
              setConfirmation("");
            }}
          >
            {tab[0].toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </nav>

      {activeTab === "diary" && (
        <section className="diary-panel">
          <div className="diary-stats-row">
            <StatCard label="Total memorised" value={stats.memorised} />
            <StatCard label="Revised this month" value={stats.revisedThisMonth} />
            <StatCard label="Due for revision" value={stats.due} />
          </div>

          <section className="diary-recommendation">
            <div>
              <p className="diary-kicker">Revise today</p>
              <h2>Recommended sūrahs</h2>
            </div>
            {recommended.length ? (
              <div className="diary-chip-row">
                {recommended.map((surah) => (
                  <div className="diary-recommendation-chip" key={surah.id}>
                    <SurahName surah={surah} />
                    <button type="button" onClick={() => selectForTest(surah.revelationOrder)}>
                      Test now →
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="diary-empty">Mark a sūrah as memorised to start getting recommendations.</p>
            )}
          </section>

          <div className="diary-list">
            {SURAHS.map((surah) => {
              const entry = getEntry(diary, surah.revelationOrder);
              const latest = getLatestScore(surah.revelationOrder);
              const due = isDue(surah.revelationOrder);
              const statusText = entry.memorised
                ? due ? "Revision due" : "Stamp revised today"
                : "Mark memorised today";

              return (
                <article className="diary-row" key={surah.id}>
                  <div className="diary-row-title">
                    <span className="diary-surah-number">Sūrah {surah.revelationOrder}</span>
                    <SurahName surah={surah} />
                  </div>
                  <label>
                    Memorised on
                    <input
                      type="date"
                      value={entry.memorised}
                      onChange={(event) => setMemorised(surah.revelationOrder, event.target.value)}
                    />
                  </label>
                  <label>
                    Last revised
                    <input
                      type="date"
                      value={entry.lastRevised}
                      onChange={(event) => setLastRevised(surah.revelationOrder, event.target.value)}
                    />
                  </label>
                  <button
                    type="button"
                    className={`diary-status-button ${due ? "warning" : ""}`}
                    onClick={() => stampToday(
                      surah.revelationOrder,
                      entry.memorised ? "lastRevised" : "memorised",
                    )}
                  >
                    {statusText}
                  </button>
                  {latest ? (
                    <span className={`diary-score-badge ${getOverallClass(latest.overall)}`}>
                      ★ {formatOverall(latest.overall)}
                    </span>
                  ) : (
                    <span className="diary-score-badge neutral">No score</span>
                  )}
                </article>
              );
            })}
          </div>
        </section>
      )}

      {activeTab === "test" && (
        <section className="diary-panel diary-test-panel">
          <label className="diary-select-label">
            Choose a memorised sūrah
            <select
              value={selectedSurah}
              onChange={(event) => {
                setSelectedSurah(event.target.value);
                setConfirmation("");
              }}
            >
              <option value="">Select a sūrah</option>
              {memorisedSurahs.map((surah) => (
                <option key={surah.id} value={surah.revelationOrder}>
                  {surah.revelationOrder}. {surah.name}
                </option>
              ))}
            </select>
          </label>

          {!memorisedSurahs.length && (
            <p className="diary-empty">Mark a sūrah as memorised in the Diary tab before testing.</p>
          )}

          {selectedSurahDetails && (
            <>
              <section className="diary-assessment-card">
                <div className="diary-card-heading">
                  <SurahName surah={selectedSurahDetails} />
                  <span>Sūrah {selectedSurahDetails.revelationOrder}</span>
                </div>

                {METRICS.map((metric) => (
                  <div className="diary-metric" key={metric.key}>
                    <div>
                      <h3>{metric.label}</h3>
                      <p>{metric.prompt}</p>
                    </div>
                    <StarRating
                      label={metric.label}
                      value={ratings[metric.key]}
                      onChange={(value) => setRatings((current) => ({ ...current, [metric.key]: value }))}
                    />
                  </div>
                ))}

                <div className={`diary-overall-score ${getOverallClass(overall)}`}>
                  <span>Overall</span>
                  <strong>{allRatingsSet ? formatOverall(Number(overall.toFixed(1))) : "—"}</strong>
                </div>

                <button
                  type="button"
                  className="diary-save-button"
                  onClick={saveSession}
                  disabled={!allRatingsSet}
                >
                  Save session
                </button>
                {confirmation && <p className="diary-confirmation">{confirmation}</p>}
              </section>

              <section className="diary-history">
                <div className="diary-history-heading">
                  <h2>Score history</h2>
                  <span>Trend {latestTrend(scoreHistory)}</span>
                </div>
                {scoreHistory.length ? (
                  <div className="diary-table-wrap">
                    <table>
                      <thead>
                        <tr>
                          <th>Date</th>
                          <th>Fluency</th>
                          <th>Āyah order</th>
                          <th>Tajwīd</th>
                          <th>Meaning</th>
                          <th>Overall</th>
                        </tr>
                      </thead>
                      <tbody>
                        {scoreHistory.slice(-5).reverse().map((score, index) => (
                          <tr key={`${score.date}-${index}`}>
                            <td>{score.date}</td>
                            <td>{score.fluency}</td>
                            <td>{score.ayahOrder}</td>
                            <td>{score.tajweed}</td>
                            <td>{score.meaning || "—"}</td>
                            <td>{formatOverall(score.overall)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <p className="diary-empty">No saved sessions yet.</p>
                )}
              </section>
            </>
          )}
        </section>
      )}

      {activeTab === "overview" && (
        <section className="diary-panel">
          <section className="diary-overview-section">
            <h2>Due for revision</h2>
            {dueSurahs.length ? (
              <div className="diary-chip-row">
                {dueSurahs.map((surah) => {
                  const entry = getEntry(diary, surah.revelationOrder);
                  const days = daysSince(entry.lastRevised || entry.memorised);

                  return (
                    <span className="diary-due-chip" key={surah.id}>
                      {surah.name} · {Number.isFinite(days) ? `${days} days` : "never revised"}
                    </span>
                  );
                })}
              </div>
            ) : (
              <p className="diary-empty">No sūrahs due — well done!</p>
            )}
          </section>

          <section className="diary-overview-section">
            <div className="diary-section-heading">
              <h2>Progress grid</h2>
              <div className="diary-legend">
                <span><i className="strong" /> Strong</span>
                <span><i className="needs-work" /> Needs work</span>
                <span><i className="in-progress" /> In progress</span>
                <span><i className="not-started" /> Not started</span>
              </div>
            </div>
            <div className="diary-progress-grid">
              {SURAHS.map((surah) => {
                const entry = getEntry(diary, surah.revelationOrder);
                const latest = getLatestScore(surah.revelationOrder);
                let status = "not-started";

                if (entry.memorised) {
                  status = latest?.overall >= 4 ? "strong" : "needs-work";
                } else if (entry.lastRevised) {
                  status = "in-progress";
                }

                return (
                  <div className={`diary-progress-box ${status}`} key={surah.id} title={surah.name}>
                    <span>{surah.revelationOrder}</span>
                    {latest && <strong>{formatOverall(latest.overall)}</strong>}
                  </div>
                );
              })}
            </div>
          </section>

          <section className="diary-overview-section">
            <h2>Metrics summary</h2>
            {scoredSessions.length ? (
              <div className="diary-metric-summary">
                {averages.map((metric) => (
                  <StatCard key={metric.key} label={`Average ${metric.label.toLowerCase()}`} value={metric.value} />
                ))}
              </div>
            ) : (
              <p className="diary-empty">Save a test session to see metric averages.</p>
            )}
          </section>
        </section>
      )}
    </main>
  );
}

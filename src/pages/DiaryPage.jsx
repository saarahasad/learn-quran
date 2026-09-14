import { useMemo, useState } from "react";
import CourseLayout from "../components/CourseLayout.jsx";
import RecordingHistoryPanel from "../components/RecordingHistoryPanel.jsx";
import { DIARY_ITEMS, DIARY_SCOPE } from "../data/diarySurahs.js";
import { daysSince, todayString, useDiaryStore } from "../hooks/useDiaryStore.js";
import { useRecordingHistory } from "../hooks/useRecordingHistory.js";
import "./DiaryPage.css";

const ITEMS = DIARY_ITEMS;
const FATIHAH_ITEM = ITEMS.find((item) => item.kind === "surah");
const BAQARAH_PAGES = ITEMS.filter((item) => item.kind === "page");

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

function getEntry(diary, id) {
  return diary[String(id)] || { memorised: "", lastRevised: "", scores: [] };
}

function getOverallClass(score) {
  if (!score) return "neutral";
  if (score <= 2) return "low";
  if (score < 4) return "medium";
  return "high";
}

function getItem(id) {
  return ITEMS.find((item) => item.id === String(id)) ?? null;
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

function DiaryItemName({ item }) {
  return (
    <div className="diary-surah-name">
      <span className="diary-surah-ar" dir="rtl">{item.nameAr}</span>
      <span>{item.label}</span>
      <span className="diary-item-detail">{item.detail}</span>
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

function DiaryItemRow({
  item,
  diary,
  setMemorised,
  setLastRevised,
  stampToday,
  isDue,
  getLatestScore,
}) {
  const entry = getEntry(diary, item.id);
  const latest = getLatestScore(item.id);
  const due = isDue(item.id);
  const statusText = entry.memorised
    ? due ? "Revision due" : "Stamp revised today"
    : "Mark memorised today";

  return (
    <article className={`diary-row${item.kind === "page" ? " diary-row--page" : ""}`}>
      <div className="diary-row-title">
        <span className="diary-surah-number">
          {item.kind === "page" ? `Page ${item.page}` : "Sūrah 1"}
        </span>
        <DiaryItemName item={item} />
        {item.headline && (
          <span className="diary-page-headline">{item.headline}</span>
        )}
      </div>
      <label>
        Memorised on
        <input
          type="date"
          value={entry.memorised}
          onChange={(event) => setMemorised(item.id, event.target.value)}
        />
      </label>
      <label>
        Last revised
        <input
          type="date"
          value={entry.lastRevised}
          onChange={(event) => setLastRevised(item.id, event.target.value)}
        />
      </label>
      <button
        type="button"
        className={`diary-status-button ${due ? "warning" : ""}`}
        onClick={() => stampToday(item.id, entry.memorised ? "lastRevised" : "memorised")}
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
  } = useDiaryStore();
  const { stats: recordingStats } = useRecordingHistory();
  const [activeTab, setActiveTab] = useState("diary");
  const [selectedItemId, setSelectedItemId] = useState("");
  const [ratings, setRatings] = useState(EMPTY_RATINGS);
  const [confirmation, setConfirmation] = useState("");

  const memorisedItems = useMemo(
    () => ITEMS.filter((item) => getEntry(diary, item.id).memorised),
    [diary],
  );

  const recommended = useMemo(
    () => ITEMS
      .map((item) => ({
        item,
        entry: getEntry(diary, item.id),
        due: isDue(item.id),
        latest: getLatestScore(item.id),
      }))
      .filter(({ entry }) => entry.memorised)
      .sort((a, b) => (
        Number(b.due) - Number(a.due)
        || (a.latest?.overall ?? Number.POSITIVE_INFINITY) - (b.latest?.overall ?? Number.POSITIVE_INFINITY)
        || daysSince(a.entry.lastRevised || a.entry.memorised) * -1
        || a.item.page - b.item.page
      ))
      .slice(0, 3)
      .map(({ item }) => item),
    [diary, getLatestScore, isDue],
  );

  const stats = useMemo(() => {
    const month = todayString().slice(0, 7);

    return {
      memorised: memorisedItems.length,
      revisedThisMonth: ITEMS.filter((item) => (
        getEntry(diary, item.id).lastRevised?.startsWith(month)
      )).length,
      due: ITEMS.filter((item) => isDue(item.id)).length,
    };
  }, [diary, isDue, memorisedItems.length]);

  const selectedEntry = selectedItemId ? getEntry(diary, selectedItemId) : null;
  const selectedItem = selectedItemId ? getItem(selectedItemId) : null;
  const scoreHistory = selectedEntry?.scores || [];
  const allRatingsSet = METRICS.every((metric) => ratings[metric.key] > 0);
  const overall = allRatingsSet
    ? METRICS.reduce((sum, metric) => sum + ratings[metric.key], 0) / METRICS.length
    : 0;

  const dueItems = ITEMS.filter((item) => isDue(item.id));
  const scoredSessions = memorisedItems.flatMap((item) => getEntry(diary, item.id).scores || []);
  const completionPercent = Math.round((stats.memorised / ITEMS.length) * 100);

  const averages = METRICS.map((metric) => {
    const sessions = scoredSessions.filter((score) => Number.isFinite(score[metric.key]));
    const average = sessions.length
      ? sessions.reduce((sum, score) => sum + score[metric.key], 0) / sessions.length
      : 0;

    return { ...metric, value: sessions.length ? average.toFixed(1) : "—" };
  });

  function selectForTest(id) {
    setSelectedItemId(String(id));
    setActiveTab("test");
    setConfirmation("");
  }

  function saveSession() {
    if (!selectedItemId || !allRatingsSet) return;

    const roundedOverall = Number(overall.toFixed(1));
    addScore(selectedItemId, {
      date: todayString(),
      ...ratings,
      overall: roundedOverall,
    });
    setLastRevised(selectedItemId, todayString());
    setRatings(EMPTY_RATINGS);
    setConfirmation(`Saved ${selectedItem?.detail || "session"} for today.`);
  }

  return (
    <CourseLayout
      activeTab="progress"
      banner={{
        code: "QURAN 301 · Juz 1 Progress",
        title: "Juz 1 Memorisation",
        subtitle: `${DIARY_SCOPE.range} — track by mushaf page (21 pages in Juz 1).`,
        meta: [
          { label: "Pages memorised", value: `${stats.memorised}/${ITEMS.length}` },
          { label: "Due for review", value: stats.due },
          { label: "Recordings", value: recordingStats.total },
        ],
      }}
      breadcrumbs={[
        { label: "Learn Islam", to: "/" },
        { label: "Juz 1 Progress" },
      ]}
    >
      <div className="diary-progress-bar-wrap">
        <div className="diary-header-progress" aria-label={`${completionPercent}% memorised`}>
          <span style={{ width: `${completionPercent}%` }} />
        </div>
        <span className="diary-progress-label">
          {completionPercent}% of Juz 1 memorised ({stats.memorised} of {ITEMS.length} pages)
        </span>
      </div>

      <nav className="diary-tabs" aria-label="Progress sections">
        {["diary", "recordings", "test", "overview"].map((tab) => (
          <button
            type="button"
            key={tab}
            className={activeTab === tab ? "active" : ""}
            onClick={() => {
              setActiveTab(tab);
              setConfirmation("");
            }}
          >
            {tab === "recordings" ? "Recordings" : tab[0].toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </nav>

      {activeTab === "diary" && (
        <section className="diary-panel">
          <div className="diary-stats-row">
            <StatCard label="Pages memorised" value={`${stats.memorised}/${ITEMS.length}`} />
            <StatCard label="Revised this month" value={stats.revisedThisMonth} />
            <StatCard label="Due for revision" value={stats.due} />
          </div>

          <section className="diary-recommendation">
            <div>
              <p className="diary-kicker">Revise today</p>
              <h2>Recommended pages</h2>
            </div>
            {recommended.length ? (
              <div className="diary-chip-row">
                {recommended.map((item) => (
                  <div className="diary-recommendation-chip" key={item.id}>
                    <DiaryItemName item={item} />
                    <button type="button" onClick={() => selectForTest(item.id)}>
                      Test now →
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="diary-empty">Mark a page as memorised to start getting recommendations.</p>
            )}
          </section>

          {FATIHAH_ITEM && (
            <section className="diary-section-block">
              <h2 className="diary-section-title">Al-Fātiḥah</h2>
              <div className="diary-list">
                <DiaryItemRow
                  item={FATIHAH_ITEM}
                  diary={diary}
                  setMemorised={setMemorised}
                  setLastRevised={setLastRevised}
                  stampToday={stampToday}
                  isDue={isDue}
                  getLatestScore={getLatestScore}
                />
              </div>
            </section>
          )}

          <section className="diary-section-block">
            <h2 className="diary-section-title">Al-Baqarah — mushaf pages</h2>
            <p className="diary-section-note">
              Juz 1 covers pages 2–21 (āyāt 1–141). Mark each page as you memorise it.
            </p>
            <div className="diary-list diary-list--pages">
              {BAQARAH_PAGES.map((item) => (
                <DiaryItemRow
                  key={item.id}
                  item={item}
                  diary={diary}
                  setMemorised={setMemorised}
                  setLastRevised={setLastRevised}
                  stampToday={stampToday}
                  isDue={isDue}
                  getLatestScore={getLatestScore}
                />
              ))}
            </div>
          </section>
        </section>
      )}

      {activeTab === "recordings" && (
        <section className="diary-panel">
          <RecordingHistoryPanel />
        </section>
      )}

      {activeTab === "test" && (
        <section className="diary-panel diary-test-panel">
          <label className="diary-select-label">
            Choose a memorised page
            <select
              value={selectedItemId}
              onChange={(event) => {
                setSelectedItemId(event.target.value);
                setConfirmation("");
              }}
            >
              <option value="">Select a page</option>
              {memorisedItems.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.detail}
                </option>
              ))}
            </select>
          </label>

          {!memorisedItems.length && (
            <p className="diary-empty">Mark a page as memorised in the Diary tab before testing.</p>
          )}

          {selectedItem && (
            <>
              <section className="diary-assessment-card">
                <div className="diary-card-heading">
                  <DiaryItemName item={selectedItem} />
                  <span>{selectedItem.detail}</span>
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
            {dueItems.length ? (
              <div className="diary-chip-row">
                {dueItems.map((item) => {
                  const entry = getEntry(diary, item.id);
                  const days = daysSince(entry.lastRevised || entry.memorised);

                  return (
                    <span className="diary-due-chip" key={item.id}>
                      {item.detail} · {Number.isFinite(days) ? `${days} days` : "never revised"}
                    </span>
                  );
                })}
              </div>
            ) : (
              <p className="diary-empty">No pages due — well done!</p>
            )}
          </section>

          <section className="diary-overview-section">
            <div className="diary-section-heading">
              <h2>Juz 1 page grid</h2>
              <div className="diary-legend">
                <span><i className="strong" /> Strong</span>
                <span><i className="needs-work" /> Needs work</span>
                <span><i className="in-progress" /> In progress</span>
                <span><i className="not-started" /> Not started</span>
              </div>
            </div>
            <div className="diary-progress-grid diary-progress-grid--pages">
              {ITEMS.map((item) => {
                const entry = getEntry(diary, item.id);
                const latest = getLatestScore(item.id);
                let status = "not-started";

                if (entry.memorised) {
                  status = latest?.overall >= 4 ? "strong" : "needs-work";
                } else if (entry.lastRevised) {
                  status = "in-progress";
                }

                const title = item.headline
                  ? `${item.detail} — ${item.headline}`
                  : item.detail;

                return (
                  <div
                    className={`diary-progress-box ${status}`}
                    key={item.id}
                    title={title}
                  >
                    <span>{item.page}</span>
                    <small>āy {item.verseRange}</small>
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
    </CourseLayout>
  );
}

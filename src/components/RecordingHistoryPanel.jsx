import { formatDuration } from "../hooks/useHifdhRecorder.js";
import { useRecordingHistory } from "../hooks/useRecordingHistory.js";
import { formatRecordingLabel } from "../utils/recordingHistory.js";

function formatWhen(iso) {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

function MotivationMessage({ stats }) {
  if (!stats.total) {
    return (
      <p className="recording-history__motivation">
        Your first recording starts the journey. Every voice pass builds fluency.
      </p>
    );
  }

  if (stats.streakDays >= 7) {
    return (
      <p className="recording-history__motivation recording-history__motivation--hot">
        {stats.streakDays}-day streak — mā shāʾ Allāh. Consistency is the secret of hifdh.
      </p>
    );
  }

  if (stats.todayCount >= 3) {
    return (
      <p className="recording-history__motivation">
        {stats.todayCount} recordings today. You showed up — keep that momentum.
      </p>
    );
  }

  if (stats.remainingToNext > 0 && stats.remainingToNext <= 3) {
    return (
      <p className="recording-history__motivation">
        Only {stats.remainingToNext} more to reach {stats.nextMilestone} recordings.
      </p>
    );
  }

  if (stats.streakDays >= 2) {
    return (
      <p className="recording-history__motivation">
        {stats.streakDays} days in a row. Come back tomorrow to grow your streak.
      </p>
    );
  }

  return (
    <p className="recording-history__motivation">
      {stats.total} recordings logged. Each one is proof you are putting in the work.
    </p>
  );
}

export function RecordingMotivationStrip({ className = "" }) {
  const { stats } = useRecordingHistory();
  if (!stats.total) return null;

  return (
    <p className={["recording-motivation-strip", className].filter(Boolean).join(" ")}>
      <span className="recording-motivation-strip__count">{stats.total}</span>
      <span>
        recording{stats.total === 1 ? "" : "s"}
        {stats.streakDays > 1 && (
          <>
            {" "}
            · <strong>{stats.streakDays}-day streak</strong>
          </>
        )}
      </span>
    </p>
  );
}

export default function RecordingHistoryPanel({ compact = false }) {
  const { entries, stats } = useRecordingHistory();
  const recent = entries.slice(0, compact ? 8 : 30);

  return (
    <section className={`recording-history${compact ? " recording-history--compact" : ""}`}>
      <div className="recording-history__header">
        <div>
          <p className="recording-history__kicker">Voice practice</p>
          <h2 className="recording-history__title">Your recording journey</h2>
        </div>
        {!compact && stats.nextMilestone && (
          <div className="recording-history__milestone">
            <span className="recording-history__milestone-label">Next milestone</span>
            <strong>{stats.nextMilestone}</strong>
            <div className="recording-history__milestone-bar" aria-hidden="true">
              <span style={{ width: `${stats.progressToNext}%` }} />
            </div>
          </div>
        )}
      </div>

      <MotivationMessage stats={stats} />

      <div className="recording-history__stats">
        <article className="recording-history__stat">
          <strong>{stats.total}</strong>
          <span>Total recordings</span>
        </article>
        <article className="recording-history__stat">
          <strong>{stats.streakDays}</strong>
          <span>Day streak</span>
        </article>
        <article className="recording-history__stat">
          <strong>{stats.weekCount}</strong>
          <span>This week</span>
        </article>
        <article className="recording-history__stat">
          <strong>{stats.totalMinutes}</strong>
          <span>Minutes recited</span>
        </article>
      </div>

      {recent.length > 0 ? (
        <ol className="recording-history__list">
          {recent.map((entry) => (
            <li key={entry.id} className="recording-history__item">
              <div className="recording-history__item-main">
                <p className="recording-history__item-label">{formatRecordingLabel(entry)}</p>
                <p className="recording-history__item-meta">
                  {formatWhen(entry.recordedAt)}
                  {entry.durationSec > 0 && ` · ${formatDuration(entry.durationSec)}`}
                </p>
              </div>
              <div className="recording-history__item-badges">
                {entry.checked && (
                  <span
                    className={`recording-history__badge${
                      entry.passed ? " recording-history__badge--pass" : " recording-history__badge--review"
                    }`}
                  >
                    {entry.passed
                      ? entry.matchPercent != null
                        ? `${entry.matchPercent}% match`
                        : "Checked"
                      : "Review"}
                  </span>
                )}
              </div>
            </li>
          ))}
        </ol>
      ) : (
        <p className="recording-history__empty">
          Record yourself in Recite, Memorize, or Test — each session appears here.
        </p>
      )}
    </section>
  );
}

import {
  COMPLETE_COPY,
  clearPersistedSessionState,
  formatElapsedDuration,
  revisionDatesFromToday,
  summarizeSession,
} from "../../utils/hifdhSession.js";
import { toArabicNum } from "../../utils/mushafText.js";

export default function HifdhCompleteScreen({ state, completeBody, onClose, onSchedule }) {
  const summary = summarizeSession(state);
  const revision = state.revisionSchedule ?? revisionDatesFromToday();
  const scheduled = Boolean(state.revisionSchedule);

  return (
    <div className="hifdh-session__panel hifdh-session__panel--complete">
      <p className="hifdh-session__bismillah hifdh-session__complete-praise">{COMPLETE_COPY.praise}</p>

      {(completeBody ?? COMPLETE_COPY.body).map((line) => (
        <p key={line} className="hifdh-session__copy">
          {line}
        </p>
      ))}

      <div className="hifdh-session__summary">
        <p>
          {formatElapsedDuration(state.timeElapsed)} in session · {summary.ayahCount} āyāt ·{" "}
          {toArabicNum(summary.smooth)} smooth · {toArabicNum(summary.hesitated)} hesitated ·{" "}
          {toArabicNum(summary.stumbled)} stumbled
        </p>
      </div>

      <p className="hifdh-session__revision">
        Your next revision: tomorrow · in 3 days · in 7 days
      </p>
      {scheduled && (
        <p className="hifdh-session__revision-dates">
          {revision.tomorrow} · {revision.day3} · {revision.day7}
        </p>
      )}

      <div className="hifdh-session__complete-actions">
        {!scheduled && (
          <button type="button" className="hifdh-session__cta" onClick={onSchedule}>
            {COMPLETE_COPY.scheduleLabel}
          </button>
        )}
        <button
          type="button"
          className="hifdh-session__cta hifdh-session__cta--ghost"
          onClick={() => {
            clearPersistedSessionState();
            onClose?.();
          }}
        >
          {COMPLETE_COPY.closeLabel}
        </button>
      </div>
    </div>
  );
}

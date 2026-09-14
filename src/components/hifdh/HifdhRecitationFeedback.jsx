export default function HifdhRecitationFeedback({
  result,
  transcript,
  status,
  error,
  onCheck,
  isChecking,
  checkDisabled = false,
  checkDisabledReason = "",
}) {
  if (error) {
    return (
      <div className="hifdh-recitation-feedback hifdh-recitation-feedback--error">
        <p>{error}</p>
        {onCheck && (
          <button type="button" className="hifdh-session__cta hifdh-session__cta--ghost" onClick={onCheck}>
            Try again
          </button>
        )}
      </div>
    );
  }

  if (status === "idle" && (onCheck || checkDisabled)) {
    return (
      <div className="hifdh-recitation-feedback">
        {onCheck && (
          <button type="button" className="hifdh-session__cta" onClick={onCheck} disabled={isChecking || checkDisabled}>
            {isChecking ? "Listening…" : "Check my recitation"}
          </button>
        )}
        <p className="hifdh-recitation-feedback__hint">
          {checkDisabled
            ? checkDisabledReason
            : "Checks your words against the mushaf. Groq/OpenAI also enable basic tajwīd notes."}
        </p>
      </div>
    );
  }

  if (isChecking) {
    return (
      <div className="hifdh-recitation-feedback hifdh-recitation-feedback--loading">
        <p>Listening to your recitation…</p>
      </div>
    );
  }

  if (!result) return null;

  const { steps, matched, missed, wrong, extra, expectedCount, passed, tajweed } = result;
  const percent = expectedCount ? Math.round((matched / expectedCount) * 100) : 0;
  const tajweedScore = tajweed?.summary?.tajweedScore;
  const tajweedIssues = tajweed?.issues ?? [];

  return (
    <div className={`hifdh-recitation-feedback${passed && tajweedIssues.length === 0 ? " hifdh-recitation-feedback--pass" : ""}`}>
      <div className="hifdh-recitation-feedback__summary">
        <p className="hifdh-recitation-feedback__headline">
          {passed ? "Words match the mushaf." : `${percent}% of words matched`}
          {tajweedScore != null && ` · Tajwīd ${tajweedScore}%`}
        </p>
        <p className="hifdh-recitation-feedback__stats">
          {matched} correct
          {missed > 0 && ` · ${missed} missed`}
          {wrong > 0 && ` · ${wrong} wrong`}
          {extra > 0 && ` · ${extra} extra`}
          {tajweedIssues.length > 0 && ` · ${tajweedIssues.length} tajwīd notes`}
        </p>
      </div>

      {transcript && (
        <p className="hifdh-recitation-feedback__transcript" dir="rtl" lang="ar">
          <span className="hifdh-recitation-feedback__label">Heard:</span> {transcript}
        </p>
      )}

      <div className="hifdh-recitation-feedback__words" dir="rtl" lang="ar">
        {steps.map((step, index) => {
          if (step.status === "extra") {
            return (
              <span
                key={`extra-${index}`}
                className="hifdh-recitation-feedback__word hifdh-recitation-feedback__word--extra"
                title={`Extra: ${step.spoken}`}
              >
                {step.spoken}
              </span>
            );
          }

          const wordReport = tajweed?.wordReports?.find((r) => r.word === step.expected?.ar);
          const hasTajweedNote = wordReport?.notes?.length > 0;
          const title =
            step.status === "match"
              ? hasTajweedNote
                ? wordReport.notes.join(" · ")
                : "Correct"
              : step.status === "missed"
                ? "Missed"
                : `Expected ${step.expected?.ar}, heard ${step.spoken}`;

          return (
            <span
              key={`${step.expected?.ar}-${index}`}
              className={[
                "hifdh-recitation-feedback__word",
                `hifdh-recitation-feedback__word--${step.status}`,
                hasTajweedNote && "hifdh-recitation-feedback__word--tajweed",
              ]
                .filter(Boolean)
                .join(" ")}
              title={title}
            >
              {step.expected?.ar}
            </span>
          );
        })}
      </div>

      {tajweedIssues.length > 0 && (
        <div className="hifdh-recitation-feedback__tajweed">
          <p className="hifdh-recitation-feedback__label">Tajwīd notes</p>
          <ul>
            {tajweedIssues.slice(0, 8).map((issue, index) => (
              <li
                key={`${issue.word}-${index}`}
                className={`hifdh-recitation-feedback__tajweed-item hifdh-recitation-feedback__tajweed-item--${issue.severity}`}
              >
                {issue.message}
              </li>
            ))}
          </ul>
          {tajweedIssues.length > 8 && (
            <p className="hifdh-recitation-feedback__hint">
              +{tajweedIssues.length - 8} more notes
            </p>
          )}
        </div>
      )}

      {onCheck && (
        <button type="button" className="hifdh-session__cta hifdh-session__cta--ghost" onClick={onCheck}>
          Check again
        </button>
      )}
    </div>
  );
}

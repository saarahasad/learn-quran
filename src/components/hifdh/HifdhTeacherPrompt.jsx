const TEACHER_NAME = "Your ustādh";

export default function HifdhTeacherPrompt({
  variant = "standalone",
  emphasis,
  quote,
  speech = [],
  bismillah,
  continueLabel = "Continue",
  onContinue,
}) {
  const lines = speech.filter(Boolean);

  return (
    <div
      className={[
        "hifdh-session__panel",
        "hifdh-teacher-prompt",
        `hifdh-teacher-prompt--${variant}`,
      ].join(" ")}
    >
      <header className="hifdh-teacher-prompt__header">
        <div className="hifdh-teacher-prompt__avatar" aria-hidden="true">
          <span>ع</span>
        </div>
        <div className="hifdh-teacher-prompt__identity">
          <p className="hifdh-teacher-prompt__name">{TEACHER_NAME}</p>
          <p className="hifdh-teacher-prompt__role">Speaking to you</p>
        </div>
      </header>

      <div className="hifdh-teacher-prompt__bubble">
        {emphasis && (
          <p className="hifdh-teacher-prompt__emphasis">{emphasis}</p>
        )}
        {quote && (
          <blockquote className="hifdh-teacher-prompt__quote" cite="">
            {quote}
          </blockquote>
        )}
        {lines.length > 0 && (
          <div className="hifdh-teacher-prompt__speech">
            {lines.map((line, index) => (
              <p
                key={line}
                className="hifdh-teacher-prompt__line"
                style={{ animationDelay: `${index * 140}ms` }}
              >
                {line}
              </p>
            ))}
          </div>
        )}
        {bismillah && (
          <p className="hifdh-teacher-prompt__bismillah">{bismillah}</p>
        )}
      </div>

      <button
        type="button"
        className="hifdh-teacher-prompt__reply"
        onClick={onContinue}
      >
        {continueLabel}
      </button>
    </div>
  );
}

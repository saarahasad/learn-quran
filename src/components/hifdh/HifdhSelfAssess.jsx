import { ASSESSMENT, TEST_ASSESSMENT } from "../../utils/hifdhSession.js";

const SCAFFOLD_OPTIONS = [
  { value: ASSESSMENT.SMOOTH, label: "Smooth", emoji: "🟢" },
  { value: ASSESSMENT.HESITATED, label: "Hesitated", emoji: "🟡" },
  { value: ASSESSMENT.STUMBLED, label: "Stumbled", emoji: "🔴" },
];

const TEST_OPTIONS = [
  { value: TEST_ASSESSMENT.FIRM, label: "Firm", emoji: "🟢" },
  { value: TEST_ASSESSMENT.SHAKY, label: "Shaky", emoji: "🟡" },
  { value: TEST_ASSESSMENT.NEED_MORE, label: "Need more", emoji: "🔴" },
];

export default function HifdhSelfAssess({
  variant = "scaffold",
  assessPrompt,
  onSelect,
  feedback,
}) {
  const options = variant === "test" ? TEST_OPTIONS : SCAFFOLD_OPTIONS;

  return (
    <div className="hifdh-session__assess">
      {feedback && (
        <div className="hifdh-teacher-whisper">
          <span className="hifdh-teacher-whisper__mark" aria-hidden="true">
            ع
          </span>
          <p className="hifdh-session__assess-feedback">{feedback}</p>
        </div>
      )}
      <p className="hifdh-session__assess-prompt">
        {assessPrompt ?? "Tell me honestly — how did that feel?"}
      </p>
      <div className="hifdh-session__assess-grid" role="group">
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            className={`hifdh-session__assess-btn hifdh-session__assess-btn--${option.value}`}
            onClick={() => onSelect(option.value)}
          >
            <span className="hifdh-session__assess-emoji" aria-hidden="true">
              {option.emoji}
            </span>
            <span>{option.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

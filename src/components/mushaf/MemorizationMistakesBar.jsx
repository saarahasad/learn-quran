import { toArabicNum } from "../../utils/mushafText.js";

export default function MemorizationMistakesBar({
  markMode = false,
  onMarkModeChange,
  showMistakes = false,
  onShowMistakesChange,
  spreadMistakes = [],
  totalCount = 0,
}) {
  const hasSpreadMistakes = spreadMistakes.length > 0;

  return (
    <section className="mem-mistakes-bar" aria-label="Memorization mistakes">
      <div className="mem-mistakes-bar__controls">
        <button
          type="button"
          className={`mem-mistakes-bar__toggle${markMode ? " is-active" : ""}`}
          aria-pressed={markMode}
          onClick={() => onMarkModeChange?.(!markMode)}
        >
          <span className="mem-mistakes-bar__swatch mem-mistakes-bar__swatch--mark" aria-hidden="true" />
          Mark words
        </button>

        <button
          type="button"
          className={`mem-mistakes-bar__toggle${showMistakes ? " is-active" : ""}`}
          aria-pressed={showMistakes}
          onClick={() => onShowMistakesChange?.(!showMistakes)}
        >
          <span className="mem-mistakes-bar__swatch mem-mistakes-bar__swatch--show" aria-hidden="true" />
          Show mistakes
          {totalCount > 0 && (
            <span className="mem-mistakes-bar__count">{totalCount}</span>
          )}
        </button>
      </div>

      {markMode && (
        <p className="mem-mistakes-bar__hint">
          Tap any word on the mushaf to mark where you slipped — add a one-word note to remember later.
        </p>
      )}

      {showMistakes && hasSpreadMistakes && (
        <ul className="mem-mistakes-bar__list">
          {spreadMistakes.map((entry) => (
            <li key={entry.key} className="mem-mistakes-bar__item">
              <span className="mem-mistakes-bar__item-word" dir="rtl" lang="ar">
                {entry.wordAr}
              </span>
              <span className="mem-mistakes-bar__item-ref">
                {toArabicNum(entry.ayah)}:{entry.wordNum}
              </span>
              {entry.note && (
                <span className="mem-mistakes-bar__item-note">{entry.note}</span>
              )}
            </li>
          ))}
        </ul>
      )}

      {showMistakes && !hasSpreadMistakes && (
        <p className="mem-mistakes-bar__empty">No mistakes marked on this spread yet.</p>
      )}
    </section>
  );
}

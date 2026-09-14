import { PAGE_MEMORY_MODES } from "../../utils/pageVisualMemory.js";

export default function PageVisualMemoryPanel({
  modeId,
  onModeChange,
  onShuffle,
  showAllRevealed,
  onToggleRevealAll,
  revealedCount = 0,
  hiddenCount = 0,
}) {
  const activeMode = PAGE_MEMORY_MODES.find((mode) => mode.id === modeId) ?? PAGE_MEMORY_MODES[0];
  const isActive = activeMode.id !== "full";

  return (
    <section className="page-visual-memory" aria-label="Page visual memory">
      <div className="page-visual-memory__head">
        <div>
          <p className="page-visual-memory__kicker">Visual memory</p>
          <p className="page-visual-memory__desc">{activeMode.description}</p>
        </div>
        {isActive && (
          <div className="page-visual-memory__actions">
            <button
              type="button"
              className="page-visual-memory__action"
              onClick={onShuffle}
              title="New random pattern"
            >
              Shuffle
            </button>
            <button
              type="button"
              className={`page-visual-memory__action${showAllRevealed ? " is-active" : ""}`}
              onClick={onToggleRevealAll}
              aria-pressed={showAllRevealed}
            >
              {showAllRevealed ? "Hide again" : "Show all"}
            </button>
          </div>
        )}
      </div>

      <div className="page-visual-memory__modes" role="group" aria-label="Memory difficulty">
        {PAGE_MEMORY_MODES.map((mode, index) => {
          const isSelected = mode.id === modeId;
          return (
            <button
              key={mode.id}
              type="button"
              className={`page-visual-memory__mode${isSelected ? " is-active" : ""}`}
              aria-pressed={isSelected}
              onClick={() => onModeChange(mode.id)}
            >
              <span className="page-visual-memory__mode-num">{index + 1}</span>
              <span className="page-visual-memory__mode-label">{mode.label}</span>
              <span className="page-visual-memory__mode-short">{mode.short}</span>
            </button>
          );
        })}
      </div>

      {isActive && !showAllRevealed && hiddenCount > 0 && (
        <p className="page-visual-memory__hint">
          {revealedCount > 0
            ? `${revealedCount} peeked · ${hiddenCount - revealedCount} still hidden — tap a blank to reveal one word`
            : `${hiddenCount} hidden — tap any blank to peek, or recite from memory first`}
        </p>
      )}
    </section>
  );
}

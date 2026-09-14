import { memo } from "react";
import { useMushafWordBoxCalibrator } from "./MushafWordBoxCalibratorContext.jsx";

function MushafWordBoxCalibratorPanel() {
  const {
    active,
    page,
    words,
    sortedWords,
    selectedLocation,
    selectedWord,
    dirty,
    savedCount,
    status,
    setSelectedLocation,
    savePage,
    resetPage,
    exportAll,
    applyPatternToRest,
    onDone,
  } = useMushafWordBoxCalibrator();

  if (!active) return null;

  return (
    <div className="mushaf-box-calibrator__panel">
      <div className="mushaf-box-calibrator__header">
        <div>
          <strong>Word box calibrator</strong>
          <span className="mushaf-box-calibrator__meta">
            Page {page} · {words.length} words
            {savedCount > 0 ? ` · ${savedCount} saved` : ""}
          </span>
        </div>
        <div className="mushaf-box-calibrator__actions">
          <button
            type="button"
            className="mushaf-box-calibrator__btn mushaf-box-calibrator__btn--primary"
            onClick={savePage}
            disabled={!words.length}
          >
            Save page
          </button>
          <button type="button" className="mushaf-box-calibrator__btn" onClick={resetPage}>
            Reset page
          </button>
          <button type="button" className="mushaf-box-calibrator__btn" onClick={exportAll}>
            Export all
          </button>
          <button
            type="button"
            className="mushaf-box-calibrator__btn"
            onClick={applyPatternToRest}
          >
            Apply 6–12 → 13–16
          </button>
          {onDone && (
            <button
              type="button"
              className="mushaf-box-calibrator__btn mushaf-box-calibrator__btn--done"
              onClick={onDone}
            >
              Done
            </button>
          )}
        </div>
      </div>

      <p className="mushaf-box-calibrator__help">
        Drag the box center to move left/right. Drag the left or right edge to widen or narrow.
        Calibrate ayahs 6–12, then click <strong>Apply 6–12 → 13–16</strong> to copy your
        spacing pattern to the rest. Arrow keys move; [ and ] change width (Shift = 5px).
      </p>

      {status && <p className="mushaf-box-calibrator__status">{status}</p>}
      {dirty && !status && (
        <p className="mushaf-box-calibrator__status mushaf-box-calibrator__status--dirty">
          Unsaved changes on this page.
        </p>
      )}

      {selectedWord && (
        <div className="mushaf-box-calibrator__selection">
          <span className="mushaf-box-calibrator__selection-ar" dir="rtl">
            {selectedWord.textUthmani}
          </span>
          <span>
            Ayah {selectedWord.ayah}, word {selectedWord.wordNum}
          </span>
          <span className="mushaf-box-calibrator__selection-coords">
            x {Math.round(selectedWord.bbox.x)} · w {Math.round(selectedWord.bbox.w)} · h{" "}
            {Math.round(selectedWord.bbox.h)} (height fixed)
          </span>
        </div>
      )}

      <div className="mushaf-box-calibrator__word-list" role="listbox" aria-label="Words on page">
        {sortedWords.map((word) => (
          <button
            key={word.location}
            type="button"
            role="option"
            aria-selected={word.location === selectedLocation}
            className={[
              "mushaf-box-calibrator__word-chip",
              word.location === selectedLocation && "is-selected",
              word.coordSource === "calibrated" && "is-calibrated",
            ]
              .filter(Boolean)
              .join(" ")}
            onClick={() => setSelectedLocation(word.location)}
          >
            <span className="mushaf-box-calibrator__word-chip-ar" dir="rtl">
              {word.textUthmani}
            </span>
            <span className="mushaf-box-calibrator__word-chip-meta">
              {word.ayah}:{word.wordNum}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default memo(MushafWordBoxCalibratorPanel);

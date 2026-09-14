import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { normalizeMistakeNote } from "../../utils/memorizationMistakes.js";

export default function MemorizationMistakePopover({
  word,
  existingNote = "",
  onSave,
  onRemove,
  onClose,
}) {
  const panelRef = useRef(null);
  const inputRef = useRef(null);
  const [note, setNote] = useState(existingNote);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") onClose();
    }

    function onPointerDown(event) {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        onClose();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [onClose]);

  function handleSave() {
    onSave(normalizeMistakeNote(note));
  }

  return createPortal(
    <div className="mem-mistake-popover-backdrop" role="presentation">
      <article
        ref={panelRef}
        className="mem-mistake-popover"
        aria-label="Mark memorization mistake"
      >
        <p className="mem-mistake-popover__label">Mark mistake</p>
        <p className="mem-mistake-popover__word" dir="rtl" lang="ar">
          {word.wordAr}
        </p>
        <p className="mem-mistake-popover__ref">
          Āyah {word.ayah} · word {word.wordNum}
        </p>

        <label className="mem-mistake-popover__field">
          <span>One-word note</span>
          <input
            ref={inputRef}
            type="text"
            value={note}
            maxLength={32}
            placeholder="e.g. skipped, tajwīd"
            onChange={(event) => setNote(event.target.value.replace(/\s+/g, " ").trimStart())}
            onKeyDown={(event) => {
              if (event.key === "Enter") handleSave();
            }}
          />
        </label>

        <div className="mem-mistake-popover__actions">
          <button type="button" className="mem-mistake-popover__btn mem-mistake-popover__btn--primary" onClick={handleSave}>
            Save
          </button>
          {onRemove && (
            <button type="button" className="mem-mistake-popover__btn" onClick={onRemove}>
              Remove mark
            </button>
          )}
          <button type="button" className="mem-mistake-popover__btn mem-mistake-popover__btn--ghost" onClick={onClose}>
            Cancel
          </button>
        </div>
      </article>
    </div>,
    document.body,
  );
}

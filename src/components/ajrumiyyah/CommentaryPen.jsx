import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  applyPenMarks,
  loadPenMarks,
  PEN_CLEAR,
  PEN_COLORS,
  savePenMarks,
  selectionOffsets,
  upsertMark,
} from "../../utils/commentaryPen.js";
import "../../styles/commentary-pen.css";

function Popover({ pos, onApply, onClearSection, hasMarks }) {
  if (!pos) return null;
  return createPortal(
    <div
      className="ajr-pen-popover"
      style={{ top: pos.top, left: pos.left }}
      role="toolbar"
      aria-label="Color selected text"
      onMouseDown={(event) => event.preventDefault()}
    >
      {PEN_COLORS.map((pen) => (
        <button
          key={pen.id}
          type="button"
          className={`ajr-pen-pop ajr-pen-pop--${pen.id}`}
          title={pen.label}
          onClick={() => onApply(pen.id)}
        >
          <span className="ajr-pen-pop__dot" />
          <span className="ajr-pen-pop__name">{pen.short}</span>
        </button>
      ))}
      <button
        type="button"
        className="ajr-pen-pop ajr-pen-pop--erase"
        title="Erase ink"
        onClick={() => onApply(PEN_CLEAR)}
      >
        <span className="ajr-pen-pop__dot" />
        <span className="ajr-pen-pop__name">Erase</span>
      </button>
      {hasMarks ? (
        <button
          type="button"
          className="ajr-pen-pop ajr-pen-pop--wipe"
          title="Clear all ink on this passage"
          onClick={onClearSection}
        >
          Clear passage
        </button>
      ) : null}
    </div>,
    document.body,
  );
}

export default function CommentaryPen({
  html,
  storageKey,
  className = "",
  dir,
}) {
  const rootRef = useRef(null);
  const [marks, setMarks] = useState(() => loadPenMarks(storageKey, html));
  const [popover, setPopover] = useState(null);

  useEffect(() => {
    setMarks(loadPenMarks(storageKey, html));
    setPopover(null);
  }, [storageKey, html]);

  useEffect(() => {
    savePenMarks(storageKey, html, marks);
  }, [storageKey, html, marks]);

  useLayoutEffect(() => {
    applyPenMarks(rootRef.current, html, marks);
  }, [html, marks]);

  const hidePopover = useCallback(() => setPopover(null), []);

  const applyColor = useCallback(
    (color, offsets) => {
      const root = rootRef.current;
      const range = offsets || selectionOffsets(root);
      if (!range) return;
      setMarks((current) => upsertMark(current, { ...range, color }));
      window.getSelection()?.removeAllRanges();
      hidePopover();
    },
    [hidePopover],
  );

  const showPopoverForSelection = useCallback(() => {
    const root = rootRef.current;
    const range = selectionOffsets(root);
    if (!range) {
      hidePopover();
      return false;
    }
    const sel = window.getSelection();
    const rect = sel.getRangeAt(0).getBoundingClientRect();
    const width = 288;
    const left = Math.min(
      Math.max(12, rect.left + rect.width / 2 - width / 2),
      window.innerWidth - width - 12,
    );
    const top = Math.max(12, rect.top - 56);
    setPopover({ top, left });
    return true;
  }, [hidePopover]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const onPointerUp = () => {
      window.requestAnimationFrame(() => {
        if (selectionOffsets(root)) showPopoverForSelection();
        else hidePopover();
      });
    };

    const onClick = (event) => {
      if (event.target.closest?.("button, a")) return;
      const live = window.getSelection();
      if (live && !live.isCollapsed) return;
      const mark = event.target.closest?.("[data-ajr-pen]");
      if (!mark || !root.contains(mark)) return;
      const range = document.createRange();
      range.selectNodeContents(mark);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
      showPopoverForSelection();
    };

    root.addEventListener("mouseup", onPointerUp);
    root.addEventListener("touchend", onPointerUp);
    root.addEventListener("click", onClick);
    return () => {
      root.removeEventListener("mouseup", onPointerUp);
      root.removeEventListener("touchend", onPointerUp);
      root.removeEventListener("click", onClick);
    };
  }, [hidePopover, showPopoverForSelection]);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") hidePopover();
    };
    const onScroll = () => hidePopover();
    window.addEventListener("keydown", onKey);
    window.addEventListener("scroll", onScroll, true);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("scroll", onScroll, true);
    };
  }, [hidePopover]);

  return (
    <>
      <div
        ref={rootRef}
        data-ajr-pen-root=""
        className={`ajr-pen-root${className ? ` ${className}` : ""}`}
        dir={dir}
      />
      <Popover
        pos={popover}
        hasMarks={marks.length > 0}
        onApply={applyColor}
        onClearSection={() => {
          setMarks([]);
          hidePopover();
        }}
      />
    </>
  );
}

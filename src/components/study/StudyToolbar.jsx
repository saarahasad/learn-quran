import { useCallback } from "react";
import "../../styles/study-toolbar.css";

/**
 * One sticky toolbar for a study page, laid out like a document editor's:
 * title on the left, then groups of same-sized buttons separated by dividers.
 * `onSlot` receives a DOM node that child components (the mushaf reader) can
 * portal their own groups into, so every control lives on this one bar.
 */
export default function StudyToolbar({ title, titleAr, onSlots, children }) {
  // Two slots the mushaf reader portals into: row 1 (page + view), row 2 (mistakes).
  // Stable ref callbacks: a new function each render would detach/re-attach and loop.
  const setTop = useCallback(
    (node) => onSlots?.((cur) => (cur?.top === node ? cur : { ...cur, top: node })),
    [onSlots],
  );
  const setBottom = useCallback(
    (node) => onSlots?.((cur) => (cur?.bottom === node ? cur : { ...cur, bottom: node })),
    [onSlots],
  );
  return (
    <div className="study-toolbar" role="toolbar" aria-label="Study tools">
      <div className="study-toolbar__row study-toolbar__row--top">
        <div className="study-toolbar__title">
          {titleAr && (
            <span className="study-toolbar__title-ar" dir="rtl" lang="ar">
              {titleAr}
            </span>
          )}
          {title && <span className="study-toolbar__title-en">{title}</span>}
        </div>
        <div className="study-toolbar__scroll" ref={setTop} />
      </div>
      <div className="study-toolbar__row study-toolbar__row--bottom">
        <div className="study-toolbar__scroll">
          <div className="study-toolbar__slot" ref={setBottom} />
          {children}
        </div>
      </div>
    </div>
  );
}

export function ToolbarGroup({ label, children }) {
  return (
    <div className="study-toolbar__group" role="group" aria-label={label}>
      {children}
    </div>
  );
}

export function ToolbarButton({ icon, iconEnd, label, active = false, toggle = false, count, ...props }) {
  return (
    <button
      type="button"
      className={`study-toolbar__btn${active ? " is-active" : ""}`}
      aria-pressed={toggle ? active : undefined}
      {...props}
    >
      {icon && (
        <span className="study-toolbar__icon" aria-hidden>
          {icon}
        </span>
      )}
      {label && <span className="study-toolbar__label">{label}</span>}
      {iconEnd && (
        <span className="study-toolbar__icon" aria-hidden>
          {iconEnd}
        </span>
      )}
      {count > 0 && <span className="study-toolbar__count">{count}</span>}
    </button>
  );
}

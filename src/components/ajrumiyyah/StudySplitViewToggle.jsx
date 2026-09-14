import { useEffect, useState } from "react";

const STORAGE_KEY = "ajr_study_split_view_v1";

const VIEWS = [
  { id: "comm", label: "Commentary" },
  { id: "split", label: "Split" },
  { id: "expl", label: "Explanation" },
  { id: "workbook", label: "Workbook" },
];

export function useStudySplitView() {
  const [view, setView] = useState(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === "comm" || saved === "expl" || saved === "split" || saved === "workbook") {
        return saved;
      }
    } catch {
      /* ignore */
    }
    return "split";
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, view);
    } catch {
      /* ignore */
    }
  }, [view]);

  return [view, setView];
}

export function splitPaneVisibility(view, hasComm, hasExpl, hasWorkbook = false) {
  if (view === "workbook") {
    if (hasWorkbook) {
      return { showComm: false, showExpl: false, isDual: false, showWorkbook: true };
    }
    view = "split";
  }
  const showComm = Boolean(hasComm && (view !== "expl" || !hasExpl));
  const showExpl = Boolean(hasExpl && (view !== "comm" || !hasComm));
  return {
    showComm,
    showExpl,
    isDual: showComm && showExpl,
    showWorkbook: false,
  };
}

export default function StudySplitViewToggle({ view, onChange, hasWorkbook = false }) {
  const items = hasWorkbook ? VIEWS : VIEWS.filter((item) => item.id !== "workbook");
  const current = items.some((item) => item.id === view) ? view : "split";

  return (
    <div className="ajr-split-view" role="radiogroup" aria-label="Study layout">
      {items.map((item) => (
        <button
          key={item.id}
          type="button"
          role="radio"
          aria-checked={current === item.id}
          className={`ajr-split-view__btn ajr-split-view__btn--${item.id}${
            current === item.id ? " is-active" : ""
          }`}
          onClick={() => onChange(item.id)}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}

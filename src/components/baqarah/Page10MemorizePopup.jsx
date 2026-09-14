import { useEffect } from "react";
import { createPortal } from "react-dom";
import BaqarahPage10MemorizeQuiz from "./BaqarahPage10MemorizeQuiz.jsx";
import "../../styles/hifdh-session.css";

export default function Page10MemorizePopup({ onClose }) {
  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return createPortal(
    <div
      className="hifdh-session__backdrop page10-drill-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label="Page 10 memorisation drill"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="page10-drill-dialog">
        <header className="page10-drill-dialog__header">
          <div>
            <p className="page10-drill-dialog__kicker">Al-Baqarah · mushaf page 10</p>
            <h2 className="page10-drill-dialog__title">Last-minute drill</h2>
          </div>
          <button
            type="button"
            className="page10-drill-dialog__close"
            onClick={onClose}
            aria-label="Close drill"
          >
            ×
          </button>
        </header>
        <div className="page10-drill-dialog__body">
          <BaqarahPage10MemorizeQuiz compact anchorId={null} />
        </div>
      </div>
    </div>,
    document.body,
  );
}

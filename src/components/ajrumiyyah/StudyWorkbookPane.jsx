import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ajrumiyyahWorkbookPath,
  ajrumiyyahWorkbookPdfPath,
  workbookProgressId,
} from "../../data/tuhfat/rafaWorkbooks.js";
import { workbookInnerHtml } from "../../utils/rafaWorkbookHtml.js";

export default function StudyWorkbookPane({ wb, isDone, onToggle }) {
  const [showAnswers, setShowAnswers] = useState(false);

  if (!wb) return null;

  const progressId = workbookProgressId(wb);
  const done = Boolean(isDone?.(progressId));

  return (
    <div className="course-card ajr-section ajr-section--workbook ajr-study-workbook">
      <div className="ajr-study-workbook__bar">
        <span className="ajr-study-split__col-label ajr-study-split__col-label--workbook">
          Workbook
        </span>
        <span className="ajr-study-workbook__actions">
          <button
            type="button"
            className={`wb-answers-toggle${showAnswers ? " is-on" : ""}`}
            aria-pressed={showAnswers}
            onClick={() => setShowAnswers((current) => !current)}
          >
            {showAnswers ? "Hide answers" : "Show answers"}
          </button>
          <button
            type="button"
            className={`ajr-study-workbook__check${done ? " is-done" : ""}`}
            aria-pressed={done}
            onClick={() => onToggle?.(progressId)}
          >
            {done ? "Completed ✓" : "Mark complete"}
          </button>
          <a href={ajrumiyyahWorkbookPdfPath(wb.id)} target="_blank" rel="noreferrer">
            View PDF
          </a>
          <a href={ajrumiyyahWorkbookPdfPath(wb.id)} download>
            Download
          </a>
          <Link to={ajrumiyyahWorkbookPath(wb.id)}>Write / print</Link>
        </span>
      </div>
      <div
        className={`wb${showAnswers ? " wb--show-answers" : ""}`}
        dir="rtl"
        lang="ar"
        dangerouslySetInnerHTML={{ __html: workbookInnerHtml(wb) }}
      />
    </div>
  );
}

import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import CourseLayout from "../components/CourseLayout.jsx";
import AjrumiyyahCourseSidebar from "../components/AjrumiyyahCourseSidebar.jsx";
import {
  ALL_WORKBOOKS,
  WORKBOOK_SERIES,
  workbookById,
  workbookProgressId,
  ajrumiyyahWorkbookPath,
  ajrumiyyahWorkbookPdfPath,
} from "../data/tuhfat/rafaWorkbooks.js";
import { workbookInnerHtml } from "../utils/rafaWorkbookHtml.js";
import { ajrumiyyahStudyPath } from "../data/ajrumiyyahCourse.js";
import { useCourseProgress } from "../hooks/useCourseProgress.js";
import "../styles/ajrumiyyah-workbook.css";

function WorkbookCards({ items, isDone, onToggle }) {
  return items.map((item) => {
    const progressId = workbookProgressId(item);
    const done = isDone(progressId);
    return (
      <article className={`wb-index-card${done ? " is-done" : ""}`} key={item.id}>
        <button
          type="button"
          className={`wb-index-card__check${done ? " is-done" : ""}`}
          aria-pressed={done}
          aria-label={done ? `Mark ${item.titleEn} as not completed` : `Mark ${item.titleEn} as completed`}
          onClick={() => onToggle(progressId)}
        >
          {done ? "✓" : ""}
        </button>
        <div className="wb-index-card__body">
          <div className="wb-index-card__titles">
            <span className="wb-index-card__ar" dir="rtl" lang="ar">
              {item.num}. {item.titleAr}
            </span>
            <span className="wb-index-card__en">{item.titleEn}</span>
          </div>
          <div className="wb-index-card__actions">
            <a
              className="wb-index-card__primary"
              href={ajrumiyyahWorkbookPdfPath(item.id)}
              target="_blank"
              rel="noreferrer"
            >
              View PDF
            </a>
            <a href={ajrumiyyahWorkbookPdfPath(item.id)} download>
              Download
            </a>
            <Link to={ajrumiyyahWorkbookPath(item.id)}>Write / print</Link>
          </div>
        </div>
      </article>
    );
  });
}

export default function AjrumiyyahWorkbookPage() {
  const { workbookId } = useParams();
  const wb = workbookId ? workbookById(workbookId) : null;
  const { isDone, toggle } = useCourseProgress("ajrumiyyah");
  const [showAnswers, setShowAnswers] = useState(false);

  if (!workbookId) {
    return (
      <CourseLayout
        fullWidth
        courseId="ajrumiyyah"
        sidebar={<AjrumiyyahCourseSidebar activeTool="workbook" />}
      >
        <div className="wb-index">
          <p className="wb-kicker">كُرَّاسَةُ تَمَارِينَ</p>
          <h1 dir="rtl" lang="ar">
            كُرَّاسَاتُ الْكِتَابَةِ
          </h1>
          <p className="wb-index__en">
            Printable writing workbooks — matn, definitions, rules, examples, and
            book exercises. Each question has an English gloss. Use Show answers
            to fill the writing lines from the Tuḥfat commentary.
          </p>
          <p className="wb-index__en">
            Tick a box when you finish a booklet. The same mark appears on the
            lesson list.{" "}
            <a href="/workbooks/index.html">Open the PDF library</a> to preview
            and download every booklet in one place.
          </p>
          {WORKBOOK_SERIES.map((series) => (
            <section key={series.id} className="wb-index-group">
              <h2 className="wb-index-group__title" dir="rtl" lang="ar">
                {series.ar}
                <span className="wb-index-group__en">{series.en}</span>
              </h2>
              <WorkbookCards
                items={ALL_WORKBOOKS.filter((item) => item.series === series.id)}
                isDone={isDone}
                onToggle={toggle}
              />
            </section>
          ))}
        </div>
      </CourseLayout>
    );
  }

  if (!wb) {
    return (
      <CourseLayout
        fullWidth
        courseId="ajrumiyyah"
        sidebar={<AjrumiyyahCourseSidebar activeTool="workbook" />}
      >
        <div className="wb-index">
          <p>Workbook not found.</p>
          <Link to={ajrumiyyahWorkbookPath()}>All workbooks</Link>
        </div>
      </CourseLayout>
    );
  }

  const studyHref = ajrumiyyahStudyPath(wb.chapterId, wb.lineIdx);
  const progressId = workbookProgressId(wb);
  const done = isDone(progressId);

  return (
    <div className="wb-print">
      <div className="wb-toolbar">
        <span className="wb-toolbar__title">{wb.titleEn}</span>
        <span>
          <button
            type="button"
            className={`wb-answers-toggle${showAnswers ? " is-on" : ""}`}
            aria-pressed={showAnswers}
            onClick={() => setShowAnswers((current) => !current)}
          >
            {showAnswers ? "Hide answers" : "Show answers"}
          </button>{" "}
          <button
            type="button"
            className={`wb-toolbar__check${done ? " is-done" : ""}`}
            aria-pressed={done}
            onClick={() => toggle(progressId)}
          >
            {done ? "Completed ✓" : "Mark complete"}
          </button>{" "}
          <Link to={ajrumiyyahWorkbookPath()}>All workbooks</Link>{" "}
          <a href="/workbooks/index.html">PDF library</a>{" "}
          <Link to={studyHref}>Back to lesson</Link>{" "}
          <a href={ajrumiyyahWorkbookPdfPath(wb.id)} target="_blank" rel="noreferrer">
            View PDF
          </a>{" "}
          <a href={ajrumiyyahWorkbookPdfPath(wb.id)} download>
            Download PDF
          </a>{" "}
          <button type="button" onClick={() => window.print()}>
            Print
          </button>
        </span>
      </div>
      <main
        className={`wb${showAnswers ? " wb--show-answers" : ""}`}
        dir="rtl"
        lang="ar"
        dangerouslySetInnerHTML={{ __html: workbookInnerHtml(wb) }}
      />
    </div>
  );
}

import { useEffect, useRef } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  AJRUMIYYAH_CHAPTERS,
  AJRUMIYYAH_META,
  ajrumiyyahStudyPath,
  buildAjrumiyyahMatnLines,
  groupMatnParagraphs,
} from "../data/ajrumiyyahCourse.js";
import { arabicContentHtml } from "../utils/ajrumiyyahTuhfatRender.js";
import AjrumiyyahCourseSidebar from "../components/AjrumiyyahCourseSidebar.jsx";
import CourseLayout from "../components/CourseLayout.jsx";
import "../styles/ajrumiyyah.css";

const MATN_LINES = buildAjrumiyyahMatnLines();

function buildMatnSections() {
  const sections = [];
  let current = null;

  for (const line of MATN_LINES) {
    if (!current || current.chapterId !== line.chapterId) {
      current = {
        chapterId: line.chapterId,
        chapterNum: line.chapterNum,
        chapterAr: line.chapterAr,
        chapterEn: line.chapterEn,
        lines: [],
      };
      sections.push(current);
    }
    current.lines.push(line);
  }

  return sections.map((section) => ({
    ...section,
    paragraphs: groupMatnParagraphs(
      section.lines.map((line) => ({
        ...line,
        idx: line.lineIndex,
      })),
    ),
  }));
}

const MATN_SECTIONS = buildMatnSections();

function MatnBookPara({ chapterId, chapterEn, para, anchorId, isActive }) {
  const href = ajrumiyyahStudyPath(chapterId, para.startIdx);

  return (
    <Link
      to={href}
      className={`ajr-matn-book-para${isActive ? " ajr-matn-book-para--active" : ""}`}
      id={anchorId}
      aria-label={`Open explanation: ${chapterEn}, passage ${(para.startIdx ?? 0) + 1}`}
    >
      <div className="ajr-matn-book-para__en">{para.en}</div>
      <div
        className="ajr-matn-book-para__ar"
        dir="rtl"
        dangerouslySetInnerHTML={{
          __html: arabicContentHtml(para.ar, { inline: true, play: false }),
        }}
      />
    </Link>
  );
}

export default function AjrumiyyahMatnPage() {
  const [searchParams] = useSearchParams();
  const highlightChapter = searchParams.get("chapter");
  const highlightLine = searchParams.get("line");
  const contentRef = useRef(null);

  useEffect(() => {
    if (!highlightChapter && highlightLine == null) return;
    const lineNum = highlightLine == null ? null : Number(highlightLine);
    for (const section of MATN_SECTIONS) {
      if (section.chapterId !== highlightChapter) continue;
      const para =
        lineNum == null
          ? section.paragraphs[0]
          : section.paragraphs.find(
              (p) => lineNum >= p.startIdx && lineNum <= p.endIdx,
            );
      if (!para) break;
      const el = document.getElementById(
        `matn-para-${section.chapterId}-${para.startIdx}`,
      );
      el?.scrollIntoView({ behavior: "smooth", block: "center" });
      break;
    }
  }, [highlightChapter, highlightLine]);

  return (
    <CourseLayout
      fullWidth
      courseId="ajrumiyyah"
      sidebar={<AjrumiyyahCourseSidebar activeTool="matn" />}
    >
      <div className="ajrumiyyah-content ajr-matn-page" ref={contentRef}>
        <div className="ajr-matn-header ajr-matn-header--compact">
          <h1 className="ajr-matn-title-ar" dir="rtl">
            {AJRUMIYYAH_META.nameAr}
          </h1>
          <p className="ajr-matn-subtitle">
            Full text with translation — click any passage to open its chapter explanation.
          </p>
        </div>

        <div className="ajr-matn-book">
          {MATN_SECTIONS.map((section) => (
            <section
              key={section.chapterId}
              className="ajr-matn-book-chapter"
              aria-label={`Chapter ${section.chapterNum}: ${section.chapterEn}`}
            >
              <div className="ajr-matn-book-titles">
                <h2 className="ajr-matn-book-titles__en">
                  Chapter: {section.chapterEn}
                </h2>
                <h2 className="ajr-matn-book-titles__ar" dir="rtl">
                  {section.chapterAr}
                </h2>
              </div>

              {section.paragraphs.map((para) => {
                const lineNum = Number(highlightLine);
                const isActive =
                  section.chapterId === highlightChapter &&
                  (highlightLine == null ||
                    (lineNum >= para.startIdx && lineNum <= para.endIdx));
                return (
                  <MatnBookPara
                    key={`${section.chapterId}-${para.startIdx}`}
                    chapterId={section.chapterId}
                    chapterEn={section.chapterEn}
                    para={para}
                    anchorId={`matn-para-${section.chapterId}-${para.startIdx}`}
                    isActive={isActive}
                  />
                );
              })}
            </section>
          ))}
        </div>

        <p className="ajr-matn-footer-note">
          {AJRUMIYYAH_CHAPTERS.length} chapters · {MATN_LINES.length} lines · click any paragraph for
          commentary and Qurʾanic examples
        </p>
      </div>
    </CourseLayout>
  );
}

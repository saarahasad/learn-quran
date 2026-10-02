import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  AJRUMIYYAH_CHAPTERS,
  ajrumiyyahAlamatMindMapPath,
  ajrumiyyahIraabKeyboardPath,
  ajrumiyyahKalamMindMapPath,
  ajrumiyyahMarfuatMindMapPath,
  groupMatnParagraphs,
} from "../data/ajrumiyyahCourse.js";
import {
  ajrumiyyahWorkbookPath,
  workbookById,
  workbookIdForSection,
} from "../data/tuhfat/rafaWorkbooks.js";
import {
  ajrumiyyahNominativesQuizPath,
  isNominativesChapter,
} from "../data/nominativesMastery.js";
import { commentaryAfterLine } from "../data/ajrumiyyahCommentary.js";
import { lineNoteAfterLine } from "../data/ajrumiyyahLineNotes.js";
import {
  AJRUMIYYAH_FRONT_MATTER,
} from "../data/ajrumiyyahFrontMatter.js";
import AuthorLifeTimeline from "../components/ajrumiyyah/AuthorLifeTimeline.jsx";
import {
  hasTuhfatCommentary,
  tuhfatChapterSections,
} from "../data/ajrumiyyahTuhfatCommentary.js";
import { guideAfterLine } from "../data/ajrumiyyahGuides.jsx";
import { arabicContentHtml, frontMatterToHtml } from "../utils/ajrumiyyahTuhfatRender.js";
import { wireArabicPlayButtons } from "../utils/arabicSpeech.js";
import CourseLayout, {
  CourseLessonKicker,
  CourseLessonNav,
} from "../components/CourseLayout.jsx";
import AjrumiyyahCourseSidebar, {
  commentaryCoverLabels,
  commentaryProgressId,
  commentaryTopicTone,
} from "../components/AjrumiyyahCourseSidebar.jsx";
import { useCourseProgress } from "../hooks/useCourseProgress.js";
import { useNominativesMastery } from "../hooks/useNominativesMastery.js";
import TuhfatDrillPanel from "../components/ajrumiyyah/TuhfatDrillPanel.jsx";
import HalQuranExamplesGuide from "../components/ajrumiyyah/HalQuranExamplesGuide.jsx";
import CommentaryPen from "../components/ajrumiyyah/CommentaryPen.jsx";
import StudySplitViewToggle, {
  splitPaneVisibility,
  useStudySplitView,
} from "../components/ajrumiyyah/StudySplitViewToggle.jsx";
import StudyWorkbookPane from "../components/ajrumiyyah/StudyWorkbookPane.jsx";
import "../styles/ajrumiyyah.css";
import "../styles/ajrumiyyah-workbook.css";
import "../styles/author-life-timeline.css";

function wireKalamTabs(root) {
  if (!root) return;
  root.querySelectorAll(".kalam-tab").forEach((btn) => {
    const match = btn.getAttribute("onclick")?.match(/kalamTab\('([^']+)'/);
    if (!match) return;
    const tabId = match[1];
    btn.removeAttribute("onclick");
    btn.addEventListener("click", () => {
      root.querySelectorAll(".kalam-pane").forEach((p) => p.classList.remove("kp-active"));
      root.querySelectorAll(".kalam-tab").forEach((b) => b.classList.remove("kt-active"));
      root.querySelector(`#kp-${tabId}`)?.classList.add("kp-active");
      btn.classList.add("kt-active");
    });
  });
}

function SectionHead({ tier, badge, ar, en, lineRef }) {
  return (
    <div className={`ajr-section-head ajr-section-head--${tier}`}>
      <span className="ajr-section-badge">{badge}</span>
      <div className="ajr-section-titles">
        {ar && (
          <span className="ajr-section-ar" dir="rtl">
            {ar}
          </span>
        )}
        {en && <span className="ajr-section-en">{en}</span>}
        {lineRef && (
          <div className="ajr-section-line-ref">
            <span className="ajr-section-line-ref__num">
              {lineRef.end && lineRef.end !== lineRef.num
                ? `Lines ${lineRef.num}–${lineRef.end}`
                : `Line ${lineRef.num}`}
            </span>
            {lineRef.ar && (
              <span className="ajr-section-line-ref__ar" dir="rtl">
                {lineRef.ar}
              </span>
            )}
            {lineRef.en && (
              <span className="ajr-section-line-ref__en">{lineRef.en}</span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function LineCommentary({ html, storageKey }) {
  if (!html) return null;
  return (
    <CommentaryPen
      className="ajr-line-commentary__body ajr-expl-body"
      storageKey={storageKey}
      html={html}
    />
  );
}

function resolveLineNotes(chapterId, lineIndex, chapter) {
  return (
    lineNoteAfterLine(chapterId, lineIndex) ??
    commentaryAfterLine(chapterId, lineIndex) ??
    chapter.commentaryAfter?.[lineIndex] ??
    null
  );
}

function FrontMatterPanel({ sectionId, onNavigateSection }) {
  const sectionIdx = AJRUMIYYAH_FRONT_MATTER.findIndex((s) => s.id === sectionId);
  const section = AJRUMIYYAH_FRONT_MATTER[sectionIdx >= 0 ? sectionIdx : 0];
  const showAuthorTimeline = section.id === "author-biography";

  return (
    <div className="ajrumiyyah-content">
      <CourseLessonKicker
        label="Front Matter"
        titleAr="التَّحْفَةُ السَّنِيَّةُ"
        title="al-Tuḥfat al-Saniyyah"
        subtitle="Introduction &amp; biographies (pp. 13–23)"
      />

      <div className="ajr-front-nav">
        {AJRUMIYYAH_FRONT_MATTER.map((s) => (
          <button
            key={s.id}
            type="button"
            className={`ajr-front-nav-btn${s.id === section.id ? " active" : ""}`}
            onClick={() => onNavigateSection(s.id)}
          >
            <span className="ajr-front-nav-ar">{s.titleAr}</span>
            <span className="ajr-front-nav-en">{s.titleEn}</span>
          </button>
        ))}
      </div>

      {showAuthorTimeline ? <AuthorLifeTimeline variant="course" /> : null}

      <div className="course-card ajr-expl-wrap">
        <div className="ajr-lines-label">{section.titleEn}</div>
        <CommentaryPen
          className="ajr-expl-body ajr-tuhfat-body"
          storageKey={`ajr-pen:front:${section.id}`}
          html={frontMatterToHtml(section)}
        />
      </div>

      <CourseLessonNav
        hasPrev={sectionIdx > 0}
        hasNext={sectionIdx < AJRUMIYYAH_FRONT_MATTER.length - 1}
        onPrev={() => onNavigateSection(AJRUMIYYAH_FRONT_MATTER[sectionIdx - 1]?.id)}
        onNext={() => onNavigateSection(AJRUMIYYAH_FRONT_MATTER[sectionIdx + 1]?.id)}
      />
    </div>
  );
}


function NominativesChapterQuizLink({ chapterId }) {
  const { chapterStats } = useNominativesMastery();
  const stats = chapterStats(chapterId);
  return (
    <Link to={ajrumiyyahNominativesQuizPath(chapterId)} className="ajr-lesson-cover__mindmap">
      Quiz this chapter — Matn: {stats.matn.mastered}/{stats.matn.total}
      {stats.matnDone ? " ✅" : ""} · Rules: {stats.rule.mastered}/{stats.rule.total}
      {stats.ruleDone ? " ✅" : ""} →
    </Link>
  );
}

function LessonCover({ chapter, isDone, onToggleDone, onJump }) {
  const commentaryLabels = commentaryCoverLabels(chapter);

  return (
    <header className="course-card ajr-lesson-cover">
      <div className="ajr-lesson-cover__block">
        <span className="ajr-lesson-cover__badge">Matn chapter</span>
        <div className="ajr-lesson-cover__titles">
          <span className="ajr-lesson-cover__en">{chapter.translit}</span>
          <span className="ajr-lesson-cover__ar" dir="rtl">
            {chapter.ar}
          </span>
        </div>
        {chapter.id === "alamat-irab" ? (
          <Link to={ajrumiyyahAlamatMindMapPath()} className="ajr-lesson-cover__mindmap">
            Full mind map — all signs, rules &amp; examples →
          </Link>
        ) : null}
        {chapter.id === "kalam" ? (
          <Link to={ajrumiyyahKalamMindMapPath()} className="ajr-lesson-cover__mindmap">
            Full mind map — definition, types &amp; recognition signs →
          </Link>
        ) : null}
        {chapter.id === "marfuat" ? (
          <Link to={ajrumiyyahMarfuatMindMapPath()} className="ajr-lesson-cover__mindmap">
            Full mind map — seven nominatives, rules &amp; examples →
          </Link>
        ) : null}
        {chapter.id === "irab" || chapter.id === "alamat-irab" || chapter.id === "marfuat" ? (
          <Link to={ajrumiyyahIraabKeyboardPath()} className="ajr-lesson-cover__mindmap">
            Iʿrāb keyboard — build analysis with grammar keys →
          </Link>
        ) : null}
        {isNominativesChapter(chapter.id) ? (
          <NominativesChapterQuizLink chapterId={chapter.id} />
        ) : null}
      </div>
      <div className="ajr-lesson-cover__block ajr-lesson-cover__block--commentary">
        <span className="ajr-lesson-cover__badge ajr-lesson-cover__badge--commentary">
          Commentary chapters
        </span>
        {commentaryLabels.length === 0 ? (
          <span className="ajr-lesson-cover__meta">No Tuḥfat commentary for this matn yet</span>
        ) : (
          <ul className="ajr-lesson-cover__list">
            {commentaryLabels.map((item) => {
              const progressId = commentaryProgressId(chapter.id, item.lineIdx, item.subIdx);
              const done = isDone?.(progressId);
              const tone = commentaryTopicTone(chapter.id, item.lineIdx, item.en);
              const workbookId = workbookIdForSection(chapter.id, item.lineIdx);
              return (
                <li
                  key={`${item.lineIdx}-${item.subIdx}`}
                  className={`ajr-lesson-cover__row ajr-lesson-cover__row--${tone}${
                    done ? " ajr-lesson-cover__row--done" : ""
                  }${workbookId ? " ajr-lesson-cover__row--workbook" : ""}`}
                >
                  <button
                    type="button"
                    className={`ajr-lesson-cover__check${done ? " is-done" : ""}`}
                    aria-pressed={done}
                    aria-label={
                      done
                        ? `Mark not finished: ${item.en || item.ar || "commentary"}`
                        : `Mark finished: ${item.en || item.ar || "commentary"}`
                    }
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleDone?.(progressId);
                    }}
                  >
                    {done ? "✓" : ""}
                  </button>
                  <button
                    type="button"
                    className="ajr-lesson-cover__jump"
                    onClick={() => onJump?.(item.lineIdx)}
                  >
                    <span className="ajr-lesson-cover__jump-text">
                      {item.en && (
                        <span className="ajr-lesson-cover__list-en">{item.en}</span>
                      )}
                      {item.ar && (
                        <span className="ajr-lesson-cover__list-ar" dir="rtl">
                          {item.ar}
                        </span>
                      )}
                    </span>
                  </button>
                  {workbookId ? (
                    <Link
                      to={ajrumiyyahWorkbookPath(workbookId)}
                      className="ajr-lesson-cover__workbook"
                      title="Printable writing workbook"
                    >
                      كراسة
                    </Link>
                  ) : null}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </header>
  );
}

function MatnPassage({ chapterId, lines, focused }) {
  if (!lines?.length) return null;

  const paragraphs = groupMatnParagraphs(lines);

  return (
    <div
      className={`ajr-matn-passage ajr-matn-book ajr-matn-book--embedded${
        focused ? " ajr-matn-passage--focused" : ""
      }`}
    >
      {paragraphs.map((para) => (
        <div
          key={`${chapterId}-para-${para.startIdx}`}
          className="ajr-matn-book-para ajr-matn-book-para--static"
          id={para.startIdx != null ? `ajr-line-${para.startIdx}` : undefined}
        >
          {para.lines.map(
            (line) =>
              line.idx != null &&
              line.idx !== para.startIdx && (
                <span
                  key={`${chapterId}-anchor-${line.idx}`}
                  id={`ajr-line-${line.idx}`}
                  className="ajr-matn-line-anchor"
                  aria-hidden
                />
              ),
          )}
          <div className="ajr-matn-book-para__en">{para.en}</div>
          <div
            className="ajr-matn-book-para__ar"
            dir="rtl"
            dangerouslySetInnerHTML={{
              __html: arabicContentHtml(para.ar, { inline: true, play: false }),
            }}
          />
        </div>
      ))}
    </div>
  );
}

/** Group matn lines under each commentary section (book order) */
function buildStudyUnits(chapter) {
  const lines = chapter.lines || [];
  if (!lines.length) return [];

  const sections = hasTuhfatCommentary(chapter.id)
    ? tuhfatChapterSections(chapter.id)
    : [];

  if (!sections.length) {
    return [
      {
        startIdx: 0,
        endIdx: lines.length - 1,
        matnLines: lines.map(([ar, en, , note], idx) => ({ idx, ar, en, note })),
        tuhfat: null,
      },
    ];
  }

  const starts = sections.map((s) => s.lineIdx);
  return sections.map((section, i) => {
    const startIdx = section.lineIdx;
    const endIdx = (starts[i + 1] ?? lines.length) - 1;
    return {
      startIdx,
      endIdx,
      matnLines: lines.slice(startIdx, endIdx + 1).map(([ar, en, , note], j) => ({
        idx: startIdx + j,
        ar,
        en,
        note,
      })),
      tuhfat: section,
    };
  });
}

function LessonPanel({  chapter,
  total,
  done,
  onToggleComplete,
  onNavigate,
  focusLineIndex,
  isCommDone,
  onToggleCommDone,
  onJumpToLine,
}) {
  const contentBodyRef = useRef(null);
  const studyUnits = buildStudyUnits(chapter);
  const [splitView, setSplitView] = useStudySplitView();
  const hasAnyWorkbook = studyUnits.some((unit) =>
    Boolean(workbookIdForSection(chapter.id, unit.startIdx)),
  );
  const layoutView =
    splitView === "workbook" && !hasAnyWorkbook ? "split" : splitView;
  const hasAnyDual = studyUnits.some((unit) => {
    const notes = unit.matnLines.some(
      ({ idx }) => resolveLineNotes(chapter.id, idx, chapter),
    );
    const guides = unit.matnLines.some(({ idx }) => {
      const guide = guideAfterLine(chapter.id, idx);
      if (!guide) return false;
      const list = Array.isArray(guide) ? guide : [guide];
      return list.some((g) => g.slot !== "drill");
    });
    return Boolean(unit.tuhfat?.html) && (notes || guides);
  });

  useEffect(() => {
    wireKalamTabs(contentBodyRef.current);
  }, [chapter.id, chapter.lines]);

  useEffect(() => {
    if (focusLineIndex == null || Number.isNaN(focusLineIndex)) return;
    const units = buildStudyUnits(chapter);
    const unit = units.find(
      (u) => focusLineIndex >= u.startIdx && focusLineIndex <= u.endIdx,
    );
    const el =
      document.getElementById(`ajr-unit-${unit?.startIdx ?? focusLineIndex}`) ||
      document.getElementById(`ajr-line-${focusLineIndex}`);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    el.classList.add("ajr-study-unit--focused");
    const timer = window.setTimeout(() => el.classList.remove("ajr-study-unit--focused"), 2400);
    return () => window.clearTimeout(timer);
  }, [chapter, focusLineIndex]);

  return (
    <div className="ajrumiyyah-content" ref={contentBodyRef}>
      <LessonCover
        chapter={chapter}
        isDone={isCommDone}
        onToggleDone={onToggleCommDone}
        onJump={onJumpToLine}
      />

      {hasAnyDual || hasAnyWorkbook ? (
        <StudySplitViewToggle
          view={layoutView}
          onChange={setSplitView}
          hasWorkbook={hasAnyWorkbook}
        />
      ) : null}

      {studyUnits.map((unit) => {
        const focused =
          focusLineIndex != null &&
          focusLineIndex >= unit.startIdx &&
          focusLineIndex <= unit.endIdx;

        const notesInUnit = unit.matnLines
          .map(({ idx }) => ({
            idx,
            html: resolveLineNotes(chapter.id, idx, chapter),
          }))
          .filter((n) => n.html);

        const guidesInUnit = unit.matnLines
          .flatMap(({ idx }) => {
            const guide = guideAfterLine(chapter.id, idx);
            if (!guide) return [];
            return Array.isArray(guide) ? guide : [guide];
          });
        const explanationGuides = guidesInUnit.filter((g) => g.slot !== "drill");
        const reactDrills = guidesInUnit.filter((g) => g.slot === "drill");
        const tuhfatDrills = unit.tuhfat?.drills?.length ? unit.tuhfat.drills : [];
        const hasDrillsBand = tuhfatDrills.length > 0 || reactDrills.length > 0;
        const hasTuhfatBody = Boolean(unit.tuhfat?.html);
        const hasExplanation =
          notesInUnit.length > 0 || explanationGuides.length > 0;
        const wbId = workbookIdForSection(chapter.id, unit.startIdx);
        const wb = wbId ? workbookById(wbId) : null;
        const showWorkbook = layoutView === "workbook" && wb;

        return (
          <div
            key={`${chapter.id}-unit-${unit.startIdx}`}
            id={`ajr-unit-${unit.startIdx}`}
            className={`ajr-study-unit${focused ? " ajr-study-unit--focused" : ""}`}
          >
            {!showWorkbook && (
            <div className="course-card ajr-section ajr-section--matn">
              <div className="ajr-section-body ajr-matn-crisp">
                <span className="ajr-section-badge">Matn</span>
                <MatnPassage
                  chapterId={chapter.id}
                  lines={unit.matnLines}
                  focused={focused}
                />
              </div>
            </div>
            )}

            {showWorkbook ? (
              <StudyWorkbookPane
                wb={wb}
                isDone={isCommDone}
                onToggle={onToggleCommDone}
              />
            ) : null}

            {(hasTuhfatBody || hasExplanation) && !showWorkbook && (() => {
              const canDual = hasTuhfatBody && hasExplanation;
              const { showComm, showExpl, isDual } = splitPaneVisibility(
                canDual ? splitView : "split",
                hasTuhfatBody,
                hasExplanation,
              );
              const tuhfatTitleAr = unit.tuhfat?.titleAr || null;
              const tuhfatTitleEn = unit.tuhfat?.titleEn || null;
              const hasTuhfatTitle = Boolean(tuhfatTitleAr || tuhfatTitleEn);
              const framed = canDual;
              const splitClass = [
                "ajr-study-split",
                isDual ? "ajr-study-split--dual" : "",
                framed && !isDual && showComm ? "ajr-study-split--solo ajr-study-split--solo-comm" : "",
                framed && !isDual && showExpl ? "ajr-study-split--solo ajr-study-split--solo-expl" : "",
              ]
                .filter(Boolean)
                .join(" ");

              return (
              <div className={splitClass}>
                {framed && hasTuhfatTitle && (
                  <div className="ajr-study-split__title ajr-section ajr-section--tuhfat">
                    <SectionHead
                      tier="tuhfat"
                      badge={isDual ? "Commentary · Explanation" : showComm ? "Commentary" : "Explanation"}
                      ar={tuhfatTitleAr}
                      en={tuhfatTitleEn}
                    />
                  </div>
                )}

                {showComm && (
                  <div className="course-card ajr-section ajr-section--tuhfat ajr-study-split__comm">
                    {!framed && hasTuhfatTitle && (
                      <SectionHead
                        tier="tuhfat"
                        badge="Commentary"
                        ar={tuhfatTitleAr}
                        en={tuhfatTitleEn}
                      />
                    )}
                    {framed && (
                      <div className="ajr-study-split__col-label ajr-study-split__col-label--comm">
                        Commentary
                      </div>
                    )}
                    <CommentaryPen
                      className="ajr-section-body ajr-expl-body ajr-tuhfat-body"
                      storageKey={`ajr-pen:study:${chapter.id}:${unit.startIdx}:tuhfat`}
                      html={unit.tuhfat.html}
                    />
                  </div>
                )}

                {showExpl && (
                  <div className="ajr-study-split__expl">
                    {framed && (
                      <div className="ajr-study-split__col-label ajr-study-split__col-label--expl">
                        Explanation
                      </div>
                    )}
                    {notesInUnit.map(({ idx, html }) => (
                      <div
                        key={`${chapter.id}-${idx}-notes`}
                        className={`course-card ajr-section ajr-section--study ajr-line-commentary-wrap${
                          focusLineIndex === idx ? " ajr-line-commentary-wrap--focused" : ""
                        }`}
                      >
                        {!framed && (
                          <SectionHead
                            tier="study"
                            badge="Explanation"
                            ar="شُرُوحٌ مُسَاعِدَةٌ"
                            en="Explanation of the commentary"
                          />
                        )}
                        <div className="ajr-section-body">
                          <LineCommentary
                            html={html}
                            storageKey={`ajr-pen:study:${chapter.id}:${idx}:notes`}
                          />
                        </div>
                      </div>
                    ))}

                    {explanationGuides.map((guide) => (
                      <div
                        key={`${chapter.id}-${guide.key}-guide`}
                        className="course-card ajr-section ajr-section--study"
                      >
                        {!framed && !guide.noHead && (
                          <SectionHead
                            tier="study"
                            badge="Explanation"
                            ar={guide.ar}
                            en={guide.en}
                          />
                        )}
                        <div className="ajr-section-body">{guide.body}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              );
            })()}

            {hasDrillsBand && !showWorkbook && (
              <div className="course-card ajr-section ajr-section--drill ajr-study-drills">
                <SectionHead
                  tier="drill"
                  badge="Practice"
                  ar="تَمْرِينٌ وَأَسْئِلَةٌ"
                  en="Exercises & questions — do them here"
                />
                <div className="ajr-section-body">
                  {reactDrills.map((guide) => (
                    <div
                      key={`${chapter.id}-${guide.key}-drill`}
                      className="ajr-study-drills__react"
                    >
                      {guide.body}
                    </div>
                  ))}
                  {tuhfatDrills.length > 0 && (
                    <TuhfatDrillPanel
                      chapterId={chapter.id}
                      lineIdx={unit.startIdx}
                      sections={tuhfatDrills}
                      titleAr={unit.tuhfat?.titleAr}
                      titleEn={unit.tuhfat?.titleEn}
                    />
                  )}
                </div>
              </div>
            )}
          </div>
        );
      })}

      {chapter.explanation && (
        <div className="course-card ajr-section ajr-section--study">
          <SectionHead
            tier="study"
            badge="Explanation"
            ar="شُرُوحٌ مُسَاعِدَةٌ"
            en="Study Notes"
          />
          <CommentaryPen
            className="ajr-section-body ajr-expl-body"
            storageKey={`ajr-pen:study:${chapter.id}:explanation`}
            html={chapter.explanation}
          />
        </div>
      )}

      {chapter.id === "hal" && (
        <div className="course-card ajr-section ajr-section--study">
          <SectionHead
            tier="study"
            badge="Reference"
            ar="أَمْثِلَةُ الْحَالِ فِي الْقُرْآنِ الْكَرِيمِ"
            en="Qur'anic examples of the ḥāl"
          />
          <div className="ajr-section-body">
            <HalQuranExamplesGuide />
          </div>
        </div>
      )}

      <CourseLessonNav
        hasPrev={chapter.num > 1}
        hasNext={chapter.num < total}
        onPrev={() => onNavigate(-1)}
        onNext={() => onNavigate(1)}
      >
        <button
          type="button"
          className={`course-btn ghost${done.has(chapter.id) ? " done" : ""}`}
          onClick={() => onToggleComplete(chapter.id)}
        >
          {done.has(chapter.id) ? "✓ Completed" : "Mark as complete"}
        </button>
      </CourseLessonNav>
    </div>
  );
}

export default function AjrumiyyahPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const chapters = AJRUMIYYAH_CHAPTERS;
  const chapterParam = searchParams.get("chapter");
  const isFrontMatter = chapterParam === "front-matter";
  const initialIdx = Math.max(
    0,
    chapters.findIndex((chapter) => chapter.id === chapterParam),
  );
  const [currentIdx, setCurrentIdx] = useState(
    isFrontMatter ? 0 : initialIdx >= 0 ? initialIdx : 0,
  );
  const [frontSectionId, setFrontSectionId] = useState(
    searchParams.get("section") || AJRUMIYYAH_FRONT_MATTER[0].id,
  );
  const { done, toggle, isDone } = useCourseProgress("ajrumiyyah");
  const contentRef = useRef(null);

  useEffect(() => {
    wireArabicPlayButtons(contentRef.current);
  }, []);

  useEffect(() => {
    if (!chapterParam || isFrontMatter) return;
    const idx = chapters.findIndex((c) => c.id === chapterParam);
    if (idx >= 0) setCurrentIdx(idx);
  }, [chapterParam, isFrontMatter, chapters]);

  const chapter = chapters[currentIdx];
  const focusLineIndex = (() => {
    const raw = searchParams.get("line");
    if (raw == null || raw === "") return null;
    const n = Number(raw);
    return Number.isFinite(n) ? n : null;
  })();

  const goToFrontMatter = useCallback(
    (sectionId = AJRUMIYYAH_FRONT_MATTER[0].id) => {
      setFrontSectionId(sectionId);
      setSearchParams({ chapter: "front-matter", section: sectionId }, { replace: true });
    },
    [setSearchParams],
  );

  const goToChapter = useCallback(
    (idx, lineIdx = null) => {
      if (idx < 0 || idx >= chapters.length) return;
      setCurrentIdx(idx);
      const nextChapter = chapters[idx];
      if (!nextChapter) return;
      const params = { chapter: nextChapter.id };
      if (lineIdx != null && Number.isFinite(lineIdx)) {
        params.line = String(lineIdx);
      }
      setSearchParams(params, { replace: true });
    },
    [chapters, setSearchParams],
  );

  const goToLine = useCallback(
    (chapterId, lineIdx) => {
      const idx = chapters.findIndex((c) => c.id === chapterId);
      if (idx < 0) return;
      goToChapter(idx, lineIdx);
    },
    [chapters, goToChapter],
  );

  const navigateChapter = useCallback(
    (delta) => goToChapter(currentIdx + delta),
    [currentIdx, goToChapter],
  );


  const sidebar = (
    <AjrumiyyahCourseSidebar
      activeChapterId={isFrontMatter ? null : chapter?.id}
      focusLineIndex={isFrontMatter ? null : focusLineIndex}
      isFrontMatter={isFrontMatter}
      onGoToFrontMatter={goToFrontMatter}
      onGoToChapter={goToChapter}
      onGoToLine={goToLine}
    />
  );

  return (
    <CourseLayout
      fullWidth
      courseId="ajrumiyyah"
      sidebar={sidebar}
    >
      <div ref={contentRef}>
      {isFrontMatter ? (
        <FrontMatterPanel
          key={frontSectionId}
          sectionId={frontSectionId}
          onNavigateSection={(id) => {
            setFrontSectionId(id);
            setSearchParams({ chapter: "front-matter", section: id }, { replace: true });
          }}
        />
      ) : (
        <LessonPanel
          key={chapter.id}
          chapter={chapter}
          total={chapters.length}
          done={done()}
          onToggleComplete={toggle}
          onNavigate={navigateChapter}
          focusLineIndex={focusLineIndex}
          isCommDone={isDone}
          onToggleCommDone={toggle}
          onJumpToLine={(lineIdx) => goToLine(chapter.id, lineIdx)}
        />
      )}
      </div>
    </CourseLayout>
  );
}

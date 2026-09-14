import { Link } from "react-router-dom";
import {
  AJRUMIYYAH_CHAPTERS,
  AJRUMIYYAH_GROUPS,
  ajrumiyyahAlamatMindMapPath,
  ajrumiyyahIraabGuidePath,
  ajrumiyyahIraabKeyboardPath,
  ajrumiyyahKalamMindMapPath,
  ajrumiyyahMarfuatMindMapPath,
  ajrumiyyahMatnPath,
  ajrumiyyahStudyPath,
} from "../data/ajrumiyyahCourse.js";
import { ajrumiyyahNominativesQuizPath } from "../data/nominativesMastery.js";
import { ajrumiyyahWorkbookPath } from "../data/tuhfat/rafaWorkbooks.js";
import { AJRUMIYYAH_FRONT_MATTER } from "../data/ajrumiyyahFrontMatter.js";
import { ALAMAT_IRAB_MINDMAP_META } from "../data/alamatIrabMindMap.js";
import { KALAM_MINDMAP_META } from "../data/kalamMindMap.js";
import { MARFUAT_MINDMAP_META } from "../data/marfuatMindMap.js";
import {
  hasTuhfatCommentary,
  tuhfatChapterCommentaryTitles,
} from "../data/ajrumiyyahTuhfatCommentary.js";
import { useCourseProgress } from "../hooks/useCourseProgress.js";
import { CourseSidebar, CourseSidebarProgress, CourseSidebarUnit } from "./CourseLayout.jsx";

/** @typedef {'keyboard' | 'iraab-guide' | 'matn' | 'kalam-mindmap' | 'alamat-mindmap' | 'marfuat-mindmap' | 'nominatives-quiz' | 'workbook' | null} AjrumiyyahToolId */

const REFERENCE_LINKS = [
  {
    id: "matn",
    to: ajrumiyyahMatnPath(),
    ar: "النَّصُّ كَامِلًا",
    en: "Full text",
  },
  {
    id: "keyboard",
    to: ajrumiyyahIraabKeyboardPath(),
    ar: "لَوْحَةُ الْإِعْرَابِ",
    en: "Iʿrāb keyboard",
  },
  {
    id: "iraab-guide",
    to: ajrumiyyahIraabGuidePath(),
    ar: "شَرْحُ الْآيَةِ",
    en: "Ayah iʿrāb explainer",
  },
  {
    id: "kalam-mindmap",
    to: ajrumiyyahKalamMindMapPath(),
    ar: KALAM_MINDMAP_META.titleAr,
    en: KALAM_MINDMAP_META.titleEn,
  },
  {
    id: "alamat-mindmap",
    to: ajrumiyyahAlamatMindMapPath(),
    ar: ALAMAT_IRAB_MINDMAP_META.titleAr,
    en: ALAMAT_IRAB_MINDMAP_META.titleEn,
  },
  {
    id: "marfuat-mindmap",
    to: ajrumiyyahMarfuatMindMapPath(),
    ar: MARFUAT_MINDMAP_META.titleAr,
    en: MARFUAT_MINDMAP_META.titleEn,
  },
  {
    id: "nominatives-quiz",
    to: ajrumiyyahNominativesQuizPath(),
    ar: "اخْتِبَارُ الْمَرْفُوعَاتِ",
    en: "Nominatives Trial",
  },
  {
    id: "workbook",
    to: ajrumiyyahWorkbookPath(),
    ar: "كُرَّاسَاتُ الْكِتَابَةِ",
    en: "Writing workbooks",
  },
];

function frontMatterStudyPath(sectionId) {
  const params = new URLSearchParams({
    chapter: "front-matter",
    section: sectionId || AJRUMIYYAH_FRONT_MATTER[0].id,
  });
  return `${ajrumiyyahStudyPath()}?${params}`;
}

function commentaryCoverLabels(chapter) {
  if (!chapter || !hasTuhfatCommentary(chapter.id)) return [];
  return tuhfatChapterCommentaryTitles(chapter.id).map((item) => ({
    lineIdx: item.lineIdx,
    subIdx: item.subIdx,
    ar: item.ar,
    en: item.en,
  }));
}

function commentaryProgressId(chapterId, lineIdx, subIdx = 0) {
  return subIdx ? `comm:${chapterId}:${lineIdx}:${subIdx}` : `comm:${chapterId}:${lineIdx}`;
}

function collectProgressIds() {
  const ids = [];
  for (const section of AJRUMIYYAH_FRONT_MATTER) {
    ids.push(`front:${section.id}`);
  }
  for (const chapter of AJRUMIYYAH_CHAPTERS) {
    ids.push(chapter.id);
    for (const item of commentaryCoverLabels(chapter)) {
      ids.push(commentaryProgressId(chapter.id, item.lineIdx, item.subIdx));
    }
  }
  return ids;
}

function computeProgressPct(isDone) {
  const ids = collectProgressIds();
  if (!ids.length) return 0;
  const doneCount = ids.filter((id) => isDone(id)).length;
  return Math.round((doneCount / ids.length) * 100);
}

function commentaryTopicTone(chapterId, lineIdx, titleEn = "") {
  if (chapterId === "alamat-irab") {
    if (lineIdx <= 5) return "raf";
    if (lineIdx <= 11) return "nasb";
    if (lineIdx <= 15) return "khafd";
    if (lineIdx <= 18) return "jazm";
    return "muarab";
  }
  if (chapterId === "kalam") {
    if (lineIdx <= 1) return "general";
    if (lineIdx <= 4) return "ism";
    if (lineIdx === 5) return "fiil";
    return "harf";
  }
  if (chapterId === "irab") return "general";

  const t = String(titleEn).toLowerCase();
  if (/raf|ḍamma|damma|wāw|waw|nūn as a representative of the ḍ/.test(t)) return "raf";
  if (/naṣb|nasb|fatḥ|fatha|kasrah as a representative of the fa/.test(t)) return "nasb";
  if (/khaf|jarr/.test(t)) return "khafd";
  if (/jazm|sukūn|sukun/.test(t)) return "jazm";
  if (/noun|ism|اسم/.test(t)) return "ism";
  if (/verb|fiʿl|fiil|فعل/.test(t)) return "fiil";
  if (/particle|ḥarf|harf|حرف/.test(t)) return "harf";
  return "general";
}

/**
 * Same course outline used on the main Ājurrūmiyyah study page.
 * On tool pages, pass `activeTool` and omit navigation callbacks (uses Links).
 *
 * @param {{
 *   activeTool?: AjrumiyyahToolId,
 *   activeChapterId?: string | null,
 *   focusLineIndex?: number | null,
 *   isFrontMatter?: boolean,
 *   frontSectionId?: string | null,
 *   onGoToFrontMatter?: (sectionId?: string) => void,
 *   onGoToChapter?: (chapterIndex: number) => void,
 *   onGoToLine?: (chapterId: string, lineIdx: number) => void,
 * }} props
 */
export default function AjrumiyyahCourseSidebar({
  activeTool = null,
  activeChapterId = null,
  focusLineIndex = null,
  isFrontMatter = false,
  frontSectionId = null,
  onGoToFrontMatter,
  onGoToChapter,
  onGoToLine,
} = {}) {
  const { isDone } = useCourseProgress("ajrumiyyah");
  const chapters = AJRUMIYYAH_CHAPTERS;
  const interactive = Boolean(onGoToChapter || onGoToLine || onGoToFrontMatter);
  const progressPct = computeProgressPct(isDone);

  return (
    <CourseSidebar title="Course outline">
      <CourseSidebarProgress pct={progressPct} label={`${progressPct}% complete`} />
      <div className="ajr-outline-legend" aria-hidden>
        <span className="ajr-outline-legend__matn">Matn chapter</span>
        <span className="ajr-outline-legend__comm">Commentary</span>
      </div>
      <CourseSidebarUnit title="Reference">
        {REFERENCE_LINKS.map((item, idx) => (
          <li key={item.id} className="ajr-outline-block">
            <Link
              to={item.to}
              title={item.en}
              className={[
                "ajr-outline-matn",
                "course-sidebar-link",
                activeTool === item.id ? "active" : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <span className="course-sidebar-lesson-num">{idx + 1}</span>
              <span className="ajr-outline-matn__ar" dir="rtl" lang="ar">
                {item.ar}
              </span>
            </Link>
          </li>
        ))}
      </CourseSidebarUnit>
      <CourseSidebarUnit title="Front Matter">
        <li className="ajr-outline-block">
          <ul className="ajr-outline-comm-list">
            {AJRUMIYYAH_FRONT_MATTER.map((section) => {
              const isActive =
                isFrontMatter &&
                !activeTool &&
                (frontSectionId || AJRUMIYYAH_FRONT_MATTER[0].id) === section.id;
              const progressId = `front:${section.id}`;
              const itemDone = isDone(progressId);
              const className = [
                "ajr-outline-comm",
                "ajr-outline-comm--general",
                isActive ? "active" : "",
                itemDone ? "done" : "",
              ]
                .filter(Boolean)
                .join(" ");

              if (interactive && onGoToFrontMatter) {
                return (
                  <li key={section.id}>
                    <button
                      type="button"
                      title={section.titleEn}
                      className={className}
                      onClick={() => onGoToFrontMatter(section.id)}
                    >
                      <span
                        className={`ajr-outline-comm__mark${itemDone ? " is-done" : ""}`}
                        aria-hidden
                      >
                        {itemDone ? "✓" : ""}
                      </span>
                      <span className="ajr-outline-comm__ar" dir="rtl" lang="ar">
                        {section.titleAr}
                      </span>
                    </button>
                  </li>
                );
              }

              return (
                <li key={section.id}>
                  <Link
                    to={frontMatterStudyPath(section.id)}
                    title={section.titleEn}
                    className={[className, "course-sidebar-link"].filter(Boolean).join(" ")}
                  >
                    <span
                      className={`ajr-outline-comm__mark${itemDone ? " is-done" : ""}`}
                      aria-hidden
                    >
                      {itemDone ? "✓" : ""}
                    </span>
                    <span className="ajr-outline-comm__ar" dir="rtl" lang="ar">
                      {section.titleAr}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </li>
      </CourseSidebarUnit>
      {AJRUMIYYAH_GROUPS.map((group) => {
        const ids = group.ids.filter((id) => chapters.find((c) => c.id === id));
        return (
          <CourseSidebarUnit key={group.title} title={group.title}>
            {ids.map((id) => {
              const ch = chapters.find((c) => c.id === id);
              if (!ch) return null;
              const isChapterActive =
                !isFrontMatter && !activeTool && ch.id === activeChapterId;
              const commentary = commentaryCoverLabels(ch);
              return (
                <li key={ch.id} className="ajr-outline-block">
                  {interactive && onGoToChapter ? (
                    <button
                      type="button"
                      className={[
                        "ajr-outline-matn",
                        isChapterActive && focusLineIndex == null ? "active" : "",
                        isDone(ch.id) ? "done" : "",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                      onClick={() => onGoToChapter(ch.num - 1)}
                    >
                      <span className="course-sidebar-lesson-num">{ch.num}</span>
                      <span className="ajr-outline-matn__ar" dir="rtl" lang="ar">
                        {ch.ar}
                      </span>
                    </button>
                  ) : (
                    <Link
                      to={ajrumiyyahStudyPath(ch.id, 0)}
                      className={[
                        "ajr-outline-matn",
                        "course-sidebar-link",
                        isDone(ch.id) ? "done" : "",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                    >
                      <span className="course-sidebar-lesson-num">{ch.num}</span>
                      <span className="ajr-outline-matn__ar" dir="rtl" lang="ar">
                        {ch.ar}
                      </span>
                    </Link>
                  )}
                  {commentary.length > 0 && (
                    <ul className="ajr-outline-comm-list">
                      {commentary.map((item) => {
                        const isLineActive =
                          isChapterActive && focusLineIndex === item.lineIdx;
                        const progressId = commentaryProgressId(ch.id, item.lineIdx, item.subIdx);
                        const itemDone = isDone(progressId);
                        const tone = commentaryTopicTone(ch.id, item.lineIdx, item.en);
                        const labelAr = item.ar || item.en;
                        if (interactive && onGoToLine) {
                          return (
                            <li key={`${ch.id}-c-${item.lineIdx}-${item.subIdx}`}>
                              <button
                                type="button"
                                title={item.en || labelAr}
                                className={[
                                  "ajr-outline-comm",
                                  `ajr-outline-comm--${tone}`,
                                  isLineActive ? "active" : "",
                                  itemDone ? "done" : "",
                                ]
                                  .filter(Boolean)
                                  .join(" ")}
                                onClick={() => onGoToLine(ch.id, item.lineIdx)}
                              >
                                <span
                                  className={`ajr-outline-comm__mark${itemDone ? " is-done" : ""}`}
                                  aria-hidden
                                >
                                  {itemDone ? "✓" : ""}
                                </span>
                                <span className="ajr-outline-comm__ar" dir="rtl" lang="ar">
                                  {labelAr}
                                </span>
                              </button>
                            </li>
                          );
                        }
                        return (
                          <li key={`${ch.id}-c-${item.lineIdx}-${item.subIdx}`}>
                            <Link
                              to={ajrumiyyahStudyPath(ch.id, item.lineIdx)}
                              title={item.en || labelAr}
                              className={[
                                "ajr-outline-comm",
                                `ajr-outline-comm--${tone}`,
                                itemDone ? "done" : "",
                              ]
                                .filter(Boolean)
                                .join(" ")}
                            >
                              <span
                                className={`ajr-outline-comm__mark${itemDone ? " is-done" : ""}`}
                                aria-hidden
                              >
                                {itemDone ? "✓" : ""}
                              </span>
                              <span className="ajr-outline-comm__ar" dir="rtl" lang="ar">
                                {labelAr}
                              </span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}
          </CourseSidebarUnit>
        );
      })}
    </CourseSidebar>
  );
}

export { commentaryCoverLabels, commentaryProgressId, commentaryTopicTone };

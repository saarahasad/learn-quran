import {
  CourseSidebar,
  CourseSidebarProgress,
  CourseSidebarUnit,
} from "./CourseLayout.jsx";
import { getBaqarahPageGuides } from "../data/baqarahPageGuides.js";

export default function BaqarahPagesSidebar({ activeMushafPage = null, onPageSelect }) {
  const guides = getBaqarahPageGuides();
  const activeIndex = activeMushafPage
    ? guides.findIndex((item) => item.mushafPage === activeMushafPage)
    : -1;
  const progressPct = guides.length && activeIndex >= 0
    ? Math.round(((activeIndex + 1) / guides.length) * 100)
    : 0;
  const progressLabel = activeIndex >= 0
    ? `${activeIndex + 1} of ${guides.length} pages`
    : `${guides.length} pages`;

  return (
    <CourseSidebar title="Pages" className="course-sidebar--pages">
      <CourseSidebarProgress pct={progressPct} label={progressLabel} />
      <CourseSidebarUnit title="Al-Baqarah · Pages 2–11">
        {guides.map((item) => {
          const isActive = activeMushafPage != null && item.mushafPage === activeMushafPage;
          return (
            <li key={item.mushafPage}>
              <button
                type="button"
                className={isActive ? "active" : ""}
                onClick={() => onPageSelect?.(item.mushafPage)}
                aria-current={isActive ? "page" : undefined}
              >
                <span className="course-sidebar-lesson-num">{item.mushafPage}</span>
                <span className="baqarah-sidebar-lesson-text">
                  <span className="baqarah-sidebar-lesson-title">{item.title}</span>
                  <span className="baqarah-sidebar-lesson-meta">
                    āyāt {item.verseRange}
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </CourseSidebarUnit>
    </CourseSidebar>
  );
}

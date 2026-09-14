import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CourseLayout, {
  CourseLessonNav,
  CourseSidebar,
  CourseSidebarProgress,
  CourseSidebarUnit,
} from "../components/CourseLayout.jsx";
import { useCourseProgress } from "../hooks/useCourseProgress.js";
import {
  FIQH_LESSONS,
  FIQH_META,
  FIQH_UNITS,
  fiqhEmbedSrc,
} from "../data/fiqhCourse.js";
import { LEARN_ISLAM } from "../data/platform.js";
import "./FiqhPage.css";

const STUDY_UNITS = FIQH_UNITS.filter((unit) => unit.id !== "overview");
const STUDY_LESSONS = FIQH_LESSONS.filter((lesson) => lesson.id !== "home");
const DEFAULT_LESSON_ID = STUDY_LESSONS[0]?.id ?? "purification";

export default function FiqhPage() {
  const { isDone, toggle } = useCourseProgress("fiqh");
  const [searchParams, setSearchParams] = useSearchParams();
  const requestedId = searchParams.get("lesson");
  const initialId = STUDY_LESSONS.some((lesson) => lesson.id === requestedId)
    ? requestedId
    : DEFAULT_LESSON_ID;
  const [activeId, setActiveId] = useState(initialId);

  const lessonIndex = STUDY_LESSONS.findIndex((l) => l.id === activeId);
  const activeLesson = STUDY_LESSONS[lessonIndex];
  const embedSrc = useMemo(() => fiqhEmbedSrc(activeId), [activeId]);

  const goLesson = (delta) => {
    const next = lessonIndex + delta;
    if (next >= 0 && next < STUDY_LESSONS.length) {
      const nextLesson = STUDY_LESSONS[next];
      setActiveId(nextLesson.id);
      setSearchParams({ lesson: nextLesson.id }, { replace: true });
    }
  };

  const selectLesson = (lessonId) => {
    setActiveId(lessonId);
    setSearchParams({ lesson: lessonId }, { replace: true });
  };

  const progressPct = Math.round(
    (STUDY_LESSONS.filter((lesson) => isDone(lesson.id)).length / STUDY_LESSONS.length) * 100,
  );

  const sidebar = (
    <CourseSidebar title="Course outline">
      <CourseSidebarProgress pct={progressPct} label={`${progressPct}% complete`} />
      {STUDY_UNITS.map((unit) => (
        <CourseSidebarUnit key={unit.id} title={unit.title}>
          {unit.lessons.map((lesson) => (
            <li key={lesson.id}>
              <button
                type="button"
                className={[
                  activeId === lesson.id ? "active" : "",
                  isDone(lesson.id) ? "done" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                onClick={() => selectLesson(lesson.id)}
              >
                <span className="course-sidebar-lesson-num">{lesson.icon}</span>
                <span>{lesson.title}</span>
                {lesson.badge && (
                  <span className="fiqh-sidebar-badge">{lesson.badge}</span>
                )}
              </button>
            </li>
          ))}
        </CourseSidebarUnit>
      ))}
    </CourseSidebar>
  );

  return (
    <CourseLayout
      wide
      courseId="fiqh"
      breadcrumbs={[
        { label: LEARN_ISLAM.name, to: "/" },
        { label: FIQH_META.name, to: FIQH_META.path },
        { label: activeLesson?.title ?? "Study" },
      ]}
      sidebar={sidebar}
    >
      <div className="fiqh-course">
        <iframe
          key={activeId}
          className="fiqh-lesson-frame"
          src={embedSrc}
          title={`${FIQH_META.name} — ${activeLesson?.title ?? activeId}`}
        />
        <CourseLessonNav
          hasPrev={lessonIndex > 0}
          hasNext={lessonIndex < STUDY_LESSONS.length - 1}
          onPrev={() => goLesson(-1)}
          onNext={() => goLesson(1)}
        >
          <button
            type="button"
            className={`course-btn ghost${isDone(activeId) ? " done" : ""}`}
            onClick={() => toggle(activeId)}
          >
            {isDone(activeId) ? "✓ Completed" : "Mark as complete"}
          </button>
        </CourseLessonNav>
      </div>
    </CourseLayout>
  );
}

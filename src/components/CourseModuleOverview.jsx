import { useMemo } from "react";
import { Link } from "react-router-dom";
import CourseLayout from "./CourseLayout.jsx";
import {
  LESSON_XP,
  buildGamifiedUnits,
  summarizeUnitsProgress,
} from "../utils/courseProgress.js";

function LessonStatusIcon({ state, num, icon }) {
  if (state === "done") {
    return (
      <span className="course-module-card-num course-module-card-num--done" aria-hidden>
        ✓
      </span>
    );
  }
  if (state === "locked") {
    return (
      <span className="course-module-card-num course-module-card-num--locked" aria-hidden>
        🔒
      </span>
    );
  }
  if (state === "current") {
    return (
      <span className="course-module-card-num course-module-card-num--current" aria-hidden>
        {num ?? icon ?? "·"}
      </span>
    );
  }
  return (
    <span className="course-module-card-num" aria-hidden>
      {num ?? icon ?? "·"}
    </span>
  );
}

export function CourseModuleCard({ item, studyPath, paramKey = "lesson" }) {
  const href = item.href ?? `${studyPath}?${paramKey}=${encodeURIComponent(item.id)}`;
  const state = item.state ?? (item.done ? "done" : "available");
  const isLocked = state === "locked";
  const isCurrent = state === "current";
  const isDone = state === "done" || item.done;

  const className = [
    "course-module-card",
    isDone ? "course-module-card--done" : "",
    isCurrent ? "course-module-card--current" : "",
    isLocked ? "course-module-card--locked" : "",
    !isLocked && (studyPath || item.href) ? "course-module-card--link" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const meta =
    isDone && item.trackable !== false
      ? `+${item.xp ?? LESSON_XP} XP earned`
      : isCurrent
        ? "Continue →"
        : isLocked
          ? "Complete previous lesson to unlock"
          : item.meta;

  const inner = (
    <>
      <div className="course-module-card-top">
        <LessonStatusIcon state={state} num={item.num} icon={item.icon} />
        {isDone && (
          <span className="course-module-card-done" aria-label="Completed">
            ✓
          </span>
        )}
        {isCurrent && !isDone && (
          <span className="course-module-card-now" aria-label="Current lesson">
            Now
          </span>
        )}
      </div>
      {item.labelAr && (
        <span className="course-module-card-ar" dir="rtl">
          {item.labelAr}
        </span>
      )}
      <h3>{item.label}</h3>
      {meta && <p className="course-module-card-meta">{meta}</p>}
      {item.badge && <span className="course-module-card-badge">{item.badge}</span>}
      {!isDone && !isLocked && item.trackable !== false && (
        <span className="course-module-card-xp">+{item.xp ?? LESSON_XP} XP</span>
      )}
    </>
  );

  if (isLocked) {
    return (
      <article className={className} aria-disabled="true">
        {inner}
      </article>
    );
  }

  if (studyPath || item.href) {
    return (
      <Link to={item.href ?? href} className={className}>
        {inner}
      </Link>
    );
  }

  return <article className={className}>{inner}</article>;
}

function lessonHref(item, studyPath, paramKey) {
  return item.href ?? `${studyPath}?${paramKey}=${encodeURIComponent(item.id)}`;
}

function lessonTag(item) {
  if (item.state === "current") return "Next";
  if (item.state === "done") return "Done";
  return item.meta || null;
}

function OutlineLesson({ item, studyPath, paramKey }) {
  const tag = lessonTag(item);
  const inner = (
    <>
      <span className="course-outline-num">{item.state === "done" ? "✓" : item.num}</span>
      <span className="course-outline-copy">
        <span className="course-outline-name">{item.label}</span>
        {item.labelAr && (
          <span className="course-outline-ar" dir="rtl">{item.labelAr}</span>
        )}
      </span>
      {tag && <span className={`course-outline-tag is-${item.state}`}>{tag}</span>}
    </>
  );

  const className = `course-outline-lesson is-${item.state ?? "available"}`;
  if (!(studyPath || item.href)) {
    return <div className={className}>{inner}</div>;
  }

  return (
    <Link to={lessonHref(item, studyPath, paramKey)} className={className}>
      {inner}
    </Link>
  );
}

export default function CourseModuleOverview({
  banner,
  breadcrumbs,
  nameAr,
  title = "Lessons",
  studyPath,
  resumePath,
  resumeLabel = "Resume study",
  units = [],
  paramKey = "lesson",
  courseId,
  progressLabel = "complete",
  progressHref,
  progressHrefLabel = "Memorisation progress →",
  extraLinks = [],
  sequentialUnlock = false,
}) {
  const progress = useMemo(() => summarizeUnitsProgress(units), [units]);
  const gamified = useMemo(
    () => buildGamifiedUnits(units, { sequentialUnlock }),
    [units, sequentialUnlock],
  );
  const nextPath = resumePath || studyPath;
  const nextName = resumeLabel.replace(/^Resume:\s*/, "").replace(/^Start study$/, "");
  const started = progress.completed > 0;
  const countWord = progressLabel === "memorised" ? "memorised" : "done";

  return (
    <CourseLayout wide banner={banner} breadcrumbs={breadcrumbs} courseId={courseId}>
      <div className="course-outline-page">
        <header className="course-outline-bar">
          <div>
            {nameAr && <p className="course-outline-title-ar" dir="rtl">{nameAr}</p>}
            <h2>{title === "Course modules" ? "Lessons" : title}</h2>
            {progress.total > 0 && (
              <>
                <p className="course-outline-count">
                  {progress.completed} of {progress.total} {countWord}
                </p>
                <div className="course-outline-track" aria-hidden>
                  <span style={{ width: `${progress.pct}%` }} />
                </div>
              </>
            )}
          </div>
          <div className="course-outline-actions">
            <Link to={nextPath} className="course-btn primary">
              {started ? "Continue" : "Start"}
            </Link>
            {nextName && <span className="course-outline-next">{nextName}</span>}
            <Link to="/" className="course-outline-back">All courses</Link>
          </div>
        </header>
        {(extraLinks.length > 0 || progressHref) && (
          <div className="course-outline-more">
            {progressHref && (
              <Link to={progressHref} className="course-outline-back">{progressHrefLabel}</Link>
            )}
            {extraLinks.map((link) => (
              <Link key={link.to} to={link.to} className="course-outline-back">{link.label}</Link>
            ))}
          </div>
        )}

        <div className="course-outline">
          {gamified.units.map((unit) => (
            <section key={unit.id} className="course-outline-unit" aria-label={unit.title}>
              <header className="course-outline-unit-head">
                <h3>
                  {unit.kicker && <span>{unit.kicker}</span>}
                  {unit.title}
                </h3>
                {unit.total > 0 && <span>{unit.completed}/{unit.total}</span>}
              </header>
              <div className="course-outline-lessons">
                {unit.items.map((item) => (
                  <OutlineLesson
                    key={item.id}
                    item={item}
                    studyPath={studyPath}
                    paramKey={paramKey}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </CourseLayout>
  );
}

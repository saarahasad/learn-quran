import { useMemo } from "react";
import { Link } from "react-router-dom";
import CourseLayout, { CourseBreadcrumbs } from "./CourseLayout.jsx";
import "../styles/course-overview.css";
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
  if (item.state === "current") return "Up next";
  if (item.state === "done") return "Done";
  return item.meta || null;
}

const ACTIVITY_PREFIX = /^Activity\s*[·:–-]\s*/i;

function OutlineLesson({ item, studyPath, paramKey }) {
  const tag = lessonTag(item);
  const isActivity = ACTIVITY_PREFIX.test(item.label ?? "");
  const label = isActivity ? item.label.replace(ACTIVITY_PREFIX, "") : item.label;
  const inner = (
    <>
      <span className="ov-num" aria-hidden>{item.state === "done" ? "✓" : item.num}</span>
      <span className="ov-lesson-copy">
        <span className="ov-lesson-name">{label}</span>
        {item.labelAr && (
          <span className="ov-lesson-ar" dir="rtl" lang="ar">{item.labelAr}</span>
        )}
      </span>
      <span className="ov-lesson-tags">
        {isActivity && <span className="ov-chip ov-chip--activity">Activity</span>}
        {item.badge && <span className="ov-chip">{item.badge}</span>}
        {tag && <span className={`ov-chip ov-chip--${item.state ?? "available"}`}>{tag}</span>}
      </span>
    </>
  );

  const className = `ov-lesson is-${item.state ?? "available"}`;
  if (!(studyPath || item.href) || item.state === "locked") {
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

  const upNext = gamified.units.flatMap((unit) => unit.items).find((item) => item.state === "current");

  return (
    <CourseLayout wide courseId={courseId}>
      <div className="ov-page">
        {breadcrumbs && <CourseBreadcrumbs items={breadcrumbs} />}

        <header className="ov-hero">
          <div className="ov-hero-names">
            {nameAr && (
              <p className="ov-hero-ar" dir="rtl" lang="ar">
                {nameAr}
              </p>
            )}
            <h1>{banner?.title ?? title}</h1>
            {banner?.code && <p className="ov-hero-kind">{banner.code}</p>}
          </div>
          {banner?.subtitle && <p className="ov-hero-sub">{banner.subtitle}</p>}
          {banner?.meta?.length > 0 && (
            <dl className="ov-hero-facts">
              {banner.meta.map((item) => (
                <div key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
          )}

          <div className="ov-progress">
            {progress.total > 0 && (
              <div className="ov-progress-meter">
                <div className="ov-progress-text">
                  <strong>{progress.pct}%</strong>
                  <span>
                    {progress.completed} of {progress.total} lessons {countWord}
                  </span>
                </div>
                <div className="ov-progress-track" aria-hidden>
                  <span style={{ width: `${progress.pct}%` }} />
                </div>
              </div>
            )}
            <div className="ov-progress-cta">
              {(upNext?.label || nextName) && (
                <span className="ov-progress-next">
                  <span>Up next</span>
                  {upNext?.label ?? nextName}
                </span>
              )}
              <Link to={nextPath} className="ov-start">
                {started ? "Continue" : "Start course"}
              </Link>
            </div>
          </div>
        </header>

        {(extraLinks.length > 0 || progressHref) && (
          <nav className="ov-links" aria-label="Course tools">
            {progressHref && <Link to={progressHref}>{progressHrefLabel}</Link>}
            {extraLinks.map((link) => (
              <Link key={link.to} to={link.to}>{link.label}</Link>
            ))}
          </nav>
        )}

        <div className="ov-units">
          {gamified.units.map((unit) => {
            const pct = unit.total ? Math.round((unit.completed / unit.total) * 100) : 0;
            return (
              <section key={unit.id} className="ov-unit" aria-label={unit.title}>
                <header className="ov-unit-head">
                  <div>
                    {unit.kicker && <p className="ov-unit-kicker">{unit.kicker}</p>}
                    <h2>{unit.title}</h2>
                  </div>
                  {unit.total > 0 && (
                    <div className="ov-unit-count">
                      <span>
                        {unit.completed}/{unit.total}
                      </span>
                      <span className="ov-unit-track" aria-hidden>
                        <span style={{ width: `${pct}%` }} />
                      </span>
                    </div>
                  )}
                </header>
                <div className="ov-lessons">
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
            );
          })}
        </div>
      </div>
    </CourseLayout>
  );
}

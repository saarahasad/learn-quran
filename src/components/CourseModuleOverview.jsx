import { useMemo } from "react";
import { Link } from "react-router-dom";
import CourseLayout, { CourseOverviewProgress } from "./CourseLayout.jsx";
import {
  LESSON_XP,
  UNIT_COMPLETE_BONUS,
  buildGamifiedUnits,
  summarizeUnitsProgress,
} from "../utils/courseProgress.js";

function ProgressRing({ pct = 0, complete = false, size = 36 }) {
  const stroke = 3;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (pct / 100) * circumference;

  return (
    <svg
      className={`course-module-ring${complete ? " course-module-ring--complete" : ""}`}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      aria-hidden
    >
      <circle
        className="course-module-ring-track"
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        strokeWidth={stroke}
      />
      <circle
        className="course-module-ring-fill"
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        strokeWidth={stroke}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
      {complete && (
        <text
          x="50%"
          y="50%"
          dominantBaseline="central"
          textAnchor="middle"
          className="course-module-ring-check"
        >
          ✓
        </text>
      )}
    </svg>
  );
}

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

export default function CourseModuleOverview({
  banner,
  breadcrumbs,
  nameAr,
  title = "Course modules",
  description,
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
  sequentialUnlock = true,
}) {
  const progress = useMemo(() => summarizeUnitsProgress(units), [units]);
  const gamified = useMemo(
    () => buildGamifiedUnits(units, { sequentialUnlock }),
    [units, sequentialUnlock],
  );

  return (
    <CourseLayout wide banner={banner} breadcrumbs={breadcrumbs} courseId={courseId}>
      <div className="course-overview-intro course-card course-card--deep">
        {nameAr && (
          <p className="course-overview-ar" dir="rtl">
            {nameAr}
          </p>
        )}
        <h2>{title}</h2>
        {description && <p>{description}</p>}
        <CourseOverviewProgress
          pct={progress.pct}
          completed={progress.completed}
          total={progress.total}
          label={progressLabel}
          units={progress.units}
        />
        {gamified.totalXpAvailable > 0 && (
          <div className="course-overview-xp" aria-label={`${gamified.totalXpEarned} of ${gamified.totalXpAvailable} XP earned`}>
            <div className="course-overview-xp-header">
              <span className="course-overview-xp-label">Experience</span>
              <span className="course-overview-xp-value">
                {gamified.totalXpEarned}
                <span className="course-overview-xp-total"> / {gamified.totalXpAvailable} XP</span>
              </span>
            </div>
            <div className="course-overview-xp-track" aria-hidden>
              <div
                className="course-overview-xp-fill"
                style={{
                  width: `${Math.round((gamified.totalXpEarned / gamified.totalXpAvailable) * 100)}%`,
                }}
              />
            </div>
          </div>
        )}
        <div className="course-overview-actions">
          <Link to={studyPath} className="course-btn primary">
            Start study →
          </Link>
          {resumePath && resumePath !== studyPath && (
            <Link to={resumePath} className="course-btn secondary">
              {resumeLabel}
            </Link>
          )}
          {extraLinks.map((link) => (
            <Link key={link.to} to={link.to} className={link.className ?? "course-btn secondary"}>
              {link.label}
            </Link>
          ))}
          {progressHref && (
            <Link to={progressHref} className="course-btn secondary">
              {progressHrefLabel}
            </Link>
          )}
          <Link to="/" className="course-btn ghost">
            ← All courses
          </Link>
        </div>
      </div>

      {gamified.units.map((unit) => (
        <section key={unit.id} className="course-module-section" aria-label={unit.title}>
          <div className="course-module-heading">
            <div>
              {unit.kicker && <p className="course-module-kicker">{unit.kicker}</p>}
              <h2>{unit.title}</h2>
            </div>
            <div className="course-module-heading-meta">
              {unit.total > 0 ? (
                <>
                  <ProgressRing pct={unit.pct} complete={unit.unitComplete} />
                  <div className="course-module-heading-stats">
                    {unit.unitComplete ? (
                      <span className="course-module-complete-badge">
                        Complete · +{UNIT_COMPLETE_BONUS} XP
                      </span>
                    ) : (
                      <>
                        <span className="course-module-count">
                          {unit.completed}/{unit.total}{" "}
                          {progressLabel === "memorised" ? "memorised" : "complete"}
                        </span>
                        <span className="course-module-xp-hint">
                          {unit.xpEarned}/{unit.xpAvailable} XP
                        </span>
                      </>
                    )}
                  </div>
                </>
              ) : (
                <span className="course-module-count">
                  {unit.items.length} {unit.items.length === 1 ? "tool" : "tools"}
                </span>
              )}
            </div>
          </div>
          <div className="course-module-grid">
            {unit.items.map((item) => (
              <CourseModuleCard
                key={item.id}
                item={item}
                studyPath={studyPath}
                paramKey={paramKey}
              />
            ))}
          </div>
        </section>
      ))}
    </CourseLayout>
  );
}

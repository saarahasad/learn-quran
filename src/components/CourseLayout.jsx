import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LEARN_ISLAM, getCourseTheme } from "../data/platform.js";
import { courseThemeClass, courseThemeStyle, resolveCourseIdFromPath } from "../utils/courseTheme.js";
import AuthWidget from "./AuthWidget.jsx";
import "../styles/course-theme.css";

const NAV_ITEMS = [{ id: "home", label: "Courses", path: "/" }];
const SIDEBAR_COLLAPSED_KEY = "course_sidebar_collapsed_v1";

export function CourseHeader() {
  const { pathname } = useLocation();

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link to="/" className="site-header-brand" aria-label={LEARN_ISLAM.name}>
          <span className="site-header-brand-ar" dir="rtl">{LEARN_ISLAM.nameAr}</span>
          <span className="site-header-brand-en">{LEARN_ISLAM.name}</span>
        </Link>
        <nav className="site-header-nav" aria-label="Main">
          {pathname !== "/" && NAV_ITEMS.map((item) => {
            const isActive = item.path === "/"
              ? pathname === "/"
              : pathname.startsWith(item.path);
            return (
              <Link key={item.id} to={item.path} className={isActive ? "active" : ""}>
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="site-header-actions">
          <AuthWidget />
        </div>
      </div>
    </header>
  );
}

export function CourseTabs() {
  return null;
}

export function CourseBanner({ code, title, subtitle, meta = [], hero = false }) {
  if (hero) {
    return (
      <section className="page-hero" aria-labelledby="course-banner-title">
        <div className="page-hero-inner">
          {code && <p className="page-hero-kicker">{code}</p>}
          <h1 id="course-banner-title">{title}</h1>
          {subtitle && <p className="page-hero-subtitle">{subtitle}</p>}
          {meta.length > 0 && (
            <div className="page-hero-stats">
              {meta.map((item) => (
                <div key={item.label} className="page-hero-stat">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className="course-banner" aria-labelledby="course-banner-title">
      <div className="course-banner-inner">
        {code && <p className="course-banner-code">{code}</p>}
        <h1 id="course-banner-title">{title}</h1>
        {subtitle && <p className="course-banner-subtitle">{subtitle}</p>}
        {meta.length > 0 && (
          <div className="course-banner-meta">
            {meta.map((item) => (
              <div key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export function CourseBreadcrumbs({ items = [] }) {
  if (!items.length) return null;

  return (
    <nav className="course-breadcrumbs" aria-label="Breadcrumb">
      {items.map((item, index) => (
        <span key={item.label} style={{ display: "contents" }}>
          {index > 0 && <span aria-hidden>›</span>}
          {item.to ? <Link to={item.to}>{item.label}</Link> : <span>{item.label}</span>}
        </span>
      ))}
    </nav>
  );
}

export function CourseSidebar({ title = "Course outline", className = "", children }) {
  return (
    <aside className={["course-sidebar", className].filter(Boolean).join(" ")} aria-label={title}>
      <p className="course-sidebar-heading">{title}</p>
      {children}
    </aside>
  );
}

export function CourseSidebarUnit({ title, titleAr, kicker, children }) {
  return (
    <div className="course-sidebar-unit">
      <div className="course-sidebar-unit-title" aria-hidden>
        {kicker || titleAr ? (
          <>
            <div className="course-sidebar-unit-copy">
              {kicker && <p className="course-sidebar-unit-kicker">{kicker}</p>}
              <span className="course-sidebar-unit-name">{title}</span>
            </div>
            {titleAr ? (
              <span className="course-sidebar-unit-title-ar" dir="rtl" lang="ar">
                {titleAr}
              </span>
            ) : null}
          </>
        ) : (
          title
        )}
      </div>
      <ul className="course-sidebar-lessons">{children}</ul>
    </div>
  );
}

export function CourseSidebarProgress({ pct, label }) {
  return (
    <div className="course-sidebar-progress" aria-label={label ?? `${pct}% complete`}>
      <div className="course-sidebar-progress-track">
        <div className="course-sidebar-progress-fill" style={{ width: `${pct}%` }} />
      </div>
      <span className="course-sidebar-progress-label">{label ?? `${pct}%`}</span>
    </div>
  );
}

export function CourseOverviewProgress({
  pct = 0,
  completed = 0,
  total = 0,
  label = "complete",
  units = [],
}) {
  if (!total) return null;

  const progressLabel =
    label === "memorised"
      ? `${pct}% memorised · ${completed} of ${total} surahs`
      : `${pct}% complete · ${completed} of ${total} lessons`;

  return (
    <div className="course-overview-progress" aria-label={progressLabel}>
      <div className="course-overview-progress-header">
        <span className="course-overview-progress-label">{progressLabel}</span>
        <span className="course-overview-progress-pct">{pct}%</span>
      </div>
      <div className="course-overview-progress-track" aria-hidden>
        <div className="course-overview-progress-fill" style={{ width: `${pct}%` }} />
      </div>
      {units.length > 1 && (
        <ul className="course-overview-unit-progress">
          {units.map((unit) => (
            <li key={unit.id}>
              <span className="course-overview-unit-title">{unit.title}</span>
              <span className="course-overview-unit-count">
                {unit.completed}/{unit.total}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function CourseLessonKicker({ label, title, titleAr, subtitle, children }) {
  return (
    <div className="course-card course-lesson-header">
      {label && <p className="course-lesson-kicker">{label}</p>}
      {titleAr && (
        <span className="course-lesson-title-ar" dir="rtl">
          {titleAr}
        </span>
      )}
      {title && <h2>{title}</h2>}
      {subtitle && <p className="course-lesson-subtitle">{subtitle}</p>}
      {children}
    </div>
  );
}

export function CourseLessonNav({
  onPrev,
  onNext,
  hasPrev = true,
  hasNext = true,
  prevLabel = "← Previous",
  nextLabel = "Next →",
  children,
}) {
  return (
    <div className="course-lesson-nav">
      {children}
      <button type="button" className="course-btn secondary" disabled={!hasPrev} onClick={onPrev}>
        {prevLabel}
      </button>
      <button type="button" className="course-btn primary" disabled={!hasNext} onClick={onNext}>
        {nextLabel}
      </button>
    </div>
  );
}

export default function CourseLayout({
  activeTab,
  banner,
  breadcrumbs,
  sidebar,
  wide = false,
  fullWidth = false,
  lesson = false,
  courseId,
  themeColor,
  children,
}) {
  const { pathname } = useLocation();
  const resolvedColor =
    themeColor ?? getCourseTheme(courseId ?? resolveCourseIdFromPath(pathname)).color;
  const themeClass = courseThemeClass(resolvedColor);
  const themeStyle = courseThemeStyle(resolvedColor);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(() => {
    if (typeof window === "undefined") return false;
    try {
      return window.localStorage.getItem(SIDEBAR_COLLAPSED_KEY) === "1";
    } catch {
      return false;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(SIDEBAR_COLLAPSED_KEY, sidebarCollapsed ? "1" : "0");
    } catch {
      /* ignore */
    }
  }, [sidebarCollapsed]);

  if (lesson) {
    return (
      <div className={`course-lesson-shell${themeClass ? ` ${themeClass}` : ""}`} style={themeStyle}>
        <CourseHeader />
        {breadcrumbs && <CourseBreadcrumbs items={breadcrumbs} />}
        {children}
      </div>
    );
  }

  return (
    <div className={`site-shell${themeClass ? ` ${themeClass}` : ""}`} style={themeStyle}>
      <CourseHeader />
      {banner && <CourseBanner {...banner} />}
      {sidebar ? (
        <div
          className={`course-body${sidebarCollapsed ? " course-body--sidebar-collapsed" : ""}`}
        >
          <div className="course-sidebar-rail">
            <button
              type="button"
              className="course-sidebar-toggle"
              aria-expanded={!sidebarCollapsed}
              aria-controls="course-sidebar-panel"
              title={sidebarCollapsed ? "Show course outline" : "Hide course outline"}
              onClick={() => setSidebarCollapsed((v) => !v)}
            >
              <span className="course-sidebar-toggle__icon" aria-hidden>
                {sidebarCollapsed ? "»" : "«"}
              </span>
              <span className="course-sidebar-toggle__label">
                {sidebarCollapsed ? "Outline" : "Hide"}
              </span>
            </button>
            <div id="course-sidebar-panel" className="course-sidebar-panel" hidden={sidebarCollapsed}>
              {sidebar}
            </div>
          </div>
          <main className="course-main">
            {breadcrumbs && <CourseBreadcrumbs items={breadcrumbs} />}
            <div
              className={`course-main-inner${fullWidth ? " full" : wide ? " wide" : ""}`}
            >
              {children}
            </div>
          </main>
        </div>
      ) : (
        <>
          {breadcrumbs && <CourseBreadcrumbs items={breadcrumbs} />}
          <main className="course-main">
            <div
              className={`course-main-inner${fullWidth ? " full" : wide ? " wide" : ""}`}
            >
              {children}
            </div>
          </main>
        </>
      )}
    </div>
  );
}

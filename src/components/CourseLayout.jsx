import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LEARN_ISLAM, getCourseTheme } from "../data/platform.js";
import { courseThemeClass, courseThemeStyle, resolveCourseIdFromPath } from "../utils/courseTheme.js";
import AuthWidget from "./AuthWidget.jsx";
import "../styles/course-theme.css";

const NAV_ITEMS = [{ id: "home", label: "Courses", path: "/" }];
const SIDEBAR_COLLAPSED_KEY = "course_sidebar_collapsed_v1";
const DRAWER_QUERY = "(max-width: 1023px)";

function useMediaQuery(query) {
  const [matches, setMatches] = useState(() =>
    typeof window !== "undefined" && window.matchMedia ? window.matchMedia(query).matches : false,
  );
  useEffect(() => {
    if (!window.matchMedia) return undefined;
    const mql = window.matchMedia(query);
    const onChange = () => setMatches(mql.matches);
    onChange();
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [query]);
  return matches;
}

/** Eight-pointed star (two squares), the mark used to divide the Qur'an into sections. */
export function BrandMark({ size = 38 }) {
  return (
    <svg className="site-header-mark" width={size} height={size} viewBox="0 0 40 40" aria-hidden="true">
      <rect width="40" height="40" rx="11" fill="#14532d" />
      <g transform="translate(20 20)" fill="none" stroke="#e2b763" strokeWidth="1.9" strokeLinejoin="round">
        <rect x="-9.5" y="-9.5" width="19" height="19" />
        <rect x="-9.5" y="-9.5" width="19" height="19" transform="rotate(45)" />
      </g>
      <circle cx="20" cy="20" r="3.1" fill="#e2b763" />
    </svg>
  );
}

export function CourseHeader() {
  const { pathname } = useLocation();

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link to="/" className="site-header-brand" aria-label={`${LEARN_ISLAM.name} — home`}>
          <BrandMark />
          <span className="site-header-wordmark">
            <span className="site-header-brand-ar" dir="rtl" lang="ar">{LEARN_ISLAM.nameAr}</span>
            <span className="site-header-brand-en">{LEARN_ISLAM.name}</span>
          </span>
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

  /* Below 1024px the outline becomes an off-canvas drawer */
  const isDrawer = useMediaQuery(DRAWER_QUERY);
  /* Remember which path the drawer was opened on: navigating or widening closes it */
  const [drawerOpenedAt, setDrawerOpenedAt] = useState(null);
  const drawerOpen = isDrawer && drawerOpenedAt === pathname;
  const setDrawerOpen = (open) => setDrawerOpenedAt(open ? pathname : null);
  const drawerRef = useRef(null);

  useEffect(() => {
    if (!drawerOpen) return undefined;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event) => {
      if (event.key === "Escape") setDrawerOpenedAt(null);
    };
    window.addEventListener("keydown", onKey);
    const frame = window.requestAnimationFrame(() => {
      const panel = drawerRef.current;
      panel?.querySelector(".active")?.scrollIntoView({ block: "center" });
      panel?.querySelector(".course-drawer__close")?.focus({ preventScroll: true });
    });
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
      window.cancelAnimationFrame(frame);
    };
  }, [drawerOpen]);

  /* Picking a lesson inside the drawer closes it */
  const onDrawerClick = (event) => {
    const hit = event.target.closest("a[href], li button");
    if (hit && drawerRef.current?.contains(hit)) setDrawerOpen(false);
  };

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
      {sidebar && isDrawer ? (
        <div className="course-body course-body--drawer">
          <div className="course-navbar">
            <button
              type="button"
              className="course-outline-trigger"
              aria-expanded={drawerOpen}
              aria-controls="course-drawer-panel"
              onClick={() => setDrawerOpen(true)}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
                <path d="M4 6h16M4 12h16M4 18h10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" fill="none" />
              </svg>
              <span>Outline</span>
            </button>
            {breadcrumbs && <CourseBreadcrumbs items={breadcrumbs} />}
          </div>
          <div
            className={`course-drawer${drawerOpen ? " is-open" : ""}`}
            aria-hidden={!drawerOpen}
            inert={drawerOpen ? undefined : ""}
          >
            <div className="course-drawer__backdrop" onClick={() => setDrawerOpen(false)} />
            <div
              id="course-drawer-panel"
              className="course-drawer__panel"
              role="dialog"
              aria-modal="true"
              aria-label="Course outline"
              ref={drawerRef}
              onClick={onDrawerClick}
            >
              <div className="course-drawer__head">
                <span>Course outline</span>
                <button
                  type="button"
                  className="course-drawer__close"
                  aria-label="Close outline"
                  onClick={() => setDrawerOpen(false)}
                >
                  ×
                </button>
              </div>
              <div className="course-drawer__body">{sidebar}</div>
            </div>
          </div>
          <main className="course-main">
            <div className={`course-main-inner${fullWidth ? " full" : wide ? " wide" : ""}`}>
              {children}
            </div>
          </main>
        </div>
      ) : sidebar ? (
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

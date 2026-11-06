import { Link } from "react-router-dom";
import { AJRUMIYYAH_CHAPTERS } from "../data/ajrumiyyahCourse.js";
import { AQEEDAH2_STUDY_LESSONS } from "../data/aqeedah2Course.js";
import { TARBIYAH2_STUDY_LESSONS } from "../data/tarbiyah2Course.js";
import { TAFSIR2_STUDY_LESSONS } from "../data/tafsir2Course.js";
import { HADITH2_STUDY_LESSONS } from "../data/hadith2Course.js";
import { FIQH_LESSONS } from "../data/fiqhCourse.js";
import { getAvailableLandingCourses } from "../data/platform.js";
import { TARBIYAH_CHAPTERS } from "../data/tarbiyahCourse.js";
import { useDiaryStore } from "../hooks/useDiaryStore.js";
import { getCourseProgressSummary } from "../utils/courseProgress.js";
import { courseThemeStyle } from "../utils/courseTheme.js";
import CourseLayout from "../components/CourseLayout.jsx";
import "./LandingPage.css";

const COURSE_LESSON_IDS = {
  ajrumiyyah: AJRUMIYYAH_CHAPTERS.map((chapter) => chapter.id),
  tarbiyah: TARBIYAH_CHAPTERS.map((chapter) => chapter.id),
  fiqh: FIQH_LESSONS.filter((lesson) => lesson.id !== "home").map((lesson) => lesson.id),
  "aqeedah-2": AQEEDAH2_STUDY_LESSONS.map((lesson) => lesson.id),
  "tarbiyah-2": TARBIYAH2_STUDY_LESSONS.map((lesson) => lesson.id),
  "tafsir-2": TAFSIR2_STUDY_LESSONS.map((lesson) => lesson.id),
  "hadith-2": HADITH2_STUDY_LESSONS.map((lesson) => lesson.id),
};

function courseGroups(courses) {
  const groups = [];
  for (const course of courses) {
    const last = groups[groups.length - 1];
    if (last?.category === course.category) last.courses.push(course);
    else groups.push({ category: course.category, courses: [course] });
  }
  return groups;
}

function countWord(n, singular, plural = `${singular}s`) {
  return `${n} ${n === 1 ? singular : plural}`;
}

const JUZ_NAME_AR = { "juz-1": "الجزء الأول", "juz-30": "جزء عمّ" };

const CATEGORY_AR = {
  "Qur'an": "القرآن",
  "Islamic Education": "التربية الإسلامية",
  Fiqh: "الفقه",
  Tafsir: "التفسير",
  Hadith: "الحديث",
  Aqeedah: "العقيدة",
  "Arabic Grammar": "النحو",
};

function CourseCard({ course, progress }) {
  const themeStyle = courseThemeStyle(course.color);
  const started = course.kind !== "juz" && progress.total > 0 && progress.pct > 0;
  const summary = course.range || course.tagline || course.description;
  const nameAr = course.nameAr ?? JUZ_NAME_AR[course.id] ?? null;

  return (
    <Link to={course.path} className="li-card course-themed" style={themeStyle}>
      {nameAr && (
        <span className="li-card-ar" dir="rtl" lang="ar">
          {nameAr}
        </span>
      )}
      <h3 className="li-card-title">{course.name}</h3>
      {summary && <p className="li-card-summary">{summary}</p>}
      <div className="li-card-foot">
        {started ? (
          <span className="li-card-progress" aria-label={`${progress.pct}% complete`}>
            <span className="li-card-progress-track">
              <span style={{ width: `${progress.pct}%` }} />
            </span>
            <span>{progress.pct}%</span>
          </span>
        ) : null}
        <span className="li-card-go" aria-hidden>
          <svg width="16" height="16" viewBox="0 0 24 24">
            <path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </Link>
  );
}

export default function LandingPage() {
  const { diary } = useDiaryStore();
  const courses = getAvailableLandingCourses();

  const getProgress = (course) =>
    getCourseProgressSummary(course.id, {
      lessonIds: COURSE_LESSON_IDS[course.id] ?? [],
      diary,
    });

  const groups = courseGroups(courses);

  return (
    <CourseLayout activeTab="home" wide>
      <div className="li-page">
        <header className="li-hero">
          <p className="li-hero-ar" dir="rtl" lang="ar">الدورات</p>
          <h1>Courses</h1>
          <p className="li-hero-sub">
            {countWord(courses.length, "course")} across {countWord(groups.length, "subject")}
          </p>
        </header>
        <div className="li-groups">
          {groups.map((group) => {
            const groupId = `catalog-${group.category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
            return (
              <section key={group.category} className="li-group" aria-labelledby={groupId}>
                <header className="li-group-head">
                  <h2 id={groupId}>{group.category}</h2>
                  {CATEGORY_AR[group.category] && (
                    <span className="li-group-ar" dir="rtl" lang="ar">
                      {CATEGORY_AR[group.category]}
                    </span>
                  )}
                </header>
                <div className="li-grid">
                  {group.courses.map((course) => (
                    <CourseCard key={course.id} course={course} progress={getProgress(course)} />
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

import { Link } from "react-router-dom";
import { AJRUMIYYAH_CHAPTERS } from "../data/ajrumiyyahCourse.js";
import { AQEEDAH2_STUDY_LESSONS } from "../data/aqeedah2Course.js";
import { TARBIYAH2_STUDY_LESSONS } from "../data/tarbiyah2Course.js";
import { TAFSIR2_STUDY_LESSONS } from "../data/tafsir2Course.js";
import { HADITH2_STUDY_LESSONS } from "../data/hadith2Course.js";
import { FIQH_LESSONS } from "../data/fiqhCourse.js";
import { getAvailableLandingCourses, LANDING_FORMATS } from "../data/platform.js";
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

function countWord(n, singular, plural = `${singular}s`) {
  return `${n} ${n === 1 ? singular : plural}`;
}

function coverUrl(file) {
  return `${import.meta.env.BASE_URL}course-covers/${file}`;
}

function CourseCard({ course, progress }) {
  const themeStyle = courseThemeStyle(course.color);
  const started = course.kind !== "juz" && progress.total > 0 && progress.pct > 0;
  const summary = course.blurb || course.description;

  return (
    <Link to={course.path} className="li-card course-themed" style={themeStyle}>
      <div className="li-cover">
        {course.cover && (
          <img className="li-cover-img" src={coverUrl(course.cover)} alt="" />
        )}
        <div className="li-poster">
          {course.posterKicker && <p className="li-poster-kicker">{course.posterKicker}</p>}
          <h3 className="li-poster-title">{course.name}</h3>
          {course.posterLine && <p className="li-poster-line">{course.posterLine}</p>}
        </div>
      </div>
      <div className="li-card-body">
        {course.school && <p className="li-card-school">{course.school}</p>}
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

  const formats = LANDING_FORMATS.map((format) => ({
    ...format,
    courses: courses.filter((course) => course.format === format.id),
  })).filter((format) => format.courses.length > 0);

  const tally = formats
    .map((format) => {
      if (format.id === "memorise") return countWord(format.courses.length, "memorisation program");
      if (format.id === "notes") return countWord(format.courses.length, "set of notes", "sets of notes");
      return countWord(format.courses.length, "course");
    })
    .join(", ")
    .replace(/, ([^,]*)$/, ", and $1");

  return (
    <CourseLayout activeTab="home" wide>
      <div className="li-page">
        <header className="li-hero">
          <p className="li-hero-ar" dir="rtl" lang="ar">الدراسة</p>
          <h1>Study</h1>
          <p className="li-hero-sub">{tally}</p>
        </header>
        <div className="li-groups">
          {formats.map((format) => {
            const groupId = `catalog-${format.id}`;
            return (
              <section key={format.id} className="li-group" aria-labelledby={groupId}>
                <header className="li-group-head">
                  <div>
                    <h2 id={groupId}>{format.title}</h2>
                    <p className="li-group-blurb">{format.blurb}</p>
                  </div>
                  <span className="li-group-ar" dir="rtl" lang="ar">
                    {format.titleAr}
                  </span>
                </header>
                <div className="li-grid">
                  {format.courses.map((course) => (
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

import { Link } from "react-router-dom";
import { AJRUMIYYAH_CHAPTERS } from "../data/ajrumiyyahCourse.js";
import { getAvailableJuzCourses, juzCoursePath } from "../data/courseUnits.js";
import { FIQH_LESSONS } from "../data/fiqhCourse.js";
import { getAvailableLandingCourses, getCourseTheme } from "../data/platform.js";
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
};

const platformFeatures = [
  "Self-paced open courses — learn at your own rhythm",
  "Structured lessons with clear progression and revision tools",
  "Arabic text with transliteration, translation, and explanations",
  "Private progress tracking across every course you take",
];

function CourseCard({ course, progress }) {
  const themeStyle = courseThemeStyle(course.color);
  const progressText =
    progress.label === "memorised"
      ? `${progress.pct}% memorised`
      : `${progress.pct}% complete`;

  return (
    <Link
      to={course.path}
      className="course-catalog-card course-themed"
      style={themeStyle}
    >
      <div className="course-catalog-card-top">
        <span className="course-catalog-category">{course.category}</span>
        <span className="course-catalog-mark" aria-hidden>
          {course.number}
        </span>
      </div>

      <div className="course-catalog-card-body">
        {course.nameAr && (
          <span className="course-catalog-ar" dir="rtl">
            {course.nameAr}
          </span>
        )}
        <h3>{course.name}</h3>

        {(course.meta || course.range) && (
          <ul className="course-catalog-stats">
            {course.meta && <li>{course.meta}</li>}
            {course.range && <li>{course.range}</li>}
          </ul>
        )}

        <p className="course-catalog-desc">{course.description}</p>

        {course.topics?.length > 0 && (
          <div className="course-catalog-topics">
            {course.topics.slice(0, 3).map((topic) => (
              <span key={topic} className="course-topic-pill">
                {topic}
              </span>
            ))}
          </div>
        )}
      </div>

      {course.kind !== "juz" && progress.total > 0 && (
        <div className="course-catalog-progress" aria-label={progressText}>
          <div className="course-catalog-progress-track">
            <div
              className="course-catalog-progress-fill"
              style={{ width: `${progress.pct}%` }}
            />
          </div>
          <span className="course-catalog-progress-label">{progressText}</span>
        </div>
      )}

      <div className="course-catalog-footer">
        <span className="course-catalog-access">Open access · Free</span>
        <span className="course-catalog-cta">Start course →</span>
      </div>
    </Link>
  );
}

export default function LandingPage() {
  const { diary } = useDiaryStore();
  const courses = getAvailableLandingCourses();
  const firstJuz = getAvailableJuzCourses()[0];
  const continueTheme = firstJuz ? getCourseTheme(`juz-${firstJuz.juz}`) : null;

  const getProgress = (course) =>
    getCourseProgressSummary(course.id, {
      lessonIds: COURSE_LESSON_IDS[course.id] ?? [],
      diary,
    });

  return (
    <CourseLayout activeTab="home" wide>
      <section className="course-catalog" aria-label="Course catalogue">
        <h1 className="course-catalog-heading">
          Guide yourself through the Qur&apos;an, one step at a time.
        </h1>
        <div className="course-catalog-grid">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} progress={getProgress(course)} />
          ))}
        </div>
      </section>

      <div className="platform-bottom">
        <section className="course-card platform-features">
          <h2>How Learn Islam works</h2>
          <ul className="about-outcomes">
            {platformFeatures.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </section>

        <aside className="platform-aside">
          <div className="course-card about-ar-card" dir="rtl">
            <p className="about-ar-label">Platform verse</p>
            <blockquote>ٱقْرَأْ بِٱسْمِ رَبِّكَ ٱلَّذِى خَلَقَ</blockquote>
            <cite>— Sūrah al-ʿAlaq, 96:1</cite>
          </div>

          {firstJuz && (
            <div
              className="course-card platform-continue course-themed"
              style={courseThemeStyle(continueTheme?.color)}
            >
              <h3>Continue learning</h3>
              <p>Pick up where you left off in {firstJuz.shortTitle}.</p>
              <Link to={juzCoursePath(firstJuz.juz)} className="course-btn primary">
                Open {firstJuz.shortTitle} →
              </Link>
            </div>
          )}
        </aside>
      </div>
    </CourseLayout>
  );
}

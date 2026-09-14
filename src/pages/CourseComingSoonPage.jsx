import { Link, Navigate } from "react-router-dom";
import { getAvailableJuzCourses, juzCoursePath } from "../data/courseUnits.js";
import { comingSoonBanner, getCourse, LEARN_ISLAM } from "../data/platform.js";
import CourseLayout from "../components/CourseLayout.jsx";
import "./LandingPage.css";

export default function CourseComingSoonPage({ courseId }) {
  const course = getCourse(courseId);

  if (!course) {
    return <Navigate to="/" replace />;
  }

  if (course.available) {
    return <Navigate to={course.path} replace />;
  }

  const firstJuz = getAvailableJuzCourses()[0];

  return (
    <CourseLayout
      banner={comingSoonBanner(course)}
      breadcrumbs={[
        { label: LEARN_ISLAM.name, to: "/" },
        { label: course.name },
      ]}
      wide
    >
      <div className="course-coming-soon course-card course-card--deep">
        <p className="course-coming-soon-ar" dir="rtl">
          {course.nameAr}
        </p>
        <h2>{course.name} course — coming soon</h2>
        <p>{course.description}</p>
        <div className="course-coming-soon-topics">
          {course.topics?.map((topic) => (
            <span key={topic} className="course-topic-pill">
              {topic}
            </span>
          ))}
        </div>
      </div>

      {course.plannedLessons?.length > 0 && (
        <section className="course-card course-planned-lessons course-card--green">
          <h2>Planned lessons</h2>
          <ol className="about-outcomes course-planned-list">
            {course.plannedLessons.map((lesson) => (
              <li key={lesson}>{lesson}</li>
            ))}
          </ol>
        </section>
      )}

      <div className="course-coming-soon-actions">
        <Link to="/" className="course-btn secondary">
          ← All courses
        </Link>
        {firstJuz && (
          <Link to={juzCoursePath(firstJuz.juz)} className="course-btn primary">
            Start {firstJuz.shortTitle} →
          </Link>
        )}
      </div>
    </CourseLayout>
  );
}

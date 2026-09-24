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

function courseFacts(course) {
  const size = (course.meta ?? "")
    .split(" · ")
    .filter((part) => /\d/.test(part) && /page|surah|chapter|unit|lesson/i.test(part))
    .slice(0, 2);
  const topicCount = course.topics?.length ?? 0;
  if (topicCount > 0) size.push(countWord(topicCount, "topic"));
  return size.join(" · ");
}

function CourseRow({ course, index, progress }) {
  const themeStyle = courseThemeStyle(course.color);
  const started = course.kind !== "juz" && progress.total > 0 && progress.pct > 0;
  const summary = course.range || course.tagline || course.description;
  const facts = courseFacts(course);

  return (
    <Link
      to={course.path}
      className="course-row course-themed"
      style={themeStyle}
    >
      <span className="course-row-num">{index}</span>
      <div className="course-row-main">
        <div className="course-row-title">
          <h3>{course.name}</h3>
          {course.nameAr && (
            <span className="course-row-ar" dir="rtl">
              {course.nameAr}
            </span>
          )}
        </div>
        {summary && <p className="course-row-summary">{summary}</p>}
      </div>
      <div className="course-row-side">
        {facts && <span className="course-row-meta">{facts}</span>}
        {started && <span className="course-row-progress">{progress.pct}%</span>}
      </div>
      <span className="course-row-open" aria-hidden>›</span>
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
  let courseIndex = 0;

  return (
    <CourseLayout activeTab="home" wide>
      <section className="course-catalog" aria-label="Course catalogue">
        <header className="course-catalog-intro">
          <h1>Courses</h1>
          <div className="course-catalog-counts">
            <p>
              <strong>{courses.length}</strong>
              <span>{courses.length === 1 ? "course" : "courses"}</span>
            </p>
            <p>
              <strong>{groups.length}</strong>
              <span>{groups.length === 1 ? "topic" : "topics"}</span>
            </p>
          </div>
        </header>
        <div className="course-catalog-list">
          {groups.map((group) => {
            const groupId = `catalog-${group.category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
            return (
            <section key={group.category} className="course-catalog-group" aria-labelledby={groupId}>
              <div className="course-catalog-rows">
                <header className="course-catalog-group-head">
                  <h2 id={groupId}>{group.category}</h2>
                  <span>{countWord(group.courses.length, "course")}</span>
                </header>
                {group.courses.map((course) => {
                  courseIndex += 1;
                  return (
                    <CourseRow
                      key={course.id}
                      course={course}
                      index={courseIndex}
                      progress={getProgress(course)}
                    />
                  );
                })}
              </div>
            </section>
            );
          })}
        </div>
      </section>
    </CourseLayout>
  );
}

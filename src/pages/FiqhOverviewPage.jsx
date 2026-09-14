import {
  FIQH_LESSONS,
  FIQH_META,
  FIQH_UNITS,
  fiqhBanner,
  fiqhStudyPath,
} from "../data/fiqhCourse.js";
import { LEARN_ISLAM } from "../data/platform.js";
import CourseModuleOverview from "../components/CourseModuleOverview.jsx";
import { useCourseProgress } from "../hooks/useCourseProgress.js";

const STUDY_UNITS = FIQH_UNITS.filter((unit) => unit.id !== "overview");
const STUDY_LESSONS = FIQH_LESSONS.filter((lesson) => lesson.id !== "home");

export default function FiqhOverviewPage() {
  const { isDone } = useCourseProgress("fiqh");
  const studyPath = fiqhStudyPath();
  const resumeLesson =
    STUDY_LESSONS.find((lesson) => !isDone(lesson.id)) ?? STUDY_LESSONS[0];

  const units = STUDY_UNITS.map((unit) => ({
    id: unit.id,
    title: unit.title,
    items: unit.lessons.map((lesson) => ({
      id: lesson.id,
      num: lesson.icon,
      label: lesson.title,
      badge: lesson.badge,
      meta: lesson.kind === "tool" ? "Practice" : undefined,
      done: isDone(lesson.id),
    })),
  }));

  return (
    <CourseModuleOverview
      banner={fiqhBanner()}
      breadcrumbs={[
        { label: LEARN_ISLAM.name, to: "/" },
        { label: FIQH_META.name },
      ]}
      nameAr={FIQH_META.nameAr}
      description={FIQH_META.description}
      studyPath={studyPath}
      resumePath={
        resumeLesson ? `${studyPath}?lesson=${encodeURIComponent(resumeLesson.id)}` : studyPath
      }
      resumeLabel={resumeLesson ? `Resume: ${resumeLesson.title}` : "Start study"}
      units={units}
      paramKey="lesson"
      courseId="fiqh"
    />
  );
}

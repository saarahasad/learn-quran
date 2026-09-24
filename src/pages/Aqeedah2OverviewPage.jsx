import {
  AQEEDAH2_LESSONS,
  AQEEDAH2_META,
  AQEEDAH2_UNITS,
  aqeedah2Banner,
  aqeedah2StudyPath,
} from "../data/aqeedah2Course.js";
import { LEARN_ISLAM } from "../data/platform.js";
import CourseModuleOverview from "../components/CourseModuleOverview.jsx";
import { useCourseProgress } from "../hooks/useCourseProgress.js";

const STUDY_UNITS = AQEEDAH2_UNITS;
const STUDY_LESSONS = AQEEDAH2_LESSONS.filter((lesson) => lesson.kind !== "tool");

export default function Aqeedah2OverviewPage() {
  const { isDone } = useCourseProgress(AQEEDAH2_META.id);
  const studyPath = aqeedah2StudyPath();
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
      meta: lesson.kind === "tool" ? "Practice" : lesson.draft ? "Notes coming" : undefined,
      done: isDone(lesson.id),
      trackable: lesson.kind !== "tool",
    })),
  }));

  return (
    <CourseModuleOverview
      banner={aqeedah2Banner()}
      breadcrumbs={[
        { label: LEARN_ISLAM.name, to: "/" },
        { label: AQEEDAH2_META.name },
      ]}
      nameAr={AQEEDAH2_META.nameAr}
      description={AQEEDAH2_META.description}
      studyPath={studyPath}
      resumePath={
        resumeLesson ? `${studyPath}?lesson=${encodeURIComponent(resumeLesson.id)}` : studyPath
      }
      resumeLabel={resumeLesson ? `Resume: ${resumeLesson.title}` : "Start study"}
      units={units}
      paramKey="lesson"
      courseId={AQEEDAH2_META.id}
      sequentialUnlock={false}
    />
  );
}

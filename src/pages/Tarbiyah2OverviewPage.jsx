import {
  TARBIYAH2_LESSONS,
  TARBIYAH2_META,
  TARBIYAH2_UNITS,
  tarbiyah2Banner,
  tarbiyah2StudyPath,
} from "../data/tarbiyah2Course.js";
import { LEARN_ISLAM } from "../data/platform.js";
import CourseModuleOverview from "../components/CourseModuleOverview.jsx";
import { useCourseProgress } from "../hooks/useCourseProgress.js";

const STUDY_UNITS = TARBIYAH2_UNITS;
const STUDY_LESSONS = TARBIYAH2_LESSONS.filter((lesson) => lesson.kind !== "tool");

export default function Tarbiyah2OverviewPage() {
  const { isDone } = useCourseProgress(TARBIYAH2_META.id);
  const studyPath = tarbiyah2StudyPath();
  const resumeLesson =
    STUDY_LESSONS.find((lesson) => !isDone(lesson.id)) ?? STUDY_LESSONS[0];

  const units = STUDY_UNITS.map((unit) => ({
    id: unit.id,
    title: unit.title,
    kicker: unit.num ? `Unit ${unit.num}` : undefined,
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
      banner={tarbiyah2Banner()}
      breadcrumbs={[
        { label: LEARN_ISLAM.name, to: "/" },
        { label: TARBIYAH2_META.name },
      ]}
      nameAr={TARBIYAH2_META.nameAr}
      description={TARBIYAH2_META.description}
      studyPath={studyPath}
      resumePath={
        resumeLesson ? `${studyPath}?lesson=${encodeURIComponent(resumeLesson.id)}` : studyPath
      }
      resumeLabel={resumeLesson ? `Resume: ${resumeLesson.title}` : "Start study"}
      units={units}
      paramKey="lesson"
      courseId={TARBIYAH2_META.id}
      sequentialUnlock={false}
    />
  );
}

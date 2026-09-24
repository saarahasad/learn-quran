import {
  TAFSIR2_LESSONS,
  TAFSIR2_META,
  TAFSIR2_UNITS,
  tafsir2Banner,
  tafsir2StudyPath,
} from "../data/tafsir2Course.js";
import { LEARN_ISLAM } from "../data/platform.js";
import CourseModuleOverview from "../components/CourseModuleOverview.jsx";
import { useCourseProgress } from "../hooks/useCourseProgress.js";

const STUDY_UNITS = TAFSIR2_UNITS;
const STUDY_LESSONS = TAFSIR2_LESSONS.filter((lesson) => lesson.kind !== "tool");

export default function Tafsir2OverviewPage() {
  const { isDone } = useCourseProgress(TAFSIR2_META.id);
  const studyPath = tafsir2StudyPath();
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
      banner={tafsir2Banner()}
      breadcrumbs={[
        { label: LEARN_ISLAM.name, to: "/" },
        { label: TAFSIR2_META.name },
      ]}
      nameAr={TAFSIR2_META.nameAr}
      description={TAFSIR2_META.description}
      studyPath={studyPath}
      resumePath={
        resumeLesson ? `${studyPath}?lesson=${encodeURIComponent(resumeLesson.id)}` : studyPath
      }
      resumeLabel={resumeLesson ? `Resume: ${resumeLesson.title}` : "Start study"}
      units={units}
      paramKey="lesson"
      courseId={TAFSIR2_META.id}
      sequentialUnlock={false}
    />
  );
}

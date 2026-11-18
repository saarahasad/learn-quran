import {
  SEERAH2_LESSONS,
  SEERAH2_META,
  SEERAH2_UNITS,
  seerah2Banner,
  seerah2StudyPath,
} from "../data/seerah2Course.js";
import { LEARN_ISLAM } from "../data/platform.js";
import CourseModuleOverview from "../components/CourseModuleOverview.jsx";
import { useCourseProgress } from "../hooks/useCourseProgress.js";

const STUDY_UNITS = SEERAH2_UNITS;
const STUDY_LESSONS = SEERAH2_LESSONS.filter((lesson) => lesson.kind !== "tool");

export default function Seerah2OverviewPage() {
  const { isDone } = useCourseProgress(SEERAH2_META.id);
  const studyPath = seerah2StudyPath();
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
      banner={seerah2Banner()}
      breadcrumbs={[
        { label: LEARN_ISLAM.name, to: "/" },
        { label: SEERAH2_META.name },
      ]}
      nameAr={SEERAH2_META.nameAr}
      description={SEERAH2_META.description}
      studyPath={studyPath}
      resumePath={
        resumeLesson ? `${studyPath}?lesson=${encodeURIComponent(resumeLesson.id)}` : studyPath
      }
      resumeLabel={resumeLesson ? `Resume: ${resumeLesson.title}` : "Start study"}
      units={units}
      paramKey="lesson"
      courseId={SEERAH2_META.id}
      sequentialUnlock={false}
    />
  );
}

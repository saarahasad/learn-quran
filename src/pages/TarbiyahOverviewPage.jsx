import {
  TARBIYAH_CHAPTERS,
  TARBIYAH_META,
  tarbiyahBanner,
  tarbiyahStudyPath,
} from "../data/tarbiyahCourse.js";
import { LEARN_ISLAM } from "../data/platform.js";
import CourseModuleOverview from "../components/CourseModuleOverview.jsx";
import { useCourseProgress } from "../hooks/useCourseProgress.js";

export default function TarbiyahOverviewPage() {
  const { isDone } = useCourseProgress("tarbiyah");
  const studyPath = tarbiyahStudyPath();
  const resumeChapter =
    TARBIYAH_CHAPTERS.find((chapter) => !isDone(chapter.id)) ?? TARBIYAH_CHAPTERS[0];

  const units = [
    {
      id: "chapters",
      title: "Chapters",
      items: TARBIYAH_CHAPTERS.map((chapter) => ({
        id: chapter.id,
        num: chapter.num,
        label: chapter.title,
        done: isDone(chapter.id),
      })),
    },
    {
      id: "practice",
      title: "Practice",
      items: [
        { id: "flashcards", num: "🃏", label: "Flashcards", meta: "Practice", trackable: false },
        { id: "quiz", num: "✏️", label: "Knowledge Quiz", meta: "Practice", trackable: false },
      ],
    },
  ];

  return (
    <CourseModuleOverview
      banner={tarbiyahBanner()}
      breadcrumbs={[
        { label: LEARN_ISLAM.name, to: "/" },
        { label: TARBIYAH_META.name },
      ]}
      nameAr={TARBIYAH_META.nameAr}
      description="Study the rights of Allah, the Prophet, family, and society — one chapter at a time, with flashcards and quizzes."
      studyPath={studyPath}
      resumePath={
        resumeChapter
          ? `${studyPath}?chapter=${encodeURIComponent(resumeChapter.id)}`
          : studyPath
      }
      resumeLabel={resumeChapter ? `Resume: ${resumeChapter.title}` : "Start study"}
      units={units}
      paramKey="chapter"
      courseId="tarbiyah"
    />
  );
}

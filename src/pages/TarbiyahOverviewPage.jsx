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
    ...TARBIYAH_CHAPTERS.map((chapter) => ({
      id: chapter.id,
      kicker: `Chapter ${chapter.num}`,
      title: chapter.title,
      items: [
        {
          id: chapter.id,
          num: chapter.num,
          label: chapter.title,
          meta: "Notes & key points",
          done: isDone(chapter.id),
        },
      ],
    })),
    {
      id: "study-tools",
      title: "Study tools",
      items: [
        { id: "flashcards", num: "🃏", label: "Flashcards", meta: "Active recall", trackable: false },
        { id: "quiz", num: "✏️", label: "Knowledge Quiz", meta: "Test yourself", trackable: false },
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

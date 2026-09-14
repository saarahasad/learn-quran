import { useSearchParams } from "react-router-dom";
import AjrumiyyahCourseSidebar from "../components/AjrumiyyahCourseSidebar.jsx";
import NominativesMasteryDashboard from "../components/ajrumiyyah/NominativesMasteryDashboard.jsx";
import NominativesQuizView from "../components/ajrumiyyah/NominativesQuizView.jsx";
import CourseLayout from "../components/CourseLayout.jsx";
import { AJRUMIYYAH_META, ajrumiyyahCoursePath } from "../data/ajrumiyyahCourse.js";
import { LEARN_ISLAM } from "../data/platform.js";
import { isNominativesChapter } from "../data/nominativesMastery.js";
import "../styles/ajrumiyyah.css";
import "../styles/nominatives-mastery.css";

export default function NominativesMasteryPage() {
  const [params] = useSearchParams();
  const chapterId = params.get("chapter");
  const trackParam = params.get("track");
  const track = trackParam === "matn" || trackParam === "rule" ? trackParam : null;
  const inQuiz = chapterId === "all" || isNominativesChapter(chapterId);
  const quizChapterId = isNominativesChapter(chapterId) ? chapterId : null;

  return (
    <CourseLayout
      courseId="ajrumiyyah"
      breadcrumbs={[
        { label: LEARN_ISLAM.name, to: "/" },
        { label: AJRUMIYYAH_META.name, to: ajrumiyyahCoursePath() },
        { label: "Nominatives Trial" },
      ]}
      sidebar={
        <AjrumiyyahCourseSidebar
          activeTool="nominatives-quiz"
          activeChapterId={quizChapterId}
        />
      }
    >
      {inQuiz ? (
        <NominativesQuizView chapterId={quizChapterId} track={track} />
      ) : (
        <NominativesMasteryDashboard />
      )}
    </CourseLayout>
  );
}

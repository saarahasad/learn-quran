import BaqarahMemorizeQuiz from "./BaqarahMemorizeQuiz.jsx";
import {
  AYAH_61_LESSONS,
  AYAH_61_QUIZ_MODES,
  buildAyah61QuizDeck,
  getAyah61QuizMode,
} from "../../data/baqarahAyah61Quiz.js";

export default function BaqarahAyah61MemorizeQuiz() {
  return (
    <BaqarahMemorizeQuiz
      title="Learn āyah 61"
      ariaLabel="Learn and memorise āyah 61"
      lead={
        <>
          New to this āyah? Start with <strong>Learn</strong> (10 short parts with English). Then
          switch to <strong>Practice</strong> — begin with Beginner mode.
        </>
      }
      lessons={AYAH_61_LESSONS}
      quizModes={AYAH_61_QUIZ_MODES}
      buildQuizDeck={buildAyah61QuizDeck}
      getQuizMode={getAyah61QuizMode}
      completeTips={{
        mid: "Good progress. Re-run Beginner, then Food list.",
      }}
      whichCorrectMessages={{
        fail: "Not that one — compare with page 9.",
      }}
    />
  );
}

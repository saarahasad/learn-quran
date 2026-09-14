import BaqarahMemorizeQuiz from "./BaqarahMemorizeQuiz.jsx";
import {
  PAGE_10_LESSONS,
  PAGE_10_QUIZ_MODES,
  buildPage10QuizDeck,
  getPage10QuizMode,
} from "../../data/baqarahPage10Quiz.js";

export default function BaqarahPage10MemorizeQuiz({ compact = false, anchorId = "page-10-memorize-quiz" }) {
  return (
    <BaqarahMemorizeQuiz
      title="Page 10 drill · āyāt 62–69"
      ariaLabel="Rigorous memorisation drill for Al-Baqarah page 10"
      anchorId={anchorId}
      defaultTab="quiz"
      defaultModeId="drill"
      showLearnTab={!compact}
      lead={
        compact ? (
          <>
            <strong>What comes next</strong> · fill Arabic gaps · spot wrong lines · build each āyah.
            Run <strong>Drill</strong> twice, then recite on the mushaf.
          </>
        ) : (
          <>
            Arabic-first hifdh drill for <strong>62–69</strong>. Opens on <strong>Drill</strong> — what
            comes next, gaps, traps, āyah build. Run it twice before reciting from memory.
          </>
        )
      }
      lessons={PAGE_10_LESSONS}
      quizModes={PAGE_10_QUIZ_MODES}
      buildQuizDeck={buildPage10QuizDeck}
      getQuizMode={getPage10QuizMode}
      completeTips={{
        high: "Strong — recite page 10 on the mushaf without looking, then Full shuffle.",
        mid: "Run Drill again — focus on cow āyāt (67–69) and 62→63 bridge.",
        low: "Open Learn → read full Arabic once, then Drill.",
      }}
      whichCorrectMessages={{
        fail: "Not the mushaf line — check page 10.",
      }}
    />
  );
}

import { useState } from "react";
import { toArabicNum } from "../../utils/mushafText.js";

function truncateFeedback(text, max = 120) {
  if (!text || text.length <= max) return text;
  return `${text.slice(0, max).trim()}…`;
}

export default function HifdhRangeQuiz({
  questions,
  questionIndex,
  feedback,
  onContinue,
}) {
  const [picked, setPicked] = useState(null);
  const question = questions[questionIndex];

  if (!question) return null;

  const answered = picked != null;
  const isCorrect = picked === question.correct;
  const isArabicQuestion = question.type === "arabic";

  function handlePick(option) {
    if (answered) return;
    setPicked(option);
  }

  function handleContinue() {
    onContinue(isCorrect);
    setPicked(null);
  }

  return (
    <div className="hifdh-session__panel hifdh-session__panel--with-mushaf hifdh-range-quiz">
      <p className="hifdh-session__ayah-label">Recall quiz</p>
      <p className="hifdh-session__round">
        Question {questionIndex + 1} of {questions.length}
      </p>

      {feedback && answered && (
        <p className="hifdh-session__assess-feedback">{feedback}</p>
      )}

      <p className="hifdh-session__copy">{question.prompt}</p>

      {question.type === "translation" && (
        <p className="hifdh-session__range-quiz-arabic" dir="rtl">
          {question.arabic}
        </p>
      )}

      {question.type === "opening" && (
        <p className="hifdh-session__range-quiz-arabic hifdh-session__range-quiz-arabic--snippet" dir="rtl">
          {question.arabicSnippet}
        </p>
      )}

      {question.type === "arabic" && (
        <p className="hifdh-session__range-quiz-english">"{question.english}"</p>
      )}

      <div className="hifdh-session__range-quiz-options" role="group">
        {question.options.map((option, index) => {
          const isPicked = picked === option;
          const showCorrect = answered && option === question.correct;
          const showWrong = answered && isPicked && !isCorrect;

          return (
            <button
              key={`${question.id}-${index}`}
              type="button"
              className={[
                "hifdh-session__range-quiz-option",
                isArabicQuestion && "hifdh-session__range-quiz-option--arabic",
                showCorrect && "is-correct",
                showWrong && "is-wrong",
              ]
                .filter(Boolean)
                .join(" ")}
              dir={isArabicQuestion ? "rtl" : undefined}
              onClick={() => handlePick(option)}
              disabled={answered}
            >
              {option}
            </button>
          );
        })}
      </div>

      {answered && (
        <p className="hifdh-session__hint" aria-live="polite">
          {isCorrect ? (
            <>Correct — you know āyah {toArabicNum(question.ayahNumber)}.</>
          ) : isArabicQuestion ? (
            <>
              The correct text is āyah {toArabicNum(question.ayahNumber)}:{" "}
              <span dir="rtl" className="hifdh-session__range-quiz-feedback-ar">
                {truncateFeedback(question.correct, 80)}
              </span>
            </>
          ) : (
            <>
              The correct meaning for āyah {toArabicNum(question.ayahNumber)}: "
              {truncateFeedback(question.correct)}"
            </>
          )}
        </p>
      )}

      {answered && (
        <button type="button" className="hifdh-session__cta" onClick={handleContinue}>
          {questionIndex < questions.length - 1 ? "Next question" : "Continue"}
        </button>
      )}
    </div>
  );
}

import { useEffect, useMemo, useState } from "react";
import { useAyahWords } from "../../hooks/useAyahWords.js";
import {
  AYAH_QUIZ_TYPE_LABELS,
  buildAyahQuizQuestions,
} from "../../utils/hifdhAyahQuiz.js";
import { toArabicNum } from "../../utils/mushafText.js";

function RearrangeQuestion({ question, onAnswered }) {
  const [pool, setPool] = useState(question.tokens);
  const [picked, setPicked] = useState([]);
  const [checked, setChecked] = useState(false);

  const isCorrect =
    picked.length === question.correctOrder.length &&
    picked.every((id, index) => id === question.correctOrder[index]);

  function pickToken(token) {
    if (checked) return;
    setPool((prev) => prev.filter((entry) => entry.id !== token.id));
    setPicked((prev) => [...prev, token.id]);
  }

  function unpickToken(id) {
    if (checked) return;
    const token = question.tokens.find((entry) => entry.id === id);
    if (!token) return;
    setPicked((prev) => prev.filter((entry) => entry !== id));
    setPool((prev) => [...prev, token]);
  }

  function reset() {
    setPool(question.tokens);
    setPicked([]);
    setChecked(false);
  }

  return (
    <div className="hifdh-ayah-quiz__block">
      <div className="hifdh-ayah-quiz__picked" dir="rtl">
        {picked.length === 0 ? (
          <span className="hifdh-ayah-quiz__placeholder">Tap words below in order…</span>
        ) : (
          picked.map((id) => {
            const token = question.tokens.find((entry) => entry.id === id);
            return (
              <button
                key={id}
                type="button"
                className="hifdh-ayah-quiz__chip is-picked"
                onClick={() => unpickToken(id)}
                disabled={checked}
              >
                {token?.ar}
              </button>
            );
          })
        )}
      </div>

      <div className="hifdh-ayah-quiz__pool" dir="rtl">
        {pool.map((token) => (
          <button
            key={token.id}
            type="button"
            className="hifdh-ayah-quiz__chip"
            onClick={() => pickToken(token)}
            disabled={checked}
          >
            {token.ar}
          </button>
        ))}
      </div>

      {!checked ? (
        <button
          type="button"
          className="hifdh-session__cta"
          disabled={picked.length !== question.correctOrder.length}
          onClick={() => setChecked(true)}
        >
          Check order
        </button>
      ) : (
        <>
          <p className="hifdh-session__hint" aria-live="polite">
            {isCorrect
              ? "Perfect — you know the word order."
              : "Not quite. Compare with the mushaf and try again."}
          </p>
          <div className="hifdh-ayah-quiz__actions">
            {!isCorrect && (
              <button type="button" className="hifdh-session__cta hifdh-session__cta--ghost" onClick={reset}>
                Try again
              </button>
            )}
            <button type="button" className="hifdh-session__cta" onClick={() => onAnswered(isCorrect)}>
              Continue
            </button>
          </div>
        </>
      )}
    </div>
  );
}

function McqQuestion({ question, onAnswered, showArabic = false }) {
  const [picked, setPicked] = useState(null);
  const answered = picked != null;
  const isCorrect = picked === question.correct;

  return (
    <div className="hifdh-ayah-quiz__block">
      {showArabic && question.ayahText && (
        <p className="hifdh-session__arabic hifdh-ayah-quiz__ayah" dir="rtl">
          {question.ayahText}
        </p>
      )}
      {question.phrase && (
        <p className="hifdh-session__arabic hifdh-ayah-quiz__phrase" dir="rtl">
          {question.phrase}
        </p>
      )}
      {question.segments && (
        <p className="hifdh-session__arabic hifdh-ayah-quiz__segments" dir="rtl">
          {question.segments.map((segment, index) =>
            segment == null ? (
              <span
                key={`blank-${index}`}
                className={[
                  "hifdh-ayah-quiz__blank",
                  answered && "is-filled",
                  answered && isCorrect && "is-correct",
                  answered && !isCorrect && "is-wrong",
                ]
                  .filter(Boolean)
                  .join(" ")}
                aria-label="blank"
              >
                {answered
                  ? isCorrect
                    ? picked
                    : question.correct
                  : "\u00a0"}
              </span>
            ) : (
              <span key={`${segment}-${index}`}>{segment} </span>
            ),
          )}
        </p>
      )}

      <div className="hifdh-session__range-quiz-options" role="group">
        {question.options.map((option) => {
          const isPicked = picked === option;
          const showCorrect = answered && option === question.correct;
          const showWrong = answered && isPicked && !isCorrect;
          const isArabicOption = question.type === "blanks";

          return (
            <button
              key={option}
              type="button"
              className={[
                "hifdh-session__range-quiz-option",
                isArabicOption && "hifdh-ayah-quiz__option--arabic",
                showCorrect && "is-correct",
                showWrong && "is-wrong",
              ]
                .filter(Boolean)
                .join(" ")}
              dir={isArabicOption ? "rtl" : undefined}
              onClick={() => !answered && setPicked(option)}
              disabled={answered}
            >
              {option}
            </button>
          );
        })}
      </div>

      {answered && (
        <>
          <p className="hifdh-session__hint" aria-live="polite">
            {isCorrect ? "Correct." : `The answer is: ${question.correct}`}
          </p>
          <button type="button" className="hifdh-session__cta" onClick={() => onAnswered(isCorrect)}>
            Continue
          </button>
        </>
      )}
    </div>
  );
}

export default function HifdhAyahQuiz({
  ayahNumber,
  surahNumber,
  mushafPage,
  localAyahs,
  memorizedAyat,
  questions,
  questionIndex,
  onQuestionsReady,
  onContinue,
}) {
  const { words, localAyah, loading } = useAyahWords(
    ayahNumber,
    surahNumber,
    mushafPage,
    localAyahs,
  );

  const builtQuestions = useMemo(() => {
    if (questions?.length) return questions;
    if (!words.length) return [];
    return buildAyahQuizQuestions({
      ayahNumber,
      surahNumber,
      mushafPage,
      words,
      localAyah,
      memorizedAyat,
    });
  }, [
    questions,
    words,
    ayahNumber,
    surahNumber,
    mushafPage,
    localAyah,
    memorizedAyat,
  ]);

  useEffect(() => {
    if (questions?.length || !builtQuestions.length) return;
    onQuestionsReady?.(builtQuestions);
  }, [questions, builtQuestions, onQuestionsReady]);

  const question = builtQuestions[questionIndex];

  if (loading && !builtQuestions.length) {
    return (
      <div className="hifdh-session__panel">
        <p className="hifdh-session__status">Preparing your quiz…</p>
      </div>
    );
  }

  if (!question) {
    return (
      <div className="hifdh-session__panel">
        <p className="hifdh-session__copy">Could not build a quiz for this āyah.</p>
        <button type="button" className="hifdh-session__cta" onClick={() => onContinue(true)}>
          Continue
        </button>
      </div>
    );
  }

  const typeLabel = AYAH_QUIZ_TYPE_LABELS[question.type] ?? "Quiz";

  return (
    <div className="hifdh-session__panel hifdh-session__panel--with-mushaf hifdh-ayah-quiz">
      <p className="hifdh-session__ayah-label">
        Āyah quiz · {toArabicNum(ayahNumber)}
      </p>
      <p className="hifdh-session__round">
        {typeLabel} · {questionIndex + 1} of {builtQuestions.length}
      </p>
      <p className="hifdh-session__copy">{question.prompt}</p>

      {question.type === "rearrange" ? (
        <RearrangeQuestion
          key={question.id}
          question={question}
          onAnswered={() => onContinue()}
        />
      ) : (
        <McqQuestion
          key={question.id}
          question={question}
          showArabic={question.type === "meaning"}
          onAnswered={() => onContinue()}
        />
      )}
    </div>
  );
}

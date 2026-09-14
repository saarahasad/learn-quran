import { useMemo, useState } from "react";

function QuestionHint({ hint }) {
  if (!hint) return null;
  return <p className="baqarah-ayah61-quiz__hint">{hint}</p>;
}

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

  function renderChip(token) {
    return (
      <span className="baqarah-ayah61-quiz__chip-inner">
        <span className="baqarah-ayah61-quiz__chip-ar">{token.ar}</span>
        {token.en && <span className="baqarah-ayah61-quiz__chip-en">{token.en}</span>}
      </span>
    );
  }

  return (
    <div className="baqarah-ayah61-quiz__question-block">
      <div className="baqarah-ayah61-quiz__picked" dir="rtl">
        {picked.length === 0 ? (
          <span className="baqarah-ayah61-quiz__placeholder">Tap in order…</span>
        ) : (
          picked.map((id) => {
            const token = question.tokens.find((entry) => entry.id === id);
            return (
              <button
                key={id}
                type="button"
                className="baqarah-ayah61-quiz__chip is-picked"
                onClick={() => unpickToken(id)}
                disabled={checked}
              >
                {token && renderChip(token)}
              </button>
            );
          })
        )}
      </div>

      <div className="baqarah-ayah61-quiz__pool" dir="rtl">
        {pool.map((token) => (
          <button
            key={token.id}
            type="button"
            className="baqarah-ayah61-quiz__chip"
            onClick={() => pickToken(token)}
            disabled={checked}
          >
            {renderChip(token)}
          </button>
        ))}
      </div>

      {!checked ? (
        <button
          type="button"
          className="baqarah-ayah61-quiz__cta"
          disabled={picked.length !== question.correctOrder.length}
          onClick={() => setChecked(true)}
        >
          Check order
        </button>
      ) : (
        <>
          <p className="baqarah-ayah61-quiz__feedback" aria-live="polite">
            {isCorrect ? "Perfect." : "Not quite — read the hint and try again."}
          </p>
          {question.explain && (
            <p className="baqarah-ayah61-quiz__explain">{question.explain}</p>
          )}
          <div className="baqarah-ayah61-quiz__actions">
            {!isCorrect && (
              <button type="button" className="baqarah-ayah61-quiz__cta is-ghost" onClick={reset}>
                Try again
              </button>
            )}
            <button
              type="button"
              className="baqarah-ayah61-quiz__cta"
              onClick={() => onAnswered(isCorrect)}
            >
              Continue
            </button>
          </div>
        </>
      )}
    </div>
  );
}

function McqQuestion({ question, onAnswered, arabicOptions = true }) {
  const [picked, setPicked] = useState(null);
  const answered = picked != null;
  const isCorrect = picked === question.correct;

  return (
    <div className="baqarah-ayah61-quiz__question-block">
      {question.phrase && (
        <p className="baqarah-ayah61-quiz__arabic baqarah-ayah61-quiz__phrase" dir="rtl">
          {question.phrase}
        </p>
      )}
      {question.segments && (
        <p className="baqarah-ayah61-quiz__arabic baqarah-ayah61-quiz__segments" dir="rtl">
          {question.segments.map((segment, index) =>
            segment == null ? (
              <span
                key={`blank-${index}`}
                className={[
                  "baqarah-ayah61-quiz__blank",
                  answered && "is-filled",
                  answered && isCorrect && "is-correct",
                  answered && !isCorrect && "is-wrong",
                ]
                  .filter(Boolean)
                  .join(" ")}
                aria-label="blank"
              >
                {answered ? (isCorrect ? picked : question.correct) : "___"}
              </span>
            ) : (
              <span key={`${segment}-${index}`}>{segment} </span>
            ),
          )}
        </p>
      )}

      <div className="baqarah-ayah61-quiz__options" role="group">
        {question.options.map((option) => {
          const isPicked = picked === option;
          const showCorrect = answered && option === question.correct;
          const showWrong = answered && isPicked && !isCorrect;

          return (
            <button
              key={option}
              type="button"
              className={[
                "baqarah-ayah61-quiz__option",
                arabicOptions && "is-arabic",
                showCorrect && "is-correct",
                showWrong && "is-wrong",
              ]
                .filter(Boolean)
                .join(" ")}
              dir={arabicOptions ? "rtl" : undefined}
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
          <p className="baqarah-ayah61-quiz__feedback" aria-live="polite">
            {isCorrect ? "Correct." : `Answer: ${question.correct}`}
          </p>
          {question.explain && (
            <p className="baqarah-ayah61-quiz__explain">{question.explain}</p>
          )}
          <button
            type="button"
            className="baqarah-ayah61-quiz__cta"
            onClick={() => onAnswered(isCorrect)}
          >
            Continue
          </button>
        </>
      )}
    </div>
  );
}

function WhichCorrectQuestion({
  question,
  onAnswered,
  successMessage = "Correct — matches the mushaf.",
  failMessage = "Not that one — check the mushaf.",
}) {
  const [picked, setPicked] = useState(null);
  const answered = picked != null;
  const isCorrect = picked === question.correct;

  return (
    <div className="baqarah-ayah61-quiz__question-block">
      <div className="baqarah-ayah61-quiz__which-options" role="group">
        {question.options.map((option) => {
          const isPicked = picked === option.id;
          const showCorrect = answered && option.id === question.correct;
          const showWrong = answered && isPicked && !isCorrect;

          return (
            <button
              key={option.id}
              type="button"
              className={[
                "baqarah-ayah61-quiz__which-option",
                showCorrect && "is-correct",
                showWrong && "is-wrong",
              ]
                .filter(Boolean)
                .join(" ")}
              dir="rtl"
              onClick={() => !answered && setPicked(option.id)}
              disabled={answered}
            >
              <span className="baqarah-ayah61-quiz__which-label">{option.id.toUpperCase()}</span>
              <span className="baqarah-ayah61-quiz__which-ar">{option.ar}</span>
            </button>
          );
        })}
      </div>

      {answered && (
        <>
          <p className="baqarah-ayah61-quiz__feedback" aria-live="polite">
            {isCorrect ? successMessage : failMessage}
          </p>
          {question.explain && (
            <p className="baqarah-ayah61-quiz__explain">{question.explain}</p>
          )}
          <button
            type="button"
            className="baqarah-ayah61-quiz__cta"
            onClick={() => onAnswered(isCorrect)}
          >
            Continue
          </button>
        </>
      )}
    </div>
  );
}

function LessonStep({ lesson, stepIndex, total, onNext, onPrev }) {
  return (
    <article className="baqarah-ayah61-quiz__lesson">
      <p className="baqarah-ayah61-quiz__lesson-progress">
        Lesson {stepIndex + 1} of {total}
      </p>
      <h5 className="baqarah-ayah61-quiz__lesson-title">{lesson.title}</h5>

      {lesson.story && (
        <p className="baqarah-ayah61-quiz__lesson-story">{lesson.story}</p>
      )}

      {lesson.arabic && (
        <p className="baqarah-ayah61-quiz__lesson-arabic" dir="rtl">
          {lesson.arabic}
        </p>
      )}

      {lesson.english && (
        <p className="baqarah-ayah61-quiz__lesson-english">{lesson.english}</p>
      )}

      {lesson.foods?.length > 0 && (
        <ol className="baqarah-ayah61-quiz__food-list">
          {lesson.foods.map((food, index) => (
            <li key={food.id} className="baqarah-ayah61-quiz__food-item">
              <span className="baqarah-ayah61-quiz__food-num">{index + 1}</span>
              <span className="baqarah-ayah61-quiz__food-ar" dir="rtl">
                {food.ar}
              </span>
              <span className="baqarah-ayah61-quiz__food-en">{food.en}</span>
              <span className="baqarah-ayah61-quiz__food-hint">{food.hint}</span>
            </li>
          ))}
        </ol>
      )}

      {lesson.words?.length > 0 && (
        <ul className="baqarah-ayah61-quiz__word-list">
          {lesson.words.map((word) => (
            <li key={word.ar} className="baqarah-ayah61-quiz__word-item">
              <span className="baqarah-ayah61-quiz__word-ar" dir="rtl">
                {word.ar}
              </span>
              <span className="baqarah-ayah61-quiz__word-en">{word.en}</span>
            </li>
          ))}
        </ul>
      )}

      {lesson.tip && (
        <p className="baqarah-ayah61-quiz__lesson-tip">
          <strong>Tip:</strong> {lesson.tip}
        </p>
      )}

      <div className="baqarah-ayah61-quiz__lesson-nav">
        <button
          type="button"
          className="baqarah-ayah61-quiz__cta is-ghost"
          onClick={onPrev}
          disabled={stepIndex === 0}
        >
          Back
        </button>
        <button type="button" className="baqarah-ayah61-quiz__cta" onClick={onNext}>
          {stepIndex >= total - 1 ? "Start practice" : "Next part"}
        </button>
      </div>
    </article>
  );
}

function QuizComplete({ score, total, onRestart, onLearn, tips }) {
  const pct = total > 0 ? Math.round((score / total) * 100) : 0;
  const copy =
    pct >= 90
      ? tips?.high ?? "Strong recall — try Full drill next."
      : pct >= 70
        ? tips?.mid ?? "Good progress. Re-run Beginner, then a focused mode."
        : tips?.low ?? "Go back to Learn and read each part again slowly.";

  return (
    <div className="baqarah-ayah61-quiz__complete">
      <p className="baqarah-ayah61-quiz__complete-score">
        {score} / {total} correct ({pct}%)
      </p>
      <p className="baqarah-ayah61-quiz__complete-copy">{copy}</p>
      <div className="baqarah-ayah61-quiz__actions">
        <button type="button" className="baqarah-ayah61-quiz__cta is-ghost" onClick={onLearn}>
          Review lesson
        </button>
        <button type="button" className="baqarah-ayah61-quiz__cta" onClick={onRestart}>
          Practice again
        </button>
      </div>
    </div>
  );
}

export default function BaqarahMemorizeQuiz({
  title,
  lead,
  ariaLabel,
  lessons,
  quizModes,
  buildQuizDeck,
  getQuizMode,
  defaultModeId = "beginner",
  defaultTab = "learn",
  showLearnTab = true,
  anchorId,
  completeTips,
  whichCorrectMessages,
}) {
  const [tab, setTab] = useState(defaultTab);
  const [lessonIndex, setLessonIndex] = useState(0);
  const [modeId, setModeId] = useState(defaultModeId);
  const [deckSeed, setDeckSeed] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const deck = useMemo(
    () => buildQuizDeck(modeId),
    [buildQuizDeck, modeId, deckSeed],
  );

  const activeMode = getQuizMode(modeId);
  const question = deck[questionIndex];
  const lesson = lessons[lessonIndex];

  function startPractice(fromLesson = false) {
    setTab("quiz");
    if (fromLesson) {
      setModeId(defaultModeId);
      setDeckSeed((prev) => prev + 1);
      setQuestionIndex(0);
      setScore(0);
      setFinished(false);
    }
  }

  function changeMode(nextModeId) {
    setModeId(nextModeId);
    setDeckSeed((prev) => prev + 1);
    setQuestionIndex(0);
    setScore(0);
    setFinished(false);
  }

  function restart() {
    setDeckSeed((prev) => prev + 1);
    setQuestionIndex(0);
    setScore(0);
    setFinished(false);
  }

  function handleAnswered(correct) {
    const nextScore = correct ? score + 1 : score;
    if (questionIndex >= deck.length - 1) {
      setScore(nextScore);
      setFinished(true);
      return;
    }
    setScore(nextScore);
    setQuestionIndex((prev) => prev + 1);
  }

  function nextLesson() {
    if (lessonIndex >= lessons.length - 1) {
      startPractice(true);
      return;
    }
    setLessonIndex((prev) => prev + 1);
  }

  return (
    <section
      id={anchorId}
      className="baqarah-ayah61-quiz"
      aria-label={ariaLabel}
    >
      <header className="baqarah-ayah61-quiz__header">
        <h4 className="baqarah-ayah61-quiz__title">{title}</h4>
        <p className="baqarah-ayah61-quiz__lead">{lead}</p>
      </header>

      {showLearnTab ? (
        <div className="baqarah-ayah61-quiz__tabs">
          <button
            type="button"
            className={["baqarah-ayah61-quiz__tab", tab === "learn" && "is-active"].filter(Boolean).join(" ")}
            onClick={() => setTab("learn")}
          >
            Learn
          </button>
          <button
            type="button"
            className={["baqarah-ayah61-quiz__tab", tab === "quiz" && "is-active"].filter(Boolean).join(" ")}
            onClick={() => startPractice()}
          >
            Practice
          </button>
        </div>
      ) : (
        <div className="baqarah-ayah61-quiz__tabs baqarah-ayah61-quiz__tabs--solo">
          <button
            type="button"
            className="baqarah-ayah61-quiz__tab is-active"
            onClick={() => startPractice()}
          >
            Practice
          </button>
        </div>
      )}

      {showLearnTab && tab === "learn" ? (
        <LessonStep
          lesson={lesson}
          stepIndex={lessonIndex}
          total={lessons.length}
          onNext={nextLesson}
          onPrev={() => setLessonIndex((prev) => Math.max(0, prev - 1))}
        />
      ) : (
        <>
          <p className="baqarah-ayah61-quiz__mode-desc">{activeMode.description}</p>

          <div className="baqarah-ayah61-quiz__modes" role="tablist" aria-label="Quiz mode">
            {quizModes.map((mode) => (
              <button
                key={mode.id}
                type="button"
                role="tab"
                aria-selected={modeId === mode.id}
                className={[
                  "baqarah-ayah61-quiz__mode",
                  modeId === mode.id && "is-active",
                ]
                  .filter(Boolean)
                  .join(" ")}
                onClick={() => changeMode(mode.id)}
              >
                {mode.label}
              </button>
            ))}
          </div>

          {finished ? (
            <QuizComplete
              score={score}
              total={deck.length}
              onRestart={restart}
              onLearn={() => {
                setTab("learn");
                setLessonIndex(0);
              }}
              tips={completeTips}
            />
          ) : question ? (
            <div className="baqarah-ayah61-quiz__panel">
              <p className="baqarah-ayah61-quiz__round">
                {activeMode.label} · {questionIndex + 1} of {deck.length}
              </p>
              <p className="baqarah-ayah61-quiz__prompt">{question.prompt}</p>
              <QuestionHint hint={question.hint} />

              {question.type === "rearrange" ? (
                <RearrangeQuestion
                  key={`${question.id}-${deckSeed}`}
                  question={question}
                  onAnswered={handleAnswered}
                />
              ) : question.type === "whichCorrect" ? (
                <WhichCorrectQuestion
                  key={`${question.id}-${deckSeed}`}
                  question={question}
                  onAnswered={handleAnswered}
                  successMessage={whichCorrectMessages?.success}
                  failMessage={whichCorrectMessages?.fail}
                />
              ) : (
                <McqQuestion
                  key={`${question.id}-${deckSeed}`}
                  question={question}
                  onAnswered={handleAnswered}
                  arabicOptions={
                    question.type !== "englishMcq" &&
                    (question.mode !== "meaning" || question.segments != null)
                  }
                />
              )}
            </div>
          ) : null}
        </>
      )}
    </section>
  );
}

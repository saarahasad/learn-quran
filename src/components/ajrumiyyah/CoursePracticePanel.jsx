import { useEffect, useMemo, useState } from "react";
import QuizVoiceAnswer from "./QuizVoiceAnswer.jsx";
import PassageClassifyTool from "./PassageClassifyTool.jsx";
import { getExerciseTools } from "../../data/tuhfatExerciseTools.js";
import { getQuizModelAnswer } from "../../data/tuhfatQuizAnswers.js";

const GRADES = ["got", "partial", "missed"];
const GRADE_LABELS = { got: "Got it", partial: "Partial", missed: "Missed" };

function storageKey(drillId, itemId) {
  return `ajr-tuhfat-drill:${drillId}:${itemId}`;
}

function loadGrade(drillId, itemId) {
  try {
    const g = localStorage.getItem(`${storageKey(drillId, itemId)}:grade`);
    return GRADES.includes(g) ? g : null;
  } catch {
    return null;
  }
}

function saveGrade(drillId, itemId, grade) {
  try {
    const key = `${storageKey(drillId, itemId)}:grade`;
    if (grade) localStorage.setItem(key, grade);
    else localStorage.removeItem(key);
  } catch {
    /* ignore */
  }
}

function loadRevealed(drillId, itemId) {
  try {
    return localStorage.getItem(`${storageKey(drillId, itemId)}:revealed`) === "1";
  } catch {
    return false;
  }
}

function saveRevealed(drillId, itemId, revealed) {
  try {
    const key = `${storageKey(drillId, itemId)}:revealed`;
    if (revealed) localStorage.setItem(key, "1");
    else localStorage.removeItem(key);
  } catch {
    /* ignore */
  }
}

function loadDone(drillId, itemId) {
  try {
    return localStorage.getItem(`${storageKey(drillId, itemId)}:done`) === "1";
  } catch {
    return false;
  }
}

function saveDone(drillId, itemId, done) {
  try {
    const key = `${storageKey(drillId, itemId)}:done`;
    if (done) localStorage.setItem(key, "1");
    else localStorage.removeItem(key);
  } catch {
    /* ignore */
  }
}

function loadText(drillId, itemId) {
  try {
    return localStorage.getItem(storageKey(drillId, itemId)) || "";
  } catch {
    return "";
  }
}

function saveText(drillId, itemId, value) {
  try {
    if (value) localStorage.setItem(storageKey(drillId, itemId), value);
    else localStorage.removeItem(storageKey(drillId, itemId));
  } catch {
    /* ignore */
  }
}

function toolDone(chapterId, lineIdx, toolId) {
  try {
    return localStorage.getItem(`ajr-tool:${chapterId}:${lineIdx}:${toolId}:done`) === "1";
  } catch {
    return false;
  }
}

function countsAsProgress(grade) {
  return grade === "got" || grade === "partial";
}

function isExerciseSection(section) {
  return /تَمْرِين|تمرين|Exercise|تَمَارِين|تمارين/i.test(
    `${section?.titleAr || ""} ${section?.titleEn || ""}`,
  );
}

function WriteExerciseItem({ drillId, itemId, index, item, onStatusChange }) {
  const [text, setText] = useState(() => loadText(drillId, itemId));
  const [done, setDone] = useState(() => loadDone(drillId, itemId));

  useEffect(() => {
    setText(loadText(drillId, itemId));
    setDone(loadDone(drillId, itemId));
  }, [drillId, itemId]);

  function onTextChange(value) {
    setText(value);
    saveText(drillId, itemId, value);
    onStatusChange?.();
  }

  function toggleDone() {
    const next = !done;
    setDone(next);
    saveDone(drillId, itemId, next);
    onStatusChange?.();
  }

  return (
    <li className={`ajr-course-practice__write${done ? " is-done" : ""}`}>
      <div className="ajr-course-practice__write-prompt">
        <span className="ajr-course-practice__rail-num">{index + 1}</span>
        <div>
          {item.ar ? (
            <p className="ajr-course-practice__ar" dir="rtl">
              {item.ar}
            </p>
          ) : null}
          {item.en ? <p className="ajr-course-practice__en">{item.en}</p> : null}
        </div>
      </div>
      <textarea
        className="ajr-course-practice__textarea"
        dir="auto"
        rows={2}
        placeholder="Write your answer…"
        value={text}
        onChange={(e) => onTextChange(e.target.value)}
      />
      <div className="ajr-course-practice__write-actions">
        <QuizVoiceAnswer drillId={drillId} questionId={itemId} label="answer" variant="compact" />
        <button
          type="button"
          className={`ajr-course-practice__nav-btn${done ? " is-primary" : ""}`}
          onClick={toggleDone}
        >
          {done ? "✓ Done" : "Mark done"}
        </button>
      </div>
    </li>
  );
}

/**
 * Course-style practice (same UX as أَنْوَاعُ الْكَلَامِ):
 * Oral quiz one-at-a-time + Interactive exercises tab.
 */
export default function CoursePracticePanel({
  chapterId,
  lineIdx,
  sections,
  titleAr,
  titleEn,
  lead,
}) {
  const drillId = `${chapterId}-${lineIdx}`;
  const tools = useMemo(() => getExerciseTools(chapterId, lineIdx) || [], [chapterId, lineIdx]);

  const { questions, writeExercises, heroAr, heroEn } = useMemo(() => {
    const list = (sections || []).filter((s) => s?.items?.length);
    const qs = [];
    const writes = [];
    let qAr = titleAr || "";
    let qEn = titleEn || "";

    list.forEach((section, sIdx) => {
      const exercise = isExerciseSection(section);
      if (exercise) {
        if (!tools.length) {
          section.items.forEach((item, iIdx) => {
            writes.push({ item, itemId: `s${sIdx}-i${iIdx}`, answerIndex: writes.length });
          });
        }
        return;
      }
      if (!qAr && section.titleAr) qAr = section.titleAr;
      if (!qEn && section.titleEn) qEn = section.titleEn;
      section.items.forEach((item, iIdx) => {
        qs.push({
          item,
          itemId: `s${sIdx}-i${iIdx}`,
          answerIndex: qs.length,
        });
      });
    });

    return { questions: qs, writeExercises: writes, heroAr: qAr, heroEn: qEn };
  }, [sections, tools.length, titleAr, titleEn]);

  const hasQuiz = questions.length > 0;
  const hasExercise = tools.length > 0 || writeExercises.length > 0;

  const [activeIdx, setActiveIdx] = useState(0);
  const [mode, setMode] = useState(() => (hasQuiz ? "quiz" : "exercise"));
  const [tick, setTick] = useState(0);

  const current = questions[activeIdx];
  const itemId = current?.itemId;
  const item = current?.item;
  const grade = itemId ? loadGrade(drillId, itemId) : null;
  const revealed = itemId
    ? loadRevealed(drillId, itemId) || Boolean(grade) || loadDone(drillId, itemId)
    : false;
  const model = current
    ? getQuizModelAnswer(chapterId, lineIdx, current.answerIndex)
    : null;

  const quizDone = questions.reduce((n, q) => {
    const g = loadGrade(drillId, q.itemId);
    if (countsAsProgress(g) || (!g && loadDone(drillId, q.itemId))) return n + 1;
    return n;
  }, 0);

  const exerciseDone =
    tools.reduce((n, t) => n + (toolDone(chapterId, lineIdx, t.id) ? 1 : 0), 0) +
    writeExercises.reduce((n, row) => n + (loadDone(drillId, row.itemId) ? 1 : 0), 0);

  const exerciseTotal = tools.length + writeExercises.length;
  const total = questions.length + exerciseTotal;
  const done = quizDone + exerciseDone;
  const pct = total ? Math.round((done / total) * 100) : 0;

  useEffect(() => {
    setActiveIdx(0);
    setMode(hasQuiz ? "quiz" : "exercise");
  }, [drillId, hasQuiz]);

  function refresh() {
    setTick((t) => t + 1);
  }

  function reveal() {
    if (!itemId) return;
    saveRevealed(drillId, itemId, true);
    refresh();
  }

  function setItemGrade(next) {
    if (!itemId) return;
    saveGrade(drillId, itemId, next);
    saveDone(drillId, itemId, countsAsProgress(next));
    saveRevealed(drillId, itemId, true);
    refresh();
  }

  function retry() {
    if (!itemId) return;
    saveGrade(drillId, itemId, null);
    saveDone(drillId, itemId, false);
    saveRevealed(drillId, itemId, false);
    refresh();
  }

  function go(delta) {
    setActiveIdx((i) => Math.max(0, Math.min(questions.length - 1, i + delta)));
  }

  void tick;

  if (!hasQuiz && !hasExercise) return null;

  const leadText =
    lead ||
    (hasQuiz && hasExercise
      ? "Answer orally, check the model, then grade yourself — then complete the interactive drill."
      : hasQuiz
        ? "Answer orally, check the model answer, then grade yourself."
        : "Work through the interactive exercise, then mark it done.");

  return (
    <div className="ajr-course-practice">
      <header className="ajr-course-practice__hero">
        <div className="ajr-course-practice__hero-text">
          <p className="ajr-course-practice__kicker">Lesson practice</p>
          <h3 className="ajr-course-practice__title">
            {heroAr ? <span dir="rtl">{heroAr}</span> : null}
            {heroEn ? <span>{heroEn}</span> : null}
            {!heroAr && !heroEn ? <span>Practice</span> : null}
          </h3>
          <p className="ajr-course-practice__lead">{leadText}</p>
        </div>
        <div className="ajr-course-practice__progress" aria-label={`Progress ${done} of ${total}`}>
          <div className="ajr-course-practice__ring" style={{ "--pct": `${pct}%` }}>
            <span>{pct}%</span>
          </div>
          <div className="ajr-course-practice__progress-meta">
            <strong>
              {done}/{total}
            </strong>
            <span>completed</span>
          </div>
        </div>
      </header>

      {hasQuiz && hasExercise ? (
        <nav className="ajr-course-practice__tabs" aria-label="Practice modes">
          <button
            type="button"
            className={`ajr-course-practice__tab${mode === "quiz" ? " is-active" : ""}`}
            onClick={() => setMode("quiz")}
          >
            Oral quiz
            <span>
              {quizDone}/{questions.length}
            </span>
          </button>
          <button
            type="button"
            className={`ajr-course-practice__tab${mode === "exercise" ? " is-active" : ""}`}
            onClick={() => setMode("exercise")}
          >
            Interactive
            <span>
              {exerciseDone}/{exerciseTotal}
            </span>
          </button>
        </nav>
      ) : null}

      {mode === "quiz" && item ? (
        <div className="ajr-course-practice__layout">
          <aside className="ajr-course-practice__rail" aria-label="Questions">
            {questions.map((q, i) => {
              const g = loadGrade(drillId, q.itemId);
              const status = countsAsProgress(g)
                ? "done"
                : g === "missed"
                  ? "missed"
                  : loadRevealed(drillId, q.itemId) || loadDone(drillId, q.itemId)
                    ? "open"
                    : "todo";
              return (
                <button
                  key={q.itemId}
                  type="button"
                  className={`ajr-course-practice__rail-btn is-${status}${i === activeIdx ? " is-current" : ""}`}
                  onClick={() => setActiveIdx(i)}
                >
                  <span className="ajr-course-practice__rail-num">{i + 1}</span>
                  <span className="ajr-course-practice__rail-label">Question {i + 1}</span>
                </button>
              );
            })}
          </aside>

          <article className="ajr-course-practice__card">
            <div className="ajr-course-practice__card-top">
              <span className="ajr-course-practice__step">
                Question {activeIdx + 1} of {questions.length}
              </span>
              {grade ? (
                <span className={`ajr-course-practice__status is-${grade}`}>
                  {GRADE_LABELS[grade]}
                </span>
              ) : (
                <span className="ajr-course-practice__status">Not graded</span>
              )}
            </div>

            <div className="ajr-course-practice__prompt">
              <p className="ajr-course-practice__ar" dir="rtl">
                {item.ar}
              </p>
              {item.en ? <p className="ajr-course-practice__en">{item.en}</p> : null}
            </div>

            {!revealed ? (
              <div className="ajr-course-practice__attempt">
                <div className="ajr-course-practice__attempt-head">
                  <h4>Your response</h4>
                  <p>Speak your answer (optional), then reveal the model.</p>
                </div>
                <QuizVoiceAnswer
                  drillId={drillId}
                  questionId={itemId}
                  label="answer"
                  variant="compact"
                />
                <button type="button" className="ajr-course-practice__cta" onClick={reveal}>
                  Check answer
                </button>
              </div>
            ) : (
              <div className="ajr-course-practice__reveal">
                <div className="ajr-course-practice__model">
                  <span className="ajr-course-practice__model-label">Model answer</span>
                  {model?.ar ? (
                    <p className="ajr-course-practice__model-ar" dir="rtl">
                      {model.ar}
                    </p>
                  ) : null}
                  {model?.en ? <p className="ajr-course-practice__model-en">{model.en}</p> : null}
                  {!model ? (
                    <p className="ajr-course-practice__model-en">
                      Rate yourself from the commentary above.
                    </p>
                  ) : null}
                </div>

                <div className="ajr-course-practice__grade" role="group" aria-label="Self-grade">
                  <p className="ajr-course-practice__grade-label">How did you do?</p>
                  <div className="ajr-course-practice__grade-row">
                    {GRADES.map((g) => (
                      <button
                        key={g}
                        type="button"
                        className={`ajr-course-practice__grade-btn is-${g}${grade === g ? " is-selected" : ""}`}
                        onClick={() => setItemGrade(g)}
                        aria-pressed={grade === g}
                      >
                        {GRADE_LABELS[g]}
                      </button>
                    ))}
                  </div>
                </div>

                <button type="button" className="ajr-course-practice__retry" onClick={retry}>
                  Hide answer &amp; try again
                </button>
              </div>
            )}

            <footer className="ajr-course-practice__nav">
              <button
                type="button"
                className="ajr-course-practice__nav-btn"
                disabled={activeIdx === 0}
                onClick={() => go(-1)}
              >
                Previous
              </button>
              {activeIdx < questions.length - 1 ? (
                <button
                  type="button"
                  className="ajr-course-practice__nav-btn is-primary"
                  onClick={() => go(1)}
                >
                  Next question
                </button>
              ) : hasExercise ? (
                <button
                  type="button"
                  className="ajr-course-practice__nav-btn is-primary"
                  onClick={() => setMode("exercise")}
                >
                  Go to interactive
                </button>
              ) : (
                <button type="button" className="ajr-course-practice__nav-btn is-primary" disabled>
                  Done
                </button>
              )}
            </footer>
          </article>
        </div>
      ) : null}

      {mode === "exercise" && hasExercise ? (
        <div className="ajr-course-practice__exercise">
          <div className="ajr-course-practice__exercise-intro">
            <h4>{tools.length ? "Interactive drill" : "Exercises"}</h4>
            <p>
              {tools.length
                ? "Use the tools below, then mark each exercise done."
                : "Write or speak your answers, then mark each item done."}
            </p>
          </div>

          {tools.map((tool) => (
            <PassageClassifyTool
              key={tool.id}
              tool={tool}
              chapterId={chapterId}
              lineIdx={lineIdx}
              onProgress={refresh}
            />
          ))}

          {writeExercises.length > 0 ? (
            <ol className="ajr-course-practice__write-list">
              {writeExercises.map((row, i) => (
                <WriteExerciseItem
                  key={row.itemId}
                  drillId={drillId}
                  itemId={row.itemId}
                  index={i}
                  item={row.item}
                  onStatusChange={refresh}
                />
              ))}
            </ol>
          ) : null}

          {hasQuiz ? (
            <button
              type="button"
              className="ajr-course-practice__nav-btn"
              onClick={() => setMode("quiz")}
            >
              Back to oral quiz
            </button>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

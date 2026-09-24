import { useCallback, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CourseLayout, {
  CourseLessonKicker,
  CourseLessonNav,
  CourseSidebar,
  CourseSidebarProgress,
  CourseSidebarUnit,
} from "../components/CourseLayout.jsx";
import { useCourseProgress } from "../hooks/useCourseProgress.js";
import {
  AQEEDAH2_FLASHCARDS,
  AQEEDAH2_META,
  AQEEDAH2_QUIZ,
  AQEEDAH2_STUDY_LESSONS,
  AQEEDAH2_TOPICS,
  AQEEDAH2_UNITS,
  aqeedah2CoursePath,
} from "../data/aqeedah2Course.js";
import { LEARN_ISLAM } from "../data/platform.js";
import "../styles/aqeedah.css";

const DEFAULT_LESSON_ID = AQEEDAH2_STUDY_LESSONS[0]?.id ?? "unit-map";

const AQEEDAH2_LESSONS_OR_TOOLS = new Set([
  ...AQEEDAH2_STUDY_LESSONS.map((lesson) => lesson.id),
  "flashcards",
  "quiz",
]);

function shuffleArray(items) {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function AqeedahSection({ section }) {
  if (section.type === "heading") {
    return (
      <header className="aq-heading">
        {section.kicker && <p className="aq-kicker">{section.kicker}</p>}
        <h3>{section.title}</h3>
      </header>
    );
  }

  if (section.type === "intro") {
    return <p className="aq-intro">{section.text}</p>;
  }

  if (section.type === "definition") {
    return (
      <div className="aq-definition">
        {section.label && <p className="aq-definition-label">{section.label}</p>}
        {section.title && <h4>{section.title}</h4>}
        <p>{section.body}</p>
      </div>
    );
  }

  if (section.type === "split") {
    return (
      <div className={`aq-split aq-split--${section.items.length}`}>
        {section.items.map((item) => (
          <div key={item.label ?? item.title} className="aq-split-card">
            {item.label && <p className="aq-split-label">{item.label}</p>}
            {item.title && <h4>{item.title}</h4>}
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    );
  }

  if (section.type === "ayah") {
    return (
      <blockquote className="aq-ayah">
        <p>{section.text}</p>
        {section.ref && <cite>{section.ref}</cite>}
      </blockquote>
    );
  }

  if (section.type === "note") {
    return (
      <aside className={`aq-note aq-note--${section.tone ?? "info"}`}>
        {section.title && <strong>{section.title}</strong>}
        <p>{section.body}</p>
      </aside>
    );
  }

  if (section.type === "cards") {
    return (
      <div className="aq-cards">
        {section.items.map((item) => (
          <article key={item.title} className="aq-card">
            <h4>{item.title}</h4>
            <p>{item.body}</p>
          </article>
        ))}
      </div>
    );
  }

  if (section.type === "pillars") {
    return (
      <div className="aq-pillars">
        {section.title && <h4 className="aq-pillars-title">{section.title}</h4>}
        <ol className="aq-pillars-grid">
          {section.items.map((item) => (
            <li key={item.n} className={`aq-pillar aq-pillar--${item.n}`}>
              <span className="aq-pillar-n">{item.n}</span>
              <h4>{item.title}</h4>
              <p>{item.body}</p>
            </li>
          ))}
        </ol>
      </div>
    );
  }

  if (section.type === "evidence") {
    return (
      <ol className="aq-evidence">
        {section.items.map((item) => (
          <li key={item.n} className={`aq-evidence-item aq-evidence-item--${((item.n - 1) % 6) + 1}`}>
            <span className="aq-evidence-n">{item.n}</span>
            <div>
              {item.lead && <p className="aq-evidence-lead">{item.lead}</p>}
              {item.body && <p className="aq-evidence-body">{item.body}</p>}
              {item.text && <p className="aq-evidence-text">{item.text}</p>}
              {item.ref && <cite>{item.ref}</cite>}
              {item.blocks?.map((block) => (
                <div
                  key={`${item.n}-${block.ref ?? block.text}`}
                  className={`aq-quote aq-quote--${block.kind ?? "ayah"}`}
                >
                  <p>{block.text}</p>
                  {block.ref && <cite>{block.ref}</cite>}
                </div>
              ))}
            </div>
          </li>
        ))}
      </ol>
    );
  }

  if (section.type === "list") {
    const ListTag = section.ordered ? "ol" : "ul";
    return (
      <ListTag className={`aq-list${section.ordered ? " aq-list--ordered" : ""}`}>
        {section.items.map((item) => {
          if (typeof item === "string") {
            return <li key={item}>{item}</li>;
          }
          return (
            <li key={item.title}>
              <strong>{item.title}</strong>
              {item.body ? ` — ${item.body}` : null}
            </li>
          );
        })}
      </ListTag>
    );
  }

  if (section.type === "roadmap") {
    return (
      <ol className="aq-roadmap">
        {section.items.map((item, index) => (
          <li key={item.title} className={`aq-roadmap-item aq-roadmap-item--${(index % 6) + 1}`}>
            <span className="aq-roadmap-n">{index + 1}</span>
            <div>
              <h4>{item.title}</h4>
              {item.subtitle && <p>{item.subtitle}</p>}
            </div>
          </li>
        ))}
      </ol>
    );
  }

  if (section.type === "pair") {
    return (
      <div className="aq-pair">
        {section.items.map((item) => (
          <article key={item.title} className={`aq-pair-card aq-pair-card--${item.tone ?? "a"}`}>
            <h4>{item.title}</h4>
            <p>{item.body}</p>
          </article>
        ))}
      </div>
    );
  }

  if (section.type === "conditions") {
    return (
      <ol className="aq-conditions">
        {section.items.map((item) => (
          <li key={item.n} className={`aq-condition aq-condition--${item.n}`}>
            <span className="aq-condition-n">{item.n}</span>
            <div>
              <h4>{item.title}</h4>
              <p>{item.body}</p>
              {item.blocks?.map((block) => (
                <div
                  key={`${item.n}-${block.ref ?? block.text}`}
                  className={`aq-quote aq-quote--${block.kind ?? "ayah"}`}
                >
                  <p>{block.text}</p>
                  {block.ref && <cite>{block.ref}</cite>}
                </div>
              ))}
            </div>
          </li>
        ))}
      </ol>
    );
  }

  if (section.type === "conditionMap") {
    return (
      <section className="aq-cmap">
        {section.title && <h3>{section.title}</h3>}
        <ul className="aq-cmap-grid">
          {section.items.map((item, index) => (
            <li key={item} className={`aq-cmap-node aq-cmap-node--${index + 1}`}>
              {item}
            </li>
          ))}
        </ul>
      </section>
    );
  }

  if (section.type === "comingSoon") {
    return (
      <div className="aq-coming">
        <p className="aq-coming-kicker">Notes coming</p>
        {section.title && <h3>{section.title}</h3>}
        <p>{section.body}</p>
      </div>
    );
  }

  if (section.type === "activities") {
    return (
      <section className="aq-activities">
        <h3>{section.title ?? "Activities"}</h3>
        <ol>
          {section.items.map((item, index) => (
            <li key={item}>
              <span className="aq-activities-n">{index + 1}</span>
              <div>
                <p>{item}</p>
                <div className="aq-write-lines" aria-hidden>
                  <span />
                  <span />
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>
    );
  }

  if (section.type === "qa") {
    return (
      <aside className="aq-qa">
        <p className="aq-qa-q">
          <strong>If someone were to ask: </strong>
          {section.question}
        </p>
        <p className="aq-qa-a">
          <strong>The answer is: </strong>
          {section.answer}
        </p>
      </aside>
    );
  }

  if (section.type === "trueFalse") {
    return (
      <section className="aq-tf">
        <div className="aq-tf-head">
          {section.n && <span className="aq-activities-n">{section.n}</span>}
          <p>{section.prompt}</p>
        </div>
        <ol className="aq-tf-list">
          {section.items.map((item) => (
            <li key={item.letter}>
              <span className="aq-tf-ltr">{item.letter}</span>
              <p>{item.text}</p>
              <span className="aq-tf-mark">( )</span>
            </li>
          ))}
        </ol>
      </section>
    );
  }

  return null;
}

function LessonPanel({ lesson, onPrev, onNext, hasPrev, hasNext, isDone, onToggleComplete }) {
  const studyCount = AQEEDAH2_STUDY_LESSONS.length;
  const lessonNum = AQEEDAH2_STUDY_LESSONS.findIndex((item) => item.id === lesson.id) + 1;

  return (
    <article className="aq-lesson">
      <CourseLessonKicker
        label={`Lesson ${lessonNum} of ${studyCount}`}
        titleAr={lesson.unitTitleAr}
        title={lesson.title}
        subtitle={lesson.unitTitle}
      />
      <div className="aq-body">
        {lesson.sections?.map((section, index) => (
          <AqeedahSection key={`${lesson.id}-${index}`} section={section} />
        ))}
      </div>
      <CourseLessonNav hasPrev={hasPrev} hasNext={hasNext} onPrev={onPrev} onNext={onNext}>
        <button
          type="button"
          className={`course-btn ghost${isDone ? " done" : ""}`}
          onClick={onToggleComplete}
        >
          {isDone ? "✓ Completed" : "Mark as complete"}
        </button>
      </CourseLessonNav>
    </article>
  );
}

function FlashcardsPanel() {
  const [topic, setTopic] = useState("all");
  const [cards, setCards] = useState(AQEEDAH2_FLASHCARDS);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const filterCards = useCallback((nextTopic) => {
    const filtered =
      nextTopic === "all"
        ? [...AQEEDAH2_FLASHCARDS]
        : AQEEDAH2_FLASHCARDS.filter((card) => card.t === nextTopic);
    setCards(filtered);
    setIndex(0);
    setFlipped(false);
  }, []);

  const card = cards[index];

  const goNext = () => {
    setIndex((i) => (i + 1) % cards.length);
    setFlipped(false);
  };

  const goPrev = () => {
    setIndex((i) => (i - 1 + cards.length) % cards.length);
    setFlipped(false);
  };

  const shuffle = () => {
    setCards(shuffleArray(cards));
    setIndex(0);
    setFlipped(false);
  };

  if (!card) {
    return <p className="aq-intro">No flashcards for this topic yet.</p>;
  }

  return (
    <div className="aq-practice">
      <header className="aq-practice-head">
        <h2>Flashcards</h2>
        <p>Click the card to reveal the answer.</p>
      </header>

      <div className="aq-practice-controls">
        <select
          className="aq-select"
          value={topic}
          onChange={(event) => {
            setTopic(event.target.value);
            filterCards(event.target.value);
          }}
        >
          {AQEEDAH2_TOPICS.map((item) => (
            <option key={item.id} value={item.id}>
              {item.label}
            </option>
          ))}
        </select>
        <span className="aq-practice-counter">
          Card {index + 1} of {cards.length}
        </span>
      </div>

      <div
        className="aq-flip-scene"
        onClick={() => setFlipped((value) => !value)}
        onKeyDown={(event) => event.key === "Enter" && setFlipped((value) => !value)}
        role="button"
        tabIndex={0}
        aria-label="Flip flashcard"
      >
        <div className={`aq-flip-inner${flipped ? " is-flipped" : ""}`}>
          <div className="aq-flip-face aq-flip-front">
            <span className="aq-flip-tag">Question</span>
            <p>{card.q}</p>
          </div>
          <div className="aq-flip-face aq-flip-back">
            <span className="aq-flip-tag">Answer</span>
            <p style={{ whiteSpace: "pre-line" }}>{card.a}</p>
          </div>
        </div>
      </div>

      <p className="aq-flip-hint">Click card to flip</p>

      <div className="aq-practice-btns">
        <button type="button" className="course-btn secondary" onClick={goPrev}>
          ← Previous
        </button>
        <button type="button" className="course-btn ghost" onClick={shuffle}>
          Shuffle
        </button>
        <button type="button" className="course-btn primary" onClick={goNext}>
          Next →
        </button>
      </div>
    </div>
  );
}

function QuizPanel({ onReviewLesson }) {
  const [phase, setPhase] = useState("setup");
  const [topic, setTopic] = useState("all");
  const [count, setCount] = useState("10");
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selected, setSelected] = useState(null);

  const question = questions[index];
  const letters = ["A", "B", "C", "D"];

  const startQuiz = () => {
    const pool =
      topic === "all"
        ? shuffleArray(AQEEDAH2_QUIZ)
        : shuffleArray(AQEEDAH2_QUIZ.filter((item) => item.t === topic));
    const n = count === "all" ? pool.length : Math.min(parseInt(count, 10), pool.length);
    setQuestions(pool.slice(0, n));
    setIndex(0);
    setScore(0);
    setAnswered(false);
    setSelected(null);
    setPhase("quiz");
  };

  const selectOption = (optionIndex) => {
    if (answered || !question) return;
    setAnswered(true);
    setSelected(optionIndex);
    if (optionIndex === question.ans) setScore((value) => value + 1);
  };

  const nextQuestion = () => {
    if (index + 1 >= questions.length) {
      setPhase("results");
      return;
    }
    setIndex((value) => value + 1);
    setAnswered(false);
    setSelected(null);
  };

  const pct = questions.length ? Math.round((score / questions.length) * 100) : 0;

  const resultsMsg = useMemo(() => {
    if (pct >= 90) {
      return `Excellent — ${score} of ${questions.length}. A strong grasp of Tawhid al-uluhiyah.`;
    }
    if (pct >= 70) {
      return `Good work — ${score} of ${questions.length}. Review the missed verses and try again.`;
    }
    return `You scored ${score} of ${questions.length}. Return to the notes, then retake the quiz.`;
  }, [pct, score, questions.length]);

  if (phase === "setup") {
    return (
      <div className="aq-practice">
        <header className="aq-practice-head">
          <h2>Knowledge Quiz</h2>
          <p>Test what you have studied so far. More questions will be added with each unit.</p>
        </header>
        <div className="aq-quiz-setup">
            <select className="aq-select" value={topic} onChange={(event) => setTopic(event.target.value)}>
              {AQEEDAH2_TOPICS.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.label}
                </option>
              ))}
            </select>
            <select className="aq-select" value={count} onChange={(event) => setCount(event.target.value)}>
              <option value="5">5 Questions</option>
              <option value="10">10 Questions</option>
              <option value="all">All Questions</option>
            </select>
            <button type="button" className="course-btn primary" onClick={startQuiz}>
              Start Quiz →
            </button>
        </div>
      </div>
    );
  }

  if (phase === "results") {
    return (
      <div className="aq-practice">
        <div className="aq-quiz-results">
          <h2>Quiz complete</h2>
          <div className="aq-score-ring">{pct}%</div>
          <p>{resultsMsg}</p>
          <div className="course-lesson-nav">
            <button type="button" className="course-btn secondary" onClick={() => setPhase("setup")}>
              Try again
            </button>
            <button type="button" className="course-btn primary" onClick={onReviewLesson}>
              Review notes
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="aq-practice">
      <div className="aq-progress-bar">
        <div className="aq-progress-fill" style={{ width: `${(index / questions.length) * 100}%` }} />
      </div>
      <div className="aq-quiz-body">
        <p className="aq-q-meta">
          Question {index + 1} of {questions.length}
        </p>
        <h2 className="aq-q-text">{question.q}</h2>
        <div className="aq-options">
          {question.opts.map((opt, optionIndex) => {
            let cls = "aq-opt";
            if (answered) {
              cls += " is-locked";
              if (optionIndex === question.ans) cls += " is-correct";
              else if (optionIndex === selected) cls += " is-wrong";
            }
            return (
              <button key={opt} type="button" className={cls} onClick={() => selectOption(optionIndex)}>
                <span className="aq-opt-ltr">{letters[optionIndex]}</span>
                {opt}
              </button>
            );
          })}
        </div>
        {answered && (
          <div className={`aq-feedback ${selected === question.ans ? "is-correct" : "is-wrong"}`}>
            {selected === question.ans ? (
              <>
                <strong>✓ Correct.</strong> {question.fb}
              </>
            ) : (
              <>
                <strong>✗ Not quite.</strong> {question.fb}
              </>
            )}
          </div>
        )}
        {answered && (
          <button type="button" className="course-btn primary" onClick={nextQuestion}>
            {index === questions.length - 1 ? "See results" : "Next question →"}
          </button>
        )}
      </div>
    </div>
  );
}

export default function Aqeedah2Page() {
  const { isDone, toggle } = useCourseProgress(AQEEDAH2_META.id);
  const [searchParams, setSearchParams] = useSearchParams();
  const requestedId = searchParams.get("lesson");
  const initialId =
    requestedId && AQEEDAH2_LESSONS_OR_TOOLS.has(requestedId) ? requestedId : DEFAULT_LESSON_ID;
  const [activeId, setActiveId] = useState(initialId);

  const lessonIndex = AQEEDAH2_STUDY_LESSONS.findIndex((lesson) => lesson.id === activeId);
  const activeLesson = lessonIndex >= 0 ? AQEEDAH2_STUDY_LESSONS[lessonIndex] : null;

  const selectLesson = (lessonId) => {
    setActiveId(lessonId);
    setSearchParams({ lesson: lessonId }, { replace: true });
  };

  const goLesson = (delta) => {
    const next = lessonIndex + delta;
    if (next >= 0 && next < AQEEDAH2_STUDY_LESSONS.length) {
      selectLesson(AQEEDAH2_STUDY_LESSONS[next].id);
    }
  };

  const progressPct = Math.round(
    (AQEEDAH2_STUDY_LESSONS.filter((lesson) => isDone(lesson.id)).length /
      AQEEDAH2_STUDY_LESSONS.length) *
      100,
  );

  const sidebar = (
    <CourseSidebar title="Course outline">
      <CourseSidebarProgress pct={progressPct} label={`${progressPct}% complete`} />
      {AQEEDAH2_UNITS.map((unit) => (
        <CourseSidebarUnit key={unit.id} title={unit.title}>
          {unit.lessons.map((lesson) => (
            <li key={lesson.id}>
              <button
                type="button"
                className={[
                  activeId === lesson.id ? "active" : "",
                  isDone(lesson.id) ? "done" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                onClick={() => selectLesson(lesson.id)}
              >
                <span className="course-sidebar-lesson-num">{lesson.icon}</span>
                <span>{lesson.title}</span>
                {lesson.draft && <span className="aq-draft-chip">Soon</span>}
                {lesson.badge && <span className="aq-draft-chip">{lesson.badge}</span>}
              </button>
            </li>
          ))}
        </CourseSidebarUnit>
      ))}
    </CourseSidebar>
  );

  const breadcrumbLabel =
    activeLesson?.title ??
    (activeId === "flashcards" ? "Flashcards" : activeId === "quiz" ? "Knowledge Quiz" : "Study");

  return (
    <CourseLayout
      wide
      courseId={AQEEDAH2_META.id}
      breadcrumbs={[
        { label: LEARN_ISLAM.name, to: "/" },
        { label: AQEEDAH2_META.name, to: aqeedah2CoursePath() },
        { label: breadcrumbLabel },
      ]}
      sidebar={sidebar}
    >
      {activeLesson && (
        <LessonPanel
          lesson={activeLesson}
          hasPrev={lessonIndex > 0}
          hasNext={lessonIndex < AQEEDAH2_STUDY_LESSONS.length - 1}
          onPrev={() => goLesson(-1)}
          onNext={() => goLesson(1)}
          isDone={isDone(activeLesson.id)}
          onToggleComplete={() => toggle(activeLesson.id)}
        />
      )}
      {activeId === "flashcards" && <FlashcardsPanel />}
      {activeId === "quiz" && (
        <QuizPanel onReviewLesson={() => selectLesson(AQEEDAH2_STUDY_LESSONS[0].id)} />
      )}
    </CourseLayout>
  );
}

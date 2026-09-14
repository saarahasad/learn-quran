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
  TARBIYAH_CHAPTERS,
  TARBIYAH_FLASHCARDS,
  TARBIYAH_META,
  TARBIYAH_QUIZ,
  TARBIYAH_QUIZ_TOPICS,
  TARBIYAH_TOPICS,
  tarbiyahCoursePath,
} from "../data/tarbiyahCourse.js";
import { LEARN_ISLAM } from "../data/platform.js";
import "../styles/tarbiyah.css";

function shuffleArray(items) {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function filterQuizByTopic(topic) {
  if (topic === "all") return [...TARBIYAH_QUIZ];
  if (topic === "relatives") {
    return TARBIYAH_QUIZ.filter((q) => q.t === "relatives" || q.t === "neighbours");
  }
  return TARBIYAH_QUIZ.filter((q) => q.t === topic);
}

function FlashcardsPanel() {
  const [topic, setTopic] = useState("all");
  const [cards, setCards] = useState(TARBIYAH_FLASHCARDS);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const filterCards = useCallback((nextTopic) => {
    const filtered =
      nextTopic === "all"
        ? [...TARBIYAH_FLASHCARDS]
        : TARBIYAH_FLASHCARDS.filter((c) => c.t === nextTopic);
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
    return <p className="tarbiyah-intro">No flashcards for this topic.</p>;
  }

  return (
    <div className="tarbiyah-flashcards">
      <div className="course-card">
        <h2>Flashcards</h2>
        <p>Click the card to reveal the answer. Use the buttons to navigate.</p>
      </div>

      <div className="tarbiyah-fc-controls">
        <select
          className="tarbiyah-select"
          value={topic}
          onChange={(e) => {
            setTopic(e.target.value);
            filterCards(e.target.value);
          }}
        >
          {TARBIYAH_TOPICS.map((t) => (
            <option key={t.id} value={t.id}>
              {t.label}
            </option>
          ))}
        </select>
        <span className="tarbiyah-fc-counter">
          Card {index + 1} of {cards.length}
        </span>
      </div>

      <div
        className="tarbiyah-card-scene"
        onClick={() => setFlipped((v) => !v)}
        onKeyDown={(e) => e.key === "Enter" && setFlipped((v) => !v)}
        role="button"
        tabIndex={0}
        aria-label="Flip flashcard"
      >
        <div className={`tarbiyah-card-inner${flipped ? " flipped" : ""}`}>
          <div className="tarbiyah-card-face tarbiyah-card-front">
            <span className="tarbiyah-card-tag">Question</span>
            <p className="tarbiyah-card-q">{card.q}</p>
          </div>
          <div className="tarbiyah-card-face tarbiyah-card-back">
            <span className="tarbiyah-card-tag">Answer</span>
            <p className="tarbiyah-card-a" style={{ whiteSpace: "pre-line" }}>
              {card.a}
            </p>
          </div>
        </div>
      </div>

      <p className="tarbiyah-flip-hint">Click card to flip</p>

      <div className="tarbiyah-fc-btns">
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

function QuizPanel({ onReviewChapter }) {
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
    const pool = shuffleArray(filterQuizByTopic(topic));
    const n = count === "all" ? pool.length : Math.min(parseInt(count, 10), pool.length);
    setQuestions(pool.slice(0, n));
    setIndex(0);
    setScore(0);
    setAnswered(false);
    setSelected(null);
    setPhase("quiz");
  };

  const selectOption = (i) => {
    if (answered || !question) return;
    setAnswered(true);
    setSelected(i);
    if (i === question.ans) setScore((s) => s + 1);
  };

  const nextQuestion = () => {
    if (index + 1 >= questions.length) {
      setPhase("results");
      return;
    }
    setIndex((i) => i + 1);
    setAnswered(false);
    setSelected(null);
  };

  const pct = questions.length ? Math.round((score / questions.length) * 100) : 0;

  const resultsMsg = useMemo(() => {
    if (pct >= 90) {
      return `Excellent! You scored ${score} out of ${questions.length}. Outstanding mastery of the material. May Allah bless your knowledge!`;
    }
    if (pct >= 70) {
      return `Good work! You scored ${score} out of ${questions.length}. A solid understanding — review the missed areas and try again.`;
    }
    if (pct >= 50) {
      return `You scored ${score} out of ${questions.length}. Keep studying! Review the notes and flashcards, then retake the quiz.`;
    }
    return `You scored ${score} out of ${questions.length}. Don't be discouraged — start with the notes, then use the flashcards before retaking the quiz.`;
  }, [pct, score, questions.length]);

  if (phase === "setup") {
    return (
      <div className="tarbiyah-quiz">
        <div className="course-card">
          <h2>Knowledge Quiz</h2>
          <p>Test your understanding of all 9 chapters.</p>
          <div className="tarbiyah-quiz-setup">
            <select className="tarbiyah-select" value={topic} onChange={(e) => setTopic(e.target.value)}>
              {TARBIYAH_QUIZ_TOPICS.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.label}
                </option>
              ))}
            </select>
            <select className="tarbiyah-select" value={count} onChange={(e) => setCount(e.target.value)}>
              <option value="5">5 Questions</option>
              <option value="10">10 Questions</option>
              <option value="20">20 Questions</option>
              <option value="all">All Questions</option>
            </select>
            <button type="button" className="course-btn primary" onClick={startQuiz}>
              Start Quiz →
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (phase === "results") {
    return (
      <div className="tarbiyah-quiz">
        <div className="course-card tarbiyah-quiz-results">
          <h2>Quiz Complete!</h2>
          <div className="tarbiyah-score-ring">{pct}%</div>
          <p>{resultsMsg}</p>
          <div className="course-lesson-nav">
            <button type="button" className="course-btn secondary" onClick={() => setPhase("setup")}>
              Try Again
            </button>
            <button type="button" className="course-btn primary" onClick={onReviewChapter}>
              Review Notes
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="tarbiyah-quiz">
      <div className="tarbiyah-progress-bar">
        <div
          className="tarbiyah-progress-fill"
          style={{ width: `${(index / questions.length) * 100}%` }}
        />
      </div>
      <div className="course-card">
        <p className="tarbiyah-q-meta">
          Question {index + 1} of {questions.length}
        </p>
        <h2 className="tarbiyah-q-text">{question.q}</h2>
        <div className="tarbiyah-options">
          {question.opts.map((opt, i) => {
            let cls = "tarbiyah-opt";
            if (answered) {
              cls += " locked";
              if (i === question.ans) cls += " correct";
              else if (i === selected) cls += " wrong";
            }
            return (
              <button key={opt} type="button" className={cls} onClick={() => selectOption(i)}>
                <span className="tarbiyah-opt-ltr">{letters[i]}</span>
                {opt}
              </button>
            );
          })}
        </div>
        {answered && (
          <div className={`tarbiyah-fb ${selected === question.ans ? "correct" : "wrong"}`}>
            {selected === question.ans ? (
              <>
                <strong>✓ Correct!</strong> {question.fb}
              </>
            ) : (
              <>
                <strong>✗ Incorrect.</strong> {question.fb}
              </>
            )}
          </div>
        )}
        {answered && (
          <button type="button" className="course-btn primary" onClick={nextQuestion}>
            {index === questions.length - 1 ? "See Results" : "Next Question →"}
          </button>
        )}
      </div>
    </div>
  );
}

function ChapterPanel({ chapter, onPrev, onNext, hasPrev, hasNext, isDone, onToggleComplete }) {
  return (
    <article className="tarbiyah-content">
      <CourseLessonKicker
        label={`Chapter ${chapter.num} of ${TARBIYAH_META.chapters}`}
        title={chapter.title}
      />
      <div
        className="course-card tarbiyah-chapter-body"
        dangerouslySetInnerHTML={{ __html: chapter.bodyHtml }}
      />
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

export default function TarbiyahPage() {
  const { isDone, toggle } = useCourseProgress("tarbiyah");
  const [searchParams, setSearchParams] = useSearchParams();
  const requestedId = searchParams.get("chapter");
  const defaultId = TARBIYAH_CHAPTERS[0]?.id;
  const initialId =
    requestedId &&
    (TARBIYAH_CHAPTERS.some((chapter) => chapter.id === requestedId) ||
      requestedId === "flashcards" ||
      requestedId === "quiz")
      ? requestedId
      : defaultId;
  const [activeId, setActiveId] = useState(initialId);

  const chapterIndex = TARBIYAH_CHAPTERS.findIndex((ch) => ch.id === activeId);
  const activeChapter = chapterIndex >= 0 ? TARBIYAH_CHAPTERS[chapterIndex] : null;

  const selectChapter = (chapterId) => {
    setActiveId(chapterId);
    setSearchParams({ chapter: chapterId }, { replace: true });
  };

  const goChapter = (delta) => {
    const next = chapterIndex + delta;
    if (next >= 0 && next < TARBIYAH_CHAPTERS.length) {
      selectChapter(TARBIYAH_CHAPTERS[next].id);
    }
  };

  const progressPct = Math.round(
    (TARBIYAH_CHAPTERS.filter((chapter) => isDone(chapter.id)).length / TARBIYAH_CHAPTERS.length)
      * 100,
  );

  const sidebar = (
    <CourseSidebar title="Course outline">
      <CourseSidebarProgress pct={progressPct} label={`${progressPct}% complete`} />
      {TARBIYAH_CHAPTERS.map((chapter) => (
        <CourseSidebarUnit key={chapter.id} title={`Chapter ${chapter.num}`}>
          <li>
            <button
              type="button"
              className={[
                activeId === chapter.id ? "active" : "",
                isDone(chapter.id) ? "done" : "",
              ]
                .filter(Boolean)
                .join(" ")}
              onClick={() => selectChapter(chapter.id)}
            >
              <span className="course-sidebar-lesson-num">{chapter.num}</span>
              <span>{chapter.title}</span>
            </button>
          </li>
        </CourseSidebarUnit>
      ))}
      <CourseSidebarUnit title="Study tools">
        <li>
          <button
            type="button"
            className={activeId === "flashcards" ? "active" : ""}
            onClick={() => selectChapter("flashcards")}
          >
            <span className="course-sidebar-lesson-num">🃏</span>
            <span>Flashcards</span>
          </button>
        </li>
        <li>
          <button
            type="button"
            className={activeId === "quiz" ? "active" : ""}
            onClick={() => selectChapter("quiz")}
          >
            <span className="course-sidebar-lesson-num">✏️</span>
            <span>Knowledge Quiz</span>
          </button>
        </li>
      </CourseSidebarUnit>
    </CourseSidebar>
  );

  const breadcrumbLabel =
    activeChapter?.title ??
    (activeId === "flashcards" ? "Flashcards" : activeId === "quiz" ? "Knowledge Quiz" : "Study");

  return (
    <CourseLayout
      wide
      courseId="tarbiyah"
      breadcrumbs={[
        { label: LEARN_ISLAM.name, to: "/" },
        { label: TARBIYAH_META.name, to: tarbiyahCoursePath() },
        { label: breadcrumbLabel },
      ]}
      sidebar={sidebar}
    >
      {activeChapter && (
        <ChapterPanel
          chapter={activeChapter}
          hasPrev={chapterIndex > 0}
          hasNext={chapterIndex < TARBIYAH_CHAPTERS.length - 1}
          onPrev={() => goChapter(-1)}
          onNext={() => goChapter(1)}
          isDone={isDone(activeChapter.id)}
          onToggleComplete={() => toggle(activeChapter.id)}
        />
      )}
      {activeId === "flashcards" && <FlashcardsPanel />}
      {activeId === "quiz" && (
        <QuizPanel onReviewChapter={() => selectChapter(TARBIYAH_CHAPTERS[0].id)} />
      )}
    </CourseLayout>
  );
}

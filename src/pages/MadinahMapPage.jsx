import { useEffect, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  AJRUMIYYAH_CHAPTERS,
  AJRUMIYYAH_GROUPS,
  ajrumiyyahStudyPath,
} from "../data/ajrumiyyahCourse.js";
import { LEARN_ISLAM } from "../data/platform.js";
import {
  AJRUMIYYAH_MADINAH_MAP,
  MADINAH_BOOKS,
  ajrumiyyahChaptersForLesson,
  madinahLessonMeta,
  madinahLessonsForBook,
  madinahLinksForChapter,
  madinahProgressId,
  summarizeMadinahProgress,
} from "../data/ajrumiyyahMadinahMap.js";
import { useCourseProgress } from "../hooks/useCourseProgress.js";
import CourseLayout from "../components/CourseLayout.jsx";
import "../styles/madinah-map.css";


const RANK_LABEL = {
  primary: "Open first",
  extra: "More practice",
  later: "When Madinah names it",
};

function chapterById(id) {
  return AJRUMIYYAH_CHAPTERS.find((chapter) => chapter.id === id) ?? null;
}

function bookLabel(book) {
  return MADINAH_BOOKS.find((item) => item.id === book)?.title ?? `Book ${book}`;
}

function RankBadge({ rank }) {
  return <span className={`mm-rank mm-rank--${rank}`}>{RANK_LABEL[rank] ?? rank}</span>;
}

function LessonChip({ book, lesson }) {
  const meta = madinahLessonMeta(book, lesson);
  return (
    <span className="mm-chip">
      <span className="mm-chip__book">B{book}</span>
      <span className="mm-chip__num">L{lesson}</span>
      {meta?.en ? <span className="mm-chip__en">{meta.en}</span> : null}
    </span>
  );
}

function LessonCheck({ done, label, onToggle }) {
  return (
    <button
      type="button"
      className={`mm-check${done ? " is-done" : ""}`}
      aria-pressed={done}
      aria-label={done ? `Mark not complete: ${label}` : `Mark complete: ${label}`}
      onClick={(event) => {
        event.stopPropagation();
        onToggle();
      }}
    >
      {done ? "✓" : ""}
    </button>
  );
}

function MadinahProgressBoard({ progress, isDone, onToggle, onOpenLesson }) {
  return (
    <section className="course-card mm-progress" aria-labelledby="mm-progress-title">
      <div className="mm-progress__head">
        <div>
          <h2 id="mm-progress-title">Madinah progress</h2>
          <p className="mm-progress__summary">
            {progress.completed} of {progress.total} lessons complete
            {progress.remaining > 0 ? ` · ${progress.remaining} left` : " · all three books done"}
          </p>
        </div>
        <p className="mm-progress__pct">{progress.pct}%</p>
      </div>
      <div className="mm-progress__overall" aria-hidden>
        <div className="mm-progress__fill" style={{ width: `${progress.pct}%` }} />
      </div>
      <div className="mm-progress__books">
        {progress.books.map((book) => (
          <div key={book.id} className="mm-progress__book">
            <div className="mm-progress__book-head">
              <p className="mm-progress__book-title">
                {book.title}
                <span dir="rtl">{book.ar}</span>
              </p>
              <p className="mm-progress__book-count">
                {book.completed} / {book.total}
              </p>
            </div>
            <div className="mm-progress__track" aria-hidden>
              <div className="mm-progress__fill" style={{ width: `${book.pct}%` }} />
            </div>
            <div className="mm-progress__cells" role="list" aria-label={`${book.title} lessons`}>
              {book.lessons.map((row) => {
                const id = madinahProgressId(row.book, row.lesson);
                const done = isDone(id);
                const label = `${book.title} lesson ${row.lesson}`;
                return (
                  <div key={id} className="mm-progress__cell" role="listitem">
                    <LessonCheck done={done} label={label} onToggle={() => onToggle(id)} />
                    <button
                      type="button"
                      className={`mm-progress__num${done ? " is-done" : ""}`}
                      onClick={() => onOpenLesson(row.book, row.lesson)}
                    >
                      {row.lesson}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function MadinahMapPage() {
  const [params, setParams] = useSearchParams();
  const { isDone, toggle, doneIds } = useCourseProgress("madinah");
  const mode = params.get("mode") === "madinah" ? "madinah" : "ajrumiyyah";
  const chapterId = params.get("chapter") || "kalam";
  const book = Number(params.get("book") || 1);
  const lesson = Number(params.get("lesson") || 1);
  const currentLessonId = madinahProgressId(book, lesson);
  const currentLessonDone = isDone(currentLessonId);

  const progress = useMemo(() => summarizeMadinahProgress(doneIds), [doneIds]);

  const setMode = (next) => {
    const nextParams = new URLSearchParams(params);
    nextParams.set("mode", next);
    if (next === "ajrumiyyah" && !nextParams.get("chapter")) {
      nextParams.set("chapter", "kalam");
    }
    if (next === "madinah") {
      if (!nextParams.get("book")) nextParams.set("book", "1");
      if (!nextParams.get("lesson")) nextParams.set("lesson", "1");
    }
    setParams(nextParams, { replace: true });
  };

  const selectChapter = (id) => {
    const nextParams = new URLSearchParams(params);
    nextParams.set("mode", "ajrumiyyah");
    nextParams.set("chapter", id);
    setParams(nextParams, { replace: true });
  };

  const selectLesson = (nextBook, nextLesson) => {
    const nextParams = new URLSearchParams(params);
    nextParams.set("mode", "madinah");
    nextParams.set("book", String(nextBook));
    nextParams.set("lesson", String(nextLesson));
    setParams(nextParams, { replace: true });
  };

  const chapter = chapterById(chapterId) ?? AJRUMIYYAH_CHAPTERS[0];
  const chapterMap = madinahLinksForChapter(chapter.id);
  const lessonMeta = madinahLessonMeta(book, lesson);
  const reverseHits = useMemo(
    () => ajrumiyyahChaptersForLesson(book, lesson),
    [book, lesson],
  );

  useEffect(() => {
    document.getElementById("mm-detail")?.scrollIntoView({ block: "nearest", behavior: "smooth" });
    document.querySelector(".mm-nav__btn.is-on")?.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }, [mode, chapterId, book, lesson]);

  return (
    <CourseLayout
      wide
      themeColor="#0f766e"
      breadcrumbs={[
        { label: LEARN_ISLAM.name, to: "/" },
        { label: "Madinah practice map" },
      ]}
      banner={{
        code: "Practice map · physical books",
        title: "Ajrumiyyah → Madinah",
        subtitle:
          "After you study an Ājurrūmiyyah chapter, open these Madinah Book 1–3 lessons in your own copy and parse the sentences with the terms you just learned.",
        meta: [
          { label: "Completed", value: `${progress.completed} / ${progress.total}` },
          { label: "Book 1", value: `${progress.books[0].completed}/${progress.books[0].total}` },
          { label: "Book 2", value: `${progress.books[1].completed}/${progress.books[1].total}` },
          { label: "Book 3", value: `${progress.books[2].completed}/${progress.books[2].total}` },
        ],
      }}
    >
      <div className="mm">
        <MadinahProgressBoard
          progress={progress}
          isDone={isDone}
          onToggle={toggle}
          onOpenLesson={selectLesson}
        />

        <section className="course-card mm-howto">
          <h2>How to use this page</h2>
          <ol>
            <li>Study the Ajrumiyyah chapter as usual.</li>
            <li>Come here and pick that chapter (or the Madinah lesson you are already on).</li>
            <li>Open the listed lesson in your physical Madinah book, then tick the checkbox when you finish it.</li>
          </ol>
          <p className="mm-howto__note">
            This is not a 1:1 chapter pairing. One Madinah lesson often practises several Ajrumiyyah topics. Primary = open first; extra = more sentences; later = when Madinah finally names the rule (often Book 3).
          </p>
        </section>

        <div className="mm-modes" role="tablist" aria-label="Map direction">
          <button
            type="button"
            role="tab"
            aria-selected={mode === "ajrumiyyah"}
            className={`mm-mode${mode === "ajrumiyyah" ? " is-on" : ""}`}
            onClick={() => setMode("ajrumiyyah")}
          >
            I studied Ajrumiyyah
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={mode === "madinah"}
            className={`mm-mode${mode === "madinah" ? " is-on" : ""}`}
            onClick={() => setMode("madinah")}
          >
            I am in a Madinah lesson
          </button>
        </div>

        {mode === "ajrumiyyah" ? (
          <div className="mm-split">
            <article className="course-card mm-detail" id="mm-detail">
              <p className="mm-detail__kicker">Ajrumiyyah chapter {chapter.num}</p>
              <h2>{chapter.translit}</h2>
              <p className="mm-detail__ar" dir="rtl">
                {chapter.ar}
              </p>
              {chapterMap.note ? <p className="mm-note">{chapterMap.note}</p> : null}
              {chapterMap.links.length === 0 ? (
                <p className="mm-empty">No Madinah lessons mapped for this chapter yet.</p>
              ) : (
                <ol className="mm-links">
                  {chapterMap.links.map((link) => {
                    const id = madinahProgressId(link.book, link.lesson);
                    const done = isDone(id);
                    return (
                      <li key={`${link.book}-${link.lesson}-${link.rank}`} className={done ? "is-done" : ""}>
                        <div className="mm-link__head">
                          <LessonCheck
                            done={done}
                            label={`${bookLabel(link.book)} lesson ${link.lesson}`}
                            onToggle={() => toggle(id)}
                          />
                          <LessonChip book={link.book} lesson={link.lesson} />
                          <RankBadge rank={link.rank} />
                        </div>
                        <p className="mm-link__why">{link.why}</p>
                        <p className="mm-link__do">
                          <strong>Do this:</strong> {link.do}
                        </p>
                        <button
                          type="button"
                          className="mm-link__flip"
                          onClick={() => selectLesson(link.book, link.lesson)}
                        >
                          See this Madinah lesson →
                        </button>
                      </li>
                    );
                  })}
                </ol>
              )}
            </article>

            <nav className="course-card mm-nav" aria-label="Ajrumiyyah chapters">
              {AJRUMIYYAH_GROUPS.map((group) => (
                <div key={group.title} className="mm-nav__unit">
                  <p className="mm-nav__unit-title">{group.title}</p>
                  <ul>
                    {group.ids.map((id) => {
                      const item = chapterById(id);
                      if (!item) return null;
                      const count = AJRUMIYYAH_MADINAH_MAP[id]?.links.length ?? 0;
                      return (
                        <li key={id}>
                          <button
                            type="button"
                            className={`mm-nav__btn${chapter.id === id ? " is-on" : ""}`}
                            onClick={() => selectChapter(id)}
                          >
                            <span className="mm-nav__num">{item.num}</span>
                            <span className="mm-nav__labels">
                              <span className="mm-nav__en">{item.translit}</span>
                              <span className="mm-nav__ar" dir="rtl">
                                {item.ar}
                              </span>
                            </span>
                            <span className="mm-nav__count">{count}</span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </nav>
          </div>
        ) : (
          <div className="mm-split">
            <article className="course-card mm-detail" id="mm-detail">
              <p className="mm-detail__kicker">
                {bookLabel(book)} · Lesson {lesson}
              </p>
              <div className="mm-detail__title-row">
                <h2>{lessonMeta?.en ?? "Madinah lesson"}</h2>
                <label className="mm-complete">
                  <LessonCheck
                    done={currentLessonDone}
                    label={`${bookLabel(book)} lesson ${lesson}`}
                    onToggle={() => toggle(currentLessonId)}
                  />
                  <span>{currentLessonDone ? "Completed" : "Mark complete"}</span>
                </label>
              </div>
              {lessonMeta?.ar ? (
                <p className="mm-detail__ar" dir="rtl">
                  {lessonMeta.ar}
                </p>
              ) : null}
              {reverseHits.length === 0 ? (
                <p className="mm-empty">
                  This lesson is useful Arabic, but it is not a primary practice target for an Ajrumiyyah chapter. Morphology, numbers, and vocabulary often sit here.
                </p>
              ) : (
                <ol className="mm-links">
                  {reverseHits.map((hit) => {
                    const item = chapterById(hit.chapterId);
                    return (
                      <li key={`${hit.chapterId}-${hit.rank}`}>
                        <div className="mm-link__head">
                          <span className="mm-chip">
                            <span className="mm-chip__book">Ch. {item?.num}</span>
                            <span className="mm-chip__en">{item?.translit}</span>
                          </span>
                          <RankBadge rank={hit.rank} />
                        </div>
                        {item?.ar ? (
                          <p className="mm-link__ar" dir="rtl">
                            {item.ar}
                          </p>
                        ) : null}
                        <p className="mm-link__why">{hit.why}</p>
                        <p className="mm-link__do">
                          <strong>Do this:</strong> {hit.do}
                        </p>
                        <div className="mm-link__actions">
                          <button
                            type="button"
                            className="mm-link__flip"
                            onClick={() => selectChapter(hit.chapterId)}
                          >
                            Open Ajrumiyyah side of map
                          </button>
                          <Link
                            className="mm-link__flip mm-link__flip--ghost"
                            to={ajrumiyyahStudyPath(hit.chapterId)}
                          >
                            Study that chapter →
                          </Link>
                        </div>
                      </li>
                    );
                  })}
                </ol>
              )}
            </article>

            <nav className="course-card mm-nav" aria-label="Madinah lessons">
              {MADINAH_BOOKS.map((item) => (
                <div key={item.id} className="mm-nav__unit">
                  <p className="mm-nav__unit-title">
                    {item.title}
                    <span dir="rtl">{item.ar}</span>
                  </p>
                  <ul className="mm-nav__lessons">
                    {madinahLessonsForBook(item.id).map((row) => {
                      const hits = ajrumiyyahChaptersForLesson(row.book, row.lesson).length;
                      const id = madinahProgressId(row.book, row.lesson);
                      const done = isDone(id);
                      return (
                        <li key={id} className={`mm-nav__row${done ? " is-done" : ""}`}>
                          <LessonCheck
                            done={done}
                            label={`${item.title} lesson ${row.lesson}`}
                            onToggle={() => toggle(id)}
                          />
                          <button
                            type="button"
                            className={`mm-nav__btn${
                              book === row.book && lesson === row.lesson ? " is-on" : ""
                            }`}
                            onClick={() => selectLesson(row.book, row.lesson)}
                          >
                            <span className="mm-nav__num">{row.lesson}</span>
                            <span className="mm-nav__labels">
                              <span className="mm-nav__en">{row.en}</span>
                              <span className="mm-nav__ar" dir="rtl">
                                {row.ar}
                              </span>
                            </span>
                            <span className="mm-nav__count">{hits}</span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </CourseLayout>
  );
}

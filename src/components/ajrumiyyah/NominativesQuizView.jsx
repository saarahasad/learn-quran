import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AJRUMIYYAH_CHAPTERS, ajrumiyyahStudyPath } from "../../data/ajrumiyyahCourse.js";
import { ajrumiyyahNominativesQuizPath, MASTERY_NEEDED } from "../../data/nominativesMastery.js";
import { correctAnswerLabel, isAnswerCorrect } from "../../data/nominativesQuizBank.js";
import { shuffleCopy } from "../../utils/nominativesMasteryStore.js";
import { useNominativesMastery } from "../../hooks/useNominativesMastery.js";

function StreakDots({ streak }) {
  return (
    <span className="nm-dots" aria-label={`${streak} of ${MASTERY_NEEDED} correct repeats`}>
      {Array.from({ length: MASTERY_NEEDED }, (_, index) => (
        <span key={index} className={`nm-dot${index < streak ? " is-on" : ""}`} />
      ))}
    </span>
  );
}

function HighlightedSentence({ ar, highlight }) {
  if (!ar) return null;
  if (!highlight || !ar.includes(highlight)) {
    return (
      <p className="nm-sentence" dir="rtl" lang="ar">
        {ar}
      </p>
    );
  }
  const parts = ar.split(highlight);
  return (
    <p className="nm-sentence" dir="rtl" lang="ar">
      {parts.map((part, index) => (
        <span key={index}>
          {part}
          {index < parts.length - 1 ? <mark>{highlight}</mark> : null}
        </span>
      ))}
    </p>
  );
}

function OptionButton({ item, selected, disabled, onClick }) {
  return (
    <button
      type="button"
      className={`nm-option${selected ? " is-selected" : ""}`}
      disabled={disabled}
      onClick={onClick}
    >
      {item.ar ? (
        <span className="nm-option__ar" dir="rtl" lang="ar">
          {item.ar}
        </span>
      ) : null}
      {item.en ? <span className="nm-option__en">{item.en}</span> : null}
    </button>
  );
}

function McqPrompt({ question, locked, selection, onSelect }) {
  const options = useMemo(() => shuffleCopy(question.options || []), [question.id]);
  return (
    <div className="nm-options">
      {options.map((item) => (
        <OptionButton
          key={item.id}
          item={item}
          selected={selection === item.id}
          disabled={locked}
          onClick={() => onSelect(item.id)}
        />
      ))}
    </div>
  );
}

function RecallPrompt({ question, locked, picked, onPick, onUnpick }) {
  const poolOrder = useMemo(
    () => shuffleCopy((question.tokens || []).map((token) => token.id)),
    [question.id],
  );
  const pickedSet = new Set(picked);
  const remaining = poolOrder.filter((id) => !pickedSet.has(id));

  return (
    <div className="nm-recall">
      <div className="nm-recall__picked" dir="rtl">
        {picked.length === 0 ? (
          <span className="nm-recall__placeholder">Tap the words in order…</span>
        ) : (
          picked.map((id) => {
            const token = question.tokens.find((item) => item.id === id);
            return (
              <button
                key={id}
                type="button"
                className="nm-chip is-picked"
                disabled={locked}
                onClick={() => onUnpick(id)}
              >
                {token?.ar}
              </button>
            );
          })
        )}
      </div>
      <div className="nm-recall__pool" dir="rtl">
        {remaining.map((id) => {
          const token = question.tokens.find((item) => item.id === id);
          return (
            <button
              key={id}
              type="button"
              className="nm-chip"
              disabled={locked}
              onClick={() => onPick(id)}
            >
              {token?.ar}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function ListPrompt({ question, locked, selected, onToggle }) {
  const choices = useMemo(() => shuffleCopy(question.choices || []), [question.id]);
  const selectedSet = new Set(selected);
  return (
    <div className="nm-options nm-options--list">
      {choices.map((item) => (
        <OptionButton
          key={item.id}
          item={item}
          selected={selectedSet.has(item.id)}
          disabled={locked}
          onClick={() => onToggle(item.id)}
        />
      ))}
    </div>
  );
}

function MatchPrompt({ question, locked, pairs, onPair }) {
  const left = question.left || [];
  const right = useMemo(() => shuffleCopy(question.right || []), [question.id]);
  const [activeLeft, setActiveLeft] = useState(null);
  const usedRight = new Set(Object.values(pairs));

  return (
    <div className="nm-match">
      <div className="nm-match__col">
        {left.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`nm-option${activeLeft === item.id ? " is-selected" : ""}${
              pairs[item.id] ? " is-paired" : ""
            }`}
            disabled={locked}
            onClick={() => {
              if (!locked) setActiveLeft(item.id);
            }}
          >
            {item.ar ? (
              <span className="nm-option__ar" dir="rtl" lang="ar">
                {item.ar}
              </span>
            ) : null}
            {item.en ? <span className="nm-option__en">{item.en}</span> : null}
          </button>
        ))}
      </div>
      <div className="nm-match__col">
        {right.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`nm-option${usedRight.has(item.id) ? " is-paired" : ""}`}
            disabled={locked || usedRight.has(item.id)}
            onClick={() => {
              if (locked || !activeLeft) return;
              onPair(activeLeft, item.id);
              setActiveLeft(null);
            }}
          >
            {item.ar ? (
              <span className="nm-option__ar" dir="rtl" lang="ar">
                {item.ar}
              </span>
            ) : null}
            {item.en ? <span className="nm-option__en">{item.en}</span> : null}
          </button>
        ))}
      </div>
    </div>
  );
}

function canSubmit(question, draft) {
  if (!question) return false;
  if (question.type === "cloze" || question.type === "apply" || question.type === "distinguish") {
    return Boolean(draft);
  }
  if (question.type === "recall") {
    return Array.isArray(draft) && draft.length === (question.correctOrder?.length || 0);
  }
  if (question.type === "list") {
    return Array.isArray(draft) && draft.length > 0;
  }
  if (question.type === "match") {
    const needed = Object.keys(question.pairs || {});
    return needed.length > 0 && needed.every((id) => draft?.[id]);
  }
  return false;
}

function emptyDraft(question) {
  if (!question) return null;
  if (question.type === "recall" || question.type === "list") return [];
  if (question.type === "match") return {};
  return null;
}

export default function NominativesQuizView({ chapterId, track }) {
  const { chapterStats, nextQuestion, recordAnswer, recordFor } = useNominativesMastery();
  const [lastId, setLastId] = useState(null);
  const [active, setActive] = useState(null);
  const [draft, setDraft] = useState(null);
  const [locked, setLocked] = useState(false);
  const [wasCorrect, setWasCorrect] = useState(null);
  const [ready, setReady] = useState(false);

  const chapter = chapterId
    ? AJRUMIYYAH_CHAPTERS.find((item) => item.id === chapterId)
    : null;
  const stats = chapterStats(chapterId);
  const mixed = !chapterId;

  useEffect(() => {
    setLastId(null);
    setActive(null);
    setDraft(null);
    setLocked(false);
    setWasCorrect(null);
    setReady(false);
  }, [chapterId, track]);

  useEffect(() => {
    if (active || locked) return;
    const next = nextQuestion({ chapterId, track, lastId });
    setActive(next);
    setDraft(emptyDraft(next));
    setReady(true);
  }, [active, locked, chapterId, track, lastId, nextQuestion]);

  function submit() {
    if (!active || locked || !canSubmit(active, draft)) return;
    const ok = isAnswerCorrect(active, draft);
    setWasCorrect(ok);
    setLocked(true);
    recordAnswer(active.id, ok);
  }

  function goNext() {
    setLastId(active?.id ?? null);
    setActive(null);
    setDraft(null);
    setLocked(false);
    setWasCorrect(null);
    setReady(false);
  }

  if (chapterId && !chapter) {
    return (
      <div className="ajrumiyyah-content nm-page">
        <p>Unknown chapter.</p>
        <Link to={ajrumiyyahNominativesQuizPath()}>Back to Nominatives Trial</Link>
      </div>
    );
  }

  if (!ready) {
    return (
      <div className="ajrumiyyah-content nm-page">
        <p className="nm-loading">Loading question…</p>
      </div>
    );
  }

  if (!active) {
    const doneLabel = mixed
      ? "All Nominatives trial items are mastered."
      : track === "matn"
        ? "All matn items in this chapter are mastered."
        : track === "rule"
          ? "All rule items in this chapter are mastered."
          : "Matn and rules for this chapter are mastered.";
    return (
      <div className="ajrumiyyah-content nm-page">
        <div className="course-card nm-done">
          <h1>{mixed ? "Nominatives complete" : "Chapter complete"}</h1>
          {chapter ? (
            <p className="nm-done__ar" dir="rtl">
              {chapter.ar}
            </p>
          ) : (
            <p className="nm-done__ar" dir="rtl">
              مَرْفُوعَاتُ الْأَسْمَاءِ
            </p>
          )}
          <p>{doneLabel}</p>
          <p>
            Matn: {stats.matn.mastered}/{stats.matn.total}
            {stats.matnDone ? " ✅" : ""} · Rules: {stats.rule.mastered}/{stats.rule.total}
            {stats.ruleDone ? " ✅" : ""}
          </p>
          <div className="nm-done__actions">
            <Link className="course-btn primary" to={ajrumiyyahNominativesQuizPath()}>
              Nominatives dashboard
            </Link>
            <Link
              className="course-btn ghost"
              to={chapter ? ajrumiyyahStudyPath(chapter.id) : ajrumiyyahStudyPath("marfuat")}
            >
              Back to study
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const record = recordFor(active.id);
  const tag = active.track === "matn" ? "MATN" : "RULE";
  const toneClass = active.track === "matn" ? "nm-quiz--matn" : "nm-quiz--rule";
  const streakNow = record.streak;

  return (
    <div className={`ajrumiyyah-content nm-page nm-quiz ${toneClass}`}>
      <div className="nm-quiz-bar">
        <Link to={ajrumiyyahNominativesQuizPath()} className="nm-quiz-bar__back">
          ← Nominatives Trial
        </Link>
        <div className="nm-quiz-bar__stats">
          <span>
            Matn: {stats.matn.mastered}/{stats.matn.total}
            {stats.matnDone ? " ✅" : ""}
          </span>
          <span>
            Rules: {stats.rule.mastered}/{stats.rule.total}
            {stats.ruleDone ? " ✅" : ""}
          </span>
        </div>
      </div>

      <article className="course-card nm-card">
        <header className="nm-card__head">
          <span className={`nm-tag nm-tag--${active.track}`}>{tag}</span>
          {mixed ? (
            <span className="nm-card__ch">
              Ch. {AJRUMIYYAH_CHAPTERS.find((item) => item.id === active.chapterId)?.num}
            </span>
          ) : null}
          <span className="nm-card__topic" dir="rtl" lang="ar">
            {active.topicAr}
          </span>
          {active.topicEn ? <span className="nm-card__topic-en">{active.topicEn}</span> : null}
          <StreakDots streak={streakNow} />
        </header>

        <h2 className="nm-card__prompt">{active.prompt}</h2>
        {active.stemAr ? (
          <p className="nm-stem" dir="rtl" lang="ar">
            {active.stemAr}
          </p>
        ) : null}
        {active.stemEn ? <p className="nm-stem-en">{active.stemEn}</p> : null}
        <HighlightedSentence ar={active.sentenceAr} highlight={active.highlight} />
        {active.sentenceEn ? <p className="nm-sentence-en">{active.sentenceEn}</p> : null}

        {(active.type === "cloze" || active.type === "apply" || active.type === "distinguish") && (
          <McqPrompt question={active} locked={locked} selection={draft} onSelect={setDraft} />
        )}
        {active.type === "recall" && (
          <RecallPrompt
            question={active}
            locked={locked}
            picked={Array.isArray(draft) ? draft : []}
            onPick={(id) => setDraft((prev) => [...(prev || []), id])}
            onUnpick={(id) => setDraft((prev) => (prev || []).filter((item) => item !== id))}
          />
        )}
        {active.type === "list" && (
          <ListPrompt
            question={active}
            locked={locked}
            selected={Array.isArray(draft) ? draft : []}
            onToggle={(id) =>
              setDraft((prev) => {
                const list = prev || [];
                return list.includes(id) ? list.filter((item) => item !== id) : [...list, id];
              })
            }
          />
        )}
        {active.type === "match" && (
          <MatchPrompt
            question={active}
            locked={locked}
            pairs={draft && typeof draft === "object" && !Array.isArray(draft) ? draft : {}}
            onPair={(leftId, rightId) => setDraft((prev) => ({ ...(prev || {}), [leftId]: rightId }))}
          />
        )}

        {locked ? (
          <div className={`nm-feedback${wasCorrect ? " is-ok" : " is-bad"}`} aria-live="polite">
            <p className="nm-feedback__verdict">
              {wasCorrect
                ? `Correct. This item is now ${streakNow}/${MASTERY_NEEDED}${
                    streakNow >= MASTERY_NEEDED ? " — mastered." : "."
                  }`
                : "Not yet — streak reset to 0. This item will return sooner."}
            </p>
            <p className="nm-feedback__answer">
              <strong>Answer:</strong> {correctAnswerLabel(active)}
            </p>
            {active.explanation ? <p className="nm-feedback__explain">{active.explanation}</p> : null}
            <button type="button" className="course-btn primary" onClick={goNext}>
              Next
            </button>
          </div>
        ) : (
          <button
            type="button"
            className="course-btn primary nm-submit"
            disabled={!canSubmit(active, draft)}
            onClick={submit}
          >
            Check
          </button>
        )}
      </article>
    </div>
  );
}

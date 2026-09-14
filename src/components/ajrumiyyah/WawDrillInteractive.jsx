import { useMemo, useState } from "react";
import {
  WAW_ANSWER_KEY,
  WAW_DRILL_INSTRUCTION,
  WAW_DRILL_PASSAGE,
  WAW_MARKS,
  WAW_QUIZ,
  WAW_REASONS,
  WAW_WORD_TYPES,
  tokenizeWawPassage,
} from "../../data/wawDrillInteractive.js";
import QuizVoiceAnswer from "./QuizVoiceAnswer.jsx";

const DRILL_ID = "waw-niyabah";

function emptyEntry() {
  return { mark: "", type: "", reason: "none" };
}

export default function WawDrillInteractive() {
  const tokens = useMemo(() => tokenizeWawPassage(WAW_DRILL_PASSAGE), []);
  const [selected, setSelected] = useState(() => new Set());
  const [entries, setEntries] = useState({});
  const [checked, setChecked] = useState(false);
  const [showKey, setShowKey] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizRevealed, setQuizRevealed] = useState({});
  const [quizChecked, setQuizChecked] = useState(false);

  const answerCount = Object.keys(WAW_ANSWER_KEY).length;

  function toggleWord(token) {
    const { bare, index } = token;
    if (!bare || bare === "..." || bare === "…") return;
    setChecked(false);
    setSelected((prev) => {
      const next = new Set(prev);
      const key = `${index}:${bare}`;
      if (next.has(key)) {
        next.delete(key);
        setEntries((e) => {
          const copy = { ...e };
          delete copy[key];
          return copy;
        });
      } else {
        next.add(key);
        setEntries((e) => ({ ...e, [key]: emptyEntry() }));
      }
      return next;
    });
  }

  function updateEntry(key, patch) {
    setChecked(false);
    setEntries((e) => ({
      ...e,
      [key]: { ...(e[key] || emptyEntry()), ...patch },
    }));
  }

  const selectedList = useMemo(() => {
    return [...selected]
      .map((key) => {
        const [indexStr, bare] = key.split(":");
        const index = Number(indexStr);
        const token = tokens[index];
        return {
          key,
          bare,
          display: token?.display || bare,
          expected: WAW_ANSWER_KEY[bare] || null,
          entry: entries[key] || emptyEntry(),
        };
      })
      .sort((a, b) => Number(a.key.split(":")[0]) - Number(b.key.split(":")[0]));
  }, [selected, entries, tokens]);

  const score = useMemo(() => {
    if (!checked) return null;
    let correct = 0;
    let classified = 0;
    for (const row of selectedList) {
      if (!row.expected) continue;
      classified += 1;
      const markOk = row.entry.mark === row.expected.mark;
      const typeOk = row.entry.type === row.expected.type;
      const reasonOk =
        row.expected.mark !== "dammah-muqaddara"
          ? true
          : row.entry.reason === row.expected.reason;
      if (markOk && typeOk && reasonOk) correct += 1;
    }
    const foundTargets = selectedList.filter((r) => r.expected).length;
    const missed = answerCount - foundTargets;
    const extras = selectedList.filter((r) => !r.expected).length;
    return { correct, classified, foundTargets, missed, extras, total: answerCount };
  }, [checked, selectedList, answerCount]);

  function revealAll() {
    const nextSelected = new Set();
    const nextEntries = {};
    tokens.forEach((token) => {
      const ans = WAW_ANSWER_KEY[token.bare];
      if (!ans) return;
      const key = `${token.index}:${token.bare}`;
      nextSelected.add(key);
      nextEntries[key] = {
        mark: ans.mark,
        type: ans.type,
        reason: ans.reason,
      };
    });
    setSelected(nextSelected);
    setEntries(nextEntries);
    setShowKey(true);
    setChecked(true);
  }

  function resetExercise() {
    setSelected(new Set());
    setEntries({});
    setChecked(false);
    setShowKey(false);
  }

  return (
    <div className="ajr-dammah-drill">
      <header className="ajr-dammah-drill__head">
        <span className="ajr-dammah-drill__badge">Practice</span>
        <h3 className="ajr-dammah-drill__title">
          <span dir="rtl">تَمْرِينٌ</span>
          <span>Exercise — wāw in place of ḍammah</span>
        </h3>
        <p className="ajr-dammah-drill__instruction" dir="rtl">
          {WAW_DRILL_INSTRUCTION.ar}
        </p>
        <p className="ajr-dammah-drill__instruction-en">{WAW_DRILL_INSTRUCTION.en}</p>
        <p className="ajr-dammah-drill__hint">
          Tap every word marfūʿ by ḍammah or by wāw, then classify each one below.
        </p>
      </header>

      <div className="ajr-dammah-drill__passage" dir="rtl">
        {tokens.map((token) => {
          const key = `${token.index}:${token.bare}`;
          const isOn = selected.has(key);
          const isTarget = Boolean(WAW_ANSWER_KEY[token.bare]);
          const showState = checked || showKey;
          let stateClass = "";
          if (showState && isOn && isTarget) stateClass = " is-correct";
          else if (showState && isOn && !isTarget) stateClass = " is-extra";
          else if (showState && !isOn && isTarget && showKey) stateClass = " is-missed";
          else if (isOn) stateClass = " is-selected";

          return (
            <button
              key={key}
              type="button"
              className={`ajr-dammah-drill__word${stateClass}`}
              onClick={() => toggleWord(token)}
            >
              {token.display}
            </button>
          );
        })}
      </div>

      {selectedList.length > 0 && (
        <div className="ajr-dammah-drill__classify">
          <h4>Your selections ({selectedList.length})</h4>
          <ul>
            {selectedList.map((row) => {
              const needsReason = row.entry.mark === "dammah-muqaddara";
              const rowOk =
                checked &&
                row.expected &&
                row.entry.mark === row.expected.mark &&
                row.entry.type === row.expected.type &&
                (row.expected.mark !== "dammah-muqaddara" ||
                  row.entry.reason === row.expected.reason);
              const rowBad = checked && row.expected && !rowOk;
              const rowExtra = checked && !row.expected;

              return (
                <li
                  key={row.key}
                  className={
                    rowOk
                      ? "ajr-dammah-drill__row is-ok"
                      : rowBad || rowExtra
                        ? "ajr-dammah-drill__row is-bad"
                        : "ajr-dammah-drill__row"
                  }
                >
                  <div className="ajr-dammah-drill__row-word" dir="rtl">
                    {row.display}
                  </div>
                  <label>
                    <span>Raised by</span>
                    <select
                      value={row.entry.mark}
                      onChange={(e) =>
                        updateEntry(row.key, {
                          mark: e.target.value,
                          reason:
                            e.target.value === "dammah-muqaddara"
                              ? row.entry.reason === "none"
                                ? "taadhdhur"
                                : row.entry.reason
                              : "none",
                        })
                      }
                    >
                      <option value="">—</option>
                      {WAW_MARKS.map((m) => (
                        <option key={m.id} value={m.id}>
                          {m.en} · {m.ar}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label>
                    <span>Type</span>
                    <select
                      value={row.entry.type}
                      onChange={(e) => updateEntry(row.key, { type: e.target.value })}
                    >
                      <option value="">—</option>
                      {WAW_WORD_TYPES.map((t) => (
                        <option key={t.id} value={t.id}>
                          {t.en} · {t.ar}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className={needsReason ? "" : "is-disabled"}>
                    <span>Reason if implicit</span>
                    <select
                      value={needsReason ? row.entry.reason : "none"}
                      disabled={!needsReason}
                      onChange={(e) => updateEntry(row.key, { reason: e.target.value })}
                    >
                      {!needsReason && <option value="none">—</option>}
                      {needsReason &&
                        WAW_REASONS.filter((r) => r.id !== "none").map((r) => (
                          <option key={r.id} value={r.id}>
                            {r.en} · {r.ar}
                          </option>
                        ))}
                    </select>
                  </label>
                  {checked && row.expected && (
                    <p className="ajr-dammah-drill__feedback">{row.expected.note}</p>
                  )}
                  {checked && !row.expected && (
                    <p className="ajr-dammah-drill__feedback">
                      Not counted as marfūʿ by ḍammah or wāw in this answer key.
                    </p>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}

      <div className="ajr-dammah-drill__actions">
        <button type="button" className="course-btn secondary" onClick={() => setChecked(true)}>
          Check exercise
        </button>
        <button type="button" className="course-btn ghost" onClick={revealAll}>
          Show solution
        </button>
        <button type="button" className="course-btn ghost" onClick={resetExercise}>
          Reset
        </button>
      </div>

      {score && (
        <p className="ajr-dammah-drill__score">
          Classified correctly: {score.correct}/{score.classified || 0}
          {" · "}
          Targets found: {score.foundTargets}/{score.total}
          {score.missed > 0 ? ` · Missed: ${score.missed}` : ""}
          {score.extras > 0 ? ` · Extra picks: ${score.extras}` : ""}
        </p>
      )}

      <section className="ajr-dammah-drill__quiz">
        <header className="ajr-dammah-drill__head">
          <span className="ajr-dammah-drill__badge ajr-dammah-drill__badge--quiz">Quiz</span>
          <h3 className="ajr-dammah-drill__title">
            <span dir="rtl">أَسْئِلَةٌ</span>
            <span>Questions</span>
          </h3>
          <p className="ajr-dammah-drill__hint">
            Speak your answers — recordings stay on this laptop (browser storage + download).
          </p>
        </header>

        <ol className="ajr-dammah-drill__quiz-list">
          {WAW_QUIZ.map((q, i) => {
            const revealed = quizRevealed[q.id];
            const choice = quizAnswers[q.id];
            const choiceOk = quizChecked && q.kind === "choice" && choice === q.answer;
            const choiceBad =
              quizChecked && q.kind === "choice" && choice && choice !== q.answer;

            return (
              <li key={q.id} className="ajr-dammah-drill__quiz-item">
                <div className="ajr-dammah-drill__q-block">
                  <p className="ajr-dammah-drill__q-ar" dir="rtl">
                    {i + 1}. {q.ar}
                  </p>
                  <p className="ajr-dammah-drill__q-en">{q.en}</p>
                </div>

                {q.kind === "choice" ? (
                  <div className="ajr-dammah-drill__choices" role="group">
                    {q.choices.map((c) => (
                      <label
                        key={c.id}
                        className={`ajr-dammah-drill__choice${
                          choice === c.id ? " is-on" : ""
                        }${quizChecked && c.id === q.answer ? " is-answer" : ""}${
                          choiceBad && choice === c.id ? " is-wrong" : ""
                        }`}
                      >
                        <input
                          type="radio"
                          name={q.id}
                          value={c.id}
                          checked={choice === c.id}
                          onChange={() => {
                            setQuizChecked(false);
                            setQuizAnswers((a) => ({ ...a, [q.id]: c.id }));
                          }}
                        />
                        {c.label}
                      </label>
                    ))}
                  </div>
                ) : (
                  <QuizVoiceAnswer drillId={DRILL_ID} questionId={q.id} />
                )}

                <div className="ajr-dammah-drill__quiz-row-actions">
                  <button
                    type="button"
                    className="course-btn ghost"
                    onClick={() =>
                      setQuizRevealed((r) => ({ ...r, [q.id]: !r[q.id] }))
                    }
                  >
                    {revealed ? "Hide model answer" : "Show model answer"}
                  </button>
                  {q.kind === "choice" && choiceOk && (
                    <span className="ajr-dammah-drill__pill ok">Correct</span>
                  )}
                  {choiceBad && <span className="ajr-dammah-drill__pill bad">Try again</span>}
                </div>

                {revealed && (
                  <div className="ajr-dammah-drill__model">
                    {q.kind === "choice" ? q.explain : q.model}
                  </div>
                )}
              </li>
            );
          })}
        </ol>

        <div className="ajr-dammah-drill__actions">
          <button
            type="button"
            className="course-btn secondary"
            onClick={() => setQuizChecked(true)}
          >
            Check multiple-choice
          </button>
        </div>
      </section>
    </div>
  );
}

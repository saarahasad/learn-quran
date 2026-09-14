import { useMemo, useState } from "react";
import { tokenizeArabicPassage } from "../../utils/tokenizeArabicPassage.js";

function labelTone(labelId = "") {
  const id = String(labelId);
  if (id === "ism" || id.startsWith("ism-")) return "ism";
  if (id === "fiil" || id.startsWith("fiil-")) return "fiil";
  if (id === "harf") return "harf";
  if (id === "mabni") return "mabni";
  if (id === "raf" || id.startsWith("raf")) return "raf";
  if (id === "nasb" || id.startsWith("nasb")) return "nasb";
  if (id === "khafd" || id.startsWith("khafd")) return "khafd";
  if (id === "jazm" || id.startsWith("jazm")) return "jazm";
  if (id === "other") return "other";
  return "neutral";
}

function ClassifyPassage({ passage, labels, targetIds, storagePrefix, onProgress, index = 0 }) {
  const tokens = useMemo(() => tokenizeArabicPassage(passage.ar), [passage.ar]);
  const answerKey = passage.answers || {};
  const targetCount = Object.keys(answerKey).length;

  const [tags, setTags] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(`${storagePrefix}:${passage.id}`) || "{}");
    } catch {
      return {};
    }
  });
  const [activeLabel, setActiveLabel] = useState(labels[0]?.id || "");
  const [checked, setChecked] = useState(false);
  const [revealed, setRevealed] = useState(false);

  const activeMeta = labels.find((l) => l.id === activeLabel);

  function persist(next) {
    setTags(next);
    try {
      localStorage.setItem(`${storagePrefix}:${passage.id}`, JSON.stringify(next));
    } catch {
      /* ignore */
    }
    onProgress?.();
  }

  function tapToken(token) {
    if (!activeLabel || !token.bare) return;
    setChecked(false);
    const next = { ...tags };
    if (next[token.bare] === activeLabel) delete next[token.bare];
    else next[token.bare] = activeLabel;
    persist(next);
  }

  function reveal() {
    persist({ ...answerKey });
    setRevealed(true);
    setChecked(true);
  }

  function reset() {
    persist({});
    setChecked(false);
    setRevealed(false);
  }

  let correct = 0;
  let taggedTargets = 0;
  if (checked) {
    for (const [bare, label] of Object.entries(tags)) {
      if (answerKey[bare]) {
        taggedTargets += 1;
        if (answerKey[bare] === label) correct += 1;
      }
    }
  }
  const missed = checked ? targetCount - taggedTargets : 0;
  const taggedCount = Object.keys(tags).length;

  return (
    <div className="ajr-classify-pass">
      <div className="ajr-classify-pass__top">
        <span className="ajr-classify-pass__num">Sentence {index + 1}</span>
        {checked ? (
          <span className={`ajr-classify-pass__score-pill${correct === targetCount && missed === 0 ? " is-perfect" : ""}`}>
            {correct}/{targetCount}
            {missed > 0 ? ` · ${missed} missed` : ""}
          </span>
        ) : (
          <span className="ajr-classify-pass__progress-pill">
            {taggedCount} tagged
          </span>
        )}
      </div>

      <div className="ajr-classify-pass__palette" role="group" aria-label="Labels">
        {labels.map((lab) => (
          <button
            key={lab.id}
            type="button"
            className={`ajr-classify-pass__chip is-tone-${labelTone(lab.id)}${activeLabel === lab.id ? " is-active" : ""}`}
            onClick={() => setActiveLabel(lab.id)}
          >
            <span dir="rtl">{lab.ar}</span>
            <span>{lab.en}</span>
          </button>
        ))}
      </div>

      {activeMeta ? (
        <p className={`ajr-classify-pass__hint is-tone-${labelTone(activeLabel)}`}>
          Selected <strong dir="rtl">{activeMeta.ar}</strong> — tap a word to tag it
        </p>
      ) : null}

      <div className="ajr-classify-pass__words" dir="rtl">
        {tokens.map((token) => {
          const label = tags[token.bare];
          const expected = answerKey[token.bare];
          const tone = labelTone(label || "");
          let state = label ? " is-tagged" : "";
          if (checked && expected && label === expected) state = " is-ok";
          else if (checked && expected && label && label !== expected) state = " is-bad";
          else if (checked && !expected && label && targetIds?.includes(label)) state = " is-extra";
          else if (checked && revealed && expected && !label) state = " is-missed";

          return (
            <button
              key={`${token.index}:${token.bare}`}
              type="button"
              className={`ajr-classify-pass__word is-tone-${tone}${state}`}
              onClick={() => tapToken(token)}
              title={label || undefined}
            >
              <span className="ajr-classify-pass__word-ar">{token.display}</span>
              {label ? (
                <span className="ajr-classify-pass__tag">
                  {labels.find((l) => l.id === label)?.ar || label}
                </span>
              ) : (
                <span className="ajr-classify-pass__tag is-empty">tap</span>
              )}
            </button>
          );
        })}
      </div>

      <div className="ajr-classify-pass__actions">
        <button type="button" className="course-btn secondary" onClick={() => setChecked(true)}>
          Check
        </button>
        <button type="button" className="course-btn ghost" onClick={reveal}>
          Show solution
        </button>
        <button type="button" className="course-btn ghost" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

function FillBlankTool({ tool, storagePrefix, onProgress }) {
  const [answers, setAnswers] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(`${storagePrefix}:blanks`) || "{}");
    } catch {
      return {};
    }
  });

  function update(id, value) {
    const next = { ...answers, [id]: value };
    setAnswers(next);
    try {
      localStorage.setItem(`${storagePrefix}:blanks`, JSON.stringify(next));
    } catch {
      /* ignore */
    }
    onProgress?.();
  }

  return (
    <ul className="ajr-fill-blank">
      {tool.blanks.map((row, i) => (
        <li key={row.id} className="ajr-fill-blank__row">
          <span className="ajr-fill-blank__num">{i + 1}</span>
          <div className="ajr-fill-blank__line" dir="rtl">
            {row.before ? <span>{row.before}</span> : null}
            <input
              className="ajr-fill-blank__input"
              dir="rtl"
              placeholder="…"
              value={answers[row.id] || ""}
              onChange={(e) => update(row.id, e.target.value)}
              aria-label={`Blank ${i + 1}`}
            />
            {row.after ? <span>{row.after}</span> : null}
          </div>
          {row.hint ? <span className="ajr-fill-blank__hint">{row.hint}</span> : null}
        </li>
      ))}
    </ul>
  );
}

function SentenceWordsTool({ tool, storagePrefix, onProgress }) {
  const [answers, setAnswers] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(`${storagePrefix}:sentences`) || "{}");
    } catch {
      return {};
    }
  });

  function update(word, value) {
    const next = { ...answers, [word]: value };
    setAnswers(next);
    try {
      localStorage.setItem(`${storagePrefix}:sentences`, JSON.stringify(next));
    } catch {
      /* ignore */
    }
    onProgress?.();
  }

  return (
    <ul className="ajr-sentence-words">
      {tool.words.map((word) => (
        <li key={word} className="ajr-sentence-words__row">
          <span className="ajr-sentence-words__word" dir="rtl">
            {word}
          </span>
          <input
            className="ajr-sentence-words__input"
            dir="rtl"
            placeholder="اكتب جملة مفيدة…"
            value={answers[word] || ""}
            onChange={(e) => update(word, e.target.value)}
          />
        </li>
      ))}
    </ul>
  );
}

/**
 * Specialized interactive exercise tools (classify / fill / sentence builder).
 */
export default function PassageClassifyTool({ tool, chapterId, lineIdx, onProgress }) {
  const storagePrefix = `ajr-tool:${chapterId}:${lineIdx}:${tool.id}`;
  const [done, setDone] = useState(() => {
    try {
      return localStorage.getItem(`${storagePrefix}:done`) === "1";
    } catch {
      return false;
    }
  });

  function toggleDone() {
    const next = !done;
    setDone(next);
    try {
      if (next) localStorage.setItem(`${storagePrefix}:done`, "1");
      else localStorage.removeItem(`${storagePrefix}:done`);
    } catch {
      /* ignore */
    }
    onProgress?.();
  }

  return (
    <div className={`ajr-ex-tool${done ? " is-done" : ""}`}>
      <header className="ajr-ex-tool__head">
        <span className="ajr-ex-tool__badge">Interactive</span>
        <h4 className="ajr-ex-tool__title">
          {tool.titleAr ? <span dir="rtl">{tool.titleAr}</span> : null}
          {tool.titleEn ? <span>{tool.titleEn}</span> : null}
        </h4>
        {tool.instructionAr || tool.instructionEn ? (
          <div className="ajr-ex-tool__inst-block">
            {tool.instructionAr ? (
              <p className="ajr-ex-tool__inst" dir="rtl">
                {tool.instructionAr}
              </p>
            ) : null}
            {tool.instructionEn ? (
              <p className="ajr-ex-tool__inst-en">{tool.instructionEn}</p>
            ) : null}
          </div>
        ) : null}
      </header>

      {tool.kind === "classify" && (
        <div className="ajr-classify-grid">
          {tool.passages?.map((passage, i) => (
            <ClassifyPassage
              key={passage.id}
              passage={passage}
              labels={tool.labels}
              targetIds={tool.targetIds}
              storagePrefix={storagePrefix}
              onProgress={onProgress}
              index={i}
            />
          ))}
        </div>
      )}

      {tool.kind === "fill-blank" && (
        <FillBlankTool tool={tool} storagePrefix={storagePrefix} onProgress={onProgress} />
      )}

      {tool.kind === "sentence-words" && (
        <SentenceWordsTool tool={tool} storagePrefix={storagePrefix} onProgress={onProgress} />
      )}

      <div className="ajr-ex-tool__footer">
        <button
          type="button"
          className={`course-btn ${done ? "primary" : "ghost"}`}
          onClick={toggleDone}
        >
          {done ? "✓ Exercise marked done" : "Mark exercise done"}
        </button>
      </div>
    </div>
  );
}

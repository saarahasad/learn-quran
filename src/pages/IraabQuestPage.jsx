import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  IRAAB_CASTLES,
  IRAAB_PATTERNS,
  IRAAB_QUESTS,
} from "../data/iraabKingdom.js";
import "../styles/iraabQuest.css";

function shuffle(arr) {
  const a = [...arr];
  for (let n = a.length - 1; n > 0; n--) {
    const j = Math.floor(Math.random() * (n + 1));
    [a[n], a[j]] = [a[j], a[n]];
  }
  return a;
}

function castleChoices() {
  return Object.values(IRAAB_CASTLES).map((c) => ({
    value: c.id,
    label: c.name,
    ar: c.ar,
    color: c.color,
  }));
}

function signChoices(castleId) {
  const c = IRAAB_CASTLES[castleId];
  const seen = new Set();
  return c.doors
    .filter((d) => {
      if (seen.has(d.name)) return false;
      seen.add(d.name);
      return true;
    })
    .map((d) => ({ value: d.name, label: d.name, ar: d.badge, color: c.color }));
}

function countChoices() {
  return [
    { value: "1", label: "One seal", ar: "١" },
    { value: "2", label: "Two seals", ar: "٢" },
    { value: "3", label: "Three seals", ar: "٣" },
    { value: "4", label: "Four seals", ar: "٤" },
  ];
}

function optionsFor(q) {
  if (q.pick === "castle") return castleChoices();
  if (q.pick === "count") return countChoices();
  return signChoices(q.castle);
}

export default function IraabQuestPage() {
  const [order, setOrder] = useState(() => shuffle(IRAAB_QUESTS));
  const [i, setI] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [picked, setPicked] = useState(null);
  const [done, setDone] = useState(false);

  const q = order[i];
  const choices = useMemo(() => (q ? shuffle(optionsFor(q)) : []), [q, i]);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "auto";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  function start() {
    setOrder(shuffle(IRAAB_QUESTS));
    setI(0);
    setScore(0);
    setStreak(0);
    setAnswered(false);
    setPicked(null);
    setDone(false);
  }

  function pick(value) {
    if (answered || !q) return;
    setAnswered(true);
    setPicked(value);
    const ok = String(value) === String(q.answer);
    if (ok) {
      setScore((s) => s + 10 + Math.min(streak, 5) * 2);
      setStreak((s) => s + 1);
    } else {
      setStreak(0);
    }
  }

  function next() {
    if (i + 1 >= order.length) {
      setDone(true);
      return;
    }
    setI((n) => n + 1);
    setAnswered(false);
    setPicked(null);
  }

  const max = order.length * 20;
  const ratio = score / Math.max(max, 1);
  const stars = ratio >= 0.85 ? "★★★" : ratio >= 0.6 ? "★★☆" : "★☆☆";

  return (
    <div className="iraab-quest-root">
      <div className="wrap">
        <header>
          <p className="back-link">
            <Link to="/iraab-kingdom">← Kingdom map</Link>
          </p>
          <div className="kicker">Separate training ground</div>
          <h1>Gate Quest</h1>
          <p className="sub">
            Same traveler, new errand, new gate. Pick the castle — or the stamp —
            the kingdom would issue.
          </p>
        </header>

        <div className="hud">
          <div>
            <span>Score</span>
            <br />
            <b>{score}</b>
          </div>
          <div>
            <span>Streak</span>
            <br />
            <b>{streak}</b>
          </div>
          <div>
            <span>Progress</span>
            <br />
            <b>
              {Math.min(i + 1, order.length)} / {order.length}
            </b>
          </div>
        </div>

        {!done && q ? (
          <div className="card">
            <div className="q-num">
              Errand {i + 1} of {order.length}
            </div>
            <p className="prompt">{q.prompt}</p>
            <div className="choices">
              {choices.map((opt) => {
                let cls = "choice";
                if (answered) {
                  if (String(opt.value) === String(q.answer)) cls += " correct";
                  else if (String(opt.value) === String(picked)) cls += " wrong";
                }
                return (
                  <button
                    key={`${opt.value}-${opt.label}`}
                    type="button"
                    className={cls}
                    disabled={answered}
                    onClick={() => pick(opt.value)}
                  >
                    {opt.label}
                    {opt.ar ? <span className="ar">{opt.ar}</span> : null}
                  </button>
                );
              })}
            </div>
            {answered ? (
              <div className={`feedback show${String(picked) === String(q.answer) ? "" : " bad"}`}>
                {(String(picked) === String(q.answer) ? "✓ " : "→ ") + q.explain}
              </div>
            ) : null}
            <div className="actions">
              {answered ? (
                <button className="btn btn-primary" type="button" onClick={next}>
                  {i + 1 >= order.length ? "See result →" : "Next errand →"}
                </button>
              ) : null}
            </div>
          </div>
        ) : null}

        {done ? (
          <div className="card done show">
            <h2>Gates cleared</h2>
            <div className="stars">{stars}</div>
            <p>Score {score}. The travelers remember who guided them well.</p>
            <div className="actions" style={{ justifyContent: "center" }}>
              <button className="btn btn-primary" type="button" onClick={start}>
                Run the roads again
              </button>
            </div>
          </div>
        ) : null}

        <section className="patterns">
          <h3>Patterns to circle on the mind map</h3>
          {IRAAB_PATTERNS.map((p) => (
            <p className="pat" key={p.title}>
              <b>{p.title}.</b> {p.text}
            </p>
          ))}
        </section>
      </div>
    </div>
  );
}

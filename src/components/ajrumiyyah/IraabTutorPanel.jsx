import { useEffect, useMemo, useRef, useState } from "react";
import { iraabCaseMeta } from "../../utils/iraabDaas.js";
import {
  buildLocalIraabExplanation,
  explainIraabWithTutor,
} from "../../utils/iraabTutor.js";
import {
  CompactCommentaryLinks,
  CompactPoemLinks,
} from "./IraabTutorCharts.jsx";

export default function IraabTutorPanel({
  word,
  analysis,
  sentence = "",
  fullIraab = "",
  tone = "none",
  enabled = true,
}) {
  const local = useMemo(
    () =>
      word && analysis
        ? buildLocalIraabExplanation({ word, analysis, sentence })
        : null,
    [word, analysis, sentence],
  );

  const [pack, setPack] = useState(local);
  const [loading, setLoading] = useState(false);
  const abortRef = useRef(null);

  useEffect(() => {
    setPack(local);
    if (!enabled || !word || !analysis) return undefined;

    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;
    const timer = setTimeout(() => {
      setLoading(true);
      explainIraabWithTutor({
        word,
        analysis,
        sentence,
        fullIraab,
        signal: controller.signal,
      })
        .then((next) => {
          if (!controller.signal.aborted) setPack(next);
        })
        .catch((err) => {
          if (err?.name !== "AbortError") setPack(local);
        })
        .finally(() => {
          if (!controller.signal.aborted) setLoading(false);
        });
    }, 180);

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [enabled, word, analysis, sentence, fullIraab, local]);

  if (!enabled || !word || !analysis) return null;

  const poem = pack?.poem || local?.poem || [];
  const commentary = pack?.commentary || local?.commentary || [];
  const why = pack?.explanation || local?.explanation;
  const caseMeta = iraabCaseMeta(tone);

  return (
    <aside className="ajr-ikb-explain" dir="ltr" aria-label="English iʿrāb">
      <header className="ajr-ikb-explain__head">
        <span className="ajr-ikb-explain__label">English</span>
        <span className={`ajr-ikb-explain__word is-tone-${tone}`} dir="rtl">
          {word}
        </span>
        <span className={`ajr-ikb-case-pill is-tone-${tone}`}>{caseMeta.ar}</span>
        <span className="ajr-ikb-explain__case-en">{caseMeta.en}</span>
      </header>

      <p className={`ajr-ikb-explain__why${loading ? " is-loading" : ""}`}>
        {why || (loading ? "Reading the āyah…" : "")}
      </p>

      {pack?.error && !why ? (
        <p className="ajr-ikb-tutor__error" role="alert">
          {pack.error}
        </p>
      ) : null}

      <CompactPoemLinks poem={poem.slice(0, 1)} />
      <CompactCommentaryLinks commentary={commentary.slice(0, 1)} />
    </aside>
  );
}

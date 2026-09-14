import { useEffect, useMemo, useState } from "react";
import {
  alignSegmentGlosses,
  buildAnalysisWordBreak,
  fetchAyahRangeWordGlosses,
} from "../../utils/iraabWordBreak.js";

function BreakCard({ ar, tr, en, tone }) {
  return (
    <li className={`ikb-break__card${tone ? ` is-tone-${tone}` : ""}`}>
      <span className="ikb-break__ar" dir="rtl" lang="ar">
        {ar}
      </span>
      {tr && tr !== en ? <span className="ikb-break__tr">{tr}</span> : null}
      {en ? <span className="ikb-break__en">{en}</span> : null}
    </li>
  );
}

export default function IraabWordBreak({
  word,
  analysis,
  surah,
  ayah,
  ayahEnd,
}) {
  const [ayahWords, setAyahWords] = useState([]);

  useEffect(() => {
    if (!surah || !ayah) {
      setAyahWords([]);
      return undefined;
    }
    let alive = true;
    fetchAyahRangeWordGlosses(surah, ayah, ayahEnd || ayah)
      .then((words) => {
        if (alive) setAyahWords(words);
      })
      .catch(() => {
        if (alive) setAyahWords([]);
      });
    return () => {
      alive = false;
    };
  }, [surah, ayah, ayahEnd]);

  const quranCards = useMemo(
    () => alignSegmentGlosses(word, ayahWords),
    [word, ayahWords],
  );
  const iraabCards = useMemo(
    () => buildAnalysisWordBreak(analysis, ayahWords),
    [analysis, ayahWords],
  );

  if (!word) return null;

  return (
    <div className="ikb-break">
      <div className="ikb-break__block">
        <p className="ikb-break__label">Word by word</p>
        <ul className="ikb-break__row" dir="rtl">
          {quranCards.map((card, i) => (
            <BreakCard
              key={`q-${i}-${card.ar}`}
              ar={card.ar}
              tr={card.tr}
              en={card.en}
            />
          ))}
        </ul>
      </div>
      {iraabCards.length ? (
        <div className="ikb-break__block">
          <p className="ikb-break__label">Iʿrāb in English</p>
          <ul className="ikb-break__row" dir="rtl">
            {iraabCards.map((card, i) => (
              <BreakCard
                key={`i-${i}-${card.ar}`}
                ar={card.ar}
                tr={card.isTerm ? "" : card.tr}
                en={card.en}
                tone={card.tone}
              />
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

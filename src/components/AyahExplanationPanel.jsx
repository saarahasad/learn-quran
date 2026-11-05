import { useEffect, useMemo, useState } from "react";
import AyahAudioPlayer from "./AyahAudioPlayer.jsx";
import VerseMarker from "./mushaf/VerseMarker.jsx";
import IraabAyahDiagram from "./iraab/IraabAyahDiagram.jsx";
import AyahIraabProse from "./iraab/AyahIraabProse.jsx";
import { useIraabDiagram } from "../hooks/useIraabDiagram.js";
import { loadAyahWords } from "../utils/mushafPageData.js";
import { buildWordByWord } from "../utils/ayahWordByWord.js";
import { getWordRoot, JUZ30_ROOTS } from "../data/juz30WordRoots.js";
import WordStudyPanel from "./WordStudyPanel.jsx";
import { hasAyahRecitation } from "../utils/quranAudio.js";
import { highlightMushafText, toArabicNum } from "../utils/mushafText.js";

export default function AyahExplanationPanel({
  ayah,
  surahNumber = null,
  pages = [],
  onPrevAyah = null,
  onNextAyah = null,
}) {
  const [apiWords, setApiWords] = useState([]);

  useEffect(() => {
    if (!ayah || !surahNumber || !pages.length) {
      setApiWords([]);
      return undefined;
    }

    let cancelled = false;

    loadAyahWords(pages, surahNumber, ayah.n).then((words) => {
      if (!cancelled) setApiWords(words);
    });

    return () => {
      cancelled = true;
    };
  }, [ayah, surahNumber, pages]);

  const iraab = useIraabDiagram(surahNumber, ayah?.n);

  /* Selected word for the word-study panel; tied to the āyah so it clears on navigation */
  const ayahKey = `${surahNumber}:${ayah?.n}`;
  const [picked, setPicked] = useState({ key: null, index: null });
  const pickedIndex = picked.key === ayahKey ? picked.index : null;
  const studyable = surahNumber != null && JUZ30_ROOTS[surahNumber]?.[ayah?.n] != null;

  const words = useMemo(
    () =>
      ayah
        ? buildWordByWord({
            surahNumber,
            ayahNumber: ayah.n,
            ayahAr: ayah.ar,
            apiWords,
            localWords: ayah.words,
          })
        : [],
    [ayah, surahNumber, apiWords],
  );

  if (!ayah) {
    return (
      <div className="mushaf-explanation mushaf-explanation--empty" aria-live="polite">
        <p>Tap an āyah on the mushaf to read its explanation.</p>
      </div>
    );
  }

  const body = ayah.explanation || ayah.en;
  const showRecitation =
    surahNumber != null && hasAyahRecitation(surahNumber, ayah.n);

  return (
    <article className="mushaf-explanation" aria-live="polite">
      <div className="mushaf-explanation__inner">
        <header className="mushaf-explanation__header">
          <span className="mushaf-explanation__label">Āyah</span>
          <span className="mushaf-explanation__num">{toArabicNum(ayah.n)}</span>
          {(onPrevAyah || onNextAyah) && (
            <span className="mushaf-explanation__nav">
              <button
                type="button"
                className="mushaf-explanation__nav-btn"
                onClick={onNextAyah ?? undefined}
                disabled={!onNextAyah}
                aria-label="Next āyah"
              >
                <span aria-hidden="true">←</span> Next āyah
              </button>
              <button
                type="button"
                className="mushaf-explanation__nav-btn"
                onClick={onPrevAyah ?? undefined}
                disabled={!onPrevAyah}
                aria-label="Previous āyah"
              >
                Previous <span aria-hidden="true">→</span>
              </button>
            </span>
          )}
        </header>

        {showRecitation && (
          <AyahAudioPlayer
            key={`audio-${surahNumber}-${ayah.n}`}
            surahNumber={surahNumber}
            ayahNumber={ayah.n}
          />
        )}

        {words.length > 0 && (
          <div className="mushaf-explanation__word-row" dir="rtl" aria-label="Word by word">
            {words.map((w, i) => {
              const inner = (
                <>
                  <span className="mushaf-explanation__word-ar">{w.ar}</span>
                  {w.tr && (
                    <span className="mushaf-explanation__word-tr">{w.tr}</span>
                  )}
                  <span className="mushaf-explanation__word-en">{w.en}</span>
                </>
              );
              if (!studyable) {
                return (
                  <div key={i} className="mushaf-explanation__word">
                    {inner}
                  </div>
                );
              }
              const active = pickedIndex === i;
              return (
                <button
                  key={i}
                  type="button"
                  className="mushaf-explanation__word"
                  aria-pressed={active}
                  title="Root and dictionary entries"
                  onClick={() => setPicked({ key: ayahKey, index: active ? null : i })}
                >
                  {inner}
                </button>
              );
            })}
            <div className="mushaf-explanation__word-marker">
              <VerseMarker n={ayah.n} />
            </div>
            {studyable && pickedIndex == null && (
              <p className="mushaf-explanation__word-hint">
                Tap a word for its root and what the classical dictionaries say
              </p>
            )}
          </div>
        )}

        {studyable && pickedIndex != null && words[pickedIndex] && (
          <WordStudyPanel
            key={`${ayahKey}:${pickedIndex}`}
            word={words[pickedIndex]}
            rootInfo={getWordRoot(surahNumber, ayah.n, pickedIndex)}
            onClose={() => setPicked({ key: ayahKey, index: null })}
          />
        )}

        {words.length === 0 && (
          <div
            className="mushaf-explanation__ar"
            dir="rtl"
            dangerouslySetInnerHTML={{ __html: highlightMushafText(ayah.ar) }}
          />
        )}

        <div className="mushaf-explanation__verse">
          <p className="mushaf-explanation__body">{body}</p>

          {ayah.explanation && ayah.en && (
            <p className="mushaf-explanation__translation">{ayah.en}</p>
          )}
        </div>

        <AyahIraabProse
          key={`iraab-prose-${surahNumber}-${ayah.n}`}
          surahNumber={surahNumber}
          ayahNumber={ayah.n}
        />

        {iraab && (
          <IraabAyahDiagram
            key={`iraab-${surahNumber}-${ayah.n}`}
            ayah={iraab.ayah}
            source={iraab.source}
          />
        )}
      </div>
    </article>
  );
}

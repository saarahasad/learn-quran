import { useEffect, useMemo, useState } from "react";
import AyahAudioPlayer from "./AyahAudioPlayer.jsx";
import VerseMarker from "./mushaf/VerseMarker.jsx";
import IraabAyahDiagram from "./iraab/IraabAyahDiagram.jsx";
import { useIraabDiagram } from "../hooks/useIraabDiagram.js";
import { loadAyahWords } from "../utils/mushafPageData.js";
import { hasAyahRecitation } from "../utils/quranAudio.js";
import { highlightMushafText, toArabicNum } from "../utils/mushafText.js";

function isPlaceholderTranslation(en) {
  return !en || en === "—" || en === "(see translation)";
}

function mergeWordData(localWords, apiWords) {
  if (!apiWords?.length) {
    return (localWords ?? []).map((w) => ({
      ar: w.ar,
      tr: w.tr ?? "",
      en: w.en ?? "",
    }));
  }

  const sorted = [...apiWords].sort((a, b) => a.wordNum - b.wordNum);

  if (!localWords?.length) {
    return sorted.map((w) => ({
      ar: w.textUthmani,
      tr: w.transliteration,
      en: w.translation,
    }));
  }

  return sorted.map((api, i) => {
    const local = localWords[i];
    const en = local?.en && !isPlaceholderTranslation(local.en)
      ? local.en
      : api.translation || local?.en || "";

    return {
      ar: api.textUthmani || local?.ar,
      tr: api.transliteration || local?.tr || "",
      en,
    };
  });
}

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

  const words = useMemo(
    () => mergeWordData(ayah?.words, apiWords),
    [ayah?.words, apiWords],
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
            {words.map((w, i) => (
              <div key={i} className="mushaf-explanation__word">
                <span className="mushaf-explanation__word-ar">{w.ar}</span>
                {w.tr && (
                  <span className="mushaf-explanation__word-tr">{w.tr}</span>
                )}
                <span className="mushaf-explanation__word-en">{w.en}</span>
              </div>
            ))}
            <div className="mushaf-explanation__word-marker">
              <VerseMarker n={ayah.n} />
            </div>
          </div>
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

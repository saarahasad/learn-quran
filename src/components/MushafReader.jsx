import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { getSurahMushafPages } from "../data/mushafPageMap.js";
import {
  fetchPageLayout,
  glyphText,
  loadPageFont,
  pageFontFamily,
  parseLocation,
  preloadPage,
} from "../utils/mushafQcf.js";
import { toArabicNum } from "../utils/mushafText.js";
import "./MushafReader.css";

function WordPopup({ word, fontFamily, meaning, onClose }) {
  const panelRef = useRef(null);

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") onClose();
    }
    function onPointerDown(e) {
      if (panelRef.current && !panelRef.current.contains(e.target)) onClose();
    }

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [onClose]);

  if (!word) return null;

  return createPortal(
    <div className="mushaf-word-popup-backdrop" role="presentation">
      <article ref={panelRef} className="mushaf-word-popup" aria-live="polite">
        <button
          type="button"
          className="mushaf-word-popup__close"
          onClick={onClose}
          aria-label="Close"
        >
          ✕
        </button>
        <p className="mushaf-word-popup__ref">{word.location}</p>
        <p
          className="mushaf-word-popup__glyph"
          style={{ fontFamily }}
          dir="rtl"
        >
          {glyphText(word)}
        </p>
        <p className="mushaf-word-popup__ar" dir="rtl">
          {word.word}
        </p>
        {meaning ? (
          <p className="mushaf-word-popup__meaning">{meaning}</p>
        ) : (
          <p className="mushaf-word-popup__placeholder">
            Tafsir and deeper notes can be added here later.
          </p>
        )}
      </article>
    </div>,
    document.body,
  );
}

function MushafPageContent({ layout, fontFamily, activeLocation, onWordClick }) {
  return (
    <div className="mushaf-page" style={{ fontFamily }}>
      {layout.lines.map((line) => {
        const lineClass =
          line.type === "surah-header"
            ? "mushaf-line mushaf-line--header"
            : line.type === "basmala"
              ? "mushaf-line mushaf-line--basmala"
              : "mushaf-line";

        if (!line.words?.length) {
          return (
            <div key={`line-${line.line}`} className={lineClass}>
              {line.text}
            </div>
          );
        }

        return (
          <div key={`line-${line.line}`} className={lineClass}>
            {line.words.map((w) => (
              <button
                key={w.location}
                type="button"
                className={`mushaf-word${activeLocation === w.location ? " active" : ""}`}
                data-surah={parseLocation(w.location).sura}
                data-ayah={parseLocation(w.location).ayah}
                data-word={parseLocation(w.location).word}
                onClick={() => onWordClick(w)}
              >
                {glyphText(w)}
              </button>
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default function MushafReader({
  surah,
  ayahs = [],
  pages: pagesProp,
  compact = false,
}) {
  const surahPages = useMemo(
    () => (surah ? getSurahMushafPages(surah.revelationOrder) : []),
    [surah],
  );
  const pages = useMemo(() => {
    if (pagesProp?.length) return pagesProp;
    if (surahPages.length) return surahPages;
    return Array.from({ length: 604 }, (_, i) => i + 1);
  }, [pagesProp, surahPages]);

  const [pageIndex, setPageIndex] = useState(0);
  const [layout, setLayout] = useState(null);
  const [fontFamily, setFontFamily] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeWord, setActiveWord] = useState(null);
  const [jumpValue, setJumpValue] = useState("");

  const currentPage = pages[pageIndex] ?? pages[0];

  const meaningByAyah = useMemo(() => {
    const map = new Map();
    for (const a of ayahs) {
      map.set(a.n, a.explanation || a.en || "");
    }
    return map;
  }, [ayahs]);

  const lessonWordMap = useMemo(() => {
    const map = new Map();
    for (const a of ayahs) {
      for (const w of a.words ?? []) {
        map.set(w.ar, w.en);
      }
    }
    return map;
  }, [ayahs]);

  const loadPage = useCallback(async (pageNum) => {
    setLoading(true);
    setError(null);
    setLayout(null);
    setActiveWord(null);

    try {
      const [family, data] = await Promise.all([
        loadPageFont(pageNum),
        fetchPageLayout(pageNum),
      ]);
      setFontFamily(family);
      setLayout(data);
    } catch (err) {
      setError(err?.message ?? "Could not load page");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    setPageIndex(0);
  }, [surah?.id, pages]);

  useEffect(() => {
    if (currentPage) loadPage(currentPage);
  }, [currentPage, loadPage]);

  useEffect(() => {
    const next = pages[pageIndex + 1];
    const prev = pages[pageIndex - 1];
    if (next) preloadPage(next);
    if (prev) preloadPage(prev);
  }, [pageIndex, pages]);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "ArrowLeft") setPageIndex((i) => Math.min(pages.length - 1, i + 1));
      if (event.key === "ArrowRight") setPageIndex((i) => Math.max(0, i - 1));
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [pages.length]);

  function handleJump(e) {
    e.preventDefault();
    const num = Number(jumpValue);
    if (!Number.isFinite(num) || num < 1 || num > 604) return;

    const idx = pages.indexOf(num);
    if (idx >= 0) {
      setPageIndex(idx);
    } else if (!pagesProp?.length && !surahPages.length) {
      setPageIndex(num - 1);
    }
    setJumpValue("");
  }

  const activeMeaning = activeWord
    ? lessonWordMap.get(activeWord.word) ||
      meaningByAyah.get(parseLocation(activeWord.location).ayah) ||
      ""
    : "";

  const shellClass = `mushaf-reader-shell${compact ? "" : " mushaf-reader-shell--embedded"}`;

  return (
    <div className={shellClass}>
      {surah && (
        <div className="mushaf-reader-toolbar">
          <span className="mushaf-reader-toolbar__title">{surah.nameAr}</span>
          <span>{surah.name}</span>
        </div>
      )}

      <nav className="mushaf-reader-nav" aria-label="Page navigation">
        <button
          type="button"
          onClick={() => setPageIndex((i) => Math.max(0, i - 1))}
          disabled={pageIndex === 0}
        >
          → Prev
        </button>
        <span style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.8rem" }}>
          صفحة {toArabicNum(currentPage)}
          {pages.length > 1 && ` · ${toArabicNum(pageIndex + 1)} / ${toArabicNum(pages.length)}`}
        </span>
        <button
          type="button"
          onClick={() => setPageIndex((i) => Math.min(pages.length - 1, i + 1))}
          disabled={pageIndex >= pages.length - 1}
        >
          Next ←
        </button>
        <form className="mushaf-reader-jump" onSubmit={handleJump}>
          <label htmlFor="mushaf-jump">Go to</label>
          <input
            id="mushaf-jump"
            type="number"
            min={1}
            max={604}
            value={jumpValue}
            onChange={(e) => setJumpValue(e.target.value)}
            placeholder={String(currentPage)}
          />
        </form>
      </nav>

      {loading && (
        <div className="mushaf-reader-status" aria-live="polite">
          <div className="mushaf-reader-spinner" />
        </div>
      )}

      {!loading && error && (
        <div className="mushaf-reader-status">
          <p className="mushaf-reader-error">{error}</p>
        </div>
      )}

      {!loading && !error && layout && fontFamily && (
        <MushafPageContent
          layout={layout}
          fontFamily={fontFamily}
          activeLocation={activeWord?.location ?? null}
          onWordClick={setActiveWord}
        />
      )}

      <div className="mushaf-reader-footer">
        Blue Madinah mushaf · QCF page {pageFontFamily(currentPage).replace("QCF_P", "")}
      </div>

      <WordPopup
        word={activeWord}
        fontFamily={fontFamily}
        meaning={activeMeaning}
        onClose={() => setActiveWord(null)}
      />
    </div>
  );
}

import { useState, useEffect, useRef, useMemo } from 'react';
import { TEXTBOOKS } from '../data/textbooks.js';
import { enrichTextbookHtml } from '../utils/classifyTerms.js';
import '../styles/textbook.css';

const TEXTBOOK_FONTS = `@import url('https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400&family=Lora:ital,wght@0,400;0,600;1,400&display=swap');`;

const VIEWS = [
  { id: 'arabic', label: '1 · Arabic' },
  { id: 'bilingual', label: '2 · + Translation' },
  { id: 'grammar', label: '3 · Grammar' },
  { id: 'full', label: '4 · Full lesson' },
  { id: 'english', label: '5 · English read' },
];

export default function TextbookStudy({ surah, onBack, onRevise, onQuiz }) {
  const [view, setView] = useState('full');
  const bookRef = useRef(null);
  const html = useMemo(
    () => enrichTextbookHtml(TEXTBOOKS[surah.id]),
    [surah.id]
  );

  useEffect(() => {
    const book = bookRef.current?.querySelector('.book');
    if (book) book.setAttribute('data-view', view);
  }, [view, html]);

  if (!html) {
    return (
      <div className="textbook-page" style={{ padding: '2rem', textAlign: 'center' }}>
        <p>No iʿrāb textbook available for this sūrah yet.</p>
        <button type="button" onClick={onBack}>← Back</button>
      </div>
    );
  }

  return (
    <div className="textbook-page">
      <style>{TEXTBOOK_FONTS}</style>
      <header className="textbook-page__header">
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <button
            type="button"
            onClick={onBack}
            className="textbook-page__back"
            aria-label="Back"
          >
            ←
          </button>
          <div>
            <div className="textbook-page__header-title-ar">{surah.nameAr}</div>
            <div className="textbook-page__header-title-en">{surah.name} · Study with Iʿrāb</div>
          </div>
        </div>
        <div className="textbook-page__header-actions">
          {onRevise && (
            <button type="button" onClick={onRevise} className="textbook-page__btn textbook-page__btn--teal">
              📖 Revise
            </button>
          )}
          {onQuiz && (
            <button type="button" onClick={onQuiz} className="textbook-page__btn textbook-page__btn--outline">
              ✏️ Quiz
            </button>
          )}
        </div>
      </header>

      <div className="textbook-toolbar-wrap">
        <div className="textbook-toolbar" role="navigation" aria-label="Reading mode">
          <span className="textbook-toolbar__label">View</span>
          <div className="textbook-toolbar__radios" role="radiogroup" aria-label="Textbook view">
            {VIEWS.map((v) => (
              <label key={v.id} title={v.label}>
                <input
                  type="radio"
                  name="textbook-view"
                  value={v.id}
                  checked={view === v.id}
                  onChange={() => setView(v.id)}
                />
                <span className="textbook-toolbar__chip">{v.label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="textbook-page__content" ref={bookRef}>
        {(view === 'full' || view === 'grammar') && (
          <div className="term-legend" aria-label="Terminology color key">
            <span className="term-legend__item">
              <span className="term-legend__swatch term-legend__swatch--role" />
              Grammatical role
            </span>
            <span className="term-legend__item">
              <span className="term-legend__swatch term-legend__swatch--particle" />
              Particle / verb label
            </span>
            <span className="term-legend__item">
              <span className="term-legend__swatch term-legend__swatch--marker" />
              Case marker / sign
            </span>
            <span className="term-legend__item">
              <span className="term-legend__swatch term-legend__swatch--verse" />
              Word from the āyah
            </span>
          </div>
        )}
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  );
}

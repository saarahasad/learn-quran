import { useCallback, useEffect, useRef, useState } from "react";
import { getTafsirDeck } from "./tafsirRegistry";
import "./TafsirDeck.css";

const pad = (n) => String(n).padStart(2, "0");
const store = {
  get(k) { try { return Number(localStorage.getItem(k)) || 0; } catch { return 0; } },
  set(k, v) { try { localStorage.setItem(k, String(v)); } catch { /* storage unavailable */ } },
};

export default function TafsirDeck({ surah, defaultOpen = false }) {
  const deck = getTafsirDeck(surah);
  const base = `${import.meta.env.BASE_URL}tafsir/${deck?.folder}/`;
  const key = `tafsir-progress-${surah}`;

  const [open, setOpen] = useState(defaultOpen);
  const [i, setI] = useState(() => Math.min(store.get(key), (deck?.slides || 1) - 1));
  const [full, setFull] = useState(false);
  const stageRef = useRef(null);
  const stripRef = useRef(null);
  const touch = useRef(null);

  const go = useCallback((n) => {
    if (!deck) return;
    setI(Math.max(0, Math.min(deck.slides - 1, n)));
  }, [deck]);

  useEffect(() => { if (deck) store.set(key, i); }, [i, key, deck]);

  // keep active thumbnail in view
  useEffect(() => {
    stripRef.current?.querySelector(`[data-i="${i}"]`)
      ?.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
  }, [i, open]);

  // keyboard
  useEffect(() => {
    // Only in full screen: otherwise the arrow keys belong to the muṣḥaf page turner.
    if (!open || !full) return;
    const onKey = (e) => {
      if (e.target.closest?.("input, textarea")) return;
      if (e.key === "ArrowRight") go(i + 1);
      if (e.key === "ArrowLeft") go(i - 1);
      if (e.key === "Escape" && full) setFull(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, i, full, go]);

  // preload neighbours
  useEffect(() => {
    if (!open || !deck) return;
    [i - 1, i + 1].filter((n) => n >= 0 && n < deck.slides)
      .forEach((n) => { const im = new Image(); im.src = `${base}slide-${pad(n + 1)}.webp`; });
  }, [i, open, deck, base]);

  useEffect(() => {
    document.body.style.overflow = full ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [full]);

  if (!deck) return null;

  const activeChapter = [...deck.chapters].reverse().find((c) => c.slide - 1 <= i);
  const progress = ((i + 1) / deck.slides) * 100;

  const onTouchStart = (e) => { touch.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touch.current == null) return;
    const dx = e.changedTouches[0].clientX - touch.current;
    if (Math.abs(dx) > 45) go(dx < 0 ? i + 1 : i - 1);
    touch.current = null;
  };

  return (
    <section className={`td ${open ? "td--open" : ""}`} aria-label={`Tafsīr of ${deck.titleEn}`}>
      {/* ---------- Hero card ---------- */}
      <header className="td-hero">
        <div className="td-star" aria-hidden="true"><span>{surah}</span></div>
        <div className="td-hero-text">
          <p className="td-eyebrow">Tafsīr · Juzʾ ʿAmma</p>
          <h3 className="td-title">
            <span className="td-title-ar" lang="ar" dir="rtl">{deck.titleAr}</span>
            <span className="td-title-en">{deck.titleEn}</span>
          </h3>
          <p className="td-sub">{deck.subtitle}</p>
          <ul className="td-sources">
            {deck.sources.map((s) => <li key={s}>{s}</li>)}
          </ul>
        </div>
        <div className="td-actions">
          <button className="td-btn td-btn--primary" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
            {open ? "Close tafsīr" : i > 0 ? `Continue · slide ${i + 1}` : "Read tafsīr"}
          </button>
          <div className="td-dl">
            <a className="td-btn td-btn--ghost" href={base + deck.pdf} target="_blank" rel="noopener noreferrer">Open PDF</a>
            <a className="td-btn td-btn--ghost" href={base + deck.pdf} download>Download</a>
          </div>
        </div>
      </header>

      {/* ---------- Viewer ---------- */}
      {open && (
        <div className={`td-viewer ${full ? "td-viewer--full" : ""}`} ref={stageRef}>
          <nav className="td-chapters" aria-label="Sections">
            {deck.chapters.map((c) => (
              <button key={c.label}
                className={`td-chip ${activeChapter?.label === c.label ? "is-active" : ""}`}
                onClick={() => go(c.slide - 1)}>{c.label}</button>
            ))}
          </nav>

          <div className="td-stage" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
            <img key={i} className="td-slide" src={`${base}slide-${pad(i + 1)}.webp`}
              alt={`${deck.titleEn} tafsīr — slide ${i + 1} of ${deck.slides}`} />
            <button className="td-nav td-nav--prev" onClick={() => go(i - 1)} disabled={i === 0} aria-label="Previous slide">‹</button>
            <button className="td-nav td-nav--next" onClick={() => go(i + 1)} disabled={i === deck.slides - 1} aria-label="Next slide">›</button>
          </div>

          <div className="td-bar">
            <div className="td-progress"><span style={{ width: `${progress}%` }} /></div>
            <span className="td-count">{i + 1} / {deck.slides}</span>
            <button className="td-icon" onClick={() => setFull((f) => !f)} aria-label={full ? "Exit full screen" : "Full screen"}>
              {full ? "✕" : "⤢"}
            </button>
          </div>

          <div className="td-strip" ref={stripRef}>
            {Array.from({ length: deck.slides }, (_, n) => (
              <button key={n} data-i={n} className={`td-thumb ${n === i ? "is-active" : ""}`}
                onClick={() => go(n)} aria-label={`Go to slide ${n + 1}`}>
                <img src={`${base}thumb-${pad(n + 1)}.webp`} alt="" loading="lazy" />
                <span>{n + 1}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

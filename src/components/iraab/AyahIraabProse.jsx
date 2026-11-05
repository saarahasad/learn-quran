import { useState } from "react";
import { getAyahIraabProse } from "../../data/juz30Iraab/index.js";
import "../../styles/iraab-prose.css";

/**
 * Classical āyah-by-āyah iʿrāb (prose style) for Juz ʿAmma, pages 582–591.
 * Each entry: [word, analysis] — word is shown as a green bracketed label.
 * A null word renders the analysis as a sentence-level note (جملة …).
 */
export default function AyahIraabProse({ surahNumber, ayahNumber }) {
  const [open, setOpen] = useState(true);
  const entries = getAyahIraabProse(surahNumber, ayahNumber);
  if (!entries?.length) return null;

  return (
    <section className="iraab-prose" dir="rtl" lang="ar">
      <button
        type="button"
        className="iraab-prose__head"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="iraab-prose__title">إِعْرَابُ الآيَةِ</span>
        <span className="iraab-prose__chev" aria-hidden="true">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="iraab-prose__body">
          {entries.map(([word, text], i) =>
            word ? (
              <p key={i} className="iraab-prose__row">
                <span className="iraab-prose__w">({word})</span>
                <span className="iraab-prose__colon">: </span>
                {text}
              </p>
            ) : (
              <p key={i} className="iraab-prose__row iraab-prose__row--note">{text}</p>
            ),
          )}
        </div>
      )}
    </section>
  );
}

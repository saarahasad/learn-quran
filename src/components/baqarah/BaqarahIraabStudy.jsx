import { useState } from "react";
import { toArabicNum } from "../../utils/mushafText.js";
import BaqarahIraabGlance from "./BaqarahIraabGlance.jsx";
import "../../styles/baqarah-iraab.css";

function IraabBadge({ kind, label }) {
  return (
    <span className={`baqarah-iraab-badge baqarah-iraab-badge--${kind}`}>
      {label}
    </span>
  );
}

function IraabRow({ row }) {
  return (
    <tr>
      <td className="baqarah-iraab-word" dir="rtl">
        {row.word}
      </td>
      <td className="baqarah-iraab-type">
        <IraabBadge kind={row.typeKind} label={row.typeLabel} />
      </td>
      <td
        className="baqarah-iraab-ar"
        dir="rtl"
        dangerouslySetInnerHTML={{ __html: row.arHtml }}
      />
      <td
        className="baqarah-iraab-en"
        dangerouslySetInnerHTML={{ __html: row.enHtml }}
      />
    </tr>
  );
}

function IraabAyah({ ayah }) {
  return (
    <article className="baqarah-iraab-ayah" id={`iraab-ayah-${ayah.verse}`}>
      <header className="baqarah-iraab-ayah__card">
        <p className="baqarah-iraab-ayah__label">
          Sūrat al-Baqarah · Āyah {ayah.verse}
        </p>
        <p className="baqarah-iraab-ayah__text" dir="rtl">
          {ayah.text}
        </p>
        {ayah.translation && (
          <p className="baqarah-iraab-ayah__translation">{ayah.translation}</p>
        )}
      </header>

      <div className="baqarah-iraab-table-wrap">
        <table className="baqarah-iraab-table">
          <colgroup>
            <col className="baqarah-iraab-col-word" />
            <col className="baqarah-iraab-col-type" />
            <col className="baqarah-iraab-col-ar" />
            <col className="baqarah-iraab-col-en" />
          </colgroup>
          <thead>
            <tr>
              <th className="baqarah-iraab-col-word">الكلمة</th>
              <th className="baqarah-iraab-col-type">النوع</th>
              <th className="baqarah-iraab-col-ar">الإعراب</th>
              <th>Grammatical Analysis</th>
            </tr>
          </thead>
          <tbody>
            {ayah.rows.map((row) => (
              <IraabRow key={`${ayah.verse}-${row.word}`} row={row} />
            ))}
          </tbody>
        </table>
      </div>
    </article>
  );
}

function IraabViewToggle({ view, onChange }) {
  return (
    <div className="iraab-view-toggle" role="tablist" aria-label="Iʿrāb display">
      <button
        type="button"
        role="tab"
        aria-selected={view === "glance"}
        className={["iraab-view-toggle__btn", view === "glance" && "is-active"].filter(Boolean).join(" ")}
        onClick={() => onChange("glance")}
      >
        At a glance
      </button>
      <button
        type="button"
        role="tab"
        aria-selected={view === "table"}
        className={["iraab-view-toggle__btn", view === "table" && "is-active"].filter(Boolean).join(" ")}
        onClick={() => onChange("table")}
      >
        Full table
      </button>
    </div>
  );
}

export default function BaqarahIraabStudy({ ayahs, verseRange, mushafPage }) {
  const [activeVerse, setActiveVerse] = useState(ayahs[0]?.verse ?? null);
  const [iraabView, setIraabView] = useState("glance");

  if (!ayahs?.length) {
    return (
      <p className="baqarah-iraab-empty">
        No iʿrāb notes for this page yet.
      </p>
    );
  }

  return (
    <div className="baqarah-iraab-study">
      <header className="baqarah-iraab-study__header">
        <div>
          <p className="baqarah-guide-kicker">
            Mushaf page {mushafPage} · āyāt {verseRange}
          </p>
          <h3>Iʿrāb study</h3>
          <p className="baqarah-iraab-study__intro">
            Word-by-word grammatical analysis — Arabic iʿrāb with English explanation.
          </p>
        </div>
      </header>

      <IraabViewToggle view={iraabView} onChange={setIraabView} />

      {iraabView === "glance" ? (
        <BaqarahIraabGlance ayahs={ayahs} />
      ) : (
        <>
      <div className="baqarah-iraab-legend" aria-label="Word type key">
        <span className="baqarah-iraab-legend__item">
          <IraabBadge kind="harf" label="حرف" />
          Particle
        </span>
        <span className="baqarah-iraab-legend__item">
          <IraabBadge kind="ism" label="اسم" />
          Noun
        </span>
        <span className="baqarah-iraab-legend__item">
          <IraabBadge kind="fil" label="فعل" />
          Verb
        </span>
        <span className="baqarah-iraab-legend__item">
          <IraabBadge kind="jumlah" label="جملة" />
          Phrase / clause
        </span>
      </div>

      <nav className="baqarah-iraab-jump" aria-label="Jump to āyah">
        {ayahs.map((ayah) => (
          <a
            key={ayah.verse}
            href={`#iraab-ayah-${ayah.verse}`}
            className={[
              "baqarah-iraab-jump__link",
              activeVerse === ayah.verse && "is-active",
            ]
              .filter(Boolean)
              .join(" ")}
            onClick={() => setActiveVerse(ayah.verse)}
          >
            <span className="baqarah-iraab-jump__num">{toArabicNum(ayah.verse)}</span>
            <span className="baqarah-iraab-jump__label">Āyah {ayah.verse}</span>
          </a>
        ))}
      </nav>

      <div className="baqarah-iraab-ayahs">
        {ayahs.map((ayah) => (
          <IraabAyah key={ayah.verse} ayah={ayah} />
        ))}
      </div>
        </>
      )}
    </div>
  );
}

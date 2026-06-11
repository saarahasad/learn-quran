import "../styles/mushaf.css";
import { highlightMushafText, toArabicNum } from "../utils/mushafText.js";

export function VerseMarker({ n }) {
  const num = toArabicNum(n);
  return (
    <span className="mushaf-verse-marker" aria-label={`ayah ${n}`}>
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="16" cy="16" r="14" fill="#8b6914" />
        <circle cx="16" cy="16" r="11" fill="#c9a227" />
        <circle cx="16" cy="16" r="8.5" fill="#5c4020" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
          <polygon
            key={deg}
            points="16,2 17.2,6 16,10 14.8,6"
            fill="#e8d4a0"
            transform={`rotate(${deg} 16 16)`}
          />
        ))}
      </svg>
      <span className="mushaf-verse-num">{num}</span>
    </span>
  );
}

export function SurahHeader({ nameAr, ayahCount, revelationOrder }) {
  const title = nameAr.startsWith("س") ? nameAr : `سُورَةُ ${nameAr}`;
  return (
    <header className="mushaf-header">
      <div className="mushaf-header-frame" aria-hidden="true" />
      <div className="mushaf-meta mushaf-meta--right">
        <div className="mushaf-meta-badge">
          <span className="mushaf-meta-label">ترتيبها</span>
          <span className="mushaf-meta-num">{toArabicNum(revelationOrder)}</span>
        </div>
      </div>
      <div className="mushaf-meta mushaf-meta--left">
        <div className="mushaf-meta-badge">
          <span className="mushaf-meta-label">آياتها</span>
          <span className="mushaf-meta-num">{toArabicNum(ayahCount)}</span>
        </div>
      </div>
      <h2 className="mushaf-header-title">{title}</h2>
    </header>
  );
}

export function Basmala() {
  const html = highlightMushafText("بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ");
  return (
    <div
      className="mushaf-basmala"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export function MushafText({ ayahs, showBasmala = false }) {
  return (
    <div className="mushaf-body">
      {showBasmala && <Basmala />}
      {ayahs.map((a) => (
        <span key={a.n} className="mushaf-ayah">
          <span
            dangerouslySetInnerHTML={{ __html: highlightMushafText(a.ar) + " " }}
          />
          <VerseMarker n={a.n} />
        </span>
      ))}
    </div>
  );
}

export function MadaniMushafPage({ surah, ayahs, showBasmala }) {
  const revelationOrder = surah.revelationOrder ?? 1;
  const basmala =
    showBasmala ?? (ayahs.length > 0 && ayahs[0].n === 1);

  return (
    <article className="mushaf-page">
      <SurahHeader
        nameAr={surah.nameAr}
        ayahCount={surah.ayahCount}
        revelationOrder={revelationOrder}
      />
      <MushafText ayahs={ayahs} showBasmala={basmala} />
    </article>
  );
}

export function MushafViewToggle({ mode, onChange }) {
  return (
    <div className="mushaf-view-toggle">
      <button
        type="button"
        className={mode === "mushaf" ? "active" : ""}
        onClick={() => onChange("mushaf")}
      >
        Mushaf
      </button>
      <button
        type="button"
        className={mode === "study" ? "active" : ""}
        onClick={() => onChange("study")}
      >
        Study
      </button>
    </div>
  );
}

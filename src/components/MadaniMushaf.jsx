import "../styles/mushaf.css";
import MushafImageReader from "./MushafImageReader.jsx";
import VerseMarker from "./mushaf/VerseMarker.jsx";
import { highlightMushafText, toArabicNum } from "../utils/mushafText.js";

export { VerseMarker };

export function SurahHeader({ nameAr, ayahCount, revelationOrder }) {
  const title = nameAr.startsWith("س") ? nameAr : `سُورَةُ ${nameAr}`;
  return (
    <header className="mushaf-header">
      <div className="mushaf-header-ornament mushaf-header-ornament--right" aria-hidden="true" />
      <div className="mushaf-header-ornament mushaf-header-ornament--left" aria-hidden="true" />
      <div className="mushaf-header-frame" aria-hidden="true">
        <span className="mushaf-header-frame__line" />
        <span className="mushaf-header-frame__diamond" />
        <span className="mushaf-header-frame__line" />
      </div>
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
            dangerouslySetInnerHTML={{ __html: highlightMushafText(a.ar) + "\u00a0" }}
          />
          <VerseMarker n={a.n} />
        </span>
      ))}
    </div>
  );
}

export function MushafReaderViewport({ children, surahName }) {
  return (
    <div className="mushaf-reader" role="region" aria-label={surahName ? `Mushaf: ${surahName}` : "Mushaf reader"}>
      <div className="mushaf-reader__glow" aria-hidden="true" />
      <div className="mushaf-reader__viewport">{children}</div>
    </div>
  );
}

export function MadaniMushafPage({
  surah,
  ayahs,
  compact = false,
  guidePage = null,
  onGuidePageChange = null,
  onSpreadChange = null,
  markMistakeMode = null,
  onMarkMistakeModeChange = null,
  showMemorizationMistakes = null,
  onShowMemorizationMistakesChange = null,
}) {
  return (
    <MushafImageReader
      surah={surah}
      ayahs={ayahs ?? surah.ayahs}
      compact={compact}
      guidePage={guidePage}
      onGuidePageChange={onGuidePageChange}
      onSpreadChange={onSpreadChange}
      markMistakeMode={markMistakeMode}
      onMarkMistakeModeChange={onMarkMistakeModeChange}
      showMemorizationMistakes={showMemorizationMistakes}
      onShowMemorizationMistakesChange={onShowMemorizationMistakesChange}
    />
  );
}

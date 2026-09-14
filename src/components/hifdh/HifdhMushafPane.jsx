import MushafPageViewer from "../mushaf/MushafPageViewer.jsx";

export default function HifdhMushafPane({
  mushafPage,
  surahNumber,
  dimmed = false,
}) {
  return (
    <div
      className={`hifdh-session__mushaf${dimmed ? " is-dimmed" : ""}`}
      aria-label="Mushaf page"
    >
      <div className="hifdh-session__mushaf-inner">
        <MushafPageViewer
          page={mushafPage}
          surahNumber={surahNumber}
          showCaption={false}
          showAyahOverlay={false}
        />
      </div>
    </div>
  );
}

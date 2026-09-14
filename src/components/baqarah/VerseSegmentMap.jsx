function SegmentNotes({ notes }) {
  if (!notes?.length) return null;
  return (
    <div className="baqarah-segment-map__notes">
      {notes.map((note) => {
        if (typeof note === "string") {
          return (
            <p key={note} className="baqarah-segment-map__note">
              {note}
            </p>
          );
        }
        return (
          <div
            key={note.text ?? note.prefix}
            className={[
              "baqarah-segment-map__note",
              note.emphasis && "baqarah-segment-map__note--emphasis",
              note.muted && "baqarah-segment-map__note--muted",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {note.prefix && (
              <span className="baqarah-segment-map__prefix" dir="rtl">
                {note.prefix}
              </span>
            )}
            {note.text && <p>{note.text}</p>}
            {note.bullets?.length > 0 && (
              <ul>
                {note.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
}

function SegmentFootnotes({ footnotes = [] }) {
  if (!footnotes.length) return null;
  return (
    <div className="baqarah-segment-map__footnotes">
      {footnotes.map((item, index) => {
        if (item.type === "crossRef") {
          return (
            <article key={index} className="baqarah-segment-map__crossref">
              <p className="baqarah-segment-map__crossref-ar" dir="rtl">
                {item.ar}
              </p>
              <p className="baqarah-segment-map__crossref-en">{item.en}</p>
              <cite>{item.cite}</cite>
            </article>
          );
        }
        if (item.type === "question") {
          return (
            <p key={index} className="baqarah-segment-map__footnote-question">
              {item.text}
            </p>
          );
        }
        if (item.type === "answer") {
          return (
            <p key={index} className="baqarah-segment-map__footnote-answer">
              <strong>A:</strong> {item.text}
            </p>
          );
        }
        if (item.type === "footer") {
          return (
            <p key={index} className="baqarah-segment-map__footnote-footer">
              {item.text}
            </p>
          );
        }
        return (
          <p key={index} className="baqarah-segment-map__footnote-line">
            {item.text}
          </p>
        );
      })}
    </div>
  );
}

function isAccentSegment(segment) {
  return segment.tone === "accent" || segment.tone === "green";
}

function isMutedSegment(segment) {
  return segment.tone === "muted";
}

export default function VerseSegmentMap({
  verseRef,
  title,
  rows = [],
  footnotes = [],
  topicColor,
}) {
  return (
    <div
      className={[
        "baqarah-segment-map",
        topicColor && `baqarah-segment-map--${topicColor}`,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <header className="baqarah-segment-map__banner">
        {title ?? (verseRef ? `Verse ${verseRef}` : "Verse map")}
      </header>
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="baqarah-segment-map__row">
          {row.map((segment) => (
            <div key={segment.ar} className="baqarah-segment-map__item">
              <div
                className={[
                  "baqarah-segment-map__box",
                  isAccentSegment(segment) && "baqarah-segment-map__box--accent",
                  isMutedSegment(segment) && "baqarah-segment-map__box--muted",
                ]
                  .filter(Boolean)
                  .join(" ")}
                dir="rtl"
              >
                {segment.ar}
              </div>
              {(segment.notes?.length > 0 || segment.note) && (
                <>
                  <span className="baqarah-segment-map__arrow" aria-hidden="true">
                    ↓
                  </span>
                  <SegmentNotes notes={segment.notes ?? [segment.note]} />
                </>
              )}
            </div>
          ))}
          {row.groupNote && (
            <div className="baqarah-segment-map__group-note">
              <span className="baqarah-segment-map__arrow" aria-hidden="true">
                ↓
              </span>
              <p className="baqarah-segment-map__note baqarah-segment-map__note--emphasis">
                {row.groupNote}
              </p>
            </div>
          )}
        </div>
      ))}
      <SegmentFootnotes footnotes={footnotes} />
    </div>
  );
}

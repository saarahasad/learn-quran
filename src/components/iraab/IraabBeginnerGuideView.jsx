import {
  bracketAyah,
  bracketWord,
  formatGuideRichText,
  stateLabel,
  stateTagClass,
} from "../../utils/iraabBeginnerGuide.js";

function Badge({ state, term }) {
  const label = stateLabel(state);
  return (
    <span className={`tag ${stateTagClass(state)}`}>
      {label ? `${label} · ` : null}
      <span className="term">{term}</span>
    </span>
  );
}

function ayahHeading(label) {
  if (!label) return "";
  const many = /[–-]/.test(label);
  return `${many ? "Āyāt" : "Ayah"} ${label}`;
}

function AyahBox({ pack }) {
  if (pack.ayahs?.length) {
    return (
      <div className="ayah-box">
        {pack.ayahs.map((ayah) => (
          <span className="ayah-line" key={ayah.n}>
            <span className="ayah-line__start" title={`Start of āyah ${ayah.n}`}>
              {ayah.n}
            </span>
            <span className="ayah-line__text">{ayah.text}</span>
            <span className="ayah-line__end" title={`End of āyah ${ayah.n}`}>
              {ayah.n}
            </span>
          </span>
        ))}
      </div>
    );
  }
  return <div className="ayah-box">{bracketAyah(pack.ayahText)}</div>;
}

export default function IraabBeginnerGuideView({ pack }) {
  if (!pack) return null;

  const surah = pack.surahNameEn || "al-Kahf";
  const ayah = pack.ayahLabel || "";
  const subtitle = `Sūrat ${surah}${ayah ? `, ${ayahHeading(ayah)}` : ""} — plain English, with grammar terms kept in Arabic`;
  const cards = pack.cards || [];
  const patterns = pack.patterns || [];

  return (
    <article className="iraab-guide" lang="en">
      <h1>Beginner's iʿrāb guide</h1>
      <p className="subtitle">{subtitle}</p>

      <AyahBox pack={pack} />

      <div className="key-box">
        Every noun's ending sound tells you its job:
        <span className="term">رَفْع</span> = subject &nbsp;·&nbsp;
        <span className="term">نَصْب</span> = object &nbsp;·&nbsp;
        <span className="term">جَرّ</span> = after a small linking word like "for/in/from"
      </div>

      {cards.map((card, index) => {
        const showAyahHead = Boolean(card.ayah) && cards[index - 1]?.ayah !== card.ayah;
        return (
          <div key={`${card.ar}-${index}`}>
            {showAyahHead ? (
              <div className="ayah-break">Āyah {card.ayah}</div>
            ) : null}
            <div className="word-card">
              <div className="word-arabic">{bracketWord(card.ar)}</div>
              <div className="word-meaning">"{card.meaning || ""}"</div>
              <div className="word-meta">
                <Badge state={card.state} term={card.term} />
                {card.ayah ? (
                  <span className="ayah-chip" title={`Āyah ${card.ayah}`}>
                    āyah {card.ayah}
                  </span>
                ) : null}
              </div>
              <div
                className="word-explain"
                dangerouslySetInnerHTML={{ __html: formatGuideRichText(card.explain) }}
              />
              {card.note ? (
                <div
                  className="word-note"
                  dangerouslySetInnerHTML={{ __html: formatGuideRichText(card.note) }}
                />
              ) : null}
            </div>
          </div>
        );
      })}

      {patterns.length ? (
        <>
          <div className="section-title">The pattern to remember</div>
          <div
            className="key-box"
            dangerouslySetInnerHTML={{
              __html: patterns
                .map((rule, i) => `${i + 1}. ${formatGuideRichText(rule)}`)
                .join("<br>\n"),
            }}
          />
        </>
      ) : null}
    </article>
  );
}

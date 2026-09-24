export default function BaqarahAlHudaStudy({ lesson }) {
  if (!lesson) {
    return (
      <p className="baqarah-alhuda__empty">No Al Huda notes for this page yet.</p>
    );
  }

  return (
    <article className="baqarah-alhuda">
      <header className="baqarah-alhuda__header">
        <p className="baqarah-alhuda__kicker">{lesson.kicker}</p>
        <h3 className="baqarah-alhuda__title">
          {lesson.title}
          <span className="baqarah-alhuda__title-ar" dir="rtl">
            {lesson.surahAr}
          </span>
        </h3>
        <p className="baqarah-alhuda__range">Āyāt {lesson.verseRange}</p>
      </header>

      {lesson.opening?.length > 0 && (
        <section className="baqarah-alhuda__opening">
          {lesson.opening.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>
      )}

      {lesson.wordByWord?.length > 0 && (
        <section className="baqarah-alhuda__words">
          <h4>Word-to-word</h4>
          {lesson.wordByWord.map((ayah) => (
            <div key={ayah.verse} className="baqarah-alhuda__ayah-words">
              <p className="baqarah-alhuda__ayah-label">Āyah {ayah.verse}</p>
              <ol className="baqarah-alhuda__word-list" dir="rtl">
                {ayah.words.map((word, index) => (
                  <li key={`${ayah.verse}-${word.ar}-${index}`}>
                    <span className="baqarah-alhuda__word-ar">{word.ar}</span>
                    <span className="baqarah-alhuda__word-en">{word.en}</span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </section>
      )}

      {lesson.ayahs?.map((ayah) => (
        <section key={ayah.verse} className="baqarah-alhuda__ayah">
          <header className="baqarah-alhuda__ayah-head">
            <h4>{ayah.heading}</h4>
          </header>
          {ayah.arabic && (
            <p className="baqarah-alhuda__arabic" dir="rtl">
              {ayah.arabic}
            </p>
          )}
          {ayah.translation && (
            <p className="baqarah-alhuda__translation">{ayah.translation}</p>
          )}
          {ayah.paragraphs?.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {ayah.callouts?.map((callout) => (
            <aside key={callout.title} className="baqarah-alhuda__callout">
              <h5>{callout.title}</h5>
              {callout.body && <p>{callout.body}</p>}
              {callout.points?.length > 0 && (
                <ul>
                  {callout.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}
            </aside>
          ))}
        </section>
      ))}

      {lesson.tafsir && (
        <section className="baqarah-alhuda__tafsir">
          <header className="baqarah-alhuda__tafsir-head">
            <h3>{lesson.tafsir.title}</h3>
            {lesson.tafsir.lead && <p>{lesson.tafsir.lead}</p>}
          </header>

          {lesson.tafsir.sections?.map((section) => (
            <article key={section.title} className="baqarah-alhuda__ayah">
              <header className="baqarah-alhuda__ayah-head">
                <h4>{section.title}</h4>
              </header>
              {section.arabic && (
                <p className="baqarah-alhuda__arabic" dir="rtl">
                  {section.arabic}
                </p>
              )}
              {section.translation && (
                <p className="baqarah-alhuda__translation">{section.translation}</p>
              )}
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.points?.length > 0 && (
                <ul className="baqarah-alhuda__points">
                  {section.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}
              {section.callouts?.map((callout) => (
                <aside key={callout.title} className="baqarah-alhuda__callout">
                  <h5>{callout.title}</h5>
                  {callout.body && <p>{callout.body}</p>}
                  {callout.points?.length > 0 && (
                    <ul>
                      {callout.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  )}
                </aside>
              ))}
            </article>
          ))}
        </section>
      )}
    </article>
  );
}

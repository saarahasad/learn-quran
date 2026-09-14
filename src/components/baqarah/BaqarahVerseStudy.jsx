import { toArabicNum } from "../../utils/mushafText.js";
import { StudyBlockList, GuideQAPanel } from "./BaqarahStudyBlocks.jsx";
import {
  resolveTopicMeta,
  topicPanelBadgeClass,
  topicPanelClass,
} from "../../utils/baqarahTopics.js";

function TopicBadge({ topic, guideTopics = [], range }) {
  if (!topic) return null;
  const meta = resolveTopicMeta(topic, guideTopics);
  const badgeClass = topicPanelBadgeClass(topic, guideTopics);
  return (
    <span className={["baqarah-guide-panel__topic", badgeClass].filter(Boolean).join(" ")}>
      Topic {meta.label}
      {range && <span> · {range}</span>}
    </span>
  );
}

function Illustration({ src, alt, caption, variant }) {
  const figureClass = [
    "baqarah-guide-figure",
    variant === "spread" && "baqarah-guide-figure--spread",
    variant === "spotlight" && "baqarah-guide-figure--spotlight",
    !variant || variant === "art" ? "baqarah-guide-figure--art" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <figure className={figureClass}>
      <img src={src} alt={alt} loading="lazy" />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

function VerseDecisionFlow({ flow }) {
  return (
    <div className="baqarah-decision-flow">
      {flow.title && <h5 className="baqarah-decision-flow__title">{flow.title}</h5>}

      <div className="baqarah-decision-flow__root">
        <p className="baqarah-decision-flow__ar" dir="rtl">{flow.root.ar}</p>
        {flow.root.points?.length > 0 && (
          <ul className="baqarah-decision-flow__points">
            {flow.root.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        )}
      </div>

      <div className="baqarah-decision-flow__arrow" aria-hidden="true">↓</div>

      <div className="baqarah-decision-flow__branches">
        {flow.branches.map((branch) => (
          <div key={branch.label} className="baqarah-decision-flow__branch">
            <div className="baqarah-decision-flow__branch-label">{branch.label}</div>
            <div className="baqarah-decision-flow__arrow" aria-hidden="true">↓</div>
            <div className="baqarah-decision-flow__outcome">{branch.outcome}</div>
          </div>
        ))}
      </div>

      <div className="baqarah-decision-flow__arrow" aria-hidden="true">↓</div>
      <div className="baqarah-decision-flow__merge">{flow.merge}</div>
      <div className="baqarah-decision-flow__arrow" aria-hidden="true">↓</div>
      <div className="baqarah-decision-flow__resolution">{flow.resolution}</div>
    </div>
  );
}

function VerseQASection({ qa }) {
  return (
    <div className="baqarah-verse-study__qa">
      <div className="baqarah-verse-study__qa-head">
        <h5>{qa.title ?? "Reflection"}</h5>
      </div>
      <p className="baqarah-verse-study__qa-question">
        <span className="baqarah-verse-study__qa-label">Q</span>
        {qa.question}
      </p>
      <div className="baqarah-verse-study__qa-answer">
        <span className="baqarah-verse-study__qa-label">A</span>
        <ol className="baqarah-verse-study__qa-list">
          {qa.answers.map((answer) => (
            <li key={answer}>{answer}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

function VerseHadithSection({ hadiths }) {
  return (
    <div className="baqarah-verse-study__hadiths">
      <div className="baqarah-verse-study__hadiths-head">
        <h5>{hadiths.title ?? "Hadith explanation"}</h5>
      </div>
      {hadiths.intro && (
        <p className="baqarah-verse-study__hadiths-intro">{hadiths.intro}</p>
      )}
      <div className="baqarah-hadith-list">
        {hadiths.items.map((item) => (
          <article key={`${item.source}-${item.number}`} className="baqarah-hadith-card">
            <header className="baqarah-hadith-card__meta">
              <span className="baqarah-hadith-card__source">
                {item.source} {item.number}
              </span>
              {item.narrator && (
                <span className="baqarah-hadith-card__narrator">{item.narrator}</span>
              )}
            </header>
            {item.arabic && (
              <p className="baqarah-hadith-card__ar" dir="rtl">
                {item.arabic}
              </p>
            )}
            <blockquote className="baqarah-hadith-card__text">{item.text}</blockquote>
          </article>
        ))}
      </div>
    </div>
  );
}

export default function BaqarahVerseStudy({ section, guideTopics = [] }) {
  if (!section) return null;

  const topicClass = topicPanelClass(section.topic, guideTopics);
  const topicColor = resolveTopicMeta(section.topic, guideTopics)?.color;

  return (
    <section
      className={["baqarah-guide-block baqarah-guide-panel baqarah-verse-study", topicClass]
        .filter(Boolean)
        .join(" ")}
    >
      <header className="baqarah-guide-panel__header baqarah-verse-study__header">
        <div className="baqarah-verse-study__title-group">
          <span className="baqarah-verse-study__label">{section.title}</span>
          <span className="baqarah-verse-study__num">{toArabicNum(section.verse)}</span>
        </div>
        <TopicBadge topic={section.topic} guideTopics={guideTopics} range={section.topicRange} />
      </header>

      <blockquote className="baqarah-verse-study__translation">
        {section.translation}
      </blockquote>

      {section.arabic && (
        <p className="baqarah-verse-study__arabic" dir="rtl">
          {section.arabic}
        </p>
      )}

      {section.blocks?.length > 0 && (
        <div className="baqarah-verse-study__blocks">
          <StudyBlockList blocks={section.blocks} topicColor={topicColor} />
        </div>
      )}

      {section.illustrations?.map((img) => (
        <Illustration
          key={img.src}
          src={img.src}
          alt={img.alt}
          caption={img.caption}
          variant={img.variant ?? "spread"}
        />
      ))}

      {section.phrases?.length > 0 && (
        <div className="baqarah-verse-study__breakdown">
          <div className="baqarah-verse-study__breakdown-head">
            <h5>Word by word</h5>
            <span>{section.phrases.length} phrases</span>
          </div>

          <div className="baqarah-verse-study__phrases">
            {section.phrases.map((phrase, index) => (
              <article key={phrase.phrase} className="baqarah-phrase-block">
                <div className="baqarah-phrase-block__head">
                  <div className="baqarah-phrase-block__head-top">
                    <span className="baqarah-phrase-block__step">{index + 1}</span>
                    {phrase.hint && (
                      <p className="baqarah-phrase-block__hint">{phrase.hint}</p>
                    )}
                  </div>
                  <p className="baqarah-phrase-block__arabic" dir="rtl">
                    {phrase.phrase}
                  </p>
                </div>

                <div className="baqarah-word-table" role="table">
                  <div className="baqarah-word-table__head" role="row">
                    <span role="columnheader">Arabic</span>
                    <span role="columnheader">Meaning</span>
                    <span role="columnheader">Notes</span>
                  </div>
                  {phrase.words.map((word) => (
                    <div key={word.ar} className="baqarah-word-table__row" role="row">
                      <span className="baqarah-word-table__ar" dir="rtl" role="cell">
                        {word.ar}
                      </span>
                      <span className="baqarah-word-table__gloss" role="cell">
                        {word.gloss}
                      </span>
                      <div className="baqarah-word-table__notes" role="cell">
                        {word.points?.length > 0 ? (
                          <ul>
                            {word.points.map((point) => (
                              <li key={point}>{point}</li>
                            ))}
                          </ul>
                        ) : (
                          <span className="baqarah-word-table__empty">—</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {phrase.summary?.length > 0 && (
                  <ul className="baqarah-phrase-block__summary">
                    {phrase.summary.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </div>
      )}

      {section.flow && (
        <div className="baqarah-verse-study__flow">
          <VerseDecisionFlow flow={section.flow} />
        </div>
      )}

      {section.hadiths?.items?.length > 0 && (
        <VerseHadithSection hadiths={section.hadiths} />
      )}

      {section.qa?.answers?.length > 0 && (
        <VerseQASection qa={section.qa} />
      )}

      {section.context?.text && (
        <div className="baqarah-verse-study__context">
          {section.context.title && (
            <h5 className="baqarah-verse-study__context-title">{section.context.title}</h5>
          )}
          <p className="baqarah-verse-study__context-text">{section.context.text}</p>
        </div>
      )}
    </section>
  );
}

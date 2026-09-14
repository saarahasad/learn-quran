import { useState, useEffect } from "react";
import BaqarahVerseStudy from "./baqarah/BaqarahVerseStudy.jsx";
import BaqarahIraabStudy from "./baqarah/BaqarahIraabStudy.jsx";
import { PageThreeTopicsMap, PageFourTopicsMap, PageFiveTopicsMap, PageSixTopicsMap, PageEightTopicsMap, PageEightDetailedTopicsMap, PageEightMainTopicBanner, PageNineTopicsMap, PageNineDetailedTopicsMap, Page8RepeatedWordsChart, Page8LinkingPatternChart, BalaunConceptChart, BalaunVerseRefsChart, Page6LinkingBanner, Page6AngelsEventsMap, Page6AdamEventsMap, BaqarahUniquePhrasesChart, Page6SpeechPatternsChart, Page6KnowledgePatternsChart, RejectersConsequenceFlow, CovenantTopicsOverview, HypocritesParableLinking, FearHopeBalanceChart, MosquitoParableChart } from "./baqarah/BaqarahFlowCharts.jsx";
import { StudyBlockList, GuideQAPanel, PageBridge } from "./baqarah/BaqarahStudyBlocks.jsx";
import BaqarahAyah61MemorizeQuiz from "./baqarah/BaqarahAyah61MemorizeQuiz.jsx";
import BaqarahPage10MemorizeQuiz from "./baqarah/BaqarahPage10MemorizeQuiz.jsx";
import {
  getBaqarahGuideByMushafPage,
} from "../data/baqarahPageGuides.js";
import {
  getBaqarahIraabForPage,
  hasBaqarahIraabForPage,
} from "../data/baqarahIraab.js";
import { toArabicNum } from "../utils/mushafText.js";
import HifdhSessionMode from "./hifdh/HifdhSessionMode.jsx";
import { estimateSessionDurationLabel } from "../utils/hifdhSession.js";
import {
  TOPIC_COLOR_CLASS,
  enrichTopics,
  resolveTopicMeta,
  topicDisplayLabel,
  topicMushafCardClass,
  topicMushafStripClass,
  topicPanelBadgeClass,
  topicPanelClass,
  topicStripLabel,
  topicsMapBannerTitle,
} from "../utils/baqarahTopics.js";
import "../styles/hifdh-session.css";
import "../styles/baqarah-charts.css";


const HIGHLIGHT_CLASS = {
  rose: "baqarah-hl--rose",
  green: "baqarah-hl--green",
  teal: "baqarah-hl--teal",
  amber: "baqarah-hl--amber",
  blue: "baqarah-hl--blue",
  cyan: "baqarah-hl--cyan",
};

function blockClass(base, section, guideTopics = []) {
  const topicClass = topicPanelClass(section.topic, guideTopics);
  return [base, topicClass].filter(Boolean).join(" ");
}

function applyTopicFlow(sections, guideTopics = []) {
  const usesLetterTopics = guideTopics.some(
    (topic) => topic.id === "A" || topic.id === "B",
  );
  if (!usesLetterTopics) return sections;

  const topicA = guideTopics.find((topic) => topic.id === "A");
  const topicB = guideTopics.find((topic) => topic.id === "B");
  const rangeA = topicA?.verseRange ?? "49–50";
  const rangeB = topicB?.verseRange ?? "51–57";

  let pastTopicB = false;
  return sections.map((section) => {
    if (section.topic === "B") pastTopicB = true;
    if (pastTopicB && !section.topic && !section.neutral) {
      return {
        ...section,
        topic: "B",
        topicRange: section.topicRange ?? rangeB,
      };
    }
    if (
      !pastTopicB &&
      section.topic !== "B" &&
      section.type !== "mushafTopicsMap" &&
      section.type !== "pageTopicsMap" &&
      section.type !== "pageTopicsTree" &&
      !section.neutral
    ) {
      return {
        ...section,
        topic: section.topic ?? "A",
        topicRange: section.topicRange ?? rangeA,
      };
    }
    return section;
  });
}

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

function GuidePanel({ section, className = "", bodyClassName = "", guideTopics = [], children }) {
  const topicClass = topicPanelClass(section.topic, guideTopics);
  const isPanel = Boolean(section.topic);

  if (!isPanel) {
    return (
      <section className={["baqarah-guide-block", className].filter(Boolean).join(" ")}>
        {section.title && <h4>{section.title}</h4>}
        {children}
      </section>
    );
  }

  return (
    <section
      className={["baqarah-guide-block baqarah-guide-panel", topicClass, className]
        .filter(Boolean)
        .join(" ")}
    >
      {section.title && (
        <header className="baqarah-guide-panel__header">
          <h4 className="baqarah-guide-panel__title">{section.title}</h4>
          <TopicBadge topic={section.topic} guideTopics={guideTopics} range={section.topicRange} />
        </header>
      )}
      <div className={["baqarah-guide-panel__body", bodyClassName].filter(Boolean).join(" ")}>
        {children}
      </div>
    </section>
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

function TopicsMapBanner({ topics = [] }) {
  return (
    <div className="baqarah-topics-banner">
      <span>{topicsMapBannerTitle(topics)}</span>
      {topics.length > 0 && (
        <p className="baqarah-topics-banner__key">
          {topics.map((topic) => {
            const keyClass = [
              "baqarah-topics-banner__key-item",
              topic.id === "A" && "baqarah-topics-banner__key-a",
              topic.id === "B" && "baqarah-topics-banner__key-b",
              topic.color && `baqarah-topics-banner__key--${topic.color}`,
            ]
              .filter(Boolean)
              .join(" ");
            const prefix =
              topic.id === "A" || topic.id === "B" ? topic.id : topicDisplayLabel(topic);
            return (
              <span key={topic.id} className={keyClass}>
                {prefix} · verses {topic.verseRange}
              </span>
            );
          })}
        </p>
      )}
    </div>
  );
}

function parseVerseRange(range) {
  const normalized = String(range).replace(/\s/g, "");
  const [startStr, endStr] = normalized.split(/[–-]/);
  const start = Number(startStr);
  const end = Number(endStr ?? startStr);
  if (!Number.isFinite(start)) return [];
  const verses = [];
  for (let verse = start; verse <= end; verse += 1) verses.push(verse);
  return verses;
}

function MushafTopicsMap({ topics }) {
  const spans = topics.map((topic) => {
    const verses = parseVerseRange(topic.verseRange);
    return { ...topic, verses, count: verses.length };
  });
  const totalVerses = spans.reduce((sum, topic) => sum + topic.count, 0);
  const isLetterTopic = (topic) => topic.id === "A" || topic.id === "B";
  const useColumns = spans.length === 2;

  return (
    <div
      className={[
        "baqarah-mushaf-map",
        useColumns && "baqarah-mushaf-map--columns",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {spans.map((topic) => (
        <article
          key={topic.id}
          className={[
            "baqarah-mushaf-map__card",
            topicMushafCardClass(topic),
            !isLetterTopic(topic) && "baqarah-mushaf-map__card--named-topic",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {isLetterTopic(topic) ? (
            <div className="baqarah-mushaf-map__head">
              <span className="baqarah-mushaf-map__topic-bubble">{topicStripLabel(topic)}</span>
              <div className="baqarah-mushaf-map__text">
                <p className="baqarah-mushaf-map__summary">{topic.summary}</p>
                <span className="baqarah-mushaf-map__range">
                  Verses {topic.verseRange}
                  {topic.count > 1 && (
                    <span className="baqarah-mushaf-map__count">
                      · {topic.count} āyāt
                    </span>
                  )}
                </span>
              </div>
            </div>
          ) : (
            <>
              <span className="baqarah-mushaf-map__topic-bubble">{topicStripLabel(topic)}</span>
              {topic.summary && <p className="baqarah-mushaf-map__summary">{topic.summary}</p>}
              {topic.subTopics?.length > 0 && (
                <ul className="baqarah-mushaf-map__subtopics">
                  {topic.subTopics.map((item) => {
                    if (typeof item === "string") {
                      return (
                        <li key={item} className="baqarah-mushaf-map__subtopic">
                          {item}
                        </li>
                      );
                    }
                    const key = item.label ?? item.text ?? item.verses;
                    return (
                      <li
                        key={key}
                        className={[
                          "baqarah-mushaf-map__subtopic",
                          item.bullet && "baqarah-mushaf-map__subtopic--bullet",
                        ]
                          .filter(Boolean)
                          .join(" ")}
                      >
                        {item.label && (
                          <span className="baqarah-mushaf-map__subtopic-label">{item.label}</span>
                        )}
                        {item.verses && (
                          <span className="baqarah-mushaf-map__subtopic-verses">
                            Verses {item.verses}
                          </span>
                        )}
                        {item.detail && (
                          <p className="baqarah-mushaf-map__subtopic-detail">{item.detail}</p>
                        )}
                        {!item.label && item.text}
                      </li>
                    );
                  })}
                </ul>
              )}
              <span className="baqarah-mushaf-map__range">
                Verses {topic.verseRange}
                {topic.count > 1 && (
                  <span className="baqarah-mushaf-map__count">
                    · {topic.count} āyāt
                  </span>
                )}
              </span>
            </>
          )}
          <div
            className="baqarah-mushaf-map__verses"
            aria-label={`Verses ${topic.verseRange}`}
          >
            {topic.verses.map((verse) => (
              <span key={verse} className="baqarah-mushaf-map__verse">
                {verse}
              </span>
            ))}
          </div>
        </article>
      ))}

      {totalVerses > 0 && (
        <div
          className="baqarah-mushaf-map__strip"
          aria-label="Verse coverage on this mushaf page"
        >
          {spans.map((topic) => (
            <div
              key={topic.id}
              className={["baqarah-mushaf-map__strip-seg", topicMushafStripClass(topic)]
                .filter(Boolean)
                .join(" ")}
              style={{ flexGrow: topic.count }}
              title={`${topicDisplayLabel(topic)}: verses ${topic.verseRange}`}
            >
              <span>{topicStripLabel(topic)}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function TimelineList({ items }) {
  return (
    <ol className="baqarah-guide-timeline">
      {items.map((item) => (
        <li key={item} className="baqarah-guide-timeline__event">
          <span className="baqarah-guide-timeline__marker" aria-hidden="true" />
          <div className="baqarah-guide-timeline__content">
            <p>{item}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

function StudyDeck({ title, subtitle, slides, topic }) {
  const topicClass = TOPIC_LETTER_CLASS[topic] ?? "";
  return (
    <section
      className={["baqarah-guide-block baqarah-guide-block--deck", topicClass]
        .filter(Boolean)
        .join(" ")}
    >
      <header className="baqarah-study-deck__intro">
        <p className="baqarah-study-deck__eyebrow">Word-by-word</p>
        <h4>{title}</h4>
        {subtitle && <p className="baqarah-study-deck__subtitle">{subtitle}</p>}
      </header>

      <ol className="baqarah-study-deck">
        {slides.map((slide, index) => (
          <li key={slide.wordGroup.phrase} className="baqarah-study-deck__item">
            <div className="baqarah-study-deck__rail" aria-hidden="true">
              <span className="baqarah-study-deck__step">{slide.step ?? index + 1}</span>
            </div>

            <article className="baqarah-study-deck__card">
              {slide.hint && (
                <div className="baqarah-study-deck__card-head">
                  <p className="baqarah-study-deck__hint">{slide.hint}</p>
                </div>
              )}

              <div className="baqarah-study-deck__body">
                <WordAnalysisGroup group={slide.wordGroup} nested />

                {slide.summary?.length > 0 && (
                  <ul className="baqarah-study-deck__summary">
                    {slide.summary.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}

function VerseHighlighted({ segments }) {
  return (
    <div className="baqarah-verse-annotated">
      <p className="baqarah-verse-annotated__ar" dir="rtl">
        {segments.map((seg, i) => (
          <span key={i} className="baqarah-verse-annotated__wrap">
            <span className={`baqarah-hl ${HIGHLIGHT_CLASS[seg.color] ?? ""}`}>
              {seg.text}
            </span>
            {seg.label && (
              <span className="baqarah-verse-annotated__tag">{seg.label}</span>
            )}
          </span>
        ))}
      </p>
    </div>
  );
}

function WordAnalysisGroup({ group, nested }) {
  return (
    <div className={`baqarah-word-group${nested ? " baqarah-word-group--nested" : ""}`}>
      <p className="baqarah-word-group__phrase" dir="rtl">{group.phrase}</p>
      <div className="baqarah-word-group__cards">
        {group.words.map((word) => (
          <article key={word.ar} className="baqarah-word-card">
            <p className="baqarah-word-card__ar" dir="rtl">{word.ar}</p>
            {word.gloss && <p className="baqarah-word-card__gloss">{word.gloss}</p>}
            {word.points?.length > 0 && (
              <ul>
                {word.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}

function ConceptVerse({ verse }) {
  return (
    <div className="baqarah-concept-verse">
      <p className="baqarah-concept-verse__word" dir="rtl">{verse.word}</p>
      <blockquote className="baqarah-concept-verse__quote">
        <p className="baqarah-concept-verse__ar" dir="rtl">{verse.ar}</p>
        <p className="baqarah-concept-verse__en">{verse.en}</p>
        <cite>{verse.cite}</cite>
      </blockquote>
    </div>
  );
}

function ConceptFlowchart({ flow }) {
  return (
    <div className="baqarah-flow">
      <div className="baqarah-flow__root">
        <span className="baqarah-flow__arabic" dir="rtl">{flow.word}</span>
        <span>{flow.meaning}</span>
      </div>
      <p className="baqarah-flow__in">In</p>
      <div className="baqarah-flow__branches">
        {flow.branches.map((branch) => (
          <div key={branch.path} className="baqarah-flow__branch">
            <div className="baqarah-flow__step baqarah-flow__step--type">{branch.path}</div>
            <div className="baqarah-flow__arrow">↓</div>
            <div className="baqarah-flow__step baqarah-flow__step--detail">{branch.detail}</div>
            <div className="baqarah-flow__arrow">↓</div>
            <div className="baqarah-flow__step baqarah-flow__step--response">{branch.response}</div>
          </div>
        ))}
      </div>
      {flow.references?.length > 0 && (
        <div className="baqarah-flow__refs">
          {flow.references.map((ref) => (
            <blockquote key={ref.cite}>
              <p>{ref.en}</p>
              <cite dir="rtl">{ref.ar} [{ref.cite}]</cite>
            </blockquote>
          ))}
        </div>
      )}
    </div>
  );
}

function CrossingDiagram() {
  return (
    <div className="baqarah-crossing">
      <div className="baqarah-crossing__side baqarah-crossing__side--pharaoh">
        <p dir="rtl">فرعون و جنوده</p>
        <span>Firʿawn &amp; his soldiers</span>
        <div className="baqarah-crossing__icon" aria-hidden="true">🌊</div>
      </div>
      <div className="baqarah-crossing__mid">
        <p dir="rtl">بني إسرائيل</p>
        <span>Banū Isrāʾīl</span>
        <span className="baqarah-crossing__verse">50</span>
      </div>
      <div className="baqarah-crossing__side baqarah-crossing__side--sea">
        <p dir="rtl">البحر</p>
        <span>The Sea</span>
        <div className="baqarah-crossing__waves" aria-hidden="true">〰️</div>
      </div>
    </div>
  );
}

function GuideSection({ section, guideTopics = [] }) {
  switch (section.type) {
    case "topicsBanner":
      return (
        <section className="baqarah-guide-block baqarah-guide-block--banner">
          <TopicsMapBanner topics={enrichTopics(section.topics, guideTopics)} />
        </section>
      );

    case "mushafTopicsMap": {
      const topics = enrichTopics(section.topics ?? guideTopics, guideTopics);
      return (
        <section className="baqarah-guide-block baqarah-guide-block--topics-map">
          {section.showBanner && <TopicsMapBanner topics={topics} />}
          <MushafTopicsMap topics={topics} />
        </section>
      );
    }

    case "pageTopicsTree":
    case "pageTopicsMap":
      return (
        <section className="baqarah-guide-block baqarah-guide-block--chart">
          {section.mapId === "page-5" ? (
            <PageFiveTopicsMap />
          ) : section.mapId === "page-4" ? (
            <PageFourTopicsMap />
          ) : section.mapId === "page-6" ? (
            <PageSixTopicsMap />
          ) : section.mapId === "page-8" ? (
            <PageEightTopicsMap />
          ) : section.mapId === "page-9" ? (
            <PageNineTopicsMap />
          ) : (
            <PageThreeTopicsMap />
          )}
        </section>
      );

    case "covenantTopicsMap":
      return (
        <section className="baqarah-guide-block baqarah-guide-block--chart">
          <CovenantTopicsOverview />
        </section>
      );

    case "parableLinking":
      return (
        <GuidePanel section={section} guideTopics={guideTopics} className="baqarah-guide-block--chart">
          <HypocritesParableLinking />
        </GuidePanel>
      );

    case "rejectersConsequence":
      return (
        <GuidePanel section={section} guideTopics={guideTopics} className="baqarah-guide-block--chart">
          <RejectersConsequenceFlow />
        </GuidePanel>
      );

    case "fearHopeBalance":
      return (
        <section className="baqarah-guide-block baqarah-guide-block--chart">
          <FearHopeBalanceChart />
        </section>
      );

    case "mosquitoParable":
      return (
        <section className="baqarah-guide-block baqarah-guide-block--chart">
          <MosquitoParableChart />
        </section>
      );

    case "page6Linking":
      return (
        <GuidePanel section={section} guideTopics={guideTopics} className="baqarah-guide-block--chart">
          <Page6LinkingBanner />
        </GuidePanel>
      );

    case "page6AngelsEvents":
      return (
        <GuidePanel section={section} guideTopics={guideTopics} className="baqarah-guide-block--chart">
          <Page6AngelsEventsMap />
        </GuidePanel>
      );

    case "page6AdamEvents":
      return (
        <GuidePanel section={section} guideTopics={guideTopics} className="baqarah-guide-block--chart">
          <Page6AdamEventsMap />
        </GuidePanel>
      );

    case "baqarahUniquePhrases":
      return (
        <GuidePanel section={section} guideTopics={guideTopics} className="baqarah-guide-block--chart">
          <BaqarahUniquePhrasesChart />
        </GuidePanel>
      );

    case "page6SpeechPatterns":
      return (
        <GuidePanel section={section} guideTopics={guideTopics} className="baqarah-guide-block--chart">
          <Page6SpeechPatternsChart />
        </GuidePanel>
      );

    case "page6KnowledgePatterns":
      return (
        <GuidePanel section={section} guideTopics={guideTopics} className="baqarah-guide-block--chart">
          <Page6KnowledgePatternsChart />
        </GuidePanel>
      );

    case "pageEightDetailedTopicsMap":
      return (
        <section className="baqarah-guide-block baqarah-guide-block--chart">
          <PageEightDetailedTopicsMap />
        </section>
      );

    case "pageNineDetailedTopicsMap":
      return (
        <section className="baqarah-guide-block baqarah-guide-block--chart">
          <PageNineDetailedTopicsMap />
        </section>
      );

    case "pageEightMainTopic":
      return (
        <section className="baqarah-guide-block baqarah-guide-block--chart">
          <PageEightMainTopicBanner />
        </section>
      );

    case "page8RepeatedWords":
      return (
        <GuidePanel section={section} guideTopics={guideTopics} className="baqarah-guide-block--chart">
          <Page8RepeatedWordsChart />
        </GuidePanel>
      );

    case "page8LinkingPattern":
      return (
        <GuidePanel section={section} guideTopics={guideTopics} className="baqarah-guide-block--chart">
          <Page8LinkingPatternChart />
        </GuidePanel>
      );

    case "balaunConcept":
      return (
        <GuidePanel section={section} guideTopics={guideTopics} className="baqarah-guide-block--chart">
          <BalaunConceptChart />
        </GuidePanel>
      );

    case "balaunVerseRefs":
      return (
        <GuidePanel section={section} guideTopics={guideTopics} className="baqarah-guide-block--chart">
          <BalaunVerseRefsChart />
        </GuidePanel>
      );

    case "summary":
    case "link":
      return (
        <GuidePanel section={section} guideTopics={guideTopics}>
          <p>{section.body}</p>
        </GuidePanel>
      );

    case "studyDeck":
      return (
        <StudyDeck
          title={section.title}
          subtitle={section.subtitle}
          slides={section.slides}
          topic={section.topic}
        />
      );

    case "verseStudy":
      return <BaqarahVerseStudy section={section} guideTopics={guideTopics} />;

    case "qa":
      return (
        <GuidePanel section={section} guideTopics={guideTopics}>
          <GuideQAPanel qa={section} />
        </GuidePanel>
      );

    case "pageBridge":
      return (
        <GuidePanel section={section} guideTopics={guideTopics}>
          <PageBridge note={section.note} from={section.from} to={section.to} />
        </GuidePanel>
      );

    case "studyBlocks":
      return (
        <GuidePanel section={section} guideTopics={guideTopics}>
          <StudyBlockList
            blocks={section.blocks}
            topicColor={resolveTopicMeta(section.topic, guideTopics)?.color}
          />
        </GuidePanel>
      );

    case "ayah61MemorizeQuiz":
      return (
        <section className="baqarah-guide-block baqarah-guide-block--memorize-quiz">
          <BaqarahAyah61MemorizeQuiz />
        </section>
      );

    case "page10MemorizeQuiz":
      return (
        <section className="baqarah-guide-block baqarah-guide-block--memorize-quiz">
          <BaqarahPage10MemorizeQuiz />
        </section>
      );

    case "pageLink": {
      const isSpotlight = section.illustrations?.some((img) => img.variant === "spotlight");
      return (
        <GuidePanel
          section={section}
          guideTopics={guideTopics}
          className={`baqarah-guide-block--spread${isSpotlight ? " baqarah-guide-block--spotlight" : ""}`}
          bodyClassName="baqarah-guide-panel__body--flush"
        >
          {section.illustrations?.map((img) => (
            <Illustration
              key={img.src}
              src={img.src}
              alt={img.alt}
              caption={img.caption}
              variant={img.variant ?? "spread"}
            />
          ))}
        </GuidePanel>
      );
    }

    case "studyGallery":
      return (
        <GuidePanel
          section={section}
          guideTopics={guideTopics}
          className="baqarah-guide-block--spread"
          bodyClassName="baqarah-guide-panel__body--flush baqarah-guide-panel__body--gallery"
        >
          {section.illustrations?.map((img) => (
            <Illustration
              key={img.src}
              src={img.src}
              alt={img.alt}
              caption={img.caption}
              variant={img.variant ?? "spread"}
            />
          ))}
        </GuidePanel>
      );

    case "timeline":
      return (
        <GuidePanel section={section} guideTopics={guideTopics}>
          <TimelineList items={section.items} />
        </GuidePanel>
      );

    case "concept":
      return (
        <GuidePanel section={section} guideTopics={guideTopics} className="baqarah-guide-block--concept">
          {section.verseHighlight && <ConceptVerse verse={section.verseHighlight} />}
          {section.body && <p>{section.body}</p>}
          {section.reference && (
            <p className="baqarah-guide-ref">{section.reference}</p>
          )}
          {section.flow && <ConceptFlowchart flow={section.flow} />}
        </GuidePanel>
      );

    case "verse":
      return (
        <section className={blockClass("baqarah-guide-block baqarah-guide-block--verse", section, guideTopics)}>
          <header className="baqarah-guide-verse-header">
            <span className="baqarah-guide-verse-label">{section.title}</span>
            <span className="baqarah-guide-verse-num">{toArabicNum(section.verse)}</span>
          </header>

          {section.topicBadge && (
            <div className={`baqarah-topic-badge baqarah-topic-badge--${section.topicBadge.color}`}>
              Topic <strong>{section.topicBadge.id}</strong>
              <span>(Verses {section.topicBadge.range})</span>
            </div>
          )}

          <blockquote className="baqarah-guide-translation">
            {section.translation}
          </blockquote>

          {section.segments && <VerseHighlighted segments={section.segments} />}

          {section.wordGroups?.map((group) => (
            <WordAnalysisGroup key={group.phrase} group={group} />
          ))}

          {section.notes?.map((note) => (
            <div key={note.phrase} className="baqarah-guide-note">
              <p className="baqarah-guide-note-phrase" dir="rtl">{note.phrase}</p>
              <ul>
                {note.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}

          {section.showCrossingDiagram && <CrossingDiagram />}

          {section.illustrations?.map((img) => (
            <Illustration key={img.src} src={img.src} alt={img.alt} caption={img.caption} />
          ))}
        </section>
      );

    default:
      return null;
  }
}

function StudyModeToggle({ mode, onChange, hasIraab }) {
  if (!hasIraab) return null;

  return (
    <div className="baqarah-guide-mode-toggle" role="tablist" aria-label="Study mode">
      <button
        type="button"
        role="tab"
        aria-selected={mode === "meaning"}
        className={[
          "baqarah-guide-mode-toggle__btn",
          mode === "meaning" && "is-active",
        ]
          .filter(Boolean)
          .join(" ")}
        onClick={() => onChange("meaning")}
      >
        Meaning study
      </button>
      <button
        type="button"
        role="tab"
        aria-selected={mode === "iraab"}
        className={[
          "baqarah-guide-mode-toggle__btn",
          mode === "iraab" && "is-active",
        ]
          .filter(Boolean)
          .join(" ")}
        onClick={() => onChange("iraab")}
      >
        Iʿrāb study
      </button>
    </div>
  );
}

const MEMORIZE_QUIZ_SECTION_TYPES = new Set(["ayah61MemorizeQuiz", "page10MemorizeQuiz"]);

function PageGuideContent({ guide, onMemorize, sessionDurationLabel, studyMode }) {
  const hasTopicsMap = guide.sections?.some(
    (s) =>
      s.type === "mushafTopicsMap" ||
      s.type === "pageTopicsMap" ||
      s.type === "pageTopicsTree",
  );
  const sections = applyTopicFlow(guide.sections ?? [], guide.topics);
  const memorizeQuizSections = sections.filter((s) =>
    MEMORIZE_QUIZ_SECTION_TYPES.has(s.type),
  );
  const introSections = sections.filter(
    (s) =>
      s.type === "mushafTopicsMap" ||
      s.type === "pageTopicsTree" ||
      s.type === "pageTopicsMap",
  );
  const otherSections = sections.filter(
    (s) =>
      !MEMORIZE_QUIZ_SECTION_TYPES.has(s.type) &&
      s.type !== "mushafTopicsMap" &&
      s.type !== "pageTopicsTree" &&
      s.type !== "pageTopicsMap",
  );
  const iraabAyahs = getBaqarahIraabForPage(guide.mushafPage);

  if (studyMode === "iraab" && iraabAyahs) {
    return (
      <div className="baqarah-guide-content">
        <BaqarahIraabStudy
          ayahs={iraabAyahs}
          verseRange={guide.verseRange}
          mushafPage={guide.mushafPage}
        />
      </div>
    );
  }

  return (
    <div className="baqarah-guide-content">
      {memorizeQuizSections.map((section, index) => (
        <GuideSection
          key={`${section.type}-${index}`}
          section={section}
          guideTopics={guide.topics}
        />
      ))}

      {introSections.map((section, index) => (
        <GuideSection key={`${section.type}-${index}`} section={section} guideTopics={guide.topics} />
      ))}

      <header className="baqarah-guide-page-header">
        <div>
          <p className="baqarah-guide-kicker">
            Mushaf page {guide.mushafPage} · āyāt {guide.verseRange}
          </p>
          <h3>{guide.title}</h3>
        </div>
        <div className="baqarah-guide-memorize-wrap">
          <button
            type="button"
            className="baqarah-guide-memorize-btn"
            onClick={onMemorize}
          >
            Memorize This Passage
          </button>
          {sessionDurationLabel && (
            <p className="baqarah-guide-session-duration">
              Full guided session · {sessionDurationLabel}
            </p>
          )}
        </div>
      </header>

      <p className="baqarah-guide-main-topic">{guide.mainTopic}</p>

      {guide.topics?.length > 0 && !hasTopicsMap && (
        <div className="baqarah-guide-topics">
          {guide.topics.map((topic) => (
            <article
              key={topic.id}
              className={[
                "baqarah-guide-topic",
                topic.id === "A" && "baqarah-guide-topic--letter-a",
                topic.id === "B" && "baqarah-guide-topic--letter-b",
                topic.color && TOPIC_COLOR_CLASS[topic.color],
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <div className="baqarah-guide-topic-head">
                <span className="baqarah-guide-topic-label">{topic.label}</span>
                <span className="baqarah-guide-topic-range">Verses {topic.verseRange}</span>
              </div>
              <p>{topic.summary}</p>
            </article>
          ))}
        </div>
      )}

      {otherSections.map((section, index) => (
        <GuideSection
          key={`${section.type}-${section.title ?? index}`}
          section={section}
          guideTopics={guide.topics}
        />
      ))}
    </div>
  );
}

const BAQARAH_SURAH_NUMBER = 2;

export default function BaqarahPageGuide({ activeMushafPage = null }) {
  const selectedPage = activeMushafPage ?? 2;
  const [sessionOpen, setSessionOpen] = useState(false);
  const [studyMode, setStudyMode] = useState("meaning");

  const guide = getBaqarahGuideByMushafPage(selectedPage);
  const hasIraab = hasBaqarahIraabForPage(selectedPage);
  const sessionAyat = guide ? parseVerseRange(guide.verseRange) : [];
  const sessionDurationLabel = sessionAyat.length
    ? estimateSessionDurationLabel(sessionAyat)
    : "";

  useEffect(() => {
    setStudyMode("meaning");
  }, [selectedPage]);

  return (
    <section className="baqarah-page-guide course-themed" aria-label="Al-Baqarah page study guide">
      <div className="baqarah-page-guide__main">
        {guide ? (
          <>
            {hasIraab && (
              <div className="baqarah-guide-toolbar">
                <StudyModeToggle
                  mode={studyMode}
                  onChange={setStudyMode}
                  hasIraab={hasIraab}
                />
              </div>
            )}
            <PageGuideContent
              guide={guide}
              onMemorize={() => setSessionOpen(true)}
              sessionDurationLabel={sessionDurationLabel}
              studyMode={studyMode}
            />
          </>
        ) : (
          <p className="baqarah-page-guide__empty">No guide for this page yet.</p>
        )}
      </div>

      {sessionOpen && guide && sessionAyat.length > 0 && (
        <HifdhSessionMode
          selectedAyat={sessionAyat}
          surahNumber={BAQARAH_SURAH_NUMBER}
          mushafPage={guide.mushafPage}
          onClose={() => setSessionOpen(false)}
        />
      )}
    </section>
  );
}

import VerseSegmentMap from "./VerseSegmentMap.jsx";
import {
  StormParableChart,
  EncompassingChart,
  JannahFeaturesChart,
  JannahEquationChart,
  JannahWordBreakdownChart,
  FearHopeBalanceChart,
  MosquitoParableChart,
  RevelationContextChart,
  FasiqConceptChart,
  CovenantBreakChart,
  Verse30OpeningChart,
  KhalifahChart,
  AngelsObjectionChart,
  AngelsGlorificationChart,
  Verse30AllahResponseChart,
  Verse30SpeakersChart,
  Verse32AnalysisChart,
  Verse33AnalysisChart,
  AngelsMannerQuiz,
  AngelsHidingChart,
  Verse34ProstrationChart,
  KeyMeaningsChart,
  Verse35GardenChart,
  Verse35TreeWarningChart,
  Verse36DescentChart,
  Verse37RepentanceChart,
} from "./BaqarahFlowCharts.jsx";
import BaqarahAyah61MemorizeQuiz from "./BaqarahAyah61MemorizeQuiz.jsx";
import BaqarahPage10MemorizeQuiz from "./BaqarahPage10MemorizeQuiz.jsx";

const TAG_COLORS = {
  amber: "baqarah-vtag--amber",
  rose: "baqarah-vtag--rose",
  green: "baqarah-vtag--green",
  teal: "baqarah-vtag--teal",
  cyan: "baqarah-vtag--cyan",
  blue: "baqarah-vtag--blue",
};

const SPOTLIGHT_ICONS = {
  city: "🏛️",
  harvest: "🌾",
  gate: "🕌",
  default: "📖",
};

export function VerseTagLegend({ tags = [] }) {
  if (!tags.length) return null;
  return (
    <div className="baqarah-vtags">
      <p className="baqarah-vtags__lead">Key markers in this verse</p>
      <ul className="baqarah-vtags__list">
        {tags.map((tag) => (
          <li key={tag.label} className="baqarah-vtags__item">
            <span className={`baqarah-vtag ${TAG_COLORS[tag.color] ?? ""}`}>{tag.label}</span>
            {tag.words?.length > 0 && (
              <span className="baqarah-vtags__words" dir="rtl">
                {tag.words.join(" · ")}
              </span>
            )}
            {tag.note && <span className="baqarah-vtags__note">{tag.note}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function StudyImage({ title, verseRef, src, alt, caption }) {
  return (
    <figure className="baqarah-study-image">
      {verseRef && (
        <header className="baqarah-study-image__banner">Verse {verseRef}</header>
      )}
      {title && !verseRef && <h5 className="baqarah-study-image__title">{title}</h5>}
      <img src={src} alt={alt ?? title ?? ""} className="baqarah-study-image__img" loading="lazy" />
      {caption && <figcaption className="baqarah-study-image__caption">{caption}</figcaption>}
    </figure>
  );
}

export function BranchingDiagram({ root, branches = [], note }) {
  return (
    <div className="baqarah-branching">
      <div className="baqarah-branching__root">
        <p className="baqarah-branching__ar" dir="rtl">{root.ar}</p>
        {root.en && <p className="baqarah-branching__en">{root.en}</p>}
      </div>
      <div className="baqarah-branching__arrow" aria-hidden="true">↓</div>
      <div className="baqarah-branching__branches">
        {branches.map((branch) => (
          <article key={branch.label} className="baqarah-branching__branch">
            <h6>{branch.label}</h6>
            <ul>
              {branch.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      {note && (
        <blockquote className="baqarah-branching__note">
          <cite>{note.cite}</cite>
          <p>{note.text}</p>
        </blockquote>
      )}
    </div>
  );
}

export function TwelveSpringsCube({ ar, scholar }) {
  return (
    <div className="baqarah-springs-cube">
      <div className="baqarah-springs-cube__visual" aria-hidden="true">
        <div className="baqarah-springs-cube__box">
          {["front", "right", "back", "left"].map((face) => (
            <span key={face} className={`baqarah-springs-cube__face baqarah-springs-cube__face--${face}`}>
              3
            </span>
          ))}
        </div>
        <p className="baqarah-springs-cube__label">4 sides × 3 springs = 12</p>
      </div>
      {ar && <p className="baqarah-springs-cube__ar" dir="rtl">{ar}</p>}
      {scholar && <p className="baqarah-springs-cube__scholar">{scholar}</p>}
    </div>
  );
}

export function ConceptExplain({ title, ar, body, points }) {
  return (
    <div className="baqarah-concept-explain">
      <h5 className="baqarah-concept-explain__title">
        {title}
        {ar && <span dir="rtl"> {ar}</span>}
      </h5>
      {body && <p className="baqarah-concept-explain__body">{body}</p>}
      {points?.length > 0 && (
        <ul className="baqarah-concept-explain__points">
          {points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function VerseTopicsMap({ items = [] }) {
  if (!items.length) return null;
  return (
    <div className="baqarah-verse-topics">
      {items.map((item) => (
        <article
          key={item.verse}
          className={`baqarah-verse-topics__item baqarah-verse-topics__item--${item.tone ?? "neutral"}`}
        >
          <span className="baqarah-verse-topics__verse">Verse {item.verse}</span>
          <p className="baqarah-verse-topics__summary">{item.summary}</p>
        </article>
      ))}
    </div>
  );
}

export function SpotlightPhrase({
  verseRef,
  ar,
  en,
  icon = "default",
  image,
  images,
  imageAlt,
  credit,
}) {
  const hasGallery = images?.length > 0;

  return (
    <article className="baqarah-spotlight">
      {verseRef && (
        <header className="baqarah-spotlight__banner">Verse {verseRef}</header>
      )}
      {hasGallery ? (
        <figure className="baqarah-spotlight__figure">
          <div className="baqarah-spotlight__fruit-grid">
            {images.map((item) => (
              <img
                key={item.src}
                src={item.src}
                alt={item.alt ?? "Fruit"}
                className="baqarah-spotlight__fruit"
                loading="lazy"
              />
            ))}
          </div>
          {credit && <figcaption className="baqarah-spotlight__credit">{credit}</figcaption>}
        </figure>
      ) : image ? (
        <figure className="baqarah-spotlight__figure">
          <img
            src={image}
            alt={imageAlt ?? en ?? ar}
            className="baqarah-spotlight__photo"
            loading="lazy"
          />
          {credit && <figcaption className="baqarah-spotlight__credit">{credit}</figcaption>}
        </figure>
      ) : (
        <div className="baqarah-spotlight__body baqarah-spotlight__body--icon">
          <span className="baqarah-spotlight__icon" aria-hidden="true">
            {SPOTLIGHT_ICONS[icon] ?? SPOTLIGHT_ICONS.default}
          </span>
        </div>
      )}
      <div className="baqarah-spotlight__footer">
        <p className="baqarah-spotlight__ar" dir="rtl">{ar}</p>
        {en && <p className="baqarah-spotlight__en">{en}</p>}
      </div>
    </article>
  );
}

export function WordBubble({ word, note }) {
  return (
    <div className="baqarah-word-bubble">
      <div className="baqarah-word-bubble__shape">
        <p className="baqarah-word-bubble__word" dir="rtl">{word}</p>
      </div>
      {note && <p className="baqarah-word-bubble__note">{note}</p>}
    </div>
  );
}

export function CommandComparison({ title, pairs = [], footer, image, imageAlt, credit }) {
  return (
    <div className="baqarah-cmd-compare">
      {title && <h5 className="baqarah-cmd-compare__title">{title}</h5>}
      {image && (
        <figure className="baqarah-cmd-compare__figure">
          <img src={image} alt={imageAlt ?? title ?? ""} loading="lazy" />
          {credit && <figcaption>{credit}</figcaption>}
        </figure>
      )}
      <div className="baqarah-cmd-compare__grid">
        {pairs.map((pair) => (
          <div key={pair.commanded.ar} className="baqarah-cmd-compare__row">
            <div className="baqarah-cmd-compare__cell baqarah-cmd-compare__cell--command">
              <span className="baqarah-cmd-compare__label">Commanded</span>
              <p className="baqarah-cmd-compare__ar" dir="rtl">{pair.commanded.ar}</p>
              <p className="baqarah-cmd-compare__en">{pair.commanded.en}</p>
            </div>
            <span className="baqarah-cmd-compare__arrow" aria-hidden="true">→</span>
            <div className="baqarah-cmd-compare__cell baqarah-cmd-compare__cell--changed">
              <span className="baqarah-cmd-compare__label">What they did</span>
              <p className="baqarah-cmd-compare__ar" dir="rtl">{pair.changed.ar}</p>
              <p className="baqarah-cmd-compare__en">{pair.changed.en}</p>
            </div>
          </div>
        ))}
      </div>
      {footer && <p className="baqarah-cmd-compare__footer">{footer}</p>}
    </div>
  );
}

export function VisualFlow({ disobedience, consequence }) {
  return (
    <div className="baqarah-visual-flow">
      <div className="baqarah-visual-flow__step">
        <p className="baqarah-visual-flow__ar" dir="rtl">{disobedience.ar}</p>
        <div className="baqarah-visual-flow__bubbles">
          {disobedience.bubbles?.map((bubble) => (
            <span key={bubble.ar} className="baqarah-visual-flow__bubble" dir="rtl">
              {bubble.ar}
            </span>
          ))}
          <span className="baqarah-visual-flow__neq" aria-label="not equal">≠</span>
        </div>
      </div>
      <div className="baqarah-visual-flow__arrow" aria-hidden="true">↓</div>
      <div className="baqarah-visual-flow__step baqarah-visual-flow__step--consequence">
        <p className="baqarah-visual-flow__ar" dir="rtl">{consequence.ar}</p>
        {consequence.label && (
          <span className="baqarah-visual-flow__sky">{consequence.label}</span>
        )}
      </div>
    </div>
  );
}

export function ContrastPanel({ title, columns = [] }) {
  return (
    <div className="baqarah-contrast">
      {title && <h5 className="baqarah-contrast__title">{title}</h5>}
      <div className="baqarah-contrast__grid">
        {columns.map((col) => (
          <article
            key={col.heading}
            className={[
              "baqarah-contrast__col",
              col.positive ? "baqarah-contrast__col--positive" : "baqarah-contrast__col--negative",
            ].filter(Boolean).join(" ")}
          >
            <h6 className="baqarah-contrast__heading">{col.heading}</h6>
            <ul className="baqarah-contrast__lines">
              {col.lines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            {col.outcome && (
              <p className="baqarah-contrast__outcome">{col.outcome}</p>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}

export function PageBridge({ note, from, to }) {
  return (
    <div className="baqarah-page-bridge">
      {note && <p className="baqarah-page-bridge__note">{note}</p>}
      <div className="baqarah-page-bridge__spread">
        <article className="baqarah-page-bridge__page">
          <span className="baqarah-page-bridge__page-num">Page {from.page}</span>
          <span className="baqarah-page-bridge__verse">Verse {from.verse}</span>
          <p className="baqarah-page-bridge__highlight" dir="rtl">{from.highlight}</p>
          <p className="baqarah-page-bridge__desc">{from.note}</p>
        </article>
        <span className="baqarah-page-bridge__link" aria-hidden="true">→</span>
        <article className="baqarah-page-bridge__page">
          <span className="baqarah-page-bridge__page-num">Page {to.page}</span>
          <span className="baqarah-page-bridge__verse">Verse {to.verse}</span>
          <p className="baqarah-page-bridge__highlight" dir="rtl">{to.highlight}</p>
          <p className="baqarah-page-bridge__desc">{to.note}</p>
        </article>
      </div>
    </div>
  );
}

export function GuideQAPanel({ qa }) {
  if (!qa) return null;
  return (
    <div className="baqarah-verse-study__qa baqarah-verse-study__qa--standalone">
      <div className="baqarah-verse-study__qa-head">
        <h5>{qa.title ?? "Reflection"}</h5>
      </div>
      {qa.question && (
        <p className="baqarah-verse-study__qa-question">
          <span className="baqarah-verse-study__qa-label">Q</span>
          {qa.question}
        </p>
      )}
      {qa.examples?.length > 0 && (
        <div className="baqarah-qa-examples">
          {qa.examples.map((ex) => (
            <article key={ex.cite} className="baqarah-qa-example">
              <p className="baqarah-qa-example__ar" dir="rtl">{ex.ar}</p>
              {ex.highlight && (
                <p className="baqarah-qa-example__highlight" dir="rtl">{ex.highlight}</p>
              )}
              <p className="baqarah-qa-example__note">{ex.note}</p>
              <cite className="baqarah-qa-example__cite">{ex.cite}</cite>
            </article>
          ))}
        </div>
      )}
      {qa.answers?.length > 0 && (
        <div className="baqarah-verse-study__qa-answer">
          <span className="baqarah-verse-study__qa-label">A</span>
          <ol className="baqarah-verse-study__qa-list">
            {qa.answers.map((answer) => (
              <li key={answer}>{answer}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}

export function StudyBlock({ block, topicColor }) {
  switch (block.type) {
    case "verseTags":
      return <VerseTagLegend tags={block.tags} />;
    case "spotlight":
      return (
        <SpotlightPhrase
          verseRef={block.verseRef}
          ar={block.ar}
          en={block.en}
          icon={block.icon}
          image={block.image}
          images={block.images}
          imageAlt={block.imageAlt}
          credit={block.credit}
        />
      );
    case "wordBubble":
      return <WordBubble word={block.word} note={block.note} />;
    case "comparison":
      return (
        <CommandComparison
          title={block.title}
          pairs={block.pairs}
          footer={block.footer}
          image={block.image}
          imageAlt={block.imageAlt}
          credit={block.credit}
        />
      );
    case "visualFlow":
      return (
        <VisualFlow
          disobedience={block.disobedience}
          consequence={block.consequence}
        />
      );
    case "contrast":
      return <ContrastPanel title={block.title} columns={block.columns} />;
    case "pageBridge":
      return <PageBridge note={block.note} from={block.from} to={block.to} />;
    case "verseTopicsMap":
      return <VerseTopicsMap items={block.items} />;
    case "studyImage":
      return (
        <StudyImage
          title={block.title}
          verseRef={block.verseRef}
          src={block.src}
          alt={block.alt}
          caption={block.caption}
        />
      );
    case "branching":
      return (
        <BranchingDiagram
          root={block.root}
          branches={block.branches}
          note={block.note}
        />
      );
    case "twelveSprings":
      return (
        <TwelveSpringsCube ar={block.ar} scholar={block.scholar} />
      );
    case "conceptExplain":
      return (
        <ConceptExplain
          title={block.title}
          ar={block.ar}
          body={block.body}
          points={block.points}
        />
      );
    case "segmentMap":
      return (
        <VerseSegmentMap
          verseRef={block.verseRef}
          title={block.title}
          rows={block.rows}
          footnotes={block.footnotes}
          topicColor={topicColor}
        />
      );
    case "qa":
      return <GuideQAPanel qa={block} />;
    case "stormParable":
      return <StormParableChart />;
    case "encompassing":
      return <EncompassingChart />;
    case "jannahFeatures":
      return <JannahFeaturesChart />;
    case "jannahEquation":
      return <JannahEquationChart />;
    case "jannahWordBreakdown":
      return <JannahWordBreakdownChart />;
    case "fearHopeBalance":
      return <FearHopeBalanceChart />;
    case "mosquitoParable":
      return <MosquitoParableChart />;
    case "revelationContext":
      return <RevelationContextChart />;
    case "fasiqConcept":
      return <FasiqConceptChart />;
    case "covenantBreak":
      return <CovenantBreakChart />;
    case "verse30Opening":
      return <Verse30OpeningChart />;
    case "khalifahChart":
      return <KhalifahChart />;
    case "angelsObjection":
      return <AngelsObjectionChart />;
    case "angelsGlorification":
      return <AngelsGlorificationChart />;
    case "verse30AllahResponse":
      return <Verse30AllahResponseChart />;
    case "verse30Speakers":
      return <Verse30SpeakersChart />;
    case "verse32Analysis":
      return <Verse32AnalysisChart />;
    case "verse33Analysis":
      return <Verse33AnalysisChart />;
    case "angelsMannerQuiz":
      return <AngelsMannerQuiz />;
    case "angelsHiding":
      return <AngelsHidingChart />;
    case "verse34Prostration":
      return <Verse34ProstrationChart />;
    case "keyMeanings":
      return <KeyMeaningsChart />;
    case "verse35Garden":
      return <Verse35GardenChart />;
    case "verse35TreeWarning":
      return <Verse35TreeWarningChart />;
    case "verse36Descent":
      return <Verse36DescentChart />;
    case "verse37Repentance":
      return <Verse37RepentanceChart />;
    case "ayah61MemorizeQuiz":
      return <BaqarahAyah61MemorizeQuiz />;
    case "page10MemorizeQuiz":
      return <BaqarahPage10MemorizeQuiz />;
    default:
      return null;
  }
}

export function StudyBlockList({ blocks = [], topicColor }) {
  if (!blocks.length) return null;
  return (
    <div className="baqarah-study-blocks">
      {blocks.map((block, index) => (
        <StudyBlock key={`${block.type}-${index}`} block={block} topicColor={topicColor} />
      ))}
    </div>
  );
}

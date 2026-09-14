function ChartBanner({ title }) {
  return (
    <div className="baqarah-chart-banner">
      <span>{title}</span>
    </div>
  );
}

const PAGE3_TOPIC_BRANCHES = [
  {
    id: "rejecters",
    title: "The Disbelievers",
    verseRange: "6&7",
    pages: "(Page 3)",
    nodeShape: "rect",
    subTopics: [
      "Brief account",
      "Consequence",
      { text: "Early punishment", bullet: true },
      "1 — Definition",
      "2 — Reason",
      "3 — Their punishment",
    ],
    verses: [6, 7],
  },
  {
    id: "hypocrites",
    title: "The Hypocrites",
    verseRange: "8–16",
    pages: "(Page 3, 4)",
    nodeShape: "oval",
    subTopics: [
      "Brief account",
      "The advice",
      "Don't",
      "Do",
      "Meetings",
      { text: "Late punishment", bullet: true },
    ],
    verses: [8, 9, 10, 11, 12, 13, 14, 15, 16],
  },
];

function Page3TopicSubList({ items = [] }) {
  return (
    <ul className="baqarah-page3-map__subtopics">
      {items.map((item) => {
        const text = typeof item === "string" ? item : item.text;
        const key = text;
        return (
          <li
            key={key}
            className={[
              "baqarah-page3-map__subtopic",
              typeof item === "object" && item.bullet && "baqarah-page3-map__subtopic--bullet",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {text}
          </li>
        );
      })}
    </ul>
  );
}

export function PageThreeTopicsMap() {
  return (
    <div className="baqarah-chart baqarah-chart--page3-map">
      <ChartBanner title="Topics Map (Page 3)" />

      <div className="baqarah-page3-map__tree">
        <div className="baqarah-topics-tree__root">
          <span className="baqarah-topics-tree__node baqarah-topics-tree__node--oval">
            The book
          </span>
        </div>
        <div className="baqarah-topics-tree__fork" aria-hidden="true">
          <svg className="baqarah-topics-tree__svg" viewBox="0 0 320 56" preserveAspectRatio="xMidYMid meet">
            <path
              d="M160 4 L160 24 M160 24 L56 50 M160 24 L264 50"
              fill="none"
              stroke="#4b5563"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <polygon points="52,50 60,42 60,58" fill="#4b5563" />
            <polygon points="268,50 260,42 260,58" fill="#4b5563" />
          </svg>
        </div>
        <div className="baqarah-topics-tree__children">
          {PAGE3_TOPIC_BRANCHES.map((branch) => (
            <div key={branch.id} className="baqarah-topics-tree__child">
              <span
                className={[
                  "baqarah-topics-tree__node",
                  branch.nodeShape === "rect"
                    ? "baqarah-topics-tree__node--rect"
                    : "baqarah-topics-tree__node--oval",
                  branch.id === "rejecters"
                    ? "baqarah-topics-tree__node--rejecters"
                    : "baqarah-topics-tree__node--hypocrites",
                ].join(" ")}
              >
                {branch.title.replace(/^The /, "")}
              </span>
              <span className="baqarah-topics-tree__page">{branch.pages}</span>
              <span className="baqarah-page3-map__verse-range">
                Verses ({branch.verseRange})
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="baqarah-page3-map__columns">
        {PAGE3_TOPIC_BRANCHES.map((branch) => (
          <article
            key={branch.id}
            className={[
              "baqarah-page3-map__column",
              branch.id === "rejecters"
                ? "baqarah-page3-map__column--rejecters"
                : "baqarah-page3-map__column--hypocrites",
            ].join(" ")}
          >
            <header className="baqarah-page3-map__column-head">
              <span className="baqarah-page3-map__column-range">
                Verses ({branch.verseRange})
              </span>
              <h4 className="baqarah-page3-map__column-title">{branch.title}</h4>
            </header>
            <Page3TopicSubList items={branch.subTopics} />
            <div className="baqarah-page3-map__verse-pills" aria-label={`Verses ${branch.verseRange}`}>
              {branch.verses.map((verse) => (
                <span key={verse} className="baqarah-page3-map__verse-pill">
                  {verse}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div
        className="baqarah-page3-map__strip"
        aria-label="Verse coverage on this mushaf page"
      >
        {PAGE3_TOPIC_BRANCHES.map((branch) => (
          <div
            key={branch.id}
            className={[
              "baqarah-page3-map__strip-seg",
              branch.id === "rejecters"
                ? "baqarah-page3-map__strip-seg--rejecters"
                : "baqarah-page3-map__strip-seg--hypocrites",
            ].join(" ")}
            style={{ flexGrow: branch.verses.length }}
            title={`${branch.title}: verses ${branch.verseRange}`}
          >
            <span>{branch.title.replace(/^The /, "")}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/** @deprecated Use PageThreeTopicsMap */
export function PageThreeTopicsTree() {
  return <PageThreeTopicsMap />;
}

const PAGE4_TOPIC_BRANCHES = [
  {
    id: "hypocrites",
    letter: "A",
    title: "The Hypocrites",
    verseRange: "17–20",
    color: "amber",
    subTopics: [
      { label: "Parable 1", verses: "17–18", detail: "Kindled fire — then darkness" },
      { label: "Parable 2", verses: "19–20", detail: "Rainstorm — thunder and lightning" },
    ],
    verses: [17, 18, 19, 20],
  },
  {
    id: "covenant",
    letter: "B",
    title: "Allah",
    verseRange: "21–24",
    color: "teal",
    subTopics: [
      { label: "1st call & 1st order", verses: "21", detail: "Worship your Lord" },
      { label: "Proves / evidence", verses: "22", detail: "Earth, sky, rain, fruits" },
      { label: "A challenge", verses: "23", detail: "Produce a sūrah like it" },
      { label: "The threat", verses: "24", detail: "Fear the Fire" },
    ],
    verses: [21, 22, 23, 24],
  },
];

function Page4TopicSubList({ items = [] }) {
  return (
    <ul className="baqarah-page4-map__subtopics">
      {items.map((item) => (
        <li key={item.label} className="baqarah-page4-map__subtopic">
          <span className="baqarah-page4-map__subtopic-label">{item.label}</span>
          <span className="baqarah-page4-map__subtopic-verses">Verses {item.verses}</span>
          {item.detail && <p className="baqarah-page4-map__subtopic-detail">{item.detail}</p>}
        </li>
      ))}
    </ul>
  );
}

export function PageFourTopicsMap() {
  return (
    <div className="baqarah-chart baqarah-chart--page4-map">
      <ChartBanner title="Topics Map (Page 4)" />

      <div className="baqarah-page4-map__columns">
        {PAGE4_TOPIC_BRANCHES.map((branch) => (
          <article
            key={branch.id}
            className={[
              "baqarah-page4-map__column",
              `baqarah-page4-map__column--${branch.color}`,
            ].join(" ")}
          >
            <header className="baqarah-page4-map__column-head">
              <span className="baqarah-page4-map__letter">{branch.letter}</span>
              <span className="baqarah-page4-map__column-range">
                Verses ({branch.verseRange})
              </span>
              <h4 className="baqarah-page4-map__column-title">{branch.title}</h4>
            </header>
            <Page4TopicSubList items={branch.subTopics} />
            <div className="baqarah-page4-map__verse-pills" aria-label={`Verses ${branch.verseRange}`}>
              {branch.verses.map((verse) => (
                <span key={verse} className="baqarah-page4-map__verse-pill">
                  {verse}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="baqarah-page4-map__strip" aria-label="Verse coverage on this mushaf page">
        {PAGE4_TOPIC_BRANCHES.map((branch) => (
          <div
            key={branch.id}
            className={[
              "baqarah-page4-map__strip-seg",
              `baqarah-page4-map__strip-seg--${branch.color}`,
            ].join(" ")}
            style={{ flexGrow: branch.verses.length }}
            title={`${branch.title}: verses ${branch.verseRange}`}
          >
            <span>{branch.letter} · {branch.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const COVENANT_PILLARS = [
  {
    ar: "العَبَادَة / التَّوْحِيد",
    en: "To worship Allah only",
    anchor: "اللَّه",
  },
  {
    ar: "الإِيمَان",
    en: "To follow the Qur'an revealed to the Prophet ﷺ",
    anchor: "بِالْقُرْآنِ وَالرَّسُول",
  },
  {
    ar: "الْخَوْف / الرَّجَاء",
    en: "Punishment / reward",
    anchor: "بِالْيَوْمِ الْآخِر (الْآخِرَة)",
  },
];

export function CovenantTopicsOverview() {
  return (
    <div className="baqarah-chart baqarah-chart--covenant-map">
      <ChartBanner title="Topics Map B (Page 4)" />
      <div className="baqarah-covenant-map__intro">
        <p className="baqarah-covenant-map__lead">New topic</p>
        <p className="baqarah-covenant-map__summary">
          A call and an order to all mankind to follow the divine guidance (
          <span dir="rtl">الْهُدَىٰ</span>
          ), asking for three things:
        </p>
      </div>
      <div className="baqarah-covenant-map__grid">
        {COVENANT_PILLARS.map((pillar) => (
          <article key={pillar.ar} className="baqarah-covenant-map__pillar">
            <div className="baqarah-covenant-map__pillar-top" dir="rtl">
              {pillar.ar}
            </div>
            <span className="baqarah-covenant-map__arrow" aria-hidden="true">↓</span>
            <p className="baqarah-covenant-map__pillar-en">{pillar.en}</p>
            <span className="baqarah-covenant-map__arrow" aria-hidden="true">↓</span>
            <div className="baqarah-covenant-map__pillar-anchor" dir="rtl">
              {pillar.anchor}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

const PARABLE_LINKS = [
  {
    label: "1st parable",
    condition: { ar: "كُلَّمَا أَضَاءَ", suffix: "لَهُمْ" },
    response: { ar: "مَّشَوْا", note: "They walk when light appears" },
    icon: "light",
  },
  {
    label: "2nd parable",
    condition: { ar: "وَإِذَا أَظْلَمَ", suffix: "عَلَيْهِمْ" },
    response: { ar: "قَامُوا", note: "They stand still when darkness returns" },
    icon: "dark",
  },
];

export function HypocritesParableLinking() {
  return (
    <div className="baqarah-chart baqarah-chart--parable-link">
      <ChartBanner title="Linking — parable responses" />
      <div className="baqarah-parable-link__rows">
        {PARABLE_LINKS.map((row) => (
          <article key={row.label} className="baqarah-parable-link__row">
            <span className="baqarah-parable-link__label">{row.label}</span>
            <div className="baqarah-parable-link__flow">
              <div className="baqarah-parable-link__phrase" dir="rtl">
                {row.condition.ar}
                <span className="baqarah-parable-link__suffix">{row.condition.suffix}</span>
              </div>
              <div className="baqarah-parable-link__bridge">
                <span className="baqarah-parable-link__bridge-label">Response</span>
                <span className="baqarah-parable-link__bridge-arrow" aria-hidden="true">←</span>
              </div>
              <div className="baqarah-parable-link__phrase baqarah-parable-link__phrase--response" dir="rtl">
                {row.response.ar}
              </div>
            </div>
            <p className="baqarah-parable-link__note">{row.response.note}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

const PAGE5_TOPIC_BRANCHES = [
  {
    id: "jannah",
    letter: "A",
    title: "Allah's reward",
    subtitle: "Al-Jannah description",
    verseRange: "25",
    color: "rose",
    verses: [25],
  },
  {
    id: "parable",
    letter: "B",
    title: "Representing a parable",
    subtitle: "Representing parables",
    verseRange: "26",
    color: "amber",
    verses: [26],
  },
  {
    id: "fasiq",
    letter: "C",
    title: "Al-Fāsiqūn",
    subtitle: "Al-Fāsiq attributes",
    verseRange: "27",
    color: "teal",
    verses: [27],
  },
  {
    id: "tawhid",
    letter: "D",
    title: "Oneness of Allah",
    subtitle: "Evidences for tawḥīd",
    verseRange: "28–29",
    color: "green",
    subTopics: [
      { label: "Creation of mankind", verses: "28" },
      { label: "Creation of earth & sky", verses: "29" },
    ],
    verses: [28, 29],
  },
];

export function PageFiveTopicsMap() {
  return (
    <div className="baqarah-chart baqarah-chart--page5-map">
      <ChartBanner title="Topics Map (Page 5)" />
      <div className="baqarah-page5-map__grid">
        {PAGE5_TOPIC_BRANCHES.map((branch) => (
          <article
            key={branch.id}
            className={[
              "baqarah-page5-map__card",
              `baqarah-page5-map__card--${branch.color}`,
            ].join(" ")}
          >
            <header className="baqarah-page5-map__head">
              <span className="baqarah-page5-map__letter">{branch.letter}</span>
              <div className="baqarah-page5-map__titles">
                <h4 className="baqarah-page5-map__title">{branch.title}</h4>
                {branch.subtitle && (
                  <p className="baqarah-page5-map__subtitle">{branch.subtitle}</p>
                )}
              </div>
            </header>
            {branch.subTopics?.length > 0 && (
              <ul className="baqarah-page5-map__subtopics">
                {branch.subTopics.map((item) => (
                  <li key={item.label}>
                    <span>{item.label}</span>
                    <span className="baqarah-page5-map__sub-verses">v. {item.verses}</span>
                  </li>
                ))}
              </ul>
            )}
            <footer className="baqarah-page5-map__foot">
              <span>Verses ({branch.verseRange})</span>
              <div className="baqarah-page5-map__pills">
                {branch.verses.map((verse) => (
                  <span key={verse} className="baqarah-page5-map__pill">{verse}</span>
                ))}
              </div>
            </footer>
          </article>
        ))}
      </div>
      <div className="baqarah-page5-map__strip" aria-label="Verse coverage on this mushaf page">
        {PAGE5_TOPIC_BRANCHES.map((branch) => (
          <div
            key={branch.id}
            className={[
              "baqarah-page5-map__strip-seg",
              `baqarah-page5-map__strip-seg--${branch.color}`,
            ].join(" ")}
            style={{ flexGrow: branch.verses.length }}
            title={`${branch.letter} · ${branch.title}`}
          >
            <span>{branch.letter}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function RejectersConsequenceFlow() {
  return (
    <div className="baqarah-chart baqarah-chart--consequence">
      <div className="baqarah-consequence-flow">
        <aside className="baqarah-consequence-flow__side baqarah-consequence-flow__side--left">
          <div className="baqarah-consequence-flow__verse-box" dir="rtl">
            مَنْ عَمِلَ صَالِحًا فَلِنَفْسِهِۦ وَمَنْ أَسَاءَ فَعَلَيْهَا ۗ وَمَا رَبُّكَ بِظَلَّامٍ لِّلْعَبِيدِ
          </div>
          <span className="baqarah-consequence-flow__cite">Fussilat · āyah 46</span>
        </aside>

        <div className="baqarah-consequence-flow__main">
          <div className="baqarah-consequence-flow__step baqarah-consequence-flow__step--book" dir="rtl">
            الكتاب
          </div>
          <span className="baqarah-consequence-flow__arrow" aria-hidden="true">↓</span>
          <div className="baqarah-consequence-flow__step baqarah-consequence-flow__step--guidance" dir="rtl">
            هدى
          </div>
          <div className="baqarah-consequence-flow__cut">
            <span className="baqarah-consequence-flow__cut-label">Consequence</span>
            <span className="baqarah-consequence-flow__cut-icon" aria-hidden="true">
              <span className="baqarah-consequence-flow__scissors">✂</span>
              <span className="baqarah-consequence-flow__x">✕</span>
            </span>
          </div>
          <span className="baqarah-consequence-flow__arrow baqarah-consequence-flow__arrow--green" aria-hidden="true">
            ↓
          </span>
          <div className="baqarah-consequence-flow__senses" aria-hidden="true">
            <span title="Sight">👁</span>
            <span title="Hearing">👂</span>
            <span title="Heart">❤️</span>
          </div>
          <div
            className="baqarah-consequence-flow__step baqarah-consequence-flow__step--seal"
            dir="rtl"
          >
            ختم/غشاوة
          </div>
          <span className="baqarah-consequence-flow__arrow" aria-hidden="true">↓</span>
          <div className="baqarah-consequence-flow__step baqarah-consequence-flow__step--kufr" dir="rtl">
            كفر
          </div>
        </div>

        <aside className="baqarah-consequence-flow__side baqarah-consequence-flow__side--right">
          <div className="baqarah-consequence-flow__verse-box" dir="rtl">
            لَا إِكْرَاهَ فِى ٱلدِّينِ
          </div>
          <span className="baqarah-consequence-flow__cite">Al-Baqarah · āyah 256</span>
          <span className="baqarah-consequence-flow__cut-label baqarah-consequence-flow__cut-label--side">
            Consequence
          </span>
        </aside>
      </div>
    </div>
  );
}

const STORM_PARABLE_STEPS = [
  {
    n: 1,
    ar: "أَوْ كَصَيِّبٍ مِّنَ ٱلسَّمَآءِ",
    en: "Abundant rain from the sky",
    icon: "🌧️",
  },
  {
    n: 2,
    ar: "فِيهِ ظُلُمَـٰتٌ وَرَعْدٌ وَبَرْقٌ",
    en: "Darkness, thunder & lightning",
    icon: "⚡",
  },
  {
    n: 3,
    ar: "يَجْعَلُونَ أَصَـٰبِعَهُمْ فِىٓ ءَاذَانِهِم",
    en: "Fingers in their ears",
    icon: "👂",
  },
  {
    n: 4,
    ar: "مِّنَ ٱلصَّوَٰعِقِ حَذَرَ ٱلْمَوْتِ",
    en: "Dread of the thunderclaps",
    icon: "☠️",
  },
];

export function StormParableChart() {
  return (
    <div className="baqarah-chart baqarah-chart--storm">
      <ChartBanner title="Verse 19 — the rainstorm parable" />
      <div className="baqarah-storm-chart__grid">
        {STORM_PARABLE_STEPS.map((step) => (
          <article key={step.n} className="baqarah-storm-chart__step">
            <span className="baqarah-storm-chart__num">{step.n}</span>
            <span className="baqarah-storm-chart__icon" aria-hidden="true">{step.icon}</span>
            <p className="baqarah-storm-chart__ar" dir="rtl">{step.ar}</p>
            <p className="baqarah-storm-chart__en">{step.en}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

export function EncompassingChart() {
  return (
    <div className="baqarah-chart baqarah-chart--encompassing">
      <div className="baqarah-encompassing__visual" aria-hidden="true">
        <span className="baqarah-encompassing__arrow baqarah-encompassing__arrow--top">↓</span>
        <span className="baqarah-encompassing__arrow baqarah-encompassing__arrow--bottom">↑</span>
        <span className="baqarah-encompassing__arrow baqarah-encompassing__arrow--left">→</span>
        <span className="baqarah-encompassing__arrow baqarah-encompassing__arrow--right">←</span>
        <div className="baqarah-encompassing__figures">
          <span>👤</span>
          <span>👤</span>
          <span>👤</span>
        </div>
      </div>
      <p className="baqarah-encompassing__ar" dir="rtl">وَٱللَّهُ مُحِيطٌۢ بِٱلْكَـٰفِرِينَ</p>
      <p className="baqarah-encompassing__en">Allah encompasses the disbelievers — no escape from any side.</p>
    </div>
  );
}

const JANNAH_FEATURES = [
  { n: 1, ar: "ٱلْأَنْهَـٰرُ", en: "Rivers flowing beneath", note: "Purity & vitality", icon: "💧", tone: "teal" },
  { n: 2, ar: "ثَمَرَةٍ مُتَشَـٰبِهًا", en: "Fruit in resemblance", note: "Same form, renewed joy", icon: "🍎", tone: "amber" },
  { n: 3, ar: "أَزْوَٰجٌ مُّطَهَّرَةٌ", en: "Purified spouses", note: "Physically & psychologically pure", icon: "💑", tone: "rose" },
  { n: 4, ar: "خَـٰلِدُونَ", en: "Abiding forever", note: "Complete security", icon: "∞", tone: "green" },
];

export function JannahFeaturesChart() {
  return (
    <div className="baqarah-chart baqarah-chart--jannah-features">
      <ChartBanner title="The description of Paradise" />
      <ol className="baqarah-jannah-features__list">
        {JANNAH_FEATURES.map((item) => (
          <li
            key={item.n}
            className={[
              "baqarah-jannah-features__item",
              `baqarah-jannah-features__item--${item.tone}`,
            ].join(" ")}
          >
            <div className="baqarah-jannah-features__badge" aria-hidden="true">
              <span className="baqarah-jannah-features__num">{item.n}</span>
              <span className="baqarah-jannah-features__icon">{item.icon}</span>
            </div>
            <div className="baqarah-jannah-features__body">
              <p className="baqarah-jannah-features__ar" dir="rtl">{item.ar}</p>
              <p className="baqarah-jannah-features__en">{item.en}</p>
              {item.note && <p className="baqarah-jannah-features__note">{item.note}</p>}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function JannahEquationChart() {
  return (
    <div className="baqarah-chart baqarah-chart--jannah-equation">
      <div className="baqarah-jannah-equation__row" dir="rtl">
        <span className="baqarah-jannah-equation__term baqarah-jannah-equation__term--accent">وَبَشِّرِ</span>
        <span className="baqarah-jannah-equation__plus">+</span>
        <span className="baqarah-jannah-equation__term">ٱلَّذِينَ ءَامَنُوا۟ وَعَمِلُوا۟ ٱلصَّـٰلِحَـٰتِ</span>
        <span className="baqarah-jannah-equation__eq">=</span>
        <span className="baqarah-jannah-equation__term baqarah-jannah-equation__term--reward">جَنَّـٰتٍ</span>
      </div>
      <p className="baqarah-jannah-equation__caption">
        Glad tidings to those who believe and do good → gardens of Paradise
      </p>
    </div>
  );
}

const JANNAH_WORD_NOTES = [
  { ar: "وَبَشِّرِ", gloss: "Give glad tidings", note: "Addressed to the Prophet ﷺ", icon: "🎁" },
  { ar: "ٱلصَّـٰلِحَـٰتِ", gloss: "Righteous deeds", note: "Honouring them", icon: "✨" },
  { ar: "جَنَّـٰتٍ", gloss: "Gardens", note: "Without ال — plural", icon: "🌳" },
  { ar: "تَجْرِى", gloss: "Flow", note: "Purity / vitality", icon: "💧" },
  { ar: "مُتَشَـٰبِهًا", gloss: "In resemblance", note: "To maximise their joy", icon: "🍎" },
  { ar: "مُّطَهَّرَةٌ", gloss: "Purified", note: "Physically / psychologically", icon: "💑" },
  { ar: "خَـٰلِدُونَ", gloss: "Abiding forever", note: "Security", icon: "∞" },
];

export function JannahWordBreakdownChart() {
  return (
    <div className="baqarah-chart baqarah-chart--jannah-words">
      <ChartBanner title="Verse 25 — key words" />
      <div className="baqarah-jannah-words__grid">
        {JANNAH_WORD_NOTES.map((item) => (
          <article key={item.ar} className="baqarah-jannah-words__card">
            <span className="baqarah-jannah-words__icon" aria-hidden="true">{item.icon}</span>
            <p className="baqarah-jannah-words__ar" dir="rtl">{item.ar}</p>
            <p className="baqarah-jannah-words__gloss">{item.gloss}</p>
            <p className="baqarah-jannah-words__note">{item.note}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

export function FearHopeBalanceChart() {
  return (
    <div className="baqarah-chart baqarah-chart--fear-hope">
      <ChartBanner title="The balance of fear and hope" />
      <div className="baqarah-fear-hope__scale" aria-hidden="true">
        <div className="baqarah-fear-hope__beam" />
        <div className="baqarah-fear-hope__pan baqarah-fear-hope__pan--left">
          <span>Fear</span>
        </div>
        <div className="baqarah-fear-hope__pan baqarah-fear-hope__pan--right">
          <span>Hope</span>
        </div>
        <div className="baqarah-fear-hope__pillar" />
      </div>
      <div className="baqarah-fear-hope__compare">
        <article className="baqarah-fear-hope__side baqarah-fear-hope__side--fear">
          <p className="baqarah-fear-hope__label">Hopeless</p>
          <p className="baqarah-fear-hope__formula">Fear &gt; Hope</p>
          <p className="baqarah-fear-hope__outcome">Desperate</p>
        </article>
        <article className="baqarah-fear-hope__side baqarah-fear-hope__side--hope">
          <p className="baqarah-fear-hope__label">Hopeful</p>
          <p className="baqarah-fear-hope__formula">Hope &gt; Fear</p>
          <p className="baqarah-fear-hope__outcome">Wishes only</p>
        </article>
      </div>
      <p className="baqarah-fear-hope__balance-note">
        The believer balances both — page 4 warns with fear; page 5 opens with hope.
      </p>
    </div>
  );
}

export function MosquitoParableChart() {
  return (
    <div className="baqarah-chart baqarah-chart--mosquito-parable">
      <ChartBanner title="The Mosquito Parable (Verse 26)" />
      <div className="baqarah-mosquito-parable__center">
        <span className="baqarah-mosquito-parable__icon" aria-hidden="true">🦟</span>
        <p className="baqarah-mosquito-parable__center-ar" dir="rtl">مَّا بَعُوضَةً فَمَا فَوْقَهَا</p>
      </div>
      <div className="baqarah-mosquito-parable__branches">
        <article className="baqarah-mosquito-parable__branch baqarah-mosquito-parable__branch--reject">
          <span className="baqarah-mosquito-parable__figure" aria-hidden="true">👤</span>
          <p className="baqarah-mosquito-parable__label" dir="rtl">ٱلَّذِينَ كَفَرُوا۟</p>
          <p className="baqarah-mosquito-parable__action" dir="rtl">فَيَقُولُونَ</p>
          <div className="baqarah-mosquito-parable__bubble baqarah-mosquito-parable__bubble--reject" dir="rtl">
            مَاذَآ أَرَادَ ٱللَّهُ بِهَـٰذَا مَثَلًا
          </div>
        </article>
        <div className="baqarah-mosquito-parable__middle">
          <p className="baqarah-mosquito-parable__effect baqarah-mosquito-parable__effect--reject" dir="rtl">
            يُضِلُّ بِهِۦ كَثِيرًا
          </p>
          <p className="baqarah-mosquito-parable__effect baqarah-mosquito-parable__effect--guide" dir="rtl">
            وَيَهْدِى بِهِۦ كَثِيرًا
          </p>
        </div>
        <article className="baqarah-mosquito-parable__branch baqarah-mosquito-parable__branch--believe">
          <span className="baqarah-mosquito-parable__figure" aria-hidden="true">👤</span>
          <p className="baqarah-mosquito-parable__label" dir="rtl">ٱلَّذِينَ ءَامَنُوا۟</p>
          <p className="baqarah-mosquito-parable__action" dir="rtl">فَيَعْلَمُونَ</p>
          <div className="baqarah-mosquito-parable__bubble baqarah-mosquito-parable__bubble--believe" dir="rtl">
            أَنَّهُ ٱلْحَقُّ مِن رَّبِّهِمْ
            <span className="baqarah-mosquito-parable__mushaf" aria-hidden="true">📗</span>
          </div>
        </article>
      </div>
      <div className="baqarah-mosquito-parable__footer" dir="rtl">
        وَمَا يُضِلُّ بِهِۦٓ إِلَّا ٱلْفَـٰسِقِينَ
      </div>
    </div>
  );
}

const REVELATION_CONTEXT_PARABLES = [
  {
    id: "fly",
    icon: "🪰",
    label: "Fly",
    cite: "Al-Ḥajj · 22:73",
    ar: "يَـٰٓأَيُّهَا ٱلنَّاسُ ضُرِبَ مَثَلٌ فَٱسْتَمِعُوا۟ لَهُۥٓ ۚ إِنَّ ٱلَّذِينَ تَدْعُونَ مِن دُونِ ٱللَّهِ لَن يَخْلُقُوا۟ ذُبَابًا وَلَوِ ٱجْتَمَعُوا۟ لَهُۥ ۖ وَإِن يَسْلُبْهُمُ ٱلذُّبَابُ شَيْـًٔا لَّا يَسْتَنقِذُوهُ مِنْهُ ۚ ضَعُفَ ٱلطَّالِبُ وَٱلْمَطْلُوبُ",
    en: "O people, an example is presented — those you invoke besides Allah cannot create a fly, even if they gathered for it. And if the fly should steal from them a tiny thing, they could not recover it. Weak are the pursuer and pursued.",
  },
  {
    id: "spider",
    icon: "🕷️",
    label: "Spider",
    cite: "Al-ʿAnkabūt · 29:41",
    ar: "مَثَلُ ٱلَّذِينَ ٱتَّخَذُوا۟ مِن دُونِ ٱللَّهِ أَوْلِيَآءَ كَمَثَلِ ٱلْعَنكَبُوتِ ٱتَّخَذَتْ بَيْتًا ۖ وَإِنَّ أَوْهَنَ ٱلْبُيُوتِ لَبَيْتُ ٱلْعَنكَبُوتِ ۖ لَوْ كَانُوا۟ يَعْلَمُونَ",
    en: "The example of those who take allies other than Allah is like the spider who takes a home — and indeed, the weakest of homes is the spider's home, if they only knew.",
  },
];

export function RevelationContextChart() {
  return (
    <div className="baqarah-chart baqarah-chart--revelation-context">
      <ChartBanner title="Cause of revelation — prior parables" />
      <div className="baqarah-revelation-context__grid">
        {REVELATION_CONTEXT_PARABLES.map((item) => (
          <article key={item.id} className="baqarah-revelation-context__card">
            <div className="baqarah-revelation-context__head">
              <span className="baqarah-revelation-context__icon" aria-hidden="true">{item.icon}</span>
              <span className="baqarah-revelation-context__label">{item.label}</span>
            </div>
            <p className="baqarah-revelation-context__ar" dir="rtl">{item.ar}</p>
            <p className="baqarah-revelation-context__en">{item.en}</p>
            <cite className="baqarah-revelation-context__cite">{item.cite}</cite>
          </article>
        ))}
      </div>
    </div>
  );
}

export function FasiqConceptChart({ datesImage = "/images/baqarah-guide/photos/fruits/dates.jpg" }) {
  return (
    <div className="baqarah-chart baqarah-chart--fasiq">
      <ChartBanner title="Al-Fāsiqūn — who chose not to be obedient" />
      <div className="baqarah-fasiq__grid">
        <article className="baqarah-fasiq__panel baqarah-fasiq__panel--reject">
          <p className="baqarah-fasiq__ar" dir="rtl">وَأَمَّا ٱلَّذِينَ كَفَرُوا۟ فَيَقُولُونَ مَاذَآ أَرَادَ ٱللَّهُ بِهَـٰذَا مَثَلًا</p>
          <p className="baqarah-fasiq__groups">The Jews · The polytheists · The hypocrites</p>
          <div className="baqarah-fasiq__outcomes">
            <div className="baqarah-fasiq__book" aria-hidden="true">
              <span>📖</span>
              <span className="baqarah-fasiq__mark baqarah-fasiq__mark--yes">✓</span>
              <span className="baqarah-fasiq__mark baqarah-fasiq__mark--no">✕</span>
            </div>
            <p className="baqarah-fasiq__effect baqarah-fasiq__effect--guide">يُهْدِى بِهِۦ كَثِيرًا</p>
            <p className="baqarah-fasiq__effect baqarah-fasiq__effect--reject">يُضِلُّ بِهِۦ كَثِيرًا — <em>Misguided</em></p>
          </div>
        </article>
        <article className="baqarah-fasiq__panel baqarah-fasiq__panel--fasiq">
          <p className="baqarah-fasiq__ar" dir="rtl">وَمَا يُضِلُّ بِهِۦٓ إِلَّا ٱلْفَـٰسِقِينَ</p>
          <p className="baqarah-fasiq__meaning">Who chose not to be obedient</p>
          <div className="baqarah-fasiq__etymology">
            <figure className="baqarah-fasiq__dates">
              <img src={datesImage} alt="Dates — illustration for فسقت التمرة" loading="lazy" />
              <figcaption dir="rtl">فسقت التمرة</figcaption>
            </figure>
            <p className="baqarah-fasiq__note"><em>Mousehole</em> — emerging from obedience / the shell</p>
          </div>
          <div className="baqarah-fasiq__book baqarah-fasiq__book--reject-only" aria-hidden="true">
            <span>📖</span>
            <span className="baqarah-fasiq__mark baqarah-fasiq__mark--no">✕</span>
            <span className="baqarah-fasiq__mark baqarah-fasiq__mark--no">✕</span>
          </div>
        </article>
      </div>
    </div>
  );
}

const COVENANT_BREAK_STEPS = [
  {
    n: 1,
    ar: "ٱلَّذِينَ يَنقُضُونَ عَهْدَ ٱللَّهِ مِنۢ بَعْدِ مِيثَـٰقِهِۦ",
    icon: "📜",
    label: "Covenant",
    note: "Untie — after a firm pledge (مِيثَاق)",
    accent: "يَنقُضُونَ",
  },
  {
    n: 2,
    ar: "وَيَقْطَعُونَ مَآ أَمَرَ ٱللَّهُ بِهِۦٓ أَن يُوصَلَ",
    icon: "✂️",
    label: "Kinship ties",
    note: "Join the believers in worshipping Allah — faith, the believers, and obedience to Allah",
    accent: "يَقْطَعُونَ",
  },
  {
    n: 3,
    ar: "وَيُفْسِدُونَ فِى ٱلْأَرْضِ",
    icon: "🌍",
    label: "Corruption",
    note: "Opposite of their purpose of creation — worshipping others than Allah",
    accent: "يُفْسِدُونَ",
  },
  {
    n: 4,
    ar: "أُو۟لَـٰٓئِكَ هُمُ ٱلْخَـٰسِرُونَ",
    icon: "👎",
    label: "Losers",
    note: "They are the true losers",
    accent: "ٱلْخَـٰسِرُونَ",
  },
];

export function CovenantBreakChart() {
  return (
    <div className="baqarah-chart baqarah-chart--covenant-break">
      <ChartBanner title="Al-Fāsiq attributes (Verse 27)" />
      <ol className="baqarah-covenant-break__list">
        {COVENANT_BREAK_STEPS.map((step) => (
          <li key={step.n} className="baqarah-covenant-break__item">
            <span className="baqarah-covenant-break__num">{step.n}</span>
            <span className="baqarah-covenant-break__icon" aria-hidden="true">{step.icon}</span>
            <div className="baqarah-covenant-break__body">
              <p className="baqarah-covenant-break__ar" dir="rtl">{step.ar}</p>
              <p className="baqarah-covenant-break__label">{step.label}</p>
              <p className="baqarah-covenant-break__note">{step.note}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

const PAGE6_TOPIC_BRANCHES = [
  {
    id: "adam",
    letter: "A",
    title: "Ādam's creation & authority",
    subtitle: "The story of Adam's creation & the successive authority of mankind on earth",
    verseRange: "30–35",
    color: "rose",
    verses: [30, 31, 32, 33, 34, 35],
  },
  {
    id: "descent",
    letter: "B",
    title: "Descent to earth",
    subtitle: "The descending of Adam, Hawwāʾ & Shayṭān on earth",
    verseRange: "36–37",
    color: "green",
    verses: [36, 37],
  },
];

export function PageSixTopicsMap() {
  return (
    <div className="baqarah-chart baqarah-chart--page6-map">
      <ChartBanner title="Topics Map (Page 6)" />
      <div className="baqarah-page6-map__grid">
        {PAGE6_TOPIC_BRANCHES.map((branch) => (
          <article
            key={branch.id}
            className={[
              "baqarah-page6-map__card",
              `baqarah-page6-map__card--${branch.color}`,
            ].join(" ")}
          >
            <header className="baqarah-page6-map__head">
              <span className="baqarah-page6-map__letter">{branch.letter}</span>
              <div className="baqarah-page6-map__titles">
                <h4 className="baqarah-page6-map__title">{branch.title}</h4>
                <p className="baqarah-page6-map__subtitle">{branch.subtitle}</p>
              </div>
            </header>
            <footer className="baqarah-page6-map__foot">
              <span>Verses ({branch.verseRange})</span>
              <div className="baqarah-page6-map__pills">
                {branch.verses.map((verse) => (
                  <span key={verse} className="baqarah-page6-map__pill">{verse}</span>
                ))}
              </div>
            </footer>
          </article>
        ))}
      </div>
      <div className="baqarah-page6-map__strip" aria-label="Verse coverage on this mushaf page">
        {PAGE6_TOPIC_BRANCHES.map((branch) => (
          <div
            key={branch.id}
            className={[
              "baqarah-page6-map__strip-seg",
              `baqarah-page6-map__strip-seg--${branch.color}`,
            ].join(" ")}
            style={{ flexGrow: branch.verses.length }}
            title={`${branch.letter} · ${branch.title}`}
          >
            <span>{branch.letter}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const VERSE30_OPENING_WORDS = [
  { ar: "وَ", en: "And" },
  { ar: "إِذْ", en: "Time adverb = when" },
  {
    ar: "اذْكُرْ",
    en: "Omitted",
    omitted: true,
    points: [
      "1 — omitted",
      "2 — mention / tell when Allah told the angels",
      "3 — Arabic is informative with few words (مَا قَلَّ وَدَلَّ)",
    ],
  },
  { ar: "رَبُّكَ", en: "O Muḥammad", sub: "يَا مُحَمَّد" },
  {
    ar: "خَلِيفَةً",
    en: "Successor / khalīfah",
    khalifah: true,
    refers: "Human being (creation)",
    means: ["Someone who proceeded", "Someone who comes after another"],
  },
];

export function Verse30OpeningChart() {
  return (
    <div className="baqarah-chart baqarah-chart--v30-opening">
      <ChartBanner title="Verse 30 — opening phrase" />
      <p className="baqarah-v30-opening__verse" dir="rtl">
        وَإِذْ قَالَ رَبُّكَ لِلْمَلَائِكَةِ إِنِّي جَاعِلٌ فِي الْأَرْضِ خَلِيفَةً
      </p>
      <div className="baqarah-v30-opening__grid">
        {VERSE30_OPENING_WORDS.map((word) => (
          <div
            key={word.ar}
            className={[
              "baqarah-v30-opening__col",
              word.omitted && "baqarah-v30-opening__col--omitted",
              word.khalifah && "baqarah-v30-opening__col--khalifah",
            ].filter(Boolean).join(" ")}
          >
            <div className="baqarah-v30-opening__word" dir="rtl">{word.ar}</div>
            <span className="baqarah-v30-opening__arrow" aria-hidden="true">↓</span>
            <div className="baqarah-v30-opening__note">
              <p>{word.en}</p>
              {word.sub && <p className="baqarah-v30-opening__sub" dir="rtl">{word.sub}</p>}
              {word.points?.map((pt) => <p key={pt}>{pt}</p>)}
              {word.refers && (
                <div className="baqarah-v30-opening__khalifah-box">
                  <span className="baqarah-v30-opening__k-label">1 — Refers to</span>
                  <p>{word.refers}</p>
                </div>
              )}
              {word.means && (
                <div className="baqarah-v30-opening__khalifah-box">
                  <span className="baqarah-v30-opening__k-label">2 — Means</span>
                  <ul>
                    {word.means.map((m) => <li key={m}>{m}</li>)}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function KhalifahChart() {
  return (
    <div className="baqarah-chart baqarah-chart--khalifah">
      <ChartBanner title="Khalīfah" />
      <div className="baqarah-khalifah__root" dir="rtl">خَلِيفَةً</div>
      <div className="baqarah-khalifah__fork" aria-hidden="true">
        <svg viewBox="0 0 320 48" preserveAspectRatio="xMidYMid meet">
          <path d="M160 4 L160 20 M160 20 L56 44 M160 20 L264 44" fill="none" stroke="#dc2626" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </div>
      <div className="baqarah-khalifah__branches">
        <article className="baqarah-khalifah__branch">
          <span className="baqarah-khalifah__num">1</span>
          <p className="baqarah-khalifah__head">Generations after generations <em>(Ibn Kathīr)</em></p>
          <span className="baqarah-khalifah__arrow" aria-hidden="true">↓</span>
          <ol className="baqarah-khalifah__list">
            <li>In authority</li>
            <li>Prophets</li>
            <li>Children</li>
          </ol>
        </article>
        <article className="baqarah-khalifah__branch">
          <span className="baqarah-khalifah__num">2</span>
          <p className="baqarah-khalifah__head">To have successive authority</p>
          <span className="baqarah-khalifah__arrow" aria-hidden="true">↓</span>
          <div className="baqarah-khalifah__verse" dir="rtl">
            يَا دَاوُودُ إِنَّا جَعَلْنَاكَ خَلِيفَةً فِي الْأَرْضِ فَاحْكُم بَيْنَ النَّاسِ بِالْحَقِّ
            <cite>Ṣād · 26</cite>
          </div>
          <span className="baqarah-khalifah__arrow" aria-hidden="true">↓</span>
          <p className="baqarah-khalifah__en">
            [We said], &ldquo;O David, indeed We have made you a successor upon the earth, so judge between the people in truth&hellip;&rdquo;
          </p>
        </article>
      </div>
    </div>
  );
}

export function AngelsObjectionChart() {
  return (
    <div className="baqarah-chart baqarah-chart--angels-objection">
      <ChartBanner title="Verse 30 — the angels' objection" />
      <p className="baqarah-angels-objection__verse" dir="rtl">
        قَالُوا أَتَجْعَلُ فِيهَا مَن يُفْسِدُ فِيهَا وَيَسْفِكُ الدِّمَاءَ
      </p>
      <div className="baqarah-angels-objection__cols">
        <div className="baqarah-angels-objection__col">
          <p className="baqarah-angels-objection__word" dir="rtl">قَالُوا</p>
          <span className="baqarah-angels-objection__arrow" aria-hidden="true">↓</span>
          <p className="baqarah-angels-objection__note"><u>The Angels</u></p>
        </div>
        <div className="baqarah-angels-objection__col">
          <p className="baqarah-angels-objection__word" dir="rtl">مَن يُفْسِدُ فِيهَا</p>
          <span className="baqarah-angels-objection__arrow" aria-hidden="true">↓</span>
          <p className="baqarah-angels-objection__note"><u>By disbelief (كُفْر) &amp; disobedience to Allah</u></p>
          <span className="baqarah-angels-objection__arrow" aria-hidden="true">↓</span>
          <p className="baqarah-angels-objection__note"><u>That is the cause of corruption on earth</u></p>
          <span className="baqarah-angels-objection__arrow" aria-hidden="true">↓</span>
          <p className="baqarah-angels-objection__note">
            <u>Which leads to injustice, animosity &amp; violence between people</u>
          </p>
        </div>
        <div className="baqarah-angels-objection__col">
          <p className="baqarah-angels-objection__word" dir="rtl">وَيَسْفِكُ الدِّمَاءَ</p>
          <span className="baqarah-angels-objection__arrow" aria-hidden="true">↓</span>
          <p className="baqarah-angels-objection__note"><u>Sheds blood</u></p>
          <span className="baqarah-angels-objection__arrow" aria-hidden="true">↓</span>
          <p className="baqarah-angels-objection__note">
            <u>Refers to the act of killing — which resulted from corruption on earth</u>
          </p>
        </div>
      </div>
    </div>
  );
}

const GLORIFICATION_WORDS = [
  { n: 1, ar: "نُسَبِّحُ", en: "Glorify", def: "Denying anything that might decrease Allah's perfection." },
  { n: 2, ar: "بِحَمْدِكَ", en: "Praise", def: "Proving & confirming perfection to Allah." },
  { n: 3, ar: "وَنُقَدِّسُ", en: "Sanctify", def: "Same as تَسْبِيح — but even more, to the extent of purifying their belief from anything that would decrease Allah's perfection." },
];

export function AngelsGlorificationChart() {
  return (
    <div className="baqarah-chart baqarah-chart--angels-glorify">
      <ChartBanner title="Verse 30 — glorifying Allah" />
      <p className="baqarah-angels-glorify__verse" dir="rtl">
        وَنَحْنُ نُسَبِّحُ بِحَمْدِكَ وَنُقَدِّسُ لَكَ
      </p>
      <div className="baqarah-angels-glorify__words">
        {GLORIFICATION_WORDS.map((w) => (
          <div key={w.ar} className="baqarah-angels-glorify__word-col">
            <p dir="rtl">{w.ar}</p>
            <span aria-hidden="true">↓</span>
            <p><span className="baqarah-angels-glorify__num">{w.n}</span> {w.en}</p>
          </div>
        ))}
        <div className="baqarah-angels-glorify__word-col baqarah-angels-glorify__word-col--laka">
          <p dir="rtl">لَكَ</p>
          <span aria-hidden="true">↓</span>
          <ol>
            <li>They believe that Allah alone deserves to be praised.</li>
            <li>Sincerity &amp; loyalty only to Allah.</li>
          </ol>
        </div>
      </div>
      <div className="baqarah-angels-glorify__hub">
        <p className="baqarah-angels-glorify__hub-title">To praise Allah with</p>
        <div className="baqarah-angels-glorify__defs">
          {GLORIFICATION_WORDS.map((w) => (
            <article key={w.n}>
              <span className="baqarah-angels-glorify__num">{w.n}</span>
              <strong>{w.en}:</strong> {w.def}
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

const ALLAH_RESPONSE_POINTS = [
  "Allah has perfect, complete, unlimited knowledge (عِلْم).",
  "Allah alone knows the wisdom behind creating Ādam & mankind.",
  "Allah is defending mankind from the very beginning of their existence — which shows Allah's love and mercy. Although Allah knows what men will do on earth from corruption and disobedience to Him, yet Allah honoured mankind in front of all the angels.",
  "Among mankind there will be prophets & pious men.",
];

export function Verse30AllahResponseChart() {
  return (
    <div className="baqarah-chart baqarah-chart--v30-response">
      <ChartBanner title="Verse 30 — Allah's reply" />
      <p className="baqarah-v30-response__verse" dir="rtl">
        قَالَ إِنِّي أَعْلَمُ مَا لَا تَعْلَمُونَ
      </p>
      <ol className="baqarah-v30-response__points">
        {ALLAH_RESPONSE_POINTS.map((pt, i) => (
          <li
            key={pt}
            className={(i === 1 || i === 3) ? "baqarah-v30-response__point--accent" : ""}
          >
            {pt}
          </li>
        ))}
      </ol>
    </div>
  );
}

const VERSE30_SPEAKERS = [
  {
    n: 1,
    speaker: "Allah",
    color: "brown",
    ar: "وَإِذْ قَالَ رَبُّكَ لِلْمَلَائِكَةِ إِنِّي جَاعِلٌ فِي الْأَرْضِ خَلِيفَةً",
    highlights: [
      { word: "وَإِذْ", style: "outline" },
      { word: "قَالَ", style: "blue" },
    ],
  },
  {
    n: 2,
    speaker: "The Angels",
    color: "green",
    ar: "قَالُوا أَتَجْعَلُ فِيهَا مَن يُفْسِدُ فِيهَا وَيَسْفِكُ الدِّمَاءَ وَنَحْنُ نُسَبِّحُ بِحَمْدِكَ وَنُقَدِّسُ لَكَ",
    highlights: [{ word: "قَالُوا", style: "purple" }],
  },
  {
    n: 3,
    speaker: "Allah",
    color: "brown",
    ar: "قَالَ إِنِّي أَعْلَمُ مَا لَا تَعْلَمُونَ",
    highlights: [{ word: "قَالَ", style: "blue" }],
  },
];

export function Verse30SpeakersChart() {
  return (
    <div className="baqarah-chart baqarah-chart--v30-speakers">
      <ChartBanner title="Verse 30 — who is speaking?" />
      <div className="baqarah-v30-speakers__list">
        {VERSE30_SPEAKERS.map((row) => (
          <div key={row.n} className="baqarah-v30-speakers__row">
            <div className="baqarah-v30-speakers__text" dir="rtl">
              {row.ar}
            </div>
            <span className={`baqarah-v30-speakers__label baqarah-v30-speakers__label--${row.color}`}>
              {row.n} — {row.speaker}
            </span>
          </div>
        ))}
      </div>
      <p className="baqarah-v30-speakers__legend">
        <span className="baqarah-v30-speakers__swatch baqarah-v30-speakers__swatch--blue" /> Allah&apos;s speech
        <span className="baqarah-v30-speakers__swatch baqarah-v30-speakers__swatch--purple" /> The angels&apos; speech
      </p>
    </div>
  );
}

export function Verse32AnalysisChart() {
  return (
    <div className="baqarah-chart baqarah-chart--v32-analysis">
      <ChartBanner title="Verse 32 — word analysis" />
      <p className="baqarah-v32-analysis__verse" dir="rtl">
        قَالُوا سُبْحَانَكَ لَا عِلْمَ لَنَا إِلَّا مَا عَلَّمْتَنَا إِنَّكَ أَنْتَ الْعَلِيمُ الْحَكِيمُ
      </p>
      <div className="baqarah-v32-analysis__grid">
        <article>
          <p className="baqarah-v32-analysis__ar" dir="rtl">سُبْحَانَكَ</p>
          <span aria-hidden="true">↓</span>
          <div className="baqarah-v32-analysis__note">
            <p><em>Subḥān</em> — something which stays constantly in its place.</p>
            <p><em>Sabaha</em> = he is floating; when a swimmer floats without drowning = to constantly remain in place.</p>
            <p>So the angels said: &ldquo;You are constantly (always) perfect.&rdquo;</p>
          </div>
        </article>
        <article>
          <p className="baqarah-v32-analysis__ar" dir="rtl">لَا عِلْمَ لَنَا إِلَّا مَا عَلَّمْتَنَا</p>
          <span aria-hidden="true">↓</span>
          <p className="baqarah-v32-analysis__tag">Exceptive particle</p>
          <p className="baqarah-v32-analysis__note baqarah-v32-analysis__note--accent">
            We have absolutely no knowledge except what You have taught us.
          </p>
        </article>
        <article>
          <p className="baqarah-v32-analysis__ar" dir="rtl">إِنَّكَ أَنْتَ</p>
          <span aria-hidden="true">↓</span>
          <p className="baqarah-v32-analysis__tag">Confirming</p>
          <table className="baqarah-v32-analysis__table">
            <tbody>
              <tr><td>To confirm</td><td dir="rtl">إِنَّ</td></tr>
              <tr><td>Allah</td><td dir="rtl">كَ</td></tr>
              <tr><td>Allah</td><td dir="rtl">أَنْتَ</td></tr>
            </tbody>
          </table>
          <p className="baqarah-v32-analysis__note">&ldquo;Indeed You, Allah, who&hellip;&rdquo;</p>
        </article>
        <article>
          <p className="baqarah-v32-analysis__ar" dir="rtl">الْعَلِيمُ</p>
          <span aria-hidden="true">↓</span>
          <p className="baqarah-v32-analysis__tag">The All-Knowing</p>
          <table className="baqarah-v32-analysis__table">
            <tbody>
              <tr><td>Angels</td><td dir="rtl">عِلْم</td></tr>
              <tr><td>Allah</td><td dir="rtl">عَلِيم</td></tr>
            </tbody>
          </table>
        </article>
        <article>
          <p className="baqarah-v32-analysis__ar" dir="rtl">الْحَكِيمُ</p>
          <span aria-hidden="true">↓</span>
          <p className="baqarah-v32-analysis__tag">The All-Wise</p>
          <p className="baqarah-v32-analysis__note">
            Wisdom: to have correct, precise judgement.
          </p>
        </article>
      </div>
    </div>
  );
}

export function Verse33AnalysisChart() {
  return (
    <div className="baqarah-chart baqarah-chart--v33-analysis">
      <ChartBanner title="Verse 33 — word analysis" />
      <p className="baqarah-v33-analysis__verse" dir="rtl">
        قَالَ يَا آدَمُ أَنبِئْهُم بِأَسْمَائِهِمْ ۖ فَلَمَّا أَنبَأَهُم بِأَسْمَائِهِمْ قَالَ أَلَمْ أَقُل لَّكُمْ إِنِّي أَعْلَمُ غَيْبَ السَّمَاوَاتِ وَالْأَرْضِ وَأَعْلَمُ مَا تُبْدُونَ وَمَا كُنتُمْ تَكْتُمُونَ
      </p>
      <div className="baqarah-v33-analysis__part">
        <h6>Part 1</h6>
        <div className="baqarah-v33-analysis__grid">
          <article>
            <p className="baqarah-v33-analysis__ar" dir="rtl">قَالَ يَا آدَمُ</p>
            <span aria-hidden="true">↓</span>
            <p className="baqarah-v33-analysis__note">Allah addresses Ādam</p>
          </article>
          <article>
            <p className="baqarah-v33-analysis__ar" dir="rtl">أَنبِئْهُم</p>
            <span aria-hidden="true">↓</span>
            <p className="baqarah-v33-analysis__note"><u>To inform them</u> — the angels</p>
          </article>
          <article>
            <p className="baqarah-v33-analysis__ar" dir="rtl">بِأَسْمَائِهِمْ</p>
            <span aria-hidden="true">↓</span>
            <p className="baqarah-v33-analysis__tag">Prefixed preposition</p>
            <p className="baqarah-v33-analysis__note"><u>Of</u> — inform them of their names</p>
          </article>
          <article>
            <p className="baqarah-v33-analysis__ar" dir="rtl">فَلَمَّا أَنبَأَهُم</p>
            <span aria-hidden="true">↓</span>
            <p className="baqarah-v33-analysis__note"><u>Named them straightaway, immediately</u></p>
            <p className="baqarah-v33-analysis__note"><u>Informed them</u></p>
          </article>
          <article>
            <p className="baqarah-v33-analysis__ar" dir="rtl">أَلَمْ</p>
            <span aria-hidden="true">↓</span>
            <table className="baqarah-v33-analysis__table">
              <tbody>
                <tr><td>To question / Did</td><td dir="rtl">أَ</td></tr>
                <tr><td>Negative particle / Not</td><td dir="rtl">لَمْ</td></tr>
              </tbody>
            </table>
            <p className="baqarah-v33-analysis__note baqarah-v33-analysis__note--accent">Did I not tell you&hellip;?</p>
          </article>
        </div>
      </div>
      <div className="baqarah-v33-analysis__part">
        <h6>Part 2</h6>
        <div className="baqarah-v33-analysis__grid">
          <article>
            <p className="baqarah-v33-analysis__ar" dir="rtl">غَيْبَ</p>
            <span aria-hidden="true">↓</span>
            <p className="baqarah-v33-analysis__note"><u>Unseen</u></p>
          </article>
          <article>
            <p className="baqarah-v33-analysis__ar" dir="rtl">تُبْدُونَ</p>
            <span aria-hidden="true">↓</span>
            <p className="baqarah-v33-analysis__note"><u>Reveal</u></p>
          </article>
          <article>
            <p className="baqarah-v33-analysis__ar" dir="rtl">تَكْتُمُونَ</p>
            <span aria-hidden="true">↓</span>
            <p className="baqarah-v33-analysis__note"><u>Conceal</u></p>
          </article>
        </div>
      </div>
    </div>
  );
}

const ANGELS_MANNER_OPTIONS = [
  { n: 1, text: "Condemnation / disapproval", correct: false },
  { n: 2, text: "Envy", correct: false },
  { n: 3, text: "Wondering / seeking guidance", correct: true },
];

export function AngelsMannerQuiz() {
  return (
    <div className="baqarah-chart baqarah-chart--angels-quiz">
      <ChartBanner title="Verse 30 — how did the angels ask?" />
      <p className="baqarah-angels-quiz__verse" dir="rtl">
        قَالُوا أَتَجْعَلُ فِيهَا مَن يُفْسِدُ فِيهَا وَيَسْفِكُ الدِّمَاءَ وَنَحْنُ نُسَبِّحُ بِحَمْدِكَ وَنُقَدِّسُ لَكَ
      </p>
      <p className="baqarah-angels-quiz__question">
        In this verse, in what manner did the angels ask Allah?
      </p>
      <ol className="baqarah-angels-quiz__options">
        {ANGELS_MANNER_OPTIONS.map((opt) => (
          <li
            key={opt.n}
            className={opt.correct ? "baqarah-angels-quiz__option--correct" : ""}
          >
            {opt.n}. {opt.text}
          </li>
        ))}
      </ol>
    </div>
  );
}

export function AngelsHidingChart() {
  return (
    <div className="baqarah-chart baqarah-chart--angels-hiding">
      <ChartBanner title="What were the angels hiding?" />
      <div className="baqarah-angels-hiding__main">
        Angels are created to always obey Allah, so they do not have a secret agenda. Allah is telling them that He knew what Iblīs had concealed (out of jealousy of Ādam), or that He knew what Iblīs — who was among the angels — would do in the near future.
      </div>
      <div className="baqarah-angels-hiding__detail">
        <cite>Al-Ālūsī in Rūḥ al-Maʿānī&apos;s explanation</cite>
        <ol>
          <li>
            Iblīs (the future Shayṭān) was given high ranks among the angels, even though he was a jinn. He gained this high rank — maybe because he did acts of worship to Allah a lot — but most of all because it was a test for him from Allah.
          </li>
          <li className="baqarah-angels-hiding__accent">
            So the angels did not know, as they were innocent — but Iblīs was amongst them, and he may have been getting jealous when Ādam was being honoured, or maybe Iblīs would get jealous in the future against Ādam when Allah would tell the angels (and Iblīs who was amongst them) to prostrate to Ādam.
          </li>
        </ol>
      </div>
    </div>
  );
}

export function Verse34ProstrationChart() {
  return (
    <div className="baqarah-chart baqarah-chart--v34-prostration">
      <ChartBanner title="Verse 34 — word analysis" />
      <p className="baqarah-v34-prostration__verse" dir="rtl">
        وَإِذْ قُلْنَا لِلْمَلَائِكَةِ اسْجُدُوا لِآدَمَ فَسَجَدُوا إِلَّا إِبْلِيسَ أَبَىٰ وَاسْتَكْبَرَ وَكَانَ مِنَ الْكَافِرِينَ
      </p>
      <div className="baqarah-v34-prostration__grid">
        <article>
          <p className="baqarah-v34-prostration__ar" dir="rtl">وَإِذْ</p>
          <span aria-hidden="true">↓</span>
          <p><strong>وَ</strong> — And</p>
          <p><strong>إِذْ</strong> — When, time adverb</p>
          <p className="baqarah-v34-prostration__note">To join with the first وَإِذْ</p>
        </article>
        <article>
          <p className="baqarah-v34-prostration__ar" dir="rtl">قُلْنَا</p>
          <span aria-hidden="true">↓</span>
          <p>Allah · plural · to show greatness</p>
        </article>
        <article>
          <p className="baqarah-v34-prostration__ar" dir="rtl">اسْجُدُوا لِآدَمَ فَسَجَدُوا</p>
          <span aria-hidden="true">↓</span>
          <p className="baqarah-v34-prostration__note--accent">
            To prostrate — not worshipping Ādam, but to show obedience to Allah.
          </p>
          <p className="baqarah-v34-prostration__how">How?</p>
          <ul>
            <li>Like praying</li>
            <li>Or greeting someone</li>
            <li>We don&apos;t know!</li>
          </ul>
        </article>
        <article>
          <p className="baqarah-v34-prostration__ar" dir="rtl">أَبَىٰ</p>
          <span aria-hidden="true">↓</span>
          <p><u>He refused</u></p>
          <p className="baqarah-v34-prostration__note">
            To refuse as if in command of a higher rank — shows lack of obedience regardless of Allah&apos;s authority. رَفْض = to refuse; refusal should be between two of equal rank.
          </p>
        </article>
        <article>
          <p className="baqarah-v34-prostration__ar" dir="rtl">وَاسْتَكْبَرَ</p>
          <span aria-hidden="true">↓</span>
          <p><strong>وَ</strong> — And</p>
          <p><strong>اسْتَكْبَرَ</strong> — he sought / was arrogant</p>
          <p className="baqarah-v34-prostration__note--accent">وَاسْتَكْبَرَ = and was arrogant</p>
        </article>
      </div>
      <p className="baqarah-v34-prostration__footer">
        <strong>Was</strong> — past tense. Maybe it shows that in the sight of Allah, Iblīs was always a kāfir deep inside himself, and Allah exposed the disease of arrogance in his heart.
      </p>
    </div>
  );
}

const KEY_MEANINGS = [
  { ar: "آدَمَ", en: "Ādam", tone: "positive" },
  { ar: "الْمَلَائِكَةَ", en: "Angels", tone: "positive" },
  { ar: "إِبْلِيسَ", en: "Iblīs", tone: "negative" },
];

export function KeyMeaningsChart() {
  return (
    <div className="baqarah-chart baqarah-chart--key-meanings">
      <ChartBanner title="Key meanings" />
      <div className="baqarah-key-meanings__grid">
        {KEY_MEANINGS.map((item) => (
          <article
            key={item.ar}
            className={`baqarah-key-meanings__item baqarah-key-meanings__item--${item.tone}`}
          >
            <p className="baqarah-key-meanings__ar" dir="rtl">{item.ar}</p>
            <p className="baqarah-key-meanings__en">{item.en}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

export function Verse35GardenChart() {
  return (
    <div className="baqarah-chart baqarah-chart--v35-garden">
      <ChartBanner title="Verse 35 — dwell in Paradise" />
      <p className="baqarah-v35-garden__verse" dir="rtl">
        وَقُلْنَا يَا آدَمُ اسْكُنْ أَنْتَ وَزَوْجُكَ الْجَنَّةَ وَكُلَا مِنْهَا رَغَدًا حَيْثُ شِئْتُمَا
      </p>
      <div className="baqarah-v35-garden__grid">
        <article>
          <p dir="rtl">يَا آدَمُ</p>
          <span aria-hidden="true">↓</span>
          <p className="baqarah-v35-garden__accent">Calling them to grab attention</p>
        </article>
        <article>
          <p dir="rtl">اسْكُنْ</p>
          <span aria-hidden="true">↓</span>
          <p>Does not necessarily imply permanent residence</p>
        </article>
        <article>
          <p dir="rtl">أَنْتَ وَزَوْجُكَ</p>
          <span aria-hidden="true">↓</span>
          <p className="baqarah-v35-garden__accent">
            Your wife — Allah mentions the wife of Ādam. This means Allah honoured male &amp; female.
          </p>
        </article>
        <article>
          <p dir="rtl">وَكُلَا</p>
          <span aria-hidden="true">↓</span>
          <p>Both of you</p>
        </article>
        <article>
          <p dir="rtl">رَغَدًا</p>
          <span aria-hidden="true">↓</span>
          <p>Freely without fear / carefree / with joy &amp; delight</p>
        </article>
        <article>
          <p dir="rtl">حَيْثُ</p>
          <span aria-hidden="true">↓</span>
          <p className="baqarah-v35-garden__accent">Location adverb — wherever</p>
        </article>
      </div>
    </div>
  );
}

export function Verse35TreeWarningChart() {
  return (
    <div className="baqarah-chart baqarah-chart--v35-tree">
      <ChartBanner title="Verse 35 — do not approach the tree" />
      <p className="baqarah-v35-tree__verse" dir="rtl">
        وَلَا تَقْرَبَا هَٰذِهِ الشَّجَرَةَ فَتَكُونَا مِنَ الظَّالِمِينَ
      </p>
      <div className="baqarah-v35-tree__grid">
        <article>
          <p dir="rtl">وَلَا تَقْرَبَا</p>
          <span aria-hidden="true">↓</span>
          <p><u>You both don&apos;t approach</u></p>
        </article>
        <article>
          <p dir="rtl">هَٰذِهِ الشَّجَرَةَ</p>
          <span aria-hidden="true">↓</span>
          <p className="baqarah-v35-tree__accent"><u>Only this particular tree</u></p>
        </article>
        <article>
          <p dir="rtl">فَ</p>
          <span aria-hidden="true">↓</span>
          <p className="baqarah-v35-tree__accent"><u>فَ — particle of cause</u></p>
        </article>
        <article>
          <p dir="rtl">فَتَكُونَا مِنَ الظَّالِمِينَ</p>
          <span aria-hidden="true">↓</span>
          <p>Both of you will be of the wrongdoers / injustice</p>
        </article>
      </div>
    </div>
  );
}

export function Verse36DescentChart() {
  return (
    <div className="baqarah-chart baqarah-chart--v36-descent">
      <ChartBanner title="Verse 36 — word analysis" />
      <p className="baqarah-v36-descent__verse" dir="rtl">
        فَأَزَلَّهُمَا الشَّيْطَانُ عَنْهَا فَأَخْرَجَهُمَا مِمَّا كَانُوا فِيهِ ۖ وَقُلْنَا اهْبِطُوا بَعْضُكُمْ لِبَعْضٍ عَدُوٌّ ۖ وَلَكُمْ فِي الْأَرْضِ مُسْتَقَرٌّ وَمَتَاعٌ إِلَىٰ حِينٍ
      </p>
      <div className="baqarah-v36-descent__grid">
        <article>
          <p dir="rtl">فَ</p>
          <p>And / immediately</p>
        </article>
        <article>
          <p dir="rtl">فَأَزَلَّهُمَا الشَّيْطَانُ</p>
          <p>Al-Shayṭān caused them to slip</p>
        </article>
        <article>
          <p dir="rtl">عَنْهَا</p>
          <p>The tree — referring to Allah&apos;s instructions / guidance</p>
        </article>
        <article>
          <p dir="rtl">مِمَّا كَانُوا فِيهِ</p>
          <p><strong>مِمَّا</strong> — from what</p>
          <p><strong>فِيهِ</strong> — majority said: refers to Allah; few said: al-Shayṭān</p>
        </article>
        <article>
          <p dir="rtl">اهْبِطُوا</p>
          <p>Descend / exit — plural referring to Ādam, Hawwāʾ &amp; al-Shayṭān. They descended from a higher position to a lower one.</p>
        </article>
        <article>
          <p dir="rtl">بَعْضُكُمْ لِبَعْضٍ عَدُوٌّ</p>
          <p>Al-Shayṭān with Ādam &amp; Eve (mankind)</p>
        </article>
        <article>
          <p dir="rtl">مُسْتَقَرٌّ</p>
          <p>Place to settle in</p>
        </article>
        <article>
          <p dir="rtl">وَمَتَاعٌ</p>
          <p>Provision</p>
        </article>
        <article>
          <p dir="rtl">إِلَىٰ حِينٍ</p>
          <p>Until death / the Last Day</p>
        </article>
      </div>
    </div>
  );
}

export function Verse37RepentanceChart() {
  return (
    <div className="baqarah-chart baqarah-chart--v37-repentance">
      <ChartBanner title="Verse 37 — word analysis" />
      <p className="baqarah-v37-repentance__verse" dir="rtl">
        فَتَلَقَّىٰ آدَمُ مِن رَّبِّهِ كَلِمَاتٍ فَتَابَ عَلَيْهِ ۖ إِنَّهُ هُوَ التَّوَّابُ الرَّحِيمُ
      </p>
      <div className="baqarah-v37-repentance__grid">
        <article>
          <p dir="rtl">فَتَلَقَّىٰ</p>
          <span aria-hidden="true">↓</span>
          <p>After Ādam&apos;s descending he received</p>
        </article>
        <article>
          <p dir="rtl">آدَمُ مِن رَّبِّهِ</p>
          <span aria-hidden="true">↓</span>
          <p>Refers to Ādam — although he committed a sin, yet he belongs to his Lord</p>
        </article>
        <article>
          <p dir="rtl">كَلِمَاتٍ</p>
          <span aria-hidden="true">↓</span>
          <p>Words revealed by Allah — in chapter 7:23</p>
        </article>
        <article>
          <p dir="rtl">فَتَابَ عَلَيْهِ</p>
          <span aria-hidden="true">↓</span>
          <p>Accepted his repentance · pronoun refers to Ādam</p>
        </article>
        <article>
          <p dir="rtl">إِنَّهُ هُوَ</p>
          <span aria-hidden="true">↓</span>
          <p>Indeed He is</p>
        </article>
        <article>
          <p dir="rtl">التَّوَّابُ</p>
          <span aria-hidden="true">↓</span>
          <p>Who accepts repentance repetitively</p>
        </article>
        <article>
          <p dir="rtl">الرَّحِيمُ</p>
          <span aria-hidden="true">↓</span>
          <p>The Most Merciful</p>
        </article>
      </div>
    </div>
  );
}

export function Page6LinkingBanner() {
  return (
    <div className="baqarah-chart baqarah-chart--page6-linking">
      <div className="baqarah-page6-linking__banner">(Linking)</div>
      <p className="baqarah-page6-linking__note">
        Key topics in order of the events — using Qur&apos;anic words as they appear to refer to each topic.
      </p>
    </div>
  );
}

const PAGE6_ANGELS_EVENTS = [
  { n: 1, words: ["خَلِيفَةً"], verse: 30 },
  { n: 2, words: ["عَلَّمَ آدَمَ", "الْأَسْمَاءَ"], verse: 31 },
  { n: 3, words: ["عَرَضَهُمْ عَلَى الْمَلَائِكَةِ"], verse: 31 },
  { n: 4, words: ["يَا آدَمُ", "أَنبِئْهُم"], verse: 33, note: "For Ādam" },
  { n: 5, words: ["اسْجُدُوا"], verse: 34 },
];

const PAGE6_ADAM_EVENTS = [
  { n: 6, words: ["اسْكُنْ"], sub: "أَنْتَ وَزَوْجُكَ", verse: 35, tone: "rose" },
  { n: 7, words: ["اهْبِطُوا"], verse: 36, tone: "green" },
  { n: 8, words: ["فَتَابَ"], sub: "عَلَيْهِ", verse: 37, tone: "green" },
];

function EventsTimeline({ sidebar, bracket, items, tone = "rose" }) {
  return (
    <div className={`baqarah-page6-events baqarah-page6-events--${tone}`}>
      <div className="baqarah-page6-events__layout">
        <aside className="baqarah-page6-events__sidebar">{sidebar}</aside>
        <div className="baqarah-page6-events__bracket">
          <p>{bracket}</p>
        </div>
        <ol className="baqarah-page6-events__list">
          {items.map((item) => (
            <li
              key={item.n}
              className={[
                "baqarah-page6-events__item",
                item.tone && `baqarah-page6-events__item--${item.tone}`,
              ].filter(Boolean).join(" ")}
            >
              <div className="baqarah-page6-events__words">
                {item.words.map((word) => (
                  <span key={word} className="baqarah-page6-events__word" dir="rtl">{word}</span>
                ))}
                {item.sub && (
                  <span className="baqarah-page6-events__sub" dir="rtl">{item.sub}</span>
                )}
                {item.note && <span className="baqarah-page6-events__item-note">{item.note}</span>}
              </div>
              <span className="baqarah-page6-events__num">{item.n}</span>
              <span className="baqarah-page6-events__verse">({item.verse})</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export function Page6AngelsEventsMap() {
  return (
    <div className="baqarah-chart baqarah-chart--page6-events">
      <ChartBanner title="Key topics in order of the events" />
      <EventsTimeline
        tone="rose"
        sidebar="Allah is addressing the Angels"
        bracket="About Ādam (ʿalayhis-salām) — except Ādam · For أَنبِئْهُم"
        items={PAGE6_ANGELS_EVENTS}
      />
    </div>
  );
}

export function Page6AdamEventsMap() {
  return (
    <div className="baqarah-chart baqarah-chart--page6-events">
      <ChartBanner title="Key topics in order of the events (continued)" />
      <EventsTimeline
        tone="green"
        sidebar="Allah is addressing Ādam"
        bracket="& Hawwāʾ — except for the words اسْكُنْ / فَتَابَ / فَتَلَقَّىٰ"
        items={PAGE6_ADAM_EVENTS}
      />
    </div>
  );
}

const BAQARAH_UNIQUE_ROWS = [
  {
    n: 1,
    other: "إِنِّي خَالِقٌ بَشَرًا",
    baqarah: "إِنِّي جَاعِلٌ فِي الْأَرْضِ خَلِيفَةً",
    verse: 30,
  },
  {
    n: 2,
    other: null,
    baqarah: "إِنَّكَ أَنْتَ الْعَلِيمُ الْحَكِيمُ",
    verse: 32,
    note: "Only once in the Qur'an",
  },
  {
    n: 3,
    other: "مَا تُبْدُونَ وَمَا تَكْتُمُونَ",
    baqarah: "وَأَعْلَمُ مَا تُبْدُونَ وَمَا كُنتُمْ تَكْتُمُونَ",
    verse: 33,
  },
  {
    n: 4,
    other: null,
    baqarah: [
      { text: "رَغَدًا حَيْثُ شِئْتُمَا", verse: 35, note: "Referring to Ādam & Eve" },
      { text: "حَيْثُ شِئْتُمْ رَغَدًا", verse: 58, note: "Referring to Children of Israel" },
    ],
    verse: 35,
  },
  {
    n: 5,
    other: ["فَوَسْوَسَ إِلَيْهِ الشَّيْطَانُ", "فَوَسْوَسَ لَهُمَا الشَّيْطَانُ"],
    baqarah: "فَأَزَلَّهُمَا الشَّيْطَانُ",
    verse: 36,
  },
  {
    n: 6,
    other: ["قَالَ اهْبِطَا", "قَالَ اهْبِطُوا"],
    baqarah: "وَقُلْنَا اهْبِطُوا",
    verse: 36,
  },
];

export function BaqarahUniquePhrasesChart() {
  return (
    <div className="baqarah-chart baqarah-chart--baqarah-unique">
      <ChartBanner title="Only mentioned in Sūrat al-Baqarah" />
      <div className="baqarah-baqarah-unique__head">
        <span className="baqarah-baqarah-unique__col baqarah-baqarah-unique__col--other">In other chapters</span>
        <span className="baqarah-baqarah-unique__col baqarah-baqarah-unique__col--baqarah">Only in al-Baqarah</span>
      </div>
      <ol className="baqarah-baqarah-unique__rows">
        {BAQARAH_UNIQUE_ROWS.map((row) => (
          <li key={row.n} className="baqarah-baqarah-unique__row">
            <span className="baqarah-baqarah-unique__num">{row.n}</span>
            <div className="baqarah-baqarah-unique__other">
              {Array.isArray(row.other) ? (
                row.other.map((text) => (
                  <span key={text} className="baqarah-baqarah-unique__phrase" dir="rtl">{text}</span>
                ))
              ) : row.other ? (
                <span className="baqarah-baqarah-unique__phrase" dir="rtl">{row.other}</span>
              ) : (
                <span className="baqarah-baqarah-unique__empty">—</span>
              )}
            </div>
            <div className="baqarah-baqarah-unique__baqarah">
              {Array.isArray(row.baqarah) ? (
                row.baqarah.map((item) => (
                  <div key={item.text} className="baqarah-baqarah-unique__stack">
                    <span className="baqarah-baqarah-unique__phrase baqarah-baqarah-unique__phrase--green" dir="rtl">
                      {item.text} ({item.verse})
                    </span>
                    {item.note && <span className="baqarah-baqarah-unique__note">{item.note}</span>}
                  </div>
                ))
              ) : (
                <>
                  <span className="baqarah-baqarah-unique__phrase baqarah-baqarah-unique__phrase--green" dir="rtl">
                    {row.baqarah} ({row.verse})
                  </span>
                  {row.note && <span className="baqarah-baqarah-unique__note">{row.note}</span>}
                </>
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

const SPEECH_LEGEND = [
  { id: "wa-idh", label: "Repetition of the word وَإِذْ", swatch: "outline-red" },
  { id: "qala", label: "Repetition of قَالَ — referring to Allah", swatch: "solid-blue" },
  { id: "qalu", label: "Repetition of قَالُوا — referring to the angels", swatch: "solid-pink" },
  { id: "qulna", label: "Repetition of قُلْنَا — referring to Allah", swatch: "solid-green" },
  { id: "fa", label: "The letter ف", swatch: "oval-orange" },
];

const SPEECH_BY_VERSE = [
  { verse: 30, marks: [{ word: "قَالَ", type: "qala" }, { word: "قَالُوا", type: "qalu" }, { word: "قَالَ", type: "qala" }] },
  { verse: 31, marks: [{ word: "قَالَ", type: "qala" }] },
  { verse: 32, marks: [{ word: "قَالُوا", type: "qalu" }] },
  { verse: 33, marks: [{ word: "قَالَ", type: "qala" }, { word: "قَالَ", type: "qala" }] },
  { verse: 34, marks: [{ word: "قُلْنَا", type: "qulna" }] },
  { verse: 35, marks: [{ word: "قُلْنَا", type: "qulna" }] },
  { verse: 36, marks: [{ word: "قُلْنَا", type: "qulna" }, { word: "فَ", type: "fa" }] },
];

export function Page6SpeechPatternsChart() {
  return (
    <div className="baqarah-chart baqarah-chart--page6-speech">
      <ChartBanner title="Repeated speech words (verses 30–36)" />
      <div className="baqarah-page6-speech__layout">
        <div className="baqarah-page6-speech__verses">
          {SPEECH_BY_VERSE.map((row) => (
            <div key={row.verse} className="baqarah-page6-speech__verse-row">
              <span className="baqarah-page6-speech__verse-num">({row.verse})</span>
              <div className="baqarah-page6-speech__marks">
                {row.marks.map((mark, i) => (
                  <span
                    key={`${row.verse}-${mark.word}-${i}`}
                    className={`baqarah-page6-speech__mark baqarah-page6-speech__mark--${mark.type}`}
                    dir="rtl"
                  >
                    {mark.word}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <aside className="baqarah-page6-speech__legend">
          {SPEECH_LEGEND.map((item) => (
            <div key={item.id} className="baqarah-page6-speech__legend-item">
              <span className={`baqarah-page6-speech__swatch baqarah-page6-speech__swatch--${item.swatch}`} />
              <span>{item.label}</span>
            </div>
          ))}
        </aside>
      </div>
    </div>
  );
}

const KNOWLEDGE_LEGEND = [
  { id: "inni", label: "Repetition of the word إِنِّي", swatch: "outline-blue", count: 2 },
  { id: "ilm", label: "Repetition of the root عَلِم (knowledge)", swatch: "solid-orange", count: 7 },
  { id: "waw", label: "The letter وَ", swatch: "oval-red", count: 2 },
];

const KNOWLEDGE_BY_VERSE = [
  { verse: 30, marks: [{ word: "إِنِّي", type: "inni" }, { word: "أَعْلَمُ", type: "ilm" }, { word: "تَعْلَمُونَ", type: "ilm" }] },
  { verse: 31, marks: [{ word: "عَلَّمَ", type: "ilm" }] },
  { verse: 32, marks: [{ word: "عَلَّمْتَنَا", type: "ilm" }, { word: "الْعَلِيمُ", type: "ilm" }] },
  { verse: 33, marks: [{ word: "إِنِّي", type: "inni" }, { word: "أَعْلَمُ", type: "ilm" }, { word: "أَعْلَمُ", type: "ilm" }, { word: "تَعْلَمُونَ", type: "ilm" }] },
];

export function Page6KnowledgePatternsChart() {
  return (
    <div className="baqarah-chart baqarah-chart--page6-knowledge">
      <ChartBanner title="Knowledge patterns (verses 30–33)" />
      <div className="baqarah-page6-speech__layout">
        <div className="baqarah-page6-speech__verses">
          {KNOWLEDGE_BY_VERSE.map((row) => (
            <div key={row.verse} className="baqarah-page6-speech__verse-row">
              <span className="baqarah-page6-speech__verse-num">({row.verse})</span>
              <div className="baqarah-page6-speech__marks">
                {row.marks.map((mark, i) => (
                  <span
                    key={`${row.verse}-${mark.word}-${i}`}
                    className={`baqarah-page6-speech__mark baqarah-page6-speech__mark--${mark.type}`}
                    dir="rtl"
                  >
                    {mark.word}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <aside className="baqarah-page6-speech__legend">
          {KNOWLEDGE_LEGEND.map((item) => (
            <div key={item.id} className="baqarah-page6-speech__legend-item">
              <span className={`baqarah-page6-speech__swatch baqarah-page6-speech__swatch--${item.swatch}`} />
              <span>{item.label} <em>({item.count}×)</em></span>
            </div>
          ))}
        </aside>
      </div>
    </div>
  );
}

const PAGE8_TOPIC_BRANCHES = [
  {
    id: "A",
    letter: "A",
    title: "Pharaoh & the sea",
    subtitle: "Saving Banū Isrāʾīl from Firʿawn — the 1st blessing",
    verseRange: "49–50",
    color: "rose",
    verses: [49, 50],
    subTopics: [
      { label: "1st blessing — deliverance from Firʿawn", verses: "49" },
      { label: "Parted the sea / drowned Firʿawn", verses: "50" },
    ],
  },
  {
    id: "B",
    letter: "B",
    title: "Blessings & sins",
    subtitle: "7 blessings upon Banū Isrāʾīl and 2 sins they committed",
    verseRange: "51–57",
    color: "green",
    verses: [51, 52, 53, 54, 55, 56, 57],
    subTopics: [
      { label: "1st sin — worshipping the calf · Mūsā 40 nights", verses: "51" },
      { label: "2nd blessing — forgiveness", verses: "52" },
      { label: "3rd blessing — Torah / Furqān", verses: "53" },
      { label: "4th blessing — repentance accepted", verses: "54" },
      { label: "2nd sin — arrogance (see Allah outright)", verses: "55" },
      { label: "5th blessing — revived after death", verses: "56" },
      { label: "6th & 7th blessings — clouds, mann & quails", verses: "57" },
    ],
  },
];

export function PageEightTopicsMap() {
  return (
    <div className="baqarah-chart baqarah-chart--page8-map">
      <ChartBanner title="Topics Map (Page 8)" />
      <div className="baqarah-page8-map__grid">
        {PAGE8_TOPIC_BRANCHES.map((branch) => (
          <article
            key={branch.id}
            className={[
              "baqarah-page8-map__card",
              `baqarah-page8-map__card--${branch.color}`,
            ].join(" ")}
          >
            <header className="baqarah-page8-map__head">
              <span className="baqarah-page8-map__letter">{branch.letter}</span>
              <div className="baqarah-page8-map__titles">
                <h4 className="baqarah-page8-map__title">{branch.title}</h4>
                <p className="baqarah-page8-map__subtitle">{branch.subtitle}</p>
              </div>
            </header>
            {branch.subTopics?.length > 0 && (
              <ul className="baqarah-page8-map__subtopics">
                {branch.subTopics.map((item) => (
                  <li key={item.label}>
                    <span>{item.label}</span>
                    <span className="baqarah-page8-map__sub-verses">v. {item.verses}</span>
                  </li>
                ))}
              </ul>
            )}
            <footer className="baqarah-page8-map__foot">
              <span>Verses ({branch.verseRange})</span>
              <div className="baqarah-page8-map__pills">
                {branch.verses.map((verse) => (
                  <span key={verse} className="baqarah-page8-map__pill">{verse}</span>
                ))}
              </div>
            </footer>
          </article>
        ))}
      </div>
      <div className="baqarah-page8-map__strip" aria-label="Verse coverage on this mushaf page">
        {PAGE8_TOPIC_BRANCHES.map((branch) => (
          <div
            key={branch.id}
            className={[
              "baqarah-page8-map__strip-seg",
              `baqarah-page8-map__strip-seg--${branch.color}`,
            ].join(" ")}
            style={{ flexGrow: branch.verses.length }}
            title={`${branch.letter} · ${branch.title}`}
          >
            <span>{branch.letter}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const PAGE8_DETAILED_TOPICS = [
  { verse: 49, tone: "rose", topic: "A", summary: "1st blessing — saving them from the people of Pharaoh." },
  { verse: 50, tone: "rose", topic: "A", summary: "Parted the sea / drowned Firʿawn." },
  { verse: 51, tone: "rose", topic: "B", kind: "sin", summary: "1st sin (worshipping the calf) · Mūsā appointed 40 nights." },
  { verse: 52, tone: "green", topic: "B", kind: "blessing", summary: "2nd blessing — forgiveness (worshipping the calf)." },
  { verse: 53, tone: "green", topic: "B", kind: "blessing", summary: "3rd blessing — given the Torah / Furqān." },
  { verse: 54, tone: "green", topic: "B", kind: "blessing", summary: "4th blessing — accepting their repentance and cancelling the law." },
  { verse: 55, tone: "rose", topic: "B", kind: "sin", summary: "2nd sin — arrogance and impoliteness." },
  { verse: 56, tone: "green", topic: "B", kind: "blessing", summary: "5th blessing — revived them from death." },
  {
    verse: 57,
    tone: "green",
    topic: "B",
    kind: "blessing",
    summary: "6th blessing — shaded with clouds · 7th — luxury food (al-mann & quails).",
  },
];

export function PageEightDetailedTopicsMap() {
  return (
    <div className="baqarah-chart baqarah-chart--page8-detailed">
      <ChartBanner title="Detailed topics map (Page 8)" />
      <p className="baqarah-page8-detailed__key">
        <span className="baqarah-page8-detailed__key-item baqarah-page8-detailed__key-item--rose">
          Topic A · verses 49–50
        </span>
        <span className="baqarah-page8-detailed__key-item baqarah-page8-detailed__key-item--green">
          Topic B · blessings (green)
        </span>
        <span className="baqarah-page8-detailed__key-item baqarah-page8-detailed__key-item--sin">
          Topic B · sins (rose)
        </span>
      </p>
      <ol className="baqarah-page8-detailed__list">
        {PAGE8_DETAILED_TOPICS.map((item) => (
          <li
            key={item.verse}
            className={[
              "baqarah-page8-detailed__row",
              `baqarah-page8-detailed__row--${item.tone}`,
              item.kind && `baqarah-page8-detailed__row--${item.kind}`,
            ].filter(Boolean).join(" ")}
          >
            <span className="baqarah-page8-detailed__verse">{item.verse}</span>
            <span className="baqarah-page8-detailed__topic">Topic {item.topic}</span>
            <p className="baqarah-page8-detailed__summary">{item.summary}</p>
          </li>
        ))}
      </ol>
      <div className="baqarah-page8-detailed__strip" aria-label="Verse-by-verse tone on this page">
        {PAGE8_DETAILED_TOPICS.map((item) => (
          <div
            key={item.verse}
            className={[
              "baqarah-page8-detailed__strip-seg",
              `baqarah-page8-detailed__strip-seg--${item.tone}`,
            ].join(" ")}
            title={`Verse ${item.verse} · ${item.summary}`}
          >
            <span>{item.verse}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PageEightMainTopicBanner() {
  return (
    <div className="baqarah-chart baqarah-chart--page8-main">
      <ChartBanner title="Main topic of the page" />
      <div className="baqarah-page8-main__body">
        <p className="baqarah-page8-main__lead">
          Allah reminds the Children of Israel of His blessings on their ancestors and urges them to be grateful.
        </p>
        <div className="baqarah-page8-main__fork" aria-hidden="true">
          <svg viewBox="0 0 320 48" preserveAspectRatio="xMidYMid meet">
            <path
              d="M160 4 L160 20 M160 20 L56 44 M160 20 L264 44"
              fill="none"
              stroke="#4b5563"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="baqarah-page8-main__branches">
          <article className="baqarah-page8-main__branch baqarah-page8-main__branch--rose">
            <span className="baqarah-page8-main__branch-label">Remember blessings</span>
            <p>Verses 49–57 — deliverance, Torah, repentance, provision in the desert.</p>
          </article>
          <article className="baqarah-page8-main__branch baqarah-page8-main__branch--green">
            <span className="baqarah-page8-main__branch-label">Believe &amp; accept Islam</span>
            <p>Believe in the Prophethood of Muḥammad ﷺ and what confirms your scripture.</p>
          </article>
        </div>
      </div>
    </div>
  );
}

const PAGE8_REPEATED_WORDS = [
  { ar: "ءَالِ فِرْعَوْنَ", en: "People of Pharaoh", verses: "49, 50", tone: "rose" },
  { ar: "مُوسَىٰ", en: "Mūsā", verses: "51, 53, 54, 55", tone: "green" },
  { ar: "الْعِجْلَ", en: "The calf", verses: "51, 54", tone: "rose" },
  { ar: "لَعَلَّكُمْ تَشْكُرُونَ", en: "Perhaps you would be grateful", verses: "52, 56, 57", tone: "green" },
  { ar: "تُوبُوا / تَابَ", en: "Repent / accepted repentance", verses: "54", tone: "green" },
  { ar: "ظَلَمَ / ظَالِمُونَ", en: "Wrongdoing", verses: "51, 54, 57", tone: "rose" },
];

export function Page8RepeatedWordsChart() {
  return (
    <div className="baqarah-chart baqarah-chart--page8-repeated">
      <ChartBanner title="Repeated words (verses 49–57)" />
      <ul className="baqarah-page8-repeated__list">
        {PAGE8_REPEATED_WORDS.map((item) => (
          <li
            key={item.ar}
            className={`baqarah-page8-repeated__item baqarah-page8-repeated__item--${item.tone}`}
          >
            <p className="baqarah-page8-repeated__ar" dir="rtl">{item.ar}</p>
            <p className="baqarah-page8-repeated__en">{item.en}</p>
            <span className="baqarah-page8-repeated__verses">v. {item.verses}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const PAGE8_LINKING_WAW = [49, 50, 51, 53, 54, 55];
const PAGE8_LINKING_THUMMA = [52, 56];

export function Page8LinkingPatternChart() {
  return (
    <div className="baqarah-chart baqarah-chart--page8-linking">
      <ChartBanner title="Linking pattern — وَإِذْ · ثُمَّ" />
      <div className="baqarah-page8-linking__groups">
        <section className="baqarah-page8-linking__group">
          <h5 className="baqarah-page8-linking__label" dir="rtl">وَإِذْ</h5>
          <p className="baqarah-page8-linking__note">Three openings — remember when…</p>
          <div className="baqarah-page8-linking__pills">
            {PAGE8_LINKING_WAW.map((verse) => (
              <span key={verse} className="baqarah-page8-linking__pill baqarah-page8-linking__pill--waw">
                {verse}
              </span>
            ))}
          </div>
        </section>
        <section className="baqarah-page8-linking__group">
          <h5 className="baqarah-page8-linking__label" dir="rtl">ثُمَّ</h5>
          <p className="baqarah-page8-linking__note">Then — sequence after the calf &amp; after the thunderbolt</p>
          <div className="baqarah-page8-linking__pills">
            {PAGE8_LINKING_THUMMA.map((verse) => (
              <span key={verse} className="baqarah-page8-linking__pill baqarah-page8-linking__pill--thumma">
                {verse}
              </span>
            ))}
          </div>
        </section>
      </div>
      <p className="baqarah-page8-linking__caption">
        Verses 49–52 and 53–56 — وَإِذْ opens each remembrance; ثُمَّ marks what followed.
      </p>
    </div>
  );
}

export function BalaunConceptChart() {
  return (
    <div className="baqarah-chart baqarah-chart--balaun">
      <ChartBanner title="The word بَلَاءٌ — a test / trial" />
      <div className="baqarah-balaun__root" dir="rtl">بَلَاءٌ</div>
      <p className="baqarah-balaun__meaning">A test / trial</p>
      <div className="baqarah-balaun__fork" aria-hidden="true">
        <svg viewBox="0 0 320 48" preserveAspectRatio="xMidYMid meet">
          <path d="M160 4 L160 20 M160 20 L56 44 M160 20 L264 44" fill="none" stroke="#4b5563" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </div>
      <div className="baqarah-balaun__branches">
        <article className="baqarah-balaun__branch baqarah-balaun__branch--good">
          <span>Good</span>
          <span aria-hidden="true">↓</span>
          <strong>Blessings</strong>
          <span aria-hidden="true">↓</span>
          <em>Thankful</em>
        </article>
        <article className="baqarah-balaun__branch baqarah-balaun__branch--bad">
          <span>Bad</span>
          <span aria-hidden="true">↓</span>
          <strong>Hardships</strong>
          <span aria-hidden="true">↓</span>
          <em>Patient</em>
        </article>
      </div>
    </div>
  );
}

const BALAUN_REFERENCES = [
  {
    en: "And We tested them with good [times] and bad that perhaps they would return.",
    ar: "وَبَلَوْنَاهُم بِالْحَسَنَاتِ وَالسَّيِّئَاتِ لَعَلَّهُمْ يَرْجِعُونَ",
    cite: "Al-Aʿrāf 7:168",
  },
  {
    en: "And We test you with evil and with good as trial; and to Us you will be returned.",
    ar: "وَنَبْلُوكُم بِالشَّرِّ وَالْخَيْرِ فِتْنَةً ۖ وَإِلَيْنَا تُرْجَعُونَ",
    cite: "Al-Anbiyāʾ 21:35",
  },
];

export function BalaunVerseRefsChart() {
  return (
    <div className="baqarah-chart baqarah-chart--balaun-refs">
      <ChartBanner title="بَلَاءٌ in the Qur'an" />
      <div className="baqarah-balaun-refs__list">
        {BALAUN_REFERENCES.map((ref) => (
          <blockquote key={ref.cite} className="baqarah-balaun-refs__item">
            <p className="baqarah-balaun-refs__ar" dir="rtl">{ref.ar}</p>
            <p>{ref.en}</p>
            <cite>{ref.cite}</cite>
          </blockquote>
        ))}
      </div>
    </div>
  );
}

const PAGE9_TOPIC_BRANCHES = [
  {
    id: "A",
    letter: "A",
    title: "Jerusalem",
    subtitle: "Entering the sacred city, Allah's blessing, and their 3rd sin",
    verseRange: "58–59",
    color: "rose",
    verses: [58, 59],
    subTopics: [
      { label: "Blessing — enter Jerusalem, eat freely, say ḥiṭṭah", verses: "58" },
      { label: "3rd sin — changed Allah's words · torment from the sky", verses: "59" },
    ],
  },
  {
    id: "B",
    letter: "B",
    title: "Food & water",
    subtitle: "Twelve springs, eat and drink — then ingratitude over food",
    verseRange: "60–61",
    color: "green",
    verses: [60, 61],
    subTopics: [
      { label: "Blessing — water from twelve springs for the twelve tribes", verses: "60" },
      { label: "4th & 5th sins — disbelief in signs · killing the prophets", verses: "61" },
    ],
  },
];

export function PageNineTopicsMap() {
  return (
    <div className="baqarah-chart baqarah-chart--page8-map">
      <ChartBanner title="Topics Map (Page 9)" />
      <div className="baqarah-page8-map__grid">
        {PAGE9_TOPIC_BRANCHES.map((branch) => (
          <article
            key={branch.id}
            className={[
              "baqarah-page8-map__card",
              `baqarah-page8-map__card--${branch.color}`,
            ].join(" ")}
          >
            <header className="baqarah-page8-map__head">
              <span className="baqarah-page8-map__letter">{branch.letter}</span>
              <div className="baqarah-page8-map__titles">
                <h4 className="baqarah-page8-map__title">{branch.title}</h4>
                <p className="baqarah-page8-map__subtitle">{branch.subtitle}</p>
              </div>
            </header>
            {branch.subTopics?.length > 0 && (
              <ul className="baqarah-page8-map__subtopics">
                {branch.subTopics.map((item) => (
                  <li key={item.label}>
                    <span>{item.label}</span>
                    <span className="baqarah-page8-map__sub-verses">v. {item.verses}</span>
                  </li>
                ))}
              </ul>
            )}
            <footer className="baqarah-page8-map__foot">
              <span>Verses ({branch.verseRange})</span>
              <div className="baqarah-page8-map__pills">
                {branch.verses.map((verse) => (
                  <span key={verse} className="baqarah-page8-map__pill">{verse}</span>
                ))}
              </div>
            </footer>
          </article>
        ))}
      </div>
      <div className="baqarah-page8-map__strip" aria-label="Verse coverage on this mushaf page">
        {PAGE9_TOPIC_BRANCHES.map((branch) => (
          <div
            key={branch.id}
            className={[
              "baqarah-page8-map__strip-seg",
              `baqarah-page8-map__strip-seg--${branch.color}`,
            ].join(" ")}
            style={{ flexGrow: branch.verses.length }}
            title={`${branch.letter} · ${branch.title}`}
          >
            <span>{branch.letter}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const PAGE9_DETAILED_TOPICS = [
  {
    verse: 58,
    tone: "rose",
    topic: "A",
    summary: "Blessing of entering Jerusalem after exile — eat freely anywhere in this town.",
  },
  {
    verse: 59,
    tone: "rose",
    topic: "A",
    kind: "sin",
    summary: "3rd sin (changing Allah's words) · punishment — torment from the heavens.",
  },
  {
    verse: 60,
    tone: "green",
    topic: "B",
    kind: "blessing",
    summary: "Blessing of water from 12 springs and food for the 12 tribes · prohibition of abuse on earth.",
  },
  {
    verse: 61,
    tone: "rose",
    topic: "B",
    kind: "sin",
    summary: "4th sin (bad disbelief in Allah's words) · 5th sin (killing the prophets).",
  },
];

export function PageNineDetailedTopicsMap() {
  return (
    <div className="baqarah-chart baqarah-chart--page8-detailed">
      <ChartBanner title="Detailed topics map (Page 9)" />
      <p className="baqarah-page8-detailed__key">
        <span className="baqarah-page8-detailed__key-item baqarah-page8-detailed__key-item--rose">
          Topic A · verses 58–59
        </span>
        <span className="baqarah-page8-detailed__key-item baqarah-page8-detailed__key-item--green">
          Topic B · blessing (green)
        </span>
        <span className="baqarah-page8-detailed__key-item baqarah-page8-detailed__key-item--sin">
          Sins (rose)
        </span>
      </p>
      <ol className="baqarah-page8-detailed__list">
        {PAGE9_DETAILED_TOPICS.map((item) => (
          <li
            key={item.verse}
            className={[
              "baqarah-page8-detailed__row",
              `baqarah-page8-detailed__row--${item.tone}`,
              item.kind && `baqarah-page8-detailed__row--${item.kind}`,
            ].filter(Boolean).join(" ")}
          >
            <span className="baqarah-page8-detailed__verse">{item.verse}</span>
            <span className="baqarah-page8-detailed__topic">Topic {item.topic}</span>
            <p className="baqarah-page8-detailed__summary">{item.summary}</p>
          </li>
        ))}
      </ol>
      <div className="baqarah-page8-detailed__strip" aria-label="Verse-by-verse tone on this page">
        {PAGE9_DETAILED_TOPICS.map((item) => (
          <div
            key={item.verse}
            className={[
              "baqarah-page8-detailed__strip-seg",
              `baqarah-page8-detailed__strip-seg--${item.tone}`,
            ].join(" ")}
            title={`Verse ${item.verse} · ${item.summary}`}
          >
            <span>{item.verse}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

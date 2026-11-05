import { useEffect, useMemo, useState } from "react";
import { LEXICON_AUTHORS } from "../data/lexiconAuthors.js";
import { getSurahMeta } from "../data/quranSurahMeta.js";
import "../styles/word-study.css";

/**
 * Word study: the word's root (Quranic Arabic Corpus) and the classical
 * dictionary entries for that root, quoted verbatim from the printed editions
 * (digital text: OpenITI). Nothing here is paraphrased or generated.
 */

const LEXICON_BOOKS = {
  maq: {
    titleAr: "معجم مقاييس اللغة",
    title: "Maqāyīs al-Lugha",
    authorAr: "ابن فارس",
    author: "Ibn Fāris (d. 395 AH)",
    role: "Core meaning of the root",
    edition: "ed. ʿAbd al-Salām Hārūn, Dār al-Fikr, 1399 AH / 1979",
    source: "https://github.com/OpenITI/0400AH/tree/master/data/0395IbnFarisQazwini/0395IbnFarisQazwini.MucjamMaqayis",
    hasVolumes: true,
  },
  muf: {
    titleAr: "المفردات في غريب القرآن",
    title: "al-Mufradāt fī Gharīb al-Qurʾān",
    authorAr: "الراغب الأصفهاني",
    author: "al-Rāghib al-Iṣfahānī (d. 502 AH)",
    role: "How the Qurʾān uses it",
    edition: "ed. Ṣafwān ʿAdnān al-Dāwūdī, Dār al-Qalam / al-Dār al-Shāmiyya, 1st ed. 1412 AH",
    source: "https://github.com/OpenITI/0525AH/tree/master/data/0502RaghibIsbahani/0502RaghibIsbahani.Mufradat",
    hasVolumes: false,
  },
  lis: {
    titleAr: "لسان العرب",
    title: "Lisān al-ʿArab",
    authorAr: "ابن منظور",
    author: "Ibn Manẓūr (d. 711 AH)",
    role: "Full classical usage",
    edition: "Dār Ṣādir, Beirut, 3rd ed. 1414 AH",
    source: "https://github.com/OpenITI/0725AH/tree/master/data/0711IbnManzurIfriqi/0711IbnManzurIfriqi.LisanCarab",
    hasVolumes: true,
  },
};

const cache = new Map();

function loadRootFile(fileId) {
  if (!cache.has(fileId)) {
    const url = `${import.meta.env.BASE_URL}lexicon/juz30/${fileId}.json`;
    cache.set(
      fileId,
      fetch(url)
        .then((res) => {
          if (!res.ok) throw new Error(String(res.status));
          return res.json();
        })
        .catch((err) => {
          cache.delete(fileId);
          throw err;
        }),
    );
  }
  return cache.get(fileId);
}

const HARAKAT = /[ً-ْٰـ]/g;
function plain(text) {
  return String(text ?? "")
    .replace(HARAKAT, "")
    .replace(/[أإآٱ]/g, "ا")
    .replace(/ى/g, "ي");
}

/** Regex that finds `word` in unvowelled or vowelled text (harakat/hamza seats tolerated). */
function wordPattern(word) {
  const letters = [...plain(word)].filter((c) => /[ء-ي]/.test(c));
  if (letters.length < 2) return null;
  const H = "[\\u064B-\\u0652\\u0670\\u0640]*";
  const body = letters
    .map((c) => (c === "ا" ? "[اأإآٱ]" : c === "ي" ? "[يى]" : c) + H)
    .join("");
  return new RegExp(body, "g");
}

function Highlighted({ text, pattern }) {
  if (!pattern) return text;
  const out = [];
  let last = 0;
  let key = 0;
  for (const m of text.matchAll(pattern)) {
    if (m.index > last) out.push(text.slice(last, m.index));
    out.push(<mark key={key++}>{m[0]}</mark>);
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

function pageLabel(pages, hasVolumes) {
  if (!pages?.length) return null;
  const [[v1, p1], second] = pages;
  const tail = second && second[1] !== p1 ? `–${second[1]}` : "";
  return hasVolumes ? `vol. ${v1}, p. ${p1}${tail}` : `p. ${p1}${tail}`;
}

/** For long entries (Lisān), show the opening plus the paragraph that discusses this word.
 *  Returns paragraph indices so translations stay aligned with the Arabic. */
function excerpt(paras, pattern, isLong) {
  const all = paras.map((_, i) => i);
  if (!isLong || paras.length <= 2) return { idx: all, trimmed: false };
  let hit = -1;
  if (pattern) {
    const probe = new RegExp(pattern.source); // non-global copy: no lastIndex state
    hit = paras.findIndex((p, i) => i > 0 && probe.test(p));
  }
  return { idx: hit > 0 ? [0, hit] : [0, 1], trimmed: true, gapBefore: hit > 1 };
}

function AboutBook({ bookId }) {
  const about = LEXICON_AUTHORS[bookId];
  if (!about) return null;
  return (
    <details className="ws-about">
      <summary>About this book and its author</summary>
      <p className="ws-about-summary">{about.summary}</p>
      <p className="ws-ai-label">{about.note ?? "Summary written by Claude (AI). The quotations below are the sources."}</p>
      {about.abbreviations && (
        <dl className="ws-abbr">
          {about.abbreviations.map(([k, v]) => (
            <div key={k}>
              <dt>({k})</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
      )}
      {about.quotes?.map((q) => (
        <section key={q.title} className="ws-about-quote">
          <h4>{q.title}</h4>
          {q.ar.map((para, i) => (
            <div key={i} className="ws-pair">
              <p className="ws-pair-ar" dir="rtl" lang="ar">{para}</p>
              {q.en?.[i] && <p className="ws-pair-en">{q.en[i]}</p>}
            </div>
          ))}
          <p className="ws-about-cite">{q.cite}</p>
          <p className="ws-ai-label">English: translation by Claude (AI) — the Arabic is the source.</p>
        </section>
      ))}
    </details>
  );
}

/* ── Lane, laid out for reading (his words unchanged) ───────────────── */

const LANE_SOURCES = {
  S: "al-Jawharī, al-Ṣiḥāḥ",
  K: "al-Fīrūzābādī, al-Qāmūs al-Muḥīṭ",
  TA: "al-Zabīdī, Tāj al-ʿArūs",
  Msb: "al-Fayyūmī, al-Miṣbāḥ al-Munīr",
  M: "Ibn Sīdah, al-Muḥkam",
  O: "al-Ṣaghānī, al-ʿUbāb",
  A: "al-Zamakhsharī, Asās al-Balāgha",
  L: "Ibn Manẓūr, Lisān al-ʿArab",
  T: "al-Azharī, Tahdhīb al-Lugha",
  Mgh: "al-Muṭarrizī, al-Mughrib",
  IAar: "Ibn al-Aʿrābī",
  Bd: "al-Bayḍāwī, tafsīr",
  Jel: "Tafsīr al-Jalālayn",
  Lth: "al-Layth",
  Lh: "al-Liḥyānī",
  Fr: "al-Farrāʾ",
  Az: "al-Azharī",
  As: "al-Aṣmaʿī",
  AZ: "Abū Zayd",
  AA: "Abū ʿAmr al-Shaybānī",
  IAth: "Ibn al-Athīr, al-Nihāya",
  Zj: "al-Zajjāj",
  ISk: "Ibn al-Sikkīt",
  ISd: "Ibn Sīdah",
  Sgh: "al-Ṣaghānī",
  Sb: "Sībawayh",
  MF: "al-Fāsī's notes on al-Qāmūs",
  TK: "Turkish translation of al-Qāmūs",
  KL: "Kanz al-Lugha",
  Ksh: "al-Zamakhsharī, al-Kashshāf",
};
const SOURCE_TOKEN = /^(?:[A-Z][A-Za-z]{0,4}|\*)$/;
const ROMAN = { i: 1, v: 5, x: 10, l: 50, c: 100 };
function romanToInt(r) {
  let total = 0;
  const s = r.toLowerCase();
  for (let i = 0; i < s.length; i += 1) {
    const v = ROMAN[s[i]];
    const next = ROMAN[s[i + 1]] ?? 0;
    total += v < next ? -v : v;
  }
  return total;
}
const FORM_ROMAN = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"];

/** Split one English run into plain text, source chips, Lane's [notes] and Qur'an references. */
function laneEnglish(rawText, key) {
  const text = rawText.replace(/\s?-[A-Z]?\d+-\s?/g, " "); // Lane's section markers (-A2-, -b3-)
  const out = [];
  const re = /\(([^()]{1,60}?)[,;:.]?\)|\[[^[\]]{1,160}\]|Kur(?:-án)?\.?\s*\[?([ivxlc]+)\.\s*(\d+)\]?/gi;
  let last = 0;
  let n = 0;
  for (const m of text.matchAll(re)) {
    const whole = m[0];
    let node = null;
    if (m[2]) {
      const sura = romanToInt(m[2]);
      const meta = getSurahMeta(sura);
      node = (
        <span key={`${key}-${n++}`}>
          {whole}
          {meta && (
            <span
              className="ws-lane-ref"
              title="Lane numbers verses by an older European edition of the Qurʾān; his verse number can differ by one or two from the muṣḥaf."
            >
              {meta.en}
            </span>
          )}
        </span>
      );
    } else if (whole.startsWith("(")) {
      const tokens = m[1].split(/[\s,;]+/).filter(Boolean);
      if (tokens.length && tokens.every((t) => SOURCE_TOKEN.test(t))) {
        node = (
          <span key={`${key}-${n++}`} className="ws-lane-src">
            {tokens.filter((t) => t !== "*").map((t, i) => (
              <abbr key={i} title={LANE_SOURCES[t] ?? "Lane's source"}>{t}</abbr>
            ))}
          </span>
        );
      } else if (/^tropical:?$/i.test(m[1].trim())) {
        node = (
          <span key={`${key}-${n++}`} className="ws-lane-trop" title="Lane marks a figurative (majāz) use">
            figurative
          </span>
        );
      }
    } else if (whole.startsWith("[")) {
      node = (
        <span key={`${key}-${n++}`} className="ws-lane-note" title="Lane's own explanation">
          {whole}
        </span>
      );
    }
    if (!node) continue;
    if (m.index > last) out.push(text.slice(last, m.index));
    out.push(node);
    last = m.index + whole.length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

function LaneRun({ segs, probe, keyBase }) {
  return segs.map(([kind, text], i) => {
    const key = `${keyBase}-${i}`;
    if (kind === "a") {
      return (
        <span
          key={key}
          className={`ws-lane-ar${probe && probe.test(text) ? " is-focus" : ""}`}
          dir="rtl"
          lang="ar"
        >
          {text}
        </span>
      );
    }
    if (kind === "i") {
      return (
        <strong key={key} className="ws-lane-mean">
          {laneEnglish(text, key)}
        </strong>
      );
    }
    return <span key={key}>{laneEnglish(text, key)}</span>;
  });
}

/** One Lane article: headword on top, then each sense (separated by ― in Lane) as its own block. */
function LaneArticle({ word, probe }) {
  let segs = word.segs.map(([k, t]) => [k, t]);
  let form = null;
  let head = word.key || null;

  // Leading verb-form number ("1 رَصَدَهُ") becomes the article label.
  if (segs[0]?.[0] === "t") {
    const m = segs[0][1].match(/^\s*(\d{1,2})\b\s*/);
    if (m && Number(m[1]) <= 12) {
      form = Number(m[1]);
      segs[0] = ["t", segs[0][1].slice(m[0].length)];
    }
  }
  // The headword itself moves into the article header.
  const firstAr = segs.findIndex(([k, t]) => k === "a" || t.trim());
  if (firstAr >= 0 && segs[firstAr][0] === "a") {
    head = segs[firstAr][1];
    segs = segs.filter((_, i) => i !== firstAr);
  }

  // Senses: Lane separates them with "―".
  const senses = [[]];
  for (const [k, t] of segs) {
    if (k !== "a" && t.includes("―")) {
      const parts = t.split("―");
      parts.forEach((part, i) => {
        if (i > 0) senses.push([]);
        if (part.trim()) senses[senses.length - 1].push([k, part]);
      });
    } else {
      senses[senses.length - 1].push([k, t]);
    }
  }
  const clean = senses
    .map((sense) => {
      const trimmed = [...sense];
      while (trimmed.length && trimmed[0][0] === "t" && /^[\s,.;:]*$/.test(trimmed[0][1])) trimmed.shift();
      if (trimmed[0]?.[0] === "t") trimmed[0] = ["t", trimmed[0][1].replace(/^[\s,.;:]+/, "")];
      return trimmed;
    })
    .filter((sense) => sense.some(([, t]) => t.trim()));

  return (
    <section className="ws-lane-article">
      <header className="ws-lane-head">
        {head && (
          <span className={`ws-lane-headword${probe && probe.test(head) ? " is-focus" : ""}`} dir="rtl" lang="ar">
            {head}
          </span>
        )}
        {form && <span className="ws-lane-form">Verb · form {FORM_ROMAN[form] ?? form}</span>}
      </header>
      {clean.map((sense, i) => (
        <p key={i} className="ws-lane-sense">
          <LaneRun segs={sense} probe={probe} keyBase={`s${i}`} />
        </p>
      ))}
    </section>
  );
}

function LaneKey() {
  return (
    <details className="ws-about ws-lane-key">
      <summary>How to read Lane</summary>
      <ul>
        <li><strong className="ws-lane-mean">Bold</strong> — Lane’s English meaning (italic in his book).</li>
        <li><span className="ws-lane-note">[Grey brackets]</span> — Lane’s own explanation, added to the source.</li>
        <li><span className="ws-lane-src"><abbr>S</abbr><abbr>K</abbr></span> — the Arabic dictionaries he took it from; tap or hover for the name.</li>
        <li><span className="ws-lane-trop">figurative</span> — Lane’s “tropical:”, a figurative (majāz) use.</li>
        <li><em>aor.</em> = the present-tense form · <em>inf. n.</em> = verbal noun (maṣdar) · <em>i. q.</em> = means the same as · <em>syn.</em> = synonym · <em>pl.</em> = plural</li>
        <li>↓ — that word has its own article in this root.</li>
        <li><span className="ws-lane-ref">Al-Fajr</span> — the sūrah name, added beside Lane’s Roman-numeral references. His verse numbers follow an older European edition and can differ by one or two from the muṣḥaf.</li>
      </ul>
      <p className="ws-ai-label">This key is written by Claude (AI) from Lane’s conventions; Lane’s text above is unchanged.</p>
    </details>
  );
}

/** Lane articles to show: the opening, then the articles where this word is headed or discussed. */
function laneFocus(words, probe) {
  if (!probe) return [0];
  const isRedirect = (w) =>
    w.segs.length <= 6 && w.segs.some(([k, t]) => k !== "a" && /\bsee\b/.test(t));
  const keyHits = [];
  const bodyHits = [];
  words.forEach((w, i) => {
    if (i === 0) return;
    if (isRedirect(w)) return;
    if (probe.test(w.key)) keyHits.push(i);
    else if (w.segs.some(([k, t]) => k === "a" && probe.test(t))) bodyHits.push(i);
  });
  return [0, ...[...keyHits, ...bodyHits].slice(0, 2)].sort((a, b) => a - b);
}

function LaneCard({ entry, focusPattern }) {
  const [full, setFull] = useState(false);
  const words = entry.words ?? [];
  const probe = focusPattern ? new RegExp(focusPattern.source) : null;
  const shown = full || words.length <= 3 ? words.map((_, i) => i) : laneFocus(words, probe);
  const trimmed = shown.length < words.length;
  const [p1, p2] = entry.pages ?? [];
  const where = p1 ? `p. ${p1}${p2 && p2 !== p1 ? `–${p2}` : ""}` : "";

  return (
    <article className="ws-entry ws-entry--lane">
      <header className="ws-entry-head">
        <div>
          <p className="ws-entry-title">Lane’s Arabic-English Lexicon</p>
          <p className="ws-entry-author">
            Edward William Lane (d. 1876) · <span>English, from the classical dictionaries</span>
          </p>
        </div>
        <p className="ws-lane-root" dir="rtl" lang="ar">{entry.head}</p>
      </header>
      <div className="ws-lane-body">
        {shown.map((i, n) => (
          <div key={i}>
            {n > 0 && trimmed && shown[n] - shown[n - 1] > 1 && (
              <p className="ws-gap ws-lane-skip">… other words from this root …</p>
            )}
            <LaneArticle word={words[i]} probe={probe} />
          </div>
        ))}
        {trimmed && <p className="ws-gap ws-lane-skip">… more in Lane’s full entry</p>}
      </div>
      <LaneKey />
      <footer className="ws-cite">
        <span>
          Lane, <cite>An Arabic-English Lexicon</cite> (London, 1863–1893), root «{entry.head}»
          {where ? `, ${where}` : ""}. Letters in brackets name his Arabic sources.
        </span>
        <span className="ws-cite-links">
          {words.length > 3 && (
            <button type="button" onClick={() => setFull((v) => !v)}>
              {full ? "Show the relevant part" : "Read Lane’s full entry"}
            </button>
          )}
          <a href="https://github.com/laneslexicon/lexicon_xml" target="_blank" rel="noreferrer">
            Digital text (Perseus / Lane’s Lexicon project, CC BY-SA)
          </a>
        </span>
      </footer>
      <AboutBook bookId="lane" />
    </article>
  );
}

function EntryCard({ entry, focusPattern }) {
  const book = LEXICON_BOOKS[entry.book];
  const [full, setFull] = useState(false);
  const paras = entry.text.split("\n").filter(Boolean);
  const isLong = entry.text.length > 1400;
  const view = excerpt(paras, focusPattern, isLong);
  const idx = full ? paras.map((_, i) => i) : view.idx;
  const where = pageLabel(entry.pages, book.hasVolumes);

  return (
    <details className="ws-entry ws-entry--ar">
      <summary className="ws-entry-head">
        <div>
          <p className="ws-entry-title">{book.title}</p>
          <p className="ws-entry-author">
            {book.author} · <span>{book.role}</span>
          </p>
        </div>
        <p className="ws-entry-title-ar" dir="rtl" lang="ar">
          {book.titleAr}
        </p>
      </summary>

      <div className="ws-quote-wrap">
        {idx.map((i, n) => (
          <div key={i} className="ws-pair">
            <p className="ws-pair-ar ws-quote" dir="rtl" lang="ar">
              {!full && view.trimmed && n === 1 && view.gapBefore && <span className="ws-gap">… </span>}
              <Highlighted text={paras[i]} pattern={focusPattern} />
            </p>
          </div>
        ))}
        {!full && view.trimmed && <p className="ws-gap ws-gap--ar">…</p>}
      </div>

      <footer className="ws-cite">
        <span>
          {book.authorAr}، <cite>{book.titleAr}</cite> — entry «{entry.head}»
          {where ? `, ${where}` : ""}. {book.edition}.
        </span>
        <span className="ws-cite-links">
          {(isLong || view.trimmed) && (
            <button type="button" onClick={() => setFull((v) => !v)}>
              {full ? "Show the relevant part" : "Read the full entry"}
            </button>
          )}
          <a href={book.source} target="_blank" rel="noreferrer">
            Digital text (OpenITI)
          </a>
        </span>
      </footer>
      <AboutBook bookId={entry.book} />
    </details>
  );
}

export default function WordStudyPanel({ word, rootInfo, onClose }) {
  const [state, setState] = useState({ status: "idle", data: null, fileId: null });
  const fileId = rootInfo?.fileId ?? null;

  useEffect(() => {
    if (!fileId) return undefined;
    let alive = true;
    loadRootFile(fileId)
      .then((data) => alive && setState({ status: "ready", data, fileId }))
      .catch(() => alive && setState({ status: "error", data: null, fileId }));
    return () => {
      alive = false;
    };
  }, [fileId]);

  const focusPattern = useMemo(
    () => wordPattern(rootInfo?.lemma || word?.ar),
    [rootInfo?.lemma, word?.ar],
  );

  const loading = fileId && state.fileId !== fileId;
  const rootLetters = rootInfo ? [...rootInfo.root].join(" ") : null;

  return (
    <section className="ws-panel" aria-live="polite" aria-label="Word study">
      <header className="ws-head">
        <div className="ws-word" dir="rtl" lang="ar">
          {word.ar}
        </div>
        <div className="ws-word-meta">
          {word.en && <p className="ws-gloss">{word.en}</p>}
          {word.tr && <p className="ws-tr">{word.tr}</p>}
        </div>
        {rootInfo && (
          <dl className="ws-root">
            <div>
              <dt>Root</dt>
              <dd dir="rtl" lang="ar">{rootLetters}</dd>
            </div>
            {rootInfo.lemma && (
              <div>
                <dt>Dictionary form</dt>
                <dd dir="rtl" lang="ar">{rootInfo.lemma}</dd>
              </div>
            )}
          </dl>
        )}
        <button type="button" className="ws-close" onClick={onClose} aria-label="Close word study">
          ×
        </button>
      </header>

      {!rootInfo && (
        <p className="ws-note">
          This word has no three-letter root — it is a particle or pronoun, so the root
          dictionaries do not list it.
        </p>
      )}

      {rootInfo && loading && <p className="ws-note">Opening the dictionaries…</p>}
      {rootInfo && !loading && state.status === "error" && (
        <p className="ws-note">
          The dictionary entries could not be loaded. Check your connection and tap the word again.
        </p>
      )}
      {rootInfo && !loading && state.status === "ready" && state.data && (
        <>
          {state.data.entries.map((entry) =>
            entry.book === "lane" ? (
              <LaneCard key="lane" entry={entry} focusPattern={focusPattern} />
            ) : null,
          )}
          {state.data.entries.some((e) => e.book !== "lane") && (
            <p className="ws-section-label">
              The original Arabic dictionaries — tap one to open it
            </p>
          )}
          {state.data.entries.map((entry) =>
            entry.book !== "lane" ? (
              <EntryCard key={entry.book} entry={entry} focusPattern={focusPattern} />
            ) : null,
          )}
          <p className="ws-foot">
            Dictionary text is quoted word for word from the printed editions named under each
            entry (editors’ footnote numbers left out). Root and dictionary form: Quranic Arabic
            Corpus (corpus.quran.com). Arabic digital texts: OpenITI / al-Maktaba al-Shāmila. Lane:
            Perseus Digital Library / Lane’s Lexicon project.
          </p>
        </>
      )}
    </section>
  );
}

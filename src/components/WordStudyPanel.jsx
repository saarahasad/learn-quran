import { useEffect, useMemo, useState } from "react";
import { LEXICON_AUTHORS } from "../data/lexiconAuthors.js";
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

function LaneText({ segs, probe }) {
  return segs.map(([kind, text], i) =>
    kind === "a" ? (
      <span
        key={i}
        className={`ws-lane-ar${probe && probe.test(text) ? " is-focus" : ""}`}
        dir="rtl"
        lang="ar"
      >
        {text}
      </span>
    ) : kind === "i" ? (
      <em key={i}>{text}</em>
    ) : (
      <span key={i}>{text}</span>
    ),
  );
}

/** Lane articles to show: the opening, then the articles where this word is headed or discussed. */
function laneFocus(words, probe) {
  if (!probe) return [0];
  const isRedirect = (w) => w.segs.length <= 4 && w.segs.some(([k, t]) => k !== "a" && /\bsee\b/.test(t));
  const keyHits = [];
  const bodyHits = [];
  words.forEach((w, i) => {
    if (i === 0) return;
    if (probe.test(w.key) && !isRedirect(w)) keyHits.push(i);
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
          <p key={i}>
            {n > 0 && trimmed && shown[n] - shown[n - 1] > 1 && <span className="ws-gap">… </span>}
            <LaneText segs={words[i].segs} probe={probe} />
          </p>
        ))}
        {trimmed && <p className="ws-gap">…</p>}
      </div>
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
  const tr = entry.tr ?? [];
  const hasTranslation = idx.some((i) => tr[i]);

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
            {tr[i] && <p className="ws-pair-en">{tr[i]}</p>}
          </div>
        ))}
        {!full && view.trimmed && <p className="ws-gap ws-gap--ar">…</p>}
        {hasTranslation && (
          <p className="ws-ai-label">
            English under each paragraph: translation by Claude (AI). The Arabic is the source — check
            against it.
          </p>
        )}
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

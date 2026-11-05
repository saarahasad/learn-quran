import { useEffect, useMemo, useState } from "react";
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

/** For long entries (Lisān), show the opening plus the paragraph that discusses this word. */
function excerpt(text, pattern, isLong) {
  const paras = text.split("\n").filter(Boolean);
  if (!isLong || paras.length <= 2) return { parts: paras, trimmed: false };
  const first = paras[0];
  let hit = -1;
  if (pattern) {
    const probe = new RegExp(pattern.source); // non-global copy: no lastIndex state
    hit = paras.findIndex((p, i) => i > 0 && probe.test(p));
  }
  const parts = hit > 0 ? [first, paras[hit]] : paras.slice(0, 2);
  return { parts, trimmed: true, gapBefore: hit > 1 };
}

function EntryCard({ entry, focusPattern }) {
  const book = LEXICON_BOOKS[entry.book];
  const [full, setFull] = useState(false);
  const isLong = entry.text.length > 1400;
  const view = excerpt(entry.text, focusPattern, isLong);
  const parts = full ? entry.text.split("\n").filter(Boolean) : view.parts;
  const where = pageLabel(entry.pages, book.hasVolumes);

  return (
    <article className="ws-entry">
      <header className="ws-entry-head">
        <div>
          <p className="ws-entry-title">{book.title}</p>
          <p className="ws-entry-author">
            {book.author} · <span>{book.role}</span>
          </p>
        </div>
        <p className="ws-entry-title-ar" dir="rtl" lang="ar">
          {book.titleAr}
        </p>
      </header>

      <blockquote className="ws-quote" dir="rtl" lang="ar">
        {parts.map((p, i) => (
          <p key={i}>
            {!full && view.trimmed && i === 1 && view.gapBefore && <span className="ws-gap">… </span>}
            <Highlighted text={p} pattern={focusPattern} />
          </p>
        ))}
        {!full && view.trimmed && <p className="ws-gap">…</p>}
      </blockquote>

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
    </article>
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
          {state.data.entries.map((entry) => (
            <EntryCard key={entry.book} entry={entry} focusPattern={focusPattern} />
          ))}
          <p className="ws-foot">
            Quoted word for word from the printed editions named under each entry; the editors’
            footnote numbers are left out. Root and dictionary form: Quranic Arabic Corpus
            (corpus.quran.com). Digital texts: OpenITI / al-Maktaba al-Shāmila.
          </p>
        </>
      )}
    </section>
  );
}

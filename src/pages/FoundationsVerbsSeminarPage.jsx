import { Fragment, useEffect, useRef, useState } from "react";
import {
  SEMINAR_META,
  SEMINAR_SLIDES,
  resolveSeminarChapter,
} from "../data/foundationsVerbsSeminar.js";
import AuthorLifeTimeline from "../components/ajrumiyyah/AuthorLifeTimeline.jsx";
import { ALAMAT_MUARABAT_SUMMARY } from "../data/alamatIrabMindMap.js";
import "../styles/seminar-foundations.css";
import "../styles/author-life-timeline.css";

const MUARABAT_TYPE_EN = {
  "الِاسْمُ الْمُفْرَدُ": "singular noun",
  "جَمْعُ التَّكْسِيرِ": "broken plural",
  "جَمْعُ الْمُؤَنَّثِ السَّالِمِ": "sound fem. plural",
  "الْمُضَارِعُ بِلَا اتِّصَالٍ": "bare present",
  "الْمُثَنَّى": "dual",
  "جَمْعُ الْمُذَكَّرِ السَّالِمِ": "sound masc. plural",
  "الْأَسْمَاءُ الْخَمْسَةُ": "five nouns",
  "الْأَفْعَالُ الْخَمْسَةُ": "five verbs",
};

function muarabatExceptionKey(caseAr) {
  if (caseAr === "النَّصْب") return "nasb";
  if (caseAr === "الْجَزْم") return "jazm";
  if (caseAr === "الْخَفْض") return "khafd";
  return null;
}

function SemMuarabatSign({ value, naLabel, isException, caseKey }) {
  if (!value) {
    return (
      <span className="sem-muarabat-na" title={naLabel || "Not used"}>
        —
      </span>
    );
  }
  return (
    <span
      className={[
        "sem-muarabat-sign",
        caseKey ? `is-${caseKey}` : "",
        isException ? "is-ex" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {value}
      {isException ? (
        <span className="sem-muarabat-star" aria-hidden>
          ★
        </span>
      ) : null}
    </span>
  );
}

function SemMuarabatExceptionRow({ ex, typeLabel, colSpan, caseKey, featured = false }) {
  if (!ex) return null;
  const kindLabel =
    ex.kind === "subtype"
      ? "استثناء · المعتلّ الآخر"
      : ex.kind === "condition"
        ? "استثناء · ممنوع من الصرف"
        : "استثناء · علامة النصب";
  const kindEn =
    ex.kind === "subtype"
      ? "Weak-ending verbs only"
      : ex.kind === "condition"
        ? "Diptote nouns (لا ينصرف)"
        : "Sound feminine plural";
  return (
    <tr
      className={`sem-muarabat-ex-row${caseKey ? ` is-${caseKey}` : ""}${
        featured ? " is-featured" : ""
      }`}
    >
      <td colSpan={colSpan}>
        <div className={`sem-muarabat-ex${featured ? " sem-muarabat-ex--featured" : ""}`}>
          <div className="sem-muarabat-ex__badge-wrap">
            <span className="sem-muarabat-ex__badge" aria-hidden>
              ★ {kindLabel}
            </span>
            <span className="sem-muarabat-ex__badge-en">{kindEn}</span>
          </div>
          <div className="sem-muarabat-ex__body" dir="rtl">
            <p className="sem-muarabat-ex__who">
              <strong>{typeLabel}</strong>
              <span> · {ex.caseAr}</span>
            </p>
            {ex.appliesWhenAr ? (
              <p className="sem-muarabat-ex__when">{ex.appliesWhenAr}</p>
            ) : null}
            {ex.appliesWhenEn || ex.defEn ? (
              <p className="sem-muarabat-ex__en" dir="ltr">
                {ex.appliesWhenEn || ex.defEn}
              </p>
            ) : null}
            <p className="sem-muarabat-ex__swap">
              <span className="sem-muarabat-ex__expected">{ex.expected}</span>
              <span className="sem-muarabat-ex__arrow" aria-hidden>
                →
              </span>
              <span className="sem-muarabat-ex__actual">{ex.actual}</span>
            </p>
            {ex.matnAr ? <p className="sem-muarabat-ex__matn">{ex.matnAr}</p> : null}
          </div>
        </div>
      </td>
    </tr>
  );
}

function toneClass(tone) {
  if (!tone || tone === "leaf") return "";
  return `sem-tone-${tone}`;
}

function cycleTone(i) {
  return `c${(i % 5) + 1}`;
}

/** Drop redundant "Chapter N" from kickers when the badge already shows it. */
function cleanKicker(kicker, chapter) {
  if (!kicker) return null;
  if (!chapter) return kicker;
  const cleaned = kicker
    .replace(/^Chapter\s+\d+\s*[·•\-–]?\s*/i, "")
    .trim();
  return cleaned || null;
}

/** Highlight only when needles are passed explicitly — never spray random words. */
function highlightText(text, needles = []) {
  if (!text || !needles.length) return text;
  const list = [...needles]
    .filter(Boolean)
    .sort((a, b) => b.length - a.length);
  if (!list.length) return text;
  const parts = [];
  let rest = text;
  let key = 0;
  while (rest.length) {
    let hitAt = -1;
    let hit = null;
    for (const needle of list) {
      const i = rest.indexOf(needle);
      if (i !== -1 && (hitAt === -1 || i < hitAt)) {
        hitAt = i;
        hit = needle;
      }
    }
    if (hitAt === -1 || !hit) {
      parts.push(rest);
      break;
    }
    if (hitAt > 0) parts.push(rest.slice(0, hitAt));
    parts.push(
      <mark key={`hl-${key++}`} className="sem-hl">
        {hit}
      </mark>,
    );
    rest = rest.slice(hitAt + hit.length);
  }
  return parts;
}

function SlideKicker({ children }) {
  if (!children) return null;
  return <p className="sem-kicker">{children}</p>;
}

/** Split mixed EN/AR strings so Arabic runs get proper font + word spacing. */
function MixedText({ text }) {
  if (!text) return null;
  const parts = String(text).split(/([\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF\u064B-\u065F\u0670]+(?:\s+[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF\u064B-\u065F\u0670]+)*)/g);
  return parts.map((part, i) => {
    if (!part) return null;
    if (/[\u0600-\u06FF]/.test(part)) {
      return (
        <span key={i} className="sem-inline-ar" dir="rtl" lang="ar">
          {part}
        </span>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

function SlideTitle({ slide }) {
  if (slide.titleAr) {
    return (
      <div className="sem-title-stack">
        <h2 className="sem-title sem-title--ar" dir="rtl" lang="ar">
          {slide.titleAr}
        </h2>
        {slide.title ? (
          <p className="sem-title-sub">
            <MixedText text={slide.title} />
          </p>
        ) : null}
      </div>
    );
  }
  if (!slide.title) return null;
  return (
    <h2 className="sem-title">
      <MixedText text={slide.title} />
    </h2>
  );
}

function HierarchyNode({ node, toneHint = "c2", stackChildren = false }) {
  const kids = node.children || [];
  const hasKids = kids.length > 0;
  const isLeaf = Boolean(node.leaf) || !hasKids;
  const tone = node.tone && node.tone !== "leaf" ? node.tone : toneHint;
  const equalCards = Boolean(node.equalCards) && hasKids;
  const boxClass = [
    "sem-hbox",
    isLeaf ? "sem-hbox--leaf" : "sem-hbox--branch",
    node.def ||
    node.defAr ||
    node.defEn ||
    node.blocks?.length ||
    node.conditions ||
    node.examples?.length
      ? "sem-hbox--rich"
      : "",
    node.blocks?.length ||
    node.defAr ||
    node.defEn ||
    node.conditions ||
    node.examples?.length
      ? "sem-hbox--card"
      : "",
    toneClass(tone),
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={`sem-hnode${stackChildren ? " sem-hnode--stack" : ""}`}>
      <div className={boxClass}>
        {node.n ? (
          <span className="sem-hbox__n" aria-hidden>
            {node.n}
          </span>
        ) : null}
        <p className="sem-hbox__ar">{node.ar}</p>
        {node.en ? <p className="sem-hbox__en">{node.en}</p> : null}
        {node.defAr || node.defEn || node.def ? (
          <div className="sem-hbox__explain">
            {node.defAr ? (
              <p className="sem-hbox__def-ar" dir="rtl" lang="ar">
                {node.defAr}
              </p>
            ) : null}
            {node.defEn || node.def ? (
              <p className="sem-hbox__def-en">{node.defEn || node.def}</p>
            ) : null}
          </div>
        ) : null}
        {node.conditions?.length ? (
          <ol className="sem-hbox__conds" dir="rtl" lang="ar">
            {node.conditions.map((c, i) => (
              <li key={`${c.ar}-${i}`} className="sem-hbox__cond">
                <span className="sem-hbox__cond-n" aria-hidden>
                  {c.n || `${i + 1}`}
                </span>
                <div className="sem-hbox__cond-body">
                  <p className="sem-hbox__cond-ar">{c.ar}</p>
                  {c.en ? <p className="sem-hbox__cond-en">{c.en}</p> : null}
                </div>
              </li>
            ))}
          </ol>
        ) : null}
        {node.examples?.length ? (
          <ul className="sem-hbox__examples">
            {node.examples.map((ex) => {
              const ar = typeof ex === "string" ? ex : ex.ar;
              const en = typeof ex === "string" ? null : ex.en;
              return (
                <li key={ar} className="sem-hbox__example">
                  <span className="sem-hbox__example-ar" dir="rtl" lang="ar">
                    {ar}
                  </span>
                  {en ? <span className="sem-hbox__example-en">{en}</span> : null}
                </li>
              );
            })}
          </ul>
        ) : node.ex ? (
          <div className="sem-hbox__ex-wrap">
            <p className="sem-hbox__ex" dir="rtl" lang="ar">
              {node.ex}
            </p>
            {node.exEn ? <p className="sem-hbox__ex-en">{node.exEn}</p> : null}
          </div>
        ) : null}
        {node.blocks?.length ? (
          <div className="sem-hbox__blocks">
            {node.blocks.map((b, i) => (
              <div
                key={`${b.kind}-${b.barrier || i}`}
                className={`sem-hbox__block ${
                  b.kind === "مُقَدَّرَة"
                    ? "sem-hbox__block--hidden"
                    : "sem-hbox__block--open"
                }`}
              >
                <p className="sem-hbox__block-label">
                  <span dir="rtl" lang="ar">
                    {b.kind}
                  </span>
                  {b.barrier ? (
                    <>
                      {" · "}
                      <span className="sem-hbox__barrier" dir="rtl" lang="ar">
                        {b.barrier}
                      </span>
                    </>
                  ) : null}
                  {b.en ? (
                    <span className="sem-hbox__block-en"> — {b.en}</span>
                  ) : null}
                </p>
                {b.ex ? (
                  <p className="sem-hbox__block-ex" dir="rtl" lang="ar">
                    {b.ex}
                  </p>
                ) : null}
                {b.note ? (
                  <p className="sem-hbox__block-note">{b.note}</p>
                ) : null}
              </div>
            ))}
          </div>
        ) : null}
      </div>
      {hasKids ? (
        equalCards ? (
          <div
            className="sem-hcard-row"
            style={{
              gridTemplateColumns: `repeat(${kids.length}, minmax(0, 1fr))`,
            }}
          >
            {kids.map((child, i) => {
              const childTone =
                child.tone && child.tone !== "leaf"
                  ? child.tone
                  : cycleTone(i);
              return (
                <div key={`${child.ar}-${i}`} className="sem-hcard-row__item">
                  <HierarchyNode node={child} toneHint={childTone} />
                </div>
              );
            })}
          </div>
        ) : (
          <>
            <div className="sem-hstem" aria-hidden />
            <div
              className={[
                "sem-hchildren",
                kids.length === 1 ? "sem-hchildren--one" : "",
                stackChildren ? "sem-hchildren--stack" : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {kids.map((child, i) => {
                const childTone =
                  child.tone && child.tone !== "leaf"
                    ? child.tone
                    : cycleTone(i);
                return (
                  <div
                    key={`${child.ar}-${child.ex || child.en || i}`}
                    className={`sem-hbranch${stackChildren ? " sem-hbranch--stack" : ""}`}
                  >
                    <HierarchyNode node={child} toneHint={childTone} />
                  </div>
                );
              })}
            </div>
          </>
        )
      ) : null}
    </div>
  );
}

function HierarchyTree({ root, stackFirst = false, hideRoot = false }) {
  if (!root) return null;
  if (hideRoot && root.children?.length) {
    return (
      <div className={`sem-hierarchy${stackFirst ? " sem-hierarchy--stack" : ""}`}>
        <div
          className={[
            "sem-hchildren",
            stackFirst ? "sem-hchildren--stack" : "",
            root.children.length === 1 ? "sem-hchildren--one" : "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {root.children.map((child, i) => {
            const childTone =
              child.tone && child.tone !== "leaf" ? child.tone : cycleTone(i);
            return (
              <div
                key={`${child.ar}-${child.en || i}`}
                className={`sem-hbranch${stackFirst ? " sem-hbranch--stack" : ""}`}
              >
                <HierarchyNode node={child} toneHint={childTone} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  return (
    <div className={`sem-hierarchy${stackFirst ? " sem-hierarchy--stack" : ""}`}>
      <HierarchyNode
        node={root}
        toneHint={root.tone && root.tone !== "leaf" ? root.tone : "c2"}
        stackChildren={stackFirst}
      />
    </div>
  );
}

function TreeChart({ root, branches }) {
  return (
    <HierarchyTree
      root={{
        ...root,
        children: (branches || []).map((b) => ({
          ...b,
          leaf: !b.children?.length,
        })),
      }}
    />
  );
}

function SlideBody({ slide }) {
  switch (slide.kind) {
    case "title":
      return (
        <div className="sem-slide sem-slide--title">
          <div className="sem-matn-card">
            <p className="sem-matn-card__label">Matn</p>
            <p className="sem-matn-card__ar">{slide.matnAr}</p>
            <p className="sem-matn-card__en">{slide.matnEn}</p>
            <div className="sem-matn-card__author">
              <p className="sem-matn-card__ar sem-matn-card__ar--author">
                {slide.authorAr}
              </p>
              <p className="sem-matn-card__en">{slide.authorEn}</p>
            </div>
          </div>
        </div>
      );

    case "author-timeline":
      return (
        <div className="sem-slide sem-slide--timeline">
          <SlideKicker>{slide.kicker}</SlideKicker>
          <AuthorLifeTimeline variant="seminar" />
        </div>
      );

    case "tree":
      return (
        <div className="sem-slide sem-slide--hierarchy sem-slide--scroll">
          <SlideKicker>{slide.kicker}</SlideKicker>
          <SlideTitle slide={slide} />
          {slide.lead ? <p className="sem-lead">{slide.lead}</p> : null}
          {slide.matnAr ? (
            <div className="sem-matn">
              <p className="sem-matn__ar" dir="rtl" lang="ar">
                {slide.matnAr}
              </p>
            </div>
          ) : null}
          <TreeChart root={slide.root} branches={slide.branches} />
          {slide.note ? <p className="sem-callout">{slide.note}</p> : null}
        </div>
      );

    case "change-kinds":
      return (
        <div className="sem-slide sem-slide--scroll">
          <SlideKicker>{slide.kicker}</SlideKicker>
          <SlideTitle slide={slide} />
          {slide.lead ? <p className="sem-lead">{slide.lead}</p> : null}

          <div className="sem-ckinds">
            {slide.kinds.map((k) => (
              <article
                key={k.ar}
                className={`sem-ckind ${toneClass(k.tone)}`}
              >
                <p className="sem-ckind__ar" dir="rtl" lang="ar">
                  {k.ar}
                </p>
                <p className="sem-ckind__en">{k.en}</p>
                <p className="sem-ckind__def-ar" dir="rtl" lang="ar">
                  {k.defAr}
                </p>
                <p className="sem-ckind__def-en">{k.defEn}</p>
                {k.examples?.length ? (
                  <ul className="sem-ckind__exs">
                    {k.examples.map((ex) => (
                      <li key={ex.ar}>
                        <strong dir="rtl" lang="ar">
                          {ex.ar}
                        </strong>
                        <span>{ex.en}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>

          {slide.barriers?.length ? (
            <section className="sem-ck-section">
              <h3 className="sem-ck-section__title">{slide.barriersTitle}</h3>
              <ol className="sem-ck-barriers">
                {slide.barriers.map((b) => (
                  <li
                    key={b.ar}
                    className={`sem-ck-barrier ${toneClass(b.tone)}`}
                  >
                    <div className="sem-ck-barrier__head">
                      <p className="sem-ck-barrier__ar" dir="rtl" lang="ar">
                        {b.ar}
                      </p>
                      <p className="sem-ck-barrier__en">{b.en}</p>
                    </div>
                    <p className="sem-ck-barrier__def">{b.defEn}</p>
                    <p className="sem-ck-barrier__ex" dir="rtl" lang="ar">
                      {b.ex}
                    </p>
                  </li>
                ))}
              </ol>
              {slide.sampleAr ? (
                <div className="sem-ck-sample">
                  <p className="sem-ck-sample__ar" dir="rtl" lang="ar">
                    {slide.sampleAr}
                  </p>
                  <p className="sem-ck-sample__en">{slide.sampleEn}</p>
                </div>
              ) : null}
            </section>
          ) : null}

          {slide.types?.length ? (
            <section className="sem-ck-section">
              <h3 className="sem-ck-section__title">{slide.typesTitle}</h3>
              <div className="sem-ck-types">
                {slide.types.map((t) => (
                  <div
                    key={t.ar}
                    className={`sem-ck-type ${toneClass(t.tone)}`}
                  >
                    {t.barrier ? (
                      <p className="sem-ck-type__barrier">
                        Barrier:{" "}
                        <span dir="rtl" lang="ar">
                          {t.barrier}
                        </span>
                      </p>
                    ) : null}
                    <p className="sem-ck-type__ar" dir="rtl" lang="ar">
                      {t.ar}
                    </p>
                    {t.defAr ? (
                      <p className="sem-ck-type__def-ar" dir="rtl" lang="ar">
                        {highlightText(t.defAr, t.highlightAr || [t.barrier])}
                      </p>
                    ) : null}
                    <p className="sem-ck-type__en">
                      {highlightText(
                        t.defEn || t.en,
                        t.highlightEn || [],
                      )}
                    </p>
                    {t.ex ? (
                      <p className="sem-ck-type__ex" dir="rtl" lang="ar">
                        {t.ex}
                      </p>
                    ) : null}
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          {slide.tableRows?.length ? (
            <section className="sem-ck-section">
              <h3 className="sem-ck-section__title">{slide.tableTitle}</h3>
              <div className="sem-ck-table-wrap">
                <table className="sem-ck-table">
                  <thead>
                    <tr>
                      {slide.tableHeaders.map((h) => (
                        <th key={h}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {slide.tableRows.map((row) => (
                      <tr key={row.ar}>
                        <td className="sem-ck-table__ar" dir="rtl" lang="ar">
                          {row.ar}
                        </td>
                        <td>{row.en}</td>
                        <td className="sem-ck-table__ar" dir="rtl" lang="ar">
                          {row.barrier}
                        </td>
                        <td className="sem-ck-table__ar" dir="rtl" lang="ar">
                          {row.type}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          ) : null}
        </div>
      );

    case "term-guide":
      return (
        <div className="sem-slide sem-slide--scroll">
          <SlideKicker>{slide.kicker}</SlideKicker>
          <SlideTitle slide={slide} />
          {slide.lead ? <p className="sem-lead">{slide.lead}</p> : null}
          {slide.matnAr ? (
            <div className="sem-matn">
              <p className="sem-matn__ar">{slide.matnAr}</p>
              {slide.gloss ? (
                <p className="sem-matn__en">{slide.gloss}</p>
              ) : null}
            </div>
          ) : null}
          <div className="sem-tg">
            {slide.sections.map((sec) => (
              <section
                key={sec.ar}
                className={`sem-tg-sec ${toneClass(sec.tone)}`}
              >
                <header className="sem-tg-sec__head">
                  <p className="sem-tg-sec__ar" dir="rtl" lang="ar">
                    {sec.ar}
                  </p>
                  <p className="sem-tg-sec__en">{sec.en}</p>
                </header>
                <div className="sem-tg-terms">
                  {sec.terms.map((term) => (
                    <article key={term.ar} className="sem-tg-term">
                      <p className="sem-tg-term__ar" dir="rtl" lang="ar">
                        {term.ar}
                      </p>
                      <p className="sem-tg-term__en">{term.en}</p>
                      {term.defEn ? (
                        <p className="sem-tg-term__def">{term.defEn}</p>
                      ) : null}
                      {term.examples?.length ? (
                        <ul className="sem-tg-exs">
                          {term.examples.map((ex) => (
                            <li key={ex.ar}>
                              <strong dir="rtl" lang="ar">
                                {ex.ar}
                              </strong>
                              {ex.en ? <span>{ex.en}</span> : null}
                            </li>
                          ))}
                        </ul>
                      ) : null}
                      {term.surface?.length ? (
                        <div className="sem-tg-surface">
                          {term.surface.map((s, i) => (
                            <div
                              key={`${s.kind}-${s.barrier || i}`}
                              className={`sem-tg-surf ${
                                s.kind === "مُقَدَّرَة"
                                  ? "sem-tg-surf--hidden"
                                  : "sem-tg-surf--open"
                              }`}
                            >
                              <p className="sem-tg-surf__label">
                                <span dir="rtl" lang="ar">
                                  {s.kind}
                                </span>
                                {s.barrier ? (
                                  <>
                                    {" · "}
                                    <mark className="sem-hl" dir="rtl" lang="ar">
                                      {s.barrier}
                                    </mark>
                                  </>
                                ) : null}
                                {s.en ? (
                                  <span className="sem-tg-surf__en">
                                    {" — "}
                                    {s.en}
                                  </span>
                                ) : null}
                              </p>
                              {s.examples?.length ? (
                                <ul className="sem-tg-exs sem-tg-exs--tight">
                                  {s.examples.map((ex) => (
                                    <li key={ex.ar}>
                                      <strong dir="rtl" lang="ar">
                                        {ex.ar}
                                      </strong>
                                      {ex.en ? <span>{ex.en}</span> : null}
                                    </li>
                                  ))}
                                </ul>
                              ) : null}
                            </div>
                          ))}
                        </div>
                      ) : null}
                      {term.note ? (
                        <p className="sem-tg-term__note">{term.note}</p>
                      ) : null}
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      );

    case "chapters":
      return (
        <div className="sem-slide sem-slide--chapters">
          <SlideKicker>{slide.kicker}</SlideKicker>
          <SlideTitle slide={slide} />
          <div className="sem-chapter-stack">
            {slide.chapters.map((ch) => (
              <section
                key={ch.ar}
                className={`sem-chapter-row ${toneClass(ch.tone)}`}
              >
                <header className="sem-chapter-row__head">
                  <span className="sem-chapter-row__n">{ch.n}</span>
                  <div className="sem-chapter-row__titles">
                    <p className="sem-chapter-row__ar">{ch.ar}</p>
                    {ch.en ? (
                      <p className="sem-chapter-row__en">{ch.en}</p>
                    ) : null}
                  </div>
                </header>
                {ch.paragraphs?.length ? (
                  <div className="sem-chapter-row__poem" dir="rtl" lang="ar">
                    {ch.paragraphs.map((para) => (
                      <p key={para} className="sem-chapter-row__para">
                        {para}
                      </p>
                    ))}
                  </div>
                ) : ch.lines?.length ? (
                  <div className="sem-chapter-row__poem" dir="rtl" lang="ar">
                    {ch.lines.map((line) => (
                      <p key={line} className="sem-chapter-row__para">
                        {line}
                      </p>
                    ))}
                  </div>
                ) : ch.poem ? (
                  <div className="sem-chapter-row__poem" dir="rtl" lang="ar">
                    <p className="sem-chapter-row__para">{ch.poem}</p>
                  </div>
                ) : null}
              </section>
            ))}
          </div>
        </div>
      );

    case "pair-defs":
      return (
        <div className="sem-slide">
          <SlideKicker>{slide.kicker}</SlideKicker>
          <SlideTitle slide={slide} />
          {slide.rootAr ? (
            <p className="sem-pair-root" dir="rtl" lang="ar">
              {slide.rootAr}
            </p>
          ) : null}
          <div className="sem-pair">
            {slide.cards.map((c) => (
              <article
                key={c.ar}
                className={`sem-pair-card ${toneClass(c.tone)}`}
              >
                <p className="sem-pair-card__ar">{c.ar}</p>
                <p className="sem-pair-card__en">{c.en}</p>
                {c.defAr ? (
                  <p className="sem-pair-card__def-ar" dir="rtl" lang="ar">
                    {c.defAr}
                  </p>
                ) : null}
                {c.defEn || c.def ? (
                  <p className="sem-pair-card__def">{c.defEn || c.def}</p>
                ) : null}
                {c.traits?.length ? (
                  <ul className="sem-pair-card__traits">
                    {c.traits.map((t) => (
                      <li key={t.ar}>
                        <strong dir="rtl" lang="ar">
                          {t.ar}
                        </strong>
                        <span>{t.en}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
                {c.ex ? (
                  <div className="sem-pair-card__exbox">
                    <p className="sem-pair-card__ex" dir="rtl" lang="ar">
                      {c.ex}
                    </p>
                    {c.exNote ? (
                      <p className="sem-pair-card__ex-note">{c.exNote}</p>
                    ) : null}
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      );

    case "hierarchy":
      return (
        <div
          key={slide.id}
          className="sem-slide sem-slide--hierarchy sem-slide--scroll"
        >
          <SlideKicker>{slide.kicker}</SlideKicker>
          <SlideTitle slide={slide} />
          {slide.lead ? <p className="sem-lead">{slide.lead}</p> : null}
          {slide.matnAr ? (
            <div className="sem-matn">
              <p className="sem-matn__ar">{slide.matnAr}</p>
              {slide.gloss ? (
                <p className="sem-matn__en">{slide.gloss}</p>
              ) : null}
            </div>
          ) : null}
          <HierarchyTree
            root={slide.root}
            stackFirst={Boolean(slide.stackFirst)}
            hideRoot={Boolean(slide.hideRoot)}
          />
          {slide.note ? <p className="sem-callout">{slide.note}</p> : null}
        </div>
      );

    case "def-pillars":
      return (
        <div className="sem-slide">
          <SlideKicker>{slide.kicker}</SlideKicker>
          <SlideTitle slide={slide} />
          <div className="sem-matn">
            <p className="sem-matn__ar">{slide.matnAr}</p>
            {slide.gloss ? (
              <p className="sem-matn__en">{slide.gloss}</p>
            ) : null}
          </div>
          {slide.note ? <p className="sem-note-pill">{slide.note}</p> : null}
          <div
            className="sem-pillars"
            style={{
              gridTemplateColumns: `repeat(${slide.pillars.length}, 1fr)`,
            }}
          >
            {slide.pillars.map((p) => (
              <div
                key={p.ar}
                className={`sem-pillar ${toneClass(p.tone)}`}
              >
                <p className="sem-pillar__ar">{p.ar}</p>
                <p className="sem-pillar__en">{p.en}</p>
                {p.ex ? (
                  <p className="sem-pillar__ex" dir="rtl" lang="ar">
                    {p.ex}
                  </p>
                ) : null}
                {p.contra ? (
                  <p className="sem-pillar__contra">{p.contra}</p>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      );

    case "def-flow":
      return (
        <div className="sem-slide">
          <SlideKicker>{slide.kicker}</SlideKicker>
          <SlideTitle slide={slide} />
          <div className="sem-matn">
            <p className="sem-matn__ar">{slide.matnAr}</p>
            {slide.gloss ? (
              <p className="sem-matn__en">{slide.gloss}</p>
            ) : null}
          </div>
          {slide.note ? <p className="sem-note-pill">{slide.note}</p> : null}
          <div className="sem-def-flow">
            {slide.steps.map((step, i) => (
              <div key={step.label || step.ar || i} className="sem-def-flow__block">
                {i > 0 ? (
                  <div className="sem-def-flow__arrow" aria-hidden>
                    ↓
                  </div>
                ) : null}
                {step.fork ? (
                  <div className="sem-def-flow__how">
                    <p className="sem-def-flow__label">{step.label}</p>
                    {step.en ? (
                      <p className="sem-def-flow__how-en">{step.en}</p>
                    ) : null}
                    <div className="sem-def-flow__fork">
                      {step.fork.map((f) => (
                        <div
                          key={f.ar}
                          className={`sem-def-flow__card ${toneClass(f.tone)}`}
                        >
                          <p className="sem-def-flow__ar" dir="rtl" lang="ar">
                            {f.ar}
                          </p>
                          <p className="sem-def-flow__en">{f.en}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div
                    className={`sem-def-flow__card sem-def-flow__card--step ${toneClass(step.tone)}`}
                  >
                    <p className="sem-def-flow__label">{step.label}</p>
                    <p className="sem-def-flow__ar" dir="rtl" lang="ar">
                      {step.ar}
                    </p>
                    <p className="sem-def-flow__en">{step.en}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      );

    case "trio-defs":
      return (
        <div className="sem-slide">
          <SlideKicker>{slide.kicker}</SlideKicker>
          <SlideTitle slide={slide} />
          {slide.lead ? <p className="sem-lead">{slide.lead}</p> : null}
          <div className="sem-trio-defs">
            {slide.cards.map((c) => (
              <article
                key={c.ar}
                className={`sem-tdef ${toneClass(c.tone)}`}
              >
                <p className="sem-tdef__ar">{c.ar}</p>
                <div className="sem-tdef__block">
                  <div className="sem-tdef__label-row">
                    <span className="sem-tdef__label">لُغَوِيٌّ</span>
                    <span className="sem-tdef__label-en">Linguistic</span>
                  </div>
                  <p className="sem-tdef__lang" dir="rtl" lang="ar">
                    {c.lang}
                  </p>
                  {c.langEn ? (
                    <p className="sem-tdef__gloss">{c.langEn}</p>
                  ) : null}
                </div>
                <div className="sem-tdef__block">
                  <div className="sem-tdef__label-row">
                    <span className="sem-tdef__label">نَحْوِيٌّ</span>
                    <span className="sem-tdef__label-en">Grammatical</span>
                  </div>
                  <p className="sem-tdef__ist" dir="rtl" lang="ar">
                    {c.istilah}
                  </p>
                  {c.istilahEn ? (
                    <p className="sem-tdef__gloss">{c.istilahEn}</p>
                  ) : null}
                </div>
                <div className="sem-tdef__ex-wrap">
                  <p className="sem-tdef__ex-label">Examples</p>
                  <div className="sem-tdef__ex">
                    {c.examples.map((ex) => {
                      const ar = typeof ex === "string" ? ex : ex.ar;
                      const en = typeof ex === "string" ? null : ex.en;
                      return (
                        <div key={ar} className="sem-tdef__chip">
                          <span className="sem-tdef__chip-ar" dir="rtl" lang="ar">
                            {ar}
                          </span>
                          {en ? (
                            <span className="sem-tdef__chip-en">{en}</span>
                          ) : null}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      );

    case "sign-cards":
      return (
        <div className="sem-slide">
          <SlideKicker>{slide.kicker}</SlideKicker>
          <SlideTitle slide={slide} />
          {slide.lead ? <p className="sem-lead">{slide.lead}</p> : null}
          <div
            className="sem-sign-cards"
            style={{
              gridTemplateColumns: `repeat(${Math.min(slide.cards.length, 4)}, 1fr)`,
            }}
          >
            {slide.cards.map((c) => (
              <div
                key={c.ar}
                className={`sem-sign-card ${toneClass(c.tone)}`}
              >
                <p className="sem-sign-card__ar">{c.ar}</p>
                <p className="sem-sign-card__en">{c.en}</p>
                {c.ex ? (
                  <p className="sem-sign-card__ex">{c.ex}</p>
                ) : null}
                {c.note ? (
                  <p className="sem-sign-card__note">{c.note}</p>
                ) : null}
              </div>
            ))}
          </div>
          {slide.footer ? (
            <div className="sem-footer-chip">
              <p className="sem-footer-chip__label">{slide.footer.label}</p>
              <p className="sem-footer-chip__ar">{slide.footer.ar}</p>
              <p className="sem-footer-chip__note">{slide.footer.note}</p>
            </div>
          ) : null}
        </div>
      );

    case "flip-examples":
      return (
        <div className="sem-slide">
          <SlideKicker>{slide.kicker}</SlideKicker>
          <SlideTitle slide={slide} />
          {slide.lead ? <p className="sem-lead">{slide.lead}</p> : null}
          <div className="sem-flip">
            {slide.items.map((item, i) => (
              <span key={item.ar} className="sem-flip__item">
                {i > 0 ? (
                  <span className="sem-flip__arrow" aria-hidden>
                    →
                  </span>
                ) : null}
                <div className={`sem-flip__box ${toneClass(item.tone)}`}>
                  <span className="sem-flip__tag">{item.tag}</span>
                  <p className="sem-flip__ar">{item.ar}</p>
                  <p className="sem-flip__en">{item.en}</p>
                </div>
              </span>
            ))}
          </div>
        </div>
      );

    case "states-matrix":
      return (
        <div className="sem-slide">
          <SlideKicker>{slide.kicker}</SlideKicker>
          <SlideTitle slide={slide} />
          {slide.lead ? <p className="sem-lead">{slide.lead}</p> : null}
          <div className="sem-states">
            {slide.states.map((s) => (
              <div
                key={s.ar}
                className={`sem-state ${toneClass(s.tone)}`}
              >
                <p className="sem-state__ar">{s.ar}</p>
                <p className="sem-state__en">{s.en}</p>
              </div>
            ))}
          </div>
          {slide.matrix ? (
            <table className="sem-matrix">
              <thead>
                <tr>
                  {slide.matrix.headers.map((h) => (
                    <th key={h || "who"}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {slide.matrix.rows.map((r) => (
                  <tr key={r.who}>
                    <td className="sem-matrix__who">{r.who}</td>
                    {r.cells.map((c, i) => (
                      <td
                        key={i}
                        className={
                          c === "yes"
                            ? "sem-matrix__yes"
                            : "sem-matrix__no"
                        }
                      >
                        {c === "yes" ? "✓" : "—"}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          ) : null}
        </div>
      );

    case "count-chart":
      return (
        <div className="sem-slide">
          <SlideKicker>{slide.kicker}</SlideKicker>
          <SlideTitle slide={slide} />
          {slide.lead ? <p className="sem-lead">{slide.lead}</p> : null}
          <div className="sem-count-rows">
            {slide.rows.map((row) => (
              <div
                key={row.ar}
                className={`sem-count-row ${toneClass(row.tone)}`}
              >
                <div className="sem-count-row__state">
                  <span className="sem-count-row__ar">{row.ar}</span>
                  <span className="sem-count-row__n">{row.count}</span>
                </div>
                <div className="sem-count-row__block">
                  <span className="sem-count-row__label">أَصْل</span>
                  <span className="sem-count-row__val">{row.original}</span>
                </div>
                <div className="sem-count-row__block sem-count-row__block--grow">
                  <span className="sem-count-row__label">فُرُوع</span>
                  <span className="sem-count-row__val">
                    {row.furoo.join(" · ")}
                  </span>
                </div>
                <div className="sem-count-row__app">{row.applies}</div>
              </div>
            ))}
          </div>
        </div>
      );

    case "origin-furoo":
      return (
        <div className="sem-slide">
          <SlideKicker>{slide.kicker}</SlideKicker>
          <SlideTitle slide={slide} />
          <div className="sem-of">
            <div
              className={`sem-of__origin ${toneClass(slide.origin.tone)}`}
            >
              <p className="sem-of__ar">{slide.origin.ar}</p>
              <p className="sem-of__en">{slide.origin.en}</p>
              <span className="sem-of__tag">أَصْلِيَّة</span>
            </div>
            <div className="sem-of__stem" aria-hidden />
            <div className="sem-of__furoo">
              {slide.furoo.map((f) => (
                <div
                  key={f.ar}
                  className={`sem-of__leaf ${toneClass(f.tone)}`}
                >
                  <p className="sem-of__ar">{f.ar}</p>
                  <p className="sem-of__en">{f.en}</p>
                </div>
              ))}
            </div>
            <p className="sem-of__label">فُرُوع — stand-ins</p>
          </div>
        </div>
      );

    case "sign-places":
      return (
        <div className="sem-slide">
          <SlideKicker>{slide.kicker}</SlideKicker>
          <SlideTitle slide={slide} />
          <div className="sem-places">
            {slide.rows.map((row) => (
              <div
                key={row.sign}
                className={`sem-place-row ${toneClass(slide.tone)}`}
              >
                <div className="sem-place-row__head">
                  <p className="sem-place-row__sign">{row.sign}</p>
                  <span className="sem-place-row__n">{row.n}</span>
                </div>
                <ul className="sem-place-row__list">
                  {row.places.map((p) => (
                    <li key={p.ar}>
                      <strong>{p.ar}</strong>
                      <span>{p.en}</span>
                    </li>
                  ))}
                </ul>
                {row.ex ? (
                  <span className="sem-place-row__ex">{row.ex}</span>
                ) : null}
              </div>
            ))}
          </div>
          {slide.note ? <p className="sem-callout">{slide.note}</p> : null}
        </div>
      );

    case "legend-barriers":
      return (
        <div className="sem-slide">
          <SlideKicker>{slide.kicker}</SlideKicker>
          <SlideTitle slide={slide} />
          {slide.lead ? <p className="sem-lead">{slide.lead}</p> : null}
          <div className="sem-barriers">
            {slide.cards.map((c) => (
              <article
                key={c.ar}
                className={`sem-barrier ${toneClass(c.tone)}`}
              >
                <p className="sem-barrier__ar">{c.ar}</p>
                <p className="sem-barrier__en">{c.en}</p>
                <p className="sem-barrier__ex">{c.ex}</p>
              </article>
            ))}
          </div>
          {slide.note ? <p className="sem-callout">{slide.note}</p> : null}
        </div>
      );

    case "class-chart":
      return (
        <div className="sem-slide">
          <SlideKicker>{slide.kicker}</SlideKicker>
          <SlideTitle slide={slide} />
          {slide.lead ? <p className="sem-lead">{slide.lead}</p> : null}
          <div className="sem-class">
            {slide.positions.map((pos) => (
              <section key={pos.ar} className="sem-class__pos">
                <header className="sem-class__pos-head">
                  <p className="sem-class__pos-ar">{pos.ar}</p>
                  <p className="sem-class__pos-en">{pos.en}</p>
                </header>
                <div className="sem-class__grid">
                  {pos.classes.map((c) => (
                    <div
                      key={c.tag + c.tip}
                      className={`sem-class__cell ${toneClass(c.tone)}`}
                    >
                      <p className="sem-class__tag">{c.tag}</p>
                      <p className="sem-class__tip">{c.tip}</p>
                      <div className="sem-class__exs">
                        {c.examples.map((ex) => (
                          <span key={ex}>{ex}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      );

    case "letter-signs":
      return (
        <div className="sem-slide">
          <SlideKicker>{slide.kicker}</SlideKicker>
          <SlideTitle slide={slide} />
          {slide.lead ? <p className="sem-lead">{slide.lead}</p> : null}
          <div
            className="sem-letters"
            style={{
              gridTemplateColumns: `repeat(${Math.min(slide.cards.length, 4)}, 1fr)`,
            }}
          >
            {slide.cards.map((card) => (
              <article
                key={card.sign}
                className={`sem-letter-card ${toneClass(slide.tone)}`}
              >
                <div className="sem-letter-card__head">
                  <p className="sem-letter-card__sign">{card.sign}</p>
                  <span className="sem-letter-card__n">{card.n}</span>
                </div>
                {card.note ? (
                  <p className="sem-letter-card__note">{card.note}</p>
                ) : null}
                <ul className="sem-letter-card__list">
                  {card.places.map((p) => (
                    <li key={p.ar}>
                      <strong>{p.ar}</strong>
                      <span>{p.ex}</span>
                    </li>
                  ))}
                </ul>
                <p className="sem-letter-card__badge">ظَاهِرَة</p>
              </article>
            ))}
          </div>
          {slide.note ? <p className="sem-callout">{slide.note}</p> : null}
        </div>
      );

    case "muarabat-table": {
      const summary = ALAMAT_MUARABAT_SUMMARY;
      const caseKeys = ["raf", "nasb", "khafd", "jazm"];
      const colCount = summary.columns.length;
      return (
        <div className="sem-slide">
          <SlideKicker>{slide.kicker}</SlideKicker>
          <SlideTitle slide={slide} />
          <div className="sem-two sem-two--muarabat">
            {[slide.left, slide.right].map((block) => {
              const side = summary[block.sideKey];
              return (
                <div
                  key={block.titleAr}
                  className={`sem-panel sem-panel--muarabat ${toneClass(block.tone)}`}
                >
                  <p className="sem-panel__title-ar">{block.titleAr}</p>
                  <p className="sem-panel__title-en">{block.titleEn}</p>
                  <div className="sem-muarabat-wrap">
                    <table className="sem-muarabat-table" dir="rtl">
                      <thead>
                        <tr>
                          {summary.columns.map((col) => (
                            <th
                              key={col.key}
                              scope="col"
                              className={col.key === "type" ? "is-type" : `is-case is-${col.key}`}
                            >
                              <span className="sem-muarabat-th-ar">{col.ar}</span>
                              {col.en ? (
                                <span className="sem-muarabat-th-en">{col.en}</span>
                              ) : null}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {side.rows.map((row) => {
                          const exKey = muarabatExceptionKey(row.exception?.caseAr);
                          return (
                            <Fragment key={row.type}>
                              <tr className={row.exception ? "has-exception" : undefined}>
                                <td className="sem-muarabat-type">
                                  <strong dir="rtl">{row.type}</strong>
                                  {MUARABAT_TYPE_EN[row.type] ? (
                                    <span>{MUARABAT_TYPE_EN[row.type]}</span>
                                  ) : null}
                                </td>
                                {caseKeys.map((key) => (
                                  <td key={key} className={`is-case is-${key}`} dir="rtl">
                                    <SemMuarabatSign
                                      value={row[key]}
                                      naLabel={row[`${key}Na`]}
                                      caseKey={key}
                                      isException={
                                        Boolean(row.exception) &&
                                        exKey === key &&
                                        row[key] === row.exception.actual
                                      }
                                    />
                                  </td>
                                ))}
                              </tr>
                              {row.exception ? (
                                <SemMuarabatExceptionRow
                                  ex={row.exception}
                                  typeLabel={row.type}
                                  colSpan={colCount}
                                  caseKey={exKey}
                                />
                              ) : null}
                            </Fragment>
                          );
                        })}
                        {side.extraException ? (
                          <SemMuarabatExceptionRow
                            key={side.extraException.type}
                            ex={side.extraException}
                            typeLabel={side.extraException.type}
                            colSpan={colCount}
                            caseKey={muarabatExceptionKey(side.extraException.caseAr)}
                            featured
                          />
                        ) : null}
                      </tbody>
                    </table>
                  </div>
                  <p className="sem-list-footer">{block.footer}</p>
                </div>
              );
            })}
          </div>
        </div>
      );
    }

    case "two-lists":
      return (
        <div className="sem-slide">
          <SlideKicker>{slide.kicker}</SlideKicker>
          <SlideTitle slide={slide} />
          <div className="sem-two">
            {[slide.left, slide.right].map((block) => (
              <div
                key={block.titleAr}
                className={`sem-panel ${toneClass(block.tone)}`}
              >
                <p className="sem-panel__title-ar">{block.titleAr}</p>
                <p className="sem-panel__title-en">{block.titleEn}</p>
                <ul className="sem-list-items">
                  {(block.items || []).map((x) => (
                    <li key={x.ar}>
                      <strong>{x.ar}</strong>
                      <span>{x.en}</span>
                    </li>
                  ))}
                </ul>
                <p className="sem-list-footer">{block.footer}</p>
              </div>
            ))}
          </div>
        </div>
      );

    case "exception-cards":
      return (
        <div className="sem-slide">
          <SlideKicker>{slide.kicker}</SlideKicker>
          <SlideTitle slide={slide} />
          <div className="sem-exceptions">
            {slide.items.map((item) => (
              <article
                key={item.ar}
                className={`sem-ex ${toneClass(item.tone)}`}
              >
                <p className="sem-ex__n">{item.n}</p>
                <p className="sem-ex__ar">{item.ar}</p>
                <p className="sem-ex__rule">{item.rule}</p>
                <span className="sem-ex__ex">{item.ex}</span>
              </article>
            ))}
          </div>
        </div>
      );

    case "five-five":
      return (
        <div className="sem-slide">
          <SlideKicker>{slide.kicker}</SlideKicker>
          <SlideTitle slide={slide} />
          <div className="sem-two">
            {[slide.nouns, slide.verbs].map((block) => (
              <div
                key={block.titleAr}
                className={`sem-panel ${toneClass(block.tone)}`}
              >
                <p className="sem-panel__title-ar">{block.titleAr}</p>
                <div className="sem-five-words">
                  {block.words.map((w) => (
                    <span key={w}>{w}</span>
                  ))}
                </div>
                <div className="sem-five-map">
                  {block.map.map((m) => (
                    <div key={m.state} className="sem-five-map__row">
                      <span>{m.state}</span>
                      <span>{m.sign}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    case "verb-types":
      return (
        <div className="sem-slide sem-slide--scroll sem-slide--verbs">
          <SlideKicker>{slide.kicker}</SlideKicker>
          <SlideTitle slide={slide} />
          {slide.lead ? <p className="sem-lead">{slide.lead}</p> : null}
          {slide.matnAr ? (
            <div className="sem-matn sem-matn--compact">
              <p className="sem-matn__ar" dir="rtl" lang="ar">
                {slide.matnAr}
              </p>
            </div>
          ) : null}
          {slide.axis?.length ? (
            <div className="sem-vaxis" aria-hidden>
              {slide.axis.map((a, i) => (
                <div key={a.en} className="sem-vaxis__step">
                  <span className="sem-vaxis__dot" />
                  <span className="sem-vaxis__en">{a.en}</span>
                  <span className="sem-vaxis__ar" dir="rtl" lang="ar">
                    {a.ar}
                  </span>
                  {i < slide.axis.length - 1 ? (
                    <span className="sem-vaxis__line" />
                  ) : null}
                </div>
              ))}
            </div>
          ) : null}
          <div className="sem-vtypes">
            {slide.types.map((t, i) => (
              <article
                key={t.ar}
                className={`sem-vtype ${toneClass(t.tone)}`}
              >
                <header className="sem-vtype__head">
                  <span className="sem-vtype__n" aria-hidden>
                    {i + 1}
                  </span>
                  <div className="sem-vtype__titles">
                    <p className="sem-vtype__ar" dir="rtl" lang="ar">
                      {t.ar}
                    </p>
                    <p className="sem-vtype__en">{t.en}</p>
                  </div>
                  {t.when ? (
                    <p className="sem-vtype__when">{t.when}</p>
                  ) : null}
                </header>
                {t.defAr ? (
                  <p className="sem-vtype__def-ar" dir="rtl" lang="ar">
                    {t.defAr}
                  </p>
                ) : null}
                {t.defEn ? (
                  <p className="sem-vtype__def-en">{t.defEn}</p>
                ) : null}
                {t.examples?.length ? (
                  <ul className="sem-vtype__exs">
                    {t.examples.map((ex) => (
                      <li key={ex.ar} className="sem-vtype__ex">
                        <span className="sem-vtype__ex-ar" dir="rtl" lang="ar">
                          {ex.ar}
                        </span>
                        {ex.en ? (
                          <span className="sem-vtype__ex-en">{ex.en}</span>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
          {slide.note ? <p className="sem-callout">{slide.note}</p> : null}
        </div>
      );

    case "divider":
      return (
        <div className="sem-slide sem-slide--divider">
          <h2 className="sem-title-ar">{slide.titleAr}</h2>
          <div className="sem-ornament" aria-hidden />
          <p className="sem-line">{slide.line}</p>
        </div>
      );

    case "ruling-cards":
      return (
        <div className="sem-slide sem-slide--scroll sem-slide--verbs">
          <SlideKicker>{slide.kicker}</SlideKicker>
          <SlideTitle slide={slide} />
          {slide.lead ? <p className="sem-lead">{slide.lead}</p> : null}
          <div className="sem-rulings">
            {slide.cards.map((c) => (
              <article
                key={c.ar}
                className={`sem-ruling ${toneClass(c.tone)}`}
              >
                <header className="sem-ruling__head">
                  <span className="sem-ruling__tag" dir="rtl" lang="ar">
                    {c.tag}
                  </span>
                  <p className="sem-ruling__ar" dir="rtl" lang="ar">
                    {c.ar}
                  </p>
                  <p className="sem-ruling__ruling" dir="rtl" lang="ar">
                    {c.ruling}
                  </p>
                </header>
                <p className="sem-ruling__detail">{c.detail}</p>
                {c.defaultEx ? (
                  <p className="sem-ruling__default">
                    <span className="sem-ruling__default-label">Default</span>
                    <span className="sem-ruling__default-ar" dir="rtl" lang="ar">
                      {c.defaultEx.ar}
                    </span>
                    {c.defaultEx.en ? (
                      <span className="sem-ruling__default-en">
                        {c.defaultEx.en}
                      </span>
                    ) : null}
                  </p>
                ) : null}
                {c.exceptions?.length ? (
                  <div className="sem-ruling__exc">
                    <p className="sem-ruling__exc-title">
                      {c.exceptionsTitle || "Exceptions"}
                    </p>
                    <ul className="sem-ruling__exc-list">
                      {c.exceptions.map((ex, i) => (
                        <li key={ex.ar} className="sem-ruling__exc-item">
                          <span className="sem-ruling__exc-n" aria-hidden>
                            {i + 1}
                          </span>
                          <div className="sem-ruling__exc-body">
                            <span
                              className="sem-ruling__exc-ar"
                              dir="rtl"
                              lang="ar"
                            >
                              {ex.ar}
                            </span>
                            {ex.en ? (
                              <span className="sem-ruling__exc-en">{ex.en}</span>
                            ) : null}
                            {ex.ex ? (
                              <span
                                className="sem-ruling__exc-ex"
                                dir="rtl"
                                lang="ar"
                              >
                                {ex.ex}
                              </span>
                            ) : null}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      );

    case "anaytu":
      return (
        <div className="sem-slide sem-slide--verbs">
          <SlideKicker>{slide.kicker}</SlideKicker>
          <SlideTitle slide={slide} />
          <div className="sem-matn sem-matn--compact">
            <p className="sem-matn__ar" dir="rtl" lang="ar">
              {slide.matnAr}
            </p>
          </div>
          <p className="sem-anaytu-word" dir="rtl" lang="ar">
            أَنَيْتُ
          </p>
          <div className="sem-anaytu">
            {slide.letters.map((l, i) => (
              <div
                key={l.ar}
                className={`sem-letter ${toneClass(l.tone)}`}
              >
                <span className="sem-letter__n" aria-hidden>
                  {i + 1}
                </span>
                <p className="sem-letter__glyph" dir="rtl" lang="ar">
                  {l.ar}
                </p>
                <p className="sem-letter__en">{l.en}</p>
              </div>
            ))}
          </div>
          <p className="sem-banner">{slide.banner}</p>
        </div>
      );

    case "particle-chart": {
      const isRich = slide.groups.some((g) =>
        g.items?.some((x) => typeof x === "object"),
      );
      const layoutClass = slide.layout ? ` sem-pgroups--${slide.layout}` : "";
      const itemTones = ["c1", "c2", "c3", "c4", "c5"];
      return (
        <div className="sem-slide sem-slide--scroll sem-slide--verbs">
          <SlideKicker>{slide.kicker}</SlideKicker>
          <SlideTitle slide={slide} />
          {slide.lead ? <p className="sem-lead">{slide.lead}</p> : null}
          {slide.how?.length ? (
            <div className="sem-phow">
              {slide.how.map((h) => (
                <div key={h.ar} className="sem-phow__card">
                  <p className="sem-phow__ar" dir="rtl" lang="ar">
                    {h.ar}
                  </p>
                  <p className="sem-phow__en">{h.en}</p>
                </div>
              ))}
            </div>
          ) : null}
          <div
            className={`sem-pgroups${isRich ? " sem-pgroups--rich" : ""}${layoutClass}`}
          >
            {slide.groups.map((g) => {
              const rich = g.items?.some((x) => typeof x === "object");
              return (
                <section
                  key={g.label}
                  className={`sem-pgroup${rich ? ` ${toneClass(g.tone)}` : ""}`}
                >
                  {slide.layout !== "core4" && slide.layout !== "focus3" ? (
                    <header className="sem-pgroup__head">
                      {g.labelAr ? (
                        <p className="sem-pgroup__label-ar" dir="rtl" lang="ar">
                          {g.labelAr}
                        </p>
                      ) : null}
                      <p className="sem-pgroup__label">{g.label}</p>
                      {g.blurb ? (
                        <p className="sem-pgroup__blurb">{g.blurb}</p>
                      ) : null}
                    </header>
                  ) : null}
                  <div className="sem-pgroup__items">
                    {g.items.map((x, i) => {
                      if (typeof x === "string") {
                        return (
                          <span key={x} className={toneClass(g.tone)}>
                            {x}
                          </span>
                        );
                      }
                      const itemTone = x.tone || itemTones[i % itemTones.length];
                      return (
                        <article
                          key={x.ar}
                          className={`sem-pitem ${toneClass(itemTone)}`}
                        >
                          <div className="sem-pitem__head">
                            <span className="sem-pitem__n" aria-hidden>
                              {i + 1}
                            </span>
                            <div className="sem-pitem__titles">
                              <p className="sem-pitem__ar" dir="rtl" lang="ar">
                                {x.ar}
                              </p>
                              {x.en ? (
                                <p className="sem-pitem__en">{x.en}</p>
                              ) : null}
                            </div>
                          </div>
                          {x.meaning ? (
                            <p className="sem-pitem__meaning">{x.meaning}</p>
                          ) : null}
                          {x.tip ? (
                            <p className="sem-pitem__tip">{x.tip}</p>
                          ) : null}
                          {x.ex ? (
                            <div className="sem-pitem__ex-block">
                              <p className="sem-pitem__ex" dir="rtl" lang="ar">
                                {x.ex}
                              </p>
                              {x.exEn ? (
                                <p className="sem-pitem__ex-en">{x.exEn}</p>
                              ) : null}
                            </div>
                          ) : null}
                        </article>
                      );
                    })}
                  </div>
                </section>
              );
            })}
          </div>
          {slide.note ? <p className="sem-callout">{slide.note}</p> : null}
        </div>
      );
    }

    case "summary":
      return (
        <div className="sem-slide">
          <SlideTitle slide={slide} />
          <div className="sem-summary">
            {slide.points.map((p) => (
              <article
                key={p.ar}
                className={`sem-sum ${toneClass(p.tone)}`}
              >
                <p className="sem-sum__ar">{p.ar}</p>
                <p className="sem-sum__en">{p.en}</p>
              </article>
            ))}
          </div>
          <p className="sem-closer">{slide.closer}</p>
        </div>
      );

    default:
      return null;
  }
}

export default function FoundationsVerbsSeminarPage() {
  const [index, setIndex] = useState(0);
  const stageRef = useRef(null);
  const total = SEMINAR_SLIDES.length;
  const rawSlide = SEMINAR_SLIDES[index];
  const chapter = resolveSeminarChapter(rawSlide);
  const slide = {
    ...rawSlide,
    kicker: cleanKicker(rawSlide.kicker, chapter),
  };
  const progress = ((index + 1) / total) * 100;

  useEffect(() => {
    document.title = `${SEMINAR_META.titleAr} · Seminar`;
    const linkId = "sem-fonts";
    if (!document.getElementById(linkId)) {
      const link = document.createElement("link");
      link.id = linkId;
      link.rel = "stylesheet";
      link.href =
        "https://fonts.googleapis.com/css2?family=DM+Sans:wght@500;600;700&display=swap";
      document.head.appendChild(link);
    }
    const uthmanId = "sem-uthman-font-v2";
    const stale = document.getElementById("sem-uthman-font");
    if (stale) stale.remove();
    if (!document.getElementById(uthmanId)) {
      const style = document.createElement("style");
      style.id = uthmanId;
      style.textContent = `
        @font-face {
          font-family: "UthmanTN";
          src: url("https://raw.githubusercontent.com/mustafa0x/qpc-fonts/f93bf5f3/various-woff2/UthmanTN1B%20Ver10.woff2") format("woff2");
          font-display: swap;
          font-weight: 100 900;
          font-style: normal;
          unicode-range: U+0600-06FF, U+0750-077F, U+08A0-08FF, U+FB50-FDFF, U+FE70-FEFF;
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  useEffect(() => {
    if (stageRef.current) stageRef.current.scrollTop = 0;
  }, [index]);

  useEffect(() => {
    const onKey = (e) => {
      if (
        e.target instanceof HTMLElement &&
        (e.target.tagName === "INPUT" ||
          e.target.tagName === "TEXTAREA" ||
          e.target.isContentEditable)
      ) {
        return;
      }
      if (
        e.key === "ArrowRight" ||
        e.key === " " ||
        e.key === "PageDown" ||
        e.key === "Enter"
      ) {
        e.preventDefault();
        setIndex((i) => Math.min(i + 1, total - 1));
      } else if (
        e.key === "ArrowLeft" ||
        e.key === "PageUp" ||
        e.key === "Backspace"
      ) {
        e.preventDefault();
        setIndex((i) => Math.max(i - 1, 0));
      } else if (e.key === "Home") {
        e.preventDefault();
        setIndex(0);
      } else if (e.key === "End") {
        e.preventDefault();
        setIndex(total - 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [total]);

  return (
    <div className="sem-deck" role="application" aria-label="Seminar">
      <header className="sem-deck__chrome">
        <div className="sem-deck__progress-wrap">
          <div className="sem-deck__progress" aria-hidden>
            <i style={{ width: `${progress}%` }} />
          </div>
          <span className="sem-deck__counter">
            {index + 1} / {total}
          </span>
        </div>
        <div className="sem-deck__nav">
          <button
            type="button"
            disabled={index === 0}
            onClick={() => setIndex((i) => Math.max(i - 1, 0))}
          >
            Prev
          </button>
          <button
            type="button"
            disabled={index === total - 1}
            onClick={() => setIndex((i) => Math.min(i + 1, total - 1))}
          >
            Next
          </button>
        </div>
      </header>

      <main className="sem-deck__stage" ref={stageRef} key={rawSlide.id}>
        <div className={`sem-slide-shell${chapter ? " sem-slide-shell--chapter" : ""}`}>
          {chapter ? (
            <div className="sem-chapter-label">
              <span className="sem-chapter-label__en">
                Chapter {chapter.n}
              </span>
              <span className="sem-chapter-label__dot" aria-hidden>
                ·
              </span>
              <span className="sem-chapter-label__ar">{chapter.ar}</span>
            </div>
          ) : null}
          <SlideBody slide={slide} />
        </div>
      </main>

      <p className="sem-deck__keys">
        <kbd>←</kbd> <kbd>→</kbd> · <kbd>Space</kbd>
      </p>
    </div>
  );
}

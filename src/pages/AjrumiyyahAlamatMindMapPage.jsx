import { Fragment, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ajrumiyyahStudyPath,
} from "../data/ajrumiyyahCourse.js";
import {
  ALAMAT_IRAB_MINDMAP,
  ALAMAT_IRAB_MINDMAP_META,
  ALAMAT_MUARABAT_SUMMARY,
  ALAMAT_QUICK_MATRIX,
  ALAMAT_STATES_OVERVIEW,
  ZAHIRA_MUQADDARA,
} from "../data/alamatIrabMindMap.js";
import AjrumiyyahCourseSidebar from "../components/AjrumiyyahCourseSidebar.jsx";
import CourseLayout from "../components/CourseLayout.jsx";
import "../styles/ajrumiyyah.css";

function studyLink(lineIndex) {
  return ajrumiyyahStudyPath(ALAMAT_IRAB_MINDMAP_META.chapterId, lineIndex);
}

function CommentaryDef({ defAr, defEn, matnAr, langAr, istilahAr }) {
  if (!defAr && !defEn && !matnAr && !langAr && !istilahAr) return null;
  return (
    <div className="ajr-mmap-cdef">
      <p className="ajr-mmap-cdef__label">Definition · from the commentary</p>
      {matnAr ? (
        <p className="ajr-mmap-cdef__matn" dir="rtl">
          {matnAr}
        </p>
      ) : null}
      {langAr ? (
        <p className="ajr-mmap-cdef__row">
          <span className="ajr-mmap-cdef__tag">لُغَةً</span>
          <span className="ajr-mmap-cdef__ar" dir="rtl">
            {langAr}
          </span>
        </p>
      ) : null}
      {istilahAr ? (
        <p className="ajr-mmap-cdef__row">
          <span className="ajr-mmap-cdef__tag">اصْطِلَاحًا</span>
          <span className="ajr-mmap-cdef__ar" dir="rtl">
            {istilahAr}
          </span>
        </p>
      ) : null}
      {defAr ? (
        <p className="ajr-mmap-cdef__ar ajr-mmap-cdef__ar--main" dir="rtl">
          {defAr}
        </p>
      ) : null}
      {defEn ? <p className="ajr-mmap-cdef__en">{defEn}</p> : null}
    </div>
  );
}

function ExampleList({ examples }) {
  if (!examples?.length) return null;
  return (
    <ul className="ajr-mmap-examples">
      {examples.map((ex) => (
        <li key={`${ex.ar}-${ex.en}`}>
          <span className="ajr-mmap-ex-ar" dir="rtl">
            {ex.ar}
          </span>
          {ex.en ? <span className="ajr-mmap-ex-en">{ex.en}</span> : null}
        </li>
      ))}
    </ul>
  );
}

/** Detail panel for the currently selected mind-map node */
function DetailPanel({ selection, onClose }) {
  if (!selection) {
    return (
      <aside className="ajr-mmap-detail ajr-mmap-detail--empty" aria-live="polite">
        <p className="ajr-mmap-detail__hint">
          Click any node on the mind map to see its commentary definition, rules, cases, and
          examples.
        </p>
        <div className="ajr-mmap-cdef ajr-mmap-cdef--hub">
          <p className="ajr-mmap-cdef__label">Chapter definition</p>
          <p className="ajr-mmap-cdef__ar ajr-mmap-cdef__ar--main" dir="rtl">
            {ALAMAT_IRAB_MINDMAP_META.defAr}
          </p>
          <p className="ajr-mmap-cdef__en">{ALAMAT_IRAB_MINDMAP_META.defEn}</p>
        </div>
        <div className="ajr-mmap-cdef">
          <p className="ajr-mmap-cdef__label">ظاهرة / مقدرة</p>
          <p className="ajr-mmap-cdef__ar" dir="rtl">
            {ZAHIRA_MUQADDARA.zahira.defAr}
          </p>
          <p className="ajr-mmap-cdef__en">{ZAHIRA_MUQADDARA.zahira.defEn}</p>
          <p className="ajr-mmap-cdef__ar" dir="rtl" style={{ marginTop: "0.65rem" }}>
            {ZAHIRA_MUQADDARA.muqaddara.defAr}
          </p>
          <p className="ajr-mmap-cdef__en">{ZAHIRA_MUQADDARA.muqaddara.defEn}</p>
          <ul className="ajr-mmap-conditions">
            {ZAHIRA_MUQADDARA.muqaddara.causes.map((c) => (
              <li key={c.ar}>
                <strong dir="rtl">{c.ar}</strong> — {c.defEn}
              </li>
            ))}
          </ul>
        </div>
      </aside>
    );
  }

  const { kind, state, sign, position } = selection;
  const lessonHref =
    kind === "state"
      ? studyLink(state.lineIndex)
      : sign?.lineIndex != null
        ? studyLink(sign.lineIndex)
        : null;

  const header = (crumbAr) => (
    <div className="ajr-mmap-detail__top" dir="rtl">
      <p className="ajr-mmap-detail__eyebrow">{crumbAr}</p>
      <button type="button" className="ajr-mmap-detail__close" onClick={onClose} aria-label="Close">
        ×
      </button>
    </div>
  );

  if (kind === "hub") {
    return (
      <aside className="ajr-mmap-detail ajr-mmap-detail--hub">
        {header("بَابُ مَعْرِفَةِ عَلَامَاتِ الْإِعْرَابِ")}
        <h3>Signs of Iʿrāb</h3>
        <CommentaryDef
          defAr={ALAMAT_IRAB_MINDMAP_META.defAr}
          defEn={ALAMAT_IRAB_MINDMAP_META.defEn}
        />
        <p className="ajr-mmap-detail__sub">Four states</p>
        <div className="ajr-mmap-detail__chips">
          {ALAMAT_STATES_OVERVIEW.map((s) => (
            <span key={s.id} className="ajr-mmap-chip" dir="rtl">
              {s.ar}
            </span>
          ))}
        </div>
      </aside>
    );
  }

  if (kind === "state") {
    const overview = ALAMAT_STATES_OVERVIEW.find((s) => s.id === state.id);
    return (
      <aside className={`ajr-mmap-detail ajr-mmap-detail--${state.tone}`}>
        {header(state.ar)}
        <h3>{state.en}</h3>
        <CommentaryDef
          matnAr={state.matnAr}
          defAr={state.defAr}
          defEn={state.defEn || overview?.defEn}
          langAr={state.langAr || overview?.langAr}
          istilahAr={state.istilahAr || overview?.istilahAr}
        />
        <p className="ajr-mmap-detail__body">{state.intro}</p>
        <div className="ajr-mmap-detail__chips">
          {state.signs.map((s) => (
            <span
              key={s.id}
              className={`ajr-mmap-chip${s.kind === "original" ? " is-orig" : " is-furoo"}`}
              dir="rtl"
            >
              {s.ar}
            </span>
          ))}
        </div>
        <Link className="ajr-mmap-detail__cta" to={lessonHref}>
          Open study section →
        </Link>
      </aside>
    );
  }

  if (kind === "sign") {
    return (
      <aside className={`ajr-mmap-detail ajr-mmap-detail--${state.tone}`}>
        {header(state.ar)}
        <h3>
          <span dir="rtl">{sign.ar}</span>
          <span className="ajr-mmap-detail__en">{sign.en}</span>
        </h3>
        <div className="ajr-mmap-detail__meta">
          <span className={`ajr-mmap-chip${sign.kind === "original" ? " is-orig" : " is-furoo"}`}>
            {sign.kind === "original" ? "أَصْلِيَّة · original" : "فَرْع · stand-in"}
          </span>
          {sign.standsFor ? (
            <span className="ajr-mmap-chip" dir="rtl">
              نِيَابَة عَن {sign.standsFor}
            </span>
          ) : null}
          <span className="ajr-mmap-chip">{sign.positionsLabel}</span>
        </div>
        <CommentaryDef matnAr={sign.matnAr} defAr={sign.defAr} defEn={sign.defEn || sign.definition} />
        {sign.memorize ? (
          <p className="ajr-mmap-memorize">
            <span>Memorise</span>
            <strong dir="rtl">{sign.memorize}</strong>
          </p>
        ) : null}
        <p className="ajr-mmap-detail__sub">Positions — click a leaf on the map</p>
        <ul className="ajr-mmap-detail__pos-list" dir="rtl">
          {sign.positions.map((p) => (
            <li key={p.ar}>{p.ar}</li>
          ))}
        </ul>
        {lessonHref ? (
          <Link className="ajr-mmap-detail__cta" to={lessonHref}>
            Open full lesson →
          </Link>
        ) : null}
      </aside>
    );
  }

  // position
  return (
    <aside className={`ajr-mmap-detail ajr-mmap-detail--${state.tone}`}>
      {header(`${sign.ar} ← ${state.ar}`)}
      <h3>
        <span dir="rtl">{position.ar}</span>
        <span className="ajr-mmap-detail__en">{position.en}</span>
      </h3>
      <CommentaryDef defAr={position.defAr} defEn={position.defEn || position.rule} />
      {position.rule && position.defEn && position.rule !== position.defEn ? (
        <p className="ajr-mmap-detail__body">{position.rule}</p>
      ) : null}
      {position.conditions?.length ? (
        <>
          <p className="ajr-mmap-detail__sub">Conditions / causes</p>
          <ul className="ajr-mmap-conditions">
            {position.conditions.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </>
      ) : null}
      {position.cases?.length ? (
        <>
          <p className="ajr-mmap-detail__sub">ظاهرة / مقدرة</p>
          <div className="ajr-mmap-cases">
            {position.cases.map((c) => (
              <div key={c.ar} className="ajr-mmap-case">
                <div className="ajr-mmap-case__head">
                  <span dir="rtl">{c.ar}</span>
                  <span>{c.en}</span>
                </div>
                {c.note ? <p className="ajr-mmap-case__note">{c.note}</p> : null}
                <ExampleList examples={c.examples} />
              </div>
            ))}
          </div>
        </>
      ) : null}
      {position.examples?.length ? (
        <>
          <p className="ajr-mmap-detail__sub">Examples</p>
          <ExampleList examples={position.examples} />
        </>
      ) : null}
      {lessonHref ? (
        <Link className="ajr-mmap-detail__cta" to={lessonHref}>
          Open full lesson →
        </Link>
      ) : null}
    </aside>
  );
}

function MindMapCanvas({
  selection,
  setSelection,
  expandedStates,
  toggleState,
  expandedSigns,
  toggleSign,
}) {
  const path = {
    hub: !!selection,
    stateId: selection?.state?.id ?? null,
    signId: selection?.sign?.id ?? null,
    posAr: selection?.position?.ar ?? null,
  };

  const isSelected = (kind, ids) => {
    if (!selection || selection.kind !== kind) return false;
    if (kind === "hub") return true;
    if (kind === "state") return selection.state.id === ids.stateId;
    if (kind === "sign") return selection.sign.id === ids.signId;
    if (kind === "position") {
      return selection.sign.id === ids.signId && selection.position.ar === ids.posAr;
    }
    return false;
  };

  const selectState = (state) => {
    setSelection({ kind: "state", state });
    if (!expandedStates[state.id]) toggleState(state.id);
  };

  const selectSign = (state, sign) => {
    setSelection({ kind: "sign", state, sign });
    if (!expandedStates[state.id]) toggleState(state.id);
    if (!expandedSigns[sign.id]) toggleSign(sign.id);
  };

  const selectPos = (state, sign, position) => {
    setSelection({ kind: "position", state, sign, position });
    if (!expandedStates[state.id]) toggleState(state.id);
    if (!expandedSigns[sign.id]) toggleSign(sign.id);
  };

  return (
    <div className="ajr-mmap-canvas" dir="ltr">
      <div className={`ajr-mmap-hub${path.hub ? " is-on-path" : ""}`}>
        <button
          type="button"
          className={`ajr-mmap-hub__node${isSelected("hub") ? " is-selected" : ""}`}
          onClick={() => setSelection({ kind: "hub" })}
        >
          <span className="ajr-mmap-hub__ar" dir="rtl">
            عَلَامَاتُ الْإِعْرَابِ
          </span>
          <span className="ajr-mmap-hub__en">Signs of Iʿrāb</span>
          <span className="ajr-mmap-hub__sub">4 states · 14 signs</span>
        </button>
        <div className="ajr-mmap-hub__stem" aria-hidden />
      </div>

      <div className="ajr-mmap-branches">
        <div className={`ajr-mmap-branches__rail${path.hub ? " is-on-path" : ""}`} aria-hidden />
        {ALAMAT_IRAB_MINDMAP.map((state) => {
          const open = expandedStates[state.id];
          const onPath = path.stateId === state.id;
          const stateSelected = isSelected("state", { stateId: state.id });
          return (
            <div
              key={state.id}
              className={`ajr-mmap-branch ajr-mmap-branch--${state.tone}${open ? " is-open" : ""}${
                onPath ? " is-on-path" : ""
              }`}
            >
              <div className="ajr-mmap-branch__stem" aria-hidden />
              <button
                type="button"
                className={`ajr-mmap-node ajr-mmap-node--state${stateSelected ? " is-selected" : ""}${
                  onPath ? " is-on-path" : ""
                }`}
                onClick={() => selectState(state)}
              >
                <span className="ajr-mmap-node__ar" dir="rtl">
                  {state.ar.replace(/^عَلَامَاتُ |^عَلَامَتَا /, "")}
                </span>
                <span className="ajr-mmap-node__en">
                  {state.en.replace(/^Signs of |^The Two Signs of /, "")}
                </span>
                <span className="ajr-mmap-node__count">{state.signs.length} signs</span>
              </button>

              <button
                type="button"
                className="ajr-mmap-expand"
                onClick={() => toggleState(state.id)}
                aria-expanded={open}
                aria-label={open ? `Collapse ${state.en}` : `Expand ${state.en}`}
              >
                {open ? "▾" : "▸"}
              </button>

              {open ? (
                <div className="ajr-mmap-sign-tree">
                  <div className="ajr-mmap-sign-tree__rail" aria-hidden />
                  {state.signs.map((sign) => {
                    const signOpen = !!expandedSigns[sign.id];
                    const signOnPath = path.signId === sign.id;
                    const signSelected = isSelected("sign", { signId: sign.id });
                    return (
                      <div
                        key={sign.id}
                        className={`ajr-mmap-sign-arm${sign.kind === "original" ? " is-original" : ""}${
                          signOpen ? " is-open" : ""
                        }${signOnPath ? " is-on-path" : ""}`}
                      >
                        <div className="ajr-mmap-sign-arm__stem" aria-hidden />
                        <button
                          type="button"
                          className={`ajr-mmap-node ajr-mmap-node--sign${
                            sign.kind === "original" ? " is-original" : " is-furoo"
                          }${signSelected ? " is-selected" : ""}${signOnPath ? " is-on-path" : ""}`}
                          onClick={() => selectSign(state, sign)}
                        >
                          <span className="ajr-mmap-node__ar" dir="rtl">
                            {sign.ar}
                          </span>
                          <span className="ajr-mmap-node__en">{sign.en}</span>
                          <span
                            className={`ajr-mmap-node__tag${
                              sign.kind === "original" ? " is-orig" : " is-furoo"
                            }`}
                          >
                            {sign.kind === "original" ? "أصل" : "فرع"}
                          </span>
                        </button>
                        <button
                          type="button"
                          className="ajr-mmap-expand ajr-mmap-expand--sign"
                          onClick={() => toggleSign(sign.id)}
                          aria-expanded={signOpen}
                          aria-label={signOpen ? `Collapse ${sign.en}` : `Expand ${sign.en}`}
                        >
                          {signOpen ? "▾" : "▸"}
                        </button>

                        {signOpen ? (
                          <div className="ajr-mmap-leaves">
                            {sign.positions.map((pos) => {
                              const posSelected = isSelected("position", {
                                signId: sign.id,
                                posAr: pos.ar,
                              });
                              const posOnPath = posSelected;
                              return (
                                <div
                                  key={pos.ar}
                                  className={`ajr-mmap-leaf-arm${posOnPath ? " is-on-path" : ""}`}
                                >
                                  <button
                                    type="button"
                                    className={`ajr-mmap-node ajr-mmap-node--leaf${
                                      posSelected ? " is-selected" : ""
                                    }${posOnPath ? " is-on-path" : ""}`}
                                    onClick={() => selectPos(state, sign, pos)}
                                  >
                                    <span className="ajr-mmap-node__ar" dir="rtl">
                                      {pos.ar}
                                    </span>
                                    <span className="ajr-mmap-node__en">{pos.en}</span>
                                  </button>
                                </div>
                              );
                            })}
                          </div>
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function SummaryNaCell({ label }) {
  return (
    <span className="ajr-mmap-na" title={label || "Not used for this type"}>
      n/a
    </span>
  );
}

function SummarySignCell({ value, naLabel, isException }) {
  if (!value) return <SummaryNaCell label={naLabel} />;
  return (
    <span className={isException ? "ajr-mmap-sign ajr-mmap-sign--ex" : "ajr-mmap-sign"}>
      {value}
      {isException ? <span className="ajr-mmap-sign__star" aria-hidden>★</span> : null}
    </span>
  );
}

function SummaryExceptionCard({ ex, typeLabel }) {
  const kindLabel =
    ex.kind === "subtype"
      ? "Exception inside this type"
      : ex.kind === "condition"
        ? "Condition on a type above"
        : "Exception to the default sign";

  return (
    <div className={`ajr-mmap-ex-card ajr-mmap-ex-card--${ex.kind || "sign-swap"}`}>
      <div className="ajr-mmap-ex-card__icon" aria-hidden>
        ★
      </div>
      <div className="ajr-mmap-ex-card__body">
        <div className="ajr-mmap-ex-card__kind">{kindLabel}</div>
        <div className="ajr-mmap-ex-card__who" dir="rtl">
          {typeLabel}
          <span className="ajr-mmap-ex-card__case"> · {ex.caseAr}</span>
        </div>
        {ex.appliesWhenAr ? (
          <p className="ajr-mmap-ex-card__when" dir="rtl">
            {ex.appliesWhenAr}
            {ex.appliesWhenEn ? (
              <span className="ajr-mmap-ex-card__when-en"> — {ex.appliesWhenEn}</span>
            ) : null}
          </p>
        ) : null}
        <div className="ajr-mmap-ex-card__swap-block">
          <div className="ajr-mmap-ex-card__swap-row">
            <span className="ajr-mmap-ex-card__swap-label">Default (الأصل)</span>
            <span className="ajr-mmap-ex-card__expected" dir="rtl">
              {ex.expected}
            </span>
          </div>
          <div className="ajr-mmap-ex-card__swap-row is-actual">
            <span className="ajr-mmap-ex-card__swap-label">Uses instead</span>
            <span className="ajr-mmap-ex-card__actual" dir="rtl">
              {ex.actual}
            </span>
          </div>
        </div>
        {ex.scopeAr ? (
          <p className="ajr-mmap-ex-card__scope" dir="rtl">
            {ex.scopeAr}
          </p>
        ) : null}
        {ex.scopeEn ? <p className="ajr-mmap-ex-card__en">{ex.scopeEn}</p> : null}
        <p className="ajr-mmap-ex-card__matn" dir="rtl">
          {ex.matnAr}
        </p>
        {ex.defEn ? <p className="ajr-mmap-ex-card__en ajr-mmap-ex-card__en--rule">{ex.defEn}</p> : null}
      </div>
    </div>
  );
}

function SummaryCaseTable({ side }) {
  const s = ALAMAT_MUARABAT_SUMMARY;
  const cols = s.columns;
  const caseKeys = ["raf", "nasb", "khafd", "jazm"];

  return (
    <div className="ajr-mmap-table-wrap ajr-mmap-table-wrap--summary">
      <table className="ajr-mmap-table ajr-mmap-table--banded" dir="rtl">
        <thead>
          <tr>
            {cols.map((col) => (
              <th key={col.key} scope="col">
                {col.ar}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {side.rows.map((row, rowIndex) => {
            const exCaseKey =
              row.exception?.caseAr === "النَّصْب"
                ? "nasb"
                : row.exception?.caseAr === "الْجَزْم"
                  ? "jazm"
                  : row.exception?.caseAr === "الْخَفْض"
                    ? "khafd"
                    : null;
            return (
              <Fragment key={row.type}>
                <tr
                  className={[
                    "ajr-mmap-table__data",
                    rowIndex % 2 === 1 ? "is-band" : "",
                    row.exception ? "has-exception" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <td className="ajr-mmap-table__type" dir="rtl">
                    {row.type}
                  </td>
                  {caseKeys.map((key) => (
                    <td key={key} dir="rtl">
                      <SummarySignCell
                        value={row[key]}
                        naLabel={row[`${key}Na`]}
                        isException={
                          Boolean(row.exception) &&
                          exCaseKey === key &&
                          row[key] === row.exception.actual
                        }
                      />
                    </td>
                  ))}
                </tr>
                {row.exception ? (
                  <tr className="ajr-mmap-table__ex-row">
                    <td colSpan={cols.length}>
                      <SummaryExceptionCard ex={row.exception} typeLabel={row.type} />
                    </td>
                  </tr>
                ) : null}
              </Fragment>
            );
          })}
        </tbody>
      </table>
      {side.extraException ? (
        <SummaryExceptionCard
          ex={side.extraException}
          typeLabel={side.extraException.type}
        />
      ) : null}
    </div>
  );
}

function SummaryMindMap() {
  const s = ALAMAT_MUARABAT_SUMMARY;
  return (
    <section className="ajr-mmap-summary" id="mm-summary">
      <header className="ajr-mmap-summary__head">
        <h2 className="ajr-mmap-summary__title" dir="rtl">
          {s.ar}
        </h2>
        <p className="ajr-mmap-summary__subtitle">{s.en}</p>
        <p className="ajr-mmap-summary__matn" dir="rtl">
          {s.matnAr}
        </p>
      </header>
      <div className="ajr-mmap-summary__stem" aria-hidden />
      <div className="ajr-mmap-summary__rail" aria-hidden />
      <div className="ajr-mmap-summary__two">
        <div className="ajr-mmap-summary__col">
          <div className="ajr-mmap-summary__stem-down" aria-hidden />
          <div className="ajr-mmap-summary__col-head is-original">
            <span className="ajr-mmap-summary__col-ar" dir="rtl">
              {s.byHarakat.titleAr}
            </span>
            <span className="ajr-mmap-summary__col-en">{s.byHarakat.titleEn}</span>
            <p className="ajr-mmap-summary__col-note" dir="rtl">
              {s.byHarakat.defaultNoteAr}
            </p>
            <p className="ajr-mmap-summary__col-hint">
              ★ Three exceptions break only one default sign — they are not new word classes.
            </p>
          </div>
          <SummaryCaseTable side={s.byHarakat} />
        </div>
        <div className="ajr-mmap-summary__col">
          <div className="ajr-mmap-summary__stem-down" aria-hidden />
          <div className="ajr-mmap-summary__col-head">
            <span className="ajr-mmap-summary__col-ar" dir="rtl">
              {s.byHuruf.titleAr}
            </span>
            <span className="ajr-mmap-summary__col-en">{s.byHuruf.titleEn}</span>
            <p className="ajr-mmap-summary__col-note" dir="rtl">
              {s.byHuruf.lettersNoteAr}
            </p>
          </div>
          <SummaryCaseTable side={s.byHuruf} />
        </div>
      </div>
    </section>
  );
}

export default function AjrumiyyahAlamatMindMapPage() {
  const [selection, setSelection] = useState(null);
  const [expandedStates, setExpandedStates] = useState({
    raf: false,
    nasb: false,
    khafd: false,
    jazm: false,
  });
  const [expandedSigns, setExpandedSigns] = useState({});
  const [showTop, setShowTop] = useState(false);

  const toggleState = (id) => {
    setExpandedStates((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleSign = (id) => {
    setExpandedSigns((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const expandAll = () => {
    setExpandedStates({ raf: true, nasb: true, khafd: true, jazm: true });
    const all = {};
    for (const state of ALAMAT_IRAB_MINDMAP) {
      for (const sign of state.signs) all[sign.id] = true;
    }
    setExpandedSigns(all);
  };

  const collapseAll = () => {
    setExpandedStates({ raf: false, nasb: false, khafd: false, jazm: false });
    setExpandedSigns({});
    setSelection(null);
  };

  const selectionKey = useMemo(() => {
    if (!selection) return "none";
    if (selection.kind === "hub") return "hub";
    if (selection.kind === "state") return `s:${selection.state.id}`;
    if (selection.kind === "sign") return `g:${selection.sign.id}`;
    return `p:${selection.sign.id}:${selection.position.ar}`;
  }, [selection]);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 480);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <CourseLayout fullWidth courseId="ajrumiyyah" sidebar={<AjrumiyyahCourseSidebar activeTool="alamat-mindmap" />}>
      <div className="ajrumiyyah-content ajr-mmap-page">
        <header className="ajr-mmap-hero ajr-mmap-hero--compact" id="mm-top">
          <h1 className="ajr-mmap-title-ar" dir="rtl">
            {ALAMAT_IRAB_MINDMAP_META.titleAr}
          </h1>
          <p className="ajr-mmap-subtitle">
            Start from the four states — expand a branch, then a sign, then click a position for its
            commentary definition.
          </p>
          <div className="ajr-mmap-hero-actions">
            <button type="button" className="course-btn secondary" onClick={expandAll}>
              Expand all
            </button>
            <button type="button" className="course-btn secondary" onClick={collapseAll}>
              Collapse to overview
            </button>
          </div>
        </header>

        <div className="ajr-mmap-legend" aria-label="Legend">
          <span>
            <i className="ajr-mmap-dot ajr-mmap-dot--orig" /> أصل · original
          </span>
          <span>
            <i className="ajr-mmap-dot ajr-mmap-dot--furoo" /> فرع · stand-in
          </span>
          <span>
            <i className="ajr-mmap-dot ajr-mmap-dot--leaf" /> موضع · position
          </span>
          <span className="ajr-mmap-legend__tones">
            <i className="ajr-mmap-swatch ajr-mmap-swatch--raf" /> رفع
            <i className="ajr-mmap-swatch ajr-mmap-swatch--nasb" /> نصب
            <i className="ajr-mmap-swatch ajr-mmap-swatch--khafd" /> خفض
            <i className="ajr-mmap-swatch ajr-mmap-swatch--jazm" /> جزم
          </span>
        </div>

        <div className="ajr-mmap-workspace">
          <div className="ajr-mmap-scroll">
            <MindMapCanvas
              selection={selection}
              setSelection={setSelection}
              expandedStates={expandedStates}
              toggleState={toggleState}
              expandedSigns={expandedSigns}
              toggleSign={toggleSign}
            />
          </div>
          <DetailPanel
            key={selectionKey}
            selection={selection}
            onClose={() => setSelection(null)}
          />
        </div>

        <SummaryMindMap />

        <section className="ajr-mmap-matrix-block" id="mm-matrix">
          <header className="ajr-mmap-matrix-block__head">
            <h2 dir="rtl">{ALAMAT_QUICK_MATRIX.titleAr}</h2>
            <p className="ajr-mmap-matrix-block__en">{ALAMAT_QUICK_MATRIX.titleEn}</p>
            <p>{ALAMAT_QUICK_MATRIX.blurbEn}</p>
            <div className="ajr-mmap-matrix-legend" aria-hidden>
              <span className="ajr-mmap-matrix-legend__case is-raf">
                <span className="ajr-mmap-swatch ajr-mmap-swatch--raf" /> الرَّفْع
              </span>
              <span className="ajr-mmap-matrix-legend__case is-nasb">
                <span className="ajr-mmap-swatch ajr-mmap-swatch--nasb" /> النَّصْب
              </span>
              <span className="ajr-mmap-matrix-legend__case is-khafd">
                <span className="ajr-mmap-swatch ajr-mmap-swatch--khafd" /> الْخَفْض
              </span>
              <span className="ajr-mmap-matrix-legend__case is-jazm">
                <span className="ajr-mmap-swatch ajr-mmap-swatch--jazm" /> الْجَزْم
              </span>
              <span>
                <span className="ajr-mmap-sign__star">★</span> exception
              </span>
              <span>
                <span className="ajr-mmap-na">n/a</span> state not used
              </span>
            </div>
          </header>
          <div className="ajr-mmap-table-wrap ajr-mmap-table-wrap--matrix">
            <table className="ajr-mmap-table ajr-mmap-table--banded ajr-mmap-table--matrix" dir="rtl">
              <thead>
                <tr>
                  {ALAMAT_QUICK_MATRIX.columns.map((col) => (
                    <th
                      key={col.key}
                      scope="col"
                      className={col.key === "type" ? "is-type" : `is-case is-${col.key}`}
                    >
                      <span dir="rtl">{col.ar}</span>
                      {col.en ? <span className="ajr-mmap-table__col-en">{col.en}</span> : null}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ALAMAT_QUICK_MATRIX.groups.map((group) => (
                  <Fragment key={group.id}>
                    <tr className={`ajr-mmap-table__group is-${group.id}`}>
                      <td colSpan={ALAMAT_QUICK_MATRIX.columns.length}>
                        <span dir="rtl">{group.labelAr}</span>
                        <span className="ajr-mmap-table__group-en">{group.labelEn}</span>
                      </td>
                    </tr>
                    {group.rows.map((row, rowIndex) => (
                      <tr
                        key={row.type}
                        className={[
                          "ajr-mmap-table__data",
                          rowIndex % 2 === 1 ? "is-band" : "",
                          row.nasbException || row.khafdException || row.jazmException
                            ? "has-exception"
                            : "",
                        ]
                          .filter(Boolean)
                          .join(" ")}
                      >
                        <td className="ajr-mmap-table__type" dir="rtl">
                          {row.type}
                        </td>
                        {["raf", "nasb", "khafd", "jazm"].map((key) => (
                          <td key={key} dir="rtl" className={`is-case is-${key}`}>
                            <SummarySignCell
                              value={row[key]}
                              naLabel={row[`${key}Na`]}
                              isException={Boolean(row[`${key}Exception`])}
                            />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {showTop ? (
          <button
            type="button"
            className="ajr-mmap-totop"
            onClick={() => document.getElementById("mm-top")?.scrollIntoView({ behavior: "smooth" })}
          >
            ↑ Top
          </button>
        ) : null}
      </div>
    </CourseLayout>
  );
}

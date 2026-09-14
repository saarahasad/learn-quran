import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ajrumiyyahStudyPath,
} from "../data/ajrumiyyahCourse.js";
import {
  KALAM_BRANCHES_OVERVIEW,
  KALAM_MINDMAP,
  KALAM_MINDMAP_META,
  KALAM_QUICK_MATRIX,
} from "../data/kalamMindMap.js";
import AjrumiyyahCourseSidebar from "../components/AjrumiyyahCourseSidebar.jsx";
import CourseLayout from "../components/CourseLayout.jsx";
import "../styles/ajrumiyyah.css";

function studyLink(lineIndex) {
  return ajrumiyyahStudyPath(KALAM_MINDMAP_META.chapterId, lineIndex);
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

function topicKindLabel(kind) {
  if (kind === "sign") return "عَلَامَة · recognition";
  if (kind === "type") return "نَوْع · kind";
  return "تَعْرِيف · definition";
}

function DetailPanel({ selection, onClose }) {
  if (!selection) {
    return (
      <aside className="ajr-mmap-detail ajr-mmap-detail--empty" aria-live="polite">
        <p className="ajr-mmap-detail__hint">
          Click any node on the mind map to see its commentary definition, signs, and examples.
        </p>
        <div className="ajr-mmap-cdef ajr-mmap-cdef--hub">
          <p className="ajr-mmap-cdef__label">Chapter definition</p>
          <p className="ajr-mmap-cdef__ar ajr-mmap-cdef__ar--main" dir="rtl">
            {KALAM_MINDMAP_META.defAr}
          </p>
          <p className="ajr-mmap-cdef__en">{KALAM_MINDMAP_META.defEn}</p>
        </div>
        <div className="ajr-mmap-cdef">
          <p className="ajr-mmap-cdef__label">Note</p>
          <p className="ajr-mmap-cdef__ar" dir="rtl">
            {KALAM_MINDMAP_META.noteAr}
          </p>
          <p className="ajr-mmap-cdef__en">{KALAM_MINDMAP_META.noteEn}</p>
        </div>
      </aside>
    );
  }

  const { kind, branch, topic, leaf } = selection;
  const lessonHref =
    kind === "branch"
      ? studyLink(branch.lineIndex)
      : topic?.lineIndex != null
        ? studyLink(topic.lineIndex)
        : branch?.lineIndex != null
          ? studyLink(branch.lineIndex)
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
        {header("أَنْوَاعُ الْكَلَامِ")}
        <h3>Types of Speech</h3>
        <CommentaryDef defAr={KALAM_MINDMAP_META.defAr} defEn={KALAM_MINDMAP_META.defEn} />
        <p className="ajr-mmap-detail__sub">Four branches</p>
        <div className="ajr-mmap-detail__chips">
          {KALAM_BRANCHES_OVERVIEW.map((s) => (
            <span key={s.id} className="ajr-mmap-chip" dir="rtl">
              {s.ar}
            </span>
          ))}
        </div>
      </aside>
    );
  }

  if (kind === "branch") {
    return (
      <aside className={`ajr-mmap-detail ajr-mmap-detail--${branch.tone}`}>
        {header(branch.ar)}
        <h3>{branch.en}</h3>
        <CommentaryDef
          matnAr={branch.matnAr}
          defAr={branch.defAr}
          defEn={branch.defEn}
          langAr={branch.langAr}
          istilahAr={branch.istilahAr}
        />
        <p className="ajr-mmap-detail__body">{branch.intro}</p>
        <div className="ajr-mmap-detail__chips">
          {branch.topics.map((t) => (
            <span key={t.id} className="ajr-mmap-chip" dir="rtl">
              {t.ar}
            </span>
          ))}
        </div>
        {lessonHref ? (
          <Link className="ajr-mmap-detail__cta" to={lessonHref}>
            Open study section →
          </Link>
        ) : null}
      </aside>
    );
  }

  if (kind === "topic") {
    return (
      <aside className={`ajr-mmap-detail ajr-mmap-detail--${branch.tone}`}>
        {header(branch.ar)}
        <h3>
          <span dir="rtl">{topic.ar}</span>
          <span className="ajr-mmap-detail__en">{topic.en}</span>
        </h3>
        <div className="ajr-mmap-detail__meta">
          <span className="ajr-mmap-chip">{topicKindLabel(topic.kind)}</span>
        </div>
        <CommentaryDef matnAr={topic.matnAr} defAr={topic.defAr} defEn={topic.defEn} />
        {topic.memorize ? (
          <p className="ajr-mmap-detail__memo">
            <strong>Memorise:</strong> {topic.memorize}
          </p>
        ) : null}
        <p className="ajr-mmap-detail__sub">Expand for details</p>
        <div className="ajr-mmap-detail__chips">
          {topic.leaves.map((l) => (
            <span key={l.ar} className="ajr-mmap-chip" dir="rtl">
              {l.ar}
            </span>
          ))}
        </div>
        {lessonHref ? (
          <Link className="ajr-mmap-detail__cta" to={lessonHref}>
            Open full lesson →
          </Link>
        ) : null}
      </aside>
    );
  }

  // leaf
  return (
    <aside className={`ajr-mmap-detail ajr-mmap-detail--${branch.tone}`}>
      {header(`${branch.ar} ← ${topic.ar}`)}
      <h3>
        <span dir="rtl">{leaf.ar}</span>
        <span className="ajr-mmap-detail__en">{leaf.en}</span>
      </h3>
      <CommentaryDef defAr={leaf.defAr} defEn={leaf.defEn} />
      {leaf.examples?.length ? (
        <>
          <p className="ajr-mmap-detail__sub">Examples</p>
          <ExampleList examples={leaf.examples} />
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
  expandedBranches,
  toggleBranch,
  expandedTopics,
  toggleTopic,
}) {
  const path = {
    hub: !!selection,
    branchId: selection?.branch?.id ?? null,
    topicId: selection?.topic?.id ?? null,
    leafAr: selection?.leaf?.ar ?? null,
  };

  const isSelected = (kind, ids) => {
    if (!selection || selection.kind !== kind) return false;
    if (kind === "hub") return true;
    if (kind === "branch") return selection.branch.id === ids.branchId;
    if (kind === "topic") return selection.topic.id === ids.topicId;
    if (kind === "leaf") {
      return selection.topic.id === ids.topicId && selection.leaf.ar === ids.leafAr;
    }
    return false;
  };

  const selectBranch = (branch) => {
    setSelection({ kind: "branch", branch });
    if (!expandedBranches[branch.id]) toggleBranch(branch.id);
  };

  const selectTopic = (branch, topic) => {
    setSelection({ kind: "topic", branch, topic });
    if (!expandedBranches[branch.id]) toggleBranch(branch.id);
    if (!expandedTopics[topic.id]) toggleTopic(topic.id);
  };

  const selectLeaf = (branch, topic, leaf) => {
    setSelection({ kind: "leaf", branch, topic, leaf });
    if (!expandedBranches[branch.id]) toggleBranch(branch.id);
    if (!expandedTopics[topic.id]) toggleTopic(topic.id);
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
            أَنْوَاعُ الْكَلَامِ
          </span>
          <span className="ajr-mmap-hub__en">Types of Speech</span>
          <span className="ajr-mmap-hub__sub">definition · 3 word-types · signs</span>
        </button>
        <div className="ajr-mmap-hub__stem" aria-hidden />
      </div>

      <div className="ajr-mmap-branches">
        <div className={`ajr-mmap-branches__rail${path.hub ? " is-on-path" : ""}`} aria-hidden />
        {KALAM_MINDMAP.map((branch) => {
          const open = expandedBranches[branch.id];
          const onPath = path.branchId === branch.id;
          const branchSelected = isSelected("branch", { branchId: branch.id });
          return (
            <div
              key={branch.id}
              className={`ajr-mmap-branch ajr-mmap-branch--${branch.tone}${open ? " is-open" : ""}${
                onPath ? " is-on-path" : ""
              }`}
            >
              <div className="ajr-mmap-branch__stem" aria-hidden />
              <button
                type="button"
                className={`ajr-mmap-node ajr-mmap-node--state${branchSelected ? " is-selected" : ""}${
                  onPath ? " is-on-path" : ""
                }`}
                onClick={() => selectBranch(branch)}
              >
                <span className="ajr-mmap-node__ar" dir="rtl">
                  {branch.ar}
                </span>
                <span className="ajr-mmap-node__en">{branch.en}</span>
                <span className="ajr-mmap-node__count">{branch.topics.length} topics</span>
              </button>

              <button
                type="button"
                className="ajr-mmap-expand"
                onClick={() => toggleBranch(branch.id)}
                aria-expanded={open}
                aria-label={open ? `Collapse ${branch.en}` : `Expand ${branch.en}`}
              >
                {open ? "▾" : "▸"}
              </button>

              {open ? (
                <div className="ajr-mmap-sign-tree">
                  <div className="ajr-mmap-sign-tree__rail" aria-hidden />
                  {branch.topics.map((topic) => {
                    const topicOpen = !!expandedTopics[topic.id];
                    const topicOnPath = path.topicId === topic.id;
                    const topicSelected = isSelected("topic", { topicId: topic.id });
                    return (
                      <div
                        key={topic.id}
                        className={`ajr-mmap-sign-arm${topic.kind === "def" ? " is-original" : ""}${
                          topicOpen ? " is-open" : ""
                        }${topicOnPath ? " is-on-path" : ""}`}
                      >
                        <div className="ajr-mmap-sign-arm__stem" aria-hidden />
                        <button
                          type="button"
                          className={`ajr-mmap-node ajr-mmap-node--sign${
                            topic.kind === "def" ? " is-original" : " is-furoo"
                          }${topicSelected ? " is-selected" : ""}${topicOnPath ? " is-on-path" : ""}`}
                          onClick={() => selectTopic(branch, topic)}
                        >
                          <span className="ajr-mmap-node__ar" dir="rtl">
                            {topic.ar}
                          </span>
                          <span className="ajr-mmap-node__en">{topic.en}</span>
                          <span
                            className={`ajr-mmap-node__tag${
                              topic.kind === "def" ? " is-orig" : " is-furoo"
                            }`}
                          >
                            {topic.kind === "sign" ? "علامة" : topic.kind === "type" ? "نوع" : "تعريف"}
                          </span>
                        </button>
                        <button
                          type="button"
                          className="ajr-mmap-expand ajr-mmap-expand--sign"
                          onClick={() => toggleTopic(topic.id)}
                          aria-expanded={topicOpen}
                          aria-label={topicOpen ? `Collapse ${topic.en}` : `Expand ${topic.en}`}
                        >
                          {topicOpen ? "▾" : "▸"}
                        </button>

                        {topicOpen ? (
                          <div className="ajr-mmap-leaves">
                            {topic.leaves.map((leaf) => {
                              const leafSelected = isSelected("leaf", {
                                topicId: topic.id,
                                leafAr: leaf.ar,
                              });
                              return (
                                <div
                                  key={leaf.ar}
                                  className={`ajr-mmap-leaf-arm${leafSelected ? " is-on-path" : ""}`}
                                >
                                  <button
                                    type="button"
                                    className={`ajr-mmap-node ajr-mmap-node--leaf${
                                      leafSelected ? " is-selected" : ""
                                    }${leafSelected ? " is-on-path" : ""}`}
                                    onClick={() => selectLeaf(branch, topic, leaf)}
                                  >
                                    <span className="ajr-mmap-node__ar" dir="rtl">
                                      {leaf.ar}
                                    </span>
                                    <span className="ajr-mmap-node__en">{leaf.en}</span>
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

function QuickRecall() {
  const m = KALAM_QUICK_MATRIX;
  return (
    <section className="ajr-mmap-matrix-block ajr-kalam-recall" id="mm-recall">
      <header className="ajr-mmap-matrix-block__head">
        <h2 dir="rtl">{m.titleAr}</h2>
        <p className="ajr-mmap-matrix-block__en">{m.titleEn}</p>
        <p>{m.blurbEn}</p>
      </header>
      <div className="ajr-mmap-table-wrap">
        <table className="ajr-mmap-table ajr-mmap-table--banded ajr-kalam-recall__table" dir="rtl">
          <thead>
            <tr>
              <th scope="col">النَّوْع</th>
              <th scope="col">التَّعْرِيف</th>
              <th scope="col">الْعَلَامَات</th>
            </tr>
          </thead>
          <tbody>
            {m.rows.map((row, i) => (
              <FragmentRow key={row.type} row={row} band={i % 2 === 1} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function FragmentRow({ row, band }) {
  return (
    <>
      <tr className={`ajr-mmap-table__data${band ? " is-band" : ""}`}>
        <td className="ajr-mmap-table__type" dir="rtl">
          {row.type}
        </td>
        <td dir="rtl">{row.def}</td>
        <td dir="rtl">{row.signs}</td>
      </tr>
      {row.extra ? (
        <tr className="ajr-kalam-recall__extra">
          <td colSpan={3} dir="rtl">
            {row.extra}
          </td>
        </tr>
      ) : null}
    </>
  );
}

export default function AjrumiyyahKalamMindMapPage() {
  const [selection, setSelection] = useState(null);
  const [expandedBranches, setExpandedBranches] = useState({
    taarif: false,
    ism: false,
    fiil: false,
    harf: false,
  });
  const [expandedTopics, setExpandedTopics] = useState({});
  const [showTop, setShowTop] = useState(false);

  const toggleBranch = (id) => {
    setExpandedBranches((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleTopic = (id) => {
    setExpandedTopics((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const expandAll = () => {
    setExpandedBranches({ taarif: true, ism: true, fiil: true, harf: true });
    const all = {};
    for (const branch of KALAM_MINDMAP) {
      for (const topic of branch.topics) all[topic.id] = true;
    }
    setExpandedTopics(all);
  };

  const collapseAll = () => {
    setExpandedBranches({ taarif: false, ism: false, fiil: false, harf: false });
    setExpandedTopics({});
    setSelection(null);
  };

  const selectionKey = useMemo(() => {
    if (!selection) return "none";
    if (selection.kind === "hub") return "hub";
    if (selection.kind === "branch") return `b:${selection.branch.id}`;
    if (selection.kind === "topic") return `t:${selection.topic.id}`;
    return `l:${selection.topic.id}:${selection.leaf.ar}`;
  }, [selection]);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 480);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <CourseLayout fullWidth courseId="ajrumiyyah" sidebar={<AjrumiyyahCourseSidebar activeTool="kalam-mindmap" />}>
      <div className="ajrumiyyah-content ajr-mmap-page ajr-kalam-mmap">
        <header className="ajr-mmap-hero ajr-mmap-hero--compact" id="mm-top">
          <h1 className="ajr-mmap-title-ar" dir="rtl">
            {KALAM_MINDMAP_META.titleAr}
          </h1>
          <p className="ajr-mmap-subtitle">{KALAM_MINDMAP_META.subtitle}</p>
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
            <i className="ajr-mmap-dot ajr-mmap-dot--orig" /> تعريف · definition
          </span>
          <span>
            <i className="ajr-mmap-dot ajr-mmap-dot--furoo" /> علامة / نوع · sign or kind
          </span>
          <span className="ajr-mmap-legend__tones">
            <i className="ajr-mmap-swatch ajr-mmap-swatch--taarif" /> تعريف
            <i className="ajr-mmap-swatch ajr-mmap-swatch--ism" /> اسم
            <i className="ajr-mmap-swatch ajr-mmap-swatch--fiil" /> فعل
            <i className="ajr-mmap-swatch ajr-mmap-swatch--harf" /> حرف
          </span>
        </div>

        <div className="ajr-mmap-workspace">
          <div className="ajr-mmap-scroll">
            <MindMapCanvas
              selection={selection}
              setSelection={setSelection}
              expandedBranches={expandedBranches}
              toggleBranch={toggleBranch}
              expandedTopics={expandedTopics}
              toggleTopic={toggleTopic}
            />
          </div>
          <DetailPanel
            key={selectionKey}
            selection={selection}
            onClose={() => setSelection(null)}
          />
        </div>

        <QuickRecall />

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

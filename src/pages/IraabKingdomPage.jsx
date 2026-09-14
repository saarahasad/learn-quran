import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  IRAAB_CASTLES,
  IRAAB_CASTLE_ROAD_SIGNS,
  IRAAB_MUARAB_ROADS,
  IRAAB_TRAVELERS,
  IRAAB_TRAVELER_GROUPS,
  displayIraabBadge,
  getMabniRoleCheck,
  iraabSignAr,
  travelerRolesForCastle,
} from "../data/iraabKingdom.js";
import {
  getDoorKnowledge,
  getRoleKnowledge,
} from "../data/iraabKingdomKnowledge.js";
import { guidesForLines } from "../data/ajrumiyyahGuides.jsx";
import CommentaryPen from "../components/ajrumiyyah/CommentaryPen.jsx";
import StudySplitViewToggle, {
  splitPaneVisibility,
  useStudySplitView,
} from "../components/ajrumiyyah/StudySplitViewToggle.jsx";
import "../styles/iraabKingdomLand.css";
import "../styles/ajrumiyyah.css";

const CASTLE_ORDER = ["rafa", "nasb", "khafd", "jazm"];
const LABEL_LAYOUT_KEY = "iraab-kingdom-label-layout-v1";

function loadLabelLayout() {
  try {
    const raw = localStorage.getItem(LABEL_LAYOUT_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function saveLabelLayout(layout) {
  localStorage.setItem(LABEL_LAYOUT_KEY, JSON.stringify(layout));
}

function labelKey(castleId, signId) {
  return `${castleId}:${signId}`;
}

function clampPct(n) {
  return Math.min(98, Math.max(2, n));
}

/** Map geometry in viewBox / % space (0–100). */
const HUB = { x: 50, y: 50 };
const CASTLE_POS = {
  rafa: { x: 50, y: 7 },
  khafd: { x: 6, y: 50 },
  nasb: { x: 50, y: 93 },
  jazm: { x: 94, y: 50 },
};

/**
 * Near-castle bands — labels stay by their castle, not across the whole map.
 * Each zone sits between the hub clearance and the castle.
 */
const CASTLE_LABEL_ZONE = {
  rafa: { x0: 18, x1: 82, y0: 10, y1: 38 },
  nasb: { x0: 18, x1: 82, y0: 62, y1: 90 },
  khafd: { x0: 6, x1: 38, y0: 18, y1: 82 },
  jazm: { x0: 62, x1: 94, y0: 18, y1: 82 },
};

function slotInCastleZone(slot, castleId) {
  const z = CASTLE_LABEL_ZONE[castleId];
  if (!z) return false;
  return slot.x >= z.x0 && slot.x <= z.x1 && slot.y >= z.y0 && slot.y <= z.y1;
}

/** Fixed plaque footprint in map % — must match CSS .kg-road-label size. */
const LABEL_FOOTPRINT = { w: 9.2, h: 6.8 };
const PACK_BOUNDS = { x0: 4, x1: 96, y0: 7, y1: 93 };
const HUB_CLEAR = 12;
const CASTLE_CLEAR = 9;

function buildCandidateSlots() {
  const stepX = LABEL_FOOTPRINT.w + 0.7;
  const stepY = LABEL_FOOTPRINT.h + 0.65;
  const width = PACK_BOUNDS.x1 - PACK_BOUNDS.x0;
  const height = PACK_BOUNDS.y1 - PACK_BOUNDS.y0;
  const cols = Math.max(1, Math.floor(width / stepX));
  const rows = Math.max(1, Math.floor(height / stepY));
  const sx = width / cols;
  const sy = height / rows;
  const slots = [];

  for (let r = 0; r < rows; r += 1) {
    for (let c = 0; c < cols; c += 1) {
      const x = PACK_BOUNDS.x0 + (c + 0.5) * sx;
      const y = PACK_BOUNDS.y0 + (r + 0.5) * sy;
      if (Math.hypot(x - HUB.x, y - HUB.y) < HUB_CLEAR) continue;
      let nearCastle = false;
      for (const id of CASTLE_ORDER) {
        const p = CASTLE_POS[id];
        if (Math.hypot(x - p.x, y - p.y) < CASTLE_CLEAR) {
          nearCastle = true;
          break;
        }
      }
      if (nearCastle) continue;
      slots.push({ x, y });
    }
  }
  return slots;
}

/**
 * Farthest-point sample: spread `count` picks across the candidate set.
 * Biased toward `anchor` (the castle) so boards stay nearby.
 */
function pickSpreadSlots(candidates, count, anchor) {
  if (count <= 0 || !candidates.length) return [];
  if (candidates.length <= count) return candidates.slice();

  const remaining = candidates.map((c) => ({ ...c }));
  const picked = [];

  let seed = 0;
  if (anchor) {
    let best = Infinity;
    for (let i = 0; i < remaining.length; i += 1) {
      const d = Math.hypot(
        remaining[i].slot.x - anchor.x,
        remaining[i].slot.y - anchor.y
      );
      if (d < best) {
        best = d;
        seed = i;
      }
    }
  } else {
    const cx = remaining.reduce((s, c) => s + c.slot.x, 0) / remaining.length;
    const cy = remaining.reduce((s, c) => s + c.slot.y, 0) / remaining.length;
    let seedDist = Infinity;
    for (let i = 0; i < remaining.length; i += 1) {
      const d = Math.hypot(remaining[i].slot.x - cx, remaining[i].slot.y - cy);
      if (d < seedDist) {
        seedDist = d;
        seed = i;
      }
    }
  }
  picked.push(remaining.splice(seed, 1)[0]);

  while (picked.length < count && remaining.length) {
    let bestIdx = 0;
    let bestMin = -1;
    for (let i = 0; i < remaining.length; i += 1) {
      let minD = Infinity;
      for (const p of picked) {
        const d = Math.hypot(
          remaining[i].slot.x - p.slot.x,
          remaining[i].slot.y - p.slot.y
        );
        if (d < minD) minD = d;
      }
      const castleBias = anchor
        ? Math.hypot(
            remaining[i].slot.x - anchor.x,
            remaining[i].slot.y - anchor.y
          ) * 0.15
        : 0;
      const score = minD - castleBias;
      if (score > bestMin) {
        bestMin = score;
        bestIdx = i;
      }
    }
    picked.push(remaining.splice(bestIdx, 1)[0]);
  }

  picked.sort((a, b) => a.slot.y - b.slot.y || a.slot.x - b.slot.x);
  return picked;
}

/**
 * Assign signs unique slots near their castle, spread within that band.
 * `overrides` (`castleId:signId` → `{x,y}`) win over auto placement;
 * paths are always rebuilt through the final points.
 */
function buildAllCastleRoads(castleEntries, overrides = {}) {
  const slots = buildCandidateSlots();
  const used = new Set();
  const byCastle = Object.fromEntries(CASTLE_ORDER.map((id) => [id, []]));

  const ordered = [...castleEntries].sort(
    (a, b) => b.signs.length - a.signs.length
  );

  for (const { castleId, signs, allowed } of ordered) {
    if (!signs.length) continue;

    const dest = CASTLE_POS[castleId];
    const free = slots
      .map((slot, idx) => ({ slot, idx }))
      .filter((s) => !used.has(s.idx));

    const nearCastle = free.filter((s) => slotInCastleZone(s.slot, castleId));
    let pool = nearCastle;
    if (pool.length < signs.length) {
      pool = [...free].sort(
        (a, b) =>
          Math.hypot(a.slot.x - dest.x, a.slot.y - dest.y) -
          Math.hypot(b.slot.x - dest.x, b.slot.y - dest.y)
      );
    }

    // Stable auto slots for every sign first, then overlay saved positions.
    // Pinning one board must not reshuffle the rest.
    const chosen = pickSpreadSlots(pool, signs.length, dest);
    const roads = signs.map((sign, i) => {
      const pick = chosen[i];
      if (pick) used.add(pick.idx);
      const ov = overrides[labelKey(castleId, sign.id)];
      const hasOv =
        ov && Number.isFinite(Number(ov.x)) && Number.isFinite(Number(ov.y));
      const point = hasOv
        ? { x: clampPct(Number(ov.x)), y: clampPct(Number(ov.y)) }
        : pick
          ? { x: pick.slot.x, y: pick.slot.y }
          : { x: dest.x, y: dest.y };
      return {
        sign,
        point,
        d: "",
        lit: allowed.has(sign.id),
        pinned: Boolean(hasOv),
      };
    });

    const placed = roads.every((r) => r.pinned)
      ? roads
      : sortRoadsForPaths(roads, castleId);
    byCastle[castleId] = placed.map((road, i) => ({
      ...road,
      d: wavyPathThrough(road.point, castleId, i),
    }));
  }

  return byCastle;
}

/**
 * Elegant map route: hub → label → castle.
 * Follows the castle axis, then peels gently toward each board.
 */
function wavyPathThrough(label, castleId, index = 0) {
  const dest = CASTLE_POS[castleId];
  const ax = dest.x - HUB.x;
  const ay = dest.y - HUB.y;
  const aLen = Math.hypot(ax, ay) || 1;
  const ux = ax / aLen;
  const uy = ay / aLen;
  const px = -uy;
  const py = ux;

  const toLx = label.x - HUB.x;
  const toLy = label.y - HUB.y;
  const along = toLx * ux + toLy * uy;
  const side = toLx * px + toLy * py;
  const sideSign =
    Math.abs(side) > 0.35 ? Math.sign(side) : index % 2 === 0 ? 1 : -1;
  const sideAmt = Math.min(Math.abs(side), 18);

  // Hub → label: ride the great road, then curve into the board
  const peel = Math.min(5.5, 1.8 + sideAmt * 0.22);
  const c1 = {
    x: HUB.x + ux * Math.max(6, along * 0.28) + px * sideSign * peel * 0.25,
    y: HUB.y + uy * Math.max(6, along * 0.28) + py * sideSign * peel * 0.25,
  };
  const c2 = {
    x:
      label.x -
      ux * Math.min(8, Math.max(3, along * 0.18)) +
      px * side * 0.12 -
      toLx * 0.08,
    y:
      label.y -
      uy * Math.min(8, Math.max(3, along * 0.18)) +
      py * side * 0.12 -
      toLy * 0.08,
  };

  // Label → castle: leave the board and settle into the gate
  const toCx = dest.x - label.x;
  const toCy = dest.y - label.y;
  const cLen = Math.hypot(toCx, toCy) || 1;
  const nx = toCx / cLen;
  const ny = toCy / cLen;
  const gate = {
    x: dest.x - ux * 5.5,
    y: dest.y - uy * 5.5,
  };
  const c3 = {
    x: label.x + nx * Math.min(7, cLen * 0.28) + px * sideSign * peel * 0.15,
    y: label.y + ny * Math.min(7, cLen * 0.28) + py * sideSign * peel * 0.15,
  };
  const c4 = {
    x: gate.x - ux * 4 + px * sideSign * Math.min(2.2, sideAmt * 0.08),
    y: gate.y - uy * 4 + py * sideSign * Math.min(2.2, sideAmt * 0.08),
  };

  const f = (n) => n.toFixed(2);
  return [
    `M ${f(HUB.x)} ${f(HUB.y)}`,
    `C ${f(c1.x)} ${f(c1.y)} ${f(c2.x)} ${f(c2.y)} ${f(label.x)} ${f(label.y)}`,
    `C ${f(c3.x)} ${f(c3.y)} ${f(c4.x)} ${f(c4.y)} ${f(gate.x)} ${f(gate.y)}`,
  ].join(" ");
}

/** Sort boards along the castle axis so sister roads fan evenly. */
function sortRoadsForPaths(roads, castleId) {
  const dest = CASTLE_POS[castleId];
  const ax = dest.x - HUB.x;
  const ay = dest.y - HUB.y;
  const aLen = Math.hypot(ax, ay) || 1;
  const px = -ay / aLen;
  const py = ax / aLen;
  return [...roads].sort((a, b) => {
    const sa = (a.point.x - HUB.x) * px + (a.point.y - HUB.y) * py;
    const sb = (b.point.x - HUB.x) * px + (b.point.y - HUB.y) * py;
    if (Math.abs(sa - sb) > 0.4) return sa - sb;
    const da = Math.hypot(a.point.x - dest.x, a.point.y - dest.y);
    const db = Math.hypot(b.point.x - dest.x, b.point.y - dest.y);
    return da - db;
  });
}

function trunkPath(castleId) {
  const dest = CASTLE_POS[castleId];
  const dx = dest.x - HUB.x;
  const dy = dest.y - HUB.y;
  const mx = HUB.x + dx * 0.5 + (dy === 0 ? 0 : dy > 0 ? 4 : -4);
  const my = HUB.y + dy * 0.5 + (dx === 0 ? 0 : dx > 0 ? -3 : 3);
  return `M ${HUB.x} ${HUB.y} Q ${mx} ${my} ${dest.x} ${dest.y}`;
}

/** Per-castle road look: railway / soft wash / light dirt / dashed ink. */
const PATH_STYLE = {
  rafa: "rail",
  nasb: "rail",
  khafd: "rail",
  jazm: "rail",
};

function PathArt({ d, castleId, state = "lit" }) {
  const style = PATH_STYLE[castleId] || "rail";
  const color = IRAAB_CASTLES[castleId]?.color || "#4a3218";
  const cls = `kg-path kg-path--${style}${state === "lit" ? " lit" : state === "dim" ? " dim" : " idle"}`;

  if (style === "dark") {
    return (
      <g className={cls} style={{ "--path": color }}>
        <path className="kg-path-bed" d={d} />
        <path className="kg-path-core" d={d} />
        <path className="kg-path-edge" d={d} />
      </g>
    );
  }
  if (style === "light") {
    return (
      <g className={cls} style={{ "--path": color }}>
        <path className="kg-path-bed" d={d} />
        <path className="kg-path-core" d={d} />
      </g>
    );
  }
  if (style === "dash") {
    return (
      <g className={cls} style={{ "--path": color }}>
        <path className="kg-path-bed" d={d} />
        <path className="kg-path-core" d={d} />
        <path className="kg-path-marks" d={d} />
      </g>
    );
  }
  // rail
  return (
    <g className={cls} style={{ "--path": color }}>
      <path className="kg-path-rails" d={d} />
      <path className="kg-path-gap" d={d} />
      <path className="kg-path-ties" d={d} />
    </g>
  );
}

function KnowledgePanel({ knowledge, accent, onClose }) {
  const [splitView, setSplitView] = useStudySplitView();
  if (!knowledge) return null;
  const soon = knowledge.status === "coming-soon";
  const matnOnly = knowledge.status === "matn";
  const commentarySections =
    knowledge.commentarySections?.length > 0
      ? knowledge.commentarySections
      : knowledge.commentaryHtml
        ? [
            {
              lineIdx: knowledge.tuhfatLines?.[0] ?? null,
              html: knowledge.commentaryHtml,
              titleAr: knowledge.sectionTitleAr || null,
              titleEn: knowledge.sectionTitleEn || null,
            },
          ]
        : [];
  const hasCommentary = commentarySections.length > 0;
  const mabni = knowledge.mabniCheck;
  const hasAnyDual =
    hasCommentary &&
    commentarySections.some((section) => {
      const lineKeys =
        section.lineIdx != null ? [section.lineIdx] : knowledge.tuhfatLines || [];
      return Boolean(section.html) && guidesForLines(knowledge.chapterId, lineKeys).length > 0;
    });

  return (
    <aside className="kg-know" style={{ "--c": accent }}>
      <div className="kg-know-top">
        <div>
          {knowledge.kind ? (
            <span className="kg-know-kind">{knowledge.kind}</span>
          ) : null}
          {knowledge.badge ? (
            <span className="ar kg-know-badge">
              {displayIraabBadge(knowledge.badge)}
            </span>
          ) : null}
          <h2 className="ar kg-know-title">{knowledge.titleAr}</h2>
          <p className="kg-know-en">{knowledge.titleEn}</p>
        </div>
        {onClose ? (
          <button type="button" className="kg-know-close" onClick={onClose}>
            ×
          </button>
        ) : null}
      </div>

      {mabni ? (
        <div
          className={`kg-mabni-verdict${mabni.ok ? " ok" : " no"}`}
          role="status"
        >
          <strong>{mabni.ok ? "Works for this mabnī" : "Does not fit"}</strong>
          {mabni.ar ? (
            <p className="ar kg-mabni-ex" dir="rtl">
              {mabni.ar}
            </p>
          ) : null}
          {mabni.en ? <p className="kg-mabni-en">{mabni.en}</p> : null}
          {mabni.note ? <p className="kg-mabni-note">{mabni.note}</p> : null}
        </div>
      ) : null}

      {soon ? (
        <div className="kg-know-soon">
          <strong>Coming soon</strong>
          <p>{knowledge.note || knowledge.intro}</p>
          {knowledge.why ? (
            <p className="kg-know-why">
              Road tip: {knowledge.why}
            </p>
          ) : null}
        </div>
      ) : (
        <>
          {knowledge.why ? (
            <p className="kg-know-why">Why this road: {knowledge.why}</p>
          ) : null}

          {hasCommentary ? (
            <div className="kg-know-block kg-know-commentary">
              {hasAnyDual ? (
                <StudySplitViewToggle view={splitView} onChange={setSplitView} />
              ) : null}
              <div className="ajrumiyyah-content kg-know-tuhfat">
                {commentarySections.map((section, i) => {
                  const lineKeys =
                    section.lineIdx != null
                      ? [section.lineIdx]
                      : knowledge.tuhfatLines || [];
                  const explanationGuides = guidesForLines(
                    knowledge.chapterId,
                    lineKeys
                  );
                  const hasExplanation = explanationGuides.length > 0;
                  const canDual = Boolean(section.html) && hasExplanation;
                  const { showComm, showExpl, isDual } = splitPaneVisibility(
                    canDual ? splitView : "split",
                    Boolean(section.html),
                    hasExplanation,
                  );
                  const titleAr = section.titleAr || null;
                  const titleEn = section.titleEn || null;
                  const hasTitle = Boolean(titleAr || titleEn);
                  const splitClass = [
                    "ajr-study-split",
                    isDual ? "ajr-study-split--dual" : "",
                    canDual && !isDual && showComm
                      ? "ajr-study-split--solo ajr-study-split--solo-comm"
                      : "",
                    canDual && !isDual && showExpl
                      ? "ajr-study-split--solo ajr-study-split--solo-expl"
                      : "",
                  ]
                    .filter(Boolean)
                    .join(" ");

                  return (
                    <div
                      key={`kg-tuhfat-${section.lineIdx ?? i}`}
                      className={splitClass}
                    >
                      {canDual && hasTitle ? (
                        <div className="ajr-study-split__title ajr-section ajr-section--tuhfat">
                          <div className="ajr-section-head ajr-section-head--tuhfat">
                            <span className="ajr-section-badge">
                              {isDual
                                ? "Commentary · Explanation"
                                : showComm
                                  ? "Commentary"
                                  : "Explanation"}
                            </span>
                            <div className="ajr-section-titles">
                              {titleAr ? (
                                <span className="ajr-section-ar" dir="rtl">
                                  {titleAr}
                                </span>
                              ) : null}
                              {titleEn ? (
                                <span className="ajr-section-en">
                                  {titleEn}
                                </span>
                              ) : null}
                            </div>
                          </div>
                        </div>
                      ) : null}

                      {showComm ? (
                        <div className="course-card ajr-section ajr-section--tuhfat ajr-study-split__comm">
                          {canDual ? (
                            <div className="ajr-study-split__col-label ajr-study-split__col-label--comm">
                              Commentary
                            </div>
                          ) : hasTitle ? (
                            <div className="ajr-section-head ajr-section-head--tuhfat">
                              <span className="ajr-section-badge">
                                Commentary
                              </span>
                              <div className="ajr-section-titles">
                                {titleAr ? (
                                  <span className="ajr-section-ar" dir="rtl">
                                    {titleAr}
                                  </span>
                                ) : null}
                                {titleEn ? (
                                  <span className="ajr-section-en">
                                    {titleEn}
                                  </span>
                                ) : null}
                              </div>
                            </div>
                          ) : (
                            <h3 className="kg-know-solo-label">
                              Tuḥfat commentary
                            </h3>
                          )}
                          <CommentaryPen
                            className="ajr-section-body ajr-expl-body ajr-tuhfat-body"
                            storageKey={`ajr-pen:kingdom:${knowledge.chapterId || "unknown"}:${section.lineIdx ?? i}:tuhfat`}
                            html={section.html}
                          />
                        </div>
                      ) : null}

                      {showExpl ? (
                        <div className="ajr-study-split__expl">
                          {canDual ? (
                            <div className="ajr-study-split__col-label ajr-study-split__col-label--expl">
                              Explanation
                            </div>
                          ) : null}
                          {explanationGuides.map((guide) => (
                            <div
                              key={guide.key}
                              className="course-card ajr-section ajr-section--study"
                            >
                              <div className="ajr-section-body">
                                {guide.body}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <>
              {knowledge.intro ? (
                <p className="kg-know-intro">{knowledge.intro}</p>
              ) : null}
              {knowledge.matnAr ? (
                <blockquote className="kg-know-matn">
                  <span className="kg-know-label">Matn</span>
                  <p className="ar">{knowledge.matnAr}</p>
                </blockquote>
              ) : null}
              {knowledge.defAr ? (
                <p className="ar kg-know-def">{knowledge.defAr}</p>
              ) : null}
              {knowledge.defEn ? (
                <p className="kg-know-def-en">{knowledge.defEn}</p>
              ) : null}
              {knowledge.memorize ? (
                <p className="kg-know-memo">
                  Memorise: <span className="ar">{knowledge.memorize}</span>
                </p>
              ) : null}

              {knowledge.matnPreview?.length ? (
                <div className="kg-know-block">
                  <h3>From the matn</h3>
                  <ul>
                    {knowledge.matnPreview.map((line, i) => (
                      <li key={i}>
                        <span className="ar">{line.ar}</span>
                        {line.en ? <span>{line.en}</span> : null}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {knowledge.topics?.length ? (
                <div className="kg-know-block">
                  <h3>Explanation</h3>
                  {knowledge.topics.map((t) => (
                    <article key={t.ar + t.en} className="kg-know-topic">
                      <h4>
                        <span className="ar">{t.ar}</span>
                        {t.en ? <span>{t.en}</span> : null}
                      </h4>
                      {t.matnAr ? (
                        <blockquote className="kg-know-matn kg-know-matn--nested">
                          <span className="kg-know-label">Matn</span>
                          <p className="ar">{t.matnAr}</p>
                        </blockquote>
                      ) : null}
                      {t.defAr ? (
                        <p className="ar kg-know-def">{t.defAr}</p>
                      ) : null}
                      {t.defEn ? (
                        <p className="kg-know-def-en">{t.defEn}</p>
                      ) : null}
                      {t.memorize ? (
                        <p className="kg-know-memo">
                          Memorise:{" "}
                          <span className="ar">{t.memorize}</span>
                        </p>
                      ) : null}
                      {t.leaves?.length ? (
                        <ul className="kg-know-leaves">
                          {t.leaves.map((l) => (
                            <li key={l.ar + l.en}>
                              <span className="ar">{l.ar}</span>
                              {l.en ? <span>{l.en}</span> : null}
                              {l.defAr ? <p className="ar">{l.defAr}</p> : null}
                              {l.defEn ? <em>{l.defEn}</em> : null}
                              {l.examples?.length ? (
                                <ul className="kg-know-examples">
                                  {l.examples.map((ex, i) => (
                                    <li key={`${ex.ar}-${i}`}>
                                      <span className="ar">{ex.ar}</span>
                                      {ex.en ? <span>{ex.en}</span> : null}
                                    </li>
                                  ))}
                                </ul>
                              ) : null}
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </article>
                  ))}
                </div>
              ) : null}

              {knowledge.positions?.length ? (
                <div className="kg-know-block">
                  <h3>Positions · explanation</h3>
                  <ul className="kg-know-leaves">
                    {knowledge.positions.map((p) => (
                      <li key={p.ar + p.en}>
                        <span className="ar">{p.ar}</span>
                        {p.en ? <span>{p.en}</span> : null}
                        {p.defAr ? <p className="ar">{p.defAr}</p> : null}
                        {p.defEn ? <em>{p.defEn}</em> : null}
                        {p.rule && p.rule !== p.defEn ? (
                          <em>{p.rule}</em>
                        ) : null}
                        {p.examples?.length ? (
                          <ul className="kg-know-examples">
                            {p.examples.map((ex, i) => (
                              <li key={`${ex.ar}-${i}`}>
                                <span className="ar">{ex.ar}</span>
                                {ex.en ? <span>{ex.en}</span> : null}
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </>
          )}

          {knowledge.examples?.length ? (
            <div className="kg-know-block">
              <h3>Examples</h3>
              <ul className="kg-know-examples">
                {knowledge.examples.map((ex, i) => (
                  <li key={`${ex.ar}-${i}`}>
                    <span className="ar">{ex.ar}</span>
                    {ex.en ? <span>{ex.en}</span> : null}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {knowledge.worn?.length ? (
            <div className="kg-know-block">
              <h3>Who wears this badge</h3>
              <ul className="kg-know-examples">
                {knowledge.worn.map((w) => (
                  <li key={w.ar}>
                    <span className="ar">{w.ar}</span>
                    {w.en ? <span>{w.en}</span> : null}
                    {w.note ? <em>{w.note}</em> : null}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {matnOnly || knowledge.note ? (
            <p className="kg-know-note">{knowledge.note}</p>
          ) : null}

          {knowledge.studyHref ? (
            <Link className="kg-know-study" to={knowledge.studyHref}>
              Open in Ājurrūmiyyah study →
            </Link>
          ) : null}
        </>
      )}
    </aside>
  );
}

function DoorArt({ door, accent }) {
  return (
    <span className="door-art">
      <span className="css-door" style={{ "--accent": accent }}>
        <span className="css-top">
          <span className="css-flagpole" />
          <span className="css-flag" />
          <span className="css-roof" />
          <span className="css-plaque ar">{door.plaque}</span>
        </span>
        <span className="css-body">
          <span className="css-banner left" />
          <span className="css-banner right" />
          <span className="css-arch">
            <span className="css-wood">
              <span className="css-band t" />
              <span className="css-band m" />
              <span className="css-band b" />
              <span className="css-badge ar">{displayIraabBadge(door.badge)}</span>
              <span className="css-knocker" />
            </span>
          </span>
        </span>
        <span className="css-step" />
      </span>
    </span>
  );
}

function MapMiniDoor({ door, stamp, color, onOpen }) {
  if (!stamp && !door) return null;
  const badge = door?.badge || stamp?.badge || "";
  const name = door?.name || stamp?.sign || "Door";
  const isHaraka = /^[\u064B-\u0652]$/.test(badge);
  const isMahall =
    door?.kind === "mahall" ||
    stamp?.seal === "mahall" ||
    badge === "محل";
  const labelAr = iraabSignAr(name);
  return (
    <button
      type="button"
      className={`kg-mini-door${isHaraka ? " kg-mini-door--haraka" : ""}${
        isMahall ? " kg-mini-door--mahall" : ""
      }`}
      style={{ "--c": color, "--accent": color }}
      title={`${name} · open door`}
      aria-label={`${name} · open door`}
      onClick={(e) => {
        e.stopPropagation();
        onOpen?.();
      }}
    >
      <span className="kg-mini-door-face" aria-hidden="true">
        <span className="kg-mini-door-wood">
          <span className="kg-mini-band t" />
          <span className="kg-mini-band b" />
          <span
            className={`ar kg-mini-door-badge${isHaraka || isMahall ? " is-haraka" : ""}`}
          >
            {displayIraabBadge(badge)}
          </span>
        </span>
      </span>
      <span className="ar kg-mini-door-label">{labelAr}</span>
    </button>
  );
}

function CastleFigure({ castle, onEnter, disabled }) {
  return (
    <button
      type="button"
      className="kg-castle"
      style={{ "--c": castle.color }}
      disabled={disabled}
      onClick={onEnter}
      aria-label={`${castle.name} ${castle.ar}`}
    >
      <span className="kg-castle-art" aria-hidden="true">
        <span className="kg-flags">
          <i />
          <i />
          <i />
        </span>
        <span className="kg-roofs">
          <i className="side" />
          <i className="mid" />
          <i className="side" />
        </span>
        <span className="kg-keeps">
          <i className="side" />
          <i className="mid">
            <em />
            <em />
          </i>
          <i className="side" />
        </span>
        <span className="kg-wall">
          <span className="kg-merlons" />
          <span className="kg-door" />
        </span>
        <span className="kg-ground" />
      </span>
      <span className="kg-castle-label">
        <span className="ar">{castle.ar}</span>
      </span>
    </button>
  );
}

function doorMatchesTraveler(door, traveler, castleId) {
  if (!traveler || !door) return false;
  const route = traveler.routes.find((r) => r.castle === castleId);
  if (!route) return false;
  if (route.seal === "mahall" && (door.kind === "mahall" || door.id === "mahall")) {
    return true;
  }
  if (door.badge === route.badge) return true;
  const doorSign = door.name.replace(/\*$/, "");
  const routeSign = String(route.sign).replace(/\*$/, "");
  if (doorSign === routeSign) return true;
  return door.worn.some((w) => {
    if (w.travelerId && w.travelerId === traveler.id) return true;
    if (w.ar === traveler.ar || w.en === traveler.en) return true;
    // soft match when matn wording differs slightly
    const wa = String(w.ar || "").replace(/[^\u0600-\u06FF]/g, "");
    const ta = String(traveler.ar || "").replace(/[^\u0600-\u06FF]/g, "");
    return wa && ta && (ta.includes(wa) || wa.includes(ta));
  });
}

export default function IraabKingdomPage() {
  const [view, setView] = useState("map");
  const [castleId, setCastleId] = useState(null);
  const [hallPage, setHallPage] = useState("roles"); // "roles" | "doors"
  const [travelerId, setTravelerId] = useState("");
  const [travelerGroupId, setTravelerGroupId] = useState(
    IRAAB_TRAVELER_GROUPS[0]?.id || "harakat"
  );
  const [focusRole, setFocusRole] = useState(null);
  const [selectedDoorId, setSelectedDoorId] = useState(null);
  const [loreOpen, setLoreOpen] = useState(false);
  const [roadGuideOpen, setRoadGuideOpen] = useState(false);
  const [layoutEdit, setLayoutEdit] = useState(false);
  const [labelPos, setLabelPos] = useState(() => loadLabelLayout());
  const [selectedLabel, setSelectedLabel] = useState(null);
  const [draggingKey, setDraggingKey] = useState(null);
  const landRef = useRef(null);
  const dragRef = useRef(null);
  const pendingPosRef = useRef(null);
  const rafRef = useRef(0);
  const pendingFreezeRef = useRef(false);
  const castleRoadsRef = useRef([]);

  const traveler = useMemo(
    () => IRAAB_TRAVELERS.find((t) => t.id === travelerId) || null,
    [travelerId]
  );
  const travelerGroup =
    IRAAB_TRAVELER_GROUPS.find((g) => g.id === travelerGroupId) ||
    IRAAB_TRAVELER_GROUPS[0];
  const groupTravelers = useMemo(() => {
    const group =
      IRAAB_TRAVELER_GROUPS.find((g) => g.id === travelerGroupId) ||
      IRAAB_TRAVELER_GROUPS[0];
    if (!group) return [];
    return group.travelerIds
      .map((tid) => IRAAB_TRAVELERS.find((t) => t.id === tid))
      .filter(Boolean);
  }, [travelerGroupId]);

  useEffect(() => {
    if (!traveler?.road) return;
    if (traveler.road !== travelerGroupId) {
      setTravelerGroupId(traveler.road);
    }
  }, [traveler, travelerGroupId]);
  const castle = castleId ? IRAAB_CASTLES[castleId] : null;
  const routeCastles = useMemo(
    () => new Set(traveler?.routes.map((r) => r.castle) || []),
    [traveler]
  );
  const activeGreatRoad = useMemo(() => {
    if (!traveler) return null;
    return (
      IRAAB_MUARAB_ROADS.roads.find((r) => r.travelers.includes(traveler.id)) ||
      null
    );
  }, [traveler]);

  const travelerDoor = useMemo(() => {
    if (!traveler || !castle) return null;
    return castle.doors.find((d) => doorMatchesTraveler(d, traveler, castle.id)) || null;
  }, [traveler, castle]);

  /** Per castle: each matching role is its own road; lit if traveler can take it. */
  const castleRoads = useMemo(() => {
    const entries = CASTLE_ORDER.map((id) => {
      const pack = IRAAB_CASTLE_ROAD_SIGNS[id];
      const allowed = new Set(
        layoutEdit
          ? pack.signs.map((s) => s.id)
          : traveler
            ? travelerRolesForCastle(traveler, id)
            : []
      );
      // Boards for this traveler’s kind only (Ājurrūmiyyah manṣūbāt = nouns;
      // nawāṣib of muḍāriʿ stay on the verb road — not mixed into mansūbāt).
      let signs = [];
      if (layoutEdit) {
        signs = pack.signs;
      } else if (traveler) {
        if (traveler.road === "mabni") {
          signs = pack.signs.filter((s) => s.kind === "noun");
        } else {
          signs = pack.signs.filter((s) => s.kind === traveler.kind);
        }
      }
      return { castleId: id, signs, allowed };
    });
    const roadsByCastle = buildAllCastleRoads(entries, labelPos);
    return CASTLE_ORDER.map((id) => {
      const open = layoutEdit || !traveler || routeCastles.has(id);
      const shut = !layoutEdit && Boolean(traveler && !routeCastles.has(id));
      return {
        id,
        open,
        shut,
        stamp: traveler?.routes.find((r) => r.castle === id) || null,
        roads: roadsByCastle[id] || [],
      };
    });
  }, [traveler, routeCastles, labelPos, layoutEdit]);
  castleRoadsRef.current = castleRoads;

  function pointerToMapPct(clientX, clientY, clamp = true) {
    const el = landRef.current;
    if (!el) return null;
    const rect = el.getBoundingClientRect();
    if (rect.width < 1 || rect.height < 1) return null;
    const x = ((clientX - rect.left) / rect.width) * 100;
    const y = ((clientY - rect.top) / rect.height) * 100;
    return clamp ? { x: clampPct(x), y: clampPct(y) } : { x, y };
  }

  function freezeVisibleLabels(prev = {}) {
    const next = { ...prev };
    castleRoadsRef.current.forEach(({ id, roads }) => {
      roads.forEach(({ sign, point }) => {
        const k = labelKey(id, sign.id);
        if (!next[k]) next[k] = { x: point.x, y: point.y };
      });
    });
    return next;
  }

  function startLayoutEdit() {
    pendingFreezeRef.current = true;
    setLayoutEdit(true);
  }

  function queueDragPos(key, x, y) {
    pendingPosRef.current = { key, x, y };
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = 0;
      const pending = pendingPosRef.current;
      if (!pending) return;
      pendingPosRef.current = null;
      setLabelPos((prev) => {
        const cur = prev[pending.key];
        if (cur && cur.x === pending.x && cur.y === pending.y) return prev;
        return { ...prev, [pending.key]: { x: pending.x, y: pending.y } };
      });
    });
  }

  function endLabelDrag() {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = 0;
    }
    const pending = pendingPosRef.current;
    if (pending) {
      pendingPosRef.current = null;
      setLabelPos((prev) => ({
        ...prev,
        [pending.key]: { x: pending.x, y: pending.y },
      }));
    }
    dragRef.current = null;
    setDraggingKey(null);
  }

  function onLabelPointerDown(e, castleId, signId, point) {
    if (!layoutEdit || e.button !== 0) return;
    e.preventDefault();
    e.stopPropagation();
    const pct = pointerToMapPct(e.clientX, e.clientY, false);
    if (!pct) return;
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      /* window listeners still track the drag */
    }
    dragRef.current = {
      castleId,
      signId,
      key: labelKey(castleId, signId),
      offsetX: pct.x - point.x,
      offsetY: pct.y - point.y,
      pointerId: e.pointerId,
    };
    setSelectedLabel({ castleId, signId });
    setDraggingKey(labelKey(castleId, signId));
  }

  function currentLayout() {
    const pending = pendingPosRef.current;
    if (!pending) return labelPos;
    return {
      ...labelPos,
      [pending.key]: { x: pending.x, y: pending.y },
    };
  }

  function fixLabelLayout() {
    const toSave = currentLayout();
    endLabelDrag();
    saveLabelLayout(toSave);
    setLabelPos(toSave);
    setLayoutEdit(false);
    setSelectedLabel(null);
  }

  function resetLabelLayout() {
    localStorage.removeItem(LABEL_LAYOUT_KEY);
    pendingFreezeRef.current = layoutEdit;
    endLabelDrag();
    setSelectedLabel(null);
    setLabelPos({});
  }

  useEffect(() => {
    if (!layoutEdit || !pendingFreezeRef.current) return;
    pendingFreezeRef.current = false;
    setLabelPos((prev) => freezeVisibleLabels(prev));
  }, [layoutEdit, labelPos]);

  useEffect(() => {
    if (!layoutEdit) return undefined;
    function onMove(e) {
      const drag = dragRef.current;
      if (!drag) return;
      if (drag.pointerId != null && e.pointerId !== drag.pointerId) return;
      const pct = pointerToMapPct(e.clientX, e.clientY, false);
      if (!pct) return;
      e.preventDefault();
      queueDragPos(
        drag.key,
        clampPct(pct.x - drag.offsetX),
        clampPct(pct.y - drag.offsetY)
      );
    }
    function onUp(e) {
      const drag = dragRef.current;
      if (!drag) return;
      if (drag.pointerId != null && e.pointerId !== drag.pointerId) return;
      endLabelDrag();
    }
    window.addEventListener("pointermove", onMove, { passive: false });
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };
  }, [layoutEdit]);

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    document.body.classList.add("iraab-kingdom-scroll");
    return () => document.body.classList.remove("iraab-kingdom-scroll");
  }, []);

  useEffect(() => {
    if (view !== "castle" || !castle || hallPage !== "doors") {
      if (view !== "castle") setSelectedDoorId(null);
      return;
    }
    if (travelerDoor) setSelectedDoorId(travelerDoor.id);
    else setSelectedDoorId(null);
  }, [view, castleId, travelerId, travelerDoor, castle, hallPage]);

  useEffect(() => {
    function onKey(e) {
      if (layoutEdit && selectedLabel && e.key.startsWith("Arrow")) {
        e.preventDefault();
        const step = e.shiftKey ? 0.25 : 0.7;
        const dx =
          e.key === "ArrowLeft" ? -step : e.key === "ArrowRight" ? step : 0;
        const dy =
          e.key === "ArrowUp" ? -step : e.key === "ArrowDown" ? step : 0;
        if (!dx && !dy) return;
        const k = labelKey(selectedLabel.castleId, selectedLabel.signId);
        setLabelPos((prev) => {
          const cur = prev[k];
          if (!cur) return prev;
          return {
            ...prev,
            [k]: { x: clampPct(cur.x + dx), y: clampPct(cur.y + dy) },
          };
        });
        return;
      }
      if (e.key !== "Escape") return;
      if (layoutEdit) {
        endLabelDrag();
        setSelectedLabel(null);
        setLayoutEdit(false);
        return;
      }
      if (loreOpen) setLoreOpen(false);
      else if (roadGuideOpen) setRoadGuideOpen(false);
      else if (selectedDoorId && view === "castle") setSelectedDoorId(null);
      else if (focusRole && view === "castle") setFocusRole(null);
      else if (view === "castle" && hallPage === "doors") {
        setHallPage("roles");
        setSelectedDoorId(null);
      } else if (view === "castle") {
        setView("map");
        setCastleId(null);
        setHallPage("roles");
      } else {
        setTravelerId("");
        setFocusRole(null);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [loreOpen, roadGuideOpen, selectedDoorId, focusRole, view, hallPage, layoutEdit, selectedLabel]);

  function enterCastle(id, opts = {}) {
    if (traveler && !routeCastles.has(id)) return;
    setCastleId(id);
    setHallPage(opts.hallPage || "roles");
    setFocusRole(opts.focusRole || null);
    setSelectedDoorId(opts.doorId || null);
    setView("castle");
  }

  function goHallPage(page) {
    setHallPage(page);
    if (page === "roles") setSelectedDoorId(null);
    if (page === "doors") setFocusRole(null);
  }

  function doorForStamp(castleObj, stamp) {
    if (!castleObj || !stamp) return null;
    return (
      castleObj.doors.find((d) => d.badge === stamp.badge) ||
      castleObj.doors.find(
        (d) => d.name.replace(/\*$/, "") === String(stamp.sign).replace(/\*$/, "")
      ) ||
      null
    );
  }

  const accent = castle?.color || "#2f6a4f";
  return (
    <div className="kg-root" style={{ "--accent": accent }}>
      {view === "map" ? (
        <div className="kg-page">
          <header className="kg-top">
            <div>
              <h1>Kingdom of Iʿrāb</h1>
              <p className="ar kg-top-ar">مَمْلَكَةُ الْإِعْرَابِ</p>
              <p className="kg-top-sub">
                Pick a traveler at the bridge — muʿrab by vowels or letters, or
                mabnī via باب المحل. Each role is a road; for mabnī every board
                is checked with an example.
              </p>
            </div>
            <div className="kg-top-actions">
              <Link to="/iraab-kingdom/quest">Gate Quest</Link>
              <button type="button" onClick={() => setRoadGuideOpen(true)}>
                Road signs
              </button>
              <button type="button" onClick={() => setLoreOpen(true)}>
                Travelers’ law
              </button>
              {!layoutEdit ? (
                <button
                  type="button"
                  className="kg-layout-btn"
                  onClick={startLayoutEdit}
                >
                  Edit labels
                </button>
              ) : (
                <>
                  <button
                    type="button"
                    className="kg-layout-btn kg-layout-btn--fix"
                    onClick={fixLabelLayout}
                  >
                    Fix layout
                  </button>
                  <button
                    type="button"
                    className="kg-layout-btn"
                    onClick={resetLabelLayout}
                  >
                    Reset auto
                  </button>
                  <button
                    type="button"
                    className="kg-layout-btn"
                    onClick={() => {
                      endLabelDrag();
                      setSelectedLabel(null);
                      setLabelPos(loadLabelLayout());
                      setLayoutEdit(false);
                    }}
                  >
                    Cancel edit
                  </button>
                </>
              )}
            </div>
          </header>

          <section className="kg-bar" aria-label="Choose a traveler">
            <div className="kg-bar-head">
              <div className="kg-bar-head-copy">
                <p className="kg-bar-kicker">Map roster</p>
                <h2 className="kg-bar-title">
                  <span className="ar">مَنْ يُسَافِرُ؟</span>
                  <span>Who travels?</span>
                </h2>
                <p className="kg-bar-lead">
                  Pick a matn word type. It stands at the hub and lights every
                  road it can take.
                </p>
              </div>
              {traveler ? (
                <button
                  type="button"
                  className="kg-bar-clear"
                  onClick={() => {
                    setTravelerId("");
                    setFocusRole(null);
                  }}
                >
                  Clear path
                </button>
              ) : null}
            </div>

            <div className="kg-bar-roads" role="tablist" aria-label="Great roads">
              {IRAAB_MUARAB_ROADS.roads.map((road) => {
                const on = travelerGroupId === road.id;
                const travelerOn = activeGreatRoad?.id === road.id;
                return (
                  <button
                    key={road.id}
                    type="button"
                    role="tab"
                    aria-selected={on}
                    className={`kg-road-tab${on ? " on" : ""}${
                      traveler && !travelerOn ? " dim" : ""
                    }`}
                    onClick={() => {
                      setTravelerGroupId(road.id);
                      if (traveler && traveler.road !== road.id) {
                        setTravelerId("");
                        setFocusRole(null);
                      }
                    }}
                  >
                    <span className="kg-road-tab-seal" aria-hidden="true">
                      {road.id === "harakat" ? "ـَـِـُ" : "ا و ي ن"}
                    </span>
                    <span className="kg-road-tab-copy">
                      <span className="ar">{road.ar}</span>
                      <span>{road.en}</span>
                    </span>
                  </button>
                );
              })}
            </div>

            <div
              className="kg-travelers"
              role="listbox"
              aria-label={
                travelerGroup
                  ? `${travelerGroup.labelEn} travelers`
                  : "Travelers"
              }
            >
              {groupTravelers.map((t) => {
                const selected = travelerId === t.id;
                return (
                  <button
                    key={t.id}
                    type="button"
                    role="option"
                    aria-selected={selected}
                    className={`kg-traveler-card${selected ? " selected" : ""}`}
                    onClick={() => {
                      setTravelerId(selected ? "" : t.id);
                      setFocusRole(null);
                    }}
                  >
                    <span className="kg-traveler-kind">
                      {t.road === "mabni"
                        ? t.noMahall
                          ? "لا محل"
                          : "مبني"
                        : t.kind === "verb"
                          ? "فعل"
                          : "اسم"}
                    </span>
                    <span className="ar kg-traveler-ar">{t.ar}</span>
                    <span className="kg-traveler-en">{t.en}</span>
                    {selected && t.tip ? (
                      <span className="kg-traveler-tip">{t.tip}</span>
                    ) : null}
                    {selected ? (
                      <span className="kg-traveler-stamp" aria-hidden="true">
                        على الطريق
                      </span>
                    ) : null}
                  </button>
                );
              })}
            </div>

            {traveler ? (
              <div className="kg-passport">
                <div className="kg-passport-identity">
                  <div className="kg-passport-crest" aria-hidden="true">
                    <span className="ar">مسافر</span>
                  </div>
                  <div className="kg-passport-copy">
                    <p className="ar kg-passport-ar">{traveler.ar}</p>
                    <p className="kg-passport-en">{traveler.en}</p>
                    <p className="kg-passport-tip">{traveler.tip}</p>
                  </div>
                </div>
                <div className="kg-passport-stamps">
                  <p className="kg-passport-stamps-label">Passport seals · click to enter</p>
                  <div className="kg-bar-stamps">
                    {traveler.routes.map((r) => (
                      <button
                        key={r.castle}
                        type="button"
                        className="kg-seal"
                        style={{ "--c": IRAAB_CASTLES[r.castle].color }}
                        onClick={() => enterCastle(r.castle)}
                      >
                        <span className="kg-seal-castle">
                          <span className="ar">{IRAAB_CASTLES[r.castle].ar}</span>
                          <span>{IRAAB_CASTLES[r.castle].name}</span>
                        </span>
                        <span className="kg-seal-sign ar">
                          {iraabSignAr(r.sign)}
                        </span>
                        <span className="kg-seal-badge ar" aria-hidden="true">
                          {displayIraabBadge(r.badge)}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="kg-bar-idle">
                <span className="kg-bar-idle-mark" aria-hidden="true">
                  ✦
                </span>
                <p>
                  No traveler yet — choose a card above (اسم مفرد، مثنى، أفعال
                  خمسة…) and watch the map light its roads.
                </p>
              </div>
            )}
          </section>

          <section
            ref={landRef}
            className={`kg-land${traveler ? " has-traveler" : ""}${
              layoutEdit ? " is-editing" : ""
            }`}
          >
            {layoutEdit ? (
              <div className="kg-layout-hint" role="status">
                Drag a board — it stays under the pointer. Arrow keys nudge the
                selected board (Shift for fine). Press <b>Fix layout</b> to save.
              </div>
            ) : null}
            <svg
              className="kg-svg"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              {!traveler && !layoutEdit
                ? CASTLE_ORDER.map((id) => (
                    <PathArt key={id} d={trunkPath(id)} castleId={id} state="idle" />
                  ))
                : null}

              {castleRoads.map(({ id, roads }) => {
                if (!roads.length) return null;
                return roads.map(({ sign, d, lit }) => (
                  <PathArt
                    key={`${id}-${sign.id}`}
                    d={d}
                    castleId={id}
                    state={layoutEdit || lit ? "lit" : "dim"}
                  />
                ));
              })}
            </svg>

            <div className={`kg-hub${traveler ? " filled" : ""}`}>
              {traveler ? (
                <>
                  <span className="kg-hub-kicker">Traveler</span>
                  <span className="ar kg-hub-ar">{traveler.ar}</span>
                  <span className="kg-hub-en">{traveler.en}</span>
                </>
              ) : (
                <span className="kg-hub-idle">
                  {layoutEdit ? "Layout mode" : "Crossroads"}
                </span>
              )}
            </div>

            {castleRoads.map(({ id, open, shut, stamp }) => {
              const c = IRAAB_CASTLES[id];
              const door = doorForStamp(c, stamp);
              return (
                <article
                  key={id}
                  className={`kg-site kg-site--${id}${traveler && open ? " open" : ""}${
                    shut ? " shut" : ""
                  }`}
                >
                  {stamp ? (
                    <MapMiniDoor
                      door={door}
                      stamp={stamp}
                      color={c.color}
                      onOpen={() =>
                        enterCastle(id, {
                          hallPage: "doors",
                          doorId: door?.id || null,
                        })
                      }
                    />
                  ) : null}
                  <CastleFigure
                    castle={c}
                    disabled={layoutEdit}
                    onEnter={() => enterCastle(id)}
                  />
                </article>
              );
            })}

            {castleRoads.map(({ id, roads }) =>
              roads.map(({ sign, point, lit, pinned }) => {
                const key = labelKey(id, sign.id);
                const selected =
                  selectedLabel?.castleId === id &&
                  selectedLabel?.signId === sign.id;
                return (
                <button
                  key={`${id}-${sign.id}`}
                  type="button"
                  className={`kg-road-label${
                    layoutEdit || lit ? " lit" : " dim"
                  }${
                    focusRole?.castleId === id && focusRole?.roleId === sign.id
                      ? " active"
                      : ""
                  }${layoutEdit ? " is-draggable" : ""}${
                    pinned ? " is-pinned" : ""
                  }${selected ? " is-selected" : ""}${
                    draggingKey === key ? " is-dragging" : ""
                  }`}
                  style={{
                    "--c": IRAAB_CASTLES[id].color,
                    left: `${point.x}%`,
                    top: `${point.y}%`,
                  }}
                  title={
                    layoutEdit
                      ? `Drag to place · ${sign.en}`
                      : lit
                        ? `${sign.en} · ${sign.why}`
                        : `${sign.en} — not for this traveler · open to inspect`
                  }
                  onPointerDown={(e) =>
                    onLabelPointerDown(e, id, sign.id, point)
                  }
                  onClick={() => {
                    if (layoutEdit) return;
                    enterCastle(id, {
                      hallPage: "roles",
                      focusRole: { castleId: id, roleId: sign.id },
                    });
                  }}
                >
                  <span className="ar">{sign.ar}</span>
                </button>
                );
              })
            )}
          </section>
        </div>
      ) : null}

      {view === "castle" && castle ? (
        <section className="kg-hall">
          <button
            type="button"
            className="kg-back"
            onClick={() => {
              if (hallPage === "doors") {
                goHallPage("roles");
                return;
              }
              setView("map");
              setCastleId(null);
              setHallPage("roles");
            }}
          >
            {hallPage === "doors" ? "← Role roads" : "← Kingdom map"}
          </button>
          <header className="kg-hall-head">
            <CastleFigure castle={castle} onEnter={() => {}} />
            <h1>
              <span className="ar">{castle.ar}</span>
              <span> · {castle.name}</span>
            </h1>
            <p>
              أصلية · original sign:{" "}
              <b className="ar">{castle.aliAr}</b>{" "}
              {displayIraabBadge(castle.aliBadge)}
            </p>
          </header>

          <nav className="kg-hall-tabs" aria-label="Castle pages">
            <button
              type="button"
              className={`kg-hall-tab${hallPage === "roles" ? " on" : ""}`}
              aria-current={hallPage === "roles" ? "page" : undefined}
              onClick={() => goHallPage("roles")}
            >
              <span className="ar">الطُّرُقُ</span>
              <span>Role roads</span>
            </button>
            <button
              type="button"
              className={`kg-hall-tab${hallPage === "doors" ? " on" : ""}`}
              aria-current={hallPage === "doors" ? "page" : undefined}
              onClick={() => goHallPage("doors")}
            >
              <span className="ar">الْأَبْوَابُ</span>
              <span>Doors · ʿalāmāt</span>
            </button>
          </nav>

          {hallPage === "roles" ? (
            <>
              {traveler?.noMahall ? (
                <div className="kg-la-mahall" role="status">
                  <p className="ar" dir="rtl">
                    لَا مَحَلَّ لَهُ مِنَ الْإِعْرَابِ
                  </p>
                  <p>
                    {traveler.noMahallNote ||
                      "This mabnī type does not open castle roads."}
                  </p>
                </div>
              ) : traveler?.road === "mabni" ? (
                <p className="kg-hall-cat">
                  لَوْحَاتُ هَذَا الْقَصْرِ لِـ{" "}
                  <span className="ar">{traveler.ar}</span>
                  {" — "}✓ في محل · ✗ مغلق
                </p>
              ) : traveler ? (
                <p className="kg-hall-cat">
                  لَوْحَاتُ هَذَا الْقَصْرِ لِـ{" "}
                  <span className="ar">{traveler.ar}</span>
                  {" — "}✓ مفتوح · ✗ مغلق
                </p>
              ) : (
                <p className="kg-hall-cat kg-hall-cat--idle">
                  جَمِيعُ طُرُقِ هَذَا الْقَصْرِ
                </p>
              )}

              {!traveler?.noMahall ? (
              <div className="kg-hall-roles" role="list">
                {(() => {
                  const pack = IRAAB_CASTLE_ROAD_SIGNS[castle.id];
                  const allSigns = pack?.signs || [];
                  // Ājurrūmiyyah boards only for this traveler’s kind:
                  // nouns → marfūʿāt / manṣūbāt / makhfūḍāt; verbs → nawāṣib / jawāzim.
                  let boards;
                  if (traveler?.road === "mabni") {
                    boards = allSigns.filter((s) => s.kind === "noun");
                  } else if (traveler) {
                    boards = allSigns.filter((s) => s.kind === traveler.kind);
                  } else {
                    boards = allSigns.filter(
                      (s) => s.kind !== "verb" || castle.id === "jazm"
                    );
                  }
                  const openIds = new Set(
                    traveler ? travelerRolesForCastle(traveler, castle.id) : []
                  );
                  const isMabni = traveler?.road === "mabni";

                  const ranked = boards.map((s) => {
                    const mabniCheck = isMabni
                      ? getMabniRoleCheck(traveler, s.id)
                      : null;
                    const fits = traveler
                      ? isMabni
                        ? Boolean(mabniCheck?.ok)
                        : openIds.has(s.id)
                      : false;
                    return { s, mabniCheck, fits, audited: Boolean(traveler) };
                  });

                  if (traveler) {
                    ranked.sort((a, b) => Number(b.fits) - Number(a.fits));
                  }

                  return ranked.map(({ s, fits, audited }) => (
                  <button
                    key={s.id}
                    type="button"
                    role="listitem"
                    className={`kg-hall-role${
                      focusRole?.castleId === castle.id &&
                      focusRole?.roleId === s.id
                        ? " active"
                        : ""
                    }${
                      audited
                        ? fits
                          ? " role-ok"
                          : " role-no"
                        : ""
                    }`}
                    style={{ "--c": accent }}
                    onClick={() => {
                      setFocusRole({ castleId: castle.id, roleId: s.id });
                    }}
                  >
                    <span className="kg-signboard-hang" aria-hidden="true">
                      <i />
                      <i />
                    </span>
                    <span className="kg-signboard-face">
                      <span className="ar kg-signboard-ar">{s.ar}</span>
                      {audited ? (
                        <span className="kg-signboard-verdict ar" dir="rtl">
                          {fits
                            ? isMabni
                              ? "✓ في محل"
                              : "✓ مفتوح"
                            : "✗ مغلق"}
                        </span>
                      ) : null}
                    </span>
                    <span className="kg-signboard-shadow" aria-hidden="true" />
                  </button>
                  ));
                })()}
              </div>
              ) : null}

              {focusRole?.castleId === castle.id && focusRole.roleId
                ? (() => {
                    const role =
                      IRAAB_CASTLE_ROAD_SIGNS[castle.id].signs.find(
                        (s) => s.id === focusRole.roleId
                      ) || null;
                    if (!role) return null;
                    const base = getRoleKnowledge(role, castle.id);
                    const check = getMabniRoleCheck(traveler, role.id);
                    const knowledge = check
                      ? {
                          ...base,
                          mabniCheck: {
                            ...check,
                            travelerAr: traveler?.ar,
                          },
                          status: "ready",
                        }
                      : base;
                    return (
                      <KnowledgePanel
                        knowledge={knowledge}
                        accent={accent}
                        onClose={() => setFocusRole(null)}
                      />
                    );
                  })()
                : null}

              <div className="kg-hall-next">
                <button
                  type="button"
                  className="kg-hall-next-btn"
                  onClick={() => goHallPage("doors")}
                >
                  Continue to doors · ʿalāmāt →
                </button>
              </div>
            </>
          ) : (
            <div className="doors-panel">
              <div className="doors-caption">
                {traveler
                  ? traveler.noMahall
                    ? "No castle door — لا محل له من الإعراب"
                    : traveler.road === "mabni"
                      ? "This traveler’s محل door is lit · tap for باب المحل"
                      : "This traveler’s door is lit · tap a door for its ʿalāmah"
                  : "Tap a door · أصلي / فرعي / محلي"}
              </div>
              <div
                className="doors-row"
                data-count={String(castle.doors.length)}
              >
                {castle.doors.map((door) => {
                  const isTravelerDoor = Boolean(
                    traveler &&
                      doorMatchesTraveler(door, traveler, castle.id)
                  );
                  const isOpen = selectedDoorId === door.id;
                  return (
                    <div
                      key={door.id}
                      className={`door-col${
                        isTravelerDoor ? " for-traveler" : ""
                      }${isOpen ? " open" : ""}${
                        door.kind === "mahall" ? " is-mahall" : ""
                      }`}
                    >
                      <button
                        type="button"
                        className={`door-btn${
                          door.kind === "ali" ? " is-ali" : ""
                        }${door.kind === "mahall" ? " is-mahall" : ""}${
                          isTravelerDoor ? " traveler-pick" : ""
                        }${isOpen ? " selected" : ""}`}
                        style={{ "--accent": accent }}
                        onClick={() => {
                          setSelectedDoorId(isOpen ? null : door.id);
                        }}
                      >
                        <DoorArt door={door} accent={accent} />
                        <div className="door-name ar" dir="rtl">
                          {iraabSignAr(door.name)}
                        </div>
                        <div className="door-kind ar" dir="rtl">
                          {door.kind === "ali"
                            ? "أصلية"
                            : door.kind === "mahall"
                              ? "محلي"
                              : "فرعية"}
                        </div>
                        {isTravelerDoor && traveler ? (
                          <div className="door-tag ar" dir="rtl">
                            <span className="ar">{traveler.ar}</span>
                            {" "}يَسْلُكُ هَذَا
                          </div>
                        ) : null}
                      </button>
                    </div>
                  );
                })}
              </div>

              {selectedDoorId
                ? (() => {
                    const door =
                      castle.doors.find((d) => d.id === selectedDoorId) ||
                      null;
                    if (!door) return null;
                    return (
                      <KnowledgePanel
                        knowledge={getDoorKnowledge(castle, door)}
                        accent={accent}
                        onClose={() => setSelectedDoorId(null)}
                      />
                    );
                  })()
                : null}
            </div>
          )}
        </section>
      ) : null}

      <div className={`modal${loreOpen ? " open" : ""}`} hidden={!loreOpen}>
        <div className="modal-backdrop" onClick={() => setLoreOpen(false)} />
        <div className="modal-card">
          <button className="modal-close" type="button" onClick={() => setLoreOpen(false)}>
            ×
          </button>
          <h2 className="modal-title">Travelers, not citizens</h2>
          <p className="lore-body">
            Shape stays fixed at the centre. Each role is a separate road into a
            castle. Only lit roads are ones this traveler can take.
          </p>
          <div className="errand-grid">
            {CASTLE_ORDER.map((id) => (
              <div className="errand" key={id}>
                <span className={`errand-castle ${id} ar`}>
                  {IRAAB_CASTLES[id].ar}
                </span>
                <p>{IRAAB_CASTLES[id].errand}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={`modal${roadGuideOpen ? " open" : ""}`} hidden={!roadGuideOpen}>
        <div className="modal-backdrop" onClick={() => setRoadGuideOpen(false)} />
        <div className="modal-card modal-card--wide">
          <button
            className="modal-close"
            type="button"
            onClick={() => setRoadGuideOpen(false)}
          >
            ×
          </button>
          <h2 className="modal-title">All role roads</h2>
          <div className="castle-sign-grid">
            {CASTLE_ORDER.map((id) => {
              const pack = IRAAB_CASTLE_ROAD_SIGNS[id];
              return (
                <div
                  key={id}
                  className="castle-sign-card"
                  style={{ "--c": IRAAB_CASTLES[id].color }}
                >
                  <button
                    type="button"
                    className="castle-sign-head"
                    onClick={() => {
                      setRoadGuideOpen(false);
                      enterCastle(id);
                    }}
                  >
                    <span className="ar">{IRAAB_CASTLES[id].ar}</span> →{" "}
                    {IRAAB_CASTLES[id].name}
                  </button>
                  <ul>
                    {pack.signs.map((s) => (
                      <li key={s.id}>
                        <button
                          type="button"
                          className="role-pick"
                          onClick={() => {
                            setFocusRole({ castleId: id, roleId: s.id });
                            setRoadGuideOpen(false);
                            enterCastle(id);
                          }}
                        >
                          <span className="ar">{s.ar}</span>
                          <span className="role-pick-en">{s.en}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

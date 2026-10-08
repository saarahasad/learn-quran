import { useCallback, useEffect, useId, useLayoutEffect, useMemo, useRef, useState } from "react";
import "../../styles/iraabDiagram.css";

const SVG_NS = "http://www.w3.org/2000/svg";

const RELATION_TYPES = {
  jar: "الجرّ",
  atf: "العطف",
  taaluq: "التعلّق",
  idafa: "الإضافة",
  tabi: "التوابع (نعت · بدل)",
  amal: "العمل (فاعل · مفعول · اسم وخبر)",
  isnad: "الإسناد (مبتدأ ↔ خبر)",
  hal: "الحال والتمييز",
  sila: "الصلة",
  shart: "الشرط",
};

/**
 * Arc levels: shorter spans sit closer to the words; a grouped source (e.g. جارّ ومجرور)
 * sits one level below the arc that joins it and starts from that arc's low point.
 */
function planLinks(links) {
  const items = links.map((l) => {
    const ix = [...l.from, l.to];
    return { ...l, lo: Math.min(...ix), hi: Math.max(...ix) };
  });
  const order = [...items].sort(
    (x, y) => x.hi - x.lo - (y.hi - y.lo) || x.from.length - y.from.length,
  );
  const placed = [];
  const clash = (l, lv) => placed.some((p) => p.lv === lv && p.lo < l.hi && l.lo < p.hi);
  for (const l of order) {
    let lv = 0;
    if (l.from.length > 1) {
      l.inner = placed.find((o) => l.from.includes(o.to) && o.from.every((f) => l.from.includes(f)));
      if (l.inner) lv = l.inner.lv + 1;
    }
    while (clash(l, lv)) lv += 1;
    l.lv = lv;
    l.d = 40 + lv * 34;
    placed.push(l);
  }
  return order;
}

function drawArrows(stage, plan, isolated, uid) {
  stage.querySelector("svg.iraab-dia__arrows")?.remove();
  stage.style.paddingBottom = "0px";
  if (!plan.length) {
    stage.style.paddingBottom = "8px";
    return;
  }
  const css = getComputedStyle(stage);
  const sr = stage.getBoundingClientRect();
  const point = (j) => {
    const r = stage.querySelector(`[data-j="${j}"] .iraab-dia__word`)?.getBoundingClientRect();
    return r ? { x: r.left + r.width / 2 - sr.left, y: r.bottom - sr.top - 4 } : null;
  };

  const svg = document.createElementNS(SVG_NS, "svg");
  svg.setAttribute("class", "iraab-dia__arrows");
  svg.setAttribute("aria-hidden", "true");
  const defs = document.createElementNS(SVG_NS, "defs");
  svg.appendChild(defs);
  let maxY = 0;

  plan.forEach((l, i) => {
    l.lowX = null;
    l.lowY = null;
    const sources = l.from.map(point);
    const target = point(l.to);
    if (!target || sources.some((p) => !p)) return;
    const color = css.getPropertyValue(`--iraab-${l.t}`).trim() || "#111";
    const markerId = `${uid}-m${i}`;

    const marker = document.createElementNS(SVG_NS, "marker");
    marker.setAttribute("id", markerId);
    marker.setAttribute("viewBox", "0 0 10 10");
    marker.setAttribute("refX", "8");
    marker.setAttribute("refY", "5");
    marker.setAttribute("markerWidth", "7");
    marker.setAttribute("markerHeight", "7");
    marker.setAttribute("orient", "auto-start-reverse");
    marker.innerHTML = `<path d="M0,0 L10,5 L0,10 z" fill="${color}"/>`;
    defs.appendChild(marker);

    const g = document.createElementNS(SVG_NS, "g");
    if (isolated && isolated !== l.t) g.setAttribute("class", "is-dim");

    const base = Math.max(target.y, ...sources.map((p) => p.y));
    let sx = sources.reduce((sum, p) => sum + p.x, 0) / sources.length;
    let y0 = Math.max(...sources.map((p) => p.y)) + 2;
    if (l.from.length > 1 && l.inner?.lowY != null) {
      sx = l.inner.lowX;
      y0 = l.inner.lowY + 1;
      const dot = document.createElementNS(SVG_NS, "circle");
      dot.setAttribute("cx", sx);
      dot.setAttribute("cy", y0);
      dot.setAttribute("r", 3.2);
      dot.setAttribute("fill", color);
      g.appendChild(dot);
    }

    const by = base + l.d;
    const path = document.createElementNS(SVG_NS, "path");
    path.setAttribute("d", `M${sx},${y0} C${sx},${by} ${target.x},${by} ${target.x},${target.y + 4}`);
    path.setAttribute("stroke", color);
    path.setAttribute("marker-end", `url(#${markerId})`);
    g.appendChild(path);

    l.lowX = (sx + target.x) / 2;
    l.lowY = 0.125 * (y0 + target.y + 4) + 0.75 * by;
    const text = document.createElementNS(SVG_NS, "text");
    text.setAttribute("x", l.lowX);
    text.setAttribute("y", l.lowY - 7);
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("fill", color);
    text.textContent = l.label;
    g.appendChild(text);
    svg.appendChild(g);
    maxY = Math.max(maxY, l.lowY + 10);
  });

  stage.style.paddingBottom = `${Math.max(8, maxY - stage.offsetHeight + 8)}px`;
  svg.setAttribute("width", stage.scrollWidth);
  svg.setAttribute("height", maxY + 10);
  stage.appendChild(svg);
}

/** "الواو: حرف عطف…" → bold label + text. */
function IraabLine({ text }) {
  const i = text.indexOf(": ");
  if (i > 0 && i < 18) {
    return (
      <span className="iraab-dia__ln">
        <b>{text.slice(0, i)}:</b> {text.slice(i + 2)}
      </span>
    );
  }
  return <span className="iraab-dia__ln">{text}</span>;
}

function widthClass(unit) {
  if (unit.ghost) return "";
  const len = unit.lines.join("").length;
  return len > 150 ? " is-w2" : len > 80 ? " is-w1" : "";
}

export default function IraabAyahDiagram({ ayah, source = null }) {
  const stageRef = useRef(null);
  const [active, setActive] = useState(null);
  const [isolated, setIsolated] = useState(null);
  const uid = `ird${useId().replace(/[^a-zA-Z0-9]/g, "")}`;
  const plan = useMemo(() => (ayah ? planLinks(ayah.links) : []), [ayah]);

  const redraw = useCallback(() => {
    if (stageRef.current) drawArrows(stageRef.current, plan, isolated, uid);
  }, [plan, isolated, uid]);

  useLayoutEffect(() => {
    redraw();
  }, [redraw]);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return undefined;
    let frame = 0;
    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(redraw);
    };
    const ro = new ResizeObserver(schedule);
    ro.observe(stage.parentElement);
    document.fonts?.ready.then(schedule);
    return () => {
      cancelAnimationFrame(frame);
      ro.disconnect();
    };
  }, [redraw]);

  if (!ayah) return null;
  const usedTypes = [...new Set(ayah.links.map((l) => l.t))];

  return (
    <section className="iraab-dia" aria-label={`Iʿrāb of āyah ${ayah.n}`}>
      <header className="iraab-dia__head">
        <span className="iraab-dia__label">Iʿrāb</span>
        <span className="iraab-dia__label-ar" dir="rtl">إعراب الآية</span>
      </header>

      <div className="iraab-dia__scroller" dir="rtl">
        <div className="iraab-dia__stage" ref={stageRef} dir="rtl">
          {ayah.units.map((u, j) => (
            <button
              key={j}
              type="button"
              data-j={j}
              className={`iraab-dia__col${u.ghost ? " is-ghost" : ""}${widthClass(u)}${active === j ? " is-on" : ""}`}
              onClick={() => setActive((cur) => (cur === j ? null : j))}
              aria-pressed={active === j}
            >
              <span className="iraab-dia__box">
                {u.lines.map((t, k) => (
                  <IraabLine key={k} text={t} />
                ))}
              </span>
              <span className="iraab-dia__word">
                {u.ghost ? (
                  <>
                    ({u.word})<small>{u.tag}</small>
                  </>
                ) : (
                  u.word
                )}
              </span>
            </button>
          ))}
        </div>
      </div>

      {usedTypes.length > 0 && (
        <div className="iraab-dia__chips" dir="rtl" role="group" aria-label="Isolate a relation">
          {usedTypes.map((t) => (
            <button
              key={t}
              type="button"
              aria-pressed={isolated === t}
              onClick={() => setIsolated((cur) => (cur === t ? null : t))}
            >
              <i style={{ background: `var(--iraab-${t})` }} />
              {RELATION_TYPES[t] ?? t}
            </button>
          ))}
        </div>
      )}

      {ayah.notes?.map((note, k) => (
        <p key={k} className="iraab-dia__jumla" dir="rtl">{note}</p>
      ))}

      {source && (
        <p className="iraab-dia__src">
          Source: iʿrāb on {source}. Dashed boxes are words from an earlier āyah or implied (مقدّر).
        </p>
      )}
    </section>
  );
}

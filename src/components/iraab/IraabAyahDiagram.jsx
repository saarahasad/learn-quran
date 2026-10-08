import { useCallback, useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import { IRAAB_RELATION_TYPES } from "../../data/iraabDiagrams.js";
import "../../styles/iraabDiagram.css";

const SVG_NS = "http://www.w3.org/2000/svg";

/** Draws relation arrows under the words. Ported from the standalone iʿrāb page. */
function drawArrows(stage, ayah, isolated, uid) {
  stage.querySelector("svg.iraab-dia__arrows")?.remove();
  stage.style.paddingBottom = "";
  const css = getComputedStyle(stage);
  const stageRect = stage.getBoundingClientRect();
  const point = (id) => {
    const word = stage.querySelector(`[data-id="${id}"] .iraab-dia__word`);
    if (!word) return null;
    const r = word.getBoundingClientRect();
    return { x: r.left + r.width / 2 - stageRect.left, y: r.bottom - stageRect.top - 4 };
  };

  const svg = document.createElementNS(SVG_NS, "svg");
  svg.setAttribute("class", "iraab-dia__arrows");
  svg.setAttribute("aria-hidden", "true");
  const defs = document.createElementNS(SVG_NS, "defs");
  svg.appendChild(defs);
  let maxY = 0;

  ayah.links.forEach((link, k) => {
    const sources = link.from.map(point);
    const target = point(link.to);
    if (!target || sources.some((p) => !p)) return;
    const color = css.getPropertyValue(`--iraab-${link.t}`).trim() || "#333";
    const markerId = `${uid}-m${k}`;

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
    if (isolated && isolated !== link.t) g.setAttribute("class", "is-dim");

    let sx = sources.reduce((sum, p) => sum + p.x, 0) / sources.length;
    let sy = Math.max(...sources.map((p) => p.y));
    if (sources.length > 1) {
      // Grouped source (e.g. جارّ ومجرور): start from the low point of the arc joining the group.
      const inner = ayah.links.find(
        (o) => o !== link && link.from.includes(o.to) && o.from.every((f) => link.from.includes(f)),
      );
      sy = sy + 0.75 * (inner ? inner.d : 40) + 1;
      const dot = document.createElementNS(SVG_NS, "circle");
      dot.setAttribute("cx", sx);
      dot.setAttribute("cy", sy);
      dot.setAttribute("r", 3.2);
      dot.setAttribute("fill", color);
      g.appendChild(dot);
    }

    const by = Math.max(sy, target.y) + link.d;
    const path = document.createElementNS(SVG_NS, "path");
    path.setAttribute("d", `M${sx},${sy + 2} C${sx},${by} ${target.x},${by} ${target.x},${target.y + 4}`);
    path.setAttribute("stroke", color);
    path.setAttribute("marker-end", `url(#${markerId})`);
    g.appendChild(path);

    const low = (0.25 * (sy + 2 + target.y + 4)) / 2 + 0.75 * by;
    const text = document.createElementNS(SVG_NS, "text");
    text.setAttribute("x", (sx + target.x) / 2);
    text.setAttribute("y", low - 7);
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("fill", color);
    text.textContent = link.label;
    g.appendChild(text);
    svg.appendChild(g);
    maxY = Math.max(maxY, low + 8);
  });

  const h = stage.offsetHeight;
  stage.style.paddingBottom = `${Math.max(16, maxY - h + 10)}px`;
  svg.setAttribute("width", stage.scrollWidth);
  svg.setAttribute("height", maxY + 10);
  stage.appendChild(svg);
}

export default function IraabAyahDiagram({ ayah, source = null, compact = false }) {
  const stageRef = useRef(null);
  const [activeId, setActiveId] = useState(null);
  const [isolated, setIsolated] = useState(null);
  const uid = `ird${useId().replace(/[^a-zA-Z0-9]/g, "")}`;

  const redraw = useCallback(() => {
    if (stageRef.current && ayah) drawArrows(stageRef.current, ayah, isolated, uid);
  }, [ayah, isolated, uid]);

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
    <section className={`iraab-dia${compact ? " iraab-dia--compact" : ""}`} aria-label={`Iʿrāb of āyah ${ayah.n}`}>
      <header className="iraab-dia__head">
        <span className="iraab-dia__label">Iʿrāb</span>
        <span className="iraab-dia__label-ar" dir="rtl">إعراب الآية</span>
      </header>

      <div className="iraab-dia__scroller" dir="rtl">
        <div className="iraab-dia__stage" ref={stageRef} dir="rtl">
          {ayah.units.map((u) => (
            <button
              key={u.id}
              type="button"
              data-id={u.id}
              className={[
                "iraab-dia__col",
                u.ghost && "is-ghost",
                u.wide && "is-wide",
                activeId === u.id && "is-on",
              ].filter(Boolean).join(" ")}
              onClick={() => setActiveId((cur) => (cur === u.id ? null : u.id))}
              aria-pressed={activeId === u.id}
            >
              <span className="iraab-dia__box">
                <span className="iraab-dia__role">{u.role}</span>
                <span className="iraab-dia__det">{u.det}</span>
                {u.sign && <span className="iraab-dia__sign">{u.sign}</span>}
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

      <div className="iraab-dia__chips" dir="rtl" role="group" aria-label="Isolate a relation">
        {usedTypes.map((t) => (
          <button
            key={t}
            type="button"
            aria-pressed={isolated === t}
            onClick={() => setIsolated((cur) => (cur === t ? null : t))}
          >
            <i style={{ background: `var(--iraab-${t})` }} />
            {IRAAB_RELATION_TYPES[t]?.ar ?? t}
          </button>
        ))}
      </div>

      <div className="iraab-dia__jumla" dir="rtl" dangerouslySetInnerHTML={{ __html: ayah.jumla }} />

      {source && <p className="iraab-dia__src">Source: {source}. Dashed boxes are words from an earlier āyah or implied (مقدّر).</p>}
    </section>
  );
}

import { useEffect, useId, useState } from "react";
import {
  PORTRAIT_FEATURES,
  PORTRAIT_MAP_INTRO,
  PORTRAIT_TOPICS,
  getPortraitItem,
} from "../../data/seerahPortraitMap.js";

function FeatureSilhouette({ activeId, onSelect }) {
  const clipId = useId().replace(/:/g, "");

  return (
    <div className="sr-map-stage" aria-label="Schematic feature map">
      <svg className="sr-map-svg" viewBox="0 0 100 100" role="img" aria-hidden="true">
        <defs>
          <linearGradient id={`${clipId}-glow`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fdf2f8" />
            <stop offset="55%" stopColor="#fce7f3" />
            <stop offset="100%" stopColor="#e7e5e4" />
          </linearGradient>
          <linearGradient id={`${clipId}-line`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#9f2d55" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#a16207" stopOpacity="0.45" />
          </linearGradient>
        </defs>

        {/* Soft ground glow */}
        <ellipse cx="50" cy="94" rx="28" ry="3.5" fill="#9f2d55" opacity="0.12" />

        {/* Shoulders / torso outline — abstract only */}
        <path
          d="M28 78 C30 68 38 62 50 62 C62 62 70 68 72 78 L78 96 L22 96 Z"
          fill={`url(#${clipId}-glow)`}
          stroke={`url(#${clipId}-line)`}
          strokeWidth="0.6"
        />

        {/* Head oval — no facial features */}
        <ellipse
          cx="50"
          cy="38"
          rx="18"
          ry="22"
          fill={`url(#${clipId}-glow)`}
          stroke={`url(#${clipId}-line)`}
          strokeWidth="0.7"
        />

        {/* Hair band hint (abstract arc) */}
        <path
          d="M33 30 C36 16 64 16 67 30"
          fill="none"
          stroke="#7c3aed"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.35"
        />

        {/* Beard zone hint (abstract arc) */}
        <path
          d="M38 52 C42 62 58 62 62 52"
          fill="none"
          stroke="#c2410c"
          strokeWidth="1.1"
          strokeLinecap="round"
          opacity="0.35"
        />
      </svg>

      {PORTRAIT_FEATURES.map((feature) => {
        const active = activeId === feature.id;
        return (
          <button
            key={feature.id}
            type="button"
            className={`sr-map-pin sr-map-pin--${feature.tone}${active ? " is-active" : ""}${
              feature.comingSoon ? " is-soon" : ""
            }`}
            style={{ left: `${feature.pin.x}%`, top: `${feature.pin.y}%` }}
            onClick={() => onSelect(feature.id)}
            aria-pressed={active}
            aria-label={`${feature.label}${feature.comingSoon ? " (notes coming)" : ""}`}
          >
            <span className="sr-map-pin-dot" />
            <span className="sr-map-pin-label">
              <strong>{feature.label}</strong>
              <em dir="rtl" lang="ar">
                {feature.labelAr}
              </em>
            </span>
          </button>
        );
      })}
    </div>
  );
}

function DetailPanel({ item, onOpenLesson }) {
  if (!item) return null;

  return (
    <aside className={`sr-map-detail sr-map-detail--${item.tone}`} aria-live="polite">
      <header className="sr-map-detail-head">
        <p className="sr-map-detail-kicker">{item.group === "body" ? "Feature" : "Topic"}</p>
        <h3>
          {item.label}
          <span dir="rtl" lang="ar">
            {item.labelAr}
          </span>
        </h3>
        <p className="sr-map-detail-summary">{item.summary}</p>
        {item.comingSoon && <p className="sr-map-soon">Notes for this chapter are coming soon.</p>}
      </header>

      {item.facts?.length > 0 && !item.comingSoon && (
        <section>
          <h4>Hold these</h4>
          <ul className="sr-map-facts">
            {item.facts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
        </section>
      )}

      {item.narrations?.length > 0 && (
        <section>
          <h4>Witness</h4>
          <div className="sr-map-narrations">
            {item.narrations.map((n) => (
              <blockquote key={`${n.who}-${n.text}`}>
                <p>{n.text}</p>
                <footer>
                  <cite>{n.who}</cite>
                  {n.source && <span>{n.source}</span>}
                </footer>
              </blockquote>
            ))}
          </div>
        </section>
      )}

      {item.rulings?.length > 0 && (
        <section>
          <h4>Apply</h4>
          <ul className="sr-map-facts sr-map-facts--rule">
            {item.rulings.map((rule) => (
              <li key={rule}>{rule}</li>
            ))}
          </ul>
        </section>
      )}

      {item.lessonId && onOpenLesson && (
        <button type="button" className="course-btn primary sr-map-open" onClick={() => onOpenLesson(item.lessonId)}>
          Open full chapter →
        </button>
      )}
    </aside>
  );
}

export default function SeerahPortraitExplorer({ onOpenLesson, initialId = "face" }) {
  const [activeId, setActiveId] = useState(initialId);
  const item = getPortraitItem(activeId);

  useEffect(() => {
    setActiveId(initialId);
  }, [initialId]);

  return (
    <div className="sr-map">
      <header className="sr-map-hero">
        <div>
          <p className="sr-map-hero-kicker">Portrait Path · Interactive</p>
          <h2>
            {PORTRAIT_MAP_INTRO.title}
            <span dir="rtl" lang="ar">
              {PORTRAIT_MAP_INTRO.titleAr}
            </span>
          </h2>
          <p>{PORTRAIT_MAP_INTRO.blurb}</p>
        </div>
      </header>

      <div className="sr-map-layout">
        <div className="sr-map-left">
          <FeatureSilhouette activeId={activeId} onSelect={setActiveId} />
          <p className="sr-map-hint">Tap a pin on the diagram</p>
        </div>
        <DetailPanel item={item} onOpenLesson={onOpenLesson} />
      </div>

      <section className="sr-map-topics" aria-label="Topics">
        <h3>Topics & later chapters</h3>
        <div className="sr-map-chips">
          {PORTRAIT_TOPICS.map((topic) => {
            const active = activeId === topic.id;
            return (
              <button
                key={topic.id}
                type="button"
                className={`sr-map-chip sr-map-chip--${topic.tone}${active ? " is-active" : ""}${
                  topic.comingSoon ? " is-soon" : ""
                }`}
                onClick={() => setActiveId(topic.id)}
                aria-pressed={active}
              >
                <strong>{topic.label}</strong>
                <span dir="rtl" lang="ar">
                  {topic.labelAr}
                </span>
                {topic.comingSoon && <em>Soon</em>}
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
}

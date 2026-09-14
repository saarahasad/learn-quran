import { useEffect, useRef } from "react";
import { AJRUMIYYAH_AUTHOR_TIMELINE } from "../../data/ajrumiyyahFrontMatter.js";

function EventMedia({ event }) {
  const hasImage = Boolean(event.image);
  const hasRoute = Boolean(event.route);
  const pairMaps = hasImage && hasRoute;

  return (
    <div className="atl-media-block">
      {pairMaps ? (
        <div className="atl-media-pair">
          <figure className="atl-media">
            <img src={event.image} alt={event.imageAlt || event.titleEn} loading="lazy" />
            {event.imageCaption ? <figcaption>{event.imageCaption}</figcaption> : null}
          </figure>
          <figure className="atl-media atl-media--route">
            <img
              src={event.route.image}
              alt={event.route.imageAlt || "Route from Fas to Cairo"}
              loading="lazy"
            />
            <figcaption>
              {event.route.from} → {event.route.to} · {event.route.distanceLabel}
            </figcaption>
          </figure>
        </div>
      ) : (
        <>
          {hasImage ? (
            <figure className="atl-media">
              <img src={event.image} alt={event.imageAlt || event.titleEn} loading="lazy" />
              {event.imageCaption ? <figcaption>{event.imageCaption}</figcaption> : null}
            </figure>
          ) : null}
          {hasRoute ? (
            <div className="atl-route">
              <figure className="atl-media atl-media--route">
                <img
                  src={event.route.image}
                  alt={event.route.imageAlt || "Route from Fas to Cairo"}
                  loading="lazy"
                />
              </figure>
              <div className="atl-route__badge">
                <span className="atl-route__cities">
                  {event.route.from} → {event.route.to}
                </span>
                <strong className="atl-route__km">{event.route.distanceLabel}</strong>
                <span className="atl-route__note">{event.route.note}</span>
              </div>
            </div>
          ) : null}
        </>
      )}

      {pairMaps ? (
        <div className="atl-route__badge atl-route__badge--inline">
          <span className="atl-route__cities">
            {event.route.from} → {event.route.to}
          </span>
          <strong className="atl-route__km">{event.route.distanceLabel}</strong>
          <span className="atl-route__note">{event.route.note}</span>
        </div>
      ) : null}

      {event.works?.length ? (
        <ul className="atl-works">
          {event.works.map((work) => (
            <li key={work.id} className="atl-works__item">
              <img src={work.image} alt={work.titleEn} loading="lazy" />
              <span className="atl-works__ar" dir="rtl" lang="ar">
                {work.titleAr}
              </span>
              <span className="atl-works__en">{work.titleEn}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {event.burial ? (
        <div className="atl-burial">
          <p className="atl-burial__place" dir="rtl" lang="ar">
            {event.burial.quarterAr}
          </p>
          <p className="atl-burial__en">
            {event.burial.quarter} · {event.burial.city}
          </p>
          <p className="atl-burial__distance">
            From Fas centre: <strong>{event.burial.distanceFromCenter}</strong>
          </p>
          <p className="atl-burial__note">{event.burial.note}</p>
        </div>
      ) : null}
    </div>
  );
}

function EventCard({ event }) {
  const hasMedia =
    Boolean(event.image) ||
    Boolean(event.route) ||
    Boolean(event.works?.length) ||
    Boolean(event.burial);

  return (
    <article className={`atl-card${hasMedia ? " atl-card--media" : ""}`}>
      <div className="atl-card__meta">
        <span className="atl-card__year">{event.year}</span>
        {event.yearCe ? <span className="atl-card__ce">{event.yearCe}</span> : null}
      </div>
      <h4 className="atl-card__titles">
        <span className="atl-card__ar" dir="rtl" lang="ar">
          {event.titleAr}
        </span>
        <span className="atl-card__en">{event.titleEn}</span>
      </h4>
      {event.place ? <p className="atl-card__place">{event.place}</p> : null}

      {/* Images first so they are never clipped under text */}
      {hasMedia ? <EventMedia event={event} /> : null}

      <p className="atl-card__en-body">{event.en}</p>
    </article>
  );
}

/**
 * Franklin-style horizontal life timeline for Ibn Ājurrūm.
 * Events strip scrolls horizontally only (wheel/trackpad mapped to x).
 * @param {{ events?: typeof AJRUMIYYAH_AUTHOR_TIMELINE, variant?: "course" | "seminar" }} props
 */
export default function AuthorLifeTimeline({
  events = AJRUMIYYAH_AUTHOR_TIMELINE,
  variant = "course",
}) {
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return undefined;

    const onWheel = (e) => {
      const mostlyVertical = Math.abs(e.deltaY) >= Math.abs(e.deltaX);
      if (!mostlyVertical || e.deltaY === 0) return;
      if (el.scrollWidth <= el.clientWidth + 1) return;
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  if (!events?.length) return null;

  return (
    <section
      className={`atl atl--${variant}`}
      aria-label="Events in the life of Ibn Ājurrūm"
    >
      <header className="atl__head">
        <div className="atl__portrait" aria-hidden="true">
          <span className="atl__portrait-ar" dir="rtl" lang="ar">
            آج
          </span>
        </div>
        <div className="atl__head-copy">
          <p className="atl__eyebrow">Life timeline</p>
          <h3 className="atl__title">Events in the Life of Ibn Ājurrūm</h3>
          <p className="atl__subtitle">
            <span dir="rtl" lang="ar">
              ابْنُ آجُرُّومٍ
            </span>
            <span aria-hidden="true"> · </span>
            <span>672–723 AH / 1273–1323 CE</span>
          </p>
        </div>
      </header>

      <div
        className="atl__scroll"
        ref={scrollRef}
        tabIndex={0}
        role="region"
        aria-label="Timeline events — scroll horizontally"
      >
        <ol className="atl__track">
          {events.map((event) => (
            <li key={event.id} className="atl__stop atl__stop--above">
              <div className="atl__above">
                <EventCard event={event} />
                <span className="atl__connector" aria-hidden="true" />
              </div>

              <div className="atl__axis-slot" aria-hidden="true">
                <span className="atl__diamond-wrap">
                  <span className="atl__diamond" />
                </span>
                <span className="atl__tick-label">
                  <strong>{event.year}</strong>
                  {event.yearCe ? <small>{event.yearCe}</small> : null}
                </span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

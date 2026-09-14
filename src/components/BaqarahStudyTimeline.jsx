import { useEffect, useRef, useState } from "react";
import { getBaqarahStudyTimelineThrough } from "../data/baqarahPageGuides.js";

const TABLET_TIMELINE_MQ = "(max-width: 1024px)";
const PHONE_TIMELINE_MQ = "(max-width: 720px)";

function useMediaQuery(query) {
  const [matches, setMatches] = useState(
    () => typeof window !== "undefined" && window.matchMedia(query).matches,
  );

  useEffect(() => {
    const mq = window.matchMedia(query);
    const onChange = (event) => setMatches(event.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [query]);

  return matches;
}

function PinIcon() {
  return (
    <svg
      className="baqarah-study-timeline__pin"
      viewBox="0 0 24 24"
      width="18"
      height="18"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"
      />
    </svg>
  );
}

function TimelineNode({ item, index, isActive, isLesson, onSelect, stopRef }) {
  const isPage = item.mushafPage != null;
  const markerClass = `baqarah-study-timeline__marker baqarah-study-timeline__marker--${item.marker}`;
  const calloutAbove = index % 2 === 0;
  const calloutClass = [
    "baqarah-study-timeline__callout",
    calloutAbove ? "baqarah-study-timeline__callout--above" : "baqarah-study-timeline__callout--below",
    item.marker === "rub" && "baqarah-study-timeline__callout--rub",
    isActive && "is-active",
    isLesson && "is-lesson",
  ]
    .filter(Boolean)
    .join(" ");

  const nodeInner = (
    <>
      {isLesson && (
        <span className="baqarah-study-timeline__lesson-badge">
          <PinIcon />
          <span>Today&apos;s lesson</span>
        </span>
      )}
      <span className={markerClass} aria-hidden="true">
        {isPage ? (
          <span className="baqarah-study-timeline__page-num">{item.mushafPage}</span>
        ) : (
          <span className="baqarah-study-timeline__division-label" dir="rtl">
            {item.labelAr}
          </span>
        )}
      </span>
    </>
  );

  return (
    <li
      ref={stopRef}
      className={[
        "baqarah-study-timeline__stop",
        isPage && "baqarah-study-timeline__stop--page",
        isActive && "is-active",
        isLesson && "is-lesson",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {isPage && item.headline && (
        <div className={calloutClass}>
          <p className="baqarah-study-timeline__headline">{item.headline}</p>
          {item.detail && <p className="baqarah-study-timeline__detail">{item.detail}</p>}
        </div>
      )}

      {isPage ? (
        <button
          type="button"
          className="baqarah-study-timeline__node-btn"
          onClick={() => onSelect?.(item.mushafPage)}
          aria-current={isActive ? "step" : undefined}
          aria-label={`Page ${item.mushafPage}: ${item.headline}`}
        >
          {nodeInner}
        </button>
      ) : (
        <div className="baqarah-study-timeline__node" aria-label={`${item.label} · ${item.labelAr}`}>
          {nodeInner}
        </div>
      )}

      {!isPage && (
        <span className="baqarah-study-timeline__division-caption">
          {item.label}
          <span dir="rtl">{item.labelAr}</span>
        </span>
      )}
    </li>
  );
}

function VerticalTimeline({ items, activeMushafPage, onPageSelect, activeRef }) {
  return (
    <ol className="baqarah-study-timeline__vertical">
      {items.map((item) => {
        const isActive = item.mushafPage === activeMushafPage;
        const isPage = item.mushafPage != null;

        if (!isPage) {
          return (
            <li key={item.id} className="baqarah-study-timeline__vertical-division">
              <span
                className={`baqarah-study-timeline__marker baqarah-study-timeline__marker--${item.marker}`}
                aria-hidden="true"
              >
                <span className="baqarah-study-timeline__division-label" dir="rtl">
                  {item.labelAr}
                </span>
              </span>
              <span className="baqarah-study-timeline__vertical-division-label">
                {item.label}
                <span dir="rtl">{item.labelAr}</span>
              </span>
            </li>
          );
        }

        return (
          <li
            key={item.id}
            ref={isActive ? activeRef : undefined}
            className={[
              "baqarah-study-timeline__vertical-item",
              isActive && "is-active",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <button
              type="button"
              className="baqarah-study-timeline__vertical-btn"
              onClick={() => onPageSelect?.(item.mushafPage)}
              aria-current={isActive ? "step" : undefined}
            >
              <span className="baqarah-study-timeline__vertical-page" aria-hidden="true">
                {item.mushafPage}
              </span>
              <span className="baqarah-study-timeline__vertical-copy">
                {isActive && (
                  <span className="baqarah-study-timeline__vertical-lesson">
                    <PinIcon />
                    Today&apos;s lesson
                  </span>
                )}
                {item.headline && (
                  <span className="baqarah-study-timeline__vertical-headline">{item.headline}</span>
                )}
                {item.detail && (
                  <span className="baqarah-study-timeline__vertical-detail">{item.detail}</span>
                )}
              </span>
            </button>
          </li>
        );
      })}
    </ol>
  );
}

export default function BaqarahStudyTimeline({
  activeMushafPage = null,
  onPageSelect,
  throughPage = 9,
  embedded = false,
}) {
  const trackRef = useRef(null);
  const activeRef = useRef(null);
  const items = getBaqarahStudyTimelineThrough(throughPage);
  const isPhoneLayout = useMediaQuery(PHONE_TIMELINE_MQ);
  const isTabletLayout = useMediaQuery(TABLET_TIMELINE_MQ);

  useEffect(() => {
    activeRef.current?.scrollIntoView({
      behavior: "smooth",
      block: isPhoneLayout ? "nearest" : "nearest",
      inline: isPhoneLayout ? "nearest" : "center",
    });
  }, [activeMushafPage, isPhoneLayout]);

  const sectionClass = [
    "baqarah-study-timeline",
    embedded && "baqarah-study-timeline--embedded",
    isTabletLayout && "baqarah-study-timeline--compact",
    isPhoneLayout && "baqarah-study-timeline--phone",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={sectionClass} aria-label="Al-Baqarah study roadmap">
      <header className="baqarah-study-timeline__header">
        <div>
          <p className="baqarah-study-timeline__kicker">Study roadmap</p>
          <h2 className="baqarah-study-timeline__title">
            Al-Baqarah · Pages 2–{throughPage}
          </h2>
        </div>
        <ul className="baqarah-study-timeline__legend" aria-label="Timeline legend">
          <li>
            <span className="baqarah-study-timeline__legend-pin" aria-hidden="true">
              <PinIcon />
            </span>
            Today&apos;s lesson
          </li>
          <li>
            <span className="baqarah-study-timeline__legend-swatch baqarah-study-timeline__marker--page" />
            Page
          </li>
          <li>
            <span className="baqarah-study-timeline__legend-swatch baqarah-study-timeline__marker--rub" />
            Rubʿ <span dir="rtl">الربع</span>
          </li>
          <li>
            <span className="baqarah-study-timeline__legend-swatch baqarah-study-timeline__marker--hizb" />
            Hizb <span dir="rtl">الحزب</span>
          </li>
          <li>
            <span className="baqarah-study-timeline__legend-swatch baqarah-study-timeline__marker--juz" />
            Juzʾ <span dir="rtl">الجزء</span>
          </li>
        </ul>
      </header>

      {isPhoneLayout ? (
        <VerticalTimeline
          items={items}
          activeMushafPage={activeMushafPage}
          onPageSelect={onPageSelect}
          activeRef={activeRef}
        />
      ) : (
        <div className="baqarah-study-timeline__scroll" ref={trackRef}>
          <ol className="baqarah-study-timeline__track">
            {items.map((item, index) => {
              const isActive = item.mushafPage === activeMushafPage;
              return (
                <TimelineNode
                  key={item.id}
                  item={item}
                  index={index}
                  isActive={isActive}
                  isLesson={isActive}
                  onSelect={onPageSelect}
                  stopRef={isActive ? activeRef : undefined}
                />
              );
            })}
          </ol>
        </div>
      )}
    </section>
  );
}

import { memo, useEffect, useMemo, useState } from "react";
import {
  getPageHotspots,
  hotspotToPercent,
} from "../../utils/mushafPageHotspots.js";

const LANE = { right: 0.8, width: 21 };
const GAP_PCT = 0.35;

function verseTop(zone, layout) {
  return parseFloat(hotspotToPercent(zone, layout).top);
}

function estimateHeightPercent(item) {
  const text = [item.ar, item.summary, item.detail].filter(Boolean).join(" ");
  const charsPerLine = 30;
  const lineHeightPct = 3.1;
  const lines = Math.max(1, Math.ceil(text.length / charsPerLine));
  return lines * lineHeightPct + (item.ar ? 1.8 : 1.2);
}

function resolveVerticalOverlaps(items) {
  const sorted = [...items].sort((a, b) => a.top - b.top);
  let lastBottom = 0;

  for (const item of sorted) {
    const minTop = lastBottom + GAP_PCT;
    if (item.top < minTop) item.top = minTop;
    lastBottom = item.top + item.height;
  }

  return sorted;
}

function buildPlacements(items, zonesByVerse) {
  const drafts = items.map((item, index) => ({
    item,
    index,
    top: zonesByVerse.has(item.verse)
      ? verseTop(zonesByVerse.get(item.verse))
      : item.anchor?.top ?? index * 8,
    height: estimateHeightPercent(item),
  }));

  return resolveVerticalOverlaps(drafts).map(({ item, top, height }) => ({
    item,
    style: {
      right: `${LANE.right}%`,
      left: "auto",
      top: `${top}%`,
      width: `${LANE.width}%`,
      minHeight: `${height}%`,
    },
  }));
}

function MushafLabelOverlay({ page, surahNumber, items = [], layerId = "overlay" }) {
  const [zonesByVerse, setZonesByVerse] = useState(new Map());

  const versesNeeded = useMemo(
    () => new Set(items.map((item) => item.verse)),
    [items],
  );

  useEffect(() => {
    let cancelled = false;

    getPageHotspots(page).then(({ hotspots }) => {
      if (cancelled) return;

      const byAyah = new Map();
      for (const zone of hotspots) {
        if (zone.surah !== surahNumber || !versesNeeded.has(zone.ayah)) continue;
        const existing = byAyah.get(zone.ayah);
        if (!existing || zone.top < existing.top) {
          byAyah.set(zone.ayah, zone);
        }
      }

      setZonesByVerse(byAyah);
    });

    return () => {
      cancelled = true;
    };
  }, [page, surahNumber, versesNeeded]);

  const placements = useMemo(
    () => buildPlacements(items, zonesByVerse),
    [items, zonesByVerse],
  );

  if (!placements.length) return null;

  return (
    <div
      className="mushaf-topics-layer"
      aria-label={`Study overlay ${layerId} on page ${page}`}
    >
      {placements.map(({ item, style }) => (
        <div
          key={`${layerId}-${item.verse}-${item.ar ?? item.summary}`}
          className={[
            "mushaf-topic-bubble",
            item.tone && `mushaf-topic-bubble--${item.tone}`,
          ]
            .filter(Boolean)
            .join(" ")}
          style={style}
        >
          {item.ar && (
            <p className="mushaf-topic-bubble__ar" dir="rtl">
              {item.ar}
            </p>
          )}
          <p className="mushaf-topic-bubble__text">
            {item.verse != null && (
              <span className="mushaf-topic-bubble__verse">Verses {item.verse} </span>
            )}
            <strong className="mushaf-topic-bubble__label">{item.summary}</strong>
          </p>
          {item.detail && (
            <p className="mushaf-topic-bubble__detail">{item.detail}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default memo(MushafLabelOverlay);

import { memo, useEffect, useState } from "react";
import {
  getPageHotspots,
  hotspotToPercent,
} from "../../utils/mushafPageHotspots.js";

function AyahOverlay({
  page,
  surahNumber,
  selectedAyah,
  highlightedAyat,
  currentAyah,
  showHighlight,
  indicatorMode = "fill",
  onSelectAyah,
}) {
  const [zones, setZones] = useState([]);
  const [layout, setLayout] = useState({
    scale: 1,
    containerLeft: 12,
    containerTop: 10,
  });

  useEffect(() => {
    let cancelled = false;

    getPageHotspots(page).then(({ hotspots, layout: meta }) => {
      if (cancelled) return;
      setZones(hotspots.filter((h) => h.surah === surahNumber));
      setLayout(meta);
    });

    return () => {
      cancelled = true;
    };
  }, [page, surahNumber]);

  if (!zones.length) return null;

  const highlightSet =
    indicatorMode === "fill" && highlightedAyat?.length
      ? new Set(highlightedAyat)
      : indicatorMode === "fill" && selectedAyah != null
        ? new Set([selectedAyah])
        : null;

  const useBorder = indicatorMode === "border";

  return (
    <div
      className={[
        "mushaf-ayah-layer",
        useBorder && "mushaf-ayah-layer--border-indicator",
      ]
        .filter(Boolean)
        .join(" ")}
      aria-label={`Āyāt on page ${page}`}
    >
      {zones.map((zone) => {
        const isPassage = highlightSet?.has(zone.ayah) && showHighlight;
        const isCurrent = showHighlight && currentAyah === zone.ayah;

        return (
          <button
            key={zone.id}
            type="button"
            className={[
              "mushaf-ayah-hit",
              isPassage && "is-selected",
              isCurrent && (useBorder ? "is-current-border" : "is-current"),
            ]
              .filter(Boolean)
              .join(" ")}
            style={hotspotToPercent(zone, layout)}
            onClick={() => onSelectAyah?.(zone.ayah)}
            aria-label={`Āyah ${zone.ayah}`}
            aria-pressed={isPassage || isCurrent}
            tabIndex={onSelectAyah ? 0 : -1}
          />
        );
      })}
    </div>
  );
}

export default memo(AyahOverlay);

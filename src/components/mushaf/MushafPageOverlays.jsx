import { useMemo } from "react";
import { getBaqarahGuideByMushafPage } from "../../data/baqarahPageGuides.js";
import {
  getActiveLayerItems,
  getOverlayLayersForMushafPage,
  getTopicsMapBubbleItems,
  isWordHighlightLayer,
  resolveLayerItems,
} from "../../data/mushafOverlayLayers.js";
import MushafGharibOverlay from "./MushafGharibOverlay.jsx";
import MushafLabelOverlay from "./MushafLabelOverlay.jsx";
import MushafWordHighlightOverlay from "./MushafWordHighlightOverlay.jsx";

export default function MushafPageOverlays({
  page,
  surahNumber,
  activeLayerIds = [],
}) {
  const guide = useMemo(() => getBaqarahGuideByMushafPage(page), [page]);
  const pageLayers = useMemo(
    () => getOverlayLayersForMushafPage(page),
    [page],
  );

  const activeLayers = pageLayers.filter((layer) =>
    activeLayerIds.includes(layer.id),
  );

  if (!activeLayers.length) return null;

  const topicsMapLayers = activeLayers.filter((layer) => layer.id === "topicsMap");
  const wordLayers = activeLayers
    .filter((layer) => isWordHighlightLayer(layer) && layer.id !== "topicsMap")
    .sort((a, b) => {
      const order = {
        hopeReward: 1,
        fearPunishment: 1,
        verse7Sealed: 2,
        repeatedWords: 3,
        verseBeginning: 4,
        pageBounds: 9,
      };
      return (order[a.id] ?? 5) - (order[b.id] ?? 5);
    });
  const labelLayers = activeLayers.filter(
    (layer) => !isWordHighlightLayer(layer) && layer.id !== "topicsMap",
  );

  const WORD_LAYER_CLASS = {
    pageBounds: "mushaf-word-highlight-layer--page-bounds",
    hopeReward: "mushaf-word-highlight-layer--hope-reward",
    fearPunishment: "mushaf-word-highlight-layer--fear-punishment",
  };

  return (
    <>
      {topicsMapLayers.map((layer) => {
        const items = getTopicsMapBubbleItems(guide, layer);
        if (!items.length) return null;

        return (
          <MushafLabelOverlay
            key={`${page}-${layer.id}`}
            page={page}
            surahNumber={surahNumber}
            items={items}
            layerId={layer.id}
          />
        );
      })}

      {wordLayers.map((layer) => {
        const rules = resolveLayerItems(guide, layer);
        if (!rules.length) return null;

        return (
          <MushafWordHighlightOverlay
            key={`${page}-${layer.id}`}
            page={page}
            surahNumber={surahNumber}
            rules={rules}
            layerId={layer.id}
            layerClass={WORD_LAYER_CLASS[layer.id] ?? ""}
          />
        );
      })}

      {labelLayers.map((layer) => {
        const items = getActiveLayerItems(page, layer.id, guide);
        if (!items.length) return null;

        if (layer.source === "detailedTopics") {
          return (
            <MushafLabelOverlay
              key={`${page}-${layer.id}`}
              page={page}
              surahNumber={surahNumber}
              items={items}
              layerId={layer.id}
            />
          );
        }

        if (layer.source === "gharibWords") {
          return (
            <MushafGharibOverlay
              key={`${page}-${layer.id}`}
              page={page}
              surahNumber={surahNumber}
              items={items}
              layerId={layer.id}
            />
          );
        }

        return null;
      })}
    </>
  );
}

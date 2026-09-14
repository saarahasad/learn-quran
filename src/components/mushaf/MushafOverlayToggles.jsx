import { toArabicNum } from "../../utils/mushafText.js";

const SWATCH_CLASS = {
  "sand-fill": "mushaf-overlay-toggle__swatch mushaf-overlay-toggle__swatch--sand-fill",
  "green-fill": "mushaf-overlay-toggle__swatch mushaf-overlay-toggle__swatch--green-fill",
  "rose-fill": "mushaf-overlay-toggle__swatch mushaf-overlay-toggle__swatch--rose-fill",
  "rose-circle": "mushaf-overlay-toggle__swatch mushaf-overlay-toggle__swatch--rose-circle",
  "blue-outline": "mushaf-overlay-toggle__swatch mushaf-overlay-toggle__swatch--blue-outline",
};

export default function MushafOverlayToggles({
  layers = [],
  activeLayerIds = [],
  onToggle,
}) {
  if (!layers.length) return null;

  return (
    <div className="mushaf-overlay-toggles" role="group" aria-label="Mushaf study overlays">
      {layers.map((layer) => {
        const isActive = activeLayerIds.includes(layer.id);
        const pageHint =
          layer.pages?.length > 1
            ? layer.pages.map((p) => toArabicNum(p)).join("·")
            : null;
        const swatchClass = layer.swatch ? SWATCH_CLASS[layer.swatch] : null;

        return (
          <button
            key={layer.id}
            type="button"
            className={`mushaf-overlay-toggle${isActive ? " is-active" : ""}`}
            aria-pressed={isActive}
            onClick={() => onToggle(layer.id)}
          >
            {swatchClass && <span className={swatchClass} aria-hidden="true" />}
            <span>{layer.label}</span>
            {pageHint && (
              <span className="mushaf-overlay-toggle__pages">{pageHint}</span>
            )}
          </button>
        );
      })}
    </div>
  );
}

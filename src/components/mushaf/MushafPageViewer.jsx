import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  getMushafPageFallbackUrl,
  getMushafPageImageUrl,
} from "../../utils/mushafImages.js";
import { prefetchHotspots } from "../../utils/mushafPageHotspots.js";
import { prefetchMushafWordBoxes } from "../../utils/mushafWordBoxes.js";
import { toArabicNum } from "../../utils/mushafText.js";
import AyahOverlay from "./AyahOverlay.jsx";
import MushafPageBlankOverlay from "./MushafPageBlankOverlay.jsx";
import MushafIraabOverlay from "./MushafIraabOverlay.jsx";
import MushafMemorizationMistakesOverlay from "./MushafMemorizationMistakesOverlay.jsx";
import MushafMistakeMarkOverlay from "./MushafMistakeMarkOverlay.jsx";
import MushafPageOverlays from "./MushafPageOverlays.jsx";
import MushafWordBoxCalibratorOverlay from "./MushafWordBoxCalibratorOverlay.jsx";

export default function MushafPageViewer({
  page,
  surahNumber,
  selectedAyah,
  highlightedAyat,
  currentAyah,
  showHighlight,
  indicatorMode,
  compact,
  showCaption = true,
  showAyahOverlay = true,
  activeLayerIds = [],
  showIraab = false,
  calibrateMode = false,
  pageMemoryMode = "full",
  pageMemorySeed = 1,
  pageMemoryRevealedKeys = null,
  pageMemoryShowAll = false,
  onPageMemoryReveal,
  onAyahSelect,
  showMemorizationMistakes = false,
  markMistakeMode = false,
  memorizationMistakes = [],
  markedMistakeKeys = null,
  onMistakeWordClick,
}) {
  const [src, setSrc] = useState(() => getMushafPageImageUrl(page));
  const [loaded, setLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);
  const imgRef = useRef(null);
  const hasOverlays = activeLayerIds.length > 0;
  const hasPageMemory = pageMemoryMode !== "full";
  const needsWordBoxes =
    showAyahOverlay ||
    hasOverlays ||
    calibrateMode ||
    hasPageMemory ||
    showIraab ||
    showMemorizationMistakes ||
    markMistakeMode;

  function markLoadedIfReady() {
    const img = imgRef.current;
    if (img?.complete && img.naturalWidth > 0) {
      setLoaded(true);
      setImgError(false);
    }
  }

  useEffect(() => {
    if (needsWordBoxes) {
      prefetchHotspots(page);
      prefetchMushafWordBoxes(page, surahNumber);
    }
  }, [page, needsWordBoxes, surahNumber]);

  useEffect(() => {
    setSrc(getMushafPageImageUrl(page));
    setLoaded(false);
    setImgError(false);
  }, [page]);

  useLayoutEffect(() => {
    markLoadedIfReady();
  }, [src, page]);

  function handleImgError() {
    const fallback = getMushafPageFallbackUrl(page);
    if (src !== fallback) {
      setSrc(fallback);
      return;
    }
    setImgError(true);
  }

  return (
    <figure className={`mushaf-img-page${compact ? " mushaf-img-page--compact" : ""}`}>
      {!loaded && !imgError && (
        <div className="mushaf-img-skeleton" aria-hidden="true" />
      )}

      {imgError ? (
        <div className="mushaf-img-error">Could not load page {page}</div>
      ) : (
        <div className="mushaf-img-frame">
          <img
            ref={imgRef}
            src={src}
            alt={`Medina mushaf page ${page}`}
            loading="eager"
            decoding="async"
            draggable={false}
            onLoad={() => {
              setLoaded(true);
              setImgError(false);
            }}
            onError={handleImgError}
            className={loaded ? "is-loaded" : ""}
          />
          {loaded && showAyahOverlay && !calibrateMode && (
            <AyahOverlay
              page={page}
              surahNumber={surahNumber}
              selectedAyah={selectedAyah}
              highlightedAyat={highlightedAyat}
              currentAyah={currentAyah ?? selectedAyah}
              showHighlight={showHighlight}
              indicatorMode={indicatorMode}
              onSelectAyah={onAyahSelect}
            />
          )}
          {loaded && hasOverlays && !calibrateMode && (
            <MushafPageOverlays
              page={page}
              surahNumber={surahNumber}
              activeLayerIds={activeLayerIds}
            />
          )}
          {loaded && showIraab && !calibrateMode && (
            <MushafIraabOverlay page={page} surahNumber={surahNumber} />
          )}
          {loaded && hasPageMemory && (
            <MushafPageBlankOverlay
              page={page}
              surahNumber={surahNumber}
              modeId={pageMemoryMode}
              seed={pageMemorySeed}
              revealedKeys={pageMemoryRevealedKeys}
              showAllRevealed={pageMemoryShowAll}
              onRevealKey={onPageMemoryReveal}
            />
          )}
          {loaded && showMemorizationMistakes && !calibrateMode && (
            <MushafMemorizationMistakesOverlay
              page={page}
              surahNumber={surahNumber}
              mistakes={memorizationMistakes}
              interactive={markMistakeMode}
              onWordClick={onMistakeWordClick}
            />
          )}
          {loaded && markMistakeMode && !calibrateMode && (
            <MushafMistakeMarkOverlay
              page={page}
              surahNumber={surahNumber}
              active
              markedKeys={markedMistakeKeys}
              onWordClick={onMistakeWordClick}
            />
          )}
          {loaded && calibrateMode && <MushafWordBoxCalibratorOverlay />}
        </div>
      )}

      {showCaption && (
        <figcaption className="mushaf-img-caption">{toArabicNum(page)}</figcaption>
      )}
    </figure>
  );
}

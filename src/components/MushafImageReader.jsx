import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { getSurahMushafPages } from "../data/mushafPageMap.js";
import {
  BAQARAH_GUIDE_MUSHAF_PAGES,
  hasBaqarahPageGuides,
} from "../data/baqarahPageGuides.js";
import { hasBaqarahIraabForPage } from "../data/baqarahIraab.js";
import { getOverlayLayersForMushafPage, getOverlayLayersForSpread } from "../data/mushafOverlayLayers.js";
import { useMemorizationMistakes } from "../hooks/useMemorizationMistakes.js";
import MushafOverlayToggles from "./mushaf/MushafOverlayToggles.jsx";
import MemorizationMistakePopover from "./mushaf/MemorizationMistakePopover.jsx";
import MemorizationMistakesBar from "./mushaf/MemorizationMistakesBar.jsx";
import { prefetchHotspots } from "../utils/mushafPageHotspots.js";
import { toArabicNum } from "../utils/mushafText.js";
import AyahExplanationPanel from "./AyahExplanationPanel.jsx";
import BaqarahPageGuide from "./BaqarahPageGuide.jsx";
import BaqarahStudyTimeline from "./BaqarahStudyTimeline.jsx";
import MushafPageViewer from "./mushaf/MushafPageViewer.jsx";
import MushafWordBoxCalibratorPanel from "./mushaf/MushafWordBoxCalibratorPanel.jsx";
import PageVisualMemoryPanel from "./mushaf/PageVisualMemoryPanel.jsx";
import { MushafWordBoxCalibratorProvider, useMushafWordBoxCalibrator } from "./mushaf/MushafWordBoxCalibratorContext.jsx";
import { computePageMemoryBlanks } from "../utils/pageVisualMemory.js";
import {
  buildSpreads,
  formatAyahScopeLabel,
  formatSpreadPagesLabel,
  resolveAyahNumbersForPages,
} from "../utils/mushafSpreadQuiz.js";
import { getMushafWordBoxes } from "../utils/mushafWordBoxes.js";
import "../styles/mushaf.css";

const MOBILE_MUSHAF_MQ = "(max-width: 1024px)";

function useMobileMushafSinglePage() {
  const [singlePage, setSinglePage] = useState(
    () => typeof window !== "undefined" && window.matchMedia(MOBILE_MUSHAF_MQ).matches,
  );

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_MUSHAF_MQ);
    const onChange = (event) => setSinglePage(event.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return singlePage;
}

function findViewIndex(viewUnits, mushafPage) {
  const index = viewUnits.findIndex((unit) => unit.includes(mushafPage));
  return index >= 0 ? index : 0;
}

function guidePageForSpread(spread, direction = "forward") {
  const matches = spread.filter((page) => BAQARAH_GUIDE_MUSHAF_PAGES.includes(page));
  if (!matches.length) return spread[0] ?? null;
  return direction === "back" ? matches[matches.length - 1] : matches[0];
}

function PageMemoryHiddenCountSync({
  currentSpread,
  surahNumber,
  pageMemoryMode,
  pageMemorySeed,
  onCount,
}) {
  const calibrator = useMushafWordBoxCalibrator();

  useEffect(() => {
    if (pageMemoryMode === "full") {
      onCount(0);
      return undefined;
    }

    let cancelled = false;

    Promise.all(
      currentSpread.map((page) => {
        if (
          calibrator?.active &&
          calibrator.page === page &&
          calibrator.surahNumber === surahNumber &&
          calibrator.words?.length
        ) {
          return Promise.resolve({ page, words: calibrator.words });
        }
        return getMushafWordBoxes(page, surahNumber);
      }),
    ).then((results) => {
      if (cancelled) return;
      let total = 0;
      for (const { words, page } of results) {
        const { hiddenWordKeys } = computePageMemoryBlanks(
          words,
          page,
          pageMemoryMode,
          pageMemorySeed,
        );
        total += hiddenWordKeys.size;
      }
      onCount(total);
    });

    return () => {
      cancelled = true;
    };
  }, [
    currentSpread,
    surahNumber,
    pageMemoryMode,
    pageMemorySeed,
    onCount,
    calibrator?.active,
    calibrator?.page,
    calibrator?.surahNumber,
    calibrator?.words,
    calibrator?.calibrationRevision,
  ]);

  return null;
}

export default function MushafImageReader({
  surah,
  ayahs = [],
  compact = false,
  guidePage = null,
  onGuidePageChange = null,
  onSpreadChange = null,
  markMistakeMode: markMistakeModeProp = null,
  onMarkMistakeModeChange = null,
  showMemorizationMistakes: showMemorizationMistakesProp = null,
  onShowMemorizationMistakesChange = null,
  /** Printed page to open on when this sūrah mounts (e.g. after flipping in from a neighbour). */
  initialPage = null,
  /** Āyah to pre-select on open. */
  initialAyah = null,
  /** (direction: "forward" | "back", fromPage) => target or null — lets page flips continue into the next/previous sūrah. */
  getNeighbourPage = null,
  /** (direction, fromPage) => void — switch to the neighbour returned above. */
  onFlipToNeighbour = null,
  /** (surahNumber, ayah, page) => void — an āyah of another sūrah on a shared page was tapped. */
  onOtherSurahAyahSelect = null,
}) {
  const pages = useMemo(
    () => getSurahMushafPages(surah.revelationOrder),
    [surah.revelationOrder],
  );
  const spreads = useMemo(() => buildSpreads(pages), [pages]);
  const mobileSinglePage = useMobileMushafSinglePage();
  const viewUnits = useMemo(
    () => (mobileSinglePage ? pages.map((page) => [page]) : spreads),
    [mobileSinglePage, pages, spreads],
  );
  const ayahsByN = useMemo(() => new Map(ayahs.map((a) => [a.n, a])), [ayahs]);

  const [viewIndex, setViewIndex] = useState(() => {
    if (initialPage == null) return 0;
    return findViewIndex(viewUnits, initialPage);
  });
  const viewIndexRef = useRef(viewIndex);
  useEffect(() => {
    viewIndexRef.current = viewIndex;
  }, [viewIndex]);
  /** Last view index whose selection reset has run (skips the mount pass). */
  const appliedIndexRef = useRef(viewIndex);
  const pendingSelectRef = useRef(initialAyah);
  const swipeRef = useRef(null);
  const visibleMushafPageRef = useRef(null);
  const [selectedAyahN, setSelectedAyahN] = useState(null);
  const [highlightActive, setHighlightActive] = useState(false);
  const [activeLayerIds, setActiveLayerIds] = useState([]);
  const [showIraab, setShowIraab] = useState(false);
  const [calibrateMode, setCalibrateMode] = useState(false);
  const [pageMemoryMode, setPageMemoryMode] = useState("full");
  const [pageMemorySeed, setPageMemorySeed] = useState(1);
  const [pageMemoryRevealed, setPageMemoryRevealed] = useState(() => new Set());
  const [pageMemoryShowAll, setPageMemoryShowAll] = useState(false);
  const [pageMemoryHiddenCount, setPageMemoryHiddenCount] = useState(0);
  const [markMistakeModeInternal, setMarkMistakeModeInternal] = useState(false);
  const [showMemorizationMistakesInternal, setShowMemorizationMistakesInternal] = useState(false);
  const [mistakePopover, setMistakePopover] = useState(null);
  const mushafRef = useRef(null);
  const pendingGuidePageRef = useRef(null);

  const markMistakeMode = markMistakeModeProp ?? markMistakeModeInternal;
  const setMarkMistakeMode = onMarkMistakeModeChange ?? setMarkMistakeModeInternal;
  const showMemorizationMistakes =
    showMemorizationMistakesProp ?? showMemorizationMistakesInternal;
  const setShowMemorizationMistakes =
    onShowMemorizationMistakesChange ?? setShowMemorizationMistakesInternal;

  const {
    surahMistakes,
    getMistakesForPage,
    getMistake,
    markMistake,
    unmarkMistake,
  } = useMemorizationMistakes(surah.revelationOrder);

  const currentSpread = viewUnits[viewIndex] ?? viewUnits[0] ?? [];

  useEffect(() => {
    const page = currentSpread[0];
    if (page != null) visibleMushafPageRef.current = page;
  }, [currentSpread]);

  useEffect(() => {
    const page = visibleMushafPageRef.current;
    if (page == null) return;
    const nextIndex = findViewIndex(viewUnits, page);
    setViewIndex((current) => (current === nextIndex ? current : nextIndex));
  }, [viewUnits]);
  const showPageGuide = hasBaqarahPageGuides(surah.id);
  const derivedGuidePage = guidePageForSpread(currentSpread) ?? currentSpread[0] ?? null;
  const activeGuidePage = guidePage ?? derivedGuidePage;
  const canShowIraab =
    showPageGuide &&
    activeGuidePage != null &&
    hasBaqarahIraabForPage(activeGuidePage);

  const spreadOverlayLayers = useMemo(() => {
    if (activeGuidePage != null) {
      return getOverlayLayersForMushafPage(activeGuidePage).map((layer) => ({
        ...layer,
        pages: [activeGuidePage],
      }));
    }
    return getOverlayLayersForSpread(currentSpread);
  }, [activeGuidePage, currentSpread]);

  const spreadMistakes = useMemo(
    () =>
      currentSpread
        .flatMap((page) => getMistakesForPage(page))
        .sort((a, b) => a.ayah - b.ayah || a.wordNum - b.wordNum),
    [currentSpread, getMistakesForPage],
  );

  const markedMistakeKeys = useMemo(
    () => new Set(spreadMistakes.map((entry) => `${entry.ayah}:${entry.wordNum}`)),
    [spreadMistakes],
  );

  const showMistakeHighlights = showMemorizationMistakes || markMistakeMode;

  const goToViewIndex = useCallback(
    (index, { scroll = false } = {}) => {
      setViewIndex(index);
      setSelectedAyahN(null);
      setHighlightActive(false);
      setShowIraab(false);
      if (scroll) {
        mushafRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    },
    [],
  );

  const goToMushafPage = useCallback(
    (mushafPage, { scroll = false } = {}) => {
      const index = findViewIndex(viewUnits, mushafPage);
      goToViewIndex(index, { scroll });
    },
    [viewUnits, goToViewIndex],
  );

  const syncGuideForSpread = useCallback(
    (spread, direction = "forward") => {
      if (!showPageGuide || compact || !onGuidePageChange) return;
      const nextGuidePage = guidePageForSpread(spread, direction);
      if (nextGuidePage != null) {
        onGuidePageChange(nextGuidePage);
      }
    },
    [showPageGuide, compact, onGuidePageChange],
  );

  // Side effects stay outside the state updater (updaters may run twice and must be pure).
  const goForward = useCallback(() => {
    const index = viewIndexRef.current;
    if (index < viewUnits.length - 1) {
      const next = index + 1;
      viewIndexRef.current = next;
      setViewIndex(next);
      syncGuideForSpread(viewUnits[next], "forward");
      return;
    }
    const unit = viewUnits[index] ?? [];
    const lastPage = unit[unit.length - 1];
    if (lastPage != null && getNeighbourPage?.("forward", lastPage)) {
      onFlipToNeighbour?.("forward", lastPage);
    }
  }, [viewUnits, syncGuideForSpread, getNeighbourPage, onFlipToNeighbour]);

  const goBack = useCallback(() => {
    const index = viewIndexRef.current;
    if (index > 0) {
      const next = index - 1;
      viewIndexRef.current = next;
      setViewIndex(next);
      syncGuideForSpread(viewUnits[next], "back");
      return;
    }
    const firstPage = (viewUnits[index] ?? [])[0];
    if (firstPage != null && getNeighbourPage?.("back", firstPage)) {
      onFlipToNeighbour?.("back", firstPage);
    }
  }, [viewUnits, syncGuideForSpread, getNeighbourPage, onFlipToNeighbour]);

  // Swipe to turn pages (iPad / phone). Arabic muṣḥaf: drag right → next page.
  function onSpreadTouchStart(event) {
    if (event.touches.length !== 1) {
      swipeRef.current = null;
      return;
    }
    const t = event.touches[0];
    swipeRef.current = { x: t.clientX, y: t.clientY, time: Date.now() };
  }

  function onSpreadTouchEnd(event) {
    const start = swipeRef.current;
    swipeRef.current = null;
    if (!start || calibrateMode || markMistakeMode) return;
    const t = event.changedTouches[0];
    const dx = t.clientX - start.x;
    const dy = t.clientY - start.y;
    if (Date.now() - start.time > 800) return;
    if (Math.abs(dx) < 60 || Math.abs(dx) < Math.abs(dy) * 1.5) return;
    if (dx > 0) goForward();
    else goBack();
  }

  function selectAyah(ayahN) {
    setSelectedAyahN(ayahN);
    setHighlightActive(true);
  }

  useEffect(() => {
    const next = viewUnits[viewIndex + 1] ?? [];
    const prev = viewUnits[viewIndex - 1] ?? [];
    for (const page of [...currentSpread, ...next, ...prev]) {
      prefetchHotspots(page);
    }
  }, [viewUnits, viewIndex, currentSpread]);

  useEffect(() => {
    const startPage = initialPage;
    const startIndex =
      startPage != null && pages.includes(startPage) ? findViewIndex(viewUnits, startPage) : 0;
    const startAyah = initialAyah ?? null;
    visibleMushafPageRef.current = (viewUnits[startIndex] ?? [])[0] ?? pages[0] ?? null;
    pendingGuidePageRef.current = null;
    if (startIndex === viewIndexRef.current) {
      pendingSelectRef.current = null;
      setViewIndex(startIndex); // overrides any re-sync queued by the viewUnits effect
      setSelectedAyahN(startAyah);
      setHighlightActive(startAyah != null);
    } else {
      pendingSelectRef.current = startAyah;
      viewIndexRef.current = startIndex;
      setViewIndex(startIndex);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- only on sūrah change
  }, [surah.id, pages]);

  useEffect(() => {
    if (appliedIndexRef.current === viewIndex) return;
    appliedIndexRef.current = viewIndex;
    const pending = pendingSelectRef.current;
    pendingSelectRef.current = null;
    setSelectedAyahN(pending);
    setHighlightActive(pending != null);
    setActiveLayerIds([]);
    setPageMemoryRevealed(new Set());
    setPageMemoryShowAll(false);
  }, [viewIndex]);

  useEffect(() => {
    setPageMemoryRevealed(new Set());
    setPageMemoryShowAll(false);
  }, [pageMemoryMode, pageMemorySeed]);

  useEffect(() => {
    setActiveLayerIds([]);
  }, [activeGuidePage]);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "ArrowLeft") goForward();
      if (event.key === "ArrowRight") goBack();
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [goForward, goBack]);

  useEffect(() => {
    if (!showPageGuide || compact || !onGuidePageChange || guidePage != null) return;
    const initial = guidePageForSpread(currentSpread);
    if (initial != null) {
      onGuidePageChange(initial);
    }
  }, [showPageGuide, compact, guidePage, currentSpread, onGuidePageChange]);

  useEffect(() => {
    if (!showPageGuide || compact || guidePage == null) return;

    if (currentSpread.includes(guidePage)) {
      pendingGuidePageRef.current = null;
      return;
    }

    if (pendingGuidePageRef.current === guidePage) return;
    pendingGuidePageRef.current = guidePage;
    goToMushafPage(guidePage, { scroll: true });
  }, [guidePage, showPageGuide, compact, currentSpread, goToMushafPage]);

  useEffect(() => {
    if (!onSpreadChange || compact) return undefined;

    let cancelled = false;
    resolveAyahNumbersForPages(currentSpread, surah.revelationOrder).then((ayahNumbers) => {
      if (cancelled) return;
      onSpreadChange({
        pages: currentSpread,
        ayahNumbers,
        pagesLabel: formatSpreadPagesLabel(currentSpread),
        ayahLabel: formatAyahScopeLabel(ayahNumbers),
      });
    });

    return () => {
      cancelled = true;
    };
  }, [currentSpread, surah.revelationOrder, onSpreadChange, compact]);

  if (!pages.length) {
    return (
      <div className="mushaf-reader mushaf-reader--empty">
        <p>Mushaf pages are not mapped for this surah yet.</p>
      </div>
    );
  }

  const isDouble = !mobileSinglePage && currentSpread.length === 2;
  const firstVisiblePage = currentSpread[0];
  const lastVisiblePage = currentSpread[currentSpread.length - 1];
  const canGoForward =
    viewIndex < viewUnits.length - 1 ||
    (lastVisiblePage != null && Boolean(getNeighbourPage?.("forward", lastVisiblePage)));
  const canGoBack =
    viewIndex > 0 ||
    (firstVisiblePage != null && Boolean(getNeighbourPage?.("back", firstVisiblePage)));
  const selectedAyah = selectedAyahN != null ? ayahsByN.get(selectedAyahN) ?? null : null;

  function toggleLayer(layerId) {
    setActiveLayerIds((current) =>
      current.includes(layerId)
        ? current.filter((id) => id !== layerId)
        : [...current, layerId],
    );
  }

  function revealPageMemoryKey(key) {
    setPageMemoryRevealed((current) => new Set([...current, key]));
  }

  function shufflePageMemory() {
    setPageMemorySeed((seed) => seed + 1);
  }

  function togglePageMemoryRevealAll() {
    setPageMemoryShowAll((showAll) => !showAll);
  }

  const handleMistakeWordClick = useCallback((word, page) => {
    setMistakePopover({ word, page });
  }, []);

  function closeMistakePopover() {
    setMistakePopover(null);
  }

  function saveMistakeNote(note) {
    if (!mistakePopover) return;
    const { word, page } = mistakePopover;
    markMistake({
      mushafPage: page,
      ayah: word.ayah,
      wordNum: word.wordNum,
      wordAr: word.wordAr,
      note,
    });
    setShowMemorizationMistakes(true);
    closeMistakePopover();
  }

  function removeMistakeMark() {
    if (!mistakePopover) return;
    unmarkMistake(mistakePopover.word.ayah, mistakePopover.word.wordNum);
    closeMistakePopover();
  }

  return (
    <MushafWordBoxCalibratorProvider
      page={activeGuidePage ?? currentSpread[0] ?? pages[0]}
      surahNumber={surah.revelationOrder}
      active={calibrateMode && activeGuidePage != null}
      onDone={() => setCalibrateMode(false)}
    >
      <PageMemoryHiddenCountSync
        currentSpread={currentSpread}
        surahNumber={surah.revelationOrder}
        pageMemoryMode={pageMemoryMode}
        pageMemorySeed={pageMemorySeed}
        onCount={setPageMemoryHiddenCount}
      />
      <div className={`mushaf-lesson-reader${compact ? " mushaf-lesson-reader--compact" : ""}`}>
      <div
        ref={mushafRef}
        className={`mushaf-reader mushaf-reader--images${compact ? " mushaf-reader--compact" : ""}${mobileSinglePage ? " mushaf-reader--mobile-single" : ""}`}
        role="region"
        aria-label={`Mushaf: ${surah.name}`}
      >
        <div className="mushaf-reader__toolbar">
          <span className="mushaf-reader__surah">{surah.nameAr}</span>
          <span className="mushaf-reader__meta">
            {surah.name}
            {pages.length === 1
              ? ` · صفحة ${toArabicNum(pages[0])}`
              : ` · صفحات ${toArabicNum(pages[0])}–${toArabicNum(pages[pages.length - 1])}`}
          </span>
        </div>

        {showPageGuide && !compact && activeGuidePage != null && activeGuidePage <= 11 && (
          <BaqarahStudyTimeline
            embedded
            throughPage={11}
            activeMushafPage={activeGuidePage}
            onPageSelect={onGuidePageChange}
          />
        )}

        {showPageGuide && !compact && spreadOverlayLayers.length > 0 && !calibrateMode && (
          <MushafOverlayToggles
            layers={spreadOverlayLayers}
            activeLayerIds={activeLayerIds}
            onToggle={toggleLayer}
          />
        )}

        {!compact && !calibrateMode && (
          <MemorizationMistakesBar
            markMode={markMistakeMode}
            onMarkModeChange={setMarkMistakeMode}
            showMistakes={showMemorizationMistakes}
            onShowMistakesChange={setShowMemorizationMistakes}
            spreadMistakes={spreadMistakes}
            totalCount={surahMistakes.length}
          />
        )}

        {canShowIraab && !compact && !calibrateMode && (
          <div className="mushaf-iraab-bar">
            <button
              type="button"
              className={`mushaf-iraab-bar__toggle${showIraab ? " is-active" : ""}`}
              aria-pressed={showIraab}
              onClick={() => setShowIraab((on) => !on)}
            >
              <span className="mushaf-iraab-bar__icon" aria-hidden="true">إعراب</span>
              <span>Iʿrāb on mushaf</span>
            </button>
            {showIraab && (
              <p className="mushaf-iraab-bar__hint">
                Boxes above each word show role + case · coloured lines group phrases · tap a box for detail
              </p>
            )}
          </div>
        )}

        {!compact && (
          <PageVisualMemoryPanel
            modeId={pageMemoryMode}
            onModeChange={setPageMemoryMode}
            onShuffle={shufflePageMemory}
            showAllRevealed={pageMemoryShowAll}
            onToggleRevealAll={togglePageMemoryRevealAll}
            revealedCount={pageMemoryRevealed.size}
            hiddenCount={pageMemoryHiddenCount}
          />
        )}

        {showPageGuide && !compact && activeGuidePage != null && (
          <div className="mushaf-reader__calibrate-bar">
            {calibrateMode ? (
              <MushafWordBoxCalibratorPanel />
            ) : (
              <button
                type="button"
                className="mushaf-reader__calibrate-toggle"
                onClick={() => setCalibrateMode(true)}
              >
                Calibrate word boxes
              </button>
            )}
          </div>
        )}

        <div className="mushaf-reader__controls">
          <button
            type="button"
            className="mushaf-reader__nav mushaf-reader__nav--forward"
            onClick={goForward}
            disabled={!canGoForward}
            aria-label="Next page"
          >
            ←
          </button>

          <div
            className={`mushaf-reader__spread${isDouble ? " is-double" : " is-single"}`}
            onTouchStart={onSpreadTouchStart}
            onTouchEnd={onSpreadTouchEnd}
          >
            {currentSpread.map((page) => (
              <MushafPageViewer
                key={page}
                page={page}
                surahNumber={surah.revelationOrder}
                selectedAyah={selectedAyahN}
                showHighlight={highlightActive}
                compact={compact}
                activeLayerIds={
                  activeGuidePage != null && page === activeGuidePage && !calibrateMode
                    ? activeLayerIds
                    : []
                }
                showIraab={
                  showIraab &&
                  activeGuidePage != null &&
                  page === activeGuidePage &&
                  hasBaqarahIraabForPage(page) &&
                  !calibrateMode
                }
                calibrateMode={
                  calibrateMode && activeGuidePage != null && page === activeGuidePage
                }
                pageMemoryMode={pageMemoryMode}
                pageMemorySeed={pageMemorySeed}
                pageMemoryRevealedKeys={pageMemoryRevealed}
                pageMemoryShowAll={pageMemoryShowAll}
                onPageMemoryReveal={revealPageMemoryKey}
                onAyahSelect={selectAyah}
                onOtherSurahAyahSelect={onOtherSurahAyahSelect}
                showMemorizationMistakes={showMistakeHighlights}
                markMistakeMode={markMistakeMode}
                memorizationMistakes={getMistakesForPage(page)}
                markedMistakeKeys={markedMistakeKeys}
                onMistakeWordClick={(word) => handleMistakeWordClick(word, page)}
              />
            ))}
          </div>

          <button
            type="button"
            className="mushaf-reader__nav mushaf-reader__nav--back"
            onClick={goBack}
            disabled={!canGoBack}
            aria-label="Previous page"
          >
            →
          </button>
        </div>

        <div className="mushaf-reader__footer">
          <span>صفحة {currentSpread.map((p) => toArabicNum(p)).join(" – ")}</span>
          {viewUnits.length > 1 && (
            <span>
              {toArabicNum(viewIndex + 1)} / {toArabicNum(viewUnits.length)}
            </span>
          )}
        </div>
      </div>

      <AyahExplanationPanel
        ayah={selectedAyah}
        surahNumber={surah.revelationOrder}
        pages={currentSpread}
      />

      {showPageGuide && !compact && (
        <BaqarahPageGuide activeMushafPage={activeGuidePage} />
      )}
      </div>

      {mistakePopover && (
        <MemorizationMistakePopover
          word={mistakePopover.word}
          existingNote={
            getMistake(mistakePopover.word.ayah, mistakePopover.word.wordNum)?.note ?? ""
          }
          onSave={saveMistakeNote}
          onRemove={
            getMistake(mistakePopover.word.ayah, mistakePopover.word.wordNum)
              ? removeMistakeMark
              : null
          }
          onClose={closeMistakePopover}
        />
      )}
    </MushafWordBoxCalibratorProvider>
  );
}

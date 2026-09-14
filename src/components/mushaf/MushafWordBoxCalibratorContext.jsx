import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  clearMushafWordBoxesCache,
  getAutoMushafWordBoxes,
  getMushafWordBoxes,
  MUSHAF_REF_WIDTH,
} from "../../utils/mushafWordBoxes.js";
import {
  clearPageCalibration,
  countCalibratedWords,
  exportCalibrationsJson,
  getPageCalibration,
  savePageCalibration,
} from "../../utils/mushafWordBoxCalibration.js";
import { extrapolateWordBoxes } from "../../utils/mushafWordBoxExtrapolate.js";

const MushafWordBoxCalibratorContext = createContext(null);

function sortWordsReadingOrder(words) {
  return [...words].sort((a, b) => {
    const lineA = a.lineNumber ?? Math.round(a.bbox.y / 20);
    const lineB = b.lineNumber ?? Math.round(b.bbox.y / 20);
    if (lineA !== lineB) return lineA - lineB;
    return b.bbox.x - a.bbox.x;
  });
}

function clampHorizontalBox(bbox) {
  const minW = 8;
  const w = Math.max(minW, Math.min(bbox.w, MUSHAF_REF_WIDTH));
  const x = Math.max(0, Math.min(bbox.x, MUSHAF_REF_WIDTH - w));
  return { ...bbox, x, w };
}

export function MushafWordBoxCalibratorProvider({
  page,
  surahNumber,
  active,
  onDone,
  children,
}) {
  const frameRef = useRef(null);
  const dragRef = useRef(null);
  const [words, setWords] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [dirty, setDirty] = useState(false);
  const [savedCount, setSavedCount] = useState(0);
  const [status, setStatus] = useState("");
  const [calibrationRevision, setCalibrationRevision] = useState(0);

  useEffect(() => {
    if (!active) return undefined;

    let cancelled = false;

    getMushafWordBoxes(page, surahNumber).then(({ words: pageWords }) => {
      if (cancelled) return;
      setWords(pageWords);
      setSelectedLocation(pageWords[0]?.location ?? null);
      setSavedCount(countCalibratedWords(page, surahNumber));
      setDirty(false);
      setStatus("");
    });

    return () => {
      cancelled = true;
    };
  }, [active, page, surahNumber]);

  const sortedWords = useMemo(() => sortWordsReadingOrder(words), [words]);
  const selectedWord = useMemo(
    () => words.find((word) => word.location === selectedLocation) ?? null,
    [words, selectedLocation],
  );

  const updateWordHorizontal = useCallback((location, patch) => {
    setWords((current) =>
      current.map((word) =>
        word.location === location
          ? {
              ...word,
              bbox: clampHorizontalBox({ ...word.bbox, ...patch }),
              coordSource: "calibrated",
            }
          : word,
      ),
    );
    setDirty(true);
    setStatus("");
  }, []);

  const refDeltaXFromPointer = useCallback((clientX) => {
    const frame = frameRef.current;
    if (!frame || !dragRef.current) return 0;

    const rect = frame.getBoundingClientRect();
    return ((clientX - dragRef.current.startX) / rect.width) * MUSHAF_REF_WIDTH;
  }, []);

  useEffect(() => {
    if (!active) return undefined;

    function onPointerMove(event) {
      const drag = dragRef.current;
      if (!drag) return;

      const dx = refDeltaXFromPointer(event.clientX);
      const { origin, mode, location } = drag;

      if (mode === "move") {
        updateWordHorizontal(location, { x: origin.x + dx, w: origin.w });
      } else if (mode === "resize-right") {
        updateWordHorizontal(location, { x: origin.x, w: origin.w + dx });
      } else if (mode === "resize-left") {
        const right = origin.x + origin.w;
        const nextW = right - (origin.x + dx);
        if (nextW >= 8) {
          updateWordHorizontal(location, { x: origin.x + dx, w: nextW });
        } else {
          updateWordHorizontal(location, { x: right - 8, w: 8 });
        }
      }
    }

    function onPointerUp() {
      dragRef.current = null;
    }

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, [active, refDeltaXFromPointer, updateWordHorizontal]);

  useEffect(() => {
    if (!active) return undefined;

    function onKeyDown(event) {
      if (!selectedWord) return;

      const step = event.shiftKey ? 5 : 1;
      const { x, w } = selectedWord.bbox;

      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        event.preventDefault();
        const delta = event.key === "ArrowLeft" ? -step : step;
        updateWordHorizontal(selectedWord.location, { x: x + delta, w });
        return;
      }

      if (event.key === "[" || event.key === "]") {
        event.preventDefault();
        const delta = event.key === "[" ? -step : step;
        updateWordHorizontal(selectedWord.location, { x, w: w + delta });
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active, selectedWord, updateWordHorizontal]);

  const startDrag = useCallback(
    (event, location, mode = "move") => {
      event.preventDefault();
      event.stopPropagation();

      const word = words.find((entry) => entry.location === location);
      if (!word) return;

      setSelectedLocation(location);
      dragRef.current = {
        mode,
        location,
        origin: { ...word.bbox },
        startX: event.clientX,
      };
    },
    [words],
  );

  const savePage = useCallback(() => {
    const boxesByLocation = Object.fromEntries(
      words.map((word) => [word.location, { x: word.bbox.x, w: word.bbox.w }]),
    );
    savePageCalibration(page, surahNumber, boxesByLocation);
    clearMushafWordBoxesCache(page, surahNumber);
    setDirty(false);
    setSavedCount(Object.keys(boxesByLocation).length);
    setCalibrationRevision((revision) => revision + 1);
    setStatus(`Saved ${words.length} word boxes for page ${page}.`);
  }, [page, surahNumber, words]);

  const resetPage = useCallback(() => {
    if (!window.confirm(`Reset saved boxes for page ${page}? Auto placement will be used again.`)) {
      return;
    }

    clearPageCalibration(page, surahNumber);
    clearMushafWordBoxesCache(page, surahNumber);
    setDirty(false);
    setSavedCount(0);
    setCalibrationRevision((revision) => revision + 1);
    setStatus("Reset to auto placement.");

    getMushafWordBoxes(page, surahNumber).then(({ words: pageWords }) => {
      setWords(pageWords);
    });
  }, [page, surahNumber]);

  const exportAll = useCallback(async () => {
    const json = exportCalibrationsJson();
    try {
      await navigator.clipboard.writeText(json);
      setStatus("Copied all calibrations to clipboard — paste into mushafWordBoxCalibrations.js.");
    } catch {
      setStatus("Export printed to browser console.");
      console.log(json);
    }
  }, []);

  const applyPatternToRest = useCallback(async () => {
    const { words: autoWords } = await getAutoMushafWordBoxes(page, surahNumber);
    const saved = getPageCalibration(page, surahNumber);

    const reference = {};
    for (const word of words) {
      if (word.ayah < 6 || word.ayah > 12) continue;
      const savedBox = saved[word.location];
      if (savedBox || word.coordSource === "calibrated") {
        reference[word.location] = savedBox ?? { x: word.bbox.x, w: word.bbox.w };
      }
    }

    if (Object.keys(reference).length < 10) {
      setStatus("Calibrate ayahs 6–12 first, then click this again.");
      return;
    }

    const extrapolated = extrapolateWordBoxes(autoWords, reference, {
      sourceAyahMin: 6,
      sourceAyahMax: 12,
      targetAyahMin: 13,
      targetAyahMax: 16,
    });

    if (!Object.keys(extrapolated).length) {
      setStatus("Could not apply pattern — check ayah 6–12 calibrations.");
      return;
    }

    setWords((current) =>
      current.map((word) => {
        const next = extrapolated[word.location];
        if (!next) return word;
        return {
          ...word,
          bbox: clampHorizontalBox({ ...word.bbox, ...next }),
          coordSource: "calibrated",
        };
      }),
    );
    setDirty(true);
    setStatus(
      `Applied your ayah 6–12 pattern to ${Object.keys(extrapolated).length} words (ayahs 13–16). Review, then Save page.`,
    );
  }, [page, surahNumber, words]);

  const value = useMemo(
    () => ({
      active,
      page,
      surahNumber,
      words,
      sortedWords,
      selectedLocation,
      selectedWord,
      dirty,
      savedCount,
      status,
      calibrationRevision,
      frameRef,
      setSelectedLocation,
      startDrag,
      savePage,
      resetPage,
      exportAll,
      applyPatternToRest,
      onDone,
    }),
    [
      active,
      page,
      surahNumber,
      words,
      sortedWords,
      selectedLocation,
      selectedWord,
      dirty,
      savedCount,
      status,
      calibrationRevision,
      startDrag,
      savePage,
      resetPage,
      exportAll,
      applyPatternToRest,
      onDone,
    ],
  );

  return (
    <MushafWordBoxCalibratorContext.Provider value={value}>
      {children}
    </MushafWordBoxCalibratorContext.Provider>
  );
}

export function useMushafWordBoxCalibrator() {
  return useContext(MushafWordBoxCalibratorContext);
}

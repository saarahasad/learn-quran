import { useEffect, useState } from "react";
import { useMushafWordBoxCalibrator } from "../components/mushaf/MushafWordBoxCalibratorContext.jsx";
import {
  getMushafWordBoxes,
  prefetchMushafWordBoxes,
} from "../utils/mushafWordBoxes.js";

/**
 * Word boxes for a mushaf page — uses live calibrator positions when that page
 * is being edited, otherwise loads saved calibrations from storage.
 */
export function useMushafPageWords(page, surahNumber, enabled = true) {
  const calibrator = useMushafWordBoxCalibrator();
  const [words, setWords] = useState([]);

  const liveMatch =
    enabled &&
    calibrator?.active &&
    calibrator.page === page &&
    calibrator.surahNumber === surahNumber &&
    calibrator.words?.length;

  useEffect(() => {
    if (!enabled) return undefined;

    prefetchMushafWordBoxes(page, surahNumber);
    let cancelled = false;

    getMushafWordBoxes(page, surahNumber).then(({ words: pageWords }) => {
      if (!cancelled) setWords(pageWords);
    });

    return () => {
      cancelled = true;
    };
  }, [page, surahNumber, enabled, calibrator?.calibrationRevision]);

  if (liveMatch) {
    return calibrator.words;
  }

  return words;
}

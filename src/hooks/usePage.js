import { useEffect, useState } from "react";
import { loadPageWords, prefetchPage } from "../utils/mushafPageData.js";
import { prefetchHotspots } from "../utils/mushafPageHotspots.js";

/**
 * Fetch QuranDC word metadata + coordinate overlays for one mushaf page.
 * @param {number} pageNumber Printed page (1–604)
 * @param {number|null} surahNumber Filter to one surah (revelation order)
 */
export function usePage(pageNumber, surahNumber = null) {
  const [state, setState] = useState({
    loading: true,
    words: [],
    error: null,
  });

  useEffect(() => {
    let cancelled = false;

    setState((prev) => ({ ...prev, loading: true, error: null }));

    loadPageWords(pageNumber, surahNumber).then((result) => {
      if (cancelled) return;
      setState({
        loading: false,
        words: result.words,
        error: result.error,
      });
    });

    return () => {
      cancelled = true;
    };
  }, [pageNumber, surahNumber]);

  return state;
}

/** Warm cache for adjacent pages. */
export function usePrefetchPages(pages, surahNumber = null) {
  useEffect(() => {
    for (const page of pages) {
      prefetchPage(page, surahNumber);
      prefetchHotspots(page);
    }
  }, [pages, surahNumber]);
}

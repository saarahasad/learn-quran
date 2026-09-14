import { useCallback, useEffect, useMemo, useState } from "react";
import {
  buildMistakeMap,
  loadMemorizationMistakes,
  mistakeKey,
  removeMemorizationMistake,
  subscribeMemorizationMistakes,
  upsertMemorizationMistake,
} from "../utils/memorizationMistakes.js";

export function useMemorizationMistakes(surahNumber) {
  const [mistakes, setMistakes] = useState(loadMemorizationMistakes);

  useEffect(() => subscribeMemorizationMistakes(() => {
    setMistakes(loadMemorizationMistakes());
  }), []);

  const surahMistakes = useMemo(
    () => mistakes.filter((entry) => entry.surahNumber === surahNumber),
    [mistakes, surahNumber],
  );

  const mistakeMap = useMemo(() => buildMistakeMap(surahMistakes), [surahMistakes]);

  const getMistakesForPage = useCallback(
    (mushafPage) =>
      surahMistakes.filter((entry) => entry.mushafPage === mushafPage),
    [surahMistakes],
  );

  const isMarked = useCallback(
    (ayah, wordNum) => mistakeMap.has(mistakeKey(surahNumber, ayah, wordNum)),
    [mistakeMap, surahNumber],
  );

  const getMistake = useCallback(
    (ayah, wordNum) => mistakeMap.get(mistakeKey(surahNumber, ayah, wordNum)) ?? null,
    [mistakeMap, surahNumber],
  );

  const markMistake = useCallback(
    ({ mushafPage, ayah, wordNum, wordAr, note = "" }) =>
      upsertMemorizationMistake({
        surahNumber,
        mushafPage,
        ayah,
        wordNum,
        wordAr,
        note,
      }),
    [surahNumber],
  );

  const unmarkMistake = useCallback((ayah, wordNum) => {
    removeMemorizationMistake(mistakeKey(surahNumber, ayah, wordNum));
  }, [surahNumber]);

  return {
    surahMistakes,
    mistakeMap,
    getMistakesForPage,
    isMarked,
    getMistake,
    markMistake,
    unmarkMistake,
  };
}

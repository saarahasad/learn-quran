import { useCallback, useEffect, useMemo, useState } from "react";
import {
  applyAnswer,
  chapterMastery,
  nominativesSectionStats,
  pickNextQuestion,
  questionRecord,
  readNominativesMastery,
  writeNominativesMastery,
} from "../utils/nominativesMasteryStore.js";
import { MASTERY_NEEDED } from "../data/nominativesMastery.js";

export function useNominativesMastery() {
  const [state, setState] = useState(() => readNominativesMastery());

  useEffect(() => {
    writeNominativesMastery(state);
  }, [state]);

  const recordAnswer = useCallback((questionId, correct) => {
    setState((current) => applyAnswer(current, questionId, correct));
  }, []);

  const nextQuestion = useCallback(
    (filters) => pickNextQuestion(state, filters),
    [state],
  );

  const section = useMemo(() => nominativesSectionStats(state), [state]);

  const chapterStats = useCallback((chapterId) => chapterMastery(state, chapterId), [state]);

  const recordFor = useCallback((questionId) => questionRecord(state, questionId), [state]);

  return {
    state,
    recordAnswer,
    nextQuestion,
    section,
    chapterStats,
    recordFor,
    masteryNeeded: MASTERY_NEEDED,
  };
}

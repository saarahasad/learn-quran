import { useCallback, useEffect, useRef, useState } from "react";
import {
  clearPersistedSessionState,
  createInitialSessionState,
  readPersistedSessionState,
  writePersistedSessionState,
} from "../utils/hifdhSession.js";

export function useHifdhSessionState({ selectedAyat, surahNumber, mushafPage }) {
  const [state, setState] = useState(() => {
    const saved = readPersistedSessionState();
    if (
      saved &&
      saved.surahNumber === surahNumber &&
      saved.mushafPage === mushafPage &&
      arraysEqual(saved.selectedAyat, selectedAyat)
    ) {
      return saved;
    }

    return createInitialSessionState({ selectedAyat, surahNumber, mushafPage });
  });

  const stateRef = useRef(state);
  stateRef.current = state;

  const patch = useCallback((updates) => {
    setState((prev) => {
      const next =
        typeof updates === "function"
          ? updates(prev)
          : { ...prev, ...updates };
      stateRef.current = next;
      writePersistedSessionState(next);
      return next;
    });
  }, []);

  const pause = useCallback(() => {
    patch({
      pausedAt: Date.now(),
    });
  }, [patch]);

  const resume = useCallback(() => {
    patch({ pausedAt: null });
  }, [patch]);

  const reset = useCallback(() => {
    clearPersistedSessionState();
    setState(createInitialSessionState({ selectedAyat, surahNumber, mushafPage }));
  }, [selectedAyat, surahNumber, mushafPage]);

  useEffect(() => {
    writePersistedSessionState(state);
  }, [state]);

  useEffect(() => {
    if (state.pausedAt) return undefined;

    const interval = window.setInterval(() => {
      setState((prev) => {
        const next = { ...prev, timeElapsed: prev.timeElapsed + 1 };
        stateRef.current = next;
        return next;
      });
    }, 1000);

    return () => window.clearInterval(interval);
  }, [state.pausedAt]);

  return {
    state,
    patch,
    pause,
    resume,
    reset,
  };
}

function arraysEqual(a, b) {
  if (!Array.isArray(a) || !Array.isArray(b) || a.length !== b.length) return false;
  return a.every((value, index) => value === b[index]);
}

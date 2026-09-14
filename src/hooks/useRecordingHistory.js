import { useCallback, useEffect, useMemo, useState } from "react";
import {
  computeRecordingStats,
  loadRecordingHistory,
} from "../utils/recordingHistory.js";

export function useRecordingHistory() {
  const [entries, setEntries] = useState(() => loadRecordingHistory());

  const refresh = useCallback(() => {
    setEntries(loadRecordingHistory());
  }, []);

  useEffect(() => {
    const onUpdate = () => refresh();
    window.addEventListener("recording-history-updated", onUpdate);
    window.addEventListener("storage", onUpdate);
    return () => {
      window.removeEventListener("recording-history-updated", onUpdate);
      window.removeEventListener("storage", onUpdate);
    };
  }, [refresh]);

  const stats = useMemo(() => computeRecordingStats(entries), [entries]);

  return { entries, stats, refresh };
}

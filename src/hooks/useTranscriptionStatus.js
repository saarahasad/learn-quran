import { useCallback, useEffect, useState } from "react";
import { fetchTranscriptionStatus } from "../utils/recitationTranscribe.js";

export function useTranscriptionStatus(enabled = true) {
  const [status, setStatus] = useState({
    loading: true,
    available: false,
    hasKey: false,
    provider: null,
    message: "",
  });

  const refresh = useCallback(async () => {
    setStatus((prev) => ({ ...prev, loading: true }));
    const next = await fetchTranscriptionStatus();
    setStatus({
      loading: false,
      available: Boolean(next.available),
      hasKey: Boolean(next.hasKey),
      provider: next.provider || null,
      needsRestart: Boolean(next.needsRestart),
      message: next.message || "",
    });
  }, []);

  useEffect(() => {
    if (!enabled) return undefined;
    refresh();
  }, [enabled, refresh]);

  return { ...status, refresh };
}

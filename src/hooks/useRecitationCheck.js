import { useCallback, useEffect, useRef, useState } from "react";
import { alignRecitation } from "../utils/recitationAlign.js";
import {
  fetchExpectedWordsForAyahs,
  sliceExpectedAfterPrompt,
} from "../utils/recitationExpected.js";
import { transcribeRecitation } from "../utils/recitationTranscribe.js";
import { updateRecentRecordingCheck } from "../utils/recordingHistory.js";
import { analyzeTajweedRecitation } from "../utils/tajweedAnalyze.js";

export function useRecitationCheck({
  mushafPage,
  surahNumber,
  ayahNumbers,
  localAyahs = null,
  expectedWords: expectedWordsOverride = null,
  promptWordCount = 0,
  recordingBlob = null,
  liveTranscript = "",
}) {
  const [status, setStatus] = useState("idle");
  const [result, setResult] = useState(null);
  const [transcript, setTranscript] = useState("");
  const [error, setError] = useState("");
  const requestIdRef = useRef(0);

  const reset = useCallback(() => {
    requestIdRef.current += 1;
    setStatus("idle");
    setResult(null);
    setTranscript("");
    setError("");
  }, []);

  useEffect(() => {
    reset();
  }, [recordingBlob, liveTranscript, ayahNumbers.join("-"), reset]);

  const checkRecitation = useCallback(async () => {
    const hasLiveTranscript = Boolean(liveTranscript?.trim());
    if (!hasLiveTranscript && !recordingBlob?.size) {
      setError("Record yourself first, then check.");
      return;
    }

    const requestId = requestIdRef.current + 1;
    requestIdRef.current = requestId;
    setStatus("checking");
    setError("");
    setResult(null);
    setTranscript("");

    try {
      const expectedAll =
        expectedWordsOverride ??
        (await fetchExpectedWordsForAyahs(
          mushafPage,
          surahNumber,
          ayahNumbers,
          localAyahs,
        ));
      const expected = sliceExpectedAfterPrompt(expectedAll, promptWordCount);
      let text = liveTranscript?.trim() ?? "";
      let whisperWords = [];

      if (!text) {
        const transcribed = await transcribeRecitation(recordingBlob);
        text = transcribed.text;
        whisperWords = transcribed.words;
      }

      if (!text) {
        throw new Error("Could not pick up any words. Try speaking closer to the mic.");
      }

      if (requestId !== requestIdRef.current) return;

      const alignment = alignRecitation(expected, text);
      const tajweed = analyzeTajweedRecitation({
        steps: alignment.steps,
        whisperWords,
      });
      setTranscript(text);
      setResult({
        ...alignment,
        tajweed,
        expected,
        expectedAll,
        promptWordCount,
      });
      updateRecentRecordingCheck({
        surahNumber,
        ayahNumbers,
        passed: alignment.passed,
        matchPercent: expectedCount
          ? Math.round((alignment.matched / expectedCount) * 100)
          : null,
      });
      setStatus("done");
    } catch (err) {
      if (requestId !== requestIdRef.current) return;
      setError(err?.message || "Could not check recitation.");
      setStatus("error");
    }
  }, [
    recordingBlob,
    liveTranscript,
    mushafPage,
    surahNumber,
    ayahNumbers,
    localAyahs,
    expectedWordsOverride,
    promptWordCount,
  ]);

  return {
    status,
    result,
    transcript,
    error,
    checkRecitation,
    reset,
    isChecking: status === "checking",
  };
}

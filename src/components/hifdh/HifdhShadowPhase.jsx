import { useCallback, useEffect, useRef, useState } from "react";
import { SHADOW_ROUND_COUNT } from "../../utils/hifdhSession.js";
import { getMinshawiAyahUrl } from "../../utils/quranAudio.js";
import { toArabicNum } from "../../utils/mushafText.js";
import HifdhBreathingRing from "./HifdhBreathingRing.jsx";

function shadowRoundProgress(currentRound, phase, audioProgress, readingProgress) {
  const roundSlice = 1 / SHADOW_ROUND_COUNT;
  const base = currentRound * roundSlice;
  const inner = phase === "reading" ? 0.5 + readingProgress * 0.5 : audioProgress * 0.5;
  return base + inner * roundSlice;
}

export default function HifdhShadowPhase({
  ayahNumber,
  surahNumber,
  currentRound,
  paused,
  onRoundComplete,
}) {
  const audioRef = useRef(null);
  const completedRef = useRef(false);
  const readingTimerRef = useRef(null);
  const readingRemainingRef = useRef(0);
  const readingStartRef = useRef(0);
  const readingTotalMsRef = useRef(0);
  const audioDurationRef = useRef(0);
  const onRoundCompleteRef = useRef(onRoundComplete);
  onRoundCompleteRef.current = onRoundComplete;

  const [phase, setPhase] = useState("loading");
  const [audioProgress, setAudioProgress] = useState(0);
  const [readingProgress, setReadingProgress] = useState(0);

  const audioSrc = getMinshawiAyahUrl(surahNumber, ayahNumber);

  const clearReadingTimer = useCallback(() => {
    if (readingTimerRef.current != null) {
      window.clearInterval(readingTimerRef.current);
      readingTimerRef.current = null;
    }
  }, []);

  const finishRound = useCallback(() => {
    if (completedRef.current) return;
    completedRef.current = true;
    clearReadingTimer();
    readingRemainingRef.current = 0;
    onRoundCompleteRef.current?.();
  }, [clearReadingTimer]);

  const tickReadingPause = useCallback(() => {
    const totalMs = readingRemainingRef.current;
    if (!totalMs || totalMs <= 0) return;

    readingTotalMsRef.current = totalMs;
    readingStartRef.current = Date.now();
    clearReadingTimer();

    readingTimerRef.current = window.setInterval(() => {
      const elapsed = Date.now() - readingStartRef.current;
      const remainingMs = readingTotalMsRef.current - elapsed;

      if (remainingMs <= 0) {
        setReadingProgress(1);
        finishRound();
        return;
      }

      setReadingProgress(1 - remainingMs / readingTotalMsRef.current);
    }, 100);
  }, [clearReadingTimer, finishRound]);

  const beginReadingPause = useCallback(
    (durationSeconds) => {
      const duration =
        Number.isFinite(durationSeconds) && durationSeconds > 0
          ? durationSeconds
          : audioDurationRef.current || 5;

      audioDurationRef.current = duration;
      readingRemainingRef.current = duration * 1000;
      setPhase("reading");
      setAudioProgress(1);
      setReadingProgress(0);
      tickReadingPause();
    },
    [tickReadingPause],
  );

  useEffect(() => {
    completedRef.current = false;
    audioDurationRef.current = 0;
    readingRemainingRef.current = 0;
    setPhase("loading");
    setAudioProgress(0);
    setReadingProgress(0);
    clearReadingTimer();
  }, [ayahNumber, currentRound, clearReadingTimer]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return undefined;

    const onLoaded = () => {
      if (Number.isFinite(audio.duration) && audio.duration > 0) {
        audioDurationRef.current = audio.duration;
      }
    };

    const onTimeUpdate = () => {
      const duration = audio.duration || audioDurationRef.current;
      if (!duration) return;
      setAudioProgress(Math.min(1, audio.currentTime / duration));
    };

    const onEnded = () => {
      const duration = audio.duration || audioDurationRef.current;
      beginReadingPause(duration);
    };

    const onPlay = () => setPhase("shadowing");

    audio.addEventListener("loadedmetadata", onLoaded);
    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("ended", onEnded);
    audio.addEventListener("play", onPlay);

    return () => {
      audio.removeEventListener("loadedmetadata", onLoaded);
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("ended", onEnded);
      audio.removeEventListener("play", onPlay);
    };
  }, [beginReadingPause]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || paused || phase === "reading") {
      audio?.pause();
      return undefined;
    }

    audio.playbackRate = 1;
    audio.load();
    const tryPlay = () => {
      audio.playbackRate = 1;
      audio.play().catch(() => setPhase("loading"));
    };
    if (audio.readyState >= 2) tryPlay();
    else audio.addEventListener("canplay", tryPlay, { once: true });

    return () => audio.pause();
  }, [audioSrc, currentRound, ayahNumber, paused, phase]);

  useEffect(() => {
    if (phase !== "reading") return undefined;

    if (paused) {
      if (readingTimerRef.current) {
        const elapsed = Date.now() - readingStartRef.current;
        readingRemainingRef.current = Math.max(
          readingTotalMsRef.current - elapsed,
          0,
        );
        clearReadingTimer();
      }
      return undefined;
    }

    if (readingRemainingRef.current > 0 && !readingTimerRef.current) {
      tickReadingPause();
    }

    return undefined;
  }, [paused, phase, clearReadingTimer, tickReadingPause]);

  useEffect(() => clearReadingTimer, [clearReadingTimer]);

  const ringProgress = shadowRoundProgress(currentRound, phase, audioProgress, readingProgress);

  return (
    <div className="hifdh-session__panel">
      <HifdhBreathingRing
        progress={ringProgress}
        label={`${currentRound + 1}/${SHADOW_ROUND_COUNT}`}
      />

      <p className="hifdh-session__ayah-label">
        Āyah {toArabicNum(ayahNumber)} · Shadow
      </p>

      <p className="hifdh-session__round">
        Shadow {currentRound + 1} of {SHADOW_ROUND_COUNT}
      </p>
      <p className="hifdh-session__status" aria-live="polite">
        {phase === "loading" && "Loading…"}
        {phase === "shadowing" && "Follow the reciter…"}
        {phase === "reading" && "Read the āyah on the mushaf…"}
      </p>

      {phase === "reading" && (
        <button
          type="button"
          className="hifdh-session__cta hifdh-session__cta--shadow-next"
          onClick={finishRound}
        >
          {currentRound < SHADOW_ROUND_COUNT - 1
            ? "Continue to next shadow"
            : "Continue to memory"}
        </button>
      )}

      <audio ref={audioRef} src={audioSrc} preload="auto">
        <track kind="captions" />
      </audio>
    </div>
  );
}

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  LISTEN_ROUND_COUNT,
  activeWordIndexAtTime,
  buildWordTimings,
  listenProgressFraction,
} from "../../utils/hifdhSession.js";
import { fetchAyahWords, getLocalAyah } from "../../utils/hifdhAyahContent.js";
import { getMinshawiAyahUrl } from "../../utils/quranAudio.js";
import { toArabicNum } from "../../utils/mushafText.js";
import HifdhBreathingRing from "./HifdhBreathingRing.jsx";

export default function HifdhListenPhase({
  ayahNumber,
  surahNumber,
  mushafPage,
  localAyahs = null,
  currentRound,
  paused,
  onRoundComplete,
  onBetweenMessageDone,
  showBetweenMessage,
  listenBetween,
}) {
  const audioRef = useRef(null);
  const [apiWords, setApiWords] = useState([]);
  const [activeWordIndex, setActiveWordIndex] = useState(-1);
  const [playbackState, setPlaybackState] = useState("idle");
  const [timings, setTimings] = useState([]);
  const completedRoundRef = useRef(false);

  const localAyah = useMemo(
    () => getLocalAyah(surahNumber, ayahNumber, localAyahs),
    [ayahNumber, surahNumber, localAyahs],
  );

  const words = useMemo(
    () => apiWords.map((word) => ({ ar: word.ar })).filter((word) => word.ar),
    [apiWords],
  );

  const audioSrc = getMinshawiAyahUrl(surahNumber, ayahNumber);
  const betweenMessage = listenBetween?.[currentRound + 1] ?? null;

  useEffect(() => {
    let cancelled = false;

    fetchAyahWords(mushafPage, surahNumber, ayahNumber, localAyahs).then((loaded) => {
      if (!cancelled) setApiWords(loaded);
    });

    return () => {
      cancelled = true;
    };
  }, [ayahNumber, surahNumber, mushafPage, localAyahs]);

  useEffect(() => {
    completedRoundRef.current = false;
    setActiveWordIndex(-1);
    setPlaybackState("idle");
    setTimings([]);
  }, [ayahNumber, currentRound]);

  const finishRound = useCallback(() => {
    if (completedRoundRef.current) return;
    completedRoundRef.current = true;
    setActiveWordIndex(-1);
    setPlaybackState("done");
    onRoundComplete?.();
  }, [onRoundComplete]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || paused || showBetweenMessage) return undefined;

    const onLoaded = () => {
      setTimings(buildWordTimings(words, audio.duration));
    };

    const onTimeUpdate = () => {
      setTimings((prev) => {
        const nextTimings =
          prev.length > 0 ? prev : buildWordTimings(words, audio.duration || 0);
        setActiveWordIndex(activeWordIndexAtTime(nextTimings, audio.currentTime));
        return nextTimings;
      });
    };

    const onEnded = () => finishRound();
    const onPlay = () => setPlaybackState("playing");
    const onPause = () => {
      if (!audio.ended) setPlaybackState("paused");
    };

    audio.addEventListener("loadedmetadata", onLoaded);
    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("ended", onEnded);
    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);

    return () => {
      audio.removeEventListener("loadedmetadata", onLoaded);
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("ended", onEnded);
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
    };
  }, [words, paused, showBetweenMessage, finishRound]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || paused || showBetweenMessage) {
      audio?.pause();
      return undefined;
    }

    setActiveWordIndex(-1);
    setPlaybackState("loading");
    audio.load();

    const tryPlay = () => {
      audio.play().catch(() => setPlaybackState("paused"));
    };

    if (audio.readyState >= 2) tryPlay();
    else audio.addEventListener("canplay", tryPlay, { once: true });

    return () => {
      audio.pause();
    };
  }, [audioSrc, currentRound, ayahNumber, paused, showBetweenMessage]);

  const ringProgress = listenProgressFraction(
    showBetweenMessage ? currentRound : currentRound + (playbackState === "done" ? 1 : 0),
    LISTEN_ROUND_COUNT,
  );

  return (
    <div className="hifdh-session__panel">
      <HifdhBreathingRing
        progress={ringProgress}
        label={`${currentRound + 1}/${LISTEN_ROUND_COUNT}`}
      />

      <p className="hifdh-session__ayah-label">
        Āyah {toArabicNum(ayahNumber)}
      </p>

      {showBetweenMessage && betweenMessage ? (
        <div className="hifdh-teacher-whisper hifdh-teacher-whisper--dock">
          <span className="hifdh-teacher-whisper__mark" aria-hidden="true">
            ع
          </span>
          <p className="hifdh-session__hint">{betweenMessage}</p>
          <button
            type="button"
            className="hifdh-session__cta"
            onClick={onBetweenMessageDone}
          >
            Continue listening
          </button>
        </div>
      ) : (
        <>
          <p className="hifdh-session__round">
            Listen {currentRound + 1} of {LISTEN_ROUND_COUNT}
          </p>
          <p className="hifdh-session__status" aria-live="polite">
            {playbackState === "playing" && "Listening…"}
            {playbackState === "loading" && "Loading recitation…"}
            {playbackState === "paused" && "Paused"}
            {playbackState === "done" && "Round complete"}
          </p>
        </>
      )}

      <audio ref={audioRef} src={audioSrc} preload="auto">
        <track kind="captions" />
      </audio>
    </div>
  );
}

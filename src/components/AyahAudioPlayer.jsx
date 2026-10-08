import { useCallback, useEffect, useRef, useState } from "react";
import { getMinshawiAyahUrl, MINSHAWI_RECITER } from "../utils/quranAudio.js";

const DELAY_OPTIONS = [
  { value: 0, label: "None" },
  { value: 5, label: "5s" },
  { value: 10, label: "10s" },
  { value: 15, label: "15s" },
  { value: 30, label: "30s" },
  { value: 45, label: "45s" },
  { value: 60, label: "1m" },
  { value: 90, label: "90s" },
];

function fmt(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${String(s).padStart(2, "0")}`;
}

export default function AyahAudioPlayer({
  surahNumber,
  ayahNumber,
  autoPlay = true,
}) {
  const audioRef = useRef(null);
  const repeatRef = useRef(false);
  const delayRef = useRef(15);
  const delayIntervalRef = useRef(null);

  const [playing, setPlaying] = useState(false);
  const [repeat, setRepeat] = useState(false);
  const [delaySec, setDelaySec] = useState(15);
  const [readingPause, setReadingPause] = useState(null);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  repeatRef.current = repeat;
  delayRef.current = delaySec;

  const src = getMinshawiAyahUrl(surahNumber, ayahNumber);

  const clearReadingPause = useCallback(() => {
    if (delayIntervalRef.current) {
      clearInterval(delayIntervalRef.current);
      delayIntervalRef.current = null;
    }
    setReadingPause(null);
  }, []);

  const playFromStart = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = 0;
    audio.play().catch(() => setPlaying(false));
  }, []);

  const startReadingPause = useCallback(
    (seconds) => {
      clearReadingPause();
      setReadingPause(seconds);
      delayIntervalRef.current = setInterval(() => {
        setReadingPause((prev) => {
          if (prev == null || prev <= 1) {
            clearInterval(delayIntervalRef.current);
            delayIntervalRef.current = null;
            playFromStart();
            return null;
          }
          return prev - 1;
        });
      }, 1000);
    },
    [clearReadingPause, playFromStart],
  );

  const pause = useCallback(() => {
    clearReadingPause();
    audioRef.current?.pause();
    setPlaying(false);
  }, [clearReadingPause]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return undefined;

    const onLoaded = () => setDuration(audio.duration);
    const onTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };
    const onEnded = () => {
      if (repeatRef.current) {
        if (delayRef.current > 0) {
          setPlaying(false);
          startReadingPause(delayRef.current);
        } else {
          playFromStart();
        }
      } else {
        setPlaying(false);
        setProgress(0);
        setCurrentTime(0);
      }
    };
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);

    audio.addEventListener("loadedmetadata", onLoaded);
    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("ended", onEnded);
    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);

    return () => {
      clearReadingPause();
      audio.removeEventListener("loadedmetadata", onLoaded);
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("ended", onEnded);
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.pause();
    };
  }, [src, playFromStart, clearReadingPause, startReadingPause]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return undefined;

    clearReadingPause();
    setProgress(0);
    setCurrentTime(0);
    setDuration(0);
    setPlaying(false);
    if (audio.getAttribute("src") !== src) audio.setAttribute("src", src);
    audio.load();

    const tryPlay = () => {
      audio.play().catch(() => setPlaying(false));
    };

    if (autoPlay) {
      if (audio.readyState >= 2) tryPlay();
      else audio.addEventListener("canplay", tryPlay, { once: true });
    }

    return () => {
      clearReadingPause();
      audio.removeEventListener("canplay", tryPlay);
      // Release the network stream: tapping many āyāt quickly on iPad otherwise leaves
      // several MP3 downloads alive, which stalls Safari and can force a tab reload.
      audio.pause();
      audio.removeAttribute("src");
      audio.load();
    };
  }, [src, autoPlay, surahNumber, ayahNumber, clearReadingPause]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) pause();
    else audio.play().catch(() => {});
  };

  const seek = (event) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const frac = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
    audio.currentTime = frac * duration;
  };

  return (
    <div className="mushaf-ayah-audio" aria-label={`Recitation: ${MINSHAWI_RECITER.label}`}>
      <audio ref={audioRef} src={src} preload="auto" />

      <div className="mushaf-ayah-audio__meta">
        <span className="mushaf-ayah-audio__reciter">{MINSHAWI_RECITER.label}</span>
        <span className="mushaf-ayah-audio__time">
          {fmt(currentTime)} / {fmt(duration)}
        </span>
      </div>

      <div className="mushaf-ayah-audio__controls">
        <button
          type="button"
          className={`mushaf-ayah-audio__play${playing ? " is-playing" : ""}`}
          onClick={togglePlay}
          aria-label={playing ? "Pause recitation" : "Play recitation"}
        >
          {playing ? "⏸" : "▶"}
        </button>

        <button
          type="button"
          className={`mushaf-ayah-audio__repeat${repeat ? " is-on" : ""}`}
          onClick={() => setRepeat((value) => !value)}
          aria-pressed={repeat}
          title="Repeat this āyah"
        >
          ↺
        </button>

        <div
          className="mushaf-ayah-audio__bar"
          onClick={seek}
          onKeyDown={() => {}}
          role="slider"
          aria-valuemin={0}
          aria-valuemax={duration}
          aria-valuenow={currentTime}
          tabIndex={0}
        >
          <div className="mushaf-ayah-audio__bar-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className="mushaf-ayah-audio__delay">
        <span className="mushaf-ayah-audio__delay-label">Reading pause</span>
        <div className="mushaf-ayah-audio__delay-options" role="group" aria-label="Reading pause before repeat">
          {DELAY_OPTIONS.map((option) => (
            <button
              key={option.value}
              type="button"
              className={`mushaf-ayah-audio__delay-btn${
                delaySec === option.value ? " is-active" : ""
              }`}
              onClick={() => setDelaySec(option.value)}
              aria-pressed={delaySec === option.value}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {readingPause != null && (
        <p className="mushaf-ayah-audio__pause-hint" aria-live="polite">
          Time to read — replays in {readingPause}s
        </p>
      )}
    </div>
  );
}

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
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

const AUTOPLAY_KEY = "ayah_autoplay_v1";

function readAutoPlayPref() {
  try {
    return window.localStorage.getItem(AUTOPLAY_KEY) !== "0";
  } catch {
    return true;
  }
}

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

  /* Remembered choice: tapping an āyah starts the recitation, or opens it silently */
  const [autoPlayOn, setAutoPlayOn] = useState(readAutoPlayPref);
  const autoPlayRef = useRef(autoPlayOn);
  const toggleAutoPlay = () => {
    const next = !autoPlayRef.current;
    autoPlayRef.current = next;
    setAutoPlayOn(next);
    try {
      window.localStorage.setItem(AUTOPLAY_KEY, next ? "1" : "0");
    } catch {
      /* storage unavailable: the choice lasts for this visit */
    }
  };

  const [settingsOpen, setSettingsOpen] = useState(false);
  const [playing, setPlaying] = useState(false);

  /* Leave room at the bottom of the page for the fixed dock */
  useEffect(() => {
    document.body.classList.add("has-ayah-dock");
    return () => document.body.classList.remove("has-ayah-dock");
  }, []);
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

    // Read through a ref so flipping the switch never starts or restarts the current āyah.
    if (autoPlay && autoPlayRef.current) {
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

  const dock = (
    <div className="ayah-dock" role="region" aria-label={`Recitation of āyah ${ayahNumber}`}>
      <audio ref={audioRef} src={src} preload="auto" />

      {settingsOpen && (
        <div className="ayah-dock__settings" id="ayah-dock-settings">
          <span className="ayah-dock__settings-label">Pause before repeating, to read along</span>
          <div className="ayah-dock__delays" role="group" aria-label="Reading pause before repeat">
            {DELAY_OPTIONS.map((option) => (
              <button
                key={option.value}
                type="button"
                className={`ayah-dock__delay${delaySec === option.value ? " is-active" : ""}`}
                onClick={() => setDelaySec(option.value)}
                aria-pressed={delaySec === option.value}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {readingPause != null && (
        <p className="ayah-dock__hint" aria-live="polite">
          Time to read — replays in {readingPause}s
        </p>
      )}

      <div className="ayah-dock__bar">
        <button
          type="button"
          className={`ayah-dock__play${playing ? " is-playing" : ""}`}
          onClick={togglePlay}
          aria-label={playing ? "Pause recitation" : "Play recitation"}
        >
          {playing ? (
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
              <rect x="6" y="5" width="4" height="14" rx="1" fill="currentColor" />
              <rect x="14" y="5" width="4" height="14" rx="1" fill="currentColor" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
              <path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5z" fill="currentColor" />
            </svg>
          )}
        </button>

        <div className="ayah-dock__info">
          <div className="ayah-dock__title">
            <span>Āyah {ayahNumber}</span>
            <span className="ayah-dock__reciter">{MINSHAWI_RECITER.label}</span>
            <span className="ayah-dock__time">
              {fmt(currentTime)} / {fmt(duration)}
            </span>
          </div>
          <div
            className="ayah-dock__progress"
            onClick={seek}
            onKeyDown={() => {}}
            role="slider"
            aria-label="Seek"
            aria-valuemin={0}
            aria-valuemax={duration}
            aria-valuenow={currentTime}
            tabIndex={0}
          >
            <div className="ayah-dock__progress-fill" style={{ width: `${progress}%` }} />
          </div>
        </div>

        <button
          type="button"
          className={`ayah-dock__icon${repeat ? " is-on" : ""}`}
          onClick={() => setRepeat((value) => !value)}
          aria-pressed={repeat}
          aria-label="Repeat this āyah"
          title="Repeat this āyah"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
            <path d="M17 2l3 3-3 3M4 11V9a4 4 0 0 1 4-4h12M7 22l-3-3 3-3M20 13v2a4 4 0 0 1-4 4H4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <button
          type="button"
          role="switch"
          aria-checked={autoPlayOn}
          className={`ayah-dock__autoplay${autoPlayOn ? " is-on" : ""}`}
          onClick={toggleAutoPlay}
          title={
            autoPlayOn
              ? "On: tapping an āyah plays it. Turn off to open āyāt silently."
              : "Off: tapping an āyah opens it silently. Turn on to play automatically."
          }
        >
          <span className="ayah-dock__switch" aria-hidden>
            <span />
          </span>
          <span className="ayah-dock__autoplay-label">Auto-play</span>
        </button>

        <button
          type="button"
          className={`ayah-dock__icon${settingsOpen ? " is-on" : ""}`}
          onClick={() => setSettingsOpen((v) => !v)}
          aria-expanded={settingsOpen}
          aria-controls="ayah-dock-settings"
          aria-label="Reading pause settings"
          title="Reading pause"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
            <circle cx="12" cy="13" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M12 9v4l2.5 2M9 2h6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </div>
  );

  return typeof document !== "undefined" ? createPortal(dock, document.body) : dock;
}

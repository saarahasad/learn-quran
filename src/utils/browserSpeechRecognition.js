/**
 * Free browser speech recognition (Web Speech API).
 * Works in Chrome/Edge without any API key. Arabic quality varies by browser.
 */

export function isBrowserSpeechAvailable() {
  if (typeof window === "undefined") return false;
  return Boolean(window.SpeechRecognition || window.webkitSpeechRecognition);
}

/**
 * Start live recognition while the user is reciting.
 * Returns { stop } to end the session.
 */
export function startLiveSpeechRecognition({
  lang = "ar-SA",
  onResult,
  onError,
} = {}) {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    onError?.("Speech recognition is not supported in this browser. Try Chrome.");
    return { stop: () => {} };
  }

  const recognition = new SpeechRecognition();
  recognition.lang = lang;
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.maxAlternatives = 1;

  let finalText = "";

  recognition.onresult = (event) => {
    let interim = "";
    for (let i = event.resultIndex; i < event.results.length; i += 1) {
      const result = event.results[i];
      const transcript = result[0]?.transcript?.trim() ?? "";
      if (!transcript) continue;
      if (result.isFinal) {
        finalText = `${finalText} ${transcript}`.trim();
      } else {
        interim = `${interim} ${transcript}`.trim();
      }
    }
    const combined = `${finalText} ${interim}`.trim();
    if (combined) onResult?.(combined);
  };

  recognition.onerror = (event) => {
    if (event.error === "aborted" || event.error === "no-speech") return;
    onError?.(
      event.error === "not-allowed"
        ? "Microphone permission denied for speech recognition."
        : `Speech recognition error: ${event.error}`,
    );
  };

  recognition.onend = () => {
    // Chrome stops after silence; restart while caller still wants recognition.
    if (!stopped) {
      try {
        recognition.start();
      } catch {
        // ignore double-start
      }
    }
  };

  let stopped = false;

  try {
    recognition.start();
  } catch (err) {
    onError?.(err?.message || "Could not start speech recognition.");
    return { stop: () => {} };
  }

  return {
    stop() {
      stopped = true;
      try {
        recognition.stop();
      } catch {
        // ignore
      }
    },
    getFinalText() {
      return finalText.trim();
    },
  };
}

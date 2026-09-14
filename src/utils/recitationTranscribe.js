import { isBrowserSpeechAvailable } from "./browserSpeechRecognition.js";

const DEFAULT_ENDPOINT = "/api/transcribe";
const STATUS_ENDPOINT = "/api/transcribe/status";

function getTranscribeEndpoint() {
  return import.meta.env.VITE_TRANSCRIBE_API_URL || DEFAULT_ENDPOINT;
}

function getStatusEndpoint() {
  if (import.meta.env.VITE_TRANSCRIBE_API_URL) {
    const base = import.meta.env.VITE_TRANSCRIBE_API_URL.replace(/\/transcribe\/?$/, "");
    return `${base}/transcribe/status`;
  }
  return STATUS_ENDPOINT;
}

export async function fetchTranscriptionStatus() {
  try {
    const response = await fetch(getStatusEndpoint());
    const contentType = response.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      if (isBrowserSpeechAvailable()) {
        return {
          available: true,
          hasKey: false,
          provider: "browser",
          message: "Using free browser speech recognition (Chrome works best for Arabic).",
        };
      }
      return {
        available: false,
        hasKey: false,
        needsRestart: true,
        provider: null,
        message:
          "Speech check server is not running. In Terminal: press Ctrl+C, then run npm run dev again.",
      };
    }
    if (!response.ok) {
      if (isBrowserSpeechAvailable()) {
        return {
          available: true,
          hasKey: false,
          provider: "browser",
          message: "Using free browser speech recognition (Chrome works best for Arabic).",
        };
      }
      return {
        available: false,
        hasKey: false,
        provider: null,
        message: "Speech check server is not reachable. Restart npm run dev.",
      };
    }
    const serverStatus = await response.json();
    if (serverStatus.available) return serverStatus;

    if (isBrowserSpeechAvailable()) {
      return {
        available: true,
        hasKey: false,
        provider: "browser",
        message: "Using free browser speech recognition (Chrome works best for Arabic).",
      };
    }

    return serverStatus;
  } catch {
    if (isBrowserSpeechAvailable()) {
      return {
        available: true,
        hasKey: false,
        provider: "browser",
        message: "Using free browser speech recognition (Chrome works best for Arabic).",
      };
    }
    return {
      available: false,
      hasKey: false,
      provider: null,
      message:
        "Add a free GROQ_API_KEY to .env.local, or use Chrome for browser speech recognition.",
    };
  }
}

function friendlyFetchError(err) {
  if (err?.message) return err.message;
  return "Could not reach the speech check server. Restart npm run dev.";
}

/**
 * Send recorded audio to the transcription backend.
 * Expects JSON: { text: string }
 */
export async function transcribeRecitation(blob, { language = "ar" } = {}) {
  if (!blob?.size) {
    throw new Error("No recording to check.");
  }

  const form = new FormData();
  const ext = blob.type.includes("mp4") ? "m4a" : "webm";
  form.append("file", blob, `recitation.${ext}`);
  form.append("language", language);

  let response;
  try {
    response = await fetch(getTranscribeEndpoint(), {
      method: "POST",
      body: form,
    });
  } catch (err) {
    throw new Error(friendlyFetchError(err));
  }

  if (!response.ok) {
    let message = `Speech check failed (${response.status})`;
    try {
      const contentType = response.headers.get("content-type") || "";
      if (!contentType.includes("application/json")) {
        throw new Error("not-json");
      }
      const payload = await response.json();
      if (payload?.error) message = payload.error;
      else if (payload?.message) message = payload.message;
    } catch (err) {
      if (err?.message === "not-json") {
        message = "Speech check server not found. Stop the app and run npm run dev again.";
      }
    }
    throw new Error(message);
  }

  const contentType = response.headers.get("content-type") || "";
  if (!contentType.includes("application/json")) {
    throw new Error("Speech check server not found. Stop the app and run npm run dev again.");
  }

  const payload = await response.json();
  if (!payload?.text?.trim()) {
    throw new Error("Could not pick up any words. Try speaking closer to the mic.");
  }

  return {
    text: payload.text.trim(),
    words: Array.isArray(payload.words) ? payload.words : [],
  };
}

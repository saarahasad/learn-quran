/**
 * Shared handler for POST /api/transcribe (Whisper).
 * Used by vite dev middleware and `npm run transcribe:dev`.
 */
import { Readable } from "node:stream";

function isPlaceholderKey(key) {
  return (
    !key ||
    key === "undefined" ||
    key === "sk-your-key-here" ||
    key === "sk-your-actual-key-here" ||
    key === "gsk-your-key-here" ||
    /your[-_]?key/i.test(key)
  );
}

export function getGroqApiKey() {
  const key = String(process.env.GROQ_API_KEY || process.env.VITE_GROQ_API_KEY || "").trim();
  if (isPlaceholderKey(key) || !key.startsWith("gsk_")) return "";
  return key;
}

export function getTranscribeApiKey() {
  const key = String(process.env.OPENAI_API_KEY || process.env.VITE_OPENAI_API_KEY || "").trim();
  if (isPlaceholderKey(key) || !key.startsWith("sk-")) return "";
  return key;
}

export function getActiveTranscribeProvider() {
  if (getGroqApiKey()) return "groq";
  if (getTranscribeApiKey()) return "openai";
  return null;
}

export function transcribeStatus() {
  const groqRaw = String(process.env.GROQ_API_KEY || process.env.VITE_GROQ_API_KEY || "").trim();
  const openaiRaw = String(process.env.OPENAI_API_KEY || process.env.VITE_OPENAI_API_KEY || "").trim();
  const provider = getActiveTranscribeProvider();
  const hasKey = Boolean(provider);

  let message = "Speech check is ready.";
  if (provider === "groq") {
    message = "Speech check is ready (free Groq Whisper).";
  } else if (provider === "openai") {
    message = "Speech check is ready (OpenAI Whisper).";
  } else if (!groqRaw && !openaiRaw) {
    message =
      "Add a free GROQ_API_KEY to .env.local, or use Chrome for free browser speech recognition.";
  } else if (groqRaw && isPlaceholderKey(groqRaw)) {
    message = "Replace gsk-your-key-here in .env.local with your free Groq key, then restart npm run dev.";
  } else if (openaiRaw && isPlaceholderKey(openaiRaw)) {
    message = "Replace sk-your-key-here in .env.local with your OpenAI key, then restart npm run dev.";
  } else {
    message = "API key in .env.local does not look valid. Groq keys start with gsk_; OpenAI with sk-.";
  }

  return {
    available: hasKey,
    hasKey,
    provider,
    hasPlaceholder:
      (Boolean(groqRaw) && isPlaceholderKey(groqRaw)) ||
      (Boolean(openaiRaw) && isPlaceholderKey(openaiRaw)),
    message,
  };
}

async function readFormFile(req) {
  const headers = new Headers();
  for (const [key, value] of Object.entries(req.headers)) {
    if (!value) continue;
    headers.set(key, Array.isArray(value) ? value[0] : value);
  }

  const request = new Request(`http://localhost${req.url}`, {
    method: req.method,
    headers,
    body: Readable.toWeb(req),
    duplex: "half",
  });

  const form = await request.formData();
  const file = form.get("file");
  if (!file || typeof file === "string") return null;

  const buffer = Buffer.from(await file.arrayBuffer());
  if (!buffer.length) return null;

  return {
    buffer,
    filename: file.name || "recitation.webm",
    mime: file.type || "audio/webm",
  };
}

function mapWhisperWords(payload) {
  return Array.isArray(payload.words)
    ? payload.words.map((w) => ({
        word: w.word?.trim() ?? "",
        start: w.start ?? 0,
        end: w.end ?? 0,
      }))
    : [];
}

async function transcribeWithWhisper(file, apiKey, { endpoint, model }) {
  const form = new FormData();
  form.append("file", new Blob([file.buffer], { type: file.mime }), file.filename);
  form.append("model", model);
  form.append("language", "ar");
  form.append("prompt", "قرآن كريم تلاوة");
  form.append("response_format", "verbose_json");
  form.append("timestamp_granularities[]", "word");

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
    body: form,
  });

  const payload = await response.json();
  if (!response.ok) {
    throw new Error(payload?.error?.message || `Transcription error ${response.status}`);
  }

  return {
    text: payload.text?.trim() || "",
    words: mapWhisperWords(payload),
  };
}

async function transcribeAudio(file) {
  const groqKey = getGroqApiKey();
  if (groqKey) {
    return transcribeWithWhisper(file, groqKey, {
      endpoint: "https://api.groq.com/openai/v1/audio/transcriptions",
      model: "whisper-large-v3-turbo",
    });
  }

  const openaiKey = getTranscribeApiKey();
  if (openaiKey) {
    return transcribeWithWhisper(file, openaiKey, {
      endpoint: "https://api.openai.com/v1/audio/transcriptions",
      model: "whisper-1",
    });
  }

  throw new Error("No transcription API key configured.");
}

function sendJson(res, status, body) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(body));
}

export async function handleTranscribeRequest(req, res) {
  if (req.method === "GET" && (req.url === "/api/transcribe/status" || req.url === "/health")) {
    sendJson(res, 200, transcribeStatus());
    return;
  }

  if (req.method === "OPTIONS") {
    res.statusCode = 204;
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.end();
    return;
  }

  if (req.method !== "POST" || req.url !== "/api/transcribe") {
    sendJson(res, 404, { error: "Not found" });
    return;
  }

  const provider = getActiveTranscribeProvider();
  if (!provider) {
    sendJson(res, 503, {
      error:
        "Speech check is not set up. Add a free GROQ_API_KEY to .env.local and restart npm run dev.",
      ...transcribeStatus(),
    });
    return;
  }

  try {
    const file = await readFormFile(req);
    if (!file) {
      sendJson(res, 400, { error: "Missing audio file." });
      return;
    }

    const { text, words } = await transcribeAudio(file);
    if (!text) {
      sendJson(res, 422, { error: "Could not pick up any words. Try speaking closer to the mic." });
      return;
    }

    sendJson(res, 200, { text, words });
  } catch (err) {
    sendJson(res, 500, { error: err?.message || "Transcription failed." });
  }
}

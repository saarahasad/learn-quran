/** Arabic text-to-speech — Edge neural voice (ar-SA-HamedNeural) with browser fallback */

const EDGE_TOKEN = "6A5AA1D4EAFF4E9FB37E23D68491D6F4";
const EDGE_VOICE = "ar-SA-HamedNeural";
const EDGE_WSS =
  "wss://speech.platform.bing.com/consumer/speech/synthesize/readaloud/edge/v1";
const EDGE_GEC_VERSION = "1-143.0.3650.75";
const WIN_EPOCH_OFFSET = 11644473600;

const audioCache = new Map();
let activeAudio = null;
let activeButton = null;
let voicesReady = false;

function generateConnectId() {
  return "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx".replace(/x/g, () =>
    ((Math.random() * 16) | 0).toString(16),
  );
}

async function generateSecMsGec() {
  let ticks = Math.floor(Date.now() / 1000) + WIN_EPOCH_OFFSET;
  ticks -= ticks % 300;
  ticks *= 10_000_000;
  const data = new TextEncoder().encode(`${ticks}${EDGE_TOKEN}`);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("")
    .toUpperCase();
}

function escapeXml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function buildMessage(headers, body) {
  const headerLines = Object.entries(headers)
    .map(([key, value]) => `${key}: ${value}`)
    .join("\r\n");
  return `${headerLines}\r\n\r\n${body}`;
}

function parseMessage(raw) {
  const lines = raw.split("\n");
  const headers = {};
  let i = 0;
  for (; i < lines.length; i += 1) {
    const line = lines[i].trim();
    if (!line) break;
    const sep = line.indexOf(":");
    if (sep === -1) continue;
    headers[line.slice(0, sep).trim()] = line.slice(sep + 1).trim();
  }
  return { headers, body: lines.slice(i + 1).join("\n") };
}

function createSSML(text) {
  return `<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="ar-SA">
    <voice name="${EDGE_VOICE}">
      <prosody rate="-8%" pitch="+0Hz">${escapeXml(text)}</prosody>
    </voice>
  </speak>`;
}

function ensureVoicesLoaded() {
  if (voicesReady || typeof window === "undefined" || !window.speechSynthesis) {
    return Promise.resolve();
  }
  return new Promise((resolve) => {
    const voices = window.speechSynthesis.getVoices();
    if (voices.length) {
      voicesReady = true;
      resolve();
      return;
    }
    window.speechSynthesis.onvoiceschanged = () => {
      voicesReady = true;
      resolve();
    };
    setTimeout(resolve, 500);
  });
}

function pickArabicVoice() {
  if (typeof window === "undefined" || !window.speechSynthesis) return null;
  const voices = window.speechSynthesis.getVoices();
  const ranked = [
    (v) => v.lang === "ar-SA",
    (v) => v.lang.startsWith("ar-"),
  ];
  for (const test of ranked) {
    const match = voices.find(test);
    if (match) return match;
  }
  return null;
}

function stopActive() {
  if (activeAudio) {
    activeAudio.pause();
    activeAudio = null;
  }
  if (typeof window !== "undefined" && window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
  if (activeButton) {
    activeButton.classList.remove("playing");
    activeButton = null;
  }
}

async function fetchServerAudio(text) {
  const cached = audioCache.get(text);
  if (cached) return cached;

  const response = await fetch("/api/arabic-tts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });
  if (!response.ok) throw new Error("Server TTS unavailable");

  const blob = await response.blob();
  const objectUrl = URL.createObjectURL(blob);
  audioCache.set(text, objectUrl);
  return objectUrl;
}

async function synthesizeEdgeAudio(text) {
  const cached = audioCache.get(text);
  if (cached) return cached;

  const connectId = generateConnectId();
  const secMsGEC = await generateSecMsGec();
  const params = new URLSearchParams({
    ConnectionId: connectId,
    TrustedClientToken: EDGE_TOKEN,
    "Sec-MS-GEC": secMsGEC,
    "Sec-MS-GEC-Version": EDGE_GEC_VERSION,
  });
  const url = `${EDGE_WSS}?${params.toString()}`;
  const timestamp = new Date().toString();

  const configMsg = buildMessage(
    {
      "Content-Type": "application/json; charset=utf-8",
      Path: "speech.config",
      "X-Timestamp": timestamp,
    },
    JSON.stringify({
      context: {
        synthesis: {
          audio: {
            metadataoptions: {
              sentenceBoundaryEnabled: false,
              wordBoundaryEnabled: false,
            },
            outputFormat: "audio-24khz-48kbitrate-mono-mp3",
          },
        },
      },
    }),
  );

  const ssmlMsg = buildMessage(
    {
      "Content-Type": "application/ssml+xml",
      Path: "ssml",
      "X-RequestId": connectId,
      "X-Timestamp": timestamp,
    },
    createSSML(text),
  );

  const audioData = await new Promise((resolve, reject) => {
    const ws = new WebSocket(url);
    ws.binaryType = "arraybuffer";
    let audioBuffer = new ArrayBuffer(0);
    let settled = false;

    const finish = (blob) => {
      if (settled) return;
      settled = true;
      resolve(blob);
    };

    const fail = (error) => {
      if (settled) return;
      settled = true;
      reject(error);
    };

    const timeout = setTimeout(() => {
      ws.close();
      fail(new Error("Speech synthesis timed out"));
    }, 30000);

    ws.onopen = () => {
      ws.send(configMsg);
      ws.send(ssmlMsg);
    };

    ws.onmessage = (event) => {
      if (typeof event.data === "string") {
        const { headers } = parseMessage(event.data);
        if (headers.Path === "turn.end") {
          clearTimeout(timeout);
          ws.close();
          if (!audioBuffer.byteLength) {
            fail(new Error("No audio received"));
            return;
          }
          finish(new Blob([audioBuffer], { type: "audio/mpeg" }));
        }
        return;
      }

      if (event.data instanceof ArrayBuffer) {
        const view = new DataView(event.data);
        const headerLength = view.getInt16(0);
        if (event.data.byteLength > headerLength + 2) {
          const chunk = event.data.slice(2 + headerLength);
          const merged = new Uint8Array(audioBuffer.byteLength + chunk.byteLength);
          merged.set(new Uint8Array(audioBuffer), 0);
          merged.set(new Uint8Array(chunk), audioBuffer.byteLength);
          audioBuffer = merged.buffer;
        }
      }
    };

    ws.onerror = () => {
      clearTimeout(timeout);
      fail(new Error("Speech synthesis failed"));
    };

    ws.onclose = () => {
      clearTimeout(timeout);
      if (!settled && !audioBuffer.byteLength) {
        fail(new Error("Speech synthesis closed"));
      }
    };
  });

  const objectUrl = URL.createObjectURL(audioData);
  audioCache.set(text, objectUrl);
  return objectUrl;
}

async function speakWithBrowser(text) {
  await ensureVoicesLoaded();
  return new Promise((resolve, reject) => {
    if (!window.speechSynthesis) {
      reject(new Error("Speech synthesis unavailable"));
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "ar-SA";
    utterance.rate = 0.85;

    const voice = pickArabicVoice();
    if (voice) utterance.voice = voice;

    utterance.onend = () => resolve();
    utterance.onerror = () => reject(new Error("Speech failed"));
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  });
}

async function playAudioUrl(url) {
  const audio = new Audio(url);
  activeAudio = audio;
  await new Promise((resolve, reject) => {
    audio.onended = resolve;
    audio.onerror = () => reject(new Error("Playback failed"));
    audio.play().catch(reject);
  });
}

export async function speakArabic(text, button = null) {
  const trimmed = String(text ?? "").trim();
  if (!trimmed) return;

  if (activeButton === button && button?.classList.contains("playing")) {
    stopActive();
    return;
  }

  stopActive();
  if (button) {
    activeButton = button;
    button.classList.add("playing");
  }

  try {
    let url;
    try {
      url = await fetchServerAudio(trimmed);
    } catch {
      url = await synthesizeEdgeAudio(trimmed);
    }
    await playAudioUrl(url);
  } catch {
    try {
      await speakWithBrowser(trimmed);
    } catch {
      if (button) button.classList.add("ajr-ar-play--error");
      setTimeout(() => button?.classList.remove("ajr-ar-play--error"), 1200);
    }
  } finally {
    if (activeButton === button) {
      button?.classList.remove("playing");
      activeButton = null;
    }
    activeAudio = null;
  }
}

/** Event delegation — works for dynamically injected HTML */
export function wireArabicPlayButtons(root) {
  if (!root) return;
  ensureVoicesLoaded();

  if (root.dataset.arPlayWired === "1") return;
  root.dataset.arPlayWired = "1";

  root.addEventListener("click", (event) => {
    const btn = event.target.closest?.(".ajr-ar-play");
    if (!btn || !root.contains(btn)) return;
    event.preventDefault();
    event.stopPropagation();
    speakArabic(btn.dataset.ar || btn.getAttribute("data-ar") || "", btn);
  });
}

/**
 * Server-side Arabic TTS via Microsoft Edge neural voice.
 * Used by Vite dev middleware — avoids browser WebSocket/CORS issues.
 */
import WebSocket from "ws";
import crypto from "node:crypto";

const EDGE_TOKEN = "6A5AA1D4EAFF4E9FB37E23D68491D6F4";
const EDGE_VOICE = "ar-SA-HamedNeural";
const EDGE_WSS =
  "wss://speech.platform.bing.com/consumer/speech/synthesize/readaloud/edge/v1";
const EDGE_GEC_VERSION = "1-143.0.3650.75";
const WIN_EPOCH_OFFSET = 11644473600;
const CHROMIUM_MAJOR = "143";

function generateConnectId() {
  return crypto.randomBytes(16).toString("hex");
}

function generateMuid() {
  return crypto.randomBytes(16).toString("hex").toUpperCase();
}

async function generateSecMsGec() {
  let ticks = Math.floor(Date.now() / 1000) + WIN_EPOCH_OFFSET;
  ticks -= ticks % 300;
  ticks *= 10_000_000;
  return crypto
    .createHash("sha256")
    .update(`${ticks}${EDGE_TOKEN}`)
    .digest("hex")
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

function createSSML(text) {
  return `<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="ar-SA">
    <voice name="${EDGE_VOICE}">
      <prosody rate="-8%" pitch="+0Hz">${escapeXml(text)}</prosody>
    </voice>
  </speak>`;
}

export async function synthesizeArabicMp3(text) {
  const trimmed = String(text ?? "").trim();
  if (!trimmed) throw new Error("Missing text");

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

  const headers = {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 " +
      `(KHTML, like Gecko) Chrome/${CHROMIUM_MAJOR}.0.0.0 Safari/537.36 ` +
      `Edg/${CHROMIUM_MAJOR}.0.0.0`,
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "en-US,en;q=0.9",
    Origin: "chrome-extension://jdiccldimpdaibmpdkjnbmckianbfold",
    Cookie: `muid=${generateMuid()};`,
  };

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
    createSSML(trimmed),
  );

  return new Promise((resolve, reject) => {
    const ws = new WebSocket(url, { headers });
    let audioBuffer = Buffer.alloc(0);
    let settled = false;

    const finish = (buf) => {
      if (settled) return;
      settled = true;
      resolve(buf);
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

    ws.on("open", () => {
      ws.send(configMsg);
      ws.send(ssmlMsg);
    });

    ws.on("message", (data, isBinary) => {
      if (!isBinary) {
        const raw = data.toString();
        if (raw.includes("Path:turn.end")) {
          clearTimeout(timeout);
          ws.close();
          if (!audioBuffer.length) {
            fail(new Error("No audio received"));
            return;
          }
          finish(audioBuffer);
        }
        return;
      }

      const buf = Buffer.from(data);
      if (buf.length < 2) return;
      const headerLength = buf.readInt16BE(0);
      if (buf.length > headerLength + 2) {
        audioBuffer = Buffer.concat([audioBuffer, buf.subarray(2 + headerLength)]);
      }
    });

    ws.on("error", (err) => {
      clearTimeout(timeout);
      fail(err);
    });

    ws.on("close", () => {
      clearTimeout(timeout);
      if (!settled && !audioBuffer.length) {
        fail(new Error("Speech synthesis closed"));
      }
    });
  });
}

export async function handleArabicTtsRequest(req, res) {
  if (req.method === "OPTIONS") {
    res.statusCode = 204;
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.end();
    return;
  }

  if (req.method !== "POST") {
    res.statusCode = 405;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: "Method not allowed" }));
    return;
  }

  try {
    const chunks = [];
    for await (const chunk of req) chunks.push(chunk);
    const body = JSON.parse(Buffer.concat(chunks).toString("utf8") || "{}");
    const text = String(body.text ?? "").trim();
    if (!text) {
      res.statusCode = 400;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ error: "Missing text" }));
      return;
    }

    const mp3 = await synthesizeArabicMp3(text);
    res.statusCode = 200;
    res.setHeader("Content-Type", "audio/mpeg");
    res.setHeader("Cache-Control", "public, max-age=86400");
    res.end(mp3);
  } catch (err) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: err?.message || "TTS failed" }));
  }
}

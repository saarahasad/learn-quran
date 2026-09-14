/**
 * Standalone transcription server (optional).
 * Prefer `npm run dev` — Vite includes the same API when OPENAI_API_KEY is set.
 */
import http from "node:http";
import { handleTranscribeRequest } from "./transcribeHandler.mjs";

const PORT = Number(process.env.TRANSCRIBE_PORT || 8787);

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  handleTranscribeRequest(req, res);
});

server.listen(PORT, () => {
  console.log(`Recitation transcription server on http://localhost:${PORT}`);
});

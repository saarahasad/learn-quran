/**
 * Iʿrāb tutor — Claude (Anthropic) first, Groq as fallback.
 * GET  /api/iraab-explain  → { available, provider, model }
 * POST /api/iraab-explain  → { explanation, provider, model }
 */

function isPlaceholderKey(key) {
  return (
    !key ||
    key === "undefined" ||
    /your[-_]?key/i.test(key)
  );
}

function getAnthropicKey() {
  const key = String(
    process.env.ANTHROPIC_API_KEY || process.env.VITE_ANTHROPIC_API_KEY || "",
  ).trim();
  if (isPlaceholderKey(key) || !key.startsWith("sk-ant-")) return "";
  return key;
}

function getGroqKey() {
  const key = String(process.env.GROQ_API_KEY || process.env.VITE_GROQ_API_KEY || "").trim();
  if (isPlaceholderKey(key) || !key.startsWith("gsk_")) return "";
  return key;
}

function getOpenAIKey() {
  const key = String(process.env.OPENAI_API_KEY || process.env.VITE_OPENAI_API_KEY || "").trim();
  if (isPlaceholderKey(key) || !key.startsWith("sk-")) return "";
  return key;
}

const CLAUDE_MODEL = "claude-sonnet-4-20250514";
const GROQ_MODEL = "llama-3.3-70b-versatile";
const OPENAI_MODEL = "gpt-4o-mini";

function tutorStatus() {
  if (getAnthropicKey()) {
    return {
      available: true,
      provider: "claude",
      model: CLAUDE_MODEL,
      message: "Claude will explain each segment in English and point to the Ājurrūmiyyah.",
    };
  }
  if (getGroqKey()) {
    return {
      available: true,
      provider: "groq",
      model: GROQ_MODEL,
      message: "Groq will explain each segment (add ANTHROPIC_API_KEY to use Claude).",
    };
  }
  if (getOpenAIKey()) {
    return {
      available: true,
      provider: "openai",
      model: OPENAI_MODEL,
      message: "OpenAI will explain each segment (add ANTHROPIC_API_KEY to use Claude).",
    };
  }
  return {
    available: false,
    provider: null,
    model: null,
    message:
      "Add ANTHROPIC_API_KEY (Claude), GROQ_API_KEY, or OPENAI_API_KEY to .env.local for a spoken-style tutor. Poem links still work without a key.",
  };
}

function json(res, status, payload) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify(payload));
}

async function readJsonBody(req) {
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const raw = Buffer.concat(chunks).toString("utf8").trim();
  if (!raw) return {};
  return JSON.parse(raw);
}

function clip(text, max) {
  const t = String(text || "").replace(/\s+/g, " ").trim();
  if (t.length <= max) return t;
  return `${t.slice(0, max).replace(/\s+\S*$/, "")}…`;
}

function systemPrompt() {
  return `You explain Qurʾān iʿrāb for a student of the Ājurrūmiyyah.

Write exactly ONE English sentence — no second sentence, no lists, no headings, no preamble.
Use the full-ayah Duʿās iʿrāb so you name how THIS word sits in the sentence (not in isolation).
Keep Arabic grammar terms in Arabic script (مبتدأ, فاعل, مفعول به…).
Do not paste or translate the whole Arabic analysis. Do not mention the Ājurrūmiyyah chapter — the UI already links it.`;
}

function userPrompt(body) {
  const poem = Array.isArray(body.poem) ? body.poem : [];
  const commentary = Array.isArray(body.commentary) ? body.commentary : [];
  const memory = Array.isArray(body.memory) ? body.memory : [];

  const poemBlock = poem.length
    ? poem
        .slice(0, 2)
        .map(
          (p, i) =>
            `${i + 1}. ${p.chapterEn || ""} (${p.chapterAr || ""}) — ${p.reason || ""}\n   ${p.ar || ""}\n   ${p.en || ""}`,
        )
        .join("\n")
    : "(none matched)";

  const commentaryBlock = commentary.length
    ? commentary
        .slice(0, 1)
        .map(
          (c, i) =>
            `${i + 1}. ${c.chapterEn || ""} ${c.title ? `— ${c.title}` : ""}\n${clip(c.text, 480)}`,
        )
        .join("\n\n")
    : "(no Tuḥfat excerpt for this line yet)";

  const memoryBlock = memory.length
    ? memory.map((m) => `- (${(m.terms || []).join(", ")}) ${m.note}`).join("\n")
    : "(none saved yet)";

  const follow = String(body.question || "").trim();
  const student = String(body.studentAnalysis || "").trim();
  const fullIraab = clip(body.fullIraab, 3600);
  return [
    `Āyah / sentence: ${body.sentence || "(not given)"}`,
    `Full Duʿās iʿrāb for this āyah:\n${fullIraab || "(not given)"}`,
    `Focus word: ﴿${body.word || ""}﴾`,
    `Duʿās line for this word: ${body.analysis || "(none)"}`,
    student ? `Student's own iʿrāb for this word: ${student}` : "",
    `Matched Ājurrūmiyyah line:\n${poemBlock}`,
    `Student's Tuḥfat commentary:\n${commentaryBlock}`,
    `Student's saved teaching notes:\n${memoryBlock}`,
    follow
      ? `Student question: ${follow}`
      : "One English sentence: how the focus word sits in this āyah. Use the full iʿrāb. Do not paste the Arabic.",
  ]
    .filter(Boolean)
    .join("\n\n");
}

function historyToMessages(history, userText) {
  const msgs = [];
  if (Array.isArray(history)) {
    for (const turn of history.slice(-8)) {
      const role = turn?.role === "assistant" ? "assistant" : "user";
      const content = String(turn?.content || "").trim();
      if (content) msgs.push({ role, content });
    }
  }
  msgs.push({ role: "user", content: userText });
  return msgs;
}

async function callClaude(messages) {
  const key = getAnthropicKey();
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": key,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: CLAUDE_MODEL,
      max_tokens: 160,
      system: systemPrompt(),
      messages,
    }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const detail = data?.error?.message || JSON.stringify(data).slice(0, 240);
    throw new Error(`Claude: ${detail}`);
  }
  const text = Array.isArray(data.content)
    ? data.content.map((c) => c.text || "").join("\n").trim()
    : "";
  if (!text) throw new Error("Claude returned an empty reply.");
  return { explanation: text, provider: "claude", model: CLAUDE_MODEL };
}

async function callOpenAI(messages) {
  const key = getOpenAIKey();
  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${key}`,
    },
    body: JSON.stringify({
      model: OPENAI_MODEL,
      max_tokens: 160,
      temperature: 0.3,
      messages: [{ role: "system", content: systemPrompt() }, ...messages],
    }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const detail = data?.error?.message || JSON.stringify(data).slice(0, 240);
    throw new Error(`OpenAI: ${detail}`);
  }
  const text = data?.choices?.[0]?.message?.content?.trim() || "";
  if (!text) throw new Error("OpenAI returned an empty reply.");
  return { explanation: text, provider: "openai", model: OPENAI_MODEL };
}

async function callGroq(messages) {
  const key = getGroqKey();
  const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${key}`,
    },
    body: JSON.stringify({
      model: GROQ_MODEL,
      max_tokens: 160,
      temperature: 0.3,
      messages: [{ role: "system", content: systemPrompt() }, ...messages],
    }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const detail = data?.error?.message || JSON.stringify(data).slice(0, 240);
    throw new Error(`Groq: ${detail}`);
  }
  const text = data?.choices?.[0]?.message?.content?.trim() || "";
  if (!text) throw new Error("Groq returned an empty reply.");
  return { explanation: text, provider: "groq", model: GROQ_MODEL };
}

export async function handleIraabExplainRequest(req, res) {
  if (req.method === "GET") {
    json(res, 200, tutorStatus());
    return;
  }
  if (req.method !== "POST") {
    json(res, 405, { error: "Method not allowed" });
    return;
  }

  let body;
  try {
    body = await readJsonBody(req);
  } catch {
    json(res, 400, { error: "Invalid JSON body." });
    return;
  }

  const word = String(body.word || "").trim();
  const analysis = String(body.analysis || "").trim();
  if (!word || !analysis) {
    json(res, 400, { error: "Provide word and analysis." });
    return;
  }

  const status = tutorStatus();
  if (!status.available) {
    json(res, 200, {
      explanation: "",
      provider: "local",
      model: null,
      available: false,
      message: status.message,
    });
    return;
  }

  const messages = historyToMessages(body.history, userPrompt(body));
  try {
    let result;
    if (getAnthropicKey()) result = await callClaude(messages);
    else if (getGroqKey()) result = await callGroq(messages);
    else result = await callOpenAI(messages);
    json(res, 200, { ...result, available: true });
  } catch (err) {
    json(res, 502, { error: err?.message || "Tutor model failed." });
  }
}

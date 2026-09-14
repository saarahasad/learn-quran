/**
 * Beginner iʿrāb guide — Anthropic Claude.
 * GET  /api/iraab-guide  → { available, provider, model, message }
 * POST /api/iraab-guide  → { pack, provider, model }
 */

function isPlaceholderKey(key) {
  return !key || key === "undefined" || /your[-_]?key/i.test(key);
}

function getAnthropicKey() {
  const key = String(
    process.env.ANTHROPIC_API_KEY || process.env.VITE_ANTHROPIC_API_KEY || "",
  ).trim();
  if (isPlaceholderKey(key) || !key.startsWith("sk-ant-")) return "";
  return key;
}

function getOpenAIKey() {
  const key = String(
    process.env.OPENAI_API_KEY || process.env.VITE_OPENAI_API_KEY || "",
  ).trim();
  if (isPlaceholderKey(key) || !key.startsWith("sk-")) return "";
  return key;
}

const CLAUDE_MODEL = "claude-sonnet-4-20250514";
const OPENAI_MODEL = "gpt-4o-mini";

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

function systemPrompt() {
  return `You write beginner iʿrāb guides for students who know almost no Arabic grammar.

You receive compressed إعراب القرآن للدعاس text: ﴿word﴾ immediately followed by a terse analysis, then the next ﴿word﴾, with almost no spacing.

Your job: parse that into word-cards a total beginner can follow, in the same spirit as a warm cream page titled "Beginner's iʿrāb guide".

RULES
- Keep EVERY grammar term in Arabic script (مُبْتَدَأ، حَال، فَاعِلٌ مُسْتَتِر، مَفْعُول بِه، جَارّ وَمَجْرُور، مَقُول الْقَوْل، لَام التَّعْلِيل, etc.). Never translate the term itself into English. Explain what it means in the surrounding English sentence.
- Group short connected phrases on ONE card when Daʿʿās treats them as one unit (e.g. عَلَىٰ عَبْدِهِ, وَلَمْ يَجْعَل, بَأْسًا شَدِيدًا). Do not split those further.
- Each card needs: Arabic (with ﴿ ﴾), a short italic English meaning, a state, one Arabic grammar term for the badge, and a plain-English "why" with no extra jargon.
- state must be exactly one of: "raf" (رَفْع / subject-side), "nasb" (نَصْب / object-side), "khafd" (جَرّ / after a linking word), "none" (verbs, particles, whole clauses with no noun case).
- Optional "note": only if it adds something real (hidden doer, what a jarr phrase hangs off, clause acting as an object). Do not pad every card.
- End with 4–5 short reusable "pattern to remember" rules a beginner can apply to the NEXT ayah (endings, hidden doers, trigger words, حَال vs مَفْعُول, clauses as one unit).
- Write like a patient tutor. Short sentences. No lists inside a card's explain field.
- Use the Uthmani ayah text you are given for ayahText. If none is given, reconstruct it from the ﴿ ﴾ spans.
- This grouping may span several āyāt (tafsir.app does that). Return ayahs: [{n, text}, …] for each āyah in the group.
- Put ayah (number) on EVERY card so the student can see which āyah the word belongs to.
- Cover the whole grouping, not only the first āyah.

You MUST call submit_beginner_guide with the full guide. Do not write a chat reply.`;
}

function userPrompt(body) {
  const surah = body.surahName || body.surahNameEn || "";
  const ayah = body.ayahLabel || body.ayah || "";
  const ayahText = String(body.ayahText || "").trim();
  const iraab = String(body.iraab || "").trim();
  const ayahs = Array.isArray(body.ayahs) ? body.ayahs : [];
  const ayahBlock = ayahs.length
    ? `Grouped āyāt (keep these boundaries; number every card):\n${ayahs
        .map((a) => `Āyah ${a.n}: ${a.text}`)
        .join("\n")}`
    : ayahText
      ? `Uthmani ayah text:\n${ayahText}`
      : "No separate Uthmani text — rebuild from the ﴿ ﴾ spans.";
  return [
    surah || ayah ? `Sūrah / ayah: ${surah} ${ayah}`.trim() : "",
    ayahBlock,
    `Raw Daʿʿās iʿrāb for THIS grouping only:\n${iraab}`,
  ]
    .filter(Boolean)
    .join("\n\n");
}

const SUBMIT_TOOL = {
  name: "submit_beginner_guide",
  description: "Submit the finished beginner iʿrāb guide for this ayah.",
  input_schema: {
    type: "object",
    additionalProperties: false,
    properties: {
      surahNameEn: {
        type: "string",
        description: "English sūrah name, e.g. al-Kahf",
      },
      ayahLabel: {
        type: "string",
        description: "Ayah number or range, e.g. 1 or 1–3",
      },
      ayahText: {
        type: "string",
        description: "Full Uthmani ayah text for the highlighted box",
      },
      ayahs: {
        type: "array",
        description: "Each āyah in this tafsir.app grouping, in order",
        items: {
          type: "object",
          additionalProperties: false,
          properties: {
            n: { type: "number" },
            text: { type: "string" },
          },
          required: ["n", "text"],
        },
      },
      cards: {
        type: "array",
        items: {
          type: "object",
          additionalProperties: false,
          properties: {
            ar: {
              type: "string",
              description: "Arabic word or phrase, with or without ﴿ ﴾",
            },
            ayah: {
              type: "number",
              description: "Āyah number this card belongs to, inside the grouping",
            },
            meaning: {
              type: "string",
              description: "Short plain English gloss, no quotes needed",
            },
            state: {
              type: "string",
              enum: ["raf", "nasb", "khafd", "none"],
            },
            term: {
              type: "string",
              description: "Arabic grammar term for the badge, Arabic script only",
            },
            explain: {
              type: "string",
              description: "Beginner English why-this-role. Keep grammar terms in Arabic script.",
            },
            note: {
              type: "string",
              description: "Optional extra line. Empty string if not needed.",
            },
          },
          required: ["ar", "meaning", "state", "term", "explain"],
        },
      },
      patterns: {
        type: "array",
        items: { type: "string" },
        description: "4 or 5 reusable rules for the next ayah",
      },
    },
    required: ["ayahText", "cards", "patterns"],
  },
};

function packFromTool(input, body) {
  const cards = Array.isArray(input?.cards) ? input.cards : [];
  const ayahsRaw = Array.isArray(input?.ayahs) && input.ayahs.length
    ? input.ayahs
    : Array.isArray(body.ayahs)
      ? body.ayahs
      : [];
  return {
    surahNameEn: String(input?.surahNameEn || body.surahName || "").trim(),
    ayahLabel: String(input?.ayahLabel || body.ayahLabel || body.ayah || "").trim(),
    ayahText: String(input?.ayahText || body.ayahText || "").trim(),
    ayahs: ayahsRaw
      .map((a) => ({
        n: Number(a?.n),
        text: String(a?.text || "").trim(),
      }))
      .filter((a) => Number.isFinite(a.n) && a.n >= 1 && a.text),
    cards: cards.map((c) => ({
      ar: String(c?.ar || "").trim(),
      ayah: Number.isFinite(Number(c?.ayah)) ? Number(c.ayah) : null,
      meaning: String(c?.meaning || "").trim(),
      state: ["raf", "nasb", "khafd", "none"].includes(c?.state) ? c.state : "none",
      term: String(c?.term || "").trim(),
      explain: String(c?.explain || "").trim(),
      note: String(c?.note || "").trim(),
    })),
    patterns: (Array.isArray(input?.patterns) ? input.patterns : [])
      .map((p) => String(p || "").trim())
      .filter(Boolean)
      .slice(0, 6),
    source: "claude",
  };
}

async function callClaude(body) {
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
      max_tokens: 16384,
      temperature: 0.25,
      system: systemPrompt(),
      tools: [SUBMIT_TOOL],
      tool_choice: { type: "tool", name: "submit_beginner_guide" },
      messages: [{ role: "user", content: userPrompt(body) }],
    }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const detail = data?.error?.message || JSON.stringify(data).slice(0, 280);
    throw new Error(`Claude: ${detail}`);
  }
  const tool = Array.isArray(data.content)
    ? data.content.find((c) => c.type === "tool_use" && c.name === "submit_beginner_guide")
    : null;
  if (!tool?.input) throw new Error("Claude did not return a guide.");
  const pack = packFromTool(tool.input, body);
  if (!pack.cards.length) throw new Error("Claude returned no word cards.");
  return pack;
}

async function callOpenAI(body) {
  const key = getOpenAIKey();
  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${key}`,
    },
    body: JSON.stringify({
      model: OPENAI_MODEL,
      temperature: 0.25,
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content: `${systemPrompt()}

Return JSON only with keys: surahNameEn, ayahLabel, ayahText, cards, patterns.
Each card: ar, meaning, state (raf|nasb|khafd|none), term, explain, optional note.
Do not call tools.`,
        },
        { role: "user", content: userPrompt(body) },
      ],
    }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const detail = data?.error?.message || JSON.stringify(data).slice(0, 280);
    throw new Error(`OpenAI: ${detail}`);
  }
  let parsed = {};
  try {
    parsed = JSON.parse(data?.choices?.[0]?.message?.content || "{}");
  } catch {
    throw new Error("OpenAI did not return JSON.");
  }
  const pack = packFromTool(parsed, body);
  if (!pack.cards.length) throw new Error("OpenAI returned no word cards.");
  return pack;
}

export async function handleIraabGuideRequest(req, res) {
  if (req.method === "GET") {
    const anthropic = getAnthropicKey();
    const openai = getOpenAIKey();
    const available = Boolean(anthropic || openai);
    json(res, 200, {
      available,
      provider: anthropic ? "claude" : openai ? "openai" : null,
      model: anthropic ? CLAUDE_MODEL : openai ? OPENAI_MODEL : null,
      message: available
        ? "AI can rewrite the beginner page in plainer English."
        : "The beginner page is built from Daʿʿās without a key. Add ANTHROPIC_API_KEY or OPENAI_API_KEY to rewrite it.",
    });
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

  const iraab = String(body.iraab || "").trim();
  if (!iraab) {
    json(res, 400, { error: "Paste the raw Daʿʿās iʿrāb text." });
    return;
  }
  if (!getAnthropicKey() && !getOpenAIKey()) {
    json(res, 200, {
      available: false,
      pack: null,
      message: "Add ANTHROPIC_API_KEY or OPENAI_API_KEY to .env.local to rewrite the page.",
    });
    return;
  }

  try {
    const useClaude = Boolean(getAnthropicKey());
    const pack = useClaude ? await callClaude(body) : await callOpenAI(body);
    json(res, 200, {
      available: true,
      provider: useClaude ? "claude" : "openai",
      model: useClaude ? CLAUDE_MODEL : OPENAI_MODEL,
      pack,
    });
  } catch (err) {
    json(res, 502, { error: err?.message || "Guide model failed." });
  }
}

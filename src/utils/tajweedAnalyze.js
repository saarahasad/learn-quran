const TASHKEEL = /[\u064B-\u065F\u0670\u06D6-\u06ED]/g;
const SHADDA = "\u0651";
const SUKOON = "\u0652";
const TANWEEN = /[\u064B\u064C\u064D]/;
const MADDAH = "\u0653";
const QALQALAH = /[قطبجد]/;
const GHUNNAH_IDGHAM = /^[ينمو]/;
const IDGHAM_NO_GHUNNAH = /^[لر]/;
const IQLAB = /^ب/;

function stripTashkeel(text = "") {
  return String(text).replace(TASHKEEL, "");
}

function hasShadda(text = "") {
  return text.includes(SHADDA);
}

function hasTanween(text = "") {
  return TANWEEN.test(text);
}

function hasSukoon(text = "") {
  return text.includes(SUKOON);
}

function hasMaddah(text = "") {
  return text.includes(MADDAH);
}

/** Rough madd category from uthmani spelling. */
function detectMadd(text = "") {
  if (hasMaddah(text)) return { type: "madd", level: "required", label: "Madd (prolong — watch length)" };
  if (/[\u064E\u064F\u0650][اوي\u0649]/.test(text) || /[اوي\u0649]{2}/.test(stripTashkeel(text))) {
    return { type: "madd", level: "natural", label: "Natural madd (2 counts)" };
  }
  if (/[\u0627\u0648\u064A\u0649]$/.test(stripTashkeel(text))) {
    return { type: "madd", level: "possible", label: "Possible madd at word end" };
  }
  return null;
}

function detectQalqalah(text = "") {
  const bare = stripTashkeel(text);
  if (!bare) return null;
  const last = bare[bare.length - 1];
  if (QALQALAH.test(last) && (hasSukoon(text) || text.endsWith(last))) {
    return { type: "qalqalah", label: "Qalqalah — bounce on the sukūn" };
  }
  return null;
}

function noonSakinRule(text = "", nextWord = "") {
  const bare = stripTashkeel(text);
  if (!bare.endsWith("ن") && !hasTanween(text)) return null;
  const next = stripTashkeel(nextWord);
  if (!next) return { type: "noon", label: "Nūn sakina / tanwīn — apply the noon rule" };
  const first = next[0];
  if (IQLAB.test(first)) return { type: "noon", label: "Ikhlāb — hide the nūn into bā" };
  if (GHUNNAH_IDGHAM.test(first)) return { type: "noon", label: "Idghām with ghunnah" };
  if (IDGHAM_NO_GHUNNAH.test(first)) return { type: "noon", label: "Idghām without ghunnah" };
  if (/[ءهعحخغ]/.test(first)) return { type: "noon", label: "Izhār — clear nūn" };
  return { type: "noon", label: "Ikhfa — hide the nūn with ghunnah" };
}

function meemSakinRule(text = "", nextWord = "") {
  const bare = stripTashkeel(text);
  if (!bare.endsWith("م") || !hasSukoon(text)) return null;
  const next = stripTashkeel(nextWord);
  if (!next) return { type: "meem", label: "Mīm sakina — apply the mīm rule" };
  const first = next[0];
  if (first === "م") return { type: "meem", label: "Idghām shafawī — merge the two mīms" };
  if (first === "ب") return { type: "meem", label: "Ikhlāb shafawī — hide mīm into bā" };
  return { type: "meem", label: "Izhār shafawī — clear mīm" };
}

/** Tajwīd rules suggested for a mushaf word (study reminders + checks). */
export function getWordTajweedRules(wordAr, nextWordAr = "") {
  const rules = [];
  if (!wordAr) return rules;

  if (hasShadda(wordAr)) {
    rules.push({ type: "shadda", label: "Shaddah — double the letter with ghunnah if nūn/mīm" });
  }
  if (hasTanween(wordAr)) {
    rules.push({ type: "tanween", label: "Tanwīn — apply the noon/tanwīn rule at the join" });
  }

  const madd = detectMadd(wordAr);
  if (madd) rules.push(madd);

  const qalq = detectQalqalah(wordAr);
  if (qalq) rules.push(qalq);

  const noon = noonSakinRule(wordAr, nextWordAr);
  if (noon) rules.push(noon);

  const meem = meemSakinRule(wordAr, nextWordAr);
  if (meem) rules.push(meem);

  return rules;
}

function averageWordDuration(whisperWords = []) {
  const durations = whisperWords
    .map((w) => (w.end ?? 0) - (w.start ?? 0))
    .filter((d) => d > 0);
  if (!durations.length) return 0;
  return durations.reduce((sum, d) => sum + d, 0) / durations.length;
}

function whisperDurationForStep(stepIndex, whisperWords, spokenWord) {
  if (!spokenWord || !whisperWords?.length) return null;
  const match = whisperWords.find((w) => w.word?.trim() === spokenWord.trim());
  if (match && match.end > match.start) return match.end - match.start;
  const fallback = whisperWords[stepIndex];
  if (fallback && fallback.end > fallback.start) return fallback.end - fallback.start;
  return null;
}

/**
 * Analyze alignment + whisper timings for tajwīd reminders and likely issues.
 * Uses the same Whisper response — no extra API call.
 */
export function analyzeTajweedRecitation({ steps = [], whisperWords = [] }) {
  const avgDuration = averageWordDuration(whisperWords);
  const wordReports = [];
  const issues = [];
  let maddChecks = 0;
  let maddShort = 0;
  let ruleReminders = 0;

  steps.forEach((step, index) => {
    if (step.status === "extra" || !step.expected?.ar) return;

    const nextExpected = steps.slice(index + 1).find((s) => s.expected?.ar)?.expected?.ar ?? "";
    const rules = getWordTajweedRules(step.expected.ar, nextExpected);
    const report = {
      word: step.expected.ar,
      status: step.status,
      rules,
      notes: [],
    };

    if (rules.length) ruleReminders += 1;

    if (step.status === "missed") {
      for (const rule of rules) {
        issues.push({
          severity: "high",
          word: step.expected.ar,
          rule: rule.label,
          message: `Missed word — ${rule.label.toLowerCase()} was not recited.`,
        });
        report.notes.push(`Missed: ${rule.label}`);
      }
    }

    if (step.status === "wrong") {
      issues.push({
        severity: "high",
        word: step.expected.ar,
        rule: "word",
        message: `Expected “${step.expected.ar}”, heard “${step.spoken}”. Check letters and tajwīd.`,
      });
      report.notes.push("Wrong word — check tajwīd at this position.");
    }

    const maddRule = rules.find((r) => r.type === "madd");
    if (maddRule && step.status === "match" && avgDuration > 0) {
      const duration = whisperDurationForStep(index, whisperWords, step.spoken);
      maddChecks += 1;
      const minExpected = maddRule.level === "required" ? avgDuration * 1.8 : avgDuration * 1.35;
      if (duration != null && duration < minExpected) {
        maddShort += 1;
        issues.push({
          severity: "medium",
          word: step.expected.ar,
          rule: "madd",
          message: `Madd may be short on “${step.expected.ar}” — try holding the vowel longer.`,
        });
        report.notes.push("Madd sounds short.");
      }
    }

    if (step.status === "match" && rules.some((r) => r.type === "shadda")) {
      report.notes.push("Shaddah present — make sure the letter was doubled.");
    }

    wordReports.push(report);
  });

  const tajweedScore =
    issues.length === 0
      ? 100
      : Math.max(0, 100 - issues.filter((i) => i.severity === "high").length * 18 - issues.filter((i) => i.severity === "medium").length * 8);

  return {
    wordReports,
    issues,
    summary: {
      ruleReminders,
      maddChecks,
      maddShort,
      issueCount: issues.length,
      tajweedScore,
    },
  };
}

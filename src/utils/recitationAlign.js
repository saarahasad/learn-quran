import { normalizeAr } from "./arabicMatch.js";

/** Split ASR output into word tokens. */
export function tokenizeArabicTranscript(text = "") {
  return String(text)
    .trim()
    .split(/\s+/)
    .filter(Boolean);
}

function normWord(word) {
  return normalizeAr(word);
}

function wordsMatch(expected, spoken) {
  return normWord(expected) === normWord(spoken);
}

/**
 * Align expected mushaf words against a spoken transcript.
 * Returns summary stats plus per-word alignment steps.
 */
export function alignRecitation(expectedWords, spokenTokens) {
  const expected = expectedWords.map((word) =>
    typeof word === "string" ? { ar: word } : word,
  );
  const spoken = tokenizeArabicTranscript(
    Array.isArray(spokenTokens) ? spokenTokens.join(" ") : spokenTokens,
  );

  const m = expected.length;
  const n = spoken.length;
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  const back = Array.from({ length: m + 1 }, () => Array(n + 1).fill(null));

  for (let i = 1; i <= m; i += 1) {
    dp[i][0] = i;
    back[i][0] = "delete";
  }
  for (let j = 1; j <= n; j += 1) {
    dp[0][j] = j;
    back[0][j] = "insert";
  }

  for (let i = 1; i <= m; i += 1) {
    for (let j = 1; j <= n; j += 1) {
      const matchCost = wordsMatch(expected[i - 1].ar, spoken[j - 1]) ? 0 : 1;
      const substitute = dp[i - 1][j - 1] + matchCost;
      const del = dp[i - 1][j] + 1;
      const ins = dp[i][j - 1] + 1;

      if (substitute <= del && substitute <= ins) {
        dp[i][j] = substitute;
        back[i][j] = matchCost === 0 ? "match" : "substitute";
      } else if (del <= ins) {
        dp[i][j] = del;
        back[i][j] = "delete";
      } else {
        dp[i][j] = ins;
        back[i][j] = "insert";
      }
    }
  }

  const steps = [];
  let i = m;
  let j = n;

  while (i > 0 || j > 0) {
    const op = back[i][j];
    if (op === "match") {
      steps.unshift({
        status: "match",
        expected: expected[i - 1],
        spoken: spoken[j - 1],
      });
      i -= 1;
      j -= 1;
    } else if (op === "substitute") {
      steps.unshift({
        status: "wrong",
        expected: expected[i - 1],
        spoken: spoken[j - 1],
      });
      i -= 1;
      j -= 1;
    } else if (op === "delete") {
      steps.unshift({
        status: "missed",
        expected: expected[i - 1],
        spoken: null,
      });
      i -= 1;
    } else {
      steps.unshift({
        status: "extra",
        expected: null,
        spoken: spoken[j - 1],
      });
      j -= 1;
    }
  }

  const matched = steps.filter((step) => step.status === "match").length;
  const missed = steps.filter((step) => step.status === "missed").length;
  const wrong = steps.filter((step) => step.status === "wrong").length;
  const extra = steps.filter((step) => step.status === "extra").length;
  const accuracy = expected.length ? matched / expected.length : 0;

  return {
    steps,
    matched,
    missed,
    wrong,
    extra,
    accuracy,
    expectedCount: expected.length,
    spokenCount: spoken.length,
    passed: missed === 0 && wrong === 0 && extra === 0 && expected.length > 0,
  };
}

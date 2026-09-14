import { getLocalAyah } from "./hifdhAyahContent.js";
import { buildPromptPack, ensurePromptPack } from "./hifdhPrompts.js";

export const HIFDH_SESSION_STORAGE_KEY = "hifdh_session_state";

/** Al-Baqarah (revelation order 2) — page-based study; word/scene quizzes are skipped. */
export const BAQARAH_SURAH_NUMBER = 2;

export function hasHifdhAyahQuiz(surahNumber) {
  return surahNumber !== BAQARAH_SURAH_NUMBER;
}

export const LISTEN_ROUND_COUNT = 5;
export const SHADOW_ROUND_COUNT = 3;
export const SCAFFOLD_ROUND_COUNT = 7;
export const CHAIN_ROUND_COUNT = 5;
export const JOIN_ONCE_ROUND_COUNT = 1;
export const MIN_AYAT_FOR_RANGE_QUIZ = 2;
export const RANGE_QUIZ_QUESTION_COUNT = 3;

export const ASSESSMENT = {
  SMOOTH: "smooth",
  HESITATED: "hesitated",
  STUMBLED: "stumbled",
};

export const TEST_ASSESSMENT = {
  FIRM: "firm",
  SHAKY: "shaky",
  NEED_MORE: "need-more",
};

export const NIYYAH_COPY = {
  emphasis: "As-salāmu 'alaykum.",
  speech: [
    "Before we open the mushaf — pause with me a moment.",
    "You are about to sit with the words of Allah. Make your intention now: not to finish quickly, not to impress anyone — only to be present, for His sake alone.",
  ],
  bismillah: "بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْم",
  readyLabel: "I am ready",
};

export const OPENING_COPY = {
  quote:
    'The Prophet ﷺ said: "The best of you are those who learn the Quran and teach it."',
  speech: [
    "I want you to hear that and take it to heart — today, that student is you.",
    "Stay with me. We will take these āyāt slowly, with the full attention they deserve.",
  ],
  continueLabel: "I'm ready — let's begin",
};

export const LISTEN_INTRO_COPY = {
  emphasis: "Good. Now — just listen.",
  speech: [
    "Don't try to memorize yet. Let the words settle in your ears first.",
    "Allah's words have a sound before they have a meaning. Give yourself permission to simply hear.",
  ],
  continueLabel: "I'm listening",
};

export const LISTEN_BETWEEN_MESSAGES = {
  2: "Notice the rhythm — where does it rise? Where does it rest? Stay with me; listen once more.",
  3: "Your tongue is already learning, even when you are silent. Trust that.",
  4: "One more time. Listen as if it were the first time you ever heard it.",
};

export const EXPLAIN_INTRO_COPY = {
  emphasis: "Beautiful. Now let it reach your heart.",
  speech: [
    "A word you truly understand is a word your heart will not easily forget.",
    "Read the meaning carefully — I will be right here with you.",
  ],
  continueLabel: "Show me the meaning",
};

export const SHADOW_INTRO_COPY = {
  emphasis: "Now — your turn.",
  speech: [
    "Don't chase perfection. Follow the reciter the way a student follows a teacher in the room.",
    "Your voice and these āyāt are still becoming familiar with each other. That is exactly where you should be.",
  ],
  continueLabel: "I'll follow along",
};

export const SCAFFOLD_INTRO_COPY = {
  emphasis: "Now we remove the support — gently.",
  speech: [
    "What you have heard and what you have read is already inside you.",
    "I am going to ask you to reach for it from memory. Trust yourself.",
  ],
  continueLabel: "I'm ready to try",
};

export const SCAFFOLD_FADE_HINTS = {
  4: "The words are still there — you have heard them. Reach for them.",
  6: "The page looks empty, but you are not. Recite.",
};

export const CHAIN_INTRO_COPY = {
  emphasis: "Now we connect.",
  speech: [
    "In hifdh, the join between two āyāt is almost always the weakest point.",
    "Let us strengthen that link together — slowly, deliberately.",
  ],
  continueLabel: "Let's connect them",
};

export const JOIN_ONCE_INTRO_COPY = {
  emphasis: "Link it to the āyah before.",
  speech: [
    "You recalled this āyah on its own — now flow from the end of the previous one into it.",
    "One clean join. No pause at the seam.",
  ],
  continueLabel: "Join them once",
};

export const RANGE_QUIZ_OFFER_COPY = {
  emphasis: "Quick recall quiz?",
  speech: [
    "You have several āyāt in this passage now. A short quiz on their meanings can show what is solid and what still needs attention.",
    "It is optional — skip if you want to keep moving.",
  ],
  takeLabel: "Take the quiz",
  skipLabel: "Skip for now",
};

export const TEST_INTRO_COPY = {
  emphasis: "Let us see what your heart has held.",
  speech: [
    "I will give you the first words — you carry the rest forward.",
    "Take a breath. Begin when you feel ready. I am listening.",
  ],
  continueLabel: "I'm ready to recite",
};

export const TEST_PLAYBACK_COPY =
  "Listen back to yourself. That is the voice of someone carrying the Book of Allah.";

export const MID_SESSION_COPY = {
  speech: [
    "You are halfway through — and I can see the effort you have put in.",
    "The Prophet ﷺ said Allah is with the one who perseveres.",
    "Don't rush the second half. Give it the same presence you gave the first.",
  ],
  continueLabel: "I'll keep going",
};

export const STUMBLE_INTERVENTION_COPY = {
  emphasis: "It's alright. Stay with me.",
  speech: [
    "Every hāfiz you have ever admired sat exactly where you are sitting now.",
    "Let us try once more — just this āyah. Nothing else in the world matters right now.",
  ],
  continueLabel: "Once more",
};

export const FLAGGED_INTRO_COPY = {
  emphasis: "Let us slow down here.",
  speech: [
    "This word needs a little more attention — listen to it on its own, three times.",
    "Then we will place it back where it belongs. I will wait for you.",
  ],
  continueLabel: "I'll focus on it",
};

export const ASSESS_FEEDBACK = {
  smooth: "Mā shā' Allāh — that is hifdh. That is what I want to hear from you.",
  hesitated:
    "You hesitated — and that is not failure. It is the moment just before it settles. Once more, with me.",
  stumbled:
    "You stumbled — and now we know exactly where to look. That is a gift. Let us give that spot your full attention.",
};

export const ASSESS_PROMPT = "Tell me honestly — how did that feel?";

export const COMPLETE_COPY = {
  praise: "الحمد لله",
  body: [
    "You have given these āyāt your time, your voice, and your attention.",
    "That is not a small thing.",
    "What you memorized today is not stored in your phone.",
    "It is stored somewhere better.",
    "Come back tomorrow. The Quran rewards those who return.",
  ],
  closeLabel: "Close session",
  scheduleLabel: "Schedule revision",
};

export function parseVerseRange(range) {
  const normalized = String(range).replace(/\s/g, "");
  const [startStr, endStr] = normalized.split(/[–-]/);
  const start = Number(startStr);
  const end = Number(endStr ?? startStr);
  if (!Number.isFinite(start)) return [];
  const verses = [];
  for (let verse = start; verse <= end; verse += 1) verses.push(verse);
  return verses;
}

export function createInitialSessionState({
  selectedAyat,
  surahNumber,
  mushafPage,
}) {
  return {
    selectedAyat,
    surahNumber,
    mushafPage,
    currentAyahIndex: 0,
    currentPhase: "niyyah",
    sessionStep: "niyyah",
    currentRound: 0,
    assessmentHistory: {},
    flaggedWords: {},
    scaffoldStumbles: {},
    bonusRound: null,
    rangeQuizQuestions: null,
    rangeQuizIndex: 0,
    ayahQuizQuestions: null,
    ayahQuizIndex: 0,
    midSessionShown: false,
    revisionSchedule: null,
    assessFeedback: null,
    promptPack: buildPromptPack(),
    timeElapsed: 0,
    pausedAt: null,
  };
}

export function readPersistedSessionState() {
  if (typeof window === "undefined") return null;

  try {
    const raw = window.localStorage.getItem(HIFDH_SESSION_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || !Array.isArray(parsed.selectedAyat) || !parsed.selectedAyat.length) {
      return null;
    }
    return {
      scaffoldStumbles: {},
      midSessionShown: false,
      revisionSchedule: null,
      assessFeedback: null,
      bonusRound: null,
      rangeQuizQuestions: null,
      rangeQuizIndex: 0,
      ayahQuizQuestions: null,
      ayahQuizIndex: 0,
      ...parsed,
      promptPack: ensurePromptPack(parsed),
    };
  } catch {
    return null;
  }
}

export function writePersistedSessionState(state) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(HIFDH_SESSION_STORAGE_KEY, JSON.stringify(state));
}

export function clearPersistedSessionState() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(HIFDH_SESSION_STORAGE_KEY);
}

export function sessionMatchesPassage(
  state,
  { selectedAyat, surahNumber, mushafPage },
) {
  if (!state) return false;
  return (
    state.surahNumber === surahNumber &&
    state.mushafPage === mushafPage &&
    arraysEqual(state.selectedAyat, selectedAyat)
  );
}

export function sessionHasProgress(state) {
  if (!state) return false;
  if (state.currentPhase === "complete") return true;
  if (state.currentPhase !== "niyyah") return true;
  if (state.currentAyahIndex > 0) return true;
  if (state.timeElapsed > 5) return true;
  if (Object.keys(state.assessmentHistory ?? {}).length > 0) return true;
  if (Object.keys(state.flaggedWords ?? {}).length > 0) return true;
  if (Object.keys(state.scaffoldStumbles ?? {}).length > 0) return true;
  return false;
}

export function describeSavedSessionProgress(state) {
  const ayah = state.selectedAyat?.[state.currentAyahIndex];
  const phaseLabel = {
    niyyah: "Beginning",
    immersion: "Listening",
    scaffold: "Memory practice",
    quiz: "Āyah quiz",
    join: "Join",
    chain: "Chain link",
    test: "Testing",
    complete: "Finished",
  }[state.currentPhase];

  if (ayah && phaseLabel) return `Āyah ${ayah} · ${phaseLabel}`;
  return phaseLabel ?? "In progress";
}

function arraysEqual(a, b) {
  if (!Array.isArray(a) || !Array.isArray(b) || a.length !== b.length) return false;
  return a.every((value, index) => value === b[index]);
}

/** Estimate per-word highlight windows from total audio duration. */
export function buildWordTimings(words, duration) {
  if (!words?.length || !Number.isFinite(duration) || duration <= 0) return [];

  const weights = words.map((word) => Math.max(1, word.ar?.length ?? 1));
  const total = weights.reduce((sum, weight) => sum + weight, 0);

  let elapsed = 0;
  return words.map((word, index) => {
    const segment = (weights[index] / total) * duration;
    const start = elapsed;
    elapsed += segment;
    return { word, start, end: elapsed };
  });
}

export function activeWordIndexAtTime(timings, currentTime) {
  if (!timings.length) return -1;

  const index = timings.findIndex(
    (segment) => currentTime >= segment.start && currentTime < segment.end,
  );

  if (index >= 0) return index;
  if (currentTime >= timings[timings.length - 1].end) return timings.length - 1;
  return 0;
}

export function listenProgressFraction(round, totalRounds = LISTEN_ROUND_COUNT) {
  if (totalRounds <= 0) return 0;
  return Math.min(1, Math.max(0, round / totalRounds));
}

export function roundProgressFraction(round, totalRounds) {
  if (totalRounds <= 0) return 0;
  return Math.min(1, Math.max(0, (round + 1) / totalRounds));
}

export function blankToken(ar) {
  const len = Math.max(4, Math.min(14, (ar?.length ?? 4) + 2));
  return "·".repeat(len);
}

export function assessmentKey(ayah, round, phase = "scaffold") {
  return `${phase}-${ayah}-${round}`;
}

export function getScaffoldVisibility(round, wordCount, bonusIndices = null) {
  if (bonusIndices?.length) {
    return { mode: "bonus", visibleIndices: bonusIndices };
  }
  if (round <= 2) return { mode: "full" };
  if (round <= 4) {
    return { mode: "hide-end", hideFrom: Math.ceil(wordCount * 0.75) };
  }
  if (round === 5) {
    const showCount = Math.min(4, Math.max(3, Math.ceil(wordCount * 0.2)));
    return { mode: "show-start", showCount };
  }
  return { mode: "blank" };
}

export function getChainVisibility(round, wordCount) {
  if (round <= 1) return { mode: "full" };
  if (round <= 2) return { mode: "hide-end", hideFrom: Math.ceil(wordCount * 0.8) };
  if (round <= 3) return { mode: "hide-end", hideFrom: Math.ceil(wordCount * 0.55) };
  if (round === 4) return { mode: "show-start", showCount: 4 };
  return { mode: "blank" };
}

/** Earlier āyah → later āyah for chain / test pairs. */
export function normalizeChainPair(selectedAyat, currentAyahIndex) {
  const a = selectedAyat[currentAyahIndex - 1];
  const b = selectedAyat[currentAyahIndex];
  if (a == null || b == null) return null;
  return a < b
    ? { prevAyah: a, currentAyah: b }
    : { prevAyah: b, currentAyah: a };
}

/** Visibility focused on the join: tail of previous āyah + head of next. */
export function getChainJoinVisibility(round, prevLen, currLen) {
  const levels = [
    { tail: Math.min(8, prevLen), head: Math.min(8, currLen) },
    { tail: Math.min(8, prevLen), head: Math.min(8, currLen) },
    { tail: Math.min(6, prevLen), head: Math.min(6, currLen) },
    { tail: Math.min(4, prevLen), head: Math.min(4, currLen) },
    { tail: Math.min(2, prevLen), head: Math.min(2, currLen) },
  ];
  const level = levels[Math.min(round, levels.length - 1)] ?? levels[levels.length - 1];

  return {
    mode: "join",
    tailFrom: Math.max(0, prevLen - level.tail),
    headTo: level.head,
  };
}

export function isChainPrevWordVisible(index, prevLen, visibility) {
  if (!visibility || visibility.mode === "blank") return false;
  return index >= visibility.tailFrom && index < prevLen;
}

export function isChainCurrWordVisible(index, visibility) {
  if (!visibility || visibility.mode === "blank") return false;
  return index < visibility.headTo;
}

export function isWordVisible(index, wordCount, visibility) {
  if (!visibility) return true;
  if (visibility.mode === "full") return true;
  if (visibility.mode === "blank") return false;
  if (visibility.mode === "bonus") {
    return visibility.visibleIndices.includes(index);
  }
  if (visibility.mode === "hide-end") {
    return index < visibility.hideFrom;
  }
  if (visibility.mode === "show-start") {
    return index < visibility.showCount;
  }
  return true;
}

export function flaggedIndicesForRound(round, wordCount) {
  const hideFrom = Math.ceil(wordCount * 0.75);
  const indices = [];
  for (let i = hideFrom; i < wordCount; i += 1) indices.push(i);
  return indices.length ? indices : [wordCount - 1];
}

export function shouldShowMidCheckIn(ayahIndex, totalAyat, midSessionShown) {
  if (midSessionShown || totalAyat < 2) return false;
  return ayahIndex === Math.ceil(totalAyat / 2) - 1;
}

/** Āyāt memorized so far in this session (indices 0 … endIndex). */
export function getMemorizedAyahRange(selectedAyat, endIndex) {
  if (!Array.isArray(selectedAyat) || endIndex < 0) return [];
  return selectedAyat.slice(0, endIndex + 1);
}

export function formatAyahRangeLabel(ayat) {
  if (!ayat?.length) return "";
  if (ayat.length === 1) return String(ayat[0]);
  return `${ayat[0]}–${ayat[ayat.length - 1]}`;
}

export function shouldOfferRangeQuiz(state) {
  if (!hasHifdhAyahQuiz(state.surahNumber)) return false;
  const memorized = getMemorizedAyahRange(
    state.selectedAyat,
    state.currentAyahIndex,
  );
  return memorized.length >= MIN_AYAT_FOR_RANGE_QUIZ;
}

function shuffleArray(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function truncateQuizText(text, max = 160) {
  if (!text || text.length <= max) return text;
  return `${text.slice(0, max).trim()}…`;
}

function arabicOpeningSnippet(ar) {
  const words = ar.trim().split(/\s+/);
  if (words.length <= 3) return ar;
  return `${words.slice(0, 3).join(" ")} …`;
}

function pickTranslationDistractors(pool, ayahNumber, count = 2) {
  const others = pool.filter((ayah) => ayah.n !== ayahNumber);
  const picked = shuffleArray(others).slice(0, count).map((ayah) => ayah.en);
  while (picked.length < count && others.length) {
    const fallback = others[picked.length % others.length].en;
    if (!picked.includes(fallback)) picked.push(fallback);
    else break;
  }
  return picked;
}

function pickArabicDistractors(pool, ayahNumber, count = 2) {
  const others = pool.filter((ayah) => ayah.n !== ayahNumber);
  const picked = shuffleArray(others).slice(0, count).map((ayah) => ayah.ar);
  while (picked.length < count && others.length) {
    const fallback = others[picked.length % others.length].ar;
    if (!picked.includes(fallback)) picked.push(fallback);
    else break;
  }
  return picked;
}

/** Build meaning-recall questions for the memorized range. */
export function buildRangeQuizQuestions(
  ayat,
  surahNumber,
  localAyahs = null,
  count = RANGE_QUIZ_QUESTION_COUNT,
) {
  if (!ayat || ayat.length < MIN_AYAT_FOR_RANGE_QUIZ || !surahNumber) return [];

  const ayahData = ayat
    .map((ayahNumber) => {
      const ayah = getLocalAyah(surahNumber, ayahNumber, localAyahs);
      return ayah?.ar && ayah?.en ? { n: ayahNumber, ar: ayah.ar, en: ayah.en } : null;
    })
    .filter(Boolean);

  if (ayahData.length < MIN_AYAT_FOR_RANGE_QUIZ) return [];

  const questionCount = Math.min(
    count,
    Math.max(MIN_AYAT_FOR_RANGE_QUIZ, ayahData.length),
  );
  const questions = [];

  for (const ayah of shuffleArray(ayahData)) {
    if (questions.length >= questionCount) break;
    const distractors = pickTranslationDistractors(ayahData, ayah.n);
    if (distractors.length < 2) continue;

    questions.push({
      id: `tr-${ayah.n}`,
      type: "translation",
      ayahNumber: ayah.n,
      prompt: "What is the meaning of this āyah?",
      arabic: ayah.ar,
      correct: ayah.en,
      options: shuffleArray([ayah.en, ...distractors.slice(0, 2)]),
    });
  }

  for (const ayah of shuffleArray(ayahData)) {
    if (questions.length >= questionCount) break;
    const distractors = pickArabicDistractors(ayahData, ayah.n);
    if (distractors.length < 2) continue;

    questions.push({
      id: `ar-${ayah.n}`,
      type: "arabic",
      ayahNumber: ayah.n,
      prompt: "Which Arabic text matches this meaning?",
      english: truncateQuizText(ayah.en),
      correct: ayah.ar,
      options: shuffleArray([ayah.ar, ...distractors.slice(0, 2)]),
    });
  }

  for (const ayah of shuffleArray(ayahData)) {
    if (questions.length >= questionCount) break;
    const distractors = pickTranslationDistractors(ayahData, ayah.n);
    if (distractors.length < 2) continue;

    questions.push({
      id: `open-${ayah.n}`,
      type: "opening",
      ayahNumber: ayah.n,
      prompt: "Which meaning matches these opening words?",
      arabicSnippet: arabicOpeningSnippet(ayah.ar),
      correct: ayah.en,
      options: shuffleArray([ayah.en, ...distractors.slice(0, 2)]),
    });
  }

  return shuffleArray(questions).slice(0, questionCount);
}

export function revisionDatesFromToday() {
  const base = new Date();
  const addDays = (days) => {
    const next = new Date(base);
    next.setDate(next.getDate() + days);
    return next.toLocaleDateString(undefined, { month: "short", day: "numeric" });
  };
  return { tomorrow: addDays(1), day3: addDays(3), day7: addDays(7) };
}

export function summarizeSession(state) {
  const smooth = Object.values(state.assessmentHistory).filter((v) => v === ASSESSMENT.SMOOTH).length;
  const hesitated = Object.values(state.assessmentHistory).filter(
    (v) => v === ASSESSMENT.HESITATED,
  ).length;
  const stumbled = Object.values(state.assessmentHistory).filter(
    (v) => v === ASSESSMENT.STUMBLED,
  ).length;
  return { smooth, hesitated, stumbled, ayahCount: state.selectedAyat.length };
}

const DEFAULT_AYAH_AUDIO_SEC = 8;

/** Rough pacing for the duration label — not a strict timer. */
const SESSION_PACE = {
  niyyah: 30,
  opening: 25,
  listenIntro: 20,
  listenBetween: 8,
  phaseIntro: 15,
  explainRead: 50,
  scaffoldIntro: 20,
  scaffoldRound: 30,
  chainRound: 28,
  testRecite: 45,
  midCheckin: 25,
  complete: 15,
};

function immersionAyahSeconds(ayahSec = DEFAULT_AYAH_AUDIO_SEC) {
  const listen = LISTEN_ROUND_COUNT * ayahSec + 3 * SESSION_PACE.listenBetween;
  const explain = SESSION_PACE.phaseIntro + SESSION_PACE.explainRead;
  const shadow =
    SESSION_PACE.phaseIntro + SHADOW_ROUND_COUNT * ayahSec * 1.75;
  return listen + explain + shadow;
}

function scaffoldAyahSeconds() {
  return SCAFFOLD_ROUND_COUNT * SESSION_PACE.scaffoldRound;
}

function chainPairSeconds() {
  return (
    SESSION_PACE.phaseIntro +
    CHAIN_ROUND_COUNT * SESSION_PACE.chainRound +
    SESSION_PACE.phaseIntro +
    SESSION_PACE.testRecite
  );
}

export function estimateSessionDurationSeconds(
  selectedAyat,
  { avgAyahSec = DEFAULT_AYAH_AUDIO_SEC } = {},
) {
  const ayahCount = selectedAyat?.length ?? 0;
  if (!ayahCount) return 0;

  let seconds =
    SESSION_PACE.niyyah + SESSION_PACE.opening + SESSION_PACE.listenIntro;

  seconds += ayahCount * immersionAyahSeconds(avgAyahSec);
  seconds += SESSION_PACE.scaffoldIntro;

  for (let i = 0; i < ayahCount; i += 1) {
    seconds += scaffoldAyahSeconds();
    if (i > 0) {
      seconds += SESSION_PACE.chainRound;
    }
    if (shouldShowMidCheckIn(i, ayahCount, false)) {
      seconds += SESSION_PACE.midCheckin;
    }
    if (i + 1 >= MIN_AYAT_FOR_RANGE_QUIZ) {
      seconds += 45;
    }
  }

  seconds += SESSION_PACE.complete;

  return seconds;
}

export function formatSessionDuration(seconds) {
  if (!seconds) return "";
  const roundedMinutes = Math.max(1, Math.round(seconds / 60));
  if (roundedMinutes < 60) return `~${roundedMinutes} min`;
  const hours = Math.floor(roundedMinutes / 60);
  const minutes = roundedMinutes % 60;
  return minutes ? `~${hours} hr ${minutes} min` : `~${hours} hr`;
}

export function formatElapsedDuration(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const total = Math.floor(seconds);
  const hours = Math.floor(total / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const secs = total % 60;
  const paddedSecs = String(secs).padStart(2, "0");
  if (hours > 0) {
    return `${hours}:${String(minutes).padStart(2, "0")}:${paddedSecs}`;
  }
  return `${minutes}:${paddedSecs}`;
}

export function estimateSessionDurationLabel(selectedAyat, options) {
  const ayahCount = selectedAyat?.length ?? 0;
  const duration = formatSessionDuration(
    estimateSessionDurationSeconds(selectedAyat, options),
  );
  if (!duration || ayahCount < 2) return duration;
  return `${duration} · ${ayahCount} āyāt`;
}

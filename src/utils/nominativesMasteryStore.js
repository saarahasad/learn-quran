import {
  CORRECT_INTERVALS,
  MASTERY_NEEDED,
  MISS_INTERVAL,
  NOMINATIVES_CHAPTER_IDS,
  NOMINATIVES_MASTERY_STORAGE_KEY,
} from "../data/nominativesMastery.js";
import { getNominativesQuestions } from "../data/nominativesQuizBank.js";

function emptyState() {
  return { step: 0, questions: {} };
}

export function readNominativesMastery() {
  if (typeof window === "undefined") return emptyState();
  try {
    const parsed = JSON.parse(
      window.localStorage.getItem(NOMINATIVES_MASTERY_STORAGE_KEY) || "null",
    );
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      return emptyState();
    }
    return {
      step: Number.isFinite(parsed.step) ? parsed.step : 0,
      questions:
        parsed.questions && typeof parsed.questions === "object" && !Array.isArray(parsed.questions)
          ? parsed.questions
          : {},
    };
  } catch {
    return emptyState();
  }
}

export function writeNominativesMastery(state) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(NOMINATIVES_MASTERY_STORAGE_KEY, JSON.stringify(state));
}

function defaultRecord() {
  return {
    streak: 0,
    dueAt: 0,
    seen: 0,
    wrong: 0,
    lastResult: null,
  };
}

export function questionRecord(state, questionId) {
  return state.questions[questionId] ?? defaultRecord();
}

export function isQuestionMastered(state, questionId) {
  return questionRecord(state, questionId).streak >= MASTERY_NEEDED;
}

function shuffleInPlace(list) {
  for (let i = list.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
  }
  return list;
}

function intervalAfterCorrect(streakAfter) {
  if (streakAfter >= MASTERY_NEEDED) return Number.POSITIVE_INFINITY;
  return CORRECT_INTERVALS[Math.max(0, streakAfter - 1)] ?? CORRECT_INTERVALS.at(-1);
}

export function applyAnswer(state, questionId, correct) {
  const prev = questionRecord(state, questionId);
  const nextStep = state.step + 1;
  const streak = correct ? Math.min(MASTERY_NEEDED, prev.streak + 1) : 0;
  const dueAt = correct ? nextStep + intervalAfterCorrect(streak) : nextStep + MISS_INTERVAL;

  return {
    step: nextStep,
    questions: {
      ...state.questions,
      [questionId]: {
        streak,
        dueAt,
        seen: prev.seen + 1,
        wrong: prev.wrong + (correct ? 0 : 1),
        lastResult: correct ? "correct" : "wrong",
      },
    },
  };
}

function poolFor(chapterId, track) {
  return getNominativesQuestions().filter((question) => {
    if (chapterId && question.chapterId !== chapterId) return false;
    if (track && question.track !== track) return false;
    return true;
  });
}

/**
 * Pick the next due question. Missed items come back sooner; a just-answered
 * item is never shown immediately (unless it is the only unmastered item).
 */
export function pickNextQuestion(state, { chapterId, track, lastId } = {}) {
  const pool = poolFor(chapterId, track);
  const unmastered = pool.filter((question) => !isQuestionMastered(state, question.id));
  if (!unmastered.length) return null;

  const due = unmastered.filter((question) => questionRecord(state, question.id).dueAt <= state.step);
  const candidates = (due.length ? due : unmastered).slice();

  candidates.sort((a, b) => {
    const ra = questionRecord(state, a.id);
    const rb = questionRecord(state, b.id);
    const missA = ra.lastResult === "wrong" ? 0 : 1;
    const missB = rb.lastResult === "wrong" ? 0 : 1;
    if (missA !== missB) return missA - missB;
    const unseenA = ra.seen === 0 ? 0 : 1;
    const unseenB = rb.seen === 0 ? 0 : 1;
    if (unseenA !== unseenB) return unseenA - unseenB;
    if (ra.dueAt !== rb.dueAt) return ra.dueAt - rb.dueAt;
    return a.id.localeCompare(b.id);
  });

  const withoutLast = lastId ? candidates.filter((question) => question.id !== lastId) : candidates;
  const ranked = withoutLast.length ? withoutLast : candidates;

  const sameTrackPenalty = lastId
    ? getNominativesQuestions().find((question) => question.id === lastId)?.track
    : null;
  if (sameTrackPenalty && ranked.length > 1) {
    const mixed = ranked.filter((question) => question.track !== sameTrackPenalty);
    if (mixed.length) {
      const top = mixed.filter((question) => questionRecord(state, question.id).lastResult === "wrong");
      return (top[0] ?? mixed[0]) ?? ranked[0];
    }
  }

  return ranked[0] ?? null;
}

export function chapterTrackStats(state, chapterId, track) {
  const questions = poolFor(chapterId, track);
  const mastered = questions.filter((question) => isQuestionMastered(state, question.id)).length;
  return { mastered, total: questions.length };
}

export function chapterMastery(state, chapterId) {
  const matn = chapterTrackStats(state, chapterId, "matn");
  const rule = chapterTrackStats(state, chapterId, "rule");
  return {
    chapterId,
    matn,
    rule,
    matnDone: matn.total > 0 && matn.mastered === matn.total,
    ruleDone: rule.total > 0 && rule.mastered === rule.total,
  };
}

export function nominativesSectionStats(state) {
  const chapters = NOMINATIVES_CHAPTER_IDS.map((id) => chapterMastery(state, id));
  const memorized = chapters.filter((chapter) => chapter.matnDone).length;
  const rulesComplete = chapters.filter((chapter) => chapter.ruleDone).length;
  const matnMastered = chapters.reduce((sum, chapter) => sum + chapter.matn.mastered, 0);
  const matnTotal = chapters.reduce((sum, chapter) => sum + chapter.matn.total, 0);
  const ruleMastered = chapters.reduce((sum, chapter) => sum + chapter.rule.mastered, 0);
  const ruleTotal = chapters.reduce((sum, chapter) => sum + chapter.rule.total, 0);
  return {
    chapters,
    memorized,
    chapterCount: chapters.length,
    rulesComplete,
    matnMastered,
    matnTotal,
    ruleMastered,
    ruleTotal,
  };
}

export function shuffleCopy(list) {
  return shuffleInPlace(list.slice());
}

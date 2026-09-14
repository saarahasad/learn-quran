import { buildMatnQuestions } from "./nominativesQuiz/matnQuestions.js";
import { buildRuleQuestions } from "./nominativesQuiz/ruleQuestions.js";
import { isAnswerCorrect, correctAnswerLabel } from "./nominativesQuiz/helpers.js";

let cached = null;

export function getNominativesQuestions() {
  if (!cached) {
    cached = [...buildMatnQuestions(), ...buildRuleQuestions()];
  }
  return cached;
}

export function questionsForChapter(chapterId, track) {
  return getNominativesQuestions().filter((question) => {
    if (question.chapterId !== chapterId) return false;
    if (track && question.track !== track) return false;
    return true;
  });
}

export function getQuestionById(id) {
  return getNominativesQuestions().find((question) => question.id === id) ?? null;
}

export { isAnswerCorrect, correctAnswerLabel };

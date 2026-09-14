import { AJRUMIYYAH_CHAPTERS } from "../ajrumiyyahCourse.js";
import { NOMINATIVES_TOPICS } from "../nominativesMastery.js";

export function topicMeta(chapterId, topicId) {
  const topic = NOMINATIVES_TOPICS[chapterId]?.find((item) => item.id === topicId);
  return {
    topicId,
    topicAr: topic?.ar ?? topicId,
    topicEn: topic?.en ?? "",
  };
}

export function option(id, ar, en) {
  return { id, ar, en };
}

export function cloze(spec) {
  return { type: "cloze", track: spec.track ?? "rule", ...spec };
}

export function applyQ(spec) {
  return { type: "apply", track: "rule", ...spec };
}

export function listQ(spec) {
  return { type: "list", track: spec.track ?? "rule", ...spec };
}

export function matchQ(spec) {
  return { type: "match", track: "rule", ...spec };
}

export function distinguish(spec) {
  return { type: "distinguish", track: "rule", ...spec };
}

export function recall(spec) {
  return { type: "recall", track: "matn", ...spec };
}

export function chapterLine(chapterId, lineIdx) {
  const chapter = AJRUMIYYAH_CHAPTERS.find((item) => item.id === chapterId);
  const line = chapter?.lines?.[lineIdx];
  if (!line) return { ar: "", en: "" };
  return { ar: line[0], en: line[1], kind: line[2] };
}

export function tokenizeAr(text) {
  return String(text)
    .split(/\s+/)
    .map((token) => token.replace(/^[،,:؛.]+|[،,:؛.]+$/g, ""))
    .filter(Boolean);
}

export function stemWithBlank(source, blank) {
  if (!source.includes(blank)) return source;
  return source.replace(blank, "______");
}

export function arraysEqual(a, b) {
  if (!Array.isArray(a) || !Array.isArray(b) || a.length !== b.length) return false;
  return a.every((item, index) => item === b[index]);
}

export function setsEqual(a, b) {
  const left = new Set(Array.isArray(a) ? a : []);
  const right = new Set(Array.isArray(b) ? b : []);
  if (left.size !== right.size) return false;
  for (const item of left) {
    if (!right.has(item)) return false;
  }
  return true;
}

export function isAnswerCorrect(question, response) {
  if (!question) return false;
  if (question.type === "cloze" || question.type === "apply" || question.type === "distinguish") {
    return response === question.answer;
  }
  if (question.type === "recall") {
    return arraysEqual(response, question.correctOrder);
  }
  if (question.type === "list") {
    return setsEqual(response, question.answer);
  }
  if (question.type === "match") {
    const pairs = question.pairs || {};
    const given = response && typeof response === "object" ? response : {};
    return Object.keys(pairs).every((leftId) => given[leftId] === pairs[leftId]);
  }
  return false;
}

export function correctAnswerLabel(question) {
  if (!question) return "";
  if (question.type === "cloze" || question.type === "apply" || question.type === "distinguish") {
    const found = question.options?.find((item) => item.id === question.answer);
    return found ? [found.ar, found.en].filter(Boolean).join(" — ") : String(question.answer);
  }
  if (question.type === "recall") {
    return question.tokens
      ?.slice()
      .sort(
        (a, b) =>
          question.correctOrder.indexOf(a.id) - question.correctOrder.indexOf(b.id),
      )
      .map((token) => token.ar)
      .join(" ");
  }
  if (question.type === "list") {
    const wanted = new Set(question.answer);
    return question.choices
      ?.filter((item) => wanted.has(item.id))
      .map((item) => item.ar || item.en)
      .join("، ");
  }
  if (question.type === "match") {
    return (question.left || [])
      .map((left) => {
        const right = question.right?.find((item) => item.id === question.pairs[left.id]);
        return `${left.ar || left.en} → ${right?.ar || right?.en || ""}`;
      })
      .join("; ");
  }
  return "";
}

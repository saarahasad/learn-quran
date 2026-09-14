/**
 * Ground the iʿrāb tutor in the student's own Tuḥfat commentary
 * and in notes they save while studying.
 */

import { TUHFAT_BLOCKS_AFTER } from "../data/ajrumiyyahTuhfatCommentary.js";
import { extractScoreTerms, stripArabicMarks } from "./iraabDaas.js";

const MEMORY_KEY = "ajr-iraab-tutor-memory-v1";
const MAX_NOTE_CHARS = 420;
const MAX_TOTAL_CHARS = 900;

function bare(text) {
  return stripArabicMarks(text).replace(/\s+/g, " ").trim();
}

export function blocksForLine(chapterId, lineIndex) {
  const map = TUHFAT_BLOCKS_AFTER[chapterId];
  if (!map) return [];
  const keys = Object.keys(map)
    .map(Number)
    .filter((n) => Number.isFinite(n))
    .sort((a, b) => a - b);
  if (!keys.length) return [];
  let chosen = keys[0];
  for (const k of keys) {
    if (k <= Number(lineIndex)) chosen = k;
    else break;
  }
  return map[chosen] || map[String(chosen)] || [];
}

function teachingBlocks(blocks) {
  return (blocks || []).filter((b) => {
    const ar = String(b.ar || "").trim();
    if (ar.startsWith("[")) return false;
    if (b.label === "قَالَ") return false;
    return Boolean(b.en || b.ar);
  });
}

function clip(text, max) {
  const t = String(text || "").replace(/\s+/g, " ").trim();
  if (t.length <= max) return t;
  return `${t.slice(0, max).replace(/\s+\S*$/, "")}…`;
}

function blocksToPlain(blocks, maxChars) {
  const parts = [];
  for (const b of teachingBlocks(blocks).slice(0, 10)) {
    if (b.en) parts.push(b.en.trim());
  }
  return clip(parts.join("\n\n"), maxChars);
}

function sectionTitle(blocks) {
  const first = blocks?.[0];
  const ar = String(first?.ar || "").trim();
  if (!ar.startsWith("[")) return "";
  return ar.replace(/^\[|\]$/g, "").trim();
}

/**
 * Tuḥfat sharḥ for the matched Ājurrūmiyyah lines.
 */
export function commentaryForPoemHits(poemHits = []) {
  const out = [];
  let used = 0;
  for (const hit of poemHits) {
    if (used >= MAX_TOTAL_CHARS) break;
    const blocks = blocksForLine(hit.chapterId, hit.lineIndex);
    const text = blocksToPlain(blocks, MAX_NOTE_CHARS);
    if (!text) continue;
    const room = Math.max(480, MAX_TOTAL_CHARS - used);
    const slice = clip(text, room);
    used += slice.length;
    out.push({
      chapterId: hit.chapterId,
      chapterEn: hit.chapterEn,
      chapterAr: hit.chapterAr,
      lineIndex: hit.lineIndex,
      title: sectionTitle(blocks),
      href: hit.href,
      text: slice,
    });
  }
  return out;
}

export function loadTutorMemory() {
  try {
    const raw = JSON.parse(localStorage.getItem(MEMORY_KEY) || "null");
    if (!raw || !Array.isArray(raw.notes)) return [];
    return raw.notes.filter((n) => n && String(n.note || "").trim());
  } catch {
    return [];
  }
}

export function saveTutorMemoryNote({ word, analysis, note, terms }) {
  const text = String(note || "").trim();
  if (!text) return loadTutorMemory();
  const next = {
    id: `m-${Date.now()}`,
    word: String(word || "").trim(),
    analysis: String(analysis || "").trim(),
    note: text.slice(0, 1200),
    terms: (terms?.length ? terms : extractScoreTerms(analysis)).slice(0, 8),
    at: Date.now(),
  };
  const notes = [next, ...loadTutorMemory().filter((n) => n.note !== next.note)].slice(0, 80);
  try {
    localStorage.setItem(MEMORY_KEY, JSON.stringify({ notes }));
  } catch {
    /* ignore quota */
  }
  return notes;
}

export function memoryNotesForAnalysis(analysis) {
  const hay = bare(analysis);
  if (!hay) return [];
  const notes = loadTutorMemory();
  const hits = [];
  for (const note of notes) {
    const terms = Array.isArray(note.terms) ? note.terms : [];
    const matched = terms.filter((t) => hay.includes(bare(t)));
    if (matched.length || (note.analysis && hay.includes(bare(note.analysis).slice(0, 24)))) {
      hits.push({ ...note, matched });
    }
  }
  return hits.slice(0, 6);
}

export function gatherTutorKnowledge({ analysis, poemHits }) {
  const commentary = commentaryForPoemHits(poemHits);
  const memory = memoryNotesForAnalysis(analysis);
  return { commentary, memory };
}

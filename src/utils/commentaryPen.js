/** Text-color ink for Ajrumiyyah commentary (not a background highlighter). */

export const PEN_STORAGE_KEY = "ajr_commentary_pen_v1";

export const PEN_COLORS = [
  {
    id: "must",
    label: "Must memorize",
    short: "Memorize",
    hint: "Core definitions and rules to know by heart",
  },
  {
    id: "rec",
    label: "Highly recommended",
    short: "Recommended",
    hint: "Examples and supporting lines worth keeping",
  },
  {
    id: "imp",
    label: "Very important",
    short: "Important",
    hint: "Notes, faʾidahs, and key labels",
  },
];

export const PEN_CLEAR = "clear";

export function hashHtml(html) {
  const s = String(html ?? "");
  let h = 2166136261;
  for (let i = 0; i < s.length; i += 1) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return (h >>> 0).toString(16);
}

export function upsertMark(marks, next) {
  const incoming = Array.isArray(marks) ? marks : [];
  if (!next || next.start >= next.end) return normalizeMarks(incoming);

  const cut = [];
  for (const mark of incoming) {
    if (mark.end <= next.start || mark.start >= next.end) {
      cut.push(mark);
      continue;
    }
    if (mark.start < next.start) cut.push({ ...mark, end: next.start });
    if (mark.end > next.end) cut.push({ ...mark, start: next.end });
  }

  if (next.color && next.color !== PEN_CLEAR) {
    cut.push({ start: next.start, end: next.end, color: next.color });
  }

  return normalizeMarks(cut);
}

export function normalizeMarks(marks) {
  const sorted = [...(marks || [])]
    .filter((m) => m && m.color && m.start < m.end)
    .sort((a, b) => a.start - b.start || a.end - b.end);

  const merged = [];
  for (const mark of sorted) {
    const last = merged[merged.length - 1];
    if (last && last.color === mark.color && last.end >= mark.start) {
      last.end = Math.max(last.end, mark.end);
    } else {
      merged.push({ start: mark.start, end: mark.end, color: mark.color });
    }
  }
  return merged;
}

function readStore() {
  if (typeof window === "undefined") return {};
  try {
    const parsed = JSON.parse(window.localStorage.getItem(PEN_STORAGE_KEY) || "{}");
    return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
  } catch {
    return {};
  }
}

function writeStore(store) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(PEN_STORAGE_KEY, JSON.stringify(store));
}

export function loadPenMarks(storageKey, html) {
  if (!storageKey) return [];
  const saved = readStore()[storageKey];
  if (!saved || saved.hash !== hashHtml(html) || !Array.isArray(saved.marks)) return [];
  return normalizeMarks(saved.marks);
}

export function savePenMarks(storageKey, html, marks) {
  if (!storageKey) return;
  const store = readStore();
  const next = normalizeMarks(marks);
  if (next.length === 0) {
    delete store[storageKey];
  } else {
    store[storageKey] = { hash: hashHtml(html), marks: next };
  }
  writeStore(store);
}

function isSkippableTextNode(node) {
  const el = node.parentElement;
  if (!el) return true;
  return Boolean(el.closest("button, script, style, textarea, input, .ajr-pen-popover"));
}

export function textLength(root) {
  if (!root) return 0;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let length = 0;
  let node;
  while ((node = walker.nextNode())) length += node.nodeValue.length;
  return length;
}

function textNodeStart(root, target) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let total = 0;
  let node;
  while ((node = walker.nextNode())) {
    if (node === target) return total;
    total += node.nodeValue.length;
  }
  return total;
}

function isAtOrAfterPoint(textNode, container, offset) {
  if (container.nodeType === Node.TEXT_NODE) {
    return textNode === container;
  }
  const child = container.childNodes[offset];
  if (!child) {
    if (container.contains(textNode) && textNode !== container) return false;
    return Boolean(
      container.compareDocumentPosition(textNode) & Node.DOCUMENT_POSITION_FOLLOWING,
    );
  }
  if (child === textNode || child.contains?.(textNode)) return true;
  return Boolean(
    child.compareDocumentPosition(textNode) & Node.DOCUMENT_POSITION_FOLLOWING,
  );
}

export function pointToOffset(root, container, offset) {
  if (!root || !container) return 0;
  if (container.nodeType === Node.TEXT_NODE) {
    return textNodeStart(root, container) + Math.max(0, offset);
  }
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let total = 0;
  let node;
  while ((node = walker.nextNode())) {
    if (isAtOrAfterPoint(node, container, offset)) break;
    total += node.nodeValue.length;
  }
  return total;
}

export function selectionOffsets(root) {
  const sel = window.getSelection();
  if (!sel || sel.rangeCount === 0 || sel.isCollapsed) return null;
  const range = sel.getRangeAt(0);
  if (!root.contains(range.commonAncestorContainer)) return null;
  const start = pointToOffset(root, range.startContainer, range.startOffset);
  const end = pointToOffset(root, range.endContainer, range.endOffset);
  if (start === end) return null;
  return start < end ? { start, end } : { start: end, end: start };
}

function locateOffset(root, target) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let remaining = Math.max(0, target);
  let node;
  let last = null;
  while ((node = walker.nextNode())) {
    last = node;
    const len = node.nodeValue.length;
    if (remaining <= len) return { node, offset: remaining };
    remaining -= len;
  }
  if (!last) return null;
  return { node: last, offset: last.nodeValue.length };
}

function unwrapMarks(root) {
  root.querySelectorAll("[data-ajr-pen]").forEach((mark) => {
    const parent = mark.parentNode;
    if (!parent) return;
    while (mark.firstChild) parent.insertBefore(mark.firstChild, mark);
    parent.removeChild(mark);
    parent.normalize();
  });
}

function wrapTextPortion(textNode, start, end, color) {
  if (!textNode || start >= end || isSkippableTextNode(textNode)) return;
  let node = textNode;
  if (start > 0) node = node.splitText(start);
  const length = end - start;
  if (node.length > length) node.splitText(length);
  if (!node.nodeValue) return;

  const span = document.createElement("span");
  span.className = `ajr-pen-mark ajr-pen-mark--${color}`;
  span.dataset.ajrPen = color;
  node.parentNode.insertBefore(span, node);
  span.appendChild(node);
}

function wrapOffsets(root, start, end, color) {
  if (start >= end) return;
  const startLoc = locateOffset(root, start);
  const endLoc = locateOffset(root, end);
  if (!startLoc || !endLoc) return;

  if (startLoc.node === endLoc.node) {
    wrapTextPortion(startLoc.node, startLoc.offset, endLoc.offset, color);
    return;
  }

  const nodes = [];
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let seenStart = false;
  let node;
  while ((node = walker.nextNode())) {
    if (node === startLoc.node) {
      seenStart = true;
      nodes.push(node);
      continue;
    }
    if (!seenStart) continue;
    nodes.push(node);
    if (node === endLoc.node) break;
  }

  for (let i = nodes.length - 1; i >= 0; i -= 1) {
    const current = nodes[i];
    if (current === startLoc.node) {
      wrapTextPortion(current, startLoc.offset, current.nodeValue.length, color);
    } else if (current === endLoc.node) {
      wrapTextPortion(current, 0, endLoc.offset, color);
    } else {
      wrapTextPortion(current, 0, current.nodeValue.length, color);
    }
  }
}

export function applyPenMarks(root, html, marks) {
  if (!root) return;
  root.innerHTML = html || "";
  const sorted = normalizeMarks(marks).sort((a, b) => b.start - a.start);
  for (const mark of sorted) {
    wrapOffsets(root, mark.start, mark.end, mark.color);
  }
}

const inkHtmlCache = new Map();

/** Bake offset ink into HTML so it ships in the source, not only localStorage. */
export function htmlWithPenMarks(html, marks) {
  if (!html || !marks?.length) return html || "";
  if (typeof document === "undefined") return html;
  const cacheKey = `${hashHtml(html)}:${JSON.stringify(marks)}`;
  const cached = inkHtmlCache.get(cacheKey);
  if (cached != null) return cached;
  const root = document.createElement("div");
  applyPenMarks(root, html, marks);
  const next = root.innerHTML;
  inkHtmlCache.set(cacheKey, next);
  return next;
}

export function markOffsetsFromElement(root, el) {
  if (!root || !el || !root.contains(el)) return null;
  const range = document.createRange();
  range.selectNodeContents(el);
  const start = pointToOffset(root, range.startContainer, range.startOffset);
  const end = pointToOffset(root, range.endContainer, range.endOffset);
  if (start === end) return null;
  return { start, end };
}

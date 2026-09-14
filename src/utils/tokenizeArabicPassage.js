/** Shared light tokenizer for interactive Tuḥfat passage drills */

export function tokenizeArabicPassage(text) {
  const raw = String(text || "")
    .replace(/[﴿﴾«»""'']/g, " ")
    .replace(/[*.…]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  if (!raw) return [];

  return raw
    .split(" ")
    .map((display, index) => {
      const bare = display.replace(/^[\s،,؛;:.!?؟\-–—()]+|[\s،,؛;:.!?؟\-–—()]+$/g, "");
      return { index, display, bare };
    })
    .filter((t) => t.bare);
}

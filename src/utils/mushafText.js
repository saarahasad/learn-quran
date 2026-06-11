const ARABIC_DIGITS = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];

export function toArabicNum(n) {
  return String(n)
    .split("")
    .map((d) => ARABIC_DIGITS[+d] ?? d)
    .join("");
}

const RED_PATTERNS = [
  /ٱللَّهِ|اللَّهِ|ٱللَّهُ|اللَّهُ|بِٱللَّهِ|بِاللَّهِ|وَٱللَّهُ|وَاللَّهُ|لِلَّهِ|لله/gu,
  /رَبِّكَ|رَبِّ|رَبّ/gu,
  /(?<=\s|^)هُوَ(?=\s|$|[،.])/gu,
];

export function highlightMushafText(text) {
  if (!text) return "";
  const spans = [];
  let last = 0;
  const hits = [];

  for (const re of RED_PATTERNS) {
    re.lastIndex = 0;
    let m;
    while ((m = re.exec(text)) !== null) {
      hits.push({ start: m.index, end: m.index + m[0].length, text: m[0] });
    }
  }

  hits.sort((a, b) => a.start - b.start || b.end - a.end);
  const merged = [];
  for (const h of hits) {
    if (merged.length && h.start < merged[merged.length - 1].end) continue;
    merged.push(h);
  }

  for (const h of merged) {
    if (h.start > last) spans.push(escapeHtml(text.slice(last, h.start)));
    spans.push(`<span class="mushaf-red">${escapeHtml(h.text)}</span>`);
    last = h.end;
  }
  if (last < text.length) spans.push(escapeHtml(text.slice(last)));
  return spans.join("");
}

function escapeHtml(s) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

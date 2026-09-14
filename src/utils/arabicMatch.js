/** Strip tashkīl and normalise alef / yā for fuzzy Arabic matching. */
export function normalizeAr(text = "") {
  return String(text)
    .replace(/[\u064B-\u065F\u0670\u06D6-\u06ED\u06DF-\u06ED]/g, "")
    .replace(/[\u0622\u0623\u0625\u0671]/g, "\u0627")
    .replace(/\u0649/g, "\u064A")
    .replace(/\u0629/g, "\u0647")
    .replace(/\u0670/g, "")
    .trim();
}

export function wordMatchesRule(textUthmani, rule) {
  const norm = normalizeAr(textUthmani);

  if (rule.matchForms?.length) {
    return rule.matchForms.some((form) => normalizeAr(form) === norm);
  }

  if (rule.matchIncludes) {
    return norm.includes(normalizeAr(rule.matchIncludes));
  }

  if (rule.ar) {
    const target = normalizeAr(rule.ar);
    if (target.length <= 2) {
      return norm === target || norm.startsWith(target);
    }
    return norm.includes(target);
  }

  return false;
}

export function ruleMatchesVerse(rule, ayah) {
  if (rule.verses?.length) return rule.verses.includes(ayah);
  if (rule.verse != null) return rule.verse === ayah;
  return true;
}

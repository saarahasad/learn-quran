/** Progressive modes for mushaf page layout recall. */

export const PAGE_MEMORY_MODES = [
  {
    id: "full",
    label: "Study",
    short: "Full page",
    description: "See the whole page — use as reference before testing yourself.",
    hideRatio: 0,
  },
  {
    id: "hints",
    label: "Hints",
    short: "~25% words",
    description: "A few scattered words covered — recall what sits in each gap.",
    hideRatio: 0.25,
  },
  {
    id: "words",
    label: "Words",
    short: "~55% words",
    description: "Most words gone — rebuild the page from memory, word by word.",
    hideRatio: 0.55,
  },
  {
    id: "verses",
    label: "Verses",
    short: "Whole āyāt",
    description: "Entire āyāt blanked — remember which verse starts where on the page.",
    hideRatio: null,
    type: "verses",
  },
  {
    id: "blank",
    label: "Blank",
    short: "All words",
    description: "Full visual recall — picture the page in your mind, then peek.",
    hideRatio: 1,
  },
];

export function getPageMemoryMode(modeId) {
  return PAGE_MEMORY_MODES.find((mode) => mode.id === modeId) ?? PAGE_MEMORY_MODES[0];
}

function hashSeed(page, modeId, seed) {
  let hash = page * 7919 + seed * 104729;
  for (let i = 0; i < modeId.length; i += 1) {
    hash = (hash * 31 + modeId.charCodeAt(i)) >>> 0;
  }
  return hash;
}

function mulberry32(seed) {
  let state = seed >>> 0;
  return () => {
    state = (state + 0x6d2b79f5) >>> 0;
    let t = state;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffleWithSeed(items, seed) {
  const rng = mulberry32(seed);
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rng() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function uniqueAyahs(words) {
  return [...new Set(words.map((word) => word.ayah))].sort((a, b) => a - b);
}

/**
 * @returns {{ hiddenWordKeys: Set<string>, hiddenAyahs: Set<number> }}
 */
export function computePageMemoryBlanks(words, page, modeId, seed = 1) {
  const mode = getPageMemoryMode(modeId);
  const hiddenWordKeys = new Set();
  const hiddenAyahs = new Set();

  if (!words.length || mode.id === "full") {
    return { hiddenWordKeys, hiddenAyahs };
  }

  const rngSeed = hashSeed(page, modeId, seed);

  if (mode.type === "verses") {
    const ayahs = uniqueAyahs(words);
    const shuffled = shuffleWithSeed(ayahs, rngSeed);
    const hideCount = Math.max(1, Math.ceil(ayahs.length * 0.5));
    for (const ayah of shuffled.slice(0, hideCount)) {
      hiddenAyahs.add(ayah);
    }
    for (const word of words) {
      if (hiddenAyahs.has(word.ayah)) hiddenWordKeys.add(word.location);
    }
    return { hiddenWordKeys, hiddenAyahs };
  }

  const ratio = mode.hideRatio ?? 0;
  const hideCount = Math.min(words.length, Math.max(0, Math.round(words.length * ratio)));
  const locations = shuffleWithSeed(
    words.map((word) => word.location),
    rngSeed,
  );
  for (const location of locations.slice(0, hideCount)) {
    hiddenWordKeys.add(location);
  }

  return { hiddenWordKeys, hiddenAyahs };
}

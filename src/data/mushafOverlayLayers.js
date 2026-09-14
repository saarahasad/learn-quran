/**
 * Per-page mushaf overlay layers (toggles) for Baqarah study pages.
 * Word layers use matchIncludes / matchForms for on-text highlights.
 */

import { getBaqarahGuideByMushafPage } from "./baqarahPageGuides.js";

export const BAQARAH_STUDY_MUSHAF_PAGES = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const LETTER_TOPIC_TONES = { A: "amber", B: "teal" };

const COLOR_TOPIC_TONES = {
  rose: "rose",
  amber: "amber",
  teal: "teal",
  green: "green",
};

function parseVerseRange(range) {
  const normalized = String(range).replace(/\s/g, "");
  const [startStr, endStr] = normalized.split(/[–-]/);
  const start = Number(startStr);
  const end = Number(endStr ?? startStr);
  if (!Number.isFinite(start)) return [];
  const verses = [];
  for (let verse = start; verse <= end; verse += 1) verses.push(verse);
  return verses;
}

export function guideTopicsToHighlightRules(topics = []) {
  return topics
    .map((topic) => {
      const verses = parseVerseRange(topic.verseRange);
      if (!verses.length) return null;

      const tone =
        LETTER_TOPIC_TONES[topic.id] ??
        COLOR_TOPIC_TONES[topic.color] ??
        "slate";
      const label = topic.label ?? topic.id;

      return {
        verses,
        tone,
        ayahBand: true,
        highlightStyle: "fill",
        summary: topic.summary || `${label} (verses ${topic.verseRange})`,
      };
    })
    .filter(Boolean);
}

function topicBubbleTitle(topic) {
  const label = topic.label ?? topic.id;
  if (topic.id === "A" || topic.id === "B") return `${topic.id} · ${label}`;
  return label;
}

export function guideTopicsToBubbleItems(topics = []) {
  const bubbles = [];

  for (const topic of topics) {
    const tone =
      LETTER_TOPIC_TONES[topic.id] ??
      COLOR_TOPIC_TONES[topic.color] ??
      "slate";

    if (topic.subTopics?.length) {
      for (const sub of topic.subTopics) {
        const verses = parseVerseRange(sub.verses);
        if (!verses.length) continue;
        bubbles.push({
          verse: verses[0],
          tone,
          summary: sub.label,
          detail: sub.detail,
        });
      }
      continue;
    }

    const verses = parseVerseRange(topic.verseRange);
    if (!verses.length) continue;

    const title = topicBubbleTitle(topic);
    const rangeSuffix = verses.length > 1 ? ` (${topic.verseRange})` : "";

    bubbles.push({
      verse: verses[0],
      tone,
      summary: `${title}${rangeSuffix}`,
      detail: topic.summary,
    });
  }

  return bubbles;
}

export function topicsMapRulesToBubbleItems(rules = []) {
  return rules
    .map((rule) => {
      const verse = rule.verses?.[0] ?? rule.verse;
      if (verse == null) return null;
      return {
        verse,
        tone: rule.tone,
        summary: rule.summary,
      };
    })
    .filter(Boolean);
}

export function getTopicsMapBubbleItems(guide, layer) {
  const guideBubbles = guideTopicsToBubbleItems(guide?.topics);
  if (guideBubbles.length) return guideBubbles;
  return topicsMapRulesToBubbleItems(layer.items ?? []);
}

function topicsMapLayerFromGuide(guide) {
  const items = guideTopicsToHighlightRules(guide?.topics);
  if (!items.length) return null;

  return {
    id: "topicsMap",
    label: "Topics map",
    swatch: "green-fill",
    source: "guideTopics",
  };
}

/** @type {Record<number, import('./mushafOverlayLayers.js').MushafOverlayLayer[]>} */
export const MUSHAF_OVERLAY_LAYERS = {
  3: [
    {
      id: "topicsMap",
      label: "Topics map",
      swatch: "rose-fill",
      items: [
        {
          verses: [6, 7],
          tone: "rose",
          ayahBand: true,
          highlightStyle: "fill",
          summary: "The disbelievers (verses 6–7)",
        },
        {
          verses: [8, 9, 10, 11, 12, 13, 14, 15, 16],
          tone: "slate",
          ayahBand: true,
          highlightStyle: "fill",
          summary: "The hypocrites (verses 8–16)",
        },
      ],
    },
    {
      id: "verse7Sealed",
      label: "Allah has sealed (v.7)",
      swatch: "green-fill",
      items: [
        { verse: 7, tone: "green", matchIncludes: "قُلُوب", highlightStyle: "fill" },
        { verse: 7, tone: "green", matchIncludes: "سَمْع", highlightStyle: "fill" },
        { verse: 7, tone: "green", matchIncludes: "أَبْصَار", highlightStyle: "fill" },
        { verse: 7, tone: "gray", matchIncludes: "غِشَ", highlightStyle: "outline" },
        { verse: 7, tone: "rose", matchIncludes: "عَذَاب", highlightStyle: "fill" },
      ],
    },
    {
      id: "pageBounds",
      label: "Beginning & ending of the page",
      swatch: "sand-fill",
      items: [
        {
          pageBound: "start",
          wordCount: 3,
          phraseBand: true,
          tone: "sand",
          highlightStyle: "fill",
          summary: "Page beginning",
        },
        {
          pageBound: "end",
          verse: 15,
          wordCount: 3,
          phraseBand: true,
          phraseTogether: true,
          tone: "sand",
          highlightStyle: "fill",
          summary: "Page ending (verse 15)",
        },
      ],
    },
    {
      id: "verseBeginning",
      label: "The beginning of each verse",
      swatch: "green-fill",
      items: [
        {
          verseStart: true,
          wordCount: 3,
          phraseBand: true,
          tone: "green",
          highlightStyle: "fill",
        },
      ],
    },
    {
      id: "gharib",
      label: "Unfamiliar word (Gharib)",
      swatch: "rose-circle",
      source: "gharibWords",
    },
    {
      id: "repeatedWords",
      label: "Repeated words",
      swatch: "blue-outline",
      items: [
        { verse: 7, tone: "blue", matchForms: ["عَلَىٰ"], highlightStyle: "outline" },
        { verse: 8, tone: "blue", matchForms: ["بِٱللَّهِ", "بِٱلْيَوْمِ", "بِمُؤْمِنِينَ"], highlightStyle: "outline" },
        { verse: 10, tone: "blue", matchIncludes: "مَرَض", highlightStyle: "outline" },
        { verse: 11, tone: "blue", matchForms: ["قَالُوا"], highlightStyle: "outline" },
        { verse: 12, tone: "blue", matchForms: ["هُمُ", "يَشْعُرُونَ"], highlightStyle: "outline" },
        { verse: 13, tone: "blue", matchForms: ["كَمَا", "ءَامَنَ", "قَالُوا"], highlightStyle: "outline" },
        { verse: 13, tone: "blue", matchIncludes: "ٱلسُّفَهَ", highlightStyle: "outline" },
        { verse: 14, tone: "blue", matchForms: ["قَالُوا"], highlightStyle: "outline" },
      ],
    },
  ],
  4: [
    {
      id: "topicsMap",
      label: "Topics map",
      swatch: "green-fill",
      items: [
        {
          verses: [17, 18, 19, 20],
          tone: "amber",
          ayahBand: true,
          highlightStyle: "fill",
          summary: "The hypocrites — two parables (verses 17–20)",
        },
        {
          verses: [21, 22, 23, 24],
          tone: "teal",
          ayahBand: true,
          highlightStyle: "fill",
          summary: "Allah's call — worship, proofs, challenge (verses 21–24)",
        },
      ],
    },
    {
      id: "fearPunishment",
      label: "Fear / punishment",
      swatch: "rose-fill",
      items: [
        { verse: 24, tone: "rose", matchIncludes: "ٱلنَّار", highlightStyle: "fill" },
        { verse: 24, tone: "rose", matchForms: ["ٱتَّقُوا۟", "ٱتَّقُوا", "فَٱتَّقُوا۟"], highlightStyle: "fill" },
        { verse: 24, tone: "rose", matchIncludes: "وَقُود", highlightStyle: "outline" },
      ],
    },
    {
      id: "pageBounds",
      label: "Beginning & ending of the page",
      swatch: "sand-fill",
      items: [
        {
          pageBound: "start",
          wordCount: 3,
          phraseBand: true,
          tone: "sand",
          highlightStyle: "fill",
          summary: "Page beginning",
        },
        {
          pageBound: "end",
          wordCount: 3,
          phraseBand: true,
          tone: "sand",
          highlightStyle: "fill",
          summary: "Page ending",
        },
      ],
    },
    {
      id: "verseBeginning",
      label: "The beginning of each verse",
      swatch: "green-fill",
      items: [
        {
          verseStart: true,
          wordCount: 3,
          phraseBand: true,
          tone: "green",
          highlightStyle: "fill",
        },
      ],
    },
    {
      id: "gharib",
      label: "Unfamiliar word (Gharib)",
      swatch: "rose-circle",
      source: "gharibWords",
    },
    {
      id: "repeatedWords",
      label: "Repeated words",
      swatch: "blue-outline",
      items: [
        { verse: 19, tone: "blue", matchForms: ["يَجْعَلُونَ"], highlightStyle: "outline" },
        { verse: 20, tone: "blue", matchForms: ["كُلَّمَا", "وَإِذَا"], highlightStyle: "outline" },
        { verse: 20, tone: "blue", matchForms: ["ٱلْبَرْقُ"], highlightStyle: "outline" },
        { verse: 22, tone: "blue", matchIncludes: "ٱلسَّمَآء", highlightStyle: "outline" },
        { verse: 24, tone: "blue", matchForms: ["لَمْ تَفْعَلُوا۟", "لَن تَفْعَلُوا۟"], highlightStyle: "outline" },
      ],
    },
  ],
  5: [
    {
      id: "topicsMap",
      label: "Topics map",
      swatch: "rose-fill",
      items: [
        {
          verses: [25],
          tone: "rose",
          ayahBand: true,
          highlightStyle: "fill",
          summary: "A — Allah's reward / Al-Jannah (verse 25)",
        },
        {
          verses: [26],
          tone: "amber",
          ayahBand: true,
          highlightStyle: "fill",
          summary: "B — Representing a parable (verse 26)",
        },
        {
          verses: [27],
          tone: "teal",
          ayahBand: true,
          highlightStyle: "fill",
          summary: "C — Al-Fāsiq attributes (verse 27)",
        },
        {
          verses: [28, 29],
          tone: "green",
          ayahBand: true,
          highlightStyle: "fill",
          summary: "D — Evidences for tawḥīd (verses 28–29)",
        },
      ],
    },
    {
      id: "hopeReward",
      label: "Hope / reward",
      swatch: "green-fill",
      items: [
        { verse: 25, tone: "green", matchForms: ["وَبَشِّرِ"], highlightStyle: "fill" },
        { verse: 25, tone: "green", matchIncludes: "جَنَّ", highlightStyle: "fill" },
        { verse: 25, tone: "green", matchForms: ["خَـٰلِدُونَ", "خَالِدُونَ"], highlightStyle: "outline" },
      ],
    },
    {
      id: "pageBounds",
      label: "Beginning & ending of the page",
      swatch: "sand-fill",
      items: [
        {
          pageBound: "start",
          wordCount: 3,
          phraseBand: true,
          tone: "sand",
          highlightStyle: "fill",
          summary: "Page beginning (verse 25)",
        },
        {
          pageBound: "end",
          wordCount: 3,
          phraseBand: true,
          tone: "sand",
          highlightStyle: "fill",
          summary: "Page ending (verse 29)",
        },
      ],
    },
    {
      id: "verseBeginning",
      label: "The beginning of each verse",
      swatch: "green-fill",
      items: [
        {
          verseStart: true,
          wordCount: 3,
          phraseBand: true,
          tone: "green",
          highlightStyle: "fill",
        },
      ],
    },
    {
      id: "gharib",
      label: "Unfamiliar word (Gharib)",
      swatch: "rose-circle",
      source: "gharibWords",
    },
    {
      id: "repeatedWords",
      label: "Repeated words",
      swatch: "blue-outline",
      items: [
        { verse: 25, tone: "blue", matchForms: ["قَالُوا۟", "قَالُوا"], highlightStyle: "outline" },
        { verse: 25, tone: "blue", matchIncludes: "رُزِق", highlightStyle: "outline" },
        { verse: 26, tone: "blue", matchIncludes: "مَثَل", highlightStyle: "outline" },
        { verse: 26, tone: "blue", matchIncludes: "يُضِلُّ بِه", highlightStyle: "outline" },
        { verse: 27, tone: "blue", matchForms: ["وَيَقْطَعُونَ"], highlightStyle: "outline" },
        { verse: 28, tone: "blue", matchForms: ["ثُمَّ"], highlightStyle: "outline" },
        { verse: 29, tone: "blue", matchForms: ["هُوَ"], highlightStyle: "outline" },
        { verse: 29, tone: "blue", matchIncludes: "خَلَقَ", highlightStyle: "outline" },
      ],
    },
  ],
  6: [
    {
      id: "pageBounds",
      label: "Beginning & ending of the page",
      swatch: "sand-fill",
      items: [
        {
          pageBound: "start",
          wordCount: 3,
          phraseBand: true,
          tone: "sand",
          highlightStyle: "fill",
          summary: "Page beginning (verse 30)",
        },
        {
          pageBound: "end",
          verse: 37,
          wordCount: 3,
          phraseBand: true,
          phraseTogether: true,
          tone: "sand",
          highlightStyle: "fill",
          summary: "Page ending (verse 37)",
        },
      ],
    },
    {
      id: "verseBeginning",
      label: "The beginning of each verse",
      swatch: "green-fill",
      items: [
        {
          verseStart: true,
          wordCount: 3,
          phraseBand: true,
          tone: "green",
          highlightStyle: "fill",
        },
      ],
    },
    {
      id: "speechPatterns",
      label: "Speech patterns (qāla · qālū · qulnā)",
      swatch: "blue-outline",
      items: [
        { tone: "blue", matchForms: ["قَالَ"], highlightStyle: "fill" },
        { tone: "blue", matchForms: ["فَقَالَ"], highlightStyle: "fill" },
        { tone: "purple", matchForms: ["قَالُوا۟"], highlightStyle: "fill" },
        { tone: "green", matchForms: ["قُلْنَا"], highlightStyle: "fill" },
        { tone: "green", matchForms: ["وَقُلْنَا"], highlightStyle: "fill" },
        { tone: "gray", matchForms: ["وَإِذْ"], highlightStyle: "outline" },
      ],
    },
  ],
  7: [
    {
      id: "twoCalls",
      label: "Two calls to Banū Isrāʾīl (40 & 47)",
      items: [
        { verse: 40, tone: "rose", ayahBand: true, highlightStyle: "fill" },
        { verse: 47, tone: "rose", ayahBand: true, highlightStyle: "fill" },
      ],
    },
    {
      id: "commands403",
      label: "Commands & prohibitions (40–43)",
      items: [
        { verses: [40, 43], tone: "blue", matchIncludes: "أَوْفُوا۟", highlightStyle: "fill" },
        { verses: [40, 43], tone: "blue", matchIncludes: "ٱتَّقُوا۟", highlightStyle: "fill" },
        { verse: 41, tone: "green", matchIncludes: "لَا تَلْبِسُوا۟", highlightStyle: "fill" },
        { verse: 42, tone: "green", matchIncludes: "لَا تَكْتُمُوا۟", highlightStyle: "fill" },
        { verse: 43, tone: "blue", matchIncludes: "أَقِيمُوا۟", highlightStyle: "fill" },
      ],
    },
    {
      id: "letterWaw",
      label: "Letter wāw (و)",
      items: [
        { tone: "gray", matchForms: ["وَ"], highlightStyle: "outline" },
      ],
    },
  ],
  8: [
    {
      id: "detailedTopics",
      label: "Detailed topics map",
      source: "detailedTopics",
    },
    {
      id: "pageBounds",
      label: "Beginning & ending of the page",
      swatch: "sand-fill",
      items: [
        {
          pageBound: "start",
          wordCount: 3,
          phraseBand: true,
          tone: "sand",
          highlightStyle: "fill",
          summary: "Page beginning (verse 49)",
        },
        {
          pageBound: "end",
          verse: 57,
          wordCount: 3,
          phraseBand: true,
          phraseTogether: true,
          tone: "sand",
          highlightStyle: "fill",
          summary: "Page ending (verse 57)",
        },
      ],
    },
    {
      id: "verseBeginning",
      label: "The beginning of each verse",
      swatch: "green-fill",
      items: [
        {
          verseStart: true,
          wordCount: 3,
          phraseBand: true,
          tone: "green",
          highlightStyle: "fill",
        },
      ],
    },
    {
      id: "gharib",
      label: "Unfamiliar word (Gharib)",
      swatch: "rose-circle",
      source: "gharibWords",
    },
    {
      id: "linkingPattern",
      label: "Linking pattern (وَإِذْ · ثُمَّ)",
      items: [
        {
          tone: "blue",
          matchForms: ["وَإِذْ"],
          verses: [49, 50, 51, 53, 54, 55],
          highlightStyle: "outline",
        },
        {
          tone: "amber",
          matchForms: ["ثُمَّ"],
          verses: [52, 56],
          highlightStyle: "fill",
        },
      ],
    },
    {
      id: "repeatedWords",
      label: "Repeated words",
      swatch: "blue-outline",
      items: [
        { tone: "rose", matchIncludes: "فِرْعَوْن", highlightStyle: "outline" },
        { tone: "green", matchForms: ["مُوسَىٰ"], highlightStyle: "outline" },
        { tone: "rose", matchIncludes: "الْعِجْل", highlightStyle: "outline" },
        { tone: "green", matchIncludes: "تَشْكُرُونَ", highlightStyle: "outline" },
        { tone: "green", matchIncludes: "تَابَ", highlightStyle: "outline" },
        { tone: "rose", matchIncludes: "ظَلَم", highlightStyle: "outline" },
      ],
    },
  ],
  9: [
    {
      id: "detailedTopics",
      label: "Detailed topics map",
      source: "detailedTopics",
    },
    {
      id: "pageBounds",
      label: "Beginning & ending of the page",
      swatch: "sand-fill",
      items: [
        {
          pageBound: "start",
          wordCount: 3,
          phraseBand: true,
          tone: "sand",
          highlightStyle: "fill",
          summary: "Page beginning (verse 58)",
        },
        {
          pageBound: "end",
          verse: 61,
          wordCount: 3,
          phraseBand: true,
          phraseTogether: true,
          tone: "sand",
          highlightStyle: "fill",
          summary: "Page ending (verse 61)",
        },
      ],
    },
    {
      id: "verseBeginning",
      label: "The beginning of each verse",
      swatch: "green-fill",
      items: [
        {
          verseStart: true,
          wordCount: 3,
          phraseBand: true,
          tone: "green",
          highlightStyle: "fill",
        },
      ],
    },
    {
      id: "gharib",
      label: "Unfamiliar word (Gharib)",
      swatch: "rose-circle",
      source: "gharibWords",
    },
    {
      id: "linkingWords",
      label: "Words for linking (eating · drinking)",
      items: [
        { tone: "rose", matchForms: ["فَكُلُوا۟"], verses: [58], highlightStyle: "fill" },
        { tone: "rose", matchForms: ["كُلُوا۟"], verses: [60], highlightStyle: "fill" },
        { tone: "rose", matchIncludes: "طَعَام", verses: [61], highlightStyle: "fill" },
        { tone: "rose", matchIncludes: "بَقْل", verses: [61], highlightStyle: "fill" },
        { tone: "rose", matchIncludes: "قِثَّ", verses: [61], highlightStyle: "fill" },
        { tone: "rose", matchIncludes: "فُوم", verses: [61], highlightStyle: "fill" },
        { tone: "rose", matchIncludes: "عَدَس", verses: [61], highlightStyle: "fill" },
        { tone: "rose", matchIncludes: "بَصَل", verses: [61], highlightStyle: "fill" },
        { tone: "amber", matchForms: ["ٱسْتَسْقَىٰ"], verses: [60], highlightStyle: "fill" },
        { tone: "amber", matchIncludes: "ٱنفَجَر", verses: [60], highlightStyle: "fill" },
        { tone: "amber", matchIncludes: "عَشْرَةَ عَيْن", verses: [60], highlightStyle: "fill" },
        { tone: "amber", matchIncludes: "مَشْرَب", verses: [60], highlightStyle: "fill" },
        { tone: "amber", matchForms: ["وَٱشْرَبُوا۟"], verses: [60], highlightStyle: "fill" },
      ],
    },
    {
      id: "repeatedWords",
      label: "Repeated words",
      swatch: "blue-outline",
      items: [
        { tone: "rose", matchIncludes: "ظَلَم", highlightStyle: "outline" },
        { tone: "rose", matchForms: ["مُوسَىٰ"], highlightStyle: "outline" },
        { tone: "green", matchIncludes: "كُلُوا", highlightStyle: "outline" },
        { tone: "green", matchIncludes: "ٱشْرَب", highlightStyle: "outline" },
        { tone: "rose", matchIncludes: "فَبَدَّل", highlightStyle: "outline" },
      ],
    },
  ],
};

export function getOverlayLayersForMushafPage(mushafPage) {
  const layers = MUSHAF_OVERLAY_LAYERS[mushafPage] ?? [];
  if (layers.some((layer) => layer.id === "topicsMap")) return layers;

  const topicsMapLayer = topicsMapLayerFromGuide(getBaqarahGuideByMushafPage(mushafPage));
  if (!topicsMapLayer) return layers;

  return [topicsMapLayer, ...layers];
}

export function getOverlayLayersForSpread(pages = []) {
  const seen = new Set();
  const layers = [];

  for (const page of pages) {
    for (const layer of getOverlayLayersForMushafPage(page)) {
      if (seen.has(layer.id)) continue;
      seen.add(layer.id);
      layers.push({
        ...layer,
        pages: pages.filter((p) =>
          getOverlayLayersForMushafPage(p).some((l) => l.id === layer.id),
        ),
      });
    }
  }

  return layers;
}

export function isWordHighlightLayer(layer) {
  return !layer.source;
}

export function resolveLayerItems(guide, layer) {
  if (layer.source === "detailedTopics") {
    return guide?.detailedTopics ?? [];
  }
  if (layer.source === "guideTopics") {
    return guideTopicsToHighlightRules(guide?.topics);
  }
  if (layer.source === "gharibWords") {
    return guide?.gharibWords ?? [];
  }
  return layer.items ?? [];
}

export function gharibWordsToHighlightRules(items = []) {
  return items.map((item) => ({
    ...item,
    tone: "rose",
    highlightStyle: "circle",
    summary: item.label,
  }));
}

export function getActiveLayerItems(mushafPage, layerId, guide) {
  const layers = getOverlayLayersForMushafPage(mushafPage);
  const layer = layers.find((entry) => entry.id === layerId);
  if (!layer) return [];
  return resolveLayerItems(guide, layer);
}

export const TOPIC_COLOR_CLASS = {
  rose: "baqarah-guide-topic--rose",
  amber: "baqarah-guide-topic--amber",
  green: "baqarah-guide-topic--green",
  teal: "baqarah-guide-topic--teal",
};

export const TOPIC_LETTER_CARD_CLASS = {
  A: "baqarah-mushaf-map__card--topic-a",
  B: "baqarah-mushaf-map__card--topic-b",
};

export const TOPIC_LETTER_STRIP_CLASS = {
  A: "baqarah-mushaf-map__strip-seg--topic-a",
  B: "baqarah-mushaf-map__strip-seg--topic-b",
};

export const TOPIC_LETTER_PANEL_CLASS = {
  A: "baqarah-guide-block--topic-a",
  B: "baqarah-guide-block--topic-b",
};

export const TOPIC_PANEL_BADGE_CLASS = {
  A: "baqarah-guide-panel__topic--a",
  B: "baqarah-guide-panel__topic--b",
  rose: "baqarah-guide-panel__topic--rose",
  amber: "baqarah-guide-panel__topic--amber",
  green: "baqarah-guide-panel__topic--green",
  teal: "baqarah-guide-panel__topic--teal",
};

export function guideTopicsById(guideTopics = []) {
  return Object.fromEntries(guideTopics.map((topic) => [topic.id, topic]));
}

export function enrichTopics(sectionTopics = [], guideTopics = []) {
  const byId = guideTopicsById(guideTopics);
  return sectionTopics.map((topic) => ({
    ...byId[topic.id],
    ...topic,
    label: topic.label ?? byId[topic.id]?.label,
    color: topic.color ?? byId[topic.id]?.color,
  }));
}

export function resolveTopicMeta(topicId, guideTopics = []) {
  if (!topicId) return null;
  const match = guideTopics.find((topic) => topic.id === topicId);
  return {
    id: topicId,
    label: match?.label ?? topicId,
    color: match?.color ?? null,
  };
}

export function topicDisplayLabel(topic) {
  return topic.label ?? topic.id;
}

export function topicStripLabel(topic) {
  const isLetter = topic.id === "A" || topic.id === "B";
  if (!isLetter) return topicDisplayLabel(topic);

  const label = topic.label ?? "";
  if (label && !/^Topic\s+[AB]$/i.test(label)) {
    return `${topic.id} · ${label}`;
  }
  return `${topic.id} · ${topicDisplayLabel(topic)}`;
}

export function topicMushafCardClass(topic) {
  if (TOPIC_LETTER_CARD_CLASS[topic.id]) return TOPIC_LETTER_CARD_CLASS[topic.id];
  if (topic.color && TOPIC_COLOR_CLASS[topic.color]) return TOPIC_COLOR_CLASS[topic.color];
  return "";
}

export function topicMushafStripClass(topic) {
  if (TOPIC_LETTER_STRIP_CLASS[topic.id]) return TOPIC_LETTER_STRIP_CLASS[topic.id];
  if (topic.color && TOPIC_COLOR_CLASS[topic.color]) return TOPIC_COLOR_CLASS[topic.color];
  return "";
}

export function topicPanelClass(topicId, guideTopics = []) {
  const meta = resolveTopicMeta(topicId, guideTopics);
  if (meta?.color && TOPIC_COLOR_CLASS[meta.color]) {
    return TOPIC_COLOR_CLASS[meta.color];
  }
  if (TOPIC_LETTER_PANEL_CLASS[topicId]) return TOPIC_LETTER_PANEL_CLASS[topicId];
  return "";
}

export function topicPanelBadgeClass(topicId, guideTopics = []) {
  const meta = resolveTopicMeta(topicId, guideTopics);
  if (meta?.color && TOPIC_PANEL_BADGE_CLASS[meta.color]) {
    return TOPIC_PANEL_BADGE_CLASS[meta.color];
  }
  if (TOPIC_PANEL_BADGE_CLASS[topicId]) return TOPIC_PANEL_BADGE_CLASS[topicId];
  return "";
}

export function topicsMapBannerTitle(topics = []) {
  const hasLetterTopics = topics.some((topic) => topic.id === "A" || topic.id === "B");
  if (hasLetterTopics) return "Topics Map (A & B)";
  if (topics.length === 2) {
    return `Topics Map (${topics.map(topicDisplayLabel).join(" & ")})`;
  }
  return "Topics Map";
}

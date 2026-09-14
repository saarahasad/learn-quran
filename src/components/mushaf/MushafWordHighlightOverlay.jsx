import { memo, useEffect, useMemo, useState } from "react";
import { normalizeAr, ruleMatchesVerse, wordMatchesRule } from "../../utils/arabicMatch.js";
import { bboxToPercent } from "../../utils/mushafPageData.js";
import {
  getMushafWordBoxes,
  prefetchMushafWordBoxes,
} from "../../utils/mushafWordBoxes.js";
import {
  getPageHotspots,
  hotspotToPercent,
} from "../../utils/mushafPageHotspots.js";

function sortWordsReadingOrder(words) {
  return [...words].sort((a, b) => {
    const lineA = a.lineNumber ?? Math.round(a.bbox.y / 20);
    const lineB = b.lineNumber ?? Math.round(b.bbox.y / 20);
    if (lineA !== lineB) return lineA - lineB;
    return b.bbox.x - a.bbox.x;
  });
}

function unionBBox(boxes) {
  if (!boxes.length) return null;
  let x1 = Infinity;
  let y1 = Infinity;
  let x2 = -Infinity;
  let y2 = -Infinity;

  for (const { x, y, w, h } of boxes) {
    x1 = Math.min(x1, x);
    y1 = Math.min(y1, y);
    x2 = Math.max(x2, x + w);
    y2 = Math.max(y2, y + h);
  }

  return { x: x1, y: y1, w: x2 - x1, h: y2 - y1 };
}

function uniqueAyahWords(words, ayah) {
  const byNum = new Map();
  for (const word of words) {
    if (word.ayah !== ayah) continue;
    if (!byNum.has(word.wordNum)) byNum.set(word.wordNum, word);
  }
  return [...byNum.values()].sort((a, b) => a.wordNum - b.wordNum);
}

function groupWordsByLineInOrder(wordList) {
  const groups = [];
  let currentLine = null;
  let currentGroup = [];

  for (const word of wordList) {
    const line = word.lineNumber ?? 0;
    if (currentLine != null && line !== currentLine) {
      groups.push(currentGroup);
      currentGroup = [];
    }
    currentLine = line;
    currentGroup.push(word);
  }

  if (currentGroup.length) groups.push(currentGroup);
  return groups;
}

function highlightStyle(bbox) {
  return bboxToPercent(bbox);
}

function isValidBBox(bbox) {
  if (!bbox) return false;
  const { x, y, w, h } = bbox;
  if (w <= 0 || h <= 0) return false;
  if (y < 50 || y > 970) return false;
  if (x + w < 4 || x > 676) return false;
  return true;
}

function phraseBandHighlights(wordList, rule, keyPrefix) {
  if (!wordList.length) return [];

  if (!rule.phraseBand) {
    return wordList
      .filter((word) => isValidBBox(word.bbox))
      .map((word) => ({
        key: `${word.location}-${keyPrefix}`,
        style: highlightStyle(word.bbox),
        rule,
      }));
  }

  // Repeated phrases: one outline band wrapping the whole phrase.
  if (rule.matchSequence?.length || rule.phraseTogether) {
    const boxes = wordList.map((word) => word.bbox).filter(isValidBBox);
    const bbox = unionBBox(boxes);
    if (!bbox) return [];
    return [
      {
        key: `${keyPrefix}-phrase`,
        style: highlightStyle(bbox),
        rule: { ...rule, phraseBandClass: true },
      },
    ];
  }

  return groupWordsByLineInOrder(wordList)
    .map((group, index) => {
      const bbox = unionBBox(group.map((word) => word.bbox).filter(isValidBBox));
      if (!bbox) return null;
      return {
        key: `${keyPrefix}-line-${group[0].lineNumber ?? index}`,
        style: highlightStyle(bbox),
        rule,
      };
    })
    .filter(Boolean);
}

function MushafWordHighlightOverlay({
  page,
  surahNumber,
  rules = [],
  layerId = "words",
  layerClass = "",
}) {
  const [words, setWords] = useState([]);
  const [ayahZones, setAyahZones] = useState(new Map());
  const [layout, setLayout] = useState(null);

  useEffect(() => {
    prefetchMushafWordBoxes(page, surahNumber);
    let cancelled = false;

    getMushafWordBoxes(page, surahNumber).then(({ words: pageWords }) => {
      if (!cancelled) setWords(pageWords);
    });

    return () => {
      cancelled = true;
    };
  }, [page, surahNumber]);

  const effectiveRules = rules;

  const needsAyahBands = useMemo(
    () => effectiveRules.some((rule) => rule.ayahBand),
    [effectiveRules],
  );

  useEffect(() => {
    if (!needsAyahBands) return undefined;

    let cancelled = false;
    getPageHotspots(page).then(({ hotspots, layout: meta }) => {
      if (cancelled) return;

      const byAyah = new Map();
      for (const zone of hotspots) {
        if (zone.surah !== surahNumber) continue;
        if (!byAyah.has(zone.ayah)) byAyah.set(zone.ayah, []);
        byAyah.get(zone.ayah).push(zone);
      }
      setAyahZones(byAyah);
      setLayout(meta);
    });

    return () => {
      cancelled = true;
    };
  }, [page, surahNumber, needsAyahBands]);

  const wordHighlights = useMemo(() => {
    const matched = [];
    const sortedWords = sortWordsReadingOrder(words);

    for (const rule of effectiveRules) {
      if (rule.ayahBand || rule.pageBound || rule.verseStart || rule.matchSequence) {
        continue;
      }

      for (const word of words) {
        if (!isValidBBox(word.bbox)) continue;
        if (!ruleMatchesVerse(rule, word.ayah)) continue;
        if (!wordMatchesRule(word.textUthmani, rule)) continue;

        matched.push({
          key: `${word.location}-${rule.tone}-${rule.matchIncludes ?? rule.ar ?? ""}`,
          style: highlightStyle(word.bbox),
          rule,
        });
      }
    }

    for (const rule of effectiveRules.filter((entry) => entry.matchSequence?.length)) {
      const normSeq = rule.matchSequence.map((form) => normalizeAr(form));

      for (let index = 0; index <= sortedWords.length - normSeq.length; index += 1) {
        const slice = sortedWords.slice(index, index + normSeq.length);
        const matches = slice.every(
          (word, offset) => normalizeAr(word.textUthmani) === normSeq[offset],
        );
        if (!matches) continue;

        matched.push(
          ...phraseBandHighlights(
            slice,
            rule,
            `sequence-${slice.map((word) => word.location).join("-")}-${rule.tone}`,
          ),
        );
      }
    }

    for (const rule of effectiveRules.filter((entry) => entry.pageBound)) {
      const count = rule.wordCount ?? 3;
      let slice;

      if (rule.pageBound === "start") {
        slice = sortedWords.slice(0, count);
      } else if (rule.verse != null) {
        slice = uniqueAyahWords(words, rule.verse).slice(-count);
      } else {
        slice = sortedWords.slice(-count);
      }

      matched.push(
        ...phraseBandHighlights(
          slice,
          rule,
          `page-bound-${rule.pageBound}-${rule.tone}`,
        ),
      );
    }

    for (const rule of effectiveRules.filter((entry) => entry.verseStart)) {
      const count = rule.wordCount ?? 3;
      const ayahs = [...new Set(words.map((word) => word.ayah))].sort((a, b) => a - b);

      for (const ayah of ayahs) {
        if (rule.verses?.length && !rule.verses.includes(ayah)) continue;
        if (rule.verse != null && rule.verse !== ayah) continue;

        const slice = uniqueAyahWords(words, ayah).slice(0, count);
        if (!slice.length) continue;

        matched.push(
          ...phraseBandHighlights(slice, {
            ...rule,
            summary: `Verse ${ayah} beginning`,
          }, `verse-start-${ayah}-${rule.tone}`),
        );
      }
    }

    return matched;
  }, [words, effectiveRules]);

  const ayahHighlights = useMemo(() => {
    if (!needsAyahBands || !layout) return [];

    return effectiveRules
      .filter((rule) => rule.ayahBand)
      .flatMap((rule) => {
        const verses =
          rule.verses?.length > 0
            ? rule.verses
            : rule.verse != null
              ? [rule.verse]
              : [];

        return verses.flatMap((ayah) => {
          const zones = ayahZones.get(ayah) ?? [];
          return zones.map((zone, index) => ({
            key: `ayah-${ayah}-${index}-${rule.tone}`,
            style: hotspotToPercent(zone, layout),
            rule,
          }));
        });
      });
  }, [effectiveRules, ayahZones, needsAyahBands, layout]);

  const all = [...wordHighlights, ...ayahHighlights];
  if (!all.length) return null;

  return (
    <div
      className={["mushaf-word-highlight-layer", layerClass].filter(Boolean).join(" ")}
      aria-label={`Word highlights ${layerId} on page ${page}`}
    >
      {all.map(({ key, style, rule }) => (
        <div
          key={key}
          className={[
            "mushaf-word-highlight",
            rule.tone && `mushaf-word-highlight--${rule.tone}`,
            `mushaf-word-highlight--${rule.highlightStyle ?? "fill"}`,
            rule.phraseBandClass && "mushaf-word-highlight--phrase-band",
          ]
            .filter(Boolean)
            .join(" ")}
          style={style}
          title={rule.summary ?? rule.ar ?? rule.matchIncludes}
        />
      ))}
    </div>
  );
}

export default memo(MushafWordHighlightOverlay);

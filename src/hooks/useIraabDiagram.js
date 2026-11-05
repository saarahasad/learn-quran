import { useEffect, useState } from "react";

/** Sūrahs whose diagrams live in the original hand-checked file (at-Tīn → al-Humazah). */
const LEGACY_SURAHS = new Set([95, 96, 97, 98, 99, 100, 101, 102, 103, 104]);

/** Per-sūrah diagrams built from surahquran.com (scripts/juz30-iraab-diagrams) — loaded on demand. */
const JUZ30_FILES = import.meta.glob("../data/iraabDiagramsJuz30/*.json");

let legacyPromise = null;
const loadLegacy = () => {
  legacyPromise ??= import("../data/iraabDiagrams.js").catch((err) => {
    legacyPromise = null;
    throw err;
  });
  return legacyPromise;
};

const surahCache = new Map();
function loadSurah(n) {
  const loader = JUZ30_FILES[`../data/iraabDiagramsJuz30/${n}.json`];
  if (!loader) return Promise.resolve(null);
  if (!surahCache.has(n)) {
    surahCache.set(
      n,
      loader()
        .then((mod) => mod.default ?? mod)
        .catch((err) => {
          surahCache.delete(n);
          throw err;
        }),
    );
  }
  return surahCache.get(n);
}

export function hasIraabDiagram(surahNumber) {
  return (
    LEGACY_SURAHS.has(surahNumber) || Boolean(JUZ30_FILES[`../data/iraabDiagramsJuz30/${surahNumber}.json`])
  );
}

async function getDiagram(surahNumber, ayahNumber) {
  if (LEGACY_SURAHS.has(surahNumber)) {
    const mod = await loadLegacy();
    const ayah = mod.getIraabDiagram(surahNumber, ayahNumber);
    return ayah ? { ayah, source: mod.getIraabDiagramSource(surahNumber) } : null;
  }
  const data = await loadSurah(surahNumber);
  const ayah = data?.ayat?.find((a) => a.n === ayahNumber) ?? null;
  return ayah ? { ayah, source: data.source } : null;
}

/** { ayah, source } for one āyah's iʿrāb diagram, or null. */
export function useIraabDiagram(surahNumber, ayahNumber) {
  const key = hasIraabDiagram(surahNumber) && ayahNumber != null ? `${surahNumber}:${ayahNumber}` : null;
  const [loaded, setLoaded] = useState({ key: null, value: null });

  useEffect(() => {
    if (!key) return undefined;
    let cancelled = false;
    getDiagram(surahNumber, ayahNumber)
      .then((value) => {
        if (!cancelled) setLoaded({ key, value });
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [key, surahNumber, ayahNumber]);

  return key && loaded.key === key ? loaded.value : null;
}

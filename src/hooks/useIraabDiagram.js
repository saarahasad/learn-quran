import { useEffect, useState } from "react";

/** Sūrahs with iʿrāb diagrams — kept here so the 150 KB data file loads only when needed. */
const IRAAB_DIAGRAM_SURAHS = new Set([95, 96, 97, 98, 99, 100, 101, 102, 103, 104]);

let dataPromise = null;
const loadData = () => {
  dataPromise ??= import("../data/iraabDiagrams.js").catch((err) => {
    dataPromise = null;
    throw err;
  });
  return dataPromise;
};

/** { ayah, source } for one āyah's iʿrāb diagram, or null. */
export function useIraabDiagram(surahNumber, ayahNumber) {
  const key = IRAAB_DIAGRAM_SURAHS.has(surahNumber) && ayahNumber != null ? `${surahNumber}:${ayahNumber}` : null;
  const [loaded, setLoaded] = useState({ key: null, value: null });

  useEffect(() => {
    if (!key) return undefined;
    let cancelled = false;
    loadData()
      .then((mod) => {
        if (cancelled) return;
        const ayah = mod.getIraabDiagram(surahNumber, ayahNumber);
        setLoaded({ key, value: ayah ? { ayah, source: mod.getIraabDiagramSource(surahNumber) } : null });
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [key, surahNumber, ayahNumber]);

  return key && loaded.key === key ? loaded.value : null;
}

import { useEffect, useMemo, useState } from "react";
import { fetchAyahWords, getLocalAyah } from "../utils/hifdhAyahContent.js";

export function useAyahWords(ayahNumber, surahNumber, mushafPage, localAyahs = null) {
  const [apiWords, setApiWords] = useState([]);
  const [loading, setLoading] = useState(true);

  const localAyah = useMemo(
    () =>
      ayahNumber != null ? getLocalAyah(surahNumber, ayahNumber, localAyahs) : null,
    [ayahNumber, surahNumber, localAyahs],
  );

  useEffect(() => {
    if (ayahNumber == null || !mushafPage) {
      setApiWords([]);
      setLoading(false);
      return undefined;
    }

    let cancelled = false;
    setLoading(true);

    fetchAyahWords(mushafPage, surahNumber, ayahNumber, localAyahs).then((words) => {
      if (!cancelled) {
        setApiWords(words);
        setLoading(false);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [ayahNumber, surahNumber, mushafPage, localAyahs]);

  return { words: apiWords, localAyah, loading };
}

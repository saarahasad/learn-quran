import { useEffect, useMemo, useRef, useState } from "react";
import AjrumiyyahCourseSidebar from "../components/AjrumiyyahCourseSidebar.jsx";
import CourseLayout from "../components/CourseLayout.jsx";
import IraabBeginnerGuideView from "../components/iraab/IraabBeginnerGuideView.jsx";
import { QURAN_SURAHS, getSurahMeta } from "../data/quranSurahMeta.js";
import {
  SAMPLE_IRAAB_KAHF_1,
  SAMPLE_PACK_KAHF_1,
  buildLocalBeginnerPack,
  fetchGuideStatus,
  generateBeginnerGuide,
  getSavedGuide,
  guideKey,
  listSavedGuides,
  saveGuide,
} from "../utils/iraabBeginnerGuide.js";
import {
  alignSegmentsToUthmani,
  fetchDaasIraab,
  fetchQuranAyahs,
  formatAyahRangeLabel,
  iraabTonesForUnits,
} from "../utils/iraabDaas.js";
import { fetchAyahRangeWordGlosses } from "../utils/iraabWordBreak.js";
import "../styles/iraabBeginnerGuide.css";

const DEFAULT_SURAH = 18;
const DEFAULT_AYAH = 1;

export default function AjrumiyyahIraabGuidePage() {
  const [surah, setSurah] = useState(DEFAULT_SURAH);
  const [ayah, setAyah] = useState(DEFAULT_AYAH);
  const [iraab, setIraab] = useState(SAMPLE_IRAAB_KAHF_1);
  const [ayahText, setAyahText] = useState(SAMPLE_PACK_KAHF_1.ayahText);
  const [ayahs, setAyahs] = useState(SAMPLE_PACK_KAHF_1.ayahs);
  const [pack, setPack] = useState(SAMPLE_PACK_KAHF_1);
  const [status, setStatus] = useState(null);
  const [loadingDaas, setLoadingDaas] = useState(false);
  const [loadingGuide, setLoadingGuide] = useState(false);
  const [error, setError] = useState("");
  const [savedAt, setSavedAt] = useState(null);
  const [savedList, setSavedList] = useState(() => listSavedGuides());
  const abortRef = useRef(null);

  const surahMeta = getSurahMeta(surah);
  const maxAyah = surahMeta?.ayahs ?? 286;
  const key = guideKey(surah, ayah);
  const savedEntry = useMemo(() => getSavedGuide(key), [key, savedList]);

  useEffect(() => {
    fetchGuideStatus().then(setStatus);
  }, []);

  useEffect(() => {
    setAyah((n) => Math.min(Math.max(1, Number(n) || 1), maxAyah));
  }, [maxAyah]);

  function refreshSaved() {
    setSavedList(listSavedGuides());
  }

  function onSave() {
    if (!pack) return;
    saveGuide({
      surah,
      ayah,
      iraab,
      pack: {
        ...pack,
        surahNameEn: pack.surahNameEn || surahMeta?.en || "",
        ayahLabel: pack.ayahLabel || formatAyahRangeLabel(ayahs[0]?.n, ayahs[ayahs.length - 1]?.n) || String(ayah),
        ayahs: pack.ayahs?.length ? pack.ayahs : ayahs,
      },
    });
    setSavedAt(Date.now());
    refreshSaved();
  }

  function openSaved(item) {
    const entry = getSavedGuide(item.key);
    if (!entry?.pack) return;
    setSurah(entry.surah);
    setAyah(Number(entry.ayah) || 1);
    setIraab(entry.iraab || "");
    setAyahText(entry.pack.ayahText || "");
    setAyahs(entry.pack.ayahs || []);
    setPack(entry.pack);
    setSavedAt(entry.savedAt || Date.now());
    setError("");
  }

  async function loadDaas() {
    setLoadingDaas(true);
    setError("");
    try {
      const daas = await fetchDaasIraab(Number(surah), Number(ayah));
      const fetched = await fetchQuranAyahs(
        daas.surah,
        daas.ayah,
        daas.ayahEnd ?? daas.ayah,
      );
      const uthmani = fetched.map((a) => a.text).join(" ");
      const rangeLabel = formatAyahRangeLabel(daas.ayah, daas.ayahEnd);
      setIraab(daas.raw || "");
      setAyahs(fetched);
      setAyahText(uthmani);
      const existing = getSavedGuide(guideKey(daas.surah, daas.ayah));
      if (existing?.pack?.cards?.length) {
        setPack({
          ...existing.pack,
          ayahs: existing.pack.ayahs?.length ? existing.pack.ayahs : fetched,
          ayahLabel: existing.pack.ayahLabel || rangeLabel,
          ayahText: existing.pack.ayahText || uthmani,
        });
        setSavedAt(existing.savedAt);
      } else {
        const aligned = alignSegmentsToUthmani(daas.segments, fetched);
        const units = aligned.map((seg, i) => ({
          id: `daas-${i}`,
          text: seg.text,
          reference: seg.analysis,
          ayah: seg.ayah ?? null,
        }));
        let glossWords = [];
        try {
          glossWords = await fetchAyahRangeWordGlosses(
            daas.surah,
            daas.ayah,
            daas.ayahEnd ?? daas.ayah,
          );
        } catch {
          glossWords = [];
        }
        setPack(
          buildLocalBeginnerPack({
            surahNameEn: surahMeta?.en || "",
            ayahLabel: rangeLabel,
            ayahs: fetched,
            units,
            tones: iraabTonesForUnits(units),
            glossWords,
          }),
        );
        setSavedAt(null);
      }
    } catch (err) {
      setError(err?.message || "Could not load Daʿʿās iʿrāb.");
    } finally {
      setLoadingDaas(false);
    }
  }

  function loadKahfSample() {
    setSurah(18);
    setAyah(1);
    setIraab(SAMPLE_IRAAB_KAHF_1);
    setAyahText(SAMPLE_PACK_KAHF_1.ayahText);
    setAyahs(SAMPLE_PACK_KAHF_1.ayahs);
    setPack(SAMPLE_PACK_KAHF_1);
    setSavedAt(null);
    setError("");
  }

  async function runGenerate() {
    const text = iraab.trim();
    if (!text) {
      setError("Paste the raw Daʿʿās iʿrāb first.");
      return;
    }
    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;
    setLoadingGuide(true);
    setError("");
    try {
      let uthmani = ayahText;
      let numbered = ayahs;
      if (!uthmani) {
        numbered = await fetchQuranAyahs(Number(surah), Number(ayah), Number(ayah));
        uthmani = numbered.map((a) => a.text).join(" ");
        setAyahs(numbered);
        setAyahText(uthmani);
      }
      const rangeLabel = numbered?.length
        ? formatAyahRangeLabel(numbered[0].n, numbered[numbered.length - 1].n)
        : String(ayah);
      const next = await generateBeginnerGuide({
        iraab: text,
        surahName: surahMeta?.en || "",
        ayahLabel: rangeLabel,
        ayahText: uthmani,
        ayahs: numbered,
        signal: controller.signal,
      });
      if (controller.signal.aborted) return;
      setPack({
        ...next,
        surahNameEn: next.surahNameEn || surahMeta?.en || "",
        ayahLabel: next.ayahLabel || rangeLabel,
        ayahText: next.ayahText || uthmani,
        ayahs: next.ayahs?.length ? next.ayahs : numbered,
      });
      setSavedAt(null);
    } catch (err) {
      if (err?.name !== "AbortError") {
        setError(err?.message || "Could not generate the guide.");
      }
    } finally {
      if (!controller.signal.aborted) setLoadingGuide(false);
    }
  }

  const canGenerate = Boolean(status?.available) && !loadingGuide && Boolean(iraab.trim());

  return (
    <CourseLayout
      fullWidth
      courseId="ajrumiyyah"
      sidebar={<AjrumiyyahCourseSidebar activeTool="iraab-guide" />}
    >
      <div className="iraab-guide-page">
        <section className="iraab-guide-bar" aria-label="Ayah iʿrāb explainer">
          <div className="iraab-guide-bar__row">
            <label className="iraab-guide-bar__field">
              Sūrah
              <select
                value={surah}
                onChange={(e) => setSurah(Number(e.target.value))}
                aria-label="Sūrah"
              >
                {QURAN_SURAHS.map((s) => (
                  <option key={s.n} value={s.n}>
                    {s.n}. {s.ar} — {s.en}
                  </option>
                ))}
              </select>
            </label>
            <label className="iraab-guide-bar__field iraab-guide-bar__field--ayah">
              Āyah
              <input
                type="number"
                min={1}
                max={maxAyah}
                value={ayah}
                onChange={(e) => setAyah(Number(e.target.value) || 1)}
                aria-label="Āyah number"
              />
            </label>
            <div className="iraab-guide-bar__actions">
              <button type="button" onClick={loadDaas} disabled={loadingDaas}>
                {loadingDaas ? "Loading Daʿʿās…" : "Load Daʿʿās"}
              </button>
              <button type="button" onClick={loadKahfSample}>
                Kahf 1 example
              </button>
              <button
                type="button"
                data-accent=""
                onClick={runGenerate}
                disabled={!canGenerate}
              >
                {loadingGuide ? "Writing…" : pack ? "Regenerate" : "Generate"}
              </button>
              <button type="button" onClick={onSave} disabled={!pack}>
                {savedAt ? "Saved" : "Save"}
              </button>
              {status && !status.available ? (
                <span className="iraab-guide-bar__status">{status.message}</span>
              ) : null}
            </div>
          </div>

          <details className="iraab-guide-bar__daas">
            <summary>Raw Daʿʿās iʿrāb</summary>
            <textarea
              dir="rtl"
              lang="ar"
              value={iraab}
              onChange={(e) => setIraab(e.target.value)}
              placeholder="﴿الْحَمْدُ﴾ مبتدأ ﴿لِلَّهِ﴾ …"
              spellCheck={false}
            />
          </details>

          {error ? (
            <p className="iraab-guide-bar__error" role="alert">
              {error}
            </p>
          ) : null}

          {savedList.length ? (
            <div className="iraab-guide-saved" aria-label="Saved guides">
              {savedList.map((item) => (
                <button
                  key={item.key}
                  type="button"
                  className={item.key === key && savedEntry ? "is-active" : ""}
                  onClick={() => openSaved(item)}
                >
                  {item.surah}:{item.ayah}
                  {item.surahNameEn ? ` · ${item.surahNameEn}` : ""}
                </button>
              ))}
            </div>
          ) : null}
        </section>

        <IraabBeginnerGuideView pack={pack} />
      </div>
    </CourseLayout>
  );
}

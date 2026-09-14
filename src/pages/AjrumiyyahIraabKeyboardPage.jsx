import { useEffect, useId, useMemo, useRef, useState } from "react";
import {
  IRAAB_KEYBOARD_META,
  IRAAB_KEYBOARD_SECTIONS,
  IRAAB_TEMPLATES,
  keyInsertText,
} from "../data/iraabKeyboard.js";
import { QURAN_SURAHS, getSurahMeta } from "../data/quranSurahMeta.js";
import {
  IRAAB_CASE_KEY,
  formatAyahRangeLabel,
  formatDaasFullIraab,
  iraabCaseMeta,
  iraabTonesForUnits,
  loadAyahForIraabPractice,
  scoreIraabAgainstReference,
  fetchQuranAyahs,
  tagUnitsWithAyahs,
} from "../utils/iraabDaas.js";
import { tokenizeArabicPassage } from "../utils/tokenizeArabicPassage.js";
import AjrumiyyahCourseSidebar from "../components/AjrumiyyahCourseSidebar.jsx";
import IraabBeginnerGuideView from "../components/iraab/IraabBeginnerGuideView.jsx";
import CourseLayout from "../components/CourseLayout.jsx";
import "../styles/ajrumiyyah.css";
import "../styles/iraabBeginnerGuide.css";
import {
  buildLocalBeginnerPack,
  generateBeginnerGuide,
  saveGuide,
} from "../utils/iraabBeginnerGuide.js";
import { fetchAyahRangeWordGlosses, fetchAyahWordGlosses } from "../utils/iraabWordBreak.js";

const STORAGE_KEY = "ajr-iraab-keyboard-session-v4";

const SAMPLE_SENTENCE = "وَكَذَٰلِكَ جَعَلْنَا لِكُلِّ نَبِيٍّ عَدُوًّا";
const DEFAULT_SURAH = 6;
const DEFAULT_AYAH = 112;

function needsSpaceBefore(text, insert) {
  if (!text) return false;
  if (/^[:.،)\]»]/.test(insert)) return false;
  if (/[\s]$/.test(text)) return false;
  if (/[ـ]$/.test(text)) return false;
  return true;
}

function insertAtCursor(text, start, end, chunk) {
  const before = text.slice(0, start);
  const after = text.slice(end);
  const spaced = needsSpaceBefore(before, chunk) ? ` ${chunk}` : chunk;
  const next = before + spaced + after;
  const caret = before.length + spaced.length;
  return { next, caret };
}

function deleteBackward(text, start, end) {
  if (start !== end) {
    const next = text.slice(0, start) + text.slice(end);
    return { next, caret: start };
  }
  if (start <= 0) return { next: text, caret: 0 };
  const before = text.slice(0, start);
  const tokenMatch = before.match(/(\s+|[^\s]+)$/);
  if (tokenMatch && tokenMatch[0].length > 1 && /[\u0600-\u06FF]/.test(tokenMatch[0])) {
    const cut = tokenMatch[0].length;
    return { next: text.slice(0, start - cut) + text.slice(start), caret: start - cut };
  }
  return { next: text.slice(0, start - 1) + text.slice(start), caret: start - 1 };
}

function loadSession() {
  try {
    const raw = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    if (!raw || typeof raw !== "object") return null;
    return raw;
  } catch {
    return null;
  }
}

function buildUnitsFromSentence(sentence) {
  return tokenizeArabicPassage(sentence).map((t, i) => ({
    id: `u${i}-${t.bare}`,
    text: t.display,
    analysis: "",
  }));
}

function formatPlainBreakdown(sentence, units) {
  const body = units
    .filter((u) => u.text.trim())
    .map((u) => {
      const note = (u.analysis || "").trim();
      return note ? `﴿${u.text}﴾ ${note}` : `﴿${u.text}﴾`;
    })
    .join(" ");
  return [sentence.trim(), body].filter(Boolean).join("\n\n");
}

export default function AjrumiyyahIraabKeyboardPage() {
  const saved = useMemo(() => loadSession(), []);
  const [sentence, setSentence] = useState(saved?.sentence ?? "");
  const [units, setUnits] = useState(() =>
    Array.isArray(saved?.units) && saved.units.length
      ? saved.units
      : [],
  );
  const [activeId, setActiveId] = useState(saved?.activeId ?? null);
  const [query, setQuery] = useState("");
  const [activeSection, setActiveSection] = useState("all");
  const [copied, setCopied] = useState(false);
  const [lastKey, setLastKey] = useState(null);
  const [showTashkeel, setShowTashkeel] = useState(true);
  const [fontScale, setFontScale] = useState(saved?.fontScale ?? 1);
  const [surah, setSurah] = useState(saved?.surah ?? DEFAULT_SURAH);
  const [ayah, setAyah] = useState(saved?.ayah ?? DEFAULT_AYAH);
  const [ayahMeta, setAyahMeta] = useState(saved?.ayahMeta ?? null);
  const [ayahLoading, setAyahLoading] = useState(false);
  const [ayahError, setAyahError] = useState("");
  const [checked, setChecked] = useState(false);
  const [showRail, setShowRail] = useState(false);
  const [practiceOpen, setPracticeOpen] = useState(saved?.practiceOpen === true);
  const [pickerOpen, setPickerOpen] = useState(() => !saved?.ayahMeta);
  const [sentenceOpen, setSentenceOpen] = useState(() => !(Array.isArray(saved?.units) && saved.units.length));
  const [guidePack, setGuidePack] = useState(null);
  const [guideLoading, setGuideLoading] = useState(false);
  const [guideError, setGuideError] = useState("");
  const [glossWords, setGlossWords] = useState([]);
  const [wordGlossesByAyah, setWordGlossesByAyah] = useState({});
  const textareaRef = useRef(null);
  const selectionRef = useRef({ start: 0, end: 0 });
  const claudeForRef = useRef("");
  const sentenceFieldId = useId();

  const activeUnit = units.find((u) => u.id === activeId) ?? null;
  const draft = activeUnit?.analysis ?? "";
  const doneCount = units.filter((u) => u.analysis.trim()).length;
  const surahMeta = getSurahMeta(surah);
  const maxAyah = surahMeta?.ayahs ?? 286;
  const hasReference = units.some((u) => u.reference);
  const practicing = units.length > 0;
  const checkResults = useMemo(() => {
    if (!checked || !hasReference) return null;
    return units.map((u) => ({
      id: u.id,
      ...scoreIraabAgainstReference(u.analysis, u.reference || ""),
    }));
  }, [checked, hasReference, units]);
  const activeResult = checkResults?.find((r) => r.id === activeId) ?? null;
  const fullIraab = useMemo(() => formatDaasFullIraab(units), [units]);
  const unitTones = useMemo(() => iraabTonesForUnits(units), [units]);
  const ayahGroups = useMemo(() => {
    const groups = [];
    units.forEach((unit, index) => {
      const key = unit.ayah ?? null;
      const last = groups[groups.length - 1];
      if (last && last.ayah === key) {
        last.units.push({ unit, index });
      } else {
        groups.push({ ayah: key, units: [{ unit, index }] });
      }
    });
    return groups;
  }, [units]);
  const ayahTranslations = useMemo(() => {
    const map = {};
    (ayahMeta?.ayahs || []).forEach((a) => {
      if (a.en) map[a.n] = a.en;
    });
    return map;
  }, [ayahMeta?.ayahs]);
  const guideSourceKey = useMemo(
    () =>
      units
        .map((u) => `${u.text}\t${u.reference || ""}\t${u.ayah || ""}`)
        .join("\n"),
    [units],
  );

  useEffect(() => {
    if (!ayahMeta?.surah) {
      setGuidePack(null);
      setGlossWords([]);
      claudeForRef.current = "";
      return;
    }
    const groupingKey = `${ayahMeta.surah}:${ayahMeta.ayah}:${ayahMeta.ayahEnd}`;
    if (claudeForRef.current === groupingKey) return;
    const fallbackAyahs = ayahMeta.ayahs || [];
    if (!units.length || !hasReference) {
      setGuidePack(null);
      return;
    }
    setGuidePack(
      buildLocalBeginnerPack({
        surahNameEn: surahMeta?.en || "",
        ayahLabel: formatAyahRangeLabel(ayahMeta.ayah, ayahMeta.ayahEnd),
        ayahs: fallbackAyahs,
        units,
        tones: unitTones,
        glossWords,
      }),
    );
  }, [
    ayahMeta?.surah,
    ayahMeta?.ayah,
    ayahMeta?.ayahEnd,
    ayahMeta?.ayahs,
    guideSourceKey,
    glossWords,
    hasReference,
    surahMeta?.en,
  ]);

  useEffect(() => {
    if (!ayahMeta?.surah || !fullIraab.trim()) return;
    const groupingKey = `${ayahMeta.surah}:${ayahMeta.ayah}:${ayahMeta.ayahEnd}`;
    const controller = new AbortController();
    const rangeLabel = formatAyahRangeLabel(ayahMeta.ayah, ayahMeta.ayahEnd);
    setGuideLoading(true);
    setGuideError("");
    generateBeginnerGuide({
      iraab: fullIraab,
      surahName: surahMeta?.en || "",
      ayahLabel: rangeLabel,
      ayahText: sentence,
      ayahs: ayahMeta.ayahs || [],
      signal: controller.signal,
    })
      .then((next) => {
        const pack = {
          ...next,
          source: "claude",
          surahNameEn: next.surahNameEn || surahMeta?.en || "",
          ayahLabel: next.ayahLabel || rangeLabel,
          ayahText: next.ayahText || sentence,
          ayahs: next.ayahs?.length ? next.ayahs : ayahMeta.ayahs || [],
        };
        claudeForRef.current = groupingKey;
        setGuidePack(pack);
        saveGuide({
          surah: ayahMeta.surah,
          ayah: ayahMeta.ayah,
          iraab: fullIraab,
          pack,
        });
      })
      .catch((err) => {
        if (err?.name === "AbortError") return;
        setGuideError(
          err?.message ||
            "Claude could not write this iʿrāb. Add ANTHROPIC_API_KEY to .env.local and restart npm run dev.",
        );
      })
      .finally(() => setGuideLoading(false));
    return () => controller.abort();
  }, [ayahMeta?.surah, ayahMeta?.ayah, ayahMeta?.ayahEnd, fullIraab]);

  useEffect(() => {
    if (!ayahMeta?.surah) return;
    let cancelled = false;
    fetchAyahRangeWordGlosses(
      ayahMeta.surah,
      ayahMeta.ayah,
      ayahMeta.ayahEnd ?? ayahMeta.ayah,
    )
      .then((words) => {
        if (!cancelled) setGlossWords(words || []);
      })
      .catch(() => {
        if (!cancelled) setGlossWords([]);
      });
    return () => {
      cancelled = true;
    };
  }, [ayahMeta?.surah, ayahMeta?.ayah, ayahMeta?.ayahEnd]);

  useEffect(() => {
    if (!ayahMeta?.surah) {
      setWordGlossesByAyah({});
      return;
    }
    const start = ayahMeta.ayah;
    const end = ayahMeta.ayahEnd ?? ayahMeta.ayah;
    let cancelled = false;
    Promise.all(
      Array.from({ length: end - start + 1 }, (_, i) => {
        const n = start + i;
        return fetchAyahWordGlosses(ayahMeta.surah, n)
          .then((words) => [n, words || []])
          .catch(() => [n, []]);
      }),
    ).then((pairs) => {
      if (cancelled) return;
      const map = {};
      pairs.forEach(([n, words]) => {
        map[n] = words;
      });
      setWordGlossesByAyah(map);
    });
    return () => {
      cancelled = true;
    };
  }, [ayahMeta?.surah, ayahMeta?.ayah, ayahMeta?.ayahEnd]);

  useEffect(() => {
    if (!ayahMeta?.surah || !units.length) return;
    if (units.some((u) => u.ayah) && ayahMeta.ayahs?.length) return;
    let cancelled = false;
    fetchQuranAyahs(
      ayahMeta.surah,
      ayahMeta.ayah,
      ayahMeta.ayahEnd ?? ayahMeta.ayah,
    )
      .then((ayahs) => {
        if (cancelled || !ayahs.length) return;
        setAyahMeta((m) => (m ? { ...m, ayahs } : m));
        setUnits((prev) =>
          prev.some((u) => u.ayah) ? prev : tagUnitsWithAyahs(prev, ayahs),
        );
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [ayahMeta?.surah, ayahMeta?.ayah, ayahMeta?.ayahEnd, units.length]);

  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          sentence,
          units,
          activeId,
          fontScale,
          surah,
          ayah,
          ayahMeta,
          practiceOpen,
        }),
      );
    } catch {
      /* ignore */
    }
  }, [sentence, units, activeId, fontScale, surah, ayah, ayahMeta, practiceOpen]);

  useEffect(() => {
    setAyah((a) => Math.min(Math.max(1, a), maxAyah));
  }, [maxAyah]);

  function setActiveAnalysis(next, caret = null) {
    if (!activeId) return;
    setChecked(false);
    setUnits((prev) =>
      prev.map((u) => (u.id === activeId ? { ...u, analysis: next } : u)),
    );
    if (caret == null) return;
    requestAnimationFrame(() => {
      const el = textareaRef.current;
      if (!el) return;
      el.focus();
      el.setSelectionRange(caret, caret);
      selectionRef.current = { start: caret, end: caret };
    });
  }

  function rememberSelection() {
    const el = textareaRef.current;
    if (!el) return;
    selectionRef.current = { start: el.selectionStart, end: el.selectionEnd };
  }

  function typeChunk(chunk, keyMeta = null) {
    if (!activeId) return;
    rememberSelection();
    const { start, end } = selectionRef.current;
    const { next, caret } = insertAtCursor(draft, start, end, chunk);
    setActiveAnalysis(next, caret);
    if (keyMeta) setLastKey(keyMeta);
  }

  function onBackspace() {
    if (!activeId) return;
    rememberSelection();
    const { start, end } = selectionRef.current;
    const { next, caret } = deleteBackward(draft, start, end);
    setActiveAnalysis(next, caret);
  }

  function onSpace() {
    typeChunk(" ");
  }

  function onClearAnalysis() {
    setActiveAnalysis("", 0);
    setLastKey(null);
  }

  function splitSentence(raw = sentence) {
    const nextUnits = buildUnitsFromSentence(raw);
    setUnits(nextUnits);
    setActiveId(nextUnits[0]?.id ?? null);
    setLastKey(null);
    setAyahMeta(null);
    setChecked(false);
    setSentenceOpen(false);
    setPickerOpen(true);
  }

  function loadSample() {
    setSentence(SAMPLE_SENTENCE);
    splitSentence(SAMPLE_SENTENCE);
    setAyahMeta(null);
    setChecked(false);
  }

  async function loadQuranAyah() {
    setAyahLoading(true);
    setAyahError("");
    setChecked(false);
    try {
      const pack = await loadAyahForIraabPractice(Number(surah), Number(ayah));
      setSentence(pack.sentence);
      setUnits(pack.units);
      setActiveId(pack.units[0]?.id ?? null);
      setLastKey(null);
      setAyahMeta({
        surah: pack.reference.surah,
        ayah: pack.reference.ayah,
        ayahEnd: pack.reference.ayahEnd ?? pack.reference.ayah,
        surahAr: pack.reference.surahMeta.ar,
        sourceLabel: pack.reference.sourceLabel,
        sourceUrl: pack.reference.sourceUrl,
        ayahs: pack.ayahs || pack.reference.ayahs || [],
      });
      setPickerOpen(false);
      setSentenceOpen(false);
    } catch (err) {
      setAyahError(err?.message || "Could not load āyah / Daas iʿrāb.");
    } finally {
      setAyahLoading(false);
    }
  }

  async function generateWholeAyahGuide() {
    const text = fullIraab.trim();
    if (!text || !ayahMeta) {
      setGuideError("Load an āyah with Daʿʿās iʿrāb first.");
      return;
    }
    setGuideLoading(true);
    setGuideError("");
    try {
      const rangeLabel = formatAyahRangeLabel(ayahMeta.ayah, ayahMeta.ayahEnd);
      const next = await generateBeginnerGuide({
        iraab: text,
        surahName: surahMeta?.en || "",
        ayahLabel: rangeLabel,
        ayahText: sentence,
        ayahs: ayahMeta.ayahs || [],
      });
      const pack = {
        ...next,
        surahNameEn: next.surahNameEn || surahMeta?.en || "",
        ayahLabel: next.ayahLabel || rangeLabel,
        ayahText: next.ayahText || sentence,
        ayahs: next.ayahs?.length ? next.ayahs : ayahMeta.ayahs || [],
      };
      setGuidePack(pack);
      saveGuide({
        surah: ayahMeta.surah,
        ayah: ayahMeta.ayah,
        iraab: text,
        pack,
      });
    } catch (err) {
      setGuideError(
        /API_KEY|insufficient_quota|credit/i.test(err?.message || "")
          ? "The cream page below is already built from Daʿʿās. A rewrite needs a working AI key."
          : err?.message || "Could not rewrite the page.",
      );
    } finally {
      setGuideLoading(false);
    }
  }

  function resetAll() {
    setSentence("");
    setUnits([]);
    setActiveId(null);
    setLastKey(null);
    setAyahMeta(null);
    setChecked(false);
    setAyahError("");
    setPickerOpen(true);
    setSentenceOpen(true);
  }

  function runCheck() {
    if (!hasReference) return;
    setChecked(true);
  }

  function mergeWithNext(index) {
    if (index < 0 || index >= units.length - 1) return;
    setChecked(false);
    setUnits((prev) => {
      const a = prev[index];
      const b = prev[index + 1];
      const refParts = [a.reference, b.reference].filter(Boolean);
      const merged = {
        id: a.id,
        text: `${a.text} ${b.text}`.replace(/\s+/g, " ").trim(),
        analysis: a.analysis || b.analysis || "",
        ...(refParts.length
          ? { reference: refParts.join(" ") }
          : {}),
      };
      return [...prev.slice(0, index), merged, ...prev.slice(index + 2)];
    });
    setActiveId(units[index]?.id ?? null);
  }

  function splitActiveUnit() {
    if (!activeUnit) return;
    const parts = tokenizeArabicPassage(activeUnit.text);
    if (parts.length < 2) return;
    const idx = units.findIndex((u) => u.id === activeId);
    if (idx < 0) return;
    setChecked(false);
    const fresh = parts.map((p, i) => ({
      id: `${activeUnit.id}-s${i}-${p.bare}`,
      text: p.display,
      analysis: i === 0 ? activeUnit.analysis : "",
      ...(i === 0 && activeUnit.reference
        ? { reference: activeUnit.reference }
        : {}),
    }));
    setUnits((prev) => [...prev.slice(0, idx), ...fresh, ...prev.slice(idx + 1)]);
    setActiveId(fresh[0].id);
  }

  function goAdjacent(delta) {
    if (!units.length) return;
    const idx = units.findIndex((u) => u.id === activeId);
    const nextIdx = Math.min(units.length - 1, Math.max(0, (idx < 0 ? 0 : idx) + delta));
    setActiveId(units[nextIdx].id);
    setLastKey(null);
    if (practiceOpen) {
      requestAnimationFrame(() => textareaRef.current?.focus());
    }
  }

  function openPractice() {
    setPracticeOpen(true);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => textareaRef.current?.focus());
    });
  }

  async function onCopyAll() {
    const plain = formatPlainBreakdown(sentence, units);
    if (!plain.trim()) return;
    try {
      await navigator.clipboard.writeText(plain);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* ignore */
    }
  }

  const q = query.trim().toLowerCase();
  const sections = IRAAB_KEYBOARD_SECTIONS.filter(
    (s) => activeSection === "all" || s.id === activeSection,
  )
    .map((section) => {
      if (!q) return section;
      const keys = section.keys.filter(
        (k) =>
          k.ar?.toLowerCase().includes(q) ||
          k.en?.toLowerCase().includes(q) ||
          (k.insert && k.insert.toLowerCase().includes(q)),
      );
      return { ...section, keys };
    })
    .filter((s) => s.keys.length > 0);

  const activeIndex = units.findIndex((u) => u.id === activeId);
  const showPickerForm = !ayahMeta || pickerOpen;
  const ayahCite = ayahMeta
    ? formatAyahRangeLabel(ayahMeta.ayah, ayahMeta.ayahEnd)
    : String(ayah);

  return (
    <CourseLayout
      fullWidth
      courseId="ajrumiyyah"
      sidebar={<AjrumiyyahCourseSidebar activeTool="keyboard" />}
    >
      <div className="ajrumiyyah-content ajr-ikb-page ajr-ikb-page--split">
        <header className="ajr-ikb-hero ajr-ikb-hero--compact">
          <div className="ajr-ikb-hero__row">
            <div className="ajr-ikb-hero__copy">
              <h1 className="ajr-ikb-title-ar" dir="rtl">
                {IRAAB_KEYBOARD_META.titleAr}
              </h1>
              <p className="ajr-ikb-subtitle">
                One colour = one iʿrāb state. The whole-āyah guide is the cream page below.
              </p>
            </div>
            <div className="ajr-ikb-color-key" aria-label="iʿrāb colour key">
              <span className="ajr-ikb-color-key__label">State</span>
              {IRAAB_CASE_KEY.map((item) => (
                <span key={item.id} className={`ajr-ikb-case-chip is-tone-${item.id}`}>
                  <span className="ajr-ikb-case-chip__ar" dir="rtl">
                    {item.ar}
                  </span>
                  <span className="ajr-ikb-case-chip__en">{item.en}</span>
                </span>
              ))}
            </div>
          </div>
        </header>

        <div className={`ajr-ikb-split${practiceOpen ? "" : " is-practice-collapsed"}`}>
          <div className="ajr-ikb-split__text">
            <section
              className={`ajr-ikb-quran${ayahMeta && !pickerOpen ? " is-collapsed" : ""}`}
              aria-label="Qurʾān āyah picker"
            >
              {ayahMeta && !pickerOpen ? (
                <div className="ajr-ikb-cite">
                  <p className="ajr-ikb-cite__text" dir="rtl">
                    <span className="ajr-ikb-cite__ar">
                      {ayahMeta.surahAr} {ayahCite}
                    </span>
                    <span className="ajr-ikb-cite__sep">·</span>
                    <span>{ayahMeta.sourceLabel}</span>
                  </p>
                  <div className="ajr-ikb-cite__actions">
                    {ayahMeta.sourceUrl ? (
                      <a
                        className="ajr-ikb-quran__link"
                        href={ayahMeta.sourceUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        tafsir.app ↗
                      </a>
                    ) : null}
                    <button
                      type="button"
                      className="ajr-ikb-util"
                      onClick={() => setPickerOpen(true)}
                    >
                      Change
                    </button>
                  </div>
                </div>
              ) : null}

              {showPickerForm ? (
                <>
                  <div className="ajr-ikb-quran__bar">
                    <span className="ajr-ikb-composer__label">Qurʾān · Daas</span>
                    {ayahMeta ? (
                      <button
                        type="button"
                        className="ajr-ikb-util"
                        onClick={() => setPickerOpen(false)}
                      >
                        Done
                      </button>
                    ) : null}
                  </div>
                  <div className="ajr-ikb-quran__row">
                    <label className="ajr-ikb-quran__field">
                      <span>Sūrah</span>
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
                    <label className="ajr-ikb-quran__field ajr-ikb-quran__field--ayah">
                      <span>Āyah</span>
                      <input
                        type="number"
                        min={1}
                        max={maxAyah}
                        value={ayah}
                        onChange={(e) => setAyah(Number(e.target.value) || 1)}
                        aria-label="Āyah number"
                      />
                    </label>
                    <button
                      type="button"
                      className="ajr-ikb-util ajr-ikb-util--accent"
                      onClick={loadQuranAyah}
                      disabled={ayahLoading}
                    >
                      {ayahLoading ? "Loading…" : "Load āyah"}
                    </button>
                  </div>
                </>
              ) : null}

              {ayahError ? (
                <p className="ajr-ikb-quran__error" role="alert">
                  {ayahError}
                </p>
              ) : null}
            </section>

            {practicing ? (
              <div className="ajr-ikb-ayah-groups">
                {ayahGroups.map((group, gi) => (
                  <section
                    key={`group-${group.ayah ?? "u"}-${gi}`}
                    className="ajr-ikb-ayah-group"
                    aria-label={group.ayah ? `Āyah ${group.ayah}` : "Passage"}
                  >
              <div
                className="ajr-ikb-ayah"
                dir="rtl"
                aria-label="Āyah with active word"
                style={{ "--ikb-preview-scale": fontScale }}
              >
                {group.ayah ? (
                  <span
                    className="ajr-ikb-ayah__mark ajr-ikb-ayah__mark--start"
                    title={`Āyah ${group.ayah}`}
                  >
                    {group.ayah}
                  </span>
                ) : null}
                {group.units.map(({ unit, index }) => {
                  const word = showTashkeel
                    ? unit.text
                    : unit.text.replace(/[\u064B-\u065F\u0670\u06D6-\u06ED]/g, "");
                  const tone = unit.reference ? unitTones[index] : "";
                  return (
                    <button
                      key={`ayah-${unit.id}`}
                      type="button"
                      className={[
                        "ajr-ikb-ayah__word",
                        activeId === unit.id && "is-active",
                        unit.analysis.trim() && "is-done",
                        tone && `is-tone-${tone}`,
                      ]
                        .filter(Boolean)
                        .join(" ")}
                      onClick={() => {
                        setActiveId(unit.id);
                        setLastKey(null);
                        if (practiceOpen) {
                          requestAnimationFrame(() => textareaRef.current?.focus());
                        }
                      }}
                    >
                      {word}
                    </button>
                  );
                })}
              </div>

                    {group.ayah && wordGlossesByAyah[group.ayah]?.length ? (
                      <div className="ajr-ikb-ayah__wbw" dir="rtl">
                        {wordGlossesByAyah[group.ayah].map((w, wi) => (
                          <span className="ajr-ikb-ayah__wbw-item" key={`wbw-${group.ayah}-${wi}`}>
                            <span className="ajr-ikb-ayah__wbw-ar">{w.ar}</span>
                            <span className="ajr-ikb-ayah__wbw-en">{w.en}</span>
                          </span>
                        ))}
                      </div>
                    ) : null}

                    {group.ayah && ayahTranslations[group.ayah] ? (
                      <p className="ajr-ikb-ayah__translation" dir="ltr">
                        <span className="ajr-ikb-ayah__translation-n">{group.ayah}</span>
                        {ayahTranslations[group.ayah]}
                      </p>
                    ) : null}

                    {hasReference ? (
                      <div
                        className={`ajr-ikb-study${
                          activeResult && group.units.some(({ unit }) => unit.id === activeId)
                            ? activeResult.ok
                              ? " is-ok"
                              : " is-miss"
                            : ""
                        }`}
                        dir="rtl"
                      >
                        <div className="ajr-ikb-daas ajr-ikb-daas--flow">
                          {group.units.map(({ unit, index }) => {
                            const tone = unitTones[index] || "none";
                            const caseMeta = iraabCaseMeta(tone);
                            const result = checkResults?.find((r) => r.id === unit.id);
                            return (
                              <button
                                key={`ref-${unit.id}`}
                                type="button"
                                className={[
                                  "ajr-ikb-daas__seg",
                                  `is-tone-${tone}`,
                                  activeId === unit.id && "is-active",
                                  result && (result.ok ? "is-ok" : "is-miss"),
                                ]
                                  .filter(Boolean)
                                  .join(" ")}
                                onClick={() => {
                                  setActiveId(unit.id);
                                  if (practiceOpen) {
                                    requestAnimationFrame(() => textareaRef.current?.focus());
                                  }
                                }}
                              >
                                <span className={`ajr-ikb-study__bracket is-tone-${tone}`}>
                                  ﴿{unit.text}﴾
                                </span>
                                <span className={`ajr-ikb-case-pill is-tone-${tone}`}>
                                  {caseMeta.ar}
                                </span>
                                <span className="ajr-ikb-daas__plain">{unit.reference}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    ) : null}
                  </section>
                ))}

                {activeResult?.missing?.length ? (
                  <p className="ajr-ikb-daas__miss">
                    ناقص: {activeResult.missing.slice(0, 6).join(" · ")}
                    {activeResult.missing.length > 6 ? "…" : ""}
                  </p>
                ) : null}
              </div>
            ) : null}

            {practicing ? (
              <div className="ajr-ikb-rail-block">
                <div className="ajr-ikb-rail-block__bar">
                  <button
                    type="button"
                    className="ajr-ikb-disclosure"
                    onClick={() => setShowRail((v) => !v)}
                    aria-expanded={showRail}
                  >
                    {showRail ? "Hide segments" : `Segments · ${units.length}`}
                  </button>
                  <button
                    type="button"
                    className="ajr-ikb-disclosure"
                    onClick={() => setSentenceOpen((v) => !v)}
                    aria-expanded={sentenceOpen}
                  >
                    {sentenceOpen ? "Hide editor" : "Paste / edit"}
                  </button>
                </div>
                {showRail ? (
                  <div className="ajr-ikb-word-rail" role="list" aria-label="Words">
                    {units.map((unit, index) => {
                      const done = Boolean(unit.analysis.trim());
                      const result = checkResults?.find((r) => r.id === unit.id);
                      const mark =
                        result == null ? "" : result.ok ? " is-ok" : " is-miss";
                      return (
                        <div key={unit.id} className="ajr-ikb-word-rail__item" role="listitem">
                          <button
                            type="button"
                            className={`ajr-ikb-word-chip${activeId === unit.id ? " is-active" : ""}${
                              done ? " is-done" : ""
                            }${mark}`}
                            onClick={() => {
                              setActiveId(unit.id);
                              setLastKey(null);
                              if (practiceOpen) {
                                requestAnimationFrame(() => textareaRef.current?.focus());
                              }
                            }}
                          >
                            <span className="ajr-ikb-word-chip__n">{index + 1}</span>
                            <span className="ajr-ikb-word-chip__ar" dir="rtl">
                              {unit.text}
                            </span>
                          </button>
                          {index < units.length - 1 ? (
                            <button
                              type="button"
                              className="ajr-ikb-merge"
                              title="Merge with next word"
                              aria-label={`Merge ${unit.text} with next`}
                              onClick={() => mergeWithNext(index)}
                            >
                              ⟷
                            </button>
                          ) : null}
                        </div>
                      );
                    })}
                  </div>
                ) : null}
              </div>
            ) : null}

            {(!practicing || sentenceOpen) && (
              <section className="ajr-ikb-sentence" aria-label="Sentence input">
                <div className="ajr-ikb-sentence__bar">
                  <label className="ajr-ikb-composer__label" htmlFor={sentenceFieldId}>
                    Sentence
                  </label>
                  <div className="ajr-ikb-composer__actions">
                    <button type="button" className="ajr-ikb-util" onClick={loadSample}>
                      Sample
                    </button>
                    <button
                      type="button"
                      className="ajr-ikb-util ajr-ikb-util--accent"
                      onClick={() => {
                        splitSentence();
                        setSentenceOpen(false);
                      }}
                      disabled={!sentence.trim()}
                    >
                      Split
                    </button>
                    <button
                      type="button"
                      className="ajr-ikb-util"
                      onClick={resetAll}
                      disabled={!sentence && !units.length}
                    >
                      Reset
                    </button>
                  </div>
                </div>
                <textarea
                  id={sentenceFieldId}
                  className="ajr-ikb-sentence__field"
                  dir="rtl"
                  lang="ar"
                  rows={2}
                  value={sentence}
                  placeholder="الصَقْ جُمْلَةً هُنَا… ثم اضغط Split"
                  onChange={(e) => {
                    setSentence(e.target.value);
                    setAyahMeta(null);
                    setChecked(false);
                    setPickerOpen(true);
                  }}
                  spellCheck={false}
                />
                {!practicing ? (
                  <p className="ajr-ikb-composer__hint">
                    Load an āyah above, or paste a sentence and Split.
                  </p>
                ) : null}
              </section>
            )}

            {!hasReference && activeUnit ? (
              <section className="ajr-ikb-workspace" aria-label="Daas iʿrāb">
                <div className="ajr-ikb-study ajr-ikb-study--empty" dir="rtl">
                  <p className="ajr-ikb-study__line">
                    <span className="ajr-ikb-study__bracket">﴿{activeUnit.text}﴾</span>
                    <span className="ajr-ikb-study__hint"> No Daas line — write freely</span>
                  </p>
                </div>
              </section>
            ) : null}
          </div>

          <aside
            className={`ajr-ikb-split__keys${practiceOpen ? "" : " is-collapsed"}${
              activeId ? "" : " is-dimmed"
            }`}
            aria-label="Practice keyboard"
          >
            <button
              type="button"
              className="ajr-ikb-practice-handle"
              onClick={() => (practiceOpen ? setPracticeOpen(false) : openPractice())}
              aria-expanded={practiceOpen}
            >
              <span className="ajr-ikb-practice-handle__bar" aria-hidden="true" />
              <span className="ajr-ikb-practice-handle__copy">
                <span className="ajr-ikb-practice-handle__label">
                  {practiceOpen ? "Hide practice" : "Practice"}
                </span>
                {activeUnit ? (
                  <strong className="ajr-ikb-practice-handle__word" dir="rtl">
                    {activeUnit.text}
                  </strong>
                ) : null}
              </span>
            </button>

            <div className="ajr-ikb-practice-body">
              <div className="ajr-ikb-compose">
                <div className="ajr-ikb-compose__head">
                  <div className="ajr-ikb-compose__title">
                    <span className="ajr-ikb-workspace__kicker">إعرابي</span>
                    {activeUnit ? (
                      <h2 className="ajr-ikb-workspace__word" dir="rtl">
                        {activeUnit.text}
                      </h2>
                    ) : (
                      <h2 className="ajr-ikb-workspace__word is-muted">
                        Select a word in the āyah
                      </h2>
                    )}
                  </div>
                  <div className="ajr-ikb-compose__nav">
                    <button
                      type="button"
                      className="ajr-ikb-util"
                      onClick={() => goAdjacent(-1)}
                      disabled={activeIndex <= 0}
                      aria-label="Previous word"
                    >
                      ←
                    </button>
                    <button
                      type="button"
                      className="ajr-ikb-util ajr-ikb-util--accent"
                      onClick={() => goAdjacent(1)}
                      disabled={activeIndex < 0 || activeIndex >= units.length - 1}
                    >
                      Next →
                    </button>
                    <button
                      type="button"
                      className="ajr-ikb-util"
                      onClick={() => setPracticeOpen(false)}
                    >
                      Hide
                    </button>
                  </div>
                </div>

                <textarea
                  ref={textareaRef}
                  className="ajr-ikb-composer__field ajr-ikb-workspace__field"
                  dir="rtl"
                  lang="ar"
                  rows={3}
                  value={draft}
                  disabled={!activeId}
                  placeholder=""
                  aria-label={
                    activeUnit ? `إعراب ${activeUnit.text}` : "إعراب الكلمة"
                  }
                  onChange={(e) => setActiveAnalysis(e.target.value)}
                  onSelect={rememberSelection}
                  onKeyUp={rememberSelection}
                  onClick={rememberSelection}
                  spellCheck={false}
                />

                <div className="ajr-ikb-compose__toolbar">
                  <div className="ajr-ikb-compose__tools">
                    {hasReference ? (
                      <button
                        type="button"
                        className="ajr-ikb-util ajr-ikb-util--accent"
                        onClick={runCheck}
                        disabled={!doneCount}
                      >
                        Check vs Daas
                      </button>
                    ) : null}
                    <button
                      type="button"
                      className="ajr-ikb-util"
                      onClick={onSpace}
                      disabled={!activeId}
                    >
                      Space
                    </button>
                    <button
                      type="button"
                      className="ajr-ikb-util"
                      onClick={onBackspace}
                      disabled={!activeId}
                    >
                      ⌫
                    </button>
                    <button
                      type="button"
                      className="ajr-ikb-util"
                      onClick={onClearAnalysis}
                      disabled={!draft}
                    >
                      Clear
                    </button>
                    <button
                      type="button"
                      className="ajr-ikb-util"
                      onClick={splitActiveUnit}
                      disabled={
                        !activeUnit ||
                        tokenizeArabicPassage(activeUnit.text).length < 2
                      }
                    >
                      Unmerge
                    </button>
                  </div>
                  <div className="ajr-ikb-compose__tools ajr-ikb-compose__tools--secondary">
                    <button
                      type="button"
                      className="ajr-ikb-util"
                      onClick={() => setShowTashkeel((v) => !v)}
                    >
                      {showTashkeel ? "Tashkeel off" : "Tashkeel on"}
                    </button>
                    <button
                      type="button"
                      className="ajr-ikb-util"
                      onClick={() =>
                        setFontScale((s) => Math.min(1.45, +(s + 0.08).toFixed(2)))
                      }
                    >
                      A+
                    </button>
                    <button
                      type="button"
                      className="ajr-ikb-util"
                      onClick={() =>
                        setFontScale((s) => Math.max(0.85, +(s - 0.08).toFixed(2)))
                      }
                    >
                      A−
                    </button>
                    <button
                      type="button"
                      className={`ajr-ikb-util${copied ? " is-done" : ""}`}
                      onClick={onCopyAll}
                    >
                      {copied ? "Copied" : "Copy"}
                    </button>
                  </div>
                </div>

                {lastKey ? (
                  <p className="ajr-ikb-composer__hint" aria-live="polite">
                    Last · <strong dir="rtl">{lastKey.ar}</strong>
                    {lastKey.en ? <span> — {lastKey.en}</span> : null}
                  </p>
                ) : null}
              </div>

            <section className="ajr-ikb-templates" aria-label="Starter templates">
              <p className="ajr-ikb-section-label">
                <span dir="rtl">قَوَالِبُ</span>
                <span>Templates</span>
              </p>
              <div className="ajr-ikb-templates__row">
                {IRAAB_TEMPLATES.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    className="ajr-ikb-template"
                    disabled={!activeId}
                    onClick={() => {
                      setActiveAnalysis(t.text, t.text.length);
                      setLastKey({ ar: t.labelAr, en: t.labelEn });
                    }}
                  >
                    <span dir="rtl">{t.labelAr}</span>
                    <span>{t.labelEn}</span>
                  </button>
                ))}
              </div>
            </section>

            <div className="ajr-ikb-toolbar">
              <label className="ajr-ikb-search">
                <span className="ajr-ikb-search__label">Find</span>
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Arabic or English…"
                  dir="auto"
                  aria-label="Search terms"
                />
              </label>
              <div className="ajr-ikb-tabs" role="tablist" aria-label="Keyboard sections">
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeSection === "all"}
                  className={activeSection === "all" ? "is-active" : ""}
                  onClick={() => setActiveSection("all")}
                >
                  All
                </button>
                {IRAAB_KEYBOARD_SECTIONS.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    role="tab"
                    aria-selected={activeSection === s.id}
                    className={activeSection === s.id ? "is-active" : ""}
                    onClick={() => setActiveSection(s.id)}
                  >
                    <span dir="rtl">{s.titleAr}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="ajr-ikb-board" aria-label="Iʿrāb keyboard">
              {sections.length === 0 ? (
                <p className="ajr-ikb-empty">No keys match “{query}”.</p>
              ) : (
                sections.map((section) => (
                  <section
                    key={section.id}
                    className="ajr-ikb-row"
                    aria-labelledby={`ikb-${section.id}`}
                  >
                    <header className="ajr-ikb-row__head" id={`ikb-${section.id}`}>
                      <h2 dir="rtl">{section.titleAr}</h2>
                      <p>{section.titleEn}</p>
                    </header>
                    <div className="ajr-ikb-keys" role="group" aria-label={section.titleEn}>
                      {section.keys.map((key) => (
                        <button
                          key={key.id}
                          type="button"
                          className={`ajr-ikb-key is-tone-${key.tone || "role"}`}
                          disabled={!activeId}
                          onClick={() => typeChunk(keyInsertText(key), key)}
                          title={key.en}
                        >
                          <span className="ajr-ikb-key__ar" dir="rtl">
                            {key.ar}
                          </span>
                          {key.en ? <span className="ajr-ikb-key__en">{key.en}</span> : null}
                        </button>
                      ))}
                    </div>
                  </section>
                ))
              )}
            </div>
            </div>
          </aside>
        </div>

        {practicing && hasReference ? (
          <section className="ajr-ikb-beginner-page" aria-label="Beginner's iʿrāb guide">
            {guidePack ? (
              <>
                <div className="ajr-ikb-beginner-page__tools">
                  <button
                    type="button"
                    className="ajr-ikb-util"
                    onClick={generateWholeAyahGuide}
                    disabled={guideLoading || !fullIraab}
                  >
                    {guideLoading ? "Claude is writing this iʿrāb…" : "Regenerate with Claude"}
                  </button>
                </div>
                <IraabBeginnerGuideView pack={guidePack} />
                {guideError ? (
                  <p className="ajr-ikb-quran__error" role="alert">
                    {guideError}
                  </p>
                ) : null}
              </>
            ) : (
              <div className="ajr-ikb-beginner__empty">
                <button
                  type="button"
                  className="ajr-ikb-util ajr-ikb-util--accent"
                  onClick={generateWholeAyahGuide}
                  disabled={guideLoading || !fullIraab}
                >
                  {guideLoading ? "Claude is writing this iʿrāb…" : "Generate with Claude"}
                </button>
                {guideError ? (
                  <p className="ajr-ikb-quran__error" role="alert">
                    {guideError}
                  </p>
                ) : (
                  <p className="ajr-ikb-composer__hint">
                    Opens a beginner page from this grouping's Daʿʿās via Claude.
                  </p>
                )}
              </div>
            )}
          </section>
        ) : null}

        {practiceOpen ? (
          <button
            type="button"
            className="ajr-ikb-practice-scrim"
            aria-label="Hide practice"
            onClick={() => setPracticeOpen(false)}
          />
        ) : (
          <button
            type="button"
            className="ajr-ikb-practice-launch"
            onClick={openPractice}
          >
            <span className="ajr-ikb-practice-launch__kicker">إعرابي</span>
            <span className="ajr-ikb-practice-launch__title">Practice</span>
            {activeUnit ? (
              <span className="ajr-ikb-practice-launch__word" dir="rtl">
                {activeUnit.text}
              </span>
            ) : (
              <span className="ajr-ikb-practice-launch__hint">Write iʿrāb</span>
            )}
          </button>
        )}
      </div>
    </CourseLayout>
  );
}

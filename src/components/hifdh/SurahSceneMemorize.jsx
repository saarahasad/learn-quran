import { useEffect, useMemo, useState } from "react";
import { getMushafPageForAyah } from "../../data/mushafPageMap.js";
import { estimateSessionDurationLabel, parseVerseRange } from "../../utils/hifdhSession.js";
import HifdhSessionMode from "./HifdhSessionMode.jsx";
import "../../styles/hifdh-session.css";

export function buildSceneMemorizeSession(surah, scene) {
  if (!surah || !scene?.range) return null;

  const selectedAyat = parseVerseRange(scene.range);
  if (!selectedAyat.length) return null;

  const sessionAyahs = surah.ayahs.filter((ayah) => selectedAyat.includes(ayah.n));
  const firstAyah = selectedAyat[0];
  const mushafPage = getMushafPageForAyah(
    surah.revelationOrder,
    firstAyah,
    surah.ayahCount,
  );

  if (!mushafPage) return null;

  return {
    selectedAyat,
    sessionAyahs,
    mushafPage,
    sceneTitle: scene.title,
    verseRange: scene.range,
  };
}

function sceneIndexForPage(surah, mushafPage) {
  if (!mushafPage || !surah?.scenes?.length) return 0;

  const match = surah.scenes.findIndex((scene) => {
    const ayat = parseVerseRange(scene.range);
    return ayat.some(
      (ayahNumber) =>
        getMushafPageForAyah(surah.revelationOrder, ayahNumber, surah.ayahCount) ===
        mushafPage,
    );
  });

  return match >= 0 ? match : 0;
}

export default function SurahSceneMemorize({
  surah,
  activeMushafPage = null,
  compact = false,
}) {
  const scenes = surah?.scenes ?? [];
  const [selectedSceneIndex, setSelectedSceneIndex] = useState(0);
  const [sessionOpen, setSessionOpen] = useState(false);

  useEffect(() => {
    if (activeMushafPage) {
      setSelectedSceneIndex(sceneIndexForPage(surah, activeMushafPage));
    }
  }, [activeMushafPage, surah]);

  useEffect(() => {
    setSessionOpen(false);
  }, [surah.id]);

  const session = useMemo(() => {
    const scene = scenes[selectedSceneIndex];
    return scene ? buildSceneMemorizeSession(surah, scene) : null;
  }, [surah, scenes, selectedSceneIndex]);

  const sessionDurationLabel = session?.selectedAyat?.length
    ? estimateSessionDurationLabel(session.selectedAyat)
    : "";

  if (!scenes.length || !session) return null;

  const scene = scenes[selectedSceneIndex];

  return (
    <section
      className={`surah-scene-memorize${compact ? " surah-scene-memorize--compact" : ""}`}
      aria-label={`Memorize ${surah.name}`}
    >
      <header className="surah-scene-memorize__header">
        <div>
          <p className="surah-scene-memorize__kicker">Guided memorization</p>
          <h3>{surah.name}</h3>
        </div>
        <div className="baqarah-guide-memorize-wrap">
          <button
            type="button"
            className="baqarah-guide-memorize-btn"
            onClick={() => setSessionOpen(true)}
          >
            Memorize This Passage
          </button>
          {sessionDurationLabel && (
            <p className="baqarah-guide-session-duration">
              Full guided session · {sessionDurationLabel}
            </p>
          )}
        </div>
      </header>

      {scenes.length > 1 && (
        <nav className="surah-scene-memorize__nav" aria-label="Scenes">
          {scenes.map((item, index) => {
            const isActive = index === selectedSceneIndex;
            return (
              <button
                key={`${item.title}-${item.range}`}
                type="button"
                className={`surah-scene-memorize__tab${isActive ? " is-active" : ""}`}
                onClick={() => setSelectedSceneIndex(index)}
                aria-current={isActive ? "true" : undefined}
              >
                <span className="surah-scene-memorize__tab-title">{item.title}</span>
                <span className="surah-scene-memorize__tab-range">Āyāt {item.range}</span>
              </button>
            );
          })}
        </nav>
      )}

      <article className="surah-scene-memorize__scene">
        <div className="surah-scene-memorize__scene-head">
          <h4>{scene.title}</h4>
          <span className="surah-scene-memorize__scene-range">Āyāt {scene.range}</span>
        </div>
        {scene.hook && <p className="surah-scene-memorize__hook">{scene.hook}</p>}
        {scene.memory && (
          <p className="surah-scene-memorize__memory">
            <strong>Memory anchor:</strong> {scene.memory}
          </p>
        )}
      </article>

      {sessionOpen && (
        <HifdhSessionMode
          selectedAyat={session.selectedAyat}
          surahNumber={surah.revelationOrder}
          mushafPage={session.mushafPage}
          localAyahs={session.sessionAyahs}
          onClose={() => setSessionOpen(false)}
        />
      )}
    </section>
  );
}

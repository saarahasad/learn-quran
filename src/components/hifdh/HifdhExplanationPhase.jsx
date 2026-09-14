import { useMemo } from "react";
import BaqarahVerseStudy from "../baqarah/BaqarahVerseStudy.jsx";
import { getVerseStudy } from "../../utils/hifdhAyahContent.js";
import { toArabicNum } from "../../utils/mushafText.js";

export default function HifdhExplanationPhase({
  ayahNumber,
  mushafPage,
  onContinue,
}) {
  const verseStudy = useMemo(
    () => getVerseStudy(mushafPage, ayahNumber),
    [mushafPage, ayahNumber],
  );

  return (
    <div className="hifdh-session__study-page">
      <div className="hifdh-session__study-scroll">
        {verseStudy ? (
          <BaqarahVerseStudy section={verseStudy} />
        ) : (
          <p className="hifdh-session__study-empty">
            Study notes for āyah {toArabicNum(ayahNumber)} are not on this page yet.
          </p>
        )}
      </div>

      <div className="hifdh-session__study-bar">
        <button type="button" className="hifdh-teacher-prompt__reply" onClick={onContinue}>
          Continue to shadow
        </button>
      </div>
    </div>
  );
}

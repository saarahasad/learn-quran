import { Link } from "react-router-dom";
import { firstSentence } from "../../utils/iraabTutorVisuals.js";

export function CompactPoemLinks({ poem }) {
  if (!poem?.length) return null;
  return (
    <div className="ajr-ikb-tutor__links">
      <p className="ajr-ikb-tutor__poem-label">In the poem</p>
      {poem.map((hit) => (
        <Link
          key={`${hit.chapterId}-${hit.lineIndex}`}
          className="ajr-ikb-tutor__link"
          to={hit.href}
        >
          <span className="ajr-ikb-tutor__link-en">
            Bāb {hit.chapterNum} · {hit.chapterEn}
          </span>
          <span className="ajr-ikb-tutor__link-ar" dir="rtl">
            {hit.ar}
          </span>
        </Link>
      ))}
    </div>
  );
}

export function CompactCommentaryLinks({ commentary }) {
  if (!commentary?.length) return null;
  const blurb = firstSentence(commentary[0]?.text);
  if (!blurb) return null;
  return (
    <div className="ajr-ikb-tutor__links">
      <p className="ajr-ikb-tutor__poem-label">Commentary</p>
      {commentary.map((hit) => (
        <Link
          key={`c-${hit.chapterId}-${hit.lineIndex}`}
          className="ajr-ikb-tutor__link"
          to={hit.href}
        >
          <span className="ajr-ikb-tutor__link-en">{hit.chapterEn}</span>
          <span className="ajr-ikb-tutor__link-blurb">{firstSentence(hit.text)}</span>
        </Link>
      ))}
    </div>
  );
}

import { Link } from "react-router-dom";
import { AJRUMIYYAH_META, ajrumiyyahCoursePath } from "../../data/ajrumiyyahCourse.js";
import {
  ajrumiyyahNominativesQuizPath,
  nominativesChapters,
} from "../../data/nominativesMastery.js";
import { useNominativesMastery } from "../../hooks/useNominativesMastery.js";

function Ring({ mastered, total, size = 72, tone = "matn" }) {
  const pct = total ? mastered / total : 0;
  const r = 28;
  const c = 2 * Math.PI * r;
  const dash = c * pct;
  return (
    <svg
      className={`nm-ring nm-ring--${tone}`}
      width={size}
      height={size}
      viewBox="0 0 72 72"
      aria-hidden
    >
      <circle className="nm-ring__track" cx="36" cy="36" r={r} />
      <circle
        className="nm-ring__fill"
        cx="36"
        cy="36"
        r={r}
        strokeDasharray={`${dash} ${c}`}
        transform="rotate(-90 36 36)"
      />
      <text className="nm-ring__label" x="36" y="40" textAnchor="middle">
        {mastered}/{total}
      </text>
    </svg>
  );
}

export default function NominativesMasteryDashboard() {
  const { section, chapterStats } = useNominativesMastery();
  const chapters = nominativesChapters();

  return (
    <div className="ajrumiyyah-content nm-page">
      <header className="nm-hero course-card">
        <p className="nm-hero__kicker">Mastery quiz · trial</p>
        <h1 className="nm-hero__title">Nominatives Trial</h1>
        <p className="nm-hero__ar" dir="rtl">
          مَرْفُوعَاتُ الْأَسْمَاءِ
        </p>
        <p className="nm-hero__lede">
          Chapters 5–9 of {AJRUMIYYAH_META.name}. Two tracks: verbatim matn (3
          separate fully-correct recalls) and commentary/explanation rules (3
          conceptually accurate answers). A miss resets that question’s streak.
        </p>
        <p className="nm-hero__section">
          Nominatives — <strong>{section.memorized}/5</strong> chapters memorized
          <span className="nm-hero__rules">
            · Rules complete: {section.rulesComplete}/5
          </span>
        </p>
        <p className="nm-hero__cta">
          <Link className="course-btn primary" to={ajrumiyyahNominativesQuizPath("all")}>
            Practice due items across all 5 chapters
          </Link>
        </p>
      </header>

      <ul className="nm-chapter-grid">
        {chapters.map((chapter) => {
          const stats = chapterStats(chapter.id);
          return (
            <li key={chapter.id} className="nm-chapter-card course-card">
              <div className="nm-chapter-card__head">
                <span className="nm-chapter-card__num">{chapter.num}</span>
                <div>
                  <p className="nm-chapter-card__en">{chapter.translit}</p>
                  <p className="nm-chapter-card__ar" dir="rtl">
                    {chapter.ar}
                  </p>
                </div>
              </div>
              <div className="nm-chapter-card__rings">
                <div className="nm-chapter-card__stat">
                  <Ring
                    mastered={stats.matn.mastered}
                    total={stats.matn.total}
                    tone="matn"
                  />
                  <span>
                    Matn: {stats.matn.mastered}/{stats.matn.total}
                    {stats.matnDone ? " ✅" : ""}
                  </span>
                </div>
                <div className="nm-chapter-card__stat">
                  <Ring
                    mastered={stats.rule.mastered}
                    total={stats.rule.total}
                    tone="rule"
                  />
                  <span>
                    Rules: {stats.rule.mastered}/{stats.rule.total}
                    {stats.ruleDone ? " ✅" : ""}
                  </span>
                </div>
              </div>
              <div className="nm-chapter-card__actions">
                <Link
                  className="course-btn primary"
                  to={ajrumiyyahNominativesQuizPath(chapter.id)}
                >
                  Quiz this chapter
                </Link>
                <Link
                  className="course-btn ghost"
                  to={ajrumiyyahNominativesQuizPath(chapter.id, "matn")}
                >
                  Matn only
                </Link>
                <Link
                  className="course-btn ghost"
                  to={ajrumiyyahNominativesQuizPath(chapter.id, "rule")}
                >
                  Rules only
                </Link>
              </div>
            </li>
          );
        })}
      </ul>

      <p className="nm-foot">
        <Link to={ajrumiyyahCoursePath()}>← Course overview</Link>
      </p>
    </div>
  );
}

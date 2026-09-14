import { useMemo, useState } from "react";
import { toArabicNum } from "../../utils/mushafText.js";
import {
  IRAAB_CASES,
  buildGlanceMeta,
} from "../../utils/iraabGlance.js";

function IraabBadge({ kind, label }) {
  return (
    <span className={`baqarah-iraab-badge baqarah-iraab-badge--${kind}`}>
      {label}
    </span>
  );
}

function CaseLegend() {
  return (
    <div className="iraab-glance-legend" aria-label="Case colour key">
      {IRAAB_CASES.map((item) => (
        <span key={item.id} className={`iraab-glance-legend__item iraab-glance-legend__item--${item.id}`}>
          <span className="iraab-glance-legend__dot" aria-hidden="true" />
          {item.label}
          <span className="iraab-glance-legend__en">{item.labelEn}</span>
        </span>
      ))}
    </div>
  );
}

function WordChip({ row, meta, isActive, showLabels, onSelect }) {
  const caseClass = meta.caseId ? `iraab-glance-chip--${meta.caseId}` : "iraab-glance-chip--neutral";

  return (
    <button
      type="button"
      className={[
        "iraab-glance-chip",
        caseClass,
        isActive && "is-active",
        showLabels && "is-labelled",
      ]
        .filter(Boolean)
        .join(" ")}
      onClick={() => onSelect(row.word)}
      aria-pressed={isActive}
      title={`${meta.roleAr}${meta.caseLabel ? ` · ${meta.caseLabel}` : ""}`}
    >
      <span className="iraab-glance-chip__word" dir="rtl">
        {row.word}
      </span>
      {showLabels && (
        <span className="iraab-glance-chip__meta" dir="rtl">
          <span className="iraab-glance-chip__role">{meta.roleAr}</span>
          {meta.caseLabel && (
            <span className="iraab-glance-chip__case">{meta.caseLabel}</span>
          )}
        </span>
      )}
    </button>
  );
}

function WordDetail({ row, meta }) {
  return (
    <div className="iraab-glance-detail">
      <div className="iraab-glance-detail__head">
        <p className="iraab-glance-detail__word" dir="rtl">
          {row.word}
        </p>
        <div className="iraab-glance-detail__tags">
          <IraabBadge kind={row.typeKind} label={row.typeLabel} />
          {meta.caseLabel && (
            <span className={`iraab-glance-detail__case iraab-glance-detail__case--${meta.caseId}`}>
              {meta.caseLabel}
              {meta.sign ? ` · ${meta.sign}` : ""}
            </span>
          )}
          <span className="iraab-glance-detail__role">{meta.roleEn}</span>
        </div>
      </div>

      <p className="iraab-glance-detail__chipline" dir="rtl">
        {meta.chipLabel}
      </p>

      <div
        className="iraab-glance-detail__ar"
        dir="rtl"
        dangerouslySetInnerHTML={{ __html: row.arHtml }}
      />

      {row.enHtml && (
        <div
          className="iraab-glance-detail__en"
          dangerouslySetInnerHTML={{ __html: row.enHtml }}
        />
      )}
    </div>
  );
}

function IraabGlanceAyah({ ayah }) {
  const rowsWithMeta = useMemo(
    () => ayah.rows.map((row) => ({ row, meta: buildGlanceMeta(row) })),
    [ayah.rows],
  );
  const [activeWord, setActiveWord] = useState(ayah.rows[0]?.word ?? null);
  const [showLabels, setShowLabels] = useState(true);

  const active = rowsWithMeta.find((entry) => entry.row.word === activeWord)
    ?? rowsWithMeta[0];

  return (
    <article className="iraab-glance-ayah" id={`iraab-glance-${ayah.verse}`}>
      <header className="baqarah-iraab-ayah__card">
        <p className="baqarah-iraab-ayah__label">
          Sūrat al-Baqarah · Āyah {ayah.verse}
        </p>
        <p className="baqarah-iraab-ayah__text" dir="rtl">
          {ayah.text}
        </p>
      </header>

      <div className="iraab-glance-toolbar">
        <CaseLegend />
        <label className="iraab-glance-toggle">
          <input
            type="checkbox"
            checked={showLabels}
            onChange={(event) => setShowLabels(event.target.checked)}
          />
          <span>Show role labels on words</span>
        </label>
      </div>

      <div className="iraab-glance-flow" dir="rtl" role="list" aria-label={`Word map for āyah ${ayah.verse}`}>
        {rowsWithMeta.map(({ row, meta }) => (
          <WordChip
            key={`${ayah.verse}-${row.word}`}
            row={row}
            meta={meta}
            isActive={active?.row.word === row.word}
            showLabels={showLabels}
            onSelect={setActiveWord}
          />
        ))}
      </div>

      {active && <WordDetail row={active.row} meta={active.meta} />}
    </article>
  );
}

export default function BaqarahIraabGlance({ ayahs }) {
  return (
    <div className="iraab-glance">
      <p className="iraab-glance__intro">
        Tap any word — colour shows its <strong>case</strong> (رفع · نصب · جر · جزم · مبني),
        label shows its <strong>role</strong> (فاعل · مفعول · خبر…).
      </p>

      <nav className="baqarah-iraab-jump" aria-label="Jump to āyah">
        {ayahs.map((ayah) => (
          <a
            key={ayah.verse}
            href={`#iraab-glance-${ayah.verse}`}
            className="baqarah-iraab-jump__link"
          >
            <span className="baqarah-iraab-jump__num">{toArabicNum(ayah.verse)}</span>
            <span className="baqarah-iraab-jump__label">Āyah {ayah.verse}</span>
          </a>
        ))}
      </nav>

      {ayahs.map((ayah) => (
        <IraabGlanceAyah key={ayah.verse} ayah={ayah} />
      ))}
    </div>
  );
}

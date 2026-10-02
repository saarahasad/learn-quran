import { useMemo, useState } from "react";
import AjrumiyyahCourseSidebar from "../components/AjrumiyyahCourseSidebar.jsx";
import CourseLayout from "../components/CourseLayout.jsx";
import {
  IRAAB_KIND_FILTERS,
  IRAAB_TYPES,
  IRAAB_TYPES_META,
  iraabTypeCounts,
} from "../data/iraabTypesCatalog.js";
import "../styles/ajrumiyyah.css";
import "../styles/iraab-types.css";

const KIND_LABEL = {
  zahira: "ظَاهِرَة",
  muqaddara: "مُقَدَّرَة",
  huruf: "حُرُوف",
  mudmar: "مُضْمَر",
  anwa: "نَوْع",
};

function rowsForRule(blocks) {
  const rows = [];
  for (const block of blocks) {
    if (block.layout === "sheet") {
      block.rows.forEach((row, index) => {
        rows.push({
          key: `${block.typeAr}-${row[1]}-${index}`,
          kind: block.kind,
          type: row[0],
          example: row[1],
          iraab: row[2],
        });
      });
      continue;
    }
    const focus = block.words.filter((word) => word.focus);
    const words = focus.length ? focus : block.words;
    words.forEach((word, index) => {
      rows.push({
        key: `${block.typeAr}-${word.ar}-${index}`,
        kind: block.kind,
        type: block.typeAr,
        example: block.sentence,
        word: word.ar,
        iraab: word.iraab,
      });
    });
  }
  return rows;
}

function RuleTable({ rule }) {
  const rows = rowsForRule(rule.blocks);
  return (
    <div className="ajr-itypes-table-wrap">
      <table className="ajr-itypes-table">
        <thead>
          <tr>
            <th scope="col">النَّوْع</th>
            <th scope="col">الْمِثَال</th>
            <th scope="col">الْإِعْرَاب</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.key} className={`ajr-itypes-row ajr-itypes-row--${row.kind}`}>
              <td className="ajr-itypes-td-type">
                <span className={`ajr-itypes-pill ajr-itypes-pill--${row.kind}`}>{KIND_LABEL[row.kind]}</span>
                <span className="ajr-itypes-type" dir="rtl">
                  {row.type}
                </span>
              </td>
              <td className="ajr-itypes-td-ex" dir="rtl">
                {row.example}
              </td>
              <td className="ajr-itypes-td-iraab" dir="rtl">
                {row.word ? <strong>{row.word}</strong> : null}
                {row.word ? " " : null}
                {row.iraab}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function groupRules(rules) {
  const groups = [];
  for (const rule of rules) {
    const last = groups[groups.length - 1];
    if (!last || last.name !== rule.group) groups.push({ name: rule.group, rules: [rule] });
    else last.rules.push(rule);
  }
  return groups;
}

export default function AjrumiyyahIraabTypesPage() {
  const [kind, setKind] = useState("all");
  const [openId, setOpenId] = useState(null);
  const counts = useMemo(() => iraabTypeCounts(), []);

  const visible = useMemo(() => {
    return IRAAB_TYPES.map((rule) => ({
      ...rule,
      blocks: rule.blocks.filter((block) => kind === "all" || block.kind === kind),
    })).filter((rule) => rule.blocks.length > 0);
  }, [kind]);

  const groups = useMemo(() => groupRules(visible), [visible]);
  const openRule = visible.find((rule) => rule.id === openId) ?? null;

  function toggleRule(id) {
    setOpenId((current) => {
      const next = current === id ? null : id;
      if (next) {
        requestAnimationFrame(() => {
          document.getElementById(`itypes-${next}`)?.scrollIntoView({ block: "start", behavior: "smooth" });
        });
      }
      return next;
    });
  }

  return (
    <CourseLayout
      fullWidth
      courseId="ajrumiyyah"
      sidebar={<AjrumiyyahCourseSidebar activeTool="iraab-types" />}
    >
      <div className="ajrumiyyah-content ajr-itypes">
        <header className="ajr-itypes-hero">
          <p className="ajr-itypes-kicker">Tuḥfat · commentary iʿrāb</p>
          <h1 className="ajr-itypes-title" dir="rtl">
            {IRAAB_TYPES_META.titleAr}
          </h1>
          <p className="ajr-itypes-sub">{IRAAB_TYPES_META.subtitle}</p>
        </header>

        <div className="ajr-itypes-filters" role="tablist" aria-label="Filter by sign">
          {IRAAB_KIND_FILTERS.map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={kind === item.id}
              className={`ajr-itypes-filter${kind === item.id ? " is-on" : ""}`}
              onClick={() => setKind(item.id)}
            >
              <span dir="rtl">{item.ar}</span>
              <em>{counts[item.id] ?? 0}</em>
            </button>
          ))}
        </div>

        <div className="ajr-itypes-catalog">
          {groups.map((group) => (
            <section key={group.name} className="ajr-itypes-group">
              <h2 className="ajr-itypes-group__title" dir="rtl">
                {group.name}
              </h2>
              <ul className="ajr-itypes-list">
                {group.rules.map((rule) => {
                  const isOpen = openRule?.id === rule.id;
                  const rowCount = rowsForRule(rule.blocks).length;
                  return (
                    <li key={rule.id} id={`itypes-${rule.id}`}>
                      <button
                        type="button"
                        className={`ajr-itypes-rulebtn ajr-itypes-rulebtn--${rule.tone}${isOpen ? " is-open" : ""}`}
                        aria-expanded={isOpen}
                        onClick={() => toggleRule(rule.id)}
                      >
                        <span className="ajr-itypes-rulebtn__ar" dir="rtl">
                          {rule.ar}
                        </span>
                        <span className="ajr-itypes-rulebtn__en">{rule.en}</span>
                        <span className="ajr-itypes-rulebtn__n">{rowCount}</span>
                        <span className="ajr-itypes-rulebtn__chev" aria-hidden>
                          {isOpen ? "−" : "+"}
                        </span>
                      </button>
                      {isOpen ? (
                        <div className="ajr-itypes-panel">
                          <p className="ajr-itypes-panel__blurb">{rule.blurb}</p>
                          <RuleTable rule={rule} />
                        </div>
                      ) : null}
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </CourseLayout>
  );
}

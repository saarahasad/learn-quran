import { HAL_QURAN_EXAMPLES } from "../../data/tuhfat/halQuranExamples.js";

function AyahCell({ item }) {
  const idx = item.ayah.indexOf(item.hal);
  const before = idx === -1 ? item.ayah : item.ayah.slice(0, idx);
  const after = idx === -1 ? "" : item.ayah.slice(idx + item.hal.length);

  return (
    <td className="hal-quran-ex-table__ayah" dir="rtl">
      {idx === -1 ? (
        item.ayah
      ) : (
        <>
          {before}
          <span className="dcm-hl">{item.hal}</span>
          {after}
        </>
      )}
    </td>
  );
}

export default function HalQuranExamplesGuide() {
  return (
    <div className="damma-commentary">
      <p className="dcm-lead" dir="rtl">
        {HAL_QURAN_EXAMPLES.lead}
      </p>

      {HAL_QURAN_EXAMPLES.sections.map((section, sIdx) => (
        <div key={section.key}>
          {sIdx > 0 && <hr className="dcm-divider" />}
          <h2 className="dcm-h2">
            <span className="dcm-num">{sIdx + 1}</span>
            <span dir="rtl">{section.titleAr}</span>
          </h2>
          <div className="hal-quran-ex-table__scroll">
            <table className="dcm-table hal-quran-ex-table" dir="rtl">
              <thead>
                <tr>
                  <th>الْآيَةُ الْكَرِيمَةُ</th>
                  <th>الْإِعْرَابُ الْمُخْتَصَرُ</th>
                  <th>الْمَوْضِعُ</th>
                </tr>
              </thead>
              <tbody>
                {section.items.map((item) => (
                  <tr key={`${section.key}-${item.ref}-${item.hal}`}>
                    <AyahCell item={item} />
                    <td className="hal-quran-ex-table__note" dir="rtl">
                      {item.note}
                    </td>
                    <td className="hal-quran-ex-table__ref" dir="rtl">
                      {item.ref}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}

import { memo } from "react";
import { bboxToPercent } from "../../utils/mushafPageData.js";
import { useMushafWordBoxCalibrator } from "./MushafWordBoxCalibratorContext.jsx";

function MushafWordBoxCalibratorOverlay() {
  const { active, sortedWords, selectedLocation, frameRef, startDrag } =
    useMushafWordBoxCalibrator();

  if (!active) return null;

  return (
    <div ref={frameRef} className="mushaf-box-calibrator__overlay-layer">
      {sortedWords.map((word) => {
        const isSelected = word.location === selectedLocation;
        return (
          <div
            key={word.location}
            className={[
              "mushaf-box-calibrator__box",
              isSelected && "is-selected",
              word.coordSource === "calibrated" && "is-calibrated",
            ]
              .filter(Boolean)
              .join(" ")}
            style={bboxToPercent(word.bbox)}
            title={`${word.textUthmani} (${word.ayah}:${word.wordNum})`}
          >
            <span
              className="mushaf-box-calibrator__edge mushaf-box-calibrator__edge--left"
              onPointerDown={(event) => startDrag(event, word.location, "resize-left")}
            />
            <span
              className="mushaf-box-calibrator__body"
              onPointerDown={(event) => startDrag(event, word.location, "move")}
            />
            <span
              className="mushaf-box-calibrator__edge mushaf-box-calibrator__edge--right"
              onPointerDown={(event) => startDrag(event, word.location, "resize-right")}
            />
          </div>
        );
      })}
    </div>
  );
}

export default memo(MushafWordBoxCalibratorOverlay);

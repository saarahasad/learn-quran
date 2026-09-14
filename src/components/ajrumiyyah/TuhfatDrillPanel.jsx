import CoursePracticePanel from "./CoursePracticePanel.jsx";

/**
 * Tuḥfat practice band — course-style oral quiz + interactive exercises
 * (same format as أَنْوَاعُ الْكَلَامِ).
 */
export default function TuhfatDrillPanel({
  chapterId,
  lineIdx,
  sections,
  titleAr,
  titleEn,
  lead,
}) {
  return (
    <CoursePracticePanel
      chapterId={chapterId}
      lineIdx={lineIdx}
      sections={sections}
      titleAr={titleAr}
      titleEn={titleEn}
      lead={lead}
    />
  );
}

import { useMemo } from "react";
import { Navigate, useParams } from "react-router-dom";
import CourseModuleOverview from "./CourseModuleOverview.jsx";
import { useDiaryStore } from "../hooks/useDiaryStore.js";
import {
  getJuzCourse,
  groupSurahsByUnit,
  juzBanner,
  juzCourseToUnit,
  juzStudyPath,
} from "../data/courseUnits.js";
import { LEARN_ISLAM } from "../data/platform.js";

export default function JuzCourseOverview({ surahs }) {
  const { juzNum } = useParams();
  const juz = Number(juzNum);
  const juzCourse = getJuzCourse(juz);
  const { diary } = useDiaryStore();

  const resumeSurah = useMemo(() => {
    const first = surahs[0];
    const next = surahs.find((surah) => !diary[String(surah.revelationOrder)]?.memorised);
    return next || first;
  }, [surahs, diary]);

  if (!juzCourse?.available || surahs.length === 0) {
    return <Navigate to="/" replace />;
  }

  const unit = juzCourseToUnit(juzCourse, juzCourse.juz);
  const unitGroups = groupSurahsByUnit(surahs, [unit]);
  const studyPath = juzStudyPath(juz);

  const resumePath = resumeSurah
    ? juzStudyPath(juz, { surah: resumeSurah.id, view: "revise" })
    : studyPath;

  const units = unitGroups.map(({ unit: contentUnit, surahs: unitSurahs }) => ({
    id: contentUnit.id,
    kicker: `Juz ${contentUnit.juz}`,
    title: contentUnit.title,
    items: unitSurahs.map((surah) => ({
      id: surah.id,
      num: surah.revelationOrder,
      label: surah.name,
      labelAr: surah.nameAr,
      meta: `${surah.ayahCount} āyāt · ${surah.scenes.length} scenes`,
      done: Boolean(diary[String(surah.revelationOrder)]?.memorised),
      href: juzStudyPath(juz, { surah: surah.id, view: "revise" }),
    })),
  }));

  return (
    <CourseModuleOverview
      banner={juzBanner(juzCourse, surahs)}
      breadcrumbs={[
        { label: LEARN_ISLAM.name, to: "/" },
        { label: juzCourse.title },
      ]}
      description={juzCourse.description}
      studyPath={studyPath}
      resumePath={resumePath}
      resumeLabel={resumeSurah ? `Resume: ${resumeSurah.name}` : "Start study"}
      units={units}
      paramKey="surah"
      courseId={`juz-${juz}`}
      progressLabel="memorised"
      progressHref="/diary"
      progressHrefLabel="Memorisation progress →"
      sequentialUnlock={false}
    />
  );
}

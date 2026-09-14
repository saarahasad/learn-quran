import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import JuzCourseOverview from "../components/JuzCourseOverview.jsx";
import { getJuzCourse } from "../data/courseUnits.js";
import { loadRevisionSurahs } from "../../quran-revision-app.jsx";

export default function JuzOverviewPage() {
  const { juzNum } = useParams();
  const juz = Number(juzNum);
  const juzCourse = getJuzCourse(juz);
  const [allSurahs] = useState(loadRevisionSurahs);
  const surahs = useMemo(
    () => (juzCourse?.available ? allSurahs.filter((surah) => surah.juz === juz) : []),
    [allSurahs, juz, juzCourse],
  );

  return <JuzCourseOverview surahs={surahs} />;
}

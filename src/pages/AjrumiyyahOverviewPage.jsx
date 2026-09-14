import {
  AJRUMIYYAH_CHAPTERS,
  AJRUMIYYAH_GROUPS,
  AJRUMIYYAH_META,
  ajrumiyyahAlamatMindMapPath,
  ajrumiyyahBanner,
  ajrumiyyahIraabKeyboardPath,
  ajrumiyyahKalamMindMapPath,
  ajrumiyyahMarfuatMindMapPath,
  ajrumiyyahMatnPath,
  ajrumiyyahStudyPath,
} from "../data/ajrumiyyahCourse.js";
import { LEARN_ISLAM } from "../data/platform.js";
import { ajrumiyyahNominativesQuizPath } from "../data/nominativesMastery.js";
import CourseModuleOverview from "../components/CourseModuleOverview.jsx";
import { useCourseProgress } from "../hooks/useCourseProgress.js";

export default function AjrumiyyahOverviewPage() {
  const { isDone } = useCourseProgress("ajrumiyyah");
  const studyPath = ajrumiyyahStudyPath();

  const units = AJRUMIYYAH_GROUPS.map((group) => ({
    id: group.title,
    title: group.title,
    items: group.ids
      .map((id) => AJRUMIYYAH_CHAPTERS.find((chapter) => chapter.id === id))
      .filter(Boolean)
      .map((chapter) => ({
        id: chapter.id,
        num: chapter.num,
        label: chapter.translit,
        labelAr: chapter.ar,
        done: isDone(chapter.id),
      })),
  })).filter((unit) => unit.items.length > 0);

  const resumeChapter =
    AJRUMIYYAH_CHAPTERS.find((chapter) => !isDone(chapter.id)) ?? AJRUMIYYAH_CHAPTERS[0];
  const resumePath = resumeChapter
    ? `${studyPath}?chapter=${encodeURIComponent(resumeChapter.id)}`
    : studyPath;

  return (
    <CourseModuleOverview
      banner={ajrumiyyahBanner()}
      breadcrumbs={[
        { label: LEARN_ISLAM.name, to: "/" },
        { label: AJRUMIYYAH_META.name },
      ]}
      nameAr={AJRUMIYYAH_META.nameAr}
      description="Work through Ibn Ājurrūm's grammar text unit by unit — original matn, translation, audio, and commentary."
      studyPath={studyPath}
      resumePath={resumePath}
      resumeLabel={resumeChapter ? `Resume: ${resumeChapter.translit}` : "Start study"}
      extraLinks={[
        { to: ajrumiyyahMatnPath(), label: "Full text →" },
        { to: ajrumiyyahKalamMindMapPath(), label: "Types of Speech mind map →" },
        { to: ajrumiyyahMarfuatMindMapPath(), label: "Nominative Nouns mind map →" },
        { to: ajrumiyyahAlamatMindMapPath(), label: "Signs of Iʿrāb mind map →" },
        { to: ajrumiyyahIraabKeyboardPath(), label: "Iʿrāb keyboard →" },
        { to: ajrumiyyahNominativesQuizPath(), label: "Nominatives Trial →" },
      ]}
      units={units}
      paramKey="chapter"
      courseId="ajrumiyyah"
    />
  );
}

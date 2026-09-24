import { Navigate, Route, Routes } from "react-router-dom";
import QuranRevisionApp from "../quran-revision-app.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import { useCloudSync } from "./hooks/useCloudSync.js";
import LoginPage from "./pages/LoginPage.jsx";
import AjrumiyyahAlamatMindMapPage from "./pages/AjrumiyyahAlamatMindMapPage.jsx";
import AjrumiyyahIraabGuidePage from "./pages/AjrumiyyahIraabGuidePage.jsx";
import AjrumiyyahIraabKeyboardPage from "./pages/AjrumiyyahIraabKeyboardPage.jsx";
import AjrumiyyahKalamMindMapPage from "./pages/AjrumiyyahKalamMindMapPage.jsx";
import AjrumiyyahMarfuatMindMapPage from "./pages/AjrumiyyahMarfuatMindMapPage.jsx";
import AjrumiyyahMatnPage from "./pages/AjrumiyyahMatnPage.jsx";
import NominativesMasteryPage from "./pages/NominativesMasteryPage.jsx";
import AjrumiyyahOverviewPage from "./pages/AjrumiyyahOverviewPage.jsx";
import AjrumiyyahPage from "./pages/AjrumiyyahPage.jsx";
import AjrumiyyahWorkbookPage from "./pages/AjrumiyyahWorkbookPage.jsx";
import Aqeedah2OverviewPage from "./pages/Aqeedah2OverviewPage.jsx";
import Aqeedah2Page from "./pages/Aqeedah2Page.jsx";
import Tarbiyah2OverviewPage from "./pages/Tarbiyah2OverviewPage.jsx";
import Tarbiyah2Page from "./pages/Tarbiyah2Page.jsx";
import Tafsir2OverviewPage from "./pages/Tafsir2OverviewPage.jsx";
import Tafsir2Page from "./pages/Tafsir2Page.jsx";
import Hadith2OverviewPage from "./pages/Hadith2OverviewPage.jsx";
import Hadith2Page from "./pages/Hadith2Page.jsx";
import FiqhOverviewPage from "./pages/FiqhOverviewPage.jsx";
import FiqhPage from "./pages/FiqhPage.jsx";
import TarbiyahOverviewPage from "./pages/TarbiyahOverviewPage.jsx";
import TarbiyahPage from "./pages/TarbiyahPage.jsx";
import DiaryPage from "./pages/DiaryPage.jsx";
import JuzOverviewPage from "./pages/JuzOverviewPage.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import IraabKingdomPage from "./pages/IraabKingdomPage.jsx";
import IraabQuestPage from "./pages/IraabQuestPage.jsx";
import FoundationsVerbsSeminarPage from "./pages/FoundationsVerbsSeminarPage.jsx";
import MadinahMapPage from "./pages/MadinahMapPage.jsx";

function AppRoutes() {
  useCloudSync();

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/quran" element={<Navigate to="/" replace />} />
      <Route path="/fiqh" element={<FiqhOverviewPage />} />
      <Route path="/fiqh/study" element={<FiqhPage />} />
      <Route path="/ajrumiyyah" element={<AjrumiyyahOverviewPage />} />
      <Route path="/ajrumiyyah/matn" element={<AjrumiyyahMatnPage />} />
      <Route path="/ajrumiyyah/alamat-irab-mindmap" element={<AjrumiyyahAlamatMindMapPage />} />
      <Route path="/ajrumiyyah/kalam-mindmap" element={<AjrumiyyahKalamMindMapPage />} />
      <Route path="/ajrumiyyah/marfuat-mindmap" element={<AjrumiyyahMarfuatMindMapPage />} />
      <Route path="/ajrumiyyah/iraab-keyboard" element={<AjrumiyyahIraabKeyboardPage />} />
      <Route path="/ajrumiyyah/iraab-guide" element={<AjrumiyyahIraabGuidePage />} />
      <Route path="/ajrumiyyah/nominatives-quiz" element={<NominativesMasteryPage />} />
      <Route path="/ajrumiyyah/study" element={<AjrumiyyahPage />} />
      <Route path="/ajrumiyyah/workbook" element={<AjrumiyyahWorkbookPage />} />
      <Route path="/ajrumiyyah/workbook/:workbookId" element={<AjrumiyyahWorkbookPage />} />
      {/* Hidden gamification — not linked from landing/nav; open by URL only */}
      <Route path="/iraab-kingdom" element={<IraabKingdomPage />} />
      <Route path="/iraab-kingdom/quest" element={<IraabQuestPage />} />
      {/* Seminar deck — not linked from landing/nav; open by URL only */}
      <Route path="/seminar/foundations-verbs" element={<FoundationsVerbsSeminarPage />} />
      {/* Madinah practice map — not linked from Ajrumiyyah study; open by URL only */}
      <Route path="/madinah-map" element={<MadinahMapPage />} />
      <Route path="/tarbiyah" element={<TarbiyahOverviewPage />} />
      <Route path="/tarbiyah/study" element={<TarbiyahPage />} />
      <Route path="/aqeedah-2" element={<Aqeedah2OverviewPage />} />
      <Route path="/aqeedah-2/study" element={<Aqeedah2Page />} />
      <Route path="/tarbiyah-2" element={<Tarbiyah2OverviewPage />} />
      <Route path="/tarbiyah-2/study" element={<Tarbiyah2Page />} />
      <Route path="/tafsir-2" element={<Tafsir2OverviewPage />} />
      <Route path="/tafsir-2/study" element={<Tafsir2Page />} />
      <Route path="/hadith-2" element={<Hadith2OverviewPage />} />
      <Route path="/hadith-2/study" element={<Hadith2Page />} />
      <Route path="/juz/:juzNum" element={<JuzOverviewPage />} />
      <Route path="/juz/:juzNum/study" element={<QuranRevisionApp />} />
      <Route path="/surahs" element={<Navigate to="/juz/30" replace />} />
      <Route path="/diary" element={<DiaryPage />} />
    </Routes>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

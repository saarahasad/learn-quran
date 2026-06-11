import { Route, Routes } from "react-router-dom";
import QuranRevisionApp from "../quran-revision-app.jsx";
import DiaryPage from "./pages/DiaryPage.jsx";
import LandingPage from "./pages/LandingPage.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/surahs" element={<QuranRevisionApp />} />
      <Route path="/diary" element={<DiaryPage />} />
    </Routes>
  );
}

# learn-quran

## Project Notes

- React + Vite app for Qur'an revision, study, and quizzes.
- Main app entry is `src/App.jsx`, which re-exports `quran-revision-app.jsx`.
- Core surah content lives in `quran-revision-app.jsx` and `src/data/generatedSurahs.js`.
- Added Surah At-Ṭāriq as a revision surah with scenes, āyāt, word meanings, tafsir notes, and quiz support.
- Added Sūrahs Al-Aʿlā, Al-Ghāshiyah, Al-Fajr, and Al-Balad as revision surahs with scenes, āyāt, word meanings, tafsir notes, and quiz support.
- Added generated local data for the remaining Juz 30 sūrahs so the app now covers Sūrahs 78–114.
- Added a Recite & Listen quiz mode using the browser microphone. Students can open it directly from each surah's home menu card, record themselves, play attempts back, and click Display Surah to check the surah text while listening.
- Added a top-level Memorisation Diary at `/diary` with local progress tracking, revision recommendations, self-assessment scoring, and overview metrics.
- Added a professional landing page at `/` with clear entry points to the Surah Library at `/surahs` and the Memorisation Diary at `/diary`.
- Mushaf mode displays only the selected surah in a Madani-inspired layout; Study mode remains scene-based with meanings and word-by-word support.

## Content Schema

Surah objects use this shape:

- `id`: stable string key.
- `name`: transliterated English name.
- `nameAr`: Arabic name.
- `ayahCount`: number of āyāt.
- `juz`: juz number.
- `revelationOrder`: currently used as the surah number for sorting.
- `hasTextbook`: optional flag for iʿrāb textbook support.
- `scenes`: revision chunks with `title`, `range`, `hook`, `memory`, `tafsir`, and `tafsirAttr`.
- `ayahs`: āyah records with `n`, `scene`, `ar`, `en`, `connects`, and `words`.

## Database Schema

There is no database in this project yet. Data is stored in frontend JavaScript modules and persisted locally through `localStorage`.

Existing app revision data is persisted under `muraja3a_v4`.

Recitation quiz recordings are kept only in the current browser session as object URLs and are not persisted to localStorage or a database.

Memorisation Diary data is persisted under `quraan_diary_v1` with this shape:

- Top-level object keyed by surah number (`revelationOrder` from the full Juz 30 diary list in `src/data/diarySurahs.js`).
- Each surah entry contains:
  - `memorised`: date string (`YYYY-MM-DD`) for when the surah was memorised.
  - `lastRevised`: date string (`YYYY-MM-DD`) for the latest revision.
  - `scores`: array of self-assessment sessions.
- Each score session contains:
  - `date`: date string (`YYYY-MM-DD`).
  - `fluency`: 1–5 self-rating.
  - `ayahOrder`: 1–5 self-rating.
  - `tajweed`: 1–5 self-rating.
  - `meaning`: 1–5 self-rating for meaning recall.
  - `overall`: averaged score across the four metrics.

## Migrations

No migrations exist yet.

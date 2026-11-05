// Classical āyah-by-āyah iʿrāb for Juz ʿAmma, Madani mushaf pages 582–591
// (an-Nabaʾ → al-Aʿlā 15). Each sūrah file exports { [ayahNumber]: [[word, analysis], …] }.
import s78 from "./78-naba.js";
import s79 from "./79-naziat.js";
import s80 from "./80-abasa.js";
import s81 from "./81-takwir.js";
import s82 from "./82-infitar.js";
import s83 from "./83-mutaffifin.js";
import s84 from "./84-inshiqaq.js";
import s85 from "./85-buruj.js";
import s86 from "./86-tariq.js";
import s87 from "./87-ala.js";

export const JUZ30_IRAAB_PROSE = {
  78: s78, 79: s79, 80: s80, 81: s81, 82: s82,
  83: s83, 84: s84, 85: s85, 86: s86, 87: s87,
};

export function getAyahIraabProse(surahNumber, ayahNumber) {
  return JUZ30_IRAAB_PROSE[surahNumber]?.[ayahNumber] ?? null;
}

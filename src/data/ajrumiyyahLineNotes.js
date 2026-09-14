/** Per-line commentary for Ajrumiyyah chapters — shown under each verse.
 *  kalam / irab: replaced by Assimil-style guides (Kalam*, Alamat*, Irab*).
 */
export const AJRUMIYYAH_LINE_NOTES = {};

export function lineNoteAfterLine(chapterId, lineIndex) {
  return AJRUMIYYAH_LINE_NOTES[chapterId]?.[lineIndex] ?? null;
}

/** Inline commentary shown beneath specific Ājurrūmiyyah lines.
 *  irab: replaced by IrabDefinitionGuide / IrabTypesGuide.
 */
export const AJRUMIYYAH_COMMENTARY_AFTER = {};

export function commentaryAfterLine(chapterId, lineIndex) {
  return AJRUMIYYAH_COMMENTARY_AFTER[chapterId]?.[String(lineIndex)] ?? null;
}

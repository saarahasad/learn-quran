/** Classify iʿrāb terminology for color-coded display */

const PARTICLE_PREFIXES = [
  'حَرْف',
  'وَاو',
  'لَام',
  'فِعْل',
  'لَمْ',
  'فَاء',
  'كَاف',
  'هَاء',
  'يَاء',
  'مِيم',
  'أَلِف',
  'تُعْرَب',
  'lām',
  'wāw',
  'ḥarf',
  'fiʿl',
  'nūn',
];

const PARTICLE_EXACT = new Set([
  'وَاو',
  'مِن',
  'لَام',
  'فَاء',
  'كَاف',
  'هَاء',
  'يَاء',
  'مِيم',
  'أَلِف',
  'لَا عَمَل لَهُ',
  'إِنَّ',
  'لَفْظ',
  'قَلْب',
  'نَفْي',
  'تَعَذُّر',
  'تَقْدِيم',
  'سَدَّ مَسَدَّ',
]);

const MARKER_EXACT = new Set([
  'جَرّ',
  'رَفْع',
  'نَصْب',
  'جَزْم',
  'ضَمّ',
  'فَتْح',
  'كَسْرَة',
  'ضَمَّة',
  'فَتْحَة',
  'مَجْرُور',
  'مَرْفُوع',
  'مَنْصُوب',
  'مَجْزُوم',
  'مَجْرُورَة',
  'مَرْفُوعَة',
  'مَنْصُوبَة',
  'مَبْنِيّ',
  'بِكَسْرَة',
  'بِضَمَّة',
  'بِفَتْحَة',
  'kasra',
  'fatḥ muqaddar',
  'fatḥ',
  'mabni',
  'muqaddara',
  'mutaḥarrik',
  'thubūt al-nūn',
  'taʿadhdhur',
]);

const MARKER_HINTS = [
  'ظَاهِرَة',
  'مُقَدَّر',
  'عَلَامَة',
  'كَسْرَة',
  'ضَمَّة',
  'فَتْحَة',
  'تَنْوِين',
  'سُكُون',
  'kasra',
  'fatḥ',
  'muqaddar',
  'ẓāhira',
  'alif fāriqa',
  'fāriqa',
];

const MARKER_PREFIXES = ['حَذْف '];

/** @returns {'particle' | 'marker' | 'role'} */
export function classifyTerm(text) {
  const t = text.trim();
  if (!t) return 'role';

  if (t.includes('جَارّ') || t.startsWith('جَارّ')) return 'role';
  if (/^تُعْرَب/.test(t)) return 'particle';

  if (PARTICLE_EXACT.has(t) || PARTICLE_PREFIXES.some((p) => t === p || t.startsWith(`${p} `) || t.startsWith(p))) {
    return 'particle';
  }

  if (
    MARKER_EXACT.has(t) ||
    MARKER_PREFIXES.some((p) => t.startsWith(p)) ||
    MARKER_HINTS.some((h) => t.includes(h))
  ) {
    return 'marker';
  }

  return 'role';
}

function escapeRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function isInsideSpan(html, index) {
  const before = html.slice(0, index);
  return (before.match(/<span/g) || []).length > (before.match(/<\/span>/g) || []).length;
}

function collectKnownTerms(html) {
  const terms = new Set();

  for (const m of html.matchAll(/<span class="term">([^<]+)<\/span>/g)) {
    terms.add(m[1].trim());
  }

  for (const m of html.matchAll(/<span class="gkey">([^<]+)<\/span><span>([^<]+)<\/span>/g)) {
    const text = m[2];
    for (const q of text.matchAll(/"([^"]+)"/g)) terms.add(q[1].trim());

    const segments = text
      .split(/[.،:—+]+/)
      .map((s) => s.replace(/"[^"]*"/g, '').trim())
      .filter((s) => /[\u0600-\u06FF]/.test(s));

    for (const seg of segments) {
      const words = seg.split(/\s+/).filter(Boolean);
      for (let i = 0; i < words.length; i++) {
        for (let len = 1; len <= Math.min(2, words.length - i); len++) {
          const phrase = words.slice(i, i + len).join(' ');
          if (len === 1) {
            terms.add(phrase);
            continue;
          }
          const cat = classifyTerm(phrase);
          const w1 = classifyTerm(words[i]);
          const w2 = classifyTerm(words[i + 1]);
          if (cat !== 'role' || (w1 === 'role' && w2 === 'role')) {
            terms.add(phrase);
          }
        }
      }
    }
  }

  return [...terms].filter((t) => t.length > 0).sort((a, b) => b.length - a.length);
}

function colorizeGrammarExplanation(text, knownTerms) {
  let result = text.replace(/"([^"]+)"/g, '<span class="verse-word">$1</span>');

  const matches = [];
  for (const term of knownTerms) {
    if (!term || !/[\u0600-\u06FF]/.test(term)) continue;
    const re = new RegExp(escapeRegex(term), 'g');
    let m;
    while ((m = re.exec(result)) !== null) {
      if (isInsideSpan(result, m.index)) continue;
      matches.push({ start: m.index, end: m.index + m[0].length, text: m[0], term });
    }
  }

  matches.sort((a, b) => a.start - b.start || b.end - b.start - (a.end - a.start));
  const kept = [];
  for (const m of matches) {
    if (kept.some((k) => !(m.end <= k.start || m.start >= k.end))) continue;
    kept.push(m);
  }

  kept.sort((a, b) => b.start - a.start);
  for (const m of kept) {
    const cat = classifyTerm(m.term);
    result = `${result.slice(0, m.start)}<span class="term term--${cat}">${m.text}</span>${result.slice(m.end)}`;
  }

  return result;
}

/** Add term classes, verse-word styling, and grammar-note color coding */
export function enrichTextbookHtml(html) {
  if (!html) return html;

  const knownTerms = collectKnownTerms(html);

  let out = html
    .replace(/<span class="term">([^<]+)<\/span>/g, (_, inner) => {
      const cat = classifyTerm(inner);
      return `<span class="term term--${cat}">${inner}</span>`;
    })
    .replace(/<span class="ar-inline">/g, '<span class="ar-inline verse-word">')
    .replace(
      /<span class="gkey">([^<]+)<\/span><span>([^<]+)<\/span>/g,
      (_, key, explain) =>
        `<span class="gkey verse-word">${key}</span><span class="grammar-explain">${colorizeGrammarExplanation(explain, knownTerms)}</span>`
    );

  return out;
}

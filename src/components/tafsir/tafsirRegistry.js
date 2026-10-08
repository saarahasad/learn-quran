// Tafsīr decks, keyed by sūrah number.
// Files live in public/tafsir/<folder>/ : slide-01.webp…, thumb-01.webp…, tafsir.pdf
const SOURCES = ["Ibn Kathīr", "as-Saʿdī", "al-Jalālayn", "aṭ-Ṭabarī", "al-Qurṭubī", "al-Baghawī"];

/** Standard deck layout: intro (1–5), āyah slides, then key words, wider tafsīr, contrast, lessons, closing. */
function chapters(ayahSlides) {
  const out = [
    { label: "Introduction", slide: 1 },
    { label: "Virtue", slide: 3 },
    { label: "Structure", slide: 5 },
  ];
  ayahSlides.forEach((label, i) => out.push({ label: `Āyah ${label}`, slide: 6 + i }));
  const after = 6 + ayahSlides.length;
  out.push({ label: "Key words", slide: after }, { label: "Lessons", slide: after + 3 });
  return out;
}

function deck(folder, titleAr, titleEn, subtitle, ayahSlides) {
  return {
    folder, titleAr, titleEn, subtitle, sources: SOURCES,
    slides: 5 + ayahSlides.length + 5,
    pdf: "tafsir.pdf",
    chapters: chapters(ayahSlides),
  };
}

export const TAFSIR_DECKS = {
  98: deck("098-al-bayyinah", "سُورَةُ الْبَيِّنَة", "Sūrat al-Bayyinah", "The Clear Proof — an āyah-by-āyah tafsīr",
    ["1", "2–3", "4", "5", "6", "7", "8"]),
  99: deck("099-az-zalzalah", "سُورَةُ الزَّلْزَلَة", "Sūrat az-Zalzalah", "The Earthquake — an āyah-by-āyah tafsīr",
    ["1", "2", "3", "4", "5", "6", "7–8"]),
  100: deck("100-al-adiyat", "سُورَةُ الْعَادِيَات", "Sūrat al-ʿĀdiyāt", "The Chargers — an āyah-by-āyah tafsīr",
    ["1–2", "3–5", "6", "7", "8", "9–10", "11"]),
  101: deck("101-al-qariah", "سُورَةُ الْقَارِعَة", "Sūrat al-Qāriʿah", "The Striking Calamity — an āyah-by-āyah tafsīr",
    ["1–3", "4", "5", "6–7", "8–9", "10–11"]),
  102: deck("102-at-takathur", "سُورَةُ التَّكَاثُر", "Sūrat at-Takāthur", "Competition in Increase — an āyah-by-āyah tafsīr",
    ["1–2", "3–4", "5", "6–7", "8"]),
};

export const getTafsirDeck = (surah) => TAFSIR_DECKS[Number(surah)] || null;

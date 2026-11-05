/* Line icons for the study toolbar (18px, currentColor). */
const S = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };

export const Icons = {
  prev: <svg {...S}><path d="M9 6l6 6-6 6" /></svg>,
  next: <svg {...S}><path d="M15 6l-6 6 6 6" /></svg>,
  eye: <svg {...S}><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" /><circle cx="12" cy="12" r="3" /></svg>,
  shuffle: <svg {...S}><path d="M16 3h5v5M4 20 21 3M21 16v5h-5M15 15l6 6M4 4l5 5" /></svg>,
  mark: <svg {...S}><path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" /></svg>,
  flag: <svg {...S}><path d="M4 22V4M4 4h13l-2 4 2 4H4" /></svg>,
  grammar: <svg {...S}><path d="M4 7V4h16v3M9 20h6M12 4v16" /></svg>,
  quiz: <svg {...S}><circle cx="12" cy="12" r="9" /><path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6V14M12 17h.01" /></svg>,
  memorize: <svg {...S}><path d="M12 6c-2-2-6-2-8 0v13c2-2 6-2 8 0 2-2 6-2 8 0V6c-2-2-6-2-8 0zM12 6v13" /></svg>,
  test: <svg {...S}><rect x="9" y="2" width="6" height="12" rx="3" /><path d="M5 10a7 7 0 0 0 14 0M12 17v5" /></svg>,
  teach: <svg {...S}><path d="M2 9l10-5 10 5-10 5zM6 11v5c3 2 9 2 12 0v-5" /></svg>,
  drill: <svg {...S}><path d="M13 2 3 14h9l-1 8 10-12h-9z" /></svg>,
};

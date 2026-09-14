import { toArabicNum } from "../../utils/mushafText.js";

export default function VerseMarker({ n }) {
  const num = toArabicNum(n);
  return (
    <span className="mushaf-verse-marker" aria-label={`ayah ${n}`}>
      <svg viewBox="0 0 36 36" aria-hidden="true" className="mushaf-verse-marker__svg">
        <circle cx="18" cy="18" r="16" fill="#6b4f10" />
        <circle cx="18" cy="18" r="13.5" fill="#a67c1a" />
        <circle cx="18" cy="18" r="10.5" fill="#3d2e08" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
          <polygon
            key={deg}
            points="18,1.5 19.4,6.5 18,11.5 16.6,6.5"
            fill="#e8d48a"
            transform={`rotate(${deg} 18 18)`}
          />
        ))}
        <circle cx="18" cy="18" r="7" fill="#2a1f06" opacity="0.35" />
      </svg>
      <span className="mushaf-verse-num">{num}</span>
    </span>
  );
}

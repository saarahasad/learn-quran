const RADIUS = 42;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function HifdhBreathingRing({ progress = 0, label }) {
  const clamped = Math.min(1, Math.max(0, progress));
  const offset = CIRCUMFERENCE * (1 - clamped);

  return (
    <div className="hifdh-session__ring-wrap" aria-hidden="true">
      <div className="hifdh-session__ring">
        <svg viewBox="0 0 100 100" role="presentation">
          <circle className="hifdh-session__ring-track" cx="50" cy="50" r={RADIUS} />
          <circle
            className="hifdh-session__ring-fill"
            cx="50"
            cy="50"
            r={RADIUS}
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={offset}
          />
        </svg>
        {label && <span className="hifdh-session__ring-label">{label}</span>}
      </div>
    </div>
  );
}

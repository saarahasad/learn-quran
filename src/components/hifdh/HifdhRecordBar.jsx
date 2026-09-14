import { formatDuration } from "../../hooks/useHifdhRecorder.js";
import { RecordingMotivationStrip } from "../RecordingHistoryPanel.jsx";

export default function HifdhRecordBar({
  isRecording,
  elapsed,
  error,
  recordingUrl,
  onStart,
  onStop,
  onClear,
  compact = false,
  hint,
}) {
  return (
    <div className={`hifdh-session__record-block${compact ? " hifdh-session__record-block--compact" : ""}`}>
      <RecordingMotivationStrip />
      {hint && <p className="hifdh-session__record-hint">{hint}</p>}

      <div className="hifdh-session__record-bar">
        <span className="hifdh-session__record-time">{formatDuration(elapsed)}</span>
        {isRecording ? (
          <button
            type="button"
            className="hifdh-session__cta hifdh-session__cta--record"
            onClick={onStop}
          >
            Stop recording
          </button>
        ) : (
          <button type="button" className="hifdh-session__cta" onClick={onStart}>
            {recordingUrl ? "Record again" : "Start recording"}
          </button>
        )}
      </div>

      {recordingUrl && (
        <div className="hifdh-session__playback">
          <audio controls src={recordingUrl} className="hifdh-session__recording" />
          {onClear && (
            <button
              type="button"
              className="hifdh-session__cta hifdh-session__cta--ghost hifdh-session__playback-clear"
              onClick={onClear}
            >
              Clear
            </button>
          )}
        </div>
      )}

      {error && <p className="hifdh-session__error">{error}</p>}
    </div>
  );
}

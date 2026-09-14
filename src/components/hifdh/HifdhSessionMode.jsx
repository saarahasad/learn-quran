import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useHifdhSessionState } from "../../hooks/useHifdhSessionState.js";
import {
  ASSESSMENT,
  JOIN_ONCE_INTRO_COPY,
  RANGE_QUIZ_OFFER_COPY,
  TEST_ASSESSMENT,
  revisionDatesFromToday,
  describeSavedSessionProgress,
  formatElapsedDuration,
  getMemorizedAyahRange,
  normalizeChainPair,
  sessionHasProgress,
} from "../../utils/hifdhSession.js";
import { ensurePromptPack } from "../../utils/hifdhPrompts.js";
import {
  afterChainRecited,
  afterAyahQuizAnswer,
  afterJoinOnceRecited,
  afterListenRound,
  afterRangeQuizAnswer,
  afterScaffoldAssess,
  afterShadowRound,
  afterTestAssess,
  advanceAfterAyahBlock,
  skipRangeQuiz,
  skipSessionStep,
  startAyahQuiz,
  startBonusRound,
  startRangeQuiz,
} from "../../utils/hifdhSessionFlow.js";
import { toArabicNum } from "../../utils/mushafText.js";
import HifdhAyahQuiz from "./HifdhAyahQuiz.jsx";
import HifdhChainPhase from "./HifdhChainPhase.jsx";
import HifdhCompleteScreen from "./HifdhCompleteScreen.jsx";
import HifdhExplanationPhase from "./HifdhExplanationPhase.jsx";
import HifdhListenPhase from "./HifdhListenPhase.jsx";
import HifdhMushafPane from "./HifdhMushafPane.jsx";
import HifdhRangeQuiz from "./HifdhRangeQuiz.jsx";
import HifdhRangeQuizOffer from "./HifdhRangeQuizOffer.jsx";
import HifdhScaffoldPhase from "./HifdhScaffoldPhase.jsx";
import HifdhShadowPhase from "./HifdhShadowPhase.jsx";
import HifdhTestPhase from "./HifdhTestPhase.jsx";
import HifdhTransitionScreen from "./HifdhTransitionScreen.jsx";
import "../../styles/hifdh-session.css";
import "../../styles/mushaf.css";

const TRANSITION_DOCK_STEPS = new Set([
  "opening",
  "listen-intro",
  "explain-intro",
  "shadow-intro",
  "scaffold-intro",
  "join-intro",
  "range-quiz-offer",
  "flagged-intro",
  "chain-intro",
  "test-intro",
  "mid-checkin",
  "stumble-intervention",
  "flagged-listen",
]);

function ResumeChoiceDialog({ progressLabel, onContinue, onStartNew }) {
  return (
    <div className="hifdh-session__backdrop" role="dialog" aria-modal="true">
      <div className="hifdh-session__dialog">
        <h3>Welcome back</h3>
        <p>
          You have a saved session for this passage.
          {progressLabel ? ` You left off at ${progressLabel}.` : ""}
        </p>
        <div className="hifdh-session__dialog-actions">
          <button
            type="button"
            className="hifdh-session__dialog-btn hifdh-session__dialog-btn--primary"
            onClick={onContinue}
          >
            Continue where I left off
          </button>
          <button type="button" className="hifdh-session__dialog-btn" onClick={onStartNew}>
            Start new session
          </button>
        </div>
      </div>
    </div>
  );
}

function RestartDialog({ onCancel, onConfirm }) {
  return (
    <div className="hifdh-session__backdrop" role="dialog" aria-modal="true">
      <div className="hifdh-session__dialog">
        <h3>Start a new session?</h3>
        <p>
          Your current progress will be cleared. You will begin again from the niyyah.
        </p>
        <div className="hifdh-session__dialog-actions">
          <button
            type="button"
            className="hifdh-session__dialog-btn hifdh-session__dialog-btn--primary"
            onClick={onCancel}
          >
            Keep current session
          </button>
          <button
            type="button"
            className="hifdh-session__dialog-btn hifdh-session__dialog-btn--danger"
            onClick={onConfirm}
          >
            Yes, start fresh
          </button>
        </div>
      </div>
    </div>
  );
}

function ExitDialog({ onStay, onLeave, onRestart }) {
  return (
    <div className="hifdh-session__backdrop" role="dialog" aria-modal="true">
      <div className="hifdh-session__dialog">
        <h3>Are you sure you want to leave?</h3>
        <p>Your progress is saved exactly here. Whenever you return — the door is open.</p>
        <div className="hifdh-session__dialog-actions">
          <button
            type="button"
            className="hifdh-session__dialog-btn hifdh-session__dialog-btn--primary"
            onClick={onStay}
          >
            Stay in session
          </button>
          <button type="button" className="hifdh-session__dialog-btn" onClick={onLeave}>
            Save and leave
          </button>
          <button
            type="button"
            className="hifdh-session__dialog-btn hifdh-session__dialog-btn--ghost"
            onClick={onRestart}
          >
            Start new session
          </button>
        </div>
      </div>
    </div>
  );
}

export default function HifdhSessionMode({
  selectedAyat,
  surahNumber,
  mushafPage,
  localAyahs = null,
  onClose,
}) {
  const { state, patch, pause, resume, reset } = useHifdhSessionState({
    selectedAyat,
    surahNumber,
    mushafPage,
  });

  const [resumeChoiceOpen, setResumeChoiceOpen] = useState(() =>
    sessionHasProgress(state),
  );
  const [exitPromptOpen, setExitPromptOpen] = useState(false);
  const [restartPromptOpen, setRestartPromptOpen] = useState(false);
  const [showBetweenMessage, setShowBetweenMessage] = useState(false);
  const stateRef = useRef(state);
  stateRef.current = state;

  const currentAyah = state.selectedAyat[state.currentAyahIndex] ?? null;
  const isPaused = Boolean(state.pausedAt);
  const elapsedLabel = formatElapsedDuration(state.timeElapsed);
  const useVerseStudyLayout = state.sessionStep === "explain";
  const showMushafPane =
    state.currentPhase !== "niyyah" &&
    state.currentPhase !== "complete" &&
    !useVerseStudyLayout;
  const mushafAyah = currentAyah;
  const mushafDimmed =
    state.currentPhase === "scaffold" &&
    state.sessionStep === "scaffold" &&
    state.currentRound >= 3 &&
    !state.bonusRound;

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  useEffect(() => {
    if (resumeChoiceOpen) pause();
  }, [resumeChoiceOpen, pause]);

  const startFreshSession = useCallback(() => {
    reset();
    setResumeChoiceOpen(false);
    setExitPromptOpen(false);
    setRestartPromptOpen(false);
    setShowBetweenMessage(false);
    resume();
  }, [reset, resume]);

  const requestRestart = () => {
    pause();
    setExitPromptOpen(false);
    setRestartPromptOpen(true);
  };

  const applyFlow = useCallback(
    (result) => {
      if (!result) return;
      if (result.action === "between-message") {
        setShowBetweenMessage(true);
        return;
      }
      if (result.feedback) {
        const feedbackCopy = ensurePromptPack(stateRef.current).assessFeedback;
        patch({
          ...result.patch,
          assessFeedback: feedbackCopy[result.feedback] ?? null,
        });
        return;
      }
      if (result.patch) patch(result.patch);
    },
    [patch],
  );

  const beginImmersion = () => {
    patch({
      currentPhase: "immersion",
      sessionStep: "opening",
      currentRound: 0,
      pausedAt: null,
    });
  };

  const advanceAfterListen = useCallback(() => {
    const result = afterListenRound(stateRef.current, showBetweenMessage);
    applyFlow(result);
  }, [applyFlow, showBetweenMessage]);

  const continueAfterBetweenMessage = () => {
    setShowBetweenMessage(false);
    patch((prev) => ({ ...prev, currentRound: prev.currentRound + 1 }));
  };

  const requestExit = () => {
    pause();
    setExitPromptOpen(true);
  };

  const skipForward = useCallback(() => {
    setShowBetweenMessage(false);
    const result = skipSessionStep(stateRef.current);
    if (!result) return;
    if (result.action) {
      applyFlow(result);
      return;
    }
    if (result.patch) {
      patch({ ...result.patch, assessFeedback: null });
    }
  }, [patch, applyFlow]);

  const promptVariant = "overlay";

  const renderBody = () => {
    const step = state.sessionStep;
    const prompts = ensurePromptPack(state);

    if (state.currentPhase === "niyyah") {
      return (
        <HifdhTransitionScreen
          variant={promptVariant}
          emphasis={prompts.niyyah.emphasis}
          speech={prompts.niyyah.speech}
          bismillah={prompts.niyyah.bismillah}
          continueLabel={prompts.niyyah.readyLabel}
          onContinue={beginImmersion}
        />
      );
    }

    if (step === "opening") {
      return (
        <HifdhTransitionScreen
          variant={promptVariant}
          quote={prompts.opening.quote}
          speech={prompts.opening.speech}
          continueLabel={prompts.opening.continueLabel}
          onContinue={() => patch({ sessionStep: "listen-intro", pausedAt: null })}
        />
      );
    }

    if (step === "listen-intro") {
      return (
        <HifdhTransitionScreen
          variant={promptVariant}
          emphasis={prompts.listenIntro.emphasis}
          speech={prompts.listenIntro.speech}
          continueLabel={prompts.listenIntro.continueLabel}
          onContinue={() => {
            setShowBetweenMessage(false);
            patch({ sessionStep: "listen", currentRound: 0, pausedAt: null });
          }}
        />
      );
    }

    if (step === "explain-intro") {
      return (
        <HifdhTransitionScreen
          variant={promptVariant}
          emphasis={prompts.explainIntro.emphasis}
          speech={prompts.explainIntro.speech}
          continueLabel={prompts.explainIntro.continueLabel}
          onContinue={() => patch({ sessionStep: "explain", assessFeedback: null })}
        />
      );
    }

    if (step === "explain" && currentAyah != null) {
      return (
        <HifdhExplanationPhase
          ayahNumber={currentAyah}
          surahNumber={state.surahNumber}
          mushafPage={state.mushafPage}
          onContinue={() => patch({ sessionStep: "shadow-intro" })}
        />
      );
    }

    if (step === "shadow-intro") {
      return (
        <HifdhTransitionScreen
          variant={promptVariant}
          emphasis={prompts.shadowIntro.emphasis}
          speech={prompts.shadowIntro.speech}
          continueLabel={prompts.shadowIntro.continueLabel}
          onContinue={() => patch({ sessionStep: "shadow", currentRound: 0 })}
        />
      );
    }

    if (step === "shadow" && currentAyah != null) {
      return (
        <HifdhShadowPhase
          ayahNumber={currentAyah}
          surahNumber={state.surahNumber}
          mushafPage={state.mushafPage}
          currentRound={state.currentRound}
          paused={isPaused || exitPromptOpen}
          onRoundComplete={() => applyFlow(afterShadowRound(stateRef.current))}
        />
      );
    }

    if (step === "scaffold-intro") {
      return (
        <HifdhTransitionScreen
          variant={promptVariant}
          emphasis={prompts.scaffoldIntro.emphasis}
          speech={prompts.scaffoldIntro.speech}
          continueLabel={prompts.scaffoldIntro.continueLabel}
          onContinue={() => patch({ sessionStep: "scaffold", currentRound: 0 })}
        />
      );
    }

    if (step === "flagged-intro") {
      return (
        <HifdhTransitionScreen
          variant={promptVariant}
          emphasis={prompts.flaggedIntro.emphasis}
          speech={prompts.flaggedIntro.speech}
          continueLabel={prompts.flaggedIntro.continueLabel}
          onContinue={() => applyFlow(startBonusRound(stateRef.current))}
        />
      );
    }

    if (step === "stumble-intervention") {
      return (
        <HifdhTransitionScreen
          variant={promptVariant}
          emphasis={prompts.stumbleIntervention.emphasis}
          speech={prompts.stumbleIntervention.speech}
          continueLabel={prompts.stumbleIntervention.continueLabel}
          onContinue={() => patch({ sessionStep: "scaffold", assessFeedback: null })}
        />
      );
    }

    if (step === "mid-checkin") {
      return (
        <HifdhTransitionScreen
          variant={promptVariant}
          speech={prompts.midSession.speech}
          continueLabel={prompts.midSession.continueLabel}
          onContinue={() => {
            applyFlow(startAyahQuiz(stateRef.current));
          }}
        />
      );
    }

    if (step === "scaffold" && currentAyah != null) {
      const bonusIndices = state.bonusRound?.ayah === currentAyah
        ? state.bonusRound.indices
        : null;

      return (
        <HifdhScaffoldPhase
          ayahNumber={currentAyah}
          surahNumber={state.surahNumber}
          mushafPage={state.mushafPage}
          currentRound={state.currentRound}
          bonusIndices={bonusIndices}
          scaffoldFade={prompts.scaffoldFade}
          scaffoldReciteHint={prompts.scaffoldReciteHint}
          onRecited={(wordCount) => {
            applyFlow(
              afterScaffoldAssess(
                { ...stateRef.current, _wordCount: wordCount },
                ASSESSMENT.SMOOTH,
              ),
            );
          }}
        />
      );
    }

    if (step === "ayah-quiz" && currentAyah != null) {
      const memorizedAyat = getMemorizedAyahRange(
        state.selectedAyat,
        state.currentAyahIndex,
      );

      return (
        <HifdhAyahQuiz
          key={`${currentAyah}-${state.ayahQuizIndex}`}
          ayahNumber={currentAyah}
          surahNumber={state.surahNumber}
          mushafPage={state.mushafPage}
          localAyahs={localAyahs}
          memorizedAyat={memorizedAyat}
          questions={state.ayahQuizQuestions}
          questionIndex={state.ayahQuizIndex ?? 0}
          onQuestionsReady={(ayahQuizQuestions) => patch({ ayahQuizQuestions })}
          onContinue={() => applyFlow(afterAyahQuizAnswer(stateRef.current))}
        />
      );
    }

    if (step === "join-intro") {
      return (
        <HifdhTransitionScreen
          variant={promptVariant}
          emphasis={JOIN_ONCE_INTRO_COPY.emphasis}
          speech={JOIN_ONCE_INTRO_COPY.speech}
          continueLabel={JOIN_ONCE_INTRO_COPY.continueLabel}
          onContinue={() => patch({ sessionStep: "join", currentRound: 0 })}
        />
      );
    }

    if (step === "join") {
      const joinPair = normalizeChainPair(state.selectedAyat, state.currentAyahIndex);
      if (!joinPair) return null;

      return (
        <HifdhChainPhase
          prevAyah={joinPair.prevAyah}
          currentAyah={joinPair.currentAyah}
          surahNumber={state.surahNumber}
          mushafPage={state.mushafPage}
          localAyahs={localAyahs}
          currentRound={state.currentRound}
          singleJoin
          onRecited={() => applyFlow(afterJoinOnceRecited(stateRef.current))}
        />
      );
    }

    if (step === "range-quiz-offer") {
      const memorized =
        state._quizRange ??
        getMemorizedAyahRange(state.selectedAyat, state.currentAyahIndex);

      return (
        <HifdhRangeQuizOffer
          ayat={memorized}
          emphasis={RANGE_QUIZ_OFFER_COPY.emphasis}
          speech={RANGE_QUIZ_OFFER_COPY.speech}
          takeLabel={RANGE_QUIZ_OFFER_COPY.takeLabel}
          skipLabel={RANGE_QUIZ_OFFER_COPY.skipLabel}
          onTake={() =>
            applyFlow(
              startRangeQuiz({ ...stateRef.current, _localAyahs: localAyahs }),
            )
          }
          onSkip={() => applyFlow(skipRangeQuiz(stateRef.current))}
        />
      );
    }

    if (step === "range-quiz" && state.rangeQuizQuestions?.length) {
      return (
        <HifdhRangeQuiz
          key={`${state.rangeQuizIndex}-${state.rangeQuizQuestions[state.rangeQuizIndex]?.id}`}
          questions={state.rangeQuizQuestions}
          questionIndex={state.rangeQuizIndex}
          feedback={state.assessFeedback}
          onContinue={() =>
            applyFlow(afterRangeQuizAnswer(stateRef.current))
          }
        />
      );
    }

    if (step === "chain-intro") {
      return (
        <HifdhTransitionScreen
          variant={promptVariant}
          emphasis={prompts.chainIntro.emphasis}
          speech={prompts.chainIntro.speech}
          continueLabel={prompts.chainIntro.continueLabel}
          onContinue={() => patch({ sessionStep: "chain", currentRound: 0 })}
        />
      );
    }

    if (step === "chain") {
      const chainPair = normalizeChainPair(state.selectedAyat, state.currentAyahIndex);
      if (!chainPair) return null;

      return (
        <HifdhChainPhase
          prevAyah={chainPair.prevAyah}
          currentAyah={chainPair.currentAyah}
          surahNumber={state.surahNumber}
          mushafPage={state.mushafPage}
          currentRound={state.currentRound}
          onRecited={() => applyFlow(afterChainRecited(stateRef.current))}
        />
      );
    }

    if (step === "test-intro") {
      return (
        <HifdhTransitionScreen
          variant={promptVariant}
          emphasis={prompts.testIntro.emphasis}
          speech={prompts.testIntro.speech}
          continueLabel={prompts.testIntro.continueLabel}
          onContinue={() => patch({ sessionStep: "test-record" })}
        />
      );
    }

    if (step === "test-record") {
      const chainPair = normalizeChainPair(state.selectedAyat, state.currentAyahIndex);
      const pair = chainPair
        ? [chainPair.prevAyah, chainPair.currentAyah]
        : [
            state.selectedAyat[state.currentAyahIndex - 1],
            state.selectedAyat[state.currentAyahIndex],
          ].filter((n) => n != null);

      return (
        <HifdhTestPhase
          ayahNumbers={pair}
          surahNumber={state.surahNumber}
          mushafPage={state.mushafPage}
          onContinue={() =>
            applyFlow(afterTestAssess(stateRef.current, TEST_ASSESSMENT.FIRM))
          }
        />
      );
    }

    if (state.currentPhase === "complete" || step === "complete") {
      return (
        <HifdhCompleteScreen
          state={state}
          completeBody={prompts.completeBody}
          onClose={onClose}
          onSchedule={() =>
            patch({ revisionSchedule: revisionDatesFromToday() })
          }
        />
      );
    }

    if (step === "listen" && currentAyah != null) {
      return (
        <HifdhListenPhase
          key={`${currentAyah}-${state.currentRound}-${showBetweenMessage}`}
          ayahNumber={currentAyah}
          surahNumber={state.surahNumber}
          mushafPage={state.mushafPage}
          currentRound={state.currentRound}
          paused={isPaused || exitPromptOpen}
          showBetweenMessage={showBetweenMessage}
          listenBetween={prompts.listenBetween}
          onRoundComplete={advanceAfterListen}
          onBetweenMessageDone={continueAfterBetweenMessage}
        />
      );
    }

    return null;
  };

  const phaseLabel = {
    immersion: "Immersion",
    scaffold: "Memory",
    quiz: "Quiz",
    join: "Join",
    chain: "Chain link",
    test: "Test",
    complete: "Complete",
  }[state.currentPhase];

  const useTeacherOverlay =
    state.currentPhase === "niyyah" ||
    (showMushafPane && TRANSITION_DOCK_STEPS.has(state.sessionStep));

  const useSideDock = showMushafPane && !useTeacherOverlay;
  const useDockLayout = showMushafPane || state.currentPhase === "niyyah";

  return createPortal(
    <div
      className={[
        "hifdh-session",
        "hifdh-session--mushaf-only",
        isPaused && "is-paused",
        useTeacherOverlay && "hifdh-session--overlay-dock",
        useSideDock && "hifdh-session--side-dock",
        useVerseStudyLayout && "hifdh-session--verse-study",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {showMushafPane && (
        <HifdhMushafPane
          mushafPage={state.mushafPage}
          surahNumber={state.surahNumber}
          dimmed={mushafDimmed}
        />
      )}

      <div
        className={[
          "hifdh-session__chrome",
          showMushafPane && "hifdh-session__chrome--over-mushaf",
          useVerseStudyLayout && "hifdh-session__chrome--study",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <header className="hifdh-session__topbar">
          <span className="hifdh-session__meta">
            {phaseLabel ?? "Memorization"}
            {currentAyah != null ? ` · Āyah ${toArabicNum(currentAyah)}` : ""}
            <span
              className="hifdh-session__elapsed"
              aria-label={`Time in session: ${elapsedLabel}`}
            >
              {" "}
              · {elapsedLabel}
            </span>
          </span>
          <div className="hifdh-session__topbar-actions">
            {state.currentPhase !== "complete" && (
              <button type="button" className="hifdh-session__next" onClick={skipForward}>
                Next →
              </button>
            )}
            {state.currentPhase !== "niyyah" && (
              <button type="button" className="hifdh-session__pause" onClick={requestExit}>
                Leave
              </button>
            )}
            <button
              type="button"
              className="hifdh-session__pause"
              onClick={isPaused && !exitPromptOpen ? resume : isPaused ? resume : pause}
              aria-pressed={isPaused}
            >
              {isPaused && !exitPromptOpen ? "Resume" : "Pause"}
            </button>
          </div>
        </header>

        {useVerseStudyLayout ? (
          <div className="hifdh-session__body hifdh-session__body--study">
            {renderBody()}
          </div>
        ) : (
          <div
            className={[
              useDockLayout ? "hifdh-session__dock" : "hifdh-session__body",
              useTeacherOverlay && "hifdh-session__dock--overlay",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {renderBody()}
          </div>
        )}
      </div>

      {resumeChoiceOpen && (
        <ResumeChoiceDialog
          progressLabel={describeSavedSessionProgress(state)}
          onContinue={() => {
            setResumeChoiceOpen(false);
            resume();
          }}
          onStartNew={startFreshSession}
        />
      )}

      {restartPromptOpen && (
        <RestartDialog
          onCancel={() => {
            setRestartPromptOpen(false);
            resume();
          }}
          onConfirm={startFreshSession}
        />
      )}

      {exitPromptOpen && (
        <ExitDialog
          onStay={() => {
            setExitPromptOpen(false);
            resume();
          }}
          onLeave={() => {
            setExitPromptOpen(false);
            onClose?.();
          }}
          onRestart={requestRestart}
        />
      )}

      {isPaused && !exitPromptOpen && !restartPromptOpen && !resumeChoiceOpen && (
        <div className="hifdh-session__backdrop" role="status" aria-live="polite">
          <div className="hifdh-session__dialog">
            <h3>Session paused</h3>
            <p>Your place is saved. Resume when you are ready.</p>
            <div className="hifdh-session__dialog-actions">
              <button
                type="button"
                className="hifdh-session__dialog-btn hifdh-session__dialog-btn--primary"
                onClick={resume}
              >
                Resume
              </button>
              <button type="button" className="hifdh-session__dialog-btn" onClick={requestExit}>
                Save and leave
              </button>
              <button
                type="button"
                className="hifdh-session__dialog-btn hifdh-session__dialog-btn--ghost"
                onClick={requestRestart}
              >
                Start new session
              </button>
            </div>
          </div>
        </div>
      )}
    </div>,
    document.body,
  );
}

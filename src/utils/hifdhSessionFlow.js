import {
  ASSESSMENT,
  CHAIN_ROUND_COUNT,
  LISTEN_ROUND_COUNT,
  SCAFFOLD_ROUND_COUNT,
  SHADOW_ROUND_COUNT,
  TEST_ASSESSMENT,
  assessmentKey,
  buildRangeQuizQuestions,
  flaggedIndicesForRound,
  getMemorizedAyahRange,
  hasHifdhAyahQuiz,
  shouldOfferRangeQuiz,
  shouldShowMidCheckIn,
} from "./hifdhSession.js";

export function afterListenRound(state, showBetweenMessage) {
  const round = state.currentRound;

  if (round < LISTEN_ROUND_COUNT - 1 && [1, 2, 3].includes(round) && !showBetweenMessage) {
    return { action: "between-message" };
  }

  if (round < LISTEN_ROUND_COUNT - 1) {
    return { patch: { currentRound: round + 1 } };
  }

  return { patch: { sessionStep: "explain-intro", currentRound: 0, assessFeedback: null } };
}

export function afterShadowRound(state) {
  if (state.currentRound < SHADOW_ROUND_COUNT - 1) {
    return { patch: { currentRound: state.currentRound + 1 } };
  }
  return {
    patch: {
      currentPhase: "scaffold",
      sessionStep: "scaffold-intro",
      currentRound: 0,
      assessFeedback: null,
    },
  };
}

export function afterScaffoldRecited(state) {
  return afterScaffoldAssess(state, ASSESSMENT.SMOOTH);
}

export function afterScaffoldAssess(state, result) {
  const ayah = state.selectedAyat[state.currentAyahIndex];
  const round = state.currentRound;
  const key = assessmentKey(ayah, round, state.bonusRound ? "bonus" : "scaffold");
  const stumbles = state.scaffoldStumbles[key] ?? 0;
  const assessmentHistory = { ...state.assessmentHistory, [key]: result };

  if (result === ASSESSMENT.HESITATED) {
    return {
      patch: {
        assessmentHistory,
        assessFeedback: null,
        sessionStep: "scaffold",
      },
      feedback: "hesitated",
    };
  }

  if (result === ASSESSMENT.STUMBLED) {
    const nextStumbles = stumbles + 1;
    const scaffoldStumbles = { ...state.scaffoldStumbles, [key]: nextStumbles };

    if (nextStumbles >= 2 && !state.bonusRound) {
      const wordCount = state._wordCount ?? 10;
      const indices = flaggedIndicesForRound(round, wordCount);
      return {
        patch: {
          assessmentHistory,
          scaffoldStumbles,
          assessFeedback: null,
          sessionStep: "flagged-intro",
          flaggedWords: {
            ...state.flaggedWords,
            [ayah]: indices,
          },
        },
        feedback: "stumbled",
      };
    }

    return {
      patch: {
        assessmentHistory,
        scaffoldStumbles,
        assessFeedback: null,
        sessionStep: "scaffold",
      },
      feedback: "stumbled",
    };
  }

  if (state.bonusRound) {
    return {
      patch: {
        assessmentHistory,
        assessFeedback: null,
        bonusRound: null,
        sessionStep: "scaffold",
        currentRound: SCAFFOLD_ROUND_COUNT - 1,
      },
    };
  }

  if (round < SCAFFOLD_ROUND_COUNT - 1) {
    return {
      patch: {
        assessmentHistory,
        assessFeedback: null,
        sessionStep: "scaffold",
        currentRound: round + 1,
      },
    };
  }

  return afterScaffoldAyahComplete({ ...state, assessmentHistory });
}

export function advanceAfterAyahBlock(state) {
  const idx = state.currentAyahIndex;

  if (idx < state.selectedAyat.length - 1) {
    return {
      patch: {
        assessmentHistory: state.assessmentHistory,
        currentAyahIndex: idx + 1,
        currentPhase: "immersion",
        sessionStep: "listen",
        currentRound: 0,
        assessFeedback: null,
        rangeQuizQuestions: null,
        rangeQuizIndex: 0,
        ayahQuizQuestions: null,
        ayahQuizIndex: 0,
      },
    };
  }

  return {
    patch: {
      assessmentHistory: state.assessmentHistory,
      currentPhase: "complete",
      sessionStep: "complete",
      assessFeedback: null,
      rangeQuizQuestions: null,
      rangeQuizIndex: 0,
      ayahQuizQuestions: null,
      ayahQuizIndex: 0,
    },
  };
}

export function startAyahQuiz(state) {
  if (!hasHifdhAyahQuiz(state.surahNumber)) {
    return afterAyahQuizComplete(state);
  }

  return {
    patch: {
      assessmentHistory: state.assessmentHistory,
      currentPhase: "quiz",
      sessionStep: "ayah-quiz",
      ayahQuizQuestions: null,
      ayahQuizIndex: 0,
      assessFeedback: null,
    },
  };
}

export function afterAyahQuizAnswer(state) {
  const questions = state.ayahQuizQuestions ?? [];
  const nextIndex = (state.ayahQuizIndex ?? 0) + 1;

  if (nextIndex < questions.length) {
    return {
      patch: {
        ayahQuizIndex: nextIndex,
        assessFeedback: null,
      },
    };
  }

  return afterAyahQuizComplete(state);
}

export function afterAyahQuizComplete(state) {
  const idx = state.currentAyahIndex;
  const base = {
    ayahQuizQuestions: null,
    ayahQuizIndex: 0,
    assessFeedback: null,
  };

  if (idx > 0) {
    return {
      patch: {
        ...base,
        currentPhase: "join",
        sessionStep: "join-intro",
        currentRound: 0,
      },
    };
  }

  return advanceAfterAyahBlock({ ...state, ...base });
}

export function afterScaffoldAyahComplete(state) {
  const idx = state.currentAyahIndex;

  if (shouldShowMidCheckIn(idx, state.selectedAyat.length, state.midSessionShown)) {
    return {
      patch: {
        assessmentHistory: state.assessmentHistory,
        assessFeedback: null,
        sessionStep: "mid-checkin",
        midSessionShown: true,
      },
    };
  }

  return startAyahQuiz({ ...state, assessmentHistory: state.assessmentHistory });
}

export function afterJoinOnceRecited(state) {
  return afterJoinOnceComplete(state);
}

export function afterJoinOnceComplete(state) {
  if (shouldOfferRangeQuiz(state)) {
    const memorized = getMemorizedAyahRange(
      state.selectedAyat,
      state.currentAyahIndex,
    );
    return {
      patch: {
        assessFeedback: null,
        sessionStep: "range-quiz-offer",
        rangeQuizQuestions: null,
        rangeQuizIndex: 0,
        _quizRange: memorized,
      },
    };
  }

  return advanceAfterAyahBlock(state);
}

export function startRangeQuiz(state) {
  const memorized =
    state._quizRange ??
    getMemorizedAyahRange(state.selectedAyat, state.currentAyahIndex);

  return {
    patch: {
      sessionStep: "range-quiz",
      rangeQuizQuestions: buildRangeQuizQuestions(
        memorized,
        state.surahNumber,
        state._localAyahs ?? null,
      ),
      rangeQuizIndex: 0,
      assessFeedback: null,
      _quizRange: memorized,
    },
  };
}

export function skipRangeQuiz(state) {
  return advanceAfterAyahBlock({
    ...state,
    rangeQuizQuestions: null,
    rangeQuizIndex: 0,
    _quizRange: null,
  });
}

export function afterRangeQuizAnswer(state) {
  const questions = state.rangeQuizQuestions ?? [];
  const nextIndex = state.rangeQuizIndex + 1;

  if (nextIndex < questions.length) {
    return {
      patch: {
        rangeQuizIndex: nextIndex,
        assessFeedback: null,
      },
    };
  }

  return advanceAfterAyahBlock({
    ...state,
    assessFeedback: null,
    rangeQuizQuestions: null,
    rangeQuizIndex: 0,
    _quizRange: null,
  });
}

export function afterChainRecited(state) {
  return afterChainAssess(state, ASSESSMENT.SMOOTH);
}

export function afterChainAssess(state, result) {
  const prev = state.selectedAyat[state.currentAyahIndex - 1];
  const current = state.selectedAyat[state.currentAyahIndex];
  const key = assessmentKey(`${prev}-${current}`, state.currentRound, "chain");
  const assessmentHistory = { ...state.assessmentHistory, [key]: result };

  if (result === ASSESSMENT.HESITATED || result === ASSESSMENT.STUMBLED) {
    return {
      patch: {
        assessmentHistory,
        assessFeedback: null,
        sessionStep: "chain",
      },
      feedback: result,
    };
  }

  if (state.currentRound < CHAIN_ROUND_COUNT - 1) {
    return {
      patch: {
        assessmentHistory,
        assessFeedback: null,
        sessionStep: "chain",
        currentRound: state.currentRound + 1,
      },
    };
  }

  return {
    patch: {
      assessmentHistory,
      currentPhase: "test",
      sessionStep: "test-intro",
      currentRound: 0,
      assessFeedback: null,
    },
  };
}

export function afterTestAssess(state, result) {
  const key = `test-${state.selectedAyat[state.currentAyahIndex - 1]}-${state.selectedAyat[state.currentAyahIndex]}`;
  const assessmentHistory = { ...state.assessmentHistory, [key]: result };
  const idx = state.currentAyahIndex;

  if (idx < state.selectedAyat.length - 1) {
    return {
      patch: {
        assessmentHistory,
        currentAyahIndex: idx + 1,
        currentPhase: "immersion",
        sessionStep: "listen",
        currentRound: 0,
        assessFeedback: null,
      },
    };
  }

  return {
    patch: {
      assessmentHistory,
      currentPhase: "complete",
      sessionStep: "complete",
      assessFeedback: null,
    },
  };
}

export function startBonusRound(state) {
  const ayah = state.selectedAyat[state.currentAyahIndex];
  const indices = state.flaggedWords[ayah] ?? [];
  return {
    patch: {
      sessionStep: "scaffold",
      bonusRound: { ayah, indices },
      assessFeedback: null,
    },
  };
}

export function startFlaggedListen(state) {
  return {
    patch: {
      sessionStep: "flagged-listen",
      currentRound: 0,
      assessFeedback: null,
    },
  };
}

/** Skip ahead one major step — for quick review of the full session flow. */
export function skipSessionStep(state) {
  const step = state.sessionStep;
  const idx = state.currentAyahIndex;
  const base = { assessFeedback: null, pausedAt: null };

  if (state.currentPhase === "niyyah") {
    return {
      patch: {
        ...base,
        currentPhase: "immersion",
        sessionStep: "opening",
        currentRound: 0,
      },
    };
  }

  if (state.currentPhase === "complete") return null;

  switch (step) {
    case "opening":
      return { patch: { ...base, sessionStep: "listen-intro" } };
    case "listen-intro":
      return { patch: { ...base, sessionStep: "listen", currentRound: 0 } };
    case "listen":
      return { patch: { ...base, sessionStep: "explain-intro", currentRound: 0 } };
    case "explain-intro":
      return { patch: { ...base, sessionStep: "explain" } };
    case "explain":
      return { patch: { ...base, sessionStep: "shadow-intro" } };
    case "shadow-intro":
      return { patch: { ...base, sessionStep: "shadow", currentRound: 0 } };
    case "shadow":
      return {
        patch: {
          ...base,
          currentPhase: "scaffold",
          sessionStep: "scaffold",
          currentRound: 0,
        },
      };
    case "scaffold-intro":
      return { patch: { ...base, sessionStep: "scaffold", currentRound: 0 } };
    case "scaffold":
      return afterScaffoldAyahComplete(state);
    case "ayah-quiz":
      return afterAyahQuizComplete(state);
    case "join-intro":
      return { patch: { ...base, currentPhase: "join", sessionStep: "join", currentRound: 0 } };
    case "join":
      return afterJoinOnceComplete(state);
    case "range-quiz-offer":
      return skipRangeQuiz(state);
    case "range-quiz":
      return advanceAfterAyahBlock(state);
    case "flagged-intro":
      return startBonusRound(state);
    case "stumble-intervention":
      return { patch: { ...base, sessionStep: "scaffold" } };
    case "mid-checkin":
      return startAyahQuiz(state);
    case "chain-intro":
      return { patch: { ...base, sessionStep: "chain", currentRound: 0 } };
    case "chain":
      return afterChainAssess(
        { ...state, currentRound: CHAIN_ROUND_COUNT - 1 },
        ASSESSMENT.SMOOTH,
      );
    case "test-intro":
      return { patch: { ...base, sessionStep: "test-record" } };
    case "test-record":
      return afterTestAssess(state, TEST_ASSESSMENT.FIRM);
    default:
      return null;
  }
}

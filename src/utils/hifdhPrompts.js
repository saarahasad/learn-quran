/** Varied teacher voice for hifdh sessions — one pack is chosen per session. */

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export const NIYYAH_VARIANTS = [
  {
    emphasis: "As-salāmu 'alaykum.",
    speech: [
      "Before we open the mushaf — pause with me a moment.",
      "You are about to sit with the words of Allah. Make your intention now: not to finish quickly, not to impress anyone — only to be present, for His sake alone.",
    ],
    bismillah: "بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْم",
    readyLabel: "I am ready",
  },
  {
    emphasis: "Bismillāh — let us begin with the heart.",
    speech: [
      "Close your eyes for a breath. What you are about to do is not ordinary study — it is carrying the speech of Allah into your chest.",
      "Set your niyyah: for His pleasure, for the light of the Quran in your life, for the day you will stand and recite it back to Him.",
    ],
    bismillah: "بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْم",
    readyLabel: "My heart is ready",
  },
  {
    emphasis: "Welcome back to the Book.",
    speech: [
      "Every session like this is a gift. The angels are listening. Your Lord is watching.",
      "Make your intention pure: I am here for Allah — not for a streak, not for praise, only to draw closer to His words.",
    ],
    bismillah: "بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْم",
    readyLabel: "Bismillāh — begin",
  },
  {
    emphasis: "This moment matters.",
    speech: [
      "The Prophet ﷺ said the Quran will come on the Day of Judgment as an intercessor for its companion. You are building that companionship right now.",
      "Pause. Breathe. Intend: I want these āyāt to live inside me — not just on my tongue.",
    ],
    bismillah: "بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْم",
    readyLabel: "I intend for Allah",
  },
  {
    emphasis: "You showed up. That already counts.",
    speech: [
      "Most people scroll past. You opened the mushaf. That is not small — that is a choice your future self will thank you for.",
      "Before a single word is recited, lock your intention: I am here to honour what Allah revealed, one breath at a time.",
    ],
    bismillah: "بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْم",
    readyLabel: "Let us begin",
  },
];

export const OPENING_VARIANTS = [
  {
    quote:
      'The Prophet ﷺ said: "The best of you are those who learn the Quran and teach it."',
    speech: [
      "I want you to hear that and take it to heart — today, that student is you.",
      "Stay with me. We will take these āyāt slowly, with the full attention they deserve.",
    ],
    continueLabel: "I'm ready — let's begin",
  },
  {
    quote:
      'The Prophet ﷺ said: "Whoever recites a letter from the Book of Allah receives a hasanah — and the hasanah is multiplied by ten."',
    speech: [
      "Every letter you carry today is a deposit in your akhirah account. Think about that as we begin.",
      "No rushing. No performing. Just you, these āyāt, and the One who revealed them.",
    ],
    continueLabel: "Bismillāh — I'm in",
  },
  {
    quote:
      'The Prophet ﷺ said: "The example of the one who recites the Quran is like a citron — fragrant and sweet."',
    speech: [
      "You are about to become someone whose heart smells of the Quran. That transformation starts in sessions exactly like this one.",
      "Trust the process. I will guide you step by step.",
    ],
    continueLabel: "Guide me — let's go",
  },
  {
    quote:
      'Allah says: "We have certainly made the Quran easy to remember. So is there anyone who will be mindful?"',
    speech: [
      "Allah Himself said it is easy to remember. He is inviting you — will you answer?",
      "We will move through listening, understanding, and reciting together. You are not alone in this.",
    ],
    continueLabel: "I accept the invitation",
  },
  {
    quote:
      'The Prophet ﷺ said: "Verily, through this Quran, Allah elevates some people and debases others."',
    speech: [
      "You chose elevation today. These āyāt will lift you — if you give them your sincere attention.",
      "Let us begin with calm focus. The rest will follow.",
    ],
    continueLabel: "Elevate me — begin",
  },
];

export const LISTEN_INTRO_VARIANTS = [
  {
    emphasis: "Good. Now — just listen.",
    speech: [
      "Don't try to memorize yet. Let the words settle in your ears first.",
      "Allah's words have a sound before they have a meaning. Give yourself permission to simply hear.",
    ],
    continueLabel: "I'm listening",
  },
  {
    emphasis: "Open your ears — close the pressure.",
    speech: [
      "Forget memorization for now. Your only job is to let the recitation wash over you.",
      "The rhythm of the Quran is its own teacher. Hear it like you have never heard it before.",
    ],
    continueLabel: "Open my ears",
  },
  {
    emphasis: "First, let the sound find you.",
    speech: [
      "Before your tongue moves, your ears must learn. That is not a delay — that is wisdom.",
      "Listen as a guest listens to something precious. Because that is exactly what this is.",
    ],
    continueLabel: "I will listen deeply",
  },
  {
    emphasis: "Silence the rush. Just hear.",
    speech: [
      "Your mind might want to grab the words already — let it wait.",
      "Five listens. Five chances for these āyāt to land in your heart before your tongue ever tries.",
    ],
    continueLabel: "Begin listening",
  },
];

export const LISTEN_BETWEEN_PACKS = [
  {
    2: "Notice the rhythm — where does it rise? Where does it rest? Stay with me; listen once more.",
    3: "Your tongue is already learning, even when you are silent. Trust that.",
    4: "One more time. Listen as if it were the first time you ever heard it.",
  },
  {
    2: "Catch the melody — every āyah has a shape. Follow it with your heart this round.",
    3: "Something is settling inside you right now, even if you cannot feel it yet. Keep going.",
    4: "Last listen. Let it be the most present one — no distractions, just you and the recitation.",
  },
  {
    2: "Hear the pauses. The spaces between words are part of the meaning. Listen again.",
    3: "The sahabah learned by hearing before they learned by reciting. You are walking their path.",
    4: "One final round. Close your eyes if it helps — let the sound carry you.",
  },
  {
    2: "Pay attention to how the reciter breathes. Your breath will follow the same pattern one day.",
    3: "Each repetition is a thread weaving these words into your memory. Another thread now.",
    4: "This is the last listen before we move on. Make it count — be fully here.",
  },
  {
    2: "Feel the weight of each word. These are not ordinary sounds — they are divine speech.",
    3: "You are building an ear for the Quran. That is a lifelong gift. One more round.",
    4: "Final listen. Imagine the Prophet ﷺ reciting these exact words. Hear them through that lens.",
  },
];

export const EXPLAIN_INTRO_VARIANTS = [
  {
    emphasis: "Beautiful. Now let it reach your heart.",
    speech: [
      "A word you truly understand is a word your heart will not easily forget.",
      "Read the meaning carefully — I will be right here with you.",
    ],
    continueLabel: "Show me the meaning",
  },
  {
    emphasis: "Meaning is the anchor.",
    speech: [
      "Words without meaning drift away. Words with meaning sink deep and stay.",
      "Take your time with the tafsīr — this is where hifdh becomes something you live, not just recite.",
    ],
    continueLabel: "Let me understand",
  },
  {
    emphasis: "Now we feed the heart.",
    speech: [
      "You have heard the sound. Now give the meaning a home inside you.",
      "Read slowly. Let each phrase land before you move to the next.",
    ],
    continueLabel: "Open the meaning",
  },
  {
    emphasis: "Understanding changes everything.",
    speech: [
      "The difference between memorizing and truly knowing is meaning. You are about to cross that line.",
      "Read with curiosity — what is Allah telling you in these āyāt?",
    ],
    continueLabel: "I want to understand",
  },
];

export const SHADOW_INTRO_VARIANTS = [
  {
    emphasis: "Now — your turn.",
    speech: [
      "Don't chase perfection. Follow the reciter the way a student follows a teacher in the room.",
      "Your voice and these āyāt are still becoming familiar with each other. That is exactly where you should be.",
    ],
    continueLabel: "I'll follow along",
  },
  {
    emphasis: "Your voice joins the recitation.",
    speech: [
      "Shadow the reciter — match their pace, their pauses, their breath. Do not rush ahead.",
      "This is where your tongue starts to belong to these words. Let it happen naturally.",
    ],
    continueLabel: "My turn — let's go",
  },
  {
    emphasis: "Time to speak.",
    speech: [
      "You have listened. Now echo. Your mouth needs to feel the shape of every word.",
      "Mistakes are welcome here — they are how the tongue learns. Just keep following.",
    ],
    continueLabel: "I'll shadow along",
  },
  {
    emphasis: "Let your tongue wake up.",
    speech: [
      "The reciter will lead; you will follow. Think of it as walking in someone's footsteps until the path becomes yours.",
      "Three rounds. Three chances for your voice to find its place in these āyāt.",
    ],
    continueLabel: "Lead me — I'll follow",
  },
];

export const SCAFFOLD_INTRO_VARIANTS = [
  {
    emphasis: "Now we remove the support — gently.",
    speech: [
      "What you have heard and what you have read is already inside you.",
      "I am going to ask you to reach for it from memory. Trust yourself.",
    ],
    continueLabel: "I'm ready to try",
  },
  {
    emphasis: "The training wheels come off.",
    speech: [
      "Everything until now was preparation. This is where hifdh actually begins — reaching inward.",
      "You know more than you think. Prove it to yourself, one word at a time.",
    ],
    continueLabel: "I trust what I've learned",
  },
  {
    emphasis: "Reach inward. The words are there.",
    speech: [
      "Your memory has been quietly building this whole time. Now we test it — gently, round by round.",
      "Do not fear the blank spaces. They are invitations, not walls.",
    ],
    continueLabel: "Let me try from memory",
  },
  {
    emphasis: "This is the real work — and you are ready.",
    speech: [
      "Listening was the seed. Shadowing was the water. Now we see what has grown.",
      "I will fade the words away slowly. You will surprise yourself.",
    ],
    continueLabel: "Bring it on",
  },
];

export const SCAFFOLD_FADE_PACKS = [
  {
    4: "The words are still there — you have heard them. Reach for them.",
    6: "The page looks empty, but you are not. Recite.",
  },
  {
    4: "Half the words are gone. The other half is inside you. Dig for it.",
    6: "Blank page. Full heart. Let the āyah rise from memory — you have earned this.",
  },
  {
    4: "Fewer letters on screen means more letters in your chest. Trust the process.",
    6: "Nothing to read — only what you remember. That is hifdh. Go.",
  },
  {
    4: "The scaffold is thinning. Your memory is thickening. Keep reaching.",
    6: "Just you and the āyah now. No crutches. Recite with courage.",
  },
];

export const SCAFFOLD_RECITE_HINTS = [
  "Recite from memory, record yourself, then continue.",
  "Close your eyes if it helps. Speak the āyah from your heart, then record.",
  "Take a breath. Recite what you remember — record it, then tell me how it felt.",
  "The words are in there. Pull them out, record your voice, and continue.",
];

export const CHAIN_INTRO_VARIANTS = [
  {
    emphasis: "Now we connect.",
    speech: [
      "In hifdh, the join between two āyāt is almost always the weakest point.",
      "Let us strengthen that link together — slowly, deliberately.",
    ],
    continueLabel: "Let's connect them",
  },
  {
    emphasis: "The bridge between āyāt.",
    speech: [
      "Knowing one āyah is good. Flowing from one into the next without breaking — that is mastery.",
      "We will practise the join until it feels like one continuous breath.",
    ],
    continueLabel: "Strengthen the link",
  },
  {
    emphasis: "Where āyāt meet — that is where hifdh breaks.",
    speech: [
      "Most students stumble at the seam, not in the middle. We are going to make your seam unbreakable.",
      "Recite the end of one āyah and flow straight into the next. No pause, no panic.",
    ],
    continueLabel: "Let's build the bridge",
  },
  {
    emphasis: "Connect. Don't restart.",
    speech: [
      "The goal is seamless flow — as if these two āyāt were always one passage in your mind.",
      "Five rounds. Five chances to make the join feel effortless.",
    ],
    continueLabel: "Connect them for me",
  },
];

export const TEST_INTRO_VARIANTS = [
  {
    emphasis: "Let us see what your heart has held.",
    speech: [
      "I will give you the first words — you carry the rest forward.",
      "Take a breath. Begin when you feel ready. I am listening.",
    ],
    continueLabel: "I'm ready to recite",
  },
  {
    emphasis: "The moment of truth — and you are ready.",
    speech: [
      "A small prompt, then your voice carries the chain. This is what all the practice was for.",
      "Breathe. Focus. Recite like someone who has sat with these words and made them their own.",
    ],
    continueLabel: "Test me",
  },
  {
    emphasis: "Show me what you have built.",
    speech: [
      "I will start you off — you finish the journey across both āyāt.",
      "No pressure to be perfect. Pressure to be honest. Give it everything you have.",
    ],
    continueLabel: "I'm ready — watch me",
  },
  {
    emphasis: "Your recitation. Your proof.",
    speech: [
      "These two āyāt, connected, from memory. You have done the work — now let it show.",
      "When you are ready, begin. I believe in what you have put in.",
    ],
    continueLabel: "Let me recite",
  },
];

export const TEST_PLAYBACK_VARIANTS = [
  "Listen back to yourself. That is the voice of someone carrying the Book of Allah.",
  "Play it back. Hear what you have stored. That sound did not exist in you an hour ago.",
  "Listen to your own recitation. Someone once said the sweetest sound is your own voice reciting Quran — hear why.",
  "That recording is proof. You carried Allah's words from memory. Let that sink in.",
];

export const MID_SESSION_VARIANTS = [
  {
    speech: [
      "You are halfway through — and I can see the effort you have put in.",
      "The Prophet ﷺ said Allah is with the one who perseveres.",
      "Don't rush the second half. Give it the same presence you gave the first.",
    ],
    continueLabel: "I'll keep going",
  },
  {
    speech: [
      "Halfway. Take a breath — you have earned it.",
      "The second half is where champions are made. Not because it is harder, but because you choose to keep going.",
      "Same focus. Same intention. Let us finish strong.",
    ],
    continueLabel: "Second half — let's go",
  },
  {
    speech: [
      "Look how far you have come already. The mushaf knows your voice now.",
      "Allah loves consistency more than intensity. You have been consistent — do not stop now.",
      "The finish line is closer than the start. Keep moving.",
    ],
    continueLabel: "I'm not stopping",
  },
  {
    speech: [
      "Midpoint check-in. How does your chest feel? Fuller than when you started?",
      "Every āyah you have carried today is a light that will walk with you.",
      "The second half deserves the same love. Continue.",
    ],
    continueLabel: "Same energy — continue",
  },
];

export const STUMBLE_INTERVENTION_VARIANTS = [
  {
    emphasis: "It's alright. Stay with me.",
    speech: [
      "Every hāfiz you have ever admired sat exactly where you are sitting now.",
      "Let us try once more — just this āyah. Nothing else in the world matters right now.",
    ],
    continueLabel: "Once more",
  },
  {
    emphasis: "A stumble is not a fall.",
    speech: [
      "You tripped on a word — that means you found exactly where to focus. That is valuable.",
      "Breathe. Reset. One more attempt with full attention on that spot.",
    ],
    continueLabel: "I'll try again",
  },
  {
    emphasis: "This is where hifdh is forged.",
    speech: [
      "The easy rounds do not make memorizers. Moments like this do.",
      "Slow down. Isolate the word. Recite it once more — just you and this āyah.",
    ],
    continueLabel: "Focus and retry",
  },
  {
    emphasis: "The Quran was revealed slowly — so can you learn it.",
    speech: [
      "Jibrīl did not rush the Prophet ﷺ. I will not rush you.",
      "One more time, with patience. The word that stumbles today will be the word you never forget tomorrow.",
    ],
    continueLabel: "Patience — once more",
  },
];

export const FLAGGED_INTRO_VARIANTS = [
  {
    emphasis: "Let us slow down here.",
    speech: [
      "This word needs a little more attention — listen to it on its own, three times.",
      "Then we will place it back where it belongs. I will wait for you.",
    ],
    continueLabel: "I'll focus on it",
  },
  {
    emphasis: "Found the weak spot — good.",
    speech: [
      "Now we give this word special treatment. Listen to it in isolation until your tongue owns it.",
      "Precision here saves hours of revision later. Stay with me.",
    ],
    continueLabel: "Target this word",
  },
  {
    emphasis: "Zoom in. This word matters.",
    speech: [
      "One stubborn word can shake an entire āyah. We are going to make it unshakeable.",
      "Listen three times. Feel it. Then we rebuild around it.",
    ],
    continueLabel: "Make it stick",
  },
];

export const ASSESS_PROMPT_VARIANTS = [
  "Tell me honestly — how did that feel?",
  "Be real with me — how was that recitation?",
  "How did your heart rate that one?",
  "No judgment — just honesty. How did it go?",
  "Rate yourself. Only you know what happened in that moment.",
];

export const ASSESS_FEEDBACK_SMOOTH = [
  "Mā shā' Allāh — that is hifdh. That is what I want to hear from you.",
  "Beautiful. Smooth, confident, present. Your effort is showing.",
  "That flowed. You did not just remember — you owned it. Keep that energy.",
  "Yes. That is the sound of someone who sat with the āyah and made it theirs.",
  "Clean recitation. Your future self — revising this on a hard day — will thank you for this round.",
];

export const ASSESS_FEEDBACK_HESITATED = [
  "You hesitated — and that is not failure. It is the moment just before it settles. Once more, with me.",
  "A pause means the word is almost yours. One more round and it will click.",
  "Hesitation is the brain reaching for something it almost has. You are closer than you think.",
  "You knew it — you just needed a second. That second will shrink with practice. Try again.",
];

export const ASSESS_FEEDBACK_STUMBLED = [
  "You stumbled — and now we know exactly where to look. That is a gift. Let us give that spot your full attention.",
  "Good — we found the crack before it became a hole. That word gets our focus now.",
  "A stumble today is a strong link tomorrow. Let us isolate that spot and rebuild.",
  "No shame in stumbling. Every hāfiz has a story about the word that fought back. This is yours.",
];

export const COMPLETE_BODY_VARIANTS = [
  [
    "You have given these āyāt your time, your voice, and your attention.",
    "That is not a small thing.",
    "What you memorized today is not stored in your phone.",
    "It is stored somewhere better.",
    "Come back tomorrow. The Quran rewards those who return.",
  ],
  [
    "You sat with the words of Allah today and did not leave empty-handed.",
    "These āyāt are in your chest now — guarded by angels, inshā' Allāh.",
    "The hardest part of any session is showing up. You showed up.",
    "Return tomorrow. Revision is where hifdh becomes permanent.",
  ],
  [
    "Session complete. But the story of these āyāt in your life is just beginning.",
    "You listened. You understood. You recited. You tested. That is the full journey.",
    "What you built today will whisper to you in salah, in quiet moments, on difficult days.",
    "Come back. The Quran grows with every return.",
  ],
  [
    "Alhamdulillāh — you finished.",
    "Somewhere in the unseen, this effort is recorded. Your Lord sees what you gave today.",
    "These āyāt will not leave you. They will wait patiently until you come back to revise.",
    "Tomorrow is not a deadline. It is an invitation.",
  ],
];

export const DEFAULT_PROMPT_PACK = {
  niyyah: NIYYAH_VARIANTS[0],
  opening: OPENING_VARIANTS[0],
  listenIntro: LISTEN_INTRO_VARIANTS[0],
  listenBetween: LISTEN_BETWEEN_PACKS[0],
  explainIntro: EXPLAIN_INTRO_VARIANTS[0],
  shadowIntro: SHADOW_INTRO_VARIANTS[0],
  scaffoldIntro: SCAFFOLD_INTRO_VARIANTS[0],
  scaffoldFade: SCAFFOLD_FADE_PACKS[0],
  scaffoldReciteHint: SCAFFOLD_RECITE_HINTS[0],
  chainIntro: CHAIN_INTRO_VARIANTS[0],
  testIntro: TEST_INTRO_VARIANTS[0],
  testPlayback: TEST_PLAYBACK_VARIANTS[0],
  midSession: MID_SESSION_VARIANTS[0],
  stumbleIntervention: STUMBLE_INTERVENTION_VARIANTS[0],
  flaggedIntro: FLAGGED_INTRO_VARIANTS[0],
  assessPrompt: ASSESS_PROMPT_VARIANTS[0],
  assessFeedback: {
    smooth: ASSESS_FEEDBACK_SMOOTH[0],
    hesitated: ASSESS_FEEDBACK_HESITATED[0],
    stumbled: ASSESS_FEEDBACK_STUMBLED[0],
  },
  completeBody: COMPLETE_BODY_VARIANTS[0],
};

export function buildPromptPack() {
  return {
    niyyah: pick(NIYYAH_VARIANTS),
    opening: pick(OPENING_VARIANTS),
    listenIntro: pick(LISTEN_INTRO_VARIANTS),
    listenBetween: pick(LISTEN_BETWEEN_PACKS),
    explainIntro: pick(EXPLAIN_INTRO_VARIANTS),
    shadowIntro: pick(SHADOW_INTRO_VARIANTS),
    scaffoldIntro: pick(SCAFFOLD_INTRO_VARIANTS),
    scaffoldFade: pick(SCAFFOLD_FADE_PACKS),
    scaffoldReciteHint: pick(SCAFFOLD_RECITE_HINTS),
    chainIntro: pick(CHAIN_INTRO_VARIANTS),
    testIntro: pick(TEST_INTRO_VARIANTS),
    testPlayback: pick(TEST_PLAYBACK_VARIANTS),
    midSession: pick(MID_SESSION_VARIANTS),
    stumbleIntervention: pick(STUMBLE_INTERVENTION_VARIANTS),
    flaggedIntro: pick(FLAGGED_INTRO_VARIANTS),
    assessPrompt: pick(ASSESS_PROMPT_VARIANTS),
    assessFeedback: {
      smooth: pick(ASSESS_FEEDBACK_SMOOTH),
      hesitated: pick(ASSESS_FEEDBACK_HESITATED),
      stumbled: pick(ASSESS_FEEDBACK_STUMBLED),
    },
    completeBody: pick(COMPLETE_BODY_VARIANTS),
  };
}

export function ensurePromptPack(state) {
  if (state?.promptPack) return state.promptPack;
  return DEFAULT_PROMPT_PACK;
}

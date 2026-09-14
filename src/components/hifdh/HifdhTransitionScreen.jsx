import HifdhTeacherPrompt from "./HifdhTeacherPrompt.jsx";

export default function HifdhTransitionScreen({
  variant = "standalone",
  lead,
  title,
  body = [],
  hadith,
  quote,
  emphasis,
  speech,
  bismillah,
  continueLabel = "Continue",
  onContinue,
}) {
  const spokenLines =
    speech ??
    [
      ...(lead ? [lead] : []),
      ...(title ? [title] : []),
      ...body,
    ].filter(Boolean);

  return (
    <HifdhTeacherPrompt
      variant={variant}
      emphasis={emphasis}
      quote={quote ?? hadith}
      speech={spokenLines}
      bismillah={bismillah}
      continueLabel={continueLabel}
      onContinue={onContinue}
    />
  );
}

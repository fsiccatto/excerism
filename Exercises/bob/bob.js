
export const hey = (message) => {
  const msg = message.trim();
  const isUpperCase = (msg) === msg.toUpperCase() && msg !== msg.toLowerCase();
  const isQuestion = msg.slice(-1) === '?';

  if (isQuestion && isUpperCase) return "Calm down, I know what I'm doing!";
  if (isUpperCase) return "Whoa, chill out!";
  if (isQuestion) return "Sure.";
  if (msg === "") return "Fine. Be that way!";

  return "Whatever.";
};
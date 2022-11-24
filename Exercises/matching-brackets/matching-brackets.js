
const BRACKET_MAP = {
  "(": ")",
  "[": "]",
  "{": "}",
};

const bracketCharacter = (string) => string.match(/[([{}\])]/g) || [];
const isOpenBracket = (bracket) => !!BRACKET_MAP[bracket];
const arePairedBrackets = (openBracket, closingBracket) =>
  BRACKET_MAP[openBracket] === closingBracket;
const isEmptyStack = (stack) => stack.length === 0;

//??
const isPairedReg = (string) => {
  const openBracketStack = [];
  return (
    bracketCharacter(string).every((bracket) =>
      isOpenBracket(bracket)
        ? openBracketStack.push(bracket)
        : arePairedBrackets(openBracketStack.pop(), bracket)
    ) && isEmptyStack(openBracketStack)
  );
};

const CLOSED_BRACKETS = Object.values(BRACKET_MAP);
const isClosedBrackets = (bracket) => CLOSED_BRACKETS.includes(bracket);

export const isPaired = (string) => {
  const openBracketStack = [];
  for (let i = 0; i < string.length; i++) {
    if (isOpenBracket(string[i])) openBracketStack.push(string[i]);
    if (isClosedBrackets(string[i])) {
      if (!arePairedBrackets(openBracketStack.pop(), string[i])) return false;
    }
  }
  return isEmptyStack(openBracketStack);
};


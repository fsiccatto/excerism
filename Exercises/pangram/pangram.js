
export const isPangram = (phrase) => {
  const phraseArray = phrase.toLowerCase();
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const alphabetArray = alphabet.split('');
  let isPangram = true;
  alphabetArray.forEach((letter) => {
    if (!phraseArray.includes(letter)) {
      isPangram = false;
    }
  });
  return isPangram;
};


export const compute = (dna, dnaRepeat) => {
  if (dna.length != dnaRepeat.length) throw new Error ("strands must be of equal length");

  return dna.split("").reduce((differences, letter, index) => {
    if (letter != dnaRepeat.split("")[index]) differences++;
    return differences;
  }, 0)
};

console.log(compute('GGACTGAAATCTG', 'GGACTGAAABBBB'));
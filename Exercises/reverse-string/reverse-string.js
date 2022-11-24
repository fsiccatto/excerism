
/* export const reverseString = (string) => {
  const stringArr = string.split("");
  const stringRev = [];
  for (let i = stringArr.length - 1; i >= 0; i--) {
    stringRev.push(stringArr[i]);
  }
  return stringRev.join("");
}; */

export const reverseString = (string) => [...string].reverse().join("");
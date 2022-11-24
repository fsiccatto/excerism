// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  return Number(array1.join("")) + Number(array2.join(""));
}
twoSum([1, 2, 3], [0, 7]);
/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean}  whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  const value2 = String(value).split("").reverse().join("");
  return value === Number(value2);
}
luckyNumber(1441);
/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (Boolean(input) == false) return "Required field";
  if (!Number(input)) return "Must be a number besides 0"; // Sin el input == 0 no funciona -> inncesario
  return ""
}
errorMessage('123');
errorMessage('');
errorMessage('abc');

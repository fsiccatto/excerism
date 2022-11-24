// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  return birdsPerDay.reduce((total, bird) => total + bird);
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  const weekIndex = (week - 1) * 7;
  weekIndex;
  return totalBirdCount(birdsPerDay.slice(weekIndex, weekIndex + 7));
}
birdsInWeek([3, 0, 5, 1, 0, 4, 1, 0, 3, 4, 3, 0, 8, 0], 1);

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i++) {
    if (i % 2 === 0) {
      birdsPerDay[i] += 1;
      continue;
    }
    (birdsPerDay[i]);
  }
  return birdsPerDay;
}
fixBirdCountLog([2, 5, 0, 7, 4, 1]);
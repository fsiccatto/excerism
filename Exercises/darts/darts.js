
const points = [
  [1, 10],
  [5, 5],
  [10, 1],
  [Infinity, 0],
];

export const score = (x, y) => {
  return points.find(circle => Math.hypot(x, y) <= circle[0])[1];
};


export const steps = (num) => {
  if (num <= 0) throw new Error("Only positive numbers are allowed");

  let step = 0;
  while (num !== 1) {
    (num % 2 === 0) ? num = num / 2 : num = 3 * num + 1;
    step++;
  }
  return step;
};


const isPositive = (N) => typeof N == "number" && N > 0;
const createArray = (N) => {
  let array = [];
  for (let i = 1; i <= N; i++) {
    array.push(i);
  }
  array;
  return array;
};

export class Squares {
  constructor(N) {
    this.N = N;
    isPositive(N);
  }

  get sumOfSquares() {
    const arr = createArray(this.N);
    return arr.reduce((sum, value) => sum += Math.pow(value, 2), 0);
  }

  get squareOfSum() {
    const arr = createArray(this.N);
    let square = arr.reduce((sum, value) => sum += value, 0);
    return Math.pow(square, 2);
  }

  get difference() {
    return Math.abs(this.sumOfSquares - this.squareOfSum);
  }
}

const sq = new Squares(10);

console.log(sq.difference);

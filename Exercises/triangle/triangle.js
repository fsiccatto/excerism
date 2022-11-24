
// Codigo funcional pero sucio, repetitivo y mal ejecutado!
/* export class Triangle {
  constructor(...sides) {
    this.sides = sides;
  }

  get isEquilateral() {
    if (this.sides[0] === 0 || this.sides[1] === 0 || this.sides[2] === 0) return false;
    if (this.sides[0] + this.sides[1] <= this.sides[2] || this.sides[0] + this.sides[2] <= this.sides[1] || this.sides[1] + this.sides[2] <= this.sides[0]) return false;
    return (this.sides[0] === this.sides[1] && this.sides[1] === this.sides[2] && this.sides[0] === this.sides[2]) ? true : false;
  }

  get isIsosceles() {
    if (this.sides[0] === 0 || this.sides[1] === 0 || this.sides[2] === 0) return false;
    if (this.sides[0] + this.sides[1] <= this.sides[2] || this.sides[0] + this.sides[2] <= this.sides[1] || this.sides[1] + this.sides[2] <= this.sides[0]) return false;
    return (this.sides[0] === this.sides[1] || this.sides[1] === this.sides[2] || this.sides[0] === this.sides[2]) ? true : false;
  }

  get isScalene() {
    if (this.sides[0] === 0 || this.sides[1] === 0 || this.sides[2] === 0) return false;
    if (this.sides[0] + this.sides[1] <= this.sides[2] || this.sides[0] + this.sides[2] <= this.sides[1] || this.sides[1] + this.sides[2] <= this.sides[0]) return false;
    return (this.sides[0] !== this.sides[1] && this.sides[1] !== this.sides[2] && this.sides[0] !== this.sides[2]) ? true : false;
  }
} */

const isFiniteN = (n) => typeof n === 'number' && isFinite(n);
const isPositiveN = (n) => isFiniteN(n) && n > 0;

export class Triangle {
  static verifyTriangle(sides) {
    const [side1, side2, side3] = sides.sort((a, b) => a - b);
    return (
      sides.length === 3 &&
      sides.every(isPositiveN) &&
      side1 + side2 >= side3
    );
  }

  #sides;
  #isEquilateral = false;
  #isIsosceles = false;
  #isScalene = false;

  constructor(...sides) {
    this.#sides = sides;

    if (Triangle.verifyTriangle(sides)) {
      const uniqueSides = new Set(sides);
      this.#isEquilateral = uniqueSides.size === 1;
      this.#isIsosceles = uniqueSides.size <= 2;
      this.#isScalene = uniqueSides.size === 3;
    };
  }

  get sides() {
    return this.#sides;
  }

  get isEquilateral() {
    return this.#isEquilateral;
  }

  get isIsosceles() {
    return this.#isIsosceles;
  }

  get isScalene() {
    return this.#isScalene;
  }
}
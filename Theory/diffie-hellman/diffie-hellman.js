//
// This is only a SKELETON file for the 'Diffie Hellman' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class DiffieHellman {
  #p;
  #g;
  constructor(p, g) {
    if (!this._isPrime(p) || !this._isPrime(g))
      throw new Error("Numbers are not prime");
    if (p > 100 || g > 100) throw new Error("Out of range");

    [this.#p, this.#g] = [p, g];
  }

  getPublicKey(privateKey) {
    if (privateKey <= 1 || privateKey >= this.#p)
      throw new Error("Invalid private key");
    return this.#g ** privateKey % this.#p;
  }

  getSecret(theirPublicKey, myPrivateKey) {
    return theirPublicKey ** myPrivateKey % this.#p;
  }

  _isPrime(n) {
    let prime = true;
    const limit = Math.ceil(Math.sqrt(n));

    for (let i = 2; i <= limit; i++) {
      if (n % i === 0) prime = false;
    }
    return prime;
  }
}

const diffieHellman = new DiffieHellman(13, 7);
diffieHellman;

/* const { floor, sqrt } = Math;
const isFactor = n => factor => n % factor === 0;
const rangeSqrt = (min, n) => [...Array(floor(sqrt(n)) + 1).keys()].slice(min);
const factors = n => rangeSqrt(2, n).flatMap(num => isFactor(n)(num) ? [...new Set([num, n / num])] : []);
const isPrime = n => n > 1 && !rangeSqrt(2, n).some(isFactor(n));

const isPrimitiveRoot = n => root => n > 1 && factors(n - 1).every(factor => root ** factor % n !== 1);
export class DiffieHellman {
  #p;
  #g;
  constructor(p, g) {
    if (!isPrime(p)) throw new Error('p must be prime.');
    if (!isPrimitiveRoot(p)(g)) throw new Error('g must be a primitive root of p.');
    [this.#p, this.#g] = [p, g];
  }
  getPublicKey(a) {
    if (a <= 1 || a >= this.#p) throw new Error('Private key must be between 1 and p.');
    return this.#g ** a % this.#p;
  }
  getSecret(B, a) {
    return B ** a % this.#p;
  }
} */

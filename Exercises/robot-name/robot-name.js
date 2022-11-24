
export class Robot {
  static robotSet = new Set();

  constructor() {
    this._name = this.generateName();
  }

  get name() {
    return this._name;
  }

  generateName() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    let randomName = "";
    for (let i = 0; i < 5; i++) {
      if (i > 1) {
        randomName += numbers.charAt(
          Math.floor(Math.random() * numbers.length)
        );
      } else {
        randomName += characters.charAt(
          Math.floor(Math.random() * characters.length)
        );
      }
    }
    return randomName;
  }

  static releaseNames() {
    Robot.robotSet.clear();
  }

  reset() {
    Robot.robotSet.add(this._name);
    while (Robot.robotSet.has(this._name)) {
      this._name = this.generateName();
    }
  }
}

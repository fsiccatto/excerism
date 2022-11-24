export const abilityModifier = (constitution) => {
  if (constitution > 18) throw new Error('Ability scores can be at most 18');
  if (constitution < 3) throw new Error('Ability scores must be at least 3');
  return Math.floor((constitution - 10) / 2);
};

const ABILITIES = [
  'strength',
  'dexterity',
  'constitution',
  'intelligence',
  'wisdom',
  'charisma',
];

export class Character {
  constructor() {
    for (const ability of ABILITIES) {
      this[ability] = Character.rollAbility();
    }
    this.hitpoints = 10 + abilityModifier(this.constitution);
  }

  static rollAbility() {
    let diceValues = [0, 0, 0, 0];
    diceValues = diceValues.map((_) => Math.floor(Math.random() * 6 + 1));

    return diceValues
      .sort((a, b) => a - b)
      .slice(1)
      .reduce((acc, value) => (acc += value), 0);
  }
}
import { SimpleFighter } from './Fighter';

// Class to create instances of a new monster of the game
export default class Monster implements SimpleFighter {
  protected _lifePoints: number;
  private _strength: number;

  constructor() {
    this._lifePoints = 85; // it's set with 85 as default value
    this._strength = 63; // it's set with 63 as default value
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  // the damage is the monster lifePoints minus the attackPoints of the character. If the lifepoints is lower or equal to 0, lifePoints id setted as -1
  public receiveDamage(attackPoints: number): number {
    const damage = this._lifePoints - attackPoints;
    this._lifePoints = damage;
    if (damage <= 0) {
      this._lifePoints = -1;
    }
    return this._lifePoints;
  }

  // attack implies the damage in the enemy with the monster strength
  public attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }
}
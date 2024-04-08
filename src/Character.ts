import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

// Class to create instances of a new character of the game
export default class Character implements Fighter {
  private _name: string;
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(name: string) {
    this._name = name;
    this._dexterity = getRandomInt(1, 10); // by default its a random numer between 1 and 10
    this._race = new Elf(name, this._dexterity); // by default it creates an Elf race character
    this._archetype = new Mage(name); // by default it creates a Mage archetype character
    this._maxLifePoints = this._race.maxLifePoints / 2; // by default it starts with half the the Elf maxLifePoints value
    this._lifePoints = this._maxLifePoints; // the same as the maxLifePoints
    this._strength = getRandomInt(1, 10); // by default its a random numer between 1 and 10
    this._defense = getRandomInt(1, 10); // by default its a random numer between 1 and 10
    this._energy = {
      type_: this._archetype.energyType, // by default itś the same energy type from the Mage archetype
      amount: getRandomInt(1, 10), // by default its a random numer between 1 and 10
    };
  }

  get name(): string { return this._name; }
  get race(): Race { return this._race; }
  get archetype(): Archetype { return this._archetype; }
  get maxLifePoints(): number { return this._maxLifePoints; }
  get lifePoints(): number { return this._lifePoints; }
  get strength(): number { return this._strength; }
  get defense(): number { return this._defense; }
  get dexterity(): number { return this._dexterity; }
  get energy(): Energy { return { ...this._energy }; } // uses a shallow object to allow only reading and not modifing

  // increments random number from 1 to 10 to maxLifePoints as long as the result is not higher than the race maxLifePoints
  public getMaxLifePointsLevelUp(): number {
    let maxLevelUp = this._maxLifePoints + getRandomInt(1, 10);
    if (maxLevelUp > this._race.maxLifePoints) {
      maxLevelUp = this._race.maxLifePoints;
    }
    return maxLevelUp;
  }

  // the damage is the attackPoints minus the defense of the character, when the damage is received, if it's higher then 0, it's taken from the character lifePoints. If the lifepoints is lower or equal to 0, lifePoints id setted as -1
  public receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;
    if (damage > 0) {
      this._lifePoints -= damage;
    } else {
      this._lifePoints -= 1;
    }

    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }

    return this._lifePoints;
  }

  // attack implies the damage in the enemy with the character strength
  public attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }

  // increases the attributes of the character
  public levelUp(): void {
    this._maxLifePoints = this.getMaxLifePointsLevelUp();
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;
    this._lifePoints = this._maxLifePoints;
  }

  // private special(): void {

  // }
}
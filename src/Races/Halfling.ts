import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints: number;
  private static _createdInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;

    Halfling.countInstances();
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  private static countInstances(): void {
    Halfling._createdInstances += 1;
  }

  static createdRacesInstances(): number {
    return Halfling._createdInstances;
  }
}
import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints: number;
  private static _createdInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;

    Orc.countInstances();
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  private static countInstances(): void {
    Orc._createdInstances += 1;
  }

  static createdRacesInstances(): number {
    return Orc._createdInstances;
  }
}
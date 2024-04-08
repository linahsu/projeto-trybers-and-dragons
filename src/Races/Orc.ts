import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints: number;
  private static _createdInstances = 0; // number of instances created

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;

    Orc.countInstances(); // increment 1 to the attribute _createdInstances when the instance is created
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
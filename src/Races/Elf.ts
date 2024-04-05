import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints: number;
  private static _createdInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;

    Elf.countInstances();
  }
  
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  private static countInstances(): void {
    Elf._createdInstances += 1;
  }

  static createdRacesInstances(): number {
    return Elf._createdInstances;
  }
}
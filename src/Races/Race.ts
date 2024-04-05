export default abstract class Race {
  private _name: string;
  private _dexterity: number;

  constructor(name: string, dexterity: number) {
    this._name = name;
    this._dexterity = dexterity;
  }

  get name() {
    return this._name;
  }

  get dexterity() {
    return this._dexterity;
  }

  static createdRacesInstances(): number {
    // if (this._createdInstances > maxInstances) {
    throw new Error('Not implemented');
    // }
    // this._createdInstances += maxInstances;
    // return this._createdInstances;
  }

  abstract get maxLifePoints(): number;
}
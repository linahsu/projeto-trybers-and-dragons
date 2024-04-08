import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private _energyType: EnergyType;
  private static _createdInstances = 0; // number of instances created

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';

    Warrior.countArquetypeInstances(); // increment 1 to the attribute _createdInstances when the instance is created
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Warrior._createdInstances;
  }

  private static countArquetypeInstances(): void {
    Warrior._createdInstances += 1;
  }
}
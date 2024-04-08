import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private _energyType: EnergyType;
  private static _createdInstances = 0; // number of instances created

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';

    Necromancer.countArquetypeInstances(); // increment 1 to the attribute _createdInstances when the instance is created
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Necromancer._createdInstances;
  }

  private static countArquetypeInstances(): void {
    Necromancer._createdInstances += 1;
  }
}
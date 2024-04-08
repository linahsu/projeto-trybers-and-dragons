import { EnergyType } from '../Energy';

// Create abstract class Archetype to be a base to the different archetype types of the game
export default abstract class Archetype {
  private _name: string;
  private _special: number;
  private _cost: number;

  constructor(name: string) {
    this._name = name;
    this._special = 0;
    this._cost = 0;
  }

  // Method get allow attributes to be accessible outside of the class
  get name(): string {
    return this._name;
  }

  get special(): number {
    return this._special;
  }

  get cost(): number {
    return this._cost;
  }

  // Function to get the amount of instances created
  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }

  // Fuction to get the evergyType attribute specified in subclasses
  abstract get energyType(): EnergyType;
}
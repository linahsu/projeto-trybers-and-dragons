import Energy from '../Energy';
import SimpleFighter from './SimpleFighter';

// Inherits all the attributes and methods from SimpleFighter and add new attributes and methods as Fighter
export default interface Fighter extends SimpleFighter {
  defense: number;
  energy?: Energy;

  special?(enemy: Fighter): void;
  levelUp(): void;
}
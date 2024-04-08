import Fighter from '../Fighter';

// Create abstract class Battle to be a base to the different battle types of the game
abstract class Battle {
  constructor(private _player: Fighter) { }

  get player() {
    return this._player;
  }

  // Should return 1 if player wins, -1 otherwise
  fight(): number {
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}

export default Battle;

import Character from '../Character';

abstract class Battle {
  constructor(private _player: Character) { }

  get player() {
    return this._player;
  }

  // Should return 1 if player wins, -1 otherwise
  fight(): number {
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}

export default Battle;

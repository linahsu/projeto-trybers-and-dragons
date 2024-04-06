import Character from '../Character';
import Battle from './Battle';

export default class PVP extends Battle {
  private _player2: Character;

  constructor(
    player1: Character,
    player2: Character,
  ) {
    super(player1);
    this._player2 = player2;
  }

  get player1() {
    return super.player;
  }

  get player2() {
    return this._player2;
  }

  static playerAttacks(
    firstPlayer: Character,
    secondPlayer: Character,
  ): void {
    if (firstPlayer.lifePoints !== -1) {
      firstPlayer.attack(secondPlayer);
      secondPlayer.receiveDamage(firstPlayer.strength);
      console.log('Player 2: ', secondPlayer.lifePoints);
    }
    if (secondPlayer.lifePoints !== -1) {
      secondPlayer.attack(firstPlayer);
      firstPlayer.receiveDamage(secondPlayer.strength);
      console.log('Player 1: ', firstPlayer.lifePoints);
    }
  }

  fight(): number {
    const player1 = super.player;
    const player2 = this._player2;

    while (player1.lifePoints > 0 && player2.lifePoints > 0) {
      PVP.playerAttacks(player1, player2);
    }

    return player1.lifePoints === -1 ? -1 : 1;
  }
}

const player1 = new Character('Player 1');
const player2 = new Character('Player 2');
player1.levelUp();
const pvpBattle = new PVP(player1, player2);
console.log(pvpBattle.fight());

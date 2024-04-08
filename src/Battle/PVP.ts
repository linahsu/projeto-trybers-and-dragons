// import Character from '../Character';
import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private _player2: Fighter; // create second player

  constructor(
    player1: Fighter,
    player2: Fighter,
  ) {
    super(player1); // first player is created through the super class
    this._player2 = player2;
  }

  get player1() {
    return super.player;
  }

  get player2() {
    return this._player2;
  }

  // Function that implements the attack and received damage in a battle if both, players lifePoints are different of -1 (as long both of them are alive)
  static playerAttacks(
    firstPlayer: Fighter,
    secondPlayer: Fighter,
  ): void {
    if (firstPlayer.lifePoints !== -1) {
      firstPlayer.attack(secondPlayer);
      secondPlayer.receiveDamage(firstPlayer.strength);
    }
    if (secondPlayer.lifePoints !== -1) {
      secondPlayer.attack(firstPlayer);
      firstPlayer.receiveDamage(secondPlayer.strength);
    }
  }

  // The battle will go on until one of the players is defeated, returning 1 if the first player is the winner and -1 if the second player is the winner
  fight(): number {
    const player1 = super.player;
    const player2 = this._player2;

    while (player1.lifePoints > 0 && player2.lifePoints > 0) {
      PVP.playerAttacks(player1, player2);
    }

    return player1.lifePoints === -1 ? -1 : 1;
  }
}

// const player1 = new Character('Player 1');
// const player2 = new Character('Player 2');
// player1.levelUp();
// const pvpBattle = new PVP(player1, player2);
// console.log(pvpBattle.fight());

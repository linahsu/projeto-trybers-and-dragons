// import Character from '../Character';
import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    player: Fighter,
    private _enviroment: SimpleFighter[] = [new Monster()],
  ) {
    super(player);
  }

  get player() {
    return super.player;
  }

  get enviroment() {
    return this._enviroment;
  }

  static playerEnemyAttacks(
    player: Fighter,
    enemy: SimpleFighter,
  ): void {
    console.log('start player: ', player.lifePoints);
    
    if (player.lifePoints !== -1) {
      player.attack(enemy);
      enemy.receiveDamage(player.strength);
      console.log('enemy: ', enemy.lifePoints);
    }
    if (enemy.lifePoints !== -1) {
      enemy.attack(player);
      player.receiveDamage(enemy.strength);
      console.log('Player: ', player.lifePoints);
    }
  }

  static getWinner(
    player: Fighter,
    enemy: SimpleFighter,
  ) {
    while (player.lifePoints > 0 && enemy.lifePoints > 0) {
      PVE.playerEnemyAttacks(player, enemy);
    }
  }

  fight(): number {
    const player = super.player;
    const enviroment = this._enviroment;
    let winner = 0;

    for (let index = 0; index < enviroment.length; index += 1) {
      PVE.getWinner(player, enviroment[index]);
      if (player.lifePoints === -1) {
        winner = -1;
      } else {
        winner = 1;
      }
    }

    return winner;
  }
}

// const player1 = new Character('Player 1');
// const player2 = new Character('Player 2');
// const monster1 = new Monster();
// const monster2 = new Monster();
// player1.levelUp();
// player1.levelUp();
// player1.levelUp();
// player1.levelUp();
// player1.levelUp();
// player1.levelUp();
// player1.levelUp();
// const pveBattle = new PVE(player1, [player2]);
// console.log(pveBattle.fight());

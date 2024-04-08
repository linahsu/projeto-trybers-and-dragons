import Battle, { PVE, PVP } from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';

// Testando a classe Character
const player1 = new Character('Player 1');
const player2 = new Character('Player 2');
const player3 = new Character('Player 3');

player1.levelUp();
player1.levelUp();
player1.levelUp();
player1.levelUp();
player1.levelUp();
player1.levelUp();
player1.levelUp();
player1.levelUp();

// Testando a classe Monster
const monster1 = new Monster();
const monster2 = new Dragon();

// Testando a classe PVP
const pvp = new PVP(player2, player3);

// Testando a classe PVE
const pve = new PVE(player1, [monster1, monster2]);

// Simulando batalhas
function runBattles(battles: Battle[]) {
  battles.forEach((battle) => battle.fight());
}

export {
  player1,
  player2,
  player3,
  monster1,
  monster2,
  pvp,
  pve,
  runBattles,
};
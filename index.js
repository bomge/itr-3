const readline = require('readline-sync');

const ResultCalculatorClass = require('./classes/ResultCalculator')
const TableClass = require('./classes/Table')
const PlayerClass = require('./classes/Player')
const ComputerClass = require('./classes/Computer')

const HMAC = require('./classes/HMAC')
const Validator = require('./classes/Validtor')


const args = process.argv.slice(2);
const choices = args;
const numItems = choices.length;

Validator.validateChoices(choices)

const ResultCalculator = new ResultCalculatorClass(numItems)
const Table = new TableClass(choices, ResultCalculator)
const Player = new PlayerClass(choices, Table, readline)
const Computer = new ComputerClass(numItems, HMAC)


let playerScore = 0;
let computerScore = 0;

while (true) {
  const {choice, hmacHex, key} = Computer.choice()
  const player = Player.choice()
  
  const roundResult = ResultCalculator.calculate(player, choice);
  
  console.log(`\nYou selected: ${choices[player]}`);
  console.log(`The computer selected: ${choices[choice]}`);
  
  if (roundResult > 0) {
    console.log('You win this round!\n');
    playerScore++;
  } else if (roundResult < 0) {  
    console.log('You lose this round!\n');
    computerScore++;
  } else {
    console.log('This round was a draw!\n'); 
  }

  HMAC.check(choice, key, hmacHex)  


  console.log(`\nCurrent Score:`);
  console.log(`Player: ${playerScore}`); 
  console.log(`Computer: ${computerScore}\n`);
  


  process.exit()

}

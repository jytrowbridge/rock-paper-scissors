function getRndInteger(min, max) {
  // returns random integer in range [min,max). Note that range excludes max. 
  // Taken from W3 schools page
  return Math.floor(Math.random() * (max - min) ) + min;
}

function toTitleCase(s) {
  // returns string s converted to title case (e.g. "Test", "This is capita")
  return s[0].toUpperCase() + s.slice(1).toLowerCase();
}

function computerPlay () {
  // randomly selects 
  return playOptions[getRndInteger(0,playOptions.length)];
}

function isWin(throw1, throw2) {  
  // return true if throw1 wins, false otherwise
  return (throw1 == 'rock' && throw2 == 'scissors')
  || (throw1 == 'paper' && throw2 == 'rock')
  || (throw1 == 'scissors' && throw2 == 'paper')           
}

function getRoundResults(playerSelection, computerSelection) {
  // returns 'win', 'lose', 'tie', or 'invalid'
  playerSelection = playerSelection.toLowerCase()
  if (playOptions.indexOf(playerSelection) == -1) {
    return 'invalid';
  } 
  return isWin(playerSelection, computerSelection) ? 'win'
  : isWin(computerSelection, playerSelection) ? 'lose'
  : 'tie'
}

const getPlayerBox = () => {return document.querySelector('#player');};
const getComputerBox = () => {return computerBox = document.querySelector('#computer');};
const getResultBox = () => {return computerBox = document.querySelector('#result');};

function playRound(playerSelection, game) {
  // game is instance of Game class
  const computerSelection = computerPlay()
  const result = getRoundResults(playerSelection, computerSelection);

  const playerBox = getPlayerBox();
  const computerBox = getComputerBox();

  playerBox.textContent = playerSelection;
  computerBox.textContent = computerSelection;
  displayResult(result, game);
}

function displayResult(result, game) {
  // game is instance of Game class
  const resultBox = getResultBox();
  
  if (result == 'win') game.wins++
  if (result == 'lose') game.losses++

  const resultText = game.wins == game.winsNeeded ? 
                          `You Win The Game!\r\nFinal Score:\r\n` 
                        + `Wins: ${game.wins}\r\n`
                        + `Losses: ${game.losses}`
                   : game.losses == game.winsNeeded ?
                          `You Lose The Game!\r\nFinal Score:\r\n` 
                        + `Wins: ${game.wins}\r\n`
                        + `Losses: ${game.losses}`
                   :      `You ${toTitleCase(result)} The Round!\r\n` 
                        + `Wins: ${game.wins}\r\n`
                        + `Losses: ${game.losses}`

  resultBox.textContent = resultText;
}

let playOptions = ['rock', 'paper', 'scissors'];
let winsNeeded = 5;
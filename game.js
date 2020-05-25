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

function playRound(playerSelection) {
  const computerSelection = computerPlay()
  const result = getRoundResults(playerSelection, computerSelection);

  const playerBox = document.querySelector('#player');
  const computerBox = document.querySelector('#computer');

  playerBox.textContent = playerSelection;
  computerBox.textContent = computerSelection;
  displayResult(result);
}

let winsLosses = [0, 0]
function displayResult(result) {
  const resultBox = document.querySelector('#result');
  
  if (result == 'win') winsLosses[0]++
  if (result == 'lose') winsLosses[1]++

  const resultText = `You ${toTitleCase(result)}!\n` 
                   + `Wins: ${winsLosses[0]}\n`
                   + `Losses: ${winsLosses[1]}`

  resultBox.textContent = resultText;
}

let playOptions = ['rock', 'paper', 'scissors'];
let winsNeeded = 5;
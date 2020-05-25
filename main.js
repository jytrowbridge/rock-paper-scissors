const game = new Game(3);
console.log(game);

const callPlay = function (e) {
  playRound(e.target.id, game);
}

const restart = () => {
  const playerBox = getPlayerBox();
  const computerBox = getComputerBox();
  const resultBox = getResultBox();

  playerBox.textContent = '';
  computerBox.textContent = '';
  
  game.wins = 0;
  game.losses = 0;
  resultBox.textContent = 'Please select an option below';
}

const playBtns = document.querySelectorAll('.play')
playBtns.forEach( btn => {
  btn.addEventListener('click', callPlay)
});

const restartBtn = document.querySelector('#restart');
restartBtn.addEventListener('click', restart);
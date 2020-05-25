const callPlay = function (e) {
  playRound(e.target.id);
}

const playBtns = document.querySelectorAll('.play')
playBtns.forEach( btn => {
  btn.addEventListener('click', callPlay)
});


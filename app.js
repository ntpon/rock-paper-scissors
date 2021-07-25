const btnRock = document.getElementById('btn-rock');
const btnScissors = document.getElementById('btn-scissors');
const btnPaper = document.getElementById('btn-paper');

const txtPlayerPoint = document.getElementById('txt-player-point');
const txtComputerPoint = document.getElementById('txt-computer-point');
const txtRound = document.getElementById('txt-round');
const noItem = document.getElementById('no-item');
const playerSectopn = document.getElementById('player-section');

const PLAYER_WIN = 'PLAYER WIN !';
const COMPUTER_WIN = 'COMPUTER WIN !';
const PLAYER_COMPUTER_DRAW = 'DRAW !';

let round = 0;
let playerPoint = 0;
let computerPoint = 0;
const items = ['rock', 'scissors', 'paper'];

function gemeLoop(item) {
  let playerChoosed, computerChoosed;
  playerChoosed = item;
  computerChoosed = items[Number.parseInt(Math.random() * 3)];
  let whowin;
  noItem.innerHTML = `<img src="./images/${computerChoosed}.svg">`;
  btnRock.style.display = 'none';
  btnPaper.style.display = 'none';
  btnScissors.style.display = 'none';
  const img = document.createElement('img');
  img.src = `./images/${playerChoosed}.svg`;
  playerSectopn.append(img);

  if (playerChoosed === computerChoosed) {
  } else if (
    (playerChoosed === 'rock' && computerChoosed === 'scissors') ||
    (playerChoosed === 'paper' && computerChoosed == 'rock') ||
    (playerChoosed === 'scissors' && computerChoosed == 'paper')
  ) {
    playerPoint++;
    txtPlayerPoint.textContent = playerPoint;
    whowin = txtPlayerPoint.parentElement.parentElement;
    whowin.classList.add('when-win');
  } else {
    computerPoint++;
    txtComputerPoint.textContent = computerPoint;
    whowin = txtComputerPoint.parentElement.parentElement;
    whowin.classList.add('when-win');
  }
  txtRound.textContent = `Round ${++round}`;

  if (round === 5) {
    const gemeSection = document.getElementById('game-section');
    const scoreSection = document.getElementById('score-section');
    setTimeout(() => {
      gemeSection.classList.add('fadeout');
      scoreSection.classList.add('fadeout');
    }, 2000);
    setTimeout(() => {
      gemeSection.classList.add('fadein');
      gemeSection.classList.add('flex-column');
      const btnReload = document.createElement('button');
      btnReload.className = 'btn btn-reload';
      btnReload.textContent = 'PLAY AGAIN';
      btnReload.addEventListener('click', () => {
        window.location.reload();
      });
      let whoWin;
      if (playerPoint === computerPoint) {
        whoWin = `<h3 class="finish-game">Draw....</h3>`;
      } else if (playerPoint > computerPoint) {
        whoWin = `<h3 class="finish-game">Player Won....</h3>`;
      } else {
        whoWin = `<h3 class="finish-game"> Computer Won....</h3>`;
      }
      scoreSection.style.display = 'none';
      gemeSection.innerHTML = whoWin;
      gemeSection.append(btnReload);
    }, 3000);
  } else {
    setTimeout(() => {
      img.remove();
      btnRock.style.display = '';
      btnPaper.style.display = '';
      btnScissors.style.display = '';
      noItem.textContent = '?';
      whowin.classList.remove('when-win');
    }, 2000);
  }
}

btnRock.addEventListener('click', () => {
  gemeLoop('rock');
});

btnScissors.addEventListener('click', () => {
  gemeLoop('scissors');
});

btnPaper.addEventListener('click', () => {
  gemeLoop('paper');
});

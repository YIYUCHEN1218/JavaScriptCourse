'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Init
let playing, scores, currentScore, activePlayer;
gameInit();

// Event
btnRoll.addEventListener('click', rollDice);
btnHold.addEventListener('click', rollHold);
btnNew.addEventListener('click', gameInit);

// 投骰子
function rollDice() {
  if (!playing) return;
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  if (dice !== 1) {
    currentScore += dice;
    getCurrentScoreEl(activePlayer).textContent = currentScore;
  } else {
    rollFail();
  }
}

// 骰失敗
function rollFail() {
  currentScore = 0;
  switchPlayer();
}

// 初始化遊戲
function gameInit() {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  diceEl.classList.add('hidden');

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
}

function rollHold() {
  if (!playing) return;
  scores[activePlayer] += currentScore;
  currentScore = 0;
  score0El.textContent = scores[0];
  score1El.textContent = scores[1];

  if (scores[activePlayer] >= 100) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
    diceEl.classList.add('hidden');
    playing = false;
  } else {
    switchPlayer();
  }
}

function switchPlayer() {
  getCurrentScoreEl(activePlayer).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}

function getCurrentScoreEl(player) {
  if (player == 0) return current0El;
  else return current1El;
}

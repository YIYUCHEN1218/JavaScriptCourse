'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
document.querySelector('.score').textContent = score;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const onClick = function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('No Number');
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    onSuccess();
  } else {
    let msg = guess > secretNumber ? 'Too high!' : 'Too low!';
    displayMessage(msg);
    onFail();
  }
};

const onFail = function () {
  score--;
  if (score > 0) {
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.score').textContent = score;
    displayMessage('You lost the game!');
  }
};

const onSuccess = function () {
  document.querySelector('.number').textContent = secretNumber;
  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('.number').style.width = '30rem';

  if (score > highscore) {
    highscore = score;
    document.querySelector('.highscore').textContent = highscore;
  }
};

const onRestart = function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  displayMessage('Start guessing');
};

document.querySelector('.check').addEventListener('click', onClick);
document.querySelector('.again').addEventListener('click', onRestart);

'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

const btnCloseModalAction = function () {
  overlay.classList.add('hidden');
  modal.classList.add('hidden');
};

const btnsOpenModalAction = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', btnsOpenModalAction);
  console.log(btnsOpenModal[i].textContent);
}

btnCloseModal.addEventListener('click', btnCloseModalAction);
overlay.addEventListener('click', btnCloseModalAction);

document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape') {
    console.log('Esc was pressed');
    if (!modal.classList.contains('hidden')) {
      btnCloseModalAction();
    }
  }
});

'use strict' 

const modalWindow = document.querySelector('.modal');
const buttonModal = document.querySelectorAll('.modal__button');
const modalClose = document.querySelector('.modal__close');
const body = document.querySelector('body');
const lockPaddingValue = window.innerWidth - body.offsetWidth + 'px';



console.log(lockPaddingValue);

buttonModal.forEach((item) => {
  item.addEventListener('click', () => {
    modalWindow.style.display = 'flex';
    body.classList.add('noscroll');
    body.style.paddingRight = lockPaddingValue;
  });
});

modalWindow.addEventListener('click', (e) => {
  const isModal = e.target.closest('.modal__inner');

  if (!isModal) {
    modalWindow.style.display = 'none';
    body.classList.remove('noscroll');
    body.style.paddingRight = '0px';
  }
});

modalClose.addEventListener('click', () => {
  modalWindow.style.display = 'none';
  body.classList.remove('noscroll');
  body.style.paddingRight = '0px';
})
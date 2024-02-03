'use strict';

const togglePopupBtnEl = document.querySelector('#toggleMenuBtnEl');
const popupEl = document.querySelector('.header__popup');
const cardEls = document.querySelectorAll('.box__card');
const overlayEl = document.querySelector('.overlay');
const overlayPopupEl = overlayEl.querySelector('.popup');
const closeOverlayPopupBtnEl = overlayEl.querySelector('.popup__close-btn');

function closePopup() {
  window.removeEventListener('click', closePopupByClick);
  popupEl.classList.add('fade');
  setTimeout(() => {
    popupEl.classList.remove('active');
    popupEl.classList.remove('fade');
  }, 140);
}

function openPopup() {
  popupEl.classList.add('active');
}

function closePopupByClick(e) {
  if (
    !e.composedPath().includes(popupEl) &&
    !e.composedPath().includes(togglePopupBtnEl)
  ) {
    closePopup();
  }
}

function closeOverlayByClick(e) {
  if (e.target === overlayEl) {
    overlayEl.classList.remove('active');
    overlayPopupEl.classList.remove('active');
  }
}

togglePopupBtnEl.addEventListener('click', () => {
  if (popupEl.classList.contains('active')) {
    window.removeEventListener('click', closePopupByClick);

    closePopup();
  } else {
    window.addEventListener('click', closePopupByClick);
    openPopup();
  }
});

closeOverlayPopupBtnEl.addEventListener('click', () => {
  overlayEl.classList.remove('active');
  overlayPopupEl.classList.remove('active');
});

cardEls.forEach((c) => {
  c.addEventListener('click', () => {
    if (overlayEl.classList.contains('active')) {
      window.removeEventListener('click', closeOverlayByClick);
      overlayPopupEl.classList.remove('active');
      overlayEl.classList.remove('active');
    } else {
      window.addEventListener('click', closeOverlayByClick);
      overlayPopupEl.classList.add('active');
      overlayEl.classList.add('active');
    }
  });
});

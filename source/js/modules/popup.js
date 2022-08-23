import {
  focusableElements,
  isEscapeKey
} from './util.js';

const popup = document.querySelector('.popup');
const popupTrigger = document.querySelector('.header__button');
const popupCloseButton = document.querySelector('.popup__close-button');
const popupContainer = document.querySelector('.popup__box');
const popupNameField = popup.querySelector('#popup-name');
const bodySelector = document.querySelector('.page__body');

popupTrigger.setAttribute('type', 'button');

const escKeyCb = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closePopup();
  }
};

const mouseupCb = (evt) => {
  if (!popupContainer.contains(evt.target)) {
    closePopup();
  }
};

const focusControl = () => {
  const nodes = document.querySelectorAll(focusableElements);
  nodes.forEach((el) => {
    if (popup.classList.contains('popup--opened') && !el.closest('.popup')) {
      el.tabIndex = -1;
    } else {
      el.tabIndex = 0;
    }
  });
};

function openPopup() {
  popup.classList.toggle('popup--opened');
  popupNameField.focus();
  bodySelector.classList.toggle('page__body--modal-open');
  document.addEventListener('keydown', escKeyCb);
  document.addEventListener('mouseup', mouseupCb);
  focusControl();
}

function closePopup() {
  popup.classList.remove('popup--opened');
  popupTrigger.focus();
  bodySelector.classList.remove('page__body--modal-open');
  document.removeEventListener('keydown', escKeyCb);
  document.removeEventListener('mouseup', mouseupCb);
  focusControl();
}

popupTrigger.addEventListener('click', () => {
  openPopup();
});

popupCloseButton.addEventListener('click', () => {
  closePopup();
});

const popup = document.querySelector('.popup');
const popupTrigger = document.querySelector('.header__button');
const popupCloseButton = document.querySelector('.popup__close-button');
const popupContainer = document.querySelector('.popup__box');
const popupNameField = popup.querySelector('#popup-name');
const bodySelector = document.querySelector('.page__body');

const isEscapeKey = (evt) => evt.key === 'Escape';

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

function openPopup() {
  popup.classList.toggle('popup--opened');
  popupNameField.focus();
  bodySelector.classList.toggle('page__body--modal-open');
  document.addEventListener('keydown', escKeyCb);
  document.addEventListener('mouseup', mouseupCb);
}

function closePopup() {
  popup.classList.remove('popup--opened');
  bodySelector.classList.remove('page__body--modal-open');
  document.removeEventListener('keydown', escKeyCb);
  document.removeEventListener('mouseup', mouseupCb);
}

popupTrigger.addEventListener('click', () => {
  openPopup();
});

popupCloseButton.addEventListener('click', () => {
  closePopup();
});

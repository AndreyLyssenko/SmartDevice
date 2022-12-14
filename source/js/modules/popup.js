import {
  focusableElements,
  isEscapeKey
} from './util.js';

const popup = document.querySelector('.popup');
const popupTrigger = document.querySelector('.header__button');
const bodySelector = document.querySelector('.page__body');
const popupCloseButton = popup.querySelector('.popup__close-button');
const popupContainer = popup.querySelector('.popup__content-wrapper');
const popupNameField = popup.querySelector('[name = "name"]');

if (popupTrigger) {
  popupTrigger.setAttribute('type', 'button');
}

const escKeyCb = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closePopup();
  }
};

const mouseupCb = (evt) => {
  if (popupContainer && !popupContainer.contains(evt.target)) {
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

const getScrollBarWidth = () => {
  const item = document.createElement('div');

  item.style.position = 'absolute';
  item.style.top = '-9999px';
  item.style.width = '50px';
  item.style.height = '50px';
  item.style.overflow = 'scroll';
  item.style.visibility = 'hidden';

  bodySelector.append(item);
  const scrollBarWidth = item.offsetWidth - item.clientWidth;
  bodySelector.removeChild(item);

  return scrollBarWidth;
};


function openPopup() {
  bodySelector.style.paddingRight = `${getScrollBarWidth()}px`;
  bodySelector.querySelector('.header').style.width = `${bodySelector.offsetWidth}px`;
  bodySelector.style.overflow = 'hidden';
  popup.classList.toggle('popup--opened');
  popupNameField.focus();
  document.addEventListener('keydown', escKeyCb);
  document.addEventListener('mouseup', mouseupCb);
  focusControl();
}

function closePopup() {
  popup.classList.remove('popup--opened');
  popupTrigger.focus();
  bodySelector.querySelector('.header').style.width = '';
  bodySelector.style.paddingRight = '';
  bodySelector.style.overflow = 'visible';
  document.removeEventListener('keydown', escKeyCb);
  document.removeEventListener('mouseup', mouseupCb);
  focusControl();
}

if (popupTrigger && popup && popupContainer) {
  popupTrigger.addEventListener('click', () => {
    openPopup();
  });

  popupCloseButton.addEventListener('click', () => {
    closePopup();
  });
}

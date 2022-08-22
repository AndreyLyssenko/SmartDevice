const form = [
  document.querySelector('.feedback__form').querySelector('form'),
  document.querySelector('.popup__form').querySelector('form')
];

form.forEach((el) => {
  el.addEventListener('submit', (evt) => {
    evt.preventDefault();
    localStorage.clear();
    localStorage.setItem('name', el.querySelector('.form-name').value);
    localStorage.setItem('phone', el.querySelector('.form-tel').value);
    localStorage.setItem('question', el.querySelector('.form-question').value);
    evt.target.submit();
  });
});

const form = [
  document.querySelector('.feedback__form').querySelector('form'),
  document.querySelector('.popup__form').querySelector('form')
];
const re = /^.{17}$/;

form.forEach((el) => {
  el.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formErrorMessage = el.querySelector('.form-error-message');
    const inputPhone = el.querySelector('[name="tel"]');

    inputPhone.addEventListener('focus', () => {
      formErrorMessage.classList.remove('form-error-message--show');
      inputPhone.style = 'outline: none';
    });

    if (!re.test(inputPhone.value)) {
      inputPhone.style = 'outline: 1px solid #ff0000';
      formErrorMessage.classList.toggle('form-error-message--show');
    } else {
      localStorage.clear();
      localStorage.setItem('name', el.querySelector('[name="name"]').value);
      localStorage.setItem('phone', inputPhone.value);
      localStorage.setItem('question', el.querySelector('[name="question"]').value);
      evt.target.submit();
    }
  });
});

const accordionItemLists = document.querySelectorAll('.footer__list');
const accordionWrapper = document.querySelectorAll('.footer__list-wrapper');

const accordionTitles = [];
const accordionButtons = [];

accordionItemLists.forEach((list) => {
  list.classList.remove('footer__list--no-js');
});

accordionWrapper.forEach((wrapper) => {
  wrapper.classList.remove('footer__list-wrapper--no-js');
});

accordionWrapper.forEach((trigger) => {
  accordionTitles.push(trigger.querySelector('h3'));
});

accordionWrapper.forEach((trigger) => {
  accordionButtons.push(trigger.querySelector('button'));
});

const openAccordion = (trigger) => {
  trigger.addEventListener('click', (evt) => {
    const currentAccordionWrapper = evt.target.parentNode;
    const currentAccordionActive = currentAccordionWrapper.querySelector('.footer__list');
    const currentAccordionButton = currentAccordionWrapper.querySelector('button');

    if (currentAccordionActive.classList.contains('footer__list--opened')) {
      currentAccordionActive.classList.remove('footer__list--opened');
      currentAccordionWrapper.classList.remove('footer__list-wrapper--opened');
      currentAccordionButton.textContent = 'Раскрыть меню';
    } else {
      accordionItemLists.forEach((list) => {
        list.classList.remove('footer__list--opened');
        list.parentNode.classList.remove('footer__list-wrapper--opened');
      });

      accordionButtons.forEach((btn) => {
        btn.textContent = 'Раскрыть меню';
      });

      currentAccordionActive.classList.toggle('footer__list--opened');
      currentAccordionWrapper.classList.toggle('footer__list-wrapper--opened');
      currentAccordionButton.textContent = 'Закрыть меню';
    }
  });
};

accordionTitles.forEach((title) => {
  openAccordion(title);
});

accordionButtons.forEach((btn) => {
  openAccordion(btn);
});

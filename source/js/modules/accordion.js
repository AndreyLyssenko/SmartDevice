const accordionItemLists = document.querySelectorAll('.footer__list');
const accordionButtons = document.querySelectorAll('.footer__accordion-button');
const accordionWrapper = document.querySelectorAll('.footer__list-wrapper');

let svgLink = 'img/sprite.svg#accordion-closed-ico';
let accordionTitles = [];

accordionItemLists.forEach((list) => {
  list.classList.remove('footer__list--no-js');
});

accordionButtons.forEach((btn) => {
  btn.classList.remove('footer__accordion-button--no-js');
});

accordionWrapper.forEach((trigger) => {
  accordionTitles.push(trigger.querySelector('h3'));
});

const openAccordion = (trigger) => {
  trigger.addEventListener('click', (evt) => {
    const currentAccordionButton = evt.target.nextElementSibling;
    const currentAccordionActive = currentAccordionButton.nextElementSibling;

    if (currentAccordionActive.classList.contains('footer__list--opened')) {
      currentAccordionActive.classList.remove('footer__list--opened');

      accordionButtons.forEach((btn) => {
        svgLink = 'img/sprite.svg#accordion-closed-ico';
        btn.querySelector('use').setAttribute('xlink:href', svgLink);
      });

    } else {
      accordionItemLists.forEach((list) => {
        list.classList.remove('footer__list--opened');
        svgLink = 'img/sprite.svg#accordion-closed-ico';
        list.previousElementSibling.querySelector('use').setAttribute('xlink:href', svgLink);
      });

      currentAccordionActive.classList.toggle('footer__list--opened');
      svgLink = 'img/sprite.svg#accordion-opened-ico';
      currentAccordionButton.querySelector('use').setAttribute('xlink:href', svgLink);
    }
  });
};

accordionTitles.forEach((title) => {
  openAccordion(title);
});

accordionButtons.forEach((button) => {
  openAccordion(button);
});

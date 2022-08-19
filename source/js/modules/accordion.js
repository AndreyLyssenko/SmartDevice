const accordionItemLists = document.querySelectorAll('.footer__list');
const accordionButtons = document.querySelectorAll('.footer__accordion-button');
let svgLink = 'img/sprite.svg#accordion-closed-ico';


accordionButtons.forEach((btn) => {
  btn.classList.remove('footer__accordion-button--no-js');
  accordionItemLists.forEach((elem) => {
    elem.classList.remove('footer__list--no-js');
  });
  btn.addEventListener('click', () => {
    const currentAccordionActive = btn.nextElementSibling;

    if (currentAccordionActive.classList.contains('footer__list--opened')) {
      currentAccordionActive.classList.remove('footer__list--opened');

      svgLink = 'img/sprite.svg#accordion-closed-ico';
      btn.querySelector('use').setAttribute('xlink:href', svgLink);
    } else {
      accordionItemLists.forEach((elem) => {
        elem.classList.remove('footer__list--opened');

        svgLink = 'img/sprite.svg#accordion-closed-ico';
        elem.previousElementSibling.querySelector('use').setAttribute('xlink:href', svgLink);
      });
      currentAccordionActive.classList.toggle('footer__list--opened');

      svgLink = 'img/sprite.svg#accordion-opened-ico';
      btn.querySelector('use').setAttribute('xlink:href', svgLink);
    }
  });
});

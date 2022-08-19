const aboutButton = document.querySelector('.about__button');
const aboutMoreText = document.querySelector('.about__more');
const aboutContainer = document.querySelector('.about__text-wrapper');

aboutButton.addEventListener('click', (evt) => {
  aboutMoreText.classList.toggle('about__more--show');
  aboutContainer.querySelector('span').setAttribute('style', 'display: inline;');
  evt.target.textContent = 'Свернуть';

  if (!aboutMoreText.classList.contains('about__more--show')) {
    if (window.matchMedia('(max-width: 767px)').matches) {
      aboutContainer.querySelector('span').setAttribute('style', 'display: none;');
    }
    evt.target.textContent = 'Подробнее';
  }
});

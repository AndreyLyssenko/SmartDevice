const aboutButton = document.querySelector('.about__button');
const aboutMoreText = document.querySelector('.about__more');
const aboutContainer = document.querySelector('.about__text-wrapper');

if (aboutContainer) {
  aboutButton.classList.remove('about__button--no-js');
  aboutContainer.querySelector('.about__more-mobile').classList.remove('about__more-mobile--no-js');
  aboutMoreText.classList.remove('about__more--no-js');
}

if (aboutButton) {
  aboutButton.addEventListener('click', (evt) => {
    aboutMoreText.classList.toggle('about__more--show');
    aboutContainer.querySelector('.about__more-mobile').classList.toggle('about__more-mobile--show');
    evt.target.textContent = 'Свернуть';

    if (!aboutMoreText.classList.contains('about__more--show')) {
      evt.target.textContent = 'Подробнее';
    }
  });
}

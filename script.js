'use strict'

document.addEventListener('click', docEvent);

function docEvent(event) {
  const targetElement = event.target;

  if (targetElement.closest('[data-goto]')) {

    const goTo = targetElement.closest('[data-goto]').dataset.goto;
    const goToElement = document.querySelector(goTo);
    const headerHeight = document.querySelector('.header').offsetHeight;

    if (goToElement) {
      window.scrollTo({
        top: goToElement.offsetTop - (headerHeight + 15),
        behavior: 'smooth'
      });
    }
    event.preventDefault();
  }
}
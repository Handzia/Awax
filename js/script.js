'use strict'

// MOBILE MENU


function hideMenu() {
    document.querySelector('.menu').classList.toggle('hidden');
}
const hamburgerButton = document.querySelector('.hamburger');
hamburgerButton.addEventListener('click', hideMenu);


// CAROUSEL

const flkty1 = new Flickity( '.jumbotron-carousel', {
  wrapAround: true,
  autoPlay: true,
  pauseAutoPlayOnHover: false
});

const flkty2 = new Flickity( '.clients-carousel', {
  wrapAround: true,
  autoPlay: true
});

function setCarouselHeight() {
    let height = document.querySelector('.jumbotron-content').offsetHeight + 50;
    document.querySelector('.flickity-viewport').style.height = height + 'px';
    let slides = document.querySelectorAll('.jumbotron-carousel-cell');
    for ( let i = 0; i < slides.length; i++) {
       slides[i].style.height = height + 'px';
       flkty1.cells[i].size.height = height;
    }
}

setCarouselHeight();

window.addEventListener("resize", setCarouselHeight);

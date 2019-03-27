'use strict'

// MOBILE MENU


function hideMenu() {
    document.querySelector('.menu').classList.toggle('hidden');
}
var hamburgerButton = document.querySelector('.hamburger');
hamburgerButton.addEventListener('click', hideMenu);


// CAROUSEL

var flkty = new Flickity( '.clients-carousel', {
  wrapAround: true,
  autoPlay: true
});


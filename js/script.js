'use strict'

// MOBILE MENU


function hideMenu() {
    document.querySelector('.menu').classList.toggle('hidden');
}
var hamburgerButton = document.querySelector('.hamburger');
hamburgerButton.addEventListener('click', hideMenu);


// CAROUSEL

var flkty1 = new Flickity( '.jumbotron-carousel', {
  wrapAround: true,
  autoPlay: true,
  pauseAutoPlayOnHover: false
});

var flkty2 = new Flickity( '.clients-carousel', {
  wrapAround: true,
  autoPlay: true
});

function setCarouselHeight() {
    var height = document.querySelector('.jumbotron-content').offsetHeight + 50;
    document.querySelector('.jumbotron-carousel').style.height = height + 'px';
    var slides = document.querySelectorAll('.jumbotron-carousel-cell');
    for ( var i=0; i<slides.length; i++) {
       slides[i].style.height = height + 'px';
       flkty1.cells[i].size.height = height;
    }

    console.log(flkty1.cells[1].size.height);
    console.log(document.querySelector('.jumbotron-content').offsetHeight);
    console.log(document.querySelector('.jumbotron-carousel-cell').offsetHeight);
}

setCarouselHeight();

window.addEventListener("resize", setCarouselHeight);

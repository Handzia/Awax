'use strict'

// MOBILE MENU

const hamburgerButton = document.querySelector('.hamburger');
const closeButton = document.querySelector('.close-icon');

function hideMenu() {
  document.querySelector('.menu').classList.toggle('hidden');
  closeButton.classList.toggle('visible');
  hamburgerButton.classList.toggle('invisible');
}

hamburgerButton.addEventListener('click', hideMenu);
closeButton.addEventListener('click', hideMenu);


// ADD BORDER-BOTTOM FOR MENU ON SCROLL

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector("nav").style.borderBottomColor = "#b88b58";
  } else {
    document.querySelector("nav").style.borderBottomColor = "transparent";
  }
}


// CAROUSELS

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


// MODALS

function showModal(modal) {
  document.querySelector('.overlay').classList.add('show');
  document.getElementById(modal).classList.add('show');
};

function hideModal() {
  document.querySelector('.overlay').classList.remove('show');
  const modals = document.querySelectorAll('.modal');
  modals.forEach(function(modal) {modal.classList.remove('show')});

};

const telephoneButton = document.querySelector('#telephone-button');
const callBackButton = document.querySelector('#call-back-button');
const subscribeButton = document.querySelector('#subscribe-button');

telephoneButton.addEventListener('click', function(e) {
  showModal('call-modal');
});
subscribeButton.addEventListener('click', function(e) {
  e.preventDefault();
  showModal('thank-you-modal');
});


callBackButton.addEventListener('click', hideModal);

document.querySelector('.overlay').addEventListener('click', function(e) {
  if(e.target === this) {
    hideModal();
  }
});

document.addEventListener('keyup', function(e) {
  if(e.keyCode === 27) {
    hideModal();
  }
});


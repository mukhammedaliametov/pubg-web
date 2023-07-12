'use strict'

const hamburgerEl = document.querySelector('.hamburger')
const navbarEl = document.querySelector('.navigation');

hamburgerEl.addEventListener('click', () => {
  navbarEl.classList.toggle('active');
});

const closeNav = () => {
  navbarEl.classList.remove('active');
}

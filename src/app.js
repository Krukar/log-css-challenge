/* ============
index.js
Entry point for our app
============ */

/* ============
Stylesheets
============ */
import 'SCSS/app.scss';

// Toggle menu
const button = document.querySelector('.js-menu-toggle');
const navigation = document.querySelector('.navigation');

button.addEventListener('click', () => {
  navigation.classList.toggle('navigation--active');
  button.setAttribute('aria-expanded', button.getAttribute('aria-expanded') === 'false');
});

console.log('js init');

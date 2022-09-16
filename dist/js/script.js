'use strict';

const humburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const close = document.querySelector('.menu__close');

humburger.addEventListener('click', function() {
    menu.classList.add('active');
});

close.addEventListener('click', function() {
    menu.classList.remove('active');
});
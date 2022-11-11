'use strict';

const humburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closedd = document.querySelector('.menu__close');
const menuLinks = document.querySelectorAll('.menu__link');

humburger.addEventListener('click', function() {
    menu.classList.add('active');
});

closedd.addEventListener('click', function() {
    menu.classList.remove('active');
});


menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});



const counters = document.querySelectorAll('.skills__ratings-counter');
const lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

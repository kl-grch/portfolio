'use strict';

const humburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closed = document.querySelector('.menu__close');

humburger.addEventListener('click', function() {
    menu.classList.add('active');
});

closed.addEventListener('click', function() {
    menu.classList.remove('active');
});


const counters = document.querySelectorAll('.skills__ratings-counter');
const lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

"use strict";

const modCss = (event) => {
   const scrollY =  window.scrollY;
   const nav = document.querySelector('.nav');
   // const bgColor = '#5A6E73';

   if(scrollY >= 200) {
      nav.classList.add('nav-scroll');
      // nav.style.backgroundColor = bgColor;
      // nav.style.padding = '0 20px';
   } else {
      nav.classList.remove('nav-scroll');
      // nav.style.backgroundColor = 'transparent';
      // nav.style.padding = '14px 20px';
   }
}

window.addEventListener('scroll', modCss);

const hamburger = document.querySelector('#hamburger');

const spanAll = document.querySelectorAll('nav span');

const menuPopUp = document.querySelector('.menu-ul');


hamburger.addEventListener('click', () => {
   
   menuPopUp.style.display = 'flex';
   
});

const close = document.querySelector('#close');

close.addEventListener('click', () => {
   menuPopUp.style.display = 'none';
});

const aClose = document.querySelectorAll('.small-menu a');

aClose.forEach((elem) => {
   
   elem.addEventListener('click', () => {
      menuPopUp.style.display = 'none';
   });
   
});
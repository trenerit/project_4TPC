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

const menuSmall = document.querySelector('#menu-small');

const spanAll = document.querySelectorAll('nav span');



menuSmall.addEventListener('click', () => {



});

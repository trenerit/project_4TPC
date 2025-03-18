"use strict";

const modCss = (event) => {
   const scrollY =  window.scrollY;
   const nav = document.querySelector('.nav');
   const bgColor = '#5A6E73';

   if(scrollY >= 200) {
      nav.style.backgroundColor = bgColor;
   } else {
      nav.style.backgroundColor = 'transparent';
   }
}

window.addEventListener('scroll', modCss);
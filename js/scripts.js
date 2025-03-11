"use strict";

const modCss = (event) => {
   const scrollY =  window.scrollY;
   const nav = document.querySelector('.nav');

   if(scrollY >= 200) {
      nav.style.backgroundColor = 'red';
   } else {
      nav.style.backgroundColor = 'transparent';
   }
}

window.addEventListener('scroll', modCss);
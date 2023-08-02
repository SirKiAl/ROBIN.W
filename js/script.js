const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');
const body = document.querySelector('body');

burger.addEventListener('click', (e) => {
   menu.classList.toggle('visible');
   body.classList.toggle('lock');
});

window.addEventListener('scroll', function () {
   menu.classList.remove('visible');
   body.classList.remove('lock');
});



let html = document.querySelector('html');

html.addEventListener('click', e => {
   if (e.target.closest('.gallery__button')) {
      //del last activ block
      let lastButton = document.querySelector('.gallery__button._active');
      let lastGallery = document.querySelector('.gallery__items._active');

      try {
         lastButton.classList.remove('_active')
         lastGallery.classList.remove('_active')
      }
      catch {
         console.log("OOOPS, I DIDN'T FIND ANYTHING TO HIDE")
      }


      //install new activ block
      let newButton = e.target.closest('.gallery__button')
      let dataAttribute = newButton.getAttribute('dataId')
      let newGallery = document.querySelector('#' + dataAttribute);

      try {
         newButton.classList.add('_active')
         newGallery.classList.add('_active')
      }
      catch {
         console.log("OOOPS, I DIDN'T FIND WHAT TO SHOW")
      }
   }
})



var container = document.querySelector('.my-projects__items');
var msnry = new Masonry(container, {
   // Настройки Masonry
   columnWidth: '.my-projects__item',
   itemSelector: '.my-projects__item',
   gutter: 24
});
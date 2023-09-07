
"use strict";

$(document).ready(function() {
    $(".questions__title").click(function (event) {
        if ($(".faq__list").hasClass("one")){
            $(".questions__title").not($(this)).removeClass('active');
            $(".questions__text").not($(this).next()).slideUp(300);
        }
    $(this).toggleClass("active").next().slideToggle(300);
  });
});


// document.addEventListener("click", documentClick);
// function documentClick(e) {
//   const targetItem = e.target;

//   if (targetItem.closest(".icon-menu")) {
//     document.documentElement.classList.toggle("menu-open");
//   }
// }



const isMobile = {
  Android: function() {
      return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function() {
      return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function() {
      return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function() {
      return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
  },
  any: function() {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
  }
};
// Приховати лінію меню в макс верхній позиції
window.addEventListener('scroll', function () {
scrollY > 0 ? document.querySelector('.header__top').classList.add('scroll') : document.querySelector('.header__top').classList.remove('scroll');
});
// Меню бургер
const iconMenu = document.querySelector('.icon-menu');
const menuBody = document.querySelector('.menu__body');

if (iconMenu) {
    iconMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('_lock')
        iconMenu.classList.toggle('menu-open');
        menuBody.classList.toggle('menu-open');
    })
}

// Прокрутка при кліку

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });
    function onMenuLinkClick (e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('.header__top').offsetHeight;

            if (iconMenu.classList.contains('menu-open')) {
                document.body.classList.remove('_lock')
                iconMenu.classList.remove('menu-open');
                menuBody.classList.remove('menu-open');   
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
    
}
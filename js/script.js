//mobile navigation
var navPage = document.querySelector('.page-header__nav');
    var navBtn = document.querySelector('.page-header__btn');

    navPage.classList.remove('page-header__nav--nojs');

    navBtn.addEventListener('click', function() {
      if (navPage.classList.contains('page-header__nav--closed')) {
        navPage.classList.remove('page-header__nav--closed');
        navPage.classList.add('page-header__nav--opened');
      } else {
        navPage.classList.add('page-header__nav--closed');
        navPage.classList.remove('page-header__nav--opened');
      }
    });

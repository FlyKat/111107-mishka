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


//  interactive map

ymaps.ready(init);

function init() {
	var myMap = new ymaps.Map('map', {
		center: [59.93923400570833, 30.329127021209725],
		zoom: 16,
		controls: []
	});

	myMap.behaviors.disable('scrollZoom');

	myMap.controls.add("zoomControl", {
		position: {
			top: 15,
			left: 15
		}
	});

	var myPlacemark = new ymaps.Placemark(
		[59.93863106417265, 30.3230545], {}, {
			iconLayout: 'default#image',
			iconImageHref: 'img/icon-map-pin.svg',
			iconImageSize: [66, 100],
			iconImageOffset: [-66, -100] //todo
		});

	myMap.geoObjects.add(myPlacemark);

}

// modal

var cart = document.querySelector(".product__cart");
var order = document.querySelector(".popular-product__btn");
var popup = document.querySelector(".modal");
var close = document.querySelector(".form-select__btn");

cart.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.add("modal-show");
});

order.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.add("modal-show");
});

close.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.remove("modal-show");
});


window.addEventListener("keydown", function(event) {
	if (event.keyCode == 27) {
		if (popup.classList.contains("modal-show")) {
			popup.classList.remove("modal-show");
		}
	}
});

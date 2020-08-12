'use strict';

var link = document.querySelector('.about-btn-write');
var popup = document.querySelector('.modal-content');
var close = popup.querySelector('.modal-content-close');

link.addEventListener('click', function (event) {
	event.preventDefault();
	popup.classList.add('modal-content-show');
});

close.addEventListener('click', function (event) {
	event.preventDefault();
	popup.classList.remove('modal-content-show');
});

var linkMap = document.querySelector('.js-map-show');
var popupMap = document.querySelector('.modal-content-map');
var closeMap = popupMap.querySelector('.modal-content-close');

linkMap.addEventListener('click', function (event) {
	event.preventDefault();
	popupMap.classList.add('modal-content-map-show');
});

closeMap.addEventListener('click', function (event) {
	event.preventDefault();
	popupMap.classList.remove('modal-content-map-show');
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName('slide');

if (n >slides.length) {
	slideIndex = 1;
}

if (n < 1) {
	slideIndex = slides.length;
}
for (i = 0; i < slides.length; i++) {
	slides[i].style.display = 'none';
}
slides[slideIndex-1].style.display = 'block';

}
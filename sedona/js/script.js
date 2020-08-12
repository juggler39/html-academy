'use strict';

let button = document.querySelector('.search__button');
let form = document.querySelector('.form');

if (button) {
  form.classList.remove('form--no-js');
  button.addEventListener('click', function (evt) {
    evt.preventDefault();
    form.classList.toggle('form--close');
  });
}
"use strict";var button=document.querySelector(".search__button"),form=document.querySelector(".form");button&&(form.classList.remove("form--no-js"),button.addEventListener("click",function(t){t.preventDefault(),form.classList.toggle("form--close")}));
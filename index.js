// index.js


let burger = document.querySelector("#navbar-burger");

burger.addEventListener("click", function(e){
	document.querySelector(".burger").classList.toggle("is-active")
	document.querySelector(".navbar-menu").classList.toggle("is-active")
})



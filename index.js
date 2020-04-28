// index.js

let proxyServer = `https://still-spire-37210.herokuapp.com/positions.json?`
let burger = document.querySelector("#navbar-burger");
// let search = 

burger.addEventListener("click", function(e){
	document.querySelector(".burger").classList.toggle("is-active")
	document.querySelector(".navbar-menu").classList.toggle("is-active")
})

// fetch('http://example.com/movies.json')
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

document.addEventListener("submit", function(e) {
	e.preventDefault();
	let description = document.forms[0]["description"].value;
	let location = document.forms[0]["location"].value;
	let full_time_checked = document.forms[0]["full_time"].checked;

	let searchParams = new URLSearchParams([['description', description], ['location', location], ['full_time', full_time_checked]]);
	// console.log(`${searchParams}`);

	console.log(getUrl(searchParams));

	fetch(getUrl(searchParams))
	  .then((response) => {
	    return response.json();
	  })
	  .then((data) => {
	    console.log(data);
	  });
})


function getUrl(searchParams){
	return proxyServer +`${searchParams}`
}





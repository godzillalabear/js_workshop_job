// index.js

let proxyServer = `https://still-spire-37210.herokuapp.com/positions.json?`
let burger = document.querySelector("#navbar-burger");

burger.addEventListener("click", function(e){
	document.querySelector(".burger").classList.toggle("is-active");
	document.querySelector(".navbar-menu").classList.toggle("is-active");
})

document.addEventListener("submit", function(e) {
	e.preventDefault();
	let description = document.forms[0]["description"].value;
	let location = document.forms[0]["location"].value;
	let full_time_checked = trueToOn(document.forms[0]["full_time"].checked);

	let searchParams = new URLSearchParams([['description', description], ['location', location], ['full_time', full_time_checked]]);

	fetch(getUrl(searchParams))
	  .then((response) => {
	    return response.json();
	  })
	  .then((data) => {
	  	let jobPannel = document.querySelector("#job-pannel");
	  	let result = data.map(toHTML).join("");
	    jobPannel.innerHTML = result;
	    
	  });
})


function getUrl(searchParams){
	return proxyServer +`${searchParams}`
}


function toHTML(data){
	return `
		<tr>
		            <td>
		              <h4><a href="${data.url}">${data.title}</a></h4>
		              <p class="source">
		              <a class="company" href="${data.company_url}">${data.company}</a>
		              –
		              <strong class="fulltime">${data.type}</strong>
		              </p>
		            </td>
		            <td class="meta">
		              <span class="location">${data.location}</span>
		            </td>
	          </tr>
    `;
}

function trueToOn(params){
	if (params === true)
	{
		return "on";
	} else {
		return ""
	}
}








// This is the Owl Carousel Function //
$(document).ready(function(){
	$(".owl-carousel").owlCarousel();
  });

  // Create a request variable and assign a new fetch object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)

request.onload = function () {
  // Begin accessing JSON data here

}

// Send request
request.send()
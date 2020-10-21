// Bing Api Keys //
// Key 1: e6c90e01716f4732990ada5d1d36135f //
// Key 2: 83053145b30b47758e84cf33f79ec254 //

//Zomato API KEY
//KEY: 211a37c27d46db44c2e65076d081b87b

//Google Maps Api Key //
// Key : AIzaSyDHWqTqHS4iUxPTAddHwqSOOHJ4XDGO0qc //

// This is the Owl Carousel Function //

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  slideTransition:"linear",
  loop:true,
  autoplay:true,
  center:true,
  stagePadding: 10,
  margin:10,
  nav:false,
  items:1,
  merge:true,
  pullDrag:true,
  mergeFit:true,
  videoHeight:60,
  videoWidth:100,


  

  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})
  });


// This is the geolocator for restaurants nearest you //
  var x = document.getElementById("searchBtn");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}


//Display Result on a map //
function showPosition(position) {
  var latlon = position.coords.latitude + "," + position.coords.longitude;

  var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="+latlon+"&zoom=14&size=400x300&sensor=false&key=YOUR_KEY";

  document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";
}

//This is the Zomato Search Function //

$(document).ready(function() {

  $("#getMessage").on("click", function() {
   var valueSearchBox = $('#getText').val()
   if (valueSearchBox === "") {
    return;
   }
   select();
  });
  // SEARCH BY CITY 
});
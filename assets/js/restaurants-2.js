// ENSURE SJS RUNS AFTER LOAD
$("document").ready(function(){
    
// THIS FUNCTION IS THE GEOLOCATOR FOR RESTAURANTS (RESTOS) NEAREST YOU //
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

  //Display Result on a map //
function showPosition(position) {
    var latlon = position.coords.latitude + "," + position.coords.longitude;
  
    var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="+latlon+"&zoom=14&size=400x300&sensor=false&key=YOUR_KEY";
  
    document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";
  }
  
  // THIS FUNCTION DISPLAYS THE MAP //
  function initMap() {
  var myMapCenter = {lat: 40.785091, lng: -73.968285};
  
  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: myMapCenter,
    zoom: 14
  });
  
    // THIS FUNCTION DISPLAYS THE MAP //
  function markResto(restoInfo){
  
    // Create a marker and set its position.
    var marker = new google.maps.Marker({
      map: map,
      position: restoInfo.location,
      title: restoInfo.name
    });
  
    // show store info when marker is clicked
    marker.addListener('click', function(){
      showStoreInfo(restoInfo);
    });
  }
  
  // show store info in text box
  function showRestoInfo(restoInfo){
    var info_div = document.getElementById('info_div');
    info_div.innerHTML = 'Restaurant name: '
      + restoInfo.name
      + '<br>Hours: ' + restoInfo.hours;
  }
  
  var restos = [
    {
      name: 'Resto 1',
      location: {lat: 40.785091, lng: -73.968285},
      hours: '8AM to 10PM'
    },
    {
      name: 'Resto 2',
      location: {lat: 40.790091, lng: -73.968285},
      hours: '9AM to 9PM'
    }
  ];
  
  restos.forEach(function(resto){
    markStore(resto);
  });
  
  }
}



    


});
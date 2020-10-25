// Bing Api Keys //
// Key 1: e6c90e01716f4732990ada5d1d36135f //
// Key 2: 83053145b30b47758e84cf33f79ec254 //

// ZOMATO API KEY //
const api= {
  key: "211a37c27d46db44c2e65076d081b87b",
  base: "https://cors-anywhere.herokuapp.com/"+"https://developers.zomato.com/api/v2.1/",
  crossOrigin: null
}

//GOOGLE MAPS API KEY //
//const api2= {
//   key: "AIzaSyDHWqTqHS4iUxPTAddHwqSOOHJ4XDGO0qc",
//   base:" ",
//   crossOrigin: null
//}

// $(document).ready(function(){
//   $(".owl-carousel").owlCarousel({
//   slideTransition:"linear",
//   loop:true,
//   autoplay:true,
//   center:true,
//   stagePadding: 10,
//   margin:10,
//   nav:false,
//   items:1,
//   merge:true,
//   pullDrag:true,
//   mergeFit:true,
//   videoHeight:60,
//   videoWidth:100,
//   lazyLoad: true,
  
//   responsive:{
//       0:{
//           items:1
//       },
//       600:{
//           items:3
//       },
//       1000:{
//           items:5
//       }
//   }
// })


/*OWL CAROUSEL BACKGROUND */

const $owlCarousel = $(".owl-carousel").owlCarousel({
  items: 1,
  loop: true,
  autoplay: true,
  lazyLoad : true,
  navigation : true,
  nav: true,
  navText: [
    '<svg width="50" height="50" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>',
    '<svg width="50" height="50" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>'
  ]
});

$owlCarousel.on("changed.owl.carousel", e => {
  $(".owl-slide-animated").removeClass("is-transitioned");
  const $currentOwlItem = $(".owl-item").eq(e.item.index);
  $currentOwlItem.find(".owl-slide-animated").addClass("is-transitioned");
});

// Prevent Page Jumping Function //


// Browser Sizing for Carousel //
$owlCarousel.on("resize.owl.carousel", () => {
  setTimeout(() => {
    setOwlDotsPosition();
  }, 50);
});

// THIS IS THE INPUT BOX CLICK FUNCTION //
const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

//ACTION ON PRESSING ENTER BUTTON//
function setQuery(evt) {
  if (evt.keyCode === 13) {
      getResults(searchbox.value);
      //console.log(searchbox.value);
  }

// //FUNCTION TO FETCH ZOMATO API //
// function getResults (query) {
//   fetch(`${api.base}/cuisine?q=${query}&APPID=${api.key}`)
//   .then(cuisine => {
//       return cuisine.json();
//       }).then(displayResults);  
//   }
// //DISPLAY ZOMATO API RESULTS //
// function displayResults (cuisine) {
//   console.log(cuisine);
// }

// // THIS FUNCTION IS THE GEOLOCATOR FOR RESTAURANTS (RESTOS) NEAREST YOU //
// let map, infoWindow;

// function initMap() {
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: -34.397, lng: 150.644 },
//     zoom: 6,
//   });
//   infoWindow = new google.maps.InfoWindow();
//   const locationButton = document.createElement("button");
//   locationButton.textContent = "Pan to Current Location";
//   locationButton.classList.add("custom-map-control-button");
//   map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
//   locationButton.addEventListener("click", () => {
//     // Try HTML5 geolocation.
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const pos = {
//             lat: position.coords.latitude,
//             lng: position.coords.longitude,
//           };
//           infoWindow.setPosition(pos);
//           infoWindow.setContent("Location found.");
//           infoWindow.open(map);
//           map.setCenter(pos);
//         },
//         () => {
//           handleLocationError(true, infoWindow, map.getCenter());
//         }
//       );
//     } else {
//       // Browser doesn't support Geolocation
//       handleLocationError(false, infoWindow, map.getCenter());
//     }
//   });
// }

// function handleLocationError(browserHasGeolocation, infoWindow, pos) {
//   infoWindow.setPosition(pos);
//   infoWindow.setContent(
//     browserHasGeolocation
//       ? "Error: The Geolocation service failed."
//       : "Error: Your browser doesn't support geolocation."
//   );
//   infoWindow.open(map);
// }
};
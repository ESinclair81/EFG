var searchFormEl = $("#searchform")
var searchInputEl = $("#movie-search");
//var apiKey = hrt8j7mezsyzdh6ezyn3bn2t

var settings = {
    "url": "https://api-gate2.movieglu.com/filmsNowShowing/?n=10",
    "method": "GET",
    "timeout": 0,
    "datatype": "JSON",
    "headers": {
    "api-version": "v200",
    "Authorization": "Basic U0NIT18yOF9YWDo3eUZMS3pTdklQcmg=",
    "client": "SCHO_28 ",
    "x-api-key": "iEgMtXm1Gc8WHC1cP0KMC5Qi7hTY1xuY21MRlNM7",
    "device-datetime": "2020-10-23T09:50:57.296Z",
    "territory": "XX",
    "geolocation": "-22.0;14.0", 
    },
   };
    
    $.ajax(settings).done(function (response) {
        var films = response.films;
        var content = $("#content");
        for (var i = 0; i < films.length; ++i) {
            var film = films[i];
            content.append('<li>' + film['film_name'] + '</li>');
        }

    console.log(response);
   
    });




    var nearBy = {
        "url": "https://api-gate2.movieglu.com/cinemasNearby/?n=5",
        "method": "GET",
        "timeout": 0,
        "datatype": "JSON",
        "headers": {
        "api-version": "v200",
        "Authorization": "Basic U0NIT18yOF9YWDo3eUZMS3pTdklQcmg=",
        "client": "SCHO_28 ",
        "x-api-key": "iEgMtXm1Gc8WHC1cP0KMC5Qi7hTY1xuY21MRlNM7",
        "device-datetime": "2020-10-23T10:20:57.296Z",
        "territory": "XX",
        "geolocation": "-22.0;14.0", 
        },
       };


       $.ajax(nearBy).done(function (response) {

        var cinemas = response.cinemas;
        var cinemasNear = $("#cinemas");

        for (var i = 0; i < cinemas.length; ++i) {
           var cinema = cinemas[i];
            cinemasNear.append('<li>' + cinema['cinema_name'] + '</li>');
       }
           console.log(response);
       });


       var showTimes = {
        "url": "https://api-gate2.movieglu.com/filmShowTimes/?film_id=7772&date=2020-10-24&n=10",
        "method": "GET",
        "timeout": 0,
        "datatype": "JSON",
        "headers": {
        "api-version": "v200",
        "Authorization": "Basic U0NIT18yOF9YWDo3eUZMS3pTdklQcmg=",
        "client": "SCHO_28 ",
        "x-api-key": "iEgMtXm1Gc8WHC1cP0KMC5Qi7hTY1xuY21MRlNM7",
        "device-datetime": "2020-10-23T10:20:57.296Z",
        "territory": "XX",
        "geolocation": "-22.0;14.0", 
        },
       };

       $(document).ready(function() {
           $("searchform").submit(function(){
           });
           $("button").click(function(){
               $("movie-search").submit(showTimes)
           })
       })

       $.ajax(showTimes).done(function(response){

        var filmShowTimes = response.film;
        var filmShowTime = $("#showtimes");

        for(i = 0; i < cinemas.length; ++i) {
            var filmTimes = filmShowTimes[i]
            filmShowTime.append("<li>" + filmTimes["showings"] + "</li>");
        }
        console.log(response);
        
       });

       


      // searchInputEl.addEventListener("submit", formSubmitHandler);
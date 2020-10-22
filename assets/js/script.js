



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
    "device-datetime": "2020-10-21T09:28:57.296Z",
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
        "url": "https://api-gate2.movieglu.com/cinemasNearby/?n5",
        "method": "GET",
        "timeout": 0,
        "datatype": "JSON",
        "headers": {
        "api-version": "v200",
        "Authorization": "Basic U0NIT18yOF9YWDo3eUZMS3pTdklQcmg=",
        "client": "SCHO_28 ",
        "x-api-key": "iEgMtXm1Gc8WHC1cP0KMC5Qi7hTY1xuY21MRlNM7",
        "device-datetime": "2020-10-21T09:28:57.296Z",
        "territory": "XX",
        "geolocation": "-22.0;14.0", 
        },
       };

       $.ajax(nearBy).done(function (response) {

        var cinemas = response.cinemas;
        var cinemasNear = $("#cinemasNear");

        for (var i = 0; i < cinemas.length; ++i) {
            var cinemas = cinemas[i];
            cinemasNear.append('<li>' + cinemas['film_name'] + '</li>');
        }
           console.log(response);
       });
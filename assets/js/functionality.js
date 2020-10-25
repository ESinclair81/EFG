var search = document.querySelector('#cuisine-search');
var searchBtnEl = document.querySelector('#search-form');



var loadCuisines = function(searchTerm) {
    var api= fetch("https://developers.zomato.com/api/v2.1/search?entity_id=89&entity_type=city&cuisines="+searchTerm,{
        "method": "GET",
        "headers": {
            "user-key": "211a37c27d46db44c2e65076d081b87b"}
        });
    

    api.then(function(response){
        if (response.ok){
            response.json().then(function(data){
                console.log(data);
            })
        }
    })  
}


var Loadcontent = function(event){
     event.preventDefault();
    var searchCuisine = search.value.trim();
    loadCuisines(searchCuisine);
     
 }


searchBtnEl.addEventListener("submit", Loadcontent);

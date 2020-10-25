var search = document.querySelector('#cuisine-search');
var searchBtnEl = document.querySelector('#search-form');

var restName1
var rate1 
var phone1
var img1


/* THIS IS THE ZOMATO API CALLBACK FUNCTION TO POPULATE THE PAGE */

var showRest = function(search) {
    if (search) {
        //Rest Tile 1
        restName1.textContent = search[0].name;
    
    }
};





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

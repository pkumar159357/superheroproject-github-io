var container = $('#container');
var searchResult = [];
const ApiUrl = "https://www.superheroapi.com/api.php/891370368026086"; //api url

$('button').click(function(){

    var name = document.getElementById('searchbar').value;
    $('#container').html("");

    searchResult = [];

    $.get(`${ApiUrl}/search/${name}`,function(data){

        let searchResult = data.results;

        for(let course of searchResult){

            container.append(`
            
            <li>
            <div id="search-results">
            <div id="image"><img src="${course.image.url}"></div>
            <div id="name"> <a href="details.html?id=${course.id}">
            ${course.name}
            </a>
            <br>
            ${
                course.biography['full-name']
            }
            </div>
            <button id="add-to-favourite" onclick="addToFav(${course.id})">Add Favourite</button>
            </a> </div>
            </div>
            </li>
            <br>
            `);
        }
    })
})

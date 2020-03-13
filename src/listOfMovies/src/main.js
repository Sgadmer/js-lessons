let movieXHR = new XMLHttpRequest();

movieXHR.open('GET', 'http://www.omdbapi.com/?apikey=586fb65b&s=The Hunger Games', true);


movieXHR.responseType = 'json';

movieXHR.onload = () =>{
    

    let movies = document.querySelector('#movies');
let arrPoster = movieXHR.response.Search;

arrPoster.forEach(element => {
    
    let newPoster = document.createElement('img');
    newPoster.setAttribute('src', element.Poster);
    movies.append(newPoster);

});

}

movieXHR.send();


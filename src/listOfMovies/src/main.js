let posterURL = 'http://www.omdbapi.com/?apikey=586fb65b';


let movieFilters = document.querySelector('#movieFilters')
movieFilters.addEventListener('submit', addPosterFilterInURL);

function addPosterFilterInURL(event) {
    event.preventDefault();
    let movieNameFromInput = event.target.elements[0].value;
    let movieYearFromInput = event.target.elements[1].value

    if (movieNameFromInput.length < 3 && movieYearFromInput < 1895) {
        alert('Имя фильма должно содержать минимум 3 символа');
        alert('Год фильма должен быть больше 1895');
        return;
    }

    else if (movieNameFromInput.length < 3) {
        alert('Имя фильма должно содержать минимум 3 символа');
        return;
    }

    else if (0 && movieYearFromInput < 1895) {
        alert('Год фильма должен быть больше 1895');
        return;
    }
    console.log('send request');
    loadMovies(movieNameFromInput, movieYearFromInput)
        .then(
            arrPoster => {
                console.log('request complete');
                arrPoster.forEach((element, index) => {

                    let newPoster = document.createElement('img');
                    newPoster.setAttribute('src', element.Poster);
                    setTimeout(() => {
                        movies.append(newPoster);    
                    }, 1000 * (index + 1));
                });
            },
            error => console.log(error)
        );

}

function loadMovies(movieNameFromInput, movieYearFromInput){
return new Promise((resolve, reject) => {

    let movieXHR = new XMLHttpRequest();

    let params = `&s=${movieNameFromInput}`

        movieXHR.open('GET', posterURL + params, true);
    movieXHR.responseType = 'json';

    movieXHR.onload = () => {
        let arrPoster = movieXHR.response.Search;
        resolve(arrPoster);

    }

    movieXHR.onerror = () => { reject('REJECT!!!'); }
    movieXHR.send();
}
);
}


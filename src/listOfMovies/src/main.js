let posterURL = 'http://www.omdbapi.com/?apikey=586fb65b';


let movieFilters = document.querySelector('#movieFilters')
movieFilters.addEventListener('submit', addPosterFilterInURL);

let movies = document.querySelector('#movies');

let load = document.querySelector('img[load]');
console.log(load);

function addPosterFilterInURL(event) {
    event.preventDefault();
    let movieNameFromInput = event.target.elements[0].value;
    let movieYearFromInput = event.target.elements[1].value

    if (movieNameFromInput.length == '') {
        alert('Введите название фильма');
        return;
    }

    if (isNaN(movieYearFromInput)) {
        alert('Введите год цифрами');
        return;
    }

    load.setAttribute('load', true);
    console.log('send request');
    loadMovies(movieNameFromInput, movieYearFromInput)
        .then(
            arrPoster => {
                console.log('request complete');
                deleteOldPosters();
                let loadTimer;
                arrPoster.forEach((element, index) => {

                     loadTimer = 50 * (index + 1) ;

                    if (element.Poster != "N/A") {
                        let newPoster = document.createElement('img');
                        newPoster.setAttribute('src', element.Poster);
                        newPoster.setAttribute('hidden1', '');
                        movies.append(newPoster);
                        setTimeout(() => {
                            newPoster.removeAttribute('hidden1', '');
                        }, loadTimer);
                    }
                });
                setTimeout(()=>{
                    load.setAttribute('load', false);
                }, loadTimer + 300)
                
            },
            error => {
                alert(error);
                load.setAttribute('load', false);
            }
        );

}

function loadMovies(movieNameFromInput, movieYearFromInput) {
    return new Promise((resolve, reject) => {

        let movieXHR = new XMLHttpRequest();

        let paramsName = `&s=${movieNameFromInput}`;
        let paramsYear = `&y=${movieYearFromInput}`;

        if (movieYearFromInput == '') { movieXHR.open('GET', posterURL + paramsName, true); }
        else { movieXHR.open('GET', posterURL + paramsName + paramsYear, true); }


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

function deleteOldPosters() {


    while (movies.firstChild) {
        movies.removeChild(movies.firstChild);
    }


}
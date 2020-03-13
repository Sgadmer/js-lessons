let movieXHR = new XMLHttpRequest();

movieXHR.open('GET', 'http://img.omdbapi.com/?apikey=[586fb65b]&r', true);

movieXHR.onload = () =>{
    console.log(movieXHR);
}

movieXHR.send(null);



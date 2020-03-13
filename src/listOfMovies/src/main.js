let movieXHR = new XMLHttpRequest();

movieXHR.open('GET', 'http://img.omdbapi.com/?apikey=[586fb65b]&', true);

movieXHR.onload = () =>{
    console.log(movieXHR);
}

movieXHR.send(null);



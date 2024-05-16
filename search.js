let api = 'http://www.omdbapi.com/?i=tt3896198&apikey=19000dc7&t='

function searchMovie(){
    let query = document.getElementById('movie').value
    let search = api + query
    console.log(query);
    fetch(search).then(function(data){
        return data.json()
    }).then(function(data){
        document.getElementById('title').innerText = data.Title;
        document.getElementById('type').innerText = data.Type;
        document.getElementById('plot').innerText = data.Plot;
        document.getElementById('release').innerText = data.Released;
        document.getElementById('genre').innerText = data.Genre;
        document.getElementById('runtime').innerText = data.Runtime;
        document.getElementById('country').innerText = data.Country;
        document.getElementById('language').innerText = data.Language;
        document.getElementById('actors').innerText = data.Actors;
        document.getElementById('directors').innerText = data.Director;
        document.getElementById('ratings').innerText = data.imdbRating;
        document.getElementById('boxoffice').innerText = data.BoxOffice;
        document.getElementById('poster').src = data.Poster;
        document.getElementById('poster').alt = 'ERROR: Cannot display the photo';
    })
}
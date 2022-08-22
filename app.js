const body = document.querySelector("body");
const all = document.querySelector("#all");
const search = document.querySelector('#search');
const createTask = document.querySelector(".task-btn");
const form = document.querySelector('.form');
const done = document.querySelector('.done');
const cross = document.querySelector('.close');
const mainMovieContainer = document.querySelector('.main-movie-container');

createTask.addEventListener('click', (event)=>{
    form.style.display = 'block';
});
cross.addEventListener('click', (event)=>{
    form.remove();
    // form.style.visibility = 'hidden';
    // form.style.display = 'none';
});

const movieName = document.querySelector('#movie-name');
const movieLink = document.querySelector('#movie-image-link');
const imdbRating = document.querySelector('#imdb-rating');
const category = document.querySelector('#category');
const trailerLink = document.querySelector('#trailer-link');
const actor = document.querySelector('#actor-name');
const director = document.querySelector('#director-name');
let data = [];
let input = document.getElementsByTagName('input');
done.addEventListener('click', (event)=>{
    // form.remove();
    form.style.display = 'none';
    input.value = '';
    const movieContainer = document.createElement('div');
    movieContainer.classList.add('movie-container')
    movieContainer.innerHTML = `<h1>${movieName.value}</h1>
                                <h2>${actor.value}</h2>
                                <h2>${director.value}</h2>
                                <p>Link :<a href="">${trailerLink.value}</a> </p>
                                <p>IMDB : ${imdbRating.value}</p>
                                <p>Category : ${category.value}</p>
                                <button id="play"><i class="fa-solid fa-play"></i></button>
                                `
        
                                let obj = {
                                    movie: movieName.value,
                                    category: category.value,
                                    actor: actor.value,
                                    director: director.value,
                                };
                                data.push(obj);
    mainMovieContainer.append(movieContainer);
    body.append(mainMovieContainer);
})
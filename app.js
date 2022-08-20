const body = document.querySelector("body");
const all = document.querySelector("#all");
const red = document.querySelector("#red");
const blue = document.querySelector("#blue");
const black = document.querySelector("#black");
const yellow = document.querySelector("#yellow");
const createTask = document.querySelector(".task-btn");
const form = document.querySelector('.form');
const done = document.querySelector('.done');
const cross = document.querySelector('.close');
// const movieContainer = document.querySelector('.movie-container')

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
done.addEventListener('click', (event)=>{
    // form.remove();
    form.style.display = 'none';

    const movieContainer = document.createElement('div');
    movieContainer.classList.add('movie-container')
    movieContainer.innerHTML = `<h1>${movieName.value}</h1>
                                <h2>${actor.value}</h2>
                                <h2>${director.value}</h2>
                                <p>Link :<a href="">${trailerLink.value}</a> </p>
                                <p>IMDB : ${imdbRating.value}</p>
                                <p>Category : ${category.value}</p>
                                `
        
                                let obj = {
                                    movie: movieName.value,
                                    category: category.value,
                                    actor: actor.value,
                                    director: director.value,
                                };
                                data.push(obj);

    body.append(movieContainer)
})
const body = document.querySelector("body");
const all = document.querySelector("#all");
const createTask = document.querySelector(".task-btn");
const form = document.querySelector(".form");
const done = document.querySelector(".done");
const cross = document.querySelector(".close");
const mainMovieContainer = document.querySelector(".main-movie-container");

createTask.addEventListener("click", (event) => {
  form.style.display = "block";
  body.append(form)
});
cross.addEventListener("click", (event) => {
  form.remove();
  // form.style.visibility = 'hidden';
  // form.style.display = 'none';
});

const movieName = document.querySelector("#movie-name");
const movieLink = document.querySelector("#movie-image-link");
const imdbRating = document.querySelector("#imdb-rating");
const category = document.querySelector("#category");
const trailerLink = document.querySelector("#trailer-link");
const actor = document.querySelector("#actor-name");
const director = document.querySelector("#director-name");
let data = [];
// let input = document.getElementsByTagName('input');
done.addEventListener("click", (event) => {
  // form.remove();

  form.style.display = "none";

  const movieContainer = document.createElement("div");
  movieContainer.classList.add("movie-container");
  movieContainer.innerHTML = `<img src="${movieLink.value}" width="200px" height="100px">
                                <h2>Movie:${movieName.value}</h2>
                                <h3>Actor:${actor.value}</h3>
                                <h3>Director:${director.value}</h3>
                                <p>Link :<a href="">${trailerLink.value}</a> </p>
                                <p>IMDB : ${imdbRating.value}</p>
                                <p>Category : ${category.value}</p>
                                <button id="play"><a href="${trailerLink.value}" target="_blank">play</a></button>
                                `;
//   movieName.value = "";
//   movieLink.value = "";
//   imdbRating.value = "";
//   category.value = "";
//   trailerLink.value = "";
//   actor.value = "";
//   director.value = "";
  let obj = {
    movie: movieName.value,
    category: category.value,
    actor: actor.value,
    director: director.value,
    rating: imdbRating.value,
  };
  data.push(obj);
  console.log(data);
  mainMovieContainer.append(movieContainer);
  body.append(mainMovieContainer);
});


const search = document.querySelector("#search");
const searchBtn = document.querySelector('#search-btn');
searchBtn.addEventListener("click", (event) => {
  for(values of data){
    console.log(data.values)
  }
});

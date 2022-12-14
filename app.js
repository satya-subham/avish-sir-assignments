const body = document.querySelector("body");
const all = document.querySelector("#all");
const createTask = document.querySelector(".task-btn");
const form = document.querySelector(".form");
const done = document.querySelector(".done");
const cross = document.querySelector(".close");
const mainMovieContainer = document.querySelector(".main-movie-container");

createTask.addEventListener("click", (event) => {
  form.style.display = "block";
  body.append(form);
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

  let obj = {
    movie: movieName.value,
    actor: actor.value,
    director: director.value,
    IMDB: imdbRating.value,
    cate: category.value,
  };
  data.push(obj);
  // data.push(movieName.value);
  // data.push(actor.value);
  // data.push(director.value);
  // data.push(imdbRating.value);
  // console.log(data);

  showData(data);
});

function showData(newData) {
  newData.map((e) => {
    const movieContainer = document.createElement("div");
    movieContainer.classList.add("movie-container");

    const image = document.createElement("img");
    image.setAttribute("src", `${e.movieLink.value}`);
    image.style.width = "200px";
    image.style.height = "100px";
    movieContainer.append(image);

    const movie = document.createElement("h2");
    movie.innerText = "Movie:" + " " + `${e.movieName.value}`;
    movieContainer.append(movie);

    const actorName = document.createElement("h3");
    actorName.innerText = "Actor:" + " " + `${e.actor.value}`;
    movieContainer.append(actorName);

    const directorName = document.createElement("h3");
    directorName.innerText = "Director:" + " " + `${e.director.value}`;
    movieContainer.append(directorName);

    const link = document.createElement("a");
    link.setAttribute("href", `${e.trailerLink.value}`);
    link.innerText = "Watch This Movie";
    movieContainer.append(link);

    const IMDB = document.createElement("h3");
    IMDB.innerText = "IMDB :" + " " + `${e.imdbRating.value}`;
    movieContainer.append(IMDB);

    const cate = document.createElement("h3");
    cate.innerText = "Category :" + " " + `${e.category.value}`;
    movieContainer.append(cate);

    const play = document.createElement("button");
    play.setAttribute("id", "play");
    movieContainer.append(play);

    const playLink = document.createElement("a");
    playLink.setAttribute("href", `${e.trailerLink.value}`);
    playLink.setAttribute("target", "_blank");
    playLink.innerText = "Play";
    play.append(playLink);

    mainMovieContainer.append(movieContainer);
    body.append(mainMovieContainer);
  });
}

const search = document.querySelector("#search");
const searchBtn = document.querySelector("#search-btn");

searchBtn.addEventListener("click", (event) => {
  let filterData = data.filter((e) => {
    return e.movie == `${search.value}`;
  });
});

all.addEventListener("click", (event) => {
  body.append(mainMovieContainer);
});

// data.forEach(element => {
//   mainMovieContainer.remove();
//   if (element.includes(search.value)) {
//     let newMainMovieContainer = document.createElement('div');
//     newMainMovieContainer.classList.add("movie-container");
//     body.append(newMainMovieContainer);

//   }
// });

// console.log(data);
//    movieContainer.remove();

//   // mainMovieContainer.remove();
//   data.filter((element) => {
//     if (search.value == element.movie) {
//       mainMovieContainer.append(movieContainer)
//       body.append(mainMovieContainer)
//     }
//   });

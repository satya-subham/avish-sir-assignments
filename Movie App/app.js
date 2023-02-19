const body = document.querySelector("body");
const all = document.querySelector("#all");
const createTask = document.querySelector(".task-btn");
const form = document.querySelector(".form");
const done = document.querySelector(".done");
const cross = document.querySelector(".close");
const mainMovieContainer = document.querySelector(".main-movie-container");
const mainContainer = document.querySelector(".main-container");

createTask.addEventListener("click", (event) => {
  mainContainer.classList.toggle('toggle')
  form.style.display = "block";
  body.append(form);
});
cross.addEventListener("click", (event) => {
  mainContainer.classList.toggle('toggle')
  form.remove();
});

let data = [];

done.addEventListener("click", (event) => {
  event.preventDefault();
  mainContainer.classList.toggle('toggle');
  form.style.display = "none";
  const movieName = document.querySelector("#movie-name").value;
  const imdbRating = document.querySelector("#imdb-rating").value;
  const category = document.querySelector("#category").value;
  const actor = document.querySelector("#actor-name").value;
  const director = document.querySelector("#director-name").value;
  const movieLink = document.querySelector("#movie-image-link").value;
  const trailerLink = document.querySelector("#trailer-link").value;
  let obj = {
    movie: movieName,
    actor: actor,
    director: director,
    IMDB: imdbRating,
    cate: category,
    movieLink: movieLink,
    trailerLink: trailerLink,
  };
  data.push(obj);

  showData(data);
});

function showData(newData) {
  mainMovieContainer.innerHTML = "";
  newData.map((e) => {
    const movieContainer = document.createElement("div");
    movieContainer.classList.add("movie-container");

    const image = document.createElement("img");
    image.setAttribute("src", `${e.movieLink}`);
    image.style.width = "200px";
    image.style.height = "100px";
    movieContainer.append(image);

    const movie = document.createElement("h2");
    movie.innerText = "Movie:" + " " + `${e.movie}`;
    movieContainer.append(movie);

    const actorName = document.createElement("h3");
    actorName.innerText = "Actor:" + " " + `${e.actor}`;
    movieContainer.append(actorName);

    const directorName = document.createElement("h3");
    directorName.innerText = "Director:" + " " + `${e.director}`;
    movieContainer.append(directorName);

    const link = document.createElement("a");
    link.setAttribute("href", `${e.trailerLink}`);
    link.innerText = "Watch This Movie";
    movieContainer.append(link);

    const IMDB = document.createElement("h3");
    IMDB.innerText = "IMDB :" + " " + `${e.IMDB}`;
    movieContainer.append(IMDB);

    const cate = document.createElement("h3");
    cate.innerText = "Category :" + " " + `${e.cate}`;
    movieContainer.append(cate);

    const play = document.createElement("button");
    play.setAttribute("id", "play");
    movieContainer.append(play);

    const playLink = document.createElement("a");
    playLink.setAttribute("href", `${e.trailerLink}`);
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
  let movieData = data.filter((e) => {
    return e.movie == search.value;
  });

  let actorData = data.filter((e) => {
    return e.actor == search.value;
  });

  showData(movieData, actorData);
  
});



all.addEventListener("click", (event) => {
  body.append(mainMovieContainer);
});

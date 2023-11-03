let searchMovie = document.getElementById("search");
const main = document.getElementById("main");
const form = document.getElementById("form");

const apiKey = "561c699acc95661c9cb4ce3989eec954";

const popularMovies = () => {
  const url = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${apiKey}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let movies = data.results;

      main.innerHTML = "";

      movies.forEach((movie) => {
        const cardFilm = ` <div class="card">
          <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt"${
          movie.title
        }">
          <div class="infos">
            <h3 id="title">${movie.title}</h3>
            <span class="${voteColors(movie.vote_average)}" id="stars">${
          movie.vote_average
        }</span>
          </div>
       </div> `;

        main.innerHTML += cardFilm;
      });
    })
    .catch((err) => console.error(err));
};

function voteColors(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}

document.addEventListener("DOMContentLoaded", popularMovies);

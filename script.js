//Movie Management

// Movie list (array of objects)
let movies = [];

// Function to add a movie
function addMovie(title, genre, year) {
  let movie = {
    title: title,
    genre: genre,
    year: year,
  };
  movies.push(movie);
  console.log(`${title} ${genre} ${year} added!`);
}

// Function to show all movies
function showMovies() {
  console.log("Movie List:");
  movies.forEach(function (movie, index) {
    console.log(`${index + 1}. ${movie.title} ${movie.genre} ${movie.year}`);
  });
}

addMovie("UntilDawn", "horror", "2007");
addMovie("AWorkingMan", "action", "2025");
addMovie("TriggerWarning", "thriller", "2024");
showMovies();

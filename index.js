// Movie list array to store all movie objects
const movieList = [];

// Function to add a new movie
function addMovie(title, genre, year) {
  if (
    typeof title !== "string" ||
    typeof genre !== "string" ||
    typeof year !== "number"
  ) {
    console.log(
      "Invalid movie data. Please provide a string for title and genre, and a number for year."
    );
    return;
  }

  const movie = {
    title: title.trim(),
    genre: genre.trim(),
    year: year,
  };

  movieList.push(movie);
  console.log(
    `Movie added: ${movie.title} (${movie.year}) - Genre: ${movie.genre}`
  );
}

// Function to view all movies
function viewMovies() {
  if (movieList.length === 0) {
    console.log("No movies in the list.");
    return;
  }

  console.log("List of Movies:");
  movieList.forEach((movie, index) => {
    console.log(
      `${index + 1}. ${movie.title} (${movie.year}) - Genre: ${movie.genre}`
    );
  });
}

// Example usage:
addMovie("Wheel Of Time", "Sci-Fi", 2021);
addMovie("Maria", "Drama", 2021);
addMovie("KungfuPanda", "Animation", 2008);
addMovie("BloodParliament", "Documentary", 2025);

viewMovies();

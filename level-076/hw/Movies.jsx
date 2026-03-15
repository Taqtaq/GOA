import Movie from "./Movie";

function Movies({ movies }) {
  return (
    <div>
      <h1>Movies List</h1>

      {movies.map((movie) => (
        <Movie key={movie.id} id={movie.id} movies={movies} />
      ))}
    </div>
  );
}

export default Movies;

function Movie({ id, movies }) {

  const movie = movies.find((m) => m.id === id);

  if (!movie) return null;

  return (
    <div style={{border: "1px solid gray", margin: "10px", padding: "10px"}}>
      <h2>{movie.name}</h2>
      <p>{movie.description}</p>
      <p>Rating: {movie.rating}</p>
      <img src={movie.image} alt={movie.name} />
    </div>
  );
}

export default Movie;

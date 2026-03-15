function Movies({ movies }) {
  return (
    <div>
      <h1>Movies List</h1>
      {movies.map((movie) => (
        <div 
          key={movie.id} 
          style={{border: "1px solid gray", margin: "10px", padding: "10px"}}
        >
          <h2>{movie.name}</h2>
          <p>{movie.description}</p>
          <img src={movie.image} alt={movie.name} />
        </div>
      ))}
    </div>
  );
}

export default Movies;

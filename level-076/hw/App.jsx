import Movies from "./Movies";


function App() {
  
  
  const movies = [
    { id: 1, name: "Inception", description: "Mind-bending thriller", rating: 9, image: "https://via.placeholder.com/150" },
    { id: 2, name: "The Matrix", description: "Sci-fi classic", rating: 10, image: "https://via.placeholder.com/150" },
    { id: 3, name: "Avatar", description: "Epic adventure", rating: 8, image: "https://via.placeholder.com/150" },
    { id: 4, name: "Titanic", description: "Romantic drama", rating: 9, image: "https://via.placeholder.com/150" },
    { id: 5, name: "Interstellar", description: "Space exploration", rating: 10, image: "https://via.placeholder.com/150" },
  ];

  return (
    <div>
      <Movies movies={movies} />
    </div>
  );
}

export default App;

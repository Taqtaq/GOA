import Movies from './components/Movies.jsx';

function App() {
  const movies = [
    { id: 1, name: "Inception", description: "Mind-bending thriller", image: "https://via.placeholder.com/150" },
    { id: 2, name: "The Matrix", description: "Sci-fi classic", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Avatar", description: "Epic adventure", image: "https://via.placeholder.com/150" },
    { id: 4, name: "Titanic", description: "Romantic drama", image: "https://via.placeholder.com/150" },
    { id: 5, name: "Interstellar", description: "Space exploration", image: "https://via.placeholder.com/150" },
  ];

  return (
    <div>
      <Movies movies={movies} />
    </div>
  );
}

export default App;

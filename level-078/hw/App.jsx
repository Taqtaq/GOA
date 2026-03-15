import Songs from './Songs.jsx';

function App() {
  const songs = [
    { title: "Shape of You", artist: "Ed Sheeran", year: 2017 },
    { title: "Perfect", artist: "Ed Sheeran", year: 2017 },
    { title: "Blinding Lights", artist: "The Weeknd", year: 2019 },
    { title: "Starboy", artist: "The Weeknd", year: 2016 },
    { title: "Thinking Out Loud", artist: "Ed Sheeran", year: 2014 },
  ];

  return (
    <div>
      <Songs songs={songs} favoriteArtist="Ed Sheeran" />
    </div>
  );
}

export default App;

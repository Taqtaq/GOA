function Songs({ songs, favoriteArtist }) {
  const favoriteSongs = songs.filter(song => song.artist === favoriteArtist);

  return (
    <div>
      <h1>My Favorite Songs by {favoriteArtist}</h1>
      {favoriteSongs.map((song, index) => (
        <div key={index} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
          <h2>{song.title}</h2>
          <p>Artist: {song.artist}</p>
          <p>Year: {song.year}</p>
        </div>
      ))}
    </div>
  );
}

export default Songs;

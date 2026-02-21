class Playlist {
  // სიმღერების მასივი
  constructor() {
    this.songs = [];
  }

  // სიმღერის დამატება მასივში
  addSong(song) {
    if (song.trim() === "") return;
    this.songs.push(song);
  }

  // სიმღერის წაშლა მასივიდან
  deleteSong(song) {
    this.songs = this.songs.filter(s => s !== song);
  }

  // სიმღერების ჩვენება string-ის სახით
  showSongs() {
    if (this.songs.length === 0) {
      return "Playlist ცარიელია";
    }
    return this.songs.join(", ");
  }
}

// Playlist ობიექტის შექმნა
const playlist = new Playlist();

// HTML ელემენტების მიღება
const songInput = document.getElementById("songInput");
const addBtn = document.getElementById("addBtn");
const deleteBtn = document.getElementById("deleteBtn");
const showBtn = document.getElementById("showBtn");
const output = document.getElementById("output");

// დამატების ღილაკის ლოგიკა
addBtn.addEventListener("click", () => {
  playlist.addSong(songInput.value);
  output.textContent = playlist.showSongs();
  songInput.value = "";
});

// წაშლის ღილაკის ლოგიკა
deleteBtn.addEventListener("click", () => {
  playlist.deleteSong(songInput.value);
  output.textContent = playlist.showSongs();
  songInput.value = "";
});

// ჩვენების ღილაკის ლოგიკა
showBtn.addEventListener("click", () => {
  output.textContent = playlist.showSongs();
});

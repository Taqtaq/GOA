(() => {
  const STORAGE_KEY = "music_app_v1";

  const musicForm = document.getElementById("musicForm");
  const formTitle = document.getElementById("formTitle");
  const titleInput = document.getElementById("titleInput");
  const artistInput = document.getElementById("artistInput");
  const saveBtn = document.getElementById("saveBtn");
  const cancelBtn = document.getElementById("cancelBtn");
  const messageEl = document.getElementById("message");

  const musicList = document.getElementById("musicList");
  const emptyState = document.getElementById("emptyState");
  const countBadge = document.getElementById("countBadge");

  let tracks = loadTracks();
  let editingId = null;

  render();

  // ფორმის submit: დამატება ან განახლება
  musicForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = titleInput.value.trim();
    const artist = artistInput.value.trim();

    if (!title || !artist) {
      showMessage("Title and artist are required.", "err");
      return;
    }

    if (editingId === null) {
      addTrack(title, artist);
      showMessage("Track added.", "ok");
    } else {
      const ok = updateTrack(editingId, title, artist);
      showMessage(ok ? "Track updated." : "Track not found.", ok ? "ok" : "err");
    }

    saveTracks();
    resetForm();
    render();
  });

  // რედაქტირების გაუქმება
  cancelBtn.addEventListener("click", () => {
    resetForm();
    showMessage("Edit cancelled.", "ok");
  });

  // ახალი track-ის დამატება
  function addTrack(title, artist) {
    tracks.unshift({
      id: createId(),
      title,
      artist,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });
  }

  // track-ის წაშლა id-ის მიხედვით
  function deleteTrack(id) {
    tracks = tracks.filter(t => t.id !== id);
  }

  // track-ის განახლება id-ის მიხედვით
  function updateTrack(id, title, artist) {
    const idx = tracks.findIndex(t => t.id === id);
    if (idx === -1) return false;

    tracks[idx] = {
      ...tracks[idx],
      title,
      artist,
      updatedAt: Date.now(),
    };
    return true;
  }

  // UI-სთვის: რენდერი
  function render() {
    musicList.innerHTML = "";

    countBadge.textContent = String(tracks.length);
    emptyState.hidden = tracks.length !== 0;

    tracks.forEach((t) => {
      const card = document.createElement("div");
      card.className = "item";

      card.innerHTML = `
        <div class="top">
          <div>
            <h3>${escapeHtml(t.title)}</h3>
            <div class="artist">${escapeHtml(t.artist)}</div>
          </div>
          <div class="actions">
            <button class="btn secondary edit" type="button">Edit</button>
            <button class="btn secondary delete" type="button">Delete</button>
          </div>
        </div>
      `;

      card.querySelector(".edit").addEventListener("click", () => startEdit(t.id));
      card.querySelector(".delete").addEventListener("click", () => {
        if (editingId === t.id) resetForm();
        deleteTrack(t.id);
        saveTracks();
        showMessage("Track deleted.", "ok");
        render();
      });

      musicList.appendChild(card);
    });
  }

  // რედაქტირების დაწყება: input-ების შევსება არჩეული track-ით
  function startEdit(id) {
    const track = tracks.find(t => t.id === id);
    if (!track) {
      showMessage("Track not found.", "err");
      return;
    }

    editingId = track.id;
    formTitle.textContent = "Edit music";
    saveBtn.textContent = "Save";
    cancelBtn.hidden = false;

    titleInput.value = track.title;
    artistInput.value = track.artist;
    titleInput.focus();
    showMessage("Editing mode enabled.", "ok");
  }

  // ფორმის გასუფთავება და საწყისი მდგომარეობაზე დაბრუნება
  function resetForm() {
    editingId = null;
    formTitle.textContent = "Add music";
    saveBtn.textContent = "Add";
    cancelBtn.hidden = true;

    titleInput.value = "";
    artistInput.value = "";
  }

  // შეტყობინების ჩვენება
  function showMessage(text, type) {
    messageEl.textContent = text;
    messageEl.className = `message ${type}`;
  }

  // localStorage-დან მონაცემების ჩატვირთვა
  function loadTracks() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  // localStorage-ში მონაცემების შენახვა
  function saveTracks() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tracks));
  }

  // იდენტიფიკატორის შექმნა (მარტივი ვარიანტი)
  function createId() {
    return String(Date.now()) + "_" + Math.random().toString(16).slice(2);
  }

  // XSS-ისგან დაცვა UI-ში ჩასმისას
  function escapeHtml(str) {
    return String(str)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }
})();

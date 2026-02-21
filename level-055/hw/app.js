(() => {
  const STORAGE_KEY = "notes_app_v1";

  const searchInput = document.getElementById("searchInput");
  const clearSearchBtn = document.getElementById("clearSearchBtn");

  const noteForm = document.getElementById("noteForm");
  const formTitle = document.getElementById("formTitle");
  const titleInput = document.getElementById("titleInput");
  const textInput = document.getElementById("textInput");
  const saveBtn = document.getElementById("saveBtn");
  const cancelEditBtn = document.getElementById("cancelEditBtn");
  const messageEl = document.getElementById("message");

  const notesList = document.getElementById("notesList");
  const emptyState = document.getElementById("emptyState");
  const countBadge = document.getElementById("countBadge");

  let notes = loadNotes();
  let editingTitle = null;

  render();

  // ძებნა title-ის მიხედვით
  searchInput.addEventListener("input", render);

  // ძებნის ველის გასუფთავება
  clearSearchBtn.addEventListener("click", () => {
    searchInput.value = "";
    render();
  });

  // note-ის დამატება ან რედაქტირება
  noteForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = titleInput.value.trim();
    const text = textInput.value.trim();

    if (!title) {
      showMessage("Title is required.", "err");
      return;
    }

    // ახალი note-ის დამატება
    if (editingTitle === null) {
      if (findByTitle(title)) {
        showMessage("Title must be unique.", "err");
        return;
      }

      notes.unshift({
        title,
        text,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      });

      saveNotes();
      resetForm();
      showMessage("Note added successfully.", "ok");
      render();
      return;
    }

    // note-ის რედაქტირება
    if (title !== editingTitle && findByTitle(title)) {
      showMessage("A note with this title already exists.", "err");
      return;
    }

    const index = notes.findIndex(n => n.title === editingTitle);
    if (index === -1) {
      resetForm();
      render();
      return;
    }

    notes[index] = {
      ...notes[index],
      title,
      text,
      updatedAt: Date.now(),
    };

    saveNotes();
    resetForm();
    showMessage("Note updated successfully.", "ok");
    render();
  });

  // რედაქტირების გაუქმება
  cancelEditBtn.addEventListener("click", () => {
    resetForm();
    showMessage("Edit cancelled.", "ok");
  });

  function render() {
    const query = searchInput.value.toLowerCase();

    // title-ის მიხედვით ფილტრაცია
    const filteredNotes = query
      ? notes.filter(n => n.title.toLowerCase().includes(query))
      : notes;

    notesList.innerHTML = "";
    countBadge.textContent = notes.length;
    emptyState.hidden = notes.length !== 0;

    if (filteredNotes.length === 0 && notes.length !== 0) {
      notesList.innerHTML = "<p class='empty'>Nothing found.</p>";
      return;
    }

    filteredNotes.forEach(note => {
      const card = document.createElement("div");
      card.className = "note";

      card.innerHTML = `
        <h3>${note.title}</h3>
        <p>${note.text || "(empty)"}</p>
        <div class="meta">
          <button class="btn secondary edit">Edit</button>
          <button class="btn secondary delete">Delete</button>
        </div>
      `;

      card.querySelector(".edit").addEventListener("click", () => startEdit(note.title));
      card.querySelector(".delete").addEventListener("click", () => deleteNote(note.title));

      notesList.appendChild(card);
    });
  }

  // note-ის რედაქტირების დაწყება
  function startEdit(title) {
    const note = findByTitle(title);
    if (!note) return;

    editingTitle = note.title;
    formTitle.textContent = "Edit note";
    saveBtn.textContent = "Save";
    cancelEditBtn.hidden = false;

    titleInput.value = note.title;
    textInput.value = note.text;
  }

  // note-ის წაშლა title-ის მიხედვით
  function deleteNote(title) {
    notes = notes.filter(n => n.title !== title);

    if (editingTitle === title) {
      resetForm();
    }

    saveNotes();
    showMessage("Note deleted.", "ok");
    render();
  }

  // note-ის მოძებნა ზუსტი title-ით
  function findByTitle(title) {
    return notes.find(n => n.title === title) || null;
  }

  // ფორმის გასუფთავება და საწყის მდგომარეობაზე დაბრუნება
  function resetForm() {
    editingTitle = null;
    formTitle.textContent = "Create note";
    saveBtn.textContent = "Add";
    cancelEditBtn.hidden = true;
    titleInput.value = "";
    textInput.value = "";
  }

  // შეტყობინების ჩვენება
  function showMessage(text, type) {
    messageEl.textContent = text;
    messageEl.className = `message ${type}`;
  }

  // localStorage-დან note-ების ჩატვირთვა
  function loadNotes() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch {
      return [];
    }
  }

  // localStorage-ში note-ების შენახვა
  function saveNotes() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  }
})();

// 3) async/await vs .then (Explanation + examples)

// ✅ Main difference in short:
// - .then/.catch is Promise chaining (callbacks).
// - async/await is syntax sugar over Promises that lets you write async code like synchronous.
// - Both do the same job, but async/await is usually easier to read.
// - Error handling: .then -> .catch, async/await -> try/catch

// Example with .then:
function getDataThen() {
  return fetch("https://dummyjson.com/users")
    .then((res) => {
      if (!res.ok) throw new Error("Request failed");
      return res.json();
    })
    .then((data) => {
      console.log("THEN users:", data.users.length);
      return data;
    })
    .catch((err) => {
      console.error("THEN error:", err.message);
      throw err;
    });
}

// Example with async/await:
async function getDataAwait() {
  try {
    const res = await fetch("https://dummyjson.com/users");
    if (!res.ok) throw new Error("Request failed");
    const data = await res.json();
    console.log("AWAIT users:", data.users.length);
    return data;
  } catch (err) {
    console.error("AWAIT error:", err.message);
    throw err;
  }
}

// 4) Create 4 Promises (3 resolve after 5s, 1 reject after 3s) + Promise.all

const p1 = new Promise((resolve) => {
  setTimeout(() => resolve("success - message (p1)"), 5000);
});

const p2 = new Promise((resolve) => {
  setTimeout(() => resolve("success - message (p2)"), 5000);
});

const p3 = new Promise((resolve) => {
  setTimeout(() => resolve("success - message (p3)"), 5000);
});

const p4 = new Promise((_, reject) => {
  setTimeout(() => reject(new Error("rejected - message (p4)")), 3000);
});

// Using Promise.all (if one fails -> all fails)
Promise.all([p1, p2, p3, p4])
  .then((results) => {
    console.log("Promise.all resolved:", results);
  })
  .catch((err) => {
    console.log("Promise.all rejected:", err.message);
  });

// 5) Simple project: fetch users, render firstname/username/role/image
// + button filter/show admins (toggle).
// Use async/await (as required).
// ------------------------------------------------------------------
// 🟦 Minimal HTML structure (you can paste into index.html):
//
// <button id="toggleAdmins">filter/show admins</button>
// <div id="status"></div>
// <div id="users"></div>
//
// 🟦 Then paste this JS into script.js and connect in index.html.
// ------------------------------------------------------------------

const API_URL = "https://dummyjson.com/users";

const usersBox = document.getElementById("users");
const statusBox = document.getElementById("status");
const toggleBtn = document.getElementById("toggleAdmins");

// store fetched users here
let allUsers = [];
let showOnlyAdmins = false;

function userCard(user) {
  // Creating safe HTML (simple)
  return `
    <div style="display:flex; gap:12px; align-items:center; padding:10px; margin:10px 0; border:1px solid #ddd; border-radius:10px;">
      <img src="${user.image}" alt="${user.firstName}" width="60" height="60" style="border-radius:50%; object-fit:cover;" />
      <div>
        <div><b>firstname:</b> ${user.firstName}</div>
        <div><b>username:</b> ${user.username}</div>
        <div><b>role:</b> ${user.role}</div>
      </div>
    </div>
  `;
}

function renderUsers(users) {
  if (!users.length) {
    usersBox.innerHTML = `<p>No users found.</p>`;
    return;
  }
  usersBox.innerHTML = users.map(userCard).join("");
}

function getVisibleUsers() {
  if (!showOnlyAdmins) return allUsers;
  return allUsers.filter((u) => u.role === "admin");
}

async function loadUsers() {
  statusBox.textContent = "Loading...";
  usersBox.innerHTML = "";

  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("Failed to fetch users");

    const data = await res.json();

    // dummyjson returns { users: [...] }
    allUsers = data.users || [];

    statusBox.textContent = `Loaded: ${allUsers.length} users`;
    renderUsers(getVisibleUsers());
  } catch (err) {
    statusBox.textContent = "Error!";
    usersBox.innerHTML = `<p style="color:red;">${err.message}</p>`;
  }
}

toggleBtn.addEventListener("click", () => {
  showOnlyAdmins = !showOnlyAdmins;

  // If you want button text to change:
  toggleBtn.textContent = showOnlyAdmins ? "show all users" : "filter/show admins";

  renderUsers(getVisibleUsers());
});

// initial load
loadUsers();
const usersDiv = document.getElementById("users");
const searchInput = document.getElementById("search");

let allUsers = [];

// load users
async function getUsers() {
  const res = await fetch("https://dummyjson.com/users");
  const data = await res.json();

  allUsers = data.users;

  renderUsers(allUsers);
}

// show users
function renderUsers(users) {
  usersDiv.innerHTML = "";

  users.forEach(user => {
    usersDiv.innerHTML += `
      <div>
        <h3>${user.firstName} ${user.lastName}</h3>
        <p>${user.username}</p>
        <img src="${user.image}" width="80">
      </div>
    `;
  });
}

// search
searchInput.addEventListener("input", () => {

  const value = searchInput.value.toLowerCase().trim();

  const filteredUsers = allUsers.filter(user =>
    user.firstName.toLowerCase() === value
  );

  renderUsers(filteredUsers);

});

getUsers();
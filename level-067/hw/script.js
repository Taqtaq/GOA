// 1) Node.js modules
// A module in Node.js is a reusable piece of code.
// Modules help organize code into separate files or use built-in tools.

// const os = require("os"); // built-in Node.js module

// // The "os" module provides information about the operating system
// console.log("Operating System:", os.platform());
// console.log("CPU Architecture:", os.arch());
// console.log("Total Memory:", os.totalmem());

// 2) npm (Node Package Manager)
// npm is a tool that comes with Node.js.
// It is used to install libraries (packages) and manage project dependencies.

// Example commands (run in terminal):

// install a package
// npm install axios

// create project configuration file
// npm init

// install all dependencies from package.json
// npm install

//3
const userDiv = document.getElementById("user");

async function getRandomUser() {
  try {

    // first fetch -> get all users
    const res = await fetch("https://dummyjson.com/users");
    const data = await res.json();

    const users = data.users;

    // get random user from array
    const randomIndex = Math.floor(Math.random() * users.length);
    const randomUser = users[randomIndex];

    // second fetch -> request this specific user
    const res2 = await fetch(`https://dummyjson.com/users/${randomUser.id}`);
    const user = await res2.json();

    userDiv.innerHTML = `
      <h2>${user.firstName} ${user.lastName}</h2>
      <p>Username: ${user.username}</p>
      <p>Role: ${user.role}</p>
      <img src="${user.image}" width="100">
    `;

  } catch (error) {
    console.log("Error:", error);
  }
}

getRandomUser();

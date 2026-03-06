const form = document.getElementById('formElement');
const tbody = document.getElementById('tbody');

/*
localStorage is a Web Storage API.
It allows us to store data in the browser.
Data is saved as key-value pairs and persists even after page reload.
Data is stored as strings.
*/

let products = JSON.parse(localStorage.getItem('products')) || [];
// getItem() -> gets data from localStorage by key
// JSON.parse() -> converts string back to JavaScript object
// If there is no data, we use empty array []

// setItem() -> saves data in localStorage (key, value)
// JSON.stringify() -> converts object/array into string

const saveToLocalStorage = () => {
    localStorage.setItem('products', JSON.stringify(products));
};

const addItem = (product) => {
    const exists = products.find((obj) => obj.name === product.name);

    if (exists) {
        alert('The product name already exists!');
        return;
    }

    products.push(product);
    saveToLocalStorage(); // Save after adding
};

const deleteItem = (id) => {
    const productIndex = products.findIndex((product) => product.id === id);

    if (productIndex === -1) {
        alert('Product does not exist with the given id');
        return;
    }

    products.splice(productIndex, 1);
    saveToLocalStorage(); // Save after deleting
    renderProductInTable();
};

const renderProductInTable = () => {
    tbody.innerHTML = '';

    products.forEach(product => {
        const tr = document.createElement('tr');

        tr.innerHTML = `
            <td>${product.name}</td>
            <td>${product.id}</td>
            <td><button onclick="deleteItem(${product.id})">Delete</button></td>
        `;

        tbody.appendChild(tr);
    });
};

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const productName = e.target.productName.value;

    const product = {
        name: productName,
        id: Date.now()
    };

    addItem(product);
    renderProductInTable();

    e.target.reset();
});

renderProductInTable();

//2
/*
===============================
SYNCHRONOUS VS ASYNCHRONOUS
===============================

Synchronous code runs line by line.
Each task waits for the previous one to finish.

Example (real life):
If you go to a shop and wait in line,
you must wait until the person before you finishes.

Example (programming):
console.log("1");
console.log("2");
console.log("3");
Runs in exact order.

Asynchronous code allows tasks to run without blocking other tasks.

Example (real life):
You order food at a restaurant,
while waiting you talk to your friend.
You don’t just stand and do nothing.

Example (programming):
setTimeout(() => {
    console.log("Hello");
}, 2000);

console.log("World");

"World" prints first because setTimeout is asynchronous.
*/
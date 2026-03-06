// 1) Send request to https://fakestoreapi.com/products using async/await
// and handle rejected Promise using try/catch.
// Also demonstrate what happens if we remove await from fetch.

// async keyword makes a function return a Promise automatically.
// It also allows us to use the await keyword inside the function.
async function getProducts() {

  try {
    // await pauses the execution of the function until the Promise resolves.
    // Here we wait for the HTTP request to finish.
    const response = await fetch("https://fakestoreapi.com/products");

    // converting response to JSON (also async operation)
    const data = await response.json();

    console.log("Products:", data);

  } catch (error) {
    // try/catch is used to catch errors from async operations
    // If fetch fails or something breaks in try block,
    // execution jumps here and prevents the program from crashing.
    console.error("Error while fetching products:", error);
  }

}

getProducts();


// ----------------------------------------------------------------------
// Example with a forced mistake (remove await from fetch)
// This shows why await is important.
// ----------------------------------------------------------------------

async function getProductsWithError() {

  try {

    // Missing await on purpose
    // fetch returns a Promise, not the actual response yet.
    const response = fetch("https://fakestoreapi.com/products");

    // This will throw an error because response is still a Promise
    // and Promises do not have a .json() method directly.
    const data = await response.json();

    console.log(data);

  } catch (error) {
    console.error("Forced error example:", error);
  }

}

getProductsWithError();


/*
async/await
async ფუნქცია გვაძლევს საშუალებას ასინქრონული კოდი დავწეროთ ისე,
თითქოს ჩვეულებრივი სინქრონული კოდია.
await აჩერებს ფუნქციის შესრულებას სანამ Promise დასრულდება.

try/catch
try ბლოკში ვწერთ იმ კოდს რომელიც შეიძლება შეცდომას გამოიწვიოს.
თუ შეცდომა მოხდა, კონტროლი გადავა catch ბლოკში და შეგვიძლია
შეცდომის დამუშავება ისე რომ პროგრამა არ "დაეცეს".

თუ await არ გამოვიყენებთ fetch-ზე, მაშინ response იქნება Promise,
და არა რეალური პასუხი. ამის გამო response.json() გამოიწვევს შეცდომას.
*/
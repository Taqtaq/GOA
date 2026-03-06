// Create a promise called promisedReturn
let promisedReturn = new Promise(function (resolve, reject) {

    // Generate random number: 0 or 1
    let randomNumber = Math.round(Math.random());

    // If random number is 1 -> resolve
    if (randomNumber === 1) {
        resolve("Yeee i survived as i promised");
    } else {
        // If random number is 0 -> reject
        reject("No i died because of low food");
    }
});

// Handle the promise result
promisedReturn
    .then(function (message) {
        console.log(message);
    })
    .catch(function (error) {
        console.log(error);
    });
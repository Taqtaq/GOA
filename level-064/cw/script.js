function sweapFloor() {
    return new Promise(function (resolve, reject) {

        // setTimeout is used to simulate time passing (like waiting to finish a task)
        setTimeout(function () {

            // We check if we have enough cleaning supplies (water/soap/etc.)
            let hasEnoughSupplies = true; // change to false to test reject

            if (hasEnoughSupplies) {
                // resolve = success (task completed)
                resolve("Success: Floor is clean, I had enough supplies.");
            } else {
                // reject = failure (task could not be completed)
                reject("Fail: Not enough water/soap, I couldn't clean the floor.");
            }

        }, 2000); // 2 seconds delay to simulate cleaning time
    });
}

// Call the function and handle the promise
sweapFloor()
    .then(function (result) {
        // then() runs ONLY if resolve() was called
        // Real life: you finished cleaning, so you tell everyone "It's done!"
        console.log(result);
    })
    .catch(function (error) {
        // catch() runs ONLY if reject() was called
        // Real life: you failed to clean, so you explain why it didn't work
        console.log(error);
    })
    .finally(function () {
        // finally() runs ALWAYS (no matter resolve or reject)
        // Real life: after trying to clean, you still wash your hands / put tools away
        console.log("Finally: Cleaning attempt finished (success or fail).");
    });
// ==========================
// 1
// ==========================

// Promise არის ობიექტი რომელიც გვპირდება,
// რომ ოპერაცია მომავალში შესრულდება ან失败დება.
// აქვს 2 მდგომარეობა:
// resolve → წარმატება
// reject → წარუმატებლობა
// რეალურ ცხოვრებაში: ვიღაცამ დაგპირდა მოსვლას.
// ან მოვა (success) ან არ მოვა (fail).

let myPromise = new Promise(function(resolve, reject) {

    let friendCame = true;

    if (friendCame) {
        resolve("My friend came as promised");
    } else {
        reject("My friend did not come");
    }

});

myPromise
    .then(function(message) { // მუშაობს როცა resolve მოხდება
        console.log(message);
    })
    .catch(function(error) { // მუშაობს როცა reject მოხდება
        console.log(error);
    });


// ==========================
// 2
// ==========================

let number = 7;

let checkOdd = new Promise(function(resolve, reject) {

    // ვამოწმებთ არის თუ არა რიცხვი კენტი
    if (number % 2 === 1) {
        resolve("The number is odd");
    } else {
        reject("The number is even");
    }

});

checkOdd
    .then(function(message) {
        console.log(message);
    })
    .catch(function(error) {
        console.log(error);
    });


// ==========================
// 3
// ==========================

let orderNumber = "45678";

let checkOrder = new Promise(function(resolve, reject) {

    // ვამოწმებთ იწყება თუ არა 4-ით
    if (orderNumber.startsWith("4")) {
        resolve("Your order is ready");
    } else {
        reject("This is not your order or Your order is not ready yet");
    }

});

checkOrder
    .then(function(message) {
        console.log(message);
    })
    .catch(function(error) {
        console.log(error);
    });


// ==========================
// 4
// ==========================

let weather = "sunny";

let checkWeather = new Promise(function(resolve, reject) {

    // ვამოწმებთ ამინდს
    if (weather === "sunny") {
        resolve("Today is a sunny day, i can go out and spend time with my friends");
    } else {
        reject("Today is not a sunny day, so i am not going out");
    }

});

checkWeather
    .then(function(message) {
        console.log(message);
    })
    .catch(function(error) {
        console.log(error);
    });
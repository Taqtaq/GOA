// ==========================
// 1) JSON + fetch (კომენტარებით)
// ==========================

// JSON არის ტექსტური ფორმატი მონაცემების გადასაცემად.
// ჰგავს JS ობიექტს, მაგრამ არის უბრალოდ სტრინგი (ტექსტი).
// ხშირად სერვერი გვიგზავნის JSON-ს და ჩვენ ვკითხულობთ როგორც ობიექტს.

// ცხოვრებისეული მაგალითი:
// JSON არის როგორც “შევსებული ფორმა ქაღალდზე” — მონაცემები წერია მარტივად,
// რომ სხვამაც წაიკითხოს და კომპიუტერმაც.

// პროგრამული მაგალითი:
let userJsonText = '{"name":"Nika","age":20}'; // JSON ტექსტი
let userObject = JSON.parse(userJsonText);     // JSON -> ობიექტი
console.log(userObject.name);                  // Nika

// fetch არის ფუნქცია რომელიც აგზავნის HTTP მოთხოვნას (მაგ: API-ზე)
// და აბრუნებს Promise-ს.
// ანუ: “მივმართე სერვერს და პასუხს მოგვიანებით მივიღებ”.

// ცხოვრებისეული პარალელი:
// fetch არის როგორც “შეკვეთის გაკეთება ტელეფონით”,
// პასუხს მაშინვე არ იღებ — ელოდები (Promise).

// ==========================
// 2) Promise-ზე რამდენიმე მარტივი მაგალითი
// ==========================

// Example A: Password check
function checkPassword(pass) {
    return new Promise(function (resolve, reject) {
        // თუ პაროლი სწორია -> resolve
        if (pass === "1234") {
            resolve("Login success");
        } else {
            reject("Wrong password");
        }
    });
}

checkPassword("1234")
    .then(function (msg) { console.log(msg); })
    .catch(function (err) { console.log(err); });


// Example B: Age check
function checkAge(age) {
    return new Promise(function (resolve, reject) {
        // თუ 18+ -> resolve
        if (age >= 18) {
            resolve("You can enter");
        } else {
            reject("You are too young");
        }
    });
}

checkAge(16)
    .then(function (msg) { console.log(msg); })
    .catch(function (err) { console.log(err); });


// Example C: Simple timer (simulation)
function wait2Seconds() {
    return new Promise(function (resolve) {
        // ველოდებით 2 წამს და მერე ვაბრუნებთ პასუხს
        setTimeout(function () {
            resolve("2 seconds passed");
        }, 2000);
    });
}

wait2Seconds().then(function (msg) {
    console.log(msg);
});


// ==========================
// BONUS 3) FakeStore API + fetch (მონაცემების წამოღება)
// ==========================

fetch("https://fakestoreapi.com/products")
    .then(function (response) {
        // response.json() აბრუნებს Promise-ს და გვაძლევს JSON მონაცემებს
        return response.json();
    })
    .then(function (products) {
        // products არის მასივი (array) პროდუქტის ობიექტებით
        console.log(products);        // ყველა პროდუქტი
        console.log(products[2]);     // მესამე პროდუქტი (index 2)
    })
    .catch(function (error) {
        console.log("Error:", error);
    });
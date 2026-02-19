// =======================
// 2) messy string გასუფთავება და Capitalize
// =======================

let messy = prompt("შეიყვანე messy string, მაგ: '      heLLo WoRld       '");

let cleaned = messy
  .trim() // მოაშორებს თავიდან და ბოლოდან space-ებს
  .toLowerCase()
  .split(/\s+/) // სიტყვებად დაყოფა
  .map(word => word[0].toUpperCase() + word.slice(1)) // პირველი ასო დიდად
  .join(" ");

console.log("Cleaned string:", cleaned); // Hello World


// =======================
// 3) წინადადების და სიტყვების შებრუნება
// =======================

function reverseSentence(sentence) {
  return sentence
    .split(" ") // სიტყვებად დაყოფა
    .map(word => word.split("").reverse().join("")) // თითოეული სიტყვის შებრუნება
    .reverse() // სიტყვების რიგის შებრუნება
    .join(" ");
}

console.log(reverseSentence("Hello My name is Nino"));


// =======================
// 4) products მასივი და შემოწმება
// =======================

let products = ["milk", "bread", "eggs", "cheese", "apple"];

let userProduct = prompt("შეიყვანე პროდუქტის სახელი:").toLowerCase();

if (products.includes(userProduct)) {
  console.log("The product is in products array");
} else {
  console.log("The product is not in products array");
}


// =======================
// 5) generateUsername ფუნქცია
// =======================

function generateUsername(username) {
  let clean = username.trim().replaceAll(" ", ""); // space-ების მოშორება
  let randomNum = Math.floor(Math.random() * 100) + 1; // 1-100 random
  return clean + randomNum;
}

console.log(generateUsername("   nino   gelashvili   "));


// =======================
// 6) passwords ფილტრაცია
// =======================

let passwords = ["hello", "pass123", "qwerty12", "abc", "Nino2026", "test!!", "longpass9"];

function filterPasswords(arr) {
  return arr.filter(p => p.length > 6 && /\d/.test(p)); // სიგრძე > 6 და ციფრი
}

console.log(filterPasswords(passwords));


// =======================
// 7) ჩაშენებული მასივები და indexing
// =======================

let groups = [
  ["Giorgi", "Mariam", "Dato"],
  ["Nino", "Ana", "Luka"],
  ["Saba", "Elene", "Tornike"]
];

let myName = "Nino";
let foundIndex = -1;

for (let i = 0; i < groups.length; i++) {
  if (groups[i].includes(myName)) {
    foundIndex = i;
    break;
  }
}

if (foundIndex !== -1) {
  console.log("ჩემი სახელი არის ამ მასივში:", groups[foundIndex]);
  console.log("index:", foundIndex);
} else {
  console.log("ჩემი სახელი ვერ მოიძებნა");
}

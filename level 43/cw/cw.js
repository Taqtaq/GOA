// 1) დავალება: სხვადასხვა ტიპების მასივიდან მხოლოდ string ტიპის ელემენტების ამოღება

const mixed = ["hello", 10, true, "world", null, undefined, { a: 1 }, "JS", 3.14];

const onlyStrings = [];
for (let i = 0; i < mixed.length; i++) {
  if (typeof mixed[i] === "string") {
    onlyStrings.push(mixed[i]);
  }
}

console.log("onlyStrings:", onlyStrings);


// 2) დავალება: scope / var (კომენტარებით)

// Scope არის ადგილი/გარემო, სადაც ცვლადი ჩანს და შეიძლება გამოყენება.
// JS-ში ძირითადი scope-ები:
// 1) Global Scope - ცვლადი ჩანს ყველგან
// 2) Function Scope - ცვლადი ჩანს მხოლოდ ფუნქციის შიგნით
// 3) Block Scope (let/const) - ცვლადი ჩანს მხოლოდ { } ბლოკის შიგნით

// Global Scope მაგალითი:
const globalX = 5;
// console.log(globalX) // ყველგან ჩანს

function testScope() {
  // Function Scope მაგალითი:
  const insideFn = 10;
  console.log("insideFn:", insideFn);
}
testScope();
// console.log(insideFn) // შეცდომა: ფუნქციის გარეთ არ ჩანს

if (true) {
  // Block Scope მაგალითი:
  let blockY = 20;
  const blockZ = 30;
  console.log("blockY:", blockY, "blockZ:", blockZ);
}
// console.log(blockY) // შეცდომა: ბლოკის გარეთ არ ჩანს

// რატომ არის var ცუდი პრაქტიკა?
// 1) var არის function-scoped (არა block-scoped) => შეიძლება მოულოდნელად "გადმოვიდეს" ბლოკიდან
// 2) var-ს აქვს hoisting და მნიშვნელობა შეიძლება იყოს undefined სანამ მიენიჭება
// 3) ხშირად იწვევს ბაგებს და გაუგებრობას, ამიტომ გამოიყენეთ let/const

if (true) {
  var a = 1; // var ბლოკს არ ემორჩილება
}
console.log("var a:", a); // ჩანს გარეთაც (ესაა პრობლემა)


// 3) დავალება: prompt-ით 5 რიცხვის შეტანა, მასივში დამატება და ჯამი (reduce)

// reduce არის მეთოდი, რომელიც მასივს "ამუშავებს" და აბრუნებს ერთ შედეგს (მაგ: ჯამს).
// accumulator აგროვებს შედეგს თითოეულ ნაბიჯზე.

const numbers = [];

for (let i = 0; i < 5; i++) {
  const input = prompt(`შეიყვანე რიცხვი (${i + 1}/5):`);
  const num = Number(input); // სტრინგიდან რიცხვად გადაყვანა
  numbers.push(num);
}

const sum = numbers.reduce((acc, current) => acc + current, 0);
console.log("numbers:", numbers);
console.log("sum:", sum);


// 4) დავალება: პირველივე უარყოფითი რიცხვის პოვნა

const nums = [5, 2, 0, 7, -3, -10, 4];

// find აბრუნებს პირველ ელემენტს, რომელიც აკმაყოფილებს პირობას (ან undefined-ს)
const firstNegative = nums.find(n => n < 0);

console.log("firstNegative:", firstNegative);

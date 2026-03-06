// npm რა არის?
// npm არის Node Package Manager.
// მისი დახმარებით ვაინსტალირებთ ბიბლიოთეკებს/პაკეტებს, ვმართავთ პროექტის დამოკიდებულებებს
// და უფრო სწრაფად ვამატებთ უკვე დაწერილ ფუნქციონალს ჩვენს პროექტში.

// package.json რა არის?
// ეს არის პროექტის მთავარი კონფიგურაციის ფაილი,
// სადაც ინახება პროექტის სახელი, ვერსია, script-ები და dependencies.

// package-lock.json რა არის?
// ეს ფაილი ზუსტად აფიქსირებს რომელი ვერსიები დაინსტალირდა,
// რათა სხვა გარემოშიც იგივე dependency tree მივიღოთ.

// რატომ არის კარგი პრაქტიკა npm/module-ის გამოყენება?
// რადგან თავიდან აღარ გვიწევს ყველაფრის ხელით დაწერა,
// კოდი უფრო ორგანიზებული ხდება, მარტივია გაზიარება,
// დამოკიდებულებების მართვა უფრო მოსახერხებელია
// და პროექტი უფრო მასშტაბირებადი ხდება.

// ES Modules-ში ვიყენებთ import/export-ს.
// CommonJS-ში ვიყენებთ require/module.exports-ს.
// ამ დავალებაში ვიყენებთ CommonJS-ს.

const {
  sumOfNumbers,
  factorial,
  guessNum,
  returnLengthOfArr,
} = require("./functions");

const randomQuotes = require("random-quotes");

// Test functions
console.log(sumOfNumbers([1, 2, 3, 4, 5])); // 15
console.log(factorial(5)); // 120
console.log(guessNum(7)); // Random result
console.log(returnLengthOfArr([10, 20, 30, 40])); // 4

// Use random-quotes library
console.log(randomQuotes.default());
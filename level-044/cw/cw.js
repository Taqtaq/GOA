// 1) Object.keys() და Object.values() ტესტი

const car = {
  brand: "Toyota",
  year: 2020,
  electric: false,
};

// Object.keys() აბრუნებს ობიექტის ყველა key-ს მასივად
console.log("keys:", Object.keys(car));

// Object.values() აბრუნებს ობიექტის ყველა value-ს მასივად
console.log("values:", Object.values(car));


// 2) for...of ციკლი მასივზე (array iteration)

const arr = [10, 20, 30, 40];

// for...of გადაუვლის მასივის მნიშვნელობებს (values)
for (const item of arr) {
  console.log("for...of item:", item);
}


// 3) for...in ციკლი ობიექტზე (object properties iteration)

// for...in გადაუვლის ობიექტის key-ებს (property names)
for (const key in car) {
  console.log("for...in:", key, car[key]);
}


// 🟢 Task 1 (Easy)
// დავალება: ფუნქციამ მიიღოს მასივი და do...while-ით დაბეჭდოს ყველა ელემენტი

function printArrayDoWhile(numbers) {
  let i = 0;

  // do...while მინიმუმ ერთხელ მაინც სრულდება
  do {
    console.log(numbers[i]);
    i++;
  } while (i < numbers.length);
}

printArrayDoWhile([1, 2, 3]);


// 🟡 Task 2 (Easy–Medium)
// დავალება: do...while-ით დაითვალოს მხოლოდ დადებითი რიცხვების ჯამი (>0)

function sumPositiveDoWhile(numbers) {
  let i = 0;
  let sum = 0;

  do {
    if (numbers[i] > 0) {
      sum += numbers[i];
    }
    i++;
  } while (i < numbers.length);

  return sum;
}

console.log("sumPositive:", sumPositiveDoWhile([5, -2, 0, 7, -1])); // 12


// 🔴 Task 3 (Hard)
// დავალება: 2D მასივი -> 1D მასივი (მხოლოდ > საშუალოზე), მხოლოდ do...while
// შეზღუდვები: average ხელით, არ გამოიყენოთ flat/reduce, მინ. 2 do...while, არ შეცვალოთ original

function aboveAverageFlattenDoWhile(matrix) {
  // 1) ჯერ დავთვალოთ sum და count (საშუალოსთვის)
  let row = 0;
  let sum = 0;
  let count = 0;

  do {
    let col = 0;

    do {
      sum += matrix[row][col];
      count++;
      col++;
    } while (col < matrix[row].length);

    row++;
  } while (row < matrix.length);

  const avg = sum / count;

  // 2) ახლა შევქმნათ ახალი მასივი მხოლოდ იმ რიცხვებით, რომლებიც > avg
  const result = [];
  row = 0;

  do {
    let col = 0;

    do {
      const value = matrix[row][col];
      if (value > avg) {
        result.push(value);
      }
      col++;
    } while (col < matrix[row].length);

    row++;
  } while (row < matrix.length);

  return result;
}

const matrix = [
  [1, 2, 3],
  [10, -5, 6],
];

console.log("aboveAverage:", aboveAverageFlattenDoWhile(matrix));


// 5) დავალება: filter ფუნქცია ლუწი რიცხვებისთვის (even numbers)

function filterEven(numbers) {
  const result = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      result.push(numbers[i]);
    }
  }

  return result;
}

console.log("evens:", filterEven([1, 2, 3, 4, 5, 6])); // [2,4,6]


// 6) დავალება: ზოგადი filter (callback მეორე პარამეტრად) + persons + age>=18 checker

// ზოგადი filter ფუნქცია
function filter(arr, checkFn) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (checkFn(arr[i]) === true) {
      result.push(arr[i]);
    }
  }

  return result;
}

// persons მასივი (მინიმუმ 5)
const persons = [
  { name: "Nika", lastname: "Gelashvili", age: 17 },
  { name: "Mariam", lastname: "Kiknadze", age: 22 },
  { name: "Giorgi", lastname: "Beridze", age: 18 },
  { name: "Ana", lastname: "Maisuradze", age: 15 },
  { name: "Dato", lastname: "Kapanadze", age: 30 },
];

// ფუნქცია, რომელიც ამოწმებს ასაკს >= 18
function isAdult(person) {
  return person.age >= 18;
}

const adults = filter(persons, isAdult);
console.log("adults persons:", adults);

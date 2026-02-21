// 2) Check if number exists in array
const numbers = [5, 10, 15, 20, 25];

function findNumInArr(userNumber) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === userNumber) {
      return "The number is in the array";
    }
  }
  return "The number is not in the array";
}

console.log(findNumInArr(15));
// 3) Add movie to array and print all movies
const movies = [];

const userMovie = "Inception"; // example input
movies.push(userMovie);

for (let i = 0; i < movies.length; i++) {
  console.log(movies[i]);
}
// 4) Sum function
function sum(a, b) {
  return a + b;
}

console.log(sum(5, 7));

// 5) Return text length
function returnLength(text) {
  return text.length;
}

console.log(returnLength("Hello world"));

// 6) User info sentence
const firstName = "Nino";
const lastName = "Gelashvili";
const age = 21;
const height = 170;
const city = "Tbilisi";

const sentence = `My name is ${firstName} ${lastName}, I am ${age} years old, ${height} cm tall and I live in ${city}.`;

console.log(sentence);

// 7) Reverse words in array
function reverseWords(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    let reversed = "";
    for (let j = arr[i].length - 1; j >= 0; j--) {
      reversed += arr[i][j];
    }
    result.push(reversed);
  }

  return result;
}

console.log(reverseWords(["Nino", "ExampleName"]));

// 8) Numbers from 1 to 100 divisible by 3
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}

// 9) Count letter B in text
function countLetterB(text) {
  let count = 0;

  for (let i = 0; i < text.length; i++) {
    if (text[i] === "B" || text[i] === "b") {
      count++;
    }
  }

  return count;
}

console.log(countLetterB("BubbleBee"));

//10
function filter_list(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      result.push(arr[i]);
    }
  }

  return result;
}


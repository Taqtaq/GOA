// 2) Words with index divisible by 2
const words = ["apple", "banana", "cherry", "date", "kiwi", "melon"];

for (let i = 0; i < words.length; i++) {
  if (i % 2 === 0) {
    console.log(words[i]);
  }
}

// 3) Password strength check
function checkPasswordStrength(password) {
  const hasPunctuation = /[^a-zA-Z0-9]/.test(password);
  const hasNumber = /\d/.test(password);

  if ((hasPunctuation && password.length > 6) || hasNumber) {
    return "Your password is strong";
  } else {
    return "Your password is weak";
  }
}

const userPassword = "hello@12";
console.log(checkPasswordStrength(userPassword));

// 4) Find the longest word in array
function findLongestWord(arr) {
  let longest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > longest.length) {
      longest = arr[i];
    }
  }

  return longest;
}

const words2 = ["car", "airplane", "train", "boat"];
console.log(findLongestWord(words2));

// 5) Capitalize first letter of name and surname
function capitalizeFullName(fullName) {
  const parts = fullName.trim().split(" ");
  const result = [];

  for (let i = 0; i < parts.length; i++) {
    const word = parts[i];
    if (word.length === 0) continue;

    const fixed = word[0].toUpperCase() + word.slice(1).toLowerCase();
    result.push(fixed);
  }

  return result.join(" ");
}

const userFullName = "NIno GVinJiLia";
console.log(capitalizeFullName(userFullName));

// 6) Sort numbers in ascending order
function sortAscending(nums) {
  const copy = nums.slice();
  copy.sort((a, b) => a - b);
  return copy;
}

const numbersArr = [10, 2, 33, 4, 25];
console.log(sortAscending(numbersArr));

// 7.1
function greet(name) {
  return `Hello, ${name} how are you doing today?`;
}
// 7.2
function findLongest(array) {
  return array.reduce((a, b) =>
    a.toString().length >= b.toString().length ? a : b
  );
}

// 8) BONUS: Count words in sentence
function countWords(sentence) {
  const trimmed = sentence.trim();
  if (trimmed === "") return 0;

  const words = trimmed.split(/\s+/);
  return words.length;
}

console.log(countWords("Hello world from JavaScript"));

// 2) Grade (if/else)
const score = 92; // 10-100

let grade;
if (score >= 90) grade = "A";
else if (score >= 80) grade = "B";
else if (score >= 70) grade = "C";
else if (score >= 60) grade = "D";
else grade = "F";

console.log("2) Score:", score, "Grade:", grade);

// 3) Grade (switch)
// switch is used to compare one value with many cases
// It is an alternative to multiple if/else when you check "value === case"
const score2 = 76;

let grade2;
switch (true) {
  case score2 >= 90:
    grade2 = "A";
    break;
  case score2 >= 80:
    grade2 = "B";
    break;
  case score2 >= 70:
    grade2 = "C";
    break;
  case score2 >= 60:
    grade2 = "D";
    break;
  default:
    grade2 = "F";
}
console.log("3) Score:", score2, "Grade:", grade2);

// 4) Same name OR age (logical operator)
const myName = "Alex";
const myAge = 20;

const userName = "Alex";
const userAge = 18;

// Use OR (||) to check if at least one condition is true
if (userName === myName || userAge === myAge) {
  console.log("4) We have the same name or age");
} else {
  console.log("4) We don't have the same name and age");
}

// 5) Age > 15 AND hasTicket === true
const age = 16;
const hasTicket = true;

// Use AND (&&) to require both conditions
if (age > 15 && hasTicket === true) {
  console.log("5) You can go in, and watch a movie");
} else {
  console.log("5) You can't go in");
}

// 6) Sum of numbers 1..100
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log("6) Sum 1..100 =", sum);

// 7) Numbers 100..1
let output = "";
for (let i = 100; i >= 1; i--) {
  output += i + (i === 1 ? "" : ", ");
}
console.log("7) 100..1:", output);

// 8) Print only even numbers from array
const nums = [3, 10, 7, 22, 9, 14, 18, 5];

console.log("8) Even numbers:");
for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 2 === 0) {
    console.log(nums[i]);
  }
}

// 9) Find the largest number in array
const nums2 = [5, 99, 12, 43, 101, 7];
let max = nums2[0];

for (let i = 1; i < nums2.length; i++) {
  if (nums2[i] > max) {
    max = nums2[i];
  }
}
console.log("9) Max number =", max);

// 10) BONUS: function that returns average of numbers in array
function average(arr) {
  // Handle empty array
  if (arr.length === 0) return 0;

  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total / arr.length;
}

console.log("10) Average =", average([10, 20, 30, 40]));

// =======================
// 2) filter() - 2 მაგალითი
// filter აბრუნებს ახალ მასივს, სადაც მხოლოდ true-ზე გამვლელი ელემენტები რჩება
// =======================

// --- მაგალითი 1: ლუწი რიცხვები ---
let nums = [1, 2, 3, 4, 5, 6, 7, 8];

let evens = nums.filter(n => n % 2 === 0); // მხოლოდ ლუწები
console.log("filter example 1 (evens):", evens); // [2,4,6,8]

// --- მაგალითი 2: სიტყვები რომლის სიგრძე >= 5 ---
let words = ["sun", "apple", "car", "banana", "hi", "world"];

let longWords = words.filter(w => w.length >= 5); // გრძელი სიტყვები
console.log("filter example 2 (length>=5):", longWords); // ["apple","banana","world"]


// =======================
// 3) map() - ინფორმაცია + მაგალითები
// map აბრუნებს ახალ მასივს იგივე სიგრძით, უბრალოდ ელემენტებს გარდაქმნის
// =======================

// --- მაგალითი 1: ყველა რიცხვს გავუზრდით 10-ით ---
let plusTen = nums.map(n => n + 10);
console.log("map example 1 (+10):", plusTen);

// --- მაგალითი 2: სიტყვების Capitalize ---
let capitalized = words.map(w => w[0].toUpperCase() + w.slice(1).toLowerCase());
console.log("map example 2 (capitalize):", capitalized);

// --- მაგალითი 3: ობიექტების მასივი -> სახელების მასივი ---
let users = [
  { name: "nino", age: 20 },
  { name: "gio", age: 17 },
  { name: "ana", age: 25 }
];

let namesOnly = users.map(u => u.name.toUpperCase());
console.log("map example 3 (names upper):", namesOnly);


// =======================
// manual map - საკუთარი map ფუნქცია
// ლოგიკა: ვქმნით ახალ მასივს, გავდივართ loop-ით და callback-ის შედეგს ვამატებთ
// =======================

function manualMap(arr, callback) {
  // ახალი მასივი შედეგებისთვის
  let result = [];

  // for loop-ით გავდივართ ყველა ელემენტზე
  for (let i = 0; i < arr.length; i++) {
    // callback იღებს: ელემენტს, ინდექსს, მთლიან მასივს
    result.push(callback(arr[i], i, arr));
  }

  // ვაბრუნებთ ახალ მასივს
  return result;
}

// manualMap ტესტი
let manualPlusTen = manualMap(nums, (n) => n + 10);
console.log("manualMap test (+10):", manualPlusTen);

let manualCap = manualMap(words, (w) => w.toUpperCase());
console.log("manualMap test (upper):", manualCap);


// =======================
// 4) reduce() - ინფორმაცია + 2 მაგალითი
// reduce "აკეცავს" მასივს ერთ მნიშვნელობად (რიცხვი/სტრინგი/ობიექტი...)
// accumulator - აგროვებს შედეგს
// =======================

// --- მაგალითი 1: რიცხვების ჯამი ---
let sum = nums.reduce((acc, cur) => acc + cur, 0); // 0 არის საწყისი acc
console.log("reduce example 1 (sum):", sum);

// --- მაგალითი 2: მაქსიმალური მნიშვნელობა ---
let maxNum = nums.reduce((acc, cur) => (cur > acc ? cur : acc), nums[0]);
console.log("reduce example 2 (max):", maxNum);


// =======================
// manual reduce - საკუთარი reduce ფუნქცია
// ლოგიკა:
// 1) თუ initialValue გვაქვს -> acc = initialValue და startIndex=0
// 2) თუ არ გვაქვს -> acc = arr[0] და startIndex=1
// 3) loop-ით ვაახლებთ acc-ს callback-ით
// =======================

function manualReduce(arr, callback, initialValue) {
  // ცარიელი მასივის დაცვა
  if (arr.length === 0 && initialValue === undefined) {
    throw new TypeError("Reduce of empty array with no initial value");
  }

  let acc;
  let startIndex;

  // თუ initialValue გადმოგვცა
  if (initialValue !== undefined) {
    acc = initialValue;
    startIndex = 0;
  } else {
    // თუ initialValue არ გვაქვს, პირველი ელემენტი ხდება acc
    acc = arr[0];
    startIndex = 1;
  }

  // გავდივართ ყველა ელემენტზე და ვაახლებთ accumulator-ს
  for (let i = startIndex; i < arr.length; i++) {
    // callback იღებს: acc, current, index, array
    acc = callback(acc, arr[i], i, arr);
  }

  return acc;
}

// manualReduce ტესტი (sum)
let manualSum = manualReduce(nums, (acc, cur) => acc + cur, 0);
console.log("manualReduce test (sum):", manualSum);

// manualReduce ტესტი (max)
let manualMax = manualReduce(nums, (acc, cur) => (cur > acc ? cur : acc));
console.log("manualReduce test (max):", manualMax);

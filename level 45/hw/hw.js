//1.0
// User კლასი (შაბლონი)
class User {
  // constructor ავტომატურად იძახება new-ის დროს
  constructor(name, age) {
    // this მიუთითებს კონკრეტულ ობიექტზე
    this.name = name;
    this.age = age;
  }

  // მეთოდი
  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old`;
  }
}

// new ქმნის ახალ ობიექტს User კლასიდან
let user1 = new User("Nino", 20);
let user2 = new User("Giorgi", 25);

//1.2
function validParentheses(str) {
  let balance = 0;

  for (let char of str) {
    if (char === "(") {
      balance++;
    } else if (char === ")") {
      balance--;
    }

    // If we close more than we open → invalid
    if (balance < 0) {
      return false;
    }
  }

  // All opened parentheses must be closed
  return balance === 0;
}
//2
function findOutlier(numbers) {
  // Determine majority (even or odd) using first 3 elements
  let evens = 0;
  let odds = 0;

  for (let i = 0; i < 3; i++) {
    if (numbers[i] % 2 === 0) {
      evens++;
    } else {
      odds++;
    }
  }

  // Majority is even
  if (evens > odds) {
    return numbers.find(n => n % 2 !== 0);
  }

  // Majority is odd
  return numbers.find(n => n % 2 === 0);
}
//3
function sortArray(array) {
  // 1) Take only odd numbers and sort them
  const odds = array
    .filter(n => n % 2 !== 0)
    .sort((a, b) => a - b);

  // 2) Replace odd positions with sorted odds
  return array.map(n =>
    n % 2 !== 0 ? odds.shift() : n
  );
}
//4
function removeParentheses(str) {
  let result = "";
  let depth = 0;

  for (let char of str) {
    if (char === "(") {
      depth++; // შევდივართ ფრჩხილებში
    } else if (char === ")") {
      depth--; // გამოვდივართ ფრჩხილებიდან
    } else if (depth === 0) {
      // ვამატებთ მხოლოდ მაშინ, როცა ფრჩხილებში არ ვართ
      result += char;
    }
  }

  return result;
}

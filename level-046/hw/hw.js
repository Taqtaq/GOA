// ====================== 2 ======================
// Person კლასი
class Person {
  constructor(name, age) {
    // მომხმარებლის სახელი
    this.name = name;
    // მომხმარებლის ასაკი
    this.age = age;
  }

  // მომხმარებლის ინფორმაციის გამოტანა კონსოლში
  getUserInfo() {
    console.log(`Hello my name is ${this.name} and i am ${this.age} years old`);
  }
}

// სამი მომხმარებლის ობიექტის შექმნა
const person1 = new Person('Nika', 19);
const person2 = new Person('Anna', 22);
const person3 = new Person('Gio', 25);

// მეთოდის გამოძახება
person1.getUserInfo();
person2.getUserInfo();
person3.getUserInfo();


// ====================== 3 ======================
// Rectangle კლასი
class Rectangle {
  constructor(width, height) {
    // მართკუთხედის სიგანე
    this.width = width;
    // მართკუთხედის სიმაღლე
    this.height = height;
  }

  // მართკუთხედის ფართობის გამოთვლა
  area() {
    return this.width * this.height;
  }
}

const rect = new Rectangle(5, 10);
console.log(rect.area());


// ====================== 4 ======================
// Student კლასი
class Student {
  constructor(name, score) {
    // სტუდენტის სახელი
    this.name = name;
    // სტუდენტის ქულა
    this.score = score;
  }

  // ამოწმებს ჩააბარა თუ არა სტუდენტმა
  passed() {
    if (this.score > 70) {
      return 'This student passed the test';
    } else {
      return 'This student did not pass the test';
    }
  }
}

const student1 = new Student('Nika', 85);
const student2 = new Student('Luka', 60);

console.log(student1.passed());
console.log(student2.passed());


// ====================== 5 ======================
// Movie კლასი
class Movie {
  constructor(name, rating, year) {
    // ფილმის სახელი
    this.name = name;
    // ფილმის რეიტინგი
    this.rating = rating;
    // გამოშვების წელი
    this.year = year;
  }

  // ამოწმებს კარგი ფილმია თუ არა
  isGoodMovie() {
    if (this.rating > 2) {
      return `This is a good film, its name is ${this.name}, rating ${this.rating} and it was released in ${this.year}`;
    }
  }
}

const movie1 = new Movie('Matrix', 5, 1999);
console.log(movie1.isGoodMovie());


// ====================== 6 ======================
// დადებითი და უარყოფითი რიცხვების მასივი
const numbers = [1, -3, 5, -2, 10, -7];

// filter → ფილტრავს მხოლოდ დადებით რიცხვებს
// reduce → აჯამებს ყველა ელემენტს
const sumOfPositive = numbers
  .filter(num => num > 0)
  .reduce((sum, num) => sum + num, 0);

console.log(sumOfPositive);


// ====================== 7 ======================
// რიცხვებისა და ნულების მასივი
const numsWithZeros = [0, 1, 0, 3, 0, 5, 7];

// filter → გამოყოფს ნულებს და არანულებს
const nonZeros = numsWithZeros.filter(num => num !== 0);
const zeros = numsWithZeros.filter(num => num === 0);

// ნულების ბოლოში გადატანა
const resultArray = nonZeros.concat(zeros);

console.log(resultArray);


// ====================== 8 ======================
// constructor → გამოიყენება ობიექტის შესაქმნელად
// method → კლასში არსებული ფუნქცია
// filter → აბრუნებს ახალ მასივს პირობის მიხედვით
// reduce → აერთიანებს მასივის ელემენტებს ერთ მნიშვნელობად
// concat → აერთიანებს ორ მასივს


// codewars
// Student კლასი
class Student {
  constructor(name, fives, tens, twenties) {
    // სტუდენტის სახელი
    this.name = name;
    // 5 დოლარიანი კუპიურების რაოდენობა
    this.fives = fives;
    // 10 დოლარიანი კუპიურების რაოდენობა
    this.tens = tens;
    // 20 დოლარიანი კუპიურების რაოდენობა
    this.twenties = twenties;
  }
}

// ფუნქცია რომელიც აბრუნებს ყველაზე მდიდარი სტუდენტის სახელს
function mostMoney(students) {
  // თუ მხოლოდ ერთი სტუდენტია
  if (students.length === 1) {
    return students[0].name;
  }

  // თითოეული სტუდენტის თანხის გამოთვლა
  const totals = students.map(student => {
    return {
      name: student.name,
      money: student.fives * 5 + student.tens * 10 + student.twenties * 20
    };
  });

  // მაქსიმალური თანხის პოვნა
  const maxMoney = Math.max(...totals.map(s => s.money));

  // შემოწმება ყველას ერთნაირი თანხა აქვს თუ არა
  const allSame = totals.every(s => s.money === maxMoney);

  if (allSame) {
    return "all";
  }

  // სტუდენტის პოვნა რომელსაც ყველაზე მეტი თანხა აქვს
  return totals.find(s => s.money === maxMoney).name;
}

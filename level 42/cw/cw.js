// 1) დავალება: შექმენით ობიექტი robot, შეცვალეთ/დაამატეთ/წაშალეთ კუთვნილება

// ობიექტი (Object) არის მონაცემთა სტრუქტურა, რომელიც ინახავს "გასაღები: მნიშვნელობა" (key: value) წყვილებს.
const robot = {
  name: "Robo",
  model: "X1",
  battery: 100,
};

robot.battery = 80;          // ვცვლით კუთვნილებას
robot.color = "silver";      // ვამატებთ ახალ კუთვნილებას
delete robot.model;          // ვშლით კუთვნილებას

console.log("robot:", robot);


// 2) დავალება: შექმენით math ობიექტი კონსტანტებით და ფუნქციებით (მეთოდებით)

// მეთოდი (Method) არის ფუნქცია, რომელიც ობიექტის კუთვნილებაა.
// this არის მინიშნება იმ ობიექტზე, რომელშიც ეს მეთოდი გამოიძახეს.
const math = {
  PI: 3.141592653589793,
  E: 2.718281828459045,

  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  multiply(a, b) {
    return a * b;
  },
  divide(a, b) {
    if (b === 0) return null;
    return a / b;
  },

  // this მაგალითი
  circleArea(radius) {
    return this.PI * radius * radius;
  },
};

console.log("math.add:", math.add(2, 3));
console.log("circleArea:", math.circleArea(5));


// 3) დავალება: შექმენით 5 ობიექტიანი მასივი და საკუთარი filter ფუნქცია

// მასივი 5 ობიექტით (ერთნაირი სტრუქტურა)
const people = [
  { firstname: "Nika", lastname: "Gelashvili", age: 17 },
  { firstname: "Mariam", lastname: "Kiknadze", age: 22 },
  { firstname: "Giorgi", lastname: "Beridze", age: 18 },
  { firstname: "Ana", lastname: "Maisuradze", age: 15 },
  { firstname: "Dato", lastname: "Kapanadze", age: 30 },
];

// filter ფუნქცია: იღებს (array, fn)
// გადაუვლის ციკლით, გამოიძახებს fn-ს თითოეულ ელემენტზე
// თუ fn დააბრუნებს true -> დაამატებს result-ში
function filter(arr, fn) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i, arr) === true) {
      result.push(arr[i]);
    }
  }

  return result;
}

// გამოძახება: ასაკი >= 18
const adults = filter(people, (person) => person.age >= 18);

console.log("adults:", adults);

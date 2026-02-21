
// 2) მასივი ოჯახის წევრების სახელებით + indexing-ით ცვლადებში შენახვა და დაბეჭდვა
const familyMembers = ["Giorgi", "Nino", "Mari", "Dato"];

const firstMember = familyMembers[0];
const secondMember = familyMembers[1];
const thirdMember = familyMembers[2];
const fourthMember = familyMembers[3];

console.log(firstMember);
console.log(secondMember);
console.log(thirdMember);
console.log(fourthMember);

// 3) const, let, var განსხვავება
// var - ძველი keyword-ია. აქვს function scope (ბლოკს არ ემორჩილება) და შესაძლებელია redeclare (იგივე სახელით თავიდან გამოცხადება).
// let - თანამედროვე ვარიანტი. აქვს block scope ({} შიგნით მუშაობს). redeclare არ შეიძლება, მაგრამ reassign (მნიშვნელობის შეცვლა) შეიძლება.
// const - ასევე block scope. redeclare არ შეიძლება და reassign არ შეიძლება.
// const-ს ვიყენებთ როცა ცვლადის reference/მნიშვნელობა არ უნდა შეიცვალოს (მაგ. მასივი/ობიექტი შეიძლება შეიცვალოს შიგნით, მაგრამ ცვლადი თავიდან ვერ მიენიჭება).

// 4) random 1-10 + შედარება თქვენთვის სასურველ რიცხვთან
const randomNumber = Math.floor(Math.random() * 10) + 1;
const myNumber = 7;

if (myNumber === randomNumber) {
  console.log("You have guessed the random number");
} else {
  console.log("You have not guessed the random number. Please try again later");
}

// 5) რიცხვების მასივის ჯამის ლოგიკა (ხელით)
const numbers = [5, 12, 3, 20, 10];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log(sum);

// 6) სახელების მასივი და თითო ელემენტის გამოტანა
const names = ["Nika", "Elene", "Saba", "Ana"];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

// 7) მასივის მეთოდები + თითოეულზე 2 მაგალითი
// push() - ამატებს ბოლოში
const arr1 = [1, 2];
arr1.push(3);
console.log(arr1);
arr1.push(4, 5);
console.log(arr1);

// pop() - შლის ბოლოს
const arr2 = [10, 20, 30];
arr2.pop();
console.log(arr2);
arr2.pop();
console.log(arr2);

// shift() - შლის დასაწყისში
const arr3 = ["a", "b", "c"];
arr3.shift();
console.log(arr3);
arr3.shift();
console.log(arr3);

// unshift() - ამატებს დასაწყისში
const arr4 = ["b", "c"];
arr4.unshift("a");
console.log(arr4);
arr4.unshift("start");
console.log(arr4);

// slice() - აბრუნებს ახალ მასივს (არ ცვლის ძველს)
const arr5 = [1, 2, 3, 4, 5];
console.log(arr5.slice(1, 4));
console.log(arr5.slice(2));

// splice() - ცვლის მასივს (შლის/ამატებს)
const arr6 = [1, 2, 3, 4, 5];
arr6.splice(2, 1);
console.log(arr6);
arr6.splice(1, 0, 99);
console.log(arr6);

// includes() - ამოწმებს შეიცავს თუ არა ელემენტს
const arr7 = ["Nino", "Gio"];
console.log(arr7.includes("Nino"));
console.log(arr7.includes("Mari"));

// indexOf() - აბრუნებს ინდექსს ან -1
const arr8 = ["x", "y", "z"];
console.log(arr8.indexOf("y"));
console.log(arr8.indexOf("a"));

// join() - აერთიანებს სტრინგად
const arr9 = ["Hello", "World"];
console.log(arr9.join(" "));
console.log(arr9.join("-"));

// concat() - აერთიანებს მასივებს (ახალს აბრუნებს)
const a1 = [1, 2];
const a2 = [3, 4];
console.log(a1.concat(a2));
console.log([10].concat([20, 30]));

// map() - გარდაქმნა (ახალს აბრუნებს)
const m1 = [1, 2, 3];
console.log(m1.map((x) => x * 2));
console.log(m1.map((x) => x + 5));

// filter() - გაფილტვრა (ახალს აბრუნებს)
const f1 = [1, 2, 3, 4, 5];
console.log(f1.filter((x) => x > 3));
console.log(f1.filter((x) => x % 2 === 0));

// 8) იქნება თუ არა შეცდომა?
// console.log(1090 + 'Nino')
// შეცდომა არ იქნება. number + string => ხდება string concatenation.
// შედეგი იქნება: "1090Nino"

// 9) მასივი სახელებით + includes()-ით შემოწმება
const people = ["Nino", "Giorgi", "Saba", "Ana"];
const myName = "Nino";

if (people.includes(myName)) {
  console.log("name is in the array");
} else {
  console.log("name is not in the array");
}

// 10) ორი რიცხვის შედარება
const num1 = 15;
const num2 = 10;

if (num1 > num2) {
  console.log("The first number is greater than the second number");
} else if (num2 > num1) {
  console.log("The second number is greater than the first number");
} else {
  console.log("The numbers are equal to each other");
}

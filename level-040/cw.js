
//1) Function Declaration vs Function Expression vs Arrow Function

/*
Function Declaration (ფუნქციის დეკლარაცია)
- ფუნქცია „დეკლარირდება“ სახელით
- Hoisting: შეიძლება გამოძახება იქამდეც, სანამ ქვემოთ აღწერ (JS „წინასწარ“ კითხულობს დეკლარაციებს)
*/
function sumDecl(a, b) {
  return a + b;
}
console.log(sumDecl(2, 3)); // 5

/*
Function Expression (ფუნქციის ექსპრესი/გამოსახულება)
- ფუნქცია ინახება ცვლადში
- Hoisting არ მუშაობს ისე როგორც declaration-ზე: გამოძახებამდე უნდა იყოს მინიჭებული
*/
const sumExpr = function (a, b) {
  return a + b;
};
console.log(sumExpr(4, 5)); // 9
const sumOdd = function (a, b) {
    return a % 2 !== 0 && b % 2 !== 0;
}
console.log(sumOdd(3, 5)); // true
/*
Arrow Function (ისრის ფუნქცია)
- უფრო მოკლე სინტაქსი
- this მუშაობს განსხვავებულად (ლექსიკური this), ხშირად მოსახერხებელია callbacks-ში
*/
const sumArrow = (a, b) => a + b;
console.log(sumArrow(6, 7)); // 13

const isEven = (num) => num% 2 === 0;
console.log(isEven(4)); // true

// 2
const numbers = [3, 10, 5, 99, 42, 7, 100];
function returnMaxNum(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(returnMaxNum(numbers)); // 99
//3
const checkAge = (age) => (age >= 18 ? "Adult" : "Child");
console.log(checkAge(20)); // "Adult"
console.log(checkAge(15)); // "Child"
//4
const words = ["hi", "world", "cat", "javascript", "sun"];
function findWordIndex(arr, target) {
    for (let i = 0; i < words.length; i++ ){
        if (words[i] == target) {
            return i
        }
    }
    return -1
}
console.log(findWordIndex(words, "javascript")); // 3
console.log(findWordIndex(words, "banana")); // -1
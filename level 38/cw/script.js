// 1
var a = 1
let b = 2
const c = 3

/* ========= var ========= */

// var არის "function-scoped" (ფუნქციის სკოუპი აქვს), არა block-scoped.
// ანუ if/for-ის {} ბლოკი მას არ "კეტავს" ისე როგორც let/const-ს.
if (true) {
  var a = 10;
}
console.log(a); // ✅ 10 (ბლოკს გარეთაც ჩანს) — ეს ხშირად იწვევს შეცდომებს

// var-ს აქვს hoisting: დეკლარაცია "იწევა" ზემოთ,
// ამიტომ სანამ მნიშვნელობას მივანიჭებთ, ცვლადი არსებობს და არის undefined.
console.log(b); // ✅ undefined (არ აგდებს შეცდომას)
// var b = 5;

// // var-ის კიდევ ერთი პრობლემა: იგივე სახელით ხელახლა დეკლარაცია დაშვებულია.
// var b = 99; // ✅ დაშვებულია (ცუდი პრაქტიკა, მარტივად აირევა კოდი)


/* ========= let ========= */

// let არის "block-scoped" — მხოლოდ {} ბლოკის შიგნით ჩანს.
if (true) {
  let c = 20;
}
// console.log(c); // ❌ ReferenceError (სწორია — გარეთ არ უნდა ჩანდეს)

// let-საც აქვს hoisting, მაგრამ აქვს "Temporal Dead Zone" (TDZ):
// სანამ რეალურად არ დეკლარირდება ხაზზე, გამოყენება შეცდომას აგდებს.
// console.log(d); // ❌ ReferenceError
let d = 7;

// let-ის ხელახლა დეკლარაცია იგივე სკოუპში აკრძალულია.
// let d = 8; // ❌ SyntaxError


/* ========= const ========= */

// const-ც block-scoped არის (იგივე როგორც let)
// და აუცილებლად უნდა მიენიჭოს მნიშვნელობა დეკლარაციისას.
const e = 30;

// const ნიშნავს რომ "შეკავშირება" (binding) არ იცვლება:
// e = 31; // ❌ TypeError

// მაგრამ თუ const არის ობიექტი/მასივი, შიდა მონაცემების შეცვლა შეიძლება:
const arr = [1, 2, 3];
arr.push(4); // ✅ შეიძლება (მასივი იგივე ობიექტად რჩება)

// 2
function testAge(age) {
    if (age>=18){
        console.log("'User is adult");

    }
    else if (age<18 && age>=13){
        console.log("User is teenager");
    }
    else{
        console.log("User is child");
    }
}
testAge(2);
//3
// >   greater than
// <   less than
// >=  greater than or equal
// <=  less than or equal
// ==  loose equality (value only)
// !=  loose inequality (value only)
// === strict equality (value + type)
// !== strict inequality (value + type)
console.log(5 > 3);  // true
console.log(5 < 3);  // false
console.log(5 >= 5);  // true
console.log(4 <= 2);  // false
console.log(5 == '5');  // true
console.log(5 != '5');  // false
console.log(5 === '5');  // false
console.log(5 !== '5');  // true

//4
// AND (&&)
console.log(true && true);     // true
console.log(true && false);    // false
console.log("hi" && 123);      // 123
console.log("" && 123);        // ""

// OR (||)
console.log(false || true);    // true
console.log(false || false);   // false
console.log("hi" || 123);      // "hi"
console.log("" || 123);        // 123

// NOT (!)
console.log(!true);            // false
console.log(!false);           // true
console.log(!"hi");            // false
console.log(!"");              // true

// Comparison + logical operators together
console.log(5 > 3 && 10 > 7);      // true
console.log(5 > 3 && 10 < 7);      // false
console.log(5 === "5" || 5 === 5); // true
console.log(!(5 > 10));            // true

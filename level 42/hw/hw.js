//1
/* 
========================
STACK (სტეკი) მეხსიერება
========================

Stack არის მეხსიერების ნაწილი, სადაც ინახება:
- პრიმიტიული ტიპები (number, string, boolean, null, undefined)
- ფუნქციის შესრულების კონტექსტი
- ცვლადები, რომლებიც ეკუთვნის ფუნქციას

მახასიათებლები:
- მუშაობს პრინციპით LIFO (Last In, First Out)
- ძალიან სწრაფია
- ზომა შეზღუდულია
- ფუნქციის დასრულებისას სტეკი ავტომატურად იწმინდება
*/

function sum(a, b) {
  let result = a + b; // a, b და result ინახება stack-ში
  return result;
}

sum(2, 3);

/*
თუ რეკურსია ძალიან ღრმაა → 
მოხდება შეცდომა: "Maximum call stack size exceeded"
*/



/* 
========================
HEAP (ჰიპი) მეხსიერება
========================

Heap არის მეხსიერების დიდი ნაწილი, სადაც ინახება:
- ობიექტები
- მასივები
- ფუნქციები

მახასიათებლები:
- არ აქვს მკაცრი ზომის ლიმიტი (როგორც stack-ს)
- უფრო ნელია stack-თან შედარებით
- მონაცემებზე წვდომა ხდება reference-ით
- წმენდას აკეთებს Garbage Collector
*/

let user = {
  name: "Giorgi",
  age: 25
};
// ობიექტი ინახება heap-ში
// ცვლადი user stack-ში ინახავს მხოლოდ მის reference-ს



/*
========================
STACK + HEAP ერთად
========================
*/

let a = 10;        // number → stack
let arr = [1, 2]; // array → heap

let b = arr;      // b იღებს იგივე reference-ს heap-ზე

b.push(3);

console.log(arr); // [1, 2, 3]
// იმიტომ, რომ arr და b ორივე ერთსა და იმავე heap ობიექტზე მიუთითებს



/*
========================
Garbage Collector (GC)
========================

GC შლის heap ობიექტებს, როცა:
- მათზე აღარ არსებობს არცერთი reference
*/

let obj = { x: 1 }; // heap
obj = null;         // reference გაქრა → GC შეძლებს წაშლას



/*
========================
მთავარი განსხვავება
========================

STACK:
- პრიმიტივები
- სწრაფი
- ავტომატური წმენდა
- მცირე ზომა

HEAP:
- ობიექტები / მასივები
- reference-ით წვდომა
- ნელი
- წმენდა GC-ის მიერ
*/


//2
// push — ამატებს ელემენტს მასივის ბოლოში (ცვლის მასივს)
[1, 2].push(3) → [1, 2, 3]

// pop — შლის ბოლო ელემენტს (ცვლის მასივს)
[1, 2, 3].pop() → [1, 2]

// shift — შლის პირველ ელემენტს (ცვლის მასივს)
[1, 2, 3].shift() → [2, 3]

// unshift — ამატებს ელემენტს დასაწყისში (ცვლის მასივს)
[2, 3].unshift(1) → [1, 2, 3]

// splice — შლის ან ამატებს ელემენტებს ინდექსის მიხედვით (ცვლის მასივს)
[1, 2, 3, 4].splice(1, 2) → [1, 4]

// map — ქმნის ახალ მასივს, ძველი არ იცვლება
[1, 2, 3].map(x => x * 2) → [2, 4, 6]

// filter — აბრუნებს ახალ მასივს პირობის მიხედვით
[1, 2, 3, 4].filter(x => x % 2 === 0) → [2, 4]

// forEach — გადაუვლის მასივს, არაფერს აბრუნებს
[1, 2, 3].forEach(x => console.log(x))

// find — აბრუნებს პირველ ელემენტს, რომელიც პირობას აკმაყოფილებს
[1, 3, 4, 6].find(x => x % 2 === 0) → 4

// includes — ამოწმებს შეიცავს თუ არა ელემენტს
[1, 2, 3].includes(2) → true

// slice — აბრუნებს მასივის ასლს (არ ცვლის ორიგინალს)
[1, 2, 3, 4].slice(1, 3) → [2, 3]

// join — აერთიანებს ელემენტებს სტრინგად
[1, 2, 3].join("-") → "1-2-3"

//reduce — ამცირებს მასივს ერთ მნიშვნელობამდე
[1, 2, 3].reduce((a, b) => a + b, 0) → 6


//3
function myForEach(arr, cb, thisArg) {
  for (let i = 0; i < arr.length; i++) {
    if (i in arr) cb.call(thisArg, arr[i], i, arr);
  }
}


function myMap(arr, cb, thisArg) {
  const res = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    if (i in arr) res[i] = cb.call(thisArg, arr[i], i, arr);
  }
  return res;
}

function myFilter(arr, cb, thisArg) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (i in arr) {
      if (cb.call(thisArg, arr[i], i, arr)) res.push(arr[i]);
    }
  }
  return res;
}

const a2 = [1, 2, 3, 4];

myForEach(a2, x => console.log(x));           // 1 2 3 4
console.log(myMap(a2, x => x * 2));           // [2,4,6,8]
console.log(myFilter(a2, x => x % 2 === 0));  // [2,4]

// --------------------
// 3) sumOfElements
// --------------------

// rest ოპერატორი აგროვებს გადაცემულ რიცხვებს ერთ მასივში
function sumOfElements(...numbers) {
  // reduce გამოიყენება მასივის ელემენტების ჯამად
  return numbers.reduce((sum, n) => sum + n, 0);
}

console.log(sumOfElements(1, 2, 3, 4)); // 10


// --------------------
// 4) friends array copy + ცვლილება
// --------------------

// მეგობრების მასივი (ობიექტებით, რომ shallow copy-ის ეფექტი დავინახოთ)
const friends = [
  { name: "Nika" },
  { name: "Gio" },
  { name: "Luka" }
];

// spread ოპერატორი ქმნის ახალ მასივს, მაგრამ შიგნით არსებული ობიექტები იგივე ლინკით რჩება
const friendsCopy = [...friends];

// დაკოპირებული მასივიდან ერთ ელემენტს ვშლით
friendsCopy.splice(1, 1);

// დაკოპირებულ მასივში დარჩენილი ობიექტის შიგნით ვცვლით მნიშვნელობას
friendsCopy[1].name = "Saba";

console.log("Original:", friends);
console.log("Copy:", friendsCopy);

// რატომ შეიცვალა ორიგინალშიც?
// იმიტომ რომ spread ოპერატორი აკეთებს ზედაპირულ (shallow) კოპირებას
// მასივი ახალია, მაგრამ ობიექტები შიგნით იგივე მისამართზე (reference) მიუთითებენ
// ამიტომ friendsCopy[1].name-ის შეცვლამ იგივე ობიექტი შეცვალა friends მასივშიც


// --------------------
// 5) Car object copy + new props
// --------------------

// მანქანის ობიექტი
const Car = {
  brand: "Toyota",
  model: "Camry",
  year: 2020,
  price: 25000
};

// ცარიელი ობიექტი
const copiedCar = {};

// spread ოპერატორით კუთვნილებების კოპირება ახალ ობიექტში
Object.assign(copiedCar, { ...Car });

// დაკოპირებულ ობიექტში ახალი კუთვნილებების დამატება
copiedCar.color = "black";
copiedCar.isElectric = false;

console.log("Car:", Car);
console.log("Copied Car:", copiedCar);
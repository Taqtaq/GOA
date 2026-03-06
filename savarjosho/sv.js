// Write your code below

// const bobsFollowers = ["Nika", "Luka", "Anna", "Mari"];
// const tinasFollowers = ["Anna", "Mari", "Gio"];
// const mutualFollowers = [];
// for (i = 0; i < bobsFollowers.length; i++) {
//   for (j = 0; j < tinasFollowers.length; j++) {
//     if (bobsFollowers[i] === tinasFollowers[j]) {
//       mutualFollowers.push(bobsFollowers[i]);
//     }
//   }
// }
// console.log(mutualFollowers);


// const game = {
//   name:'gameName'
// };

// const level = {
//   difficalty: 'easy'
// }

// const finalResult = Object.assign(game,level)
// console.log(finalResult.name)

// let obj = {name: 'weakmap'}

// const arr = obj
// obj = null
// console.log(arr[0])

// Написать свою функцию bind
// Пример работы:
// function logPerson() {
//     console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
// }

// const person1 = {name:'Michael', age:22, job:'Frontend'}
// const person2 = {name:'Elena', age:19, job:'SMM'}

// bind(person1, logPerson)
// bind(person2, logPerson)

// function logPerson() {
//     console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
// }

// // function bind(obj, func) {
// //     return function(...n){
// //         func.apply(obj, n)
// //     }
// // }
// const person1 = {name:'Michael', age:22, job:'Frontend'}

// bind(person1, logPerson)()



// function bind(obj, func) {
//     return function(...n){
//         func.apply(obj, n)
//     }
// }

// function sayHello(greeting='Hi') {
//     console.log(greeting, this.name)
// }

// const person = { name: "Nika" }

// bind(person, sayHello)('Zd')















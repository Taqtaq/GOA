/*
===========================
1) SYNCHRONOUS VS ASYNCHRONOUS
===========================

SYNCHRONOUS:
Runs line by line.
Each operation waits for the previous one to finish.
Real life: standing in a queue.

ASYNCHRONOUS:
Does not block execution.
Some operations are handled in Web APIs (browser),
then placed into Callback Queue,
then executed by Event Loop.
Real life: ordering food and talking while waiting.
*/

console.log("Sync 1");
console.log("Sync 2");

setTimeout(() => {
  console.log("Async after 2 sec");
}, 2000);

console.log("Sync 3");

/*
Expected order:
Sync 1
Sync 2
Sync 3
Async after 2 sec
*/


/*
===========================
2) TWO SETS
===========================
Set stores ONLY unique values.
Methods:
add() -> adds value
has() -> checks existence
delete() -> removes value
clear() -> removes all values
*/

const set1 = new Set();
const set2 = new Set();

set1.add(1);
set1.add(2);
set1.add(3);
set1.add(4);
set1.add(4); // duplicate ignored

set2.add(3);
set2.add(4);
set2.add(5);
set2.add(6);

// All unique elements from both sets
const allUnique = new Set([...set1, ...set2]);
console.log("All unique:", allUnique);

// Find repeated numbers (intersection)
const repeated = [...set1].filter(num => set2.has(num));
console.log("Repeated:", repeated);


/*
===========================
3) MAP WITH 10 STUDENTS
===========================
Map stores key-value pairs.
set(key, value) -> adds pair
get(key) -> gets value
has(key) -> checks key
delete(key) -> removes pair
*/

const students = new Map();

students.set(1, "Nika");
students.set(2, "Luka");
students.set(3, "Ana");
students.set(4, "Giorgi");
students.set(5, "Mariam");
students.set(6, "Saba");
students.set(7, "Nino");
students.set(8, "Dato");
students.set(9, "Elene");
students.set(10, "Irakli");

// Iterate Map
for (let [id, name] of students) {
  console.log(`ID: ${id}, Name: ${name}`);
}


/*
===========================
4) FOR LOOP 1-20
===========================
Loop runs synchronously.
Numbers print one by one in order.
After loop finishes, next line executes.
*/

for (let i = 1; i <= 20; i++) {
  console.log(i);
}

console.log("loop finished");

/*
Output:
1
2
...
20
loop finished
*/


/*
===========================
5) Finished / Repeated / Done
===========================
Prediction:
Finished
Done
Repeated (after 2 sec)
Repeated (every 2 sec)

Because setInterval is asynchronous.
*/

console.log("Finished");

setInterval(() => {
  console.log("Repeated");
}, 2000);

console.log("Done");
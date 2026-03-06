//1

// Create a Map with 3 key-value pairs
const student = new Map([
  ['name', 'Nika'],
  ['age', 19],
  ['country', 'Georgia']
]);

// get() - returns the value by key
console.log(student.get('name')); // Nika

// set() - adds a new key-value pair or updates existing key
student.set('profession', 'Developer');

// has() - checks if the key exists (returns true or false)
console.log(student.has('age')); // true

// keys() - returns an iterator of all keys
console.log([...student.keys()]);

// values() - returns an iterator of all values
console.log([...student.values()]);

// delete() - removes a key-value pair by key
student.delete('country');

// clear() - removes all elements from the Map
// student.clear();

//2
// Create a Set with 5 elements
const numbers = new Set([1, 2, 3, 4, 5]);

// add() - adds a new value to the Set
numbers.add(6);

// has() - checks if value exists (returns true or false)
console.log(numbers.has(3)); // true

// values() - returns an iterator of all values
console.log([...numbers.values()]);

// delete() - removes a value
numbers.delete(2);

// clear() - removes all values from the Set
// numbers.clear();
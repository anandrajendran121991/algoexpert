let numbers = [1, 2, 3, 4, 5];
const fruits = ["apple", "banana", "cherry"];
const nested = [1, [2, 3], [4, [5]]];

const nest = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8],
];

const pair = nest.map((pair) => pair[0]);

// concat
console.log(numbers.concat([6, 7])); // [1,2,3,4,5,6,7]

// includes
console.log(numbers.includes(3)); // true

// indexOf string
console.log("fruits".indexOf("s")); // 5

// indexOf array
console.log(fruits.indexOf("banana")); // 1

// join
console.log(fruits.join(", ")); // "apple, banana, cherry"

// pop
console.log(fruits.pop()); // "cherry"
console.log(fruits); // ["apple", "banana"]

// push
fruits.push("date");
console.log(fruits); // ["apple", "banana", "date"]

// reverse
console.log(numbers.slice().reverse()); // [5, 4, 3, 2, 1]

// shift
console.log(numbers.shift()); // 1
console.log(numbers); // [2, 3, 4, 5]

// unshift
numbers.unshift(0);
console.log(numbers); // [0, 2, 3, 4, 5]

// slice
console.log(numbers.slice(1, 3)); // [2, 3]

// splice
const removed = numbers.splice(2, 1, 99);
console.log(removed); // [3]
console.log(numbers); // [0, 2, 99, 4, 5]

// sort
console.log(numbers.sort((a, b) => b - a)); // descending

// toString
console.log(numbers.toString()); // "5,4,99,2,0"

// Array.isArray
console.log(Array.isArray(numbers)); // true

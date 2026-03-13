// before ES6
// var name = "John Doe";
// var age = 30;

// age = 31;

// console.log(name);
// console.log(age);


// after ES6
const name = "John Doe";
let age = 30;

age = 31;

console.log(name);
console.log(age);

// functions before ES6
function calc(a, b)
{
    return a + b;
    return a - b; // This line will never be executed
}

// functions after ES6
calc2 = (a, b) => a + b;

calc3 = (a, b) => {
    return a + b;
}

// testing the functions
console.log(calc(5, 10));
console.log(calc2(5, 10));
console.log(calc3(5, 10));

// template literals
// before ES6
var greeting = "Hello, " + name + "! You are " + age + " years old.";
console.log(greeting);

// after ES6
const greeting2 = `Hello, ${name}! You are ${age} years old.`;
console.log(greeting2);

// example
hello = (message) => `Message: ${message}`;
console.log(hello("Hello Programmers!"));

// array destructuring
let numbers = [1, 2, 3, 4, 5];

let [a, b, c] = numbers;

console.log(a);
console.log(b);
console.log(c);

// skipping elements
let [x, , z] = numbers;

console.log(x);
console.log(z);

// rest operator
let [first, ...rest] = numbers;

console.log(first);
console.log(rest);

// swapping variables
let m = 10;
let n = 20;

[m, n] = [n, m];

console.log(m);
console.log(n);

// default values
const person = {
    name: "Alice",
    age: 25
};

const { name: personName, age: personAge, city = "Unknown" } = person;

console.log(personName);
console.log(personAge);
console.log(city);

// object destructuring
// let student = {
//     name: "Bob",
//     major: "Computer Science",
//     age: 20
// };

// let {name, age} = student;

// console.log(name);
// console.log(age);

// renaming variables
const o = { p: 42, q: true };

const { p: foo, q: bar } = o;

console.log(foo);
console.log(bar);

// spread operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combined = [...arr1, ...arr2];

console.log(combined);

// aray methods
const numbers2 = [1, 2, 3, 4, 5];

// for each method
numbers2.forEach(element => {
    console.log(element);
});

// map method
const squared = numbers2.map(x => x * x);
console.log(squared);

// filter method
const evenNumbers = numbers2.filter(x => x % 2 === 0);
console.log(evenNumbers);


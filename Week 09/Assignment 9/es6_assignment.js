// task 1
const courseName = "Web Programming";
let students = 30;
students += 5;

console.log(`Course: ${courseName}, Total Students: ${students}`); 

// task 2
square = x => x * x;
console.log(`Square of 4: ${square(4)}`);

// task 3
let name = "Alice";
let age = 21;
let city = "Dallas";
console.log(`My name is ${name}, I am ${age} years old, and I live in ${city}.`);

// task 4
let fruits = ["apple", "banana", "cherry"];
let [firstFruit, secondFruit, thirdFruit] = fruits;
console.log(`First: ${firstFruit}, Second: ${secondFruit}, Third: ${thirdFruit}`);

// task 5
const student = {
    studentName: "John",
    major: "Computer Science",
    year: 2
};

const {studentName, major, year} = student;
console.log(`Name: ${studentName}, Major: ${major}, Year: ${year}`);

// task 6
let arr1 = [1,2,3];
let arr2 = [4,5,6];

let arr3 = [...arr1, ...arr2];
console.log(arr3)

// task 7
let numbers = [1,2,3,4]

let triple = numbers.map(num => num * 3);
console.log(triple);

// task 8
let numbers2 = [5,10,15,20,25];

let numbersFilter = numbers2.filter(num => num >= 20);
console.log(numbersFilter);

// task 9
let colors = ["Red", "Green", "Blue"];

colors.forEach(element => {
    console.log(element);  
});
let jsonData = '{ "students": [{ "name": "John", "major": "Computer Science"},{"name": "Emma","major": "Information Technology"},{"name": "Michael","major": "Software Engineering"}]}';

let students = JSON.parse(jsonData);

console.log(students.students[0].name); // first name

students.students.forEach(element => { // all names using loop
    console.log(element.name);
});
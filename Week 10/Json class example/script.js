let data = `
{
  "students": [
    {
      "name": "John",
      "age": 20,
      "major": "Computer Science",
      "details": {
        "year": "Sophomore",
        "semester": "Fall"
      },
      "grades": {
        "webProgramming": "A",
        "python": "B+",
        "database": "A-"
      }
    },
    {
      "name": "Emma",
      "age": 21,
      "major": "Information Technology",
      "details": {
        "year": "Junior",
        "semester": "Spring"
      },
      "grades": {
        "webProgramming": "A-",
        "python": "A",
        "database": "B+"
      }
    },
    {
      "name": "Michael",
      "age": 22,
      "major": "Software Engineering",
      "details": {
        "year": "Senior",
        "semester": "Fall"
      },
      "grades": {
        "webProgramming": "B+",
        "python": "A",
        "database": "A"
      }
    }
  ]
}`;

let students = JSON.parse(data);

console.log(students.students[0].name); // first name

students.students.forEach(element => { // all names using loop
    console.log(element.name);
});

console.log('-------------------');
students.students.forEach(element => { // all data using loop
    console.log(element.name);
    console.log(element.age);
    console.log(element.major);
    for (let key in element.details) {
        console.log(`${key}: ${element.details[key]}`);
    }
    for (let key in element.grades) {
        console.log(`${key}: ${element.grades[key]}`);
    }
    console.log('-------------------');
});
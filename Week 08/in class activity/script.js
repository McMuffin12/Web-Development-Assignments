let form = document.getElementById('taskForm');
let input = document.getElementById('taskInput');
let taskList = document.getElementById('taskList');
let error = document.getElementById('errorMessage');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting
    console.log('Form submitted'); // Debugging statement

    let task = input.value.trim();

    if (task === '') {
        error.textContent = 'Please enter a task.';
        return;
    }

    error.textContent = ''; // Clear any previous error message

    let listItem = document.createElement('li');
    listItem.textContent = task;
    taskList.appendChild(listItem);

    input.value = ''; // Clear the input field
});

taskList.addEventListener('dblclick', function(event) {
    if (event.target.tagName === 'LI') {
        event.target.remove(); // Remove the double-clicked task
    }
});

taskList.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('done'); // Toggle the completed class
    }
});


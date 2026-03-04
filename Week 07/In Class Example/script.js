let form = document.getElementById('taskForm');
form.action = "https://google.com";

form.addEventListener('submit', function(event) {
    //event.preventDefault(); // Prevent the form from submitting and refreshing the page

    let taskInput = document.getElementById('taskInput');
    let task = taskInput.value.trim();

    if (task) { // Check if the input is not empty
        console.log('Task added:', task);
        taskInput.value = ''; // Clear the input field after adding the task
    } else {
        console.log('Please enter a task.');
    }
});


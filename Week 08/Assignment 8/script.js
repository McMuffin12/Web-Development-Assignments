// ===============================
// Portfolio To-Do List (Week 8)
// Concepts: submit, preventDefault, input.value, trim,
// createElement, appendChild, remove, classList, localStorage
// ===============================


// ---------- 1) DOM SELECTION ----------

// Grab the form element (we listen for submit on the FORM)
const form = document.getElementById("taskForm");

// Grab the input element (we read what the user typed)
const input = document.getElementById("taskInput");

// Grab the UL where tasks will be displayed
const taskList = document.getElementById("taskList");

// Grab the error message paragraph for validation feedback
const errorMessage = document.getElementById("errorMessage");

// Grab count elements so we can update totals
const totalCountEl = document.getElementById("totalCount");
const doneCountEl = document.getElementById("doneCount");

// Grab action buttons
const clearCompletedBtn = document.getElementById("clearCompleted");
const clearAllBtn = document.getElementById("clearAll");

// Grab all filter buttons (All/Active/Completed)
const filterButtons = document.querySelectorAll(".filters .btn");


// ---------- 2) APP STATE ----------

// Our tasks array will store objects like:
// { id: 123, text: "Buy milk", done: false }
let tasks = [];

// Track which filter is active
let currentFilter = "all";


// ---------- 3) LOCAL STORAGE HELPERS ----------

// Key name used in localStorage
const STORAGE_KEY = "portfolio_todo_tasks";

// Save tasks array into localStorage (as a string)
function saveTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

// Load tasks array from localStorage
function loadTasks() {
  const saved = localStorage.getItem(STORAGE_KEY);

  // If nothing saved, do nothing
  if (!saved) return;

  // Convert saved string back into array
  tasks = JSON.parse(saved);
}


// ---------- 4) VALIDATION HELPERS ----------

// Show an error message on the page
function showError(message) {
  errorMessage.textContent = message;
}

// Clear the error message
function clearError() {
  errorMessage.textContent = "";
}


// ---------- 5) RENDERING ----------

// Update Total and Completed counters
function updateCounts() {
  // Total tasks is length of tasks array
  const total = tasks.length;

  // Completed tasks = count tasks where done is true
  const completed = tasks.filter(t => t.done).length;

  // Update UI text
  totalCountEl.textContent = `Total: ${total}`;
  doneCountEl.textContent = `Completed: ${completed}`;
}

// Decide if a task should be visible based on currentFilter
function passesFilter(task) {
  if (currentFilter === "all") return true;          // show everything
  if (currentFilter === "active") return !task.done; // show only not done
  if (currentFilter === "completed") return task.done; // show only done
  return true;
}

// Build ONE list item element for a task object
function createTaskElement(task) {
  // Create the <li>
  const li = document.createElement("li");
  li.classList.add("task-item");
  li.dataset.id = task.id; // store id on the element for easy lookup

  // Create the task text <span>
  const span = document.createElement("span");
  span.classList.add("task-text");
  span.textContent = task.text + "   - Added at " + new Date(task.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); // show creation time in HH:MM format

  // If done, add done class
  if (task.done) {
    span.classList.add("done");
  }

  // Toggle done when clicking the text
  span.addEventListener("click", function () {
    // Flip done value
    task.done = !task.done;

    // Toggle CSS class
    span.classList.toggle("done");

    // Save + update counts (and re-render for filter correctness)
    saveTasks();
    render();
  });

  // Create a container for buttons
  const btnBox = document.createElement("div");
  btnBox.classList.add("task-buttons");

  // Delete button
  const delBtn = document.createElement("button");
  delBtn.type = "button";
  delBtn.textContent = "Delete";
  delBtn.classList.add("btn", "danger", "small");

  // Remove task on click
  delBtn.addEventListener("click", function () {
    // Keep only tasks that do NOT match this task id
    tasks = tasks.filter(t => t.id !== task.id);

    // Save + re-render
    saveTasks();
    render();
  });

  // Add span + buttons to the list item
  btnBox.appendChild(delBtn);
  li.appendChild(span);
  li.appendChild(btnBox);

  return li;
}

// Render the entire list based on tasks + filter
function render() {
  // Clear the current list UI
  taskList.innerHTML = "";

  // For each task, if it passes the filter, add it
  for (const task of tasks) {
    if (passesFilter(task)) {
      const li = createTaskElement(task);
      taskList.appendChild(li);
    }
  }

  // Update counters every render
  updateCounts();
}


// ---------- 6) EVENTS ----------

// Handle form submission (Add task)
form.addEventListener("submit", function (event) {
  // Stop the page refresh
  event.preventDefault();

  // Read and clean input
  const text = input.value.trim();

  // Validate
  if (text === "") {
    showError("Task cannot be empty.");
    return;
  }

  // Clear any previous error
  clearError();

  // Create a new task object
  const newTask = {
    id: Date.now(),   // simple unique id
    text: text,       // what user typed
    done: false,       // default not completed
    timestamp: new Date().toISOString() // for creation time stamp
  };

  // Add it to tasks array
  tasks.push(newTask);

  // Save to localStorage
  saveTasks();

  // Clear input box
  input.value = "";

  // Re-render list
  render();
});

// Clear error while user types (nice UX)
input.addEventListener("input", function () {
  if (input.value.trim() !== "") {
    clearError();
  }
});

// Clear completed tasks
clearCompletedBtn.addEventListener("click", function () {
  // Keep only tasks that are NOT done
  tasks = tasks.filter(t => !t.done);

  // Save + re-render
  saveTasks();
  render();
});

// Clear all tasks
clearAllBtn.addEventListener("click", function () {
  // Remove everything
  tasks = [];

  // Save + re-render
  saveTasks();
  render();
});

// Filter buttons (All / Active / Completed)
for (const btn of filterButtons) {
  btn.addEventListener("click", function () {
    // Read filter value from data-filter attribute
    currentFilter = btn.dataset.filter;

    // Update button highlight
    for (const b of filterButtons) {
      b.classList.remove("active");
    }
    btn.classList.add("active");

    // Re-render list with new filter
    render();
  });
}


// ---------- 7) INIT ----------

// Load saved tasks when page opens
loadTasks();

// Render tasks immediately
render();
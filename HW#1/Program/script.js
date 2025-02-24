// Constants
const LOCAL_STORAGE_KEY = "toDoList"; // Key for local storage
const ERROR_NO_VALUE = "No value!"; // Error message for empty input
const CLASS_COMPLETED = "completed"; // CSS class for completed tasks
const CLASS_BUTTON = "buttonInList"; // CSS class for buttons in list
const CLASS_TODO_ITEM = "toDoItem"; // CSS class for list items
const CLASS_ACTIONS = "todoActions";

// Selectors
const addButton = document.getElementById("add-button");
const input = document.getElementById("task");
const toDoList = document.getElementById("todo-list");

// Event Listeners
document.addEventListener("DOMContentLoaded", onLoad);
document.addEventListener("keypress", onKeyPress);
addButton.addEventListener("click", addTask);

/**
 * Loads tasks from local storage and renders them on the page.
 */
function onLoad() {
  const tasks = getLocalStorageItems();
  tasks.forEach((task) => renderTask(task.id, task.text, task.completed));
}

/**
 * Accepts a keyboard event and adds a task if enter is pressed
 * @param {KeyboardEvent} event
 * @returns
 */
function onKeyPress(event) {
  if (event.code !== "Enter") {
    return;
  }

  addTask();
}

/**
 * Adds a new task to the list and saves it to local storage.
 */
function addTask() {
  const text = input.value.trim();
  if (!text) {
    return alert(ERROR_NO_VALUE);
  }

  const id = Date.now().toString(); // Unique identifier for each task
  renderTask(id, text);
  saveTask(id, text, false);
  input.value = "";
}

/**
 * Renders a task item in the to-do list.
 * @param {string} id - Unique identifier for the task.
 * @param {string} text - Task description.
 * @param {boolean} completed - Whether the task is completed.
 */
function renderTask(id, text, completed = false) {
  const toDoItem = document.createElement("li");
  toDoItem.className = CLASS_TODO_ITEM;
  toDoItem.dataset.id = id; // Store ID in dataset

  const pEl = document.createElement("span");
  pEl.textContent = text;
  if (completed) {
    pEl.classList.add(CLASS_COMPLETED);
  }

  const wrapper = document.createElement("div");
  wrapper.classList.add(CLASS_ACTIONS);

  const checkButton = document.createElement("button");
  checkButton.className = CLASS_BUTTON;
  checkButton.textContent = completed ? "Uncheck" : "Check";
  checkButton.addEventListener("click", () => toggleTask(id, pEl, checkButton));

  const removeButton = document.createElement("button");
  removeButton.className = CLASS_BUTTON;
  removeButton.textContent = "Remove";
  removeButton.addEventListener("click", () => removeTask(id, toDoItem));

  wrapper.append(checkButton, removeButton);
  toDoItem.append(pEl, wrapper);

  toDoList.appendChild(toDoItem);
}

/**
 * Saves a task to local storage.
 * @param {string} id - Unique identifier for the task.
 * @param {string} text - Task description.
 * @param {boolean} completed - Whether the task is completed.
 */
function saveTask(id, text, completed) {
  const tasks = getLocalStorageItems();
  tasks.push({ id: id, text: text, completed: completed });

  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
}

/**
 * Toggles the completion state of a task.
 * @param {string} id - Unique identifier for the task.
 * @param {HTMLElement} pEl - Task text element.
 * @param {HTMLElement} button - Button element to update text.
 */
function toggleTask(id, pEl, button) {
  pEl.classList.toggle(CLASS_COMPLETED);
  const isChecked = pEl.classList.contains(CLASS_COMPLETED);
  button.textContent = isChecked ? "Uncheck" : "Check";
  updateTask(id, isChecked);
}

/**
 * Updates the completion state of a task in local storage.
 * @param {string} id - Unique identifier for the task.
 * @param {boolean} completed - Whether the task is completed.
 */
function updateTask(id, completed) {
  const tasks = getLocalStorageItems();

  const updatedTasks = tasks.map((task) => {
    if (task.id !== id) {
      return task;
    }

    return {
      ...task,
      completed: completed,
    };
  });

  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedTasks));
}

/**
 * Removes a task from the list and local storage.
 * @param {string} id - Unique identifier for the task.
 * @param {HTMLElement} toDoItem - The list item element to remove.
 */
function removeTask(id, toDoItem) {
  toDoItem.remove();

  const tasks = getLocalStorageItems();
  const filteredTasks = tasks.filter((task) => task.id !== id);

  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(filteredTasks));
}

function getLocalStorageItems() {
  const items = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (!items) {
    return [];
  }

  const tasks = JSON.parse(items);
  if (!tasks || !Array.isArray(tasks)) {
    return [];
  }

  return tasks;
}

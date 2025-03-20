// Selectors
const addButton = document.getElementById("add-button");
const emptyButton = document.getElementById("empty-button");
const input = document.getElementById("task");
const toDoList = document.getElementById("todo-list");

// Event Listeners
document.addEventListener("DOMContentLoaded", onLoad);
addButton.addEventListener("click", addTask);
document.addEventListener("keypress", enterPress);
emptyButton.addEventListener("click", emptyList); 

/**
 * Checks if the input is valid and calls "newToDoItem" function
 */
function addTask() {
  const itemText = input.value; //input value is assign to itemText
  if (itemText == ""){
    alert("No value!"); //checks if input is not empty
    return;
  }
  newToDoItem(itemText); //sends input to function to add it to the list
}

/**
 * Creates new to do item in ul list 
 */
function newToDoItem(itemText, isCrossed = false) {
  const toDoItem = document.createElement("li"); //makes toDOItem "li" element
  toDoItem.className = "toDoItem";
  
  const p = document.createElement("span"); //toDoItems text part
  p.className = ("pText");
  p.textContent = itemText; //assign input value to "p" part

  let check = document.createElement("BUTTON"); //creates "check" button in the item
  check.className = "buttonInList";
  check.innerHTML = "&#9989;";  // Shows the check-mark symbol ✔
  check.id = "check-button";
  check.addEventListener("click", function checkInside() {
    toggleToDoItemState(p);
  });

  let remove = document.createElement('BUTTON');  //creates r"remove" button in item
  remove.className = "buttonInList";
  remove.innerHTML = "&#10060;";  // Shows the check-mark symbol ✔
  remove.id = "remove-button";
  remove.addEventListener("click", function removeItemInside() {
    removeItem(toDoItem);
  });
  
  const container = document.createElement("div");  //creates container for the buttons
  container.className = "container";

  container.appendChild(check);
  container.appendChild(remove);
  toDoItem.appendChild(p);
  toDoItem.appendChild(container);
  toDoList.appendChild(toDoItem); //adds input text to the list as li element
  
  if (isCrossed) {
    p.classList.add("crossed");
  }
  
  input.value="";
  saveList();
}

/**
 * accepts a keyboard event and adds a task if enter is pressed
 */
function enterPress (event) {
  if (event.code != "Enter"){
  return;
  }
  addTask();
}

/**
 * Empties the while list of todo items
 */
function emptyList() {
  toDoList.innerHTML = "";
  saveList();
}

/**
 * Toggles items "Crossed" state
 */
function toggleToDoItemState(item) {
  item.classList.toggle("crossed");
  saveList();
}

/**
 * Removes one item
 */
function removeItem(element) {
  element.remove();
  saveList();
}

/**
 * Saves list to a memory
 */
function saveList() {
  var toDos = [];
  const spanElements = document.querySelectorAll('.toDoItem .pText');

  for (var i = 0; i < spanElements.length; i++) {
    var isCrossed = spanElements[i].classList.contains("crossed");
    toDos.push({ text: spanElements[i].innerText, crossed: isCrossed });
}
  localStorage.setItem("toDos", JSON.stringify(toDos));
}

/**
 * Loads list from a memory
 */
function onLoad() {
  var storedToDos = JSON.parse(localStorage.getItem("toDos")) || [];

  for (var i = 0; i < storedToDos.length; i++) {
    newToDoItem(storedToDos[i].text, storedToDos[i].crossed);
  }
}
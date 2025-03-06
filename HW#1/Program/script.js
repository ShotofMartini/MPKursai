// Selectors
const addButton = document.getElementById("add-button");
const emptyButton = document.getElementById("empty-button");
const input = document.getElementById("task");
const toDoList = document.getElementById("todo-list");

// Event Listeners
document.addEventListener("DOMContentLoaded", onLoad);
addButton.addEventListener("click", addTask);
document.addEventListener("keypress", enterPress);
emptyButton.addEventListener("click", emptyList); //neveike, tada sutvarkiau komentarus ir perdeliojau ir volia veikia

/**
 * Checks if the input is valid and adds a new task to the list
 */
function addTask() {
  const itemText = input.value; //itemText priskiriamas - ivestas task
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
  const toDoItem = document.createElement("li"); //toDOItem bus li elementas
  toDoItem.className = "toDoItem";
  
  const p = document.createElement("span");
  p.className = ("pText");
  p.textContent = itemText; //li elementui priskiria ivesties teksta

  let check = document.createElement("BUTTON"); //
  check.className = "buttonInList";
  check.innerHTML = "&#9989;";  // Shows the checkmark symbol ✔
  check.id = "check-button";
  check.addEventListener("click", function checkInside() {
    toggleToDoItemState(p);
  });

  let remove = document.createElement('BUTTON');
  remove.innerHTML = "&#10060;";
  remove.className = "buttonInList";
  remove.id = "remove-button";
  remove.addEventListener("click", function removeItemInside() {
    removeItem(toDoItem);
  });
  
  const container = document.createElement("div");
  container.className = "container";

  container.appendChild(check);
  container.appendChild(remove);
  toDoItem.appendChild(p);
  toDoItem.appendChild(container);
  toDoList.appendChild(toDoItem); //i lista iterpia ivesties teksta kaip li elementa
  
  if (isCrossed) {
    p.classList.add("crossed");
  }
  
  input.value="";
  saveList();
}

/**
 * ccepts a keyboard event and adds a task if enter is pressed
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
    //var toDo = toDoList.children.item(i);
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
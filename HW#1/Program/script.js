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
    alert("No value!"); //patikrina ar ivestis ne tuscia
    return;
  }
  newToDoItem(itemText); //kreipiasi i funkcija ir duoda ivesties texta
}

/**
 * Creates new to do item in ul list 
 */
function newToDoItem(itemText) {
  const toDoItem = document.createElement("li"); //toDOItem bus li elementas
  toDoItem.className = "toDoItem";
  const p = document.createElement("span");
  p.className = ("pText");

  let check = document.createElement("BUTTON"); //KAIP PADARYT ITEMA SU MYGTUKAIS???
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
  toDoItem.appendChild(p);
  container.appendChild(check);
  container.appendChild(remove);
  p.textContent=itemText; //li elementui priskiria ivesties teksta
  toDoItem.appendChild(container);
  toDoList.appendChild(toDoItem); //i lista iterpia ivesties teksta kaip li elementa
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

//NEW FUNCTIONS
/**
 * Empties the while list of todo items
 */
function emptyList() {
  toDoList.innerHTML = "";
  saveList();
}

function toggleToDoItemState(item) {
  item.classList.toggle("crosed");
}

function removeItem(element) {
  element.remove();
  saveList();
}

/**
 * Saves list to a memory
 */
function saveList() {
  var toDos = [];

  for (var i = 0; i < toDoList.children.length; i++) {
    var toDo = toDoList.children.item(i);
    toDos.push(toDo.innerText);
}
  localStorage.setItem("toDos", JSON.stringify(toDos));
}

/**
 * Loads list from a memory
 */
function onLoad() {
  if (localStorage.getItem("toDos") != null) {
      var toDos = JSON.parse(localStorage.getItem("toDos"));

      for (var i = 0; i < toDos.length; i++) {
          var toDo = toDos[i];
          newToDoItem(toDo);
      }
  }
}



function toggleTask(id, pEl, button) {

}

function updateTask(id, completed) {
//pakeist completed statusa local storage
}

function removeTask(id, toDoItem) {

}

function getLocalStorageItems() {

}
const addButton = document.getElementById("add-button");
const clearButton = document.getElementById("clear-button");
const saveButton = document.getElementById("save-button");
const emptyButton = document.getElementById("empty-button");
addButton.addEventListener("click", addTask);
document.addEventListener("keypress", enterPress);
const input = document.getElementById("task");
const toDoList = document.getElementById("todo-list");
//new code
//clearButton.addEventListener("click", clearCompletedToDoItems);
checkedButton.addEventListener("click", toggleToDoItemState);
saveButton.addEventListener("click", saveList);
emptyButton.addEventListener("click", emptyList); //kazkodel neveikia nors funkcija veikia:(
let addItemButton = document.getElementById('checkedButton');
document.querySelector("span.save-button").addEventListener("click", saveList);

function addTask() {
  /*alert("Add button clicked!");*/
  const itemText = input.value; //itemText priskiriamas - ivestas task
  if (itemText == ""){
    alert("No value!"); //patikrina ar ivestis ne tuscia
    return;
  }
  console.log("Works");
  console.log(input.value);
  newToDoItem(itemText); //kreipiasi i funkcija ir duoda ivesties texta
}
function newToDoItem(itemText) {
  const toDoItem = document.createElement("li"); //toDOItem bus li elementas
  toDoItem.className = "toDoItem";
    
  let check = document.createElement("BUTTON"); //KAIP PADARYT ITEMA SU MYGTUKAIS???
  check.className = "buttonInList";
  check.textContent = "Check";
  
  let remove = document.createElement('BUTTON'); //KAIP PADARYT ITEMA SU DVIEM MYGTUKAIS???
  remove.textContent = "Remove";
  remove.className = "buttonInList";
  
  toDoItem.textContent=itemText; //li elementui priskiria ivesties teksta
  toDoItem.appendChild(check);
  toDoItem.appendChild(remove);
  toDoList.appendChild(toDoItem); //i lista iterpia ivesties teksta kaip li elementa
  input.value="";
}
function enterPress (event) {
  if (event.code != "Enter"){
  return;
  }
  addTask();
}
//new functions
function clearCompletedToDoItems() {
  var completedItems = toDoList.getElementsByClassName("completed");

  while (completedItems.length > 0) {
    completedItems.item(0).remove();
  }
}
function toggleToDoItemState() {
  if (this.classList.contains("completed")) {
    this.classList.remove("completed");
  } else {
    this.classList.add("completed");
  }
}
function emptyList() {
  console.log("Works");
  var toDoItems = toDoList.children;
  while (toDoItems.length > 0) {
    toDoItems.item(0).remove();
  }
}
function saveList() {
  var toDos = [];

  for (var i = 0; i < toDoList.children.length; i++) {
    var toDo = toDoList.children.item(i);

    var toDoInfo = {
        "task": toDo.innerText,
        "completed": toDo.classList.contains("completed")
    };

    toDos.push(toDoInfo);
}
  localStorage.setItem("toDos", JSON.stringify(toDos));
}
function loadList() {
  if (localStorage.getItem("toDos") != null) {
      var toDos = JSON.parse(localStorage.getItem("toDos"));

      for (var i = 0; i < toDos.length; i++) {
          var toDo = toDos[i];
          newToDoItem(toDo.task, toDo.completed);
      }
  }
}
var addButton = document.getElementById("add-button");
addButton.addEventListener("click", addTask);
var toDoEntryBox = document.getElementById("task");
var toDoList = document.getElementById("todo-list");
function addTask() {
    /*alert("Add button clicked!");*/
    var itemText = toDoEntryBox.value;
    newToDoItem(itemText);
    toDoList.appendChild(toDoItem);
}
function newToDoItem(itemText) {
    var toDoItem = document.createElement("li");
    var toDoText = document.createTextNode(itemText);
    toDoItem.appendChild(toDoText);
    toDoList.appendChild(toDoItem);
    document.getElementById('form').reset();
}
function validateForm() {
    var x = document.forms["form"]["task"].value;
    if (x == "" || x == null) {
      alert("Name must be filled out");
      return false;
    }
  }
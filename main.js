let Item = document.querySelector("#item")
let toDoBox = document.querySelector("#to-do-box")
function addTodo(Item){
    if(Item.value.trim() == ""){
        alert("Please write something")
        Item.value = ""
    }
    else{
        let listItem = document.createElement("div");
        listItem.innerHTML = ` <p id="list" onblur="disableEdit()"  class="w-100">${Item.value}</p><span><i onclick="deleteListItem(event)"  class="fa-solid fa-trash"></i><i onclick="enableEdit(event)"  class="fa-solid fa-pen-to-square"></i></  span>`
        toDoBox.appendChild(listItem)
        Item.value = ""
    }
}
function handleKeyUp(event) {
    if (event.key === "Enter") {
      addTodo(Item);
    }
  }  
  function deleteListItem(event) {
    let listItem = event.target.closest("div");
    if (listItem) {
      listItem.remove();
    }
  }
  
  
function enableEdit(event) {
  var taskTextElement = event.target.closest("div").querySelector("#list");
  taskTextElement.contentEditable = true;
  taskTextElement.focus();

  taskTextElement.onkeydown = function(event) {
    if (event.key === "Enter") {
      disableEdit();
      // return false;
    }
  };
}

function disableEdit() {
  var taskTextElement = event.target.closest("div").querySelector("#list");
  taskTextElement.contentEditable = false;
  taskTextElement.blur();
  taskTextElement.onkeydown = null;
}

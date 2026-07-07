let todoList = [];

function addToList() {
  const newItem = document.getElementById("listItem");
  todoList.push(newItem.value);

  buildList();
  newItem.value = "";
}

function deleteItem(i) {
  todoList.splice(i, 1);

  buildList();
}

function buildList() {
  const list = document.getElementById("todoList");
  list.innerHTML = "";

  if (todoList.length > 0) {
    for (let i = 0; i < todoList.length; i++) {
      let item = document.createElement("li");
      item.innerText = todoList[i];
      list.appendChild(item);

      let deleteBtn = document.createElement("button");
      deleteBtn.innerText = "X";
      deleteBtn.addEventListener("click", function() {deleteItem(i)});
      item.appendChild(deleteBtn);
    }
  } else {
    let item = document.createElement("li");
    item.innerText = "No items in list. Please add one!";
    list.appendChild(item);
  }
}

document.getElementById("addBtn").addEventListener("click", addToList);
buildList();

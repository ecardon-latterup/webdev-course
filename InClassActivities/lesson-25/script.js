let todoList = [];

function addToList() {
  const newItem = document.getElementById("listItem").value;
  todoList.push(newItem);

  newItem.innerHTML = "";
  buildList()
}

function buildList() {
  const list = document.getElementById("todoList");
  list.innerHTML = ''

  if (todoList.length > 0) {
    for (let i = 0; i < todoList.length; i++) {
      let item = document.createElement("li");
      item.innerHTML = todoList[i];
      list.appendChild(item);
    }
  } else {
    let item = document.createElement("li");
      item.innerHTML = 'No items in list. Please add one!';
      list.appendChild(item);
  }
}

document.getElementById("addBtn").addEventListener("click", addToList);
buildList()
var todoList = [];

const item = document.querySelectorAll(".list-item");
const itemCountText = document.querySelector(".item-count");
const det = document.querySelectorAll(".delete");
const inputText = document.querySelector(".input_text");
const add = document.querySelector(".add");
const todo = document.querySelector(".todo");
const list = document.querySelector(".list");
const clear = document.querySelector(".clear");

var itemCount = item.length;
var index = 0;

eventListeners();

function eventListeners() {
  add.addEventListener("click", addTodo);
  list.addEventListener("click", detItem);
  clear.addEventListener("click", ClearTodo);
  completed.addEventListener("click", Completed);
}

function addTodo(e) {
  var newTodo = inputText.value;
  if (newTodo === "") {
    alert("bir todo giriniz!");
  } else {
    const li = document.createElement("li");
    li.innerHTML = ` 
    <input type="checkbox" class="check-input" name="" id="check">
    <label class="label" for="check-label"></label>
    <p class="list-item">${newTodo}</p>
    <p class="delete">X</p>`;

    todo.appendChild(li);
    index++;
    itemCountText.innerHTML = index;
  }
}
function detItem(e) {
  if (e.target.className == "delete") {
    e.target.parentElement.remove();
    index--;
    itemCountText.innerHTML = index;
  }
}

function ClearTodo() {
  todo.innerHTML = "";
  index = 0;
  itemCountText.innerHTML = index;
}

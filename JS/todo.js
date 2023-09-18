const todoform = document.getElementById("todo-form");
const todolist = document.getElementById("todo-list");
const todoinput = todoform.querySelector("input");

let savetodo = [];

function savelocalstroage() {
  localStorage.setItem("todos", JSON.stringify(savetodo));
}

function button(event) {
  const deletebutton = event.target.parentElement;
  deletebutton.remove();
  savetodo = savetodo.filter((todo) => todo.id !== parseInt(deletebutton.id));
  savelocalstroage();
}

function list(valueobj) {
  const createlist = document.createElement("li");
  createlist.id = valueobj.id;
  const createspan = document.createElement("span");
  createspan.innerHTML = valueobj.text;
  const createbutton = document.createElement("button");
  createbutton.innerHTML = "X";
  createbutton.addEventListener("click", button);
  createlist.appendChild(createspan);
  createlist.appendChild(createbutton);
  todolist.appendChild(createlist);
}

function todo(event) {
  event.preventDefault();
  const value = todoinput.value;
  todoinput.value = "";
  const valueobj = {
    text: value,
    id: Date.now(),
  };
  savetodo.push(valueobj);
  list(valueobj);
  savelocalstroage();
}

todoform.addEventListener("submit", todo);

// function sayhello(item) {
//   console.log("내가 적은 리스트 목록 :", item);
// }

const savetodos = localStorage.getItem("todos");
console.log(savetodos);

if (savetodos !== null) {
  const parsetodos = JSON.parse(savetodos);
  console.log(parsetodos);
  savetodo = parsetodos;
  parsetodos.forEach(list);
}

const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

let todos = [];

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  console.log(li.id);
  li.remove();
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  const button = document.createElement("button");
  span.innerText = newTodo.text;
  button.innerText = "✔";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = {
    text: todoInput.value,
    id: Date.now(),
  };
  todos.push(newTodo);
  todoInput.value = "";
  paintTodo(newTodo);
  saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem("todos");

if (savedTodos !== null) {
  // display saved todos
  const parsedTodos = JSON.parse(savedTodos);
  todos = parsedTodos;
  parsedTodos.forEach(paintTodo);
}

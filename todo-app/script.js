const formEl = document.getElementById("form");
const todoInput = document.getElementById("inputTodo");
const btnTodo = document.getElementById("btnTodo");
const todos = document.getElementById("todos");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo();
  updateLocal();
});

function addTodo(todo) {
  let todoText = todoInput.value;
  const todoEl = document.createElement("li");

  if (todo) {
    todoText = todo.text;
  }

  if (todoText) {
    todoEl.innerText = `${todoText}`;
    document.querySelector(" ul ").appendChild(todoEl);
    updateLocal();
  }

  todoEl.addEventListener("click", (e) => {
    e.preventDefault();
    todoEl.classList.toggle("completed");
    updateLocal();
  });

  todoEl.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    todoEl.remove();
    updateLocal();
  });

  todoInput.value = "";

  updateLocal();
}

const lstodo = JSON.parse(localStorage.getItem("todos"));

function updateLocal() {
  const todosEl = document.querySelectorAll("li");

  const todos = [];

  todosEl.forEach((todoEl) => {
      todos.push({
          text: todoEl.innerText,
          completed: todoEl.classList.contains("completed"),
      });
  });

  localStorage.setItem("todos", JSON.stringify(todos));
}



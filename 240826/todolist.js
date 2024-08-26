const form = document.querySelector("form");
const todoItem = document.querySelector("#todoItem");
const todos = document.querySelector(".todos");
const getLocal = () => {
  let todosBox;
  if (localStorage.getItem("todos") === null) todosBox = [];
  else todosBox = JSON.parse(localStorage.getItem("todos"));
  todosBox.forEach((usertodo) => {
    localStorage.getItem("todos");
    const userInput = form.querySelector("#todoItem");
    const newLi = document.createElement("li");
    newLi.className = "todo";
    newLi.innerHTML = `<span class="todoContent">${usertodo}</span>
          <button class="completeBtn">완료</button>
          <button class="deleteBtn">삭제</button>`;
    todos.appendChild(newLi);
  });
};

document.addEventListener("DOMContentLoaded", getLocal);
const saveLocal = (todo) => {
  let todos;
  if (localStorage.getItem("todos") === null) todos = [];
  else todos = JSON.parse(localStorage.getItem("todos"));
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
};
const addTodo = (e) => {
  e.preventDefault();
  if (todoItem.value !== "") {
    const userInput = form.querySelector("#todoItem");
    const newLi = document.createElement("li");
    newLi.className = "todo";
    newLi.innerHTML = `<span class="todoContent">${userInput.value}</span>
    <button class="completeBtn">완료</button>
    <button class="deleteBtn">삭제</button>`;
    todos.appendChild(newLi);
    saveLocal(userInput.value);
  }
  todoItem.value = "";
};

const removeLocal = (todo) => {
  let todosItem;
  if (localStorage.getItem("todos") === null) todosItem = [];
  else todosItem = JSON.parse(localStorage.getItem("todos"));

  const index = todosItem.indexof(todo.children[0].innerText);
  todosItem.splice(index, i);
  localStorage.setItem("todos", JSON.stringify(todosItem));
};

const manageTodo = (e) => {
  const whichBtton = e.target.classList[0];
  if (whichBtton === "completeBtn") {
    const todoItem = e.target.parentElement;
    todoItem.children[0].classList.toggle("completed");
  } else if (whichBtton === "deleteBtn") {
    const todoItem = e.target.parentElement;
    removeLocal(todoItem);
    todoItem.remove();
  }
};

todos.addEventListener("click", manageTodo);
form.addEventListener("submit", addTodo);

const item = {
  text: todos.value,
  id: Date.now(),
  completed: false,
};

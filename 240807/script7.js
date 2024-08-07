const tilte = document.querySelector("#title");
const author = document.querySelector("#author");
const bookList = document.querySelector("#bookList");

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const liItem = document.querySelector("li");

  liItem.innerHTML = `${tilte.value} - ${author.value} <span>삭제</span>`;

  bookList.appendChild(liItem);

  tilte.value = "";
  author.value = "";
});

const delButtons = document.querySelectorAll("span");

delButtons.forEach((delButton) => {
  delButton.addEventListener("click", function() => {
    this.parentNode.parentNode.removechild(this.parentNode);
  })
})

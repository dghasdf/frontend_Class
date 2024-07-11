const btn = document.querySelector("button");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  document.body.classList.add("dark");

  if (document.body.classList.contains("dark")) {
    btn.innerText = "라이트모드로";
  } else {
    btn.innerText = "다크모드로";
  }
});

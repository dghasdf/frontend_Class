const btn = document.querySelector("button");
btn.addEventListener("click", function () {
  const nave = document.querySelector("nav");
  this.classList.toggle("active");
  nave.classList.toggle("active");
});

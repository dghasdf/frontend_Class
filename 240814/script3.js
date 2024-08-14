// search modal
const searchBtn = document.querySelector(".fa-magnifying-glass");

searchBtn.addEventListener("click", () => {
  document.querySelector(".modal_search").classList.add("active");
});

document.querySelectorAll(".close,section").forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector(".modal_search").classList.remove("active");
  });
});

// search bar
const searchBar = document.querySelector(".search input[type='text']");
console.log(searchBar);

searchBar.addEventListener("focus", function () {
  this.parentElement.nextElementSibling.style.opacity = "1";
});
searchBar.addEventListener("blur", function () {
  this.parentElement.nextElementSibling.style.opacity = "0";
});

// accordion event
const firstContent = document.querySelectorAll(".accodion .content");
firstContent[0].style.display = "block";

const titles = document.querySelectorAll(".title");

titles.forEach((title) => {
  title.addEventListener("click", () => {
    document.querySelectorAll(".content").forEach((item) => {
      item.style.display = "none";
    });
    titles.forEach((otherTitle) => {
      if (otherTitle !== title) {
        otherTitle.classList.remove("active");
      }
    });

    let content = title.nextElementSibling;
    if (title.classList.contains("active")) {
      title.classList.remove("active");
      content.style.display = "none";
    } else {
      title.classList.add("active");
      content.style.display = "block";
    }
  });
});

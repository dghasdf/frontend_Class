let slideIndex = 0;
    const slides = document.querySelector('.slides');
    const dots = document.querySelectorAll('.dot');

    function showSlide(index) {
        if (index >= dots.length) { slideIndex = 0 }
        if (index < 0) { slideIndex = dots.length - 1 }
        slides.style.transform = 'translateX(' + (-slideIndex * 100) + '%)';
        dots.forEach(dot => dot.classList.remove('active'));
        dots[slideIndex].classList.add('active');
    }

    function changeSlide(n) {
        showSlide(slideIndex += n);
    }

    function currentSlide(n) {
        showSlide(slideIndex = n - 1);
    }

    showSlide(slideIndex);

// scroll event
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  const nav = document.querySelector("nav");
  const gnbDesktop = document.querySelector(".gnbDesktop");
  const gnbMobile = document.querySelector(".gnbMobile");
  const trigger = document.querySelectorAll(".trigger span");

  if (window.scrollY > 60) {
    header.classList.add("active");
    nav.classList.add("active");
    logo.classList.add("active");
    gnbDesktop.classList.add("active");
    gnbMobile.classList.add("active");
    trigger.forEach((bar) => {
      bar.classList.add("active");
    });
  } else {
    header.classList.remove("active");
    nav.classList.remove("active");
    logo.classList.remove("active");
    gnbDesktop.classList.remove("active");
    gnbMobile.classList.remove("active");
    trigger.forEach((bar) => {
      bar.classList.remove("active");
    });
  }
});

// toggle event
const toggleBtn = document.querySelector(".trigger");
toggleBtn.addEventListener("click", function () {
  const gnbMobile = document.querySelector(".gnbMobile");
  gnbMobile.classList.toggle("open");
  this.classList.toggle("active");
});

// searchbar trigger
const searchBar = document.querySelectorAll("ul .fa-magnifying-glass");
const searchResult = document.querySelector(".search_bar");
const closeBtn = document.querySelector(".fa-xmark");

searchBar.forEach((item) => {
  item.addEventListener("click", () => {
    searchResult.classList.add("active");
  });
});

closeBtn.addEventListener("click", () => {
  searchResult.classList.remove("active");
});

/* 글씨 타이핑 효과 */
const $txt = document.querySelector(".about_text");
const content = "안녕하세요!\n노력의 대명사\n김준영입니다 :)";
let contentIndex = 0;
let typing = function () {
  $txt.innerHTML += content[contentIndex];
  contentIndex++;
  if (content[contentIndex] === "\n") {
    $txt.innerHTML += "<br />";
    contentIndex++;
  }
  if (contentIndex > content.length) {
    $txt.textContent = "";
    contentIndex = 0;
  }
};
setInterval(typing, 300);

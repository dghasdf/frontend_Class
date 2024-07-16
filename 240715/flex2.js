// 스크롤을 내렸을 때의 이벤트
window.addEventListener("scroll", () => {
  let scroll = window.scrollY;
  console.log(scroll);
  const header = document.querySelector("header");

  if (scroll > 50) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});
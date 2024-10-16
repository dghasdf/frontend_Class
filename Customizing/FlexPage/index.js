window.addEventListener("scroll", () => {
  let scroll = window.scrollY;
  const gototop = document.querySelector(".gototop");

  if (scroll > 500) {
    gototop.classList.add("active");
  } else {
    gototop.classList.add("active");
  }
});

$(".player_container").slick({
  lazyLoad: "ondemand",
  autoplay: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 10,
});

$(".gototop .gnb a").click(function () {
  $.scrollTo(this.hash || 0, 5000);
});

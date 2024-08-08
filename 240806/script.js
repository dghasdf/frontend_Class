// window.addEventListener("load", alert("즐거운 화요일")); //load

// const overout = document.querySelectorAll(".overout");
// let i = 0;

// overout.forEach((item, index) => {
//   if (index === 0) {
//     item.addEventListener("mouseover", function () {
//       this.querySelector("p:first-of-type").innerText = "mouseover";
//       this.querySelector("p:last-of-type").innerText = ++i;
//     });
//     item.addEventListener("mouseout", function () {
//       this.querySelector("p:first-of-type").innerText = "mouseout";
//     });
//   }
//   if (index === 1) {
//     item.addEventListener("mouseover", function () {
//       this.querySelector("p:first-of-type").innerText = "mouseover";
//       this.querySelector("p:last-of-type").innerText = ++i;
//     });
//     item.addEventListener("mouseout", function () {
//       this.querySelector("p:first-of-type").innerText = "mouseout";
//     });
//   }
// });

let = o = 0;

const overoutOut = document.querySelector("div.over.overout");
overoutOut.addEventListener("mouseover", function () {
  const pItems = this.querySelector("p");
  pItems[0].innerText = "mouseover";
  pItems[3].innerText = ++o;
});

const overoutIn = document.querySelector("div.in.overout");
overoutIn.addEventListener("mouseover", function () {
  const pItems = this.querySelectorAll("p");
  pItems[0].innerText = "mouseover";
  pItems[1].innerText = ++o;
});

//mouseenter & mouseleave
let e = 0;

const overleaveOut = document.querySelector("div.over.enterleave");
overoutOut.addEventListener("mouseenter", function () {
  const pItems = this.querySelector("p");
  pItems[0].innerText = "mouseenter";
  pItems[3].innerText = ++e;
});

const overleaveIn = document.querySelector("div.in.enterleave");
overoutIn.addEventListener("mouseenter", function () {
  const pItems = this.querySelectorAll("p");
  pItems[0].innerText = "mouseenter";
  pItems[1].innerText = ++e;
});

// const main = document.querySelector("main");
// const profile = main.querySelector("main > #profile");
// const profile = document.getElementById("profile");
// const h1 = main.querySelector("h1");
// const desc = document.querySelector("#desc");
// // const user = document.querySelectorAll(".user");
// const img = document.getElementsByClassName("image");
// const h1 = document.getElementsByTagName("h1");
// console.log(h1);

//const profile = document.getElementById("profile"); = >getElementById 메로리의 효율성 극대화
// dom > id
// 객체 속성을 반드시 document로 지정하고 가야한다

//querySelectior =>전역요소의 모든 node

// console.log(user[user.length - 1]);

// user.addEventListner("click", () => {
//   console.log("click");
// });

// user.forEach((item) => {
//   item.addEventListener("click", () => {
//     console.log("cilck");
//   });
// });

//유사배열
// index,leght값이 먹힘. ex)console.log(user[0]);
// 99% 배열이 가지고 있는 속성!!!
//유사배열은 배열과 다른 1%

// const desc = document.querySelector("#desc");
// const iu = desc.querySelectorAll(".user")[0];
// console.log(iu);
// console.log(desc.textContent);

//특정 텍스트만 찾아오고 싶을때 = innextext

const title = document.querySelector("#title");

title.addEventListener("click", function () {
  this.innerText = "나의 프로필";
  this.style.backgroundColor = "#000";
  this.style.color = "#fff";
});

const pfImg = document.querySelector("#profile img");

pfImg.addEventListener("click", function () {
  this.src = "./dom/pf2.png";
});

const firstP = document.querySelector("#desc > p:first-child");
firstP.addEventListener("click", function () {
  this.innerHTML = "이름 : <b>태연</b>";
});

const secondP = document.querySelector("#desc > p:nth-child(2)");

secondP.addEventListener("click", function () {
  // this.classList.add("active");
  // if (!this.classList.contains("active")) {
  //   this.classList.add("active");
  // } else {
  //   this.classList.remove("active");
  // }
  this.classList.toggle("active");
});
//중복해서 함수를 사용하게 되는데 이럴필요 없이 화살표 함수대신 function함수를 사용한다

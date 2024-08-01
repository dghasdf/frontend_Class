// 현재 보고 있는 웹 브라우저 문서 내 버튼 하나를 만들어주세요

//그리고, 해당 버튼을 클릭할 때마다 색상이 변경되도록 해주세요.

//변경되어야 하는 색상은 white,yellow, aqua,purple
//마지막 퍼플색상 다음번 색상은 첫번째 색상이 화이트 색상으로 돌아오게끔하라.

//함수
//각각의 컬러를 배열 자료구조를 사용
//배열 내 각각의 아이템은 index값을 가지고 있다.
//0부터 시작하는 인텍스 값이 1개씩 증가해야한다.
//증감연산자 필요

// const arr = ["white", "yellow", "aqua", "purple"];

// document.body.innerHTML += `<button id=btn>click</button>`;

// const btn = document.querySelector("#btn");

// function color() {
//   console.log("white", "yellow", "aqua", "purple");
// }

// btn.addEventListener("click", color);

const color = ["white", "yellow", "aqua", "purple"];
const button = document.querySelector("button");

let i = 0;
button.addEventListener("click", () => {
  i++;
  if (i >= color.length) i = 0;
  const bodyTag = document.querySelector("body");
  bodyTag.style.backgroundColor = color[i];
});

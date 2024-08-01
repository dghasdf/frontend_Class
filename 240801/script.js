//함수 선언
//함수 매개변수 반드시 꼭 필수x
//함수를 호출할 때 매개변수의 자리에 어떤 값을 전달하고자 한다면, 인수혹은 인재값을 삽입
//인자값은 = 매개변수

// function calcsum() {
//   //매개변수 {
//   let sum = 0;
//   for (let i = 1; i <= 10; i++) {
//     sum += i;
//   }
//   console.log(`1부터 10까지 더하면 ${sum}`);
// }

// calcsum();

// 익명함수
// const calcsum = function () {
//   let sum = 0;
//   for (let i = 1; i <= 10; i++) {
//     sum += i;
//   }
//   console.log(`1부터 10까지 더하면 ${sum}`);
// };

// calcsum();

//화살표(=> : 화살표 모양이 function 키워드를 대체할 수 있도록)함수

// function calcsum() {
//   //매개변수 {
//   let sum = 0;
//   for (let i = 1; i <= 10; i++) {
//     sum += i;
//   }
// }

// calcsum(); //인자값

//화살표 함수
// const calcsum = () => {
//   let sum = 0;
//   for (let i = 1; i <= 10; i++) {
//     sum += i;
//   }
//   console.log(`1부터 10까지 더하면 ${sum}`);
// };

// calcsum();

// function sum(a, b) {
//   const result = a + b;
//   alert(`두수의 합은${result}입니다.`);
// }
// sum(1, 2);

// const num = Number(prompt("숫자를 입력하세요."));

// function calcsum(n) {
//   let sum = 0;
//   for (let i = 0; i <= n; i++) {
//     sum = +i;
//   }
//   return sum;
//   //반환하고 싶은 값 리턴씀
// }

// alert(`1부터 ${num}까지 더하면 ${calcsum(num)}입니다`);

// function multiple(a, b, c = 10) {
//   console.log(a + b + c);
// }
// multiple(2, 4);

document.body.innerHTML += `<button id="btn">click</button>`;

const button = document.querySelector("#btn");
button.addEventListener("click", function () {
  alert("클릭했습니다.");
});
//에드이벤트리스너 = 함수("인자값") = 함수가 두개 필요한데(클릭할시 무엇을이 해야할지 정해야하기때문에 ) 클릭 옆에 함수가 더 들어가야한다. 이때 이것을 콜백함수라고한다.(funtion)

// 다르게 변환시.
document.body.innerHTML += `<button id="btn">click</button>`;

const button = document.querySelector("#btn");

function display() {
  alert("클릭했습니다");
}

button.addEventListener("click", display);

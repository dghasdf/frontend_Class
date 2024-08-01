//사용자로부터 수학점수를 받으세요.
//사용자로부터 국어점수 "

//함수를 사용해서 수학 + 국어 점수의 평균점수를 계산하여 알림창에출력

// const num1 = Number(prompt("수학점수?"));
// const num2 = Number(prompt("국어점수?"));

// function sum(num1, num2) {
//   const result = (num1 + num2) / 2;
//   alert(`두수의 평균은${result}입니다.`);
// }
// sum(num1, num2);

const arr = ["수학", "국어"]; //  prompt 여러번쓰지않기 위해 arr라는 배열 변수를 작성

function testAvg() { //해당 함수를 이용해 아래내용을 불러온다.
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += Number(prompt(`${arr}점수는?`));
  }

  let avg = sum / arr.length;
  return avg;
}

alert(`평균점수는 ${testAvg()}점 입니다`);

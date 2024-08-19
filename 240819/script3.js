// const numbers = [1, 2, 3, 4, 5];
// const newMubers = number.map((number) => number * 2);

// console.log(newMubers);
// console.log(numbers);

// const newMubers01 = numbers.map((number, index) => index + number * 3);

// console.log(newMubers01);

// const scores = [90, 35, 64, 88, 45, 92];

// const highScores = scores.filter((score) => score >= 85);
// console.log(highScores);
// console.log(scores);

const numbers = [1, 2, 3, 4, 5];

let result = numbers.reduce((total, current) => total + current, 0);

console.log(result);
//total : 연산된 값을 누적 및 저장해놓은 변수의 역할

// TS = 고차함수

//명령형 & 선언형 프로그래밍
//저급함수
//고급함수 =>

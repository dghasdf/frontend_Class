// const displayA = () => {
//   console.log("A");
// };

// const displayB = () => {
//   console.log("B");
// };
// const displayC = () => {
//   console.log("C");
// };

// displayA();
// displayB();
// displayC();

// 멀티스레드 = 비동기 방식인것처럼 변환

// const displayA = () => {
//   console.log("A");
// };

// const displayB = () => {
//   setTimeout(()=>  console.log("B"), 2000)
// };
// const displayC = () => {
//   console.log("C");
// };

// displayA();
// displayB();
// displayC();

const displayA = () => {
  console.log("A");
};

const displayB = (callback) => {
  setTimeout(() => {
    callback();
    console.log("B");
  }, 2000);
};
const displayC = () => {
  console.log("C");
};

displayA();
displayB(displayC);

//자바스크립트는 싱글스레드 언어지만 동기처리 방식 처리
//콜백함수라는 것을 이용하여 멀티스레드 언어인 것 처럼 비동기처리로 가능
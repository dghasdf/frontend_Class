// const displayHello = () => {

// };

// displayHello();
// const displayHello = async () => {
//   console.log(displayHello);
// };
// displo(displayHello());

// const whatsYourFavorite = () => {
//   const fav = "Javascript";
//   return new Promise((resolve, reject) => resolve(fav));
// };

// const displaySubject = () => {
//   return new Promise((resolve, reject) => resolve(`Hello,       ${subject}`));
// };

// whatsYourFavorite().then(displaysubject).then(console.log);

// async => 함수
// await => 예악어(+특정 요소의 실ㅇ행을 기다렸다가 진행되도록 하게 해주는 예약어 )
// await 예약어는 절대로 혼자서 독립적으로 사용 x
// async 함수 내부에서만 반드시 사용

const whatsYourFavorite = async () => {
  const fav = "Javascript";
  return fav;
};

const displaysubject = async (subject) => {
  return `Hello, ${subject}`;
};

const init = async () => {
  const response = await whatsYourFavorite();
  const result = await displaysubject(response);
  console.log(result);
};

init();

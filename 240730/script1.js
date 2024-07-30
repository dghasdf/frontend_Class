//사용자에게 화씨온도를 받아서 콘솔창에서 해당 온도를 섭씨온도로 변환했을 때의 값을 출력해주세요.

//섭씨온도  = (화씨온도 -32) / 1.8

const fah = parseFloat(prompt("화씨온도를 입력하세요", "ex.45"));
// parseFloat = 소수점
const cell = ((fah - 32) / 1.8).toFixed(2);
//toFixed = 소수점둘째자리까지
console.log(cell);

alert(`화씨온도${fah}도는 섭씨온도 ${cell}도 입니다!`);
//템플릿 이터러블 문법 ``=>잇어야함

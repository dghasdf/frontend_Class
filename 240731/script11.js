//사용자로부터 어떤 숫자를 받습니다
//사용자에게 받은 숫자가 "소수이면"
//바탕화면에 "0"숫자는 소수입니다.
// 만약 아니라면 "0"숫자는 소수가 아닙니다.
//소수 = 소수점을 가지고 x
//1과 자기 자신만으로 나눠질수 있는숫자
//1은 소수가 아닙니다.

const number = Number(prompt("숫자를 입력하시오."));

let isprime;
isprime = true;

if (number === 1) {
  document.write(`1은 소수도 합성수도 아닙니다.`);
} else if (number === 2) {
  document.write(`2는 소수입니다`);
} else {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      isprime = true;
      break;
    } else {
      isprime = false;
      break;
    }
  }
  if (isprime) {
    document.write(`${number}는 소수입니다.`);
  } else {
    document.write(`${number}는 소수가 아닙니다.`);
  }
}

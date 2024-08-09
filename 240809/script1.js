// Math 수학객체 => 함수!!
// max 안에들어가는 인자값중 가장 큰 값을 출력해줌

// let num = 2.1234;
// let num01 = 2.8765;

// let maxNum = Math.max(10, 5, 8, 30);
// let minNum = Math.min(10, 5, 8, 30);
// let roundNum = Math.round(num);
// let floorNum = Math.floor(num01);
// let ceilNum = Math.ceil(num);
// let rndNum = Math.random(); //* 45;
// let piNum = Math.PI;
//무조건 1미만의 실수값을 난수 형태로 출력해줌 *난수 = 규칙이 정해져있는 값
// 소숫점 없애는 기능 : floor, * 45로 인해 랜덤 중 절대 45는 안나옴

// document.write(maxNum, "<br/>");
// document.write(minNum, "<br/>");
// document.write(roundNum, "<br/>");
// document.write(floorNum, "<br/>");
// document.write(ceilNum, "<br/>");
// document.write(rndNum, "<br/>");
// document.write(piNum, "<br/>");

const character = document.querySelector(".charact");

let degree = 0;

const loop = () => {
  const rotation = (degree * Math.PI) / 180;
  const targetX = window.innerWidth / 2 - 50 + 100 * Math.cos(rotation);
  const targetY = window.innerHeight / 2 - 50 + 100 * Math.sin(rotation);

  character.style.left = `${targetX}px`;
  character.style.top = `${targetY}px`;

  degree += 1;
  requestAnimationFrame(loop);
  // character.style.top = console.log(rotation);
};

loop();

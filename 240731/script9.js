//자바스크립트 for문을 활용해서 구구단 2~9단까지 출력

// for (let i = 2; (i = 10); i++) {
//   if (let) if (i % 2 === 0) document.write(i, "</br>");
// }

for (let a = 2; a <= 9; a++) {
  document.write(`<h2>구구단 ${a}단</h2>`);
  for (let b = 1; b <= 9; b++) {
    document.write(`${a} x {b}=${a * b}`);
    document.write("</br>");
  }
}

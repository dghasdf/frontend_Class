// for (let a = 1; a <= 5; a++) {
//   document.write(`<tr>${a+5} </br></tr>`);
// }

let num = 1;
let t = `<table border=1>`;
for (let i = 1; i <= 5; i++) {
  t += `<tr>`;
  for (let k = 1; k <= 5; i++) {
    t += `<td>${num}</td>`;
    num++;
  }
  t += `</tr>`;
}

t += `<table>`;

document.write(t);

const students = ["David", "Jullien", "Peter"];

// for(초기값; 범위; 증강문) {

// }

// for (let i = 0; i < students.length; i++) {
//   console.log(students[i]);
// }

// students.forEach((student, index) => {
//   console.log(`${index + 1} 번째 학생 : ${student} in [${arr}]`);
// });

// for (let student of students) {
//   console.log(student);
// }

// const theBook = {
//   title: "javascript",
//   pages: 250,
//   published: "2024-07-31",
// };

// for (let key in theBook) {
//   console.log(`${key} : ${theBook[key]}`);
// }

let stars = Number(prompt("별의갯수입력"));

// while (stars > 0) {
//   document.write("*");
//   stars--;
// }

do {
  document.open("*");
  stars--;
} while (stars > 0);

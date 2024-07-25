const output = document.querySelector("#output");

const arr = [2, 1, 3, 10];

// arr.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   }
//   if (a == b) {
//     return 0;
//   }
//   if (a < b) {
//     return -1;
//   }
// });

//내림차순
arr = sort((a, b) => {
  return a - b;
});

//오름차순
arr = sort((a, b) => {
  return b - a;
});
const arr1 = (arr = arr.map((item) => item * 2));

//

output.innertext = arr1;

//jsx

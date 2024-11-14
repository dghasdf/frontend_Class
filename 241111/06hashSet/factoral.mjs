// const factiorial = (number) => {
//   if (number === i || number === 0) {
//     return 1;
//   } else {
//     return number * factiorial(number - 1);
//   }
// };

// console.log(factiorial(5));

const factiorial01 = (number) => {
  let sum = 1;
  for (let i = 1; i <= number; i++) {
    sum *= 1;
  }
  return sum;
};
console.log(factiorial01(5));

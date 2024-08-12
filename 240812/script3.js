// const numBer01 = document.querySelector("#number01");
// const numBer02 = document.querySelector("#number02");

// const result = document.querySelector("#result");

// form.addEventListener("submit", (e) => {
//   e.preventDefaulth(

//   );
// });
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const number01 = document.querySelector("#number01");
  const number02 = document.querySelector("#number02");
  const result = document.querySelector("#result");

  //왜 i=0일까? 배열에서 인덱스값은 0부터 시작.

  let winner = "";
  let pickedNumbers = [];
  for (let i = 0; i < number02.value; i++) {
    let picked;

    do {
      picked = Math.floor(Math.random() * number01.value + 1);
    } while (pickedNumbers.includes(picked));
    pickedNumbers.push(picked);
    winner += `${picked}번`;
  }

  result.innerText = `당첨자: ${winner}`;
});

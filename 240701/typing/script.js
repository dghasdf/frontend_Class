const content = "Hi!😀 I'm jun, \n Front-End Developer.\n Welcome to my world";

const text =
  document.querySelector(".text"); /*텍스트라는 변수를 찾아와서 담아올거야. */

let i = 0;

const typing = () => {
  let txt = content[i++];
  text.innerHTML += txt === "\n" ? "<br/>" : txt;

  if (i > content.length) {
    text.textContent = "";
    i = 0;
  }
};

setInterval(typing, 250);

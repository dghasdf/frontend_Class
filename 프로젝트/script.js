/* 글씨 타이핑 효과 */
const $txt = document.querySelector(".about_text");
const content = "안녕하세요 :)";
let contentIndex = 0;
let typing = function () {
  $txt.innerHTML += content[contentIndex];
  contentIndex++;
  if (content[contentIndex] === "\n") {
    $txt.innerHTML += "<br />";
    contentIndex++;
  }
  if (contentIndex > content.length) {
    $txt.textContent = "";
    contentIndex = 0;
  }
};
setInterval(typing, 200);

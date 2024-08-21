const phoneNumber = document.querySelector('input[type="text"]');
const warningMessage = document.querySelector("#warningMessage");

phoneNumber.addEventListener("keyup", function () {
  const numberValue = this.value;
  const triNumber = numberValue.replace(/-/g, "");
  //010-9109-8419의 대시의 관한 내용

  const regexp = /^[0]{0-9}{9,10}$/.test(triNumber);

  if (regexp === false) {
    warningMessage.innerText = "전화번호의 형식의 맞춰서 입력해주세요.";
  } else warningMessage.innerText = "";
});

//11자리 수의 번호 or 10자리 수의 번호
// 최대자리 8,9

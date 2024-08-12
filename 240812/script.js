window.onload = function () {
  let randomNumber = Math.floor(Math.random() * 5) + 1;
};
//js에서 백그라운드 가져오기
//백그라운드는 window에서 불러와야지만 window는 생략가능
document.body.style.backgroundImage = `url(./img/bg-${randomNumber}.jpg)`;

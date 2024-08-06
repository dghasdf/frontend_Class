const button = document.querySelector("#open");
const modalBox = document.querySelector("#modal-box");

button.addEventListener("click", function () {
  this.classList.add("btnActive");
  modalBox.classList.add("active");
});

const closeButton = document.querySelector("#profile > Button");

closeButton.addEventListener("click", function () {
  this.classList.remove("btnActive");
  modalBox.classList.remove("active");
});

//1.최초에 보여줘야하는 ui 디자인
//2. 모달창이 오픈되었을 때에 보여줘야하는 ui디자인

//3. js 활

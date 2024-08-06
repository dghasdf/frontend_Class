const box = document.querySelector("#box");

box.addEventListener("click", (event) => {
  alert(`이벤트발생위치${event.pageX}, ${event.pageY}`);
});

// 아래 id 및 pw는 a사용자의 id & pw입니다.
// 1. 사용자로부터 id 및 pw 정보값을 순차적으로 받습니다
// 2. 사용자가 입력한 id값이 위에 저장된 id와 일치하면 pw값을 받을 수 있는 단계로 넘어간다
//만약 일치하지 않는다는 알림창을 띄워줍니다.
//3. pw값을 입력하는 단계에 도착해서 역시 pw가 일치하면 사용자님 반갑습니다 라는 알림창이 나오게끔 해준다. 만약 pw가 일치하지않는다면 pw값이 일치하지 않습니다 라는 알림창을 띄워 줍니다.

// let = login;
// for (logiin = 0; login < 1; login++);
// const result = prompt("id,pw값 순으로 입력");

const userId = prompt("id값을 입력하세요");

const id = "ezen";
const pw = 1234;

if (id === userId) {
  const userPw = Number(prompt("당신의 비밀번호는?"));
  if (pw === userPw) {
    alert(`${userId}님, 다시와주셔서 감사합니다`);
  } else {
    alert("비밀번호가 일치하지않습니다.");
    location.reload();
    //다시 창뜨게 만들어줌
  }
} else {
  alert("id가 옳바르지 않습니다.");
  location.reload();
}

// if (id === "ezen") {
// } else if (id !== "") {
//   alert("id가 일치하지않습니다.");
// } else if (pw === 1234) {
// } else {
//   alert("pw값이 일치하지않습니다.");
// }

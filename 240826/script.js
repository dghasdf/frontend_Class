//저장공간

//setItem(key, value)
//getItem(key) = 해당되는 아이템을 가져옴
//removeItem(key) = 해당되는 아이템을 삭제 및 제거
//clear() = 모든 것을 리셋(?)삭제

let students = ["kim", "Lee", "park"];
localStorage.setItem("students", JSON.stringify(students));
// localStorage.setItem("student", students);
//로컬스토리지에 키값과 벨류값 저장 = 웹페이지에 애플리케이션에서 확인
// JSON.stringify =문자열로 있는 배열값을 불러옴
let localData;
if (localStorage.getItem("students") === null) localData = [];
//키값이 존재하지않으면 로컬데이터 내용을 사용해라.
else localData = JSON.parse(localStorage.getItem("students"));
//JSON.parse= 로컬스토리지에 있는 값을 불러온다.

localData.push("choi");
//로컬데이터에 내용 추가

console.log(localData);

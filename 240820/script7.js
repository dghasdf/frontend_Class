// 곰 18
// 여우 27
// 사자 32
// 얼룩말 41
// 기린56
const userDataList = [
  { name: "곰", age: 18 },
  { name: "여우", age: 27 },
  { name: "사자", age: 32 },
  { name: "얼룩말", age: 41 },
  { name: "기린", age: 56 },
];

const buttons = document.querySelectorAll(".button");

const updataList = (filteredList) => {
  let listHTML="";
  filteredList.forEach((data) => {
    listHTML += `<li>${data.name} : ${data.age}</li>`;
  });
  document.querySelector(".user_list").innerHTML =  
};

const onclickButton = (e) => {
  const targetAge = e.target.dataset.age;
  const filteredList = userDataList.filter((data) => data.age >= targetAge);
  updataList(FileList);
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    onclickButton(e);
  });
});

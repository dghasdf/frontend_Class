const result = document.querySelector("#result");

const member1 = ["Node", "React"];
const member2 = ["Css", "Javascript", "React"];
const member3 = ["Javascript", "React"];

const subjects = [...member1, ...member2, ...member3];

const resultList = new Set();

subjects.forEach((subjects) => {
  resultList.add(subjects);
});

console.log(resultList);

result.innerHTML = `
<ul>
${[...resultList].map((subject) => `<li>${subject}</li>`).join("")}
  </ul>
`;

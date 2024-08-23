// const xhr = new XMLHttpRequest();
// xhr.open("GET", "index.json");
// xhr.send();

// const renderHTML = (students) => {
//   let output = "";

//   for (let student of students) {
//     output += `
//     <h2>${student.name}</h2>
//     <ul>
//     <li>전공 : ${student.major}</li>
//     <li>전공 : ${student.grade}</li>
//     </ul>
//     `;
//   }
//   document.querySelector("#result").innerHTML = output;
// };

// xhr.onreadystatechange = () => {
//   if (xhr.readyState === 4 && xhr.status === 200) {
//     const students = JSON.parse(xhr.responseText);
//     renderHTML(students);
//   }
// };
fetch("index.json")
  .then((Response) => Response.json())
  .then((json) => {
    let output = "";
    json.forEach((student) => {
      output += `
    <h2> ${studet.name}</h2>
    <ul>
    <li>전공학과 : ${(student, major)} </li>
    <li>학년 : ${student.grade}</li>
    </ul>  
    `;
    });
    document.querySelector("#result").innerHTML = output;
  })
  .catch((err) => console.log(err));

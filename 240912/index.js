// const fruit = "apple";

// switch (fruit) {
//   case "apple":
//     console.log("사과");
//     break;
// }

// 2. 오브젝트 생성 및 온점 표기법 / 대괄호 표기법
// object
// let objA = {};
// objA.numA = 1;
// objA["numB"] = 2;
// console.log(objA);

// let objB = new Object();

// console.log(objB);
// console.log(objA.numA);

// 중요도 높음 object.keys 배열변호나
// const person = {
//   name: "David",
//   age: 20,
//   location: "Seoul",
// };
// // 객체 안에 있는 key값을 배열로 반환
// const keyArr = Object.keys(person);
// console.log(keyArr);

// keyArr.forEach((item) => {
//   let value = person[item];
//   console.log(item, value);
// });

// 3. 구조분의 할당
// const testO = {
//   name: "David",
//   age: 20,
//   skill: "js",
// };

// // const name = testO.name;
// // const age = testO.age;
// // const skill = testO.skill;
// // 이렇게 하기엔 너무 번거로움 그러기에 구조분의할당을 한다. 이에 따른 조건
// const { name, age, skill } = testO;

// console.log(name, age, skill);

// 4. 단락회로평가
// const calcA = () => {
//   console.log("A");
//   return false;
// };

// const calcB = () => {
//   console.log("B");
//   return true;
// };

// console.log(calcA() && calcB());

// console.log(calcA() || calcB());
// // react는 기본적으로 브라우저를 통해서앱을 여는 순간 => 컴포넌트가 무조건 마운트
// // 가상돔을 만들기 위해 마운트 1회 실행
// // => 영화 데이터를 찾아오도록하는 fetch()
// // 정상적으로 fetch()를 통해서 불러오는 영화 api 데이터를 출력하지 못함

// // 찾아온 영화데이터를 가지고 약 3000픽셀 높이값을 가지고 있는 브라우저 화면을 채워야하는 상황 => 20개

// // 로딩 스피너
// // console.log(moveData && data.title);

// 5. 스프레드 연산자
// const arrA = [1, 2, 3];
// const arrB = [4, 5, 6];

// const arrC = [arrA, arrB];
// const arrE = [...arrA, ...arrB];
// const arrD = [
//   [1, 2, 3],
//   [4, 5, 6],
// ];

// console.log(arrC);
// console.log(arrE);

// const objA = {
//   a: 1,
//   b: 2,
// };

// const objB = { c: 3 };

// const objC = {
//   ...objA,
// };

// console.log(objC);

// 배열 메서드 특집
let food = ["짜장면", "피자", "치킨"];
// const newLength = food.push("탕수육");

// console.log(food, newLength);
// const removedItem = food.pop();
// console.log(removedItem);
// console.log(food);
// const newLength = food.unshift("갈비찜");
// console.log(food, newLength);
// const removedItem = food.shift();
// console.log(removedItem);
// console.log(food);
// const sliced = food.slice(0, 2);
// console.log(sliced);

// const slidced = food.slice(1);
// console.log(sliced)

// const arrA = [1, 2];
// const arrB = [3, 4];

// const arrC = arrA.concat(arrB);
// console.log(arrC);

// console.log(food.includes("피자"));

// const arr = [
//   { name: "david" },
//   { name: "martin" },
//   { name: "reneo" },
//   { name: "juliet" },
// ];

// const element = arr.find((item) => item.name === "david");
// console.log(element);

const arr = [
  { name: "슛돌이", hobby: "축구" },
  { name: "통키", hobby: "피구" },
  { name: "강소국", hobby: "야구" },
  { name: "태백산", hobby: "피구" },
];

// const filterdArr = arr.filter((ite) => hobby === "피구");

// console.log(filterdArr);
// console.log(arr);

// const newArr = arr.map((item) => item.name);

// console.log(newArr);
// console.log(arr);

// const arr1 = [10, 5, 3];
// // arr1.sort(a - b)
// // console.log(arr1)
// const compare = (a, b) => {
//   // if (a > b) return 1;
//   // else if (a < b) return -1;
//   // else return 0;
//   a - b;
// };

// arr1.sort(compare);
// console.log(arr1);

// console.log(food.join("-"));

const arr3 = [1, 2, 3, 4, 5];
const result = arr3.reduce((acc, item) => acc + item, 0);

console.log(result);
